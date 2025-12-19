// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_http_alg_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderCgnv6HttpAlgStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_http_alg_stats#id DataThunderCgnv6HttpAlgStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_http_alg_stats#stats DataThunderCgnv6HttpAlgStats#stats}
  */
  readonly stats?: DataThunderCgnv6HttpAlgStatsStats;
}
export interface DataThunderCgnv6HttpAlgStatsStats {
  /**
  * Buff Insertion Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_http_alg_stats#header_insertion_failed DataThunderCgnv6HttpAlgStats#header_insertion_failed}
  */
  readonly headerInsertionFailed?: number;
  /**
  * Buff Removal Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_http_alg_stats#header_removal_failed DataThunderCgnv6HttpAlgStats#header_removal_failed}
  */
  readonly headerRemovalFailed?: number;
  /**
  * Out-of-Memory Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_http_alg_stats#out_of_memory_dropped DataThunderCgnv6HttpAlgStats#out_of_memory_dropped}
  */
  readonly outOfMemoryDropped?: number;
  /**
  * Packet Out-of-Order Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_http_alg_stats#out_of_order_dropped DataThunderCgnv6HttpAlgStats#out_of_order_dropped}
  */
  readonly outOfOrderDropped?: number;
  /**
  * Queue Length Exceed Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_http_alg_stats#queue_len_exceed_dropped DataThunderCgnv6HttpAlgStats#queue_len_exceed_dropped}
  */
  readonly queueLenExceedDropped?: number;
  /**
  * Queued Session Exceed Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_http_alg_stats#queued_session_too_many DataThunderCgnv6HttpAlgStats#queued_session_too_many}
  */
  readonly queuedSessionTooMany?: number;
  /**
  * MSISDN Query Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_http_alg_stats#radius_query_failed DataThunderCgnv6HttpAlgStats#radius_query_failed}
  */
  readonly radiusQueryFailed?: number;
  /**
  * MSISDN Query Succeed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_http_alg_stats#radius_query_succeed DataThunderCgnv6HttpAlgStats#radius_query_succeed}
  */
  readonly radiusQuerySucceed?: number;
  /**
  * Query Request Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_http_alg_stats#radius_requst_dropped DataThunderCgnv6HttpAlgStats#radius_requst_dropped}
  */
  readonly radiusRequstDropped?: number;
  /**
  * Query Request Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_http_alg_stats#radius_requst_sent DataThunderCgnv6HttpAlgStats#radius_requst_sent}
  */
  readonly radiusRequstSent?: number;
  /**
  * Query Response Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_http_alg_stats#radius_response_dropped DataThunderCgnv6HttpAlgStats#radius_response_dropped}
  */
  readonly radiusResponseDropped?: number;
  /**
  * Query Response Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_http_alg_stats#radius_response_received DataThunderCgnv6HttpAlgStats#radius_response_received}
  */
  readonly radiusResponseReceived?: number;
  /**
  * HTTP Client IP Insertion Performed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_http_alg_stats#request_insert_client_ip_performed DataThunderCgnv6HttpAlgStats#request_insert_client_ip_performed}
  */
  readonly requestInsertClientIpPerformed?: number;
  /**
  * HTTP MSISDN Insertion Performed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_http_alg_stats#request_insert_msisdn_performed DataThunderCgnv6HttpAlgStats#request_insert_msisdn_performed}
  */
  readonly requestInsertMsisdnPerformed?: number;
  /**
  * Inserted MSISDN is 0000 (MSISDN Unavailable)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_http_alg_stats#request_insert_msisdn_unavailable DataThunderCgnv6HttpAlgStats#request_insert_msisdn_unavailable}
  */
  readonly requestInsertMsisdnUnavailable?: number;
  /**
  * HTTP Request Processed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_http_alg_stats#request_processed DataThunderCgnv6HttpAlgStats#request_processed}
  */
  readonly requestProcessed?: number;
}

export function dataThunderCgnv6HttpAlgStatsStatsToTerraform(struct?: DataThunderCgnv6HttpAlgStatsStatsOutputReference | DataThunderCgnv6HttpAlgStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_insertion_failed: cdktf.numberToTerraform(struct!.headerInsertionFailed),
    header_removal_failed: cdktf.numberToTerraform(struct!.headerRemovalFailed),
    out_of_memory_dropped: cdktf.numberToTerraform(struct!.outOfMemoryDropped),
    out_of_order_dropped: cdktf.numberToTerraform(struct!.outOfOrderDropped),
    queue_len_exceed_dropped: cdktf.numberToTerraform(struct!.queueLenExceedDropped),
    queued_session_too_many: cdktf.numberToTerraform(struct!.queuedSessionTooMany),
    radius_query_failed: cdktf.numberToTerraform(struct!.radiusQueryFailed),
    radius_query_succeed: cdktf.numberToTerraform(struct!.radiusQuerySucceed),
    radius_requst_dropped: cdktf.numberToTerraform(struct!.radiusRequstDropped),
    radius_requst_sent: cdktf.numberToTerraform(struct!.radiusRequstSent),
    radius_response_dropped: cdktf.numberToTerraform(struct!.radiusResponseDropped),
    radius_response_received: cdktf.numberToTerraform(struct!.radiusResponseReceived),
    request_insert_client_ip_performed: cdktf.numberToTerraform(struct!.requestInsertClientIpPerformed),
    request_insert_msisdn_performed: cdktf.numberToTerraform(struct!.requestInsertMsisdnPerformed),
    request_insert_msisdn_unavailable: cdktf.numberToTerraform(struct!.requestInsertMsisdnUnavailable),
    request_processed: cdktf.numberToTerraform(struct!.requestProcessed),
  }
}


export function dataThunderCgnv6HttpAlgStatsStatsToHclTerraform(struct?: DataThunderCgnv6HttpAlgStatsStatsOutputReference | DataThunderCgnv6HttpAlgStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_insertion_failed: {
      value: cdktf.numberToHclTerraform(struct!.headerInsertionFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    header_removal_failed: {
      value: cdktf.numberToHclTerraform(struct!.headerRemovalFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    out_of_memory_dropped: {
      value: cdktf.numberToHclTerraform(struct!.outOfMemoryDropped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    out_of_order_dropped: {
      value: cdktf.numberToHclTerraform(struct!.outOfOrderDropped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    queue_len_exceed_dropped: {
      value: cdktf.numberToHclTerraform(struct!.queueLenExceedDropped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    queued_session_too_many: {
      value: cdktf.numberToHclTerraform(struct!.queuedSessionTooMany),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    radius_query_failed: {
      value: cdktf.numberToHclTerraform(struct!.radiusQueryFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    radius_query_succeed: {
      value: cdktf.numberToHclTerraform(struct!.radiusQuerySucceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    radius_requst_dropped: {
      value: cdktf.numberToHclTerraform(struct!.radiusRequstDropped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    radius_requst_sent: {
      value: cdktf.numberToHclTerraform(struct!.radiusRequstSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    radius_response_dropped: {
      value: cdktf.numberToHclTerraform(struct!.radiusResponseDropped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    radius_response_received: {
      value: cdktf.numberToHclTerraform(struct!.radiusResponseReceived),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_insert_client_ip_performed: {
      value: cdktf.numberToHclTerraform(struct!.requestInsertClientIpPerformed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_insert_msisdn_performed: {
      value: cdktf.numberToHclTerraform(struct!.requestInsertMsisdnPerformed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_insert_msisdn_unavailable: {
      value: cdktf.numberToHclTerraform(struct!.requestInsertMsisdnUnavailable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_processed: {
      value: cdktf.numberToHclTerraform(struct!.requestProcessed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6HttpAlgStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderCgnv6HttpAlgStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerInsertionFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerInsertionFailed = this._headerInsertionFailed;
    }
    if (this._headerRemovalFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerRemovalFailed = this._headerRemovalFailed;
    }
    if (this._outOfMemoryDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.outOfMemoryDropped = this._outOfMemoryDropped;
    }
    if (this._outOfOrderDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.outOfOrderDropped = this._outOfOrderDropped;
    }
    if (this._queueLenExceedDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueLenExceedDropped = this._queueLenExceedDropped;
    }
    if (this._queuedSessionTooMany !== undefined) {
      hasAnyValues = true;
      internalValueResult.queuedSessionTooMany = this._queuedSessionTooMany;
    }
    if (this._radiusQueryFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusQueryFailed = this._radiusQueryFailed;
    }
    if (this._radiusQuerySucceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusQuerySucceed = this._radiusQuerySucceed;
    }
    if (this._radiusRequstDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusRequstDropped = this._radiusRequstDropped;
    }
    if (this._radiusRequstSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusRequstSent = this._radiusRequstSent;
    }
    if (this._radiusResponseDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusResponseDropped = this._radiusResponseDropped;
    }
    if (this._radiusResponseReceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusResponseReceived = this._radiusResponseReceived;
    }
    if (this._requestInsertClientIpPerformed !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestInsertClientIpPerformed = this._requestInsertClientIpPerformed;
    }
    if (this._requestInsertMsisdnPerformed !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestInsertMsisdnPerformed = this._requestInsertMsisdnPerformed;
    }
    if (this._requestInsertMsisdnUnavailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestInsertMsisdnUnavailable = this._requestInsertMsisdnUnavailable;
    }
    if (this._requestProcessed !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestProcessed = this._requestProcessed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6HttpAlgStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headerInsertionFailed = undefined;
      this._headerRemovalFailed = undefined;
      this._outOfMemoryDropped = undefined;
      this._outOfOrderDropped = undefined;
      this._queueLenExceedDropped = undefined;
      this._queuedSessionTooMany = undefined;
      this._radiusQueryFailed = undefined;
      this._radiusQuerySucceed = undefined;
      this._radiusRequstDropped = undefined;
      this._radiusRequstSent = undefined;
      this._radiusResponseDropped = undefined;
      this._radiusResponseReceived = undefined;
      this._requestInsertClientIpPerformed = undefined;
      this._requestInsertMsisdnPerformed = undefined;
      this._requestInsertMsisdnUnavailable = undefined;
      this._requestProcessed = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headerInsertionFailed = value.headerInsertionFailed;
      this._headerRemovalFailed = value.headerRemovalFailed;
      this._outOfMemoryDropped = value.outOfMemoryDropped;
      this._outOfOrderDropped = value.outOfOrderDropped;
      this._queueLenExceedDropped = value.queueLenExceedDropped;
      this._queuedSessionTooMany = value.queuedSessionTooMany;
      this._radiusQueryFailed = value.radiusQueryFailed;
      this._radiusQuerySucceed = value.radiusQuerySucceed;
      this._radiusRequstDropped = value.radiusRequstDropped;
      this._radiusRequstSent = value.radiusRequstSent;
      this._radiusResponseDropped = value.radiusResponseDropped;
      this._radiusResponseReceived = value.radiusResponseReceived;
      this._requestInsertClientIpPerformed = value.requestInsertClientIpPerformed;
      this._requestInsertMsisdnPerformed = value.requestInsertMsisdnPerformed;
      this._requestInsertMsisdnUnavailable = value.requestInsertMsisdnUnavailable;
      this._requestProcessed = value.requestProcessed;
    }
  }

  // header_insertion_failed - computed: false, optional: true, required: false
  private _headerInsertionFailed?: number; 
  public get headerInsertionFailed() {
    return this.getNumberAttribute('header_insertion_failed');
  }
  public set headerInsertionFailed(value: number) {
    this._headerInsertionFailed = value;
  }
  public resetHeaderInsertionFailed() {
    this._headerInsertionFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInsertionFailedInput() {
    return this._headerInsertionFailed;
  }

  // header_removal_failed - computed: false, optional: true, required: false
  private _headerRemovalFailed?: number; 
  public get headerRemovalFailed() {
    return this.getNumberAttribute('header_removal_failed');
  }
  public set headerRemovalFailed(value: number) {
    this._headerRemovalFailed = value;
  }
  public resetHeaderRemovalFailed() {
    this._headerRemovalFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerRemovalFailedInput() {
    return this._headerRemovalFailed;
  }

  // out_of_memory_dropped - computed: false, optional: true, required: false
  private _outOfMemoryDropped?: number; 
  public get outOfMemoryDropped() {
    return this.getNumberAttribute('out_of_memory_dropped');
  }
  public set outOfMemoryDropped(value: number) {
    this._outOfMemoryDropped = value;
  }
  public resetOutOfMemoryDropped() {
    this._outOfMemoryDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outOfMemoryDroppedInput() {
    return this._outOfMemoryDropped;
  }

  // out_of_order_dropped - computed: false, optional: true, required: false
  private _outOfOrderDropped?: number; 
  public get outOfOrderDropped() {
    return this.getNumberAttribute('out_of_order_dropped');
  }
  public set outOfOrderDropped(value: number) {
    this._outOfOrderDropped = value;
  }
  public resetOutOfOrderDropped() {
    this._outOfOrderDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outOfOrderDroppedInput() {
    return this._outOfOrderDropped;
  }

  // queue_len_exceed_dropped - computed: false, optional: true, required: false
  private _queueLenExceedDropped?: number; 
  public get queueLenExceedDropped() {
    return this.getNumberAttribute('queue_len_exceed_dropped');
  }
  public set queueLenExceedDropped(value: number) {
    this._queueLenExceedDropped = value;
  }
  public resetQueueLenExceedDropped() {
    this._queueLenExceedDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueLenExceedDroppedInput() {
    return this._queueLenExceedDropped;
  }

  // queued_session_too_many - computed: false, optional: true, required: false
  private _queuedSessionTooMany?: number; 
  public get queuedSessionTooMany() {
    return this.getNumberAttribute('queued_session_too_many');
  }
  public set queuedSessionTooMany(value: number) {
    this._queuedSessionTooMany = value;
  }
  public resetQueuedSessionTooMany() {
    this._queuedSessionTooMany = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queuedSessionTooManyInput() {
    return this._queuedSessionTooMany;
  }

  // radius_query_failed - computed: false, optional: true, required: false
  private _radiusQueryFailed?: number; 
  public get radiusQueryFailed() {
    return this.getNumberAttribute('radius_query_failed');
  }
  public set radiusQueryFailed(value: number) {
    this._radiusQueryFailed = value;
  }
  public resetRadiusQueryFailed() {
    this._radiusQueryFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusQueryFailedInput() {
    return this._radiusQueryFailed;
  }

  // radius_query_succeed - computed: false, optional: true, required: false
  private _radiusQuerySucceed?: number; 
  public get radiusQuerySucceed() {
    return this.getNumberAttribute('radius_query_succeed');
  }
  public set radiusQuerySucceed(value: number) {
    this._radiusQuerySucceed = value;
  }
  public resetRadiusQuerySucceed() {
    this._radiusQuerySucceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusQuerySucceedInput() {
    return this._radiusQuerySucceed;
  }

  // radius_requst_dropped - computed: false, optional: true, required: false
  private _radiusRequstDropped?: number; 
  public get radiusRequstDropped() {
    return this.getNumberAttribute('radius_requst_dropped');
  }
  public set radiusRequstDropped(value: number) {
    this._radiusRequstDropped = value;
  }
  public resetRadiusRequstDropped() {
    this._radiusRequstDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusRequstDroppedInput() {
    return this._radiusRequstDropped;
  }

  // radius_requst_sent - computed: false, optional: true, required: false
  private _radiusRequstSent?: number; 
  public get radiusRequstSent() {
    return this.getNumberAttribute('radius_requst_sent');
  }
  public set radiusRequstSent(value: number) {
    this._radiusRequstSent = value;
  }
  public resetRadiusRequstSent() {
    this._radiusRequstSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusRequstSentInput() {
    return this._radiusRequstSent;
  }

  // radius_response_dropped - computed: false, optional: true, required: false
  private _radiusResponseDropped?: number; 
  public get radiusResponseDropped() {
    return this.getNumberAttribute('radius_response_dropped');
  }
  public set radiusResponseDropped(value: number) {
    this._radiusResponseDropped = value;
  }
  public resetRadiusResponseDropped() {
    this._radiusResponseDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusResponseDroppedInput() {
    return this._radiusResponseDropped;
  }

  // radius_response_received - computed: false, optional: true, required: false
  private _radiusResponseReceived?: number; 
  public get radiusResponseReceived() {
    return this.getNumberAttribute('radius_response_received');
  }
  public set radiusResponseReceived(value: number) {
    this._radiusResponseReceived = value;
  }
  public resetRadiusResponseReceived() {
    this._radiusResponseReceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusResponseReceivedInput() {
    return this._radiusResponseReceived;
  }

  // request_insert_client_ip_performed - computed: false, optional: true, required: false
  private _requestInsertClientIpPerformed?: number; 
  public get requestInsertClientIpPerformed() {
    return this.getNumberAttribute('request_insert_client_ip_performed');
  }
  public set requestInsertClientIpPerformed(value: number) {
    this._requestInsertClientIpPerformed = value;
  }
  public resetRequestInsertClientIpPerformed() {
    this._requestInsertClientIpPerformed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInsertClientIpPerformedInput() {
    return this._requestInsertClientIpPerformed;
  }

  // request_insert_msisdn_performed - computed: false, optional: true, required: false
  private _requestInsertMsisdnPerformed?: number; 
  public get requestInsertMsisdnPerformed() {
    return this.getNumberAttribute('request_insert_msisdn_performed');
  }
  public set requestInsertMsisdnPerformed(value: number) {
    this._requestInsertMsisdnPerformed = value;
  }
  public resetRequestInsertMsisdnPerformed() {
    this._requestInsertMsisdnPerformed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInsertMsisdnPerformedInput() {
    return this._requestInsertMsisdnPerformed;
  }

  // request_insert_msisdn_unavailable - computed: false, optional: true, required: false
  private _requestInsertMsisdnUnavailable?: number; 
  public get requestInsertMsisdnUnavailable() {
    return this.getNumberAttribute('request_insert_msisdn_unavailable');
  }
  public set requestInsertMsisdnUnavailable(value: number) {
    this._requestInsertMsisdnUnavailable = value;
  }
  public resetRequestInsertMsisdnUnavailable() {
    this._requestInsertMsisdnUnavailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInsertMsisdnUnavailableInput() {
    return this._requestInsertMsisdnUnavailable;
  }

  // request_processed - computed: false, optional: true, required: false
  private _requestProcessed?: number; 
  public get requestProcessed() {
    return this.getNumberAttribute('request_processed');
  }
  public set requestProcessed(value: number) {
    this._requestProcessed = value;
  }
  public resetRequestProcessed() {
    this._requestProcessed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestProcessedInput() {
    return this._requestProcessed;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_http_alg_stats thunder_cgnv6_http_alg_stats}
*/
export class DataThunderCgnv6HttpAlgStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_http_alg_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderCgnv6HttpAlgStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderCgnv6HttpAlgStats to import
  * @param importFromId The id of the existing DataThunderCgnv6HttpAlgStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_http_alg_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderCgnv6HttpAlgStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_http_alg_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_http_alg_stats thunder_cgnv6_http_alg_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderCgnv6HttpAlgStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderCgnv6HttpAlgStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_http_alg_stats',
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
  private _stats = new DataThunderCgnv6HttpAlgStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderCgnv6HttpAlgStatsStats) {
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
      stats: dataThunderCgnv6HttpAlgStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderCgnv6HttpAlgStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderCgnv6HttpAlgStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
