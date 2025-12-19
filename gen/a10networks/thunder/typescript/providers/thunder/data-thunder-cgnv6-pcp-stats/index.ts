// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_pcp_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderCgnv6PcpStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_pcp_stats#id DataThunderCgnv6PcpStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_pcp_stats#stats DataThunderCgnv6PcpStats#stats}
  */
  readonly stats?: DataThunderCgnv6PcpStatsStats;
}
export interface DataThunderCgnv6PcpStatsStats {
  /**
  * PCP Client Address Mismatch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_pcp_stats#address_mismatch DataThunderCgnv6PcpStats#address_mismatch}
  */
  readonly addressMismatch?: number;
  /**
  * Cannot Provide Suggested Port When PREFER_FAILURE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_pcp_stats#cannot_provide_suggest DataThunderCgnv6PcpStats#cannot_provide_suggest}
  */
  readonly cannotProvideSuggest?: number;
  /**
  * PCP ANNOUNCE Request Processing Success (DS-Lite)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_pcp_stats#dslite_announce_process_success DataThunderCgnv6PcpStats#dslite_announce_process_success}
  */
  readonly dsliteAnnounceProcessSuccess?: number;
  /**
  * PCP MAP Request Processing Success (DS-Lite)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_pcp_stats#dslite_map_process_success DataThunderCgnv6PcpStats#dslite_map_process_success}
  */
  readonly dsliteMapProcessSuccess?: number;
  /**
  * PCP PEER Request Processing Success (DS-Lite)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_pcp_stats#dslite_peer_process_success DataThunderCgnv6PcpStats#dslite_peer_process_success}
  */
  readonly dslitePeerProcessSuccess?: number;
  /**
  * Excessive Remote Peers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_pcp_stats#excessive_remote_peers DataThunderCgnv6PcpStats#excessive_remote_peers}
  */
  readonly excessiveRemotePeers?: number;
  /**
  * HA Sync PCP Epoch Recv
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_pcp_stats#ha_sync_epoch_rcv DataThunderCgnv6PcpStats#ha_sync_epoch_rcv}
  */
  readonly haSyncEpochRcv?: number;
  /**
  * HA Sync PCP Epoch Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_pcp_stats#ha_sync_epoch_sent DataThunderCgnv6PcpStats#ha_sync_epoch_sent}
  */
  readonly haSyncEpochSent?: number;
  /**
  * Internal Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_pcp_stats#internal_error_drop DataThunderCgnv6PcpStats#internal_error_drop}
  */
  readonly internalErrorDrop?: number;
  /**
  * L3/L4 Process Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_pcp_stats#l4_process_error DataThunderCgnv6PcpStats#l4_process_error}
  */
  readonly l4ProcessError?: number;
  /**
  * PCP ANNOUNCE Request Processing Success (NAT44)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_pcp_stats#lsn_announce_process_success DataThunderCgnv6PcpStats#lsn_announce_process_success}
  */
  readonly lsnAnnounceProcessSuccess?: number;
  /**
  * PCP MAP Request Processing Success (NAT44)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_pcp_stats#lsn_map_process_success DataThunderCgnv6PcpStats#lsn_map_process_success}
  */
  readonly lsnMapProcessSuccess?: number;
  /**
  * PCP PEER Request Processing Success (NAT44)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_pcp_stats#lsn_peer_process_success DataThunderCgnv6PcpStats#lsn_peer_process_success}
  */
  readonly lsnPeerProcessSuccess?: number;
  /**
  * PCP Option Malformed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_pcp_stats#malform_option DataThunderCgnv6PcpStats#malform_option}
  */
  readonly malformOption?: number;
  /**
  * PCP Request Malformed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_pcp_stats#malform_request DataThunderCgnv6PcpStats#malform_request}
  */
  readonly malformRequest?: number;
  /**
  * PCP ANNOUNCE Request Processing Success (NAT64)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_pcp_stats#nat64_announce_process_success DataThunderCgnv6PcpStats#nat64_announce_process_success}
  */
  readonly nat64AnnounceProcessSuccess?: number;
  /**
  * PCP MAP Request Processing Success (NAT64)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_pcp_stats#nat64_map_process_success DataThunderCgnv6PcpStats#nat64_map_process_success}
  */
  readonly nat64MapProcessSuccess?: number;
  /**
  * PCP PEER Request Processing Success (NAT64)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_pcp_stats#nat64_peer_process_success DataThunderCgnv6PcpStats#nat64_peer_process_success}
  */
  readonly nat64PeerProcessSuccess?: number;
  /**
  * No System or NAT Resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_pcp_stats#no_resources DataThunderCgnv6PcpStats#no_resources}
  */
  readonly noResources?: number;
  /**
  * Response No Route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_pcp_stats#noroute_drop DataThunderCgnv6PcpStats#noroute_drop}
  */
  readonly norouteDrop?: number;
  /**
  * PCP Request Not Authorized
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_pcp_stats#not_authorized DataThunderCgnv6PcpStats#not_authorized}
  */
  readonly notAuthorized?: number;
  /**
  * Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_pcp_stats#packets_rcv DataThunderCgnv6PcpStats#packets_rcv}
  */
  readonly packetsRcv?: number;
  /**
  * Packet Dropped For Not Coming From NAT Inside
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_pcp_stats#pkt_not_from_nat_inside DataThunderCgnv6PcpStats#pkt_not_from_nat_inside}
  */
  readonly pktNotFromNatInside?: number;
  /**
  * Packet Not a PCP Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_pcp_stats#pkt_not_request_drop DataThunderCgnv6PcpStats#pkt_not_request_drop}
  */
  readonly pktNotRequestDrop?: number;
  /**
  * Packet Too Short
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_pcp_stats#pkt_too_short_drop DataThunderCgnv6PcpStats#pkt_too_short_drop}
  */
  readonly pktTooShortDrop?: number;
  /**
  * Unsolicited Announce Send Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_pcp_stats#unsol_ance_sent_fail DataThunderCgnv6PcpStats#unsol_ance_sent_fail}
  */
  readonly unsolAnceSentFail?: number;
  /**
  * Unsolicited Announce Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_pcp_stats#unsol_ance_sent_succ DataThunderCgnv6PcpStats#unsol_ance_sent_succ}
  */
  readonly unsolAnceSentSucc?: number;
  /**
  * Unsupported PCP Opcode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_pcp_stats#unsupp_opcode DataThunderCgnv6PcpStats#unsupp_opcode}
  */
  readonly unsuppOpcode?: number;
  /**
  * Unsupported PCP Option
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_pcp_stats#unsupp_option DataThunderCgnv6PcpStats#unsupp_option}
  */
  readonly unsuppOption?: number;
  /**
  * Unsupported Mapping Protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_pcp_stats#unsupp_protocol DataThunderCgnv6PcpStats#unsupp_protocol}
  */
  readonly unsuppProtocol?: number;
  /**
  * Unsupported PCP version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_pcp_stats#unsupported_version DataThunderCgnv6PcpStats#unsupported_version}
  */
  readonly unsupportedVersion?: number;
  /**
  * User Quota Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_pcp_stats#user_quota_exceeded DataThunderCgnv6PcpStats#user_quota_exceeded}
  */
  readonly userQuotaExceeded?: number;
}

export function dataThunderCgnv6PcpStatsStatsToTerraform(struct?: DataThunderCgnv6PcpStatsStatsOutputReference | DataThunderCgnv6PcpStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_mismatch: cdktf.numberToTerraform(struct!.addressMismatch),
    cannot_provide_suggest: cdktf.numberToTerraform(struct!.cannotProvideSuggest),
    dslite_announce_process_success: cdktf.numberToTerraform(struct!.dsliteAnnounceProcessSuccess),
    dslite_map_process_success: cdktf.numberToTerraform(struct!.dsliteMapProcessSuccess),
    dslite_peer_process_success: cdktf.numberToTerraform(struct!.dslitePeerProcessSuccess),
    excessive_remote_peers: cdktf.numberToTerraform(struct!.excessiveRemotePeers),
    ha_sync_epoch_rcv: cdktf.numberToTerraform(struct!.haSyncEpochRcv),
    ha_sync_epoch_sent: cdktf.numberToTerraform(struct!.haSyncEpochSent),
    internal_error_drop: cdktf.numberToTerraform(struct!.internalErrorDrop),
    l4_process_error: cdktf.numberToTerraform(struct!.l4ProcessError),
    lsn_announce_process_success: cdktf.numberToTerraform(struct!.lsnAnnounceProcessSuccess),
    lsn_map_process_success: cdktf.numberToTerraform(struct!.lsnMapProcessSuccess),
    lsn_peer_process_success: cdktf.numberToTerraform(struct!.lsnPeerProcessSuccess),
    malform_option: cdktf.numberToTerraform(struct!.malformOption),
    malform_request: cdktf.numberToTerraform(struct!.malformRequest),
    nat64_announce_process_success: cdktf.numberToTerraform(struct!.nat64AnnounceProcessSuccess),
    nat64_map_process_success: cdktf.numberToTerraform(struct!.nat64MapProcessSuccess),
    nat64_peer_process_success: cdktf.numberToTerraform(struct!.nat64PeerProcessSuccess),
    no_resources: cdktf.numberToTerraform(struct!.noResources),
    noroute_drop: cdktf.numberToTerraform(struct!.norouteDrop),
    not_authorized: cdktf.numberToTerraform(struct!.notAuthorized),
    packets_rcv: cdktf.numberToTerraform(struct!.packetsRcv),
    pkt_not_from_nat_inside: cdktf.numberToTerraform(struct!.pktNotFromNatInside),
    pkt_not_request_drop: cdktf.numberToTerraform(struct!.pktNotRequestDrop),
    pkt_too_short_drop: cdktf.numberToTerraform(struct!.pktTooShortDrop),
    unsol_ance_sent_fail: cdktf.numberToTerraform(struct!.unsolAnceSentFail),
    unsol_ance_sent_succ: cdktf.numberToTerraform(struct!.unsolAnceSentSucc),
    unsupp_opcode: cdktf.numberToTerraform(struct!.unsuppOpcode),
    unsupp_option: cdktf.numberToTerraform(struct!.unsuppOption),
    unsupp_protocol: cdktf.numberToTerraform(struct!.unsuppProtocol),
    unsupported_version: cdktf.numberToTerraform(struct!.unsupportedVersion),
    user_quota_exceeded: cdktf.numberToTerraform(struct!.userQuotaExceeded),
  }
}


export function dataThunderCgnv6PcpStatsStatsToHclTerraform(struct?: DataThunderCgnv6PcpStatsStatsOutputReference | DataThunderCgnv6PcpStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address_mismatch: {
      value: cdktf.numberToHclTerraform(struct!.addressMismatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cannot_provide_suggest: {
      value: cdktf.numberToHclTerraform(struct!.cannotProvideSuggest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dslite_announce_process_success: {
      value: cdktf.numberToHclTerraform(struct!.dsliteAnnounceProcessSuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dslite_map_process_success: {
      value: cdktf.numberToHclTerraform(struct!.dsliteMapProcessSuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dslite_peer_process_success: {
      value: cdktf.numberToHclTerraform(struct!.dslitePeerProcessSuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    excessive_remote_peers: {
      value: cdktf.numberToHclTerraform(struct!.excessiveRemotePeers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ha_sync_epoch_rcv: {
      value: cdktf.numberToHclTerraform(struct!.haSyncEpochRcv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ha_sync_epoch_sent: {
      value: cdktf.numberToHclTerraform(struct!.haSyncEpochSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    internal_error_drop: {
      value: cdktf.numberToHclTerraform(struct!.internalErrorDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l4_process_error: {
      value: cdktf.numberToHclTerraform(struct!.l4ProcessError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lsn_announce_process_success: {
      value: cdktf.numberToHclTerraform(struct!.lsnAnnounceProcessSuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lsn_map_process_success: {
      value: cdktf.numberToHclTerraform(struct!.lsnMapProcessSuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lsn_peer_process_success: {
      value: cdktf.numberToHclTerraform(struct!.lsnPeerProcessSuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    malform_option: {
      value: cdktf.numberToHclTerraform(struct!.malformOption),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    malform_request: {
      value: cdktf.numberToHclTerraform(struct!.malformRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat64_announce_process_success: {
      value: cdktf.numberToHclTerraform(struct!.nat64AnnounceProcessSuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat64_map_process_success: {
      value: cdktf.numberToHclTerraform(struct!.nat64MapProcessSuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat64_peer_process_success: {
      value: cdktf.numberToHclTerraform(struct!.nat64PeerProcessSuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_resources: {
      value: cdktf.numberToHclTerraform(struct!.noResources),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    noroute_drop: {
      value: cdktf.numberToHclTerraform(struct!.norouteDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    not_authorized: {
      value: cdktf.numberToHclTerraform(struct!.notAuthorized),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packets_rcv: {
      value: cdktf.numberToHclTerraform(struct!.packetsRcv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pkt_not_from_nat_inside: {
      value: cdktf.numberToHclTerraform(struct!.pktNotFromNatInside),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pkt_not_request_drop: {
      value: cdktf.numberToHclTerraform(struct!.pktNotRequestDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pkt_too_short_drop: {
      value: cdktf.numberToHclTerraform(struct!.pktTooShortDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unsol_ance_sent_fail: {
      value: cdktf.numberToHclTerraform(struct!.unsolAnceSentFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unsol_ance_sent_succ: {
      value: cdktf.numberToHclTerraform(struct!.unsolAnceSentSucc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unsupp_opcode: {
      value: cdktf.numberToHclTerraform(struct!.unsuppOpcode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unsupp_option: {
      value: cdktf.numberToHclTerraform(struct!.unsuppOption),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unsupp_protocol: {
      value: cdktf.numberToHclTerraform(struct!.unsuppProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unsupported_version: {
      value: cdktf.numberToHclTerraform(struct!.unsupportedVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_quota_exceeded: {
      value: cdktf.numberToHclTerraform(struct!.userQuotaExceeded),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6PcpStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderCgnv6PcpStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressMismatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressMismatch = this._addressMismatch;
    }
    if (this._cannotProvideSuggest !== undefined) {
      hasAnyValues = true;
      internalValueResult.cannotProvideSuggest = this._cannotProvideSuggest;
    }
    if (this._dsliteAnnounceProcessSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.dsliteAnnounceProcessSuccess = this._dsliteAnnounceProcessSuccess;
    }
    if (this._dsliteMapProcessSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.dsliteMapProcessSuccess = this._dsliteMapProcessSuccess;
    }
    if (this._dslitePeerProcessSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.dslitePeerProcessSuccess = this._dslitePeerProcessSuccess;
    }
    if (this._excessiveRemotePeers !== undefined) {
      hasAnyValues = true;
      internalValueResult.excessiveRemotePeers = this._excessiveRemotePeers;
    }
    if (this._haSyncEpochRcv !== undefined) {
      hasAnyValues = true;
      internalValueResult.haSyncEpochRcv = this._haSyncEpochRcv;
    }
    if (this._haSyncEpochSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.haSyncEpochSent = this._haSyncEpochSent;
    }
    if (this._internalErrorDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalErrorDrop = this._internalErrorDrop;
    }
    if (this._l4ProcessError !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4ProcessError = this._l4ProcessError;
    }
    if (this._lsnAnnounceProcessSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.lsnAnnounceProcessSuccess = this._lsnAnnounceProcessSuccess;
    }
    if (this._lsnMapProcessSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.lsnMapProcessSuccess = this._lsnMapProcessSuccess;
    }
    if (this._lsnPeerProcessSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.lsnPeerProcessSuccess = this._lsnPeerProcessSuccess;
    }
    if (this._malformOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformOption = this._malformOption;
    }
    if (this._malformRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformRequest = this._malformRequest;
    }
    if (this._nat64AnnounceProcessSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.nat64AnnounceProcessSuccess = this._nat64AnnounceProcessSuccess;
    }
    if (this._nat64MapProcessSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.nat64MapProcessSuccess = this._nat64MapProcessSuccess;
    }
    if (this._nat64PeerProcessSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.nat64PeerProcessSuccess = this._nat64PeerProcessSuccess;
    }
    if (this._noResources !== undefined) {
      hasAnyValues = true;
      internalValueResult.noResources = this._noResources;
    }
    if (this._norouteDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.norouteDrop = this._norouteDrop;
    }
    if (this._notAuthorized !== undefined) {
      hasAnyValues = true;
      internalValueResult.notAuthorized = this._notAuthorized;
    }
    if (this._packetsRcv !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetsRcv = this._packetsRcv;
    }
    if (this._pktNotFromNatInside !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktNotFromNatInside = this._pktNotFromNatInside;
    }
    if (this._pktNotRequestDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktNotRequestDrop = this._pktNotRequestDrop;
    }
    if (this._pktTooShortDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktTooShortDrop = this._pktTooShortDrop;
    }
    if (this._unsolAnceSentFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsolAnceSentFail = this._unsolAnceSentFail;
    }
    if (this._unsolAnceSentSucc !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsolAnceSentSucc = this._unsolAnceSentSucc;
    }
    if (this._unsuppOpcode !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsuppOpcode = this._unsuppOpcode;
    }
    if (this._unsuppOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsuppOption = this._unsuppOption;
    }
    if (this._unsuppProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsuppProtocol = this._unsuppProtocol;
    }
    if (this._unsupportedVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsupportedVersion = this._unsupportedVersion;
    }
    if (this._userQuotaExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.userQuotaExceeded = this._userQuotaExceeded;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6PcpStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addressMismatch = undefined;
      this._cannotProvideSuggest = undefined;
      this._dsliteAnnounceProcessSuccess = undefined;
      this._dsliteMapProcessSuccess = undefined;
      this._dslitePeerProcessSuccess = undefined;
      this._excessiveRemotePeers = undefined;
      this._haSyncEpochRcv = undefined;
      this._haSyncEpochSent = undefined;
      this._internalErrorDrop = undefined;
      this._l4ProcessError = undefined;
      this._lsnAnnounceProcessSuccess = undefined;
      this._lsnMapProcessSuccess = undefined;
      this._lsnPeerProcessSuccess = undefined;
      this._malformOption = undefined;
      this._malformRequest = undefined;
      this._nat64AnnounceProcessSuccess = undefined;
      this._nat64MapProcessSuccess = undefined;
      this._nat64PeerProcessSuccess = undefined;
      this._noResources = undefined;
      this._norouteDrop = undefined;
      this._notAuthorized = undefined;
      this._packetsRcv = undefined;
      this._pktNotFromNatInside = undefined;
      this._pktNotRequestDrop = undefined;
      this._pktTooShortDrop = undefined;
      this._unsolAnceSentFail = undefined;
      this._unsolAnceSentSucc = undefined;
      this._unsuppOpcode = undefined;
      this._unsuppOption = undefined;
      this._unsuppProtocol = undefined;
      this._unsupportedVersion = undefined;
      this._userQuotaExceeded = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addressMismatch = value.addressMismatch;
      this._cannotProvideSuggest = value.cannotProvideSuggest;
      this._dsliteAnnounceProcessSuccess = value.dsliteAnnounceProcessSuccess;
      this._dsliteMapProcessSuccess = value.dsliteMapProcessSuccess;
      this._dslitePeerProcessSuccess = value.dslitePeerProcessSuccess;
      this._excessiveRemotePeers = value.excessiveRemotePeers;
      this._haSyncEpochRcv = value.haSyncEpochRcv;
      this._haSyncEpochSent = value.haSyncEpochSent;
      this._internalErrorDrop = value.internalErrorDrop;
      this._l4ProcessError = value.l4ProcessError;
      this._lsnAnnounceProcessSuccess = value.lsnAnnounceProcessSuccess;
      this._lsnMapProcessSuccess = value.lsnMapProcessSuccess;
      this._lsnPeerProcessSuccess = value.lsnPeerProcessSuccess;
      this._malformOption = value.malformOption;
      this._malformRequest = value.malformRequest;
      this._nat64AnnounceProcessSuccess = value.nat64AnnounceProcessSuccess;
      this._nat64MapProcessSuccess = value.nat64MapProcessSuccess;
      this._nat64PeerProcessSuccess = value.nat64PeerProcessSuccess;
      this._noResources = value.noResources;
      this._norouteDrop = value.norouteDrop;
      this._notAuthorized = value.notAuthorized;
      this._packetsRcv = value.packetsRcv;
      this._pktNotFromNatInside = value.pktNotFromNatInside;
      this._pktNotRequestDrop = value.pktNotRequestDrop;
      this._pktTooShortDrop = value.pktTooShortDrop;
      this._unsolAnceSentFail = value.unsolAnceSentFail;
      this._unsolAnceSentSucc = value.unsolAnceSentSucc;
      this._unsuppOpcode = value.unsuppOpcode;
      this._unsuppOption = value.unsuppOption;
      this._unsuppProtocol = value.unsuppProtocol;
      this._unsupportedVersion = value.unsupportedVersion;
      this._userQuotaExceeded = value.userQuotaExceeded;
    }
  }

  // address_mismatch - computed: false, optional: true, required: false
  private _addressMismatch?: number; 
  public get addressMismatch() {
    return this.getNumberAttribute('address_mismatch');
  }
  public set addressMismatch(value: number) {
    this._addressMismatch = value;
  }
  public resetAddressMismatch() {
    this._addressMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressMismatchInput() {
    return this._addressMismatch;
  }

  // cannot_provide_suggest - computed: false, optional: true, required: false
  private _cannotProvideSuggest?: number; 
  public get cannotProvideSuggest() {
    return this.getNumberAttribute('cannot_provide_suggest');
  }
  public set cannotProvideSuggest(value: number) {
    this._cannotProvideSuggest = value;
  }
  public resetCannotProvideSuggest() {
    this._cannotProvideSuggest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cannotProvideSuggestInput() {
    return this._cannotProvideSuggest;
  }

  // dslite_announce_process_success - computed: false, optional: true, required: false
  private _dsliteAnnounceProcessSuccess?: number; 
  public get dsliteAnnounceProcessSuccess() {
    return this.getNumberAttribute('dslite_announce_process_success');
  }
  public set dsliteAnnounceProcessSuccess(value: number) {
    this._dsliteAnnounceProcessSuccess = value;
  }
  public resetDsliteAnnounceProcessSuccess() {
    this._dsliteAnnounceProcessSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dsliteAnnounceProcessSuccessInput() {
    return this._dsliteAnnounceProcessSuccess;
  }

  // dslite_map_process_success - computed: false, optional: true, required: false
  private _dsliteMapProcessSuccess?: number; 
  public get dsliteMapProcessSuccess() {
    return this.getNumberAttribute('dslite_map_process_success');
  }
  public set dsliteMapProcessSuccess(value: number) {
    this._dsliteMapProcessSuccess = value;
  }
  public resetDsliteMapProcessSuccess() {
    this._dsliteMapProcessSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dsliteMapProcessSuccessInput() {
    return this._dsliteMapProcessSuccess;
  }

  // dslite_peer_process_success - computed: false, optional: true, required: false
  private _dslitePeerProcessSuccess?: number; 
  public get dslitePeerProcessSuccess() {
    return this.getNumberAttribute('dslite_peer_process_success');
  }
  public set dslitePeerProcessSuccess(value: number) {
    this._dslitePeerProcessSuccess = value;
  }
  public resetDslitePeerProcessSuccess() {
    this._dslitePeerProcessSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dslitePeerProcessSuccessInput() {
    return this._dslitePeerProcessSuccess;
  }

  // excessive_remote_peers - computed: false, optional: true, required: false
  private _excessiveRemotePeers?: number; 
  public get excessiveRemotePeers() {
    return this.getNumberAttribute('excessive_remote_peers');
  }
  public set excessiveRemotePeers(value: number) {
    this._excessiveRemotePeers = value;
  }
  public resetExcessiveRemotePeers() {
    this._excessiveRemotePeers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excessiveRemotePeersInput() {
    return this._excessiveRemotePeers;
  }

  // ha_sync_epoch_rcv - computed: false, optional: true, required: false
  private _haSyncEpochRcv?: number; 
  public get haSyncEpochRcv() {
    return this.getNumberAttribute('ha_sync_epoch_rcv');
  }
  public set haSyncEpochRcv(value: number) {
    this._haSyncEpochRcv = value;
  }
  public resetHaSyncEpochRcv() {
    this._haSyncEpochRcv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haSyncEpochRcvInput() {
    return this._haSyncEpochRcv;
  }

  // ha_sync_epoch_sent - computed: false, optional: true, required: false
  private _haSyncEpochSent?: number; 
  public get haSyncEpochSent() {
    return this.getNumberAttribute('ha_sync_epoch_sent');
  }
  public set haSyncEpochSent(value: number) {
    this._haSyncEpochSent = value;
  }
  public resetHaSyncEpochSent() {
    this._haSyncEpochSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haSyncEpochSentInput() {
    return this._haSyncEpochSent;
  }

  // internal_error_drop - computed: false, optional: true, required: false
  private _internalErrorDrop?: number; 
  public get internalErrorDrop() {
    return this.getNumberAttribute('internal_error_drop');
  }
  public set internalErrorDrop(value: number) {
    this._internalErrorDrop = value;
  }
  public resetInternalErrorDrop() {
    this._internalErrorDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalErrorDropInput() {
    return this._internalErrorDrop;
  }

  // l4_process_error - computed: false, optional: true, required: false
  private _l4ProcessError?: number; 
  public get l4ProcessError() {
    return this.getNumberAttribute('l4_process_error');
  }
  public set l4ProcessError(value: number) {
    this._l4ProcessError = value;
  }
  public resetL4ProcessError() {
    this._l4ProcessError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4ProcessErrorInput() {
    return this._l4ProcessError;
  }

  // lsn_announce_process_success - computed: false, optional: true, required: false
  private _lsnAnnounceProcessSuccess?: number; 
  public get lsnAnnounceProcessSuccess() {
    return this.getNumberAttribute('lsn_announce_process_success');
  }
  public set lsnAnnounceProcessSuccess(value: number) {
    this._lsnAnnounceProcessSuccess = value;
  }
  public resetLsnAnnounceProcessSuccess() {
    this._lsnAnnounceProcessSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lsnAnnounceProcessSuccessInput() {
    return this._lsnAnnounceProcessSuccess;
  }

  // lsn_map_process_success - computed: false, optional: true, required: false
  private _lsnMapProcessSuccess?: number; 
  public get lsnMapProcessSuccess() {
    return this.getNumberAttribute('lsn_map_process_success');
  }
  public set lsnMapProcessSuccess(value: number) {
    this._lsnMapProcessSuccess = value;
  }
  public resetLsnMapProcessSuccess() {
    this._lsnMapProcessSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lsnMapProcessSuccessInput() {
    return this._lsnMapProcessSuccess;
  }

  // lsn_peer_process_success - computed: false, optional: true, required: false
  private _lsnPeerProcessSuccess?: number; 
  public get lsnPeerProcessSuccess() {
    return this.getNumberAttribute('lsn_peer_process_success');
  }
  public set lsnPeerProcessSuccess(value: number) {
    this._lsnPeerProcessSuccess = value;
  }
  public resetLsnPeerProcessSuccess() {
    this._lsnPeerProcessSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lsnPeerProcessSuccessInput() {
    return this._lsnPeerProcessSuccess;
  }

  // malform_option - computed: false, optional: true, required: false
  private _malformOption?: number; 
  public get malformOption() {
    return this.getNumberAttribute('malform_option');
  }
  public set malformOption(value: number) {
    this._malformOption = value;
  }
  public resetMalformOption() {
    this._malformOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformOptionInput() {
    return this._malformOption;
  }

  // malform_request - computed: false, optional: true, required: false
  private _malformRequest?: number; 
  public get malformRequest() {
    return this.getNumberAttribute('malform_request');
  }
  public set malformRequest(value: number) {
    this._malformRequest = value;
  }
  public resetMalformRequest() {
    this._malformRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformRequestInput() {
    return this._malformRequest;
  }

  // nat64_announce_process_success - computed: false, optional: true, required: false
  private _nat64AnnounceProcessSuccess?: number; 
  public get nat64AnnounceProcessSuccess() {
    return this.getNumberAttribute('nat64_announce_process_success');
  }
  public set nat64AnnounceProcessSuccess(value: number) {
    this._nat64AnnounceProcessSuccess = value;
  }
  public resetNat64AnnounceProcessSuccess() {
    this._nat64AnnounceProcessSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat64AnnounceProcessSuccessInput() {
    return this._nat64AnnounceProcessSuccess;
  }

  // nat64_map_process_success - computed: false, optional: true, required: false
  private _nat64MapProcessSuccess?: number; 
  public get nat64MapProcessSuccess() {
    return this.getNumberAttribute('nat64_map_process_success');
  }
  public set nat64MapProcessSuccess(value: number) {
    this._nat64MapProcessSuccess = value;
  }
  public resetNat64MapProcessSuccess() {
    this._nat64MapProcessSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat64MapProcessSuccessInput() {
    return this._nat64MapProcessSuccess;
  }

  // nat64_peer_process_success - computed: false, optional: true, required: false
  private _nat64PeerProcessSuccess?: number; 
  public get nat64PeerProcessSuccess() {
    return this.getNumberAttribute('nat64_peer_process_success');
  }
  public set nat64PeerProcessSuccess(value: number) {
    this._nat64PeerProcessSuccess = value;
  }
  public resetNat64PeerProcessSuccess() {
    this._nat64PeerProcessSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat64PeerProcessSuccessInput() {
    return this._nat64PeerProcessSuccess;
  }

  // no_resources - computed: false, optional: true, required: false
  private _noResources?: number; 
  public get noResources() {
    return this.getNumberAttribute('no_resources');
  }
  public set noResources(value: number) {
    this._noResources = value;
  }
  public resetNoResources() {
    this._noResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noResourcesInput() {
    return this._noResources;
  }

  // noroute_drop - computed: false, optional: true, required: false
  private _norouteDrop?: number; 
  public get norouteDrop() {
    return this.getNumberAttribute('noroute_drop');
  }
  public set norouteDrop(value: number) {
    this._norouteDrop = value;
  }
  public resetNorouteDrop() {
    this._norouteDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get norouteDropInput() {
    return this._norouteDrop;
  }

  // not_authorized - computed: false, optional: true, required: false
  private _notAuthorized?: number; 
  public get notAuthorized() {
    return this.getNumberAttribute('not_authorized');
  }
  public set notAuthorized(value: number) {
    this._notAuthorized = value;
  }
  public resetNotAuthorized() {
    this._notAuthorized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notAuthorizedInput() {
    return this._notAuthorized;
  }

  // packets_rcv - computed: false, optional: true, required: false
  private _packetsRcv?: number; 
  public get packetsRcv() {
    return this.getNumberAttribute('packets_rcv');
  }
  public set packetsRcv(value: number) {
    this._packetsRcv = value;
  }
  public resetPacketsRcv() {
    this._packetsRcv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetsRcvInput() {
    return this._packetsRcv;
  }

  // pkt_not_from_nat_inside - computed: false, optional: true, required: false
  private _pktNotFromNatInside?: number; 
  public get pktNotFromNatInside() {
    return this.getNumberAttribute('pkt_not_from_nat_inside');
  }
  public set pktNotFromNatInside(value: number) {
    this._pktNotFromNatInside = value;
  }
  public resetPktNotFromNatInside() {
    this._pktNotFromNatInside = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktNotFromNatInsideInput() {
    return this._pktNotFromNatInside;
  }

  // pkt_not_request_drop - computed: false, optional: true, required: false
  private _pktNotRequestDrop?: number; 
  public get pktNotRequestDrop() {
    return this.getNumberAttribute('pkt_not_request_drop');
  }
  public set pktNotRequestDrop(value: number) {
    this._pktNotRequestDrop = value;
  }
  public resetPktNotRequestDrop() {
    this._pktNotRequestDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktNotRequestDropInput() {
    return this._pktNotRequestDrop;
  }

  // pkt_too_short_drop - computed: false, optional: true, required: false
  private _pktTooShortDrop?: number; 
  public get pktTooShortDrop() {
    return this.getNumberAttribute('pkt_too_short_drop');
  }
  public set pktTooShortDrop(value: number) {
    this._pktTooShortDrop = value;
  }
  public resetPktTooShortDrop() {
    this._pktTooShortDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktTooShortDropInput() {
    return this._pktTooShortDrop;
  }

  // unsol_ance_sent_fail - computed: false, optional: true, required: false
  private _unsolAnceSentFail?: number; 
  public get unsolAnceSentFail() {
    return this.getNumberAttribute('unsol_ance_sent_fail');
  }
  public set unsolAnceSentFail(value: number) {
    this._unsolAnceSentFail = value;
  }
  public resetUnsolAnceSentFail() {
    this._unsolAnceSentFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsolAnceSentFailInput() {
    return this._unsolAnceSentFail;
  }

  // unsol_ance_sent_succ - computed: false, optional: true, required: false
  private _unsolAnceSentSucc?: number; 
  public get unsolAnceSentSucc() {
    return this.getNumberAttribute('unsol_ance_sent_succ');
  }
  public set unsolAnceSentSucc(value: number) {
    this._unsolAnceSentSucc = value;
  }
  public resetUnsolAnceSentSucc() {
    this._unsolAnceSentSucc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsolAnceSentSuccInput() {
    return this._unsolAnceSentSucc;
  }

  // unsupp_opcode - computed: false, optional: true, required: false
  private _unsuppOpcode?: number; 
  public get unsuppOpcode() {
    return this.getNumberAttribute('unsupp_opcode');
  }
  public set unsuppOpcode(value: number) {
    this._unsuppOpcode = value;
  }
  public resetUnsuppOpcode() {
    this._unsuppOpcode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsuppOpcodeInput() {
    return this._unsuppOpcode;
  }

  // unsupp_option - computed: false, optional: true, required: false
  private _unsuppOption?: number; 
  public get unsuppOption() {
    return this.getNumberAttribute('unsupp_option');
  }
  public set unsuppOption(value: number) {
    this._unsuppOption = value;
  }
  public resetUnsuppOption() {
    this._unsuppOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsuppOptionInput() {
    return this._unsuppOption;
  }

  // unsupp_protocol - computed: false, optional: true, required: false
  private _unsuppProtocol?: number; 
  public get unsuppProtocol() {
    return this.getNumberAttribute('unsupp_protocol');
  }
  public set unsuppProtocol(value: number) {
    this._unsuppProtocol = value;
  }
  public resetUnsuppProtocol() {
    this._unsuppProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsuppProtocolInput() {
    return this._unsuppProtocol;
  }

  // unsupported_version - computed: false, optional: true, required: false
  private _unsupportedVersion?: number; 
  public get unsupportedVersion() {
    return this.getNumberAttribute('unsupported_version');
  }
  public set unsupportedVersion(value: number) {
    this._unsupportedVersion = value;
  }
  public resetUnsupportedVersion() {
    this._unsupportedVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsupportedVersionInput() {
    return this._unsupportedVersion;
  }

  // user_quota_exceeded - computed: false, optional: true, required: false
  private _userQuotaExceeded?: number; 
  public get userQuotaExceeded() {
    return this.getNumberAttribute('user_quota_exceeded');
  }
  public set userQuotaExceeded(value: number) {
    this._userQuotaExceeded = value;
  }
  public resetUserQuotaExceeded() {
    this._userQuotaExceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userQuotaExceededInput() {
    return this._userQuotaExceeded;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_pcp_stats thunder_cgnv6_pcp_stats}
*/
export class DataThunderCgnv6PcpStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_pcp_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderCgnv6PcpStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderCgnv6PcpStats to import
  * @param importFromId The id of the existing DataThunderCgnv6PcpStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_pcp_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderCgnv6PcpStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_pcp_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_pcp_stats thunder_cgnv6_pcp_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderCgnv6PcpStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderCgnv6PcpStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_pcp_stats',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
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
  private _stats = new DataThunderCgnv6PcpStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderCgnv6PcpStatsStats) {
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
      stats: dataThunderCgnv6PcpStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderCgnv6PcpStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderCgnv6PcpStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
