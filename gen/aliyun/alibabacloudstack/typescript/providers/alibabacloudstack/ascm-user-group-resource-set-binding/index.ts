// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/ascm_user_group_resource_set_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AscmUserGroupResourceSetBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/ascm_user_group_resource_set_binding#ascm_role_id AscmUserGroupResourceSetBinding#ascm_role_id}
  */
  readonly ascmRoleId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/ascm_user_group_resource_set_binding#id AscmUserGroupResourceSetBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/ascm_user_group_resource_set_binding#resource_set_id AscmUserGroupResourceSetBinding#resource_set_id}
  */
  readonly resourceSetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/ascm_user_group_resource_set_binding#user_group_id AscmUserGroupResourceSetBinding#user_group_id}
  */
  readonly userGroupId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/ascm_user_group_resource_set_binding alibabacloudstack_ascm_user_group_resource_set_binding}
*/
export class AscmUserGroupResourceSetBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_ascm_user_group_resource_set_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AscmUserGroupResourceSetBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AscmUserGroupResourceSetBinding to import
  * @param importFromId The id of the existing AscmUserGroupResourceSetBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/ascm_user_group_resource_set_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AscmUserGroupResourceSetBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_ascm_user_group_resource_set_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/ascm_user_group_resource_set_binding alibabacloudstack_ascm_user_group_resource_set_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AscmUserGroupResourceSetBindingConfig
  */
  public constructor(scope: Construct, id: string, config: AscmUserGroupResourceSetBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_ascm_user_group_resource_set_binding',
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
    this._ascmRoleId = config.ascmRoleId;
    this._id = config.id;
    this._resourceSetId = config.resourceSetId;
    this._userGroupId = config.userGroupId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ascm_role_id - computed: false, optional: true, required: false
  private _ascmRoleId?: string; 
  public get ascmRoleId() {
    return this.getStringAttribute('ascm_role_id');
  }
  public set ascmRoleId(value: string) {
    this._ascmRoleId = value;
  }
  public resetAscmRoleId() {
    this._ascmRoleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ascmRoleIdInput() {
    return this._ascmRoleId;
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

  // resource_set_id - computed: false, optional: true, required: false
  private _resourceSetId?: string; 
  public get resourceSetId() {
    return this.getStringAttribute('resource_set_id');
  }
  public set resourceSetId(value: string) {
    this._resourceSetId = value;
  }
  public resetResourceSetId() {
    this._resourceSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceSetIdInput() {
    return this._resourceSetId;
  }

  // user_group_id - computed: false, optional: false, required: true
  private _userGroupId?: string; 
  public get userGroupId() {
    return this.getStringAttribute('user_group_id');
  }
  public set userGroupId(value: string) {
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
      ascm_role_id: cdktf.stringToTerraform(this._ascmRoleId),
      id: cdktf.stringToTerraform(this._id),
      resource_set_id: cdktf.stringToTerraform(this._resourceSetId),
      user_group_id: cdktf.stringToTerraform(this._userGroupId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ascm_role_id: {
        value: cdktf.stringToHclTerraform(this._ascmRoleId),
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
      resource_set_id: {
        value: cdktf.stringToHclTerraform(this._resourceSetId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
