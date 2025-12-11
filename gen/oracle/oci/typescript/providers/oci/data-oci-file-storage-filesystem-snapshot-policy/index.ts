// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/file_storage_filesystem_snapshot_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciFileStorageFilesystemSnapshotPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/file_storage_filesystem_snapshot_policy#filesystem_snapshot_policy_id DataOciFileStorageFilesystemSnapshotPolicy#filesystem_snapshot_policy_id}
  */
  readonly filesystemSnapshotPolicyId: string;
}
export interface DataOciFileStorageFilesystemSnapshotPolicyLocks {
}

export function dataOciFileStorageFilesystemSnapshotPolicyLocksToTerraform(struct?: DataOciFileStorageFilesystemSnapshotPolicyLocks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFileStorageFilesystemSnapshotPolicyLocksToHclTerraform(struct?: DataOciFileStorageFilesystemSnapshotPolicyLocks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFileStorageFilesystemSnapshotPolicyLocks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFileStorageFilesystemSnapshotPolicyLocks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // related_resource_id - computed: true, optional: false, required: false
  public get relatedResourceId() {
    return this.getStringAttribute('related_resource_id');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciFileStorageFilesystemSnapshotPolicyLocksList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference {
    return new DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFileStorageFilesystemSnapshotPolicySchedules {
}

export function dataOciFileStorageFilesystemSnapshotPolicySchedulesToTerraform(struct?: DataOciFileStorageFilesystemSnapshotPolicySchedules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFileStorageFilesystemSnapshotPolicySchedulesToHclTerraform(struct?: DataOciFileStorageFilesystemSnapshotPolicySchedules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFileStorageFilesystemSnapshotPolicySchedules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFileStorageFilesystemSnapshotPolicySchedules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // day_of_month - computed: true, optional: false, required: false
  public get dayOfMonth() {
    return this.getNumberAttribute('day_of_month');
  }

  // day_of_week - computed: true, optional: false, required: false
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }

  // hour_of_day - computed: true, optional: false, required: false
  public get hourOfDay() {
    return this.getNumberAttribute('hour_of_day');
  }

  // month - computed: true, optional: false, required: false
  public get month() {
    return this.getStringAttribute('month');
  }

  // period - computed: true, optional: false, required: false
  public get period() {
    return this.getStringAttribute('period');
  }

  // retention_duration_in_seconds - computed: true, optional: false, required: false
  public get retentionDurationInSeconds() {
    return this.getStringAttribute('retention_duration_in_seconds');
  }

  // schedule_prefix - computed: true, optional: false, required: false
  public get schedulePrefix() {
    return this.getStringAttribute('schedule_prefix');
  }

  // time_schedule_start - computed: true, optional: false, required: false
  public get timeScheduleStart() {
    return this.getStringAttribute('time_schedule_start');
  }

  // time_zone - computed: true, optional: false, required: false
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
}

export class DataOciFileStorageFilesystemSnapshotPolicySchedulesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference {
    return new DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/file_storage_filesystem_snapshot_policy oci_file_storage_filesystem_snapshot_policy}
*/
export class DataOciFileStorageFilesystemSnapshotPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_file_storage_filesystem_snapshot_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciFileStorageFilesystemSnapshotPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciFileStorageFilesystemSnapshotPolicy to import
  * @param importFromId The id of the existing DataOciFileStorageFilesystemSnapshotPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/file_storage_filesystem_snapshot_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciFileStorageFilesystemSnapshotPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_file_storage_filesystem_snapshot_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/file_storage_filesystem_snapshot_policy oci_file_storage_filesystem_snapshot_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciFileStorageFilesystemSnapshotPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciFileStorageFilesystemSnapshotPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_file_storage_filesystem_snapshot_policy',
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
    this._filesystemSnapshotPolicyId = config.filesystemSnapshotPolicyId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_domain - computed: true, optional: false, required: false
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
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

  // filesystem_snapshot_policy_id - computed: false, optional: false, required: true
  private _filesystemSnapshotPolicyId?: string; 
  public get filesystemSnapshotPolicyId() {
    return this.getStringAttribute('filesystem_snapshot_policy_id');
  }
  public set filesystemSnapshotPolicyId(value: string) {
    this._filesystemSnapshotPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filesystemSnapshotPolicyIdInput() {
    return this._filesystemSnapshotPolicyId;
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

  // is_lock_override - computed: true, optional: false, required: false
  public get isLockOverride() {
    return this.getBooleanAttribute('is_lock_override');
  }

  // locks - computed: true, optional: false, required: false
  private _locks = new DataOciFileStorageFilesystemSnapshotPolicyLocksList(this, "locks", false);
  public get locks() {
    return this._locks;
  }

  // policy_prefix - computed: true, optional: false, required: false
  public get policyPrefix() {
    return this.getStringAttribute('policy_prefix');
  }

  // schedules - computed: true, optional: false, required: false
  private _schedules = new DataOciFileStorageFilesystemSnapshotPolicySchedulesList(this, "schedules", false);
  public get schedules() {
    return this._schedules;
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

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filesystem_snapshot_policy_id: cdktf.stringToTerraform(this._filesystemSnapshotPolicyId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filesystem_snapshot_policy_id: {
        value: cdktf.stringToHclTerraform(this._filesystemSnapshotPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
