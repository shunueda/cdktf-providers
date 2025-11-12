// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_ntlm_tmpl
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmplConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specify name of the capture-config to use with this template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_ntlm_tmpl#capture_config VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmpl#capture_config}
  */
  readonly captureConfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_ntlm_tmpl#id VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmpl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Packet Capture Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_ntlm_tmpl#name VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmpl#name}
  */
  readonly name: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_ntlm_tmpl#user_tag VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmpl#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_ntlm_tmpl#uuid VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmpl#uuid}
  */
  readonly uuid?: string;
  /**
  * trigger_stats_inc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_ntlm_tmpl#trigger_stats_inc VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmpl#trigger_stats_inc}
  */
  readonly triggerStatsInc?: VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmplTriggerStatsInc;
  /**
  * trigger_stats_rate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_ntlm_tmpl#trigger_stats_rate VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmpl#trigger_stats_rate}
  */
  readonly triggerStatsRate?: VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmplTriggerStatsRate;
  /**
  * trigger_stats_severity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_ntlm_tmpl#trigger_stats_severity VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmpl#trigger_stats_severity}
  */
  readonly triggerStatsSeverity?: VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmplTriggerStatsSeverity;
}
export interface VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmplTriggerStatsInc {
  /**
  * Enable automatic packet-capture for Buffer Allocation Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_ntlm_tmpl#buffer_alloc_fail VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmpl#buffer_alloc_fail}
  */
  readonly bufferAllocFail?: number;
  /**
  * Enable automatic packet-capture for Encoding Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_ntlm_tmpl#encoding_fail VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmpl#encoding_fail}
  */
  readonly encodingFail?: number;
  /**
  * Enable automatic packet-capture for Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_ntlm_tmpl#failure VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmpl#failure}
  */
  readonly failure?: number;
  /**
  * Enable automatic packet-capture for Insert Header Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_ntlm_tmpl#insert_header_fail VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmpl#insert_header_fail}
  */
  readonly insertHeaderFail?: number;
  /**
  * Enable automatic packet-capture for Internal Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_ntlm_tmpl#internal_error VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmpl#internal_error}
  */
  readonly internalError?: number;
  /**
  * Enable automatic packet-capture for Parse Header Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_ntlm_tmpl#parse_header_fail VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmpl#parse_header_fail}
  */
  readonly parseHeaderFail?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_ntlm_tmpl#uuid VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmpl#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmplTriggerStatsIncToTerraform(struct?: VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmplTriggerStatsIncOutputReference | VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmplTriggerStatsInc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buffer_alloc_fail: cdktf.numberToTerraform(struct!.bufferAllocFail),
    encoding_fail: cdktf.numberToTerraform(struct!.encodingFail),
    failure: cdktf.numberToTerraform(struct!.failure),
    insert_header_fail: cdktf.numberToTerraform(struct!.insertHeaderFail),
    internal_error: cdktf.numberToTerraform(struct!.internalError),
    parse_header_fail: cdktf.numberToTerraform(struct!.parseHeaderFail),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmplTriggerStatsIncToHclTerraform(struct?: VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmplTriggerStatsIncOutputReference | VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmplTriggerStatsInc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    buffer_alloc_fail: {
      value: cdktf.numberToHclTerraform(struct!.bufferAllocFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    encoding_fail: {
      value: cdktf.numberToHclTerraform(struct!.encodingFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    failure: {
      value: cdktf.numberToHclTerraform(struct!.failure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    insert_header_fail: {
      value: cdktf.numberToHclTerraform(struct!.insertHeaderFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    internal_error: {
      value: cdktf.numberToHclTerraform(struct!.internalError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parse_header_fail: {
      value: cdktf.numberToHclTerraform(struct!.parseHeaderFail),
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

export class VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmplTriggerStatsIncOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmplTriggerStatsInc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bufferAllocFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferAllocFail = this._bufferAllocFail;
    }
    if (this._encodingFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.encodingFail = this._encodingFail;
    }
    if (this._failure !== undefined) {
      hasAnyValues = true;
      internalValueResult.failure = this._failure;
    }
    if (this._insertHeaderFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertHeaderFail = this._insertHeaderFail;
    }
    if (this._internalError !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalError = this._internalError;
    }
    if (this._parseHeaderFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseHeaderFail = this._parseHeaderFail;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmplTriggerStatsInc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bufferAllocFail = undefined;
      this._encodingFail = undefined;
      this._failure = undefined;
      this._insertHeaderFail = undefined;
      this._internalError = undefined;
      this._parseHeaderFail = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bufferAllocFail = value.bufferAllocFail;
      this._encodingFail = value.encodingFail;
      this._failure = value.failure;
      this._insertHeaderFail = value.insertHeaderFail;
      this._internalError = value.internalError;
      this._parseHeaderFail = value.parseHeaderFail;
      this._uuid = value.uuid;
    }
  }

  // buffer_alloc_fail - computed: false, optional: true, required: false
  private _bufferAllocFail?: number; 
  public get bufferAllocFail() {
    return this.getNumberAttribute('buffer_alloc_fail');
  }
  public set bufferAllocFail(value: number) {
    this._bufferAllocFail = value;
  }
  public resetBufferAllocFail() {
    this._bufferAllocFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferAllocFailInput() {
    return this._bufferAllocFail;
  }

  // encoding_fail - computed: false, optional: true, required: false
  private _encodingFail?: number; 
  public get encodingFail() {
    return this.getNumberAttribute('encoding_fail');
  }
  public set encodingFail(value: number) {
    this._encodingFail = value;
  }
  public resetEncodingFail() {
    this._encodingFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodingFailInput() {
    return this._encodingFail;
  }

  // failure - computed: false, optional: true, required: false
  private _failure?: number; 
  public get failure() {
    return this.getNumberAttribute('failure');
  }
  public set failure(value: number) {
    this._failure = value;
  }
  public resetFailure() {
    this._failure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureInput() {
    return this._failure;
  }

  // insert_header_fail - computed: false, optional: true, required: false
  private _insertHeaderFail?: number; 
  public get insertHeaderFail() {
    return this.getNumberAttribute('insert_header_fail');
  }
  public set insertHeaderFail(value: number) {
    this._insertHeaderFail = value;
  }
  public resetInsertHeaderFail() {
    this._insertHeaderFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertHeaderFailInput() {
    return this._insertHeaderFail;
  }

  // internal_error - computed: false, optional: true, required: false
  private _internalError?: number; 
  public get internalError() {
    return this.getNumberAttribute('internal_error');
  }
  public set internalError(value: number) {
    this._internalError = value;
  }
  public resetInternalError() {
    this._internalError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalErrorInput() {
    return this._internalError;
  }

  // parse_header_fail - computed: false, optional: true, required: false
  private _parseHeaderFail?: number; 
  public get parseHeaderFail() {
    return this.getNumberAttribute('parse_header_fail');
  }
  public set parseHeaderFail(value: number) {
    this._parseHeaderFail = value;
  }
  public resetParseHeaderFail() {
    this._parseHeaderFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseHeaderFailInput() {
    return this._parseHeaderFail;
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
export interface VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmplTriggerStatsRate {
  /**
  * Enable automatic packet-capture for Buffer Allocation Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_ntlm_tmpl#buffer_alloc_fail VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmpl#buffer_alloc_fail}
  */
  readonly bufferAllocFail?: number;
  /**
  * Time in seconds to look for the anomaly, default is 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_ntlm_tmpl#duration VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmpl#duration}
  */
  readonly duration?: number;
  /**
  * Enable automatic packet-capture for Encoding Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_ntlm_tmpl#encoding_fail VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmpl#encoding_fail}
  */
  readonly encodingFail?: number;
  /**
  * Enable automatic packet-capture for Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_ntlm_tmpl#failure VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmpl#failure}
  */
  readonly failure?: number;
  /**
  * Enable automatic packet-capture for Insert Header Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_ntlm_tmpl#insert_header_fail VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmpl#insert_header_fail}
  */
  readonly insertHeaderFail?: number;
  /**
  * Enable automatic packet-capture for Internal Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_ntlm_tmpl#internal_error VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmpl#internal_error}
  */
  readonly internalError?: number;
  /**
  * Enable automatic packet-capture for Parse Header Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_ntlm_tmpl#parse_header_fail VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmpl#parse_header_fail}
  */
  readonly parseHeaderFail?: number;
  /**
  * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_ntlm_tmpl#threshold_exceeded_by VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmpl#threshold_exceeded_by}
  */
  readonly thresholdExceededBy?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_ntlm_tmpl#uuid VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmpl#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmplTriggerStatsRateToTerraform(struct?: VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmplTriggerStatsRateOutputReference | VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmplTriggerStatsRate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buffer_alloc_fail: cdktf.numberToTerraform(struct!.bufferAllocFail),
    duration: cdktf.numberToTerraform(struct!.duration),
    encoding_fail: cdktf.numberToTerraform(struct!.encodingFail),
    failure: cdktf.numberToTerraform(struct!.failure),
    insert_header_fail: cdktf.numberToTerraform(struct!.insertHeaderFail),
    internal_error: cdktf.numberToTerraform(struct!.internalError),
    parse_header_fail: cdktf.numberToTerraform(struct!.parseHeaderFail),
    threshold_exceeded_by: cdktf.numberToTerraform(struct!.thresholdExceededBy),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmplTriggerStatsRateToHclTerraform(struct?: VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmplTriggerStatsRateOutputReference | VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmplTriggerStatsRate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    buffer_alloc_fail: {
      value: cdktf.numberToHclTerraform(struct!.bufferAllocFail),
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
    encoding_fail: {
      value: cdktf.numberToHclTerraform(struct!.encodingFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    failure: {
      value: cdktf.numberToHclTerraform(struct!.failure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    insert_header_fail: {
      value: cdktf.numberToHclTerraform(struct!.insertHeaderFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    internal_error: {
      value: cdktf.numberToHclTerraform(struct!.internalError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parse_header_fail: {
      value: cdktf.numberToHclTerraform(struct!.parseHeaderFail),
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

export class VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmplTriggerStatsRateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmplTriggerStatsRate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bufferAllocFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferAllocFail = this._bufferAllocFail;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._encodingFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.encodingFail = this._encodingFail;
    }
    if (this._failure !== undefined) {
      hasAnyValues = true;
      internalValueResult.failure = this._failure;
    }
    if (this._insertHeaderFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertHeaderFail = this._insertHeaderFail;
    }
    if (this._internalError !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalError = this._internalError;
    }
    if (this._parseHeaderFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseHeaderFail = this._parseHeaderFail;
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

  public set internalValue(value: VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmplTriggerStatsRate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bufferAllocFail = undefined;
      this._duration = undefined;
      this._encodingFail = undefined;
      this._failure = undefined;
      this._insertHeaderFail = undefined;
      this._internalError = undefined;
      this._parseHeaderFail = undefined;
      this._thresholdExceededBy = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bufferAllocFail = value.bufferAllocFail;
      this._duration = value.duration;
      this._encodingFail = value.encodingFail;
      this._failure = value.failure;
      this._insertHeaderFail = value.insertHeaderFail;
      this._internalError = value.internalError;
      this._parseHeaderFail = value.parseHeaderFail;
      this._thresholdExceededBy = value.thresholdExceededBy;
      this._uuid = value.uuid;
    }
  }

  // buffer_alloc_fail - computed: false, optional: true, required: false
  private _bufferAllocFail?: number; 
  public get bufferAllocFail() {
    return this.getNumberAttribute('buffer_alloc_fail');
  }
  public set bufferAllocFail(value: number) {
    this._bufferAllocFail = value;
  }
  public resetBufferAllocFail() {
    this._bufferAllocFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferAllocFailInput() {
    return this._bufferAllocFail;
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

  // encoding_fail - computed: false, optional: true, required: false
  private _encodingFail?: number; 
  public get encodingFail() {
    return this.getNumberAttribute('encoding_fail');
  }
  public set encodingFail(value: number) {
    this._encodingFail = value;
  }
  public resetEncodingFail() {
    this._encodingFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodingFailInput() {
    return this._encodingFail;
  }

  // failure - computed: false, optional: true, required: false
  private _failure?: number; 
  public get failure() {
    return this.getNumberAttribute('failure');
  }
  public set failure(value: number) {
    this._failure = value;
  }
  public resetFailure() {
    this._failure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureInput() {
    return this._failure;
  }

  // insert_header_fail - computed: false, optional: true, required: false
  private _insertHeaderFail?: number; 
  public get insertHeaderFail() {
    return this.getNumberAttribute('insert_header_fail');
  }
  public set insertHeaderFail(value: number) {
    this._insertHeaderFail = value;
  }
  public resetInsertHeaderFail() {
    this._insertHeaderFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertHeaderFailInput() {
    return this._insertHeaderFail;
  }

  // internal_error - computed: false, optional: true, required: false
  private _internalError?: number; 
  public get internalError() {
    return this.getNumberAttribute('internal_error');
  }
  public set internalError(value: number) {
    this._internalError = value;
  }
  public resetInternalError() {
    this._internalError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalErrorInput() {
    return this._internalError;
  }

  // parse_header_fail - computed: false, optional: true, required: false
  private _parseHeaderFail?: number; 
  public get parseHeaderFail() {
    return this.getNumberAttribute('parse_header_fail');
  }
  public set parseHeaderFail(value: number) {
    this._parseHeaderFail = value;
  }
  public resetParseHeaderFail() {
    this._parseHeaderFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseHeaderFailInput() {
    return this._parseHeaderFail;
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
export interface VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmplTriggerStatsSeverity {
  /**
  * Enable packet capture on all drop counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_ntlm_tmpl#drop VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmpl#drop}
  */
  readonly drop?: number;
  /**
  * Enable packet capture on all alert drop counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_ntlm_tmpl#drop_alert VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmpl#drop_alert}
  */
  readonly dropAlert?: number;
  /**
  * Enable packet capture on all critical drop counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_ntlm_tmpl#drop_critical VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmpl#drop_critical}
  */
  readonly dropCritical?: number;
  /**
  * Enable packet capture on all warning drop counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_ntlm_tmpl#drop_warning VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmpl#drop_warning}
  */
  readonly dropWarning?: number;
  /**
  * Enable packet capture on all error counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_ntlm_tmpl#error VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmpl#error}
  */
  readonly error?: number;
  /**
  * Enable packet capture on all alert error counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_ntlm_tmpl#error_alert VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmpl#error_alert}
  */
  readonly errorAlert?: number;
  /**
  * Enable packet capture on all critical error counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_ntlm_tmpl#error_critical VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmpl#error_critical}
  */
  readonly errorCritical?: number;
  /**
  * Enable packet capture on all warning error counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_ntlm_tmpl#error_warning VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmpl#error_warning}
  */
  readonly errorWarning?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_ntlm_tmpl#uuid VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmpl#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmplTriggerStatsSeverityToTerraform(struct?: VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmplTriggerStatsSeverityOutputReference | VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmplTriggerStatsSeverity): any {
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


export function visibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmplTriggerStatsSeverityToHclTerraform(struct?: VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmplTriggerStatsSeverityOutputReference | VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmplTriggerStatsSeverity): any {
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

export class VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmplTriggerStatsSeverityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmplTriggerStatsSeverity | undefined {
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

  public set internalValue(value: VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmplTriggerStatsSeverity | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_ntlm_tmpl thunder_visibility_packet_capture_object_templates_aam_auth_relay_ntlm_tmpl}
*/
export class VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmpl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_object_templates_aam_auth_relay_ntlm_tmpl";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmpl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmpl to import
  * @param importFromId The id of the existing VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmpl that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_ntlm_tmpl#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmpl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_object_templates_aam_auth_relay_ntlm_tmpl", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_ntlm_tmpl thunder_visibility_packet_capture_object_templates_aam_auth_relay_ntlm_tmpl} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmplConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmplConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_object_templates_aam_auth_relay_ntlm_tmpl',
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
  private _triggerStatsInc = new VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmplTriggerStatsIncOutputReference(this, "trigger_stats_inc");
  public get triggerStatsInc() {
    return this._triggerStatsInc;
  }
  public putTriggerStatsInc(value: VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmplTriggerStatsInc) {
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
  private _triggerStatsRate = new VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmplTriggerStatsRateOutputReference(this, "trigger_stats_rate");
  public get triggerStatsRate() {
    return this._triggerStatsRate;
  }
  public putTriggerStatsRate(value: VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmplTriggerStatsRate) {
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
  private _triggerStatsSeverity = new VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmplTriggerStatsSeverityOutputReference(this, "trigger_stats_severity");
  public get triggerStatsSeverity() {
    return this._triggerStatsSeverity;
  }
  public putTriggerStatsSeverity(value: VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmplTriggerStatsSeverity) {
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
      trigger_stats_inc: visibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmplTriggerStatsIncToTerraform(this._triggerStatsInc.internalValue),
      trigger_stats_rate: visibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmplTriggerStatsRateToTerraform(this._triggerStatsRate.internalValue),
      trigger_stats_severity: visibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmplTriggerStatsSeverityToTerraform(this._triggerStatsSeverity.internalValue),
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
        value: visibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmplTriggerStatsIncToHclTerraform(this._triggerStatsInc.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmplTriggerStatsIncList",
      },
      trigger_stats_rate: {
        value: visibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmplTriggerStatsRateToHclTerraform(this._triggerStatsRate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmplTriggerStatsRateList",
      },
      trigger_stats_severity: {
        value: visibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmplTriggerStatsSeverityToHclTerraform(this._triggerStatsSeverity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmplTriggerStatsSeverityList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
