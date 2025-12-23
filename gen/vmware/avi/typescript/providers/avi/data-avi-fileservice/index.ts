// https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/data-sources/fileservice
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAviFileserviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/data-sources/fileservice#id DataAviFileservice#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/data-sources/fileservice#local_file DataAviFileservice#local_file}
  */
  readonly localFile: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/data-sources/fileservice#upload DataAviFileservice#upload}
  */
  readonly upload?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/data-sources/fileservice#uri DataAviFileservice#uri}
  */
  readonly uri: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/data-sources/fileservice avi_fileservice}
*/
export class DataAviFileservice extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_fileservice";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAviFileservice resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAviFileservice to import
  * @param importFromId The id of the existing DataAviFileservice that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/data-sources/fileservice#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAviFileservice to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_fileservice", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/data-sources/fileservice avi_fileservice} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAviFileserviceConfig
  */
  public constructor(scope: Construct, id: string, config: DataAviFileserviceConfig) {
    super(scope, id, {
      terraformResourceType: 'avi_fileservice',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '31.2.1',
        providerVersionConstraint: '31.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._localFile = config.localFile;
    this._upload = config.upload;
    this._uri = config.uri;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // local_file - computed: false, optional: false, required: true
  private _localFile?: string; 
  public get localFile() {
    return this.getStringAttribute('local_file');
  }
  public set localFile(value: string) {
    this._localFile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localFileInput() {
    return this._localFile;
  }

  // upload - computed: false, optional: true, required: false
  private _upload?: boolean | cdktf.IResolvable; 
  public get upload() {
    return this.getBooleanAttribute('upload');
  }
  public set upload(value: boolean | cdktf.IResolvable) {
    this._upload = value;
  }
  public resetUpload() {
    this._upload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadInput() {
    return this._upload;
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      local_file: cdktf.stringToTerraform(this._localFile),
      upload: cdktf.booleanToTerraform(this._upload),
      uri: cdktf.stringToTerraform(this._uri),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_file: {
        value: cdktf.stringToHclTerraform(this._localFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upload: {
        value: cdktf.booleanToHclTerraform(this._upload),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      uri: {
        value: cdktf.stringToHclTerraform(this._uri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
