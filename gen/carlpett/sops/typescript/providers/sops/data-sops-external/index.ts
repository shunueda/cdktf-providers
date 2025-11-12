// https://registry.terraform.io/providers/carlpett/sops/1.3.0/docs/data-sources/external
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSopsExternalConfig extends cdktf.TerraformMetaArguments {
  /**
  * Type of the input data: json, yaml, dotenv, ini, raw
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/carlpett/sops/1.3.0/docs/data-sources/external#input_type DataSopsExternal#input_type}
  */
  readonly inputType?: string;
  /**
  * A string with sops-encrypted data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/carlpett/sops/1.3.0/docs/data-sources/external#source DataSopsExternal#source}
  */
  readonly source: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/carlpett/sops/1.3.0/docs/data-sources/external sops_external}
*/
export class DataSopsExternal extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sops_external";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSopsExternal resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSopsExternal to import
  * @param importFromId The id of the existing DataSopsExternal that should be imported. Refer to the {@link https://registry.terraform.io/providers/carlpett/sops/1.3.0/docs/data-sources/external#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSopsExternal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sops_external", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/carlpett/sops/1.3.0/docs/data-sources/external sops_external} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSopsExternalConfig
  */
  public constructor(scope: Construct, id: string, config: DataSopsExternalConfig) {
    super(scope, id, {
      terraformResourceType: 'sops_external',
      terraformGeneratorMetadata: {
        providerName: 'sops',
        providerVersion: '1.3.0',
        providerVersionConstraint: '1.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._inputType = config.inputType;
    this._source = config.source;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data - computed: true, optional: false, required: false
  private _data = new cdktf.StringMap(this, "data");
  public get data() {
    return this._data;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // input_type - computed: false, optional: true, required: false
  private _inputType?: string; 
  public get inputType() {
    return this.getStringAttribute('input_type');
  }
  public set inputType(value: string) {
    this._inputType = value;
  }
  public resetInputType() {
    this._inputType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputTypeInput() {
    return this._inputType;
  }

  // raw - computed: true, optional: false, required: false
  public get raw() {
    return this.getStringAttribute('raw');
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      input_type: cdktf.stringToTerraform(this._inputType),
      source: cdktf.stringToTerraform(this._source),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      input_type: {
        value: cdktf.stringToHclTerraform(this._inputType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source: {
        value: cdktf.stringToHclTerraform(this._source),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
