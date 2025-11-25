// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/wedata_code_folder
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WedataCodeFolderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Folder name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/wedata_code_folder#folder_name WedataCodeFolder#folder_name}
  */
  readonly folderName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/wedata_code_folder#id WedataCodeFolder#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Parent folder path, for example /aaa/bbb/ccc, path header must start with a slash, root directory pass /.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/wedata_code_folder#parent_folder_path WedataCodeFolder#parent_folder_path}
  */
  readonly parentFolderPath: string;
  /**
  * Project ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/wedata_code_folder#project_id WedataCodeFolder#project_id}
  */
  readonly projectId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/wedata_code_folder tencentcloud_wedata_code_folder}
*/
export class WedataCodeFolder extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_wedata_code_folder";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WedataCodeFolder resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WedataCodeFolder to import
  * @param importFromId The id of the existing WedataCodeFolder that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/wedata_code_folder#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WedataCodeFolder to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_wedata_code_folder", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/wedata_code_folder tencentcloud_wedata_code_folder} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WedataCodeFolderConfig
  */
  public constructor(scope: Construct, id: string, config: WedataCodeFolderConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_wedata_code_folder',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.38',
        providerVersionConstraint: '1.82.38'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._folderName = config.folderName;
    this._id = config.id;
    this._parentFolderPath = config.parentFolderPath;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_scope - computed: true, optional: false, required: false
  public get accessScope() {
    return this.getStringAttribute('access_scope');
  }

  // folder_id - computed: true, optional: false, required: false
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }

  // folder_name - computed: false, optional: false, required: true
  private _folderName?: string; 
  public get folderName() {
    return this.getStringAttribute('folder_name');
  }
  public set folderName(value: string) {
    this._folderName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get folderNameInput() {
    return this._folderName;
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

  // parent_folder_path - computed: false, optional: false, required: true
  private _parentFolderPath?: string; 
  public get parentFolderPath() {
    return this.getStringAttribute('parent_folder_path');
  }
  public set parentFolderPath(value: string) {
    this._parentFolderPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentFolderPathInput() {
    return this._parentFolderPath;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      folder_name: cdktf.stringToTerraform(this._folderName),
      id: cdktf.stringToTerraform(this._id),
      parent_folder_path: cdktf.stringToTerraform(this._parentFolderPath),
      project_id: cdktf.stringToTerraform(this._projectId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      folder_name: {
        value: cdktf.stringToHclTerraform(this._folderName),
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
      parent_folder_path: {
        value: cdktf.stringToHclTerraform(this._parentFolderPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
