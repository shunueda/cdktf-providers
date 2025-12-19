// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_pcp_trigger_stats_inc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpTriggerStatsIncAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable automatic packet-capture for PCP Client Address Mismatch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_pcp_trigger_stats_inc#address_mismatch VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpTriggerStatsIncA#address_mismatch}
  */
  readonly addressMismatch?: number;
  /**
  * Enable automatic packet-capture for Cannot Provide Suggested Port When PREFER_FAILURE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_pcp_trigger_stats_inc#cannot_provide_suggest VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpTriggerStatsIncA#cannot_provide_suggest}
  */
  readonly cannotProvideSuggest?: number;
  /**
  * Enable automatic packet-capture for Excessive Remote Peers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_pcp_trigger_stats_inc#excessive_remote_peers VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpTriggerStatsIncA#excessive_remote_peers}
  */
  readonly excessiveRemotePeers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_pcp_trigger_stats_inc#id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpTriggerStatsIncA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable automatic packet-capture for Internal Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_pcp_trigger_stats_inc#internal_error_drop VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpTriggerStatsIncA#internal_error_drop}
  */
  readonly internalErrorDrop?: number;
  /**
  * Enable automatic packet-capture for L3/L4 Process Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_pcp_trigger_stats_inc#l4_process_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpTriggerStatsIncA#l4_process_error}
  */
  readonly l4ProcessError?: number;
  /**
  * Enable automatic packet-capture for PCP Option Malformed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_pcp_trigger_stats_inc#malform_option VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpTriggerStatsIncA#malform_option}
  */
  readonly malformOption?: number;
  /**
  * Enable automatic packet-capture for PCP Request Malformed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_pcp_trigger_stats_inc#malform_request VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpTriggerStatsIncA#malform_request}
  */
  readonly malformRequest?: number;
  /**
  * Enable automatic packet-capture for No System or NAT Resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_pcp_trigger_stats_inc#no_resources VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpTriggerStatsIncA#no_resources}
  */
  readonly noResources?: number;
  /**
  * Enable automatic packet-capture for Response No Route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_pcp_trigger_stats_inc#noroute_drop VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpTriggerStatsIncA#noroute_drop}
  */
  readonly norouteDrop?: number;
  /**
  * Enable automatic packet-capture for PCP Request Not Authorized
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_pcp_trigger_stats_inc#not_authorized VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpTriggerStatsIncA#not_authorized}
  */
  readonly notAuthorized?: number;
  /**
  * Enable automatic packet-capture for Packet Dropped For Not Coming From NAT Inside
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_pcp_trigger_stats_inc#pkt_not_from_nat_inside VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpTriggerStatsIncA#pkt_not_from_nat_inside}
  */
  readonly pktNotFromNatInside?: number;
  /**
  * Enable automatic packet-capture for Packet Not a PCP Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_pcp_trigger_stats_inc#pkt_not_request_drop VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpTriggerStatsIncA#pkt_not_request_drop}
  */
  readonly pktNotRequestDrop?: number;
  /**
  * Enable automatic packet-capture for Packet Too Short
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_pcp_trigger_stats_inc#pkt_too_short_drop VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpTriggerStatsIncA#pkt_too_short_drop}
  */
  readonly pktTooShortDrop?: number;
  /**
  * Template_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_pcp_trigger_stats_inc#template_name VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpTriggerStatsIncA#template_name}
  */
  readonly templateName: string;
  /**
  * Enable automatic packet-capture for Unsolicited Announce Send Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_pcp_trigger_stats_inc#unsol_ance_sent_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpTriggerStatsIncA#unsol_ance_sent_fail}
  */
  readonly unsolAnceSentFail?: number;
  /**
  * Enable automatic packet-capture for Unsupported PCP Opcode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_pcp_trigger_stats_inc#unsupp_opcode VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpTriggerStatsIncA#unsupp_opcode}
  */
  readonly unsuppOpcode?: number;
  /**
  * Enable automatic packet-capture for Unsupported PCP Option
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_pcp_trigger_stats_inc#unsupp_option VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpTriggerStatsIncA#unsupp_option}
  */
  readonly unsuppOption?: number;
  /**
  * Enable automatic packet-capture for Unsupported Mapping Protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_pcp_trigger_stats_inc#unsupp_protocol VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpTriggerStatsIncA#unsupp_protocol}
  */
  readonly unsuppProtocol?: number;
  /**
  * Enable automatic packet-capture for Unsupported PCP version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_pcp_trigger_stats_inc#unsupported_version VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpTriggerStatsIncA#unsupported_version}
  */
  readonly unsupportedVersion?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_pcp_trigger_stats_inc#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpTriggerStatsIncA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_pcp_trigger_stats_inc thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_pcp_trigger_stats_inc}
*/
export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpTriggerStatsIncA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_pcp_trigger_stats_inc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpTriggerStatsIncA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpTriggerStatsIncA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpTriggerStatsIncA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_pcp_trigger_stats_inc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpTriggerStatsIncA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_pcp_trigger_stats_inc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_pcp_trigger_stats_inc thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_pcp_trigger_stats_inc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpTriggerStatsIncAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpTriggerStatsIncAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_pcp_trigger_stats_inc',
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
    this._addressMismatch = config.addressMismatch;
    this._cannotProvideSuggest = config.cannotProvideSuggest;
    this._excessiveRemotePeers = config.excessiveRemotePeers;
    this._id = config.id;
    this._internalErrorDrop = config.internalErrorDrop;
    this._l4ProcessError = config.l4ProcessError;
    this._malformOption = config.malformOption;
    this._malformRequest = config.malformRequest;
    this._noResources = config.noResources;
    this._norouteDrop = config.norouteDrop;
    this._notAuthorized = config.notAuthorized;
    this._pktNotFromNatInside = config.pktNotFromNatInside;
    this._pktNotRequestDrop = config.pktNotRequestDrop;
    this._pktTooShortDrop = config.pktTooShortDrop;
    this._templateName = config.templateName;
    this._unsolAnceSentFail = config.unsolAnceSentFail;
    this._unsuppOpcode = config.unsuppOpcode;
    this._unsuppOption = config.unsuppOption;
    this._unsuppProtocol = config.unsuppProtocol;
    this._unsupportedVersion = config.unsupportedVersion;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
      address_mismatch: cdktf.numberToTerraform(this._addressMismatch),
      cannot_provide_suggest: cdktf.numberToTerraform(this._cannotProvideSuggest),
      excessive_remote_peers: cdktf.numberToTerraform(this._excessiveRemotePeers),
      id: cdktf.stringToTerraform(this._id),
      internal_error_drop: cdktf.numberToTerraform(this._internalErrorDrop),
      l4_process_error: cdktf.numberToTerraform(this._l4ProcessError),
      malform_option: cdktf.numberToTerraform(this._malformOption),
      malform_request: cdktf.numberToTerraform(this._malformRequest),
      no_resources: cdktf.numberToTerraform(this._noResources),
      noroute_drop: cdktf.numberToTerraform(this._norouteDrop),
      not_authorized: cdktf.numberToTerraform(this._notAuthorized),
      pkt_not_from_nat_inside: cdktf.numberToTerraform(this._pktNotFromNatInside),
      pkt_not_request_drop: cdktf.numberToTerraform(this._pktNotRequestDrop),
      pkt_too_short_drop: cdktf.numberToTerraform(this._pktTooShortDrop),
      template_name: cdktf.stringToTerraform(this._templateName),
      unsol_ance_sent_fail: cdktf.numberToTerraform(this._unsolAnceSentFail),
      unsupp_opcode: cdktf.numberToTerraform(this._unsuppOpcode),
      unsupp_option: cdktf.numberToTerraform(this._unsuppOption),
      unsupp_protocol: cdktf.numberToTerraform(this._unsuppProtocol),
      unsupported_version: cdktf.numberToTerraform(this._unsupportedVersion),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address_mismatch: {
        value: cdktf.numberToHclTerraform(this._addressMismatch),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cannot_provide_suggest: {
        value: cdktf.numberToHclTerraform(this._cannotProvideSuggest),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      excessive_remote_peers: {
        value: cdktf.numberToHclTerraform(this._excessiveRemotePeers),
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
      internal_error_drop: {
        value: cdktf.numberToHclTerraform(this._internalErrorDrop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      l4_process_error: {
        value: cdktf.numberToHclTerraform(this._l4ProcessError),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      malform_option: {
        value: cdktf.numberToHclTerraform(this._malformOption),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      malform_request: {
        value: cdktf.numberToHclTerraform(this._malformRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      no_resources: {
        value: cdktf.numberToHclTerraform(this._noResources),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      noroute_drop: {
        value: cdktf.numberToHclTerraform(this._norouteDrop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      not_authorized: {
        value: cdktf.numberToHclTerraform(this._notAuthorized),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pkt_not_from_nat_inside: {
        value: cdktf.numberToHclTerraform(this._pktNotFromNatInside),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pkt_not_request_drop: {
        value: cdktf.numberToHclTerraform(this._pktNotRequestDrop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pkt_too_short_drop: {
        value: cdktf.numberToHclTerraform(this._pktTooShortDrop),
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
      unsol_ance_sent_fail: {
        value: cdktf.numberToHclTerraform(this._unsolAnceSentFail),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      unsupp_opcode: {
        value: cdktf.numberToHclTerraform(this._unsuppOpcode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      unsupp_option: {
        value: cdktf.numberToHclTerraform(this._unsuppOption),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      unsupp_protocol: {
        value: cdktf.numberToHclTerraform(this._unsuppProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      unsupported_version: {
        value: cdktf.numberToHclTerraform(this._unsupportedVersion),
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
