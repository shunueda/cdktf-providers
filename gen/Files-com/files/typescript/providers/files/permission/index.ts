// https://registry.terraform.io/providers/files-com/files/0.1.401/docs/resources/permission
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PermissionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Group ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.401/docs/resources/permission#group_id Permission#group_id}
  */
  readonly groupId?: number;
  /**
  * Group name (if applicable)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.401/docs/resources/permission#group_name Permission#group_name}
  */
  readonly groupName?: string;
  /**
  * Partner ID (if applicable)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.401/docs/resources/permission#partner_id Permission#partner_id}
  */
  readonly partnerId?: number;
  /**
  * Path. This must be slash-delimited, but it must neither start nor end with a slash. Maximum of 5000 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.401/docs/resources/permission#path Permission#path}
  */
  readonly path: string;
  /**
  * Permission type.  See the table referenced in the documentation for an explanation of each permission.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.401/docs/resources/permission#permission Permission#permission}
  */
  readonly permission?: string;
  /**
  * Recursive: does this permission apply to subfolders?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.401/docs/resources/permission#recursive Permission#recursive}
  */
  readonly recursive?: boolean | cdktf.IResolvable;
  /**
  * Site ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.401/docs/resources/permission#site_id Permission#site_id}
  */
  readonly siteId?: number;
  /**
  * User ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.401/docs/resources/permission#user_id Permission#user_id}
  */
  readonly userId?: number;
  /**
  * Username (if applicable)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.401/docs/resources/permission#username Permission#username}
  */
  readonly username?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/files-com/files/0.1.401/docs/resources/permission files_permission}
*/
export class Permission extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "files_permission";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Permission resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Permission to import
  * @param importFromId The id of the existing Permission that should be imported. Refer to the {@link https://registry.terraform.io/providers/files-com/files/0.1.401/docs/resources/permission#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Permission to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "files_permission", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/files-com/files/0.1.401/docs/resources/permission files_permission} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PermissionConfig
  */
  public constructor(scope: Construct, id: string, config: PermissionConfig) {
    super(scope, id, {
      terraformResourceType: 'files_permission',
      terraformGeneratorMetadata: {
        providerName: 'files',
        providerVersion: '0.1.401',
        providerVersionConstraint: '0.1.401'
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
    this._groupName = config.groupName;
    this._partnerId = config.partnerId;
    this._path = config.path;
    this._permission = config.permission;
    this._recursive = config.recursive;
    this._siteId = config.siteId;
    this._userId = config.userId;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group_id - computed: true, optional: true, required: false
  private _groupId?: number; 
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }
  public set groupId(value: number) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // group_name - computed: true, optional: true, required: false
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  public resetGroupName() {
    this._groupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // partner_id - computed: true, optional: true, required: false
  private _partnerId?: number; 
  public get partnerId() {
    return this.getNumberAttribute('partner_id');
  }
  public set partnerId(value: number) {
    this._partnerId = value;
  }
  public resetPartnerId() {
    this._partnerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partnerIdInput() {
    return this._partnerId;
  }

  // partner_name - computed: true, optional: false, required: false
  public get partnerName() {
    return this.getStringAttribute('partner_name');
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // permission - computed: true, optional: true, required: false
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  public resetPermission() {
    this._permission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
  }

  // recursive - computed: true, optional: true, required: false
  private _recursive?: boolean | cdktf.IResolvable; 
  public get recursive() {
    return this.getBooleanAttribute('recursive');
  }
  public set recursive(value: boolean | cdktf.IResolvable) {
    this._recursive = value;
  }
  public resetRecursive() {
    this._recursive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recursiveInput() {
    return this._recursive;
  }

  // site_id - computed: true, optional: true, required: false
  private _siteId?: number; 
  public get siteId() {
    return this.getNumberAttribute('site_id');
  }
  public set siteId(value: number) {
    this._siteId = value;
  }
  public resetSiteId() {
    this._siteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // user_id - computed: true, optional: true, required: false
  private _userId?: number; 
  public get userId() {
    return this.getNumberAttribute('user_id');
  }
  public set userId(value: number) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group_id: cdktf.numberToTerraform(this._groupId),
      group_name: cdktf.stringToTerraform(this._groupName),
      partner_id: cdktf.numberToTerraform(this._partnerId),
      path: cdktf.stringToTerraform(this._path),
      permission: cdktf.stringToTerraform(this._permission),
      recursive: cdktf.booleanToTerraform(this._recursive),
      site_id: cdktf.numberToTerraform(this._siteId),
      user_id: cdktf.numberToTerraform(this._userId),
      username: cdktf.stringToTerraform(this._username),
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
      group_name: {
        value: cdktf.stringToHclTerraform(this._groupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partner_id: {
        value: cdktf.numberToHclTerraform(this._partnerId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permission: {
        value: cdktf.stringToHclTerraform(this._permission),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recursive: {
        value: cdktf.booleanToHclTerraform(this._recursive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      site_id: {
        value: cdktf.numberToHclTerraform(this._siteId),
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
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
