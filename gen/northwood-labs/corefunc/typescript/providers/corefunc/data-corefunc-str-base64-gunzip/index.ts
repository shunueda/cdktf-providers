// https://registry.terraform.io/providers/northwood-labs/corefunc/2.2.1/docs/data-sources/str_base64_gunzip
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCorefuncStrBase64GunzipConfig extends cdktf.TerraformMetaArguments {
  /**
  * A string of gzipped then Base64-encoded data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/northwood-labs/corefunc/2.2.1/docs/data-sources/str_base64_gunzip#gzipped_base64 DataCorefuncStrBase64Gunzip#gzipped_base64}
  */
  readonly gzippedBase64: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/northwood-labs/corefunc/2.2.1/docs/data-sources/str_base64_gunzip corefunc_str_base64_gunzip}
*/
export class DataCorefuncStrBase64Gunzip extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "corefunc_str_base64_gunzip";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCorefuncStrBase64Gunzip resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCorefuncStrBase64Gunzip to import
  * @param importFromId The id of the existing DataCorefuncStrBase64Gunzip that should be imported. Refer to the {@link https://registry.terraform.io/providers/northwood-labs/corefunc/2.2.1/docs/data-sources/str_base64_gunzip#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCorefuncStrBase64Gunzip to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "corefunc_str_base64_gunzip", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/northwood-labs/corefunc/2.2.1/docs/data-sources/str_base64_gunzip corefunc_str_base64_gunzip} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCorefuncStrBase64GunzipConfig
  */
  public constructor(scope: Construct, id: string, config: DataCorefuncStrBase64GunzipConfig) {
    super(scope, id, {
      terraformResourceType: 'corefunc_str_base64_gunzip',
      terraformGeneratorMetadata: {
        providerName: 'corefunc',
        providerVersion: '2.2.1',
        providerVersionConstraint: '2.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._gzippedBase64 = config.gzippedBase64;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // gzipped_base64 - computed: false, optional: false, required: true
  private _gzippedBase64?: string; 
  public get gzippedBase64() {
    return this.getStringAttribute('gzipped_base64');
  }
  public set gzippedBase64(value: string) {
    this._gzippedBase64 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gzippedBase64Input() {
    return this._gzippedBase64;
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
      gzipped_base64: cdktf.stringToTerraform(this._gzippedBase64),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      gzipped_base64: {
        value: cdktf.stringToHclTerraform(this._gzippedBase64),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
