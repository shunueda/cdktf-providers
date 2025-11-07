// https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_deploy_f5os
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CmDeployF5OsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_deploy_f5os#f5os_provider CmDeployF5Os#f5os_provider}
  */
  readonly f5OsProvider: CmDeployF5OsF5OsProvider;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_deploy_f5os#instance CmDeployF5Os#instance}
  */
  readonly instance: CmDeployF5OsInstance;
  /**
  * The number of seconds to wait for instance deployment to finish.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_deploy_f5os#timeout CmDeployF5Os#timeout}
  */
  readonly timeout?: number;
}
export interface CmDeployF5OsF5OsProvider {
  /**
  * Name of F5OS provider to be used for deploying Instances
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_deploy_f5os#provider_name CmDeployF5Os#provider_name}
  */
  readonly providerName: string;
  /**
  * The Type of F5OS provider(rseries/velos)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_deploy_f5os#provider_type CmDeployF5Os#provider_type}
  */
  readonly providerType: string;
}

export function cmDeployF5OsF5OsProviderToTerraform(struct?: CmDeployF5OsF5OsProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider_name: cdktf.stringToTerraform(struct!.providerName),
    provider_type: cdktf.stringToTerraform(struct!.providerType),
  }
}


export function cmDeployF5OsF5OsProviderToHclTerraform(struct?: CmDeployF5OsF5OsProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider_name: {
      value: cdktf.stringToHclTerraform(struct!.providerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider_type: {
      value: cdktf.stringToHclTerraform(struct!.providerType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CmDeployF5OsF5OsProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CmDeployF5OsF5OsProvider | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._providerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerName = this._providerName;
    }
    if (this._providerType !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerType = this._providerType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CmDeployF5OsF5OsProvider | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._providerName = undefined;
      this._providerType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._providerName = value.providerName;
      this._providerType = value.providerType;
    }
  }

  // provider_name - computed: false, optional: false, required: true
  private _providerName?: string; 
  public get providerName() {
    return this.getStringAttribute('provider_name');
  }
  public set providerName(value: string) {
    this._providerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerNameInput() {
    return this._providerName;
  }

  // provider_type - computed: false, optional: false, required: true
  private _providerType?: string; 
  public get providerType() {
    return this.getStringAttribute('provider_type');
  }
  public set providerType(value: string) {
    this._providerType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerTypeInput() {
    return this._providerType;
  }
}
export interface CmDeployF5OsInstance {
  /**
  * The number of virtual processor cores to configure on the BIG-IP-Next Instance.Default is `4`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_deploy_f5os#cpu_cores CmDeployF5Os#cpu_cores}
  */
  readonly cpuCores?: number;
  /**
  * The amount of disk size in GigBytes to configure on the BIG-IP-Next Instance.Default is `30`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_deploy_f5os#disk_size CmDeployF5Os#disk_size}
  */
  readonly diskSize?: number;
  /**
  * Name of BIG-IP-Next Instance to be Deployed on F5OS(velos/rSeries),it should be `unique` string value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_deploy_f5os#instance_hostname CmDeployF5Os#instance_hostname}
  */
  readonly instanceHostname: string;
  /**
  * Management address to be used for deployed BIG-IP Next instance in F5OS Provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_deploy_f5os#management_address CmDeployF5Os#management_address}
  */
  readonly managementAddress: string;
  /**
  * Management gateway address to be used for deployed BIG-IP Next instance in F5OS Provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_deploy_f5os#management_gateway CmDeployF5Os#management_gateway}
  */
  readonly managementGateway: string;
  /**
  * Management password of deployed BIG-IP Next instance in F5OS Provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_deploy_f5os#management_password CmDeployF5Os#management_password}
  */
  readonly managementPassword: string;
  /**
  * Management address prefix to be used for deployed BIG-IP Next instance in F5OS Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_deploy_f5os#management_prefix CmDeployF5Os#management_prefix}
  */
  readonly managementPrefix: number;
  /**
  * Management username of deployed BIG-IP Next instance in F5OS Provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_deploy_f5os#management_user CmDeployF5Os#management_user}
  */
  readonly managementUser: string;
  /**
  * Specifies on which list blades nodes the tenants are deployed.
  * Required for create operations.
  * For single blade platforms like rSeries only the value of 1 should be provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_deploy_f5os#slot_ids CmDeployF5Os#slot_ids}
  */
  readonly slotIds?: number[];
  /**
  * Name of the tenant deployment file to be used to deploy instance in F5OS Provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_deploy_f5os#tenant_deployment_file CmDeployF5Os#tenant_deployment_file}
  */
  readonly tenantDeploymentFile: string;
  /**
  * Name of tenant image to be used to deployinstance in F5OS Provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_deploy_f5os#tenant_image_name CmDeployF5Os#tenant_image_name}
  */
  readonly tenantImageName: string;
  /**
  * List of vlan ids to be assigned to BIG-IP Next Instance deployed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_deploy_f5os#vlan_ids CmDeployF5Os#vlan_ids}
  */
  readonly vlanIds?: number[];
}

export function cmDeployF5OsInstanceToTerraform(struct?: CmDeployF5OsInstance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_cores: cdktf.numberToTerraform(struct!.cpuCores),
    disk_size: cdktf.numberToTerraform(struct!.diskSize),
    instance_hostname: cdktf.stringToTerraform(struct!.instanceHostname),
    management_address: cdktf.stringToTerraform(struct!.managementAddress),
    management_gateway: cdktf.stringToTerraform(struct!.managementGateway),
    management_password: cdktf.stringToTerraform(struct!.managementPassword),
    management_prefix: cdktf.numberToTerraform(struct!.managementPrefix),
    management_user: cdktf.stringToTerraform(struct!.managementUser),
    slot_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.slotIds),
    tenant_deployment_file: cdktf.stringToTerraform(struct!.tenantDeploymentFile),
    tenant_image_name: cdktf.stringToTerraform(struct!.tenantImageName),
    vlan_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.vlanIds),
  }
}


export function cmDeployF5OsInstanceToHclTerraform(struct?: CmDeployF5OsInstance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_cores: {
      value: cdktf.numberToHclTerraform(struct!.cpuCores),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_size: {
      value: cdktf.numberToHclTerraform(struct!.diskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_hostname: {
      value: cdktf.stringToHclTerraform(struct!.instanceHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    management_address: {
      value: cdktf.stringToHclTerraform(struct!.managementAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    management_gateway: {
      value: cdktf.stringToHclTerraform(struct!.managementGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    management_password: {
      value: cdktf.stringToHclTerraform(struct!.managementPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    management_prefix: {
      value: cdktf.numberToHclTerraform(struct!.managementPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    management_user: {
      value: cdktf.stringToHclTerraform(struct!.managementUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slot_ids: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.slotIds),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    tenant_deployment_file: {
      value: cdktf.stringToHclTerraform(struct!.tenantDeploymentFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_image_name: {
      value: cdktf.stringToHclTerraform(struct!.tenantImageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan_ids: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.vlanIds),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CmDeployF5OsInstanceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CmDeployF5OsInstance | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuCores !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuCores = this._cpuCores;
    }
    if (this._diskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSize = this._diskSize;
    }
    if (this._instanceHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceHostname = this._instanceHostname;
    }
    if (this._managementAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementAddress = this._managementAddress;
    }
    if (this._managementGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementGateway = this._managementGateway;
    }
    if (this._managementPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementPassword = this._managementPassword;
    }
    if (this._managementPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementPrefix = this._managementPrefix;
    }
    if (this._managementUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementUser = this._managementUser;
    }
    if (this._slotIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.slotIds = this._slotIds;
    }
    if (this._tenantDeploymentFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantDeploymentFile = this._tenantDeploymentFile;
    }
    if (this._tenantImageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantImageName = this._tenantImageName;
    }
    if (this._vlanIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanIds = this._vlanIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CmDeployF5OsInstance | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpuCores = undefined;
      this._diskSize = undefined;
      this._instanceHostname = undefined;
      this._managementAddress = undefined;
      this._managementGateway = undefined;
      this._managementPassword = undefined;
      this._managementPrefix = undefined;
      this._managementUser = undefined;
      this._slotIds = undefined;
      this._tenantDeploymentFile = undefined;
      this._tenantImageName = undefined;
      this._vlanIds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpuCores = value.cpuCores;
      this._diskSize = value.diskSize;
      this._instanceHostname = value.instanceHostname;
      this._managementAddress = value.managementAddress;
      this._managementGateway = value.managementGateway;
      this._managementPassword = value.managementPassword;
      this._managementPrefix = value.managementPrefix;
      this._managementUser = value.managementUser;
      this._slotIds = value.slotIds;
      this._tenantDeploymentFile = value.tenantDeploymentFile;
      this._tenantImageName = value.tenantImageName;
      this._vlanIds = value.vlanIds;
    }
  }

  // cpu_cores - computed: true, optional: true, required: false
  private _cpuCores?: number; 
  public get cpuCores() {
    return this.getNumberAttribute('cpu_cores');
  }
  public set cpuCores(value: number) {
    this._cpuCores = value;
  }
  public resetCpuCores() {
    this._cpuCores = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCoresInput() {
    return this._cpuCores;
  }

  // disk_size - computed: true, optional: true, required: false
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  public resetDiskSize() {
    this._diskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
  }

  // instance_hostname - computed: false, optional: false, required: true
  private _instanceHostname?: string; 
  public get instanceHostname() {
    return this.getStringAttribute('instance_hostname');
  }
  public set instanceHostname(value: string) {
    this._instanceHostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceHostnameInput() {
    return this._instanceHostname;
  }

  // management_address - computed: false, optional: false, required: true
  private _managementAddress?: string; 
  public get managementAddress() {
    return this.getStringAttribute('management_address');
  }
  public set managementAddress(value: string) {
    this._managementAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managementAddressInput() {
    return this._managementAddress;
  }

  // management_gateway - computed: false, optional: false, required: true
  private _managementGateway?: string; 
  public get managementGateway() {
    return this.getStringAttribute('management_gateway');
  }
  public set managementGateway(value: string) {
    this._managementGateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managementGatewayInput() {
    return this._managementGateway;
  }

  // management_password - computed: false, optional: false, required: true
  private _managementPassword?: string; 
  public get managementPassword() {
    return this.getStringAttribute('management_password');
  }
  public set managementPassword(value: string) {
    this._managementPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managementPasswordInput() {
    return this._managementPassword;
  }

  // management_prefix - computed: false, optional: false, required: true
  private _managementPrefix?: number; 
  public get managementPrefix() {
    return this.getNumberAttribute('management_prefix');
  }
  public set managementPrefix(value: number) {
    this._managementPrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managementPrefixInput() {
    return this._managementPrefix;
  }

  // management_user - computed: false, optional: false, required: true
  private _managementUser?: string; 
  public get managementUser() {
    return this.getStringAttribute('management_user');
  }
  public set managementUser(value: string) {
    this._managementUser = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managementUserInput() {
    return this._managementUser;
  }

  // slot_ids - computed: true, optional: true, required: false
  private _slotIds?: number[]; 
  public get slotIds() {
    return this.getNumberListAttribute('slot_ids');
  }
  public set slotIds(value: number[]) {
    this._slotIds = value;
  }
  public resetSlotIds() {
    this._slotIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotIdsInput() {
    return this._slotIds;
  }

  // tenant_deployment_file - computed: false, optional: false, required: true
  private _tenantDeploymentFile?: string; 
  public get tenantDeploymentFile() {
    return this.getStringAttribute('tenant_deployment_file');
  }
  public set tenantDeploymentFile(value: string) {
    this._tenantDeploymentFile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantDeploymentFileInput() {
    return this._tenantDeploymentFile;
  }

  // tenant_image_name - computed: false, optional: false, required: true
  private _tenantImageName?: string; 
  public get tenantImageName() {
    return this.getStringAttribute('tenant_image_name');
  }
  public set tenantImageName(value: string) {
    this._tenantImageName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantImageNameInput() {
    return this._tenantImageName;
  }

  // vlan_ids - computed: true, optional: true, required: false
  private _vlanIds?: number[]; 
  public get vlanIds() {
    return this.getNumberListAttribute('vlan_ids');
  }
  public set vlanIds(value: number[]) {
    this._vlanIds = value;
  }
  public resetVlanIds() {
    this._vlanIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdsInput() {
    return this._vlanIds;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_deploy_f5os bigipnext_cm_deploy_f5os}
*/
export class CmDeployF5Os extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bigipnext_cm_deploy_f5os";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CmDeployF5Os resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CmDeployF5Os to import
  * @param importFromId The id of the existing CmDeployF5Os that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_deploy_f5os#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CmDeployF5Os to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bigipnext_cm_deploy_f5os", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_deploy_f5os bigipnext_cm_deploy_f5os} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CmDeployF5OsConfig
  */
  public constructor(scope: Construct, id: string, config: CmDeployF5OsConfig) {
    super(scope, id, {
      terraformResourceType: 'bigipnext_cm_deploy_f5os',
      terraformGeneratorMetadata: {
        providerName: 'bigipnext',
        providerVersion: '1.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._f5OsProvider.internalValue = config.f5OsProvider;
    this._instance.internalValue = config.instance;
    this._timeout = config.timeout;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // f5os_provider - computed: false, optional: false, required: true
  private _f5OsProvider = new CmDeployF5OsF5OsProviderOutputReference(this, "f5os_provider");
  public get f5OsProvider() {
    return this._f5OsProvider;
  }
  public putF5OsProvider(value: CmDeployF5OsF5OsProvider) {
    this._f5OsProvider.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get f5OsProviderInput() {
    return this._f5OsProvider.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance - computed: false, optional: false, required: true
  private _instance = new CmDeployF5OsInstanceOutputReference(this, "instance");
  public get instance() {
    return this._instance;
  }
  public putInstance(value: CmDeployF5OsInstance) {
    this._instance.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInput() {
    return this._instance.internalValue;
  }

  // provider_id - computed: true, optional: false, required: false
  public get providerId() {
    return this.getStringAttribute('provider_id');
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      f5os_provider: cmDeployF5OsF5OsProviderToTerraform(this._f5OsProvider.internalValue),
      instance: cmDeployF5OsInstanceToTerraform(this._instance.internalValue),
      timeout: cdktf.numberToTerraform(this._timeout),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      f5os_provider: {
        value: cmDeployF5OsF5OsProviderToHclTerraform(this._f5OsProvider.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CmDeployF5OsF5OsProvider",
      },
      instance: {
        value: cmDeployF5OsInstanceToHclTerraform(this._instance.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CmDeployF5OsInstance",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
