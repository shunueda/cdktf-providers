// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ascm_user_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApsarastackAscmUserGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ascm_user_group#group_name ApsarastackAscmUserGroup#group_name}
  */
  readonly groupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ascm_user_group#id ApsarastackAscmUserGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ascm_user_group#organization_id ApsarastackAscmUserGroup#organization_id}
  */
  readonly organizationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ascm_user_group#role_ids ApsarastackAscmUserGroup#role_ids}
  */
  readonly roleIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ascm_user_group#role_in_ids ApsarastackAscmUserGroup#role_in_ids}
  */
  readonly roleInIds?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ascm_user_group apsarastack_ascm_user_group}
*/
export class ApsarastackAscmUserGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_ascm_user_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApsarastackAscmUserGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApsarastackAscmUserGroup to import
  * @param importFromId The id of the existing ApsarastackAscmUserGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ascm_user_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApsarastackAscmUserGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_ascm_user_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ascm_user_group apsarastack_ascm_user_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApsarastackAscmUserGroupConfig
  */
  public constructor(scope: Construct, id: string, config: ApsarastackAscmUserGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_ascm_user_group',
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
    this._groupName = config.groupName;
    this._id = config.id;
    this._organizationId = config.organizationId;
    this._roleIds = config.roleIds;
    this._roleInIds = config.roleInIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group_name - computed: false, optional: false, required: true
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
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

  // organization_id - computed: true, optional: true, required: false
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  public resetOrganizationId() {
    this._organizationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // role_ids - computed: true, optional: true, required: false
  private _roleIds?: string[]; 
  public get roleIds() {
    return cdktf.Fn.tolist(this.getListAttribute('role_ids'));
  }
  public set roleIds(value: string[]) {
    this._roleIds = value;
  }
  public resetRoleIds() {
    this._roleIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleIdsInput() {
    return this._roleIds;
  }

  // role_in_ids - computed: true, optional: true, required: false
  private _roleInIds?: string[]; 
  public get roleInIds() {
    return cdktf.Fn.tolist(this.getListAttribute('role_in_ids'));
  }
  public set roleInIds(value: string[]) {
    this._roleInIds = value;
  }
  public resetRoleInIds() {
    this._roleInIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInIdsInput() {
    return this._roleInIds;
  }

  // user_group_id - computed: true, optional: false, required: false
  public get userGroupId() {
    return this.getStringAttribute('user_group_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group_name: cdktf.stringToTerraform(this._groupName),
      id: cdktf.stringToTerraform(this._id),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      role_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._roleIds),
      role_in_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._roleInIds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      group_name: {
        value: cdktf.stringToHclTerraform(this._groupName),
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
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._roleIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      role_in_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._roleInIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
