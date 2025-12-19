// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop_trigger_stats_rate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsRateAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable automatic packet-capture for Bad IP Flags Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop_trigger_stats_rate#bad_ip_flg VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsRateA#bad_ip_flg}
  */
  readonly badIpFlg?: number;
  /**
  * Enable automatic packet-capture for Bad IP Fragment Offset Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop_trigger_stats_rate#bad_ip_frg_offset VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsRateA#bad_ip_frg_offset}
  */
  readonly badIpFrgOffset?: number;
  /**
  * Enable automatic packet-capture for Bad IP Header Len Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop_trigger_stats_rate#bad_ip_hdrlen VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsRateA#bad_ip_hdrlen}
  */
  readonly badIpHdrlen?: number;
  /**
  * Enable automatic packet-capture for Bad IP Payload Len Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop_trigger_stats_rate#bad_ip_payload_len VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsRateA#bad_ip_payload_len}
  */
  readonly badIpPayloadLen?: number;
  /**
  * Enable automatic packet-capture for Bad IP TTL Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop_trigger_stats_rate#bad_ip_ttl VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsRateA#bad_ip_ttl}
  */
  readonly badIpTtl?: number;
  /**
  * Enable automatic packet-capture for TCP Bad Urgent Offset Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop_trigger_stats_rate#bad_tcp_urg_offset VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsRateA#bad_tcp_urg_offset}
  */
  readonly badTcpUrgOffset?: number;
  /**
  * Enable automatic packet-capture for Bad IP Checksum Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop_trigger_stats_rate#csum VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsRateA#csum}
  */
  readonly csum?: number;
  /**
  * Time in seconds to look for the anomaly, default is 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop_trigger_stats_rate#duration VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsRateA#duration}
  */
  readonly duration?: number;
  /**
  * Enable automatic packet-capture for Empty Fragment Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop_trigger_stats_rate#emp_frg VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsRateA#emp_frg}
  */
  readonly empFrg?: number;
  /**
  * Enable automatic packet-capture for Micro Fragment Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop_trigger_stats_rate#emp_mic_frg VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsRateA#emp_mic_frg}
  */
  readonly empMicFrg?: number;
  /**
  * Enable automatic packet-capture for IPv4 Fragment Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop_trigger_stats_rate#frg VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsRateA#frg}
  */
  readonly frg?: number;
  /**
  * Enable automatic packet-capture for GRE PPTP Error Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop_trigger_stats_rate#gre_pptp_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsRateA#gre_pptp_err}
  */
  readonly grePptpErr?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop_trigger_stats_rate#id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsRateA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable automatic packet-capture for IP-over-IP Tunnel Error Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop_trigger_stats_rate#ipip_tnl_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsRateA#ipip_tnl_err}
  */
  readonly ipipTnlErr?: number;
  /**
  * Enable automatic packet-capture for IP-over-IP Tunnel Mismatch Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop_trigger_stats_rate#ipip_tnl_msmtch VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsRateA#ipip_tnl_msmtch}
  */
  readonly ipipTnlMsmtch?: number;
  /**
  * Enable automatic packet-capture for IPv6 Authentication Header Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop_trigger_stats_rate#ipv6_eh_ah VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsRateA#ipv6_eh_ah}
  */
  readonly ipv6EhAh?: number;
  /**
  * Enable automatic packet-capture for IPv6 Destination Header Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop_trigger_stats_rate#ipv6_eh_dest VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsRateA#ipv6_eh_dest}
  */
  readonly ipv6EhDest?: number;
  /**
  * Enable automatic packet-capture for IPv6 ESP Header Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop_trigger_stats_rate#ipv6_eh_esp VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsRateA#ipv6_eh_esp}
  */
  readonly ipv6EhEsp?: number;
  /**
  * Enable automatic packet-capture for IPv6 Fragmentation Header Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop_trigger_stats_rate#ipv6_eh_frag VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsRateA#ipv6_eh_frag}
  */
  readonly ipv6EhFrag?: number;
  /**
  * Enable automatic packet-capture for IPv6 Hop by Hop Header Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop_trigger_stats_rate#ipv6_eh_hbh VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsRateA#ipv6_eh_hbh}
  */
  readonly ipv6EhHbh?: number;
  /**
  * Enable automatic packet-capture for IPv6 Malformed Extension Header Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop_trigger_stats_rate#ipv6_eh_malformed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsRateA#ipv6_eh_malformed}
  */
  readonly ipv6EhMalformed?: number;
  /**
  * Enable automatic packet-capture for IPv6 Mobility Header Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop_trigger_stats_rate#ipv6_eh_mobility VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsRateA#ipv6_eh_mobility}
  */
  readonly ipv6EhMobility?: number;
  /**
  * Enable automatic packet-capture for IPv6 No Next Header Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop_trigger_stats_rate#ipv6_eh_none VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsRateA#ipv6_eh_none}
  */
  readonly ipv6EhNone?: number;
  /**
  * Enable automatic packet-capture for IPv6 Unknown Extension Header Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop_trigger_stats_rate#ipv6_eh_other VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsRateA#ipv6_eh_other}
  */
  readonly ipv6EhOther?: number;
  /**
  * Enable automatic packet-capture for IPv6 Routing Header Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop_trigger_stats_rate#ipv6_eh_routing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsRateA#ipv6_eh_routing}
  */
  readonly ipv6EhRouting?: number;
  /**
  * Enable automatic packet-capture for Land Attack Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop_trigger_stats_rate#land VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsRateA#land}
  */
  readonly land?: number;
  /**
  * Enable automatic packet-capture for No IP Payload drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop_trigger_stats_rate#no_ip_payload VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsRateA#no_ip_payload}
  */
  readonly noIpPayload?: number;
  /**
  * Enable automatic packet-capture for GRE Tunnel Error Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop_trigger_stats_rate#nvgre_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsRateA#nvgre_err}
  */
  readonly nvgreErr?: number;
  /**
  * Enable automatic packet-capture for IPv4 Options Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop_trigger_stats_rate#opt VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsRateA#opt}
  */
  readonly opt?: number;
  /**
  * Enable automatic packet-capture for Oversize IP Payload Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop_trigger_stats_rate#over_ip_payload VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsRateA#over_ip_payload}
  */
  readonly overIpPayload?: number;
  /**
  * Enable automatic packet-capture for ICMP Ping of Death Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop_trigger_stats_rate#pod VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsRateA#pod}
  */
  readonly pod?: number;
  /**
  * Enable automatic packet-capture for Runt IP Header Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop_trigger_stats_rate#runt_ip_hdr VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsRateA#runt_ip_hdr}
  */
  readonly runtIpHdr?: number;
  /**
  * Enable automatic packet-capture for Runt TCP/UDP Header Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop_trigger_stats_rate#runt_tcp_udp_hdr VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsRateA#runt_tcp_udp_hdr}
  */
  readonly runtTcpUdpHdr?: number;
  /**
  * Enable automatic packet-capture for TCP Bad Checksum Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop_trigger_stats_rate#tcp_bad_csum VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsRateA#tcp_bad_csum}
  */
  readonly tcpBadCsum?: number;
  /**
  * Enable automatic packet-capture for TCP Bad IP Length Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop_trigger_stats_rate#tcp_bad_iplen VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsRateA#tcp_bad_iplen}
  */
  readonly tcpBadIplen?: number;
  /**
  * Enable automatic packet-capture for TCP Fragmented Header Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop_trigger_stats_rate#tcp_frg_hdr VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsRateA#tcp_frg_hdr}
  */
  readonly tcpFrgHdr?: number;
  /**
  * Enable automatic packet-capture for TCP Null Flags Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop_trigger_stats_rate#tcp_null_frg VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsRateA#tcp_null_frg}
  */
  readonly tcpNullFrg?: number;
  /**
  * Enable automatic packet-capture for TCP Null Scan Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop_trigger_stats_rate#tcp_null_scan VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsRateA#tcp_null_scan}
  */
  readonly tcpNullScan?: number;
  /**
  * Enable automatic packet-capture for TCP Option Error Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop_trigger_stats_rate#tcp_opt_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsRateA#tcp_opt_err}
  */
  readonly tcpOptErr?: number;
  /**
  * Enable automatic packet-capture for TCP Short Header Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop_trigger_stats_rate#tcp_sht_hdr VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsRateA#tcp_sht_hdr}
  */
  readonly tcpShtHdr?: number;
  /**
  * Enable automatic packet-capture for TCP Syn and Fin Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop_trigger_stats_rate#tcp_syn_fin VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsRateA#tcp_syn_fin}
  */
  readonly tcpSynFin?: number;
  /**
  * Enable automatic packet-capture for TCP Syn Fragment Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop_trigger_stats_rate#tcp_syn_frg VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsRateA#tcp_syn_frg}
  */
  readonly tcpSynFrg?: number;
  /**
  * Enable automatic packet-capture for TCP UDP Zero Port Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop_trigger_stats_rate#tcp_udp_zero_port VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsRateA#tcp_udp_zero_port}
  */
  readonly tcpUdpZeroPort?: number;
  /**
  * Enable automatic packet-capture for TCP XMAS Flags Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop_trigger_stats_rate#tcp_xmas VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsRateA#tcp_xmas}
  */
  readonly tcpXmas?: number;
  /**
  * Enable automatic packet-capture for TCP XMAS Scan Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop_trigger_stats_rate#tcp_xmas_scan VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsRateA#tcp_xmas_scan}
  */
  readonly tcpXmasScan?: number;
  /**
  * Template_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop_trigger_stats_rate#template_name VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsRateA#template_name}
  */
  readonly templateName: string;
  /**
  * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop_trigger_stats_rate#threshold_exceeded_by VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsRateA#threshold_exceeded_by}
  */
  readonly thresholdExceededBy?: number;
  /**
  * Enable automatic packet-capture for UDP Bad Checksum Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop_trigger_stats_rate#udp_bad_csum VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsRateA#udp_bad_csum}
  */
  readonly udpBadCsum?: number;
  /**
  * Enable automatic packet-capture for UDP Bad Length Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop_trigger_stats_rate#udp_bad_len VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsRateA#udp_bad_len}
  */
  readonly udpBadLen?: number;
  /**
  * Enable automatic packet-capture for UDP Kerberos Fragment Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop_trigger_stats_rate#udp_kerb_frg VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsRateA#udp_kerb_frg}
  */
  readonly udpKerbFrg?: number;
  /**
  * Enable automatic packet-capture for UDP Port Loopback Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop_trigger_stats_rate#udp_port_lb VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsRateA#udp_port_lb}
  */
  readonly udpPortLb?: number;
  /**
  * Enable automatic packet-capture for UDP Short Header Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop_trigger_stats_rate#udp_srt_hdr VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsRateA#udp_srt_hdr}
  */
  readonly udpSrtHdr?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop_trigger_stats_rate#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsRateA#uuid}
  */
  readonly uuid?: string;
  /**
  * Enable automatic packet-capture for VXLAN Tunnel Error Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop_trigger_stats_rate#vxlan_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsRateA#vxlan_err}
  */
  readonly vxlanErr?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop_trigger_stats_rate thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop_trigger_stats_rate}
*/
export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsRateA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop_trigger_stats_rate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsRateA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsRateA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsRateA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop_trigger_stats_rate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsRateA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop_trigger_stats_rate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop_trigger_stats_rate thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop_trigger_stats_rate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsRateAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeIpAnomalyDropTriggerStatsRateAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_ip_anomaly_drop_trigger_stats_rate',
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
    this._badIpFlg = config.badIpFlg;
    this._badIpFrgOffset = config.badIpFrgOffset;
    this._badIpHdrlen = config.badIpHdrlen;
    this._badIpPayloadLen = config.badIpPayloadLen;
    this._badIpTtl = config.badIpTtl;
    this._badTcpUrgOffset = config.badTcpUrgOffset;
    this._csum = config.csum;
    this._duration = config.duration;
    this._empFrg = config.empFrg;
    this._empMicFrg = config.empMicFrg;
    this._frg = config.frg;
    this._grePptpErr = config.grePptpErr;
    this._id = config.id;
    this._ipipTnlErr = config.ipipTnlErr;
    this._ipipTnlMsmtch = config.ipipTnlMsmtch;
    this._ipv6EhAh = config.ipv6EhAh;
    this._ipv6EhDest = config.ipv6EhDest;
    this._ipv6EhEsp = config.ipv6EhEsp;
    this._ipv6EhFrag = config.ipv6EhFrag;
    this._ipv6EhHbh = config.ipv6EhHbh;
    this._ipv6EhMalformed = config.ipv6EhMalformed;
    this._ipv6EhMobility = config.ipv6EhMobility;
    this._ipv6EhNone = config.ipv6EhNone;
    this._ipv6EhOther = config.ipv6EhOther;
    this._ipv6EhRouting = config.ipv6EhRouting;
    this._land = config.land;
    this._noIpPayload = config.noIpPayload;
    this._nvgreErr = config.nvgreErr;
    this._opt = config.opt;
    this._overIpPayload = config.overIpPayload;
    this._pod = config.pod;
    this._runtIpHdr = config.runtIpHdr;
    this._runtTcpUdpHdr = config.runtTcpUdpHdr;
    this._tcpBadCsum = config.tcpBadCsum;
    this._tcpBadIplen = config.tcpBadIplen;
    this._tcpFrgHdr = config.tcpFrgHdr;
    this._tcpNullFrg = config.tcpNullFrg;
    this._tcpNullScan = config.tcpNullScan;
    this._tcpOptErr = config.tcpOptErr;
    this._tcpShtHdr = config.tcpShtHdr;
    this._tcpSynFin = config.tcpSynFin;
    this._tcpSynFrg = config.tcpSynFrg;
    this._tcpUdpZeroPort = config.tcpUdpZeroPort;
    this._tcpXmas = config.tcpXmas;
    this._tcpXmasScan = config.tcpXmasScan;
    this._templateName = config.templateName;
    this._thresholdExceededBy = config.thresholdExceededBy;
    this._udpBadCsum = config.udpBadCsum;
    this._udpBadLen = config.udpBadLen;
    this._udpKerbFrg = config.udpKerbFrg;
    this._udpPortLb = config.udpPortLb;
    this._udpSrtHdr = config.udpSrtHdr;
    this._uuid = config.uuid;
    this._vxlanErr = config.vxlanErr;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // tcp_udp_zero_port - computed: false, optional: true, required: false
  private _tcpUdpZeroPort?: number; 
  public get tcpUdpZeroPort() {
    return this.getNumberAttribute('tcp_udp_zero_port');
  }
  public set tcpUdpZeroPort(value: number) {
    this._tcpUdpZeroPort = value;
  }
  public resetTcpUdpZeroPort() {
    this._tcpUdpZeroPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpUdpZeroPortInput() {
    return this._tcpUdpZeroPort;
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

  // template_name - computed: false, optional: false, required: true
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bad_ip_flg: cdktf.numberToTerraform(this._badIpFlg),
      bad_ip_frg_offset: cdktf.numberToTerraform(this._badIpFrgOffset),
      bad_ip_hdrlen: cdktf.numberToTerraform(this._badIpHdrlen),
      bad_ip_payload_len: cdktf.numberToTerraform(this._badIpPayloadLen),
      bad_ip_ttl: cdktf.numberToTerraform(this._badIpTtl),
      bad_tcp_urg_offset: cdktf.numberToTerraform(this._badTcpUrgOffset),
      csum: cdktf.numberToTerraform(this._csum),
      duration: cdktf.numberToTerraform(this._duration),
      emp_frg: cdktf.numberToTerraform(this._empFrg),
      emp_mic_frg: cdktf.numberToTerraform(this._empMicFrg),
      frg: cdktf.numberToTerraform(this._frg),
      gre_pptp_err: cdktf.numberToTerraform(this._grePptpErr),
      id: cdktf.stringToTerraform(this._id),
      ipip_tnl_err: cdktf.numberToTerraform(this._ipipTnlErr),
      ipip_tnl_msmtch: cdktf.numberToTerraform(this._ipipTnlMsmtch),
      ipv6_eh_ah: cdktf.numberToTerraform(this._ipv6EhAh),
      ipv6_eh_dest: cdktf.numberToTerraform(this._ipv6EhDest),
      ipv6_eh_esp: cdktf.numberToTerraform(this._ipv6EhEsp),
      ipv6_eh_frag: cdktf.numberToTerraform(this._ipv6EhFrag),
      ipv6_eh_hbh: cdktf.numberToTerraform(this._ipv6EhHbh),
      ipv6_eh_malformed: cdktf.numberToTerraform(this._ipv6EhMalformed),
      ipv6_eh_mobility: cdktf.numberToTerraform(this._ipv6EhMobility),
      ipv6_eh_none: cdktf.numberToTerraform(this._ipv6EhNone),
      ipv6_eh_other: cdktf.numberToTerraform(this._ipv6EhOther),
      ipv6_eh_routing: cdktf.numberToTerraform(this._ipv6EhRouting),
      land: cdktf.numberToTerraform(this._land),
      no_ip_payload: cdktf.numberToTerraform(this._noIpPayload),
      nvgre_err: cdktf.numberToTerraform(this._nvgreErr),
      opt: cdktf.numberToTerraform(this._opt),
      over_ip_payload: cdktf.numberToTerraform(this._overIpPayload),
      pod: cdktf.numberToTerraform(this._pod),
      runt_ip_hdr: cdktf.numberToTerraform(this._runtIpHdr),
      runt_tcp_udp_hdr: cdktf.numberToTerraform(this._runtTcpUdpHdr),
      tcp_bad_csum: cdktf.numberToTerraform(this._tcpBadCsum),
      tcp_bad_iplen: cdktf.numberToTerraform(this._tcpBadIplen),
      tcp_frg_hdr: cdktf.numberToTerraform(this._tcpFrgHdr),
      tcp_null_frg: cdktf.numberToTerraform(this._tcpNullFrg),
      tcp_null_scan: cdktf.numberToTerraform(this._tcpNullScan),
      tcp_opt_err: cdktf.numberToTerraform(this._tcpOptErr),
      tcp_sht_hdr: cdktf.numberToTerraform(this._tcpShtHdr),
      tcp_syn_fin: cdktf.numberToTerraform(this._tcpSynFin),
      tcp_syn_frg: cdktf.numberToTerraform(this._tcpSynFrg),
      tcp_udp_zero_port: cdktf.numberToTerraform(this._tcpUdpZeroPort),
      tcp_xmas: cdktf.numberToTerraform(this._tcpXmas),
      tcp_xmas_scan: cdktf.numberToTerraform(this._tcpXmasScan),
      template_name: cdktf.stringToTerraform(this._templateName),
      threshold_exceeded_by: cdktf.numberToTerraform(this._thresholdExceededBy),
      udp_bad_csum: cdktf.numberToTerraform(this._udpBadCsum),
      udp_bad_len: cdktf.numberToTerraform(this._udpBadLen),
      udp_kerb_frg: cdktf.numberToTerraform(this._udpKerbFrg),
      udp_port_lb: cdktf.numberToTerraform(this._udpPortLb),
      udp_srt_hdr: cdktf.numberToTerraform(this._udpSrtHdr),
      uuid: cdktf.stringToTerraform(this._uuid),
      vxlan_err: cdktf.numberToTerraform(this._vxlanErr),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bad_ip_flg: {
        value: cdktf.numberToHclTerraform(this._badIpFlg),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bad_ip_frg_offset: {
        value: cdktf.numberToHclTerraform(this._badIpFrgOffset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bad_ip_hdrlen: {
        value: cdktf.numberToHclTerraform(this._badIpHdrlen),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bad_ip_payload_len: {
        value: cdktf.numberToHclTerraform(this._badIpPayloadLen),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bad_ip_ttl: {
        value: cdktf.numberToHclTerraform(this._badIpTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bad_tcp_urg_offset: {
        value: cdktf.numberToHclTerraform(this._badTcpUrgOffset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      csum: {
        value: cdktf.numberToHclTerraform(this._csum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      duration: {
        value: cdktf.numberToHclTerraform(this._duration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      emp_frg: {
        value: cdktf.numberToHclTerraform(this._empFrg),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      emp_mic_frg: {
        value: cdktf.numberToHclTerraform(this._empMicFrg),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      frg: {
        value: cdktf.numberToHclTerraform(this._frg),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gre_pptp_err: {
        value: cdktf.numberToHclTerraform(this._grePptpErr),
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
      ipip_tnl_err: {
        value: cdktf.numberToHclTerraform(this._ipipTnlErr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipip_tnl_msmtch: {
        value: cdktf.numberToHclTerraform(this._ipipTnlMsmtch),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv6_eh_ah: {
        value: cdktf.numberToHclTerraform(this._ipv6EhAh),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv6_eh_dest: {
        value: cdktf.numberToHclTerraform(this._ipv6EhDest),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv6_eh_esp: {
        value: cdktf.numberToHclTerraform(this._ipv6EhEsp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv6_eh_frag: {
        value: cdktf.numberToHclTerraform(this._ipv6EhFrag),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv6_eh_hbh: {
        value: cdktf.numberToHclTerraform(this._ipv6EhHbh),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv6_eh_malformed: {
        value: cdktf.numberToHclTerraform(this._ipv6EhMalformed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv6_eh_mobility: {
        value: cdktf.numberToHclTerraform(this._ipv6EhMobility),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv6_eh_none: {
        value: cdktf.numberToHclTerraform(this._ipv6EhNone),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv6_eh_other: {
        value: cdktf.numberToHclTerraform(this._ipv6EhOther),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv6_eh_routing: {
        value: cdktf.numberToHclTerraform(this._ipv6EhRouting),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      land: {
        value: cdktf.numberToHclTerraform(this._land),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      no_ip_payload: {
        value: cdktf.numberToHclTerraform(this._noIpPayload),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nvgre_err: {
        value: cdktf.numberToHclTerraform(this._nvgreErr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      opt: {
        value: cdktf.numberToHclTerraform(this._opt),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      over_ip_payload: {
        value: cdktf.numberToHclTerraform(this._overIpPayload),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pod: {
        value: cdktf.numberToHclTerraform(this._pod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      runt_ip_hdr: {
        value: cdktf.numberToHclTerraform(this._runtIpHdr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      runt_tcp_udp_hdr: {
        value: cdktf.numberToHclTerraform(this._runtTcpUdpHdr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_bad_csum: {
        value: cdktf.numberToHclTerraform(this._tcpBadCsum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_bad_iplen: {
        value: cdktf.numberToHclTerraform(this._tcpBadIplen),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_frg_hdr: {
        value: cdktf.numberToHclTerraform(this._tcpFrgHdr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_null_frg: {
        value: cdktf.numberToHclTerraform(this._tcpNullFrg),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_null_scan: {
        value: cdktf.numberToHclTerraform(this._tcpNullScan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_opt_err: {
        value: cdktf.numberToHclTerraform(this._tcpOptErr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_sht_hdr: {
        value: cdktf.numberToHclTerraform(this._tcpShtHdr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_syn_fin: {
        value: cdktf.numberToHclTerraform(this._tcpSynFin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_syn_frg: {
        value: cdktf.numberToHclTerraform(this._tcpSynFrg),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_udp_zero_port: {
        value: cdktf.numberToHclTerraform(this._tcpUdpZeroPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_xmas: {
        value: cdktf.numberToHclTerraform(this._tcpXmas),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_xmas_scan: {
        value: cdktf.numberToHclTerraform(this._tcpXmasScan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      template_name: {
        value: cdktf.stringToHclTerraform(this._templateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      threshold_exceeded_by: {
        value: cdktf.numberToHclTerraform(this._thresholdExceededBy),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      udp_bad_csum: {
        value: cdktf.numberToHclTerraform(this._udpBadCsum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      udp_bad_len: {
        value: cdktf.numberToHclTerraform(this._udpBadLen),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      udp_kerb_frg: {
        value: cdktf.numberToHclTerraform(this._udpKerbFrg),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      udp_port_lb: {
        value: cdktf.numberToHclTerraform(this._udpPortLb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      udp_srt_hdr: {
        value: cdktf.numberToHclTerraform(this._udpSrtHdr),
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
      vxlan_err: {
        value: cdktf.numberToHclTerraform(this._vxlanErr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
