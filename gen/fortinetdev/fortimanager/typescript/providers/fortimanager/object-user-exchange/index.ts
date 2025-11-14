// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_user_exchange
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectUserExchangeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_user_exchange#addr_type ObjectUserExchange#addr_type}
  */
  readonly addrType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_user_exchange#adom ObjectUserExchange#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_user_exchange#auth_level ObjectUserExchange#auth_level}
  */
  readonly authLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_user_exchange#auth_type ObjectUserExchange#auth_type}
  */
  readonly authType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_user_exchange#auto_discover_kdc ObjectUserExchange#auto_discover_kdc}
  */
  readonly autoDiscoverKdc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_user_exchange#connect_protocol ObjectUserExchange#connect_protocol}
  */
  readonly connectProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_user_exchange#domain_name ObjectUserExchange#domain_name}
  */
  readonly domainName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_user_exchange#http_auth_type ObjectUserExchange#http_auth_type}
  */
  readonly httpAuthType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_user_exchange#id ObjectUserExchange#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_user_exchange#ip ObjectUserExchange#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_user_exchange#ip6 ObjectUserExchange#ip6}
  */
  readonly ip6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_user_exchange#kdc_ip ObjectUserExchange#kdc_ip}
  */
  readonly kdcIp?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_user_exchange#name ObjectUserExchange#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_user_exchange#password ObjectUserExchange#password}
  */
  readonly password?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_user_exchange#scopetype ObjectUserExchange#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_user_exchange#server_name ObjectUserExchange#server_name}
  */
  readonly serverName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_user_exchange#ssl_min_proto_version ObjectUserExchange#ssl_min_proto_version}
  */
  readonly sslMinProtoVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_user_exchange#username ObjectUserExchange#username}
  */
  readonly username?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_user_exchange#validate_server_certificate ObjectUserExchange#validate_server_certificate}
  */
  readonly validateServerCertificate?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_user_exchange fortimanager_object_user_exchange}
*/
export class ObjectUserExchange extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_user_exchange";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectUserExchange resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectUserExchange to import
  * @param importFromId The id of the existing ObjectUserExchange that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_user_exchange#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectUserExchange to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_user_exchange", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_user_exchange fortimanager_object_user_exchange} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectUserExchangeConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectUserExchangeConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_user_exchange',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.15.0',
        providerVersionConstraint: '1.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addrType = config.addrType;
    this._adom = config.adom;
    this._authLevel = config.authLevel;
    this._authType = config.authType;
    this._autoDiscoverKdc = config.autoDiscoverKdc;
    this._connectProtocol = config.connectProtocol;
    this._domainName = config.domainName;
    this._httpAuthType = config.httpAuthType;
    this._id = config.id;
    this._ip = config.ip;
    this._ip6 = config.ip6;
    this._kdcIp = config.kdcIp;
    this._name = config.name;
    this._password = config.password;
    this._scopetype = config.scopetype;
    this._serverName = config.serverName;
    this._sslMinProtoVersion = config.sslMinProtoVersion;
    this._username = config.username;
    this._validateServerCertificate = config.validateServerCertificate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // addr_type - computed: false, optional: true, required: false
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

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // auth_level - computed: true, optional: true, required: false
  private _authLevel?: string; 
  public get authLevel() {
    return this.getStringAttribute('auth_level');
  }
  public set authLevel(value: string) {
    this._authLevel = value;
  }
  public resetAuthLevel() {
    this._authLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authLevelInput() {
    return this._authLevel;
  }

  // auth_type - computed: true, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // auto_discover_kdc - computed: true, optional: true, required: false
  private _autoDiscoverKdc?: string; 
  public get autoDiscoverKdc() {
    return this.getStringAttribute('auto_discover_kdc');
  }
  public set autoDiscoverKdc(value: string) {
    this._autoDiscoverKdc = value;
  }
  public resetAutoDiscoverKdc() {
    this._autoDiscoverKdc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDiscoverKdcInput() {
    return this._autoDiscoverKdc;
  }

  // connect_protocol - computed: true, optional: true, required: false
  private _connectProtocol?: string; 
  public get connectProtocol() {
    return this.getStringAttribute('connect_protocol');
  }
  public set connectProtocol(value: string) {
    this._connectProtocol = value;
  }
  public resetConnectProtocol() {
    this._connectProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectProtocolInput() {
    return this._connectProtocol;
  }

  // domain_name - computed: false, optional: true, required: false
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

  // http_auth_type - computed: true, optional: true, required: false
  private _httpAuthType?: string; 
  public get httpAuthType() {
    return this.getStringAttribute('http_auth_type');
  }
  public set httpAuthType(value: string) {
    this._httpAuthType = value;
  }
  public resetHttpAuthType() {
    this._httpAuthType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpAuthTypeInput() {
    return this._httpAuthType;
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

  // ip - computed: true, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // ip6 - computed: false, optional: true, required: false
  private _ip6?: string; 
  public get ip6() {
    return this.getStringAttribute('ip6');
  }
  public set ip6(value: string) {
    this._ip6 = value;
  }
  public resetIp6() {
    this._ip6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6Input() {
    return this._ip6;
  }

  // kdc_ip - computed: true, optional: true, required: false
  private _kdcIp?: string[]; 
  public get kdcIp() {
    return cdktf.Fn.tolist(this.getListAttribute('kdc_ip'));
  }
  public set kdcIp(value: string[]) {
    this._kdcIp = value;
  }
  public resetKdcIp() {
    this._kdcIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kdcIpInput() {
    return this._kdcIp;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string[]; 
  public get password() {
    return cdktf.Fn.tolist(this.getListAttribute('password'));
  }
  public set password(value: string[]) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // server_name - computed: false, optional: true, required: false
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

  // ssl_min_proto_version - computed: true, optional: true, required: false
  private _sslMinProtoVersion?: string; 
  public get sslMinProtoVersion() {
    return this.getStringAttribute('ssl_min_proto_version');
  }
  public set sslMinProtoVersion(value: string) {
    this._sslMinProtoVersion = value;
  }
  public resetSslMinProtoVersion() {
    this._sslMinProtoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslMinProtoVersionInput() {
    return this._sslMinProtoVersion;
  }

  // username - computed: false, optional: true, required: false
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

  // validate_server_certificate - computed: false, optional: true, required: false
  private _validateServerCertificate?: string; 
  public get validateServerCertificate() {
    return this.getStringAttribute('validate_server_certificate');
  }
  public set validateServerCertificate(value: string) {
    this._validateServerCertificate = value;
  }
  public resetValidateServerCertificate() {
    this._validateServerCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateServerCertificateInput() {
    return this._validateServerCertificate;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      addr_type: cdktf.stringToTerraform(this._addrType),
      adom: cdktf.stringToTerraform(this._adom),
      auth_level: cdktf.stringToTerraform(this._authLevel),
      auth_type: cdktf.stringToTerraform(this._authType),
      auto_discover_kdc: cdktf.stringToTerraform(this._autoDiscoverKdc),
      connect_protocol: cdktf.stringToTerraform(this._connectProtocol),
      domain_name: cdktf.stringToTerraform(this._domainName),
      http_auth_type: cdktf.stringToTerraform(this._httpAuthType),
      id: cdktf.stringToTerraform(this._id),
      ip: cdktf.stringToTerraform(this._ip),
      ip6: cdktf.stringToTerraform(this._ip6),
      kdc_ip: cdktf.listMapper(cdktf.stringToTerraform, false)(this._kdcIp),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.listMapper(cdktf.stringToTerraform, false)(this._password),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      server_name: cdktf.stringToTerraform(this._serverName),
      ssl_min_proto_version: cdktf.stringToTerraform(this._sslMinProtoVersion),
      username: cdktf.stringToTerraform(this._username),
      validate_server_certificate: cdktf.stringToTerraform(this._validateServerCertificate),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      addr_type: {
        value: cdktf.stringToHclTerraform(this._addrType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_level: {
        value: cdktf.stringToHclTerraform(this._authLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_type: {
        value: cdktf.stringToHclTerraform(this._authType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_discover_kdc: {
        value: cdktf.stringToHclTerraform(this._autoDiscoverKdc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connect_protocol: {
        value: cdktf.stringToHclTerraform(this._connectProtocol),
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
      http_auth_type: {
        value: cdktf.stringToHclTerraform(this._httpAuthType),
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
      ip: {
        value: cdktf.stringToHclTerraform(this._ip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip6: {
        value: cdktf.stringToHclTerraform(this._ip6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kdc_ip: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._kdcIp),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._password),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
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
      ssl_min_proto_version: {
        value: cdktf.stringToHclTerraform(this._sslMinProtoVersion),
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
      validate_server_certificate: {
        value: cdktf.stringToHclTerraform(this._validateServerCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
