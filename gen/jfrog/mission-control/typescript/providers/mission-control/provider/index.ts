// https://registry.terraform.io/providers/jfrog/mission-control/1.1.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MissionControlProviderConfig {
  /**
  * This is a access token that can be given to you by your admin under `Platform Configuration -> User Management -> Access Tokens`. This can also be sourced from the `JFROG_ACCESS_TOKEN` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/mission-control/1.1.0/docs#access_token MissionControlProvider#access_token}
  */
  readonly accessToken?: string;
  /**
  * OIDC provider name. See [Configure an OIDC Integration](https://jfrog.com/help/r/jfrog-platform-administration-documentation/configure-an-oidc-integration) for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/mission-control/1.1.0/docs#oidc_provider_name MissionControlProvider#oidc_provider_name}
  */
  readonly oidcProviderName?: string;
  /**
  * Terraform Cloud Workload Identity Token tag name. Use for generating multiple TFC workload identity tokens. When set, the provider will attempt to use env var with this tag name as suffix. **Note:** this is case sensitive, so if set to `JFROG`, then env var `TFC_WORKLOAD_IDENTITY_TOKEN_JFROG` is used instead of `TFC_WORKLOAD_IDENTITY_TOKEN`. See [Generating Multiple Tokens](https://developer.hashicorp.com/terraform/cloud-docs/workspaces/dynamic-provider-credentials/manual-generation#generating-multiple-tokens) on HCP Terraform for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/mission-control/1.1.0/docs#tfc_credential_tag_name MissionControlProvider#tfc_credential_tag_name}
  */
  readonly tfcCredentialTagName?: string;
  /**
  * JFrog Platform URL. This can also be sourced from the `JFROG_URL` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/mission-control/1.1.0/docs#url MissionControlProvider#url}
  */
  readonly url?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/mission-control/1.1.0/docs#alias MissionControlProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/mission-control/1.1.0/docs mission-control}
*/
export class MissionControlProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mission-control";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MissionControlProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MissionControlProvider to import
  * @param importFromId The id of the existing MissionControlProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/mission-control/1.1.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MissionControlProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mission-control", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/mission-control/1.1.0/docs mission-control} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MissionControlProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: MissionControlProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'mission-control',
      terraformGeneratorMetadata: {
        providerName: 'mission-control',
        providerVersion: '1.1.0',
        providerVersionConstraint: '1.1.0'
      },
      terraformProviderSource: 'jfrog/mission-control'
    });
    this._accessToken = config.accessToken;
    this._oidcProviderName = config.oidcProviderName;
    this._tfcCredentialTagName = config.tfcCredentialTagName;
    this._url = config.url;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_token - computed: false, optional: true, required: false
  private _accessToken?: string; 
  public get accessToken() {
    return this._accessToken;
  }
  public set accessToken(value: string | undefined) {
    this._accessToken = value;
  }
  public resetAccessToken() {
    this._accessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken;
  }

  // oidc_provider_name - computed: false, optional: true, required: false
  private _oidcProviderName?: string; 
  public get oidcProviderName() {
    return this._oidcProviderName;
  }
  public set oidcProviderName(value: string | undefined) {
    this._oidcProviderName = value;
  }
  public resetOidcProviderName() {
    this._oidcProviderName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcProviderNameInput() {
    return this._oidcProviderName;
  }

  // tfc_credential_tag_name - computed: false, optional: true, required: false
  private _tfcCredentialTagName?: string; 
  public get tfcCredentialTagName() {
    return this._tfcCredentialTagName;
  }
  public set tfcCredentialTagName(value: string | undefined) {
    this._tfcCredentialTagName = value;
  }
  public resetTfcCredentialTagName() {
    this._tfcCredentialTagName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tfcCredentialTagNameInput() {
    return this._tfcCredentialTagName;
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
      access_token: cdktf.stringToTerraform(this._accessToken),
      oidc_provider_name: cdktf.stringToTerraform(this._oidcProviderName),
      tfc_credential_tag_name: cdktf.stringToTerraform(this._tfcCredentialTagName),
      url: cdktf.stringToTerraform(this._url),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_token: {
        value: cdktf.stringToHclTerraform(this._accessToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_provider_name: {
        value: cdktf.stringToHclTerraform(this._oidcProviderName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tfc_credential_tag_name: {
        value: cdktf.stringToHclTerraform(this._tfcCredentialTagName),
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
