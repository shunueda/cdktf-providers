// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/database_maintenance_run
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseMaintenanceRunConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/database_maintenance_run#maintenance_run_id DataOciDatabaseMaintenanceRun#maintenance_run_id}
  */
  readonly maintenanceRunId: string;
}
export interface DataOciDatabaseMaintenanceRunEstimatedPatchingTime {
}

export function dataOciDatabaseMaintenanceRunEstimatedPatchingTimeToTerraform(struct?: DataOciDatabaseMaintenanceRunEstimatedPatchingTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMaintenanceRunEstimatedPatchingTimeToHclTerraform(struct?: DataOciDatabaseMaintenanceRunEstimatedPatchingTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMaintenanceRunEstimatedPatchingTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMaintenanceRunEstimatedPatchingTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMaintenanceRunEstimatedPatchingTime | undefined) {
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

export class DataOciDatabaseMaintenanceRunEstimatedPatchingTimeList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMaintenanceRunEstimatedPatchingTimeOutputReference {
    return new DataOciDatabaseMaintenanceRunEstimatedPatchingTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/database_maintenance_run oci_database_maintenance_run}
*/
export class DataOciDatabaseMaintenanceRun extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_maintenance_run";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatabaseMaintenanceRun resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatabaseMaintenanceRun to import
  * @param importFromId The id of the existing DataOciDatabaseMaintenanceRun that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/database_maintenance_run#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatabaseMaintenanceRun to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_maintenance_run", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/database_maintenance_run oci_database_maintenance_run} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseMaintenanceRunConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseMaintenanceRunConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_maintenance_run',
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
    this._maintenanceRunId = config.maintenanceRunId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
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

  // database_software_image_id - computed: true, optional: false, required: false
  public get databaseSoftwareImageId() {
    return this.getStringAttribute('database_software_image_id');
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
  private _estimatedPatchingTime = new DataOciDatabaseMaintenanceRunEstimatedPatchingTimeList(this, "estimated_patching_time", false);
  public get estimatedPatchingTime() {
    return this._estimatedPatchingTime;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_custom_action_timeout_enabled - computed: true, optional: false, required: false
  public get isCustomActionTimeoutEnabled() {
    return this.getBooleanAttribute('is_custom_action_timeout_enabled');
  }

  // is_dst_file_update_enabled - computed: true, optional: false, required: false
  public get isDstFileUpdateEnabled() {
    return this.getBooleanAttribute('is_dst_file_update_enabled');
  }

  // is_maintenance_run_granular - computed: true, optional: false, required: false
  public get isMaintenanceRunGranular() {
    return this.getBooleanAttribute('is_maintenance_run_granular');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // maintenance_run_id - computed: false, optional: false, required: true
  private _maintenanceRunId?: string; 
  public get maintenanceRunId() {
    return this.getStringAttribute('maintenance_run_id');
  }
  public set maintenanceRunId(value: string) {
    this._maintenanceRunId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceRunIdInput() {
    return this._maintenanceRunId;
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

  // patch_type - computed: true, optional: false, required: false
  public get patchType() {
    return this.getStringAttribute('patch_type');
  }

  // patching_end_time - computed: true, optional: false, required: false
  public get patchingEndTime() {
    return this.getStringAttribute('patching_end_time');
  }

  // patching_mode - computed: true, optional: false, required: false
  public get patchingMode() {
    return this.getStringAttribute('patching_mode');
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

  // target_resource_id - computed: true, optional: false, required: false
  public get targetResourceId() {
    return this.getStringAttribute('target_resource_id');
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

  // time_scheduled - computed: true, optional: false, required: false
  public get timeScheduled() {
    return this.getStringAttribute('time_scheduled');
  }

  // time_started - computed: true, optional: false, required: false
  public get timeStarted() {
    return this.getStringAttribute('time_started');
  }

  // total_time_taken_in_mins - computed: true, optional: false, required: false
  public get totalTimeTakenInMins() {
    return this.getNumberAttribute('total_time_taken_in_mins');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      maintenance_run_id: cdktf.stringToTerraform(this._maintenanceRunId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      maintenance_run_id: {
        value: cdktf.stringToHclTerraform(this._maintenanceRunId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
