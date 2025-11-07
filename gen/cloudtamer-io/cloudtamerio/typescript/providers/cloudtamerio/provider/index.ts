// https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudtamerioProviderConfig {
  /**
  * The API key generated from cloudtamer.io. Example: app_1_XXXXXXXXXXXX.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs#apikey CloudtamerioProvider#apikey}
  */
  readonly apikey: string;
  /**
  * If true, will skip SSL validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs#skipsslvalidation CloudtamerioProvider#skipsslvalidation}
  */
  readonly skipsslvalidation?: boolean | cdktf.IResolvable;
  /**
  * The URL of a cloudtamer.io installation. Example: https://cloudtamerio.example.com.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs#url CloudtamerioProvider#url}
  */
  readonly url: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs#alias CloudtamerioProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs cloudtamerio}
*/
export class CloudtamerioProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudtamerio";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudtamerioProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudtamerioProvider to import
  * @param importFromId The id of the existing CloudtamerioProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudtamerioProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudtamerio", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs cloudtamerio} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudtamerioProviderConfig
  */
  public constructor(scope: Construct, id: string, config: CloudtamerioProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudtamerio',
      terraformGeneratorMetadata: {
        providerName: 'cloudtamerio',
        providerVersion: '0.2.0'
      },
      terraformProviderSource: 'cloudtamer-io/cloudtamerio'
    });
    this._apikey = config.apikey;
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
