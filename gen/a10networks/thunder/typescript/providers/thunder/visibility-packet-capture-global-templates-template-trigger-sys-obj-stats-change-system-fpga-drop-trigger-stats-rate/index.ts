// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_fpga_drop_trigger_stats_rate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemFpgaDropTriggerStatsRateAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable automatic packet-capture for Total Bad IP csum Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_fpga_drop_trigger_stats_rate#bad_ip_chksum_drop VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemFpgaDropTriggerStatsRateA#bad_ip_chksum_drop}
  */
  readonly badIpChksumDrop?: number;
  /**
  * Enable automatic packet-capture for Total Bad IP Flags Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_fpga_drop_trigger_stats_rate#bad_ip_flags_drop VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemFpgaDropTriggerStatsRateA#bad_ip_flags_drop}
  */
  readonly badIpFlagsDrop?: number;
  /**
  * Enable automatic packet-capture for Total Bad IP frag off Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_fpga_drop_trigger_stats_rate#bad_ip_frag_offset VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemFpgaDropTriggerStatsRateA#bad_ip_frag_offset}
  */
  readonly badIpFragOffset?: number;
  /**
  * Enable automatic packet-capture for Total Bad IP hdr len Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_fpga_drop_trigger_stats_rate#bad_ip_hdr_len VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemFpgaDropTriggerStatsRateA#bad_ip_hdr_len}
  */
  readonly badIpHdrLen?: number;
  /**
  * Enable automatic packet-capture for Total Bad IP PL len Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_fpga_drop_trigger_stats_rate#bad_ip_payload_len VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemFpgaDropTriggerStatsRateA#bad_ip_payload_len}
  */
  readonly badIpPayloadLen?: number;
  /**
  * Enable automatic packet-capture for Total Bad IP TTL Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_fpga_drop_trigger_stats_rate#bad_ip_ttl_drop VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemFpgaDropTriggerStatsRateA#bad_ip_ttl_drop}
  */
  readonly badIpTtlDrop?: number;
  /**
  * Time in seconds to look for the anomaly, default is 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_fpga_drop_trigger_stats_rate#duration VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemFpgaDropTriggerStatsRateA#duration}
  */
  readonly duration?: number;
  /**
  * Enable automatic packet-capture for Total Empty frag Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_fpga_drop_trigger_stats_rate#empty_frag_drop VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemFpgaDropTriggerStatsRateA#empty_frag_drop}
  */
  readonly emptyFragDrop?: number;
  /**
  * Enable automatic packet-capture for Total FCS Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_fpga_drop_trigger_stats_rate#fcs_drop VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemFpgaDropTriggerStatsRateA#fcs_drop}
  */
  readonly fcsDrop?: number;
  /**
  * Enable automatic packet-capture for Total HRX Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_fpga_drop_trigger_stats_rate#hrx_drop VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemFpgaDropTriggerStatsRateA#hrx_drop}
  */
  readonly hrxDrop?: number;
  /**
  * Enable automatic packet-capture for Total ICMP POD Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_fpga_drop_trigger_stats_rate#icmp_pod_drop VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemFpgaDropTriggerStatsRateA#icmp_pod_drop}
  */
  readonly icmpPodDrop?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_fpga_drop_trigger_stats_rate#id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemFpgaDropTriggerStatsRateA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable automatic packet-capture for Total IP frag Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_fpga_drop_trigger_stats_rate#ipv4_frag VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemFpgaDropTriggerStatsRateA#ipv4_frag}
  */
  readonly ipv4Frag?: number;
  /**
  * Enable automatic packet-capture for Total IPv4 opt Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_fpga_drop_trigger_stats_rate#ipv4_opt_drop VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemFpgaDropTriggerStatsRateA#ipv4_opt_drop}
  */
  readonly ipv4OptDrop?: number;
  /**
  * Enable automatic packet-capture for Total LAND Attack Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_fpga_drop_trigger_stats_rate#land_drop VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemFpgaDropTriggerStatsRateA#land_drop}
  */
  readonly landDrop?: number;
  /**
  * Enable automatic packet-capture for Total Micro frag Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_fpga_drop_trigger_stats_rate#mic_frag_drop VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemFpgaDropTriggerStatsRateA#mic_frag_drop}
  */
  readonly micFragDrop?: number;
  /**
  * Enable automatic packet-capture for Total MRX Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_fpga_drop_trigger_stats_rate#mrx_drop VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemFpgaDropTriggerStatsRateA#mrx_drop}
  */
  readonly mrxDrop?: number;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_fpga_drop_trigger_stats_rate#name VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemFpgaDropTriggerStatsRateA#name}
  */
  readonly name: string;
  /**
  * Enable automatic packet-capture for Total No IP Payload Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_fpga_drop_trigger_stats_rate#no_ip_payload_drop VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemFpgaDropTriggerStatsRateA#no_ip_payload_drop}
  */
  readonly noIpPayloadDrop?: number;
  /**
  * Enable automatic packet-capture for Total Oversize IP PL Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_fpga_drop_trigger_stats_rate#oversize_ip_payload VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemFpgaDropTriggerStatsRateA#oversize_ip_payload}
  */
  readonly oversizeIpPayload?: number;
  /**
  * Enable automatic packet-capture for Total Runt IP hdr Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_fpga_drop_trigger_stats_rate#runt_ip_hdr VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemFpgaDropTriggerStatsRateA#runt_ip_hdr}
  */
  readonly runtIpHdr?: number;
  /**
  * Enable automatic packet-capture for Total Runt TCPUDP hdr Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_fpga_drop_trigger_stats_rate#runt_tcpudp_hdr VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemFpgaDropTriggerStatsRateA#runt_tcpudp_hdr}
  */
  readonly runtTcpudpHdr?: number;
  /**
  * Enable automatic packet-capture for Total Size Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_fpga_drop_trigger_stats_rate#siz_drop VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemFpgaDropTriggerStatsRateA#siz_drop}
  */
  readonly sizDrop?: number;
  /**
  * Enable automatic packet-capture for Total TCP bad csum Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_fpga_drop_trigger_stats_rate#tcp_bad_chksum VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemFpgaDropTriggerStatsRateA#tcp_bad_chksum}
  */
  readonly tcpBadChksum?: number;
  /**
  * Enable automatic packet-capture for Total TCP Bad IP Len Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_fpga_drop_trigger_stats_rate#tcp_bad_ip_len VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemFpgaDropTriggerStatsRateA#tcp_bad_ip_len}
  */
  readonly tcpBadIpLen?: number;
  /**
  * Enable automatic packet-capture for Total TCP bad urg off Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_fpga_drop_trigger_stats_rate#tcp_bad_urg_offet VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemFpgaDropTriggerStatsRateA#tcp_bad_urg_offet}
  */
  readonly tcpBadUrgOffet?: number;
  /**
  * Enable automatic packet-capture for Total TCP SYN&FIN Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_fpga_drop_trigger_stats_rate#tcp_fin_sin VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemFpgaDropTriggerStatsRateA#tcp_fin_sin}
  */
  readonly tcpFinSin?: number;
  /**
  * Enable automatic packet-capture for Total TCP frag header Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_fpga_drop_trigger_stats_rate#tcp_frag_hdr VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemFpgaDropTriggerStatsRateA#tcp_frag_hdr}
  */
  readonly tcpFragHdr?: number;
  /**
  * Enable automatic packet-capture for Total TCP null flags Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_fpga_drop_trigger_stats_rate#tcp_null_flags VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemFpgaDropTriggerStatsRateA#tcp_null_flags}
  */
  readonly tcpNullFlags?: number;
  /**
  * Enable automatic packet-capture for Total TCP null scan Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_fpga_drop_trigger_stats_rate#tcp_null_scan VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemFpgaDropTriggerStatsRateA#tcp_null_scan}
  */
  readonly tcpNullScan?: number;
  /**
  * Enable automatic packet-capture for Total TCP short hdr Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_fpga_drop_trigger_stats_rate#tcp_short_hdr VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemFpgaDropTriggerStatsRateA#tcp_short_hdr}
  */
  readonly tcpShortHdr?: number;
  /**
  * Enable automatic packet-capture for Total TCP SYN frag Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_fpga_drop_trigger_stats_rate#tcp_syn_frag VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemFpgaDropTriggerStatsRateA#tcp_syn_frag}
  */
  readonly tcpSynFrag?: number;
  /**
  * Enable automatic packet-capture for Total TCP XMAS FLAGS Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_fpga_drop_trigger_stats_rate#tcp_xmas_flags VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemFpgaDropTriggerStatsRateA#tcp_xmas_flags}
  */
  readonly tcpXmasFlags?: number;
  /**
  * Enable automatic packet-capture for Total TCP XMAS scan Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_fpga_drop_trigger_stats_rate#tcp_xmas_scan VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemFpgaDropTriggerStatsRateA#tcp_xmas_scan}
  */
  readonly tcpXmasScan?: number;
  /**
  * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_fpga_drop_trigger_stats_rate#threshold_exceeded_by VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemFpgaDropTriggerStatsRateA#threshold_exceeded_by}
  */
  readonly thresholdExceededBy?: number;
  /**
  * Enable automatic packet-capture for Total Tun mismatch Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_fpga_drop_trigger_stats_rate#tun_mismatch VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemFpgaDropTriggerStatsRateA#tun_mismatch}
  */
  readonly tunMismatch?: number;
  /**
  * Enable automatic packet-capture for Total UDP bad csum Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_fpga_drop_trigger_stats_rate#udp_bad_chksum VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemFpgaDropTriggerStatsRateA#udp_bad_chksum}
  */
  readonly udpBadChksum?: number;
  /**
  * Enable automatic packet-capture for Total UDP bad leng Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_fpga_drop_trigger_stats_rate#udp_bad_ip_len VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemFpgaDropTriggerStatsRateA#udp_bad_ip_len}
  */
  readonly udpBadIpLen?: number;
  /**
  * Enable automatic packet-capture for Total UDP KB frag Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_fpga_drop_trigger_stats_rate#udp_kb_frags VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemFpgaDropTriggerStatsRateA#udp_kb_frags}
  */
  readonly udpKbFrags?: number;
  /**
  * Enable automatic packet-capture for Total UDP port LB Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_fpga_drop_trigger_stats_rate#udp_port_lb VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemFpgaDropTriggerStatsRateA#udp_port_lb}
  */
  readonly udpPortLb?: number;
  /**
  * Enable automatic packet-capture for Total UDP short hdr Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_fpga_drop_trigger_stats_rate#udp_short_hdr VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemFpgaDropTriggerStatsRateA#udp_short_hdr}
  */
  readonly udpShortHdr?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_fpga_drop_trigger_stats_rate#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemFpgaDropTriggerStatsRateA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_fpga_drop_trigger_stats_rate thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_fpga_drop_trigger_stats_rate}
*/
export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemFpgaDropTriggerStatsRateA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_fpga_drop_trigger_stats_rate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemFpgaDropTriggerStatsRateA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemFpgaDropTriggerStatsRateA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemFpgaDropTriggerStatsRateA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_fpga_drop_trigger_stats_rate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemFpgaDropTriggerStatsRateA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_fpga_drop_trigger_stats_rate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_fpga_drop_trigger_stats_rate thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_fpga_drop_trigger_stats_rate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemFpgaDropTriggerStatsRateAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemFpgaDropTriggerStatsRateAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_fpga_drop_trigger_stats_rate',
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
    this._badIpChksumDrop = config.badIpChksumDrop;
    this._badIpFlagsDrop = config.badIpFlagsDrop;
    this._badIpFragOffset = config.badIpFragOffset;
    this._badIpHdrLen = config.badIpHdrLen;
    this._badIpPayloadLen = config.badIpPayloadLen;
    this._badIpTtlDrop = config.badIpTtlDrop;
    this._duration = config.duration;
    this._emptyFragDrop = config.emptyFragDrop;
    this._fcsDrop = config.fcsDrop;
    this._hrxDrop = config.hrxDrop;
    this._icmpPodDrop = config.icmpPodDrop;
    this._id = config.id;
    this._ipv4Frag = config.ipv4Frag;
    this._ipv4OptDrop = config.ipv4OptDrop;
    this._landDrop = config.landDrop;
    this._micFragDrop = config.micFragDrop;
    this._mrxDrop = config.mrxDrop;
    this._name = config.name;
    this._noIpPayloadDrop = config.noIpPayloadDrop;
    this._oversizeIpPayload = config.oversizeIpPayload;
    this._runtIpHdr = config.runtIpHdr;
    this._runtTcpudpHdr = config.runtTcpudpHdr;
    this._sizDrop = config.sizDrop;
    this._tcpBadChksum = config.tcpBadChksum;
    this._tcpBadIpLen = config.tcpBadIpLen;
    this._tcpBadUrgOffet = config.tcpBadUrgOffet;
    this._tcpFinSin = config.tcpFinSin;
    this._tcpFragHdr = config.tcpFragHdr;
    this._tcpNullFlags = config.tcpNullFlags;
    this._tcpNullScan = config.tcpNullScan;
    this._tcpShortHdr = config.tcpShortHdr;
    this._tcpSynFrag = config.tcpSynFrag;
    this._tcpXmasFlags = config.tcpXmasFlags;
    this._tcpXmasScan = config.tcpXmasScan;
    this._thresholdExceededBy = config.thresholdExceededBy;
    this._tunMismatch = config.tunMismatch;
    this._udpBadChksum = config.udpBadChksum;
    this._udpBadIpLen = config.udpBadIpLen;
    this._udpKbFrags = config.udpKbFrags;
    this._udpPortLb = config.udpPortLb;
    this._udpShortHdr = config.udpShortHdr;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bad_ip_chksum_drop - computed: false, optional: true, required: false
  private _badIpChksumDrop?: number; 
  public get badIpChksumDrop() {
    return this.getNumberAttribute('bad_ip_chksum_drop');
  }
  public set badIpChksumDrop(value: number) {
    this._badIpChksumDrop = value;
  }
  public resetBadIpChksumDrop() {
    this._badIpChksumDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badIpChksumDropInput() {
    return this._badIpChksumDrop;
  }

  // bad_ip_flags_drop - computed: false, optional: true, required: false
  private _badIpFlagsDrop?: number; 
  public get badIpFlagsDrop() {
    return this.getNumberAttribute('bad_ip_flags_drop');
  }
  public set badIpFlagsDrop(value: number) {
    this._badIpFlagsDrop = value;
  }
  public resetBadIpFlagsDrop() {
    this._badIpFlagsDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badIpFlagsDropInput() {
    return this._badIpFlagsDrop;
  }

  // bad_ip_frag_offset - computed: false, optional: true, required: false
  private _badIpFragOffset?: number; 
  public get badIpFragOffset() {
    return this.getNumberAttribute('bad_ip_frag_offset');
  }
  public set badIpFragOffset(value: number) {
    this._badIpFragOffset = value;
  }
  public resetBadIpFragOffset() {
    this._badIpFragOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badIpFragOffsetInput() {
    return this._badIpFragOffset;
  }

  // bad_ip_hdr_len - computed: false, optional: true, required: false
  private _badIpHdrLen?: number; 
  public get badIpHdrLen() {
    return this.getNumberAttribute('bad_ip_hdr_len');
  }
  public set badIpHdrLen(value: number) {
    this._badIpHdrLen = value;
  }
  public resetBadIpHdrLen() {
    this._badIpHdrLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badIpHdrLenInput() {
    return this._badIpHdrLen;
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

  // bad_ip_ttl_drop - computed: false, optional: true, required: false
  private _badIpTtlDrop?: number; 
  public get badIpTtlDrop() {
    return this.getNumberAttribute('bad_ip_ttl_drop');
  }
  public set badIpTtlDrop(value: number) {
    this._badIpTtlDrop = value;
  }
  public resetBadIpTtlDrop() {
    this._badIpTtlDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badIpTtlDropInput() {
    return this._badIpTtlDrop;
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

  // empty_frag_drop - computed: false, optional: true, required: false
  private _emptyFragDrop?: number; 
  public get emptyFragDrop() {
    return this.getNumberAttribute('empty_frag_drop');
  }
  public set emptyFragDrop(value: number) {
    this._emptyFragDrop = value;
  }
  public resetEmptyFragDrop() {
    this._emptyFragDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emptyFragDropInput() {
    return this._emptyFragDrop;
  }

  // fcs_drop - computed: false, optional: true, required: false
  private _fcsDrop?: number; 
  public get fcsDrop() {
    return this.getNumberAttribute('fcs_drop');
  }
  public set fcsDrop(value: number) {
    this._fcsDrop = value;
  }
  public resetFcsDrop() {
    this._fcsDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fcsDropInput() {
    return this._fcsDrop;
  }

  // hrx_drop - computed: false, optional: true, required: false
  private _hrxDrop?: number; 
  public get hrxDrop() {
    return this.getNumberAttribute('hrx_drop');
  }
  public set hrxDrop(value: number) {
    this._hrxDrop = value;
  }
  public resetHrxDrop() {
    this._hrxDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hrxDropInput() {
    return this._hrxDrop;
  }

  // icmp_pod_drop - computed: false, optional: true, required: false
  private _icmpPodDrop?: number; 
  public get icmpPodDrop() {
    return this.getNumberAttribute('icmp_pod_drop');
  }
  public set icmpPodDrop(value: number) {
    this._icmpPodDrop = value;
  }
  public resetIcmpPodDrop() {
    this._icmpPodDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpPodDropInput() {
    return this._icmpPodDrop;
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

  // ipv4_frag - computed: false, optional: true, required: false
  private _ipv4Frag?: number; 
  public get ipv4Frag() {
    return this.getNumberAttribute('ipv4_frag');
  }
  public set ipv4Frag(value: number) {
    this._ipv4Frag = value;
  }
  public resetIpv4Frag() {
    this._ipv4Frag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4FragInput() {
    return this._ipv4Frag;
  }

  // ipv4_opt_drop - computed: false, optional: true, required: false
  private _ipv4OptDrop?: number; 
  public get ipv4OptDrop() {
    return this.getNumberAttribute('ipv4_opt_drop');
  }
  public set ipv4OptDrop(value: number) {
    this._ipv4OptDrop = value;
  }
  public resetIpv4OptDrop() {
    this._ipv4OptDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4OptDropInput() {
    return this._ipv4OptDrop;
  }

  // land_drop - computed: false, optional: true, required: false
  private _landDrop?: number; 
  public get landDrop() {
    return this.getNumberAttribute('land_drop');
  }
  public set landDrop(value: number) {
    this._landDrop = value;
  }
  public resetLandDrop() {
    this._landDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get landDropInput() {
    return this._landDrop;
  }

  // mic_frag_drop - computed: false, optional: true, required: false
  private _micFragDrop?: number; 
  public get micFragDrop() {
    return this.getNumberAttribute('mic_frag_drop');
  }
  public set micFragDrop(value: number) {
    this._micFragDrop = value;
  }
  public resetMicFragDrop() {
    this._micFragDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get micFragDropInput() {
    return this._micFragDrop;
  }

  // mrx_drop - computed: false, optional: true, required: false
  private _mrxDrop?: number; 
  public get mrxDrop() {
    return this.getNumberAttribute('mrx_drop');
  }
  public set mrxDrop(value: number) {
    this._mrxDrop = value;
  }
  public resetMrxDrop() {
    this._mrxDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mrxDropInput() {
    return this._mrxDrop;
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

  // no_ip_payload_drop - computed: false, optional: true, required: false
  private _noIpPayloadDrop?: number; 
  public get noIpPayloadDrop() {
    return this.getNumberAttribute('no_ip_payload_drop');
  }
  public set noIpPayloadDrop(value: number) {
    this._noIpPayloadDrop = value;
  }
  public resetNoIpPayloadDrop() {
    this._noIpPayloadDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noIpPayloadDropInput() {
    return this._noIpPayloadDrop;
  }

  // oversize_ip_payload - computed: false, optional: true, required: false
  private _oversizeIpPayload?: number; 
  public get oversizeIpPayload() {
    return this.getNumberAttribute('oversize_ip_payload');
  }
  public set oversizeIpPayload(value: number) {
    this._oversizeIpPayload = value;
  }
  public resetOversizeIpPayload() {
    this._oversizeIpPayload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oversizeIpPayloadInput() {
    return this._oversizeIpPayload;
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

  // runt_tcpudp_hdr - computed: false, optional: true, required: false
  private _runtTcpudpHdr?: number; 
  public get runtTcpudpHdr() {
    return this.getNumberAttribute('runt_tcpudp_hdr');
  }
  public set runtTcpudpHdr(value: number) {
    this._runtTcpudpHdr = value;
  }
  public resetRuntTcpudpHdr() {
    this._runtTcpudpHdr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtTcpudpHdrInput() {
    return this._runtTcpudpHdr;
  }

  // siz_drop - computed: false, optional: true, required: false
  private _sizDrop?: number; 
  public get sizDrop() {
    return this.getNumberAttribute('siz_drop');
  }
  public set sizDrop(value: number) {
    this._sizDrop = value;
  }
  public resetSizDrop() {
    this._sizDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizDropInput() {
    return this._sizDrop;
  }

  // tcp_bad_chksum - computed: false, optional: true, required: false
  private _tcpBadChksum?: number; 
  public get tcpBadChksum() {
    return this.getNumberAttribute('tcp_bad_chksum');
  }
  public set tcpBadChksum(value: number) {
    this._tcpBadChksum = value;
  }
  public resetTcpBadChksum() {
    this._tcpBadChksum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpBadChksumInput() {
    return this._tcpBadChksum;
  }

  // tcp_bad_ip_len - computed: false, optional: true, required: false
  private _tcpBadIpLen?: number; 
  public get tcpBadIpLen() {
    return this.getNumberAttribute('tcp_bad_ip_len');
  }
  public set tcpBadIpLen(value: number) {
    this._tcpBadIpLen = value;
  }
  public resetTcpBadIpLen() {
    this._tcpBadIpLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpBadIpLenInput() {
    return this._tcpBadIpLen;
  }

  // tcp_bad_urg_offet - computed: false, optional: true, required: false
  private _tcpBadUrgOffet?: number; 
  public get tcpBadUrgOffet() {
    return this.getNumberAttribute('tcp_bad_urg_offet');
  }
  public set tcpBadUrgOffet(value: number) {
    this._tcpBadUrgOffet = value;
  }
  public resetTcpBadUrgOffet() {
    this._tcpBadUrgOffet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpBadUrgOffetInput() {
    return this._tcpBadUrgOffet;
  }

  // tcp_fin_sin - computed: false, optional: true, required: false
  private _tcpFinSin?: number; 
  public get tcpFinSin() {
    return this.getNumberAttribute('tcp_fin_sin');
  }
  public set tcpFinSin(value: number) {
    this._tcpFinSin = value;
  }
  public resetTcpFinSin() {
    this._tcpFinSin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFinSinInput() {
    return this._tcpFinSin;
  }

  // tcp_frag_hdr - computed: false, optional: true, required: false
  private _tcpFragHdr?: number; 
  public get tcpFragHdr() {
    return this.getNumberAttribute('tcp_frag_hdr');
  }
  public set tcpFragHdr(value: number) {
    this._tcpFragHdr = value;
  }
  public resetTcpFragHdr() {
    this._tcpFragHdr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFragHdrInput() {
    return this._tcpFragHdr;
  }

  // tcp_null_flags - computed: false, optional: true, required: false
  private _tcpNullFlags?: number; 
  public get tcpNullFlags() {
    return this.getNumberAttribute('tcp_null_flags');
  }
  public set tcpNullFlags(value: number) {
    this._tcpNullFlags = value;
  }
  public resetTcpNullFlags() {
    this._tcpNullFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpNullFlagsInput() {
    return this._tcpNullFlags;
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

  // tcp_short_hdr - computed: false, optional: true, required: false
  private _tcpShortHdr?: number; 
  public get tcpShortHdr() {
    return this.getNumberAttribute('tcp_short_hdr');
  }
  public set tcpShortHdr(value: number) {
    this._tcpShortHdr = value;
  }
  public resetTcpShortHdr() {
    this._tcpShortHdr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpShortHdrInput() {
    return this._tcpShortHdr;
  }

  // tcp_syn_frag - computed: false, optional: true, required: false
  private _tcpSynFrag?: number; 
  public get tcpSynFrag() {
    return this.getNumberAttribute('tcp_syn_frag');
  }
  public set tcpSynFrag(value: number) {
    this._tcpSynFrag = value;
  }
  public resetTcpSynFrag() {
    this._tcpSynFrag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSynFragInput() {
    return this._tcpSynFrag;
  }

  // tcp_xmas_flags - computed: false, optional: true, required: false
  private _tcpXmasFlags?: number; 
  public get tcpXmasFlags() {
    return this.getNumberAttribute('tcp_xmas_flags');
  }
  public set tcpXmasFlags(value: number) {
    this._tcpXmasFlags = value;
  }
  public resetTcpXmasFlags() {
    this._tcpXmasFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpXmasFlagsInput() {
    return this._tcpXmasFlags;
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

  // tun_mismatch - computed: false, optional: true, required: false
  private _tunMismatch?: number; 
  public get tunMismatch() {
    return this.getNumberAttribute('tun_mismatch');
  }
  public set tunMismatch(value: number) {
    this._tunMismatch = value;
  }
  public resetTunMismatch() {
    this._tunMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunMismatchInput() {
    return this._tunMismatch;
  }

  // udp_bad_chksum - computed: false, optional: true, required: false
  private _udpBadChksum?: number; 
  public get udpBadChksum() {
    return this.getNumberAttribute('udp_bad_chksum');
  }
  public set udpBadChksum(value: number) {
    this._udpBadChksum = value;
  }
  public resetUdpBadChksum() {
    this._udpBadChksum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpBadChksumInput() {
    return this._udpBadChksum;
  }

  // udp_bad_ip_len - computed: false, optional: true, required: false
  private _udpBadIpLen?: number; 
  public get udpBadIpLen() {
    return this.getNumberAttribute('udp_bad_ip_len');
  }
  public set udpBadIpLen(value: number) {
    this._udpBadIpLen = value;
  }
  public resetUdpBadIpLen() {
    this._udpBadIpLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpBadIpLenInput() {
    return this._udpBadIpLen;
  }

  // udp_kb_frags - computed: false, optional: true, required: false
  private _udpKbFrags?: number; 
  public get udpKbFrags() {
    return this.getNumberAttribute('udp_kb_frags');
  }
  public set udpKbFrags(value: number) {
    this._udpKbFrags = value;
  }
  public resetUdpKbFrags() {
    this._udpKbFrags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpKbFragsInput() {
    return this._udpKbFrags;
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

  // udp_short_hdr - computed: false, optional: true, required: false
  private _udpShortHdr?: number; 
  public get udpShortHdr() {
    return this.getNumberAttribute('udp_short_hdr');
  }
  public set udpShortHdr(value: number) {
    this._udpShortHdr = value;
  }
  public resetUdpShortHdr() {
    this._udpShortHdr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpShortHdrInput() {
    return this._udpShortHdr;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bad_ip_chksum_drop: cdktf.numberToTerraform(this._badIpChksumDrop),
      bad_ip_flags_drop: cdktf.numberToTerraform(this._badIpFlagsDrop),
      bad_ip_frag_offset: cdktf.numberToTerraform(this._badIpFragOffset),
      bad_ip_hdr_len: cdktf.numberToTerraform(this._badIpHdrLen),
      bad_ip_payload_len: cdktf.numberToTerraform(this._badIpPayloadLen),
      bad_ip_ttl_drop: cdktf.numberToTerraform(this._badIpTtlDrop),
      duration: cdktf.numberToTerraform(this._duration),
      empty_frag_drop: cdktf.numberToTerraform(this._emptyFragDrop),
      fcs_drop: cdktf.numberToTerraform(this._fcsDrop),
      hrx_drop: cdktf.numberToTerraform(this._hrxDrop),
      icmp_pod_drop: cdktf.numberToTerraform(this._icmpPodDrop),
      id: cdktf.stringToTerraform(this._id),
      ipv4_frag: cdktf.numberToTerraform(this._ipv4Frag),
      ipv4_opt_drop: cdktf.numberToTerraform(this._ipv4OptDrop),
      land_drop: cdktf.numberToTerraform(this._landDrop),
      mic_frag_drop: cdktf.numberToTerraform(this._micFragDrop),
      mrx_drop: cdktf.numberToTerraform(this._mrxDrop),
      name: cdktf.stringToTerraform(this._name),
      no_ip_payload_drop: cdktf.numberToTerraform(this._noIpPayloadDrop),
      oversize_ip_payload: cdktf.numberToTerraform(this._oversizeIpPayload),
      runt_ip_hdr: cdktf.numberToTerraform(this._runtIpHdr),
      runt_tcpudp_hdr: cdktf.numberToTerraform(this._runtTcpudpHdr),
      siz_drop: cdktf.numberToTerraform(this._sizDrop),
      tcp_bad_chksum: cdktf.numberToTerraform(this._tcpBadChksum),
      tcp_bad_ip_len: cdktf.numberToTerraform(this._tcpBadIpLen),
      tcp_bad_urg_offet: cdktf.numberToTerraform(this._tcpBadUrgOffet),
      tcp_fin_sin: cdktf.numberToTerraform(this._tcpFinSin),
      tcp_frag_hdr: cdktf.numberToTerraform(this._tcpFragHdr),
      tcp_null_flags: cdktf.numberToTerraform(this._tcpNullFlags),
      tcp_null_scan: cdktf.numberToTerraform(this._tcpNullScan),
      tcp_short_hdr: cdktf.numberToTerraform(this._tcpShortHdr),
      tcp_syn_frag: cdktf.numberToTerraform(this._tcpSynFrag),
      tcp_xmas_flags: cdktf.numberToTerraform(this._tcpXmasFlags),
      tcp_xmas_scan: cdktf.numberToTerraform(this._tcpXmasScan),
      threshold_exceeded_by: cdktf.numberToTerraform(this._thresholdExceededBy),
      tun_mismatch: cdktf.numberToTerraform(this._tunMismatch),
      udp_bad_chksum: cdktf.numberToTerraform(this._udpBadChksum),
      udp_bad_ip_len: cdktf.numberToTerraform(this._udpBadIpLen),
      udp_kb_frags: cdktf.numberToTerraform(this._udpKbFrags),
      udp_port_lb: cdktf.numberToTerraform(this._udpPortLb),
      udp_short_hdr: cdktf.numberToTerraform(this._udpShortHdr),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bad_ip_chksum_drop: {
        value: cdktf.numberToHclTerraform(this._badIpChksumDrop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bad_ip_flags_drop: {
        value: cdktf.numberToHclTerraform(this._badIpFlagsDrop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bad_ip_frag_offset: {
        value: cdktf.numberToHclTerraform(this._badIpFragOffset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bad_ip_hdr_len: {
        value: cdktf.numberToHclTerraform(this._badIpHdrLen),
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
      bad_ip_ttl_drop: {
        value: cdktf.numberToHclTerraform(this._badIpTtlDrop),
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
      empty_frag_drop: {
        value: cdktf.numberToHclTerraform(this._emptyFragDrop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fcs_drop: {
        value: cdktf.numberToHclTerraform(this._fcsDrop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hrx_drop: {
        value: cdktf.numberToHclTerraform(this._hrxDrop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      icmp_pod_drop: {
        value: cdktf.numberToHclTerraform(this._icmpPodDrop),
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
      ipv4_frag: {
        value: cdktf.numberToHclTerraform(this._ipv4Frag),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv4_opt_drop: {
        value: cdktf.numberToHclTerraform(this._ipv4OptDrop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      land_drop: {
        value: cdktf.numberToHclTerraform(this._landDrop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mic_frag_drop: {
        value: cdktf.numberToHclTerraform(this._micFragDrop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mrx_drop: {
        value: cdktf.numberToHclTerraform(this._mrxDrop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      no_ip_payload_drop: {
        value: cdktf.numberToHclTerraform(this._noIpPayloadDrop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      oversize_ip_payload: {
        value: cdktf.numberToHclTerraform(this._oversizeIpPayload),
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
      runt_tcpudp_hdr: {
        value: cdktf.numberToHclTerraform(this._runtTcpudpHdr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      siz_drop: {
        value: cdktf.numberToHclTerraform(this._sizDrop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_bad_chksum: {
        value: cdktf.numberToHclTerraform(this._tcpBadChksum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_bad_ip_len: {
        value: cdktf.numberToHclTerraform(this._tcpBadIpLen),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_bad_urg_offet: {
        value: cdktf.numberToHclTerraform(this._tcpBadUrgOffet),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_fin_sin: {
        value: cdktf.numberToHclTerraform(this._tcpFinSin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_frag_hdr: {
        value: cdktf.numberToHclTerraform(this._tcpFragHdr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_null_flags: {
        value: cdktf.numberToHclTerraform(this._tcpNullFlags),
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
      tcp_short_hdr: {
        value: cdktf.numberToHclTerraform(this._tcpShortHdr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_syn_frag: {
        value: cdktf.numberToHclTerraform(this._tcpSynFrag),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_xmas_flags: {
        value: cdktf.numberToHclTerraform(this._tcpXmasFlags),
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
      threshold_exceeded_by: {
        value: cdktf.numberToHclTerraform(this._thresholdExceededBy),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tun_mismatch: {
        value: cdktf.numberToHclTerraform(this._tunMismatch),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      udp_bad_chksum: {
        value: cdktf.numberToHclTerraform(this._udpBadChksum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      udp_bad_ip_len: {
        value: cdktf.numberToHclTerraform(this._udpBadIpLen),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      udp_kb_frags: {
        value: cdktf.numberToHclTerraform(this._udpKbFrags),
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
      udp_short_hdr: {
        value: cdktf.numberToHclTerraform(this._udpShortHdr),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
