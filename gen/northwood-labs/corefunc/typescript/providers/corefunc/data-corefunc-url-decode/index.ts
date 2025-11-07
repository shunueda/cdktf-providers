// https://registry.terraform.io/providers/northwood-labs/corefunc/2.1.0/docs/data-sources/url_decode
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCorefuncUrlDecodeConfig extends cdktf.TerraformMetaArguments {
  /**
  * An encoded URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/northwood-labs/corefunc/2.1.0/docs/data-sources/url_decode#encoded_url DataCorefuncUrlDecode#encoded_url}
  */
  readonly encodedUrl: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/northwood-labs/corefunc/2.1.0/docs/data-sources/url_decode corefunc_url_decode}
*/
export class DataCorefuncUrlDecode extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "corefunc_url_decode";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCorefuncUrlDecode resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCorefuncUrlDecode to import
  * @param importFromId The id of the existing DataCorefuncUrlDecode that should be imported. Refer to the {@link https://registry.terraform.io/providers/northwood-labs/corefunc/2.1.0/docs/data-sources/url_decode#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCorefuncUrlDecode to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "corefunc_url_decode", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/northwood-labs/corefunc/2.1.0/docs/data-sources/url_decode corefunc_url_decode} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCorefuncUrlDecodeConfig
  */
  public constructor(scope: Construct, id: string, config: DataCorefuncUrlDecodeConfig) {
    super(scope, id, {
      terraformResourceType: 'corefunc_url_decode',
      terraformGeneratorMetadata: {
        providerName: 'corefunc',
        providerVersion: '2.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._encodedUrl = config.encodedUrl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // encoded_url - computed: false, optional: false, required: true
  private _encodedUrl?: string; 
  public get encodedUrl() {
    return this.getStringAttribute('encoded_url');
  }
  public set encodedUrl(value: string) {
    this._encodedUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get encodedUrlInput() {
    return this._encodedUrl;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      encoded_url: cdktf.stringToTerraform(this._encodedUrl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      encoded_url: {
        value: cdktf.stringToHclTerraform(this._encodedUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
