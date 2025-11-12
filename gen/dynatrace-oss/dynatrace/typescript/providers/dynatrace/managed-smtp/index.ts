// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/managed_smtp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagedSmtpConfig extends cdktf.TerraformMetaArguments {
  /**
  * If true, we will send e-mails via Mission Control in case of problems with SMTP server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/managed_smtp#allow_fallback_via_mission_control ManagedSmtp#allow_fallback_via_mission_control}
  */
  readonly allowFallbackViaMissionControl?: boolean | cdktf.IResolvable;
  /**
  * Connection security, possible values: `NO_ENCRYPTION`, `OPTIONAL_STARTTLS`, `REQUIRE_STARTTLS`, `TLS`. Default: `NO_ENCRYPTION`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/managed_smtp#connection_security ManagedSmtp#connection_security}
  */
  readonly connectionSecurity?: string;
  /**
  * Host Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/managed_smtp#host_name ManagedSmtp#host_name}
  */
  readonly hostName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/managed_smtp#id ManagedSmtp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * If true, a password has been configured. Default: `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/managed_smtp#is_password_configured ManagedSmtp#is_password_configured}
  */
  readonly isPasswordConfigured?: boolean | cdktf.IResolvable;
  /**
  * Password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/managed_smtp#password ManagedSmtp#password}
  */
  readonly password: string;
  /**
  * Integer value of port. Default: `25`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/managed_smtp#port ManagedSmtp#port}
  */
  readonly port?: number;
  /**
  * Sender email address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/managed_smtp#sender_email_address ManagedSmtp#sender_email_address}
  */
  readonly senderEmailAddress: string;
  /**
  * If true, we will send e-mails via SMTP server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/managed_smtp#use_smtp_server ManagedSmtp#use_smtp_server}
  */
  readonly useSmtpServer?: boolean | cdktf.IResolvable;
  /**
  * User Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/managed_smtp#user_name ManagedSmtp#user_name}
  */
  readonly userName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/managed_smtp dynatrace_managed_smtp}
*/
export class ManagedSmtp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_managed_smtp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagedSmtp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagedSmtp to import
  * @param importFromId The id of the existing ManagedSmtp that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/managed_smtp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagedSmtp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_managed_smtp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/managed_smtp dynatrace_managed_smtp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagedSmtpConfig
  */
  public constructor(scope: Construct, id: string, config: ManagedSmtpConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_managed_smtp',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1',
        providerVersionConstraint: '1.87.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowFallbackViaMissionControl = config.allowFallbackViaMissionControl;
    this._connectionSecurity = config.connectionSecurity;
    this._hostName = config.hostName;
    this._id = config.id;
    this._isPasswordConfigured = config.isPasswordConfigured;
    this._password = config.password;
    this._port = config.port;
    this._senderEmailAddress = config.senderEmailAddress;
    this._useSmtpServer = config.useSmtpServer;
    this._userName = config.userName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_fallback_via_mission_control - computed: false, optional: true, required: false
  private _allowFallbackViaMissionControl?: boolean | cdktf.IResolvable; 
  public get allowFallbackViaMissionControl() {
    return this.getBooleanAttribute('allow_fallback_via_mission_control');
  }
  public set allowFallbackViaMissionControl(value: boolean | cdktf.IResolvable) {
    this._allowFallbackViaMissionControl = value;
  }
  public resetAllowFallbackViaMissionControl() {
    this._allowFallbackViaMissionControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowFallbackViaMissionControlInput() {
    return this._allowFallbackViaMissionControl;
  }

  // connection_security - computed: false, optional: true, required: false
  private _connectionSecurity?: string; 
  public get connectionSecurity() {
    return this.getStringAttribute('connection_security');
  }
  public set connectionSecurity(value: string) {
    this._connectionSecurity = value;
  }
  public resetConnectionSecurity() {
    this._connectionSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionSecurityInput() {
    return this._connectionSecurity;
  }

  // host_name - computed: false, optional: false, required: true
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
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

  // is_password_configured - computed: false, optional: true, required: false
  private _isPasswordConfigured?: boolean | cdktf.IResolvable; 
  public get isPasswordConfigured() {
    return this.getBooleanAttribute('is_password_configured');
  }
  public set isPasswordConfigured(value: boolean | cdktf.IResolvable) {
    this._isPasswordConfigured = value;
  }
  public resetIsPasswordConfigured() {
    this._isPasswordConfigured = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPasswordConfiguredInput() {
    return this._isPasswordConfigured;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
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

  // sender_email_address - computed: false, optional: false, required: true
  private _senderEmailAddress?: string; 
  public get senderEmailAddress() {
    return this.getStringAttribute('sender_email_address');
  }
  public set senderEmailAddress(value: string) {
    this._senderEmailAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get senderEmailAddressInput() {
    return this._senderEmailAddress;
  }

  // use_smtp_server - computed: false, optional: true, required: false
  private _useSmtpServer?: boolean | cdktf.IResolvable; 
  public get useSmtpServer() {
    return this.getBooleanAttribute('use_smtp_server');
  }
  public set useSmtpServer(value: boolean | cdktf.IResolvable) {
    this._useSmtpServer = value;
  }
  public resetUseSmtpServer() {
    this._useSmtpServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSmtpServerInput() {
    return this._useSmtpServer;
  }

  // user_name - computed: false, optional: false, required: true
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_fallback_via_mission_control: cdktf.booleanToTerraform(this._allowFallbackViaMissionControl),
      connection_security: cdktf.stringToTerraform(this._connectionSecurity),
      host_name: cdktf.stringToTerraform(this._hostName),
      id: cdktf.stringToTerraform(this._id),
      is_password_configured: cdktf.booleanToTerraform(this._isPasswordConfigured),
      password: cdktf.stringToTerraform(this._password),
      port: cdktf.numberToTerraform(this._port),
      sender_email_address: cdktf.stringToTerraform(this._senderEmailAddress),
      use_smtp_server: cdktf.booleanToTerraform(this._useSmtpServer),
      user_name: cdktf.stringToTerraform(this._userName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_fallback_via_mission_control: {
        value: cdktf.booleanToHclTerraform(this._allowFallbackViaMissionControl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      connection_security: {
        value: cdktf.stringToHclTerraform(this._connectionSecurity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_name: {
        value: cdktf.stringToHclTerraform(this._hostName),
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
      is_password_configured: {
        value: cdktf.booleanToHclTerraform(this._isPasswordConfigured),
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
      sender_email_address: {
        value: cdktf.stringToHclTerraform(this._senderEmailAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_smtp_server: {
        value: cdktf.booleanToHclTerraform(this._useSmtpServer),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      user_name: {
        value: cdktf.stringToHclTerraform(this._userName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
