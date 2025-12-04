// https://registry.terraform.io/providers/netlify/netlify/0.4.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetlifyProviderConfig {
  /**
  * The default team ID to use for resources that require a team ID or a team slug. Warning: Changing this value may not trigger recreation of resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.4.0/docs#default_team_id NetlifyProvider#default_team_id}
  */
  readonly defaultTeamId?: string;
  /**
  * The default team slug to use for resources that require a team ID or a team slug. Warning: Changing this value may not trigger recreation of resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.4.0/docs#default_team_slug NetlifyProvider#default_team_slug}
  */
  readonly defaultTeamSlug?: string;
  /**
  * Defaults to: https://api.netlify.com
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.4.0/docs#endpoint NetlifyProvider#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Read: https://docs.netlify.com/api/get-started/#authentication , will use the `NETLIFY_API_TOKEN` environment variable if not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.4.0/docs#token NetlifyProvider#token}
  */
  readonly token?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.4.0/docs#alias NetlifyProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netlify/netlify/0.4.0/docs netlify}
*/
export class NetlifyProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netlify";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetlifyProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetlifyProvider to import
  * @param importFromId The id of the existing NetlifyProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/netlify/netlify/0.4.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetlifyProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netlify", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netlify/netlify/0.4.0/docs netlify} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetlifyProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: NetlifyProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'netlify',
      terraformGeneratorMetadata: {
        providerName: 'netlify',
        providerVersion: '0.4.0',
        providerVersionConstraint: '0.4.0'
      },
      terraformProviderSource: 'netlify/netlify'
    });
    this._defaultTeamId = config.defaultTeamId;
    this._defaultTeamSlug = config.defaultTeamSlug;
    this._endpoint = config.endpoint;
    this._token = config.token;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_team_id - computed: false, optional: true, required: false
  private _defaultTeamId?: string; 
  public get defaultTeamId() {
    return this._defaultTeamId;
  }
  public set defaultTeamId(value: string | undefined) {
    this._defaultTeamId = value;
  }
  public resetDefaultTeamId() {
    this._defaultTeamId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTeamIdInput() {
    return this._defaultTeamId;
  }

  // default_team_slug - computed: false, optional: true, required: false
  private _defaultTeamSlug?: string; 
  public get defaultTeamSlug() {
    return this._defaultTeamSlug;
  }
  public set defaultTeamSlug(value: string | undefined) {
    this._defaultTeamSlug = value;
  }
  public resetDefaultTeamSlug() {
    this._defaultTeamSlug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTeamSlugInput() {
    return this._defaultTeamSlug;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this._endpoint;
  }
  public set endpoint(value: string | undefined) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this._token;
  }
  public set token(value: string | undefined) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
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
      default_team_id: cdktf.stringToTerraform(this._defaultTeamId),
      default_team_slug: cdktf.stringToTerraform(this._defaultTeamSlug),
      endpoint: cdktf.stringToTerraform(this._endpoint),
      token: cdktf.stringToTerraform(this._token),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_team_id: {
        value: cdktf.stringToHclTerraform(this._defaultTeamId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_team_slug: {
        value: cdktf.stringToHclTerraform(this._defaultTeamSlug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint: {
        value: cdktf.stringToHclTerraform(this._endpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token: {
        value: cdktf.stringToHclTerraform(this._token),
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
