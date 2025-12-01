// https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SpotinstProviderConfig {
  /**
  * Spotinst Account ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs#account SpotinstProvider#account}
  */
  readonly account?: string;
  /**
  * Enable or disable the Spotinst provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs#enabled SpotinstProvider#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Spotinst SDK Feature Flags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs#feature_flags SpotinstProvider#feature_flags}
  */
  readonly featureFlags?: string;
  /**
  * Spotinst Personal API Access Token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs#token SpotinstProvider#token}
  */
  readonly token?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs#alias SpotinstProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs spotinst}
*/
export class SpotinstProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spotinst";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SpotinstProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SpotinstProvider to import
  * @param importFromId The id of the existing SpotinstProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SpotinstProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "spotinst", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs spotinst} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SpotinstProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SpotinstProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'spotinst',
      terraformGeneratorMetadata: {
        providerName: 'spotinst',
        providerVersion: '1.231.0',
        providerVersionConstraint: '1.231.0'
      },
      terraformProviderSource: 'spotinst/spotinst'
    });
    this._account = config.account;
    this._enabled = config.enabled;
    this._featureFlags = config.featureFlags;
    this._token = config.token;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account - computed: false, optional: true, required: false
  private _account?: string; 
  public get account() {
    return this._account;
  }
  public set account(value: string | undefined) {
    this._account = value;
  }
  public resetAccount() {
    this._account = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this._enabled;
  }
  public set enabled(value: boolean | cdktf.IResolvable | undefined) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // feature_flags - computed: false, optional: true, required: false
  private _featureFlags?: string; 
  public get featureFlags() {
    return this._featureFlags;
  }
  public set featureFlags(value: string | undefined) {
    this._featureFlags = value;
  }
  public resetFeatureFlags() {
    this._featureFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureFlagsInput() {
    return this._featureFlags;
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
      account: cdktf.stringToTerraform(this._account),
      enabled: cdktf.booleanToTerraform(this._enabled),
      feature_flags: cdktf.stringToTerraform(this._featureFlags),
      token: cdktf.stringToTerraform(this._token),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account: {
        value: cdktf.stringToHclTerraform(this._account),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      feature_flags: {
        value: cdktf.stringToHclTerraform(this._featureFlags),
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
