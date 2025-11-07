// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_account_privilege
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MysqlAccountPrivilegeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account host, default is `%`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_account_privilege#account_host MysqlAccountPrivilege#account_host}
  */
  readonly accountHost?: string;
  /**
  * Account name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_account_privilege#account_name MysqlAccountPrivilege#account_name}
  */
  readonly accountName: string;
  /**
  * List of specified database name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_account_privilege#database_names MysqlAccountPrivilege#database_names}
  */
  readonly databaseNames: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_account_privilege#id MysqlAccountPrivilege#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_account_privilege#mysql_id MysqlAccountPrivilege#mysql_id}
  */
  readonly mysqlId: string;
  /**
  * Database permissions. Valid values: `SELECT`, `INSERT`, `UPDATE`, `DELETE`, `CREATE`, `DROP`, `REFERENCES`, `INDEX`, `ALTER`, `CREATE TEMPORARY TABLES`, `LOCK TABLES`, `EXECUTE`, `CREATE VIEW`, `SHOW VIEW`, `CREATE ROUTINE`, `ALTER ROUTINE`, `EVENT` and `TRIGGER``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_account_privilege#privileges MysqlAccountPrivilege#privileges}
  */
  readonly privileges?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_account_privilege tencentcloud_mysql_account_privilege}
*/
export class MysqlAccountPrivilege extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_mysql_account_privilege";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MysqlAccountPrivilege resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MysqlAccountPrivilege to import
  * @param importFromId The id of the existing MysqlAccountPrivilege that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_account_privilege#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MysqlAccountPrivilege to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_mysql_account_privilege", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_account_privilege tencentcloud_mysql_account_privilege} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MysqlAccountPrivilegeConfig
  */
  public constructor(scope: Construct, id: string, config: MysqlAccountPrivilegeConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_mysql_account_privilege',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.35'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountHost = config.accountHost;
    this._accountName = config.accountName;
    this._databaseNames = config.databaseNames;
    this._id = config.id;
    this._mysqlId = config.mysqlId;
    this._privileges = config.privileges;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_host - computed: false, optional: true, required: false
  private _accountHost?: string; 
  public get accountHost() {
    return this.getStringAttribute('account_host');
  }
  public set accountHost(value: string) {
    this._accountHost = value;
  }
  public resetAccountHost() {
    this._accountHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountHostInput() {
    return this._accountHost;
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

  // database_names - computed: false, optional: false, required: true
  private _databaseNames?: string[]; 
  public get databaseNames() {
    return cdktf.Fn.tolist(this.getListAttribute('database_names'));
  }
  public set databaseNames(value: string[]) {
    this._databaseNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNamesInput() {
    return this._databaseNames;
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

  // mysql_id - computed: false, optional: false, required: true
  private _mysqlId?: string; 
  public get mysqlId() {
    return this.getStringAttribute('mysql_id');
  }
  public set mysqlId(value: string) {
    this._mysqlId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlIdInput() {
    return this._mysqlId;
  }

  // privileges - computed: false, optional: true, required: false
  private _privileges?: string[]; 
  public get privileges() {
    return cdktf.Fn.tolist(this.getListAttribute('privileges'));
  }
  public set privileges(value: string[]) {
    this._privileges = value;
  }
  public resetPrivileges() {
    this._privileges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegesInput() {
    return this._privileges;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_host: cdktf.stringToTerraform(this._accountHost),
      account_name: cdktf.stringToTerraform(this._accountName),
      database_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._databaseNames),
      id: cdktf.stringToTerraform(this._id),
      mysql_id: cdktf.stringToTerraform(this._mysqlId),
      privileges: cdktf.listMapper(cdktf.stringToTerraform, false)(this._privileges),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_host: {
        value: cdktf.stringToHclTerraform(this._accountHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_name: {
        value: cdktf.stringToHclTerraform(this._accountName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._databaseNames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mysql_id: {
        value: cdktf.stringToHclTerraform(this._mysqlId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      privileges: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._privileges),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
