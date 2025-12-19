// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist_trigger_stats_inc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistTriggerStatsIncAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable automatic packet-capture for Invalid persist cookie
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist_trigger_stats_inc#cookie_invalid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistTriggerStatsIncA#cookie_invalid}
  */
  readonly cookieInvalid?: number;
  /**
  * Enable automatic packet-capture for Persist cookie not found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist_trigger_stats_inc#cookie_not_found VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistTriggerStatsIncA#cookie_not_found}
  */
  readonly cookieNotFound?: number;
  /**
  * Enable automatic packet-capture for Cookie persist fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist_trigger_stats_inc#cookie_persist_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistTriggerStatsIncA#cookie_persist_fail}
  */
  readonly cookiePersistFail?: number;
  /**
  * Enable automatic packet-capture for Client SSL SID not found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist_trigger_stats_inc#cssl_sid_not_found VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistTriggerStatsIncA#cssl_sid_not_found}
  */
  readonly csslSidNotFound?: number;
  /**
  * Enable automatic packet-capture for Client SSL SID not match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist_trigger_stats_inc#cssl_sid_not_match VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistTriggerStatsIncA#cssl_sid_not_match}
  */
  readonly csslSidNotMatch?: number;
  /**
  * Enable automatic packet-capture for DST IP persist fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist_trigger_stats_inc#dst_ip_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistTriggerStatsIncA#dst_ip_fail}
  */
  readonly dstIpFail?: number;
  /**
  * Enable automatic packet-capture for DST IP hash persist fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist_trigger_stats_inc#dst_ip_hash_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistTriggerStatsIncA#dst_ip_hash_fail}
  */
  readonly dstIpHashFail?: number;
  /**
  * Enable automatic packet-capture for DST IP new sess fail (c)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist_trigger_stats_inc#dst_ip_new_sess_cache_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistTriggerStatsIncA#dst_ip_new_sess_cache_fail}
  */
  readonly dstIpNewSessCacheFail?: number;
  /**
  * Enable automatic packet-capture for DST IP new sess fail (s)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist_trigger_stats_inc#dst_ip_new_sess_sel_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistTriggerStatsIncA#dst_ip_new_sess_sel_fail}
  */
  readonly dstIpNewSessSelFail?: number;
  /**
  * Enable automatic packet-capture for Hash tbl create fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist_trigger_stats_inc#hash_tbl_create_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistTriggerStatsIncA#hash_tbl_create_fail}
  */
  readonly hashTblCreateFail?: number;
  /**
  * Enable automatic packet-capture for Hash tbl reset (add/del)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist_trigger_stats_inc#hash_tbl_rst_adddel VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistTriggerStatsIncA#hash_tbl_rst_adddel}
  */
  readonly hashTblRstAdddel?: number;
  /**
  * Enable automatic packet-capture for Hash tbl reset (up/down)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist_trigger_stats_inc#hash_tbl_rst_updown VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistTriggerStatsIncA#hash_tbl_rst_updown}
  */
  readonly hashTblRstUpdown?: number;
  /**
  * Enable automatic packet-capture for Hash tbl lock fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist_trigger_stats_inc#hash_tbl_trylock_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistTriggerStatsIncA#hash_tbl_trylock_fail}
  */
  readonly hashTblTrylockFail?: number;
  /**
  * Enable automatic packet-capture for Header hash persist fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist_trigger_stats_inc#header_hash_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistTriggerStatsIncA#header_hash_fail}
  */
  readonly headerHashFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist_trigger_stats_inc#id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistTriggerStatsIncA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable automatic packet-capture for SRC IP persist fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist_trigger_stats_inc#src_ip_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistTriggerStatsIncA#src_ip_fail}
  */
  readonly srcIpFail?: number;
  /**
  * Enable automatic packet-capture for SRC IP hash persist fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist_trigger_stats_inc#src_ip_hash_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistTriggerStatsIncA#src_ip_hash_fail}
  */
  readonly srcIpHashFail?: number;
  /**
  * Enable automatic packet-capture for SRC IP new sess fail (c)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist_trigger_stats_inc#src_ip_new_sess_cache_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistTriggerStatsIncA#src_ip_new_sess_cache_fail}
  */
  readonly srcIpNewSessCacheFail?: number;
  /**
  * Enable automatic packet-capture for SRC IP new sess fail (s)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist_trigger_stats_inc#src_ip_new_sess_sel_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistTriggerStatsIncA#src_ip_new_sess_sel_fail}
  */
  readonly srcIpNewSessSelFail?: number;
  /**
  * Enable automatic packet-capture for SSL SID persist fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist_trigger_stats_inc#ssl_sid_persist_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistTriggerStatsIncA#ssl_sid_persist_fail}
  */
  readonly sslSidPersistFail?: number;
  /**
  * Enable automatic packet-capture for Create SSL SID fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist_trigger_stats_inc#ssl_sid_session_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistTriggerStatsIncA#ssl_sid_session_fail}
  */
  readonly sslSidSessionFail?: number;
  /**
  * Enable automatic packet-capture for Server SSL SID not found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist_trigger_stats_inc#sssl_sid_not_found VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistTriggerStatsIncA#sssl_sid_not_found}
  */
  readonly ssslSidNotFound?: number;
  /**
  * Enable automatic packet-capture for Server SSL SID not match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist_trigger_stats_inc#sssl_sid_not_match VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistTriggerStatsIncA#sssl_sid_not_match}
  */
  readonly ssslSidNotMatch?: number;
  /**
  * Template_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist_trigger_stats_inc#template_name VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistTriggerStatsIncA#template_name}
  */
  readonly templateName: string;
  /**
  * Enable automatic packet-capture for URL hash persist fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist_trigger_stats_inc#url_hash_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistTriggerStatsIncA#url_hash_fail}
  */
  readonly urlHashFail?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist_trigger_stats_inc#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistTriggerStatsIncA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist_trigger_stats_inc thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist_trigger_stats_inc}
*/
export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistTriggerStatsIncA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist_trigger_stats_inc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistTriggerStatsIncA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistTriggerStatsIncA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistTriggerStatsIncA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist_trigger_stats_inc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistTriggerStatsIncA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist_trigger_stats_inc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist_trigger_stats_inc thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist_trigger_stats_inc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistTriggerStatsIncAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbPersistTriggerStatsIncAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_persist_trigger_stats_inc',
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
    this._cookieInvalid = config.cookieInvalid;
    this._cookieNotFound = config.cookieNotFound;
    this._cookiePersistFail = config.cookiePersistFail;
    this._csslSidNotFound = config.csslSidNotFound;
    this._csslSidNotMatch = config.csslSidNotMatch;
    this._dstIpFail = config.dstIpFail;
    this._dstIpHashFail = config.dstIpHashFail;
    this._dstIpNewSessCacheFail = config.dstIpNewSessCacheFail;
    this._dstIpNewSessSelFail = config.dstIpNewSessSelFail;
    this._hashTblCreateFail = config.hashTblCreateFail;
    this._hashTblRstAdddel = config.hashTblRstAdddel;
    this._hashTblRstUpdown = config.hashTblRstUpdown;
    this._hashTblTrylockFail = config.hashTblTrylockFail;
    this._headerHashFail = config.headerHashFail;
    this._id = config.id;
    this._srcIpFail = config.srcIpFail;
    this._srcIpHashFail = config.srcIpHashFail;
    this._srcIpNewSessCacheFail = config.srcIpNewSessCacheFail;
    this._srcIpNewSessSelFail = config.srcIpNewSessSelFail;
    this._sslSidPersistFail = config.sslSidPersistFail;
    this._sslSidSessionFail = config.sslSidSessionFail;
    this._ssslSidNotFound = config.ssslSidNotFound;
    this._ssslSidNotMatch = config.ssslSidNotMatch;
    this._templateName = config.templateName;
    this._urlHashFail = config.urlHashFail;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cookie_invalid: cdktf.numberToTerraform(this._cookieInvalid),
      cookie_not_found: cdktf.numberToTerraform(this._cookieNotFound),
      cookie_persist_fail: cdktf.numberToTerraform(this._cookiePersistFail),
      cssl_sid_not_found: cdktf.numberToTerraform(this._csslSidNotFound),
      cssl_sid_not_match: cdktf.numberToTerraform(this._csslSidNotMatch),
      dst_ip_fail: cdktf.numberToTerraform(this._dstIpFail),
      dst_ip_hash_fail: cdktf.numberToTerraform(this._dstIpHashFail),
      dst_ip_new_sess_cache_fail: cdktf.numberToTerraform(this._dstIpNewSessCacheFail),
      dst_ip_new_sess_sel_fail: cdktf.numberToTerraform(this._dstIpNewSessSelFail),
      hash_tbl_create_fail: cdktf.numberToTerraform(this._hashTblCreateFail),
      hash_tbl_rst_adddel: cdktf.numberToTerraform(this._hashTblRstAdddel),
      hash_tbl_rst_updown: cdktf.numberToTerraform(this._hashTblRstUpdown),
      hash_tbl_trylock_fail: cdktf.numberToTerraform(this._hashTblTrylockFail),
      header_hash_fail: cdktf.numberToTerraform(this._headerHashFail),
      id: cdktf.stringToTerraform(this._id),
      src_ip_fail: cdktf.numberToTerraform(this._srcIpFail),
      src_ip_hash_fail: cdktf.numberToTerraform(this._srcIpHashFail),
      src_ip_new_sess_cache_fail: cdktf.numberToTerraform(this._srcIpNewSessCacheFail),
      src_ip_new_sess_sel_fail: cdktf.numberToTerraform(this._srcIpNewSessSelFail),
      ssl_sid_persist_fail: cdktf.numberToTerraform(this._sslSidPersistFail),
      ssl_sid_session_fail: cdktf.numberToTerraform(this._sslSidSessionFail),
      sssl_sid_not_found: cdktf.numberToTerraform(this._ssslSidNotFound),
      sssl_sid_not_match: cdktf.numberToTerraform(this._ssslSidNotMatch),
      template_name: cdktf.stringToTerraform(this._templateName),
      url_hash_fail: cdktf.numberToTerraform(this._urlHashFail),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cookie_invalid: {
        value: cdktf.numberToHclTerraform(this._cookieInvalid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cookie_not_found: {
        value: cdktf.numberToHclTerraform(this._cookieNotFound),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cookie_persist_fail: {
        value: cdktf.numberToHclTerraform(this._cookiePersistFail),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cssl_sid_not_found: {
        value: cdktf.numberToHclTerraform(this._csslSidNotFound),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cssl_sid_not_match: {
        value: cdktf.numberToHclTerraform(this._csslSidNotMatch),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dst_ip_fail: {
        value: cdktf.numberToHclTerraform(this._dstIpFail),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dst_ip_hash_fail: {
        value: cdktf.numberToHclTerraform(this._dstIpHashFail),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dst_ip_new_sess_cache_fail: {
        value: cdktf.numberToHclTerraform(this._dstIpNewSessCacheFail),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dst_ip_new_sess_sel_fail: {
        value: cdktf.numberToHclTerraform(this._dstIpNewSessSelFail),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hash_tbl_create_fail: {
        value: cdktf.numberToHclTerraform(this._hashTblCreateFail),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hash_tbl_rst_adddel: {
        value: cdktf.numberToHclTerraform(this._hashTblRstAdddel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hash_tbl_rst_updown: {
        value: cdktf.numberToHclTerraform(this._hashTblRstUpdown),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hash_tbl_trylock_fail: {
        value: cdktf.numberToHclTerraform(this._hashTblTrylockFail),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      header_hash_fail: {
        value: cdktf.numberToHclTerraform(this._headerHashFail),
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
      src_ip_fail: {
        value: cdktf.numberToHclTerraform(this._srcIpFail),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      src_ip_hash_fail: {
        value: cdktf.numberToHclTerraform(this._srcIpHashFail),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      src_ip_new_sess_cache_fail: {
        value: cdktf.numberToHclTerraform(this._srcIpNewSessCacheFail),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      src_ip_new_sess_sel_fail: {
        value: cdktf.numberToHclTerraform(this._srcIpNewSessSelFail),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssl_sid_persist_fail: {
        value: cdktf.numberToHclTerraform(this._sslSidPersistFail),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssl_sid_session_fail: {
        value: cdktf.numberToHclTerraform(this._sslSidSessionFail),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sssl_sid_not_found: {
        value: cdktf.numberToHclTerraform(this._ssslSidNotFound),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sssl_sid_not_match: {
        value: cdktf.numberToHclTerraform(this._ssslSidNotMatch),
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
      url_hash_fail: {
        value: cdktf.numberToHclTerraform(this._urlHashFail),
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
