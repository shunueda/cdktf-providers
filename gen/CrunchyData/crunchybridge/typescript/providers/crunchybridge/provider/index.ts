// https://registry.terraform.io/providers/crunchydata/crunchybridge/0.3.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CrunchybridgeProviderConfig {
  /**
  * The application id component of the Crunchy Bridge API key. (deprecated)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crunchydata/crunchybridge/0.3.0/docs#application_id CrunchybridgeProvider#application_id}
  */
  readonly applicationId?: string;
  /**
  * The application secret component of the Crunchy Bridge API key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crunchydata/crunchybridge/0.3.0/docs#application_secret CrunchybridgeProvider#application_secret}
  */
  readonly applicationSecret: string;
  /**
  * The API URL for the Crunchy Bridge platform API. Most users should not need to change this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crunchydata/crunchybridge/0.3.0/docs#bridgeapi_url CrunchybridgeProvider#bridgeapi_url}
  */
  readonly bridgeapiUrl?: string;
  /**
  * When true, forces an exchange of the API key for a short-lived bearer token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crunchydata/crunchybridge/0.3.0/docs#require_token_swap CrunchybridgeProvider#require_token_swap}
  */
  readonly requireTokenSwap?: boolean | cdktf.IResolvable;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crunchydata/crunchybridge/0.3.0/docs#alias CrunchybridgeProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/crunchydata/crunchybridge/0.3.0/docs crunchybridge}
*/
export class CrunchybridgeProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "crunchybridge";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CrunchybridgeProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CrunchybridgeProvider to import
  * @param importFromId The id of the existing CrunchybridgeProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/crunchydata/crunchybridge/0.3.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CrunchybridgeProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "crunchybridge", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/crunchydata/crunchybridge/0.3.0/docs crunchybridge} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CrunchybridgeProviderConfig
  */
  public constructor(scope: Construct, id: string, config: CrunchybridgeProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'crunchybridge',
      terraformGeneratorMetadata: {
        providerName: 'crunchybridge',
        providerVersion: '0.3.0'
      },
      terraformProviderSource: 'CrunchyData/crunchybridge'
    });
    this._applicationId = config.applicationId;
    this._applicationSecret = config.applicationSecret;
    this._bridgeapiUrl = config.bridgeapiUrl;
    this._requireTokenSwap = config.requireTokenSwap;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_id - computed: false, optional: true, required: false
  private _applicationId?: string; 
  public get applicationId() {
    return this._applicationId;
  }
  public set applicationId(value: string | undefined) {
    this._applicationId = value;
  }
  public resetApplicationId() {
    this._applicationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // application_secret - computed: false, optional: false, required: true
  private _applicationSecret?: string; 
  public get applicationSecret() {
    return this._applicationSecret;
  }
  public set applicationSecret(value: string | undefined) {
    this._applicationSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationSecretInput() {
    return this._applicationSecret;
  }

  // bridgeapi_url - computed: false, optional: true, required: false
  private _bridgeapiUrl?: string; 
  public get bridgeapiUrl() {
    return this._bridgeapiUrl;
  }
  public set bridgeapiUrl(value: string | undefined) {
    this._bridgeapiUrl = value;
  }
  public resetBridgeapiUrl() {
    this._bridgeapiUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bridgeapiUrlInput() {
    return this._bridgeapiUrl;
  }

  // require_token_swap - computed: false, optional: true, required: false
  private _requireTokenSwap?: boolean | cdktf.IResolvable; 
  public get requireTokenSwap() {
    return this._requireTokenSwap;
  }
  public set requireTokenSwap(value: boolean | cdktf.IResolvable | undefined) {
    this._requireTokenSwap = value;
  }
  public resetRequireTokenSwap() {
    this._requireTokenSwap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireTokenSwapInput() {
    return this._requireTokenSwap;
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
      application_id: cdktf.stringToTerraform(this._applicationId),
      application_secret: cdktf.stringToTerraform(this._applicationSecret),
      bridgeapi_url: cdktf.stringToTerraform(this._bridgeapiUrl),
      require_token_swap: cdktf.booleanToTerraform(this._requireTokenSwap),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_id: {
        value: cdktf.stringToHclTerraform(this._applicationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application_secret: {
        value: cdktf.stringToHclTerraform(this._applicationSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bridgeapi_url: {
        value: cdktf.stringToHclTerraform(this._bridgeapiUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      require_token_swap: {
        value: cdktf.booleanToHclTerraform(this._requireTokenSwap),
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
