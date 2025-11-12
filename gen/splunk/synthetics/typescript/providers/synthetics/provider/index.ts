// https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SyntheticsProviderConfig {
  /**
  * Splunk Observability API Key. Will pull from `OBSERVABILITY_API_TOKEN` environment variable if available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs#apikey SyntheticsProvider#apikey}
  */
  readonly apikey: string;
  /**
  * Splunk Observability Realm API Endpoint (E.G. `https://api.<REALM>.signalfx.com`). Will pull from `API_URL` environment variable if available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs#apiurl SyntheticsProvider#apiurl}
  */
  readonly apiurl?: string;
  /**
  * One of: `observability` or `rigor`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs#product SyntheticsProvider#product}
  */
  readonly product: string;
  /**
  * Splunk Observability Realm (E.G. `us1`). Will pull from `REALM` environment variable if available. For Rigor use realm rigor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs#realm SyntheticsProvider#realm}
  */
  readonly realm: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs#alias SyntheticsProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs synthetics}
*/
export class SyntheticsProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "synthetics";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SyntheticsProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SyntheticsProvider to import
  * @param importFromId The id of the existing SyntheticsProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SyntheticsProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "synthetics", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs synthetics} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SyntheticsProviderConfig
  */
  public constructor(scope: Construct, id: string, config: SyntheticsProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'synthetics',
      terraformGeneratorMetadata: {
        providerName: 'synthetics',
        providerVersion: '2.0.16',
        providerVersionConstraint: '2.0.16'
      },
      terraformProviderSource: 'splunk/synthetics'
    });
    this._apikey = config.apikey;
    this._apiurl = config.apiurl;
    this._product = config.product;
    this._realm = config.realm;
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

  // apiurl - computed: false, optional: true, required: false
  private _apiurl?: string; 
  public get apiurl() {
    return this._apiurl;
  }
  public set apiurl(value: string | undefined) {
    this._apiurl = value;
  }
  public resetApiurl() {
    this._apiurl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiurlInput() {
    return this._apiurl;
  }

  // product - computed: false, optional: false, required: true
  private _product?: string; 
  public get product() {
    return this._product;
  }
  public set product(value: string | undefined) {
    this._product = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productInput() {
    return this._product;
  }

  // realm - computed: false, optional: false, required: true
  private _realm?: string; 
  public get realm() {
    return this._realm;
  }
  public set realm(value: string | undefined) {
    this._realm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get realmInput() {
    return this._realm;
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
      apiurl: cdktf.stringToTerraform(this._apiurl),
      product: cdktf.stringToTerraform(this._product),
      realm: cdktf.stringToTerraform(this._realm),
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
      apiurl: {
        value: cdktf.stringToHclTerraform(this._apiurl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      product: {
        value: cdktf.stringToHclTerraform(this._product),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      realm: {
        value: cdktf.stringToHclTerraform(this._realm),
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
