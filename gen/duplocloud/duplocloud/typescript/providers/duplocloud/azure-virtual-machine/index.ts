// https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/azure_virtual_machine
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AzureVirtualMachineConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specify domain service provided by Microsoft Azure for managing identities and access in the cloud. Valid values are `aadjoin` or `addsjoin`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/azure_virtual_machine#ad_domain_type AzureVirtualMachine#ad_domain_type}
  */
  readonly adDomainType?: string;
  /**
  * The password associated with the local administrator account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/azure_virtual_machine#admin_password AzureVirtualMachine#admin_password}
  */
  readonly adminPassword?: string;
  /**
  * Specifies the name of the local administrator account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/azure_virtual_machine#admin_username AzureVirtualMachine#admin_username}
  */
  readonly adminUsername: string;
  /**
  * The numeric ID of the container agent pool that this host is added to.
  * 
  *  - 0: Linux Docker/Native
  * - 5: Docker Windows Defaults to `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/azure_virtual_machine#agent_platform AzureVirtualMachine#agent_platform}
  */
  readonly agentPlatform?: number;
  /**
  * Whether or not to allocate a public IP. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/azure_virtual_machine#allocated_public_ip AzureVirtualMachine#allocated_public_ip}
  */
  readonly allocatedPublicIp?: boolean | cdktf.IResolvable;
  /**
  * Specify availability set id to which virtual machine should be added to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/azure_virtual_machine#availability_set_id AzureVirtualMachine#availability_set_id}
  */
  readonly availabilitySetId?: string;
  /**
  * Base64 encoded user data to associated with the host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/azure_virtual_machine#base64_user_data AzureVirtualMachine#base64_user_data}
  */
  readonly base64UserData?: string;
  /**
  * Specifies the [size of the Virtual Machine](https://docs.microsoft.com/azure/virtual-machines/sizes-general). See also [Azure VM Naming Conventions](https://docs.microsoft.com/azure/virtual-machines/vm-naming-conventions).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/azure_virtual_machine#capacity AzureVirtualMachine#capacity}
  */
  readonly capacity: string;
  /**
  * disk control types refer to the different levels of management and performance control provided for disks attached to virtual machines (VMs)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/azure_virtual_machine#disk_control_type AzureVirtualMachine#disk_control_type}
  */
  readonly diskControlType?: string;
  /**
  * Specifies the size of the OS Disk in gigabytes Defaults to `128`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/azure_virtual_machine#disk_size_gb AzureVirtualMachine#disk_size_gb}
  */
  readonly diskSizeGb?: number;
  /**
  * Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/azure_virtual_machine#enable_encrypt_at_host AzureVirtualMachine#enable_encrypt_at_host}
  */
  readonly enableEncryptAtHost?: boolean | cdktf.IResolvable;
  /**
  * Enable log analytics on virtual machine. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/azure_virtual_machine#enable_log_analytics AzureVirtualMachine#enable_log_analytics}
  */
  readonly enableLogAnalytics?: boolean | cdktf.IResolvable;
  /**
  * Specify to enable Secure Boot for your VM. Used with security_type=TrustedLaunch Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/azure_virtual_machine#enable_security_boot AzureVirtualMachine#enable_security_boot}
  */
  readonly enableSecurityBoot?: boolean | cdktf.IResolvable;
  /**
  * Specify to enable virtual Trusted Platform Module (vTPM) for Azure VM. Used with security_type=TrustedLaunch Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/azure_virtual_machine#enable_vtpm AzureVirtualMachine#enable_vtpm}
  */
  readonly enableVtpm?: boolean | cdktf.IResolvable;
  /**
  * Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/azure_virtual_machine#encrypt_disk AzureVirtualMachine#encrypt_disk}
  */
  readonly encryptDisk?: boolean | cdktf.IResolvable;
  /**
  * The short name of the host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/azure_virtual_machine#friendly_name AzureVirtualMachine#friendly_name}
  */
  readonly friendlyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/azure_virtual_machine#id AzureVirtualMachine#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The Image ID to use to create virtual machine. Provide id as semicolon separated string with sequence of sku, publisher and offer. For example, 16.04-LTS;Canonical;UbuntuServe
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/azure_virtual_machine#image_id AzureVirtualMachine#image_id}
  */
  readonly imageId: string;
  /**
  * Bootstrap an AKS host with Duplo's user data, prepending it to custom user data if also provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/azure_virtual_machine#install_duplo_native_agent AzureVirtualMachine#install_duplo_native_agent}
  */
  readonly installDuploNativeAgent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/azure_virtual_machine#is_minion AzureVirtualMachine#is_minion}
  */
  readonly isMinion?: boolean | cdktf.IResolvable;
  /**
  * Join a Windows Server virtual machine to an Azure Active Directory Domain Services. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/azure_virtual_machine#join_domain AzureVirtualMachine#join_domain}
  */
  readonly joinDomain?: boolean | cdktf.IResolvable;
  /**
  * Specifies the type of managed disk to create. Possible values are either `Standard_LRS`, `StandardSSD_LRS`, `Premium_LRS`, `PremiumV2_LRS`, `Premium_ZRS`, `StandardSSD_ZRS` or `UltraSSD_LRS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/azure_virtual_machine#os_disk_type AzureVirtualMachine#os_disk_type}
  */
  readonly osDiskType?: string;
  /**
  * Specify "Standard" or "TrustedLaunch" security type. Defaults to "Standard". 
  * 			Use TrustedLaunch for the security of "Generation 2" virtual machines (VMs). 
  * 			[Supported Sizes](https://learn.microsoft.com/en-us/azure/virtual-machines/trusted-launch#virtual-machines-sizes)
  * 			 Defaults to `Standard`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/azure_virtual_machine#security_type AzureVirtualMachine#security_type}
  */
  readonly securityType?: string;
  /**
  * Subnet ID which should be associated with the Virtual Machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/azure_virtual_machine#subnet_id AzureVirtualMachine#subnet_id}
  */
  readonly subnetId: string;
  /**
  * The GUID of the tenant that the host will be created in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/azure_virtual_machine#tenant_id AzureVirtualMachine#tenant_id}
  */
  readonly tenantId: string;
  /**
  * Specifies the time zone of the virtual machine, [the possible values are defined here](https://jackstromberg.com/2017/01/list-of-time-zones-consumed-by-azure/).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/azure_virtual_machine#timezone AzureVirtualMachine#timezone}
  */
  readonly timezone?: string;
  /**
  * Whether or not to wait until azure virtual machine to be ready, after creation. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/azure_virtual_machine#wait_until_ready AzureVirtualMachine#wait_until_ready}
  */
  readonly waitUntilReady?: boolean | cdktf.IResolvable;
  /**
  * minion_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/azure_virtual_machine#minion_tags AzureVirtualMachine#minion_tags}
  */
  readonly minionTags?: AzureVirtualMachineMinionTags[] | cdktf.IResolvable;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/azure_virtual_machine#tags AzureVirtualMachine#tags}
  */
  readonly tags?: AzureVirtualMachineTags[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/azure_virtual_machine#timeouts AzureVirtualMachine#timeouts}
  */
  readonly timeouts?: AzureVirtualMachineTimeouts;
  /**
  * volume block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/azure_virtual_machine#volume AzureVirtualMachine#volume}
  */
  readonly volume?: AzureVirtualMachineVolume[] | cdktf.IResolvable;
}
export interface AzureVirtualMachineMinionTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/azure_virtual_machine#key AzureVirtualMachine#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/azure_virtual_machine#value AzureVirtualMachine#value}
  */
  readonly value: string;
}

export function azureVirtualMachineMinionTagsToTerraform(struct?: AzureVirtualMachineMinionTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function azureVirtualMachineMinionTagsToHclTerraform(struct?: AzureVirtualMachineMinionTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVirtualMachineMinionTagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AzureVirtualMachineMinionTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVirtualMachineMinionTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class AzureVirtualMachineMinionTagsList extends cdktf.ComplexList {
  public internalValue? : AzureVirtualMachineMinionTags[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): AzureVirtualMachineMinionTagsOutputReference {
    return new AzureVirtualMachineMinionTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AzureVirtualMachineTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/azure_virtual_machine#key AzureVirtualMachine#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/azure_virtual_machine#value AzureVirtualMachine#value}
  */
  readonly value: string;
}

export function azureVirtualMachineTagsToTerraform(struct?: AzureVirtualMachineTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function azureVirtualMachineTagsToHclTerraform(struct?: AzureVirtualMachineTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVirtualMachineTagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AzureVirtualMachineTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVirtualMachineTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class AzureVirtualMachineTagsList extends cdktf.ComplexList {
  public internalValue? : AzureVirtualMachineTags[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): AzureVirtualMachineTagsOutputReference {
    return new AzureVirtualMachineTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AzureVirtualMachineTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/azure_virtual_machine#create AzureVirtualMachine#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/azure_virtual_machine#delete AzureVirtualMachine#delete}
  */
  readonly delete?: string;
}

export function azureVirtualMachineTimeoutsToTerraform(struct?: AzureVirtualMachineTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function azureVirtualMachineTimeoutsToHclTerraform(struct?: AzureVirtualMachineTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVirtualMachineTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AzureVirtualMachineTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVirtualMachineTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}
export interface AzureVirtualMachineVolume {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/azure_virtual_machine#iops AzureVirtualMachine#iops}
  */
  readonly iops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/azure_virtual_machine#name AzureVirtualMachine#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/azure_virtual_machine#size AzureVirtualMachine#size}
  */
  readonly size?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/azure_virtual_machine#volume_id AzureVirtualMachine#volume_id}
  */
  readonly volumeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/azure_virtual_machine#volume_type AzureVirtualMachine#volume_type}
  */
  readonly volumeType?: string;
}

export function azureVirtualMachineVolumeToTerraform(struct?: AzureVirtualMachineVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iops: cdktf.numberToTerraform(struct!.iops),
    name: cdktf.stringToTerraform(struct!.name),
    size: cdktf.numberToTerraform(struct!.size),
    volume_id: cdktf.stringToTerraform(struct!.volumeId),
    volume_type: cdktf.stringToTerraform(struct!.volumeType),
  }
}


export function azureVirtualMachineVolumeToHclTerraform(struct?: AzureVirtualMachineVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    iops: {
      value: cdktf.numberToHclTerraform(struct!.iops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    volume_id: {
      value: cdktf.stringToHclTerraform(struct!.volumeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_type: {
      value: cdktf.stringToHclTerraform(struct!.volumeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVirtualMachineVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AzureVirtualMachineVolume | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iops !== undefined) {
      hasAnyValues = true;
      internalValueResult.iops = this._iops;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._volumeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeId = this._volumeId;
    }
    if (this._volumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeType = this._volumeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVirtualMachineVolume | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._iops = undefined;
      this._name = undefined;
      this._size = undefined;
      this._volumeId = undefined;
      this._volumeType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._iops = value.iops;
      this._name = value.name;
      this._size = value.size;
      this._volumeId = value.volumeId;
      this._volumeType = value.volumeType;
    }
  }

  // iops - computed: true, optional: true, required: false
  private _iops?: number; 
  public get iops() {
    return this.getNumberAttribute('iops');
  }
  public set iops(value: number) {
    this._iops = value;
  }
  public resetIops() {
    this._iops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iopsInput() {
    return this._iops;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // size - computed: true, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // volume_id - computed: true, optional: true, required: false
  private _volumeId?: string; 
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }
  public set volumeId(value: string) {
    this._volumeId = value;
  }
  public resetVolumeId() {
    this._volumeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIdInput() {
    return this._volumeId;
  }

  // volume_type - computed: true, optional: true, required: false
  private _volumeType?: string; 
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
  public set volumeType(value: string) {
    this._volumeType = value;
  }
  public resetVolumeType() {
    this._volumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeTypeInput() {
    return this._volumeType;
  }
}

export class AzureVirtualMachineVolumeList extends cdktf.ComplexList {
  public internalValue? : AzureVirtualMachineVolume[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): AzureVirtualMachineVolumeOutputReference {
    return new AzureVirtualMachineVolumeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/azure_virtual_machine duplocloud_azure_virtual_machine}
*/
export class AzureVirtualMachine extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "duplocloud_azure_virtual_machine";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AzureVirtualMachine resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AzureVirtualMachine to import
  * @param importFromId The id of the existing AzureVirtualMachine that should be imported. Refer to the {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/azure_virtual_machine#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AzureVirtualMachine to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "duplocloud_azure_virtual_machine", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/azure_virtual_machine duplocloud_azure_virtual_machine} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AzureVirtualMachineConfig
  */
  public constructor(scope: Construct, id: string, config: AzureVirtualMachineConfig) {
    super(scope, id, {
      terraformResourceType: 'duplocloud_azure_virtual_machine',
      terraformGeneratorMetadata: {
        providerName: 'duplocloud',
        providerVersion: '0.11.29',
        providerVersionConstraint: '0.11.29'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adDomainType = config.adDomainType;
    this._adminPassword = config.adminPassword;
    this._adminUsername = config.adminUsername;
    this._agentPlatform = config.agentPlatform;
    this._allocatedPublicIp = config.allocatedPublicIp;
    this._availabilitySetId = config.availabilitySetId;
    this._base64UserData = config.base64UserData;
    this._capacity = config.capacity;
    this._diskControlType = config.diskControlType;
    this._diskSizeGb = config.diskSizeGb;
    this._enableEncryptAtHost = config.enableEncryptAtHost;
    this._enableLogAnalytics = config.enableLogAnalytics;
    this._enableSecurityBoot = config.enableSecurityBoot;
    this._enableVtpm = config.enableVtpm;
    this._encryptDisk = config.encryptDisk;
    this._friendlyName = config.friendlyName;
    this._id = config.id;
    this._imageId = config.imageId;
    this._installDuploNativeAgent = config.installDuploNativeAgent;
    this._isMinion = config.isMinion;
    this._joinDomain = config.joinDomain;
    this._osDiskType = config.osDiskType;
    this._securityType = config.securityType;
    this._subnetId = config.subnetId;
    this._tenantId = config.tenantId;
    this._timezone = config.timezone;
    this._waitUntilReady = config.waitUntilReady;
    this._minionTags.internalValue = config.minionTags;
    this._tags.internalValue = config.tags;
    this._timeouts.internalValue = config.timeouts;
    this._volume.internalValue = config.volume;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ad_domain_type - computed: true, optional: true, required: false
  private _adDomainType?: string; 
  public get adDomainType() {
    return this.getStringAttribute('ad_domain_type');
  }
  public set adDomainType(value: string) {
    this._adDomainType = value;
  }
  public resetAdDomainType() {
    this._adDomainType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adDomainTypeInput() {
    return this._adDomainType;
  }

  // admin_password - computed: false, optional: true, required: false
  private _adminPassword?: string; 
  public get adminPassword() {
    return this.getStringAttribute('admin_password');
  }
  public set adminPassword(value: string) {
    this._adminPassword = value;
  }
  public resetAdminPassword() {
    this._adminPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordInput() {
    return this._adminPassword;
  }

  // admin_username - computed: false, optional: false, required: true
  private _adminUsername?: string; 
  public get adminUsername() {
    return this.getStringAttribute('admin_username');
  }
  public set adminUsername(value: string) {
    this._adminUsername = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminUsernameInput() {
    return this._adminUsername;
  }

  // agent_platform - computed: false, optional: true, required: false
  private _agentPlatform?: number; 
  public get agentPlatform() {
    return this.getNumberAttribute('agent_platform');
  }
  public set agentPlatform(value: number) {
    this._agentPlatform = value;
  }
  public resetAgentPlatform() {
    this._agentPlatform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentPlatformInput() {
    return this._agentPlatform;
  }

  // allocated_public_ip - computed: false, optional: true, required: false
  private _allocatedPublicIp?: boolean | cdktf.IResolvable; 
  public get allocatedPublicIp() {
    return this.getBooleanAttribute('allocated_public_ip');
  }
  public set allocatedPublicIp(value: boolean | cdktf.IResolvable) {
    this._allocatedPublicIp = value;
  }
  public resetAllocatedPublicIp() {
    this._allocatedPublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocatedPublicIpInput() {
    return this._allocatedPublicIp;
  }

  // availability_set_id - computed: true, optional: true, required: false
  private _availabilitySetId?: string; 
  public get availabilitySetId() {
    return this.getStringAttribute('availability_set_id');
  }
  public set availabilitySetId(value: string) {
    this._availabilitySetId = value;
  }
  public resetAvailabilitySetId() {
    this._availabilitySetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilitySetIdInput() {
    return this._availabilitySetId;
  }

  // base64_user_data - computed: true, optional: true, required: false
  private _base64UserData?: string; 
  public get base64UserData() {
    return this.getStringAttribute('base64_user_data');
  }
  public set base64UserData(value: string) {
    this._base64UserData = value;
  }
  public resetBase64UserData() {
    this._base64UserData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get base64UserDataInput() {
    return this._base64UserData;
  }

  // capacity - computed: false, optional: false, required: true
  private _capacity?: string; 
  public get capacity() {
    return this.getStringAttribute('capacity');
  }
  public set capacity(value: string) {
    this._capacity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity;
  }

  // disk_control_type - computed: true, optional: true, required: false
  private _diskControlType?: string; 
  public get diskControlType() {
    return this.getStringAttribute('disk_control_type');
  }
  public set diskControlType(value: string) {
    this._diskControlType = value;
  }
  public resetDiskControlType() {
    this._diskControlType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskControlTypeInput() {
    return this._diskControlType;
  }

  // disk_size_gb - computed: false, optional: true, required: false
  private _diskSizeGb?: number; 
  public get diskSizeGb() {
    return this.getNumberAttribute('disk_size_gb');
  }
  public set diskSizeGb(value: number) {
    this._diskSizeGb = value;
  }
  public resetDiskSizeGb() {
    this._diskSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeGbInput() {
    return this._diskSizeGb;
  }

  // enable_encrypt_at_host - computed: false, optional: true, required: false
  private _enableEncryptAtHost?: boolean | cdktf.IResolvable; 
  public get enableEncryptAtHost() {
    return this.getBooleanAttribute('enable_encrypt_at_host');
  }
  public set enableEncryptAtHost(value: boolean | cdktf.IResolvable) {
    this._enableEncryptAtHost = value;
  }
  public resetEnableEncryptAtHost() {
    this._enableEncryptAtHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEncryptAtHostInput() {
    return this._enableEncryptAtHost;
  }

  // enable_log_analytics - computed: false, optional: true, required: false
  private _enableLogAnalytics?: boolean | cdktf.IResolvable; 
  public get enableLogAnalytics() {
    return this.getBooleanAttribute('enable_log_analytics');
  }
  public set enableLogAnalytics(value: boolean | cdktf.IResolvable) {
    this._enableLogAnalytics = value;
  }
  public resetEnableLogAnalytics() {
    this._enableLogAnalytics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLogAnalyticsInput() {
    return this._enableLogAnalytics;
  }

  // enable_security_boot - computed: false, optional: true, required: false
  private _enableSecurityBoot?: boolean | cdktf.IResolvable; 
  public get enableSecurityBoot() {
    return this.getBooleanAttribute('enable_security_boot');
  }
  public set enableSecurityBoot(value: boolean | cdktf.IResolvable) {
    this._enableSecurityBoot = value;
  }
  public resetEnableSecurityBoot() {
    this._enableSecurityBoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSecurityBootInput() {
    return this._enableSecurityBoot;
  }

  // enable_vtpm - computed: false, optional: true, required: false
  private _enableVtpm?: boolean | cdktf.IResolvable; 
  public get enableVtpm() {
    return this.getBooleanAttribute('enable_vtpm');
  }
  public set enableVtpm(value: boolean | cdktf.IResolvable) {
    this._enableVtpm = value;
  }
  public resetEnableVtpm() {
    this._enableVtpm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableVtpmInput() {
    return this._enableVtpm;
  }

  // encrypt_disk - computed: false, optional: true, required: false
  private _encryptDisk?: boolean | cdktf.IResolvable; 
  public get encryptDisk() {
    return this.getBooleanAttribute('encrypt_disk');
  }
  public set encryptDisk(value: boolean | cdktf.IResolvable) {
    this._encryptDisk = value;
  }
  public resetEncryptDisk() {
    this._encryptDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptDiskInput() {
    return this._encryptDisk;
  }

  // friendly_name - computed: false, optional: false, required: true
  private _friendlyName?: string; 
  public get friendlyName() {
    return this.getStringAttribute('friendly_name');
  }
  public set friendlyName(value: string) {
    this._friendlyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get friendlyNameInput() {
    return this._friendlyName;
  }

  // fullname - computed: true, optional: false, required: false
  public get fullname() {
    return this.getStringAttribute('fullname');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // image_id - computed: false, optional: false, required: true
  private _imageId?: string; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
  }

  // install_duplo_native_agent - computed: true, optional: true, required: false
  private _installDuploNativeAgent?: boolean | cdktf.IResolvable; 
  public get installDuploNativeAgent() {
    return this.getBooleanAttribute('install_duplo_native_agent');
  }
  public set installDuploNativeAgent(value: boolean | cdktf.IResolvable) {
    this._installDuploNativeAgent = value;
  }
  public resetInstallDuploNativeAgent() {
    this._installDuploNativeAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installDuploNativeAgentInput() {
    return this._installDuploNativeAgent;
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // is_minion - computed: true, optional: true, required: false
  private _isMinion?: boolean | cdktf.IResolvable; 
  public get isMinion() {
    return this.getBooleanAttribute('is_minion');
  }
  public set isMinion(value: boolean | cdktf.IResolvable) {
    this._isMinion = value;
  }
  public resetIsMinion() {
    this._isMinion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMinionInput() {
    return this._isMinion;
  }

  // join_domain - computed: false, optional: true, required: false
  private _joinDomain?: boolean | cdktf.IResolvable; 
  public get joinDomain() {
    return this.getBooleanAttribute('join_domain');
  }
  public set joinDomain(value: boolean | cdktf.IResolvable) {
    this._joinDomain = value;
  }
  public resetJoinDomain() {
    this._joinDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get joinDomainInput() {
    return this._joinDomain;
  }

  // os_disk_type - computed: true, optional: true, required: false
  private _osDiskType?: string; 
  public get osDiskType() {
    return this.getStringAttribute('os_disk_type');
  }
  public set osDiskType(value: string) {
    this._osDiskType = value;
  }
  public resetOsDiskType() {
    this._osDiskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osDiskTypeInput() {
    return this._osDiskType;
  }

  // security_type - computed: false, optional: true, required: false
  private _securityType?: string; 
  public get securityType() {
    return this.getStringAttribute('security_type');
  }
  public set securityType(value: string) {
    this._securityType = value;
  }
  public resetSecurityType() {
    this._securityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityTypeInput() {
    return this._securityType;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // user_account - computed: true, optional: false, required: false
  public get userAccount() {
    return this.getStringAttribute('user_account');
  }

  // wait_until_ready - computed: false, optional: true, required: false
  private _waitUntilReady?: boolean | cdktf.IResolvable; 
  public get waitUntilReady() {
    return this.getBooleanAttribute('wait_until_ready');
  }
  public set waitUntilReady(value: boolean | cdktf.IResolvable) {
    this._waitUntilReady = value;
  }
  public resetWaitUntilReady() {
    this._waitUntilReady = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitUntilReadyInput() {
    return this._waitUntilReady;
  }

  // minion_tags - computed: false, optional: true, required: false
  private _minionTags = new AzureVirtualMachineMinionTagsList(this, "minion_tags", false);
  public get minionTags() {
    return this._minionTags;
  }
  public putMinionTags(value: AzureVirtualMachineMinionTags[] | cdktf.IResolvable) {
    this._minionTags.internalValue = value;
  }
  public resetMinionTags() {
    this._minionTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minionTagsInput() {
    return this._minionTags.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new AzureVirtualMachineTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: AzureVirtualMachineTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AzureVirtualMachineTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AzureVirtualMachineTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // volume - computed: false, optional: true, required: false
  private _volume = new AzureVirtualMachineVolumeList(this, "volume", false);
  public get volume() {
    return this._volume;
  }
  public putVolume(value: AzureVirtualMachineVolume[] | cdktf.IResolvable) {
    this._volume.internalValue = value;
  }
  public resetVolume() {
    this._volume.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeInput() {
    return this._volume.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ad_domain_type: cdktf.stringToTerraform(this._adDomainType),
      admin_password: cdktf.stringToTerraform(this._adminPassword),
      admin_username: cdktf.stringToTerraform(this._adminUsername),
      agent_platform: cdktf.numberToTerraform(this._agentPlatform),
      allocated_public_ip: cdktf.booleanToTerraform(this._allocatedPublicIp),
      availability_set_id: cdktf.stringToTerraform(this._availabilitySetId),
      base64_user_data: cdktf.stringToTerraform(this._base64UserData),
      capacity: cdktf.stringToTerraform(this._capacity),
      disk_control_type: cdktf.stringToTerraform(this._diskControlType),
      disk_size_gb: cdktf.numberToTerraform(this._diskSizeGb),
      enable_encrypt_at_host: cdktf.booleanToTerraform(this._enableEncryptAtHost),
      enable_log_analytics: cdktf.booleanToTerraform(this._enableLogAnalytics),
      enable_security_boot: cdktf.booleanToTerraform(this._enableSecurityBoot),
      enable_vtpm: cdktf.booleanToTerraform(this._enableVtpm),
      encrypt_disk: cdktf.booleanToTerraform(this._encryptDisk),
      friendly_name: cdktf.stringToTerraform(this._friendlyName),
      id: cdktf.stringToTerraform(this._id),
      image_id: cdktf.stringToTerraform(this._imageId),
      install_duplo_native_agent: cdktf.booleanToTerraform(this._installDuploNativeAgent),
      is_minion: cdktf.booleanToTerraform(this._isMinion),
      join_domain: cdktf.booleanToTerraform(this._joinDomain),
      os_disk_type: cdktf.stringToTerraform(this._osDiskType),
      security_type: cdktf.stringToTerraform(this._securityType),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      timezone: cdktf.stringToTerraform(this._timezone),
      wait_until_ready: cdktf.booleanToTerraform(this._waitUntilReady),
      minion_tags: cdktf.listMapper(azureVirtualMachineMinionTagsToTerraform, true)(this._minionTags.internalValue),
      tags: cdktf.listMapper(azureVirtualMachineTagsToTerraform, true)(this._tags.internalValue),
      timeouts: azureVirtualMachineTimeoutsToTerraform(this._timeouts.internalValue),
      volume: cdktf.listMapper(azureVirtualMachineVolumeToTerraform, true)(this._volume.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ad_domain_type: {
        value: cdktf.stringToHclTerraform(this._adDomainType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admin_password: {
        value: cdktf.stringToHclTerraform(this._adminPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admin_username: {
        value: cdktf.stringToHclTerraform(this._adminUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      agent_platform: {
        value: cdktf.numberToHclTerraform(this._agentPlatform),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      allocated_public_ip: {
        value: cdktf.booleanToHclTerraform(this._allocatedPublicIp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      availability_set_id: {
        value: cdktf.stringToHclTerraform(this._availabilitySetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      base64_user_data: {
        value: cdktf.stringToHclTerraform(this._base64UserData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      capacity: {
        value: cdktf.stringToHclTerraform(this._capacity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk_control_type: {
        value: cdktf.stringToHclTerraform(this._diskControlType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk_size_gb: {
        value: cdktf.numberToHclTerraform(this._diskSizeGb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_encrypt_at_host: {
        value: cdktf.booleanToHclTerraform(this._enableEncryptAtHost),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_log_analytics: {
        value: cdktf.booleanToHclTerraform(this._enableLogAnalytics),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_security_boot: {
        value: cdktf.booleanToHclTerraform(this._enableSecurityBoot),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_vtpm: {
        value: cdktf.booleanToHclTerraform(this._enableVtpm),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      encrypt_disk: {
        value: cdktf.booleanToHclTerraform(this._encryptDisk),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      friendly_name: {
        value: cdktf.stringToHclTerraform(this._friendlyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_id: {
        value: cdktf.stringToHclTerraform(this._imageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      install_duplo_native_agent: {
        value: cdktf.booleanToHclTerraform(this._installDuploNativeAgent),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_minion: {
        value: cdktf.booleanToHclTerraform(this._isMinion),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      join_domain: {
        value: cdktf.booleanToHclTerraform(this._joinDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      os_disk_type: {
        value: cdktf.stringToHclTerraform(this._osDiskType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_type: {
        value: cdktf.stringToHclTerraform(this._securityType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timezone: {
        value: cdktf.stringToHclTerraform(this._timezone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait_until_ready: {
        value: cdktf.booleanToHclTerraform(this._waitUntilReady),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      minion_tags: {
        value: cdktf.listMapperHcl(azureVirtualMachineMinionTagsToHclTerraform, true)(this._minionTags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AzureVirtualMachineMinionTagsList",
      },
      tags: {
        value: cdktf.listMapperHcl(azureVirtualMachineTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AzureVirtualMachineTagsList",
      },
      timeouts: {
        value: azureVirtualMachineTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AzureVirtualMachineTimeouts",
      },
      volume: {
        value: cdktf.listMapperHcl(azureVirtualMachineVolumeToHclTerraform, true)(this._volume.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AzureVirtualMachineVolumeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
