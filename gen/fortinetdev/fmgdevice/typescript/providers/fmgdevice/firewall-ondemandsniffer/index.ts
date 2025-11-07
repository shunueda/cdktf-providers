// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_ondemandsniffer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallOndemandsnifferConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_ondemandsniffer#advanced_filter FirewallOndemandsniffer#advanced_filter}
  */
  readonly advancedFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_ondemandsniffer#device_name FirewallOndemandsniffer#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_ondemandsniffer#device_vdom FirewallOndemandsniffer#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_ondemandsniffer#hosts FirewallOndemandsniffer#hosts}
  */
  readonly hosts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_ondemandsniffer#id FirewallOndemandsniffer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_ondemandsniffer#interface FirewallOndemandsniffer#interface}
  */
  readonly interface?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_ondemandsniffer#max_packet_count FirewallOndemandsniffer#max_packet_count}
  */
  readonly maxPacketCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_ondemandsniffer#name FirewallOndemandsniffer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_ondemandsniffer#non_ip_packet FirewallOndemandsniffer#non_ip_packet}
  */
  readonly nonIpPacket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_ondemandsniffer#ports FirewallOndemandsniffer#ports}
  */
  readonly ports?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_ondemandsniffer#protocols FirewallOndemandsniffer#protocols}
  */
  readonly protocols?: number[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_ondemandsniffer fmgdevice_firewall_ondemandsniffer}
*/
export class FirewallOndemandsniffer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_firewall_ondemandsniffer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FirewallOndemandsniffer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirewallOndemandsniffer to import
  * @param importFromId The id of the existing FirewallOndemandsniffer that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_ondemandsniffer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirewallOndemandsniffer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_firewall_ondemandsniffer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_ondemandsniffer fmgdevice_firewall_ondemandsniffer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallOndemandsnifferConfig = {}
  */
  public constructor(scope: Construct, id: string, config: FirewallOndemandsnifferConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_firewall_ondemandsniffer',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._advancedFilter = config.advancedFilter;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._hosts = config.hosts;
    this._id = config.id;
    this._interface = config.interface;
    this._maxPacketCount = config.maxPacketCount;
    this._name = config.name;
    this._nonIpPacket = config.nonIpPacket;
    this._ports = config.ports;
    this._protocols = config.protocols;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advanced_filter - computed: false, optional: true, required: false
  private _advancedFilter?: string; 
  public get advancedFilter() {
    return this.getStringAttribute('advanced_filter');
  }
  public set advancedFilter(value: string) {
    this._advancedFilter = value;
  }
  public resetAdvancedFilter() {
    this._advancedFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedFilterInput() {
    return this._advancedFilter;
  }

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // device_vdom - computed: true, optional: true, required: false
  private _deviceVdom?: string; 
  public get deviceVdom() {
    return this.getStringAttribute('device_vdom');
  }
  public set deviceVdom(value: string) {
    this._deviceVdom = value;
  }
  public resetDeviceVdom() {
    this._deviceVdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceVdomInput() {
    return this._deviceVdom;
  }

  // hosts - computed: true, optional: true, required: false
  private _hosts?: string[]; 
  public get hosts() {
    return cdktf.Fn.tolist(this.getListAttribute('hosts'));
  }
  public set hosts(value: string[]) {
    this._hosts = value;
  }
  public resetHosts() {
    this._hosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts;
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

  // interface - computed: true, optional: true, required: false
  private _interface?: string[]; 
  public get interface() {
    return cdktf.Fn.tolist(this.getListAttribute('interface'));
  }
  public set interface(value: string[]) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // max_packet_count - computed: false, optional: true, required: false
  private _maxPacketCount?: number; 
  public get maxPacketCount() {
    return this.getNumberAttribute('max_packet_count');
  }
  public set maxPacketCount(value: number) {
    this._maxPacketCount = value;
  }
  public resetMaxPacketCount() {
    this._maxPacketCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPacketCountInput() {
    return this._maxPacketCount;
  }

  // name - computed: false, optional: true, required: false
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

  // non_ip_packet - computed: true, optional: true, required: false
  private _nonIpPacket?: string; 
  public get nonIpPacket() {
    return this.getStringAttribute('non_ip_packet');
  }
  public set nonIpPacket(value: string) {
    this._nonIpPacket = value;
  }
  public resetNonIpPacket() {
    this._nonIpPacket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonIpPacketInput() {
    return this._nonIpPacket;
  }

  // ports - computed: true, optional: true, required: false
  private _ports?: number[]; 
  public get ports() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('ports')));
  }
  public set ports(value: number[]) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }

  // protocols - computed: true, optional: true, required: false
  private _protocols?: number[]; 
  public get protocols() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('protocols')));
  }
  public set protocols(value: number[]) {
    this._protocols = value;
  }
  public resetProtocols() {
    this._protocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      advanced_filter: cdktf.stringToTerraform(this._advancedFilter),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hosts),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.listMapper(cdktf.stringToTerraform, false)(this._interface),
      max_packet_count: cdktf.numberToTerraform(this._maxPacketCount),
      name: cdktf.stringToTerraform(this._name),
      non_ip_packet: cdktf.stringToTerraform(this._nonIpPacket),
      ports: cdktf.listMapper(cdktf.numberToTerraform, false)(this._ports),
      protocols: cdktf.listMapper(cdktf.numberToTerraform, false)(this._protocols),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      advanced_filter: {
        value: cdktf.stringToHclTerraform(this._advancedFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_vdom: {
        value: cdktf.stringToHclTerraform(this._deviceVdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hosts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._hosts),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._interface),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      max_packet_count: {
        value: cdktf.numberToHclTerraform(this._maxPacketCount),
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
      non_ip_packet: {
        value: cdktf.stringToHclTerraform(this._nonIpPacket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ports: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._ports),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      protocols: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._protocols),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
