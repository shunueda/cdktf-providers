// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_vpn_error_trigger_stats_rate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeVpnErrorTriggerStatsRateAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable automatic packet-capture for ah_not_supported_with_gcm_gmac_sha2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_vpn_error_trigger_stats_rate#ah_not_supported_with_gcm_gmac_sha2 VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeVpnErrorTriggerStatsRateA#ah_not_supported_with_gcm_gmac_sha2}
  */
  readonly ahNotSupportedWithGcmGmacSha2?: number;
  /**
  * Enable automatic packet-capture for bad_auth_type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_vpn_error_trigger_stats_rate#bad_auth_type VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeVpnErrorTriggerStatsRateA#bad_auth_type}
  */
  readonly badAuthType?: number;
  /**
  * Enable automatic packet-capture for bad_checksum
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_vpn_error_trigger_stats_rate#bad_checksum VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeVpnErrorTriggerStatsRateA#bad_checksum}
  */
  readonly badChecksum?: number;
  /**
  * Enable automatic packet-capture for bad_encrypt_type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_vpn_error_trigger_stats_rate#bad_encrypt_type VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeVpnErrorTriggerStatsRateA#bad_encrypt_type}
  */
  readonly badEncryptType?: number;
  /**
  * Enable automatic packet-capture for bad_encrypt_type_ctr_gcm
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_vpn_error_trigger_stats_rate#bad_encrypt_type_ctr_gcm VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeVpnErrorTriggerStatsRateA#bad_encrypt_type_ctr_gcm}
  */
  readonly badEncryptTypeCtrGcm?: number;
  /**
  * Enable automatic packet-capture for bad_esp_next_header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_vpn_error_trigger_stats_rate#bad_esp_next_header VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeVpnErrorTriggerStatsRateA#bad_esp_next_header}
  */
  readonly badEspNextHeader?: number;
  /**
  * Enable automatic packet-capture for bad_frag_size_configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_vpn_error_trigger_stats_rate#bad_frag_size_configuration VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeVpnErrorTriggerStatsRateA#bad_frag_size_configuration}
  */
  readonly badFragSizeConfiguration?: number;
  /**
  * Enable automatic packet-capture for bad_fragment_size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_vpn_error_trigger_stats_rate#bad_fragment_size VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeVpnErrorTriggerStatsRateA#bad_fragment_size}
  */
  readonly badFragmentSize?: number;
  /**
  * Enable automatic packet-capture for bad_gre_header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_vpn_error_trigger_stats_rate#bad_gre_header VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeVpnErrorTriggerStatsRateA#bad_gre_header}
  */
  readonly badGreHeader?: number;
  /**
  * Enable automatic packet-capture for bad_gre_protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_vpn_error_trigger_stats_rate#bad_gre_protocol VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeVpnErrorTriggerStatsRateA#bad_gre_protocol}
  */
  readonly badGreProtocol?: number;
  /**
  * Enable automatic packet-capture for bad_inline_data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_vpn_error_trigger_stats_rate#bad_inline_data VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeVpnErrorTriggerStatsRateA#bad_inline_data}
  */
  readonly badInlineData?: number;
  /**
  * Enable automatic packet-capture for bad_ip_payload_type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_vpn_error_trigger_stats_rate#bad_ip_payload_type VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeVpnErrorTriggerStatsRateA#bad_ip_payload_type}
  */
  readonly badIpPayloadType?: number;
  /**
  * Enable automatic packet-capture for bad_ip_version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_vpn_error_trigger_stats_rate#bad_ip_version VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeVpnErrorTriggerStatsRateA#bad_ip_version}
  */
  readonly badIpVersion?: number;
  /**
  * Enable automatic packet-capture for bad_ipcomp_configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_vpn_error_trigger_stats_rate#bad_ipcomp_configuration VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeVpnErrorTriggerStatsRateA#bad_ipcomp_configuration}
  */
  readonly badIpcompConfiguration?: number;
  /**
  * Enable automatic packet-capture for bad_ipsec_auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_vpn_error_trigger_stats_rate#bad_ipsec_auth VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeVpnErrorTriggerStatsRateA#bad_ipsec_auth}
  */
  readonly badIpsecAuth?: number;
  /**
  * Enable automatic packet-capture for bad_ipsec_context
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_vpn_error_trigger_stats_rate#bad_ipsec_context VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeVpnErrorTriggerStatsRateA#bad_ipsec_context}
  */
  readonly badIpsecContext?: number;
  /**
  * Enable automatic packet-capture for bad_ipsec_context_direction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_vpn_error_trigger_stats_rate#bad_ipsec_context_direction VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeVpnErrorTriggerStatsRateA#bad_ipsec_context_direction}
  */
  readonly badIpsecContextDirection?: number;
  /**
  * Enable automatic packet-capture for bad_ipsec_context_flag_mismatch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_vpn_error_trigger_stats_rate#bad_ipsec_context_flag_mismatch VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeVpnErrorTriggerStatsRateA#bad_ipsec_context_flag_mismatch}
  */
  readonly badIpsecContextFlagMismatch?: number;
  /**
  * Enable automatic packet-capture for bad_ipsec_padding
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_vpn_error_trigger_stats_rate#bad_ipsec_padding VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeVpnErrorTriggerStatsRateA#bad_ipsec_padding}
  */
  readonly badIpsecPadding?: number;
  /**
  * Enable automatic packet-capture for bad_ipsec_protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_vpn_error_trigger_stats_rate#bad_ipsec_protocol VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeVpnErrorTriggerStatsRateA#bad_ipsec_protocol}
  */
  readonly badIpsecProtocol?: number;
  /**
  * Enable automatic packet-capture for bad_ipsec_spi
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_vpn_error_trigger_stats_rate#bad_ipsec_spi VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeVpnErrorTriggerStatsRateA#bad_ipsec_spi}
  */
  readonly badIpsecSpi?: number;
  /**
  * Enable automatic packet-capture for bad_ipsec_unknown
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_vpn_error_trigger_stats_rate#bad_ipsec_unknown VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeVpnErrorTriggerStatsRateA#bad_ipsec_unknown}
  */
  readonly badIpsecUnknown?: number;
  /**
  * Enable automatic packet-capture for bad_len
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_vpn_error_trigger_stats_rate#bad_len VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeVpnErrorTriggerStatsRateA#bad_len}
  */
  readonly badLen?: number;
  /**
  * Enable automatic packet-capture for bad_min_frag_size_auth_sha384_512
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_vpn_error_trigger_stats_rate#bad_min_frag_size_auth_sha384_512 VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeVpnErrorTriggerStatsRateA#bad_min_frag_size_auth_sha384_512}
  */
  readonly badMinFragSizeAuthSha384512?: number;
  /**
  * Enable automatic packet-capture for bad_opcode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_vpn_error_trigger_stats_rate#bad_opcode VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeVpnErrorTriggerStatsRateA#bad_opcode}
  */
  readonly badOpcode?: number;
  /**
  * Enable automatic packet-capture for bad_selector_match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_vpn_error_trigger_stats_rate#bad_selector_match VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeVpnErrorTriggerStatsRateA#bad_selector_match}
  */
  readonly badSelectorMatch?: number;
  /**
  * Enable automatic packet-capture for bad_sg_write_len
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_vpn_error_trigger_stats_rate#bad_sg_write_len VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeVpnErrorTriggerStatsRateA#bad_sg_write_len}
  */
  readonly badSgWriteLen?: number;
  /**
  * Enable automatic packet-capture for bad_srtp_auth_tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_vpn_error_trigger_stats_rate#bad_srtp_auth_tag VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeVpnErrorTriggerStatsRateA#bad_srtp_auth_tag}
  */
  readonly badSrtpAuthTag?: number;
  /**
  * Enable automatic packet-capture for dsiv_incorrect_param
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_vpn_error_trigger_stats_rate#dsiv_incorrect_param VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeVpnErrorTriggerStatsRateA#dsiv_incorrect_param}
  */
  readonly dsivIncorrectParam?: number;
  /**
  * Enable automatic packet-capture for dummy_payload
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_vpn_error_trigger_stats_rate#dummy_payload VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeVpnErrorTriggerStatsRateA#dummy_payload}
  */
  readonly dummyPayload?: number;
  /**
  * Time in seconds to look for the anomaly, default is 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_vpn_error_trigger_stats_rate#duration VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeVpnErrorTriggerStatsRateA#duration}
  */
  readonly duration?: number;
  /**
  * Enable automatic packet-capture for error_ipv6_decrypt_rh_segs_left_error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_vpn_error_trigger_stats_rate#error_ipv6_decrypt_rh_segs_left_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeVpnErrorTriggerStatsRateA#error_ipv6_decrypt_rh_segs_left_error}
  */
  readonly errorIpv6DecryptRhSegsLeftError?: number;
  /**
  * Enable automatic packet-capture for error_IPv6_extension_header_bad
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_vpn_error_trigger_stats_rate#error_ipv6_extension_header_bad VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeVpnErrorTriggerStatsRateA#error_ipv6_extension_header_bad}
  */
  readonly errorIpv6ExtensionHeaderBad?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_vpn_error_trigger_stats_rate#id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeVpnErrorTriggerStatsRateA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable automatic packet-capture for ipcomp_payload
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_vpn_error_trigger_stats_rate#ipcomp_payload VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeVpnErrorTriggerStatsRateA#ipcomp_payload}
  */
  readonly ipcompPayload?: number;
  /**
  * Enable automatic packet-capture for ipv6_extension_headers_too_big
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_vpn_error_trigger_stats_rate#ipv6_extension_headers_too_big VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeVpnErrorTriggerStatsRateA#ipv6_extension_headers_too_big}
  */
  readonly ipv6ExtensionHeadersTooBig?: number;
  /**
  * Enable automatic packet-capture for ipv6_hop_by_hop_error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_vpn_error_trigger_stats_rate#ipv6_hop_by_hop_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeVpnErrorTriggerStatsRateA#ipv6_hop_by_hop_error}
  */
  readonly ipv6HopByHopError?: number;
  /**
  * Enable automatic packet-capture for ipv6_outbound_rh_copy_addr_error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_vpn_error_trigger_stats_rate#ipv6_outbound_rh_copy_addr_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeVpnErrorTriggerStatsRateA#ipv6_outbound_rh_copy_addr_error}
  */
  readonly ipv6OutboundRhCopyAddrError?: number;
  /**
  * Enable automatic packet-capture for ipv6_rh_length_error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_vpn_error_trigger_stats_rate#ipv6_rh_length_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeVpnErrorTriggerStatsRateA#ipv6_rh_length_error}
  */
  readonly ipv6RhLengthError?: number;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_vpn_error_trigger_stats_rate#name VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeVpnErrorTriggerStatsRateA#name}
  */
  readonly name: string;
  /**
  * Enable automatic packet-capture for tfc_padding_with_prefrag_not_supported
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_vpn_error_trigger_stats_rate#tfc_padding_with_prefrag_not_supported VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeVpnErrorTriggerStatsRateA#tfc_padding_with_prefrag_not_supported}
  */
  readonly tfcPaddingWithPrefragNotSupported?: number;
  /**
  * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_vpn_error_trigger_stats_rate#threshold_exceeded_by VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeVpnErrorTriggerStatsRateA#threshold_exceeded_by}
  */
  readonly thresholdExceededBy?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_vpn_error_trigger_stats_rate#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeVpnErrorTriggerStatsRateA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_vpn_error_trigger_stats_rate thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_vpn_error_trigger_stats_rate}
*/
export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeVpnErrorTriggerStatsRateA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_vpn_error_trigger_stats_rate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeVpnErrorTriggerStatsRateA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeVpnErrorTriggerStatsRateA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeVpnErrorTriggerStatsRateA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_vpn_error_trigger_stats_rate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeVpnErrorTriggerStatsRateA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_vpn_error_trigger_stats_rate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_vpn_error_trigger_stats_rate thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_vpn_error_trigger_stats_rate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeVpnErrorTriggerStatsRateAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeVpnErrorTriggerStatsRateAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_vpn_error_trigger_stats_rate',
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
    this._ahNotSupportedWithGcmGmacSha2 = config.ahNotSupportedWithGcmGmacSha2;
    this._badAuthType = config.badAuthType;
    this._badChecksum = config.badChecksum;
    this._badEncryptType = config.badEncryptType;
    this._badEncryptTypeCtrGcm = config.badEncryptTypeCtrGcm;
    this._badEspNextHeader = config.badEspNextHeader;
    this._badFragSizeConfiguration = config.badFragSizeConfiguration;
    this._badFragmentSize = config.badFragmentSize;
    this._badGreHeader = config.badGreHeader;
    this._badGreProtocol = config.badGreProtocol;
    this._badInlineData = config.badInlineData;
    this._badIpPayloadType = config.badIpPayloadType;
    this._badIpVersion = config.badIpVersion;
    this._badIpcompConfiguration = config.badIpcompConfiguration;
    this._badIpsecAuth = config.badIpsecAuth;
    this._badIpsecContext = config.badIpsecContext;
    this._badIpsecContextDirection = config.badIpsecContextDirection;
    this._badIpsecContextFlagMismatch = config.badIpsecContextFlagMismatch;
    this._badIpsecPadding = config.badIpsecPadding;
    this._badIpsecProtocol = config.badIpsecProtocol;
    this._badIpsecSpi = config.badIpsecSpi;
    this._badIpsecUnknown = config.badIpsecUnknown;
    this._badLen = config.badLen;
    this._badMinFragSizeAuthSha384512 = config.badMinFragSizeAuthSha384512;
    this._badOpcode = config.badOpcode;
    this._badSelectorMatch = config.badSelectorMatch;
    this._badSgWriteLen = config.badSgWriteLen;
    this._badSrtpAuthTag = config.badSrtpAuthTag;
    this._dsivIncorrectParam = config.dsivIncorrectParam;
    this._dummyPayload = config.dummyPayload;
    this._duration = config.duration;
    this._errorIpv6DecryptRhSegsLeftError = config.errorIpv6DecryptRhSegsLeftError;
    this._errorIpv6ExtensionHeaderBad = config.errorIpv6ExtensionHeaderBad;
    this._id = config.id;
    this._ipcompPayload = config.ipcompPayload;
    this._ipv6ExtensionHeadersTooBig = config.ipv6ExtensionHeadersTooBig;
    this._ipv6HopByHopError = config.ipv6HopByHopError;
    this._ipv6OutboundRhCopyAddrError = config.ipv6OutboundRhCopyAddrError;
    this._ipv6RhLengthError = config.ipv6RhLengthError;
    this._name = config.name;
    this._tfcPaddingWithPrefragNotSupported = config.tfcPaddingWithPrefragNotSupported;
    this._thresholdExceededBy = config.thresholdExceededBy;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ah_not_supported_with_gcm_gmac_sha2 - computed: false, optional: true, required: false
  private _ahNotSupportedWithGcmGmacSha2?: number; 
  public get ahNotSupportedWithGcmGmacSha2() {
    return this.getNumberAttribute('ah_not_supported_with_gcm_gmac_sha2');
  }
  public set ahNotSupportedWithGcmGmacSha2(value: number) {
    this._ahNotSupportedWithGcmGmacSha2 = value;
  }
  public resetAhNotSupportedWithGcmGmacSha2() {
    this._ahNotSupportedWithGcmGmacSha2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ahNotSupportedWithGcmGmacSha2Input() {
    return this._ahNotSupportedWithGcmGmacSha2;
  }

  // bad_auth_type - computed: false, optional: true, required: false
  private _badAuthType?: number; 
  public get badAuthType() {
    return this.getNumberAttribute('bad_auth_type');
  }
  public set badAuthType(value: number) {
    this._badAuthType = value;
  }
  public resetBadAuthType() {
    this._badAuthType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badAuthTypeInput() {
    return this._badAuthType;
  }

  // bad_checksum - computed: false, optional: true, required: false
  private _badChecksum?: number; 
  public get badChecksum() {
    return this.getNumberAttribute('bad_checksum');
  }
  public set badChecksum(value: number) {
    this._badChecksum = value;
  }
  public resetBadChecksum() {
    this._badChecksum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badChecksumInput() {
    return this._badChecksum;
  }

  // bad_encrypt_type - computed: false, optional: true, required: false
  private _badEncryptType?: number; 
  public get badEncryptType() {
    return this.getNumberAttribute('bad_encrypt_type');
  }
  public set badEncryptType(value: number) {
    this._badEncryptType = value;
  }
  public resetBadEncryptType() {
    this._badEncryptType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badEncryptTypeInput() {
    return this._badEncryptType;
  }

  // bad_encrypt_type_ctr_gcm - computed: false, optional: true, required: false
  private _badEncryptTypeCtrGcm?: number; 
  public get badEncryptTypeCtrGcm() {
    return this.getNumberAttribute('bad_encrypt_type_ctr_gcm');
  }
  public set badEncryptTypeCtrGcm(value: number) {
    this._badEncryptTypeCtrGcm = value;
  }
  public resetBadEncryptTypeCtrGcm() {
    this._badEncryptTypeCtrGcm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badEncryptTypeCtrGcmInput() {
    return this._badEncryptTypeCtrGcm;
  }

  // bad_esp_next_header - computed: false, optional: true, required: false
  private _badEspNextHeader?: number; 
  public get badEspNextHeader() {
    return this.getNumberAttribute('bad_esp_next_header');
  }
  public set badEspNextHeader(value: number) {
    this._badEspNextHeader = value;
  }
  public resetBadEspNextHeader() {
    this._badEspNextHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badEspNextHeaderInput() {
    return this._badEspNextHeader;
  }

  // bad_frag_size_configuration - computed: false, optional: true, required: false
  private _badFragSizeConfiguration?: number; 
  public get badFragSizeConfiguration() {
    return this.getNumberAttribute('bad_frag_size_configuration');
  }
  public set badFragSizeConfiguration(value: number) {
    this._badFragSizeConfiguration = value;
  }
  public resetBadFragSizeConfiguration() {
    this._badFragSizeConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badFragSizeConfigurationInput() {
    return this._badFragSizeConfiguration;
  }

  // bad_fragment_size - computed: false, optional: true, required: false
  private _badFragmentSize?: number; 
  public get badFragmentSize() {
    return this.getNumberAttribute('bad_fragment_size');
  }
  public set badFragmentSize(value: number) {
    this._badFragmentSize = value;
  }
  public resetBadFragmentSize() {
    this._badFragmentSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badFragmentSizeInput() {
    return this._badFragmentSize;
  }

  // bad_gre_header - computed: false, optional: true, required: false
  private _badGreHeader?: number; 
  public get badGreHeader() {
    return this.getNumberAttribute('bad_gre_header');
  }
  public set badGreHeader(value: number) {
    this._badGreHeader = value;
  }
  public resetBadGreHeader() {
    this._badGreHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badGreHeaderInput() {
    return this._badGreHeader;
  }

  // bad_gre_protocol - computed: false, optional: true, required: false
  private _badGreProtocol?: number; 
  public get badGreProtocol() {
    return this.getNumberAttribute('bad_gre_protocol');
  }
  public set badGreProtocol(value: number) {
    this._badGreProtocol = value;
  }
  public resetBadGreProtocol() {
    this._badGreProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badGreProtocolInput() {
    return this._badGreProtocol;
  }

  // bad_inline_data - computed: false, optional: true, required: false
  private _badInlineData?: number; 
  public get badInlineData() {
    return this.getNumberAttribute('bad_inline_data');
  }
  public set badInlineData(value: number) {
    this._badInlineData = value;
  }
  public resetBadInlineData() {
    this._badInlineData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badInlineDataInput() {
    return this._badInlineData;
  }

  // bad_ip_payload_type - computed: false, optional: true, required: false
  private _badIpPayloadType?: number; 
  public get badIpPayloadType() {
    return this.getNumberAttribute('bad_ip_payload_type');
  }
  public set badIpPayloadType(value: number) {
    this._badIpPayloadType = value;
  }
  public resetBadIpPayloadType() {
    this._badIpPayloadType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badIpPayloadTypeInput() {
    return this._badIpPayloadType;
  }

  // bad_ip_version - computed: false, optional: true, required: false
  private _badIpVersion?: number; 
  public get badIpVersion() {
    return this.getNumberAttribute('bad_ip_version');
  }
  public set badIpVersion(value: number) {
    this._badIpVersion = value;
  }
  public resetBadIpVersion() {
    this._badIpVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badIpVersionInput() {
    return this._badIpVersion;
  }

  // bad_ipcomp_configuration - computed: false, optional: true, required: false
  private _badIpcompConfiguration?: number; 
  public get badIpcompConfiguration() {
    return this.getNumberAttribute('bad_ipcomp_configuration');
  }
  public set badIpcompConfiguration(value: number) {
    this._badIpcompConfiguration = value;
  }
  public resetBadIpcompConfiguration() {
    this._badIpcompConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badIpcompConfigurationInput() {
    return this._badIpcompConfiguration;
  }

  // bad_ipsec_auth - computed: false, optional: true, required: false
  private _badIpsecAuth?: number; 
  public get badIpsecAuth() {
    return this.getNumberAttribute('bad_ipsec_auth');
  }
  public set badIpsecAuth(value: number) {
    this._badIpsecAuth = value;
  }
  public resetBadIpsecAuth() {
    this._badIpsecAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badIpsecAuthInput() {
    return this._badIpsecAuth;
  }

  // bad_ipsec_context - computed: false, optional: true, required: false
  private _badIpsecContext?: number; 
  public get badIpsecContext() {
    return this.getNumberAttribute('bad_ipsec_context');
  }
  public set badIpsecContext(value: number) {
    this._badIpsecContext = value;
  }
  public resetBadIpsecContext() {
    this._badIpsecContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badIpsecContextInput() {
    return this._badIpsecContext;
  }

  // bad_ipsec_context_direction - computed: false, optional: true, required: false
  private _badIpsecContextDirection?: number; 
  public get badIpsecContextDirection() {
    return this.getNumberAttribute('bad_ipsec_context_direction');
  }
  public set badIpsecContextDirection(value: number) {
    this._badIpsecContextDirection = value;
  }
  public resetBadIpsecContextDirection() {
    this._badIpsecContextDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badIpsecContextDirectionInput() {
    return this._badIpsecContextDirection;
  }

  // bad_ipsec_context_flag_mismatch - computed: false, optional: true, required: false
  private _badIpsecContextFlagMismatch?: number; 
  public get badIpsecContextFlagMismatch() {
    return this.getNumberAttribute('bad_ipsec_context_flag_mismatch');
  }
  public set badIpsecContextFlagMismatch(value: number) {
    this._badIpsecContextFlagMismatch = value;
  }
  public resetBadIpsecContextFlagMismatch() {
    this._badIpsecContextFlagMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badIpsecContextFlagMismatchInput() {
    return this._badIpsecContextFlagMismatch;
  }

  // bad_ipsec_padding - computed: false, optional: true, required: false
  private _badIpsecPadding?: number; 
  public get badIpsecPadding() {
    return this.getNumberAttribute('bad_ipsec_padding');
  }
  public set badIpsecPadding(value: number) {
    this._badIpsecPadding = value;
  }
  public resetBadIpsecPadding() {
    this._badIpsecPadding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badIpsecPaddingInput() {
    return this._badIpsecPadding;
  }

  // bad_ipsec_protocol - computed: false, optional: true, required: false
  private _badIpsecProtocol?: number; 
  public get badIpsecProtocol() {
    return this.getNumberAttribute('bad_ipsec_protocol');
  }
  public set badIpsecProtocol(value: number) {
    this._badIpsecProtocol = value;
  }
  public resetBadIpsecProtocol() {
    this._badIpsecProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badIpsecProtocolInput() {
    return this._badIpsecProtocol;
  }

  // bad_ipsec_spi - computed: false, optional: true, required: false
  private _badIpsecSpi?: number; 
  public get badIpsecSpi() {
    return this.getNumberAttribute('bad_ipsec_spi');
  }
  public set badIpsecSpi(value: number) {
    this._badIpsecSpi = value;
  }
  public resetBadIpsecSpi() {
    this._badIpsecSpi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badIpsecSpiInput() {
    return this._badIpsecSpi;
  }

  // bad_ipsec_unknown - computed: false, optional: true, required: false
  private _badIpsecUnknown?: number; 
  public get badIpsecUnknown() {
    return this.getNumberAttribute('bad_ipsec_unknown');
  }
  public set badIpsecUnknown(value: number) {
    this._badIpsecUnknown = value;
  }
  public resetBadIpsecUnknown() {
    this._badIpsecUnknown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badIpsecUnknownInput() {
    return this._badIpsecUnknown;
  }

  // bad_len - computed: false, optional: true, required: false
  private _badLen?: number; 
  public get badLen() {
    return this.getNumberAttribute('bad_len');
  }
  public set badLen(value: number) {
    this._badLen = value;
  }
  public resetBadLen() {
    this._badLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badLenInput() {
    return this._badLen;
  }

  // bad_min_frag_size_auth_sha384_512 - computed: false, optional: true, required: false
  private _badMinFragSizeAuthSha384512?: number; 
  public get badMinFragSizeAuthSha384512() {
    return this.getNumberAttribute('bad_min_frag_size_auth_sha384_512');
  }
  public set badMinFragSizeAuthSha384512(value: number) {
    this._badMinFragSizeAuthSha384512 = value;
  }
  public resetBadMinFragSizeAuthSha384512() {
    this._badMinFragSizeAuthSha384512 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badMinFragSizeAuthSha384512Input() {
    return this._badMinFragSizeAuthSha384512;
  }

  // bad_opcode - computed: false, optional: true, required: false
  private _badOpcode?: number; 
  public get badOpcode() {
    return this.getNumberAttribute('bad_opcode');
  }
  public set badOpcode(value: number) {
    this._badOpcode = value;
  }
  public resetBadOpcode() {
    this._badOpcode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badOpcodeInput() {
    return this._badOpcode;
  }

  // bad_selector_match - computed: false, optional: true, required: false
  private _badSelectorMatch?: number; 
  public get badSelectorMatch() {
    return this.getNumberAttribute('bad_selector_match');
  }
  public set badSelectorMatch(value: number) {
    this._badSelectorMatch = value;
  }
  public resetBadSelectorMatch() {
    this._badSelectorMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badSelectorMatchInput() {
    return this._badSelectorMatch;
  }

  // bad_sg_write_len - computed: false, optional: true, required: false
  private _badSgWriteLen?: number; 
  public get badSgWriteLen() {
    return this.getNumberAttribute('bad_sg_write_len');
  }
  public set badSgWriteLen(value: number) {
    this._badSgWriteLen = value;
  }
  public resetBadSgWriteLen() {
    this._badSgWriteLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badSgWriteLenInput() {
    return this._badSgWriteLen;
  }

  // bad_srtp_auth_tag - computed: false, optional: true, required: false
  private _badSrtpAuthTag?: number; 
  public get badSrtpAuthTag() {
    return this.getNumberAttribute('bad_srtp_auth_tag');
  }
  public set badSrtpAuthTag(value: number) {
    this._badSrtpAuthTag = value;
  }
  public resetBadSrtpAuthTag() {
    this._badSrtpAuthTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badSrtpAuthTagInput() {
    return this._badSrtpAuthTag;
  }

  // dsiv_incorrect_param - computed: false, optional: true, required: false
  private _dsivIncorrectParam?: number; 
  public get dsivIncorrectParam() {
    return this.getNumberAttribute('dsiv_incorrect_param');
  }
  public set dsivIncorrectParam(value: number) {
    this._dsivIncorrectParam = value;
  }
  public resetDsivIncorrectParam() {
    this._dsivIncorrectParam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dsivIncorrectParamInput() {
    return this._dsivIncorrectParam;
  }

  // dummy_payload - computed: false, optional: true, required: false
  private _dummyPayload?: number; 
  public get dummyPayload() {
    return this.getNumberAttribute('dummy_payload');
  }
  public set dummyPayload(value: number) {
    this._dummyPayload = value;
  }
  public resetDummyPayload() {
    this._dummyPayload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dummyPayloadInput() {
    return this._dummyPayload;
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

  // error_ipv6_decrypt_rh_segs_left_error - computed: false, optional: true, required: false
  private _errorIpv6DecryptRhSegsLeftError?: number; 
  public get errorIpv6DecryptRhSegsLeftError() {
    return this.getNumberAttribute('error_ipv6_decrypt_rh_segs_left_error');
  }
  public set errorIpv6DecryptRhSegsLeftError(value: number) {
    this._errorIpv6DecryptRhSegsLeftError = value;
  }
  public resetErrorIpv6DecryptRhSegsLeftError() {
    this._errorIpv6DecryptRhSegsLeftError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorIpv6DecryptRhSegsLeftErrorInput() {
    return this._errorIpv6DecryptRhSegsLeftError;
  }

  // error_ipv6_extension_header_bad - computed: false, optional: true, required: false
  private _errorIpv6ExtensionHeaderBad?: number; 
  public get errorIpv6ExtensionHeaderBad() {
    return this.getNumberAttribute('error_ipv6_extension_header_bad');
  }
  public set errorIpv6ExtensionHeaderBad(value: number) {
    this._errorIpv6ExtensionHeaderBad = value;
  }
  public resetErrorIpv6ExtensionHeaderBad() {
    this._errorIpv6ExtensionHeaderBad = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorIpv6ExtensionHeaderBadInput() {
    return this._errorIpv6ExtensionHeaderBad;
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

  // ipcomp_payload - computed: false, optional: true, required: false
  private _ipcompPayload?: number; 
  public get ipcompPayload() {
    return this.getNumberAttribute('ipcomp_payload');
  }
  public set ipcompPayload(value: number) {
    this._ipcompPayload = value;
  }
  public resetIpcompPayload() {
    this._ipcompPayload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipcompPayloadInput() {
    return this._ipcompPayload;
  }

  // ipv6_extension_headers_too_big - computed: false, optional: true, required: false
  private _ipv6ExtensionHeadersTooBig?: number; 
  public get ipv6ExtensionHeadersTooBig() {
    return this.getNumberAttribute('ipv6_extension_headers_too_big');
  }
  public set ipv6ExtensionHeadersTooBig(value: number) {
    this._ipv6ExtensionHeadersTooBig = value;
  }
  public resetIpv6ExtensionHeadersTooBig() {
    this._ipv6ExtensionHeadersTooBig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6ExtensionHeadersTooBigInput() {
    return this._ipv6ExtensionHeadersTooBig;
  }

  // ipv6_hop_by_hop_error - computed: false, optional: true, required: false
  private _ipv6HopByHopError?: number; 
  public get ipv6HopByHopError() {
    return this.getNumberAttribute('ipv6_hop_by_hop_error');
  }
  public set ipv6HopByHopError(value: number) {
    this._ipv6HopByHopError = value;
  }
  public resetIpv6HopByHopError() {
    this._ipv6HopByHopError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6HopByHopErrorInput() {
    return this._ipv6HopByHopError;
  }

  // ipv6_outbound_rh_copy_addr_error - computed: false, optional: true, required: false
  private _ipv6OutboundRhCopyAddrError?: number; 
  public get ipv6OutboundRhCopyAddrError() {
    return this.getNumberAttribute('ipv6_outbound_rh_copy_addr_error');
  }
  public set ipv6OutboundRhCopyAddrError(value: number) {
    this._ipv6OutboundRhCopyAddrError = value;
  }
  public resetIpv6OutboundRhCopyAddrError() {
    this._ipv6OutboundRhCopyAddrError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6OutboundRhCopyAddrErrorInput() {
    return this._ipv6OutboundRhCopyAddrError;
  }

  // ipv6_rh_length_error - computed: false, optional: true, required: false
  private _ipv6RhLengthError?: number; 
  public get ipv6RhLengthError() {
    return this.getNumberAttribute('ipv6_rh_length_error');
  }
  public set ipv6RhLengthError(value: number) {
    this._ipv6RhLengthError = value;
  }
  public resetIpv6RhLengthError() {
    this._ipv6RhLengthError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6RhLengthErrorInput() {
    return this._ipv6RhLengthError;
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

  // tfc_padding_with_prefrag_not_supported - computed: false, optional: true, required: false
  private _tfcPaddingWithPrefragNotSupported?: number; 
  public get tfcPaddingWithPrefragNotSupported() {
    return this.getNumberAttribute('tfc_padding_with_prefrag_not_supported');
  }
  public set tfcPaddingWithPrefragNotSupported(value: number) {
    this._tfcPaddingWithPrefragNotSupported = value;
  }
  public resetTfcPaddingWithPrefragNotSupported() {
    this._tfcPaddingWithPrefragNotSupported = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tfcPaddingWithPrefragNotSupportedInput() {
    return this._tfcPaddingWithPrefragNotSupported;
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
      ah_not_supported_with_gcm_gmac_sha2: cdktf.numberToTerraform(this._ahNotSupportedWithGcmGmacSha2),
      bad_auth_type: cdktf.numberToTerraform(this._badAuthType),
      bad_checksum: cdktf.numberToTerraform(this._badChecksum),
      bad_encrypt_type: cdktf.numberToTerraform(this._badEncryptType),
      bad_encrypt_type_ctr_gcm: cdktf.numberToTerraform(this._badEncryptTypeCtrGcm),
      bad_esp_next_header: cdktf.numberToTerraform(this._badEspNextHeader),
      bad_frag_size_configuration: cdktf.numberToTerraform(this._badFragSizeConfiguration),
      bad_fragment_size: cdktf.numberToTerraform(this._badFragmentSize),
      bad_gre_header: cdktf.numberToTerraform(this._badGreHeader),
      bad_gre_protocol: cdktf.numberToTerraform(this._badGreProtocol),
      bad_inline_data: cdktf.numberToTerraform(this._badInlineData),
      bad_ip_payload_type: cdktf.numberToTerraform(this._badIpPayloadType),
      bad_ip_version: cdktf.numberToTerraform(this._badIpVersion),
      bad_ipcomp_configuration: cdktf.numberToTerraform(this._badIpcompConfiguration),
      bad_ipsec_auth: cdktf.numberToTerraform(this._badIpsecAuth),
      bad_ipsec_context: cdktf.numberToTerraform(this._badIpsecContext),
      bad_ipsec_context_direction: cdktf.numberToTerraform(this._badIpsecContextDirection),
      bad_ipsec_context_flag_mismatch: cdktf.numberToTerraform(this._badIpsecContextFlagMismatch),
      bad_ipsec_padding: cdktf.numberToTerraform(this._badIpsecPadding),
      bad_ipsec_protocol: cdktf.numberToTerraform(this._badIpsecProtocol),
      bad_ipsec_spi: cdktf.numberToTerraform(this._badIpsecSpi),
      bad_ipsec_unknown: cdktf.numberToTerraform(this._badIpsecUnknown),
      bad_len: cdktf.numberToTerraform(this._badLen),
      bad_min_frag_size_auth_sha384_512: cdktf.numberToTerraform(this._badMinFragSizeAuthSha384512),
      bad_opcode: cdktf.numberToTerraform(this._badOpcode),
      bad_selector_match: cdktf.numberToTerraform(this._badSelectorMatch),
      bad_sg_write_len: cdktf.numberToTerraform(this._badSgWriteLen),
      bad_srtp_auth_tag: cdktf.numberToTerraform(this._badSrtpAuthTag),
      dsiv_incorrect_param: cdktf.numberToTerraform(this._dsivIncorrectParam),
      dummy_payload: cdktf.numberToTerraform(this._dummyPayload),
      duration: cdktf.numberToTerraform(this._duration),
      error_ipv6_decrypt_rh_segs_left_error: cdktf.numberToTerraform(this._errorIpv6DecryptRhSegsLeftError),
      error_ipv6_extension_header_bad: cdktf.numberToTerraform(this._errorIpv6ExtensionHeaderBad),
      id: cdktf.stringToTerraform(this._id),
      ipcomp_payload: cdktf.numberToTerraform(this._ipcompPayload),
      ipv6_extension_headers_too_big: cdktf.numberToTerraform(this._ipv6ExtensionHeadersTooBig),
      ipv6_hop_by_hop_error: cdktf.numberToTerraform(this._ipv6HopByHopError),
      ipv6_outbound_rh_copy_addr_error: cdktf.numberToTerraform(this._ipv6OutboundRhCopyAddrError),
      ipv6_rh_length_error: cdktf.numberToTerraform(this._ipv6RhLengthError),
      name: cdktf.stringToTerraform(this._name),
      tfc_padding_with_prefrag_not_supported: cdktf.numberToTerraform(this._tfcPaddingWithPrefragNotSupported),
      threshold_exceeded_by: cdktf.numberToTerraform(this._thresholdExceededBy),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ah_not_supported_with_gcm_gmac_sha2: {
        value: cdktf.numberToHclTerraform(this._ahNotSupportedWithGcmGmacSha2),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bad_auth_type: {
        value: cdktf.numberToHclTerraform(this._badAuthType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bad_checksum: {
        value: cdktf.numberToHclTerraform(this._badChecksum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bad_encrypt_type: {
        value: cdktf.numberToHclTerraform(this._badEncryptType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bad_encrypt_type_ctr_gcm: {
        value: cdktf.numberToHclTerraform(this._badEncryptTypeCtrGcm),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bad_esp_next_header: {
        value: cdktf.numberToHclTerraform(this._badEspNextHeader),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bad_frag_size_configuration: {
        value: cdktf.numberToHclTerraform(this._badFragSizeConfiguration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bad_fragment_size: {
        value: cdktf.numberToHclTerraform(this._badFragmentSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bad_gre_header: {
        value: cdktf.numberToHclTerraform(this._badGreHeader),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bad_gre_protocol: {
        value: cdktf.numberToHclTerraform(this._badGreProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bad_inline_data: {
        value: cdktf.numberToHclTerraform(this._badInlineData),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bad_ip_payload_type: {
        value: cdktf.numberToHclTerraform(this._badIpPayloadType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bad_ip_version: {
        value: cdktf.numberToHclTerraform(this._badIpVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bad_ipcomp_configuration: {
        value: cdktf.numberToHclTerraform(this._badIpcompConfiguration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bad_ipsec_auth: {
        value: cdktf.numberToHclTerraform(this._badIpsecAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bad_ipsec_context: {
        value: cdktf.numberToHclTerraform(this._badIpsecContext),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bad_ipsec_context_direction: {
        value: cdktf.numberToHclTerraform(this._badIpsecContextDirection),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bad_ipsec_context_flag_mismatch: {
        value: cdktf.numberToHclTerraform(this._badIpsecContextFlagMismatch),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bad_ipsec_padding: {
        value: cdktf.numberToHclTerraform(this._badIpsecPadding),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bad_ipsec_protocol: {
        value: cdktf.numberToHclTerraform(this._badIpsecProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bad_ipsec_spi: {
        value: cdktf.numberToHclTerraform(this._badIpsecSpi),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bad_ipsec_unknown: {
        value: cdktf.numberToHclTerraform(this._badIpsecUnknown),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bad_len: {
        value: cdktf.numberToHclTerraform(this._badLen),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bad_min_frag_size_auth_sha384_512: {
        value: cdktf.numberToHclTerraform(this._badMinFragSizeAuthSha384512),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bad_opcode: {
        value: cdktf.numberToHclTerraform(this._badOpcode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bad_selector_match: {
        value: cdktf.numberToHclTerraform(this._badSelectorMatch),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bad_sg_write_len: {
        value: cdktf.numberToHclTerraform(this._badSgWriteLen),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bad_srtp_auth_tag: {
        value: cdktf.numberToHclTerraform(this._badSrtpAuthTag),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dsiv_incorrect_param: {
        value: cdktf.numberToHclTerraform(this._dsivIncorrectParam),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dummy_payload: {
        value: cdktf.numberToHclTerraform(this._dummyPayload),
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
      error_ipv6_decrypt_rh_segs_left_error: {
        value: cdktf.numberToHclTerraform(this._errorIpv6DecryptRhSegsLeftError),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      error_ipv6_extension_header_bad: {
        value: cdktf.numberToHclTerraform(this._errorIpv6ExtensionHeaderBad),
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
      ipcomp_payload: {
        value: cdktf.numberToHclTerraform(this._ipcompPayload),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv6_extension_headers_too_big: {
        value: cdktf.numberToHclTerraform(this._ipv6ExtensionHeadersTooBig),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv6_hop_by_hop_error: {
        value: cdktf.numberToHclTerraform(this._ipv6HopByHopError),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv6_outbound_rh_copy_addr_error: {
        value: cdktf.numberToHclTerraform(this._ipv6OutboundRhCopyAddrError),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv6_rh_length_error: {
        value: cdktf.numberToHclTerraform(this._ipv6RhLengthError),
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
      tfc_padding_with_prefrag_not_supported: {
        value: cdktf.numberToHclTerraform(this._tfcPaddingWithPrefragNotSupported),
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
