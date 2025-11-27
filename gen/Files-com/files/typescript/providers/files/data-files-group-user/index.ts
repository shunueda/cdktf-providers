// https://registry.terraform.io/providers/files-com/files/0.1.398/docs/data-sources/group_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFilesGroupUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Group ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.398/docs/data-sources/group_user#group_id DataFilesGroupUser#group_id}
  */
  readonly groupId: number;
  /**
  * User ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.398/docs/data-sources/group_user#user_id DataFilesGroupUser#user_id}
  */
  readonly userId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/files-com/files/0.1.398/docs/data-sources/group_user files_group_user}
*/
export class DataFilesGroupUser extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "files_group_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFilesGroupUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFilesGroupUser to import
  * @param importFromId The id of the existing DataFilesGroupUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/files-com/files/0.1.398/docs/data-sources/group_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFilesGroupUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "files_group_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/files-com/files/0.1.398/docs/data-sources/group_user files_group_user} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFilesGroupUserConfig
  */
  public constructor(scope: Construct, id: string, config: DataFilesGroupUserConfig) {
    super(scope, id, {
      terraformResourceType: 'files_group_user',
      terraformGeneratorMetadata: {
        providerName: 'files',
        providerVersion: '0.1.398',
        providerVersionConstraint: '0.1.398'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._groupId = config.groupId;
    this._userId = config.userId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin - computed: true, optional: false, required: false
  public get admin() {
    return this.getBooleanAttribute('admin');
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId?: number; 
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }
  public set groupId(value: number) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // group_name - computed: true, optional: false, required: false
  public get groupName() {
    return this.getStringAttribute('group_name');
  }

  // user_id - computed: false, optional: false, required: true
  private _userId?: number; 
  public get userId() {
    return this.getNumberAttribute('user_id');
  }
  public set userId(value: number) {
    this._userId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // usernames - computed: true, optional: false, required: false
  public get usernames() {
    return this.getStringAttribute('usernames');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group_id: cdktf.numberToTerraform(this._groupId),
      user_id: cdktf.numberToTerraform(this._userId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      group_id: {
        value: cdktf.numberToHclTerraform(this._groupId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_id: {
        value: cdktf.numberToHclTerraform(this._userId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
