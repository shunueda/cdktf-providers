// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/system_health_check
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortiadcSystemHealthCheckConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/system_health_check#id DataFortiadcSystemHealthCheck#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/system_health_check#mkey DataFortiadcSystemHealthCheck#mkey}
  */
  readonly mkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/system_health_check#vdom DataFortiadcSystemHealthCheck#vdom}
  */
  readonly vdom?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/system_health_check fortiadc_system_health_check}
*/
export class DataFortiadcSystemHealthCheck extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_system_health_check";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortiadcSystemHealthCheck resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortiadcSystemHealthCheck to import
  * @param importFromId The id of the existing DataFortiadcSystemHealthCheck that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/system_health_check#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortiadcSystemHealthCheck to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_system_health_check", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/system_health_check fortiadc_system_health_check} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortiadcSystemHealthCheckConfig
  */
  public constructor(scope: Construct, id: string, config: DataFortiadcSystemHealthCheckConfig) {
    super(scope, id, {
      terraformResourceType: 'fortiadc_system_health_check',
      terraformGeneratorMetadata: {
        providerName: 'fortiadc',
        providerVersion: '1.3.1',
        providerVersionConstraint: '1.3.1'
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
    this._vdom = config.vdom;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acct_appid - computed: true, optional: false, required: false
  public get acctAppid() {
    return this.getStringAttribute('acct_appid');
  }

  // addr_type - computed: true, optional: false, required: false
  public get addrType() {
    return this.getStringAttribute('addr_type');
  }

  // agent_type - computed: true, optional: false, required: false
  public get agentType() {
    return this.getStringAttribute('agent_type');
  }

  // allow_ssl_version - computed: true, optional: false, required: false
  public get allowSslVersion() {
    return this.getStringAttribute('allow_ssl_version');
  }

  // attribute - computed: true, optional: false, required: false
  public get attribute() {
    return this.getStringAttribute('attribute');
  }

  // auth_appid - computed: true, optional: false, required: false
  public get authAppid() {
    return this.getStringAttribute('auth_appid');
  }

  // basedn - computed: true, optional: false, required: false
  public get basedn() {
    return this.getStringAttribute('basedn');
  }

  // binddn - computed: true, optional: false, required: false
  public get binddn() {
    return this.getStringAttribute('binddn');
  }

  // column - computed: true, optional: false, required: false
  public get column() {
    return this.getStringAttribute('column');
  }

  // community - computed: true, optional: false, required: false
  public get community() {
    return this.getStringAttribute('community');
  }

  // compare_type - computed: true, optional: false, required: false
  public get compareType() {
    return this.getStringAttribute('compare_type');
  }

  // connect_string - computed: true, optional: false, required: false
  public get connectString() {
    return this.getStringAttribute('connect_string');
  }

  // connect_type - computed: true, optional: false, required: false
  public get connectType() {
    return this.getStringAttribute('connect_type');
  }

  // counter_value - computed: true, optional: false, required: false
  public get counterValue() {
    return this.getStringAttribute('counter_value');
  }

  // cpu - computed: true, optional: false, required: false
  public get cpu() {
    return this.getStringAttribute('cpu');
  }

  // cpu_weight - computed: true, optional: false, required: false
  public get cpuWeight() {
    return this.getStringAttribute('cpu_weight');
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // dest_addr - computed: true, optional: false, required: false
  public get destAddr() {
    return this.getStringAttribute('dest_addr');
  }

  // dest_addr6 - computed: true, optional: false, required: false
  public get destAddr6() {
    return this.getStringAttribute('dest_addr6');
  }

  // dest_addr_type - computed: true, optional: false, required: false
  public get destAddrType() {
    return this.getStringAttribute('dest_addr_type');
  }

  // disk - computed: true, optional: false, required: false
  public get disk() {
    return this.getStringAttribute('disk');
  }

  // disk_weight - computed: true, optional: false, required: false
  public get diskWeight() {
    return this.getStringAttribute('disk_weight');
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // down_retry - computed: true, optional: false, required: false
  public get downRetry() {
    return this.getStringAttribute('down_retry');
  }

  // file - computed: true, optional: false, required: false
  public get file() {
    return this.getStringAttribute('file');
  }

  // filter - computed: true, optional: false, required: false
  public get filter() {
    return this.getStringAttribute('filter');
  }

  // folder - computed: true, optional: false, required: false
  public get folder() {
    return this.getStringAttribute('folder');
  }

  // host_addr - computed: true, optional: false, required: false
  public get hostAddr() {
    return this.getStringAttribute('host_addr');
  }

  // host_addr6 - computed: true, optional: false, required: false
  public get hostAddr6() {
    return this.getStringAttribute('host_addr6');
  }

  // host_ip6_addr - computed: true, optional: false, required: false
  public get hostIp6Addr() {
    return this.getStringAttribute('host_ip6_addr');
  }

  // host_ip_addr - computed: true, optional: false, required: false
  public get hostIpAddr() {
    return this.getStringAttribute('host_ip_addr');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // http_connect - computed: true, optional: false, required: false
  public get httpConnect() {
    return this.getStringAttribute('http_connect');
  }

  // http_extra_string - computed: true, optional: false, required: false
  public get httpExtraString() {
    return this.getStringAttribute('http_extra_string');
  }

  // http_version - computed: true, optional: false, required: false
  public get httpVersion() {
    return this.getStringAttribute('http_version');
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

  // interval - computed: true, optional: false, required: false
  public get interval() {
    return this.getStringAttribute('interval');
  }

  // local_cert - computed: true, optional: false, required: false
  public get localCert() {
    return this.getStringAttribute('local_cert');
  }

  // match_type - computed: true, optional: false, required: false
  public get matchType() {
    return this.getStringAttribute('match_type');
  }

  // mem - computed: true, optional: false, required: false
  public get mem() {
    return this.getStringAttribute('mem');
  }

  // mem_weight - computed: true, optional: false, required: false
  public get memWeight() {
    return this.getStringAttribute('mem_weight');
  }

  // method_type - computed: true, optional: false, required: false
  public get methodType() {
    return this.getStringAttribute('method_type');
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

  // mssql_column - computed: true, optional: false, required: false
  public get mssqlColumn() {
    return this.getStringAttribute('mssql_column');
  }

  // mssql_receive_string - computed: true, optional: false, required: false
  public get mssqlReceiveString() {
    return this.getStringAttribute('mssql_receive_string');
  }

  // mssql_row - computed: true, optional: false, required: false
  public get mssqlRow() {
    return this.getStringAttribute('mssql_row');
  }

  // mssql_send_string - computed: true, optional: false, required: false
  public get mssqlSendString() {
    return this.getStringAttribute('mssql_send_string');
  }

  // mysql_server_type - computed: true, optional: false, required: false
  public get mysqlServerType() {
    return this.getStringAttribute('mysql_server_type');
  }

  // nas_ip - computed: true, optional: false, required: false
  public get nasIp() {
    return this.getStringAttribute('nas_ip');
  }

  // oid - computed: true, optional: false, required: false
  public get oid() {
    return this.getStringAttribute('oid');
  }

  // oracle_receive_string - computed: true, optional: false, required: false
  public get oracleReceiveString() {
    return this.getStringAttribute('oracle_receive_string');
  }

  // oracle_send_string - computed: true, optional: false, required: false
  public get oracleSendString() {
    return this.getStringAttribute('oracle_send_string');
  }

  // origin_host - computed: true, optional: false, required: false
  public get originHost() {
    return this.getStringAttribute('origin_host');
  }

  // origin_realm - computed: true, optional: false, required: false
  public get originRealm() {
    return this.getStringAttribute('origin_realm');
  }

  // passive - computed: true, optional: false, required: false
  public get passive() {
    return this.getStringAttribute('passive');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // product_name - computed: true, optional: false, required: false
  public get productName() {
    return this.getStringAttribute('product_name');
  }

  // pwd_type - computed: true, optional: false, required: false
  public get pwdType() {
    return this.getStringAttribute('pwd_type');
  }

  // radius_reject - computed: true, optional: false, required: false
  public get radiusReject() {
    return this.getStringAttribute('radius_reject');
  }

  // receive_string - computed: true, optional: false, required: false
  public get receiveString() {
    return this.getStringAttribute('receive_string');
  }

  // remote_host - computed: true, optional: false, required: false
  public get remoteHost() {
    return this.getStringAttribute('remote_host');
  }

  // remote_password - computed: true, optional: false, required: false
  public get remotePassword() {
    return this.getStringAttribute('remote_password');
  }

  // remote_port - computed: true, optional: false, required: false
  public get remotePort() {
    return this.getStringAttribute('remote_port');
  }

  // remote_username - computed: true, optional: false, required: false
  public get remoteUsername() {
    return this.getStringAttribute('remote_username');
  }

  // row - computed: true, optional: false, required: false
  public get row() {
    return this.getStringAttribute('row');
  }

  // rtsp_describe_url - computed: true, optional: false, required: false
  public get rtspDescribeUrl() {
    return this.getStringAttribute('rtsp_describe_url');
  }

  // rtsp_method_type - computed: true, optional: false, required: false
  public get rtspMethodType() {
    return this.getStringAttribute('rtsp_method_type');
  }

  // script - computed: true, optional: false, required: false
  public get script() {
    return this.getStringAttribute('script');
  }

  // secret_key - computed: true, optional: false, required: false
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }

  // send_string - computed: true, optional: false, required: false
  public get sendString() {
    return this.getStringAttribute('send_string');
  }

  // service_name - computed: true, optional: false, required: false
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }

  // sid - computed: true, optional: false, required: false
  public get sid() {
    return this.getStringAttribute('sid');
  }

  // sip_request_type - computed: true, optional: false, required: false
  public get sipRequestType() {
    return this.getStringAttribute('sip_request_type');
  }

  // ssl_ciphers - computed: true, optional: false, required: false
  public get sslCiphers() {
    return this.getStringAttribute('ssl_ciphers');
  }

  // status_code - computed: true, optional: false, required: false
  public get statusCode() {
    return this.getStringAttribute('status_code');
  }

  // string_value - computed: true, optional: false, required: false
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }

  // timeout - computed: true, optional: false, required: false
  public get timeout() {
    return this.getStringAttribute('timeout');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // up_retry - computed: true, optional: false, required: false
  public get upRetry() {
    return this.getStringAttribute('up_retry');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }

  // value_type - computed: true, optional: false, required: false
  public get valueType() {
    return this.getStringAttribute('value_type');
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

  // vendor_id - computed: true, optional: false, required: false
  public get vendorId() {
    return this.getStringAttribute('vendor_id');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      mkey: cdktf.stringToTerraform(this._mkey),
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
