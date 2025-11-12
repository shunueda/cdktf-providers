// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#begin_exec_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#begin_exec_id}
  */
  readonly beginExecId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#end_exec_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#end_exec_id}
  */
  readonly endExecId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#finding_filter DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#finding_filter}
  */
  readonly findingFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#index_hash_filter DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#index_hash_filter}
  */
  readonly indexHashFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#managed_database_id}
  */
  readonly managedDatabaseId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#opc_named_credential_id}
  */
  readonly opcNamedCredentialId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#search_period DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#search_period}
  */
  readonly searchPeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#sql_tuning_advisor_task_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#sql_tuning_advisor_task_id}
  */
  readonly sqlTuningAdvisorTaskId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#stats_hash_filter DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#stats_hash_filter}
  */
  readonly statsHashFilter?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#filter DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#filter}
  */
  readonly filter?: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilter[] | cdktf.IResolvable;
}
export interface DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItems {
}

export function dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsToTerraform(struct?: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsToHclTerraform(struct?: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItems | undefined) {
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

export class DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference {
    return new DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollection {
}

export function dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionToTerraform(struct?: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionToHclTerraform(struct?: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference {
    return new DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#name DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#regex DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#values DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#values}
  */
  readonly values: string[];
}

export function dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterToTerraform(struct?: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilter | cdktf.IResolvable): any {
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


export function dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterToHclTerraform(struct?: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilter | cdktf.IResolvable): any {
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

export class DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilter | cdktf.IResolvable | undefined) {
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

export class DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference {
    return new DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings oci_database_management_managed_database_sql_tuning_advisor_tasks_findings}
*/
export class DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_management_managed_database_sql_tuning_advisor_tasks_findings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings to import
  * @param importFromId The id of the existing DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_management_managed_database_sql_tuning_advisor_tasks_findings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings oci_database_management_managed_database_sql_tuning_advisor_tasks_findings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_management_managed_database_sql_tuning_advisor_tasks_findings',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0',
        providerVersionConstraint: '7.25.0'
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
    this._opcNamedCredentialId = config.opcNamedCredentialId;
    this._searchPeriod = config.searchPeriod;
    this._sqlTuningAdvisorTaskId = config.sqlTuningAdvisorTaskId;
    this._statsHashFilter = config.statsHashFilter;
    this._filter.internalValue = config.filter;
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

  // opc_named_credential_id - computed: false, optional: true, required: false
  private _opcNamedCredentialId?: string; 
  public get opcNamedCredentialId() {
    return this.getStringAttribute('opc_named_credential_id');
  }
  public set opcNamedCredentialId(value: string) {
    this._opcNamedCredentialId = value;
  }
  public resetOpcNamedCredentialId() {
    this._opcNamedCredentialId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opcNamedCredentialIdInput() {
    return this._opcNamedCredentialId;
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

  // sql_tuning_advisor_task_finding_collection - computed: true, optional: false, required: false
  private _sqlTuningAdvisorTaskFindingCollection = new DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionList(this, "sql_tuning_advisor_task_finding_collection", false);
  public get sqlTuningAdvisorTaskFindingCollection() {
    return this._sqlTuningAdvisorTaskFindingCollection;
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

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilter[] | cdktf.IResolvable) {
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
      begin_exec_id: cdktf.stringToTerraform(this._beginExecId),
      end_exec_id: cdktf.stringToTerraform(this._endExecId),
      finding_filter: cdktf.stringToTerraform(this._findingFilter),
      id: cdktf.stringToTerraform(this._id),
      index_hash_filter: cdktf.stringToTerraform(this._indexHashFilter),
      managed_database_id: cdktf.stringToTerraform(this._managedDatabaseId),
      opc_named_credential_id: cdktf.stringToTerraform(this._opcNamedCredentialId),
      search_period: cdktf.stringToTerraform(this._searchPeriod),
      sql_tuning_advisor_task_id: cdktf.stringToTerraform(this._sqlTuningAdvisorTaskId),
      stats_hash_filter: cdktf.stringToTerraform(this._statsHashFilter),
      filter: cdktf.listMapper(dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterToTerraform, true)(this._filter.internalValue),
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
      opc_named_credential_id: {
        value: cdktf.stringToHclTerraform(this._opcNamedCredentialId),
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
      filter: {
        value: cdktf.listMapperHcl(dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
