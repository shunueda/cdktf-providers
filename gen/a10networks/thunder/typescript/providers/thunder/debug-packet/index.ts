// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_packet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DebugPacketConfig extends cdktf.TerraformMetaArguments {
  /**
  * All
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_packet#all_ipv4 DebugPacket#all_ipv4}
  */
  readonly allIpv4?: number;
  /**
  * All
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_packet#all_ipv6 DebugPacket#all_ipv6}
  */
  readonly allIpv6?: number;
  /**
  * All
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_packet#all_sctp_ports DebugPacket#all_sctp_ports}
  */
  readonly allSctpPorts?: number;
  /**
  * All
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_packet#all_tcp_ports DebugPacket#all_tcp_ports}
  */
  readonly allTcpPorts?: number;
  /**
  * All
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_packet#all_udp_ports DebugPacket#all_udp_ports}
  */
  readonly allUdpPorts?: number;
  /**
  * ARP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_packet#arp DebugPacket#arp}
  */
  readonly arp?: number;
  /**
  * Maximum packets to capture. Default is 3000 (Specify maximum packet number. For unlimited, specify 0)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_packet#count1 DebugPacket#count1}
  */
  readonly count1?: number;
  /**
  * Print packet content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_packet#detail DebugPacket#detail}
  */
  readonly detail?: number;
  /**
  * Ethernet interface number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_packet#ethernet DebugPacket#ethernet}
  */
  readonly ethernet?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_packet#icmp DebugPacket#icmp}
  */
  readonly icmp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_packet#icmpv6 DebugPacket#icmpv6}
  */
  readonly icmpv6?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_packet#id DebugPacket#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Interface to debug
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_packet#interface DebugPacket#interface}
  */
  readonly interface?: number;
  /**
  * IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_packet#ip DebugPacket#ip}
  */
  readonly ip?: number;
  /**
  * IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_packet#ipv4ad DebugPacket#ipv4ad}
  */
  readonly ipv4Ad?: string;
  /**
  * IPV6
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_packet#ipv6 DebugPacket#ipv6}
  */
  readonly ipv6?: number;
  /**
  * IPV6 Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_packet#ipv6ad DebugPacket#ipv6ad}
  */
  readonly ipv6Ad?: string;
  /**
  * Layer 3 protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_packet#l3_protocol DebugPacket#l3_protocol}
  */
  readonly l3Protocol?: number;
  /**
  * Layer 4 protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_packet#l4_protocol DebugPacket#l4_protocol}
  */
  readonly l4Protocol?: number;
  /**
  * IPv6 Neighbor/Router
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_packet#neighbor DebugPacket#neighbor}
  */
  readonly neighbor?: number;
  /**
  * Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_packet#port_range DebugPacket#port_range}
  */
  readonly portRange?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_packet#sctp DebugPacket#sctp}
  */
  readonly sctp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_packet#tcp DebugPacket#tcp}
  */
  readonly tcp?: number;
  /**
  * Print timestamp instead of jiffies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_packet#timestamp DebugPacket#timestamp}
  */
  readonly timestamp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_packet#udp DebugPacket#udp}
  */
  readonly udp?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_packet#uuid DebugPacket#uuid}
  */
  readonly uuid?: string;
  /**
  * ve number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_packet#ve DebugPacket#ve}
  */
  readonly ve?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_packet thunder_debug_packet}
*/
export class DebugPacket extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_debug_packet";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DebugPacket resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DebugPacket to import
  * @param importFromId The id of the existing DebugPacket that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_packet#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DebugPacket to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_debug_packet", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_packet thunder_debug_packet} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DebugPacketConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DebugPacketConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_debug_packet',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allIpv4 = config.allIpv4;
    this._allIpv6 = config.allIpv6;
    this._allSctpPorts = config.allSctpPorts;
    this._allTcpPorts = config.allTcpPorts;
    this._allUdpPorts = config.allUdpPorts;
    this._arp = config.arp;
    this._count1 = config.count1;
    this._detail = config.detail;
    this._ethernet = config.ethernet;
    this._icmp = config.icmp;
    this._icmpv6 = config.icmpv6;
    this._id = config.id;
    this._interface = config.interface;
    this._ip = config.ip;
    this._ipv4Ad = config.ipv4Ad;
    this._ipv6 = config.ipv6;
    this._ipv6Ad = config.ipv6Ad;
    this._l3Protocol = config.l3Protocol;
    this._l4Protocol = config.l4Protocol;
    this._neighbor = config.neighbor;
    this._portRange = config.portRange;
    this._sctp = config.sctp;
    this._tcp = config.tcp;
    this._timestamp = config.timestamp;
    this._udp = config.udp;
    this._uuid = config.uuid;
    this._ve = config.ve;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // all_ipv4 - computed: false, optional: true, required: false
  private _allIpv4?: number; 
  public get allIpv4() {
    return this.getNumberAttribute('all_ipv4');
  }
  public set allIpv4(value: number) {
    this._allIpv4 = value;
  }
  public resetAllIpv4() {
    this._allIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allIpv4Input() {
    return this._allIpv4;
  }

  // all_ipv6 - computed: false, optional: true, required: false
  private _allIpv6?: number; 
  public get allIpv6() {
    return this.getNumberAttribute('all_ipv6');
  }
  public set allIpv6(value: number) {
    this._allIpv6 = value;
  }
  public resetAllIpv6() {
    this._allIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allIpv6Input() {
    return this._allIpv6;
  }

  // all_sctp_ports - computed: false, optional: true, required: false
  private _allSctpPorts?: number; 
  public get allSctpPorts() {
    return this.getNumberAttribute('all_sctp_ports');
  }
  public set allSctpPorts(value: number) {
    this._allSctpPorts = value;
  }
  public resetAllSctpPorts() {
    this._allSctpPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allSctpPortsInput() {
    return this._allSctpPorts;
  }

  // all_tcp_ports - computed: false, optional: true, required: false
  private _allTcpPorts?: number; 
  public get allTcpPorts() {
    return this.getNumberAttribute('all_tcp_ports');
  }
  public set allTcpPorts(value: number) {
    this._allTcpPorts = value;
  }
  public resetAllTcpPorts() {
    this._allTcpPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allTcpPortsInput() {
    return this._allTcpPorts;
  }

  // all_udp_ports - computed: false, optional: true, required: false
  private _allUdpPorts?: number; 
  public get allUdpPorts() {
    return this.getNumberAttribute('all_udp_ports');
  }
  public set allUdpPorts(value: number) {
    this._allUdpPorts = value;
  }
  public resetAllUdpPorts() {
    this._allUdpPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allUdpPortsInput() {
    return this._allUdpPorts;
  }

  // arp - computed: false, optional: true, required: false
  private _arp?: number; 
  public get arp() {
    return this.getNumberAttribute('arp');
  }
  public set arp(value: number) {
    this._arp = value;
  }
  public resetArp() {
    this._arp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpInput() {
    return this._arp;
  }

  // count1 - computed: false, optional: true, required: false
  private _count1?: number; 
  public get count1() {
    return this.getNumberAttribute('count1');
  }
  public set count1(value: number) {
    this._count1 = value;
  }
  public resetCount1() {
    this._count1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get count1Input() {
    return this._count1;
  }

  // detail - computed: false, optional: true, required: false
  private _detail?: number; 
  public get detail() {
    return this.getNumberAttribute('detail');
  }
  public set detail(value: number) {
    this._detail = value;
  }
  public resetDetail() {
    this._detail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detailInput() {
    return this._detail;
  }

  // ethernet - computed: false, optional: true, required: false
  private _ethernet?: number; 
  public get ethernet() {
    return this.getNumberAttribute('ethernet');
  }
  public set ethernet(value: number) {
    this._ethernet = value;
  }
  public resetEthernet() {
    this._ethernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetInput() {
    return this._ethernet;
  }

  // icmp - computed: false, optional: true, required: false
  private _icmp?: number; 
  public get icmp() {
    return this.getNumberAttribute('icmp');
  }
  public set icmp(value: number) {
    this._icmp = value;
  }
  public resetIcmp() {
    this._icmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpInput() {
    return this._icmp;
  }

  // icmpv6 - computed: false, optional: true, required: false
  private _icmpv6?: number; 
  public get icmpv6() {
    return this.getNumberAttribute('icmpv6');
  }
  public set icmpv6(value: number) {
    this._icmpv6 = value;
  }
  public resetIcmpv6() {
    this._icmpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpv6Input() {
    return this._icmpv6;
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
  private _interface?: number; 
  public get interface() {
    return this.getNumberAttribute('interface');
  }
  public set interface(value: number) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: number; 
  public get ip() {
    return this.getNumberAttribute('ip');
  }
  public set ip(value: number) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // ipv4ad - computed: false, optional: true, required: false
  private _ipv4Ad?: string; 
  public get ipv4Ad() {
    return this.getStringAttribute('ipv4ad');
  }
  public set ipv4Ad(value: string) {
    this._ipv4Ad = value;
  }
  public resetIpv4Ad() {
    this._ipv4Ad = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AdInput() {
    return this._ipv4Ad;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: number; 
  public get ipv6() {
    return this.getNumberAttribute('ipv6');
  }
  public set ipv6(value: number) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }

  // ipv6ad - computed: false, optional: true, required: false
  private _ipv6Ad?: string; 
  public get ipv6Ad() {
    return this.getStringAttribute('ipv6ad');
  }
  public set ipv6Ad(value: string) {
    this._ipv6Ad = value;
  }
  public resetIpv6Ad() {
    this._ipv6Ad = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AdInput() {
    return this._ipv6Ad;
  }

  // l3_protocol - computed: false, optional: true, required: false
  private _l3Protocol?: number; 
  public get l3Protocol() {
    return this.getNumberAttribute('l3_protocol');
  }
  public set l3Protocol(value: number) {
    this._l3Protocol = value;
  }
  public resetL3Protocol() {
    this._l3Protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3ProtocolInput() {
    return this._l3Protocol;
  }

  // l4_protocol - computed: false, optional: true, required: false
  private _l4Protocol?: number; 
  public get l4Protocol() {
    return this.getNumberAttribute('l4_protocol');
  }
  public set l4Protocol(value: number) {
    this._l4Protocol = value;
  }
  public resetL4Protocol() {
    this._l4Protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4ProtocolInput() {
    return this._l4Protocol;
  }

  // neighbor - computed: false, optional: true, required: false
  private _neighbor?: number; 
  public get neighbor() {
    return this.getNumberAttribute('neighbor');
  }
  public set neighbor(value: number) {
    this._neighbor = value;
  }
  public resetNeighbor() {
    this._neighbor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborInput() {
    return this._neighbor;
  }

  // port_range - computed: false, optional: true, required: false
  private _portRange?: number; 
  public get portRange() {
    return this.getNumberAttribute('port_range');
  }
  public set portRange(value: number) {
    this._portRange = value;
  }
  public resetPortRange() {
    this._portRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeInput() {
    return this._portRange;
  }

  // sctp - computed: false, optional: true, required: false
  private _sctp?: number; 
  public get sctp() {
    return this.getNumberAttribute('sctp');
  }
  public set sctp(value: number) {
    this._sctp = value;
  }
  public resetSctp() {
    this._sctp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpInput() {
    return this._sctp;
  }

  // tcp - computed: false, optional: true, required: false
  private _tcp?: number; 
  public get tcp() {
    return this.getNumberAttribute('tcp');
  }
  public set tcp(value: number) {
    this._tcp = value;
  }
  public resetTcp() {
    this._tcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInput() {
    return this._tcp;
  }

  // timestamp - computed: false, optional: true, required: false
  private _timestamp?: number; 
  public get timestamp() {
    return this.getNumberAttribute('timestamp');
  }
  public set timestamp(value: number) {
    this._timestamp = value;
  }
  public resetTimestamp() {
    this._timestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampInput() {
    return this._timestamp;
  }

  // udp - computed: false, optional: true, required: false
  private _udp?: number; 
  public get udp() {
    return this.getNumberAttribute('udp');
  }
  public set udp(value: number) {
    this._udp = value;
  }
  public resetUdp() {
    this._udp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpInput() {
    return this._udp;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // ve - computed: false, optional: true, required: false
  private _ve?: number; 
  public get ve() {
    return this.getNumberAttribute('ve');
  }
  public set ve(value: number) {
    this._ve = value;
  }
  public resetVe() {
    this._ve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get veInput() {
    return this._ve;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      all_ipv4: cdktf.numberToTerraform(this._allIpv4),
      all_ipv6: cdktf.numberToTerraform(this._allIpv6),
      all_sctp_ports: cdktf.numberToTerraform(this._allSctpPorts),
      all_tcp_ports: cdktf.numberToTerraform(this._allTcpPorts),
      all_udp_ports: cdktf.numberToTerraform(this._allUdpPorts),
      arp: cdktf.numberToTerraform(this._arp),
      count1: cdktf.numberToTerraform(this._count1),
      detail: cdktf.numberToTerraform(this._detail),
      ethernet: cdktf.numberToTerraform(this._ethernet),
      icmp: cdktf.numberToTerraform(this._icmp),
      icmpv6: cdktf.numberToTerraform(this._icmpv6),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.numberToTerraform(this._interface),
      ip: cdktf.numberToTerraform(this._ip),
      ipv4ad: cdktf.stringToTerraform(this._ipv4Ad),
      ipv6: cdktf.numberToTerraform(this._ipv6),
      ipv6ad: cdktf.stringToTerraform(this._ipv6Ad),
      l3_protocol: cdktf.numberToTerraform(this._l3Protocol),
      l4_protocol: cdktf.numberToTerraform(this._l4Protocol),
      neighbor: cdktf.numberToTerraform(this._neighbor),
      port_range: cdktf.numberToTerraform(this._portRange),
      sctp: cdktf.numberToTerraform(this._sctp),
      tcp: cdktf.numberToTerraform(this._tcp),
      timestamp: cdktf.numberToTerraform(this._timestamp),
      udp: cdktf.numberToTerraform(this._udp),
      uuid: cdktf.stringToTerraform(this._uuid),
      ve: cdktf.numberToTerraform(this._ve),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      all_ipv4: {
        value: cdktf.numberToHclTerraform(this._allIpv4),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      all_ipv6: {
        value: cdktf.numberToHclTerraform(this._allIpv6),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      all_sctp_ports: {
        value: cdktf.numberToHclTerraform(this._allSctpPorts),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      all_tcp_ports: {
        value: cdktf.numberToHclTerraform(this._allTcpPorts),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      all_udp_ports: {
        value: cdktf.numberToHclTerraform(this._allUdpPorts),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      arp: {
        value: cdktf.numberToHclTerraform(this._arp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      count1: {
        value: cdktf.numberToHclTerraform(this._count1),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      detail: {
        value: cdktf.numberToHclTerraform(this._detail),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ethernet: {
        value: cdktf.numberToHclTerraform(this._ethernet),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      icmp: {
        value: cdktf.numberToHclTerraform(this._icmp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      icmpv6: {
        value: cdktf.numberToHclTerraform(this._icmpv6),
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
      interface: {
        value: cdktf.numberToHclTerraform(this._interface),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip: {
        value: cdktf.numberToHclTerraform(this._ip),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv4ad: {
        value: cdktf.stringToHclTerraform(this._ipv4Ad),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6: {
        value: cdktf.numberToHclTerraform(this._ipv6),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv6ad: {
        value: cdktf.stringToHclTerraform(this._ipv6Ad),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      l3_protocol: {
        value: cdktf.numberToHclTerraform(this._l3Protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      l4_protocol: {
        value: cdktf.numberToHclTerraform(this._l4Protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      neighbor: {
        value: cdktf.numberToHclTerraform(this._neighbor),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port_range: {
        value: cdktf.numberToHclTerraform(this._portRange),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sctp: {
        value: cdktf.numberToHclTerraform(this._sctp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp: {
        value: cdktf.numberToHclTerraform(this._tcp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timestamp: {
        value: cdktf.numberToHclTerraform(this._timestamp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      udp: {
        value: cdktf.numberToHclTerraform(this._udp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ve: {
        value: cdktf.numberToHclTerraform(this._ve),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
