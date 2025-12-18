// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_maintenance_run
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseMaintenanceRunConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_maintenance_run#compartment_id DatabaseMaintenanceRun#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_maintenance_run#database_software_image_id DatabaseMaintenanceRun#database_software_image_id}
  */
  readonly databaseSoftwareImageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_maintenance_run#id DatabaseMaintenanceRun#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_maintenance_run#is_dst_file_update_enabled DatabaseMaintenanceRun#is_dst_file_update_enabled}
  */
  readonly isDstFileUpdateEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_maintenance_run#patch_type DatabaseMaintenanceRun#patch_type}
  */
  readonly patchType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_maintenance_run#patching_mode DatabaseMaintenanceRun#patching_mode}
  */
  readonly patchingMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_maintenance_run#target_resource_id DatabaseMaintenanceRun#target_resource_id}
  */
  readonly targetResourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_maintenance_run#time_scheduled DatabaseMaintenanceRun#time_scheduled}
  */
  readonly timeScheduled: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_maintenance_run#timeouts DatabaseMaintenanceRun#timeouts}
  */
  readonly timeouts?: DatabaseMaintenanceRunTimeouts;
}
export interface DatabaseMaintenanceRunEstimatedPatchingTime {
}

export function databaseMaintenanceRunEstimatedPatchingTimeToTerraform(struct?: DatabaseMaintenanceRunEstimatedPatchingTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseMaintenanceRunEstimatedPatchingTimeToHclTerraform(struct?: DatabaseMaintenanceRunEstimatedPatchingTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseMaintenanceRunEstimatedPatchingTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMaintenanceRunEstimatedPatchingTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // estimated_db_server_patching_time - computed: true, optional: false, required: false
  public get estimatedDbServerPatchingTime() {
    return this.getNumberAttribute('estimated_db_server_patching_time');
  }

  // estimated_network_switches_patching_time - computed: true, optional: false, required: false
  public get estimatedNetworkSwitchesPatchingTime() {
    return this.getNumberAttribute('estimated_network_switches_patching_time');
  }

  // estimated_storage_server_patching_time - computed: true, optional: false, required: false
  public get estimatedStorageServerPatchingTime() {
    return this.getNumberAttribute('estimated_storage_server_patching_time');
  }

  // total_estimated_patching_time - computed: true, optional: false, required: false
  public get totalEstimatedPatchingTime() {
    return this.getNumberAttribute('total_estimated_patching_time');
  }
}

export class DatabaseMaintenanceRunEstimatedPatchingTimeList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference {
    return new DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseMaintenanceRunTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_maintenance_run#create DatabaseMaintenanceRun#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_maintenance_run#delete DatabaseMaintenanceRun#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_maintenance_run#update DatabaseMaintenanceRun#update}
  */
  readonly update?: string;
}

export function databaseMaintenanceRunTimeoutsToTerraform(struct?: DatabaseMaintenanceRunTimeouts | cdktf.IResolvable): any {
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


export function databaseMaintenanceRunTimeoutsToHclTerraform(struct?: DatabaseMaintenanceRunTimeouts | cdktf.IResolvable): any {
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

export class DatabaseMaintenanceRunTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabaseMaintenanceRunTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DatabaseMaintenanceRunTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_maintenance_run oci_database_maintenance_run}
*/
export class DatabaseMaintenanceRun extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_maintenance_run";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatabaseMaintenanceRun resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabaseMaintenanceRun to import
  * @param importFromId The id of the existing DatabaseMaintenanceRun that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_maintenance_run#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabaseMaintenanceRun to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_maintenance_run", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_maintenance_run oci_database_maintenance_run} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseMaintenanceRunConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseMaintenanceRunConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_maintenance_run',
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
    this._compartmentId = config.compartmentId;
    this._databaseSoftwareImageId = config.databaseSoftwareImageId;
    this._id = config.id;
    this._isDstFileUpdateEnabled = config.isDstFileUpdateEnabled;
    this._patchType = config.patchType;
    this._patchingMode = config.patchingMode;
    this._targetResourceId = config.targetResourceId;
    this._timeScheduled = config.timeScheduled;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: true, required: false
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  public resetCompartmentId() {
    this._compartmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // current_custom_action_timeout_in_mins - computed: true, optional: false, required: false
  public get currentCustomActionTimeoutInMins() {
    return this.getNumberAttribute('current_custom_action_timeout_in_mins');
  }

  // current_patching_component - computed: true, optional: false, required: false
  public get currentPatchingComponent() {
    return this.getStringAttribute('current_patching_component');
  }

  // custom_action_timeout_in_mins - computed: true, optional: false, required: false
  public get customActionTimeoutInMins() {
    return this.getNumberAttribute('custom_action_timeout_in_mins');
  }

  // database_software_image_id - computed: true, optional: true, required: false
  private _databaseSoftwareImageId?: string; 
  public get databaseSoftwareImageId() {
    return this.getStringAttribute('database_software_image_id');
  }
  public set databaseSoftwareImageId(value: string) {
    this._databaseSoftwareImageId = value;
  }
  public resetDatabaseSoftwareImageId() {
    this._databaseSoftwareImageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseSoftwareImageIdInput() {
    return this._databaseSoftwareImageId;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // estimated_component_patching_start_time - computed: true, optional: false, required: false
  public get estimatedComponentPatchingStartTime() {
    return this.getStringAttribute('estimated_component_patching_start_time');
  }

  // estimated_patching_time - computed: true, optional: false, required: false
  private _estimatedPatchingTime = new DatabaseMaintenanceRunEstimatedPatchingTimeList(this, "estimated_patching_time", false);
  public get estimatedPatchingTime() {
    return this._estimatedPatchingTime;
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

  // is_custom_action_timeout_enabled - computed: true, optional: false, required: false
  public get isCustomActionTimeoutEnabled() {
    return this.getBooleanAttribute('is_custom_action_timeout_enabled');
  }

  // is_dst_file_update_enabled - computed: true, optional: true, required: false
  private _isDstFileUpdateEnabled?: boolean | cdktf.IResolvable; 
  public get isDstFileUpdateEnabled() {
    return this.getBooleanAttribute('is_dst_file_update_enabled');
  }
  public set isDstFileUpdateEnabled(value: boolean | cdktf.IResolvable) {
    this._isDstFileUpdateEnabled = value;
  }
  public resetIsDstFileUpdateEnabled() {
    this._isDstFileUpdateEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDstFileUpdateEnabledInput() {
    return this._isDstFileUpdateEnabled;
  }

  // is_maintenance_run_granular - computed: true, optional: false, required: false
  public get isMaintenanceRunGranular() {
    return this.getBooleanAttribute('is_maintenance_run_granular');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // maintenance_subtype - computed: true, optional: false, required: false
  public get maintenanceSubtype() {
    return this.getStringAttribute('maintenance_subtype');
  }

  // maintenance_type - computed: true, optional: false, required: false
  public get maintenanceType() {
    return this.getStringAttribute('maintenance_type');
  }

  // patch_failure_count - computed: true, optional: false, required: false
  public get patchFailureCount() {
    return this.getNumberAttribute('patch_failure_count');
  }

  // patch_id - computed: true, optional: false, required: false
  public get patchId() {
    return this.getStringAttribute('patch_id');
  }

  // patch_type - computed: false, optional: false, required: true
  private _patchType?: string; 
  public get patchType() {
    return this.getStringAttribute('patch_type');
  }
  public set patchType(value: string) {
    this._patchType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patchTypeInput() {
    return this._patchType;
  }

  // patching_end_time - computed: true, optional: false, required: false
  public get patchingEndTime() {
    return this.getStringAttribute('patching_end_time');
  }

  // patching_mode - computed: true, optional: true, required: false
  private _patchingMode?: string; 
  public get patchingMode() {
    return this.getStringAttribute('patching_mode');
  }
  public set patchingMode(value: string) {
    this._patchingMode = value;
  }
  public resetPatchingMode() {
    this._patchingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchingModeInput() {
    return this._patchingMode;
  }

  // patching_start_time - computed: true, optional: false, required: false
  public get patchingStartTime() {
    return this.getStringAttribute('patching_start_time');
  }

  // patching_status - computed: true, optional: false, required: false
  public get patchingStatus() {
    return this.getStringAttribute('patching_status');
  }

  // peer_maintenance_run_id - computed: true, optional: false, required: false
  public get peerMaintenanceRunId() {
    return this.getStringAttribute('peer_maintenance_run_id');
  }

  // peer_maintenance_run_ids - computed: true, optional: false, required: false
  public get peerMaintenanceRunIds() {
    return this.getListAttribute('peer_maintenance_run_ids');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // target_db_server_version - computed: true, optional: false, required: false
  public get targetDbServerVersion() {
    return this.getStringAttribute('target_db_server_version');
  }

  // target_resource_id - computed: false, optional: false, required: true
  private _targetResourceId?: string; 
  public get targetResourceId() {
    return this.getStringAttribute('target_resource_id');
  }
  public set targetResourceId(value: string) {
    this._targetResourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetResourceIdInput() {
    return this._targetResourceId;
  }

  // target_resource_type - computed: true, optional: false, required: false
  public get targetResourceType() {
    return this.getStringAttribute('target_resource_type');
  }

  // target_storage_server_version - computed: true, optional: false, required: false
  public get targetStorageServerVersion() {
    return this.getStringAttribute('target_storage_server_version');
  }

  // time_ended - computed: true, optional: false, required: false
  public get timeEnded() {
    return this.getStringAttribute('time_ended');
  }

  // time_scheduled - computed: false, optional: false, required: true
  private _timeScheduled?: string; 
  public get timeScheduled() {
    return this.getStringAttribute('time_scheduled');
  }
  public set timeScheduled(value: string) {
    this._timeScheduled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeScheduledInput() {
    return this._timeScheduled;
  }

  // time_started - computed: true, optional: false, required: false
  public get timeStarted() {
    return this.getStringAttribute('time_started');
  }

  // total_time_taken_in_mins - computed: true, optional: false, required: false
  public get totalTimeTakenInMins() {
    return this.getNumberAttribute('total_time_taken_in_mins');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DatabaseMaintenanceRunTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatabaseMaintenanceRunTimeouts) {
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
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      database_software_image_id: cdktf.stringToTerraform(this._databaseSoftwareImageId),
      id: cdktf.stringToTerraform(this._id),
      is_dst_file_update_enabled: cdktf.booleanToTerraform(this._isDstFileUpdateEnabled),
      patch_type: cdktf.stringToTerraform(this._patchType),
      patching_mode: cdktf.stringToTerraform(this._patchingMode),
      target_resource_id: cdktf.stringToTerraform(this._targetResourceId),
      time_scheduled: cdktf.stringToTerraform(this._timeScheduled),
      timeouts: databaseMaintenanceRunTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_software_image_id: {
        value: cdktf.stringToHclTerraform(this._databaseSoftwareImageId),
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
      is_dst_file_update_enabled: {
        value: cdktf.booleanToHclTerraform(this._isDstFileUpdateEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      patch_type: {
        value: cdktf.stringToHclTerraform(this._patchType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      patching_mode: {
        value: cdktf.stringToHclTerraform(this._patchingMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_resource_id: {
        value: cdktf.stringToHclTerraform(this._targetResourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_scheduled: {
        value: cdktf.stringToHclTerraform(this._timeScheduled),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: databaseMaintenanceRunTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatabaseMaintenanceRunTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
