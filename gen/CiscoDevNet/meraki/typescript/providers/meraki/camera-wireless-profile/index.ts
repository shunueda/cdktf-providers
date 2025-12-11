// https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/camera_wireless_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CameraWirelessProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * The password of the identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/camera_wireless_profile#identity_password CameraWirelessProfile#identity_password}
  */
  readonly identityPassword?: string;
  /**
  * The username of the identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/camera_wireless_profile#identity_username CameraWirelessProfile#identity_username}
  */
  readonly identityUsername?: string;
  /**
  * The name of the camera wireless profile. This parameter is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/camera_wireless_profile#name CameraWirelessProfile#name}
  */
  readonly name: string;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/camera_wireless_profile#network_id CameraWirelessProfile#network_id}
  */
  readonly networkId: string;
  /**
  * The auth mode of the SSID. It can be set to (`psk`, `8021x-radius`).
  *   - Choices: `8021x-radius`, `psk`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/camera_wireless_profile#ssid_auth_mode CameraWirelessProfile#ssid_auth_mode}
  */
  readonly ssidAuthMode: string;
  /**
  * The encryption mode of the SSID. It can be set to (`wpa`, `wpa-eap`). With `wpa` mode, the authMode should be `psk` and with `wpa-eap` the authMode should be `8021x-radius`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/camera_wireless_profile#ssid_encryption_mode CameraWirelessProfile#ssid_encryption_mode}
  */
  readonly ssidEncryptionMode?: string;
  /**
  * The name of the SSID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/camera_wireless_profile#ssid_name CameraWirelessProfile#ssid_name}
  */
  readonly ssidName: string;
  /**
  * The pre-shared key of the SSID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/camera_wireless_profile#ssid_psk CameraWirelessProfile#ssid_psk}
  */
  readonly ssidPsk?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/camera_wireless_profile meraki_camera_wireless_profile}
*/
export class CameraWirelessProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_camera_wireless_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CameraWirelessProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CameraWirelessProfile to import
  * @param importFromId The id of the existing CameraWirelessProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/camera_wireless_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CameraWirelessProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_camera_wireless_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/camera_wireless_profile meraki_camera_wireless_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CameraWirelessProfileConfig
  */
  public constructor(scope: Construct, id: string, config: CameraWirelessProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_camera_wireless_profile',
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
    this._identityPassword = config.identityPassword;
    this._identityUsername = config.identityUsername;
    this._name = config.name;
    this._networkId = config.networkId;
    this._ssidAuthMode = config.ssidAuthMode;
    this._ssidEncryptionMode = config.ssidEncryptionMode;
    this._ssidName = config.ssidName;
    this._ssidPsk = config.ssidPsk;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity_password - computed: false, optional: true, required: false
  private _identityPassword?: string; 
  public get identityPassword() {
    return this.getStringAttribute('identity_password');
  }
  public set identityPassword(value: string) {
    this._identityPassword = value;
  }
  public resetIdentityPassword() {
    this._identityPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityPasswordInput() {
    return this._identityPassword;
  }

  // identity_username - computed: false, optional: true, required: false
  private _identityUsername?: string; 
  public get identityUsername() {
    return this.getStringAttribute('identity_username');
  }
  public set identityUsername(value: string) {
    this._identityUsername = value;
  }
  public resetIdentityUsername() {
    this._identityUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityUsernameInput() {
    return this._identityUsername;
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

  // ssid_auth_mode - computed: false, optional: false, required: true
  private _ssidAuthMode?: string; 
  public get ssidAuthMode() {
    return this.getStringAttribute('ssid_auth_mode');
  }
  public set ssidAuthMode(value: string) {
    this._ssidAuthMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ssidAuthModeInput() {
    return this._ssidAuthMode;
  }

  // ssid_encryption_mode - computed: false, optional: true, required: false
  private _ssidEncryptionMode?: string; 
  public get ssidEncryptionMode() {
    return this.getStringAttribute('ssid_encryption_mode');
  }
  public set ssidEncryptionMode(value: string) {
    this._ssidEncryptionMode = value;
  }
  public resetSsidEncryptionMode() {
    this._ssidEncryptionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssidEncryptionModeInput() {
    return this._ssidEncryptionMode;
  }

  // ssid_name - computed: false, optional: false, required: true
  private _ssidName?: string; 
  public get ssidName() {
    return this.getStringAttribute('ssid_name');
  }
  public set ssidName(value: string) {
    this._ssidName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ssidNameInput() {
    return this._ssidName;
  }

  // ssid_psk - computed: false, optional: true, required: false
  private _ssidPsk?: string; 
  public get ssidPsk() {
    return this.getStringAttribute('ssid_psk');
  }
  public set ssidPsk(value: string) {
    this._ssidPsk = value;
  }
  public resetSsidPsk() {
    this._ssidPsk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssidPskInput() {
    return this._ssidPsk;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      identity_password: cdktf.stringToTerraform(this._identityPassword),
      identity_username: cdktf.stringToTerraform(this._identityUsername),
      name: cdktf.stringToTerraform(this._name),
      network_id: cdktf.stringToTerraform(this._networkId),
      ssid_auth_mode: cdktf.stringToTerraform(this._ssidAuthMode),
      ssid_encryption_mode: cdktf.stringToTerraform(this._ssidEncryptionMode),
      ssid_name: cdktf.stringToTerraform(this._ssidName),
      ssid_psk: cdktf.stringToTerraform(this._ssidPsk),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      identity_password: {
        value: cdktf.stringToHclTerraform(this._identityPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identity_username: {
        value: cdktf.stringToHclTerraform(this._identityUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssid_auth_mode: {
        value: cdktf.stringToHclTerraform(this._ssidAuthMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssid_encryption_mode: {
        value: cdktf.stringToHclTerraform(this._ssidEncryptionMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssid_name: {
        value: cdktf.stringToHclTerraform(this._ssidName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssid_psk: {
        value: cdktf.stringToHclTerraform(this._ssidPsk),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
