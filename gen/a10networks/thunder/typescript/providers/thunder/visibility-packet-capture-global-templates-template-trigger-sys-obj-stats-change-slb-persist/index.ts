// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist#id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Template_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist#template_name VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistA#template_name}
  */
  readonly templateName: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistA#uuid}
  */
  readonly uuid?: string;
  /**
  * trigger_stats_inc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist#trigger_stats_inc VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistA#trigger_stats_inc}
  */
  readonly triggerStatsInc?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistTriggerStatsIncA;
  /**
  * trigger_stats_rate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist#trigger_stats_rate VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistA#trigger_stats_rate}
  */
  readonly triggerStatsRate?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistTriggerStatsRateA;
}
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistTriggerStatsIncA {
  /**
  * Enable automatic packet-capture for Invalid persist cookie
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist#cookie_invalid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistA#cookie_invalid}
  */
  readonly cookieInvalid?: number;
  /**
  * Enable automatic packet-capture for Persist cookie not found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist#cookie_not_found VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistA#cookie_not_found}
  */
  readonly cookieNotFound?: number;
  /**
  * Enable automatic packet-capture for Cookie persist fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist#cookie_persist_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistA#cookie_persist_fail}
  */
  readonly cookiePersistFail?: number;
  /**
  * Enable automatic packet-capture for Client SSL SID not found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist#cssl_sid_not_found VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistA#cssl_sid_not_found}
  */
  readonly csslSidNotFound?: number;
  /**
  * Enable automatic packet-capture for Client SSL SID not match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist#cssl_sid_not_match VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistA#cssl_sid_not_match}
  */
  readonly csslSidNotMatch?: number;
  /**
  * Enable automatic packet-capture for DST IP persist fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist#dst_ip_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistA#dst_ip_fail}
  */
  readonly dstIpFail?: number;
  /**
  * Enable automatic packet-capture for DST IP hash persist fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist#dst_ip_hash_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistA#dst_ip_hash_fail}
  */
  readonly dstIpHashFail?: number;
  /**
  * Enable automatic packet-capture for DST IP new sess fail (c)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist#dst_ip_new_sess_cache_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistA#dst_ip_new_sess_cache_fail}
  */
  readonly dstIpNewSessCacheFail?: number;
  /**
  * Enable automatic packet-capture for DST IP new sess fail (s)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist#dst_ip_new_sess_sel_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistA#dst_ip_new_sess_sel_fail}
  */
  readonly dstIpNewSessSelFail?: number;
  /**
  * Enable automatic packet-capture for Hash tbl create fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist#hash_tbl_create_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistA#hash_tbl_create_fail}
  */
  readonly hashTblCreateFail?: number;
  /**
  * Enable automatic packet-capture for Hash tbl reset (add/del)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist#hash_tbl_rst_adddel VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistA#hash_tbl_rst_adddel}
  */
  readonly hashTblRstAdddel?: number;
  /**
  * Enable automatic packet-capture for Hash tbl reset (up/down)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist#hash_tbl_rst_updown VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistA#hash_tbl_rst_updown}
  */
  readonly hashTblRstUpdown?: number;
  /**
  * Enable automatic packet-capture for Hash tbl lock fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist#hash_tbl_trylock_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistA#hash_tbl_trylock_fail}
  */
  readonly hashTblTrylockFail?: number;
  /**
  * Enable automatic packet-capture for Header hash persist fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist#header_hash_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistA#header_hash_fail}
  */
  readonly headerHashFail?: number;
  /**
  * Enable automatic packet-capture for SRC IP persist fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist#src_ip_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistA#src_ip_fail}
  */
  readonly srcIpFail?: number;
  /**
  * Enable automatic packet-capture for SRC IP hash persist fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist#src_ip_hash_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistA#src_ip_hash_fail}
  */
  readonly srcIpHashFail?: number;
  /**
  * Enable automatic packet-capture for SRC IP new sess fail (c)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist#src_ip_new_sess_cache_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistA#src_ip_new_sess_cache_fail}
  */
  readonly srcIpNewSessCacheFail?: number;
  /**
  * Enable automatic packet-capture for SRC IP new sess fail (s)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist#src_ip_new_sess_sel_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistA#src_ip_new_sess_sel_fail}
  */
  readonly srcIpNewSessSelFail?: number;
  /**
  * Enable automatic packet-capture for SSL SID persist fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist#ssl_sid_persist_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistA#ssl_sid_persist_fail}
  */
  readonly sslSidPersistFail?: number;
  /**
  * Enable automatic packet-capture for Create SSL SID fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist#ssl_sid_session_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistA#ssl_sid_session_fail}
  */
  readonly sslSidSessionFail?: number;
  /**
  * Enable automatic packet-capture for Server SSL SID not found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist#sssl_sid_not_found VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistA#sssl_sid_not_found}
  */
  readonly ssslSidNotFound?: number;
  /**
  * Enable automatic packet-capture for Server SSL SID not match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist#sssl_sid_not_match VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistA#sssl_sid_not_match}
  */
  readonly ssslSidNotMatch?: number;
  /**
  * Enable automatic packet-capture for URL hash persist fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist#url_hash_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistA#url_hash_fail}
  */
  readonly urlHashFail?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistA#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistTriggerStatsIncAToTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistTriggerStatsIncAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistTriggerStatsIncA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie_invalid: cdktf.numberToTerraform(struct!.cookieInvalid),
    cookie_not_found: cdktf.numberToTerraform(struct!.cookieNotFound),
    cookie_persist_fail: cdktf.numberToTerraform(struct!.cookiePersistFail),
    cssl_sid_not_found: cdktf.numberToTerraform(struct!.csslSidNotFound),
    cssl_sid_not_match: cdktf.numberToTerraform(struct!.csslSidNotMatch),
    dst_ip_fail: cdktf.numberToTerraform(struct!.dstIpFail),
    dst_ip_hash_fail: cdktf.numberToTerraform(struct!.dstIpHashFail),
    dst_ip_new_sess_cache_fail: cdktf.numberToTerraform(struct!.dstIpNewSessCacheFail),
    dst_ip_new_sess_sel_fail: cdktf.numberToTerraform(struct!.dstIpNewSessSelFail),
    hash_tbl_create_fail: cdktf.numberToTerraform(struct!.hashTblCreateFail),
    hash_tbl_rst_adddel: cdktf.numberToTerraform(struct!.hashTblRstAdddel),
    hash_tbl_rst_updown: cdktf.numberToTerraform(struct!.hashTblRstUpdown),
    hash_tbl_trylock_fail: cdktf.numberToTerraform(struct!.hashTblTrylockFail),
    header_hash_fail: cdktf.numberToTerraform(struct!.headerHashFail),
    src_ip_fail: cdktf.numberToTerraform(struct!.srcIpFail),
    src_ip_hash_fail: cdktf.numberToTerraform(struct!.srcIpHashFail),
    src_ip_new_sess_cache_fail: cdktf.numberToTerraform(struct!.srcIpNewSessCacheFail),
    src_ip_new_sess_sel_fail: cdktf.numberToTerraform(struct!.srcIpNewSessSelFail),
    ssl_sid_persist_fail: cdktf.numberToTerraform(struct!.sslSidPersistFail),
    ssl_sid_session_fail: cdktf.numberToTerraform(struct!.sslSidSessionFail),
    sssl_sid_not_found: cdktf.numberToTerraform(struct!.ssslSidNotFound),
    sssl_sid_not_match: cdktf.numberToTerraform(struct!.ssslSidNotMatch),
    url_hash_fail: cdktf.numberToTerraform(struct!.urlHashFail),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistTriggerStatsIncAToHclTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistTriggerStatsIncAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistTriggerStatsIncA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie_invalid: {
      value: cdktf.numberToHclTerraform(struct!.cookieInvalid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cookie_not_found: {
      value: cdktf.numberToHclTerraform(struct!.cookieNotFound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cookie_persist_fail: {
      value: cdktf.numberToHclTerraform(struct!.cookiePersistFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cssl_sid_not_found: {
      value: cdktf.numberToHclTerraform(struct!.csslSidNotFound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cssl_sid_not_match: {
      value: cdktf.numberToHclTerraform(struct!.csslSidNotMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_ip_fail: {
      value: cdktf.numberToHclTerraform(struct!.dstIpFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_ip_hash_fail: {
      value: cdktf.numberToHclTerraform(struct!.dstIpHashFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_ip_new_sess_cache_fail: {
      value: cdktf.numberToHclTerraform(struct!.dstIpNewSessCacheFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_ip_new_sess_sel_fail: {
      value: cdktf.numberToHclTerraform(struct!.dstIpNewSessSelFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hash_tbl_create_fail: {
      value: cdktf.numberToHclTerraform(struct!.hashTblCreateFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hash_tbl_rst_adddel: {
      value: cdktf.numberToHclTerraform(struct!.hashTblRstAdddel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hash_tbl_rst_updown: {
      value: cdktf.numberToHclTerraform(struct!.hashTblRstUpdown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hash_tbl_trylock_fail: {
      value: cdktf.numberToHclTerraform(struct!.hashTblTrylockFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    header_hash_fail: {
      value: cdktf.numberToHclTerraform(struct!.headerHashFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_ip_fail: {
      value: cdktf.numberToHclTerraform(struct!.srcIpFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_ip_hash_fail: {
      value: cdktf.numberToHclTerraform(struct!.srcIpHashFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_ip_new_sess_cache_fail: {
      value: cdktf.numberToHclTerraform(struct!.srcIpNewSessCacheFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_ip_new_sess_sel_fail: {
      value: cdktf.numberToHclTerraform(struct!.srcIpNewSessSelFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_sid_persist_fail: {
      value: cdktf.numberToHclTerraform(struct!.sslSidPersistFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_sid_session_fail: {
      value: cdktf.numberToHclTerraform(struct!.sslSidSessionFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sssl_sid_not_found: {
      value: cdktf.numberToHclTerraform(struct!.ssslSidNotFound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sssl_sid_not_match: {
      value: cdktf.numberToHclTerraform(struct!.ssslSidNotMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    url_hash_fail: {
      value: cdktf.numberToHclTerraform(struct!.urlHashFail),
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

export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistTriggerStatsIncAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistTriggerStatsIncA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookieInvalid !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieInvalid = this._cookieInvalid;
    }
    if (this._cookieNotFound !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieNotFound = this._cookieNotFound;
    }
    if (this._cookiePersistFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookiePersistFail = this._cookiePersistFail;
    }
    if (this._csslSidNotFound !== undefined) {
      hasAnyValues = true;
      internalValueResult.csslSidNotFound = this._csslSidNotFound;
    }
    if (this._csslSidNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.csslSidNotMatch = this._csslSidNotMatch;
    }
    if (this._dstIpFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIpFail = this._dstIpFail;
    }
    if (this._dstIpHashFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIpHashFail = this._dstIpHashFail;
    }
    if (this._dstIpNewSessCacheFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIpNewSessCacheFail = this._dstIpNewSessCacheFail;
    }
    if (this._dstIpNewSessSelFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIpNewSessSelFail = this._dstIpNewSessSelFail;
    }
    if (this._hashTblCreateFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashTblCreateFail = this._hashTblCreateFail;
    }
    if (this._hashTblRstAdddel !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashTblRstAdddel = this._hashTblRstAdddel;
    }
    if (this._hashTblRstUpdown !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashTblRstUpdown = this._hashTblRstUpdown;
    }
    if (this._hashTblTrylockFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashTblTrylockFail = this._hashTblTrylockFail;
    }
    if (this._headerHashFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerHashFail = this._headerHashFail;
    }
    if (this._srcIpFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIpFail = this._srcIpFail;
    }
    if (this._srcIpHashFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIpHashFail = this._srcIpHashFail;
    }
    if (this._srcIpNewSessCacheFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIpNewSessCacheFail = this._srcIpNewSessCacheFail;
    }
    if (this._srcIpNewSessSelFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIpNewSessSelFail = this._srcIpNewSessSelFail;
    }
    if (this._sslSidPersistFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslSidPersistFail = this._sslSidPersistFail;
    }
    if (this._sslSidSessionFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslSidSessionFail = this._sslSidSessionFail;
    }
    if (this._ssslSidNotFound !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssslSidNotFound = this._ssslSidNotFound;
    }
    if (this._ssslSidNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssslSidNotMatch = this._ssslSidNotMatch;
    }
    if (this._urlHashFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlHashFail = this._urlHashFail;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistTriggerStatsIncA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cookieInvalid = undefined;
      this._cookieNotFound = undefined;
      this._cookiePersistFail = undefined;
      this._csslSidNotFound = undefined;
      this._csslSidNotMatch = undefined;
      this._dstIpFail = undefined;
      this._dstIpHashFail = undefined;
      this._dstIpNewSessCacheFail = undefined;
      this._dstIpNewSessSelFail = undefined;
      this._hashTblCreateFail = undefined;
      this._hashTblRstAdddel = undefined;
      this._hashTblRstUpdown = undefined;
      this._hashTblTrylockFail = undefined;
      this._headerHashFail = undefined;
      this._srcIpFail = undefined;
      this._srcIpHashFail = undefined;
      this._srcIpNewSessCacheFail = undefined;
      this._srcIpNewSessSelFail = undefined;
      this._sslSidPersistFail = undefined;
      this._sslSidSessionFail = undefined;
      this._ssslSidNotFound = undefined;
      this._ssslSidNotMatch = undefined;
      this._urlHashFail = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cookieInvalid = value.cookieInvalid;
      this._cookieNotFound = value.cookieNotFound;
      this._cookiePersistFail = value.cookiePersistFail;
      this._csslSidNotFound = value.csslSidNotFound;
      this._csslSidNotMatch = value.csslSidNotMatch;
      this._dstIpFail = value.dstIpFail;
      this._dstIpHashFail = value.dstIpHashFail;
      this._dstIpNewSessCacheFail = value.dstIpNewSessCacheFail;
      this._dstIpNewSessSelFail = value.dstIpNewSessSelFail;
      this._hashTblCreateFail = value.hashTblCreateFail;
      this._hashTblRstAdddel = value.hashTblRstAdddel;
      this._hashTblRstUpdown = value.hashTblRstUpdown;
      this._hashTblTrylockFail = value.hashTblTrylockFail;
      this._headerHashFail = value.headerHashFail;
      this._srcIpFail = value.srcIpFail;
      this._srcIpHashFail = value.srcIpHashFail;
      this._srcIpNewSessCacheFail = value.srcIpNewSessCacheFail;
      this._srcIpNewSessSelFail = value.srcIpNewSessSelFail;
      this._sslSidPersistFail = value.sslSidPersistFail;
      this._sslSidSessionFail = value.sslSidSessionFail;
      this._ssslSidNotFound = value.ssslSidNotFound;
      this._ssslSidNotMatch = value.ssslSidNotMatch;
      this._urlHashFail = value.urlHashFail;
      this._uuid = value.uuid;
    }
  }

  // cookie_invalid - computed: false, optional: true, required: false
  private _cookieInvalid?: number; 
  public get cookieInvalid() {
    return this.getNumberAttribute('cookie_invalid');
  }
  public set cookieInvalid(value: number) {
    this._cookieInvalid = value;
  }
  public resetCookieInvalid() {
    this._cookieInvalid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieInvalidInput() {
    return this._cookieInvalid;
  }

  // cookie_not_found - computed: false, optional: true, required: false
  private _cookieNotFound?: number; 
  public get cookieNotFound() {
    return this.getNumberAttribute('cookie_not_found');
  }
  public set cookieNotFound(value: number) {
    this._cookieNotFound = value;
  }
  public resetCookieNotFound() {
    this._cookieNotFound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieNotFoundInput() {
    return this._cookieNotFound;
  }

  // cookie_persist_fail - computed: false, optional: true, required: false
  private _cookiePersistFail?: number; 
  public get cookiePersistFail() {
    return this.getNumberAttribute('cookie_persist_fail');
  }
  public set cookiePersistFail(value: number) {
    this._cookiePersistFail = value;
  }
  public resetCookiePersistFail() {
    this._cookiePersistFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookiePersistFailInput() {
    return this._cookiePersistFail;
  }

  // cssl_sid_not_found - computed: false, optional: true, required: false
  private _csslSidNotFound?: number; 
  public get csslSidNotFound() {
    return this.getNumberAttribute('cssl_sid_not_found');
  }
  public set csslSidNotFound(value: number) {
    this._csslSidNotFound = value;
  }
  public resetCsslSidNotFound() {
    this._csslSidNotFound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csslSidNotFoundInput() {
    return this._csslSidNotFound;
  }

  // cssl_sid_not_match - computed: false, optional: true, required: false
  private _csslSidNotMatch?: number; 
  public get csslSidNotMatch() {
    return this.getNumberAttribute('cssl_sid_not_match');
  }
  public set csslSidNotMatch(value: number) {
    this._csslSidNotMatch = value;
  }
  public resetCsslSidNotMatch() {
    this._csslSidNotMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csslSidNotMatchInput() {
    return this._csslSidNotMatch;
  }

  // dst_ip_fail - computed: false, optional: true, required: false
  private _dstIpFail?: number; 
  public get dstIpFail() {
    return this.getNumberAttribute('dst_ip_fail');
  }
  public set dstIpFail(value: number) {
    this._dstIpFail = value;
  }
  public resetDstIpFail() {
    this._dstIpFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIpFailInput() {
    return this._dstIpFail;
  }

  // dst_ip_hash_fail - computed: false, optional: true, required: false
  private _dstIpHashFail?: number; 
  public get dstIpHashFail() {
    return this.getNumberAttribute('dst_ip_hash_fail');
  }
  public set dstIpHashFail(value: number) {
    this._dstIpHashFail = value;
  }
  public resetDstIpHashFail() {
    this._dstIpHashFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIpHashFailInput() {
    return this._dstIpHashFail;
  }

  // dst_ip_new_sess_cache_fail - computed: false, optional: true, required: false
  private _dstIpNewSessCacheFail?: number; 
  public get dstIpNewSessCacheFail() {
    return this.getNumberAttribute('dst_ip_new_sess_cache_fail');
  }
  public set dstIpNewSessCacheFail(value: number) {
    this._dstIpNewSessCacheFail = value;
  }
  public resetDstIpNewSessCacheFail() {
    this._dstIpNewSessCacheFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIpNewSessCacheFailInput() {
    return this._dstIpNewSessCacheFail;
  }

  // dst_ip_new_sess_sel_fail - computed: false, optional: true, required: false
  private _dstIpNewSessSelFail?: number; 
  public get dstIpNewSessSelFail() {
    return this.getNumberAttribute('dst_ip_new_sess_sel_fail');
  }
  public set dstIpNewSessSelFail(value: number) {
    this._dstIpNewSessSelFail = value;
  }
  public resetDstIpNewSessSelFail() {
    this._dstIpNewSessSelFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIpNewSessSelFailInput() {
    return this._dstIpNewSessSelFail;
  }

  // hash_tbl_create_fail - computed: false, optional: true, required: false
  private _hashTblCreateFail?: number; 
  public get hashTblCreateFail() {
    return this.getNumberAttribute('hash_tbl_create_fail');
  }
  public set hashTblCreateFail(value: number) {
    this._hashTblCreateFail = value;
  }
  public resetHashTblCreateFail() {
    this._hashTblCreateFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashTblCreateFailInput() {
    return this._hashTblCreateFail;
  }

  // hash_tbl_rst_adddel - computed: false, optional: true, required: false
  private _hashTblRstAdddel?: number; 
  public get hashTblRstAdddel() {
    return this.getNumberAttribute('hash_tbl_rst_adddel');
  }
  public set hashTblRstAdddel(value: number) {
    this._hashTblRstAdddel = value;
  }
  public resetHashTblRstAdddel() {
    this._hashTblRstAdddel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashTblRstAdddelInput() {
    return this._hashTblRstAdddel;
  }

  // hash_tbl_rst_updown - computed: false, optional: true, required: false
  private _hashTblRstUpdown?: number; 
  public get hashTblRstUpdown() {
    return this.getNumberAttribute('hash_tbl_rst_updown');
  }
  public set hashTblRstUpdown(value: number) {
    this._hashTblRstUpdown = value;
  }
  public resetHashTblRstUpdown() {
    this._hashTblRstUpdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashTblRstUpdownInput() {
    return this._hashTblRstUpdown;
  }

  // hash_tbl_trylock_fail - computed: false, optional: true, required: false
  private _hashTblTrylockFail?: number; 
  public get hashTblTrylockFail() {
    return this.getNumberAttribute('hash_tbl_trylock_fail');
  }
  public set hashTblTrylockFail(value: number) {
    this._hashTblTrylockFail = value;
  }
  public resetHashTblTrylockFail() {
    this._hashTblTrylockFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashTblTrylockFailInput() {
    return this._hashTblTrylockFail;
  }

  // header_hash_fail - computed: false, optional: true, required: false
  private _headerHashFail?: number; 
  public get headerHashFail() {
    return this.getNumberAttribute('header_hash_fail');
  }
  public set headerHashFail(value: number) {
    this._headerHashFail = value;
  }
  public resetHeaderHashFail() {
    this._headerHashFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerHashFailInput() {
    return this._headerHashFail;
  }

  // src_ip_fail - computed: false, optional: true, required: false
  private _srcIpFail?: number; 
  public get srcIpFail() {
    return this.getNumberAttribute('src_ip_fail');
  }
  public set srcIpFail(value: number) {
    this._srcIpFail = value;
  }
  public resetSrcIpFail() {
    this._srcIpFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpFailInput() {
    return this._srcIpFail;
  }

  // src_ip_hash_fail - computed: false, optional: true, required: false
  private _srcIpHashFail?: number; 
  public get srcIpHashFail() {
    return this.getNumberAttribute('src_ip_hash_fail');
  }
  public set srcIpHashFail(value: number) {
    this._srcIpHashFail = value;
  }
  public resetSrcIpHashFail() {
    this._srcIpHashFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpHashFailInput() {
    return this._srcIpHashFail;
  }

  // src_ip_new_sess_cache_fail - computed: false, optional: true, required: false
  private _srcIpNewSessCacheFail?: number; 
  public get srcIpNewSessCacheFail() {
    return this.getNumberAttribute('src_ip_new_sess_cache_fail');
  }
  public set srcIpNewSessCacheFail(value: number) {
    this._srcIpNewSessCacheFail = value;
  }
  public resetSrcIpNewSessCacheFail() {
    this._srcIpNewSessCacheFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpNewSessCacheFailInput() {
    return this._srcIpNewSessCacheFail;
  }

  // src_ip_new_sess_sel_fail - computed: false, optional: true, required: false
  private _srcIpNewSessSelFail?: number; 
  public get srcIpNewSessSelFail() {
    return this.getNumberAttribute('src_ip_new_sess_sel_fail');
  }
  public set srcIpNewSessSelFail(value: number) {
    this._srcIpNewSessSelFail = value;
  }
  public resetSrcIpNewSessSelFail() {
    this._srcIpNewSessSelFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpNewSessSelFailInput() {
    return this._srcIpNewSessSelFail;
  }

  // ssl_sid_persist_fail - computed: false, optional: true, required: false
  private _sslSidPersistFail?: number; 
  public get sslSidPersistFail() {
    return this.getNumberAttribute('ssl_sid_persist_fail');
  }
  public set sslSidPersistFail(value: number) {
    this._sslSidPersistFail = value;
  }
  public resetSslSidPersistFail() {
    this._sslSidPersistFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslSidPersistFailInput() {
    return this._sslSidPersistFail;
  }

  // ssl_sid_session_fail - computed: false, optional: true, required: false
  private _sslSidSessionFail?: number; 
  public get sslSidSessionFail() {
    return this.getNumberAttribute('ssl_sid_session_fail');
  }
  public set sslSidSessionFail(value: number) {
    this._sslSidSessionFail = value;
  }
  public resetSslSidSessionFail() {
    this._sslSidSessionFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslSidSessionFailInput() {
    return this._sslSidSessionFail;
  }

  // sssl_sid_not_found - computed: false, optional: true, required: false
  private _ssslSidNotFound?: number; 
  public get ssslSidNotFound() {
    return this.getNumberAttribute('sssl_sid_not_found');
  }
  public set ssslSidNotFound(value: number) {
    this._ssslSidNotFound = value;
  }
  public resetSsslSidNotFound() {
    this._ssslSidNotFound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssslSidNotFoundInput() {
    return this._ssslSidNotFound;
  }

  // sssl_sid_not_match - computed: false, optional: true, required: false
  private _ssslSidNotMatch?: number; 
  public get ssslSidNotMatch() {
    return this.getNumberAttribute('sssl_sid_not_match');
  }
  public set ssslSidNotMatch(value: number) {
    this._ssslSidNotMatch = value;
  }
  public resetSsslSidNotMatch() {
    this._ssslSidNotMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssslSidNotMatchInput() {
    return this._ssslSidNotMatch;
  }

  // url_hash_fail - computed: false, optional: true, required: false
  private _urlHashFail?: number; 
  public get urlHashFail() {
    return this.getNumberAttribute('url_hash_fail');
  }
  public set urlHashFail(value: number) {
    this._urlHashFail = value;
  }
  public resetUrlHashFail() {
    this._urlHashFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlHashFailInput() {
    return this._urlHashFail;
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
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistTriggerStatsRateA {
  /**
  * Enable automatic packet-capture for Invalid persist cookie
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist#cookie_invalid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistA#cookie_invalid}
  */
  readonly cookieInvalid?: number;
  /**
  * Enable automatic packet-capture for Persist cookie not found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist#cookie_not_found VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistA#cookie_not_found}
  */
  readonly cookieNotFound?: number;
  /**
  * Enable automatic packet-capture for Cookie persist fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist#cookie_persist_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistA#cookie_persist_fail}
  */
  readonly cookiePersistFail?: number;
  /**
  * Enable automatic packet-capture for Client SSL SID not found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist#cssl_sid_not_found VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistA#cssl_sid_not_found}
  */
  readonly csslSidNotFound?: number;
  /**
  * Enable automatic packet-capture for Client SSL SID not match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist#cssl_sid_not_match VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistA#cssl_sid_not_match}
  */
  readonly csslSidNotMatch?: number;
  /**
  * Enable automatic packet-capture for DST IP persist fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist#dst_ip_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistA#dst_ip_fail}
  */
  readonly dstIpFail?: number;
  /**
  * Enable automatic packet-capture for DST IP hash persist fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist#dst_ip_hash_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistA#dst_ip_hash_fail}
  */
  readonly dstIpHashFail?: number;
  /**
  * Enable automatic packet-capture for DST IP new sess fail (c)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist#dst_ip_new_sess_cache_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistA#dst_ip_new_sess_cache_fail}
  */
  readonly dstIpNewSessCacheFail?: number;
  /**
  * Enable automatic packet-capture for DST IP new sess fail (s)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist#dst_ip_new_sess_sel_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistA#dst_ip_new_sess_sel_fail}
  */
  readonly dstIpNewSessSelFail?: number;
  /**
  * Time in seconds to look for the anomaly, default is 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist#duration VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistA#duration}
  */
  readonly duration?: number;
  /**
  * Enable automatic packet-capture for Hash tbl create fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist#hash_tbl_create_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistA#hash_tbl_create_fail}
  */
  readonly hashTblCreateFail?: number;
  /**
  * Enable automatic packet-capture for Hash tbl reset (add/del)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist#hash_tbl_rst_adddel VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistA#hash_tbl_rst_adddel}
  */
  readonly hashTblRstAdddel?: number;
  /**
  * Enable automatic packet-capture for Hash tbl reset (up/down)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist#hash_tbl_rst_updown VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistA#hash_tbl_rst_updown}
  */
  readonly hashTblRstUpdown?: number;
  /**
  * Enable automatic packet-capture for Hash tbl lock fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist#hash_tbl_trylock_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistA#hash_tbl_trylock_fail}
  */
  readonly hashTblTrylockFail?: number;
  /**
  * Enable automatic packet-capture for Header hash persist fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist#header_hash_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistA#header_hash_fail}
  */
  readonly headerHashFail?: number;
  /**
  * Enable automatic packet-capture for SRC IP persist fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist#src_ip_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistA#src_ip_fail}
  */
  readonly srcIpFail?: number;
  /**
  * Enable automatic packet-capture for SRC IP hash persist fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist#src_ip_hash_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistA#src_ip_hash_fail}
  */
  readonly srcIpHashFail?: number;
  /**
  * Enable automatic packet-capture for SRC IP new sess fail (c)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist#src_ip_new_sess_cache_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistA#src_ip_new_sess_cache_fail}
  */
  readonly srcIpNewSessCacheFail?: number;
  /**
  * Enable automatic packet-capture for SRC IP new sess fail (s)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist#src_ip_new_sess_sel_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistA#src_ip_new_sess_sel_fail}
  */
  readonly srcIpNewSessSelFail?: number;
  /**
  * Enable automatic packet-capture for SSL SID persist fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist#ssl_sid_persist_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistA#ssl_sid_persist_fail}
  */
  readonly sslSidPersistFail?: number;
  /**
  * Enable automatic packet-capture for Create SSL SID fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist#ssl_sid_session_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistA#ssl_sid_session_fail}
  */
  readonly sslSidSessionFail?: number;
  /**
  * Enable automatic packet-capture for Server SSL SID not found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist#sssl_sid_not_found VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistA#sssl_sid_not_found}
  */
  readonly ssslSidNotFound?: number;
  /**
  * Enable automatic packet-capture for Server SSL SID not match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist#sssl_sid_not_match VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistA#sssl_sid_not_match}
  */
  readonly ssslSidNotMatch?: number;
  /**
  * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist#threshold_exceeded_by VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistA#threshold_exceeded_by}
  */
  readonly thresholdExceededBy?: number;
  /**
  * Enable automatic packet-capture for URL hash persist fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist#url_hash_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistA#url_hash_fail}
  */
  readonly urlHashFail?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistA#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistTriggerStatsRateAToTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistTriggerStatsRateAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistTriggerStatsRateA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie_invalid: cdktf.numberToTerraform(struct!.cookieInvalid),
    cookie_not_found: cdktf.numberToTerraform(struct!.cookieNotFound),
    cookie_persist_fail: cdktf.numberToTerraform(struct!.cookiePersistFail),
    cssl_sid_not_found: cdktf.numberToTerraform(struct!.csslSidNotFound),
    cssl_sid_not_match: cdktf.numberToTerraform(struct!.csslSidNotMatch),
    dst_ip_fail: cdktf.numberToTerraform(struct!.dstIpFail),
    dst_ip_hash_fail: cdktf.numberToTerraform(struct!.dstIpHashFail),
    dst_ip_new_sess_cache_fail: cdktf.numberToTerraform(struct!.dstIpNewSessCacheFail),
    dst_ip_new_sess_sel_fail: cdktf.numberToTerraform(struct!.dstIpNewSessSelFail),
    duration: cdktf.numberToTerraform(struct!.duration),
    hash_tbl_create_fail: cdktf.numberToTerraform(struct!.hashTblCreateFail),
    hash_tbl_rst_adddel: cdktf.numberToTerraform(struct!.hashTblRstAdddel),
    hash_tbl_rst_updown: cdktf.numberToTerraform(struct!.hashTblRstUpdown),
    hash_tbl_trylock_fail: cdktf.numberToTerraform(struct!.hashTblTrylockFail),
    header_hash_fail: cdktf.numberToTerraform(struct!.headerHashFail),
    src_ip_fail: cdktf.numberToTerraform(struct!.srcIpFail),
    src_ip_hash_fail: cdktf.numberToTerraform(struct!.srcIpHashFail),
    src_ip_new_sess_cache_fail: cdktf.numberToTerraform(struct!.srcIpNewSessCacheFail),
    src_ip_new_sess_sel_fail: cdktf.numberToTerraform(struct!.srcIpNewSessSelFail),
    ssl_sid_persist_fail: cdktf.numberToTerraform(struct!.sslSidPersistFail),
    ssl_sid_session_fail: cdktf.numberToTerraform(struct!.sslSidSessionFail),
    sssl_sid_not_found: cdktf.numberToTerraform(struct!.ssslSidNotFound),
    sssl_sid_not_match: cdktf.numberToTerraform(struct!.ssslSidNotMatch),
    threshold_exceeded_by: cdktf.numberToTerraform(struct!.thresholdExceededBy),
    url_hash_fail: cdktf.numberToTerraform(struct!.urlHashFail),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistTriggerStatsRateAToHclTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistTriggerStatsRateAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistTriggerStatsRateA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie_invalid: {
      value: cdktf.numberToHclTerraform(struct!.cookieInvalid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cookie_not_found: {
      value: cdktf.numberToHclTerraform(struct!.cookieNotFound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cookie_persist_fail: {
      value: cdktf.numberToHclTerraform(struct!.cookiePersistFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cssl_sid_not_found: {
      value: cdktf.numberToHclTerraform(struct!.csslSidNotFound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cssl_sid_not_match: {
      value: cdktf.numberToHclTerraform(struct!.csslSidNotMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_ip_fail: {
      value: cdktf.numberToHclTerraform(struct!.dstIpFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_ip_hash_fail: {
      value: cdktf.numberToHclTerraform(struct!.dstIpHashFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_ip_new_sess_cache_fail: {
      value: cdktf.numberToHclTerraform(struct!.dstIpNewSessCacheFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_ip_new_sess_sel_fail: {
      value: cdktf.numberToHclTerraform(struct!.dstIpNewSessSelFail),
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
    hash_tbl_create_fail: {
      value: cdktf.numberToHclTerraform(struct!.hashTblCreateFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hash_tbl_rst_adddel: {
      value: cdktf.numberToHclTerraform(struct!.hashTblRstAdddel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hash_tbl_rst_updown: {
      value: cdktf.numberToHclTerraform(struct!.hashTblRstUpdown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hash_tbl_trylock_fail: {
      value: cdktf.numberToHclTerraform(struct!.hashTblTrylockFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    header_hash_fail: {
      value: cdktf.numberToHclTerraform(struct!.headerHashFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_ip_fail: {
      value: cdktf.numberToHclTerraform(struct!.srcIpFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_ip_hash_fail: {
      value: cdktf.numberToHclTerraform(struct!.srcIpHashFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_ip_new_sess_cache_fail: {
      value: cdktf.numberToHclTerraform(struct!.srcIpNewSessCacheFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_ip_new_sess_sel_fail: {
      value: cdktf.numberToHclTerraform(struct!.srcIpNewSessSelFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_sid_persist_fail: {
      value: cdktf.numberToHclTerraform(struct!.sslSidPersistFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_sid_session_fail: {
      value: cdktf.numberToHclTerraform(struct!.sslSidSessionFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sssl_sid_not_found: {
      value: cdktf.numberToHclTerraform(struct!.ssslSidNotFound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sssl_sid_not_match: {
      value: cdktf.numberToHclTerraform(struct!.ssslSidNotMatch),
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
    url_hash_fail: {
      value: cdktf.numberToHclTerraform(struct!.urlHashFail),
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

export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistTriggerStatsRateAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistTriggerStatsRateA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookieInvalid !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieInvalid = this._cookieInvalid;
    }
    if (this._cookieNotFound !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieNotFound = this._cookieNotFound;
    }
    if (this._cookiePersistFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookiePersistFail = this._cookiePersistFail;
    }
    if (this._csslSidNotFound !== undefined) {
      hasAnyValues = true;
      internalValueResult.csslSidNotFound = this._csslSidNotFound;
    }
    if (this._csslSidNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.csslSidNotMatch = this._csslSidNotMatch;
    }
    if (this._dstIpFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIpFail = this._dstIpFail;
    }
    if (this._dstIpHashFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIpHashFail = this._dstIpHashFail;
    }
    if (this._dstIpNewSessCacheFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIpNewSessCacheFail = this._dstIpNewSessCacheFail;
    }
    if (this._dstIpNewSessSelFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIpNewSessSelFail = this._dstIpNewSessSelFail;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._hashTblCreateFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashTblCreateFail = this._hashTblCreateFail;
    }
    if (this._hashTblRstAdddel !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashTblRstAdddel = this._hashTblRstAdddel;
    }
    if (this._hashTblRstUpdown !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashTblRstUpdown = this._hashTblRstUpdown;
    }
    if (this._hashTblTrylockFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashTblTrylockFail = this._hashTblTrylockFail;
    }
    if (this._headerHashFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerHashFail = this._headerHashFail;
    }
    if (this._srcIpFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIpFail = this._srcIpFail;
    }
    if (this._srcIpHashFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIpHashFail = this._srcIpHashFail;
    }
    if (this._srcIpNewSessCacheFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIpNewSessCacheFail = this._srcIpNewSessCacheFail;
    }
    if (this._srcIpNewSessSelFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIpNewSessSelFail = this._srcIpNewSessSelFail;
    }
    if (this._sslSidPersistFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslSidPersistFail = this._sslSidPersistFail;
    }
    if (this._sslSidSessionFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslSidSessionFail = this._sslSidSessionFail;
    }
    if (this._ssslSidNotFound !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssslSidNotFound = this._ssslSidNotFound;
    }
    if (this._ssslSidNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssslSidNotMatch = this._ssslSidNotMatch;
    }
    if (this._thresholdExceededBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdExceededBy = this._thresholdExceededBy;
    }
    if (this._urlHashFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlHashFail = this._urlHashFail;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistTriggerStatsRateA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cookieInvalid = undefined;
      this._cookieNotFound = undefined;
      this._cookiePersistFail = undefined;
      this._csslSidNotFound = undefined;
      this._csslSidNotMatch = undefined;
      this._dstIpFail = undefined;
      this._dstIpHashFail = undefined;
      this._dstIpNewSessCacheFail = undefined;
      this._dstIpNewSessSelFail = undefined;
      this._duration = undefined;
      this._hashTblCreateFail = undefined;
      this._hashTblRstAdddel = undefined;
      this._hashTblRstUpdown = undefined;
      this._hashTblTrylockFail = undefined;
      this._headerHashFail = undefined;
      this._srcIpFail = undefined;
      this._srcIpHashFail = undefined;
      this._srcIpNewSessCacheFail = undefined;
      this._srcIpNewSessSelFail = undefined;
      this._sslSidPersistFail = undefined;
      this._sslSidSessionFail = undefined;
      this._ssslSidNotFound = undefined;
      this._ssslSidNotMatch = undefined;
      this._thresholdExceededBy = undefined;
      this._urlHashFail = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cookieInvalid = value.cookieInvalid;
      this._cookieNotFound = value.cookieNotFound;
      this._cookiePersistFail = value.cookiePersistFail;
      this._csslSidNotFound = value.csslSidNotFound;
      this._csslSidNotMatch = value.csslSidNotMatch;
      this._dstIpFail = value.dstIpFail;
      this._dstIpHashFail = value.dstIpHashFail;
      this._dstIpNewSessCacheFail = value.dstIpNewSessCacheFail;
      this._dstIpNewSessSelFail = value.dstIpNewSessSelFail;
      this._duration = value.duration;
      this._hashTblCreateFail = value.hashTblCreateFail;
      this._hashTblRstAdddel = value.hashTblRstAdddel;
      this._hashTblRstUpdown = value.hashTblRstUpdown;
      this._hashTblTrylockFail = value.hashTblTrylockFail;
      this._headerHashFail = value.headerHashFail;
      this._srcIpFail = value.srcIpFail;
      this._srcIpHashFail = value.srcIpHashFail;
      this._srcIpNewSessCacheFail = value.srcIpNewSessCacheFail;
      this._srcIpNewSessSelFail = value.srcIpNewSessSelFail;
      this._sslSidPersistFail = value.sslSidPersistFail;
      this._sslSidSessionFail = value.sslSidSessionFail;
      this._ssslSidNotFound = value.ssslSidNotFound;
      this._ssslSidNotMatch = value.ssslSidNotMatch;
      this._thresholdExceededBy = value.thresholdExceededBy;
      this._urlHashFail = value.urlHashFail;
      this._uuid = value.uuid;
    }
  }

  // cookie_invalid - computed: false, optional: true, required: false
  private _cookieInvalid?: number; 
  public get cookieInvalid() {
    return this.getNumberAttribute('cookie_invalid');
  }
  public set cookieInvalid(value: number) {
    this._cookieInvalid = value;
  }
  public resetCookieInvalid() {
    this._cookieInvalid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieInvalidInput() {
    return this._cookieInvalid;
  }

  // cookie_not_found - computed: false, optional: true, required: false
  private _cookieNotFound?: number; 
  public get cookieNotFound() {
    return this.getNumberAttribute('cookie_not_found');
  }
  public set cookieNotFound(value: number) {
    this._cookieNotFound = value;
  }
  public resetCookieNotFound() {
    this._cookieNotFound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieNotFoundInput() {
    return this._cookieNotFound;
  }

  // cookie_persist_fail - computed: false, optional: true, required: false
  private _cookiePersistFail?: number; 
  public get cookiePersistFail() {
    return this.getNumberAttribute('cookie_persist_fail');
  }
  public set cookiePersistFail(value: number) {
    this._cookiePersistFail = value;
  }
  public resetCookiePersistFail() {
    this._cookiePersistFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookiePersistFailInput() {
    return this._cookiePersistFail;
  }

  // cssl_sid_not_found - computed: false, optional: true, required: false
  private _csslSidNotFound?: number; 
  public get csslSidNotFound() {
    return this.getNumberAttribute('cssl_sid_not_found');
  }
  public set csslSidNotFound(value: number) {
    this._csslSidNotFound = value;
  }
  public resetCsslSidNotFound() {
    this._csslSidNotFound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csslSidNotFoundInput() {
    return this._csslSidNotFound;
  }

  // cssl_sid_not_match - computed: false, optional: true, required: false
  private _csslSidNotMatch?: number; 
  public get csslSidNotMatch() {
    return this.getNumberAttribute('cssl_sid_not_match');
  }
  public set csslSidNotMatch(value: number) {
    this._csslSidNotMatch = value;
  }
  public resetCsslSidNotMatch() {
    this._csslSidNotMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csslSidNotMatchInput() {
    return this._csslSidNotMatch;
  }

  // dst_ip_fail - computed: false, optional: true, required: false
  private _dstIpFail?: number; 
  public get dstIpFail() {
    return this.getNumberAttribute('dst_ip_fail');
  }
  public set dstIpFail(value: number) {
    this._dstIpFail = value;
  }
  public resetDstIpFail() {
    this._dstIpFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIpFailInput() {
    return this._dstIpFail;
  }

  // dst_ip_hash_fail - computed: false, optional: true, required: false
  private _dstIpHashFail?: number; 
  public get dstIpHashFail() {
    return this.getNumberAttribute('dst_ip_hash_fail');
  }
  public set dstIpHashFail(value: number) {
    this._dstIpHashFail = value;
  }
  public resetDstIpHashFail() {
    this._dstIpHashFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIpHashFailInput() {
    return this._dstIpHashFail;
  }

  // dst_ip_new_sess_cache_fail - computed: false, optional: true, required: false
  private _dstIpNewSessCacheFail?: number; 
  public get dstIpNewSessCacheFail() {
    return this.getNumberAttribute('dst_ip_new_sess_cache_fail');
  }
  public set dstIpNewSessCacheFail(value: number) {
    this._dstIpNewSessCacheFail = value;
  }
  public resetDstIpNewSessCacheFail() {
    this._dstIpNewSessCacheFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIpNewSessCacheFailInput() {
    return this._dstIpNewSessCacheFail;
  }

  // dst_ip_new_sess_sel_fail - computed: false, optional: true, required: false
  private _dstIpNewSessSelFail?: number; 
  public get dstIpNewSessSelFail() {
    return this.getNumberAttribute('dst_ip_new_sess_sel_fail');
  }
  public set dstIpNewSessSelFail(value: number) {
    this._dstIpNewSessSelFail = value;
  }
  public resetDstIpNewSessSelFail() {
    this._dstIpNewSessSelFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIpNewSessSelFailInput() {
    return this._dstIpNewSessSelFail;
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

  // hash_tbl_create_fail - computed: false, optional: true, required: false
  private _hashTblCreateFail?: number; 
  public get hashTblCreateFail() {
    return this.getNumberAttribute('hash_tbl_create_fail');
  }
  public set hashTblCreateFail(value: number) {
    this._hashTblCreateFail = value;
  }
  public resetHashTblCreateFail() {
    this._hashTblCreateFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashTblCreateFailInput() {
    return this._hashTblCreateFail;
  }

  // hash_tbl_rst_adddel - computed: false, optional: true, required: false
  private _hashTblRstAdddel?: number; 
  public get hashTblRstAdddel() {
    return this.getNumberAttribute('hash_tbl_rst_adddel');
  }
  public set hashTblRstAdddel(value: number) {
    this._hashTblRstAdddel = value;
  }
  public resetHashTblRstAdddel() {
    this._hashTblRstAdddel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashTblRstAdddelInput() {
    return this._hashTblRstAdddel;
  }

  // hash_tbl_rst_updown - computed: false, optional: true, required: false
  private _hashTblRstUpdown?: number; 
  public get hashTblRstUpdown() {
    return this.getNumberAttribute('hash_tbl_rst_updown');
  }
  public set hashTblRstUpdown(value: number) {
    this._hashTblRstUpdown = value;
  }
  public resetHashTblRstUpdown() {
    this._hashTblRstUpdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashTblRstUpdownInput() {
    return this._hashTblRstUpdown;
  }

  // hash_tbl_trylock_fail - computed: false, optional: true, required: false
  private _hashTblTrylockFail?: number; 
  public get hashTblTrylockFail() {
    return this.getNumberAttribute('hash_tbl_trylock_fail');
  }
  public set hashTblTrylockFail(value: number) {
    this._hashTblTrylockFail = value;
  }
  public resetHashTblTrylockFail() {
    this._hashTblTrylockFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashTblTrylockFailInput() {
    return this._hashTblTrylockFail;
  }

  // header_hash_fail - computed: false, optional: true, required: false
  private _headerHashFail?: number; 
  public get headerHashFail() {
    return this.getNumberAttribute('header_hash_fail');
  }
  public set headerHashFail(value: number) {
    this._headerHashFail = value;
  }
  public resetHeaderHashFail() {
    this._headerHashFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerHashFailInput() {
    return this._headerHashFail;
  }

  // src_ip_fail - computed: false, optional: true, required: false
  private _srcIpFail?: number; 
  public get srcIpFail() {
    return this.getNumberAttribute('src_ip_fail');
  }
  public set srcIpFail(value: number) {
    this._srcIpFail = value;
  }
  public resetSrcIpFail() {
    this._srcIpFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpFailInput() {
    return this._srcIpFail;
  }

  // src_ip_hash_fail - computed: false, optional: true, required: false
  private _srcIpHashFail?: number; 
  public get srcIpHashFail() {
    return this.getNumberAttribute('src_ip_hash_fail');
  }
  public set srcIpHashFail(value: number) {
    this._srcIpHashFail = value;
  }
  public resetSrcIpHashFail() {
    this._srcIpHashFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpHashFailInput() {
    return this._srcIpHashFail;
  }

  // src_ip_new_sess_cache_fail - computed: false, optional: true, required: false
  private _srcIpNewSessCacheFail?: number; 
  public get srcIpNewSessCacheFail() {
    return this.getNumberAttribute('src_ip_new_sess_cache_fail');
  }
  public set srcIpNewSessCacheFail(value: number) {
    this._srcIpNewSessCacheFail = value;
  }
  public resetSrcIpNewSessCacheFail() {
    this._srcIpNewSessCacheFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpNewSessCacheFailInput() {
    return this._srcIpNewSessCacheFail;
  }

  // src_ip_new_sess_sel_fail - computed: false, optional: true, required: false
  private _srcIpNewSessSelFail?: number; 
  public get srcIpNewSessSelFail() {
    return this.getNumberAttribute('src_ip_new_sess_sel_fail');
  }
  public set srcIpNewSessSelFail(value: number) {
    this._srcIpNewSessSelFail = value;
  }
  public resetSrcIpNewSessSelFail() {
    this._srcIpNewSessSelFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpNewSessSelFailInput() {
    return this._srcIpNewSessSelFail;
  }

  // ssl_sid_persist_fail - computed: false, optional: true, required: false
  private _sslSidPersistFail?: number; 
  public get sslSidPersistFail() {
    return this.getNumberAttribute('ssl_sid_persist_fail');
  }
  public set sslSidPersistFail(value: number) {
    this._sslSidPersistFail = value;
  }
  public resetSslSidPersistFail() {
    this._sslSidPersistFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslSidPersistFailInput() {
    return this._sslSidPersistFail;
  }

  // ssl_sid_session_fail - computed: false, optional: true, required: false
  private _sslSidSessionFail?: number; 
  public get sslSidSessionFail() {
    return this.getNumberAttribute('ssl_sid_session_fail');
  }
  public set sslSidSessionFail(value: number) {
    this._sslSidSessionFail = value;
  }
  public resetSslSidSessionFail() {
    this._sslSidSessionFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslSidSessionFailInput() {
    return this._sslSidSessionFail;
  }

  // sssl_sid_not_found - computed: false, optional: true, required: false
  private _ssslSidNotFound?: number; 
  public get ssslSidNotFound() {
    return this.getNumberAttribute('sssl_sid_not_found');
  }
  public set ssslSidNotFound(value: number) {
    this._ssslSidNotFound = value;
  }
  public resetSsslSidNotFound() {
    this._ssslSidNotFound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssslSidNotFoundInput() {
    return this._ssslSidNotFound;
  }

  // sssl_sid_not_match - computed: false, optional: true, required: false
  private _ssslSidNotMatch?: number; 
  public get ssslSidNotMatch() {
    return this.getNumberAttribute('sssl_sid_not_match');
  }
  public set ssslSidNotMatch(value: number) {
    this._ssslSidNotMatch = value;
  }
  public resetSsslSidNotMatch() {
    this._ssslSidNotMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssslSidNotMatchInput() {
    return this._ssslSidNotMatch;
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

  // url_hash_fail - computed: false, optional: true, required: false
  private _urlHashFail?: number; 
  public get urlHashFail() {
    return this.getNumberAttribute('url_hash_fail');
  }
  public set urlHashFail(value: number) {
    this._urlHashFail = value;
  }
  public resetUrlHashFail() {
    this._urlHashFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlHashFailInput() {
    return this._urlHashFail;
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist}
*/
export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist',
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
    this._id = config.id;
    this._templateName = config.templateName;
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
  private _triggerStatsInc = new VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistTriggerStatsIncAOutputReference(this, "trigger_stats_inc");
  public get triggerStatsInc() {
    return this._triggerStatsInc;
  }
  public putTriggerStatsInc(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistTriggerStatsIncA) {
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
  private _triggerStatsRate = new VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistTriggerStatsRateAOutputReference(this, "trigger_stats_rate");
  public get triggerStatsRate() {
    return this._triggerStatsRate;
  }
  public putTriggerStatsRate(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistTriggerStatsRateA) {
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
      template_name: cdktf.stringToTerraform(this._templateName),
      uuid: cdktf.stringToTerraform(this._uuid),
      trigger_stats_inc: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistTriggerStatsIncAToTerraform(this._triggerStatsInc.internalValue),
      trigger_stats_rate: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistTriggerStatsRateAToTerraform(this._triggerStatsRate.internalValue),
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
      template_name: {
        value: cdktf.stringToHclTerraform(this._templateName),
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
        value: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistTriggerStatsIncAToHclTerraform(this._triggerStatsInc.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistTriggerStatsIncAList",
      },
      trigger_stats_rate: {
        value: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistTriggerStatsRateAToHclTerraform(this._triggerStatsRate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistTriggerStatsRateAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
