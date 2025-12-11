// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#begin_exec_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding#begin_exec_id}
  */
  readonly beginExecId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#end_exec_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding#end_exec_id}
  */
  readonly endExecId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#finding_filter DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding#finding_filter}
  */
  readonly findingFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#index_hash_filter DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding#index_hash_filter}
  */
  readonly indexHashFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding#managed_database_id}
  */
  readonly managedDatabaseId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#search_period DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding#search_period}
  */
  readonly searchPeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#sql_tuning_advisor_task_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding#sql_tuning_advisor_task_id}
  */
  readonly sqlTuningAdvisorTaskId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#stats_hash_filter DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding#stats_hash_filter}
  */
  readonly statsHashFilter?: string;
}
export interface DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItems {
}

export function dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsToTerraform(struct?: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsToHclTerraform(struct?: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // db_time_benefit - computed: true, optional: false, required: false
  public get dbTimeBenefit() {
    return this.getNumberAttribute('db_time_benefit');
  }

  // is_alternative_plan_finding_present - computed: true, optional: false, required: false
  public get isAlternativePlanFindingPresent() {
    return this.getBooleanAttribute('is_alternative_plan_finding_present');
  }

  // is_error_finding_present - computed: true, optional: false, required: false
  public get isErrorFindingPresent() {
    return this.getBooleanAttribute('is_error_finding_present');
  }

  // is_index_finding_present - computed: true, optional: false, required: false
  public get isIndexFindingPresent() {
    return this.getBooleanAttribute('is_index_finding_present');
  }

  // is_miscellaneous_finding_present - computed: true, optional: false, required: false
  public get isMiscellaneousFindingPresent() {
    return this.getBooleanAttribute('is_miscellaneous_finding_present');
  }

  // is_restructure_sql_finding_present - computed: true, optional: false, required: false
  public get isRestructureSqlFindingPresent() {
    return this.getBooleanAttribute('is_restructure_sql_finding_present');
  }

  // is_sql_profile_finding_implemented - computed: true, optional: false, required: false
  public get isSqlProfileFindingImplemented() {
    return this.getBooleanAttribute('is_sql_profile_finding_implemented');
  }

  // is_sql_profile_finding_present - computed: true, optional: false, required: false
  public get isSqlProfileFindingPresent() {
    return this.getBooleanAttribute('is_sql_profile_finding_present');
  }

  // is_stats_finding_present - computed: true, optional: false, required: false
  public get isStatsFindingPresent() {
    return this.getBooleanAttribute('is_stats_finding_present');
  }

  // is_timeout_finding_present - computed: true, optional: false, required: false
  public get isTimeoutFindingPresent() {
    return this.getBooleanAttribute('is_timeout_finding_present');
  }

  // parsing_schema - computed: true, optional: false, required: false
  public get parsingSchema() {
    return this.getStringAttribute('parsing_schema');
  }

  // per_execution_percentage - computed: true, optional: false, required: false
  public get perExecutionPercentage() {
    return this.getNumberAttribute('per_execution_percentage');
  }

  // sql_key - computed: true, optional: false, required: false
  public get sqlKey() {
    return this.getStringAttribute('sql_key');
  }

  // sql_text - computed: true, optional: false, required: false
  public get sqlText() {
    return this.getStringAttribute('sql_text');
  }

  // sql_tuning_advisor_task_id - computed: true, optional: false, required: false
  public get sqlTuningAdvisorTaskId() {
    return this.getStringAttribute('sql_tuning_advisor_task_id');
  }

  // sql_tuning_advisor_task_object_execution_id - computed: true, optional: false, required: false
  public get sqlTuningAdvisorTaskObjectExecutionId() {
    return this.getStringAttribute('sql_tuning_advisor_task_object_execution_id');
  }

  // sql_tuning_advisor_task_object_id - computed: true, optional: false, required: false
  public get sqlTuningAdvisorTaskObjectId() {
    return this.getStringAttribute('sql_tuning_advisor_task_object_id');
  }
}

export class DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference {
    return new DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding oci_database_management_managed_database_sql_tuning_advisor_tasks_finding}
*/
export class DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_management_managed_database_sql_tuning_advisor_tasks_finding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding to import
  * @param importFromId The id of the existing DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_management_managed_database_sql_tuning_advisor_tasks_finding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding oci_database_management_managed_database_sql_tuning_advisor_tasks_finding} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_management_managed_database_sql_tuning_advisor_tasks_finding',
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
    this._beginExecId = config.beginExecId;
    this._endExecId = config.endExecId;
    this._findingFilter = config.findingFilter;
    this._id = config.id;
    this._indexHashFilter = config.indexHashFilter;
    this._managedDatabaseId = config.managedDatabaseId;
    this._searchPeriod = config.searchPeriod;
    this._sqlTuningAdvisorTaskId = config.sqlTuningAdvisorTaskId;
    this._statsHashFilter = config.statsHashFilter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // begin_exec_id - computed: false, optional: true, required: false
  private _beginExecId?: string; 
  public get beginExecId() {
    return this.getStringAttribute('begin_exec_id');
  }
  public set beginExecId(value: string) {
    this._beginExecId = value;
  }
  public resetBeginExecId() {
    this._beginExecId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beginExecIdInput() {
    return this._beginExecId;
  }

  // end_exec_id - computed: false, optional: true, required: false
  private _endExecId?: string; 
  public get endExecId() {
    return this.getStringAttribute('end_exec_id');
  }
  public set endExecId(value: string) {
    this._endExecId = value;
  }
  public resetEndExecId() {
    this._endExecId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endExecIdInput() {
    return this._endExecId;
  }

  // finding_filter - computed: false, optional: true, required: false
  private _findingFilter?: string; 
  public get findingFilter() {
    return this.getStringAttribute('finding_filter');
  }
  public set findingFilter(value: string) {
    this._findingFilter = value;
  }
  public resetFindingFilter() {
    this._findingFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get findingFilterInput() {
    return this._findingFilter;
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

  // index_hash_filter - computed: false, optional: true, required: false
  private _indexHashFilter?: string; 
  public get indexHashFilter() {
    return this.getStringAttribute('index_hash_filter');
  }
  public set indexHashFilter(value: string) {
    this._indexHashFilter = value;
  }
  public resetIndexHashFilter() {
    this._indexHashFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexHashFilterInput() {
    return this._indexHashFilter;
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // managed_database_id - computed: false, optional: false, required: true
  private _managedDatabaseId?: string; 
  public get managedDatabaseId() {
    return this.getStringAttribute('managed_database_id');
  }
  public set managedDatabaseId(value: string) {
    this._managedDatabaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managedDatabaseIdInput() {
    return this._managedDatabaseId;
  }

  // search_period - computed: false, optional: true, required: false
  private _searchPeriod?: string; 
  public get searchPeriod() {
    return this.getStringAttribute('search_period');
  }
  public set searchPeriod(value: string) {
    this._searchPeriod = value;
  }
  public resetSearchPeriod() {
    this._searchPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchPeriodInput() {
    return this._searchPeriod;
  }

  // sql_tuning_advisor_task_id - computed: false, optional: false, required: true
  private _sqlTuningAdvisorTaskId?: string; 
  public get sqlTuningAdvisorTaskId() {
    return this.getStringAttribute('sql_tuning_advisor_task_id');
  }
  public set sqlTuningAdvisorTaskId(value: string) {
    this._sqlTuningAdvisorTaskId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlTuningAdvisorTaskIdInput() {
    return this._sqlTuningAdvisorTaskId;
  }

  // stats_hash_filter - computed: false, optional: true, required: false
  private _statsHashFilter?: string; 
  public get statsHashFilter() {
    return this.getStringAttribute('stats_hash_filter');
  }
  public set statsHashFilter(value: string) {
    this._statsHashFilter = value;
  }
  public resetStatsHashFilter() {
    this._statsHashFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsHashFilterInput() {
    return this._statsHashFilter;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      begin_exec_id: cdktf.stringToTerraform(this._beginExecId),
      end_exec_id: cdktf.stringToTerraform(this._endExecId),
      finding_filter: cdktf.stringToTerraform(this._findingFilter),
      id: cdktf.stringToTerraform(this._id),
      index_hash_filter: cdktf.stringToTerraform(this._indexHashFilter),
      managed_database_id: cdktf.stringToTerraform(this._managedDatabaseId),
      search_period: cdktf.stringToTerraform(this._searchPeriod),
      sql_tuning_advisor_task_id: cdktf.stringToTerraform(this._sqlTuningAdvisorTaskId),
      stats_hash_filter: cdktf.stringToTerraform(this._statsHashFilter),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      begin_exec_id: {
        value: cdktf.stringToHclTerraform(this._beginExecId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      end_exec_id: {
        value: cdktf.stringToHclTerraform(this._endExecId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      finding_filter: {
        value: cdktf.stringToHclTerraform(this._findingFilter),
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
      index_hash_filter: {
        value: cdktf.stringToHclTerraform(this._indexHashFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      managed_database_id: {
        value: cdktf.stringToHclTerraform(this._managedDatabaseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search_period: {
        value: cdktf.stringToHclTerraform(this._searchPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sql_tuning_advisor_task_id: {
        value: cdktf.stringToHclTerraform(this._sqlTuningAdvisorTaskId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stats_hash_filter: {
        value: cdktf.stringToHclTerraform(this._statsHashFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
