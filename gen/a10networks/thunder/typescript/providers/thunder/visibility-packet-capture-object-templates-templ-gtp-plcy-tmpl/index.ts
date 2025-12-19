// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specify name of the capture-config to use with this template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl#capture_config VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl#capture_config}
  */
  readonly captureConfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl#id VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Packet Capture Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl#name VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl#name}
  */
  readonly name: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl#user_tag VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl#uuid VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl#uuid}
  */
  readonly uuid?: string;
  /**
  * trigger_stats_inc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl#trigger_stats_inc VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl#trigger_stats_inc}
  */
  readonly triggerStatsInc?: VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsInc;
  /**
  * trigger_stats_rate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl#trigger_stats_rate VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl#trigger_stats_rate}
  */
  readonly triggerStatsRate?: VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsRate;
  /**
  * trigger_stats_severity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl#trigger_stats_severity VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl#trigger_stats_severity}
  */
  readonly triggerStatsSeverity?: VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsSeverity;
}
export interface VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsInc {
  /**
  * Enable automatic packet-capture for Validation Drop: Country Code Mismatch in IMSI and MSISDN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl#drop_vld_country_code_mismatch VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl#drop_vld_country_code_mismatch}
  */
  readonly dropVldCountryCodeMismatch?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: Cross Layer IP Address Mismatch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl#drop_vld_cross_layer_correlation VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl#drop_vld_cross_layer_correlation}
  */
  readonly dropVldCrossLayerCorrelation?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: GTP Bearer count exceeded max (11)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl#drop_vld_gtp_bearer_count_exceed VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl#drop_vld_gtp_bearer_count_exceed}
  */
  readonly dropVldGtpBearerCountExceed?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: GTP repeated IE count exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl#drop_vld_gtp_ie_repeat_count_exceed VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl#drop_vld_gtp_ie_repeat_count_exceed}
  */
  readonly dropVldGtpIeRepeatCountExceed?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: GTP-C Invalid APN Length Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl#drop_vld_gtp_invalid_apn_len_drop VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl#drop_vld_gtp_invalid_apn_len_drop}
  */
  readonly dropVldGtpInvalidApnLenDrop?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: GTP-C Invalid IMSI Length Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl#drop_vld_gtp_invalid_imsi_len_drop VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl#drop_vld_gtp_invalid_imsi_len_drop}
  */
  readonly dropVldGtpInvalidImsiLenDrop?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: GTP-U IP Address Spoofed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl#drop_vld_gtp_u_spoofed_source_address VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl#drop_vld_gtp_u_spoofed_source_address}
  */
  readonly dropVldGtpUSpoofedSourceAddress?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: GTPV2-C Wrong LBI in Create Bearer Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl#drop_vld_gtp_v2_wrong_lbi_create_bearer VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl#drop_vld_gtp_v2_wrong_lbi_create_bearer}
  */
  readonly dropVldGtpV2WrongLbiCreateBearer?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: GTPV0-C conn Sequence number Buffer Full
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl#drop_vld_gtpv0_seqnum_buffer_full VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl#drop_vld_gtpv0_seqnum_buffer_full}
  */
  readonly dropVldGtpv0SeqnumBufferFull?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: GTPV1-C conn Sequence number Buffer Full
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl#drop_vld_gtpv1_seqnum_buffer_full VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl#drop_vld_gtpv1_seqnum_buffer_full}
  */
  readonly dropVldGtpv1SeqnumBufferFull?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: GTPV2-C conn Sequence number Buffer Full
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl#drop_vld_gtpv2_seqnum_buffer_full VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl#drop_vld_gtpv2_seqnum_buffer_full}
  */
  readonly dropVldGtpv2SeqnumBufferFull?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: Invalid Flow Label in GTPv0-C Header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl#drop_vld_invalid_flow_label_v0 VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl#drop_vld_invalid_flow_label_v0}
  */
  readonly dropVldInvalidFlowLabelV0?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: Piggyback message invalid packet length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl#drop_vld_invalid_pkt_len_piggyback VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl#drop_vld_invalid_pkt_len_piggyback}
  */
  readonly dropVldInvalidPktLenPiggyback?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: Invalid TEID Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl#drop_vld_invalid_teid VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl#drop_vld_invalid_teid}
  */
  readonly dropVldInvalidTeid?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: Mandatory IE in Grouped IE Not Present
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl#drop_vld_mandatory_ie_in_grouped_ie VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl#drop_vld_mandatory_ie_in_grouped_ie}
  */
  readonly dropVldMandatoryIeInGroupedIe?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: Mandatory IE Not Present
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl#drop_vld_mandatory_information_element VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl#drop_vld_mandatory_information_element}
  */
  readonly dropVldMandatoryInformationElement?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: Message Length Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl#drop_vld_message_length VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl#drop_vld_message_length}
  */
  readonly dropVldMessageLength?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: GTPv1-C Message Out of Order IE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl#drop_vld_out_of_order_ie VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl#drop_vld_out_of_order_ie}
  */
  readonly dropVldOutOfOrderIe?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: Out Of State GTP Message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl#drop_vld_out_of_state VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl#drop_vld_out_of_state}
  */
  readonly dropVldOutOfState?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: Unexpected IE Present in Message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl#drop_vld_out_of_state_ie VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl#drop_vld_out_of_state_ie}
  */
  readonly dropVldOutOfStateIe?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: Protocol flag in Header Field not Set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl#drop_vld_protocol_flag_unset VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl#drop_vld_protocol_flag_unset}
  */
  readonly dropVldProtocolFlagUnset?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: Reserved Header Field Set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl#drop_vld_reserved_field_set VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl#drop_vld_reserved_field_set}
  */
  readonly dropVldReservedFieldSet?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: Reserved IE Field Present
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl#drop_vld_reserved_information_element VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl#drop_vld_reserved_information_element}
  */
  readonly dropVldReservedInformationElement?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: piggyback message anomaly failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl#drop_vld_sanity_failed_piggyback VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl#drop_vld_sanity_failed_piggyback}
  */
  readonly dropVldSanityFailedPiggyback?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: GTP-C Sequence number Mismatch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl#drop_vld_sequence_num_correlation VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl#drop_vld_sequence_num_correlation}
  */
  readonly dropVldSequenceNumCorrelation?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: Tunnel Header Flag Not Set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl#drop_vld_tunnel_id_flag VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl#drop_vld_tunnel_id_flag}
  */
  readonly dropVldTunnelIdFlag?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: GTPv0-C Reserved Message Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl#drop_vld_v0_reserved_message_drop VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl#drop_vld_v0_reserved_message_drop}
  */
  readonly dropVldV0ReservedMessageDrop?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: GTPv1-C Reserved Message Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl#drop_vld_v1_reserved_message_drop VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl#drop_vld_v1_reserved_message_drop}
  */
  readonly dropVldV1ReservedMessageDrop?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: GTPv2-C Reserved Message Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl#drop_vld_v2_reserved_message_drop VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl#drop_vld_v2_reserved_message_drop}
  */
  readonly dropVldV2ReservedMessageDrop?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: Invalid GTP version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl#drop_vld_version_not_supported VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl#drop_vld_version_not_supported}
  */
  readonly dropVldVersionNotSupported?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl#uuid VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsIncToTerraform(struct?: VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsIncOutputReference | VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsInc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    drop_vld_country_code_mismatch: cdktf.numberToTerraform(struct!.dropVldCountryCodeMismatch),
    drop_vld_cross_layer_correlation: cdktf.numberToTerraform(struct!.dropVldCrossLayerCorrelation),
    drop_vld_gtp_bearer_count_exceed: cdktf.numberToTerraform(struct!.dropVldGtpBearerCountExceed),
    drop_vld_gtp_ie_repeat_count_exceed: cdktf.numberToTerraform(struct!.dropVldGtpIeRepeatCountExceed),
    drop_vld_gtp_invalid_apn_len_drop: cdktf.numberToTerraform(struct!.dropVldGtpInvalidApnLenDrop),
    drop_vld_gtp_invalid_imsi_len_drop: cdktf.numberToTerraform(struct!.dropVldGtpInvalidImsiLenDrop),
    drop_vld_gtp_u_spoofed_source_address: cdktf.numberToTerraform(struct!.dropVldGtpUSpoofedSourceAddress),
    drop_vld_gtp_v2_wrong_lbi_create_bearer: cdktf.numberToTerraform(struct!.dropVldGtpV2WrongLbiCreateBearer),
    drop_vld_gtpv0_seqnum_buffer_full: cdktf.numberToTerraform(struct!.dropVldGtpv0SeqnumBufferFull),
    drop_vld_gtpv1_seqnum_buffer_full: cdktf.numberToTerraform(struct!.dropVldGtpv1SeqnumBufferFull),
    drop_vld_gtpv2_seqnum_buffer_full: cdktf.numberToTerraform(struct!.dropVldGtpv2SeqnumBufferFull),
    drop_vld_invalid_flow_label_v0: cdktf.numberToTerraform(struct!.dropVldInvalidFlowLabelV0),
    drop_vld_invalid_pkt_len_piggyback: cdktf.numberToTerraform(struct!.dropVldInvalidPktLenPiggyback),
    drop_vld_invalid_teid: cdktf.numberToTerraform(struct!.dropVldInvalidTeid),
    drop_vld_mandatory_ie_in_grouped_ie: cdktf.numberToTerraform(struct!.dropVldMandatoryIeInGroupedIe),
    drop_vld_mandatory_information_element: cdktf.numberToTerraform(struct!.dropVldMandatoryInformationElement),
    drop_vld_message_length: cdktf.numberToTerraform(struct!.dropVldMessageLength),
    drop_vld_out_of_order_ie: cdktf.numberToTerraform(struct!.dropVldOutOfOrderIe),
    drop_vld_out_of_state: cdktf.numberToTerraform(struct!.dropVldOutOfState),
    drop_vld_out_of_state_ie: cdktf.numberToTerraform(struct!.dropVldOutOfStateIe),
    drop_vld_protocol_flag_unset: cdktf.numberToTerraform(struct!.dropVldProtocolFlagUnset),
    drop_vld_reserved_field_set: cdktf.numberToTerraform(struct!.dropVldReservedFieldSet),
    drop_vld_reserved_information_element: cdktf.numberToTerraform(struct!.dropVldReservedInformationElement),
    drop_vld_sanity_failed_piggyback: cdktf.numberToTerraform(struct!.dropVldSanityFailedPiggyback),
    drop_vld_sequence_num_correlation: cdktf.numberToTerraform(struct!.dropVldSequenceNumCorrelation),
    drop_vld_tunnel_id_flag: cdktf.numberToTerraform(struct!.dropVldTunnelIdFlag),
    drop_vld_v0_reserved_message_drop: cdktf.numberToTerraform(struct!.dropVldV0ReservedMessageDrop),
    drop_vld_v1_reserved_message_drop: cdktf.numberToTerraform(struct!.dropVldV1ReservedMessageDrop),
    drop_vld_v2_reserved_message_drop: cdktf.numberToTerraform(struct!.dropVldV2ReservedMessageDrop),
    drop_vld_version_not_supported: cdktf.numberToTerraform(struct!.dropVldVersionNotSupported),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsIncToHclTerraform(struct?: VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsIncOutputReference | VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsInc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    drop_vld_country_code_mismatch: {
      value: cdktf.numberToHclTerraform(struct!.dropVldCountryCodeMismatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_cross_layer_correlation: {
      value: cdktf.numberToHclTerraform(struct!.dropVldCrossLayerCorrelation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_gtp_bearer_count_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dropVldGtpBearerCountExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_gtp_ie_repeat_count_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dropVldGtpIeRepeatCountExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_gtp_invalid_apn_len_drop: {
      value: cdktf.numberToHclTerraform(struct!.dropVldGtpInvalidApnLenDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_gtp_invalid_imsi_len_drop: {
      value: cdktf.numberToHclTerraform(struct!.dropVldGtpInvalidImsiLenDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_gtp_u_spoofed_source_address: {
      value: cdktf.numberToHclTerraform(struct!.dropVldGtpUSpoofedSourceAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_gtp_v2_wrong_lbi_create_bearer: {
      value: cdktf.numberToHclTerraform(struct!.dropVldGtpV2WrongLbiCreateBearer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_gtpv0_seqnum_buffer_full: {
      value: cdktf.numberToHclTerraform(struct!.dropVldGtpv0SeqnumBufferFull),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_gtpv1_seqnum_buffer_full: {
      value: cdktf.numberToHclTerraform(struct!.dropVldGtpv1SeqnumBufferFull),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_gtpv2_seqnum_buffer_full: {
      value: cdktf.numberToHclTerraform(struct!.dropVldGtpv2SeqnumBufferFull),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_invalid_flow_label_v0: {
      value: cdktf.numberToHclTerraform(struct!.dropVldInvalidFlowLabelV0),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_invalid_pkt_len_piggyback: {
      value: cdktf.numberToHclTerraform(struct!.dropVldInvalidPktLenPiggyback),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_invalid_teid: {
      value: cdktf.numberToHclTerraform(struct!.dropVldInvalidTeid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_mandatory_ie_in_grouped_ie: {
      value: cdktf.numberToHclTerraform(struct!.dropVldMandatoryIeInGroupedIe),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_mandatory_information_element: {
      value: cdktf.numberToHclTerraform(struct!.dropVldMandatoryInformationElement),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_message_length: {
      value: cdktf.numberToHclTerraform(struct!.dropVldMessageLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_out_of_order_ie: {
      value: cdktf.numberToHclTerraform(struct!.dropVldOutOfOrderIe),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_out_of_state: {
      value: cdktf.numberToHclTerraform(struct!.dropVldOutOfState),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_out_of_state_ie: {
      value: cdktf.numberToHclTerraform(struct!.dropVldOutOfStateIe),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_protocol_flag_unset: {
      value: cdktf.numberToHclTerraform(struct!.dropVldProtocolFlagUnset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_reserved_field_set: {
      value: cdktf.numberToHclTerraform(struct!.dropVldReservedFieldSet),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_reserved_information_element: {
      value: cdktf.numberToHclTerraform(struct!.dropVldReservedInformationElement),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_sanity_failed_piggyback: {
      value: cdktf.numberToHclTerraform(struct!.dropVldSanityFailedPiggyback),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_sequence_num_correlation: {
      value: cdktf.numberToHclTerraform(struct!.dropVldSequenceNumCorrelation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_tunnel_id_flag: {
      value: cdktf.numberToHclTerraform(struct!.dropVldTunnelIdFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_v0_reserved_message_drop: {
      value: cdktf.numberToHclTerraform(struct!.dropVldV0ReservedMessageDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_v1_reserved_message_drop: {
      value: cdktf.numberToHclTerraform(struct!.dropVldV1ReservedMessageDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_v2_reserved_message_drop: {
      value: cdktf.numberToHclTerraform(struct!.dropVldV2ReservedMessageDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_version_not_supported: {
      value: cdktf.numberToHclTerraform(struct!.dropVldVersionNotSupported),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsIncOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsInc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dropVldCountryCodeMismatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldCountryCodeMismatch = this._dropVldCountryCodeMismatch;
    }
    if (this._dropVldCrossLayerCorrelation !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldCrossLayerCorrelation = this._dropVldCrossLayerCorrelation;
    }
    if (this._dropVldGtpBearerCountExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldGtpBearerCountExceed = this._dropVldGtpBearerCountExceed;
    }
    if (this._dropVldGtpIeRepeatCountExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldGtpIeRepeatCountExceed = this._dropVldGtpIeRepeatCountExceed;
    }
    if (this._dropVldGtpInvalidApnLenDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldGtpInvalidApnLenDrop = this._dropVldGtpInvalidApnLenDrop;
    }
    if (this._dropVldGtpInvalidImsiLenDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldGtpInvalidImsiLenDrop = this._dropVldGtpInvalidImsiLenDrop;
    }
    if (this._dropVldGtpUSpoofedSourceAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldGtpUSpoofedSourceAddress = this._dropVldGtpUSpoofedSourceAddress;
    }
    if (this._dropVldGtpV2WrongLbiCreateBearer !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldGtpV2WrongLbiCreateBearer = this._dropVldGtpV2WrongLbiCreateBearer;
    }
    if (this._dropVldGtpv0SeqnumBufferFull !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldGtpv0SeqnumBufferFull = this._dropVldGtpv0SeqnumBufferFull;
    }
    if (this._dropVldGtpv1SeqnumBufferFull !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldGtpv1SeqnumBufferFull = this._dropVldGtpv1SeqnumBufferFull;
    }
    if (this._dropVldGtpv2SeqnumBufferFull !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldGtpv2SeqnumBufferFull = this._dropVldGtpv2SeqnumBufferFull;
    }
    if (this._dropVldInvalidFlowLabelV0 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldInvalidFlowLabelV0 = this._dropVldInvalidFlowLabelV0;
    }
    if (this._dropVldInvalidPktLenPiggyback !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldInvalidPktLenPiggyback = this._dropVldInvalidPktLenPiggyback;
    }
    if (this._dropVldInvalidTeid !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldInvalidTeid = this._dropVldInvalidTeid;
    }
    if (this._dropVldMandatoryIeInGroupedIe !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldMandatoryIeInGroupedIe = this._dropVldMandatoryIeInGroupedIe;
    }
    if (this._dropVldMandatoryInformationElement !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldMandatoryInformationElement = this._dropVldMandatoryInformationElement;
    }
    if (this._dropVldMessageLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldMessageLength = this._dropVldMessageLength;
    }
    if (this._dropVldOutOfOrderIe !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldOutOfOrderIe = this._dropVldOutOfOrderIe;
    }
    if (this._dropVldOutOfState !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldOutOfState = this._dropVldOutOfState;
    }
    if (this._dropVldOutOfStateIe !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldOutOfStateIe = this._dropVldOutOfStateIe;
    }
    if (this._dropVldProtocolFlagUnset !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldProtocolFlagUnset = this._dropVldProtocolFlagUnset;
    }
    if (this._dropVldReservedFieldSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldReservedFieldSet = this._dropVldReservedFieldSet;
    }
    if (this._dropVldReservedInformationElement !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldReservedInformationElement = this._dropVldReservedInformationElement;
    }
    if (this._dropVldSanityFailedPiggyback !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldSanityFailedPiggyback = this._dropVldSanityFailedPiggyback;
    }
    if (this._dropVldSequenceNumCorrelation !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldSequenceNumCorrelation = this._dropVldSequenceNumCorrelation;
    }
    if (this._dropVldTunnelIdFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldTunnelIdFlag = this._dropVldTunnelIdFlag;
    }
    if (this._dropVldV0ReservedMessageDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldV0ReservedMessageDrop = this._dropVldV0ReservedMessageDrop;
    }
    if (this._dropVldV1ReservedMessageDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldV1ReservedMessageDrop = this._dropVldV1ReservedMessageDrop;
    }
    if (this._dropVldV2ReservedMessageDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldV2ReservedMessageDrop = this._dropVldV2ReservedMessageDrop;
    }
    if (this._dropVldVersionNotSupported !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldVersionNotSupported = this._dropVldVersionNotSupported;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsInc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dropVldCountryCodeMismatch = undefined;
      this._dropVldCrossLayerCorrelation = undefined;
      this._dropVldGtpBearerCountExceed = undefined;
      this._dropVldGtpIeRepeatCountExceed = undefined;
      this._dropVldGtpInvalidApnLenDrop = undefined;
      this._dropVldGtpInvalidImsiLenDrop = undefined;
      this._dropVldGtpUSpoofedSourceAddress = undefined;
      this._dropVldGtpV2WrongLbiCreateBearer = undefined;
      this._dropVldGtpv0SeqnumBufferFull = undefined;
      this._dropVldGtpv1SeqnumBufferFull = undefined;
      this._dropVldGtpv2SeqnumBufferFull = undefined;
      this._dropVldInvalidFlowLabelV0 = undefined;
      this._dropVldInvalidPktLenPiggyback = undefined;
      this._dropVldInvalidTeid = undefined;
      this._dropVldMandatoryIeInGroupedIe = undefined;
      this._dropVldMandatoryInformationElement = undefined;
      this._dropVldMessageLength = undefined;
      this._dropVldOutOfOrderIe = undefined;
      this._dropVldOutOfState = undefined;
      this._dropVldOutOfStateIe = undefined;
      this._dropVldProtocolFlagUnset = undefined;
      this._dropVldReservedFieldSet = undefined;
      this._dropVldReservedInformationElement = undefined;
      this._dropVldSanityFailedPiggyback = undefined;
      this._dropVldSequenceNumCorrelation = undefined;
      this._dropVldTunnelIdFlag = undefined;
      this._dropVldV0ReservedMessageDrop = undefined;
      this._dropVldV1ReservedMessageDrop = undefined;
      this._dropVldV2ReservedMessageDrop = undefined;
      this._dropVldVersionNotSupported = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dropVldCountryCodeMismatch = value.dropVldCountryCodeMismatch;
      this._dropVldCrossLayerCorrelation = value.dropVldCrossLayerCorrelation;
      this._dropVldGtpBearerCountExceed = value.dropVldGtpBearerCountExceed;
      this._dropVldGtpIeRepeatCountExceed = value.dropVldGtpIeRepeatCountExceed;
      this._dropVldGtpInvalidApnLenDrop = value.dropVldGtpInvalidApnLenDrop;
      this._dropVldGtpInvalidImsiLenDrop = value.dropVldGtpInvalidImsiLenDrop;
      this._dropVldGtpUSpoofedSourceAddress = value.dropVldGtpUSpoofedSourceAddress;
      this._dropVldGtpV2WrongLbiCreateBearer = value.dropVldGtpV2WrongLbiCreateBearer;
      this._dropVldGtpv0SeqnumBufferFull = value.dropVldGtpv0SeqnumBufferFull;
      this._dropVldGtpv1SeqnumBufferFull = value.dropVldGtpv1SeqnumBufferFull;
      this._dropVldGtpv2SeqnumBufferFull = value.dropVldGtpv2SeqnumBufferFull;
      this._dropVldInvalidFlowLabelV0 = value.dropVldInvalidFlowLabelV0;
      this._dropVldInvalidPktLenPiggyback = value.dropVldInvalidPktLenPiggyback;
      this._dropVldInvalidTeid = value.dropVldInvalidTeid;
      this._dropVldMandatoryIeInGroupedIe = value.dropVldMandatoryIeInGroupedIe;
      this._dropVldMandatoryInformationElement = value.dropVldMandatoryInformationElement;
      this._dropVldMessageLength = value.dropVldMessageLength;
      this._dropVldOutOfOrderIe = value.dropVldOutOfOrderIe;
      this._dropVldOutOfState = value.dropVldOutOfState;
      this._dropVldOutOfStateIe = value.dropVldOutOfStateIe;
      this._dropVldProtocolFlagUnset = value.dropVldProtocolFlagUnset;
      this._dropVldReservedFieldSet = value.dropVldReservedFieldSet;
      this._dropVldReservedInformationElement = value.dropVldReservedInformationElement;
      this._dropVldSanityFailedPiggyback = value.dropVldSanityFailedPiggyback;
      this._dropVldSequenceNumCorrelation = value.dropVldSequenceNumCorrelation;
      this._dropVldTunnelIdFlag = value.dropVldTunnelIdFlag;
      this._dropVldV0ReservedMessageDrop = value.dropVldV0ReservedMessageDrop;
      this._dropVldV1ReservedMessageDrop = value.dropVldV1ReservedMessageDrop;
      this._dropVldV2ReservedMessageDrop = value.dropVldV2ReservedMessageDrop;
      this._dropVldVersionNotSupported = value.dropVldVersionNotSupported;
      this._uuid = value.uuid;
    }
  }

  // drop_vld_country_code_mismatch - computed: false, optional: true, required: false
  private _dropVldCountryCodeMismatch?: number; 
  public get dropVldCountryCodeMismatch() {
    return this.getNumberAttribute('drop_vld_country_code_mismatch');
  }
  public set dropVldCountryCodeMismatch(value: number) {
    this._dropVldCountryCodeMismatch = value;
  }
  public resetDropVldCountryCodeMismatch() {
    this._dropVldCountryCodeMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldCountryCodeMismatchInput() {
    return this._dropVldCountryCodeMismatch;
  }

  // drop_vld_cross_layer_correlation - computed: false, optional: true, required: false
  private _dropVldCrossLayerCorrelation?: number; 
  public get dropVldCrossLayerCorrelation() {
    return this.getNumberAttribute('drop_vld_cross_layer_correlation');
  }
  public set dropVldCrossLayerCorrelation(value: number) {
    this._dropVldCrossLayerCorrelation = value;
  }
  public resetDropVldCrossLayerCorrelation() {
    this._dropVldCrossLayerCorrelation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldCrossLayerCorrelationInput() {
    return this._dropVldCrossLayerCorrelation;
  }

  // drop_vld_gtp_bearer_count_exceed - computed: false, optional: true, required: false
  private _dropVldGtpBearerCountExceed?: number; 
  public get dropVldGtpBearerCountExceed() {
    return this.getNumberAttribute('drop_vld_gtp_bearer_count_exceed');
  }
  public set dropVldGtpBearerCountExceed(value: number) {
    this._dropVldGtpBearerCountExceed = value;
  }
  public resetDropVldGtpBearerCountExceed() {
    this._dropVldGtpBearerCountExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldGtpBearerCountExceedInput() {
    return this._dropVldGtpBearerCountExceed;
  }

  // drop_vld_gtp_ie_repeat_count_exceed - computed: false, optional: true, required: false
  private _dropVldGtpIeRepeatCountExceed?: number; 
  public get dropVldGtpIeRepeatCountExceed() {
    return this.getNumberAttribute('drop_vld_gtp_ie_repeat_count_exceed');
  }
  public set dropVldGtpIeRepeatCountExceed(value: number) {
    this._dropVldGtpIeRepeatCountExceed = value;
  }
  public resetDropVldGtpIeRepeatCountExceed() {
    this._dropVldGtpIeRepeatCountExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldGtpIeRepeatCountExceedInput() {
    return this._dropVldGtpIeRepeatCountExceed;
  }

  // drop_vld_gtp_invalid_apn_len_drop - computed: false, optional: true, required: false
  private _dropVldGtpInvalidApnLenDrop?: number; 
  public get dropVldGtpInvalidApnLenDrop() {
    return this.getNumberAttribute('drop_vld_gtp_invalid_apn_len_drop');
  }
  public set dropVldGtpInvalidApnLenDrop(value: number) {
    this._dropVldGtpInvalidApnLenDrop = value;
  }
  public resetDropVldGtpInvalidApnLenDrop() {
    this._dropVldGtpInvalidApnLenDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldGtpInvalidApnLenDropInput() {
    return this._dropVldGtpInvalidApnLenDrop;
  }

  // drop_vld_gtp_invalid_imsi_len_drop - computed: false, optional: true, required: false
  private _dropVldGtpInvalidImsiLenDrop?: number; 
  public get dropVldGtpInvalidImsiLenDrop() {
    return this.getNumberAttribute('drop_vld_gtp_invalid_imsi_len_drop');
  }
  public set dropVldGtpInvalidImsiLenDrop(value: number) {
    this._dropVldGtpInvalidImsiLenDrop = value;
  }
  public resetDropVldGtpInvalidImsiLenDrop() {
    this._dropVldGtpInvalidImsiLenDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldGtpInvalidImsiLenDropInput() {
    return this._dropVldGtpInvalidImsiLenDrop;
  }

  // drop_vld_gtp_u_spoofed_source_address - computed: false, optional: true, required: false
  private _dropVldGtpUSpoofedSourceAddress?: number; 
  public get dropVldGtpUSpoofedSourceAddress() {
    return this.getNumberAttribute('drop_vld_gtp_u_spoofed_source_address');
  }
  public set dropVldGtpUSpoofedSourceAddress(value: number) {
    this._dropVldGtpUSpoofedSourceAddress = value;
  }
  public resetDropVldGtpUSpoofedSourceAddress() {
    this._dropVldGtpUSpoofedSourceAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldGtpUSpoofedSourceAddressInput() {
    return this._dropVldGtpUSpoofedSourceAddress;
  }

  // drop_vld_gtp_v2_wrong_lbi_create_bearer - computed: false, optional: true, required: false
  private _dropVldGtpV2WrongLbiCreateBearer?: number; 
  public get dropVldGtpV2WrongLbiCreateBearer() {
    return this.getNumberAttribute('drop_vld_gtp_v2_wrong_lbi_create_bearer');
  }
  public set dropVldGtpV2WrongLbiCreateBearer(value: number) {
    this._dropVldGtpV2WrongLbiCreateBearer = value;
  }
  public resetDropVldGtpV2WrongLbiCreateBearer() {
    this._dropVldGtpV2WrongLbiCreateBearer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldGtpV2WrongLbiCreateBearerInput() {
    return this._dropVldGtpV2WrongLbiCreateBearer;
  }

  // drop_vld_gtpv0_seqnum_buffer_full - computed: false, optional: true, required: false
  private _dropVldGtpv0SeqnumBufferFull?: number; 
  public get dropVldGtpv0SeqnumBufferFull() {
    return this.getNumberAttribute('drop_vld_gtpv0_seqnum_buffer_full');
  }
  public set dropVldGtpv0SeqnumBufferFull(value: number) {
    this._dropVldGtpv0SeqnumBufferFull = value;
  }
  public resetDropVldGtpv0SeqnumBufferFull() {
    this._dropVldGtpv0SeqnumBufferFull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldGtpv0SeqnumBufferFullInput() {
    return this._dropVldGtpv0SeqnumBufferFull;
  }

  // drop_vld_gtpv1_seqnum_buffer_full - computed: false, optional: true, required: false
  private _dropVldGtpv1SeqnumBufferFull?: number; 
  public get dropVldGtpv1SeqnumBufferFull() {
    return this.getNumberAttribute('drop_vld_gtpv1_seqnum_buffer_full');
  }
  public set dropVldGtpv1SeqnumBufferFull(value: number) {
    this._dropVldGtpv1SeqnumBufferFull = value;
  }
  public resetDropVldGtpv1SeqnumBufferFull() {
    this._dropVldGtpv1SeqnumBufferFull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldGtpv1SeqnumBufferFullInput() {
    return this._dropVldGtpv1SeqnumBufferFull;
  }

  // drop_vld_gtpv2_seqnum_buffer_full - computed: false, optional: true, required: false
  private _dropVldGtpv2SeqnumBufferFull?: number; 
  public get dropVldGtpv2SeqnumBufferFull() {
    return this.getNumberAttribute('drop_vld_gtpv2_seqnum_buffer_full');
  }
  public set dropVldGtpv2SeqnumBufferFull(value: number) {
    this._dropVldGtpv2SeqnumBufferFull = value;
  }
  public resetDropVldGtpv2SeqnumBufferFull() {
    this._dropVldGtpv2SeqnumBufferFull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldGtpv2SeqnumBufferFullInput() {
    return this._dropVldGtpv2SeqnumBufferFull;
  }

  // drop_vld_invalid_flow_label_v0 - computed: false, optional: true, required: false
  private _dropVldInvalidFlowLabelV0?: number; 
  public get dropVldInvalidFlowLabelV0() {
    return this.getNumberAttribute('drop_vld_invalid_flow_label_v0');
  }
  public set dropVldInvalidFlowLabelV0(value: number) {
    this._dropVldInvalidFlowLabelV0 = value;
  }
  public resetDropVldInvalidFlowLabelV0() {
    this._dropVldInvalidFlowLabelV0 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldInvalidFlowLabelV0Input() {
    return this._dropVldInvalidFlowLabelV0;
  }

  // drop_vld_invalid_pkt_len_piggyback - computed: false, optional: true, required: false
  private _dropVldInvalidPktLenPiggyback?: number; 
  public get dropVldInvalidPktLenPiggyback() {
    return this.getNumberAttribute('drop_vld_invalid_pkt_len_piggyback');
  }
  public set dropVldInvalidPktLenPiggyback(value: number) {
    this._dropVldInvalidPktLenPiggyback = value;
  }
  public resetDropVldInvalidPktLenPiggyback() {
    this._dropVldInvalidPktLenPiggyback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldInvalidPktLenPiggybackInput() {
    return this._dropVldInvalidPktLenPiggyback;
  }

  // drop_vld_invalid_teid - computed: false, optional: true, required: false
  private _dropVldInvalidTeid?: number; 
  public get dropVldInvalidTeid() {
    return this.getNumberAttribute('drop_vld_invalid_teid');
  }
  public set dropVldInvalidTeid(value: number) {
    this._dropVldInvalidTeid = value;
  }
  public resetDropVldInvalidTeid() {
    this._dropVldInvalidTeid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldInvalidTeidInput() {
    return this._dropVldInvalidTeid;
  }

  // drop_vld_mandatory_ie_in_grouped_ie - computed: false, optional: true, required: false
  private _dropVldMandatoryIeInGroupedIe?: number; 
  public get dropVldMandatoryIeInGroupedIe() {
    return this.getNumberAttribute('drop_vld_mandatory_ie_in_grouped_ie');
  }
  public set dropVldMandatoryIeInGroupedIe(value: number) {
    this._dropVldMandatoryIeInGroupedIe = value;
  }
  public resetDropVldMandatoryIeInGroupedIe() {
    this._dropVldMandatoryIeInGroupedIe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldMandatoryIeInGroupedIeInput() {
    return this._dropVldMandatoryIeInGroupedIe;
  }

  // drop_vld_mandatory_information_element - computed: false, optional: true, required: false
  private _dropVldMandatoryInformationElement?: number; 
  public get dropVldMandatoryInformationElement() {
    return this.getNumberAttribute('drop_vld_mandatory_information_element');
  }
  public set dropVldMandatoryInformationElement(value: number) {
    this._dropVldMandatoryInformationElement = value;
  }
  public resetDropVldMandatoryInformationElement() {
    this._dropVldMandatoryInformationElement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldMandatoryInformationElementInput() {
    return this._dropVldMandatoryInformationElement;
  }

  // drop_vld_message_length - computed: false, optional: true, required: false
  private _dropVldMessageLength?: number; 
  public get dropVldMessageLength() {
    return this.getNumberAttribute('drop_vld_message_length');
  }
  public set dropVldMessageLength(value: number) {
    this._dropVldMessageLength = value;
  }
  public resetDropVldMessageLength() {
    this._dropVldMessageLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldMessageLengthInput() {
    return this._dropVldMessageLength;
  }

  // drop_vld_out_of_order_ie - computed: false, optional: true, required: false
  private _dropVldOutOfOrderIe?: number; 
  public get dropVldOutOfOrderIe() {
    return this.getNumberAttribute('drop_vld_out_of_order_ie');
  }
  public set dropVldOutOfOrderIe(value: number) {
    this._dropVldOutOfOrderIe = value;
  }
  public resetDropVldOutOfOrderIe() {
    this._dropVldOutOfOrderIe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldOutOfOrderIeInput() {
    return this._dropVldOutOfOrderIe;
  }

  // drop_vld_out_of_state - computed: false, optional: true, required: false
  private _dropVldOutOfState?: number; 
  public get dropVldOutOfState() {
    return this.getNumberAttribute('drop_vld_out_of_state');
  }
  public set dropVldOutOfState(value: number) {
    this._dropVldOutOfState = value;
  }
  public resetDropVldOutOfState() {
    this._dropVldOutOfState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldOutOfStateInput() {
    return this._dropVldOutOfState;
  }

  // drop_vld_out_of_state_ie - computed: false, optional: true, required: false
  private _dropVldOutOfStateIe?: number; 
  public get dropVldOutOfStateIe() {
    return this.getNumberAttribute('drop_vld_out_of_state_ie');
  }
  public set dropVldOutOfStateIe(value: number) {
    this._dropVldOutOfStateIe = value;
  }
  public resetDropVldOutOfStateIe() {
    this._dropVldOutOfStateIe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldOutOfStateIeInput() {
    return this._dropVldOutOfStateIe;
  }

  // drop_vld_protocol_flag_unset - computed: false, optional: true, required: false
  private _dropVldProtocolFlagUnset?: number; 
  public get dropVldProtocolFlagUnset() {
    return this.getNumberAttribute('drop_vld_protocol_flag_unset');
  }
  public set dropVldProtocolFlagUnset(value: number) {
    this._dropVldProtocolFlagUnset = value;
  }
  public resetDropVldProtocolFlagUnset() {
    this._dropVldProtocolFlagUnset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldProtocolFlagUnsetInput() {
    return this._dropVldProtocolFlagUnset;
  }

  // drop_vld_reserved_field_set - computed: false, optional: true, required: false
  private _dropVldReservedFieldSet?: number; 
  public get dropVldReservedFieldSet() {
    return this.getNumberAttribute('drop_vld_reserved_field_set');
  }
  public set dropVldReservedFieldSet(value: number) {
    this._dropVldReservedFieldSet = value;
  }
  public resetDropVldReservedFieldSet() {
    this._dropVldReservedFieldSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldReservedFieldSetInput() {
    return this._dropVldReservedFieldSet;
  }

  // drop_vld_reserved_information_element - computed: false, optional: true, required: false
  private _dropVldReservedInformationElement?: number; 
  public get dropVldReservedInformationElement() {
    return this.getNumberAttribute('drop_vld_reserved_information_element');
  }
  public set dropVldReservedInformationElement(value: number) {
    this._dropVldReservedInformationElement = value;
  }
  public resetDropVldReservedInformationElement() {
    this._dropVldReservedInformationElement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldReservedInformationElementInput() {
    return this._dropVldReservedInformationElement;
  }

  // drop_vld_sanity_failed_piggyback - computed: false, optional: true, required: false
  private _dropVldSanityFailedPiggyback?: number; 
  public get dropVldSanityFailedPiggyback() {
    return this.getNumberAttribute('drop_vld_sanity_failed_piggyback');
  }
  public set dropVldSanityFailedPiggyback(value: number) {
    this._dropVldSanityFailedPiggyback = value;
  }
  public resetDropVldSanityFailedPiggyback() {
    this._dropVldSanityFailedPiggyback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldSanityFailedPiggybackInput() {
    return this._dropVldSanityFailedPiggyback;
  }

  // drop_vld_sequence_num_correlation - computed: false, optional: true, required: false
  private _dropVldSequenceNumCorrelation?: number; 
  public get dropVldSequenceNumCorrelation() {
    return this.getNumberAttribute('drop_vld_sequence_num_correlation');
  }
  public set dropVldSequenceNumCorrelation(value: number) {
    this._dropVldSequenceNumCorrelation = value;
  }
  public resetDropVldSequenceNumCorrelation() {
    this._dropVldSequenceNumCorrelation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldSequenceNumCorrelationInput() {
    return this._dropVldSequenceNumCorrelation;
  }

  // drop_vld_tunnel_id_flag - computed: false, optional: true, required: false
  private _dropVldTunnelIdFlag?: number; 
  public get dropVldTunnelIdFlag() {
    return this.getNumberAttribute('drop_vld_tunnel_id_flag');
  }
  public set dropVldTunnelIdFlag(value: number) {
    this._dropVldTunnelIdFlag = value;
  }
  public resetDropVldTunnelIdFlag() {
    this._dropVldTunnelIdFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldTunnelIdFlagInput() {
    return this._dropVldTunnelIdFlag;
  }

  // drop_vld_v0_reserved_message_drop - computed: false, optional: true, required: false
  private _dropVldV0ReservedMessageDrop?: number; 
  public get dropVldV0ReservedMessageDrop() {
    return this.getNumberAttribute('drop_vld_v0_reserved_message_drop');
  }
  public set dropVldV0ReservedMessageDrop(value: number) {
    this._dropVldV0ReservedMessageDrop = value;
  }
  public resetDropVldV0ReservedMessageDrop() {
    this._dropVldV0ReservedMessageDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldV0ReservedMessageDropInput() {
    return this._dropVldV0ReservedMessageDrop;
  }

  // drop_vld_v1_reserved_message_drop - computed: false, optional: true, required: false
  private _dropVldV1ReservedMessageDrop?: number; 
  public get dropVldV1ReservedMessageDrop() {
    return this.getNumberAttribute('drop_vld_v1_reserved_message_drop');
  }
  public set dropVldV1ReservedMessageDrop(value: number) {
    this._dropVldV1ReservedMessageDrop = value;
  }
  public resetDropVldV1ReservedMessageDrop() {
    this._dropVldV1ReservedMessageDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldV1ReservedMessageDropInput() {
    return this._dropVldV1ReservedMessageDrop;
  }

  // drop_vld_v2_reserved_message_drop - computed: false, optional: true, required: false
  private _dropVldV2ReservedMessageDrop?: number; 
  public get dropVldV2ReservedMessageDrop() {
    return this.getNumberAttribute('drop_vld_v2_reserved_message_drop');
  }
  public set dropVldV2ReservedMessageDrop(value: number) {
    this._dropVldV2ReservedMessageDrop = value;
  }
  public resetDropVldV2ReservedMessageDrop() {
    this._dropVldV2ReservedMessageDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldV2ReservedMessageDropInput() {
    return this._dropVldV2ReservedMessageDrop;
  }

  // drop_vld_version_not_supported - computed: false, optional: true, required: false
  private _dropVldVersionNotSupported?: number; 
  public get dropVldVersionNotSupported() {
    return this.getNumberAttribute('drop_vld_version_not_supported');
  }
  public set dropVldVersionNotSupported(value: number) {
    this._dropVldVersionNotSupported = value;
  }
  public resetDropVldVersionNotSupported() {
    this._dropVldVersionNotSupported = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldVersionNotSupportedInput() {
    return this._dropVldVersionNotSupported;
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
}
export interface VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsRate {
  /**
  * Enable automatic packet-capture for Validation Drop: Country Code Mismatch in IMSI and MSISDN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl#drop_vld_country_code_mismatch VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl#drop_vld_country_code_mismatch}
  */
  readonly dropVldCountryCodeMismatch?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: Cross Layer IP Address Mismatch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl#drop_vld_cross_layer_correlation VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl#drop_vld_cross_layer_correlation}
  */
  readonly dropVldCrossLayerCorrelation?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: GTP Bearer count exceeded max (11)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl#drop_vld_gtp_bearer_count_exceed VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl#drop_vld_gtp_bearer_count_exceed}
  */
  readonly dropVldGtpBearerCountExceed?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: GTP repeated IE count exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl#drop_vld_gtp_ie_repeat_count_exceed VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl#drop_vld_gtp_ie_repeat_count_exceed}
  */
  readonly dropVldGtpIeRepeatCountExceed?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: GTP-C Invalid APN Length Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl#drop_vld_gtp_invalid_apn_len_drop VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl#drop_vld_gtp_invalid_apn_len_drop}
  */
  readonly dropVldGtpInvalidApnLenDrop?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: GTP-C Invalid IMSI Length Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl#drop_vld_gtp_invalid_imsi_len_drop VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl#drop_vld_gtp_invalid_imsi_len_drop}
  */
  readonly dropVldGtpInvalidImsiLenDrop?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: GTP-U IP Address Spoofed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl#drop_vld_gtp_u_spoofed_source_address VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl#drop_vld_gtp_u_spoofed_source_address}
  */
  readonly dropVldGtpUSpoofedSourceAddress?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: GTPV2-C Wrong LBI in Create Bearer Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl#drop_vld_gtp_v2_wrong_lbi_create_bearer VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl#drop_vld_gtp_v2_wrong_lbi_create_bearer}
  */
  readonly dropVldGtpV2WrongLbiCreateBearer?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: GTPV0-C conn Sequence number Buffer Full
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl#drop_vld_gtpv0_seqnum_buffer_full VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl#drop_vld_gtpv0_seqnum_buffer_full}
  */
  readonly dropVldGtpv0SeqnumBufferFull?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: GTPV1-C conn Sequence number Buffer Full
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl#drop_vld_gtpv1_seqnum_buffer_full VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl#drop_vld_gtpv1_seqnum_buffer_full}
  */
  readonly dropVldGtpv1SeqnumBufferFull?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: GTPV2-C conn Sequence number Buffer Full
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl#drop_vld_gtpv2_seqnum_buffer_full VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl#drop_vld_gtpv2_seqnum_buffer_full}
  */
  readonly dropVldGtpv2SeqnumBufferFull?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: Invalid Flow Label in GTPv0-C Header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl#drop_vld_invalid_flow_label_v0 VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl#drop_vld_invalid_flow_label_v0}
  */
  readonly dropVldInvalidFlowLabelV0?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: Piggyback message invalid packet length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl#drop_vld_invalid_pkt_len_piggyback VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl#drop_vld_invalid_pkt_len_piggyback}
  */
  readonly dropVldInvalidPktLenPiggyback?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: Invalid TEID Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl#drop_vld_invalid_teid VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl#drop_vld_invalid_teid}
  */
  readonly dropVldInvalidTeid?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: Mandatory IE in Grouped IE Not Present
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl#drop_vld_mandatory_ie_in_grouped_ie VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl#drop_vld_mandatory_ie_in_grouped_ie}
  */
  readonly dropVldMandatoryIeInGroupedIe?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: Mandatory IE Not Present
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl#drop_vld_mandatory_information_element VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl#drop_vld_mandatory_information_element}
  */
  readonly dropVldMandatoryInformationElement?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: Message Length Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl#drop_vld_message_length VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl#drop_vld_message_length}
  */
  readonly dropVldMessageLength?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: GTPv1-C Message Out of Order IE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl#drop_vld_out_of_order_ie VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl#drop_vld_out_of_order_ie}
  */
  readonly dropVldOutOfOrderIe?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: Out Of State GTP Message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl#drop_vld_out_of_state VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl#drop_vld_out_of_state}
  */
  readonly dropVldOutOfState?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: Unexpected IE Present in Message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl#drop_vld_out_of_state_ie VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl#drop_vld_out_of_state_ie}
  */
  readonly dropVldOutOfStateIe?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: Protocol flag in Header Field not Set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl#drop_vld_protocol_flag_unset VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl#drop_vld_protocol_flag_unset}
  */
  readonly dropVldProtocolFlagUnset?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: Reserved Header Field Set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl#drop_vld_reserved_field_set VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl#drop_vld_reserved_field_set}
  */
  readonly dropVldReservedFieldSet?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: Reserved IE Field Present
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl#drop_vld_reserved_information_element VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl#drop_vld_reserved_information_element}
  */
  readonly dropVldReservedInformationElement?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: piggyback message anomaly failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl#drop_vld_sanity_failed_piggyback VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl#drop_vld_sanity_failed_piggyback}
  */
  readonly dropVldSanityFailedPiggyback?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: GTP-C Sequence number Mismatch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl#drop_vld_sequence_num_correlation VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl#drop_vld_sequence_num_correlation}
  */
  readonly dropVldSequenceNumCorrelation?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: Tunnel Header Flag Not Set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl#drop_vld_tunnel_id_flag VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl#drop_vld_tunnel_id_flag}
  */
  readonly dropVldTunnelIdFlag?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: GTPv0-C Reserved Message Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl#drop_vld_v0_reserved_message_drop VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl#drop_vld_v0_reserved_message_drop}
  */
  readonly dropVldV0ReservedMessageDrop?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: GTPv1-C Reserved Message Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl#drop_vld_v1_reserved_message_drop VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl#drop_vld_v1_reserved_message_drop}
  */
  readonly dropVldV1ReservedMessageDrop?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: GTPv2-C Reserved Message Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl#drop_vld_v2_reserved_message_drop VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl#drop_vld_v2_reserved_message_drop}
  */
  readonly dropVldV2ReservedMessageDrop?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: Invalid GTP version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl#drop_vld_version_not_supported VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl#drop_vld_version_not_supported}
  */
  readonly dropVldVersionNotSupported?: number;
  /**
  * Time in seconds to look for the anomaly, default is 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl#duration VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl#duration}
  */
  readonly duration?: number;
  /**
  * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl#threshold_exceeded_by VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl#threshold_exceeded_by}
  */
  readonly thresholdExceededBy?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl#uuid VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsRateToTerraform(struct?: VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsRateOutputReference | VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsRate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    drop_vld_country_code_mismatch: cdktf.numberToTerraform(struct!.dropVldCountryCodeMismatch),
    drop_vld_cross_layer_correlation: cdktf.numberToTerraform(struct!.dropVldCrossLayerCorrelation),
    drop_vld_gtp_bearer_count_exceed: cdktf.numberToTerraform(struct!.dropVldGtpBearerCountExceed),
    drop_vld_gtp_ie_repeat_count_exceed: cdktf.numberToTerraform(struct!.dropVldGtpIeRepeatCountExceed),
    drop_vld_gtp_invalid_apn_len_drop: cdktf.numberToTerraform(struct!.dropVldGtpInvalidApnLenDrop),
    drop_vld_gtp_invalid_imsi_len_drop: cdktf.numberToTerraform(struct!.dropVldGtpInvalidImsiLenDrop),
    drop_vld_gtp_u_spoofed_source_address: cdktf.numberToTerraform(struct!.dropVldGtpUSpoofedSourceAddress),
    drop_vld_gtp_v2_wrong_lbi_create_bearer: cdktf.numberToTerraform(struct!.dropVldGtpV2WrongLbiCreateBearer),
    drop_vld_gtpv0_seqnum_buffer_full: cdktf.numberToTerraform(struct!.dropVldGtpv0SeqnumBufferFull),
    drop_vld_gtpv1_seqnum_buffer_full: cdktf.numberToTerraform(struct!.dropVldGtpv1SeqnumBufferFull),
    drop_vld_gtpv2_seqnum_buffer_full: cdktf.numberToTerraform(struct!.dropVldGtpv2SeqnumBufferFull),
    drop_vld_invalid_flow_label_v0: cdktf.numberToTerraform(struct!.dropVldInvalidFlowLabelV0),
    drop_vld_invalid_pkt_len_piggyback: cdktf.numberToTerraform(struct!.dropVldInvalidPktLenPiggyback),
    drop_vld_invalid_teid: cdktf.numberToTerraform(struct!.dropVldInvalidTeid),
    drop_vld_mandatory_ie_in_grouped_ie: cdktf.numberToTerraform(struct!.dropVldMandatoryIeInGroupedIe),
    drop_vld_mandatory_information_element: cdktf.numberToTerraform(struct!.dropVldMandatoryInformationElement),
    drop_vld_message_length: cdktf.numberToTerraform(struct!.dropVldMessageLength),
    drop_vld_out_of_order_ie: cdktf.numberToTerraform(struct!.dropVldOutOfOrderIe),
    drop_vld_out_of_state: cdktf.numberToTerraform(struct!.dropVldOutOfState),
    drop_vld_out_of_state_ie: cdktf.numberToTerraform(struct!.dropVldOutOfStateIe),
    drop_vld_protocol_flag_unset: cdktf.numberToTerraform(struct!.dropVldProtocolFlagUnset),
    drop_vld_reserved_field_set: cdktf.numberToTerraform(struct!.dropVldReservedFieldSet),
    drop_vld_reserved_information_element: cdktf.numberToTerraform(struct!.dropVldReservedInformationElement),
    drop_vld_sanity_failed_piggyback: cdktf.numberToTerraform(struct!.dropVldSanityFailedPiggyback),
    drop_vld_sequence_num_correlation: cdktf.numberToTerraform(struct!.dropVldSequenceNumCorrelation),
    drop_vld_tunnel_id_flag: cdktf.numberToTerraform(struct!.dropVldTunnelIdFlag),
    drop_vld_v0_reserved_message_drop: cdktf.numberToTerraform(struct!.dropVldV0ReservedMessageDrop),
    drop_vld_v1_reserved_message_drop: cdktf.numberToTerraform(struct!.dropVldV1ReservedMessageDrop),
    drop_vld_v2_reserved_message_drop: cdktf.numberToTerraform(struct!.dropVldV2ReservedMessageDrop),
    drop_vld_version_not_supported: cdktf.numberToTerraform(struct!.dropVldVersionNotSupported),
    duration: cdktf.numberToTerraform(struct!.duration),
    threshold_exceeded_by: cdktf.numberToTerraform(struct!.thresholdExceededBy),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsRateToHclTerraform(struct?: VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsRateOutputReference | VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsRate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    drop_vld_country_code_mismatch: {
      value: cdktf.numberToHclTerraform(struct!.dropVldCountryCodeMismatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_cross_layer_correlation: {
      value: cdktf.numberToHclTerraform(struct!.dropVldCrossLayerCorrelation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_gtp_bearer_count_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dropVldGtpBearerCountExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_gtp_ie_repeat_count_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dropVldGtpIeRepeatCountExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_gtp_invalid_apn_len_drop: {
      value: cdktf.numberToHclTerraform(struct!.dropVldGtpInvalidApnLenDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_gtp_invalid_imsi_len_drop: {
      value: cdktf.numberToHclTerraform(struct!.dropVldGtpInvalidImsiLenDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_gtp_u_spoofed_source_address: {
      value: cdktf.numberToHclTerraform(struct!.dropVldGtpUSpoofedSourceAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_gtp_v2_wrong_lbi_create_bearer: {
      value: cdktf.numberToHclTerraform(struct!.dropVldGtpV2WrongLbiCreateBearer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_gtpv0_seqnum_buffer_full: {
      value: cdktf.numberToHclTerraform(struct!.dropVldGtpv0SeqnumBufferFull),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_gtpv1_seqnum_buffer_full: {
      value: cdktf.numberToHclTerraform(struct!.dropVldGtpv1SeqnumBufferFull),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_gtpv2_seqnum_buffer_full: {
      value: cdktf.numberToHclTerraform(struct!.dropVldGtpv2SeqnumBufferFull),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_invalid_flow_label_v0: {
      value: cdktf.numberToHclTerraform(struct!.dropVldInvalidFlowLabelV0),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_invalid_pkt_len_piggyback: {
      value: cdktf.numberToHclTerraform(struct!.dropVldInvalidPktLenPiggyback),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_invalid_teid: {
      value: cdktf.numberToHclTerraform(struct!.dropVldInvalidTeid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_mandatory_ie_in_grouped_ie: {
      value: cdktf.numberToHclTerraform(struct!.dropVldMandatoryIeInGroupedIe),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_mandatory_information_element: {
      value: cdktf.numberToHclTerraform(struct!.dropVldMandatoryInformationElement),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_message_length: {
      value: cdktf.numberToHclTerraform(struct!.dropVldMessageLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_out_of_order_ie: {
      value: cdktf.numberToHclTerraform(struct!.dropVldOutOfOrderIe),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_out_of_state: {
      value: cdktf.numberToHclTerraform(struct!.dropVldOutOfState),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_out_of_state_ie: {
      value: cdktf.numberToHclTerraform(struct!.dropVldOutOfStateIe),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_protocol_flag_unset: {
      value: cdktf.numberToHclTerraform(struct!.dropVldProtocolFlagUnset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_reserved_field_set: {
      value: cdktf.numberToHclTerraform(struct!.dropVldReservedFieldSet),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_reserved_information_element: {
      value: cdktf.numberToHclTerraform(struct!.dropVldReservedInformationElement),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_sanity_failed_piggyback: {
      value: cdktf.numberToHclTerraform(struct!.dropVldSanityFailedPiggyback),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_sequence_num_correlation: {
      value: cdktf.numberToHclTerraform(struct!.dropVldSequenceNumCorrelation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_tunnel_id_flag: {
      value: cdktf.numberToHclTerraform(struct!.dropVldTunnelIdFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_v0_reserved_message_drop: {
      value: cdktf.numberToHclTerraform(struct!.dropVldV0ReservedMessageDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_v1_reserved_message_drop: {
      value: cdktf.numberToHclTerraform(struct!.dropVldV1ReservedMessageDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_v2_reserved_message_drop: {
      value: cdktf.numberToHclTerraform(struct!.dropVldV2ReservedMessageDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_version_not_supported: {
      value: cdktf.numberToHclTerraform(struct!.dropVldVersionNotSupported),
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
    threshold_exceeded_by: {
      value: cdktf.numberToHclTerraform(struct!.thresholdExceededBy),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsRateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsRate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dropVldCountryCodeMismatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldCountryCodeMismatch = this._dropVldCountryCodeMismatch;
    }
    if (this._dropVldCrossLayerCorrelation !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldCrossLayerCorrelation = this._dropVldCrossLayerCorrelation;
    }
    if (this._dropVldGtpBearerCountExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldGtpBearerCountExceed = this._dropVldGtpBearerCountExceed;
    }
    if (this._dropVldGtpIeRepeatCountExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldGtpIeRepeatCountExceed = this._dropVldGtpIeRepeatCountExceed;
    }
    if (this._dropVldGtpInvalidApnLenDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldGtpInvalidApnLenDrop = this._dropVldGtpInvalidApnLenDrop;
    }
    if (this._dropVldGtpInvalidImsiLenDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldGtpInvalidImsiLenDrop = this._dropVldGtpInvalidImsiLenDrop;
    }
    if (this._dropVldGtpUSpoofedSourceAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldGtpUSpoofedSourceAddress = this._dropVldGtpUSpoofedSourceAddress;
    }
    if (this._dropVldGtpV2WrongLbiCreateBearer !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldGtpV2WrongLbiCreateBearer = this._dropVldGtpV2WrongLbiCreateBearer;
    }
    if (this._dropVldGtpv0SeqnumBufferFull !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldGtpv0SeqnumBufferFull = this._dropVldGtpv0SeqnumBufferFull;
    }
    if (this._dropVldGtpv1SeqnumBufferFull !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldGtpv1SeqnumBufferFull = this._dropVldGtpv1SeqnumBufferFull;
    }
    if (this._dropVldGtpv2SeqnumBufferFull !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldGtpv2SeqnumBufferFull = this._dropVldGtpv2SeqnumBufferFull;
    }
    if (this._dropVldInvalidFlowLabelV0 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldInvalidFlowLabelV0 = this._dropVldInvalidFlowLabelV0;
    }
    if (this._dropVldInvalidPktLenPiggyback !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldInvalidPktLenPiggyback = this._dropVldInvalidPktLenPiggyback;
    }
    if (this._dropVldInvalidTeid !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldInvalidTeid = this._dropVldInvalidTeid;
    }
    if (this._dropVldMandatoryIeInGroupedIe !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldMandatoryIeInGroupedIe = this._dropVldMandatoryIeInGroupedIe;
    }
    if (this._dropVldMandatoryInformationElement !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldMandatoryInformationElement = this._dropVldMandatoryInformationElement;
    }
    if (this._dropVldMessageLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldMessageLength = this._dropVldMessageLength;
    }
    if (this._dropVldOutOfOrderIe !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldOutOfOrderIe = this._dropVldOutOfOrderIe;
    }
    if (this._dropVldOutOfState !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldOutOfState = this._dropVldOutOfState;
    }
    if (this._dropVldOutOfStateIe !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldOutOfStateIe = this._dropVldOutOfStateIe;
    }
    if (this._dropVldProtocolFlagUnset !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldProtocolFlagUnset = this._dropVldProtocolFlagUnset;
    }
    if (this._dropVldReservedFieldSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldReservedFieldSet = this._dropVldReservedFieldSet;
    }
    if (this._dropVldReservedInformationElement !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldReservedInformationElement = this._dropVldReservedInformationElement;
    }
    if (this._dropVldSanityFailedPiggyback !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldSanityFailedPiggyback = this._dropVldSanityFailedPiggyback;
    }
    if (this._dropVldSequenceNumCorrelation !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldSequenceNumCorrelation = this._dropVldSequenceNumCorrelation;
    }
    if (this._dropVldTunnelIdFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldTunnelIdFlag = this._dropVldTunnelIdFlag;
    }
    if (this._dropVldV0ReservedMessageDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldV0ReservedMessageDrop = this._dropVldV0ReservedMessageDrop;
    }
    if (this._dropVldV1ReservedMessageDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldV1ReservedMessageDrop = this._dropVldV1ReservedMessageDrop;
    }
    if (this._dropVldV2ReservedMessageDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldV2ReservedMessageDrop = this._dropVldV2ReservedMessageDrop;
    }
    if (this._dropVldVersionNotSupported !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldVersionNotSupported = this._dropVldVersionNotSupported;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._thresholdExceededBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdExceededBy = this._thresholdExceededBy;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsRate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dropVldCountryCodeMismatch = undefined;
      this._dropVldCrossLayerCorrelation = undefined;
      this._dropVldGtpBearerCountExceed = undefined;
      this._dropVldGtpIeRepeatCountExceed = undefined;
      this._dropVldGtpInvalidApnLenDrop = undefined;
      this._dropVldGtpInvalidImsiLenDrop = undefined;
      this._dropVldGtpUSpoofedSourceAddress = undefined;
      this._dropVldGtpV2WrongLbiCreateBearer = undefined;
      this._dropVldGtpv0SeqnumBufferFull = undefined;
      this._dropVldGtpv1SeqnumBufferFull = undefined;
      this._dropVldGtpv2SeqnumBufferFull = undefined;
      this._dropVldInvalidFlowLabelV0 = undefined;
      this._dropVldInvalidPktLenPiggyback = undefined;
      this._dropVldInvalidTeid = undefined;
      this._dropVldMandatoryIeInGroupedIe = undefined;
      this._dropVldMandatoryInformationElement = undefined;
      this._dropVldMessageLength = undefined;
      this._dropVldOutOfOrderIe = undefined;
      this._dropVldOutOfState = undefined;
      this._dropVldOutOfStateIe = undefined;
      this._dropVldProtocolFlagUnset = undefined;
      this._dropVldReservedFieldSet = undefined;
      this._dropVldReservedInformationElement = undefined;
      this._dropVldSanityFailedPiggyback = undefined;
      this._dropVldSequenceNumCorrelation = undefined;
      this._dropVldTunnelIdFlag = undefined;
      this._dropVldV0ReservedMessageDrop = undefined;
      this._dropVldV1ReservedMessageDrop = undefined;
      this._dropVldV2ReservedMessageDrop = undefined;
      this._dropVldVersionNotSupported = undefined;
      this._duration = undefined;
      this._thresholdExceededBy = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dropVldCountryCodeMismatch = value.dropVldCountryCodeMismatch;
      this._dropVldCrossLayerCorrelation = value.dropVldCrossLayerCorrelation;
      this._dropVldGtpBearerCountExceed = value.dropVldGtpBearerCountExceed;
      this._dropVldGtpIeRepeatCountExceed = value.dropVldGtpIeRepeatCountExceed;
      this._dropVldGtpInvalidApnLenDrop = value.dropVldGtpInvalidApnLenDrop;
      this._dropVldGtpInvalidImsiLenDrop = value.dropVldGtpInvalidImsiLenDrop;
      this._dropVldGtpUSpoofedSourceAddress = value.dropVldGtpUSpoofedSourceAddress;
      this._dropVldGtpV2WrongLbiCreateBearer = value.dropVldGtpV2WrongLbiCreateBearer;
      this._dropVldGtpv0SeqnumBufferFull = value.dropVldGtpv0SeqnumBufferFull;
      this._dropVldGtpv1SeqnumBufferFull = value.dropVldGtpv1SeqnumBufferFull;
      this._dropVldGtpv2SeqnumBufferFull = value.dropVldGtpv2SeqnumBufferFull;
      this._dropVldInvalidFlowLabelV0 = value.dropVldInvalidFlowLabelV0;
      this._dropVldInvalidPktLenPiggyback = value.dropVldInvalidPktLenPiggyback;
      this._dropVldInvalidTeid = value.dropVldInvalidTeid;
      this._dropVldMandatoryIeInGroupedIe = value.dropVldMandatoryIeInGroupedIe;
      this._dropVldMandatoryInformationElement = value.dropVldMandatoryInformationElement;
      this._dropVldMessageLength = value.dropVldMessageLength;
      this._dropVldOutOfOrderIe = value.dropVldOutOfOrderIe;
      this._dropVldOutOfState = value.dropVldOutOfState;
      this._dropVldOutOfStateIe = value.dropVldOutOfStateIe;
      this._dropVldProtocolFlagUnset = value.dropVldProtocolFlagUnset;
      this._dropVldReservedFieldSet = value.dropVldReservedFieldSet;
      this._dropVldReservedInformationElement = value.dropVldReservedInformationElement;
      this._dropVldSanityFailedPiggyback = value.dropVldSanityFailedPiggyback;
      this._dropVldSequenceNumCorrelation = value.dropVldSequenceNumCorrelation;
      this._dropVldTunnelIdFlag = value.dropVldTunnelIdFlag;
      this._dropVldV0ReservedMessageDrop = value.dropVldV0ReservedMessageDrop;
      this._dropVldV1ReservedMessageDrop = value.dropVldV1ReservedMessageDrop;
      this._dropVldV2ReservedMessageDrop = value.dropVldV2ReservedMessageDrop;
      this._dropVldVersionNotSupported = value.dropVldVersionNotSupported;
      this._duration = value.duration;
      this._thresholdExceededBy = value.thresholdExceededBy;
      this._uuid = value.uuid;
    }
  }

  // drop_vld_country_code_mismatch - computed: false, optional: true, required: false
  private _dropVldCountryCodeMismatch?: number; 
  public get dropVldCountryCodeMismatch() {
    return this.getNumberAttribute('drop_vld_country_code_mismatch');
  }
  public set dropVldCountryCodeMismatch(value: number) {
    this._dropVldCountryCodeMismatch = value;
  }
  public resetDropVldCountryCodeMismatch() {
    this._dropVldCountryCodeMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldCountryCodeMismatchInput() {
    return this._dropVldCountryCodeMismatch;
  }

  // drop_vld_cross_layer_correlation - computed: false, optional: true, required: false
  private _dropVldCrossLayerCorrelation?: number; 
  public get dropVldCrossLayerCorrelation() {
    return this.getNumberAttribute('drop_vld_cross_layer_correlation');
  }
  public set dropVldCrossLayerCorrelation(value: number) {
    this._dropVldCrossLayerCorrelation = value;
  }
  public resetDropVldCrossLayerCorrelation() {
    this._dropVldCrossLayerCorrelation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldCrossLayerCorrelationInput() {
    return this._dropVldCrossLayerCorrelation;
  }

  // drop_vld_gtp_bearer_count_exceed - computed: false, optional: true, required: false
  private _dropVldGtpBearerCountExceed?: number; 
  public get dropVldGtpBearerCountExceed() {
    return this.getNumberAttribute('drop_vld_gtp_bearer_count_exceed');
  }
  public set dropVldGtpBearerCountExceed(value: number) {
    this._dropVldGtpBearerCountExceed = value;
  }
  public resetDropVldGtpBearerCountExceed() {
    this._dropVldGtpBearerCountExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldGtpBearerCountExceedInput() {
    return this._dropVldGtpBearerCountExceed;
  }

  // drop_vld_gtp_ie_repeat_count_exceed - computed: false, optional: true, required: false
  private _dropVldGtpIeRepeatCountExceed?: number; 
  public get dropVldGtpIeRepeatCountExceed() {
    return this.getNumberAttribute('drop_vld_gtp_ie_repeat_count_exceed');
  }
  public set dropVldGtpIeRepeatCountExceed(value: number) {
    this._dropVldGtpIeRepeatCountExceed = value;
  }
  public resetDropVldGtpIeRepeatCountExceed() {
    this._dropVldGtpIeRepeatCountExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldGtpIeRepeatCountExceedInput() {
    return this._dropVldGtpIeRepeatCountExceed;
  }

  // drop_vld_gtp_invalid_apn_len_drop - computed: false, optional: true, required: false
  private _dropVldGtpInvalidApnLenDrop?: number; 
  public get dropVldGtpInvalidApnLenDrop() {
    return this.getNumberAttribute('drop_vld_gtp_invalid_apn_len_drop');
  }
  public set dropVldGtpInvalidApnLenDrop(value: number) {
    this._dropVldGtpInvalidApnLenDrop = value;
  }
  public resetDropVldGtpInvalidApnLenDrop() {
    this._dropVldGtpInvalidApnLenDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldGtpInvalidApnLenDropInput() {
    return this._dropVldGtpInvalidApnLenDrop;
  }

  // drop_vld_gtp_invalid_imsi_len_drop - computed: false, optional: true, required: false
  private _dropVldGtpInvalidImsiLenDrop?: number; 
  public get dropVldGtpInvalidImsiLenDrop() {
    return this.getNumberAttribute('drop_vld_gtp_invalid_imsi_len_drop');
  }
  public set dropVldGtpInvalidImsiLenDrop(value: number) {
    this._dropVldGtpInvalidImsiLenDrop = value;
  }
  public resetDropVldGtpInvalidImsiLenDrop() {
    this._dropVldGtpInvalidImsiLenDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldGtpInvalidImsiLenDropInput() {
    return this._dropVldGtpInvalidImsiLenDrop;
  }

  // drop_vld_gtp_u_spoofed_source_address - computed: false, optional: true, required: false
  private _dropVldGtpUSpoofedSourceAddress?: number; 
  public get dropVldGtpUSpoofedSourceAddress() {
    return this.getNumberAttribute('drop_vld_gtp_u_spoofed_source_address');
  }
  public set dropVldGtpUSpoofedSourceAddress(value: number) {
    this._dropVldGtpUSpoofedSourceAddress = value;
  }
  public resetDropVldGtpUSpoofedSourceAddress() {
    this._dropVldGtpUSpoofedSourceAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldGtpUSpoofedSourceAddressInput() {
    return this._dropVldGtpUSpoofedSourceAddress;
  }

  // drop_vld_gtp_v2_wrong_lbi_create_bearer - computed: false, optional: true, required: false
  private _dropVldGtpV2WrongLbiCreateBearer?: number; 
  public get dropVldGtpV2WrongLbiCreateBearer() {
    return this.getNumberAttribute('drop_vld_gtp_v2_wrong_lbi_create_bearer');
  }
  public set dropVldGtpV2WrongLbiCreateBearer(value: number) {
    this._dropVldGtpV2WrongLbiCreateBearer = value;
  }
  public resetDropVldGtpV2WrongLbiCreateBearer() {
    this._dropVldGtpV2WrongLbiCreateBearer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldGtpV2WrongLbiCreateBearerInput() {
    return this._dropVldGtpV2WrongLbiCreateBearer;
  }

  // drop_vld_gtpv0_seqnum_buffer_full - computed: false, optional: true, required: false
  private _dropVldGtpv0SeqnumBufferFull?: number; 
  public get dropVldGtpv0SeqnumBufferFull() {
    return this.getNumberAttribute('drop_vld_gtpv0_seqnum_buffer_full');
  }
  public set dropVldGtpv0SeqnumBufferFull(value: number) {
    this._dropVldGtpv0SeqnumBufferFull = value;
  }
  public resetDropVldGtpv0SeqnumBufferFull() {
    this._dropVldGtpv0SeqnumBufferFull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldGtpv0SeqnumBufferFullInput() {
    return this._dropVldGtpv0SeqnumBufferFull;
  }

  // drop_vld_gtpv1_seqnum_buffer_full - computed: false, optional: true, required: false
  private _dropVldGtpv1SeqnumBufferFull?: number; 
  public get dropVldGtpv1SeqnumBufferFull() {
    return this.getNumberAttribute('drop_vld_gtpv1_seqnum_buffer_full');
  }
  public set dropVldGtpv1SeqnumBufferFull(value: number) {
    this._dropVldGtpv1SeqnumBufferFull = value;
  }
  public resetDropVldGtpv1SeqnumBufferFull() {
    this._dropVldGtpv1SeqnumBufferFull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldGtpv1SeqnumBufferFullInput() {
    return this._dropVldGtpv1SeqnumBufferFull;
  }

  // drop_vld_gtpv2_seqnum_buffer_full - computed: false, optional: true, required: false
  private _dropVldGtpv2SeqnumBufferFull?: number; 
  public get dropVldGtpv2SeqnumBufferFull() {
    return this.getNumberAttribute('drop_vld_gtpv2_seqnum_buffer_full');
  }
  public set dropVldGtpv2SeqnumBufferFull(value: number) {
    this._dropVldGtpv2SeqnumBufferFull = value;
  }
  public resetDropVldGtpv2SeqnumBufferFull() {
    this._dropVldGtpv2SeqnumBufferFull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldGtpv2SeqnumBufferFullInput() {
    return this._dropVldGtpv2SeqnumBufferFull;
  }

  // drop_vld_invalid_flow_label_v0 - computed: false, optional: true, required: false
  private _dropVldInvalidFlowLabelV0?: number; 
  public get dropVldInvalidFlowLabelV0() {
    return this.getNumberAttribute('drop_vld_invalid_flow_label_v0');
  }
  public set dropVldInvalidFlowLabelV0(value: number) {
    this._dropVldInvalidFlowLabelV0 = value;
  }
  public resetDropVldInvalidFlowLabelV0() {
    this._dropVldInvalidFlowLabelV0 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldInvalidFlowLabelV0Input() {
    return this._dropVldInvalidFlowLabelV0;
  }

  // drop_vld_invalid_pkt_len_piggyback - computed: false, optional: true, required: false
  private _dropVldInvalidPktLenPiggyback?: number; 
  public get dropVldInvalidPktLenPiggyback() {
    return this.getNumberAttribute('drop_vld_invalid_pkt_len_piggyback');
  }
  public set dropVldInvalidPktLenPiggyback(value: number) {
    this._dropVldInvalidPktLenPiggyback = value;
  }
  public resetDropVldInvalidPktLenPiggyback() {
    this._dropVldInvalidPktLenPiggyback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldInvalidPktLenPiggybackInput() {
    return this._dropVldInvalidPktLenPiggyback;
  }

  // drop_vld_invalid_teid - computed: false, optional: true, required: false
  private _dropVldInvalidTeid?: number; 
  public get dropVldInvalidTeid() {
    return this.getNumberAttribute('drop_vld_invalid_teid');
  }
  public set dropVldInvalidTeid(value: number) {
    this._dropVldInvalidTeid = value;
  }
  public resetDropVldInvalidTeid() {
    this._dropVldInvalidTeid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldInvalidTeidInput() {
    return this._dropVldInvalidTeid;
  }

  // drop_vld_mandatory_ie_in_grouped_ie - computed: false, optional: true, required: false
  private _dropVldMandatoryIeInGroupedIe?: number; 
  public get dropVldMandatoryIeInGroupedIe() {
    return this.getNumberAttribute('drop_vld_mandatory_ie_in_grouped_ie');
  }
  public set dropVldMandatoryIeInGroupedIe(value: number) {
    this._dropVldMandatoryIeInGroupedIe = value;
  }
  public resetDropVldMandatoryIeInGroupedIe() {
    this._dropVldMandatoryIeInGroupedIe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldMandatoryIeInGroupedIeInput() {
    return this._dropVldMandatoryIeInGroupedIe;
  }

  // drop_vld_mandatory_information_element - computed: false, optional: true, required: false
  private _dropVldMandatoryInformationElement?: number; 
  public get dropVldMandatoryInformationElement() {
    return this.getNumberAttribute('drop_vld_mandatory_information_element');
  }
  public set dropVldMandatoryInformationElement(value: number) {
    this._dropVldMandatoryInformationElement = value;
  }
  public resetDropVldMandatoryInformationElement() {
    this._dropVldMandatoryInformationElement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldMandatoryInformationElementInput() {
    return this._dropVldMandatoryInformationElement;
  }

  // drop_vld_message_length - computed: false, optional: true, required: false
  private _dropVldMessageLength?: number; 
  public get dropVldMessageLength() {
    return this.getNumberAttribute('drop_vld_message_length');
  }
  public set dropVldMessageLength(value: number) {
    this._dropVldMessageLength = value;
  }
  public resetDropVldMessageLength() {
    this._dropVldMessageLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldMessageLengthInput() {
    return this._dropVldMessageLength;
  }

  // drop_vld_out_of_order_ie - computed: false, optional: true, required: false
  private _dropVldOutOfOrderIe?: number; 
  public get dropVldOutOfOrderIe() {
    return this.getNumberAttribute('drop_vld_out_of_order_ie');
  }
  public set dropVldOutOfOrderIe(value: number) {
    this._dropVldOutOfOrderIe = value;
  }
  public resetDropVldOutOfOrderIe() {
    this._dropVldOutOfOrderIe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldOutOfOrderIeInput() {
    return this._dropVldOutOfOrderIe;
  }

  // drop_vld_out_of_state - computed: false, optional: true, required: false
  private _dropVldOutOfState?: number; 
  public get dropVldOutOfState() {
    return this.getNumberAttribute('drop_vld_out_of_state');
  }
  public set dropVldOutOfState(value: number) {
    this._dropVldOutOfState = value;
  }
  public resetDropVldOutOfState() {
    this._dropVldOutOfState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldOutOfStateInput() {
    return this._dropVldOutOfState;
  }

  // drop_vld_out_of_state_ie - computed: false, optional: true, required: false
  private _dropVldOutOfStateIe?: number; 
  public get dropVldOutOfStateIe() {
    return this.getNumberAttribute('drop_vld_out_of_state_ie');
  }
  public set dropVldOutOfStateIe(value: number) {
    this._dropVldOutOfStateIe = value;
  }
  public resetDropVldOutOfStateIe() {
    this._dropVldOutOfStateIe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldOutOfStateIeInput() {
    return this._dropVldOutOfStateIe;
  }

  // drop_vld_protocol_flag_unset - computed: false, optional: true, required: false
  private _dropVldProtocolFlagUnset?: number; 
  public get dropVldProtocolFlagUnset() {
    return this.getNumberAttribute('drop_vld_protocol_flag_unset');
  }
  public set dropVldProtocolFlagUnset(value: number) {
    this._dropVldProtocolFlagUnset = value;
  }
  public resetDropVldProtocolFlagUnset() {
    this._dropVldProtocolFlagUnset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldProtocolFlagUnsetInput() {
    return this._dropVldProtocolFlagUnset;
  }

  // drop_vld_reserved_field_set - computed: false, optional: true, required: false
  private _dropVldReservedFieldSet?: number; 
  public get dropVldReservedFieldSet() {
    return this.getNumberAttribute('drop_vld_reserved_field_set');
  }
  public set dropVldReservedFieldSet(value: number) {
    this._dropVldReservedFieldSet = value;
  }
  public resetDropVldReservedFieldSet() {
    this._dropVldReservedFieldSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldReservedFieldSetInput() {
    return this._dropVldReservedFieldSet;
  }

  // drop_vld_reserved_information_element - computed: false, optional: true, required: false
  private _dropVldReservedInformationElement?: number; 
  public get dropVldReservedInformationElement() {
    return this.getNumberAttribute('drop_vld_reserved_information_element');
  }
  public set dropVldReservedInformationElement(value: number) {
    this._dropVldReservedInformationElement = value;
  }
  public resetDropVldReservedInformationElement() {
    this._dropVldReservedInformationElement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldReservedInformationElementInput() {
    return this._dropVldReservedInformationElement;
  }

  // drop_vld_sanity_failed_piggyback - computed: false, optional: true, required: false
  private _dropVldSanityFailedPiggyback?: number; 
  public get dropVldSanityFailedPiggyback() {
    return this.getNumberAttribute('drop_vld_sanity_failed_piggyback');
  }
  public set dropVldSanityFailedPiggyback(value: number) {
    this._dropVldSanityFailedPiggyback = value;
  }
  public resetDropVldSanityFailedPiggyback() {
    this._dropVldSanityFailedPiggyback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldSanityFailedPiggybackInput() {
    return this._dropVldSanityFailedPiggyback;
  }

  // drop_vld_sequence_num_correlation - computed: false, optional: true, required: false
  private _dropVldSequenceNumCorrelation?: number; 
  public get dropVldSequenceNumCorrelation() {
    return this.getNumberAttribute('drop_vld_sequence_num_correlation');
  }
  public set dropVldSequenceNumCorrelation(value: number) {
    this._dropVldSequenceNumCorrelation = value;
  }
  public resetDropVldSequenceNumCorrelation() {
    this._dropVldSequenceNumCorrelation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldSequenceNumCorrelationInput() {
    return this._dropVldSequenceNumCorrelation;
  }

  // drop_vld_tunnel_id_flag - computed: false, optional: true, required: false
  private _dropVldTunnelIdFlag?: number; 
  public get dropVldTunnelIdFlag() {
    return this.getNumberAttribute('drop_vld_tunnel_id_flag');
  }
  public set dropVldTunnelIdFlag(value: number) {
    this._dropVldTunnelIdFlag = value;
  }
  public resetDropVldTunnelIdFlag() {
    this._dropVldTunnelIdFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldTunnelIdFlagInput() {
    return this._dropVldTunnelIdFlag;
  }

  // drop_vld_v0_reserved_message_drop - computed: false, optional: true, required: false
  private _dropVldV0ReservedMessageDrop?: number; 
  public get dropVldV0ReservedMessageDrop() {
    return this.getNumberAttribute('drop_vld_v0_reserved_message_drop');
  }
  public set dropVldV0ReservedMessageDrop(value: number) {
    this._dropVldV0ReservedMessageDrop = value;
  }
  public resetDropVldV0ReservedMessageDrop() {
    this._dropVldV0ReservedMessageDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldV0ReservedMessageDropInput() {
    return this._dropVldV0ReservedMessageDrop;
  }

  // drop_vld_v1_reserved_message_drop - computed: false, optional: true, required: false
  private _dropVldV1ReservedMessageDrop?: number; 
  public get dropVldV1ReservedMessageDrop() {
    return this.getNumberAttribute('drop_vld_v1_reserved_message_drop');
  }
  public set dropVldV1ReservedMessageDrop(value: number) {
    this._dropVldV1ReservedMessageDrop = value;
  }
  public resetDropVldV1ReservedMessageDrop() {
    this._dropVldV1ReservedMessageDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldV1ReservedMessageDropInput() {
    return this._dropVldV1ReservedMessageDrop;
  }

  // drop_vld_v2_reserved_message_drop - computed: false, optional: true, required: false
  private _dropVldV2ReservedMessageDrop?: number; 
  public get dropVldV2ReservedMessageDrop() {
    return this.getNumberAttribute('drop_vld_v2_reserved_message_drop');
  }
  public set dropVldV2ReservedMessageDrop(value: number) {
    this._dropVldV2ReservedMessageDrop = value;
  }
  public resetDropVldV2ReservedMessageDrop() {
    this._dropVldV2ReservedMessageDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldV2ReservedMessageDropInput() {
    return this._dropVldV2ReservedMessageDrop;
  }

  // drop_vld_version_not_supported - computed: false, optional: true, required: false
  private _dropVldVersionNotSupported?: number; 
  public get dropVldVersionNotSupported() {
    return this.getNumberAttribute('drop_vld_version_not_supported');
  }
  public set dropVldVersionNotSupported(value: number) {
    this._dropVldVersionNotSupported = value;
  }
  public resetDropVldVersionNotSupported() {
    this._dropVldVersionNotSupported = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldVersionNotSupportedInput() {
    return this._dropVldVersionNotSupported;
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
}
export interface VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsSeverity {
  /**
  * Enable packet capture on all drop counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl#drop VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl#drop}
  */
  readonly drop?: number;
  /**
  * Enable packet capture on all alert drop counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl#drop_alert VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl#drop_alert}
  */
  readonly dropAlert?: number;
  /**
  * Enable packet capture on all critical drop counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl#drop_critical VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl#drop_critical}
  */
  readonly dropCritical?: number;
  /**
  * Enable packet capture on all warning drop counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl#drop_warning VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl#drop_warning}
  */
  readonly dropWarning?: number;
  /**
  * Enable packet capture on all error counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl#error VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl#error}
  */
  readonly error?: number;
  /**
  * Enable packet capture on all alert error counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl#error_alert VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl#error_alert}
  */
  readonly errorAlert?: number;
  /**
  * Enable packet capture on all critical error counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl#error_critical VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl#error_critical}
  */
  readonly errorCritical?: number;
  /**
  * Enable packet capture on all warning error counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl#error_warning VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl#error_warning}
  */
  readonly errorWarning?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl#uuid VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsSeverityToTerraform(struct?: VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsSeverityOutputReference | VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsSeverity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    drop: cdktf.numberToTerraform(struct!.drop),
    drop_alert: cdktf.numberToTerraform(struct!.dropAlert),
    drop_critical: cdktf.numberToTerraform(struct!.dropCritical),
    drop_warning: cdktf.numberToTerraform(struct!.dropWarning),
    error: cdktf.numberToTerraform(struct!.error),
    error_alert: cdktf.numberToTerraform(struct!.errorAlert),
    error_critical: cdktf.numberToTerraform(struct!.errorCritical),
    error_warning: cdktf.numberToTerraform(struct!.errorWarning),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsSeverityToHclTerraform(struct?: VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsSeverityOutputReference | VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsSeverity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    drop: {
      value: cdktf.numberToHclTerraform(struct!.drop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_alert: {
      value: cdktf.numberToHclTerraform(struct!.dropAlert),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_critical: {
      value: cdktf.numberToHclTerraform(struct!.dropCritical),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_warning: {
      value: cdktf.numberToHclTerraform(struct!.dropWarning),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error: {
      value: cdktf.numberToHclTerraform(struct!.error),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error_alert: {
      value: cdktf.numberToHclTerraform(struct!.errorAlert),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error_critical: {
      value: cdktf.numberToHclTerraform(struct!.errorCritical),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error_warning: {
      value: cdktf.numberToHclTerraform(struct!.errorWarning),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsSeverityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsSeverity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._drop !== undefined) {
      hasAnyValues = true;
      internalValueResult.drop = this._drop;
    }
    if (this._dropAlert !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropAlert = this._dropAlert;
    }
    if (this._dropCritical !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropCritical = this._dropCritical;
    }
    if (this._dropWarning !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropWarning = this._dropWarning;
    }
    if (this._error !== undefined) {
      hasAnyValues = true;
      internalValueResult.error = this._error;
    }
    if (this._errorAlert !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorAlert = this._errorAlert;
    }
    if (this._errorCritical !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorCritical = this._errorCritical;
    }
    if (this._errorWarning !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorWarning = this._errorWarning;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsSeverity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._drop = undefined;
      this._dropAlert = undefined;
      this._dropCritical = undefined;
      this._dropWarning = undefined;
      this._error = undefined;
      this._errorAlert = undefined;
      this._errorCritical = undefined;
      this._errorWarning = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._drop = value.drop;
      this._dropAlert = value.dropAlert;
      this._dropCritical = value.dropCritical;
      this._dropWarning = value.dropWarning;
      this._error = value.error;
      this._errorAlert = value.errorAlert;
      this._errorCritical = value.errorCritical;
      this._errorWarning = value.errorWarning;
      this._uuid = value.uuid;
    }
  }

  // drop - computed: false, optional: true, required: false
  private _drop?: number; 
  public get drop() {
    return this.getNumberAttribute('drop');
  }
  public set drop(value: number) {
    this._drop = value;
  }
  public resetDrop() {
    this._drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropInput() {
    return this._drop;
  }

  // drop_alert - computed: false, optional: true, required: false
  private _dropAlert?: number; 
  public get dropAlert() {
    return this.getNumberAttribute('drop_alert');
  }
  public set dropAlert(value: number) {
    this._dropAlert = value;
  }
  public resetDropAlert() {
    this._dropAlert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropAlertInput() {
    return this._dropAlert;
  }

  // drop_critical - computed: false, optional: true, required: false
  private _dropCritical?: number; 
  public get dropCritical() {
    return this.getNumberAttribute('drop_critical');
  }
  public set dropCritical(value: number) {
    this._dropCritical = value;
  }
  public resetDropCritical() {
    this._dropCritical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropCriticalInput() {
    return this._dropCritical;
  }

  // drop_warning - computed: false, optional: true, required: false
  private _dropWarning?: number; 
  public get dropWarning() {
    return this.getNumberAttribute('drop_warning');
  }
  public set dropWarning(value: number) {
    this._dropWarning = value;
  }
  public resetDropWarning() {
    this._dropWarning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropWarningInput() {
    return this._dropWarning;
  }

  // error - computed: false, optional: true, required: false
  private _error?: number; 
  public get error() {
    return this.getNumberAttribute('error');
  }
  public set error(value: number) {
    this._error = value;
  }
  public resetError() {
    this._error = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorInput() {
    return this._error;
  }

  // error_alert - computed: false, optional: true, required: false
  private _errorAlert?: number; 
  public get errorAlert() {
    return this.getNumberAttribute('error_alert');
  }
  public set errorAlert(value: number) {
    this._errorAlert = value;
  }
  public resetErrorAlert() {
    this._errorAlert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorAlertInput() {
    return this._errorAlert;
  }

  // error_critical - computed: false, optional: true, required: false
  private _errorCritical?: number; 
  public get errorCritical() {
    return this.getNumberAttribute('error_critical');
  }
  public set errorCritical(value: number) {
    this._errorCritical = value;
  }
  public resetErrorCritical() {
    this._errorCritical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorCriticalInput() {
    return this._errorCritical;
  }

  // error_warning - computed: false, optional: true, required: false
  private _errorWarning?: number; 
  public get errorWarning() {
    return this.getNumberAttribute('error_warning');
  }
  public set errorWarning(value: number) {
    this._errorWarning = value;
  }
  public resetErrorWarning() {
    this._errorWarning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorWarningInput() {
    return this._errorWarning;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl thunder_visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl}
*/
export class VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl to import
  * @param importFromId The id of the existing VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmpl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl thunder_visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl',
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
    this._captureConfig = config.captureConfig;
    this._id = config.id;
    this._name = config.name;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._triggerStatsInc.internalValue = config.triggerStatsInc;
    this._triggerStatsRate.internalValue = config.triggerStatsRate;
    this._triggerStatsSeverity.internalValue = config.triggerStatsSeverity;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // capture_config - computed: false, optional: true, required: false
  private _captureConfig?: string; 
  public get captureConfig() {
    return this.getStringAttribute('capture_config');
  }
  public set captureConfig(value: string) {
    this._captureConfig = value;
  }
  public resetCaptureConfig() {
    this._captureConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captureConfigInput() {
    return this._captureConfig;
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

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
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
  private _triggerStatsInc = new VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsIncOutputReference(this, "trigger_stats_inc");
  public get triggerStatsInc() {
    return this._triggerStatsInc;
  }
  public putTriggerStatsInc(value: VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsInc) {
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
  private _triggerStatsRate = new VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsRateOutputReference(this, "trigger_stats_rate");
  public get triggerStatsRate() {
    return this._triggerStatsRate;
  }
  public putTriggerStatsRate(value: VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsRate) {
    this._triggerStatsRate.internalValue = value;
  }
  public resetTriggerStatsRate() {
    this._triggerStatsRate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerStatsRateInput() {
    return this._triggerStatsRate.internalValue;
  }

  // trigger_stats_severity - computed: false, optional: true, required: false
  private _triggerStatsSeverity = new VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsSeverityOutputReference(this, "trigger_stats_severity");
  public get triggerStatsSeverity() {
    return this._triggerStatsSeverity;
  }
  public putTriggerStatsSeverity(value: VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsSeverity) {
    this._triggerStatsSeverity.internalValue = value;
  }
  public resetTriggerStatsSeverity() {
    this._triggerStatsSeverity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerStatsSeverityInput() {
    return this._triggerStatsSeverity.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      capture_config: cdktf.stringToTerraform(this._captureConfig),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      trigger_stats_inc: visibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsIncToTerraform(this._triggerStatsInc.internalValue),
      trigger_stats_rate: visibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsRateToTerraform(this._triggerStatsRate.internalValue),
      trigger_stats_severity: visibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsSeverityToTerraform(this._triggerStatsSeverity.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      capture_config: {
        value: cdktf.stringToHclTerraform(this._captureConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
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
        value: visibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsIncToHclTerraform(this._triggerStatsInc.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsIncList",
      },
      trigger_stats_rate: {
        value: visibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsRateToHclTerraform(this._triggerStatsRate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsRateList",
      },
      trigger_stats_severity: {
        value: visibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsSeverityToHclTerraform(this._triggerStatsSeverity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsSeverityList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
