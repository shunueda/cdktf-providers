// https://registry.terraform.io/providers/files-com/files/0.1.420/docs/data-sources/style
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFilesStyleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Folder path. This must be slash-delimited, but it must neither start nor end with a slash. Maximum of 5000 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.420/docs/data-sources/style#path DataFilesStyle#path}
  */
  readonly path: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/files-com/files/0.1.420/docs/data-sources/style files_style}
*/
export class DataFilesStyle extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "files_style";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFilesStyle resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFilesStyle to import
  * @param importFromId The id of the existing DataFilesStyle that should be imported. Refer to the {@link https://registry.terraform.io/providers/files-com/files/0.1.420/docs/data-sources/style#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFilesStyle to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "files_style", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/files-com/files/0.1.420/docs/data-sources/style files_style} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFilesStyleConfig
  */
  public constructor(scope: Construct, id: string, config: DataFilesStyleConfig) {
    super(scope, id, {
      terraformResourceType: 'files_style',
      terraformGeneratorMetadata: {
        providerName: 'files',
        providerVersion: '0.1.420',
        providerVersionConstraint: '0.1.420'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._path = config.path;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // logo - computed: true, optional: false, required: false
  public get logo() {
    return this.getStringAttribute('logo');
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // thumbnail - computed: true, optional: false, required: false
  public get thumbnail() {
    return this.getStringAttribute('thumbnail');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      path: cdktf.stringToTerraform(this._path),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
