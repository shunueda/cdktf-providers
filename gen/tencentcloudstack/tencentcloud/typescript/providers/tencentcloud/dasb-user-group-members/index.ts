// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/dasb_user_group_members
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DasbUserGroupMembersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/dasb_user_group_members#id DasbUserGroupMembers#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Collection of member user IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/dasb_user_group_members#member_id_set DasbUserGroupMembers#member_id_set}
  */
  readonly memberIdSet: number[];
  /**
  * User Group ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/dasb_user_group_members#user_group_id DasbUserGroupMembers#user_group_id}
  */
  readonly userGroupId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/dasb_user_group_members tencentcloud_dasb_user_group_members}
*/
export class DasbUserGroupMembers extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dasb_user_group_members";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DasbUserGroupMembers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DasbUserGroupMembers to import
  * @param importFromId The id of the existing DasbUserGroupMembers that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/dasb_user_group_members#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DasbUserGroupMembers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dasb_user_group_members", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/dasb_user_group_members tencentcloud_dasb_user_group_members} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DasbUserGroupMembersConfig
  */
  public constructor(scope: Construct, id: string, config: DasbUserGroupMembersConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dasb_user_group_members',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.35'
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
    this._memberIdSet = config.memberIdSet;
    this._userGroupId = config.userGroupId;
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

  // member_id_set - computed: false, optional: false, required: true
  private _memberIdSet?: number[]; 
  public get memberIdSet() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('member_id_set')));
  }
  public set memberIdSet(value: number[]) {
    this._memberIdSet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memberIdSetInput() {
    return this._memberIdSet;
  }

  // user_group_id - computed: false, optional: false, required: true
  private _userGroupId?: number; 
  public get userGroupId() {
    return this.getNumberAttribute('user_group_id');
  }
  public set userGroupId(value: number) {
    this._userGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupIdInput() {
    return this._userGroupId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      member_id_set: cdktf.listMapper(cdktf.numberToTerraform, false)(this._memberIdSet),
      user_group_id: cdktf.numberToTerraform(this._userGroupId),
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
      member_id_set: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._memberIdSet),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      user_group_id: {
        value: cdktf.numberToHclTerraform(this._userGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
