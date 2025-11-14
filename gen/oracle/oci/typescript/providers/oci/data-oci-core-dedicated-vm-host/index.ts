// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/core_dedicated_vm_host
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciCoreDedicatedVmHostConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/core_dedicated_vm_host#dedicated_vm_host_id DataOciCoreDedicatedVmHost#dedicated_vm_host_id}
  */
  readonly dedicatedVmHostId: string;
}
export interface DataOciCoreDedicatedVmHostCapacityBins {
}

export function dataOciCoreDedicatedVmHostCapacityBinsToTerraform(struct?: DataOciCoreDedicatedVmHostCapacityBins): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreDedicatedVmHostCapacityBinsToHclTerraform(struct?: DataOciCoreDedicatedVmHostCapacityBins): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreDedicatedVmHostCapacityBinsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreDedicatedVmHostCapacityBins | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreDedicatedVmHostCapacityBins | undefined) {
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

export class DataOciCoreDedicatedVmHostCapacityBinsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreDedicatedVmHostCapacityBinsOutputReference {
    return new DataOciCoreDedicatedVmHostCapacityBinsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreDedicatedVmHostPlacementConstraintDetails {
}

export function dataOciCoreDedicatedVmHostPlacementConstraintDetailsToTerraform(struct?: DataOciCoreDedicatedVmHostPlacementConstraintDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreDedicatedVmHostPlacementConstraintDetailsToHclTerraform(struct?: DataOciCoreDedicatedVmHostPlacementConstraintDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreDedicatedVmHostPlacementConstraintDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreDedicatedVmHostPlacementConstraintDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreDedicatedVmHostPlacementConstraintDetails | undefined) {
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

export class DataOciCoreDedicatedVmHostPlacementConstraintDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreDedicatedVmHostPlacementConstraintDetailsOutputReference {
    return new DataOciCoreDedicatedVmHostPlacementConstraintDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/core_dedicated_vm_host oci_core_dedicated_vm_host}
*/
export class DataOciCoreDedicatedVmHost extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_core_dedicated_vm_host";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciCoreDedicatedVmHost resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciCoreDedicatedVmHost to import
  * @param importFromId The id of the existing DataOciCoreDedicatedVmHost that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/core_dedicated_vm_host#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciCoreDedicatedVmHost to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_core_dedicated_vm_host", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/core_dedicated_vm_host oci_core_dedicated_vm_host} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciCoreDedicatedVmHostConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciCoreDedicatedVmHostConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_dedicated_vm_host',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dedicatedVmHostId = config.dedicatedVmHostId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_domain - computed: true, optional: false, required: false
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // capacity_bins - computed: true, optional: false, required: false
  private _capacityBins = new DataOciCoreDedicatedVmHostCapacityBinsList(this, "capacity_bins", false);
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

  // dedicated_vm_host_id - computed: false, optional: false, required: true
  private _dedicatedVmHostId?: string; 
  public get dedicatedVmHostId() {
    return this.getStringAttribute('dedicated_vm_host_id');
  }
  public set dedicatedVmHostId(value: string) {
    this._dedicatedVmHostId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedVmHostIdInput() {
    return this._dedicatedVmHostId;
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
  private _placementConstraintDetails = new DataOciCoreDedicatedVmHostPlacementConstraintDetailsList(this, "placement_constraint_details", false);
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dedicated_vm_host_id: cdktf.stringToTerraform(this._dedicatedVmHostId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dedicated_vm_host_id: {
        value: cdktf.stringToHclTerraform(this._dedicatedVmHostId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
