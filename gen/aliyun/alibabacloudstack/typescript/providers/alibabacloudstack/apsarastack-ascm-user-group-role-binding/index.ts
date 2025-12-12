// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_ascm_user_group_role_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApsarastackAscmUserGroupRoleBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_ascm_user_group_role_binding#id ApsarastackAscmUserGroupRoleBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_ascm_user_group_role_binding#role_ids ApsarastackAscmUserGroupRoleBinding#role_ids}
  */
  readonly roleIds?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_ascm_user_group_role_binding#user_group_id ApsarastackAscmUserGroupRoleBinding#user_group_id}
  */
  readonly userGroupId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_ascm_user_group_role_binding apsarastack_ascm_user_group_role_binding}
*/
export class ApsarastackAscmUserGroupRoleBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_ascm_user_group_role_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApsarastackAscmUserGroupRoleBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApsarastackAscmUserGroupRoleBinding to import
  * @param importFromId The id of the existing ApsarastackAscmUserGroupRoleBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_ascm_user_group_role_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApsarastackAscmUserGroupRoleBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_ascm_user_group_role_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_ascm_user_group_role_binding apsarastack_ascm_user_group_role_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApsarastackAscmUserGroupRoleBindingConfig
  */
  public constructor(scope: Construct, id: string, config: ApsarastackAscmUserGroupRoleBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_ascm_user_group_role_binding',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.21',
        providerVersionConstraint: '3.18.21'
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
    this._roleIds = config.roleIds;
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

  // role_ids - computed: false, optional: true, required: false
  private _roleIds?: number[]; 
  public get roleIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('role_ids')));
  }
  public set roleIds(value: number[]) {
    this._roleIds = value;
  }
  public resetRoleIds() {
    this._roleIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleIdsInput() {
    return this._roleIds;
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
      role_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._roleIds),
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
      role_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._roleIds),
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
