// https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/interface_w60g_station
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfaceW60GStationConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/interface_w60g_station#___path___ InterfaceW60GStation#___path___}
  */
  readonly path?: string;
  /**
  * <em>A set of transformations for field names. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/interface_w60g_station#___skip___ InterfaceW60GStation#___skip___}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/interface_w60g_station#arp InterfaceW60GStation#arp}
  */
  readonly arp?: string;
  /**
  * ARP timeout is time how long ARP record is kept in ARP table after no packets are received from IP. Value auto equals to the value of arp-timeout in IP/Settings, default is 30s. Can use postfix `ms`, `s`, `m`, `h`, `d` for milliseconds, seconds, minutes, hours or days. If no postfix is set then seconds (s) is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/interface_w60g_station#arp_timeout InterfaceW60GStation#arp_timeout}
  */
  readonly arpTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/interface_w60g_station#disabled InterfaceW60GStation#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/interface_w60g_station#id InterfaceW60GStation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * MAC address of the station interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/interface_w60g_station#mac_address InterfaceW60GStation#mac_address}
  */
  readonly macAddress: string;
  /**
  * Layer3 Maximum transmission unit ('auto', 0 .. 65535). Look for the exact minimum value in the MikroTik documentation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/interface_w60g_station#mtu InterfaceW60GStation#mtu}
  */
  readonly mtu?: string;
  /**
  * Name of the interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/interface_w60g_station#name InterfaceW60GStation#name}
  */
  readonly name: string;
  /**
  * Parent interface name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/interface_w60g_station#parent InterfaceW60GStation#parent}
  */
  readonly parent: string;
  /**
  * Add station device interface to specific bridge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/interface_w60g_station#put_in_bridge InterfaceW60GStation#put_in_bridge}
  */
  readonly putInBridge?: string;
  /**
  * MAC address of bridge interface, station is connecting to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/interface_w60g_station#remote_address InterfaceW60GStation#remote_address}
  */
  readonly remoteAddress?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/interface_w60g_station routeros_interface_w60g_station}
*/
export class InterfaceW60GStation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_interface_w60g_station";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfaceW60GStation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfaceW60GStation to import
  * @param importFromId The id of the existing InterfaceW60GStation that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/interface_w60g_station#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfaceW60GStation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_interface_w60g_station", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/interface_w60g_station routeros_interface_w60g_station} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfaceW60GStationConfig
  */
  public constructor(scope: Construct, id: string, config: InterfaceW60GStationConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_interface_w60g_station',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.94.0',
        providerVersionConstraint: '1.94.0'
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
    this._disabled = config.disabled;
    this._id = config.id;
    this._macAddress = config.macAddress;
    this._mtu = config.mtu;
    this._name = config.name;
    this._parent = config.parent;
    this._putInBridge = config.putInBridge;
    this._remoteAddress = config.remoteAddress;
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

  // mac_address - computed: false, optional: false, required: true
  private _macAddress?: string; 
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }
  public set macAddress(value: string) {
    this._macAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressInput() {
    return this._macAddress;
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

  // parent - computed: false, optional: false, required: true
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // put_in_bridge - computed: false, optional: true, required: false
  private _putInBridge?: string; 
  public get putInBridge() {
    return this.getStringAttribute('put_in_bridge');
  }
  public set putInBridge(value: string) {
    this._putInBridge = value;
  }
  public resetPutInBridge() {
    this._putInBridge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get putInBridgeInput() {
    return this._putInBridge;
  }

  // remote_address - computed: false, optional: true, required: false
  private _remoteAddress?: string; 
  public get remoteAddress() {
    return this.getStringAttribute('remote_address');
  }
  public set remoteAddress(value: string) {
    this._remoteAddress = value;
  }
  public resetRemoteAddress() {
    this._remoteAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAddressInput() {
    return this._remoteAddress;
  }

  // running - computed: true, optional: false, required: false
  public get running() {
    return this.getBooleanAttribute('running');
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
      disabled: cdktf.booleanToTerraform(this._disabled),
      id: cdktf.stringToTerraform(this._id),
      mac_address: cdktf.stringToTerraform(this._macAddress),
      mtu: cdktf.stringToTerraform(this._mtu),
      name: cdktf.stringToTerraform(this._name),
      parent: cdktf.stringToTerraform(this._parent),
      put_in_bridge: cdktf.stringToTerraform(this._putInBridge),
      remote_address: cdktf.stringToTerraform(this._remoteAddress),
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
      mac_address: {
        value: cdktf.stringToHclTerraform(this._macAddress),
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
      parent: {
        value: cdktf.stringToHclTerraform(this._parent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      put_in_bridge: {
        value: cdktf.stringToHclTerraform(this._putInBridge),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_address: {
        value: cdktf.stringToHclTerraform(this._remoteAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
