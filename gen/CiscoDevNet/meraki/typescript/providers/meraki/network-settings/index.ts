// https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/network_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enables / disables the authentication on Local Status page(s).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/network_settings#local_status_page_authentication_enabled NetworkSettings#local_status_page_authentication_enabled}
  */
  readonly localStatusPageAuthenticationEnabled?: boolean | cdktf.IResolvable;
  /**
  * The password used for Local Status Page(s). Set this to null to clear the password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/network_settings#local_status_page_authentication_password NetworkSettings#local_status_page_authentication_password}
  */
  readonly localStatusPageAuthenticationPassword?: string;
  /**
  * The username used for Local Status Page(s).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/network_settings#local_status_page_authentication_username NetworkSettings#local_status_page_authentication_username}
  */
  readonly localStatusPageAuthenticationUsername?: string;
  /**
  * Enables / disables the local device status pages (my.meraki.com, ap.meraki.com, switch.meraki.com, wired.meraki.com). Optional (defaults to false)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/network_settings#local_status_page_enabled NetworkSettings#local_status_page_enabled}
  */
  readonly localStatusPageEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enables / disables Named VLANs on the Network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/network_settings#named_vlans_enabled NetworkSettings#named_vlans_enabled}
  */
  readonly namedVlansEnabled?: boolean | cdktf.IResolvable;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/network_settings#network_id NetworkSettings#network_id}
  */
  readonly networkId: string;
  /**
  * Enables / disables access to the device status page (http://[device`s LAN IP]). Optional. Can only be set if localStatusPageEnabled is set to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/network_settings#remote_status_page_enabled NetworkSettings#remote_status_page_enabled}
  */
  readonly remoteStatusPageEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enables / disables SecureConnect on the network. Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/network_settings#secure_port_enabled NetworkSettings#secure_port_enabled}
  */
  readonly securePortEnabled?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/network_settings meraki_network_settings}
*/
export class NetworkSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_network_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkSettings to import
  * @param importFromId The id of the existing NetworkSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/network_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_network_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/network_settings meraki_network_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_network_settings',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.9.0',
        providerVersionConstraint: '1.9.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._localStatusPageAuthenticationEnabled = config.localStatusPageAuthenticationEnabled;
    this._localStatusPageAuthenticationPassword = config.localStatusPageAuthenticationPassword;
    this._localStatusPageAuthenticationUsername = config.localStatusPageAuthenticationUsername;
    this._localStatusPageEnabled = config.localStatusPageEnabled;
    this._namedVlansEnabled = config.namedVlansEnabled;
    this._networkId = config.networkId;
    this._remoteStatusPageEnabled = config.remoteStatusPageEnabled;
    this._securePortEnabled = config.securePortEnabled;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // local_status_page_authentication_enabled - computed: false, optional: true, required: false
  private _localStatusPageAuthenticationEnabled?: boolean | cdktf.IResolvable; 
  public get localStatusPageAuthenticationEnabled() {
    return this.getBooleanAttribute('local_status_page_authentication_enabled');
  }
  public set localStatusPageAuthenticationEnabled(value: boolean | cdktf.IResolvable) {
    this._localStatusPageAuthenticationEnabled = value;
  }
  public resetLocalStatusPageAuthenticationEnabled() {
    this._localStatusPageAuthenticationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localStatusPageAuthenticationEnabledInput() {
    return this._localStatusPageAuthenticationEnabled;
  }

  // local_status_page_authentication_password - computed: false, optional: true, required: false
  private _localStatusPageAuthenticationPassword?: string; 
  public get localStatusPageAuthenticationPassword() {
    return this.getStringAttribute('local_status_page_authentication_password');
  }
  public set localStatusPageAuthenticationPassword(value: string) {
    this._localStatusPageAuthenticationPassword = value;
  }
  public resetLocalStatusPageAuthenticationPassword() {
    this._localStatusPageAuthenticationPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localStatusPageAuthenticationPasswordInput() {
    return this._localStatusPageAuthenticationPassword;
  }

  // local_status_page_authentication_username - computed: false, optional: true, required: false
  private _localStatusPageAuthenticationUsername?: string; 
  public get localStatusPageAuthenticationUsername() {
    return this.getStringAttribute('local_status_page_authentication_username');
  }
  public set localStatusPageAuthenticationUsername(value: string) {
    this._localStatusPageAuthenticationUsername = value;
  }
  public resetLocalStatusPageAuthenticationUsername() {
    this._localStatusPageAuthenticationUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localStatusPageAuthenticationUsernameInput() {
    return this._localStatusPageAuthenticationUsername;
  }

  // local_status_page_enabled - computed: false, optional: true, required: false
  private _localStatusPageEnabled?: boolean | cdktf.IResolvable; 
  public get localStatusPageEnabled() {
    return this.getBooleanAttribute('local_status_page_enabled');
  }
  public set localStatusPageEnabled(value: boolean | cdktf.IResolvable) {
    this._localStatusPageEnabled = value;
  }
  public resetLocalStatusPageEnabled() {
    this._localStatusPageEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localStatusPageEnabledInput() {
    return this._localStatusPageEnabled;
  }

  // named_vlans_enabled - computed: false, optional: true, required: false
  private _namedVlansEnabled?: boolean | cdktf.IResolvable; 
  public get namedVlansEnabled() {
    return this.getBooleanAttribute('named_vlans_enabled');
  }
  public set namedVlansEnabled(value: boolean | cdktf.IResolvable) {
    this._namedVlansEnabled = value;
  }
  public resetNamedVlansEnabled() {
    this._namedVlansEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namedVlansEnabledInput() {
    return this._namedVlansEnabled;
  }

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // remote_status_page_enabled - computed: false, optional: true, required: false
  private _remoteStatusPageEnabled?: boolean | cdktf.IResolvable; 
  public get remoteStatusPageEnabled() {
    return this.getBooleanAttribute('remote_status_page_enabled');
  }
  public set remoteStatusPageEnabled(value: boolean | cdktf.IResolvable) {
    this._remoteStatusPageEnabled = value;
  }
  public resetRemoteStatusPageEnabled() {
    this._remoteStatusPageEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteStatusPageEnabledInput() {
    return this._remoteStatusPageEnabled;
  }

  // secure_port_enabled - computed: false, optional: true, required: false
  private _securePortEnabled?: boolean | cdktf.IResolvable; 
  public get securePortEnabled() {
    return this.getBooleanAttribute('secure_port_enabled');
  }
  public set securePortEnabled(value: boolean | cdktf.IResolvable) {
    this._securePortEnabled = value;
  }
  public resetSecurePortEnabled() {
    this._securePortEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securePortEnabledInput() {
    return this._securePortEnabled;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      local_status_page_authentication_enabled: cdktf.booleanToTerraform(this._localStatusPageAuthenticationEnabled),
      local_status_page_authentication_password: cdktf.stringToTerraform(this._localStatusPageAuthenticationPassword),
      local_status_page_authentication_username: cdktf.stringToTerraform(this._localStatusPageAuthenticationUsername),
      local_status_page_enabled: cdktf.booleanToTerraform(this._localStatusPageEnabled),
      named_vlans_enabled: cdktf.booleanToTerraform(this._namedVlansEnabled),
      network_id: cdktf.stringToTerraform(this._networkId),
      remote_status_page_enabled: cdktf.booleanToTerraform(this._remoteStatusPageEnabled),
      secure_port_enabled: cdktf.booleanToTerraform(this._securePortEnabled),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      local_status_page_authentication_enabled: {
        value: cdktf.booleanToHclTerraform(this._localStatusPageAuthenticationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      local_status_page_authentication_password: {
        value: cdktf.stringToHclTerraform(this._localStatusPageAuthenticationPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_status_page_authentication_username: {
        value: cdktf.stringToHclTerraform(this._localStatusPageAuthenticationUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_status_page_enabled: {
        value: cdktf.booleanToHclTerraform(this._localStatusPageEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      named_vlans_enabled: {
        value: cdktf.booleanToHclTerraform(this._namedVlansEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_status_page_enabled: {
        value: cdktf.booleanToHclTerraform(this._remoteStatusPageEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      secure_port_enabled: {
        value: cdktf.booleanToHclTerraform(this._securePortEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
