// https://registry.terraform.io/providers/sonatype-nexus-community/sonatypeiq/0.12.1/docs/resources/config_mail
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConfigMailConfig extends cdktf.TerraformMetaArguments {
  /**
  * Hostname of the SMTP server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sonatype-nexus-community/sonatypeiq/0.12.1/docs/resources/config_mail#hostname ConfigMail#hostname}
  */
  readonly hostname: string;
  /**
  * Password for the SMTP server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sonatype-nexus-community/sonatypeiq/0.12.1/docs/resources/config_mail#password ConfigMail#password}
  */
  readonly password?: string;
  /**
  * Whether the password is included
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sonatype-nexus-community/sonatypeiq/0.12.1/docs/resources/config_mail#password_is_included ConfigMail#password_is_included}
  */
  readonly passwordIsIncluded?: boolean | cdktf.IResolvable;
  /**
  * Port Number for the SMTP server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sonatype-nexus-community/sonatypeiq/0.12.1/docs/resources/config_mail#port ConfigMail#port}
  */
  readonly port?: number;
  /**
  * Whether SSL is enabled to SMTP server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sonatype-nexus-community/sonatypeiq/0.12.1/docs/resources/config_mail#ssl_enabled ConfigMail#ssl_enabled}
  */
  readonly sslEnabled?: boolean | cdktf.IResolvable;
  /**
  * Whether STARTTLS is enabled to SMTP server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sonatype-nexus-community/sonatypeiq/0.12.1/docs/resources/config_mail#start_tls_enabled ConfigMail#start_tls_enabled}
  */
  readonly startTlsEnabled?: boolean | cdktf.IResolvable;
  /**
  * The email address emails sent by Sonatype IQ Server will appear FROM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sonatype-nexus-community/sonatypeiq/0.12.1/docs/resources/config_mail#system_email ConfigMail#system_email}
  */
  readonly systemEmail: string;
  /**
  * Username for the SMTP server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sonatype-nexus-community/sonatypeiq/0.12.1/docs/resources/config_mail#username ConfigMail#username}
  */
  readonly username?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/sonatype-nexus-community/sonatypeiq/0.12.1/docs/resources/config_mail sonatypeiq_config_mail}
*/
export class ConfigMail extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sonatypeiq_config_mail";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConfigMail resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConfigMail to import
  * @param importFromId The id of the existing ConfigMail that should be imported. Refer to the {@link https://registry.terraform.io/providers/sonatype-nexus-community/sonatypeiq/0.12.1/docs/resources/config_mail#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConfigMail to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sonatypeiq_config_mail", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sonatype-nexus-community/sonatypeiq/0.12.1/docs/resources/config_mail sonatypeiq_config_mail} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfigMailConfig
  */
  public constructor(scope: Construct, id: string, config: ConfigMailConfig) {
    super(scope, id, {
      terraformResourceType: 'sonatypeiq_config_mail',
      terraformGeneratorMetadata: {
        providerName: 'sonatypeiq',
        providerVersion: '0.12.1',
        providerVersionConstraint: '0.12.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._hostname = config.hostname;
    this._password = config.password;
    this._passwordIsIncluded = config.passwordIsIncluded;
    this._port = config.port;
    this._sslEnabled = config.sslEnabled;
    this._startTlsEnabled = config.startTlsEnabled;
    this._systemEmail = config.systemEmail;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
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

  // password_is_included - computed: true, optional: true, required: false
  private _passwordIsIncluded?: boolean | cdktf.IResolvable; 
  public get passwordIsIncluded() {
    return this.getBooleanAttribute('password_is_included');
  }
  public set passwordIsIncluded(value: boolean | cdktf.IResolvable) {
    this._passwordIsIncluded = value;
  }
  public resetPasswordIsIncluded() {
    this._passwordIsIncluded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordIsIncludedInput() {
    return this._passwordIsIncluded;
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

  // ssl_enabled - computed: true, optional: true, required: false
  private _sslEnabled?: boolean | cdktf.IResolvable; 
  public get sslEnabled() {
    return this.getBooleanAttribute('ssl_enabled');
  }
  public set sslEnabled(value: boolean | cdktf.IResolvable) {
    this._sslEnabled = value;
  }
  public resetSslEnabled() {
    this._sslEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslEnabledInput() {
    return this._sslEnabled;
  }

  // start_tls_enabled - computed: true, optional: true, required: false
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

  // system_email - computed: false, optional: false, required: true
  private _systemEmail?: string; 
  public get systemEmail() {
    return this.getStringAttribute('system_email');
  }
  public set systemEmail(value: string) {
    this._systemEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get systemEmailInput() {
    return this._systemEmail;
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
      hostname: cdktf.stringToTerraform(this._hostname),
      password: cdktf.stringToTerraform(this._password),
      password_is_included: cdktf.booleanToTerraform(this._passwordIsIncluded),
      port: cdktf.numberToTerraform(this._port),
      ssl_enabled: cdktf.booleanToTerraform(this._sslEnabled),
      start_tls_enabled: cdktf.booleanToTerraform(this._startTlsEnabled),
      system_email: cdktf.stringToTerraform(this._systemEmail),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
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
      password_is_included: {
        value: cdktf.booleanToHclTerraform(this._passwordIsIncluded),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssl_enabled: {
        value: cdktf.booleanToHclTerraform(this._sslEnabled),
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
      system_email: {
        value: cdktf.stringToHclTerraform(this._systemEmail),
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
