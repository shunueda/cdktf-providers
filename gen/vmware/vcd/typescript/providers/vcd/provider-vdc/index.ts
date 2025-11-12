// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/provider_vdc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProviderVdcConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional description of the Provider VDC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/provider_vdc#description ProviderVdc#description}
  */
  readonly description?: string;
  /**
  * The highest virtual hardware version supported by this Provider VDC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/provider_vdc#highest_supported_hardware_version ProviderVdc#highest_supported_hardware_version}
  */
  readonly highestSupportedHardwareVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/provider_vdc#id ProviderVdc#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * True if this Provider VDC is enabled and can provide resources to organization VDCs. A Provider VDC is always enabled on creation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/provider_vdc#is_enabled ProviderVdc#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the Provider VDC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/provider_vdc#name ProviderVdc#name}
  */
  readonly name: string;
  /**
  * Set IDs of the network pools used by this Provider VDC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/provider_vdc#network_pool_ids ProviderVdc#network_pool_ids}
  */
  readonly networkPoolIds?: string[];
  /**
  * ID of the registered NSX-T Manager that backs networking operations for this Provider VDC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/provider_vdc#nsxt_manager_id ProviderVdc#nsxt_manager_id}
  */
  readonly nsxtManagerId?: string;
  /**
  * Set of IDs of the resource pools backing this provider VDC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/provider_vdc#resource_pool_ids ProviderVdc#resource_pool_ids}
  */
  readonly resourcePoolIds: string[];
  /**
  * Set of storage profile names used to create this Provider VDC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/provider_vdc#storage_profile_names ProviderVdc#storage_profile_names}
  */
  readonly storageProfileNames: string[];
  /**
  * ID of the vCenter server that provides the resource pools and datastores
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/provider_vdc#vcenter_id ProviderVdc#vcenter_id}
  */
  readonly vcenterId: string;
  /**
  * metadata_entry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/provider_vdc#metadata_entry ProviderVdc#metadata_entry}
  */
  readonly metadataEntry?: ProviderVdcMetadataEntry[] | cdktf.IResolvable;
}
export interface ProviderVdcComputeCapacityCpu {
}

export function providerVdcComputeCapacityCpuToTerraform(struct?: ProviderVdcComputeCapacityCpu): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function providerVdcComputeCapacityCpuToHclTerraform(struct?: ProviderVdcComputeCapacityCpu): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProviderVdcComputeCapacityCpuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProviderVdcComputeCapacityCpu | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProviderVdcComputeCapacityCpu | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allocation - computed: true, optional: false, required: false
  public get allocation() {
    return this.getNumberAttribute('allocation');
  }

  // overhead - computed: true, optional: false, required: false
  public get overhead() {
    return this.getNumberAttribute('overhead');
  }

  // reserved - computed: true, optional: false, required: false
  public get reserved() {
    return this.getNumberAttribute('reserved');
  }

  // total - computed: true, optional: false, required: false
  public get total() {
    return this.getNumberAttribute('total');
  }

  // units - computed: true, optional: false, required: false
  public get units() {
    return this.getStringAttribute('units');
  }

  // used - computed: true, optional: false, required: false
  public get used() {
    return this.getNumberAttribute('used');
  }
}

export class ProviderVdcComputeCapacityCpuList extends cdktf.ComplexList {

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
  public get(index: number): ProviderVdcComputeCapacityCpuOutputReference {
    return new ProviderVdcComputeCapacityCpuOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProviderVdcComputeCapacityMemory {
}

export function providerVdcComputeCapacityMemoryToTerraform(struct?: ProviderVdcComputeCapacityMemory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function providerVdcComputeCapacityMemoryToHclTerraform(struct?: ProviderVdcComputeCapacityMemory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProviderVdcComputeCapacityMemoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProviderVdcComputeCapacityMemory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProviderVdcComputeCapacityMemory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allocation - computed: true, optional: false, required: false
  public get allocation() {
    return this.getNumberAttribute('allocation');
  }

  // overhead - computed: true, optional: false, required: false
  public get overhead() {
    return this.getNumberAttribute('overhead');
  }

  // reserved - computed: true, optional: false, required: false
  public get reserved() {
    return this.getNumberAttribute('reserved');
  }

  // total - computed: true, optional: false, required: false
  public get total() {
    return this.getNumberAttribute('total');
  }

  // units - computed: true, optional: false, required: false
  public get units() {
    return this.getStringAttribute('units');
  }

  // used - computed: true, optional: false, required: false
  public get used() {
    return this.getNumberAttribute('used');
  }
}

export class ProviderVdcComputeCapacityMemoryList extends cdktf.ComplexList {

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
  public get(index: number): ProviderVdcComputeCapacityMemoryOutputReference {
    return new ProviderVdcComputeCapacityMemoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProviderVdcComputeCapacity {
}

export function providerVdcComputeCapacityToTerraform(struct?: ProviderVdcComputeCapacity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function providerVdcComputeCapacityToHclTerraform(struct?: ProviderVdcComputeCapacity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProviderVdcComputeCapacityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProviderVdcComputeCapacity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProviderVdcComputeCapacity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu - computed: true, optional: false, required: false
  private _cpu = new ProviderVdcComputeCapacityCpuList(this, "cpu", false);
  public get cpu() {
    return this._cpu;
  }

  // is_elastic - computed: true, optional: false, required: false
  public get isElastic() {
    return this.getBooleanAttribute('is_elastic');
  }

  // is_ha - computed: true, optional: false, required: false
  public get isHa() {
    return this.getBooleanAttribute('is_ha');
  }

  // memory - computed: true, optional: false, required: false
  private _memory = new ProviderVdcComputeCapacityMemoryList(this, "memory", false);
  public get memory() {
    return this._memory;
  }
}

export class ProviderVdcComputeCapacityList extends cdktf.ComplexList {

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
  public get(index: number): ProviderVdcComputeCapacityOutputReference {
    return new ProviderVdcComputeCapacityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProviderVdcMetadataEntry {
  /**
  * Domain for this metadata entry. true, if it belongs to SYSTEM. false, if it belongs to GENERAL. Defaults to false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/provider_vdc#is_system ProviderVdc#is_system}
  */
  readonly isSystem?: boolean | cdktf.IResolvable;
  /**
  * Key of this metadata entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/provider_vdc#key ProviderVdc#key}
  */
  readonly key: string;
  /**
  * Type of this metadata entry. One of: 'MetadataStringValue', 'MetadataNumberValue', 'MetadataBooleanValue', 'MetadataDateTimeValue'. Defaults to 'MetadataStringValue'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/provider_vdc#type ProviderVdc#type}
  */
  readonly type?: string;
  /**
  * User access level for this metadata entry. One of: 'READWRITE', 'READONLY', 'PRIVATE'. Defaults to 'READWRITE'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/provider_vdc#user_access ProviderVdc#user_access}
  */
  readonly userAccess?: string;
  /**
  * Value of this metadata entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/provider_vdc#value ProviderVdc#value}
  */
  readonly value: string;
}

export function providerVdcMetadataEntryToTerraform(struct?: ProviderVdcMetadataEntry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_system: cdktf.booleanToTerraform(struct!.isSystem),
    key: cdktf.stringToTerraform(struct!.key),
    type: cdktf.stringToTerraform(struct!.type),
    user_access: cdktf.stringToTerraform(struct!.userAccess),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function providerVdcMetadataEntryToHclTerraform(struct?: ProviderVdcMetadataEntry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_system: {
      value: cdktf.booleanToHclTerraform(struct!.isSystem),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_access: {
      value: cdktf.stringToHclTerraform(struct!.userAccess),
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

export class ProviderVdcMetadataEntryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProviderVdcMetadataEntry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isSystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSystem = this._isSystem;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._userAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAccess = this._userAccess;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProviderVdcMetadataEntry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isSystem = undefined;
      this._key = undefined;
      this._type = undefined;
      this._userAccess = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isSystem = value.isSystem;
      this._key = value.key;
      this._type = value.type;
      this._userAccess = value.userAccess;
      this._value = value.value;
    }
  }

  // is_system - computed: false, optional: true, required: false
  private _isSystem?: boolean | cdktf.IResolvable; 
  public get isSystem() {
    return this.getBooleanAttribute('is_system');
  }
  public set isSystem(value: boolean | cdktf.IResolvable) {
    this._isSystem = value;
  }
  public resetIsSystem() {
    this._isSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSystemInput() {
    return this._isSystem;
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

  // user_access - computed: false, optional: true, required: false
  private _userAccess?: string; 
  public get userAccess() {
    return this.getStringAttribute('user_access');
  }
  public set userAccess(value: string) {
    this._userAccess = value;
  }
  public resetUserAccess() {
    this._userAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAccessInput() {
    return this._userAccess;
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

export class ProviderVdcMetadataEntryList extends cdktf.ComplexList {
  public internalValue? : ProviderVdcMetadataEntry[] | cdktf.IResolvable

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
  public get(index: number): ProviderVdcMetadataEntryOutputReference {
    return new ProviderVdcMetadataEntryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/provider_vdc vcd_provider_vdc}
*/
export class ProviderVdc extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_provider_vdc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProviderVdc resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProviderVdc to import
  * @param importFromId The id of the existing ProviderVdc that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/provider_vdc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProviderVdc to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_provider_vdc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/provider_vdc vcd_provider_vdc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProviderVdcConfig
  */
  public constructor(scope: Construct, id: string, config: ProviderVdcConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_provider_vdc',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1',
        providerVersionConstraint: '3.14.1'
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
    this._highestSupportedHardwareVersion = config.highestSupportedHardwareVersion;
    this._id = config.id;
    this._isEnabled = config.isEnabled;
    this._name = config.name;
    this._networkPoolIds = config.networkPoolIds;
    this._nsxtManagerId = config.nsxtManagerId;
    this._resourcePoolIds = config.resourcePoolIds;
    this._storageProfileNames = config.storageProfileNames;
    this._vcenterId = config.vcenterId;
    this._metadataEntry.internalValue = config.metadataEntry;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // capabilities - computed: true, optional: false, required: false
  public get capabilities() {
    return cdktf.Fn.tolist(this.getListAttribute('capabilities'));
  }

  // compute_capacity - computed: true, optional: false, required: false
  private _computeCapacity = new ProviderVdcComputeCapacityList(this, "compute_capacity", false);
  public get computeCapacity() {
    return this._computeCapacity;
  }

  // compute_provider_scope - computed: true, optional: false, required: false
  public get computeProviderScope() {
    return this.getStringAttribute('compute_provider_scope');
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

  // external_network_ids - computed: true, optional: false, required: false
  public get externalNetworkIds() {
    return cdktf.Fn.tolist(this.getListAttribute('external_network_ids'));
  }

  // highest_supported_hardware_version - computed: false, optional: false, required: true
  private _highestSupportedHardwareVersion?: string; 
  public get highestSupportedHardwareVersion() {
    return this.getStringAttribute('highest_supported_hardware_version');
  }
  public set highestSupportedHardwareVersion(value: string) {
    this._highestSupportedHardwareVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get highestSupportedHardwareVersionInput() {
    return this._highestSupportedHardwareVersion;
  }

  // host_ids - computed: true, optional: false, required: false
  public get hostIds() {
    return cdktf.Fn.tolist(this.getListAttribute('host_ids'));
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

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
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

  // network_pool_ids - computed: true, optional: true, required: false
  private _networkPoolIds?: string[]; 
  public get networkPoolIds() {
    return cdktf.Fn.tolist(this.getListAttribute('network_pool_ids'));
  }
  public set networkPoolIds(value: string[]) {
    this._networkPoolIds = value;
  }
  public resetNetworkPoolIds() {
    this._networkPoolIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPoolIdsInput() {
    return this._networkPoolIds;
  }

  // nsxt_manager_id - computed: false, optional: true, required: false
  private _nsxtManagerId?: string; 
  public get nsxtManagerId() {
    return this.getStringAttribute('nsxt_manager_id');
  }
  public set nsxtManagerId(value: string) {
    this._nsxtManagerId = value;
  }
  public resetNsxtManagerId() {
    this._nsxtManagerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsxtManagerIdInput() {
    return this._nsxtManagerId;
  }

  // resource_pool_ids - computed: false, optional: false, required: true
  private _resourcePoolIds?: string[]; 
  public get resourcePoolIds() {
    return cdktf.Fn.tolist(this.getListAttribute('resource_pool_ids'));
  }
  public set resourcePoolIds(value: string[]) {
    this._resourcePoolIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePoolIdsInput() {
    return this._resourcePoolIds;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // storage_container_ids - computed: true, optional: false, required: false
  public get storageContainerIds() {
    return cdktf.Fn.tolist(this.getListAttribute('storage_container_ids'));
  }

  // storage_profile_ids - computed: true, optional: false, required: false
  public get storageProfileIds() {
    return cdktf.Fn.tolist(this.getListAttribute('storage_profile_ids'));
  }

  // storage_profile_names - computed: false, optional: false, required: true
  private _storageProfileNames?: string[]; 
  public get storageProfileNames() {
    return cdktf.Fn.tolist(this.getListAttribute('storage_profile_names'));
  }
  public set storageProfileNames(value: string[]) {
    this._storageProfileNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageProfileNamesInput() {
    return this._storageProfileNames;
  }

  // universal_network_pool_id - computed: true, optional: false, required: false
  public get universalNetworkPoolId() {
    return this.getStringAttribute('universal_network_pool_id');
  }

  // vcenter_id - computed: false, optional: false, required: true
  private _vcenterId?: string; 
  public get vcenterId() {
    return this.getStringAttribute('vcenter_id');
  }
  public set vcenterId(value: string) {
    this._vcenterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vcenterIdInput() {
    return this._vcenterId;
  }

  // metadata_entry - computed: false, optional: true, required: false
  private _metadataEntry = new ProviderVdcMetadataEntryList(this, "metadata_entry", true);
  public get metadataEntry() {
    return this._metadataEntry;
  }
  public putMetadataEntry(value: ProviderVdcMetadataEntry[] | cdktf.IResolvable) {
    this._metadataEntry.internalValue = value;
  }
  public resetMetadataEntry() {
    this._metadataEntry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataEntryInput() {
    return this._metadataEntry.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      highest_supported_hardware_version: cdktf.stringToTerraform(this._highestSupportedHardwareVersion),
      id: cdktf.stringToTerraform(this._id),
      is_enabled: cdktf.booleanToTerraform(this._isEnabled),
      name: cdktf.stringToTerraform(this._name),
      network_pool_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._networkPoolIds),
      nsxt_manager_id: cdktf.stringToTerraform(this._nsxtManagerId),
      resource_pool_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._resourcePoolIds),
      storage_profile_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._storageProfileNames),
      vcenter_id: cdktf.stringToTerraform(this._vcenterId),
      metadata_entry: cdktf.listMapper(providerVdcMetadataEntryToTerraform, true)(this._metadataEntry.internalValue),
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
      highest_supported_hardware_version: {
        value: cdktf.stringToHclTerraform(this._highestSupportedHardwareVersion),
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
      is_enabled: {
        value: cdktf.booleanToHclTerraform(this._isEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_pool_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._networkPoolIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      nsxt_manager_id: {
        value: cdktf.stringToHclTerraform(this._nsxtManagerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_pool_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._resourcePoolIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      storage_profile_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._storageProfileNames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      vcenter_id: {
        value: cdktf.stringToHclTerraform(this._vcenterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata_entry: {
        value: cdktf.listMapperHcl(providerVdcMetadataEntryToHclTerraform, true)(this._metadataEntry.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ProviderVdcMetadataEntryList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
