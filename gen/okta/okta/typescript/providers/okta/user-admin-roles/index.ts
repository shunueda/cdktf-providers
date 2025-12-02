// https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/user_admin_roles
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserAdminRolesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The list of Okta user admin roles, e.g. `['APP_ADMIN', 'USER_ADMIN']` See [API Docs](https://developer.okta.com/docs/api/openapi/okta-management/guides/roles/#standard-roles).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/user_admin_roles#admin_roles UserAdminRoles#admin_roles}
  */
  readonly adminRoles: string[];
  /**
  * When this setting is enabled, the admins won't receive any of the default Okta administrator emails. These admins also won't have access to contact Okta Support and open support cases on behalf of your org.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/user_admin_roles#disable_notifications UserAdminRoles#disable_notifications}
  */
  readonly disableNotifications?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/user_admin_roles#id UserAdminRoles#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of a Okta User
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/user_admin_roles#user_id UserAdminRoles#user_id}
  */
  readonly userId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/user_admin_roles okta_user_admin_roles}
*/
export class UserAdminRoles extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_user_admin_roles";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserAdminRoles resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserAdminRoles to import
  * @param importFromId The id of the existing UserAdminRoles that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/user_admin_roles#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserAdminRoles to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "okta_user_admin_roles", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/user_admin_roles okta_user_admin_roles} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserAdminRolesConfig
  */
  public constructor(scope: Construct, id: string, config: UserAdminRolesConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_user_admin_roles',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '6.5.1',
        providerVersionConstraint: '6.5.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminRoles = config.adminRoles;
    this._disableNotifications = config.disableNotifications;
    this._id = config.id;
    this._userId = config.userId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_roles - computed: false, optional: false, required: true
  private _adminRoles?: string[]; 
  public get adminRoles() {
    return cdktf.Fn.tolist(this.getListAttribute('admin_roles'));
  }
  public set adminRoles(value: string[]) {
    this._adminRoles = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminRolesInput() {
    return this._adminRoles;
  }

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

  // user_id - computed: false, optional: false, required: true
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._adminRoles),
      disable_notifications: cdktf.booleanToTerraform(this._disableNotifications),
      id: cdktf.stringToTerraform(this._id),
      user_id: cdktf.stringToTerraform(this._userId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_roles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._adminRoles),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      disable_notifications: {
        value: cdktf.booleanToHclTerraform(this._disableNotifications),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_id: {
        value: cdktf.stringToHclTerraform(this._userId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
