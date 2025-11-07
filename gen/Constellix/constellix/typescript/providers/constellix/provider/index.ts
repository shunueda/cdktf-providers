// https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConstellixProviderConfig {
  /**
  * API key for HTTP call
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs#apikey ConstellixProvider#apikey}
  */
  readonly apikey: string;
  /**
  * Allows insecure HTTPS client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs#insecure ConstellixProvider#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * Proxy server URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs#proxyurl ConstellixProvider#proxyurl}
  */
  readonly proxyurl?: string;
  /**
  * Secret Key for HMAC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs#secretkey ConstellixProvider#secretkey}
  */
  readonly secretkey: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs#alias ConstellixProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs constellix}
*/
export class ConstellixProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "constellix";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConstellixProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConstellixProvider to import
  * @param importFromId The id of the existing ConstellixProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConstellixProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "constellix", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs constellix} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConstellixProviderConfig
  */
  public constructor(scope: Construct, id: string, config: ConstellixProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'constellix',
      terraformGeneratorMetadata: {
        providerName: 'constellix',
        providerVersion: '0.4.6'
      },
      terraformProviderSource: 'Constellix/constellix'
    });
    this._apikey = config.apikey;
    this._insecure = config.insecure;
    this._proxyurl = config.proxyurl;
    this._secretkey = config.secretkey;
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

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean | cdktf.IResolvable; 
  public get insecure() {
    return this._insecure;
  }
  public set insecure(value: boolean | cdktf.IResolvable | undefined) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
  }

  // proxyurl - computed: false, optional: true, required: false
  private _proxyurl?: string; 
  public get proxyurl() {
    return this._proxyurl;
  }
  public set proxyurl(value: string | undefined) {
    this._proxyurl = value;
  }
  public resetProxyurl() {
    this._proxyurl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyurlInput() {
    return this._proxyurl;
  }

  // secretkey - computed: false, optional: false, required: true
  private _secretkey?: string; 
  public get secretkey() {
    return this._secretkey;
  }
  public set secretkey(value: string | undefined) {
    this._secretkey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretkeyInput() {
    return this._secretkey;
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
      insecure: cdktf.booleanToTerraform(this._insecure),
      proxyurl: cdktf.stringToTerraform(this._proxyurl),
      secretkey: cdktf.stringToTerraform(this._secretkey),
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
      insecure: {
        value: cdktf.booleanToHclTerraform(this._insecure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      proxyurl: {
        value: cdktf.stringToHclTerraform(this._proxyurl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secretkey: {
        value: cdktf.stringToHclTerraform(this._secretkey),
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
