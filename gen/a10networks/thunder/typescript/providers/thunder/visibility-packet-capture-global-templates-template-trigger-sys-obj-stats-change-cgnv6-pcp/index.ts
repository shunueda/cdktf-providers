// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_pcp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_pcp#id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_pcp#name VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpA#name}
  */
  readonly name: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_pcp#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpA#uuid}
  */
  readonly uuid?: string;
  /**
  * trigger_stats_inc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_pcp#trigger_stats_inc VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpA#trigger_stats_inc}
  */
  readonly triggerStatsInc?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpTriggerStatsIncA;
  /**
  * trigger_stats_rate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_pcp#trigger_stats_rate VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpA#trigger_stats_rate}
  */
  readonly triggerStatsRate?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpTriggerStatsRateA;
}
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpTriggerStatsIncA {
  /**
  * Enable automatic packet-capture for PCP Client Address Mismatch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_pcp#address_mismatch VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpA#address_mismatch}
  */
  readonly addressMismatch?: number;
  /**
  * Enable automatic packet-capture for Cannot Provide Suggested Port When PREFER_FAILURE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_pcp#cannot_provide_suggest VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpA#cannot_provide_suggest}
  */
  readonly cannotProvideSuggest?: number;
  /**
  * Enable automatic packet-capture for Excessive Remote Peers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_pcp#excessive_remote_peers VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpA#excessive_remote_peers}
  */
  readonly excessiveRemotePeers?: number;
  /**
  * Enable automatic packet-capture for Internal Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_pcp#internal_error_drop VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpA#internal_error_drop}
  */
  readonly internalErrorDrop?: number;
  /**
  * Enable automatic packet-capture for L3/L4 Process Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_pcp#l4_process_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpA#l4_process_error}
  */
  readonly l4ProcessError?: number;
  /**
  * Enable automatic packet-capture for PCP Option Malformed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_pcp#malform_option VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpA#malform_option}
  */
  readonly malformOption?: number;
  /**
  * Enable automatic packet-capture for PCP Request Malformed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_pcp#malform_request VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpA#malform_request}
  */
  readonly malformRequest?: number;
  /**
  * Enable automatic packet-capture for No System or NAT Resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_pcp#no_resources VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpA#no_resources}
  */
  readonly noResources?: number;
  /**
  * Enable automatic packet-capture for Response No Route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_pcp#noroute_drop VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpA#noroute_drop}
  */
  readonly norouteDrop?: number;
  /**
  * Enable automatic packet-capture for PCP Request Not Authorized
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_pcp#not_authorized VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpA#not_authorized}
  */
  readonly notAuthorized?: number;
  /**
  * Enable automatic packet-capture for Packet Dropped For Not Coming From NAT Inside
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_pcp#pkt_not_from_nat_inside VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpA#pkt_not_from_nat_inside}
  */
  readonly pktNotFromNatInside?: number;
  /**
  * Enable automatic packet-capture for Packet Not a PCP Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_pcp#pkt_not_request_drop VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpA#pkt_not_request_drop}
  */
  readonly pktNotRequestDrop?: number;
  /**
  * Enable automatic packet-capture for Packet Too Short
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_pcp#pkt_too_short_drop VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpA#pkt_too_short_drop}
  */
  readonly pktTooShortDrop?: number;
  /**
  * Enable automatic packet-capture for Unsolicited Announce Send Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_pcp#unsol_ance_sent_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpA#unsol_ance_sent_fail}
  */
  readonly unsolAnceSentFail?: number;
  /**
  * Enable automatic packet-capture for Unsupported PCP Opcode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_pcp#unsupp_opcode VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpA#unsupp_opcode}
  */
  readonly unsuppOpcode?: number;
  /**
  * Enable automatic packet-capture for Unsupported PCP Option
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_pcp#unsupp_option VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpA#unsupp_option}
  */
  readonly unsuppOption?: number;
  /**
  * Enable automatic packet-capture for Unsupported Mapping Protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_pcp#unsupp_protocol VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpA#unsupp_protocol}
  */
  readonly unsuppProtocol?: number;
  /**
  * Enable automatic packet-capture for Unsupported PCP version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_pcp#unsupported_version VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpA#unsupported_version}
  */
  readonly unsupportedVersion?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_pcp#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpA#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpTriggerStatsIncAToTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpTriggerStatsIncAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpTriggerStatsIncA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_mismatch: cdktf.numberToTerraform(struct!.addressMismatch),
    cannot_provide_suggest: cdktf.numberToTerraform(struct!.cannotProvideSuggest),
    excessive_remote_peers: cdktf.numberToTerraform(struct!.excessiveRemotePeers),
    internal_error_drop: cdktf.numberToTerraform(struct!.internalErrorDrop),
    l4_process_error: cdktf.numberToTerraform(struct!.l4ProcessError),
    malform_option: cdktf.numberToTerraform(struct!.malformOption),
    malform_request: cdktf.numberToTerraform(struct!.malformRequest),
    no_resources: cdktf.numberToTerraform(struct!.noResources),
    noroute_drop: cdktf.numberToTerraform(struct!.norouteDrop),
    not_authorized: cdktf.numberToTerraform(struct!.notAuthorized),
    pkt_not_from_nat_inside: cdktf.numberToTerraform(struct!.pktNotFromNatInside),
    pkt_not_request_drop: cdktf.numberToTerraform(struct!.pktNotRequestDrop),
    pkt_too_short_drop: cdktf.numberToTerraform(struct!.pktTooShortDrop),
    unsol_ance_sent_fail: cdktf.numberToTerraform(struct!.unsolAnceSentFail),
    unsupp_opcode: cdktf.numberToTerraform(struct!.unsuppOpcode),
    unsupp_option: cdktf.numberToTerraform(struct!.unsuppOption),
    unsupp_protocol: cdktf.numberToTerraform(struct!.unsuppProtocol),
    unsupported_version: cdktf.numberToTerraform(struct!.unsupportedVersion),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpTriggerStatsIncAToHclTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpTriggerStatsIncAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpTriggerStatsIncA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address_mismatch: {
      value: cdktf.numberToHclTerraform(struct!.addressMismatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cannot_provide_suggest: {
      value: cdktf.numberToHclTerraform(struct!.cannotProvideSuggest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    excessive_remote_peers: {
      value: cdktf.numberToHclTerraform(struct!.excessiveRemotePeers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    internal_error_drop: {
      value: cdktf.numberToHclTerraform(struct!.internalErrorDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l4_process_error: {
      value: cdktf.numberToHclTerraform(struct!.l4ProcessError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    malform_option: {
      value: cdktf.numberToHclTerraform(struct!.malformOption),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    malform_request: {
      value: cdktf.numberToHclTerraform(struct!.malformRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_resources: {
      value: cdktf.numberToHclTerraform(struct!.noResources),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    noroute_drop: {
      value: cdktf.numberToHclTerraform(struct!.norouteDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    not_authorized: {
      value: cdktf.numberToHclTerraform(struct!.notAuthorized),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pkt_not_from_nat_inside: {
      value: cdktf.numberToHclTerraform(struct!.pktNotFromNatInside),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pkt_not_request_drop: {
      value: cdktf.numberToHclTerraform(struct!.pktNotRequestDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pkt_too_short_drop: {
      value: cdktf.numberToHclTerraform(struct!.pktTooShortDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unsol_ance_sent_fail: {
      value: cdktf.numberToHclTerraform(struct!.unsolAnceSentFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unsupp_opcode: {
      value: cdktf.numberToHclTerraform(struct!.unsuppOpcode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unsupp_option: {
      value: cdktf.numberToHclTerraform(struct!.unsuppOption),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unsupp_protocol: {
      value: cdktf.numberToHclTerraform(struct!.unsuppProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unsupported_version: {
      value: cdktf.numberToHclTerraform(struct!.unsupportedVersion),
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

export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpTriggerStatsIncAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpTriggerStatsIncA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressMismatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressMismatch = this._addressMismatch;
    }
    if (this._cannotProvideSuggest !== undefined) {
      hasAnyValues = true;
      internalValueResult.cannotProvideSuggest = this._cannotProvideSuggest;
    }
    if (this._excessiveRemotePeers !== undefined) {
      hasAnyValues = true;
      internalValueResult.excessiveRemotePeers = this._excessiveRemotePeers;
    }
    if (this._internalErrorDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalErrorDrop = this._internalErrorDrop;
    }
    if (this._l4ProcessError !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4ProcessError = this._l4ProcessError;
    }
    if (this._malformOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformOption = this._malformOption;
    }
    if (this._malformRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformRequest = this._malformRequest;
    }
    if (this._noResources !== undefined) {
      hasAnyValues = true;
      internalValueResult.noResources = this._noResources;
    }
    if (this._norouteDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.norouteDrop = this._norouteDrop;
    }
    if (this._notAuthorized !== undefined) {
      hasAnyValues = true;
      internalValueResult.notAuthorized = this._notAuthorized;
    }
    if (this._pktNotFromNatInside !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktNotFromNatInside = this._pktNotFromNatInside;
    }
    if (this._pktNotRequestDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktNotRequestDrop = this._pktNotRequestDrop;
    }
    if (this._pktTooShortDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktTooShortDrop = this._pktTooShortDrop;
    }
    if (this._unsolAnceSentFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsolAnceSentFail = this._unsolAnceSentFail;
    }
    if (this._unsuppOpcode !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsuppOpcode = this._unsuppOpcode;
    }
    if (this._unsuppOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsuppOption = this._unsuppOption;
    }
    if (this._unsuppProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsuppProtocol = this._unsuppProtocol;
    }
    if (this._unsupportedVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsupportedVersion = this._unsupportedVersion;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpTriggerStatsIncA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addressMismatch = undefined;
      this._cannotProvideSuggest = undefined;
      this._excessiveRemotePeers = undefined;
      this._internalErrorDrop = undefined;
      this._l4ProcessError = undefined;
      this._malformOption = undefined;
      this._malformRequest = undefined;
      this._noResources = undefined;
      this._norouteDrop = undefined;
      this._notAuthorized = undefined;
      this._pktNotFromNatInside = undefined;
      this._pktNotRequestDrop = undefined;
      this._pktTooShortDrop = undefined;
      this._unsolAnceSentFail = undefined;
      this._unsuppOpcode = undefined;
      this._unsuppOption = undefined;
      this._unsuppProtocol = undefined;
      this._unsupportedVersion = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addressMismatch = value.addressMismatch;
      this._cannotProvideSuggest = value.cannotProvideSuggest;
      this._excessiveRemotePeers = value.excessiveRemotePeers;
      this._internalErrorDrop = value.internalErrorDrop;
      this._l4ProcessError = value.l4ProcessError;
      this._malformOption = value.malformOption;
      this._malformRequest = value.malformRequest;
      this._noResources = value.noResources;
      this._norouteDrop = value.norouteDrop;
      this._notAuthorized = value.notAuthorized;
      this._pktNotFromNatInside = value.pktNotFromNatInside;
      this._pktNotRequestDrop = value.pktNotRequestDrop;
      this._pktTooShortDrop = value.pktTooShortDrop;
      this._unsolAnceSentFail = value.unsolAnceSentFail;
      this._unsuppOpcode = value.unsuppOpcode;
      this._unsuppOption = value.unsuppOption;
      this._unsuppProtocol = value.unsuppProtocol;
      this._unsupportedVersion = value.unsupportedVersion;
      this._uuid = value.uuid;
    }
  }

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
}
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpTriggerStatsRateA {
  /**
  * Enable automatic packet-capture for PCP Client Address Mismatch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_pcp#address_mismatch VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpA#address_mismatch}
  */
  readonly addressMismatch?: number;
  /**
  * Enable automatic packet-capture for Cannot Provide Suggested Port When PREFER_FAILURE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_pcp#cannot_provide_suggest VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpA#cannot_provide_suggest}
  */
  readonly cannotProvideSuggest?: number;
  /**
  * Time in seconds to look for the anomaly, default is 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_pcp#duration VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpA#duration}
  */
  readonly duration?: number;
  /**
  * Enable automatic packet-capture for Excessive Remote Peers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_pcp#excessive_remote_peers VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpA#excessive_remote_peers}
  */
  readonly excessiveRemotePeers?: number;
  /**
  * Enable automatic packet-capture for Internal Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_pcp#internal_error_drop VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpA#internal_error_drop}
  */
  readonly internalErrorDrop?: number;
  /**
  * Enable automatic packet-capture for L3/L4 Process Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_pcp#l4_process_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpA#l4_process_error}
  */
  readonly l4ProcessError?: number;
  /**
  * Enable automatic packet-capture for PCP Option Malformed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_pcp#malform_option VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpA#malform_option}
  */
  readonly malformOption?: number;
  /**
  * Enable automatic packet-capture for PCP Request Malformed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_pcp#malform_request VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpA#malform_request}
  */
  readonly malformRequest?: number;
  /**
  * Enable automatic packet-capture for No System or NAT Resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_pcp#no_resources VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpA#no_resources}
  */
  readonly noResources?: number;
  /**
  * Enable automatic packet-capture for Response No Route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_pcp#noroute_drop VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpA#noroute_drop}
  */
  readonly norouteDrop?: number;
  /**
  * Enable automatic packet-capture for PCP Request Not Authorized
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_pcp#not_authorized VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpA#not_authorized}
  */
  readonly notAuthorized?: number;
  /**
  * Enable automatic packet-capture for Packet Dropped For Not Coming From NAT Inside
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_pcp#pkt_not_from_nat_inside VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpA#pkt_not_from_nat_inside}
  */
  readonly pktNotFromNatInside?: number;
  /**
  * Enable automatic packet-capture for Packet Not a PCP Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_pcp#pkt_not_request_drop VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpA#pkt_not_request_drop}
  */
  readonly pktNotRequestDrop?: number;
  /**
  * Enable automatic packet-capture for Packet Too Short
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_pcp#pkt_too_short_drop VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpA#pkt_too_short_drop}
  */
  readonly pktTooShortDrop?: number;
  /**
  * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_pcp#threshold_exceeded_by VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpA#threshold_exceeded_by}
  */
  readonly thresholdExceededBy?: number;
  /**
  * Enable automatic packet-capture for Unsolicited Announce Send Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_pcp#unsol_ance_sent_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpA#unsol_ance_sent_fail}
  */
  readonly unsolAnceSentFail?: number;
  /**
  * Enable automatic packet-capture for Unsupported PCP Opcode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_pcp#unsupp_opcode VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpA#unsupp_opcode}
  */
  readonly unsuppOpcode?: number;
  /**
  * Enable automatic packet-capture for Unsupported PCP Option
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_pcp#unsupp_option VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpA#unsupp_option}
  */
  readonly unsuppOption?: number;
  /**
  * Enable automatic packet-capture for Unsupported Mapping Protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_pcp#unsupp_protocol VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpA#unsupp_protocol}
  */
  readonly unsuppProtocol?: number;
  /**
  * Enable automatic packet-capture for Unsupported PCP version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_pcp#unsupported_version VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpA#unsupported_version}
  */
  readonly unsupportedVersion?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_pcp#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpA#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpTriggerStatsRateAToTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpTriggerStatsRateAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpTriggerStatsRateA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_mismatch: cdktf.numberToTerraform(struct!.addressMismatch),
    cannot_provide_suggest: cdktf.numberToTerraform(struct!.cannotProvideSuggest),
    duration: cdktf.numberToTerraform(struct!.duration),
    excessive_remote_peers: cdktf.numberToTerraform(struct!.excessiveRemotePeers),
    internal_error_drop: cdktf.numberToTerraform(struct!.internalErrorDrop),
    l4_process_error: cdktf.numberToTerraform(struct!.l4ProcessError),
    malform_option: cdktf.numberToTerraform(struct!.malformOption),
    malform_request: cdktf.numberToTerraform(struct!.malformRequest),
    no_resources: cdktf.numberToTerraform(struct!.noResources),
    noroute_drop: cdktf.numberToTerraform(struct!.norouteDrop),
    not_authorized: cdktf.numberToTerraform(struct!.notAuthorized),
    pkt_not_from_nat_inside: cdktf.numberToTerraform(struct!.pktNotFromNatInside),
    pkt_not_request_drop: cdktf.numberToTerraform(struct!.pktNotRequestDrop),
    pkt_too_short_drop: cdktf.numberToTerraform(struct!.pktTooShortDrop),
    threshold_exceeded_by: cdktf.numberToTerraform(struct!.thresholdExceededBy),
    unsol_ance_sent_fail: cdktf.numberToTerraform(struct!.unsolAnceSentFail),
    unsupp_opcode: cdktf.numberToTerraform(struct!.unsuppOpcode),
    unsupp_option: cdktf.numberToTerraform(struct!.unsuppOption),
    unsupp_protocol: cdktf.numberToTerraform(struct!.unsuppProtocol),
    unsupported_version: cdktf.numberToTerraform(struct!.unsupportedVersion),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpTriggerStatsRateAToHclTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpTriggerStatsRateAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpTriggerStatsRateA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address_mismatch: {
      value: cdktf.numberToHclTerraform(struct!.addressMismatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cannot_provide_suggest: {
      value: cdktf.numberToHclTerraform(struct!.cannotProvideSuggest),
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
    excessive_remote_peers: {
      value: cdktf.numberToHclTerraform(struct!.excessiveRemotePeers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    internal_error_drop: {
      value: cdktf.numberToHclTerraform(struct!.internalErrorDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l4_process_error: {
      value: cdktf.numberToHclTerraform(struct!.l4ProcessError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    malform_option: {
      value: cdktf.numberToHclTerraform(struct!.malformOption),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    malform_request: {
      value: cdktf.numberToHclTerraform(struct!.malformRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_resources: {
      value: cdktf.numberToHclTerraform(struct!.noResources),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    noroute_drop: {
      value: cdktf.numberToHclTerraform(struct!.norouteDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    not_authorized: {
      value: cdktf.numberToHclTerraform(struct!.notAuthorized),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pkt_not_from_nat_inside: {
      value: cdktf.numberToHclTerraform(struct!.pktNotFromNatInside),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pkt_not_request_drop: {
      value: cdktf.numberToHclTerraform(struct!.pktNotRequestDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pkt_too_short_drop: {
      value: cdktf.numberToHclTerraform(struct!.pktTooShortDrop),
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
    unsol_ance_sent_fail: {
      value: cdktf.numberToHclTerraform(struct!.unsolAnceSentFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unsupp_opcode: {
      value: cdktf.numberToHclTerraform(struct!.unsuppOpcode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unsupp_option: {
      value: cdktf.numberToHclTerraform(struct!.unsuppOption),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unsupp_protocol: {
      value: cdktf.numberToHclTerraform(struct!.unsuppProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unsupported_version: {
      value: cdktf.numberToHclTerraform(struct!.unsupportedVersion),
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

export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpTriggerStatsRateAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpTriggerStatsRateA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressMismatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressMismatch = this._addressMismatch;
    }
    if (this._cannotProvideSuggest !== undefined) {
      hasAnyValues = true;
      internalValueResult.cannotProvideSuggest = this._cannotProvideSuggest;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._excessiveRemotePeers !== undefined) {
      hasAnyValues = true;
      internalValueResult.excessiveRemotePeers = this._excessiveRemotePeers;
    }
    if (this._internalErrorDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalErrorDrop = this._internalErrorDrop;
    }
    if (this._l4ProcessError !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4ProcessError = this._l4ProcessError;
    }
    if (this._malformOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformOption = this._malformOption;
    }
    if (this._malformRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformRequest = this._malformRequest;
    }
    if (this._noResources !== undefined) {
      hasAnyValues = true;
      internalValueResult.noResources = this._noResources;
    }
    if (this._norouteDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.norouteDrop = this._norouteDrop;
    }
    if (this._notAuthorized !== undefined) {
      hasAnyValues = true;
      internalValueResult.notAuthorized = this._notAuthorized;
    }
    if (this._pktNotFromNatInside !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktNotFromNatInside = this._pktNotFromNatInside;
    }
    if (this._pktNotRequestDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktNotRequestDrop = this._pktNotRequestDrop;
    }
    if (this._pktTooShortDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktTooShortDrop = this._pktTooShortDrop;
    }
    if (this._thresholdExceededBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdExceededBy = this._thresholdExceededBy;
    }
    if (this._unsolAnceSentFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsolAnceSentFail = this._unsolAnceSentFail;
    }
    if (this._unsuppOpcode !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsuppOpcode = this._unsuppOpcode;
    }
    if (this._unsuppOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsuppOption = this._unsuppOption;
    }
    if (this._unsuppProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsuppProtocol = this._unsuppProtocol;
    }
    if (this._unsupportedVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsupportedVersion = this._unsupportedVersion;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpTriggerStatsRateA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addressMismatch = undefined;
      this._cannotProvideSuggest = undefined;
      this._duration = undefined;
      this._excessiveRemotePeers = undefined;
      this._internalErrorDrop = undefined;
      this._l4ProcessError = undefined;
      this._malformOption = undefined;
      this._malformRequest = undefined;
      this._noResources = undefined;
      this._norouteDrop = undefined;
      this._notAuthorized = undefined;
      this._pktNotFromNatInside = undefined;
      this._pktNotRequestDrop = undefined;
      this._pktTooShortDrop = undefined;
      this._thresholdExceededBy = undefined;
      this._unsolAnceSentFail = undefined;
      this._unsuppOpcode = undefined;
      this._unsuppOption = undefined;
      this._unsuppProtocol = undefined;
      this._unsupportedVersion = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addressMismatch = value.addressMismatch;
      this._cannotProvideSuggest = value.cannotProvideSuggest;
      this._duration = value.duration;
      this._excessiveRemotePeers = value.excessiveRemotePeers;
      this._internalErrorDrop = value.internalErrorDrop;
      this._l4ProcessError = value.l4ProcessError;
      this._malformOption = value.malformOption;
      this._malformRequest = value.malformRequest;
      this._noResources = value.noResources;
      this._norouteDrop = value.norouteDrop;
      this._notAuthorized = value.notAuthorized;
      this._pktNotFromNatInside = value.pktNotFromNatInside;
      this._pktNotRequestDrop = value.pktNotRequestDrop;
      this._pktTooShortDrop = value.pktTooShortDrop;
      this._thresholdExceededBy = value.thresholdExceededBy;
      this._unsolAnceSentFail = value.unsolAnceSentFail;
      this._unsuppOpcode = value.unsuppOpcode;
      this._unsuppOption = value.unsuppOption;
      this._unsuppProtocol = value.unsuppProtocol;
      this._unsupportedVersion = value.unsupportedVersion;
      this._uuid = value.uuid;
    }
  }

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
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_pcp thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_pcp}
*/
export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_pcp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_pcp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_pcp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_pcp thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_pcp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_pcp',
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
  private _triggerStatsInc = new VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpTriggerStatsIncAOutputReference(this, "trigger_stats_inc");
  public get triggerStatsInc() {
    return this._triggerStatsInc;
  }
  public putTriggerStatsInc(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpTriggerStatsIncA) {
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
  private _triggerStatsRate = new VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpTriggerStatsRateAOutputReference(this, "trigger_stats_rate");
  public get triggerStatsRate() {
    return this._triggerStatsRate;
  }
  public putTriggerStatsRate(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpTriggerStatsRateA) {
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
      trigger_stats_inc: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpTriggerStatsIncAToTerraform(this._triggerStatsInc.internalValue),
      trigger_stats_rate: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpTriggerStatsRateAToTerraform(this._triggerStatsRate.internalValue),
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
        value: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpTriggerStatsIncAToHclTerraform(this._triggerStatsInc.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpTriggerStatsIncAList",
      },
      trigger_stats_rate: {
        value: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpTriggerStatsRateAToHclTerraform(this._triggerStatsRate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6PcpTriggerStatsRateAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
