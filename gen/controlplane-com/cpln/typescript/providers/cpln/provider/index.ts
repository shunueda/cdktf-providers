// https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CplnProviderConfig {
  /**
  * The Control Plane Data Service API endpoint. Default is: https://api.cpln.io. Can be specified with the CPLN_ENDPOINT environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs#endpoint CplnProvider#endpoint}
  */
  readonly endpoint?: string;
  /**
  * The Control Plane org that this provider will perform actions against. Can be specified with the CPLN_ORG environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs#org CplnProvider#org}
  */
  readonly org?: string;
  /**
  * The user/service account profile that this provider will use to authenticate to the data service. Can be specified with the CPLN_PROFILE environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs#profile CplnProvider#profile}
  */
  readonly profile?: string;
  /**
  * A generated token that can be used to authenticate to the data service API. Can be specified with the CPLN_REFRESH_TOKEN environment variable. Used when the provider is required to create an org or update the auth_config property. Refer to the section above on how to obtain the refresh token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs#refresh_token CplnProvider#refresh_token}
  */
  readonly refreshToken?: string;
  /**
  * A generated token that can be used to authenticate to the data service API. Can be specified with the CPLN_TOKEN environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs#token CplnProvider#token}
  */
  readonly token?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs#alias CplnProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs cpln}
*/
export class CplnProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cpln";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CplnProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CplnProvider to import
  * @param importFromId The id of the existing CplnProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CplnProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cpln", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs cpln} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CplnProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CplnProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'cpln',
      terraformGeneratorMetadata: {
        providerName: 'cpln',
        providerVersion: '1.2.15',
        providerVersionConstraint: '1.2.15'
      },
      terraformProviderSource: 'controlplane-com/cpln'
    });
    this._endpoint = config.endpoint;
    this._org = config.org;
    this._profile = config.profile;
    this._refreshToken = config.refreshToken;
    this._token = config.token;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // org - computed: false, optional: true, required: false
  private _org?: string; 
  public get org() {
    return this._org;
  }
  public set org(value: string | undefined) {
    this._org = value;
  }
  public resetOrg() {
    this._org = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgInput() {
    return this._org;
  }

  // profile - computed: false, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this._profile;
  }
  public set profile(value: string | undefined) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }

  // refresh_token - computed: false, optional: true, required: false
  private _refreshToken?: string; 
  public get refreshToken() {
    return this._refreshToken;
  }
  public set refreshToken(value: string | undefined) {
    this._refreshToken = value;
  }
  public resetRefreshToken() {
    this._refreshToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenInput() {
    return this._refreshToken;
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
      endpoint: cdktf.stringToTerraform(this._endpoint),
      org: cdktf.stringToTerraform(this._org),
      profile: cdktf.stringToTerraform(this._profile),
      refresh_token: cdktf.stringToTerraform(this._refreshToken),
      token: cdktf.stringToTerraform(this._token),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      endpoint: {
        value: cdktf.stringToHclTerraform(this._endpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org: {
        value: cdktf.stringToHclTerraform(this._org),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile: {
        value: cdktf.stringToHclTerraform(this._profile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      refresh_token: {
        value: cdktf.stringToHclTerraform(this._refreshToken),
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
