// https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppdProviderConfig {
  /**
  * ClientID of the AppDynamics API Client, this can also be set as the APPDYNAMICS_CLIENT_ID environment variable. To be used with login mode service_principal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs#client_id AppdProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * ClientSecret of the AppDynamics API Client. This can also be set as the APPDYNAMICS_CLIENT_SECRET environment variable. To be used with login mode service_principal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs#client_secret AppdProvider#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Mode of login. Possible values are: service_principal, browser and headless. This can also be set as the APPDYNAMICS_LOGIN_MODE environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs#login_mode AppdProvider#login_mode}
  */
  readonly loginMode: string;
  /**
  * Password to login to the AppDynamics Platform. This can also be set as the APPDYNAMICS_PASSWORD environment variable. To be used with login mode headless.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs#password AppdProvider#password}
  */
  readonly password?: string;
  /**
  * Whether or not to store the access token acquired by login mode browser and headless. This is for convenience and if you store the token, it would not prompt you to login again until it expires. This can also be set as the APPDYNAMICS_SAVE_TOKEN environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs#save_token AppdProvider#save_token}
  */
  readonly saveToken?: boolean | cdktf.IResolvable;
  /**
  * Tenant name of the AppDynamics Platform. This can also be set as the APPDYNAMICS_TENANT_NAME environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs#tenant_name AppdProvider#tenant_name}
  */
  readonly tenantName: string;
  /**
  * Username to login to the AppDynamics Platform. This can also be set as the APPDYNAMICS_USERNAME environment variable. To be used with login mode headless.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs#username AppdProvider#username}
  */
  readonly username?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs#alias AppdProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs appd}
*/
export class AppdProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "appd";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppdProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppdProvider to import
  * @param importFromId The id of the existing AppdProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppdProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "appd", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs appd} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppdProviderConfig
  */
  public constructor(scope: Construct, id: string, config: AppdProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'appd',
      terraformGeneratorMetadata: {
        providerName: 'appd',
        providerVersion: '0.0.1'
      },
      terraformProviderSource: 'cisco-open/appd'
    });
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
    this._loginMode = config.loginMode;
    this._password = config.password;
    this._saveToken = config.saveToken;
    this._tenantName = config.tenantName;
    this._username = config.username;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this._clientId;
  }
  public set clientId(value: string | undefined) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this._clientSecret;
  }
  public set clientSecret(value: string | undefined) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // login_mode - computed: false, optional: false, required: true
  private _loginMode?: string; 
  public get loginMode() {
    return this._loginMode;
  }
  public set loginMode(value: string | undefined) {
    this._loginMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loginModeInput() {
    return this._loginMode;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this._password;
  }
  public set password(value: string | undefined) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // save_token - computed: false, optional: true, required: false
  private _saveToken?: boolean | cdktf.IResolvable; 
  public get saveToken() {
    return this._saveToken;
  }
  public set saveToken(value: boolean | cdktf.IResolvable | undefined) {
    this._saveToken = value;
  }
  public resetSaveToken() {
    this._saveToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saveTokenInput() {
    return this._saveToken;
  }

  // tenant_name - computed: false, optional: false, required: true
  private _tenantName?: string; 
  public get tenantName() {
    return this._tenantName;
  }
  public set tenantName(value: string | undefined) {
    this._tenantName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantNameInput() {
    return this._tenantName;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this._username;
  }
  public set username(value: string | undefined) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_id: cdktf.stringToTerraform(this._clientId),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      login_mode: cdktf.stringToTerraform(this._loginMode),
      password: cdktf.stringToTerraform(this._password),
      save_token: cdktf.booleanToTerraform(this._saveToken),
      tenant_name: cdktf.stringToTerraform(this._tenantName),
      username: cdktf.stringToTerraform(this._username),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_secret: {
        value: cdktf.stringToHclTerraform(this._clientSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      login_mode: {
        value: cdktf.stringToHclTerraform(this._loginMode),
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
      save_token: {
        value: cdktf.booleanToHclTerraform(this._saveToken),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tenant_name: {
        value: cdktf.stringToHclTerraform(this._tenantName),
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
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
