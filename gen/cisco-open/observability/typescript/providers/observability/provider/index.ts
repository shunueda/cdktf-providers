// https://registry.terraform.io/providers/cisco-open/observability/0.0.2/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObservabilityProviderConfig {
  /**
  * Authentication type selected for observability API requests. Possible values(oauth, headless, service-principal)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/observability/0.0.2/docs#auth_method ObservabilityProvider#auth_method}
  */
  readonly authMethod: string;
  /**
  * Password to authenticate using headless
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/observability/0.0.2/docs#password ObservabilityProvider#password}
  */
  readonly password?: string;
  /**
  * Path to secrets file to authenticate using service-principal 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/observability/0.0.2/docs#secrets_file ObservabilityProvider#secrets_file}
  */
  readonly secretsFile?: string;
  /**
  * Tenant ID used to make requests to API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/observability/0.0.2/docs#tenant ObservabilityProvider#tenant}
  */
  readonly tenant: string;
  /**
  * URL used when authentication eg. <https://mytenant.com>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/observability/0.0.2/docs#url ObservabilityProvider#url}
  */
  readonly url?: string;
  /**
  * Username to authenticate using headless
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/observability/0.0.2/docs#username ObservabilityProvider#username}
  */
  readonly username?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/observability/0.0.2/docs#alias ObservabilityProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-open/observability/0.0.2/docs observability}
*/
export class ObservabilityProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "observability";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObservabilityProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObservabilityProvider to import
  * @param importFromId The id of the existing ObservabilityProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-open/observability/0.0.2/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObservabilityProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "observability", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-open/observability/0.0.2/docs observability} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObservabilityProviderConfig
  */
  public constructor(scope: Construct, id: string, config: ObservabilityProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'observability',
      terraformGeneratorMetadata: {
        providerName: 'observability',
        providerVersion: '0.0.2',
        providerVersionConstraint: '0.0.2'
      },
      terraformProviderSource: 'cisco-open/observability'
    });
    this._authMethod = config.authMethod;
    this._password = config.password;
    this._secretsFile = config.secretsFile;
    this._tenant = config.tenant;
    this._url = config.url;
    this._username = config.username;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_method - computed: false, optional: false, required: true
  private _authMethod?: string; 
  public get authMethod() {
    return this._authMethod;
  }
  public set authMethod(value: string | undefined) {
    this._authMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authMethodInput() {
    return this._authMethod;
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

  // secrets_file - computed: false, optional: true, required: false
  private _secretsFile?: string; 
  public get secretsFile() {
    return this._secretsFile;
  }
  public set secretsFile(value: string | undefined) {
    this._secretsFile = value;
  }
  public resetSecretsFile() {
    this._secretsFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsFileInput() {
    return this._secretsFile;
  }

  // tenant - computed: false, optional: false, required: true
  private _tenant?: string; 
  public get tenant() {
    return this._tenant;
  }
  public set tenant(value: string | undefined) {
    this._tenant = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this._url;
  }
  public set url(value: string | undefined) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
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
      auth_method: cdktf.stringToTerraform(this._authMethod),
      password: cdktf.stringToTerraform(this._password),
      secrets_file: cdktf.stringToTerraform(this._secretsFile),
      tenant: cdktf.stringToTerraform(this._tenant),
      url: cdktf.stringToTerraform(this._url),
      username: cdktf.stringToTerraform(this._username),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_method: {
        value: cdktf.stringToHclTerraform(this._authMethod),
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
      secrets_file: {
        value: cdktf.stringToHclTerraform(this._secretsFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant: {
        value: cdktf.stringToHclTerraform(this._tenant),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
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
