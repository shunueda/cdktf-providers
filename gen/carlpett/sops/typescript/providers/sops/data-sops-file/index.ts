// https://registry.terraform.io/providers/carlpett/sops/1.3.0/docs/data-sources/file
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSopsFileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Type of the input file: json, yaml, dotenv, ini, raw
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/carlpett/sops/1.3.0/docs/data-sources/file#input_type DataSopsFile#input_type}
  */
  readonly inputType?: string;
  /**
  * Path to the encrypted file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/carlpett/sops/1.3.0/docs/data-sources/file#source_file DataSopsFile#source_file}
  */
  readonly sourceFile: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/carlpett/sops/1.3.0/docs/data-sources/file sops_file}
*/
export class DataSopsFile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sops_file";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSopsFile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSopsFile to import
  * @param importFromId The id of the existing DataSopsFile that should be imported. Refer to the {@link https://registry.terraform.io/providers/carlpett/sops/1.3.0/docs/data-sources/file#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSopsFile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sops_file", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/carlpett/sops/1.3.0/docs/data-sources/file sops_file} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSopsFileConfig
  */
  public constructor(scope: Construct, id: string, config: DataSopsFileConfig) {
    super(scope, id, {
      terraformResourceType: 'sops_file',
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
    this._sourceFile = config.sourceFile;
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

  // source_file - computed: false, optional: false, required: true
  private _sourceFile?: string; 
  public get sourceFile() {
    return this.getStringAttribute('source_file');
  }
  public set sourceFile(value: string) {
    this._sourceFile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFileInput() {
    return this._sourceFile;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      input_type: cdktf.stringToTerraform(this._inputType),
      source_file: cdktf.stringToTerraform(this._sourceFile),
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
      source_file: {
        value: cdktf.stringToHclTerraform(this._sourceFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
