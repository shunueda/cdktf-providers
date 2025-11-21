// https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/database_management_managed_my_sql_database_query_detail
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseManagementManagedMySqlDatabaseQueryDetailConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/database_management_managed_my_sql_database_query_detail#digest DataOciDatabaseManagementManagedMySqlDatabaseQueryDetail#digest}
  */
  readonly digest: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/database_management_managed_my_sql_database_query_detail#id DataOciDatabaseManagementManagedMySqlDatabaseQueryDetail#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/database_management_managed_my_sql_database_query_detail#managed_my_sql_database_id DataOciDatabaseManagementManagedMySqlDatabaseQueryDetail#managed_my_sql_database_id}
  */
  readonly managedMySqlDatabaseId: string;
}
export interface DataOciDatabaseManagementManagedMySqlDatabaseQueryDetailQueryExplainPlan {
}

export function dataOciDatabaseManagementManagedMySqlDatabaseQueryDetailQueryExplainPlanToTerraform(struct?: DataOciDatabaseManagementManagedMySqlDatabaseQueryDetailQueryExplainPlan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementManagedMySqlDatabaseQueryDetailQueryExplainPlanToHclTerraform(struct?: DataOciDatabaseManagementManagedMySqlDatabaseQueryDetailQueryExplainPlan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementManagedMySqlDatabaseQueryDetailQueryExplainPlanOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementManagedMySqlDatabaseQueryDetailQueryExplainPlan | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementManagedMySqlDatabaseQueryDetailQueryExplainPlan | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // json_explain - computed: true, optional: false, required: false
  public get jsonExplain() {
    return this.getStringAttribute('json_explain');
  }

  // json_explain_version - computed: true, optional: false, required: false
  public get jsonExplainVersion() {
    return this.getStringAttribute('json_explain_version');
  }
}

export class DataOciDatabaseManagementManagedMySqlDatabaseQueryDetailQueryExplainPlanList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementManagedMySqlDatabaseQueryDetailQueryExplainPlanOutputReference {
    return new DataOciDatabaseManagementManagedMySqlDatabaseQueryDetailQueryExplainPlanOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementManagedMySqlDatabaseQueryDetailQueryMessages {
}

export function dataOciDatabaseManagementManagedMySqlDatabaseQueryDetailQueryMessagesToTerraform(struct?: DataOciDatabaseManagementManagedMySqlDatabaseQueryDetailQueryMessages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementManagedMySqlDatabaseQueryDetailQueryMessagesToHclTerraform(struct?: DataOciDatabaseManagementManagedMySqlDatabaseQueryDetailQueryMessages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementManagedMySqlDatabaseQueryDetailQueryMessagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementManagedMySqlDatabaseQueryDetailQueryMessages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementManagedMySqlDatabaseQueryDetailQueryMessages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getNumberAttribute('code');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // message_text - computed: true, optional: false, required: false
  public get messageText() {
    return this.getStringAttribute('message_text');
  }
}

export class DataOciDatabaseManagementManagedMySqlDatabaseQueryDetailQueryMessagesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementManagedMySqlDatabaseQueryDetailQueryMessagesOutputReference {
    return new DataOciDatabaseManagementManagedMySqlDatabaseQueryDetailQueryMessagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementManagedMySqlDatabaseQueryDetailQuerySampleDetails {
}

export function dataOciDatabaseManagementManagedMySqlDatabaseQueryDetailQuerySampleDetailsToTerraform(struct?: DataOciDatabaseManagementManagedMySqlDatabaseQueryDetailQuerySampleDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementManagedMySqlDatabaseQueryDetailQuerySampleDetailsToHclTerraform(struct?: DataOciDatabaseManagementManagedMySqlDatabaseQueryDetailQuerySampleDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementManagedMySqlDatabaseQueryDetailQuerySampleDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementManagedMySqlDatabaseQueryDetailQuerySampleDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementManagedMySqlDatabaseQueryDetailQuerySampleDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // execution_time - computed: true, optional: false, required: false
  public get executionTime() {
    return this.getStringAttribute('execution_time');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // mysql_instance - computed: true, optional: false, required: false
  public get mysqlInstance() {
    return this.getStringAttribute('mysql_instance');
  }

  // query_sample_text - computed: true, optional: false, required: false
  public get querySampleText() {
    return this.getStringAttribute('query_sample_text');
  }

  // thread_id - computed: true, optional: false, required: false
  public get threadId() {
    return this.getNumberAttribute('thread_id');
  }

  // time_query_sample_seen - computed: true, optional: false, required: false
  public get timeQuerySampleSeen() {
    return this.getStringAttribute('time_query_sample_seen');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }
}

export class DataOciDatabaseManagementManagedMySqlDatabaseQueryDetailQuerySampleDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementManagedMySqlDatabaseQueryDetailQuerySampleDetailsOutputReference {
    return new DataOciDatabaseManagementManagedMySqlDatabaseQueryDetailQuerySampleDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/database_management_managed_my_sql_database_query_detail oci_database_management_managed_my_sql_database_query_detail}
*/
export class DataOciDatabaseManagementManagedMySqlDatabaseQueryDetail extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_management_managed_my_sql_database_query_detail";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatabaseManagementManagedMySqlDatabaseQueryDetail resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatabaseManagementManagedMySqlDatabaseQueryDetail to import
  * @param importFromId The id of the existing DataOciDatabaseManagementManagedMySqlDatabaseQueryDetail that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/database_management_managed_my_sql_database_query_detail#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatabaseManagementManagedMySqlDatabaseQueryDetail to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_management_managed_my_sql_database_query_detail", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/database_management_managed_my_sql_database_query_detail oci_database_management_managed_my_sql_database_query_detail} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseManagementManagedMySqlDatabaseQueryDetailConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseManagementManagedMySqlDatabaseQueryDetailConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_management_managed_my_sql_database_query_detail',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.27.0',
        providerVersionConstraint: '7.27.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._digest = config.digest;
    this._id = config.id;
    this._managedMySqlDatabaseId = config.managedMySqlDatabaseId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // digest - computed: false, optional: false, required: true
  private _digest?: string; 
  public get digest() {
    return this.getStringAttribute('digest');
  }
  public set digest(value: string) {
    this._digest = value;
  }
  // Temporarily expose input value. Use with caution.
  public get digestInput() {
    return this._digest;
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

  // managed_my_sql_database_id - computed: false, optional: false, required: true
  private _managedMySqlDatabaseId?: string; 
  public get managedMySqlDatabaseId() {
    return this.getStringAttribute('managed_my_sql_database_id');
  }
  public set managedMySqlDatabaseId(value: string) {
    this._managedMySqlDatabaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managedMySqlDatabaseIdInput() {
    return this._managedMySqlDatabaseId;
  }

  // query_explain_plan - computed: true, optional: false, required: false
  private _queryExplainPlan = new DataOciDatabaseManagementManagedMySqlDatabaseQueryDetailQueryExplainPlanList(this, "query_explain_plan", false);
  public get queryExplainPlan() {
    return this._queryExplainPlan;
  }

  // query_messages - computed: true, optional: false, required: false
  private _queryMessages = new DataOciDatabaseManagementManagedMySqlDatabaseQueryDetailQueryMessagesList(this, "query_messages", false);
  public get queryMessages() {
    return this._queryMessages;
  }

  // query_sample_details - computed: true, optional: false, required: false
  private _querySampleDetails = new DataOciDatabaseManagementManagedMySqlDatabaseQueryDetailQuerySampleDetailsList(this, "query_sample_details", false);
  public get querySampleDetails() {
    return this._querySampleDetails;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      digest: cdktf.stringToTerraform(this._digest),
      id: cdktf.stringToTerraform(this._id),
      managed_my_sql_database_id: cdktf.stringToTerraform(this._managedMySqlDatabaseId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      digest: {
        value: cdktf.stringToHclTerraform(this._digest),
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
      managed_my_sql_database_id: {
        value: cdktf.stringToHclTerraform(this._managedMySqlDatabaseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
