// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/load_balance_pool_child_pool_member
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortiadcLoadBalancePoolChildPoolMemberConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/load_balance_pool_child_pool_member#id DataFortiadcLoadBalancePoolChildPoolMember#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/load_balance_pool_child_pool_member#mkey DataFortiadcLoadBalancePoolChildPoolMember#mkey}
  */
  readonly mkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/load_balance_pool_child_pool_member#pkey DataFortiadcLoadBalancePoolChildPoolMember#pkey}
  */
  readonly pkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/load_balance_pool_child_pool_member#vdom DataFortiadcLoadBalancePoolChildPoolMember#vdom}
  */
  readonly vdom?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/load_balance_pool_child_pool_member fortiadc_load_balance_pool_child_pool_member}
*/
export class DataFortiadcLoadBalancePoolChildPoolMember extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_load_balance_pool_child_pool_member";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortiadcLoadBalancePoolChildPoolMember resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortiadcLoadBalancePoolChildPoolMember to import
  * @param importFromId The id of the existing DataFortiadcLoadBalancePoolChildPoolMember that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/load_balance_pool_child_pool_member#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortiadcLoadBalancePoolChildPoolMember to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_load_balance_pool_child_pool_member", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/load_balance_pool_child_pool_member fortiadc_load_balance_pool_child_pool_member} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortiadcLoadBalancePoolChildPoolMemberConfig
  */
  public constructor(scope: Construct, id: string, config: DataFortiadcLoadBalancePoolChildPoolMemberConfig) {
    super(scope, id, {
      terraformResourceType: 'fortiadc_load_balance_pool_child_pool_member',
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
    this._id = config.id;
    this._mkey = config.mkey;
    this._pkey = config.pkey;
    this._vdom = config.vdom;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // address6 - computed: true, optional: false, required: false
  public get address6() {
    return this.getStringAttribute('address6');
  }

  // backup - computed: true, optional: false, required: false
  public get backup() {
    return this.getStringAttribute('backup');
  }

  // connection_rate_limit - computed: true, optional: false, required: false
  public get connectionRateLimit() {
    return this.getStringAttribute('connection_rate_limit');
  }

  // connlimit - computed: true, optional: false, required: false
  public get connlimit() {
    return this.getStringAttribute('connlimit');
  }

  // cookie - computed: true, optional: false, required: false
  public get cookie() {
    return this.getStringAttribute('cookie');
  }

  // hc_status - computed: true, optional: false, required: false
  public get hcStatus() {
    return this.getStringAttribute('hc_status');
  }

  // health_check_inherit - computed: true, optional: false, required: false
  public get healthCheckInherit() {
    return this.getStringAttribute('health_check_inherit');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
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

  // m_health_check - computed: true, optional: false, required: false
  public get mHealthCheck() {
    return this.getStringAttribute('m_health_check');
  }

  // m_health_check_list - computed: true, optional: false, required: false
  public get mHealthCheckList() {
    return this.getStringAttribute('m_health_check_list');
  }

  // m_health_check_relationship - computed: true, optional: false, required: false
  public get mHealthCheckRelationship() {
    return this.getStringAttribute('m_health_check_relationship');
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

  // modify_host - computed: true, optional: false, required: false
  public get modifyHost() {
    return this.getStringAttribute('modify_host');
  }

  // mssql_read_only - computed: true, optional: false, required: false
  public get mssqlReadOnly() {
    return this.getStringAttribute('mssql_read_only');
  }

  // mysql_group_id - computed: true, optional: false, required: false
  public get mysqlGroupId() {
    return this.getStringAttribute('mysql_group_id');
  }

  // mysql_read_only - computed: true, optional: false, required: false
  public get mysqlReadOnly() {
    return this.getStringAttribute('mysql_read_only');
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

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // proxy_protocol - computed: true, optional: false, required: false
  public get proxyProtocol() {
    return this.getStringAttribute('proxy_protocol');
  }

  // real_server_id - computed: true, optional: false, required: false
  public get realServerId() {
    return this.getStringAttribute('real_server_id');
  }

  // recover - computed: true, optional: false, required: false
  public get recover() {
    return this.getStringAttribute('recover');
  }

  // rs_profile - computed: true, optional: false, required: false
  public get rsProfile() {
    return this.getStringAttribute('rs_profile');
  }

  // rs_profile_inherit - computed: true, optional: false, required: false
  public get rsProfileInherit() {
    return this.getStringAttribute('rs_profile_inherit');
  }

  // server_name - computed: true, optional: false, required: false
  public get serverName() {
    return this.getStringAttribute('server_name');
  }

  // ssl - computed: true, optional: false, required: false
  public get ssl() {
    return this.getStringAttribute('ssl');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // warmrate - computed: true, optional: false, required: false
  public get warmrate() {
    return this.getStringAttribute('warmrate');
  }

  // warmup - computed: true, optional: false, required: false
  public get warmup() {
    return this.getStringAttribute('warmup');
  }

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getStringAttribute('weight');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      mkey: cdktf.stringToTerraform(this._mkey),
      pkey: cdktf.stringToTerraform(this._pkey),
      vdom: cdktf.stringToTerraform(this._vdom),
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
