// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_global_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderLoggingLocalLogGlobalStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_global_stats#id DataThunderLoggingLocalLogGlobalStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_global_stats#stats DataThunderLoggingLocalLogGlobalStats#stats}
  */
  readonly stats?: DataThunderLoggingLocalLogGlobalStatsStats;
}
export interface DataThunderLoggingLocalLogGlobalStatsStats {
  /**
  * Total local-log AAM raw database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_global_stats#aam_db DataThunderLoggingLocalLogGlobalStats#aam_db}
  */
  readonly aamDb?: number;
  /**
  * Total local-log AAM top user summary database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_global_stats#aam_top_user_db DataThunderLoggingLocalLogGlobalStats#aam_top_user_db}
  */
  readonly aamTopUserDb?: number;
  /**
  * Total local-log database create error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_global_stats#db_erro DataThunderLoggingLocalLogGlobalStats#db_erro}
  */
  readonly dbErro?: number;
  /**
  * Total local-log dequeue
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_global_stats#dequeue DataThunderLoggingLocalLogGlobalStats#dequeue}
  */
  readonly dequeue?: number;
  /**
  * Total local-log dequeue processing error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_global_stats#dequeue_error DataThunderLoggingLocalLogGlobalStats#dequeue_error}
  */
  readonly dequeueError?: number;
  /**
  * Total local-log enqueue
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_global_stats#enqueue DataThunderLoggingLocalLogGlobalStats#enqueue}
  */
  readonly enqueue?: number;
  /**
  * Total local-log enqueue error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_global_stats#enqueue_error DataThunderLoggingLocalLogGlobalStats#enqueue_error}
  */
  readonly enqueueError?: number;
  /**
  * Total local-log queue full
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_global_stats#enqueue_full DataThunderLoggingLocalLogGlobalStats#enqueue_full}
  */
  readonly enqueueFull?: number;
  /**
  * Total local-log EP raw database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_global_stats#ep_db DataThunderLoggingLocalLogGlobalStats#ep_db}
  */
  readonly epDb?: number;
  /**
  * Total local-log EP top domain summary database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_global_stats#ep_top_domain_db DataThunderLoggingLocalLogGlobalStats#ep_top_domain_db}
  */
  readonly epTopDomainDb?: number;
  /**
  * Total local-log EP top destination summary database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_global_stats#ep_top_dst_db DataThunderLoggingLocalLogGlobalStats#ep_top_dst_db}
  */
  readonly epTopDstDb?: number;
  /**
  * Total local-log EP top host summary database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_global_stats#ep_top_host_db DataThunderLoggingLocalLogGlobalStats#ep_top_host_db}
  */
  readonly epTopHostDb?: number;
  /**
  * Total local-log EP top client summary database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_global_stats#ep_top_src_db DataThunderLoggingLocalLogGlobalStats#ep_top_src_db}
  */
  readonly epTopSrcDb?: number;
  /**
  * Total local-log EP top user summary database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_global_stats#ep_top_user_db DataThunderLoggingLocalLogGlobalStats#ep_top_user_db}
  */
  readonly epTopUserDb?: number;
  /**
  * Total local-log EP top web-category summary database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_global_stats#ep_top_web_category_db DataThunderLoggingLocalLogGlobalStats#ep_top_web_category_db}
  */
  readonly epTopWebCategoryDb?: number;
  /**
  * Total local-log Firewall raw database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_global_stats#fw_db DataThunderLoggingLocalLogGlobalStats#fw_db}
  */
  readonly fwDb?: number;
  /**
  * Total local-log Firewall top application summary database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_global_stats#fw_top_app_db DataThunderLoggingLocalLogGlobalStats#fw_top_app_db}
  */
  readonly fwTopAppDb?: number;
  /**
  * Total local-log Firewall top application and source summary database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_global_stats#fw_top_app_src_db DataThunderLoggingLocalLogGlobalStats#fw_top_app_src_db}
  */
  readonly fwTopAppSrcDb?: number;
  /**
  * Total local-log Firewall top category summary database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_global_stats#fw_top_category_db DataThunderLoggingLocalLogGlobalStats#fw_top_category_db}
  */
  readonly fwTopCategoryDb?: number;
  /**
  * Total local-log Firewall top source summary database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_global_stats#fw_top_src_db DataThunderLoggingLocalLogGlobalStats#fw_top_src_db}
  */
  readonly fwTopSrcDb?: number;
  /**
  * Total local-log Firewall top threat summary database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_global_stats#fw_top_thr_db DataThunderLoggingLocalLogGlobalStats#fw_top_thr_db}
  */
  readonly fwTopThrDb?: number;
  /**
  * Total local-log Firewall top threat and source summary database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_global_stats#fw_top_thr_src_db DataThunderLoggingLocalLogGlobalStats#fw_top_thr_src_db}
  */
  readonly fwTopThrSrcDb?: number;
  /**
  * Total layer 1 log summarized
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_global_stats#l1_log_summarized DataThunderLoggingLocalLogGlobalStats#l1_log_summarized}
  */
  readonly l1LogSummarized?: number;
  /**
  * Total layer 2 log summarized
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_global_stats#l2_log_summarized DataThunderLoggingLocalLogGlobalStats#l2_log_summarized}
  */
  readonly l2LogSummarized?: number;
  /**
  * Total raw log summarized
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_global_stats#log_summarized DataThunderLoggingLocalLogGlobalStats#log_summarized}
  */
  readonly logSummarized?: number;
  /**
  * Total local-log summarization error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_global_stats#log_summarized_error DataThunderLoggingLocalLogGlobalStats#log_summarized_error}
  */
  readonly logSummarizedError?: number;
  /**
  * Total local-log axapi query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_global_stats#query DataThunderLoggingLocalLogGlobalStats#query}
  */
  readonly query?: number;
  /**
  * Total local-log axapi query error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_global_stats#query_error DataThunderLoggingLocalLogGlobalStats#query_error}
  */
  readonly queryError?: number;
  /**
  * Total local-log raw logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_global_stats#raw_log DataThunderLoggingLocalLogGlobalStats#raw_log}
  */
  readonly rawLog?: number;
  /**
  * Total raw log logging error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_global_stats#raw_log_error DataThunderLoggingLocalLogGlobalStats#raw_log_error}
  */
  readonly rawLogError?: number;
  /**
  * Total local-log axapi response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_global_stats#response DataThunderLoggingLocalLogGlobalStats#response}
  */
  readonly response?: number;
}

export function dataThunderLoggingLocalLogGlobalStatsStatsToTerraform(struct?: DataThunderLoggingLocalLogGlobalStatsStatsOutputReference | DataThunderLoggingLocalLogGlobalStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aam_db: cdktf.numberToTerraform(struct!.aamDb),
    aam_top_user_db: cdktf.numberToTerraform(struct!.aamTopUserDb),
    db_erro: cdktf.numberToTerraform(struct!.dbErro),
    dequeue: cdktf.numberToTerraform(struct!.dequeue),
    dequeue_error: cdktf.numberToTerraform(struct!.dequeueError),
    enqueue: cdktf.numberToTerraform(struct!.enqueue),
    enqueue_error: cdktf.numberToTerraform(struct!.enqueueError),
    enqueue_full: cdktf.numberToTerraform(struct!.enqueueFull),
    ep_db: cdktf.numberToTerraform(struct!.epDb),
    ep_top_domain_db: cdktf.numberToTerraform(struct!.epTopDomainDb),
    ep_top_dst_db: cdktf.numberToTerraform(struct!.epTopDstDb),
    ep_top_host_db: cdktf.numberToTerraform(struct!.epTopHostDb),
    ep_top_src_db: cdktf.numberToTerraform(struct!.epTopSrcDb),
    ep_top_user_db: cdktf.numberToTerraform(struct!.epTopUserDb),
    ep_top_web_category_db: cdktf.numberToTerraform(struct!.epTopWebCategoryDb),
    fw_db: cdktf.numberToTerraform(struct!.fwDb),
    fw_top_app_db: cdktf.numberToTerraform(struct!.fwTopAppDb),
    fw_top_app_src_db: cdktf.numberToTerraform(struct!.fwTopAppSrcDb),
    fw_top_category_db: cdktf.numberToTerraform(struct!.fwTopCategoryDb),
    fw_top_src_db: cdktf.numberToTerraform(struct!.fwTopSrcDb),
    fw_top_thr_db: cdktf.numberToTerraform(struct!.fwTopThrDb),
    fw_top_thr_src_db: cdktf.numberToTerraform(struct!.fwTopThrSrcDb),
    l1_log_summarized: cdktf.numberToTerraform(struct!.l1LogSummarized),
    l2_log_summarized: cdktf.numberToTerraform(struct!.l2LogSummarized),
    log_summarized: cdktf.numberToTerraform(struct!.logSummarized),
    log_summarized_error: cdktf.numberToTerraform(struct!.logSummarizedError),
    query: cdktf.numberToTerraform(struct!.query),
    query_error: cdktf.numberToTerraform(struct!.queryError),
    raw_log: cdktf.numberToTerraform(struct!.rawLog),
    raw_log_error: cdktf.numberToTerraform(struct!.rawLogError),
    response: cdktf.numberToTerraform(struct!.response),
  }
}


export function dataThunderLoggingLocalLogGlobalStatsStatsToHclTerraform(struct?: DataThunderLoggingLocalLogGlobalStatsStatsOutputReference | DataThunderLoggingLocalLogGlobalStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aam_db: {
      value: cdktf.numberToHclTerraform(struct!.aamDb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    aam_top_user_db: {
      value: cdktf.numberToHclTerraform(struct!.aamTopUserDb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    db_erro: {
      value: cdktf.numberToHclTerraform(struct!.dbErro),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dequeue: {
      value: cdktf.numberToHclTerraform(struct!.dequeue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dequeue_error: {
      value: cdktf.numberToHclTerraform(struct!.dequeueError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enqueue: {
      value: cdktf.numberToHclTerraform(struct!.enqueue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enqueue_error: {
      value: cdktf.numberToHclTerraform(struct!.enqueueError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enqueue_full: {
      value: cdktf.numberToHclTerraform(struct!.enqueueFull),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ep_db: {
      value: cdktf.numberToHclTerraform(struct!.epDb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ep_top_domain_db: {
      value: cdktf.numberToHclTerraform(struct!.epTopDomainDb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ep_top_dst_db: {
      value: cdktf.numberToHclTerraform(struct!.epTopDstDb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ep_top_host_db: {
      value: cdktf.numberToHclTerraform(struct!.epTopHostDb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ep_top_src_db: {
      value: cdktf.numberToHclTerraform(struct!.epTopSrcDb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ep_top_user_db: {
      value: cdktf.numberToHclTerraform(struct!.epTopUserDb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ep_top_web_category_db: {
      value: cdktf.numberToHclTerraform(struct!.epTopWebCategoryDb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fw_db: {
      value: cdktf.numberToHclTerraform(struct!.fwDb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fw_top_app_db: {
      value: cdktf.numberToHclTerraform(struct!.fwTopAppDb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fw_top_app_src_db: {
      value: cdktf.numberToHclTerraform(struct!.fwTopAppSrcDb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fw_top_category_db: {
      value: cdktf.numberToHclTerraform(struct!.fwTopCategoryDb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fw_top_src_db: {
      value: cdktf.numberToHclTerraform(struct!.fwTopSrcDb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fw_top_thr_db: {
      value: cdktf.numberToHclTerraform(struct!.fwTopThrDb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fw_top_thr_src_db: {
      value: cdktf.numberToHclTerraform(struct!.fwTopThrSrcDb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l1_log_summarized: {
      value: cdktf.numberToHclTerraform(struct!.l1LogSummarized),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l2_log_summarized: {
      value: cdktf.numberToHclTerraform(struct!.l2LogSummarized),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_summarized: {
      value: cdktf.numberToHclTerraform(struct!.logSummarized),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_summarized_error: {
      value: cdktf.numberToHclTerraform(struct!.logSummarizedError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    query: {
      value: cdktf.numberToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    query_error: {
      value: cdktf.numberToHclTerraform(struct!.queryError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    raw_log: {
      value: cdktf.numberToHclTerraform(struct!.rawLog),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    raw_log_error: {
      value: cdktf.numberToHclTerraform(struct!.rawLogError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response: {
      value: cdktf.numberToHclTerraform(struct!.response),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderLoggingLocalLogGlobalStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderLoggingLocalLogGlobalStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aamDb !== undefined) {
      hasAnyValues = true;
      internalValueResult.aamDb = this._aamDb;
    }
    if (this._aamTopUserDb !== undefined) {
      hasAnyValues = true;
      internalValueResult.aamTopUserDb = this._aamTopUserDb;
    }
    if (this._dbErro !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbErro = this._dbErro;
    }
    if (this._dequeue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dequeue = this._dequeue;
    }
    if (this._dequeueError !== undefined) {
      hasAnyValues = true;
      internalValueResult.dequeueError = this._dequeueError;
    }
    if (this._enqueue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enqueue = this._enqueue;
    }
    if (this._enqueueError !== undefined) {
      hasAnyValues = true;
      internalValueResult.enqueueError = this._enqueueError;
    }
    if (this._enqueueFull !== undefined) {
      hasAnyValues = true;
      internalValueResult.enqueueFull = this._enqueueFull;
    }
    if (this._epDb !== undefined) {
      hasAnyValues = true;
      internalValueResult.epDb = this._epDb;
    }
    if (this._epTopDomainDb !== undefined) {
      hasAnyValues = true;
      internalValueResult.epTopDomainDb = this._epTopDomainDb;
    }
    if (this._epTopDstDb !== undefined) {
      hasAnyValues = true;
      internalValueResult.epTopDstDb = this._epTopDstDb;
    }
    if (this._epTopHostDb !== undefined) {
      hasAnyValues = true;
      internalValueResult.epTopHostDb = this._epTopHostDb;
    }
    if (this._epTopSrcDb !== undefined) {
      hasAnyValues = true;
      internalValueResult.epTopSrcDb = this._epTopSrcDb;
    }
    if (this._epTopUserDb !== undefined) {
      hasAnyValues = true;
      internalValueResult.epTopUserDb = this._epTopUserDb;
    }
    if (this._epTopWebCategoryDb !== undefined) {
      hasAnyValues = true;
      internalValueResult.epTopWebCategoryDb = this._epTopWebCategoryDb;
    }
    if (this._fwDb !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwDb = this._fwDb;
    }
    if (this._fwTopAppDb !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwTopAppDb = this._fwTopAppDb;
    }
    if (this._fwTopAppSrcDb !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwTopAppSrcDb = this._fwTopAppSrcDb;
    }
    if (this._fwTopCategoryDb !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwTopCategoryDb = this._fwTopCategoryDb;
    }
    if (this._fwTopSrcDb !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwTopSrcDb = this._fwTopSrcDb;
    }
    if (this._fwTopThrDb !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwTopThrDb = this._fwTopThrDb;
    }
    if (this._fwTopThrSrcDb !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwTopThrSrcDb = this._fwTopThrSrcDb;
    }
    if (this._l1LogSummarized !== undefined) {
      hasAnyValues = true;
      internalValueResult.l1LogSummarized = this._l1LogSummarized;
    }
    if (this._l2LogSummarized !== undefined) {
      hasAnyValues = true;
      internalValueResult.l2LogSummarized = this._l2LogSummarized;
    }
    if (this._logSummarized !== undefined) {
      hasAnyValues = true;
      internalValueResult.logSummarized = this._logSummarized;
    }
    if (this._logSummarizedError !== undefined) {
      hasAnyValues = true;
      internalValueResult.logSummarizedError = this._logSummarizedError;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._queryError !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryError = this._queryError;
    }
    if (this._rawLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.rawLog = this._rawLog;
    }
    if (this._rawLogError !== undefined) {
      hasAnyValues = true;
      internalValueResult.rawLogError = this._rawLogError;
    }
    if (this._response !== undefined) {
      hasAnyValues = true;
      internalValueResult.response = this._response;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderLoggingLocalLogGlobalStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aamDb = undefined;
      this._aamTopUserDb = undefined;
      this._dbErro = undefined;
      this._dequeue = undefined;
      this._dequeueError = undefined;
      this._enqueue = undefined;
      this._enqueueError = undefined;
      this._enqueueFull = undefined;
      this._epDb = undefined;
      this._epTopDomainDb = undefined;
      this._epTopDstDb = undefined;
      this._epTopHostDb = undefined;
      this._epTopSrcDb = undefined;
      this._epTopUserDb = undefined;
      this._epTopWebCategoryDb = undefined;
      this._fwDb = undefined;
      this._fwTopAppDb = undefined;
      this._fwTopAppSrcDb = undefined;
      this._fwTopCategoryDb = undefined;
      this._fwTopSrcDb = undefined;
      this._fwTopThrDb = undefined;
      this._fwTopThrSrcDb = undefined;
      this._l1LogSummarized = undefined;
      this._l2LogSummarized = undefined;
      this._logSummarized = undefined;
      this._logSummarizedError = undefined;
      this._query = undefined;
      this._queryError = undefined;
      this._rawLog = undefined;
      this._rawLogError = undefined;
      this._response = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aamDb = value.aamDb;
      this._aamTopUserDb = value.aamTopUserDb;
      this._dbErro = value.dbErro;
      this._dequeue = value.dequeue;
      this._dequeueError = value.dequeueError;
      this._enqueue = value.enqueue;
      this._enqueueError = value.enqueueError;
      this._enqueueFull = value.enqueueFull;
      this._epDb = value.epDb;
      this._epTopDomainDb = value.epTopDomainDb;
      this._epTopDstDb = value.epTopDstDb;
      this._epTopHostDb = value.epTopHostDb;
      this._epTopSrcDb = value.epTopSrcDb;
      this._epTopUserDb = value.epTopUserDb;
      this._epTopWebCategoryDb = value.epTopWebCategoryDb;
      this._fwDb = value.fwDb;
      this._fwTopAppDb = value.fwTopAppDb;
      this._fwTopAppSrcDb = value.fwTopAppSrcDb;
      this._fwTopCategoryDb = value.fwTopCategoryDb;
      this._fwTopSrcDb = value.fwTopSrcDb;
      this._fwTopThrDb = value.fwTopThrDb;
      this._fwTopThrSrcDb = value.fwTopThrSrcDb;
      this._l1LogSummarized = value.l1LogSummarized;
      this._l2LogSummarized = value.l2LogSummarized;
      this._logSummarized = value.logSummarized;
      this._logSummarizedError = value.logSummarizedError;
      this._query = value.query;
      this._queryError = value.queryError;
      this._rawLog = value.rawLog;
      this._rawLogError = value.rawLogError;
      this._response = value.response;
    }
  }

  // aam_db - computed: false, optional: true, required: false
  private _aamDb?: number; 
  public get aamDb() {
    return this.getNumberAttribute('aam_db');
  }
  public set aamDb(value: number) {
    this._aamDb = value;
  }
  public resetAamDb() {
    this._aamDb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aamDbInput() {
    return this._aamDb;
  }

  // aam_top_user_db - computed: false, optional: true, required: false
  private _aamTopUserDb?: number; 
  public get aamTopUserDb() {
    return this.getNumberAttribute('aam_top_user_db');
  }
  public set aamTopUserDb(value: number) {
    this._aamTopUserDb = value;
  }
  public resetAamTopUserDb() {
    this._aamTopUserDb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aamTopUserDbInput() {
    return this._aamTopUserDb;
  }

  // db_erro - computed: false, optional: true, required: false
  private _dbErro?: number; 
  public get dbErro() {
    return this.getNumberAttribute('db_erro');
  }
  public set dbErro(value: number) {
    this._dbErro = value;
  }
  public resetDbErro() {
    this._dbErro = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbErroInput() {
    return this._dbErro;
  }

  // dequeue - computed: false, optional: true, required: false
  private _dequeue?: number; 
  public get dequeue() {
    return this.getNumberAttribute('dequeue');
  }
  public set dequeue(value: number) {
    this._dequeue = value;
  }
  public resetDequeue() {
    this._dequeue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dequeueInput() {
    return this._dequeue;
  }

  // dequeue_error - computed: false, optional: true, required: false
  private _dequeueError?: number; 
  public get dequeueError() {
    return this.getNumberAttribute('dequeue_error');
  }
  public set dequeueError(value: number) {
    this._dequeueError = value;
  }
  public resetDequeueError() {
    this._dequeueError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dequeueErrorInput() {
    return this._dequeueError;
  }

  // enqueue - computed: false, optional: true, required: false
  private _enqueue?: number; 
  public get enqueue() {
    return this.getNumberAttribute('enqueue');
  }
  public set enqueue(value: number) {
    this._enqueue = value;
  }
  public resetEnqueue() {
    this._enqueue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enqueueInput() {
    return this._enqueue;
  }

  // enqueue_error - computed: false, optional: true, required: false
  private _enqueueError?: number; 
  public get enqueueError() {
    return this.getNumberAttribute('enqueue_error');
  }
  public set enqueueError(value: number) {
    this._enqueueError = value;
  }
  public resetEnqueueError() {
    this._enqueueError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enqueueErrorInput() {
    return this._enqueueError;
  }

  // enqueue_full - computed: false, optional: true, required: false
  private _enqueueFull?: number; 
  public get enqueueFull() {
    return this.getNumberAttribute('enqueue_full');
  }
  public set enqueueFull(value: number) {
    this._enqueueFull = value;
  }
  public resetEnqueueFull() {
    this._enqueueFull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enqueueFullInput() {
    return this._enqueueFull;
  }

  // ep_db - computed: false, optional: true, required: false
  private _epDb?: number; 
  public get epDb() {
    return this.getNumberAttribute('ep_db');
  }
  public set epDb(value: number) {
    this._epDb = value;
  }
  public resetEpDb() {
    this._epDb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get epDbInput() {
    return this._epDb;
  }

  // ep_top_domain_db - computed: false, optional: true, required: false
  private _epTopDomainDb?: number; 
  public get epTopDomainDb() {
    return this.getNumberAttribute('ep_top_domain_db');
  }
  public set epTopDomainDb(value: number) {
    this._epTopDomainDb = value;
  }
  public resetEpTopDomainDb() {
    this._epTopDomainDb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get epTopDomainDbInput() {
    return this._epTopDomainDb;
  }

  // ep_top_dst_db - computed: false, optional: true, required: false
  private _epTopDstDb?: number; 
  public get epTopDstDb() {
    return this.getNumberAttribute('ep_top_dst_db');
  }
  public set epTopDstDb(value: number) {
    this._epTopDstDb = value;
  }
  public resetEpTopDstDb() {
    this._epTopDstDb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get epTopDstDbInput() {
    return this._epTopDstDb;
  }

  // ep_top_host_db - computed: false, optional: true, required: false
  private _epTopHostDb?: number; 
  public get epTopHostDb() {
    return this.getNumberAttribute('ep_top_host_db');
  }
  public set epTopHostDb(value: number) {
    this._epTopHostDb = value;
  }
  public resetEpTopHostDb() {
    this._epTopHostDb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get epTopHostDbInput() {
    return this._epTopHostDb;
  }

  // ep_top_src_db - computed: false, optional: true, required: false
  private _epTopSrcDb?: number; 
  public get epTopSrcDb() {
    return this.getNumberAttribute('ep_top_src_db');
  }
  public set epTopSrcDb(value: number) {
    this._epTopSrcDb = value;
  }
  public resetEpTopSrcDb() {
    this._epTopSrcDb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get epTopSrcDbInput() {
    return this._epTopSrcDb;
  }

  // ep_top_user_db - computed: false, optional: true, required: false
  private _epTopUserDb?: number; 
  public get epTopUserDb() {
    return this.getNumberAttribute('ep_top_user_db');
  }
  public set epTopUserDb(value: number) {
    this._epTopUserDb = value;
  }
  public resetEpTopUserDb() {
    this._epTopUserDb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get epTopUserDbInput() {
    return this._epTopUserDb;
  }

  // ep_top_web_category_db - computed: false, optional: true, required: false
  private _epTopWebCategoryDb?: number; 
  public get epTopWebCategoryDb() {
    return this.getNumberAttribute('ep_top_web_category_db');
  }
  public set epTopWebCategoryDb(value: number) {
    this._epTopWebCategoryDb = value;
  }
  public resetEpTopWebCategoryDb() {
    this._epTopWebCategoryDb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get epTopWebCategoryDbInput() {
    return this._epTopWebCategoryDb;
  }

  // fw_db - computed: false, optional: true, required: false
  private _fwDb?: number; 
  public get fwDb() {
    return this.getNumberAttribute('fw_db');
  }
  public set fwDb(value: number) {
    this._fwDb = value;
  }
  public resetFwDb() {
    this._fwDb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwDbInput() {
    return this._fwDb;
  }

  // fw_top_app_db - computed: false, optional: true, required: false
  private _fwTopAppDb?: number; 
  public get fwTopAppDb() {
    return this.getNumberAttribute('fw_top_app_db');
  }
  public set fwTopAppDb(value: number) {
    this._fwTopAppDb = value;
  }
  public resetFwTopAppDb() {
    this._fwTopAppDb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwTopAppDbInput() {
    return this._fwTopAppDb;
  }

  // fw_top_app_src_db - computed: false, optional: true, required: false
  private _fwTopAppSrcDb?: number; 
  public get fwTopAppSrcDb() {
    return this.getNumberAttribute('fw_top_app_src_db');
  }
  public set fwTopAppSrcDb(value: number) {
    this._fwTopAppSrcDb = value;
  }
  public resetFwTopAppSrcDb() {
    this._fwTopAppSrcDb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwTopAppSrcDbInput() {
    return this._fwTopAppSrcDb;
  }

  // fw_top_category_db - computed: false, optional: true, required: false
  private _fwTopCategoryDb?: number; 
  public get fwTopCategoryDb() {
    return this.getNumberAttribute('fw_top_category_db');
  }
  public set fwTopCategoryDb(value: number) {
    this._fwTopCategoryDb = value;
  }
  public resetFwTopCategoryDb() {
    this._fwTopCategoryDb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwTopCategoryDbInput() {
    return this._fwTopCategoryDb;
  }

  // fw_top_src_db - computed: false, optional: true, required: false
  private _fwTopSrcDb?: number; 
  public get fwTopSrcDb() {
    return this.getNumberAttribute('fw_top_src_db');
  }
  public set fwTopSrcDb(value: number) {
    this._fwTopSrcDb = value;
  }
  public resetFwTopSrcDb() {
    this._fwTopSrcDb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwTopSrcDbInput() {
    return this._fwTopSrcDb;
  }

  // fw_top_thr_db - computed: false, optional: true, required: false
  private _fwTopThrDb?: number; 
  public get fwTopThrDb() {
    return this.getNumberAttribute('fw_top_thr_db');
  }
  public set fwTopThrDb(value: number) {
    this._fwTopThrDb = value;
  }
  public resetFwTopThrDb() {
    this._fwTopThrDb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwTopThrDbInput() {
    return this._fwTopThrDb;
  }

  // fw_top_thr_src_db - computed: false, optional: true, required: false
  private _fwTopThrSrcDb?: number; 
  public get fwTopThrSrcDb() {
    return this.getNumberAttribute('fw_top_thr_src_db');
  }
  public set fwTopThrSrcDb(value: number) {
    this._fwTopThrSrcDb = value;
  }
  public resetFwTopThrSrcDb() {
    this._fwTopThrSrcDb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwTopThrSrcDbInput() {
    return this._fwTopThrSrcDb;
  }

  // l1_log_summarized - computed: false, optional: true, required: false
  private _l1LogSummarized?: number; 
  public get l1LogSummarized() {
    return this.getNumberAttribute('l1_log_summarized');
  }
  public set l1LogSummarized(value: number) {
    this._l1LogSummarized = value;
  }
  public resetL1LogSummarized() {
    this._l1LogSummarized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l1LogSummarizedInput() {
    return this._l1LogSummarized;
  }

  // l2_log_summarized - computed: false, optional: true, required: false
  private _l2LogSummarized?: number; 
  public get l2LogSummarized() {
    return this.getNumberAttribute('l2_log_summarized');
  }
  public set l2LogSummarized(value: number) {
    this._l2LogSummarized = value;
  }
  public resetL2LogSummarized() {
    this._l2LogSummarized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2LogSummarizedInput() {
    return this._l2LogSummarized;
  }

  // log_summarized - computed: false, optional: true, required: false
  private _logSummarized?: number; 
  public get logSummarized() {
    return this.getNumberAttribute('log_summarized');
  }
  public set logSummarized(value: number) {
    this._logSummarized = value;
  }
  public resetLogSummarized() {
    this._logSummarized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSummarizedInput() {
    return this._logSummarized;
  }

  // log_summarized_error - computed: false, optional: true, required: false
  private _logSummarizedError?: number; 
  public get logSummarizedError() {
    return this.getNumberAttribute('log_summarized_error');
  }
  public set logSummarizedError(value: number) {
    this._logSummarizedError = value;
  }
  public resetLogSummarizedError() {
    this._logSummarizedError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSummarizedErrorInput() {
    return this._logSummarizedError;
  }

  // query - computed: false, optional: true, required: false
  private _query?: number; 
  public get query() {
    return this.getNumberAttribute('query');
  }
  public set query(value: number) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // query_error - computed: false, optional: true, required: false
  private _queryError?: number; 
  public get queryError() {
    return this.getNumberAttribute('query_error');
  }
  public set queryError(value: number) {
    this._queryError = value;
  }
  public resetQueryError() {
    this._queryError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryErrorInput() {
    return this._queryError;
  }

  // raw_log - computed: false, optional: true, required: false
  private _rawLog?: number; 
  public get rawLog() {
    return this.getNumberAttribute('raw_log');
  }
  public set rawLog(value: number) {
    this._rawLog = value;
  }
  public resetRawLog() {
    this._rawLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawLogInput() {
    return this._rawLog;
  }

  // raw_log_error - computed: false, optional: true, required: false
  private _rawLogError?: number; 
  public get rawLogError() {
    return this.getNumberAttribute('raw_log_error');
  }
  public set rawLogError(value: number) {
    this._rawLogError = value;
  }
  public resetRawLogError() {
    this._rawLogError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawLogErrorInput() {
    return this._rawLogError;
  }

  // response - computed: false, optional: true, required: false
  private _response?: number; 
  public get response() {
    return this.getNumberAttribute('response');
  }
  public set response(value: number) {
    this._response = value;
  }
  public resetResponse() {
    this._response = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseInput() {
    return this._response;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_global_stats thunder_logging_local_log_global_stats}
*/
export class DataThunderLoggingLocalLogGlobalStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_logging_local_log_global_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderLoggingLocalLogGlobalStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderLoggingLocalLogGlobalStats to import
  * @param importFromId The id of the existing DataThunderLoggingLocalLogGlobalStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_global_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderLoggingLocalLogGlobalStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_logging_local_log_global_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_global_stats thunder_logging_local_log_global_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderLoggingLocalLogGlobalStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderLoggingLocalLogGlobalStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_logging_local_log_global_stats',
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
  private _stats = new DataThunderLoggingLocalLogGlobalStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderLoggingLocalLogGlobalStatsStats) {
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
      stats: dataThunderLoggingLocalLogGlobalStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderLoggingLocalLogGlobalStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderLoggingLocalLogGlobalStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
