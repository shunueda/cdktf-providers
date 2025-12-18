// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_compute_host
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CoreComputeHostConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_compute_host#compute_host_group_id CoreComputeHost#compute_host_group_id}
  */
  readonly computeHostGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_compute_host#compute_host_id CoreComputeHost#compute_host_id}
  */
  readonly computeHostId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_compute_host#configuration_action_type CoreComputeHost#configuration_action_type}
  */
  readonly configurationActionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_compute_host#id CoreComputeHost#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_compute_host#timeouts CoreComputeHost#timeouts}
  */
  readonly timeouts?: CoreComputeHostTimeouts;
}
export interface CoreComputeHostConfigurationDataCheckDetails {
}

export function coreComputeHostConfigurationDataCheckDetailsToTerraform(struct?: CoreComputeHostConfigurationDataCheckDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function coreComputeHostConfigurationDataCheckDetailsToHclTerraform(struct?: CoreComputeHostConfigurationDataCheckDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CoreComputeHostConfigurationDataCheckDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CoreComputeHostConfigurationDataCheckDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreComputeHostConfigurationDataCheckDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // configuration_state - computed: true, optional: false, required: false
  public get configurationState() {
    return this.getStringAttribute('configuration_state');
  }

  // firmware_bundle_id - computed: true, optional: false, required: false
  public get firmwareBundleId() {
    return this.getStringAttribute('firmware_bundle_id');
  }

  // recycle_level - computed: true, optional: false, required: false
  public get recycleLevel() {
    return this.getStringAttribute('recycle_level');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class CoreComputeHostConfigurationDataCheckDetailsList extends cdktf.ComplexList {

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
  public get(index: number): CoreComputeHostConfigurationDataCheckDetailsOutputReference {
    return new CoreComputeHostConfigurationDataCheckDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CoreComputeHostConfigurationData {
}

export function coreComputeHostConfigurationDataToTerraform(struct?: CoreComputeHostConfigurationData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function coreComputeHostConfigurationDataToHclTerraform(struct?: CoreComputeHostConfigurationData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CoreComputeHostConfigurationDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CoreComputeHostConfigurationData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreComputeHostConfigurationData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // check_details - computed: true, optional: false, required: false
  private _checkDetails = new CoreComputeHostConfigurationDataCheckDetailsList(this, "check_details", false);
  public get checkDetails() {
    return this._checkDetails;
  }

  // time_last_apply - computed: true, optional: false, required: false
  public get timeLastApply() {
    return this.getStringAttribute('time_last_apply');
  }
}

export class CoreComputeHostConfigurationDataList extends cdktf.ComplexList {

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
  public get(index: number): CoreComputeHostConfigurationDataOutputReference {
    return new CoreComputeHostConfigurationDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CoreComputeHostRecycleDetails {
}

export function coreComputeHostRecycleDetailsToTerraform(struct?: CoreComputeHostRecycleDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function coreComputeHostRecycleDetailsToHclTerraform(struct?: CoreComputeHostRecycleDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CoreComputeHostRecycleDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CoreComputeHostRecycleDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreComputeHostRecycleDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compute_host_group_id - computed: true, optional: false, required: false
  public get computeHostGroupId() {
    return this.getStringAttribute('compute_host_group_id');
  }

  // recycle_level - computed: true, optional: false, required: false
  public get recycleLevel() {
    return this.getStringAttribute('recycle_level');
  }
}

export class CoreComputeHostRecycleDetailsList extends cdktf.ComplexList {

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
  public get(index: number): CoreComputeHostRecycleDetailsOutputReference {
    return new CoreComputeHostRecycleDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CoreComputeHostTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_compute_host#create CoreComputeHost#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_compute_host#delete CoreComputeHost#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_compute_host#update CoreComputeHost#update}
  */
  readonly update?: string;
}

export function coreComputeHostTimeoutsToTerraform(struct?: CoreComputeHostTimeouts | cdktf.IResolvable): any {
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


export function coreComputeHostTimeoutsToHclTerraform(struct?: CoreComputeHostTimeouts | cdktf.IResolvable): any {
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

export class CoreComputeHostTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CoreComputeHostTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CoreComputeHostTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_compute_host oci_core_compute_host}
*/
export class CoreComputeHost extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_core_compute_host";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CoreComputeHost resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CoreComputeHost to import
  * @param importFromId The id of the existing CoreComputeHost that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_compute_host#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CoreComputeHost to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_core_compute_host", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_compute_host oci_core_compute_host} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CoreComputeHostConfig
  */
  public constructor(scope: Construct, id: string, config: CoreComputeHostConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_compute_host',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._computeHostGroupId = config.computeHostGroupId;
    this._computeHostId = config.computeHostId;
    this._configurationActionType = config.configurationActionType;
    this._id = config.id;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_data - computed: true, optional: false, required: false
  public get additionalData() {
    return this.getStringAttribute('additional_data');
  }

  // availability_domain - computed: true, optional: false, required: false
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // capacity_reservation_id - computed: true, optional: false, required: false
  public get capacityReservationId() {
    return this.getStringAttribute('capacity_reservation_id');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // compute_host_group_id - computed: true, optional: true, required: false
  private _computeHostGroupId?: string; 
  public get computeHostGroupId() {
    return this.getStringAttribute('compute_host_group_id');
  }
  public set computeHostGroupId(value: string) {
    this._computeHostGroupId = value;
  }
  public resetComputeHostGroupId() {
    this._computeHostGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeHostGroupIdInput() {
    return this._computeHostGroupId;
  }

  // compute_host_id - computed: false, optional: false, required: true
  private _computeHostId?: string; 
  public get computeHostId() {
    return this.getStringAttribute('compute_host_id');
  }
  public set computeHostId(value: string) {
    this._computeHostId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeHostIdInput() {
    return this._computeHostId;
  }

  // configuration_action_type - computed: false, optional: true, required: false
  private _configurationActionType?: string; 
  public get configurationActionType() {
    return this.getStringAttribute('configuration_action_type');
  }
  public set configurationActionType(value: string) {
    this._configurationActionType = value;
  }
  public resetConfigurationActionType() {
    this._configurationActionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationActionTypeInput() {
    return this._configurationActionType;
  }

  // configuration_data - computed: true, optional: false, required: false
  private _configurationData = new CoreComputeHostConfigurationDataList(this, "configuration_data", false);
  public get configurationData() {
    return this._configurationData;
  }

  // configuration_state - computed: true, optional: false, required: false
  public get configurationState() {
    return this.getStringAttribute('configuration_state');
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

  // firmware_bundle_id - computed: true, optional: false, required: false
  public get firmwareBundleId() {
    return this.getStringAttribute('firmware_bundle_id');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // gpu_memory_fabric_id - computed: true, optional: false, required: false
  public get gpuMemoryFabricId() {
    return this.getStringAttribute('gpu_memory_fabric_id');
  }

  // health - computed: true, optional: false, required: false
  public get health() {
    return this.getStringAttribute('health');
  }

  // hpc_island_id - computed: true, optional: false, required: false
  public get hpcIslandId() {
    return this.getStringAttribute('hpc_island_id');
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

  // impacted_component_details - computed: true, optional: false, required: false
  public get impactedComponentDetails() {
    return this.getStringAttribute('impacted_component_details');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  private _lifecycleDetails = new cdktf.StringMap(this, "lifecycle_details");
  public get lifecycleDetails() {
    return this._lifecycleDetails;
  }

  // local_block_id - computed: true, optional: false, required: false
  public get localBlockId() {
    return this.getStringAttribute('local_block_id');
  }

  // network_block_id - computed: true, optional: false, required: false
  public get networkBlockId() {
    return this.getStringAttribute('network_block_id');
  }

  // platform - computed: true, optional: false, required: false
  public get platform() {
    return this.getStringAttribute('platform');
  }

  // recycle_details - computed: true, optional: false, required: false
  private _recycleDetails = new CoreComputeHostRecycleDetailsList(this, "recycle_details", false);
  public get recycleDetails() {
    return this._recycleDetails;
  }

  // shape - computed: true, optional: false, required: false
  public get shape() {
    return this.getStringAttribute('shape');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_configuration_check - computed: true, optional: false, required: false
  public get timeConfigurationCheck() {
    return this.getStringAttribute('time_configuration_check');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CoreComputeHostTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CoreComputeHostTimeouts) {
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
      compute_host_group_id: cdktf.stringToTerraform(this._computeHostGroupId),
      compute_host_id: cdktf.stringToTerraform(this._computeHostId),
      configuration_action_type: cdktf.stringToTerraform(this._configurationActionType),
      id: cdktf.stringToTerraform(this._id),
      timeouts: coreComputeHostTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compute_host_group_id: {
        value: cdktf.stringToHclTerraform(this._computeHostGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compute_host_id: {
        value: cdktf.stringToHclTerraform(this._computeHostId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configuration_action_type: {
        value: cdktf.stringToHclTerraform(this._configurationActionType),
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
      timeouts: {
        value: coreComputeHostTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CoreComputeHostTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
