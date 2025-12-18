// https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/loadtesting_agent
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LoadtestingAgentConfig extends cdktf.TerraformMetaArguments {
  /**
  * The resource description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/loadtesting_agent#description LoadtestingAgent#description}
  */
  readonly description?: string;
  /**
  * The folder identifier that resource belongs to. If it is not provided, the default provider `folder-id` is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/loadtesting_agent#folder_id LoadtestingAgent#folder_id}
  */
  readonly folderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/loadtesting_agent#id LoadtestingAgent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A set of key/value label pairs which assigned to resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/loadtesting_agent#labels LoadtestingAgent#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/loadtesting_agent#name LoadtestingAgent#name}
  */
  readonly name: string;
  /**
  * compute_instance block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/loadtesting_agent#compute_instance LoadtestingAgent#compute_instance}
  */
  readonly computeInstance: LoadtestingAgentComputeInstance;
  /**
  * log_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/loadtesting_agent#log_settings LoadtestingAgent#log_settings}
  */
  readonly logSettings?: LoadtestingAgentLogSettings;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/loadtesting_agent#timeouts LoadtestingAgent#timeouts}
  */
  readonly timeouts?: LoadtestingAgentTimeouts;
}
export interface LoadtestingAgentComputeInstanceBootDiskInitializeParams {
  /**
  * Block size of the disk, specified in bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/loadtesting_agent#block_size LoadtestingAgent#block_size}
  */
  readonly blockSize?: number;
  /**
  * A description of the boot disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/loadtesting_agent#description LoadtestingAgent#description}
  */
  readonly description?: string;
  /**
  * A name of the boot disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/loadtesting_agent#name LoadtestingAgent#name}
  */
  readonly name?: string;
  /**
  * The size of the disk in GB. Defaults to 15 GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/loadtesting_agent#size LoadtestingAgent#size}
  */
  readonly size?: number;
  /**
  * The disk type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/loadtesting_agent#type LoadtestingAgent#type}
  */
  readonly type?: string;
}

export function loadtestingAgentComputeInstanceBootDiskInitializeParamsToTerraform(struct?: LoadtestingAgentComputeInstanceBootDiskInitializeParamsOutputReference | LoadtestingAgentComputeInstanceBootDiskInitializeParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_size: cdktf.numberToTerraform(struct!.blockSize),
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    size: cdktf.numberToTerraform(struct!.size),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function loadtestingAgentComputeInstanceBootDiskInitializeParamsToHclTerraform(struct?: LoadtestingAgentComputeInstanceBootDiskInitializeParamsOutputReference | LoadtestingAgentComputeInstanceBootDiskInitializeParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_size: {
      value: cdktf.numberToHclTerraform(struct!.blockSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadtestingAgentComputeInstanceBootDiskInitializeParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LoadtestingAgentComputeInstanceBootDiskInitializeParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockSize = this._blockSize;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadtestingAgentComputeInstanceBootDiskInitializeParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockSize = undefined;
      this._description = undefined;
      this._name = undefined;
      this._size = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockSize = value.blockSize;
      this._description = value.description;
      this._name = value.name;
      this._size = value.size;
      this._type = value.type;
    }
  }

  // block_size - computed: true, optional: true, required: false
  private _blockSize?: number; 
  public get blockSize() {
    return this.getNumberAttribute('block_size');
  }
  public set blockSize(value: number) {
    this._blockSize = value;
  }
  public resetBlockSize() {
    this._blockSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockSizeInput() {
    return this._blockSize;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // size - computed: false, optional: true, required: false
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface LoadtestingAgentComputeInstanceBootDisk {
  /**
  * Whether the disk is auto-deleted when the instance is deleted. The default value is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/loadtesting_agent#auto_delete LoadtestingAgent#auto_delete}
  */
  readonly autoDelete?: boolean | cdktf.IResolvable;
  /**
  * This value can be used to reference the device under `/dev/disk/by-id/`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/loadtesting_agent#device_name LoadtestingAgent#device_name}
  */
  readonly deviceName?: string;
  /**
  * initialize_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/loadtesting_agent#initialize_params LoadtestingAgent#initialize_params}
  */
  readonly initializeParams: LoadtestingAgentComputeInstanceBootDiskInitializeParams;
}

export function loadtestingAgentComputeInstanceBootDiskToTerraform(struct?: LoadtestingAgentComputeInstanceBootDiskOutputReference | LoadtestingAgentComputeInstanceBootDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_delete: cdktf.booleanToTerraform(struct!.autoDelete),
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    initialize_params: loadtestingAgentComputeInstanceBootDiskInitializeParamsToTerraform(struct!.initializeParams),
  }
}


export function loadtestingAgentComputeInstanceBootDiskToHclTerraform(struct?: LoadtestingAgentComputeInstanceBootDiskOutputReference | LoadtestingAgentComputeInstanceBootDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_delete: {
      value: cdktf.booleanToHclTerraform(struct!.autoDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    device_name: {
      value: cdktf.stringToHclTerraform(struct!.deviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    initialize_params: {
      value: loadtestingAgentComputeInstanceBootDiskInitializeParamsToHclTerraform(struct!.initializeParams),
      isBlock: true,
      type: "list",
      storageClassType: "LoadtestingAgentComputeInstanceBootDiskInitializeParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadtestingAgentComputeInstanceBootDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LoadtestingAgentComputeInstanceBootDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoDelete = this._autoDelete;
    }
    if (this._deviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceName = this._deviceName;
    }
    if (this._initializeParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initializeParams = this._initializeParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadtestingAgentComputeInstanceBootDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoDelete = undefined;
      this._deviceName = undefined;
      this._initializeParams.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoDelete = value.autoDelete;
      this._deviceName = value.deviceName;
      this._initializeParams.internalValue = value.initializeParams;
    }
  }

  // auto_delete - computed: false, optional: true, required: false
  private _autoDelete?: boolean | cdktf.IResolvable; 
  public get autoDelete() {
    return this.getBooleanAttribute('auto_delete');
  }
  public set autoDelete(value: boolean | cdktf.IResolvable) {
    this._autoDelete = value;
  }
  public resetAutoDelete() {
    this._autoDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDeleteInput() {
    return this._autoDelete;
  }

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // disk_id - computed: true, optional: false, required: false
  public get diskId() {
    return this.getStringAttribute('disk_id');
  }

  // initialize_params - computed: false, optional: false, required: true
  private _initializeParams = new LoadtestingAgentComputeInstanceBootDiskInitializeParamsOutputReference(this, "initialize_params");
  public get initializeParams() {
    return this._initializeParams;
  }
  public putInitializeParams(value: LoadtestingAgentComputeInstanceBootDiskInitializeParams) {
    this._initializeParams.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get initializeParamsInput() {
    return this._initializeParams.internalValue;
  }
}
export interface LoadtestingAgentComputeInstanceNetworkInterface {
  /**
  * Manual set static IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/loadtesting_agent#ip_address LoadtestingAgent#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Flag for allocating IPv4 address for the network interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/loadtesting_agent#ipv4 LoadtestingAgent#ipv4}
  */
  readonly ipv4?: boolean | cdktf.IResolvable;
  /**
  * Flag for allocating IPv6 address for the network interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/loadtesting_agent#ipv6 LoadtestingAgent#ipv6}
  */
  readonly ipv6?: boolean | cdktf.IResolvable;
  /**
  * Manual set static IPv6 address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/loadtesting_agent#ipv6_address LoadtestingAgent#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * Flag for using NAT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/loadtesting_agent#nat LoadtestingAgent#nat}
  */
  readonly nat?: boolean | cdktf.IResolvable;
  /**
  * A public address that can be used to access the internet over NAT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/loadtesting_agent#nat_ip_address LoadtestingAgent#nat_ip_address}
  */
  readonly natIpAddress?: string;
  /**
  * Security group ids for network interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/loadtesting_agent#security_group_ids LoadtestingAgent#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * The ID of the subnet to attach this interface to. The subnet must reside in the same zone where this instance was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/loadtesting_agent#subnet_id LoadtestingAgent#subnet_id}
  */
  readonly subnetId: string;
}

export function loadtestingAgentComputeInstanceNetworkInterfaceToTerraform(struct?: LoadtestingAgentComputeInstanceNetworkInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    ipv4: cdktf.booleanToTerraform(struct!.ipv4),
    ipv6: cdktf.booleanToTerraform(struct!.ipv6),
    ipv6_address: cdktf.stringToTerraform(struct!.ipv6Address),
    nat: cdktf.booleanToTerraform(struct!.nat),
    nat_ip_address: cdktf.stringToTerraform(struct!.natIpAddress),
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupIds),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}


export function loadtestingAgentComputeInstanceNetworkInterfaceToHclTerraform(struct?: LoadtestingAgentComputeInstanceNetworkInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4: {
      value: cdktf.booleanToHclTerraform(struct!.ipv4),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ipv6: {
      value: cdktf.booleanToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ipv6_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nat: {
      value: cdktf.booleanToHclTerraform(struct!.nat),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    nat_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.natIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadtestingAgentComputeInstanceNetworkInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoadtestingAgentComputeInstanceNetworkInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._ipv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    if (this._ipv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Address = this._ipv6Address;
    }
    if (this._nat !== undefined) {
      hasAnyValues = true;
      internalValueResult.nat = this._nat;
    }
    if (this._natIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.natIpAddress = this._natIpAddress;
    }
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadtestingAgentComputeInstanceNetworkInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
      this._ipv4 = undefined;
      this._ipv6 = undefined;
      this._ipv6Address = undefined;
      this._nat = undefined;
      this._natIpAddress = undefined;
      this._securityGroupIds = undefined;
      this._subnetId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
      this._ipv4 = value.ipv4;
      this._ipv6 = value.ipv6;
      this._ipv6Address = value.ipv6Address;
      this._nat = value.nat;
      this._natIpAddress = value.natIpAddress;
      this._securityGroupIds = value.securityGroupIds;
      this._subnetId = value.subnetId;
    }
  }

  // index - computed: true, optional: false, required: false
  public get index() {
    return this.getNumberAttribute('index');
  }

  // ip_address - computed: true, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4?: boolean | cdktf.IResolvable; 
  public get ipv4() {
    return this.getBooleanAttribute('ipv4');
  }
  public set ipv4(value: boolean | cdktf.IResolvable) {
    this._ipv4 = value;
  }
  public resetIpv4() {
    this._ipv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4;
  }

  // ipv6 - computed: true, optional: true, required: false
  private _ipv6?: boolean | cdktf.IResolvable; 
  public get ipv6() {
    return this.getBooleanAttribute('ipv6');
  }
  public set ipv6(value: boolean | cdktf.IResolvable) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }

  // ipv6_address - computed: true, optional: true, required: false
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  public resetIpv6Address() {
    this._ipv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // nat - computed: false, optional: true, required: false
  private _nat?: boolean | cdktf.IResolvable; 
  public get nat() {
    return this.getBooleanAttribute('nat');
  }
  public set nat(value: boolean | cdktf.IResolvable) {
    this._nat = value;
  }
  public resetNat() {
    this._nat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natInput() {
    return this._nat;
  }

  // nat_ip_address - computed: true, optional: true, required: false
  private _natIpAddress?: string; 
  public get natIpAddress() {
    return this.getStringAttribute('nat_ip_address');
  }
  public set natIpAddress(value: string) {
    this._natIpAddress = value;
  }
  public resetNatIpAddress() {
    this._natIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natIpAddressInput() {
    return this._natIpAddress;
  }

  // nat_ip_version - computed: true, optional: false, required: false
  public get natIpVersion() {
    return this.getStringAttribute('nat_ip_version');
  }

  // security_group_ids - computed: true, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
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
}

export class LoadtestingAgentComputeInstanceNetworkInterfaceList extends cdktf.ComplexList {
  public internalValue? : LoadtestingAgentComputeInstanceNetworkInterface[] | cdktf.IResolvable

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
  public get(index: number): LoadtestingAgentComputeInstanceNetworkInterfaceOutputReference {
    return new LoadtestingAgentComputeInstanceNetworkInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoadtestingAgentComputeInstanceResources {
  /**
  * If provided, specifies baseline core performance as a percent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/loadtesting_agent#core_fraction LoadtestingAgent#core_fraction}
  */
  readonly coreFraction?: number;
  /**
  * The number of CPU cores for the instance. Defaults to 2 cores.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/loadtesting_agent#cores LoadtestingAgent#cores}
  */
  readonly cores?: number;
  /**
  * The memory size in GB. Defaults to 2 GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/loadtesting_agent#memory LoadtestingAgent#memory}
  */
  readonly memory?: number;
}

export function loadtestingAgentComputeInstanceResourcesToTerraform(struct?: LoadtestingAgentComputeInstanceResourcesOutputReference | LoadtestingAgentComputeInstanceResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    core_fraction: cdktf.numberToTerraform(struct!.coreFraction),
    cores: cdktf.numberToTerraform(struct!.cores),
    memory: cdktf.numberToTerraform(struct!.memory),
  }
}


export function loadtestingAgentComputeInstanceResourcesToHclTerraform(struct?: LoadtestingAgentComputeInstanceResourcesOutputReference | LoadtestingAgentComputeInstanceResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    core_fraction: {
      value: cdktf.numberToHclTerraform(struct!.coreFraction),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cores: {
      value: cdktf.numberToHclTerraform(struct!.cores),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory: {
      value: cdktf.numberToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadtestingAgentComputeInstanceResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LoadtestingAgentComputeInstanceResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._coreFraction !== undefined) {
      hasAnyValues = true;
      internalValueResult.coreFraction = this._coreFraction;
    }
    if (this._cores !== undefined) {
      hasAnyValues = true;
      internalValueResult.cores = this._cores;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadtestingAgentComputeInstanceResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._coreFraction = undefined;
      this._cores = undefined;
      this._memory = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._coreFraction = value.coreFraction;
      this._cores = value.cores;
      this._memory = value.memory;
    }
  }

  // core_fraction - computed: false, optional: true, required: false
  private _coreFraction?: number; 
  public get coreFraction() {
    return this.getNumberAttribute('core_fraction');
  }
  public set coreFraction(value: number) {
    this._coreFraction = value;
  }
  public resetCoreFraction() {
    this._coreFraction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreFractionInput() {
    return this._coreFraction;
  }

  // cores - computed: false, optional: true, required: false
  private _cores?: number; 
  public get cores() {
    return this.getNumberAttribute('cores');
  }
  public set cores(value: number) {
    this._cores = value;
  }
  public resetCores() {
    this._cores = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coresInput() {
    return this._cores;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: number; 
  public get memory() {
    return this.getNumberAttribute('memory');
  }
  public set memory(value: number) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }
}
export interface LoadtestingAgentComputeInstance {
  /**
  * A set of key/value label pairs to assign to the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/loadtesting_agent#labels LoadtestingAgent#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * A set of metadata key/value pairs to make available from within the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/loadtesting_agent#metadata LoadtestingAgent#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * The Compute platform for virtual machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/loadtesting_agent#platform_id LoadtestingAgent#platform_id}
  */
  readonly platformId?: string;
  /**
  * The ID of the service account authorized for this load testing agent. Service account should have `loadtesting.generatorClient` or `loadtesting.externalAgent` role in the folder.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/loadtesting_agent#service_account_id LoadtestingAgent#service_account_id}
  */
  readonly serviceAccountId: string;
  /**
  * The [availability zone](https://yandex.cloud/docs/overview/concepts/geo-scope) where resource is located. If it is not provided, the default provider zone will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/loadtesting_agent#zone_id LoadtestingAgent#zone_id}
  */
  readonly zoneId?: string;
  /**
  * boot_disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/loadtesting_agent#boot_disk LoadtestingAgent#boot_disk}
  */
  readonly bootDisk: LoadtestingAgentComputeInstanceBootDisk;
  /**
  * network_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/loadtesting_agent#network_interface LoadtestingAgent#network_interface}
  */
  readonly networkInterface: LoadtestingAgentComputeInstanceNetworkInterface[] | cdktf.IResolvable;
  /**
  * resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/loadtesting_agent#resources LoadtestingAgent#resources}
  */
  readonly resources: LoadtestingAgentComputeInstanceResources;
}

export function loadtestingAgentComputeInstanceToTerraform(struct?: LoadtestingAgentComputeInstanceOutputReference | LoadtestingAgentComputeInstance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    metadata: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.metadata),
    platform_id: cdktf.stringToTerraform(struct!.platformId),
    service_account_id: cdktf.stringToTerraform(struct!.serviceAccountId),
    zone_id: cdktf.stringToTerraform(struct!.zoneId),
    boot_disk: loadtestingAgentComputeInstanceBootDiskToTerraform(struct!.bootDisk),
    network_interface: cdktf.listMapper(loadtestingAgentComputeInstanceNetworkInterfaceToTerraform, true)(struct!.networkInterface),
    resources: loadtestingAgentComputeInstanceResourcesToTerraform(struct!.resources),
  }
}


export function loadtestingAgentComputeInstanceToHclTerraform(struct?: LoadtestingAgentComputeInstanceOutputReference | LoadtestingAgentComputeInstance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    metadata: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.metadata),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    platform_id: {
      value: cdktf.stringToHclTerraform(struct!.platformId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_id: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_id: {
      value: cdktf.stringToHclTerraform(struct!.zoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    boot_disk: {
      value: loadtestingAgentComputeInstanceBootDiskToHclTerraform(struct!.bootDisk),
      isBlock: true,
      type: "list",
      storageClassType: "LoadtestingAgentComputeInstanceBootDiskList",
    },
    network_interface: {
      value: cdktf.listMapperHcl(loadtestingAgentComputeInstanceNetworkInterfaceToHclTerraform, true)(struct!.networkInterface),
      isBlock: true,
      type: "list",
      storageClassType: "LoadtestingAgentComputeInstanceNetworkInterfaceList",
    },
    resources: {
      value: loadtestingAgentComputeInstanceResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "list",
      storageClassType: "LoadtestingAgentComputeInstanceResourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadtestingAgentComputeInstanceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LoadtestingAgentComputeInstance | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._platformId !== undefined) {
      hasAnyValues = true;
      internalValueResult.platformId = this._platformId;
    }
    if (this._serviceAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountId = this._serviceAccountId;
    }
    if (this._zoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneId = this._zoneId;
    }
    if (this._bootDisk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDisk = this._bootDisk?.internalValue;
    }
    if (this._networkInterface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkInterface = this._networkInterface?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadtestingAgentComputeInstance | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._labels = undefined;
      this._metadata = undefined;
      this._platformId = undefined;
      this._serviceAccountId = undefined;
      this._zoneId = undefined;
      this._bootDisk.internalValue = undefined;
      this._networkInterface.internalValue = undefined;
      this._resources.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._labels = value.labels;
      this._metadata = value.metadata;
      this._platformId = value.platformId;
      this._serviceAccountId = value.serviceAccountId;
      this._zoneId = value.zoneId;
      this._bootDisk.internalValue = value.bootDisk;
      this._networkInterface.internalValue = value.networkInterface;
      this._resources.internalValue = value.resources;
    }
  }

  // computed_labels - computed: true, optional: false, required: false
  private _computedLabels = new cdktf.StringMap(this, "computed_labels");
  public get computedLabels() {
    return this._computedLabels;
  }

  // computed_metadata - computed: true, optional: false, required: false
  private _computedMetadata = new cdktf.StringMap(this, "computed_metadata");
  public get computedMetadata() {
    return this._computedMetadata;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // platform_id - computed: true, optional: true, required: false
  private _platformId?: string; 
  public get platformId() {
    return this.getStringAttribute('platform_id');
  }
  public set platformId(value: string) {
    this._platformId = value;
  }
  public resetPlatformId() {
    this._platformId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformIdInput() {
    return this._platformId;
  }

  // service_account_id - computed: false, optional: false, required: true
  private _serviceAccountId?: string; 
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }
  public set serviceAccountId(value: string) {
    this._serviceAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountIdInput() {
    return this._serviceAccountId;
  }

  // zone_id - computed: true, optional: true, required: false
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  public resetZoneId() {
    this._zoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // boot_disk - computed: false, optional: false, required: true
  private _bootDisk = new LoadtestingAgentComputeInstanceBootDiskOutputReference(this, "boot_disk");
  public get bootDisk() {
    return this._bootDisk;
  }
  public putBootDisk(value: LoadtestingAgentComputeInstanceBootDisk) {
    this._bootDisk.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskInput() {
    return this._bootDisk.internalValue;
  }

  // network_interface - computed: false, optional: false, required: true
  private _networkInterface = new LoadtestingAgentComputeInstanceNetworkInterfaceList(this, "network_interface", false);
  public get networkInterface() {
    return this._networkInterface;
  }
  public putNetworkInterface(value: LoadtestingAgentComputeInstanceNetworkInterface[] | cdktf.IResolvable) {
    this._networkInterface.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceInput() {
    return this._networkInterface.internalValue;
  }

  // resources - computed: false, optional: false, required: true
  private _resources = new LoadtestingAgentComputeInstanceResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: LoadtestingAgentComputeInstanceResources) {
    this._resources.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}
export interface LoadtestingAgentLogSettings {
  /**
  * The ID of cloud logging group to which the load testing agent sends logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/loadtesting_agent#log_group_id LoadtestingAgent#log_group_id}
  */
  readonly logGroupId?: string;
}

export function loadtestingAgentLogSettingsToTerraform(struct?: LoadtestingAgentLogSettingsOutputReference | LoadtestingAgentLogSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_group_id: cdktf.stringToTerraform(struct!.logGroupId),
  }
}


export function loadtestingAgentLogSettingsToHclTerraform(struct?: LoadtestingAgentLogSettingsOutputReference | LoadtestingAgentLogSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_group_id: {
      value: cdktf.stringToHclTerraform(struct!.logGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadtestingAgentLogSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LoadtestingAgentLogSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupId = this._logGroupId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadtestingAgentLogSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logGroupId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logGroupId = value.logGroupId;
    }
  }

  // log_group_id - computed: false, optional: true, required: false
  private _logGroupId?: string; 
  public get logGroupId() {
    return this.getStringAttribute('log_group_id');
  }
  public set logGroupId(value: string) {
    this._logGroupId = value;
  }
  public resetLogGroupId() {
    this._logGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupIdInput() {
    return this._logGroupId;
  }
}
export interface LoadtestingAgentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/loadtesting_agent#create LoadtestingAgent#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/loadtesting_agent#delete LoadtestingAgent#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/loadtesting_agent#update LoadtestingAgent#update}
  */
  readonly update?: string;
}

export function loadtestingAgentTimeoutsToTerraform(struct?: LoadtestingAgentTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function loadtestingAgentTimeoutsToHclTerraform(struct?: LoadtestingAgentTimeouts | cdktf.IResolvable): any {
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
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadtestingAgentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LoadtestingAgentTimeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadtestingAgentTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
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
      this._update = value.update;
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

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/loadtesting_agent yandex_loadtesting_agent}
*/
export class LoadtestingAgent extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_loadtesting_agent";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LoadtestingAgent resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LoadtestingAgent to import
  * @param importFromId The id of the existing LoadtestingAgent that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/loadtesting_agent#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LoadtestingAgent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_loadtesting_agent", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/loadtesting_agent yandex_loadtesting_agent} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LoadtestingAgentConfig
  */
  public constructor(scope: Construct, id: string, config: LoadtestingAgentConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_loadtesting_agent',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.177.0',
        providerVersionConstraint: '0.177.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._folderId = config.folderId;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._computeInstance.internalValue = config.computeInstance;
    this._logSettings.internalValue = config.logSettings;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compute_instance_id - computed: true, optional: false, required: false
  public get computeInstanceId() {
    return this.getStringAttribute('compute_instance_id');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // folder_id - computed: true, optional: true, required: false
  private _folderId?: string; 
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }
  public set folderId(value: string) {
    this._folderId = value;
  }
  public resetFolderId() {
    this._folderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderIdInput() {
    return this._folderId;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // compute_instance - computed: false, optional: false, required: true
  private _computeInstance = new LoadtestingAgentComputeInstanceOutputReference(this, "compute_instance");
  public get computeInstance() {
    return this._computeInstance;
  }
  public putComputeInstance(value: LoadtestingAgentComputeInstance) {
    this._computeInstance.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeInstanceInput() {
    return this._computeInstance.internalValue;
  }

  // log_settings - computed: false, optional: true, required: false
  private _logSettings = new LoadtestingAgentLogSettingsOutputReference(this, "log_settings");
  public get logSettings() {
    return this._logSettings;
  }
  public putLogSettings(value: LoadtestingAgentLogSettings) {
    this._logSettings.internalValue = value;
  }
  public resetLogSettings() {
    this._logSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSettingsInput() {
    return this._logSettings.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new LoadtestingAgentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: LoadtestingAgentTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      folder_id: cdktf.stringToTerraform(this._folderId),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      compute_instance: loadtestingAgentComputeInstanceToTerraform(this._computeInstance.internalValue),
      log_settings: loadtestingAgentLogSettingsToTerraform(this._logSettings.internalValue),
      timeouts: loadtestingAgentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder_id: {
        value: cdktf.stringToHclTerraform(this._folderId),
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
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compute_instance: {
        value: loadtestingAgentComputeInstanceToHclTerraform(this._computeInstance.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LoadtestingAgentComputeInstanceList",
      },
      log_settings: {
        value: loadtestingAgentLogSettingsToHclTerraform(this._logSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LoadtestingAgentLogSettingsList",
      },
      timeouts: {
        value: loadtestingAgentTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LoadtestingAgentTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
