// https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/group_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroupRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * When this setting is enabled, the admins won't receive any of the default Okta administrator emails. These admins also won't have access to contact Okta Support and open support cases on behalf of your org.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/group_role#disable_notifications GroupRole#disable_notifications}
  */
  readonly disableNotifications?: boolean | cdktf.IResolvable;
  /**
  * ID of group to attach admin roles to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/group_role#group_id GroupRole#group_id}
  */
  readonly groupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/group_role#id GroupRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Resource Set ID. Required for role_type = `CUSTOM`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/group_role#resource_set_id GroupRole#resource_set_id}
  */
  readonly resourceSetId?: string;
  /**
  * Role ID. Required for role_type = `CUSTOM`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/group_role#role_id GroupRole#role_id}
  */
  readonly roleId?: string;
  /**
  * Admin role assigned to the group. It can be any one of the following values:
  * 	"API_ADMIN",
  * 	"APP_ADMIN",
  * 	"CUSTOM",
  * 	"GROUP_MEMBERSHIP_ADMIN",
  * 	"HELP_DESK_ADMIN",
  * 	"MOBILE_ADMIN",
  * 	"ORG_ADMIN",
  * 	"READ_ONLY_ADMIN",
  * 	"REPORT_ADMIN",
  * 	"SUPER_ADMIN",
  * 	"USER_ADMIN"
  * 	. See [API Docs](https://developer.okta.com/docs/api/openapi/okta-management/guides/roles/#standard-roles).
  * 	- "USER_ADMIN" is the Group Administrator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/group_role#role_type GroupRole#role_type}
  */
  readonly roleType: string;
  /**
  * A list of app names (name represents set of app instances, like 'salesforce' or 'facebook'), or a combination of app name and app instance ID (like 'facebook.0oapsqQ6dv19pqyEo0g3') you would like as the targets of the admin role. - Only supported when used with the role type `APP_ADMIN`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/group_role#target_app_list GroupRole#target_app_list}
  */
  readonly targetAppList?: string[];
  /**
  * A list of group IDs you would like as the targets of the admin role. - Only supported when used with the role types: `GROUP_MEMBERSHIP_ADMIN`, `HELP_DESK_ADMIN`, or `USER_ADMIN`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/group_role#target_group_list GroupRole#target_group_list}
  */
  readonly targetGroupList?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/group_role okta_group_role}
*/
export class GroupRole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_group_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GroupRole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GroupRole to import
  * @param importFromId The id of the existing GroupRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/group_role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GroupRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "okta_group_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/group_role okta_group_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroupRoleConfig
  */
  public constructor(scope: Construct, id: string, config: GroupRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_group_role',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '6.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._disableNotifications = config.disableNotifications;
    this._groupId = config.groupId;
    this._id = config.id;
    this._resourceSetId = config.resourceSetId;
    this._roleId = config.roleId;
    this._roleType = config.roleType;
    this._targetAppList = config.targetAppList;
    this._targetGroupList = config.targetGroupList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disable_notifications - computed: false, optional: true, required: false
  private _disableNotifications?: boolean | cdktf.IResolvable; 
  public get disableNotifications() {
    return this.getBooleanAttribute('disable_notifications');
  }
  public set disableNotifications(value: boolean | cdktf.IResolvable) {
    this._disableNotifications = value;
  }
  public resetDisableNotifications() {
    this._disableNotifications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableNotificationsInput() {
    return this._disableNotifications;
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
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

  // role_id - computed: false, optional: true, required: false
  private _roleId?: string; 
  public get roleId() {
    return this.getStringAttribute('role_id');
  }
  public set roleId(value: string) {
    this._roleId = value;
  }
  public resetRoleId() {
    this._roleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleIdInput() {
    return this._roleId;
  }

  // role_type - computed: false, optional: false, required: true
  private _roleType?: string; 
  public get roleType() {
    return this.getStringAttribute('role_type');
  }
  public set roleType(value: string) {
    this._roleType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleTypeInput() {
    return this._roleType;
  }

  // target_app_list - computed: false, optional: true, required: false
  private _targetAppList?: string[]; 
  public get targetAppList() {
    return cdktf.Fn.tolist(this.getListAttribute('target_app_list'));
  }
  public set targetAppList(value: string[]) {
    this._targetAppList = value;
  }
  public resetTargetAppList() {
    this._targetAppList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetAppListInput() {
    return this._targetAppList;
  }

  // target_group_list - computed: false, optional: true, required: false
  private _targetGroupList?: string[]; 
  public get targetGroupList() {
    return cdktf.Fn.tolist(this.getListAttribute('target_group_list'));
  }
  public set targetGroupList(value: string[]) {
    this._targetGroupList = value;
  }
  public resetTargetGroupList() {
    this._targetGroupList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetGroupListInput() {
    return this._targetGroupList;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disable_notifications: cdktf.booleanToTerraform(this._disableNotifications),
      group_id: cdktf.stringToTerraform(this._groupId),
      id: cdktf.stringToTerraform(this._id),
      resource_set_id: cdktf.stringToTerraform(this._resourceSetId),
      role_id: cdktf.stringToTerraform(this._roleId),
      role_type: cdktf.stringToTerraform(this._roleType),
      target_app_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._targetAppList),
      target_group_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._targetGroupList),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      disable_notifications: {
        value: cdktf.booleanToHclTerraform(this._disableNotifications),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
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
      role_id: {
        value: cdktf.stringToHclTerraform(this._roleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_type: {
        value: cdktf.stringToHclTerraform(this._roleType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_app_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._targetAppList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      target_group_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._targetGroupList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
