// https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_traffic_flow_ipfix
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpTrafficFlowIpfixConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_traffic_flow_ipfix#___path___ IpTrafficFlowIpfix#___path___}
  */
  readonly path?: string;
  /**
  * <em>A set of fields that require setting/unsetting. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_traffic_flow_ipfix#___unset___ IpTrafficFlowIpfix#___unset___}
  */
  readonly unset?: string;
  /**
  * Total number of bytes processed in the flow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_traffic_flow_ipfix#bytes IpTrafficFlowIpfix#bytes}
  */
  readonly bytes?: string;
  /**
  * The destination IP address of the flow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_traffic_flow_ipfix#dst_address IpTrafficFlowIpfix#dst_address}
  */
  readonly dstAddress?: string;
  /**
  * Network mask for the destination address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_traffic_flow_ipfix#dst_address_mask IpTrafficFlowIpfix#dst_address_mask}
  */
  readonly dstAddressMask?: string;
  /**
  * Destination MAC address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_traffic_flow_ipfix#dst_mac_address IpTrafficFlowIpfix#dst_mac_address}
  */
  readonly dstMacAddress?: string;
  /**
  * Destination port number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_traffic_flow_ipfix#dst_port IpTrafficFlowIpfix#dst_port}
  */
  readonly dstPort?: string;
  /**
  * Timestamp of the first packet forwarded in a flow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_traffic_flow_ipfix#first_forwarded IpTrafficFlowIpfix#first_forwarded}
  */
  readonly firstForwarded?: string;
  /**
  * IP address of the gateway through which the flow was routed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_traffic_flow_ipfix#gateway IpTrafficFlowIpfix#gateway}
  */
  readonly gateway?: string;
  /**
  * ICMP code for error messaging and operational information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_traffic_flow_ipfix#icmp_code IpTrafficFlowIpfix#icmp_code}
  */
  readonly icmpCode?: string;
  /**
  * Type of ICMP message, important for diagnostic messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_traffic_flow_ipfix#icmp_type IpTrafficFlowIpfix#icmp_type}
  */
  readonly icmpType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_traffic_flow_ipfix#id IpTrafficFlowIpfix#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Type of Internet Group Management Protocol operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_traffic_flow_ipfix#igmp_type IpTrafficFlowIpfix#igmp_type}
  */
  readonly igmpType?: string;
  /**
  * Interface through which packets of the flow are received.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_traffic_flow_ipfix#in_interface IpTrafficFlowIpfix#in_interface}
  */
  readonly inInterface?: string;
  /**
  * Length of the IP header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_traffic_flow_ipfix#ip_header_length IpTrafficFlowIpfix#ip_header_length}
  */
  readonly ipHeaderLength?: string;
  /**
  * Length of the IP packet in bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_traffic_flow_ipfix#ip_total_lenght IpTrafficFlowIpfix#ip_total_lenght}
  */
  readonly ipTotalLenght?: string;
  /**
  * Label field from an IPv6 header, used to classify flows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_traffic_flow_ipfix#ipv6_flow_label IpTrafficFlowIpfix#ipv6_flow_label}
  */
  readonly ipv6FlowLabel?: string;
  /**
  * Indicates whether the flow is a multicast flow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_traffic_flow_ipfix#is_multicast IpTrafficFlowIpfix#is_multicast}
  */
  readonly isMulticast?: string;
  /**
  * Timestamp of the last packet forwarded in a flow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_traffic_flow_ipfix#last_forwarded IpTrafficFlowIpfix#last_forwarded}
  */
  readonly lastForwarded?: string;
  /**
  * Translated destination IP address by NAT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_traffic_flow_ipfix#nat_dst_address IpTrafficFlowIpfix#nat_dst_address}
  */
  readonly natDstAddress?: string;
  /**
  * Translated destination port number by NAT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_traffic_flow_ipfix#nat_dst_port IpTrafficFlowIpfix#nat_dst_port}
  */
  readonly natDstPort?: string;
  /**
  * Events related to Network Address Translation for the flow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_traffic_flow_ipfix#nat_events IpTrafficFlowIpfix#nat_events}
  */
  readonly natEvents?: string;
  /**
  * Translated source IP address by NAT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_traffic_flow_ipfix#nat_src_address IpTrafficFlowIpfix#nat_src_address}
  */
  readonly natSrcAddress?: string;
  /**
  * Translated source port number by NAT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_traffic_flow_ipfix#nat_src_port IpTrafficFlowIpfix#nat_src_port}
  */
  readonly natSrcPort?: string;
  /**
  * Interface through which packets of the flow are sent out.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_traffic_flow_ipfix#out_interface IpTrafficFlowIpfix#out_interface}
  */
  readonly outInterface?: string;
  /**
  * Number of packets processed in the flow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_traffic_flow_ipfix#packets IpTrafficFlowIpfix#packets}
  */
  readonly packets?: string;
  /**
  * Protocol number (e.g., TCP, UDP, ICMP).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_traffic_flow_ipfix#protocol IpTrafficFlowIpfix#protocol}
  */
  readonly protocol?: string;
  /**
  * The source IP address of the flow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_traffic_flow_ipfix#src_address IpTrafficFlowIpfix#src_address}
  */
  readonly srcAddress?: string;
  /**
  * Network mask for the source address, useful in summarizing data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_traffic_flow_ipfix#src_address_mask IpTrafficFlowIpfix#src_address_mask}
  */
  readonly srcAddressMask?: string;
  /**
  * Source MAC address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_traffic_flow_ipfix#src_mac_address IpTrafficFlowIpfix#src_mac_address}
  */
  readonly srcMacAddress?: string;
  /**
  * Source port number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_traffic_flow_ipfix#src_port IpTrafficFlowIpfix#src_port}
  */
  readonly srcPort?: string;
  /**
  * System initialization time, can be used for timing analysis.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_traffic_flow_ipfix#sys_init_time IpTrafficFlowIpfix#sys_init_time}
  */
  readonly sysInitTime?: string;
  /**
  * Acknowledgment number in a TCP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_traffic_flow_ipfix#tcp_ack_num IpTrafficFlowIpfix#tcp_ack_num}
  */
  readonly tcpAckNum?: string;
  /**
  * Flags from the TCP header (e.g., SYN, ACK).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_traffic_flow_ipfix#tcp_flags IpTrafficFlowIpfix#tcp_flags}
  */
  readonly tcpFlags?: string;
  /**
  * Sequence number in a TCP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_traffic_flow_ipfix#tcp_seq_num IpTrafficFlowIpfix#tcp_seq_num}
  */
  readonly tcpSeqNum?: string;
  /**
  * Window size in a TCP connection, indicating the scale of received data buffering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_traffic_flow_ipfix#tcp_window_size IpTrafficFlowIpfix#tcp_window_size}
  */
  readonly tcpWindowSize?: string;
  /**
  * Type of Service field in the IP header, indicating priority and handling of the packet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_traffic_flow_ipfix#tos IpTrafficFlowIpfix#tos}
  */
  readonly tos?: string;
  /**
  * Time To Live for the packet, decremented by each router to prevent infinite loops.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_traffic_flow_ipfix#ttl IpTrafficFlowIpfix#ttl}
  */
  readonly ttl?: string;
  /**
  * Length of the UDP payload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_traffic_flow_ipfix#udp_length IpTrafficFlowIpfix#udp_length}
  */
  readonly udpLength?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_traffic_flow_ipfix routeros_ip_traffic_flow_ipfix}
*/
export class IpTrafficFlowIpfix extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_ip_traffic_flow_ipfix";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpTrafficFlowIpfix resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpTrafficFlowIpfix to import
  * @param importFromId The id of the existing IpTrafficFlowIpfix that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_traffic_flow_ipfix#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpTrafficFlowIpfix to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_ip_traffic_flow_ipfix", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_traffic_flow_ipfix routeros_ip_traffic_flow_ipfix} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpTrafficFlowIpfixConfig = {}
  */
  public constructor(scope: Construct, id: string, config: IpTrafficFlowIpfixConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'routeros_ip_traffic_flow_ipfix',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.98.0',
        providerVersionConstraint: '1.98.0'
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
    this._unset = config.unset;
    this._bytes = config.bytes;
    this._dstAddress = config.dstAddress;
    this._dstAddressMask = config.dstAddressMask;
    this._dstMacAddress = config.dstMacAddress;
    this._dstPort = config.dstPort;
    this._firstForwarded = config.firstForwarded;
    this._gateway = config.gateway;
    this._icmpCode = config.icmpCode;
    this._icmpType = config.icmpType;
    this._id = config.id;
    this._igmpType = config.igmpType;
    this._inInterface = config.inInterface;
    this._ipHeaderLength = config.ipHeaderLength;
    this._ipTotalLenght = config.ipTotalLenght;
    this._ipv6FlowLabel = config.ipv6FlowLabel;
    this._isMulticast = config.isMulticast;
    this._lastForwarded = config.lastForwarded;
    this._natDstAddress = config.natDstAddress;
    this._natDstPort = config.natDstPort;
    this._natEvents = config.natEvents;
    this._natSrcAddress = config.natSrcAddress;
    this._natSrcPort = config.natSrcPort;
    this._outInterface = config.outInterface;
    this._packets = config.packets;
    this._protocol = config.protocol;
    this._srcAddress = config.srcAddress;
    this._srcAddressMask = config.srcAddressMask;
    this._srcMacAddress = config.srcMacAddress;
    this._srcPort = config.srcPort;
    this._sysInitTime = config.sysInitTime;
    this._tcpAckNum = config.tcpAckNum;
    this._tcpFlags = config.tcpFlags;
    this._tcpSeqNum = config.tcpSeqNum;
    this._tcpWindowSize = config.tcpWindowSize;
    this._tos = config.tos;
    this._ttl = config.ttl;
    this._udpLength = config.udpLength;
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

  // ___unset___ - computed: false, optional: true, required: false
  private _unset?: string; 
  public get unset() {
    return this.getStringAttribute('___unset___');
  }
  public set unset(value: string) {
    this._unset = value;
  }
  public resetUnset() {
    this._unset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsetInput() {
    return this._unset;
  }

  // bytes - computed: false, optional: true, required: false
  private _bytes?: string; 
  public get bytes() {
    return this.getStringAttribute('bytes');
  }
  public set bytes(value: string) {
    this._bytes = value;
  }
  public resetBytes() {
    this._bytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bytesInput() {
    return this._bytes;
  }

  // dst_address - computed: false, optional: true, required: false
  private _dstAddress?: string; 
  public get dstAddress() {
    return this.getStringAttribute('dst_address');
  }
  public set dstAddress(value: string) {
    this._dstAddress = value;
  }
  public resetDstAddress() {
    this._dstAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstAddressInput() {
    return this._dstAddress;
  }

  // dst_address_mask - computed: false, optional: true, required: false
  private _dstAddressMask?: string; 
  public get dstAddressMask() {
    return this.getStringAttribute('dst_address_mask');
  }
  public set dstAddressMask(value: string) {
    this._dstAddressMask = value;
  }
  public resetDstAddressMask() {
    this._dstAddressMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstAddressMaskInput() {
    return this._dstAddressMask;
  }

  // dst_mac_address - computed: false, optional: true, required: false
  private _dstMacAddress?: string; 
  public get dstMacAddress() {
    return this.getStringAttribute('dst_mac_address');
  }
  public set dstMacAddress(value: string) {
    this._dstMacAddress = value;
  }
  public resetDstMacAddress() {
    this._dstMacAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstMacAddressInput() {
    return this._dstMacAddress;
  }

  // dst_port - computed: false, optional: true, required: false
  private _dstPort?: string; 
  public get dstPort() {
    return this.getStringAttribute('dst_port');
  }
  public set dstPort(value: string) {
    this._dstPort = value;
  }
  public resetDstPort() {
    this._dstPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstPortInput() {
    return this._dstPort;
  }

  // first_forwarded - computed: false, optional: true, required: false
  private _firstForwarded?: string; 
  public get firstForwarded() {
    return this.getStringAttribute('first_forwarded');
  }
  public set firstForwarded(value: string) {
    this._firstForwarded = value;
  }
  public resetFirstForwarded() {
    this._firstForwarded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstForwardedInput() {
    return this._firstForwarded;
  }

  // gateway - computed: false, optional: true, required: false
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

  // icmp_code - computed: false, optional: true, required: false
  private _icmpCode?: string; 
  public get icmpCode() {
    return this.getStringAttribute('icmp_code');
  }
  public set icmpCode(value: string) {
    this._icmpCode = value;
  }
  public resetIcmpCode() {
    this._icmpCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpCodeInput() {
    return this._icmpCode;
  }

  // icmp_type - computed: false, optional: true, required: false
  private _icmpType?: string; 
  public get icmpType() {
    return this.getStringAttribute('icmp_type');
  }
  public set icmpType(value: string) {
    this._icmpType = value;
  }
  public resetIcmpType() {
    this._icmpType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpTypeInput() {
    return this._icmpType;
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

  // igmp_type - computed: false, optional: true, required: false
  private _igmpType?: string; 
  public get igmpType() {
    return this.getStringAttribute('igmp_type');
  }
  public set igmpType(value: string) {
    this._igmpType = value;
  }
  public resetIgmpType() {
    this._igmpType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get igmpTypeInput() {
    return this._igmpType;
  }

  // in_interface - computed: false, optional: true, required: false
  private _inInterface?: string; 
  public get inInterface() {
    return this.getStringAttribute('in_interface');
  }
  public set inInterface(value: string) {
    this._inInterface = value;
  }
  public resetInInterface() {
    this._inInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inInterfaceInput() {
    return this._inInterface;
  }

  // ip_header_length - computed: false, optional: true, required: false
  private _ipHeaderLength?: string; 
  public get ipHeaderLength() {
    return this.getStringAttribute('ip_header_length');
  }
  public set ipHeaderLength(value: string) {
    this._ipHeaderLength = value;
  }
  public resetIpHeaderLength() {
    this._ipHeaderLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipHeaderLengthInput() {
    return this._ipHeaderLength;
  }

  // ip_total_lenght - computed: false, optional: true, required: false
  private _ipTotalLenght?: string; 
  public get ipTotalLenght() {
    return this.getStringAttribute('ip_total_lenght');
  }
  public set ipTotalLenght(value: string) {
    this._ipTotalLenght = value;
  }
  public resetIpTotalLenght() {
    this._ipTotalLenght = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipTotalLenghtInput() {
    return this._ipTotalLenght;
  }

  // ipv6_flow_label - computed: false, optional: true, required: false
  private _ipv6FlowLabel?: string; 
  public get ipv6FlowLabel() {
    return this.getStringAttribute('ipv6_flow_label');
  }
  public set ipv6FlowLabel(value: string) {
    this._ipv6FlowLabel = value;
  }
  public resetIpv6FlowLabel() {
    this._ipv6FlowLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6FlowLabelInput() {
    return this._ipv6FlowLabel;
  }

  // is_multicast - computed: false, optional: true, required: false
  private _isMulticast?: string; 
  public get isMulticast() {
    return this.getStringAttribute('is_multicast');
  }
  public set isMulticast(value: string) {
    this._isMulticast = value;
  }
  public resetIsMulticast() {
    this._isMulticast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMulticastInput() {
    return this._isMulticast;
  }

  // last_forwarded - computed: false, optional: true, required: false
  private _lastForwarded?: string; 
  public get lastForwarded() {
    return this.getStringAttribute('last_forwarded');
  }
  public set lastForwarded(value: string) {
    this._lastForwarded = value;
  }
  public resetLastForwarded() {
    this._lastForwarded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastForwardedInput() {
    return this._lastForwarded;
  }

  // nat_dst_address - computed: false, optional: true, required: false
  private _natDstAddress?: string; 
  public get natDstAddress() {
    return this.getStringAttribute('nat_dst_address');
  }
  public set natDstAddress(value: string) {
    this._natDstAddress = value;
  }
  public resetNatDstAddress() {
    this._natDstAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natDstAddressInput() {
    return this._natDstAddress;
  }

  // nat_dst_port - computed: false, optional: true, required: false
  private _natDstPort?: string; 
  public get natDstPort() {
    return this.getStringAttribute('nat_dst_port');
  }
  public set natDstPort(value: string) {
    this._natDstPort = value;
  }
  public resetNatDstPort() {
    this._natDstPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natDstPortInput() {
    return this._natDstPort;
  }

  // nat_events - computed: false, optional: true, required: false
  private _natEvents?: string; 
  public get natEvents() {
    return this.getStringAttribute('nat_events');
  }
  public set natEvents(value: string) {
    this._natEvents = value;
  }
  public resetNatEvents() {
    this._natEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natEventsInput() {
    return this._natEvents;
  }

  // nat_src_address - computed: false, optional: true, required: false
  private _natSrcAddress?: string; 
  public get natSrcAddress() {
    return this.getStringAttribute('nat_src_address');
  }
  public set natSrcAddress(value: string) {
    this._natSrcAddress = value;
  }
  public resetNatSrcAddress() {
    this._natSrcAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natSrcAddressInput() {
    return this._natSrcAddress;
  }

  // nat_src_port - computed: false, optional: true, required: false
  private _natSrcPort?: string; 
  public get natSrcPort() {
    return this.getStringAttribute('nat_src_port');
  }
  public set natSrcPort(value: string) {
    this._natSrcPort = value;
  }
  public resetNatSrcPort() {
    this._natSrcPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natSrcPortInput() {
    return this._natSrcPort;
  }

  // out_interface - computed: false, optional: true, required: false
  private _outInterface?: string; 
  public get outInterface() {
    return this.getStringAttribute('out_interface');
  }
  public set outInterface(value: string) {
    this._outInterface = value;
  }
  public resetOutInterface() {
    this._outInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outInterfaceInput() {
    return this._outInterface;
  }

  // packets - computed: false, optional: true, required: false
  private _packets?: string; 
  public get packets() {
    return this.getStringAttribute('packets');
  }
  public set packets(value: string) {
    this._packets = value;
  }
  public resetPackets() {
    this._packets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetsInput() {
    return this._packets;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // src_address - computed: false, optional: true, required: false
  private _srcAddress?: string; 
  public get srcAddress() {
    return this.getStringAttribute('src_address');
  }
  public set srcAddress(value: string) {
    this._srcAddress = value;
  }
  public resetSrcAddress() {
    this._srcAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcAddressInput() {
    return this._srcAddress;
  }

  // src_address_mask - computed: false, optional: true, required: false
  private _srcAddressMask?: string; 
  public get srcAddressMask() {
    return this.getStringAttribute('src_address_mask');
  }
  public set srcAddressMask(value: string) {
    this._srcAddressMask = value;
  }
  public resetSrcAddressMask() {
    this._srcAddressMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcAddressMaskInput() {
    return this._srcAddressMask;
  }

  // src_mac_address - computed: false, optional: true, required: false
  private _srcMacAddress?: string; 
  public get srcMacAddress() {
    return this.getStringAttribute('src_mac_address');
  }
  public set srcMacAddress(value: string) {
    this._srcMacAddress = value;
  }
  public resetSrcMacAddress() {
    this._srcMacAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcMacAddressInput() {
    return this._srcMacAddress;
  }

  // src_port - computed: false, optional: true, required: false
  private _srcPort?: string; 
  public get srcPort() {
    return this.getStringAttribute('src_port');
  }
  public set srcPort(value: string) {
    this._srcPort = value;
  }
  public resetSrcPort() {
    this._srcPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPortInput() {
    return this._srcPort;
  }

  // sys_init_time - computed: false, optional: true, required: false
  private _sysInitTime?: string; 
  public get sysInitTime() {
    return this.getStringAttribute('sys_init_time');
  }
  public set sysInitTime(value: string) {
    this._sysInitTime = value;
  }
  public resetSysInitTime() {
    this._sysInitTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysInitTimeInput() {
    return this._sysInitTime;
  }

  // tcp_ack_num - computed: false, optional: true, required: false
  private _tcpAckNum?: string; 
  public get tcpAckNum() {
    return this.getStringAttribute('tcp_ack_num');
  }
  public set tcpAckNum(value: string) {
    this._tcpAckNum = value;
  }
  public resetTcpAckNum() {
    this._tcpAckNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpAckNumInput() {
    return this._tcpAckNum;
  }

  // tcp_flags - computed: false, optional: true, required: false
  private _tcpFlags?: string; 
  public get tcpFlags() {
    return this.getStringAttribute('tcp_flags');
  }
  public set tcpFlags(value: string) {
    this._tcpFlags = value;
  }
  public resetTcpFlags() {
    this._tcpFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFlagsInput() {
    return this._tcpFlags;
  }

  // tcp_seq_num - computed: false, optional: true, required: false
  private _tcpSeqNum?: string; 
  public get tcpSeqNum() {
    return this.getStringAttribute('tcp_seq_num');
  }
  public set tcpSeqNum(value: string) {
    this._tcpSeqNum = value;
  }
  public resetTcpSeqNum() {
    this._tcpSeqNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSeqNumInput() {
    return this._tcpSeqNum;
  }

  // tcp_window_size - computed: false, optional: true, required: false
  private _tcpWindowSize?: string; 
  public get tcpWindowSize() {
    return this.getStringAttribute('tcp_window_size');
  }
  public set tcpWindowSize(value: string) {
    this._tcpWindowSize = value;
  }
  public resetTcpWindowSize() {
    this._tcpWindowSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpWindowSizeInput() {
    return this._tcpWindowSize;
  }

  // tos - computed: false, optional: true, required: false
  private _tos?: string; 
  public get tos() {
    return this.getStringAttribute('tos');
  }
  public set tos(value: string) {
    this._tos = value;
  }
  public resetTos() {
    this._tos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tosInput() {
    return this._tos;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: string; 
  public get ttl() {
    return this.getStringAttribute('ttl');
  }
  public set ttl(value: string) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // udp_length - computed: false, optional: true, required: false
  private _udpLength?: string; 
  public get udpLength() {
    return this.getStringAttribute('udp_length');
  }
  public set udpLength(value: string) {
    this._udpLength = value;
  }
  public resetUdpLength() {
    this._udpLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpLengthInput() {
    return this._udpLength;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      ___unset___: cdktf.stringToTerraform(this._unset),
      bytes: cdktf.stringToTerraform(this._bytes),
      dst_address: cdktf.stringToTerraform(this._dstAddress),
      dst_address_mask: cdktf.stringToTerraform(this._dstAddressMask),
      dst_mac_address: cdktf.stringToTerraform(this._dstMacAddress),
      dst_port: cdktf.stringToTerraform(this._dstPort),
      first_forwarded: cdktf.stringToTerraform(this._firstForwarded),
      gateway: cdktf.stringToTerraform(this._gateway),
      icmp_code: cdktf.stringToTerraform(this._icmpCode),
      icmp_type: cdktf.stringToTerraform(this._icmpType),
      id: cdktf.stringToTerraform(this._id),
      igmp_type: cdktf.stringToTerraform(this._igmpType),
      in_interface: cdktf.stringToTerraform(this._inInterface),
      ip_header_length: cdktf.stringToTerraform(this._ipHeaderLength),
      ip_total_lenght: cdktf.stringToTerraform(this._ipTotalLenght),
      ipv6_flow_label: cdktf.stringToTerraform(this._ipv6FlowLabel),
      is_multicast: cdktf.stringToTerraform(this._isMulticast),
      last_forwarded: cdktf.stringToTerraform(this._lastForwarded),
      nat_dst_address: cdktf.stringToTerraform(this._natDstAddress),
      nat_dst_port: cdktf.stringToTerraform(this._natDstPort),
      nat_events: cdktf.stringToTerraform(this._natEvents),
      nat_src_address: cdktf.stringToTerraform(this._natSrcAddress),
      nat_src_port: cdktf.stringToTerraform(this._natSrcPort),
      out_interface: cdktf.stringToTerraform(this._outInterface),
      packets: cdktf.stringToTerraform(this._packets),
      protocol: cdktf.stringToTerraform(this._protocol),
      src_address: cdktf.stringToTerraform(this._srcAddress),
      src_address_mask: cdktf.stringToTerraform(this._srcAddressMask),
      src_mac_address: cdktf.stringToTerraform(this._srcMacAddress),
      src_port: cdktf.stringToTerraform(this._srcPort),
      sys_init_time: cdktf.stringToTerraform(this._sysInitTime),
      tcp_ack_num: cdktf.stringToTerraform(this._tcpAckNum),
      tcp_flags: cdktf.stringToTerraform(this._tcpFlags),
      tcp_seq_num: cdktf.stringToTerraform(this._tcpSeqNum),
      tcp_window_size: cdktf.stringToTerraform(this._tcpWindowSize),
      tos: cdktf.stringToTerraform(this._tos),
      ttl: cdktf.stringToTerraform(this._ttl),
      udp_length: cdktf.stringToTerraform(this._udpLength),
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
      ___unset___: {
        value: cdktf.stringToHclTerraform(this._unset),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bytes: {
        value: cdktf.stringToHclTerraform(this._bytes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst_address: {
        value: cdktf.stringToHclTerraform(this._dstAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst_address_mask: {
        value: cdktf.stringToHclTerraform(this._dstAddressMask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst_mac_address: {
        value: cdktf.stringToHclTerraform(this._dstMacAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst_port: {
        value: cdktf.stringToHclTerraform(this._dstPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      first_forwarded: {
        value: cdktf.stringToHclTerraform(this._firstForwarded),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gateway: {
        value: cdktf.stringToHclTerraform(this._gateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icmp_code: {
        value: cdktf.stringToHclTerraform(this._icmpCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icmp_type: {
        value: cdktf.stringToHclTerraform(this._icmpType),
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
      igmp_type: {
        value: cdktf.stringToHclTerraform(this._igmpType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      in_interface: {
        value: cdktf.stringToHclTerraform(this._inInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_header_length: {
        value: cdktf.stringToHclTerraform(this._ipHeaderLength),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_total_lenght: {
        value: cdktf.stringToHclTerraform(this._ipTotalLenght),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_flow_label: {
        value: cdktf.stringToHclTerraform(this._ipv6FlowLabel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_multicast: {
        value: cdktf.stringToHclTerraform(this._isMulticast),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_forwarded: {
        value: cdktf.stringToHclTerraform(this._lastForwarded),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat_dst_address: {
        value: cdktf.stringToHclTerraform(this._natDstAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat_dst_port: {
        value: cdktf.stringToHclTerraform(this._natDstPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat_events: {
        value: cdktf.stringToHclTerraform(this._natEvents),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat_src_address: {
        value: cdktf.stringToHclTerraform(this._natSrcAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat_src_port: {
        value: cdktf.stringToHclTerraform(this._natSrcPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      out_interface: {
        value: cdktf.stringToHclTerraform(this._outInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      packets: {
        value: cdktf.stringToHclTerraform(this._packets),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_address: {
        value: cdktf.stringToHclTerraform(this._srcAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_address_mask: {
        value: cdktf.stringToHclTerraform(this._srcAddressMask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_mac_address: {
        value: cdktf.stringToHclTerraform(this._srcMacAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_port: {
        value: cdktf.stringToHclTerraform(this._srcPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sys_init_time: {
        value: cdktf.stringToHclTerraform(this._sysInitTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_ack_num: {
        value: cdktf.stringToHclTerraform(this._tcpAckNum),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_flags: {
        value: cdktf.stringToHclTerraform(this._tcpFlags),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_seq_num: {
        value: cdktf.stringToHclTerraform(this._tcpSeqNum),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_window_size: {
        value: cdktf.stringToHclTerraform(this._tcpWindowSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tos: {
        value: cdktf.stringToHclTerraform(this._tos),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ttl: {
        value: cdktf.stringToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      udp_length: {
        value: cdktf.stringToHclTerraform(this._udpLength),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
