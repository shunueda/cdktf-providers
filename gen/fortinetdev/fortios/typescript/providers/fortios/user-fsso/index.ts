// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_fsso
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserFssoConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_fsso#group_poll_interval UserFsso#group_poll_interval}
  */
  readonly groupPollInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_fsso#id UserFsso#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_fsso#interface UserFsso#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_fsso#interface_select_method UserFsso#interface_select_method}
  */
  readonly interfaceSelectMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_fsso#ldap_poll UserFsso#ldap_poll}
  */
  readonly ldapPoll?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_fsso#ldap_poll_filter UserFsso#ldap_poll_filter}
  */
  readonly ldapPollFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_fsso#ldap_poll_interval UserFsso#ldap_poll_interval}
  */
  readonly ldapPollInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_fsso#ldap_server UserFsso#ldap_server}
  */
  readonly ldapServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_fsso#logon_timeout UserFsso#logon_timeout}
  */
  readonly logonTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_fsso#name UserFsso#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_fsso#password UserFsso#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_fsso#password2 UserFsso#password2}
  */
  readonly password2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_fsso#password3 UserFsso#password3}
  */
  readonly password3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_fsso#password4 UserFsso#password4}
  */
  readonly password4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_fsso#password5 UserFsso#password5}
  */
  readonly password5?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_fsso#port UserFsso#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_fsso#port2 UserFsso#port2}
  */
  readonly port2?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_fsso#port3 UserFsso#port3}
  */
  readonly port3?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_fsso#port4 UserFsso#port4}
  */
  readonly port4?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_fsso#port5 UserFsso#port5}
  */
  readonly port5?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_fsso#server UserFsso#server}
  */
  readonly server: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_fsso#server2 UserFsso#server2}
  */
  readonly server2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_fsso#server3 UserFsso#server3}
  */
  readonly server3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_fsso#server4 UserFsso#server4}
  */
  readonly server4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_fsso#server5 UserFsso#server5}
  */
  readonly server5?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_fsso#sni UserFsso#sni}
  */
  readonly sni?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_fsso#source_ip UserFsso#source_ip}
  */
  readonly sourceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_fsso#source_ip6 UserFsso#source_ip6}
  */
  readonly sourceIp6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_fsso#ssl UserFsso#ssl}
  */
  readonly ssl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_fsso#ssl_server_host_ip_check UserFsso#ssl_server_host_ip_check}
  */
  readonly sslServerHostIpCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_fsso#ssl_trusted_cert UserFsso#ssl_trusted_cert}
  */
  readonly sslTrustedCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_fsso#type UserFsso#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_fsso#user_info_server UserFsso#user_info_server}
  */
  readonly userInfoServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_fsso#vdomparam UserFsso#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_fsso#vrf_select UserFsso#vrf_select}
  */
  readonly vrfSelect?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_fsso fortios_user_fsso}
*/
export class UserFsso extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_user_fsso";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserFsso resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserFsso to import
  * @param importFromId The id of the existing UserFsso that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_fsso#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserFsso to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_user_fsso", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_fsso fortios_user_fsso} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserFssoConfig
  */
  public constructor(scope: Construct, id: string, config: UserFssoConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_user_fsso',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0',
        providerVersionConstraint: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._groupPollInterval = config.groupPollInterval;
    this._id = config.id;
    this._interface = config.interface;
    this._interfaceSelectMethod = config.interfaceSelectMethod;
    this._ldapPoll = config.ldapPoll;
    this._ldapPollFilter = config.ldapPollFilter;
    this._ldapPollInterval = config.ldapPollInterval;
    this._ldapServer = config.ldapServer;
    this._logonTimeout = config.logonTimeout;
    this._name = config.name;
    this._password = config.password;
    this._password2 = config.password2;
    this._password3 = config.password3;
    this._password4 = config.password4;
    this._password5 = config.password5;
    this._port = config.port;
    this._port2 = config.port2;
    this._port3 = config.port3;
    this._port4 = config.port4;
    this._port5 = config.port5;
    this._server = config.server;
    this._server2 = config.server2;
    this._server3 = config.server3;
    this._server4 = config.server4;
    this._server5 = config.server5;
    this._sni = config.sni;
    this._sourceIp = config.sourceIp;
    this._sourceIp6 = config.sourceIp6;
    this._ssl = config.ssl;
    this._sslServerHostIpCheck = config.sslServerHostIpCheck;
    this._sslTrustedCert = config.sslTrustedCert;
    this._type = config.type;
    this._userInfoServer = config.userInfoServer;
    this._vdomparam = config.vdomparam;
    this._vrfSelect = config.vrfSelect;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group_poll_interval - computed: false, optional: true, required: false
  private _groupPollInterval?: number; 
  public get groupPollInterval() {
    return this.getNumberAttribute('group_poll_interval');
  }
  public set groupPollInterval(value: number) {
    this._groupPollInterval = value;
  }
  public resetGroupPollInterval() {
    this._groupPollInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupPollIntervalInput() {
    return this._groupPollInterval;
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

  // interface - computed: false, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // interface_select_method - computed: true, optional: true, required: false
  private _interfaceSelectMethod?: string; 
  public get interfaceSelectMethod() {
    return this.getStringAttribute('interface_select_method');
  }
  public set interfaceSelectMethod(value: string) {
    this._interfaceSelectMethod = value;
  }
  public resetInterfaceSelectMethod() {
    this._interfaceSelectMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceSelectMethodInput() {
    return this._interfaceSelectMethod;
  }

  // ldap_poll - computed: true, optional: true, required: false
  private _ldapPoll?: string; 
  public get ldapPoll() {
    return this.getStringAttribute('ldap_poll');
  }
  public set ldapPoll(value: string) {
    this._ldapPoll = value;
  }
  public resetLdapPoll() {
    this._ldapPoll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapPollInput() {
    return this._ldapPoll;
  }

  // ldap_poll_filter - computed: true, optional: true, required: false
  private _ldapPollFilter?: string; 
  public get ldapPollFilter() {
    return this.getStringAttribute('ldap_poll_filter');
  }
  public set ldapPollFilter(value: string) {
    this._ldapPollFilter = value;
  }
  public resetLdapPollFilter() {
    this._ldapPollFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapPollFilterInput() {
    return this._ldapPollFilter;
  }

  // ldap_poll_interval - computed: true, optional: true, required: false
  private _ldapPollInterval?: number; 
  public get ldapPollInterval() {
    return this.getNumberAttribute('ldap_poll_interval');
  }
  public set ldapPollInterval(value: number) {
    this._ldapPollInterval = value;
  }
  public resetLdapPollInterval() {
    this._ldapPollInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapPollIntervalInput() {
    return this._ldapPollInterval;
  }

  // ldap_server - computed: false, optional: true, required: false
  private _ldapServer?: string; 
  public get ldapServer() {
    return this.getStringAttribute('ldap_server');
  }
  public set ldapServer(value: string) {
    this._ldapServer = value;
  }
  public resetLdapServer() {
    this._ldapServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapServerInput() {
    return this._ldapServer;
  }

  // logon_timeout - computed: true, optional: true, required: false
  private _logonTimeout?: number; 
  public get logonTimeout() {
    return this.getNumberAttribute('logon_timeout');
  }
  public set logonTimeout(value: number) {
    this._logonTimeout = value;
  }
  public resetLogonTimeout() {
    this._logonTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logonTimeoutInput() {
    return this._logonTimeout;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // password - computed: false, optional: true, required: false
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

  // password2 - computed: false, optional: true, required: false
  private _password2?: string; 
  public get password2() {
    return this.getStringAttribute('password2');
  }
  public set password2(value: string) {
    this._password2 = value;
  }
  public resetPassword2() {
    this._password2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get password2Input() {
    return this._password2;
  }

  // password3 - computed: false, optional: true, required: false
  private _password3?: string; 
  public get password3() {
    return this.getStringAttribute('password3');
  }
  public set password3(value: string) {
    this._password3 = value;
  }
  public resetPassword3() {
    this._password3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get password3Input() {
    return this._password3;
  }

  // password4 - computed: false, optional: true, required: false
  private _password4?: string; 
  public get password4() {
    return this.getStringAttribute('password4');
  }
  public set password4(value: string) {
    this._password4 = value;
  }
  public resetPassword4() {
    this._password4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get password4Input() {
    return this._password4;
  }

  // password5 - computed: false, optional: true, required: false
  private _password5?: string; 
  public get password5() {
    return this.getStringAttribute('password5');
  }
  public set password5(value: string) {
    this._password5 = value;
  }
  public resetPassword5() {
    this._password5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get password5Input() {
    return this._password5;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // port2 - computed: true, optional: true, required: false
  private _port2?: number; 
  public get port2() {
    return this.getNumberAttribute('port2');
  }
  public set port2(value: number) {
    this._port2 = value;
  }
  public resetPort2() {
    this._port2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get port2Input() {
    return this._port2;
  }

  // port3 - computed: true, optional: true, required: false
  private _port3?: number; 
  public get port3() {
    return this.getNumberAttribute('port3');
  }
  public set port3(value: number) {
    this._port3 = value;
  }
  public resetPort3() {
    this._port3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get port3Input() {
    return this._port3;
  }

  // port4 - computed: true, optional: true, required: false
  private _port4?: number; 
  public get port4() {
    return this.getNumberAttribute('port4');
  }
  public set port4(value: number) {
    this._port4 = value;
  }
  public resetPort4() {
    this._port4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get port4Input() {
    return this._port4;
  }

  // port5 - computed: true, optional: true, required: false
  private _port5?: number; 
  public get port5() {
    return this.getNumberAttribute('port5');
  }
  public set port5(value: number) {
    this._port5 = value;
  }
  public resetPort5() {
    this._port5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get port5Input() {
    return this._port5;
  }

  // server - computed: false, optional: false, required: true
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // server2 - computed: false, optional: true, required: false
  private _server2?: string; 
  public get server2() {
    return this.getStringAttribute('server2');
  }
  public set server2(value: string) {
    this._server2 = value;
  }
  public resetServer2() {
    this._server2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get server2Input() {
    return this._server2;
  }

  // server3 - computed: false, optional: true, required: false
  private _server3?: string; 
  public get server3() {
    return this.getStringAttribute('server3');
  }
  public set server3(value: string) {
    this._server3 = value;
  }
  public resetServer3() {
    this._server3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get server3Input() {
    return this._server3;
  }

  // server4 - computed: false, optional: true, required: false
  private _server4?: string; 
  public get server4() {
    return this.getStringAttribute('server4');
  }
  public set server4(value: string) {
    this._server4 = value;
  }
  public resetServer4() {
    this._server4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get server4Input() {
    return this._server4;
  }

  // server5 - computed: false, optional: true, required: false
  private _server5?: string; 
  public get server5() {
    return this.getStringAttribute('server5');
  }
  public set server5(value: string) {
    this._server5 = value;
  }
  public resetServer5() {
    this._server5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get server5Input() {
    return this._server5;
  }

  // sni - computed: false, optional: true, required: false
  private _sni?: string; 
  public get sni() {
    return this.getStringAttribute('sni');
  }
  public set sni(value: string) {
    this._sni = value;
  }
  public resetSni() {
    this._sni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniInput() {
    return this._sni;
  }

  // source_ip - computed: true, optional: true, required: false
  private _sourceIp?: string; 
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }
  public set sourceIp(value: string) {
    this._sourceIp = value;
  }
  public resetSourceIp() {
    this._sourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp;
  }

  // source_ip6 - computed: true, optional: true, required: false
  private _sourceIp6?: string; 
  public get sourceIp6() {
    return this.getStringAttribute('source_ip6');
  }
  public set sourceIp6(value: string) {
    this._sourceIp6 = value;
  }
  public resetSourceIp6() {
    this._sourceIp6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIp6Input() {
    return this._sourceIp6;
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

  // ssl_server_host_ip_check - computed: true, optional: true, required: false
  private _sslServerHostIpCheck?: string; 
  public get sslServerHostIpCheck() {
    return this.getStringAttribute('ssl_server_host_ip_check');
  }
  public set sslServerHostIpCheck(value: string) {
    this._sslServerHostIpCheck = value;
  }
  public resetSslServerHostIpCheck() {
    this._sslServerHostIpCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslServerHostIpCheckInput() {
    return this._sslServerHostIpCheck;
  }

  // ssl_trusted_cert - computed: false, optional: true, required: false
  private _sslTrustedCert?: string; 
  public get sslTrustedCert() {
    return this.getStringAttribute('ssl_trusted_cert');
  }
  public set sslTrustedCert(value: string) {
    this._sslTrustedCert = value;
  }
  public resetSslTrustedCert() {
    this._sslTrustedCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslTrustedCertInput() {
    return this._sslTrustedCert;
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

  // user_info_server - computed: false, optional: true, required: false
  private _userInfoServer?: string; 
  public get userInfoServer() {
    return this.getStringAttribute('user_info_server');
  }
  public set userInfoServer(value: string) {
    this._userInfoServer = value;
  }
  public resetUserInfoServer() {
    this._userInfoServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInfoServerInput() {
    return this._userInfoServer;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // vrf_select - computed: false, optional: true, required: false
  private _vrfSelect?: number; 
  public get vrfSelect() {
    return this.getNumberAttribute('vrf_select');
  }
  public set vrfSelect(value: number) {
    this._vrfSelect = value;
  }
  public resetVrfSelect() {
    this._vrfSelect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfSelectInput() {
    return this._vrfSelect;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group_poll_interval: cdktf.numberToTerraform(this._groupPollInterval),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.stringToTerraform(this._interface),
      interface_select_method: cdktf.stringToTerraform(this._interfaceSelectMethod),
      ldap_poll: cdktf.stringToTerraform(this._ldapPoll),
      ldap_poll_filter: cdktf.stringToTerraform(this._ldapPollFilter),
      ldap_poll_interval: cdktf.numberToTerraform(this._ldapPollInterval),
      ldap_server: cdktf.stringToTerraform(this._ldapServer),
      logon_timeout: cdktf.numberToTerraform(this._logonTimeout),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      password2: cdktf.stringToTerraform(this._password2),
      password3: cdktf.stringToTerraform(this._password3),
      password4: cdktf.stringToTerraform(this._password4),
      password5: cdktf.stringToTerraform(this._password5),
      port: cdktf.numberToTerraform(this._port),
      port2: cdktf.numberToTerraform(this._port2),
      port3: cdktf.numberToTerraform(this._port3),
      port4: cdktf.numberToTerraform(this._port4),
      port5: cdktf.numberToTerraform(this._port5),
      server: cdktf.stringToTerraform(this._server),
      server2: cdktf.stringToTerraform(this._server2),
      server3: cdktf.stringToTerraform(this._server3),
      server4: cdktf.stringToTerraform(this._server4),
      server5: cdktf.stringToTerraform(this._server5),
      sni: cdktf.stringToTerraform(this._sni),
      source_ip: cdktf.stringToTerraform(this._sourceIp),
      source_ip6: cdktf.stringToTerraform(this._sourceIp6),
      ssl: cdktf.stringToTerraform(this._ssl),
      ssl_server_host_ip_check: cdktf.stringToTerraform(this._sslServerHostIpCheck),
      ssl_trusted_cert: cdktf.stringToTerraform(this._sslTrustedCert),
      type: cdktf.stringToTerraform(this._type),
      user_info_server: cdktf.stringToTerraform(this._userInfoServer),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      vrf_select: cdktf.numberToTerraform(this._vrfSelect),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      group_poll_interval: {
        value: cdktf.numberToHclTerraform(this._groupPollInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface: {
        value: cdktf.stringToHclTerraform(this._interface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface_select_method: {
        value: cdktf.stringToHclTerraform(this._interfaceSelectMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldap_poll: {
        value: cdktf.stringToHclTerraform(this._ldapPoll),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldap_poll_filter: {
        value: cdktf.stringToHclTerraform(this._ldapPollFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldap_poll_interval: {
        value: cdktf.numberToHclTerraform(this._ldapPollInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ldap_server: {
        value: cdktf.stringToHclTerraform(this._ldapServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logon_timeout: {
        value: cdktf.numberToHclTerraform(this._logonTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      password2: {
        value: cdktf.stringToHclTerraform(this._password2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password3: {
        value: cdktf.stringToHclTerraform(this._password3),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password4: {
        value: cdktf.stringToHclTerraform(this._password4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password5: {
        value: cdktf.stringToHclTerraform(this._password5),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port2: {
        value: cdktf.numberToHclTerraform(this._port2),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port3: {
        value: cdktf.numberToHclTerraform(this._port3),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port4: {
        value: cdktf.numberToHclTerraform(this._port4),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port5: {
        value: cdktf.numberToHclTerraform(this._port5),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server: {
        value: cdktf.stringToHclTerraform(this._server),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server2: {
        value: cdktf.stringToHclTerraform(this._server2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server3: {
        value: cdktf.stringToHclTerraform(this._server3),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server4: {
        value: cdktf.stringToHclTerraform(this._server4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server5: {
        value: cdktf.stringToHclTerraform(this._server5),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sni: {
        value: cdktf.stringToHclTerraform(this._sni),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_ip: {
        value: cdktf.stringToHclTerraform(this._sourceIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_ip6: {
        value: cdktf.stringToHclTerraform(this._sourceIp6),
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
      ssl_server_host_ip_check: {
        value: cdktf.stringToHclTerraform(this._sslServerHostIpCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_trusted_cert: {
        value: cdktf.stringToHclTerraform(this._sslTrustedCert),
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
      user_info_server: {
        value: cdktf.stringToHclTerraform(this._userInfoServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrf_select: {
        value: cdktf.numberToHclTerraform(this._vrfSelect),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
