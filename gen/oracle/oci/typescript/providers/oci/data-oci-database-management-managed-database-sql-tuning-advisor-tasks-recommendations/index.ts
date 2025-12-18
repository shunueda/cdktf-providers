// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendations
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendations#execution_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations#execution_id}
  */
  readonly executionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendations#id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendations#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations#managed_database_id}
  */
  readonly managedDatabaseId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendations#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations#opc_named_credential_id}
  */
  readonly opcNamedCredentialId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendations#sql_object_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations#sql_object_id}
  */
  readonly sqlObjectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendations#sql_tuning_advisor_task_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations#sql_tuning_advisor_task_id}
  */
  readonly sqlTuningAdvisorTaskId: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendations#filter DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations#filter}
  */
  readonly filter?: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter[] | cdktf.IResolvable;
}
export interface DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItems {
}

export function dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsToTerraform(struct?: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsToHclTerraform(struct?: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // benefit - computed: true, optional: false, required: false
  public get benefit() {
    return this.getNumberAttribute('benefit');
  }

  // finding - computed: true, optional: false, required: false
  public get finding() {
    return this.getStringAttribute('finding');
  }

  // implement_action_sql - computed: true, optional: false, required: false
  public get implementActionSql() {
    return this.getStringAttribute('implement_action_sql');
  }

  // is_parallel_execution - computed: true, optional: false, required: false
  public get isParallelExecution() {
    return this.getBooleanAttribute('is_parallel_execution');
  }

  // rationale - computed: true, optional: false, required: false
  public get rationale() {
    return this.getStringAttribute('rationale');
  }

  // recommendation - computed: true, optional: false, required: false
  public get recommendation() {
    return this.getStringAttribute('recommendation');
  }

  // recommendation_key - computed: true, optional: false, required: false
  public get recommendationKey() {
    return this.getNumberAttribute('recommendation_key');
  }

  // recommendation_type - computed: true, optional: false, required: false
  public get recommendationType() {
    return this.getStringAttribute('recommendation_type');
  }

  // sql_tuning_advisor_task_id - computed: true, optional: false, required: false
  public get sqlTuningAdvisorTaskId() {
    return this.getStringAttribute('sql_tuning_advisor_task_id');
  }

  // sql_tuning_advisor_task_object_id - computed: true, optional: false, required: false
  public get sqlTuningAdvisorTaskObjectId() {
    return this.getStringAttribute('sql_tuning_advisor_task_object_id');
  }
}

export class DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference {
    return new DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollection {
}

export function dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionToTerraform(struct?: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionToHclTerraform(struct?: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference {
    return new DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendations#name DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendations#regex DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendations#values DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations#values}
  */
  readonly values: string[];
}

export function dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterToTerraform(struct?: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter | cdktf.IResolvable): any {
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


export function dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterToHclTerraform(struct?: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter | cdktf.IResolvable): any {
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

export class DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter | cdktf.IResolvable | undefined) {
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

export class DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference {
    return new DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendations oci_database_management_managed_database_sql_tuning_advisor_tasks_recommendations}
*/
export class DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_management_managed_database_sql_tuning_advisor_tasks_recommendations";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations to import
  * @param importFromId The id of the existing DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendations#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_management_managed_database_sql_tuning_advisor_tasks_recommendations", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendations oci_database_management_managed_database_sql_tuning_advisor_tasks_recommendations} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_management_managed_database_sql_tuning_advisor_tasks_recommendations',
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
    this._executionId = config.executionId;
    this._id = config.id;
    this._managedDatabaseId = config.managedDatabaseId;
    this._opcNamedCredentialId = config.opcNamedCredentialId;
    this._sqlObjectId = config.sqlObjectId;
    this._sqlTuningAdvisorTaskId = config.sqlTuningAdvisorTaskId;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // execution_id - computed: false, optional: false, required: true
  private _executionId?: string; 
  public get executionId() {
    return this.getStringAttribute('execution_id');
  }
  public set executionId(value: string) {
    this._executionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executionIdInput() {
    return this._executionId;
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

  // sql_object_id - computed: false, optional: false, required: true
  private _sqlObjectId?: string; 
  public get sqlObjectId() {
    return this.getStringAttribute('sql_object_id');
  }
  public set sqlObjectId(value: string) {
    this._sqlObjectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlObjectIdInput() {
    return this._sqlObjectId;
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

  // sql_tuning_advisor_task_recommendation_collection - computed: true, optional: false, required: false
  private _sqlTuningAdvisorTaskRecommendationCollection = new DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionList(this, "sql_tuning_advisor_task_recommendation_collection", false);
  public get sqlTuningAdvisorTaskRecommendationCollection() {
    return this._sqlTuningAdvisorTaskRecommendationCollection;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter[] | cdktf.IResolvable) {
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
      execution_id: cdktf.stringToTerraform(this._executionId),
      id: cdktf.stringToTerraform(this._id),
      managed_database_id: cdktf.stringToTerraform(this._managedDatabaseId),
      opc_named_credential_id: cdktf.stringToTerraform(this._opcNamedCredentialId),
      sql_object_id: cdktf.stringToTerraform(this._sqlObjectId),
      sql_tuning_advisor_task_id: cdktf.stringToTerraform(this._sqlTuningAdvisorTaskId),
      filter: cdktf.listMapper(dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      execution_id: {
        value: cdktf.stringToHclTerraform(this._executionId),
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
      sql_object_id: {
        value: cdktf.stringToHclTerraform(this._sqlObjectId),
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
      filter: {
        value: cdktf.listMapperHcl(dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
