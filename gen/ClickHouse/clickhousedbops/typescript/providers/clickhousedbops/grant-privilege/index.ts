// https://registry.terraform.io/providers/clickhouse/clickhousedbops/1.3.1/docs/resources/grant_privilege
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GrantPrivilegeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the cluster to create the resource into. If omitted, resource will be created on the replica hit by the query.
  * This field must be left null when using a ClickHouse Cloud cluster.
  * When using a self hosted ClickHouse instance, this field should only be set when there is more than one replica and you are not using 'replicated' storage for user_directory.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhousedbops/1.3.1/docs/resources/grant_privilege#cluster_name GrantPrivilege#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * The name of the column in `table_name` to grant privilege on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhousedbops/1.3.1/docs/resources/grant_privilege#column_name GrantPrivilege#column_name}
  */
  readonly columnName?: string;
  /**
  * The name of the database to grant privilege on. Defaults to all databases if left null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhousedbops/1.3.1/docs/resources/grant_privilege#database_name GrantPrivilege#database_name}
  */
  readonly databaseName?: string;
  /**
  * If true, the grantee will be able to grant the same privileges to others.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhousedbops/1.3.1/docs/resources/grant_privilege#grant_option GrantPrivilege#grant_option}
  */
  readonly grantOption?: boolean | cdktf.IResolvable;
  /**
  * Name of the `role` to grant privileges to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhousedbops/1.3.1/docs/resources/grant_privilege#grantee_role_name GrantPrivilege#grantee_role_name}
  */
  readonly granteeRoleName?: string;
  /**
  * Name of the `user` to grant privileges to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhousedbops/1.3.1/docs/resources/grant_privilege#grantee_user_name GrantPrivilege#grantee_user_name}
  */
  readonly granteeUserName?: string;
  /**
  * The privilege to grant, such as `CREATE DATABASE`, `SELECT`, etc. See https://clickhouse.com/docs/en/sql-reference/statements/grant#privileges.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhousedbops/1.3.1/docs/resources/grant_privilege#privilege_name GrantPrivilege#privilege_name}
  */
  readonly privilegeName: string;
  /**
  * The name of the table to grant privilege on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhousedbops/1.3.1/docs/resources/grant_privilege#table_name GrantPrivilege#table_name}
  */
  readonly tableName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/clickhouse/clickhousedbops/1.3.1/docs/resources/grant_privilege clickhousedbops_grant_privilege}
*/
export class GrantPrivilege extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "clickhousedbops_grant_privilege";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GrantPrivilege resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GrantPrivilege to import
  * @param importFromId The id of the existing GrantPrivilege that should be imported. Refer to the {@link https://registry.terraform.io/providers/clickhouse/clickhousedbops/1.3.1/docs/resources/grant_privilege#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GrantPrivilege to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "clickhousedbops_grant_privilege", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/clickhouse/clickhousedbops/1.3.1/docs/resources/grant_privilege clickhousedbops_grant_privilege} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GrantPrivilegeConfig
  */
  public constructor(scope: Construct, id: string, config: GrantPrivilegeConfig) {
    super(scope, id, {
      terraformResourceType: 'clickhousedbops_grant_privilege',
      terraformGeneratorMetadata: {
        providerName: 'clickhousedbops',
        providerVersion: '1.3.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterName = config.clusterName;
    this._columnName = config.columnName;
    this._databaseName = config.databaseName;
    this._grantOption = config.grantOption;
    this._granteeRoleName = config.granteeRoleName;
    this._granteeUserName = config.granteeUserName;
    this._privilegeName = config.privilegeName;
    this._tableName = config.tableName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_name - computed: false, optional: true, required: false
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  public resetClusterName() {
    this._clusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // column_name - computed: false, optional: true, required: false
  private _columnName?: string; 
  public get columnName() {
    return this.getStringAttribute('column_name');
  }
  public set columnName(value: string) {
    this._columnName = value;
  }
  public resetColumnName() {
    this._columnName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNameInput() {
    return this._columnName;
  }

  // database_name - computed: false, optional: true, required: false
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  public resetDatabaseName() {
    this._databaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // grant_option - computed: true, optional: true, required: false
  private _grantOption?: boolean | cdktf.IResolvable; 
  public get grantOption() {
    return this.getBooleanAttribute('grant_option');
  }
  public set grantOption(value: boolean | cdktf.IResolvable) {
    this._grantOption = value;
  }
  public resetGrantOption() {
    this._grantOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grantOptionInput() {
    return this._grantOption;
  }

  // grantee_role_name - computed: false, optional: true, required: false
  private _granteeRoleName?: string; 
  public get granteeRoleName() {
    return this.getStringAttribute('grantee_role_name');
  }
  public set granteeRoleName(value: string) {
    this._granteeRoleName = value;
  }
  public resetGranteeRoleName() {
    this._granteeRoleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get granteeRoleNameInput() {
    return this._granteeRoleName;
  }

  // grantee_user_name - computed: false, optional: true, required: false
  private _granteeUserName?: string; 
  public get granteeUserName() {
    return this.getStringAttribute('grantee_user_name');
  }
  public set granteeUserName(value: string) {
    this._granteeUserName = value;
  }
  public resetGranteeUserName() {
    this._granteeUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get granteeUserNameInput() {
    return this._granteeUserName;
  }

  // privilege_name - computed: false, optional: false, required: true
  private _privilegeName?: string; 
  public get privilegeName() {
    return this.getStringAttribute('privilege_name');
  }
  public set privilegeName(value: string) {
    this._privilegeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegeNameInput() {
    return this._privilegeName;
  }

  // table_name - computed: false, optional: true, required: false
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  public resetTableName() {
    this._tableName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      column_name: cdktf.stringToTerraform(this._columnName),
      database_name: cdktf.stringToTerraform(this._databaseName),
      grant_option: cdktf.booleanToTerraform(this._grantOption),
      grantee_role_name: cdktf.stringToTerraform(this._granteeRoleName),
      grantee_user_name: cdktf.stringToTerraform(this._granteeUserName),
      privilege_name: cdktf.stringToTerraform(this._privilegeName),
      table_name: cdktf.stringToTerraform(this._tableName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_name: {
        value: cdktf.stringToHclTerraform(this._clusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      column_name: {
        value: cdktf.stringToHclTerraform(this._columnName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_name: {
        value: cdktf.stringToHclTerraform(this._databaseName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      grant_option: {
        value: cdktf.booleanToHclTerraform(this._grantOption),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      grantee_role_name: {
        value: cdktf.stringToHclTerraform(this._granteeRoleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      grantee_user_name: {
        value: cdktf.stringToHclTerraform(this._granteeUserName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      privilege_name: {
        value: cdktf.stringToHclTerraform(this._privilegeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      table_name: {
        value: cdktf.stringToHclTerraform(this._tableName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
