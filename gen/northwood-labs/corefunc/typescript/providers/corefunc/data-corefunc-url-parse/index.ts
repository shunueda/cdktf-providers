// https://registry.terraform.io/providers/northwood-labs/corefunc/2.1.0/docs/data-sources/url_parse
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCorefuncUrlParseConfig extends cdktf.TerraformMetaArguments {
  /**
  * The method by which the URL should be canonicalized. Allowed values: `standard`, `google_safe_browsing`. The default value is `standard`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/northwood-labs/corefunc/2.1.0/docs/data-sources/url_parse#canonicalizer DataCorefuncUrlParse#canonicalizer}
  */
  readonly canonicalizer?: string;
  /**
  * The absolute URL to parse according to the [WHATWG URL API](https://url.spec.whatwg.org/#api).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/northwood-labs/corefunc/2.1.0/docs/data-sources/url_parse#url DataCorefuncUrlParse#url}
  */
  readonly url: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/northwood-labs/corefunc/2.1.0/docs/data-sources/url_parse corefunc_url_parse}
*/
export class DataCorefuncUrlParse extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "corefunc_url_parse";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCorefuncUrlParse resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCorefuncUrlParse to import
  * @param importFromId The id of the existing DataCorefuncUrlParse that should be imported. Refer to the {@link https://registry.terraform.io/providers/northwood-labs/corefunc/2.1.0/docs/data-sources/url_parse#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCorefuncUrlParse to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "corefunc_url_parse", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/northwood-labs/corefunc/2.1.0/docs/data-sources/url_parse corefunc_url_parse} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCorefuncUrlParseConfig
  */
  public constructor(scope: Construct, id: string, config: DataCorefuncUrlParseConfig) {
    super(scope, id, {
      terraformResourceType: 'corefunc_url_parse',
      terraformGeneratorMetadata: {
        providerName: 'corefunc',
        providerVersion: '2.1.0',
        providerVersionConstraint: '2.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._canonicalizer = config.canonicalizer;
    this._url = config.url;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // canonicalizer - computed: false, optional: true, required: false
  private _canonicalizer?: string; 
  public get canonicalizer() {
    return this.getStringAttribute('canonicalizer');
  }
  public set canonicalizer(value: string) {
    this._canonicalizer = value;
  }
  public resetCanonicalizer() {
    this._canonicalizer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canonicalizerInput() {
    return this._canonicalizer;
  }

  // decoded_port - computed: true, optional: false, required: false
  public get decodedPort() {
    return this.getNumberAttribute('decoded_port');
  }

  // fragment - computed: true, optional: false, required: false
  public get fragment() {
    return this.getStringAttribute('fragment');
  }

  // hash - computed: true, optional: false, required: false
  public get hash() {
    return this.getStringAttribute('hash');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // normalized - computed: true, optional: false, required: false
  public get normalized() {
    return this.getStringAttribute('normalized');
  }

  // normalized_nofrag - computed: true, optional: false, required: false
  public get normalizedNofrag() {
    return this.getStringAttribute('normalized_nofrag');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // query - computed: true, optional: false, required: false
  public get query() {
    return this.getStringAttribute('query');
  }

  // scheme - computed: true, optional: false, required: false
  public get scheme() {
    return this.getStringAttribute('scheme');
  }

  // search - computed: true, optional: false, required: false
  public get search() {
    return this.getStringAttribute('search');
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      canonicalizer: cdktf.stringToTerraform(this._canonicalizer),
      url: cdktf.stringToTerraform(this._url),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      canonicalizer: {
        value: cdktf.stringToHclTerraform(this._canonicalizer),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
