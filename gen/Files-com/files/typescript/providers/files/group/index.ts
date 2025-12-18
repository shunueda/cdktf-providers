// https://registry.terraform.io/providers/files-com/files/0.1.415/docs/resources/group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Comma-delimited list of user IDs who are group administrators (separated by commas)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.415/docs/resources/group#admin_ids Group#admin_ids}
  */
  readonly adminIds?: string;
  /**
  * A list of allowed IPs if applicable.  Newline delimited
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.415/docs/resources/group#allowed_ips Group#allowed_ips}
  */
  readonly allowedIps?: string;
  /**
  * If true, users in this group can use WebDAV to login.  This will override a false value of `dav_permission` on the user level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.415/docs/resources/group#dav_permission Group#dav_permission}
  */
  readonly davPermission?: boolean | cdktf.IResolvable;
  /**
  * If true, users in this group can use FTP to login.  This will override a false value of `ftp_permission` on the user level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.415/docs/resources/group#ftp_permission Group#ftp_permission}
  */
  readonly ftpPermission?: boolean | cdktf.IResolvable;
  /**
  * Group name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.415/docs/resources/group#name Group#name}
  */
  readonly name: string;
  /**
  * Notes about this group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.415/docs/resources/group#notes Group#notes}
  */
  readonly notes?: string;
  /**
  * If true, users in this group can use the REST API to login.  This will override a false value of `restapi_permission` on the user level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.415/docs/resources/group#restapi_permission Group#restapi_permission}
  */
  readonly restapiPermission?: boolean | cdktf.IResolvable;
  /**
  * If true, users in this group can use SFTP to login.  This will override a false value of `sftp_permission` on the user level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.415/docs/resources/group#sftp_permission Group#sftp_permission}
  */
  readonly sftpPermission?: boolean | cdktf.IResolvable;
  /**
  * Comma-delimited list of user IDs who belong to this group (separated by commas)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.415/docs/resources/group#user_ids Group#user_ids}
  */
  readonly userIds?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/files-com/files/0.1.415/docs/resources/group files_group}
*/
export class Group extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "files_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Group resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Group to import
  * @param importFromId The id of the existing Group that should be imported. Refer to the {@link https://registry.terraform.io/providers/files-com/files/0.1.415/docs/resources/group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Group to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "files_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/files-com/files/0.1.415/docs/resources/group files_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroupConfig
  */
  public constructor(scope: Construct, id: string, config: GroupConfig) {
    super(scope, id, {
      terraformResourceType: 'files_group',
      terraformGeneratorMetadata: {
        providerName: 'files',
        providerVersion: '0.1.415',
        providerVersionConstraint: '0.1.415'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminIds = config.adminIds;
    this._allowedIps = config.allowedIps;
    this._davPermission = config.davPermission;
    this._ftpPermission = config.ftpPermission;
    this._name = config.name;
    this._notes = config.notes;
    this._restapiPermission = config.restapiPermission;
    this._sftpPermission = config.sftpPermission;
    this._userIds = config.userIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_ids - computed: true, optional: true, required: false
  private _adminIds?: string; 
  public get adminIds() {
    return this.getStringAttribute('admin_ids');
  }
  public set adminIds(value: string) {
    this._adminIds = value;
  }
  public resetAdminIds() {
    this._adminIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminIdsInput() {
    return this._adminIds;
  }

  // allowed_ips - computed: true, optional: true, required: false
  private _allowedIps?: string; 
  public get allowedIps() {
    return this.getStringAttribute('allowed_ips');
  }
  public set allowedIps(value: string) {
    this._allowedIps = value;
  }
  public resetAllowedIps() {
    this._allowedIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedIpsInput() {
    return this._allowedIps;
  }

  // dav_permission - computed: true, optional: true, required: false
  private _davPermission?: boolean | cdktf.IResolvable; 
  public get davPermission() {
    return this.getBooleanAttribute('dav_permission');
  }
  public set davPermission(value: boolean | cdktf.IResolvable) {
    this._davPermission = value;
  }
  public resetDavPermission() {
    this._davPermission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get davPermissionInput() {
    return this._davPermission;
  }

  // ftp_permission - computed: true, optional: true, required: false
  private _ftpPermission?: boolean | cdktf.IResolvable; 
  public get ftpPermission() {
    return this.getBooleanAttribute('ftp_permission');
  }
  public set ftpPermission(value: boolean | cdktf.IResolvable) {
    this._ftpPermission = value;
  }
  public resetFtpPermission() {
    this._ftpPermission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftpPermissionInput() {
    return this._ftpPermission;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // notes - computed: true, optional: true, required: false
  private _notes?: string; 
  public get notes() {
    return this.getStringAttribute('notes');
  }
  public set notes(value: string) {
    this._notes = value;
  }
  public resetNotes() {
    this._notes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notesInput() {
    return this._notes;
  }

  // restapi_permission - computed: true, optional: true, required: false
  private _restapiPermission?: boolean | cdktf.IResolvable; 
  public get restapiPermission() {
    return this.getBooleanAttribute('restapi_permission');
  }
  public set restapiPermission(value: boolean | cdktf.IResolvable) {
    this._restapiPermission = value;
  }
  public resetRestapiPermission() {
    this._restapiPermission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restapiPermissionInput() {
    return this._restapiPermission;
  }

  // sftp_permission - computed: true, optional: true, required: false
  private _sftpPermission?: boolean | cdktf.IResolvable; 
  public get sftpPermission() {
    return this.getBooleanAttribute('sftp_permission');
  }
  public set sftpPermission(value: boolean | cdktf.IResolvable) {
    this._sftpPermission = value;
  }
  public resetSftpPermission() {
    this._sftpPermission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sftpPermissionInput() {
    return this._sftpPermission;
  }

  // site_id - computed: true, optional: false, required: false
  public get siteId() {
    return this.getNumberAttribute('site_id');
  }

  // user_ids - computed: true, optional: true, required: false
  private _userIds?: string; 
  public get userIds() {
    return this.getStringAttribute('user_ids');
  }
  public set userIds(value: string) {
    this._userIds = value;
  }
  public resetUserIds() {
    this._userIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdsInput() {
    return this._userIds;
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
      admin_ids: cdktf.stringToTerraform(this._adminIds),
      allowed_ips: cdktf.stringToTerraform(this._allowedIps),
      dav_permission: cdktf.booleanToTerraform(this._davPermission),
      ftp_permission: cdktf.booleanToTerraform(this._ftpPermission),
      name: cdktf.stringToTerraform(this._name),
      notes: cdktf.stringToTerraform(this._notes),
      restapi_permission: cdktf.booleanToTerraform(this._restapiPermission),
      sftp_permission: cdktf.booleanToTerraform(this._sftpPermission),
      user_ids: cdktf.stringToTerraform(this._userIds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_ids: {
        value: cdktf.stringToHclTerraform(this._adminIds),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allowed_ips: {
        value: cdktf.stringToHclTerraform(this._allowedIps),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dav_permission: {
        value: cdktf.booleanToHclTerraform(this._davPermission),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ftp_permission: {
        value: cdktf.booleanToHclTerraform(this._ftpPermission),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notes: {
        value: cdktf.stringToHclTerraform(this._notes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      restapi_permission: {
        value: cdktf.booleanToHclTerraform(this._restapiPermission),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sftp_permission: {
        value: cdktf.booleanToHclTerraform(this._sftpPermission),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      user_ids: {
        value: cdktf.stringToHclTerraform(this._userIds),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
