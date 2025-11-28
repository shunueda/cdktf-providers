// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/postgresql_log_backups
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudPostgresqlLogBackupsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/postgresql_log_backups#id DataTencentcloudPostgresqlLogBackups#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Maximum end time of a backup in the format of `2018-01-01 00:00:00`. It is the current time by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/postgresql_log_backups#max_finish_time DataTencentcloudPostgresqlLogBackups#max_finish_time}
  */
  readonly maxFinishTime?: string;
  /**
  * Minimum end time of a backup in the format of `2018-01-01 00:00:00`. It is 7 days ago by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/postgresql_log_backups#min_finish_time DataTencentcloudPostgresqlLogBackups#min_finish_time}
  */
  readonly minFinishTime?: string;
  /**
  * Sorting field. Valid values: `StartTime`, `FinishTime`, `Size`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/postgresql_log_backups#order_by DataTencentcloudPostgresqlLogBackups#order_by}
  */
  readonly orderBy?: string;
  /**
  * Sorting order. Valid values: `asc` (ascending), `desc` (descending).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/postgresql_log_backups#order_by_type DataTencentcloudPostgresqlLogBackups#order_by_type}
  */
  readonly orderByType?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/postgresql_log_backups#result_output_file DataTencentcloudPostgresqlLogBackups#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/postgresql_log_backups#filters DataTencentcloudPostgresqlLogBackups#filters}
  */
  readonly filters?: DataTencentcloudPostgresqlLogBackupsFilters[] | cdktf.IResolvable;
}
export interface DataTencentcloudPostgresqlLogBackupsLogBackupSet {
}

export function dataTencentcloudPostgresqlLogBackupsLogBackupSetToTerraform(struct?: DataTencentcloudPostgresqlLogBackupsLogBackupSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudPostgresqlLogBackupsLogBackupSetToHclTerraform(struct?: DataTencentcloudPostgresqlLogBackupsLogBackupSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudPostgresqlLogBackupsLogBackupSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudPostgresqlLogBackupsLogBackupSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudPostgresqlLogBackupsLogBackupSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backup_method - computed: true, optional: false, required: false
  public get backupMethod() {
    return this.getStringAttribute('backup_method');
  }

  // backup_mode - computed: true, optional: false, required: false
  public get backupMode() {
    return this.getStringAttribute('backup_mode');
  }

  // db_instance_id - computed: true, optional: false, required: false
  public get dbInstanceId() {
    return this.getStringAttribute('db_instance_id');
  }

  // expire_time - computed: true, optional: false, required: false
  public get expireTime() {
    return this.getStringAttribute('expire_time');
  }

  // finish_time - computed: true, optional: false, required: false
  public get finishTime() {
    return this.getStringAttribute('finish_time');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class DataTencentcloudPostgresqlLogBackupsLogBackupSetList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudPostgresqlLogBackupsLogBackupSetOutputReference {
    return new DataTencentcloudPostgresqlLogBackupsLogBackupSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudPostgresqlLogBackupsFilters {
  /**
  * Filter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/postgresql_log_backups#name DataTencentcloudPostgresqlLogBackups#name}
  */
  readonly name?: string;
  /**
  * One or more filter values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/postgresql_log_backups#values DataTencentcloudPostgresqlLogBackups#values}
  */
  readonly values?: string[];
}

export function dataTencentcloudPostgresqlLogBackupsFiltersToTerraform(struct?: DataTencentcloudPostgresqlLogBackupsFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataTencentcloudPostgresqlLogBackupsFiltersToHclTerraform(struct?: DataTencentcloudPostgresqlLogBackupsFilters | cdktf.IResolvable): any {
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
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTencentcloudPostgresqlLogBackupsFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudPostgresqlLogBackupsFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudPostgresqlLogBackupsFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
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
      this._values = value.values;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataTencentcloudPostgresqlLogBackupsFiltersList extends cdktf.ComplexList {
  public internalValue? : DataTencentcloudPostgresqlLogBackupsFilters[] | cdktf.IResolvable

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
  public get(index: number): DataTencentcloudPostgresqlLogBackupsFiltersOutputReference {
    return new DataTencentcloudPostgresqlLogBackupsFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/postgresql_log_backups tencentcloud_postgresql_log_backups}
*/
export class DataTencentcloudPostgresqlLogBackups extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_postgresql_log_backups";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudPostgresqlLogBackups resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudPostgresqlLogBackups to import
  * @param importFromId The id of the existing DataTencentcloudPostgresqlLogBackups that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/postgresql_log_backups#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudPostgresqlLogBackups to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_postgresql_log_backups", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/postgresql_log_backups tencentcloud_postgresql_log_backups} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudPostgresqlLogBackupsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudPostgresqlLogBackupsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_postgresql_log_backups',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.39',
        providerVersionConstraint: '1.82.39'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._maxFinishTime = config.maxFinishTime;
    this._minFinishTime = config.minFinishTime;
    this._orderBy = config.orderBy;
    this._orderByType = config.orderByType;
    this._resultOutputFile = config.resultOutputFile;
    this._filters.internalValue = config.filters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // log_backup_set - computed: true, optional: false, required: false
  private _logBackupSet = new DataTencentcloudPostgresqlLogBackupsLogBackupSetList(this, "log_backup_set", false);
  public get logBackupSet() {
    return this._logBackupSet;
  }

  // max_finish_time - computed: false, optional: true, required: false
  private _maxFinishTime?: string; 
  public get maxFinishTime() {
    return this.getStringAttribute('max_finish_time');
  }
  public set maxFinishTime(value: string) {
    this._maxFinishTime = value;
  }
  public resetMaxFinishTime() {
    this._maxFinishTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFinishTimeInput() {
    return this._maxFinishTime;
  }

  // min_finish_time - computed: false, optional: true, required: false
  private _minFinishTime?: string; 
  public get minFinishTime() {
    return this.getStringAttribute('min_finish_time');
  }
  public set minFinishTime(value: string) {
    this._minFinishTime = value;
  }
  public resetMinFinishTime() {
    this._minFinishTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minFinishTimeInput() {
    return this._minFinishTime;
  }

  // order_by - computed: false, optional: true, required: false
  private _orderBy?: string; 
  public get orderBy() {
    return this.getStringAttribute('order_by');
  }
  public set orderBy(value: string) {
    this._orderBy = value;
  }
  public resetOrderBy() {
    this._orderBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderByInput() {
    return this._orderBy;
  }

  // order_by_type - computed: false, optional: true, required: false
  private _orderByType?: string; 
  public get orderByType() {
    return this.getStringAttribute('order_by_type');
  }
  public set orderByType(value: string) {
    this._orderByType = value;
  }
  public resetOrderByType() {
    this._orderByType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderByTypeInput() {
    return this._orderByType;
  }

  // result_output_file - computed: false, optional: true, required: false
  private _resultOutputFile?: string; 
  public get resultOutputFile() {
    return this.getStringAttribute('result_output_file');
  }
  public set resultOutputFile(value: string) {
    this._resultOutputFile = value;
  }
  public resetResultOutputFile() {
    this._resultOutputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultOutputFileInput() {
    return this._resultOutputFile;
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new DataTencentcloudPostgresqlLogBackupsFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: DataTencentcloudPostgresqlLogBackupsFilters[] | cdktf.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      max_finish_time: cdktf.stringToTerraform(this._maxFinishTime),
      min_finish_time: cdktf.stringToTerraform(this._minFinishTime),
      order_by: cdktf.stringToTerraform(this._orderBy),
      order_by_type: cdktf.stringToTerraform(this._orderByType),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      filters: cdktf.listMapper(dataTencentcloudPostgresqlLogBackupsFiltersToTerraform, true)(this._filters.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_finish_time: {
        value: cdktf.stringToHclTerraform(this._maxFinishTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min_finish_time: {
        value: cdktf.stringToHclTerraform(this._minFinishTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      order_by: {
        value: cdktf.stringToHclTerraform(this._orderBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      order_by_type: {
        value: cdktf.stringToHclTerraform(this._orderByType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filters: {
        value: cdktf.listMapperHcl(dataTencentcloudPostgresqlLogBackupsFiltersToHclTerraform, true)(this._filters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTencentcloudPostgresqlLogBackupsFiltersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
