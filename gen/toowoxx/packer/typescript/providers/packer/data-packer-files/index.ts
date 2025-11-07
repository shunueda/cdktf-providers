// https://registry.terraform.io/providers/toowoxx/packer/0.17.2/docs/data-sources/files
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPackerFilesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Directory to run packer in. Defaults to cwd.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/toowoxx/packer/0.17.2/docs/data-sources/files#directory DataPackerFiles#directory}
  */
  readonly directory?: string;
  /**
  * Packer file to use for building
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/toowoxx/packer/0.17.2/docs/data-sources/files#file DataPackerFiles#file}
  */
  readonly file?: string;
  /**
  * Files that should be depended on so that the resource is updated when these files change
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/toowoxx/packer/0.17.2/docs/data-sources/files#file_dependencies DataPackerFiles#file_dependencies}
  */
  readonly fileDependencies?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/toowoxx/packer/0.17.2/docs/data-sources/files packer_files}
*/
export class DataPackerFiles extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "packer_files";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPackerFiles resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPackerFiles to import
  * @param importFromId The id of the existing DataPackerFiles that should be imported. Refer to the {@link https://registry.terraform.io/providers/toowoxx/packer/0.17.2/docs/data-sources/files#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPackerFiles to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "packer_files", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/toowoxx/packer/0.17.2/docs/data-sources/files packer_files} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPackerFilesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPackerFilesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'packer_files',
      terraformGeneratorMetadata: {
        providerName: 'packer',
        providerVersion: '0.17.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._directory = config.directory;
    this._file = config.file;
    this._fileDependencies = config.fileDependencies;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // directory - computed: false, optional: true, required: false
  private _directory?: string; 
  public get directory() {
    return this.getStringAttribute('directory');
  }
  public set directory(value: string) {
    this._directory = value;
  }
  public resetDirectory() {
    this._directory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory;
  }

  // file - computed: false, optional: true, required: false
  private _file?: string; 
  public get file() {
    return this.getStringAttribute('file');
  }
  public set file(value: string) {
    this._file = value;
  }
  public resetFile() {
    this._file = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file;
  }

  // file_dependencies - computed: false, optional: true, required: false
  private _fileDependencies?: string[]; 
  public get fileDependencies() {
    return cdktf.Fn.tolist(this.getListAttribute('file_dependencies'));
  }
  public set fileDependencies(value: string[]) {
    this._fileDependencies = value;
  }
  public resetFileDependencies() {
    this._fileDependencies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileDependenciesInput() {
    return this._fileDependencies;
  }

  // files_hash - computed: true, optional: false, required: false
  public get filesHash() {
    return this.getStringAttribute('files_hash');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      directory: cdktf.stringToTerraform(this._directory),
      file: cdktf.stringToTerraform(this._file),
      file_dependencies: cdktf.listMapper(cdktf.stringToTerraform, false)(this._fileDependencies),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      directory: {
        value: cdktf.stringToHclTerraform(this._directory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file: {
        value: cdktf.stringToHclTerraform(this._file),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_dependencies: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._fileDependencies),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
