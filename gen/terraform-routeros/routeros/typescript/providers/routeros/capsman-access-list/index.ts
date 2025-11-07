// https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/capsman_access_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CapsmanAccessListConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/capsman_access_list#___path___ CapsmanAccessList#___path___}
  */
  readonly path?: string;
  /**
  * An action to take when a client matches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/capsman_access_list#action CapsmanAccessList#action}
  */
  readonly action?: string;
  /**
  * An option that permits the client's signal to be out of the range always or for some time interval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/capsman_access_list#allow_signal_out_of_range CapsmanAccessList#allow_signal_out_of_range}
  */
  readonly allowSignalOutOfRange?: string;
  /**
  * Transmission speed limit in the direction of the client..
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/capsman_access_list#ap_tx_limit CapsmanAccessList#ap_tx_limit}
  */
  readonly apTxLimit?: number;
  /**
  * An option that specifies whether to allow forwarding data between clients connected to the same interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/capsman_access_list#client_to_client_forwarding CapsmanAccessList#client_to_client_forwarding}
  */
  readonly clientToClientForwarding?: boolean | cdktf.IResolvable;
  /**
  * Transmission speed limit in the direction of the access point.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/capsman_access_list#client_tx_limit CapsmanAccessList#client_tx_limit}
  */
  readonly clientTxLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/capsman_access_list#comment CapsmanAccessList#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/capsman_access_list#disabled CapsmanAccessList#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/capsman_access_list#id CapsmanAccessList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Interface name to compare with an interface to which the client actually connects to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/capsman_access_list#interface CapsmanAccessList#interface}
  */
  readonly interface?: string;
  /**
  * MAC address of the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/capsman_access_list#mac_address CapsmanAccessList#mac_address}
  */
  readonly macAddress?: string;
  /**
  * MAC address mask to apply when comparing clients' addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/capsman_access_list#mac_mask CapsmanAccessList#mac_mask}
  */
  readonly macMask?: string;
  /**
  * Before which position the rule will be inserted.  
  * 	> Please check the effect of this option, as it does not work as you think!  
  * 	> Best way to use in conjunction with a data source. See [example](../data-sources/ip_firewall.md#example-usage).  
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/capsman_access_list#place_before CapsmanAccessList#place_before}
  */
  readonly placeBefore?: string;
  /**
  * PSK passphrase for the client if some PSK authentication algorithm is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/capsman_access_list#private_passphrase CapsmanAccessList#private_passphrase}
  */
  readonly privatePassphrase?: string;
  /**
  * An option that specifies if RADIUS traffic accounting should be used in case of RADIUS authentication of the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/capsman_access_list#radius_accounting CapsmanAccessList#radius_accounting}
  */
  readonly radiusAccounting?: boolean | cdktf.IResolvable;
  /**
  * The range in which the client signal must fall.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/capsman_access_list#signal_range CapsmanAccessList#signal_range}
  */
  readonly signalRange?: string;
  /**
  * The regular expression to compare the actual SSID the client connects to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/capsman_access_list#ssid_regexp CapsmanAccessList#ssid_regexp}
  */
  readonly ssidRegexp?: string;
  /**
  * Time of the day and days of the week when the rule is applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/capsman_access_list#time CapsmanAccessList#time}
  */
  readonly time?: string;
  /**
  * VLAN ID to use if vlan-mode enables use of VLAN tagging.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/capsman_access_list#vlan_id CapsmanAccessList#vlan_id}
  */
  readonly vlanId?: number;
  /**
  * VLAN tagging mode specifies if traffic coming from a client should get tagged and untagged when it goes back to the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/capsman_access_list#vlan_mode CapsmanAccessList#vlan_mode}
  */
  readonly vlanMode?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/capsman_access_list routeros_capsman_access_list}
*/
export class CapsmanAccessList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_capsman_access_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CapsmanAccessList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CapsmanAccessList to import
  * @param importFromId The id of the existing CapsmanAccessList that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/capsman_access_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CapsmanAccessList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_capsman_access_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/capsman_access_list routeros_capsman_access_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CapsmanAccessListConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CapsmanAccessListConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'routeros_capsman_access_list',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.90.0'
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
    this._action = config.action;
    this._allowSignalOutOfRange = config.allowSignalOutOfRange;
    this._apTxLimit = config.apTxLimit;
    this._clientToClientForwarding = config.clientToClientForwarding;
    this._clientTxLimit = config.clientTxLimit;
    this._comment = config.comment;
    this._disabled = config.disabled;
    this._id = config.id;
    this._interface = config.interface;
    this._macAddress = config.macAddress;
    this._macMask = config.macMask;
    this._placeBefore = config.placeBefore;
    this._privatePassphrase = config.privatePassphrase;
    this._radiusAccounting = config.radiusAccounting;
    this._signalRange = config.signalRange;
    this._ssidRegexp = config.ssidRegexp;
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

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // client_to_client_forwarding - computed: false, optional: true, required: false
  private _clientToClientForwarding?: boolean | cdktf.IResolvable; 
  public get clientToClientForwarding() {
    return this.getBooleanAttribute('client_to_client_forwarding');
  }
  public set clientToClientForwarding(value: boolean | cdktf.IResolvable) {
    this._clientToClientForwarding = value;
  }
  public resetClientToClientForwarding() {
    this._clientToClientForwarding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientToClientForwardingInput() {
    return this._clientToClientForwarding;
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

  // mac_mask - computed: false, optional: true, required: false
  private _macMask?: string; 
  public get macMask() {
    return this.getStringAttribute('mac_mask');
  }
  public set macMask(value: string) {
    this._macMask = value;
  }
  public resetMacMask() {
    this._macMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macMaskInput() {
    return this._macMask;
  }

  // place_before - computed: false, optional: true, required: false
  private _placeBefore?: string; 
  public get placeBefore() {
    return this.getStringAttribute('place_before');
  }
  public set placeBefore(value: string) {
    this._placeBefore = value;
  }
  public resetPlaceBefore() {
    this._placeBefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placeBeforeInput() {
    return this._placeBefore;
  }

  // private_passphrase - computed: false, optional: true, required: false
  private _privatePassphrase?: string; 
  public get privatePassphrase() {
    return this.getStringAttribute('private_passphrase');
  }
  public set privatePassphrase(value: string) {
    this._privatePassphrase = value;
  }
  public resetPrivatePassphrase() {
    this._privatePassphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privatePassphraseInput() {
    return this._privatePassphrase;
  }

  // radius_accounting - computed: false, optional: true, required: false
  private _radiusAccounting?: boolean | cdktf.IResolvable; 
  public get radiusAccounting() {
    return this.getBooleanAttribute('radius_accounting');
  }
  public set radiusAccounting(value: boolean | cdktf.IResolvable) {
    this._radiusAccounting = value;
  }
  public resetRadiusAccounting() {
    this._radiusAccounting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusAccountingInput() {
    return this._radiusAccounting;
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

  // ssid_regexp - computed: false, optional: true, required: false
  private _ssidRegexp?: string; 
  public get ssidRegexp() {
    return this.getStringAttribute('ssid_regexp');
  }
  public set ssidRegexp(value: string) {
    this._ssidRegexp = value;
  }
  public resetSsidRegexp() {
    this._ssidRegexp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssidRegexpInput() {
    return this._ssidRegexp;
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
      action: cdktf.stringToTerraform(this._action),
      allow_signal_out_of_range: cdktf.stringToTerraform(this._allowSignalOutOfRange),
      ap_tx_limit: cdktf.numberToTerraform(this._apTxLimit),
      client_to_client_forwarding: cdktf.booleanToTerraform(this._clientToClientForwarding),
      client_tx_limit: cdktf.numberToTerraform(this._clientTxLimit),
      comment: cdktf.stringToTerraform(this._comment),
      disabled: cdktf.booleanToTerraform(this._disabled),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.stringToTerraform(this._interface),
      mac_address: cdktf.stringToTerraform(this._macAddress),
      mac_mask: cdktf.stringToTerraform(this._macMask),
      place_before: cdktf.stringToTerraform(this._placeBefore),
      private_passphrase: cdktf.stringToTerraform(this._privatePassphrase),
      radius_accounting: cdktf.booleanToTerraform(this._radiusAccounting),
      signal_range: cdktf.stringToTerraform(this._signalRange),
      ssid_regexp: cdktf.stringToTerraform(this._ssidRegexp),
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
      action: {
        value: cdktf.stringToHclTerraform(this._action),
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
      client_to_client_forwarding: {
        value: cdktf.booleanToHclTerraform(this._clientToClientForwarding),
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
      mac_mask: {
        value: cdktf.stringToHclTerraform(this._macMask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      place_before: {
        value: cdktf.stringToHclTerraform(this._placeBefore),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_passphrase: {
        value: cdktf.stringToHclTerraform(this._privatePassphrase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radius_accounting: {
        value: cdktf.booleanToHclTerraform(this._radiusAccounting),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      signal_range: {
        value: cdktf.stringToHclTerraform(this._signalRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssid_regexp: {
        value: cdktf.stringToHclTerraform(this._ssidRegexp),
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
