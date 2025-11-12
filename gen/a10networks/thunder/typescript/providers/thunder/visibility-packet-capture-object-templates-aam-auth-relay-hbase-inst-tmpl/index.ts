// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_hbase_inst_tmpl
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specify name of the capture-config to use with this template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_hbase_inst_tmpl#capture_config VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmpl#capture_config}
  */
  readonly captureConfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_hbase_inst_tmpl#id VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmpl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Packet Capture Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_hbase_inst_tmpl#name VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmpl#name}
  */
  readonly name: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_hbase_inst_tmpl#user_tag VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmpl#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_hbase_inst_tmpl#uuid VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmpl#uuid}
  */
  readonly uuid?: string;
  /**
  * trigger_stats_inc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_hbase_inst_tmpl#trigger_stats_inc VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmpl#trigger_stats_inc}
  */
  readonly triggerStatsInc?: VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsInc;
  /**
  * trigger_stats_rate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_hbase_inst_tmpl#trigger_stats_rate VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmpl#trigger_stats_rate}
  */
  readonly triggerStatsRate?: VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsRate;
  /**
  * trigger_stats_severity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_hbase_inst_tmpl#trigger_stats_severity VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmpl#trigger_stats_severity}
  */
  readonly triggerStatsSeverity?: VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsSeverity;
}
export interface VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsInc {
  /**
  * Enable automatic packet-capture for Bad Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_hbase_inst_tmpl#bad_req VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmpl#bad_req}
  */
  readonly badReq?: number;
  /**
  * Enable automatic packet-capture for Forbidden
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_hbase_inst_tmpl#forbidden VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmpl#forbidden}
  */
  readonly forbidden?: number;
  /**
  * Enable automatic packet-capture for No Credential
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_hbase_inst_tmpl#no_creds VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmpl#no_creds}
  */
  readonly noCreds?: number;
  /**
  * Enable automatic packet-capture for Not Found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_hbase_inst_tmpl#not_found VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmpl#not_found}
  */
  readonly notFound?: number;
  /**
  * Enable automatic packet-capture for Internal Server Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_hbase_inst_tmpl#server_error VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmpl#server_error}
  */
  readonly serverError?: number;
  /**
  * Enable automatic packet-capture for Unauthorized
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_hbase_inst_tmpl#unauth VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmpl#unauth}
  */
  readonly unauth?: number;
  /**
  * Enable automatic packet-capture for Service Unavailable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_hbase_inst_tmpl#unavailable VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmpl#unavailable}
  */
  readonly unavailable?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_hbase_inst_tmpl#uuid VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmpl#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsIncToTerraform(struct?: VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsIncOutputReference | VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsInc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bad_req: cdktf.numberToTerraform(struct!.badReq),
    forbidden: cdktf.numberToTerraform(struct!.forbidden),
    no_creds: cdktf.numberToTerraform(struct!.noCreds),
    not_found: cdktf.numberToTerraform(struct!.notFound),
    server_error: cdktf.numberToTerraform(struct!.serverError),
    unauth: cdktf.numberToTerraform(struct!.unauth),
    unavailable: cdktf.numberToTerraform(struct!.unavailable),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsIncToHclTerraform(struct?: VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsIncOutputReference | VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsInc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bad_req: {
      value: cdktf.numberToHclTerraform(struct!.badReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    forbidden: {
      value: cdktf.numberToHclTerraform(struct!.forbidden),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_creds: {
      value: cdktf.numberToHclTerraform(struct!.noCreds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    not_found: {
      value: cdktf.numberToHclTerraform(struct!.notFound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_error: {
      value: cdktf.numberToHclTerraform(struct!.serverError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unauth: {
      value: cdktf.numberToHclTerraform(struct!.unauth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unavailable: {
      value: cdktf.numberToHclTerraform(struct!.unavailable),
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

export class VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsIncOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsInc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._badReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.badReq = this._badReq;
    }
    if (this._forbidden !== undefined) {
      hasAnyValues = true;
      internalValueResult.forbidden = this._forbidden;
    }
    if (this._noCreds !== undefined) {
      hasAnyValues = true;
      internalValueResult.noCreds = this._noCreds;
    }
    if (this._notFound !== undefined) {
      hasAnyValues = true;
      internalValueResult.notFound = this._notFound;
    }
    if (this._serverError !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverError = this._serverError;
    }
    if (this._unauth !== undefined) {
      hasAnyValues = true;
      internalValueResult.unauth = this._unauth;
    }
    if (this._unavailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.unavailable = this._unavailable;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsInc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._badReq = undefined;
      this._forbidden = undefined;
      this._noCreds = undefined;
      this._notFound = undefined;
      this._serverError = undefined;
      this._unauth = undefined;
      this._unavailable = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._badReq = value.badReq;
      this._forbidden = value.forbidden;
      this._noCreds = value.noCreds;
      this._notFound = value.notFound;
      this._serverError = value.serverError;
      this._unauth = value.unauth;
      this._unavailable = value.unavailable;
      this._uuid = value.uuid;
    }
  }

  // bad_req - computed: false, optional: true, required: false
  private _badReq?: number; 
  public get badReq() {
    return this.getNumberAttribute('bad_req');
  }
  public set badReq(value: number) {
    this._badReq = value;
  }
  public resetBadReq() {
    this._badReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badReqInput() {
    return this._badReq;
  }

  // forbidden - computed: false, optional: true, required: false
  private _forbidden?: number; 
  public get forbidden() {
    return this.getNumberAttribute('forbidden');
  }
  public set forbidden(value: number) {
    this._forbidden = value;
  }
  public resetForbidden() {
    this._forbidden = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forbiddenInput() {
    return this._forbidden;
  }

  // no_creds - computed: false, optional: true, required: false
  private _noCreds?: number; 
  public get noCreds() {
    return this.getNumberAttribute('no_creds');
  }
  public set noCreds(value: number) {
    this._noCreds = value;
  }
  public resetNoCreds() {
    this._noCreds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noCredsInput() {
    return this._noCreds;
  }

  // not_found - computed: false, optional: true, required: false
  private _notFound?: number; 
  public get notFound() {
    return this.getNumberAttribute('not_found');
  }
  public set notFound(value: number) {
    this._notFound = value;
  }
  public resetNotFound() {
    this._notFound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notFoundInput() {
    return this._notFound;
  }

  // server_error - computed: false, optional: true, required: false
  private _serverError?: number; 
  public get serverError() {
    return this.getNumberAttribute('server_error');
  }
  public set serverError(value: number) {
    this._serverError = value;
  }
  public resetServerError() {
    this._serverError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverErrorInput() {
    return this._serverError;
  }

  // unauth - computed: false, optional: true, required: false
  private _unauth?: number; 
  public get unauth() {
    return this.getNumberAttribute('unauth');
  }
  public set unauth(value: number) {
    this._unauth = value;
  }
  public resetUnauth() {
    this._unauth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unauthInput() {
    return this._unauth;
  }

  // unavailable - computed: false, optional: true, required: false
  private _unavailable?: number; 
  public get unavailable() {
    return this.getNumberAttribute('unavailable');
  }
  public set unavailable(value: number) {
    this._unavailable = value;
  }
  public resetUnavailable() {
    this._unavailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unavailableInput() {
    return this._unavailable;
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
export interface VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsRate {
  /**
  * Enable automatic packet-capture for Bad Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_hbase_inst_tmpl#bad_req VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmpl#bad_req}
  */
  readonly badReq?: number;
  /**
  * Time in seconds to look for the anomaly, default is 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_hbase_inst_tmpl#duration VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmpl#duration}
  */
  readonly duration?: number;
  /**
  * Enable automatic packet-capture for Forbidden
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_hbase_inst_tmpl#forbidden VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmpl#forbidden}
  */
  readonly forbidden?: number;
  /**
  * Enable automatic packet-capture for No Credential
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_hbase_inst_tmpl#no_creds VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmpl#no_creds}
  */
  readonly noCreds?: number;
  /**
  * Enable automatic packet-capture for Not Found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_hbase_inst_tmpl#not_found VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmpl#not_found}
  */
  readonly notFound?: number;
  /**
  * Enable automatic packet-capture for Internal Server Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_hbase_inst_tmpl#server_error VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmpl#server_error}
  */
  readonly serverError?: number;
  /**
  * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_hbase_inst_tmpl#threshold_exceeded_by VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmpl#threshold_exceeded_by}
  */
  readonly thresholdExceededBy?: number;
  /**
  * Enable automatic packet-capture for Unauthorized
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_hbase_inst_tmpl#unauth VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmpl#unauth}
  */
  readonly unauth?: number;
  /**
  * Enable automatic packet-capture for Service Unavailable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_hbase_inst_tmpl#unavailable VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmpl#unavailable}
  */
  readonly unavailable?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_hbase_inst_tmpl#uuid VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmpl#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsRateToTerraform(struct?: VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsRateOutputReference | VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsRate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bad_req: cdktf.numberToTerraform(struct!.badReq),
    duration: cdktf.numberToTerraform(struct!.duration),
    forbidden: cdktf.numberToTerraform(struct!.forbidden),
    no_creds: cdktf.numberToTerraform(struct!.noCreds),
    not_found: cdktf.numberToTerraform(struct!.notFound),
    server_error: cdktf.numberToTerraform(struct!.serverError),
    threshold_exceeded_by: cdktf.numberToTerraform(struct!.thresholdExceededBy),
    unauth: cdktf.numberToTerraform(struct!.unauth),
    unavailable: cdktf.numberToTerraform(struct!.unavailable),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsRateToHclTerraform(struct?: VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsRateOutputReference | VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsRate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bad_req: {
      value: cdktf.numberToHclTerraform(struct!.badReq),
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
    forbidden: {
      value: cdktf.numberToHclTerraform(struct!.forbidden),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_creds: {
      value: cdktf.numberToHclTerraform(struct!.noCreds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    not_found: {
      value: cdktf.numberToHclTerraform(struct!.notFound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_error: {
      value: cdktf.numberToHclTerraform(struct!.serverError),
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
    unauth: {
      value: cdktf.numberToHclTerraform(struct!.unauth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unavailable: {
      value: cdktf.numberToHclTerraform(struct!.unavailable),
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

export class VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsRateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsRate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._badReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.badReq = this._badReq;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._forbidden !== undefined) {
      hasAnyValues = true;
      internalValueResult.forbidden = this._forbidden;
    }
    if (this._noCreds !== undefined) {
      hasAnyValues = true;
      internalValueResult.noCreds = this._noCreds;
    }
    if (this._notFound !== undefined) {
      hasAnyValues = true;
      internalValueResult.notFound = this._notFound;
    }
    if (this._serverError !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverError = this._serverError;
    }
    if (this._thresholdExceededBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdExceededBy = this._thresholdExceededBy;
    }
    if (this._unauth !== undefined) {
      hasAnyValues = true;
      internalValueResult.unauth = this._unauth;
    }
    if (this._unavailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.unavailable = this._unavailable;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsRate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._badReq = undefined;
      this._duration = undefined;
      this._forbidden = undefined;
      this._noCreds = undefined;
      this._notFound = undefined;
      this._serverError = undefined;
      this._thresholdExceededBy = undefined;
      this._unauth = undefined;
      this._unavailable = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._badReq = value.badReq;
      this._duration = value.duration;
      this._forbidden = value.forbidden;
      this._noCreds = value.noCreds;
      this._notFound = value.notFound;
      this._serverError = value.serverError;
      this._thresholdExceededBy = value.thresholdExceededBy;
      this._unauth = value.unauth;
      this._unavailable = value.unavailable;
      this._uuid = value.uuid;
    }
  }

  // bad_req - computed: false, optional: true, required: false
  private _badReq?: number; 
  public get badReq() {
    return this.getNumberAttribute('bad_req');
  }
  public set badReq(value: number) {
    this._badReq = value;
  }
  public resetBadReq() {
    this._badReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badReqInput() {
    return this._badReq;
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

  // forbidden - computed: false, optional: true, required: false
  private _forbidden?: number; 
  public get forbidden() {
    return this.getNumberAttribute('forbidden');
  }
  public set forbidden(value: number) {
    this._forbidden = value;
  }
  public resetForbidden() {
    this._forbidden = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forbiddenInput() {
    return this._forbidden;
  }

  // no_creds - computed: false, optional: true, required: false
  private _noCreds?: number; 
  public get noCreds() {
    return this.getNumberAttribute('no_creds');
  }
  public set noCreds(value: number) {
    this._noCreds = value;
  }
  public resetNoCreds() {
    this._noCreds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noCredsInput() {
    return this._noCreds;
  }

  // not_found - computed: false, optional: true, required: false
  private _notFound?: number; 
  public get notFound() {
    return this.getNumberAttribute('not_found');
  }
  public set notFound(value: number) {
    this._notFound = value;
  }
  public resetNotFound() {
    this._notFound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notFoundInput() {
    return this._notFound;
  }

  // server_error - computed: false, optional: true, required: false
  private _serverError?: number; 
  public get serverError() {
    return this.getNumberAttribute('server_error');
  }
  public set serverError(value: number) {
    this._serverError = value;
  }
  public resetServerError() {
    this._serverError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverErrorInput() {
    return this._serverError;
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

  // unauth - computed: false, optional: true, required: false
  private _unauth?: number; 
  public get unauth() {
    return this.getNumberAttribute('unauth');
  }
  public set unauth(value: number) {
    this._unauth = value;
  }
  public resetUnauth() {
    this._unauth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unauthInput() {
    return this._unauth;
  }

  // unavailable - computed: false, optional: true, required: false
  private _unavailable?: number; 
  public get unavailable() {
    return this.getNumberAttribute('unavailable');
  }
  public set unavailable(value: number) {
    this._unavailable = value;
  }
  public resetUnavailable() {
    this._unavailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unavailableInput() {
    return this._unavailable;
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
export interface VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsSeverity {
  /**
  * Enable packet capture on all drop counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_hbase_inst_tmpl#drop VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmpl#drop}
  */
  readonly drop?: number;
  /**
  * Enable packet capture on all alert drop counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_hbase_inst_tmpl#drop_alert VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmpl#drop_alert}
  */
  readonly dropAlert?: number;
  /**
  * Enable packet capture on all critical drop counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_hbase_inst_tmpl#drop_critical VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmpl#drop_critical}
  */
  readonly dropCritical?: number;
  /**
  * Enable packet capture on all warning drop counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_hbase_inst_tmpl#drop_warning VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmpl#drop_warning}
  */
  readonly dropWarning?: number;
  /**
  * Enable packet capture on all error counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_hbase_inst_tmpl#error VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmpl#error}
  */
  readonly error?: number;
  /**
  * Enable packet capture on all alert error counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_hbase_inst_tmpl#error_alert VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmpl#error_alert}
  */
  readonly errorAlert?: number;
  /**
  * Enable packet capture on all critical error counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_hbase_inst_tmpl#error_critical VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmpl#error_critical}
  */
  readonly errorCritical?: number;
  /**
  * Enable packet capture on all warning error counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_hbase_inst_tmpl#error_warning VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmpl#error_warning}
  */
  readonly errorWarning?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_hbase_inst_tmpl#uuid VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmpl#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsSeverityToTerraform(struct?: VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsSeverityOutputReference | VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsSeverity): any {
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


export function visibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsSeverityToHclTerraform(struct?: VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsSeverityOutputReference | VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsSeverity): any {
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

export class VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsSeverityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsSeverity | undefined {
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

  public set internalValue(value: VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsSeverity | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_hbase_inst_tmpl thunder_visibility_packet_capture_object_templates_aam_auth_relay_hbase_inst_tmpl}
*/
export class VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmpl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_object_templates_aam_auth_relay_hbase_inst_tmpl";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmpl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmpl to import
  * @param importFromId The id of the existing VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmpl that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_hbase_inst_tmpl#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmpl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_object_templates_aam_auth_relay_hbase_inst_tmpl", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_hbase_inst_tmpl thunder_visibility_packet_capture_object_templates_aam_auth_relay_hbase_inst_tmpl} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_object_templates_aam_auth_relay_hbase_inst_tmpl',
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
  private _triggerStatsInc = new VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsIncOutputReference(this, "trigger_stats_inc");
  public get triggerStatsInc() {
    return this._triggerStatsInc;
  }
  public putTriggerStatsInc(value: VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsInc) {
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
  private _triggerStatsRate = new VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsRateOutputReference(this, "trigger_stats_rate");
  public get triggerStatsRate() {
    return this._triggerStatsRate;
  }
  public putTriggerStatsRate(value: VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsRate) {
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
  private _triggerStatsSeverity = new VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsSeverityOutputReference(this, "trigger_stats_severity");
  public get triggerStatsSeverity() {
    return this._triggerStatsSeverity;
  }
  public putTriggerStatsSeverity(value: VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsSeverity) {
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
      trigger_stats_inc: visibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsIncToTerraform(this._triggerStatsInc.internalValue),
      trigger_stats_rate: visibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsRateToTerraform(this._triggerStatsRate.internalValue),
      trigger_stats_severity: visibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsSeverityToTerraform(this._triggerStatsSeverity.internalValue),
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
        value: visibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsIncToHclTerraform(this._triggerStatsInc.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsIncList",
      },
      trigger_stats_rate: {
        value: visibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsRateToHclTerraform(this._triggerStatsRate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsRateList",
      },
      trigger_stats_severity: {
        value: visibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsSeverityToHclTerraform(this._triggerStatsSeverity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsSeverityList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
