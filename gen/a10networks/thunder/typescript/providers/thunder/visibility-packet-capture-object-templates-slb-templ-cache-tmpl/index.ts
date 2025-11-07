// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_templ_cache_tmpl
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specify name of the capture-config to use with this template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_templ_cache_tmpl#capture_config VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmpl#capture_config}
  */
  readonly captureConfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_templ_cache_tmpl#id VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmpl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Packet Capture Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_templ_cache_tmpl#name VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmpl#name}
  */
  readonly name: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_templ_cache_tmpl#user_tag VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmpl#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_templ_cache_tmpl#uuid VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmpl#uuid}
  */
  readonly uuid?: string;
  /**
  * trigger_stats_inc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_templ_cache_tmpl#trigger_stats_inc VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmpl#trigger_stats_inc}
  */
  readonly triggerStatsInc?: VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsInc;
  /**
  * trigger_stats_rate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_templ_cache_tmpl#trigger_stats_rate VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmpl#trigger_stats_rate}
  */
  readonly triggerStatsRate?: VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsRate;
  /**
  * trigger_stats_severity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_templ_cache_tmpl#trigger_stats_severity VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmpl#trigger_stats_severity}
  */
  readonly triggerStatsSeverity?: VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsSeverity;
}
export interface VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsInc {
  /**
  * Enable automatic packet-capture for slbTemplateCacheContentToobig, help content_toobig
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_templ_cache_tmpl#content_toobig VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmpl#content_toobig}
  */
  readonly contentToobig?: number;
  /**
  * Enable automatic packet-capture for slbTemplateCacheContentToosmall, help content_toosmall
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_templ_cache_tmpl#content_toosmall VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmpl#content_toosmall}
  */
  readonly contentToosmall?: number;
  /**
  * Enable automatic packet-capture for slbTemplateCacheEntryCreateFailures, help entry_create_failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_templ_cache_tmpl#entry_create_failures VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmpl#entry_create_failures}
  */
  readonly entryCreateFailures?: number;
  /**
  * Enable automatic packet-capture for header_save_error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_templ_cache_tmpl#header_save_error VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmpl#header_save_error}
  */
  readonly headerSaveError?: number;
  /**
  * Enable automatic packet-capture for slbTemplateCacheNcReqHeader, help nc_req_header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_templ_cache_tmpl#nc_req_header VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmpl#nc_req_header}
  */
  readonly ncReqHeader?: number;
  /**
  * Enable automatic packet-capture for slbTemplateCacheNcResHeader, help nc_res_header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_templ_cache_tmpl#nc_res_header VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmpl#nc_res_header}
  */
  readonly ncResHeader?: number;
  /**
  * Enable automatic packet-capture for slbTemplateCacheRvFailure, help rv_failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_templ_cache_tmpl#rv_failure VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmpl#rv_failure}
  */
  readonly rvFailure?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_templ_cache_tmpl#uuid VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmpl#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsIncToTerraform(struct?: VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsIncOutputReference | VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsInc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_toobig: cdktf.numberToTerraform(struct!.contentToobig),
    content_toosmall: cdktf.numberToTerraform(struct!.contentToosmall),
    entry_create_failures: cdktf.numberToTerraform(struct!.entryCreateFailures),
    header_save_error: cdktf.numberToTerraform(struct!.headerSaveError),
    nc_req_header: cdktf.numberToTerraform(struct!.ncReqHeader),
    nc_res_header: cdktf.numberToTerraform(struct!.ncResHeader),
    rv_failure: cdktf.numberToTerraform(struct!.rvFailure),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsIncToHclTerraform(struct?: VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsIncOutputReference | VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsInc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content_toobig: {
      value: cdktf.numberToHclTerraform(struct!.contentToobig),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    content_toosmall: {
      value: cdktf.numberToHclTerraform(struct!.contentToosmall),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    entry_create_failures: {
      value: cdktf.numberToHclTerraform(struct!.entryCreateFailures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    header_save_error: {
      value: cdktf.numberToHclTerraform(struct!.headerSaveError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nc_req_header: {
      value: cdktf.numberToHclTerraform(struct!.ncReqHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nc_res_header: {
      value: cdktf.numberToHclTerraform(struct!.ncResHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rv_failure: {
      value: cdktf.numberToHclTerraform(struct!.rvFailure),
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

export class VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsIncOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsInc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentToobig !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentToobig = this._contentToobig;
    }
    if (this._contentToosmall !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentToosmall = this._contentToosmall;
    }
    if (this._entryCreateFailures !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryCreateFailures = this._entryCreateFailures;
    }
    if (this._headerSaveError !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerSaveError = this._headerSaveError;
    }
    if (this._ncReqHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.ncReqHeader = this._ncReqHeader;
    }
    if (this._ncResHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.ncResHeader = this._ncResHeader;
    }
    if (this._rvFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.rvFailure = this._rvFailure;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsInc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contentToobig = undefined;
      this._contentToosmall = undefined;
      this._entryCreateFailures = undefined;
      this._headerSaveError = undefined;
      this._ncReqHeader = undefined;
      this._ncResHeader = undefined;
      this._rvFailure = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contentToobig = value.contentToobig;
      this._contentToosmall = value.contentToosmall;
      this._entryCreateFailures = value.entryCreateFailures;
      this._headerSaveError = value.headerSaveError;
      this._ncReqHeader = value.ncReqHeader;
      this._ncResHeader = value.ncResHeader;
      this._rvFailure = value.rvFailure;
      this._uuid = value.uuid;
    }
  }

  // content_toobig - computed: false, optional: true, required: false
  private _contentToobig?: number; 
  public get contentToobig() {
    return this.getNumberAttribute('content_toobig');
  }
  public set contentToobig(value: number) {
    this._contentToobig = value;
  }
  public resetContentToobig() {
    this._contentToobig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentToobigInput() {
    return this._contentToobig;
  }

  // content_toosmall - computed: false, optional: true, required: false
  private _contentToosmall?: number; 
  public get contentToosmall() {
    return this.getNumberAttribute('content_toosmall');
  }
  public set contentToosmall(value: number) {
    this._contentToosmall = value;
  }
  public resetContentToosmall() {
    this._contentToosmall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentToosmallInput() {
    return this._contentToosmall;
  }

  // entry_create_failures - computed: false, optional: true, required: false
  private _entryCreateFailures?: number; 
  public get entryCreateFailures() {
    return this.getNumberAttribute('entry_create_failures');
  }
  public set entryCreateFailures(value: number) {
    this._entryCreateFailures = value;
  }
  public resetEntryCreateFailures() {
    this._entryCreateFailures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryCreateFailuresInput() {
    return this._entryCreateFailures;
  }

  // header_save_error - computed: false, optional: true, required: false
  private _headerSaveError?: number; 
  public get headerSaveError() {
    return this.getNumberAttribute('header_save_error');
  }
  public set headerSaveError(value: number) {
    this._headerSaveError = value;
  }
  public resetHeaderSaveError() {
    this._headerSaveError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerSaveErrorInput() {
    return this._headerSaveError;
  }

  // nc_req_header - computed: false, optional: true, required: false
  private _ncReqHeader?: number; 
  public get ncReqHeader() {
    return this.getNumberAttribute('nc_req_header');
  }
  public set ncReqHeader(value: number) {
    this._ncReqHeader = value;
  }
  public resetNcReqHeader() {
    this._ncReqHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ncReqHeaderInput() {
    return this._ncReqHeader;
  }

  // nc_res_header - computed: false, optional: true, required: false
  private _ncResHeader?: number; 
  public get ncResHeader() {
    return this.getNumberAttribute('nc_res_header');
  }
  public set ncResHeader(value: number) {
    this._ncResHeader = value;
  }
  public resetNcResHeader() {
    this._ncResHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ncResHeaderInput() {
    return this._ncResHeader;
  }

  // rv_failure - computed: false, optional: true, required: false
  private _rvFailure?: number; 
  public get rvFailure() {
    return this.getNumberAttribute('rv_failure');
  }
  public set rvFailure(value: number) {
    this._rvFailure = value;
  }
  public resetRvFailure() {
    this._rvFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rvFailureInput() {
    return this._rvFailure;
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
export interface VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsRate {
  /**
  * Enable automatic packet-capture for slbTemplateCacheContentToobig, help content_toobig
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_templ_cache_tmpl#content_toobig VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmpl#content_toobig}
  */
  readonly contentToobig?: number;
  /**
  * Enable automatic packet-capture for slbTemplateCacheContentToosmall, help content_toosmall
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_templ_cache_tmpl#content_toosmall VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmpl#content_toosmall}
  */
  readonly contentToosmall?: number;
  /**
  * Time in seconds to look for the anomaly, default is 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_templ_cache_tmpl#duration VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmpl#duration}
  */
  readonly duration?: number;
  /**
  * Enable automatic packet-capture for slbTemplateCacheEntryCreateFailures, help entry_create_failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_templ_cache_tmpl#entry_create_failures VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmpl#entry_create_failures}
  */
  readonly entryCreateFailures?: number;
  /**
  * Enable automatic packet-capture for header_save_error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_templ_cache_tmpl#header_save_error VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmpl#header_save_error}
  */
  readonly headerSaveError?: number;
  /**
  * Enable automatic packet-capture for slbTemplateCacheNcReqHeader, help nc_req_header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_templ_cache_tmpl#nc_req_header VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmpl#nc_req_header}
  */
  readonly ncReqHeader?: number;
  /**
  * Enable automatic packet-capture for slbTemplateCacheNcResHeader, help nc_res_header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_templ_cache_tmpl#nc_res_header VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmpl#nc_res_header}
  */
  readonly ncResHeader?: number;
  /**
  * Enable automatic packet-capture for slbTemplateCacheRvFailure, help rv_failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_templ_cache_tmpl#rv_failure VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmpl#rv_failure}
  */
  readonly rvFailure?: number;
  /**
  * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_templ_cache_tmpl#threshold_exceeded_by VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmpl#threshold_exceeded_by}
  */
  readonly thresholdExceededBy?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_templ_cache_tmpl#uuid VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmpl#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsRateToTerraform(struct?: VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsRateOutputReference | VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsRate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_toobig: cdktf.numberToTerraform(struct!.contentToobig),
    content_toosmall: cdktf.numberToTerraform(struct!.contentToosmall),
    duration: cdktf.numberToTerraform(struct!.duration),
    entry_create_failures: cdktf.numberToTerraform(struct!.entryCreateFailures),
    header_save_error: cdktf.numberToTerraform(struct!.headerSaveError),
    nc_req_header: cdktf.numberToTerraform(struct!.ncReqHeader),
    nc_res_header: cdktf.numberToTerraform(struct!.ncResHeader),
    rv_failure: cdktf.numberToTerraform(struct!.rvFailure),
    threshold_exceeded_by: cdktf.numberToTerraform(struct!.thresholdExceededBy),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsRateToHclTerraform(struct?: VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsRateOutputReference | VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsRate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content_toobig: {
      value: cdktf.numberToHclTerraform(struct!.contentToobig),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    content_toosmall: {
      value: cdktf.numberToHclTerraform(struct!.contentToosmall),
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
    entry_create_failures: {
      value: cdktf.numberToHclTerraform(struct!.entryCreateFailures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    header_save_error: {
      value: cdktf.numberToHclTerraform(struct!.headerSaveError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nc_req_header: {
      value: cdktf.numberToHclTerraform(struct!.ncReqHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nc_res_header: {
      value: cdktf.numberToHclTerraform(struct!.ncResHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rv_failure: {
      value: cdktf.numberToHclTerraform(struct!.rvFailure),
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

export class VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsRateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsRate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentToobig !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentToobig = this._contentToobig;
    }
    if (this._contentToosmall !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentToosmall = this._contentToosmall;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._entryCreateFailures !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryCreateFailures = this._entryCreateFailures;
    }
    if (this._headerSaveError !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerSaveError = this._headerSaveError;
    }
    if (this._ncReqHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.ncReqHeader = this._ncReqHeader;
    }
    if (this._ncResHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.ncResHeader = this._ncResHeader;
    }
    if (this._rvFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.rvFailure = this._rvFailure;
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

  public set internalValue(value: VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsRate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contentToobig = undefined;
      this._contentToosmall = undefined;
      this._duration = undefined;
      this._entryCreateFailures = undefined;
      this._headerSaveError = undefined;
      this._ncReqHeader = undefined;
      this._ncResHeader = undefined;
      this._rvFailure = undefined;
      this._thresholdExceededBy = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contentToobig = value.contentToobig;
      this._contentToosmall = value.contentToosmall;
      this._duration = value.duration;
      this._entryCreateFailures = value.entryCreateFailures;
      this._headerSaveError = value.headerSaveError;
      this._ncReqHeader = value.ncReqHeader;
      this._ncResHeader = value.ncResHeader;
      this._rvFailure = value.rvFailure;
      this._thresholdExceededBy = value.thresholdExceededBy;
      this._uuid = value.uuid;
    }
  }

  // content_toobig - computed: false, optional: true, required: false
  private _contentToobig?: number; 
  public get contentToobig() {
    return this.getNumberAttribute('content_toobig');
  }
  public set contentToobig(value: number) {
    this._contentToobig = value;
  }
  public resetContentToobig() {
    this._contentToobig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentToobigInput() {
    return this._contentToobig;
  }

  // content_toosmall - computed: false, optional: true, required: false
  private _contentToosmall?: number; 
  public get contentToosmall() {
    return this.getNumberAttribute('content_toosmall');
  }
  public set contentToosmall(value: number) {
    this._contentToosmall = value;
  }
  public resetContentToosmall() {
    this._contentToosmall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentToosmallInput() {
    return this._contentToosmall;
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

  // entry_create_failures - computed: false, optional: true, required: false
  private _entryCreateFailures?: number; 
  public get entryCreateFailures() {
    return this.getNumberAttribute('entry_create_failures');
  }
  public set entryCreateFailures(value: number) {
    this._entryCreateFailures = value;
  }
  public resetEntryCreateFailures() {
    this._entryCreateFailures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryCreateFailuresInput() {
    return this._entryCreateFailures;
  }

  // header_save_error - computed: false, optional: true, required: false
  private _headerSaveError?: number; 
  public get headerSaveError() {
    return this.getNumberAttribute('header_save_error');
  }
  public set headerSaveError(value: number) {
    this._headerSaveError = value;
  }
  public resetHeaderSaveError() {
    this._headerSaveError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerSaveErrorInput() {
    return this._headerSaveError;
  }

  // nc_req_header - computed: false, optional: true, required: false
  private _ncReqHeader?: number; 
  public get ncReqHeader() {
    return this.getNumberAttribute('nc_req_header');
  }
  public set ncReqHeader(value: number) {
    this._ncReqHeader = value;
  }
  public resetNcReqHeader() {
    this._ncReqHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ncReqHeaderInput() {
    return this._ncReqHeader;
  }

  // nc_res_header - computed: false, optional: true, required: false
  private _ncResHeader?: number; 
  public get ncResHeader() {
    return this.getNumberAttribute('nc_res_header');
  }
  public set ncResHeader(value: number) {
    this._ncResHeader = value;
  }
  public resetNcResHeader() {
    this._ncResHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ncResHeaderInput() {
    return this._ncResHeader;
  }

  // rv_failure - computed: false, optional: true, required: false
  private _rvFailure?: number; 
  public get rvFailure() {
    return this.getNumberAttribute('rv_failure');
  }
  public set rvFailure(value: number) {
    this._rvFailure = value;
  }
  public resetRvFailure() {
    this._rvFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rvFailureInput() {
    return this._rvFailure;
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
export interface VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsSeverity {
  /**
  * Enable packet capture on all drop counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_templ_cache_tmpl#drop VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmpl#drop}
  */
  readonly drop?: number;
  /**
  * Enable packet capture on all alert drop counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_templ_cache_tmpl#drop_alert VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmpl#drop_alert}
  */
  readonly dropAlert?: number;
  /**
  * Enable packet capture on all critical drop counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_templ_cache_tmpl#drop_critical VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmpl#drop_critical}
  */
  readonly dropCritical?: number;
  /**
  * Enable packet capture on all warning drop counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_templ_cache_tmpl#drop_warning VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmpl#drop_warning}
  */
  readonly dropWarning?: number;
  /**
  * Enable packet capture on all error counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_templ_cache_tmpl#error VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmpl#error}
  */
  readonly error?: number;
  /**
  * Enable packet capture on all alert error counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_templ_cache_tmpl#error_alert VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmpl#error_alert}
  */
  readonly errorAlert?: number;
  /**
  * Enable packet capture on all critical error counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_templ_cache_tmpl#error_critical VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmpl#error_critical}
  */
  readonly errorCritical?: number;
  /**
  * Enable packet capture on all warning error counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_templ_cache_tmpl#error_warning VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmpl#error_warning}
  */
  readonly errorWarning?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_templ_cache_tmpl#uuid VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmpl#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsSeverityToTerraform(struct?: VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsSeverityOutputReference | VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsSeverity): any {
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


export function visibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsSeverityToHclTerraform(struct?: VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsSeverityOutputReference | VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsSeverity): any {
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

export class VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsSeverityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsSeverity | undefined {
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

  public set internalValue(value: VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsSeverity | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_templ_cache_tmpl thunder_visibility_packet_capture_object_templates_slb_templ_cache_tmpl}
*/
export class VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmpl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_object_templates_slb_templ_cache_tmpl";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmpl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmpl to import
  * @param importFromId The id of the existing VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmpl that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_templ_cache_tmpl#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmpl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_object_templates_slb_templ_cache_tmpl", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_templ_cache_tmpl thunder_visibility_packet_capture_object_templates_slb_templ_cache_tmpl} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_object_templates_slb_templ_cache_tmpl',
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
  private _triggerStatsInc = new VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsIncOutputReference(this, "trigger_stats_inc");
  public get triggerStatsInc() {
    return this._triggerStatsInc;
  }
  public putTriggerStatsInc(value: VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsInc) {
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
  private _triggerStatsRate = new VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsRateOutputReference(this, "trigger_stats_rate");
  public get triggerStatsRate() {
    return this._triggerStatsRate;
  }
  public putTriggerStatsRate(value: VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsRate) {
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
  private _triggerStatsSeverity = new VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsSeverityOutputReference(this, "trigger_stats_severity");
  public get triggerStatsSeverity() {
    return this._triggerStatsSeverity;
  }
  public putTriggerStatsSeverity(value: VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsSeverity) {
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
      trigger_stats_inc: visibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsIncToTerraform(this._triggerStatsInc.internalValue),
      trigger_stats_rate: visibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsRateToTerraform(this._triggerStatsRate.internalValue),
      trigger_stats_severity: visibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsSeverityToTerraform(this._triggerStatsSeverity.internalValue),
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
        value: visibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsIncToHclTerraform(this._triggerStatsInc.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsIncList",
      },
      trigger_stats_rate: {
        value: visibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsRateToHclTerraform(this._triggerStatsRate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsRateList",
      },
      trigger_stats_severity: {
        value: visibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsSeverityToHclTerraform(this._triggerStatsSeverity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsSeverityList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
