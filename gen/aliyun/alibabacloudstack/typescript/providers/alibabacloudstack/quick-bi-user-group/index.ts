// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/quick_bi_user_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface QuickBiUserGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/quick_bi_user_group#id QuickBiUserGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/quick_bi_user_group#parent_user_group_id QuickBiUserGroup#parent_user_group_id}
  */
  readonly parentUserGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/quick_bi_user_group#user_group_description QuickBiUserGroup#user_group_description}
  */
  readonly userGroupDescription: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/quick_bi_user_group#user_group_id QuickBiUserGroup#user_group_id}
  */
  readonly userGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/quick_bi_user_group#user_group_name QuickBiUserGroup#user_group_name}
  */
  readonly userGroupName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/quick_bi_user_group alibabacloudstack_quick_bi_user_group}
*/
export class QuickBiUserGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_quick_bi_user_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a QuickBiUserGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the QuickBiUserGroup to import
  * @param importFromId The id of the existing QuickBiUserGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/quick_bi_user_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the QuickBiUserGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_quick_bi_user_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/quick_bi_user_group alibabacloudstack_quick_bi_user_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options QuickBiUserGroupConfig
  */
  public constructor(scope: Construct, id: string, config: QuickBiUserGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_quick_bi_user_group',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.20',
        providerVersionConstraint: '3.18.20'
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
    this._parentUserGroupId = config.parentUserGroupId;
    this._userGroupDescription = config.userGroupDescription;
    this._userGroupId = config.userGroupId;
    this._userGroupName = config.userGroupName;
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

  // parent_user_group_id - computed: false, optional: true, required: false
  private _parentUserGroupId?: string; 
  public get parentUserGroupId() {
    return this.getStringAttribute('parent_user_group_id');
  }
  public set parentUserGroupId(value: string) {
    this._parentUserGroupId = value;
  }
  public resetParentUserGroupId() {
    this._parentUserGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentUserGroupIdInput() {
    return this._parentUserGroupId;
  }

  // user_group_description - computed: false, optional: false, required: true
  private _userGroupDescription?: string; 
  public get userGroupDescription() {
    return this.getStringAttribute('user_group_description');
  }
  public set userGroupDescription(value: string) {
    this._userGroupDescription = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupDescriptionInput() {
    return this._userGroupDescription;
  }

  // user_group_id - computed: true, optional: true, required: false
  private _userGroupId?: string; 
  public get userGroupId() {
    return this.getStringAttribute('user_group_id');
  }
  public set userGroupId(value: string) {
    this._userGroupId = value;
  }
  public resetUserGroupId() {
    this._userGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupIdInput() {
    return this._userGroupId;
  }

  // user_group_name - computed: false, optional: false, required: true
  private _userGroupName?: string; 
  public get userGroupName() {
    return this.getStringAttribute('user_group_name');
  }
  public set userGroupName(value: string) {
    this._userGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupNameInput() {
    return this._userGroupName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      parent_user_group_id: cdktf.stringToTerraform(this._parentUserGroupId),
      user_group_description: cdktf.stringToTerraform(this._userGroupDescription),
      user_group_id: cdktf.stringToTerraform(this._userGroupId),
      user_group_name: cdktf.stringToTerraform(this._userGroupName),
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
      parent_user_group_id: {
        value: cdktf.stringToHclTerraform(this._parentUserGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_group_description: {
        value: cdktf.stringToHclTerraform(this._userGroupDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_group_id: {
        value: cdktf.stringToHclTerraform(this._userGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_group_name: {
        value: cdktf.stringToHclTerraform(this._userGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
