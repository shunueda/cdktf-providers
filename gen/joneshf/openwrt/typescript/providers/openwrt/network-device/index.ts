// https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/network_device
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkDeviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Bring up the bridge device even if no ports are attached
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/network_device#bridge_empty NetworkDevice#bridge_empty}
  */
  readonly bridgeEmpty?: boolean | cdktf.IResolvable;
  /**
  * Amount of Duplicate Address Detection probes to send
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/network_device#dadtransmits NetworkDevice#dadtransmits}
  */
  readonly dadtransmits?: number;
  /**
  * Name of the section. This name is only used when interacting with UCI directly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/network_device#id NetworkDevice#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Enable IPv6 for the device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/network_device#ipv6 NetworkDevice#ipv6}
  */
  readonly ipv6?: boolean | cdktf.IResolvable;
  /**
  * MAC Address of the device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/network_device#macaddr NetworkDevice#macaddr}
  */
  readonly macaddr?: string;
  /**
  * Maximum Transmissible Unit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/network_device#mtu NetworkDevice#mtu}
  */
  readonly mtu?: number;
  /**
  * Maximum Transmissible Unit for IPv6.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/network_device#mtu6 NetworkDevice#mtu6}
  */
  readonly mtu6?: number;
  /**
  * Name of the device. This name is referenced in other network configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/network_device#name NetworkDevice#name}
  */
  readonly name: string;
  /**
  * Specifies the wired ports to attach to this bridge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/network_device#ports NetworkDevice#ports}
  */
  readonly ports?: string[];
  /**
  * Transmission queue length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/network_device#txqueuelen NetworkDevice#txqueuelen}
  */
  readonly txqueuelen?: number;
  /**
  * The type of device. Currently, only "bridge" is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/network_device#type NetworkDevice#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/network_device openwrt_network_device}
*/
export class NetworkDevice extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "openwrt_network_device";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkDevice resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkDevice to import
  * @param importFromId The id of the existing NetworkDevice that should be imported. Refer to the {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/network_device#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkDevice to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "openwrt_network_device", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/network_device openwrt_network_device} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkDeviceConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkDeviceConfig) {
    super(scope, id, {
      terraformResourceType: 'openwrt_network_device',
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
    this._bridgeEmpty = config.bridgeEmpty;
    this._dadtransmits = config.dadtransmits;
    this._id = config.id;
    this._ipv6 = config.ipv6;
    this._macaddr = config.macaddr;
    this._mtu = config.mtu;
    this._mtu6 = config.mtu6;
    this._name = config.name;
    this._ports = config.ports;
    this._txqueuelen = config.txqueuelen;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bridge_empty - computed: true, optional: true, required: false
  private _bridgeEmpty?: boolean | cdktf.IResolvable; 
  public get bridgeEmpty() {
    return this.getBooleanAttribute('bridge_empty');
  }
  public set bridgeEmpty(value: boolean | cdktf.IResolvable) {
    this._bridgeEmpty = value;
  }
  public resetBridgeEmpty() {
    this._bridgeEmpty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bridgeEmptyInput() {
    return this._bridgeEmpty;
  }

  // dadtransmits - computed: true, optional: true, required: false
  private _dadtransmits?: number; 
  public get dadtransmits() {
    return this.getNumberAttribute('dadtransmits');
  }
  public set dadtransmits(value: number) {
    this._dadtransmits = value;
  }
  public resetDadtransmits() {
    this._dadtransmits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dadtransmitsInput() {
    return this._dadtransmits;
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

  // ipv6 - computed: true, optional: true, required: false
  private _ipv6?: boolean | cdktf.IResolvable; 
  public get ipv6() {
    return this.getBooleanAttribute('ipv6');
  }
  public set ipv6(value: boolean | cdktf.IResolvable) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }

  // macaddr - computed: true, optional: true, required: false
  private _macaddr?: string; 
  public get macaddr() {
    return this.getStringAttribute('macaddr');
  }
  public set macaddr(value: string) {
    this._macaddr = value;
  }
  public resetMacaddr() {
    this._macaddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macaddrInput() {
    return this._macaddr;
  }

  // mtu - computed: true, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // mtu6 - computed: true, optional: true, required: false
  private _mtu6?: number; 
  public get mtu6() {
    return this.getNumberAttribute('mtu6');
  }
  public set mtu6(value: number) {
    this._mtu6 = value;
  }
  public resetMtu6() {
    this._mtu6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtu6Input() {
    return this._mtu6;
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

  // ports - computed: true, optional: true, required: false
  private _ports?: string[]; 
  public get ports() {
    return cdktf.Fn.tolist(this.getListAttribute('ports'));
  }
  public set ports(value: string[]) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }

  // txqueuelen - computed: true, optional: true, required: false
  private _txqueuelen?: number; 
  public get txqueuelen() {
    return this.getNumberAttribute('txqueuelen');
  }
  public set txqueuelen(value: number) {
    this._txqueuelen = value;
  }
  public resetTxqueuelen() {
    this._txqueuelen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txqueuelenInput() {
    return this._txqueuelen;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bridge_empty: cdktf.booleanToTerraform(this._bridgeEmpty),
      dadtransmits: cdktf.numberToTerraform(this._dadtransmits),
      id: cdktf.stringToTerraform(this._id),
      ipv6: cdktf.booleanToTerraform(this._ipv6),
      macaddr: cdktf.stringToTerraform(this._macaddr),
      mtu: cdktf.numberToTerraform(this._mtu),
      mtu6: cdktf.numberToTerraform(this._mtu6),
      name: cdktf.stringToTerraform(this._name),
      ports: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ports),
      txqueuelen: cdktf.numberToTerraform(this._txqueuelen),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bridge_empty: {
        value: cdktf.booleanToHclTerraform(this._bridgeEmpty),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dadtransmits: {
        value: cdktf.numberToHclTerraform(this._dadtransmits),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6: {
        value: cdktf.booleanToHclTerraform(this._ipv6),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      macaddr: {
        value: cdktf.stringToHclTerraform(this._macaddr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mtu: {
        value: cdktf.numberToHclTerraform(this._mtu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mtu6: {
        value: cdktf.numberToHclTerraform(this._mtu6),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ports: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ports),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      txqueuelen: {
        value: cdktf.numberToHclTerraform(this._txqueuelen),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
