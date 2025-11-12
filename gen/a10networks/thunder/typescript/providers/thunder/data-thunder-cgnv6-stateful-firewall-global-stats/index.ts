// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_stateful_firewall_global_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderCgnv6StatefulFirewallGlobalStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_stateful_firewall_global_stats#id DataThunderCgnv6StatefulFirewallGlobalStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_stateful_firewall_global_stats#stats DataThunderCgnv6StatefulFirewallGlobalStats#stats}
  */
  readonly stats?: DataThunderCgnv6StatefulFirewallGlobalStatsStats;
}
export interface DataThunderCgnv6StatefulFirewallGlobalStatsStats {
  /**
  * Endpnt-Independent Filter Matched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_stateful_firewall_global_stats#eif_process DataThunderCgnv6StatefulFirewallGlobalStats#eif_process}
  */
  readonly eifProcess?: number;
  /**
  * Full-Cone Creation Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_stateful_firewall_global_stats#fullcone_creation_failure DataThunderCgnv6StatefulFirewallGlobalStats#fullcone_creation_failure}
  */
  readonly fullconeCreationFailure?: number;
  /**
  * Inbound Session Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_stateful_firewall_global_stats#inbound_session_created DataThunderCgnv6StatefulFirewallGlobalStats#inbound_session_created}
  */
  readonly inboundSessionCreated?: number;
  /**
  * Inbound Session Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_stateful_firewall_global_stats#inbound_session_freed DataThunderCgnv6StatefulFirewallGlobalStats#inbound_session_freed}
  */
  readonly inboundSessionFreed?: number;
  /**
  * No Class-List Match Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_stateful_firewall_global_stats#no_class_list_match DataThunderCgnv6StatefulFirewallGlobalStats#no_class_list_match}
  */
  readonly noClassListMatch?: number;
  /**
  * No Forward Route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_stateful_firewall_global_stats#no_fwd_route DataThunderCgnv6StatefulFirewallGlobalStats#no_fwd_route}
  */
  readonly noFwdRoute?: number;
  /**
  * No Reverse Route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_stateful_firewall_global_stats#no_rev_route DataThunderCgnv6StatefulFirewallGlobalStats#no_rev_route}
  */
  readonly noRevRoute?: number;
  /**
  * One-Arm Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_stateful_firewall_global_stats#one_arm_drop DataThunderCgnv6StatefulFirewallGlobalStats#one_arm_drop}
  */
  readonly oneArmDrop?: number;
  /**
  * Other Packet Process
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_stateful_firewall_global_stats#other_packet_process DataThunderCgnv6StatefulFirewallGlobalStats#other_packet_process}
  */
  readonly otherPacketProcess?: number;
  /**
  * Other Session Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_stateful_firewall_global_stats#other_session_created DataThunderCgnv6StatefulFirewallGlobalStats#other_session_created}
  */
  readonly otherSessionCreated?: number;
  /**
  * Other Session Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_stateful_firewall_global_stats#other_session_freed DataThunderCgnv6StatefulFirewallGlobalStats#other_session_freed}
  */
  readonly otherSessionFreed?: number;
  /**
  * Outbound Session Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_stateful_firewall_global_stats#outbound_session_created DataThunderCgnv6StatefulFirewallGlobalStats#outbound_session_created}
  */
  readonly outboundSessionCreated?: number;
  /**
  * Outbound Session Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_stateful_firewall_global_stats#outbound_session_freed DataThunderCgnv6StatefulFirewallGlobalStats#outbound_session_freed}
  */
  readonly outboundSessionFreed?: number;
  /**
  * Inbound Packet Denied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_stateful_firewall_global_stats#packet_inbound_deny DataThunderCgnv6StatefulFirewallGlobalStats#packet_inbound_deny}
  */
  readonly packetInboundDeny?: number;
  /**
  * Packet Error Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_stateful_firewall_global_stats#packet_process_failure DataThunderCgnv6StatefulFirewallGlobalStats#packet_process_failure}
  */
  readonly packetProcessFailure?: number;
  /**
  * Standby Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_stateful_firewall_global_stats#packet_standby_drop DataThunderCgnv6StatefulFirewallGlobalStats#packet_standby_drop}
  */
  readonly packetStandbyDrop?: number;
  /**
  * Session Creation Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_stateful_firewall_global_stats#session_creation_failure DataThunderCgnv6StatefulFirewallGlobalStats#session_creation_failure}
  */
  readonly sessionCreationFailure?: number;
  /**
  * TCP Full-cone Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_stateful_firewall_global_stats#tcp_fullcone_created DataThunderCgnv6StatefulFirewallGlobalStats#tcp_fullcone_created}
  */
  readonly tcpFullconeCreated?: number;
  /**
  * TCP Full-cone Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_stateful_firewall_global_stats#tcp_fullcone_freed DataThunderCgnv6StatefulFirewallGlobalStats#tcp_fullcone_freed}
  */
  readonly tcpFullconeFreed?: number;
  /**
  * TCP Packet Process
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_stateful_firewall_global_stats#tcp_packet_process DataThunderCgnv6StatefulFirewallGlobalStats#tcp_packet_process}
  */
  readonly tcpPacketProcess?: number;
  /**
  * TCP Session Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_stateful_firewall_global_stats#tcp_session_created DataThunderCgnv6StatefulFirewallGlobalStats#tcp_session_created}
  */
  readonly tcpSessionCreated?: number;
  /**
  * TCP Session Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_stateful_firewall_global_stats#tcp_session_freed DataThunderCgnv6StatefulFirewallGlobalStats#tcp_session_freed}
  */
  readonly tcpSessionFreed?: number;
  /**
  * UDP Full-cone Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_stateful_firewall_global_stats#udp_fullcone_created DataThunderCgnv6StatefulFirewallGlobalStats#udp_fullcone_created}
  */
  readonly udpFullconeCreated?: number;
  /**
  * UDP Full-cone Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_stateful_firewall_global_stats#udp_fullcone_freed DataThunderCgnv6StatefulFirewallGlobalStats#udp_fullcone_freed}
  */
  readonly udpFullconeFreed?: number;
  /**
  * UDP Packet Process
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_stateful_firewall_global_stats#udp_packet_process DataThunderCgnv6StatefulFirewallGlobalStats#udp_packet_process}
  */
  readonly udpPacketProcess?: number;
  /**
  * UDP Session Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_stateful_firewall_global_stats#udp_session_created DataThunderCgnv6StatefulFirewallGlobalStats#udp_session_created}
  */
  readonly udpSessionCreated?: number;
  /**
  * UDP Session Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_stateful_firewall_global_stats#udp_session_freed DataThunderCgnv6StatefulFirewallGlobalStats#udp_session_freed}
  */
  readonly udpSessionFreed?: number;
}

export function dataThunderCgnv6StatefulFirewallGlobalStatsStatsToTerraform(struct?: DataThunderCgnv6StatefulFirewallGlobalStatsStatsOutputReference | DataThunderCgnv6StatefulFirewallGlobalStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    eif_process: cdktf.numberToTerraform(struct!.eifProcess),
    fullcone_creation_failure: cdktf.numberToTerraform(struct!.fullconeCreationFailure),
    inbound_session_created: cdktf.numberToTerraform(struct!.inboundSessionCreated),
    inbound_session_freed: cdktf.numberToTerraform(struct!.inboundSessionFreed),
    no_class_list_match: cdktf.numberToTerraform(struct!.noClassListMatch),
    no_fwd_route: cdktf.numberToTerraform(struct!.noFwdRoute),
    no_rev_route: cdktf.numberToTerraform(struct!.noRevRoute),
    one_arm_drop: cdktf.numberToTerraform(struct!.oneArmDrop),
    other_packet_process: cdktf.numberToTerraform(struct!.otherPacketProcess),
    other_session_created: cdktf.numberToTerraform(struct!.otherSessionCreated),
    other_session_freed: cdktf.numberToTerraform(struct!.otherSessionFreed),
    outbound_session_created: cdktf.numberToTerraform(struct!.outboundSessionCreated),
    outbound_session_freed: cdktf.numberToTerraform(struct!.outboundSessionFreed),
    packet_inbound_deny: cdktf.numberToTerraform(struct!.packetInboundDeny),
    packet_process_failure: cdktf.numberToTerraform(struct!.packetProcessFailure),
    packet_standby_drop: cdktf.numberToTerraform(struct!.packetStandbyDrop),
    session_creation_failure: cdktf.numberToTerraform(struct!.sessionCreationFailure),
    tcp_fullcone_created: cdktf.numberToTerraform(struct!.tcpFullconeCreated),
    tcp_fullcone_freed: cdktf.numberToTerraform(struct!.tcpFullconeFreed),
    tcp_packet_process: cdktf.numberToTerraform(struct!.tcpPacketProcess),
    tcp_session_created: cdktf.numberToTerraform(struct!.tcpSessionCreated),
    tcp_session_freed: cdktf.numberToTerraform(struct!.tcpSessionFreed),
    udp_fullcone_created: cdktf.numberToTerraform(struct!.udpFullconeCreated),
    udp_fullcone_freed: cdktf.numberToTerraform(struct!.udpFullconeFreed),
    udp_packet_process: cdktf.numberToTerraform(struct!.udpPacketProcess),
    udp_session_created: cdktf.numberToTerraform(struct!.udpSessionCreated),
    udp_session_freed: cdktf.numberToTerraform(struct!.udpSessionFreed),
  }
}


export function dataThunderCgnv6StatefulFirewallGlobalStatsStatsToHclTerraform(struct?: DataThunderCgnv6StatefulFirewallGlobalStatsStatsOutputReference | DataThunderCgnv6StatefulFirewallGlobalStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    eif_process: {
      value: cdktf.numberToHclTerraform(struct!.eifProcess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fullcone_creation_failure: {
      value: cdktf.numberToHclTerraform(struct!.fullconeCreationFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inbound_session_created: {
      value: cdktf.numberToHclTerraform(struct!.inboundSessionCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inbound_session_freed: {
      value: cdktf.numberToHclTerraform(struct!.inboundSessionFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_class_list_match: {
      value: cdktf.numberToHclTerraform(struct!.noClassListMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_fwd_route: {
      value: cdktf.numberToHclTerraform(struct!.noFwdRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_rev_route: {
      value: cdktf.numberToHclTerraform(struct!.noRevRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    one_arm_drop: {
      value: cdktf.numberToHclTerraform(struct!.oneArmDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    other_packet_process: {
      value: cdktf.numberToHclTerraform(struct!.otherPacketProcess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    other_session_created: {
      value: cdktf.numberToHclTerraform(struct!.otherSessionCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    other_session_freed: {
      value: cdktf.numberToHclTerraform(struct!.otherSessionFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outbound_session_created: {
      value: cdktf.numberToHclTerraform(struct!.outboundSessionCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outbound_session_freed: {
      value: cdktf.numberToHclTerraform(struct!.outboundSessionFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packet_inbound_deny: {
      value: cdktf.numberToHclTerraform(struct!.packetInboundDeny),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packet_process_failure: {
      value: cdktf.numberToHclTerraform(struct!.packetProcessFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packet_standby_drop: {
      value: cdktf.numberToHclTerraform(struct!.packetStandbyDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_creation_failure: {
      value: cdktf.numberToHclTerraform(struct!.sessionCreationFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_fullcone_created: {
      value: cdktf.numberToHclTerraform(struct!.tcpFullconeCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_fullcone_freed: {
      value: cdktf.numberToHclTerraform(struct!.tcpFullconeFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_packet_process: {
      value: cdktf.numberToHclTerraform(struct!.tcpPacketProcess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_session_created: {
      value: cdktf.numberToHclTerraform(struct!.tcpSessionCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_session_freed: {
      value: cdktf.numberToHclTerraform(struct!.tcpSessionFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_fullcone_created: {
      value: cdktf.numberToHclTerraform(struct!.udpFullconeCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_fullcone_freed: {
      value: cdktf.numberToHclTerraform(struct!.udpFullconeFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_packet_process: {
      value: cdktf.numberToHclTerraform(struct!.udpPacketProcess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_session_created: {
      value: cdktf.numberToHclTerraform(struct!.udpSessionCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_session_freed: {
      value: cdktf.numberToHclTerraform(struct!.udpSessionFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6StatefulFirewallGlobalStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderCgnv6StatefulFirewallGlobalStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eifProcess !== undefined) {
      hasAnyValues = true;
      internalValueResult.eifProcess = this._eifProcess;
    }
    if (this._fullconeCreationFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullconeCreationFailure = this._fullconeCreationFailure;
    }
    if (this._inboundSessionCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.inboundSessionCreated = this._inboundSessionCreated;
    }
    if (this._inboundSessionFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.inboundSessionFreed = this._inboundSessionFreed;
    }
    if (this._noClassListMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.noClassListMatch = this._noClassListMatch;
    }
    if (this._noFwdRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.noFwdRoute = this._noFwdRoute;
    }
    if (this._noRevRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.noRevRoute = this._noRevRoute;
    }
    if (this._oneArmDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.oneArmDrop = this._oneArmDrop;
    }
    if (this._otherPacketProcess !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherPacketProcess = this._otherPacketProcess;
    }
    if (this._otherSessionCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherSessionCreated = this._otherSessionCreated;
    }
    if (this._otherSessionFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherSessionFreed = this._otherSessionFreed;
    }
    if (this._outboundSessionCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundSessionCreated = this._outboundSessionCreated;
    }
    if (this._outboundSessionFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundSessionFreed = this._outboundSessionFreed;
    }
    if (this._packetInboundDeny !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetInboundDeny = this._packetInboundDeny;
    }
    if (this._packetProcessFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetProcessFailure = this._packetProcessFailure;
    }
    if (this._packetStandbyDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetStandbyDrop = this._packetStandbyDrop;
    }
    if (this._sessionCreationFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionCreationFailure = this._sessionCreationFailure;
    }
    if (this._tcpFullconeCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFullconeCreated = this._tcpFullconeCreated;
    }
    if (this._tcpFullconeFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFullconeFreed = this._tcpFullconeFreed;
    }
    if (this._tcpPacketProcess !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpPacketProcess = this._tcpPacketProcess;
    }
    if (this._tcpSessionCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSessionCreated = this._tcpSessionCreated;
    }
    if (this._tcpSessionFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSessionFreed = this._tcpSessionFreed;
    }
    if (this._udpFullconeCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpFullconeCreated = this._udpFullconeCreated;
    }
    if (this._udpFullconeFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpFullconeFreed = this._udpFullconeFreed;
    }
    if (this._udpPacketProcess !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpPacketProcess = this._udpPacketProcess;
    }
    if (this._udpSessionCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpSessionCreated = this._udpSessionCreated;
    }
    if (this._udpSessionFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpSessionFreed = this._udpSessionFreed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6StatefulFirewallGlobalStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._eifProcess = undefined;
      this._fullconeCreationFailure = undefined;
      this._inboundSessionCreated = undefined;
      this._inboundSessionFreed = undefined;
      this._noClassListMatch = undefined;
      this._noFwdRoute = undefined;
      this._noRevRoute = undefined;
      this._oneArmDrop = undefined;
      this._otherPacketProcess = undefined;
      this._otherSessionCreated = undefined;
      this._otherSessionFreed = undefined;
      this._outboundSessionCreated = undefined;
      this._outboundSessionFreed = undefined;
      this._packetInboundDeny = undefined;
      this._packetProcessFailure = undefined;
      this._packetStandbyDrop = undefined;
      this._sessionCreationFailure = undefined;
      this._tcpFullconeCreated = undefined;
      this._tcpFullconeFreed = undefined;
      this._tcpPacketProcess = undefined;
      this._tcpSessionCreated = undefined;
      this._tcpSessionFreed = undefined;
      this._udpFullconeCreated = undefined;
      this._udpFullconeFreed = undefined;
      this._udpPacketProcess = undefined;
      this._udpSessionCreated = undefined;
      this._udpSessionFreed = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._eifProcess = value.eifProcess;
      this._fullconeCreationFailure = value.fullconeCreationFailure;
      this._inboundSessionCreated = value.inboundSessionCreated;
      this._inboundSessionFreed = value.inboundSessionFreed;
      this._noClassListMatch = value.noClassListMatch;
      this._noFwdRoute = value.noFwdRoute;
      this._noRevRoute = value.noRevRoute;
      this._oneArmDrop = value.oneArmDrop;
      this._otherPacketProcess = value.otherPacketProcess;
      this._otherSessionCreated = value.otherSessionCreated;
      this._otherSessionFreed = value.otherSessionFreed;
      this._outboundSessionCreated = value.outboundSessionCreated;
      this._outboundSessionFreed = value.outboundSessionFreed;
      this._packetInboundDeny = value.packetInboundDeny;
      this._packetProcessFailure = value.packetProcessFailure;
      this._packetStandbyDrop = value.packetStandbyDrop;
      this._sessionCreationFailure = value.sessionCreationFailure;
      this._tcpFullconeCreated = value.tcpFullconeCreated;
      this._tcpFullconeFreed = value.tcpFullconeFreed;
      this._tcpPacketProcess = value.tcpPacketProcess;
      this._tcpSessionCreated = value.tcpSessionCreated;
      this._tcpSessionFreed = value.tcpSessionFreed;
      this._udpFullconeCreated = value.udpFullconeCreated;
      this._udpFullconeFreed = value.udpFullconeFreed;
      this._udpPacketProcess = value.udpPacketProcess;
      this._udpSessionCreated = value.udpSessionCreated;
      this._udpSessionFreed = value.udpSessionFreed;
    }
  }

  // eif_process - computed: false, optional: true, required: false
  private _eifProcess?: number; 
  public get eifProcess() {
    return this.getNumberAttribute('eif_process');
  }
  public set eifProcess(value: number) {
    this._eifProcess = value;
  }
  public resetEifProcess() {
    this._eifProcess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eifProcessInput() {
    return this._eifProcess;
  }

  // fullcone_creation_failure - computed: false, optional: true, required: false
  private _fullconeCreationFailure?: number; 
  public get fullconeCreationFailure() {
    return this.getNumberAttribute('fullcone_creation_failure');
  }
  public set fullconeCreationFailure(value: number) {
    this._fullconeCreationFailure = value;
  }
  public resetFullconeCreationFailure() {
    this._fullconeCreationFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullconeCreationFailureInput() {
    return this._fullconeCreationFailure;
  }

  // inbound_session_created - computed: false, optional: true, required: false
  private _inboundSessionCreated?: number; 
  public get inboundSessionCreated() {
    return this.getNumberAttribute('inbound_session_created');
  }
  public set inboundSessionCreated(value: number) {
    this._inboundSessionCreated = value;
  }
  public resetInboundSessionCreated() {
    this._inboundSessionCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundSessionCreatedInput() {
    return this._inboundSessionCreated;
  }

  // inbound_session_freed - computed: false, optional: true, required: false
  private _inboundSessionFreed?: number; 
  public get inboundSessionFreed() {
    return this.getNumberAttribute('inbound_session_freed');
  }
  public set inboundSessionFreed(value: number) {
    this._inboundSessionFreed = value;
  }
  public resetInboundSessionFreed() {
    this._inboundSessionFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundSessionFreedInput() {
    return this._inboundSessionFreed;
  }

  // no_class_list_match - computed: false, optional: true, required: false
  private _noClassListMatch?: number; 
  public get noClassListMatch() {
    return this.getNumberAttribute('no_class_list_match');
  }
  public set noClassListMatch(value: number) {
    this._noClassListMatch = value;
  }
  public resetNoClassListMatch() {
    this._noClassListMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noClassListMatchInput() {
    return this._noClassListMatch;
  }

  // no_fwd_route - computed: false, optional: true, required: false
  private _noFwdRoute?: number; 
  public get noFwdRoute() {
    return this.getNumberAttribute('no_fwd_route');
  }
  public set noFwdRoute(value: number) {
    this._noFwdRoute = value;
  }
  public resetNoFwdRoute() {
    this._noFwdRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noFwdRouteInput() {
    return this._noFwdRoute;
  }

  // no_rev_route - computed: false, optional: true, required: false
  private _noRevRoute?: number; 
  public get noRevRoute() {
    return this.getNumberAttribute('no_rev_route');
  }
  public set noRevRoute(value: number) {
    this._noRevRoute = value;
  }
  public resetNoRevRoute() {
    this._noRevRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noRevRouteInput() {
    return this._noRevRoute;
  }

  // one_arm_drop - computed: false, optional: true, required: false
  private _oneArmDrop?: number; 
  public get oneArmDrop() {
    return this.getNumberAttribute('one_arm_drop');
  }
  public set oneArmDrop(value: number) {
    this._oneArmDrop = value;
  }
  public resetOneArmDrop() {
    this._oneArmDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oneArmDropInput() {
    return this._oneArmDrop;
  }

  // other_packet_process - computed: false, optional: true, required: false
  private _otherPacketProcess?: number; 
  public get otherPacketProcess() {
    return this.getNumberAttribute('other_packet_process');
  }
  public set otherPacketProcess(value: number) {
    this._otherPacketProcess = value;
  }
  public resetOtherPacketProcess() {
    this._otherPacketProcess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherPacketProcessInput() {
    return this._otherPacketProcess;
  }

  // other_session_created - computed: false, optional: true, required: false
  private _otherSessionCreated?: number; 
  public get otherSessionCreated() {
    return this.getNumberAttribute('other_session_created');
  }
  public set otherSessionCreated(value: number) {
    this._otherSessionCreated = value;
  }
  public resetOtherSessionCreated() {
    this._otherSessionCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherSessionCreatedInput() {
    return this._otherSessionCreated;
  }

  // other_session_freed - computed: false, optional: true, required: false
  private _otherSessionFreed?: number; 
  public get otherSessionFreed() {
    return this.getNumberAttribute('other_session_freed');
  }
  public set otherSessionFreed(value: number) {
    this._otherSessionFreed = value;
  }
  public resetOtherSessionFreed() {
    this._otherSessionFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherSessionFreedInput() {
    return this._otherSessionFreed;
  }

  // outbound_session_created - computed: false, optional: true, required: false
  private _outboundSessionCreated?: number; 
  public get outboundSessionCreated() {
    return this.getNumberAttribute('outbound_session_created');
  }
  public set outboundSessionCreated(value: number) {
    this._outboundSessionCreated = value;
  }
  public resetOutboundSessionCreated() {
    this._outboundSessionCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundSessionCreatedInput() {
    return this._outboundSessionCreated;
  }

  // outbound_session_freed - computed: false, optional: true, required: false
  private _outboundSessionFreed?: number; 
  public get outboundSessionFreed() {
    return this.getNumberAttribute('outbound_session_freed');
  }
  public set outboundSessionFreed(value: number) {
    this._outboundSessionFreed = value;
  }
  public resetOutboundSessionFreed() {
    this._outboundSessionFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundSessionFreedInput() {
    return this._outboundSessionFreed;
  }

  // packet_inbound_deny - computed: false, optional: true, required: false
  private _packetInboundDeny?: number; 
  public get packetInboundDeny() {
    return this.getNumberAttribute('packet_inbound_deny');
  }
  public set packetInboundDeny(value: number) {
    this._packetInboundDeny = value;
  }
  public resetPacketInboundDeny() {
    this._packetInboundDeny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetInboundDenyInput() {
    return this._packetInboundDeny;
  }

  // packet_process_failure - computed: false, optional: true, required: false
  private _packetProcessFailure?: number; 
  public get packetProcessFailure() {
    return this.getNumberAttribute('packet_process_failure');
  }
  public set packetProcessFailure(value: number) {
    this._packetProcessFailure = value;
  }
  public resetPacketProcessFailure() {
    this._packetProcessFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetProcessFailureInput() {
    return this._packetProcessFailure;
  }

  // packet_standby_drop - computed: false, optional: true, required: false
  private _packetStandbyDrop?: number; 
  public get packetStandbyDrop() {
    return this.getNumberAttribute('packet_standby_drop');
  }
  public set packetStandbyDrop(value: number) {
    this._packetStandbyDrop = value;
  }
  public resetPacketStandbyDrop() {
    this._packetStandbyDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetStandbyDropInput() {
    return this._packetStandbyDrop;
  }

  // session_creation_failure - computed: false, optional: true, required: false
  private _sessionCreationFailure?: number; 
  public get sessionCreationFailure() {
    return this.getNumberAttribute('session_creation_failure');
  }
  public set sessionCreationFailure(value: number) {
    this._sessionCreationFailure = value;
  }
  public resetSessionCreationFailure() {
    this._sessionCreationFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionCreationFailureInput() {
    return this._sessionCreationFailure;
  }

  // tcp_fullcone_created - computed: false, optional: true, required: false
  private _tcpFullconeCreated?: number; 
  public get tcpFullconeCreated() {
    return this.getNumberAttribute('tcp_fullcone_created');
  }
  public set tcpFullconeCreated(value: number) {
    this._tcpFullconeCreated = value;
  }
  public resetTcpFullconeCreated() {
    this._tcpFullconeCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFullconeCreatedInput() {
    return this._tcpFullconeCreated;
  }

  // tcp_fullcone_freed - computed: false, optional: true, required: false
  private _tcpFullconeFreed?: number; 
  public get tcpFullconeFreed() {
    return this.getNumberAttribute('tcp_fullcone_freed');
  }
  public set tcpFullconeFreed(value: number) {
    this._tcpFullconeFreed = value;
  }
  public resetTcpFullconeFreed() {
    this._tcpFullconeFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFullconeFreedInput() {
    return this._tcpFullconeFreed;
  }

  // tcp_packet_process - computed: false, optional: true, required: false
  private _tcpPacketProcess?: number; 
  public get tcpPacketProcess() {
    return this.getNumberAttribute('tcp_packet_process');
  }
  public set tcpPacketProcess(value: number) {
    this._tcpPacketProcess = value;
  }
  public resetTcpPacketProcess() {
    this._tcpPacketProcess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPacketProcessInput() {
    return this._tcpPacketProcess;
  }

  // tcp_session_created - computed: false, optional: true, required: false
  private _tcpSessionCreated?: number; 
  public get tcpSessionCreated() {
    return this.getNumberAttribute('tcp_session_created');
  }
  public set tcpSessionCreated(value: number) {
    this._tcpSessionCreated = value;
  }
  public resetTcpSessionCreated() {
    this._tcpSessionCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSessionCreatedInput() {
    return this._tcpSessionCreated;
  }

  // tcp_session_freed - computed: false, optional: true, required: false
  private _tcpSessionFreed?: number; 
  public get tcpSessionFreed() {
    return this.getNumberAttribute('tcp_session_freed');
  }
  public set tcpSessionFreed(value: number) {
    this._tcpSessionFreed = value;
  }
  public resetTcpSessionFreed() {
    this._tcpSessionFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSessionFreedInput() {
    return this._tcpSessionFreed;
  }

  // udp_fullcone_created - computed: false, optional: true, required: false
  private _udpFullconeCreated?: number; 
  public get udpFullconeCreated() {
    return this.getNumberAttribute('udp_fullcone_created');
  }
  public set udpFullconeCreated(value: number) {
    this._udpFullconeCreated = value;
  }
  public resetUdpFullconeCreated() {
    this._udpFullconeCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpFullconeCreatedInput() {
    return this._udpFullconeCreated;
  }

  // udp_fullcone_freed - computed: false, optional: true, required: false
  private _udpFullconeFreed?: number; 
  public get udpFullconeFreed() {
    return this.getNumberAttribute('udp_fullcone_freed');
  }
  public set udpFullconeFreed(value: number) {
    this._udpFullconeFreed = value;
  }
  public resetUdpFullconeFreed() {
    this._udpFullconeFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpFullconeFreedInput() {
    return this._udpFullconeFreed;
  }

  // udp_packet_process - computed: false, optional: true, required: false
  private _udpPacketProcess?: number; 
  public get udpPacketProcess() {
    return this.getNumberAttribute('udp_packet_process');
  }
  public set udpPacketProcess(value: number) {
    this._udpPacketProcess = value;
  }
  public resetUdpPacketProcess() {
    this._udpPacketProcess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPacketProcessInput() {
    return this._udpPacketProcess;
  }

  // udp_session_created - computed: false, optional: true, required: false
  private _udpSessionCreated?: number; 
  public get udpSessionCreated() {
    return this.getNumberAttribute('udp_session_created');
  }
  public set udpSessionCreated(value: number) {
    this._udpSessionCreated = value;
  }
  public resetUdpSessionCreated() {
    this._udpSessionCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpSessionCreatedInput() {
    return this._udpSessionCreated;
  }

  // udp_session_freed - computed: false, optional: true, required: false
  private _udpSessionFreed?: number; 
  public get udpSessionFreed() {
    return this.getNumberAttribute('udp_session_freed');
  }
  public set udpSessionFreed(value: number) {
    this._udpSessionFreed = value;
  }
  public resetUdpSessionFreed() {
    this._udpSessionFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpSessionFreedInput() {
    return this._udpSessionFreed;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_stateful_firewall_global_stats thunder_cgnv6_stateful_firewall_global_stats}
*/
export class DataThunderCgnv6StatefulFirewallGlobalStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_stateful_firewall_global_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderCgnv6StatefulFirewallGlobalStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderCgnv6StatefulFirewallGlobalStats to import
  * @param importFromId The id of the existing DataThunderCgnv6StatefulFirewallGlobalStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_stateful_firewall_global_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderCgnv6StatefulFirewallGlobalStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_stateful_firewall_global_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_stateful_firewall_global_stats thunder_cgnv6_stateful_firewall_global_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderCgnv6StatefulFirewallGlobalStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderCgnv6StatefulFirewallGlobalStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_stateful_firewall_global_stats',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._stats.internalValue = config.stats;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderCgnv6StatefulFirewallGlobalStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderCgnv6StatefulFirewallGlobalStatsStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      stats: dataThunderCgnv6StatefulFirewallGlobalStatsStatsToTerraform(this._stats.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stats: {
        value: dataThunderCgnv6StatefulFirewallGlobalStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderCgnv6StatefulFirewallGlobalStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
