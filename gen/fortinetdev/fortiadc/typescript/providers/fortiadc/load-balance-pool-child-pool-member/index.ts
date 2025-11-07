// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pool_child_pool_member
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LoadBalancePoolChildPoolMemberConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pool_child_pool_member#address LoadBalancePoolChildPoolMember#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pool_child_pool_member#address6 LoadBalancePoolChildPoolMember#address6}
  */
  readonly address6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pool_child_pool_member#backup LoadBalancePoolChildPoolMember#backup}
  */
  readonly backup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pool_child_pool_member#connection_rate_limit LoadBalancePoolChildPoolMember#connection_rate_limit}
  */
  readonly connectionRateLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pool_child_pool_member#connlimit LoadBalancePoolChildPoolMember#connlimit}
  */
  readonly connlimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pool_child_pool_member#cookie LoadBalancePoolChildPoolMember#cookie}
  */
  readonly cookie?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pool_child_pool_member#hc_status LoadBalancePoolChildPoolMember#hc_status}
  */
  readonly hcStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pool_child_pool_member#health_check_inherit LoadBalancePoolChildPoolMember#health_check_inherit}
  */
  readonly healthCheckInherit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pool_child_pool_member#host LoadBalancePoolChildPoolMember#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pool_child_pool_member#id LoadBalancePoolChildPoolMember#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pool_child_pool_member#m_health_check LoadBalancePoolChildPoolMember#m_health_check}
  */
  readonly mHealthCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pool_child_pool_member#m_health_check_list LoadBalancePoolChildPoolMember#m_health_check_list}
  */
  readonly mHealthCheckList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pool_child_pool_member#m_health_check_relationship LoadBalancePoolChildPoolMember#m_health_check_relationship}
  */
  readonly mHealthCheckRelationship?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pool_child_pool_member#mkey LoadBalancePoolChildPoolMember#mkey}
  */
  readonly mkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pool_child_pool_member#modify_host LoadBalancePoolChildPoolMember#modify_host}
  */
  readonly modifyHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pool_child_pool_member#mssql_read_only LoadBalancePoolChildPoolMember#mssql_read_only}
  */
  readonly mssqlReadOnly?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pool_child_pool_member#mysql_group_id LoadBalancePoolChildPoolMember#mysql_group_id}
  */
  readonly mysqlGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pool_child_pool_member#mysql_read_only LoadBalancePoolChildPoolMember#mysql_read_only}
  */
  readonly mysqlReadOnly?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pool_child_pool_member#pkey LoadBalancePoolChildPoolMember#pkey}
  */
  readonly pkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pool_child_pool_member#port LoadBalancePoolChildPoolMember#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pool_child_pool_member#proxy_protocol LoadBalancePoolChildPoolMember#proxy_protocol}
  */
  readonly proxyProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pool_child_pool_member#real_server_id LoadBalancePoolChildPoolMember#real_server_id}
  */
  readonly realServerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pool_child_pool_member#recover LoadBalancePoolChildPoolMember#recover}
  */
  readonly recover?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pool_child_pool_member#rs_profile LoadBalancePoolChildPoolMember#rs_profile}
  */
  readonly rsProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pool_child_pool_member#rs_profile_inherit LoadBalancePoolChildPoolMember#rs_profile_inherit}
  */
  readonly rsProfileInherit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pool_child_pool_member#server_name LoadBalancePoolChildPoolMember#server_name}
  */
  readonly serverName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pool_child_pool_member#ssl LoadBalancePoolChildPoolMember#ssl}
  */
  readonly ssl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pool_child_pool_member#status LoadBalancePoolChildPoolMember#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pool_child_pool_member#vdom LoadBalancePoolChildPoolMember#vdom}
  */
  readonly vdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pool_child_pool_member#warmrate LoadBalancePoolChildPoolMember#warmrate}
  */
  readonly warmrate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pool_child_pool_member#warmup LoadBalancePoolChildPoolMember#warmup}
  */
  readonly warmup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pool_child_pool_member#weight LoadBalancePoolChildPoolMember#weight}
  */
  readonly weight?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pool_child_pool_member fortiadc_load_balance_pool_child_pool_member}
*/
export class LoadBalancePoolChildPoolMember extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_load_balance_pool_child_pool_member";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LoadBalancePoolChildPoolMember resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LoadBalancePoolChildPoolMember to import
  * @param importFromId The id of the existing LoadBalancePoolChildPoolMember that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pool_child_pool_member#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LoadBalancePoolChildPoolMember to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_load_balance_pool_child_pool_member", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pool_child_pool_member fortiadc_load_balance_pool_child_pool_member} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LoadBalancePoolChildPoolMemberConfig
  */
  public constructor(scope: Construct, id: string, config: LoadBalancePoolChildPoolMemberConfig) {
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
    this._address = config.address;
    this._address6 = config.address6;
    this._backup = config.backup;
    this._connectionRateLimit = config.connectionRateLimit;
    this._connlimit = config.connlimit;
    this._cookie = config.cookie;
    this._hcStatus = config.hcStatus;
    this._healthCheckInherit = config.healthCheckInherit;
    this._host = config.host;
    this._id = config.id;
    this._mHealthCheck = config.mHealthCheck;
    this._mHealthCheckList = config.mHealthCheckList;
    this._mHealthCheckRelationship = config.mHealthCheckRelationship;
    this._mkey = config.mkey;
    this._modifyHost = config.modifyHost;
    this._mssqlReadOnly = config.mssqlReadOnly;
    this._mysqlGroupId = config.mysqlGroupId;
    this._mysqlReadOnly = config.mysqlReadOnly;
    this._pkey = config.pkey;
    this._port = config.port;
    this._proxyProtocol = config.proxyProtocol;
    this._realServerId = config.realServerId;
    this._recover = config.recover;
    this._rsProfile = config.rsProfile;
    this._rsProfileInherit = config.rsProfileInherit;
    this._serverName = config.serverName;
    this._ssl = config.ssl;
    this._status = config.status;
    this._vdom = config.vdom;
    this._warmrate = config.warmrate;
    this._warmup = config.warmup;
    this._weight = config.weight;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: true, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // address6 - computed: true, optional: true, required: false
  private _address6?: string; 
  public get address6() {
    return this.getStringAttribute('address6');
  }
  public set address6(value: string) {
    this._address6 = value;
  }
  public resetAddress6() {
    this._address6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get address6Input() {
    return this._address6;
  }

  // backup - computed: true, optional: true, required: false
  private _backup?: string; 
  public get backup() {
    return this.getStringAttribute('backup');
  }
  public set backup(value: string) {
    this._backup = value;
  }
  public resetBackup() {
    this._backup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupInput() {
    return this._backup;
  }

  // connection_rate_limit - computed: true, optional: true, required: false
  private _connectionRateLimit?: string; 
  public get connectionRateLimit() {
    return this.getStringAttribute('connection_rate_limit');
  }
  public set connectionRateLimit(value: string) {
    this._connectionRateLimit = value;
  }
  public resetConnectionRateLimit() {
    this._connectionRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionRateLimitInput() {
    return this._connectionRateLimit;
  }

  // connlimit - computed: true, optional: true, required: false
  private _connlimit?: string; 
  public get connlimit() {
    return this.getStringAttribute('connlimit');
  }
  public set connlimit(value: string) {
    this._connlimit = value;
  }
  public resetConnlimit() {
    this._connlimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connlimitInput() {
    return this._connlimit;
  }

  // cookie - computed: true, optional: true, required: false
  private _cookie?: string; 
  public get cookie() {
    return this.getStringAttribute('cookie');
  }
  public set cookie(value: string) {
    this._cookie = value;
  }
  public resetCookie() {
    this._cookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieInput() {
    return this._cookie;
  }

  // hc_status - computed: true, optional: true, required: false
  private _hcStatus?: string; 
  public get hcStatus() {
    return this.getStringAttribute('hc_status');
  }
  public set hcStatus(value: string) {
    this._hcStatus = value;
  }
  public resetHcStatus() {
    this._hcStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hcStatusInput() {
    return this._hcStatus;
  }

  // health_check_inherit - computed: true, optional: true, required: false
  private _healthCheckInherit?: string; 
  public get healthCheckInherit() {
    return this.getStringAttribute('health_check_inherit');
  }
  public set healthCheckInherit(value: string) {
    this._healthCheckInherit = value;
  }
  public resetHealthCheckInherit() {
    this._healthCheckInherit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInheritInput() {
    return this._healthCheckInherit;
  }

  // host - computed: true, optional: true, required: false
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

  // m_health_check - computed: true, optional: true, required: false
  private _mHealthCheck?: string; 
  public get mHealthCheck() {
    return this.getStringAttribute('m_health_check');
  }
  public set mHealthCheck(value: string) {
    this._mHealthCheck = value;
  }
  public resetMHealthCheck() {
    this._mHealthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mHealthCheckInput() {
    return this._mHealthCheck;
  }

  // m_health_check_list - computed: true, optional: true, required: false
  private _mHealthCheckList?: string; 
  public get mHealthCheckList() {
    return this.getStringAttribute('m_health_check_list');
  }
  public set mHealthCheckList(value: string) {
    this._mHealthCheckList = value;
  }
  public resetMHealthCheckList() {
    this._mHealthCheckList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mHealthCheckListInput() {
    return this._mHealthCheckList;
  }

  // m_health_check_relationship - computed: true, optional: true, required: false
  private _mHealthCheckRelationship?: string; 
  public get mHealthCheckRelationship() {
    return this.getStringAttribute('m_health_check_relationship');
  }
  public set mHealthCheckRelationship(value: string) {
    this._mHealthCheckRelationship = value;
  }
  public resetMHealthCheckRelationship() {
    this._mHealthCheckRelationship = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mHealthCheckRelationshipInput() {
    return this._mHealthCheckRelationship;
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

  // modify_host - computed: true, optional: true, required: false
  private _modifyHost?: string; 
  public get modifyHost() {
    return this.getStringAttribute('modify_host');
  }
  public set modifyHost(value: string) {
    this._modifyHost = value;
  }
  public resetModifyHost() {
    this._modifyHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifyHostInput() {
    return this._modifyHost;
  }

  // mssql_read_only - computed: true, optional: true, required: false
  private _mssqlReadOnly?: string; 
  public get mssqlReadOnly() {
    return this.getStringAttribute('mssql_read_only');
  }
  public set mssqlReadOnly(value: string) {
    this._mssqlReadOnly = value;
  }
  public resetMssqlReadOnly() {
    this._mssqlReadOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mssqlReadOnlyInput() {
    return this._mssqlReadOnly;
  }

  // mysql_group_id - computed: true, optional: true, required: false
  private _mysqlGroupId?: string; 
  public get mysqlGroupId() {
    return this.getStringAttribute('mysql_group_id');
  }
  public set mysqlGroupId(value: string) {
    this._mysqlGroupId = value;
  }
  public resetMysqlGroupId() {
    this._mysqlGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlGroupIdInput() {
    return this._mysqlGroupId;
  }

  // mysql_read_only - computed: true, optional: true, required: false
  private _mysqlReadOnly?: string; 
  public get mysqlReadOnly() {
    return this.getStringAttribute('mysql_read_only');
  }
  public set mysqlReadOnly(value: string) {
    this._mysqlReadOnly = value;
  }
  public resetMysqlReadOnly() {
    this._mysqlReadOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlReadOnlyInput() {
    return this._mysqlReadOnly;
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

  // port - computed: true, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // proxy_protocol - computed: true, optional: true, required: false
  private _proxyProtocol?: string; 
  public get proxyProtocol() {
    return this.getStringAttribute('proxy_protocol');
  }
  public set proxyProtocol(value: string) {
    this._proxyProtocol = value;
  }
  public resetProxyProtocol() {
    this._proxyProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyProtocolInput() {
    return this._proxyProtocol;
  }

  // real_server_id - computed: true, optional: true, required: false
  private _realServerId?: string; 
  public get realServerId() {
    return this.getStringAttribute('real_server_id');
  }
  public set realServerId(value: string) {
    this._realServerId = value;
  }
  public resetRealServerId() {
    this._realServerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realServerIdInput() {
    return this._realServerId;
  }

  // recover - computed: true, optional: true, required: false
  private _recover?: string; 
  public get recover() {
    return this.getStringAttribute('recover');
  }
  public set recover(value: string) {
    this._recover = value;
  }
  public resetRecover() {
    this._recover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoverInput() {
    return this._recover;
  }

  // rs_profile - computed: true, optional: true, required: false
  private _rsProfile?: string; 
  public get rsProfile() {
    return this.getStringAttribute('rs_profile');
  }
  public set rsProfile(value: string) {
    this._rsProfile = value;
  }
  public resetRsProfile() {
    this._rsProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsProfileInput() {
    return this._rsProfile;
  }

  // rs_profile_inherit - computed: true, optional: true, required: false
  private _rsProfileInherit?: string; 
  public get rsProfileInherit() {
    return this.getStringAttribute('rs_profile_inherit');
  }
  public set rsProfileInherit(value: string) {
    this._rsProfileInherit = value;
  }
  public resetRsProfileInherit() {
    this._rsProfileInherit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsProfileInheritInput() {
    return this._rsProfileInherit;
  }

  // server_name - computed: true, optional: true, required: false
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  public resetServerName() {
    this._serverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }

  // ssl - computed: true, optional: true, required: false
  private _ssl?: string; 
  public get ssl() {
    return this.getStringAttribute('ssl');
  }
  public set ssl(value: string) {
    this._ssl = value;
  }
  public resetSsl() {
    this._ssl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInput() {
    return this._ssl;
  }

  // status - computed: true, optional: true, required: false
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

  // warmrate - computed: true, optional: true, required: false
  private _warmrate?: string; 
  public get warmrate() {
    return this.getStringAttribute('warmrate');
  }
  public set warmrate(value: string) {
    this._warmrate = value;
  }
  public resetWarmrate() {
    this._warmrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warmrateInput() {
    return this._warmrate;
  }

  // warmup - computed: true, optional: true, required: false
  private _warmup?: string; 
  public get warmup() {
    return this.getStringAttribute('warmup');
  }
  public set warmup(value: string) {
    this._warmup = value;
  }
  public resetWarmup() {
    this._warmup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warmupInput() {
    return this._warmup;
  }

  // weight - computed: true, optional: true, required: false
  private _weight?: string; 
  public get weight() {
    return this.getStringAttribute('weight');
  }
  public set weight(value: string) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address: cdktf.stringToTerraform(this._address),
      address6: cdktf.stringToTerraform(this._address6),
      backup: cdktf.stringToTerraform(this._backup),
      connection_rate_limit: cdktf.stringToTerraform(this._connectionRateLimit),
      connlimit: cdktf.stringToTerraform(this._connlimit),
      cookie: cdktf.stringToTerraform(this._cookie),
      hc_status: cdktf.stringToTerraform(this._hcStatus),
      health_check_inherit: cdktf.stringToTerraform(this._healthCheckInherit),
      host: cdktf.stringToTerraform(this._host),
      id: cdktf.stringToTerraform(this._id),
      m_health_check: cdktf.stringToTerraform(this._mHealthCheck),
      m_health_check_list: cdktf.stringToTerraform(this._mHealthCheckList),
      m_health_check_relationship: cdktf.stringToTerraform(this._mHealthCheckRelationship),
      mkey: cdktf.stringToTerraform(this._mkey),
      modify_host: cdktf.stringToTerraform(this._modifyHost),
      mssql_read_only: cdktf.stringToTerraform(this._mssqlReadOnly),
      mysql_group_id: cdktf.stringToTerraform(this._mysqlGroupId),
      mysql_read_only: cdktf.stringToTerraform(this._mysqlReadOnly),
      pkey: cdktf.stringToTerraform(this._pkey),
      port: cdktf.stringToTerraform(this._port),
      proxy_protocol: cdktf.stringToTerraform(this._proxyProtocol),
      real_server_id: cdktf.stringToTerraform(this._realServerId),
      recover: cdktf.stringToTerraform(this._recover),
      rs_profile: cdktf.stringToTerraform(this._rsProfile),
      rs_profile_inherit: cdktf.stringToTerraform(this._rsProfileInherit),
      server_name: cdktf.stringToTerraform(this._serverName),
      ssl: cdktf.stringToTerraform(this._ssl),
      status: cdktf.stringToTerraform(this._status),
      vdom: cdktf.stringToTerraform(this._vdom),
      warmrate: cdktf.stringToTerraform(this._warmrate),
      warmup: cdktf.stringToTerraform(this._warmup),
      weight: cdktf.stringToTerraform(this._weight),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address: {
        value: cdktf.stringToHclTerraform(this._address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      address6: {
        value: cdktf.stringToHclTerraform(this._address6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup: {
        value: cdktf.stringToHclTerraform(this._backup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_rate_limit: {
        value: cdktf.stringToHclTerraform(this._connectionRateLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connlimit: {
        value: cdktf.stringToHclTerraform(this._connlimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cookie: {
        value: cdktf.stringToHclTerraform(this._cookie),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hc_status: {
        value: cdktf.stringToHclTerraform(this._hcStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_check_inherit: {
        value: cdktf.stringToHclTerraform(this._healthCheckInherit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host: {
        value: cdktf.stringToHclTerraform(this._host),
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
      m_health_check: {
        value: cdktf.stringToHclTerraform(this._mHealthCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      m_health_check_list: {
        value: cdktf.stringToHclTerraform(this._mHealthCheckList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      m_health_check_relationship: {
        value: cdktf.stringToHclTerraform(this._mHealthCheckRelationship),
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
      modify_host: {
        value: cdktf.stringToHclTerraform(this._modifyHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mssql_read_only: {
        value: cdktf.stringToHclTerraform(this._mssqlReadOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mysql_group_id: {
        value: cdktf.stringToHclTerraform(this._mysqlGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mysql_read_only: {
        value: cdktf.stringToHclTerraform(this._mysqlReadOnly),
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
      port: {
        value: cdktf.stringToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_protocol: {
        value: cdktf.stringToHclTerraform(this._proxyProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      real_server_id: {
        value: cdktf.stringToHclTerraform(this._realServerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recover: {
        value: cdktf.stringToHclTerraform(this._recover),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rs_profile: {
        value: cdktf.stringToHclTerraform(this._rsProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rs_profile_inherit: {
        value: cdktf.stringToHclTerraform(this._rsProfileInherit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_name: {
        value: cdktf.stringToHclTerraform(this._serverName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl: {
        value: cdktf.stringToHclTerraform(this._ssl),
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
      vdom: {
        value: cdktf.stringToHclTerraform(this._vdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      warmrate: {
        value: cdktf.stringToHclTerraform(this._warmrate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      warmup: {
        value: cdktf.stringToHclTerraform(this._warmup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      weight: {
        value: cdktf.stringToHclTerraform(this._weight),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
