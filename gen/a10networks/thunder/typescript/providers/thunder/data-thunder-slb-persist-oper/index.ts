// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_persist_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbPersistOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_persist_oper#id DataThunderSlbPersistOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_persist_oper#oper DataThunderSlbPersistOper#oper}
  */
  readonly oper?: DataThunderSlbPersistOperOper;
}
export interface DataThunderSlbPersistOperOperPersistCpuListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_persist_oper#cookie_invalid DataThunderSlbPersistOper#cookie_invalid}
  */
  readonly cookieInvalid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_persist_oper#cookie_not_found DataThunderSlbPersistOper#cookie_not_found}
  */
  readonly cookieNotFound?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_persist_oper#cookie_pass_thru DataThunderSlbPersistOper#cookie_pass_thru}
  */
  readonly cookiePassThru?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_persist_oper#cookie_persist_fail DataThunderSlbPersistOper#cookie_persist_fail}
  */
  readonly cookiePersistFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_persist_oper#cookie_persist_ok DataThunderSlbPersistOper#cookie_persist_ok}
  */
  readonly cookiePersistOk?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_persist_oper#cssl_sid_match DataThunderSlbPersistOper#cssl_sid_match}
  */
  readonly csslSidMatch?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_persist_oper#cssl_sid_not_found DataThunderSlbPersistOper#cssl_sid_not_found}
  */
  readonly csslSidNotFound?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_persist_oper#cssl_sid_not_match DataThunderSlbPersistOper#cssl_sid_not_match}
  */
  readonly csslSidNotMatch?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_persist_oper#dst_ip DataThunderSlbPersistOper#dst_ip}
  */
  readonly dstIp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_persist_oper#dst_ip_enqueue DataThunderSlbPersistOper#dst_ip_enqueue}
  */
  readonly dstIpEnqueue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_persist_oper#dst_ip_fail DataThunderSlbPersistOper#dst_ip_fail}
  */
  readonly dstIpFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_persist_oper#dst_ip_hash_enqueue DataThunderSlbPersistOper#dst_ip_hash_enqueue}
  */
  readonly dstIpHashEnqueue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_persist_oper#dst_ip_hash_fail DataThunderSlbPersistOper#dst_ip_hash_fail}
  */
  readonly dstIpHashFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_persist_oper#dst_ip_hash_pri DataThunderSlbPersistOper#dst_ip_hash_pri}
  */
  readonly dstIpHashPri?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_persist_oper#dst_ip_hash_sec DataThunderSlbPersistOper#dst_ip_hash_sec}
  */
  readonly dstIpHashSec?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_persist_oper#dst_ip_new_sess_cache DataThunderSlbPersistOper#dst_ip_new_sess_cache}
  */
  readonly dstIpNewSessCache?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_persist_oper#dst_ip_new_sess_cache_fail DataThunderSlbPersistOper#dst_ip_new_sess_cache_fail}
  */
  readonly dstIpNewSessCacheFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_persist_oper#dst_ip_new_sess_sel DataThunderSlbPersistOper#dst_ip_new_sess_sel}
  */
  readonly dstIpNewSessSel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_persist_oper#dst_ip_new_sess_sel_fail DataThunderSlbPersistOper#dst_ip_new_sess_sel_fail}
  */
  readonly dstIpNewSessSelFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_persist_oper#hash_tbl_create_fail DataThunderSlbPersistOper#hash_tbl_create_fail}
  */
  readonly hashTblCreateFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_persist_oper#hash_tbl_create_ok DataThunderSlbPersistOper#hash_tbl_create_ok}
  */
  readonly hashTblCreateOk?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_persist_oper#hash_tbl_free DataThunderSlbPersistOper#hash_tbl_free}
  */
  readonly hashTblFree?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_persist_oper#hash_tbl_rst_adddel DataThunderSlbPersistOper#hash_tbl_rst_adddel}
  */
  readonly hashTblRstAdddel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_persist_oper#hash_tbl_rst_updown DataThunderSlbPersistOper#hash_tbl_rst_updown}
  */
  readonly hashTblRstUpdown?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_persist_oper#hash_tbl_trylock_fail DataThunderSlbPersistOper#hash_tbl_trylock_fail}
  */
  readonly hashTblTrylockFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_persist_oper#header_hash_enqueue DataThunderSlbPersistOper#header_hash_enqueue}
  */
  readonly headerHashEnqueue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_persist_oper#header_hash_fail DataThunderSlbPersistOper#header_hash_fail}
  */
  readonly headerHashFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_persist_oper#header_hash_pri DataThunderSlbPersistOper#header_hash_pri}
  */
  readonly headerHashPri?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_persist_oper#header_hash_sec DataThunderSlbPersistOper#header_hash_sec}
  */
  readonly headerHashSec?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_persist_oper#src_ip DataThunderSlbPersistOper#src_ip}
  */
  readonly srcIp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_persist_oper#src_ip_enforce DataThunderSlbPersistOper#src_ip_enforce}
  */
  readonly srcIpEnforce?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_persist_oper#src_ip_enqueue DataThunderSlbPersistOper#src_ip_enqueue}
  */
  readonly srcIpEnqueue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_persist_oper#src_ip_fail DataThunderSlbPersistOper#src_ip_fail}
  */
  readonly srcIpFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_persist_oper#src_ip_hash_enqueue DataThunderSlbPersistOper#src_ip_hash_enqueue}
  */
  readonly srcIpHashEnqueue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_persist_oper#src_ip_hash_fail DataThunderSlbPersistOper#src_ip_hash_fail}
  */
  readonly srcIpHashFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_persist_oper#src_ip_hash_pri DataThunderSlbPersistOper#src_ip_hash_pri}
  */
  readonly srcIpHashPri?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_persist_oper#src_ip_hash_sec DataThunderSlbPersistOper#src_ip_hash_sec}
  */
  readonly srcIpHashSec?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_persist_oper#src_ip_new_sess_cache DataThunderSlbPersistOper#src_ip_new_sess_cache}
  */
  readonly srcIpNewSessCache?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_persist_oper#src_ip_new_sess_cache_fail DataThunderSlbPersistOper#src_ip_new_sess_cache_fail}
  */
  readonly srcIpNewSessCacheFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_persist_oper#src_ip_new_sess_sel DataThunderSlbPersistOper#src_ip_new_sess_sel}
  */
  readonly srcIpNewSessSel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_persist_oper#src_ip_new_sess_sel_fail DataThunderSlbPersistOper#src_ip_new_sess_sel_fail}
  */
  readonly srcIpNewSessSelFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_persist_oper#ssl_sid_persist_fail DataThunderSlbPersistOper#ssl_sid_persist_fail}
  */
  readonly sslSidPersistFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_persist_oper#ssl_sid_persist_ok DataThunderSlbPersistOper#ssl_sid_persist_ok}
  */
  readonly sslSidPersistOk?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_persist_oper#ssl_sid_session_fail DataThunderSlbPersistOper#ssl_sid_session_fail}
  */
  readonly sslSidSessionFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_persist_oper#ssl_sid_session_ok DataThunderSlbPersistOper#ssl_sid_session_ok}
  */
  readonly sslSidSessionOk?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_persist_oper#sssl_sid_match DataThunderSlbPersistOper#sssl_sid_match}
  */
  readonly ssslSidMatch?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_persist_oper#sssl_sid_not_found DataThunderSlbPersistOper#sssl_sid_not_found}
  */
  readonly ssslSidNotFound?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_persist_oper#sssl_sid_not_match DataThunderSlbPersistOper#sssl_sid_not_match}
  */
  readonly ssslSidNotMatch?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_persist_oper#sssl_sid_reset DataThunderSlbPersistOper#sssl_sid_reset}
  */
  readonly ssslSidReset?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_persist_oper#url_hash_enqueue DataThunderSlbPersistOper#url_hash_enqueue}
  */
  readonly urlHashEnqueue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_persist_oper#url_hash_fail DataThunderSlbPersistOper#url_hash_fail}
  */
  readonly urlHashFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_persist_oper#url_hash_pri DataThunderSlbPersistOper#url_hash_pri}
  */
  readonly urlHashPri?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_persist_oper#url_hash_sec DataThunderSlbPersistOper#url_hash_sec}
  */
  readonly urlHashSec?: number;
}

export function dataThunderSlbPersistOperOperPersistCpuListStructToTerraform(struct?: DataThunderSlbPersistOperOperPersistCpuListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie_invalid: cdktf.numberToTerraform(struct!.cookieInvalid),
    cookie_not_found: cdktf.numberToTerraform(struct!.cookieNotFound),
    cookie_pass_thru: cdktf.numberToTerraform(struct!.cookiePassThru),
    cookie_persist_fail: cdktf.numberToTerraform(struct!.cookiePersistFail),
    cookie_persist_ok: cdktf.numberToTerraform(struct!.cookiePersistOk),
    cssl_sid_match: cdktf.numberToTerraform(struct!.csslSidMatch),
    cssl_sid_not_found: cdktf.numberToTerraform(struct!.csslSidNotFound),
    cssl_sid_not_match: cdktf.numberToTerraform(struct!.csslSidNotMatch),
    dst_ip: cdktf.numberToTerraform(struct!.dstIp),
    dst_ip_enqueue: cdktf.numberToTerraform(struct!.dstIpEnqueue),
    dst_ip_fail: cdktf.numberToTerraform(struct!.dstIpFail),
    dst_ip_hash_enqueue: cdktf.numberToTerraform(struct!.dstIpHashEnqueue),
    dst_ip_hash_fail: cdktf.numberToTerraform(struct!.dstIpHashFail),
    dst_ip_hash_pri: cdktf.numberToTerraform(struct!.dstIpHashPri),
    dst_ip_hash_sec: cdktf.numberToTerraform(struct!.dstIpHashSec),
    dst_ip_new_sess_cache: cdktf.numberToTerraform(struct!.dstIpNewSessCache),
    dst_ip_new_sess_cache_fail: cdktf.numberToTerraform(struct!.dstIpNewSessCacheFail),
    dst_ip_new_sess_sel: cdktf.numberToTerraform(struct!.dstIpNewSessSel),
    dst_ip_new_sess_sel_fail: cdktf.numberToTerraform(struct!.dstIpNewSessSelFail),
    hash_tbl_create_fail: cdktf.numberToTerraform(struct!.hashTblCreateFail),
    hash_tbl_create_ok: cdktf.numberToTerraform(struct!.hashTblCreateOk),
    hash_tbl_free: cdktf.numberToTerraform(struct!.hashTblFree),
    hash_tbl_rst_adddel: cdktf.numberToTerraform(struct!.hashTblRstAdddel),
    hash_tbl_rst_updown: cdktf.numberToTerraform(struct!.hashTblRstUpdown),
    hash_tbl_trylock_fail: cdktf.numberToTerraform(struct!.hashTblTrylockFail),
    header_hash_enqueue: cdktf.numberToTerraform(struct!.headerHashEnqueue),
    header_hash_fail: cdktf.numberToTerraform(struct!.headerHashFail),
    header_hash_pri: cdktf.numberToTerraform(struct!.headerHashPri),
    header_hash_sec: cdktf.numberToTerraform(struct!.headerHashSec),
    src_ip: cdktf.numberToTerraform(struct!.srcIp),
    src_ip_enforce: cdktf.numberToTerraform(struct!.srcIpEnforce),
    src_ip_enqueue: cdktf.numberToTerraform(struct!.srcIpEnqueue),
    src_ip_fail: cdktf.numberToTerraform(struct!.srcIpFail),
    src_ip_hash_enqueue: cdktf.numberToTerraform(struct!.srcIpHashEnqueue),
    src_ip_hash_fail: cdktf.numberToTerraform(struct!.srcIpHashFail),
    src_ip_hash_pri: cdktf.numberToTerraform(struct!.srcIpHashPri),
    src_ip_hash_sec: cdktf.numberToTerraform(struct!.srcIpHashSec),
    src_ip_new_sess_cache: cdktf.numberToTerraform(struct!.srcIpNewSessCache),
    src_ip_new_sess_cache_fail: cdktf.numberToTerraform(struct!.srcIpNewSessCacheFail),
    src_ip_new_sess_sel: cdktf.numberToTerraform(struct!.srcIpNewSessSel),
    src_ip_new_sess_sel_fail: cdktf.numberToTerraform(struct!.srcIpNewSessSelFail),
    ssl_sid_persist_fail: cdktf.numberToTerraform(struct!.sslSidPersistFail),
    ssl_sid_persist_ok: cdktf.numberToTerraform(struct!.sslSidPersistOk),
    ssl_sid_session_fail: cdktf.numberToTerraform(struct!.sslSidSessionFail),
    ssl_sid_session_ok: cdktf.numberToTerraform(struct!.sslSidSessionOk),
    sssl_sid_match: cdktf.numberToTerraform(struct!.ssslSidMatch),
    sssl_sid_not_found: cdktf.numberToTerraform(struct!.ssslSidNotFound),
    sssl_sid_not_match: cdktf.numberToTerraform(struct!.ssslSidNotMatch),
    sssl_sid_reset: cdktf.numberToTerraform(struct!.ssslSidReset),
    url_hash_enqueue: cdktf.numberToTerraform(struct!.urlHashEnqueue),
    url_hash_fail: cdktf.numberToTerraform(struct!.urlHashFail),
    url_hash_pri: cdktf.numberToTerraform(struct!.urlHashPri),
    url_hash_sec: cdktf.numberToTerraform(struct!.urlHashSec),
  }
}


export function dataThunderSlbPersistOperOperPersistCpuListStructToHclTerraform(struct?: DataThunderSlbPersistOperOperPersistCpuListStruct | cdktf.IResolvable): any {
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
    cookie_pass_thru: {
      value: cdktf.numberToHclTerraform(struct!.cookiePassThru),
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
    cookie_persist_ok: {
      value: cdktf.numberToHclTerraform(struct!.cookiePersistOk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cssl_sid_match: {
      value: cdktf.numberToHclTerraform(struct!.csslSidMatch),
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
    dst_ip: {
      value: cdktf.numberToHclTerraform(struct!.dstIp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_ip_enqueue: {
      value: cdktf.numberToHclTerraform(struct!.dstIpEnqueue),
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
    dst_ip_hash_enqueue: {
      value: cdktf.numberToHclTerraform(struct!.dstIpHashEnqueue),
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
    dst_ip_hash_pri: {
      value: cdktf.numberToHclTerraform(struct!.dstIpHashPri),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_ip_hash_sec: {
      value: cdktf.numberToHclTerraform(struct!.dstIpHashSec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_ip_new_sess_cache: {
      value: cdktf.numberToHclTerraform(struct!.dstIpNewSessCache),
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
    dst_ip_new_sess_sel: {
      value: cdktf.numberToHclTerraform(struct!.dstIpNewSessSel),
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
    hash_tbl_create_ok: {
      value: cdktf.numberToHclTerraform(struct!.hashTblCreateOk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hash_tbl_free: {
      value: cdktf.numberToHclTerraform(struct!.hashTblFree),
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
    header_hash_enqueue: {
      value: cdktf.numberToHclTerraform(struct!.headerHashEnqueue),
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
    header_hash_pri: {
      value: cdktf.numberToHclTerraform(struct!.headerHashPri),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    header_hash_sec: {
      value: cdktf.numberToHclTerraform(struct!.headerHashSec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_ip: {
      value: cdktf.numberToHclTerraform(struct!.srcIp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_ip_enforce: {
      value: cdktf.numberToHclTerraform(struct!.srcIpEnforce),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_ip_enqueue: {
      value: cdktf.numberToHclTerraform(struct!.srcIpEnqueue),
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
    src_ip_hash_enqueue: {
      value: cdktf.numberToHclTerraform(struct!.srcIpHashEnqueue),
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
    src_ip_hash_pri: {
      value: cdktf.numberToHclTerraform(struct!.srcIpHashPri),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_ip_hash_sec: {
      value: cdktf.numberToHclTerraform(struct!.srcIpHashSec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_ip_new_sess_cache: {
      value: cdktf.numberToHclTerraform(struct!.srcIpNewSessCache),
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
    src_ip_new_sess_sel: {
      value: cdktf.numberToHclTerraform(struct!.srcIpNewSessSel),
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
    ssl_sid_persist_ok: {
      value: cdktf.numberToHclTerraform(struct!.sslSidPersistOk),
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
    ssl_sid_session_ok: {
      value: cdktf.numberToHclTerraform(struct!.sslSidSessionOk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sssl_sid_match: {
      value: cdktf.numberToHclTerraform(struct!.ssslSidMatch),
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
    sssl_sid_reset: {
      value: cdktf.numberToHclTerraform(struct!.ssslSidReset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    url_hash_enqueue: {
      value: cdktf.numberToHclTerraform(struct!.urlHashEnqueue),
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
    url_hash_pri: {
      value: cdktf.numberToHclTerraform(struct!.urlHashPri),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    url_hash_sec: {
      value: cdktf.numberToHclTerraform(struct!.urlHashSec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbPersistOperOperPersistCpuListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataThunderSlbPersistOperOperPersistCpuListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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
    if (this._cookiePassThru !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookiePassThru = this._cookiePassThru;
    }
    if (this._cookiePersistFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookiePersistFail = this._cookiePersistFail;
    }
    if (this._cookiePersistOk !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookiePersistOk = this._cookiePersistOk;
    }
    if (this._csslSidMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.csslSidMatch = this._csslSidMatch;
    }
    if (this._csslSidNotFound !== undefined) {
      hasAnyValues = true;
      internalValueResult.csslSidNotFound = this._csslSidNotFound;
    }
    if (this._csslSidNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.csslSidNotMatch = this._csslSidNotMatch;
    }
    if (this._dstIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIp = this._dstIp;
    }
    if (this._dstIpEnqueue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIpEnqueue = this._dstIpEnqueue;
    }
    if (this._dstIpFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIpFail = this._dstIpFail;
    }
    if (this._dstIpHashEnqueue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIpHashEnqueue = this._dstIpHashEnqueue;
    }
    if (this._dstIpHashFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIpHashFail = this._dstIpHashFail;
    }
    if (this._dstIpHashPri !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIpHashPri = this._dstIpHashPri;
    }
    if (this._dstIpHashSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIpHashSec = this._dstIpHashSec;
    }
    if (this._dstIpNewSessCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIpNewSessCache = this._dstIpNewSessCache;
    }
    if (this._dstIpNewSessCacheFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIpNewSessCacheFail = this._dstIpNewSessCacheFail;
    }
    if (this._dstIpNewSessSel !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIpNewSessSel = this._dstIpNewSessSel;
    }
    if (this._dstIpNewSessSelFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIpNewSessSelFail = this._dstIpNewSessSelFail;
    }
    if (this._hashTblCreateFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashTblCreateFail = this._hashTblCreateFail;
    }
    if (this._hashTblCreateOk !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashTblCreateOk = this._hashTblCreateOk;
    }
    if (this._hashTblFree !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashTblFree = this._hashTblFree;
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
    if (this._headerHashEnqueue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerHashEnqueue = this._headerHashEnqueue;
    }
    if (this._headerHashFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerHashFail = this._headerHashFail;
    }
    if (this._headerHashPri !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerHashPri = this._headerHashPri;
    }
    if (this._headerHashSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerHashSec = this._headerHashSec;
    }
    if (this._srcIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIp = this._srcIp;
    }
    if (this._srcIpEnforce !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIpEnforce = this._srcIpEnforce;
    }
    if (this._srcIpEnqueue !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIpEnqueue = this._srcIpEnqueue;
    }
    if (this._srcIpFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIpFail = this._srcIpFail;
    }
    if (this._srcIpHashEnqueue !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIpHashEnqueue = this._srcIpHashEnqueue;
    }
    if (this._srcIpHashFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIpHashFail = this._srcIpHashFail;
    }
    if (this._srcIpHashPri !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIpHashPri = this._srcIpHashPri;
    }
    if (this._srcIpHashSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIpHashSec = this._srcIpHashSec;
    }
    if (this._srcIpNewSessCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIpNewSessCache = this._srcIpNewSessCache;
    }
    if (this._srcIpNewSessCacheFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIpNewSessCacheFail = this._srcIpNewSessCacheFail;
    }
    if (this._srcIpNewSessSel !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIpNewSessSel = this._srcIpNewSessSel;
    }
    if (this._srcIpNewSessSelFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIpNewSessSelFail = this._srcIpNewSessSelFail;
    }
    if (this._sslSidPersistFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslSidPersistFail = this._sslSidPersistFail;
    }
    if (this._sslSidPersistOk !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslSidPersistOk = this._sslSidPersistOk;
    }
    if (this._sslSidSessionFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslSidSessionFail = this._sslSidSessionFail;
    }
    if (this._sslSidSessionOk !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslSidSessionOk = this._sslSidSessionOk;
    }
    if (this._ssslSidMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssslSidMatch = this._ssslSidMatch;
    }
    if (this._ssslSidNotFound !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssslSidNotFound = this._ssslSidNotFound;
    }
    if (this._ssslSidNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssslSidNotMatch = this._ssslSidNotMatch;
    }
    if (this._ssslSidReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssslSidReset = this._ssslSidReset;
    }
    if (this._urlHashEnqueue !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlHashEnqueue = this._urlHashEnqueue;
    }
    if (this._urlHashFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlHashFail = this._urlHashFail;
    }
    if (this._urlHashPri !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlHashPri = this._urlHashPri;
    }
    if (this._urlHashSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlHashSec = this._urlHashSec;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbPersistOperOperPersistCpuListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cookieInvalid = undefined;
      this._cookieNotFound = undefined;
      this._cookiePassThru = undefined;
      this._cookiePersistFail = undefined;
      this._cookiePersistOk = undefined;
      this._csslSidMatch = undefined;
      this._csslSidNotFound = undefined;
      this._csslSidNotMatch = undefined;
      this._dstIp = undefined;
      this._dstIpEnqueue = undefined;
      this._dstIpFail = undefined;
      this._dstIpHashEnqueue = undefined;
      this._dstIpHashFail = undefined;
      this._dstIpHashPri = undefined;
      this._dstIpHashSec = undefined;
      this._dstIpNewSessCache = undefined;
      this._dstIpNewSessCacheFail = undefined;
      this._dstIpNewSessSel = undefined;
      this._dstIpNewSessSelFail = undefined;
      this._hashTblCreateFail = undefined;
      this._hashTblCreateOk = undefined;
      this._hashTblFree = undefined;
      this._hashTblRstAdddel = undefined;
      this._hashTblRstUpdown = undefined;
      this._hashTblTrylockFail = undefined;
      this._headerHashEnqueue = undefined;
      this._headerHashFail = undefined;
      this._headerHashPri = undefined;
      this._headerHashSec = undefined;
      this._srcIp = undefined;
      this._srcIpEnforce = undefined;
      this._srcIpEnqueue = undefined;
      this._srcIpFail = undefined;
      this._srcIpHashEnqueue = undefined;
      this._srcIpHashFail = undefined;
      this._srcIpHashPri = undefined;
      this._srcIpHashSec = undefined;
      this._srcIpNewSessCache = undefined;
      this._srcIpNewSessCacheFail = undefined;
      this._srcIpNewSessSel = undefined;
      this._srcIpNewSessSelFail = undefined;
      this._sslSidPersistFail = undefined;
      this._sslSidPersistOk = undefined;
      this._sslSidSessionFail = undefined;
      this._sslSidSessionOk = undefined;
      this._ssslSidMatch = undefined;
      this._ssslSidNotFound = undefined;
      this._ssslSidNotMatch = undefined;
      this._ssslSidReset = undefined;
      this._urlHashEnqueue = undefined;
      this._urlHashFail = undefined;
      this._urlHashPri = undefined;
      this._urlHashSec = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cookieInvalid = value.cookieInvalid;
      this._cookieNotFound = value.cookieNotFound;
      this._cookiePassThru = value.cookiePassThru;
      this._cookiePersistFail = value.cookiePersistFail;
      this._cookiePersistOk = value.cookiePersistOk;
      this._csslSidMatch = value.csslSidMatch;
      this._csslSidNotFound = value.csslSidNotFound;
      this._csslSidNotMatch = value.csslSidNotMatch;
      this._dstIp = value.dstIp;
      this._dstIpEnqueue = value.dstIpEnqueue;
      this._dstIpFail = value.dstIpFail;
      this._dstIpHashEnqueue = value.dstIpHashEnqueue;
      this._dstIpHashFail = value.dstIpHashFail;
      this._dstIpHashPri = value.dstIpHashPri;
      this._dstIpHashSec = value.dstIpHashSec;
      this._dstIpNewSessCache = value.dstIpNewSessCache;
      this._dstIpNewSessCacheFail = value.dstIpNewSessCacheFail;
      this._dstIpNewSessSel = value.dstIpNewSessSel;
      this._dstIpNewSessSelFail = value.dstIpNewSessSelFail;
      this._hashTblCreateFail = value.hashTblCreateFail;
      this._hashTblCreateOk = value.hashTblCreateOk;
      this._hashTblFree = value.hashTblFree;
      this._hashTblRstAdddel = value.hashTblRstAdddel;
      this._hashTblRstUpdown = value.hashTblRstUpdown;
      this._hashTblTrylockFail = value.hashTblTrylockFail;
      this._headerHashEnqueue = value.headerHashEnqueue;
      this._headerHashFail = value.headerHashFail;
      this._headerHashPri = value.headerHashPri;
      this._headerHashSec = value.headerHashSec;
      this._srcIp = value.srcIp;
      this._srcIpEnforce = value.srcIpEnforce;
      this._srcIpEnqueue = value.srcIpEnqueue;
      this._srcIpFail = value.srcIpFail;
      this._srcIpHashEnqueue = value.srcIpHashEnqueue;
      this._srcIpHashFail = value.srcIpHashFail;
      this._srcIpHashPri = value.srcIpHashPri;
      this._srcIpHashSec = value.srcIpHashSec;
      this._srcIpNewSessCache = value.srcIpNewSessCache;
      this._srcIpNewSessCacheFail = value.srcIpNewSessCacheFail;
      this._srcIpNewSessSel = value.srcIpNewSessSel;
      this._srcIpNewSessSelFail = value.srcIpNewSessSelFail;
      this._sslSidPersistFail = value.sslSidPersistFail;
      this._sslSidPersistOk = value.sslSidPersistOk;
      this._sslSidSessionFail = value.sslSidSessionFail;
      this._sslSidSessionOk = value.sslSidSessionOk;
      this._ssslSidMatch = value.ssslSidMatch;
      this._ssslSidNotFound = value.ssslSidNotFound;
      this._ssslSidNotMatch = value.ssslSidNotMatch;
      this._ssslSidReset = value.ssslSidReset;
      this._urlHashEnqueue = value.urlHashEnqueue;
      this._urlHashFail = value.urlHashFail;
      this._urlHashPri = value.urlHashPri;
      this._urlHashSec = value.urlHashSec;
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

  // cookie_pass_thru - computed: false, optional: true, required: false
  private _cookiePassThru?: number; 
  public get cookiePassThru() {
    return this.getNumberAttribute('cookie_pass_thru');
  }
  public set cookiePassThru(value: number) {
    this._cookiePassThru = value;
  }
  public resetCookiePassThru() {
    this._cookiePassThru = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookiePassThruInput() {
    return this._cookiePassThru;
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

  // cookie_persist_ok - computed: false, optional: true, required: false
  private _cookiePersistOk?: number; 
  public get cookiePersistOk() {
    return this.getNumberAttribute('cookie_persist_ok');
  }
  public set cookiePersistOk(value: number) {
    this._cookiePersistOk = value;
  }
  public resetCookiePersistOk() {
    this._cookiePersistOk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookiePersistOkInput() {
    return this._cookiePersistOk;
  }

  // cssl_sid_match - computed: false, optional: true, required: false
  private _csslSidMatch?: number; 
  public get csslSidMatch() {
    return this.getNumberAttribute('cssl_sid_match');
  }
  public set csslSidMatch(value: number) {
    this._csslSidMatch = value;
  }
  public resetCsslSidMatch() {
    this._csslSidMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csslSidMatchInput() {
    return this._csslSidMatch;
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

  // dst_ip - computed: false, optional: true, required: false
  private _dstIp?: number; 
  public get dstIp() {
    return this.getNumberAttribute('dst_ip');
  }
  public set dstIp(value: number) {
    this._dstIp = value;
  }
  public resetDstIp() {
    this._dstIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIpInput() {
    return this._dstIp;
  }

  // dst_ip_enqueue - computed: false, optional: true, required: false
  private _dstIpEnqueue?: number; 
  public get dstIpEnqueue() {
    return this.getNumberAttribute('dst_ip_enqueue');
  }
  public set dstIpEnqueue(value: number) {
    this._dstIpEnqueue = value;
  }
  public resetDstIpEnqueue() {
    this._dstIpEnqueue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIpEnqueueInput() {
    return this._dstIpEnqueue;
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

  // dst_ip_hash_enqueue - computed: false, optional: true, required: false
  private _dstIpHashEnqueue?: number; 
  public get dstIpHashEnqueue() {
    return this.getNumberAttribute('dst_ip_hash_enqueue');
  }
  public set dstIpHashEnqueue(value: number) {
    this._dstIpHashEnqueue = value;
  }
  public resetDstIpHashEnqueue() {
    this._dstIpHashEnqueue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIpHashEnqueueInput() {
    return this._dstIpHashEnqueue;
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

  // dst_ip_hash_pri - computed: false, optional: true, required: false
  private _dstIpHashPri?: number; 
  public get dstIpHashPri() {
    return this.getNumberAttribute('dst_ip_hash_pri');
  }
  public set dstIpHashPri(value: number) {
    this._dstIpHashPri = value;
  }
  public resetDstIpHashPri() {
    this._dstIpHashPri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIpHashPriInput() {
    return this._dstIpHashPri;
  }

  // dst_ip_hash_sec - computed: false, optional: true, required: false
  private _dstIpHashSec?: number; 
  public get dstIpHashSec() {
    return this.getNumberAttribute('dst_ip_hash_sec');
  }
  public set dstIpHashSec(value: number) {
    this._dstIpHashSec = value;
  }
  public resetDstIpHashSec() {
    this._dstIpHashSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIpHashSecInput() {
    return this._dstIpHashSec;
  }

  // dst_ip_new_sess_cache - computed: false, optional: true, required: false
  private _dstIpNewSessCache?: number; 
  public get dstIpNewSessCache() {
    return this.getNumberAttribute('dst_ip_new_sess_cache');
  }
  public set dstIpNewSessCache(value: number) {
    this._dstIpNewSessCache = value;
  }
  public resetDstIpNewSessCache() {
    this._dstIpNewSessCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIpNewSessCacheInput() {
    return this._dstIpNewSessCache;
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

  // dst_ip_new_sess_sel - computed: false, optional: true, required: false
  private _dstIpNewSessSel?: number; 
  public get dstIpNewSessSel() {
    return this.getNumberAttribute('dst_ip_new_sess_sel');
  }
  public set dstIpNewSessSel(value: number) {
    this._dstIpNewSessSel = value;
  }
  public resetDstIpNewSessSel() {
    this._dstIpNewSessSel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIpNewSessSelInput() {
    return this._dstIpNewSessSel;
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

  // hash_tbl_create_ok - computed: false, optional: true, required: false
  private _hashTblCreateOk?: number; 
  public get hashTblCreateOk() {
    return this.getNumberAttribute('hash_tbl_create_ok');
  }
  public set hashTblCreateOk(value: number) {
    this._hashTblCreateOk = value;
  }
  public resetHashTblCreateOk() {
    this._hashTblCreateOk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashTblCreateOkInput() {
    return this._hashTblCreateOk;
  }

  // hash_tbl_free - computed: false, optional: true, required: false
  private _hashTblFree?: number; 
  public get hashTblFree() {
    return this.getNumberAttribute('hash_tbl_free');
  }
  public set hashTblFree(value: number) {
    this._hashTblFree = value;
  }
  public resetHashTblFree() {
    this._hashTblFree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashTblFreeInput() {
    return this._hashTblFree;
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

  // header_hash_enqueue - computed: false, optional: true, required: false
  private _headerHashEnqueue?: number; 
  public get headerHashEnqueue() {
    return this.getNumberAttribute('header_hash_enqueue');
  }
  public set headerHashEnqueue(value: number) {
    this._headerHashEnqueue = value;
  }
  public resetHeaderHashEnqueue() {
    this._headerHashEnqueue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerHashEnqueueInput() {
    return this._headerHashEnqueue;
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

  // header_hash_pri - computed: false, optional: true, required: false
  private _headerHashPri?: number; 
  public get headerHashPri() {
    return this.getNumberAttribute('header_hash_pri');
  }
  public set headerHashPri(value: number) {
    this._headerHashPri = value;
  }
  public resetHeaderHashPri() {
    this._headerHashPri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerHashPriInput() {
    return this._headerHashPri;
  }

  // header_hash_sec - computed: false, optional: true, required: false
  private _headerHashSec?: number; 
  public get headerHashSec() {
    return this.getNumberAttribute('header_hash_sec');
  }
  public set headerHashSec(value: number) {
    this._headerHashSec = value;
  }
  public resetHeaderHashSec() {
    this._headerHashSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerHashSecInput() {
    return this._headerHashSec;
  }

  // src_ip - computed: false, optional: true, required: false
  private _srcIp?: number; 
  public get srcIp() {
    return this.getNumberAttribute('src_ip');
  }
  public set srcIp(value: number) {
    this._srcIp = value;
  }
  public resetSrcIp() {
    this._srcIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpInput() {
    return this._srcIp;
  }

  // src_ip_enforce - computed: false, optional: true, required: false
  private _srcIpEnforce?: number; 
  public get srcIpEnforce() {
    return this.getNumberAttribute('src_ip_enforce');
  }
  public set srcIpEnforce(value: number) {
    this._srcIpEnforce = value;
  }
  public resetSrcIpEnforce() {
    this._srcIpEnforce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpEnforceInput() {
    return this._srcIpEnforce;
  }

  // src_ip_enqueue - computed: false, optional: true, required: false
  private _srcIpEnqueue?: number; 
  public get srcIpEnqueue() {
    return this.getNumberAttribute('src_ip_enqueue');
  }
  public set srcIpEnqueue(value: number) {
    this._srcIpEnqueue = value;
  }
  public resetSrcIpEnqueue() {
    this._srcIpEnqueue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpEnqueueInput() {
    return this._srcIpEnqueue;
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

  // src_ip_hash_enqueue - computed: false, optional: true, required: false
  private _srcIpHashEnqueue?: number; 
  public get srcIpHashEnqueue() {
    return this.getNumberAttribute('src_ip_hash_enqueue');
  }
  public set srcIpHashEnqueue(value: number) {
    this._srcIpHashEnqueue = value;
  }
  public resetSrcIpHashEnqueue() {
    this._srcIpHashEnqueue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpHashEnqueueInput() {
    return this._srcIpHashEnqueue;
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

  // src_ip_hash_pri - computed: false, optional: true, required: false
  private _srcIpHashPri?: number; 
  public get srcIpHashPri() {
    return this.getNumberAttribute('src_ip_hash_pri');
  }
  public set srcIpHashPri(value: number) {
    this._srcIpHashPri = value;
  }
  public resetSrcIpHashPri() {
    this._srcIpHashPri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpHashPriInput() {
    return this._srcIpHashPri;
  }

  // src_ip_hash_sec - computed: false, optional: true, required: false
  private _srcIpHashSec?: number; 
  public get srcIpHashSec() {
    return this.getNumberAttribute('src_ip_hash_sec');
  }
  public set srcIpHashSec(value: number) {
    this._srcIpHashSec = value;
  }
  public resetSrcIpHashSec() {
    this._srcIpHashSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpHashSecInput() {
    return this._srcIpHashSec;
  }

  // src_ip_new_sess_cache - computed: false, optional: true, required: false
  private _srcIpNewSessCache?: number; 
  public get srcIpNewSessCache() {
    return this.getNumberAttribute('src_ip_new_sess_cache');
  }
  public set srcIpNewSessCache(value: number) {
    this._srcIpNewSessCache = value;
  }
  public resetSrcIpNewSessCache() {
    this._srcIpNewSessCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpNewSessCacheInput() {
    return this._srcIpNewSessCache;
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

  // src_ip_new_sess_sel - computed: false, optional: true, required: false
  private _srcIpNewSessSel?: number; 
  public get srcIpNewSessSel() {
    return this.getNumberAttribute('src_ip_new_sess_sel');
  }
  public set srcIpNewSessSel(value: number) {
    this._srcIpNewSessSel = value;
  }
  public resetSrcIpNewSessSel() {
    this._srcIpNewSessSel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpNewSessSelInput() {
    return this._srcIpNewSessSel;
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

  // ssl_sid_persist_ok - computed: false, optional: true, required: false
  private _sslSidPersistOk?: number; 
  public get sslSidPersistOk() {
    return this.getNumberAttribute('ssl_sid_persist_ok');
  }
  public set sslSidPersistOk(value: number) {
    this._sslSidPersistOk = value;
  }
  public resetSslSidPersistOk() {
    this._sslSidPersistOk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslSidPersistOkInput() {
    return this._sslSidPersistOk;
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

  // ssl_sid_session_ok - computed: false, optional: true, required: false
  private _sslSidSessionOk?: number; 
  public get sslSidSessionOk() {
    return this.getNumberAttribute('ssl_sid_session_ok');
  }
  public set sslSidSessionOk(value: number) {
    this._sslSidSessionOk = value;
  }
  public resetSslSidSessionOk() {
    this._sslSidSessionOk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslSidSessionOkInput() {
    return this._sslSidSessionOk;
  }

  // sssl_sid_match - computed: false, optional: true, required: false
  private _ssslSidMatch?: number; 
  public get ssslSidMatch() {
    return this.getNumberAttribute('sssl_sid_match');
  }
  public set ssslSidMatch(value: number) {
    this._ssslSidMatch = value;
  }
  public resetSsslSidMatch() {
    this._ssslSidMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssslSidMatchInput() {
    return this._ssslSidMatch;
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

  // sssl_sid_reset - computed: false, optional: true, required: false
  private _ssslSidReset?: number; 
  public get ssslSidReset() {
    return this.getNumberAttribute('sssl_sid_reset');
  }
  public set ssslSidReset(value: number) {
    this._ssslSidReset = value;
  }
  public resetSsslSidReset() {
    this._ssslSidReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssslSidResetInput() {
    return this._ssslSidReset;
  }

  // url_hash_enqueue - computed: false, optional: true, required: false
  private _urlHashEnqueue?: number; 
  public get urlHashEnqueue() {
    return this.getNumberAttribute('url_hash_enqueue');
  }
  public set urlHashEnqueue(value: number) {
    this._urlHashEnqueue = value;
  }
  public resetUrlHashEnqueue() {
    this._urlHashEnqueue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlHashEnqueueInput() {
    return this._urlHashEnqueue;
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

  // url_hash_pri - computed: false, optional: true, required: false
  private _urlHashPri?: number; 
  public get urlHashPri() {
    return this.getNumberAttribute('url_hash_pri');
  }
  public set urlHashPri(value: number) {
    this._urlHashPri = value;
  }
  public resetUrlHashPri() {
    this._urlHashPri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlHashPriInput() {
    return this._urlHashPri;
  }

  // url_hash_sec - computed: false, optional: true, required: false
  private _urlHashSec?: number; 
  public get urlHashSec() {
    return this.getNumberAttribute('url_hash_sec');
  }
  public set urlHashSec(value: number) {
    this._urlHashSec = value;
  }
  public resetUrlHashSec() {
    this._urlHashSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlHashSecInput() {
    return this._urlHashSec;
  }
}

export class DataThunderSlbPersistOperOperPersistCpuListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderSlbPersistOperOperPersistCpuListStruct[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataThunderSlbPersistOperOperPersistCpuListStructOutputReference {
    return new DataThunderSlbPersistOperOperPersistCpuListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSlbPersistOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_persist_oper#cpu_count DataThunderSlbPersistOper#cpu_count}
  */
  readonly cpuCount?: number;
  /**
  * persist_cpu_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_persist_oper#persist_cpu_list DataThunderSlbPersistOper#persist_cpu_list}
  */
  readonly persistCpuList?: DataThunderSlbPersistOperOperPersistCpuListStruct[] | cdktf.IResolvable;
}

export function dataThunderSlbPersistOperOperToTerraform(struct?: DataThunderSlbPersistOperOperOutputReference | DataThunderSlbPersistOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_count: cdktf.numberToTerraform(struct!.cpuCount),
    persist_cpu_list: cdktf.listMapper(dataThunderSlbPersistOperOperPersistCpuListStructToTerraform, true)(struct!.persistCpuList),
  }
}


export function dataThunderSlbPersistOperOperToHclTerraform(struct?: DataThunderSlbPersistOperOperOutputReference | DataThunderSlbPersistOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_count: {
      value: cdktf.numberToHclTerraform(struct!.cpuCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    persist_cpu_list: {
      value: cdktf.listMapperHcl(dataThunderSlbPersistOperOperPersistCpuListStructToHclTerraform, true)(struct!.persistCpuList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSlbPersistOperOperPersistCpuListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbPersistOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbPersistOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuCount = this._cpuCount;
    }
    if (this._persistCpuList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistCpuList = this._persistCpuList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbPersistOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpuCount = undefined;
      this._persistCpuList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpuCount = value.cpuCount;
      this._persistCpuList.internalValue = value.persistCpuList;
    }
  }

  // cpu_count - computed: false, optional: true, required: false
  private _cpuCount?: number; 
  public get cpuCount() {
    return this.getNumberAttribute('cpu_count');
  }
  public set cpuCount(value: number) {
    this._cpuCount = value;
  }
  public resetCpuCount() {
    this._cpuCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCountInput() {
    return this._cpuCount;
  }

  // persist_cpu_list - computed: false, optional: true, required: false
  private _persistCpuList = new DataThunderSlbPersistOperOperPersistCpuListStructList(this, "persist_cpu_list", false);
  public get persistCpuList() {
    return this._persistCpuList;
  }
  public putPersistCpuList(value: DataThunderSlbPersistOperOperPersistCpuListStruct[] | cdktf.IResolvable) {
    this._persistCpuList.internalValue = value;
  }
  public resetPersistCpuList() {
    this._persistCpuList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistCpuListInput() {
    return this._persistCpuList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_persist_oper thunder_slb_persist_oper}
*/
export class DataThunderSlbPersistOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_persist_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbPersistOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbPersistOper to import
  * @param importFromId The id of the existing DataThunderSlbPersistOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_persist_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbPersistOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_persist_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_persist_oper thunder_slb_persist_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbPersistOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbPersistOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_persist_oper',
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
    this._id = config.id;
    this._oper.internalValue = config.oper;
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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderSlbPersistOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSlbPersistOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      oper: dataThunderSlbPersistOperOperToTerraform(this._oper.internalValue),
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
      oper: {
        value: dataThunderSlbPersistOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbPersistOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
