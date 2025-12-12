// https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.43/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ChainguardProviderConfig {
  /**
  * URL of Chainguard console API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.43/docs#console_api ChainguardProvider#console_api}
  */
  readonly consoleApi?: string;
  /**
  * An allowlist of version streams. Can be either
  * set in the provider or as the "CHAINGUARD_VERSION_ALLOW" environment
  * variable. When setting via an environment variable, the list must be
  * comma separated.
  * 
  * For example, if the resource returns the following versions:
  * 
  * - foo-1.0
  * - foo-1.1
  * - foo-1.2
  * 
  * And the allowlist is set to ["foo-1.0"], then the returned results will return
  * only the version stream "foo-1.0". This applies to both EOL and non EOL
  * version streams, and also affects the computed "is_latest" field to
  * only consider the filtered versions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.43/docs#version_stream_allows ChainguardProvider#version_stream_allows}
  */
  readonly versionStreamAllows?: string[];
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.43/docs#alias ChainguardProvider#alias}
  */
  readonly alias?: string;
  /**
  * login_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.43/docs#login_options ChainguardProvider#login_options}
  */
  readonly loginOptions?: ChainguardProviderLoginOptions;
}
export interface ChainguardProviderLoginOptions {
  /**
  * Auth0 social connection to use by default for OIDC token. Must be one of: google-oauth2, gitlab, github
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.43/docs#auth0_connection ChainguardProvider#auth0_connection}
  */
  readonly auth0Connection?: string;
  /**
  * Disable automatic login when Chainguard token is expired.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.43/docs#disabled ChainguardProvider#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Enable to use of refresh tokens when authenticating with an IdP (not compatible with identity_token authentication).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.43/docs#enable_refresh_tokens ChainguardProvider#enable_refresh_tokens}
  */
  readonly enableRefreshTokens?: boolean | cdktf.IResolvable;
  /**
  * UIDP of the identity to assume when exchanging OIDC token for Chainguard token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.43/docs#identity_id ChainguardProvider#identity_id}
  */
  readonly identityId?: string;
  /**
  * UIDP of the identity provider authenticate with for OIDC token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.43/docs#identity_provider_id ChainguardProvider#identity_provider_id}
  */
  readonly identityProviderId?: string;
  /**
  * A path to an OIDC identity token, or explicit identity token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.43/docs#identity_token ChainguardProvider#identity_token}
  */
  readonly identityToken?: string;
  /**
  * Verified organization name for determining identity provider to obtain OIDC token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.43/docs#organization_name ChainguardProvider#organization_name}
  */
  readonly organizationName?: string;
}

export function chainguardProviderLoginOptionsToTerraform(struct?: ChainguardProviderLoginOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth0_connection: cdktf.stringToTerraform(struct!.auth0Connection),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    enable_refresh_tokens: cdktf.booleanToTerraform(struct!.enableRefreshTokens),
    identity_id: cdktf.stringToTerraform(struct!.identityId),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
    identity_token: cdktf.stringToTerraform(struct!.identityToken),
    organization_name: cdktf.stringToTerraform(struct!.organizationName),
  }
}


export function chainguardProviderLoginOptionsToHclTerraform(struct?: ChainguardProviderLoginOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth0_connection: {
      value: cdktf.stringToHclTerraform(struct!.auth0Connection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_refresh_tokens: {
      value: cdktf.booleanToHclTerraform(struct!.enableRefreshTokens),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    identity_id: {
      value: cdktf.stringToHclTerraform(struct!.identityId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_provider_id: {
      value: cdktf.stringToHclTerraform(struct!.identityProviderId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_token: {
      value: cdktf.stringToHclTerraform(struct!.identityToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organization_name: {
      value: cdktf.stringToHclTerraform(struct!.organizationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.43/docs chainguard}
*/
export class ChainguardProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "chainguard";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ChainguardProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ChainguardProvider to import
  * @param importFromId The id of the existing ChainguardProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.43/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ChainguardProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "chainguard", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.43/docs chainguard} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ChainguardProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ChainguardProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'chainguard',
      terraformGeneratorMetadata: {
        providerName: 'chainguard',
        providerVersion: '0.1.43',
        providerVersionConstraint: '0.1.43'
      },
      terraformProviderSource: 'chainguard-dev/chainguard'
    });
    this._consoleApi = config.consoleApi;
    this._versionStreamAllows = config.versionStreamAllows;
    this._alias = config.alias;
    this._loginOptions = config.loginOptions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // console_api - computed: false, optional: true, required: false
  private _consoleApi?: string; 
  public get consoleApi() {
    return this._consoleApi;
  }
  public set consoleApi(value: string | undefined) {
    this._consoleApi = value;
  }
  public resetConsoleApi() {
    this._consoleApi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consoleApiInput() {
    return this._consoleApi;
  }

  // version_stream_allows - computed: false, optional: true, required: false
  private _versionStreamAllows?: string[]; 
  public get versionStreamAllows() {
    return this._versionStreamAllows;
  }
  public set versionStreamAllows(value: string[] | undefined) {
    this._versionStreamAllows = value;
  }
  public resetVersionStreamAllows() {
    this._versionStreamAllows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionStreamAllowsInput() {
    return this._versionStreamAllows;
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

  // login_options - computed: false, optional: true, required: false
  private _loginOptions?: ChainguardProviderLoginOptions; 
  public get loginOptions() {
    return this._loginOptions;
  }
  public set loginOptions(value: ChainguardProviderLoginOptions | undefined) {
    this._loginOptions = value;
  }
  public resetLoginOptions() {
    this._loginOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginOptionsInput() {
    return this._loginOptions;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      console_api: cdktf.stringToTerraform(this._consoleApi),
      version_stream_allows: cdktf.listMapper(cdktf.stringToTerraform, false)(this._versionStreamAllows),
      alias: cdktf.stringToTerraform(this._alias),
      login_options: chainguardProviderLoginOptionsToTerraform(this._loginOptions),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      console_api: {
        value: cdktf.stringToHclTerraform(this._consoleApi),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version_stream_allows: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._versionStreamAllows),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      login_options: {
        value: chainguardProviderLoginOptionsToHclTerraform(this._loginOptions),
        isBlock: true,
        type: "struct",
        storageClassType: "ChainguardProviderLoginOptions",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
