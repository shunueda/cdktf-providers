// https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/group_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroupUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Is this user an administrator of this group?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/group_user#admin GroupUser#admin}
  */
  readonly admin?: boolean | cdktf.IResolvable;
  /**
  * Group ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/group_user#group_id GroupUser#group_id}
  */
  readonly groupId: number;
  /**
  * User ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/group_user#user_id GroupUser#user_id}
  */
  readonly userId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/group_user files_group_user}
*/
export class GroupUser extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "files_group_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GroupUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GroupUser to import
  * @param importFromId The id of the existing GroupUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/group_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GroupUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "files_group_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/group_user files_group_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroupUserConfig
  */
  public constructor(scope: Construct, id: string, config: GroupUserConfig) {
    super(scope, id, {
      terraformResourceType: 'files_group_user',
      terraformGeneratorMetadata: {
        providerName: 'files',
        providerVersion: '0.1.375'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._admin = config.admin;
    this._groupId = config.groupId;
    this._userId = config.userId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin - computed: true, optional: true, required: false
  private _admin?: boolean | cdktf.IResolvable; 
  public get admin() {
    return this.getBooleanAttribute('admin');
  }
  public set admin(value: boolean | cdktf.IResolvable) {
    this._admin = value;
  }
  public resetAdmin() {
    this._admin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminInput() {
    return this._admin;
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
      admin: cdktf.booleanToTerraform(this._admin),
      group_id: cdktf.numberToTerraform(this._groupId),
      user_id: cdktf.numberToTerraform(this._userId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin: {
        value: cdktf.booleanToHclTerraform(this._admin),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
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
