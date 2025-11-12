// https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/wireless_wifi_iface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WirelessWifiIfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the physical device. This name is what the device is known as in LuCI/UCI, or the `id` field in Terraform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/wireless_wifi_iface#device WirelessWifiIface#device}
  */
  readonly device: string;
  /**
  * Encryption method. Currently, only PSK encryption methods are supported. Must be one of: "none", "psk", "psk2", "psk2+aes", "psk2+ccmp", "psk2+tkip", "psk2+tkip+aes", "psk2+tkip+ccmp", "psk+aes", "psk+ccmp", "psk-mixed", "psk-mixed+aes", "psk-mixed+ccmp", "psk-mixed+tkip", "psk-mixed+tkip+aes", "psk-mixed+tkip+ccmp", "psk+tkip", "psk+tkip+aes", "psk+tkip+ccmp", "sae", "sae-mixed".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/wireless_wifi_iface#encryption WirelessWifiIface#encryption}
  */
  readonly encryption?: string;
  /**
  * Name of the section. This name is only used when interacting with UCI directly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/wireless_wifi_iface#id WirelessWifiIface#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Isolate wireless clients from each other.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/wireless_wifi_iface#isolate WirelessWifiIface#isolate}
  */
  readonly isolate?: boolean | cdktf.IResolvable;
  /**
  * The pre-shared passphrase from which the pre-shared key will be derived. The clear text key has to be 8-63 characters long.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/wireless_wifi_iface#key WirelessWifiIface#key}
  */
  readonly key?: string;
  /**
  * The operation mode of the wireless network interface controller.. Currently only "ap" is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/wireless_wifi_iface#mode WirelessWifiIface#mode}
  */
  readonly mode: string;
  /**
  * Network interface to attach the wireless network. This name is what the interface is known as in UCI, or the `id` field in Terraform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/wireless_wifi_iface#network WirelessWifiIface#network}
  */
  readonly network: string;
  /**
  * The broadcasted SSID of the wireless network. This is what actual clients will see the network as.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/wireless_wifi_iface#ssid WirelessWifiIface#ssid}
  */
  readonly ssid: string;
  /**
  * Enable WPA key reinstallation attack (KRACK) workaround. This should be `true` to enable KRACK workaround (you almost surely want this enabled).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/wireless_wifi_iface#wpa_disable_eapol_key_retries WirelessWifiIface#wpa_disable_eapol_key_retries}
  */
  readonly wpaDisableEapolKeyRetries?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/wireless_wifi_iface openwrt_wireless_wifi_iface}
*/
export class WirelessWifiIface extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "openwrt_wireless_wifi_iface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WirelessWifiIface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WirelessWifiIface to import
  * @param importFromId The id of the existing WirelessWifiIface that should be imported. Refer to the {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/wireless_wifi_iface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WirelessWifiIface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "openwrt_wireless_wifi_iface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/wireless_wifi_iface openwrt_wireless_wifi_iface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WirelessWifiIfaceConfig
  */
  public constructor(scope: Construct, id: string, config: WirelessWifiIfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'openwrt_wireless_wifi_iface',
      terraformGeneratorMetadata: {
        providerName: 'openwrt',
        providerVersion: '0.0.20',
        providerVersionConstraint: '0.0.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
    this._encryption = config.encryption;
    this._id = config.id;
    this._isolate = config.isolate;
    this._key = config.key;
    this._mode = config.mode;
    this._network = config.network;
    this._ssid = config.ssid;
    this._wpaDisableEapolKeyRetries = config.wpaDisableEapolKeyRetries;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device - computed: false, optional: false, required: true
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // encryption - computed: true, optional: true, required: false
  private _encryption?: string; 
  public get encryption() {
    return this.getStringAttribute('encryption');
  }
  public set encryption(value: string) {
    this._encryption = value;
  }
  public resetEncryption() {
    this._encryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // isolate - computed: true, optional: true, required: false
  private _isolate?: boolean | cdktf.IResolvable; 
  public get isolate() {
    return this.getBooleanAttribute('isolate');
  }
  public set isolate(value: boolean | cdktf.IResolvable) {
    this._isolate = value;
  }
  public resetIsolate() {
    this._isolate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isolateInput() {
    return this._isolate;
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // ssid - computed: false, optional: false, required: true
  private _ssid?: string; 
  public get ssid() {
    return this.getStringAttribute('ssid');
  }
  public set ssid(value: string) {
    this._ssid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ssidInput() {
    return this._ssid;
  }

  // wpa_disable_eapol_key_retries - computed: true, optional: true, required: false
  private _wpaDisableEapolKeyRetries?: boolean | cdktf.IResolvable; 
  public get wpaDisableEapolKeyRetries() {
    return this.getBooleanAttribute('wpa_disable_eapol_key_retries');
  }
  public set wpaDisableEapolKeyRetries(value: boolean | cdktf.IResolvable) {
    this._wpaDisableEapolKeyRetries = value;
  }
  public resetWpaDisableEapolKeyRetries() {
    this._wpaDisableEapolKeyRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wpaDisableEapolKeyRetriesInput() {
    return this._wpaDisableEapolKeyRetries;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      encryption: cdktf.stringToTerraform(this._encryption),
      id: cdktf.stringToTerraform(this._id),
      isolate: cdktf.booleanToTerraform(this._isolate),
      key: cdktf.stringToTerraform(this._key),
      mode: cdktf.stringToTerraform(this._mode),
      network: cdktf.stringToTerraform(this._network),
      ssid: cdktf.stringToTerraform(this._ssid),
      wpa_disable_eapol_key_retries: cdktf.booleanToTerraform(this._wpaDisableEapolKeyRetries),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encryption: {
        value: cdktf.stringToHclTerraform(this._encryption),
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
      isolate: {
        value: cdktf.booleanToHclTerraform(this._isolate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network: {
        value: cdktf.stringToHclTerraform(this._network),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssid: {
        value: cdktf.stringToHclTerraform(this._ssid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wpa_disable_eapol_key_retries: {
        value: cdktf.booleanToHclTerraform(this._wpaDisableEapolKeyRetries),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
