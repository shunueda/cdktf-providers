// https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/mail_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MailConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether the config is enabled or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/mail_config#enabled MailConfig#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * fromAddress
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/mail_config#from_address MailConfig#from_address}
  */
  readonly fromAddress: string;
  /**
  * hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/mail_config#host MailConfig#host}
  */
  readonly host: string;
  /**
  * SSL on connect enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/mail_config#nexus_trust_store_enabled MailConfig#nexus_trust_store_enabled}
  */
  readonly nexusTrustStoreEnabled?: boolean | cdktf.IResolvable;
  /**
  * Password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/mail_config#password MailConfig#password}
  */
  readonly password?: string;
  /**
  * port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/mail_config#port MailConfig#port}
  */
  readonly port: number;
  /**
  * SSL on connect enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/mail_config#ssl_on_connect_enabled MailConfig#ssl_on_connect_enabled}
  */
  readonly sslOnConnectEnabled?: boolean | cdktf.IResolvable;
  /**
  * SSL on connect enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/mail_config#ssl_server_identity_check_enabled MailConfig#ssl_server_identity_check_enabled}
  */
  readonly sslServerIdentityCheckEnabled?: boolean | cdktf.IResolvable;
  /**
  * Star TLS Enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/mail_config#start_tls_enabled MailConfig#start_tls_enabled}
  */
  readonly startTlsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Star TLS required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/mail_config#start_tls_required MailConfig#start_tls_required}
  */
  readonly startTlsRequired?: boolean | cdktf.IResolvable;
  /**
  * Subject prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/mail_config#subject_prefix MailConfig#subject_prefix}
  */
  readonly subjectPrefix?: string;
  /**
  * Username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/mail_config#username MailConfig#username}
  */
  readonly username?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/mail_config nexus_mail_config}
*/
export class MailConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nexus_mail_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MailConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MailConfig to import
  * @param importFromId The id of the existing MailConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/mail_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MailConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nexus_mail_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/mail_config nexus_mail_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MailConfigConfig
  */
  public constructor(scope: Construct, id: string, config: MailConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'nexus_mail_config',
      terraformGeneratorMetadata: {
        providerName: 'nexus',
        providerVersion: '2.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabled = config.enabled;
    this._fromAddress = config.fromAddress;
    this._host = config.host;
    this._nexusTrustStoreEnabled = config.nexusTrustStoreEnabled;
    this._password = config.password;
    this._port = config.port;
    this._sslOnConnectEnabled = config.sslOnConnectEnabled;
    this._sslServerIdentityCheckEnabled = config.sslServerIdentityCheckEnabled;
    this._startTlsEnabled = config.startTlsEnabled;
    this._startTlsRequired = config.startTlsRequired;
    this._subjectPrefix = config.subjectPrefix;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // from_address - computed: false, optional: false, required: true
  private _fromAddress?: string; 
  public get fromAddress() {
    return this.getStringAttribute('from_address');
  }
  public set fromAddress(value: string) {
    this._fromAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromAddressInput() {
    return this._fromAddress;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // nexus_trust_store_enabled - computed: false, optional: true, required: false
  private _nexusTrustStoreEnabled?: boolean | cdktf.IResolvable; 
  public get nexusTrustStoreEnabled() {
    return this.getBooleanAttribute('nexus_trust_store_enabled');
  }
  public set nexusTrustStoreEnabled(value: boolean | cdktf.IResolvable) {
    this._nexusTrustStoreEnabled = value;
  }
  public resetNexusTrustStoreEnabled() {
    this._nexusTrustStoreEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nexusTrustStoreEnabledInput() {
    return this._nexusTrustStoreEnabled;
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

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // ssl_on_connect_enabled - computed: false, optional: true, required: false
  private _sslOnConnectEnabled?: boolean | cdktf.IResolvable; 
  public get sslOnConnectEnabled() {
    return this.getBooleanAttribute('ssl_on_connect_enabled');
  }
  public set sslOnConnectEnabled(value: boolean | cdktf.IResolvable) {
    this._sslOnConnectEnabled = value;
  }
  public resetSslOnConnectEnabled() {
    this._sslOnConnectEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslOnConnectEnabledInput() {
    return this._sslOnConnectEnabled;
  }

  // ssl_server_identity_check_enabled - computed: false, optional: true, required: false
  private _sslServerIdentityCheckEnabled?: boolean | cdktf.IResolvable; 
  public get sslServerIdentityCheckEnabled() {
    return this.getBooleanAttribute('ssl_server_identity_check_enabled');
  }
  public set sslServerIdentityCheckEnabled(value: boolean | cdktf.IResolvable) {
    this._sslServerIdentityCheckEnabled = value;
  }
  public resetSslServerIdentityCheckEnabled() {
    this._sslServerIdentityCheckEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslServerIdentityCheckEnabledInput() {
    return this._sslServerIdentityCheckEnabled;
  }

  // start_tls_enabled - computed: false, optional: true, required: false
  private _startTlsEnabled?: boolean | cdktf.IResolvable; 
  public get startTlsEnabled() {
    return this.getBooleanAttribute('start_tls_enabled');
  }
  public set startTlsEnabled(value: boolean | cdktf.IResolvable) {
    this._startTlsEnabled = value;
  }
  public resetStartTlsEnabled() {
    this._startTlsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTlsEnabledInput() {
    return this._startTlsEnabled;
  }

  // start_tls_required - computed: false, optional: true, required: false
  private _startTlsRequired?: boolean | cdktf.IResolvable; 
  public get startTlsRequired() {
    return this.getBooleanAttribute('start_tls_required');
  }
  public set startTlsRequired(value: boolean | cdktf.IResolvable) {
    this._startTlsRequired = value;
  }
  public resetStartTlsRequired() {
    this._startTlsRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTlsRequiredInput() {
    return this._startTlsRequired;
  }

  // subject_prefix - computed: false, optional: true, required: false
  private _subjectPrefix?: string; 
  public get subjectPrefix() {
    return this.getStringAttribute('subject_prefix');
  }
  public set subjectPrefix(value: string) {
    this._subjectPrefix = value;
  }
  public resetSubjectPrefix() {
    this._subjectPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectPrefixInput() {
    return this._subjectPrefix;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      from_address: cdktf.stringToTerraform(this._fromAddress),
      host: cdktf.stringToTerraform(this._host),
      nexus_trust_store_enabled: cdktf.booleanToTerraform(this._nexusTrustStoreEnabled),
      password: cdktf.stringToTerraform(this._password),
      port: cdktf.numberToTerraform(this._port),
      ssl_on_connect_enabled: cdktf.booleanToTerraform(this._sslOnConnectEnabled),
      ssl_server_identity_check_enabled: cdktf.booleanToTerraform(this._sslServerIdentityCheckEnabled),
      start_tls_enabled: cdktf.booleanToTerraform(this._startTlsEnabled),
      start_tls_required: cdktf.booleanToTerraform(this._startTlsRequired),
      subject_prefix: cdktf.stringToTerraform(this._subjectPrefix),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      from_address: {
        value: cdktf.stringToHclTerraform(this._fromAddress),
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
      nexus_trust_store_enabled: {
        value: cdktf.booleanToHclTerraform(this._nexusTrustStoreEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
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
      ssl_on_connect_enabled: {
        value: cdktf.booleanToHclTerraform(this._sslOnConnectEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ssl_server_identity_check_enabled: {
        value: cdktf.booleanToHclTerraform(this._sslServerIdentityCheckEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      start_tls_enabled: {
        value: cdktf.booleanToHclTerraform(this._startTlsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      start_tls_required: {
        value: cdktf.booleanToHclTerraform(this._startTlsRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      subject_prefix: {
        value: cdktf.stringToHclTerraform(this._subjectPrefix),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
