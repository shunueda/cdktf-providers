// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile_child_mysql_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LoadBalanceProfileChildMysqlRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile_child_mysql_rule#client_ip_list LoadBalanceProfileChildMysqlRule#client_ip_list}
  */
  readonly clientIpList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile_child_mysql_rule#db_list LoadBalanceProfileChildMysqlRule#db_list}
  */
  readonly dbList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile_child_mysql_rule#id LoadBalanceProfileChildMysqlRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile_child_mysql_rule#mkey LoadBalanceProfileChildMysqlRule#mkey}
  */
  readonly mkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile_child_mysql_rule#pkey LoadBalanceProfileChildMysqlRule#pkey}
  */
  readonly pkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile_child_mysql_rule#sql_list LoadBalanceProfileChildMysqlRule#sql_list}
  */
  readonly sqlList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile_child_mysql_rule#table_list LoadBalanceProfileChildMysqlRule#table_list}
  */
  readonly tableList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile_child_mysql_rule#type LoadBalanceProfileChildMysqlRule#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile_child_mysql_rule#user_list LoadBalanceProfileChildMysqlRule#user_list}
  */
  readonly userList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile_child_mysql_rule#vdom LoadBalanceProfileChildMysqlRule#vdom}
  */
  readonly vdom?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile_child_mysql_rule fortiadc_load_balance_profile_child_mysql_rule}
*/
export class LoadBalanceProfileChildMysqlRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_load_balance_profile_child_mysql_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LoadBalanceProfileChildMysqlRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LoadBalanceProfileChildMysqlRule to import
  * @param importFromId The id of the existing LoadBalanceProfileChildMysqlRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile_child_mysql_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LoadBalanceProfileChildMysqlRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_load_balance_profile_child_mysql_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile_child_mysql_rule fortiadc_load_balance_profile_child_mysql_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LoadBalanceProfileChildMysqlRuleConfig
  */
  public constructor(scope: Construct, id: string, config: LoadBalanceProfileChildMysqlRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'fortiadc_load_balance_profile_child_mysql_rule',
      terraformGeneratorMetadata: {
        providerName: 'fortiadc',
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
    this._clientIpList = config.clientIpList;
    this._dbList = config.dbList;
    this._id = config.id;
    this._mkey = config.mkey;
    this._pkey = config.pkey;
    this._sqlList = config.sqlList;
    this._tableList = config.tableList;
    this._type = config.type;
    this._userList = config.userList;
    this._vdom = config.vdom;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_ip_list - computed: true, optional: true, required: false
  private _clientIpList?: string; 
  public get clientIpList() {
    return this.getStringAttribute('client_ip_list');
  }
  public set clientIpList(value: string) {
    this._clientIpList = value;
  }
  public resetClientIpList() {
    this._clientIpList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpListInput() {
    return this._clientIpList;
  }

  // db_list - computed: true, optional: true, required: false
  private _dbList?: string; 
  public get dbList() {
    return this.getStringAttribute('db_list');
  }
  public set dbList(value: string) {
    this._dbList = value;
  }
  public resetDbList() {
    this._dbList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbListInput() {
    return this._dbList;
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

  // mkey - computed: false, optional: false, required: true
  private _mkey?: string; 
  public get mkey() {
    return this.getStringAttribute('mkey');
  }
  public set mkey(value: string) {
    this._mkey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mkeyInput() {
    return this._mkey;
  }

  // pkey - computed: false, optional: false, required: true
  private _pkey?: string; 
  public get pkey() {
    return this.getStringAttribute('pkey');
  }
  public set pkey(value: string) {
    this._pkey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pkeyInput() {
    return this._pkey;
  }

  // sql_list - computed: true, optional: true, required: false
  private _sqlList?: string; 
  public get sqlList() {
    return this.getStringAttribute('sql_list');
  }
  public set sqlList(value: string) {
    this._sqlList = value;
  }
  public resetSqlList() {
    this._sqlList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlListInput() {
    return this._sqlList;
  }

  // table_list - computed: true, optional: true, required: false
  private _tableList?: string; 
  public get tableList() {
    return this.getStringAttribute('table_list');
  }
  public set tableList(value: string) {
    this._tableList = value;
  }
  public resetTableList() {
    this._tableList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableListInput() {
    return this._tableList;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // user_list - computed: true, optional: true, required: false
  private _userList?: string; 
  public get userList() {
    return this.getStringAttribute('user_list');
  }
  public set userList(value: string) {
    this._userList = value;
  }
  public resetUserList() {
    this._userList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userListInput() {
    return this._userList;
  }

  // vdom - computed: false, optional: true, required: false
  private _vdom?: string; 
  public get vdom() {
    return this.getStringAttribute('vdom');
  }
  public set vdom(value: string) {
    this._vdom = value;
  }
  public resetVdom() {
    this._vdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomInput() {
    return this._vdom;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_ip_list: cdktf.stringToTerraform(this._clientIpList),
      db_list: cdktf.stringToTerraform(this._dbList),
      id: cdktf.stringToTerraform(this._id),
      mkey: cdktf.stringToTerraform(this._mkey),
      pkey: cdktf.stringToTerraform(this._pkey),
      sql_list: cdktf.stringToTerraform(this._sqlList),
      table_list: cdktf.stringToTerraform(this._tableList),
      type: cdktf.stringToTerraform(this._type),
      user_list: cdktf.stringToTerraform(this._userList),
      vdom: cdktf.stringToTerraform(this._vdom),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_ip_list: {
        value: cdktf.stringToHclTerraform(this._clientIpList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_list: {
        value: cdktf.stringToHclTerraform(this._dbList),
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
      mkey: {
        value: cdktf.stringToHclTerraform(this._mkey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pkey: {
        value: cdktf.stringToHclTerraform(this._pkey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sql_list: {
        value: cdktf.stringToHclTerraform(this._sqlList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      table_list: {
        value: cdktf.stringToHclTerraform(this._tableList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_list: {
        value: cdktf.stringToHclTerraform(this._userList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdom: {
        value: cdktf.stringToHclTerraform(this._vdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
