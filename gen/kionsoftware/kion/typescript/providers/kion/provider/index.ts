// https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KionProviderConfig {
  /**
  * The API key generated from Kion. Example: app_1_XXXXXXXXXXXX.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs#apikey KionProvider#apikey}
  */
  readonly apikey: string;
  /**
  * The base path of the API. Defaults to /api
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs#apipath KionProvider#apipath}
  */
  readonly apipath?: string;
  /**
  * If true, will skip SSL validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs#skipsslvalidation KionProvider#skipsslvalidation}
  */
  readonly skipsslvalidation?: boolean | cdktf.IResolvable;
  /**
  * The URL of a Kion installation. Example: https://kion.example.com.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs#url KionProvider#url}
  */
  readonly url: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs#alias KionProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs kion}
*/
export class KionProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kion";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KionProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KionProvider to import
  * @param importFromId The id of the existing KionProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KionProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kion", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs kion} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KionProviderConfig
  */
  public constructor(scope: Construct, id: string, config: KionProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'kion',
      terraformGeneratorMetadata: {
        providerName: 'kion',
        providerVersion: '0.3.30',
        providerVersionConstraint: '0.3.30'
      },
      terraformProviderSource: 'kionsoftware/kion'
    });
    this._apikey = config.apikey;
    this._apipath = config.apipath;
    this._skipsslvalidation = config.skipsslvalidation;
    this._url = config.url;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apikey - computed: false, optional: false, required: true
  private _apikey?: string; 
  public get apikey() {
    return this._apikey;
  }
  public set apikey(value: string | undefined) {
    this._apikey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apikeyInput() {
    return this._apikey;
  }

  // apipath - computed: false, optional: true, required: false
  private _apipath?: string; 
  public get apipath() {
    return this._apipath;
  }
  public set apipath(value: string | undefined) {
    this._apipath = value;
  }
  public resetApipath() {
    this._apipath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apipathInput() {
    return this._apipath;
  }

  // skipsslvalidation - computed: false, optional: true, required: false
  private _skipsslvalidation?: boolean | cdktf.IResolvable; 
  public get skipsslvalidation() {
    return this._skipsslvalidation;
  }
  public set skipsslvalidation(value: boolean | cdktf.IResolvable | undefined) {
    this._skipsslvalidation = value;
  }
  public resetSkipsslvalidation() {
    this._skipsslvalidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipsslvalidationInput() {
    return this._skipsslvalidation;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this._url;
  }
  public set url(value: string | undefined) {
    this._url = value;
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
      apikey: cdktf.stringToTerraform(this._apikey),
      apipath: cdktf.stringToTerraform(this._apipath),
      skipsslvalidation: cdktf.booleanToTerraform(this._skipsslvalidation),
      url: cdktf.stringToTerraform(this._url),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      apikey: {
        value: cdktf.stringToHclTerraform(this._apikey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      apipath: {
        value: cdktf.stringToHclTerraform(this._apipath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skipsslvalidation: {
        value: cdktf.booleanToHclTerraform(this._skipsslvalidation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
