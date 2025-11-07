// https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConfigcatProviderConfig {
  /**
  * ConfigCat Public Management API's `base_path`. Defaults to [https://api.configcat.com](https://api.configcat.com).  This can also be sourced from the `CONFIGCAT_BASE_PATH` Environment Variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs#base_path ConfigcatProvider#base_path}
  */
  readonly basePath?: string;
  /**
  * Get your `basic_auth_password` at [ConfigCat Public API credentials](https://app.configcat.com/my-account/public-api-credentials).  This can also be sourced from the `CONFIGCAT_BASIC_AUTH_PASSWORD` Environment Variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs#basic_auth_password ConfigcatProvider#basic_auth_password}
  */
  readonly basicAuthPassword?: string;
  /**
  * Get your `basic_auth_username` at [ConfigCat Public API credentials](https://app.configcat.com/my-account/public-api-credentials).  This can also be sourced from the `CONFIGCAT_BASIC_AUTH_USERNAME` Environment Variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs#basic_auth_username ConfigcatProvider#basic_auth_username}
  */
  readonly basicAuthUsername?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs#alias ConfigcatProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs configcat}
*/
export class ConfigcatProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "configcat";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConfigcatProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConfigcatProvider to import
  * @param importFromId The id of the existing ConfigcatProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConfigcatProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "configcat", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs configcat} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfigcatProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ConfigcatProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'configcat',
      terraformGeneratorMetadata: {
        providerName: 'configcat',
        providerVersion: '5.6.0'
      },
      terraformProviderSource: 'configcat/configcat'
    });
    this._basePath = config.basePath;
    this._basicAuthPassword = config.basicAuthPassword;
    this._basicAuthUsername = config.basicAuthUsername;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base_path - computed: false, optional: true, required: false
  private _basePath?: string; 
  public get basePath() {
    return this._basePath;
  }
  public set basePath(value: string | undefined) {
    this._basePath = value;
  }
  public resetBasePath() {
    this._basePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basePathInput() {
    return this._basePath;
  }

  // basic_auth_password - computed: false, optional: true, required: false
  private _basicAuthPassword?: string; 
  public get basicAuthPassword() {
    return this._basicAuthPassword;
  }
  public set basicAuthPassword(value: string | undefined) {
    this._basicAuthPassword = value;
  }
  public resetBasicAuthPassword() {
    this._basicAuthPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthPasswordInput() {
    return this._basicAuthPassword;
  }

  // basic_auth_username - computed: false, optional: true, required: false
  private _basicAuthUsername?: string; 
  public get basicAuthUsername() {
    return this._basicAuthUsername;
  }
  public set basicAuthUsername(value: string | undefined) {
    this._basicAuthUsername = value;
  }
  public resetBasicAuthUsername() {
    this._basicAuthUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthUsernameInput() {
    return this._basicAuthUsername;
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
      base_path: cdktf.stringToTerraform(this._basePath),
      basic_auth_password: cdktf.stringToTerraform(this._basicAuthPassword),
      basic_auth_username: cdktf.stringToTerraform(this._basicAuthUsername),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      base_path: {
        value: cdktf.stringToHclTerraform(this._basePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      basic_auth_password: {
        value: cdktf.stringToHclTerraform(this._basicAuthPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      basic_auth_username: {
        value: cdktf.stringToHclTerraform(this._basicAuthUsername),
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
