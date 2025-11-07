// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_authentication_global
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_authentication_global#id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_authentication_global#name VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalA#name}
  */
  readonly name: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_authentication_global#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalA#uuid}
  */
  readonly uuid?: string;
  /**
  * trigger_stats_inc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_authentication_global#trigger_stats_inc VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalA#trigger_stats_inc}
  */
  readonly triggerStatsInc?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalTriggerStatsIncA;
  /**
  * trigger_stats_rate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_authentication_global#trigger_stats_rate VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalA#trigger_stats_rate}
  */
  readonly triggerStatsRate?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalTriggerStatsRateA;
}
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalTriggerStatsIncA {
  /**
  * Enable automatic packet-capture for Total Authorization failure number in aFleX
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_authentication_global#aflex_authz_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalA#aflex_authz_fail}
  */
  readonly aflexAuthzFail?: number;
  /**
  * Enable automatic packet-capture for Total Authentication failure number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_authentication_global#authn_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalA#authn_failure}
  */
  readonly authnFailure?: number;
  /**
  * Enable automatic packet-capture for Total Authorization failure number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_authentication_global#authz_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalA#authz_failure}
  */
  readonly authzFailure?: number;
  /**
  * Enable automatic packet-capture for Total AAM Connect Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_authentication_global#connect_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalA#connect_failed}
  */
  readonly connectFailed?: number;
  /**
  * Enable automatic packet-capture for Total AAM Timer Creation Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_authentication_global#create_timer_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalA#create_timer_failed}
  */
  readonly createTimerFailed?: number;
  /**
  * Enable automatic packet-capture for Total AAM DNS resolve failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_authentication_global#dns_resolve_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalA#dns_resolve_failed}
  */
  readonly dnsResolveFailed?: number;
  /**
  * Enable automatic packet-capture for Total AAM Get Socket Option Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_authentication_global#get_socket_option_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalA#get_socket_option_failed}
  */
  readonly fetchSocketOptionFailed?: number;
  /**
  * Enable automatic packet-capture for Total Authentication Request Missed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_authentication_global#misses VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalA#misses}
  */
  readonly misses?: number;
  /**
  * Enable automatic packet-capture for Total AAM Open Socket Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_authentication_global#open_socket_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalA#open_socket_failed}
  */
  readonly openSocketFailed?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_authentication_global#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalA#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalTriggerStatsIncAToTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalTriggerStatsIncAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalTriggerStatsIncA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aflex_authz_fail: cdktf.numberToTerraform(struct!.aflexAuthzFail),
    authn_failure: cdktf.numberToTerraform(struct!.authnFailure),
    authz_failure: cdktf.numberToTerraform(struct!.authzFailure),
    connect_failed: cdktf.numberToTerraform(struct!.connectFailed),
    create_timer_failed: cdktf.numberToTerraform(struct!.createTimerFailed),
    dns_resolve_failed: cdktf.numberToTerraform(struct!.dnsResolveFailed),
    get_socket_option_failed: cdktf.numberToTerraform(struct!.fetchSocketOptionFailed),
    misses: cdktf.numberToTerraform(struct!.misses),
    open_socket_failed: cdktf.numberToTerraform(struct!.openSocketFailed),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalTriggerStatsIncAToHclTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalTriggerStatsIncAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalTriggerStatsIncA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aflex_authz_fail: {
      value: cdktf.numberToHclTerraform(struct!.aflexAuthzFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    authn_failure: {
      value: cdktf.numberToHclTerraform(struct!.authnFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    authz_failure: {
      value: cdktf.numberToHclTerraform(struct!.authzFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    connect_failed: {
      value: cdktf.numberToHclTerraform(struct!.connectFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    create_timer_failed: {
      value: cdktf.numberToHclTerraform(struct!.createTimerFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_resolve_failed: {
      value: cdktf.numberToHclTerraform(struct!.dnsResolveFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    get_socket_option_failed: {
      value: cdktf.numberToHclTerraform(struct!.fetchSocketOptionFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    misses: {
      value: cdktf.numberToHclTerraform(struct!.misses),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    open_socket_failed: {
      value: cdktf.numberToHclTerraform(struct!.openSocketFailed),
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

export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalTriggerStatsIncAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalTriggerStatsIncA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aflexAuthzFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.aflexAuthzFail = this._aflexAuthzFail;
    }
    if (this._authnFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.authnFailure = this._authnFailure;
    }
    if (this._authzFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.authzFailure = this._authzFailure;
    }
    if (this._connectFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectFailed = this._connectFailed;
    }
    if (this._createTimerFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.createTimerFailed = this._createTimerFailed;
    }
    if (this._dnsResolveFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsResolveFailed = this._dnsResolveFailed;
    }
    if (this._getSocketOptionFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.fetchSocketOptionFailed = this._getSocketOptionFailed;
    }
    if (this._misses !== undefined) {
      hasAnyValues = true;
      internalValueResult.misses = this._misses;
    }
    if (this._openSocketFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.openSocketFailed = this._openSocketFailed;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalTriggerStatsIncA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aflexAuthzFail = undefined;
      this._authnFailure = undefined;
      this._authzFailure = undefined;
      this._connectFailed = undefined;
      this._createTimerFailed = undefined;
      this._dnsResolveFailed = undefined;
      this._getSocketOptionFailed = undefined;
      this._misses = undefined;
      this._openSocketFailed = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aflexAuthzFail = value.aflexAuthzFail;
      this._authnFailure = value.authnFailure;
      this._authzFailure = value.authzFailure;
      this._connectFailed = value.connectFailed;
      this._createTimerFailed = value.createTimerFailed;
      this._dnsResolveFailed = value.dnsResolveFailed;
      this._getSocketOptionFailed = value.fetchSocketOptionFailed;
      this._misses = value.misses;
      this._openSocketFailed = value.openSocketFailed;
      this._uuid = value.uuid;
    }
  }

  // aflex_authz_fail - computed: false, optional: true, required: false
  private _aflexAuthzFail?: number; 
  public get aflexAuthzFail() {
    return this.getNumberAttribute('aflex_authz_fail');
  }
  public set aflexAuthzFail(value: number) {
    this._aflexAuthzFail = value;
  }
  public resetAflexAuthzFail() {
    this._aflexAuthzFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aflexAuthzFailInput() {
    return this._aflexAuthzFail;
  }

  // authn_failure - computed: false, optional: true, required: false
  private _authnFailure?: number; 
  public get authnFailure() {
    return this.getNumberAttribute('authn_failure');
  }
  public set authnFailure(value: number) {
    this._authnFailure = value;
  }
  public resetAuthnFailure() {
    this._authnFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authnFailureInput() {
    return this._authnFailure;
  }

  // authz_failure - computed: false, optional: true, required: false
  private _authzFailure?: number; 
  public get authzFailure() {
    return this.getNumberAttribute('authz_failure');
  }
  public set authzFailure(value: number) {
    this._authzFailure = value;
  }
  public resetAuthzFailure() {
    this._authzFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authzFailureInput() {
    return this._authzFailure;
  }

  // connect_failed - computed: false, optional: true, required: false
  private _connectFailed?: number; 
  public get connectFailed() {
    return this.getNumberAttribute('connect_failed');
  }
  public set connectFailed(value: number) {
    this._connectFailed = value;
  }
  public resetConnectFailed() {
    this._connectFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectFailedInput() {
    return this._connectFailed;
  }

  // create_timer_failed - computed: false, optional: true, required: false
  private _createTimerFailed?: number; 
  public get createTimerFailed() {
    return this.getNumberAttribute('create_timer_failed');
  }
  public set createTimerFailed(value: number) {
    this._createTimerFailed = value;
  }
  public resetCreateTimerFailed() {
    this._createTimerFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createTimerFailedInput() {
    return this._createTimerFailed;
  }

  // dns_resolve_failed - computed: false, optional: true, required: false
  private _dnsResolveFailed?: number; 
  public get dnsResolveFailed() {
    return this.getNumberAttribute('dns_resolve_failed');
  }
  public set dnsResolveFailed(value: number) {
    this._dnsResolveFailed = value;
  }
  public resetDnsResolveFailed() {
    this._dnsResolveFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsResolveFailedInput() {
    return this._dnsResolveFailed;
  }

  // get_socket_option_failed - computed: false, optional: true, required: false
  private _getSocketOptionFailed?: number; 
  public get fetchSocketOptionFailed() {
    return this.getNumberAttribute('get_socket_option_failed');
  }
  public set fetchSocketOptionFailed(value: number) {
    this._getSocketOptionFailed = value;
  }
  public resetFetchSocketOptionFailed() {
    this._getSocketOptionFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchSocketOptionFailedInput() {
    return this._getSocketOptionFailed;
  }

  // misses - computed: false, optional: true, required: false
  private _misses?: number; 
  public get misses() {
    return this.getNumberAttribute('misses');
  }
  public set misses(value: number) {
    this._misses = value;
  }
  public resetMisses() {
    this._misses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get missesInput() {
    return this._misses;
  }

  // open_socket_failed - computed: false, optional: true, required: false
  private _openSocketFailed?: number; 
  public get openSocketFailed() {
    return this.getNumberAttribute('open_socket_failed');
  }
  public set openSocketFailed(value: number) {
    this._openSocketFailed = value;
  }
  public resetOpenSocketFailed() {
    this._openSocketFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openSocketFailedInput() {
    return this._openSocketFailed;
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
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalTriggerStatsRateA {
  /**
  * Enable automatic packet-capture for Total Authorization failure number in aFleX
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_authentication_global#aflex_authz_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalA#aflex_authz_fail}
  */
  readonly aflexAuthzFail?: number;
  /**
  * Enable automatic packet-capture for Total Authentication failure number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_authentication_global#authn_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalA#authn_failure}
  */
  readonly authnFailure?: number;
  /**
  * Enable automatic packet-capture for Total Authorization failure number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_authentication_global#authz_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalA#authz_failure}
  */
  readonly authzFailure?: number;
  /**
  * Enable automatic packet-capture for Total AAM Connect Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_authentication_global#connect_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalA#connect_failed}
  */
  readonly connectFailed?: number;
  /**
  * Enable automatic packet-capture for Total AAM Timer Creation Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_authentication_global#create_timer_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalA#create_timer_failed}
  */
  readonly createTimerFailed?: number;
  /**
  * Enable automatic packet-capture for Total AAM DNS resolve failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_authentication_global#dns_resolve_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalA#dns_resolve_failed}
  */
  readonly dnsResolveFailed?: number;
  /**
  * Time in seconds to look for the anomaly, default is 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_authentication_global#duration VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalA#duration}
  */
  readonly duration?: number;
  /**
  * Enable automatic packet-capture for Total AAM Get Socket Option Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_authentication_global#get_socket_option_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalA#get_socket_option_failed}
  */
  readonly fetchSocketOptionFailed?: number;
  /**
  * Enable automatic packet-capture for Total Authentication Request Missed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_authentication_global#misses VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalA#misses}
  */
  readonly misses?: number;
  /**
  * Enable automatic packet-capture for Total AAM Open Socket Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_authentication_global#open_socket_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalA#open_socket_failed}
  */
  readonly openSocketFailed?: number;
  /**
  * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_authentication_global#threshold_exceeded_by VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalA#threshold_exceeded_by}
  */
  readonly thresholdExceededBy?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_authentication_global#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalA#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalTriggerStatsRateAToTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalTriggerStatsRateAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalTriggerStatsRateA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aflex_authz_fail: cdktf.numberToTerraform(struct!.aflexAuthzFail),
    authn_failure: cdktf.numberToTerraform(struct!.authnFailure),
    authz_failure: cdktf.numberToTerraform(struct!.authzFailure),
    connect_failed: cdktf.numberToTerraform(struct!.connectFailed),
    create_timer_failed: cdktf.numberToTerraform(struct!.createTimerFailed),
    dns_resolve_failed: cdktf.numberToTerraform(struct!.dnsResolveFailed),
    duration: cdktf.numberToTerraform(struct!.duration),
    get_socket_option_failed: cdktf.numberToTerraform(struct!.fetchSocketOptionFailed),
    misses: cdktf.numberToTerraform(struct!.misses),
    open_socket_failed: cdktf.numberToTerraform(struct!.openSocketFailed),
    threshold_exceeded_by: cdktf.numberToTerraform(struct!.thresholdExceededBy),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalTriggerStatsRateAToHclTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalTriggerStatsRateAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalTriggerStatsRateA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aflex_authz_fail: {
      value: cdktf.numberToHclTerraform(struct!.aflexAuthzFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    authn_failure: {
      value: cdktf.numberToHclTerraform(struct!.authnFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    authz_failure: {
      value: cdktf.numberToHclTerraform(struct!.authzFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    connect_failed: {
      value: cdktf.numberToHclTerraform(struct!.connectFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    create_timer_failed: {
      value: cdktf.numberToHclTerraform(struct!.createTimerFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_resolve_failed: {
      value: cdktf.numberToHclTerraform(struct!.dnsResolveFailed),
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
    get_socket_option_failed: {
      value: cdktf.numberToHclTerraform(struct!.fetchSocketOptionFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    misses: {
      value: cdktf.numberToHclTerraform(struct!.misses),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    open_socket_failed: {
      value: cdktf.numberToHclTerraform(struct!.openSocketFailed),
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

export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalTriggerStatsRateAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalTriggerStatsRateA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aflexAuthzFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.aflexAuthzFail = this._aflexAuthzFail;
    }
    if (this._authnFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.authnFailure = this._authnFailure;
    }
    if (this._authzFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.authzFailure = this._authzFailure;
    }
    if (this._connectFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectFailed = this._connectFailed;
    }
    if (this._createTimerFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.createTimerFailed = this._createTimerFailed;
    }
    if (this._dnsResolveFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsResolveFailed = this._dnsResolveFailed;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._getSocketOptionFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.fetchSocketOptionFailed = this._getSocketOptionFailed;
    }
    if (this._misses !== undefined) {
      hasAnyValues = true;
      internalValueResult.misses = this._misses;
    }
    if (this._openSocketFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.openSocketFailed = this._openSocketFailed;
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

  public set internalValue(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalTriggerStatsRateA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aflexAuthzFail = undefined;
      this._authnFailure = undefined;
      this._authzFailure = undefined;
      this._connectFailed = undefined;
      this._createTimerFailed = undefined;
      this._dnsResolveFailed = undefined;
      this._duration = undefined;
      this._getSocketOptionFailed = undefined;
      this._misses = undefined;
      this._openSocketFailed = undefined;
      this._thresholdExceededBy = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aflexAuthzFail = value.aflexAuthzFail;
      this._authnFailure = value.authnFailure;
      this._authzFailure = value.authzFailure;
      this._connectFailed = value.connectFailed;
      this._createTimerFailed = value.createTimerFailed;
      this._dnsResolveFailed = value.dnsResolveFailed;
      this._duration = value.duration;
      this._getSocketOptionFailed = value.fetchSocketOptionFailed;
      this._misses = value.misses;
      this._openSocketFailed = value.openSocketFailed;
      this._thresholdExceededBy = value.thresholdExceededBy;
      this._uuid = value.uuid;
    }
  }

  // aflex_authz_fail - computed: false, optional: true, required: false
  private _aflexAuthzFail?: number; 
  public get aflexAuthzFail() {
    return this.getNumberAttribute('aflex_authz_fail');
  }
  public set aflexAuthzFail(value: number) {
    this._aflexAuthzFail = value;
  }
  public resetAflexAuthzFail() {
    this._aflexAuthzFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aflexAuthzFailInput() {
    return this._aflexAuthzFail;
  }

  // authn_failure - computed: false, optional: true, required: false
  private _authnFailure?: number; 
  public get authnFailure() {
    return this.getNumberAttribute('authn_failure');
  }
  public set authnFailure(value: number) {
    this._authnFailure = value;
  }
  public resetAuthnFailure() {
    this._authnFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authnFailureInput() {
    return this._authnFailure;
  }

  // authz_failure - computed: false, optional: true, required: false
  private _authzFailure?: number; 
  public get authzFailure() {
    return this.getNumberAttribute('authz_failure');
  }
  public set authzFailure(value: number) {
    this._authzFailure = value;
  }
  public resetAuthzFailure() {
    this._authzFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authzFailureInput() {
    return this._authzFailure;
  }

  // connect_failed - computed: false, optional: true, required: false
  private _connectFailed?: number; 
  public get connectFailed() {
    return this.getNumberAttribute('connect_failed');
  }
  public set connectFailed(value: number) {
    this._connectFailed = value;
  }
  public resetConnectFailed() {
    this._connectFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectFailedInput() {
    return this._connectFailed;
  }

  // create_timer_failed - computed: false, optional: true, required: false
  private _createTimerFailed?: number; 
  public get createTimerFailed() {
    return this.getNumberAttribute('create_timer_failed');
  }
  public set createTimerFailed(value: number) {
    this._createTimerFailed = value;
  }
  public resetCreateTimerFailed() {
    this._createTimerFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createTimerFailedInput() {
    return this._createTimerFailed;
  }

  // dns_resolve_failed - computed: false, optional: true, required: false
  private _dnsResolveFailed?: number; 
  public get dnsResolveFailed() {
    return this.getNumberAttribute('dns_resolve_failed');
  }
  public set dnsResolveFailed(value: number) {
    this._dnsResolveFailed = value;
  }
  public resetDnsResolveFailed() {
    this._dnsResolveFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsResolveFailedInput() {
    return this._dnsResolveFailed;
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

  // get_socket_option_failed - computed: false, optional: true, required: false
  private _getSocketOptionFailed?: number; 
  public get fetchSocketOptionFailed() {
    return this.getNumberAttribute('get_socket_option_failed');
  }
  public set fetchSocketOptionFailed(value: number) {
    this._getSocketOptionFailed = value;
  }
  public resetFetchSocketOptionFailed() {
    this._getSocketOptionFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchSocketOptionFailedInput() {
    return this._getSocketOptionFailed;
  }

  // misses - computed: false, optional: true, required: false
  private _misses?: number; 
  public get misses() {
    return this.getNumberAttribute('misses');
  }
  public set misses(value: number) {
    this._misses = value;
  }
  public resetMisses() {
    this._misses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get missesInput() {
    return this._misses;
  }

  // open_socket_failed - computed: false, optional: true, required: false
  private _openSocketFailed?: number; 
  public get openSocketFailed() {
    return this.getNumberAttribute('open_socket_failed');
  }
  public set openSocketFailed(value: number) {
    this._openSocketFailed = value;
  }
  public resetOpenSocketFailed() {
    this._openSocketFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openSocketFailedInput() {
    return this._openSocketFailed;
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

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_authentication_global thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_authentication_global}
*/
export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_authentication_global";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_authentication_global#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_authentication_global", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_authentication_global thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_authentication_global} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_authentication_global',
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
  private _triggerStatsInc = new VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalTriggerStatsIncAOutputReference(this, "trigger_stats_inc");
  public get triggerStatsInc() {
    return this._triggerStatsInc;
  }
  public putTriggerStatsInc(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalTriggerStatsIncA) {
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
  private _triggerStatsRate = new VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalTriggerStatsRateAOutputReference(this, "trigger_stats_rate");
  public get triggerStatsRate() {
    return this._triggerStatsRate;
  }
  public putTriggerStatsRate(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalTriggerStatsRateA) {
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
      trigger_stats_inc: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalTriggerStatsIncAToTerraform(this._triggerStatsInc.internalValue),
      trigger_stats_rate: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalTriggerStatsRateAToTerraform(this._triggerStatsRate.internalValue),
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
        value: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalTriggerStatsIncAToHclTerraform(this._triggerStatsInc.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalTriggerStatsIncAList",
      },
      trigger_stats_rate: {
        value: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalTriggerStatsRateAToHclTerraform(this._triggerStatsRate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalTriggerStatsRateAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
