// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/wedata_resource_folder
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WedataResourceFolderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Folder name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/wedata_resource_folder#folder_name WedataResourceFolder#folder_name}
  */
  readonly folderName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/wedata_resource_folder#id WedataResourceFolder#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Absolute path of parent folder, value example/wedata/test, root directory, please use/.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/wedata_resource_folder#parent_folder_path WedataResourceFolder#parent_folder_path}
  */
  readonly parentFolderPath: string;
  /**
  * Project id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/wedata_resource_folder#project_id WedataResourceFolder#project_id}
  */
  readonly projectId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/wedata_resource_folder tencentcloud_wedata_resource_folder}
*/
export class WedataResourceFolder extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_wedata_resource_folder";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WedataResourceFolder resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WedataResourceFolder to import
  * @param importFromId The id of the existing WedataResourceFolder that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/wedata_resource_folder#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WedataResourceFolder to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_wedata_resource_folder", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/wedata_resource_folder tencentcloud_wedata_resource_folder} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WedataResourceFolderConfig
  */
  public constructor(scope: Construct, id: string, config: WedataResourceFolderConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_wedata_resource_folder',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.49',
        providerVersionConstraint: '1.82.49'
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
