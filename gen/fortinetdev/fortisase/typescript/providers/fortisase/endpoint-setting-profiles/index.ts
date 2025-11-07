// https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/endpoint_setting_profiles
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EndpointSettingProfilesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/endpoint_setting_profiles#allow_config_backup EndpointSettingProfiles#allow_config_backup}
  */
  readonly allowConfigBackup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/endpoint_setting_profiles#ems_disconnect_password EndpointSettingProfiles#ems_disconnect_password}
  */
  readonly emsDisconnectPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/endpoint_setting_profiles#notify_vpn_issue EndpointSettingProfiles#notify_vpn_issue}
  */
  readonly notifyVpnIssue?: string;
  /**
  * The primary key of the object. Can be found in the response from the get request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/endpoint_setting_profiles#primary_key EndpointSettingProfiles#primary_key}
  */
  readonly primaryKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/endpoint_setting_profiles#show_notifications EndpointSettingProfiles#show_notifications}
  */
  readonly showNotifications?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/endpoint_setting_profiles#show_tag_forti_client EndpointSettingProfiles#show_tag_forti_client}
  */
  readonly showTagFortiClient?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/endpoint_setting_profiles#users_can_disconnect EndpointSettingProfiles#users_can_disconnect}
  */
  readonly usersCanDisconnect?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/endpoint_setting_profiles fortisase_endpoint_setting_profiles}
*/
export class EndpointSettingProfiles extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortisase_endpoint_setting_profiles";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EndpointSettingProfiles resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EndpointSettingProfiles to import
  * @param importFromId The id of the existing EndpointSettingProfiles that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/endpoint_setting_profiles#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EndpointSettingProfiles to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortisase_endpoint_setting_profiles", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/endpoint_setting_profiles fortisase_endpoint_setting_profiles} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EndpointSettingProfilesConfig
  */
  public constructor(scope: Construct, id: string, config: EndpointSettingProfilesConfig) {
    super(scope, id, {
      terraformResourceType: 'fortisase_endpoint_setting_profiles',
      terraformGeneratorMetadata: {
        providerName: 'fortisase',
        providerVersion: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowConfigBackup = config.allowConfigBackup;
    this._emsDisconnectPassword = config.emsDisconnectPassword;
    this._notifyVpnIssue = config.notifyVpnIssue;
    this._primaryKey = config.primaryKey;
    this._showNotifications = config.showNotifications;
    this._showTagFortiClient = config.showTagFortiClient;
    this._usersCanDisconnect = config.usersCanDisconnect;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_config_backup - computed: true, optional: true, required: false
  private _allowConfigBackup?: string; 
  public get allowConfigBackup() {
    return this.getStringAttribute('allow_config_backup');
  }
  public set allowConfigBackup(value: string) {
    this._allowConfigBackup = value;
  }
  public resetAllowConfigBackup() {
    this._allowConfigBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowConfigBackupInput() {
    return this._allowConfigBackup;
  }

  // ems_disconnect_password - computed: true, optional: true, required: false
  private _emsDisconnectPassword?: string; 
  public get emsDisconnectPassword() {
    return this.getStringAttribute('ems_disconnect_password');
  }
  public set emsDisconnectPassword(value: string) {
    this._emsDisconnectPassword = value;
  }
  public resetEmsDisconnectPassword() {
    this._emsDisconnectPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emsDisconnectPasswordInput() {
    return this._emsDisconnectPassword;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // notify_vpn_issue - computed: true, optional: true, required: false
  private _notifyVpnIssue?: string; 
  public get notifyVpnIssue() {
    return this.getStringAttribute('notify_vpn_issue');
  }
  public set notifyVpnIssue(value: string) {
    this._notifyVpnIssue = value;
  }
  public resetNotifyVpnIssue() {
    this._notifyVpnIssue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyVpnIssueInput() {
    return this._notifyVpnIssue;
  }

  // primary_key - computed: false, optional: false, required: true
  private _primaryKey?: string; 
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }

  // show_notifications - computed: true, optional: true, required: false
  private _showNotifications?: string; 
  public get showNotifications() {
    return this.getStringAttribute('show_notifications');
  }
  public set showNotifications(value: string) {
    this._showNotifications = value;
  }
  public resetShowNotifications() {
    this._showNotifications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showNotificationsInput() {
    return this._showNotifications;
  }

  // show_tag_forti_client - computed: true, optional: true, required: false
  private _showTagFortiClient?: string; 
  public get showTagFortiClient() {
    return this.getStringAttribute('show_tag_forti_client');
  }
  public set showTagFortiClient(value: string) {
    this._showTagFortiClient = value;
  }
  public resetShowTagFortiClient() {
    this._showTagFortiClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showTagFortiClientInput() {
    return this._showTagFortiClient;
  }

  // users_can_disconnect - computed: true, optional: true, required: false
  private _usersCanDisconnect?: string; 
  public get usersCanDisconnect() {
    return this.getStringAttribute('users_can_disconnect');
  }
  public set usersCanDisconnect(value: string) {
    this._usersCanDisconnect = value;
  }
  public resetUsersCanDisconnect() {
    this._usersCanDisconnect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersCanDisconnectInput() {
    return this._usersCanDisconnect;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_config_backup: cdktf.stringToTerraform(this._allowConfigBackup),
      ems_disconnect_password: cdktf.stringToTerraform(this._emsDisconnectPassword),
      notify_vpn_issue: cdktf.stringToTerraform(this._notifyVpnIssue),
      primary_key: cdktf.stringToTerraform(this._primaryKey),
      show_notifications: cdktf.stringToTerraform(this._showNotifications),
      show_tag_forti_client: cdktf.stringToTerraform(this._showTagFortiClient),
      users_can_disconnect: cdktf.stringToTerraform(this._usersCanDisconnect),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_config_backup: {
        value: cdktf.stringToHclTerraform(this._allowConfigBackup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ems_disconnect_password: {
        value: cdktf.stringToHclTerraform(this._emsDisconnectPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notify_vpn_issue: {
        value: cdktf.stringToHclTerraform(this._notifyVpnIssue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_key: {
        value: cdktf.stringToHclTerraform(this._primaryKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      show_notifications: {
        value: cdktf.stringToHclTerraform(this._showNotifications),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      show_tag_forti_client: {
        value: cdktf.stringToHclTerraform(this._showTagFortiClient),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      users_can_disconnect: {
        value: cdktf.stringToHclTerraform(this._usersCanDisconnect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
