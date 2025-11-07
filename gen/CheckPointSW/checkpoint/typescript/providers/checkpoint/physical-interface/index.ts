// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/physical_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PhysicalInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Activating auto_negotiation will skip the speed and duplex configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/physical_interface#auto_negotiation PhysicalInterface#auto_negotiation}
  */
  readonly autoNegotiation?: string;
  /**
  * comments
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/physical_interface#comments PhysicalInterface#comments}
  */
  readonly comments?: string;
  /**
  * Duplex is not relevant when 'auto_negotiation' is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/physical_interface#duplex PhysicalInterface#duplex}
  */
  readonly duplex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/physical_interface#enabled PhysicalInterface#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/physical_interface#id PhysicalInterface#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/physical_interface#ipv4_address PhysicalInterface#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/physical_interface#ipv4_mask_length PhysicalInterface#ipv4_mask_length}
  */
  readonly ipv4MaskLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/physical_interface#ipv6_address PhysicalInterface#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/physical_interface#ipv6_autoconfig PhysicalInterface#ipv6_autoconfig}
  */
  readonly ipv6Autoconfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/physical_interface#ipv6_mask_length PhysicalInterface#ipv6_mask_length}
  */
  readonly ipv6MaskLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/physical_interface#mac_addr PhysicalInterface#mac_addr}
  */
  readonly macAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/physical_interface#monitor_mode PhysicalInterface#monitor_mode}
  */
  readonly monitorMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/physical_interface#mtu PhysicalInterface#mtu}
  */
  readonly mtu?: number;
  /**
  * interface name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/physical_interface#name PhysicalInterface#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/physical_interface#rx_ringsize PhysicalInterface#rx_ringsize}
  */
  readonly rxRingsize?: string;
  /**
  * Speed is not relevant when 'auto_negotiation' is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/physical_interface#speed PhysicalInterface#speed}
  */
  readonly speed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/physical_interface#tx_ringsize PhysicalInterface#tx_ringsize}
  */
  readonly txRingsize?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/physical_interface checkpoint_physical_interface}
*/
export class PhysicalInterface extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_physical_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PhysicalInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PhysicalInterface to import
  * @param importFromId The id of the existing PhysicalInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/physical_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PhysicalInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_physical_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/physical_interface checkpoint_physical_interface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PhysicalInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: PhysicalInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_physical_interface',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoNegotiation = config.autoNegotiation;
    this._comments = config.comments;
    this._duplex = config.duplex;
    this._enabled = config.enabled;
    this._id = config.id;
    this._ipv4Address = config.ipv4Address;
    this._ipv4MaskLength = config.ipv4MaskLength;
    this._ipv6Address = config.ipv6Address;
    this._ipv6Autoconfig = config.ipv6Autoconfig;
    this._ipv6MaskLength = config.ipv6MaskLength;
    this._macAddr = config.macAddr;
    this._monitorMode = config.monitorMode;
    this._mtu = config.mtu;
    this._name = config.name;
    this._rxRingsize = config.rxRingsize;
    this._speed = config.speed;
    this._txRingsize = config.txRingsize;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_negotiation - computed: false, optional: true, required: false
  private _autoNegotiation?: string; 
  public get autoNegotiation() {
    return this.getStringAttribute('auto_negotiation');
  }
  public set autoNegotiation(value: string) {
    this._autoNegotiation = value;
  }
  public resetAutoNegotiation() {
    this._autoNegotiation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoNegotiationInput() {
    return this._autoNegotiation;
  }

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // duplex - computed: false, optional: true, required: false
  private _duplex?: string; 
  public get duplex() {
    return this.getStringAttribute('duplex');
  }
  public set duplex(value: string) {
    this._duplex = value;
  }
  public resetDuplex() {
    this._duplex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get duplexInput() {
    return this._duplex;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // ipv4_address - computed: false, optional: true, required: false
  private _ipv4Address?: string; 
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }
  public set ipv4Address(value: string) {
    this._ipv4Address = value;
  }
  public resetIpv4Address() {
    this._ipv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressInput() {
    return this._ipv4Address;
  }

  // ipv4_mask_length - computed: false, optional: true, required: false
  private _ipv4MaskLength?: number; 
  public get ipv4MaskLength() {
    return this.getNumberAttribute('ipv4_mask_length');
  }
  public set ipv4MaskLength(value: number) {
    this._ipv4MaskLength = value;
  }
  public resetIpv4MaskLength() {
    this._ipv4MaskLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4MaskLengthInput() {
    return this._ipv4MaskLength;
  }

  // ipv6_address - computed: false, optional: true, required: false
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  public resetIpv6Address() {
    this._ipv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
  }

  // ipv6_autoconfig - computed: false, optional: true, required: false
  private _ipv6Autoconfig?: string; 
  public get ipv6Autoconfig() {
    return this.getStringAttribute('ipv6_autoconfig');
  }
  public set ipv6Autoconfig(value: string) {
    this._ipv6Autoconfig = value;
  }
  public resetIpv6Autoconfig() {
    this._ipv6Autoconfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AutoconfigInput() {
    return this._ipv6Autoconfig;
  }

  // ipv6_mask_length - computed: false, optional: true, required: false
  private _ipv6MaskLength?: number; 
  public get ipv6MaskLength() {
    return this.getNumberAttribute('ipv6_mask_length');
  }
  public set ipv6MaskLength(value: number) {
    this._ipv6MaskLength = value;
  }
  public resetIpv6MaskLength() {
    this._ipv6MaskLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6MaskLengthInput() {
    return this._ipv6MaskLength;
  }

  // mac_addr - computed: false, optional: true, required: false
  private _macAddr?: string; 
  public get macAddr() {
    return this.getStringAttribute('mac_addr');
  }
  public set macAddr(value: string) {
    this._macAddr = value;
  }
  public resetMacAddr() {
    this._macAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddrInput() {
    return this._macAddr;
  }

  // monitor_mode - computed: false, optional: true, required: false
  private _monitorMode?: string; 
  public get monitorMode() {
    return this.getStringAttribute('monitor_mode');
  }
  public set monitorMode(value: string) {
    this._monitorMode = value;
  }
  public resetMonitorMode() {
    this._monitorMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorModeInput() {
    return this._monitorMode;
  }

  // mtu - computed: false, optional: true, required: false
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

  // rx_ringsize - computed: false, optional: true, required: false
  private _rxRingsize?: string; 
  public get rxRingsize() {
    return this.getStringAttribute('rx_ringsize');
  }
  public set rxRingsize(value: string) {
    this._rxRingsize = value;
  }
  public resetRxRingsize() {
    this._rxRingsize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rxRingsizeInput() {
    return this._rxRingsize;
  }

  // speed - computed: false, optional: true, required: false
  private _speed?: string; 
  public get speed() {
    return this.getStringAttribute('speed');
  }
  public set speed(value: string) {
    this._speed = value;
  }
  public resetSpeed() {
    this._speed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speedInput() {
    return this._speed;
  }

  // tx_ringsize - computed: false, optional: true, required: false
  private _txRingsize?: string; 
  public get txRingsize() {
    return this.getStringAttribute('tx_ringsize');
  }
  public set txRingsize(value: string) {
    this._txRingsize = value;
  }
  public resetTxRingsize() {
    this._txRingsize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txRingsizeInput() {
    return this._txRingsize;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_negotiation: cdktf.stringToTerraform(this._autoNegotiation),
      comments: cdktf.stringToTerraform(this._comments),
      duplex: cdktf.stringToTerraform(this._duplex),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      ipv4_address: cdktf.stringToTerraform(this._ipv4Address),
      ipv4_mask_length: cdktf.numberToTerraform(this._ipv4MaskLength),
      ipv6_address: cdktf.stringToTerraform(this._ipv6Address),
      ipv6_autoconfig: cdktf.stringToTerraform(this._ipv6Autoconfig),
      ipv6_mask_length: cdktf.numberToTerraform(this._ipv6MaskLength),
      mac_addr: cdktf.stringToTerraform(this._macAddr),
      monitor_mode: cdktf.stringToTerraform(this._monitorMode),
      mtu: cdktf.numberToTerraform(this._mtu),
      name: cdktf.stringToTerraform(this._name),
      rx_ringsize: cdktf.stringToTerraform(this._rxRingsize),
      speed: cdktf.stringToTerraform(this._speed),
      tx_ringsize: cdktf.stringToTerraform(this._txRingsize),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_negotiation: {
        value: cdktf.stringToHclTerraform(this._autoNegotiation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      duplex: {
        value: cdktf.stringToHclTerraform(this._duplex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
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
      ipv4_address: {
        value: cdktf.stringToHclTerraform(this._ipv4Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_mask_length: {
        value: cdktf.numberToHclTerraform(this._ipv4MaskLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv6_address: {
        value: cdktf.stringToHclTerraform(this._ipv6Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_autoconfig: {
        value: cdktf.stringToHclTerraform(this._ipv6Autoconfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_mask_length: {
        value: cdktf.numberToHclTerraform(this._ipv6MaskLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mac_addr: {
        value: cdktf.stringToHclTerraform(this._macAddr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitor_mode: {
        value: cdktf.stringToHclTerraform(this._monitorMode),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rx_ringsize: {
        value: cdktf.stringToHclTerraform(this._rxRingsize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      speed: {
        value: cdktf.stringToHclTerraform(this._speed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tx_ringsize: {
        value: cdktf.stringToHclTerraform(this._txRingsize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
