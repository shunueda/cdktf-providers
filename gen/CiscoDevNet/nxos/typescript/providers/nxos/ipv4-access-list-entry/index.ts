// https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv4_access_list_entry
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ipv4AccessListEntryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Match TCP ACK flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv4_access_list_entry#ack Ipv4AccessListEntry#ack}
  */
  readonly ack?: boolean | cdktf.IResolvable;
  /**
  * Action.
  *   - Choices: `invalid`, `permit`, `deny`
  *   - Default value: `invalid`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv4_access_list_entry#action Ipv4AccessListEntry#action}
  */
  readonly action?: string;
  /**
  * Destination address group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv4_access_list_entry#destination_address_group Ipv4AccessListEntry#destination_address_group}
  */
  readonly destinationAddressGroup?: string;
  /**
  * First destination port number or name.
  *   - Choices: `echo`, `discard`, `daytime`, `chargen`, `ftp-data`, `ftp`, `telnet`, `smtp`, `time`, `nameserver`, `whois`, `tacacs`, `domain`, `bootps`, `bootpc`, `tftp`, `gopher`, `finger`, `www`, `hostname`, `pop2`, `pop3`, `sunrpc`, `ident`, `nntp`, `ntp`, `netbios-ns`, `netbios-dgm`, `netbios-ss`, `snmp`, `snmptrap`, `xdmcp`, `bgp`, `irc`, `dnsix`, `mobile-ip`, `pim-auto-rp`, `isakmp`, `biff`, `exec`, `who`, `login`, `syslog`, `cmd`, `lpd`, `talk`, `rip`, `uucp`, `klogin`, `kshell`, `drip`, `non500-isakmp`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv4_access_list_entry#destination_port_1 Ipv4AccessListEntry#destination_port_1}
  */
  readonly destinationPort1?: string;
  /**
  * Second destination port number or name.
  *   - Choices: `echo`, `discard`, `daytime`, `chargen`, `ftp-data`, `ftp`, `telnet`, `smtp`, `time`, `nameserver`, `whois`, `tacacs`, `domain`, `bootps`, `bootpc`, `tftp`, `gopher`, `finger`, `www`, `hostname`, `pop2`, `pop3`, `sunrpc`, `ident`, `nntp`, `ntp`, `netbios-ns`, `netbios-dgm`, `netbios-ss`, `snmp`, `snmptrap`, `xdmcp`, `bgp`, `irc`, `dnsix`, `mobile-ip`, `pim-auto-rp`, `isakmp`, `biff`, `exec`, `who`, `login`, `syslog`, `cmd`, `lpd`, `talk`, `rip`, `uucp`, `klogin`, `kshell`, `drip`, `non500-isakmp`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv4_access_list_entry#destination_port_2 Ipv4AccessListEntry#destination_port_2}
  */
  readonly destinationPort2?: string;
  /**
  * Destination port group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv4_access_list_entry#destination_port_group Ipv4AccessListEntry#destination_port_group}
  */
  readonly destinationPortGroup?: string;
  /**
  * Destination port mask number or name.
  *   - Choices: `echo`, `discard`, `daytime`, `chargen`, `ftp-data`, `ftp`, `telnet`, `smtp`, `time`, `nameserver`, `whois`, `tacacs`, `domain`, `bootps`, `bootpc`, `tftp`, `gopher`, `finger`, `www`, `hostname`, `pop2`, `pop3`, `sunrpc`, `ident`, `nntp`, `ntp`, `netbios-ns`, `netbios-dgm`, `netbios-ss`, `snmp`, `snmptrap`, `xdmcp`, `bgp`, `irc`, `dnsix`, `mobile-ip`, `pim-auto-rp`, `isakmp`, `biff`, `exec`, `who`, `login`, `syslog`, `cmd`, `lpd`, `talk`, `rip`, `uucp`, `klogin`, `kshell`, `drip`, `non500-isakmp`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv4_access_list_entry#destination_port_mask Ipv4AccessListEntry#destination_port_mask}
  */
  readonly destinationPortMask?: string;
  /**
  * Destination port operator.
  *   - Choices: `none`, `lt`, `gt`, `eq`, `neq`, `range`
  *   - Default value: `none`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv4_access_list_entry#destination_port_operator Ipv4AccessListEntry#destination_port_operator}
  */
  readonly destinationPortOperator?: string;
  /**
  * Destination prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv4_access_list_entry#destination_prefix Ipv4AccessListEntry#destination_prefix}
  */
  readonly destinationPrefix?: string;
  /**
  * Destination prefix length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv4_access_list_entry#destination_prefix_length Ipv4AccessListEntry#destination_prefix_length}
  */
  readonly destinationPrefixLength?: string;
  /**
  * Destination prefix mask.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv4_access_list_entry#destination_prefix_mask Ipv4AccessListEntry#destination_prefix_mask}
  */
  readonly destinationPrefixMask?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv4_access_list_entry#device Ipv4AccessListEntry#device}
  */
  readonly device?: string;
  /**
  * Match DSCP.
  *   - Range: `0`-`63`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv4_access_list_entry#dscp Ipv4AccessListEntry#dscp}
  */
  readonly dscp?: number;
  /**
  * Match TCP EST flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv4_access_list_entry#est Ipv4AccessListEntry#est}
  */
  readonly est?: boolean | cdktf.IResolvable;
  /**
  * Match TCP FIN flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv4_access_list_entry#fin Ipv4AccessListEntry#fin}
  */
  readonly fin?: boolean | cdktf.IResolvable;
  /**
  * Match non-initial fragment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv4_access_list_entry#fragment Ipv4AccessListEntry#fragment}
  */
  readonly fragment?: boolean | cdktf.IResolvable;
  /**
  * HTTP option method.
  *   - Choices: `invalid`, `get`, `put`, `head`, `post`, `delete`, `trace`, `connect`
  *   - Default value: `invalid`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv4_access_list_entry#http_option_type Ipv4AccessListEntry#http_option_type}
  */
  readonly httpOptionType?: string;
  /**
  * ICMP code.
  *   - Range: `0`-`256`
  *   - Default value: `256`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv4_access_list_entry#icmp_code Ipv4AccessListEntry#icmp_code}
  */
  readonly icmpCode?: number;
  /**
  * ICMP type.
  *   - Range: `0`-`256`
  *   - Default value: `256`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv4_access_list_entry#icmp_type Ipv4AccessListEntry#icmp_type}
  */
  readonly icmpType?: number;
  /**
  * Log matches against ACL entry.
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv4_access_list_entry#logging Ipv4AccessListEntry#logging}
  */
  readonly logging?: boolean | cdktf.IResolvable;
  /**
  * Access list name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv4_access_list_entry#name Ipv4AccessListEntry#name}
  */
  readonly name: string;
  /**
  * First packet length. Either `invalid` or a number between 19 and 9210.
  *   - Default value: `invalid`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv4_access_list_entry#packet_length_1 Ipv4AccessListEntry#packet_length_1}
  */
  readonly packetLength1?: string;
  /**
  * Second packet length. Either `invalid` or a number between 19 and 9210.
  *   - Default value: `invalid`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv4_access_list_entry#packet_length_2 Ipv4AccessListEntry#packet_length_2}
  */
  readonly packetLength2?: string;
  /**
  * Packet length operator.
  *   - Choices: `none`, `lt`, `gt`, `eq`, `neq`, `range`
  *   - Default value: `none`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv4_access_list_entry#packet_length_operator Ipv4AccessListEntry#packet_length_operator}
  */
  readonly packetLengthOperator?: string;
  /**
  * Precedence. Either `unspecified` or a number between 0 and 7.
  *   - Default value: `unspecified`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv4_access_list_entry#precedence Ipv4AccessListEntry#precedence}
  */
  readonly precedence?: string;
  /**
  * Protocol name or number.
  *   - Choices: `ip`, `icmp`, `igmp`, `tcp`, `udp`, `gre`, `esp`, `ahp`, `eigrp`, `ospf`, `nos`, `pim`, `pcp`, `udf`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv4_access_list_entry#protocol Ipv4AccessListEntry#protocol}
  */
  readonly protocol?: string;
  /**
  * Protocol mask name or number.
  *   - Choices: `ip`, `icmp`, `igmp`, `tcp`, `udp`, `gre`, `esp`, `ahp`, `eigrp`, `ospf`, `nos`, `pim`, `pcp`, `udf`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv4_access_list_entry#protocol_mask Ipv4AccessListEntry#protocol_mask}
  */
  readonly protocolMask?: string;
  /**
  * Match TCP PSH flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv4_access_list_entry#psh Ipv4AccessListEntry#psh}
  */
  readonly psh?: boolean | cdktf.IResolvable;
  /**
  * Redirect action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv4_access_list_entry#redirect Ipv4AccessListEntry#redirect}
  */
  readonly redirect?: string;
  /**
  * ACL comment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv4_access_list_entry#remark Ipv4AccessListEntry#remark}
  */
  readonly remark?: string;
  /**
  * Match TCP REV flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv4_access_list_entry#rev Ipv4AccessListEntry#rev}
  */
  readonly rev?: boolean | cdktf.IResolvable;
  /**
  * Match TCP RST flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv4_access_list_entry#rst Ipv4AccessListEntry#rst}
  */
  readonly rst?: boolean | cdktf.IResolvable;
  /**
  * Sequence number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv4_access_list_entry#sequence_number Ipv4AccessListEntry#sequence_number}
  */
  readonly sequenceNumber: number;
  /**
  * Source address group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv4_access_list_entry#source_address_group Ipv4AccessListEntry#source_address_group}
  */
  readonly sourceAddressGroup?: string;
  /**
  * First source port name or number.
  *   - Choices: `echo`, `discard`, `daytime`, `chargen`, `ftp-data`, `ftp`, `telnet`, `smtp`, `time`, `nameserver`, `whois`, `tacacs`, `domain`, `bootps`, `bootpc`, `tftp`, `gopher`, `finger`, `www`, `hostname`, `pop2`, `pop3`, `sunrpc`, `ident`, `nntp`, `ntp`, `netbios-ns`, `netbios-dgm`, `netbios-ss`, `snmp`, `snmptrap`, `xdmcp`, `bgp`, `irc`, `dnsix`, `mobile-ip`, `pim-auto-rp`, `isakmp`, `biff`, `exec`, `who`, `login`, `syslog`, `cmd`, `lpd`, `talk`, `rip`, `uucp`, `klogin`, `kshell`, `drip`, `non500-isakmp`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv4_access_list_entry#source_port_1 Ipv4AccessListEntry#source_port_1}
  */
  readonly sourcePort1?: string;
  /**
  * Second source port name or number.
  *   - Choices: `echo`, `discard`, `daytime`, `chargen`, `ftp-data`, `ftp`, `telnet`, `smtp`, `time`, `nameserver`, `whois`, `tacacs`, `domain`, `bootps`, `bootpc`, `tftp`, `gopher`, `finger`, `www`, `hostname`, `pop2`, `pop3`, `sunrpc`, `ident`, `nntp`, `ntp`, `netbios-ns`, `netbios-dgm`, `netbios-ss`, `snmp`, `snmptrap`, `xdmcp`, `bgp`, `irc`, `dnsix`, `mobile-ip`, `pim-auto-rp`, `isakmp`, `biff`, `exec`, `who`, `login`, `syslog`, `cmd`, `lpd`, `talk`, `rip`, `uucp`, `klogin`, `kshell`, `drip`, `non500-isakmp`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv4_access_list_entry#source_port_2 Ipv4AccessListEntry#source_port_2}
  */
  readonly sourcePort2?: string;
  /**
  * Source port group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv4_access_list_entry#source_port_group Ipv4AccessListEntry#source_port_group}
  */
  readonly sourcePortGroup?: string;
  /**
  * Source port mask name or number.
  *   - Choices: `echo`, `discard`, `daytime`, `chargen`, `ftp-data`, `ftp`, `telnet`, `smtp`, `time`, `nameserver`, `whois`, `tacacs`, `domain`, `bootps`, `bootpc`, `tftp`, `gopher`, `finger`, `www`, `hostname`, `pop2`, `pop3`, `sunrpc`, `ident`, `nntp`, `ntp`, `netbios-ns`, `netbios-dgm`, `netbios-ss`, `snmp`, `snmptrap`, `xdmcp`, `bgp`, `irc`, `dnsix`, `mobile-ip`, `pim-auto-rp`, `isakmp`, `biff`, `exec`, `who`, `login`, `syslog`, `cmd`, `lpd`, `talk`, `rip`, `uucp`, `klogin`, `kshell`, `drip`, `non500-isakmp`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv4_access_list_entry#source_port_mask Ipv4AccessListEntry#source_port_mask}
  */
  readonly sourcePortMask?: string;
  /**
  * Source port operator.
  *   - Choices: `none`, `lt`, `gt`, `eq`, `neq`, `range`
  *   - Default value: `none`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv4_access_list_entry#source_port_operator Ipv4AccessListEntry#source_port_operator}
  */
  readonly sourcePortOperator?: string;
  /**
  * Source prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv4_access_list_entry#source_prefix Ipv4AccessListEntry#source_prefix}
  */
  readonly sourcePrefix?: string;
  /**
  * Source prefix length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv4_access_list_entry#source_prefix_length Ipv4AccessListEntry#source_prefix_length}
  */
  readonly sourcePrefixLength?: string;
  /**
  * Source prefix mask.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv4_access_list_entry#source_prefix_mask Ipv4AccessListEntry#source_prefix_mask}
  */
  readonly sourcePrefixMask?: string;
  /**
  * Match TCP SYN flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv4_access_list_entry#syn Ipv4AccessListEntry#syn}
  */
  readonly syn?: boolean | cdktf.IResolvable;
  /**
  * Time range name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv4_access_list_entry#time_range Ipv4AccessListEntry#time_range}
  */
  readonly timeRange?: string;
  /**
  * TTL.
  *   - Range: `0`-`255`
  *   - Default value: `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv4_access_list_entry#ttl Ipv4AccessListEntry#ttl}
  */
  readonly ttl?: number;
  /**
  * Match TCP URG flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv4_access_list_entry#urg Ipv4AccessListEntry#urg}
  */
  readonly urg?: boolean | cdktf.IResolvable;
  /**
  * VLAN ID.
  *   - Range: `0`-`4095`
  *   - Default value: `4095`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv4_access_list_entry#vlan Ipv4AccessListEntry#vlan}
  */
  readonly vlan?: number;
  /**
  * NVE VNI ID. Either `invalid` or a number between 0 and 16777216.
  *   - Default value: `invalid`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv4_access_list_entry#vni Ipv4AccessListEntry#vni}
  */
  readonly vni?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv4_access_list_entry nxos_ipv4_access_list_entry}
*/
export class Ipv4AccessListEntry extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nxos_ipv4_access_list_entry";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Ipv4AccessListEntry resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ipv4AccessListEntry to import
  * @param importFromId The id of the existing Ipv4AccessListEntry that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv4_access_list_entry#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ipv4AccessListEntry to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nxos_ipv4_access_list_entry", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv4_access_list_entry nxos_ipv4_access_list_entry} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ipv4AccessListEntryConfig
  */
  public constructor(scope: Construct, id: string, config: Ipv4AccessListEntryConfig) {
    super(scope, id, {
      terraformResourceType: 'nxos_ipv4_access_list_entry',
      terraformGeneratorMetadata: {
        providerName: 'nxos',
        providerVersion: '0.5.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._ack = config.ack;
    this._action = config.action;
    this._destinationAddressGroup = config.destinationAddressGroup;
    this._destinationPort1 = config.destinationPort1;
    this._destinationPort2 = config.destinationPort2;
    this._destinationPortGroup = config.destinationPortGroup;
    this._destinationPortMask = config.destinationPortMask;
    this._destinationPortOperator = config.destinationPortOperator;
    this._destinationPrefix = config.destinationPrefix;
    this._destinationPrefixLength = config.destinationPrefixLength;
    this._destinationPrefixMask = config.destinationPrefixMask;
    this._device = config.device;
    this._dscp = config.dscp;
    this._est = config.est;
    this._fin = config.fin;
    this._fragment = config.fragment;
    this._httpOptionType = config.httpOptionType;
    this._icmpCode = config.icmpCode;
    this._icmpType = config.icmpType;
    this._logging = config.logging;
    this._name = config.name;
    this._packetLength1 = config.packetLength1;
    this._packetLength2 = config.packetLength2;
    this._packetLengthOperator = config.packetLengthOperator;
    this._precedence = config.precedence;
    this._protocol = config.protocol;
    this._protocolMask = config.protocolMask;
    this._psh = config.psh;
    this._redirect = config.redirect;
    this._remark = config.remark;
    this._rev = config.rev;
    this._rst = config.rst;
    this._sequenceNumber = config.sequenceNumber;
    this._sourceAddressGroup = config.sourceAddressGroup;
    this._sourcePort1 = config.sourcePort1;
    this._sourcePort2 = config.sourcePort2;
    this._sourcePortGroup = config.sourcePortGroup;
    this._sourcePortMask = config.sourcePortMask;
    this._sourcePortOperator = config.sourcePortOperator;
    this._sourcePrefix = config.sourcePrefix;
    this._sourcePrefixLength = config.sourcePrefixLength;
    this._sourcePrefixMask = config.sourcePrefixMask;
    this._syn = config.syn;
    this._timeRange = config.timeRange;
    this._ttl = config.ttl;
    this._urg = config.urg;
    this._vlan = config.vlan;
    this._vni = config.vni;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ack - computed: false, optional: true, required: false
  private _ack?: boolean | cdktf.IResolvable; 
  public get ack() {
    return this.getBooleanAttribute('ack');
  }
  public set ack(value: boolean | cdktf.IResolvable) {
    this._ack = value;
  }
  public resetAck() {
    this._ack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackInput() {
    return this._ack;
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // destination_address_group - computed: false, optional: true, required: false
  private _destinationAddressGroup?: string; 
  public get destinationAddressGroup() {
    return this.getStringAttribute('destination_address_group');
  }
  public set destinationAddressGroup(value: string) {
    this._destinationAddressGroup = value;
  }
  public resetDestinationAddressGroup() {
    this._destinationAddressGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationAddressGroupInput() {
    return this._destinationAddressGroup;
  }

  // destination_port_1 - computed: false, optional: true, required: false
  private _destinationPort1?: string; 
  public get destinationPort1() {
    return this.getStringAttribute('destination_port_1');
  }
  public set destinationPort1(value: string) {
    this._destinationPort1 = value;
  }
  public resetDestinationPort1() {
    this._destinationPort1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPort1Input() {
    return this._destinationPort1;
  }

  // destination_port_2 - computed: false, optional: true, required: false
  private _destinationPort2?: string; 
  public get destinationPort2() {
    return this.getStringAttribute('destination_port_2');
  }
  public set destinationPort2(value: string) {
    this._destinationPort2 = value;
  }
  public resetDestinationPort2() {
    this._destinationPort2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPort2Input() {
    return this._destinationPort2;
  }

  // destination_port_group - computed: false, optional: true, required: false
  private _destinationPortGroup?: string; 
  public get destinationPortGroup() {
    return this.getStringAttribute('destination_port_group');
  }
  public set destinationPortGroup(value: string) {
    this._destinationPortGroup = value;
  }
  public resetDestinationPortGroup() {
    this._destinationPortGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortGroupInput() {
    return this._destinationPortGroup;
  }

  // destination_port_mask - computed: false, optional: true, required: false
  private _destinationPortMask?: string; 
  public get destinationPortMask() {
    return this.getStringAttribute('destination_port_mask');
  }
  public set destinationPortMask(value: string) {
    this._destinationPortMask = value;
  }
  public resetDestinationPortMask() {
    this._destinationPortMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortMaskInput() {
    return this._destinationPortMask;
  }

  // destination_port_operator - computed: true, optional: true, required: false
  private _destinationPortOperator?: string; 
  public get destinationPortOperator() {
    return this.getStringAttribute('destination_port_operator');
  }
  public set destinationPortOperator(value: string) {
    this._destinationPortOperator = value;
  }
  public resetDestinationPortOperator() {
    this._destinationPortOperator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortOperatorInput() {
    return this._destinationPortOperator;
  }

  // destination_prefix - computed: false, optional: true, required: false
  private _destinationPrefix?: string; 
  public get destinationPrefix() {
    return this.getStringAttribute('destination_prefix');
  }
  public set destinationPrefix(value: string) {
    this._destinationPrefix = value;
  }
  public resetDestinationPrefix() {
    this._destinationPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPrefixInput() {
    return this._destinationPrefix;
  }

  // destination_prefix_length - computed: false, optional: true, required: false
  private _destinationPrefixLength?: string; 
  public get destinationPrefixLength() {
    return this.getStringAttribute('destination_prefix_length');
  }
  public set destinationPrefixLength(value: string) {
    this._destinationPrefixLength = value;
  }
  public resetDestinationPrefixLength() {
    this._destinationPrefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPrefixLengthInput() {
    return this._destinationPrefixLength;
  }

  // destination_prefix_mask - computed: false, optional: true, required: false
  private _destinationPrefixMask?: string; 
  public get destinationPrefixMask() {
    return this.getStringAttribute('destination_prefix_mask');
  }
  public set destinationPrefixMask(value: string) {
    this._destinationPrefixMask = value;
  }
  public resetDestinationPrefixMask() {
    this._destinationPrefixMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPrefixMaskInput() {
    return this._destinationPrefixMask;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // dscp - computed: false, optional: true, required: false
  private _dscp?: number; 
  public get dscp() {
    return this.getNumberAttribute('dscp');
  }
  public set dscp(value: number) {
    this._dscp = value;
  }
  public resetDscp() {
    this._dscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpInput() {
    return this._dscp;
  }

  // est - computed: false, optional: true, required: false
  private _est?: boolean | cdktf.IResolvable; 
  public get est() {
    return this.getBooleanAttribute('est');
  }
  public set est(value: boolean | cdktf.IResolvable) {
    this._est = value;
  }
  public resetEst() {
    this._est = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get estInput() {
    return this._est;
  }

  // fin - computed: false, optional: true, required: false
  private _fin?: boolean | cdktf.IResolvable; 
  public get fin() {
    return this.getBooleanAttribute('fin');
  }
  public set fin(value: boolean | cdktf.IResolvable) {
    this._fin = value;
  }
  public resetFin() {
    this._fin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finInput() {
    return this._fin;
  }

  // fragment - computed: false, optional: true, required: false
  private _fragment?: boolean | cdktf.IResolvable; 
  public get fragment() {
    return this.getBooleanAttribute('fragment');
  }
  public set fragment(value: boolean | cdktf.IResolvable) {
    this._fragment = value;
  }
  public resetFragment() {
    this._fragment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragmentInput() {
    return this._fragment;
  }

  // http_option_type - computed: true, optional: true, required: false
  private _httpOptionType?: string; 
  public get httpOptionType() {
    return this.getStringAttribute('http_option_type');
  }
  public set httpOptionType(value: string) {
    this._httpOptionType = value;
  }
  public resetHttpOptionType() {
    this._httpOptionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpOptionTypeInput() {
    return this._httpOptionType;
  }

  // icmp_code - computed: true, optional: true, required: false
  private _icmpCode?: number; 
  public get icmpCode() {
    return this.getNumberAttribute('icmp_code');
  }
  public set icmpCode(value: number) {
    this._icmpCode = value;
  }
  public resetIcmpCode() {
    this._icmpCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpCodeInput() {
    return this._icmpCode;
  }

  // icmp_type - computed: true, optional: true, required: false
  private _icmpType?: number; 
  public get icmpType() {
    return this.getNumberAttribute('icmp_type');
  }
  public set icmpType(value: number) {
    this._icmpType = value;
  }
  public resetIcmpType() {
    this._icmpType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpTypeInput() {
    return this._icmpType;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // logging - computed: true, optional: true, required: false
  private _logging?: boolean | cdktf.IResolvable; 
  public get logging() {
    return this.getBooleanAttribute('logging');
  }
  public set logging(value: boolean | cdktf.IResolvable) {
    this._logging = value;
  }
  public resetLogging() {
    this._logging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging;
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

  // packet_length_1 - computed: true, optional: true, required: false
  private _packetLength1?: string; 
  public get packetLength1() {
    return this.getStringAttribute('packet_length_1');
  }
  public set packetLength1(value: string) {
    this._packetLength1 = value;
  }
  public resetPacketLength1() {
    this._packetLength1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetLength1Input() {
    return this._packetLength1;
  }

  // packet_length_2 - computed: true, optional: true, required: false
  private _packetLength2?: string; 
  public get packetLength2() {
    return this.getStringAttribute('packet_length_2');
  }
  public set packetLength2(value: string) {
    this._packetLength2 = value;
  }
  public resetPacketLength2() {
    this._packetLength2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetLength2Input() {
    return this._packetLength2;
  }

  // packet_length_operator - computed: true, optional: true, required: false
  private _packetLengthOperator?: string; 
  public get packetLengthOperator() {
    return this.getStringAttribute('packet_length_operator');
  }
  public set packetLengthOperator(value: string) {
    this._packetLengthOperator = value;
  }
  public resetPacketLengthOperator() {
    this._packetLengthOperator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetLengthOperatorInput() {
    return this._packetLengthOperator;
  }

  // precedence - computed: true, optional: true, required: false
  private _precedence?: string; 
  public get precedence() {
    return this.getStringAttribute('precedence');
  }
  public set precedence(value: string) {
    this._precedence = value;
  }
  public resetPrecedence() {
    this._precedence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get precedenceInput() {
    return this._precedence;
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

  // protocol_mask - computed: false, optional: true, required: false
  private _protocolMask?: string; 
  public get protocolMask() {
    return this.getStringAttribute('protocol_mask');
  }
  public set protocolMask(value: string) {
    this._protocolMask = value;
  }
  public resetProtocolMask() {
    this._protocolMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolMaskInput() {
    return this._protocolMask;
  }

  // psh - computed: false, optional: true, required: false
  private _psh?: boolean | cdktf.IResolvable; 
  public get psh() {
    return this.getBooleanAttribute('psh');
  }
  public set psh(value: boolean | cdktf.IResolvable) {
    this._psh = value;
  }
  public resetPsh() {
    this._psh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pshInput() {
    return this._psh;
  }

  // redirect - computed: false, optional: true, required: false
  private _redirect?: string; 
  public get redirect() {
    return this.getStringAttribute('redirect');
  }
  public set redirect(value: string) {
    this._redirect = value;
  }
  public resetRedirect() {
    this._redirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectInput() {
    return this._redirect;
  }

  // remark - computed: false, optional: true, required: false
  private _remark?: string; 
  public get remark() {
    return this.getStringAttribute('remark');
  }
  public set remark(value: string) {
    this._remark = value;
  }
  public resetRemark() {
    this._remark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remarkInput() {
    return this._remark;
  }

  // rev - computed: false, optional: true, required: false
  private _rev?: boolean | cdktf.IResolvable; 
  public get rev() {
    return this.getBooleanAttribute('rev');
  }
  public set rev(value: boolean | cdktf.IResolvable) {
    this._rev = value;
  }
  public resetRev() {
    this._rev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revInput() {
    return this._rev;
  }

  // rst - computed: false, optional: true, required: false
  private _rst?: boolean | cdktf.IResolvable; 
  public get rst() {
    return this.getBooleanAttribute('rst');
  }
  public set rst(value: boolean | cdktf.IResolvable) {
    this._rst = value;
  }
  public resetRst() {
    this._rst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rstInput() {
    return this._rst;
  }

  // sequence_number - computed: false, optional: false, required: true
  private _sequenceNumber?: number; 
  public get sequenceNumber() {
    return this.getNumberAttribute('sequence_number');
  }
  public set sequenceNumber(value: number) {
    this._sequenceNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceNumberInput() {
    return this._sequenceNumber;
  }

  // source_address_group - computed: false, optional: true, required: false
  private _sourceAddressGroup?: string; 
  public get sourceAddressGroup() {
    return this.getStringAttribute('source_address_group');
  }
  public set sourceAddressGroup(value: string) {
    this._sourceAddressGroup = value;
  }
  public resetSourceAddressGroup() {
    this._sourceAddressGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressGroupInput() {
    return this._sourceAddressGroup;
  }

  // source_port_1 - computed: false, optional: true, required: false
  private _sourcePort1?: string; 
  public get sourcePort1() {
    return this.getStringAttribute('source_port_1');
  }
  public set sourcePort1(value: string) {
    this._sourcePort1 = value;
  }
  public resetSourcePort1() {
    this._sourcePort1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePort1Input() {
    return this._sourcePort1;
  }

  // source_port_2 - computed: false, optional: true, required: false
  private _sourcePort2?: string; 
  public get sourcePort2() {
    return this.getStringAttribute('source_port_2');
  }
  public set sourcePort2(value: string) {
    this._sourcePort2 = value;
  }
  public resetSourcePort2() {
    this._sourcePort2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePort2Input() {
    return this._sourcePort2;
  }

  // source_port_group - computed: false, optional: true, required: false
  private _sourcePortGroup?: string; 
  public get sourcePortGroup() {
    return this.getStringAttribute('source_port_group');
  }
  public set sourcePortGroup(value: string) {
    this._sourcePortGroup = value;
  }
  public resetSourcePortGroup() {
    this._sourcePortGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortGroupInput() {
    return this._sourcePortGroup;
  }

  // source_port_mask - computed: false, optional: true, required: false
  private _sourcePortMask?: string; 
  public get sourcePortMask() {
    return this.getStringAttribute('source_port_mask');
  }
  public set sourcePortMask(value: string) {
    this._sourcePortMask = value;
  }
  public resetSourcePortMask() {
    this._sourcePortMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortMaskInput() {
    return this._sourcePortMask;
  }

  // source_port_operator - computed: true, optional: true, required: false
  private _sourcePortOperator?: string; 
  public get sourcePortOperator() {
    return this.getStringAttribute('source_port_operator');
  }
  public set sourcePortOperator(value: string) {
    this._sourcePortOperator = value;
  }
  public resetSourcePortOperator() {
    this._sourcePortOperator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortOperatorInput() {
    return this._sourcePortOperator;
  }

  // source_prefix - computed: false, optional: true, required: false
  private _sourcePrefix?: string; 
  public get sourcePrefix() {
    return this.getStringAttribute('source_prefix');
  }
  public set sourcePrefix(value: string) {
    this._sourcePrefix = value;
  }
  public resetSourcePrefix() {
    this._sourcePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePrefixInput() {
    return this._sourcePrefix;
  }

  // source_prefix_length - computed: false, optional: true, required: false
  private _sourcePrefixLength?: string; 
  public get sourcePrefixLength() {
    return this.getStringAttribute('source_prefix_length');
  }
  public set sourcePrefixLength(value: string) {
    this._sourcePrefixLength = value;
  }
  public resetSourcePrefixLength() {
    this._sourcePrefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePrefixLengthInput() {
    return this._sourcePrefixLength;
  }

  // source_prefix_mask - computed: false, optional: true, required: false
  private _sourcePrefixMask?: string; 
  public get sourcePrefixMask() {
    return this.getStringAttribute('source_prefix_mask');
  }
  public set sourcePrefixMask(value: string) {
    this._sourcePrefixMask = value;
  }
  public resetSourcePrefixMask() {
    this._sourcePrefixMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePrefixMaskInput() {
    return this._sourcePrefixMask;
  }

  // syn - computed: false, optional: true, required: false
  private _syn?: boolean | cdktf.IResolvable; 
  public get syn() {
    return this.getBooleanAttribute('syn');
  }
  public set syn(value: boolean | cdktf.IResolvable) {
    this._syn = value;
  }
  public resetSyn() {
    this._syn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synInput() {
    return this._syn;
  }

  // time_range - computed: false, optional: true, required: false
  private _timeRange?: string; 
  public get timeRange() {
    return this.getStringAttribute('time_range');
  }
  public set timeRange(value: string) {
    this._timeRange = value;
  }
  public resetTimeRange() {
    this._timeRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeRangeInput() {
    return this._timeRange;
  }

  // ttl - computed: true, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // urg - computed: false, optional: true, required: false
  private _urg?: boolean | cdktf.IResolvable; 
  public get urg() {
    return this.getBooleanAttribute('urg');
  }
  public set urg(value: boolean | cdktf.IResolvable) {
    this._urg = value;
  }
  public resetUrg() {
    this._urg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urgInput() {
    return this._urg;
  }

  // vlan - computed: true, optional: true, required: false
  private _vlan?: number; 
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
  public set vlan(value: number) {
    this._vlan = value;
  }
  public resetVlan() {
    this._vlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }

  // vni - computed: true, optional: true, required: false
  private _vni?: string; 
  public get vni() {
    return this.getStringAttribute('vni');
  }
  public set vni(value: string) {
    this._vni = value;
  }
  public resetVni() {
    this._vni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vniInput() {
    return this._vni;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ack: cdktf.booleanToTerraform(this._ack),
      action: cdktf.stringToTerraform(this._action),
      destination_address_group: cdktf.stringToTerraform(this._destinationAddressGroup),
      destination_port_1: cdktf.stringToTerraform(this._destinationPort1),
      destination_port_2: cdktf.stringToTerraform(this._destinationPort2),
      destination_port_group: cdktf.stringToTerraform(this._destinationPortGroup),
      destination_port_mask: cdktf.stringToTerraform(this._destinationPortMask),
      destination_port_operator: cdktf.stringToTerraform(this._destinationPortOperator),
      destination_prefix: cdktf.stringToTerraform(this._destinationPrefix),
      destination_prefix_length: cdktf.stringToTerraform(this._destinationPrefixLength),
      destination_prefix_mask: cdktf.stringToTerraform(this._destinationPrefixMask),
      device: cdktf.stringToTerraform(this._device),
      dscp: cdktf.numberToTerraform(this._dscp),
      est: cdktf.booleanToTerraform(this._est),
      fin: cdktf.booleanToTerraform(this._fin),
      fragment: cdktf.booleanToTerraform(this._fragment),
      http_option_type: cdktf.stringToTerraform(this._httpOptionType),
      icmp_code: cdktf.numberToTerraform(this._icmpCode),
      icmp_type: cdktf.numberToTerraform(this._icmpType),
      logging: cdktf.booleanToTerraform(this._logging),
      name: cdktf.stringToTerraform(this._name),
      packet_length_1: cdktf.stringToTerraform(this._packetLength1),
      packet_length_2: cdktf.stringToTerraform(this._packetLength2),
      packet_length_operator: cdktf.stringToTerraform(this._packetLengthOperator),
      precedence: cdktf.stringToTerraform(this._precedence),
      protocol: cdktf.stringToTerraform(this._protocol),
      protocol_mask: cdktf.stringToTerraform(this._protocolMask),
      psh: cdktf.booleanToTerraform(this._psh),
      redirect: cdktf.stringToTerraform(this._redirect),
      remark: cdktf.stringToTerraform(this._remark),
      rev: cdktf.booleanToTerraform(this._rev),
      rst: cdktf.booleanToTerraform(this._rst),
      sequence_number: cdktf.numberToTerraform(this._sequenceNumber),
      source_address_group: cdktf.stringToTerraform(this._sourceAddressGroup),
      source_port_1: cdktf.stringToTerraform(this._sourcePort1),
      source_port_2: cdktf.stringToTerraform(this._sourcePort2),
      source_port_group: cdktf.stringToTerraform(this._sourcePortGroup),
      source_port_mask: cdktf.stringToTerraform(this._sourcePortMask),
      source_port_operator: cdktf.stringToTerraform(this._sourcePortOperator),
      source_prefix: cdktf.stringToTerraform(this._sourcePrefix),
      source_prefix_length: cdktf.stringToTerraform(this._sourcePrefixLength),
      source_prefix_mask: cdktf.stringToTerraform(this._sourcePrefixMask),
      syn: cdktf.booleanToTerraform(this._syn),
      time_range: cdktf.stringToTerraform(this._timeRange),
      ttl: cdktf.numberToTerraform(this._ttl),
      urg: cdktf.booleanToTerraform(this._urg),
      vlan: cdktf.numberToTerraform(this._vlan),
      vni: cdktf.stringToTerraform(this._vni),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ack: {
        value: cdktf.booleanToHclTerraform(this._ack),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_address_group: {
        value: cdktf.stringToHclTerraform(this._destinationAddressGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_port_1: {
        value: cdktf.stringToHclTerraform(this._destinationPort1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_port_2: {
        value: cdktf.stringToHclTerraform(this._destinationPort2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_port_group: {
        value: cdktf.stringToHclTerraform(this._destinationPortGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_port_mask: {
        value: cdktf.stringToHclTerraform(this._destinationPortMask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_port_operator: {
        value: cdktf.stringToHclTerraform(this._destinationPortOperator),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_prefix: {
        value: cdktf.stringToHclTerraform(this._destinationPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_prefix_length: {
        value: cdktf.stringToHclTerraform(this._destinationPrefixLength),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_prefix_mask: {
        value: cdktf.stringToHclTerraform(this._destinationPrefixMask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dscp: {
        value: cdktf.numberToHclTerraform(this._dscp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      est: {
        value: cdktf.booleanToHclTerraform(this._est),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fin: {
        value: cdktf.booleanToHclTerraform(this._fin),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fragment: {
        value: cdktf.booleanToHclTerraform(this._fragment),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      http_option_type: {
        value: cdktf.stringToHclTerraform(this._httpOptionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icmp_code: {
        value: cdktf.numberToHclTerraform(this._icmpCode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      icmp_type: {
        value: cdktf.numberToHclTerraform(this._icmpType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      logging: {
        value: cdktf.booleanToHclTerraform(this._logging),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      packet_length_1: {
        value: cdktf.stringToHclTerraform(this._packetLength1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      packet_length_2: {
        value: cdktf.stringToHclTerraform(this._packetLength2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      packet_length_operator: {
        value: cdktf.stringToHclTerraform(this._packetLengthOperator),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      precedence: {
        value: cdktf.stringToHclTerraform(this._precedence),
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
      protocol_mask: {
        value: cdktf.stringToHclTerraform(this._protocolMask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      psh: {
        value: cdktf.booleanToHclTerraform(this._psh),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      redirect: {
        value: cdktf.stringToHclTerraform(this._redirect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remark: {
        value: cdktf.stringToHclTerraform(this._remark),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rev: {
        value: cdktf.booleanToHclTerraform(this._rev),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rst: {
        value: cdktf.booleanToHclTerraform(this._rst),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sequence_number: {
        value: cdktf.numberToHclTerraform(this._sequenceNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      source_address_group: {
        value: cdktf.stringToHclTerraform(this._sourceAddressGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_port_1: {
        value: cdktf.stringToHclTerraform(this._sourcePort1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_port_2: {
        value: cdktf.stringToHclTerraform(this._sourcePort2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_port_group: {
        value: cdktf.stringToHclTerraform(this._sourcePortGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_port_mask: {
        value: cdktf.stringToHclTerraform(this._sourcePortMask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_port_operator: {
        value: cdktf.stringToHclTerraform(this._sourcePortOperator),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_prefix: {
        value: cdktf.stringToHclTerraform(this._sourcePrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_prefix_length: {
        value: cdktf.stringToHclTerraform(this._sourcePrefixLength),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_prefix_mask: {
        value: cdktf.stringToHclTerraform(this._sourcePrefixMask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      syn: {
        value: cdktf.booleanToHclTerraform(this._syn),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      time_range: {
        value: cdktf.stringToHclTerraform(this._timeRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ttl: {
        value: cdktf.numberToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      urg: {
        value: cdktf.booleanToHclTerraform(this._urg),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vlan: {
        value: cdktf.numberToHclTerraform(this._vlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vni: {
        value: cdktf.stringToHclTerraform(this._vni),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
