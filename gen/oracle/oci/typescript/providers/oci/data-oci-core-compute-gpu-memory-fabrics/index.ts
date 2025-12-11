// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/core_compute_gpu_memory_fabrics
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciCoreComputeGpuMemoryFabricsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/core_compute_gpu_memory_fabrics#availability_domain DataOciCoreComputeGpuMemoryFabrics#availability_domain}
  */
  readonly availabilityDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/core_compute_gpu_memory_fabrics#compartment_id DataOciCoreComputeGpuMemoryFabrics#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/core_compute_gpu_memory_fabrics#compute_gpu_memory_fabric_health DataOciCoreComputeGpuMemoryFabrics#compute_gpu_memory_fabric_health}
  */
  readonly computeGpuMemoryFabricHealth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/core_compute_gpu_memory_fabrics#compute_gpu_memory_fabric_id DataOciCoreComputeGpuMemoryFabrics#compute_gpu_memory_fabric_id}
  */
  readonly computeGpuMemoryFabricId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/core_compute_gpu_memory_fabrics#compute_gpu_memory_fabric_lifecycle_state DataOciCoreComputeGpuMemoryFabrics#compute_gpu_memory_fabric_lifecycle_state}
  */
  readonly computeGpuMemoryFabricLifecycleState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/core_compute_gpu_memory_fabrics#compute_hpc_island_id DataOciCoreComputeGpuMemoryFabrics#compute_hpc_island_id}
  */
  readonly computeHpcIslandId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/core_compute_gpu_memory_fabrics#compute_network_block_id DataOciCoreComputeGpuMemoryFabrics#compute_network_block_id}
  */
  readonly computeNetworkBlockId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/core_compute_gpu_memory_fabrics#display_name DataOciCoreComputeGpuMemoryFabrics#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/core_compute_gpu_memory_fabrics#id DataOciCoreComputeGpuMemoryFabrics#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/core_compute_gpu_memory_fabrics#filter DataOciCoreComputeGpuMemoryFabrics#filter}
  */
  readonly filter?: DataOciCoreComputeGpuMemoryFabricsFilter[] | cdktf.IResolvable;
}
export interface DataOciCoreComputeGpuMemoryFabricsComputeGpuMemoryFabricCollectionItemsMemoryFabricPreferences {
}

export function dataOciCoreComputeGpuMemoryFabricsComputeGpuMemoryFabricCollectionItemsMemoryFabricPreferencesToTerraform(struct?: DataOciCoreComputeGpuMemoryFabricsComputeGpuMemoryFabricCollectionItemsMemoryFabricPreferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreComputeGpuMemoryFabricsComputeGpuMemoryFabricCollectionItemsMemoryFabricPreferencesToHclTerraform(struct?: DataOciCoreComputeGpuMemoryFabricsComputeGpuMemoryFabricCollectionItemsMemoryFabricPreferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreComputeGpuMemoryFabricsComputeGpuMemoryFabricCollectionItemsMemoryFabricPreferencesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreComputeGpuMemoryFabricsComputeGpuMemoryFabricCollectionItemsMemoryFabricPreferences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreComputeGpuMemoryFabricsComputeGpuMemoryFabricCollectionItemsMemoryFabricPreferences | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // customer_desired_firmware_bundle_id - computed: true, optional: false, required: false
  public get customerDesiredFirmwareBundleId() {
    return this.getStringAttribute('customer_desired_firmware_bundle_id');
  }

  // fabric_recycle_level - computed: true, optional: false, required: false
  public get fabricRecycleLevel() {
    return this.getStringAttribute('fabric_recycle_level');
  }
}

export class DataOciCoreComputeGpuMemoryFabricsComputeGpuMemoryFabricCollectionItemsMemoryFabricPreferencesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreComputeGpuMemoryFabricsComputeGpuMemoryFabricCollectionItemsMemoryFabricPreferencesOutputReference {
    return new DataOciCoreComputeGpuMemoryFabricsComputeGpuMemoryFabricCollectionItemsMemoryFabricPreferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreComputeGpuMemoryFabricsComputeGpuMemoryFabricCollectionItems {
}

export function dataOciCoreComputeGpuMemoryFabricsComputeGpuMemoryFabricCollectionItemsToTerraform(struct?: DataOciCoreComputeGpuMemoryFabricsComputeGpuMemoryFabricCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreComputeGpuMemoryFabricsComputeGpuMemoryFabricCollectionItemsToHclTerraform(struct?: DataOciCoreComputeGpuMemoryFabricsComputeGpuMemoryFabricCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreComputeGpuMemoryFabricsComputeGpuMemoryFabricCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreComputeGpuMemoryFabricsComputeGpuMemoryFabricCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreComputeGpuMemoryFabricsComputeGpuMemoryFabricCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_data - computed: true, optional: false, required: false
  private _additionalData = new cdktf.StringMap(this, "additional_data");
  public get additionalData() {
    return this._additionalData;
  }

  // available_host_count - computed: true, optional: false, required: false
  public get availableHostCount() {
    return this.getStringAttribute('available_host_count');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // compute_gpu_memory_fabric_id - computed: true, optional: false, required: false
  public get computeGpuMemoryFabricId() {
    return this.getStringAttribute('compute_gpu_memory_fabric_id');
  }

  // compute_hpc_island_id - computed: true, optional: false, required: false
  public get computeHpcIslandId() {
    return this.getStringAttribute('compute_hpc_island_id');
  }

  // compute_local_block_id - computed: true, optional: false, required: false
  public get computeLocalBlockId() {
    return this.getStringAttribute('compute_local_block_id');
  }

  // compute_network_block_id - computed: true, optional: false, required: false
  public get computeNetworkBlockId() {
    return this.getStringAttribute('compute_network_block_id');
  }

  // current_firmware_bundle_id - computed: true, optional: false, required: false
  public get currentFirmwareBundleId() {
    return this.getStringAttribute('current_firmware_bundle_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // fabric_health - computed: true, optional: false, required: false
  public get fabricHealth() {
    return this.getStringAttribute('fabric_health');
  }

  // firmware_update_reason - computed: true, optional: false, required: false
  public get firmwareUpdateReason() {
    return this.getStringAttribute('firmware_update_reason');
  }

  // firmware_update_state - computed: true, optional: false, required: false
  public get firmwareUpdateState() {
    return this.getStringAttribute('firmware_update_state');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // healthy_host_count - computed: true, optional: false, required: false
  public get healthyHostCount() {
    return this.getStringAttribute('healthy_host_count');
  }

  // host_platform_name - computed: true, optional: false, required: false
  public get hostPlatformName() {
    return this.getStringAttribute('host_platform_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // memory_fabric_preferences - computed: true, optional: false, required: false
  private _memoryFabricPreferences = new DataOciCoreComputeGpuMemoryFabricsComputeGpuMemoryFabricCollectionItemsMemoryFabricPreferencesList(this, "memory_fabric_preferences", false);
  public get memoryFabricPreferences() {
    return this._memoryFabricPreferences;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // switch_platform_name - computed: true, optional: false, required: false
  public get switchPlatformName() {
    return this.getStringAttribute('switch_platform_name');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // target_firmware_bundle_id - computed: true, optional: false, required: false
  public get targetFirmwareBundleId() {
    return this.getStringAttribute('target_firmware_bundle_id');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // total_host_count - computed: true, optional: false, required: false
  public get totalHostCount() {
    return this.getStringAttribute('total_host_count');
  }
}

export class DataOciCoreComputeGpuMemoryFabricsComputeGpuMemoryFabricCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreComputeGpuMemoryFabricsComputeGpuMemoryFabricCollectionItemsOutputReference {
    return new DataOciCoreComputeGpuMemoryFabricsComputeGpuMemoryFabricCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreComputeGpuMemoryFabricsComputeGpuMemoryFabricCollection {
}

export function dataOciCoreComputeGpuMemoryFabricsComputeGpuMemoryFabricCollectionToTerraform(struct?: DataOciCoreComputeGpuMemoryFabricsComputeGpuMemoryFabricCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreComputeGpuMemoryFabricsComputeGpuMemoryFabricCollectionToHclTerraform(struct?: DataOciCoreComputeGpuMemoryFabricsComputeGpuMemoryFabricCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreComputeGpuMemoryFabricsComputeGpuMemoryFabricCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreComputeGpuMemoryFabricsComputeGpuMemoryFabricCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreComputeGpuMemoryFabricsComputeGpuMemoryFabricCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciCoreComputeGpuMemoryFabricsComputeGpuMemoryFabricCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciCoreComputeGpuMemoryFabricsComputeGpuMemoryFabricCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreComputeGpuMemoryFabricsComputeGpuMemoryFabricCollectionOutputReference {
    return new DataOciCoreComputeGpuMemoryFabricsComputeGpuMemoryFabricCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreComputeGpuMemoryFabricsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/core_compute_gpu_memory_fabrics#name DataOciCoreComputeGpuMemoryFabrics#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/core_compute_gpu_memory_fabrics#regex DataOciCoreComputeGpuMemoryFabrics#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/core_compute_gpu_memory_fabrics#values DataOciCoreComputeGpuMemoryFabrics#values}
  */
  readonly values: string[];
}

export function dataOciCoreComputeGpuMemoryFabricsFilterToTerraform(struct?: DataOciCoreComputeGpuMemoryFabricsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.booleanToTerraform(struct!.regex),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataOciCoreComputeGpuMemoryFabricsFilterToHclTerraform(struct?: DataOciCoreComputeGpuMemoryFabricsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOciCoreComputeGpuMemoryFabricsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreComputeGpuMemoryFabricsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreComputeGpuMemoryFabricsFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regex = value.regex;
      this._values = value.values;
    }
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

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataOciCoreComputeGpuMemoryFabricsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciCoreComputeGpuMemoryFabricsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciCoreComputeGpuMemoryFabricsFilterOutputReference {
    return new DataOciCoreComputeGpuMemoryFabricsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/core_compute_gpu_memory_fabrics oci_core_compute_gpu_memory_fabrics}
*/
export class DataOciCoreComputeGpuMemoryFabrics extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_core_compute_gpu_memory_fabrics";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciCoreComputeGpuMemoryFabrics resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciCoreComputeGpuMemoryFabrics to import
  * @param importFromId The id of the existing DataOciCoreComputeGpuMemoryFabrics that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/core_compute_gpu_memory_fabrics#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciCoreComputeGpuMemoryFabrics to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_core_compute_gpu_memory_fabrics", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/core_compute_gpu_memory_fabrics oci_core_compute_gpu_memory_fabrics} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciCoreComputeGpuMemoryFabricsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciCoreComputeGpuMemoryFabricsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_compute_gpu_memory_fabrics',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._availabilityDomain = config.availabilityDomain;
    this._compartmentId = config.compartmentId;
    this._computeGpuMemoryFabricHealth = config.computeGpuMemoryFabricHealth;
    this._computeGpuMemoryFabricId = config.computeGpuMemoryFabricId;
    this._computeGpuMemoryFabricLifecycleState = config.computeGpuMemoryFabricLifecycleState;
    this._computeHpcIslandId = config.computeHpcIslandId;
    this._computeNetworkBlockId = config.computeNetworkBlockId;
    this._displayName = config.displayName;
    this._id = config.id;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_domain - computed: false, optional: true, required: false
  private _availabilityDomain?: string; 
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }
  public set availabilityDomain(value: string) {
    this._availabilityDomain = value;
  }
  public resetAvailabilityDomain() {
    this._availabilityDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityDomainInput() {
    return this._availabilityDomain;
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // compute_gpu_memory_fabric_collection - computed: true, optional: false, required: false
  private _computeGpuMemoryFabricCollection = new DataOciCoreComputeGpuMemoryFabricsComputeGpuMemoryFabricCollectionList(this, "compute_gpu_memory_fabric_collection", false);
  public get computeGpuMemoryFabricCollection() {
    return this._computeGpuMemoryFabricCollection;
  }

  // compute_gpu_memory_fabric_health - computed: false, optional: true, required: false
  private _computeGpuMemoryFabricHealth?: string; 
  public get computeGpuMemoryFabricHealth() {
    return this.getStringAttribute('compute_gpu_memory_fabric_health');
  }
  public set computeGpuMemoryFabricHealth(value: string) {
    this._computeGpuMemoryFabricHealth = value;
  }
  public resetComputeGpuMemoryFabricHealth() {
    this._computeGpuMemoryFabricHealth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeGpuMemoryFabricHealthInput() {
    return this._computeGpuMemoryFabricHealth;
  }

  // compute_gpu_memory_fabric_id - computed: false, optional: true, required: false
  private _computeGpuMemoryFabricId?: string; 
  public get computeGpuMemoryFabricId() {
    return this.getStringAttribute('compute_gpu_memory_fabric_id');
  }
  public set computeGpuMemoryFabricId(value: string) {
    this._computeGpuMemoryFabricId = value;
  }
  public resetComputeGpuMemoryFabricId() {
    this._computeGpuMemoryFabricId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeGpuMemoryFabricIdInput() {
    return this._computeGpuMemoryFabricId;
  }

  // compute_gpu_memory_fabric_lifecycle_state - computed: false, optional: true, required: false
  private _computeGpuMemoryFabricLifecycleState?: string; 
  public get computeGpuMemoryFabricLifecycleState() {
    return this.getStringAttribute('compute_gpu_memory_fabric_lifecycle_state');
  }
  public set computeGpuMemoryFabricLifecycleState(value: string) {
    this._computeGpuMemoryFabricLifecycleState = value;
  }
  public resetComputeGpuMemoryFabricLifecycleState() {
    this._computeGpuMemoryFabricLifecycleState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeGpuMemoryFabricLifecycleStateInput() {
    return this._computeGpuMemoryFabricLifecycleState;
  }

  // compute_hpc_island_id - computed: false, optional: true, required: false
  private _computeHpcIslandId?: string; 
  public get computeHpcIslandId() {
    return this.getStringAttribute('compute_hpc_island_id');
  }
  public set computeHpcIslandId(value: string) {
    this._computeHpcIslandId = value;
  }
  public resetComputeHpcIslandId() {
    this._computeHpcIslandId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeHpcIslandIdInput() {
    return this._computeHpcIslandId;
  }

  // compute_network_block_id - computed: false, optional: true, required: false
  private _computeNetworkBlockId?: string; 
  public get computeNetworkBlockId() {
    return this.getStringAttribute('compute_network_block_id');
  }
  public set computeNetworkBlockId(value: string) {
    this._computeNetworkBlockId = value;
  }
  public resetComputeNetworkBlockId() {
    this._computeNetworkBlockId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeNetworkBlockIdInput() {
    return this._computeNetworkBlockId;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciCoreComputeGpuMemoryFabricsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciCoreComputeGpuMemoryFabricsFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_domain: cdktf.stringToTerraform(this._availabilityDomain),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      compute_gpu_memory_fabric_health: cdktf.stringToTerraform(this._computeGpuMemoryFabricHealth),
      compute_gpu_memory_fabric_id: cdktf.stringToTerraform(this._computeGpuMemoryFabricId),
      compute_gpu_memory_fabric_lifecycle_state: cdktf.stringToTerraform(this._computeGpuMemoryFabricLifecycleState),
      compute_hpc_island_id: cdktf.stringToTerraform(this._computeHpcIslandId),
      compute_network_block_id: cdktf.stringToTerraform(this._computeNetworkBlockId),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      filter: cdktf.listMapper(dataOciCoreComputeGpuMemoryFabricsFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_domain: {
        value: cdktf.stringToHclTerraform(this._availabilityDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compute_gpu_memory_fabric_health: {
        value: cdktf.stringToHclTerraform(this._computeGpuMemoryFabricHealth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compute_gpu_memory_fabric_id: {
        value: cdktf.stringToHclTerraform(this._computeGpuMemoryFabricId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compute_gpu_memory_fabric_lifecycle_state: {
        value: cdktf.stringToHclTerraform(this._computeGpuMemoryFabricLifecycleState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compute_hpc_island_id: {
        value: cdktf.stringToHclTerraform(this._computeHpcIslandId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compute_network_block_id: {
        value: cdktf.stringToHclTerraform(this._computeNetworkBlockId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      filter: {
        value: cdktf.listMapperHcl(dataOciCoreComputeGpuMemoryFabricsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciCoreComputeGpuMemoryFabricsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
