// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/oceanus_folder
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OceanusFolderConfig extends cdktf.TerraformMetaArguments {
  /**
  * New file name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/oceanus_folder#folder_name OceanusFolder#folder_name}
  */
  readonly folderName: string;
  /**
  * Folder type, 0: job folder, 1: resource folder. Default is 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/oceanus_folder#folder_type OceanusFolder#folder_type}
  */
  readonly folderType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/oceanus_folder#id OceanusFolder#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Parent folder id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/oceanus_folder#parent_id OceanusFolder#parent_id}
  */
  readonly parentId: string;
  /**
  * Workspace SerialId.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/oceanus_folder#work_space_id OceanusFolder#work_space_id}
  */
  readonly workSpaceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/oceanus_folder tencentcloud_oceanus_folder}
*/
export class OceanusFolder extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_oceanus_folder";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OceanusFolder resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OceanusFolder to import
  * @param importFromId The id of the existing OceanusFolder that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/oceanus_folder#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OceanusFolder to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_oceanus_folder", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/oceanus_folder tencentcloud_oceanus_folder} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OceanusFolderConfig
  */
  public constructor(scope: Construct, id: string, config: OceanusFolderConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_oceanus_folder',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.37',
        providerVersionConstraint: '1.82.37'
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
    this._folderType = config.folderType;
    this._id = config.id;
    this._parentId = config.parentId;
    this._workSpaceId = config.workSpaceId;
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

  // folder_type - computed: false, optional: true, required: false
  private _folderType?: number; 
  public get folderType() {
    return this.getNumberAttribute('folder_type');
  }
  public set folderType(value: number) {
    this._folderType = value;
  }
  public resetFolderType() {
    this._folderType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderTypeInput() {
    return this._folderType;
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

  // parent_id - computed: false, optional: false, required: true
  private _parentId?: string; 
  public get parentId() {
    return this.getStringAttribute('parent_id');
  }
  public set parentId(value: string) {
    this._parentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentIdInput() {
    return this._parentId;
  }

  // work_space_id - computed: false, optional: false, required: true
  private _workSpaceId?: string; 
  public get workSpaceId() {
    return this.getStringAttribute('work_space_id');
  }
  public set workSpaceId(value: string) {
    this._workSpaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workSpaceIdInput() {
    return this._workSpaceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      folder_name: cdktf.stringToTerraform(this._folderName),
      folder_type: cdktf.numberToTerraform(this._folderType),
      id: cdktf.stringToTerraform(this._id),
      parent_id: cdktf.stringToTerraform(this._parentId),
      work_space_id: cdktf.stringToTerraform(this._workSpaceId),
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
      folder_type: {
        value: cdktf.numberToHclTerraform(this._folderType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_id: {
        value: cdktf.stringToHclTerraform(this._parentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      work_space_id: {
        value: cdktf.stringToHclTerraform(this._workSpaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
