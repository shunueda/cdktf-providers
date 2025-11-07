// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_ocsp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_ocsp#id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_ocsp#name VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspA#name}
  */
  readonly name: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_ocsp#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspA#uuid}
  */
  readonly uuid?: string;
  /**
  * trigger_stats_inc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_ocsp#trigger_stats_inc VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspA#trigger_stats_inc}
  */
  readonly triggerStatsInc?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspTriggerStatsIncA;
  /**
  * trigger_stats_rate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_ocsp#trigger_stats_rate VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspA#trigger_stats_rate}
  */
  readonly triggerStatsRate?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspTriggerStatsRateA;
}
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspTriggerStatsIncA {
  /**
  * Enable automatic packet-capture for Total OCSP Job Start Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_ocsp#job_start_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspA#job_start_error}
  */
  readonly jobStartError?: number;
  /**
  * Enable automatic packet-capture for Total OCSP Polling Control Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_ocsp#polling_control_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspA#polling_control_error}
  */
  readonly pollingControlError?: number;
  /**
  * Enable automatic packet-capture for Total OCSP Dropped Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_ocsp#request_dropped VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspA#request_dropped}
  */
  readonly requestDropped?: number;
  /**
  * Enable automatic packet-capture for Total OCSP Error Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_ocsp#response_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspA#response_error}
  */
  readonly responseError?: number;
  /**
  * Enable automatic packet-capture for Total OCSP Failure Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_ocsp#response_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspA#response_failure}
  */
  readonly responseFailure?: number;
  /**
  * Enable automatic packet-capture for Total OCSP Timeout Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_ocsp#response_timeout VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspA#response_timeout}
  */
  readonly responseTimeout?: number;
  /**
  * Enable automatic packet-capture for Total OCSP Stapling Dropped Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_ocsp#stapling_request_dropped VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspA#stapling_request_dropped}
  */
  readonly staplingRequestDropped?: number;
  /**
  * Enable automatic packet-capture for Total OCSP Stapling Error Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_ocsp#stapling_response_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspA#stapling_response_error}
  */
  readonly staplingResponseError?: number;
  /**
  * Enable automatic packet-capture for Total OCSP Stapling Failure Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_ocsp#stapling_response_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspA#stapling_response_failure}
  */
  readonly staplingResponseFailure?: number;
  /**
  * Enable automatic packet-capture for Total OCSP Stapling Timeout Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_ocsp#stapling_response_timeout VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspA#stapling_response_timeout}
  */
  readonly staplingResponseTimeout?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_ocsp#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspA#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspTriggerStatsIncAToTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspTriggerStatsIncAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspTriggerStatsIncA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    job_start_error: cdktf.numberToTerraform(struct!.jobStartError),
    polling_control_error: cdktf.numberToTerraform(struct!.pollingControlError),
    request_dropped: cdktf.numberToTerraform(struct!.requestDropped),
    response_error: cdktf.numberToTerraform(struct!.responseError),
    response_failure: cdktf.numberToTerraform(struct!.responseFailure),
    response_timeout: cdktf.numberToTerraform(struct!.responseTimeout),
    stapling_request_dropped: cdktf.numberToTerraform(struct!.staplingRequestDropped),
    stapling_response_error: cdktf.numberToTerraform(struct!.staplingResponseError),
    stapling_response_failure: cdktf.numberToTerraform(struct!.staplingResponseFailure),
    stapling_response_timeout: cdktf.numberToTerraform(struct!.staplingResponseTimeout),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspTriggerStatsIncAToHclTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspTriggerStatsIncAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspTriggerStatsIncA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    job_start_error: {
      value: cdktf.numberToHclTerraform(struct!.jobStartError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    polling_control_error: {
      value: cdktf.numberToHclTerraform(struct!.pollingControlError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_dropped: {
      value: cdktf.numberToHclTerraform(struct!.requestDropped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_error: {
      value: cdktf.numberToHclTerraform(struct!.responseError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_failure: {
      value: cdktf.numberToHclTerraform(struct!.responseFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_timeout: {
      value: cdktf.numberToHclTerraform(struct!.responseTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stapling_request_dropped: {
      value: cdktf.numberToHclTerraform(struct!.staplingRequestDropped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stapling_response_error: {
      value: cdktf.numberToHclTerraform(struct!.staplingResponseError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stapling_response_failure: {
      value: cdktf.numberToHclTerraform(struct!.staplingResponseFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stapling_response_timeout: {
      value: cdktf.numberToHclTerraform(struct!.staplingResponseTimeout),
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

export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspTriggerStatsIncAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspTriggerStatsIncA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jobStartError !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobStartError = this._jobStartError;
    }
    if (this._pollingControlError !== undefined) {
      hasAnyValues = true;
      internalValueResult.pollingControlError = this._pollingControlError;
    }
    if (this._requestDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestDropped = this._requestDropped;
    }
    if (this._responseError !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseError = this._responseError;
    }
    if (this._responseFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseFailure = this._responseFailure;
    }
    if (this._responseTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseTimeout = this._responseTimeout;
    }
    if (this._staplingRequestDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.staplingRequestDropped = this._staplingRequestDropped;
    }
    if (this._staplingResponseError !== undefined) {
      hasAnyValues = true;
      internalValueResult.staplingResponseError = this._staplingResponseError;
    }
    if (this._staplingResponseFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.staplingResponseFailure = this._staplingResponseFailure;
    }
    if (this._staplingResponseTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.staplingResponseTimeout = this._staplingResponseTimeout;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspTriggerStatsIncA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jobStartError = undefined;
      this._pollingControlError = undefined;
      this._requestDropped = undefined;
      this._responseError = undefined;
      this._responseFailure = undefined;
      this._responseTimeout = undefined;
      this._staplingRequestDropped = undefined;
      this._staplingResponseError = undefined;
      this._staplingResponseFailure = undefined;
      this._staplingResponseTimeout = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jobStartError = value.jobStartError;
      this._pollingControlError = value.pollingControlError;
      this._requestDropped = value.requestDropped;
      this._responseError = value.responseError;
      this._responseFailure = value.responseFailure;
      this._responseTimeout = value.responseTimeout;
      this._staplingRequestDropped = value.staplingRequestDropped;
      this._staplingResponseError = value.staplingResponseError;
      this._staplingResponseFailure = value.staplingResponseFailure;
      this._staplingResponseTimeout = value.staplingResponseTimeout;
      this._uuid = value.uuid;
    }
  }

  // job_start_error - computed: false, optional: true, required: false
  private _jobStartError?: number; 
  public get jobStartError() {
    return this.getNumberAttribute('job_start_error');
  }
  public set jobStartError(value: number) {
    this._jobStartError = value;
  }
  public resetJobStartError() {
    this._jobStartError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobStartErrorInput() {
    return this._jobStartError;
  }

  // polling_control_error - computed: false, optional: true, required: false
  private _pollingControlError?: number; 
  public get pollingControlError() {
    return this.getNumberAttribute('polling_control_error');
  }
  public set pollingControlError(value: number) {
    this._pollingControlError = value;
  }
  public resetPollingControlError() {
    this._pollingControlError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollingControlErrorInput() {
    return this._pollingControlError;
  }

  // request_dropped - computed: false, optional: true, required: false
  private _requestDropped?: number; 
  public get requestDropped() {
    return this.getNumberAttribute('request_dropped');
  }
  public set requestDropped(value: number) {
    this._requestDropped = value;
  }
  public resetRequestDropped() {
    this._requestDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestDroppedInput() {
    return this._requestDropped;
  }

  // response_error - computed: false, optional: true, required: false
  private _responseError?: number; 
  public get responseError() {
    return this.getNumberAttribute('response_error');
  }
  public set responseError(value: number) {
    this._responseError = value;
  }
  public resetResponseError() {
    this._responseError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseErrorInput() {
    return this._responseError;
  }

  // response_failure - computed: false, optional: true, required: false
  private _responseFailure?: number; 
  public get responseFailure() {
    return this.getNumberAttribute('response_failure');
  }
  public set responseFailure(value: number) {
    this._responseFailure = value;
  }
  public resetResponseFailure() {
    this._responseFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseFailureInput() {
    return this._responseFailure;
  }

  // response_timeout - computed: false, optional: true, required: false
  private _responseTimeout?: number; 
  public get responseTimeout() {
    return this.getNumberAttribute('response_timeout');
  }
  public set responseTimeout(value: number) {
    this._responseTimeout = value;
  }
  public resetResponseTimeout() {
    this._responseTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTimeoutInput() {
    return this._responseTimeout;
  }

  // stapling_request_dropped - computed: false, optional: true, required: false
  private _staplingRequestDropped?: number; 
  public get staplingRequestDropped() {
    return this.getNumberAttribute('stapling_request_dropped');
  }
  public set staplingRequestDropped(value: number) {
    this._staplingRequestDropped = value;
  }
  public resetStaplingRequestDropped() {
    this._staplingRequestDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staplingRequestDroppedInput() {
    return this._staplingRequestDropped;
  }

  // stapling_response_error - computed: false, optional: true, required: false
  private _staplingResponseError?: number; 
  public get staplingResponseError() {
    return this.getNumberAttribute('stapling_response_error');
  }
  public set staplingResponseError(value: number) {
    this._staplingResponseError = value;
  }
  public resetStaplingResponseError() {
    this._staplingResponseError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staplingResponseErrorInput() {
    return this._staplingResponseError;
  }

  // stapling_response_failure - computed: false, optional: true, required: false
  private _staplingResponseFailure?: number; 
  public get staplingResponseFailure() {
    return this.getNumberAttribute('stapling_response_failure');
  }
  public set staplingResponseFailure(value: number) {
    this._staplingResponseFailure = value;
  }
  public resetStaplingResponseFailure() {
    this._staplingResponseFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staplingResponseFailureInput() {
    return this._staplingResponseFailure;
  }

  // stapling_response_timeout - computed: false, optional: true, required: false
  private _staplingResponseTimeout?: number; 
  public get staplingResponseTimeout() {
    return this.getNumberAttribute('stapling_response_timeout');
  }
  public set staplingResponseTimeout(value: number) {
    this._staplingResponseTimeout = value;
  }
  public resetStaplingResponseTimeout() {
    this._staplingResponseTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staplingResponseTimeoutInput() {
    return this._staplingResponseTimeout;
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
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspTriggerStatsRateA {
  /**
  * Time in seconds to look for the anomaly, default is 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_ocsp#duration VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspA#duration}
  */
  readonly duration?: number;
  /**
  * Enable automatic packet-capture for Total OCSP Job Start Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_ocsp#job_start_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspA#job_start_error}
  */
  readonly jobStartError?: number;
  /**
  * Enable automatic packet-capture for Total OCSP Polling Control Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_ocsp#polling_control_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspA#polling_control_error}
  */
  readonly pollingControlError?: number;
  /**
  * Enable automatic packet-capture for Total OCSP Dropped Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_ocsp#request_dropped VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspA#request_dropped}
  */
  readonly requestDropped?: number;
  /**
  * Enable automatic packet-capture for Total OCSP Error Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_ocsp#response_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspA#response_error}
  */
  readonly responseError?: number;
  /**
  * Enable automatic packet-capture for Total OCSP Failure Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_ocsp#response_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspA#response_failure}
  */
  readonly responseFailure?: number;
  /**
  * Enable automatic packet-capture for Total OCSP Timeout Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_ocsp#response_timeout VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspA#response_timeout}
  */
  readonly responseTimeout?: number;
  /**
  * Enable automatic packet-capture for Total OCSP Stapling Dropped Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_ocsp#stapling_request_dropped VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspA#stapling_request_dropped}
  */
  readonly staplingRequestDropped?: number;
  /**
  * Enable automatic packet-capture for Total OCSP Stapling Error Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_ocsp#stapling_response_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspA#stapling_response_error}
  */
  readonly staplingResponseError?: number;
  /**
  * Enable automatic packet-capture for Total OCSP Stapling Failure Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_ocsp#stapling_response_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspA#stapling_response_failure}
  */
  readonly staplingResponseFailure?: number;
  /**
  * Enable automatic packet-capture for Total OCSP Stapling Timeout Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_ocsp#stapling_response_timeout VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspA#stapling_response_timeout}
  */
  readonly staplingResponseTimeout?: number;
  /**
  * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_ocsp#threshold_exceeded_by VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspA#threshold_exceeded_by}
  */
  readonly thresholdExceededBy?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_ocsp#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspA#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspTriggerStatsRateAToTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspTriggerStatsRateAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspTriggerStatsRateA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    job_start_error: cdktf.numberToTerraform(struct!.jobStartError),
    polling_control_error: cdktf.numberToTerraform(struct!.pollingControlError),
    request_dropped: cdktf.numberToTerraform(struct!.requestDropped),
    response_error: cdktf.numberToTerraform(struct!.responseError),
    response_failure: cdktf.numberToTerraform(struct!.responseFailure),
    response_timeout: cdktf.numberToTerraform(struct!.responseTimeout),
    stapling_request_dropped: cdktf.numberToTerraform(struct!.staplingRequestDropped),
    stapling_response_error: cdktf.numberToTerraform(struct!.staplingResponseError),
    stapling_response_failure: cdktf.numberToTerraform(struct!.staplingResponseFailure),
    stapling_response_timeout: cdktf.numberToTerraform(struct!.staplingResponseTimeout),
    threshold_exceeded_by: cdktf.numberToTerraform(struct!.thresholdExceededBy),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspTriggerStatsRateAToHclTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspTriggerStatsRateAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspTriggerStatsRateA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    job_start_error: {
      value: cdktf.numberToHclTerraform(struct!.jobStartError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    polling_control_error: {
      value: cdktf.numberToHclTerraform(struct!.pollingControlError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_dropped: {
      value: cdktf.numberToHclTerraform(struct!.requestDropped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_error: {
      value: cdktf.numberToHclTerraform(struct!.responseError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_failure: {
      value: cdktf.numberToHclTerraform(struct!.responseFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_timeout: {
      value: cdktf.numberToHclTerraform(struct!.responseTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stapling_request_dropped: {
      value: cdktf.numberToHclTerraform(struct!.staplingRequestDropped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stapling_response_error: {
      value: cdktf.numberToHclTerraform(struct!.staplingResponseError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stapling_response_failure: {
      value: cdktf.numberToHclTerraform(struct!.staplingResponseFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stapling_response_timeout: {
      value: cdktf.numberToHclTerraform(struct!.staplingResponseTimeout),
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

export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspTriggerStatsRateAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspTriggerStatsRateA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._jobStartError !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobStartError = this._jobStartError;
    }
    if (this._pollingControlError !== undefined) {
      hasAnyValues = true;
      internalValueResult.pollingControlError = this._pollingControlError;
    }
    if (this._requestDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestDropped = this._requestDropped;
    }
    if (this._responseError !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseError = this._responseError;
    }
    if (this._responseFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseFailure = this._responseFailure;
    }
    if (this._responseTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseTimeout = this._responseTimeout;
    }
    if (this._staplingRequestDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.staplingRequestDropped = this._staplingRequestDropped;
    }
    if (this._staplingResponseError !== undefined) {
      hasAnyValues = true;
      internalValueResult.staplingResponseError = this._staplingResponseError;
    }
    if (this._staplingResponseFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.staplingResponseFailure = this._staplingResponseFailure;
    }
    if (this._staplingResponseTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.staplingResponseTimeout = this._staplingResponseTimeout;
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

  public set internalValue(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspTriggerStatsRateA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._jobStartError = undefined;
      this._pollingControlError = undefined;
      this._requestDropped = undefined;
      this._responseError = undefined;
      this._responseFailure = undefined;
      this._responseTimeout = undefined;
      this._staplingRequestDropped = undefined;
      this._staplingResponseError = undefined;
      this._staplingResponseFailure = undefined;
      this._staplingResponseTimeout = undefined;
      this._thresholdExceededBy = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._jobStartError = value.jobStartError;
      this._pollingControlError = value.pollingControlError;
      this._requestDropped = value.requestDropped;
      this._responseError = value.responseError;
      this._responseFailure = value.responseFailure;
      this._responseTimeout = value.responseTimeout;
      this._staplingRequestDropped = value.staplingRequestDropped;
      this._staplingResponseError = value.staplingResponseError;
      this._staplingResponseFailure = value.staplingResponseFailure;
      this._staplingResponseTimeout = value.staplingResponseTimeout;
      this._thresholdExceededBy = value.thresholdExceededBy;
      this._uuid = value.uuid;
    }
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

  // job_start_error - computed: false, optional: true, required: false
  private _jobStartError?: number; 
  public get jobStartError() {
    return this.getNumberAttribute('job_start_error');
  }
  public set jobStartError(value: number) {
    this._jobStartError = value;
  }
  public resetJobStartError() {
    this._jobStartError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobStartErrorInput() {
    return this._jobStartError;
  }

  // polling_control_error - computed: false, optional: true, required: false
  private _pollingControlError?: number; 
  public get pollingControlError() {
    return this.getNumberAttribute('polling_control_error');
  }
  public set pollingControlError(value: number) {
    this._pollingControlError = value;
  }
  public resetPollingControlError() {
    this._pollingControlError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollingControlErrorInput() {
    return this._pollingControlError;
  }

  // request_dropped - computed: false, optional: true, required: false
  private _requestDropped?: number; 
  public get requestDropped() {
    return this.getNumberAttribute('request_dropped');
  }
  public set requestDropped(value: number) {
    this._requestDropped = value;
  }
  public resetRequestDropped() {
    this._requestDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestDroppedInput() {
    return this._requestDropped;
  }

  // response_error - computed: false, optional: true, required: false
  private _responseError?: number; 
  public get responseError() {
    return this.getNumberAttribute('response_error');
  }
  public set responseError(value: number) {
    this._responseError = value;
  }
  public resetResponseError() {
    this._responseError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseErrorInput() {
    return this._responseError;
  }

  // response_failure - computed: false, optional: true, required: false
  private _responseFailure?: number; 
  public get responseFailure() {
    return this.getNumberAttribute('response_failure');
  }
  public set responseFailure(value: number) {
    this._responseFailure = value;
  }
  public resetResponseFailure() {
    this._responseFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseFailureInput() {
    return this._responseFailure;
  }

  // response_timeout - computed: false, optional: true, required: false
  private _responseTimeout?: number; 
  public get responseTimeout() {
    return this.getNumberAttribute('response_timeout');
  }
  public set responseTimeout(value: number) {
    this._responseTimeout = value;
  }
  public resetResponseTimeout() {
    this._responseTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTimeoutInput() {
    return this._responseTimeout;
  }

  // stapling_request_dropped - computed: false, optional: true, required: false
  private _staplingRequestDropped?: number; 
  public get staplingRequestDropped() {
    return this.getNumberAttribute('stapling_request_dropped');
  }
  public set staplingRequestDropped(value: number) {
    this._staplingRequestDropped = value;
  }
  public resetStaplingRequestDropped() {
    this._staplingRequestDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staplingRequestDroppedInput() {
    return this._staplingRequestDropped;
  }

  // stapling_response_error - computed: false, optional: true, required: false
  private _staplingResponseError?: number; 
  public get staplingResponseError() {
    return this.getNumberAttribute('stapling_response_error');
  }
  public set staplingResponseError(value: number) {
    this._staplingResponseError = value;
  }
  public resetStaplingResponseError() {
    this._staplingResponseError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staplingResponseErrorInput() {
    return this._staplingResponseError;
  }

  // stapling_response_failure - computed: false, optional: true, required: false
  private _staplingResponseFailure?: number; 
  public get staplingResponseFailure() {
    return this.getNumberAttribute('stapling_response_failure');
  }
  public set staplingResponseFailure(value: number) {
    this._staplingResponseFailure = value;
  }
  public resetStaplingResponseFailure() {
    this._staplingResponseFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staplingResponseFailureInput() {
    return this._staplingResponseFailure;
  }

  // stapling_response_timeout - computed: false, optional: true, required: false
  private _staplingResponseTimeout?: number; 
  public get staplingResponseTimeout() {
    return this.getNumberAttribute('stapling_response_timeout');
  }
  public set staplingResponseTimeout(value: number) {
    this._staplingResponseTimeout = value;
  }
  public resetStaplingResponseTimeout() {
    this._staplingResponseTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staplingResponseTimeoutInput() {
    return this._staplingResponseTimeout;
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_ocsp thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_ocsp}
*/
export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_ocsp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_ocsp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_ocsp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_ocsp thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_ocsp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_ocsp',
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
  private _triggerStatsInc = new VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspTriggerStatsIncAOutputReference(this, "trigger_stats_inc");
  public get triggerStatsInc() {
    return this._triggerStatsInc;
  }
  public putTriggerStatsInc(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspTriggerStatsIncA) {
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
  private _triggerStatsRate = new VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspTriggerStatsRateAOutputReference(this, "trigger_stats_rate");
  public get triggerStatsRate() {
    return this._triggerStatsRate;
  }
  public putTriggerStatsRate(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspTriggerStatsRateA) {
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
      trigger_stats_inc: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspTriggerStatsIncAToTerraform(this._triggerStatsInc.internalValue),
      trigger_stats_rate: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspTriggerStatsRateAToTerraform(this._triggerStatsRate.internalValue),
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
        value: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspTriggerStatsIncAToHclTerraform(this._triggerStatsInc.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspTriggerStatsIncAList",
      },
      trigger_stats_rate: {
        value: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspTriggerStatsRateAToHclTerraform(this._triggerStatsRate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspTriggerStatsRateAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
