// https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_w60g
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfaceW60GConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_w60g#___path___ InterfaceW60G#___path___}
  */
  readonly path?: string;
  /**
  * <em>A set of transformations for field names. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_w60g#___skip___ InterfaceW60G#___skip___}
  */
  readonly skip?: string;
  /**
  * Address Resolution Protocol mode:
  *   * disabled - the interface will not use ARP
  *   * enabled - the interface will use ARP
  *   * local-proxy-arp - the router performs proxy ARP on the interface and sends replies to the same interface
  *   * proxy-arp - the router performs proxy ARP on the interface and sends replies to other interfaces
  *   * reply-only - the interface will only reply to requests originated from matching IP address/MAC address combinations which are entered as static entries in the ARP table. No dynamic entries will be automatically stored in the ARP table. Therefore for communications to be successful, a valid static entry must already exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_w60g#arp InterfaceW60G#arp}
  */
  readonly arp?: string;
  /**
  * ARP timeout is time how long ARP record is kept in ARP table after no packets are received from IP. Value auto equals to the value of arp-timeout in IP/Settings, default is 30s. Can use postfix `ms`, `s`, `m`, `h`, `d` for milliseconds, seconds, minutes, hours or days. If no postfix is set then seconds (s) is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_w60g#arp_timeout InterfaceW60G#arp_timeout}
  */
  readonly arpTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_w60g#comment InterfaceW60G#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_w60g#disabled InterfaceW60G#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Frequency used in communication (Only active on bridge device).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_w60g#frequency InterfaceW60G#frequency}
  */
  readonly frequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_w60g#id InterfaceW60G#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Don't allow communication between connected clients (from RouterOS 6.41).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_w60g#isolate_stations InterfaceW60G#isolate_stations}
  */
  readonly isolateStations?: boolean | cdktf.IResolvable;
  /**
  * Layer2 Maximum transmission unit. [See](https://wiki.mikrotik.com/wiki/Maximum_Transmission_Unit_on_RouterBoards).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_w60g#l2mtu InterfaceW60G#l2mtu}
  */
  readonly l2Mtu?: number;
  /**
  * MAC address of the radio interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_w60g#mac_address InterfaceW60G#mac_address}
  */
  readonly macAddress?: string;
  /**
  * Experimental feature working only on wAP60Gx3 devices, providing better point to multi point stability in some cases.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_w60g#mdmg_fix InterfaceW60G#mdmg_fix}
  */
  readonly mdmgFix?: boolean | cdktf.IResolvable;
  /**
  * Operation mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_w60g#mode InterfaceW60G#mode}
  */
  readonly mode?: string;
  /**
  * Layer3 Maximum transmission unit ('auto', 0 .. 65535). Look for the exact minimum value in the MikroTik documentation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_w60g#mtu InterfaceW60G#mtu}
  */
  readonly mtu?: string;
  /**
  * Name of the interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_w60g#name InterfaceW60G#name}
  */
  readonly name: string;
  /**
  * Password used for AES encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_w60g#password InterfaceW60G#password}
  */
  readonly password?: string;
  /**
  * Put newly created station device interfaces in this bridge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_w60g#put_stations_in_bridge InterfaceW60G#put_stations_in_bridge}
  */
  readonly putStationsInBridge?: string;
  /**
  * Parameter to limit frequency use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_w60g#region InterfaceW60G#region}
  */
  readonly region?: string;
  /**
  * Scan list to limit connectivity over frequencies in station mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_w60g#scan_list InterfaceW60G#scan_list}
  */
  readonly scanList?: string[];
  /**
  * SSID (service set identifier) is a name that identifies wireless network (0..32 char).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_w60g#ssid InterfaceW60G#ssid}
  */
  readonly ssid?: string;
  /**
  * Disables beamforming and locks to selected radiation pattern.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_w60g#tx_sector InterfaceW60G#tx_sector}
  */
  readonly txSector?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_w60g routeros_interface_w60g}
*/
export class InterfaceW60G extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_interface_w60g";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfaceW60G resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfaceW60G to import
  * @param importFromId The id of the existing InterfaceW60G that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_w60g#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfaceW60G to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_interface_w60g", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_w60g routeros_interface_w60g} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfaceW60GConfig
  */
  public constructor(scope: Construct, id: string, config: InterfaceW60GConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_interface_w60g',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.92.1',
        providerVersionConstraint: '1.92.1'
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
    this._skip = config.skip;
    this._arp = config.arp;
    this._arpTimeout = config.arpTimeout;
    this._comment = config.comment;
    this._disabled = config.disabled;
    this._frequency = config.frequency;
    this._id = config.id;
    this._isolateStations = config.isolateStations;
    this._l2Mtu = config.l2Mtu;
    this._macAddress = config.macAddress;
    this._mdmgFix = config.mdmgFix;
    this._mode = config.mode;
    this._mtu = config.mtu;
    this._name = config.name;
    this._password = config.password;
    this._putStationsInBridge = config.putStationsInBridge;
    this._region = config.region;
    this._scanList = config.scanList;
    this._ssid = config.ssid;
    this._txSector = config.txSector;
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

  // ___skip___ - computed: false, optional: true, required: false
  private _skip?: string; 
  public get skip() {
    return this.getStringAttribute('___skip___');
  }
  public set skip(value: string) {
    this._skip = value;
  }
  public resetSkip() {
    this._skip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipInput() {
    return this._skip;
  }

  // arp - computed: false, optional: true, required: false
  private _arp?: string; 
  public get arp() {
    return this.getStringAttribute('arp');
  }
  public set arp(value: string) {
    this._arp = value;
  }
  public resetArp() {
    this._arp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpInput() {
    return this._arp;
  }

  // arp_timeout - computed: false, optional: true, required: false
  private _arpTimeout?: string; 
  public get arpTimeout() {
    return this.getStringAttribute('arp_timeout');
  }
  public set arpTimeout(value: string) {
    this._arpTimeout = value;
  }
  public resetArpTimeout() {
    this._arpTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpTimeoutInput() {
    return this._arpTimeout;
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

  // frequency - computed: false, optional: true, required: false
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
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

  // isolate_stations - computed: false, optional: true, required: false
  private _isolateStations?: boolean | cdktf.IResolvable; 
  public get isolateStations() {
    return this.getBooleanAttribute('isolate_stations');
  }
  public set isolateStations(value: boolean | cdktf.IResolvable) {
    this._isolateStations = value;
  }
  public resetIsolateStations() {
    this._isolateStations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isolateStationsInput() {
    return this._isolateStations;
  }

  // l2mtu - computed: false, optional: true, required: false
  private _l2Mtu?: number; 
  public get l2Mtu() {
    return this.getNumberAttribute('l2mtu');
  }
  public set l2Mtu(value: number) {
    this._l2Mtu = value;
  }
  public resetL2Mtu() {
    this._l2Mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2MtuInput() {
    return this._l2Mtu;
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

  // mdmg_fix - computed: false, optional: true, required: false
  private _mdmgFix?: boolean | cdktf.IResolvable; 
  public get mdmgFix() {
    return this.getBooleanAttribute('mdmg_fix');
  }
  public set mdmgFix(value: boolean | cdktf.IResolvable) {
    this._mdmgFix = value;
  }
  public resetMdmgFix() {
    this._mdmgFix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mdmgFixInput() {
    return this._mdmgFix;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // mtu - computed: true, optional: true, required: false
  private _mtu?: string; 
  public get mtu() {
    return this.getStringAttribute('mtu');
  }
  public set mtu(value: string) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
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

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // put_stations_in_bridge - computed: false, optional: true, required: false
  private _putStationsInBridge?: string; 
  public get putStationsInBridge() {
    return this.getStringAttribute('put_stations_in_bridge');
  }
  public set putStationsInBridge(value: string) {
    this._putStationsInBridge = value;
  }
  public resetPutStationsInBridge() {
    this._putStationsInBridge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get putStationsInBridgeInput() {
    return this._putStationsInBridge;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // running - computed: true, optional: false, required: false
  public get running() {
    return this.getBooleanAttribute('running');
  }

  // scan_list - computed: false, optional: true, required: false
  private _scanList?: string[]; 
  public get scanList() {
    return cdktf.Fn.tolist(this.getListAttribute('scan_list'));
  }
  public set scanList(value: string[]) {
    this._scanList = value;
  }
  public resetScanList() {
    this._scanList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanListInput() {
    return this._scanList;
  }

  // ssid - computed: false, optional: true, required: false
  private _ssid?: string; 
  public get ssid() {
    return this.getStringAttribute('ssid');
  }
  public set ssid(value: string) {
    this._ssid = value;
  }
  public resetSsid() {
    this._ssid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssidInput() {
    return this._ssid;
  }

  // tx_sector - computed: false, optional: true, required: false
  private _txSector?: number; 
  public get txSector() {
    return this.getNumberAttribute('tx_sector');
  }
  public set txSector(value: number) {
    this._txSector = value;
  }
  public resetTxSector() {
    this._txSector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txSectorInput() {
    return this._txSector;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      ___skip___: cdktf.stringToTerraform(this._skip),
      arp: cdktf.stringToTerraform(this._arp),
      arp_timeout: cdktf.stringToTerraform(this._arpTimeout),
      comment: cdktf.stringToTerraform(this._comment),
      disabled: cdktf.booleanToTerraform(this._disabled),
      frequency: cdktf.stringToTerraform(this._frequency),
      id: cdktf.stringToTerraform(this._id),
      isolate_stations: cdktf.booleanToTerraform(this._isolateStations),
      l2mtu: cdktf.numberToTerraform(this._l2Mtu),
      mac_address: cdktf.stringToTerraform(this._macAddress),
      mdmg_fix: cdktf.booleanToTerraform(this._mdmgFix),
      mode: cdktf.stringToTerraform(this._mode),
      mtu: cdktf.stringToTerraform(this._mtu),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      put_stations_in_bridge: cdktf.stringToTerraform(this._putStationsInBridge),
      region: cdktf.stringToTerraform(this._region),
      scan_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scanList),
      ssid: cdktf.stringToTerraform(this._ssid),
      tx_sector: cdktf.numberToTerraform(this._txSector),
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
      ___skip___: {
        value: cdktf.stringToHclTerraform(this._skip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      arp: {
        value: cdktf.stringToHclTerraform(this._arp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      arp_timeout: {
        value: cdktf.stringToHclTerraform(this._arpTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      frequency: {
        value: cdktf.stringToHclTerraform(this._frequency),
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
      isolate_stations: {
        value: cdktf.booleanToHclTerraform(this._isolateStations),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      l2mtu: {
        value: cdktf.numberToHclTerraform(this._l2Mtu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mac_address: {
        value: cdktf.stringToHclTerraform(this._macAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mdmg_fix: {
        value: cdktf.booleanToHclTerraform(this._mdmgFix),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mtu: {
        value: cdktf.stringToHclTerraform(this._mtu),
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      put_stations_in_bridge: {
        value: cdktf.stringToHclTerraform(this._putStationsInBridge),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scan_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scanList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ssid: {
        value: cdktf.stringToHclTerraform(this._ssid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tx_sector: {
        value: cdktf.numberToHclTerraform(this._txSector),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
