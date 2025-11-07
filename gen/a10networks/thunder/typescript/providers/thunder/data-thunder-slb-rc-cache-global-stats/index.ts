// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbRcCacheGlobalStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_stats#id DataThunderSlbRcCacheGlobalStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_stats#stats DataThunderSlbRcCacheGlobalStats#stats}
  */
  readonly stats?: DataThunderSlbRcCacheGlobalStatsStats;
}
export interface DataThunderSlbRcCacheGlobalStatsStats {
  /**
  * Entry Aged Out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_stats#aging_entry DataThunderSlbRcCacheGlobalStats#aging_entry}
  */
  readonly agingEntry?: number;
  /**
  * Bytes Served
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_stats#bytes_served DataThunderSlbRcCacheGlobalStats#bytes_served}
  */
  readonly bytesServed?: number;
  /**
  * Cacheable Requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_stats#caching_req DataThunderSlbRcCacheGlobalStats#caching_req}
  */
  readonly cachingReq?: number;
  /**
  * Entry Cleaned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_stats#cleaned_entry DataThunderSlbRcCacheGlobalStats#cleaned_entry}
  */
  readonly cleanedEntry?: number;
  /**
  * Policy Content Too Big
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_stats#content_toobig DataThunderSlbRcCacheGlobalStats#content_toobig}
  */
  readonly contentToobig?: number;
  /**
  * Policy Content Too Small
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_stats#content_toosmall DataThunderSlbRcCacheGlobalStats#content_toosmall}
  */
  readonly contentToosmall?: number;
  /**
  * Entry Create failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_stats#entry_create_failures DataThunderSlbRcCacheGlobalStats#entry_create_failures}
  */
  readonly entryCreateFailures?: number;
  /**
  * Entry Cached
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_stats#entry_num DataThunderSlbRcCacheGlobalStats#entry_num}
  */
  readonly entryNum?: number;
  /**
  * Cache Hits
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_stats#hits DataThunderSlbRcCacheGlobalStats#hits}
  */
  readonly hits?: number;
  /**
  * IMS Requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_stats#ims_request DataThunderSlbRcCacheGlobalStats#ims_request}
  */
  readonly imsRequest?: number;
  /**
  * Policy URI invalidate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_stats#invalidate_match DataThunderSlbRcCacheGlobalStats#invalidate_match}
  */
  readonly invalidateMatch?: number;
  /**
  * Policy URI cache
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_stats#match DataThunderSlbRcCacheGlobalStats#match}
  */
  readonly match?: number;
  /**
  * Memory Used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_stats#mem_size DataThunderSlbRcCacheGlobalStats#mem_size}
  */
  readonly memSize?: number;
  /**
  * Cache Misses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_stats#miss DataThunderSlbRcCacheGlobalStats#miss}
  */
  readonly miss?: number;
  /**
  * No-cache Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_stats#nc_req_header DataThunderSlbRcCacheGlobalStats#nc_req_header}
  */
  readonly ncReqHeader?: number;
  /**
  * Not cacheable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_stats#nc_res_header DataThunderSlbRcCacheGlobalStats#nc_res_header}
  */
  readonly ncResHeader?: number;
  /**
  * Responses from cache 304 Not Modified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_stats#nm_response DataThunderSlbRcCacheGlobalStats#nm_response}
  */
  readonly nmResponse?: number;
  /**
  * Policy URI nocache
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_stats#nocache_match DataThunderSlbRcCacheGlobalStats#nocache_match}
  */
  readonly nocacheMatch?: number;
  /**
  * Entry Replaced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_stats#replaced_entry DataThunderSlbRcCacheGlobalStats#replaced_entry}
  */
  readonly replacedEntry?: number;
  /**
  * Responses from cache 200 OK - Brotli
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_stats#rsp_br DataThunderSlbRcCacheGlobalStats#rsp_br}
  */
  readonly rspBr?: number;
  /**
  * Responses from cache 200 OK - Deflate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_stats#rsp_deflate DataThunderSlbRcCacheGlobalStats#rsp_deflate}
  */
  readonly rspDeflate?: number;
  /**
  * Responses from cache 200 OK - Gzip
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_stats#rsp_gzip DataThunderSlbRcCacheGlobalStats#rsp_gzip}
  */
  readonly rspGzip?: number;
  /**
  * Responses from cache 200 OK - No Comp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_stats#rsp_no_compress DataThunderSlbRcCacheGlobalStats#rsp_no_compress}
  */
  readonly rspNoCompress?: number;
  /**
  * Responses from cache Other
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_stats#rsp_other DataThunderSlbRcCacheGlobalStats#rsp_other}
  */
  readonly rspOther?: number;
  /**
  * Responses from server 304 Not Modified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_stats#rsp_type_304 DataThunderSlbRcCacheGlobalStats#rsp_type_304}
  */
  readonly rspType304?: number;
  /**
  * Responses from server 200 OK - Chnk Enc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_stats#rsp_type_ce DataThunderSlbRcCacheGlobalStats#rsp_type_ce}
  */
  readonly rspTypeCe?: number;
  /**
  * Responses from server 200 OK - Cont Len
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_stats#rsp_type_cl DataThunderSlbRcCacheGlobalStats#rsp_type_cl}
  */
  readonly rspTypeCl?: number;
  /**
  * Responses from server 200 OK - Other
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_stats#rsp_type_other DataThunderSlbRcCacheGlobalStats#rsp_type_other}
  */
  readonly rspTypeOther?: number;
  /**
  * Responses from http2 server 200 OK - Stream
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_stats#rsp_type_stream DataThunderSlbRcCacheGlobalStats#rsp_type_stream}
  */
  readonly rspTypeStream?: number;
  /**
  * Revalidation Failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_stats#rv_failure DataThunderSlbRcCacheGlobalStats#rv_failure}
  */
  readonly rvFailure?: number;
  /**
  * Revalidation Successes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_stats#rv_success DataThunderSlbRcCacheGlobalStats#rv_success}
  */
  readonly rvSuccess?: number;
  /**
  * Total Requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_stats#total_req DataThunderSlbRcCacheGlobalStats#total_req}
  */
  readonly totalReq?: number;
}

export function dataThunderSlbRcCacheGlobalStatsStatsToTerraform(struct?: DataThunderSlbRcCacheGlobalStatsStatsOutputReference | DataThunderSlbRcCacheGlobalStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aging_entry: cdktf.numberToTerraform(struct!.agingEntry),
    bytes_served: cdktf.numberToTerraform(struct!.bytesServed),
    caching_req: cdktf.numberToTerraform(struct!.cachingReq),
    cleaned_entry: cdktf.numberToTerraform(struct!.cleanedEntry),
    content_toobig: cdktf.numberToTerraform(struct!.contentToobig),
    content_toosmall: cdktf.numberToTerraform(struct!.contentToosmall),
    entry_create_failures: cdktf.numberToTerraform(struct!.entryCreateFailures),
    entry_num: cdktf.numberToTerraform(struct!.entryNum),
    hits: cdktf.numberToTerraform(struct!.hits),
    ims_request: cdktf.numberToTerraform(struct!.imsRequest),
    invalidate_match: cdktf.numberToTerraform(struct!.invalidateMatch),
    match: cdktf.numberToTerraform(struct!.match),
    mem_size: cdktf.numberToTerraform(struct!.memSize),
    miss: cdktf.numberToTerraform(struct!.miss),
    nc_req_header: cdktf.numberToTerraform(struct!.ncReqHeader),
    nc_res_header: cdktf.numberToTerraform(struct!.ncResHeader),
    nm_response: cdktf.numberToTerraform(struct!.nmResponse),
    nocache_match: cdktf.numberToTerraform(struct!.nocacheMatch),
    replaced_entry: cdktf.numberToTerraform(struct!.replacedEntry),
    rsp_br: cdktf.numberToTerraform(struct!.rspBr),
    rsp_deflate: cdktf.numberToTerraform(struct!.rspDeflate),
    rsp_gzip: cdktf.numberToTerraform(struct!.rspGzip),
    rsp_no_compress: cdktf.numberToTerraform(struct!.rspNoCompress),
    rsp_other: cdktf.numberToTerraform(struct!.rspOther),
    rsp_type_304: cdktf.numberToTerraform(struct!.rspType304),
    rsp_type_ce: cdktf.numberToTerraform(struct!.rspTypeCe),
    rsp_type_cl: cdktf.numberToTerraform(struct!.rspTypeCl),
    rsp_type_other: cdktf.numberToTerraform(struct!.rspTypeOther),
    rsp_type_stream: cdktf.numberToTerraform(struct!.rspTypeStream),
    rv_failure: cdktf.numberToTerraform(struct!.rvFailure),
    rv_success: cdktf.numberToTerraform(struct!.rvSuccess),
    total_req: cdktf.numberToTerraform(struct!.totalReq),
  }
}


export function dataThunderSlbRcCacheGlobalStatsStatsToHclTerraform(struct?: DataThunderSlbRcCacheGlobalStatsStatsOutputReference | DataThunderSlbRcCacheGlobalStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aging_entry: {
      value: cdktf.numberToHclTerraform(struct!.agingEntry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bytes_served: {
      value: cdktf.numberToHclTerraform(struct!.bytesServed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    caching_req: {
      value: cdktf.numberToHclTerraform(struct!.cachingReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cleaned_entry: {
      value: cdktf.numberToHclTerraform(struct!.cleanedEntry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
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
    entry_num: {
      value: cdktf.numberToHclTerraform(struct!.entryNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hits: {
      value: cdktf.numberToHclTerraform(struct!.hits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ims_request: {
      value: cdktf.numberToHclTerraform(struct!.imsRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    invalidate_match: {
      value: cdktf.numberToHclTerraform(struct!.invalidateMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match: {
      value: cdktf.numberToHclTerraform(struct!.match),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mem_size: {
      value: cdktf.numberToHclTerraform(struct!.memSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    miss: {
      value: cdktf.numberToHclTerraform(struct!.miss),
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
    nm_response: {
      value: cdktf.numberToHclTerraform(struct!.nmResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nocache_match: {
      value: cdktf.numberToHclTerraform(struct!.nocacheMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    replaced_entry: {
      value: cdktf.numberToHclTerraform(struct!.replacedEntry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rsp_br: {
      value: cdktf.numberToHclTerraform(struct!.rspBr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rsp_deflate: {
      value: cdktf.numberToHclTerraform(struct!.rspDeflate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rsp_gzip: {
      value: cdktf.numberToHclTerraform(struct!.rspGzip),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rsp_no_compress: {
      value: cdktf.numberToHclTerraform(struct!.rspNoCompress),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rsp_other: {
      value: cdktf.numberToHclTerraform(struct!.rspOther),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rsp_type_304: {
      value: cdktf.numberToHclTerraform(struct!.rspType304),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rsp_type_ce: {
      value: cdktf.numberToHclTerraform(struct!.rspTypeCe),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rsp_type_cl: {
      value: cdktf.numberToHclTerraform(struct!.rspTypeCl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rsp_type_other: {
      value: cdktf.numberToHclTerraform(struct!.rspTypeOther),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rsp_type_stream: {
      value: cdktf.numberToHclTerraform(struct!.rspTypeStream),
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
    rv_success: {
      value: cdktf.numberToHclTerraform(struct!.rvSuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_req: {
      value: cdktf.numberToHclTerraform(struct!.totalReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbRcCacheGlobalStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbRcCacheGlobalStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agingEntry !== undefined) {
      hasAnyValues = true;
      internalValueResult.agingEntry = this._agingEntry;
    }
    if (this._bytesServed !== undefined) {
      hasAnyValues = true;
      internalValueResult.bytesServed = this._bytesServed;
    }
    if (this._cachingReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.cachingReq = this._cachingReq;
    }
    if (this._cleanedEntry !== undefined) {
      hasAnyValues = true;
      internalValueResult.cleanedEntry = this._cleanedEntry;
    }
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
    if (this._entryNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryNum = this._entryNum;
    }
    if (this._hits !== undefined) {
      hasAnyValues = true;
      internalValueResult.hits = this._hits;
    }
    if (this._imsRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.imsRequest = this._imsRequest;
    }
    if (this._invalidateMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidateMatch = this._invalidateMatch;
    }
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    if (this._memSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.memSize = this._memSize;
    }
    if (this._miss !== undefined) {
      hasAnyValues = true;
      internalValueResult.miss = this._miss;
    }
    if (this._ncReqHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.ncReqHeader = this._ncReqHeader;
    }
    if (this._ncResHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.ncResHeader = this._ncResHeader;
    }
    if (this._nmResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.nmResponse = this._nmResponse;
    }
    if (this._nocacheMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.nocacheMatch = this._nocacheMatch;
    }
    if (this._replacedEntry !== undefined) {
      hasAnyValues = true;
      internalValueResult.replacedEntry = this._replacedEntry;
    }
    if (this._rspBr !== undefined) {
      hasAnyValues = true;
      internalValueResult.rspBr = this._rspBr;
    }
    if (this._rspDeflate !== undefined) {
      hasAnyValues = true;
      internalValueResult.rspDeflate = this._rspDeflate;
    }
    if (this._rspGzip !== undefined) {
      hasAnyValues = true;
      internalValueResult.rspGzip = this._rspGzip;
    }
    if (this._rspNoCompress !== undefined) {
      hasAnyValues = true;
      internalValueResult.rspNoCompress = this._rspNoCompress;
    }
    if (this._rspOther !== undefined) {
      hasAnyValues = true;
      internalValueResult.rspOther = this._rspOther;
    }
    if (this._rspType304 !== undefined) {
      hasAnyValues = true;
      internalValueResult.rspType304 = this._rspType304;
    }
    if (this._rspTypeCe !== undefined) {
      hasAnyValues = true;
      internalValueResult.rspTypeCe = this._rspTypeCe;
    }
    if (this._rspTypeCl !== undefined) {
      hasAnyValues = true;
      internalValueResult.rspTypeCl = this._rspTypeCl;
    }
    if (this._rspTypeOther !== undefined) {
      hasAnyValues = true;
      internalValueResult.rspTypeOther = this._rspTypeOther;
    }
    if (this._rspTypeStream !== undefined) {
      hasAnyValues = true;
      internalValueResult.rspTypeStream = this._rspTypeStream;
    }
    if (this._rvFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.rvFailure = this._rvFailure;
    }
    if (this._rvSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.rvSuccess = this._rvSuccess;
    }
    if (this._totalReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalReq = this._totalReq;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbRcCacheGlobalStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._agingEntry = undefined;
      this._bytesServed = undefined;
      this._cachingReq = undefined;
      this._cleanedEntry = undefined;
      this._contentToobig = undefined;
      this._contentToosmall = undefined;
      this._entryCreateFailures = undefined;
      this._entryNum = undefined;
      this._hits = undefined;
      this._imsRequest = undefined;
      this._invalidateMatch = undefined;
      this._match = undefined;
      this._memSize = undefined;
      this._miss = undefined;
      this._ncReqHeader = undefined;
      this._ncResHeader = undefined;
      this._nmResponse = undefined;
      this._nocacheMatch = undefined;
      this._replacedEntry = undefined;
      this._rspBr = undefined;
      this._rspDeflate = undefined;
      this._rspGzip = undefined;
      this._rspNoCompress = undefined;
      this._rspOther = undefined;
      this._rspType304 = undefined;
      this._rspTypeCe = undefined;
      this._rspTypeCl = undefined;
      this._rspTypeOther = undefined;
      this._rspTypeStream = undefined;
      this._rvFailure = undefined;
      this._rvSuccess = undefined;
      this._totalReq = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._agingEntry = value.agingEntry;
      this._bytesServed = value.bytesServed;
      this._cachingReq = value.cachingReq;
      this._cleanedEntry = value.cleanedEntry;
      this._contentToobig = value.contentToobig;
      this._contentToosmall = value.contentToosmall;
      this._entryCreateFailures = value.entryCreateFailures;
      this._entryNum = value.entryNum;
      this._hits = value.hits;
      this._imsRequest = value.imsRequest;
      this._invalidateMatch = value.invalidateMatch;
      this._match = value.match;
      this._memSize = value.memSize;
      this._miss = value.miss;
      this._ncReqHeader = value.ncReqHeader;
      this._ncResHeader = value.ncResHeader;
      this._nmResponse = value.nmResponse;
      this._nocacheMatch = value.nocacheMatch;
      this._replacedEntry = value.replacedEntry;
      this._rspBr = value.rspBr;
      this._rspDeflate = value.rspDeflate;
      this._rspGzip = value.rspGzip;
      this._rspNoCompress = value.rspNoCompress;
      this._rspOther = value.rspOther;
      this._rspType304 = value.rspType304;
      this._rspTypeCe = value.rspTypeCe;
      this._rspTypeCl = value.rspTypeCl;
      this._rspTypeOther = value.rspTypeOther;
      this._rspTypeStream = value.rspTypeStream;
      this._rvFailure = value.rvFailure;
      this._rvSuccess = value.rvSuccess;
      this._totalReq = value.totalReq;
    }
  }

  // aging_entry - computed: false, optional: true, required: false
  private _agingEntry?: number; 
  public get agingEntry() {
    return this.getNumberAttribute('aging_entry');
  }
  public set agingEntry(value: number) {
    this._agingEntry = value;
  }
  public resetAgingEntry() {
    this._agingEntry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agingEntryInput() {
    return this._agingEntry;
  }

  // bytes_served - computed: false, optional: true, required: false
  private _bytesServed?: number; 
  public get bytesServed() {
    return this.getNumberAttribute('bytes_served');
  }
  public set bytesServed(value: number) {
    this._bytesServed = value;
  }
  public resetBytesServed() {
    this._bytesServed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bytesServedInput() {
    return this._bytesServed;
  }

  // caching_req - computed: false, optional: true, required: false
  private _cachingReq?: number; 
  public get cachingReq() {
    return this.getNumberAttribute('caching_req');
  }
  public set cachingReq(value: number) {
    this._cachingReq = value;
  }
  public resetCachingReq() {
    this._cachingReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachingReqInput() {
    return this._cachingReq;
  }

  // cleaned_entry - computed: false, optional: true, required: false
  private _cleanedEntry?: number; 
  public get cleanedEntry() {
    return this.getNumberAttribute('cleaned_entry');
  }
  public set cleanedEntry(value: number) {
    this._cleanedEntry = value;
  }
  public resetCleanedEntry() {
    this._cleanedEntry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanedEntryInput() {
    return this._cleanedEntry;
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

  // entry_num - computed: false, optional: true, required: false
  private _entryNum?: number; 
  public get entryNum() {
    return this.getNumberAttribute('entry_num');
  }
  public set entryNum(value: number) {
    this._entryNum = value;
  }
  public resetEntryNum() {
    this._entryNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryNumInput() {
    return this._entryNum;
  }

  // hits - computed: false, optional: true, required: false
  private _hits?: number; 
  public get hits() {
    return this.getNumberAttribute('hits');
  }
  public set hits(value: number) {
    this._hits = value;
  }
  public resetHits() {
    this._hits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hitsInput() {
    return this._hits;
  }

  // ims_request - computed: false, optional: true, required: false
  private _imsRequest?: number; 
  public get imsRequest() {
    return this.getNumberAttribute('ims_request');
  }
  public set imsRequest(value: number) {
    this._imsRequest = value;
  }
  public resetImsRequest() {
    this._imsRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imsRequestInput() {
    return this._imsRequest;
  }

  // invalidate_match - computed: false, optional: true, required: false
  private _invalidateMatch?: number; 
  public get invalidateMatch() {
    return this.getNumberAttribute('invalidate_match');
  }
  public set invalidateMatch(value: number) {
    this._invalidateMatch = value;
  }
  public resetInvalidateMatch() {
    this._invalidateMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidateMatchInput() {
    return this._invalidateMatch;
  }

  // match - computed: false, optional: true, required: false
  private _match?: number; 
  public get match() {
    return this.getNumberAttribute('match');
  }
  public set match(value: number) {
    this._match = value;
  }
  public resetMatch() {
    this._match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }

  // mem_size - computed: false, optional: true, required: false
  private _memSize?: number; 
  public get memSize() {
    return this.getNumberAttribute('mem_size');
  }
  public set memSize(value: number) {
    this._memSize = value;
  }
  public resetMemSize() {
    this._memSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memSizeInput() {
    return this._memSize;
  }

  // miss - computed: false, optional: true, required: false
  private _miss?: number; 
  public get miss() {
    return this.getNumberAttribute('miss');
  }
  public set miss(value: number) {
    this._miss = value;
  }
  public resetMiss() {
    this._miss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get missInput() {
    return this._miss;
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

  // nm_response - computed: false, optional: true, required: false
  private _nmResponse?: number; 
  public get nmResponse() {
    return this.getNumberAttribute('nm_response');
  }
  public set nmResponse(value: number) {
    this._nmResponse = value;
  }
  public resetNmResponse() {
    this._nmResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nmResponseInput() {
    return this._nmResponse;
  }

  // nocache_match - computed: false, optional: true, required: false
  private _nocacheMatch?: number; 
  public get nocacheMatch() {
    return this.getNumberAttribute('nocache_match');
  }
  public set nocacheMatch(value: number) {
    this._nocacheMatch = value;
  }
  public resetNocacheMatch() {
    this._nocacheMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nocacheMatchInput() {
    return this._nocacheMatch;
  }

  // replaced_entry - computed: false, optional: true, required: false
  private _replacedEntry?: number; 
  public get replacedEntry() {
    return this.getNumberAttribute('replaced_entry');
  }
  public set replacedEntry(value: number) {
    this._replacedEntry = value;
  }
  public resetReplacedEntry() {
    this._replacedEntry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacedEntryInput() {
    return this._replacedEntry;
  }

  // rsp_br - computed: false, optional: true, required: false
  private _rspBr?: number; 
  public get rspBr() {
    return this.getNumberAttribute('rsp_br');
  }
  public set rspBr(value: number) {
    this._rspBr = value;
  }
  public resetRspBr() {
    this._rspBr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rspBrInput() {
    return this._rspBr;
  }

  // rsp_deflate - computed: false, optional: true, required: false
  private _rspDeflate?: number; 
  public get rspDeflate() {
    return this.getNumberAttribute('rsp_deflate');
  }
  public set rspDeflate(value: number) {
    this._rspDeflate = value;
  }
  public resetRspDeflate() {
    this._rspDeflate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rspDeflateInput() {
    return this._rspDeflate;
  }

  // rsp_gzip - computed: false, optional: true, required: false
  private _rspGzip?: number; 
  public get rspGzip() {
    return this.getNumberAttribute('rsp_gzip');
  }
  public set rspGzip(value: number) {
    this._rspGzip = value;
  }
  public resetRspGzip() {
    this._rspGzip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rspGzipInput() {
    return this._rspGzip;
  }

  // rsp_no_compress - computed: false, optional: true, required: false
  private _rspNoCompress?: number; 
  public get rspNoCompress() {
    return this.getNumberAttribute('rsp_no_compress');
  }
  public set rspNoCompress(value: number) {
    this._rspNoCompress = value;
  }
  public resetRspNoCompress() {
    this._rspNoCompress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rspNoCompressInput() {
    return this._rspNoCompress;
  }

  // rsp_other - computed: false, optional: true, required: false
  private _rspOther?: number; 
  public get rspOther() {
    return this.getNumberAttribute('rsp_other');
  }
  public set rspOther(value: number) {
    this._rspOther = value;
  }
  public resetRspOther() {
    this._rspOther = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rspOtherInput() {
    return this._rspOther;
  }

  // rsp_type_304 - computed: false, optional: true, required: false
  private _rspType304?: number; 
  public get rspType304() {
    return this.getNumberAttribute('rsp_type_304');
  }
  public set rspType304(value: number) {
    this._rspType304 = value;
  }
  public resetRspType304() {
    this._rspType304 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rspType304Input() {
    return this._rspType304;
  }

  // rsp_type_ce - computed: false, optional: true, required: false
  private _rspTypeCe?: number; 
  public get rspTypeCe() {
    return this.getNumberAttribute('rsp_type_ce');
  }
  public set rspTypeCe(value: number) {
    this._rspTypeCe = value;
  }
  public resetRspTypeCe() {
    this._rspTypeCe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rspTypeCeInput() {
    return this._rspTypeCe;
  }

  // rsp_type_cl - computed: false, optional: true, required: false
  private _rspTypeCl?: number; 
  public get rspTypeCl() {
    return this.getNumberAttribute('rsp_type_cl');
  }
  public set rspTypeCl(value: number) {
    this._rspTypeCl = value;
  }
  public resetRspTypeCl() {
    this._rspTypeCl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rspTypeClInput() {
    return this._rspTypeCl;
  }

  // rsp_type_other - computed: false, optional: true, required: false
  private _rspTypeOther?: number; 
  public get rspTypeOther() {
    return this.getNumberAttribute('rsp_type_other');
  }
  public set rspTypeOther(value: number) {
    this._rspTypeOther = value;
  }
  public resetRspTypeOther() {
    this._rspTypeOther = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rspTypeOtherInput() {
    return this._rspTypeOther;
  }

  // rsp_type_stream - computed: false, optional: true, required: false
  private _rspTypeStream?: number; 
  public get rspTypeStream() {
    return this.getNumberAttribute('rsp_type_stream');
  }
  public set rspTypeStream(value: number) {
    this._rspTypeStream = value;
  }
  public resetRspTypeStream() {
    this._rspTypeStream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rspTypeStreamInput() {
    return this._rspTypeStream;
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

  // rv_success - computed: false, optional: true, required: false
  private _rvSuccess?: number; 
  public get rvSuccess() {
    return this.getNumberAttribute('rv_success');
  }
  public set rvSuccess(value: number) {
    this._rvSuccess = value;
  }
  public resetRvSuccess() {
    this._rvSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rvSuccessInput() {
    return this._rvSuccess;
  }

  // total_req - computed: false, optional: true, required: false
  private _totalReq?: number; 
  public get totalReq() {
    return this.getNumberAttribute('total_req');
  }
  public set totalReq(value: number) {
    this._totalReq = value;
  }
  public resetTotalReq() {
    this._totalReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalReqInput() {
    return this._totalReq;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_stats thunder_slb_rc_cache_global_stats}
*/
export class DataThunderSlbRcCacheGlobalStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_rc_cache_global_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbRcCacheGlobalStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbRcCacheGlobalStats to import
  * @param importFromId The id of the existing DataThunderSlbRcCacheGlobalStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbRcCacheGlobalStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_rc_cache_global_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_stats thunder_slb_rc_cache_global_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbRcCacheGlobalStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbRcCacheGlobalStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_rc_cache_global_stats',
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
    this._stats.internalValue = config.stats;
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

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderSlbRcCacheGlobalStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderSlbRcCacheGlobalStatsStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      stats: dataThunderSlbRcCacheGlobalStatsStatsToTerraform(this._stats.internalValue),
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
      stats: {
        value: dataThunderSlbRcCacheGlobalStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbRcCacheGlobalStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
