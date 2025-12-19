// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/threat_intel_threat_feed
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ThreatIntelThreatFeedConfig extends cdktf.TerraformMetaArguments {
  /**
  * Realm for NTLM authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/threat_intel_threat_feed#domain ThreatIntelThreatFeed#domain}
  */
  readonly domain?: string;
  /**
  * Enable module
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/threat_intel_threat_feed#enable ThreatIntelThreatFeed#enable}
  */
  readonly enable?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/threat_intel_threat_feed#id ThreatIntelThreatFeed#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 'disable': Disable all logging; 'error': Log error events; 'warning': Log warning events and above; 'info': Log info events and above; 'debug': Log debug events and above; 'trace': enable all logs;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/threat_intel_threat_feed#log_level ThreatIntelThreatFeed#log_level}
  */
  readonly logLevel?: string;
  /**
  * Port to query server(default 443)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/threat_intel_threat_feed#port ThreatIntelThreatFeed#port}
  */
  readonly port?: number;
  /**
  * 'ntlm': NTLM authentication(default); 'basic': Basic authentication;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/threat_intel_threat_feed#proxy_auth_type ThreatIntelThreatFeed#proxy_auth_type}
  */
  readonly proxyAuthType?: string;
  /**
  * Proxy server hostname or IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/threat_intel_threat_feed#proxy_host ThreatIntelThreatFeed#proxy_host}
  */
  readonly proxyHost?: string;
  /**
  * Password for proxy authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/threat_intel_threat_feed#proxy_password ThreatIntelThreatFeed#proxy_password}
  */
  readonly proxyPassword?: number;
  /**
  * Port to connect on proxy server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/threat_intel_threat_feed#proxy_port ThreatIntelThreatFeed#proxy_port}
  */
  readonly proxyPort?: number;
  /**
  * Username for proxy authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/threat_intel_threat_feed#proxy_username ThreatIntelThreatFeed#proxy_username}
  */
  readonly proxyUsername?: string;
  /**
  * Disables real time updates(default enable)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/threat_intel_threat_feed#rtu_update_disable ThreatIntelThreatFeed#rtu_update_disable}
  */
  readonly rtuUpdateDisable?: number;
  /**
  * password value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/threat_intel_threat_feed#secret_string ThreatIntelThreatFeed#secret_string}
  */
  readonly secretString?: string;
  /**
  * Server IP or Hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/threat_intel_threat_feed#server ThreatIntelThreatFeed#server}
  */
  readonly server?: string;
  /**
  * Server Timeout in seconds (default: 15s)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/threat_intel_threat_feed#server_timeout ThreatIntelThreatFeed#server_timeout}
  */
  readonly serverTimeout?: number;
  /**
  * 'webroot': Configure Webroot module options;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/threat_intel_threat_feed#type ThreatIntelThreatFeed#type}
  */
  readonly type: string;
  /**
  * Interval to check for database or RTU updates(default 120 mins)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/threat_intel_threat_feed#update_interval ThreatIntelThreatFeed#update_interval}
  */
  readonly updateInterval?: number;
  /**
  * Use management interface for all communication with threat-intel server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/threat_intel_threat_feed#use_mgmt_port ThreatIntelThreatFeed#use_mgmt_port}
  */
  readonly useMgmtPort?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/threat_intel_threat_feed#user_tag ThreatIntelThreatFeed#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/threat_intel_threat_feed#uuid ThreatIntelThreatFeed#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/threat_intel_threat_feed thunder_threat_intel_threat_feed}
*/
export class ThreatIntelThreatFeed extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_threat_intel_threat_feed";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ThreatIntelThreatFeed resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ThreatIntelThreatFeed to import
  * @param importFromId The id of the existing ThreatIntelThreatFeed that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/threat_intel_threat_feed#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ThreatIntelThreatFeed to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_threat_intel_threat_feed", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/threat_intel_threat_feed thunder_threat_intel_threat_feed} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ThreatIntelThreatFeedConfig
  */
  public constructor(scope: Construct, id: string, config: ThreatIntelThreatFeedConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_threat_intel_threat_feed',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._domain = config.domain;
    this._enable = config.enable;
    this._id = config.id;
    this._logLevel = config.logLevel;
    this._port = config.port;
    this._proxyAuthType = config.proxyAuthType;
    this._proxyHost = config.proxyHost;
    this._proxyPassword = config.proxyPassword;
    this._proxyPort = config.proxyPort;
    this._proxyUsername = config.proxyUsername;
    this._rtuUpdateDisable = config.rtuUpdateDisable;
    this._secretString = config.secretString;
    this._server = config.server;
    this._serverTimeout = config.serverTimeout;
    this._type = config.type;
    this._updateInterval = config.updateInterval;
    this._useMgmtPort = config.useMgmtPort;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: number; 
  public get enable() {
    return this.getNumberAttribute('enable');
  }
  public set enable(value: number) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
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

  // log_level - computed: false, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // port - computed: false, optional: true, required: false
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

  // proxy_auth_type - computed: false, optional: true, required: false
  private _proxyAuthType?: string; 
  public get proxyAuthType() {
    return this.getStringAttribute('proxy_auth_type');
  }
  public set proxyAuthType(value: string) {
    this._proxyAuthType = value;
  }
  public resetProxyAuthType() {
    this._proxyAuthType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyAuthTypeInput() {
    return this._proxyAuthType;
  }

  // proxy_host - computed: false, optional: true, required: false
  private _proxyHost?: string; 
  public get proxyHost() {
    return this.getStringAttribute('proxy_host');
  }
  public set proxyHost(value: string) {
    this._proxyHost = value;
  }
  public resetProxyHost() {
    this._proxyHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyHostInput() {
    return this._proxyHost;
  }

  // proxy_password - computed: false, optional: true, required: false
  private _proxyPassword?: number; 
  public get proxyPassword() {
    return this.getNumberAttribute('proxy_password');
  }
  public set proxyPassword(value: number) {
    this._proxyPassword = value;
  }
  public resetProxyPassword() {
    this._proxyPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyPasswordInput() {
    return this._proxyPassword;
  }

  // proxy_port - computed: false, optional: true, required: false
  private _proxyPort?: number; 
  public get proxyPort() {
    return this.getNumberAttribute('proxy_port');
  }
  public set proxyPort(value: number) {
    this._proxyPort = value;
  }
  public resetProxyPort() {
    this._proxyPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyPortInput() {
    return this._proxyPort;
  }

  // proxy_username - computed: false, optional: true, required: false
  private _proxyUsername?: string; 
  public get proxyUsername() {
    return this.getStringAttribute('proxy_username');
  }
  public set proxyUsername(value: string) {
    this._proxyUsername = value;
  }
  public resetProxyUsername() {
    this._proxyUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyUsernameInput() {
    return this._proxyUsername;
  }

  // rtu_update_disable - computed: false, optional: true, required: false
  private _rtuUpdateDisable?: number; 
  public get rtuUpdateDisable() {
    return this.getNumberAttribute('rtu_update_disable');
  }
  public set rtuUpdateDisable(value: number) {
    this._rtuUpdateDisable = value;
  }
  public resetRtuUpdateDisable() {
    this._rtuUpdateDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtuUpdateDisableInput() {
    return this._rtuUpdateDisable;
  }

  // secret_string - computed: false, optional: true, required: false
  private _secretString?: string; 
  public get secretString() {
    return this.getStringAttribute('secret_string');
  }
  public set secretString(value: string) {
    this._secretString = value;
  }
  public resetSecretString() {
    this._secretString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretStringInput() {
    return this._secretString;
  }

  // server - computed: false, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // server_timeout - computed: false, optional: true, required: false
  private _serverTimeout?: number; 
  public get serverTimeout() {
    return this.getNumberAttribute('server_timeout');
  }
  public set serverTimeout(value: number) {
    this._serverTimeout = value;
  }
  public resetServerTimeout() {
    this._serverTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverTimeoutInput() {
    return this._serverTimeout;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // update_interval - computed: false, optional: true, required: false
  private _updateInterval?: number; 
  public get updateInterval() {
    return this.getNumberAttribute('update_interval');
  }
  public set updateInterval(value: number) {
    this._updateInterval = value;
  }
  public resetUpdateInterval() {
    this._updateInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateIntervalInput() {
    return this._updateInterval;
  }

  // use_mgmt_port - computed: false, optional: true, required: false
  private _useMgmtPort?: number; 
  public get useMgmtPort() {
    return this.getNumberAttribute('use_mgmt_port');
  }
  public set useMgmtPort(value: number) {
    this._useMgmtPort = value;
  }
  public resetUseMgmtPort() {
    this._useMgmtPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMgmtPortInput() {
    return this._useMgmtPort;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain: cdktf.stringToTerraform(this._domain),
      enable: cdktf.numberToTerraform(this._enable),
      id: cdktf.stringToTerraform(this._id),
      log_level: cdktf.stringToTerraform(this._logLevel),
      port: cdktf.numberToTerraform(this._port),
      proxy_auth_type: cdktf.stringToTerraform(this._proxyAuthType),
      proxy_host: cdktf.stringToTerraform(this._proxyHost),
      proxy_password: cdktf.numberToTerraform(this._proxyPassword),
      proxy_port: cdktf.numberToTerraform(this._proxyPort),
      proxy_username: cdktf.stringToTerraform(this._proxyUsername),
      rtu_update_disable: cdktf.numberToTerraform(this._rtuUpdateDisable),
      secret_string: cdktf.stringToTerraform(this._secretString),
      server: cdktf.stringToTerraform(this._server),
      server_timeout: cdktf.numberToTerraform(this._serverTimeout),
      type: cdktf.stringToTerraform(this._type),
      update_interval: cdktf.numberToTerraform(this._updateInterval),
      use_mgmt_port: cdktf.numberToTerraform(this._useMgmtPort),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable: {
        value: cdktf.numberToHclTerraform(this._enable),
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
      log_level: {
        value: cdktf.stringToHclTerraform(this._logLevel),
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
      proxy_auth_type: {
        value: cdktf.stringToHclTerraform(this._proxyAuthType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_host: {
        value: cdktf.stringToHclTerraform(this._proxyHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_password: {
        value: cdktf.numberToHclTerraform(this._proxyPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      proxy_port: {
        value: cdktf.numberToHclTerraform(this._proxyPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      proxy_username: {
        value: cdktf.stringToHclTerraform(this._proxyUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rtu_update_disable: {
        value: cdktf.numberToHclTerraform(this._rtuUpdateDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      secret_string: {
        value: cdktf.stringToHclTerraform(this._secretString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server: {
        value: cdktf.stringToHclTerraform(this._server),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_timeout: {
        value: cdktf.numberToHclTerraform(this._serverTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_interval: {
        value: cdktf.numberToHclTerraform(this._updateInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      use_mgmt_port: {
        value: cdktf.numberToHclTerraform(this._useMgmtPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
