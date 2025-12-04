// https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_macvlan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfaceMacvlanConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_macvlan#___path___ InterfaceMacvlan#___path___}
  */
  readonly path?: string;
  /**
  * Address Resolution Protocol mode:
  *   * disabled - the interface will not use ARP
  *   * enabled - the interface will use ARP
  *   * local-proxy-arp - the router performs proxy ARP on the interface and sends replies to the same interface
  *   * proxy-arp - the router performs proxy ARP on the interface and sends replies to other interfaces
  *   * reply-only - the interface will only reply to requests originated from matching IP address/MAC address combinations which are entered as static entries in the ARP table. No dynamic entries will be automatically stored in the ARP table. Therefore for communications to be successful, a valid static entry must already exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_macvlan#arp InterfaceMacvlan#arp}
  */
  readonly arp?: string;
  /**
  * ARP timeout is time how long ARP record is kept in ARP table after no packets are received from IP. Value auto equals to the value of arp-timeout in IP/Settings, default is 30s. Can use postfix `ms`, `s`, `m`, `h`, `d` for milliseconds, seconds, minutes, hours or days. If no postfix is set then seconds (s) is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_macvlan#arp_timeout InterfaceMacvlan#arp_timeout}
  */
  readonly arpTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_macvlan#comment InterfaceMacvlan#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_macvlan#disabled InterfaceMacvlan#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_macvlan#id InterfaceMacvlan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_macvlan#interface InterfaceMacvlan#interface}
  */
  readonly interface: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_macvlan#loop_protect InterfaceMacvlan#loop_protect}
  */
  readonly loopProtect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_macvlan#loop_protect_disable_time InterfaceMacvlan#loop_protect_disable_time}
  */
  readonly loopProtectDisableTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_macvlan#loop_protect_send_interval InterfaceMacvlan#loop_protect_send_interval}
  */
  readonly loopProtectSendInterval?: string;
  /**
  * Loop protect status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_macvlan#loop_protect_status InterfaceMacvlan#loop_protect_status}
  */
  readonly loopProtectStatus?: boolean | cdktf.IResolvable;
  /**
  * Static MAC address of the interface. A randomly generated MAC address will be assigned when not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_macvlan#mac_address InterfaceMacvlan#mac_address}
  */
  readonly macAddress?: string;
  /**
  * Sets MACVLAN interface mode:
  *   *	private - does not allow communication between MACVLAN instances on the same parent interface.
  *   * bridge - allows communication between MACVLAN instances on the same parent interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_macvlan#mode InterfaceMacvlan#mode}
  */
  readonly mode?: string;
  /**
  * Layer3 Maximum transmission unit ('auto', 0 .. 65535). Look for the exact minimum value in the MikroTik documentation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_macvlan#mtu InterfaceMacvlan#mtu}
  */
  readonly mtu?: string;
  /**
  * Changing the name of this resource will force it to be recreated.
  * 	> The links of other configuration properties to this resource may be lost!
  * 	> Changing the name of the resource outside of a Terraform will result in a loss of control integrity for that resource!
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_macvlan#name InterfaceMacvlan#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_macvlan routeros_interface_macvlan}
*/
export class InterfaceMacvlan extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_interface_macvlan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfaceMacvlan resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfaceMacvlan to import
  * @param importFromId The id of the existing InterfaceMacvlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_macvlan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfaceMacvlan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_interface_macvlan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_macvlan routeros_interface_macvlan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfaceMacvlanConfig
  */
  public constructor(scope: Construct, id: string, config: InterfaceMacvlanConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_interface_macvlan',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.97.0',
        providerVersionConstraint: '1.97.0'
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
    this._arp = config.arp;
    this._arpTimeout = config.arpTimeout;
    this._comment = config.comment;
    this._disabled = config.disabled;
    this._id = config.id;
    this._interface = config.interface;
    this._loopProtect = config.loopProtect;
    this._loopProtectDisableTime = config.loopProtectDisableTime;
    this._loopProtectSendInterval = config.loopProtectSendInterval;
    this._loopProtectStatus = config.loopProtectStatus;
    this._macAddress = config.macAddress;
    this._mode = config.mode;
    this._mtu = config.mtu;
    this._name = config.name;
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

  // interface - computed: false, optional: false, required: true
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // l2mtu - computed: true, optional: false, required: false
  public get l2Mtu() {
    return this.getNumberAttribute('l2mtu');
  }

  // loop_protect - computed: false, optional: true, required: false
  private _loopProtect?: string; 
  public get loopProtect() {
    return this.getStringAttribute('loop_protect');
  }
  public set loopProtect(value: string) {
    this._loopProtect = value;
  }
  public resetLoopProtect() {
    this._loopProtect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopProtectInput() {
    return this._loopProtect;
  }

  // loop_protect_disable_time - computed: false, optional: true, required: false
  private _loopProtectDisableTime?: string; 
  public get loopProtectDisableTime() {
    return this.getStringAttribute('loop_protect_disable_time');
  }
  public set loopProtectDisableTime(value: string) {
    this._loopProtectDisableTime = value;
  }
  public resetLoopProtectDisableTime() {
    this._loopProtectDisableTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopProtectDisableTimeInput() {
    return this._loopProtectDisableTime;
  }

  // loop_protect_send_interval - computed: false, optional: true, required: false
  private _loopProtectSendInterval?: string; 
  public get loopProtectSendInterval() {
    return this.getStringAttribute('loop_protect_send_interval');
  }
  public set loopProtectSendInterval(value: string) {
    this._loopProtectSendInterval = value;
  }
  public resetLoopProtectSendInterval() {
    this._loopProtectSendInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopProtectSendIntervalInput() {
    return this._loopProtectSendInterval;
  }

  // loop_protect_status - computed: false, optional: true, required: false
  private _loopProtectStatus?: boolean | cdktf.IResolvable; 
  public get loopProtectStatus() {
    return this.getBooleanAttribute('loop_protect_status');
  }
  public set loopProtectStatus(value: boolean | cdktf.IResolvable) {
    this._loopProtectStatus = value;
  }
  public resetLoopProtectStatus() {
    this._loopProtectStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopProtectStatusInput() {
    return this._loopProtectStatus;
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
      arp: cdktf.stringToTerraform(this._arp),
      arp_timeout: cdktf.stringToTerraform(this._arpTimeout),
      comment: cdktf.stringToTerraform(this._comment),
      disabled: cdktf.booleanToTerraform(this._disabled),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.stringToTerraform(this._interface),
      loop_protect: cdktf.stringToTerraform(this._loopProtect),
      loop_protect_disable_time: cdktf.stringToTerraform(this._loopProtectDisableTime),
      loop_protect_send_interval: cdktf.stringToTerraform(this._loopProtectSendInterval),
      loop_protect_status: cdktf.booleanToTerraform(this._loopProtectStatus),
      mac_address: cdktf.stringToTerraform(this._macAddress),
      mode: cdktf.stringToTerraform(this._mode),
      mtu: cdktf.stringToTerraform(this._mtu),
      name: cdktf.stringToTerraform(this._name),
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
      loop_protect: {
        value: cdktf.stringToHclTerraform(this._loopProtect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      loop_protect_disable_time: {
        value: cdktf.stringToHclTerraform(this._loopProtectDisableTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      loop_protect_send_interval: {
        value: cdktf.stringToHclTerraform(this._loopProtectSendInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      loop_protect_status: {
        value: cdktf.booleanToHclTerraform(this._loopProtectStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mac_address: {
        value: cdktf.stringToHclTerraform(this._macAddress),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
