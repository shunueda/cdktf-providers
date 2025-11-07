// https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_email
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StageEmailConfig extends cdktf.TerraformMetaArguments {
  /**
  * Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_email#activate_user_on_success StageEmail#activate_user_on_success}
  */
  readonly activateUserOnSuccess?: boolean | cdktf.IResolvable;
  /**
  * Defaults to `system@authentik.local`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_email#from_address StageEmail#from_address}
  */
  readonly fromAddress?: string;
  /**
  * Defaults to `localhost`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_email#host StageEmail#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_email#id StageEmail#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_email#name StageEmail#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_email#password StageEmail#password}
  */
  readonly password?: string;
  /**
  * Defaults to `25`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_email#port StageEmail#port}
  */
  readonly port?: number;
  /**
  * Format: hours=1;minutes=2;seconds=3. Defaults to `minutes=5`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_email#recovery_cache_timeout StageEmail#recovery_cache_timeout}
  */
  readonly recoveryCacheTimeout?: string;
  /**
  * Defaults to `5`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_email#recovery_max_attempts StageEmail#recovery_max_attempts}
  */
  readonly recoveryMaxAttempts?: number;
  /**
  * Defaults to `authentik`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_email#subject StageEmail#subject}
  */
  readonly subject?: string;
  /**
  * Defaults to `email/password_reset.html`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_email#template StageEmail#template}
  */
  readonly template?: string;
  /**
  * Defaults to `30`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_email#timeout StageEmail#timeout}
  */
  readonly timeout?: number;
  /**
  * Format: hours=1;minutes=2;seconds=3. Defaults to `minutes=30`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_email#token_expiry StageEmail#token_expiry}
  */
  readonly tokenExpiry?: string;
  /**
  * Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_email#use_global_settings StageEmail#use_global_settings}
  */
  readonly useGlobalSettings?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_email#use_ssl StageEmail#use_ssl}
  */
  readonly useSsl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_email#use_tls StageEmail#use_tls}
  */
  readonly useTls?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_email#username StageEmail#username}
  */
  readonly username?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_email authentik_stage_email}
*/
export class StageEmail extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "authentik_stage_email";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StageEmail resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StageEmail to import
  * @param importFromId The id of the existing StageEmail that should be imported. Refer to the {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_email#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StageEmail to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "authentik_stage_email", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_email authentik_stage_email} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StageEmailConfig
  */
  public constructor(scope: Construct, id: string, config: StageEmailConfig) {
    super(scope, id, {
      terraformResourceType: 'authentik_stage_email',
      terraformGeneratorMetadata: {
        providerName: 'authentik',
        providerVersion: '2025.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._activateUserOnSuccess = config.activateUserOnSuccess;
    this._fromAddress = config.fromAddress;
    this._host = config.host;
    this._id = config.id;
    this._name = config.name;
    this._password = config.password;
    this._port = config.port;
    this._recoveryCacheTimeout = config.recoveryCacheTimeout;
    this._recoveryMaxAttempts = config.recoveryMaxAttempts;
    this._subject = config.subject;
    this._template = config.template;
    this._timeout = config.timeout;
    this._tokenExpiry = config.tokenExpiry;
    this._useGlobalSettings = config.useGlobalSettings;
    this._useSsl = config.useSsl;
    this._useTls = config.useTls;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activate_user_on_success - computed: false, optional: true, required: false
  private _activateUserOnSuccess?: boolean | cdktf.IResolvable; 
  public get activateUserOnSuccess() {
    return this.getBooleanAttribute('activate_user_on_success');
  }
  public set activateUserOnSuccess(value: boolean | cdktf.IResolvable) {
    this._activateUserOnSuccess = value;
  }
  public resetActivateUserOnSuccess() {
    this._activateUserOnSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activateUserOnSuccessInput() {
    return this._activateUserOnSuccess;
  }

  // from_address - computed: false, optional: true, required: false
  private _fromAddress?: string; 
  public get fromAddress() {
    return this.getStringAttribute('from_address');
  }
  public set fromAddress(value: string) {
    this._fromAddress = value;
  }
  public resetFromAddress() {
    this._fromAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromAddressInput() {
    return this._fromAddress;
  }

  // host - computed: false, optional: true, required: false
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

  // recovery_cache_timeout - computed: false, optional: true, required: false
  private _recoveryCacheTimeout?: string; 
  public get recoveryCacheTimeout() {
    return this.getStringAttribute('recovery_cache_timeout');
  }
  public set recoveryCacheTimeout(value: string) {
    this._recoveryCacheTimeout = value;
  }
  public resetRecoveryCacheTimeout() {
    this._recoveryCacheTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryCacheTimeoutInput() {
    return this._recoveryCacheTimeout;
  }

  // recovery_max_attempts - computed: false, optional: true, required: false
  private _recoveryMaxAttempts?: number; 
  public get recoveryMaxAttempts() {
    return this.getNumberAttribute('recovery_max_attempts');
  }
  public set recoveryMaxAttempts(value: number) {
    this._recoveryMaxAttempts = value;
  }
  public resetRecoveryMaxAttempts() {
    this._recoveryMaxAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryMaxAttemptsInput() {
    return this._recoveryMaxAttempts;
  }

  // subject - computed: false, optional: true, required: false
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  public resetSubject() {
    this._subject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }

  // template - computed: false, optional: true, required: false
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // token_expiry - computed: false, optional: true, required: false
  private _tokenExpiry?: string; 
  public get tokenExpiry() {
    return this.getStringAttribute('token_expiry');
  }
  public set tokenExpiry(value: string) {
    this._tokenExpiry = value;
  }
  public resetTokenExpiry() {
    this._tokenExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenExpiryInput() {
    return this._tokenExpiry;
  }

  // use_global_settings - computed: false, optional: true, required: false
  private _useGlobalSettings?: boolean | cdktf.IResolvable; 
  public get useGlobalSettings() {
    return this.getBooleanAttribute('use_global_settings');
  }
  public set useGlobalSettings(value: boolean | cdktf.IResolvable) {
    this._useGlobalSettings = value;
  }
  public resetUseGlobalSettings() {
    this._useGlobalSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useGlobalSettingsInput() {
    return this._useGlobalSettings;
  }

  // use_ssl - computed: false, optional: true, required: false
  private _useSsl?: boolean | cdktf.IResolvable; 
  public get useSsl() {
    return this.getBooleanAttribute('use_ssl');
  }
  public set useSsl(value: boolean | cdktf.IResolvable) {
    this._useSsl = value;
  }
  public resetUseSsl() {
    this._useSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSslInput() {
    return this._useSsl;
  }

  // use_tls - computed: false, optional: true, required: false
  private _useTls?: boolean | cdktf.IResolvable; 
  public get useTls() {
    return this.getBooleanAttribute('use_tls');
  }
  public set useTls(value: boolean | cdktf.IResolvable) {
    this._useTls = value;
  }
  public resetUseTls() {
    this._useTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useTlsInput() {
    return this._useTls;
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
      activate_user_on_success: cdktf.booleanToTerraform(this._activateUserOnSuccess),
      from_address: cdktf.stringToTerraform(this._fromAddress),
      host: cdktf.stringToTerraform(this._host),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      port: cdktf.numberToTerraform(this._port),
      recovery_cache_timeout: cdktf.stringToTerraform(this._recoveryCacheTimeout),
      recovery_max_attempts: cdktf.numberToTerraform(this._recoveryMaxAttempts),
      subject: cdktf.stringToTerraform(this._subject),
      template: cdktf.stringToTerraform(this._template),
      timeout: cdktf.numberToTerraform(this._timeout),
      token_expiry: cdktf.stringToTerraform(this._tokenExpiry),
      use_global_settings: cdktf.booleanToTerraform(this._useGlobalSettings),
      use_ssl: cdktf.booleanToTerraform(this._useSsl),
      use_tls: cdktf.booleanToTerraform(this._useTls),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      activate_user_on_success: {
        value: cdktf.booleanToHclTerraform(this._activateUserOnSuccess),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      recovery_cache_timeout: {
        value: cdktf.stringToHclTerraform(this._recoveryCacheTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recovery_max_attempts: {
        value: cdktf.numberToHclTerraform(this._recoveryMaxAttempts),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      subject: {
        value: cdktf.stringToHclTerraform(this._subject),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template: {
        value: cdktf.stringToHclTerraform(this._template),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      token_expiry: {
        value: cdktf.stringToHclTerraform(this._tokenExpiry),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_global_settings: {
        value: cdktf.booleanToHclTerraform(this._useGlobalSettings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_ssl: {
        value: cdktf.booleanToHclTerraform(this._useSsl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_tls: {
        value: cdktf.booleanToHclTerraform(this._useTls),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
