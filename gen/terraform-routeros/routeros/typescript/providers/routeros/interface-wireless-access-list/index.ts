// https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_wireless_access_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfaceWirelessAccessListConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_wireless_access_list#___path___ InterfaceWirelessAccessList#___path___}
  */
  readonly path?: string;
  /**
  * Option which permits client's signal to be out of the range always or for some time interval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_wireless_access_list#allow_signal_out_of_range InterfaceWirelessAccessList#allow_signal_out_of_range}
  */
  readonly allowSignalOutOfRange?: string;
  /**
  * Limit rate of data transmission to this client. Value 0 means no limit. Value is in bits per second.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_wireless_access_list#ap_tx_limit InterfaceWirelessAccessList#ap_tx_limit}
  */
  readonly apTxLimit?: number;
  /**
  * No - Client association will always fail.yes - Use authentication procedure that is specified in the security-profile of the interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_wireless_access_list#authentication InterfaceWirelessAccessList#authentication}
  */
  readonly authentication?: boolean | cdktf.IResolvable;
  /**
  * Ask client to limit rate of data transmission. Value 0 means no limit.This is a proprietary extension that is supported by RouterOS clients.Value is in bits per second.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_wireless_access_list#client_tx_limit InterfaceWirelessAccessList#client_tx_limit}
  */
  readonly clientTxLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_wireless_access_list#comment InterfaceWirelessAccessList#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_wireless_access_list#disabled InterfaceWirelessAccessList#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * 
  *   * false - Client cannot send frames to other station that are connected to same access point.
  *   *true - Client can send frames to other stations on the same access point.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_wireless_access_list#forwarding InterfaceWirelessAccessList#forwarding}
  */
  readonly forwarding?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_wireless_access_list#id InterfaceWirelessAccessList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Rules with interface=any are used for any wireless interface and the `interface = all` defines interface-list `all` name. To make rule that applies only to one wireless interface, specify that interface as a value of this property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_wireless_access_list#interface InterfaceWirelessAccessList#interface}
  */
  readonly interface?: string;
  /**
  * Rule matches client with the specified MAC address. Value 00:00:00:00:00:00 matches always.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_wireless_access_list#mac_address InterfaceWirelessAccessList#mac_address}
  */
  readonly macAddress?: string;
  /**
  * Management protection shared secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_wireless_access_list#management_protection_key InterfaceWirelessAccessList#management_protection_key}
  */
  readonly managementProtectionKey?: string;
  /**
  * Only for `WEP` modes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_wireless_access_list#private_algo InterfaceWirelessAccessList#private_algo}
  */
  readonly privateAlgo?: string;
  /**
  * Only for `WEP` modes (HEX).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_wireless_access_list#private_key InterfaceWirelessAccessList#private_key}
  */
  readonly privateKey?: string;
  /**
  * Used in `WPA PSK` mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_wireless_access_list#private_pre_shared_key InterfaceWirelessAccessList#private_pre_shared_key}
  */
  readonly privatePreSharedKey?: string;
  /**
  * Rule matches if signal strength of the station is within the range.If signal strength of the station will go out of the range that is specified in the rule, access point will disconnect that station.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_wireless_access_list#signal_range InterfaceWirelessAccessList#signal_range}
  */
  readonly signalRange?: string;
  /**
  * Rule will match only during specified time.Station will be disconnected after specified time ends. Both start and end time is expressed as time since midnight, 00:00. Rule will match only during specified days of the week. Ex: "3h3m-5h,mon,tue,wed,thu,fri"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_wireless_access_list#time InterfaceWirelessAccessList#time}
  */
  readonly time?: string;
  /**
  * VLAN ID to use if doing VLAN tagging.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_wireless_access_list#vlan_id InterfaceWirelessAccessList#vlan_id}
  */
  readonly vlanId?: number;
  /**
  * VLAN tagging mode specifies if traffic coming from client should get tagged (and untagged when going to client).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_wireless_access_list#vlan_mode InterfaceWirelessAccessList#vlan_mode}
  */
  readonly vlanMode?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_wireless_access_list routeros_interface_wireless_access_list}
*/
export class InterfaceWirelessAccessList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_interface_wireless_access_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfaceWirelessAccessList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfaceWirelessAccessList to import
  * @param importFromId The id of the existing InterfaceWirelessAccessList that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_wireless_access_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfaceWirelessAccessList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_interface_wireless_access_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_wireless_access_list routeros_interface_wireless_access_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfaceWirelessAccessListConfig = {}
  */
  public constructor(scope: Construct, id: string, config: InterfaceWirelessAccessListConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'routeros_interface_wireless_access_list',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.98.0',
        providerVersionConstraint: '1.98.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._path = config.path;
    this._allowSignalOutOfRange = config.allowSignalOutOfRange;
    this._apTxLimit = config.apTxLimit;
    this._authentication = config.authentication;
    this._clientTxLimit = config.clientTxLimit;
    this._comment = config.comment;
    this._disabled = config.disabled;
    this._forwarding = config.forwarding;
    this._id = config.id;
    this._interface = config.interface;
    this._macAddress = config.macAddress;
    this._managementProtectionKey = config.managementProtectionKey;
    this._privateAlgo = config.privateAlgo;
    this._privateKey = config.privateKey;
    this._privatePreSharedKey = config.privatePreSharedKey;
    this._signalRange = config.signalRange;
    this._time = config.time;
    this._vlanId = config.vlanId;
    this._vlanMode = config.vlanMode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ___path___ - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('___path___');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // allow_signal_out_of_range - computed: false, optional: true, required: false
  private _allowSignalOutOfRange?: string; 
  public get allowSignalOutOfRange() {
    return this.getStringAttribute('allow_signal_out_of_range');
  }
  public set allowSignalOutOfRange(value: string) {
    this._allowSignalOutOfRange = value;
  }
  public resetAllowSignalOutOfRange() {
    this._allowSignalOutOfRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSignalOutOfRangeInput() {
    return this._allowSignalOutOfRange;
  }

  // ap_tx_limit - computed: false, optional: true, required: false
  private _apTxLimit?: number; 
  public get apTxLimit() {
    return this.getNumberAttribute('ap_tx_limit');
  }
  public set apTxLimit(value: number) {
    this._apTxLimit = value;
  }
  public resetApTxLimit() {
    this._apTxLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apTxLimitInput() {
    return this._apTxLimit;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication?: boolean | cdktf.IResolvable; 
  public get authentication() {
    return this.getBooleanAttribute('authentication');
  }
  public set authentication(value: boolean | cdktf.IResolvable) {
    this._authentication = value;
  }
  public resetAuthentication() {
    this._authentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication;
  }

  // client_tx_limit - computed: false, optional: true, required: false
  private _clientTxLimit?: number; 
  public get clientTxLimit() {
    return this.getNumberAttribute('client_tx_limit');
  }
  public set clientTxLimit(value: number) {
    this._clientTxLimit = value;
  }
  public resetClientTxLimit() {
    this._clientTxLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientTxLimitInput() {
    return this._clientTxLimit;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // forwarding - computed: false, optional: true, required: false
  private _forwarding?: boolean | cdktf.IResolvable; 
  public get forwarding() {
    return this.getBooleanAttribute('forwarding');
  }
  public set forwarding(value: boolean | cdktf.IResolvable) {
    this._forwarding = value;
  }
  public resetForwarding() {
    this._forwarding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardingInput() {
    return this._forwarding;
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

  // interface - computed: false, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // mac_address - computed: false, optional: true, required: false
  private _macAddress?: string; 
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }
  public set macAddress(value: string) {
    this._macAddress = value;
  }
  public resetMacAddress() {
    this._macAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressInput() {
    return this._macAddress;
  }

  // management_protection_key - computed: false, optional: true, required: false
  private _managementProtectionKey?: string; 
  public get managementProtectionKey() {
    return this.getStringAttribute('management_protection_key');
  }
  public set managementProtectionKey(value: string) {
    this._managementProtectionKey = value;
  }
  public resetManagementProtectionKey() {
    this._managementProtectionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementProtectionKeyInput() {
    return this._managementProtectionKey;
  }

  // private_algo - computed: false, optional: true, required: false
  private _privateAlgo?: string; 
  public get privateAlgo() {
    return this.getStringAttribute('private_algo');
  }
  public set privateAlgo(value: string) {
    this._privateAlgo = value;
  }
  public resetPrivateAlgo() {
    this._privateAlgo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateAlgoInput() {
    return this._privateAlgo;
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // private_pre_shared_key - computed: false, optional: true, required: false
  private _privatePreSharedKey?: string; 
  public get privatePreSharedKey() {
    return this.getStringAttribute('private_pre_shared_key');
  }
  public set privatePreSharedKey(value: string) {
    this._privatePreSharedKey = value;
  }
  public resetPrivatePreSharedKey() {
    this._privatePreSharedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privatePreSharedKeyInput() {
    return this._privatePreSharedKey;
  }

  // signal_range - computed: false, optional: true, required: false
  private _signalRange?: string; 
  public get signalRange() {
    return this.getStringAttribute('signal_range');
  }
  public set signalRange(value: string) {
    this._signalRange = value;
  }
  public resetSignalRange() {
    this._signalRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signalRangeInput() {
    return this._signalRange;
  }

  // time - computed: false, optional: true, required: false
  private _time?: string; 
  public get time() {
    return this.getStringAttribute('time');
  }
  public set time(value: string) {
    this._time = value;
  }
  public resetTime() {
    this._time = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }

  // vlan_id - computed: false, optional: true, required: false
  private _vlanId?: number; 
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
  public set vlanId(value: number) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }

  // vlan_mode - computed: false, optional: true, required: false
  private _vlanMode?: string; 
  public get vlanMode() {
    return this.getStringAttribute('vlan_mode');
  }
  public set vlanMode(value: string) {
    this._vlanMode = value;
  }
  public resetVlanMode() {
    this._vlanMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanModeInput() {
    return this._vlanMode;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      allow_signal_out_of_range: cdktf.stringToTerraform(this._allowSignalOutOfRange),
      ap_tx_limit: cdktf.numberToTerraform(this._apTxLimit),
      authentication: cdktf.booleanToTerraform(this._authentication),
      client_tx_limit: cdktf.numberToTerraform(this._clientTxLimit),
      comment: cdktf.stringToTerraform(this._comment),
      disabled: cdktf.booleanToTerraform(this._disabled),
      forwarding: cdktf.booleanToTerraform(this._forwarding),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.stringToTerraform(this._interface),
      mac_address: cdktf.stringToTerraform(this._macAddress),
      management_protection_key: cdktf.stringToTerraform(this._managementProtectionKey),
      private_algo: cdktf.stringToTerraform(this._privateAlgo),
      private_key: cdktf.stringToTerraform(this._privateKey),
      private_pre_shared_key: cdktf.stringToTerraform(this._privatePreSharedKey),
      signal_range: cdktf.stringToTerraform(this._signalRange),
      time: cdktf.stringToTerraform(this._time),
      vlan_id: cdktf.numberToTerraform(this._vlanId),
      vlan_mode: cdktf.stringToTerraform(this._vlanMode),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ___path___: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_signal_out_of_range: {
        value: cdktf.stringToHclTerraform(this._allowSignalOutOfRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ap_tx_limit: {
        value: cdktf.numberToHclTerraform(this._apTxLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      authentication: {
        value: cdktf.booleanToHclTerraform(this._authentication),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      client_tx_limit: {
        value: cdktf.numberToHclTerraform(this._clientTxLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      forwarding: {
        value: cdktf.booleanToHclTerraform(this._forwarding),
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
      interface: {
        value: cdktf.stringToHclTerraform(this._interface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac_address: {
        value: cdktf.stringToHclTerraform(this._macAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      management_protection_key: {
        value: cdktf.stringToHclTerraform(this._managementProtectionKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_algo: {
        value: cdktf.stringToHclTerraform(this._privateAlgo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_key: {
        value: cdktf.stringToHclTerraform(this._privateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_pre_shared_key: {
        value: cdktf.stringToHclTerraform(this._privatePreSharedKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signal_range: {
        value: cdktf.stringToHclTerraform(this._signalRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time: {
        value: cdktf.stringToHclTerraform(this._time),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan_id: {
        value: cdktf.numberToHclTerraform(this._vlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vlan_mode: {
        value: cdktf.stringToHclTerraform(this._vlanMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
