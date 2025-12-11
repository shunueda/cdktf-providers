// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_maintenance_runs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseMaintenanceRunsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_maintenance_runs#availability_domain DataOciDatabaseMaintenanceRuns#availability_domain}
  */
  readonly availabilityDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_maintenance_runs#compartment_id DataOciDatabaseMaintenanceRuns#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_maintenance_runs#id DataOciDatabaseMaintenanceRuns#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_maintenance_runs#is_local_adg DataOciDatabaseMaintenanceRuns#is_local_adg}
  */
  readonly isLocalAdg?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_maintenance_runs#maintenance_subtype DataOciDatabaseMaintenanceRuns#maintenance_subtype}
  */
  readonly maintenanceSubtype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_maintenance_runs#maintenance_type DataOciDatabaseMaintenanceRuns#maintenance_type}
  */
  readonly maintenanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_maintenance_runs#state DataOciDatabaseMaintenanceRuns#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_maintenance_runs#target_resource_id DataOciDatabaseMaintenanceRuns#target_resource_id}
  */
  readonly targetResourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_maintenance_runs#target_resource_type DataOciDatabaseMaintenanceRuns#target_resource_type}
  */
  readonly targetResourceType?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_maintenance_runs#filter DataOciDatabaseMaintenanceRuns#filter}
  */
  readonly filter?: DataOciDatabaseMaintenanceRunsFilter[] | cdktf.IResolvable;
}
export interface DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTime {
}

export function dataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeToTerraform(struct?: DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeToHclTerraform(struct?: DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTime | undefined) {
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

export class DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference {
    return new DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMaintenanceRunsMaintenanceRuns {
}

export function dataOciDatabaseMaintenanceRunsMaintenanceRunsToTerraform(struct?: DataOciDatabaseMaintenanceRunsMaintenanceRuns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMaintenanceRunsMaintenanceRunsToHclTerraform(struct?: DataOciDatabaseMaintenanceRunsMaintenanceRuns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMaintenanceRunsMaintenanceRuns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMaintenanceRunsMaintenanceRuns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

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
  private _estimatedPatchingTime = new DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList(this, "estimated_patching_time", false);
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
}

export class DataOciDatabaseMaintenanceRunsMaintenanceRunsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference {
    return new DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMaintenanceRunsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_maintenance_runs#name DataOciDatabaseMaintenanceRuns#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_maintenance_runs#regex DataOciDatabaseMaintenanceRuns#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_maintenance_runs#values DataOciDatabaseMaintenanceRuns#values}
  */
  readonly values: string[];
}

export function dataOciDatabaseMaintenanceRunsFilterToTerraform(struct?: DataOciDatabaseMaintenanceRunsFilter | cdktf.IResolvable): any {
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


export function dataOciDatabaseMaintenanceRunsFilterToHclTerraform(struct?: DataOciDatabaseMaintenanceRunsFilter | cdktf.IResolvable): any {
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

export class DataOciDatabaseMaintenanceRunsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMaintenanceRunsFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciDatabaseMaintenanceRunsFilter | cdktf.IResolvable | undefined) {
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

export class DataOciDatabaseMaintenanceRunsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciDatabaseMaintenanceRunsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciDatabaseMaintenanceRunsFilterOutputReference {
    return new DataOciDatabaseMaintenanceRunsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_maintenance_runs oci_database_maintenance_runs}
*/
export class DataOciDatabaseMaintenanceRuns extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_maintenance_runs";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatabaseMaintenanceRuns resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatabaseMaintenanceRuns to import
  * @param importFromId The id of the existing DataOciDatabaseMaintenanceRuns that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_maintenance_runs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatabaseMaintenanceRuns to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_maintenance_runs", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_maintenance_runs oci_database_maintenance_runs} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseMaintenanceRunsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseMaintenanceRunsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_maintenance_runs',
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
    this._id = config.id;
    this._isLocalAdg = config.isLocalAdg;
    this._maintenanceSubtype = config.maintenanceSubtype;
    this._maintenanceType = config.maintenanceType;
    this._state = config.state;
    this._targetResourceId = config.targetResourceId;
    this._targetResourceType = config.targetResourceType;
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

  // is_local_adg - computed: false, optional: true, required: false
  private _isLocalAdg?: boolean | cdktf.IResolvable; 
  public get isLocalAdg() {
    return this.getBooleanAttribute('is_local_adg');
  }
  public set isLocalAdg(value: boolean | cdktf.IResolvable) {
    this._isLocalAdg = value;
  }
  public resetIsLocalAdg() {
    this._isLocalAdg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isLocalAdgInput() {
    return this._isLocalAdg;
  }

  // maintenance_runs - computed: true, optional: false, required: false
  private _maintenanceRuns = new DataOciDatabaseMaintenanceRunsMaintenanceRunsList(this, "maintenance_runs", false);
  public get maintenanceRuns() {
    return this._maintenanceRuns;
  }

  // maintenance_subtype - computed: false, optional: true, required: false
  private _maintenanceSubtype?: string; 
  public get maintenanceSubtype() {
    return this.getStringAttribute('maintenance_subtype');
  }
  public set maintenanceSubtype(value: string) {
    this._maintenanceSubtype = value;
  }
  public resetMaintenanceSubtype() {
    this._maintenanceSubtype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceSubtypeInput() {
    return this._maintenanceSubtype;
  }

  // maintenance_type - computed: false, optional: true, required: false
  private _maintenanceType?: string; 
  public get maintenanceType() {
    return this.getStringAttribute('maintenance_type');
  }
  public set maintenanceType(value: string) {
    this._maintenanceType = value;
  }
  public resetMaintenanceType() {
    this._maintenanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceTypeInput() {
    return this._maintenanceType;
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

  // target_resource_id - computed: false, optional: true, required: false
  private _targetResourceId?: string; 
  public get targetResourceId() {
    return this.getStringAttribute('target_resource_id');
  }
  public set targetResourceId(value: string) {
    this._targetResourceId = value;
  }
  public resetTargetResourceId() {
    this._targetResourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetResourceIdInput() {
    return this._targetResourceId;
  }

  // target_resource_type - computed: false, optional: true, required: false
  private _targetResourceType?: string; 
  public get targetResourceType() {
    return this.getStringAttribute('target_resource_type');
  }
  public set targetResourceType(value: string) {
    this._targetResourceType = value;
  }
  public resetTargetResourceType() {
    this._targetResourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetResourceTypeInput() {
    return this._targetResourceType;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciDatabaseMaintenanceRunsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciDatabaseMaintenanceRunsFilter[] | cdktf.IResolvable) {
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
      id: cdktf.stringToTerraform(this._id),
      is_local_adg: cdktf.booleanToTerraform(this._isLocalAdg),
      maintenance_subtype: cdktf.stringToTerraform(this._maintenanceSubtype),
      maintenance_type: cdktf.stringToTerraform(this._maintenanceType),
      state: cdktf.stringToTerraform(this._state),
      target_resource_id: cdktf.stringToTerraform(this._targetResourceId),
      target_resource_type: cdktf.stringToTerraform(this._targetResourceType),
      filter: cdktf.listMapper(dataOciDatabaseMaintenanceRunsFilterToTerraform, true)(this._filter.internalValue),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_local_adg: {
        value: cdktf.booleanToHclTerraform(this._isLocalAdg),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      maintenance_subtype: {
        value: cdktf.stringToHclTerraform(this._maintenanceSubtype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maintenance_type: {
        value: cdktf.stringToHclTerraform(this._maintenanceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
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
      target_resource_type: {
        value: cdktf.stringToHclTerraform(this._targetResourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciDatabaseMaintenanceRunsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciDatabaseMaintenanceRunsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
