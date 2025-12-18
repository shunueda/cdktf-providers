// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#managed_database_id}
  */
  readonly managedDatabaseId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#name DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#opc_named_credential_id}
  */
  readonly opcNamedCredentialId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#status DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#time_greater_than_or_equal_to DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#time_greater_than_or_equal_to}
  */
  readonly timeGreaterThanOrEqualTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#time_less_than_or_equal_to DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#time_less_than_or_equal_to}
  */
  readonly timeLessThanOrEqualTo?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#filter DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#filter}
  */
  readonly filter?: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter[] | cdktf.IResolvable;
}
export interface DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItems {
}

export function dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsToTerraform(struct?: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsToHclTerraform(struct?: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // days_to_expire - computed: true, optional: false, required: false
  public get daysToExpire() {
    return this.getNumberAttribute('days_to_expire');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // recommendation_count - computed: true, optional: false, required: false
  public get recommendationCount() {
    return this.getNumberAttribute('recommendation_count');
  }

  // sql_tuning_advisor_task_id - computed: true, optional: false, required: false
  public get sqlTuningAdvisorTaskId() {
    return this.getStringAttribute('sql_tuning_advisor_task_id');
  }

  // task_status - computed: true, optional: false, required: false
  public get taskStatus() {
    return this.getStringAttribute('task_status');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_execution_ended - computed: true, optional: false, required: false
  public get timeExecutionEnded() {
    return this.getStringAttribute('time_execution_ended');
  }

  // time_execution_started - computed: true, optional: false, required: false
  public get timeExecutionStarted() {
    return this.getStringAttribute('time_execution_started');
  }

  // total_sql_statements - computed: true, optional: false, required: false
  public get totalSqlStatements() {
    return this.getNumberAttribute('total_sql_statements');
  }
}

export class DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference {
    return new DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollection {
}

export function dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionToTerraform(struct?: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionToHclTerraform(struct?: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference {
    return new DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#name DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#regex DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#values DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#values}
  */
  readonly values: string[];
}

export function dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterToTerraform(struct?: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter | cdktf.IResolvable): any {
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


export function dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterToHclTerraform(struct?: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter | cdktf.IResolvable): any {
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

export class DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter | cdktf.IResolvable | undefined) {
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

export class DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference {
    return new DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks oci_database_management_managed_database_sql_tuning_advisor_tasks}
*/
export class DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_management_managed_database_sql_tuning_advisor_tasks";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks to import
  * @param importFromId The id of the existing DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_management_managed_database_sql_tuning_advisor_tasks", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks oci_database_management_managed_database_sql_tuning_advisor_tasks} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_management_managed_database_sql_tuning_advisor_tasks',
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
    this._id = config.id;
    this._managedDatabaseId = config.managedDatabaseId;
    this._name = config.name;
    this._opcNamedCredentialId = config.opcNamedCredentialId;
    this._status = config.status;
    this._timeGreaterThanOrEqualTo = config.timeGreaterThanOrEqualTo;
    this._timeLessThanOrEqualTo = config.timeLessThanOrEqualTo;
    this._filter.internalValue = config.filter;
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

  // sql_tuning_advisor_task_collection - computed: true, optional: false, required: false
  private _sqlTuningAdvisorTaskCollection = new DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList(this, "sql_tuning_advisor_task_collection", false);
  public get sqlTuningAdvisorTaskCollection() {
    return this._sqlTuningAdvisorTaskCollection;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // time_greater_than_or_equal_to - computed: false, optional: true, required: false
  private _timeGreaterThanOrEqualTo?: string; 
  public get timeGreaterThanOrEqualTo() {
    return this.getStringAttribute('time_greater_than_or_equal_to');
  }
  public set timeGreaterThanOrEqualTo(value: string) {
    this._timeGreaterThanOrEqualTo = value;
  }
  public resetTimeGreaterThanOrEqualTo() {
    this._timeGreaterThanOrEqualTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeGreaterThanOrEqualToInput() {
    return this._timeGreaterThanOrEqualTo;
  }

  // time_less_than_or_equal_to - computed: false, optional: true, required: false
  private _timeLessThanOrEqualTo?: string; 
  public get timeLessThanOrEqualTo() {
    return this.getStringAttribute('time_less_than_or_equal_to');
  }
  public set timeLessThanOrEqualTo(value: string) {
    this._timeLessThanOrEqualTo = value;
  }
  public resetTimeLessThanOrEqualTo() {
    this._timeLessThanOrEqualTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeLessThanOrEqualToInput() {
    return this._timeLessThanOrEqualTo;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter[] | cdktf.IResolvable) {
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
      id: cdktf.stringToTerraform(this._id),
      managed_database_id: cdktf.stringToTerraform(this._managedDatabaseId),
      name: cdktf.stringToTerraform(this._name),
      opc_named_credential_id: cdktf.stringToTerraform(this._opcNamedCredentialId),
      status: cdktf.stringToTerraform(this._status),
      time_greater_than_or_equal_to: cdktf.stringToTerraform(this._timeGreaterThanOrEqualTo),
      time_less_than_or_equal_to: cdktf.stringToTerraform(this._timeLessThanOrEqualTo),
      filter: cdktf.listMapper(dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterToTerraform, true)(this._filter.internalValue),
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
      managed_database_id: {
        value: cdktf.stringToHclTerraform(this._managedDatabaseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_greater_than_or_equal_to: {
        value: cdktf.stringToHclTerraform(this._timeGreaterThanOrEqualTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_less_than_or_equal_to: {
        value: cdktf.stringToHclTerraform(this._timeLessThanOrEqualTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
