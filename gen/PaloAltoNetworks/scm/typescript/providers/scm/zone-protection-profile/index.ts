// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZoneProtectionProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Determine whether to drop or bypass packets that contain out-of-sync ACKs or out-of-window sequence numbers:
  * * `global` — Use system-wide setting that is assigned through TCP Settings or the CLI.
  * * `drop` — Drop packets that contain an asymmetric path.
  * * `bypass` — Bypass scanning on packets that contain an asymmetric path.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#asymmetric_path ZoneProtectionProfile#asymmetric_path}
  */
  readonly asymmetricPath?: string;
  /**
  * The description of the profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#description ZoneProtectionProfile#description}
  */
  readonly description?: string;
  /**
  * The device in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#device ZoneProtectionProfile#device}
  */
  readonly device?: string;
  /**
  * Discard ICMP packets that are embedded with an error message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#discard_icmp_embedded_error ZoneProtectionProfile#discard_icmp_embedded_error}
  */
  readonly discardIcmpEmbeddedError?: boolean | cdktf.IResolvable;
  /**
  * Flood
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#flood ZoneProtectionProfile#flood}
  */
  readonly flood?: ZoneProtectionProfileFlood;
  /**
  * The folder in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#folder ZoneProtectionProfile#folder}
  */
  readonly folder?: string;
  /**
  * Discard fragmented IP packets.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#fragmented_traffic_discard ZoneProtectionProfile#fragmented_traffic_discard}
  */
  readonly fragmentedTrafficDiscard?: boolean | cdktf.IResolvable;
  /**
  * Discard packets that consist of ICMP fragments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#icmp_frag_discard ZoneProtectionProfile#icmp_frag_discard}
  */
  readonly icmpFragDiscard?: boolean | cdktf.IResolvable;
  /**
  * Discard ICMP packets that are larger than 1024 bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#icmp_large_packet_discard ZoneProtectionProfile#icmp_large_packet_discard}
  */
  readonly icmpLargePacketDiscard?: boolean | cdktf.IResolvable;
  /**
  * Discard packets if the ICMP ping packet has an identifier value of 0.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#icmp_ping_zero_id_discard ZoneProtectionProfile#icmp_ping_zero_id_discard}
  */
  readonly icmpPingZeroIdDiscard?: boolean | cdktf.IResolvable;
  /**
  * Ipv6
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#ipv6 ZoneProtectionProfile#ipv6}
  */
  readonly ipv6?: ZoneProtectionProfileIpv6;
  /**
  * L2 sec group tag protection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#l2_sec_group_tag_protection ZoneProtectionProfile#l2_sec_group_tag_protection}
  */
  readonly l2SecGroupTagProtection?: ZoneProtectionProfileL2SecGroupTagProtection;
  /**
  * Discard packets with the Loose Source Routing IP option set. Loose Source Routing is an option whereby a source of a datagram provides routing information and a gateway or host is allowed to choose any route of a number of intermediate gateways to get the datagram to the next address in the route.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#loose_source_routing_discard ZoneProtectionProfile#loose_source_routing_discard}
  */
  readonly looseSourceRoutingDiscard?: boolean | cdktf.IResolvable;
  /**
  * Discard packets if they have incorrect combinations of class, number, and length based on RFCs 791, 1108, 1393, and 2113.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#malformed_option_discard ZoneProtectionProfile#malformed_option_discard}
  */
  readonly malformedOptionDiscard?: boolean | cdktf.IResolvable;
  /**
  * Drop packets with mismatched overlapping TCP segments.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#mismatched_overlapping_tcp_segment_discard ZoneProtectionProfile#mismatched_overlapping_tcp_segment_discard}
  */
  readonly mismatchedOverlappingTcpSegmentDiscard?: boolean | cdktf.IResolvable;
  /**
  * MPTCP is an extension of TCP that allows a client to maintain a connection by simultaneously using multiple paths to connect to the destination host. By default, MPTCP support is disabled, based on the global MPTCP setting.  Review or adjust the MPTCP settings for the security zones associated with this profile:
  * * `no` — Enable MPTCP support (do not strip the MPTCP option).
  * * `yes` — Disable MPTCP support (strip the MPTCP option). With this configured, MPTCP connections are converted to standard TCP connections, as MPTCP is backwards compatible with TCP.
  * * `global` — Support MPTCP based on the global MPTCP setting. By default, the global MPTCP setting is set to yes so that MPTCP is disabled (the MPTCP option is stripped from the packet).
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#mptcp_option_strip ZoneProtectionProfile#mptcp_option_strip}
  */
  readonly mptcpOptionStrip?: string;
  /**
  * The profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#name ZoneProtectionProfile#name}
  */
  readonly name: string;
  /**
  * Non ip protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#non_ip_protocol ZoneProtectionProfile#non_ip_protocol}
  */
  readonly nonIpProtocol?: ZoneProtectionProfileNonIpProtocol;
  /**
  * Discard packets with the Record Route IP option set. When a datagram has this option, each router that routes the datagram adds its own IP address to the header, thus providing the path to the recipient.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#record_route_discard ZoneProtectionProfile#record_route_discard}
  */
  readonly recordRouteDiscard?: boolean | cdktf.IResolvable;
  /**
  * Determine whether to reject the packet if the first packet for the TCP session setup is not a SYN packet:
  * * `global` — Use system-wide setting that is assigned through the CLI.
  * * `yes` — Reject non-SYN TCP.
  * * `no` — Accept non-SYN TCP.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#reject_non_syn_tcp ZoneProtectionProfile#reject_non_syn_tcp}
  */
  readonly rejectNonSynTcp?: string;
  /**
  * Scan
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#scan ZoneProtectionProfile#scan}
  */
  readonly scan?: ZoneProtectionProfileScan[] | cdktf.IResolvable;
  /**
  * Scan white list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#scan_white_list ZoneProtectionProfile#scan_white_list}
  */
  readonly scanWhiteList?: ZoneProtectionProfileScanWhiteListStruct[] | cdktf.IResolvable;
  /**
  * Discard packets if the security option is defined.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#security_discard ZoneProtectionProfile#security_discard}
  */
  readonly securityDiscard?: boolean | cdktf.IResolvable;
  /**
  * The snippet in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#snippet ZoneProtectionProfile#snippet}
  */
  readonly snippet?: string;
  /**
  * Check that the source IP address of the ingress packet is routable and the routing interface is in the same zone as the ingress interface. If either condition is not true, discard the packet.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#spoofed_ip_discard ZoneProtectionProfile#spoofed_ip_discard}
  */
  readonly spoofedIpDiscard?: boolean | cdktf.IResolvable;
  /**
  * Discard packets if the Stream ID option is defined.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#stream_id_discard ZoneProtectionProfile#stream_id_discard}
  */
  readonly streamIdDiscard?: boolean | cdktf.IResolvable;
  /**
  * Check that both conditions are true:
  * * The source IP address is not the subnet broadcast IP address of the ingress interface.
  * * The source IP address is routable over the exact ingress interface.
  * If either condition is not true, discard the packet.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#strict_ip_check ZoneProtectionProfile#strict_ip_check}
  */
  readonly strictIpCheck?: boolean | cdktf.IResolvable;
  /**
  * Discard packets with the Strict Source Routing IP option set. Strict Source Routing is an option whereby a source of a datagram provides routing information through which a gateway or host must send the datagram.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#strict_source_routing_discard ZoneProtectionProfile#strict_source_routing_discard}
  */
  readonly strictSourceRoutingDiscard?: boolean | cdktf.IResolvable;
  /**
  * Stop sending ICMP fragmentation needed messages in response to packets that exceed the interface MTU and have the do not fragment (DF) bit set. This setting will interfere with the PMTUD process performed by hosts behind the firewall.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#suppress_icmp_needfrag ZoneProtectionProfile#suppress_icmp_needfrag}
  */
  readonly suppressIcmpNeedfrag?: boolean | cdktf.IResolvable;
  /**
  * Stop sending ICMP TTL expired messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#suppress_icmp_timeexceeded ZoneProtectionProfile#suppress_icmp_timeexceeded}
  */
  readonly suppressIcmpTimeexceeded?: boolean | cdktf.IResolvable;
  /**
  * Strip the TCP Fast Open option (and data payload, if any) from the TCP SYN or SYN-ACK packet during a TCP three-way handshake.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#tcp_fast_open_and_data_strip ZoneProtectionProfile#tcp_fast_open_and_data_strip}
  */
  readonly tcpFastOpenAndDataStrip?: boolean | cdktf.IResolvable;
  /**
  * Drop packets with split handshakes.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#tcp_handshake_discard ZoneProtectionProfile#tcp_handshake_discard}
  */
  readonly tcpHandshakeDiscard?: boolean | cdktf.IResolvable;
  /**
  * Prevent a TCP session from being established if the TCP SYN packet contains data during a three-way handshake.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#tcp_syn_with_data_discard ZoneProtectionProfile#tcp_syn_with_data_discard}
  */
  readonly tcpSynWithDataDiscard?: boolean | cdktf.IResolvable;
  /**
  * Prevent a TCP session from being established if the TCP SYN-ACK packet contains data during a three-way handshake.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#tcp_synack_with_data_discard ZoneProtectionProfile#tcp_synack_with_data_discard}
  */
  readonly tcpSynackWithDataDiscard?: boolean | cdktf.IResolvable;
  /**
  * Determine whether the packet has a TCP timestamp in the header and, if it does, strip the timestamp from the header.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#tcp_timestamp_strip ZoneProtectionProfile#tcp_timestamp_strip}
  */
  readonly tcpTimestampStrip?: boolean | cdktf.IResolvable;
  /**
  * Discard packets with the Timestamp IP option set.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#timestamp_discard ZoneProtectionProfile#timestamp_discard}
  */
  readonly timestampDiscard?: boolean | cdktf.IResolvable;
  /**
  * Discard packets if the class and number are unknown.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#unknown_option_discard ZoneProtectionProfile#unknown_option_discard}
  */
  readonly unknownOptionDiscard?: boolean | cdktf.IResolvable;
}
export interface ZoneProtectionProfileFloodIcmpRed {
  /**
  * The number of ICMP packets (not matching an existing session) that the zone receives per second before subsequent ICMP packets are dropped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#activate_rate ZoneProtectionProfile#activate_rate}
  */
  readonly activateRate: number;
  /**
  * The number of ICMP echo requests (pings not matching an existing session) that the zone receives per second that triggers an attack alarm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#alarm_rate ZoneProtectionProfile#alarm_rate}
  */
  readonly alarmRate: number;
  /**
  * The maximum number of ICMP packets (not matching an existing session) that the zone receives per second before packets exceeding the maximum are dropped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#maximal_rate ZoneProtectionProfile#maximal_rate}
  */
  readonly maximalRate: number;
}

export function zoneProtectionProfileFloodIcmpRedToTerraform(struct?: ZoneProtectionProfileFloodIcmpRed | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    activate_rate: cdktf.numberToTerraform(struct!.activateRate),
    alarm_rate: cdktf.numberToTerraform(struct!.alarmRate),
    maximal_rate: cdktf.numberToTerraform(struct!.maximalRate),
  }
}


export function zoneProtectionProfileFloodIcmpRedToHclTerraform(struct?: ZoneProtectionProfileFloodIcmpRed | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    activate_rate: {
      value: cdktf.numberToHclTerraform(struct!.activateRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    alarm_rate: {
      value: cdktf.numberToHclTerraform(struct!.alarmRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximal_rate: {
      value: cdktf.numberToHclTerraform(struct!.maximalRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZoneProtectionProfileFloodIcmpRedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZoneProtectionProfileFloodIcmpRed | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activateRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.activateRate = this._activateRate;
    }
    if (this._alarmRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarmRate = this._alarmRate;
    }
    if (this._maximalRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximalRate = this._maximalRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZoneProtectionProfileFloodIcmpRed | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activateRate = undefined;
      this._alarmRate = undefined;
      this._maximalRate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activateRate = value.activateRate;
      this._alarmRate = value.alarmRate;
      this._maximalRate = value.maximalRate;
    }
  }

  // activate_rate - computed: false, optional: false, required: true
  private _activateRate?: number; 
  public get activateRate() {
    return this.getNumberAttribute('activate_rate');
  }
  public set activateRate(value: number) {
    this._activateRate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get activateRateInput() {
    return this._activateRate;
  }

  // alarm_rate - computed: false, optional: false, required: true
  private _alarmRate?: number; 
  public get alarmRate() {
    return this.getNumberAttribute('alarm_rate');
  }
  public set alarmRate(value: number) {
    this._alarmRate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmRateInput() {
    return this._alarmRate;
  }

  // maximal_rate - computed: false, optional: false, required: true
  private _maximalRate?: number; 
  public get maximalRate() {
    return this.getNumberAttribute('maximal_rate');
  }
  public set maximalRate(value: number) {
    this._maximalRate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maximalRateInput() {
    return this._maximalRate;
  }
}
export interface ZoneProtectionProfileFloodIcmp {
  /**
  * Enable protection against ICMP floods?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#enable ZoneProtectionProfile#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Red
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#red ZoneProtectionProfile#red}
  */
  readonly red?: ZoneProtectionProfileFloodIcmpRed;
}

export function zoneProtectionProfileFloodIcmpToTerraform(struct?: ZoneProtectionProfileFloodIcmp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    red: zoneProtectionProfileFloodIcmpRedToTerraform(struct!.red),
  }
}


export function zoneProtectionProfileFloodIcmpToHclTerraform(struct?: ZoneProtectionProfileFloodIcmp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    red: {
      value: zoneProtectionProfileFloodIcmpRedToHclTerraform(struct!.red),
      isBlock: true,
      type: "struct",
      storageClassType: "ZoneProtectionProfileFloodIcmpRed",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZoneProtectionProfileFloodIcmpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZoneProtectionProfileFloodIcmp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._red?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.red = this._red?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZoneProtectionProfileFloodIcmp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._red.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._red.internalValue = value.red;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // red - computed: false, optional: true, required: false
  private _red = new ZoneProtectionProfileFloodIcmpRedOutputReference(this, "red");
  public get red() {
    return this._red;
  }
  public putRed(value: ZoneProtectionProfileFloodIcmpRed) {
    this._red.internalValue = value;
  }
  public resetRed() {
    this._red.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redInput() {
    return this._red.internalValue;
  }
}
export interface ZoneProtectionProfileFloodIcmpv6Red {
  /**
  * The number of ICMPv6 packets (not matching an existing session) that the zone receives per second before subsequent ICMPv6 packets are dropped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#activate_rate ZoneProtectionProfile#activate_rate}
  */
  readonly activateRate: number;
  /**
  * The number of ICMPv6 echo requests (pings not matching an existing session) that the zone receives per second that triggers an attack alarm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#alarm_rate ZoneProtectionProfile#alarm_rate}
  */
  readonly alarmRate: number;
  /**
  * The maximum number of ICMPv6 packets (not matching an existing session) that the zone receives per second before packets exceeding the maximum are dropped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#maximal_rate ZoneProtectionProfile#maximal_rate}
  */
  readonly maximalRate: number;
}

export function zoneProtectionProfileFloodIcmpv6RedToTerraform(struct?: ZoneProtectionProfileFloodIcmpv6Red | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    activate_rate: cdktf.numberToTerraform(struct!.activateRate),
    alarm_rate: cdktf.numberToTerraform(struct!.alarmRate),
    maximal_rate: cdktf.numberToTerraform(struct!.maximalRate),
  }
}


export function zoneProtectionProfileFloodIcmpv6RedToHclTerraform(struct?: ZoneProtectionProfileFloodIcmpv6Red | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    activate_rate: {
      value: cdktf.numberToHclTerraform(struct!.activateRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    alarm_rate: {
      value: cdktf.numberToHclTerraform(struct!.alarmRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximal_rate: {
      value: cdktf.numberToHclTerraform(struct!.maximalRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZoneProtectionProfileFloodIcmpv6RedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZoneProtectionProfileFloodIcmpv6Red | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activateRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.activateRate = this._activateRate;
    }
    if (this._alarmRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarmRate = this._alarmRate;
    }
    if (this._maximalRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximalRate = this._maximalRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZoneProtectionProfileFloodIcmpv6Red | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activateRate = undefined;
      this._alarmRate = undefined;
      this._maximalRate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activateRate = value.activateRate;
      this._alarmRate = value.alarmRate;
      this._maximalRate = value.maximalRate;
    }
  }

  // activate_rate - computed: false, optional: false, required: true
  private _activateRate?: number; 
  public get activateRate() {
    return this.getNumberAttribute('activate_rate');
  }
  public set activateRate(value: number) {
    this._activateRate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get activateRateInput() {
    return this._activateRate;
  }

  // alarm_rate - computed: false, optional: false, required: true
  private _alarmRate?: number; 
  public get alarmRate() {
    return this.getNumberAttribute('alarm_rate');
  }
  public set alarmRate(value: number) {
    this._alarmRate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmRateInput() {
    return this._alarmRate;
  }

  // maximal_rate - computed: false, optional: false, required: true
  private _maximalRate?: number; 
  public get maximalRate() {
    return this.getNumberAttribute('maximal_rate');
  }
  public set maximalRate(value: number) {
    this._maximalRate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maximalRateInput() {
    return this._maximalRate;
  }
}
export interface ZoneProtectionProfileFloodIcmpv6 {
  /**
  * Enable protection against ICMPv6 floods?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#enable ZoneProtectionProfile#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Red
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#red ZoneProtectionProfile#red}
  */
  readonly red?: ZoneProtectionProfileFloodIcmpv6Red;
}

export function zoneProtectionProfileFloodIcmpv6ToTerraform(struct?: ZoneProtectionProfileFloodIcmpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    red: zoneProtectionProfileFloodIcmpv6RedToTerraform(struct!.red),
  }
}


export function zoneProtectionProfileFloodIcmpv6ToHclTerraform(struct?: ZoneProtectionProfileFloodIcmpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    red: {
      value: zoneProtectionProfileFloodIcmpv6RedToHclTerraform(struct!.red),
      isBlock: true,
      type: "struct",
      storageClassType: "ZoneProtectionProfileFloodIcmpv6Red",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZoneProtectionProfileFloodIcmpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZoneProtectionProfileFloodIcmpv6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._red?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.red = this._red?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZoneProtectionProfileFloodIcmpv6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._red.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._red.internalValue = value.red;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // red - computed: false, optional: true, required: false
  private _red = new ZoneProtectionProfileFloodIcmpv6RedOutputReference(this, "red");
  public get red() {
    return this._red;
  }
  public putRed(value: ZoneProtectionProfileFloodIcmpv6Red) {
    this._red.internalValue = value;
  }
  public resetRed() {
    this._red.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redInput() {
    return this._red.internalValue;
  }
}
export interface ZoneProtectionProfileFloodOtherIpRed {
  /**
  * Activate rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#activate_rate ZoneProtectionProfile#activate_rate}
  */
  readonly activateRate: number;
  /**
  * Alarm rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#alarm_rate ZoneProtectionProfile#alarm_rate}
  */
  readonly alarmRate: number;
  /**
  * Maximal rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#maximal_rate ZoneProtectionProfile#maximal_rate}
  */
  readonly maximalRate: number;
}

export function zoneProtectionProfileFloodOtherIpRedToTerraform(struct?: ZoneProtectionProfileFloodOtherIpRed | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    activate_rate: cdktf.numberToTerraform(struct!.activateRate),
    alarm_rate: cdktf.numberToTerraform(struct!.alarmRate),
    maximal_rate: cdktf.numberToTerraform(struct!.maximalRate),
  }
}


export function zoneProtectionProfileFloodOtherIpRedToHclTerraform(struct?: ZoneProtectionProfileFloodOtherIpRed | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    activate_rate: {
      value: cdktf.numberToHclTerraform(struct!.activateRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    alarm_rate: {
      value: cdktf.numberToHclTerraform(struct!.alarmRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximal_rate: {
      value: cdktf.numberToHclTerraform(struct!.maximalRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZoneProtectionProfileFloodOtherIpRedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZoneProtectionProfileFloodOtherIpRed | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activateRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.activateRate = this._activateRate;
    }
    if (this._alarmRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarmRate = this._alarmRate;
    }
    if (this._maximalRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximalRate = this._maximalRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZoneProtectionProfileFloodOtherIpRed | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activateRate = undefined;
      this._alarmRate = undefined;
      this._maximalRate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activateRate = value.activateRate;
      this._alarmRate = value.alarmRate;
      this._maximalRate = value.maximalRate;
    }
  }

  // activate_rate - computed: false, optional: false, required: true
  private _activateRate?: number; 
  public get activateRate() {
    return this.getNumberAttribute('activate_rate');
  }
  public set activateRate(value: number) {
    this._activateRate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get activateRateInput() {
    return this._activateRate;
  }

  // alarm_rate - computed: false, optional: false, required: true
  private _alarmRate?: number; 
  public get alarmRate() {
    return this.getNumberAttribute('alarm_rate');
  }
  public set alarmRate(value: number) {
    this._alarmRate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmRateInput() {
    return this._alarmRate;
  }

  // maximal_rate - computed: false, optional: false, required: true
  private _maximalRate?: number; 
  public get maximalRate() {
    return this.getNumberAttribute('maximal_rate');
  }
  public set maximalRate(value: number) {
    this._maximalRate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maximalRateInput() {
    return this._maximalRate;
  }
}
export interface ZoneProtectionProfileFloodOtherIp {
  /**
  * Enable protection against other IP (non-TCP, non-ICMP, non-ICMPv6, non-SCTP, and non-UDP) floods?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#enable ZoneProtectionProfile#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Red
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#red ZoneProtectionProfile#red}
  */
  readonly red?: ZoneProtectionProfileFloodOtherIpRed;
}

export function zoneProtectionProfileFloodOtherIpToTerraform(struct?: ZoneProtectionProfileFloodOtherIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    red: zoneProtectionProfileFloodOtherIpRedToTerraform(struct!.red),
  }
}


export function zoneProtectionProfileFloodOtherIpToHclTerraform(struct?: ZoneProtectionProfileFloodOtherIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    red: {
      value: zoneProtectionProfileFloodOtherIpRedToHclTerraform(struct!.red),
      isBlock: true,
      type: "struct",
      storageClassType: "ZoneProtectionProfileFloodOtherIpRed",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZoneProtectionProfileFloodOtherIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZoneProtectionProfileFloodOtherIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._red?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.red = this._red?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZoneProtectionProfileFloodOtherIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._red.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._red.internalValue = value.red;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // red - computed: false, optional: true, required: false
  private _red = new ZoneProtectionProfileFloodOtherIpRedOutputReference(this, "red");
  public get red() {
    return this._red;
  }
  public putRed(value: ZoneProtectionProfileFloodOtherIpRed) {
    this._red.internalValue = value;
  }
  public resetRed() {
    this._red.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redInput() {
    return this._red.internalValue;
  }
}
export interface ZoneProtectionProfileFloodSctpInitRed {
  /**
  * The number of SCTP INIT packets (not matching an existing session) that the zone receives per second before subsequent SCTP INIT packets are dropped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#activate_rate ZoneProtectionProfile#activate_rate}
  */
  readonly activateRate: number;
  /**
  * The number of SCTP INIT packets (not matching an existing session) that the zone receives per second that triggers an attack alarm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#alarm_rate ZoneProtectionProfile#alarm_rate}
  */
  readonly alarmRate: number;
  /**
  * The maximum number of SCTP INIT packets (not matching an existing session) that the zone receives per second before packets exceeding the maximum are dropped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#maximal_rate ZoneProtectionProfile#maximal_rate}
  */
  readonly maximalRate: number;
}

export function zoneProtectionProfileFloodSctpInitRedToTerraform(struct?: ZoneProtectionProfileFloodSctpInitRed | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    activate_rate: cdktf.numberToTerraform(struct!.activateRate),
    alarm_rate: cdktf.numberToTerraform(struct!.alarmRate),
    maximal_rate: cdktf.numberToTerraform(struct!.maximalRate),
  }
}


export function zoneProtectionProfileFloodSctpInitRedToHclTerraform(struct?: ZoneProtectionProfileFloodSctpInitRed | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    activate_rate: {
      value: cdktf.numberToHclTerraform(struct!.activateRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    alarm_rate: {
      value: cdktf.numberToHclTerraform(struct!.alarmRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximal_rate: {
      value: cdktf.numberToHclTerraform(struct!.maximalRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZoneProtectionProfileFloodSctpInitRedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZoneProtectionProfileFloodSctpInitRed | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activateRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.activateRate = this._activateRate;
    }
    if (this._alarmRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarmRate = this._alarmRate;
    }
    if (this._maximalRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximalRate = this._maximalRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZoneProtectionProfileFloodSctpInitRed | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activateRate = undefined;
      this._alarmRate = undefined;
      this._maximalRate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activateRate = value.activateRate;
      this._alarmRate = value.alarmRate;
      this._maximalRate = value.maximalRate;
    }
  }

  // activate_rate - computed: false, optional: false, required: true
  private _activateRate?: number; 
  public get activateRate() {
    return this.getNumberAttribute('activate_rate');
  }
  public set activateRate(value: number) {
    this._activateRate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get activateRateInput() {
    return this._activateRate;
  }

  // alarm_rate - computed: false, optional: false, required: true
  private _alarmRate?: number; 
  public get alarmRate() {
    return this.getNumberAttribute('alarm_rate');
  }
  public set alarmRate(value: number) {
    this._alarmRate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmRateInput() {
    return this._alarmRate;
  }

  // maximal_rate - computed: false, optional: false, required: true
  private _maximalRate?: number; 
  public get maximalRate() {
    return this.getNumberAttribute('maximal_rate');
  }
  public set maximalRate(value: number) {
    this._maximalRate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maximalRateInput() {
    return this._maximalRate;
  }
}
export interface ZoneProtectionProfileFloodSctpInit {
  /**
  * Enable protection against floods of Stream Control Transmission Protocol (SCTP) packets that contain an Initiation (INIT) chunk?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#enable ZoneProtectionProfile#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Red
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#red ZoneProtectionProfile#red}
  */
  readonly red?: ZoneProtectionProfileFloodSctpInitRed;
}

export function zoneProtectionProfileFloodSctpInitToTerraform(struct?: ZoneProtectionProfileFloodSctpInit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    red: zoneProtectionProfileFloodSctpInitRedToTerraform(struct!.red),
  }
}


export function zoneProtectionProfileFloodSctpInitToHclTerraform(struct?: ZoneProtectionProfileFloodSctpInit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    red: {
      value: zoneProtectionProfileFloodSctpInitRedToHclTerraform(struct!.red),
      isBlock: true,
      type: "struct",
      storageClassType: "ZoneProtectionProfileFloodSctpInitRed",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZoneProtectionProfileFloodSctpInitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZoneProtectionProfileFloodSctpInit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._red?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.red = this._red?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZoneProtectionProfileFloodSctpInit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._red.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._red.internalValue = value.red;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // red - computed: false, optional: true, required: false
  private _red = new ZoneProtectionProfileFloodSctpInitRedOutputReference(this, "red");
  public get red() {
    return this._red;
  }
  public putRed(value: ZoneProtectionProfileFloodSctpInitRed) {
    this._red.internalValue = value;
  }
  public resetRed() {
    this._red.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redInput() {
    return this._red.internalValue;
  }
}
export interface ZoneProtectionProfileFloodTcpSynRed {
  /**
  * When the flow exceeds the `activate_rate`` threshold, the firewall drops individual SYN packets randomly to restrict the flow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#activate_rate ZoneProtectionProfile#activate_rate}
  */
  readonly activateRate: number;
  /**
  * When the flow exceeds the `alert_rate`` threshold, an alarm is generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#alarm_rate ZoneProtectionProfile#alarm_rate}
  */
  readonly alarmRate: number;
  /**
  * When the flow exceeds the `maximal_rate` threshold, 100% of incoming SYN packets are dropped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#maximal_rate ZoneProtectionProfile#maximal_rate}
  */
  readonly maximalRate: number;
}

export function zoneProtectionProfileFloodTcpSynRedToTerraform(struct?: ZoneProtectionProfileFloodTcpSynRed | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    activate_rate: cdktf.numberToTerraform(struct!.activateRate),
    alarm_rate: cdktf.numberToTerraform(struct!.alarmRate),
    maximal_rate: cdktf.numberToTerraform(struct!.maximalRate),
  }
}


export function zoneProtectionProfileFloodTcpSynRedToHclTerraform(struct?: ZoneProtectionProfileFloodTcpSynRed | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    activate_rate: {
      value: cdktf.numberToHclTerraform(struct!.activateRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    alarm_rate: {
      value: cdktf.numberToHclTerraform(struct!.alarmRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximal_rate: {
      value: cdktf.numberToHclTerraform(struct!.maximalRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZoneProtectionProfileFloodTcpSynRedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZoneProtectionProfileFloodTcpSynRed | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activateRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.activateRate = this._activateRate;
    }
    if (this._alarmRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarmRate = this._alarmRate;
    }
    if (this._maximalRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximalRate = this._maximalRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZoneProtectionProfileFloodTcpSynRed | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activateRate = undefined;
      this._alarmRate = undefined;
      this._maximalRate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activateRate = value.activateRate;
      this._alarmRate = value.alarmRate;
      this._maximalRate = value.maximalRate;
    }
  }

  // activate_rate - computed: false, optional: false, required: true
  private _activateRate?: number; 
  public get activateRate() {
    return this.getNumberAttribute('activate_rate');
  }
  public set activateRate(value: number) {
    this._activateRate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get activateRateInput() {
    return this._activateRate;
  }

  // alarm_rate - computed: false, optional: false, required: true
  private _alarmRate?: number; 
  public get alarmRate() {
    return this.getNumberAttribute('alarm_rate');
  }
  public set alarmRate(value: number) {
    this._alarmRate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmRateInput() {
    return this._alarmRate;
  }

  // maximal_rate - computed: false, optional: false, required: true
  private _maximalRate?: number; 
  public get maximalRate() {
    return this.getNumberAttribute('maximal_rate');
  }
  public set maximalRate(value: number) {
    this._maximalRate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maximalRateInput() {
    return this._maximalRate;
  }
}
export interface ZoneProtectionProfileFloodTcpSynSynCookies {
  /**
  * When the flow exceeds the `activate_rate`` threshold, the firewall drops individual SYN packets randomly to restrict the flow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#activate_rate ZoneProtectionProfile#activate_rate}
  */
  readonly activateRate: number;
  /**
  * When the flow exceeds the `alert_rate`` threshold, an alarm is generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#alarm_rate ZoneProtectionProfile#alarm_rate}
  */
  readonly alarmRate: number;
  /**
  * When the flow exceeds the `maximal_rate` threshold, 100% of incoming SYN packets are dropped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#maximal_rate ZoneProtectionProfile#maximal_rate}
  */
  readonly maximalRate: number;
}

export function zoneProtectionProfileFloodTcpSynSynCookiesToTerraform(struct?: ZoneProtectionProfileFloodTcpSynSynCookies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    activate_rate: cdktf.numberToTerraform(struct!.activateRate),
    alarm_rate: cdktf.numberToTerraform(struct!.alarmRate),
    maximal_rate: cdktf.numberToTerraform(struct!.maximalRate),
  }
}


export function zoneProtectionProfileFloodTcpSynSynCookiesToHclTerraform(struct?: ZoneProtectionProfileFloodTcpSynSynCookies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    activate_rate: {
      value: cdktf.numberToHclTerraform(struct!.activateRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    alarm_rate: {
      value: cdktf.numberToHclTerraform(struct!.alarmRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximal_rate: {
      value: cdktf.numberToHclTerraform(struct!.maximalRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZoneProtectionProfileFloodTcpSynSynCookiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZoneProtectionProfileFloodTcpSynSynCookies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activateRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.activateRate = this._activateRate;
    }
    if (this._alarmRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarmRate = this._alarmRate;
    }
    if (this._maximalRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximalRate = this._maximalRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZoneProtectionProfileFloodTcpSynSynCookies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activateRate = undefined;
      this._alarmRate = undefined;
      this._maximalRate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activateRate = value.activateRate;
      this._alarmRate = value.alarmRate;
      this._maximalRate = value.maximalRate;
    }
  }

  // activate_rate - computed: false, optional: false, required: true
  private _activateRate?: number; 
  public get activateRate() {
    return this.getNumberAttribute('activate_rate');
  }
  public set activateRate(value: number) {
    this._activateRate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get activateRateInput() {
    return this._activateRate;
  }

  // alarm_rate - computed: false, optional: false, required: true
  private _alarmRate?: number; 
  public get alarmRate() {
    return this.getNumberAttribute('alarm_rate');
  }
  public set alarmRate(value: number) {
    this._alarmRate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmRateInput() {
    return this._alarmRate;
  }

  // maximal_rate - computed: false, optional: false, required: true
  private _maximalRate?: number; 
  public get maximalRate() {
    return this.getNumberAttribute('maximal_rate');
  }
  public set maximalRate(value: number) {
    this._maximalRate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maximalRateInput() {
    return this._maximalRate;
  }
}
export interface ZoneProtectionProfileFloodTcpSyn {
  /**
  * Enable protection against SYN floods?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#enable ZoneProtectionProfile#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Red
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#red ZoneProtectionProfile#red}
  */
  readonly red?: ZoneProtectionProfileFloodTcpSynRed;
  /**
  * Syn cookies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#syn_cookies ZoneProtectionProfile#syn_cookies}
  */
  readonly synCookies?: ZoneProtectionProfileFloodTcpSynSynCookies;
}

export function zoneProtectionProfileFloodTcpSynToTerraform(struct?: ZoneProtectionProfileFloodTcpSyn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    red: zoneProtectionProfileFloodTcpSynRedToTerraform(struct!.red),
    syn_cookies: zoneProtectionProfileFloodTcpSynSynCookiesToTerraform(struct!.synCookies),
  }
}


export function zoneProtectionProfileFloodTcpSynToHclTerraform(struct?: ZoneProtectionProfileFloodTcpSyn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    red: {
      value: zoneProtectionProfileFloodTcpSynRedToHclTerraform(struct!.red),
      isBlock: true,
      type: "struct",
      storageClassType: "ZoneProtectionProfileFloodTcpSynRed",
    },
    syn_cookies: {
      value: zoneProtectionProfileFloodTcpSynSynCookiesToHclTerraform(struct!.synCookies),
      isBlock: true,
      type: "struct",
      storageClassType: "ZoneProtectionProfileFloodTcpSynSynCookies",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZoneProtectionProfileFloodTcpSynOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZoneProtectionProfileFloodTcpSyn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._red?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.red = this._red?.internalValue;
    }
    if (this._synCookies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.synCookies = this._synCookies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZoneProtectionProfileFloodTcpSyn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._red.internalValue = undefined;
      this._synCookies.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._red.internalValue = value.red;
      this._synCookies.internalValue = value.synCookies;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // red - computed: false, optional: true, required: false
  private _red = new ZoneProtectionProfileFloodTcpSynRedOutputReference(this, "red");
  public get red() {
    return this._red;
  }
  public putRed(value: ZoneProtectionProfileFloodTcpSynRed) {
    this._red.internalValue = value;
  }
  public resetRed() {
    this._red.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redInput() {
    return this._red.internalValue;
  }

  // syn_cookies - computed: false, optional: true, required: false
  private _synCookies = new ZoneProtectionProfileFloodTcpSynSynCookiesOutputReference(this, "syn_cookies");
  public get synCookies() {
    return this._synCookies;
  }
  public putSynCookies(value: ZoneProtectionProfileFloodTcpSynSynCookies) {
    this._synCookies.internalValue = value;
  }
  public resetSynCookies() {
    this._synCookies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synCookiesInput() {
    return this._synCookies.internalValue;
  }
}
export interface ZoneProtectionProfileFloodUdpRed {
  /**
  * The number of UDP packets (not matching an existing session) that the zone receives per second that triggers random dropping of UDP packets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#activate_rate ZoneProtectionProfile#activate_rate}
  */
  readonly activateRate: number;
  /**
  * The number of UDP packets (not matching an existing session) that the zone receives per second that triggers an attack alarm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#alarm_rate ZoneProtectionProfile#alarm_rate}
  */
  readonly alarmRate: number;
  /**
  * The maximum number of UDP packets (not matching an existing session) the zone receives per second before packets exceeding the maximum are dropped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#maximal_rate ZoneProtectionProfile#maximal_rate}
  */
  readonly maximalRate: number;
}

export function zoneProtectionProfileFloodUdpRedToTerraform(struct?: ZoneProtectionProfileFloodUdpRed | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    activate_rate: cdktf.numberToTerraform(struct!.activateRate),
    alarm_rate: cdktf.numberToTerraform(struct!.alarmRate),
    maximal_rate: cdktf.numberToTerraform(struct!.maximalRate),
  }
}


export function zoneProtectionProfileFloodUdpRedToHclTerraform(struct?: ZoneProtectionProfileFloodUdpRed | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    activate_rate: {
      value: cdktf.numberToHclTerraform(struct!.activateRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    alarm_rate: {
      value: cdktf.numberToHclTerraform(struct!.alarmRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximal_rate: {
      value: cdktf.numberToHclTerraform(struct!.maximalRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZoneProtectionProfileFloodUdpRedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZoneProtectionProfileFloodUdpRed | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activateRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.activateRate = this._activateRate;
    }
    if (this._alarmRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarmRate = this._alarmRate;
    }
    if (this._maximalRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximalRate = this._maximalRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZoneProtectionProfileFloodUdpRed | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activateRate = undefined;
      this._alarmRate = undefined;
      this._maximalRate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activateRate = value.activateRate;
      this._alarmRate = value.alarmRate;
      this._maximalRate = value.maximalRate;
    }
  }

  // activate_rate - computed: false, optional: false, required: true
  private _activateRate?: number; 
  public get activateRate() {
    return this.getNumberAttribute('activate_rate');
  }
  public set activateRate(value: number) {
    this._activateRate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get activateRateInput() {
    return this._activateRate;
  }

  // alarm_rate - computed: false, optional: false, required: true
  private _alarmRate?: number; 
  public get alarmRate() {
    return this.getNumberAttribute('alarm_rate');
  }
  public set alarmRate(value: number) {
    this._alarmRate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmRateInput() {
    return this._alarmRate;
  }

  // maximal_rate - computed: false, optional: false, required: true
  private _maximalRate?: number; 
  public get maximalRate() {
    return this.getNumberAttribute('maximal_rate');
  }
  public set maximalRate(value: number) {
    this._maximalRate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maximalRateInput() {
    return this._maximalRate;
  }
}
export interface ZoneProtectionProfileFloodUdp {
  /**
  * Enable protection against UDP floods?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#enable ZoneProtectionProfile#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Red
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#red ZoneProtectionProfile#red}
  */
  readonly red?: ZoneProtectionProfileFloodUdpRed;
}

export function zoneProtectionProfileFloodUdpToTerraform(struct?: ZoneProtectionProfileFloodUdp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    red: zoneProtectionProfileFloodUdpRedToTerraform(struct!.red),
  }
}


export function zoneProtectionProfileFloodUdpToHclTerraform(struct?: ZoneProtectionProfileFloodUdp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    red: {
      value: zoneProtectionProfileFloodUdpRedToHclTerraform(struct!.red),
      isBlock: true,
      type: "struct",
      storageClassType: "ZoneProtectionProfileFloodUdpRed",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZoneProtectionProfileFloodUdpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZoneProtectionProfileFloodUdp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._red?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.red = this._red?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZoneProtectionProfileFloodUdp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._red.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._red.internalValue = value.red;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // red - computed: false, optional: true, required: false
  private _red = new ZoneProtectionProfileFloodUdpRedOutputReference(this, "red");
  public get red() {
    return this._red;
  }
  public putRed(value: ZoneProtectionProfileFloodUdpRed) {
    this._red.internalValue = value;
  }
  public resetRed() {
    this._red.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redInput() {
    return this._red.internalValue;
  }
}
export interface ZoneProtectionProfileFlood {
  /**
  * Icmp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#icmp ZoneProtectionProfile#icmp}
  */
  readonly icmp?: ZoneProtectionProfileFloodIcmp;
  /**
  * Icmpv6
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#icmpv6 ZoneProtectionProfile#icmpv6}
  */
  readonly icmpv6?: ZoneProtectionProfileFloodIcmpv6;
  /**
  * Other ip
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#other_ip ZoneProtectionProfile#other_ip}
  */
  readonly otherIp?: ZoneProtectionProfileFloodOtherIp;
  /**
  * Sctp init
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#sctp_init ZoneProtectionProfile#sctp_init}
  */
  readonly sctpInit?: ZoneProtectionProfileFloodSctpInit;
  /**
  * Tcp syn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#tcp_syn ZoneProtectionProfile#tcp_syn}
  */
  readonly tcpSyn?: ZoneProtectionProfileFloodTcpSyn;
  /**
  * Udp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#udp ZoneProtectionProfile#udp}
  */
  readonly udp?: ZoneProtectionProfileFloodUdp;
}

export function zoneProtectionProfileFloodToTerraform(struct?: ZoneProtectionProfileFlood | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    icmp: zoneProtectionProfileFloodIcmpToTerraform(struct!.icmp),
    icmpv6: zoneProtectionProfileFloodIcmpv6ToTerraform(struct!.icmpv6),
    other_ip: zoneProtectionProfileFloodOtherIpToTerraform(struct!.otherIp),
    sctp_init: zoneProtectionProfileFloodSctpInitToTerraform(struct!.sctpInit),
    tcp_syn: zoneProtectionProfileFloodTcpSynToTerraform(struct!.tcpSyn),
    udp: zoneProtectionProfileFloodUdpToTerraform(struct!.udp),
  }
}


export function zoneProtectionProfileFloodToHclTerraform(struct?: ZoneProtectionProfileFlood | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    icmp: {
      value: zoneProtectionProfileFloodIcmpToHclTerraform(struct!.icmp),
      isBlock: true,
      type: "struct",
      storageClassType: "ZoneProtectionProfileFloodIcmp",
    },
    icmpv6: {
      value: zoneProtectionProfileFloodIcmpv6ToHclTerraform(struct!.icmpv6),
      isBlock: true,
      type: "struct",
      storageClassType: "ZoneProtectionProfileFloodIcmpv6",
    },
    other_ip: {
      value: zoneProtectionProfileFloodOtherIpToHclTerraform(struct!.otherIp),
      isBlock: true,
      type: "struct",
      storageClassType: "ZoneProtectionProfileFloodOtherIp",
    },
    sctp_init: {
      value: zoneProtectionProfileFloodSctpInitToHclTerraform(struct!.sctpInit),
      isBlock: true,
      type: "struct",
      storageClassType: "ZoneProtectionProfileFloodSctpInit",
    },
    tcp_syn: {
      value: zoneProtectionProfileFloodTcpSynToHclTerraform(struct!.tcpSyn),
      isBlock: true,
      type: "struct",
      storageClassType: "ZoneProtectionProfileFloodTcpSyn",
    },
    udp: {
      value: zoneProtectionProfileFloodUdpToHclTerraform(struct!.udp),
      isBlock: true,
      type: "struct",
      storageClassType: "ZoneProtectionProfileFloodUdp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZoneProtectionProfileFloodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZoneProtectionProfileFlood | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._icmp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmp = this._icmp?.internalValue;
    }
    if (this._icmpv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpv6 = this._icmpv6?.internalValue;
    }
    if (this._otherIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherIp = this._otherIp?.internalValue;
    }
    if (this._sctpInit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sctpInit = this._sctpInit?.internalValue;
    }
    if (this._tcpSyn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSyn = this._tcpSyn?.internalValue;
    }
    if (this._udp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.udp = this._udp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZoneProtectionProfileFlood | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._icmp.internalValue = undefined;
      this._icmpv6.internalValue = undefined;
      this._otherIp.internalValue = undefined;
      this._sctpInit.internalValue = undefined;
      this._tcpSyn.internalValue = undefined;
      this._udp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._icmp.internalValue = value.icmp;
      this._icmpv6.internalValue = value.icmpv6;
      this._otherIp.internalValue = value.otherIp;
      this._sctpInit.internalValue = value.sctpInit;
      this._tcpSyn.internalValue = value.tcpSyn;
      this._udp.internalValue = value.udp;
    }
  }

  // icmp - computed: false, optional: true, required: false
  private _icmp = new ZoneProtectionProfileFloodIcmpOutputReference(this, "icmp");
  public get icmp() {
    return this._icmp;
  }
  public putIcmp(value: ZoneProtectionProfileFloodIcmp) {
    this._icmp.internalValue = value;
  }
  public resetIcmp() {
    this._icmp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpInput() {
    return this._icmp.internalValue;
  }

  // icmpv6 - computed: false, optional: true, required: false
  private _icmpv6 = new ZoneProtectionProfileFloodIcmpv6OutputReference(this, "icmpv6");
  public get icmpv6() {
    return this._icmpv6;
  }
  public putIcmpv6(value: ZoneProtectionProfileFloodIcmpv6) {
    this._icmpv6.internalValue = value;
  }
  public resetIcmpv6() {
    this._icmpv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpv6Input() {
    return this._icmpv6.internalValue;
  }

  // other_ip - computed: false, optional: true, required: false
  private _otherIp = new ZoneProtectionProfileFloodOtherIpOutputReference(this, "other_ip");
  public get otherIp() {
    return this._otherIp;
  }
  public putOtherIp(value: ZoneProtectionProfileFloodOtherIp) {
    this._otherIp.internalValue = value;
  }
  public resetOtherIp() {
    this._otherIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherIpInput() {
    return this._otherIp.internalValue;
  }

  // sctp_init - computed: false, optional: true, required: false
  private _sctpInit = new ZoneProtectionProfileFloodSctpInitOutputReference(this, "sctp_init");
  public get sctpInit() {
    return this._sctpInit;
  }
  public putSctpInit(value: ZoneProtectionProfileFloodSctpInit) {
    this._sctpInit.internalValue = value;
  }
  public resetSctpInit() {
    this._sctpInit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpInitInput() {
    return this._sctpInit.internalValue;
  }

  // tcp_syn - computed: false, optional: true, required: false
  private _tcpSyn = new ZoneProtectionProfileFloodTcpSynOutputReference(this, "tcp_syn");
  public get tcpSyn() {
    return this._tcpSyn;
  }
  public putTcpSyn(value: ZoneProtectionProfileFloodTcpSyn) {
    this._tcpSyn.internalValue = value;
  }
  public resetTcpSyn() {
    this._tcpSyn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSynInput() {
    return this._tcpSyn.internalValue;
  }

  // udp - computed: false, optional: true, required: false
  private _udp = new ZoneProtectionProfileFloodUdpOutputReference(this, "udp");
  public get udp() {
    return this._udp;
  }
  public putUdp(value: ZoneProtectionProfileFloodUdp) {
    this._udp.internalValue = value;
  }
  public resetUdp() {
    this._udp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpInput() {
    return this._udp.internalValue;
  }
}
export interface ZoneProtectionProfileIpv6FilterExtHdr {
  /**
  * Discard IPv6 packets that contain the Destination Options extension, which contains options intended only for the destination of the packet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#dest_option_hdr ZoneProtectionProfile#dest_option_hdr}
  */
  readonly destOptionHdr?: boolean | cdktf.IResolvable;
  /**
  * Discard IPv6 packets that contain the Hop-by-Hop Options extension header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#hop_by_hop_hdr ZoneProtectionProfile#hop_by_hop_hdr}
  */
  readonly hopByHopHdr?: boolean | cdktf.IResolvable;
  /**
  * Discard IPv6 packets that contain the Routing extension header, which directs packets to one or more intermediate nodes on its way to its destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#routing_hdr ZoneProtectionProfile#routing_hdr}
  */
  readonly routingHdr?: boolean | cdktf.IResolvable;
}

export function zoneProtectionProfileIpv6FilterExtHdrToTerraform(struct?: ZoneProtectionProfileIpv6FilterExtHdr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dest_option_hdr: cdktf.booleanToTerraform(struct!.destOptionHdr),
    hop_by_hop_hdr: cdktf.booleanToTerraform(struct!.hopByHopHdr),
    routing_hdr: cdktf.booleanToTerraform(struct!.routingHdr),
  }
}


export function zoneProtectionProfileIpv6FilterExtHdrToHclTerraform(struct?: ZoneProtectionProfileIpv6FilterExtHdr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dest_option_hdr: {
      value: cdktf.booleanToHclTerraform(struct!.destOptionHdr),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hop_by_hop_hdr: {
      value: cdktf.booleanToHclTerraform(struct!.hopByHopHdr),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    routing_hdr: {
      value: cdktf.booleanToHclTerraform(struct!.routingHdr),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZoneProtectionProfileIpv6FilterExtHdrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZoneProtectionProfileIpv6FilterExtHdr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destOptionHdr !== undefined) {
      hasAnyValues = true;
      internalValueResult.destOptionHdr = this._destOptionHdr;
    }
    if (this._hopByHopHdr !== undefined) {
      hasAnyValues = true;
      internalValueResult.hopByHopHdr = this._hopByHopHdr;
    }
    if (this._routingHdr !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingHdr = this._routingHdr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZoneProtectionProfileIpv6FilterExtHdr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destOptionHdr = undefined;
      this._hopByHopHdr = undefined;
      this._routingHdr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destOptionHdr = value.destOptionHdr;
      this._hopByHopHdr = value.hopByHopHdr;
      this._routingHdr = value.routingHdr;
    }
  }

  // dest_option_hdr - computed: false, optional: true, required: false
  private _destOptionHdr?: boolean | cdktf.IResolvable; 
  public get destOptionHdr() {
    return this.getBooleanAttribute('dest_option_hdr');
  }
  public set destOptionHdr(value: boolean | cdktf.IResolvable) {
    this._destOptionHdr = value;
  }
  public resetDestOptionHdr() {
    this._destOptionHdr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destOptionHdrInput() {
    return this._destOptionHdr;
  }

  // hop_by_hop_hdr - computed: false, optional: true, required: false
  private _hopByHopHdr?: boolean | cdktf.IResolvable; 
  public get hopByHopHdr() {
    return this.getBooleanAttribute('hop_by_hop_hdr');
  }
  public set hopByHopHdr(value: boolean | cdktf.IResolvable) {
    this._hopByHopHdr = value;
  }
  public resetHopByHopHdr() {
    this._hopByHopHdr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hopByHopHdrInput() {
    return this._hopByHopHdr;
  }

  // routing_hdr - computed: false, optional: true, required: false
  private _routingHdr?: boolean | cdktf.IResolvable; 
  public get routingHdr() {
    return this.getBooleanAttribute('routing_hdr');
  }
  public set routingHdr(value: boolean | cdktf.IResolvable) {
    this._routingHdr = value;
  }
  public resetRoutingHdr() {
    this._routingHdr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingHdrInput() {
    return this._routingHdr;
  }
}
export interface ZoneProtectionProfileIpv6IgnoreInvPkt {
  /**
  * Require an explicit Security policy match for Destination Unreachable ICMPv6 messages, even when the message is associated with an existing session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#dest_unreach ZoneProtectionProfile#dest_unreach}
  */
  readonly destUnreach?: boolean | cdktf.IResolvable;
  /**
  * Require an explicit Security policy match for Parameter Problem ICMPv6 messages, even when the message is associated with an existing session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#param_problem ZoneProtectionProfile#param_problem}
  */
  readonly paramProblem?: boolean | cdktf.IResolvable;
  /**
  * Require an explicit Security policy match for Packet Too Big ICMPv6 messages, even when the message is associated with an existing session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#pkt_too_big ZoneProtectionProfile#pkt_too_big}
  */
  readonly pktTooBig?: boolean | cdktf.IResolvable;
  /**
  * Require an explicit Security policy match for Redirect Message ICMPv6 messages, even when the message is associated with an existing session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#redirect ZoneProtectionProfile#redirect}
  */
  readonly redirect?: boolean | cdktf.IResolvable;
  /**
  * Require an explicit Security policy match for Time Exceeded ICMPv6 messages, even when the message is associated with an existing session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#time_exceeded ZoneProtectionProfile#time_exceeded}
  */
  readonly timeExceeded?: boolean | cdktf.IResolvable;
}

export function zoneProtectionProfileIpv6IgnoreInvPktToTerraform(struct?: ZoneProtectionProfileIpv6IgnoreInvPkt | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dest_unreach: cdktf.booleanToTerraform(struct!.destUnreach),
    param_problem: cdktf.booleanToTerraform(struct!.paramProblem),
    pkt_too_big: cdktf.booleanToTerraform(struct!.pktTooBig),
    redirect: cdktf.booleanToTerraform(struct!.redirect),
    time_exceeded: cdktf.booleanToTerraform(struct!.timeExceeded),
  }
}


export function zoneProtectionProfileIpv6IgnoreInvPktToHclTerraform(struct?: ZoneProtectionProfileIpv6IgnoreInvPkt | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dest_unreach: {
      value: cdktf.booleanToHclTerraform(struct!.destUnreach),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    param_problem: {
      value: cdktf.booleanToHclTerraform(struct!.paramProblem),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pkt_too_big: {
      value: cdktf.booleanToHclTerraform(struct!.pktTooBig),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    redirect: {
      value: cdktf.booleanToHclTerraform(struct!.redirect),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    time_exceeded: {
      value: cdktf.booleanToHclTerraform(struct!.timeExceeded),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZoneProtectionProfileIpv6IgnoreInvPktOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZoneProtectionProfileIpv6IgnoreInvPkt | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destUnreach !== undefined) {
      hasAnyValues = true;
      internalValueResult.destUnreach = this._destUnreach;
    }
    if (this._paramProblem !== undefined) {
      hasAnyValues = true;
      internalValueResult.paramProblem = this._paramProblem;
    }
    if (this._pktTooBig !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktTooBig = this._pktTooBig;
    }
    if (this._redirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirect = this._redirect;
    }
    if (this._timeExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeExceeded = this._timeExceeded;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZoneProtectionProfileIpv6IgnoreInvPkt | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destUnreach = undefined;
      this._paramProblem = undefined;
      this._pktTooBig = undefined;
      this._redirect = undefined;
      this._timeExceeded = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destUnreach = value.destUnreach;
      this._paramProblem = value.paramProblem;
      this._pktTooBig = value.pktTooBig;
      this._redirect = value.redirect;
      this._timeExceeded = value.timeExceeded;
    }
  }

  // dest_unreach - computed: false, optional: true, required: false
  private _destUnreach?: boolean | cdktf.IResolvable; 
  public get destUnreach() {
    return this.getBooleanAttribute('dest_unreach');
  }
  public set destUnreach(value: boolean | cdktf.IResolvable) {
    this._destUnreach = value;
  }
  public resetDestUnreach() {
    this._destUnreach = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destUnreachInput() {
    return this._destUnreach;
  }

  // param_problem - computed: false, optional: true, required: false
  private _paramProblem?: boolean | cdktf.IResolvable; 
  public get paramProblem() {
    return this.getBooleanAttribute('param_problem');
  }
  public set paramProblem(value: boolean | cdktf.IResolvable) {
    this._paramProblem = value;
  }
  public resetParamProblem() {
    this._paramProblem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramProblemInput() {
    return this._paramProblem;
  }

  // pkt_too_big - computed: false, optional: true, required: false
  private _pktTooBig?: boolean | cdktf.IResolvable; 
  public get pktTooBig() {
    return this.getBooleanAttribute('pkt_too_big');
  }
  public set pktTooBig(value: boolean | cdktf.IResolvable) {
    this._pktTooBig = value;
  }
  public resetPktTooBig() {
    this._pktTooBig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktTooBigInput() {
    return this._pktTooBig;
  }

  // redirect - computed: false, optional: true, required: false
  private _redirect?: boolean | cdktf.IResolvable; 
  public get redirect() {
    return this.getBooleanAttribute('redirect');
  }
  public set redirect(value: boolean | cdktf.IResolvable) {
    this._redirect = value;
  }
  public resetRedirect() {
    this._redirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectInput() {
    return this._redirect;
  }

  // time_exceeded - computed: false, optional: true, required: false
  private _timeExceeded?: boolean | cdktf.IResolvable; 
  public get timeExceeded() {
    return this.getBooleanAttribute('time_exceeded');
  }
  public set timeExceeded(value: boolean | cdktf.IResolvable) {
    this._timeExceeded = value;
  }
  public resetTimeExceeded() {
    this._timeExceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeExceededInput() {
    return this._timeExceeded;
  }
}
export interface ZoneProtectionProfileIpv6 {
  /**
  * Discard IPv6 packets that contain an anycast source address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#anycast_source ZoneProtectionProfile#anycast_source}
  */
  readonly anycastSource?: boolean | cdktf.IResolvable;
  /**
  * Filter ext hdr
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#filter_ext_hdr ZoneProtectionProfile#filter_ext_hdr}
  */
  readonly filterExtHdr?: ZoneProtectionProfileIpv6FilterExtHdr;
  /**
  * Discard IPv6 packets that contain a Packet Too Big ICMPv6 message when the maximum transmission unit (MTU) is less than 1,280 bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#icmpv6_too_big_small_mtu_discard ZoneProtectionProfile#icmpv6_too_big_small_mtu_discard}
  */
  readonly icmpv6TooBigSmallMtuDiscard?: boolean | cdktf.IResolvable;
  /**
  * Ignore inv pkt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#ignore_inv_pkt ZoneProtectionProfile#ignore_inv_pkt}
  */
  readonly ignoreInvPkt?: ZoneProtectionProfileIpv6IgnoreInvPkt;
  /**
  * Discard IPv6 packets that are defined as an RFC 4291 IPv4-Compatible IPv6 address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#ipv4_compatible_address ZoneProtectionProfile#ipv4_compatible_address}
  */
  readonly ipv4CompatibleAddress?: boolean | cdktf.IResolvable;
  /**
  * Discard IPv6 packets with the last fragment flag (M=0) and offset of zero.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#needless_fragment_hdr ZoneProtectionProfile#needless_fragment_hdr}
  */
  readonly needlessFragmentHdr?: boolean | cdktf.IResolvable;
  /**
  * Discard IPv6 packets that contain invalid IPv6 options in an extension header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#options_invalid_ipv6_discard ZoneProtectionProfile#options_invalid_ipv6_discard}
  */
  readonly optionsInvalidIpv6Discard?: boolean | cdktf.IResolvable;
  /**
  * Discard IPv6 packets that have a header with a reserved field not set to zero.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#reserved_field_set_discard ZoneProtectionProfile#reserved_field_set_discard}
  */
  readonly reservedFieldSetDiscard?: boolean | cdktf.IResolvable;
  /**
  * Drop packets with type 0 routing header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#routing_header_0 ZoneProtectionProfile#routing_header_0}
  */
  readonly routingHeader0?: boolean | cdktf.IResolvable;
  /**
  * Drop packets with type 1 routing header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#routing_header_1 ZoneProtectionProfile#routing_header_1}
  */
  readonly routingHeader1?: boolean | cdktf.IResolvable;
  /**
  * Drop packets with type 253 routing header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#routing_header_253 ZoneProtectionProfile#routing_header_253}
  */
  readonly routingHeader253?: boolean | cdktf.IResolvable;
  /**
  * Drop packets with type 254 routing header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#routing_header_254 ZoneProtectionProfile#routing_header_254}
  */
  readonly routingHeader254?: boolean | cdktf.IResolvable;
  /**
  * Drop packets with type 255 routing header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#routing_header_255 ZoneProtectionProfile#routing_header_255}
  */
  readonly routingHeader255?: boolean | cdktf.IResolvable;
  /**
  * Drop packets with type 3 routing header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#routing_header_3 ZoneProtectionProfile#routing_header_3}
  */
  readonly routingHeader3?: boolean | cdktf.IResolvable;
  /**
  * Drop packets with type 4 to type 252 routing header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#routing_header_4_252 ZoneProtectionProfile#routing_header_4_252}
  */
  readonly routingHeader4252?: boolean | cdktf.IResolvable;
}

export function zoneProtectionProfileIpv6ToTerraform(struct?: ZoneProtectionProfileIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    anycast_source: cdktf.booleanToTerraform(struct!.anycastSource),
    filter_ext_hdr: zoneProtectionProfileIpv6FilterExtHdrToTerraform(struct!.filterExtHdr),
    icmpv6_too_big_small_mtu_discard: cdktf.booleanToTerraform(struct!.icmpv6TooBigSmallMtuDiscard),
    ignore_inv_pkt: zoneProtectionProfileIpv6IgnoreInvPktToTerraform(struct!.ignoreInvPkt),
    ipv4_compatible_address: cdktf.booleanToTerraform(struct!.ipv4CompatibleAddress),
    needless_fragment_hdr: cdktf.booleanToTerraform(struct!.needlessFragmentHdr),
    options_invalid_ipv6_discard: cdktf.booleanToTerraform(struct!.optionsInvalidIpv6Discard),
    reserved_field_set_discard: cdktf.booleanToTerraform(struct!.reservedFieldSetDiscard),
    routing_header_0: cdktf.booleanToTerraform(struct!.routingHeader0),
    routing_header_1: cdktf.booleanToTerraform(struct!.routingHeader1),
    routing_header_253: cdktf.booleanToTerraform(struct!.routingHeader253),
    routing_header_254: cdktf.booleanToTerraform(struct!.routingHeader254),
    routing_header_255: cdktf.booleanToTerraform(struct!.routingHeader255),
    routing_header_3: cdktf.booleanToTerraform(struct!.routingHeader3),
    routing_header_4_252: cdktf.booleanToTerraform(struct!.routingHeader4252),
  }
}


export function zoneProtectionProfileIpv6ToHclTerraform(struct?: ZoneProtectionProfileIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    anycast_source: {
      value: cdktf.booleanToHclTerraform(struct!.anycastSource),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    filter_ext_hdr: {
      value: zoneProtectionProfileIpv6FilterExtHdrToHclTerraform(struct!.filterExtHdr),
      isBlock: true,
      type: "struct",
      storageClassType: "ZoneProtectionProfileIpv6FilterExtHdr",
    },
    icmpv6_too_big_small_mtu_discard: {
      value: cdktf.booleanToHclTerraform(struct!.icmpv6TooBigSmallMtuDiscard),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_inv_pkt: {
      value: zoneProtectionProfileIpv6IgnoreInvPktToHclTerraform(struct!.ignoreInvPkt),
      isBlock: true,
      type: "struct",
      storageClassType: "ZoneProtectionProfileIpv6IgnoreInvPkt",
    },
    ipv4_compatible_address: {
      value: cdktf.booleanToHclTerraform(struct!.ipv4CompatibleAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    needless_fragment_hdr: {
      value: cdktf.booleanToHclTerraform(struct!.needlessFragmentHdr),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    options_invalid_ipv6_discard: {
      value: cdktf.booleanToHclTerraform(struct!.optionsInvalidIpv6Discard),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    reserved_field_set_discard: {
      value: cdktf.booleanToHclTerraform(struct!.reservedFieldSetDiscard),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    routing_header_0: {
      value: cdktf.booleanToHclTerraform(struct!.routingHeader0),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    routing_header_1: {
      value: cdktf.booleanToHclTerraform(struct!.routingHeader1),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    routing_header_253: {
      value: cdktf.booleanToHclTerraform(struct!.routingHeader253),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    routing_header_254: {
      value: cdktf.booleanToHclTerraform(struct!.routingHeader254),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    routing_header_255: {
      value: cdktf.booleanToHclTerraform(struct!.routingHeader255),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    routing_header_3: {
      value: cdktf.booleanToHclTerraform(struct!.routingHeader3),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    routing_header_4_252: {
      value: cdktf.booleanToHclTerraform(struct!.routingHeader4252),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZoneProtectionProfileIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZoneProtectionProfileIpv6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anycastSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.anycastSource = this._anycastSource;
    }
    if (this._filterExtHdr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterExtHdr = this._filterExtHdr?.internalValue;
    }
    if (this._icmpv6TooBigSmallMtuDiscard !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpv6TooBigSmallMtuDiscard = this._icmpv6TooBigSmallMtuDiscard;
    }
    if (this._ignoreInvPkt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreInvPkt = this._ignoreInvPkt?.internalValue;
    }
    if (this._ipv4CompatibleAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4CompatibleAddress = this._ipv4CompatibleAddress;
    }
    if (this._needlessFragmentHdr !== undefined) {
      hasAnyValues = true;
      internalValueResult.needlessFragmentHdr = this._needlessFragmentHdr;
    }
    if (this._optionsInvalidIpv6Discard !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionsInvalidIpv6Discard = this._optionsInvalidIpv6Discard;
    }
    if (this._reservedFieldSetDiscard !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservedFieldSetDiscard = this._reservedFieldSetDiscard;
    }
    if (this._routingHeader0 !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingHeader0 = this._routingHeader0;
    }
    if (this._routingHeader1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingHeader1 = this._routingHeader1;
    }
    if (this._routingHeader253 !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingHeader253 = this._routingHeader253;
    }
    if (this._routingHeader254 !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingHeader254 = this._routingHeader254;
    }
    if (this._routingHeader255 !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingHeader255 = this._routingHeader255;
    }
    if (this._routingHeader3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingHeader3 = this._routingHeader3;
    }
    if (this._routingHeader4252 !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingHeader4252 = this._routingHeader4252;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZoneProtectionProfileIpv6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anycastSource = undefined;
      this._filterExtHdr.internalValue = undefined;
      this._icmpv6TooBigSmallMtuDiscard = undefined;
      this._ignoreInvPkt.internalValue = undefined;
      this._ipv4CompatibleAddress = undefined;
      this._needlessFragmentHdr = undefined;
      this._optionsInvalidIpv6Discard = undefined;
      this._reservedFieldSetDiscard = undefined;
      this._routingHeader0 = undefined;
      this._routingHeader1 = undefined;
      this._routingHeader253 = undefined;
      this._routingHeader254 = undefined;
      this._routingHeader255 = undefined;
      this._routingHeader3 = undefined;
      this._routingHeader4252 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anycastSource = value.anycastSource;
      this._filterExtHdr.internalValue = value.filterExtHdr;
      this._icmpv6TooBigSmallMtuDiscard = value.icmpv6TooBigSmallMtuDiscard;
      this._ignoreInvPkt.internalValue = value.ignoreInvPkt;
      this._ipv4CompatibleAddress = value.ipv4CompatibleAddress;
      this._needlessFragmentHdr = value.needlessFragmentHdr;
      this._optionsInvalidIpv6Discard = value.optionsInvalidIpv6Discard;
      this._reservedFieldSetDiscard = value.reservedFieldSetDiscard;
      this._routingHeader0 = value.routingHeader0;
      this._routingHeader1 = value.routingHeader1;
      this._routingHeader253 = value.routingHeader253;
      this._routingHeader254 = value.routingHeader254;
      this._routingHeader255 = value.routingHeader255;
      this._routingHeader3 = value.routingHeader3;
      this._routingHeader4252 = value.routingHeader4252;
    }
  }

  // anycast_source - computed: false, optional: true, required: false
  private _anycastSource?: boolean | cdktf.IResolvable; 
  public get anycastSource() {
    return this.getBooleanAttribute('anycast_source');
  }
  public set anycastSource(value: boolean | cdktf.IResolvable) {
    this._anycastSource = value;
  }
  public resetAnycastSource() {
    this._anycastSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anycastSourceInput() {
    return this._anycastSource;
  }

  // filter_ext_hdr - computed: false, optional: true, required: false
  private _filterExtHdr = new ZoneProtectionProfileIpv6FilterExtHdrOutputReference(this, "filter_ext_hdr");
  public get filterExtHdr() {
    return this._filterExtHdr;
  }
  public putFilterExtHdr(value: ZoneProtectionProfileIpv6FilterExtHdr) {
    this._filterExtHdr.internalValue = value;
  }
  public resetFilterExtHdr() {
    this._filterExtHdr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterExtHdrInput() {
    return this._filterExtHdr.internalValue;
  }

  // icmpv6_too_big_small_mtu_discard - computed: false, optional: true, required: false
  private _icmpv6TooBigSmallMtuDiscard?: boolean | cdktf.IResolvable; 
  public get icmpv6TooBigSmallMtuDiscard() {
    return this.getBooleanAttribute('icmpv6_too_big_small_mtu_discard');
  }
  public set icmpv6TooBigSmallMtuDiscard(value: boolean | cdktf.IResolvable) {
    this._icmpv6TooBigSmallMtuDiscard = value;
  }
  public resetIcmpv6TooBigSmallMtuDiscard() {
    this._icmpv6TooBigSmallMtuDiscard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpv6TooBigSmallMtuDiscardInput() {
    return this._icmpv6TooBigSmallMtuDiscard;
  }

  // ignore_inv_pkt - computed: false, optional: true, required: false
  private _ignoreInvPkt = new ZoneProtectionProfileIpv6IgnoreInvPktOutputReference(this, "ignore_inv_pkt");
  public get ignoreInvPkt() {
    return this._ignoreInvPkt;
  }
  public putIgnoreInvPkt(value: ZoneProtectionProfileIpv6IgnoreInvPkt) {
    this._ignoreInvPkt.internalValue = value;
  }
  public resetIgnoreInvPkt() {
    this._ignoreInvPkt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreInvPktInput() {
    return this._ignoreInvPkt.internalValue;
  }

  // ipv4_compatible_address - computed: false, optional: true, required: false
  private _ipv4CompatibleAddress?: boolean | cdktf.IResolvable; 
  public get ipv4CompatibleAddress() {
    return this.getBooleanAttribute('ipv4_compatible_address');
  }
  public set ipv4CompatibleAddress(value: boolean | cdktf.IResolvable) {
    this._ipv4CompatibleAddress = value;
  }
  public resetIpv4CompatibleAddress() {
    this._ipv4CompatibleAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4CompatibleAddressInput() {
    return this._ipv4CompatibleAddress;
  }

  // needless_fragment_hdr - computed: false, optional: true, required: false
  private _needlessFragmentHdr?: boolean | cdktf.IResolvable; 
  public get needlessFragmentHdr() {
    return this.getBooleanAttribute('needless_fragment_hdr');
  }
  public set needlessFragmentHdr(value: boolean | cdktf.IResolvable) {
    this._needlessFragmentHdr = value;
  }
  public resetNeedlessFragmentHdr() {
    this._needlessFragmentHdr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get needlessFragmentHdrInput() {
    return this._needlessFragmentHdr;
  }

  // options_invalid_ipv6_discard - computed: false, optional: true, required: false
  private _optionsInvalidIpv6Discard?: boolean | cdktf.IResolvable; 
  public get optionsInvalidIpv6Discard() {
    return this.getBooleanAttribute('options_invalid_ipv6_discard');
  }
  public set optionsInvalidIpv6Discard(value: boolean | cdktf.IResolvable) {
    this._optionsInvalidIpv6Discard = value;
  }
  public resetOptionsInvalidIpv6Discard() {
    this._optionsInvalidIpv6Discard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInvalidIpv6DiscardInput() {
    return this._optionsInvalidIpv6Discard;
  }

  // reserved_field_set_discard - computed: false, optional: true, required: false
  private _reservedFieldSetDiscard?: boolean | cdktf.IResolvable; 
  public get reservedFieldSetDiscard() {
    return this.getBooleanAttribute('reserved_field_set_discard');
  }
  public set reservedFieldSetDiscard(value: boolean | cdktf.IResolvable) {
    this._reservedFieldSetDiscard = value;
  }
  public resetReservedFieldSetDiscard() {
    this._reservedFieldSetDiscard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedFieldSetDiscardInput() {
    return this._reservedFieldSetDiscard;
  }

  // routing_header_0 - computed: false, optional: true, required: false
  private _routingHeader0?: boolean | cdktf.IResolvable; 
  public get routingHeader0() {
    return this.getBooleanAttribute('routing_header_0');
  }
  public set routingHeader0(value: boolean | cdktf.IResolvable) {
    this._routingHeader0 = value;
  }
  public resetRoutingHeader0() {
    this._routingHeader0 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingHeader0Input() {
    return this._routingHeader0;
  }

  // routing_header_1 - computed: false, optional: true, required: false
  private _routingHeader1?: boolean | cdktf.IResolvable; 
  public get routingHeader1() {
    return this.getBooleanAttribute('routing_header_1');
  }
  public set routingHeader1(value: boolean | cdktf.IResolvable) {
    this._routingHeader1 = value;
  }
  public resetRoutingHeader1() {
    this._routingHeader1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingHeader1Input() {
    return this._routingHeader1;
  }

  // routing_header_253 - computed: false, optional: true, required: false
  private _routingHeader253?: boolean | cdktf.IResolvable; 
  public get routingHeader253() {
    return this.getBooleanAttribute('routing_header_253');
  }
  public set routingHeader253(value: boolean | cdktf.IResolvable) {
    this._routingHeader253 = value;
  }
  public resetRoutingHeader253() {
    this._routingHeader253 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingHeader253Input() {
    return this._routingHeader253;
  }

  // routing_header_254 - computed: false, optional: true, required: false
  private _routingHeader254?: boolean | cdktf.IResolvable; 
  public get routingHeader254() {
    return this.getBooleanAttribute('routing_header_254');
  }
  public set routingHeader254(value: boolean | cdktf.IResolvable) {
    this._routingHeader254 = value;
  }
  public resetRoutingHeader254() {
    this._routingHeader254 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingHeader254Input() {
    return this._routingHeader254;
  }

  // routing_header_255 - computed: false, optional: true, required: false
  private _routingHeader255?: boolean | cdktf.IResolvable; 
  public get routingHeader255() {
    return this.getBooleanAttribute('routing_header_255');
  }
  public set routingHeader255(value: boolean | cdktf.IResolvable) {
    this._routingHeader255 = value;
  }
  public resetRoutingHeader255() {
    this._routingHeader255 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingHeader255Input() {
    return this._routingHeader255;
  }

  // routing_header_3 - computed: false, optional: true, required: false
  private _routingHeader3?: boolean | cdktf.IResolvable; 
  public get routingHeader3() {
    return this.getBooleanAttribute('routing_header_3');
  }
  public set routingHeader3(value: boolean | cdktf.IResolvable) {
    this._routingHeader3 = value;
  }
  public resetRoutingHeader3() {
    this._routingHeader3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingHeader3Input() {
    return this._routingHeader3;
  }

  // routing_header_4_252 - computed: false, optional: true, required: false
  private _routingHeader4252?: boolean | cdktf.IResolvable; 
  public get routingHeader4252() {
    return this.getBooleanAttribute('routing_header_4_252');
  }
  public set routingHeader4252(value: boolean | cdktf.IResolvable) {
    this._routingHeader4252 = value;
  }
  public resetRoutingHeader4252() {
    this._routingHeader4252 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingHeader4252Input() {
    return this._routingHeader4252;
  }
}
export interface ZoneProtectionProfileL2SecGroupTagProtectionTags {
  /**
  * Enable this exclude list for Ethernet SGT protection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#enable ZoneProtectionProfile#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Name for the list of Security Group Tags (SGTs).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#name ZoneProtectionProfile#name}
  */
  readonly name: string;
  /**
  * The Layer 2 SGTs in headers of packets that you want to exclude (drop) when the SGT matches this list in the Zone Protection profile applied to a zone (range is 0 to 65,535).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#tag ZoneProtectionProfile#tag}
  */
  readonly tag: string;
}

export function zoneProtectionProfileL2SecGroupTagProtectionTagsToTerraform(struct?: ZoneProtectionProfileL2SecGroupTagProtectionTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    name: cdktf.stringToTerraform(struct!.name),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function zoneProtectionProfileL2SecGroupTagProtectionTagsToHclTerraform(struct?: ZoneProtectionProfileL2SecGroupTagProtectionTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZoneProtectionProfileL2SecGroupTagProtectionTagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ZoneProtectionProfileL2SecGroupTagProtectionTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZoneProtectionProfileL2SecGroupTagProtectionTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._name = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._name = value.name;
      this._tag = value.tag;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
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

  // tag - computed: false, optional: false, required: true
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}

export class ZoneProtectionProfileL2SecGroupTagProtectionTagsList extends cdktf.ComplexList {
  public internalValue? : ZoneProtectionProfileL2SecGroupTagProtectionTags[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ZoneProtectionProfileL2SecGroupTagProtectionTagsOutputReference {
    return new ZoneProtectionProfileL2SecGroupTagProtectionTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZoneProtectionProfileL2SecGroupTagProtection {
  /**
  * Tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#tags ZoneProtectionProfile#tags}
  */
  readonly tags?: ZoneProtectionProfileL2SecGroupTagProtectionTags[] | cdktf.IResolvable;
}

export function zoneProtectionProfileL2SecGroupTagProtectionToTerraform(struct?: ZoneProtectionProfileL2SecGroupTagProtection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tags: cdktf.listMapper(zoneProtectionProfileL2SecGroupTagProtectionTagsToTerraform, false)(struct!.tags),
  }
}


export function zoneProtectionProfileL2SecGroupTagProtectionToHclTerraform(struct?: ZoneProtectionProfileL2SecGroupTagProtection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tags: {
      value: cdktf.listMapperHcl(zoneProtectionProfileL2SecGroupTagProtectionTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "ZoneProtectionProfileL2SecGroupTagProtectionTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZoneProtectionProfileL2SecGroupTagProtectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZoneProtectionProfileL2SecGroupTagProtection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZoneProtectionProfileL2SecGroupTagProtection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tags.internalValue = value.tags;
    }
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new ZoneProtectionProfileL2SecGroupTagProtectionTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: ZoneProtectionProfileL2SecGroupTagProtectionTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}
export interface ZoneProtectionProfileNonIpProtocolProtocol {
  /**
  * Enable the Ethertype code on the list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#enable ZoneProtectionProfile#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Enter an Ethertype code (protocol) preceded by 0x to indicate hexadecimal (range is 0x0000 to 0xFFFF). A list can have a maximum of 64 Ethertypes. Some sources of Ethertype codes are:
  * * [IEEE hexadecimal Ethertype](https://www.iana.org/assignments/ieee-802-numbers/ieee-802-numbers.xhtml)
  * * [standards.ieee.org/develop/regauth/ethertype/eth.txt](https://standards-oui.ieee.org/ethertype/eth.txt)
  * * [www.cavebear.com/archive/cavebear/Ethernet/type.html](https://www.cavebear.com/archive/cavebear/Ethernet/type.html)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#ether_type ZoneProtectionProfile#ether_type}
  */
  readonly etherType: string;
  /**
  * Enter the protocol name that corresponds to the Ethertype code you are adding to the list. The firewall does not verify that the protocol name matches the Ethertype code but the Ethertype code does determine the protocol filter.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#name ZoneProtectionProfile#name}
  */
  readonly name: string;
}

export function zoneProtectionProfileNonIpProtocolProtocolToTerraform(struct?: ZoneProtectionProfileNonIpProtocolProtocol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    ether_type: cdktf.stringToTerraform(struct!.etherType),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function zoneProtectionProfileNonIpProtocolProtocolToHclTerraform(struct?: ZoneProtectionProfileNonIpProtocolProtocol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ether_type: {
      value: cdktf.stringToHclTerraform(struct!.etherType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZoneProtectionProfileNonIpProtocolProtocolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ZoneProtectionProfileNonIpProtocolProtocol | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._etherType !== undefined) {
      hasAnyValues = true;
      internalValueResult.etherType = this._etherType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZoneProtectionProfileNonIpProtocolProtocol | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._etherType = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._etherType = value.etherType;
      this._name = value.name;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // ether_type - computed: false, optional: false, required: true
  private _etherType?: string; 
  public get etherType() {
    return this.getStringAttribute('ether_type');
  }
  public set etherType(value: string) {
    this._etherType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get etherTypeInput() {
    return this._etherType;
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
}

export class ZoneProtectionProfileNonIpProtocolProtocolList extends cdktf.ComplexList {
  public internalValue? : ZoneProtectionProfileNonIpProtocolProtocol[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ZoneProtectionProfileNonIpProtocolProtocolOutputReference {
    return new ZoneProtectionProfileNonIpProtocolProtocolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZoneProtectionProfileNonIpProtocol {
  /**
  * Specify the type of list you are creating for protocol protection:
  * * Include List—Only the protocols on the list are allowed—in addition to IPv4 (0x0800), IPv6 (0x86DD), ARP (0x0806), and VLAN tagged frames (0x8100). All other protocols are implicitly denied (blocked).
  * * Exclude List—Only the protocols on the list are denied; all other protocols are implicitly allowed. You cannot exclude IPv4 (0x0800), IPv6 (0x86DD), ARP (0x0806), or VLAN tagged frames (0x8100).
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#list_type ZoneProtectionProfile#list_type}
  */
  readonly listType?: string;
  /**
  * Protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#protocol ZoneProtectionProfile#protocol}
  */
  readonly protocol?: ZoneProtectionProfileNonIpProtocolProtocol[] | cdktf.IResolvable;
}

export function zoneProtectionProfileNonIpProtocolToTerraform(struct?: ZoneProtectionProfileNonIpProtocol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    list_type: cdktf.stringToTerraform(struct!.listType),
    protocol: cdktf.listMapper(zoneProtectionProfileNonIpProtocolProtocolToTerraform, false)(struct!.protocol),
  }
}


export function zoneProtectionProfileNonIpProtocolToHclTerraform(struct?: ZoneProtectionProfileNonIpProtocol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    list_type: {
      value: cdktf.stringToHclTerraform(struct!.listType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.listMapperHcl(zoneProtectionProfileNonIpProtocolProtocolToHclTerraform, false)(struct!.protocol),
      isBlock: true,
      type: "list",
      storageClassType: "ZoneProtectionProfileNonIpProtocolProtocolList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZoneProtectionProfileNonIpProtocolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZoneProtectionProfileNonIpProtocol | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._listType !== undefined) {
      hasAnyValues = true;
      internalValueResult.listType = this._listType;
    }
    if (this._protocol?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZoneProtectionProfileNonIpProtocol | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._listType = undefined;
      this._protocol.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._listType = value.listType;
      this._protocol.internalValue = value.protocol;
    }
  }

  // list_type - computed: false, optional: true, required: false
  private _listType?: string; 
  public get listType() {
    return this.getStringAttribute('list_type');
  }
  public set listType(value: string) {
    this._listType = value;
  }
  public resetListType() {
    this._listType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listTypeInput() {
    return this._listType;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol = new ZoneProtectionProfileNonIpProtocolProtocolList(this, "protocol", false);
  public get protocol() {
    return this._protocol;
  }
  public putProtocol(value: ZoneProtectionProfileNonIpProtocolProtocol[] | cdktf.IResolvable) {
    this._protocol.internalValue = value;
  }
  public resetProtocol() {
    this._protocol.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol.internalValue;
  }
}
export interface ZoneProtectionProfileScanActionAlert {
}

export function zoneProtectionProfileScanActionAlertToTerraform(struct?: ZoneProtectionProfileScanActionAlert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function zoneProtectionProfileScanActionAlertToHclTerraform(struct?: ZoneProtectionProfileScanActionAlert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ZoneProtectionProfileScanActionAlertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZoneProtectionProfileScanActionAlert | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZoneProtectionProfileScanActionAlert | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface ZoneProtectionProfileScanActionAllow {
}

export function zoneProtectionProfileScanActionAllowToTerraform(struct?: ZoneProtectionProfileScanActionAllow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function zoneProtectionProfileScanActionAllowToHclTerraform(struct?: ZoneProtectionProfileScanActionAllow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ZoneProtectionProfileScanActionAllowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZoneProtectionProfileScanActionAllow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZoneProtectionProfileScanActionAllow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface ZoneProtectionProfileScanActionBlock {
}

export function zoneProtectionProfileScanActionBlockToTerraform(struct?: ZoneProtectionProfileScanActionBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function zoneProtectionProfileScanActionBlockToHclTerraform(struct?: ZoneProtectionProfileScanActionBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ZoneProtectionProfileScanActionBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZoneProtectionProfileScanActionBlock | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZoneProtectionProfileScanActionBlock | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface ZoneProtectionProfileScanActionBlockIp {
  /**
  * Duration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#duration ZoneProtectionProfile#duration}
  */
  readonly duration: number;
  /**
  * Track by
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#track_by ZoneProtectionProfile#track_by}
  */
  readonly trackBy: string;
}

export function zoneProtectionProfileScanActionBlockIpToTerraform(struct?: ZoneProtectionProfileScanActionBlockIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    track_by: cdktf.stringToTerraform(struct!.trackBy),
  }
}


export function zoneProtectionProfileScanActionBlockIpToHclTerraform(struct?: ZoneProtectionProfileScanActionBlockIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    track_by: {
      value: cdktf.stringToHclTerraform(struct!.trackBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZoneProtectionProfileScanActionBlockIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZoneProtectionProfileScanActionBlockIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._trackBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackBy = this._trackBy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZoneProtectionProfileScanActionBlockIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duration = undefined;
      this._trackBy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duration = value.duration;
      this._trackBy = value.trackBy;
    }
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // track_by - computed: false, optional: false, required: true
  private _trackBy?: string; 
  public get trackBy() {
    return this.getStringAttribute('track_by');
  }
  public set trackBy(value: string) {
    this._trackBy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trackByInput() {
    return this._trackBy;
  }
}
export interface ZoneProtectionProfileScanAction {
  /**
  * Alert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#alert ZoneProtectionProfile#alert}
  */
  readonly alert?: ZoneProtectionProfileScanActionAlert;
  /**
  * Allow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#allow ZoneProtectionProfile#allow}
  */
  readonly allow?: ZoneProtectionProfileScanActionAllow;
  /**
  * Block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#block ZoneProtectionProfile#block}
  */
  readonly block?: ZoneProtectionProfileScanActionBlock;
  /**
  * Block ip
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#block_ip ZoneProtectionProfile#block_ip}
  */
  readonly blockIp?: ZoneProtectionProfileScanActionBlockIp;
}

export function zoneProtectionProfileScanActionToTerraform(struct?: ZoneProtectionProfileScanAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert: zoneProtectionProfileScanActionAlertToTerraform(struct!.alert),
    allow: zoneProtectionProfileScanActionAllowToTerraform(struct!.allow),
    block: zoneProtectionProfileScanActionBlockToTerraform(struct!.block),
    block_ip: zoneProtectionProfileScanActionBlockIpToTerraform(struct!.blockIp),
  }
}


export function zoneProtectionProfileScanActionToHclTerraform(struct?: ZoneProtectionProfileScanAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert: {
      value: zoneProtectionProfileScanActionAlertToHclTerraform(struct!.alert),
      isBlock: true,
      type: "struct",
      storageClassType: "ZoneProtectionProfileScanActionAlert",
    },
    allow: {
      value: zoneProtectionProfileScanActionAllowToHclTerraform(struct!.allow),
      isBlock: true,
      type: "struct",
      storageClassType: "ZoneProtectionProfileScanActionAllow",
    },
    block: {
      value: zoneProtectionProfileScanActionBlockToHclTerraform(struct!.block),
      isBlock: true,
      type: "struct",
      storageClassType: "ZoneProtectionProfileScanActionBlock",
    },
    block_ip: {
      value: zoneProtectionProfileScanActionBlockIpToHclTerraform(struct!.blockIp),
      isBlock: true,
      type: "struct",
      storageClassType: "ZoneProtectionProfileScanActionBlockIp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZoneProtectionProfileScanActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZoneProtectionProfileScanAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alert = this._alert?.internalValue;
    }
    if (this._allow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allow = this._allow?.internalValue;
    }
    if (this._block?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.block = this._block?.internalValue;
    }
    if (this._blockIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockIp = this._blockIp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZoneProtectionProfileScanAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alert.internalValue = undefined;
      this._allow.internalValue = undefined;
      this._block.internalValue = undefined;
      this._blockIp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alert.internalValue = value.alert;
      this._allow.internalValue = value.allow;
      this._block.internalValue = value.block;
      this._blockIp.internalValue = value.blockIp;
    }
  }

  // alert - computed: false, optional: true, required: false
  private _alert = new ZoneProtectionProfileScanActionAlertOutputReference(this, "alert");
  public get alert() {
    return this._alert;
  }
  public putAlert(value: ZoneProtectionProfileScanActionAlert) {
    this._alert.internalValue = value;
  }
  public resetAlert() {
    this._alert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertInput() {
    return this._alert.internalValue;
  }

  // allow - computed: false, optional: true, required: false
  private _allow = new ZoneProtectionProfileScanActionAllowOutputReference(this, "allow");
  public get allow() {
    return this._allow;
  }
  public putAllow(value: ZoneProtectionProfileScanActionAllow) {
    this._allow.internalValue = value;
  }
  public resetAllow() {
    this._allow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow.internalValue;
  }

  // block - computed: false, optional: true, required: false
  private _block = new ZoneProtectionProfileScanActionBlockOutputReference(this, "block");
  public get block() {
    return this._block;
  }
  public putBlock(value: ZoneProtectionProfileScanActionBlock) {
    this._block.internalValue = value;
  }
  public resetBlock() {
    this._block.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockInput() {
    return this._block.internalValue;
  }

  // block_ip - computed: false, optional: true, required: false
  private _blockIp = new ZoneProtectionProfileScanActionBlockIpOutputReference(this, "block_ip");
  public get blockIp() {
    return this._blockIp;
  }
  public putBlockIp(value: ZoneProtectionProfileScanActionBlockIp) {
    this._blockIp.internalValue = value;
  }
  public resetBlockIp() {
    this._blockIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockIpInput() {
    return this._blockIp.internalValue;
  }
}
export interface ZoneProtectionProfileScan {
  /**
  * Action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#action ZoneProtectionProfile#action}
  */
  readonly action?: ZoneProtectionProfileScanAction;
  /**
  * Interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#interval ZoneProtectionProfile#interval}
  */
  readonly interval?: number;
  /**
  * The threat ID number.  These can be found in [Palo Alto Networks ThreatVault](https://threatvault.paloaltonetworks.com).
  * * "8001" - TCP Port Scan
  * * "8002" - Host Sweep
  * * "8003" - UDP Port Scan
  * * "8006" - Port Scan
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#name ZoneProtectionProfile#name}
  */
  readonly name: string;
  /**
  * Threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#threshold ZoneProtectionProfile#threshold}
  */
  readonly threshold?: number;
}

export function zoneProtectionProfileScanToTerraform(struct?: ZoneProtectionProfileScan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: zoneProtectionProfileScanActionToTerraform(struct!.action),
    interval: cdktf.numberToTerraform(struct!.interval),
    name: cdktf.stringToTerraform(struct!.name),
    threshold: cdktf.numberToTerraform(struct!.threshold),
  }
}


export function zoneProtectionProfileScanToHclTerraform(struct?: ZoneProtectionProfileScan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: zoneProtectionProfileScanActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "struct",
      storageClassType: "ZoneProtectionProfileScanAction",
    },
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZoneProtectionProfileScanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ZoneProtectionProfileScan | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZoneProtectionProfileScan | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action.internalValue = undefined;
      this._interval = undefined;
      this._name = undefined;
      this._threshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action.internalValue = value.action;
      this._interval = value.interval;
      this._name = value.name;
      this._threshold = value.threshold;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action = new ZoneProtectionProfileScanActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: ZoneProtectionProfileScanAction) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
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

  // threshold - computed: false, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}

export class ZoneProtectionProfileScanList extends cdktf.ComplexList {
  public internalValue? : ZoneProtectionProfileScan[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ZoneProtectionProfileScanOutputReference {
    return new ZoneProtectionProfileScanOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZoneProtectionProfileScanWhiteListStruct {
  /**
  * Ipv4
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#ipv4 ZoneProtectionProfile#ipv4}
  */
  readonly ipv4?: string;
  /**
  * Ipv6
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#ipv6 ZoneProtectionProfile#ipv6}
  */
  readonly ipv6?: string;
  /**
  * A descriptive name for the address to exclude.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#name ZoneProtectionProfile#name}
  */
  readonly name: string;
}

export function zoneProtectionProfileScanWhiteListStructToTerraform(struct?: ZoneProtectionProfileScanWhiteListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.stringToTerraform(struct!.ipv4),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function zoneProtectionProfileScanWhiteListStructToHclTerraform(struct?: ZoneProtectionProfileScanWhiteListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: cdktf.stringToHclTerraform(struct!.ipv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZoneProtectionProfileScanWhiteListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ZoneProtectionProfileScanWhiteListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZoneProtectionProfileScanWhiteListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4 = undefined;
      this._ipv6 = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4 = value.ipv4;
      this._ipv6 = value.ipv6;
      this._name = value.name;
    }
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4?: string; 
  public get ipv4() {
    return this.getStringAttribute('ipv4');
  }
  public set ipv4(value: string) {
    this._ipv4 = value;
  }
  public resetIpv4() {
    this._ipv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
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
}

export class ZoneProtectionProfileScanWhiteListStructList extends cdktf.ComplexList {
  public internalValue? : ZoneProtectionProfileScanWhiteListStruct[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ZoneProtectionProfileScanWhiteListStructOutputReference {
    return new ZoneProtectionProfileScanWhiteListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile scm_zone_protection_profile}
*/
export class ZoneProtectionProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_zone_protection_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZoneProtectionProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZoneProtectionProfile to import
  * @param importFromId The id of the existing ZoneProtectionProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZoneProtectionProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_zone_protection_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/zone_protection_profile scm_zone_protection_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZoneProtectionProfileConfig
  */
  public constructor(scope: Construct, id: string, config: ZoneProtectionProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_zone_protection_profile',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.6',
        providerVersionConstraint: '1.0.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._asymmetricPath = config.asymmetricPath;
    this._description = config.description;
    this._device = config.device;
    this._discardIcmpEmbeddedError = config.discardIcmpEmbeddedError;
    this._flood.internalValue = config.flood;
    this._folder = config.folder;
    this._fragmentedTrafficDiscard = config.fragmentedTrafficDiscard;
    this._icmpFragDiscard = config.icmpFragDiscard;
    this._icmpLargePacketDiscard = config.icmpLargePacketDiscard;
    this._icmpPingZeroIdDiscard = config.icmpPingZeroIdDiscard;
    this._ipv6.internalValue = config.ipv6;
    this._l2SecGroupTagProtection.internalValue = config.l2SecGroupTagProtection;
    this._looseSourceRoutingDiscard = config.looseSourceRoutingDiscard;
    this._malformedOptionDiscard = config.malformedOptionDiscard;
    this._mismatchedOverlappingTcpSegmentDiscard = config.mismatchedOverlappingTcpSegmentDiscard;
    this._mptcpOptionStrip = config.mptcpOptionStrip;
    this._name = config.name;
    this._nonIpProtocol.internalValue = config.nonIpProtocol;
    this._recordRouteDiscard = config.recordRouteDiscard;
    this._rejectNonSynTcp = config.rejectNonSynTcp;
    this._scan.internalValue = config.scan;
    this._scanWhiteList.internalValue = config.scanWhiteList;
    this._securityDiscard = config.securityDiscard;
    this._snippet = config.snippet;
    this._spoofedIpDiscard = config.spoofedIpDiscard;
    this._streamIdDiscard = config.streamIdDiscard;
    this._strictIpCheck = config.strictIpCheck;
    this._strictSourceRoutingDiscard = config.strictSourceRoutingDiscard;
    this._suppressIcmpNeedfrag = config.suppressIcmpNeedfrag;
    this._suppressIcmpTimeexceeded = config.suppressIcmpTimeexceeded;
    this._tcpFastOpenAndDataStrip = config.tcpFastOpenAndDataStrip;
    this._tcpHandshakeDiscard = config.tcpHandshakeDiscard;
    this._tcpSynWithDataDiscard = config.tcpSynWithDataDiscard;
    this._tcpSynackWithDataDiscard = config.tcpSynackWithDataDiscard;
    this._tcpTimestampStrip = config.tcpTimestampStrip;
    this._timestampDiscard = config.timestampDiscard;
    this._unknownOptionDiscard = config.unknownOptionDiscard;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // asymmetric_path - computed: false, optional: true, required: false
  private _asymmetricPath?: string; 
  public get asymmetricPath() {
    return this.getStringAttribute('asymmetric_path');
  }
  public set asymmetricPath(value: string) {
    this._asymmetricPath = value;
  }
  public resetAsymmetricPath() {
    this._asymmetricPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asymmetricPathInput() {
    return this._asymmetricPath;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // discard_icmp_embedded_error - computed: false, optional: true, required: false
  private _discardIcmpEmbeddedError?: boolean | cdktf.IResolvable; 
  public get discardIcmpEmbeddedError() {
    return this.getBooleanAttribute('discard_icmp_embedded_error');
  }
  public set discardIcmpEmbeddedError(value: boolean | cdktf.IResolvable) {
    this._discardIcmpEmbeddedError = value;
  }
  public resetDiscardIcmpEmbeddedError() {
    this._discardIcmpEmbeddedError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discardIcmpEmbeddedErrorInput() {
    return this._discardIcmpEmbeddedError;
  }

  // flood - computed: false, optional: true, required: false
  private _flood = new ZoneProtectionProfileFloodOutputReference(this, "flood");
  public get flood() {
    return this._flood;
  }
  public putFlood(value: ZoneProtectionProfileFlood) {
    this._flood.internalValue = value;
  }
  public resetFlood() {
    this._flood.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floodInput() {
    return this._flood.internalValue;
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // fragmented_traffic_discard - computed: false, optional: true, required: false
  private _fragmentedTrafficDiscard?: boolean | cdktf.IResolvable; 
  public get fragmentedTrafficDiscard() {
    return this.getBooleanAttribute('fragmented_traffic_discard');
  }
  public set fragmentedTrafficDiscard(value: boolean | cdktf.IResolvable) {
    this._fragmentedTrafficDiscard = value;
  }
  public resetFragmentedTrafficDiscard() {
    this._fragmentedTrafficDiscard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragmentedTrafficDiscardInput() {
    return this._fragmentedTrafficDiscard;
  }

  // icmp_frag_discard - computed: false, optional: true, required: false
  private _icmpFragDiscard?: boolean | cdktf.IResolvable; 
  public get icmpFragDiscard() {
    return this.getBooleanAttribute('icmp_frag_discard');
  }
  public set icmpFragDiscard(value: boolean | cdktf.IResolvable) {
    this._icmpFragDiscard = value;
  }
  public resetIcmpFragDiscard() {
    this._icmpFragDiscard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpFragDiscardInput() {
    return this._icmpFragDiscard;
  }

  // icmp_large_packet_discard - computed: false, optional: true, required: false
  private _icmpLargePacketDiscard?: boolean | cdktf.IResolvable; 
  public get icmpLargePacketDiscard() {
    return this.getBooleanAttribute('icmp_large_packet_discard');
  }
  public set icmpLargePacketDiscard(value: boolean | cdktf.IResolvable) {
    this._icmpLargePacketDiscard = value;
  }
  public resetIcmpLargePacketDiscard() {
    this._icmpLargePacketDiscard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpLargePacketDiscardInput() {
    return this._icmpLargePacketDiscard;
  }

  // icmp_ping_zero_id_discard - computed: false, optional: true, required: false
  private _icmpPingZeroIdDiscard?: boolean | cdktf.IResolvable; 
  public get icmpPingZeroIdDiscard() {
    return this.getBooleanAttribute('icmp_ping_zero_id_discard');
  }
  public set icmpPingZeroIdDiscard(value: boolean | cdktf.IResolvable) {
    this._icmpPingZeroIdDiscard = value;
  }
  public resetIcmpPingZeroIdDiscard() {
    this._icmpPingZeroIdDiscard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpPingZeroIdDiscardInput() {
    return this._icmpPingZeroIdDiscard;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new ZoneProtectionProfileIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: ZoneProtectionProfileIpv6) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }

  // l2_sec_group_tag_protection - computed: false, optional: true, required: false
  private _l2SecGroupTagProtection = new ZoneProtectionProfileL2SecGroupTagProtectionOutputReference(this, "l2_sec_group_tag_protection");
  public get l2SecGroupTagProtection() {
    return this._l2SecGroupTagProtection;
  }
  public putL2SecGroupTagProtection(value: ZoneProtectionProfileL2SecGroupTagProtection) {
    this._l2SecGroupTagProtection.internalValue = value;
  }
  public resetL2SecGroupTagProtection() {
    this._l2SecGroupTagProtection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2SecGroupTagProtectionInput() {
    return this._l2SecGroupTagProtection.internalValue;
  }

  // loose_source_routing_discard - computed: false, optional: true, required: false
  private _looseSourceRoutingDiscard?: boolean | cdktf.IResolvable; 
  public get looseSourceRoutingDiscard() {
    return this.getBooleanAttribute('loose_source_routing_discard');
  }
  public set looseSourceRoutingDiscard(value: boolean | cdktf.IResolvable) {
    this._looseSourceRoutingDiscard = value;
  }
  public resetLooseSourceRoutingDiscard() {
    this._looseSourceRoutingDiscard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get looseSourceRoutingDiscardInput() {
    return this._looseSourceRoutingDiscard;
  }

  // malformed_option_discard - computed: false, optional: true, required: false
  private _malformedOptionDiscard?: boolean | cdktf.IResolvable; 
  public get malformedOptionDiscard() {
    return this.getBooleanAttribute('malformed_option_discard');
  }
  public set malformedOptionDiscard(value: boolean | cdktf.IResolvable) {
    this._malformedOptionDiscard = value;
  }
  public resetMalformedOptionDiscard() {
    this._malformedOptionDiscard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedOptionDiscardInput() {
    return this._malformedOptionDiscard;
  }

  // mismatched_overlapping_tcp_segment_discard - computed: false, optional: true, required: false
  private _mismatchedOverlappingTcpSegmentDiscard?: boolean | cdktf.IResolvable; 
  public get mismatchedOverlappingTcpSegmentDiscard() {
    return this.getBooleanAttribute('mismatched_overlapping_tcp_segment_discard');
  }
  public set mismatchedOverlappingTcpSegmentDiscard(value: boolean | cdktf.IResolvable) {
    this._mismatchedOverlappingTcpSegmentDiscard = value;
  }
  public resetMismatchedOverlappingTcpSegmentDiscard() {
    this._mismatchedOverlappingTcpSegmentDiscard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mismatchedOverlappingTcpSegmentDiscardInput() {
    return this._mismatchedOverlappingTcpSegmentDiscard;
  }

  // mptcp_option_strip - computed: true, optional: true, required: false
  private _mptcpOptionStrip?: string; 
  public get mptcpOptionStrip() {
    return this.getStringAttribute('mptcp_option_strip');
  }
  public set mptcpOptionStrip(value: string) {
    this._mptcpOptionStrip = value;
  }
  public resetMptcpOptionStrip() {
    this._mptcpOptionStrip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mptcpOptionStripInput() {
    return this._mptcpOptionStrip;
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

  // non_ip_protocol - computed: false, optional: true, required: false
  private _nonIpProtocol = new ZoneProtectionProfileNonIpProtocolOutputReference(this, "non_ip_protocol");
  public get nonIpProtocol() {
    return this._nonIpProtocol;
  }
  public putNonIpProtocol(value: ZoneProtectionProfileNonIpProtocol) {
    this._nonIpProtocol.internalValue = value;
  }
  public resetNonIpProtocol() {
    this._nonIpProtocol.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonIpProtocolInput() {
    return this._nonIpProtocol.internalValue;
  }

  // record_route_discard - computed: false, optional: true, required: false
  private _recordRouteDiscard?: boolean | cdktf.IResolvable; 
  public get recordRouteDiscard() {
    return this.getBooleanAttribute('record_route_discard');
  }
  public set recordRouteDiscard(value: boolean | cdktf.IResolvable) {
    this._recordRouteDiscard = value;
  }
  public resetRecordRouteDiscard() {
    this._recordRouteDiscard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordRouteDiscardInput() {
    return this._recordRouteDiscard;
  }

  // reject_non_syn_tcp - computed: false, optional: true, required: false
  private _rejectNonSynTcp?: string; 
  public get rejectNonSynTcp() {
    return this.getStringAttribute('reject_non_syn_tcp');
  }
  public set rejectNonSynTcp(value: string) {
    this._rejectNonSynTcp = value;
  }
  public resetRejectNonSynTcp() {
    this._rejectNonSynTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rejectNonSynTcpInput() {
    return this._rejectNonSynTcp;
  }

  // scan - computed: false, optional: true, required: false
  private _scan = new ZoneProtectionProfileScanList(this, "scan", false);
  public get scan() {
    return this._scan;
  }
  public putScan(value: ZoneProtectionProfileScan[] | cdktf.IResolvable) {
    this._scan.internalValue = value;
  }
  public resetScan() {
    this._scan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanInput() {
    return this._scan.internalValue;
  }

  // scan_white_list - computed: false, optional: true, required: false
  private _scanWhiteList = new ZoneProtectionProfileScanWhiteListStructList(this, "scan_white_list", false);
  public get scanWhiteList() {
    return this._scanWhiteList;
  }
  public putScanWhiteList(value: ZoneProtectionProfileScanWhiteListStruct[] | cdktf.IResolvable) {
    this._scanWhiteList.internalValue = value;
  }
  public resetScanWhiteList() {
    this._scanWhiteList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanWhiteListInput() {
    return this._scanWhiteList.internalValue;
  }

  // security_discard - computed: false, optional: true, required: false
  private _securityDiscard?: boolean | cdktf.IResolvable; 
  public get securityDiscard() {
    return this.getBooleanAttribute('security_discard');
  }
  public set securityDiscard(value: boolean | cdktf.IResolvable) {
    this._securityDiscard = value;
  }
  public resetSecurityDiscard() {
    this._securityDiscard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityDiscardInput() {
    return this._securityDiscard;
  }

  // snippet - computed: false, optional: true, required: false
  private _snippet?: string; 
  public get snippet() {
    return this.getStringAttribute('snippet');
  }
  public set snippet(value: string) {
    this._snippet = value;
  }
  public resetSnippet() {
    this._snippet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snippetInput() {
    return this._snippet;
  }

  // spoofed_ip_discard - computed: false, optional: true, required: false
  private _spoofedIpDiscard?: boolean | cdktf.IResolvable; 
  public get spoofedIpDiscard() {
    return this.getBooleanAttribute('spoofed_ip_discard');
  }
  public set spoofedIpDiscard(value: boolean | cdktf.IResolvable) {
    this._spoofedIpDiscard = value;
  }
  public resetSpoofedIpDiscard() {
    this._spoofedIpDiscard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spoofedIpDiscardInput() {
    return this._spoofedIpDiscard;
  }

  // stream_id_discard - computed: false, optional: true, required: false
  private _streamIdDiscard?: boolean | cdktf.IResolvable; 
  public get streamIdDiscard() {
    return this.getBooleanAttribute('stream_id_discard');
  }
  public set streamIdDiscard(value: boolean | cdktf.IResolvable) {
    this._streamIdDiscard = value;
  }
  public resetStreamIdDiscard() {
    this._streamIdDiscard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamIdDiscardInput() {
    return this._streamIdDiscard;
  }

  // strict_ip_check - computed: false, optional: true, required: false
  private _strictIpCheck?: boolean | cdktf.IResolvable; 
  public get strictIpCheck() {
    return this.getBooleanAttribute('strict_ip_check');
  }
  public set strictIpCheck(value: boolean | cdktf.IResolvable) {
    this._strictIpCheck = value;
  }
  public resetStrictIpCheck() {
    this._strictIpCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictIpCheckInput() {
    return this._strictIpCheck;
  }

  // strict_source_routing_discard - computed: false, optional: true, required: false
  private _strictSourceRoutingDiscard?: boolean | cdktf.IResolvable; 
  public get strictSourceRoutingDiscard() {
    return this.getBooleanAttribute('strict_source_routing_discard');
  }
  public set strictSourceRoutingDiscard(value: boolean | cdktf.IResolvable) {
    this._strictSourceRoutingDiscard = value;
  }
  public resetStrictSourceRoutingDiscard() {
    this._strictSourceRoutingDiscard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictSourceRoutingDiscardInput() {
    return this._strictSourceRoutingDiscard;
  }

  // suppress_icmp_needfrag - computed: false, optional: true, required: false
  private _suppressIcmpNeedfrag?: boolean | cdktf.IResolvable; 
  public get suppressIcmpNeedfrag() {
    return this.getBooleanAttribute('suppress_icmp_needfrag');
  }
  public set suppressIcmpNeedfrag(value: boolean | cdktf.IResolvable) {
    this._suppressIcmpNeedfrag = value;
  }
  public resetSuppressIcmpNeedfrag() {
    this._suppressIcmpNeedfrag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressIcmpNeedfragInput() {
    return this._suppressIcmpNeedfrag;
  }

  // suppress_icmp_timeexceeded - computed: false, optional: true, required: false
  private _suppressIcmpTimeexceeded?: boolean | cdktf.IResolvable; 
  public get suppressIcmpTimeexceeded() {
    return this.getBooleanAttribute('suppress_icmp_timeexceeded');
  }
  public set suppressIcmpTimeexceeded(value: boolean | cdktf.IResolvable) {
    this._suppressIcmpTimeexceeded = value;
  }
  public resetSuppressIcmpTimeexceeded() {
    this._suppressIcmpTimeexceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressIcmpTimeexceededInput() {
    return this._suppressIcmpTimeexceeded;
  }

  // tcp_fast_open_and_data_strip - computed: false, optional: true, required: false
  private _tcpFastOpenAndDataStrip?: boolean | cdktf.IResolvable; 
  public get tcpFastOpenAndDataStrip() {
    return this.getBooleanAttribute('tcp_fast_open_and_data_strip');
  }
  public set tcpFastOpenAndDataStrip(value: boolean | cdktf.IResolvable) {
    this._tcpFastOpenAndDataStrip = value;
  }
  public resetTcpFastOpenAndDataStrip() {
    this._tcpFastOpenAndDataStrip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFastOpenAndDataStripInput() {
    return this._tcpFastOpenAndDataStrip;
  }

  // tcp_handshake_discard - computed: false, optional: true, required: false
  private _tcpHandshakeDiscard?: boolean | cdktf.IResolvable; 
  public get tcpHandshakeDiscard() {
    return this.getBooleanAttribute('tcp_handshake_discard');
  }
  public set tcpHandshakeDiscard(value: boolean | cdktf.IResolvable) {
    this._tcpHandshakeDiscard = value;
  }
  public resetTcpHandshakeDiscard() {
    this._tcpHandshakeDiscard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpHandshakeDiscardInput() {
    return this._tcpHandshakeDiscard;
  }

  // tcp_syn_with_data_discard - computed: true, optional: true, required: false
  private _tcpSynWithDataDiscard?: boolean | cdktf.IResolvable; 
  public get tcpSynWithDataDiscard() {
    return this.getBooleanAttribute('tcp_syn_with_data_discard');
  }
  public set tcpSynWithDataDiscard(value: boolean | cdktf.IResolvable) {
    this._tcpSynWithDataDiscard = value;
  }
  public resetTcpSynWithDataDiscard() {
    this._tcpSynWithDataDiscard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSynWithDataDiscardInput() {
    return this._tcpSynWithDataDiscard;
  }

  // tcp_synack_with_data_discard - computed: true, optional: true, required: false
  private _tcpSynackWithDataDiscard?: boolean | cdktf.IResolvable; 
  public get tcpSynackWithDataDiscard() {
    return this.getBooleanAttribute('tcp_synack_with_data_discard');
  }
  public set tcpSynackWithDataDiscard(value: boolean | cdktf.IResolvable) {
    this._tcpSynackWithDataDiscard = value;
  }
  public resetTcpSynackWithDataDiscard() {
    this._tcpSynackWithDataDiscard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSynackWithDataDiscardInput() {
    return this._tcpSynackWithDataDiscard;
  }

  // tcp_timestamp_strip - computed: false, optional: true, required: false
  private _tcpTimestampStrip?: boolean | cdktf.IResolvable; 
  public get tcpTimestampStrip() {
    return this.getBooleanAttribute('tcp_timestamp_strip');
  }
  public set tcpTimestampStrip(value: boolean | cdktf.IResolvable) {
    this._tcpTimestampStrip = value;
  }
  public resetTcpTimestampStrip() {
    this._tcpTimestampStrip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpTimestampStripInput() {
    return this._tcpTimestampStrip;
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // timestamp_discard - computed: false, optional: true, required: false
  private _timestampDiscard?: boolean | cdktf.IResolvable; 
  public get timestampDiscard() {
    return this.getBooleanAttribute('timestamp_discard');
  }
  public set timestampDiscard(value: boolean | cdktf.IResolvable) {
    this._timestampDiscard = value;
  }
  public resetTimestampDiscard() {
    this._timestampDiscard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampDiscardInput() {
    return this._timestampDiscard;
  }

  // unknown_option_discard - computed: false, optional: true, required: false
  private _unknownOptionDiscard?: boolean | cdktf.IResolvable; 
  public get unknownOptionDiscard() {
    return this.getBooleanAttribute('unknown_option_discard');
  }
  public set unknownOptionDiscard(value: boolean | cdktf.IResolvable) {
    this._unknownOptionDiscard = value;
  }
  public resetUnknownOptionDiscard() {
    this._unknownOptionDiscard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownOptionDiscardInput() {
    return this._unknownOptionDiscard;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      asymmetric_path: cdktf.stringToTerraform(this._asymmetricPath),
      description: cdktf.stringToTerraform(this._description),
      device: cdktf.stringToTerraform(this._device),
      discard_icmp_embedded_error: cdktf.booleanToTerraform(this._discardIcmpEmbeddedError),
      flood: zoneProtectionProfileFloodToTerraform(this._flood.internalValue),
      folder: cdktf.stringToTerraform(this._folder),
      fragmented_traffic_discard: cdktf.booleanToTerraform(this._fragmentedTrafficDiscard),
      icmp_frag_discard: cdktf.booleanToTerraform(this._icmpFragDiscard),
      icmp_large_packet_discard: cdktf.booleanToTerraform(this._icmpLargePacketDiscard),
      icmp_ping_zero_id_discard: cdktf.booleanToTerraform(this._icmpPingZeroIdDiscard),
      ipv6: zoneProtectionProfileIpv6ToTerraform(this._ipv6.internalValue),
      l2_sec_group_tag_protection: zoneProtectionProfileL2SecGroupTagProtectionToTerraform(this._l2SecGroupTagProtection.internalValue),
      loose_source_routing_discard: cdktf.booleanToTerraform(this._looseSourceRoutingDiscard),
      malformed_option_discard: cdktf.booleanToTerraform(this._malformedOptionDiscard),
      mismatched_overlapping_tcp_segment_discard: cdktf.booleanToTerraform(this._mismatchedOverlappingTcpSegmentDiscard),
      mptcp_option_strip: cdktf.stringToTerraform(this._mptcpOptionStrip),
      name: cdktf.stringToTerraform(this._name),
      non_ip_protocol: zoneProtectionProfileNonIpProtocolToTerraform(this._nonIpProtocol.internalValue),
      record_route_discard: cdktf.booleanToTerraform(this._recordRouteDiscard),
      reject_non_syn_tcp: cdktf.stringToTerraform(this._rejectNonSynTcp),
      scan: cdktf.listMapper(zoneProtectionProfileScanToTerraform, false)(this._scan.internalValue),
      scan_white_list: cdktf.listMapper(zoneProtectionProfileScanWhiteListStructToTerraform, false)(this._scanWhiteList.internalValue),
      security_discard: cdktf.booleanToTerraform(this._securityDiscard),
      snippet: cdktf.stringToTerraform(this._snippet),
      spoofed_ip_discard: cdktf.booleanToTerraform(this._spoofedIpDiscard),
      stream_id_discard: cdktf.booleanToTerraform(this._streamIdDiscard),
      strict_ip_check: cdktf.booleanToTerraform(this._strictIpCheck),
      strict_source_routing_discard: cdktf.booleanToTerraform(this._strictSourceRoutingDiscard),
      suppress_icmp_needfrag: cdktf.booleanToTerraform(this._suppressIcmpNeedfrag),
      suppress_icmp_timeexceeded: cdktf.booleanToTerraform(this._suppressIcmpTimeexceeded),
      tcp_fast_open_and_data_strip: cdktf.booleanToTerraform(this._tcpFastOpenAndDataStrip),
      tcp_handshake_discard: cdktf.booleanToTerraform(this._tcpHandshakeDiscard),
      tcp_syn_with_data_discard: cdktf.booleanToTerraform(this._tcpSynWithDataDiscard),
      tcp_synack_with_data_discard: cdktf.booleanToTerraform(this._tcpSynackWithDataDiscard),
      tcp_timestamp_strip: cdktf.booleanToTerraform(this._tcpTimestampStrip),
      timestamp_discard: cdktf.booleanToTerraform(this._timestampDiscard),
      unknown_option_discard: cdktf.booleanToTerraform(this._unknownOptionDiscard),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      asymmetric_path: {
        value: cdktf.stringToHclTerraform(this._asymmetricPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      discard_icmp_embedded_error: {
        value: cdktf.booleanToHclTerraform(this._discardIcmpEmbeddedError),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      flood: {
        value: zoneProtectionProfileFloodToHclTerraform(this._flood.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ZoneProtectionProfileFlood",
      },
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fragmented_traffic_discard: {
        value: cdktf.booleanToHclTerraform(this._fragmentedTrafficDiscard),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      icmp_frag_discard: {
        value: cdktf.booleanToHclTerraform(this._icmpFragDiscard),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      icmp_large_packet_discard: {
        value: cdktf.booleanToHclTerraform(this._icmpLargePacketDiscard),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      icmp_ping_zero_id_discard: {
        value: cdktf.booleanToHclTerraform(this._icmpPingZeroIdDiscard),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv6: {
        value: zoneProtectionProfileIpv6ToHclTerraform(this._ipv6.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ZoneProtectionProfileIpv6",
      },
      l2_sec_group_tag_protection: {
        value: zoneProtectionProfileL2SecGroupTagProtectionToHclTerraform(this._l2SecGroupTagProtection.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ZoneProtectionProfileL2SecGroupTagProtection",
      },
      loose_source_routing_discard: {
        value: cdktf.booleanToHclTerraform(this._looseSourceRoutingDiscard),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      malformed_option_discard: {
        value: cdktf.booleanToHclTerraform(this._malformedOptionDiscard),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mismatched_overlapping_tcp_segment_discard: {
        value: cdktf.booleanToHclTerraform(this._mismatchedOverlappingTcpSegmentDiscard),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mptcp_option_strip: {
        value: cdktf.stringToHclTerraform(this._mptcpOptionStrip),
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
      non_ip_protocol: {
        value: zoneProtectionProfileNonIpProtocolToHclTerraform(this._nonIpProtocol.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ZoneProtectionProfileNonIpProtocol",
      },
      record_route_discard: {
        value: cdktf.booleanToHclTerraform(this._recordRouteDiscard),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      reject_non_syn_tcp: {
        value: cdktf.stringToHclTerraform(this._rejectNonSynTcp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scan: {
        value: cdktf.listMapperHcl(zoneProtectionProfileScanToHclTerraform, false)(this._scan.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ZoneProtectionProfileScanList",
      },
      scan_white_list: {
        value: cdktf.listMapperHcl(zoneProtectionProfileScanWhiteListStructToHclTerraform, false)(this._scanWhiteList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ZoneProtectionProfileScanWhiteListStructList",
      },
      security_discard: {
        value: cdktf.booleanToHclTerraform(this._securityDiscard),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      snippet: {
        value: cdktf.stringToHclTerraform(this._snippet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spoofed_ip_discard: {
        value: cdktf.booleanToHclTerraform(this._spoofedIpDiscard),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      stream_id_discard: {
        value: cdktf.booleanToHclTerraform(this._streamIdDiscard),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      strict_ip_check: {
        value: cdktf.booleanToHclTerraform(this._strictIpCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      strict_source_routing_discard: {
        value: cdktf.booleanToHclTerraform(this._strictSourceRoutingDiscard),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      suppress_icmp_needfrag: {
        value: cdktf.booleanToHclTerraform(this._suppressIcmpNeedfrag),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      suppress_icmp_timeexceeded: {
        value: cdktf.booleanToHclTerraform(this._suppressIcmpTimeexceeded),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tcp_fast_open_and_data_strip: {
        value: cdktf.booleanToHclTerraform(this._tcpFastOpenAndDataStrip),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tcp_handshake_discard: {
        value: cdktf.booleanToHclTerraform(this._tcpHandshakeDiscard),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tcp_syn_with_data_discard: {
        value: cdktf.booleanToHclTerraform(this._tcpSynWithDataDiscard),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tcp_synack_with_data_discard: {
        value: cdktf.booleanToHclTerraform(this._tcpSynackWithDataDiscard),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tcp_timestamp_strip: {
        value: cdktf.booleanToHclTerraform(this._tcpTimestampStrip),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timestamp_discard: {
        value: cdktf.booleanToHclTerraform(this._timestampDiscard),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      unknown_option_discard: {
        value: cdktf.booleanToHclTerraform(this._unknownOptionDiscard),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
