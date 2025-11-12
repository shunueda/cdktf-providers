// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#name VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#name}
  */
  readonly name: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#uuid}
  */
  readonly uuid?: string;
  /**
  * trigger_stats_inc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#trigger_stats_inc VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#trigger_stats_inc}
  */
  readonly triggerStatsInc?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsIncA;
  /**
  * trigger_stats_rate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#trigger_stats_rate VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#trigger_stats_rate}
  */
  readonly triggerStatsRate?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsRateA;
}
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsIncA {
  /**
  * Enable automatic packet-capture for Bad IP Flags Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#bad_ip_flg VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#bad_ip_flg}
  */
  readonly badIpFlg?: number;
  /**
  * Enable automatic packet-capture for Bad IP Fragment Offset Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#bad_ip_frg_offset VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#bad_ip_frg_offset}
  */
  readonly badIpFrgOffset?: number;
  /**
  * Enable automatic packet-capture for Bad IP Header Len Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#bad_ip_hdrlen VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#bad_ip_hdrlen}
  */
  readonly badIpHdrlen?: number;
  /**
  * Enable automatic packet-capture for Bad IP Payload Len Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#bad_ip_payload_len VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#bad_ip_payload_len}
  */
  readonly badIpPayloadLen?: number;
  /**
  * Enable automatic packet-capture for Bad IP TTL Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#bad_ip_ttl VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#bad_ip_ttl}
  */
  readonly badIpTtl?: number;
  /**
  * Enable automatic packet-capture for TCP Bad Urgent Offset Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#bad_tcp_urg_offset VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#bad_tcp_urg_offset}
  */
  readonly badTcpUrgOffset?: number;
  /**
  * Enable automatic packet-capture for Bad IP Checksum Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#csum VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#csum}
  */
  readonly csum?: number;
  /**
  * Enable automatic packet-capture for Empty Fragment Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#emp_frg VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#emp_frg}
  */
  readonly empFrg?: number;
  /**
  * Enable automatic packet-capture for Micro Fragment Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#emp_mic_frg VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#emp_mic_frg}
  */
  readonly empMicFrg?: number;
  /**
  * Enable automatic packet-capture for IPv4 Fragment Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#frg VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#frg}
  */
  readonly frg?: number;
  /**
  * Enable automatic packet-capture for GRE PPTP Error Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#gre_pptp_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#gre_pptp_err}
  */
  readonly grePptpErr?: number;
  /**
  * Enable automatic packet-capture for IP-over-IP Tunnel Error Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#ipip_tnl_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#ipip_tnl_err}
  */
  readonly ipipTnlErr?: number;
  /**
  * Enable automatic packet-capture for IP-over-IP Tunnel Mismatch Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#ipip_tnl_msmtch VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#ipip_tnl_msmtch}
  */
  readonly ipipTnlMsmtch?: number;
  /**
  * Enable automatic packet-capture for IPv6 Authentication Header Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#ipv6_eh_ah VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#ipv6_eh_ah}
  */
  readonly ipv6EhAh?: number;
  /**
  * Enable automatic packet-capture for IPv6 Destination Header Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#ipv6_eh_dest VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#ipv6_eh_dest}
  */
  readonly ipv6EhDest?: number;
  /**
  * Enable automatic packet-capture for IPv6 ESP Header Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#ipv6_eh_esp VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#ipv6_eh_esp}
  */
  readonly ipv6EhEsp?: number;
  /**
  * Enable automatic packet-capture for IPv6 Fragmentation Header Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#ipv6_eh_frag VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#ipv6_eh_frag}
  */
  readonly ipv6EhFrag?: number;
  /**
  * Enable automatic packet-capture for IPv6 Hop by Hop Header Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#ipv6_eh_hbh VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#ipv6_eh_hbh}
  */
  readonly ipv6EhHbh?: number;
  /**
  * Enable automatic packet-capture for IPv6 Malformed Extension Header Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#ipv6_eh_malformed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#ipv6_eh_malformed}
  */
  readonly ipv6EhMalformed?: number;
  /**
  * Enable automatic packet-capture for IPv6 Mobility Header Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#ipv6_eh_mobility VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#ipv6_eh_mobility}
  */
  readonly ipv6EhMobility?: number;
  /**
  * Enable automatic packet-capture for IPv6 No Next Header Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#ipv6_eh_none VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#ipv6_eh_none}
  */
  readonly ipv6EhNone?: number;
  /**
  * Enable automatic packet-capture for IPv6 Unknown Extension Header Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#ipv6_eh_other VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#ipv6_eh_other}
  */
  readonly ipv6EhOther?: number;
  /**
  * Enable automatic packet-capture for IPv6 Routing Header Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#ipv6_eh_routing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#ipv6_eh_routing}
  */
  readonly ipv6EhRouting?: number;
  /**
  * Enable automatic packet-capture for Land Attack Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#land VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#land}
  */
  readonly land?: number;
  /**
  * Enable automatic packet-capture for No IP Payload drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#no_ip_payload VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#no_ip_payload}
  */
  readonly noIpPayload?: number;
  /**
  * Enable automatic packet-capture for GRE Tunnel Error Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#nvgre_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#nvgre_err}
  */
  readonly nvgreErr?: number;
  /**
  * Enable automatic packet-capture for IPv4 Options Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#opt VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#opt}
  */
  readonly opt?: number;
  /**
  * Enable automatic packet-capture for Oversize IP Payload Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#over_ip_payload VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#over_ip_payload}
  */
  readonly overIpPayload?: number;
  /**
  * Enable automatic packet-capture for ICMP Ping of Death Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#pod VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#pod}
  */
  readonly pod?: number;
  /**
  * Enable automatic packet-capture for Runt IP Header Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#runt_ip_hdr VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#runt_ip_hdr}
  */
  readonly runtIpHdr?: number;
  /**
  * Enable automatic packet-capture for Runt TCP/UDP Header Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#runt_tcp_udp_hdr VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#runt_tcp_udp_hdr}
  */
  readonly runtTcpUdpHdr?: number;
  /**
  * Enable automatic packet-capture for TCP Bad Checksum Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#tcp_bad_csum VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#tcp_bad_csum}
  */
  readonly tcpBadCsum?: number;
  /**
  * Enable automatic packet-capture for TCP Bad IP Length Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#tcp_bad_iplen VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#tcp_bad_iplen}
  */
  readonly tcpBadIplen?: number;
  /**
  * Enable automatic packet-capture for TCP Fragmented Header Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#tcp_frg_hdr VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#tcp_frg_hdr}
  */
  readonly tcpFrgHdr?: number;
  /**
  * Enable automatic packet-capture for TCP Null Flags Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#tcp_null_frg VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#tcp_null_frg}
  */
  readonly tcpNullFrg?: number;
  /**
  * Enable automatic packet-capture for TCP Null Scan Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#tcp_null_scan VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#tcp_null_scan}
  */
  readonly tcpNullScan?: number;
  /**
  * Enable automatic packet-capture for TCP Option Error Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#tcp_opt_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#tcp_opt_err}
  */
  readonly tcpOptErr?: number;
  /**
  * Enable automatic packet-capture for TCP Short Header Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#tcp_sht_hdr VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#tcp_sht_hdr}
  */
  readonly tcpShtHdr?: number;
  /**
  * Enable automatic packet-capture for TCP Syn and Fin Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#tcp_syn_fin VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#tcp_syn_fin}
  */
  readonly tcpSynFin?: number;
  /**
  * Enable automatic packet-capture for TCP Syn Fragment Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#tcp_syn_frg VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#tcp_syn_frg}
  */
  readonly tcpSynFrg?: number;
  /**
  * Enable automatic packet-capture for TCP XMAS Flags Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#tcp_xmas VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#tcp_xmas}
  */
  readonly tcpXmas?: number;
  /**
  * Enable automatic packet-capture for TCP XMAS Scan Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#tcp_xmas_scan VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#tcp_xmas_scan}
  */
  readonly tcpXmasScan?: number;
  /**
  * Enable automatic packet-capture for UDP Bad Checksum Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#udp_bad_csum VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#udp_bad_csum}
  */
  readonly udpBadCsum?: number;
  /**
  * Enable automatic packet-capture for UDP Bad Length Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#udp_bad_len VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#udp_bad_len}
  */
  readonly udpBadLen?: number;
  /**
  * Enable automatic packet-capture for UDP Kerberos Fragment Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#udp_kerb_frg VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#udp_kerb_frg}
  */
  readonly udpKerbFrg?: number;
  /**
  * Enable automatic packet-capture for UDP Port Loopback Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#udp_port_lb VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#udp_port_lb}
  */
  readonly udpPortLb?: number;
  /**
  * Enable automatic packet-capture for UDP Short Header Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#udp_srt_hdr VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#udp_srt_hdr}
  */
  readonly udpSrtHdr?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#uuid}
  */
  readonly uuid?: string;
  /**
  * Enable automatic packet-capture for VXLAN Tunnel Error Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#vxlan_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#vxlan_err}
  */
  readonly vxlanErr?: number;
}

export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsIncAToTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsIncAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsIncA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bad_ip_flg: cdktf.numberToTerraform(struct!.badIpFlg),
    bad_ip_frg_offset: cdktf.numberToTerraform(struct!.badIpFrgOffset),
    bad_ip_hdrlen: cdktf.numberToTerraform(struct!.badIpHdrlen),
    bad_ip_payload_len: cdktf.numberToTerraform(struct!.badIpPayloadLen),
    bad_ip_ttl: cdktf.numberToTerraform(struct!.badIpTtl),
    bad_tcp_urg_offset: cdktf.numberToTerraform(struct!.badTcpUrgOffset),
    csum: cdktf.numberToTerraform(struct!.csum),
    emp_frg: cdktf.numberToTerraform(struct!.empFrg),
    emp_mic_frg: cdktf.numberToTerraform(struct!.empMicFrg),
    frg: cdktf.numberToTerraform(struct!.frg),
    gre_pptp_err: cdktf.numberToTerraform(struct!.grePptpErr),
    ipip_tnl_err: cdktf.numberToTerraform(struct!.ipipTnlErr),
    ipip_tnl_msmtch: cdktf.numberToTerraform(struct!.ipipTnlMsmtch),
    ipv6_eh_ah: cdktf.numberToTerraform(struct!.ipv6EhAh),
    ipv6_eh_dest: cdktf.numberToTerraform(struct!.ipv6EhDest),
    ipv6_eh_esp: cdktf.numberToTerraform(struct!.ipv6EhEsp),
    ipv6_eh_frag: cdktf.numberToTerraform(struct!.ipv6EhFrag),
    ipv6_eh_hbh: cdktf.numberToTerraform(struct!.ipv6EhHbh),
    ipv6_eh_malformed: cdktf.numberToTerraform(struct!.ipv6EhMalformed),
    ipv6_eh_mobility: cdktf.numberToTerraform(struct!.ipv6EhMobility),
    ipv6_eh_none: cdktf.numberToTerraform(struct!.ipv6EhNone),
    ipv6_eh_other: cdktf.numberToTerraform(struct!.ipv6EhOther),
    ipv6_eh_routing: cdktf.numberToTerraform(struct!.ipv6EhRouting),
    land: cdktf.numberToTerraform(struct!.land),
    no_ip_payload: cdktf.numberToTerraform(struct!.noIpPayload),
    nvgre_err: cdktf.numberToTerraform(struct!.nvgreErr),
    opt: cdktf.numberToTerraform(struct!.opt),
    over_ip_payload: cdktf.numberToTerraform(struct!.overIpPayload),
    pod: cdktf.numberToTerraform(struct!.pod),
    runt_ip_hdr: cdktf.numberToTerraform(struct!.runtIpHdr),
    runt_tcp_udp_hdr: cdktf.numberToTerraform(struct!.runtTcpUdpHdr),
    tcp_bad_csum: cdktf.numberToTerraform(struct!.tcpBadCsum),
    tcp_bad_iplen: cdktf.numberToTerraform(struct!.tcpBadIplen),
    tcp_frg_hdr: cdktf.numberToTerraform(struct!.tcpFrgHdr),
    tcp_null_frg: cdktf.numberToTerraform(struct!.tcpNullFrg),
    tcp_null_scan: cdktf.numberToTerraform(struct!.tcpNullScan),
    tcp_opt_err: cdktf.numberToTerraform(struct!.tcpOptErr),
    tcp_sht_hdr: cdktf.numberToTerraform(struct!.tcpShtHdr),
    tcp_syn_fin: cdktf.numberToTerraform(struct!.tcpSynFin),
    tcp_syn_frg: cdktf.numberToTerraform(struct!.tcpSynFrg),
    tcp_xmas: cdktf.numberToTerraform(struct!.tcpXmas),
    tcp_xmas_scan: cdktf.numberToTerraform(struct!.tcpXmasScan),
    udp_bad_csum: cdktf.numberToTerraform(struct!.udpBadCsum),
    udp_bad_len: cdktf.numberToTerraform(struct!.udpBadLen),
    udp_kerb_frg: cdktf.numberToTerraform(struct!.udpKerbFrg),
    udp_port_lb: cdktf.numberToTerraform(struct!.udpPortLb),
    udp_srt_hdr: cdktf.numberToTerraform(struct!.udpSrtHdr),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    vxlan_err: cdktf.numberToTerraform(struct!.vxlanErr),
  }
}


export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsIncAToHclTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsIncAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsIncA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bad_ip_flg: {
      value: cdktf.numberToHclTerraform(struct!.badIpFlg),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_ip_frg_offset: {
      value: cdktf.numberToHclTerraform(struct!.badIpFrgOffset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_ip_hdrlen: {
      value: cdktf.numberToHclTerraform(struct!.badIpHdrlen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_ip_payload_len: {
      value: cdktf.numberToHclTerraform(struct!.badIpPayloadLen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_ip_ttl: {
      value: cdktf.numberToHclTerraform(struct!.badIpTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_tcp_urg_offset: {
      value: cdktf.numberToHclTerraform(struct!.badTcpUrgOffset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    csum: {
      value: cdktf.numberToHclTerraform(struct!.csum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    emp_frg: {
      value: cdktf.numberToHclTerraform(struct!.empFrg),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    emp_mic_frg: {
      value: cdktf.numberToHclTerraform(struct!.empMicFrg),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    frg: {
      value: cdktf.numberToHclTerraform(struct!.frg),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gre_pptp_err: {
      value: cdktf.numberToHclTerraform(struct!.grePptpErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipip_tnl_err: {
      value: cdktf.numberToHclTerraform(struct!.ipipTnlErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipip_tnl_msmtch: {
      value: cdktf.numberToHclTerraform(struct!.ipipTnlMsmtch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_eh_ah: {
      value: cdktf.numberToHclTerraform(struct!.ipv6EhAh),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_eh_dest: {
      value: cdktf.numberToHclTerraform(struct!.ipv6EhDest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_eh_esp: {
      value: cdktf.numberToHclTerraform(struct!.ipv6EhEsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_eh_frag: {
      value: cdktf.numberToHclTerraform(struct!.ipv6EhFrag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_eh_hbh: {
      value: cdktf.numberToHclTerraform(struct!.ipv6EhHbh),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_eh_malformed: {
      value: cdktf.numberToHclTerraform(struct!.ipv6EhMalformed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_eh_mobility: {
      value: cdktf.numberToHclTerraform(struct!.ipv6EhMobility),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_eh_none: {
      value: cdktf.numberToHclTerraform(struct!.ipv6EhNone),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_eh_other: {
      value: cdktf.numberToHclTerraform(struct!.ipv6EhOther),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_eh_routing: {
      value: cdktf.numberToHclTerraform(struct!.ipv6EhRouting),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    land: {
      value: cdktf.numberToHclTerraform(struct!.land),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_ip_payload: {
      value: cdktf.numberToHclTerraform(struct!.noIpPayload),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nvgre_err: {
      value: cdktf.numberToHclTerraform(struct!.nvgreErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    opt: {
      value: cdktf.numberToHclTerraform(struct!.opt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    over_ip_payload: {
      value: cdktf.numberToHclTerraform(struct!.overIpPayload),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pod: {
      value: cdktf.numberToHclTerraform(struct!.pod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    runt_ip_hdr: {
      value: cdktf.numberToHclTerraform(struct!.runtIpHdr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    runt_tcp_udp_hdr: {
      value: cdktf.numberToHclTerraform(struct!.runtTcpUdpHdr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_bad_csum: {
      value: cdktf.numberToHclTerraform(struct!.tcpBadCsum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_bad_iplen: {
      value: cdktf.numberToHclTerraform(struct!.tcpBadIplen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_frg_hdr: {
      value: cdktf.numberToHclTerraform(struct!.tcpFrgHdr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_null_frg: {
      value: cdktf.numberToHclTerraform(struct!.tcpNullFrg),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_null_scan: {
      value: cdktf.numberToHclTerraform(struct!.tcpNullScan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_opt_err: {
      value: cdktf.numberToHclTerraform(struct!.tcpOptErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_sht_hdr: {
      value: cdktf.numberToHclTerraform(struct!.tcpShtHdr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_syn_fin: {
      value: cdktf.numberToHclTerraform(struct!.tcpSynFin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_syn_frg: {
      value: cdktf.numberToHclTerraform(struct!.tcpSynFrg),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_xmas: {
      value: cdktf.numberToHclTerraform(struct!.tcpXmas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_xmas_scan: {
      value: cdktf.numberToHclTerraform(struct!.tcpXmasScan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_bad_csum: {
      value: cdktf.numberToHclTerraform(struct!.udpBadCsum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_bad_len: {
      value: cdktf.numberToHclTerraform(struct!.udpBadLen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_kerb_frg: {
      value: cdktf.numberToHclTerraform(struct!.udpKerbFrg),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_port_lb: {
      value: cdktf.numberToHclTerraform(struct!.udpPortLb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_srt_hdr: {
      value: cdktf.numberToHclTerraform(struct!.udpSrtHdr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vxlan_err: {
      value: cdktf.numberToHclTerraform(struct!.vxlanErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsIncAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsIncA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._badIpFlg !== undefined) {
      hasAnyValues = true;
      internalValueResult.badIpFlg = this._badIpFlg;
    }
    if (this._badIpFrgOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.badIpFrgOffset = this._badIpFrgOffset;
    }
    if (this._badIpHdrlen !== undefined) {
      hasAnyValues = true;
      internalValueResult.badIpHdrlen = this._badIpHdrlen;
    }
    if (this._badIpPayloadLen !== undefined) {
      hasAnyValues = true;
      internalValueResult.badIpPayloadLen = this._badIpPayloadLen;
    }
    if (this._badIpTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.badIpTtl = this._badIpTtl;
    }
    if (this._badTcpUrgOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.badTcpUrgOffset = this._badTcpUrgOffset;
    }
    if (this._csum !== undefined) {
      hasAnyValues = true;
      internalValueResult.csum = this._csum;
    }
    if (this._empFrg !== undefined) {
      hasAnyValues = true;
      internalValueResult.empFrg = this._empFrg;
    }
    if (this._empMicFrg !== undefined) {
      hasAnyValues = true;
      internalValueResult.empMicFrg = this._empMicFrg;
    }
    if (this._frg !== undefined) {
      hasAnyValues = true;
      internalValueResult.frg = this._frg;
    }
    if (this._grePptpErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.grePptpErr = this._grePptpErr;
    }
    if (this._ipipTnlErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipipTnlErr = this._ipipTnlErr;
    }
    if (this._ipipTnlMsmtch !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipipTnlMsmtch = this._ipipTnlMsmtch;
    }
    if (this._ipv6EhAh !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6EhAh = this._ipv6EhAh;
    }
    if (this._ipv6EhDest !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6EhDest = this._ipv6EhDest;
    }
    if (this._ipv6EhEsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6EhEsp = this._ipv6EhEsp;
    }
    if (this._ipv6EhFrag !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6EhFrag = this._ipv6EhFrag;
    }
    if (this._ipv6EhHbh !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6EhHbh = this._ipv6EhHbh;
    }
    if (this._ipv6EhMalformed !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6EhMalformed = this._ipv6EhMalformed;
    }
    if (this._ipv6EhMobility !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6EhMobility = this._ipv6EhMobility;
    }
    if (this._ipv6EhNone !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6EhNone = this._ipv6EhNone;
    }
    if (this._ipv6EhOther !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6EhOther = this._ipv6EhOther;
    }
    if (this._ipv6EhRouting !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6EhRouting = this._ipv6EhRouting;
    }
    if (this._land !== undefined) {
      hasAnyValues = true;
      internalValueResult.land = this._land;
    }
    if (this._noIpPayload !== undefined) {
      hasAnyValues = true;
      internalValueResult.noIpPayload = this._noIpPayload;
    }
    if (this._nvgreErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.nvgreErr = this._nvgreErr;
    }
    if (this._opt !== undefined) {
      hasAnyValues = true;
      internalValueResult.opt = this._opt;
    }
    if (this._overIpPayload !== undefined) {
      hasAnyValues = true;
      internalValueResult.overIpPayload = this._overIpPayload;
    }
    if (this._pod !== undefined) {
      hasAnyValues = true;
      internalValueResult.pod = this._pod;
    }
    if (this._runtIpHdr !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtIpHdr = this._runtIpHdr;
    }
    if (this._runtTcpUdpHdr !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtTcpUdpHdr = this._runtTcpUdpHdr;
    }
    if (this._tcpBadCsum !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpBadCsum = this._tcpBadCsum;
    }
    if (this._tcpBadIplen !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpBadIplen = this._tcpBadIplen;
    }
    if (this._tcpFrgHdr !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFrgHdr = this._tcpFrgHdr;
    }
    if (this._tcpNullFrg !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpNullFrg = this._tcpNullFrg;
    }
    if (this._tcpNullScan !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpNullScan = this._tcpNullScan;
    }
    if (this._tcpOptErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpOptErr = this._tcpOptErr;
    }
    if (this._tcpShtHdr !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpShtHdr = this._tcpShtHdr;
    }
    if (this._tcpSynFin !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSynFin = this._tcpSynFin;
    }
    if (this._tcpSynFrg !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSynFrg = this._tcpSynFrg;
    }
    if (this._tcpXmas !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpXmas = this._tcpXmas;
    }
    if (this._tcpXmasScan !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpXmasScan = this._tcpXmasScan;
    }
    if (this._udpBadCsum !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpBadCsum = this._udpBadCsum;
    }
    if (this._udpBadLen !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpBadLen = this._udpBadLen;
    }
    if (this._udpKerbFrg !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpKerbFrg = this._udpKerbFrg;
    }
    if (this._udpPortLb !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpPortLb = this._udpPortLb;
    }
    if (this._udpSrtHdr !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpSrtHdr = this._udpSrtHdr;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._vxlanErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.vxlanErr = this._vxlanErr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsIncA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._badIpFlg = undefined;
      this._badIpFrgOffset = undefined;
      this._badIpHdrlen = undefined;
      this._badIpPayloadLen = undefined;
      this._badIpTtl = undefined;
      this._badTcpUrgOffset = undefined;
      this._csum = undefined;
      this._empFrg = undefined;
      this._empMicFrg = undefined;
      this._frg = undefined;
      this._grePptpErr = undefined;
      this._ipipTnlErr = undefined;
      this._ipipTnlMsmtch = undefined;
      this._ipv6EhAh = undefined;
      this._ipv6EhDest = undefined;
      this._ipv6EhEsp = undefined;
      this._ipv6EhFrag = undefined;
      this._ipv6EhHbh = undefined;
      this._ipv6EhMalformed = undefined;
      this._ipv6EhMobility = undefined;
      this._ipv6EhNone = undefined;
      this._ipv6EhOther = undefined;
      this._ipv6EhRouting = undefined;
      this._land = undefined;
      this._noIpPayload = undefined;
      this._nvgreErr = undefined;
      this._opt = undefined;
      this._overIpPayload = undefined;
      this._pod = undefined;
      this._runtIpHdr = undefined;
      this._runtTcpUdpHdr = undefined;
      this._tcpBadCsum = undefined;
      this._tcpBadIplen = undefined;
      this._tcpFrgHdr = undefined;
      this._tcpNullFrg = undefined;
      this._tcpNullScan = undefined;
      this._tcpOptErr = undefined;
      this._tcpShtHdr = undefined;
      this._tcpSynFin = undefined;
      this._tcpSynFrg = undefined;
      this._tcpXmas = undefined;
      this._tcpXmasScan = undefined;
      this._udpBadCsum = undefined;
      this._udpBadLen = undefined;
      this._udpKerbFrg = undefined;
      this._udpPortLb = undefined;
      this._udpSrtHdr = undefined;
      this._uuid = undefined;
      this._vxlanErr = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._badIpFlg = value.badIpFlg;
      this._badIpFrgOffset = value.badIpFrgOffset;
      this._badIpHdrlen = value.badIpHdrlen;
      this._badIpPayloadLen = value.badIpPayloadLen;
      this._badIpTtl = value.badIpTtl;
      this._badTcpUrgOffset = value.badTcpUrgOffset;
      this._csum = value.csum;
      this._empFrg = value.empFrg;
      this._empMicFrg = value.empMicFrg;
      this._frg = value.frg;
      this._grePptpErr = value.grePptpErr;
      this._ipipTnlErr = value.ipipTnlErr;
      this._ipipTnlMsmtch = value.ipipTnlMsmtch;
      this._ipv6EhAh = value.ipv6EhAh;
      this._ipv6EhDest = value.ipv6EhDest;
      this._ipv6EhEsp = value.ipv6EhEsp;
      this._ipv6EhFrag = value.ipv6EhFrag;
      this._ipv6EhHbh = value.ipv6EhHbh;
      this._ipv6EhMalformed = value.ipv6EhMalformed;
      this._ipv6EhMobility = value.ipv6EhMobility;
      this._ipv6EhNone = value.ipv6EhNone;
      this._ipv6EhOther = value.ipv6EhOther;
      this._ipv6EhRouting = value.ipv6EhRouting;
      this._land = value.land;
      this._noIpPayload = value.noIpPayload;
      this._nvgreErr = value.nvgreErr;
      this._opt = value.opt;
      this._overIpPayload = value.overIpPayload;
      this._pod = value.pod;
      this._runtIpHdr = value.runtIpHdr;
      this._runtTcpUdpHdr = value.runtTcpUdpHdr;
      this._tcpBadCsum = value.tcpBadCsum;
      this._tcpBadIplen = value.tcpBadIplen;
      this._tcpFrgHdr = value.tcpFrgHdr;
      this._tcpNullFrg = value.tcpNullFrg;
      this._tcpNullScan = value.tcpNullScan;
      this._tcpOptErr = value.tcpOptErr;
      this._tcpShtHdr = value.tcpShtHdr;
      this._tcpSynFin = value.tcpSynFin;
      this._tcpSynFrg = value.tcpSynFrg;
      this._tcpXmas = value.tcpXmas;
      this._tcpXmasScan = value.tcpXmasScan;
      this._udpBadCsum = value.udpBadCsum;
      this._udpBadLen = value.udpBadLen;
      this._udpKerbFrg = value.udpKerbFrg;
      this._udpPortLb = value.udpPortLb;
      this._udpSrtHdr = value.udpSrtHdr;
      this._uuid = value.uuid;
      this._vxlanErr = value.vxlanErr;
    }
  }

  // bad_ip_flg - computed: false, optional: true, required: false
  private _badIpFlg?: number; 
  public get badIpFlg() {
    return this.getNumberAttribute('bad_ip_flg');
  }
  public set badIpFlg(value: number) {
    this._badIpFlg = value;
  }
  public resetBadIpFlg() {
    this._badIpFlg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badIpFlgInput() {
    return this._badIpFlg;
  }

  // bad_ip_frg_offset - computed: false, optional: true, required: false
  private _badIpFrgOffset?: number; 
  public get badIpFrgOffset() {
    return this.getNumberAttribute('bad_ip_frg_offset');
  }
  public set badIpFrgOffset(value: number) {
    this._badIpFrgOffset = value;
  }
  public resetBadIpFrgOffset() {
    this._badIpFrgOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badIpFrgOffsetInput() {
    return this._badIpFrgOffset;
  }

  // bad_ip_hdrlen - computed: false, optional: true, required: false
  private _badIpHdrlen?: number; 
  public get badIpHdrlen() {
    return this.getNumberAttribute('bad_ip_hdrlen');
  }
  public set badIpHdrlen(value: number) {
    this._badIpHdrlen = value;
  }
  public resetBadIpHdrlen() {
    this._badIpHdrlen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badIpHdrlenInput() {
    return this._badIpHdrlen;
  }

  // bad_ip_payload_len - computed: false, optional: true, required: false
  private _badIpPayloadLen?: number; 
  public get badIpPayloadLen() {
    return this.getNumberAttribute('bad_ip_payload_len');
  }
  public set badIpPayloadLen(value: number) {
    this._badIpPayloadLen = value;
  }
  public resetBadIpPayloadLen() {
    this._badIpPayloadLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badIpPayloadLenInput() {
    return this._badIpPayloadLen;
  }

  // bad_ip_ttl - computed: false, optional: true, required: false
  private _badIpTtl?: number; 
  public get badIpTtl() {
    return this.getNumberAttribute('bad_ip_ttl');
  }
  public set badIpTtl(value: number) {
    this._badIpTtl = value;
  }
  public resetBadIpTtl() {
    this._badIpTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badIpTtlInput() {
    return this._badIpTtl;
  }

  // bad_tcp_urg_offset - computed: false, optional: true, required: false
  private _badTcpUrgOffset?: number; 
  public get badTcpUrgOffset() {
    return this.getNumberAttribute('bad_tcp_urg_offset');
  }
  public set badTcpUrgOffset(value: number) {
    this._badTcpUrgOffset = value;
  }
  public resetBadTcpUrgOffset() {
    this._badTcpUrgOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badTcpUrgOffsetInput() {
    return this._badTcpUrgOffset;
  }

  // csum - computed: false, optional: true, required: false
  private _csum?: number; 
  public get csum() {
    return this.getNumberAttribute('csum');
  }
  public set csum(value: number) {
    this._csum = value;
  }
  public resetCsum() {
    this._csum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csumInput() {
    return this._csum;
  }

  // emp_frg - computed: false, optional: true, required: false
  private _empFrg?: number; 
  public get empFrg() {
    return this.getNumberAttribute('emp_frg');
  }
  public set empFrg(value: number) {
    this._empFrg = value;
  }
  public resetEmpFrg() {
    this._empFrg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get empFrgInput() {
    return this._empFrg;
  }

  // emp_mic_frg - computed: false, optional: true, required: false
  private _empMicFrg?: number; 
  public get empMicFrg() {
    return this.getNumberAttribute('emp_mic_frg');
  }
  public set empMicFrg(value: number) {
    this._empMicFrg = value;
  }
  public resetEmpMicFrg() {
    this._empMicFrg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get empMicFrgInput() {
    return this._empMicFrg;
  }

  // frg - computed: false, optional: true, required: false
  private _frg?: number; 
  public get frg() {
    return this.getNumberAttribute('frg');
  }
  public set frg(value: number) {
    this._frg = value;
  }
  public resetFrg() {
    this._frg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frgInput() {
    return this._frg;
  }

  // gre_pptp_err - computed: false, optional: true, required: false
  private _grePptpErr?: number; 
  public get grePptpErr() {
    return this.getNumberAttribute('gre_pptp_err');
  }
  public set grePptpErr(value: number) {
    this._grePptpErr = value;
  }
  public resetGrePptpErr() {
    this._grePptpErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grePptpErrInput() {
    return this._grePptpErr;
  }

  // ipip_tnl_err - computed: false, optional: true, required: false
  private _ipipTnlErr?: number; 
  public get ipipTnlErr() {
    return this.getNumberAttribute('ipip_tnl_err');
  }
  public set ipipTnlErr(value: number) {
    this._ipipTnlErr = value;
  }
  public resetIpipTnlErr() {
    this._ipipTnlErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipipTnlErrInput() {
    return this._ipipTnlErr;
  }

  // ipip_tnl_msmtch - computed: false, optional: true, required: false
  private _ipipTnlMsmtch?: number; 
  public get ipipTnlMsmtch() {
    return this.getNumberAttribute('ipip_tnl_msmtch');
  }
  public set ipipTnlMsmtch(value: number) {
    this._ipipTnlMsmtch = value;
  }
  public resetIpipTnlMsmtch() {
    this._ipipTnlMsmtch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipipTnlMsmtchInput() {
    return this._ipipTnlMsmtch;
  }

  // ipv6_eh_ah - computed: false, optional: true, required: false
  private _ipv6EhAh?: number; 
  public get ipv6EhAh() {
    return this.getNumberAttribute('ipv6_eh_ah');
  }
  public set ipv6EhAh(value: number) {
    this._ipv6EhAh = value;
  }
  public resetIpv6EhAh() {
    this._ipv6EhAh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6EhAhInput() {
    return this._ipv6EhAh;
  }

  // ipv6_eh_dest - computed: false, optional: true, required: false
  private _ipv6EhDest?: number; 
  public get ipv6EhDest() {
    return this.getNumberAttribute('ipv6_eh_dest');
  }
  public set ipv6EhDest(value: number) {
    this._ipv6EhDest = value;
  }
  public resetIpv6EhDest() {
    this._ipv6EhDest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6EhDestInput() {
    return this._ipv6EhDest;
  }

  // ipv6_eh_esp - computed: false, optional: true, required: false
  private _ipv6EhEsp?: number; 
  public get ipv6EhEsp() {
    return this.getNumberAttribute('ipv6_eh_esp');
  }
  public set ipv6EhEsp(value: number) {
    this._ipv6EhEsp = value;
  }
  public resetIpv6EhEsp() {
    this._ipv6EhEsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6EhEspInput() {
    return this._ipv6EhEsp;
  }

  // ipv6_eh_frag - computed: false, optional: true, required: false
  private _ipv6EhFrag?: number; 
  public get ipv6EhFrag() {
    return this.getNumberAttribute('ipv6_eh_frag');
  }
  public set ipv6EhFrag(value: number) {
    this._ipv6EhFrag = value;
  }
  public resetIpv6EhFrag() {
    this._ipv6EhFrag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6EhFragInput() {
    return this._ipv6EhFrag;
  }

  // ipv6_eh_hbh - computed: false, optional: true, required: false
  private _ipv6EhHbh?: number; 
  public get ipv6EhHbh() {
    return this.getNumberAttribute('ipv6_eh_hbh');
  }
  public set ipv6EhHbh(value: number) {
    this._ipv6EhHbh = value;
  }
  public resetIpv6EhHbh() {
    this._ipv6EhHbh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6EhHbhInput() {
    return this._ipv6EhHbh;
  }

  // ipv6_eh_malformed - computed: false, optional: true, required: false
  private _ipv6EhMalformed?: number; 
  public get ipv6EhMalformed() {
    return this.getNumberAttribute('ipv6_eh_malformed');
  }
  public set ipv6EhMalformed(value: number) {
    this._ipv6EhMalformed = value;
  }
  public resetIpv6EhMalformed() {
    this._ipv6EhMalformed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6EhMalformedInput() {
    return this._ipv6EhMalformed;
  }

  // ipv6_eh_mobility - computed: false, optional: true, required: false
  private _ipv6EhMobility?: number; 
  public get ipv6EhMobility() {
    return this.getNumberAttribute('ipv6_eh_mobility');
  }
  public set ipv6EhMobility(value: number) {
    this._ipv6EhMobility = value;
  }
  public resetIpv6EhMobility() {
    this._ipv6EhMobility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6EhMobilityInput() {
    return this._ipv6EhMobility;
  }

  // ipv6_eh_none - computed: false, optional: true, required: false
  private _ipv6EhNone?: number; 
  public get ipv6EhNone() {
    return this.getNumberAttribute('ipv6_eh_none');
  }
  public set ipv6EhNone(value: number) {
    this._ipv6EhNone = value;
  }
  public resetIpv6EhNone() {
    this._ipv6EhNone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6EhNoneInput() {
    return this._ipv6EhNone;
  }

  // ipv6_eh_other - computed: false, optional: true, required: false
  private _ipv6EhOther?: number; 
  public get ipv6EhOther() {
    return this.getNumberAttribute('ipv6_eh_other');
  }
  public set ipv6EhOther(value: number) {
    this._ipv6EhOther = value;
  }
  public resetIpv6EhOther() {
    this._ipv6EhOther = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6EhOtherInput() {
    return this._ipv6EhOther;
  }

  // ipv6_eh_routing - computed: false, optional: true, required: false
  private _ipv6EhRouting?: number; 
  public get ipv6EhRouting() {
    return this.getNumberAttribute('ipv6_eh_routing');
  }
  public set ipv6EhRouting(value: number) {
    this._ipv6EhRouting = value;
  }
  public resetIpv6EhRouting() {
    this._ipv6EhRouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6EhRoutingInput() {
    return this._ipv6EhRouting;
  }

  // land - computed: false, optional: true, required: false
  private _land?: number; 
  public get land() {
    return this.getNumberAttribute('land');
  }
  public set land(value: number) {
    this._land = value;
  }
  public resetLand() {
    this._land = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get landInput() {
    return this._land;
  }

  // no_ip_payload - computed: false, optional: true, required: false
  private _noIpPayload?: number; 
  public get noIpPayload() {
    return this.getNumberAttribute('no_ip_payload');
  }
  public set noIpPayload(value: number) {
    this._noIpPayload = value;
  }
  public resetNoIpPayload() {
    this._noIpPayload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noIpPayloadInput() {
    return this._noIpPayload;
  }

  // nvgre_err - computed: false, optional: true, required: false
  private _nvgreErr?: number; 
  public get nvgreErr() {
    return this.getNumberAttribute('nvgre_err');
  }
  public set nvgreErr(value: number) {
    this._nvgreErr = value;
  }
  public resetNvgreErr() {
    this._nvgreErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nvgreErrInput() {
    return this._nvgreErr;
  }

  // opt - computed: false, optional: true, required: false
  private _opt?: number; 
  public get opt() {
    return this.getNumberAttribute('opt');
  }
  public set opt(value: number) {
    this._opt = value;
  }
  public resetOpt() {
    this._opt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optInput() {
    return this._opt;
  }

  // over_ip_payload - computed: false, optional: true, required: false
  private _overIpPayload?: number; 
  public get overIpPayload() {
    return this.getNumberAttribute('over_ip_payload');
  }
  public set overIpPayload(value: number) {
    this._overIpPayload = value;
  }
  public resetOverIpPayload() {
    this._overIpPayload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overIpPayloadInput() {
    return this._overIpPayload;
  }

  // pod - computed: false, optional: true, required: false
  private _pod?: number; 
  public get pod() {
    return this.getNumberAttribute('pod');
  }
  public set pod(value: number) {
    this._pod = value;
  }
  public resetPod() {
    this._pod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podInput() {
    return this._pod;
  }

  // runt_ip_hdr - computed: false, optional: true, required: false
  private _runtIpHdr?: number; 
  public get runtIpHdr() {
    return this.getNumberAttribute('runt_ip_hdr');
  }
  public set runtIpHdr(value: number) {
    this._runtIpHdr = value;
  }
  public resetRuntIpHdr() {
    this._runtIpHdr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtIpHdrInput() {
    return this._runtIpHdr;
  }

  // runt_tcp_udp_hdr - computed: false, optional: true, required: false
  private _runtTcpUdpHdr?: number; 
  public get runtTcpUdpHdr() {
    return this.getNumberAttribute('runt_tcp_udp_hdr');
  }
  public set runtTcpUdpHdr(value: number) {
    this._runtTcpUdpHdr = value;
  }
  public resetRuntTcpUdpHdr() {
    this._runtTcpUdpHdr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtTcpUdpHdrInput() {
    return this._runtTcpUdpHdr;
  }

  // tcp_bad_csum - computed: false, optional: true, required: false
  private _tcpBadCsum?: number; 
  public get tcpBadCsum() {
    return this.getNumberAttribute('tcp_bad_csum');
  }
  public set tcpBadCsum(value: number) {
    this._tcpBadCsum = value;
  }
  public resetTcpBadCsum() {
    this._tcpBadCsum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpBadCsumInput() {
    return this._tcpBadCsum;
  }

  // tcp_bad_iplen - computed: false, optional: true, required: false
  private _tcpBadIplen?: number; 
  public get tcpBadIplen() {
    return this.getNumberAttribute('tcp_bad_iplen');
  }
  public set tcpBadIplen(value: number) {
    this._tcpBadIplen = value;
  }
  public resetTcpBadIplen() {
    this._tcpBadIplen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpBadIplenInput() {
    return this._tcpBadIplen;
  }

  // tcp_frg_hdr - computed: false, optional: true, required: false
  private _tcpFrgHdr?: number; 
  public get tcpFrgHdr() {
    return this.getNumberAttribute('tcp_frg_hdr');
  }
  public set tcpFrgHdr(value: number) {
    this._tcpFrgHdr = value;
  }
  public resetTcpFrgHdr() {
    this._tcpFrgHdr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFrgHdrInput() {
    return this._tcpFrgHdr;
  }

  // tcp_null_frg - computed: false, optional: true, required: false
  private _tcpNullFrg?: number; 
  public get tcpNullFrg() {
    return this.getNumberAttribute('tcp_null_frg');
  }
  public set tcpNullFrg(value: number) {
    this._tcpNullFrg = value;
  }
  public resetTcpNullFrg() {
    this._tcpNullFrg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpNullFrgInput() {
    return this._tcpNullFrg;
  }

  // tcp_null_scan - computed: false, optional: true, required: false
  private _tcpNullScan?: number; 
  public get tcpNullScan() {
    return this.getNumberAttribute('tcp_null_scan');
  }
  public set tcpNullScan(value: number) {
    this._tcpNullScan = value;
  }
  public resetTcpNullScan() {
    this._tcpNullScan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpNullScanInput() {
    return this._tcpNullScan;
  }

  // tcp_opt_err - computed: false, optional: true, required: false
  private _tcpOptErr?: number; 
  public get tcpOptErr() {
    return this.getNumberAttribute('tcp_opt_err');
  }
  public set tcpOptErr(value: number) {
    this._tcpOptErr = value;
  }
  public resetTcpOptErr() {
    this._tcpOptErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpOptErrInput() {
    return this._tcpOptErr;
  }

  // tcp_sht_hdr - computed: false, optional: true, required: false
  private _tcpShtHdr?: number; 
  public get tcpShtHdr() {
    return this.getNumberAttribute('tcp_sht_hdr');
  }
  public set tcpShtHdr(value: number) {
    this._tcpShtHdr = value;
  }
  public resetTcpShtHdr() {
    this._tcpShtHdr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpShtHdrInput() {
    return this._tcpShtHdr;
  }

  // tcp_syn_fin - computed: false, optional: true, required: false
  private _tcpSynFin?: number; 
  public get tcpSynFin() {
    return this.getNumberAttribute('tcp_syn_fin');
  }
  public set tcpSynFin(value: number) {
    this._tcpSynFin = value;
  }
  public resetTcpSynFin() {
    this._tcpSynFin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSynFinInput() {
    return this._tcpSynFin;
  }

  // tcp_syn_frg - computed: false, optional: true, required: false
  private _tcpSynFrg?: number; 
  public get tcpSynFrg() {
    return this.getNumberAttribute('tcp_syn_frg');
  }
  public set tcpSynFrg(value: number) {
    this._tcpSynFrg = value;
  }
  public resetTcpSynFrg() {
    this._tcpSynFrg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSynFrgInput() {
    return this._tcpSynFrg;
  }

  // tcp_xmas - computed: false, optional: true, required: false
  private _tcpXmas?: number; 
  public get tcpXmas() {
    return this.getNumberAttribute('tcp_xmas');
  }
  public set tcpXmas(value: number) {
    this._tcpXmas = value;
  }
  public resetTcpXmas() {
    this._tcpXmas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpXmasInput() {
    return this._tcpXmas;
  }

  // tcp_xmas_scan - computed: false, optional: true, required: false
  private _tcpXmasScan?: number; 
  public get tcpXmasScan() {
    return this.getNumberAttribute('tcp_xmas_scan');
  }
  public set tcpXmasScan(value: number) {
    this._tcpXmasScan = value;
  }
  public resetTcpXmasScan() {
    this._tcpXmasScan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpXmasScanInput() {
    return this._tcpXmasScan;
  }

  // udp_bad_csum - computed: false, optional: true, required: false
  private _udpBadCsum?: number; 
  public get udpBadCsum() {
    return this.getNumberAttribute('udp_bad_csum');
  }
  public set udpBadCsum(value: number) {
    this._udpBadCsum = value;
  }
  public resetUdpBadCsum() {
    this._udpBadCsum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpBadCsumInput() {
    return this._udpBadCsum;
  }

  // udp_bad_len - computed: false, optional: true, required: false
  private _udpBadLen?: number; 
  public get udpBadLen() {
    return this.getNumberAttribute('udp_bad_len');
  }
  public set udpBadLen(value: number) {
    this._udpBadLen = value;
  }
  public resetUdpBadLen() {
    this._udpBadLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpBadLenInput() {
    return this._udpBadLen;
  }

  // udp_kerb_frg - computed: false, optional: true, required: false
  private _udpKerbFrg?: number; 
  public get udpKerbFrg() {
    return this.getNumberAttribute('udp_kerb_frg');
  }
  public set udpKerbFrg(value: number) {
    this._udpKerbFrg = value;
  }
  public resetUdpKerbFrg() {
    this._udpKerbFrg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpKerbFrgInput() {
    return this._udpKerbFrg;
  }

  // udp_port_lb - computed: false, optional: true, required: false
  private _udpPortLb?: number; 
  public get udpPortLb() {
    return this.getNumberAttribute('udp_port_lb');
  }
  public set udpPortLb(value: number) {
    this._udpPortLb = value;
  }
  public resetUdpPortLb() {
    this._udpPortLb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPortLbInput() {
    return this._udpPortLb;
  }

  // udp_srt_hdr - computed: false, optional: true, required: false
  private _udpSrtHdr?: number; 
  public get udpSrtHdr() {
    return this.getNumberAttribute('udp_srt_hdr');
  }
  public set udpSrtHdr(value: number) {
    this._udpSrtHdr = value;
  }
  public resetUdpSrtHdr() {
    this._udpSrtHdr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpSrtHdrInput() {
    return this._udpSrtHdr;
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

  // vxlan_err - computed: false, optional: true, required: false
  private _vxlanErr?: number; 
  public get vxlanErr() {
    return this.getNumberAttribute('vxlan_err');
  }
  public set vxlanErr(value: number) {
    this._vxlanErr = value;
  }
  public resetVxlanErr() {
    this._vxlanErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vxlanErrInput() {
    return this._vxlanErr;
  }
}
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsRateA {
  /**
  * Enable automatic packet-capture for Bad IP Flags Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#bad_ip_flg VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#bad_ip_flg}
  */
  readonly badIpFlg?: number;
  /**
  * Enable automatic packet-capture for Bad IP Fragment Offset Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#bad_ip_frg_offset VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#bad_ip_frg_offset}
  */
  readonly badIpFrgOffset?: number;
  /**
  * Enable automatic packet-capture for Bad IP Header Len Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#bad_ip_hdrlen VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#bad_ip_hdrlen}
  */
  readonly badIpHdrlen?: number;
  /**
  * Enable automatic packet-capture for Bad IP Payload Len Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#bad_ip_payload_len VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#bad_ip_payload_len}
  */
  readonly badIpPayloadLen?: number;
  /**
  * Enable automatic packet-capture for Bad IP TTL Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#bad_ip_ttl VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#bad_ip_ttl}
  */
  readonly badIpTtl?: number;
  /**
  * Enable automatic packet-capture for TCP Bad Urgent Offset Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#bad_tcp_urg_offset VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#bad_tcp_urg_offset}
  */
  readonly badTcpUrgOffset?: number;
  /**
  * Enable automatic packet-capture for Bad IP Checksum Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#csum VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#csum}
  */
  readonly csum?: number;
  /**
  * Time in seconds to look for the anomaly, default is 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#duration VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#duration}
  */
  readonly duration?: number;
  /**
  * Enable automatic packet-capture for Empty Fragment Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#emp_frg VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#emp_frg}
  */
  readonly empFrg?: number;
  /**
  * Enable automatic packet-capture for Micro Fragment Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#emp_mic_frg VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#emp_mic_frg}
  */
  readonly empMicFrg?: number;
  /**
  * Enable automatic packet-capture for IPv4 Fragment Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#frg VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#frg}
  */
  readonly frg?: number;
  /**
  * Enable automatic packet-capture for GRE PPTP Error Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#gre_pptp_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#gre_pptp_err}
  */
  readonly grePptpErr?: number;
  /**
  * Enable automatic packet-capture for IP-over-IP Tunnel Error Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#ipip_tnl_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#ipip_tnl_err}
  */
  readonly ipipTnlErr?: number;
  /**
  * Enable automatic packet-capture for IP-over-IP Tunnel Mismatch Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#ipip_tnl_msmtch VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#ipip_tnl_msmtch}
  */
  readonly ipipTnlMsmtch?: number;
  /**
  * Enable automatic packet-capture for IPv6 Authentication Header Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#ipv6_eh_ah VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#ipv6_eh_ah}
  */
  readonly ipv6EhAh?: number;
  /**
  * Enable automatic packet-capture for IPv6 Destination Header Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#ipv6_eh_dest VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#ipv6_eh_dest}
  */
  readonly ipv6EhDest?: number;
  /**
  * Enable automatic packet-capture for IPv6 ESP Header Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#ipv6_eh_esp VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#ipv6_eh_esp}
  */
  readonly ipv6EhEsp?: number;
  /**
  * Enable automatic packet-capture for IPv6 Fragmentation Header Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#ipv6_eh_frag VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#ipv6_eh_frag}
  */
  readonly ipv6EhFrag?: number;
  /**
  * Enable automatic packet-capture for IPv6 Hop by Hop Header Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#ipv6_eh_hbh VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#ipv6_eh_hbh}
  */
  readonly ipv6EhHbh?: number;
  /**
  * Enable automatic packet-capture for IPv6 Malformed Extension Header Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#ipv6_eh_malformed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#ipv6_eh_malformed}
  */
  readonly ipv6EhMalformed?: number;
  /**
  * Enable automatic packet-capture for IPv6 Mobility Header Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#ipv6_eh_mobility VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#ipv6_eh_mobility}
  */
  readonly ipv6EhMobility?: number;
  /**
  * Enable automatic packet-capture for IPv6 No Next Header Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#ipv6_eh_none VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#ipv6_eh_none}
  */
  readonly ipv6EhNone?: number;
  /**
  * Enable automatic packet-capture for IPv6 Unknown Extension Header Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#ipv6_eh_other VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#ipv6_eh_other}
  */
  readonly ipv6EhOther?: number;
  /**
  * Enable automatic packet-capture for IPv6 Routing Header Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#ipv6_eh_routing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#ipv6_eh_routing}
  */
  readonly ipv6EhRouting?: number;
  /**
  * Enable automatic packet-capture for Land Attack Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#land VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#land}
  */
  readonly land?: number;
  /**
  * Enable automatic packet-capture for No IP Payload drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#no_ip_payload VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#no_ip_payload}
  */
  readonly noIpPayload?: number;
  /**
  * Enable automatic packet-capture for GRE Tunnel Error Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#nvgre_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#nvgre_err}
  */
  readonly nvgreErr?: number;
  /**
  * Enable automatic packet-capture for IPv4 Options Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#opt VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#opt}
  */
  readonly opt?: number;
  /**
  * Enable automatic packet-capture for Oversize IP Payload Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#over_ip_payload VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#over_ip_payload}
  */
  readonly overIpPayload?: number;
  /**
  * Enable automatic packet-capture for ICMP Ping of Death Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#pod VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#pod}
  */
  readonly pod?: number;
  /**
  * Enable automatic packet-capture for Runt IP Header Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#runt_ip_hdr VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#runt_ip_hdr}
  */
  readonly runtIpHdr?: number;
  /**
  * Enable automatic packet-capture for Runt TCP/UDP Header Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#runt_tcp_udp_hdr VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#runt_tcp_udp_hdr}
  */
  readonly runtTcpUdpHdr?: number;
  /**
  * Enable automatic packet-capture for TCP Bad Checksum Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#tcp_bad_csum VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#tcp_bad_csum}
  */
  readonly tcpBadCsum?: number;
  /**
  * Enable automatic packet-capture for TCP Bad IP Length Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#tcp_bad_iplen VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#tcp_bad_iplen}
  */
  readonly tcpBadIplen?: number;
  /**
  * Enable automatic packet-capture for TCP Fragmented Header Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#tcp_frg_hdr VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#tcp_frg_hdr}
  */
  readonly tcpFrgHdr?: number;
  /**
  * Enable automatic packet-capture for TCP Null Flags Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#tcp_null_frg VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#tcp_null_frg}
  */
  readonly tcpNullFrg?: number;
  /**
  * Enable automatic packet-capture for TCP Null Scan Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#tcp_null_scan VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#tcp_null_scan}
  */
  readonly tcpNullScan?: number;
  /**
  * Enable automatic packet-capture for TCP Option Error Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#tcp_opt_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#tcp_opt_err}
  */
  readonly tcpOptErr?: number;
  /**
  * Enable automatic packet-capture for TCP Short Header Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#tcp_sht_hdr VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#tcp_sht_hdr}
  */
  readonly tcpShtHdr?: number;
  /**
  * Enable automatic packet-capture for TCP Syn and Fin Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#tcp_syn_fin VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#tcp_syn_fin}
  */
  readonly tcpSynFin?: number;
  /**
  * Enable automatic packet-capture for TCP Syn Fragment Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#tcp_syn_frg VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#tcp_syn_frg}
  */
  readonly tcpSynFrg?: number;
  /**
  * Enable automatic packet-capture for TCP XMAS Flags Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#tcp_xmas VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#tcp_xmas}
  */
  readonly tcpXmas?: number;
  /**
  * Enable automatic packet-capture for TCP XMAS Scan Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#tcp_xmas_scan VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#tcp_xmas_scan}
  */
  readonly tcpXmasScan?: number;
  /**
  * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#threshold_exceeded_by VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#threshold_exceeded_by}
  */
  readonly thresholdExceededBy?: number;
  /**
  * Enable automatic packet-capture for UDP Bad Checksum Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#udp_bad_csum VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#udp_bad_csum}
  */
  readonly udpBadCsum?: number;
  /**
  * Enable automatic packet-capture for UDP Bad Length Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#udp_bad_len VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#udp_bad_len}
  */
  readonly udpBadLen?: number;
  /**
  * Enable automatic packet-capture for UDP Kerberos Fragment Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#udp_kerb_frg VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#udp_kerb_frg}
  */
  readonly udpKerbFrg?: number;
  /**
  * Enable automatic packet-capture for UDP Port Loopback Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#udp_port_lb VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#udp_port_lb}
  */
  readonly udpPortLb?: number;
  /**
  * Enable automatic packet-capture for UDP Short Header Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#udp_srt_hdr VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#udp_srt_hdr}
  */
  readonly udpSrtHdr?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#uuid}
  */
  readonly uuid?: string;
  /**
  * Enable automatic packet-capture for VXLAN Tunnel Error Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#vxlan_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA#vxlan_err}
  */
  readonly vxlanErr?: number;
}

export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsRateAToTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsRateAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsRateA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bad_ip_flg: cdktf.numberToTerraform(struct!.badIpFlg),
    bad_ip_frg_offset: cdktf.numberToTerraform(struct!.badIpFrgOffset),
    bad_ip_hdrlen: cdktf.numberToTerraform(struct!.badIpHdrlen),
    bad_ip_payload_len: cdktf.numberToTerraform(struct!.badIpPayloadLen),
    bad_ip_ttl: cdktf.numberToTerraform(struct!.badIpTtl),
    bad_tcp_urg_offset: cdktf.numberToTerraform(struct!.badTcpUrgOffset),
    csum: cdktf.numberToTerraform(struct!.csum),
    duration: cdktf.numberToTerraform(struct!.duration),
    emp_frg: cdktf.numberToTerraform(struct!.empFrg),
    emp_mic_frg: cdktf.numberToTerraform(struct!.empMicFrg),
    frg: cdktf.numberToTerraform(struct!.frg),
    gre_pptp_err: cdktf.numberToTerraform(struct!.grePptpErr),
    ipip_tnl_err: cdktf.numberToTerraform(struct!.ipipTnlErr),
    ipip_tnl_msmtch: cdktf.numberToTerraform(struct!.ipipTnlMsmtch),
    ipv6_eh_ah: cdktf.numberToTerraform(struct!.ipv6EhAh),
    ipv6_eh_dest: cdktf.numberToTerraform(struct!.ipv6EhDest),
    ipv6_eh_esp: cdktf.numberToTerraform(struct!.ipv6EhEsp),
    ipv6_eh_frag: cdktf.numberToTerraform(struct!.ipv6EhFrag),
    ipv6_eh_hbh: cdktf.numberToTerraform(struct!.ipv6EhHbh),
    ipv6_eh_malformed: cdktf.numberToTerraform(struct!.ipv6EhMalformed),
    ipv6_eh_mobility: cdktf.numberToTerraform(struct!.ipv6EhMobility),
    ipv6_eh_none: cdktf.numberToTerraform(struct!.ipv6EhNone),
    ipv6_eh_other: cdktf.numberToTerraform(struct!.ipv6EhOther),
    ipv6_eh_routing: cdktf.numberToTerraform(struct!.ipv6EhRouting),
    land: cdktf.numberToTerraform(struct!.land),
    no_ip_payload: cdktf.numberToTerraform(struct!.noIpPayload),
    nvgre_err: cdktf.numberToTerraform(struct!.nvgreErr),
    opt: cdktf.numberToTerraform(struct!.opt),
    over_ip_payload: cdktf.numberToTerraform(struct!.overIpPayload),
    pod: cdktf.numberToTerraform(struct!.pod),
    runt_ip_hdr: cdktf.numberToTerraform(struct!.runtIpHdr),
    runt_tcp_udp_hdr: cdktf.numberToTerraform(struct!.runtTcpUdpHdr),
    tcp_bad_csum: cdktf.numberToTerraform(struct!.tcpBadCsum),
    tcp_bad_iplen: cdktf.numberToTerraform(struct!.tcpBadIplen),
    tcp_frg_hdr: cdktf.numberToTerraform(struct!.tcpFrgHdr),
    tcp_null_frg: cdktf.numberToTerraform(struct!.tcpNullFrg),
    tcp_null_scan: cdktf.numberToTerraform(struct!.tcpNullScan),
    tcp_opt_err: cdktf.numberToTerraform(struct!.tcpOptErr),
    tcp_sht_hdr: cdktf.numberToTerraform(struct!.tcpShtHdr),
    tcp_syn_fin: cdktf.numberToTerraform(struct!.tcpSynFin),
    tcp_syn_frg: cdktf.numberToTerraform(struct!.tcpSynFrg),
    tcp_xmas: cdktf.numberToTerraform(struct!.tcpXmas),
    tcp_xmas_scan: cdktf.numberToTerraform(struct!.tcpXmasScan),
    threshold_exceeded_by: cdktf.numberToTerraform(struct!.thresholdExceededBy),
    udp_bad_csum: cdktf.numberToTerraform(struct!.udpBadCsum),
    udp_bad_len: cdktf.numberToTerraform(struct!.udpBadLen),
    udp_kerb_frg: cdktf.numberToTerraform(struct!.udpKerbFrg),
    udp_port_lb: cdktf.numberToTerraform(struct!.udpPortLb),
    udp_srt_hdr: cdktf.numberToTerraform(struct!.udpSrtHdr),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    vxlan_err: cdktf.numberToTerraform(struct!.vxlanErr),
  }
}


export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsRateAToHclTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsRateAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsRateA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bad_ip_flg: {
      value: cdktf.numberToHclTerraform(struct!.badIpFlg),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_ip_frg_offset: {
      value: cdktf.numberToHclTerraform(struct!.badIpFrgOffset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_ip_hdrlen: {
      value: cdktf.numberToHclTerraform(struct!.badIpHdrlen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_ip_payload_len: {
      value: cdktf.numberToHclTerraform(struct!.badIpPayloadLen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_ip_ttl: {
      value: cdktf.numberToHclTerraform(struct!.badIpTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_tcp_urg_offset: {
      value: cdktf.numberToHclTerraform(struct!.badTcpUrgOffset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    csum: {
      value: cdktf.numberToHclTerraform(struct!.csum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    emp_frg: {
      value: cdktf.numberToHclTerraform(struct!.empFrg),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    emp_mic_frg: {
      value: cdktf.numberToHclTerraform(struct!.empMicFrg),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    frg: {
      value: cdktf.numberToHclTerraform(struct!.frg),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gre_pptp_err: {
      value: cdktf.numberToHclTerraform(struct!.grePptpErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipip_tnl_err: {
      value: cdktf.numberToHclTerraform(struct!.ipipTnlErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipip_tnl_msmtch: {
      value: cdktf.numberToHclTerraform(struct!.ipipTnlMsmtch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_eh_ah: {
      value: cdktf.numberToHclTerraform(struct!.ipv6EhAh),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_eh_dest: {
      value: cdktf.numberToHclTerraform(struct!.ipv6EhDest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_eh_esp: {
      value: cdktf.numberToHclTerraform(struct!.ipv6EhEsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_eh_frag: {
      value: cdktf.numberToHclTerraform(struct!.ipv6EhFrag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_eh_hbh: {
      value: cdktf.numberToHclTerraform(struct!.ipv6EhHbh),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_eh_malformed: {
      value: cdktf.numberToHclTerraform(struct!.ipv6EhMalformed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_eh_mobility: {
      value: cdktf.numberToHclTerraform(struct!.ipv6EhMobility),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_eh_none: {
      value: cdktf.numberToHclTerraform(struct!.ipv6EhNone),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_eh_other: {
      value: cdktf.numberToHclTerraform(struct!.ipv6EhOther),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_eh_routing: {
      value: cdktf.numberToHclTerraform(struct!.ipv6EhRouting),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    land: {
      value: cdktf.numberToHclTerraform(struct!.land),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_ip_payload: {
      value: cdktf.numberToHclTerraform(struct!.noIpPayload),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nvgre_err: {
      value: cdktf.numberToHclTerraform(struct!.nvgreErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    opt: {
      value: cdktf.numberToHclTerraform(struct!.opt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    over_ip_payload: {
      value: cdktf.numberToHclTerraform(struct!.overIpPayload),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pod: {
      value: cdktf.numberToHclTerraform(struct!.pod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    runt_ip_hdr: {
      value: cdktf.numberToHclTerraform(struct!.runtIpHdr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    runt_tcp_udp_hdr: {
      value: cdktf.numberToHclTerraform(struct!.runtTcpUdpHdr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_bad_csum: {
      value: cdktf.numberToHclTerraform(struct!.tcpBadCsum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_bad_iplen: {
      value: cdktf.numberToHclTerraform(struct!.tcpBadIplen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_frg_hdr: {
      value: cdktf.numberToHclTerraform(struct!.tcpFrgHdr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_null_frg: {
      value: cdktf.numberToHclTerraform(struct!.tcpNullFrg),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_null_scan: {
      value: cdktf.numberToHclTerraform(struct!.tcpNullScan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_opt_err: {
      value: cdktf.numberToHclTerraform(struct!.tcpOptErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_sht_hdr: {
      value: cdktf.numberToHclTerraform(struct!.tcpShtHdr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_syn_fin: {
      value: cdktf.numberToHclTerraform(struct!.tcpSynFin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_syn_frg: {
      value: cdktf.numberToHclTerraform(struct!.tcpSynFrg),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_xmas: {
      value: cdktf.numberToHclTerraform(struct!.tcpXmas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_xmas_scan: {
      value: cdktf.numberToHclTerraform(struct!.tcpXmasScan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold_exceeded_by: {
      value: cdktf.numberToHclTerraform(struct!.thresholdExceededBy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_bad_csum: {
      value: cdktf.numberToHclTerraform(struct!.udpBadCsum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_bad_len: {
      value: cdktf.numberToHclTerraform(struct!.udpBadLen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_kerb_frg: {
      value: cdktf.numberToHclTerraform(struct!.udpKerbFrg),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_port_lb: {
      value: cdktf.numberToHclTerraform(struct!.udpPortLb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_srt_hdr: {
      value: cdktf.numberToHclTerraform(struct!.udpSrtHdr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vxlan_err: {
      value: cdktf.numberToHclTerraform(struct!.vxlanErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsRateAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsRateA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._badIpFlg !== undefined) {
      hasAnyValues = true;
      internalValueResult.badIpFlg = this._badIpFlg;
    }
    if (this._badIpFrgOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.badIpFrgOffset = this._badIpFrgOffset;
    }
    if (this._badIpHdrlen !== undefined) {
      hasAnyValues = true;
      internalValueResult.badIpHdrlen = this._badIpHdrlen;
    }
    if (this._badIpPayloadLen !== undefined) {
      hasAnyValues = true;
      internalValueResult.badIpPayloadLen = this._badIpPayloadLen;
    }
    if (this._badIpTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.badIpTtl = this._badIpTtl;
    }
    if (this._badTcpUrgOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.badTcpUrgOffset = this._badTcpUrgOffset;
    }
    if (this._csum !== undefined) {
      hasAnyValues = true;
      internalValueResult.csum = this._csum;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._empFrg !== undefined) {
      hasAnyValues = true;
      internalValueResult.empFrg = this._empFrg;
    }
    if (this._empMicFrg !== undefined) {
      hasAnyValues = true;
      internalValueResult.empMicFrg = this._empMicFrg;
    }
    if (this._frg !== undefined) {
      hasAnyValues = true;
      internalValueResult.frg = this._frg;
    }
    if (this._grePptpErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.grePptpErr = this._grePptpErr;
    }
    if (this._ipipTnlErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipipTnlErr = this._ipipTnlErr;
    }
    if (this._ipipTnlMsmtch !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipipTnlMsmtch = this._ipipTnlMsmtch;
    }
    if (this._ipv6EhAh !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6EhAh = this._ipv6EhAh;
    }
    if (this._ipv6EhDest !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6EhDest = this._ipv6EhDest;
    }
    if (this._ipv6EhEsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6EhEsp = this._ipv6EhEsp;
    }
    if (this._ipv6EhFrag !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6EhFrag = this._ipv6EhFrag;
    }
    if (this._ipv6EhHbh !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6EhHbh = this._ipv6EhHbh;
    }
    if (this._ipv6EhMalformed !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6EhMalformed = this._ipv6EhMalformed;
    }
    if (this._ipv6EhMobility !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6EhMobility = this._ipv6EhMobility;
    }
    if (this._ipv6EhNone !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6EhNone = this._ipv6EhNone;
    }
    if (this._ipv6EhOther !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6EhOther = this._ipv6EhOther;
    }
    if (this._ipv6EhRouting !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6EhRouting = this._ipv6EhRouting;
    }
    if (this._land !== undefined) {
      hasAnyValues = true;
      internalValueResult.land = this._land;
    }
    if (this._noIpPayload !== undefined) {
      hasAnyValues = true;
      internalValueResult.noIpPayload = this._noIpPayload;
    }
    if (this._nvgreErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.nvgreErr = this._nvgreErr;
    }
    if (this._opt !== undefined) {
      hasAnyValues = true;
      internalValueResult.opt = this._opt;
    }
    if (this._overIpPayload !== undefined) {
      hasAnyValues = true;
      internalValueResult.overIpPayload = this._overIpPayload;
    }
    if (this._pod !== undefined) {
      hasAnyValues = true;
      internalValueResult.pod = this._pod;
    }
    if (this._runtIpHdr !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtIpHdr = this._runtIpHdr;
    }
    if (this._runtTcpUdpHdr !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtTcpUdpHdr = this._runtTcpUdpHdr;
    }
    if (this._tcpBadCsum !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpBadCsum = this._tcpBadCsum;
    }
    if (this._tcpBadIplen !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpBadIplen = this._tcpBadIplen;
    }
    if (this._tcpFrgHdr !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFrgHdr = this._tcpFrgHdr;
    }
    if (this._tcpNullFrg !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpNullFrg = this._tcpNullFrg;
    }
    if (this._tcpNullScan !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpNullScan = this._tcpNullScan;
    }
    if (this._tcpOptErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpOptErr = this._tcpOptErr;
    }
    if (this._tcpShtHdr !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpShtHdr = this._tcpShtHdr;
    }
    if (this._tcpSynFin !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSynFin = this._tcpSynFin;
    }
    if (this._tcpSynFrg !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSynFrg = this._tcpSynFrg;
    }
    if (this._tcpXmas !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpXmas = this._tcpXmas;
    }
    if (this._tcpXmasScan !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpXmasScan = this._tcpXmasScan;
    }
    if (this._thresholdExceededBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdExceededBy = this._thresholdExceededBy;
    }
    if (this._udpBadCsum !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpBadCsum = this._udpBadCsum;
    }
    if (this._udpBadLen !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpBadLen = this._udpBadLen;
    }
    if (this._udpKerbFrg !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpKerbFrg = this._udpKerbFrg;
    }
    if (this._udpPortLb !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpPortLb = this._udpPortLb;
    }
    if (this._udpSrtHdr !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpSrtHdr = this._udpSrtHdr;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._vxlanErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.vxlanErr = this._vxlanErr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsRateA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._badIpFlg = undefined;
      this._badIpFrgOffset = undefined;
      this._badIpHdrlen = undefined;
      this._badIpPayloadLen = undefined;
      this._badIpTtl = undefined;
      this._badTcpUrgOffset = undefined;
      this._csum = undefined;
      this._duration = undefined;
      this._empFrg = undefined;
      this._empMicFrg = undefined;
      this._frg = undefined;
      this._grePptpErr = undefined;
      this._ipipTnlErr = undefined;
      this._ipipTnlMsmtch = undefined;
      this._ipv6EhAh = undefined;
      this._ipv6EhDest = undefined;
      this._ipv6EhEsp = undefined;
      this._ipv6EhFrag = undefined;
      this._ipv6EhHbh = undefined;
      this._ipv6EhMalformed = undefined;
      this._ipv6EhMobility = undefined;
      this._ipv6EhNone = undefined;
      this._ipv6EhOther = undefined;
      this._ipv6EhRouting = undefined;
      this._land = undefined;
      this._noIpPayload = undefined;
      this._nvgreErr = undefined;
      this._opt = undefined;
      this._overIpPayload = undefined;
      this._pod = undefined;
      this._runtIpHdr = undefined;
      this._runtTcpUdpHdr = undefined;
      this._tcpBadCsum = undefined;
      this._tcpBadIplen = undefined;
      this._tcpFrgHdr = undefined;
      this._tcpNullFrg = undefined;
      this._tcpNullScan = undefined;
      this._tcpOptErr = undefined;
      this._tcpShtHdr = undefined;
      this._tcpSynFin = undefined;
      this._tcpSynFrg = undefined;
      this._tcpXmas = undefined;
      this._tcpXmasScan = undefined;
      this._thresholdExceededBy = undefined;
      this._udpBadCsum = undefined;
      this._udpBadLen = undefined;
      this._udpKerbFrg = undefined;
      this._udpPortLb = undefined;
      this._udpSrtHdr = undefined;
      this._uuid = undefined;
      this._vxlanErr = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._badIpFlg = value.badIpFlg;
      this._badIpFrgOffset = value.badIpFrgOffset;
      this._badIpHdrlen = value.badIpHdrlen;
      this._badIpPayloadLen = value.badIpPayloadLen;
      this._badIpTtl = value.badIpTtl;
      this._badTcpUrgOffset = value.badTcpUrgOffset;
      this._csum = value.csum;
      this._duration = value.duration;
      this._empFrg = value.empFrg;
      this._empMicFrg = value.empMicFrg;
      this._frg = value.frg;
      this._grePptpErr = value.grePptpErr;
      this._ipipTnlErr = value.ipipTnlErr;
      this._ipipTnlMsmtch = value.ipipTnlMsmtch;
      this._ipv6EhAh = value.ipv6EhAh;
      this._ipv6EhDest = value.ipv6EhDest;
      this._ipv6EhEsp = value.ipv6EhEsp;
      this._ipv6EhFrag = value.ipv6EhFrag;
      this._ipv6EhHbh = value.ipv6EhHbh;
      this._ipv6EhMalformed = value.ipv6EhMalformed;
      this._ipv6EhMobility = value.ipv6EhMobility;
      this._ipv6EhNone = value.ipv6EhNone;
      this._ipv6EhOther = value.ipv6EhOther;
      this._ipv6EhRouting = value.ipv6EhRouting;
      this._land = value.land;
      this._noIpPayload = value.noIpPayload;
      this._nvgreErr = value.nvgreErr;
      this._opt = value.opt;
      this._overIpPayload = value.overIpPayload;
      this._pod = value.pod;
      this._runtIpHdr = value.runtIpHdr;
      this._runtTcpUdpHdr = value.runtTcpUdpHdr;
      this._tcpBadCsum = value.tcpBadCsum;
      this._tcpBadIplen = value.tcpBadIplen;
      this._tcpFrgHdr = value.tcpFrgHdr;
      this._tcpNullFrg = value.tcpNullFrg;
      this._tcpNullScan = value.tcpNullScan;
      this._tcpOptErr = value.tcpOptErr;
      this._tcpShtHdr = value.tcpShtHdr;
      this._tcpSynFin = value.tcpSynFin;
      this._tcpSynFrg = value.tcpSynFrg;
      this._tcpXmas = value.tcpXmas;
      this._tcpXmasScan = value.tcpXmasScan;
      this._thresholdExceededBy = value.thresholdExceededBy;
      this._udpBadCsum = value.udpBadCsum;
      this._udpBadLen = value.udpBadLen;
      this._udpKerbFrg = value.udpKerbFrg;
      this._udpPortLb = value.udpPortLb;
      this._udpSrtHdr = value.udpSrtHdr;
      this._uuid = value.uuid;
      this._vxlanErr = value.vxlanErr;
    }
  }

  // bad_ip_flg - computed: false, optional: true, required: false
  private _badIpFlg?: number; 
  public get badIpFlg() {
    return this.getNumberAttribute('bad_ip_flg');
  }
  public set badIpFlg(value: number) {
    this._badIpFlg = value;
  }
  public resetBadIpFlg() {
    this._badIpFlg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badIpFlgInput() {
    return this._badIpFlg;
  }

  // bad_ip_frg_offset - computed: false, optional: true, required: false
  private _badIpFrgOffset?: number; 
  public get badIpFrgOffset() {
    return this.getNumberAttribute('bad_ip_frg_offset');
  }
  public set badIpFrgOffset(value: number) {
    this._badIpFrgOffset = value;
  }
  public resetBadIpFrgOffset() {
    this._badIpFrgOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badIpFrgOffsetInput() {
    return this._badIpFrgOffset;
  }

  // bad_ip_hdrlen - computed: false, optional: true, required: false
  private _badIpHdrlen?: number; 
  public get badIpHdrlen() {
    return this.getNumberAttribute('bad_ip_hdrlen');
  }
  public set badIpHdrlen(value: number) {
    this._badIpHdrlen = value;
  }
  public resetBadIpHdrlen() {
    this._badIpHdrlen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badIpHdrlenInput() {
    return this._badIpHdrlen;
  }

  // bad_ip_payload_len - computed: false, optional: true, required: false
  private _badIpPayloadLen?: number; 
  public get badIpPayloadLen() {
    return this.getNumberAttribute('bad_ip_payload_len');
  }
  public set badIpPayloadLen(value: number) {
    this._badIpPayloadLen = value;
  }
  public resetBadIpPayloadLen() {
    this._badIpPayloadLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badIpPayloadLenInput() {
    return this._badIpPayloadLen;
  }

  // bad_ip_ttl - computed: false, optional: true, required: false
  private _badIpTtl?: number; 
  public get badIpTtl() {
    return this.getNumberAttribute('bad_ip_ttl');
  }
  public set badIpTtl(value: number) {
    this._badIpTtl = value;
  }
  public resetBadIpTtl() {
    this._badIpTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badIpTtlInput() {
    return this._badIpTtl;
  }

  // bad_tcp_urg_offset - computed: false, optional: true, required: false
  private _badTcpUrgOffset?: number; 
  public get badTcpUrgOffset() {
    return this.getNumberAttribute('bad_tcp_urg_offset');
  }
  public set badTcpUrgOffset(value: number) {
    this._badTcpUrgOffset = value;
  }
  public resetBadTcpUrgOffset() {
    this._badTcpUrgOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badTcpUrgOffsetInput() {
    return this._badTcpUrgOffset;
  }

  // csum - computed: false, optional: true, required: false
  private _csum?: number; 
  public get csum() {
    return this.getNumberAttribute('csum');
  }
  public set csum(value: number) {
    this._csum = value;
  }
  public resetCsum() {
    this._csum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csumInput() {
    return this._csum;
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // emp_frg - computed: false, optional: true, required: false
  private _empFrg?: number; 
  public get empFrg() {
    return this.getNumberAttribute('emp_frg');
  }
  public set empFrg(value: number) {
    this._empFrg = value;
  }
  public resetEmpFrg() {
    this._empFrg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get empFrgInput() {
    return this._empFrg;
  }

  // emp_mic_frg - computed: false, optional: true, required: false
  private _empMicFrg?: number; 
  public get empMicFrg() {
    return this.getNumberAttribute('emp_mic_frg');
  }
  public set empMicFrg(value: number) {
    this._empMicFrg = value;
  }
  public resetEmpMicFrg() {
    this._empMicFrg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get empMicFrgInput() {
    return this._empMicFrg;
  }

  // frg - computed: false, optional: true, required: false
  private _frg?: number; 
  public get frg() {
    return this.getNumberAttribute('frg');
  }
  public set frg(value: number) {
    this._frg = value;
  }
  public resetFrg() {
    this._frg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frgInput() {
    return this._frg;
  }

  // gre_pptp_err - computed: false, optional: true, required: false
  private _grePptpErr?: number; 
  public get grePptpErr() {
    return this.getNumberAttribute('gre_pptp_err');
  }
  public set grePptpErr(value: number) {
    this._grePptpErr = value;
  }
  public resetGrePptpErr() {
    this._grePptpErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grePptpErrInput() {
    return this._grePptpErr;
  }

  // ipip_tnl_err - computed: false, optional: true, required: false
  private _ipipTnlErr?: number; 
  public get ipipTnlErr() {
    return this.getNumberAttribute('ipip_tnl_err');
  }
  public set ipipTnlErr(value: number) {
    this._ipipTnlErr = value;
  }
  public resetIpipTnlErr() {
    this._ipipTnlErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipipTnlErrInput() {
    return this._ipipTnlErr;
  }

  // ipip_tnl_msmtch - computed: false, optional: true, required: false
  private _ipipTnlMsmtch?: number; 
  public get ipipTnlMsmtch() {
    return this.getNumberAttribute('ipip_tnl_msmtch');
  }
  public set ipipTnlMsmtch(value: number) {
    this._ipipTnlMsmtch = value;
  }
  public resetIpipTnlMsmtch() {
    this._ipipTnlMsmtch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipipTnlMsmtchInput() {
    return this._ipipTnlMsmtch;
  }

  // ipv6_eh_ah - computed: false, optional: true, required: false
  private _ipv6EhAh?: number; 
  public get ipv6EhAh() {
    return this.getNumberAttribute('ipv6_eh_ah');
  }
  public set ipv6EhAh(value: number) {
    this._ipv6EhAh = value;
  }
  public resetIpv6EhAh() {
    this._ipv6EhAh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6EhAhInput() {
    return this._ipv6EhAh;
  }

  // ipv6_eh_dest - computed: false, optional: true, required: false
  private _ipv6EhDest?: number; 
  public get ipv6EhDest() {
    return this.getNumberAttribute('ipv6_eh_dest');
  }
  public set ipv6EhDest(value: number) {
    this._ipv6EhDest = value;
  }
  public resetIpv6EhDest() {
    this._ipv6EhDest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6EhDestInput() {
    return this._ipv6EhDest;
  }

  // ipv6_eh_esp - computed: false, optional: true, required: false
  private _ipv6EhEsp?: number; 
  public get ipv6EhEsp() {
    return this.getNumberAttribute('ipv6_eh_esp');
  }
  public set ipv6EhEsp(value: number) {
    this._ipv6EhEsp = value;
  }
  public resetIpv6EhEsp() {
    this._ipv6EhEsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6EhEspInput() {
    return this._ipv6EhEsp;
  }

  // ipv6_eh_frag - computed: false, optional: true, required: false
  private _ipv6EhFrag?: number; 
  public get ipv6EhFrag() {
    return this.getNumberAttribute('ipv6_eh_frag');
  }
  public set ipv6EhFrag(value: number) {
    this._ipv6EhFrag = value;
  }
  public resetIpv6EhFrag() {
    this._ipv6EhFrag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6EhFragInput() {
    return this._ipv6EhFrag;
  }

  // ipv6_eh_hbh - computed: false, optional: true, required: false
  private _ipv6EhHbh?: number; 
  public get ipv6EhHbh() {
    return this.getNumberAttribute('ipv6_eh_hbh');
  }
  public set ipv6EhHbh(value: number) {
    this._ipv6EhHbh = value;
  }
  public resetIpv6EhHbh() {
    this._ipv6EhHbh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6EhHbhInput() {
    return this._ipv6EhHbh;
  }

  // ipv6_eh_malformed - computed: false, optional: true, required: false
  private _ipv6EhMalformed?: number; 
  public get ipv6EhMalformed() {
    return this.getNumberAttribute('ipv6_eh_malformed');
  }
  public set ipv6EhMalformed(value: number) {
    this._ipv6EhMalformed = value;
  }
  public resetIpv6EhMalformed() {
    this._ipv6EhMalformed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6EhMalformedInput() {
    return this._ipv6EhMalformed;
  }

  // ipv6_eh_mobility - computed: false, optional: true, required: false
  private _ipv6EhMobility?: number; 
  public get ipv6EhMobility() {
    return this.getNumberAttribute('ipv6_eh_mobility');
  }
  public set ipv6EhMobility(value: number) {
    this._ipv6EhMobility = value;
  }
  public resetIpv6EhMobility() {
    this._ipv6EhMobility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6EhMobilityInput() {
    return this._ipv6EhMobility;
  }

  // ipv6_eh_none - computed: false, optional: true, required: false
  private _ipv6EhNone?: number; 
  public get ipv6EhNone() {
    return this.getNumberAttribute('ipv6_eh_none');
  }
  public set ipv6EhNone(value: number) {
    this._ipv6EhNone = value;
  }
  public resetIpv6EhNone() {
    this._ipv6EhNone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6EhNoneInput() {
    return this._ipv6EhNone;
  }

  // ipv6_eh_other - computed: false, optional: true, required: false
  private _ipv6EhOther?: number; 
  public get ipv6EhOther() {
    return this.getNumberAttribute('ipv6_eh_other');
  }
  public set ipv6EhOther(value: number) {
    this._ipv6EhOther = value;
  }
  public resetIpv6EhOther() {
    this._ipv6EhOther = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6EhOtherInput() {
    return this._ipv6EhOther;
  }

  // ipv6_eh_routing - computed: false, optional: true, required: false
  private _ipv6EhRouting?: number; 
  public get ipv6EhRouting() {
    return this.getNumberAttribute('ipv6_eh_routing');
  }
  public set ipv6EhRouting(value: number) {
    this._ipv6EhRouting = value;
  }
  public resetIpv6EhRouting() {
    this._ipv6EhRouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6EhRoutingInput() {
    return this._ipv6EhRouting;
  }

  // land - computed: false, optional: true, required: false
  private _land?: number; 
  public get land() {
    return this.getNumberAttribute('land');
  }
  public set land(value: number) {
    this._land = value;
  }
  public resetLand() {
    this._land = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get landInput() {
    return this._land;
  }

  // no_ip_payload - computed: false, optional: true, required: false
  private _noIpPayload?: number; 
  public get noIpPayload() {
    return this.getNumberAttribute('no_ip_payload');
  }
  public set noIpPayload(value: number) {
    this._noIpPayload = value;
  }
  public resetNoIpPayload() {
    this._noIpPayload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noIpPayloadInput() {
    return this._noIpPayload;
  }

  // nvgre_err - computed: false, optional: true, required: false
  private _nvgreErr?: number; 
  public get nvgreErr() {
    return this.getNumberAttribute('nvgre_err');
  }
  public set nvgreErr(value: number) {
    this._nvgreErr = value;
  }
  public resetNvgreErr() {
    this._nvgreErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nvgreErrInput() {
    return this._nvgreErr;
  }

  // opt - computed: false, optional: true, required: false
  private _opt?: number; 
  public get opt() {
    return this.getNumberAttribute('opt');
  }
  public set opt(value: number) {
    this._opt = value;
  }
  public resetOpt() {
    this._opt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optInput() {
    return this._opt;
  }

  // over_ip_payload - computed: false, optional: true, required: false
  private _overIpPayload?: number; 
  public get overIpPayload() {
    return this.getNumberAttribute('over_ip_payload');
  }
  public set overIpPayload(value: number) {
    this._overIpPayload = value;
  }
  public resetOverIpPayload() {
    this._overIpPayload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overIpPayloadInput() {
    return this._overIpPayload;
  }

  // pod - computed: false, optional: true, required: false
  private _pod?: number; 
  public get pod() {
    return this.getNumberAttribute('pod');
  }
  public set pod(value: number) {
    this._pod = value;
  }
  public resetPod() {
    this._pod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podInput() {
    return this._pod;
  }

  // runt_ip_hdr - computed: false, optional: true, required: false
  private _runtIpHdr?: number; 
  public get runtIpHdr() {
    return this.getNumberAttribute('runt_ip_hdr');
  }
  public set runtIpHdr(value: number) {
    this._runtIpHdr = value;
  }
  public resetRuntIpHdr() {
    this._runtIpHdr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtIpHdrInput() {
    return this._runtIpHdr;
  }

  // runt_tcp_udp_hdr - computed: false, optional: true, required: false
  private _runtTcpUdpHdr?: number; 
  public get runtTcpUdpHdr() {
    return this.getNumberAttribute('runt_tcp_udp_hdr');
  }
  public set runtTcpUdpHdr(value: number) {
    this._runtTcpUdpHdr = value;
  }
  public resetRuntTcpUdpHdr() {
    this._runtTcpUdpHdr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtTcpUdpHdrInput() {
    return this._runtTcpUdpHdr;
  }

  // tcp_bad_csum - computed: false, optional: true, required: false
  private _tcpBadCsum?: number; 
  public get tcpBadCsum() {
    return this.getNumberAttribute('tcp_bad_csum');
  }
  public set tcpBadCsum(value: number) {
    this._tcpBadCsum = value;
  }
  public resetTcpBadCsum() {
    this._tcpBadCsum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpBadCsumInput() {
    return this._tcpBadCsum;
  }

  // tcp_bad_iplen - computed: false, optional: true, required: false
  private _tcpBadIplen?: number; 
  public get tcpBadIplen() {
    return this.getNumberAttribute('tcp_bad_iplen');
  }
  public set tcpBadIplen(value: number) {
    this._tcpBadIplen = value;
  }
  public resetTcpBadIplen() {
    this._tcpBadIplen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpBadIplenInput() {
    return this._tcpBadIplen;
  }

  // tcp_frg_hdr - computed: false, optional: true, required: false
  private _tcpFrgHdr?: number; 
  public get tcpFrgHdr() {
    return this.getNumberAttribute('tcp_frg_hdr');
  }
  public set tcpFrgHdr(value: number) {
    this._tcpFrgHdr = value;
  }
  public resetTcpFrgHdr() {
    this._tcpFrgHdr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFrgHdrInput() {
    return this._tcpFrgHdr;
  }

  // tcp_null_frg - computed: false, optional: true, required: false
  private _tcpNullFrg?: number; 
  public get tcpNullFrg() {
    return this.getNumberAttribute('tcp_null_frg');
  }
  public set tcpNullFrg(value: number) {
    this._tcpNullFrg = value;
  }
  public resetTcpNullFrg() {
    this._tcpNullFrg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpNullFrgInput() {
    return this._tcpNullFrg;
  }

  // tcp_null_scan - computed: false, optional: true, required: false
  private _tcpNullScan?: number; 
  public get tcpNullScan() {
    return this.getNumberAttribute('tcp_null_scan');
  }
  public set tcpNullScan(value: number) {
    this._tcpNullScan = value;
  }
  public resetTcpNullScan() {
    this._tcpNullScan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpNullScanInput() {
    return this._tcpNullScan;
  }

  // tcp_opt_err - computed: false, optional: true, required: false
  private _tcpOptErr?: number; 
  public get tcpOptErr() {
    return this.getNumberAttribute('tcp_opt_err');
  }
  public set tcpOptErr(value: number) {
    this._tcpOptErr = value;
  }
  public resetTcpOptErr() {
    this._tcpOptErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpOptErrInput() {
    return this._tcpOptErr;
  }

  // tcp_sht_hdr - computed: false, optional: true, required: false
  private _tcpShtHdr?: number; 
  public get tcpShtHdr() {
    return this.getNumberAttribute('tcp_sht_hdr');
  }
  public set tcpShtHdr(value: number) {
    this._tcpShtHdr = value;
  }
  public resetTcpShtHdr() {
    this._tcpShtHdr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpShtHdrInput() {
    return this._tcpShtHdr;
  }

  // tcp_syn_fin - computed: false, optional: true, required: false
  private _tcpSynFin?: number; 
  public get tcpSynFin() {
    return this.getNumberAttribute('tcp_syn_fin');
  }
  public set tcpSynFin(value: number) {
    this._tcpSynFin = value;
  }
  public resetTcpSynFin() {
    this._tcpSynFin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSynFinInput() {
    return this._tcpSynFin;
  }

  // tcp_syn_frg - computed: false, optional: true, required: false
  private _tcpSynFrg?: number; 
  public get tcpSynFrg() {
    return this.getNumberAttribute('tcp_syn_frg');
  }
  public set tcpSynFrg(value: number) {
    this._tcpSynFrg = value;
  }
  public resetTcpSynFrg() {
    this._tcpSynFrg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSynFrgInput() {
    return this._tcpSynFrg;
  }

  // tcp_xmas - computed: false, optional: true, required: false
  private _tcpXmas?: number; 
  public get tcpXmas() {
    return this.getNumberAttribute('tcp_xmas');
  }
  public set tcpXmas(value: number) {
    this._tcpXmas = value;
  }
  public resetTcpXmas() {
    this._tcpXmas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpXmasInput() {
    return this._tcpXmas;
  }

  // tcp_xmas_scan - computed: false, optional: true, required: false
  private _tcpXmasScan?: number; 
  public get tcpXmasScan() {
    return this.getNumberAttribute('tcp_xmas_scan');
  }
  public set tcpXmasScan(value: number) {
    this._tcpXmasScan = value;
  }
  public resetTcpXmasScan() {
    this._tcpXmasScan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpXmasScanInput() {
    return this._tcpXmasScan;
  }

  // threshold_exceeded_by - computed: false, optional: true, required: false
  private _thresholdExceededBy?: number; 
  public get thresholdExceededBy() {
    return this.getNumberAttribute('threshold_exceeded_by');
  }
  public set thresholdExceededBy(value: number) {
    this._thresholdExceededBy = value;
  }
  public resetThresholdExceededBy() {
    this._thresholdExceededBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdExceededByInput() {
    return this._thresholdExceededBy;
  }

  // udp_bad_csum - computed: false, optional: true, required: false
  private _udpBadCsum?: number; 
  public get udpBadCsum() {
    return this.getNumberAttribute('udp_bad_csum');
  }
  public set udpBadCsum(value: number) {
    this._udpBadCsum = value;
  }
  public resetUdpBadCsum() {
    this._udpBadCsum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpBadCsumInput() {
    return this._udpBadCsum;
  }

  // udp_bad_len - computed: false, optional: true, required: false
  private _udpBadLen?: number; 
  public get udpBadLen() {
    return this.getNumberAttribute('udp_bad_len');
  }
  public set udpBadLen(value: number) {
    this._udpBadLen = value;
  }
  public resetUdpBadLen() {
    this._udpBadLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpBadLenInput() {
    return this._udpBadLen;
  }

  // udp_kerb_frg - computed: false, optional: true, required: false
  private _udpKerbFrg?: number; 
  public get udpKerbFrg() {
    return this.getNumberAttribute('udp_kerb_frg');
  }
  public set udpKerbFrg(value: number) {
    this._udpKerbFrg = value;
  }
  public resetUdpKerbFrg() {
    this._udpKerbFrg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpKerbFrgInput() {
    return this._udpKerbFrg;
  }

  // udp_port_lb - computed: false, optional: true, required: false
  private _udpPortLb?: number; 
  public get udpPortLb() {
    return this.getNumberAttribute('udp_port_lb');
  }
  public set udpPortLb(value: number) {
    this._udpPortLb = value;
  }
  public resetUdpPortLb() {
    this._udpPortLb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPortLbInput() {
    return this._udpPortLb;
  }

  // udp_srt_hdr - computed: false, optional: true, required: false
  private _udpSrtHdr?: number; 
  public get udpSrtHdr() {
    return this.getNumberAttribute('udp_srt_hdr');
  }
  public set udpSrtHdr(value: number) {
    this._udpSrtHdr = value;
  }
  public resetUdpSrtHdr() {
    this._udpSrtHdr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpSrtHdrInput() {
    return this._udpSrtHdr;
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

  // vxlan_err - computed: false, optional: true, required: false
  private _vxlanErr?: number; 
  public get vxlanErr() {
    return this.getNumberAttribute('vxlan_err');
  }
  public set vxlanErr(value: number) {
    this._vxlanErr = value;
  }
  public resetVxlanErr() {
    this._vxlanErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vxlanErrInput() {
    return this._vxlanErr;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop}
*/
export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop',
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
    this._name = config.name;
    this._uuid = config.uuid;
    this._triggerStatsInc.internalValue = config.triggerStatsInc;
    this._triggerStatsRate.internalValue = config.triggerStatsRate;
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

  // trigger_stats_inc - computed: false, optional: true, required: false
  private _triggerStatsInc = new VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsIncAOutputReference(this, "trigger_stats_inc");
  public get triggerStatsInc() {
    return this._triggerStatsInc;
  }
  public putTriggerStatsInc(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsIncA) {
    this._triggerStatsInc.internalValue = value;
  }
  public resetTriggerStatsInc() {
    this._triggerStatsInc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerStatsIncInput() {
    return this._triggerStatsInc.internalValue;
  }

  // trigger_stats_rate - computed: false, optional: true, required: false
  private _triggerStatsRate = new VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsRateAOutputReference(this, "trigger_stats_rate");
  public get triggerStatsRate() {
    return this._triggerStatsRate;
  }
  public putTriggerStatsRate(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsRateA) {
    this._triggerStatsRate.internalValue = value;
  }
  public resetTriggerStatsRate() {
    this._triggerStatsRate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerStatsRateInput() {
    return this._triggerStatsRate.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      uuid: cdktf.stringToTerraform(this._uuid),
      trigger_stats_inc: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsIncAToTerraform(this._triggerStatsInc.internalValue),
      trigger_stats_rate: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsRateAToTerraform(this._triggerStatsRate.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trigger_stats_inc: {
        value: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsIncAToHclTerraform(this._triggerStatsInc.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsIncAList",
      },
      trigger_stats_rate: {
        value: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsRateAToHclTerraform(this._triggerStatsRate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsRateAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
