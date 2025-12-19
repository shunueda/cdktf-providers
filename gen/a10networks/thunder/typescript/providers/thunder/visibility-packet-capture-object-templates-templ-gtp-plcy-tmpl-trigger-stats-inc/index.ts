// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl_trigger_stats_inc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsIncAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable automatic packet-capture for Validation Drop: Country Code Mismatch in IMSI and MSISDN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl_trigger_stats_inc#drop_vld_country_code_mismatch VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsIncA#drop_vld_country_code_mismatch}
  */
  readonly dropVldCountryCodeMismatch?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: Cross Layer IP Address Mismatch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl_trigger_stats_inc#drop_vld_cross_layer_correlation VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsIncA#drop_vld_cross_layer_correlation}
  */
  readonly dropVldCrossLayerCorrelation?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: GTP Bearer count exceeded max (11)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl_trigger_stats_inc#drop_vld_gtp_bearer_count_exceed VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsIncA#drop_vld_gtp_bearer_count_exceed}
  */
  readonly dropVldGtpBearerCountExceed?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: GTP repeated IE count exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl_trigger_stats_inc#drop_vld_gtp_ie_repeat_count_exceed VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsIncA#drop_vld_gtp_ie_repeat_count_exceed}
  */
  readonly dropVldGtpIeRepeatCountExceed?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: GTP-C Invalid APN Length Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl_trigger_stats_inc#drop_vld_gtp_invalid_apn_len_drop VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsIncA#drop_vld_gtp_invalid_apn_len_drop}
  */
  readonly dropVldGtpInvalidApnLenDrop?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: GTP-C Invalid IMSI Length Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl_trigger_stats_inc#drop_vld_gtp_invalid_imsi_len_drop VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsIncA#drop_vld_gtp_invalid_imsi_len_drop}
  */
  readonly dropVldGtpInvalidImsiLenDrop?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: GTP-U IP Address Spoofed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl_trigger_stats_inc#drop_vld_gtp_u_spoofed_source_address VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsIncA#drop_vld_gtp_u_spoofed_source_address}
  */
  readonly dropVldGtpUSpoofedSourceAddress?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: GTPV2-C Wrong LBI in Create Bearer Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl_trigger_stats_inc#drop_vld_gtp_v2_wrong_lbi_create_bearer VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsIncA#drop_vld_gtp_v2_wrong_lbi_create_bearer}
  */
  readonly dropVldGtpV2WrongLbiCreateBearer?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: GTPV0-C conn Sequence number Buffer Full
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl_trigger_stats_inc#drop_vld_gtpv0_seqnum_buffer_full VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsIncA#drop_vld_gtpv0_seqnum_buffer_full}
  */
  readonly dropVldGtpv0SeqnumBufferFull?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: GTPV1-C conn Sequence number Buffer Full
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl_trigger_stats_inc#drop_vld_gtpv1_seqnum_buffer_full VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsIncA#drop_vld_gtpv1_seqnum_buffer_full}
  */
  readonly dropVldGtpv1SeqnumBufferFull?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: GTPV2-C conn Sequence number Buffer Full
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl_trigger_stats_inc#drop_vld_gtpv2_seqnum_buffer_full VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsIncA#drop_vld_gtpv2_seqnum_buffer_full}
  */
  readonly dropVldGtpv2SeqnumBufferFull?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: Invalid Flow Label in GTPv0-C Header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl_trigger_stats_inc#drop_vld_invalid_flow_label_v0 VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsIncA#drop_vld_invalid_flow_label_v0}
  */
  readonly dropVldInvalidFlowLabelV0?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: Piggyback message invalid packet length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl_trigger_stats_inc#drop_vld_invalid_pkt_len_piggyback VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsIncA#drop_vld_invalid_pkt_len_piggyback}
  */
  readonly dropVldInvalidPktLenPiggyback?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: Invalid TEID Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl_trigger_stats_inc#drop_vld_invalid_teid VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsIncA#drop_vld_invalid_teid}
  */
  readonly dropVldInvalidTeid?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: Mandatory IE in Grouped IE Not Present
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl_trigger_stats_inc#drop_vld_mandatory_ie_in_grouped_ie VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsIncA#drop_vld_mandatory_ie_in_grouped_ie}
  */
  readonly dropVldMandatoryIeInGroupedIe?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: Mandatory IE Not Present
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl_trigger_stats_inc#drop_vld_mandatory_information_element VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsIncA#drop_vld_mandatory_information_element}
  */
  readonly dropVldMandatoryInformationElement?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: Message Length Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl_trigger_stats_inc#drop_vld_message_length VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsIncA#drop_vld_message_length}
  */
  readonly dropVldMessageLength?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: GTPv1-C Message Out of Order IE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl_trigger_stats_inc#drop_vld_out_of_order_ie VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsIncA#drop_vld_out_of_order_ie}
  */
  readonly dropVldOutOfOrderIe?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: Out Of State GTP Message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl_trigger_stats_inc#drop_vld_out_of_state VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsIncA#drop_vld_out_of_state}
  */
  readonly dropVldOutOfState?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: Unexpected IE Present in Message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl_trigger_stats_inc#drop_vld_out_of_state_ie VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsIncA#drop_vld_out_of_state_ie}
  */
  readonly dropVldOutOfStateIe?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: Protocol flag in Header Field not Set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl_trigger_stats_inc#drop_vld_protocol_flag_unset VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsIncA#drop_vld_protocol_flag_unset}
  */
  readonly dropVldProtocolFlagUnset?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: Reserved Header Field Set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl_trigger_stats_inc#drop_vld_reserved_field_set VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsIncA#drop_vld_reserved_field_set}
  */
  readonly dropVldReservedFieldSet?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: Reserved IE Field Present
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl_trigger_stats_inc#drop_vld_reserved_information_element VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsIncA#drop_vld_reserved_information_element}
  */
  readonly dropVldReservedInformationElement?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: piggyback message anomaly failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl_trigger_stats_inc#drop_vld_sanity_failed_piggyback VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsIncA#drop_vld_sanity_failed_piggyback}
  */
  readonly dropVldSanityFailedPiggyback?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: GTP-C Sequence number Mismatch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl_trigger_stats_inc#drop_vld_sequence_num_correlation VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsIncA#drop_vld_sequence_num_correlation}
  */
  readonly dropVldSequenceNumCorrelation?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: Tunnel Header Flag Not Set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl_trigger_stats_inc#drop_vld_tunnel_id_flag VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsIncA#drop_vld_tunnel_id_flag}
  */
  readonly dropVldTunnelIdFlag?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: GTPv0-C Reserved Message Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl_trigger_stats_inc#drop_vld_v0_reserved_message_drop VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsIncA#drop_vld_v0_reserved_message_drop}
  */
  readonly dropVldV0ReservedMessageDrop?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: GTPv1-C Reserved Message Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl_trigger_stats_inc#drop_vld_v1_reserved_message_drop VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsIncA#drop_vld_v1_reserved_message_drop}
  */
  readonly dropVldV1ReservedMessageDrop?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: GTPv2-C Reserved Message Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl_trigger_stats_inc#drop_vld_v2_reserved_message_drop VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsIncA#drop_vld_v2_reserved_message_drop}
  */
  readonly dropVldV2ReservedMessageDrop?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: Invalid GTP version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl_trigger_stats_inc#drop_vld_version_not_supported VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsIncA#drop_vld_version_not_supported}
  */
  readonly dropVldVersionNotSupported?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl_trigger_stats_inc#id VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsIncA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Templ_gtp_plcy_tmpl_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl_trigger_stats_inc#templ_gtp_plcy_tmpl_name VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsIncA#templ_gtp_plcy_tmpl_name}
  */
  readonly templGtpPlcyTmplName: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl_trigger_stats_inc#uuid VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsIncA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl_trigger_stats_inc thunder_visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl_trigger_stats_inc}
*/
export class VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsIncA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl_trigger_stats_inc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsIncA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsIncA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsIncA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl_trigger_stats_inc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsIncA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl_trigger_stats_inc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl_trigger_stats_inc thunder_visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl_trigger_stats_inc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsIncAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplTriggerStatsIncAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_object_templates_templ_gtp_plcy_tmpl_trigger_stats_inc',
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
    this._dropVldCountryCodeMismatch = config.dropVldCountryCodeMismatch;
    this._dropVldCrossLayerCorrelation = config.dropVldCrossLayerCorrelation;
    this._dropVldGtpBearerCountExceed = config.dropVldGtpBearerCountExceed;
    this._dropVldGtpIeRepeatCountExceed = config.dropVldGtpIeRepeatCountExceed;
    this._dropVldGtpInvalidApnLenDrop = config.dropVldGtpInvalidApnLenDrop;
    this._dropVldGtpInvalidImsiLenDrop = config.dropVldGtpInvalidImsiLenDrop;
    this._dropVldGtpUSpoofedSourceAddress = config.dropVldGtpUSpoofedSourceAddress;
    this._dropVldGtpV2WrongLbiCreateBearer = config.dropVldGtpV2WrongLbiCreateBearer;
    this._dropVldGtpv0SeqnumBufferFull = config.dropVldGtpv0SeqnumBufferFull;
    this._dropVldGtpv1SeqnumBufferFull = config.dropVldGtpv1SeqnumBufferFull;
    this._dropVldGtpv2SeqnumBufferFull = config.dropVldGtpv2SeqnumBufferFull;
    this._dropVldInvalidFlowLabelV0 = config.dropVldInvalidFlowLabelV0;
    this._dropVldInvalidPktLenPiggyback = config.dropVldInvalidPktLenPiggyback;
    this._dropVldInvalidTeid = config.dropVldInvalidTeid;
    this._dropVldMandatoryIeInGroupedIe = config.dropVldMandatoryIeInGroupedIe;
    this._dropVldMandatoryInformationElement = config.dropVldMandatoryInformationElement;
    this._dropVldMessageLength = config.dropVldMessageLength;
    this._dropVldOutOfOrderIe = config.dropVldOutOfOrderIe;
    this._dropVldOutOfState = config.dropVldOutOfState;
    this._dropVldOutOfStateIe = config.dropVldOutOfStateIe;
    this._dropVldProtocolFlagUnset = config.dropVldProtocolFlagUnset;
    this._dropVldReservedFieldSet = config.dropVldReservedFieldSet;
    this._dropVldReservedInformationElement = config.dropVldReservedInformationElement;
    this._dropVldSanityFailedPiggyback = config.dropVldSanityFailedPiggyback;
    this._dropVldSequenceNumCorrelation = config.dropVldSequenceNumCorrelation;
    this._dropVldTunnelIdFlag = config.dropVldTunnelIdFlag;
    this._dropVldV0ReservedMessageDrop = config.dropVldV0ReservedMessageDrop;
    this._dropVldV1ReservedMessageDrop = config.dropVldV1ReservedMessageDrop;
    this._dropVldV2ReservedMessageDrop = config.dropVldV2ReservedMessageDrop;
    this._dropVldVersionNotSupported = config.dropVldVersionNotSupported;
    this._id = config.id;
    this._templGtpPlcyTmplName = config.templGtpPlcyTmplName;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // templ_gtp_plcy_tmpl_name - computed: false, optional: false, required: true
  private _templGtpPlcyTmplName?: string; 
  public get templGtpPlcyTmplName() {
    return this.getStringAttribute('templ_gtp_plcy_tmpl_name');
  }
  public set templGtpPlcyTmplName(value: string) {
    this._templGtpPlcyTmplName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templGtpPlcyTmplNameInput() {
    return this._templGtpPlcyTmplName;
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
      drop_vld_country_code_mismatch: cdktf.numberToTerraform(this._dropVldCountryCodeMismatch),
      drop_vld_cross_layer_correlation: cdktf.numberToTerraform(this._dropVldCrossLayerCorrelation),
      drop_vld_gtp_bearer_count_exceed: cdktf.numberToTerraform(this._dropVldGtpBearerCountExceed),
      drop_vld_gtp_ie_repeat_count_exceed: cdktf.numberToTerraform(this._dropVldGtpIeRepeatCountExceed),
      drop_vld_gtp_invalid_apn_len_drop: cdktf.numberToTerraform(this._dropVldGtpInvalidApnLenDrop),
      drop_vld_gtp_invalid_imsi_len_drop: cdktf.numberToTerraform(this._dropVldGtpInvalidImsiLenDrop),
      drop_vld_gtp_u_spoofed_source_address: cdktf.numberToTerraform(this._dropVldGtpUSpoofedSourceAddress),
      drop_vld_gtp_v2_wrong_lbi_create_bearer: cdktf.numberToTerraform(this._dropVldGtpV2WrongLbiCreateBearer),
      drop_vld_gtpv0_seqnum_buffer_full: cdktf.numberToTerraform(this._dropVldGtpv0SeqnumBufferFull),
      drop_vld_gtpv1_seqnum_buffer_full: cdktf.numberToTerraform(this._dropVldGtpv1SeqnumBufferFull),
      drop_vld_gtpv2_seqnum_buffer_full: cdktf.numberToTerraform(this._dropVldGtpv2SeqnumBufferFull),
      drop_vld_invalid_flow_label_v0: cdktf.numberToTerraform(this._dropVldInvalidFlowLabelV0),
      drop_vld_invalid_pkt_len_piggyback: cdktf.numberToTerraform(this._dropVldInvalidPktLenPiggyback),
      drop_vld_invalid_teid: cdktf.numberToTerraform(this._dropVldInvalidTeid),
      drop_vld_mandatory_ie_in_grouped_ie: cdktf.numberToTerraform(this._dropVldMandatoryIeInGroupedIe),
      drop_vld_mandatory_information_element: cdktf.numberToTerraform(this._dropVldMandatoryInformationElement),
      drop_vld_message_length: cdktf.numberToTerraform(this._dropVldMessageLength),
      drop_vld_out_of_order_ie: cdktf.numberToTerraform(this._dropVldOutOfOrderIe),
      drop_vld_out_of_state: cdktf.numberToTerraform(this._dropVldOutOfState),
      drop_vld_out_of_state_ie: cdktf.numberToTerraform(this._dropVldOutOfStateIe),
      drop_vld_protocol_flag_unset: cdktf.numberToTerraform(this._dropVldProtocolFlagUnset),
      drop_vld_reserved_field_set: cdktf.numberToTerraform(this._dropVldReservedFieldSet),
      drop_vld_reserved_information_element: cdktf.numberToTerraform(this._dropVldReservedInformationElement),
      drop_vld_sanity_failed_piggyback: cdktf.numberToTerraform(this._dropVldSanityFailedPiggyback),
      drop_vld_sequence_num_correlation: cdktf.numberToTerraform(this._dropVldSequenceNumCorrelation),
      drop_vld_tunnel_id_flag: cdktf.numberToTerraform(this._dropVldTunnelIdFlag),
      drop_vld_v0_reserved_message_drop: cdktf.numberToTerraform(this._dropVldV0ReservedMessageDrop),
      drop_vld_v1_reserved_message_drop: cdktf.numberToTerraform(this._dropVldV1ReservedMessageDrop),
      drop_vld_v2_reserved_message_drop: cdktf.numberToTerraform(this._dropVldV2ReservedMessageDrop),
      drop_vld_version_not_supported: cdktf.numberToTerraform(this._dropVldVersionNotSupported),
      id: cdktf.stringToTerraform(this._id),
      templ_gtp_plcy_tmpl_name: cdktf.stringToTerraform(this._templGtpPlcyTmplName),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      drop_vld_country_code_mismatch: {
        value: cdktf.numberToHclTerraform(this._dropVldCountryCodeMismatch),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_vld_cross_layer_correlation: {
        value: cdktf.numberToHclTerraform(this._dropVldCrossLayerCorrelation),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_vld_gtp_bearer_count_exceed: {
        value: cdktf.numberToHclTerraform(this._dropVldGtpBearerCountExceed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_vld_gtp_ie_repeat_count_exceed: {
        value: cdktf.numberToHclTerraform(this._dropVldGtpIeRepeatCountExceed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_vld_gtp_invalid_apn_len_drop: {
        value: cdktf.numberToHclTerraform(this._dropVldGtpInvalidApnLenDrop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_vld_gtp_invalid_imsi_len_drop: {
        value: cdktf.numberToHclTerraform(this._dropVldGtpInvalidImsiLenDrop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_vld_gtp_u_spoofed_source_address: {
        value: cdktf.numberToHclTerraform(this._dropVldGtpUSpoofedSourceAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_vld_gtp_v2_wrong_lbi_create_bearer: {
        value: cdktf.numberToHclTerraform(this._dropVldGtpV2WrongLbiCreateBearer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_vld_gtpv0_seqnum_buffer_full: {
        value: cdktf.numberToHclTerraform(this._dropVldGtpv0SeqnumBufferFull),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_vld_gtpv1_seqnum_buffer_full: {
        value: cdktf.numberToHclTerraform(this._dropVldGtpv1SeqnumBufferFull),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_vld_gtpv2_seqnum_buffer_full: {
        value: cdktf.numberToHclTerraform(this._dropVldGtpv2SeqnumBufferFull),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_vld_invalid_flow_label_v0: {
        value: cdktf.numberToHclTerraform(this._dropVldInvalidFlowLabelV0),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_vld_invalid_pkt_len_piggyback: {
        value: cdktf.numberToHclTerraform(this._dropVldInvalidPktLenPiggyback),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_vld_invalid_teid: {
        value: cdktf.numberToHclTerraform(this._dropVldInvalidTeid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_vld_mandatory_ie_in_grouped_ie: {
        value: cdktf.numberToHclTerraform(this._dropVldMandatoryIeInGroupedIe),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_vld_mandatory_information_element: {
        value: cdktf.numberToHclTerraform(this._dropVldMandatoryInformationElement),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_vld_message_length: {
        value: cdktf.numberToHclTerraform(this._dropVldMessageLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_vld_out_of_order_ie: {
        value: cdktf.numberToHclTerraform(this._dropVldOutOfOrderIe),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_vld_out_of_state: {
        value: cdktf.numberToHclTerraform(this._dropVldOutOfState),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_vld_out_of_state_ie: {
        value: cdktf.numberToHclTerraform(this._dropVldOutOfStateIe),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_vld_protocol_flag_unset: {
        value: cdktf.numberToHclTerraform(this._dropVldProtocolFlagUnset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_vld_reserved_field_set: {
        value: cdktf.numberToHclTerraform(this._dropVldReservedFieldSet),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_vld_reserved_information_element: {
        value: cdktf.numberToHclTerraform(this._dropVldReservedInformationElement),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_vld_sanity_failed_piggyback: {
        value: cdktf.numberToHclTerraform(this._dropVldSanityFailedPiggyback),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_vld_sequence_num_correlation: {
        value: cdktf.numberToHclTerraform(this._dropVldSequenceNumCorrelation),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_vld_tunnel_id_flag: {
        value: cdktf.numberToHclTerraform(this._dropVldTunnelIdFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_vld_v0_reserved_message_drop: {
        value: cdktf.numberToHclTerraform(this._dropVldV0ReservedMessageDrop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_vld_v1_reserved_message_drop: {
        value: cdktf.numberToHclTerraform(this._dropVldV1ReservedMessageDrop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_vld_v2_reserved_message_drop: {
        value: cdktf.numberToHclTerraform(this._dropVldV2ReservedMessageDrop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_vld_version_not_supported: {
        value: cdktf.numberToHclTerraform(this._dropVldVersionNotSupported),
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
      templ_gtp_plcy_tmpl_name: {
        value: cdktf.stringToHclTerraform(this._templGtpPlcyTmplName),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
