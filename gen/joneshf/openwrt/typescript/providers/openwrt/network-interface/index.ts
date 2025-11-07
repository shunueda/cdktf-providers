// https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/network_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies whether to bring up this interface on boot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/network_interface#auto NetworkInterface#auto}
  */
  readonly auto?: boolean | cdktf.IResolvable;
  /**
  * Name of the (physical or virtual) device. This name is what the device is known as in LuCI or the `name` field in Terraform. This is not the UCI config name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/network_interface#device NetworkInterface#device}
  */
  readonly device: string;
  /**
  * Disables this interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/network_interface#disabled NetworkInterface#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * DNS servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/network_interface#dns NetworkInterface#dns}
  */
  readonly dns?: string[];
  /**
  * Gateway of the interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/network_interface#gateway NetworkInterface#gateway}
  */
  readonly gateway?: string;
  /**
  * Name of the section. This name is only used when interacting with UCI directly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/network_interface#id NetworkInterface#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Delegate a prefix of given length to this interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/network_interface#ip6assign NetworkInterface#ip6assign}
  */
  readonly ip6Assign?: number;
  /**
  * IP address of the interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/network_interface#ipaddr NetworkInterface#ipaddr}
  */
  readonly ipaddr?: string;
  /**
  * Override the MAC Address of this interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/network_interface#macaddr NetworkInterface#macaddr}
  */
  readonly macaddr?: string;
  /**
  * Override the default MTU on this interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/network_interface#mtu NetworkInterface#mtu}
  */
  readonly mtu?: number;
  /**
  * Netmask of the interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/network_interface#netmask NetworkInterface#netmask}
  */
  readonly netmask?: string;
  /**
  * Use DHCP-provided DNS servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/network_interface#peerdns NetworkInterface#peerdns}
  */
  readonly peerdns?: boolean | cdktf.IResolvable;
  /**
  * The protocol type of the interface. Currently, only "dhcp, and "static" are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/network_interface#proto NetworkInterface#proto}
  */
  readonly proto: string;
  /**
  * Behavior for requesting address. Can only be one of "force", "try", or "none".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/network_interface#reqaddress NetworkInterface#reqaddress}
  */
  readonly reqaddress?: string;
  /**
  * Behavior for requesting prefixes. Currently, only "auto" is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/network_interface#reqprefix NetworkInterface#reqprefix}
  */
  readonly reqprefix?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/network_interface openwrt_network_interface}
*/
export class NetworkInterface extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "openwrt_network_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkInterface to import
  * @param importFromId The id of the existing NetworkInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/network_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "openwrt_network_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/network_interface openwrt_network_interface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'openwrt_network_interface',
      terraformGeneratorMetadata: {
        providerName: 'openwrt',
        providerVersion: '0.0.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._auto = config.auto;
    this._device = config.device;
    this._disabled = config.disabled;
    this._dns = config.dns;
    this._gateway = config.gateway;
    this._id = config.id;
    this._ip6Assign = config.ip6Assign;
    this._ipaddr = config.ipaddr;
    this._macaddr = config.macaddr;
    this._mtu = config.mtu;
    this._netmask = config.netmask;
    this._peerdns = config.peerdns;
    this._proto = config.proto;
    this._reqaddress = config.reqaddress;
    this._reqprefix = config.reqprefix;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto - computed: true, optional: true, required: false
  private _auto?: boolean | cdktf.IResolvable; 
  public get auto() {
    return this.getBooleanAttribute('auto');
  }
  public set auto(value: boolean | cdktf.IResolvable) {
    this._auto = value;
  }
  public resetAuto() {
    this._auto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoInput() {
    return this._auto;
  }

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

  // disabled - computed: true, optional: true, required: false
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

  // dns - computed: true, optional: true, required: false
  private _dns?: string[]; 
  public get dns() {
    return this.getListAttribute('dns');
  }
  public set dns(value: string[]) {
    this._dns = value;
  }
  public resetDns() {
    this._dns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns;
  }

  // gateway - computed: true, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
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

  // ip6assign - computed: true, optional: true, required: false
  private _ip6Assign?: number; 
  public get ip6Assign() {
    return this.getNumberAttribute('ip6assign');
  }
  public set ip6Assign(value: number) {
    this._ip6Assign = value;
  }
  public resetIp6Assign() {
    this._ip6Assign = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6AssignInput() {
    return this._ip6Assign;
  }

  // ipaddr - computed: true, optional: true, required: false
  private _ipaddr?: string; 
  public get ipaddr() {
    return this.getStringAttribute('ipaddr');
  }
  public set ipaddr(value: string) {
    this._ipaddr = value;
  }
  public resetIpaddr() {
    this._ipaddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipaddrInput() {
    return this._ipaddr;
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

  // netmask - computed: true, optional: true, required: false
  private _netmask?: string; 
  public get netmask() {
    return this.getStringAttribute('netmask');
  }
  public set netmask(value: string) {
    this._netmask = value;
  }
  public resetNetmask() {
    this._netmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netmaskInput() {
    return this._netmask;
  }

  // peerdns - computed: true, optional: true, required: false
  private _peerdns?: boolean | cdktf.IResolvable; 
  public get peerdns() {
    return this.getBooleanAttribute('peerdns');
  }
  public set peerdns(value: boolean | cdktf.IResolvable) {
    this._peerdns = value;
  }
  public resetPeerdns() {
    this._peerdns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerdnsInput() {
    return this._peerdns;
  }

  // proto - computed: false, optional: false, required: true
  private _proto?: string; 
  public get proto() {
    return this.getStringAttribute('proto');
  }
  public set proto(value: string) {
    this._proto = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protoInput() {
    return this._proto;
  }

  // reqaddress - computed: true, optional: true, required: false
  private _reqaddress?: string; 
  public get reqaddress() {
    return this.getStringAttribute('reqaddress');
  }
  public set reqaddress(value: string) {
    this._reqaddress = value;
  }
  public resetReqaddress() {
    this._reqaddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqaddressInput() {
    return this._reqaddress;
  }

  // reqprefix - computed: true, optional: true, required: false
  private _reqprefix?: string; 
  public get reqprefix() {
    return this.getStringAttribute('reqprefix');
  }
  public set reqprefix(value: string) {
    this._reqprefix = value;
  }
  public resetReqprefix() {
    this._reqprefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqprefixInput() {
    return this._reqprefix;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto: cdktf.booleanToTerraform(this._auto),
      device: cdktf.stringToTerraform(this._device),
      disabled: cdktf.booleanToTerraform(this._disabled),
      dns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dns),
      gateway: cdktf.stringToTerraform(this._gateway),
      id: cdktf.stringToTerraform(this._id),
      ip6assign: cdktf.numberToTerraform(this._ip6Assign),
      ipaddr: cdktf.stringToTerraform(this._ipaddr),
      macaddr: cdktf.stringToTerraform(this._macaddr),
      mtu: cdktf.numberToTerraform(this._mtu),
      netmask: cdktf.stringToTerraform(this._netmask),
      peerdns: cdktf.booleanToTerraform(this._peerdns),
      proto: cdktf.stringToTerraform(this._proto),
      reqaddress: cdktf.stringToTerraform(this._reqaddress),
      reqprefix: cdktf.stringToTerraform(this._reqprefix),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto: {
        value: cdktf.booleanToHclTerraform(this._auto),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
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
      dns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dns),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      gateway: {
        value: cdktf.stringToHclTerraform(this._gateway),
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
      ip6assign: {
        value: cdktf.numberToHclTerraform(this._ip6Assign),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipaddr: {
        value: cdktf.stringToHclTerraform(this._ipaddr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      netmask: {
        value: cdktf.stringToHclTerraform(this._netmask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peerdns: {
        value: cdktf.booleanToHclTerraform(this._peerdns),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      proto: {
        value: cdktf.stringToHclTerraform(this._proto),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reqaddress: {
        value: cdktf.stringToHclTerraform(this._reqaddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reqprefix: {
        value: cdktf.stringToHclTerraform(this._reqprefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
