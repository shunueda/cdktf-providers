// https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/file_upload_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FileUploadResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Path to the file to upload
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/file_upload_resource#file_path FileUploadResource#file_path}
  */
  readonly filePath: string;
  /**
  * File version identifier. This acts as a change trigger - increment this value when you need to re-upload the same file with modifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/file_upload_resource#file_version FileUploadResource#file_version}
  */
  readonly fileVersion?: string;
  /**
  * Upload location: 'Datafiles' or 'SAV'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/file_upload_resource#path_location FileUploadResource#path_location}
  */
  readonly pathLocation: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/file_upload_resource saviynt_file_upload_resource}
*/
export class FileUploadResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "saviynt_file_upload_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FileUploadResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FileUploadResource to import
  * @param importFromId The id of the existing FileUploadResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/file_upload_resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FileUploadResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "saviynt_file_upload_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/file_upload_resource saviynt_file_upload_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FileUploadResourceConfig
  */
  public constructor(scope: Construct, id: string, config: FileUploadResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'saviynt_file_upload_resource',
      terraformGeneratorMetadata: {
        providerName: 'saviynt',
        providerVersion: '0.3.2',
        providerVersionConstraint: '0.3.2'
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
    this._fileVersion = config.fileVersion;
    this._pathLocation = config.pathLocation;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // error_code - computed: true, optional: false, required: false
  public get errorCode() {
    return this.getStringAttribute('error_code');
  }

  // file_path - computed: false, optional: false, required: true
  private _filePath?: string; 
  public get filePath() {
    return this.getStringAttribute('file_path');
  }
  public set filePath(value: string) {
    this._filePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filePathInput() {
    return this._filePath;
  }

  // file_version - computed: false, optional: true, required: false
  private _fileVersion?: string; 
  public get fileVersion() {
    return this.getStringAttribute('file_version');
  }
  public set fileVersion(value: string) {
    this._fileVersion = value;
  }
  public resetFileVersion() {
    this._fileVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileVersionInput() {
    return this._fileVersion;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // path_location - computed: false, optional: false, required: true
  private _pathLocation?: string; 
  public get pathLocation() {
    return this.getStringAttribute('path_location');
  }
  public set pathLocation(value: string) {
    this._pathLocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathLocationInput() {
    return this._pathLocation;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      file_path: cdktf.stringToTerraform(this._filePath),
      file_version: cdktf.stringToTerraform(this._fileVersion),
      path_location: cdktf.stringToTerraform(this._pathLocation),
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
      file_version: {
        value: cdktf.stringToHclTerraform(this._fileVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path_location: {
        value: cdktf.stringToHclTerraform(this._pathLocation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
