// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectSystemNpuConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#adom ObjectSystemNpu#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#capwap_offload ObjectSystemNpu#capwap_offload}
  */
  readonly capwapOffload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dedicated_lacp_queue ObjectSystemNpu#dedicated_lacp_queue}
  */
  readonly dedicatedLacpQueue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dedicated_management_affinity ObjectSystemNpu#dedicated_management_affinity}
  */
  readonly dedicatedManagementAffinity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dedicated_management_cpu ObjectSystemNpu#dedicated_management_cpu}
  */
  readonly dedicatedManagementCpu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#default_qos_type ObjectSystemNpu#default_qos_type}
  */
  readonly defaultQosType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#default_tcp_refresh_dir ObjectSystemNpu#default_tcp_refresh_dir}
  */
  readonly defaultTcpRefreshDir?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#default_udp_refresh_dir ObjectSystemNpu#default_udp_refresh_dir}
  */
  readonly defaultUdpRefreshDir?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#double_level_mcast_offload ObjectSystemNpu#double_level_mcast_offload}
  */
  readonly doubleLevelMcastOffload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dse_timeout ObjectSystemNpu#dse_timeout}
  */
  readonly dseTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dynamic_sort_subtable ObjectSystemNpu#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#fastpath ObjectSystemNpu#fastpath}
  */
  readonly fastpath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#gtp_enhanced_cpu_range ObjectSystemNpu#gtp_enhanced_cpu_range}
  */
  readonly gtpEnhancedCpuRange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#gtp_enhanced_mode ObjectSystemNpu#gtp_enhanced_mode}
  */
  readonly gtpEnhancedMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#gtp_support ObjectSystemNpu#gtp_support}
  */
  readonly gtpSupport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#hash_config ObjectSystemNpu#hash_config}
  */
  readonly hashConfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#hash_ipv6_sel ObjectSystemNpu#hash_ipv6_sel}
  */
  readonly hashIpv6Sel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#hash_tbl_spread ObjectSystemNpu#hash_tbl_spread}
  */
  readonly hashTblSpread?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#host_shortcut_mode ObjectSystemNpu#host_shortcut_mode}
  */
  readonly hostShortcutMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#htab_dedi_queue_nr ObjectSystemNpu#htab_dedi_queue_nr}
  */
  readonly htabDediQueueNr?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#htab_msg_queue ObjectSystemNpu#htab_msg_queue}
  */
  readonly htabMsgQueue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#htx_gtse_quota ObjectSystemNpu#htx_gtse_quota}
  */
  readonly htxGtseQuota?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#htx_icmp_csum_chk ObjectSystemNpu#htx_icmp_csum_chk}
  */
  readonly htxIcmpCsumChk?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#hw_ha_scan_interval ObjectSystemNpu#hw_ha_scan_interval}
  */
  readonly hwHaScanInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#id ObjectSystemNpu#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#inbound_dscp_copy ObjectSystemNpu#inbound_dscp_copy}
  */
  readonly inboundDscpCopy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#inbound_dscp_copy_port ObjectSystemNpu#inbound_dscp_copy_port}
  */
  readonly inboundDscpCopyPort?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#intf_shaping_offload ObjectSystemNpu#intf_shaping_offload}
  */
  readonly intfShapingOffload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#ip_fragment_offload ObjectSystemNpu#ip_fragment_offload}
  */
  readonly ipFragmentOffload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#iph_rsvd_re_cksum ObjectSystemNpu#iph_rsvd_re_cksum}
  */
  readonly iphRsvdReCksum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#ippool_overload_high ObjectSystemNpu#ippool_overload_high}
  */
  readonly ippoolOverloadHigh?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#ippool_overload_low ObjectSystemNpu#ippool_overload_low}
  */
  readonly ippoolOverloadLow?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#ipsec_dec_subengine_mask ObjectSystemNpu#ipsec_dec_subengine_mask}
  */
  readonly ipsecDecSubengineMask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#ipsec_enc_subengine_mask ObjectSystemNpu#ipsec_enc_subengine_mask}
  */
  readonly ipsecEncSubengineMask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#ipsec_host_dfclr ObjectSystemNpu#ipsec_host_dfclr}
  */
  readonly ipsecHostDfclr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#ipsec_inbound_cache ObjectSystemNpu#ipsec_inbound_cache}
  */
  readonly ipsecInboundCache?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#ipsec_local_uesp_port ObjectSystemNpu#ipsec_local_uesp_port}
  */
  readonly ipsecLocalUespPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#ipsec_mtu_override ObjectSystemNpu#ipsec_mtu_override}
  */
  readonly ipsecMtuOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#ipsec_ob_np_sel ObjectSystemNpu#ipsec_ob_np_sel}
  */
  readonly ipsecObNpSel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#ipsec_ordering ObjectSystemNpu#ipsec_ordering}
  */
  readonly ipsecOrdering?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#ipsec_over_vlink ObjectSystemNpu#ipsec_over_vlink}
  */
  readonly ipsecOverVlink?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#ipsec_sts_timeout ObjectSystemNpu#ipsec_sts_timeout}
  */
  readonly ipsecStsTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#ipsec_throughput_msg_frequency ObjectSystemNpu#ipsec_throughput_msg_frequency}
  */
  readonly ipsecThroughputMsgFrequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#ipt_sts_timeout ObjectSystemNpu#ipt_sts_timeout}
  */
  readonly iptStsTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#ipt_throughput_msg_frequency ObjectSystemNpu#ipt_throughput_msg_frequency}
  */
  readonly iptThroughputMsgFrequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#ipv4_session_quota ObjectSystemNpu#ipv4_session_quota}
  */
  readonly ipv4SessionQuota?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#ipv4_session_quota_high ObjectSystemNpu#ipv4_session_quota_high}
  */
  readonly ipv4SessionQuotaHigh?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#ipv4_session_quota_low ObjectSystemNpu#ipv4_session_quota_low}
  */
  readonly ipv4SessionQuotaLow?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#ipv6_prefix_session_quota ObjectSystemNpu#ipv6_prefix_session_quota}
  */
  readonly ipv6PrefixSessionQuota?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#ipv6_prefix_session_quota_high ObjectSystemNpu#ipv6_prefix_session_quota_high}
  */
  readonly ipv6PrefixSessionQuotaHigh?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#ipv6_prefix_session_quota_low ObjectSystemNpu#ipv6_prefix_session_quota_low}
  */
  readonly ipv6PrefixSessionQuotaLow?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#isf_np_rx_tr_distr ObjectSystemNpu#isf_np_rx_tr_distr}
  */
  readonly isfNpRxTrDistr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#lag_hash_gre ObjectSystemNpu#lag_hash_gre}
  */
  readonly lagHashGre?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#lag_out_port_select ObjectSystemNpu#lag_out_port_select}
  */
  readonly lagOutPortSelect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#max_receive_unit ObjectSystemNpu#max_receive_unit}
  */
  readonly maxReceiveUnit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#max_session_timeout ObjectSystemNpu#max_session_timeout}
  */
  readonly maxSessionTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#mcast_session_accounting ObjectSystemNpu#mcast_session_accounting}
  */
  readonly mcastSessionAccounting?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#mcast_session_counting ObjectSystemNpu#mcast_session_counting}
  */
  readonly mcastSessionCounting?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#mcast_session_counting6 ObjectSystemNpu#mcast_session_counting6}
  */
  readonly mcastSessionCounting6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#napi_break_interval ObjectSystemNpu#napi_break_interval}
  */
  readonly napiBreakInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#nat46_force_ipv4_packet_forwarding ObjectSystemNpu#nat46_force_ipv4_packet_forwarding}
  */
  readonly nat46ForceIpv4PacketForwarding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#np6_cps_optimization_mode ObjectSystemNpu#np6_cps_optimization_mode}
  */
  readonly np6CpsOptimizationMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#npu_group_effective_scope ObjectSystemNpu#npu_group_effective_scope}
  */
  readonly npuGroupEffectiveScope?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#nss_threads_option ObjectSystemNpu#nss_threads_option}
  */
  readonly nssThreadsOption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#pba_eim ObjectSystemNpu#pba_eim}
  */
  readonly pbaEim?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#pba_port_select_mode ObjectSystemNpu#pba_port_select_mode}
  */
  readonly pbaPortSelectMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#per_policy_accounting ObjectSystemNpu#per_policy_accounting}
  */
  readonly perPolicyAccounting?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#per_session_accounting ObjectSystemNpu#per_session_accounting}
  */
  readonly perSessionAccounting?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#ple_non_syn_tcp_action ObjectSystemNpu#ple_non_syn_tcp_action}
  */
  readonly pleNonSynTcpAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#policy_offload_level ObjectSystemNpu#policy_offload_level}
  */
  readonly policyOffloadLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#process_icmp_by_host ObjectSystemNpu#process_icmp_by_host}
  */
  readonly processIcmpByHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#prp_port_in ObjectSystemNpu#prp_port_in}
  */
  readonly prpPortIn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#prp_port_out ObjectSystemNpu#prp_port_out}
  */
  readonly prpPortOut?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#prp_session_clear_mode ObjectSystemNpu#prp_session_clear_mode}
  */
  readonly prpSessionClearMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#qos_mode ObjectSystemNpu#qos_mode}
  */
  readonly qosMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#qtm_buf_mode ObjectSystemNpu#qtm_buf_mode}
  */
  readonly qtmBufMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#rdp_offload ObjectSystemNpu#rdp_offload}
  */
  readonly rdpOffload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#recover_np6_link ObjectSystemNpu#recover_np6_link}
  */
  readonly recoverNp6Link?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#rps_mode ObjectSystemNpu#rps_mode}
  */
  readonly rpsMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#scopetype ObjectSystemNpu#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#session_acct_interval ObjectSystemNpu#session_acct_interval}
  */
  readonly sessionAcctInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#session_denied_offload ObjectSystemNpu#session_denied_offload}
  */
  readonly sessionDeniedOffload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#shaping_stats ObjectSystemNpu#shaping_stats}
  */
  readonly shapingStats?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#spa_port_select_mode ObjectSystemNpu#spa_port_select_mode}
  */
  readonly spaPortSelectMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#split_ipsec_engines ObjectSystemNpu#split_ipsec_engines}
  */
  readonly splitIpsecEngines?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#sse_backpressure ObjectSystemNpu#sse_backpressure}
  */
  readonly sseBackpressure?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#strip_clear_text_padding ObjectSystemNpu#strip_clear_text_padding}
  */
  readonly stripClearTextPadding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#strip_esp_padding ObjectSystemNpu#strip_esp_padding}
  */
  readonly stripEspPadding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#sw_np_bandwidth ObjectSystemNpu#sw_np_bandwidth}
  */
  readonly swNpBandwidth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#sw_np_pause ObjectSystemNpu#sw_np_pause}
  */
  readonly swNpPause?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#sw_np_rate ObjectSystemNpu#sw_np_rate}
  */
  readonly swNpRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#sw_np_rate_unit ObjectSystemNpu#sw_np_rate_unit}
  */
  readonly swNpRateUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#switch_np_hash ObjectSystemNpu#switch_np_hash}
  */
  readonly switchNpHash?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#tcp_rst_timeout ObjectSystemNpu#tcp_rst_timeout}
  */
  readonly tcpRstTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#tunnel_over_vlink ObjectSystemNpu#tunnel_over_vlink}
  */
  readonly tunnelOverVlink?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#uesp_offload ObjectSystemNpu#uesp_offload}
  */
  readonly uespOffload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#ull_port_mode ObjectSystemNpu#ull_port_mode}
  */
  readonly ullPortMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#use_mse_oft ObjectSystemNpu#use_mse_oft}
  */
  readonly useMseOft?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#vlan_lookup_cache ObjectSystemNpu#vlan_lookup_cache}
  */
  readonly vlanLookupCache?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#vxlan_offload ObjectSystemNpu#vxlan_offload}
  */
  readonly vxlanOffload?: string;
  /**
  * background_sse_scan block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#background_sse_scan ObjectSystemNpu#background_sse_scan}
  */
  readonly backgroundSseScan?: ObjectSystemNpuBackgroundSseScan;
  /**
  * dos_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dos_options ObjectSystemNpu#dos_options}
  */
  readonly dosOptions?: ObjectSystemNpuDosOptions;
  /**
  * dsw_dts_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dsw_dts_profile ObjectSystemNpu#dsw_dts_profile}
  */
  readonly dswDtsProfile?: ObjectSystemNpuDswDtsProfile[] | cdktf.IResolvable;
  /**
  * dsw_queue_dts_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dsw_queue_dts_profile ObjectSystemNpu#dsw_queue_dts_profile}
  */
  readonly dswQueueDtsProfile?: ObjectSystemNpuDswQueueDtsProfile[] | cdktf.IResolvable;
  /**
  * fp_anomaly block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#fp_anomaly ObjectSystemNpu#fp_anomaly}
  */
  readonly fpAnomaly?: ObjectSystemNpuFpAnomaly;
  /**
  * hpe block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#hpe ObjectSystemNpu#hpe}
  */
  readonly hpe?: ObjectSystemNpuHpe;
  /**
  * icmp_error_rate_ctrl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#icmp_error_rate_ctrl ObjectSystemNpu#icmp_error_rate_ctrl}
  */
  readonly icmpErrorRateCtrl?: ObjectSystemNpuIcmpErrorRateCtrl;
  /**
  * icmp_rate_ctrl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#icmp_rate_ctrl ObjectSystemNpu#icmp_rate_ctrl}
  */
  readonly icmpRateCtrl?: ObjectSystemNpuIcmpRateCtrl;
  /**
  * ip_reassembly block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#ip_reassembly ObjectSystemNpu#ip_reassembly}
  */
  readonly ipReassembly?: ObjectSystemNpuIpReassembly;
  /**
  * isf_np_queues block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#isf_np_queues ObjectSystemNpu#isf_np_queues}
  */
  readonly isfNpQueues?: ObjectSystemNpuIsfNpQueues;
  /**
  * np_queues block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#np_queues ObjectSystemNpu#np_queues}
  */
  readonly npQueues?: ObjectSystemNpuNpQueues;
  /**
  * npu_tcam block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#npu_tcam ObjectSystemNpu#npu_tcam}
  */
  readonly npuTcam?: ObjectSystemNpuNpuTcam[] | cdktf.IResolvable;
  /**
  * port_cpu_map block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#port_cpu_map ObjectSystemNpu#port_cpu_map}
  */
  readonly portCpuMap?: ObjectSystemNpuPortCpuMap[] | cdktf.IResolvable;
  /**
  * port_npu_map block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#port_npu_map ObjectSystemNpu#port_npu_map}
  */
  readonly portNpuMap?: ObjectSystemNpuPortNpuMap[] | cdktf.IResolvable;
  /**
  * port_path_option block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#port_path_option ObjectSystemNpu#port_path_option}
  */
  readonly portPathOption?: ObjectSystemNpuPortPathOption;
  /**
  * priority_protocol block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#priority_protocol ObjectSystemNpu#priority_protocol}
  */
  readonly priorityProtocol?: ObjectSystemNpuPriorityProtocol;
  /**
  * sse_ha_scan block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#sse_ha_scan ObjectSystemNpu#sse_ha_scan}
  */
  readonly sseHaScan?: ObjectSystemNpuSseHaScan;
  /**
  * sw_eh_hash block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#sw_eh_hash ObjectSystemNpu#sw_eh_hash}
  */
  readonly swEhHash?: ObjectSystemNpuSwEhHash;
  /**
  * sw_tr_hash block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#sw_tr_hash ObjectSystemNpu#sw_tr_hash}
  */
  readonly swTrHash?: ObjectSystemNpuSwTrHash;
  /**
  * tcp_timeout_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#tcp_timeout_profile ObjectSystemNpu#tcp_timeout_profile}
  */
  readonly tcpTimeoutProfile?: ObjectSystemNpuTcpTimeoutProfile[] | cdktf.IResolvable;
  /**
  * udp_timeout_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#udp_timeout_profile ObjectSystemNpu#udp_timeout_profile}
  */
  readonly udpTimeoutProfile?: ObjectSystemNpuUdpTimeoutProfile[] | cdktf.IResolvable;
}
export interface ObjectSystemNpuBackgroundSseScan {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#scan ObjectSystemNpu#scan}
  */
  readonly scan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#scan_stale ObjectSystemNpu#scan_stale}
  */
  readonly scanStale?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#scan_vt ObjectSystemNpu#scan_vt}
  */
  readonly scanVt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#stats_qual_access ObjectSystemNpu#stats_qual_access}
  */
  readonly statsQualAccess?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#stats_qual_duration ObjectSystemNpu#stats_qual_duration}
  */
  readonly statsQualDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#stats_update_interval ObjectSystemNpu#stats_update_interval}
  */
  readonly statsUpdateInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#udp_keepalive_interval ObjectSystemNpu#udp_keepalive_interval}
  */
  readonly udpKeepaliveInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#udp_qual_access ObjectSystemNpu#udp_qual_access}
  */
  readonly udpQualAccess?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#udp_qual_duration ObjectSystemNpu#udp_qual_duration}
  */
  readonly udpQualDuration?: number;
}

export function objectSystemNpuBackgroundSseScanToTerraform(struct?: ObjectSystemNpuBackgroundSseScanOutputReference | ObjectSystemNpuBackgroundSseScan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scan: cdktf.stringToTerraform(struct!.scan),
    scan_stale: cdktf.numberToTerraform(struct!.scanStale),
    scan_vt: cdktf.numberToTerraform(struct!.scanVt),
    stats_qual_access: cdktf.numberToTerraform(struct!.statsQualAccess),
    stats_qual_duration: cdktf.numberToTerraform(struct!.statsQualDuration),
    stats_update_interval: cdktf.numberToTerraform(struct!.statsUpdateInterval),
    udp_keepalive_interval: cdktf.numberToTerraform(struct!.udpKeepaliveInterval),
    udp_qual_access: cdktf.numberToTerraform(struct!.udpQualAccess),
    udp_qual_duration: cdktf.numberToTerraform(struct!.udpQualDuration),
  }
}


export function objectSystemNpuBackgroundSseScanToHclTerraform(struct?: ObjectSystemNpuBackgroundSseScanOutputReference | ObjectSystemNpuBackgroundSseScan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scan: {
      value: cdktf.stringToHclTerraform(struct!.scan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scan_stale: {
      value: cdktf.numberToHclTerraform(struct!.scanStale),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scan_vt: {
      value: cdktf.numberToHclTerraform(struct!.scanVt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stats_qual_access: {
      value: cdktf.numberToHclTerraform(struct!.statsQualAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stats_qual_duration: {
      value: cdktf.numberToHclTerraform(struct!.statsQualDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stats_update_interval: {
      value: cdktf.numberToHclTerraform(struct!.statsUpdateInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_keepalive_interval: {
      value: cdktf.numberToHclTerraform(struct!.udpKeepaliveInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_qual_access: {
      value: cdktf.numberToHclTerraform(struct!.udpQualAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_qual_duration: {
      value: cdktf.numberToHclTerraform(struct!.udpQualDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectSystemNpuBackgroundSseScanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectSystemNpuBackgroundSseScan | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scan !== undefined) {
      hasAnyValues = true;
      internalValueResult.scan = this._scan;
    }
    if (this._scanStale !== undefined) {
      hasAnyValues = true;
      internalValueResult.scanStale = this._scanStale;
    }
    if (this._scanVt !== undefined) {
      hasAnyValues = true;
      internalValueResult.scanVt = this._scanVt;
    }
    if (this._statsQualAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.statsQualAccess = this._statsQualAccess;
    }
    if (this._statsQualDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.statsQualDuration = this._statsQualDuration;
    }
    if (this._statsUpdateInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.statsUpdateInterval = this._statsUpdateInterval;
    }
    if (this._udpKeepaliveInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpKeepaliveInterval = this._udpKeepaliveInterval;
    }
    if (this._udpQualAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpQualAccess = this._udpQualAccess;
    }
    if (this._udpQualDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpQualDuration = this._udpQualDuration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectSystemNpuBackgroundSseScan | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._scan = undefined;
      this._scanStale = undefined;
      this._scanVt = undefined;
      this._statsQualAccess = undefined;
      this._statsQualDuration = undefined;
      this._statsUpdateInterval = undefined;
      this._udpKeepaliveInterval = undefined;
      this._udpQualAccess = undefined;
      this._udpQualDuration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._scan = value.scan;
      this._scanStale = value.scanStale;
      this._scanVt = value.scanVt;
      this._statsQualAccess = value.statsQualAccess;
      this._statsQualDuration = value.statsQualDuration;
      this._statsUpdateInterval = value.statsUpdateInterval;
      this._udpKeepaliveInterval = value.udpKeepaliveInterval;
      this._udpQualAccess = value.udpQualAccess;
      this._udpQualDuration = value.udpQualDuration;
    }
  }

  // scan - computed: false, optional: true, required: false
  private _scan?: string; 
  public get scan() {
    return this.getStringAttribute('scan');
  }
  public set scan(value: string) {
    this._scan = value;
  }
  public resetScan() {
    this._scan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanInput() {
    return this._scan;
  }

  // scan_stale - computed: false, optional: true, required: false
  private _scanStale?: number; 
  public get scanStale() {
    return this.getNumberAttribute('scan_stale');
  }
  public set scanStale(value: number) {
    this._scanStale = value;
  }
  public resetScanStale() {
    this._scanStale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanStaleInput() {
    return this._scanStale;
  }

  // scan_vt - computed: true, optional: true, required: false
  private _scanVt?: number; 
  public get scanVt() {
    return this.getNumberAttribute('scan_vt');
  }
  public set scanVt(value: number) {
    this._scanVt = value;
  }
  public resetScanVt() {
    this._scanVt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanVtInput() {
    return this._scanVt;
  }

  // stats_qual_access - computed: true, optional: true, required: false
  private _statsQualAccess?: number; 
  public get statsQualAccess() {
    return this.getNumberAttribute('stats_qual_access');
  }
  public set statsQualAccess(value: number) {
    this._statsQualAccess = value;
  }
  public resetStatsQualAccess() {
    this._statsQualAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsQualAccessInput() {
    return this._statsQualAccess;
  }

  // stats_qual_duration - computed: true, optional: true, required: false
  private _statsQualDuration?: number; 
  public get statsQualDuration() {
    return this.getNumberAttribute('stats_qual_duration');
  }
  public set statsQualDuration(value: number) {
    this._statsQualDuration = value;
  }
  public resetStatsQualDuration() {
    this._statsQualDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsQualDurationInput() {
    return this._statsQualDuration;
  }

  // stats_update_interval - computed: true, optional: true, required: false
  private _statsUpdateInterval?: number; 
  public get statsUpdateInterval() {
    return this.getNumberAttribute('stats_update_interval');
  }
  public set statsUpdateInterval(value: number) {
    this._statsUpdateInterval = value;
  }
  public resetStatsUpdateInterval() {
    this._statsUpdateInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsUpdateIntervalInput() {
    return this._statsUpdateInterval;
  }

  // udp_keepalive_interval - computed: true, optional: true, required: false
  private _udpKeepaliveInterval?: number; 
  public get udpKeepaliveInterval() {
    return this.getNumberAttribute('udp_keepalive_interval');
  }
  public set udpKeepaliveInterval(value: number) {
    this._udpKeepaliveInterval = value;
  }
  public resetUdpKeepaliveInterval() {
    this._udpKeepaliveInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpKeepaliveIntervalInput() {
    return this._udpKeepaliveInterval;
  }

  // udp_qual_access - computed: true, optional: true, required: false
  private _udpQualAccess?: number; 
  public get udpQualAccess() {
    return this.getNumberAttribute('udp_qual_access');
  }
  public set udpQualAccess(value: number) {
    this._udpQualAccess = value;
  }
  public resetUdpQualAccess() {
    this._udpQualAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpQualAccessInput() {
    return this._udpQualAccess;
  }

  // udp_qual_duration - computed: true, optional: true, required: false
  private _udpQualDuration?: number; 
  public get udpQualDuration() {
    return this.getNumberAttribute('udp_qual_duration');
  }
  public set udpQualDuration(value: number) {
    this._udpQualDuration = value;
  }
  public resetUdpQualDuration() {
    this._udpQualDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpQualDurationInput() {
    return this._udpQualDuration;
  }
}
export interface ObjectSystemNpuDosOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#npu_dos_meter_mode ObjectSystemNpu#npu_dos_meter_mode}
  */
  readonly npuDosMeterMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#npu_dos_synproxy_mode ObjectSystemNpu#npu_dos_synproxy_mode}
  */
  readonly npuDosSynproxyMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#npu_dos_tpe_mode ObjectSystemNpu#npu_dos_tpe_mode}
  */
  readonly npuDosTpeMode?: string;
}

export function objectSystemNpuDosOptionsToTerraform(struct?: ObjectSystemNpuDosOptionsOutputReference | ObjectSystemNpuDosOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    npu_dos_meter_mode: cdktf.stringToTerraform(struct!.npuDosMeterMode),
    npu_dos_synproxy_mode: cdktf.stringToTerraform(struct!.npuDosSynproxyMode),
    npu_dos_tpe_mode: cdktf.stringToTerraform(struct!.npuDosTpeMode),
  }
}


export function objectSystemNpuDosOptionsToHclTerraform(struct?: ObjectSystemNpuDosOptionsOutputReference | ObjectSystemNpuDosOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    npu_dos_meter_mode: {
      value: cdktf.stringToHclTerraform(struct!.npuDosMeterMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    npu_dos_synproxy_mode: {
      value: cdktf.stringToHclTerraform(struct!.npuDosSynproxyMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    npu_dos_tpe_mode: {
      value: cdktf.stringToHclTerraform(struct!.npuDosTpeMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectSystemNpuDosOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectSystemNpuDosOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._npuDosMeterMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.npuDosMeterMode = this._npuDosMeterMode;
    }
    if (this._npuDosSynproxyMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.npuDosSynproxyMode = this._npuDosSynproxyMode;
    }
    if (this._npuDosTpeMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.npuDosTpeMode = this._npuDosTpeMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectSystemNpuDosOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._npuDosMeterMode = undefined;
      this._npuDosSynproxyMode = undefined;
      this._npuDosTpeMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._npuDosMeterMode = value.npuDosMeterMode;
      this._npuDosSynproxyMode = value.npuDosSynproxyMode;
      this._npuDosTpeMode = value.npuDosTpeMode;
    }
  }

  // npu_dos_meter_mode - computed: true, optional: true, required: false
  private _npuDosMeterMode?: string; 
  public get npuDosMeterMode() {
    return this.getStringAttribute('npu_dos_meter_mode');
  }
  public set npuDosMeterMode(value: string) {
    this._npuDosMeterMode = value;
  }
  public resetNpuDosMeterMode() {
    this._npuDosMeterMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get npuDosMeterModeInput() {
    return this._npuDosMeterMode;
  }

  // npu_dos_synproxy_mode - computed: true, optional: true, required: false
  private _npuDosSynproxyMode?: string; 
  public get npuDosSynproxyMode() {
    return this.getStringAttribute('npu_dos_synproxy_mode');
  }
  public set npuDosSynproxyMode(value: string) {
    this._npuDosSynproxyMode = value;
  }
  public resetNpuDosSynproxyMode() {
    this._npuDosSynproxyMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get npuDosSynproxyModeInput() {
    return this._npuDosSynproxyMode;
  }

  // npu_dos_tpe_mode - computed: true, optional: true, required: false
  private _npuDosTpeMode?: string; 
  public get npuDosTpeMode() {
    return this.getStringAttribute('npu_dos_tpe_mode');
  }
  public set npuDosTpeMode(value: string) {
    this._npuDosTpeMode = value;
  }
  public resetNpuDosTpeMode() {
    this._npuDosTpeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get npuDosTpeModeInput() {
    return this._npuDosTpeMode;
  }
}
export interface ObjectSystemNpuDswDtsProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#action ObjectSystemNpu#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#min_limit ObjectSystemNpu#min_limit}
  */
  readonly minLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#profile_id ObjectSystemNpu#profile_id}
  */
  readonly profileId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#step ObjectSystemNpu#step}
  */
  readonly step?: number;
}

export function objectSystemNpuDswDtsProfileToTerraform(struct?: ObjectSystemNpuDswDtsProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    min_limit: cdktf.numberToTerraform(struct!.minLimit),
    profile_id: cdktf.numberToTerraform(struct!.profileId),
    step: cdktf.numberToTerraform(struct!.step),
  }
}


export function objectSystemNpuDswDtsProfileToHclTerraform(struct?: ObjectSystemNpuDswDtsProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_limit: {
      value: cdktf.numberToHclTerraform(struct!.minLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    profile_id: {
      value: cdktf.numberToHclTerraform(struct!.profileId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    step: {
      value: cdktf.numberToHclTerraform(struct!.step),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectSystemNpuDswDtsProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectSystemNpuDswDtsProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._minLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.minLimit = this._minLimit;
    }
    if (this._profileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileId = this._profileId;
    }
    if (this._step !== undefined) {
      hasAnyValues = true;
      internalValueResult.step = this._step;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectSystemNpuDswDtsProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._minLimit = undefined;
      this._profileId = undefined;
      this._step = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._minLimit = value.minLimit;
      this._profileId = value.profileId;
      this._step = value.step;
    }
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

  // min_limit - computed: false, optional: true, required: false
  private _minLimit?: number; 
  public get minLimit() {
    return this.getNumberAttribute('min_limit');
  }
  public set minLimit(value: number) {
    this._minLimit = value;
  }
  public resetMinLimit() {
    this._minLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLimitInput() {
    return this._minLimit;
  }

  // profile_id - computed: false, optional: true, required: false
  private _profileId?: number; 
  public get profileId() {
    return this.getNumberAttribute('profile_id');
  }
  public set profileId(value: number) {
    this._profileId = value;
  }
  public resetProfileId() {
    this._profileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileIdInput() {
    return this._profileId;
  }

  // step - computed: false, optional: true, required: false
  private _step?: number; 
  public get step() {
    return this.getNumberAttribute('step');
  }
  public set step(value: number) {
    this._step = value;
  }
  public resetStep() {
    this._step = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepInput() {
    return this._step;
  }
}

export class ObjectSystemNpuDswDtsProfileList extends cdktf.ComplexList {
  public internalValue? : ObjectSystemNpuDswDtsProfile[] | cdktf.IResolvable

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
  public get(index: number): ObjectSystemNpuDswDtsProfileOutputReference {
    return new ObjectSystemNpuDswDtsProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectSystemNpuDswQueueDtsProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#iport ObjectSystemNpu#iport}
  */
  readonly iport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#name ObjectSystemNpu#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#oport ObjectSystemNpu#oport}
  */
  readonly oport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#profile_id ObjectSystemNpu#profile_id}
  */
  readonly profileId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#queue_select ObjectSystemNpu#queue_select}
  */
  readonly queueSelect?: number;
}

export function objectSystemNpuDswQueueDtsProfileToTerraform(struct?: ObjectSystemNpuDswQueueDtsProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iport: cdktf.stringToTerraform(struct!.iport),
    name: cdktf.stringToTerraform(struct!.name),
    oport: cdktf.stringToTerraform(struct!.oport),
    profile_id: cdktf.numberToTerraform(struct!.profileId),
    queue_select: cdktf.numberToTerraform(struct!.queueSelect),
  }
}


export function objectSystemNpuDswQueueDtsProfileToHclTerraform(struct?: ObjectSystemNpuDswQueueDtsProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    iport: {
      value: cdktf.stringToHclTerraform(struct!.iport),
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
    oport: {
      value: cdktf.stringToHclTerraform(struct!.oport),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    profile_id: {
      value: cdktf.numberToHclTerraform(struct!.profileId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    queue_select: {
      value: cdktf.numberToHclTerraform(struct!.queueSelect),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectSystemNpuDswQueueDtsProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectSystemNpuDswQueueDtsProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iport !== undefined) {
      hasAnyValues = true;
      internalValueResult.iport = this._iport;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._oport !== undefined) {
      hasAnyValues = true;
      internalValueResult.oport = this._oport;
    }
    if (this._profileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileId = this._profileId;
    }
    if (this._queueSelect !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueSelect = this._queueSelect;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectSystemNpuDswQueueDtsProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._iport = undefined;
      this._name = undefined;
      this._oport = undefined;
      this._profileId = undefined;
      this._queueSelect = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._iport = value.iport;
      this._name = value.name;
      this._oport = value.oport;
      this._profileId = value.profileId;
      this._queueSelect = value.queueSelect;
    }
  }

  // iport - computed: true, optional: true, required: false
  private _iport?: string; 
  public get iport() {
    return this.getStringAttribute('iport');
  }
  public set iport(value: string) {
    this._iport = value;
  }
  public resetIport() {
    this._iport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iportInput() {
    return this._iport;
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

  // oport - computed: true, optional: true, required: false
  private _oport?: string; 
  public get oport() {
    return this.getStringAttribute('oport');
  }
  public set oport(value: string) {
    this._oport = value;
  }
  public resetOport() {
    this._oport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oportInput() {
    return this._oport;
  }

  // profile_id - computed: false, optional: true, required: false
  private _profileId?: number; 
  public get profileId() {
    return this.getNumberAttribute('profile_id');
  }
  public set profileId(value: number) {
    this._profileId = value;
  }
  public resetProfileId() {
    this._profileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileIdInput() {
    return this._profileId;
  }

  // queue_select - computed: false, optional: true, required: false
  private _queueSelect?: number; 
  public get queueSelect() {
    return this.getNumberAttribute('queue_select');
  }
  public set queueSelect(value: number) {
    this._queueSelect = value;
  }
  public resetQueueSelect() {
    this._queueSelect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueSelectInput() {
    return this._queueSelect;
  }
}

export class ObjectSystemNpuDswQueueDtsProfileList extends cdktf.ComplexList {
  public internalValue? : ObjectSystemNpuDswQueueDtsProfile[] | cdktf.IResolvable

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
  public get(index: number): ObjectSystemNpuDswQueueDtsProfileOutputReference {
    return new ObjectSystemNpuDswQueueDtsProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectSystemNpuFpAnomaly {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#capwap_minlen_err ObjectSystemNpu#capwap_minlen_err}
  */
  readonly capwapMinlenErr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#esp_minlen_err ObjectSystemNpu#esp_minlen_err}
  */
  readonly espMinlenErr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#gre_csum_err ObjectSystemNpu#gre_csum_err}
  */
  readonly greCsumErr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#gtpu_plen_err ObjectSystemNpu#gtpu_plen_err}
  */
  readonly gtpuPlenErr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#icmp_csum_err ObjectSystemNpu#icmp_csum_err}
  */
  readonly icmpCsumErr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#icmp_frag ObjectSystemNpu#icmp_frag}
  */
  readonly icmpFrag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#icmp_land ObjectSystemNpu#icmp_land}
  */
  readonly icmpLand?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#icmp_minlen_err ObjectSystemNpu#icmp_minlen_err}
  */
  readonly icmpMinlenErr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#ipv4_csum_err ObjectSystemNpu#ipv4_csum_err}
  */
  readonly ipv4CsumErr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#ipv4_ihl_err ObjectSystemNpu#ipv4_ihl_err}
  */
  readonly ipv4IhlErr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#ipv4_land ObjectSystemNpu#ipv4_land}
  */
  readonly ipv4Land?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#ipv4_len_err ObjectSystemNpu#ipv4_len_err}
  */
  readonly ipv4LenErr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#ipv4_opt_err ObjectSystemNpu#ipv4_opt_err}
  */
  readonly ipv4OptErr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#ipv4_optlsrr ObjectSystemNpu#ipv4_optlsrr}
  */
  readonly ipv4Optlsrr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#ipv4_optrr ObjectSystemNpu#ipv4_optrr}
  */
  readonly ipv4Optrr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#ipv4_optsecurity ObjectSystemNpu#ipv4_optsecurity}
  */
  readonly ipv4Optsecurity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#ipv4_optssrr ObjectSystemNpu#ipv4_optssrr}
  */
  readonly ipv4Optssrr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#ipv4_optstream ObjectSystemNpu#ipv4_optstream}
  */
  readonly ipv4Optstream?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#ipv4_opttimestamp ObjectSystemNpu#ipv4_opttimestamp}
  */
  readonly ipv4Opttimestamp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#ipv4_proto_err ObjectSystemNpu#ipv4_proto_err}
  */
  readonly ipv4ProtoErr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#ipv4_ttlzero_err ObjectSystemNpu#ipv4_ttlzero_err}
  */
  readonly ipv4TtlzeroErr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#ipv4_unknopt ObjectSystemNpu#ipv4_unknopt}
  */
  readonly ipv4Unknopt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#ipv4_ver_err ObjectSystemNpu#ipv4_ver_err}
  */
  readonly ipv4VerErr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#ipv6_daddr_err ObjectSystemNpu#ipv6_daddr_err}
  */
  readonly ipv6DaddrErr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#ipv6_exthdr_len_err ObjectSystemNpu#ipv6_exthdr_len_err}
  */
  readonly ipv6ExthdrLenErr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#ipv6_exthdr_order_err ObjectSystemNpu#ipv6_exthdr_order_err}
  */
  readonly ipv6ExthdrOrderErr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#ipv6_ihl_err ObjectSystemNpu#ipv6_ihl_err}
  */
  readonly ipv6IhlErr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#ipv6_land ObjectSystemNpu#ipv6_land}
  */
  readonly ipv6Land?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#ipv6_optendpid ObjectSystemNpu#ipv6_optendpid}
  */
  readonly ipv6Optendpid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#ipv6_opthomeaddr ObjectSystemNpu#ipv6_opthomeaddr}
  */
  readonly ipv6Opthomeaddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#ipv6_optinvld ObjectSystemNpu#ipv6_optinvld}
  */
  readonly ipv6Optinvld?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#ipv6_optjumbo ObjectSystemNpu#ipv6_optjumbo}
  */
  readonly ipv6Optjumbo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#ipv6_optnsap ObjectSystemNpu#ipv6_optnsap}
  */
  readonly ipv6Optnsap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#ipv6_optralert ObjectSystemNpu#ipv6_optralert}
  */
  readonly ipv6Optralert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#ipv6_opttunnel ObjectSystemNpu#ipv6_opttunnel}
  */
  readonly ipv6Opttunnel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#ipv6_plen_zero ObjectSystemNpu#ipv6_plen_zero}
  */
  readonly ipv6PlenZero?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#ipv6_proto_err ObjectSystemNpu#ipv6_proto_err}
  */
  readonly ipv6ProtoErr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#ipv6_saddr_err ObjectSystemNpu#ipv6_saddr_err}
  */
  readonly ipv6SaddrErr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#ipv6_unknopt ObjectSystemNpu#ipv6_unknopt}
  */
  readonly ipv6Unknopt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#ipv6_ver_err ObjectSystemNpu#ipv6_ver_err}
  */
  readonly ipv6VerErr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#nvgre_minlen_err ObjectSystemNpu#nvgre_minlen_err}
  */
  readonly nvgreMinlenErr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#sctp_clen_err ObjectSystemNpu#sctp_clen_err}
  */
  readonly sctpClenErr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#sctp_crc_err ObjectSystemNpu#sctp_crc_err}
  */
  readonly sctpCrcErr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#sctp_csum_err ObjectSystemNpu#sctp_csum_err}
  */
  readonly sctpCsumErr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#sctp_l4len_err ObjectSystemNpu#sctp_l4len_err}
  */
  readonly sctpL4LenErr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#tcp_csum_err ObjectSystemNpu#tcp_csum_err}
  */
  readonly tcpCsumErr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#tcp_fin_noack ObjectSystemNpu#tcp_fin_noack}
  */
  readonly tcpFinNoack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#tcp_fin_only ObjectSystemNpu#tcp_fin_only}
  */
  readonly tcpFinOnly?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#tcp_hlen_err ObjectSystemNpu#tcp_hlen_err}
  */
  readonly tcpHlenErr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#tcp_hlenvsl4len_err ObjectSystemNpu#tcp_hlenvsl4len_err}
  */
  readonly tcpHlenvsl4LenErr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#tcp_land ObjectSystemNpu#tcp_land}
  */
  readonly tcpLand?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#tcp_no_flag ObjectSystemNpu#tcp_no_flag}
  */
  readonly tcpNoFlag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#tcp_plen_err ObjectSystemNpu#tcp_plen_err}
  */
  readonly tcpPlenErr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#tcp_syn_data ObjectSystemNpu#tcp_syn_data}
  */
  readonly tcpSynData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#tcp_syn_fin ObjectSystemNpu#tcp_syn_fin}
  */
  readonly tcpSynFin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#tcp_winnuke ObjectSystemNpu#tcp_winnuke}
  */
  readonly tcpWinnuke?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#udp_csum_err ObjectSystemNpu#udp_csum_err}
  */
  readonly udpCsumErr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#udp_hlen_err ObjectSystemNpu#udp_hlen_err}
  */
  readonly udpHlenErr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#udp_land ObjectSystemNpu#udp_land}
  */
  readonly udpLand?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#udp_len_err ObjectSystemNpu#udp_len_err}
  */
  readonly udpLenErr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#udp_plen_err ObjectSystemNpu#udp_plen_err}
  */
  readonly udpPlenErr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#udplite_cover_err ObjectSystemNpu#udplite_cover_err}
  */
  readonly udpliteCoverErr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#udplite_csum_err ObjectSystemNpu#udplite_csum_err}
  */
  readonly udpliteCsumErr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#uesp_minlen_err ObjectSystemNpu#uesp_minlen_err}
  */
  readonly uespMinlenErr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#unknproto_minlen_err ObjectSystemNpu#unknproto_minlen_err}
  */
  readonly unknprotoMinlenErr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#vxlan_minlen_err ObjectSystemNpu#vxlan_minlen_err}
  */
  readonly vxlanMinlenErr?: string;
}

export function objectSystemNpuFpAnomalyToTerraform(struct?: ObjectSystemNpuFpAnomalyOutputReference | ObjectSystemNpuFpAnomaly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capwap_minlen_err: cdktf.stringToTerraform(struct!.capwapMinlenErr),
    esp_minlen_err: cdktf.stringToTerraform(struct!.espMinlenErr),
    gre_csum_err: cdktf.stringToTerraform(struct!.greCsumErr),
    gtpu_plen_err: cdktf.stringToTerraform(struct!.gtpuPlenErr),
    icmp_csum_err: cdktf.stringToTerraform(struct!.icmpCsumErr),
    icmp_frag: cdktf.stringToTerraform(struct!.icmpFrag),
    icmp_land: cdktf.stringToTerraform(struct!.icmpLand),
    icmp_minlen_err: cdktf.stringToTerraform(struct!.icmpMinlenErr),
    ipv4_csum_err: cdktf.stringToTerraform(struct!.ipv4CsumErr),
    ipv4_ihl_err: cdktf.stringToTerraform(struct!.ipv4IhlErr),
    ipv4_land: cdktf.stringToTerraform(struct!.ipv4Land),
    ipv4_len_err: cdktf.stringToTerraform(struct!.ipv4LenErr),
    ipv4_opt_err: cdktf.stringToTerraform(struct!.ipv4OptErr),
    ipv4_optlsrr: cdktf.stringToTerraform(struct!.ipv4Optlsrr),
    ipv4_optrr: cdktf.stringToTerraform(struct!.ipv4Optrr),
    ipv4_optsecurity: cdktf.stringToTerraform(struct!.ipv4Optsecurity),
    ipv4_optssrr: cdktf.stringToTerraform(struct!.ipv4Optssrr),
    ipv4_optstream: cdktf.stringToTerraform(struct!.ipv4Optstream),
    ipv4_opttimestamp: cdktf.stringToTerraform(struct!.ipv4Opttimestamp),
    ipv4_proto_err: cdktf.stringToTerraform(struct!.ipv4ProtoErr),
    ipv4_ttlzero_err: cdktf.stringToTerraform(struct!.ipv4TtlzeroErr),
    ipv4_unknopt: cdktf.stringToTerraform(struct!.ipv4Unknopt),
    ipv4_ver_err: cdktf.stringToTerraform(struct!.ipv4VerErr),
    ipv6_daddr_err: cdktf.stringToTerraform(struct!.ipv6DaddrErr),
    ipv6_exthdr_len_err: cdktf.stringToTerraform(struct!.ipv6ExthdrLenErr),
    ipv6_exthdr_order_err: cdktf.stringToTerraform(struct!.ipv6ExthdrOrderErr),
    ipv6_ihl_err: cdktf.stringToTerraform(struct!.ipv6IhlErr),
    ipv6_land: cdktf.stringToTerraform(struct!.ipv6Land),
    ipv6_optendpid: cdktf.stringToTerraform(struct!.ipv6Optendpid),
    ipv6_opthomeaddr: cdktf.stringToTerraform(struct!.ipv6Opthomeaddr),
    ipv6_optinvld: cdktf.stringToTerraform(struct!.ipv6Optinvld),
    ipv6_optjumbo: cdktf.stringToTerraform(struct!.ipv6Optjumbo),
    ipv6_optnsap: cdktf.stringToTerraform(struct!.ipv6Optnsap),
    ipv6_optralert: cdktf.stringToTerraform(struct!.ipv6Optralert),
    ipv6_opttunnel: cdktf.stringToTerraform(struct!.ipv6Opttunnel),
    ipv6_plen_zero: cdktf.stringToTerraform(struct!.ipv6PlenZero),
    ipv6_proto_err: cdktf.stringToTerraform(struct!.ipv6ProtoErr),
    ipv6_saddr_err: cdktf.stringToTerraform(struct!.ipv6SaddrErr),
    ipv6_unknopt: cdktf.stringToTerraform(struct!.ipv6Unknopt),
    ipv6_ver_err: cdktf.stringToTerraform(struct!.ipv6VerErr),
    nvgre_minlen_err: cdktf.stringToTerraform(struct!.nvgreMinlenErr),
    sctp_clen_err: cdktf.stringToTerraform(struct!.sctpClenErr),
    sctp_crc_err: cdktf.stringToTerraform(struct!.sctpCrcErr),
    sctp_csum_err: cdktf.stringToTerraform(struct!.sctpCsumErr),
    sctp_l4len_err: cdktf.stringToTerraform(struct!.sctpL4LenErr),
    tcp_csum_err: cdktf.stringToTerraform(struct!.tcpCsumErr),
    tcp_fin_noack: cdktf.stringToTerraform(struct!.tcpFinNoack),
    tcp_fin_only: cdktf.stringToTerraform(struct!.tcpFinOnly),
    tcp_hlen_err: cdktf.stringToTerraform(struct!.tcpHlenErr),
    tcp_hlenvsl4len_err: cdktf.stringToTerraform(struct!.tcpHlenvsl4LenErr),
    tcp_land: cdktf.stringToTerraform(struct!.tcpLand),
    tcp_no_flag: cdktf.stringToTerraform(struct!.tcpNoFlag),
    tcp_plen_err: cdktf.stringToTerraform(struct!.tcpPlenErr),
    tcp_syn_data: cdktf.stringToTerraform(struct!.tcpSynData),
    tcp_syn_fin: cdktf.stringToTerraform(struct!.tcpSynFin),
    tcp_winnuke: cdktf.stringToTerraform(struct!.tcpWinnuke),
    udp_csum_err: cdktf.stringToTerraform(struct!.udpCsumErr),
    udp_hlen_err: cdktf.stringToTerraform(struct!.udpHlenErr),
    udp_land: cdktf.stringToTerraform(struct!.udpLand),
    udp_len_err: cdktf.stringToTerraform(struct!.udpLenErr),
    udp_plen_err: cdktf.stringToTerraform(struct!.udpPlenErr),
    udplite_cover_err: cdktf.stringToTerraform(struct!.udpliteCoverErr),
    udplite_csum_err: cdktf.stringToTerraform(struct!.udpliteCsumErr),
    uesp_minlen_err: cdktf.stringToTerraform(struct!.uespMinlenErr),
    unknproto_minlen_err: cdktf.stringToTerraform(struct!.unknprotoMinlenErr),
    vxlan_minlen_err: cdktf.stringToTerraform(struct!.vxlanMinlenErr),
  }
}


export function objectSystemNpuFpAnomalyToHclTerraform(struct?: ObjectSystemNpuFpAnomalyOutputReference | ObjectSystemNpuFpAnomaly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capwap_minlen_err: {
      value: cdktf.stringToHclTerraform(struct!.capwapMinlenErr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    esp_minlen_err: {
      value: cdktf.stringToHclTerraform(struct!.espMinlenErr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gre_csum_err: {
      value: cdktf.stringToHclTerraform(struct!.greCsumErr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gtpu_plen_err: {
      value: cdktf.stringToHclTerraform(struct!.gtpuPlenErr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icmp_csum_err: {
      value: cdktf.stringToHclTerraform(struct!.icmpCsumErr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icmp_frag: {
      value: cdktf.stringToHclTerraform(struct!.icmpFrag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icmp_land: {
      value: cdktf.stringToHclTerraform(struct!.icmpLand),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icmp_minlen_err: {
      value: cdktf.stringToHclTerraform(struct!.icmpMinlenErr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_csum_err: {
      value: cdktf.stringToHclTerraform(struct!.ipv4CsumErr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_ihl_err: {
      value: cdktf.stringToHclTerraform(struct!.ipv4IhlErr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_land: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Land),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_len_err: {
      value: cdktf.stringToHclTerraform(struct!.ipv4LenErr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_opt_err: {
      value: cdktf.stringToHclTerraform(struct!.ipv4OptErr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_optlsrr: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Optlsrr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_optrr: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Optrr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_optsecurity: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Optsecurity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_optssrr: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Optssrr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_optstream: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Optstream),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_opttimestamp: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Opttimestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_proto_err: {
      value: cdktf.stringToHclTerraform(struct!.ipv4ProtoErr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_ttlzero_err: {
      value: cdktf.stringToHclTerraform(struct!.ipv4TtlzeroErr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_unknopt: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Unknopt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_ver_err: {
      value: cdktf.stringToHclTerraform(struct!.ipv4VerErr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_daddr_err: {
      value: cdktf.stringToHclTerraform(struct!.ipv6DaddrErr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_exthdr_len_err: {
      value: cdktf.stringToHclTerraform(struct!.ipv6ExthdrLenErr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_exthdr_order_err: {
      value: cdktf.stringToHclTerraform(struct!.ipv6ExthdrOrderErr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_ihl_err: {
      value: cdktf.stringToHclTerraform(struct!.ipv6IhlErr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_land: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Land),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_optendpid: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Optendpid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_opthomeaddr: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Opthomeaddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_optinvld: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Optinvld),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_optjumbo: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Optjumbo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_optnsap: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Optnsap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_optralert: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Optralert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_opttunnel: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Opttunnel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_plen_zero: {
      value: cdktf.stringToHclTerraform(struct!.ipv6PlenZero),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_proto_err: {
      value: cdktf.stringToHclTerraform(struct!.ipv6ProtoErr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_saddr_err: {
      value: cdktf.stringToHclTerraform(struct!.ipv6SaddrErr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_unknopt: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Unknopt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_ver_err: {
      value: cdktf.stringToHclTerraform(struct!.ipv6VerErr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nvgre_minlen_err: {
      value: cdktf.stringToHclTerraform(struct!.nvgreMinlenErr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sctp_clen_err: {
      value: cdktf.stringToHclTerraform(struct!.sctpClenErr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sctp_crc_err: {
      value: cdktf.stringToHclTerraform(struct!.sctpCrcErr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sctp_csum_err: {
      value: cdktf.stringToHclTerraform(struct!.sctpCsumErr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sctp_l4len_err: {
      value: cdktf.stringToHclTerraform(struct!.sctpL4LenErr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_csum_err: {
      value: cdktf.stringToHclTerraform(struct!.tcpCsumErr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_fin_noack: {
      value: cdktf.stringToHclTerraform(struct!.tcpFinNoack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_fin_only: {
      value: cdktf.stringToHclTerraform(struct!.tcpFinOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_hlen_err: {
      value: cdktf.stringToHclTerraform(struct!.tcpHlenErr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_hlenvsl4len_err: {
      value: cdktf.stringToHclTerraform(struct!.tcpHlenvsl4LenErr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_land: {
      value: cdktf.stringToHclTerraform(struct!.tcpLand),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_no_flag: {
      value: cdktf.stringToHclTerraform(struct!.tcpNoFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_plen_err: {
      value: cdktf.stringToHclTerraform(struct!.tcpPlenErr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_syn_data: {
      value: cdktf.stringToHclTerraform(struct!.tcpSynData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_syn_fin: {
      value: cdktf.stringToHclTerraform(struct!.tcpSynFin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_winnuke: {
      value: cdktf.stringToHclTerraform(struct!.tcpWinnuke),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    udp_csum_err: {
      value: cdktf.stringToHclTerraform(struct!.udpCsumErr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    udp_hlen_err: {
      value: cdktf.stringToHclTerraform(struct!.udpHlenErr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    udp_land: {
      value: cdktf.stringToHclTerraform(struct!.udpLand),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    udp_len_err: {
      value: cdktf.stringToHclTerraform(struct!.udpLenErr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    udp_plen_err: {
      value: cdktf.stringToHclTerraform(struct!.udpPlenErr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    udplite_cover_err: {
      value: cdktf.stringToHclTerraform(struct!.udpliteCoverErr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    udplite_csum_err: {
      value: cdktf.stringToHclTerraform(struct!.udpliteCsumErr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uesp_minlen_err: {
      value: cdktf.stringToHclTerraform(struct!.uespMinlenErr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknproto_minlen_err: {
      value: cdktf.stringToHclTerraform(struct!.unknprotoMinlenErr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vxlan_minlen_err: {
      value: cdktf.stringToHclTerraform(struct!.vxlanMinlenErr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectSystemNpuFpAnomalyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectSystemNpuFpAnomaly | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capwapMinlenErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.capwapMinlenErr = this._capwapMinlenErr;
    }
    if (this._espMinlenErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.espMinlenErr = this._espMinlenErr;
    }
    if (this._greCsumErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.greCsumErr = this._greCsumErr;
    }
    if (this._gtpuPlenErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpuPlenErr = this._gtpuPlenErr;
    }
    if (this._icmpCsumErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpCsumErr = this._icmpCsumErr;
    }
    if (this._icmpFrag !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpFrag = this._icmpFrag;
    }
    if (this._icmpLand !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpLand = this._icmpLand;
    }
    if (this._icmpMinlenErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpMinlenErr = this._icmpMinlenErr;
    }
    if (this._ipv4CsumErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4CsumErr = this._ipv4CsumErr;
    }
    if (this._ipv4IhlErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4IhlErr = this._ipv4IhlErr;
    }
    if (this._ipv4Land !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Land = this._ipv4Land;
    }
    if (this._ipv4LenErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4LenErr = this._ipv4LenErr;
    }
    if (this._ipv4OptErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4OptErr = this._ipv4OptErr;
    }
    if (this._ipv4Optlsrr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Optlsrr = this._ipv4Optlsrr;
    }
    if (this._ipv4Optrr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Optrr = this._ipv4Optrr;
    }
    if (this._ipv4Optsecurity !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Optsecurity = this._ipv4Optsecurity;
    }
    if (this._ipv4Optssrr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Optssrr = this._ipv4Optssrr;
    }
    if (this._ipv4Optstream !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Optstream = this._ipv4Optstream;
    }
    if (this._ipv4Opttimestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Opttimestamp = this._ipv4Opttimestamp;
    }
    if (this._ipv4ProtoErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4ProtoErr = this._ipv4ProtoErr;
    }
    if (this._ipv4TtlzeroErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4TtlzeroErr = this._ipv4TtlzeroErr;
    }
    if (this._ipv4Unknopt !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Unknopt = this._ipv4Unknopt;
    }
    if (this._ipv4VerErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4VerErr = this._ipv4VerErr;
    }
    if (this._ipv6DaddrErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6DaddrErr = this._ipv6DaddrErr;
    }
    if (this._ipv6ExthdrLenErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6ExthdrLenErr = this._ipv6ExthdrLenErr;
    }
    if (this._ipv6ExthdrOrderErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6ExthdrOrderErr = this._ipv6ExthdrOrderErr;
    }
    if (this._ipv6IhlErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6IhlErr = this._ipv6IhlErr;
    }
    if (this._ipv6Land !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Land = this._ipv6Land;
    }
    if (this._ipv6Optendpid !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Optendpid = this._ipv6Optendpid;
    }
    if (this._ipv6Opthomeaddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Opthomeaddr = this._ipv6Opthomeaddr;
    }
    if (this._ipv6Optinvld !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Optinvld = this._ipv6Optinvld;
    }
    if (this._ipv6Optjumbo !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Optjumbo = this._ipv6Optjumbo;
    }
    if (this._ipv6Optnsap !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Optnsap = this._ipv6Optnsap;
    }
    if (this._ipv6Optralert !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Optralert = this._ipv6Optralert;
    }
    if (this._ipv6Opttunnel !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Opttunnel = this._ipv6Opttunnel;
    }
    if (this._ipv6PlenZero !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6PlenZero = this._ipv6PlenZero;
    }
    if (this._ipv6ProtoErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6ProtoErr = this._ipv6ProtoErr;
    }
    if (this._ipv6SaddrErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6SaddrErr = this._ipv6SaddrErr;
    }
    if (this._ipv6Unknopt !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Unknopt = this._ipv6Unknopt;
    }
    if (this._ipv6VerErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6VerErr = this._ipv6VerErr;
    }
    if (this._nvgreMinlenErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.nvgreMinlenErr = this._nvgreMinlenErr;
    }
    if (this._sctpClenErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.sctpClenErr = this._sctpClenErr;
    }
    if (this._sctpCrcErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.sctpCrcErr = this._sctpCrcErr;
    }
    if (this._sctpCsumErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.sctpCsumErr = this._sctpCsumErr;
    }
    if (this._sctpL4LenErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.sctpL4LenErr = this._sctpL4LenErr;
    }
    if (this._tcpCsumErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpCsumErr = this._tcpCsumErr;
    }
    if (this._tcpFinNoack !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFinNoack = this._tcpFinNoack;
    }
    if (this._tcpFinOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFinOnly = this._tcpFinOnly;
    }
    if (this._tcpHlenErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpHlenErr = this._tcpHlenErr;
    }
    if (this._tcpHlenvsl4LenErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpHlenvsl4LenErr = this._tcpHlenvsl4LenErr;
    }
    if (this._tcpLand !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpLand = this._tcpLand;
    }
    if (this._tcpNoFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpNoFlag = this._tcpNoFlag;
    }
    if (this._tcpPlenErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpPlenErr = this._tcpPlenErr;
    }
    if (this._tcpSynData !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSynData = this._tcpSynData;
    }
    if (this._tcpSynFin !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSynFin = this._tcpSynFin;
    }
    if (this._tcpWinnuke !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpWinnuke = this._tcpWinnuke;
    }
    if (this._udpCsumErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpCsumErr = this._udpCsumErr;
    }
    if (this._udpHlenErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpHlenErr = this._udpHlenErr;
    }
    if (this._udpLand !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpLand = this._udpLand;
    }
    if (this._udpLenErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpLenErr = this._udpLenErr;
    }
    if (this._udpPlenErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpPlenErr = this._udpPlenErr;
    }
    if (this._udpliteCoverErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpliteCoverErr = this._udpliteCoverErr;
    }
    if (this._udpliteCsumErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpliteCsumErr = this._udpliteCsumErr;
    }
    if (this._uespMinlenErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.uespMinlenErr = this._uespMinlenErr;
    }
    if (this._unknprotoMinlenErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknprotoMinlenErr = this._unknprotoMinlenErr;
    }
    if (this._vxlanMinlenErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.vxlanMinlenErr = this._vxlanMinlenErr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectSystemNpuFpAnomaly | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._capwapMinlenErr = undefined;
      this._espMinlenErr = undefined;
      this._greCsumErr = undefined;
      this._gtpuPlenErr = undefined;
      this._icmpCsumErr = undefined;
      this._icmpFrag = undefined;
      this._icmpLand = undefined;
      this._icmpMinlenErr = undefined;
      this._ipv4CsumErr = undefined;
      this._ipv4IhlErr = undefined;
      this._ipv4Land = undefined;
      this._ipv4LenErr = undefined;
      this._ipv4OptErr = undefined;
      this._ipv4Optlsrr = undefined;
      this._ipv4Optrr = undefined;
      this._ipv4Optsecurity = undefined;
      this._ipv4Optssrr = undefined;
      this._ipv4Optstream = undefined;
      this._ipv4Opttimestamp = undefined;
      this._ipv4ProtoErr = undefined;
      this._ipv4TtlzeroErr = undefined;
      this._ipv4Unknopt = undefined;
      this._ipv4VerErr = undefined;
      this._ipv6DaddrErr = undefined;
      this._ipv6ExthdrLenErr = undefined;
      this._ipv6ExthdrOrderErr = undefined;
      this._ipv6IhlErr = undefined;
      this._ipv6Land = undefined;
      this._ipv6Optendpid = undefined;
      this._ipv6Opthomeaddr = undefined;
      this._ipv6Optinvld = undefined;
      this._ipv6Optjumbo = undefined;
      this._ipv6Optnsap = undefined;
      this._ipv6Optralert = undefined;
      this._ipv6Opttunnel = undefined;
      this._ipv6PlenZero = undefined;
      this._ipv6ProtoErr = undefined;
      this._ipv6SaddrErr = undefined;
      this._ipv6Unknopt = undefined;
      this._ipv6VerErr = undefined;
      this._nvgreMinlenErr = undefined;
      this._sctpClenErr = undefined;
      this._sctpCrcErr = undefined;
      this._sctpCsumErr = undefined;
      this._sctpL4LenErr = undefined;
      this._tcpCsumErr = undefined;
      this._tcpFinNoack = undefined;
      this._tcpFinOnly = undefined;
      this._tcpHlenErr = undefined;
      this._tcpHlenvsl4LenErr = undefined;
      this._tcpLand = undefined;
      this._tcpNoFlag = undefined;
      this._tcpPlenErr = undefined;
      this._tcpSynData = undefined;
      this._tcpSynFin = undefined;
      this._tcpWinnuke = undefined;
      this._udpCsumErr = undefined;
      this._udpHlenErr = undefined;
      this._udpLand = undefined;
      this._udpLenErr = undefined;
      this._udpPlenErr = undefined;
      this._udpliteCoverErr = undefined;
      this._udpliteCsumErr = undefined;
      this._uespMinlenErr = undefined;
      this._unknprotoMinlenErr = undefined;
      this._vxlanMinlenErr = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._capwapMinlenErr = value.capwapMinlenErr;
      this._espMinlenErr = value.espMinlenErr;
      this._greCsumErr = value.greCsumErr;
      this._gtpuPlenErr = value.gtpuPlenErr;
      this._icmpCsumErr = value.icmpCsumErr;
      this._icmpFrag = value.icmpFrag;
      this._icmpLand = value.icmpLand;
      this._icmpMinlenErr = value.icmpMinlenErr;
      this._ipv4CsumErr = value.ipv4CsumErr;
      this._ipv4IhlErr = value.ipv4IhlErr;
      this._ipv4Land = value.ipv4Land;
      this._ipv4LenErr = value.ipv4LenErr;
      this._ipv4OptErr = value.ipv4OptErr;
      this._ipv4Optlsrr = value.ipv4Optlsrr;
      this._ipv4Optrr = value.ipv4Optrr;
      this._ipv4Optsecurity = value.ipv4Optsecurity;
      this._ipv4Optssrr = value.ipv4Optssrr;
      this._ipv4Optstream = value.ipv4Optstream;
      this._ipv4Opttimestamp = value.ipv4Opttimestamp;
      this._ipv4ProtoErr = value.ipv4ProtoErr;
      this._ipv4TtlzeroErr = value.ipv4TtlzeroErr;
      this._ipv4Unknopt = value.ipv4Unknopt;
      this._ipv4VerErr = value.ipv4VerErr;
      this._ipv6DaddrErr = value.ipv6DaddrErr;
      this._ipv6ExthdrLenErr = value.ipv6ExthdrLenErr;
      this._ipv6ExthdrOrderErr = value.ipv6ExthdrOrderErr;
      this._ipv6IhlErr = value.ipv6IhlErr;
      this._ipv6Land = value.ipv6Land;
      this._ipv6Optendpid = value.ipv6Optendpid;
      this._ipv6Opthomeaddr = value.ipv6Opthomeaddr;
      this._ipv6Optinvld = value.ipv6Optinvld;
      this._ipv6Optjumbo = value.ipv6Optjumbo;
      this._ipv6Optnsap = value.ipv6Optnsap;
      this._ipv6Optralert = value.ipv6Optralert;
      this._ipv6Opttunnel = value.ipv6Opttunnel;
      this._ipv6PlenZero = value.ipv6PlenZero;
      this._ipv6ProtoErr = value.ipv6ProtoErr;
      this._ipv6SaddrErr = value.ipv6SaddrErr;
      this._ipv6Unknopt = value.ipv6Unknopt;
      this._ipv6VerErr = value.ipv6VerErr;
      this._nvgreMinlenErr = value.nvgreMinlenErr;
      this._sctpClenErr = value.sctpClenErr;
      this._sctpCrcErr = value.sctpCrcErr;
      this._sctpCsumErr = value.sctpCsumErr;
      this._sctpL4LenErr = value.sctpL4LenErr;
      this._tcpCsumErr = value.tcpCsumErr;
      this._tcpFinNoack = value.tcpFinNoack;
      this._tcpFinOnly = value.tcpFinOnly;
      this._tcpHlenErr = value.tcpHlenErr;
      this._tcpHlenvsl4LenErr = value.tcpHlenvsl4LenErr;
      this._tcpLand = value.tcpLand;
      this._tcpNoFlag = value.tcpNoFlag;
      this._tcpPlenErr = value.tcpPlenErr;
      this._tcpSynData = value.tcpSynData;
      this._tcpSynFin = value.tcpSynFin;
      this._tcpWinnuke = value.tcpWinnuke;
      this._udpCsumErr = value.udpCsumErr;
      this._udpHlenErr = value.udpHlenErr;
      this._udpLand = value.udpLand;
      this._udpLenErr = value.udpLenErr;
      this._udpPlenErr = value.udpPlenErr;
      this._udpliteCoverErr = value.udpliteCoverErr;
      this._udpliteCsumErr = value.udpliteCsumErr;
      this._uespMinlenErr = value.uespMinlenErr;
      this._unknprotoMinlenErr = value.unknprotoMinlenErr;
      this._vxlanMinlenErr = value.vxlanMinlenErr;
    }
  }

  // capwap_minlen_err - computed: false, optional: true, required: false
  private _capwapMinlenErr?: string; 
  public get capwapMinlenErr() {
    return this.getStringAttribute('capwap_minlen_err');
  }
  public set capwapMinlenErr(value: string) {
    this._capwapMinlenErr = value;
  }
  public resetCapwapMinlenErr() {
    this._capwapMinlenErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capwapMinlenErrInput() {
    return this._capwapMinlenErr;
  }

  // esp_minlen_err - computed: true, optional: true, required: false
  private _espMinlenErr?: string; 
  public get espMinlenErr() {
    return this.getStringAttribute('esp_minlen_err');
  }
  public set espMinlenErr(value: string) {
    this._espMinlenErr = value;
  }
  public resetEspMinlenErr() {
    this._espMinlenErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get espMinlenErrInput() {
    return this._espMinlenErr;
  }

  // gre_csum_err - computed: false, optional: true, required: false
  private _greCsumErr?: string; 
  public get greCsumErr() {
    return this.getStringAttribute('gre_csum_err');
  }
  public set greCsumErr(value: string) {
    this._greCsumErr = value;
  }
  public resetGreCsumErr() {
    this._greCsumErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greCsumErrInput() {
    return this._greCsumErr;
  }

  // gtpu_plen_err - computed: false, optional: true, required: false
  private _gtpuPlenErr?: string; 
  public get gtpuPlenErr() {
    return this.getStringAttribute('gtpu_plen_err');
  }
  public set gtpuPlenErr(value: string) {
    this._gtpuPlenErr = value;
  }
  public resetGtpuPlenErr() {
    this._gtpuPlenErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpuPlenErrInput() {
    return this._gtpuPlenErr;
  }

  // icmp_csum_err - computed: true, optional: true, required: false
  private _icmpCsumErr?: string; 
  public get icmpCsumErr() {
    return this.getStringAttribute('icmp_csum_err');
  }
  public set icmpCsumErr(value: string) {
    this._icmpCsumErr = value;
  }
  public resetIcmpCsumErr() {
    this._icmpCsumErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpCsumErrInput() {
    return this._icmpCsumErr;
  }

  // icmp_frag - computed: true, optional: true, required: false
  private _icmpFrag?: string; 
  public get icmpFrag() {
    return this.getStringAttribute('icmp_frag');
  }
  public set icmpFrag(value: string) {
    this._icmpFrag = value;
  }
  public resetIcmpFrag() {
    this._icmpFrag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpFragInput() {
    return this._icmpFrag;
  }

  // icmp_land - computed: true, optional: true, required: false
  private _icmpLand?: string; 
  public get icmpLand() {
    return this.getStringAttribute('icmp_land');
  }
  public set icmpLand(value: string) {
    this._icmpLand = value;
  }
  public resetIcmpLand() {
    this._icmpLand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpLandInput() {
    return this._icmpLand;
  }

  // icmp_minlen_err - computed: true, optional: true, required: false
  private _icmpMinlenErr?: string; 
  public get icmpMinlenErr() {
    return this.getStringAttribute('icmp_minlen_err');
  }
  public set icmpMinlenErr(value: string) {
    this._icmpMinlenErr = value;
  }
  public resetIcmpMinlenErr() {
    this._icmpMinlenErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpMinlenErrInput() {
    return this._icmpMinlenErr;
  }

  // ipv4_csum_err - computed: true, optional: true, required: false
  private _ipv4CsumErr?: string; 
  public get ipv4CsumErr() {
    return this.getStringAttribute('ipv4_csum_err');
  }
  public set ipv4CsumErr(value: string) {
    this._ipv4CsumErr = value;
  }
  public resetIpv4CsumErr() {
    this._ipv4CsumErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4CsumErrInput() {
    return this._ipv4CsumErr;
  }

  // ipv4_ihl_err - computed: true, optional: true, required: false
  private _ipv4IhlErr?: string; 
  public get ipv4IhlErr() {
    return this.getStringAttribute('ipv4_ihl_err');
  }
  public set ipv4IhlErr(value: string) {
    this._ipv4IhlErr = value;
  }
  public resetIpv4IhlErr() {
    this._ipv4IhlErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4IhlErrInput() {
    return this._ipv4IhlErr;
  }

  // ipv4_land - computed: true, optional: true, required: false
  private _ipv4Land?: string; 
  public get ipv4Land() {
    return this.getStringAttribute('ipv4_land');
  }
  public set ipv4Land(value: string) {
    this._ipv4Land = value;
  }
  public resetIpv4Land() {
    this._ipv4Land = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4LandInput() {
    return this._ipv4Land;
  }

  // ipv4_len_err - computed: true, optional: true, required: false
  private _ipv4LenErr?: string; 
  public get ipv4LenErr() {
    return this.getStringAttribute('ipv4_len_err');
  }
  public set ipv4LenErr(value: string) {
    this._ipv4LenErr = value;
  }
  public resetIpv4LenErr() {
    this._ipv4LenErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4LenErrInput() {
    return this._ipv4LenErr;
  }

  // ipv4_opt_err - computed: true, optional: true, required: false
  private _ipv4OptErr?: string; 
  public get ipv4OptErr() {
    return this.getStringAttribute('ipv4_opt_err');
  }
  public set ipv4OptErr(value: string) {
    this._ipv4OptErr = value;
  }
  public resetIpv4OptErr() {
    this._ipv4OptErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4OptErrInput() {
    return this._ipv4OptErr;
  }

  // ipv4_optlsrr - computed: true, optional: true, required: false
  private _ipv4Optlsrr?: string; 
  public get ipv4Optlsrr() {
    return this.getStringAttribute('ipv4_optlsrr');
  }
  public set ipv4Optlsrr(value: string) {
    this._ipv4Optlsrr = value;
  }
  public resetIpv4Optlsrr() {
    this._ipv4Optlsrr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4OptlsrrInput() {
    return this._ipv4Optlsrr;
  }

  // ipv4_optrr - computed: true, optional: true, required: false
  private _ipv4Optrr?: string; 
  public get ipv4Optrr() {
    return this.getStringAttribute('ipv4_optrr');
  }
  public set ipv4Optrr(value: string) {
    this._ipv4Optrr = value;
  }
  public resetIpv4Optrr() {
    this._ipv4Optrr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4OptrrInput() {
    return this._ipv4Optrr;
  }

  // ipv4_optsecurity - computed: true, optional: true, required: false
  private _ipv4Optsecurity?: string; 
  public get ipv4Optsecurity() {
    return this.getStringAttribute('ipv4_optsecurity');
  }
  public set ipv4Optsecurity(value: string) {
    this._ipv4Optsecurity = value;
  }
  public resetIpv4Optsecurity() {
    this._ipv4Optsecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4OptsecurityInput() {
    return this._ipv4Optsecurity;
  }

  // ipv4_optssrr - computed: true, optional: true, required: false
  private _ipv4Optssrr?: string; 
  public get ipv4Optssrr() {
    return this.getStringAttribute('ipv4_optssrr');
  }
  public set ipv4Optssrr(value: string) {
    this._ipv4Optssrr = value;
  }
  public resetIpv4Optssrr() {
    this._ipv4Optssrr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4OptssrrInput() {
    return this._ipv4Optssrr;
  }

  // ipv4_optstream - computed: true, optional: true, required: false
  private _ipv4Optstream?: string; 
  public get ipv4Optstream() {
    return this.getStringAttribute('ipv4_optstream');
  }
  public set ipv4Optstream(value: string) {
    this._ipv4Optstream = value;
  }
  public resetIpv4Optstream() {
    this._ipv4Optstream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4OptstreamInput() {
    return this._ipv4Optstream;
  }

  // ipv4_opttimestamp - computed: true, optional: true, required: false
  private _ipv4Opttimestamp?: string; 
  public get ipv4Opttimestamp() {
    return this.getStringAttribute('ipv4_opttimestamp');
  }
  public set ipv4Opttimestamp(value: string) {
    this._ipv4Opttimestamp = value;
  }
  public resetIpv4Opttimestamp() {
    this._ipv4Opttimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4OpttimestampInput() {
    return this._ipv4Opttimestamp;
  }

  // ipv4_proto_err - computed: true, optional: true, required: false
  private _ipv4ProtoErr?: string; 
  public get ipv4ProtoErr() {
    return this.getStringAttribute('ipv4_proto_err');
  }
  public set ipv4ProtoErr(value: string) {
    this._ipv4ProtoErr = value;
  }
  public resetIpv4ProtoErr() {
    this._ipv4ProtoErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4ProtoErrInput() {
    return this._ipv4ProtoErr;
  }

  // ipv4_ttlzero_err - computed: true, optional: true, required: false
  private _ipv4TtlzeroErr?: string; 
  public get ipv4TtlzeroErr() {
    return this.getStringAttribute('ipv4_ttlzero_err');
  }
  public set ipv4TtlzeroErr(value: string) {
    this._ipv4TtlzeroErr = value;
  }
  public resetIpv4TtlzeroErr() {
    this._ipv4TtlzeroErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4TtlzeroErrInput() {
    return this._ipv4TtlzeroErr;
  }

  // ipv4_unknopt - computed: true, optional: true, required: false
  private _ipv4Unknopt?: string; 
  public get ipv4Unknopt() {
    return this.getStringAttribute('ipv4_unknopt');
  }
  public set ipv4Unknopt(value: string) {
    this._ipv4Unknopt = value;
  }
  public resetIpv4Unknopt() {
    this._ipv4Unknopt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4UnknoptInput() {
    return this._ipv4Unknopt;
  }

  // ipv4_ver_err - computed: true, optional: true, required: false
  private _ipv4VerErr?: string; 
  public get ipv4VerErr() {
    return this.getStringAttribute('ipv4_ver_err');
  }
  public set ipv4VerErr(value: string) {
    this._ipv4VerErr = value;
  }
  public resetIpv4VerErr() {
    this._ipv4VerErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4VerErrInput() {
    return this._ipv4VerErr;
  }

  // ipv6_daddr_err - computed: true, optional: true, required: false
  private _ipv6DaddrErr?: string; 
  public get ipv6DaddrErr() {
    return this.getStringAttribute('ipv6_daddr_err');
  }
  public set ipv6DaddrErr(value: string) {
    this._ipv6DaddrErr = value;
  }
  public resetIpv6DaddrErr() {
    this._ipv6DaddrErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6DaddrErrInput() {
    return this._ipv6DaddrErr;
  }

  // ipv6_exthdr_len_err - computed: true, optional: true, required: false
  private _ipv6ExthdrLenErr?: string; 
  public get ipv6ExthdrLenErr() {
    return this.getStringAttribute('ipv6_exthdr_len_err');
  }
  public set ipv6ExthdrLenErr(value: string) {
    this._ipv6ExthdrLenErr = value;
  }
  public resetIpv6ExthdrLenErr() {
    this._ipv6ExthdrLenErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6ExthdrLenErrInput() {
    return this._ipv6ExthdrLenErr;
  }

  // ipv6_exthdr_order_err - computed: true, optional: true, required: false
  private _ipv6ExthdrOrderErr?: string; 
  public get ipv6ExthdrOrderErr() {
    return this.getStringAttribute('ipv6_exthdr_order_err');
  }
  public set ipv6ExthdrOrderErr(value: string) {
    this._ipv6ExthdrOrderErr = value;
  }
  public resetIpv6ExthdrOrderErr() {
    this._ipv6ExthdrOrderErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6ExthdrOrderErrInput() {
    return this._ipv6ExthdrOrderErr;
  }

  // ipv6_ihl_err - computed: true, optional: true, required: false
  private _ipv6IhlErr?: string; 
  public get ipv6IhlErr() {
    return this.getStringAttribute('ipv6_ihl_err');
  }
  public set ipv6IhlErr(value: string) {
    this._ipv6IhlErr = value;
  }
  public resetIpv6IhlErr() {
    this._ipv6IhlErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6IhlErrInput() {
    return this._ipv6IhlErr;
  }

  // ipv6_land - computed: true, optional: true, required: false
  private _ipv6Land?: string; 
  public get ipv6Land() {
    return this.getStringAttribute('ipv6_land');
  }
  public set ipv6Land(value: string) {
    this._ipv6Land = value;
  }
  public resetIpv6Land() {
    this._ipv6Land = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6LandInput() {
    return this._ipv6Land;
  }

  // ipv6_optendpid - computed: true, optional: true, required: false
  private _ipv6Optendpid?: string; 
  public get ipv6Optendpid() {
    return this.getStringAttribute('ipv6_optendpid');
  }
  public set ipv6Optendpid(value: string) {
    this._ipv6Optendpid = value;
  }
  public resetIpv6Optendpid() {
    this._ipv6Optendpid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6OptendpidInput() {
    return this._ipv6Optendpid;
  }

  // ipv6_opthomeaddr - computed: true, optional: true, required: false
  private _ipv6Opthomeaddr?: string; 
  public get ipv6Opthomeaddr() {
    return this.getStringAttribute('ipv6_opthomeaddr');
  }
  public set ipv6Opthomeaddr(value: string) {
    this._ipv6Opthomeaddr = value;
  }
  public resetIpv6Opthomeaddr() {
    this._ipv6Opthomeaddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6OpthomeaddrInput() {
    return this._ipv6Opthomeaddr;
  }

  // ipv6_optinvld - computed: true, optional: true, required: false
  private _ipv6Optinvld?: string; 
  public get ipv6Optinvld() {
    return this.getStringAttribute('ipv6_optinvld');
  }
  public set ipv6Optinvld(value: string) {
    this._ipv6Optinvld = value;
  }
  public resetIpv6Optinvld() {
    this._ipv6Optinvld = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6OptinvldInput() {
    return this._ipv6Optinvld;
  }

  // ipv6_optjumbo - computed: true, optional: true, required: false
  private _ipv6Optjumbo?: string; 
  public get ipv6Optjumbo() {
    return this.getStringAttribute('ipv6_optjumbo');
  }
  public set ipv6Optjumbo(value: string) {
    this._ipv6Optjumbo = value;
  }
  public resetIpv6Optjumbo() {
    this._ipv6Optjumbo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6OptjumboInput() {
    return this._ipv6Optjumbo;
  }

  // ipv6_optnsap - computed: true, optional: true, required: false
  private _ipv6Optnsap?: string; 
  public get ipv6Optnsap() {
    return this.getStringAttribute('ipv6_optnsap');
  }
  public set ipv6Optnsap(value: string) {
    this._ipv6Optnsap = value;
  }
  public resetIpv6Optnsap() {
    this._ipv6Optnsap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6OptnsapInput() {
    return this._ipv6Optnsap;
  }

  // ipv6_optralert - computed: true, optional: true, required: false
  private _ipv6Optralert?: string; 
  public get ipv6Optralert() {
    return this.getStringAttribute('ipv6_optralert');
  }
  public set ipv6Optralert(value: string) {
    this._ipv6Optralert = value;
  }
  public resetIpv6Optralert() {
    this._ipv6Optralert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6OptralertInput() {
    return this._ipv6Optralert;
  }

  // ipv6_opttunnel - computed: true, optional: true, required: false
  private _ipv6Opttunnel?: string; 
  public get ipv6Opttunnel() {
    return this.getStringAttribute('ipv6_opttunnel');
  }
  public set ipv6Opttunnel(value: string) {
    this._ipv6Opttunnel = value;
  }
  public resetIpv6Opttunnel() {
    this._ipv6Opttunnel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6OpttunnelInput() {
    return this._ipv6Opttunnel;
  }

  // ipv6_plen_zero - computed: true, optional: true, required: false
  private _ipv6PlenZero?: string; 
  public get ipv6PlenZero() {
    return this.getStringAttribute('ipv6_plen_zero');
  }
  public set ipv6PlenZero(value: string) {
    this._ipv6PlenZero = value;
  }
  public resetIpv6PlenZero() {
    this._ipv6PlenZero = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PlenZeroInput() {
    return this._ipv6PlenZero;
  }

  // ipv6_proto_err - computed: true, optional: true, required: false
  private _ipv6ProtoErr?: string; 
  public get ipv6ProtoErr() {
    return this.getStringAttribute('ipv6_proto_err');
  }
  public set ipv6ProtoErr(value: string) {
    this._ipv6ProtoErr = value;
  }
  public resetIpv6ProtoErr() {
    this._ipv6ProtoErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6ProtoErrInput() {
    return this._ipv6ProtoErr;
  }

  // ipv6_saddr_err - computed: true, optional: true, required: false
  private _ipv6SaddrErr?: string; 
  public get ipv6SaddrErr() {
    return this.getStringAttribute('ipv6_saddr_err');
  }
  public set ipv6SaddrErr(value: string) {
    this._ipv6SaddrErr = value;
  }
  public resetIpv6SaddrErr() {
    this._ipv6SaddrErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6SaddrErrInput() {
    return this._ipv6SaddrErr;
  }

  // ipv6_unknopt - computed: true, optional: true, required: false
  private _ipv6Unknopt?: string; 
  public get ipv6Unknopt() {
    return this.getStringAttribute('ipv6_unknopt');
  }
  public set ipv6Unknopt(value: string) {
    this._ipv6Unknopt = value;
  }
  public resetIpv6Unknopt() {
    this._ipv6Unknopt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6UnknoptInput() {
    return this._ipv6Unknopt;
  }

  // ipv6_ver_err - computed: true, optional: true, required: false
  private _ipv6VerErr?: string; 
  public get ipv6VerErr() {
    return this.getStringAttribute('ipv6_ver_err');
  }
  public set ipv6VerErr(value: string) {
    this._ipv6VerErr = value;
  }
  public resetIpv6VerErr() {
    this._ipv6VerErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6VerErrInput() {
    return this._ipv6VerErr;
  }

  // nvgre_minlen_err - computed: false, optional: true, required: false
  private _nvgreMinlenErr?: string; 
  public get nvgreMinlenErr() {
    return this.getStringAttribute('nvgre_minlen_err');
  }
  public set nvgreMinlenErr(value: string) {
    this._nvgreMinlenErr = value;
  }
  public resetNvgreMinlenErr() {
    this._nvgreMinlenErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nvgreMinlenErrInput() {
    return this._nvgreMinlenErr;
  }

  // sctp_clen_err - computed: false, optional: true, required: false
  private _sctpClenErr?: string; 
  public get sctpClenErr() {
    return this.getStringAttribute('sctp_clen_err');
  }
  public set sctpClenErr(value: string) {
    this._sctpClenErr = value;
  }
  public resetSctpClenErr() {
    this._sctpClenErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpClenErrInput() {
    return this._sctpClenErr;
  }

  // sctp_crc_err - computed: false, optional: true, required: false
  private _sctpCrcErr?: string; 
  public get sctpCrcErr() {
    return this.getStringAttribute('sctp_crc_err');
  }
  public set sctpCrcErr(value: string) {
    this._sctpCrcErr = value;
  }
  public resetSctpCrcErr() {
    this._sctpCrcErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpCrcErrInput() {
    return this._sctpCrcErr;
  }

  // sctp_csum_err - computed: true, optional: true, required: false
  private _sctpCsumErr?: string; 
  public get sctpCsumErr() {
    return this.getStringAttribute('sctp_csum_err');
  }
  public set sctpCsumErr(value: string) {
    this._sctpCsumErr = value;
  }
  public resetSctpCsumErr() {
    this._sctpCsumErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpCsumErrInput() {
    return this._sctpCsumErr;
  }

  // sctp_l4len_err - computed: false, optional: true, required: false
  private _sctpL4LenErr?: string; 
  public get sctpL4LenErr() {
    return this.getStringAttribute('sctp_l4len_err');
  }
  public set sctpL4LenErr(value: string) {
    this._sctpL4LenErr = value;
  }
  public resetSctpL4LenErr() {
    this._sctpL4LenErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpL4LenErrInput() {
    return this._sctpL4LenErr;
  }

  // tcp_csum_err - computed: true, optional: true, required: false
  private _tcpCsumErr?: string; 
  public get tcpCsumErr() {
    return this.getStringAttribute('tcp_csum_err');
  }
  public set tcpCsumErr(value: string) {
    this._tcpCsumErr = value;
  }
  public resetTcpCsumErr() {
    this._tcpCsumErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpCsumErrInput() {
    return this._tcpCsumErr;
  }

  // tcp_fin_noack - computed: true, optional: true, required: false
  private _tcpFinNoack?: string; 
  public get tcpFinNoack() {
    return this.getStringAttribute('tcp_fin_noack');
  }
  public set tcpFinNoack(value: string) {
    this._tcpFinNoack = value;
  }
  public resetTcpFinNoack() {
    this._tcpFinNoack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFinNoackInput() {
    return this._tcpFinNoack;
  }

  // tcp_fin_only - computed: true, optional: true, required: false
  private _tcpFinOnly?: string; 
  public get tcpFinOnly() {
    return this.getStringAttribute('tcp_fin_only');
  }
  public set tcpFinOnly(value: string) {
    this._tcpFinOnly = value;
  }
  public resetTcpFinOnly() {
    this._tcpFinOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFinOnlyInput() {
    return this._tcpFinOnly;
  }

  // tcp_hlen_err - computed: true, optional: true, required: false
  private _tcpHlenErr?: string; 
  public get tcpHlenErr() {
    return this.getStringAttribute('tcp_hlen_err');
  }
  public set tcpHlenErr(value: string) {
    this._tcpHlenErr = value;
  }
  public resetTcpHlenErr() {
    this._tcpHlenErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpHlenErrInput() {
    return this._tcpHlenErr;
  }

  // tcp_hlenvsl4len_err - computed: false, optional: true, required: false
  private _tcpHlenvsl4LenErr?: string; 
  public get tcpHlenvsl4LenErr() {
    return this.getStringAttribute('tcp_hlenvsl4len_err');
  }
  public set tcpHlenvsl4LenErr(value: string) {
    this._tcpHlenvsl4LenErr = value;
  }
  public resetTcpHlenvsl4LenErr() {
    this._tcpHlenvsl4LenErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpHlenvsl4LenErrInput() {
    return this._tcpHlenvsl4LenErr;
  }

  // tcp_land - computed: true, optional: true, required: false
  private _tcpLand?: string; 
  public get tcpLand() {
    return this.getStringAttribute('tcp_land');
  }
  public set tcpLand(value: string) {
    this._tcpLand = value;
  }
  public resetTcpLand() {
    this._tcpLand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpLandInput() {
    return this._tcpLand;
  }

  // tcp_no_flag - computed: true, optional: true, required: false
  private _tcpNoFlag?: string; 
  public get tcpNoFlag() {
    return this.getStringAttribute('tcp_no_flag');
  }
  public set tcpNoFlag(value: string) {
    this._tcpNoFlag = value;
  }
  public resetTcpNoFlag() {
    this._tcpNoFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpNoFlagInput() {
    return this._tcpNoFlag;
  }

  // tcp_plen_err - computed: true, optional: true, required: false
  private _tcpPlenErr?: string; 
  public get tcpPlenErr() {
    return this.getStringAttribute('tcp_plen_err');
  }
  public set tcpPlenErr(value: string) {
    this._tcpPlenErr = value;
  }
  public resetTcpPlenErr() {
    this._tcpPlenErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPlenErrInput() {
    return this._tcpPlenErr;
  }

  // tcp_syn_data - computed: true, optional: true, required: false
  private _tcpSynData?: string; 
  public get tcpSynData() {
    return this.getStringAttribute('tcp_syn_data');
  }
  public set tcpSynData(value: string) {
    this._tcpSynData = value;
  }
  public resetTcpSynData() {
    this._tcpSynData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSynDataInput() {
    return this._tcpSynData;
  }

  // tcp_syn_fin - computed: true, optional: true, required: false
  private _tcpSynFin?: string; 
  public get tcpSynFin() {
    return this.getStringAttribute('tcp_syn_fin');
  }
  public set tcpSynFin(value: string) {
    this._tcpSynFin = value;
  }
  public resetTcpSynFin() {
    this._tcpSynFin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSynFinInput() {
    return this._tcpSynFin;
  }

  // tcp_winnuke - computed: true, optional: true, required: false
  private _tcpWinnuke?: string; 
  public get tcpWinnuke() {
    return this.getStringAttribute('tcp_winnuke');
  }
  public set tcpWinnuke(value: string) {
    this._tcpWinnuke = value;
  }
  public resetTcpWinnuke() {
    this._tcpWinnuke = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpWinnukeInput() {
    return this._tcpWinnuke;
  }

  // udp_csum_err - computed: true, optional: true, required: false
  private _udpCsumErr?: string; 
  public get udpCsumErr() {
    return this.getStringAttribute('udp_csum_err');
  }
  public set udpCsumErr(value: string) {
    this._udpCsumErr = value;
  }
  public resetUdpCsumErr() {
    this._udpCsumErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpCsumErrInput() {
    return this._udpCsumErr;
  }

  // udp_hlen_err - computed: true, optional: true, required: false
  private _udpHlenErr?: string; 
  public get udpHlenErr() {
    return this.getStringAttribute('udp_hlen_err');
  }
  public set udpHlenErr(value: string) {
    this._udpHlenErr = value;
  }
  public resetUdpHlenErr() {
    this._udpHlenErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpHlenErrInput() {
    return this._udpHlenErr;
  }

  // udp_land - computed: true, optional: true, required: false
  private _udpLand?: string; 
  public get udpLand() {
    return this.getStringAttribute('udp_land');
  }
  public set udpLand(value: string) {
    this._udpLand = value;
  }
  public resetUdpLand() {
    this._udpLand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpLandInput() {
    return this._udpLand;
  }

  // udp_len_err - computed: true, optional: true, required: false
  private _udpLenErr?: string; 
  public get udpLenErr() {
    return this.getStringAttribute('udp_len_err');
  }
  public set udpLenErr(value: string) {
    this._udpLenErr = value;
  }
  public resetUdpLenErr() {
    this._udpLenErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpLenErrInput() {
    return this._udpLenErr;
  }

  // udp_plen_err - computed: true, optional: true, required: false
  private _udpPlenErr?: string; 
  public get udpPlenErr() {
    return this.getStringAttribute('udp_plen_err');
  }
  public set udpPlenErr(value: string) {
    this._udpPlenErr = value;
  }
  public resetUdpPlenErr() {
    this._udpPlenErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPlenErrInput() {
    return this._udpPlenErr;
  }

  // udplite_cover_err - computed: true, optional: true, required: false
  private _udpliteCoverErr?: string; 
  public get udpliteCoverErr() {
    return this.getStringAttribute('udplite_cover_err');
  }
  public set udpliteCoverErr(value: string) {
    this._udpliteCoverErr = value;
  }
  public resetUdpliteCoverErr() {
    this._udpliteCoverErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpliteCoverErrInput() {
    return this._udpliteCoverErr;
  }

  // udplite_csum_err - computed: true, optional: true, required: false
  private _udpliteCsumErr?: string; 
  public get udpliteCsumErr() {
    return this.getStringAttribute('udplite_csum_err');
  }
  public set udpliteCsumErr(value: string) {
    this._udpliteCsumErr = value;
  }
  public resetUdpliteCsumErr() {
    this._udpliteCsumErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpliteCsumErrInput() {
    return this._udpliteCsumErr;
  }

  // uesp_minlen_err - computed: false, optional: true, required: false
  private _uespMinlenErr?: string; 
  public get uespMinlenErr() {
    return this.getStringAttribute('uesp_minlen_err');
  }
  public set uespMinlenErr(value: string) {
    this._uespMinlenErr = value;
  }
  public resetUespMinlenErr() {
    this._uespMinlenErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uespMinlenErrInput() {
    return this._uespMinlenErr;
  }

  // unknproto_minlen_err - computed: true, optional: true, required: false
  private _unknprotoMinlenErr?: string; 
  public get unknprotoMinlenErr() {
    return this.getStringAttribute('unknproto_minlen_err');
  }
  public set unknprotoMinlenErr(value: string) {
    this._unknprotoMinlenErr = value;
  }
  public resetUnknprotoMinlenErr() {
    this._unknprotoMinlenErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknprotoMinlenErrInput() {
    return this._unknprotoMinlenErr;
  }

  // vxlan_minlen_err - computed: false, optional: true, required: false
  private _vxlanMinlenErr?: string; 
  public get vxlanMinlenErr() {
    return this.getStringAttribute('vxlan_minlen_err');
  }
  public set vxlanMinlenErr(value: string) {
    this._vxlanMinlenErr = value;
  }
  public resetVxlanMinlenErr() {
    this._vxlanMinlenErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vxlanMinlenErrInput() {
    return this._vxlanMinlenErr;
  }
}
export interface ObjectSystemNpuHpe {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#all_protocol ObjectSystemNpu#all_protocol}
  */
  readonly allProtocol?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#arp_max ObjectSystemNpu#arp_max}
  */
  readonly arpMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#enable_queue_shaper ObjectSystemNpu#enable_queue_shaper}
  */
  readonly enableQueueShaper?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#enable_shaper ObjectSystemNpu#enable_shaper}
  */
  readonly enableShaper?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#esp_max ObjectSystemNpu#esp_max}
  */
  readonly espMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#exception_code ObjectSystemNpu#exception_code}
  */
  readonly exceptionCode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#fragment_with_sess ObjectSystemNpu#fragment_with_sess}
  */
  readonly fragmentWithSess?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#fragment_without_session ObjectSystemNpu#fragment_without_session}
  */
  readonly fragmentWithoutSession?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#high_priority ObjectSystemNpu#high_priority}
  */
  readonly highPriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#icmp_max ObjectSystemNpu#icmp_max}
  */
  readonly icmpMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#ip_frag_max ObjectSystemNpu#ip_frag_max}
  */
  readonly ipFragMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#ip_others_max ObjectSystemNpu#ip_others_max}
  */
  readonly ipOthersMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#l2_others_max ObjectSystemNpu#l2_others_max}
  */
  readonly l2OthersMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#pri_type_max ObjectSystemNpu#pri_type_max}
  */
  readonly priTypeMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#queue_shaper_max ObjectSystemNpu#queue_shaper_max}
  */
  readonly queueShaperMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#sctp_max ObjectSystemNpu#sctp_max}
  */
  readonly sctpMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#tcp_max ObjectSystemNpu#tcp_max}
  */
  readonly tcpMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#tcpfin_rst_max ObjectSystemNpu#tcpfin_rst_max}
  */
  readonly tcpfinRstMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#tcpsyn_ack_max ObjectSystemNpu#tcpsyn_ack_max}
  */
  readonly tcpsynAckMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#tcpsyn_max ObjectSystemNpu#tcpsyn_max}
  */
  readonly tcpsynMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#udp_max ObjectSystemNpu#udp_max}
  */
  readonly udpMax?: number;
}

export function objectSystemNpuHpeToTerraform(struct?: ObjectSystemNpuHpeOutputReference | ObjectSystemNpuHpe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_protocol: cdktf.numberToTerraform(struct!.allProtocol),
    arp_max: cdktf.numberToTerraform(struct!.arpMax),
    enable_queue_shaper: cdktf.stringToTerraform(struct!.enableQueueShaper),
    enable_shaper: cdktf.stringToTerraform(struct!.enableShaper),
    esp_max: cdktf.numberToTerraform(struct!.espMax),
    exception_code: cdktf.numberToTerraform(struct!.exceptionCode),
    fragment_with_sess: cdktf.numberToTerraform(struct!.fragmentWithSess),
    fragment_without_session: cdktf.numberToTerraform(struct!.fragmentWithoutSession),
    high_priority: cdktf.numberToTerraform(struct!.highPriority),
    icmp_max: cdktf.numberToTerraform(struct!.icmpMax),
    ip_frag_max: cdktf.numberToTerraform(struct!.ipFragMax),
    ip_others_max: cdktf.numberToTerraform(struct!.ipOthersMax),
    l2_others_max: cdktf.numberToTerraform(struct!.l2OthersMax),
    pri_type_max: cdktf.numberToTerraform(struct!.priTypeMax),
    queue_shaper_max: cdktf.numberToTerraform(struct!.queueShaperMax),
    sctp_max: cdktf.numberToTerraform(struct!.sctpMax),
    tcp_max: cdktf.numberToTerraform(struct!.tcpMax),
    tcpfin_rst_max: cdktf.numberToTerraform(struct!.tcpfinRstMax),
    tcpsyn_ack_max: cdktf.numberToTerraform(struct!.tcpsynAckMax),
    tcpsyn_max: cdktf.numberToTerraform(struct!.tcpsynMax),
    udp_max: cdktf.numberToTerraform(struct!.udpMax),
  }
}


export function objectSystemNpuHpeToHclTerraform(struct?: ObjectSystemNpuHpeOutputReference | ObjectSystemNpuHpe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_protocol: {
      value: cdktf.numberToHclTerraform(struct!.allProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    arp_max: {
      value: cdktf.numberToHclTerraform(struct!.arpMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable_queue_shaper: {
      value: cdktf.stringToHclTerraform(struct!.enableQueueShaper),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_shaper: {
      value: cdktf.stringToHclTerraform(struct!.enableShaper),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    esp_max: {
      value: cdktf.numberToHclTerraform(struct!.espMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_code: {
      value: cdktf.numberToHclTerraform(struct!.exceptionCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fragment_with_sess: {
      value: cdktf.numberToHclTerraform(struct!.fragmentWithSess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fragment_without_session: {
      value: cdktf.numberToHclTerraform(struct!.fragmentWithoutSession),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    high_priority: {
      value: cdktf.numberToHclTerraform(struct!.highPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_max: {
      value: cdktf.numberToHclTerraform(struct!.icmpMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_frag_max: {
      value: cdktf.numberToHclTerraform(struct!.ipFragMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_others_max: {
      value: cdktf.numberToHclTerraform(struct!.ipOthersMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l2_others_max: {
      value: cdktf.numberToHclTerraform(struct!.l2OthersMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pri_type_max: {
      value: cdktf.numberToHclTerraform(struct!.priTypeMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    queue_shaper_max: {
      value: cdktf.numberToHclTerraform(struct!.queueShaperMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sctp_max: {
      value: cdktf.numberToHclTerraform(struct!.sctpMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_max: {
      value: cdktf.numberToHclTerraform(struct!.tcpMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcpfin_rst_max: {
      value: cdktf.numberToHclTerraform(struct!.tcpfinRstMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcpsyn_ack_max: {
      value: cdktf.numberToHclTerraform(struct!.tcpsynAckMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcpsyn_max: {
      value: cdktf.numberToHclTerraform(struct!.tcpsynMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_max: {
      value: cdktf.numberToHclTerraform(struct!.udpMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectSystemNpuHpeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectSystemNpuHpe | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.allProtocol = this._allProtocol;
    }
    if (this._arpMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.arpMax = this._arpMax;
    }
    if (this._enableQueueShaper !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableQueueShaper = this._enableQueueShaper;
    }
    if (this._enableShaper !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableShaper = this._enableShaper;
    }
    if (this._espMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.espMax = this._espMax;
    }
    if (this._exceptionCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionCode = this._exceptionCode;
    }
    if (this._fragmentWithSess !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragmentWithSess = this._fragmentWithSess;
    }
    if (this._fragmentWithoutSession !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragmentWithoutSession = this._fragmentWithoutSession;
    }
    if (this._highPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.highPriority = this._highPriority;
    }
    if (this._icmpMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpMax = this._icmpMax;
    }
    if (this._ipFragMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFragMax = this._ipFragMax;
    }
    if (this._ipOthersMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipOthersMax = this._ipOthersMax;
    }
    if (this._l2OthersMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.l2OthersMax = this._l2OthersMax;
    }
    if (this._priTypeMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.priTypeMax = this._priTypeMax;
    }
    if (this._queueShaperMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueShaperMax = this._queueShaperMax;
    }
    if (this._sctpMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.sctpMax = this._sctpMax;
    }
    if (this._tcpMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpMax = this._tcpMax;
    }
    if (this._tcpfinRstMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpfinRstMax = this._tcpfinRstMax;
    }
    if (this._tcpsynAckMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpsynAckMax = this._tcpsynAckMax;
    }
    if (this._tcpsynMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpsynMax = this._tcpsynMax;
    }
    if (this._udpMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpMax = this._udpMax;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectSystemNpuHpe | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allProtocol = undefined;
      this._arpMax = undefined;
      this._enableQueueShaper = undefined;
      this._enableShaper = undefined;
      this._espMax = undefined;
      this._exceptionCode = undefined;
      this._fragmentWithSess = undefined;
      this._fragmentWithoutSession = undefined;
      this._highPriority = undefined;
      this._icmpMax = undefined;
      this._ipFragMax = undefined;
      this._ipOthersMax = undefined;
      this._l2OthersMax = undefined;
      this._priTypeMax = undefined;
      this._queueShaperMax = undefined;
      this._sctpMax = undefined;
      this._tcpMax = undefined;
      this._tcpfinRstMax = undefined;
      this._tcpsynAckMax = undefined;
      this._tcpsynMax = undefined;
      this._udpMax = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allProtocol = value.allProtocol;
      this._arpMax = value.arpMax;
      this._enableQueueShaper = value.enableQueueShaper;
      this._enableShaper = value.enableShaper;
      this._espMax = value.espMax;
      this._exceptionCode = value.exceptionCode;
      this._fragmentWithSess = value.fragmentWithSess;
      this._fragmentWithoutSession = value.fragmentWithoutSession;
      this._highPriority = value.highPriority;
      this._icmpMax = value.icmpMax;
      this._ipFragMax = value.ipFragMax;
      this._ipOthersMax = value.ipOthersMax;
      this._l2OthersMax = value.l2OthersMax;
      this._priTypeMax = value.priTypeMax;
      this._queueShaperMax = value.queueShaperMax;
      this._sctpMax = value.sctpMax;
      this._tcpMax = value.tcpMax;
      this._tcpfinRstMax = value.tcpfinRstMax;
      this._tcpsynAckMax = value.tcpsynAckMax;
      this._tcpsynMax = value.tcpsynMax;
      this._udpMax = value.udpMax;
    }
  }

  // all_protocol - computed: true, optional: true, required: false
  private _allProtocol?: number; 
  public get allProtocol() {
    return this.getNumberAttribute('all_protocol');
  }
  public set allProtocol(value: number) {
    this._allProtocol = value;
  }
  public resetAllProtocol() {
    this._allProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allProtocolInput() {
    return this._allProtocol;
  }

  // arp_max - computed: true, optional: true, required: false
  private _arpMax?: number; 
  public get arpMax() {
    return this.getNumberAttribute('arp_max');
  }
  public set arpMax(value: number) {
    this._arpMax = value;
  }
  public resetArpMax() {
    this._arpMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpMaxInput() {
    return this._arpMax;
  }

  // enable_queue_shaper - computed: true, optional: true, required: false
  private _enableQueueShaper?: string; 
  public get enableQueueShaper() {
    return this.getStringAttribute('enable_queue_shaper');
  }
  public set enableQueueShaper(value: string) {
    this._enableQueueShaper = value;
  }
  public resetEnableQueueShaper() {
    this._enableQueueShaper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableQueueShaperInput() {
    return this._enableQueueShaper;
  }

  // enable_shaper - computed: true, optional: true, required: false
  private _enableShaper?: string; 
  public get enableShaper() {
    return this.getStringAttribute('enable_shaper');
  }
  public set enableShaper(value: string) {
    this._enableShaper = value;
  }
  public resetEnableShaper() {
    this._enableShaper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableShaperInput() {
    return this._enableShaper;
  }

  // esp_max - computed: true, optional: true, required: false
  private _espMax?: number; 
  public get espMax() {
    return this.getNumberAttribute('esp_max');
  }
  public set espMax(value: number) {
    this._espMax = value;
  }
  public resetEspMax() {
    this._espMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get espMaxInput() {
    return this._espMax;
  }

  // exception_code - computed: true, optional: true, required: false
  private _exceptionCode?: number; 
  public get exceptionCode() {
    return this.getNumberAttribute('exception_code');
  }
  public set exceptionCode(value: number) {
    this._exceptionCode = value;
  }
  public resetExceptionCode() {
    this._exceptionCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionCodeInput() {
    return this._exceptionCode;
  }

  // fragment_with_sess - computed: true, optional: true, required: false
  private _fragmentWithSess?: number; 
  public get fragmentWithSess() {
    return this.getNumberAttribute('fragment_with_sess');
  }
  public set fragmentWithSess(value: number) {
    this._fragmentWithSess = value;
  }
  public resetFragmentWithSess() {
    this._fragmentWithSess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragmentWithSessInput() {
    return this._fragmentWithSess;
  }

  // fragment_without_session - computed: true, optional: true, required: false
  private _fragmentWithoutSession?: number; 
  public get fragmentWithoutSession() {
    return this.getNumberAttribute('fragment_without_session');
  }
  public set fragmentWithoutSession(value: number) {
    this._fragmentWithoutSession = value;
  }
  public resetFragmentWithoutSession() {
    this._fragmentWithoutSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragmentWithoutSessionInput() {
    return this._fragmentWithoutSession;
  }

  // high_priority - computed: true, optional: true, required: false
  private _highPriority?: number; 
  public get highPriority() {
    return this.getNumberAttribute('high_priority');
  }
  public set highPriority(value: number) {
    this._highPriority = value;
  }
  public resetHighPriority() {
    this._highPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highPriorityInput() {
    return this._highPriority;
  }

  // icmp_max - computed: true, optional: true, required: false
  private _icmpMax?: number; 
  public get icmpMax() {
    return this.getNumberAttribute('icmp_max');
  }
  public set icmpMax(value: number) {
    this._icmpMax = value;
  }
  public resetIcmpMax() {
    this._icmpMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpMaxInput() {
    return this._icmpMax;
  }

  // ip_frag_max - computed: true, optional: true, required: false
  private _ipFragMax?: number; 
  public get ipFragMax() {
    return this.getNumberAttribute('ip_frag_max');
  }
  public set ipFragMax(value: number) {
    this._ipFragMax = value;
  }
  public resetIpFragMax() {
    this._ipFragMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFragMaxInput() {
    return this._ipFragMax;
  }

  // ip_others_max - computed: true, optional: true, required: false
  private _ipOthersMax?: number; 
  public get ipOthersMax() {
    return this.getNumberAttribute('ip_others_max');
  }
  public set ipOthersMax(value: number) {
    this._ipOthersMax = value;
  }
  public resetIpOthersMax() {
    this._ipOthersMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipOthersMaxInput() {
    return this._ipOthersMax;
  }

  // l2_others_max - computed: true, optional: true, required: false
  private _l2OthersMax?: number; 
  public get l2OthersMax() {
    return this.getNumberAttribute('l2_others_max');
  }
  public set l2OthersMax(value: number) {
    this._l2OthersMax = value;
  }
  public resetL2OthersMax() {
    this._l2OthersMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2OthersMaxInput() {
    return this._l2OthersMax;
  }

  // pri_type_max - computed: true, optional: true, required: false
  private _priTypeMax?: number; 
  public get priTypeMax() {
    return this.getNumberAttribute('pri_type_max');
  }
  public set priTypeMax(value: number) {
    this._priTypeMax = value;
  }
  public resetPriTypeMax() {
    this._priTypeMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priTypeMaxInput() {
    return this._priTypeMax;
  }

  // queue_shaper_max - computed: true, optional: true, required: false
  private _queueShaperMax?: number; 
  public get queueShaperMax() {
    return this.getNumberAttribute('queue_shaper_max');
  }
  public set queueShaperMax(value: number) {
    this._queueShaperMax = value;
  }
  public resetQueueShaperMax() {
    this._queueShaperMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueShaperMaxInput() {
    return this._queueShaperMax;
  }

  // sctp_max - computed: true, optional: true, required: false
  private _sctpMax?: number; 
  public get sctpMax() {
    return this.getNumberAttribute('sctp_max');
  }
  public set sctpMax(value: number) {
    this._sctpMax = value;
  }
  public resetSctpMax() {
    this._sctpMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpMaxInput() {
    return this._sctpMax;
  }

  // tcp_max - computed: true, optional: true, required: false
  private _tcpMax?: number; 
  public get tcpMax() {
    return this.getNumberAttribute('tcp_max');
  }
  public set tcpMax(value: number) {
    this._tcpMax = value;
  }
  public resetTcpMax() {
    this._tcpMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpMaxInput() {
    return this._tcpMax;
  }

  // tcpfin_rst_max - computed: true, optional: true, required: false
  private _tcpfinRstMax?: number; 
  public get tcpfinRstMax() {
    return this.getNumberAttribute('tcpfin_rst_max');
  }
  public set tcpfinRstMax(value: number) {
    this._tcpfinRstMax = value;
  }
  public resetTcpfinRstMax() {
    this._tcpfinRstMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpfinRstMaxInput() {
    return this._tcpfinRstMax;
  }

  // tcpsyn_ack_max - computed: true, optional: true, required: false
  private _tcpsynAckMax?: number; 
  public get tcpsynAckMax() {
    return this.getNumberAttribute('tcpsyn_ack_max');
  }
  public set tcpsynAckMax(value: number) {
    this._tcpsynAckMax = value;
  }
  public resetTcpsynAckMax() {
    this._tcpsynAckMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpsynAckMaxInput() {
    return this._tcpsynAckMax;
  }

  // tcpsyn_max - computed: true, optional: true, required: false
  private _tcpsynMax?: number; 
  public get tcpsynMax() {
    return this.getNumberAttribute('tcpsyn_max');
  }
  public set tcpsynMax(value: number) {
    this._tcpsynMax = value;
  }
  public resetTcpsynMax() {
    this._tcpsynMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpsynMaxInput() {
    return this._tcpsynMax;
  }

  // udp_max - computed: true, optional: true, required: false
  private _udpMax?: number; 
  public get udpMax() {
    return this.getNumberAttribute('udp_max');
  }
  public set udpMax(value: number) {
    this._udpMax = value;
  }
  public resetUdpMax() {
    this._udpMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpMaxInput() {
    return this._udpMax;
  }
}
export interface ObjectSystemNpuIcmpErrorRateCtrl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#icmpv4_error_bucket_size ObjectSystemNpu#icmpv4_error_bucket_size}
  */
  readonly icmpv4ErrorBucketSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#icmpv4_error_rate ObjectSystemNpu#icmpv4_error_rate}
  */
  readonly icmpv4ErrorRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#icmpv4_error_rate_limit ObjectSystemNpu#icmpv4_error_rate_limit}
  */
  readonly icmpv4ErrorRateLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#icmpv6_error_bucket_size ObjectSystemNpu#icmpv6_error_bucket_size}
  */
  readonly icmpv6ErrorBucketSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#icmpv6_error_rate ObjectSystemNpu#icmpv6_error_rate}
  */
  readonly icmpv6ErrorRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#icmpv6_error_rate_limit ObjectSystemNpu#icmpv6_error_rate_limit}
  */
  readonly icmpv6ErrorRateLimit?: string;
}

export function objectSystemNpuIcmpErrorRateCtrlToTerraform(struct?: ObjectSystemNpuIcmpErrorRateCtrlOutputReference | ObjectSystemNpuIcmpErrorRateCtrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    icmpv4_error_bucket_size: cdktf.numberToTerraform(struct!.icmpv4ErrorBucketSize),
    icmpv4_error_rate: cdktf.numberToTerraform(struct!.icmpv4ErrorRate),
    icmpv4_error_rate_limit: cdktf.stringToTerraform(struct!.icmpv4ErrorRateLimit),
    icmpv6_error_bucket_size: cdktf.numberToTerraform(struct!.icmpv6ErrorBucketSize),
    icmpv6_error_rate: cdktf.numberToTerraform(struct!.icmpv6ErrorRate),
    icmpv6_error_rate_limit: cdktf.stringToTerraform(struct!.icmpv6ErrorRateLimit),
  }
}


export function objectSystemNpuIcmpErrorRateCtrlToHclTerraform(struct?: ObjectSystemNpuIcmpErrorRateCtrlOutputReference | ObjectSystemNpuIcmpErrorRateCtrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    icmpv4_error_bucket_size: {
      value: cdktf.numberToHclTerraform(struct!.icmpv4ErrorBucketSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmpv4_error_rate: {
      value: cdktf.numberToHclTerraform(struct!.icmpv4ErrorRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmpv4_error_rate_limit: {
      value: cdktf.stringToHclTerraform(struct!.icmpv4ErrorRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icmpv6_error_bucket_size: {
      value: cdktf.numberToHclTerraform(struct!.icmpv6ErrorBucketSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmpv6_error_rate: {
      value: cdktf.numberToHclTerraform(struct!.icmpv6ErrorRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmpv6_error_rate_limit: {
      value: cdktf.stringToHclTerraform(struct!.icmpv6ErrorRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectSystemNpuIcmpErrorRateCtrlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectSystemNpuIcmpErrorRateCtrl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._icmpv4ErrorBucketSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpv4ErrorBucketSize = this._icmpv4ErrorBucketSize;
    }
    if (this._icmpv4ErrorRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpv4ErrorRate = this._icmpv4ErrorRate;
    }
    if (this._icmpv4ErrorRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpv4ErrorRateLimit = this._icmpv4ErrorRateLimit;
    }
    if (this._icmpv6ErrorBucketSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpv6ErrorBucketSize = this._icmpv6ErrorBucketSize;
    }
    if (this._icmpv6ErrorRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpv6ErrorRate = this._icmpv6ErrorRate;
    }
    if (this._icmpv6ErrorRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpv6ErrorRateLimit = this._icmpv6ErrorRateLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectSystemNpuIcmpErrorRateCtrl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._icmpv4ErrorBucketSize = undefined;
      this._icmpv4ErrorRate = undefined;
      this._icmpv4ErrorRateLimit = undefined;
      this._icmpv6ErrorBucketSize = undefined;
      this._icmpv6ErrorRate = undefined;
      this._icmpv6ErrorRateLimit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._icmpv4ErrorBucketSize = value.icmpv4ErrorBucketSize;
      this._icmpv4ErrorRate = value.icmpv4ErrorRate;
      this._icmpv4ErrorRateLimit = value.icmpv4ErrorRateLimit;
      this._icmpv6ErrorBucketSize = value.icmpv6ErrorBucketSize;
      this._icmpv6ErrorRate = value.icmpv6ErrorRate;
      this._icmpv6ErrorRateLimit = value.icmpv6ErrorRateLimit;
    }
  }

  // icmpv4_error_bucket_size - computed: true, optional: true, required: false
  private _icmpv4ErrorBucketSize?: number; 
  public get icmpv4ErrorBucketSize() {
    return this.getNumberAttribute('icmpv4_error_bucket_size');
  }
  public set icmpv4ErrorBucketSize(value: number) {
    this._icmpv4ErrorBucketSize = value;
  }
  public resetIcmpv4ErrorBucketSize() {
    this._icmpv4ErrorBucketSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpv4ErrorBucketSizeInput() {
    return this._icmpv4ErrorBucketSize;
  }

  // icmpv4_error_rate - computed: true, optional: true, required: false
  private _icmpv4ErrorRate?: number; 
  public get icmpv4ErrorRate() {
    return this.getNumberAttribute('icmpv4_error_rate');
  }
  public set icmpv4ErrorRate(value: number) {
    this._icmpv4ErrorRate = value;
  }
  public resetIcmpv4ErrorRate() {
    this._icmpv4ErrorRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpv4ErrorRateInput() {
    return this._icmpv4ErrorRate;
  }

  // icmpv4_error_rate_limit - computed: true, optional: true, required: false
  private _icmpv4ErrorRateLimit?: string; 
  public get icmpv4ErrorRateLimit() {
    return this.getStringAttribute('icmpv4_error_rate_limit');
  }
  public set icmpv4ErrorRateLimit(value: string) {
    this._icmpv4ErrorRateLimit = value;
  }
  public resetIcmpv4ErrorRateLimit() {
    this._icmpv4ErrorRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpv4ErrorRateLimitInput() {
    return this._icmpv4ErrorRateLimit;
  }

  // icmpv6_error_bucket_size - computed: true, optional: true, required: false
  private _icmpv6ErrorBucketSize?: number; 
  public get icmpv6ErrorBucketSize() {
    return this.getNumberAttribute('icmpv6_error_bucket_size');
  }
  public set icmpv6ErrorBucketSize(value: number) {
    this._icmpv6ErrorBucketSize = value;
  }
  public resetIcmpv6ErrorBucketSize() {
    this._icmpv6ErrorBucketSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpv6ErrorBucketSizeInput() {
    return this._icmpv6ErrorBucketSize;
  }

  // icmpv6_error_rate - computed: true, optional: true, required: false
  private _icmpv6ErrorRate?: number; 
  public get icmpv6ErrorRate() {
    return this.getNumberAttribute('icmpv6_error_rate');
  }
  public set icmpv6ErrorRate(value: number) {
    this._icmpv6ErrorRate = value;
  }
  public resetIcmpv6ErrorRate() {
    this._icmpv6ErrorRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpv6ErrorRateInput() {
    return this._icmpv6ErrorRate;
  }

  // icmpv6_error_rate_limit - computed: true, optional: true, required: false
  private _icmpv6ErrorRateLimit?: string; 
  public get icmpv6ErrorRateLimit() {
    return this.getStringAttribute('icmpv6_error_rate_limit');
  }
  public set icmpv6ErrorRateLimit(value: string) {
    this._icmpv6ErrorRateLimit = value;
  }
  public resetIcmpv6ErrorRateLimit() {
    this._icmpv6ErrorRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpv6ErrorRateLimitInput() {
    return this._icmpv6ErrorRateLimit;
  }
}
export interface ObjectSystemNpuIcmpRateCtrl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#icmp_v4_bucket_size ObjectSystemNpu#icmp_v4_bucket_size}
  */
  readonly icmpV4BucketSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#icmp_v4_rate ObjectSystemNpu#icmp_v4_rate}
  */
  readonly icmpV4Rate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#icmp_v6_bucket_size ObjectSystemNpu#icmp_v6_bucket_size}
  */
  readonly icmpV6BucketSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#icmp_v6_rate ObjectSystemNpu#icmp_v6_rate}
  */
  readonly icmpV6Rate?: number;
}

export function objectSystemNpuIcmpRateCtrlToTerraform(struct?: ObjectSystemNpuIcmpRateCtrlOutputReference | ObjectSystemNpuIcmpRateCtrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    icmp_v4_bucket_size: cdktf.numberToTerraform(struct!.icmpV4BucketSize),
    icmp_v4_rate: cdktf.numberToTerraform(struct!.icmpV4Rate),
    icmp_v6_bucket_size: cdktf.numberToTerraform(struct!.icmpV6BucketSize),
    icmp_v6_rate: cdktf.numberToTerraform(struct!.icmpV6Rate),
  }
}


export function objectSystemNpuIcmpRateCtrlToHclTerraform(struct?: ObjectSystemNpuIcmpRateCtrlOutputReference | ObjectSystemNpuIcmpRateCtrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    icmp_v4_bucket_size: {
      value: cdktf.numberToHclTerraform(struct!.icmpV4BucketSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_v4_rate: {
      value: cdktf.numberToHclTerraform(struct!.icmpV4Rate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_v6_bucket_size: {
      value: cdktf.numberToHclTerraform(struct!.icmpV6BucketSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_v6_rate: {
      value: cdktf.numberToHclTerraform(struct!.icmpV6Rate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectSystemNpuIcmpRateCtrlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectSystemNpuIcmpRateCtrl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._icmpV4BucketSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpV4BucketSize = this._icmpV4BucketSize;
    }
    if (this._icmpV4Rate !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpV4Rate = this._icmpV4Rate;
    }
    if (this._icmpV6BucketSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpV6BucketSize = this._icmpV6BucketSize;
    }
    if (this._icmpV6Rate !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpV6Rate = this._icmpV6Rate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectSystemNpuIcmpRateCtrl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._icmpV4BucketSize = undefined;
      this._icmpV4Rate = undefined;
      this._icmpV6BucketSize = undefined;
      this._icmpV6Rate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._icmpV4BucketSize = value.icmpV4BucketSize;
      this._icmpV4Rate = value.icmpV4Rate;
      this._icmpV6BucketSize = value.icmpV6BucketSize;
      this._icmpV6Rate = value.icmpV6Rate;
    }
  }

  // icmp_v4_bucket_size - computed: false, optional: true, required: false
  private _icmpV4BucketSize?: number; 
  public get icmpV4BucketSize() {
    return this.getNumberAttribute('icmp_v4_bucket_size');
  }
  public set icmpV4BucketSize(value: number) {
    this._icmpV4BucketSize = value;
  }
  public resetIcmpV4BucketSize() {
    this._icmpV4BucketSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpV4BucketSizeInput() {
    return this._icmpV4BucketSize;
  }

  // icmp_v4_rate - computed: true, optional: true, required: false
  private _icmpV4Rate?: number; 
  public get icmpV4Rate() {
    return this.getNumberAttribute('icmp_v4_rate');
  }
  public set icmpV4Rate(value: number) {
    this._icmpV4Rate = value;
  }
  public resetIcmpV4Rate() {
    this._icmpV4Rate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpV4RateInput() {
    return this._icmpV4Rate;
  }

  // icmp_v6_bucket_size - computed: true, optional: true, required: false
  private _icmpV6BucketSize?: number; 
  public get icmpV6BucketSize() {
    return this.getNumberAttribute('icmp_v6_bucket_size');
  }
  public set icmpV6BucketSize(value: number) {
    this._icmpV6BucketSize = value;
  }
  public resetIcmpV6BucketSize() {
    this._icmpV6BucketSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpV6BucketSizeInput() {
    return this._icmpV6BucketSize;
  }

  // icmp_v6_rate - computed: true, optional: true, required: false
  private _icmpV6Rate?: number; 
  public get icmpV6Rate() {
    return this.getNumberAttribute('icmp_v6_rate');
  }
  public set icmpV6Rate(value: number) {
    this._icmpV6Rate = value;
  }
  public resetIcmpV6Rate() {
    this._icmpV6Rate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpV6RateInput() {
    return this._icmpV6Rate;
  }
}
export interface ObjectSystemNpuIpReassembly {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#max_timeout ObjectSystemNpu#max_timeout}
  */
  readonly maxTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#min_timeout ObjectSystemNpu#min_timeout}
  */
  readonly minTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#status ObjectSystemNpu#status}
  */
  readonly status?: string;
}

export function objectSystemNpuIpReassemblyToTerraform(struct?: ObjectSystemNpuIpReassemblyOutputReference | ObjectSystemNpuIpReassembly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_timeout: cdktf.numberToTerraform(struct!.maxTimeout),
    min_timeout: cdktf.numberToTerraform(struct!.minTimeout),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function objectSystemNpuIpReassemblyToHclTerraform(struct?: ObjectSystemNpuIpReassemblyOutputReference | ObjectSystemNpuIpReassembly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_timeout: {
      value: cdktf.numberToHclTerraform(struct!.maxTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_timeout: {
      value: cdktf.numberToHclTerraform(struct!.minTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectSystemNpuIpReassemblyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectSystemNpuIpReassembly | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTimeout = this._maxTimeout;
    }
    if (this._minTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.minTimeout = this._minTimeout;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectSystemNpuIpReassembly | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxTimeout = undefined;
      this._minTimeout = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxTimeout = value.maxTimeout;
      this._minTimeout = value.minTimeout;
      this._status = value.status;
    }
  }

  // max_timeout - computed: true, optional: true, required: false
  private _maxTimeout?: number; 
  public get maxTimeout() {
    return this.getNumberAttribute('max_timeout');
  }
  public set maxTimeout(value: number) {
    this._maxTimeout = value;
  }
  public resetMaxTimeout() {
    this._maxTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTimeoutInput() {
    return this._maxTimeout;
  }

  // min_timeout - computed: true, optional: true, required: false
  private _minTimeout?: number; 
  public get minTimeout() {
    return this.getNumberAttribute('min_timeout');
  }
  public set minTimeout(value: number) {
    this._minTimeout = value;
  }
  public resetMinTimeout() {
    this._minTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTimeoutInput() {
    return this._minTimeout;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface ObjectSystemNpuIsfNpQueues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#cos0 ObjectSystemNpu#cos0}
  */
  readonly cos0?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#cos1 ObjectSystemNpu#cos1}
  */
  readonly cos1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#cos2 ObjectSystemNpu#cos2}
  */
  readonly cos2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#cos3 ObjectSystemNpu#cos3}
  */
  readonly cos3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#cos4 ObjectSystemNpu#cos4}
  */
  readonly cos4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#cos5 ObjectSystemNpu#cos5}
  */
  readonly cos5?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#cos6 ObjectSystemNpu#cos6}
  */
  readonly cos6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#cos7 ObjectSystemNpu#cos7}
  */
  readonly cos7?: string;
}

export function objectSystemNpuIsfNpQueuesToTerraform(struct?: ObjectSystemNpuIsfNpQueuesOutputReference | ObjectSystemNpuIsfNpQueues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cos0: cdktf.stringToTerraform(struct!.cos0),
    cos1: cdktf.stringToTerraform(struct!.cos1),
    cos2: cdktf.stringToTerraform(struct!.cos2),
    cos3: cdktf.stringToTerraform(struct!.cos3),
    cos4: cdktf.stringToTerraform(struct!.cos4),
    cos5: cdktf.stringToTerraform(struct!.cos5),
    cos6: cdktf.stringToTerraform(struct!.cos6),
    cos7: cdktf.stringToTerraform(struct!.cos7),
  }
}


export function objectSystemNpuIsfNpQueuesToHclTerraform(struct?: ObjectSystemNpuIsfNpQueuesOutputReference | ObjectSystemNpuIsfNpQueues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cos0: {
      value: cdktf.stringToHclTerraform(struct!.cos0),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cos1: {
      value: cdktf.stringToHclTerraform(struct!.cos1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cos2: {
      value: cdktf.stringToHclTerraform(struct!.cos2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cos3: {
      value: cdktf.stringToHclTerraform(struct!.cos3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cos4: {
      value: cdktf.stringToHclTerraform(struct!.cos4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cos5: {
      value: cdktf.stringToHclTerraform(struct!.cos5),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cos6: {
      value: cdktf.stringToHclTerraform(struct!.cos6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cos7: {
      value: cdktf.stringToHclTerraform(struct!.cos7),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectSystemNpuIsfNpQueuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectSystemNpuIsfNpQueues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cos0 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cos0 = this._cos0;
    }
    if (this._cos1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cos1 = this._cos1;
    }
    if (this._cos2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cos2 = this._cos2;
    }
    if (this._cos3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cos3 = this._cos3;
    }
    if (this._cos4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cos4 = this._cos4;
    }
    if (this._cos5 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cos5 = this._cos5;
    }
    if (this._cos6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cos6 = this._cos6;
    }
    if (this._cos7 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cos7 = this._cos7;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectSystemNpuIsfNpQueues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cos0 = undefined;
      this._cos1 = undefined;
      this._cos2 = undefined;
      this._cos3 = undefined;
      this._cos4 = undefined;
      this._cos5 = undefined;
      this._cos6 = undefined;
      this._cos7 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cos0 = value.cos0;
      this._cos1 = value.cos1;
      this._cos2 = value.cos2;
      this._cos3 = value.cos3;
      this._cos4 = value.cos4;
      this._cos5 = value.cos5;
      this._cos6 = value.cos6;
      this._cos7 = value.cos7;
    }
  }

  // cos0 - computed: false, optional: true, required: false
  private _cos0?: string; 
  public get cos0() {
    return this.getStringAttribute('cos0');
  }
  public set cos0(value: string) {
    this._cos0 = value;
  }
  public resetCos0() {
    this._cos0 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cos0Input() {
    return this._cos0;
  }

  // cos1 - computed: false, optional: true, required: false
  private _cos1?: string; 
  public get cos1() {
    return this.getStringAttribute('cos1');
  }
  public set cos1(value: string) {
    this._cos1 = value;
  }
  public resetCos1() {
    this._cos1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cos1Input() {
    return this._cos1;
  }

  // cos2 - computed: false, optional: true, required: false
  private _cos2?: string; 
  public get cos2() {
    return this.getStringAttribute('cos2');
  }
  public set cos2(value: string) {
    this._cos2 = value;
  }
  public resetCos2() {
    this._cos2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cos2Input() {
    return this._cos2;
  }

  // cos3 - computed: false, optional: true, required: false
  private _cos3?: string; 
  public get cos3() {
    return this.getStringAttribute('cos3');
  }
  public set cos3(value: string) {
    this._cos3 = value;
  }
  public resetCos3() {
    this._cos3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cos3Input() {
    return this._cos3;
  }

  // cos4 - computed: false, optional: true, required: false
  private _cos4?: string; 
  public get cos4() {
    return this.getStringAttribute('cos4');
  }
  public set cos4(value: string) {
    this._cos4 = value;
  }
  public resetCos4() {
    this._cos4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cos4Input() {
    return this._cos4;
  }

  // cos5 - computed: false, optional: true, required: false
  private _cos5?: string; 
  public get cos5() {
    return this.getStringAttribute('cos5');
  }
  public set cos5(value: string) {
    this._cos5 = value;
  }
  public resetCos5() {
    this._cos5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cos5Input() {
    return this._cos5;
  }

  // cos6 - computed: false, optional: true, required: false
  private _cos6?: string; 
  public get cos6() {
    return this.getStringAttribute('cos6');
  }
  public set cos6(value: string) {
    this._cos6 = value;
  }
  public resetCos6() {
    this._cos6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cos6Input() {
    return this._cos6;
  }

  // cos7 - computed: false, optional: true, required: false
  private _cos7?: string; 
  public get cos7() {
    return this.getStringAttribute('cos7');
  }
  public set cos7(value: string) {
    this._cos7 = value;
  }
  public resetCos7() {
    this._cos7 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cos7Input() {
    return this._cos7;
  }
}
export interface ObjectSystemNpuNpQueuesEthernetType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#name ObjectSystemNpu#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#queue ObjectSystemNpu#queue}
  */
  readonly queue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#type ObjectSystemNpu#type}
  */
  readonly type?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#weight ObjectSystemNpu#weight}
  */
  readonly weight?: number;
}

export function objectSystemNpuNpQueuesEthernetTypeToTerraform(struct?: ObjectSystemNpuNpQueuesEthernetType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    queue: cdktf.numberToTerraform(struct!.queue),
    type: cdktf.numberToTerraform(struct!.type),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function objectSystemNpuNpQueuesEthernetTypeToHclTerraform(struct?: ObjectSystemNpuNpQueuesEthernetType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    queue: {
      value: cdktf.numberToHclTerraform(struct!.queue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.numberToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectSystemNpuNpQueuesEthernetTypeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectSystemNpuNpQueuesEthernetType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._queue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queue = this._queue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectSystemNpuNpQueuesEthernetType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._queue = undefined;
      this._type = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._queue = value.queue;
      this._type = value.type;
      this._weight = value.weight;
    }
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

  // queue - computed: true, optional: true, required: false
  private _queue?: number; 
  public get queue() {
    return this.getNumberAttribute('queue');
  }
  public set queue(value: number) {
    this._queue = value;
  }
  public resetQueue() {
    this._queue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueInput() {
    return this._queue;
  }

  // type - computed: true, optional: true, required: false
  private _type?: number; 
  public get type() {
    return this.getNumberAttribute('type');
  }
  public set type(value: number) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // weight - computed: true, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class ObjectSystemNpuNpQueuesEthernetTypeList extends cdktf.ComplexList {
  public internalValue? : ObjectSystemNpuNpQueuesEthernetType[] | cdktf.IResolvable

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
  public get(index: number): ObjectSystemNpuNpQueuesEthernetTypeOutputReference {
    return new ObjectSystemNpuNpQueuesEthernetTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectSystemNpuNpQueuesIpProtocol {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#name ObjectSystemNpu#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#protocol ObjectSystemNpu#protocol}
  */
  readonly protocol?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#queue ObjectSystemNpu#queue}
  */
  readonly queue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#weight ObjectSystemNpu#weight}
  */
  readonly weight?: number;
}

export function objectSystemNpuNpQueuesIpProtocolToTerraform(struct?: ObjectSystemNpuNpQueuesIpProtocol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    protocol: cdktf.numberToTerraform(struct!.protocol),
    queue: cdktf.numberToTerraform(struct!.queue),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function objectSystemNpuNpQueuesIpProtocolToHclTerraform(struct?: ObjectSystemNpuNpQueuesIpProtocol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.numberToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    queue: {
      value: cdktf.numberToHclTerraform(struct!.queue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectSystemNpuNpQueuesIpProtocolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectSystemNpuNpQueuesIpProtocol | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._queue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queue = this._queue;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectSystemNpuNpQueuesIpProtocol | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._protocol = undefined;
      this._queue = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._protocol = value.protocol;
      this._queue = value.queue;
      this._weight = value.weight;
    }
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

  // protocol - computed: false, optional: true, required: false
  private _protocol?: number; 
  public get protocol() {
    return this.getNumberAttribute('protocol');
  }
  public set protocol(value: number) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // queue - computed: false, optional: true, required: false
  private _queue?: number; 
  public get queue() {
    return this.getNumberAttribute('queue');
  }
  public set queue(value: number) {
    this._queue = value;
  }
  public resetQueue() {
    this._queue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueInput() {
    return this._queue;
  }

  // weight - computed: true, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class ObjectSystemNpuNpQueuesIpProtocolList extends cdktf.ComplexList {
  public internalValue? : ObjectSystemNpuNpQueuesIpProtocol[] | cdktf.IResolvable

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
  public get(index: number): ObjectSystemNpuNpQueuesIpProtocolOutputReference {
    return new ObjectSystemNpuNpQueuesIpProtocolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectSystemNpuNpQueuesIpService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dport ObjectSystemNpu#dport}
  */
  readonly dport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#name ObjectSystemNpu#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#protocol ObjectSystemNpu#protocol}
  */
  readonly protocol?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#queue ObjectSystemNpu#queue}
  */
  readonly queue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#sport ObjectSystemNpu#sport}
  */
  readonly sport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#weight ObjectSystemNpu#weight}
  */
  readonly weight?: number;
}

export function objectSystemNpuNpQueuesIpServiceToTerraform(struct?: ObjectSystemNpuNpQueuesIpService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dport: cdktf.numberToTerraform(struct!.dport),
    name: cdktf.stringToTerraform(struct!.name),
    protocol: cdktf.numberToTerraform(struct!.protocol),
    queue: cdktf.numberToTerraform(struct!.queue),
    sport: cdktf.numberToTerraform(struct!.sport),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function objectSystemNpuNpQueuesIpServiceToHclTerraform(struct?: ObjectSystemNpuNpQueuesIpService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dport: {
      value: cdktf.numberToHclTerraform(struct!.dport),
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
    protocol: {
      value: cdktf.numberToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    queue: {
      value: cdktf.numberToHclTerraform(struct!.queue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sport: {
      value: cdktf.numberToHclTerraform(struct!.sport),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectSystemNpuNpQueuesIpServiceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectSystemNpuNpQueuesIpService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dport !== undefined) {
      hasAnyValues = true;
      internalValueResult.dport = this._dport;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._queue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queue = this._queue;
    }
    if (this._sport !== undefined) {
      hasAnyValues = true;
      internalValueResult.sport = this._sport;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectSystemNpuNpQueuesIpService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dport = undefined;
      this._name = undefined;
      this._protocol = undefined;
      this._queue = undefined;
      this._sport = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dport = value.dport;
      this._name = value.name;
      this._protocol = value.protocol;
      this._queue = value.queue;
      this._sport = value.sport;
      this._weight = value.weight;
    }
  }

  // dport - computed: false, optional: true, required: false
  private _dport?: number; 
  public get dport() {
    return this.getNumberAttribute('dport');
  }
  public set dport(value: number) {
    this._dport = value;
  }
  public resetDport() {
    this._dport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dportInput() {
    return this._dport;
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

  // protocol - computed: false, optional: true, required: false
  private _protocol?: number; 
  public get protocol() {
    return this.getNumberAttribute('protocol');
  }
  public set protocol(value: number) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // queue - computed: false, optional: true, required: false
  private _queue?: number; 
  public get queue() {
    return this.getNumberAttribute('queue');
  }
  public set queue(value: number) {
    this._queue = value;
  }
  public resetQueue() {
    this._queue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueInput() {
    return this._queue;
  }

  // sport - computed: false, optional: true, required: false
  private _sport?: number; 
  public get sport() {
    return this.getNumberAttribute('sport');
  }
  public set sport(value: number) {
    this._sport = value;
  }
  public resetSport() {
    this._sport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sportInput() {
    return this._sport;
  }

  // weight - computed: true, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class ObjectSystemNpuNpQueuesIpServiceList extends cdktf.ComplexList {
  public internalValue? : ObjectSystemNpuNpQueuesIpService[] | cdktf.IResolvable

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
  public get(index: number): ObjectSystemNpuNpQueuesIpServiceOutputReference {
    return new ObjectSystemNpuNpQueuesIpServiceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectSystemNpuNpQueuesProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#cos0 ObjectSystemNpu#cos0}
  */
  readonly cos0?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#cos1 ObjectSystemNpu#cos1}
  */
  readonly cos1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#cos2 ObjectSystemNpu#cos2}
  */
  readonly cos2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#cos3 ObjectSystemNpu#cos3}
  */
  readonly cos3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#cos4 ObjectSystemNpu#cos4}
  */
  readonly cos4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#cos5 ObjectSystemNpu#cos5}
  */
  readonly cos5?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#cos6 ObjectSystemNpu#cos6}
  */
  readonly cos6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#cos7 ObjectSystemNpu#cos7}
  */
  readonly cos7?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dscp0 ObjectSystemNpu#dscp0}
  */
  readonly dscp0?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dscp1 ObjectSystemNpu#dscp1}
  */
  readonly dscp1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dscp10 ObjectSystemNpu#dscp10}
  */
  readonly dscp10?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dscp11 ObjectSystemNpu#dscp11}
  */
  readonly dscp11?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dscp12 ObjectSystemNpu#dscp12}
  */
  readonly dscp12?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dscp13 ObjectSystemNpu#dscp13}
  */
  readonly dscp13?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dscp14 ObjectSystemNpu#dscp14}
  */
  readonly dscp14?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dscp15 ObjectSystemNpu#dscp15}
  */
  readonly dscp15?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dscp16 ObjectSystemNpu#dscp16}
  */
  readonly dscp16?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dscp17 ObjectSystemNpu#dscp17}
  */
  readonly dscp17?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dscp18 ObjectSystemNpu#dscp18}
  */
  readonly dscp18?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dscp19 ObjectSystemNpu#dscp19}
  */
  readonly dscp19?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dscp2 ObjectSystemNpu#dscp2}
  */
  readonly dscp2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dscp20 ObjectSystemNpu#dscp20}
  */
  readonly dscp20?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dscp21 ObjectSystemNpu#dscp21}
  */
  readonly dscp21?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dscp22 ObjectSystemNpu#dscp22}
  */
  readonly dscp22?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dscp23 ObjectSystemNpu#dscp23}
  */
  readonly dscp23?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dscp24 ObjectSystemNpu#dscp24}
  */
  readonly dscp24?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dscp25 ObjectSystemNpu#dscp25}
  */
  readonly dscp25?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dscp26 ObjectSystemNpu#dscp26}
  */
  readonly dscp26?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dscp27 ObjectSystemNpu#dscp27}
  */
  readonly dscp27?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dscp28 ObjectSystemNpu#dscp28}
  */
  readonly dscp28?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dscp29 ObjectSystemNpu#dscp29}
  */
  readonly dscp29?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dscp3 ObjectSystemNpu#dscp3}
  */
  readonly dscp3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dscp30 ObjectSystemNpu#dscp30}
  */
  readonly dscp30?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dscp31 ObjectSystemNpu#dscp31}
  */
  readonly dscp31?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dscp32 ObjectSystemNpu#dscp32}
  */
  readonly dscp32?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dscp33 ObjectSystemNpu#dscp33}
  */
  readonly dscp33?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dscp34 ObjectSystemNpu#dscp34}
  */
  readonly dscp34?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dscp35 ObjectSystemNpu#dscp35}
  */
  readonly dscp35?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dscp36 ObjectSystemNpu#dscp36}
  */
  readonly dscp36?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dscp37 ObjectSystemNpu#dscp37}
  */
  readonly dscp37?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dscp38 ObjectSystemNpu#dscp38}
  */
  readonly dscp38?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dscp39 ObjectSystemNpu#dscp39}
  */
  readonly dscp39?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dscp4 ObjectSystemNpu#dscp4}
  */
  readonly dscp4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dscp40 ObjectSystemNpu#dscp40}
  */
  readonly dscp40?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dscp41 ObjectSystemNpu#dscp41}
  */
  readonly dscp41?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dscp42 ObjectSystemNpu#dscp42}
  */
  readonly dscp42?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dscp43 ObjectSystemNpu#dscp43}
  */
  readonly dscp43?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dscp44 ObjectSystemNpu#dscp44}
  */
  readonly dscp44?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dscp45 ObjectSystemNpu#dscp45}
  */
  readonly dscp45?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dscp46 ObjectSystemNpu#dscp46}
  */
  readonly dscp46?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dscp47 ObjectSystemNpu#dscp47}
  */
  readonly dscp47?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dscp48 ObjectSystemNpu#dscp48}
  */
  readonly dscp48?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dscp49 ObjectSystemNpu#dscp49}
  */
  readonly dscp49?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dscp5 ObjectSystemNpu#dscp5}
  */
  readonly dscp5?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dscp50 ObjectSystemNpu#dscp50}
  */
  readonly dscp50?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dscp51 ObjectSystemNpu#dscp51}
  */
  readonly dscp51?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dscp52 ObjectSystemNpu#dscp52}
  */
  readonly dscp52?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dscp53 ObjectSystemNpu#dscp53}
  */
  readonly dscp53?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dscp54 ObjectSystemNpu#dscp54}
  */
  readonly dscp54?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dscp55 ObjectSystemNpu#dscp55}
  */
  readonly dscp55?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dscp56 ObjectSystemNpu#dscp56}
  */
  readonly dscp56?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dscp57 ObjectSystemNpu#dscp57}
  */
  readonly dscp57?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dscp58 ObjectSystemNpu#dscp58}
  */
  readonly dscp58?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dscp59 ObjectSystemNpu#dscp59}
  */
  readonly dscp59?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dscp6 ObjectSystemNpu#dscp6}
  */
  readonly dscp6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dscp60 ObjectSystemNpu#dscp60}
  */
  readonly dscp60?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dscp61 ObjectSystemNpu#dscp61}
  */
  readonly dscp61?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dscp62 ObjectSystemNpu#dscp62}
  */
  readonly dscp62?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dscp63 ObjectSystemNpu#dscp63}
  */
  readonly dscp63?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dscp7 ObjectSystemNpu#dscp7}
  */
  readonly dscp7?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dscp8 ObjectSystemNpu#dscp8}
  */
  readonly dscp8?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dscp9 ObjectSystemNpu#dscp9}
  */
  readonly dscp9?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#id ObjectSystemNpu#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#type ObjectSystemNpu#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#weight ObjectSystemNpu#weight}
  */
  readonly weight?: number;
}

export function objectSystemNpuNpQueuesProfileToTerraform(struct?: ObjectSystemNpuNpQueuesProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cos0: cdktf.stringToTerraform(struct!.cos0),
    cos1: cdktf.stringToTerraform(struct!.cos1),
    cos2: cdktf.stringToTerraform(struct!.cos2),
    cos3: cdktf.stringToTerraform(struct!.cos3),
    cos4: cdktf.stringToTerraform(struct!.cos4),
    cos5: cdktf.stringToTerraform(struct!.cos5),
    cos6: cdktf.stringToTerraform(struct!.cos6),
    cos7: cdktf.stringToTerraform(struct!.cos7),
    dscp0: cdktf.stringToTerraform(struct!.dscp0),
    dscp1: cdktf.stringToTerraform(struct!.dscp1),
    dscp10: cdktf.stringToTerraform(struct!.dscp10),
    dscp11: cdktf.stringToTerraform(struct!.dscp11),
    dscp12: cdktf.stringToTerraform(struct!.dscp12),
    dscp13: cdktf.stringToTerraform(struct!.dscp13),
    dscp14: cdktf.stringToTerraform(struct!.dscp14),
    dscp15: cdktf.stringToTerraform(struct!.dscp15),
    dscp16: cdktf.stringToTerraform(struct!.dscp16),
    dscp17: cdktf.stringToTerraform(struct!.dscp17),
    dscp18: cdktf.stringToTerraform(struct!.dscp18),
    dscp19: cdktf.stringToTerraform(struct!.dscp19),
    dscp2: cdktf.stringToTerraform(struct!.dscp2),
    dscp20: cdktf.stringToTerraform(struct!.dscp20),
    dscp21: cdktf.stringToTerraform(struct!.dscp21),
    dscp22: cdktf.stringToTerraform(struct!.dscp22),
    dscp23: cdktf.stringToTerraform(struct!.dscp23),
    dscp24: cdktf.stringToTerraform(struct!.dscp24),
    dscp25: cdktf.stringToTerraform(struct!.dscp25),
    dscp26: cdktf.stringToTerraform(struct!.dscp26),
    dscp27: cdktf.stringToTerraform(struct!.dscp27),
    dscp28: cdktf.stringToTerraform(struct!.dscp28),
    dscp29: cdktf.stringToTerraform(struct!.dscp29),
    dscp3: cdktf.stringToTerraform(struct!.dscp3),
    dscp30: cdktf.stringToTerraform(struct!.dscp30),
    dscp31: cdktf.stringToTerraform(struct!.dscp31),
    dscp32: cdktf.stringToTerraform(struct!.dscp32),
    dscp33: cdktf.stringToTerraform(struct!.dscp33),
    dscp34: cdktf.stringToTerraform(struct!.dscp34),
    dscp35: cdktf.stringToTerraform(struct!.dscp35),
    dscp36: cdktf.stringToTerraform(struct!.dscp36),
    dscp37: cdktf.stringToTerraform(struct!.dscp37),
    dscp38: cdktf.stringToTerraform(struct!.dscp38),
    dscp39: cdktf.stringToTerraform(struct!.dscp39),
    dscp4: cdktf.stringToTerraform(struct!.dscp4),
    dscp40: cdktf.stringToTerraform(struct!.dscp40),
    dscp41: cdktf.stringToTerraform(struct!.dscp41),
    dscp42: cdktf.stringToTerraform(struct!.dscp42),
    dscp43: cdktf.stringToTerraform(struct!.dscp43),
    dscp44: cdktf.stringToTerraform(struct!.dscp44),
    dscp45: cdktf.stringToTerraform(struct!.dscp45),
    dscp46: cdktf.stringToTerraform(struct!.dscp46),
    dscp47: cdktf.stringToTerraform(struct!.dscp47),
    dscp48: cdktf.stringToTerraform(struct!.dscp48),
    dscp49: cdktf.stringToTerraform(struct!.dscp49),
    dscp5: cdktf.stringToTerraform(struct!.dscp5),
    dscp50: cdktf.stringToTerraform(struct!.dscp50),
    dscp51: cdktf.stringToTerraform(struct!.dscp51),
    dscp52: cdktf.stringToTerraform(struct!.dscp52),
    dscp53: cdktf.stringToTerraform(struct!.dscp53),
    dscp54: cdktf.stringToTerraform(struct!.dscp54),
    dscp55: cdktf.stringToTerraform(struct!.dscp55),
    dscp56: cdktf.stringToTerraform(struct!.dscp56),
    dscp57: cdktf.stringToTerraform(struct!.dscp57),
    dscp58: cdktf.stringToTerraform(struct!.dscp58),
    dscp59: cdktf.stringToTerraform(struct!.dscp59),
    dscp6: cdktf.stringToTerraform(struct!.dscp6),
    dscp60: cdktf.stringToTerraform(struct!.dscp60),
    dscp61: cdktf.stringToTerraform(struct!.dscp61),
    dscp62: cdktf.stringToTerraform(struct!.dscp62),
    dscp63: cdktf.stringToTerraform(struct!.dscp63),
    dscp7: cdktf.stringToTerraform(struct!.dscp7),
    dscp8: cdktf.stringToTerraform(struct!.dscp8),
    dscp9: cdktf.stringToTerraform(struct!.dscp9),
    id: cdktf.numberToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function objectSystemNpuNpQueuesProfileToHclTerraform(struct?: ObjectSystemNpuNpQueuesProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cos0: {
      value: cdktf.stringToHclTerraform(struct!.cos0),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cos1: {
      value: cdktf.stringToHclTerraform(struct!.cos1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cos2: {
      value: cdktf.stringToHclTerraform(struct!.cos2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cos3: {
      value: cdktf.stringToHclTerraform(struct!.cos3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cos4: {
      value: cdktf.stringToHclTerraform(struct!.cos4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cos5: {
      value: cdktf.stringToHclTerraform(struct!.cos5),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cos6: {
      value: cdktf.stringToHclTerraform(struct!.cos6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cos7: {
      value: cdktf.stringToHclTerraform(struct!.cos7),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp0: {
      value: cdktf.stringToHclTerraform(struct!.dscp0),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp1: {
      value: cdktf.stringToHclTerraform(struct!.dscp1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp10: {
      value: cdktf.stringToHclTerraform(struct!.dscp10),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp11: {
      value: cdktf.stringToHclTerraform(struct!.dscp11),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp12: {
      value: cdktf.stringToHclTerraform(struct!.dscp12),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp13: {
      value: cdktf.stringToHclTerraform(struct!.dscp13),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp14: {
      value: cdktf.stringToHclTerraform(struct!.dscp14),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp15: {
      value: cdktf.stringToHclTerraform(struct!.dscp15),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp16: {
      value: cdktf.stringToHclTerraform(struct!.dscp16),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp17: {
      value: cdktf.stringToHclTerraform(struct!.dscp17),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp18: {
      value: cdktf.stringToHclTerraform(struct!.dscp18),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp19: {
      value: cdktf.stringToHclTerraform(struct!.dscp19),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp2: {
      value: cdktf.stringToHclTerraform(struct!.dscp2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp20: {
      value: cdktf.stringToHclTerraform(struct!.dscp20),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp21: {
      value: cdktf.stringToHclTerraform(struct!.dscp21),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp22: {
      value: cdktf.stringToHclTerraform(struct!.dscp22),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp23: {
      value: cdktf.stringToHclTerraform(struct!.dscp23),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp24: {
      value: cdktf.stringToHclTerraform(struct!.dscp24),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp25: {
      value: cdktf.stringToHclTerraform(struct!.dscp25),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp26: {
      value: cdktf.stringToHclTerraform(struct!.dscp26),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp27: {
      value: cdktf.stringToHclTerraform(struct!.dscp27),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp28: {
      value: cdktf.stringToHclTerraform(struct!.dscp28),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp29: {
      value: cdktf.stringToHclTerraform(struct!.dscp29),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp3: {
      value: cdktf.stringToHclTerraform(struct!.dscp3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp30: {
      value: cdktf.stringToHclTerraform(struct!.dscp30),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp31: {
      value: cdktf.stringToHclTerraform(struct!.dscp31),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp32: {
      value: cdktf.stringToHclTerraform(struct!.dscp32),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp33: {
      value: cdktf.stringToHclTerraform(struct!.dscp33),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp34: {
      value: cdktf.stringToHclTerraform(struct!.dscp34),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp35: {
      value: cdktf.stringToHclTerraform(struct!.dscp35),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp36: {
      value: cdktf.stringToHclTerraform(struct!.dscp36),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp37: {
      value: cdktf.stringToHclTerraform(struct!.dscp37),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp38: {
      value: cdktf.stringToHclTerraform(struct!.dscp38),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp39: {
      value: cdktf.stringToHclTerraform(struct!.dscp39),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp4: {
      value: cdktf.stringToHclTerraform(struct!.dscp4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp40: {
      value: cdktf.stringToHclTerraform(struct!.dscp40),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp41: {
      value: cdktf.stringToHclTerraform(struct!.dscp41),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp42: {
      value: cdktf.stringToHclTerraform(struct!.dscp42),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp43: {
      value: cdktf.stringToHclTerraform(struct!.dscp43),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp44: {
      value: cdktf.stringToHclTerraform(struct!.dscp44),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp45: {
      value: cdktf.stringToHclTerraform(struct!.dscp45),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp46: {
      value: cdktf.stringToHclTerraform(struct!.dscp46),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp47: {
      value: cdktf.stringToHclTerraform(struct!.dscp47),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp48: {
      value: cdktf.stringToHclTerraform(struct!.dscp48),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp49: {
      value: cdktf.stringToHclTerraform(struct!.dscp49),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp5: {
      value: cdktf.stringToHclTerraform(struct!.dscp5),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp50: {
      value: cdktf.stringToHclTerraform(struct!.dscp50),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp51: {
      value: cdktf.stringToHclTerraform(struct!.dscp51),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp52: {
      value: cdktf.stringToHclTerraform(struct!.dscp52),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp53: {
      value: cdktf.stringToHclTerraform(struct!.dscp53),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp54: {
      value: cdktf.stringToHclTerraform(struct!.dscp54),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp55: {
      value: cdktf.stringToHclTerraform(struct!.dscp55),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp56: {
      value: cdktf.stringToHclTerraform(struct!.dscp56),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp57: {
      value: cdktf.stringToHclTerraform(struct!.dscp57),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp58: {
      value: cdktf.stringToHclTerraform(struct!.dscp58),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp59: {
      value: cdktf.stringToHclTerraform(struct!.dscp59),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp6: {
      value: cdktf.stringToHclTerraform(struct!.dscp6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp60: {
      value: cdktf.stringToHclTerraform(struct!.dscp60),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp61: {
      value: cdktf.stringToHclTerraform(struct!.dscp61),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp62: {
      value: cdktf.stringToHclTerraform(struct!.dscp62),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp63: {
      value: cdktf.stringToHclTerraform(struct!.dscp63),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp7: {
      value: cdktf.stringToHclTerraform(struct!.dscp7),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp8: {
      value: cdktf.stringToHclTerraform(struct!.dscp8),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp9: {
      value: cdktf.stringToHclTerraform(struct!.dscp9),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectSystemNpuNpQueuesProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectSystemNpuNpQueuesProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cos0 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cos0 = this._cos0;
    }
    if (this._cos1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cos1 = this._cos1;
    }
    if (this._cos2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cos2 = this._cos2;
    }
    if (this._cos3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cos3 = this._cos3;
    }
    if (this._cos4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cos4 = this._cos4;
    }
    if (this._cos5 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cos5 = this._cos5;
    }
    if (this._cos6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cos6 = this._cos6;
    }
    if (this._cos7 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cos7 = this._cos7;
    }
    if (this._dscp0 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp0 = this._dscp0;
    }
    if (this._dscp1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp1 = this._dscp1;
    }
    if (this._dscp10 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp10 = this._dscp10;
    }
    if (this._dscp11 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp11 = this._dscp11;
    }
    if (this._dscp12 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp12 = this._dscp12;
    }
    if (this._dscp13 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp13 = this._dscp13;
    }
    if (this._dscp14 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp14 = this._dscp14;
    }
    if (this._dscp15 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp15 = this._dscp15;
    }
    if (this._dscp16 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp16 = this._dscp16;
    }
    if (this._dscp17 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp17 = this._dscp17;
    }
    if (this._dscp18 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp18 = this._dscp18;
    }
    if (this._dscp19 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp19 = this._dscp19;
    }
    if (this._dscp2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp2 = this._dscp2;
    }
    if (this._dscp20 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp20 = this._dscp20;
    }
    if (this._dscp21 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp21 = this._dscp21;
    }
    if (this._dscp22 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp22 = this._dscp22;
    }
    if (this._dscp23 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp23 = this._dscp23;
    }
    if (this._dscp24 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp24 = this._dscp24;
    }
    if (this._dscp25 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp25 = this._dscp25;
    }
    if (this._dscp26 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp26 = this._dscp26;
    }
    if (this._dscp27 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp27 = this._dscp27;
    }
    if (this._dscp28 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp28 = this._dscp28;
    }
    if (this._dscp29 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp29 = this._dscp29;
    }
    if (this._dscp3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp3 = this._dscp3;
    }
    if (this._dscp30 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp30 = this._dscp30;
    }
    if (this._dscp31 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp31 = this._dscp31;
    }
    if (this._dscp32 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp32 = this._dscp32;
    }
    if (this._dscp33 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp33 = this._dscp33;
    }
    if (this._dscp34 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp34 = this._dscp34;
    }
    if (this._dscp35 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp35 = this._dscp35;
    }
    if (this._dscp36 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp36 = this._dscp36;
    }
    if (this._dscp37 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp37 = this._dscp37;
    }
    if (this._dscp38 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp38 = this._dscp38;
    }
    if (this._dscp39 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp39 = this._dscp39;
    }
    if (this._dscp4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp4 = this._dscp4;
    }
    if (this._dscp40 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp40 = this._dscp40;
    }
    if (this._dscp41 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp41 = this._dscp41;
    }
    if (this._dscp42 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp42 = this._dscp42;
    }
    if (this._dscp43 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp43 = this._dscp43;
    }
    if (this._dscp44 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp44 = this._dscp44;
    }
    if (this._dscp45 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp45 = this._dscp45;
    }
    if (this._dscp46 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp46 = this._dscp46;
    }
    if (this._dscp47 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp47 = this._dscp47;
    }
    if (this._dscp48 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp48 = this._dscp48;
    }
    if (this._dscp49 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp49 = this._dscp49;
    }
    if (this._dscp5 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp5 = this._dscp5;
    }
    if (this._dscp50 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp50 = this._dscp50;
    }
    if (this._dscp51 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp51 = this._dscp51;
    }
    if (this._dscp52 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp52 = this._dscp52;
    }
    if (this._dscp53 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp53 = this._dscp53;
    }
    if (this._dscp54 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp54 = this._dscp54;
    }
    if (this._dscp55 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp55 = this._dscp55;
    }
    if (this._dscp56 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp56 = this._dscp56;
    }
    if (this._dscp57 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp57 = this._dscp57;
    }
    if (this._dscp58 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp58 = this._dscp58;
    }
    if (this._dscp59 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp59 = this._dscp59;
    }
    if (this._dscp6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp6 = this._dscp6;
    }
    if (this._dscp60 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp60 = this._dscp60;
    }
    if (this._dscp61 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp61 = this._dscp61;
    }
    if (this._dscp62 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp62 = this._dscp62;
    }
    if (this._dscp63 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp63 = this._dscp63;
    }
    if (this._dscp7 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp7 = this._dscp7;
    }
    if (this._dscp8 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp8 = this._dscp8;
    }
    if (this._dscp9 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp9 = this._dscp9;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectSystemNpuNpQueuesProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cos0 = undefined;
      this._cos1 = undefined;
      this._cos2 = undefined;
      this._cos3 = undefined;
      this._cos4 = undefined;
      this._cos5 = undefined;
      this._cos6 = undefined;
      this._cos7 = undefined;
      this._dscp0 = undefined;
      this._dscp1 = undefined;
      this._dscp10 = undefined;
      this._dscp11 = undefined;
      this._dscp12 = undefined;
      this._dscp13 = undefined;
      this._dscp14 = undefined;
      this._dscp15 = undefined;
      this._dscp16 = undefined;
      this._dscp17 = undefined;
      this._dscp18 = undefined;
      this._dscp19 = undefined;
      this._dscp2 = undefined;
      this._dscp20 = undefined;
      this._dscp21 = undefined;
      this._dscp22 = undefined;
      this._dscp23 = undefined;
      this._dscp24 = undefined;
      this._dscp25 = undefined;
      this._dscp26 = undefined;
      this._dscp27 = undefined;
      this._dscp28 = undefined;
      this._dscp29 = undefined;
      this._dscp3 = undefined;
      this._dscp30 = undefined;
      this._dscp31 = undefined;
      this._dscp32 = undefined;
      this._dscp33 = undefined;
      this._dscp34 = undefined;
      this._dscp35 = undefined;
      this._dscp36 = undefined;
      this._dscp37 = undefined;
      this._dscp38 = undefined;
      this._dscp39 = undefined;
      this._dscp4 = undefined;
      this._dscp40 = undefined;
      this._dscp41 = undefined;
      this._dscp42 = undefined;
      this._dscp43 = undefined;
      this._dscp44 = undefined;
      this._dscp45 = undefined;
      this._dscp46 = undefined;
      this._dscp47 = undefined;
      this._dscp48 = undefined;
      this._dscp49 = undefined;
      this._dscp5 = undefined;
      this._dscp50 = undefined;
      this._dscp51 = undefined;
      this._dscp52 = undefined;
      this._dscp53 = undefined;
      this._dscp54 = undefined;
      this._dscp55 = undefined;
      this._dscp56 = undefined;
      this._dscp57 = undefined;
      this._dscp58 = undefined;
      this._dscp59 = undefined;
      this._dscp6 = undefined;
      this._dscp60 = undefined;
      this._dscp61 = undefined;
      this._dscp62 = undefined;
      this._dscp63 = undefined;
      this._dscp7 = undefined;
      this._dscp8 = undefined;
      this._dscp9 = undefined;
      this._id = undefined;
      this._type = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cos0 = value.cos0;
      this._cos1 = value.cos1;
      this._cos2 = value.cos2;
      this._cos3 = value.cos3;
      this._cos4 = value.cos4;
      this._cos5 = value.cos5;
      this._cos6 = value.cos6;
      this._cos7 = value.cos7;
      this._dscp0 = value.dscp0;
      this._dscp1 = value.dscp1;
      this._dscp10 = value.dscp10;
      this._dscp11 = value.dscp11;
      this._dscp12 = value.dscp12;
      this._dscp13 = value.dscp13;
      this._dscp14 = value.dscp14;
      this._dscp15 = value.dscp15;
      this._dscp16 = value.dscp16;
      this._dscp17 = value.dscp17;
      this._dscp18 = value.dscp18;
      this._dscp19 = value.dscp19;
      this._dscp2 = value.dscp2;
      this._dscp20 = value.dscp20;
      this._dscp21 = value.dscp21;
      this._dscp22 = value.dscp22;
      this._dscp23 = value.dscp23;
      this._dscp24 = value.dscp24;
      this._dscp25 = value.dscp25;
      this._dscp26 = value.dscp26;
      this._dscp27 = value.dscp27;
      this._dscp28 = value.dscp28;
      this._dscp29 = value.dscp29;
      this._dscp3 = value.dscp3;
      this._dscp30 = value.dscp30;
      this._dscp31 = value.dscp31;
      this._dscp32 = value.dscp32;
      this._dscp33 = value.dscp33;
      this._dscp34 = value.dscp34;
      this._dscp35 = value.dscp35;
      this._dscp36 = value.dscp36;
      this._dscp37 = value.dscp37;
      this._dscp38 = value.dscp38;
      this._dscp39 = value.dscp39;
      this._dscp4 = value.dscp4;
      this._dscp40 = value.dscp40;
      this._dscp41 = value.dscp41;
      this._dscp42 = value.dscp42;
      this._dscp43 = value.dscp43;
      this._dscp44 = value.dscp44;
      this._dscp45 = value.dscp45;
      this._dscp46 = value.dscp46;
      this._dscp47 = value.dscp47;
      this._dscp48 = value.dscp48;
      this._dscp49 = value.dscp49;
      this._dscp5 = value.dscp5;
      this._dscp50 = value.dscp50;
      this._dscp51 = value.dscp51;
      this._dscp52 = value.dscp52;
      this._dscp53 = value.dscp53;
      this._dscp54 = value.dscp54;
      this._dscp55 = value.dscp55;
      this._dscp56 = value.dscp56;
      this._dscp57 = value.dscp57;
      this._dscp58 = value.dscp58;
      this._dscp59 = value.dscp59;
      this._dscp6 = value.dscp6;
      this._dscp60 = value.dscp60;
      this._dscp61 = value.dscp61;
      this._dscp62 = value.dscp62;
      this._dscp63 = value.dscp63;
      this._dscp7 = value.dscp7;
      this._dscp8 = value.dscp8;
      this._dscp9 = value.dscp9;
      this._id = value.id;
      this._type = value.type;
      this._weight = value.weight;
    }
  }

  // cos0 - computed: true, optional: true, required: false
  private _cos0?: string; 
  public get cos0() {
    return this.getStringAttribute('cos0');
  }
  public set cos0(value: string) {
    this._cos0 = value;
  }
  public resetCos0() {
    this._cos0 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cos0Input() {
    return this._cos0;
  }

  // cos1 - computed: true, optional: true, required: false
  private _cos1?: string; 
  public get cos1() {
    return this.getStringAttribute('cos1');
  }
  public set cos1(value: string) {
    this._cos1 = value;
  }
  public resetCos1() {
    this._cos1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cos1Input() {
    return this._cos1;
  }

  // cos2 - computed: true, optional: true, required: false
  private _cos2?: string; 
  public get cos2() {
    return this.getStringAttribute('cos2');
  }
  public set cos2(value: string) {
    this._cos2 = value;
  }
  public resetCos2() {
    this._cos2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cos2Input() {
    return this._cos2;
  }

  // cos3 - computed: true, optional: true, required: false
  private _cos3?: string; 
  public get cos3() {
    return this.getStringAttribute('cos3');
  }
  public set cos3(value: string) {
    this._cos3 = value;
  }
  public resetCos3() {
    this._cos3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cos3Input() {
    return this._cos3;
  }

  // cos4 - computed: true, optional: true, required: false
  private _cos4?: string; 
  public get cos4() {
    return this.getStringAttribute('cos4');
  }
  public set cos4(value: string) {
    this._cos4 = value;
  }
  public resetCos4() {
    this._cos4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cos4Input() {
    return this._cos4;
  }

  // cos5 - computed: true, optional: true, required: false
  private _cos5?: string; 
  public get cos5() {
    return this.getStringAttribute('cos5');
  }
  public set cos5(value: string) {
    this._cos5 = value;
  }
  public resetCos5() {
    this._cos5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cos5Input() {
    return this._cos5;
  }

  // cos6 - computed: true, optional: true, required: false
  private _cos6?: string; 
  public get cos6() {
    return this.getStringAttribute('cos6');
  }
  public set cos6(value: string) {
    this._cos6 = value;
  }
  public resetCos6() {
    this._cos6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cos6Input() {
    return this._cos6;
  }

  // cos7 - computed: true, optional: true, required: false
  private _cos7?: string; 
  public get cos7() {
    return this.getStringAttribute('cos7');
  }
  public set cos7(value: string) {
    this._cos7 = value;
  }
  public resetCos7() {
    this._cos7 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cos7Input() {
    return this._cos7;
  }

  // dscp0 - computed: true, optional: true, required: false
  private _dscp0?: string; 
  public get dscp0() {
    return this.getStringAttribute('dscp0');
  }
  public set dscp0(value: string) {
    this._dscp0 = value;
  }
  public resetDscp0() {
    this._dscp0 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp0Input() {
    return this._dscp0;
  }

  // dscp1 - computed: true, optional: true, required: false
  private _dscp1?: string; 
  public get dscp1() {
    return this.getStringAttribute('dscp1');
  }
  public set dscp1(value: string) {
    this._dscp1 = value;
  }
  public resetDscp1() {
    this._dscp1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp1Input() {
    return this._dscp1;
  }

  // dscp10 - computed: true, optional: true, required: false
  private _dscp10?: string; 
  public get dscp10() {
    return this.getStringAttribute('dscp10');
  }
  public set dscp10(value: string) {
    this._dscp10 = value;
  }
  public resetDscp10() {
    this._dscp10 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp10Input() {
    return this._dscp10;
  }

  // dscp11 - computed: true, optional: true, required: false
  private _dscp11?: string; 
  public get dscp11() {
    return this.getStringAttribute('dscp11');
  }
  public set dscp11(value: string) {
    this._dscp11 = value;
  }
  public resetDscp11() {
    this._dscp11 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp11Input() {
    return this._dscp11;
  }

  // dscp12 - computed: true, optional: true, required: false
  private _dscp12?: string; 
  public get dscp12() {
    return this.getStringAttribute('dscp12');
  }
  public set dscp12(value: string) {
    this._dscp12 = value;
  }
  public resetDscp12() {
    this._dscp12 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp12Input() {
    return this._dscp12;
  }

  // dscp13 - computed: true, optional: true, required: false
  private _dscp13?: string; 
  public get dscp13() {
    return this.getStringAttribute('dscp13');
  }
  public set dscp13(value: string) {
    this._dscp13 = value;
  }
  public resetDscp13() {
    this._dscp13 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp13Input() {
    return this._dscp13;
  }

  // dscp14 - computed: true, optional: true, required: false
  private _dscp14?: string; 
  public get dscp14() {
    return this.getStringAttribute('dscp14');
  }
  public set dscp14(value: string) {
    this._dscp14 = value;
  }
  public resetDscp14() {
    this._dscp14 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp14Input() {
    return this._dscp14;
  }

  // dscp15 - computed: true, optional: true, required: false
  private _dscp15?: string; 
  public get dscp15() {
    return this.getStringAttribute('dscp15');
  }
  public set dscp15(value: string) {
    this._dscp15 = value;
  }
  public resetDscp15() {
    this._dscp15 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp15Input() {
    return this._dscp15;
  }

  // dscp16 - computed: true, optional: true, required: false
  private _dscp16?: string; 
  public get dscp16() {
    return this.getStringAttribute('dscp16');
  }
  public set dscp16(value: string) {
    this._dscp16 = value;
  }
  public resetDscp16() {
    this._dscp16 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp16Input() {
    return this._dscp16;
  }

  // dscp17 - computed: true, optional: true, required: false
  private _dscp17?: string; 
  public get dscp17() {
    return this.getStringAttribute('dscp17');
  }
  public set dscp17(value: string) {
    this._dscp17 = value;
  }
  public resetDscp17() {
    this._dscp17 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp17Input() {
    return this._dscp17;
  }

  // dscp18 - computed: true, optional: true, required: false
  private _dscp18?: string; 
  public get dscp18() {
    return this.getStringAttribute('dscp18');
  }
  public set dscp18(value: string) {
    this._dscp18 = value;
  }
  public resetDscp18() {
    this._dscp18 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp18Input() {
    return this._dscp18;
  }

  // dscp19 - computed: true, optional: true, required: false
  private _dscp19?: string; 
  public get dscp19() {
    return this.getStringAttribute('dscp19');
  }
  public set dscp19(value: string) {
    this._dscp19 = value;
  }
  public resetDscp19() {
    this._dscp19 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp19Input() {
    return this._dscp19;
  }

  // dscp2 - computed: true, optional: true, required: false
  private _dscp2?: string; 
  public get dscp2() {
    return this.getStringAttribute('dscp2');
  }
  public set dscp2(value: string) {
    this._dscp2 = value;
  }
  public resetDscp2() {
    this._dscp2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp2Input() {
    return this._dscp2;
  }

  // dscp20 - computed: true, optional: true, required: false
  private _dscp20?: string; 
  public get dscp20() {
    return this.getStringAttribute('dscp20');
  }
  public set dscp20(value: string) {
    this._dscp20 = value;
  }
  public resetDscp20() {
    this._dscp20 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp20Input() {
    return this._dscp20;
  }

  // dscp21 - computed: true, optional: true, required: false
  private _dscp21?: string; 
  public get dscp21() {
    return this.getStringAttribute('dscp21');
  }
  public set dscp21(value: string) {
    this._dscp21 = value;
  }
  public resetDscp21() {
    this._dscp21 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp21Input() {
    return this._dscp21;
  }

  // dscp22 - computed: true, optional: true, required: false
  private _dscp22?: string; 
  public get dscp22() {
    return this.getStringAttribute('dscp22');
  }
  public set dscp22(value: string) {
    this._dscp22 = value;
  }
  public resetDscp22() {
    this._dscp22 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp22Input() {
    return this._dscp22;
  }

  // dscp23 - computed: true, optional: true, required: false
  private _dscp23?: string; 
  public get dscp23() {
    return this.getStringAttribute('dscp23');
  }
  public set dscp23(value: string) {
    this._dscp23 = value;
  }
  public resetDscp23() {
    this._dscp23 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp23Input() {
    return this._dscp23;
  }

  // dscp24 - computed: true, optional: true, required: false
  private _dscp24?: string; 
  public get dscp24() {
    return this.getStringAttribute('dscp24');
  }
  public set dscp24(value: string) {
    this._dscp24 = value;
  }
  public resetDscp24() {
    this._dscp24 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp24Input() {
    return this._dscp24;
  }

  // dscp25 - computed: true, optional: true, required: false
  private _dscp25?: string; 
  public get dscp25() {
    return this.getStringAttribute('dscp25');
  }
  public set dscp25(value: string) {
    this._dscp25 = value;
  }
  public resetDscp25() {
    this._dscp25 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp25Input() {
    return this._dscp25;
  }

  // dscp26 - computed: true, optional: true, required: false
  private _dscp26?: string; 
  public get dscp26() {
    return this.getStringAttribute('dscp26');
  }
  public set dscp26(value: string) {
    this._dscp26 = value;
  }
  public resetDscp26() {
    this._dscp26 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp26Input() {
    return this._dscp26;
  }

  // dscp27 - computed: true, optional: true, required: false
  private _dscp27?: string; 
  public get dscp27() {
    return this.getStringAttribute('dscp27');
  }
  public set dscp27(value: string) {
    this._dscp27 = value;
  }
  public resetDscp27() {
    this._dscp27 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp27Input() {
    return this._dscp27;
  }

  // dscp28 - computed: true, optional: true, required: false
  private _dscp28?: string; 
  public get dscp28() {
    return this.getStringAttribute('dscp28');
  }
  public set dscp28(value: string) {
    this._dscp28 = value;
  }
  public resetDscp28() {
    this._dscp28 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp28Input() {
    return this._dscp28;
  }

  // dscp29 - computed: true, optional: true, required: false
  private _dscp29?: string; 
  public get dscp29() {
    return this.getStringAttribute('dscp29');
  }
  public set dscp29(value: string) {
    this._dscp29 = value;
  }
  public resetDscp29() {
    this._dscp29 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp29Input() {
    return this._dscp29;
  }

  // dscp3 - computed: true, optional: true, required: false
  private _dscp3?: string; 
  public get dscp3() {
    return this.getStringAttribute('dscp3');
  }
  public set dscp3(value: string) {
    this._dscp3 = value;
  }
  public resetDscp3() {
    this._dscp3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp3Input() {
    return this._dscp3;
  }

  // dscp30 - computed: true, optional: true, required: false
  private _dscp30?: string; 
  public get dscp30() {
    return this.getStringAttribute('dscp30');
  }
  public set dscp30(value: string) {
    this._dscp30 = value;
  }
  public resetDscp30() {
    this._dscp30 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp30Input() {
    return this._dscp30;
  }

  // dscp31 - computed: true, optional: true, required: false
  private _dscp31?: string; 
  public get dscp31() {
    return this.getStringAttribute('dscp31');
  }
  public set dscp31(value: string) {
    this._dscp31 = value;
  }
  public resetDscp31() {
    this._dscp31 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp31Input() {
    return this._dscp31;
  }

  // dscp32 - computed: true, optional: true, required: false
  private _dscp32?: string; 
  public get dscp32() {
    return this.getStringAttribute('dscp32');
  }
  public set dscp32(value: string) {
    this._dscp32 = value;
  }
  public resetDscp32() {
    this._dscp32 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp32Input() {
    return this._dscp32;
  }

  // dscp33 - computed: true, optional: true, required: false
  private _dscp33?: string; 
  public get dscp33() {
    return this.getStringAttribute('dscp33');
  }
  public set dscp33(value: string) {
    this._dscp33 = value;
  }
  public resetDscp33() {
    this._dscp33 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp33Input() {
    return this._dscp33;
  }

  // dscp34 - computed: true, optional: true, required: false
  private _dscp34?: string; 
  public get dscp34() {
    return this.getStringAttribute('dscp34');
  }
  public set dscp34(value: string) {
    this._dscp34 = value;
  }
  public resetDscp34() {
    this._dscp34 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp34Input() {
    return this._dscp34;
  }

  // dscp35 - computed: true, optional: true, required: false
  private _dscp35?: string; 
  public get dscp35() {
    return this.getStringAttribute('dscp35');
  }
  public set dscp35(value: string) {
    this._dscp35 = value;
  }
  public resetDscp35() {
    this._dscp35 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp35Input() {
    return this._dscp35;
  }

  // dscp36 - computed: true, optional: true, required: false
  private _dscp36?: string; 
  public get dscp36() {
    return this.getStringAttribute('dscp36');
  }
  public set dscp36(value: string) {
    this._dscp36 = value;
  }
  public resetDscp36() {
    this._dscp36 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp36Input() {
    return this._dscp36;
  }

  // dscp37 - computed: true, optional: true, required: false
  private _dscp37?: string; 
  public get dscp37() {
    return this.getStringAttribute('dscp37');
  }
  public set dscp37(value: string) {
    this._dscp37 = value;
  }
  public resetDscp37() {
    this._dscp37 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp37Input() {
    return this._dscp37;
  }

  // dscp38 - computed: true, optional: true, required: false
  private _dscp38?: string; 
  public get dscp38() {
    return this.getStringAttribute('dscp38');
  }
  public set dscp38(value: string) {
    this._dscp38 = value;
  }
  public resetDscp38() {
    this._dscp38 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp38Input() {
    return this._dscp38;
  }

  // dscp39 - computed: true, optional: true, required: false
  private _dscp39?: string; 
  public get dscp39() {
    return this.getStringAttribute('dscp39');
  }
  public set dscp39(value: string) {
    this._dscp39 = value;
  }
  public resetDscp39() {
    this._dscp39 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp39Input() {
    return this._dscp39;
  }

  // dscp4 - computed: true, optional: true, required: false
  private _dscp4?: string; 
  public get dscp4() {
    return this.getStringAttribute('dscp4');
  }
  public set dscp4(value: string) {
    this._dscp4 = value;
  }
  public resetDscp4() {
    this._dscp4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp4Input() {
    return this._dscp4;
  }

  // dscp40 - computed: true, optional: true, required: false
  private _dscp40?: string; 
  public get dscp40() {
    return this.getStringAttribute('dscp40');
  }
  public set dscp40(value: string) {
    this._dscp40 = value;
  }
  public resetDscp40() {
    this._dscp40 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp40Input() {
    return this._dscp40;
  }

  // dscp41 - computed: true, optional: true, required: false
  private _dscp41?: string; 
  public get dscp41() {
    return this.getStringAttribute('dscp41');
  }
  public set dscp41(value: string) {
    this._dscp41 = value;
  }
  public resetDscp41() {
    this._dscp41 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp41Input() {
    return this._dscp41;
  }

  // dscp42 - computed: true, optional: true, required: false
  private _dscp42?: string; 
  public get dscp42() {
    return this.getStringAttribute('dscp42');
  }
  public set dscp42(value: string) {
    this._dscp42 = value;
  }
  public resetDscp42() {
    this._dscp42 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp42Input() {
    return this._dscp42;
  }

  // dscp43 - computed: true, optional: true, required: false
  private _dscp43?: string; 
  public get dscp43() {
    return this.getStringAttribute('dscp43');
  }
  public set dscp43(value: string) {
    this._dscp43 = value;
  }
  public resetDscp43() {
    this._dscp43 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp43Input() {
    return this._dscp43;
  }

  // dscp44 - computed: true, optional: true, required: false
  private _dscp44?: string; 
  public get dscp44() {
    return this.getStringAttribute('dscp44');
  }
  public set dscp44(value: string) {
    this._dscp44 = value;
  }
  public resetDscp44() {
    this._dscp44 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp44Input() {
    return this._dscp44;
  }

  // dscp45 - computed: true, optional: true, required: false
  private _dscp45?: string; 
  public get dscp45() {
    return this.getStringAttribute('dscp45');
  }
  public set dscp45(value: string) {
    this._dscp45 = value;
  }
  public resetDscp45() {
    this._dscp45 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp45Input() {
    return this._dscp45;
  }

  // dscp46 - computed: true, optional: true, required: false
  private _dscp46?: string; 
  public get dscp46() {
    return this.getStringAttribute('dscp46');
  }
  public set dscp46(value: string) {
    this._dscp46 = value;
  }
  public resetDscp46() {
    this._dscp46 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp46Input() {
    return this._dscp46;
  }

  // dscp47 - computed: true, optional: true, required: false
  private _dscp47?: string; 
  public get dscp47() {
    return this.getStringAttribute('dscp47');
  }
  public set dscp47(value: string) {
    this._dscp47 = value;
  }
  public resetDscp47() {
    this._dscp47 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp47Input() {
    return this._dscp47;
  }

  // dscp48 - computed: true, optional: true, required: false
  private _dscp48?: string; 
  public get dscp48() {
    return this.getStringAttribute('dscp48');
  }
  public set dscp48(value: string) {
    this._dscp48 = value;
  }
  public resetDscp48() {
    this._dscp48 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp48Input() {
    return this._dscp48;
  }

  // dscp49 - computed: true, optional: true, required: false
  private _dscp49?: string; 
  public get dscp49() {
    return this.getStringAttribute('dscp49');
  }
  public set dscp49(value: string) {
    this._dscp49 = value;
  }
  public resetDscp49() {
    this._dscp49 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp49Input() {
    return this._dscp49;
  }

  // dscp5 - computed: true, optional: true, required: false
  private _dscp5?: string; 
  public get dscp5() {
    return this.getStringAttribute('dscp5');
  }
  public set dscp5(value: string) {
    this._dscp5 = value;
  }
  public resetDscp5() {
    this._dscp5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp5Input() {
    return this._dscp5;
  }

  // dscp50 - computed: true, optional: true, required: false
  private _dscp50?: string; 
  public get dscp50() {
    return this.getStringAttribute('dscp50');
  }
  public set dscp50(value: string) {
    this._dscp50 = value;
  }
  public resetDscp50() {
    this._dscp50 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp50Input() {
    return this._dscp50;
  }

  // dscp51 - computed: true, optional: true, required: false
  private _dscp51?: string; 
  public get dscp51() {
    return this.getStringAttribute('dscp51');
  }
  public set dscp51(value: string) {
    this._dscp51 = value;
  }
  public resetDscp51() {
    this._dscp51 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp51Input() {
    return this._dscp51;
  }

  // dscp52 - computed: true, optional: true, required: false
  private _dscp52?: string; 
  public get dscp52() {
    return this.getStringAttribute('dscp52');
  }
  public set dscp52(value: string) {
    this._dscp52 = value;
  }
  public resetDscp52() {
    this._dscp52 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp52Input() {
    return this._dscp52;
  }

  // dscp53 - computed: true, optional: true, required: false
  private _dscp53?: string; 
  public get dscp53() {
    return this.getStringAttribute('dscp53');
  }
  public set dscp53(value: string) {
    this._dscp53 = value;
  }
  public resetDscp53() {
    this._dscp53 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp53Input() {
    return this._dscp53;
  }

  // dscp54 - computed: true, optional: true, required: false
  private _dscp54?: string; 
  public get dscp54() {
    return this.getStringAttribute('dscp54');
  }
  public set dscp54(value: string) {
    this._dscp54 = value;
  }
  public resetDscp54() {
    this._dscp54 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp54Input() {
    return this._dscp54;
  }

  // dscp55 - computed: true, optional: true, required: false
  private _dscp55?: string; 
  public get dscp55() {
    return this.getStringAttribute('dscp55');
  }
  public set dscp55(value: string) {
    this._dscp55 = value;
  }
  public resetDscp55() {
    this._dscp55 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp55Input() {
    return this._dscp55;
  }

  // dscp56 - computed: true, optional: true, required: false
  private _dscp56?: string; 
  public get dscp56() {
    return this.getStringAttribute('dscp56');
  }
  public set dscp56(value: string) {
    this._dscp56 = value;
  }
  public resetDscp56() {
    this._dscp56 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp56Input() {
    return this._dscp56;
  }

  // dscp57 - computed: true, optional: true, required: false
  private _dscp57?: string; 
  public get dscp57() {
    return this.getStringAttribute('dscp57');
  }
  public set dscp57(value: string) {
    this._dscp57 = value;
  }
  public resetDscp57() {
    this._dscp57 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp57Input() {
    return this._dscp57;
  }

  // dscp58 - computed: true, optional: true, required: false
  private _dscp58?: string; 
  public get dscp58() {
    return this.getStringAttribute('dscp58');
  }
  public set dscp58(value: string) {
    this._dscp58 = value;
  }
  public resetDscp58() {
    this._dscp58 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp58Input() {
    return this._dscp58;
  }

  // dscp59 - computed: true, optional: true, required: false
  private _dscp59?: string; 
  public get dscp59() {
    return this.getStringAttribute('dscp59');
  }
  public set dscp59(value: string) {
    this._dscp59 = value;
  }
  public resetDscp59() {
    this._dscp59 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp59Input() {
    return this._dscp59;
  }

  // dscp6 - computed: true, optional: true, required: false
  private _dscp6?: string; 
  public get dscp6() {
    return this.getStringAttribute('dscp6');
  }
  public set dscp6(value: string) {
    this._dscp6 = value;
  }
  public resetDscp6() {
    this._dscp6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp6Input() {
    return this._dscp6;
  }

  // dscp60 - computed: true, optional: true, required: false
  private _dscp60?: string; 
  public get dscp60() {
    return this.getStringAttribute('dscp60');
  }
  public set dscp60(value: string) {
    this._dscp60 = value;
  }
  public resetDscp60() {
    this._dscp60 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp60Input() {
    return this._dscp60;
  }

  // dscp61 - computed: true, optional: true, required: false
  private _dscp61?: string; 
  public get dscp61() {
    return this.getStringAttribute('dscp61');
  }
  public set dscp61(value: string) {
    this._dscp61 = value;
  }
  public resetDscp61() {
    this._dscp61 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp61Input() {
    return this._dscp61;
  }

  // dscp62 - computed: true, optional: true, required: false
  private _dscp62?: string; 
  public get dscp62() {
    return this.getStringAttribute('dscp62');
  }
  public set dscp62(value: string) {
    this._dscp62 = value;
  }
  public resetDscp62() {
    this._dscp62 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp62Input() {
    return this._dscp62;
  }

  // dscp63 - computed: true, optional: true, required: false
  private _dscp63?: string; 
  public get dscp63() {
    return this.getStringAttribute('dscp63');
  }
  public set dscp63(value: string) {
    this._dscp63 = value;
  }
  public resetDscp63() {
    this._dscp63 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp63Input() {
    return this._dscp63;
  }

  // dscp7 - computed: true, optional: true, required: false
  private _dscp7?: string; 
  public get dscp7() {
    return this.getStringAttribute('dscp7');
  }
  public set dscp7(value: string) {
    this._dscp7 = value;
  }
  public resetDscp7() {
    this._dscp7 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp7Input() {
    return this._dscp7;
  }

  // dscp8 - computed: true, optional: true, required: false
  private _dscp8?: string; 
  public get dscp8() {
    return this.getStringAttribute('dscp8');
  }
  public set dscp8(value: string) {
    this._dscp8 = value;
  }
  public resetDscp8() {
    this._dscp8 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp8Input() {
    return this._dscp8;
  }

  // dscp9 - computed: true, optional: true, required: false
  private _dscp9?: string; 
  public get dscp9() {
    return this.getStringAttribute('dscp9');
  }
  public set dscp9(value: string) {
    this._dscp9 = value;
  }
  public resetDscp9() {
    this._dscp9 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscp9Input() {
    return this._dscp9;
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // weight - computed: true, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class ObjectSystemNpuNpQueuesProfileList extends cdktf.ComplexList {
  public internalValue? : ObjectSystemNpuNpQueuesProfile[] | cdktf.IResolvable

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
  public get(index: number): ObjectSystemNpuNpQueuesProfileOutputReference {
    return new ObjectSystemNpuNpQueuesProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectSystemNpuNpQueuesScheduler {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#mode ObjectSystemNpu#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#name ObjectSystemNpu#name}
  */
  readonly name?: string;
}

export function objectSystemNpuNpQueuesSchedulerToTerraform(struct?: ObjectSystemNpuNpQueuesScheduler | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function objectSystemNpuNpQueuesSchedulerToHclTerraform(struct?: ObjectSystemNpuNpQueuesScheduler | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
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

export class ObjectSystemNpuNpQueuesSchedulerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectSystemNpuNpQueuesScheduler | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectSystemNpuNpQueuesScheduler | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mode = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mode = value.mode;
      this._name = value.name;
    }
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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
}

export class ObjectSystemNpuNpQueuesSchedulerList extends cdktf.ComplexList {
  public internalValue? : ObjectSystemNpuNpQueuesScheduler[] | cdktf.IResolvable

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
  public get(index: number): ObjectSystemNpuNpQueuesSchedulerOutputReference {
    return new ObjectSystemNpuNpQueuesSchedulerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectSystemNpuNpQueues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#custom_etype_lookup ObjectSystemNpu#custom_etype_lookup}
  */
  readonly customEtypeLookup?: string;
  /**
  * ethernet_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#ethernet_type ObjectSystemNpu#ethernet_type}
  */
  readonly ethernetType?: ObjectSystemNpuNpQueuesEthernetType[] | cdktf.IResolvable;
  /**
  * ip_protocol block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#ip_protocol ObjectSystemNpu#ip_protocol}
  */
  readonly ipProtocol?: ObjectSystemNpuNpQueuesIpProtocol[] | cdktf.IResolvable;
  /**
  * ip_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#ip_service ObjectSystemNpu#ip_service}
  */
  readonly ipService?: ObjectSystemNpuNpQueuesIpService[] | cdktf.IResolvable;
  /**
  * profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#profile ObjectSystemNpu#profile}
  */
  readonly profile?: ObjectSystemNpuNpQueuesProfile[] | cdktf.IResolvable;
  /**
  * scheduler block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#scheduler ObjectSystemNpu#scheduler}
  */
  readonly scheduler?: ObjectSystemNpuNpQueuesScheduler[] | cdktf.IResolvable;
}

export function objectSystemNpuNpQueuesToTerraform(struct?: ObjectSystemNpuNpQueuesOutputReference | ObjectSystemNpuNpQueues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_etype_lookup: cdktf.stringToTerraform(struct!.customEtypeLookup),
    ethernet_type: cdktf.listMapper(objectSystemNpuNpQueuesEthernetTypeToTerraform, true)(struct!.ethernetType),
    ip_protocol: cdktf.listMapper(objectSystemNpuNpQueuesIpProtocolToTerraform, true)(struct!.ipProtocol),
    ip_service: cdktf.listMapper(objectSystemNpuNpQueuesIpServiceToTerraform, true)(struct!.ipService),
    profile: cdktf.listMapper(objectSystemNpuNpQueuesProfileToTerraform, true)(struct!.profile),
    scheduler: cdktf.listMapper(objectSystemNpuNpQueuesSchedulerToTerraform, true)(struct!.scheduler),
  }
}


export function objectSystemNpuNpQueuesToHclTerraform(struct?: ObjectSystemNpuNpQueuesOutputReference | ObjectSystemNpuNpQueues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_etype_lookup: {
      value: cdktf.stringToHclTerraform(struct!.customEtypeLookup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ethernet_type: {
      value: cdktf.listMapperHcl(objectSystemNpuNpQueuesEthernetTypeToHclTerraform, true)(struct!.ethernetType),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectSystemNpuNpQueuesEthernetTypeList",
    },
    ip_protocol: {
      value: cdktf.listMapperHcl(objectSystemNpuNpQueuesIpProtocolToHclTerraform, true)(struct!.ipProtocol),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectSystemNpuNpQueuesIpProtocolList",
    },
    ip_service: {
      value: cdktf.listMapperHcl(objectSystemNpuNpQueuesIpServiceToHclTerraform, true)(struct!.ipService),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectSystemNpuNpQueuesIpServiceList",
    },
    profile: {
      value: cdktf.listMapperHcl(objectSystemNpuNpQueuesProfileToHclTerraform, true)(struct!.profile),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectSystemNpuNpQueuesProfileList",
    },
    scheduler: {
      value: cdktf.listMapperHcl(objectSystemNpuNpQueuesSchedulerToHclTerraform, true)(struct!.scheduler),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectSystemNpuNpQueuesSchedulerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectSystemNpuNpQueuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectSystemNpuNpQueues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customEtypeLookup !== undefined) {
      hasAnyValues = true;
      internalValueResult.customEtypeLookup = this._customEtypeLookup;
    }
    if (this._ethernetType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethernetType = this._ethernetType?.internalValue;
    }
    if (this._ipProtocol?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipProtocol = this._ipProtocol?.internalValue;
    }
    if (this._ipService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipService = this._ipService?.internalValue;
    }
    if (this._profile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile?.internalValue;
    }
    if (this._scheduler?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduler = this._scheduler?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectSystemNpuNpQueues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customEtypeLookup = undefined;
      this._ethernetType.internalValue = undefined;
      this._ipProtocol.internalValue = undefined;
      this._ipService.internalValue = undefined;
      this._profile.internalValue = undefined;
      this._scheduler.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customEtypeLookup = value.customEtypeLookup;
      this._ethernetType.internalValue = value.ethernetType;
      this._ipProtocol.internalValue = value.ipProtocol;
      this._ipService.internalValue = value.ipService;
      this._profile.internalValue = value.profile;
      this._scheduler.internalValue = value.scheduler;
    }
  }

  // custom_etype_lookup - computed: false, optional: true, required: false
  private _customEtypeLookup?: string; 
  public get customEtypeLookup() {
    return this.getStringAttribute('custom_etype_lookup');
  }
  public set customEtypeLookup(value: string) {
    this._customEtypeLookup = value;
  }
  public resetCustomEtypeLookup() {
    this._customEtypeLookup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customEtypeLookupInput() {
    return this._customEtypeLookup;
  }

  // ethernet_type - computed: false, optional: true, required: false
  private _ethernetType = new ObjectSystemNpuNpQueuesEthernetTypeList(this, "ethernet_type", false);
  public get ethernetType() {
    return this._ethernetType;
  }
  public putEthernetType(value: ObjectSystemNpuNpQueuesEthernetType[] | cdktf.IResolvable) {
    this._ethernetType.internalValue = value;
  }
  public resetEthernetType() {
    this._ethernetType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetTypeInput() {
    return this._ethernetType.internalValue;
  }

  // ip_protocol - computed: false, optional: true, required: false
  private _ipProtocol = new ObjectSystemNpuNpQueuesIpProtocolList(this, "ip_protocol", false);
  public get ipProtocol() {
    return this._ipProtocol;
  }
  public putIpProtocol(value: ObjectSystemNpuNpQueuesIpProtocol[] | cdktf.IResolvable) {
    this._ipProtocol.internalValue = value;
  }
  public resetIpProtocol() {
    this._ipProtocol.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipProtocolInput() {
    return this._ipProtocol.internalValue;
  }

  // ip_service - computed: false, optional: true, required: false
  private _ipService = new ObjectSystemNpuNpQueuesIpServiceList(this, "ip_service", false);
  public get ipService() {
    return this._ipService;
  }
  public putIpService(value: ObjectSystemNpuNpQueuesIpService[] | cdktf.IResolvable) {
    this._ipService.internalValue = value;
  }
  public resetIpService() {
    this._ipService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipServiceInput() {
    return this._ipService.internalValue;
  }

  // profile - computed: false, optional: true, required: false
  private _profile = new ObjectSystemNpuNpQueuesProfileList(this, "profile", false);
  public get profile() {
    return this._profile;
  }
  public putProfile(value: ObjectSystemNpuNpQueuesProfile[] | cdktf.IResolvable) {
    this._profile.internalValue = value;
  }
  public resetProfile() {
    this._profile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile.internalValue;
  }

  // scheduler - computed: false, optional: true, required: false
  private _scheduler = new ObjectSystemNpuNpQueuesSchedulerList(this, "scheduler", false);
  public get scheduler() {
    return this._scheduler;
  }
  public putScheduler(value: ObjectSystemNpuNpQueuesScheduler[] | cdktf.IResolvable) {
    this._scheduler.internalValue = value;
  }
  public resetScheduler() {
    this._scheduler.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulerInput() {
    return this._scheduler.internalValue;
  }
}
export interface ObjectSystemNpuNpuTcamData {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#df ObjectSystemNpu#df}
  */
  readonly df?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dstip ObjectSystemNpu#dstip}
  */
  readonly dstip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dstipv6 ObjectSystemNpu#dstipv6}
  */
  readonly dstipv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dstmac ObjectSystemNpu#dstmac}
  */
  readonly dstmac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dstport ObjectSystemNpu#dstport}
  */
  readonly dstport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#ethertype ObjectSystemNpu#ethertype}
  */
  readonly ethertype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#ext_tag ObjectSystemNpu#ext_tag}
  */
  readonly extTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#frag_off ObjectSystemNpu#frag_off}
  */
  readonly fragOff?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#gen_buf_cnt ObjectSystemNpu#gen_buf_cnt}
  */
  readonly genBufCnt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#gen_iv ObjectSystemNpu#gen_iv}
  */
  readonly genIv?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#gen_l3_flags ObjectSystemNpu#gen_l3_flags}
  */
  readonly genL3Flags?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#gen_l4_flags ObjectSystemNpu#gen_l4_flags}
  */
  readonly genL4Flags?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#gen_pkt_ctrl ObjectSystemNpu#gen_pkt_ctrl}
  */
  readonly genPktCtrl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#gen_pri ObjectSystemNpu#gen_pri}
  */
  readonly genPri?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#gen_pri_v ObjectSystemNpu#gen_pri_v}
  */
  readonly genPriV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#gen_tv ObjectSystemNpu#gen_tv}
  */
  readonly genTv?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#ihl ObjectSystemNpu#ihl}
  */
  readonly ihl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#ip4_id ObjectSystemNpu#ip4_id}
  */
  readonly ip4Id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#ip6_fl ObjectSystemNpu#ip6_fl}
  */
  readonly ip6Fl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#ipver ObjectSystemNpu#ipver}
  */
  readonly ipver?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#l4_wd10 ObjectSystemNpu#l4_wd10}
  */
  readonly l4Wd10?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#l4_wd11 ObjectSystemNpu#l4_wd11}
  */
  readonly l4Wd11?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#l4_wd8 ObjectSystemNpu#l4_wd8}
  */
  readonly l4Wd8?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#l4_wd9 ObjectSystemNpu#l4_wd9}
  */
  readonly l4Wd9?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#mf ObjectSystemNpu#mf}
  */
  readonly mf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#protocol ObjectSystemNpu#protocol}
  */
  readonly protocol?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#slink ObjectSystemNpu#slink}
  */
  readonly slink?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#smac_change ObjectSystemNpu#smac_change}
  */
  readonly smacChange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#sp ObjectSystemNpu#sp}
  */
  readonly sp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#src_cfi ObjectSystemNpu#src_cfi}
  */
  readonly srcCfi?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#src_prio ObjectSystemNpu#src_prio}
  */
  readonly srcPrio?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#src_updt ObjectSystemNpu#src_updt}
  */
  readonly srcUpdt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#srcip ObjectSystemNpu#srcip}
  */
  readonly srcip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#srcipv6 ObjectSystemNpu#srcipv6}
  */
  readonly srcipv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#srcmac ObjectSystemNpu#srcmac}
  */
  readonly srcmac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#srcport ObjectSystemNpu#srcport}
  */
  readonly srcport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#svid ObjectSystemNpu#svid}
  */
  readonly svid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#tcp_ack ObjectSystemNpu#tcp_ack}
  */
  readonly tcpAck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#tcp_cwr ObjectSystemNpu#tcp_cwr}
  */
  readonly tcpCwr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#tcp_ece ObjectSystemNpu#tcp_ece}
  */
  readonly tcpEce?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#tcp_fin ObjectSystemNpu#tcp_fin}
  */
  readonly tcpFin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#tcp_push ObjectSystemNpu#tcp_push}
  */
  readonly tcpPush?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#tcp_rst ObjectSystemNpu#tcp_rst}
  */
  readonly tcpRst?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#tcp_syn ObjectSystemNpu#tcp_syn}
  */
  readonly tcpSyn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#tcp_urg ObjectSystemNpu#tcp_urg}
  */
  readonly tcpUrg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#tgt_cfi ObjectSystemNpu#tgt_cfi}
  */
  readonly tgtCfi?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#tgt_prio ObjectSystemNpu#tgt_prio}
  */
  readonly tgtPrio?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#tgt_updt ObjectSystemNpu#tgt_updt}
  */
  readonly tgtUpdt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#tgt_v ObjectSystemNpu#tgt_v}
  */
  readonly tgtV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#tos ObjectSystemNpu#tos}
  */
  readonly tos?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#tp ObjectSystemNpu#tp}
  */
  readonly tp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#ttl ObjectSystemNpu#ttl}
  */
  readonly ttl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#tvid ObjectSystemNpu#tvid}
  */
  readonly tvid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#vdid ObjectSystemNpu#vdid}
  */
  readonly vdid?: number;
}

export function objectSystemNpuNpuTcamDataToTerraform(struct?: ObjectSystemNpuNpuTcamDataOutputReference | ObjectSystemNpuNpuTcamData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    df: cdktf.stringToTerraform(struct!.df),
    dstip: cdktf.stringToTerraform(struct!.dstip),
    dstipv6: cdktf.stringToTerraform(struct!.dstipv6),
    dstmac: cdktf.stringToTerraform(struct!.dstmac),
    dstport: cdktf.numberToTerraform(struct!.dstport),
    ethertype: cdktf.stringToTerraform(struct!.ethertype),
    ext_tag: cdktf.stringToTerraform(struct!.extTag),
    frag_off: cdktf.numberToTerraform(struct!.fragOff),
    gen_buf_cnt: cdktf.numberToTerraform(struct!.genBufCnt),
    gen_iv: cdktf.stringToTerraform(struct!.genIv),
    gen_l3_flags: cdktf.numberToTerraform(struct!.genL3Flags),
    gen_l4_flags: cdktf.numberToTerraform(struct!.genL4Flags),
    gen_pkt_ctrl: cdktf.numberToTerraform(struct!.genPktCtrl),
    gen_pri: cdktf.numberToTerraform(struct!.genPri),
    gen_pri_v: cdktf.stringToTerraform(struct!.genPriV),
    gen_tv: cdktf.stringToTerraform(struct!.genTv),
    ihl: cdktf.numberToTerraform(struct!.ihl),
    ip4_id: cdktf.numberToTerraform(struct!.ip4Id),
    ip6_fl: cdktf.numberToTerraform(struct!.ip6Fl),
    ipver: cdktf.numberToTerraform(struct!.ipver),
    l4_wd10: cdktf.numberToTerraform(struct!.l4Wd10),
    l4_wd11: cdktf.numberToTerraform(struct!.l4Wd11),
    l4_wd8: cdktf.numberToTerraform(struct!.l4Wd8),
    l4_wd9: cdktf.numberToTerraform(struct!.l4Wd9),
    mf: cdktf.stringToTerraform(struct!.mf),
    protocol: cdktf.numberToTerraform(struct!.protocol),
    slink: cdktf.numberToTerraform(struct!.slink),
    smac_change: cdktf.stringToTerraform(struct!.smacChange),
    sp: cdktf.numberToTerraform(struct!.sp),
    src_cfi: cdktf.stringToTerraform(struct!.srcCfi),
    src_prio: cdktf.numberToTerraform(struct!.srcPrio),
    src_updt: cdktf.stringToTerraform(struct!.srcUpdt),
    srcip: cdktf.stringToTerraform(struct!.srcip),
    srcipv6: cdktf.stringToTerraform(struct!.srcipv6),
    srcmac: cdktf.stringToTerraform(struct!.srcmac),
    srcport: cdktf.numberToTerraform(struct!.srcport),
    svid: cdktf.numberToTerraform(struct!.svid),
    tcp_ack: cdktf.stringToTerraform(struct!.tcpAck),
    tcp_cwr: cdktf.stringToTerraform(struct!.tcpCwr),
    tcp_ece: cdktf.stringToTerraform(struct!.tcpEce),
    tcp_fin: cdktf.stringToTerraform(struct!.tcpFin),
    tcp_push: cdktf.stringToTerraform(struct!.tcpPush),
    tcp_rst: cdktf.stringToTerraform(struct!.tcpRst),
    tcp_syn: cdktf.stringToTerraform(struct!.tcpSyn),
    tcp_urg: cdktf.stringToTerraform(struct!.tcpUrg),
    tgt_cfi: cdktf.stringToTerraform(struct!.tgtCfi),
    tgt_prio: cdktf.numberToTerraform(struct!.tgtPrio),
    tgt_updt: cdktf.stringToTerraform(struct!.tgtUpdt),
    tgt_v: cdktf.stringToTerraform(struct!.tgtV),
    tos: cdktf.numberToTerraform(struct!.tos),
    tp: cdktf.numberToTerraform(struct!.tp),
    ttl: cdktf.numberToTerraform(struct!.ttl),
    tvid: cdktf.numberToTerraform(struct!.tvid),
    vdid: cdktf.numberToTerraform(struct!.vdid),
  }
}


export function objectSystemNpuNpuTcamDataToHclTerraform(struct?: ObjectSystemNpuNpuTcamDataOutputReference | ObjectSystemNpuNpuTcamData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    df: {
      value: cdktf.stringToHclTerraform(struct!.df),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dstip: {
      value: cdktf.stringToHclTerraform(struct!.dstip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dstipv6: {
      value: cdktf.stringToHclTerraform(struct!.dstipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dstmac: {
      value: cdktf.stringToHclTerraform(struct!.dstmac),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dstport: {
      value: cdktf.numberToHclTerraform(struct!.dstport),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ethertype: {
      value: cdktf.stringToHclTerraform(struct!.ethertype),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ext_tag: {
      value: cdktf.stringToHclTerraform(struct!.extTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    frag_off: {
      value: cdktf.numberToHclTerraform(struct!.fragOff),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gen_buf_cnt: {
      value: cdktf.numberToHclTerraform(struct!.genBufCnt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gen_iv: {
      value: cdktf.stringToHclTerraform(struct!.genIv),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gen_l3_flags: {
      value: cdktf.numberToHclTerraform(struct!.genL3Flags),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gen_l4_flags: {
      value: cdktf.numberToHclTerraform(struct!.genL4Flags),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gen_pkt_ctrl: {
      value: cdktf.numberToHclTerraform(struct!.genPktCtrl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gen_pri: {
      value: cdktf.numberToHclTerraform(struct!.genPri),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gen_pri_v: {
      value: cdktf.stringToHclTerraform(struct!.genPriV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gen_tv: {
      value: cdktf.stringToHclTerraform(struct!.genTv),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ihl: {
      value: cdktf.numberToHclTerraform(struct!.ihl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip4_id: {
      value: cdktf.numberToHclTerraform(struct!.ip4Id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip6_fl: {
      value: cdktf.numberToHclTerraform(struct!.ip6Fl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipver: {
      value: cdktf.numberToHclTerraform(struct!.ipver),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l4_wd10: {
      value: cdktf.numberToHclTerraform(struct!.l4Wd10),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l4_wd11: {
      value: cdktf.numberToHclTerraform(struct!.l4Wd11),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l4_wd8: {
      value: cdktf.numberToHclTerraform(struct!.l4Wd8),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l4_wd9: {
      value: cdktf.numberToHclTerraform(struct!.l4Wd9),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mf: {
      value: cdktf.stringToHclTerraform(struct!.mf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.numberToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slink: {
      value: cdktf.numberToHclTerraform(struct!.slink),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    smac_change: {
      value: cdktf.stringToHclTerraform(struct!.smacChange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sp: {
      value: cdktf.numberToHclTerraform(struct!.sp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_cfi: {
      value: cdktf.stringToHclTerraform(struct!.srcCfi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_prio: {
      value: cdktf.numberToHclTerraform(struct!.srcPrio),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_updt: {
      value: cdktf.stringToHclTerraform(struct!.srcUpdt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    srcip: {
      value: cdktf.stringToHclTerraform(struct!.srcip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    srcipv6: {
      value: cdktf.stringToHclTerraform(struct!.srcipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    srcmac: {
      value: cdktf.stringToHclTerraform(struct!.srcmac),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    srcport: {
      value: cdktf.numberToHclTerraform(struct!.srcport),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    svid: {
      value: cdktf.numberToHclTerraform(struct!.svid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_ack: {
      value: cdktf.stringToHclTerraform(struct!.tcpAck),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_cwr: {
      value: cdktf.stringToHclTerraform(struct!.tcpCwr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_ece: {
      value: cdktf.stringToHclTerraform(struct!.tcpEce),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_fin: {
      value: cdktf.stringToHclTerraform(struct!.tcpFin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_push: {
      value: cdktf.stringToHclTerraform(struct!.tcpPush),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_rst: {
      value: cdktf.stringToHclTerraform(struct!.tcpRst),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_syn: {
      value: cdktf.stringToHclTerraform(struct!.tcpSyn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_urg: {
      value: cdktf.stringToHclTerraform(struct!.tcpUrg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tgt_cfi: {
      value: cdktf.stringToHclTerraform(struct!.tgtCfi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tgt_prio: {
      value: cdktf.numberToHclTerraform(struct!.tgtPrio),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tgt_updt: {
      value: cdktf.stringToHclTerraform(struct!.tgtUpdt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tgt_v: {
      value: cdktf.stringToHclTerraform(struct!.tgtV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tos: {
      value: cdktf.numberToHclTerraform(struct!.tos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tp: {
      value: cdktf.numberToHclTerraform(struct!.tp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tvid: {
      value: cdktf.numberToHclTerraform(struct!.tvid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vdid: {
      value: cdktf.numberToHclTerraform(struct!.vdid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectSystemNpuNpuTcamDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectSystemNpuNpuTcamData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._df !== undefined) {
      hasAnyValues = true;
      internalValueResult.df = this._df;
    }
    if (this._dstip !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstip = this._dstip;
    }
    if (this._dstipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstipv6 = this._dstipv6;
    }
    if (this._dstmac !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstmac = this._dstmac;
    }
    if (this._dstport !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstport = this._dstport;
    }
    if (this._ethertype !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethertype = this._ethertype;
    }
    if (this._extTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.extTag = this._extTag;
    }
    if (this._fragOff !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragOff = this._fragOff;
    }
    if (this._genBufCnt !== undefined) {
      hasAnyValues = true;
      internalValueResult.genBufCnt = this._genBufCnt;
    }
    if (this._genIv !== undefined) {
      hasAnyValues = true;
      internalValueResult.genIv = this._genIv;
    }
    if (this._genL3Flags !== undefined) {
      hasAnyValues = true;
      internalValueResult.genL3Flags = this._genL3Flags;
    }
    if (this._genL4Flags !== undefined) {
      hasAnyValues = true;
      internalValueResult.genL4Flags = this._genL4Flags;
    }
    if (this._genPktCtrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.genPktCtrl = this._genPktCtrl;
    }
    if (this._genPri !== undefined) {
      hasAnyValues = true;
      internalValueResult.genPri = this._genPri;
    }
    if (this._genPriV !== undefined) {
      hasAnyValues = true;
      internalValueResult.genPriV = this._genPriV;
    }
    if (this._genTv !== undefined) {
      hasAnyValues = true;
      internalValueResult.genTv = this._genTv;
    }
    if (this._ihl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ihl = this._ihl;
    }
    if (this._ip4Id !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip4Id = this._ip4Id;
    }
    if (this._ip6Fl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6Fl = this._ip6Fl;
    }
    if (this._ipver !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipver = this._ipver;
    }
    if (this._l4Wd10 !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4Wd10 = this._l4Wd10;
    }
    if (this._l4Wd11 !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4Wd11 = this._l4Wd11;
    }
    if (this._l4Wd8 !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4Wd8 = this._l4Wd8;
    }
    if (this._l4Wd9 !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4Wd9 = this._l4Wd9;
    }
    if (this._mf !== undefined) {
      hasAnyValues = true;
      internalValueResult.mf = this._mf;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._slink !== undefined) {
      hasAnyValues = true;
      internalValueResult.slink = this._slink;
    }
    if (this._smacChange !== undefined) {
      hasAnyValues = true;
      internalValueResult.smacChange = this._smacChange;
    }
    if (this._sp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sp = this._sp;
    }
    if (this._srcCfi !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcCfi = this._srcCfi;
    }
    if (this._srcPrio !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcPrio = this._srcPrio;
    }
    if (this._srcUpdt !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcUpdt = this._srcUpdt;
    }
    if (this._srcip !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcip = this._srcip;
    }
    if (this._srcipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcipv6 = this._srcipv6;
    }
    if (this._srcmac !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcmac = this._srcmac;
    }
    if (this._srcport !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcport = this._srcport;
    }
    if (this._svid !== undefined) {
      hasAnyValues = true;
      internalValueResult.svid = this._svid;
    }
    if (this._tcpAck !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpAck = this._tcpAck;
    }
    if (this._tcpCwr !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpCwr = this._tcpCwr;
    }
    if (this._tcpEce !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpEce = this._tcpEce;
    }
    if (this._tcpFin !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFin = this._tcpFin;
    }
    if (this._tcpPush !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpPush = this._tcpPush;
    }
    if (this._tcpRst !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpRst = this._tcpRst;
    }
    if (this._tcpSyn !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSyn = this._tcpSyn;
    }
    if (this._tcpUrg !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpUrg = this._tcpUrg;
    }
    if (this._tgtCfi !== undefined) {
      hasAnyValues = true;
      internalValueResult.tgtCfi = this._tgtCfi;
    }
    if (this._tgtPrio !== undefined) {
      hasAnyValues = true;
      internalValueResult.tgtPrio = this._tgtPrio;
    }
    if (this._tgtUpdt !== undefined) {
      hasAnyValues = true;
      internalValueResult.tgtUpdt = this._tgtUpdt;
    }
    if (this._tgtV !== undefined) {
      hasAnyValues = true;
      internalValueResult.tgtV = this._tgtV;
    }
    if (this._tos !== undefined) {
      hasAnyValues = true;
      internalValueResult.tos = this._tos;
    }
    if (this._tp !== undefined) {
      hasAnyValues = true;
      internalValueResult.tp = this._tp;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._tvid !== undefined) {
      hasAnyValues = true;
      internalValueResult.tvid = this._tvid;
    }
    if (this._vdid !== undefined) {
      hasAnyValues = true;
      internalValueResult.vdid = this._vdid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectSystemNpuNpuTcamData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._df = undefined;
      this._dstip = undefined;
      this._dstipv6 = undefined;
      this._dstmac = undefined;
      this._dstport = undefined;
      this._ethertype = undefined;
      this._extTag = undefined;
      this._fragOff = undefined;
      this._genBufCnt = undefined;
      this._genIv = undefined;
      this._genL3Flags = undefined;
      this._genL4Flags = undefined;
      this._genPktCtrl = undefined;
      this._genPri = undefined;
      this._genPriV = undefined;
      this._genTv = undefined;
      this._ihl = undefined;
      this._ip4Id = undefined;
      this._ip6Fl = undefined;
      this._ipver = undefined;
      this._l4Wd10 = undefined;
      this._l4Wd11 = undefined;
      this._l4Wd8 = undefined;
      this._l4Wd9 = undefined;
      this._mf = undefined;
      this._protocol = undefined;
      this._slink = undefined;
      this._smacChange = undefined;
      this._sp = undefined;
      this._srcCfi = undefined;
      this._srcPrio = undefined;
      this._srcUpdt = undefined;
      this._srcip = undefined;
      this._srcipv6 = undefined;
      this._srcmac = undefined;
      this._srcport = undefined;
      this._svid = undefined;
      this._tcpAck = undefined;
      this._tcpCwr = undefined;
      this._tcpEce = undefined;
      this._tcpFin = undefined;
      this._tcpPush = undefined;
      this._tcpRst = undefined;
      this._tcpSyn = undefined;
      this._tcpUrg = undefined;
      this._tgtCfi = undefined;
      this._tgtPrio = undefined;
      this._tgtUpdt = undefined;
      this._tgtV = undefined;
      this._tos = undefined;
      this._tp = undefined;
      this._ttl = undefined;
      this._tvid = undefined;
      this._vdid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._df = value.df;
      this._dstip = value.dstip;
      this._dstipv6 = value.dstipv6;
      this._dstmac = value.dstmac;
      this._dstport = value.dstport;
      this._ethertype = value.ethertype;
      this._extTag = value.extTag;
      this._fragOff = value.fragOff;
      this._genBufCnt = value.genBufCnt;
      this._genIv = value.genIv;
      this._genL3Flags = value.genL3Flags;
      this._genL4Flags = value.genL4Flags;
      this._genPktCtrl = value.genPktCtrl;
      this._genPri = value.genPri;
      this._genPriV = value.genPriV;
      this._genTv = value.genTv;
      this._ihl = value.ihl;
      this._ip4Id = value.ip4Id;
      this._ip6Fl = value.ip6Fl;
      this._ipver = value.ipver;
      this._l4Wd10 = value.l4Wd10;
      this._l4Wd11 = value.l4Wd11;
      this._l4Wd8 = value.l4Wd8;
      this._l4Wd9 = value.l4Wd9;
      this._mf = value.mf;
      this._protocol = value.protocol;
      this._slink = value.slink;
      this._smacChange = value.smacChange;
      this._sp = value.sp;
      this._srcCfi = value.srcCfi;
      this._srcPrio = value.srcPrio;
      this._srcUpdt = value.srcUpdt;
      this._srcip = value.srcip;
      this._srcipv6 = value.srcipv6;
      this._srcmac = value.srcmac;
      this._srcport = value.srcport;
      this._svid = value.svid;
      this._tcpAck = value.tcpAck;
      this._tcpCwr = value.tcpCwr;
      this._tcpEce = value.tcpEce;
      this._tcpFin = value.tcpFin;
      this._tcpPush = value.tcpPush;
      this._tcpRst = value.tcpRst;
      this._tcpSyn = value.tcpSyn;
      this._tcpUrg = value.tcpUrg;
      this._tgtCfi = value.tgtCfi;
      this._tgtPrio = value.tgtPrio;
      this._tgtUpdt = value.tgtUpdt;
      this._tgtV = value.tgtV;
      this._tos = value.tos;
      this._tp = value.tp;
      this._ttl = value.ttl;
      this._tvid = value.tvid;
      this._vdid = value.vdid;
    }
  }

  // df - computed: true, optional: true, required: false
  private _df?: string; 
  public get df() {
    return this.getStringAttribute('df');
  }
  public set df(value: string) {
    this._df = value;
  }
  public resetDf() {
    this._df = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dfInput() {
    return this._df;
  }

  // dstip - computed: true, optional: true, required: false
  private _dstip?: string; 
  public get dstip() {
    return this.getStringAttribute('dstip');
  }
  public set dstip(value: string) {
    this._dstip = value;
  }
  public resetDstip() {
    this._dstip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstipInput() {
    return this._dstip;
  }

  // dstipv6 - computed: true, optional: true, required: false
  private _dstipv6?: string; 
  public get dstipv6() {
    return this.getStringAttribute('dstipv6');
  }
  public set dstipv6(value: string) {
    this._dstipv6 = value;
  }
  public resetDstipv6() {
    this._dstipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstipv6Input() {
    return this._dstipv6;
  }

  // dstmac - computed: true, optional: true, required: false
  private _dstmac?: string; 
  public get dstmac() {
    return this.getStringAttribute('dstmac');
  }
  public set dstmac(value: string) {
    this._dstmac = value;
  }
  public resetDstmac() {
    this._dstmac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstmacInput() {
    return this._dstmac;
  }

  // dstport - computed: false, optional: true, required: false
  private _dstport?: number; 
  public get dstport() {
    return this.getNumberAttribute('dstport');
  }
  public set dstport(value: number) {
    this._dstport = value;
  }
  public resetDstport() {
    this._dstport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstportInput() {
    return this._dstport;
  }

  // ethertype - computed: true, optional: true, required: false
  private _ethertype?: string; 
  public get ethertype() {
    return this.getStringAttribute('ethertype');
  }
  public set ethertype(value: string) {
    this._ethertype = value;
  }
  public resetEthertype() {
    this._ethertype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethertypeInput() {
    return this._ethertype;
  }

  // ext_tag - computed: true, optional: true, required: false
  private _extTag?: string; 
  public get extTag() {
    return this.getStringAttribute('ext_tag');
  }
  public set extTag(value: string) {
    this._extTag = value;
  }
  public resetExtTag() {
    this._extTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extTagInput() {
    return this._extTag;
  }

  // frag_off - computed: false, optional: true, required: false
  private _fragOff?: number; 
  public get fragOff() {
    return this.getNumberAttribute('frag_off');
  }
  public set fragOff(value: number) {
    this._fragOff = value;
  }
  public resetFragOff() {
    this._fragOff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragOffInput() {
    return this._fragOff;
  }

  // gen_buf_cnt - computed: false, optional: true, required: false
  private _genBufCnt?: number; 
  public get genBufCnt() {
    return this.getNumberAttribute('gen_buf_cnt');
  }
  public set genBufCnt(value: number) {
    this._genBufCnt = value;
  }
  public resetGenBufCnt() {
    this._genBufCnt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genBufCntInput() {
    return this._genBufCnt;
  }

  // gen_iv - computed: true, optional: true, required: false
  private _genIv?: string; 
  public get genIv() {
    return this.getStringAttribute('gen_iv');
  }
  public set genIv(value: string) {
    this._genIv = value;
  }
  public resetGenIv() {
    this._genIv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genIvInput() {
    return this._genIv;
  }

  // gen_l3_flags - computed: false, optional: true, required: false
  private _genL3Flags?: number; 
  public get genL3Flags() {
    return this.getNumberAttribute('gen_l3_flags');
  }
  public set genL3Flags(value: number) {
    this._genL3Flags = value;
  }
  public resetGenL3Flags() {
    this._genL3Flags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genL3FlagsInput() {
    return this._genL3Flags;
  }

  // gen_l4_flags - computed: false, optional: true, required: false
  private _genL4Flags?: number; 
  public get genL4Flags() {
    return this.getNumberAttribute('gen_l4_flags');
  }
  public set genL4Flags(value: number) {
    this._genL4Flags = value;
  }
  public resetGenL4Flags() {
    this._genL4Flags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genL4FlagsInput() {
    return this._genL4Flags;
  }

  // gen_pkt_ctrl - computed: false, optional: true, required: false
  private _genPktCtrl?: number; 
  public get genPktCtrl() {
    return this.getNumberAttribute('gen_pkt_ctrl');
  }
  public set genPktCtrl(value: number) {
    this._genPktCtrl = value;
  }
  public resetGenPktCtrl() {
    this._genPktCtrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genPktCtrlInput() {
    return this._genPktCtrl;
  }

  // gen_pri - computed: false, optional: true, required: false
  private _genPri?: number; 
  public get genPri() {
    return this.getNumberAttribute('gen_pri');
  }
  public set genPri(value: number) {
    this._genPri = value;
  }
  public resetGenPri() {
    this._genPri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genPriInput() {
    return this._genPri;
  }

  // gen_pri_v - computed: true, optional: true, required: false
  private _genPriV?: string; 
  public get genPriV() {
    return this.getStringAttribute('gen_pri_v');
  }
  public set genPriV(value: string) {
    this._genPriV = value;
  }
  public resetGenPriV() {
    this._genPriV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genPriVInput() {
    return this._genPriV;
  }

  // gen_tv - computed: true, optional: true, required: false
  private _genTv?: string; 
  public get genTv() {
    return this.getStringAttribute('gen_tv');
  }
  public set genTv(value: string) {
    this._genTv = value;
  }
  public resetGenTv() {
    this._genTv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genTvInput() {
    return this._genTv;
  }

  // ihl - computed: false, optional: true, required: false
  private _ihl?: number; 
  public get ihl() {
    return this.getNumberAttribute('ihl');
  }
  public set ihl(value: number) {
    this._ihl = value;
  }
  public resetIhl() {
    this._ihl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ihlInput() {
    return this._ihl;
  }

  // ip4_id - computed: false, optional: true, required: false
  private _ip4Id?: number; 
  public get ip4Id() {
    return this.getNumberAttribute('ip4_id');
  }
  public set ip4Id(value: number) {
    this._ip4Id = value;
  }
  public resetIp4Id() {
    this._ip4Id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip4IdInput() {
    return this._ip4Id;
  }

  // ip6_fl - computed: false, optional: true, required: false
  private _ip6Fl?: number; 
  public get ip6Fl() {
    return this.getNumberAttribute('ip6_fl');
  }
  public set ip6Fl(value: number) {
    this._ip6Fl = value;
  }
  public resetIp6Fl() {
    this._ip6Fl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6FlInput() {
    return this._ip6Fl;
  }

  // ipver - computed: false, optional: true, required: false
  private _ipver?: number; 
  public get ipver() {
    return this.getNumberAttribute('ipver');
  }
  public set ipver(value: number) {
    this._ipver = value;
  }
  public resetIpver() {
    this._ipver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipverInput() {
    return this._ipver;
  }

  // l4_wd10 - computed: false, optional: true, required: false
  private _l4Wd10?: number; 
  public get l4Wd10() {
    return this.getNumberAttribute('l4_wd10');
  }
  public set l4Wd10(value: number) {
    this._l4Wd10 = value;
  }
  public resetL4Wd10() {
    this._l4Wd10 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4Wd10Input() {
    return this._l4Wd10;
  }

  // l4_wd11 - computed: false, optional: true, required: false
  private _l4Wd11?: number; 
  public get l4Wd11() {
    return this.getNumberAttribute('l4_wd11');
  }
  public set l4Wd11(value: number) {
    this._l4Wd11 = value;
  }
  public resetL4Wd11() {
    this._l4Wd11 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4Wd11Input() {
    return this._l4Wd11;
  }

  // l4_wd8 - computed: false, optional: true, required: false
  private _l4Wd8?: number; 
  public get l4Wd8() {
    return this.getNumberAttribute('l4_wd8');
  }
  public set l4Wd8(value: number) {
    this._l4Wd8 = value;
  }
  public resetL4Wd8() {
    this._l4Wd8 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4Wd8Input() {
    return this._l4Wd8;
  }

  // l4_wd9 - computed: false, optional: true, required: false
  private _l4Wd9?: number; 
  public get l4Wd9() {
    return this.getNumberAttribute('l4_wd9');
  }
  public set l4Wd9(value: number) {
    this._l4Wd9 = value;
  }
  public resetL4Wd9() {
    this._l4Wd9 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4Wd9Input() {
    return this._l4Wd9;
  }

  // mf - computed: true, optional: true, required: false
  private _mf?: string; 
  public get mf() {
    return this.getStringAttribute('mf');
  }
  public set mf(value: string) {
    this._mf = value;
  }
  public resetMf() {
    this._mf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mfInput() {
    return this._mf;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: number; 
  public get protocol() {
    return this.getNumberAttribute('protocol');
  }
  public set protocol(value: number) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // slink - computed: false, optional: true, required: false
  private _slink?: number; 
  public get slink() {
    return this.getNumberAttribute('slink');
  }
  public set slink(value: number) {
    this._slink = value;
  }
  public resetSlink() {
    this._slink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slinkInput() {
    return this._slink;
  }

  // smac_change - computed: true, optional: true, required: false
  private _smacChange?: string; 
  public get smacChange() {
    return this.getStringAttribute('smac_change');
  }
  public set smacChange(value: string) {
    this._smacChange = value;
  }
  public resetSmacChange() {
    this._smacChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smacChangeInput() {
    return this._smacChange;
  }

  // sp - computed: false, optional: true, required: false
  private _sp?: number; 
  public get sp() {
    return this.getNumberAttribute('sp');
  }
  public set sp(value: number) {
    this._sp = value;
  }
  public resetSp() {
    this._sp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spInput() {
    return this._sp;
  }

  // src_cfi - computed: true, optional: true, required: false
  private _srcCfi?: string; 
  public get srcCfi() {
    return this.getStringAttribute('src_cfi');
  }
  public set srcCfi(value: string) {
    this._srcCfi = value;
  }
  public resetSrcCfi() {
    this._srcCfi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcCfiInput() {
    return this._srcCfi;
  }

  // src_prio - computed: false, optional: true, required: false
  private _srcPrio?: number; 
  public get srcPrio() {
    return this.getNumberAttribute('src_prio');
  }
  public set srcPrio(value: number) {
    this._srcPrio = value;
  }
  public resetSrcPrio() {
    this._srcPrio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPrioInput() {
    return this._srcPrio;
  }

  // src_updt - computed: true, optional: true, required: false
  private _srcUpdt?: string; 
  public get srcUpdt() {
    return this.getStringAttribute('src_updt');
  }
  public set srcUpdt(value: string) {
    this._srcUpdt = value;
  }
  public resetSrcUpdt() {
    this._srcUpdt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcUpdtInput() {
    return this._srcUpdt;
  }

  // srcip - computed: true, optional: true, required: false
  private _srcip?: string; 
  public get srcip() {
    return this.getStringAttribute('srcip');
  }
  public set srcip(value: string) {
    this._srcip = value;
  }
  public resetSrcip() {
    this._srcip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcipInput() {
    return this._srcip;
  }

  // srcipv6 - computed: true, optional: true, required: false
  private _srcipv6?: string; 
  public get srcipv6() {
    return this.getStringAttribute('srcipv6');
  }
  public set srcipv6(value: string) {
    this._srcipv6 = value;
  }
  public resetSrcipv6() {
    this._srcipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcipv6Input() {
    return this._srcipv6;
  }

  // srcmac - computed: true, optional: true, required: false
  private _srcmac?: string; 
  public get srcmac() {
    return this.getStringAttribute('srcmac');
  }
  public set srcmac(value: string) {
    this._srcmac = value;
  }
  public resetSrcmac() {
    this._srcmac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcmacInput() {
    return this._srcmac;
  }

  // srcport - computed: false, optional: true, required: false
  private _srcport?: number; 
  public get srcport() {
    return this.getNumberAttribute('srcport');
  }
  public set srcport(value: number) {
    this._srcport = value;
  }
  public resetSrcport() {
    this._srcport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcportInput() {
    return this._srcport;
  }

  // svid - computed: false, optional: true, required: false
  private _svid?: number; 
  public get svid() {
    return this.getNumberAttribute('svid');
  }
  public set svid(value: number) {
    this._svid = value;
  }
  public resetSvid() {
    this._svid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get svidInput() {
    return this._svid;
  }

  // tcp_ack - computed: true, optional: true, required: false
  private _tcpAck?: string; 
  public get tcpAck() {
    return this.getStringAttribute('tcp_ack');
  }
  public set tcpAck(value: string) {
    this._tcpAck = value;
  }
  public resetTcpAck() {
    this._tcpAck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpAckInput() {
    return this._tcpAck;
  }

  // tcp_cwr - computed: true, optional: true, required: false
  private _tcpCwr?: string; 
  public get tcpCwr() {
    return this.getStringAttribute('tcp_cwr');
  }
  public set tcpCwr(value: string) {
    this._tcpCwr = value;
  }
  public resetTcpCwr() {
    this._tcpCwr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpCwrInput() {
    return this._tcpCwr;
  }

  // tcp_ece - computed: true, optional: true, required: false
  private _tcpEce?: string; 
  public get tcpEce() {
    return this.getStringAttribute('tcp_ece');
  }
  public set tcpEce(value: string) {
    this._tcpEce = value;
  }
  public resetTcpEce() {
    this._tcpEce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpEceInput() {
    return this._tcpEce;
  }

  // tcp_fin - computed: true, optional: true, required: false
  private _tcpFin?: string; 
  public get tcpFin() {
    return this.getStringAttribute('tcp_fin');
  }
  public set tcpFin(value: string) {
    this._tcpFin = value;
  }
  public resetTcpFin() {
    this._tcpFin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFinInput() {
    return this._tcpFin;
  }

  // tcp_push - computed: true, optional: true, required: false
  private _tcpPush?: string; 
  public get tcpPush() {
    return this.getStringAttribute('tcp_push');
  }
  public set tcpPush(value: string) {
    this._tcpPush = value;
  }
  public resetTcpPush() {
    this._tcpPush = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPushInput() {
    return this._tcpPush;
  }

  // tcp_rst - computed: true, optional: true, required: false
  private _tcpRst?: string; 
  public get tcpRst() {
    return this.getStringAttribute('tcp_rst');
  }
  public set tcpRst(value: string) {
    this._tcpRst = value;
  }
  public resetTcpRst() {
    this._tcpRst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpRstInput() {
    return this._tcpRst;
  }

  // tcp_syn - computed: true, optional: true, required: false
  private _tcpSyn?: string; 
  public get tcpSyn() {
    return this.getStringAttribute('tcp_syn');
  }
  public set tcpSyn(value: string) {
    this._tcpSyn = value;
  }
  public resetTcpSyn() {
    this._tcpSyn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSynInput() {
    return this._tcpSyn;
  }

  // tcp_urg - computed: true, optional: true, required: false
  private _tcpUrg?: string; 
  public get tcpUrg() {
    return this.getStringAttribute('tcp_urg');
  }
  public set tcpUrg(value: string) {
    this._tcpUrg = value;
  }
  public resetTcpUrg() {
    this._tcpUrg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpUrgInput() {
    return this._tcpUrg;
  }

  // tgt_cfi - computed: true, optional: true, required: false
  private _tgtCfi?: string; 
  public get tgtCfi() {
    return this.getStringAttribute('tgt_cfi');
  }
  public set tgtCfi(value: string) {
    this._tgtCfi = value;
  }
  public resetTgtCfi() {
    this._tgtCfi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tgtCfiInput() {
    return this._tgtCfi;
  }

  // tgt_prio - computed: false, optional: true, required: false
  private _tgtPrio?: number; 
  public get tgtPrio() {
    return this.getNumberAttribute('tgt_prio');
  }
  public set tgtPrio(value: number) {
    this._tgtPrio = value;
  }
  public resetTgtPrio() {
    this._tgtPrio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tgtPrioInput() {
    return this._tgtPrio;
  }

  // tgt_updt - computed: true, optional: true, required: false
  private _tgtUpdt?: string; 
  public get tgtUpdt() {
    return this.getStringAttribute('tgt_updt');
  }
  public set tgtUpdt(value: string) {
    this._tgtUpdt = value;
  }
  public resetTgtUpdt() {
    this._tgtUpdt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tgtUpdtInput() {
    return this._tgtUpdt;
  }

  // tgt_v - computed: true, optional: true, required: false
  private _tgtV?: string; 
  public get tgtV() {
    return this.getStringAttribute('tgt_v');
  }
  public set tgtV(value: string) {
    this._tgtV = value;
  }
  public resetTgtV() {
    this._tgtV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tgtVInput() {
    return this._tgtV;
  }

  // tos - computed: false, optional: true, required: false
  private _tos?: number; 
  public get tos() {
    return this.getNumberAttribute('tos');
  }
  public set tos(value: number) {
    this._tos = value;
  }
  public resetTos() {
    this._tos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tosInput() {
    return this._tos;
  }

  // tp - computed: false, optional: true, required: false
  private _tp?: number; 
  public get tp() {
    return this.getNumberAttribute('tp');
  }
  public set tp(value: number) {
    this._tp = value;
  }
  public resetTp() {
    this._tp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tpInput() {
    return this._tp;
  }

  // ttl - computed: false, optional: true, required: false
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

  // tvid - computed: false, optional: true, required: false
  private _tvid?: number; 
  public get tvid() {
    return this.getNumberAttribute('tvid');
  }
  public set tvid(value: number) {
    this._tvid = value;
  }
  public resetTvid() {
    this._tvid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tvidInput() {
    return this._tvid;
  }

  // vdid - computed: false, optional: true, required: false
  private _vdid?: number; 
  public get vdid() {
    return this.getNumberAttribute('vdid');
  }
  public set vdid(value: number) {
    this._vdid = value;
  }
  public resetVdid() {
    this._vdid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdidInput() {
    return this._vdid;
  }
}
export interface ObjectSystemNpuNpuTcamMask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#df ObjectSystemNpu#df}
  */
  readonly df?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dstip ObjectSystemNpu#dstip}
  */
  readonly dstip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dstipv6 ObjectSystemNpu#dstipv6}
  */
  readonly dstipv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dstmac ObjectSystemNpu#dstmac}
  */
  readonly dstmac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dstport ObjectSystemNpu#dstport}
  */
  readonly dstport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#ethertype ObjectSystemNpu#ethertype}
  */
  readonly ethertype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#ext_tag ObjectSystemNpu#ext_tag}
  */
  readonly extTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#frag_off ObjectSystemNpu#frag_off}
  */
  readonly fragOff?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#gen_buf_cnt ObjectSystemNpu#gen_buf_cnt}
  */
  readonly genBufCnt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#gen_iv ObjectSystemNpu#gen_iv}
  */
  readonly genIv?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#gen_l3_flags ObjectSystemNpu#gen_l3_flags}
  */
  readonly genL3Flags?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#gen_l4_flags ObjectSystemNpu#gen_l4_flags}
  */
  readonly genL4Flags?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#gen_pkt_ctrl ObjectSystemNpu#gen_pkt_ctrl}
  */
  readonly genPktCtrl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#gen_pri ObjectSystemNpu#gen_pri}
  */
  readonly genPri?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#gen_pri_v ObjectSystemNpu#gen_pri_v}
  */
  readonly genPriV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#gen_tv ObjectSystemNpu#gen_tv}
  */
  readonly genTv?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#ihl ObjectSystemNpu#ihl}
  */
  readonly ihl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#ip4_id ObjectSystemNpu#ip4_id}
  */
  readonly ip4Id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#ip6_fl ObjectSystemNpu#ip6_fl}
  */
  readonly ip6Fl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#ipver ObjectSystemNpu#ipver}
  */
  readonly ipver?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#l4_wd10 ObjectSystemNpu#l4_wd10}
  */
  readonly l4Wd10?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#l4_wd11 ObjectSystemNpu#l4_wd11}
  */
  readonly l4Wd11?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#l4_wd8 ObjectSystemNpu#l4_wd8}
  */
  readonly l4Wd8?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#l4_wd9 ObjectSystemNpu#l4_wd9}
  */
  readonly l4Wd9?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#mf ObjectSystemNpu#mf}
  */
  readonly mf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#protocol ObjectSystemNpu#protocol}
  */
  readonly protocol?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#slink ObjectSystemNpu#slink}
  */
  readonly slink?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#smac_change ObjectSystemNpu#smac_change}
  */
  readonly smacChange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#sp ObjectSystemNpu#sp}
  */
  readonly sp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#src_cfi ObjectSystemNpu#src_cfi}
  */
  readonly srcCfi?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#src_prio ObjectSystemNpu#src_prio}
  */
  readonly srcPrio?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#src_updt ObjectSystemNpu#src_updt}
  */
  readonly srcUpdt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#srcip ObjectSystemNpu#srcip}
  */
  readonly srcip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#srcipv6 ObjectSystemNpu#srcipv6}
  */
  readonly srcipv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#srcmac ObjectSystemNpu#srcmac}
  */
  readonly srcmac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#srcport ObjectSystemNpu#srcport}
  */
  readonly srcport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#svid ObjectSystemNpu#svid}
  */
  readonly svid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#tcp_ack ObjectSystemNpu#tcp_ack}
  */
  readonly tcpAck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#tcp_cwr ObjectSystemNpu#tcp_cwr}
  */
  readonly tcpCwr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#tcp_ece ObjectSystemNpu#tcp_ece}
  */
  readonly tcpEce?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#tcp_fin ObjectSystemNpu#tcp_fin}
  */
  readonly tcpFin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#tcp_push ObjectSystemNpu#tcp_push}
  */
  readonly tcpPush?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#tcp_rst ObjectSystemNpu#tcp_rst}
  */
  readonly tcpRst?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#tcp_syn ObjectSystemNpu#tcp_syn}
  */
  readonly tcpSyn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#tcp_urg ObjectSystemNpu#tcp_urg}
  */
  readonly tcpUrg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#tgt_cfi ObjectSystemNpu#tgt_cfi}
  */
  readonly tgtCfi?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#tgt_prio ObjectSystemNpu#tgt_prio}
  */
  readonly tgtPrio?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#tgt_updt ObjectSystemNpu#tgt_updt}
  */
  readonly tgtUpdt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#tgt_v ObjectSystemNpu#tgt_v}
  */
  readonly tgtV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#tos ObjectSystemNpu#tos}
  */
  readonly tos?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#tp ObjectSystemNpu#tp}
  */
  readonly tp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#ttl ObjectSystemNpu#ttl}
  */
  readonly ttl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#tvid ObjectSystemNpu#tvid}
  */
  readonly tvid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#vdid ObjectSystemNpu#vdid}
  */
  readonly vdid?: number;
}

export function objectSystemNpuNpuTcamMaskToTerraform(struct?: ObjectSystemNpuNpuTcamMaskOutputReference | ObjectSystemNpuNpuTcamMask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    df: cdktf.stringToTerraform(struct!.df),
    dstip: cdktf.stringToTerraform(struct!.dstip),
    dstipv6: cdktf.stringToTerraform(struct!.dstipv6),
    dstmac: cdktf.stringToTerraform(struct!.dstmac),
    dstport: cdktf.numberToTerraform(struct!.dstport),
    ethertype: cdktf.stringToTerraform(struct!.ethertype),
    ext_tag: cdktf.stringToTerraform(struct!.extTag),
    frag_off: cdktf.numberToTerraform(struct!.fragOff),
    gen_buf_cnt: cdktf.numberToTerraform(struct!.genBufCnt),
    gen_iv: cdktf.stringToTerraform(struct!.genIv),
    gen_l3_flags: cdktf.numberToTerraform(struct!.genL3Flags),
    gen_l4_flags: cdktf.numberToTerraform(struct!.genL4Flags),
    gen_pkt_ctrl: cdktf.numberToTerraform(struct!.genPktCtrl),
    gen_pri: cdktf.numberToTerraform(struct!.genPri),
    gen_pri_v: cdktf.stringToTerraform(struct!.genPriV),
    gen_tv: cdktf.stringToTerraform(struct!.genTv),
    ihl: cdktf.numberToTerraform(struct!.ihl),
    ip4_id: cdktf.numberToTerraform(struct!.ip4Id),
    ip6_fl: cdktf.numberToTerraform(struct!.ip6Fl),
    ipver: cdktf.numberToTerraform(struct!.ipver),
    l4_wd10: cdktf.numberToTerraform(struct!.l4Wd10),
    l4_wd11: cdktf.numberToTerraform(struct!.l4Wd11),
    l4_wd8: cdktf.numberToTerraform(struct!.l4Wd8),
    l4_wd9: cdktf.numberToTerraform(struct!.l4Wd9),
    mf: cdktf.stringToTerraform(struct!.mf),
    protocol: cdktf.numberToTerraform(struct!.protocol),
    slink: cdktf.numberToTerraform(struct!.slink),
    smac_change: cdktf.stringToTerraform(struct!.smacChange),
    sp: cdktf.numberToTerraform(struct!.sp),
    src_cfi: cdktf.stringToTerraform(struct!.srcCfi),
    src_prio: cdktf.numberToTerraform(struct!.srcPrio),
    src_updt: cdktf.stringToTerraform(struct!.srcUpdt),
    srcip: cdktf.stringToTerraform(struct!.srcip),
    srcipv6: cdktf.stringToTerraform(struct!.srcipv6),
    srcmac: cdktf.stringToTerraform(struct!.srcmac),
    srcport: cdktf.numberToTerraform(struct!.srcport),
    svid: cdktf.numberToTerraform(struct!.svid),
    tcp_ack: cdktf.stringToTerraform(struct!.tcpAck),
    tcp_cwr: cdktf.stringToTerraform(struct!.tcpCwr),
    tcp_ece: cdktf.stringToTerraform(struct!.tcpEce),
    tcp_fin: cdktf.stringToTerraform(struct!.tcpFin),
    tcp_push: cdktf.stringToTerraform(struct!.tcpPush),
    tcp_rst: cdktf.stringToTerraform(struct!.tcpRst),
    tcp_syn: cdktf.stringToTerraform(struct!.tcpSyn),
    tcp_urg: cdktf.stringToTerraform(struct!.tcpUrg),
    tgt_cfi: cdktf.stringToTerraform(struct!.tgtCfi),
    tgt_prio: cdktf.numberToTerraform(struct!.tgtPrio),
    tgt_updt: cdktf.stringToTerraform(struct!.tgtUpdt),
    tgt_v: cdktf.stringToTerraform(struct!.tgtV),
    tos: cdktf.numberToTerraform(struct!.tos),
    tp: cdktf.numberToTerraform(struct!.tp),
    ttl: cdktf.numberToTerraform(struct!.ttl),
    tvid: cdktf.numberToTerraform(struct!.tvid),
    vdid: cdktf.numberToTerraform(struct!.vdid),
  }
}


export function objectSystemNpuNpuTcamMaskToHclTerraform(struct?: ObjectSystemNpuNpuTcamMaskOutputReference | ObjectSystemNpuNpuTcamMask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    df: {
      value: cdktf.stringToHclTerraform(struct!.df),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dstip: {
      value: cdktf.stringToHclTerraform(struct!.dstip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dstipv6: {
      value: cdktf.stringToHclTerraform(struct!.dstipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dstmac: {
      value: cdktf.stringToHclTerraform(struct!.dstmac),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dstport: {
      value: cdktf.numberToHclTerraform(struct!.dstport),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ethertype: {
      value: cdktf.stringToHclTerraform(struct!.ethertype),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ext_tag: {
      value: cdktf.stringToHclTerraform(struct!.extTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    frag_off: {
      value: cdktf.numberToHclTerraform(struct!.fragOff),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gen_buf_cnt: {
      value: cdktf.numberToHclTerraform(struct!.genBufCnt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gen_iv: {
      value: cdktf.stringToHclTerraform(struct!.genIv),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gen_l3_flags: {
      value: cdktf.numberToHclTerraform(struct!.genL3Flags),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gen_l4_flags: {
      value: cdktf.numberToHclTerraform(struct!.genL4Flags),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gen_pkt_ctrl: {
      value: cdktf.numberToHclTerraform(struct!.genPktCtrl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gen_pri: {
      value: cdktf.numberToHclTerraform(struct!.genPri),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gen_pri_v: {
      value: cdktf.stringToHclTerraform(struct!.genPriV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gen_tv: {
      value: cdktf.stringToHclTerraform(struct!.genTv),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ihl: {
      value: cdktf.numberToHclTerraform(struct!.ihl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip4_id: {
      value: cdktf.numberToHclTerraform(struct!.ip4Id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip6_fl: {
      value: cdktf.numberToHclTerraform(struct!.ip6Fl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipver: {
      value: cdktf.numberToHclTerraform(struct!.ipver),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l4_wd10: {
      value: cdktf.numberToHclTerraform(struct!.l4Wd10),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l4_wd11: {
      value: cdktf.numberToHclTerraform(struct!.l4Wd11),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l4_wd8: {
      value: cdktf.numberToHclTerraform(struct!.l4Wd8),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l4_wd9: {
      value: cdktf.numberToHclTerraform(struct!.l4Wd9),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mf: {
      value: cdktf.stringToHclTerraform(struct!.mf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.numberToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slink: {
      value: cdktf.numberToHclTerraform(struct!.slink),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    smac_change: {
      value: cdktf.stringToHclTerraform(struct!.smacChange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sp: {
      value: cdktf.numberToHclTerraform(struct!.sp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_cfi: {
      value: cdktf.stringToHclTerraform(struct!.srcCfi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_prio: {
      value: cdktf.numberToHclTerraform(struct!.srcPrio),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_updt: {
      value: cdktf.stringToHclTerraform(struct!.srcUpdt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    srcip: {
      value: cdktf.stringToHclTerraform(struct!.srcip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    srcipv6: {
      value: cdktf.stringToHclTerraform(struct!.srcipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    srcmac: {
      value: cdktf.stringToHclTerraform(struct!.srcmac),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    srcport: {
      value: cdktf.numberToHclTerraform(struct!.srcport),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    svid: {
      value: cdktf.numberToHclTerraform(struct!.svid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_ack: {
      value: cdktf.stringToHclTerraform(struct!.tcpAck),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_cwr: {
      value: cdktf.stringToHclTerraform(struct!.tcpCwr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_ece: {
      value: cdktf.stringToHclTerraform(struct!.tcpEce),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_fin: {
      value: cdktf.stringToHclTerraform(struct!.tcpFin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_push: {
      value: cdktf.stringToHclTerraform(struct!.tcpPush),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_rst: {
      value: cdktf.stringToHclTerraform(struct!.tcpRst),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_syn: {
      value: cdktf.stringToHclTerraform(struct!.tcpSyn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_urg: {
      value: cdktf.stringToHclTerraform(struct!.tcpUrg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tgt_cfi: {
      value: cdktf.stringToHclTerraform(struct!.tgtCfi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tgt_prio: {
      value: cdktf.numberToHclTerraform(struct!.tgtPrio),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tgt_updt: {
      value: cdktf.stringToHclTerraform(struct!.tgtUpdt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tgt_v: {
      value: cdktf.stringToHclTerraform(struct!.tgtV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tos: {
      value: cdktf.numberToHclTerraform(struct!.tos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tp: {
      value: cdktf.numberToHclTerraform(struct!.tp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tvid: {
      value: cdktf.numberToHclTerraform(struct!.tvid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vdid: {
      value: cdktf.numberToHclTerraform(struct!.vdid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectSystemNpuNpuTcamMaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectSystemNpuNpuTcamMask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._df !== undefined) {
      hasAnyValues = true;
      internalValueResult.df = this._df;
    }
    if (this._dstip !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstip = this._dstip;
    }
    if (this._dstipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstipv6 = this._dstipv6;
    }
    if (this._dstmac !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstmac = this._dstmac;
    }
    if (this._dstport !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstport = this._dstport;
    }
    if (this._ethertype !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethertype = this._ethertype;
    }
    if (this._extTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.extTag = this._extTag;
    }
    if (this._fragOff !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragOff = this._fragOff;
    }
    if (this._genBufCnt !== undefined) {
      hasAnyValues = true;
      internalValueResult.genBufCnt = this._genBufCnt;
    }
    if (this._genIv !== undefined) {
      hasAnyValues = true;
      internalValueResult.genIv = this._genIv;
    }
    if (this._genL3Flags !== undefined) {
      hasAnyValues = true;
      internalValueResult.genL3Flags = this._genL3Flags;
    }
    if (this._genL4Flags !== undefined) {
      hasAnyValues = true;
      internalValueResult.genL4Flags = this._genL4Flags;
    }
    if (this._genPktCtrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.genPktCtrl = this._genPktCtrl;
    }
    if (this._genPri !== undefined) {
      hasAnyValues = true;
      internalValueResult.genPri = this._genPri;
    }
    if (this._genPriV !== undefined) {
      hasAnyValues = true;
      internalValueResult.genPriV = this._genPriV;
    }
    if (this._genTv !== undefined) {
      hasAnyValues = true;
      internalValueResult.genTv = this._genTv;
    }
    if (this._ihl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ihl = this._ihl;
    }
    if (this._ip4Id !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip4Id = this._ip4Id;
    }
    if (this._ip6Fl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6Fl = this._ip6Fl;
    }
    if (this._ipver !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipver = this._ipver;
    }
    if (this._l4Wd10 !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4Wd10 = this._l4Wd10;
    }
    if (this._l4Wd11 !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4Wd11 = this._l4Wd11;
    }
    if (this._l4Wd8 !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4Wd8 = this._l4Wd8;
    }
    if (this._l4Wd9 !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4Wd9 = this._l4Wd9;
    }
    if (this._mf !== undefined) {
      hasAnyValues = true;
      internalValueResult.mf = this._mf;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._slink !== undefined) {
      hasAnyValues = true;
      internalValueResult.slink = this._slink;
    }
    if (this._smacChange !== undefined) {
      hasAnyValues = true;
      internalValueResult.smacChange = this._smacChange;
    }
    if (this._sp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sp = this._sp;
    }
    if (this._srcCfi !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcCfi = this._srcCfi;
    }
    if (this._srcPrio !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcPrio = this._srcPrio;
    }
    if (this._srcUpdt !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcUpdt = this._srcUpdt;
    }
    if (this._srcip !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcip = this._srcip;
    }
    if (this._srcipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcipv6 = this._srcipv6;
    }
    if (this._srcmac !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcmac = this._srcmac;
    }
    if (this._srcport !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcport = this._srcport;
    }
    if (this._svid !== undefined) {
      hasAnyValues = true;
      internalValueResult.svid = this._svid;
    }
    if (this._tcpAck !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpAck = this._tcpAck;
    }
    if (this._tcpCwr !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpCwr = this._tcpCwr;
    }
    if (this._tcpEce !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpEce = this._tcpEce;
    }
    if (this._tcpFin !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFin = this._tcpFin;
    }
    if (this._tcpPush !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpPush = this._tcpPush;
    }
    if (this._tcpRst !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpRst = this._tcpRst;
    }
    if (this._tcpSyn !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSyn = this._tcpSyn;
    }
    if (this._tcpUrg !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpUrg = this._tcpUrg;
    }
    if (this._tgtCfi !== undefined) {
      hasAnyValues = true;
      internalValueResult.tgtCfi = this._tgtCfi;
    }
    if (this._tgtPrio !== undefined) {
      hasAnyValues = true;
      internalValueResult.tgtPrio = this._tgtPrio;
    }
    if (this._tgtUpdt !== undefined) {
      hasAnyValues = true;
      internalValueResult.tgtUpdt = this._tgtUpdt;
    }
    if (this._tgtV !== undefined) {
      hasAnyValues = true;
      internalValueResult.tgtV = this._tgtV;
    }
    if (this._tos !== undefined) {
      hasAnyValues = true;
      internalValueResult.tos = this._tos;
    }
    if (this._tp !== undefined) {
      hasAnyValues = true;
      internalValueResult.tp = this._tp;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._tvid !== undefined) {
      hasAnyValues = true;
      internalValueResult.tvid = this._tvid;
    }
    if (this._vdid !== undefined) {
      hasAnyValues = true;
      internalValueResult.vdid = this._vdid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectSystemNpuNpuTcamMask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._df = undefined;
      this._dstip = undefined;
      this._dstipv6 = undefined;
      this._dstmac = undefined;
      this._dstport = undefined;
      this._ethertype = undefined;
      this._extTag = undefined;
      this._fragOff = undefined;
      this._genBufCnt = undefined;
      this._genIv = undefined;
      this._genL3Flags = undefined;
      this._genL4Flags = undefined;
      this._genPktCtrl = undefined;
      this._genPri = undefined;
      this._genPriV = undefined;
      this._genTv = undefined;
      this._ihl = undefined;
      this._ip4Id = undefined;
      this._ip6Fl = undefined;
      this._ipver = undefined;
      this._l4Wd10 = undefined;
      this._l4Wd11 = undefined;
      this._l4Wd8 = undefined;
      this._l4Wd9 = undefined;
      this._mf = undefined;
      this._protocol = undefined;
      this._slink = undefined;
      this._smacChange = undefined;
      this._sp = undefined;
      this._srcCfi = undefined;
      this._srcPrio = undefined;
      this._srcUpdt = undefined;
      this._srcip = undefined;
      this._srcipv6 = undefined;
      this._srcmac = undefined;
      this._srcport = undefined;
      this._svid = undefined;
      this._tcpAck = undefined;
      this._tcpCwr = undefined;
      this._tcpEce = undefined;
      this._tcpFin = undefined;
      this._tcpPush = undefined;
      this._tcpRst = undefined;
      this._tcpSyn = undefined;
      this._tcpUrg = undefined;
      this._tgtCfi = undefined;
      this._tgtPrio = undefined;
      this._tgtUpdt = undefined;
      this._tgtV = undefined;
      this._tos = undefined;
      this._tp = undefined;
      this._ttl = undefined;
      this._tvid = undefined;
      this._vdid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._df = value.df;
      this._dstip = value.dstip;
      this._dstipv6 = value.dstipv6;
      this._dstmac = value.dstmac;
      this._dstport = value.dstport;
      this._ethertype = value.ethertype;
      this._extTag = value.extTag;
      this._fragOff = value.fragOff;
      this._genBufCnt = value.genBufCnt;
      this._genIv = value.genIv;
      this._genL3Flags = value.genL3Flags;
      this._genL4Flags = value.genL4Flags;
      this._genPktCtrl = value.genPktCtrl;
      this._genPri = value.genPri;
      this._genPriV = value.genPriV;
      this._genTv = value.genTv;
      this._ihl = value.ihl;
      this._ip4Id = value.ip4Id;
      this._ip6Fl = value.ip6Fl;
      this._ipver = value.ipver;
      this._l4Wd10 = value.l4Wd10;
      this._l4Wd11 = value.l4Wd11;
      this._l4Wd8 = value.l4Wd8;
      this._l4Wd9 = value.l4Wd9;
      this._mf = value.mf;
      this._protocol = value.protocol;
      this._slink = value.slink;
      this._smacChange = value.smacChange;
      this._sp = value.sp;
      this._srcCfi = value.srcCfi;
      this._srcPrio = value.srcPrio;
      this._srcUpdt = value.srcUpdt;
      this._srcip = value.srcip;
      this._srcipv6 = value.srcipv6;
      this._srcmac = value.srcmac;
      this._srcport = value.srcport;
      this._svid = value.svid;
      this._tcpAck = value.tcpAck;
      this._tcpCwr = value.tcpCwr;
      this._tcpEce = value.tcpEce;
      this._tcpFin = value.tcpFin;
      this._tcpPush = value.tcpPush;
      this._tcpRst = value.tcpRst;
      this._tcpSyn = value.tcpSyn;
      this._tcpUrg = value.tcpUrg;
      this._tgtCfi = value.tgtCfi;
      this._tgtPrio = value.tgtPrio;
      this._tgtUpdt = value.tgtUpdt;
      this._tgtV = value.tgtV;
      this._tos = value.tos;
      this._tp = value.tp;
      this._ttl = value.ttl;
      this._tvid = value.tvid;
      this._vdid = value.vdid;
    }
  }

  // df - computed: true, optional: true, required: false
  private _df?: string; 
  public get df() {
    return this.getStringAttribute('df');
  }
  public set df(value: string) {
    this._df = value;
  }
  public resetDf() {
    this._df = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dfInput() {
    return this._df;
  }

  // dstip - computed: true, optional: true, required: false
  private _dstip?: string; 
  public get dstip() {
    return this.getStringAttribute('dstip');
  }
  public set dstip(value: string) {
    this._dstip = value;
  }
  public resetDstip() {
    this._dstip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstipInput() {
    return this._dstip;
  }

  // dstipv6 - computed: true, optional: true, required: false
  private _dstipv6?: string; 
  public get dstipv6() {
    return this.getStringAttribute('dstipv6');
  }
  public set dstipv6(value: string) {
    this._dstipv6 = value;
  }
  public resetDstipv6() {
    this._dstipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstipv6Input() {
    return this._dstipv6;
  }

  // dstmac - computed: true, optional: true, required: false
  private _dstmac?: string; 
  public get dstmac() {
    return this.getStringAttribute('dstmac');
  }
  public set dstmac(value: string) {
    this._dstmac = value;
  }
  public resetDstmac() {
    this._dstmac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstmacInput() {
    return this._dstmac;
  }

  // dstport - computed: false, optional: true, required: false
  private _dstport?: number; 
  public get dstport() {
    return this.getNumberAttribute('dstport');
  }
  public set dstport(value: number) {
    this._dstport = value;
  }
  public resetDstport() {
    this._dstport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstportInput() {
    return this._dstport;
  }

  // ethertype - computed: true, optional: true, required: false
  private _ethertype?: string; 
  public get ethertype() {
    return this.getStringAttribute('ethertype');
  }
  public set ethertype(value: string) {
    this._ethertype = value;
  }
  public resetEthertype() {
    this._ethertype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethertypeInput() {
    return this._ethertype;
  }

  // ext_tag - computed: true, optional: true, required: false
  private _extTag?: string; 
  public get extTag() {
    return this.getStringAttribute('ext_tag');
  }
  public set extTag(value: string) {
    this._extTag = value;
  }
  public resetExtTag() {
    this._extTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extTagInput() {
    return this._extTag;
  }

  // frag_off - computed: false, optional: true, required: false
  private _fragOff?: number; 
  public get fragOff() {
    return this.getNumberAttribute('frag_off');
  }
  public set fragOff(value: number) {
    this._fragOff = value;
  }
  public resetFragOff() {
    this._fragOff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragOffInput() {
    return this._fragOff;
  }

  // gen_buf_cnt - computed: false, optional: true, required: false
  private _genBufCnt?: number; 
  public get genBufCnt() {
    return this.getNumberAttribute('gen_buf_cnt');
  }
  public set genBufCnt(value: number) {
    this._genBufCnt = value;
  }
  public resetGenBufCnt() {
    this._genBufCnt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genBufCntInput() {
    return this._genBufCnt;
  }

  // gen_iv - computed: true, optional: true, required: false
  private _genIv?: string; 
  public get genIv() {
    return this.getStringAttribute('gen_iv');
  }
  public set genIv(value: string) {
    this._genIv = value;
  }
  public resetGenIv() {
    this._genIv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genIvInput() {
    return this._genIv;
  }

  // gen_l3_flags - computed: false, optional: true, required: false
  private _genL3Flags?: number; 
  public get genL3Flags() {
    return this.getNumberAttribute('gen_l3_flags');
  }
  public set genL3Flags(value: number) {
    this._genL3Flags = value;
  }
  public resetGenL3Flags() {
    this._genL3Flags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genL3FlagsInput() {
    return this._genL3Flags;
  }

  // gen_l4_flags - computed: false, optional: true, required: false
  private _genL4Flags?: number; 
  public get genL4Flags() {
    return this.getNumberAttribute('gen_l4_flags');
  }
  public set genL4Flags(value: number) {
    this._genL4Flags = value;
  }
  public resetGenL4Flags() {
    this._genL4Flags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genL4FlagsInput() {
    return this._genL4Flags;
  }

  // gen_pkt_ctrl - computed: false, optional: true, required: false
  private _genPktCtrl?: number; 
  public get genPktCtrl() {
    return this.getNumberAttribute('gen_pkt_ctrl');
  }
  public set genPktCtrl(value: number) {
    this._genPktCtrl = value;
  }
  public resetGenPktCtrl() {
    this._genPktCtrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genPktCtrlInput() {
    return this._genPktCtrl;
  }

  // gen_pri - computed: false, optional: true, required: false
  private _genPri?: number; 
  public get genPri() {
    return this.getNumberAttribute('gen_pri');
  }
  public set genPri(value: number) {
    this._genPri = value;
  }
  public resetGenPri() {
    this._genPri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genPriInput() {
    return this._genPri;
  }

  // gen_pri_v - computed: true, optional: true, required: false
  private _genPriV?: string; 
  public get genPriV() {
    return this.getStringAttribute('gen_pri_v');
  }
  public set genPriV(value: string) {
    this._genPriV = value;
  }
  public resetGenPriV() {
    this._genPriV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genPriVInput() {
    return this._genPriV;
  }

  // gen_tv - computed: true, optional: true, required: false
  private _genTv?: string; 
  public get genTv() {
    return this.getStringAttribute('gen_tv');
  }
  public set genTv(value: string) {
    this._genTv = value;
  }
  public resetGenTv() {
    this._genTv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genTvInput() {
    return this._genTv;
  }

  // ihl - computed: false, optional: true, required: false
  private _ihl?: number; 
  public get ihl() {
    return this.getNumberAttribute('ihl');
  }
  public set ihl(value: number) {
    this._ihl = value;
  }
  public resetIhl() {
    this._ihl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ihlInput() {
    return this._ihl;
  }

  // ip4_id - computed: false, optional: true, required: false
  private _ip4Id?: number; 
  public get ip4Id() {
    return this.getNumberAttribute('ip4_id');
  }
  public set ip4Id(value: number) {
    this._ip4Id = value;
  }
  public resetIp4Id() {
    this._ip4Id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip4IdInput() {
    return this._ip4Id;
  }

  // ip6_fl - computed: false, optional: true, required: false
  private _ip6Fl?: number; 
  public get ip6Fl() {
    return this.getNumberAttribute('ip6_fl');
  }
  public set ip6Fl(value: number) {
    this._ip6Fl = value;
  }
  public resetIp6Fl() {
    this._ip6Fl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6FlInput() {
    return this._ip6Fl;
  }

  // ipver - computed: false, optional: true, required: false
  private _ipver?: number; 
  public get ipver() {
    return this.getNumberAttribute('ipver');
  }
  public set ipver(value: number) {
    this._ipver = value;
  }
  public resetIpver() {
    this._ipver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipverInput() {
    return this._ipver;
  }

  // l4_wd10 - computed: false, optional: true, required: false
  private _l4Wd10?: number; 
  public get l4Wd10() {
    return this.getNumberAttribute('l4_wd10');
  }
  public set l4Wd10(value: number) {
    this._l4Wd10 = value;
  }
  public resetL4Wd10() {
    this._l4Wd10 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4Wd10Input() {
    return this._l4Wd10;
  }

  // l4_wd11 - computed: false, optional: true, required: false
  private _l4Wd11?: number; 
  public get l4Wd11() {
    return this.getNumberAttribute('l4_wd11');
  }
  public set l4Wd11(value: number) {
    this._l4Wd11 = value;
  }
  public resetL4Wd11() {
    this._l4Wd11 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4Wd11Input() {
    return this._l4Wd11;
  }

  // l4_wd8 - computed: false, optional: true, required: false
  private _l4Wd8?: number; 
  public get l4Wd8() {
    return this.getNumberAttribute('l4_wd8');
  }
  public set l4Wd8(value: number) {
    this._l4Wd8 = value;
  }
  public resetL4Wd8() {
    this._l4Wd8 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4Wd8Input() {
    return this._l4Wd8;
  }

  // l4_wd9 - computed: false, optional: true, required: false
  private _l4Wd9?: number; 
  public get l4Wd9() {
    return this.getNumberAttribute('l4_wd9');
  }
  public set l4Wd9(value: number) {
    this._l4Wd9 = value;
  }
  public resetL4Wd9() {
    this._l4Wd9 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4Wd9Input() {
    return this._l4Wd9;
  }

  // mf - computed: true, optional: true, required: false
  private _mf?: string; 
  public get mf() {
    return this.getStringAttribute('mf');
  }
  public set mf(value: string) {
    this._mf = value;
  }
  public resetMf() {
    this._mf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mfInput() {
    return this._mf;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: number; 
  public get protocol() {
    return this.getNumberAttribute('protocol');
  }
  public set protocol(value: number) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // slink - computed: false, optional: true, required: false
  private _slink?: number; 
  public get slink() {
    return this.getNumberAttribute('slink');
  }
  public set slink(value: number) {
    this._slink = value;
  }
  public resetSlink() {
    this._slink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slinkInput() {
    return this._slink;
  }

  // smac_change - computed: true, optional: true, required: false
  private _smacChange?: string; 
  public get smacChange() {
    return this.getStringAttribute('smac_change');
  }
  public set smacChange(value: string) {
    this._smacChange = value;
  }
  public resetSmacChange() {
    this._smacChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smacChangeInput() {
    return this._smacChange;
  }

  // sp - computed: false, optional: true, required: false
  private _sp?: number; 
  public get sp() {
    return this.getNumberAttribute('sp');
  }
  public set sp(value: number) {
    this._sp = value;
  }
  public resetSp() {
    this._sp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spInput() {
    return this._sp;
  }

  // src_cfi - computed: true, optional: true, required: false
  private _srcCfi?: string; 
  public get srcCfi() {
    return this.getStringAttribute('src_cfi');
  }
  public set srcCfi(value: string) {
    this._srcCfi = value;
  }
  public resetSrcCfi() {
    this._srcCfi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcCfiInput() {
    return this._srcCfi;
  }

  // src_prio - computed: false, optional: true, required: false
  private _srcPrio?: number; 
  public get srcPrio() {
    return this.getNumberAttribute('src_prio');
  }
  public set srcPrio(value: number) {
    this._srcPrio = value;
  }
  public resetSrcPrio() {
    this._srcPrio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPrioInput() {
    return this._srcPrio;
  }

  // src_updt - computed: true, optional: true, required: false
  private _srcUpdt?: string; 
  public get srcUpdt() {
    return this.getStringAttribute('src_updt');
  }
  public set srcUpdt(value: string) {
    this._srcUpdt = value;
  }
  public resetSrcUpdt() {
    this._srcUpdt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcUpdtInput() {
    return this._srcUpdt;
  }

  // srcip - computed: true, optional: true, required: false
  private _srcip?: string; 
  public get srcip() {
    return this.getStringAttribute('srcip');
  }
  public set srcip(value: string) {
    this._srcip = value;
  }
  public resetSrcip() {
    this._srcip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcipInput() {
    return this._srcip;
  }

  // srcipv6 - computed: true, optional: true, required: false
  private _srcipv6?: string; 
  public get srcipv6() {
    return this.getStringAttribute('srcipv6');
  }
  public set srcipv6(value: string) {
    this._srcipv6 = value;
  }
  public resetSrcipv6() {
    this._srcipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcipv6Input() {
    return this._srcipv6;
  }

  // srcmac - computed: true, optional: true, required: false
  private _srcmac?: string; 
  public get srcmac() {
    return this.getStringAttribute('srcmac');
  }
  public set srcmac(value: string) {
    this._srcmac = value;
  }
  public resetSrcmac() {
    this._srcmac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcmacInput() {
    return this._srcmac;
  }

  // srcport - computed: false, optional: true, required: false
  private _srcport?: number; 
  public get srcport() {
    return this.getNumberAttribute('srcport');
  }
  public set srcport(value: number) {
    this._srcport = value;
  }
  public resetSrcport() {
    this._srcport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcportInput() {
    return this._srcport;
  }

  // svid - computed: false, optional: true, required: false
  private _svid?: number; 
  public get svid() {
    return this.getNumberAttribute('svid');
  }
  public set svid(value: number) {
    this._svid = value;
  }
  public resetSvid() {
    this._svid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get svidInput() {
    return this._svid;
  }

  // tcp_ack - computed: true, optional: true, required: false
  private _tcpAck?: string; 
  public get tcpAck() {
    return this.getStringAttribute('tcp_ack');
  }
  public set tcpAck(value: string) {
    this._tcpAck = value;
  }
  public resetTcpAck() {
    this._tcpAck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpAckInput() {
    return this._tcpAck;
  }

  // tcp_cwr - computed: true, optional: true, required: false
  private _tcpCwr?: string; 
  public get tcpCwr() {
    return this.getStringAttribute('tcp_cwr');
  }
  public set tcpCwr(value: string) {
    this._tcpCwr = value;
  }
  public resetTcpCwr() {
    this._tcpCwr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpCwrInput() {
    return this._tcpCwr;
  }

  // tcp_ece - computed: true, optional: true, required: false
  private _tcpEce?: string; 
  public get tcpEce() {
    return this.getStringAttribute('tcp_ece');
  }
  public set tcpEce(value: string) {
    this._tcpEce = value;
  }
  public resetTcpEce() {
    this._tcpEce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpEceInput() {
    return this._tcpEce;
  }

  // tcp_fin - computed: true, optional: true, required: false
  private _tcpFin?: string; 
  public get tcpFin() {
    return this.getStringAttribute('tcp_fin');
  }
  public set tcpFin(value: string) {
    this._tcpFin = value;
  }
  public resetTcpFin() {
    this._tcpFin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFinInput() {
    return this._tcpFin;
  }

  // tcp_push - computed: true, optional: true, required: false
  private _tcpPush?: string; 
  public get tcpPush() {
    return this.getStringAttribute('tcp_push');
  }
  public set tcpPush(value: string) {
    this._tcpPush = value;
  }
  public resetTcpPush() {
    this._tcpPush = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPushInput() {
    return this._tcpPush;
  }

  // tcp_rst - computed: true, optional: true, required: false
  private _tcpRst?: string; 
  public get tcpRst() {
    return this.getStringAttribute('tcp_rst');
  }
  public set tcpRst(value: string) {
    this._tcpRst = value;
  }
  public resetTcpRst() {
    this._tcpRst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpRstInput() {
    return this._tcpRst;
  }

  // tcp_syn - computed: true, optional: true, required: false
  private _tcpSyn?: string; 
  public get tcpSyn() {
    return this.getStringAttribute('tcp_syn');
  }
  public set tcpSyn(value: string) {
    this._tcpSyn = value;
  }
  public resetTcpSyn() {
    this._tcpSyn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSynInput() {
    return this._tcpSyn;
  }

  // tcp_urg - computed: true, optional: true, required: false
  private _tcpUrg?: string; 
  public get tcpUrg() {
    return this.getStringAttribute('tcp_urg');
  }
  public set tcpUrg(value: string) {
    this._tcpUrg = value;
  }
  public resetTcpUrg() {
    this._tcpUrg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpUrgInput() {
    return this._tcpUrg;
  }

  // tgt_cfi - computed: true, optional: true, required: false
  private _tgtCfi?: string; 
  public get tgtCfi() {
    return this.getStringAttribute('tgt_cfi');
  }
  public set tgtCfi(value: string) {
    this._tgtCfi = value;
  }
  public resetTgtCfi() {
    this._tgtCfi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tgtCfiInput() {
    return this._tgtCfi;
  }

  // tgt_prio - computed: false, optional: true, required: false
  private _tgtPrio?: number; 
  public get tgtPrio() {
    return this.getNumberAttribute('tgt_prio');
  }
  public set tgtPrio(value: number) {
    this._tgtPrio = value;
  }
  public resetTgtPrio() {
    this._tgtPrio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tgtPrioInput() {
    return this._tgtPrio;
  }

  // tgt_updt - computed: true, optional: true, required: false
  private _tgtUpdt?: string; 
  public get tgtUpdt() {
    return this.getStringAttribute('tgt_updt');
  }
  public set tgtUpdt(value: string) {
    this._tgtUpdt = value;
  }
  public resetTgtUpdt() {
    this._tgtUpdt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tgtUpdtInput() {
    return this._tgtUpdt;
  }

  // tgt_v - computed: true, optional: true, required: false
  private _tgtV?: string; 
  public get tgtV() {
    return this.getStringAttribute('tgt_v');
  }
  public set tgtV(value: string) {
    this._tgtV = value;
  }
  public resetTgtV() {
    this._tgtV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tgtVInput() {
    return this._tgtV;
  }

  // tos - computed: false, optional: true, required: false
  private _tos?: number; 
  public get tos() {
    return this.getNumberAttribute('tos');
  }
  public set tos(value: number) {
    this._tos = value;
  }
  public resetTos() {
    this._tos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tosInput() {
    return this._tos;
  }

  // tp - computed: false, optional: true, required: false
  private _tp?: number; 
  public get tp() {
    return this.getNumberAttribute('tp');
  }
  public set tp(value: number) {
    this._tp = value;
  }
  public resetTp() {
    this._tp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tpInput() {
    return this._tp;
  }

  // ttl - computed: false, optional: true, required: false
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

  // tvid - computed: false, optional: true, required: false
  private _tvid?: number; 
  public get tvid() {
    return this.getNumberAttribute('tvid');
  }
  public set tvid(value: number) {
    this._tvid = value;
  }
  public resetTvid() {
    this._tvid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tvidInput() {
    return this._tvid;
  }

  // vdid - computed: false, optional: true, required: false
  private _vdid?: number; 
  public get vdid() {
    return this.getNumberAttribute('vdid');
  }
  public set vdid(value: number) {
    this._vdid = value;
  }
  public resetVdid() {
    this._vdid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdidInput() {
    return this._vdid;
  }
}
export interface ObjectSystemNpuNpuTcamMirAct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#vlif ObjectSystemNpu#vlif}
  */
  readonly vlif?: number;
}

export function objectSystemNpuNpuTcamMirActToTerraform(struct?: ObjectSystemNpuNpuTcamMirActOutputReference | ObjectSystemNpuNpuTcamMirAct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vlif: cdktf.numberToTerraform(struct!.vlif),
  }
}


export function objectSystemNpuNpuTcamMirActToHclTerraform(struct?: ObjectSystemNpuNpuTcamMirActOutputReference | ObjectSystemNpuNpuTcamMirAct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vlif: {
      value: cdktf.numberToHclTerraform(struct!.vlif),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectSystemNpuNpuTcamMirActOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectSystemNpuNpuTcamMirAct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vlif !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlif = this._vlif;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectSystemNpuNpuTcamMirAct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._vlif = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._vlif = value.vlif;
    }
  }

  // vlif - computed: false, optional: true, required: false
  private _vlif?: number; 
  public get vlif() {
    return this.getNumberAttribute('vlif');
  }
  public set vlif(value: number) {
    this._vlif = value;
  }
  public resetVlif() {
    this._vlif = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlifInput() {
    return this._vlif;
  }
}
export interface ObjectSystemNpuNpuTcamPriAct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#priority ObjectSystemNpu#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#weight ObjectSystemNpu#weight}
  */
  readonly weight?: number;
}

export function objectSystemNpuNpuTcamPriActToTerraform(struct?: ObjectSystemNpuNpuTcamPriActOutputReference | ObjectSystemNpuNpuTcamPriAct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function objectSystemNpuNpuTcamPriActToHclTerraform(struct?: ObjectSystemNpuNpuTcamPriActOutputReference | ObjectSystemNpuNpuTcamPriAct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectSystemNpuNpuTcamPriActOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectSystemNpuNpuTcamPriAct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectSystemNpuNpuTcamPriAct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._priority = undefined;
      this._weight = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._priority = value.priority;
      this._weight = value.weight;
    }
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}
export interface ObjectSystemNpuNpuTcamSact {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#act ObjectSystemNpu#act}
  */
  readonly act?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#act_v ObjectSystemNpu#act_v}
  */
  readonly actV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#bmproc ObjectSystemNpu#bmproc}
  */
  readonly bmproc?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#bmproc_v ObjectSystemNpu#bmproc_v}
  */
  readonly bmprocV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#df_lif ObjectSystemNpu#df_lif}
  */
  readonly dfLif?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#df_lif_v ObjectSystemNpu#df_lif_v}
  */
  readonly dfLifV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dfr ObjectSystemNpu#dfr}
  */
  readonly dfr?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dfr_v ObjectSystemNpu#dfr_v}
  */
  readonly dfrV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dmac_skip ObjectSystemNpu#dmac_skip}
  */
  readonly dmacSkip?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dmac_skip_v ObjectSystemNpu#dmac_skip_v}
  */
  readonly dmacSkipV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dosen ObjectSystemNpu#dosen}
  */
  readonly dosen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dosen_v ObjectSystemNpu#dosen_v}
  */
  readonly dosenV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#espff_proc ObjectSystemNpu#espff_proc}
  */
  readonly espffProc?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#espff_proc_v ObjectSystemNpu#espff_proc_v}
  */
  readonly espffProcV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#etype_pid ObjectSystemNpu#etype_pid}
  */
  readonly etypePid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#etype_pid_v ObjectSystemNpu#etype_pid_v}
  */
  readonly etypePidV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#frag_proc ObjectSystemNpu#frag_proc}
  */
  readonly fragProc?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#frag_proc_v ObjectSystemNpu#frag_proc_v}
  */
  readonly fragProcV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#fwd ObjectSystemNpu#fwd}
  */
  readonly fwd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#fwd_lif ObjectSystemNpu#fwd_lif}
  */
  readonly fwdLif?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#fwd_lif_v ObjectSystemNpu#fwd_lif_v}
  */
  readonly fwdLifV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#fwd_tvid ObjectSystemNpu#fwd_tvid}
  */
  readonly fwdTvid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#fwd_tvid_v ObjectSystemNpu#fwd_tvid_v}
  */
  readonly fwdTvidV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#fwd_v ObjectSystemNpu#fwd_v}
  */
  readonly fwdV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#icpen ObjectSystemNpu#icpen}
  */
  readonly icpen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#icpen_v ObjectSystemNpu#icpen_v}
  */
  readonly icpenV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#igmp_mld_snp ObjectSystemNpu#igmp_mld_snp}
  */
  readonly igmpMldSnp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#igmp_mld_snp_v ObjectSystemNpu#igmp_mld_snp_v}
  */
  readonly igmpMldSnpV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#learn ObjectSystemNpu#learn}
  */
  readonly learn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#learn_v ObjectSystemNpu#learn_v}
  */
  readonly learnV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#m_srh_ctrl ObjectSystemNpu#m_srh_ctrl}
  */
  readonly mSrhCtrl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#m_srh_ctrl_v ObjectSystemNpu#m_srh_ctrl_v}
  */
  readonly mSrhCtrlV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#mac_id ObjectSystemNpu#mac_id}
  */
  readonly macId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#mac_id_v ObjectSystemNpu#mac_id_v}
  */
  readonly macIdV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#mss ObjectSystemNpu#mss}
  */
  readonly mss?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#mss_v ObjectSystemNpu#mss_v}
  */
  readonly mssV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#pleen ObjectSystemNpu#pleen}
  */
  readonly pleen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#pleen_v ObjectSystemNpu#pleen_v}
  */
  readonly pleenV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#prio_pid ObjectSystemNpu#prio_pid}
  */
  readonly prioPid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#prio_pid_v ObjectSystemNpu#prio_pid_v}
  */
  readonly prioPidV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#promis ObjectSystemNpu#promis}
  */
  readonly promis?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#promis_v ObjectSystemNpu#promis_v}
  */
  readonly promisV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#rfsh ObjectSystemNpu#rfsh}
  */
  readonly rfsh?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#rfsh_v ObjectSystemNpu#rfsh_v}
  */
  readonly rfshV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#smac_skip ObjectSystemNpu#smac_skip}
  */
  readonly smacSkip?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#smac_skip_v ObjectSystemNpu#smac_skip_v}
  */
  readonly smacSkipV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#tp_smchk ObjectSystemNpu#tp_smchk}
  */
  readonly tpSmchk?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#tp_smchk_v ObjectSystemNpu#tp_smchk_v}
  */
  readonly tpSmchkV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#tpe_id ObjectSystemNpu#tpe_id}
  */
  readonly tpeId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#tpe_id_v ObjectSystemNpu#tpe_id_v}
  */
  readonly tpeIdV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#vdm ObjectSystemNpu#vdm}
  */
  readonly vdm?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#vdm_v ObjectSystemNpu#vdm_v}
  */
  readonly vdmV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#vdom_id ObjectSystemNpu#vdom_id}
  */
  readonly vdomId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#vdom_id_v ObjectSystemNpu#vdom_id_v}
  */
  readonly vdomIdV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#x_mode ObjectSystemNpu#x_mode}
  */
  readonly xMode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#x_mode_v ObjectSystemNpu#x_mode_v}
  */
  readonly xModeV?: string;
}

export function objectSystemNpuNpuTcamSactToTerraform(struct?: ObjectSystemNpuNpuTcamSactOutputReference | ObjectSystemNpuNpuTcamSact): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    act: cdktf.numberToTerraform(struct!.act),
    act_v: cdktf.stringToTerraform(struct!.actV),
    bmproc: cdktf.numberToTerraform(struct!.bmproc),
    bmproc_v: cdktf.stringToTerraform(struct!.bmprocV),
    df_lif: cdktf.numberToTerraform(struct!.dfLif),
    df_lif_v: cdktf.stringToTerraform(struct!.dfLifV),
    dfr: cdktf.numberToTerraform(struct!.dfr),
    dfr_v: cdktf.stringToTerraform(struct!.dfrV),
    dmac_skip: cdktf.numberToTerraform(struct!.dmacSkip),
    dmac_skip_v: cdktf.stringToTerraform(struct!.dmacSkipV),
    dosen: cdktf.numberToTerraform(struct!.dosen),
    dosen_v: cdktf.stringToTerraform(struct!.dosenV),
    espff_proc: cdktf.numberToTerraform(struct!.espffProc),
    espff_proc_v: cdktf.stringToTerraform(struct!.espffProcV),
    etype_pid: cdktf.numberToTerraform(struct!.etypePid),
    etype_pid_v: cdktf.stringToTerraform(struct!.etypePidV),
    frag_proc: cdktf.numberToTerraform(struct!.fragProc),
    frag_proc_v: cdktf.stringToTerraform(struct!.fragProcV),
    fwd: cdktf.numberToTerraform(struct!.fwd),
    fwd_lif: cdktf.numberToTerraform(struct!.fwdLif),
    fwd_lif_v: cdktf.stringToTerraform(struct!.fwdLifV),
    fwd_tvid: cdktf.numberToTerraform(struct!.fwdTvid),
    fwd_tvid_v: cdktf.stringToTerraform(struct!.fwdTvidV),
    fwd_v: cdktf.stringToTerraform(struct!.fwdV),
    icpen: cdktf.numberToTerraform(struct!.icpen),
    icpen_v: cdktf.stringToTerraform(struct!.icpenV),
    igmp_mld_snp: cdktf.numberToTerraform(struct!.igmpMldSnp),
    igmp_mld_snp_v: cdktf.stringToTerraform(struct!.igmpMldSnpV),
    learn: cdktf.numberToTerraform(struct!.learn),
    learn_v: cdktf.stringToTerraform(struct!.learnV),
    m_srh_ctrl: cdktf.numberToTerraform(struct!.mSrhCtrl),
    m_srh_ctrl_v: cdktf.stringToTerraform(struct!.mSrhCtrlV),
    mac_id: cdktf.numberToTerraform(struct!.macId),
    mac_id_v: cdktf.stringToTerraform(struct!.macIdV),
    mss: cdktf.numberToTerraform(struct!.mss),
    mss_v: cdktf.stringToTerraform(struct!.mssV),
    pleen: cdktf.numberToTerraform(struct!.pleen),
    pleen_v: cdktf.stringToTerraform(struct!.pleenV),
    prio_pid: cdktf.numberToTerraform(struct!.prioPid),
    prio_pid_v: cdktf.stringToTerraform(struct!.prioPidV),
    promis: cdktf.numberToTerraform(struct!.promis),
    promis_v: cdktf.stringToTerraform(struct!.promisV),
    rfsh: cdktf.numberToTerraform(struct!.rfsh),
    rfsh_v: cdktf.stringToTerraform(struct!.rfshV),
    smac_skip: cdktf.numberToTerraform(struct!.smacSkip),
    smac_skip_v: cdktf.stringToTerraform(struct!.smacSkipV),
    tp_smchk: cdktf.numberToTerraform(struct!.tpSmchk),
    tp_smchk_v: cdktf.stringToTerraform(struct!.tpSmchkV),
    tpe_id: cdktf.numberToTerraform(struct!.tpeId),
    tpe_id_v: cdktf.stringToTerraform(struct!.tpeIdV),
    vdm: cdktf.numberToTerraform(struct!.vdm),
    vdm_v: cdktf.stringToTerraform(struct!.vdmV),
    vdom_id: cdktf.numberToTerraform(struct!.vdomId),
    vdom_id_v: cdktf.stringToTerraform(struct!.vdomIdV),
    x_mode: cdktf.numberToTerraform(struct!.xMode),
    x_mode_v: cdktf.stringToTerraform(struct!.xModeV),
  }
}


export function objectSystemNpuNpuTcamSactToHclTerraform(struct?: ObjectSystemNpuNpuTcamSactOutputReference | ObjectSystemNpuNpuTcamSact): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    act: {
      value: cdktf.numberToHclTerraform(struct!.act),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    act_v: {
      value: cdktf.stringToHclTerraform(struct!.actV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bmproc: {
      value: cdktf.numberToHclTerraform(struct!.bmproc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bmproc_v: {
      value: cdktf.stringToHclTerraform(struct!.bmprocV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    df_lif: {
      value: cdktf.numberToHclTerraform(struct!.dfLif),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    df_lif_v: {
      value: cdktf.stringToHclTerraform(struct!.dfLifV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dfr: {
      value: cdktf.numberToHclTerraform(struct!.dfr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dfr_v: {
      value: cdktf.stringToHclTerraform(struct!.dfrV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dmac_skip: {
      value: cdktf.numberToHclTerraform(struct!.dmacSkip),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dmac_skip_v: {
      value: cdktf.stringToHclTerraform(struct!.dmacSkipV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dosen: {
      value: cdktf.numberToHclTerraform(struct!.dosen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dosen_v: {
      value: cdktf.stringToHclTerraform(struct!.dosenV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    espff_proc: {
      value: cdktf.numberToHclTerraform(struct!.espffProc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    espff_proc_v: {
      value: cdktf.stringToHclTerraform(struct!.espffProcV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    etype_pid: {
      value: cdktf.numberToHclTerraform(struct!.etypePid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    etype_pid_v: {
      value: cdktf.stringToHclTerraform(struct!.etypePidV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    frag_proc: {
      value: cdktf.numberToHclTerraform(struct!.fragProc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    frag_proc_v: {
      value: cdktf.stringToHclTerraform(struct!.fragProcV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fwd: {
      value: cdktf.numberToHclTerraform(struct!.fwd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fwd_lif: {
      value: cdktf.numberToHclTerraform(struct!.fwdLif),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fwd_lif_v: {
      value: cdktf.stringToHclTerraform(struct!.fwdLifV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fwd_tvid: {
      value: cdktf.numberToHclTerraform(struct!.fwdTvid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fwd_tvid_v: {
      value: cdktf.stringToHclTerraform(struct!.fwdTvidV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fwd_v: {
      value: cdktf.stringToHclTerraform(struct!.fwdV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icpen: {
      value: cdktf.numberToHclTerraform(struct!.icpen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icpen_v: {
      value: cdktf.stringToHclTerraform(struct!.icpenV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    igmp_mld_snp: {
      value: cdktf.numberToHclTerraform(struct!.igmpMldSnp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    igmp_mld_snp_v: {
      value: cdktf.stringToHclTerraform(struct!.igmpMldSnpV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    learn: {
      value: cdktf.numberToHclTerraform(struct!.learn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    learn_v: {
      value: cdktf.stringToHclTerraform(struct!.learnV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    m_srh_ctrl: {
      value: cdktf.numberToHclTerraform(struct!.mSrhCtrl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    m_srh_ctrl_v: {
      value: cdktf.stringToHclTerraform(struct!.mSrhCtrlV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac_id: {
      value: cdktf.numberToHclTerraform(struct!.macId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mac_id_v: {
      value: cdktf.stringToHclTerraform(struct!.macIdV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mss: {
      value: cdktf.numberToHclTerraform(struct!.mss),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mss_v: {
      value: cdktf.stringToHclTerraform(struct!.mssV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pleen: {
      value: cdktf.numberToHclTerraform(struct!.pleen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pleen_v: {
      value: cdktf.stringToHclTerraform(struct!.pleenV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prio_pid: {
      value: cdktf.numberToHclTerraform(struct!.prioPid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prio_pid_v: {
      value: cdktf.stringToHclTerraform(struct!.prioPidV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    promis: {
      value: cdktf.numberToHclTerraform(struct!.promis),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    promis_v: {
      value: cdktf.stringToHclTerraform(struct!.promisV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rfsh: {
      value: cdktf.numberToHclTerraform(struct!.rfsh),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rfsh_v: {
      value: cdktf.stringToHclTerraform(struct!.rfshV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    smac_skip: {
      value: cdktf.numberToHclTerraform(struct!.smacSkip),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    smac_skip_v: {
      value: cdktf.stringToHclTerraform(struct!.smacSkipV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tp_smchk: {
      value: cdktf.numberToHclTerraform(struct!.tpSmchk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tp_smchk_v: {
      value: cdktf.stringToHclTerraform(struct!.tpSmchkV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tpe_id: {
      value: cdktf.numberToHclTerraform(struct!.tpeId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tpe_id_v: {
      value: cdktf.stringToHclTerraform(struct!.tpeIdV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vdm: {
      value: cdktf.numberToHclTerraform(struct!.vdm),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vdm_v: {
      value: cdktf.stringToHclTerraform(struct!.vdmV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vdom_id: {
      value: cdktf.numberToHclTerraform(struct!.vdomId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vdom_id_v: {
      value: cdktf.stringToHclTerraform(struct!.vdomIdV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    x_mode: {
      value: cdktf.numberToHclTerraform(struct!.xMode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    x_mode_v: {
      value: cdktf.stringToHclTerraform(struct!.xModeV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectSystemNpuNpuTcamSactOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectSystemNpuNpuTcamSact | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._act !== undefined) {
      hasAnyValues = true;
      internalValueResult.act = this._act;
    }
    if (this._actV !== undefined) {
      hasAnyValues = true;
      internalValueResult.actV = this._actV;
    }
    if (this._bmproc !== undefined) {
      hasAnyValues = true;
      internalValueResult.bmproc = this._bmproc;
    }
    if (this._bmprocV !== undefined) {
      hasAnyValues = true;
      internalValueResult.bmprocV = this._bmprocV;
    }
    if (this._dfLif !== undefined) {
      hasAnyValues = true;
      internalValueResult.dfLif = this._dfLif;
    }
    if (this._dfLifV !== undefined) {
      hasAnyValues = true;
      internalValueResult.dfLifV = this._dfLifV;
    }
    if (this._dfr !== undefined) {
      hasAnyValues = true;
      internalValueResult.dfr = this._dfr;
    }
    if (this._dfrV !== undefined) {
      hasAnyValues = true;
      internalValueResult.dfrV = this._dfrV;
    }
    if (this._dmacSkip !== undefined) {
      hasAnyValues = true;
      internalValueResult.dmacSkip = this._dmacSkip;
    }
    if (this._dmacSkipV !== undefined) {
      hasAnyValues = true;
      internalValueResult.dmacSkipV = this._dmacSkipV;
    }
    if (this._dosen !== undefined) {
      hasAnyValues = true;
      internalValueResult.dosen = this._dosen;
    }
    if (this._dosenV !== undefined) {
      hasAnyValues = true;
      internalValueResult.dosenV = this._dosenV;
    }
    if (this._espffProc !== undefined) {
      hasAnyValues = true;
      internalValueResult.espffProc = this._espffProc;
    }
    if (this._espffProcV !== undefined) {
      hasAnyValues = true;
      internalValueResult.espffProcV = this._espffProcV;
    }
    if (this._etypePid !== undefined) {
      hasAnyValues = true;
      internalValueResult.etypePid = this._etypePid;
    }
    if (this._etypePidV !== undefined) {
      hasAnyValues = true;
      internalValueResult.etypePidV = this._etypePidV;
    }
    if (this._fragProc !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragProc = this._fragProc;
    }
    if (this._fragProcV !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragProcV = this._fragProcV;
    }
    if (this._fwd !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwd = this._fwd;
    }
    if (this._fwdLif !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdLif = this._fwdLif;
    }
    if (this._fwdLifV !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdLifV = this._fwdLifV;
    }
    if (this._fwdTvid !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdTvid = this._fwdTvid;
    }
    if (this._fwdTvidV !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdTvidV = this._fwdTvidV;
    }
    if (this._fwdV !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdV = this._fwdV;
    }
    if (this._icpen !== undefined) {
      hasAnyValues = true;
      internalValueResult.icpen = this._icpen;
    }
    if (this._icpenV !== undefined) {
      hasAnyValues = true;
      internalValueResult.icpenV = this._icpenV;
    }
    if (this._igmpMldSnp !== undefined) {
      hasAnyValues = true;
      internalValueResult.igmpMldSnp = this._igmpMldSnp;
    }
    if (this._igmpMldSnpV !== undefined) {
      hasAnyValues = true;
      internalValueResult.igmpMldSnpV = this._igmpMldSnpV;
    }
    if (this._learn !== undefined) {
      hasAnyValues = true;
      internalValueResult.learn = this._learn;
    }
    if (this._learnV !== undefined) {
      hasAnyValues = true;
      internalValueResult.learnV = this._learnV;
    }
    if (this._mSrhCtrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.mSrhCtrl = this._mSrhCtrl;
    }
    if (this._mSrhCtrlV !== undefined) {
      hasAnyValues = true;
      internalValueResult.mSrhCtrlV = this._mSrhCtrlV;
    }
    if (this._macId !== undefined) {
      hasAnyValues = true;
      internalValueResult.macId = this._macId;
    }
    if (this._macIdV !== undefined) {
      hasAnyValues = true;
      internalValueResult.macIdV = this._macIdV;
    }
    if (this._mss !== undefined) {
      hasAnyValues = true;
      internalValueResult.mss = this._mss;
    }
    if (this._mssV !== undefined) {
      hasAnyValues = true;
      internalValueResult.mssV = this._mssV;
    }
    if (this._pleen !== undefined) {
      hasAnyValues = true;
      internalValueResult.pleen = this._pleen;
    }
    if (this._pleenV !== undefined) {
      hasAnyValues = true;
      internalValueResult.pleenV = this._pleenV;
    }
    if (this._prioPid !== undefined) {
      hasAnyValues = true;
      internalValueResult.prioPid = this._prioPid;
    }
    if (this._prioPidV !== undefined) {
      hasAnyValues = true;
      internalValueResult.prioPidV = this._prioPidV;
    }
    if (this._promis !== undefined) {
      hasAnyValues = true;
      internalValueResult.promis = this._promis;
    }
    if (this._promisV !== undefined) {
      hasAnyValues = true;
      internalValueResult.promisV = this._promisV;
    }
    if (this._rfsh !== undefined) {
      hasAnyValues = true;
      internalValueResult.rfsh = this._rfsh;
    }
    if (this._rfshV !== undefined) {
      hasAnyValues = true;
      internalValueResult.rfshV = this._rfshV;
    }
    if (this._smacSkip !== undefined) {
      hasAnyValues = true;
      internalValueResult.smacSkip = this._smacSkip;
    }
    if (this._smacSkipV !== undefined) {
      hasAnyValues = true;
      internalValueResult.smacSkipV = this._smacSkipV;
    }
    if (this._tpSmchk !== undefined) {
      hasAnyValues = true;
      internalValueResult.tpSmchk = this._tpSmchk;
    }
    if (this._tpSmchkV !== undefined) {
      hasAnyValues = true;
      internalValueResult.tpSmchkV = this._tpSmchkV;
    }
    if (this._tpeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tpeId = this._tpeId;
    }
    if (this._tpeIdV !== undefined) {
      hasAnyValues = true;
      internalValueResult.tpeIdV = this._tpeIdV;
    }
    if (this._vdm !== undefined) {
      hasAnyValues = true;
      internalValueResult.vdm = this._vdm;
    }
    if (this._vdmV !== undefined) {
      hasAnyValues = true;
      internalValueResult.vdmV = this._vdmV;
    }
    if (this._vdomId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vdomId = this._vdomId;
    }
    if (this._vdomIdV !== undefined) {
      hasAnyValues = true;
      internalValueResult.vdomIdV = this._vdomIdV;
    }
    if (this._xMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.xMode = this._xMode;
    }
    if (this._xModeV !== undefined) {
      hasAnyValues = true;
      internalValueResult.xModeV = this._xModeV;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectSystemNpuNpuTcamSact | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._act = undefined;
      this._actV = undefined;
      this._bmproc = undefined;
      this._bmprocV = undefined;
      this._dfLif = undefined;
      this._dfLifV = undefined;
      this._dfr = undefined;
      this._dfrV = undefined;
      this._dmacSkip = undefined;
      this._dmacSkipV = undefined;
      this._dosen = undefined;
      this._dosenV = undefined;
      this._espffProc = undefined;
      this._espffProcV = undefined;
      this._etypePid = undefined;
      this._etypePidV = undefined;
      this._fragProc = undefined;
      this._fragProcV = undefined;
      this._fwd = undefined;
      this._fwdLif = undefined;
      this._fwdLifV = undefined;
      this._fwdTvid = undefined;
      this._fwdTvidV = undefined;
      this._fwdV = undefined;
      this._icpen = undefined;
      this._icpenV = undefined;
      this._igmpMldSnp = undefined;
      this._igmpMldSnpV = undefined;
      this._learn = undefined;
      this._learnV = undefined;
      this._mSrhCtrl = undefined;
      this._mSrhCtrlV = undefined;
      this._macId = undefined;
      this._macIdV = undefined;
      this._mss = undefined;
      this._mssV = undefined;
      this._pleen = undefined;
      this._pleenV = undefined;
      this._prioPid = undefined;
      this._prioPidV = undefined;
      this._promis = undefined;
      this._promisV = undefined;
      this._rfsh = undefined;
      this._rfshV = undefined;
      this._smacSkip = undefined;
      this._smacSkipV = undefined;
      this._tpSmchk = undefined;
      this._tpSmchkV = undefined;
      this._tpeId = undefined;
      this._tpeIdV = undefined;
      this._vdm = undefined;
      this._vdmV = undefined;
      this._vdomId = undefined;
      this._vdomIdV = undefined;
      this._xMode = undefined;
      this._xModeV = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._act = value.act;
      this._actV = value.actV;
      this._bmproc = value.bmproc;
      this._bmprocV = value.bmprocV;
      this._dfLif = value.dfLif;
      this._dfLifV = value.dfLifV;
      this._dfr = value.dfr;
      this._dfrV = value.dfrV;
      this._dmacSkip = value.dmacSkip;
      this._dmacSkipV = value.dmacSkipV;
      this._dosen = value.dosen;
      this._dosenV = value.dosenV;
      this._espffProc = value.espffProc;
      this._espffProcV = value.espffProcV;
      this._etypePid = value.etypePid;
      this._etypePidV = value.etypePidV;
      this._fragProc = value.fragProc;
      this._fragProcV = value.fragProcV;
      this._fwd = value.fwd;
      this._fwdLif = value.fwdLif;
      this._fwdLifV = value.fwdLifV;
      this._fwdTvid = value.fwdTvid;
      this._fwdTvidV = value.fwdTvidV;
      this._fwdV = value.fwdV;
      this._icpen = value.icpen;
      this._icpenV = value.icpenV;
      this._igmpMldSnp = value.igmpMldSnp;
      this._igmpMldSnpV = value.igmpMldSnpV;
      this._learn = value.learn;
      this._learnV = value.learnV;
      this._mSrhCtrl = value.mSrhCtrl;
      this._mSrhCtrlV = value.mSrhCtrlV;
      this._macId = value.macId;
      this._macIdV = value.macIdV;
      this._mss = value.mss;
      this._mssV = value.mssV;
      this._pleen = value.pleen;
      this._pleenV = value.pleenV;
      this._prioPid = value.prioPid;
      this._prioPidV = value.prioPidV;
      this._promis = value.promis;
      this._promisV = value.promisV;
      this._rfsh = value.rfsh;
      this._rfshV = value.rfshV;
      this._smacSkip = value.smacSkip;
      this._smacSkipV = value.smacSkipV;
      this._tpSmchk = value.tpSmchk;
      this._tpSmchkV = value.tpSmchkV;
      this._tpeId = value.tpeId;
      this._tpeIdV = value.tpeIdV;
      this._vdm = value.vdm;
      this._vdmV = value.vdmV;
      this._vdomId = value.vdomId;
      this._vdomIdV = value.vdomIdV;
      this._xMode = value.xMode;
      this._xModeV = value.xModeV;
    }
  }

  // act - computed: false, optional: true, required: false
  private _act?: number; 
  public get act() {
    return this.getNumberAttribute('act');
  }
  public set act(value: number) {
    this._act = value;
  }
  public resetAct() {
    this._act = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actInput() {
    return this._act;
  }

  // act_v - computed: true, optional: true, required: false
  private _actV?: string; 
  public get actV() {
    return this.getStringAttribute('act_v');
  }
  public set actV(value: string) {
    this._actV = value;
  }
  public resetActV() {
    this._actV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actVInput() {
    return this._actV;
  }

  // bmproc - computed: false, optional: true, required: false
  private _bmproc?: number; 
  public get bmproc() {
    return this.getNumberAttribute('bmproc');
  }
  public set bmproc(value: number) {
    this._bmproc = value;
  }
  public resetBmproc() {
    this._bmproc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bmprocInput() {
    return this._bmproc;
  }

  // bmproc_v - computed: true, optional: true, required: false
  private _bmprocV?: string; 
  public get bmprocV() {
    return this.getStringAttribute('bmproc_v');
  }
  public set bmprocV(value: string) {
    this._bmprocV = value;
  }
  public resetBmprocV() {
    this._bmprocV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bmprocVInput() {
    return this._bmprocV;
  }

  // df_lif - computed: false, optional: true, required: false
  private _dfLif?: number; 
  public get dfLif() {
    return this.getNumberAttribute('df_lif');
  }
  public set dfLif(value: number) {
    this._dfLif = value;
  }
  public resetDfLif() {
    this._dfLif = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dfLifInput() {
    return this._dfLif;
  }

  // df_lif_v - computed: true, optional: true, required: false
  private _dfLifV?: string; 
  public get dfLifV() {
    return this.getStringAttribute('df_lif_v');
  }
  public set dfLifV(value: string) {
    this._dfLifV = value;
  }
  public resetDfLifV() {
    this._dfLifV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dfLifVInput() {
    return this._dfLifV;
  }

  // dfr - computed: false, optional: true, required: false
  private _dfr?: number; 
  public get dfr() {
    return this.getNumberAttribute('dfr');
  }
  public set dfr(value: number) {
    this._dfr = value;
  }
  public resetDfr() {
    this._dfr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dfrInput() {
    return this._dfr;
  }

  // dfr_v - computed: true, optional: true, required: false
  private _dfrV?: string; 
  public get dfrV() {
    return this.getStringAttribute('dfr_v');
  }
  public set dfrV(value: string) {
    this._dfrV = value;
  }
  public resetDfrV() {
    this._dfrV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dfrVInput() {
    return this._dfrV;
  }

  // dmac_skip - computed: false, optional: true, required: false
  private _dmacSkip?: number; 
  public get dmacSkip() {
    return this.getNumberAttribute('dmac_skip');
  }
  public set dmacSkip(value: number) {
    this._dmacSkip = value;
  }
  public resetDmacSkip() {
    this._dmacSkip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dmacSkipInput() {
    return this._dmacSkip;
  }

  // dmac_skip_v - computed: true, optional: true, required: false
  private _dmacSkipV?: string; 
  public get dmacSkipV() {
    return this.getStringAttribute('dmac_skip_v');
  }
  public set dmacSkipV(value: string) {
    this._dmacSkipV = value;
  }
  public resetDmacSkipV() {
    this._dmacSkipV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dmacSkipVInput() {
    return this._dmacSkipV;
  }

  // dosen - computed: false, optional: true, required: false
  private _dosen?: number; 
  public get dosen() {
    return this.getNumberAttribute('dosen');
  }
  public set dosen(value: number) {
    this._dosen = value;
  }
  public resetDosen() {
    this._dosen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dosenInput() {
    return this._dosen;
  }

  // dosen_v - computed: true, optional: true, required: false
  private _dosenV?: string; 
  public get dosenV() {
    return this.getStringAttribute('dosen_v');
  }
  public set dosenV(value: string) {
    this._dosenV = value;
  }
  public resetDosenV() {
    this._dosenV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dosenVInput() {
    return this._dosenV;
  }

  // espff_proc - computed: false, optional: true, required: false
  private _espffProc?: number; 
  public get espffProc() {
    return this.getNumberAttribute('espff_proc');
  }
  public set espffProc(value: number) {
    this._espffProc = value;
  }
  public resetEspffProc() {
    this._espffProc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get espffProcInput() {
    return this._espffProc;
  }

  // espff_proc_v - computed: true, optional: true, required: false
  private _espffProcV?: string; 
  public get espffProcV() {
    return this.getStringAttribute('espff_proc_v');
  }
  public set espffProcV(value: string) {
    this._espffProcV = value;
  }
  public resetEspffProcV() {
    this._espffProcV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get espffProcVInput() {
    return this._espffProcV;
  }

  // etype_pid - computed: false, optional: true, required: false
  private _etypePid?: number; 
  public get etypePid() {
    return this.getNumberAttribute('etype_pid');
  }
  public set etypePid(value: number) {
    this._etypePid = value;
  }
  public resetEtypePid() {
    this._etypePid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etypePidInput() {
    return this._etypePid;
  }

  // etype_pid_v - computed: true, optional: true, required: false
  private _etypePidV?: string; 
  public get etypePidV() {
    return this.getStringAttribute('etype_pid_v');
  }
  public set etypePidV(value: string) {
    this._etypePidV = value;
  }
  public resetEtypePidV() {
    this._etypePidV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etypePidVInput() {
    return this._etypePidV;
  }

  // frag_proc - computed: false, optional: true, required: false
  private _fragProc?: number; 
  public get fragProc() {
    return this.getNumberAttribute('frag_proc');
  }
  public set fragProc(value: number) {
    this._fragProc = value;
  }
  public resetFragProc() {
    this._fragProc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragProcInput() {
    return this._fragProc;
  }

  // frag_proc_v - computed: true, optional: true, required: false
  private _fragProcV?: string; 
  public get fragProcV() {
    return this.getStringAttribute('frag_proc_v');
  }
  public set fragProcV(value: string) {
    this._fragProcV = value;
  }
  public resetFragProcV() {
    this._fragProcV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragProcVInput() {
    return this._fragProcV;
  }

  // fwd - computed: false, optional: true, required: false
  private _fwd?: number; 
  public get fwd() {
    return this.getNumberAttribute('fwd');
  }
  public set fwd(value: number) {
    this._fwd = value;
  }
  public resetFwd() {
    this._fwd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdInput() {
    return this._fwd;
  }

  // fwd_lif - computed: false, optional: true, required: false
  private _fwdLif?: number; 
  public get fwdLif() {
    return this.getNumberAttribute('fwd_lif');
  }
  public set fwdLif(value: number) {
    this._fwdLif = value;
  }
  public resetFwdLif() {
    this._fwdLif = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdLifInput() {
    return this._fwdLif;
  }

  // fwd_lif_v - computed: true, optional: true, required: false
  private _fwdLifV?: string; 
  public get fwdLifV() {
    return this.getStringAttribute('fwd_lif_v');
  }
  public set fwdLifV(value: string) {
    this._fwdLifV = value;
  }
  public resetFwdLifV() {
    this._fwdLifV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdLifVInput() {
    return this._fwdLifV;
  }

  // fwd_tvid - computed: false, optional: true, required: false
  private _fwdTvid?: number; 
  public get fwdTvid() {
    return this.getNumberAttribute('fwd_tvid');
  }
  public set fwdTvid(value: number) {
    this._fwdTvid = value;
  }
  public resetFwdTvid() {
    this._fwdTvid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdTvidInput() {
    return this._fwdTvid;
  }

  // fwd_tvid_v - computed: true, optional: true, required: false
  private _fwdTvidV?: string; 
  public get fwdTvidV() {
    return this.getStringAttribute('fwd_tvid_v');
  }
  public set fwdTvidV(value: string) {
    this._fwdTvidV = value;
  }
  public resetFwdTvidV() {
    this._fwdTvidV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdTvidVInput() {
    return this._fwdTvidV;
  }

  // fwd_v - computed: true, optional: true, required: false
  private _fwdV?: string; 
  public get fwdV() {
    return this.getStringAttribute('fwd_v');
  }
  public set fwdV(value: string) {
    this._fwdV = value;
  }
  public resetFwdV() {
    this._fwdV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdVInput() {
    return this._fwdV;
  }

  // icpen - computed: false, optional: true, required: false
  private _icpen?: number; 
  public get icpen() {
    return this.getNumberAttribute('icpen');
  }
  public set icpen(value: number) {
    this._icpen = value;
  }
  public resetIcpen() {
    this._icpen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icpenInput() {
    return this._icpen;
  }

  // icpen_v - computed: true, optional: true, required: false
  private _icpenV?: string; 
  public get icpenV() {
    return this.getStringAttribute('icpen_v');
  }
  public set icpenV(value: string) {
    this._icpenV = value;
  }
  public resetIcpenV() {
    this._icpenV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icpenVInput() {
    return this._icpenV;
  }

  // igmp_mld_snp - computed: false, optional: true, required: false
  private _igmpMldSnp?: number; 
  public get igmpMldSnp() {
    return this.getNumberAttribute('igmp_mld_snp');
  }
  public set igmpMldSnp(value: number) {
    this._igmpMldSnp = value;
  }
  public resetIgmpMldSnp() {
    this._igmpMldSnp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get igmpMldSnpInput() {
    return this._igmpMldSnp;
  }

  // igmp_mld_snp_v - computed: true, optional: true, required: false
  private _igmpMldSnpV?: string; 
  public get igmpMldSnpV() {
    return this.getStringAttribute('igmp_mld_snp_v');
  }
  public set igmpMldSnpV(value: string) {
    this._igmpMldSnpV = value;
  }
  public resetIgmpMldSnpV() {
    this._igmpMldSnpV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get igmpMldSnpVInput() {
    return this._igmpMldSnpV;
  }

  // learn - computed: false, optional: true, required: false
  private _learn?: number; 
  public get learn() {
    return this.getNumberAttribute('learn');
  }
  public set learn(value: number) {
    this._learn = value;
  }
  public resetLearn() {
    this._learn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get learnInput() {
    return this._learn;
  }

  // learn_v - computed: true, optional: true, required: false
  private _learnV?: string; 
  public get learnV() {
    return this.getStringAttribute('learn_v');
  }
  public set learnV(value: string) {
    this._learnV = value;
  }
  public resetLearnV() {
    this._learnV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get learnVInput() {
    return this._learnV;
  }

  // m_srh_ctrl - computed: false, optional: true, required: false
  private _mSrhCtrl?: number; 
  public get mSrhCtrl() {
    return this.getNumberAttribute('m_srh_ctrl');
  }
  public set mSrhCtrl(value: number) {
    this._mSrhCtrl = value;
  }
  public resetMSrhCtrl() {
    this._mSrhCtrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mSrhCtrlInput() {
    return this._mSrhCtrl;
  }

  // m_srh_ctrl_v - computed: true, optional: true, required: false
  private _mSrhCtrlV?: string; 
  public get mSrhCtrlV() {
    return this.getStringAttribute('m_srh_ctrl_v');
  }
  public set mSrhCtrlV(value: string) {
    this._mSrhCtrlV = value;
  }
  public resetMSrhCtrlV() {
    this._mSrhCtrlV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mSrhCtrlVInput() {
    return this._mSrhCtrlV;
  }

  // mac_id - computed: false, optional: true, required: false
  private _macId?: number; 
  public get macId() {
    return this.getNumberAttribute('mac_id');
  }
  public set macId(value: number) {
    this._macId = value;
  }
  public resetMacId() {
    this._macId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macIdInput() {
    return this._macId;
  }

  // mac_id_v - computed: true, optional: true, required: false
  private _macIdV?: string; 
  public get macIdV() {
    return this.getStringAttribute('mac_id_v');
  }
  public set macIdV(value: string) {
    this._macIdV = value;
  }
  public resetMacIdV() {
    this._macIdV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macIdVInput() {
    return this._macIdV;
  }

  // mss - computed: false, optional: true, required: false
  private _mss?: number; 
  public get mss() {
    return this.getNumberAttribute('mss');
  }
  public set mss(value: number) {
    this._mss = value;
  }
  public resetMss() {
    this._mss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mssInput() {
    return this._mss;
  }

  // mss_v - computed: true, optional: true, required: false
  private _mssV?: string; 
  public get mssV() {
    return this.getStringAttribute('mss_v');
  }
  public set mssV(value: string) {
    this._mssV = value;
  }
  public resetMssV() {
    this._mssV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mssVInput() {
    return this._mssV;
  }

  // pleen - computed: false, optional: true, required: false
  private _pleen?: number; 
  public get pleen() {
    return this.getNumberAttribute('pleen');
  }
  public set pleen(value: number) {
    this._pleen = value;
  }
  public resetPleen() {
    this._pleen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pleenInput() {
    return this._pleen;
  }

  // pleen_v - computed: true, optional: true, required: false
  private _pleenV?: string; 
  public get pleenV() {
    return this.getStringAttribute('pleen_v');
  }
  public set pleenV(value: string) {
    this._pleenV = value;
  }
  public resetPleenV() {
    this._pleenV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pleenVInput() {
    return this._pleenV;
  }

  // prio_pid - computed: false, optional: true, required: false
  private _prioPid?: number; 
  public get prioPid() {
    return this.getNumberAttribute('prio_pid');
  }
  public set prioPid(value: number) {
    this._prioPid = value;
  }
  public resetPrioPid() {
    this._prioPid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prioPidInput() {
    return this._prioPid;
  }

  // prio_pid_v - computed: true, optional: true, required: false
  private _prioPidV?: string; 
  public get prioPidV() {
    return this.getStringAttribute('prio_pid_v');
  }
  public set prioPidV(value: string) {
    this._prioPidV = value;
  }
  public resetPrioPidV() {
    this._prioPidV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prioPidVInput() {
    return this._prioPidV;
  }

  // promis - computed: false, optional: true, required: false
  private _promis?: number; 
  public get promis() {
    return this.getNumberAttribute('promis');
  }
  public set promis(value: number) {
    this._promis = value;
  }
  public resetPromis() {
    this._promis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promisInput() {
    return this._promis;
  }

  // promis_v - computed: true, optional: true, required: false
  private _promisV?: string; 
  public get promisV() {
    return this.getStringAttribute('promis_v');
  }
  public set promisV(value: string) {
    this._promisV = value;
  }
  public resetPromisV() {
    this._promisV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promisVInput() {
    return this._promisV;
  }

  // rfsh - computed: false, optional: true, required: false
  private _rfsh?: number; 
  public get rfsh() {
    return this.getNumberAttribute('rfsh');
  }
  public set rfsh(value: number) {
    this._rfsh = value;
  }
  public resetRfsh() {
    this._rfsh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rfshInput() {
    return this._rfsh;
  }

  // rfsh_v - computed: true, optional: true, required: false
  private _rfshV?: string; 
  public get rfshV() {
    return this.getStringAttribute('rfsh_v');
  }
  public set rfshV(value: string) {
    this._rfshV = value;
  }
  public resetRfshV() {
    this._rfshV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rfshVInput() {
    return this._rfshV;
  }

  // smac_skip - computed: false, optional: true, required: false
  private _smacSkip?: number; 
  public get smacSkip() {
    return this.getNumberAttribute('smac_skip');
  }
  public set smacSkip(value: number) {
    this._smacSkip = value;
  }
  public resetSmacSkip() {
    this._smacSkip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smacSkipInput() {
    return this._smacSkip;
  }

  // smac_skip_v - computed: true, optional: true, required: false
  private _smacSkipV?: string; 
  public get smacSkipV() {
    return this.getStringAttribute('smac_skip_v');
  }
  public set smacSkipV(value: string) {
    this._smacSkipV = value;
  }
  public resetSmacSkipV() {
    this._smacSkipV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smacSkipVInput() {
    return this._smacSkipV;
  }

  // tp_smchk - computed: false, optional: true, required: false
  private _tpSmchk?: number; 
  public get tpSmchk() {
    return this.getNumberAttribute('tp_smchk');
  }
  public set tpSmchk(value: number) {
    this._tpSmchk = value;
  }
  public resetTpSmchk() {
    this._tpSmchk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tpSmchkInput() {
    return this._tpSmchk;
  }

  // tp_smchk_v - computed: true, optional: true, required: false
  private _tpSmchkV?: string; 
  public get tpSmchkV() {
    return this.getStringAttribute('tp_smchk_v');
  }
  public set tpSmchkV(value: string) {
    this._tpSmchkV = value;
  }
  public resetTpSmchkV() {
    this._tpSmchkV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tpSmchkVInput() {
    return this._tpSmchkV;
  }

  // tpe_id - computed: false, optional: true, required: false
  private _tpeId?: number; 
  public get tpeId() {
    return this.getNumberAttribute('tpe_id');
  }
  public set tpeId(value: number) {
    this._tpeId = value;
  }
  public resetTpeId() {
    this._tpeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tpeIdInput() {
    return this._tpeId;
  }

  // tpe_id_v - computed: true, optional: true, required: false
  private _tpeIdV?: string; 
  public get tpeIdV() {
    return this.getStringAttribute('tpe_id_v');
  }
  public set tpeIdV(value: string) {
    this._tpeIdV = value;
  }
  public resetTpeIdV() {
    this._tpeIdV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tpeIdVInput() {
    return this._tpeIdV;
  }

  // vdm - computed: false, optional: true, required: false
  private _vdm?: number; 
  public get vdm() {
    return this.getNumberAttribute('vdm');
  }
  public set vdm(value: number) {
    this._vdm = value;
  }
  public resetVdm() {
    this._vdm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdmInput() {
    return this._vdm;
  }

  // vdm_v - computed: true, optional: true, required: false
  private _vdmV?: string; 
  public get vdmV() {
    return this.getStringAttribute('vdm_v');
  }
  public set vdmV(value: string) {
    this._vdmV = value;
  }
  public resetVdmV() {
    this._vdmV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdmVInput() {
    return this._vdmV;
  }

  // vdom_id - computed: false, optional: true, required: false
  private _vdomId?: number; 
  public get vdomId() {
    return this.getNumberAttribute('vdom_id');
  }
  public set vdomId(value: number) {
    this._vdomId = value;
  }
  public resetVdomId() {
    this._vdomId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomIdInput() {
    return this._vdomId;
  }

  // vdom_id_v - computed: true, optional: true, required: false
  private _vdomIdV?: string; 
  public get vdomIdV() {
    return this.getStringAttribute('vdom_id_v');
  }
  public set vdomIdV(value: string) {
    this._vdomIdV = value;
  }
  public resetVdomIdV() {
    this._vdomIdV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomIdVInput() {
    return this._vdomIdV;
  }

  // x_mode - computed: false, optional: true, required: false
  private _xMode?: number; 
  public get xMode() {
    return this.getNumberAttribute('x_mode');
  }
  public set xMode(value: number) {
    this._xMode = value;
  }
  public resetXMode() {
    this._xMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xModeInput() {
    return this._xMode;
  }

  // x_mode_v - computed: true, optional: true, required: false
  private _xModeV?: string; 
  public get xModeV() {
    return this.getStringAttribute('x_mode_v');
  }
  public set xModeV(value: string) {
    this._xModeV = value;
  }
  public resetXModeV() {
    this._xModeV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xModeVInput() {
    return this._xModeV;
  }
}
export interface ObjectSystemNpuNpuTcamTact {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#act ObjectSystemNpu#act}
  */
  readonly act?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#act_v ObjectSystemNpu#act_v}
  */
  readonly actV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#fmtuv4_s ObjectSystemNpu#fmtuv4_s}
  */
  readonly fmtuv4S?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#fmtuv4_s_v ObjectSystemNpu#fmtuv4_s_v}
  */
  readonly fmtuv4SV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#fmtuv6_s ObjectSystemNpu#fmtuv6_s}
  */
  readonly fmtuv6S?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#fmtuv6_s_v ObjectSystemNpu#fmtuv6_s_v}
  */
  readonly fmtuv6SV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#lnkid ObjectSystemNpu#lnkid}
  */
  readonly lnkid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#lnkid_v ObjectSystemNpu#lnkid_v}
  */
  readonly lnkidV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#mac_id ObjectSystemNpu#mac_id}
  */
  readonly macId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#mac_id_v ObjectSystemNpu#mac_id_v}
  */
  readonly macIdV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#mss_t ObjectSystemNpu#mss_t}
  */
  readonly mssT?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#mss_t_v ObjectSystemNpu#mss_t_v}
  */
  readonly mssTV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#mtuv4 ObjectSystemNpu#mtuv4}
  */
  readonly mtuv4?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#mtuv4_v ObjectSystemNpu#mtuv4_v}
  */
  readonly mtuv4V?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#mtuv6 ObjectSystemNpu#mtuv6}
  */
  readonly mtuv6?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#mtuv6_v ObjectSystemNpu#mtuv6_v}
  */
  readonly mtuv6V?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#slif_act ObjectSystemNpu#slif_act}
  */
  readonly slifAct?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#slif_act_v ObjectSystemNpu#slif_act_v}
  */
  readonly slifActV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#sublnkid ObjectSystemNpu#sublnkid}
  */
  readonly sublnkid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#sublnkid_v ObjectSystemNpu#sublnkid_v}
  */
  readonly sublnkidV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#tgtv_act ObjectSystemNpu#tgtv_act}
  */
  readonly tgtvAct?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#tgtv_act_v ObjectSystemNpu#tgtv_act_v}
  */
  readonly tgtvActV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#tlif_act ObjectSystemNpu#tlif_act}
  */
  readonly tlifAct?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#tlif_act_v ObjectSystemNpu#tlif_act_v}
  */
  readonly tlifActV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#tpeid ObjectSystemNpu#tpeid}
  */
  readonly tpeid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#tpeid_v ObjectSystemNpu#tpeid_v}
  */
  readonly tpeidV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#v6fe ObjectSystemNpu#v6fe}
  */
  readonly v6Fe?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#v6fe_v ObjectSystemNpu#v6fe_v}
  */
  readonly v6FeV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#vep_en ObjectSystemNpu#vep_en}
  */
  readonly vepEn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#vep_en_v ObjectSystemNpu#vep_en_v}
  */
  readonly vepEnV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#vep_slid ObjectSystemNpu#vep_slid}
  */
  readonly vepSlid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#vep_slid_v ObjectSystemNpu#vep_slid_v}
  */
  readonly vepSlidV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#xlt_lif ObjectSystemNpu#xlt_lif}
  */
  readonly xltLif?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#xlt_lif_v ObjectSystemNpu#xlt_lif_v}
  */
  readonly xltLifV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#xlt_vid ObjectSystemNpu#xlt_vid}
  */
  readonly xltVid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#xlt_vid_v ObjectSystemNpu#xlt_vid_v}
  */
  readonly xltVidV?: string;
}

export function objectSystemNpuNpuTcamTactToTerraform(struct?: ObjectSystemNpuNpuTcamTactOutputReference | ObjectSystemNpuNpuTcamTact): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    act: cdktf.numberToTerraform(struct!.act),
    act_v: cdktf.stringToTerraform(struct!.actV),
    fmtuv4_s: cdktf.numberToTerraform(struct!.fmtuv4S),
    fmtuv4_s_v: cdktf.stringToTerraform(struct!.fmtuv4SV),
    fmtuv6_s: cdktf.numberToTerraform(struct!.fmtuv6S),
    fmtuv6_s_v: cdktf.stringToTerraform(struct!.fmtuv6SV),
    lnkid: cdktf.numberToTerraform(struct!.lnkid),
    lnkid_v: cdktf.stringToTerraform(struct!.lnkidV),
    mac_id: cdktf.numberToTerraform(struct!.macId),
    mac_id_v: cdktf.stringToTerraform(struct!.macIdV),
    mss_t: cdktf.numberToTerraform(struct!.mssT),
    mss_t_v: cdktf.stringToTerraform(struct!.mssTV),
    mtuv4: cdktf.numberToTerraform(struct!.mtuv4),
    mtuv4_v: cdktf.stringToTerraform(struct!.mtuv4V),
    mtuv6: cdktf.numberToTerraform(struct!.mtuv6),
    mtuv6_v: cdktf.stringToTerraform(struct!.mtuv6V),
    slif_act: cdktf.numberToTerraform(struct!.slifAct),
    slif_act_v: cdktf.stringToTerraform(struct!.slifActV),
    sublnkid: cdktf.numberToTerraform(struct!.sublnkid),
    sublnkid_v: cdktf.stringToTerraform(struct!.sublnkidV),
    tgtv_act: cdktf.numberToTerraform(struct!.tgtvAct),
    tgtv_act_v: cdktf.stringToTerraform(struct!.tgtvActV),
    tlif_act: cdktf.numberToTerraform(struct!.tlifAct),
    tlif_act_v: cdktf.stringToTerraform(struct!.tlifActV),
    tpeid: cdktf.numberToTerraform(struct!.tpeid),
    tpeid_v: cdktf.stringToTerraform(struct!.tpeidV),
    v6fe: cdktf.numberToTerraform(struct!.v6Fe),
    v6fe_v: cdktf.stringToTerraform(struct!.v6FeV),
    vep_en: cdktf.numberToTerraform(struct!.vepEn),
    vep_en_v: cdktf.stringToTerraform(struct!.vepEnV),
    vep_slid: cdktf.numberToTerraform(struct!.vepSlid),
    vep_slid_v: cdktf.stringToTerraform(struct!.vepSlidV),
    xlt_lif: cdktf.numberToTerraform(struct!.xltLif),
    xlt_lif_v: cdktf.stringToTerraform(struct!.xltLifV),
    xlt_vid: cdktf.numberToTerraform(struct!.xltVid),
    xlt_vid_v: cdktf.stringToTerraform(struct!.xltVidV),
  }
}


export function objectSystemNpuNpuTcamTactToHclTerraform(struct?: ObjectSystemNpuNpuTcamTactOutputReference | ObjectSystemNpuNpuTcamTact): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    act: {
      value: cdktf.numberToHclTerraform(struct!.act),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    act_v: {
      value: cdktf.stringToHclTerraform(struct!.actV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fmtuv4_s: {
      value: cdktf.numberToHclTerraform(struct!.fmtuv4S),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fmtuv4_s_v: {
      value: cdktf.stringToHclTerraform(struct!.fmtuv4SV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fmtuv6_s: {
      value: cdktf.numberToHclTerraform(struct!.fmtuv6S),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fmtuv6_s_v: {
      value: cdktf.stringToHclTerraform(struct!.fmtuv6SV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lnkid: {
      value: cdktf.numberToHclTerraform(struct!.lnkid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lnkid_v: {
      value: cdktf.stringToHclTerraform(struct!.lnkidV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac_id: {
      value: cdktf.numberToHclTerraform(struct!.macId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mac_id_v: {
      value: cdktf.stringToHclTerraform(struct!.macIdV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mss_t: {
      value: cdktf.numberToHclTerraform(struct!.mssT),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mss_t_v: {
      value: cdktf.stringToHclTerraform(struct!.mssTV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mtuv4: {
      value: cdktf.numberToHclTerraform(struct!.mtuv4),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mtuv4_v: {
      value: cdktf.stringToHclTerraform(struct!.mtuv4V),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mtuv6: {
      value: cdktf.numberToHclTerraform(struct!.mtuv6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mtuv6_v: {
      value: cdktf.stringToHclTerraform(struct!.mtuv6V),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slif_act: {
      value: cdktf.numberToHclTerraform(struct!.slifAct),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slif_act_v: {
      value: cdktf.stringToHclTerraform(struct!.slifActV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sublnkid: {
      value: cdktf.numberToHclTerraform(struct!.sublnkid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sublnkid_v: {
      value: cdktf.stringToHclTerraform(struct!.sublnkidV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tgtv_act: {
      value: cdktf.numberToHclTerraform(struct!.tgtvAct),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tgtv_act_v: {
      value: cdktf.stringToHclTerraform(struct!.tgtvActV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tlif_act: {
      value: cdktf.numberToHclTerraform(struct!.tlifAct),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tlif_act_v: {
      value: cdktf.stringToHclTerraform(struct!.tlifActV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tpeid: {
      value: cdktf.numberToHclTerraform(struct!.tpeid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tpeid_v: {
      value: cdktf.stringToHclTerraform(struct!.tpeidV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    v6fe: {
      value: cdktf.numberToHclTerraform(struct!.v6Fe),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v6fe_v: {
      value: cdktf.stringToHclTerraform(struct!.v6FeV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vep_en: {
      value: cdktf.numberToHclTerraform(struct!.vepEn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vep_en_v: {
      value: cdktf.stringToHclTerraform(struct!.vepEnV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vep_slid: {
      value: cdktf.numberToHclTerraform(struct!.vepSlid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vep_slid_v: {
      value: cdktf.stringToHclTerraform(struct!.vepSlidV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    xlt_lif: {
      value: cdktf.numberToHclTerraform(struct!.xltLif),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    xlt_lif_v: {
      value: cdktf.stringToHclTerraform(struct!.xltLifV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    xlt_vid: {
      value: cdktf.numberToHclTerraform(struct!.xltVid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    xlt_vid_v: {
      value: cdktf.stringToHclTerraform(struct!.xltVidV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectSystemNpuNpuTcamTactOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectSystemNpuNpuTcamTact | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._act !== undefined) {
      hasAnyValues = true;
      internalValueResult.act = this._act;
    }
    if (this._actV !== undefined) {
      hasAnyValues = true;
      internalValueResult.actV = this._actV;
    }
    if (this._fmtuv4S !== undefined) {
      hasAnyValues = true;
      internalValueResult.fmtuv4S = this._fmtuv4S;
    }
    if (this._fmtuv4SV !== undefined) {
      hasAnyValues = true;
      internalValueResult.fmtuv4SV = this._fmtuv4SV;
    }
    if (this._fmtuv6S !== undefined) {
      hasAnyValues = true;
      internalValueResult.fmtuv6S = this._fmtuv6S;
    }
    if (this._fmtuv6SV !== undefined) {
      hasAnyValues = true;
      internalValueResult.fmtuv6SV = this._fmtuv6SV;
    }
    if (this._lnkid !== undefined) {
      hasAnyValues = true;
      internalValueResult.lnkid = this._lnkid;
    }
    if (this._lnkidV !== undefined) {
      hasAnyValues = true;
      internalValueResult.lnkidV = this._lnkidV;
    }
    if (this._macId !== undefined) {
      hasAnyValues = true;
      internalValueResult.macId = this._macId;
    }
    if (this._macIdV !== undefined) {
      hasAnyValues = true;
      internalValueResult.macIdV = this._macIdV;
    }
    if (this._mssT !== undefined) {
      hasAnyValues = true;
      internalValueResult.mssT = this._mssT;
    }
    if (this._mssTV !== undefined) {
      hasAnyValues = true;
      internalValueResult.mssTV = this._mssTV;
    }
    if (this._mtuv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtuv4 = this._mtuv4;
    }
    if (this._mtuv4V !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtuv4V = this._mtuv4V;
    }
    if (this._mtuv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtuv6 = this._mtuv6;
    }
    if (this._mtuv6V !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtuv6V = this._mtuv6V;
    }
    if (this._slifAct !== undefined) {
      hasAnyValues = true;
      internalValueResult.slifAct = this._slifAct;
    }
    if (this._slifActV !== undefined) {
      hasAnyValues = true;
      internalValueResult.slifActV = this._slifActV;
    }
    if (this._sublnkid !== undefined) {
      hasAnyValues = true;
      internalValueResult.sublnkid = this._sublnkid;
    }
    if (this._sublnkidV !== undefined) {
      hasAnyValues = true;
      internalValueResult.sublnkidV = this._sublnkidV;
    }
    if (this._tgtvAct !== undefined) {
      hasAnyValues = true;
      internalValueResult.tgtvAct = this._tgtvAct;
    }
    if (this._tgtvActV !== undefined) {
      hasAnyValues = true;
      internalValueResult.tgtvActV = this._tgtvActV;
    }
    if (this._tlifAct !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlifAct = this._tlifAct;
    }
    if (this._tlifActV !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlifActV = this._tlifActV;
    }
    if (this._tpeid !== undefined) {
      hasAnyValues = true;
      internalValueResult.tpeid = this._tpeid;
    }
    if (this._tpeidV !== undefined) {
      hasAnyValues = true;
      internalValueResult.tpeidV = this._tpeidV;
    }
    if (this._v6Fe !== undefined) {
      hasAnyValues = true;
      internalValueResult.v6Fe = this._v6Fe;
    }
    if (this._v6FeV !== undefined) {
      hasAnyValues = true;
      internalValueResult.v6FeV = this._v6FeV;
    }
    if (this._vepEn !== undefined) {
      hasAnyValues = true;
      internalValueResult.vepEn = this._vepEn;
    }
    if (this._vepEnV !== undefined) {
      hasAnyValues = true;
      internalValueResult.vepEnV = this._vepEnV;
    }
    if (this._vepSlid !== undefined) {
      hasAnyValues = true;
      internalValueResult.vepSlid = this._vepSlid;
    }
    if (this._vepSlidV !== undefined) {
      hasAnyValues = true;
      internalValueResult.vepSlidV = this._vepSlidV;
    }
    if (this._xltLif !== undefined) {
      hasAnyValues = true;
      internalValueResult.xltLif = this._xltLif;
    }
    if (this._xltLifV !== undefined) {
      hasAnyValues = true;
      internalValueResult.xltLifV = this._xltLifV;
    }
    if (this._xltVid !== undefined) {
      hasAnyValues = true;
      internalValueResult.xltVid = this._xltVid;
    }
    if (this._xltVidV !== undefined) {
      hasAnyValues = true;
      internalValueResult.xltVidV = this._xltVidV;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectSystemNpuNpuTcamTact | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._act = undefined;
      this._actV = undefined;
      this._fmtuv4S = undefined;
      this._fmtuv4SV = undefined;
      this._fmtuv6S = undefined;
      this._fmtuv6SV = undefined;
      this._lnkid = undefined;
      this._lnkidV = undefined;
      this._macId = undefined;
      this._macIdV = undefined;
      this._mssT = undefined;
      this._mssTV = undefined;
      this._mtuv4 = undefined;
      this._mtuv4V = undefined;
      this._mtuv6 = undefined;
      this._mtuv6V = undefined;
      this._slifAct = undefined;
      this._slifActV = undefined;
      this._sublnkid = undefined;
      this._sublnkidV = undefined;
      this._tgtvAct = undefined;
      this._tgtvActV = undefined;
      this._tlifAct = undefined;
      this._tlifActV = undefined;
      this._tpeid = undefined;
      this._tpeidV = undefined;
      this._v6Fe = undefined;
      this._v6FeV = undefined;
      this._vepEn = undefined;
      this._vepEnV = undefined;
      this._vepSlid = undefined;
      this._vepSlidV = undefined;
      this._xltLif = undefined;
      this._xltLifV = undefined;
      this._xltVid = undefined;
      this._xltVidV = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._act = value.act;
      this._actV = value.actV;
      this._fmtuv4S = value.fmtuv4S;
      this._fmtuv4SV = value.fmtuv4SV;
      this._fmtuv6S = value.fmtuv6S;
      this._fmtuv6SV = value.fmtuv6SV;
      this._lnkid = value.lnkid;
      this._lnkidV = value.lnkidV;
      this._macId = value.macId;
      this._macIdV = value.macIdV;
      this._mssT = value.mssT;
      this._mssTV = value.mssTV;
      this._mtuv4 = value.mtuv4;
      this._mtuv4V = value.mtuv4V;
      this._mtuv6 = value.mtuv6;
      this._mtuv6V = value.mtuv6V;
      this._slifAct = value.slifAct;
      this._slifActV = value.slifActV;
      this._sublnkid = value.sublnkid;
      this._sublnkidV = value.sublnkidV;
      this._tgtvAct = value.tgtvAct;
      this._tgtvActV = value.tgtvActV;
      this._tlifAct = value.tlifAct;
      this._tlifActV = value.tlifActV;
      this._tpeid = value.tpeid;
      this._tpeidV = value.tpeidV;
      this._v6Fe = value.v6Fe;
      this._v6FeV = value.v6FeV;
      this._vepEn = value.vepEn;
      this._vepEnV = value.vepEnV;
      this._vepSlid = value.vepSlid;
      this._vepSlidV = value.vepSlidV;
      this._xltLif = value.xltLif;
      this._xltLifV = value.xltLifV;
      this._xltVid = value.xltVid;
      this._xltVidV = value.xltVidV;
    }
  }

  // act - computed: false, optional: true, required: false
  private _act?: number; 
  public get act() {
    return this.getNumberAttribute('act');
  }
  public set act(value: number) {
    this._act = value;
  }
  public resetAct() {
    this._act = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actInput() {
    return this._act;
  }

  // act_v - computed: true, optional: true, required: false
  private _actV?: string; 
  public get actV() {
    return this.getStringAttribute('act_v');
  }
  public set actV(value: string) {
    this._actV = value;
  }
  public resetActV() {
    this._actV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actVInput() {
    return this._actV;
  }

  // fmtuv4_s - computed: false, optional: true, required: false
  private _fmtuv4S?: number; 
  public get fmtuv4S() {
    return this.getNumberAttribute('fmtuv4_s');
  }
  public set fmtuv4S(value: number) {
    this._fmtuv4S = value;
  }
  public resetFmtuv4S() {
    this._fmtuv4S = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fmtuv4SInput() {
    return this._fmtuv4S;
  }

  // fmtuv4_s_v - computed: true, optional: true, required: false
  private _fmtuv4SV?: string; 
  public get fmtuv4SV() {
    return this.getStringAttribute('fmtuv4_s_v');
  }
  public set fmtuv4SV(value: string) {
    this._fmtuv4SV = value;
  }
  public resetFmtuv4SV() {
    this._fmtuv4SV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fmtuv4SVInput() {
    return this._fmtuv4SV;
  }

  // fmtuv6_s - computed: false, optional: true, required: false
  private _fmtuv6S?: number; 
  public get fmtuv6S() {
    return this.getNumberAttribute('fmtuv6_s');
  }
  public set fmtuv6S(value: number) {
    this._fmtuv6S = value;
  }
  public resetFmtuv6S() {
    this._fmtuv6S = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fmtuv6SInput() {
    return this._fmtuv6S;
  }

  // fmtuv6_s_v - computed: true, optional: true, required: false
  private _fmtuv6SV?: string; 
  public get fmtuv6SV() {
    return this.getStringAttribute('fmtuv6_s_v');
  }
  public set fmtuv6SV(value: string) {
    this._fmtuv6SV = value;
  }
  public resetFmtuv6SV() {
    this._fmtuv6SV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fmtuv6SVInput() {
    return this._fmtuv6SV;
  }

  // lnkid - computed: false, optional: true, required: false
  private _lnkid?: number; 
  public get lnkid() {
    return this.getNumberAttribute('lnkid');
  }
  public set lnkid(value: number) {
    this._lnkid = value;
  }
  public resetLnkid() {
    this._lnkid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lnkidInput() {
    return this._lnkid;
  }

  // lnkid_v - computed: true, optional: true, required: false
  private _lnkidV?: string; 
  public get lnkidV() {
    return this.getStringAttribute('lnkid_v');
  }
  public set lnkidV(value: string) {
    this._lnkidV = value;
  }
  public resetLnkidV() {
    this._lnkidV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lnkidVInput() {
    return this._lnkidV;
  }

  // mac_id - computed: false, optional: true, required: false
  private _macId?: number; 
  public get macId() {
    return this.getNumberAttribute('mac_id');
  }
  public set macId(value: number) {
    this._macId = value;
  }
  public resetMacId() {
    this._macId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macIdInput() {
    return this._macId;
  }

  // mac_id_v - computed: true, optional: true, required: false
  private _macIdV?: string; 
  public get macIdV() {
    return this.getStringAttribute('mac_id_v');
  }
  public set macIdV(value: string) {
    this._macIdV = value;
  }
  public resetMacIdV() {
    this._macIdV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macIdVInput() {
    return this._macIdV;
  }

  // mss_t - computed: false, optional: true, required: false
  private _mssT?: number; 
  public get mssT() {
    return this.getNumberAttribute('mss_t');
  }
  public set mssT(value: number) {
    this._mssT = value;
  }
  public resetMssT() {
    this._mssT = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mssTInput() {
    return this._mssT;
  }

  // mss_t_v - computed: true, optional: true, required: false
  private _mssTV?: string; 
  public get mssTV() {
    return this.getStringAttribute('mss_t_v');
  }
  public set mssTV(value: string) {
    this._mssTV = value;
  }
  public resetMssTV() {
    this._mssTV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mssTVInput() {
    return this._mssTV;
  }

  // mtuv4 - computed: false, optional: true, required: false
  private _mtuv4?: number; 
  public get mtuv4() {
    return this.getNumberAttribute('mtuv4');
  }
  public set mtuv4(value: number) {
    this._mtuv4 = value;
  }
  public resetMtuv4() {
    this._mtuv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuv4Input() {
    return this._mtuv4;
  }

  // mtuv4_v - computed: true, optional: true, required: false
  private _mtuv4V?: string; 
  public get mtuv4V() {
    return this.getStringAttribute('mtuv4_v');
  }
  public set mtuv4V(value: string) {
    this._mtuv4V = value;
  }
  public resetMtuv4V() {
    this._mtuv4V = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuv4VInput() {
    return this._mtuv4V;
  }

  // mtuv6 - computed: false, optional: true, required: false
  private _mtuv6?: number; 
  public get mtuv6() {
    return this.getNumberAttribute('mtuv6');
  }
  public set mtuv6(value: number) {
    this._mtuv6 = value;
  }
  public resetMtuv6() {
    this._mtuv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuv6Input() {
    return this._mtuv6;
  }

  // mtuv6_v - computed: true, optional: true, required: false
  private _mtuv6V?: string; 
  public get mtuv6V() {
    return this.getStringAttribute('mtuv6_v');
  }
  public set mtuv6V(value: string) {
    this._mtuv6V = value;
  }
  public resetMtuv6V() {
    this._mtuv6V = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuv6VInput() {
    return this._mtuv6V;
  }

  // slif_act - computed: false, optional: true, required: false
  private _slifAct?: number; 
  public get slifAct() {
    return this.getNumberAttribute('slif_act');
  }
  public set slifAct(value: number) {
    this._slifAct = value;
  }
  public resetSlifAct() {
    this._slifAct = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slifActInput() {
    return this._slifAct;
  }

  // slif_act_v - computed: true, optional: true, required: false
  private _slifActV?: string; 
  public get slifActV() {
    return this.getStringAttribute('slif_act_v');
  }
  public set slifActV(value: string) {
    this._slifActV = value;
  }
  public resetSlifActV() {
    this._slifActV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slifActVInput() {
    return this._slifActV;
  }

  // sublnkid - computed: false, optional: true, required: false
  private _sublnkid?: number; 
  public get sublnkid() {
    return this.getNumberAttribute('sublnkid');
  }
  public set sublnkid(value: number) {
    this._sublnkid = value;
  }
  public resetSublnkid() {
    this._sublnkid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sublnkidInput() {
    return this._sublnkid;
  }

  // sublnkid_v - computed: true, optional: true, required: false
  private _sublnkidV?: string; 
  public get sublnkidV() {
    return this.getStringAttribute('sublnkid_v');
  }
  public set sublnkidV(value: string) {
    this._sublnkidV = value;
  }
  public resetSublnkidV() {
    this._sublnkidV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sublnkidVInput() {
    return this._sublnkidV;
  }

  // tgtv_act - computed: false, optional: true, required: false
  private _tgtvAct?: number; 
  public get tgtvAct() {
    return this.getNumberAttribute('tgtv_act');
  }
  public set tgtvAct(value: number) {
    this._tgtvAct = value;
  }
  public resetTgtvAct() {
    this._tgtvAct = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tgtvActInput() {
    return this._tgtvAct;
  }

  // tgtv_act_v - computed: true, optional: true, required: false
  private _tgtvActV?: string; 
  public get tgtvActV() {
    return this.getStringAttribute('tgtv_act_v');
  }
  public set tgtvActV(value: string) {
    this._tgtvActV = value;
  }
  public resetTgtvActV() {
    this._tgtvActV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tgtvActVInput() {
    return this._tgtvActV;
  }

  // tlif_act - computed: false, optional: true, required: false
  private _tlifAct?: number; 
  public get tlifAct() {
    return this.getNumberAttribute('tlif_act');
  }
  public set tlifAct(value: number) {
    this._tlifAct = value;
  }
  public resetTlifAct() {
    this._tlifAct = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlifActInput() {
    return this._tlifAct;
  }

  // tlif_act_v - computed: true, optional: true, required: false
  private _tlifActV?: string; 
  public get tlifActV() {
    return this.getStringAttribute('tlif_act_v');
  }
  public set tlifActV(value: string) {
    this._tlifActV = value;
  }
  public resetTlifActV() {
    this._tlifActV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlifActVInput() {
    return this._tlifActV;
  }

  // tpeid - computed: false, optional: true, required: false
  private _tpeid?: number; 
  public get tpeid() {
    return this.getNumberAttribute('tpeid');
  }
  public set tpeid(value: number) {
    this._tpeid = value;
  }
  public resetTpeid() {
    this._tpeid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tpeidInput() {
    return this._tpeid;
  }

  // tpeid_v - computed: true, optional: true, required: false
  private _tpeidV?: string; 
  public get tpeidV() {
    return this.getStringAttribute('tpeid_v');
  }
  public set tpeidV(value: string) {
    this._tpeidV = value;
  }
  public resetTpeidV() {
    this._tpeidV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tpeidVInput() {
    return this._tpeidV;
  }

  // v6fe - computed: false, optional: true, required: false
  private _v6Fe?: number; 
  public get v6Fe() {
    return this.getNumberAttribute('v6fe');
  }
  public set v6Fe(value: number) {
    this._v6Fe = value;
  }
  public resetV6Fe() {
    this._v6Fe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v6FeInput() {
    return this._v6Fe;
  }

  // v6fe_v - computed: true, optional: true, required: false
  private _v6FeV?: string; 
  public get v6FeV() {
    return this.getStringAttribute('v6fe_v');
  }
  public set v6FeV(value: string) {
    this._v6FeV = value;
  }
  public resetV6FeV() {
    this._v6FeV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v6FeVInput() {
    return this._v6FeV;
  }

  // vep_en - computed: false, optional: true, required: false
  private _vepEn?: number; 
  public get vepEn() {
    return this.getNumberAttribute('vep_en');
  }
  public set vepEn(value: number) {
    this._vepEn = value;
  }
  public resetVepEn() {
    this._vepEn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vepEnInput() {
    return this._vepEn;
  }

  // vep_en_v - computed: true, optional: true, required: false
  private _vepEnV?: string; 
  public get vepEnV() {
    return this.getStringAttribute('vep_en_v');
  }
  public set vepEnV(value: string) {
    this._vepEnV = value;
  }
  public resetVepEnV() {
    this._vepEnV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vepEnVInput() {
    return this._vepEnV;
  }

  // vep_slid - computed: false, optional: true, required: false
  private _vepSlid?: number; 
  public get vepSlid() {
    return this.getNumberAttribute('vep_slid');
  }
  public set vepSlid(value: number) {
    this._vepSlid = value;
  }
  public resetVepSlid() {
    this._vepSlid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vepSlidInput() {
    return this._vepSlid;
  }

  // vep_slid_v - computed: true, optional: true, required: false
  private _vepSlidV?: string; 
  public get vepSlidV() {
    return this.getStringAttribute('vep_slid_v');
  }
  public set vepSlidV(value: string) {
    this._vepSlidV = value;
  }
  public resetVepSlidV() {
    this._vepSlidV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vepSlidVInput() {
    return this._vepSlidV;
  }

  // xlt_lif - computed: false, optional: true, required: false
  private _xltLif?: number; 
  public get xltLif() {
    return this.getNumberAttribute('xlt_lif');
  }
  public set xltLif(value: number) {
    this._xltLif = value;
  }
  public resetXltLif() {
    this._xltLif = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xltLifInput() {
    return this._xltLif;
  }

  // xlt_lif_v - computed: true, optional: true, required: false
  private _xltLifV?: string; 
  public get xltLifV() {
    return this.getStringAttribute('xlt_lif_v');
  }
  public set xltLifV(value: string) {
    this._xltLifV = value;
  }
  public resetXltLifV() {
    this._xltLifV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xltLifVInput() {
    return this._xltLifV;
  }

  // xlt_vid - computed: false, optional: true, required: false
  private _xltVid?: number; 
  public get xltVid() {
    return this.getNumberAttribute('xlt_vid');
  }
  public set xltVid(value: number) {
    this._xltVid = value;
  }
  public resetXltVid() {
    this._xltVid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xltVidInput() {
    return this._xltVid;
  }

  // xlt_vid_v - computed: true, optional: true, required: false
  private _xltVidV?: string; 
  public get xltVidV() {
    return this.getStringAttribute('xlt_vid_v');
  }
  public set xltVidV(value: string) {
    this._xltVidV = value;
  }
  public resetXltVidV() {
    this._xltVidV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xltVidVInput() {
    return this._xltVidV;
  }
}
export interface ObjectSystemNpuNpuTcam {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#dbg_dump ObjectSystemNpu#dbg_dump}
  */
  readonly dbgDump?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#name ObjectSystemNpu#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#oid ObjectSystemNpu#oid}
  */
  readonly oid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#type ObjectSystemNpu#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#vid ObjectSystemNpu#vid}
  */
  readonly vid?: number;
  /**
  * data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#data ObjectSystemNpu#data}
  */
  readonly data?: ObjectSystemNpuNpuTcamData;
  /**
  * mask block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#mask ObjectSystemNpu#mask}
  */
  readonly mask?: ObjectSystemNpuNpuTcamMask;
  /**
  * mir_act block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#mir_act ObjectSystemNpu#mir_act}
  */
  readonly mirAct?: ObjectSystemNpuNpuTcamMirAct;
  /**
  * pri_act block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#pri_act ObjectSystemNpu#pri_act}
  */
  readonly priAct?: ObjectSystemNpuNpuTcamPriAct;
  /**
  * sact block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#sact ObjectSystemNpu#sact}
  */
  readonly sact?: ObjectSystemNpuNpuTcamSact;
  /**
  * tact block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#tact ObjectSystemNpu#tact}
  */
  readonly tact?: ObjectSystemNpuNpuTcamTact;
}

export function objectSystemNpuNpuTcamToTerraform(struct?: ObjectSystemNpuNpuTcam | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dbg_dump: cdktf.numberToTerraform(struct!.dbgDump),
    name: cdktf.stringToTerraform(struct!.name),
    oid: cdktf.numberToTerraform(struct!.oid),
    type: cdktf.stringToTerraform(struct!.type),
    vid: cdktf.numberToTerraform(struct!.vid),
    data: objectSystemNpuNpuTcamDataToTerraform(struct!.data),
    mask: objectSystemNpuNpuTcamMaskToTerraform(struct!.mask),
    mir_act: objectSystemNpuNpuTcamMirActToTerraform(struct!.mirAct),
    pri_act: objectSystemNpuNpuTcamPriActToTerraform(struct!.priAct),
    sact: objectSystemNpuNpuTcamSactToTerraform(struct!.sact),
    tact: objectSystemNpuNpuTcamTactToTerraform(struct!.tact),
  }
}


export function objectSystemNpuNpuTcamToHclTerraform(struct?: ObjectSystemNpuNpuTcam | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dbg_dump: {
      value: cdktf.numberToHclTerraform(struct!.dbgDump),
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
    oid: {
      value: cdktf.numberToHclTerraform(struct!.oid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vid: {
      value: cdktf.numberToHclTerraform(struct!.vid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data: {
      value: objectSystemNpuNpuTcamDataToHclTerraform(struct!.data),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectSystemNpuNpuTcamDataList",
    },
    mask: {
      value: objectSystemNpuNpuTcamMaskToHclTerraform(struct!.mask),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectSystemNpuNpuTcamMaskList",
    },
    mir_act: {
      value: objectSystemNpuNpuTcamMirActToHclTerraform(struct!.mirAct),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectSystemNpuNpuTcamMirActList",
    },
    pri_act: {
      value: objectSystemNpuNpuTcamPriActToHclTerraform(struct!.priAct),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectSystemNpuNpuTcamPriActList",
    },
    sact: {
      value: objectSystemNpuNpuTcamSactToHclTerraform(struct!.sact),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectSystemNpuNpuTcamSactList",
    },
    tact: {
      value: objectSystemNpuNpuTcamTactToHclTerraform(struct!.tact),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectSystemNpuNpuTcamTactList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectSystemNpuNpuTcamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectSystemNpuNpuTcam | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dbgDump !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbgDump = this._dbgDump;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._oid !== undefined) {
      hasAnyValues = true;
      internalValueResult.oid = this._oid;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._vid !== undefined) {
      hasAnyValues = true;
      internalValueResult.vid = this._vid;
    }
    if (this._data?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data?.internalValue;
    }
    if (this._mask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask?.internalValue;
    }
    if (this._mirAct?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirAct = this._mirAct?.internalValue;
    }
    if (this._priAct?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.priAct = this._priAct?.internalValue;
    }
    if (this._sact?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sact = this._sact?.internalValue;
    }
    if (this._tact?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tact = this._tact?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectSystemNpuNpuTcam | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dbgDump = undefined;
      this._name = undefined;
      this._oid = undefined;
      this._type = undefined;
      this._vid = undefined;
      this._data.internalValue = undefined;
      this._mask.internalValue = undefined;
      this._mirAct.internalValue = undefined;
      this._priAct.internalValue = undefined;
      this._sact.internalValue = undefined;
      this._tact.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dbgDump = value.dbgDump;
      this._name = value.name;
      this._oid = value.oid;
      this._type = value.type;
      this._vid = value.vid;
      this._data.internalValue = value.data;
      this._mask.internalValue = value.mask;
      this._mirAct.internalValue = value.mirAct;
      this._priAct.internalValue = value.priAct;
      this._sact.internalValue = value.sact;
      this._tact.internalValue = value.tact;
    }
  }

  // dbg_dump - computed: false, optional: true, required: false
  private _dbgDump?: number; 
  public get dbgDump() {
    return this.getNumberAttribute('dbg_dump');
  }
  public set dbgDump(value: number) {
    this._dbgDump = value;
  }
  public resetDbgDump() {
    this._dbgDump = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbgDumpInput() {
    return this._dbgDump;
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

  // oid - computed: true, optional: true, required: false
  private _oid?: number; 
  public get oid() {
    return this.getNumberAttribute('oid');
  }
  public set oid(value: number) {
    this._oid = value;
  }
  public resetOid() {
    this._oid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidInput() {
    return this._oid;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // vid - computed: false, optional: true, required: false
  private _vid?: number; 
  public get vid() {
    return this.getNumberAttribute('vid');
  }
  public set vid(value: number) {
    this._vid = value;
  }
  public resetVid() {
    this._vid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vidInput() {
    return this._vid;
  }

  // data - computed: false, optional: true, required: false
  private _data = new ObjectSystemNpuNpuTcamDataOutputReference(this, "data");
  public get data() {
    return this._data;
  }
  public putData(value: ObjectSystemNpuNpuTcamData) {
    this._data.internalValue = value;
  }
  public resetData() {
    this._data.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data.internalValue;
  }

  // mask - computed: false, optional: true, required: false
  private _mask = new ObjectSystemNpuNpuTcamMaskOutputReference(this, "mask");
  public get mask() {
    return this._mask;
  }
  public putMask(value: ObjectSystemNpuNpuTcamMask) {
    this._mask.internalValue = value;
  }
  public resetMask() {
    this._mask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask.internalValue;
  }

  // mir_act - computed: false, optional: true, required: false
  private _mirAct = new ObjectSystemNpuNpuTcamMirActOutputReference(this, "mir_act");
  public get mirAct() {
    return this._mirAct;
  }
  public putMirAct(value: ObjectSystemNpuNpuTcamMirAct) {
    this._mirAct.internalValue = value;
  }
  public resetMirAct() {
    this._mirAct.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirActInput() {
    return this._mirAct.internalValue;
  }

  // pri_act - computed: false, optional: true, required: false
  private _priAct = new ObjectSystemNpuNpuTcamPriActOutputReference(this, "pri_act");
  public get priAct() {
    return this._priAct;
  }
  public putPriAct(value: ObjectSystemNpuNpuTcamPriAct) {
    this._priAct.internalValue = value;
  }
  public resetPriAct() {
    this._priAct.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priActInput() {
    return this._priAct.internalValue;
  }

  // sact - computed: false, optional: true, required: false
  private _sact = new ObjectSystemNpuNpuTcamSactOutputReference(this, "sact");
  public get sact() {
    return this._sact;
  }
  public putSact(value: ObjectSystemNpuNpuTcamSact) {
    this._sact.internalValue = value;
  }
  public resetSact() {
    this._sact.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sactInput() {
    return this._sact.internalValue;
  }

  // tact - computed: false, optional: true, required: false
  private _tact = new ObjectSystemNpuNpuTcamTactOutputReference(this, "tact");
  public get tact() {
    return this._tact;
  }
  public putTact(value: ObjectSystemNpuNpuTcamTact) {
    this._tact.internalValue = value;
  }
  public resetTact() {
    this._tact.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tactInput() {
    return this._tact.internalValue;
  }
}

export class ObjectSystemNpuNpuTcamList extends cdktf.ComplexList {
  public internalValue? : ObjectSystemNpuNpuTcam[] | cdktf.IResolvable

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
  public get(index: number): ObjectSystemNpuNpuTcamOutputReference {
    return new ObjectSystemNpuNpuTcamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectSystemNpuPortCpuMap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#cpu_core ObjectSystemNpu#cpu_core}
  */
  readonly cpuCore?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#interface ObjectSystemNpu#interface}
  */
  readonly interface?: string;
}

export function objectSystemNpuPortCpuMapToTerraform(struct?: ObjectSystemNpuPortCpuMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_core: cdktf.stringToTerraform(struct!.cpuCore),
    interface: cdktf.stringToTerraform(struct!.interface),
  }
}


export function objectSystemNpuPortCpuMapToHclTerraform(struct?: ObjectSystemNpuPortCpuMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_core: {
      value: cdktf.stringToHclTerraform(struct!.cpuCore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface: {
      value: cdktf.stringToHclTerraform(struct!.interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectSystemNpuPortCpuMapOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectSystemNpuPortCpuMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuCore !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuCore = this._cpuCore;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectSystemNpuPortCpuMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpuCore = undefined;
      this._interface = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpuCore = value.cpuCore;
      this._interface = value.interface;
    }
  }

  // cpu_core - computed: true, optional: true, required: false
  private _cpuCore?: string; 
  public get cpuCore() {
    return this.getStringAttribute('cpu_core');
  }
  public set cpuCore(value: string) {
    this._cpuCore = value;
  }
  public resetCpuCore() {
    this._cpuCore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCoreInput() {
    return this._cpuCore;
  }

  // interface - computed: true, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }
}

export class ObjectSystemNpuPortCpuMapList extends cdktf.ComplexList {
  public internalValue? : ObjectSystemNpuPortCpuMap[] | cdktf.IResolvable

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
  public get(index: number): ObjectSystemNpuPortCpuMapOutputReference {
    return new ObjectSystemNpuPortCpuMapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectSystemNpuPortNpuMap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#interface ObjectSystemNpu#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#npu_group_index ObjectSystemNpu#npu_group_index}
  */
  readonly npuGroupIndex?: number;
}

export function objectSystemNpuPortNpuMapToTerraform(struct?: ObjectSystemNpuPortNpuMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface: cdktf.stringToTerraform(struct!.interface),
    npu_group_index: cdktf.numberToTerraform(struct!.npuGroupIndex),
  }
}


export function objectSystemNpuPortNpuMapToHclTerraform(struct?: ObjectSystemNpuPortNpuMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface: {
      value: cdktf.stringToHclTerraform(struct!.interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    npu_group_index: {
      value: cdktf.numberToHclTerraform(struct!.npuGroupIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectSystemNpuPortNpuMapOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectSystemNpuPortNpuMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._npuGroupIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.npuGroupIndex = this._npuGroupIndex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectSystemNpuPortNpuMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interface = undefined;
      this._npuGroupIndex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interface = value.interface;
      this._npuGroupIndex = value.npuGroupIndex;
    }
  }

  // interface - computed: true, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // npu_group_index - computed: false, optional: true, required: false
  private _npuGroupIndex?: number; 
  public get npuGroupIndex() {
    return this.getNumberAttribute('npu_group_index');
  }
  public set npuGroupIndex(value: number) {
    this._npuGroupIndex = value;
  }
  public resetNpuGroupIndex() {
    this._npuGroupIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get npuGroupIndexInput() {
    return this._npuGroupIndex;
  }
}

export class ObjectSystemNpuPortNpuMapList extends cdktf.ComplexList {
  public internalValue? : ObjectSystemNpuPortNpuMap[] | cdktf.IResolvable

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
  public get(index: number): ObjectSystemNpuPortNpuMapOutputReference {
    return new ObjectSystemNpuPortNpuMapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectSystemNpuPortPathOption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#ports_using_npu ObjectSystemNpu#ports_using_npu}
  */
  readonly portsUsingNpu?: string[];
}

export function objectSystemNpuPortPathOptionToTerraform(struct?: ObjectSystemNpuPortPathOptionOutputReference | ObjectSystemNpuPortPathOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ports_using_npu: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.portsUsingNpu),
  }
}


export function objectSystemNpuPortPathOptionToHclTerraform(struct?: ObjectSystemNpuPortPathOptionOutputReference | ObjectSystemNpuPortPathOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ports_using_npu: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.portsUsingNpu),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectSystemNpuPortPathOptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectSystemNpuPortPathOption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._portsUsingNpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.portsUsingNpu = this._portsUsingNpu;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectSystemNpuPortPathOption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._portsUsingNpu = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._portsUsingNpu = value.portsUsingNpu;
    }
  }

  // ports_using_npu - computed: true, optional: true, required: false
  private _portsUsingNpu?: string[]; 
  public get portsUsingNpu() {
    return cdktf.Fn.tolist(this.getListAttribute('ports_using_npu'));
  }
  public set portsUsingNpu(value: string[]) {
    this._portsUsingNpu = value;
  }
  public resetPortsUsingNpu() {
    this._portsUsingNpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsUsingNpuInput() {
    return this._portsUsingNpu;
  }
}
export interface ObjectSystemNpuPriorityProtocol {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#bfd ObjectSystemNpu#bfd}
  */
  readonly bfd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#bgp ObjectSystemNpu#bgp}
  */
  readonly bgp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#slbc ObjectSystemNpu#slbc}
  */
  readonly slbc?: string;
}

export function objectSystemNpuPriorityProtocolToTerraform(struct?: ObjectSystemNpuPriorityProtocolOutputReference | ObjectSystemNpuPriorityProtocol): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bfd: cdktf.stringToTerraform(struct!.bfd),
    bgp: cdktf.stringToTerraform(struct!.bgp),
    slbc: cdktf.stringToTerraform(struct!.slbc),
  }
}


export function objectSystemNpuPriorityProtocolToHclTerraform(struct?: ObjectSystemNpuPriorityProtocolOutputReference | ObjectSystemNpuPriorityProtocol): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bfd: {
      value: cdktf.stringToHclTerraform(struct!.bfd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bgp: {
      value: cdktf.stringToHclTerraform(struct!.bgp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slbc: {
      value: cdktf.stringToHclTerraform(struct!.slbc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectSystemNpuPriorityProtocolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectSystemNpuPriorityProtocol | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bfd !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfd = this._bfd;
    }
    if (this._bgp !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgp = this._bgp;
    }
    if (this._slbc !== undefined) {
      hasAnyValues = true;
      internalValueResult.slbc = this._slbc;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectSystemNpuPriorityProtocol | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bfd = undefined;
      this._bgp = undefined;
      this._slbc = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bfd = value.bfd;
      this._bgp = value.bgp;
      this._slbc = value.slbc;
    }
  }

  // bfd - computed: true, optional: true, required: false
  private _bfd?: string; 
  public get bfd() {
    return this.getStringAttribute('bfd');
  }
  public set bfd(value: string) {
    this._bfd = value;
  }
  public resetBfd() {
    this._bfd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdInput() {
    return this._bfd;
  }

  // bgp - computed: true, optional: true, required: false
  private _bgp?: string; 
  public get bgp() {
    return this.getStringAttribute('bgp');
  }
  public set bgp(value: string) {
    this._bgp = value;
  }
  public resetBgp() {
    this._bgp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpInput() {
    return this._bgp;
  }

  // slbc - computed: true, optional: true, required: false
  private _slbc?: string; 
  public get slbc() {
    return this.getStringAttribute('slbc');
  }
  public set slbc(value: string) {
    this._slbc = value;
  }
  public resetSlbc() {
    this._slbc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbcInput() {
    return this._slbc;
  }
}
export interface ObjectSystemNpuSseHaScan {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#gap ObjectSystemNpu#gap}
  */
  readonly gap?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#max_session_cnt ObjectSystemNpu#max_session_cnt}
  */
  readonly maxSessionCnt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#min_duration ObjectSystemNpu#min_duration}
  */
  readonly minDuration?: number;
}

export function objectSystemNpuSseHaScanToTerraform(struct?: ObjectSystemNpuSseHaScanOutputReference | ObjectSystemNpuSseHaScan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gap: cdktf.numberToTerraform(struct!.gap),
    max_session_cnt: cdktf.numberToTerraform(struct!.maxSessionCnt),
    min_duration: cdktf.numberToTerraform(struct!.minDuration),
  }
}


export function objectSystemNpuSseHaScanToHclTerraform(struct?: ObjectSystemNpuSseHaScanOutputReference | ObjectSystemNpuSseHaScan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gap: {
      value: cdktf.numberToHclTerraform(struct!.gap),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_session_cnt: {
      value: cdktf.numberToHclTerraform(struct!.maxSessionCnt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_duration: {
      value: cdktf.numberToHclTerraform(struct!.minDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectSystemNpuSseHaScanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectSystemNpuSseHaScan | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gap !== undefined) {
      hasAnyValues = true;
      internalValueResult.gap = this._gap;
    }
    if (this._maxSessionCnt !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSessionCnt = this._maxSessionCnt;
    }
    if (this._minDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.minDuration = this._minDuration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectSystemNpuSseHaScan | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gap = undefined;
      this._maxSessionCnt = undefined;
      this._minDuration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gap = value.gap;
      this._maxSessionCnt = value.maxSessionCnt;
      this._minDuration = value.minDuration;
    }
  }

  // gap - computed: false, optional: true, required: false
  private _gap?: number; 
  public get gap() {
    return this.getNumberAttribute('gap');
  }
  public set gap(value: number) {
    this._gap = value;
  }
  public resetGap() {
    this._gap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gapInput() {
    return this._gap;
  }

  // max_session_cnt - computed: true, optional: true, required: false
  private _maxSessionCnt?: number; 
  public get maxSessionCnt() {
    return this.getNumberAttribute('max_session_cnt');
  }
  public set maxSessionCnt(value: number) {
    this._maxSessionCnt = value;
  }
  public resetMaxSessionCnt() {
    this._maxSessionCnt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSessionCntInput() {
    return this._maxSessionCnt;
  }

  // min_duration - computed: true, optional: true, required: false
  private _minDuration?: number; 
  public get minDuration() {
    return this.getNumberAttribute('min_duration');
  }
  public set minDuration(value: number) {
    this._minDuration = value;
  }
  public resetMinDuration() {
    this._minDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minDurationInput() {
    return this._minDuration;
  }
}
export interface ObjectSystemNpuSwEhHash {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#computation ObjectSystemNpu#computation}
  */
  readonly computation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#destination_ip_lower_16 ObjectSystemNpu#destination_ip_lower_16}
  */
  readonly destinationIpLower16?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#destination_ip_upper_16 ObjectSystemNpu#destination_ip_upper_16}
  */
  readonly destinationIpUpper16?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#destination_port ObjectSystemNpu#destination_port}
  */
  readonly destinationPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#ip_protocol ObjectSystemNpu#ip_protocol}
  */
  readonly ipProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#netmask_length ObjectSystemNpu#netmask_length}
  */
  readonly netmaskLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#source_ip_lower_16 ObjectSystemNpu#source_ip_lower_16}
  */
  readonly sourceIpLower16?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#source_ip_upper_16 ObjectSystemNpu#source_ip_upper_16}
  */
  readonly sourceIpUpper16?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#source_port ObjectSystemNpu#source_port}
  */
  readonly sourcePort?: string;
}

export function objectSystemNpuSwEhHashToTerraform(struct?: ObjectSystemNpuSwEhHashOutputReference | ObjectSystemNpuSwEhHash): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    computation: cdktf.stringToTerraform(struct!.computation),
    destination_ip_lower_16: cdktf.stringToTerraform(struct!.destinationIpLower16),
    destination_ip_upper_16: cdktf.stringToTerraform(struct!.destinationIpUpper16),
    destination_port: cdktf.stringToTerraform(struct!.destinationPort),
    ip_protocol: cdktf.stringToTerraform(struct!.ipProtocol),
    netmask_length: cdktf.numberToTerraform(struct!.netmaskLength),
    source_ip_lower_16: cdktf.stringToTerraform(struct!.sourceIpLower16),
    source_ip_upper_16: cdktf.stringToTerraform(struct!.sourceIpUpper16),
    source_port: cdktf.stringToTerraform(struct!.sourcePort),
  }
}


export function objectSystemNpuSwEhHashToHclTerraform(struct?: ObjectSystemNpuSwEhHashOutputReference | ObjectSystemNpuSwEhHash): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    computation: {
      value: cdktf.stringToHclTerraform(struct!.computation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_ip_lower_16: {
      value: cdktf.stringToHclTerraform(struct!.destinationIpLower16),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_ip_upper_16: {
      value: cdktf.stringToHclTerraform(struct!.destinationIpUpper16),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_port: {
      value: cdktf.stringToHclTerraform(struct!.destinationPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_protocol: {
      value: cdktf.stringToHclTerraform(struct!.ipProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    netmask_length: {
      value: cdktf.numberToHclTerraform(struct!.netmaskLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_ip_lower_16: {
      value: cdktf.stringToHclTerraform(struct!.sourceIpLower16),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_ip_upper_16: {
      value: cdktf.stringToHclTerraform(struct!.sourceIpUpper16),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_port: {
      value: cdktf.stringToHclTerraform(struct!.sourcePort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectSystemNpuSwEhHashOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectSystemNpuSwEhHash | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._computation !== undefined) {
      hasAnyValues = true;
      internalValueResult.computation = this._computation;
    }
    if (this._destinationIpLower16 !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationIpLower16 = this._destinationIpLower16;
    }
    if (this._destinationIpUpper16 !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationIpUpper16 = this._destinationIpUpper16;
    }
    if (this._destinationPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPort = this._destinationPort;
    }
    if (this._ipProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipProtocol = this._ipProtocol;
    }
    if (this._netmaskLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.netmaskLength = this._netmaskLength;
    }
    if (this._sourceIpLower16 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIpLower16 = this._sourceIpLower16;
    }
    if (this._sourceIpUpper16 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIpUpper16 = this._sourceIpUpper16;
    }
    if (this._sourcePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePort = this._sourcePort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectSystemNpuSwEhHash | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._computation = undefined;
      this._destinationIpLower16 = undefined;
      this._destinationIpUpper16 = undefined;
      this._destinationPort = undefined;
      this._ipProtocol = undefined;
      this._netmaskLength = undefined;
      this._sourceIpLower16 = undefined;
      this._sourceIpUpper16 = undefined;
      this._sourcePort = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._computation = value.computation;
      this._destinationIpLower16 = value.destinationIpLower16;
      this._destinationIpUpper16 = value.destinationIpUpper16;
      this._destinationPort = value.destinationPort;
      this._ipProtocol = value.ipProtocol;
      this._netmaskLength = value.netmaskLength;
      this._sourceIpLower16 = value.sourceIpLower16;
      this._sourceIpUpper16 = value.sourceIpUpper16;
      this._sourcePort = value.sourcePort;
    }
  }

  // computation - computed: true, optional: true, required: false
  private _computation?: string; 
  public get computation() {
    return this.getStringAttribute('computation');
  }
  public set computation(value: string) {
    this._computation = value;
  }
  public resetComputation() {
    this._computation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computationInput() {
    return this._computation;
  }

  // destination_ip_lower_16 - computed: true, optional: true, required: false
  private _destinationIpLower16?: string; 
  public get destinationIpLower16() {
    return this.getStringAttribute('destination_ip_lower_16');
  }
  public set destinationIpLower16(value: string) {
    this._destinationIpLower16 = value;
  }
  public resetDestinationIpLower16() {
    this._destinationIpLower16 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationIpLower16Input() {
    return this._destinationIpLower16;
  }

  // destination_ip_upper_16 - computed: true, optional: true, required: false
  private _destinationIpUpper16?: string; 
  public get destinationIpUpper16() {
    return this.getStringAttribute('destination_ip_upper_16');
  }
  public set destinationIpUpper16(value: string) {
    this._destinationIpUpper16 = value;
  }
  public resetDestinationIpUpper16() {
    this._destinationIpUpper16 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationIpUpper16Input() {
    return this._destinationIpUpper16;
  }

  // destination_port - computed: true, optional: true, required: false
  private _destinationPort?: string; 
  public get destinationPort() {
    return this.getStringAttribute('destination_port');
  }
  public set destinationPort(value: string) {
    this._destinationPort = value;
  }
  public resetDestinationPort() {
    this._destinationPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortInput() {
    return this._destinationPort;
  }

  // ip_protocol - computed: true, optional: true, required: false
  private _ipProtocol?: string; 
  public get ipProtocol() {
    return this.getStringAttribute('ip_protocol');
  }
  public set ipProtocol(value: string) {
    this._ipProtocol = value;
  }
  public resetIpProtocol() {
    this._ipProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipProtocolInput() {
    return this._ipProtocol;
  }

  // netmask_length - computed: true, optional: true, required: false
  private _netmaskLength?: number; 
  public get netmaskLength() {
    return this.getNumberAttribute('netmask_length');
  }
  public set netmaskLength(value: number) {
    this._netmaskLength = value;
  }
  public resetNetmaskLength() {
    this._netmaskLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netmaskLengthInput() {
    return this._netmaskLength;
  }

  // source_ip_lower_16 - computed: true, optional: true, required: false
  private _sourceIpLower16?: string; 
  public get sourceIpLower16() {
    return this.getStringAttribute('source_ip_lower_16');
  }
  public set sourceIpLower16(value: string) {
    this._sourceIpLower16 = value;
  }
  public resetSourceIpLower16() {
    this._sourceIpLower16 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpLower16Input() {
    return this._sourceIpLower16;
  }

  // source_ip_upper_16 - computed: true, optional: true, required: false
  private _sourceIpUpper16?: string; 
  public get sourceIpUpper16() {
    return this.getStringAttribute('source_ip_upper_16');
  }
  public set sourceIpUpper16(value: string) {
    this._sourceIpUpper16 = value;
  }
  public resetSourceIpUpper16() {
    this._sourceIpUpper16 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpUpper16Input() {
    return this._sourceIpUpper16;
  }

  // source_port - computed: true, optional: true, required: false
  private _sourcePort?: string; 
  public get sourcePort() {
    return this.getStringAttribute('source_port');
  }
  public set sourcePort(value: string) {
    this._sourcePort = value;
  }
  public resetSourcePort() {
    this._sourcePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortInput() {
    return this._sourcePort;
  }
}
export interface ObjectSystemNpuSwTrHash {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#draco15 ObjectSystemNpu#draco15}
  */
  readonly draco15?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#tcp_udp_port ObjectSystemNpu#tcp_udp_port}
  */
  readonly tcpUdpPort?: string;
}

export function objectSystemNpuSwTrHashToTerraform(struct?: ObjectSystemNpuSwTrHashOutputReference | ObjectSystemNpuSwTrHash): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    draco15: cdktf.stringToTerraform(struct!.draco15),
    tcp_udp_port: cdktf.stringToTerraform(struct!.tcpUdpPort),
  }
}


export function objectSystemNpuSwTrHashToHclTerraform(struct?: ObjectSystemNpuSwTrHashOutputReference | ObjectSystemNpuSwTrHash): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    draco15: {
      value: cdktf.stringToHclTerraform(struct!.draco15),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_udp_port: {
      value: cdktf.stringToHclTerraform(struct!.tcpUdpPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectSystemNpuSwTrHashOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectSystemNpuSwTrHash | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._draco15 !== undefined) {
      hasAnyValues = true;
      internalValueResult.draco15 = this._draco15;
    }
    if (this._tcpUdpPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpUdpPort = this._tcpUdpPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectSystemNpuSwTrHash | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._draco15 = undefined;
      this._tcpUdpPort = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._draco15 = value.draco15;
      this._tcpUdpPort = value.tcpUdpPort;
    }
  }

  // draco15 - computed: true, optional: true, required: false
  private _draco15?: string; 
  public get draco15() {
    return this.getStringAttribute('draco15');
  }
  public set draco15(value: string) {
    this._draco15 = value;
  }
  public resetDraco15() {
    this._draco15 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get draco15Input() {
    return this._draco15;
  }

  // tcp_udp_port - computed: true, optional: true, required: false
  private _tcpUdpPort?: string; 
  public get tcpUdpPort() {
    return this.getStringAttribute('tcp_udp_port');
  }
  public set tcpUdpPort(value: string) {
    this._tcpUdpPort = value;
  }
  public resetTcpUdpPort() {
    this._tcpUdpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpUdpPortInput() {
    return this._tcpUdpPort;
  }
}
export interface ObjectSystemNpuTcpTimeoutProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#close_wait ObjectSystemNpu#close_wait}
  */
  readonly closeWait?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#fin_wait ObjectSystemNpu#fin_wait}
  */
  readonly finWait?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#id ObjectSystemNpu#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#syn_sent ObjectSystemNpu#syn_sent}
  */
  readonly synSent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#syn_wait ObjectSystemNpu#syn_wait}
  */
  readonly synWait?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#tcp_idle ObjectSystemNpu#tcp_idle}
  */
  readonly tcpIdle?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#time_wait ObjectSystemNpu#time_wait}
  */
  readonly timeWait?: number;
}

export function objectSystemNpuTcpTimeoutProfileToTerraform(struct?: ObjectSystemNpuTcpTimeoutProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    close_wait: cdktf.numberToTerraform(struct!.closeWait),
    fin_wait: cdktf.numberToTerraform(struct!.finWait),
    id: cdktf.numberToTerraform(struct!.id),
    syn_sent: cdktf.numberToTerraform(struct!.synSent),
    syn_wait: cdktf.numberToTerraform(struct!.synWait),
    tcp_idle: cdktf.numberToTerraform(struct!.tcpIdle),
    time_wait: cdktf.numberToTerraform(struct!.timeWait),
  }
}


export function objectSystemNpuTcpTimeoutProfileToHclTerraform(struct?: ObjectSystemNpuTcpTimeoutProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    close_wait: {
      value: cdktf.numberToHclTerraform(struct!.closeWait),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fin_wait: {
      value: cdktf.numberToHclTerraform(struct!.finWait),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syn_sent: {
      value: cdktf.numberToHclTerraform(struct!.synSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syn_wait: {
      value: cdktf.numberToHclTerraform(struct!.synWait),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_idle: {
      value: cdktf.numberToHclTerraform(struct!.tcpIdle),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_wait: {
      value: cdktf.numberToHclTerraform(struct!.timeWait),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectSystemNpuTcpTimeoutProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectSystemNpuTcpTimeoutProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._closeWait !== undefined) {
      hasAnyValues = true;
      internalValueResult.closeWait = this._closeWait;
    }
    if (this._finWait !== undefined) {
      hasAnyValues = true;
      internalValueResult.finWait = this._finWait;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._synSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.synSent = this._synSent;
    }
    if (this._synWait !== undefined) {
      hasAnyValues = true;
      internalValueResult.synWait = this._synWait;
    }
    if (this._tcpIdle !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpIdle = this._tcpIdle;
    }
    if (this._timeWait !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeWait = this._timeWait;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectSystemNpuTcpTimeoutProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._closeWait = undefined;
      this._finWait = undefined;
      this._id = undefined;
      this._synSent = undefined;
      this._synWait = undefined;
      this._tcpIdle = undefined;
      this._timeWait = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._closeWait = value.closeWait;
      this._finWait = value.finWait;
      this._id = value.id;
      this._synSent = value.synSent;
      this._synWait = value.synWait;
      this._tcpIdle = value.tcpIdle;
      this._timeWait = value.timeWait;
    }
  }

  // close_wait - computed: false, optional: true, required: false
  private _closeWait?: number; 
  public get closeWait() {
    return this.getNumberAttribute('close_wait');
  }
  public set closeWait(value: number) {
    this._closeWait = value;
  }
  public resetCloseWait() {
    this._closeWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get closeWaitInput() {
    return this._closeWait;
  }

  // fin_wait - computed: false, optional: true, required: false
  private _finWait?: number; 
  public get finWait() {
    return this.getNumberAttribute('fin_wait');
  }
  public set finWait(value: number) {
    this._finWait = value;
  }
  public resetFinWait() {
    this._finWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finWaitInput() {
    return this._finWait;
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // syn_sent - computed: false, optional: true, required: false
  private _synSent?: number; 
  public get synSent() {
    return this.getNumberAttribute('syn_sent');
  }
  public set synSent(value: number) {
    this._synSent = value;
  }
  public resetSynSent() {
    this._synSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synSentInput() {
    return this._synSent;
  }

  // syn_wait - computed: false, optional: true, required: false
  private _synWait?: number; 
  public get synWait() {
    return this.getNumberAttribute('syn_wait');
  }
  public set synWait(value: number) {
    this._synWait = value;
  }
  public resetSynWait() {
    this._synWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synWaitInput() {
    return this._synWait;
  }

  // tcp_idle - computed: false, optional: true, required: false
  private _tcpIdle?: number; 
  public get tcpIdle() {
    return this.getNumberAttribute('tcp_idle');
  }
  public set tcpIdle(value: number) {
    this._tcpIdle = value;
  }
  public resetTcpIdle() {
    this._tcpIdle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpIdleInput() {
    return this._tcpIdle;
  }

  // time_wait - computed: false, optional: true, required: false
  private _timeWait?: number; 
  public get timeWait() {
    return this.getNumberAttribute('time_wait');
  }
  public set timeWait(value: number) {
    this._timeWait = value;
  }
  public resetTimeWait() {
    this._timeWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeWaitInput() {
    return this._timeWait;
  }
}

export class ObjectSystemNpuTcpTimeoutProfileList extends cdktf.ComplexList {
  public internalValue? : ObjectSystemNpuTcpTimeoutProfile[] | cdktf.IResolvable

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
  public get(index: number): ObjectSystemNpuTcpTimeoutProfileOutputReference {
    return new ObjectSystemNpuTcpTimeoutProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectSystemNpuUdpTimeoutProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#id ObjectSystemNpu#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#udp_idle ObjectSystemNpu#udp_idle}
  */
  readonly udpIdle?: number;
}

export function objectSystemNpuUdpTimeoutProfileToTerraform(struct?: ObjectSystemNpuUdpTimeoutProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    udp_idle: cdktf.numberToTerraform(struct!.udpIdle),
  }
}


export function objectSystemNpuUdpTimeoutProfileToHclTerraform(struct?: ObjectSystemNpuUdpTimeoutProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_idle: {
      value: cdktf.numberToHclTerraform(struct!.udpIdle),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectSystemNpuUdpTimeoutProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectSystemNpuUdpTimeoutProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._udpIdle !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpIdle = this._udpIdle;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectSystemNpuUdpTimeoutProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._udpIdle = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._udpIdle = value.udpIdle;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // udp_idle - computed: false, optional: true, required: false
  private _udpIdle?: number; 
  public get udpIdle() {
    return this.getNumberAttribute('udp_idle');
  }
  public set udpIdle(value: number) {
    this._udpIdle = value;
  }
  public resetUdpIdle() {
    this._udpIdle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpIdleInput() {
    return this._udpIdle;
  }
}

export class ObjectSystemNpuUdpTimeoutProfileList extends cdktf.ComplexList {
  public internalValue? : ObjectSystemNpuUdpTimeoutProfile[] | cdktf.IResolvable

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
  public get(index: number): ObjectSystemNpuUdpTimeoutProfileOutputReference {
    return new ObjectSystemNpuUdpTimeoutProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu fortimanager_object_system_npu}
*/
export class ObjectSystemNpu extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_system_npu";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectSystemNpu resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectSystemNpu to import
  * @param importFromId The id of the existing ObjectSystemNpu that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectSystemNpu to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_system_npu", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu fortimanager_object_system_npu} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectSystemNpuConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectSystemNpuConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_system_npu',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.15.0',
        providerVersionConstraint: '1.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._capwapOffload = config.capwapOffload;
    this._dedicatedLacpQueue = config.dedicatedLacpQueue;
    this._dedicatedManagementAffinity = config.dedicatedManagementAffinity;
    this._dedicatedManagementCpu = config.dedicatedManagementCpu;
    this._defaultQosType = config.defaultQosType;
    this._defaultTcpRefreshDir = config.defaultTcpRefreshDir;
    this._defaultUdpRefreshDir = config.defaultUdpRefreshDir;
    this._doubleLevelMcastOffload = config.doubleLevelMcastOffload;
    this._dseTimeout = config.dseTimeout;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._fastpath = config.fastpath;
    this._gtpEnhancedCpuRange = config.gtpEnhancedCpuRange;
    this._gtpEnhancedMode = config.gtpEnhancedMode;
    this._gtpSupport = config.gtpSupport;
    this._hashConfig = config.hashConfig;
    this._hashIpv6Sel = config.hashIpv6Sel;
    this._hashTblSpread = config.hashTblSpread;
    this._hostShortcutMode = config.hostShortcutMode;
    this._htabDediQueueNr = config.htabDediQueueNr;
    this._htabMsgQueue = config.htabMsgQueue;
    this._htxGtseQuota = config.htxGtseQuota;
    this._htxIcmpCsumChk = config.htxIcmpCsumChk;
    this._hwHaScanInterval = config.hwHaScanInterval;
    this._id = config.id;
    this._inboundDscpCopy = config.inboundDscpCopy;
    this._inboundDscpCopyPort = config.inboundDscpCopyPort;
    this._intfShapingOffload = config.intfShapingOffload;
    this._ipFragmentOffload = config.ipFragmentOffload;
    this._iphRsvdReCksum = config.iphRsvdReCksum;
    this._ippoolOverloadHigh = config.ippoolOverloadHigh;
    this._ippoolOverloadLow = config.ippoolOverloadLow;
    this._ipsecDecSubengineMask = config.ipsecDecSubengineMask;
    this._ipsecEncSubengineMask = config.ipsecEncSubengineMask;
    this._ipsecHostDfclr = config.ipsecHostDfclr;
    this._ipsecInboundCache = config.ipsecInboundCache;
    this._ipsecLocalUespPort = config.ipsecLocalUespPort;
    this._ipsecMtuOverride = config.ipsecMtuOverride;
    this._ipsecObNpSel = config.ipsecObNpSel;
    this._ipsecOrdering = config.ipsecOrdering;
    this._ipsecOverVlink = config.ipsecOverVlink;
    this._ipsecStsTimeout = config.ipsecStsTimeout;
    this._ipsecThroughputMsgFrequency = config.ipsecThroughputMsgFrequency;
    this._iptStsTimeout = config.iptStsTimeout;
    this._iptThroughputMsgFrequency = config.iptThroughputMsgFrequency;
    this._ipv4SessionQuota = config.ipv4SessionQuota;
    this._ipv4SessionQuotaHigh = config.ipv4SessionQuotaHigh;
    this._ipv4SessionQuotaLow = config.ipv4SessionQuotaLow;
    this._ipv6PrefixSessionQuota = config.ipv6PrefixSessionQuota;
    this._ipv6PrefixSessionQuotaHigh = config.ipv6PrefixSessionQuotaHigh;
    this._ipv6PrefixSessionQuotaLow = config.ipv6PrefixSessionQuotaLow;
    this._isfNpRxTrDistr = config.isfNpRxTrDistr;
    this._lagHashGre = config.lagHashGre;
    this._lagOutPortSelect = config.lagOutPortSelect;
    this._maxReceiveUnit = config.maxReceiveUnit;
    this._maxSessionTimeout = config.maxSessionTimeout;
    this._mcastSessionAccounting = config.mcastSessionAccounting;
    this._mcastSessionCounting = config.mcastSessionCounting;
    this._mcastSessionCounting6 = config.mcastSessionCounting6;
    this._napiBreakInterval = config.napiBreakInterval;
    this._nat46ForceIpv4PacketForwarding = config.nat46ForceIpv4PacketForwarding;
    this._np6CpsOptimizationMode = config.np6CpsOptimizationMode;
    this._npuGroupEffectiveScope = config.npuGroupEffectiveScope;
    this._nssThreadsOption = config.nssThreadsOption;
    this._pbaEim = config.pbaEim;
    this._pbaPortSelectMode = config.pbaPortSelectMode;
    this._perPolicyAccounting = config.perPolicyAccounting;
    this._perSessionAccounting = config.perSessionAccounting;
    this._pleNonSynTcpAction = config.pleNonSynTcpAction;
    this._policyOffloadLevel = config.policyOffloadLevel;
    this._processIcmpByHost = config.processIcmpByHost;
    this._prpPortIn = config.prpPortIn;
    this._prpPortOut = config.prpPortOut;
    this._prpSessionClearMode = config.prpSessionClearMode;
    this._qosMode = config.qosMode;
    this._qtmBufMode = config.qtmBufMode;
    this._rdpOffload = config.rdpOffload;
    this._recoverNp6Link = config.recoverNp6Link;
    this._rpsMode = config.rpsMode;
    this._scopetype = config.scopetype;
    this._sessionAcctInterval = config.sessionAcctInterval;
    this._sessionDeniedOffload = config.sessionDeniedOffload;
    this._shapingStats = config.shapingStats;
    this._spaPortSelectMode = config.spaPortSelectMode;
    this._splitIpsecEngines = config.splitIpsecEngines;
    this._sseBackpressure = config.sseBackpressure;
    this._stripClearTextPadding = config.stripClearTextPadding;
    this._stripEspPadding = config.stripEspPadding;
    this._swNpBandwidth = config.swNpBandwidth;
    this._swNpPause = config.swNpPause;
    this._swNpRate = config.swNpRate;
    this._swNpRateUnit = config.swNpRateUnit;
    this._switchNpHash = config.switchNpHash;
    this._tcpRstTimeout = config.tcpRstTimeout;
    this._tunnelOverVlink = config.tunnelOverVlink;
    this._uespOffload = config.uespOffload;
    this._ullPortMode = config.ullPortMode;
    this._useMseOft = config.useMseOft;
    this._vlanLookupCache = config.vlanLookupCache;
    this._vxlanOffload = config.vxlanOffload;
    this._backgroundSseScan.internalValue = config.backgroundSseScan;
    this._dosOptions.internalValue = config.dosOptions;
    this._dswDtsProfile.internalValue = config.dswDtsProfile;
    this._dswQueueDtsProfile.internalValue = config.dswQueueDtsProfile;
    this._fpAnomaly.internalValue = config.fpAnomaly;
    this._hpe.internalValue = config.hpe;
    this._icmpErrorRateCtrl.internalValue = config.icmpErrorRateCtrl;
    this._icmpRateCtrl.internalValue = config.icmpRateCtrl;
    this._ipReassembly.internalValue = config.ipReassembly;
    this._isfNpQueues.internalValue = config.isfNpQueues;
    this._npQueues.internalValue = config.npQueues;
    this._npuTcam.internalValue = config.npuTcam;
    this._portCpuMap.internalValue = config.portCpuMap;
    this._portNpuMap.internalValue = config.portNpuMap;
    this._portPathOption.internalValue = config.portPathOption;
    this._priorityProtocol.internalValue = config.priorityProtocol;
    this._sseHaScan.internalValue = config.sseHaScan;
    this._swEhHash.internalValue = config.swEhHash;
    this._swTrHash.internalValue = config.swTrHash;
    this._tcpTimeoutProfile.internalValue = config.tcpTimeoutProfile;
    this._udpTimeoutProfile.internalValue = config.udpTimeoutProfile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // capwap_offload - computed: true, optional: true, required: false
  private _capwapOffload?: string; 
  public get capwapOffload() {
    return this.getStringAttribute('capwap_offload');
  }
  public set capwapOffload(value: string) {
    this._capwapOffload = value;
  }
  public resetCapwapOffload() {
    this._capwapOffload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capwapOffloadInput() {
    return this._capwapOffload;
  }

  // dedicated_lacp_queue - computed: false, optional: true, required: false
  private _dedicatedLacpQueue?: string; 
  public get dedicatedLacpQueue() {
    return this.getStringAttribute('dedicated_lacp_queue');
  }
  public set dedicatedLacpQueue(value: string) {
    this._dedicatedLacpQueue = value;
  }
  public resetDedicatedLacpQueue() {
    this._dedicatedLacpQueue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedLacpQueueInput() {
    return this._dedicatedLacpQueue;
  }

  // dedicated_management_affinity - computed: true, optional: true, required: false
  private _dedicatedManagementAffinity?: string; 
  public get dedicatedManagementAffinity() {
    return this.getStringAttribute('dedicated_management_affinity');
  }
  public set dedicatedManagementAffinity(value: string) {
    this._dedicatedManagementAffinity = value;
  }
  public resetDedicatedManagementAffinity() {
    this._dedicatedManagementAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedManagementAffinityInput() {
    return this._dedicatedManagementAffinity;
  }

  // dedicated_management_cpu - computed: true, optional: true, required: false
  private _dedicatedManagementCpu?: string; 
  public get dedicatedManagementCpu() {
    return this.getStringAttribute('dedicated_management_cpu');
  }
  public set dedicatedManagementCpu(value: string) {
    this._dedicatedManagementCpu = value;
  }
  public resetDedicatedManagementCpu() {
    this._dedicatedManagementCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedManagementCpuInput() {
    return this._dedicatedManagementCpu;
  }

  // default_qos_type - computed: true, optional: true, required: false
  private _defaultQosType?: string; 
  public get defaultQosType() {
    return this.getStringAttribute('default_qos_type');
  }
  public set defaultQosType(value: string) {
    this._defaultQosType = value;
  }
  public resetDefaultQosType() {
    this._defaultQosType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultQosTypeInput() {
    return this._defaultQosType;
  }

  // default_tcp_refresh_dir - computed: true, optional: true, required: false
  private _defaultTcpRefreshDir?: string; 
  public get defaultTcpRefreshDir() {
    return this.getStringAttribute('default_tcp_refresh_dir');
  }
  public set defaultTcpRefreshDir(value: string) {
    this._defaultTcpRefreshDir = value;
  }
  public resetDefaultTcpRefreshDir() {
    this._defaultTcpRefreshDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTcpRefreshDirInput() {
    return this._defaultTcpRefreshDir;
  }

  // default_udp_refresh_dir - computed: true, optional: true, required: false
  private _defaultUdpRefreshDir?: string; 
  public get defaultUdpRefreshDir() {
    return this.getStringAttribute('default_udp_refresh_dir');
  }
  public set defaultUdpRefreshDir(value: string) {
    this._defaultUdpRefreshDir = value;
  }
  public resetDefaultUdpRefreshDir() {
    this._defaultUdpRefreshDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultUdpRefreshDirInput() {
    return this._defaultUdpRefreshDir;
  }

  // double_level_mcast_offload - computed: true, optional: true, required: false
  private _doubleLevelMcastOffload?: string; 
  public get doubleLevelMcastOffload() {
    return this.getStringAttribute('double_level_mcast_offload');
  }
  public set doubleLevelMcastOffload(value: string) {
    this._doubleLevelMcastOffload = value;
  }
  public resetDoubleLevelMcastOffload() {
    this._doubleLevelMcastOffload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doubleLevelMcastOffloadInput() {
    return this._doubleLevelMcastOffload;
  }

  // dse_timeout - computed: true, optional: true, required: false
  private _dseTimeout?: number; 
  public get dseTimeout() {
    return this.getNumberAttribute('dse_timeout');
  }
  public set dseTimeout(value: number) {
    this._dseTimeout = value;
  }
  public resetDseTimeout() {
    this._dseTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dseTimeoutInput() {
    return this._dseTimeout;
  }

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
  }

  // fastpath - computed: true, optional: true, required: false
  private _fastpath?: string; 
  public get fastpath() {
    return this.getStringAttribute('fastpath');
  }
  public set fastpath(value: string) {
    this._fastpath = value;
  }
  public resetFastpath() {
    this._fastpath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastpathInput() {
    return this._fastpath;
  }

  // gtp_enhanced_cpu_range - computed: true, optional: true, required: false
  private _gtpEnhancedCpuRange?: string; 
  public get gtpEnhancedCpuRange() {
    return this.getStringAttribute('gtp_enhanced_cpu_range');
  }
  public set gtpEnhancedCpuRange(value: string) {
    this._gtpEnhancedCpuRange = value;
  }
  public resetGtpEnhancedCpuRange() {
    this._gtpEnhancedCpuRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpEnhancedCpuRangeInput() {
    return this._gtpEnhancedCpuRange;
  }

  // gtp_enhanced_mode - computed: true, optional: true, required: false
  private _gtpEnhancedMode?: string; 
  public get gtpEnhancedMode() {
    return this.getStringAttribute('gtp_enhanced_mode');
  }
  public set gtpEnhancedMode(value: string) {
    this._gtpEnhancedMode = value;
  }
  public resetGtpEnhancedMode() {
    this._gtpEnhancedMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpEnhancedModeInput() {
    return this._gtpEnhancedMode;
  }

  // gtp_support - computed: true, optional: true, required: false
  private _gtpSupport?: string; 
  public get gtpSupport() {
    return this.getStringAttribute('gtp_support');
  }
  public set gtpSupport(value: string) {
    this._gtpSupport = value;
  }
  public resetGtpSupport() {
    this._gtpSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpSupportInput() {
    return this._gtpSupport;
  }

  // hash_config - computed: true, optional: true, required: false
  private _hashConfig?: string; 
  public get hashConfig() {
    return this.getStringAttribute('hash_config');
  }
  public set hashConfig(value: string) {
    this._hashConfig = value;
  }
  public resetHashConfig() {
    this._hashConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashConfigInput() {
    return this._hashConfig;
  }

  // hash_ipv6_sel - computed: false, optional: true, required: false
  private _hashIpv6Sel?: number; 
  public get hashIpv6Sel() {
    return this.getNumberAttribute('hash_ipv6_sel');
  }
  public set hashIpv6Sel(value: number) {
    this._hashIpv6Sel = value;
  }
  public resetHashIpv6Sel() {
    this._hashIpv6Sel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashIpv6SelInput() {
    return this._hashIpv6Sel;
  }

  // hash_tbl_spread - computed: true, optional: true, required: false
  private _hashTblSpread?: string; 
  public get hashTblSpread() {
    return this.getStringAttribute('hash_tbl_spread');
  }
  public set hashTblSpread(value: string) {
    this._hashTblSpread = value;
  }
  public resetHashTblSpread() {
    this._hashTblSpread = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashTblSpreadInput() {
    return this._hashTblSpread;
  }

  // host_shortcut_mode - computed: true, optional: true, required: false
  private _hostShortcutMode?: string; 
  public get hostShortcutMode() {
    return this.getStringAttribute('host_shortcut_mode');
  }
  public set hostShortcutMode(value: string) {
    this._hostShortcutMode = value;
  }
  public resetHostShortcutMode() {
    this._hostShortcutMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostShortcutModeInput() {
    return this._hostShortcutMode;
  }

  // htab_dedi_queue_nr - computed: false, optional: true, required: false
  private _htabDediQueueNr?: number; 
  public get htabDediQueueNr() {
    return this.getNumberAttribute('htab_dedi_queue_nr');
  }
  public set htabDediQueueNr(value: number) {
    this._htabDediQueueNr = value;
  }
  public resetHtabDediQueueNr() {
    this._htabDediQueueNr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get htabDediQueueNrInput() {
    return this._htabDediQueueNr;
  }

  // htab_msg_queue - computed: true, optional: true, required: false
  private _htabMsgQueue?: string; 
  public get htabMsgQueue() {
    return this.getStringAttribute('htab_msg_queue');
  }
  public set htabMsgQueue(value: string) {
    this._htabMsgQueue = value;
  }
  public resetHtabMsgQueue() {
    this._htabMsgQueue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get htabMsgQueueInput() {
    return this._htabMsgQueue;
  }

  // htx_gtse_quota - computed: true, optional: true, required: false
  private _htxGtseQuota?: string; 
  public get htxGtseQuota() {
    return this.getStringAttribute('htx_gtse_quota');
  }
  public set htxGtseQuota(value: string) {
    this._htxGtseQuota = value;
  }
  public resetHtxGtseQuota() {
    this._htxGtseQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get htxGtseQuotaInput() {
    return this._htxGtseQuota;
  }

  // htx_icmp_csum_chk - computed: true, optional: true, required: false
  private _htxIcmpCsumChk?: string; 
  public get htxIcmpCsumChk() {
    return this.getStringAttribute('htx_icmp_csum_chk');
  }
  public set htxIcmpCsumChk(value: string) {
    this._htxIcmpCsumChk = value;
  }
  public resetHtxIcmpCsumChk() {
    this._htxIcmpCsumChk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get htxIcmpCsumChkInput() {
    return this._htxIcmpCsumChk;
  }

  // hw_ha_scan_interval - computed: true, optional: true, required: false
  private _hwHaScanInterval?: number; 
  public get hwHaScanInterval() {
    return this.getNumberAttribute('hw_ha_scan_interval');
  }
  public set hwHaScanInterval(value: number) {
    this._hwHaScanInterval = value;
  }
  public resetHwHaScanInterval() {
    this._hwHaScanInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwHaScanIntervalInput() {
    return this._hwHaScanInterval;
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

  // inbound_dscp_copy - computed: false, optional: true, required: false
  private _inboundDscpCopy?: string; 
  public get inboundDscpCopy() {
    return this.getStringAttribute('inbound_dscp_copy');
  }
  public set inboundDscpCopy(value: string) {
    this._inboundDscpCopy = value;
  }
  public resetInboundDscpCopy() {
    this._inboundDscpCopy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundDscpCopyInput() {
    return this._inboundDscpCopy;
  }

  // inbound_dscp_copy_port - computed: true, optional: true, required: false
  private _inboundDscpCopyPort?: string[]; 
  public get inboundDscpCopyPort() {
    return cdktf.Fn.tolist(this.getListAttribute('inbound_dscp_copy_port'));
  }
  public set inboundDscpCopyPort(value: string[]) {
    this._inboundDscpCopyPort = value;
  }
  public resetInboundDscpCopyPort() {
    this._inboundDscpCopyPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundDscpCopyPortInput() {
    return this._inboundDscpCopyPort;
  }

  // intf_shaping_offload - computed: true, optional: true, required: false
  private _intfShapingOffload?: string; 
  public get intfShapingOffload() {
    return this.getStringAttribute('intf_shaping_offload');
  }
  public set intfShapingOffload(value: string) {
    this._intfShapingOffload = value;
  }
  public resetIntfShapingOffload() {
    this._intfShapingOffload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intfShapingOffloadInput() {
    return this._intfShapingOffload;
  }

  // ip_fragment_offload - computed: true, optional: true, required: false
  private _ipFragmentOffload?: string; 
  public get ipFragmentOffload() {
    return this.getStringAttribute('ip_fragment_offload');
  }
  public set ipFragmentOffload(value: string) {
    this._ipFragmentOffload = value;
  }
  public resetIpFragmentOffload() {
    this._ipFragmentOffload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFragmentOffloadInput() {
    return this._ipFragmentOffload;
  }

  // iph_rsvd_re_cksum - computed: true, optional: true, required: false
  private _iphRsvdReCksum?: string; 
  public get iphRsvdReCksum() {
    return this.getStringAttribute('iph_rsvd_re_cksum');
  }
  public set iphRsvdReCksum(value: string) {
    this._iphRsvdReCksum = value;
  }
  public resetIphRsvdReCksum() {
    this._iphRsvdReCksum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iphRsvdReCksumInput() {
    return this._iphRsvdReCksum;
  }

  // ippool_overload_high - computed: true, optional: true, required: false
  private _ippoolOverloadHigh?: number; 
  public get ippoolOverloadHigh() {
    return this.getNumberAttribute('ippool_overload_high');
  }
  public set ippoolOverloadHigh(value: number) {
    this._ippoolOverloadHigh = value;
  }
  public resetIppoolOverloadHigh() {
    this._ippoolOverloadHigh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ippoolOverloadHighInput() {
    return this._ippoolOverloadHigh;
  }

  // ippool_overload_low - computed: true, optional: true, required: false
  private _ippoolOverloadLow?: number; 
  public get ippoolOverloadLow() {
    return this.getNumberAttribute('ippool_overload_low');
  }
  public set ippoolOverloadLow(value: number) {
    this._ippoolOverloadLow = value;
  }
  public resetIppoolOverloadLow() {
    this._ippoolOverloadLow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ippoolOverloadLowInput() {
    return this._ippoolOverloadLow;
  }

  // ipsec_dec_subengine_mask - computed: true, optional: true, required: false
  private _ipsecDecSubengineMask?: string; 
  public get ipsecDecSubengineMask() {
    return this.getStringAttribute('ipsec_dec_subengine_mask');
  }
  public set ipsecDecSubengineMask(value: string) {
    this._ipsecDecSubengineMask = value;
  }
  public resetIpsecDecSubengineMask() {
    this._ipsecDecSubengineMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecDecSubengineMaskInput() {
    return this._ipsecDecSubengineMask;
  }

  // ipsec_enc_subengine_mask - computed: true, optional: true, required: false
  private _ipsecEncSubengineMask?: string; 
  public get ipsecEncSubengineMask() {
    return this.getStringAttribute('ipsec_enc_subengine_mask');
  }
  public set ipsecEncSubengineMask(value: string) {
    this._ipsecEncSubengineMask = value;
  }
  public resetIpsecEncSubengineMask() {
    this._ipsecEncSubengineMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecEncSubengineMaskInput() {
    return this._ipsecEncSubengineMask;
  }

  // ipsec_host_dfclr - computed: false, optional: true, required: false
  private _ipsecHostDfclr?: string; 
  public get ipsecHostDfclr() {
    return this.getStringAttribute('ipsec_host_dfclr');
  }
  public set ipsecHostDfclr(value: string) {
    this._ipsecHostDfclr = value;
  }
  public resetIpsecHostDfclr() {
    this._ipsecHostDfclr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecHostDfclrInput() {
    return this._ipsecHostDfclr;
  }

  // ipsec_inbound_cache - computed: true, optional: true, required: false
  private _ipsecInboundCache?: string; 
  public get ipsecInboundCache() {
    return this.getStringAttribute('ipsec_inbound_cache');
  }
  public set ipsecInboundCache(value: string) {
    this._ipsecInboundCache = value;
  }
  public resetIpsecInboundCache() {
    this._ipsecInboundCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecInboundCacheInput() {
    return this._ipsecInboundCache;
  }

  // ipsec_local_uesp_port - computed: true, optional: true, required: false
  private _ipsecLocalUespPort?: number; 
  public get ipsecLocalUespPort() {
    return this.getNumberAttribute('ipsec_local_uesp_port');
  }
  public set ipsecLocalUespPort(value: number) {
    this._ipsecLocalUespPort = value;
  }
  public resetIpsecLocalUespPort() {
    this._ipsecLocalUespPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecLocalUespPortInput() {
    return this._ipsecLocalUespPort;
  }

  // ipsec_mtu_override - computed: true, optional: true, required: false
  private _ipsecMtuOverride?: string; 
  public get ipsecMtuOverride() {
    return this.getStringAttribute('ipsec_mtu_override');
  }
  public set ipsecMtuOverride(value: string) {
    this._ipsecMtuOverride = value;
  }
  public resetIpsecMtuOverride() {
    this._ipsecMtuOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecMtuOverrideInput() {
    return this._ipsecMtuOverride;
  }

  // ipsec_ob_np_sel - computed: true, optional: true, required: false
  private _ipsecObNpSel?: string; 
  public get ipsecObNpSel() {
    return this.getStringAttribute('ipsec_ob_np_sel');
  }
  public set ipsecObNpSel(value: string) {
    this._ipsecObNpSel = value;
  }
  public resetIpsecObNpSel() {
    this._ipsecObNpSel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecObNpSelInput() {
    return this._ipsecObNpSel;
  }

  // ipsec_ordering - computed: false, optional: true, required: false
  private _ipsecOrdering?: string; 
  public get ipsecOrdering() {
    return this.getStringAttribute('ipsec_ordering');
  }
  public set ipsecOrdering(value: string) {
    this._ipsecOrdering = value;
  }
  public resetIpsecOrdering() {
    this._ipsecOrdering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecOrderingInput() {
    return this._ipsecOrdering;
  }

  // ipsec_over_vlink - computed: true, optional: true, required: false
  private _ipsecOverVlink?: string; 
  public get ipsecOverVlink() {
    return this.getStringAttribute('ipsec_over_vlink');
  }
  public set ipsecOverVlink(value: string) {
    this._ipsecOverVlink = value;
  }
  public resetIpsecOverVlink() {
    this._ipsecOverVlink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecOverVlinkInput() {
    return this._ipsecOverVlink;
  }

  // ipsec_sts_timeout - computed: true, optional: true, required: false
  private _ipsecStsTimeout?: string; 
  public get ipsecStsTimeout() {
    return this.getStringAttribute('ipsec_sts_timeout');
  }
  public set ipsecStsTimeout(value: string) {
    this._ipsecStsTimeout = value;
  }
  public resetIpsecStsTimeout() {
    this._ipsecStsTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecStsTimeoutInput() {
    return this._ipsecStsTimeout;
  }

  // ipsec_throughput_msg_frequency - computed: true, optional: true, required: false
  private _ipsecThroughputMsgFrequency?: string; 
  public get ipsecThroughputMsgFrequency() {
    return this.getStringAttribute('ipsec_throughput_msg_frequency');
  }
  public set ipsecThroughputMsgFrequency(value: string) {
    this._ipsecThroughputMsgFrequency = value;
  }
  public resetIpsecThroughputMsgFrequency() {
    this._ipsecThroughputMsgFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecThroughputMsgFrequencyInput() {
    return this._ipsecThroughputMsgFrequency;
  }

  // ipt_sts_timeout - computed: true, optional: true, required: false
  private _iptStsTimeout?: string; 
  public get iptStsTimeout() {
    return this.getStringAttribute('ipt_sts_timeout');
  }
  public set iptStsTimeout(value: string) {
    this._iptStsTimeout = value;
  }
  public resetIptStsTimeout() {
    this._iptStsTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iptStsTimeoutInput() {
    return this._iptStsTimeout;
  }

  // ipt_throughput_msg_frequency - computed: true, optional: true, required: false
  private _iptThroughputMsgFrequency?: string; 
  public get iptThroughputMsgFrequency() {
    return this.getStringAttribute('ipt_throughput_msg_frequency');
  }
  public set iptThroughputMsgFrequency(value: string) {
    this._iptThroughputMsgFrequency = value;
  }
  public resetIptThroughputMsgFrequency() {
    this._iptThroughputMsgFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iptThroughputMsgFrequencyInput() {
    return this._iptThroughputMsgFrequency;
  }

  // ipv4_session_quota - computed: true, optional: true, required: false
  private _ipv4SessionQuota?: string; 
  public get ipv4SessionQuota() {
    return this.getStringAttribute('ipv4_session_quota');
  }
  public set ipv4SessionQuota(value: string) {
    this._ipv4SessionQuota = value;
  }
  public resetIpv4SessionQuota() {
    this._ipv4SessionQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4SessionQuotaInput() {
    return this._ipv4SessionQuota;
  }

  // ipv4_session_quota_high - computed: true, optional: true, required: false
  private _ipv4SessionQuotaHigh?: number; 
  public get ipv4SessionQuotaHigh() {
    return this.getNumberAttribute('ipv4_session_quota_high');
  }
  public set ipv4SessionQuotaHigh(value: number) {
    this._ipv4SessionQuotaHigh = value;
  }
  public resetIpv4SessionQuotaHigh() {
    this._ipv4SessionQuotaHigh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4SessionQuotaHighInput() {
    return this._ipv4SessionQuotaHigh;
  }

  // ipv4_session_quota_low - computed: true, optional: true, required: false
  private _ipv4SessionQuotaLow?: number; 
  public get ipv4SessionQuotaLow() {
    return this.getNumberAttribute('ipv4_session_quota_low');
  }
  public set ipv4SessionQuotaLow(value: number) {
    this._ipv4SessionQuotaLow = value;
  }
  public resetIpv4SessionQuotaLow() {
    this._ipv4SessionQuotaLow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4SessionQuotaLowInput() {
    return this._ipv4SessionQuotaLow;
  }

  // ipv6_prefix_session_quota - computed: true, optional: true, required: false
  private _ipv6PrefixSessionQuota?: string; 
  public get ipv6PrefixSessionQuota() {
    return this.getStringAttribute('ipv6_prefix_session_quota');
  }
  public set ipv6PrefixSessionQuota(value: string) {
    this._ipv6PrefixSessionQuota = value;
  }
  public resetIpv6PrefixSessionQuota() {
    this._ipv6PrefixSessionQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixSessionQuotaInput() {
    return this._ipv6PrefixSessionQuota;
  }

  // ipv6_prefix_session_quota_high - computed: true, optional: true, required: false
  private _ipv6PrefixSessionQuotaHigh?: number; 
  public get ipv6PrefixSessionQuotaHigh() {
    return this.getNumberAttribute('ipv6_prefix_session_quota_high');
  }
  public set ipv6PrefixSessionQuotaHigh(value: number) {
    this._ipv6PrefixSessionQuotaHigh = value;
  }
  public resetIpv6PrefixSessionQuotaHigh() {
    this._ipv6PrefixSessionQuotaHigh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixSessionQuotaHighInput() {
    return this._ipv6PrefixSessionQuotaHigh;
  }

  // ipv6_prefix_session_quota_low - computed: true, optional: true, required: false
  private _ipv6PrefixSessionQuotaLow?: number; 
  public get ipv6PrefixSessionQuotaLow() {
    return this.getNumberAttribute('ipv6_prefix_session_quota_low');
  }
  public set ipv6PrefixSessionQuotaLow(value: number) {
    this._ipv6PrefixSessionQuotaLow = value;
  }
  public resetIpv6PrefixSessionQuotaLow() {
    this._ipv6PrefixSessionQuotaLow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixSessionQuotaLowInput() {
    return this._ipv6PrefixSessionQuotaLow;
  }

  // isf_np_rx_tr_distr - computed: true, optional: true, required: false
  private _isfNpRxTrDistr?: string; 
  public get isfNpRxTrDistr() {
    return this.getStringAttribute('isf_np_rx_tr_distr');
  }
  public set isfNpRxTrDistr(value: string) {
    this._isfNpRxTrDistr = value;
  }
  public resetIsfNpRxTrDistr() {
    this._isfNpRxTrDistr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isfNpRxTrDistrInput() {
    return this._isfNpRxTrDistr;
  }

  // lag_hash_gre - computed: false, optional: true, required: false
  private _lagHashGre?: string; 
  public get lagHashGre() {
    return this.getStringAttribute('lag_hash_gre');
  }
  public set lagHashGre(value: string) {
    this._lagHashGre = value;
  }
  public resetLagHashGre() {
    this._lagHashGre = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lagHashGreInput() {
    return this._lagHashGre;
  }

  // lag_out_port_select - computed: true, optional: true, required: false
  private _lagOutPortSelect?: string; 
  public get lagOutPortSelect() {
    return this.getStringAttribute('lag_out_port_select');
  }
  public set lagOutPortSelect(value: string) {
    this._lagOutPortSelect = value;
  }
  public resetLagOutPortSelect() {
    this._lagOutPortSelect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lagOutPortSelectInput() {
    return this._lagOutPortSelect;
  }

  // max_receive_unit - computed: true, optional: true, required: false
  private _maxReceiveUnit?: number; 
  public get maxReceiveUnit() {
    return this.getNumberAttribute('max_receive_unit');
  }
  public set maxReceiveUnit(value: number) {
    this._maxReceiveUnit = value;
  }
  public resetMaxReceiveUnit() {
    this._maxReceiveUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxReceiveUnitInput() {
    return this._maxReceiveUnit;
  }

  // max_session_timeout - computed: true, optional: true, required: false
  private _maxSessionTimeout?: number; 
  public get maxSessionTimeout() {
    return this.getNumberAttribute('max_session_timeout');
  }
  public set maxSessionTimeout(value: number) {
    this._maxSessionTimeout = value;
  }
  public resetMaxSessionTimeout() {
    this._maxSessionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSessionTimeoutInput() {
    return this._maxSessionTimeout;
  }

  // mcast_session_accounting - computed: true, optional: true, required: false
  private _mcastSessionAccounting?: string; 
  public get mcastSessionAccounting() {
    return this.getStringAttribute('mcast_session_accounting');
  }
  public set mcastSessionAccounting(value: string) {
    this._mcastSessionAccounting = value;
  }
  public resetMcastSessionAccounting() {
    this._mcastSessionAccounting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mcastSessionAccountingInput() {
    return this._mcastSessionAccounting;
  }

  // mcast_session_counting - computed: false, optional: true, required: false
  private _mcastSessionCounting?: string; 
  public get mcastSessionCounting() {
    return this.getStringAttribute('mcast_session_counting');
  }
  public set mcastSessionCounting(value: string) {
    this._mcastSessionCounting = value;
  }
  public resetMcastSessionCounting() {
    this._mcastSessionCounting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mcastSessionCountingInput() {
    return this._mcastSessionCounting;
  }

  // mcast_session_counting6 - computed: true, optional: true, required: false
  private _mcastSessionCounting6?: string; 
  public get mcastSessionCounting6() {
    return this.getStringAttribute('mcast_session_counting6');
  }
  public set mcastSessionCounting6(value: string) {
    this._mcastSessionCounting6 = value;
  }
  public resetMcastSessionCounting6() {
    this._mcastSessionCounting6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mcastSessionCounting6Input() {
    return this._mcastSessionCounting6;
  }

  // napi_break_interval - computed: false, optional: true, required: false
  private _napiBreakInterval?: number; 
  public get napiBreakInterval() {
    return this.getNumberAttribute('napi_break_interval');
  }
  public set napiBreakInterval(value: number) {
    this._napiBreakInterval = value;
  }
  public resetNapiBreakInterval() {
    this._napiBreakInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get napiBreakIntervalInput() {
    return this._napiBreakInterval;
  }

  // nat46_force_ipv4_packet_forwarding - computed: false, optional: true, required: false
  private _nat46ForceIpv4PacketForwarding?: string; 
  public get nat46ForceIpv4PacketForwarding() {
    return this.getStringAttribute('nat46_force_ipv4_packet_forwarding');
  }
  public set nat46ForceIpv4PacketForwarding(value: string) {
    this._nat46ForceIpv4PacketForwarding = value;
  }
  public resetNat46ForceIpv4PacketForwarding() {
    this._nat46ForceIpv4PacketForwarding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat46ForceIpv4PacketForwardingInput() {
    return this._nat46ForceIpv4PacketForwarding;
  }

  // np6_cps_optimization_mode - computed: true, optional: true, required: false
  private _np6CpsOptimizationMode?: string; 
  public get np6CpsOptimizationMode() {
    return this.getStringAttribute('np6_cps_optimization_mode');
  }
  public set np6CpsOptimizationMode(value: string) {
    this._np6CpsOptimizationMode = value;
  }
  public resetNp6CpsOptimizationMode() {
    this._np6CpsOptimizationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get np6CpsOptimizationModeInput() {
    return this._np6CpsOptimizationMode;
  }

  // npu_group_effective_scope - computed: true, optional: true, required: false
  private _npuGroupEffectiveScope?: number; 
  public get npuGroupEffectiveScope() {
    return this.getNumberAttribute('npu_group_effective_scope');
  }
  public set npuGroupEffectiveScope(value: number) {
    this._npuGroupEffectiveScope = value;
  }
  public resetNpuGroupEffectiveScope() {
    this._npuGroupEffectiveScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get npuGroupEffectiveScopeInput() {
    return this._npuGroupEffectiveScope;
  }

  // nss_threads_option - computed: true, optional: true, required: false
  private _nssThreadsOption?: string; 
  public get nssThreadsOption() {
    return this.getStringAttribute('nss_threads_option');
  }
  public set nssThreadsOption(value: string) {
    this._nssThreadsOption = value;
  }
  public resetNssThreadsOption() {
    this._nssThreadsOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nssThreadsOptionInput() {
    return this._nssThreadsOption;
  }

  // pba_eim - computed: true, optional: true, required: false
  private _pbaEim?: string; 
  public get pbaEim() {
    return this.getStringAttribute('pba_eim');
  }
  public set pbaEim(value: string) {
    this._pbaEim = value;
  }
  public resetPbaEim() {
    this._pbaEim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pbaEimInput() {
    return this._pbaEim;
  }

  // pba_port_select_mode - computed: true, optional: true, required: false
  private _pbaPortSelectMode?: string; 
  public get pbaPortSelectMode() {
    return this.getStringAttribute('pba_port_select_mode');
  }
  public set pbaPortSelectMode(value: string) {
    this._pbaPortSelectMode = value;
  }
  public resetPbaPortSelectMode() {
    this._pbaPortSelectMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pbaPortSelectModeInput() {
    return this._pbaPortSelectMode;
  }

  // per_policy_accounting - computed: true, optional: true, required: false
  private _perPolicyAccounting?: string; 
  public get perPolicyAccounting() {
    return this.getStringAttribute('per_policy_accounting');
  }
  public set perPolicyAccounting(value: string) {
    this._perPolicyAccounting = value;
  }
  public resetPerPolicyAccounting() {
    this._perPolicyAccounting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perPolicyAccountingInput() {
    return this._perPolicyAccounting;
  }

  // per_session_accounting - computed: true, optional: true, required: false
  private _perSessionAccounting?: string; 
  public get perSessionAccounting() {
    return this.getStringAttribute('per_session_accounting');
  }
  public set perSessionAccounting(value: string) {
    this._perSessionAccounting = value;
  }
  public resetPerSessionAccounting() {
    this._perSessionAccounting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSessionAccountingInput() {
    return this._perSessionAccounting;
  }

  // ple_non_syn_tcp_action - computed: true, optional: true, required: false
  private _pleNonSynTcpAction?: string; 
  public get pleNonSynTcpAction() {
    return this.getStringAttribute('ple_non_syn_tcp_action');
  }
  public set pleNonSynTcpAction(value: string) {
    this._pleNonSynTcpAction = value;
  }
  public resetPleNonSynTcpAction() {
    this._pleNonSynTcpAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pleNonSynTcpActionInput() {
    return this._pleNonSynTcpAction;
  }

  // policy_offload_level - computed: true, optional: true, required: false
  private _policyOffloadLevel?: string; 
  public get policyOffloadLevel() {
    return this.getStringAttribute('policy_offload_level');
  }
  public set policyOffloadLevel(value: string) {
    this._policyOffloadLevel = value;
  }
  public resetPolicyOffloadLevel() {
    this._policyOffloadLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyOffloadLevelInput() {
    return this._policyOffloadLevel;
  }

  // process_icmp_by_host - computed: false, optional: true, required: false
  private _processIcmpByHost?: string; 
  public get processIcmpByHost() {
    return this.getStringAttribute('process_icmp_by_host');
  }
  public set processIcmpByHost(value: string) {
    this._processIcmpByHost = value;
  }
  public resetProcessIcmpByHost() {
    this._processIcmpByHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processIcmpByHostInput() {
    return this._processIcmpByHost;
  }

  // prp_port_in - computed: false, optional: true, required: false
  private _prpPortIn?: string; 
  public get prpPortIn() {
    return this.getStringAttribute('prp_port_in');
  }
  public set prpPortIn(value: string) {
    this._prpPortIn = value;
  }
  public resetPrpPortIn() {
    this._prpPortIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prpPortInInput() {
    return this._prpPortIn;
  }

  // prp_port_out - computed: false, optional: true, required: false
  private _prpPortOut?: string; 
  public get prpPortOut() {
    return this.getStringAttribute('prp_port_out');
  }
  public set prpPortOut(value: string) {
    this._prpPortOut = value;
  }
  public resetPrpPortOut() {
    this._prpPortOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prpPortOutInput() {
    return this._prpPortOut;
  }

  // prp_session_clear_mode - computed: true, optional: true, required: false
  private _prpSessionClearMode?: string; 
  public get prpSessionClearMode() {
    return this.getStringAttribute('prp_session_clear_mode');
  }
  public set prpSessionClearMode(value: string) {
    this._prpSessionClearMode = value;
  }
  public resetPrpSessionClearMode() {
    this._prpSessionClearMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prpSessionClearModeInput() {
    return this._prpSessionClearMode;
  }

  // qos_mode - computed: true, optional: true, required: false
  private _qosMode?: string; 
  public get qosMode() {
    return this.getStringAttribute('qos_mode');
  }
  public set qosMode(value: string) {
    this._qosMode = value;
  }
  public resetQosMode() {
    this._qosMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosModeInput() {
    return this._qosMode;
  }

  // qtm_buf_mode - computed: true, optional: true, required: false
  private _qtmBufMode?: string; 
  public get qtmBufMode() {
    return this.getStringAttribute('qtm_buf_mode');
  }
  public set qtmBufMode(value: string) {
    this._qtmBufMode = value;
  }
  public resetQtmBufMode() {
    this._qtmBufMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qtmBufModeInput() {
    return this._qtmBufMode;
  }

  // rdp_offload - computed: true, optional: true, required: false
  private _rdpOffload?: string; 
  public get rdpOffload() {
    return this.getStringAttribute('rdp_offload');
  }
  public set rdpOffload(value: string) {
    this._rdpOffload = value;
  }
  public resetRdpOffload() {
    this._rdpOffload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdpOffloadInput() {
    return this._rdpOffload;
  }

  // recover_np6_link - computed: true, optional: true, required: false
  private _recoverNp6Link?: string; 
  public get recoverNp6Link() {
    return this.getStringAttribute('recover_np6_link');
  }
  public set recoverNp6Link(value: string) {
    this._recoverNp6Link = value;
  }
  public resetRecoverNp6Link() {
    this._recoverNp6Link = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoverNp6LinkInput() {
    return this._recoverNp6Link;
  }

  // rps_mode - computed: true, optional: true, required: false
  private _rpsMode?: string; 
  public get rpsMode() {
    return this.getStringAttribute('rps_mode');
  }
  public set rpsMode(value: string) {
    this._rpsMode = value;
  }
  public resetRpsMode() {
    this._rpsMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpsModeInput() {
    return this._rpsMode;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // session_acct_interval - computed: true, optional: true, required: false
  private _sessionAcctInterval?: number; 
  public get sessionAcctInterval() {
    return this.getNumberAttribute('session_acct_interval');
  }
  public set sessionAcctInterval(value: number) {
    this._sessionAcctInterval = value;
  }
  public resetSessionAcctInterval() {
    this._sessionAcctInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionAcctIntervalInput() {
    return this._sessionAcctInterval;
  }

  // session_denied_offload - computed: true, optional: true, required: false
  private _sessionDeniedOffload?: string; 
  public get sessionDeniedOffload() {
    return this.getStringAttribute('session_denied_offload');
  }
  public set sessionDeniedOffload(value: string) {
    this._sessionDeniedOffload = value;
  }
  public resetSessionDeniedOffload() {
    this._sessionDeniedOffload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionDeniedOffloadInput() {
    return this._sessionDeniedOffload;
  }

  // shaping_stats - computed: true, optional: true, required: false
  private _shapingStats?: string; 
  public get shapingStats() {
    return this.getStringAttribute('shaping_stats');
  }
  public set shapingStats(value: string) {
    this._shapingStats = value;
  }
  public resetShapingStats() {
    this._shapingStats = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shapingStatsInput() {
    return this._shapingStats;
  }

  // spa_port_select_mode - computed: true, optional: true, required: false
  private _spaPortSelectMode?: string; 
  public get spaPortSelectMode() {
    return this.getStringAttribute('spa_port_select_mode');
  }
  public set spaPortSelectMode(value: string) {
    this._spaPortSelectMode = value;
  }
  public resetSpaPortSelectMode() {
    this._spaPortSelectMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaPortSelectModeInput() {
    return this._spaPortSelectMode;
  }

  // split_ipsec_engines - computed: true, optional: true, required: false
  private _splitIpsecEngines?: string; 
  public get splitIpsecEngines() {
    return this.getStringAttribute('split_ipsec_engines');
  }
  public set splitIpsecEngines(value: string) {
    this._splitIpsecEngines = value;
  }
  public resetSplitIpsecEngines() {
    this._splitIpsecEngines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitIpsecEnginesInput() {
    return this._splitIpsecEngines;
  }

  // sse_backpressure - computed: true, optional: true, required: false
  private _sseBackpressure?: string; 
  public get sseBackpressure() {
    return this.getStringAttribute('sse_backpressure');
  }
  public set sseBackpressure(value: string) {
    this._sseBackpressure = value;
  }
  public resetSseBackpressure() {
    this._sseBackpressure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sseBackpressureInput() {
    return this._sseBackpressure;
  }

  // strip_clear_text_padding - computed: true, optional: true, required: false
  private _stripClearTextPadding?: string; 
  public get stripClearTextPadding() {
    return this.getStringAttribute('strip_clear_text_padding');
  }
  public set stripClearTextPadding(value: string) {
    this._stripClearTextPadding = value;
  }
  public resetStripClearTextPadding() {
    this._stripClearTextPadding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stripClearTextPaddingInput() {
    return this._stripClearTextPadding;
  }

  // strip_esp_padding - computed: true, optional: true, required: false
  private _stripEspPadding?: string; 
  public get stripEspPadding() {
    return this.getStringAttribute('strip_esp_padding');
  }
  public set stripEspPadding(value: string) {
    this._stripEspPadding = value;
  }
  public resetStripEspPadding() {
    this._stripEspPadding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stripEspPaddingInput() {
    return this._stripEspPadding;
  }

  // sw_np_bandwidth - computed: true, optional: true, required: false
  private _swNpBandwidth?: string; 
  public get swNpBandwidth() {
    return this.getStringAttribute('sw_np_bandwidth');
  }
  public set swNpBandwidth(value: string) {
    this._swNpBandwidth = value;
  }
  public resetSwNpBandwidth() {
    this._swNpBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swNpBandwidthInput() {
    return this._swNpBandwidth;
  }

  // sw_np_pause - computed: false, optional: true, required: false
  private _swNpPause?: string; 
  public get swNpPause() {
    return this.getStringAttribute('sw_np_pause');
  }
  public set swNpPause(value: string) {
    this._swNpPause = value;
  }
  public resetSwNpPause() {
    this._swNpPause = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swNpPauseInput() {
    return this._swNpPause;
  }

  // sw_np_rate - computed: false, optional: true, required: false
  private _swNpRate?: number; 
  public get swNpRate() {
    return this.getNumberAttribute('sw_np_rate');
  }
  public set swNpRate(value: number) {
    this._swNpRate = value;
  }
  public resetSwNpRate() {
    this._swNpRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swNpRateInput() {
    return this._swNpRate;
  }

  // sw_np_rate_unit - computed: false, optional: true, required: false
  private _swNpRateUnit?: string; 
  public get swNpRateUnit() {
    return this.getStringAttribute('sw_np_rate_unit');
  }
  public set swNpRateUnit(value: string) {
    this._swNpRateUnit = value;
  }
  public resetSwNpRateUnit() {
    this._swNpRateUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swNpRateUnitInput() {
    return this._swNpRateUnit;
  }

  // switch_np_hash - computed: true, optional: true, required: false
  private _switchNpHash?: string; 
  public get switchNpHash() {
    return this.getStringAttribute('switch_np_hash');
  }
  public set switchNpHash(value: string) {
    this._switchNpHash = value;
  }
  public resetSwitchNpHash() {
    this._switchNpHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchNpHashInput() {
    return this._switchNpHash;
  }

  // tcp_rst_timeout - computed: false, optional: true, required: false
  private _tcpRstTimeout?: number; 
  public get tcpRstTimeout() {
    return this.getNumberAttribute('tcp_rst_timeout');
  }
  public set tcpRstTimeout(value: number) {
    this._tcpRstTimeout = value;
  }
  public resetTcpRstTimeout() {
    this._tcpRstTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpRstTimeoutInput() {
    return this._tcpRstTimeout;
  }

  // tunnel_over_vlink - computed: true, optional: true, required: false
  private _tunnelOverVlink?: string; 
  public get tunnelOverVlink() {
    return this.getStringAttribute('tunnel_over_vlink');
  }
  public set tunnelOverVlink(value: string) {
    this._tunnelOverVlink = value;
  }
  public resetTunnelOverVlink() {
    this._tunnelOverVlink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelOverVlinkInput() {
    return this._tunnelOverVlink;
  }

  // uesp_offload - computed: true, optional: true, required: false
  private _uespOffload?: string; 
  public get uespOffload() {
    return this.getStringAttribute('uesp_offload');
  }
  public set uespOffload(value: string) {
    this._uespOffload = value;
  }
  public resetUespOffload() {
    this._uespOffload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uespOffloadInput() {
    return this._uespOffload;
  }

  // ull_port_mode - computed: true, optional: true, required: false
  private _ullPortMode?: string; 
  public get ullPortMode() {
    return this.getStringAttribute('ull_port_mode');
  }
  public set ullPortMode(value: string) {
    this._ullPortMode = value;
  }
  public resetUllPortMode() {
    this._ullPortMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ullPortModeInput() {
    return this._ullPortMode;
  }

  // use_mse_oft - computed: false, optional: true, required: false
  private _useMseOft?: string; 
  public get useMseOft() {
    return this.getStringAttribute('use_mse_oft');
  }
  public set useMseOft(value: string) {
    this._useMseOft = value;
  }
  public resetUseMseOft() {
    this._useMseOft = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMseOftInput() {
    return this._useMseOft;
  }

  // vlan_lookup_cache - computed: true, optional: true, required: false
  private _vlanLookupCache?: string; 
  public get vlanLookupCache() {
    return this.getStringAttribute('vlan_lookup_cache');
  }
  public set vlanLookupCache(value: string) {
    this._vlanLookupCache = value;
  }
  public resetVlanLookupCache() {
    this._vlanLookupCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanLookupCacheInput() {
    return this._vlanLookupCache;
  }

  // vxlan_offload - computed: true, optional: true, required: false
  private _vxlanOffload?: string; 
  public get vxlanOffload() {
    return this.getStringAttribute('vxlan_offload');
  }
  public set vxlanOffload(value: string) {
    this._vxlanOffload = value;
  }
  public resetVxlanOffload() {
    this._vxlanOffload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vxlanOffloadInput() {
    return this._vxlanOffload;
  }

  // background_sse_scan - computed: false, optional: true, required: false
  private _backgroundSseScan = new ObjectSystemNpuBackgroundSseScanOutputReference(this, "background_sse_scan");
  public get backgroundSseScan() {
    return this._backgroundSseScan;
  }
  public putBackgroundSseScan(value: ObjectSystemNpuBackgroundSseScan) {
    this._backgroundSseScan.internalValue = value;
  }
  public resetBackgroundSseScan() {
    this._backgroundSseScan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundSseScanInput() {
    return this._backgroundSseScan.internalValue;
  }

  // dos_options - computed: false, optional: true, required: false
  private _dosOptions = new ObjectSystemNpuDosOptionsOutputReference(this, "dos_options");
  public get dosOptions() {
    return this._dosOptions;
  }
  public putDosOptions(value: ObjectSystemNpuDosOptions) {
    this._dosOptions.internalValue = value;
  }
  public resetDosOptions() {
    this._dosOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dosOptionsInput() {
    return this._dosOptions.internalValue;
  }

  // dsw_dts_profile - computed: false, optional: true, required: false
  private _dswDtsProfile = new ObjectSystemNpuDswDtsProfileList(this, "dsw_dts_profile", false);
  public get dswDtsProfile() {
    return this._dswDtsProfile;
  }
  public putDswDtsProfile(value: ObjectSystemNpuDswDtsProfile[] | cdktf.IResolvable) {
    this._dswDtsProfile.internalValue = value;
  }
  public resetDswDtsProfile() {
    this._dswDtsProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dswDtsProfileInput() {
    return this._dswDtsProfile.internalValue;
  }

  // dsw_queue_dts_profile - computed: false, optional: true, required: false
  private _dswQueueDtsProfile = new ObjectSystemNpuDswQueueDtsProfileList(this, "dsw_queue_dts_profile", false);
  public get dswQueueDtsProfile() {
    return this._dswQueueDtsProfile;
  }
  public putDswQueueDtsProfile(value: ObjectSystemNpuDswQueueDtsProfile[] | cdktf.IResolvable) {
    this._dswQueueDtsProfile.internalValue = value;
  }
  public resetDswQueueDtsProfile() {
    this._dswQueueDtsProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dswQueueDtsProfileInput() {
    return this._dswQueueDtsProfile.internalValue;
  }

  // fp_anomaly - computed: false, optional: true, required: false
  private _fpAnomaly = new ObjectSystemNpuFpAnomalyOutputReference(this, "fp_anomaly");
  public get fpAnomaly() {
    return this._fpAnomaly;
  }
  public putFpAnomaly(value: ObjectSystemNpuFpAnomaly) {
    this._fpAnomaly.internalValue = value;
  }
  public resetFpAnomaly() {
    this._fpAnomaly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fpAnomalyInput() {
    return this._fpAnomaly.internalValue;
  }

  // hpe - computed: false, optional: true, required: false
  private _hpe = new ObjectSystemNpuHpeOutputReference(this, "hpe");
  public get hpe() {
    return this._hpe;
  }
  public putHpe(value: ObjectSystemNpuHpe) {
    this._hpe.internalValue = value;
  }
  public resetHpe() {
    this._hpe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hpeInput() {
    return this._hpe.internalValue;
  }

  // icmp_error_rate_ctrl - computed: false, optional: true, required: false
  private _icmpErrorRateCtrl = new ObjectSystemNpuIcmpErrorRateCtrlOutputReference(this, "icmp_error_rate_ctrl");
  public get icmpErrorRateCtrl() {
    return this._icmpErrorRateCtrl;
  }
  public putIcmpErrorRateCtrl(value: ObjectSystemNpuIcmpErrorRateCtrl) {
    this._icmpErrorRateCtrl.internalValue = value;
  }
  public resetIcmpErrorRateCtrl() {
    this._icmpErrorRateCtrl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpErrorRateCtrlInput() {
    return this._icmpErrorRateCtrl.internalValue;
  }

  // icmp_rate_ctrl - computed: false, optional: true, required: false
  private _icmpRateCtrl = new ObjectSystemNpuIcmpRateCtrlOutputReference(this, "icmp_rate_ctrl");
  public get icmpRateCtrl() {
    return this._icmpRateCtrl;
  }
  public putIcmpRateCtrl(value: ObjectSystemNpuIcmpRateCtrl) {
    this._icmpRateCtrl.internalValue = value;
  }
  public resetIcmpRateCtrl() {
    this._icmpRateCtrl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpRateCtrlInput() {
    return this._icmpRateCtrl.internalValue;
  }

  // ip_reassembly - computed: false, optional: true, required: false
  private _ipReassembly = new ObjectSystemNpuIpReassemblyOutputReference(this, "ip_reassembly");
  public get ipReassembly() {
    return this._ipReassembly;
  }
  public putIpReassembly(value: ObjectSystemNpuIpReassembly) {
    this._ipReassembly.internalValue = value;
  }
  public resetIpReassembly() {
    this._ipReassembly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipReassemblyInput() {
    return this._ipReassembly.internalValue;
  }

  // isf_np_queues - computed: false, optional: true, required: false
  private _isfNpQueues = new ObjectSystemNpuIsfNpQueuesOutputReference(this, "isf_np_queues");
  public get isfNpQueues() {
    return this._isfNpQueues;
  }
  public putIsfNpQueues(value: ObjectSystemNpuIsfNpQueues) {
    this._isfNpQueues.internalValue = value;
  }
  public resetIsfNpQueues() {
    this._isfNpQueues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isfNpQueuesInput() {
    return this._isfNpQueues.internalValue;
  }

  // np_queues - computed: false, optional: true, required: false
  private _npQueues = new ObjectSystemNpuNpQueuesOutputReference(this, "np_queues");
  public get npQueues() {
    return this._npQueues;
  }
  public putNpQueues(value: ObjectSystemNpuNpQueues) {
    this._npQueues.internalValue = value;
  }
  public resetNpQueues() {
    this._npQueues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get npQueuesInput() {
    return this._npQueues.internalValue;
  }

  // npu_tcam - computed: false, optional: true, required: false
  private _npuTcam = new ObjectSystemNpuNpuTcamList(this, "npu_tcam", false);
  public get npuTcam() {
    return this._npuTcam;
  }
  public putNpuTcam(value: ObjectSystemNpuNpuTcam[] | cdktf.IResolvable) {
    this._npuTcam.internalValue = value;
  }
  public resetNpuTcam() {
    this._npuTcam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get npuTcamInput() {
    return this._npuTcam.internalValue;
  }

  // port_cpu_map - computed: false, optional: true, required: false
  private _portCpuMap = new ObjectSystemNpuPortCpuMapList(this, "port_cpu_map", false);
  public get portCpuMap() {
    return this._portCpuMap;
  }
  public putPortCpuMap(value: ObjectSystemNpuPortCpuMap[] | cdktf.IResolvable) {
    this._portCpuMap.internalValue = value;
  }
  public resetPortCpuMap() {
    this._portCpuMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portCpuMapInput() {
    return this._portCpuMap.internalValue;
  }

  // port_npu_map - computed: false, optional: true, required: false
  private _portNpuMap = new ObjectSystemNpuPortNpuMapList(this, "port_npu_map", false);
  public get portNpuMap() {
    return this._portNpuMap;
  }
  public putPortNpuMap(value: ObjectSystemNpuPortNpuMap[] | cdktf.IResolvable) {
    this._portNpuMap.internalValue = value;
  }
  public resetPortNpuMap() {
    this._portNpuMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portNpuMapInput() {
    return this._portNpuMap.internalValue;
  }

  // port_path_option - computed: false, optional: true, required: false
  private _portPathOption = new ObjectSystemNpuPortPathOptionOutputReference(this, "port_path_option");
  public get portPathOption() {
    return this._portPathOption;
  }
  public putPortPathOption(value: ObjectSystemNpuPortPathOption) {
    this._portPathOption.internalValue = value;
  }
  public resetPortPathOption() {
    this._portPathOption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portPathOptionInput() {
    return this._portPathOption.internalValue;
  }

  // priority_protocol - computed: false, optional: true, required: false
  private _priorityProtocol = new ObjectSystemNpuPriorityProtocolOutputReference(this, "priority_protocol");
  public get priorityProtocol() {
    return this._priorityProtocol;
  }
  public putPriorityProtocol(value: ObjectSystemNpuPriorityProtocol) {
    this._priorityProtocol.internalValue = value;
  }
  public resetPriorityProtocol() {
    this._priorityProtocol.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityProtocolInput() {
    return this._priorityProtocol.internalValue;
  }

  // sse_ha_scan - computed: false, optional: true, required: false
  private _sseHaScan = new ObjectSystemNpuSseHaScanOutputReference(this, "sse_ha_scan");
  public get sseHaScan() {
    return this._sseHaScan;
  }
  public putSseHaScan(value: ObjectSystemNpuSseHaScan) {
    this._sseHaScan.internalValue = value;
  }
  public resetSseHaScan() {
    this._sseHaScan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sseHaScanInput() {
    return this._sseHaScan.internalValue;
  }

  // sw_eh_hash - computed: false, optional: true, required: false
  private _swEhHash = new ObjectSystemNpuSwEhHashOutputReference(this, "sw_eh_hash");
  public get swEhHash() {
    return this._swEhHash;
  }
  public putSwEhHash(value: ObjectSystemNpuSwEhHash) {
    this._swEhHash.internalValue = value;
  }
  public resetSwEhHash() {
    this._swEhHash.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swEhHashInput() {
    return this._swEhHash.internalValue;
  }

  // sw_tr_hash - computed: false, optional: true, required: false
  private _swTrHash = new ObjectSystemNpuSwTrHashOutputReference(this, "sw_tr_hash");
  public get swTrHash() {
    return this._swTrHash;
  }
  public putSwTrHash(value: ObjectSystemNpuSwTrHash) {
    this._swTrHash.internalValue = value;
  }
  public resetSwTrHash() {
    this._swTrHash.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swTrHashInput() {
    return this._swTrHash.internalValue;
  }

  // tcp_timeout_profile - computed: false, optional: true, required: false
  private _tcpTimeoutProfile = new ObjectSystemNpuTcpTimeoutProfileList(this, "tcp_timeout_profile", false);
  public get tcpTimeoutProfile() {
    return this._tcpTimeoutProfile;
  }
  public putTcpTimeoutProfile(value: ObjectSystemNpuTcpTimeoutProfile[] | cdktf.IResolvable) {
    this._tcpTimeoutProfile.internalValue = value;
  }
  public resetTcpTimeoutProfile() {
    this._tcpTimeoutProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpTimeoutProfileInput() {
    return this._tcpTimeoutProfile.internalValue;
  }

  // udp_timeout_profile - computed: false, optional: true, required: false
  private _udpTimeoutProfile = new ObjectSystemNpuUdpTimeoutProfileList(this, "udp_timeout_profile", false);
  public get udpTimeoutProfile() {
    return this._udpTimeoutProfile;
  }
  public putUdpTimeoutProfile(value: ObjectSystemNpuUdpTimeoutProfile[] | cdktf.IResolvable) {
    this._udpTimeoutProfile.internalValue = value;
  }
  public resetUdpTimeoutProfile() {
    this._udpTimeoutProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpTimeoutProfileInput() {
    return this._udpTimeoutProfile.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      capwap_offload: cdktf.stringToTerraform(this._capwapOffload),
      dedicated_lacp_queue: cdktf.stringToTerraform(this._dedicatedLacpQueue),
      dedicated_management_affinity: cdktf.stringToTerraform(this._dedicatedManagementAffinity),
      dedicated_management_cpu: cdktf.stringToTerraform(this._dedicatedManagementCpu),
      default_qos_type: cdktf.stringToTerraform(this._defaultQosType),
      default_tcp_refresh_dir: cdktf.stringToTerraform(this._defaultTcpRefreshDir),
      default_udp_refresh_dir: cdktf.stringToTerraform(this._defaultUdpRefreshDir),
      double_level_mcast_offload: cdktf.stringToTerraform(this._doubleLevelMcastOffload),
      dse_timeout: cdktf.numberToTerraform(this._dseTimeout),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      fastpath: cdktf.stringToTerraform(this._fastpath),
      gtp_enhanced_cpu_range: cdktf.stringToTerraform(this._gtpEnhancedCpuRange),
      gtp_enhanced_mode: cdktf.stringToTerraform(this._gtpEnhancedMode),
      gtp_support: cdktf.stringToTerraform(this._gtpSupport),
      hash_config: cdktf.stringToTerraform(this._hashConfig),
      hash_ipv6_sel: cdktf.numberToTerraform(this._hashIpv6Sel),
      hash_tbl_spread: cdktf.stringToTerraform(this._hashTblSpread),
      host_shortcut_mode: cdktf.stringToTerraform(this._hostShortcutMode),
      htab_dedi_queue_nr: cdktf.numberToTerraform(this._htabDediQueueNr),
      htab_msg_queue: cdktf.stringToTerraform(this._htabMsgQueue),
      htx_gtse_quota: cdktf.stringToTerraform(this._htxGtseQuota),
      htx_icmp_csum_chk: cdktf.stringToTerraform(this._htxIcmpCsumChk),
      hw_ha_scan_interval: cdktf.numberToTerraform(this._hwHaScanInterval),
      id: cdktf.stringToTerraform(this._id),
      inbound_dscp_copy: cdktf.stringToTerraform(this._inboundDscpCopy),
      inbound_dscp_copy_port: cdktf.listMapper(cdktf.stringToTerraform, false)(this._inboundDscpCopyPort),
      intf_shaping_offload: cdktf.stringToTerraform(this._intfShapingOffload),
      ip_fragment_offload: cdktf.stringToTerraform(this._ipFragmentOffload),
      iph_rsvd_re_cksum: cdktf.stringToTerraform(this._iphRsvdReCksum),
      ippool_overload_high: cdktf.numberToTerraform(this._ippoolOverloadHigh),
      ippool_overload_low: cdktf.numberToTerraform(this._ippoolOverloadLow),
      ipsec_dec_subengine_mask: cdktf.stringToTerraform(this._ipsecDecSubengineMask),
      ipsec_enc_subengine_mask: cdktf.stringToTerraform(this._ipsecEncSubengineMask),
      ipsec_host_dfclr: cdktf.stringToTerraform(this._ipsecHostDfclr),
      ipsec_inbound_cache: cdktf.stringToTerraform(this._ipsecInboundCache),
      ipsec_local_uesp_port: cdktf.numberToTerraform(this._ipsecLocalUespPort),
      ipsec_mtu_override: cdktf.stringToTerraform(this._ipsecMtuOverride),
      ipsec_ob_np_sel: cdktf.stringToTerraform(this._ipsecObNpSel),
      ipsec_ordering: cdktf.stringToTerraform(this._ipsecOrdering),
      ipsec_over_vlink: cdktf.stringToTerraform(this._ipsecOverVlink),
      ipsec_sts_timeout: cdktf.stringToTerraform(this._ipsecStsTimeout),
      ipsec_throughput_msg_frequency: cdktf.stringToTerraform(this._ipsecThroughputMsgFrequency),
      ipt_sts_timeout: cdktf.stringToTerraform(this._iptStsTimeout),
      ipt_throughput_msg_frequency: cdktf.stringToTerraform(this._iptThroughputMsgFrequency),
      ipv4_session_quota: cdktf.stringToTerraform(this._ipv4SessionQuota),
      ipv4_session_quota_high: cdktf.numberToTerraform(this._ipv4SessionQuotaHigh),
      ipv4_session_quota_low: cdktf.numberToTerraform(this._ipv4SessionQuotaLow),
      ipv6_prefix_session_quota: cdktf.stringToTerraform(this._ipv6PrefixSessionQuota),
      ipv6_prefix_session_quota_high: cdktf.numberToTerraform(this._ipv6PrefixSessionQuotaHigh),
      ipv6_prefix_session_quota_low: cdktf.numberToTerraform(this._ipv6PrefixSessionQuotaLow),
      isf_np_rx_tr_distr: cdktf.stringToTerraform(this._isfNpRxTrDistr),
      lag_hash_gre: cdktf.stringToTerraform(this._lagHashGre),
      lag_out_port_select: cdktf.stringToTerraform(this._lagOutPortSelect),
      max_receive_unit: cdktf.numberToTerraform(this._maxReceiveUnit),
      max_session_timeout: cdktf.numberToTerraform(this._maxSessionTimeout),
      mcast_session_accounting: cdktf.stringToTerraform(this._mcastSessionAccounting),
      mcast_session_counting: cdktf.stringToTerraform(this._mcastSessionCounting),
      mcast_session_counting6: cdktf.stringToTerraform(this._mcastSessionCounting6),
      napi_break_interval: cdktf.numberToTerraform(this._napiBreakInterval),
      nat46_force_ipv4_packet_forwarding: cdktf.stringToTerraform(this._nat46ForceIpv4PacketForwarding),
      np6_cps_optimization_mode: cdktf.stringToTerraform(this._np6CpsOptimizationMode),
      npu_group_effective_scope: cdktf.numberToTerraform(this._npuGroupEffectiveScope),
      nss_threads_option: cdktf.stringToTerraform(this._nssThreadsOption),
      pba_eim: cdktf.stringToTerraform(this._pbaEim),
      pba_port_select_mode: cdktf.stringToTerraform(this._pbaPortSelectMode),
      per_policy_accounting: cdktf.stringToTerraform(this._perPolicyAccounting),
      per_session_accounting: cdktf.stringToTerraform(this._perSessionAccounting),
      ple_non_syn_tcp_action: cdktf.stringToTerraform(this._pleNonSynTcpAction),
      policy_offload_level: cdktf.stringToTerraform(this._policyOffloadLevel),
      process_icmp_by_host: cdktf.stringToTerraform(this._processIcmpByHost),
      prp_port_in: cdktf.stringToTerraform(this._prpPortIn),
      prp_port_out: cdktf.stringToTerraform(this._prpPortOut),
      prp_session_clear_mode: cdktf.stringToTerraform(this._prpSessionClearMode),
      qos_mode: cdktf.stringToTerraform(this._qosMode),
      qtm_buf_mode: cdktf.stringToTerraform(this._qtmBufMode),
      rdp_offload: cdktf.stringToTerraform(this._rdpOffload),
      recover_np6_link: cdktf.stringToTerraform(this._recoverNp6Link),
      rps_mode: cdktf.stringToTerraform(this._rpsMode),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      session_acct_interval: cdktf.numberToTerraform(this._sessionAcctInterval),
      session_denied_offload: cdktf.stringToTerraform(this._sessionDeniedOffload),
      shaping_stats: cdktf.stringToTerraform(this._shapingStats),
      spa_port_select_mode: cdktf.stringToTerraform(this._spaPortSelectMode),
      split_ipsec_engines: cdktf.stringToTerraform(this._splitIpsecEngines),
      sse_backpressure: cdktf.stringToTerraform(this._sseBackpressure),
      strip_clear_text_padding: cdktf.stringToTerraform(this._stripClearTextPadding),
      strip_esp_padding: cdktf.stringToTerraform(this._stripEspPadding),
      sw_np_bandwidth: cdktf.stringToTerraform(this._swNpBandwidth),
      sw_np_pause: cdktf.stringToTerraform(this._swNpPause),
      sw_np_rate: cdktf.numberToTerraform(this._swNpRate),
      sw_np_rate_unit: cdktf.stringToTerraform(this._swNpRateUnit),
      switch_np_hash: cdktf.stringToTerraform(this._switchNpHash),
      tcp_rst_timeout: cdktf.numberToTerraform(this._tcpRstTimeout),
      tunnel_over_vlink: cdktf.stringToTerraform(this._tunnelOverVlink),
      uesp_offload: cdktf.stringToTerraform(this._uespOffload),
      ull_port_mode: cdktf.stringToTerraform(this._ullPortMode),
      use_mse_oft: cdktf.stringToTerraform(this._useMseOft),
      vlan_lookup_cache: cdktf.stringToTerraform(this._vlanLookupCache),
      vxlan_offload: cdktf.stringToTerraform(this._vxlanOffload),
      background_sse_scan: objectSystemNpuBackgroundSseScanToTerraform(this._backgroundSseScan.internalValue),
      dos_options: objectSystemNpuDosOptionsToTerraform(this._dosOptions.internalValue),
      dsw_dts_profile: cdktf.listMapper(objectSystemNpuDswDtsProfileToTerraform, true)(this._dswDtsProfile.internalValue),
      dsw_queue_dts_profile: cdktf.listMapper(objectSystemNpuDswQueueDtsProfileToTerraform, true)(this._dswQueueDtsProfile.internalValue),
      fp_anomaly: objectSystemNpuFpAnomalyToTerraform(this._fpAnomaly.internalValue),
      hpe: objectSystemNpuHpeToTerraform(this._hpe.internalValue),
      icmp_error_rate_ctrl: objectSystemNpuIcmpErrorRateCtrlToTerraform(this._icmpErrorRateCtrl.internalValue),
      icmp_rate_ctrl: objectSystemNpuIcmpRateCtrlToTerraform(this._icmpRateCtrl.internalValue),
      ip_reassembly: objectSystemNpuIpReassemblyToTerraform(this._ipReassembly.internalValue),
      isf_np_queues: objectSystemNpuIsfNpQueuesToTerraform(this._isfNpQueues.internalValue),
      np_queues: objectSystemNpuNpQueuesToTerraform(this._npQueues.internalValue),
      npu_tcam: cdktf.listMapper(objectSystemNpuNpuTcamToTerraform, true)(this._npuTcam.internalValue),
      port_cpu_map: cdktf.listMapper(objectSystemNpuPortCpuMapToTerraform, true)(this._portCpuMap.internalValue),
      port_npu_map: cdktf.listMapper(objectSystemNpuPortNpuMapToTerraform, true)(this._portNpuMap.internalValue),
      port_path_option: objectSystemNpuPortPathOptionToTerraform(this._portPathOption.internalValue),
      priority_protocol: objectSystemNpuPriorityProtocolToTerraform(this._priorityProtocol.internalValue),
      sse_ha_scan: objectSystemNpuSseHaScanToTerraform(this._sseHaScan.internalValue),
      sw_eh_hash: objectSystemNpuSwEhHashToTerraform(this._swEhHash.internalValue),
      sw_tr_hash: objectSystemNpuSwTrHashToTerraform(this._swTrHash.internalValue),
      tcp_timeout_profile: cdktf.listMapper(objectSystemNpuTcpTimeoutProfileToTerraform, true)(this._tcpTimeoutProfile.internalValue),
      udp_timeout_profile: cdktf.listMapper(objectSystemNpuUdpTimeoutProfileToTerraform, true)(this._udpTimeoutProfile.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      capwap_offload: {
        value: cdktf.stringToHclTerraform(this._capwapOffload),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dedicated_lacp_queue: {
        value: cdktf.stringToHclTerraform(this._dedicatedLacpQueue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dedicated_management_affinity: {
        value: cdktf.stringToHclTerraform(this._dedicatedManagementAffinity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dedicated_management_cpu: {
        value: cdktf.stringToHclTerraform(this._dedicatedManagementCpu),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_qos_type: {
        value: cdktf.stringToHclTerraform(this._defaultQosType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_tcp_refresh_dir: {
        value: cdktf.stringToHclTerraform(this._defaultTcpRefreshDir),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_udp_refresh_dir: {
        value: cdktf.stringToHclTerraform(this._defaultUdpRefreshDir),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      double_level_mcast_offload: {
        value: cdktf.stringToHclTerraform(this._doubleLevelMcastOffload),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dse_timeout: {
        value: cdktf.numberToHclTerraform(this._dseTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fastpath: {
        value: cdktf.stringToHclTerraform(this._fastpath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gtp_enhanced_cpu_range: {
        value: cdktf.stringToHclTerraform(this._gtpEnhancedCpuRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gtp_enhanced_mode: {
        value: cdktf.stringToHclTerraform(this._gtpEnhancedMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gtp_support: {
        value: cdktf.stringToHclTerraform(this._gtpSupport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hash_config: {
        value: cdktf.stringToHclTerraform(this._hashConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hash_ipv6_sel: {
        value: cdktf.numberToHclTerraform(this._hashIpv6Sel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hash_tbl_spread: {
        value: cdktf.stringToHclTerraform(this._hashTblSpread),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_shortcut_mode: {
        value: cdktf.stringToHclTerraform(this._hostShortcutMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      htab_dedi_queue_nr: {
        value: cdktf.numberToHclTerraform(this._htabDediQueueNr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      htab_msg_queue: {
        value: cdktf.stringToHclTerraform(this._htabMsgQueue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      htx_gtse_quota: {
        value: cdktf.stringToHclTerraform(this._htxGtseQuota),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      htx_icmp_csum_chk: {
        value: cdktf.stringToHclTerraform(this._htxIcmpCsumChk),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hw_ha_scan_interval: {
        value: cdktf.numberToHclTerraform(this._hwHaScanInterval),
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
      inbound_dscp_copy: {
        value: cdktf.stringToHclTerraform(this._inboundDscpCopy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inbound_dscp_copy_port: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._inboundDscpCopyPort),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      intf_shaping_offload: {
        value: cdktf.stringToHclTerraform(this._intfShapingOffload),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_fragment_offload: {
        value: cdktf.stringToHclTerraform(this._ipFragmentOffload),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iph_rsvd_re_cksum: {
        value: cdktf.stringToHclTerraform(this._iphRsvdReCksum),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ippool_overload_high: {
        value: cdktf.numberToHclTerraform(this._ippoolOverloadHigh),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ippool_overload_low: {
        value: cdktf.numberToHclTerraform(this._ippoolOverloadLow),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipsec_dec_subengine_mask: {
        value: cdktf.stringToHclTerraform(this._ipsecDecSubengineMask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipsec_enc_subengine_mask: {
        value: cdktf.stringToHclTerraform(this._ipsecEncSubengineMask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipsec_host_dfclr: {
        value: cdktf.stringToHclTerraform(this._ipsecHostDfclr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipsec_inbound_cache: {
        value: cdktf.stringToHclTerraform(this._ipsecInboundCache),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipsec_local_uesp_port: {
        value: cdktf.numberToHclTerraform(this._ipsecLocalUespPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipsec_mtu_override: {
        value: cdktf.stringToHclTerraform(this._ipsecMtuOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipsec_ob_np_sel: {
        value: cdktf.stringToHclTerraform(this._ipsecObNpSel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipsec_ordering: {
        value: cdktf.stringToHclTerraform(this._ipsecOrdering),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipsec_over_vlink: {
        value: cdktf.stringToHclTerraform(this._ipsecOverVlink),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipsec_sts_timeout: {
        value: cdktf.stringToHclTerraform(this._ipsecStsTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipsec_throughput_msg_frequency: {
        value: cdktf.stringToHclTerraform(this._ipsecThroughputMsgFrequency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipt_sts_timeout: {
        value: cdktf.stringToHclTerraform(this._iptStsTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipt_throughput_msg_frequency: {
        value: cdktf.stringToHclTerraform(this._iptThroughputMsgFrequency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_session_quota: {
        value: cdktf.stringToHclTerraform(this._ipv4SessionQuota),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_session_quota_high: {
        value: cdktf.numberToHclTerraform(this._ipv4SessionQuotaHigh),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv4_session_quota_low: {
        value: cdktf.numberToHclTerraform(this._ipv4SessionQuotaLow),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv6_prefix_session_quota: {
        value: cdktf.stringToHclTerraform(this._ipv6PrefixSessionQuota),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_prefix_session_quota_high: {
        value: cdktf.numberToHclTerraform(this._ipv6PrefixSessionQuotaHigh),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv6_prefix_session_quota_low: {
        value: cdktf.numberToHclTerraform(this._ipv6PrefixSessionQuotaLow),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      isf_np_rx_tr_distr: {
        value: cdktf.stringToHclTerraform(this._isfNpRxTrDistr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lag_hash_gre: {
        value: cdktf.stringToHclTerraform(this._lagHashGre),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lag_out_port_select: {
        value: cdktf.stringToHclTerraform(this._lagOutPortSelect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_receive_unit: {
        value: cdktf.numberToHclTerraform(this._maxReceiveUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_session_timeout: {
        value: cdktf.numberToHclTerraform(this._maxSessionTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mcast_session_accounting: {
        value: cdktf.stringToHclTerraform(this._mcastSessionAccounting),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mcast_session_counting: {
        value: cdktf.stringToHclTerraform(this._mcastSessionCounting),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mcast_session_counting6: {
        value: cdktf.stringToHclTerraform(this._mcastSessionCounting6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      napi_break_interval: {
        value: cdktf.numberToHclTerraform(this._napiBreakInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nat46_force_ipv4_packet_forwarding: {
        value: cdktf.stringToHclTerraform(this._nat46ForceIpv4PacketForwarding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      np6_cps_optimization_mode: {
        value: cdktf.stringToHclTerraform(this._np6CpsOptimizationMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      npu_group_effective_scope: {
        value: cdktf.numberToHclTerraform(this._npuGroupEffectiveScope),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nss_threads_option: {
        value: cdktf.stringToHclTerraform(this._nssThreadsOption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pba_eim: {
        value: cdktf.stringToHclTerraform(this._pbaEim),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pba_port_select_mode: {
        value: cdktf.stringToHclTerraform(this._pbaPortSelectMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      per_policy_accounting: {
        value: cdktf.stringToHclTerraform(this._perPolicyAccounting),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      per_session_accounting: {
        value: cdktf.stringToHclTerraform(this._perSessionAccounting),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ple_non_syn_tcp_action: {
        value: cdktf.stringToHclTerraform(this._pleNonSynTcpAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_offload_level: {
        value: cdktf.stringToHclTerraform(this._policyOffloadLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      process_icmp_by_host: {
        value: cdktf.stringToHclTerraform(this._processIcmpByHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prp_port_in: {
        value: cdktf.stringToHclTerraform(this._prpPortIn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prp_port_out: {
        value: cdktf.stringToHclTerraform(this._prpPortOut),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prp_session_clear_mode: {
        value: cdktf.stringToHclTerraform(this._prpSessionClearMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      qos_mode: {
        value: cdktf.stringToHclTerraform(this._qosMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      qtm_buf_mode: {
        value: cdktf.stringToHclTerraform(this._qtmBufMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rdp_offload: {
        value: cdktf.stringToHclTerraform(this._rdpOffload),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recover_np6_link: {
        value: cdktf.stringToHclTerraform(this._recoverNp6Link),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rps_mode: {
        value: cdktf.stringToHclTerraform(this._rpsMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_acct_interval: {
        value: cdktf.numberToHclTerraform(this._sessionAcctInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      session_denied_offload: {
        value: cdktf.stringToHclTerraform(this._sessionDeniedOffload),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shaping_stats: {
        value: cdktf.stringToHclTerraform(this._shapingStats),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spa_port_select_mode: {
        value: cdktf.stringToHclTerraform(this._spaPortSelectMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      split_ipsec_engines: {
        value: cdktf.stringToHclTerraform(this._splitIpsecEngines),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sse_backpressure: {
        value: cdktf.stringToHclTerraform(this._sseBackpressure),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      strip_clear_text_padding: {
        value: cdktf.stringToHclTerraform(this._stripClearTextPadding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      strip_esp_padding: {
        value: cdktf.stringToHclTerraform(this._stripEspPadding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sw_np_bandwidth: {
        value: cdktf.stringToHclTerraform(this._swNpBandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sw_np_pause: {
        value: cdktf.stringToHclTerraform(this._swNpPause),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sw_np_rate: {
        value: cdktf.numberToHclTerraform(this._swNpRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sw_np_rate_unit: {
        value: cdktf.stringToHclTerraform(this._swNpRateUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switch_np_hash: {
        value: cdktf.stringToHclTerraform(this._switchNpHash),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_rst_timeout: {
        value: cdktf.numberToHclTerraform(this._tcpRstTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tunnel_over_vlink: {
        value: cdktf.stringToHclTerraform(this._tunnelOverVlink),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uesp_offload: {
        value: cdktf.stringToHclTerraform(this._uespOffload),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ull_port_mode: {
        value: cdktf.stringToHclTerraform(this._ullPortMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_mse_oft: {
        value: cdktf.stringToHclTerraform(this._useMseOft),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan_lookup_cache: {
        value: cdktf.stringToHclTerraform(this._vlanLookupCache),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vxlan_offload: {
        value: cdktf.stringToHclTerraform(this._vxlanOffload),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      background_sse_scan: {
        value: objectSystemNpuBackgroundSseScanToHclTerraform(this._backgroundSseScan.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectSystemNpuBackgroundSseScanList",
      },
      dos_options: {
        value: objectSystemNpuDosOptionsToHclTerraform(this._dosOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectSystemNpuDosOptionsList",
      },
      dsw_dts_profile: {
        value: cdktf.listMapperHcl(objectSystemNpuDswDtsProfileToHclTerraform, true)(this._dswDtsProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectSystemNpuDswDtsProfileList",
      },
      dsw_queue_dts_profile: {
        value: cdktf.listMapperHcl(objectSystemNpuDswQueueDtsProfileToHclTerraform, true)(this._dswQueueDtsProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectSystemNpuDswQueueDtsProfileList",
      },
      fp_anomaly: {
        value: objectSystemNpuFpAnomalyToHclTerraform(this._fpAnomaly.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectSystemNpuFpAnomalyList",
      },
      hpe: {
        value: objectSystemNpuHpeToHclTerraform(this._hpe.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectSystemNpuHpeList",
      },
      icmp_error_rate_ctrl: {
        value: objectSystemNpuIcmpErrorRateCtrlToHclTerraform(this._icmpErrorRateCtrl.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectSystemNpuIcmpErrorRateCtrlList",
      },
      icmp_rate_ctrl: {
        value: objectSystemNpuIcmpRateCtrlToHclTerraform(this._icmpRateCtrl.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectSystemNpuIcmpRateCtrlList",
      },
      ip_reassembly: {
        value: objectSystemNpuIpReassemblyToHclTerraform(this._ipReassembly.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectSystemNpuIpReassemblyList",
      },
      isf_np_queues: {
        value: objectSystemNpuIsfNpQueuesToHclTerraform(this._isfNpQueues.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectSystemNpuIsfNpQueuesList",
      },
      np_queues: {
        value: objectSystemNpuNpQueuesToHclTerraform(this._npQueues.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectSystemNpuNpQueuesList",
      },
      npu_tcam: {
        value: cdktf.listMapperHcl(objectSystemNpuNpuTcamToHclTerraform, true)(this._npuTcam.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectSystemNpuNpuTcamList",
      },
      port_cpu_map: {
        value: cdktf.listMapperHcl(objectSystemNpuPortCpuMapToHclTerraform, true)(this._portCpuMap.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectSystemNpuPortCpuMapList",
      },
      port_npu_map: {
        value: cdktf.listMapperHcl(objectSystemNpuPortNpuMapToHclTerraform, true)(this._portNpuMap.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectSystemNpuPortNpuMapList",
      },
      port_path_option: {
        value: objectSystemNpuPortPathOptionToHclTerraform(this._portPathOption.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectSystemNpuPortPathOptionList",
      },
      priority_protocol: {
        value: objectSystemNpuPriorityProtocolToHclTerraform(this._priorityProtocol.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectSystemNpuPriorityProtocolList",
      },
      sse_ha_scan: {
        value: objectSystemNpuSseHaScanToHclTerraform(this._sseHaScan.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectSystemNpuSseHaScanList",
      },
      sw_eh_hash: {
        value: objectSystemNpuSwEhHashToHclTerraform(this._swEhHash.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectSystemNpuSwEhHashList",
      },
      sw_tr_hash: {
        value: objectSystemNpuSwTrHashToHclTerraform(this._swTrHash.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectSystemNpuSwTrHashList",
      },
      tcp_timeout_profile: {
        value: cdktf.listMapperHcl(objectSystemNpuTcpTimeoutProfileToHclTerraform, true)(this._tcpTimeoutProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectSystemNpuTcpTimeoutProfileList",
      },
      udp_timeout_profile: {
        value: cdktf.listMapperHcl(objectSystemNpuUdpTimeoutProfileToHclTerraform, true)(this._udpTimeoutProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectSystemNpuUdpTimeoutProfileList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
