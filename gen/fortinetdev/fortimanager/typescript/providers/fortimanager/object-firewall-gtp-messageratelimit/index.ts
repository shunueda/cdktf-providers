// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_messageratelimit
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectFirewallGtpMessageratelimitConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_messageratelimit#adom ObjectFirewallGtpMessageratelimit#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_messageratelimit#create_aa_pdp_request ObjectFirewallGtpMessageratelimit#create_aa_pdp_request}
  */
  readonly createAaPdpRequest?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_messageratelimit#create_aa_pdp_response ObjectFirewallGtpMessageratelimit#create_aa_pdp_response}
  */
  readonly createAaPdpResponse?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_messageratelimit#create_mbms_request ObjectFirewallGtpMessageratelimit#create_mbms_request}
  */
  readonly createMbmsRequest?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_messageratelimit#create_mbms_response ObjectFirewallGtpMessageratelimit#create_mbms_response}
  */
  readonly createMbmsResponse?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_messageratelimit#create_pdp_request ObjectFirewallGtpMessageratelimit#create_pdp_request}
  */
  readonly createPdpRequest?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_messageratelimit#create_pdp_response ObjectFirewallGtpMessageratelimit#create_pdp_response}
  */
  readonly createPdpResponse?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_messageratelimit#delete_aa_pdp_request ObjectFirewallGtpMessageratelimit#delete_aa_pdp_request}
  */
  readonly deleteAaPdpRequest?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_messageratelimit#delete_aa_pdp_response ObjectFirewallGtpMessageratelimit#delete_aa_pdp_response}
  */
  readonly deleteAaPdpResponse?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_messageratelimit#delete_mbms_request ObjectFirewallGtpMessageratelimit#delete_mbms_request}
  */
  readonly deleteMbmsRequest?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_messageratelimit#delete_mbms_response ObjectFirewallGtpMessageratelimit#delete_mbms_response}
  */
  readonly deleteMbmsResponse?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_messageratelimit#delete_pdp_request ObjectFirewallGtpMessageratelimit#delete_pdp_request}
  */
  readonly deletePdpRequest?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_messageratelimit#delete_pdp_response ObjectFirewallGtpMessageratelimit#delete_pdp_response}
  */
  readonly deletePdpResponse?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_messageratelimit#echo_reponse ObjectFirewallGtpMessageratelimit#echo_reponse}
  */
  readonly echoReponse?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_messageratelimit#echo_request ObjectFirewallGtpMessageratelimit#echo_request}
  */
  readonly echoRequest?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_messageratelimit#echo_response ObjectFirewallGtpMessageratelimit#echo_response}
  */
  readonly echoResponse?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_messageratelimit#error_indication ObjectFirewallGtpMessageratelimit#error_indication}
  */
  readonly errorIndication?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_messageratelimit#failure_report_request ObjectFirewallGtpMessageratelimit#failure_report_request}
  */
  readonly failureReportRequest?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_messageratelimit#failure_report_response ObjectFirewallGtpMessageratelimit#failure_report_response}
  */
  readonly failureReportResponse?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_messageratelimit#fwd_reloc_complete_ack ObjectFirewallGtpMessageratelimit#fwd_reloc_complete_ack}
  */
  readonly fwdRelocCompleteAck?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_messageratelimit#fwd_relocation_complete ObjectFirewallGtpMessageratelimit#fwd_relocation_complete}
  */
  readonly fwdRelocationComplete?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_messageratelimit#fwd_relocation_request ObjectFirewallGtpMessageratelimit#fwd_relocation_request}
  */
  readonly fwdRelocationRequest?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_messageratelimit#fwd_relocation_response ObjectFirewallGtpMessageratelimit#fwd_relocation_response}
  */
  readonly fwdRelocationResponse?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_messageratelimit#fwd_srns_context ObjectFirewallGtpMessageratelimit#fwd_srns_context}
  */
  readonly fwdSrnsContext?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_messageratelimit#fwd_srns_context_ack ObjectFirewallGtpMessageratelimit#fwd_srns_context_ack}
  */
  readonly fwdSrnsContextAck?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_messageratelimit#g_pdu ObjectFirewallGtpMessageratelimit#g_pdu}
  */
  readonly gPdu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_messageratelimit#gtp ObjectFirewallGtpMessageratelimit#gtp}
  */
  readonly gtp: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_messageratelimit#id ObjectFirewallGtpMessageratelimit#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_messageratelimit#identification_request ObjectFirewallGtpMessageratelimit#identification_request}
  */
  readonly identificationRequest?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_messageratelimit#identification_response ObjectFirewallGtpMessageratelimit#identification_response}
  */
  readonly identificationResponse?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_messageratelimit#mbms_de_reg_request ObjectFirewallGtpMessageratelimit#mbms_de_reg_request}
  */
  readonly mbmsDeRegRequest?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_messageratelimit#mbms_de_reg_response ObjectFirewallGtpMessageratelimit#mbms_de_reg_response}
  */
  readonly mbmsDeRegResponse?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_messageratelimit#mbms_notify_rej_request ObjectFirewallGtpMessageratelimit#mbms_notify_rej_request}
  */
  readonly mbmsNotifyRejRequest?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_messageratelimit#mbms_notify_rej_response ObjectFirewallGtpMessageratelimit#mbms_notify_rej_response}
  */
  readonly mbmsNotifyRejResponse?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_messageratelimit#mbms_notify_request ObjectFirewallGtpMessageratelimit#mbms_notify_request}
  */
  readonly mbmsNotifyRequest?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_messageratelimit#mbms_notify_response ObjectFirewallGtpMessageratelimit#mbms_notify_response}
  */
  readonly mbmsNotifyResponse?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_messageratelimit#mbms_reg_request ObjectFirewallGtpMessageratelimit#mbms_reg_request}
  */
  readonly mbmsRegRequest?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_messageratelimit#mbms_reg_response ObjectFirewallGtpMessageratelimit#mbms_reg_response}
  */
  readonly mbmsRegResponse?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_messageratelimit#mbms_ses_start_request ObjectFirewallGtpMessageratelimit#mbms_ses_start_request}
  */
  readonly mbmsSesStartRequest?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_messageratelimit#mbms_ses_start_response ObjectFirewallGtpMessageratelimit#mbms_ses_start_response}
  */
  readonly mbmsSesStartResponse?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_messageratelimit#mbms_ses_stop_request ObjectFirewallGtpMessageratelimit#mbms_ses_stop_request}
  */
  readonly mbmsSesStopRequest?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_messageratelimit#mbms_ses_stop_response ObjectFirewallGtpMessageratelimit#mbms_ses_stop_response}
  */
  readonly mbmsSesStopResponse?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_messageratelimit#note_ms_request ObjectFirewallGtpMessageratelimit#note_ms_request}
  */
  readonly noteMsRequest?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_messageratelimit#note_ms_response ObjectFirewallGtpMessageratelimit#note_ms_response}
  */
  readonly noteMsResponse?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_messageratelimit#pdu_notify_rej_request ObjectFirewallGtpMessageratelimit#pdu_notify_rej_request}
  */
  readonly pduNotifyRejRequest?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_messageratelimit#pdu_notify_rej_response ObjectFirewallGtpMessageratelimit#pdu_notify_rej_response}
  */
  readonly pduNotifyRejResponse?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_messageratelimit#pdu_notify_request ObjectFirewallGtpMessageratelimit#pdu_notify_request}
  */
  readonly pduNotifyRequest?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_messageratelimit#pdu_notify_response ObjectFirewallGtpMessageratelimit#pdu_notify_response}
  */
  readonly pduNotifyResponse?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_messageratelimit#ran_info ObjectFirewallGtpMessageratelimit#ran_info}
  */
  readonly ranInfo?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_messageratelimit#relocation_cancel_request ObjectFirewallGtpMessageratelimit#relocation_cancel_request}
  */
  readonly relocationCancelRequest?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_messageratelimit#relocation_cancel_response ObjectFirewallGtpMessageratelimit#relocation_cancel_response}
  */
  readonly relocationCancelResponse?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_messageratelimit#scopetype ObjectFirewallGtpMessageratelimit#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_messageratelimit#send_route_request ObjectFirewallGtpMessageratelimit#send_route_request}
  */
  readonly sendRouteRequest?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_messageratelimit#send_route_response ObjectFirewallGtpMessageratelimit#send_route_response}
  */
  readonly sendRouteResponse?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_messageratelimit#sgsn_context_ack ObjectFirewallGtpMessageratelimit#sgsn_context_ack}
  */
  readonly sgsnContextAck?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_messageratelimit#sgsn_context_request ObjectFirewallGtpMessageratelimit#sgsn_context_request}
  */
  readonly sgsnContextRequest?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_messageratelimit#sgsn_context_response ObjectFirewallGtpMessageratelimit#sgsn_context_response}
  */
  readonly sgsnContextResponse?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_messageratelimit#support_ext_hdr_notify ObjectFirewallGtpMessageratelimit#support_ext_hdr_notify}
  */
  readonly supportExtHdrNotify?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_messageratelimit#update_mbms_request ObjectFirewallGtpMessageratelimit#update_mbms_request}
  */
  readonly updateMbmsRequest?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_messageratelimit#update_mbms_response ObjectFirewallGtpMessageratelimit#update_mbms_response}
  */
  readonly updateMbmsResponse?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_messageratelimit#update_pdp_request ObjectFirewallGtpMessageratelimit#update_pdp_request}
  */
  readonly updatePdpRequest?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_messageratelimit#update_pdp_response ObjectFirewallGtpMessageratelimit#update_pdp_response}
  */
  readonly updatePdpResponse?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_messageratelimit#version_not_support ObjectFirewallGtpMessageratelimit#version_not_support}
  */
  readonly versionNotSupport?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_messageratelimit fortimanager_object_firewall_gtp_messageratelimit}
*/
export class ObjectFirewallGtpMessageratelimit extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_firewall_gtp_messageratelimit";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectFirewallGtpMessageratelimit resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectFirewallGtpMessageratelimit to import
  * @param importFromId The id of the existing ObjectFirewallGtpMessageratelimit that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_messageratelimit#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectFirewallGtpMessageratelimit to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_firewall_gtp_messageratelimit", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_messageratelimit fortimanager_object_firewall_gtp_messageratelimit} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectFirewallGtpMessageratelimitConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectFirewallGtpMessageratelimitConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_firewall_gtp_messageratelimit',
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
    this._createAaPdpRequest = config.createAaPdpRequest;
    this._createAaPdpResponse = config.createAaPdpResponse;
    this._createMbmsRequest = config.createMbmsRequest;
    this._createMbmsResponse = config.createMbmsResponse;
    this._createPdpRequest = config.createPdpRequest;
    this._createPdpResponse = config.createPdpResponse;
    this._deleteAaPdpRequest = config.deleteAaPdpRequest;
    this._deleteAaPdpResponse = config.deleteAaPdpResponse;
    this._deleteMbmsRequest = config.deleteMbmsRequest;
    this._deleteMbmsResponse = config.deleteMbmsResponse;
    this._deletePdpRequest = config.deletePdpRequest;
    this._deletePdpResponse = config.deletePdpResponse;
    this._echoReponse = config.echoReponse;
    this._echoRequest = config.echoRequest;
    this._echoResponse = config.echoResponse;
    this._errorIndication = config.errorIndication;
    this._failureReportRequest = config.failureReportRequest;
    this._failureReportResponse = config.failureReportResponse;
    this._fwdRelocCompleteAck = config.fwdRelocCompleteAck;
    this._fwdRelocationComplete = config.fwdRelocationComplete;
    this._fwdRelocationRequest = config.fwdRelocationRequest;
    this._fwdRelocationResponse = config.fwdRelocationResponse;
    this._fwdSrnsContext = config.fwdSrnsContext;
    this._fwdSrnsContextAck = config.fwdSrnsContextAck;
    this._gPdu = config.gPdu;
    this._gtp = config.gtp;
    this._id = config.id;
    this._identificationRequest = config.identificationRequest;
    this._identificationResponse = config.identificationResponse;
    this._mbmsDeRegRequest = config.mbmsDeRegRequest;
    this._mbmsDeRegResponse = config.mbmsDeRegResponse;
    this._mbmsNotifyRejRequest = config.mbmsNotifyRejRequest;
    this._mbmsNotifyRejResponse = config.mbmsNotifyRejResponse;
    this._mbmsNotifyRequest = config.mbmsNotifyRequest;
    this._mbmsNotifyResponse = config.mbmsNotifyResponse;
    this._mbmsRegRequest = config.mbmsRegRequest;
    this._mbmsRegResponse = config.mbmsRegResponse;
    this._mbmsSesStartRequest = config.mbmsSesStartRequest;
    this._mbmsSesStartResponse = config.mbmsSesStartResponse;
    this._mbmsSesStopRequest = config.mbmsSesStopRequest;
    this._mbmsSesStopResponse = config.mbmsSesStopResponse;
    this._noteMsRequest = config.noteMsRequest;
    this._noteMsResponse = config.noteMsResponse;
    this._pduNotifyRejRequest = config.pduNotifyRejRequest;
    this._pduNotifyRejResponse = config.pduNotifyRejResponse;
    this._pduNotifyRequest = config.pduNotifyRequest;
    this._pduNotifyResponse = config.pduNotifyResponse;
    this._ranInfo = config.ranInfo;
    this._relocationCancelRequest = config.relocationCancelRequest;
    this._relocationCancelResponse = config.relocationCancelResponse;
    this._scopetype = config.scopetype;
    this._sendRouteRequest = config.sendRouteRequest;
    this._sendRouteResponse = config.sendRouteResponse;
    this._sgsnContextAck = config.sgsnContextAck;
    this._sgsnContextRequest = config.sgsnContextRequest;
    this._sgsnContextResponse = config.sgsnContextResponse;
    this._supportExtHdrNotify = config.supportExtHdrNotify;
    this._updateMbmsRequest = config.updateMbmsRequest;
    this._updateMbmsResponse = config.updateMbmsResponse;
    this._updatePdpRequest = config.updatePdpRequest;
    this._updatePdpResponse = config.updatePdpResponse;
    this._versionNotSupport = config.versionNotSupport;
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

  // create_aa_pdp_request - computed: false, optional: true, required: false
  private _createAaPdpRequest?: number; 
  public get createAaPdpRequest() {
    return this.getNumberAttribute('create_aa_pdp_request');
  }
  public set createAaPdpRequest(value: number) {
    this._createAaPdpRequest = value;
  }
  public resetCreateAaPdpRequest() {
    this._createAaPdpRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createAaPdpRequestInput() {
    return this._createAaPdpRequest;
  }

  // create_aa_pdp_response - computed: false, optional: true, required: false
  private _createAaPdpResponse?: number; 
  public get createAaPdpResponse() {
    return this.getNumberAttribute('create_aa_pdp_response');
  }
  public set createAaPdpResponse(value: number) {
    this._createAaPdpResponse = value;
  }
  public resetCreateAaPdpResponse() {
    this._createAaPdpResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createAaPdpResponseInput() {
    return this._createAaPdpResponse;
  }

  // create_mbms_request - computed: false, optional: true, required: false
  private _createMbmsRequest?: number; 
  public get createMbmsRequest() {
    return this.getNumberAttribute('create_mbms_request');
  }
  public set createMbmsRequest(value: number) {
    this._createMbmsRequest = value;
  }
  public resetCreateMbmsRequest() {
    this._createMbmsRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createMbmsRequestInput() {
    return this._createMbmsRequest;
  }

  // create_mbms_response - computed: false, optional: true, required: false
  private _createMbmsResponse?: number; 
  public get createMbmsResponse() {
    return this.getNumberAttribute('create_mbms_response');
  }
  public set createMbmsResponse(value: number) {
    this._createMbmsResponse = value;
  }
  public resetCreateMbmsResponse() {
    this._createMbmsResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createMbmsResponseInput() {
    return this._createMbmsResponse;
  }

  // create_pdp_request - computed: false, optional: true, required: false
  private _createPdpRequest?: number; 
  public get createPdpRequest() {
    return this.getNumberAttribute('create_pdp_request');
  }
  public set createPdpRequest(value: number) {
    this._createPdpRequest = value;
  }
  public resetCreatePdpRequest() {
    this._createPdpRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createPdpRequestInput() {
    return this._createPdpRequest;
  }

  // create_pdp_response - computed: false, optional: true, required: false
  private _createPdpResponse?: number; 
  public get createPdpResponse() {
    return this.getNumberAttribute('create_pdp_response');
  }
  public set createPdpResponse(value: number) {
    this._createPdpResponse = value;
  }
  public resetCreatePdpResponse() {
    this._createPdpResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createPdpResponseInput() {
    return this._createPdpResponse;
  }

  // delete_aa_pdp_request - computed: false, optional: true, required: false
  private _deleteAaPdpRequest?: number; 
  public get deleteAaPdpRequest() {
    return this.getNumberAttribute('delete_aa_pdp_request');
  }
  public set deleteAaPdpRequest(value: number) {
    this._deleteAaPdpRequest = value;
  }
  public resetDeleteAaPdpRequest() {
    this._deleteAaPdpRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteAaPdpRequestInput() {
    return this._deleteAaPdpRequest;
  }

  // delete_aa_pdp_response - computed: false, optional: true, required: false
  private _deleteAaPdpResponse?: number; 
  public get deleteAaPdpResponse() {
    return this.getNumberAttribute('delete_aa_pdp_response');
  }
  public set deleteAaPdpResponse(value: number) {
    this._deleteAaPdpResponse = value;
  }
  public resetDeleteAaPdpResponse() {
    this._deleteAaPdpResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteAaPdpResponseInput() {
    return this._deleteAaPdpResponse;
  }

  // delete_mbms_request - computed: false, optional: true, required: false
  private _deleteMbmsRequest?: number; 
  public get deleteMbmsRequest() {
    return this.getNumberAttribute('delete_mbms_request');
  }
  public set deleteMbmsRequest(value: number) {
    this._deleteMbmsRequest = value;
  }
  public resetDeleteMbmsRequest() {
    this._deleteMbmsRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteMbmsRequestInput() {
    return this._deleteMbmsRequest;
  }

  // delete_mbms_response - computed: false, optional: true, required: false
  private _deleteMbmsResponse?: number; 
  public get deleteMbmsResponse() {
    return this.getNumberAttribute('delete_mbms_response');
  }
  public set deleteMbmsResponse(value: number) {
    this._deleteMbmsResponse = value;
  }
  public resetDeleteMbmsResponse() {
    this._deleteMbmsResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteMbmsResponseInput() {
    return this._deleteMbmsResponse;
  }

  // delete_pdp_request - computed: false, optional: true, required: false
  private _deletePdpRequest?: number; 
  public get deletePdpRequest() {
    return this.getNumberAttribute('delete_pdp_request');
  }
  public set deletePdpRequest(value: number) {
    this._deletePdpRequest = value;
  }
  public resetDeletePdpRequest() {
    this._deletePdpRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletePdpRequestInput() {
    return this._deletePdpRequest;
  }

  // delete_pdp_response - computed: false, optional: true, required: false
  private _deletePdpResponse?: number; 
  public get deletePdpResponse() {
    return this.getNumberAttribute('delete_pdp_response');
  }
  public set deletePdpResponse(value: number) {
    this._deletePdpResponse = value;
  }
  public resetDeletePdpResponse() {
    this._deletePdpResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletePdpResponseInput() {
    return this._deletePdpResponse;
  }

  // echo_reponse - computed: false, optional: true, required: false
  private _echoReponse?: number; 
  public get echoReponse() {
    return this.getNumberAttribute('echo_reponse');
  }
  public set echoReponse(value: number) {
    this._echoReponse = value;
  }
  public resetEchoReponse() {
    this._echoReponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get echoReponseInput() {
    return this._echoReponse;
  }

  // echo_request - computed: false, optional: true, required: false
  private _echoRequest?: number; 
  public get echoRequest() {
    return this.getNumberAttribute('echo_request');
  }
  public set echoRequest(value: number) {
    this._echoRequest = value;
  }
  public resetEchoRequest() {
    this._echoRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get echoRequestInput() {
    return this._echoRequest;
  }

  // echo_response - computed: false, optional: true, required: false
  private _echoResponse?: number; 
  public get echoResponse() {
    return this.getNumberAttribute('echo_response');
  }
  public set echoResponse(value: number) {
    this._echoResponse = value;
  }
  public resetEchoResponse() {
    this._echoResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get echoResponseInput() {
    return this._echoResponse;
  }

  // error_indication - computed: false, optional: true, required: false
  private _errorIndication?: number; 
  public get errorIndication() {
    return this.getNumberAttribute('error_indication');
  }
  public set errorIndication(value: number) {
    this._errorIndication = value;
  }
  public resetErrorIndication() {
    this._errorIndication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorIndicationInput() {
    return this._errorIndication;
  }

  // failure_report_request - computed: false, optional: true, required: false
  private _failureReportRequest?: number; 
  public get failureReportRequest() {
    return this.getNumberAttribute('failure_report_request');
  }
  public set failureReportRequest(value: number) {
    this._failureReportRequest = value;
  }
  public resetFailureReportRequest() {
    this._failureReportRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureReportRequestInput() {
    return this._failureReportRequest;
  }

  // failure_report_response - computed: false, optional: true, required: false
  private _failureReportResponse?: number; 
  public get failureReportResponse() {
    return this.getNumberAttribute('failure_report_response');
  }
  public set failureReportResponse(value: number) {
    this._failureReportResponse = value;
  }
  public resetFailureReportResponse() {
    this._failureReportResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureReportResponseInput() {
    return this._failureReportResponse;
  }

  // fwd_reloc_complete_ack - computed: false, optional: true, required: false
  private _fwdRelocCompleteAck?: number; 
  public get fwdRelocCompleteAck() {
    return this.getNumberAttribute('fwd_reloc_complete_ack');
  }
  public set fwdRelocCompleteAck(value: number) {
    this._fwdRelocCompleteAck = value;
  }
  public resetFwdRelocCompleteAck() {
    this._fwdRelocCompleteAck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdRelocCompleteAckInput() {
    return this._fwdRelocCompleteAck;
  }

  // fwd_relocation_complete - computed: false, optional: true, required: false
  private _fwdRelocationComplete?: number; 
  public get fwdRelocationComplete() {
    return this.getNumberAttribute('fwd_relocation_complete');
  }
  public set fwdRelocationComplete(value: number) {
    this._fwdRelocationComplete = value;
  }
  public resetFwdRelocationComplete() {
    this._fwdRelocationComplete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdRelocationCompleteInput() {
    return this._fwdRelocationComplete;
  }

  // fwd_relocation_request - computed: false, optional: true, required: false
  private _fwdRelocationRequest?: number; 
  public get fwdRelocationRequest() {
    return this.getNumberAttribute('fwd_relocation_request');
  }
  public set fwdRelocationRequest(value: number) {
    this._fwdRelocationRequest = value;
  }
  public resetFwdRelocationRequest() {
    this._fwdRelocationRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdRelocationRequestInput() {
    return this._fwdRelocationRequest;
  }

  // fwd_relocation_response - computed: false, optional: true, required: false
  private _fwdRelocationResponse?: number; 
  public get fwdRelocationResponse() {
    return this.getNumberAttribute('fwd_relocation_response');
  }
  public set fwdRelocationResponse(value: number) {
    this._fwdRelocationResponse = value;
  }
  public resetFwdRelocationResponse() {
    this._fwdRelocationResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdRelocationResponseInput() {
    return this._fwdRelocationResponse;
  }

  // fwd_srns_context - computed: false, optional: true, required: false
  private _fwdSrnsContext?: number; 
  public get fwdSrnsContext() {
    return this.getNumberAttribute('fwd_srns_context');
  }
  public set fwdSrnsContext(value: number) {
    this._fwdSrnsContext = value;
  }
  public resetFwdSrnsContext() {
    this._fwdSrnsContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdSrnsContextInput() {
    return this._fwdSrnsContext;
  }

  // fwd_srns_context_ack - computed: false, optional: true, required: false
  private _fwdSrnsContextAck?: number; 
  public get fwdSrnsContextAck() {
    return this.getNumberAttribute('fwd_srns_context_ack');
  }
  public set fwdSrnsContextAck(value: number) {
    this._fwdSrnsContextAck = value;
  }
  public resetFwdSrnsContextAck() {
    this._fwdSrnsContextAck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdSrnsContextAckInput() {
    return this._fwdSrnsContextAck;
  }

  // g_pdu - computed: false, optional: true, required: false
  private _gPdu?: number; 
  public get gPdu() {
    return this.getNumberAttribute('g_pdu');
  }
  public set gPdu(value: number) {
    this._gPdu = value;
  }
  public resetGPdu() {
    this._gPdu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gPduInput() {
    return this._gPdu;
  }

  // gtp - computed: false, optional: false, required: true
  private _gtp?: string; 
  public get gtp() {
    return this.getStringAttribute('gtp');
  }
  public set gtp(value: string) {
    this._gtp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpInput() {
    return this._gtp;
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

  // identification_request - computed: false, optional: true, required: false
  private _identificationRequest?: number; 
  public get identificationRequest() {
    return this.getNumberAttribute('identification_request');
  }
  public set identificationRequest(value: number) {
    this._identificationRequest = value;
  }
  public resetIdentificationRequest() {
    this._identificationRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identificationRequestInput() {
    return this._identificationRequest;
  }

  // identification_response - computed: false, optional: true, required: false
  private _identificationResponse?: number; 
  public get identificationResponse() {
    return this.getNumberAttribute('identification_response');
  }
  public set identificationResponse(value: number) {
    this._identificationResponse = value;
  }
  public resetIdentificationResponse() {
    this._identificationResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identificationResponseInput() {
    return this._identificationResponse;
  }

  // mbms_de_reg_request - computed: false, optional: true, required: false
  private _mbmsDeRegRequest?: number; 
  public get mbmsDeRegRequest() {
    return this.getNumberAttribute('mbms_de_reg_request');
  }
  public set mbmsDeRegRequest(value: number) {
    this._mbmsDeRegRequest = value;
  }
  public resetMbmsDeRegRequest() {
    this._mbmsDeRegRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mbmsDeRegRequestInput() {
    return this._mbmsDeRegRequest;
  }

  // mbms_de_reg_response - computed: false, optional: true, required: false
  private _mbmsDeRegResponse?: number; 
  public get mbmsDeRegResponse() {
    return this.getNumberAttribute('mbms_de_reg_response');
  }
  public set mbmsDeRegResponse(value: number) {
    this._mbmsDeRegResponse = value;
  }
  public resetMbmsDeRegResponse() {
    this._mbmsDeRegResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mbmsDeRegResponseInput() {
    return this._mbmsDeRegResponse;
  }

  // mbms_notify_rej_request - computed: false, optional: true, required: false
  private _mbmsNotifyRejRequest?: number; 
  public get mbmsNotifyRejRequest() {
    return this.getNumberAttribute('mbms_notify_rej_request');
  }
  public set mbmsNotifyRejRequest(value: number) {
    this._mbmsNotifyRejRequest = value;
  }
  public resetMbmsNotifyRejRequest() {
    this._mbmsNotifyRejRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mbmsNotifyRejRequestInput() {
    return this._mbmsNotifyRejRequest;
  }

  // mbms_notify_rej_response - computed: false, optional: true, required: false
  private _mbmsNotifyRejResponse?: number; 
  public get mbmsNotifyRejResponse() {
    return this.getNumberAttribute('mbms_notify_rej_response');
  }
  public set mbmsNotifyRejResponse(value: number) {
    this._mbmsNotifyRejResponse = value;
  }
  public resetMbmsNotifyRejResponse() {
    this._mbmsNotifyRejResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mbmsNotifyRejResponseInput() {
    return this._mbmsNotifyRejResponse;
  }

  // mbms_notify_request - computed: false, optional: true, required: false
  private _mbmsNotifyRequest?: number; 
  public get mbmsNotifyRequest() {
    return this.getNumberAttribute('mbms_notify_request');
  }
  public set mbmsNotifyRequest(value: number) {
    this._mbmsNotifyRequest = value;
  }
  public resetMbmsNotifyRequest() {
    this._mbmsNotifyRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mbmsNotifyRequestInput() {
    return this._mbmsNotifyRequest;
  }

  // mbms_notify_response - computed: false, optional: true, required: false
  private _mbmsNotifyResponse?: number; 
  public get mbmsNotifyResponse() {
    return this.getNumberAttribute('mbms_notify_response');
  }
  public set mbmsNotifyResponse(value: number) {
    this._mbmsNotifyResponse = value;
  }
  public resetMbmsNotifyResponse() {
    this._mbmsNotifyResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mbmsNotifyResponseInput() {
    return this._mbmsNotifyResponse;
  }

  // mbms_reg_request - computed: false, optional: true, required: false
  private _mbmsRegRequest?: number; 
  public get mbmsRegRequest() {
    return this.getNumberAttribute('mbms_reg_request');
  }
  public set mbmsRegRequest(value: number) {
    this._mbmsRegRequest = value;
  }
  public resetMbmsRegRequest() {
    this._mbmsRegRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mbmsRegRequestInput() {
    return this._mbmsRegRequest;
  }

  // mbms_reg_response - computed: false, optional: true, required: false
  private _mbmsRegResponse?: number; 
  public get mbmsRegResponse() {
    return this.getNumberAttribute('mbms_reg_response');
  }
  public set mbmsRegResponse(value: number) {
    this._mbmsRegResponse = value;
  }
  public resetMbmsRegResponse() {
    this._mbmsRegResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mbmsRegResponseInput() {
    return this._mbmsRegResponse;
  }

  // mbms_ses_start_request - computed: false, optional: true, required: false
  private _mbmsSesStartRequest?: number; 
  public get mbmsSesStartRequest() {
    return this.getNumberAttribute('mbms_ses_start_request');
  }
  public set mbmsSesStartRequest(value: number) {
    this._mbmsSesStartRequest = value;
  }
  public resetMbmsSesStartRequest() {
    this._mbmsSesStartRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mbmsSesStartRequestInput() {
    return this._mbmsSesStartRequest;
  }

  // mbms_ses_start_response - computed: false, optional: true, required: false
  private _mbmsSesStartResponse?: number; 
  public get mbmsSesStartResponse() {
    return this.getNumberAttribute('mbms_ses_start_response');
  }
  public set mbmsSesStartResponse(value: number) {
    this._mbmsSesStartResponse = value;
  }
  public resetMbmsSesStartResponse() {
    this._mbmsSesStartResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mbmsSesStartResponseInput() {
    return this._mbmsSesStartResponse;
  }

  // mbms_ses_stop_request - computed: false, optional: true, required: false
  private _mbmsSesStopRequest?: number; 
  public get mbmsSesStopRequest() {
    return this.getNumberAttribute('mbms_ses_stop_request');
  }
  public set mbmsSesStopRequest(value: number) {
    this._mbmsSesStopRequest = value;
  }
  public resetMbmsSesStopRequest() {
    this._mbmsSesStopRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mbmsSesStopRequestInput() {
    return this._mbmsSesStopRequest;
  }

  // mbms_ses_stop_response - computed: false, optional: true, required: false
  private _mbmsSesStopResponse?: number; 
  public get mbmsSesStopResponse() {
    return this.getNumberAttribute('mbms_ses_stop_response');
  }
  public set mbmsSesStopResponse(value: number) {
    this._mbmsSesStopResponse = value;
  }
  public resetMbmsSesStopResponse() {
    this._mbmsSesStopResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mbmsSesStopResponseInput() {
    return this._mbmsSesStopResponse;
  }

  // note_ms_request - computed: false, optional: true, required: false
  private _noteMsRequest?: number; 
  public get noteMsRequest() {
    return this.getNumberAttribute('note_ms_request');
  }
  public set noteMsRequest(value: number) {
    this._noteMsRequest = value;
  }
  public resetNoteMsRequest() {
    this._noteMsRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noteMsRequestInput() {
    return this._noteMsRequest;
  }

  // note_ms_response - computed: false, optional: true, required: false
  private _noteMsResponse?: number; 
  public get noteMsResponse() {
    return this.getNumberAttribute('note_ms_response');
  }
  public set noteMsResponse(value: number) {
    this._noteMsResponse = value;
  }
  public resetNoteMsResponse() {
    this._noteMsResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noteMsResponseInput() {
    return this._noteMsResponse;
  }

  // pdu_notify_rej_request - computed: false, optional: true, required: false
  private _pduNotifyRejRequest?: number; 
  public get pduNotifyRejRequest() {
    return this.getNumberAttribute('pdu_notify_rej_request');
  }
  public set pduNotifyRejRequest(value: number) {
    this._pduNotifyRejRequest = value;
  }
  public resetPduNotifyRejRequest() {
    this._pduNotifyRejRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pduNotifyRejRequestInput() {
    return this._pduNotifyRejRequest;
  }

  // pdu_notify_rej_response - computed: false, optional: true, required: false
  private _pduNotifyRejResponse?: number; 
  public get pduNotifyRejResponse() {
    return this.getNumberAttribute('pdu_notify_rej_response');
  }
  public set pduNotifyRejResponse(value: number) {
    this._pduNotifyRejResponse = value;
  }
  public resetPduNotifyRejResponse() {
    this._pduNotifyRejResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pduNotifyRejResponseInput() {
    return this._pduNotifyRejResponse;
  }

  // pdu_notify_request - computed: false, optional: true, required: false
  private _pduNotifyRequest?: number; 
  public get pduNotifyRequest() {
    return this.getNumberAttribute('pdu_notify_request');
  }
  public set pduNotifyRequest(value: number) {
    this._pduNotifyRequest = value;
  }
  public resetPduNotifyRequest() {
    this._pduNotifyRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pduNotifyRequestInput() {
    return this._pduNotifyRequest;
  }

  // pdu_notify_response - computed: false, optional: true, required: false
  private _pduNotifyResponse?: number; 
  public get pduNotifyResponse() {
    return this.getNumberAttribute('pdu_notify_response');
  }
  public set pduNotifyResponse(value: number) {
    this._pduNotifyResponse = value;
  }
  public resetPduNotifyResponse() {
    this._pduNotifyResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pduNotifyResponseInput() {
    return this._pduNotifyResponse;
  }

  // ran_info - computed: false, optional: true, required: false
  private _ranInfo?: number; 
  public get ranInfo() {
    return this.getNumberAttribute('ran_info');
  }
  public set ranInfo(value: number) {
    this._ranInfo = value;
  }
  public resetRanInfo() {
    this._ranInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ranInfoInput() {
    return this._ranInfo;
  }

  // relocation_cancel_request - computed: false, optional: true, required: false
  private _relocationCancelRequest?: number; 
  public get relocationCancelRequest() {
    return this.getNumberAttribute('relocation_cancel_request');
  }
  public set relocationCancelRequest(value: number) {
    this._relocationCancelRequest = value;
  }
  public resetRelocationCancelRequest() {
    this._relocationCancelRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relocationCancelRequestInput() {
    return this._relocationCancelRequest;
  }

  // relocation_cancel_response - computed: false, optional: true, required: false
  private _relocationCancelResponse?: number; 
  public get relocationCancelResponse() {
    return this.getNumberAttribute('relocation_cancel_response');
  }
  public set relocationCancelResponse(value: number) {
    this._relocationCancelResponse = value;
  }
  public resetRelocationCancelResponse() {
    this._relocationCancelResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relocationCancelResponseInput() {
    return this._relocationCancelResponse;
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

  // send_route_request - computed: false, optional: true, required: false
  private _sendRouteRequest?: number; 
  public get sendRouteRequest() {
    return this.getNumberAttribute('send_route_request');
  }
  public set sendRouteRequest(value: number) {
    this._sendRouteRequest = value;
  }
  public resetSendRouteRequest() {
    this._sendRouteRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendRouteRequestInput() {
    return this._sendRouteRequest;
  }

  // send_route_response - computed: false, optional: true, required: false
  private _sendRouteResponse?: number; 
  public get sendRouteResponse() {
    return this.getNumberAttribute('send_route_response');
  }
  public set sendRouteResponse(value: number) {
    this._sendRouteResponse = value;
  }
  public resetSendRouteResponse() {
    this._sendRouteResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendRouteResponseInput() {
    return this._sendRouteResponse;
  }

  // sgsn_context_ack - computed: false, optional: true, required: false
  private _sgsnContextAck?: number; 
  public get sgsnContextAck() {
    return this.getNumberAttribute('sgsn_context_ack');
  }
  public set sgsnContextAck(value: number) {
    this._sgsnContextAck = value;
  }
  public resetSgsnContextAck() {
    this._sgsnContextAck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sgsnContextAckInput() {
    return this._sgsnContextAck;
  }

  // sgsn_context_request - computed: false, optional: true, required: false
  private _sgsnContextRequest?: number; 
  public get sgsnContextRequest() {
    return this.getNumberAttribute('sgsn_context_request');
  }
  public set sgsnContextRequest(value: number) {
    this._sgsnContextRequest = value;
  }
  public resetSgsnContextRequest() {
    this._sgsnContextRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sgsnContextRequestInput() {
    return this._sgsnContextRequest;
  }

  // sgsn_context_response - computed: false, optional: true, required: false
  private _sgsnContextResponse?: number; 
  public get sgsnContextResponse() {
    return this.getNumberAttribute('sgsn_context_response');
  }
  public set sgsnContextResponse(value: number) {
    this._sgsnContextResponse = value;
  }
  public resetSgsnContextResponse() {
    this._sgsnContextResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sgsnContextResponseInput() {
    return this._sgsnContextResponse;
  }

  // support_ext_hdr_notify - computed: false, optional: true, required: false
  private _supportExtHdrNotify?: number; 
  public get supportExtHdrNotify() {
    return this.getNumberAttribute('support_ext_hdr_notify');
  }
  public set supportExtHdrNotify(value: number) {
    this._supportExtHdrNotify = value;
  }
  public resetSupportExtHdrNotify() {
    this._supportExtHdrNotify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportExtHdrNotifyInput() {
    return this._supportExtHdrNotify;
  }

  // update_mbms_request - computed: false, optional: true, required: false
  private _updateMbmsRequest?: number; 
  public get updateMbmsRequest() {
    return this.getNumberAttribute('update_mbms_request');
  }
  public set updateMbmsRequest(value: number) {
    this._updateMbmsRequest = value;
  }
  public resetUpdateMbmsRequest() {
    this._updateMbmsRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateMbmsRequestInput() {
    return this._updateMbmsRequest;
  }

  // update_mbms_response - computed: false, optional: true, required: false
  private _updateMbmsResponse?: number; 
  public get updateMbmsResponse() {
    return this.getNumberAttribute('update_mbms_response');
  }
  public set updateMbmsResponse(value: number) {
    this._updateMbmsResponse = value;
  }
  public resetUpdateMbmsResponse() {
    this._updateMbmsResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateMbmsResponseInput() {
    return this._updateMbmsResponse;
  }

  // update_pdp_request - computed: false, optional: true, required: false
  private _updatePdpRequest?: number; 
  public get updatePdpRequest() {
    return this.getNumberAttribute('update_pdp_request');
  }
  public set updatePdpRequest(value: number) {
    this._updatePdpRequest = value;
  }
  public resetUpdatePdpRequest() {
    this._updatePdpRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatePdpRequestInput() {
    return this._updatePdpRequest;
  }

  // update_pdp_response - computed: false, optional: true, required: false
  private _updatePdpResponse?: number; 
  public get updatePdpResponse() {
    return this.getNumberAttribute('update_pdp_response');
  }
  public set updatePdpResponse(value: number) {
    this._updatePdpResponse = value;
  }
  public resetUpdatePdpResponse() {
    this._updatePdpResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatePdpResponseInput() {
    return this._updatePdpResponse;
  }

  // version_not_support - computed: false, optional: true, required: false
  private _versionNotSupport?: number; 
  public get versionNotSupport() {
    return this.getNumberAttribute('version_not_support');
  }
  public set versionNotSupport(value: number) {
    this._versionNotSupport = value;
  }
  public resetVersionNotSupport() {
    this._versionNotSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionNotSupportInput() {
    return this._versionNotSupport;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      create_aa_pdp_request: cdktf.numberToTerraform(this._createAaPdpRequest),
      create_aa_pdp_response: cdktf.numberToTerraform(this._createAaPdpResponse),
      create_mbms_request: cdktf.numberToTerraform(this._createMbmsRequest),
      create_mbms_response: cdktf.numberToTerraform(this._createMbmsResponse),
      create_pdp_request: cdktf.numberToTerraform(this._createPdpRequest),
      create_pdp_response: cdktf.numberToTerraform(this._createPdpResponse),
      delete_aa_pdp_request: cdktf.numberToTerraform(this._deleteAaPdpRequest),
      delete_aa_pdp_response: cdktf.numberToTerraform(this._deleteAaPdpResponse),
      delete_mbms_request: cdktf.numberToTerraform(this._deleteMbmsRequest),
      delete_mbms_response: cdktf.numberToTerraform(this._deleteMbmsResponse),
      delete_pdp_request: cdktf.numberToTerraform(this._deletePdpRequest),
      delete_pdp_response: cdktf.numberToTerraform(this._deletePdpResponse),
      echo_reponse: cdktf.numberToTerraform(this._echoReponse),
      echo_request: cdktf.numberToTerraform(this._echoRequest),
      echo_response: cdktf.numberToTerraform(this._echoResponse),
      error_indication: cdktf.numberToTerraform(this._errorIndication),
      failure_report_request: cdktf.numberToTerraform(this._failureReportRequest),
      failure_report_response: cdktf.numberToTerraform(this._failureReportResponse),
      fwd_reloc_complete_ack: cdktf.numberToTerraform(this._fwdRelocCompleteAck),
      fwd_relocation_complete: cdktf.numberToTerraform(this._fwdRelocationComplete),
      fwd_relocation_request: cdktf.numberToTerraform(this._fwdRelocationRequest),
      fwd_relocation_response: cdktf.numberToTerraform(this._fwdRelocationResponse),
      fwd_srns_context: cdktf.numberToTerraform(this._fwdSrnsContext),
      fwd_srns_context_ack: cdktf.numberToTerraform(this._fwdSrnsContextAck),
      g_pdu: cdktf.numberToTerraform(this._gPdu),
      gtp: cdktf.stringToTerraform(this._gtp),
      id: cdktf.stringToTerraform(this._id),
      identification_request: cdktf.numberToTerraform(this._identificationRequest),
      identification_response: cdktf.numberToTerraform(this._identificationResponse),
      mbms_de_reg_request: cdktf.numberToTerraform(this._mbmsDeRegRequest),
      mbms_de_reg_response: cdktf.numberToTerraform(this._mbmsDeRegResponse),
      mbms_notify_rej_request: cdktf.numberToTerraform(this._mbmsNotifyRejRequest),
      mbms_notify_rej_response: cdktf.numberToTerraform(this._mbmsNotifyRejResponse),
      mbms_notify_request: cdktf.numberToTerraform(this._mbmsNotifyRequest),
      mbms_notify_response: cdktf.numberToTerraform(this._mbmsNotifyResponse),
      mbms_reg_request: cdktf.numberToTerraform(this._mbmsRegRequest),
      mbms_reg_response: cdktf.numberToTerraform(this._mbmsRegResponse),
      mbms_ses_start_request: cdktf.numberToTerraform(this._mbmsSesStartRequest),
      mbms_ses_start_response: cdktf.numberToTerraform(this._mbmsSesStartResponse),
      mbms_ses_stop_request: cdktf.numberToTerraform(this._mbmsSesStopRequest),
      mbms_ses_stop_response: cdktf.numberToTerraform(this._mbmsSesStopResponse),
      note_ms_request: cdktf.numberToTerraform(this._noteMsRequest),
      note_ms_response: cdktf.numberToTerraform(this._noteMsResponse),
      pdu_notify_rej_request: cdktf.numberToTerraform(this._pduNotifyRejRequest),
      pdu_notify_rej_response: cdktf.numberToTerraform(this._pduNotifyRejResponse),
      pdu_notify_request: cdktf.numberToTerraform(this._pduNotifyRequest),
      pdu_notify_response: cdktf.numberToTerraform(this._pduNotifyResponse),
      ran_info: cdktf.numberToTerraform(this._ranInfo),
      relocation_cancel_request: cdktf.numberToTerraform(this._relocationCancelRequest),
      relocation_cancel_response: cdktf.numberToTerraform(this._relocationCancelResponse),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      send_route_request: cdktf.numberToTerraform(this._sendRouteRequest),
      send_route_response: cdktf.numberToTerraform(this._sendRouteResponse),
      sgsn_context_ack: cdktf.numberToTerraform(this._sgsnContextAck),
      sgsn_context_request: cdktf.numberToTerraform(this._sgsnContextRequest),
      sgsn_context_response: cdktf.numberToTerraform(this._sgsnContextResponse),
      support_ext_hdr_notify: cdktf.numberToTerraform(this._supportExtHdrNotify),
      update_mbms_request: cdktf.numberToTerraform(this._updateMbmsRequest),
      update_mbms_response: cdktf.numberToTerraform(this._updateMbmsResponse),
      update_pdp_request: cdktf.numberToTerraform(this._updatePdpRequest),
      update_pdp_response: cdktf.numberToTerraform(this._updatePdpResponse),
      version_not_support: cdktf.numberToTerraform(this._versionNotSupport),
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
      create_aa_pdp_request: {
        value: cdktf.numberToHclTerraform(this._createAaPdpRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      create_aa_pdp_response: {
        value: cdktf.numberToHclTerraform(this._createAaPdpResponse),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      create_mbms_request: {
        value: cdktf.numberToHclTerraform(this._createMbmsRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      create_mbms_response: {
        value: cdktf.numberToHclTerraform(this._createMbmsResponse),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      create_pdp_request: {
        value: cdktf.numberToHclTerraform(this._createPdpRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      create_pdp_response: {
        value: cdktf.numberToHclTerraform(this._createPdpResponse),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      delete_aa_pdp_request: {
        value: cdktf.numberToHclTerraform(this._deleteAaPdpRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      delete_aa_pdp_response: {
        value: cdktf.numberToHclTerraform(this._deleteAaPdpResponse),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      delete_mbms_request: {
        value: cdktf.numberToHclTerraform(this._deleteMbmsRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      delete_mbms_response: {
        value: cdktf.numberToHclTerraform(this._deleteMbmsResponse),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      delete_pdp_request: {
        value: cdktf.numberToHclTerraform(this._deletePdpRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      delete_pdp_response: {
        value: cdktf.numberToHclTerraform(this._deletePdpResponse),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      echo_reponse: {
        value: cdktf.numberToHclTerraform(this._echoReponse),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      echo_request: {
        value: cdktf.numberToHclTerraform(this._echoRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      echo_response: {
        value: cdktf.numberToHclTerraform(this._echoResponse),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      error_indication: {
        value: cdktf.numberToHclTerraform(this._errorIndication),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      failure_report_request: {
        value: cdktf.numberToHclTerraform(this._failureReportRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      failure_report_response: {
        value: cdktf.numberToHclTerraform(this._failureReportResponse),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fwd_reloc_complete_ack: {
        value: cdktf.numberToHclTerraform(this._fwdRelocCompleteAck),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fwd_relocation_complete: {
        value: cdktf.numberToHclTerraform(this._fwdRelocationComplete),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fwd_relocation_request: {
        value: cdktf.numberToHclTerraform(this._fwdRelocationRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fwd_relocation_response: {
        value: cdktf.numberToHclTerraform(this._fwdRelocationResponse),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fwd_srns_context: {
        value: cdktf.numberToHclTerraform(this._fwdSrnsContext),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fwd_srns_context_ack: {
        value: cdktf.numberToHclTerraform(this._fwdSrnsContextAck),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      g_pdu: {
        value: cdktf.numberToHclTerraform(this._gPdu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gtp: {
        value: cdktf.stringToHclTerraform(this._gtp),
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
      identification_request: {
        value: cdktf.numberToHclTerraform(this._identificationRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      identification_response: {
        value: cdktf.numberToHclTerraform(this._identificationResponse),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mbms_de_reg_request: {
        value: cdktf.numberToHclTerraform(this._mbmsDeRegRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mbms_de_reg_response: {
        value: cdktf.numberToHclTerraform(this._mbmsDeRegResponse),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mbms_notify_rej_request: {
        value: cdktf.numberToHclTerraform(this._mbmsNotifyRejRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mbms_notify_rej_response: {
        value: cdktf.numberToHclTerraform(this._mbmsNotifyRejResponse),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mbms_notify_request: {
        value: cdktf.numberToHclTerraform(this._mbmsNotifyRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mbms_notify_response: {
        value: cdktf.numberToHclTerraform(this._mbmsNotifyResponse),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mbms_reg_request: {
        value: cdktf.numberToHclTerraform(this._mbmsRegRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mbms_reg_response: {
        value: cdktf.numberToHclTerraform(this._mbmsRegResponse),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mbms_ses_start_request: {
        value: cdktf.numberToHclTerraform(this._mbmsSesStartRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mbms_ses_start_response: {
        value: cdktf.numberToHclTerraform(this._mbmsSesStartResponse),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mbms_ses_stop_request: {
        value: cdktf.numberToHclTerraform(this._mbmsSesStopRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mbms_ses_stop_response: {
        value: cdktf.numberToHclTerraform(this._mbmsSesStopResponse),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      note_ms_request: {
        value: cdktf.numberToHclTerraform(this._noteMsRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      note_ms_response: {
        value: cdktf.numberToHclTerraform(this._noteMsResponse),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pdu_notify_rej_request: {
        value: cdktf.numberToHclTerraform(this._pduNotifyRejRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pdu_notify_rej_response: {
        value: cdktf.numberToHclTerraform(this._pduNotifyRejResponse),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pdu_notify_request: {
        value: cdktf.numberToHclTerraform(this._pduNotifyRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pdu_notify_response: {
        value: cdktf.numberToHclTerraform(this._pduNotifyResponse),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ran_info: {
        value: cdktf.numberToHclTerraform(this._ranInfo),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      relocation_cancel_request: {
        value: cdktf.numberToHclTerraform(this._relocationCancelRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      relocation_cancel_response: {
        value: cdktf.numberToHclTerraform(this._relocationCancelResponse),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      send_route_request: {
        value: cdktf.numberToHclTerraform(this._sendRouteRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      send_route_response: {
        value: cdktf.numberToHclTerraform(this._sendRouteResponse),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sgsn_context_ack: {
        value: cdktf.numberToHclTerraform(this._sgsnContextAck),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sgsn_context_request: {
        value: cdktf.numberToHclTerraform(this._sgsnContextRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sgsn_context_response: {
        value: cdktf.numberToHclTerraform(this._sgsnContextResponse),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      support_ext_hdr_notify: {
        value: cdktf.numberToHclTerraform(this._supportExtHdrNotify),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      update_mbms_request: {
        value: cdktf.numberToHclTerraform(this._updateMbmsRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      update_mbms_response: {
        value: cdktf.numberToHclTerraform(this._updateMbmsResponse),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      update_pdp_request: {
        value: cdktf.numberToHclTerraform(this._updatePdpRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      update_pdp_response: {
        value: cdktf.numberToHclTerraform(this._updatePdpResponse),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      version_not_support: {
        value: cdktf.numberToHclTerraform(this._versionNotSupport),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
