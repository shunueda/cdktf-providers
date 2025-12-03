// https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BloxoneProviderConfig {
  /**
  * API key for accessing the BloxOne API. Can also be configured by using the `BLOXONE_API_KEY` environment variable. https://docs.infoblox.com/space/BloxOneCloud/35430405/Configuring+User+API+Keys
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs#api_key BloxoneProvider#api_key}
  */
  readonly apiKey?: string;
  /**
  * URL for BloxOne Cloud Services Portal. Can also be configured using the `BLOXONE_CSP_URL` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs#csp_url BloxoneProvider#csp_url}
  */
  readonly cspUrl?: string;
  /**
  * Tags to default for all resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs#default_tags BloxoneProvider#default_tags}
  */
  readonly defaultTags?: { [key: string]: string };
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs#alias BloxoneProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs bloxone}
*/
export class BloxoneProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bloxone";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BloxoneProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BloxoneProvider to import
  * @param importFromId The id of the existing BloxoneProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BloxoneProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bloxone", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs bloxone} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BloxoneProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: BloxoneProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'bloxone',
      terraformGeneratorMetadata: {
        providerName: 'bloxone',
        providerVersion: '1.5.4',
        providerVersionConstraint: '1.5.4'
      },
      terraformProviderSource: 'infobloxopen/bloxone'
    });
    this._apiKey = config.apiKey;
    this._cspUrl = config.cspUrl;
    this._defaultTags = config.defaultTags;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this._apiKey;
  }
  public set apiKey(value: string | undefined) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // csp_url - computed: false, optional: true, required: false
  private _cspUrl?: string; 
  public get cspUrl() {
    return this._cspUrl;
  }
  public set cspUrl(value: string | undefined) {
    this._cspUrl = value;
  }
  public resetCspUrl() {
    this._cspUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cspUrlInput() {
    return this._cspUrl;
  }

  // default_tags - computed: false, optional: true, required: false
  private _defaultTags?: { [key: string]: string }; 
  public get defaultTags() {
    return this._defaultTags;
  }
  public set defaultTags(value: { [key: string]: string } | undefined) {
    this._defaultTags = value;
  }
  public resetDefaultTags() {
    this._defaultTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTagsInput() {
    return this._defaultTags;
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
      api_key: cdktf.stringToTerraform(this._apiKey),
      csp_url: cdktf.stringToTerraform(this._cspUrl),
      default_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._defaultTags),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_key: {
        value: cdktf.stringToHclTerraform(this._apiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      csp_url: {
        value: cdktf.stringToHclTerraform(this._cspUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._defaultTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
