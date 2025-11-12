// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/systemfile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/systemfile#filecontent Systemfile#filecontent}
  */
  readonly filecontent: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/systemfile#fileencoding Systemfile#fileencoding}
  */
  readonly fileencoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/systemfile#filelocation Systemfile#filelocation}
  */
  readonly filelocation: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/systemfile#filename Systemfile#filename}
  */
  readonly filename: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/systemfile#id Systemfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/systemfile citrixadc_systemfile}
*/
export class Systemfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_systemfile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Systemfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Systemfile to import
  * @param importFromId The id of the existing Systemfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/systemfile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Systemfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_systemfile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/systemfile citrixadc_systemfile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemfileConfig
  */
  public constructor(scope: Construct, id: string, config: SystemfileConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_systemfile',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.0.0',
        providerVersionConstraint: '2.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filecontent = config.filecontent;
    this._fileencoding = config.fileencoding;
    this._filelocation = config.filelocation;
    this._filename = config.filename;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filecontent - computed: false, optional: false, required: true
  private _filecontent?: string; 
  public get filecontent() {
    return this.getStringAttribute('filecontent');
  }
  public set filecontent(value: string) {
    this._filecontent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filecontentInput() {
    return this._filecontent;
  }

  // fileencoding - computed: false, optional: true, required: false
  private _fileencoding?: string; 
  public get fileencoding() {
    return this.getStringAttribute('fileencoding');
  }
  public set fileencoding(value: string) {
    this._fileencoding = value;
  }
  public resetFileencoding() {
    this._fileencoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileencodingInput() {
    return this._fileencoding;
  }

  // filelocation - computed: false, optional: false, required: true
  private _filelocation?: string; 
  public get filelocation() {
    return this.getStringAttribute('filelocation');
  }
  public set filelocation(value: string) {
    this._filelocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filelocationInput() {
    return this._filelocation;
  }

  // filename - computed: false, optional: false, required: true
  private _filename?: string; 
  public get filename() {
    return this.getStringAttribute('filename');
  }
  public set filename(value: string) {
    this._filename = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameInput() {
    return this._filename;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filecontent: cdktf.stringToTerraform(this._filecontent),
      fileencoding: cdktf.stringToTerraform(this._fileencoding),
      filelocation: cdktf.stringToTerraform(this._filelocation),
      filename: cdktf.stringToTerraform(this._filename),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filecontent: {
        value: cdktf.stringToHclTerraform(this._filecontent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fileencoding: {
        value: cdktf.stringToHclTerraform(this._fileencoding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filelocation: {
        value: cdktf.stringToHclTerraform(this._filelocation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filename: {
        value: cdktf.stringToHclTerraform(this._filename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
