// https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/tool_sniffer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ToolSnifferConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/tool_sniffer#___path___ ToolSniffer#___path___}
  */
  readonly path?: string;
  /**
  * <em>A set of transformations for field names. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/tool_sniffer#___skip___ ToolSniffer#___skip___}
  */
  readonly skip?: string;
  /**
  * Start packet capture.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/tool_sniffer#enabled ToolSniffer#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * File size limit. Sniffer will stop when a limit is reached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/tool_sniffer#file_limit ToolSniffer#file_limit}
  */
  readonly fileLimit?: number;
  /**
  * Name of the file where sniffed packets will be saved.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/tool_sniffer#file_name ToolSniffer#file_name}
  */
  readonly fileName?: string;
  /**
  * CPU core used as a filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/tool_sniffer#filter_cpu ToolSniffer#filter_cpu}
  */
  readonly filterCpu?: string;
  /**
  * Specifies which direction filtering will be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/tool_sniffer#filter_direction ToolSniffer#filter_direction}
  */
  readonly filterDirection?: string;
  /**
  * Up to 16 IP destination addresses used as a filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/tool_sniffer#filter_dst_ip_address ToolSniffer#filter_dst_ip_address}
  */
  readonly filterDstIpAddress?: string[];
  /**
  * Up to 16 IPv6 destination addresses used as a filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/tool_sniffer#filter_dst_ipv6_address ToolSniffer#filter_dst_ipv6_address}
  */
  readonly filterDstIpv6Address?: string[];
  /**
  * Up to 16 MAC destination addresses and MAC address masks used as a filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/tool_sniffer#filter_dst_mac_address ToolSniffer#filter_dst_mac_address}
  */
  readonly filterDstMacAddress?: string[];
  /**
  * Up to 16 comma-separated destination ports used as a filter. A list of predefined port names is also available, like ssh and telnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/tool_sniffer#filter_dst_port ToolSniffer#filter_dst_port}
  */
  readonly filterDstPort?: string[];
  /**
  * Interface name on which sniffer will be running. all indicates that the sniffer will sniff packets on all interfaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/tool_sniffer#filter_interface ToolSniffer#filter_interface}
  */
  readonly filterInterface?: string[];
  /**
  * Up to 16 IP addresses used as a filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/tool_sniffer#filter_ip_address ToolSniffer#filter_ip_address}
  */
  readonly filterIpAddress?: string[];
  /**
  * Up to 16 comma-separated IP/IPv6 protocols used as a filter. IP protocols (instead of protocol names, protocol numbers can be used):
  *   * ipsec-ah - IPsec AH protocol
  *   * ipsec-esp - IPsec ESP protocol
  *   * ddp - datagram delivery protocol
  *   * egp - exterior gateway protocol
  *   * ggp - gateway-gateway protocol
  *   * gre - general routing encapsulation
  *   * hmp - host monitoring protocol
  *   * idpr-cmtp - idpr control message transport
  *   * icmp - internet control message protocol
  *   * icmpv6 - internet control message protocol v6
  *   * igmp - internet group management protocol
  *   * ipencap - ip encapsulated in ip
  *   * ipip - ip encapsulation
  *   * encap - ip encapsulation
  *   * iso-tp4 - iso transport protocol class 4
  *   * ospf - open shortest path first
  *   * pup - parc universal packet protocol
  *   * pim - protocol independent multicast
  *   * rspf - radio shortest path first
  *   * rdp - reliable datagram protocol
  *   * st - st datagram mode
  *   * tcp - transmission control protocol
  *   * udp - user datagram protocol
  *   * vmtp versatile message transport
  *   * vrrp - virtual router redundancy protocol
  *   * xns-idp - xerox xns idp
  *   * xtp - xpress transfer protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/tool_sniffer#filter_ip_protocol ToolSniffer#filter_ip_protocol}
  */
  readonly filterIpProtocol?: string[];
  /**
  * Up to 16 IPv6 addresses used as a filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/tool_sniffer#filter_ipv6_address ToolSniffer#filter_ipv6_address}
  */
  readonly filterIpv6Address?: string[];
  /**
  * Up to 16 MAC addresses and MAC address masks used as a filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/tool_sniffer#filter_mac_address ToolSniffer#filter_mac_address}
  */
  readonly filterMacAddress?: string[];
  /**
  * Up to 16 comma separated entries used as a filter. Mac protocols (instead of protocol names, protocol number can be used):
  *   * 802.2 - 802.2 Frames (0x0004)
  *   * arp - Address Resolution Protocol (0x0806)
  *   * homeplug-av - HomePlug AV MME (0x88E1)
  *   * ip - Internet Protocol version 4 (0x0800)
  *   * ipv6 - Internet Protocol Version 6 (0x86DD)
  *   * ipx - Internetwork Packet Exchange (0x8137)
  *   * lldp - Link Layer Discovery Protocol (0x88CC)
  *   * loop-protect - Loop Protect Protocol (0x9003)
  *   * mpls-multicast - MPLS multicast (0x8848)
  *   * mpls-unicast - MPLS unicast (0x8847)
  *   * packing-compr - Encapsulated packets with compressed IP packing (0x9001)
  *   * packing-simple - Encapsulated packets with simple IP packing (0x9000)
  *   * pppoe - PPPoE Session Stage (0x8864)
  *   * pppoe-discovery - PPPoE Discovery Stage (0x8863)
  *   * rarp - Reverse Address Resolution Protocol (0x8035)
  *   * service-vlan - Provider Bridging (IEEE 802.1ad) & Shortest Path Bridging IEEE 802.1aq (0x88A8)
  *   * vlan - VLAN-tagged frame (IEEE 802.1Q) and Shortest Path Bridging IEEE 802.1aq with NNI compatibility (0x8100)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/tool_sniffer#filter_mac_protocol ToolSniffer#filter_mac_protocol}
  */
  readonly filterMacProtocol?: string[];
  /**
  * Changes the logic for filters with multiple entries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/tool_sniffer#filter_operator_between_entries ToolSniffer#filter_operator_between_entries}
  */
  readonly filterOperatorBetweenEntries?: string;
  /**
  * Up to 16 comma-separated ports used as a filter. A list of predefined port names is also available, like ssh and telnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/tool_sniffer#filter_port ToolSniffer#filter_port}
  */
  readonly filterPort?: string[];
  /**
  * Filters packets of specified size or size range in bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/tool_sniffer#filter_size ToolSniffer#filter_size}
  */
  readonly filterSize?: string;
  /**
  * Up to 16 IP source addresses used as a filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/tool_sniffer#filter_src_ip_address ToolSniffer#filter_src_ip_address}
  */
  readonly filterSrcIpAddress?: string[];
  /**
  * Up to 16 IPv6 source addresses used as a filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/tool_sniffer#filter_src_ipv6_address ToolSniffer#filter_src_ipv6_address}
  */
  readonly filterSrcIpv6Address?: string[];
  /**
  * Up to 16 MAC source addresses and MAC address masks used as a filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/tool_sniffer#filter_src_mac_address ToolSniffer#filter_src_mac_address}
  */
  readonly filterSrcMacAddress?: string[];
  /**
  * Up to 16 comma-separated source ports used as a filter. A list of predefined port names is also available, like ssh and telnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/tool_sniffer#filter_src_port ToolSniffer#filter_src_port}
  */
  readonly filterSrcPort?: string[];
  /**
  * Sniffed packets that are devised for the sniffer server are ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/tool_sniffer#filter_stream ToolSniffer#filter_stream}
  */
  readonly filterStream?: boolean | cdktf.IResolvable;
  /**
  * Up to 16 VLAN IDs used as a filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/tool_sniffer#filter_vlan ToolSniffer#filter_vlan}
  */
  readonly filterVlan?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/tool_sniffer#id ToolSniffer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/tool_sniffer#max_packet_size ToolSniffer#max_packet_size}
  */
  readonly maxPacketSize?: number;
  /**
  * Memory amount used to store sniffed data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/tool_sniffer#memory_limit ToolSniffer#memory_limit}
  */
  readonly memoryLimit?: number;
  /**
  * Whether to rewrite older sniffed data when the memory limit is reached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/tool_sniffer#memory_scroll ToolSniffer#memory_scroll}
  */
  readonly memoryScroll?: boolean | cdktf.IResolvable;
  /**
  * Save in the memory only the packet's headers, not the whole packet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/tool_sniffer#only_headers ToolSniffer#only_headers}
  */
  readonly onlyHeaders?: boolean | cdktf.IResolvable;
  /**
  * Defines whether to send sniffed packets to the streaming server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/tool_sniffer#streaming_enabled ToolSniffer#streaming_enabled}
  */
  readonly streamingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Tazmen Sniffer Protocol (TZSP) stream receiver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/tool_sniffer#streaming_server ToolSniffer#streaming_server}
  */
  readonly streamingServer?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/tool_sniffer routeros_tool_sniffer}
*/
export class ToolSniffer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_tool_sniffer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ToolSniffer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ToolSniffer to import
  * @param importFromId The id of the existing ToolSniffer that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/tool_sniffer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ToolSniffer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_tool_sniffer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/tool_sniffer routeros_tool_sniffer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ToolSnifferConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ToolSnifferConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'routeros_tool_sniffer',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.95.0',
        providerVersionConstraint: '1.95.0'
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
    this._enabled = config.enabled;
    this._fileLimit = config.fileLimit;
    this._fileName = config.fileName;
    this._filterCpu = config.filterCpu;
    this._filterDirection = config.filterDirection;
    this._filterDstIpAddress = config.filterDstIpAddress;
    this._filterDstIpv6Address = config.filterDstIpv6Address;
    this._filterDstMacAddress = config.filterDstMacAddress;
    this._filterDstPort = config.filterDstPort;
    this._filterInterface = config.filterInterface;
    this._filterIpAddress = config.filterIpAddress;
    this._filterIpProtocol = config.filterIpProtocol;
    this._filterIpv6Address = config.filterIpv6Address;
    this._filterMacAddress = config.filterMacAddress;
    this._filterMacProtocol = config.filterMacProtocol;
    this._filterOperatorBetweenEntries = config.filterOperatorBetweenEntries;
    this._filterPort = config.filterPort;
    this._filterSize = config.filterSize;
    this._filterSrcIpAddress = config.filterSrcIpAddress;
    this._filterSrcIpv6Address = config.filterSrcIpv6Address;
    this._filterSrcMacAddress = config.filterSrcMacAddress;
    this._filterSrcPort = config.filterSrcPort;
    this._filterStream = config.filterStream;
    this._filterVlan = config.filterVlan;
    this._id = config.id;
    this._maxPacketSize = config.maxPacketSize;
    this._memoryLimit = config.memoryLimit;
    this._memoryScroll = config.memoryScroll;
    this._onlyHeaders = config.onlyHeaders;
    this._streamingEnabled = config.streamingEnabled;
    this._streamingServer = config.streamingServer;
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

  // file_limit - computed: false, optional: true, required: false
  private _fileLimit?: number; 
  public get fileLimit() {
    return this.getNumberAttribute('file_limit');
  }
  public set fileLimit(value: number) {
    this._fileLimit = value;
  }
  public resetFileLimit() {
    this._fileLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileLimitInput() {
    return this._fileLimit;
  }

  // file_name - computed: false, optional: true, required: false
  private _fileName?: string; 
  public get fileName() {
    return this.getStringAttribute('file_name');
  }
  public set fileName(value: string) {
    this._fileName = value;
  }
  public resetFileName() {
    this._fileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileNameInput() {
    return this._fileName;
  }

  // filter_cpu - computed: false, optional: true, required: false
  private _filterCpu?: string; 
  public get filterCpu() {
    return this.getStringAttribute('filter_cpu');
  }
  public set filterCpu(value: string) {
    this._filterCpu = value;
  }
  public resetFilterCpu() {
    this._filterCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterCpuInput() {
    return this._filterCpu;
  }

  // filter_direction - computed: false, optional: true, required: false
  private _filterDirection?: string; 
  public get filterDirection() {
    return this.getStringAttribute('filter_direction');
  }
  public set filterDirection(value: string) {
    this._filterDirection = value;
  }
  public resetFilterDirection() {
    this._filterDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterDirectionInput() {
    return this._filterDirection;
  }

  // filter_dst_ip_address - computed: false, optional: true, required: false
  private _filterDstIpAddress?: string[]; 
  public get filterDstIpAddress() {
    return cdktf.Fn.tolist(this.getListAttribute('filter_dst_ip_address'));
  }
  public set filterDstIpAddress(value: string[]) {
    this._filterDstIpAddress = value;
  }
  public resetFilterDstIpAddress() {
    this._filterDstIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterDstIpAddressInput() {
    return this._filterDstIpAddress;
  }

  // filter_dst_ipv6_address - computed: false, optional: true, required: false
  private _filterDstIpv6Address?: string[]; 
  public get filterDstIpv6Address() {
    return cdktf.Fn.tolist(this.getListAttribute('filter_dst_ipv6_address'));
  }
  public set filterDstIpv6Address(value: string[]) {
    this._filterDstIpv6Address = value;
  }
  public resetFilterDstIpv6Address() {
    this._filterDstIpv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterDstIpv6AddressInput() {
    return this._filterDstIpv6Address;
  }

  // filter_dst_mac_address - computed: false, optional: true, required: false
  private _filterDstMacAddress?: string[]; 
  public get filterDstMacAddress() {
    return cdktf.Fn.tolist(this.getListAttribute('filter_dst_mac_address'));
  }
  public set filterDstMacAddress(value: string[]) {
    this._filterDstMacAddress = value;
  }
  public resetFilterDstMacAddress() {
    this._filterDstMacAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterDstMacAddressInput() {
    return this._filterDstMacAddress;
  }

  // filter_dst_port - computed: false, optional: true, required: false
  private _filterDstPort?: string[]; 
  public get filterDstPort() {
    return cdktf.Fn.tolist(this.getListAttribute('filter_dst_port'));
  }
  public set filterDstPort(value: string[]) {
    this._filterDstPort = value;
  }
  public resetFilterDstPort() {
    this._filterDstPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterDstPortInput() {
    return this._filterDstPort;
  }

  // filter_interface - computed: false, optional: true, required: false
  private _filterInterface?: string[]; 
  public get filterInterface() {
    return cdktf.Fn.tolist(this.getListAttribute('filter_interface'));
  }
  public set filterInterface(value: string[]) {
    this._filterInterface = value;
  }
  public resetFilterInterface() {
    this._filterInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInterfaceInput() {
    return this._filterInterface;
  }

  // filter_ip_address - computed: false, optional: true, required: false
  private _filterIpAddress?: string[]; 
  public get filterIpAddress() {
    return cdktf.Fn.tolist(this.getListAttribute('filter_ip_address'));
  }
  public set filterIpAddress(value: string[]) {
    this._filterIpAddress = value;
  }
  public resetFilterIpAddress() {
    this._filterIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterIpAddressInput() {
    return this._filterIpAddress;
  }

  // filter_ip_protocol - computed: false, optional: true, required: false
  private _filterIpProtocol?: string[]; 
  public get filterIpProtocol() {
    return cdktf.Fn.tolist(this.getListAttribute('filter_ip_protocol'));
  }
  public set filterIpProtocol(value: string[]) {
    this._filterIpProtocol = value;
  }
  public resetFilterIpProtocol() {
    this._filterIpProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterIpProtocolInput() {
    return this._filterIpProtocol;
  }

  // filter_ipv6_address - computed: false, optional: true, required: false
  private _filterIpv6Address?: string[]; 
  public get filterIpv6Address() {
    return cdktf.Fn.tolist(this.getListAttribute('filter_ipv6_address'));
  }
  public set filterIpv6Address(value: string[]) {
    this._filterIpv6Address = value;
  }
  public resetFilterIpv6Address() {
    this._filterIpv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterIpv6AddressInput() {
    return this._filterIpv6Address;
  }

  // filter_mac_address - computed: false, optional: true, required: false
  private _filterMacAddress?: string[]; 
  public get filterMacAddress() {
    return cdktf.Fn.tolist(this.getListAttribute('filter_mac_address'));
  }
  public set filterMacAddress(value: string[]) {
    this._filterMacAddress = value;
  }
  public resetFilterMacAddress() {
    this._filterMacAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterMacAddressInput() {
    return this._filterMacAddress;
  }

  // filter_mac_protocol - computed: false, optional: true, required: false
  private _filterMacProtocol?: string[]; 
  public get filterMacProtocol() {
    return cdktf.Fn.tolist(this.getListAttribute('filter_mac_protocol'));
  }
  public set filterMacProtocol(value: string[]) {
    this._filterMacProtocol = value;
  }
  public resetFilterMacProtocol() {
    this._filterMacProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterMacProtocolInput() {
    return this._filterMacProtocol;
  }

  // filter_operator_between_entries - computed: false, optional: true, required: false
  private _filterOperatorBetweenEntries?: string; 
  public get filterOperatorBetweenEntries() {
    return this.getStringAttribute('filter_operator_between_entries');
  }
  public set filterOperatorBetweenEntries(value: string) {
    this._filterOperatorBetweenEntries = value;
  }
  public resetFilterOperatorBetweenEntries() {
    this._filterOperatorBetweenEntries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterOperatorBetweenEntriesInput() {
    return this._filterOperatorBetweenEntries;
  }

  // filter_port - computed: false, optional: true, required: false
  private _filterPort?: string[]; 
  public get filterPort() {
    return cdktf.Fn.tolist(this.getListAttribute('filter_port'));
  }
  public set filterPort(value: string[]) {
    this._filterPort = value;
  }
  public resetFilterPort() {
    this._filterPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterPortInput() {
    return this._filterPort;
  }

  // filter_size - computed: false, optional: true, required: false
  private _filterSize?: string; 
  public get filterSize() {
    return this.getStringAttribute('filter_size');
  }
  public set filterSize(value: string) {
    this._filterSize = value;
  }
  public resetFilterSize() {
    this._filterSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterSizeInput() {
    return this._filterSize;
  }

  // filter_src_ip_address - computed: false, optional: true, required: false
  private _filterSrcIpAddress?: string[]; 
  public get filterSrcIpAddress() {
    return cdktf.Fn.tolist(this.getListAttribute('filter_src_ip_address'));
  }
  public set filterSrcIpAddress(value: string[]) {
    this._filterSrcIpAddress = value;
  }
  public resetFilterSrcIpAddress() {
    this._filterSrcIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterSrcIpAddressInput() {
    return this._filterSrcIpAddress;
  }

  // filter_src_ipv6_address - computed: false, optional: true, required: false
  private _filterSrcIpv6Address?: string[]; 
  public get filterSrcIpv6Address() {
    return cdktf.Fn.tolist(this.getListAttribute('filter_src_ipv6_address'));
  }
  public set filterSrcIpv6Address(value: string[]) {
    this._filterSrcIpv6Address = value;
  }
  public resetFilterSrcIpv6Address() {
    this._filterSrcIpv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterSrcIpv6AddressInput() {
    return this._filterSrcIpv6Address;
  }

  // filter_src_mac_address - computed: false, optional: true, required: false
  private _filterSrcMacAddress?: string[]; 
  public get filterSrcMacAddress() {
    return cdktf.Fn.tolist(this.getListAttribute('filter_src_mac_address'));
  }
  public set filterSrcMacAddress(value: string[]) {
    this._filterSrcMacAddress = value;
  }
  public resetFilterSrcMacAddress() {
    this._filterSrcMacAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterSrcMacAddressInput() {
    return this._filterSrcMacAddress;
  }

  // filter_src_port - computed: false, optional: true, required: false
  private _filterSrcPort?: string[]; 
  public get filterSrcPort() {
    return cdktf.Fn.tolist(this.getListAttribute('filter_src_port'));
  }
  public set filterSrcPort(value: string[]) {
    this._filterSrcPort = value;
  }
  public resetFilterSrcPort() {
    this._filterSrcPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterSrcPortInput() {
    return this._filterSrcPort;
  }

  // filter_stream - computed: false, optional: true, required: false
  private _filterStream?: boolean | cdktf.IResolvable; 
  public get filterStream() {
    return this.getBooleanAttribute('filter_stream');
  }
  public set filterStream(value: boolean | cdktf.IResolvable) {
    this._filterStream = value;
  }
  public resetFilterStream() {
    this._filterStream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterStreamInput() {
    return this._filterStream;
  }

  // filter_vlan - computed: false, optional: true, required: false
  private _filterVlan?: number[]; 
  public get filterVlan() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('filter_vlan')));
  }
  public set filterVlan(value: number[]) {
    this._filterVlan = value;
  }
  public resetFilterVlan() {
    this._filterVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterVlanInput() {
    return this._filterVlan;
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

  // max_packet_size - computed: false, optional: true, required: false
  private _maxPacketSize?: number; 
  public get maxPacketSize() {
    return this.getNumberAttribute('max_packet_size');
  }
  public set maxPacketSize(value: number) {
    this._maxPacketSize = value;
  }
  public resetMaxPacketSize() {
    this._maxPacketSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPacketSizeInput() {
    return this._maxPacketSize;
  }

  // memory_limit - computed: false, optional: true, required: false
  private _memoryLimit?: number; 
  public get memoryLimit() {
    return this.getNumberAttribute('memory_limit');
  }
  public set memoryLimit(value: number) {
    this._memoryLimit = value;
  }
  public resetMemoryLimit() {
    this._memoryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryLimitInput() {
    return this._memoryLimit;
  }

  // memory_scroll - computed: false, optional: true, required: false
  private _memoryScroll?: boolean | cdktf.IResolvable; 
  public get memoryScroll() {
    return this.getBooleanAttribute('memory_scroll');
  }
  public set memoryScroll(value: boolean | cdktf.IResolvable) {
    this._memoryScroll = value;
  }
  public resetMemoryScroll() {
    this._memoryScroll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryScrollInput() {
    return this._memoryScroll;
  }

  // only_headers - computed: false, optional: true, required: false
  private _onlyHeaders?: boolean | cdktf.IResolvable; 
  public get onlyHeaders() {
    return this.getBooleanAttribute('only_headers');
  }
  public set onlyHeaders(value: boolean | cdktf.IResolvable) {
    this._onlyHeaders = value;
  }
  public resetOnlyHeaders() {
    this._onlyHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlyHeadersInput() {
    return this._onlyHeaders;
  }

  // running - computed: true, optional: false, required: false
  public get running() {
    return this.getBooleanAttribute('running');
  }

  // streaming_enabled - computed: false, optional: true, required: false
  private _streamingEnabled?: boolean | cdktf.IResolvable; 
  public get streamingEnabled() {
    return this.getBooleanAttribute('streaming_enabled');
  }
  public set streamingEnabled(value: boolean | cdktf.IResolvable) {
    this._streamingEnabled = value;
  }
  public resetStreamingEnabled() {
    this._streamingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamingEnabledInput() {
    return this._streamingEnabled;
  }

  // streaming_server - computed: false, optional: true, required: false
  private _streamingServer?: string; 
  public get streamingServer() {
    return this.getStringAttribute('streaming_server');
  }
  public set streamingServer(value: string) {
    this._streamingServer = value;
  }
  public resetStreamingServer() {
    this._streamingServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamingServerInput() {
    return this._streamingServer;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      ___skip___: cdktf.stringToTerraform(this._skip),
      enabled: cdktf.booleanToTerraform(this._enabled),
      file_limit: cdktf.numberToTerraform(this._fileLimit),
      file_name: cdktf.stringToTerraform(this._fileName),
      filter_cpu: cdktf.stringToTerraform(this._filterCpu),
      filter_direction: cdktf.stringToTerraform(this._filterDirection),
      filter_dst_ip_address: cdktf.listMapper(cdktf.stringToTerraform, false)(this._filterDstIpAddress),
      filter_dst_ipv6_address: cdktf.listMapper(cdktf.stringToTerraform, false)(this._filterDstIpv6Address),
      filter_dst_mac_address: cdktf.listMapper(cdktf.stringToTerraform, false)(this._filterDstMacAddress),
      filter_dst_port: cdktf.listMapper(cdktf.stringToTerraform, false)(this._filterDstPort),
      filter_interface: cdktf.listMapper(cdktf.stringToTerraform, false)(this._filterInterface),
      filter_ip_address: cdktf.listMapper(cdktf.stringToTerraform, false)(this._filterIpAddress),
      filter_ip_protocol: cdktf.listMapper(cdktf.stringToTerraform, false)(this._filterIpProtocol),
      filter_ipv6_address: cdktf.listMapper(cdktf.stringToTerraform, false)(this._filterIpv6Address),
      filter_mac_address: cdktf.listMapper(cdktf.stringToTerraform, false)(this._filterMacAddress),
      filter_mac_protocol: cdktf.listMapper(cdktf.stringToTerraform, false)(this._filterMacProtocol),
      filter_operator_between_entries: cdktf.stringToTerraform(this._filterOperatorBetweenEntries),
      filter_port: cdktf.listMapper(cdktf.stringToTerraform, false)(this._filterPort),
      filter_size: cdktf.stringToTerraform(this._filterSize),
      filter_src_ip_address: cdktf.listMapper(cdktf.stringToTerraform, false)(this._filterSrcIpAddress),
      filter_src_ipv6_address: cdktf.listMapper(cdktf.stringToTerraform, false)(this._filterSrcIpv6Address),
      filter_src_mac_address: cdktf.listMapper(cdktf.stringToTerraform, false)(this._filterSrcMacAddress),
      filter_src_port: cdktf.listMapper(cdktf.stringToTerraform, false)(this._filterSrcPort),
      filter_stream: cdktf.booleanToTerraform(this._filterStream),
      filter_vlan: cdktf.listMapper(cdktf.numberToTerraform, false)(this._filterVlan),
      id: cdktf.stringToTerraform(this._id),
      max_packet_size: cdktf.numberToTerraform(this._maxPacketSize),
      memory_limit: cdktf.numberToTerraform(this._memoryLimit),
      memory_scroll: cdktf.booleanToTerraform(this._memoryScroll),
      only_headers: cdktf.booleanToTerraform(this._onlyHeaders),
      streaming_enabled: cdktf.booleanToTerraform(this._streamingEnabled),
      streaming_server: cdktf.stringToTerraform(this._streamingServer),
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
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      file_limit: {
        value: cdktf.numberToHclTerraform(this._fileLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      file_name: {
        value: cdktf.stringToHclTerraform(this._fileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_cpu: {
        value: cdktf.stringToHclTerraform(this._filterCpu),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_direction: {
        value: cdktf.stringToHclTerraform(this._filterDirection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_dst_ip_address: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._filterDstIpAddress),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      filter_dst_ipv6_address: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._filterDstIpv6Address),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      filter_dst_mac_address: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._filterDstMacAddress),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      filter_dst_port: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._filterDstPort),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      filter_interface: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._filterInterface),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      filter_ip_address: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._filterIpAddress),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      filter_ip_protocol: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._filterIpProtocol),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      filter_ipv6_address: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._filterIpv6Address),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      filter_mac_address: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._filterMacAddress),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      filter_mac_protocol: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._filterMacProtocol),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      filter_operator_between_entries: {
        value: cdktf.stringToHclTerraform(this._filterOperatorBetweenEntries),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_port: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._filterPort),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      filter_size: {
        value: cdktf.stringToHclTerraform(this._filterSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_src_ip_address: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._filterSrcIpAddress),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      filter_src_ipv6_address: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._filterSrcIpv6Address),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      filter_src_mac_address: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._filterSrcMacAddress),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      filter_src_port: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._filterSrcPort),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      filter_stream: {
        value: cdktf.booleanToHclTerraform(this._filterStream),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      filter_vlan: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._filterVlan),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_packet_size: {
        value: cdktf.numberToHclTerraform(this._maxPacketSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      memory_limit: {
        value: cdktf.numberToHclTerraform(this._memoryLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      memory_scroll: {
        value: cdktf.booleanToHclTerraform(this._memoryScroll),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      only_headers: {
        value: cdktf.booleanToHclTerraform(this._onlyHeaders),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      streaming_enabled: {
        value: cdktf.booleanToHclTerraform(this._streamingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      streaming_server: {
        value: cdktf.stringToHclTerraform(this._streamingServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
