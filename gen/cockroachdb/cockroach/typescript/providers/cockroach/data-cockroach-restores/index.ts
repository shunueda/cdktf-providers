// https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs/data-sources/restores
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCockroachRestoresConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the cluster where the restore jobs ran or are currently running.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs/data-sources/restores#cluster_id DataCockroachRestores#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Ending timestamp of the range (exclusive) used to search for restore jobs based on their creation time. If this field is provided, start_time must also be included in the request. Uses a date format with optional timestamp, for example: `2023-01-15` or `2023-01-15T10:30:00Z`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs/data-sources/restores#end_time DataCockroachRestores#end_time}
  */
  readonly endTime?: string;
  /**
  * The maximum number of restore jobs to return. If not set, only the first 500 restore jobs will be returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs/data-sources/restores#limit DataCockroachRestores#limit}
  */
  readonly limit?: number;
  /**
  * Specifies the sort direction for the returned results. Use `ASC` for ascending or `DESC` for descending order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs/data-sources/restores#sort_order DataCockroachRestores#sort_order}
  */
  readonly sortOrder?: string;
  /**
  * Beginning timestamp of the range (inclusive) used to search for restore jobs based on their creation time. If this field is provided, end_time must also be included in the request. Uses a date format with optional timestamp, for example: `2023-01-15` or `2023-01-15T10:30:00Z`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs/data-sources/restores#start_time DataCockroachRestores#start_time}
  */
  readonly startTime?: string;
}
export interface DataCockroachRestoresRestoresObjects {
}

export function dataCockroachRestoresRestoresObjectsToTerraform(struct?: DataCockroachRestoresRestoresObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCockroachRestoresRestoresObjectsToHclTerraform(struct?: DataCockroachRestoresRestoresObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCockroachRestoresRestoresObjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCockroachRestoresRestoresObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCockroachRestoresRestoresObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // schema - computed: true, optional: false, required: false
  public get schema() {
    return this.getStringAttribute('schema');
  }

  // tables - computed: true, optional: false, required: false
  public get tables() {
    return this.getListAttribute('tables');
  }
}

export class DataCockroachRestoresRestoresObjectsList extends cdktf.ComplexList {

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
  public get(index: number): DataCockroachRestoresRestoresObjectsOutputReference {
    return new DataCockroachRestoresRestoresObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCockroachRestoresRestoresRestoreOpts {
}

export function dataCockroachRestoresRestoresRestoreOptsToTerraform(struct?: DataCockroachRestoresRestoresRestoreOpts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCockroachRestoresRestoresRestoreOptsToHclTerraform(struct?: DataCockroachRestoresRestoresRestoreOpts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCockroachRestoresRestoresRestoreOptsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCockroachRestoresRestoresRestoreOpts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCockroachRestoresRestoresRestoreOpts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // into_db - computed: true, optional: false, required: false
  public get intoDb() {
    return this.getStringAttribute('into_db');
  }

  // new_db_name - computed: true, optional: false, required: false
  public get newDbName() {
    return this.getStringAttribute('new_db_name');
  }

  // schema_only - computed: true, optional: false, required: false
  public get schemaOnly() {
    return this.getBooleanAttribute('schema_only');
  }

  // skip_localities_check - computed: true, optional: false, required: false
  public get skipLocalitiesCheck() {
    return this.getBooleanAttribute('skip_localities_check');
  }

  // skip_missing_foreign_keys - computed: true, optional: false, required: false
  public get skipMissingForeignKeys() {
    return this.getBooleanAttribute('skip_missing_foreign_keys');
  }

  // skip_missing_sequences - computed: true, optional: false, required: false
  public get skipMissingSequences() {
    return this.getBooleanAttribute('skip_missing_sequences');
  }

  // skip_missing_views - computed: true, optional: false, required: false
  public get skipMissingViews() {
    return this.getBooleanAttribute('skip_missing_views');
  }
}
export interface DataCockroachRestoresRestores {
}

export function dataCockroachRestoresRestoresToTerraform(struct?: DataCockroachRestoresRestores): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCockroachRestoresRestoresToHclTerraform(struct?: DataCockroachRestoresRestores): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCockroachRestoresRestoresOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCockroachRestoresRestores | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCockroachRestoresRestores | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backup_end_time - computed: true, optional: false, required: false
  public get backupEndTime() {
    return this.getStringAttribute('backup_end_time');
  }

  // backup_id - computed: true, optional: false, required: false
  public get backupId() {
    return this.getStringAttribute('backup_id');
  }

  // client_error_code - computed: true, optional: false, required: false
  public get clientErrorCode() {
    return this.getNumberAttribute('client_error_code');
  }

  // client_error_message - computed: true, optional: false, required: false
  public get clientErrorMessage() {
    return this.getStringAttribute('client_error_message');
  }

  // completed_at - computed: true, optional: false, required: false
  public get completedAt() {
    return this.getStringAttribute('completed_at');
  }

  // completion_percent - computed: true, optional: false, required: false
  public get completionPercent() {
    return this.getNumberAttribute('completion_percent');
  }

  // crdb_job_id - computed: true, optional: false, required: false
  public get crdbJobId() {
    return this.getStringAttribute('crdb_job_id');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // destination_cluster_name - computed: true, optional: false, required: false
  public get destinationClusterName() {
    return this.getStringAttribute('destination_cluster_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // objects - computed: true, optional: false, required: false
  private _objects = new DataCockroachRestoresRestoresObjectsList(this, "objects", false);
  public get objects() {
    return this._objects;
  }

  // restore_opts - computed: true, optional: false, required: false
  private _restoreOpts = new DataCockroachRestoresRestoresRestoreOptsOutputReference(this, "restore_opts");
  public get restoreOpts() {
    return this._restoreOpts;
  }

  // source_cluster_name - computed: true, optional: false, required: false
  public get sourceClusterName() {
    return this.getStringAttribute('source_cluster_name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataCockroachRestoresRestoresList extends cdktf.ComplexList {

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
  public get(index: number): DataCockroachRestoresRestoresOutputReference {
    return new DataCockroachRestoresRestoresOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs/data-sources/restores cockroach_restores}
*/
export class DataCockroachRestores extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cockroach_restores";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCockroachRestores resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCockroachRestores to import
  * @param importFromId The id of the existing DataCockroachRestores that should be imported. Refer to the {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs/data-sources/restores#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCockroachRestores to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cockroach_restores", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs/data-sources/restores cockroach_restores} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCockroachRestoresConfig
  */
  public constructor(scope: Construct, id: string, config: DataCockroachRestoresConfig) {
    super(scope, id, {
      terraformResourceType: 'cockroach_restores',
      terraformGeneratorMetadata: {
        providerName: 'cockroach',
        providerVersion: '1.17.0',
        providerVersionConstraint: '1.17.0'
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
    this._endTime = config.endTime;
    this._limit = config.limit;
    this._sortOrder = config.sortOrder;
    this._startTime = config.startTime;
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

  // end_time - computed: false, optional: true, required: false
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // restores - computed: true, optional: false, required: false
  private _restores = new DataCockroachRestoresRestoresList(this, "restores", false);
  public get restores() {
    return this._restores;
  }

  // sort_order - computed: false, optional: true, required: false
  private _sortOrder?: string; 
  public get sortOrder() {
    return this.getStringAttribute('sort_order');
  }
  public set sortOrder(value: string) {
    this._sortOrder = value;
  }
  public resetSortOrder() {
    this._sortOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortOrderInput() {
    return this._sortOrder;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      end_time: cdktf.stringToTerraform(this._endTime),
      limit: cdktf.numberToTerraform(this._limit),
      sort_order: cdktf.stringToTerraform(this._sortOrder),
      start_time: cdktf.stringToTerraform(this._startTime),
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
      end_time: {
        value: cdktf.stringToHclTerraform(this._endTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      limit: {
        value: cdktf.numberToHclTerraform(this._limit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sort_order: {
        value: cdktf.stringToHclTerraform(this._sortOrder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_time: {
        value: cdktf.stringToHclTerraform(this._startTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
