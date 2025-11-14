// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_execution_plan_stats_comparision
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_execution_plan_stats_comparision#execution_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision#execution_id}
  */
  readonly executionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_execution_plan_stats_comparision#id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_execution_plan_stats_comparision#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision#managed_database_id}
  */
  readonly managedDatabaseId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_execution_plan_stats_comparision#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision#opc_named_credential_id}
  */
  readonly opcNamedCredentialId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_execution_plan_stats_comparision#sql_object_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision#sql_object_id}
  */
  readonly sqlObjectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_execution_plan_stats_comparision#sql_tuning_advisor_task_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision#sql_tuning_advisor_task_id}
  */
  readonly sqlTuningAdvisorTaskId: string;
}
export interface DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModified {
}

export function dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedToTerraform(struct?: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModified): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedToHclTerraform(struct?: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModified): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModified | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModified | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // plan_stats - computed: true, optional: false, required: false
  private _planStats = new cdktf.StringMap(this, "plan_stats");
  public get planStats() {
    return this._planStats;
  }

  // plan_status - computed: true, optional: false, required: false
  public get planStatus() {
    return this.getStringAttribute('plan_status');
  }

  // plan_type - computed: true, optional: false, required: false
  public get planType() {
    return this.getStringAttribute('plan_type');
  }
}

export class DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedOutputReference {
    return new DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginal {
}

export function dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalToTerraform(struct?: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalToHclTerraform(struct?: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // plan_stats - computed: true, optional: false, required: false
  private _planStats = new cdktf.StringMap(this, "plan_stats");
  public get planStats() {
    return this._planStats;
  }

  // plan_status - computed: true, optional: false, required: false
  public get planStatus() {
    return this.getStringAttribute('plan_status');
  }

  // plan_type - computed: true, optional: false, required: false
  public get planType() {
    return this.getStringAttribute('plan_type');
  }
}

export class DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalOutputReference {
    return new DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_execution_plan_stats_comparision oci_database_management_managed_database_sql_tuning_advisor_tasks_execution_plan_stats_comparision}
*/
export class DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_management_managed_database_sql_tuning_advisor_tasks_execution_plan_stats_comparision";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision to import
  * @param importFromId The id of the existing DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_execution_plan_stats_comparision#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_management_managed_database_sql_tuning_advisor_tasks_execution_plan_stats_comparision", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_execution_plan_stats_comparision oci_database_management_managed_database_sql_tuning_advisor_tasks_execution_plan_stats_comparision} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_management_managed_database_sql_tuning_advisor_tasks_execution_plan_stats_comparision',
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
    this._executionId = config.executionId;
    this._id = config.id;
    this._managedDatabaseId = config.managedDatabaseId;
    this._opcNamedCredentialId = config.opcNamedCredentialId;
    this._sqlObjectId = config.sqlObjectId;
    this._sqlTuningAdvisorTaskId = config.sqlTuningAdvisorTaskId;
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

  // modified - computed: true, optional: false, required: false
  private _modified = new DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedList(this, "modified", false);
  public get modified() {
    return this._modified;
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

  // original - computed: true, optional: false, required: false
  private _original = new DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalList(this, "original", false);
  public get original() {
    return this._original;
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
