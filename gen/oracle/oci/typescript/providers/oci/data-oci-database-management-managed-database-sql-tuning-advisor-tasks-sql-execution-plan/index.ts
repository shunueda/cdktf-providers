// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_sql_execution_plan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_sql_execution_plan#attribute DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan#attribute}
  */
  readonly attribute: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_sql_execution_plan#id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_sql_execution_plan#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan#managed_database_id}
  */
  readonly managedDatabaseId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_sql_execution_plan#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan#opc_named_credential_id}
  */
  readonly opcNamedCredentialId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_sql_execution_plan#sql_object_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan#sql_object_id}
  */
  readonly sqlObjectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_sql_execution_plan#sql_tuning_advisor_task_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan#sql_tuning_advisor_task_id}
  */
  readonly sqlTuningAdvisorTaskId: string;
}
export interface DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlan {
}

export function dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanToTerraform(struct?: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanToHclTerraform(struct?: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlan | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlan | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_predicates - computed: true, optional: false, required: false
  public get accessPredicates() {
    return this.getStringAttribute('access_predicates');
  }

  // attribute - computed: true, optional: false, required: false
  public get attribute() {
    return this.getStringAttribute('attribute');
  }

  // bytes - computed: true, optional: false, required: false
  public get bytes() {
    return this.getStringAttribute('bytes');
  }

  // cardinality - computed: true, optional: false, required: false
  public get cardinality() {
    return this.getStringAttribute('cardinality');
  }

  // cost - computed: true, optional: false, required: false
  public get cost() {
    return this.getNumberAttribute('cost');
  }

  // cpu_cost - computed: true, optional: false, required: false
  public get cpuCost() {
    return this.getNumberAttribute('cpu_cost');
  }

  // filter_predicates - computed: true, optional: false, required: false
  public get filterPredicates() {
    return this.getStringAttribute('filter_predicates');
  }

  // io_cost - computed: true, optional: false, required: false
  public get ioCost() {
    return this.getNumberAttribute('io_cost');
  }

  // number_of_search_column - computed: true, optional: false, required: false
  public get numberOfSearchColumn() {
    return this.getNumberAttribute('number_of_search_column');
  }

  // object - computed: true, optional: false, required: false
  public get object() {
    return this.getStringAttribute('object');
  }

  // object_node - computed: true, optional: false, required: false
  public get objectNode() {
    return this.getStringAttribute('object_node');
  }

  // object_owner - computed: true, optional: false, required: false
  public get objectOwner() {
    return this.getStringAttribute('object_owner');
  }

  // object_position - computed: true, optional: false, required: false
  public get objectPosition() {
    return this.getNumberAttribute('object_position');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // operation - computed: true, optional: false, required: false
  public get operation() {
    return this.getStringAttribute('operation');
  }

  // optimizer_mode - computed: true, optional: false, required: false
  public get optimizerMode() {
    return this.getStringAttribute('optimizer_mode');
  }

  // options - computed: true, optional: false, required: false
  public get options() {
    return this.getStringAttribute('options');
  }

  // other - computed: true, optional: false, required: false
  public get other() {
    return this.getStringAttribute('other');
  }

  // other_tag - computed: true, optional: false, required: false
  public get otherTag() {
    return this.getStringAttribute('other_tag');
  }

  // parent_step_id - computed: true, optional: false, required: false
  public get parentStepId() {
    return this.getNumberAttribute('parent_step_id');
  }

  // partition_id - computed: true, optional: false, required: false
  public get partitionId() {
    return this.getNumberAttribute('partition_id');
  }

  // partition_start - computed: true, optional: false, required: false
  public get partitionStart() {
    return this.getStringAttribute('partition_start');
  }

  // partition_stop - computed: true, optional: false, required: false
  public get partitionStop() {
    return this.getStringAttribute('partition_stop');
  }

  // plan_hash_value - computed: true, optional: false, required: false
  public get planHashValue() {
    return this.getStringAttribute('plan_hash_value');
  }

  // position - computed: true, optional: false, required: false
  public get position() {
    return this.getNumberAttribute('position');
  }

  // remarks - computed: true, optional: false, required: false
  public get remarks() {
    return this.getStringAttribute('remarks');
  }

  // step_id - computed: true, optional: false, required: false
  public get stepId() {
    return this.getNumberAttribute('step_id');
  }

  // temp_space - computed: true, optional: false, required: false
  public get tempSpace() {
    return this.getStringAttribute('temp_space');
  }

  // time - computed: true, optional: false, required: false
  public get time() {
    return this.getStringAttribute('time');
  }
}

export class DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference {
    return new DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_sql_execution_plan oci_database_management_managed_database_sql_tuning_advisor_tasks_sql_execution_plan}
*/
export class DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_management_managed_database_sql_tuning_advisor_tasks_sql_execution_plan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan to import
  * @param importFromId The id of the existing DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_sql_execution_plan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_management_managed_database_sql_tuning_advisor_tasks_sql_execution_plan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_sql_execution_plan oci_database_management_managed_database_sql_tuning_advisor_tasks_sql_execution_plan} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_management_managed_database_sql_tuning_advisor_tasks_sql_execution_plan',
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
    this._attribute = config.attribute;
    this._id = config.id;
    this._managedDatabaseId = config.managedDatabaseId;
    this._opcNamedCredentialId = config.opcNamedCredentialId;
    this._sqlObjectId = config.sqlObjectId;
    this._sqlTuningAdvisorTaskId = config.sqlTuningAdvisorTaskId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
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

  // plan - computed: true, optional: false, required: false
  private _plan = new DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanList(this, "plan", false);
  public get plan() {
    return this._plan;
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
      attribute: cdktf.stringToTerraform(this._attribute),
      id: cdktf.stringToTerraform(this._id),
      managed_database_id: cdktf.stringToTerraform(this._managedDatabaseId),
      opc_named_credential_id: cdktf.stringToTerraform(this._opcNamedCredentialId),
      sql_object_id: cdktf.stringToTerraform(this._sqlObjectId),
      sql_tuning_advisor_task_id: cdktf.stringToTerraform(this._sqlTuningAdvisorTaskId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attribute: {
        value: cdktf.stringToHclTerraform(this._attribute),
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
