// https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/core_dedicated_vm_hosts
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciCoreDedicatedVmHostsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/core_dedicated_vm_hosts#availability_domain DataOciCoreDedicatedVmHosts#availability_domain}
  */
  readonly availabilityDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/core_dedicated_vm_hosts#compartment_id DataOciCoreDedicatedVmHosts#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/core_dedicated_vm_hosts#display_name DataOciCoreDedicatedVmHosts#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/core_dedicated_vm_hosts#id DataOciCoreDedicatedVmHosts#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/core_dedicated_vm_hosts#instance_shape_name DataOciCoreDedicatedVmHosts#instance_shape_name}
  */
  readonly instanceShapeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/core_dedicated_vm_hosts#is_memory_encryption_enabled DataOciCoreDedicatedVmHosts#is_memory_encryption_enabled}
  */
  readonly isMemoryEncryptionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/core_dedicated_vm_hosts#remaining_memory_in_gbs_greater_than_or_equal_to DataOciCoreDedicatedVmHosts#remaining_memory_in_gbs_greater_than_or_equal_to}
  */
  readonly remainingMemoryInGbsGreaterThanOrEqualTo?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/core_dedicated_vm_hosts#remaining_ocpus_greater_than_or_equal_to DataOciCoreDedicatedVmHosts#remaining_ocpus_greater_than_or_equal_to}
  */
  readonly remainingOcpusGreaterThanOrEqualTo?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/core_dedicated_vm_hosts#state DataOciCoreDedicatedVmHosts#state}
  */
  readonly state?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/core_dedicated_vm_hosts#filter DataOciCoreDedicatedVmHosts#filter}
  */
  readonly filter?: DataOciCoreDedicatedVmHostsFilter[] | cdktf.IResolvable;
}
export interface DataOciCoreDedicatedVmHostsDedicatedVmHostsCapacityBins {
}

export function dataOciCoreDedicatedVmHostsDedicatedVmHostsCapacityBinsToTerraform(struct?: DataOciCoreDedicatedVmHostsDedicatedVmHostsCapacityBins): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreDedicatedVmHostsDedicatedVmHostsCapacityBinsToHclTerraform(struct?: DataOciCoreDedicatedVmHostsDedicatedVmHostsCapacityBins): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreDedicatedVmHostsDedicatedVmHostsCapacityBinsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreDedicatedVmHostsDedicatedVmHostsCapacityBins | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreDedicatedVmHostsDedicatedVmHostsCapacityBins | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // capacity_index - computed: true, optional: false, required: false
  public get capacityIndex() {
    return this.getNumberAttribute('capacity_index');
  }

  // remaining_memory_in_gbs - computed: true, optional: false, required: false
  public get remainingMemoryInGbs() {
    return this.getNumberAttribute('remaining_memory_in_gbs');
  }

  // remaining_ocpus - computed: true, optional: false, required: false
  public get remainingOcpus() {
    return this.getNumberAttribute('remaining_ocpus');
  }

  // supported_shapes - computed: true, optional: false, required: false
  public get supportedShapes() {
    return this.getListAttribute('supported_shapes');
  }

  // total_memory_in_gbs - computed: true, optional: false, required: false
  public get totalMemoryInGbs() {
    return this.getNumberAttribute('total_memory_in_gbs');
  }

  // total_ocpus - computed: true, optional: false, required: false
  public get totalOcpus() {
    return this.getNumberAttribute('total_ocpus');
  }
}

export class DataOciCoreDedicatedVmHostsDedicatedVmHostsCapacityBinsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreDedicatedVmHostsDedicatedVmHostsCapacityBinsOutputReference {
    return new DataOciCoreDedicatedVmHostsDedicatedVmHostsCapacityBinsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreDedicatedVmHostsDedicatedVmHostsPlacementConstraintDetails {
}

export function dataOciCoreDedicatedVmHostsDedicatedVmHostsPlacementConstraintDetailsToTerraform(struct?: DataOciCoreDedicatedVmHostsDedicatedVmHostsPlacementConstraintDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreDedicatedVmHostsDedicatedVmHostsPlacementConstraintDetailsToHclTerraform(struct?: DataOciCoreDedicatedVmHostsDedicatedVmHostsPlacementConstraintDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreDedicatedVmHostsDedicatedVmHostsPlacementConstraintDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreDedicatedVmHostsDedicatedVmHostsPlacementConstraintDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreDedicatedVmHostsDedicatedVmHostsPlacementConstraintDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compute_bare_metal_host_id - computed: true, optional: false, required: false
  public get computeBareMetalHostId() {
    return this.getStringAttribute('compute_bare_metal_host_id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciCoreDedicatedVmHostsDedicatedVmHostsPlacementConstraintDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreDedicatedVmHostsDedicatedVmHostsPlacementConstraintDetailsOutputReference {
    return new DataOciCoreDedicatedVmHostsDedicatedVmHostsPlacementConstraintDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreDedicatedVmHostsDedicatedVmHosts {
}

export function dataOciCoreDedicatedVmHostsDedicatedVmHostsToTerraform(struct?: DataOciCoreDedicatedVmHostsDedicatedVmHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreDedicatedVmHostsDedicatedVmHostsToHclTerraform(struct?: DataOciCoreDedicatedVmHostsDedicatedVmHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreDedicatedVmHostsDedicatedVmHosts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreDedicatedVmHostsDedicatedVmHosts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_domain - computed: true, optional: false, required: false
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // capacity_bins - computed: true, optional: false, required: false
  private _capacityBins = new DataOciCoreDedicatedVmHostsDedicatedVmHostsCapacityBinsList(this, "capacity_bins", false);
  public get capacityBins() {
    return this._capacityBins;
  }

  // capacity_config - computed: true, optional: false, required: false
  public get capacityConfig() {
    return this.getStringAttribute('capacity_config');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // compute_bare_metal_host_id - computed: true, optional: false, required: false
  public get computeBareMetalHostId() {
    return this.getStringAttribute('compute_bare_metal_host_id');
  }

  // dedicated_vm_host_shape - computed: true, optional: false, required: false
  public get dedicatedVmHostShape() {
    return this.getStringAttribute('dedicated_vm_host_shape');
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

  // fault_domain - computed: true, optional: false, required: false
  public get faultDomain() {
    return this.getStringAttribute('fault_domain');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_memory_encryption_enabled - computed: true, optional: false, required: false
  public get isMemoryEncryptionEnabled() {
    return this.getBooleanAttribute('is_memory_encryption_enabled');
  }

  // placement_constraint_details - computed: true, optional: false, required: false
  private _placementConstraintDetails = new DataOciCoreDedicatedVmHostsDedicatedVmHostsPlacementConstraintDetailsList(this, "placement_constraint_details", false);
  public get placementConstraintDetails() {
    return this._placementConstraintDetails;
  }

  // remaining_memory_in_gbs - computed: true, optional: false, required: false
  public get remainingMemoryInGbs() {
    return this.getNumberAttribute('remaining_memory_in_gbs');
  }

  // remaining_ocpus - computed: true, optional: false, required: false
  public get remainingOcpus() {
    return this.getNumberAttribute('remaining_ocpus');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // total_memory_in_gbs - computed: true, optional: false, required: false
  public get totalMemoryInGbs() {
    return this.getNumberAttribute('total_memory_in_gbs');
  }

  // total_ocpus - computed: true, optional: false, required: false
  public get totalOcpus() {
    return this.getNumberAttribute('total_ocpus');
  }
}

export class DataOciCoreDedicatedVmHostsDedicatedVmHostsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference {
    return new DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreDedicatedVmHostsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/core_dedicated_vm_hosts#name DataOciCoreDedicatedVmHosts#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/core_dedicated_vm_hosts#regex DataOciCoreDedicatedVmHosts#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/core_dedicated_vm_hosts#values DataOciCoreDedicatedVmHosts#values}
  */
  readonly values: string[];
}

export function dataOciCoreDedicatedVmHostsFilterToTerraform(struct?: DataOciCoreDedicatedVmHostsFilter | cdktf.IResolvable): any {
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


export function dataOciCoreDedicatedVmHostsFilterToHclTerraform(struct?: DataOciCoreDedicatedVmHostsFilter | cdktf.IResolvable): any {
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

export class DataOciCoreDedicatedVmHostsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreDedicatedVmHostsFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciCoreDedicatedVmHostsFilter | cdktf.IResolvable | undefined) {
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

export class DataOciCoreDedicatedVmHostsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciCoreDedicatedVmHostsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciCoreDedicatedVmHostsFilterOutputReference {
    return new DataOciCoreDedicatedVmHostsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/core_dedicated_vm_hosts oci_core_dedicated_vm_hosts}
*/
export class DataOciCoreDedicatedVmHosts extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_core_dedicated_vm_hosts";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciCoreDedicatedVmHosts resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciCoreDedicatedVmHosts to import
  * @param importFromId The id of the existing DataOciCoreDedicatedVmHosts that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/core_dedicated_vm_hosts#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciCoreDedicatedVmHosts to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_core_dedicated_vm_hosts", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/core_dedicated_vm_hosts oci_core_dedicated_vm_hosts} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciCoreDedicatedVmHostsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciCoreDedicatedVmHostsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_dedicated_vm_hosts',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.27.0',
        providerVersionConstraint: '7.27.0'
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
    this._displayName = config.displayName;
    this._id = config.id;
    this._instanceShapeName = config.instanceShapeName;
    this._isMemoryEncryptionEnabled = config.isMemoryEncryptionEnabled;
    this._remainingMemoryInGbsGreaterThanOrEqualTo = config.remainingMemoryInGbsGreaterThanOrEqualTo;
    this._remainingOcpusGreaterThanOrEqualTo = config.remainingOcpusGreaterThanOrEqualTo;
    this._state = config.state;
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

  // dedicated_vm_hosts - computed: true, optional: false, required: false
  private _dedicatedVmHosts = new DataOciCoreDedicatedVmHostsDedicatedVmHostsList(this, "dedicated_vm_hosts", false);
  public get dedicatedVmHosts() {
    return this._dedicatedVmHosts;
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

  // instance_shape_name - computed: false, optional: true, required: false
  private _instanceShapeName?: string; 
  public get instanceShapeName() {
    return this.getStringAttribute('instance_shape_name');
  }
  public set instanceShapeName(value: string) {
    this._instanceShapeName = value;
  }
  public resetInstanceShapeName() {
    this._instanceShapeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceShapeNameInput() {
    return this._instanceShapeName;
  }

  // is_memory_encryption_enabled - computed: false, optional: true, required: false
  private _isMemoryEncryptionEnabled?: boolean | cdktf.IResolvable; 
  public get isMemoryEncryptionEnabled() {
    return this.getBooleanAttribute('is_memory_encryption_enabled');
  }
  public set isMemoryEncryptionEnabled(value: boolean | cdktf.IResolvable) {
    this._isMemoryEncryptionEnabled = value;
  }
  public resetIsMemoryEncryptionEnabled() {
    this._isMemoryEncryptionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMemoryEncryptionEnabledInput() {
    return this._isMemoryEncryptionEnabled;
  }

  // remaining_memory_in_gbs_greater_than_or_equal_to - computed: false, optional: true, required: false
  private _remainingMemoryInGbsGreaterThanOrEqualTo?: number; 
  public get remainingMemoryInGbsGreaterThanOrEqualTo() {
    return this.getNumberAttribute('remaining_memory_in_gbs_greater_than_or_equal_to');
  }
  public set remainingMemoryInGbsGreaterThanOrEqualTo(value: number) {
    this._remainingMemoryInGbsGreaterThanOrEqualTo = value;
  }
  public resetRemainingMemoryInGbsGreaterThanOrEqualTo() {
    this._remainingMemoryInGbsGreaterThanOrEqualTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remainingMemoryInGbsGreaterThanOrEqualToInput() {
    return this._remainingMemoryInGbsGreaterThanOrEqualTo;
  }

  // remaining_ocpus_greater_than_or_equal_to - computed: false, optional: true, required: false
  private _remainingOcpusGreaterThanOrEqualTo?: number; 
  public get remainingOcpusGreaterThanOrEqualTo() {
    return this.getNumberAttribute('remaining_ocpus_greater_than_or_equal_to');
  }
  public set remainingOcpusGreaterThanOrEqualTo(value: number) {
    this._remainingOcpusGreaterThanOrEqualTo = value;
  }
  public resetRemainingOcpusGreaterThanOrEqualTo() {
    this._remainingOcpusGreaterThanOrEqualTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remainingOcpusGreaterThanOrEqualToInput() {
    return this._remainingOcpusGreaterThanOrEqualTo;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciCoreDedicatedVmHostsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciCoreDedicatedVmHostsFilter[] | cdktf.IResolvable) {
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
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      instance_shape_name: cdktf.stringToTerraform(this._instanceShapeName),
      is_memory_encryption_enabled: cdktf.booleanToTerraform(this._isMemoryEncryptionEnabled),
      remaining_memory_in_gbs_greater_than_or_equal_to: cdktf.numberToTerraform(this._remainingMemoryInGbsGreaterThanOrEqualTo),
      remaining_ocpus_greater_than_or_equal_to: cdktf.numberToTerraform(this._remainingOcpusGreaterThanOrEqualTo),
      state: cdktf.stringToTerraform(this._state),
      filter: cdktf.listMapper(dataOciCoreDedicatedVmHostsFilterToTerraform, true)(this._filter.internalValue),
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
      instance_shape_name: {
        value: cdktf.stringToHclTerraform(this._instanceShapeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_memory_encryption_enabled: {
        value: cdktf.booleanToHclTerraform(this._isMemoryEncryptionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      remaining_memory_in_gbs_greater_than_or_equal_to: {
        value: cdktf.numberToHclTerraform(this._remainingMemoryInGbsGreaterThanOrEqualTo),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      remaining_ocpus_greater_than_or_equal_to: {
        value: cdktf.numberToHclTerraform(this._remainingOcpusGreaterThanOrEqualTo),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciCoreDedicatedVmHostsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciCoreDedicatedVmHostsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
