// https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KongProviderConfig {
  /**
  * A basic auth password for kong admin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs#kong_admin_password KongProvider#kong_admin_password}
  */
  readonly kongAdminPassword?: string;
  /**
  * API key for the kong api (Enterprise Edition)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs#kong_admin_token KongProvider#kong_admin_token}
  */
  readonly kongAdminToken?: string;
  /**
  * The address of the kong admin url e.g. http://localhost:8001
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs#kong_admin_uri KongProvider#kong_admin_uri}
  */
  readonly kongAdminUri?: string;
  /**
  * A basic auth user for kong admin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs#kong_admin_username KongProvider#kong_admin_username}
  */
  readonly kongAdminUsername?: string;
  /**
  * API key for the kong api (if you have locked it down)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs#kong_api_key KongProvider#kong_api_key}
  */
  readonly kongApiKey?: string;
  /**
  * Workspace context (Enterprise Edition)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs#kong_workspace KongProvider#kong_workspace}
  */
  readonly kongWorkspace?: string;
  /**
  * Should plugins `config_json` field strictly match plugin configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs#strict_plugins_match KongProvider#strict_plugins_match}
  */
  readonly strictPluginsMatch?: boolean | cdktf.IResolvable;
  /**
  * Whether to skip tls verify for https kong api endpoint using self signed or untrusted certs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs#tls_skip_verify KongProvider#tls_skip_verify}
  */
  readonly tlsSkipVerify?: boolean | cdktf.IResolvable;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs#alias KongProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs kong}
*/
export class KongProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kong";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KongProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KongProvider to import
  * @param importFromId The id of the existing KongProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KongProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kong", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs kong} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KongProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: KongProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'kong',
      terraformGeneratorMetadata: {
        providerName: 'kong',
        providerVersion: '8.1.0'
      },
      terraformProviderSource: 'granular-oss/kong'
    });
    this._kongAdminPassword = config.kongAdminPassword;
    this._kongAdminToken = config.kongAdminToken;
    this._kongAdminUri = config.kongAdminUri;
    this._kongAdminUsername = config.kongAdminUsername;
    this._kongApiKey = config.kongApiKey;
    this._kongWorkspace = config.kongWorkspace;
    this._strictPluginsMatch = config.strictPluginsMatch;
    this._tlsSkipVerify = config.tlsSkipVerify;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // kong_admin_password - computed: false, optional: true, required: false
  private _kongAdminPassword?: string; 
  public get kongAdminPassword() {
    return this._kongAdminPassword;
  }
  public set kongAdminPassword(value: string | undefined) {
    this._kongAdminPassword = value;
  }
  public resetKongAdminPassword() {
    this._kongAdminPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kongAdminPasswordInput() {
    return this._kongAdminPassword;
  }

  // kong_admin_token - computed: false, optional: true, required: false
  private _kongAdminToken?: string; 
  public get kongAdminToken() {
    return this._kongAdminToken;
  }
  public set kongAdminToken(value: string | undefined) {
    this._kongAdminToken = value;
  }
  public resetKongAdminToken() {
    this._kongAdminToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kongAdminTokenInput() {
    return this._kongAdminToken;
  }

  // kong_admin_uri - computed: false, optional: true, required: false
  private _kongAdminUri?: string; 
  public get kongAdminUri() {
    return this._kongAdminUri;
  }
  public set kongAdminUri(value: string | undefined) {
    this._kongAdminUri = value;
  }
  public resetKongAdminUri() {
    this._kongAdminUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kongAdminUriInput() {
    return this._kongAdminUri;
  }

  // kong_admin_username - computed: false, optional: true, required: false
  private _kongAdminUsername?: string; 
  public get kongAdminUsername() {
    return this._kongAdminUsername;
  }
  public set kongAdminUsername(value: string | undefined) {
    this._kongAdminUsername = value;
  }
  public resetKongAdminUsername() {
    this._kongAdminUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kongAdminUsernameInput() {
    return this._kongAdminUsername;
  }

  // kong_api_key - computed: false, optional: true, required: false
  private _kongApiKey?: string; 
  public get kongApiKey() {
    return this._kongApiKey;
  }
  public set kongApiKey(value: string | undefined) {
    this._kongApiKey = value;
  }
  public resetKongApiKey() {
    this._kongApiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kongApiKeyInput() {
    return this._kongApiKey;
  }

  // kong_workspace - computed: false, optional: true, required: false
  private _kongWorkspace?: string; 
  public get kongWorkspace() {
    return this._kongWorkspace;
  }
  public set kongWorkspace(value: string | undefined) {
    this._kongWorkspace = value;
  }
  public resetKongWorkspace() {
    this._kongWorkspace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kongWorkspaceInput() {
    return this._kongWorkspace;
  }

  // strict_plugins_match - computed: false, optional: true, required: false
  private _strictPluginsMatch?: boolean | cdktf.IResolvable; 
  public get strictPluginsMatch() {
    return this._strictPluginsMatch;
  }
  public set strictPluginsMatch(value: boolean | cdktf.IResolvable | undefined) {
    this._strictPluginsMatch = value;
  }
  public resetStrictPluginsMatch() {
    this._strictPluginsMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictPluginsMatchInput() {
    return this._strictPluginsMatch;
  }

  // tls_skip_verify - computed: false, optional: true, required: false
  private _tlsSkipVerify?: boolean | cdktf.IResolvable; 
  public get tlsSkipVerify() {
    return this._tlsSkipVerify;
  }
  public set tlsSkipVerify(value: boolean | cdktf.IResolvable | undefined) {
    this._tlsSkipVerify = value;
  }
  public resetTlsSkipVerify() {
    this._tlsSkipVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsSkipVerifyInput() {
    return this._tlsSkipVerify;
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
      kong_admin_password: cdktf.stringToTerraform(this._kongAdminPassword),
      kong_admin_token: cdktf.stringToTerraform(this._kongAdminToken),
      kong_admin_uri: cdktf.stringToTerraform(this._kongAdminUri),
      kong_admin_username: cdktf.stringToTerraform(this._kongAdminUsername),
      kong_api_key: cdktf.stringToTerraform(this._kongApiKey),
      kong_workspace: cdktf.stringToTerraform(this._kongWorkspace),
      strict_plugins_match: cdktf.booleanToTerraform(this._strictPluginsMatch),
      tls_skip_verify: cdktf.booleanToTerraform(this._tlsSkipVerify),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      kong_admin_password: {
        value: cdktf.stringToHclTerraform(this._kongAdminPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kong_admin_token: {
        value: cdktf.stringToHclTerraform(this._kongAdminToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kong_admin_uri: {
        value: cdktf.stringToHclTerraform(this._kongAdminUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kong_admin_username: {
        value: cdktf.stringToHclTerraform(this._kongAdminUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kong_api_key: {
        value: cdktf.stringToHclTerraform(this._kongApiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kong_workspace: {
        value: cdktf.stringToHclTerraform(this._kongWorkspace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      strict_plugins_match: {
        value: cdktf.booleanToHclTerraform(this._strictPluginsMatch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tls_skip_verify: {
        value: cdktf.booleanToHclTerraform(this._tlsSkipVerify),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
