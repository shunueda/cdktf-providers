// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemHealthCheckConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#acct_appid SystemHealthCheck#acct_appid}
  */
  readonly acctAppid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#addr_type SystemHealthCheck#addr_type}
  */
  readonly addrType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#agent_type SystemHealthCheck#agent_type}
  */
  readonly agentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#allow_ssl_version SystemHealthCheck#allow_ssl_version}
  */
  readonly allowSslVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#attribute SystemHealthCheck#attribute}
  */
  readonly attribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#auth_appid SystemHealthCheck#auth_appid}
  */
  readonly authAppid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#basedn SystemHealthCheck#basedn}
  */
  readonly basedn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#binddn SystemHealthCheck#binddn}
  */
  readonly binddn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#column SystemHealthCheck#column}
  */
  readonly column?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#community SystemHealthCheck#community}
  */
  readonly community?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#compare_type SystemHealthCheck#compare_type}
  */
  readonly compareType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#connect_string SystemHealthCheck#connect_string}
  */
  readonly connectString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#connect_type SystemHealthCheck#connect_type}
  */
  readonly connectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#counter_value SystemHealthCheck#counter_value}
  */
  readonly counterValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#cpu SystemHealthCheck#cpu}
  */
  readonly cpu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#cpu_weight SystemHealthCheck#cpu_weight}
  */
  readonly cpuWeight?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#database SystemHealthCheck#database}
  */
  readonly database?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#dest_addr SystemHealthCheck#dest_addr}
  */
  readonly destAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#dest_addr6 SystemHealthCheck#dest_addr6}
  */
  readonly destAddr6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#dest_addr_type SystemHealthCheck#dest_addr_type}
  */
  readonly destAddrType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#disk SystemHealthCheck#disk}
  */
  readonly disk?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#disk_weight SystemHealthCheck#disk_weight}
  */
  readonly diskWeight?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#domain_name SystemHealthCheck#domain_name}
  */
  readonly domainName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#down_retry SystemHealthCheck#down_retry}
  */
  readonly downRetry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#file SystemHealthCheck#file}
  */
  readonly file?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#filter SystemHealthCheck#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#folder SystemHealthCheck#folder}
  */
  readonly folder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#host_addr SystemHealthCheck#host_addr}
  */
  readonly hostAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#host_addr6 SystemHealthCheck#host_addr6}
  */
  readonly hostAddr6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#host_ip6_addr SystemHealthCheck#host_ip6_addr}
  */
  readonly hostIp6Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#host_ip_addr SystemHealthCheck#host_ip_addr}
  */
  readonly hostIpAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#hostname SystemHealthCheck#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#http_connect SystemHealthCheck#http_connect}
  */
  readonly httpConnect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#http_extra_string SystemHealthCheck#http_extra_string}
  */
  readonly httpExtraString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#http_version SystemHealthCheck#http_version}
  */
  readonly httpVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#id SystemHealthCheck#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#interval SystemHealthCheck#interval}
  */
  readonly interval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#local_cert SystemHealthCheck#local_cert}
  */
  readonly localCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#match_type SystemHealthCheck#match_type}
  */
  readonly matchType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#mem SystemHealthCheck#mem}
  */
  readonly mem?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#mem_weight SystemHealthCheck#mem_weight}
  */
  readonly memWeight?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#method_type SystemHealthCheck#method_type}
  */
  readonly methodType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#mkey SystemHealthCheck#mkey}
  */
  readonly mkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#mssql_column SystemHealthCheck#mssql_column}
  */
  readonly mssqlColumn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#mssql_receive_string SystemHealthCheck#mssql_receive_string}
  */
  readonly mssqlReceiveString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#mssql_row SystemHealthCheck#mssql_row}
  */
  readonly mssqlRow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#mssql_send_string SystemHealthCheck#mssql_send_string}
  */
  readonly mssqlSendString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#mysql_server_type SystemHealthCheck#mysql_server_type}
  */
  readonly mysqlServerType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#nas_ip SystemHealthCheck#nas_ip}
  */
  readonly nasIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#oid SystemHealthCheck#oid}
  */
  readonly oid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#oracle_receive_string SystemHealthCheck#oracle_receive_string}
  */
  readonly oracleReceiveString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#oracle_send_string SystemHealthCheck#oracle_send_string}
  */
  readonly oracleSendString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#origin_host SystemHealthCheck#origin_host}
  */
  readonly originHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#origin_realm SystemHealthCheck#origin_realm}
  */
  readonly originRealm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#passive SystemHealthCheck#passive}
  */
  readonly passive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#password SystemHealthCheck#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#port SystemHealthCheck#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#product_name SystemHealthCheck#product_name}
  */
  readonly productName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#pwd_type SystemHealthCheck#pwd_type}
  */
  readonly pwdType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#radius_reject SystemHealthCheck#radius_reject}
  */
  readonly radiusReject?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#receive_string SystemHealthCheck#receive_string}
  */
  readonly receiveString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#remote_host SystemHealthCheck#remote_host}
  */
  readonly remoteHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#remote_password SystemHealthCheck#remote_password}
  */
  readonly remotePassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#remote_port SystemHealthCheck#remote_port}
  */
  readonly remotePort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#remote_username SystemHealthCheck#remote_username}
  */
  readonly remoteUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#row SystemHealthCheck#row}
  */
  readonly row?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#rtsp_describe_url SystemHealthCheck#rtsp_describe_url}
  */
  readonly rtspDescribeUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#rtsp_method_type SystemHealthCheck#rtsp_method_type}
  */
  readonly rtspMethodType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#script SystemHealthCheck#script}
  */
  readonly script?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#secret_key SystemHealthCheck#secret_key}
  */
  readonly secretKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#send_string SystemHealthCheck#send_string}
  */
  readonly sendString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#service_name SystemHealthCheck#service_name}
  */
  readonly serviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#sid SystemHealthCheck#sid}
  */
  readonly sid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#sip_request_type SystemHealthCheck#sip_request_type}
  */
  readonly sipRequestType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#ssl_ciphers SystemHealthCheck#ssl_ciphers}
  */
  readonly sslCiphers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#status_code SystemHealthCheck#status_code}
  */
  readonly statusCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#string_value SystemHealthCheck#string_value}
  */
  readonly stringValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#timeout SystemHealthCheck#timeout}
  */
  readonly timeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#type SystemHealthCheck#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#up_retry SystemHealthCheck#up_retry}
  */
  readonly upRetry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#username SystemHealthCheck#username}
  */
  readonly username?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#value_type SystemHealthCheck#value_type}
  */
  readonly valueType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#vdom SystemHealthCheck#vdom}
  */
  readonly vdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#vendor_id SystemHealthCheck#vendor_id}
  */
  readonly vendorId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#version SystemHealthCheck#version}
  */
  readonly version?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check fortiadc_system_health_check}
*/
export class SystemHealthCheck extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_system_health_check";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemHealthCheck resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemHealthCheck to import
  * @param importFromId The id of the existing SystemHealthCheck that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemHealthCheck to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_system_health_check", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_health_check fortiadc_system_health_check} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemHealthCheckConfig
  */
  public constructor(scope: Construct, id: string, config: SystemHealthCheckConfig) {
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
    this._acctAppid = config.acctAppid;
    this._addrType = config.addrType;
    this._agentType = config.agentType;
    this._allowSslVersion = config.allowSslVersion;
    this._attribute = config.attribute;
    this._authAppid = config.authAppid;
    this._basedn = config.basedn;
    this._binddn = config.binddn;
    this._column = config.column;
    this._community = config.community;
    this._compareType = config.compareType;
    this._connectString = config.connectString;
    this._connectType = config.connectType;
    this._counterValue = config.counterValue;
    this._cpu = config.cpu;
    this._cpuWeight = config.cpuWeight;
    this._database = config.database;
    this._destAddr = config.destAddr;
    this._destAddr6 = config.destAddr6;
    this._destAddrType = config.destAddrType;
    this._disk = config.disk;
    this._diskWeight = config.diskWeight;
    this._domainName = config.domainName;
    this._downRetry = config.downRetry;
    this._file = config.file;
    this._filter = config.filter;
    this._folder = config.folder;
    this._hostAddr = config.hostAddr;
    this._hostAddr6 = config.hostAddr6;
    this._hostIp6Addr = config.hostIp6Addr;
    this._hostIpAddr = config.hostIpAddr;
    this._hostname = config.hostname;
    this._httpConnect = config.httpConnect;
    this._httpExtraString = config.httpExtraString;
    this._httpVersion = config.httpVersion;
    this._id = config.id;
    this._interval = config.interval;
    this._localCert = config.localCert;
    this._matchType = config.matchType;
    this._mem = config.mem;
    this._memWeight = config.memWeight;
    this._methodType = config.methodType;
    this._mkey = config.mkey;
    this._mssqlColumn = config.mssqlColumn;
    this._mssqlReceiveString = config.mssqlReceiveString;
    this._mssqlRow = config.mssqlRow;
    this._mssqlSendString = config.mssqlSendString;
    this._mysqlServerType = config.mysqlServerType;
    this._nasIp = config.nasIp;
    this._oid = config.oid;
    this._oracleReceiveString = config.oracleReceiveString;
    this._oracleSendString = config.oracleSendString;
    this._originHost = config.originHost;
    this._originRealm = config.originRealm;
    this._passive = config.passive;
    this._password = config.password;
    this._port = config.port;
    this._productName = config.productName;
    this._pwdType = config.pwdType;
    this._radiusReject = config.radiusReject;
    this._receiveString = config.receiveString;
    this._remoteHost = config.remoteHost;
    this._remotePassword = config.remotePassword;
    this._remotePort = config.remotePort;
    this._remoteUsername = config.remoteUsername;
    this._row = config.row;
    this._rtspDescribeUrl = config.rtspDescribeUrl;
    this._rtspMethodType = config.rtspMethodType;
    this._script = config.script;
    this._secretKey = config.secretKey;
    this._sendString = config.sendString;
    this._serviceName = config.serviceName;
    this._sid = config.sid;
    this._sipRequestType = config.sipRequestType;
    this._sslCiphers = config.sslCiphers;
    this._statusCode = config.statusCode;
    this._stringValue = config.stringValue;
    this._timeout = config.timeout;
    this._type = config.type;
    this._upRetry = config.upRetry;
    this._username = config.username;
    this._valueType = config.valueType;
    this._vdom = config.vdom;
    this._vendorId = config.vendorId;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acct_appid - computed: true, optional: true, required: false
  private _acctAppid?: string; 
  public get acctAppid() {
    return this.getStringAttribute('acct_appid');
  }
  public set acctAppid(value: string) {
    this._acctAppid = value;
  }
  public resetAcctAppid() {
    this._acctAppid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acctAppidInput() {
    return this._acctAppid;
  }

  // addr_type - computed: true, optional: true, required: false
  private _addrType?: string; 
  public get addrType() {
    return this.getStringAttribute('addr_type');
  }
  public set addrType(value: string) {
    this._addrType = value;
  }
  public resetAddrType() {
    this._addrType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrTypeInput() {
    return this._addrType;
  }

  // agent_type - computed: true, optional: true, required: false
  private _agentType?: string; 
  public get agentType() {
    return this.getStringAttribute('agent_type');
  }
  public set agentType(value: string) {
    this._agentType = value;
  }
  public resetAgentType() {
    this._agentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentTypeInput() {
    return this._agentType;
  }

  // allow_ssl_version - computed: true, optional: true, required: false
  private _allowSslVersion?: string; 
  public get allowSslVersion() {
    return this.getStringAttribute('allow_ssl_version');
  }
  public set allowSslVersion(value: string) {
    this._allowSslVersion = value;
  }
  public resetAllowSslVersion() {
    this._allowSslVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSslVersionInput() {
    return this._allowSslVersion;
  }

  // attribute - computed: true, optional: true, required: false
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  public resetAttribute() {
    this._attribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // auth_appid - computed: true, optional: true, required: false
  private _authAppid?: string; 
  public get authAppid() {
    return this.getStringAttribute('auth_appid');
  }
  public set authAppid(value: string) {
    this._authAppid = value;
  }
  public resetAuthAppid() {
    this._authAppid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authAppidInput() {
    return this._authAppid;
  }

  // basedn - computed: true, optional: true, required: false
  private _basedn?: string; 
  public get basedn() {
    return this.getStringAttribute('basedn');
  }
  public set basedn(value: string) {
    this._basedn = value;
  }
  public resetBasedn() {
    this._basedn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basednInput() {
    return this._basedn;
  }

  // binddn - computed: true, optional: true, required: false
  private _binddn?: string; 
  public get binddn() {
    return this.getStringAttribute('binddn');
  }
  public set binddn(value: string) {
    this._binddn = value;
  }
  public resetBinddn() {
    this._binddn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binddnInput() {
    return this._binddn;
  }

  // column - computed: true, optional: true, required: false
  private _column?: string; 
  public get column() {
    return this.getStringAttribute('column');
  }
  public set column(value: string) {
    this._column = value;
  }
  public resetColumn() {
    this._column = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column;
  }

  // community - computed: true, optional: true, required: false
  private _community?: string; 
  public get community() {
    return this.getStringAttribute('community');
  }
  public set community(value: string) {
    this._community = value;
  }
  public resetCommunity() {
    this._community = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communityInput() {
    return this._community;
  }

  // compare_type - computed: true, optional: true, required: false
  private _compareType?: string; 
  public get compareType() {
    return this.getStringAttribute('compare_type');
  }
  public set compareType(value: string) {
    this._compareType = value;
  }
  public resetCompareType() {
    this._compareType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compareTypeInput() {
    return this._compareType;
  }

  // connect_string - computed: true, optional: true, required: false
  private _connectString?: string; 
  public get connectString() {
    return this.getStringAttribute('connect_string');
  }
  public set connectString(value: string) {
    this._connectString = value;
  }
  public resetConnectString() {
    this._connectString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectStringInput() {
    return this._connectString;
  }

  // connect_type - computed: true, optional: true, required: false
  private _connectType?: string; 
  public get connectType() {
    return this.getStringAttribute('connect_type');
  }
  public set connectType(value: string) {
    this._connectType = value;
  }
  public resetConnectType() {
    this._connectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectTypeInput() {
    return this._connectType;
  }

  // counter_value - computed: true, optional: true, required: false
  private _counterValue?: string; 
  public get counterValue() {
    return this.getStringAttribute('counter_value');
  }
  public set counterValue(value: string) {
    this._counterValue = value;
  }
  public resetCounterValue() {
    this._counterValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counterValueInput() {
    return this._counterValue;
  }

  // cpu - computed: true, optional: true, required: false
  private _cpu?: string; 
  public get cpu() {
    return this.getStringAttribute('cpu');
  }
  public set cpu(value: string) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // cpu_weight - computed: true, optional: true, required: false
  private _cpuWeight?: string; 
  public get cpuWeight() {
    return this.getStringAttribute('cpu_weight');
  }
  public set cpuWeight(value: string) {
    this._cpuWeight = value;
  }
  public resetCpuWeight() {
    this._cpuWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuWeightInput() {
    return this._cpuWeight;
  }

  // database - computed: true, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // dest_addr - computed: true, optional: true, required: false
  private _destAddr?: string; 
  public get destAddr() {
    return this.getStringAttribute('dest_addr');
  }
  public set destAddr(value: string) {
    this._destAddr = value;
  }
  public resetDestAddr() {
    this._destAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destAddrInput() {
    return this._destAddr;
  }

  // dest_addr6 - computed: true, optional: true, required: false
  private _destAddr6?: string; 
  public get destAddr6() {
    return this.getStringAttribute('dest_addr6');
  }
  public set destAddr6(value: string) {
    this._destAddr6 = value;
  }
  public resetDestAddr6() {
    this._destAddr6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destAddr6Input() {
    return this._destAddr6;
  }

  // dest_addr_type - computed: true, optional: true, required: false
  private _destAddrType?: string; 
  public get destAddrType() {
    return this.getStringAttribute('dest_addr_type');
  }
  public set destAddrType(value: string) {
    this._destAddrType = value;
  }
  public resetDestAddrType() {
    this._destAddrType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destAddrTypeInput() {
    return this._destAddrType;
  }

  // disk - computed: true, optional: true, required: false
  private _disk?: string; 
  public get disk() {
    return this.getStringAttribute('disk');
  }
  public set disk(value: string) {
    this._disk = value;
  }
  public resetDisk() {
    this._disk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskInput() {
    return this._disk;
  }

  // disk_weight - computed: true, optional: true, required: false
  private _diskWeight?: string; 
  public get diskWeight() {
    return this.getStringAttribute('disk_weight');
  }
  public set diskWeight(value: string) {
    this._diskWeight = value;
  }
  public resetDiskWeight() {
    this._diskWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskWeightInput() {
    return this._diskWeight;
  }

  // domain_name - computed: true, optional: true, required: false
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  public resetDomainName() {
    this._domainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // down_retry - computed: true, optional: true, required: false
  private _downRetry?: string; 
  public get downRetry() {
    return this.getStringAttribute('down_retry');
  }
  public set downRetry(value: string) {
    this._downRetry = value;
  }
  public resetDownRetry() {
    this._downRetry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downRetryInput() {
    return this._downRetry;
  }

  // file - computed: true, optional: true, required: false
  private _file?: string; 
  public get file() {
    return this.getStringAttribute('file');
  }
  public set file(value: string) {
    this._file = value;
  }
  public resetFile() {
    this._file = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file;
  }

  // filter - computed: true, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // folder - computed: true, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // host_addr - computed: true, optional: true, required: false
  private _hostAddr?: string; 
  public get hostAddr() {
    return this.getStringAttribute('host_addr');
  }
  public set hostAddr(value: string) {
    this._hostAddr = value;
  }
  public resetHostAddr() {
    this._hostAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostAddrInput() {
    return this._hostAddr;
  }

  // host_addr6 - computed: true, optional: true, required: false
  private _hostAddr6?: string; 
  public get hostAddr6() {
    return this.getStringAttribute('host_addr6');
  }
  public set hostAddr6(value: string) {
    this._hostAddr6 = value;
  }
  public resetHostAddr6() {
    this._hostAddr6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostAddr6Input() {
    return this._hostAddr6;
  }

  // host_ip6_addr - computed: true, optional: true, required: false
  private _hostIp6Addr?: string; 
  public get hostIp6Addr() {
    return this.getStringAttribute('host_ip6_addr');
  }
  public set hostIp6Addr(value: string) {
    this._hostIp6Addr = value;
  }
  public resetHostIp6Addr() {
    this._hostIp6Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIp6AddrInput() {
    return this._hostIp6Addr;
  }

  // host_ip_addr - computed: true, optional: true, required: false
  private _hostIpAddr?: string; 
  public get hostIpAddr() {
    return this.getStringAttribute('host_ip_addr');
  }
  public set hostIpAddr(value: string) {
    this._hostIpAddr = value;
  }
  public resetHostIpAddr() {
    this._hostIpAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIpAddrInput() {
    return this._hostIpAddr;
  }

  // hostname - computed: true, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // http_connect - computed: true, optional: true, required: false
  private _httpConnect?: string; 
  public get httpConnect() {
    return this.getStringAttribute('http_connect');
  }
  public set httpConnect(value: string) {
    this._httpConnect = value;
  }
  public resetHttpConnect() {
    this._httpConnect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpConnectInput() {
    return this._httpConnect;
  }

  // http_extra_string - computed: true, optional: true, required: false
  private _httpExtraString?: string; 
  public get httpExtraString() {
    return this.getStringAttribute('http_extra_string');
  }
  public set httpExtraString(value: string) {
    this._httpExtraString = value;
  }
  public resetHttpExtraString() {
    this._httpExtraString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpExtraStringInput() {
    return this._httpExtraString;
  }

  // http_version - computed: true, optional: true, required: false
  private _httpVersion?: string; 
  public get httpVersion() {
    return this.getStringAttribute('http_version');
  }
  public set httpVersion(value: string) {
    this._httpVersion = value;
  }
  public resetHttpVersion() {
    this._httpVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpVersionInput() {
    return this._httpVersion;
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

  // interval - computed: true, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // local_cert - computed: true, optional: true, required: false
  private _localCert?: string; 
  public get localCert() {
    return this.getStringAttribute('local_cert');
  }
  public set localCert(value: string) {
    this._localCert = value;
  }
  public resetLocalCert() {
    this._localCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localCertInput() {
    return this._localCert;
  }

  // match_type - computed: true, optional: true, required: false
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  public resetMatchType() {
    this._matchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
  }

  // mem - computed: true, optional: true, required: false
  private _mem?: string; 
  public get mem() {
    return this.getStringAttribute('mem');
  }
  public set mem(value: string) {
    this._mem = value;
  }
  public resetMem() {
    this._mem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memInput() {
    return this._mem;
  }

  // mem_weight - computed: true, optional: true, required: false
  private _memWeight?: string; 
  public get memWeight() {
    return this.getStringAttribute('mem_weight');
  }
  public set memWeight(value: string) {
    this._memWeight = value;
  }
  public resetMemWeight() {
    this._memWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memWeightInput() {
    return this._memWeight;
  }

  // method_type - computed: true, optional: true, required: false
  private _methodType?: string; 
  public get methodType() {
    return this.getStringAttribute('method_type');
  }
  public set methodType(value: string) {
    this._methodType = value;
  }
  public resetMethodType() {
    this._methodType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodTypeInput() {
    return this._methodType;
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

  // mssql_column - computed: true, optional: true, required: false
  private _mssqlColumn?: string; 
  public get mssqlColumn() {
    return this.getStringAttribute('mssql_column');
  }
  public set mssqlColumn(value: string) {
    this._mssqlColumn = value;
  }
  public resetMssqlColumn() {
    this._mssqlColumn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mssqlColumnInput() {
    return this._mssqlColumn;
  }

  // mssql_receive_string - computed: true, optional: true, required: false
  private _mssqlReceiveString?: string; 
  public get mssqlReceiveString() {
    return this.getStringAttribute('mssql_receive_string');
  }
  public set mssqlReceiveString(value: string) {
    this._mssqlReceiveString = value;
  }
  public resetMssqlReceiveString() {
    this._mssqlReceiveString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mssqlReceiveStringInput() {
    return this._mssqlReceiveString;
  }

  // mssql_row - computed: true, optional: true, required: false
  private _mssqlRow?: string; 
  public get mssqlRow() {
    return this.getStringAttribute('mssql_row');
  }
  public set mssqlRow(value: string) {
    this._mssqlRow = value;
  }
  public resetMssqlRow() {
    this._mssqlRow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mssqlRowInput() {
    return this._mssqlRow;
  }

  // mssql_send_string - computed: true, optional: true, required: false
  private _mssqlSendString?: string; 
  public get mssqlSendString() {
    return this.getStringAttribute('mssql_send_string');
  }
  public set mssqlSendString(value: string) {
    this._mssqlSendString = value;
  }
  public resetMssqlSendString() {
    this._mssqlSendString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mssqlSendStringInput() {
    return this._mssqlSendString;
  }

  // mysql_server_type - computed: true, optional: true, required: false
  private _mysqlServerType?: string; 
  public get mysqlServerType() {
    return this.getStringAttribute('mysql_server_type');
  }
  public set mysqlServerType(value: string) {
    this._mysqlServerType = value;
  }
  public resetMysqlServerType() {
    this._mysqlServerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlServerTypeInput() {
    return this._mysqlServerType;
  }

  // nas_ip - computed: true, optional: true, required: false
  private _nasIp?: string; 
  public get nasIp() {
    return this.getStringAttribute('nas_ip');
  }
  public set nasIp(value: string) {
    this._nasIp = value;
  }
  public resetNasIp() {
    this._nasIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nasIpInput() {
    return this._nasIp;
  }

  // oid - computed: true, optional: true, required: false
  private _oid?: string; 
  public get oid() {
    return this.getStringAttribute('oid');
  }
  public set oid(value: string) {
    this._oid = value;
  }
  public resetOid() {
    this._oid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidInput() {
    return this._oid;
  }

  // oracle_receive_string - computed: true, optional: true, required: false
  private _oracleReceiveString?: string; 
  public get oracleReceiveString() {
    return this.getStringAttribute('oracle_receive_string');
  }
  public set oracleReceiveString(value: string) {
    this._oracleReceiveString = value;
  }
  public resetOracleReceiveString() {
    this._oracleReceiveString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleReceiveStringInput() {
    return this._oracleReceiveString;
  }

  // oracle_send_string - computed: true, optional: true, required: false
  private _oracleSendString?: string; 
  public get oracleSendString() {
    return this.getStringAttribute('oracle_send_string');
  }
  public set oracleSendString(value: string) {
    this._oracleSendString = value;
  }
  public resetOracleSendString() {
    this._oracleSendString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleSendStringInput() {
    return this._oracleSendString;
  }

  // origin_host - computed: true, optional: true, required: false
  private _originHost?: string; 
  public get originHost() {
    return this.getStringAttribute('origin_host');
  }
  public set originHost(value: string) {
    this._originHost = value;
  }
  public resetOriginHost() {
    this._originHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originHostInput() {
    return this._originHost;
  }

  // origin_realm - computed: true, optional: true, required: false
  private _originRealm?: string; 
  public get originRealm() {
    return this.getStringAttribute('origin_realm');
  }
  public set originRealm(value: string) {
    this._originRealm = value;
  }
  public resetOriginRealm() {
    this._originRealm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originRealmInput() {
    return this._originRealm;
  }

  // passive - computed: true, optional: true, required: false
  private _passive?: string; 
  public get passive() {
    return this.getStringAttribute('passive');
  }
  public set passive(value: string) {
    this._passive = value;
  }
  public resetPassive() {
    this._passive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveInput() {
    return this._passive;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
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

  // product_name - computed: true, optional: true, required: false
  private _productName?: string; 
  public get productName() {
    return this.getStringAttribute('product_name');
  }
  public set productName(value: string) {
    this._productName = value;
  }
  public resetProductName() {
    this._productName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productNameInput() {
    return this._productName;
  }

  // pwd_type - computed: true, optional: true, required: false
  private _pwdType?: string; 
  public get pwdType() {
    return this.getStringAttribute('pwd_type');
  }
  public set pwdType(value: string) {
    this._pwdType = value;
  }
  public resetPwdType() {
    this._pwdType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pwdTypeInput() {
    return this._pwdType;
  }

  // radius_reject - computed: true, optional: true, required: false
  private _radiusReject?: string; 
  public get radiusReject() {
    return this.getStringAttribute('radius_reject');
  }
  public set radiusReject(value: string) {
    this._radiusReject = value;
  }
  public resetRadiusReject() {
    this._radiusReject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusRejectInput() {
    return this._radiusReject;
  }

  // receive_string - computed: true, optional: true, required: false
  private _receiveString?: string; 
  public get receiveString() {
    return this.getStringAttribute('receive_string');
  }
  public set receiveString(value: string) {
    this._receiveString = value;
  }
  public resetReceiveString() {
    this._receiveString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiveStringInput() {
    return this._receiveString;
  }

  // remote_host - computed: true, optional: true, required: false
  private _remoteHost?: string; 
  public get remoteHost() {
    return this.getStringAttribute('remote_host');
  }
  public set remoteHost(value: string) {
    this._remoteHost = value;
  }
  public resetRemoteHost() {
    this._remoteHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteHostInput() {
    return this._remoteHost;
  }

  // remote_password - computed: true, optional: true, required: false
  private _remotePassword?: string; 
  public get remotePassword() {
    return this.getStringAttribute('remote_password');
  }
  public set remotePassword(value: string) {
    this._remotePassword = value;
  }
  public resetRemotePassword() {
    this._remotePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remotePasswordInput() {
    return this._remotePassword;
  }

  // remote_port - computed: true, optional: true, required: false
  private _remotePort?: string; 
  public get remotePort() {
    return this.getStringAttribute('remote_port');
  }
  public set remotePort(value: string) {
    this._remotePort = value;
  }
  public resetRemotePort() {
    this._remotePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remotePortInput() {
    return this._remotePort;
  }

  // remote_username - computed: true, optional: true, required: false
  private _remoteUsername?: string; 
  public get remoteUsername() {
    return this.getStringAttribute('remote_username');
  }
  public set remoteUsername(value: string) {
    this._remoteUsername = value;
  }
  public resetRemoteUsername() {
    this._remoteUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteUsernameInput() {
    return this._remoteUsername;
  }

  // row - computed: true, optional: true, required: false
  private _row?: string; 
  public get row() {
    return this.getStringAttribute('row');
  }
  public set row(value: string) {
    this._row = value;
  }
  public resetRow() {
    this._row = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rowInput() {
    return this._row;
  }

  // rtsp_describe_url - computed: true, optional: true, required: false
  private _rtspDescribeUrl?: string; 
  public get rtspDescribeUrl() {
    return this.getStringAttribute('rtsp_describe_url');
  }
  public set rtspDescribeUrl(value: string) {
    this._rtspDescribeUrl = value;
  }
  public resetRtspDescribeUrl() {
    this._rtspDescribeUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtspDescribeUrlInput() {
    return this._rtspDescribeUrl;
  }

  // rtsp_method_type - computed: true, optional: true, required: false
  private _rtspMethodType?: string; 
  public get rtspMethodType() {
    return this.getStringAttribute('rtsp_method_type');
  }
  public set rtspMethodType(value: string) {
    this._rtspMethodType = value;
  }
  public resetRtspMethodType() {
    this._rtspMethodType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtspMethodTypeInput() {
    return this._rtspMethodType;
  }

  // script - computed: true, optional: true, required: false
  private _script?: string; 
  public get script() {
    return this.getStringAttribute('script');
  }
  public set script(value: string) {
    this._script = value;
  }
  public resetScript() {
    this._script = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptInput() {
    return this._script;
  }

  // secret_key - computed: true, optional: true, required: false
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  public resetSecretKey() {
    this._secretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }

  // send_string - computed: true, optional: true, required: false
  private _sendString?: string; 
  public get sendString() {
    return this.getStringAttribute('send_string');
  }
  public set sendString(value: string) {
    this._sendString = value;
  }
  public resetSendString() {
    this._sendString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendStringInput() {
    return this._sendString;
  }

  // service_name - computed: true, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // sid - computed: true, optional: true, required: false
  private _sid?: string; 
  public get sid() {
    return this.getStringAttribute('sid');
  }
  public set sid(value: string) {
    this._sid = value;
  }
  public resetSid() {
    this._sid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sidInput() {
    return this._sid;
  }

  // sip_request_type - computed: true, optional: true, required: false
  private _sipRequestType?: string; 
  public get sipRequestType() {
    return this.getStringAttribute('sip_request_type');
  }
  public set sipRequestType(value: string) {
    this._sipRequestType = value;
  }
  public resetSipRequestType() {
    this._sipRequestType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipRequestTypeInput() {
    return this._sipRequestType;
  }

  // ssl_ciphers - computed: true, optional: true, required: false
  private _sslCiphers?: string; 
  public get sslCiphers() {
    return this.getStringAttribute('ssl_ciphers');
  }
  public set sslCiphers(value: string) {
    this._sslCiphers = value;
  }
  public resetSslCiphers() {
    this._sslCiphers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCiphersInput() {
    return this._sslCiphers;
  }

  // status_code - computed: true, optional: true, required: false
  private _statusCode?: string; 
  public get statusCode() {
    return this.getStringAttribute('status_code');
  }
  public set statusCode(value: string) {
    this._statusCode = value;
  }
  public resetStatusCode() {
    this._statusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeInput() {
    return this._statusCode;
  }

  // string_value - computed: true, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
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

  // up_retry - computed: true, optional: true, required: false
  private _upRetry?: string; 
  public get upRetry() {
    return this.getStringAttribute('up_retry');
  }
  public set upRetry(value: string) {
    this._upRetry = value;
  }
  public resetUpRetry() {
    this._upRetry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upRetryInput() {
    return this._upRetry;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // value_type - computed: true, optional: true, required: false
  private _valueType?: string; 
  public get valueType() {
    return this.getStringAttribute('value_type');
  }
  public set valueType(value: string) {
    this._valueType = value;
  }
  public resetValueType() {
    this._valueType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueTypeInput() {
    return this._valueType;
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

  // vendor_id - computed: true, optional: true, required: false
  private _vendorId?: string; 
  public get vendorId() {
    return this.getStringAttribute('vendor_id');
  }
  public set vendorId(value: string) {
    this._vendorId = value;
  }
  public resetVendorId() {
    this._vendorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorIdInput() {
    return this._vendorId;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acct_appid: cdktf.stringToTerraform(this._acctAppid),
      addr_type: cdktf.stringToTerraform(this._addrType),
      agent_type: cdktf.stringToTerraform(this._agentType),
      allow_ssl_version: cdktf.stringToTerraform(this._allowSslVersion),
      attribute: cdktf.stringToTerraform(this._attribute),
      auth_appid: cdktf.stringToTerraform(this._authAppid),
      basedn: cdktf.stringToTerraform(this._basedn),
      binddn: cdktf.stringToTerraform(this._binddn),
      column: cdktf.stringToTerraform(this._column),
      community: cdktf.stringToTerraform(this._community),
      compare_type: cdktf.stringToTerraform(this._compareType),
      connect_string: cdktf.stringToTerraform(this._connectString),
      connect_type: cdktf.stringToTerraform(this._connectType),
      counter_value: cdktf.stringToTerraform(this._counterValue),
      cpu: cdktf.stringToTerraform(this._cpu),
      cpu_weight: cdktf.stringToTerraform(this._cpuWeight),
      database: cdktf.stringToTerraform(this._database),
      dest_addr: cdktf.stringToTerraform(this._destAddr),
      dest_addr6: cdktf.stringToTerraform(this._destAddr6),
      dest_addr_type: cdktf.stringToTerraform(this._destAddrType),
      disk: cdktf.stringToTerraform(this._disk),
      disk_weight: cdktf.stringToTerraform(this._diskWeight),
      domain_name: cdktf.stringToTerraform(this._domainName),
      down_retry: cdktf.stringToTerraform(this._downRetry),
      file: cdktf.stringToTerraform(this._file),
      filter: cdktf.stringToTerraform(this._filter),
      folder: cdktf.stringToTerraform(this._folder),
      host_addr: cdktf.stringToTerraform(this._hostAddr),
      host_addr6: cdktf.stringToTerraform(this._hostAddr6),
      host_ip6_addr: cdktf.stringToTerraform(this._hostIp6Addr),
      host_ip_addr: cdktf.stringToTerraform(this._hostIpAddr),
      hostname: cdktf.stringToTerraform(this._hostname),
      http_connect: cdktf.stringToTerraform(this._httpConnect),
      http_extra_string: cdktf.stringToTerraform(this._httpExtraString),
      http_version: cdktf.stringToTerraform(this._httpVersion),
      id: cdktf.stringToTerraform(this._id),
      interval: cdktf.stringToTerraform(this._interval),
      local_cert: cdktf.stringToTerraform(this._localCert),
      match_type: cdktf.stringToTerraform(this._matchType),
      mem: cdktf.stringToTerraform(this._mem),
      mem_weight: cdktf.stringToTerraform(this._memWeight),
      method_type: cdktf.stringToTerraform(this._methodType),
      mkey: cdktf.stringToTerraform(this._mkey),
      mssql_column: cdktf.stringToTerraform(this._mssqlColumn),
      mssql_receive_string: cdktf.stringToTerraform(this._mssqlReceiveString),
      mssql_row: cdktf.stringToTerraform(this._mssqlRow),
      mssql_send_string: cdktf.stringToTerraform(this._mssqlSendString),
      mysql_server_type: cdktf.stringToTerraform(this._mysqlServerType),
      nas_ip: cdktf.stringToTerraform(this._nasIp),
      oid: cdktf.stringToTerraform(this._oid),
      oracle_receive_string: cdktf.stringToTerraform(this._oracleReceiveString),
      oracle_send_string: cdktf.stringToTerraform(this._oracleSendString),
      origin_host: cdktf.stringToTerraform(this._originHost),
      origin_realm: cdktf.stringToTerraform(this._originRealm),
      passive: cdktf.stringToTerraform(this._passive),
      password: cdktf.stringToTerraform(this._password),
      port: cdktf.stringToTerraform(this._port),
      product_name: cdktf.stringToTerraform(this._productName),
      pwd_type: cdktf.stringToTerraform(this._pwdType),
      radius_reject: cdktf.stringToTerraform(this._radiusReject),
      receive_string: cdktf.stringToTerraform(this._receiveString),
      remote_host: cdktf.stringToTerraform(this._remoteHost),
      remote_password: cdktf.stringToTerraform(this._remotePassword),
      remote_port: cdktf.stringToTerraform(this._remotePort),
      remote_username: cdktf.stringToTerraform(this._remoteUsername),
      row: cdktf.stringToTerraform(this._row),
      rtsp_describe_url: cdktf.stringToTerraform(this._rtspDescribeUrl),
      rtsp_method_type: cdktf.stringToTerraform(this._rtspMethodType),
      script: cdktf.stringToTerraform(this._script),
      secret_key: cdktf.stringToTerraform(this._secretKey),
      send_string: cdktf.stringToTerraform(this._sendString),
      service_name: cdktf.stringToTerraform(this._serviceName),
      sid: cdktf.stringToTerraform(this._sid),
      sip_request_type: cdktf.stringToTerraform(this._sipRequestType),
      ssl_ciphers: cdktf.stringToTerraform(this._sslCiphers),
      status_code: cdktf.stringToTerraform(this._statusCode),
      string_value: cdktf.stringToTerraform(this._stringValue),
      timeout: cdktf.stringToTerraform(this._timeout),
      type: cdktf.stringToTerraform(this._type),
      up_retry: cdktf.stringToTerraform(this._upRetry),
      username: cdktf.stringToTerraform(this._username),
      value_type: cdktf.stringToTerraform(this._valueType),
      vdom: cdktf.stringToTerraform(this._vdom),
      vendor_id: cdktf.stringToTerraform(this._vendorId),
      version: cdktf.stringToTerraform(this._version),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acct_appid: {
        value: cdktf.stringToHclTerraform(this._acctAppid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      addr_type: {
        value: cdktf.stringToHclTerraform(this._addrType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      agent_type: {
        value: cdktf.stringToHclTerraform(this._agentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_ssl_version: {
        value: cdktf.stringToHclTerraform(this._allowSslVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute: {
        value: cdktf.stringToHclTerraform(this._attribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_appid: {
        value: cdktf.stringToHclTerraform(this._authAppid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      basedn: {
        value: cdktf.stringToHclTerraform(this._basedn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      binddn: {
        value: cdktf.stringToHclTerraform(this._binddn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      column: {
        value: cdktf.stringToHclTerraform(this._column),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      community: {
        value: cdktf.stringToHclTerraform(this._community),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compare_type: {
        value: cdktf.stringToHclTerraform(this._compareType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connect_string: {
        value: cdktf.stringToHclTerraform(this._connectString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connect_type: {
        value: cdktf.stringToHclTerraform(this._connectType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      counter_value: {
        value: cdktf.stringToHclTerraform(this._counterValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cpu: {
        value: cdktf.stringToHclTerraform(this._cpu),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cpu_weight: {
        value: cdktf.stringToHclTerraform(this._cpuWeight),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database: {
        value: cdktf.stringToHclTerraform(this._database),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dest_addr: {
        value: cdktf.stringToHclTerraform(this._destAddr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dest_addr6: {
        value: cdktf.stringToHclTerraform(this._destAddr6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dest_addr_type: {
        value: cdktf.stringToHclTerraform(this._destAddrType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk: {
        value: cdktf.stringToHclTerraform(this._disk),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk_weight: {
        value: cdktf.stringToHclTerraform(this._diskWeight),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_name: {
        value: cdktf.stringToHclTerraform(this._domainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      down_retry: {
        value: cdktf.stringToHclTerraform(this._downRetry),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file: {
        value: cdktf.stringToHclTerraform(this._file),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_addr: {
        value: cdktf.stringToHclTerraform(this._hostAddr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_addr6: {
        value: cdktf.stringToHclTerraform(this._hostAddr6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_ip6_addr: {
        value: cdktf.stringToHclTerraform(this._hostIp6Addr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_ip_addr: {
        value: cdktf.stringToHclTerraform(this._hostIpAddr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_connect: {
        value: cdktf.stringToHclTerraform(this._httpConnect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_extra_string: {
        value: cdktf.stringToHclTerraform(this._httpExtraString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_version: {
        value: cdktf.stringToHclTerraform(this._httpVersion),
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
      interval: {
        value: cdktf.stringToHclTerraform(this._interval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_cert: {
        value: cdktf.stringToHclTerraform(this._localCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_type: {
        value: cdktf.stringToHclTerraform(this._matchType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mem: {
        value: cdktf.stringToHclTerraform(this._mem),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mem_weight: {
        value: cdktf.stringToHclTerraform(this._memWeight),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      method_type: {
        value: cdktf.stringToHclTerraform(this._methodType),
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
      mssql_column: {
        value: cdktf.stringToHclTerraform(this._mssqlColumn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mssql_receive_string: {
        value: cdktf.stringToHclTerraform(this._mssqlReceiveString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mssql_row: {
        value: cdktf.stringToHclTerraform(this._mssqlRow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mssql_send_string: {
        value: cdktf.stringToHclTerraform(this._mssqlSendString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mysql_server_type: {
        value: cdktf.stringToHclTerraform(this._mysqlServerType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nas_ip: {
        value: cdktf.stringToHclTerraform(this._nasIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oid: {
        value: cdktf.stringToHclTerraform(this._oid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oracle_receive_string: {
        value: cdktf.stringToHclTerraform(this._oracleReceiveString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oracle_send_string: {
        value: cdktf.stringToHclTerraform(this._oracleSendString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      origin_host: {
        value: cdktf.stringToHclTerraform(this._originHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      origin_realm: {
        value: cdktf.stringToHclTerraform(this._originRealm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      passive: {
        value: cdktf.stringToHclTerraform(this._passive),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
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
      product_name: {
        value: cdktf.stringToHclTerraform(this._productName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pwd_type: {
        value: cdktf.stringToHclTerraform(this._pwdType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radius_reject: {
        value: cdktf.stringToHclTerraform(this._radiusReject),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      receive_string: {
        value: cdktf.stringToHclTerraform(this._receiveString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_host: {
        value: cdktf.stringToHclTerraform(this._remoteHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_password: {
        value: cdktf.stringToHclTerraform(this._remotePassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_port: {
        value: cdktf.stringToHclTerraform(this._remotePort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_username: {
        value: cdktf.stringToHclTerraform(this._remoteUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      row: {
        value: cdktf.stringToHclTerraform(this._row),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rtsp_describe_url: {
        value: cdktf.stringToHclTerraform(this._rtspDescribeUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rtsp_method_type: {
        value: cdktf.stringToHclTerraform(this._rtspMethodType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      script: {
        value: cdktf.stringToHclTerraform(this._script),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_key: {
        value: cdktf.stringToHclTerraform(this._secretKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      send_string: {
        value: cdktf.stringToHclTerraform(this._sendString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sid: {
        value: cdktf.stringToHclTerraform(this._sid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sip_request_type: {
        value: cdktf.stringToHclTerraform(this._sipRequestType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_ciphers: {
        value: cdktf.stringToHclTerraform(this._sslCiphers),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status_code: {
        value: cdktf.stringToHclTerraform(this._statusCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      string_value: {
        value: cdktf.stringToHclTerraform(this._stringValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout: {
        value: cdktf.stringToHclTerraform(this._timeout),
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
      up_retry: {
        value: cdktf.stringToHclTerraform(this._upRetry),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      value_type: {
        value: cdktf.stringToHclTerraform(this._valueType),
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
      vendor_id: {
        value: cdktf.stringToHclTerraform(this._vendorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
