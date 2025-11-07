// https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/team_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TeamSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * If `true`, devices are automatically approved for authenticated Users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/team_settings#approve_device_without_interaction TeamSettings#approve_device_without_interaction}
  */
  readonly approveDeviceWithoutInteraction?: boolean | cdktf.IResolvable;
  /**
  * The maximum time before a Client session expires. The duration can be from 3600 – 90000 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/team_settings#client_session_duration TeamSettings#client_session_duration}
  */
  readonly clientSessionDuration?: number;
  /**
  * Options for including the User Security Identifier (SID) in the certificate used for Passwordless authentication to a Windows server via RDP. Possible values: `Never`, `If_Available`, and `Always`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/team_settings#include_user_sid TeamSettings#include_user_sid}
  */
  readonly includeUserSid?: string;
  /**
  * If a disabled or deleted User is able to authenticate through the IdP, their user settings are re-enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/team_settings#reactivate_users_via_idp TeamSettings#reactivate_users_via_idp}
  */
  readonly reactivateUsersViaIdp?: boolean | cdktf.IResolvable;
  /**
  * If true, ASA has ASA Users configured through SCIM to maintain the exact username that is specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/team_settings#user_provisioning_exact_username TeamSettings#user_provisioning_exact_username}
  */
  readonly userProvisioningExactUsername?: boolean | cdktf.IResolvable;
  /**
  * Defines the duration of the web session. Configure the web session to be between 30 minutes and 25 hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/team_settings#web_session_duration TeamSettings#web_session_duration}
  */
  readonly webSessionDuration?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/team_settings oktapam_team_settings}
*/
export class TeamSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oktapam_team_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TeamSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TeamSettings to import
  * @param importFromId The id of the existing TeamSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/team_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TeamSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oktapam_team_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/team_settings oktapam_team_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TeamSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: TeamSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'oktapam_team_settings',
      terraformGeneratorMetadata: {
        providerName: 'oktapam',
        providerVersion: '0.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._approveDeviceWithoutInteraction = config.approveDeviceWithoutInteraction;
    this._clientSessionDuration = config.clientSessionDuration;
    this._includeUserSid = config.includeUserSid;
    this._reactivateUsersViaIdp = config.reactivateUsersViaIdp;
    this._userProvisioningExactUsername = config.userProvisioningExactUsername;
    this._webSessionDuration = config.webSessionDuration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // approve_device_without_interaction - computed: false, optional: true, required: false
  private _approveDeviceWithoutInteraction?: boolean | cdktf.IResolvable; 
  public get approveDeviceWithoutInteraction() {
    return this.getBooleanAttribute('approve_device_without_interaction');
  }
  public set approveDeviceWithoutInteraction(value: boolean | cdktf.IResolvable) {
    this._approveDeviceWithoutInteraction = value;
  }
  public resetApproveDeviceWithoutInteraction() {
    this._approveDeviceWithoutInteraction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approveDeviceWithoutInteractionInput() {
    return this._approveDeviceWithoutInteraction;
  }

  // client_session_duration - computed: false, optional: true, required: false
  private _clientSessionDuration?: number; 
  public get clientSessionDuration() {
    return this.getNumberAttribute('client_session_duration');
  }
  public set clientSessionDuration(value: number) {
    this._clientSessionDuration = value;
  }
  public resetClientSessionDuration() {
    this._clientSessionDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSessionDurationInput() {
    return this._clientSessionDuration;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_user_sid - computed: false, optional: true, required: false
  private _includeUserSid?: string; 
  public get includeUserSid() {
    return this.getStringAttribute('include_user_sid');
  }
  public set includeUserSid(value: string) {
    this._includeUserSid = value;
  }
  public resetIncludeUserSid() {
    this._includeUserSid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeUserSidInput() {
    return this._includeUserSid;
  }

  // reactivate_users_via_idp - computed: false, optional: true, required: false
  private _reactivateUsersViaIdp?: boolean | cdktf.IResolvable; 
  public get reactivateUsersViaIdp() {
    return this.getBooleanAttribute('reactivate_users_via_idp');
  }
  public set reactivateUsersViaIdp(value: boolean | cdktf.IResolvable) {
    this._reactivateUsersViaIdp = value;
  }
  public resetReactivateUsersViaIdp() {
    this._reactivateUsersViaIdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reactivateUsersViaIdpInput() {
    return this._reactivateUsersViaIdp;
  }

  // user_provisioning_exact_username - computed: false, optional: true, required: false
  private _userProvisioningExactUsername?: boolean | cdktf.IResolvable; 
  public get userProvisioningExactUsername() {
    return this.getBooleanAttribute('user_provisioning_exact_username');
  }
  public set userProvisioningExactUsername(value: boolean | cdktf.IResolvable) {
    this._userProvisioningExactUsername = value;
  }
  public resetUserProvisioningExactUsername() {
    this._userProvisioningExactUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userProvisioningExactUsernameInput() {
    return this._userProvisioningExactUsername;
  }

  // web_session_duration - computed: false, optional: true, required: false
  private _webSessionDuration?: number; 
  public get webSessionDuration() {
    return this.getNumberAttribute('web_session_duration');
  }
  public set webSessionDuration(value: number) {
    this._webSessionDuration = value;
  }
  public resetWebSessionDuration() {
    this._webSessionDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webSessionDurationInput() {
    return this._webSessionDuration;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      approve_device_without_interaction: cdktf.booleanToTerraform(this._approveDeviceWithoutInteraction),
      client_session_duration: cdktf.numberToTerraform(this._clientSessionDuration),
      include_user_sid: cdktf.stringToTerraform(this._includeUserSid),
      reactivate_users_via_idp: cdktf.booleanToTerraform(this._reactivateUsersViaIdp),
      user_provisioning_exact_username: cdktf.booleanToTerraform(this._userProvisioningExactUsername),
      web_session_duration: cdktf.numberToTerraform(this._webSessionDuration),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      approve_device_without_interaction: {
        value: cdktf.booleanToHclTerraform(this._approveDeviceWithoutInteraction),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      client_session_duration: {
        value: cdktf.numberToHclTerraform(this._clientSessionDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      include_user_sid: {
        value: cdktf.stringToHclTerraform(this._includeUserSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reactivate_users_via_idp: {
        value: cdktf.booleanToHclTerraform(this._reactivateUsersViaIdp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      user_provisioning_exact_username: {
        value: cdktf.booleanToHclTerraform(this._userProvisioningExactUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      web_session_duration: {
        value: cdktf.numberToHclTerraform(this._webSessionDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
