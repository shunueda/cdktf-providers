// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wagprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WirelesscontrollerWagprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wagprofile#comment WirelesscontrollerWagprofile#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wagprofile#dhcp_ip_addr WirelesscontrollerWagprofile#dhcp_ip_addr}
  */
  readonly dhcpIpAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wagprofile#id WirelesscontrollerWagprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wagprofile#name WirelesscontrollerWagprofile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wagprofile#ping_interval WirelesscontrollerWagprofile#ping_interval}
  */
  readonly pingInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wagprofile#ping_number WirelesscontrollerWagprofile#ping_number}
  */
  readonly pingNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wagprofile#return_packet_timeout WirelesscontrollerWagprofile#return_packet_timeout}
  */
  readonly returnPacketTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wagprofile#tunnel_type WirelesscontrollerWagprofile#tunnel_type}
  */
  readonly tunnelType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wagprofile#vdomparam WirelesscontrollerWagprofile#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wagprofile#wag_ip WirelesscontrollerWagprofile#wag_ip}
  */
  readonly wagIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wagprofile#wag_port WirelesscontrollerWagprofile#wag_port}
  */
  readonly wagPort?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wagprofile fortios_wirelesscontroller_wagprofile}
*/
export class WirelesscontrollerWagprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_wirelesscontroller_wagprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WirelesscontrollerWagprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WirelesscontrollerWagprofile to import
  * @param importFromId The id of the existing WirelesscontrollerWagprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wagprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WirelesscontrollerWagprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_wirelesscontroller_wagprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wagprofile fortios_wirelesscontroller_wagprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WirelesscontrollerWagprofileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: WirelesscontrollerWagprofileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_wirelesscontroller_wagprofile',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._comment = config.comment;
    this._dhcpIpAddr = config.dhcpIpAddr;
    this._id = config.id;
    this._name = config.name;
    this._pingInterval = config.pingInterval;
    this._pingNumber = config.pingNumber;
    this._returnPacketTimeout = config.returnPacketTimeout;
    this._tunnelType = config.tunnelType;
    this._vdomparam = config.vdomparam;
    this._wagIp = config.wagIp;
    this._wagPort = config.wagPort;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // dhcp_ip_addr - computed: true, optional: true, required: false
  private _dhcpIpAddr?: string; 
  public get dhcpIpAddr() {
    return this.getStringAttribute('dhcp_ip_addr');
  }
  public set dhcpIpAddr(value: string) {
    this._dhcpIpAddr = value;
  }
  public resetDhcpIpAddr() {
    this._dhcpIpAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpIpAddrInput() {
    return this._dhcpIpAddr;
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

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // ping_interval - computed: true, optional: true, required: false
  private _pingInterval?: number; 
  public get pingInterval() {
    return this.getNumberAttribute('ping_interval');
  }
  public set pingInterval(value: number) {
    this._pingInterval = value;
  }
  public resetPingInterval() {
    this._pingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingIntervalInput() {
    return this._pingInterval;
  }

  // ping_number - computed: true, optional: true, required: false
  private _pingNumber?: number; 
  public get pingNumber() {
    return this.getNumberAttribute('ping_number');
  }
  public set pingNumber(value: number) {
    this._pingNumber = value;
  }
  public resetPingNumber() {
    this._pingNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingNumberInput() {
    return this._pingNumber;
  }

  // return_packet_timeout - computed: true, optional: true, required: false
  private _returnPacketTimeout?: number; 
  public get returnPacketTimeout() {
    return this.getNumberAttribute('return_packet_timeout');
  }
  public set returnPacketTimeout(value: number) {
    this._returnPacketTimeout = value;
  }
  public resetReturnPacketTimeout() {
    this._returnPacketTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnPacketTimeoutInput() {
    return this._returnPacketTimeout;
  }

  // tunnel_type - computed: true, optional: true, required: false
  private _tunnelType?: string; 
  public get tunnelType() {
    return this.getStringAttribute('tunnel_type');
  }
  public set tunnelType(value: string) {
    this._tunnelType = value;
  }
  public resetTunnelType() {
    this._tunnelType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelTypeInput() {
    return this._tunnelType;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // wag_ip - computed: true, optional: true, required: false
  private _wagIp?: string; 
  public get wagIp() {
    return this.getStringAttribute('wag_ip');
  }
  public set wagIp(value: string) {
    this._wagIp = value;
  }
  public resetWagIp() {
    this._wagIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wagIpInput() {
    return this._wagIp;
  }

  // wag_port - computed: true, optional: true, required: false
  private _wagPort?: number; 
  public get wagPort() {
    return this.getNumberAttribute('wag_port');
  }
  public set wagPort(value: number) {
    this._wagPort = value;
  }
  public resetWagPort() {
    this._wagPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wagPortInput() {
    return this._wagPort;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      dhcp_ip_addr: cdktf.stringToTerraform(this._dhcpIpAddr),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      ping_interval: cdktf.numberToTerraform(this._pingInterval),
      ping_number: cdktf.numberToTerraform(this._pingNumber),
      return_packet_timeout: cdktf.numberToTerraform(this._returnPacketTimeout),
      tunnel_type: cdktf.stringToTerraform(this._tunnelType),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      wag_ip: cdktf.stringToTerraform(this._wagIp),
      wag_port: cdktf.numberToTerraform(this._wagPort),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_ip_addr: {
        value: cdktf.stringToHclTerraform(this._dhcpIpAddr),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ping_interval: {
        value: cdktf.numberToHclTerraform(this._pingInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ping_number: {
        value: cdktf.numberToHclTerraform(this._pingNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      return_packet_timeout: {
        value: cdktf.numberToHclTerraform(this._returnPacketTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tunnel_type: {
        value: cdktf.stringToHclTerraform(this._tunnelType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wag_ip: {
        value: cdktf.stringToHclTerraform(this._wagIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wag_port: {
        value: cdktf.numberToHclTerraform(this._wagPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
