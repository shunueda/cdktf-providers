// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/so_counters_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSoCountersStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/so_counters_stats#id DataThunderSoCountersStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/so_counters_stats#stats DataThunderSoCountersStats#stats}
  */
  readonly stats?: DataThunderSoCountersStatsStats;
}
export interface DataThunderSoCountersStatsStats {
  /**
  * FW Shadow Session created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/so_counters_stats#so_fw_shadow_session_created DataThunderSoCountersStats#so_fw_shadow_session_created}
  */
  readonly soFwShadowSessionCreated?: number;
  /**
  * Destination MAC Mistmatch Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/so_counters_stats#so_pkts_dest_mac_mismatch_drop DataThunderSoCountersStats#so_pkts_dest_mac_mismatch_drop}
  */
  readonly soPktsDestMacMismatchDrop?: number;
  /**
  * Total packets dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/so_counters_stats#so_pkts_dropped DataThunderSoCountersStats#so_pkts_dropped}
  */
  readonly soPktsDropped?: number;
  /**
  * Destination MAC Address zero Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/so_counters_stats#so_pkts_l2redirect_dest_mac_zero_drop DataThunderSoCountersStats#so_pkts_l2redirect_dest_mac_zero_drop}
  */
  readonly soPktsL2RedirectDestMacZeroDrop?: number;
  /**
  * L2redirect Intf is not UP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/so_counters_stats#so_pkts_l2redirect_interface_not_up DataThunderSoCountersStats#so_pkts_l2redirect_interface_not_up}
  */
  readonly soPktsL2RedirectInterfaceNotUp?: number;
  /**
  * Redirect Table Error due to invalid redirect info
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/so_counters_stats#so_pkts_l2redirect_invalid_redirect_info_error DataThunderSoCountersStats#so_pkts_l2redirect_invalid_redirect_info_error}
  */
  readonly soPktsL2RedirectInvalidRedirectInfoError?: number;
  /**
  * L2 redirect pkt port not retrieved
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/so_counters_stats#so_pkts_l2redirect_port_retrieval_error DataThunderSoCountersStats#so_pkts_l2redirect_port_retrieval_error}
  */
  readonly soPktsL2RedirectPortRetrievalError?: number;
  /**
  * L2 redirect pkt vlan not retrieved
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/so_counters_stats#so_pkts_l2redirect_vlan_retrieval_error DataThunderSoCountersStats#so_pkts_l2redirect_vlan_retrieval_error}
  */
  readonly soPktsL2RedirectVlanRetrievalError?: number;
  /**
  * L3 Redirect RX multi-slot Destination MAC Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/so_counters_stats#so_pkts_l3_redirect_chassis_dest_mac_error DataThunderSoCountersStats#so_pkts_l3_redirect_chassis_dest_mac_error}
  */
  readonly soPktsL3RedirectChassisDestMacError?: number;
  /**
  * L3 Redirect received non ipv4 VXLAN packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/so_counters_stats#so_pkts_l3_redirect_decap_non_ipv4_vxlan_drop DataThunderSoCountersStats#so_pkts_l3_redirect_decap_non_ipv4_vxlan_drop}
  */
  readonly soPktsL3RedirectDecapNonIpv4VxlanDrop?: number;
  /**
  * L3 Redirect decap Rx encap params error Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/so_counters_stats#so_pkts_l3_redirect_decap_rx_encap_params_drop DataThunderSoCountersStats#so_pkts_l3_redirect_decap_rx_encap_params_drop}
  */
  readonly soPktsL3RedirectDecapRxEncapParamsDrop?: number;
  /**
  * L3 Redirect Decap VLAN Sanity Drop during receipt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/so_counters_stats#so_pkts_l3_redirect_decap_vlan_sanity_drop DataThunderSoCountersStats#so_pkts_l3_redirect_decap_vlan_sanity_drop}
  */
  readonly soPktsL3RedirectDecapVlanSanityDrop?: number;
  /**
  * L3 Redirect encap error drop during transmission
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/so_counters_stats#so_pkts_l3_redirect_encap_error_drop DataThunderSoCountersStats#so_pkts_l3_redirect_encap_error_drop}
  */
  readonly soPktsL3RedirectEncapErrorDrop?: number;
  /**
  * L3 Redirect ipv4 packet after encap more than max jumbo size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/so_counters_stats#so_pkts_l3_redirect_encap_ipv4_jumbo_frag_drop DataThunderSoCountersStats#so_pkts_l3_redirect_encap_ipv4_jumbo_frag_drop}
  */
  readonly soPktsL3RedirectEncapIpv4JumboFragDrop?: number;
  /**
  * L3 Redirect tx ipv6 packet after encap more than max jumbo size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/so_counters_stats#so_pkts_l3_redirect_encap_ipv6_jumbo_frag_drop DataThunderSoCountersStats#so_pkts_l3_redirect_encap_ipv6_jumbo_frag_drop}
  */
  readonly soPktsL3RedirectEncapIpv6JumboFragDrop?: number;
  /**
  * L3 redirect encap Fragmentation error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/so_counters_stats#so_pkts_l3_redirect_fragmentation_error DataThunderSoCountersStats#so_pkts_l3_redirect_fragmentation_error}
  */
  readonly soPktsL3RedirectFragmentationError?: number;
  /**
  * L3 Redirect inner mac zero drop during transmission
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/so_counters_stats#so_pkts_l3_redirect_inner_mac_zero_drop DataThunderSoCountersStats#so_pkts_l3_redirect_inner_mac_zero_drop}
  */
  readonly soPktsL3RedirectInnerMacZeroDrop?: number;
  /**
  * L3 Redirect Invalid Device direction during transmission
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/so_counters_stats#so_pkts_l3_redirect_invalid_dev_dir DataThunderSoCountersStats#so_pkts_l3_redirect_invalid_dev_dir}
  */
  readonly soPktsL3RedirectInvalidDevDir?: number;
  /**
  * Recevied l3 redirect packets in L2 mode Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/so_counters_stats#so_pkts_l3_redirect_rcvd_in_l2_mode_drop DataThunderSoCountersStats#so_pkts_l3_redirect_rcvd_in_l2_mode_drop}
  */
  readonly soPktsL3RedirectRcvdInL2ModeDrop?: number;
  /**
  * L3 Redirect Table error Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/so_counters_stats#so_pkts_l3_redirect_table_error DataThunderSoCountersStats#so_pkts_l3_redirect_table_error}
  */
  readonly soPktsL3RedirectTableError?: number;
  /**
  * L3 redirect Table no redirect entry found error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/so_counters_stats#so_pkts_l3_redirect_table_no_entry_found DataThunderSoCountersStats#so_pkts_l3_redirect_table_no_entry_found}
  */
  readonly soPktsL3RedirectTableNoEntryFound?: number;
  /**
  * Received L3 Redirected fragmented packets too large
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/so_counters_stats#so_pkts_l3_redirect_too_large_pkts_in_drop DataThunderSoCountersStats#so_pkts_l3_redirect_too_large_pkts_in_drop}
  */
  readonly soPktsL3RedirectTooLargePktsInDrop?: number;
  /**
  * Total data packets received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/so_counters_stats#so_pkts_rcvd DataThunderSoCountersStats#so_pkts_rcvd}
  */
  readonly soPktsRcvd?: number;
  /**
  * Scaleout Not Active Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/so_counters_stats#so_pkts_scaleout_not_active_drop DataThunderSoCountersStats#so_pkts_scaleout_not_active_drop}
  */
  readonly soPktsScaleoutNotActiveDrop?: number;
  /**
  * Total SLB NAT release failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/so_counters_stats#so_pkts_slb_nat_release_fail DataThunderSoCountersStats#so_pkts_slb_nat_release_fail}
  */
  readonly soPktsSlbNatReleaseFail?: number;
  /**
  * Total SLB NAT reserve failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/so_counters_stats#so_pkts_slb_nat_reserve_fail DataThunderSoCountersStats#so_pkts_slb_nat_reserve_fail}
  */
  readonly soPktsSlbNatReserveFail?: number;
  /**
  * Traffic MAP Not Found Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/so_counters_stats#so_pkts_traffic_map_not_found_drop DataThunderSoCountersStats#so_pkts_traffic_map_not_found_drop}
  */
  readonly soPktsTrafficMapNotFoundDrop?: number;
  /**
  * Total packets redirected out of node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/so_counters_stats#so_redirect_pkts_sent DataThunderSoCountersStats#so_redirect_pkts_sent}
  */
  readonly soRedirectPktsSent?: number;
  /**
  * Total redirected packets received on node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/so_counters_stats#so_redirected_pkts_rcvd DataThunderSoCountersStats#so_redirected_pkts_rcvd}
  */
  readonly soRedirectedPktsRcvd?: number;
  /**
  * Total SLB redirect conns aged out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/so_counters_stats#so_slb_pkts_redirect_conn_aged_out DataThunderSoCountersStats#so_slb_pkts_redirect_conn_aged_out}
  */
  readonly soSlbPktsRedirectConnAgedOut?: number;
  /**
  * SLB Shadow Session created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/so_counters_stats#so_slb_shadow_session_created DataThunderSoCountersStats#so_slb_shadow_session_created}
  */
  readonly soSlbShadowSessionCreated?: number;
}

export function dataThunderSoCountersStatsStatsToTerraform(struct?: DataThunderSoCountersStatsStatsOutputReference | DataThunderSoCountersStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    so_fw_shadow_session_created: cdktf.numberToTerraform(struct!.soFwShadowSessionCreated),
    so_pkts_dest_mac_mismatch_drop: cdktf.numberToTerraform(struct!.soPktsDestMacMismatchDrop),
    so_pkts_dropped: cdktf.numberToTerraform(struct!.soPktsDropped),
    so_pkts_l2redirect_dest_mac_zero_drop: cdktf.numberToTerraform(struct!.soPktsL2RedirectDestMacZeroDrop),
    so_pkts_l2redirect_interface_not_up: cdktf.numberToTerraform(struct!.soPktsL2RedirectInterfaceNotUp),
    so_pkts_l2redirect_invalid_redirect_info_error: cdktf.numberToTerraform(struct!.soPktsL2RedirectInvalidRedirectInfoError),
    so_pkts_l2redirect_port_retrieval_error: cdktf.numberToTerraform(struct!.soPktsL2RedirectPortRetrievalError),
    so_pkts_l2redirect_vlan_retrieval_error: cdktf.numberToTerraform(struct!.soPktsL2RedirectVlanRetrievalError),
    so_pkts_l3_redirect_chassis_dest_mac_error: cdktf.numberToTerraform(struct!.soPktsL3RedirectChassisDestMacError),
    so_pkts_l3_redirect_decap_non_ipv4_vxlan_drop: cdktf.numberToTerraform(struct!.soPktsL3RedirectDecapNonIpv4VxlanDrop),
    so_pkts_l3_redirect_decap_rx_encap_params_drop: cdktf.numberToTerraform(struct!.soPktsL3RedirectDecapRxEncapParamsDrop),
    so_pkts_l3_redirect_decap_vlan_sanity_drop: cdktf.numberToTerraform(struct!.soPktsL3RedirectDecapVlanSanityDrop),
    so_pkts_l3_redirect_encap_error_drop: cdktf.numberToTerraform(struct!.soPktsL3RedirectEncapErrorDrop),
    so_pkts_l3_redirect_encap_ipv4_jumbo_frag_drop: cdktf.numberToTerraform(struct!.soPktsL3RedirectEncapIpv4JumboFragDrop),
    so_pkts_l3_redirect_encap_ipv6_jumbo_frag_drop: cdktf.numberToTerraform(struct!.soPktsL3RedirectEncapIpv6JumboFragDrop),
    so_pkts_l3_redirect_fragmentation_error: cdktf.numberToTerraform(struct!.soPktsL3RedirectFragmentationError),
    so_pkts_l3_redirect_inner_mac_zero_drop: cdktf.numberToTerraform(struct!.soPktsL3RedirectInnerMacZeroDrop),
    so_pkts_l3_redirect_invalid_dev_dir: cdktf.numberToTerraform(struct!.soPktsL3RedirectInvalidDevDir),
    so_pkts_l3_redirect_rcvd_in_l2_mode_drop: cdktf.numberToTerraform(struct!.soPktsL3RedirectRcvdInL2ModeDrop),
    so_pkts_l3_redirect_table_error: cdktf.numberToTerraform(struct!.soPktsL3RedirectTableError),
    so_pkts_l3_redirect_table_no_entry_found: cdktf.numberToTerraform(struct!.soPktsL3RedirectTableNoEntryFound),
    so_pkts_l3_redirect_too_large_pkts_in_drop: cdktf.numberToTerraform(struct!.soPktsL3RedirectTooLargePktsInDrop),
    so_pkts_rcvd: cdktf.numberToTerraform(struct!.soPktsRcvd),
    so_pkts_scaleout_not_active_drop: cdktf.numberToTerraform(struct!.soPktsScaleoutNotActiveDrop),
    so_pkts_slb_nat_release_fail: cdktf.numberToTerraform(struct!.soPktsSlbNatReleaseFail),
    so_pkts_slb_nat_reserve_fail: cdktf.numberToTerraform(struct!.soPktsSlbNatReserveFail),
    so_pkts_traffic_map_not_found_drop: cdktf.numberToTerraform(struct!.soPktsTrafficMapNotFoundDrop),
    so_redirect_pkts_sent: cdktf.numberToTerraform(struct!.soRedirectPktsSent),
    so_redirected_pkts_rcvd: cdktf.numberToTerraform(struct!.soRedirectedPktsRcvd),
    so_slb_pkts_redirect_conn_aged_out: cdktf.numberToTerraform(struct!.soSlbPktsRedirectConnAgedOut),
    so_slb_shadow_session_created: cdktf.numberToTerraform(struct!.soSlbShadowSessionCreated),
  }
}


export function dataThunderSoCountersStatsStatsToHclTerraform(struct?: DataThunderSoCountersStatsStatsOutputReference | DataThunderSoCountersStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    so_fw_shadow_session_created: {
      value: cdktf.numberToHclTerraform(struct!.soFwShadowSessionCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    so_pkts_dest_mac_mismatch_drop: {
      value: cdktf.numberToHclTerraform(struct!.soPktsDestMacMismatchDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    so_pkts_dropped: {
      value: cdktf.numberToHclTerraform(struct!.soPktsDropped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    so_pkts_l2redirect_dest_mac_zero_drop: {
      value: cdktf.numberToHclTerraform(struct!.soPktsL2RedirectDestMacZeroDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    so_pkts_l2redirect_interface_not_up: {
      value: cdktf.numberToHclTerraform(struct!.soPktsL2RedirectInterfaceNotUp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    so_pkts_l2redirect_invalid_redirect_info_error: {
      value: cdktf.numberToHclTerraform(struct!.soPktsL2RedirectInvalidRedirectInfoError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    so_pkts_l2redirect_port_retrieval_error: {
      value: cdktf.numberToHclTerraform(struct!.soPktsL2RedirectPortRetrievalError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    so_pkts_l2redirect_vlan_retrieval_error: {
      value: cdktf.numberToHclTerraform(struct!.soPktsL2RedirectVlanRetrievalError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    so_pkts_l3_redirect_chassis_dest_mac_error: {
      value: cdktf.numberToHclTerraform(struct!.soPktsL3RedirectChassisDestMacError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    so_pkts_l3_redirect_decap_non_ipv4_vxlan_drop: {
      value: cdktf.numberToHclTerraform(struct!.soPktsL3RedirectDecapNonIpv4VxlanDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    so_pkts_l3_redirect_decap_rx_encap_params_drop: {
      value: cdktf.numberToHclTerraform(struct!.soPktsL3RedirectDecapRxEncapParamsDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    so_pkts_l3_redirect_decap_vlan_sanity_drop: {
      value: cdktf.numberToHclTerraform(struct!.soPktsL3RedirectDecapVlanSanityDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    so_pkts_l3_redirect_encap_error_drop: {
      value: cdktf.numberToHclTerraform(struct!.soPktsL3RedirectEncapErrorDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    so_pkts_l3_redirect_encap_ipv4_jumbo_frag_drop: {
      value: cdktf.numberToHclTerraform(struct!.soPktsL3RedirectEncapIpv4JumboFragDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    so_pkts_l3_redirect_encap_ipv6_jumbo_frag_drop: {
      value: cdktf.numberToHclTerraform(struct!.soPktsL3RedirectEncapIpv6JumboFragDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    so_pkts_l3_redirect_fragmentation_error: {
      value: cdktf.numberToHclTerraform(struct!.soPktsL3RedirectFragmentationError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    so_pkts_l3_redirect_inner_mac_zero_drop: {
      value: cdktf.numberToHclTerraform(struct!.soPktsL3RedirectInnerMacZeroDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    so_pkts_l3_redirect_invalid_dev_dir: {
      value: cdktf.numberToHclTerraform(struct!.soPktsL3RedirectInvalidDevDir),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    so_pkts_l3_redirect_rcvd_in_l2_mode_drop: {
      value: cdktf.numberToHclTerraform(struct!.soPktsL3RedirectRcvdInL2ModeDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    so_pkts_l3_redirect_table_error: {
      value: cdktf.numberToHclTerraform(struct!.soPktsL3RedirectTableError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    so_pkts_l3_redirect_table_no_entry_found: {
      value: cdktf.numberToHclTerraform(struct!.soPktsL3RedirectTableNoEntryFound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    so_pkts_l3_redirect_too_large_pkts_in_drop: {
      value: cdktf.numberToHclTerraform(struct!.soPktsL3RedirectTooLargePktsInDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    so_pkts_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.soPktsRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    so_pkts_scaleout_not_active_drop: {
      value: cdktf.numberToHclTerraform(struct!.soPktsScaleoutNotActiveDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    so_pkts_slb_nat_release_fail: {
      value: cdktf.numberToHclTerraform(struct!.soPktsSlbNatReleaseFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    so_pkts_slb_nat_reserve_fail: {
      value: cdktf.numberToHclTerraform(struct!.soPktsSlbNatReserveFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    so_pkts_traffic_map_not_found_drop: {
      value: cdktf.numberToHclTerraform(struct!.soPktsTrafficMapNotFoundDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    so_redirect_pkts_sent: {
      value: cdktf.numberToHclTerraform(struct!.soRedirectPktsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    so_redirected_pkts_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.soRedirectedPktsRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    so_slb_pkts_redirect_conn_aged_out: {
      value: cdktf.numberToHclTerraform(struct!.soSlbPktsRedirectConnAgedOut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    so_slb_shadow_session_created: {
      value: cdktf.numberToHclTerraform(struct!.soSlbShadowSessionCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSoCountersStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSoCountersStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._soFwShadowSessionCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.soFwShadowSessionCreated = this._soFwShadowSessionCreated;
    }
    if (this._soPktsDestMacMismatchDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.soPktsDestMacMismatchDrop = this._soPktsDestMacMismatchDrop;
    }
    if (this._soPktsDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.soPktsDropped = this._soPktsDropped;
    }
    if (this._soPktsL2RedirectDestMacZeroDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.soPktsL2RedirectDestMacZeroDrop = this._soPktsL2RedirectDestMacZeroDrop;
    }
    if (this._soPktsL2RedirectInterfaceNotUp !== undefined) {
      hasAnyValues = true;
      internalValueResult.soPktsL2RedirectInterfaceNotUp = this._soPktsL2RedirectInterfaceNotUp;
    }
    if (this._soPktsL2RedirectInvalidRedirectInfoError !== undefined) {
      hasAnyValues = true;
      internalValueResult.soPktsL2RedirectInvalidRedirectInfoError = this._soPktsL2RedirectInvalidRedirectInfoError;
    }
    if (this._soPktsL2RedirectPortRetrievalError !== undefined) {
      hasAnyValues = true;
      internalValueResult.soPktsL2RedirectPortRetrievalError = this._soPktsL2RedirectPortRetrievalError;
    }
    if (this._soPktsL2RedirectVlanRetrievalError !== undefined) {
      hasAnyValues = true;
      internalValueResult.soPktsL2RedirectVlanRetrievalError = this._soPktsL2RedirectVlanRetrievalError;
    }
    if (this._soPktsL3RedirectChassisDestMacError !== undefined) {
      hasAnyValues = true;
      internalValueResult.soPktsL3RedirectChassisDestMacError = this._soPktsL3RedirectChassisDestMacError;
    }
    if (this._soPktsL3RedirectDecapNonIpv4VxlanDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.soPktsL3RedirectDecapNonIpv4VxlanDrop = this._soPktsL3RedirectDecapNonIpv4VxlanDrop;
    }
    if (this._soPktsL3RedirectDecapRxEncapParamsDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.soPktsL3RedirectDecapRxEncapParamsDrop = this._soPktsL3RedirectDecapRxEncapParamsDrop;
    }
    if (this._soPktsL3RedirectDecapVlanSanityDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.soPktsL3RedirectDecapVlanSanityDrop = this._soPktsL3RedirectDecapVlanSanityDrop;
    }
    if (this._soPktsL3RedirectEncapErrorDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.soPktsL3RedirectEncapErrorDrop = this._soPktsL3RedirectEncapErrorDrop;
    }
    if (this._soPktsL3RedirectEncapIpv4JumboFragDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.soPktsL3RedirectEncapIpv4JumboFragDrop = this._soPktsL3RedirectEncapIpv4JumboFragDrop;
    }
    if (this._soPktsL3RedirectEncapIpv6JumboFragDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.soPktsL3RedirectEncapIpv6JumboFragDrop = this._soPktsL3RedirectEncapIpv6JumboFragDrop;
    }
    if (this._soPktsL3RedirectFragmentationError !== undefined) {
      hasAnyValues = true;
      internalValueResult.soPktsL3RedirectFragmentationError = this._soPktsL3RedirectFragmentationError;
    }
    if (this._soPktsL3RedirectInnerMacZeroDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.soPktsL3RedirectInnerMacZeroDrop = this._soPktsL3RedirectInnerMacZeroDrop;
    }
    if (this._soPktsL3RedirectInvalidDevDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.soPktsL3RedirectInvalidDevDir = this._soPktsL3RedirectInvalidDevDir;
    }
    if (this._soPktsL3RedirectRcvdInL2ModeDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.soPktsL3RedirectRcvdInL2ModeDrop = this._soPktsL3RedirectRcvdInL2ModeDrop;
    }
    if (this._soPktsL3RedirectTableError !== undefined) {
      hasAnyValues = true;
      internalValueResult.soPktsL3RedirectTableError = this._soPktsL3RedirectTableError;
    }
    if (this._soPktsL3RedirectTableNoEntryFound !== undefined) {
      hasAnyValues = true;
      internalValueResult.soPktsL3RedirectTableNoEntryFound = this._soPktsL3RedirectTableNoEntryFound;
    }
    if (this._soPktsL3RedirectTooLargePktsInDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.soPktsL3RedirectTooLargePktsInDrop = this._soPktsL3RedirectTooLargePktsInDrop;
    }
    if (this._soPktsRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.soPktsRcvd = this._soPktsRcvd;
    }
    if (this._soPktsScaleoutNotActiveDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.soPktsScaleoutNotActiveDrop = this._soPktsScaleoutNotActiveDrop;
    }
    if (this._soPktsSlbNatReleaseFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.soPktsSlbNatReleaseFail = this._soPktsSlbNatReleaseFail;
    }
    if (this._soPktsSlbNatReserveFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.soPktsSlbNatReserveFail = this._soPktsSlbNatReserveFail;
    }
    if (this._soPktsTrafficMapNotFoundDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.soPktsTrafficMapNotFoundDrop = this._soPktsTrafficMapNotFoundDrop;
    }
    if (this._soRedirectPktsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.soRedirectPktsSent = this._soRedirectPktsSent;
    }
    if (this._soRedirectedPktsRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.soRedirectedPktsRcvd = this._soRedirectedPktsRcvd;
    }
    if (this._soSlbPktsRedirectConnAgedOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.soSlbPktsRedirectConnAgedOut = this._soSlbPktsRedirectConnAgedOut;
    }
    if (this._soSlbShadowSessionCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.soSlbShadowSessionCreated = this._soSlbShadowSessionCreated;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSoCountersStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._soFwShadowSessionCreated = undefined;
      this._soPktsDestMacMismatchDrop = undefined;
      this._soPktsDropped = undefined;
      this._soPktsL2RedirectDestMacZeroDrop = undefined;
      this._soPktsL2RedirectInterfaceNotUp = undefined;
      this._soPktsL2RedirectInvalidRedirectInfoError = undefined;
      this._soPktsL2RedirectPortRetrievalError = undefined;
      this._soPktsL2RedirectVlanRetrievalError = undefined;
      this._soPktsL3RedirectChassisDestMacError = undefined;
      this._soPktsL3RedirectDecapNonIpv4VxlanDrop = undefined;
      this._soPktsL3RedirectDecapRxEncapParamsDrop = undefined;
      this._soPktsL3RedirectDecapVlanSanityDrop = undefined;
      this._soPktsL3RedirectEncapErrorDrop = undefined;
      this._soPktsL3RedirectEncapIpv4JumboFragDrop = undefined;
      this._soPktsL3RedirectEncapIpv6JumboFragDrop = undefined;
      this._soPktsL3RedirectFragmentationError = undefined;
      this._soPktsL3RedirectInnerMacZeroDrop = undefined;
      this._soPktsL3RedirectInvalidDevDir = undefined;
      this._soPktsL3RedirectRcvdInL2ModeDrop = undefined;
      this._soPktsL3RedirectTableError = undefined;
      this._soPktsL3RedirectTableNoEntryFound = undefined;
      this._soPktsL3RedirectTooLargePktsInDrop = undefined;
      this._soPktsRcvd = undefined;
      this._soPktsScaleoutNotActiveDrop = undefined;
      this._soPktsSlbNatReleaseFail = undefined;
      this._soPktsSlbNatReserveFail = undefined;
      this._soPktsTrafficMapNotFoundDrop = undefined;
      this._soRedirectPktsSent = undefined;
      this._soRedirectedPktsRcvd = undefined;
      this._soSlbPktsRedirectConnAgedOut = undefined;
      this._soSlbShadowSessionCreated = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._soFwShadowSessionCreated = value.soFwShadowSessionCreated;
      this._soPktsDestMacMismatchDrop = value.soPktsDestMacMismatchDrop;
      this._soPktsDropped = value.soPktsDropped;
      this._soPktsL2RedirectDestMacZeroDrop = value.soPktsL2RedirectDestMacZeroDrop;
      this._soPktsL2RedirectInterfaceNotUp = value.soPktsL2RedirectInterfaceNotUp;
      this._soPktsL2RedirectInvalidRedirectInfoError = value.soPktsL2RedirectInvalidRedirectInfoError;
      this._soPktsL2RedirectPortRetrievalError = value.soPktsL2RedirectPortRetrievalError;
      this._soPktsL2RedirectVlanRetrievalError = value.soPktsL2RedirectVlanRetrievalError;
      this._soPktsL3RedirectChassisDestMacError = value.soPktsL3RedirectChassisDestMacError;
      this._soPktsL3RedirectDecapNonIpv4VxlanDrop = value.soPktsL3RedirectDecapNonIpv4VxlanDrop;
      this._soPktsL3RedirectDecapRxEncapParamsDrop = value.soPktsL3RedirectDecapRxEncapParamsDrop;
      this._soPktsL3RedirectDecapVlanSanityDrop = value.soPktsL3RedirectDecapVlanSanityDrop;
      this._soPktsL3RedirectEncapErrorDrop = value.soPktsL3RedirectEncapErrorDrop;
      this._soPktsL3RedirectEncapIpv4JumboFragDrop = value.soPktsL3RedirectEncapIpv4JumboFragDrop;
      this._soPktsL3RedirectEncapIpv6JumboFragDrop = value.soPktsL3RedirectEncapIpv6JumboFragDrop;
      this._soPktsL3RedirectFragmentationError = value.soPktsL3RedirectFragmentationError;
      this._soPktsL3RedirectInnerMacZeroDrop = value.soPktsL3RedirectInnerMacZeroDrop;
      this._soPktsL3RedirectInvalidDevDir = value.soPktsL3RedirectInvalidDevDir;
      this._soPktsL3RedirectRcvdInL2ModeDrop = value.soPktsL3RedirectRcvdInL2ModeDrop;
      this._soPktsL3RedirectTableError = value.soPktsL3RedirectTableError;
      this._soPktsL3RedirectTableNoEntryFound = value.soPktsL3RedirectTableNoEntryFound;
      this._soPktsL3RedirectTooLargePktsInDrop = value.soPktsL3RedirectTooLargePktsInDrop;
      this._soPktsRcvd = value.soPktsRcvd;
      this._soPktsScaleoutNotActiveDrop = value.soPktsScaleoutNotActiveDrop;
      this._soPktsSlbNatReleaseFail = value.soPktsSlbNatReleaseFail;
      this._soPktsSlbNatReserveFail = value.soPktsSlbNatReserveFail;
      this._soPktsTrafficMapNotFoundDrop = value.soPktsTrafficMapNotFoundDrop;
      this._soRedirectPktsSent = value.soRedirectPktsSent;
      this._soRedirectedPktsRcvd = value.soRedirectedPktsRcvd;
      this._soSlbPktsRedirectConnAgedOut = value.soSlbPktsRedirectConnAgedOut;
      this._soSlbShadowSessionCreated = value.soSlbShadowSessionCreated;
    }
  }

  // so_fw_shadow_session_created - computed: false, optional: true, required: false
  private _soFwShadowSessionCreated?: number; 
  public get soFwShadowSessionCreated() {
    return this.getNumberAttribute('so_fw_shadow_session_created');
  }
  public set soFwShadowSessionCreated(value: number) {
    this._soFwShadowSessionCreated = value;
  }
  public resetSoFwShadowSessionCreated() {
    this._soFwShadowSessionCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soFwShadowSessionCreatedInput() {
    return this._soFwShadowSessionCreated;
  }

  // so_pkts_dest_mac_mismatch_drop - computed: false, optional: true, required: false
  private _soPktsDestMacMismatchDrop?: number; 
  public get soPktsDestMacMismatchDrop() {
    return this.getNumberAttribute('so_pkts_dest_mac_mismatch_drop');
  }
  public set soPktsDestMacMismatchDrop(value: number) {
    this._soPktsDestMacMismatchDrop = value;
  }
  public resetSoPktsDestMacMismatchDrop() {
    this._soPktsDestMacMismatchDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soPktsDestMacMismatchDropInput() {
    return this._soPktsDestMacMismatchDrop;
  }

  // so_pkts_dropped - computed: false, optional: true, required: false
  private _soPktsDropped?: number; 
  public get soPktsDropped() {
    return this.getNumberAttribute('so_pkts_dropped');
  }
  public set soPktsDropped(value: number) {
    this._soPktsDropped = value;
  }
  public resetSoPktsDropped() {
    this._soPktsDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soPktsDroppedInput() {
    return this._soPktsDropped;
  }

  // so_pkts_l2redirect_dest_mac_zero_drop - computed: false, optional: true, required: false
  private _soPktsL2RedirectDestMacZeroDrop?: number; 
  public get soPktsL2RedirectDestMacZeroDrop() {
    return this.getNumberAttribute('so_pkts_l2redirect_dest_mac_zero_drop');
  }
  public set soPktsL2RedirectDestMacZeroDrop(value: number) {
    this._soPktsL2RedirectDestMacZeroDrop = value;
  }
  public resetSoPktsL2RedirectDestMacZeroDrop() {
    this._soPktsL2RedirectDestMacZeroDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soPktsL2RedirectDestMacZeroDropInput() {
    return this._soPktsL2RedirectDestMacZeroDrop;
  }

  // so_pkts_l2redirect_interface_not_up - computed: false, optional: true, required: false
  private _soPktsL2RedirectInterfaceNotUp?: number; 
  public get soPktsL2RedirectInterfaceNotUp() {
    return this.getNumberAttribute('so_pkts_l2redirect_interface_not_up');
  }
  public set soPktsL2RedirectInterfaceNotUp(value: number) {
    this._soPktsL2RedirectInterfaceNotUp = value;
  }
  public resetSoPktsL2RedirectInterfaceNotUp() {
    this._soPktsL2RedirectInterfaceNotUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soPktsL2RedirectInterfaceNotUpInput() {
    return this._soPktsL2RedirectInterfaceNotUp;
  }

  // so_pkts_l2redirect_invalid_redirect_info_error - computed: false, optional: true, required: false
  private _soPktsL2RedirectInvalidRedirectInfoError?: number; 
  public get soPktsL2RedirectInvalidRedirectInfoError() {
    return this.getNumberAttribute('so_pkts_l2redirect_invalid_redirect_info_error');
  }
  public set soPktsL2RedirectInvalidRedirectInfoError(value: number) {
    this._soPktsL2RedirectInvalidRedirectInfoError = value;
  }
  public resetSoPktsL2RedirectInvalidRedirectInfoError() {
    this._soPktsL2RedirectInvalidRedirectInfoError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soPktsL2RedirectInvalidRedirectInfoErrorInput() {
    return this._soPktsL2RedirectInvalidRedirectInfoError;
  }

  // so_pkts_l2redirect_port_retrieval_error - computed: false, optional: true, required: false
  private _soPktsL2RedirectPortRetrievalError?: number; 
  public get soPktsL2RedirectPortRetrievalError() {
    return this.getNumberAttribute('so_pkts_l2redirect_port_retrieval_error');
  }
  public set soPktsL2RedirectPortRetrievalError(value: number) {
    this._soPktsL2RedirectPortRetrievalError = value;
  }
  public resetSoPktsL2RedirectPortRetrievalError() {
    this._soPktsL2RedirectPortRetrievalError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soPktsL2RedirectPortRetrievalErrorInput() {
    return this._soPktsL2RedirectPortRetrievalError;
  }

  // so_pkts_l2redirect_vlan_retrieval_error - computed: false, optional: true, required: false
  private _soPktsL2RedirectVlanRetrievalError?: number; 
  public get soPktsL2RedirectVlanRetrievalError() {
    return this.getNumberAttribute('so_pkts_l2redirect_vlan_retrieval_error');
  }
  public set soPktsL2RedirectVlanRetrievalError(value: number) {
    this._soPktsL2RedirectVlanRetrievalError = value;
  }
  public resetSoPktsL2RedirectVlanRetrievalError() {
    this._soPktsL2RedirectVlanRetrievalError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soPktsL2RedirectVlanRetrievalErrorInput() {
    return this._soPktsL2RedirectVlanRetrievalError;
  }

  // so_pkts_l3_redirect_chassis_dest_mac_error - computed: false, optional: true, required: false
  private _soPktsL3RedirectChassisDestMacError?: number; 
  public get soPktsL3RedirectChassisDestMacError() {
    return this.getNumberAttribute('so_pkts_l3_redirect_chassis_dest_mac_error');
  }
  public set soPktsL3RedirectChassisDestMacError(value: number) {
    this._soPktsL3RedirectChassisDestMacError = value;
  }
  public resetSoPktsL3RedirectChassisDestMacError() {
    this._soPktsL3RedirectChassisDestMacError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soPktsL3RedirectChassisDestMacErrorInput() {
    return this._soPktsL3RedirectChassisDestMacError;
  }

  // so_pkts_l3_redirect_decap_non_ipv4_vxlan_drop - computed: false, optional: true, required: false
  private _soPktsL3RedirectDecapNonIpv4VxlanDrop?: number; 
  public get soPktsL3RedirectDecapNonIpv4VxlanDrop() {
    return this.getNumberAttribute('so_pkts_l3_redirect_decap_non_ipv4_vxlan_drop');
  }
  public set soPktsL3RedirectDecapNonIpv4VxlanDrop(value: number) {
    this._soPktsL3RedirectDecapNonIpv4VxlanDrop = value;
  }
  public resetSoPktsL3RedirectDecapNonIpv4VxlanDrop() {
    this._soPktsL3RedirectDecapNonIpv4VxlanDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soPktsL3RedirectDecapNonIpv4VxlanDropInput() {
    return this._soPktsL3RedirectDecapNonIpv4VxlanDrop;
  }

  // so_pkts_l3_redirect_decap_rx_encap_params_drop - computed: false, optional: true, required: false
  private _soPktsL3RedirectDecapRxEncapParamsDrop?: number; 
  public get soPktsL3RedirectDecapRxEncapParamsDrop() {
    return this.getNumberAttribute('so_pkts_l3_redirect_decap_rx_encap_params_drop');
  }
  public set soPktsL3RedirectDecapRxEncapParamsDrop(value: number) {
    this._soPktsL3RedirectDecapRxEncapParamsDrop = value;
  }
  public resetSoPktsL3RedirectDecapRxEncapParamsDrop() {
    this._soPktsL3RedirectDecapRxEncapParamsDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soPktsL3RedirectDecapRxEncapParamsDropInput() {
    return this._soPktsL3RedirectDecapRxEncapParamsDrop;
  }

  // so_pkts_l3_redirect_decap_vlan_sanity_drop - computed: false, optional: true, required: false
  private _soPktsL3RedirectDecapVlanSanityDrop?: number; 
  public get soPktsL3RedirectDecapVlanSanityDrop() {
    return this.getNumberAttribute('so_pkts_l3_redirect_decap_vlan_sanity_drop');
  }
  public set soPktsL3RedirectDecapVlanSanityDrop(value: number) {
    this._soPktsL3RedirectDecapVlanSanityDrop = value;
  }
  public resetSoPktsL3RedirectDecapVlanSanityDrop() {
    this._soPktsL3RedirectDecapVlanSanityDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soPktsL3RedirectDecapVlanSanityDropInput() {
    return this._soPktsL3RedirectDecapVlanSanityDrop;
  }

  // so_pkts_l3_redirect_encap_error_drop - computed: false, optional: true, required: false
  private _soPktsL3RedirectEncapErrorDrop?: number; 
  public get soPktsL3RedirectEncapErrorDrop() {
    return this.getNumberAttribute('so_pkts_l3_redirect_encap_error_drop');
  }
  public set soPktsL3RedirectEncapErrorDrop(value: number) {
    this._soPktsL3RedirectEncapErrorDrop = value;
  }
  public resetSoPktsL3RedirectEncapErrorDrop() {
    this._soPktsL3RedirectEncapErrorDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soPktsL3RedirectEncapErrorDropInput() {
    return this._soPktsL3RedirectEncapErrorDrop;
  }

  // so_pkts_l3_redirect_encap_ipv4_jumbo_frag_drop - computed: false, optional: true, required: false
  private _soPktsL3RedirectEncapIpv4JumboFragDrop?: number; 
  public get soPktsL3RedirectEncapIpv4JumboFragDrop() {
    return this.getNumberAttribute('so_pkts_l3_redirect_encap_ipv4_jumbo_frag_drop');
  }
  public set soPktsL3RedirectEncapIpv4JumboFragDrop(value: number) {
    this._soPktsL3RedirectEncapIpv4JumboFragDrop = value;
  }
  public resetSoPktsL3RedirectEncapIpv4JumboFragDrop() {
    this._soPktsL3RedirectEncapIpv4JumboFragDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soPktsL3RedirectEncapIpv4JumboFragDropInput() {
    return this._soPktsL3RedirectEncapIpv4JumboFragDrop;
  }

  // so_pkts_l3_redirect_encap_ipv6_jumbo_frag_drop - computed: false, optional: true, required: false
  private _soPktsL3RedirectEncapIpv6JumboFragDrop?: number; 
  public get soPktsL3RedirectEncapIpv6JumboFragDrop() {
    return this.getNumberAttribute('so_pkts_l3_redirect_encap_ipv6_jumbo_frag_drop');
  }
  public set soPktsL3RedirectEncapIpv6JumboFragDrop(value: number) {
    this._soPktsL3RedirectEncapIpv6JumboFragDrop = value;
  }
  public resetSoPktsL3RedirectEncapIpv6JumboFragDrop() {
    this._soPktsL3RedirectEncapIpv6JumboFragDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soPktsL3RedirectEncapIpv6JumboFragDropInput() {
    return this._soPktsL3RedirectEncapIpv6JumboFragDrop;
  }

  // so_pkts_l3_redirect_fragmentation_error - computed: false, optional: true, required: false
  private _soPktsL3RedirectFragmentationError?: number; 
  public get soPktsL3RedirectFragmentationError() {
    return this.getNumberAttribute('so_pkts_l3_redirect_fragmentation_error');
  }
  public set soPktsL3RedirectFragmentationError(value: number) {
    this._soPktsL3RedirectFragmentationError = value;
  }
  public resetSoPktsL3RedirectFragmentationError() {
    this._soPktsL3RedirectFragmentationError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soPktsL3RedirectFragmentationErrorInput() {
    return this._soPktsL3RedirectFragmentationError;
  }

  // so_pkts_l3_redirect_inner_mac_zero_drop - computed: false, optional: true, required: false
  private _soPktsL3RedirectInnerMacZeroDrop?: number; 
  public get soPktsL3RedirectInnerMacZeroDrop() {
    return this.getNumberAttribute('so_pkts_l3_redirect_inner_mac_zero_drop');
  }
  public set soPktsL3RedirectInnerMacZeroDrop(value: number) {
    this._soPktsL3RedirectInnerMacZeroDrop = value;
  }
  public resetSoPktsL3RedirectInnerMacZeroDrop() {
    this._soPktsL3RedirectInnerMacZeroDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soPktsL3RedirectInnerMacZeroDropInput() {
    return this._soPktsL3RedirectInnerMacZeroDrop;
  }

  // so_pkts_l3_redirect_invalid_dev_dir - computed: false, optional: true, required: false
  private _soPktsL3RedirectInvalidDevDir?: number; 
  public get soPktsL3RedirectInvalidDevDir() {
    return this.getNumberAttribute('so_pkts_l3_redirect_invalid_dev_dir');
  }
  public set soPktsL3RedirectInvalidDevDir(value: number) {
    this._soPktsL3RedirectInvalidDevDir = value;
  }
  public resetSoPktsL3RedirectInvalidDevDir() {
    this._soPktsL3RedirectInvalidDevDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soPktsL3RedirectInvalidDevDirInput() {
    return this._soPktsL3RedirectInvalidDevDir;
  }

  // so_pkts_l3_redirect_rcvd_in_l2_mode_drop - computed: false, optional: true, required: false
  private _soPktsL3RedirectRcvdInL2ModeDrop?: number; 
  public get soPktsL3RedirectRcvdInL2ModeDrop() {
    return this.getNumberAttribute('so_pkts_l3_redirect_rcvd_in_l2_mode_drop');
  }
  public set soPktsL3RedirectRcvdInL2ModeDrop(value: number) {
    this._soPktsL3RedirectRcvdInL2ModeDrop = value;
  }
  public resetSoPktsL3RedirectRcvdInL2ModeDrop() {
    this._soPktsL3RedirectRcvdInL2ModeDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soPktsL3RedirectRcvdInL2ModeDropInput() {
    return this._soPktsL3RedirectRcvdInL2ModeDrop;
  }

  // so_pkts_l3_redirect_table_error - computed: false, optional: true, required: false
  private _soPktsL3RedirectTableError?: number; 
  public get soPktsL3RedirectTableError() {
    return this.getNumberAttribute('so_pkts_l3_redirect_table_error');
  }
  public set soPktsL3RedirectTableError(value: number) {
    this._soPktsL3RedirectTableError = value;
  }
  public resetSoPktsL3RedirectTableError() {
    this._soPktsL3RedirectTableError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soPktsL3RedirectTableErrorInput() {
    return this._soPktsL3RedirectTableError;
  }

  // so_pkts_l3_redirect_table_no_entry_found - computed: false, optional: true, required: false
  private _soPktsL3RedirectTableNoEntryFound?: number; 
  public get soPktsL3RedirectTableNoEntryFound() {
    return this.getNumberAttribute('so_pkts_l3_redirect_table_no_entry_found');
  }
  public set soPktsL3RedirectTableNoEntryFound(value: number) {
    this._soPktsL3RedirectTableNoEntryFound = value;
  }
  public resetSoPktsL3RedirectTableNoEntryFound() {
    this._soPktsL3RedirectTableNoEntryFound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soPktsL3RedirectTableNoEntryFoundInput() {
    return this._soPktsL3RedirectTableNoEntryFound;
  }

  // so_pkts_l3_redirect_too_large_pkts_in_drop - computed: false, optional: true, required: false
  private _soPktsL3RedirectTooLargePktsInDrop?: number; 
  public get soPktsL3RedirectTooLargePktsInDrop() {
    return this.getNumberAttribute('so_pkts_l3_redirect_too_large_pkts_in_drop');
  }
  public set soPktsL3RedirectTooLargePktsInDrop(value: number) {
    this._soPktsL3RedirectTooLargePktsInDrop = value;
  }
  public resetSoPktsL3RedirectTooLargePktsInDrop() {
    this._soPktsL3RedirectTooLargePktsInDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soPktsL3RedirectTooLargePktsInDropInput() {
    return this._soPktsL3RedirectTooLargePktsInDrop;
  }

  // so_pkts_rcvd - computed: false, optional: true, required: false
  private _soPktsRcvd?: number; 
  public get soPktsRcvd() {
    return this.getNumberAttribute('so_pkts_rcvd');
  }
  public set soPktsRcvd(value: number) {
    this._soPktsRcvd = value;
  }
  public resetSoPktsRcvd() {
    this._soPktsRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soPktsRcvdInput() {
    return this._soPktsRcvd;
  }

  // so_pkts_scaleout_not_active_drop - computed: false, optional: true, required: false
  private _soPktsScaleoutNotActiveDrop?: number; 
  public get soPktsScaleoutNotActiveDrop() {
    return this.getNumberAttribute('so_pkts_scaleout_not_active_drop');
  }
  public set soPktsScaleoutNotActiveDrop(value: number) {
    this._soPktsScaleoutNotActiveDrop = value;
  }
  public resetSoPktsScaleoutNotActiveDrop() {
    this._soPktsScaleoutNotActiveDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soPktsScaleoutNotActiveDropInput() {
    return this._soPktsScaleoutNotActiveDrop;
  }

  // so_pkts_slb_nat_release_fail - computed: false, optional: true, required: false
  private _soPktsSlbNatReleaseFail?: number; 
  public get soPktsSlbNatReleaseFail() {
    return this.getNumberAttribute('so_pkts_slb_nat_release_fail');
  }
  public set soPktsSlbNatReleaseFail(value: number) {
    this._soPktsSlbNatReleaseFail = value;
  }
  public resetSoPktsSlbNatReleaseFail() {
    this._soPktsSlbNatReleaseFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soPktsSlbNatReleaseFailInput() {
    return this._soPktsSlbNatReleaseFail;
  }

  // so_pkts_slb_nat_reserve_fail - computed: false, optional: true, required: false
  private _soPktsSlbNatReserveFail?: number; 
  public get soPktsSlbNatReserveFail() {
    return this.getNumberAttribute('so_pkts_slb_nat_reserve_fail');
  }
  public set soPktsSlbNatReserveFail(value: number) {
    this._soPktsSlbNatReserveFail = value;
  }
  public resetSoPktsSlbNatReserveFail() {
    this._soPktsSlbNatReserveFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soPktsSlbNatReserveFailInput() {
    return this._soPktsSlbNatReserveFail;
  }

  // so_pkts_traffic_map_not_found_drop - computed: false, optional: true, required: false
  private _soPktsTrafficMapNotFoundDrop?: number; 
  public get soPktsTrafficMapNotFoundDrop() {
    return this.getNumberAttribute('so_pkts_traffic_map_not_found_drop');
  }
  public set soPktsTrafficMapNotFoundDrop(value: number) {
    this._soPktsTrafficMapNotFoundDrop = value;
  }
  public resetSoPktsTrafficMapNotFoundDrop() {
    this._soPktsTrafficMapNotFoundDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soPktsTrafficMapNotFoundDropInput() {
    return this._soPktsTrafficMapNotFoundDrop;
  }

  // so_redirect_pkts_sent - computed: false, optional: true, required: false
  private _soRedirectPktsSent?: number; 
  public get soRedirectPktsSent() {
    return this.getNumberAttribute('so_redirect_pkts_sent');
  }
  public set soRedirectPktsSent(value: number) {
    this._soRedirectPktsSent = value;
  }
  public resetSoRedirectPktsSent() {
    this._soRedirectPktsSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soRedirectPktsSentInput() {
    return this._soRedirectPktsSent;
  }

  // so_redirected_pkts_rcvd - computed: false, optional: true, required: false
  private _soRedirectedPktsRcvd?: number; 
  public get soRedirectedPktsRcvd() {
    return this.getNumberAttribute('so_redirected_pkts_rcvd');
  }
  public set soRedirectedPktsRcvd(value: number) {
    this._soRedirectedPktsRcvd = value;
  }
  public resetSoRedirectedPktsRcvd() {
    this._soRedirectedPktsRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soRedirectedPktsRcvdInput() {
    return this._soRedirectedPktsRcvd;
  }

  // so_slb_pkts_redirect_conn_aged_out - computed: false, optional: true, required: false
  private _soSlbPktsRedirectConnAgedOut?: number; 
  public get soSlbPktsRedirectConnAgedOut() {
    return this.getNumberAttribute('so_slb_pkts_redirect_conn_aged_out');
  }
  public set soSlbPktsRedirectConnAgedOut(value: number) {
    this._soSlbPktsRedirectConnAgedOut = value;
  }
  public resetSoSlbPktsRedirectConnAgedOut() {
    this._soSlbPktsRedirectConnAgedOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soSlbPktsRedirectConnAgedOutInput() {
    return this._soSlbPktsRedirectConnAgedOut;
  }

  // so_slb_shadow_session_created - computed: false, optional: true, required: false
  private _soSlbShadowSessionCreated?: number; 
  public get soSlbShadowSessionCreated() {
    return this.getNumberAttribute('so_slb_shadow_session_created');
  }
  public set soSlbShadowSessionCreated(value: number) {
    this._soSlbShadowSessionCreated = value;
  }
  public resetSoSlbShadowSessionCreated() {
    this._soSlbShadowSessionCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soSlbShadowSessionCreatedInput() {
    return this._soSlbShadowSessionCreated;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/so_counters_stats thunder_so_counters_stats}
*/
export class DataThunderSoCountersStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_so_counters_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSoCountersStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSoCountersStats to import
  * @param importFromId The id of the existing DataThunderSoCountersStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/so_counters_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSoCountersStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_so_counters_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/so_counters_stats thunder_so_counters_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSoCountersStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSoCountersStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_so_counters_stats',
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
  private _stats = new DataThunderSoCountersStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderSoCountersStatsStats) {
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
      stats: dataThunderSoCountersStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderSoCountersStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSoCountersStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
