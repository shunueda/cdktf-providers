// https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/application_icon
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationIconConfig extends cdktf.TerraformMetaArguments {
  /**
  * Path to the icon file. Exactly one of `raw_data` and `file_path` is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/application_icon#file_path ApplicationIcon#file_path}
  */
  readonly filePath?: string;
  /**
  * Prepare an icon in ICO format and convert its binary raw data to base64 encoding. Use the base64 encoded string as the value of this attribute. Exactly one of `raw_data` and `file_path` is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/application_icon#raw_data ApplicationIcon#raw_data}
  */
  readonly rawData?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/application_icon citrix_application_icon}
*/
export class ApplicationIcon extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrix_application_icon";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplicationIcon resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplicationIcon to import
  * @param importFromId The id of the existing ApplicationIcon that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/application_icon#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplicationIcon to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrix_application_icon", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/application_icon citrix_application_icon} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationIconConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ApplicationIconConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrix_application_icon',
      terraformGeneratorMetadata: {
        providerName: 'citrix',
        providerVersion: '1.0.30',
        providerVersionConstraint: '1.0.30'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filePath = config.filePath;
    this._rawData = config.rawData;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // file_path - computed: false, optional: true, required: false
  private _filePath?: string; 
  public get filePath() {
    return this.getStringAttribute('file_path');
  }
  public set filePath(value: string) {
    this._filePath = value;
  }
  public resetFilePath() {
    this._filePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filePathInput() {
    return this._filePath;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // raw_data - computed: false, optional: true, required: false
  private _rawData?: string; 
  public get rawData() {
    return this.getStringAttribute('raw_data');
  }
  public set rawData(value: string) {
    this._rawData = value;
  }
  public resetRawData() {
    this._rawData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawDataInput() {
    return this._rawData;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      file_path: cdktf.stringToTerraform(this._filePath),
      raw_data: cdktf.stringToTerraform(this._rawData),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      file_path: {
        value: cdktf.stringToHclTerraform(this._filePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      raw_data: {
        value: cdktf.stringToHclTerraform(this._rawData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
