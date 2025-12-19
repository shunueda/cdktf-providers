// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_ocsp_inst_tmpl
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmplConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specify name of the capture-config to use with this template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_ocsp_inst_tmpl#capture_config VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmpl#capture_config}
  */
  readonly captureConfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_ocsp_inst_tmpl#id VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmpl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Packet Capture Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_ocsp_inst_tmpl#name VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmpl#name}
  */
  readonly name: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_ocsp_inst_tmpl#user_tag VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmpl#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_ocsp_inst_tmpl#uuid VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmpl#uuid}
  */
  readonly uuid?: string;
  /**
  * trigger_stats_inc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_ocsp_inst_tmpl#trigger_stats_inc VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmpl#trigger_stats_inc}
  */
  readonly triggerStatsInc?: VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmplTriggerStatsInc;
  /**
  * trigger_stats_rate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_ocsp_inst_tmpl#trigger_stats_rate VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmpl#trigger_stats_rate}
  */
  readonly triggerStatsRate?: VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmplTriggerStatsRate;
  /**
  * trigger_stats_severity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_ocsp_inst_tmpl#trigger_stats_severity VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmpl#trigger_stats_severity}
  */
  readonly triggerStatsSeverity?: VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmplTriggerStatsSeverity;
}
export interface VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmplTriggerStatsInc {
  /**
  * Enable automatic packet-capture for Handle OCSP response failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_ocsp_inst_tmpl#fail VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmpl#fail}
  */
  readonly fail?: number;
  /**
  * Enable automatic packet-capture for Handle OCSP response failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_ocsp_inst_tmpl#stapling_fail VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmpl#stapling_fail}
  */
  readonly staplingFail?: number;
  /**
  * Enable automatic packet-capture for OCSP Stapling Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_ocsp_inst_tmpl#stapling_timeout VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmpl#stapling_timeout}
  */
  readonly staplingTimeout?: number;
  /**
  * Enable automatic packet-capture for Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_ocsp_inst_tmpl#timeout VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmpl#timeout}
  */
  readonly timeout?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_ocsp_inst_tmpl#uuid VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmpl#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmplTriggerStatsIncToTerraform(struct?: VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmplTriggerStatsIncOutputReference | VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmplTriggerStatsInc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fail: cdktf.numberToTerraform(struct!.fail),
    stapling_fail: cdktf.numberToTerraform(struct!.staplingFail),
    stapling_timeout: cdktf.numberToTerraform(struct!.staplingTimeout),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmplTriggerStatsIncToHclTerraform(struct?: VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmplTriggerStatsIncOutputReference | VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmplTriggerStatsInc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fail: {
      value: cdktf.numberToHclTerraform(struct!.fail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stapling_fail: {
      value: cdktf.numberToHclTerraform(struct!.staplingFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stapling_timeout: {
      value: cdktf.numberToHclTerraform(struct!.staplingTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
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

export class VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmplTriggerStatsIncOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmplTriggerStatsInc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fail !== undefined) {
      hasAnyValues = true;
      internalValueResult.fail = this._fail;
    }
    if (this._staplingFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.staplingFail = this._staplingFail;
    }
    if (this._staplingTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.staplingTimeout = this._staplingTimeout;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmplTriggerStatsInc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fail = undefined;
      this._staplingFail = undefined;
      this._staplingTimeout = undefined;
      this._timeout = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fail = value.fail;
      this._staplingFail = value.staplingFail;
      this._staplingTimeout = value.staplingTimeout;
      this._timeout = value.timeout;
      this._uuid = value.uuid;
    }
  }

  // fail - computed: false, optional: true, required: false
  private _fail?: number; 
  public get fail() {
    return this.getNumberAttribute('fail');
  }
  public set fail(value: number) {
    this._fail = value;
  }
  public resetFail() {
    this._fail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failInput() {
    return this._fail;
  }

  // stapling_fail - computed: false, optional: true, required: false
  private _staplingFail?: number; 
  public get staplingFail() {
    return this.getNumberAttribute('stapling_fail');
  }
  public set staplingFail(value: number) {
    this._staplingFail = value;
  }
  public resetStaplingFail() {
    this._staplingFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staplingFailInput() {
    return this._staplingFail;
  }

  // stapling_timeout - computed: false, optional: true, required: false
  private _staplingTimeout?: number; 
  public get staplingTimeout() {
    return this.getNumberAttribute('stapling_timeout');
  }
  public set staplingTimeout(value: number) {
    this._staplingTimeout = value;
  }
  public resetStaplingTimeout() {
    this._staplingTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staplingTimeoutInput() {
    return this._staplingTimeout;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
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
export interface VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmplTriggerStatsRate {
  /**
  * Time in seconds to look for the anomaly, default is 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_ocsp_inst_tmpl#duration VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmpl#duration}
  */
  readonly duration?: number;
  /**
  * Enable automatic packet-capture for Handle OCSP response failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_ocsp_inst_tmpl#fail VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmpl#fail}
  */
  readonly fail?: number;
  /**
  * Enable automatic packet-capture for Handle OCSP response failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_ocsp_inst_tmpl#stapling_fail VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmpl#stapling_fail}
  */
  readonly staplingFail?: number;
  /**
  * Enable automatic packet-capture for OCSP Stapling Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_ocsp_inst_tmpl#stapling_timeout VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmpl#stapling_timeout}
  */
  readonly staplingTimeout?: number;
  /**
  * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_ocsp_inst_tmpl#threshold_exceeded_by VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmpl#threshold_exceeded_by}
  */
  readonly thresholdExceededBy?: number;
  /**
  * Enable automatic packet-capture for Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_ocsp_inst_tmpl#timeout VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmpl#timeout}
  */
  readonly timeout?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_ocsp_inst_tmpl#uuid VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmpl#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmplTriggerStatsRateToTerraform(struct?: VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmplTriggerStatsRateOutputReference | VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmplTriggerStatsRate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    fail: cdktf.numberToTerraform(struct!.fail),
    stapling_fail: cdktf.numberToTerraform(struct!.staplingFail),
    stapling_timeout: cdktf.numberToTerraform(struct!.staplingTimeout),
    threshold_exceeded_by: cdktf.numberToTerraform(struct!.thresholdExceededBy),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmplTriggerStatsRateToHclTerraform(struct?: VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmplTriggerStatsRateOutputReference | VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmplTriggerStatsRate): any {
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
    fail: {
      value: cdktf.numberToHclTerraform(struct!.fail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stapling_fail: {
      value: cdktf.numberToHclTerraform(struct!.staplingFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stapling_timeout: {
      value: cdktf.numberToHclTerraform(struct!.staplingTimeout),
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
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
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

export class VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmplTriggerStatsRateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmplTriggerStatsRate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._fail !== undefined) {
      hasAnyValues = true;
      internalValueResult.fail = this._fail;
    }
    if (this._staplingFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.staplingFail = this._staplingFail;
    }
    if (this._staplingTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.staplingTimeout = this._staplingTimeout;
    }
    if (this._thresholdExceededBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdExceededBy = this._thresholdExceededBy;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmplTriggerStatsRate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._fail = undefined;
      this._staplingFail = undefined;
      this._staplingTimeout = undefined;
      this._thresholdExceededBy = undefined;
      this._timeout = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._fail = value.fail;
      this._staplingFail = value.staplingFail;
      this._staplingTimeout = value.staplingTimeout;
      this._thresholdExceededBy = value.thresholdExceededBy;
      this._timeout = value.timeout;
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

  // fail - computed: false, optional: true, required: false
  private _fail?: number; 
  public get fail() {
    return this.getNumberAttribute('fail');
  }
  public set fail(value: number) {
    this._fail = value;
  }
  public resetFail() {
    this._fail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failInput() {
    return this._fail;
  }

  // stapling_fail - computed: false, optional: true, required: false
  private _staplingFail?: number; 
  public get staplingFail() {
    return this.getNumberAttribute('stapling_fail');
  }
  public set staplingFail(value: number) {
    this._staplingFail = value;
  }
  public resetStaplingFail() {
    this._staplingFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staplingFailInput() {
    return this._staplingFail;
  }

  // stapling_timeout - computed: false, optional: true, required: false
  private _staplingTimeout?: number; 
  public get staplingTimeout() {
    return this.getNumberAttribute('stapling_timeout');
  }
  public set staplingTimeout(value: number) {
    this._staplingTimeout = value;
  }
  public resetStaplingTimeout() {
    this._staplingTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staplingTimeoutInput() {
    return this._staplingTimeout;
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

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
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
export interface VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmplTriggerStatsSeverity {
  /**
  * Enable packet capture on all drop counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_ocsp_inst_tmpl#drop VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmpl#drop}
  */
  readonly drop?: number;
  /**
  * Enable packet capture on all alert drop counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_ocsp_inst_tmpl#drop_alert VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmpl#drop_alert}
  */
  readonly dropAlert?: number;
  /**
  * Enable packet capture on all critical drop counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_ocsp_inst_tmpl#drop_critical VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmpl#drop_critical}
  */
  readonly dropCritical?: number;
  /**
  * Enable packet capture on all warning drop counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_ocsp_inst_tmpl#drop_warning VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmpl#drop_warning}
  */
  readonly dropWarning?: number;
  /**
  * Enable packet capture on all error counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_ocsp_inst_tmpl#error VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmpl#error}
  */
  readonly error?: number;
  /**
  * Enable packet capture on all alert error counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_ocsp_inst_tmpl#error_alert VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmpl#error_alert}
  */
  readonly errorAlert?: number;
  /**
  * Enable packet capture on all critical error counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_ocsp_inst_tmpl#error_critical VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmpl#error_critical}
  */
  readonly errorCritical?: number;
  /**
  * Enable packet capture on all warning error counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_ocsp_inst_tmpl#error_warning VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmpl#error_warning}
  */
  readonly errorWarning?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_ocsp_inst_tmpl#uuid VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmpl#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmplTriggerStatsSeverityToTerraform(struct?: VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmplTriggerStatsSeverityOutputReference | VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmplTriggerStatsSeverity): any {
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


export function visibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmplTriggerStatsSeverityToHclTerraform(struct?: VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmplTriggerStatsSeverityOutputReference | VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmplTriggerStatsSeverity): any {
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

export class VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmplTriggerStatsSeverityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmplTriggerStatsSeverity | undefined {
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

  public set internalValue(value: VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmplTriggerStatsSeverity | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_ocsp_inst_tmpl thunder_visibility_packet_capture_object_templates_aam_auth_server_ocsp_inst_tmpl}
*/
export class VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmpl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_object_templates_aam_auth_server_ocsp_inst_tmpl";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmpl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmpl to import
  * @param importFromId The id of the existing VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmpl that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_ocsp_inst_tmpl#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmpl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_object_templates_aam_auth_server_ocsp_inst_tmpl", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_ocsp_inst_tmpl thunder_visibility_packet_capture_object_templates_aam_auth_server_ocsp_inst_tmpl} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmplConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmplConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_object_templates_aam_auth_server_ocsp_inst_tmpl',
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
  private _triggerStatsInc = new VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmplTriggerStatsIncOutputReference(this, "trigger_stats_inc");
  public get triggerStatsInc() {
    return this._triggerStatsInc;
  }
  public putTriggerStatsInc(value: VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmplTriggerStatsInc) {
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
  private _triggerStatsRate = new VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmplTriggerStatsRateOutputReference(this, "trigger_stats_rate");
  public get triggerStatsRate() {
    return this._triggerStatsRate;
  }
  public putTriggerStatsRate(value: VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmplTriggerStatsRate) {
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
  private _triggerStatsSeverity = new VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmplTriggerStatsSeverityOutputReference(this, "trigger_stats_severity");
  public get triggerStatsSeverity() {
    return this._triggerStatsSeverity;
  }
  public putTriggerStatsSeverity(value: VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmplTriggerStatsSeverity) {
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
      trigger_stats_inc: visibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmplTriggerStatsIncToTerraform(this._triggerStatsInc.internalValue),
      trigger_stats_rate: visibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmplTriggerStatsRateToTerraform(this._triggerStatsRate.internalValue),
      trigger_stats_severity: visibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmplTriggerStatsSeverityToTerraform(this._triggerStatsSeverity.internalValue),
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
        value: visibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmplTriggerStatsIncToHclTerraform(this._triggerStatsInc.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmplTriggerStatsIncList",
      },
      trigger_stats_rate: {
        value: visibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmplTriggerStatsRateToHclTerraform(this._triggerStatsRate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmplTriggerStatsRateList",
      },
      trigger_stats_severity: {
        value: visibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmplTriggerStatsSeverityToHclTerraform(this._triggerStatsSeverity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmplTriggerStatsSeverityList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
