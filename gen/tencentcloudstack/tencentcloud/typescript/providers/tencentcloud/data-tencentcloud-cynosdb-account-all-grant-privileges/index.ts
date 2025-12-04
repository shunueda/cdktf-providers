// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/cynosdb_account_all_grant_privileges
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudCynosdbAccountAllGrantPrivilegesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cluster ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/cynosdb_account_all_grant_privileges#cluster_id DataTencentcloudCynosdbAccountAllGrantPrivileges#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/cynosdb_account_all_grant_privileges#id DataTencentcloudCynosdbAccountAllGrantPrivileges#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/cynosdb_account_all_grant_privileges#result_output_file DataTencentcloudCynosdbAccountAllGrantPrivileges#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * account block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/cynosdb_account_all_grant_privileges#account DataTencentcloudCynosdbAccountAllGrantPrivileges#account}
  */
  readonly account: DataTencentcloudCynosdbAccountAllGrantPrivilegesAccount;
}
export interface DataTencentcloudCynosdbAccountAllGrantPrivilegesDatabasePrivileges {
}

export function dataTencentcloudCynosdbAccountAllGrantPrivilegesDatabasePrivilegesToTerraform(struct?: DataTencentcloudCynosdbAccountAllGrantPrivilegesDatabasePrivileges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCynosdbAccountAllGrantPrivilegesDatabasePrivilegesToHclTerraform(struct?: DataTencentcloudCynosdbAccountAllGrantPrivilegesDatabasePrivileges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCynosdbAccountAllGrantPrivilegesDatabasePrivilegesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCynosdbAccountAllGrantPrivilegesDatabasePrivileges | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCynosdbAccountAllGrantPrivilegesDatabasePrivileges | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // db - computed: true, optional: false, required: false
  public get db() {
    return this.getStringAttribute('db');
  }

  // privileges - computed: true, optional: false, required: false
  public get privileges() {
    return cdktf.Fn.tolist(this.getListAttribute('privileges'));
  }
}

export class DataTencentcloudCynosdbAccountAllGrantPrivilegesDatabasePrivilegesList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCynosdbAccountAllGrantPrivilegesDatabasePrivilegesOutputReference {
    return new DataTencentcloudCynosdbAccountAllGrantPrivilegesDatabasePrivilegesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCynosdbAccountAllGrantPrivilegesTablePrivileges {
}

export function dataTencentcloudCynosdbAccountAllGrantPrivilegesTablePrivilegesToTerraform(struct?: DataTencentcloudCynosdbAccountAllGrantPrivilegesTablePrivileges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCynosdbAccountAllGrantPrivilegesTablePrivilegesToHclTerraform(struct?: DataTencentcloudCynosdbAccountAllGrantPrivilegesTablePrivileges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCynosdbAccountAllGrantPrivilegesTablePrivilegesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCynosdbAccountAllGrantPrivilegesTablePrivileges | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCynosdbAccountAllGrantPrivilegesTablePrivileges | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // db - computed: true, optional: false, required: false
  public get db() {
    return this.getStringAttribute('db');
  }

  // privileges - computed: true, optional: false, required: false
  public get privileges() {
    return cdktf.Fn.tolist(this.getListAttribute('privileges'));
  }

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
}

export class DataTencentcloudCynosdbAccountAllGrantPrivilegesTablePrivilegesList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCynosdbAccountAllGrantPrivilegesTablePrivilegesOutputReference {
    return new DataTencentcloudCynosdbAccountAllGrantPrivilegesTablePrivilegesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCynosdbAccountAllGrantPrivilegesAccount {
  /**
  * Account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/cynosdb_account_all_grant_privileges#account_name DataTencentcloudCynosdbAccountAllGrantPrivileges#account_name}
  */
  readonly accountName: string;
  /**
  * Host, default `%`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/cynosdb_account_all_grant_privileges#host DataTencentcloudCynosdbAccountAllGrantPrivileges#host}
  */
  readonly host?: string;
}

export function dataTencentcloudCynosdbAccountAllGrantPrivilegesAccountToTerraform(struct?: DataTencentcloudCynosdbAccountAllGrantPrivilegesAccountOutputReference | DataTencentcloudCynosdbAccountAllGrantPrivilegesAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_name: cdktf.stringToTerraform(struct!.accountName),
    host: cdktf.stringToTerraform(struct!.host),
  }
}


export function dataTencentcloudCynosdbAccountAllGrantPrivilegesAccountToHclTerraform(struct?: DataTencentcloudCynosdbAccountAllGrantPrivilegesAccountOutputReference | DataTencentcloudCynosdbAccountAllGrantPrivilegesAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_name: {
      value: cdktf.stringToHclTerraform(struct!.accountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTencentcloudCynosdbAccountAllGrantPrivilegesAccountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTencentcloudCynosdbAccountAllGrantPrivilegesAccount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountName = this._accountName;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCynosdbAccountAllGrantPrivilegesAccount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountName = undefined;
      this._host = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountName = value.accountName;
      this._host = value.host;
    }
  }

  // account_name - computed: false, optional: false, required: true
  private _accountName?: string; 
  public get accountName() {
    return this.getStringAttribute('account_name');
  }
  public set accountName(value: string) {
    this._accountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameInput() {
    return this._accountName;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/cynosdb_account_all_grant_privileges tencentcloud_cynosdb_account_all_grant_privileges}
*/
export class DataTencentcloudCynosdbAccountAllGrantPrivileges extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cynosdb_account_all_grant_privileges";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudCynosdbAccountAllGrantPrivileges resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudCynosdbAccountAllGrantPrivileges to import
  * @param importFromId The id of the existing DataTencentcloudCynosdbAccountAllGrantPrivileges that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/cynosdb_account_all_grant_privileges#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudCynosdbAccountAllGrantPrivileges to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cynosdb_account_all_grant_privileges", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/cynosdb_account_all_grant_privileges tencentcloud_cynosdb_account_all_grant_privileges} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudCynosdbAccountAllGrantPrivilegesConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudCynosdbAccountAllGrantPrivilegesConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cynosdb_account_all_grant_privileges',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.41',
        providerVersionConstraint: '1.82.41'
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
    this._id = config.id;
    this._resultOutputFile = config.resultOutputFile;
    this._account.internalValue = config.account;
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

  // database_privileges - computed: true, optional: false, required: false
  private _databasePrivileges = new DataTencentcloudCynosdbAccountAllGrantPrivilegesDatabasePrivilegesList(this, "database_privileges", false);
  public get databasePrivileges() {
    return this._databasePrivileges;
  }

  // global_privileges - computed: true, optional: false, required: false
  public get globalPrivileges() {
    return cdktf.Fn.tolist(this.getListAttribute('global_privileges'));
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

  // privilege_statements - computed: true, optional: false, required: false
  public get privilegeStatements() {
    return cdktf.Fn.tolist(this.getListAttribute('privilege_statements'));
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

  // table_privileges - computed: true, optional: false, required: false
  private _tablePrivileges = new DataTencentcloudCynosdbAccountAllGrantPrivilegesTablePrivilegesList(this, "table_privileges", false);
  public get tablePrivileges() {
    return this._tablePrivileges;
  }

  // account - computed: false, optional: false, required: true
  private _account = new DataTencentcloudCynosdbAccountAllGrantPrivilegesAccountOutputReference(this, "account");
  public get account() {
    return this._account;
  }
  public putAccount(value: DataTencentcloudCynosdbAccountAllGrantPrivilegesAccount) {
    this._account.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      id: cdktf.stringToTerraform(this._id),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      account: dataTencentcloudCynosdbAccountAllGrantPrivilegesAccountToTerraform(this._account.internalValue),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      account: {
        value: dataTencentcloudCynosdbAccountAllGrantPrivilegesAccountToHclTerraform(this._account.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTencentcloudCynosdbAccountAllGrantPrivilegesAccountList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
