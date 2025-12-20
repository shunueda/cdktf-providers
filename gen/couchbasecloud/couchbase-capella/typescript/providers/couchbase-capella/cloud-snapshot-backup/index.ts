// https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/cloud_snapshot_backup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudSnapshotBackupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/cloud_snapshot_backup#cluster_id CloudSnapshotBackup#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/cloud_snapshot_backup#cross_region_restore_preference CloudSnapshotBackup#cross_region_restore_preference}
  */
  readonly crossRegionRestorePreference?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/cloud_snapshot_backup#organization_id CloudSnapshotBackup#organization_id}
  */
  readonly organizationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/cloud_snapshot_backup#project_id CloudSnapshotBackup#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/cloud_snapshot_backup#regions_to_copy CloudSnapshotBackup#regions_to_copy}
  */
  readonly regionsToCopy?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/cloud_snapshot_backup#restore_times CloudSnapshotBackup#restore_times}
  */
  readonly restoreTimes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/cloud_snapshot_backup#retention CloudSnapshotBackup#retention}
  */
  readonly retention?: number;
}
export interface CloudSnapshotBackupCmek {
}

export function cloudSnapshotBackupCmekToTerraform(struct?: CloudSnapshotBackupCmek): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudSnapshotBackupCmekToHclTerraform(struct?: CloudSnapshotBackupCmek): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudSnapshotBackupCmekOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudSnapshotBackupCmek | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudSnapshotBackupCmek | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // provider_id - computed: true, optional: false, required: false
  public get providerId() {
    return this.getStringAttribute('provider_id');
  }
}

export class CloudSnapshotBackupCmekList extends cdktf.ComplexList {

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
  public get(index: number): CloudSnapshotBackupCmekOutputReference {
    return new CloudSnapshotBackupCmekOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudSnapshotBackupCrossRegionCopies {
}

export function cloudSnapshotBackupCrossRegionCopiesToTerraform(struct?: CloudSnapshotBackupCrossRegionCopies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudSnapshotBackupCrossRegionCopiesToHclTerraform(struct?: CloudSnapshotBackupCrossRegionCopies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudSnapshotBackupCrossRegionCopiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudSnapshotBackupCrossRegionCopies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudSnapshotBackupCrossRegionCopies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // region_code - computed: true, optional: false, required: false
  public get regionCode() {
    return this.getStringAttribute('region_code');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // time - computed: true, optional: false, required: false
  public get time() {
    return this.getStringAttribute('time');
  }
}

export class CloudSnapshotBackupCrossRegionCopiesList extends cdktf.ComplexList {

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
  public get(index: number): CloudSnapshotBackupCrossRegionCopiesOutputReference {
    return new CloudSnapshotBackupCrossRegionCopiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudSnapshotBackupProgress {
}

export function cloudSnapshotBackupProgressToTerraform(struct?: CloudSnapshotBackupProgress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudSnapshotBackupProgressToHclTerraform(struct?: CloudSnapshotBackupProgress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudSnapshotBackupProgressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudSnapshotBackupProgress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudSnapshotBackupProgress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // time - computed: true, optional: false, required: false
  public get time() {
    return this.getStringAttribute('time');
  }
}
export interface CloudSnapshotBackupServer {
}

export function cloudSnapshotBackupServerToTerraform(struct?: CloudSnapshotBackupServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudSnapshotBackupServerToHclTerraform(struct?: CloudSnapshotBackupServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudSnapshotBackupServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudSnapshotBackupServer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudSnapshotBackupServer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/cloud_snapshot_backup couchbase-capella_cloud_snapshot_backup}
*/
export class CloudSnapshotBackup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "couchbase-capella_cloud_snapshot_backup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudSnapshotBackup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudSnapshotBackup to import
  * @param importFromId The id of the existing CloudSnapshotBackup that should be imported. Refer to the {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/cloud_snapshot_backup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudSnapshotBackup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "couchbase-capella_cloud_snapshot_backup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/cloud_snapshot_backup couchbase-capella_cloud_snapshot_backup} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudSnapshotBackupConfig
  */
  public constructor(scope: Construct, id: string, config: CloudSnapshotBackupConfig) {
    super(scope, id, {
      terraformResourceType: 'couchbase-capella_cloud_snapshot_backup',
      terraformGeneratorMetadata: {
        providerName: 'couchbase-capella',
        providerVersion: '1.7.0',
        providerVersionConstraint: '1.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterId = config.clusterId;
    this._crossRegionRestorePreference = config.crossRegionRestorePreference;
    this._organizationId = config.organizationId;
    this._projectId = config.projectId;
    this._regionsToCopy = config.regionsToCopy;
    this._restoreTimes = config.restoreTimes;
    this._retention = config.retention;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // cmek - computed: true, optional: false, required: false
  private _cmek = new CloudSnapshotBackupCmekList(this, "cmek", true);
  public get cmek() {
    return this._cmek;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // cross_region_copies - computed: true, optional: false, required: false
  private _crossRegionCopies = new CloudSnapshotBackupCrossRegionCopiesList(this, "cross_region_copies", true);
  public get crossRegionCopies() {
    return this._crossRegionCopies;
  }

  // cross_region_restore_preference - computed: false, optional: true, required: false
  private _crossRegionRestorePreference?: string[]; 
  public get crossRegionRestorePreference() {
    return this.getListAttribute('cross_region_restore_preference');
  }
  public set crossRegionRestorePreference(value: string[]) {
    this._crossRegionRestorePreference = value;
  }
  public resetCrossRegionRestorePreference() {
    this._crossRegionRestorePreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossRegionRestorePreferenceInput() {
    return this._crossRegionRestorePreference;
  }

  // expiration - computed: true, optional: false, required: false
  public get expiration() {
    return this.getStringAttribute('expiration');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // progress - computed: true, optional: false, required: false
  private _progress = new CloudSnapshotBackupProgressOutputReference(this, "progress");
  public get progress() {
    return this._progress;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // regions_to_copy - computed: false, optional: true, required: false
  private _regionsToCopy?: string[]; 
  public get regionsToCopy() {
    return cdktf.Fn.tolist(this.getListAttribute('regions_to_copy'));
  }
  public set regionsToCopy(value: string[]) {
    this._regionsToCopy = value;
  }
  public resetRegionsToCopy() {
    this._regionsToCopy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsToCopyInput() {
    return this._regionsToCopy;
  }

  // restore_times - computed: false, optional: true, required: false
  private _restoreTimes?: number; 
  public get restoreTimes() {
    return this.getNumberAttribute('restore_times');
  }
  public set restoreTimes(value: number) {
    this._restoreTimes = value;
  }
  public resetRestoreTimes() {
    this._restoreTimes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreTimesInput() {
    return this._restoreTimes;
  }

  // retention - computed: true, optional: true, required: false
  private _retention?: number; 
  public get retention() {
    return this.getNumberAttribute('retention');
  }
  public set retention(value: number) {
    this._retention = value;
  }
  public resetRetention() {
    this._retention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInput() {
    return this._retention;
  }

  // server - computed: true, optional: false, required: false
  private _server = new CloudSnapshotBackupServerOutputReference(this, "server");
  public get server() {
    return this._server;
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      cross_region_restore_preference: cdktf.listMapper(cdktf.stringToTerraform, false)(this._crossRegionRestorePreference),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      project_id: cdktf.stringToTerraform(this._projectId),
      regions_to_copy: cdktf.listMapper(cdktf.stringToTerraform, false)(this._regionsToCopy),
      restore_times: cdktf.numberToTerraform(this._restoreTimes),
      retention: cdktf.numberToTerraform(this._retention),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cross_region_restore_preference: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._crossRegionRestorePreference),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      regions_to_copy: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._regionsToCopy),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      restore_times: {
        value: cdktf.numberToHclTerraform(this._restoreTimes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retention: {
        value: cdktf.numberToHclTerraform(this._retention),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
