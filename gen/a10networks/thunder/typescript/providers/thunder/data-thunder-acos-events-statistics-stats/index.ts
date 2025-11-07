// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/acos_events_statistics_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderAcosEventsStatisticsStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/acos_events_statistics_stats#id DataThunderAcosEventsStatisticsStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/acos_events_statistics_stats#stats DataThunderAcosEventsStatisticsStats#stats}
  */
  readonly stats?: DataThunderAcosEventsStatisticsStatsStats;
}
export interface DataThunderAcosEventsStatisticsStatsStats {
  /**
  * Messages Dropped, msg crafting failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/acos_events_statistics_stats#msg_dropped_craft_fail DataThunderAcosEventsStatisticsStats#msg_dropped_craft_fail}
  */
  readonly msgDroppedCraftFail?: number;
  /**
  * Messages Dropped, format not defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/acos_events_statistics_stats#msg_dropped_format_not_defined DataThunderAcosEventsStatisticsStats#msg_dropped_format_not_defined}
  */
  readonly msgDroppedFormatNotDefined?: number;
  /**
  * Messages Dropped, local log ratelimited
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/acos_events_statistics_stats#msg_dropped_local_log_ratelimit DataThunderAcosEventsStatisticsStats#msg_dropped_local_log_ratelimit}
  */
  readonly msgDroppedLocalLogRatelimit?: number;
  /**
  * Messages Dropped, malloc failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/acos_events_statistics_stats#msg_dropped_malloc_failure DataThunderAcosEventsStatisticsStats#msg_dropped_malloc_failure}
  */
  readonly msgDroppedMallocFailure?: number;
  /**
  * Messages Dropped, no active member in collector grp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/acos_events_statistics_stats#msg_dropped_no_active_member DataThunderAcosEventsStatisticsStats#msg_dropped_no_active_member}
  */
  readonly msgDroppedNoActiveMember?: number;
  /**
  * Messages Dropped, no active template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/acos_events_statistics_stats#msg_dropped_no_template DataThunderAcosEventsStatisticsStats#msg_dropped_no_template}
  */
  readonly msgDroppedNoTemplate?: number;
  /**
  * Messages Dropped, unexpected error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/acos_events_statistics_stats#msg_dropped_other DataThunderAcosEventsStatisticsStats#msg_dropped_other}
  */
  readonly msgDroppedOther?: number;
  /**
  * Messages Dropped, Route lookup failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/acos_events_statistics_stats#msg_dropped_route_fail DataThunderAcosEventsStatisticsStats#msg_dropped_route_fail}
  */
  readonly msgDroppedRouteFail?: number;
  /**
  * Messages Dropped, selector does not enable msg
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/acos_events_statistics_stats#msg_dropped_selector DataThunderAcosEventsStatisticsStats#msg_dropped_selector}
  */
  readonly msgDroppedSelector?: number;
  /**
  * Messages Dropped, send failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/acos_events_statistics_stats#msg_dropped_send_failed DataThunderAcosEventsStatisticsStats#msg_dropped_send_failed}
  */
  readonly msgDroppedSendFailed?: number;
  /**
  * Messages Dropped, invalid length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/acos_events_statistics_stats#msg_dropped_too_long DataThunderAcosEventsStatisticsStats#msg_dropped_too_long}
  */
  readonly msgDroppedTooLong?: number;
  /**
  * Messages sent, to Remote
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/acos_events_statistics_stats#msg_sent DataThunderAcosEventsStatisticsStats#msg_sent}
  */
  readonly msgSent?: number;
  /**
  * Messages sent, to LogDB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/acos_events_statistics_stats#msg_sent_logdb DataThunderAcosEventsStatisticsStats#msg_sent_logdb}
  */
  readonly msgSentLogdb?: number;
  /**
  * Parameterized log AVRO encoding failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/acos_events_statistics_stats#param_msg_encode_fail DataThunderAcosEventsStatisticsStats#param_msg_encode_fail}
  */
  readonly paramMsgEncodeFail?: number;
  /**
  * Parameterized log send to HC failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/acos_events_statistics_stats#param_msg_sent_fail DataThunderAcosEventsStatisticsStats#param_msg_sent_fail}
  */
  readonly paramMsgSentFail?: number;
  /**
  * Parameterized log sent to HC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/acos_events_statistics_stats#param_msg_sent_to_hc DataThunderAcosEventsStatisticsStats#param_msg_sent_to_hc}
  */
  readonly paramMsgSentToHc?: number;
}

export function dataThunderAcosEventsStatisticsStatsStatsToTerraform(struct?: DataThunderAcosEventsStatisticsStatsStatsOutputReference | DataThunderAcosEventsStatisticsStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    msg_dropped_craft_fail: cdktf.numberToTerraform(struct!.msgDroppedCraftFail),
    msg_dropped_format_not_defined: cdktf.numberToTerraform(struct!.msgDroppedFormatNotDefined),
    msg_dropped_local_log_ratelimit: cdktf.numberToTerraform(struct!.msgDroppedLocalLogRatelimit),
    msg_dropped_malloc_failure: cdktf.numberToTerraform(struct!.msgDroppedMallocFailure),
    msg_dropped_no_active_member: cdktf.numberToTerraform(struct!.msgDroppedNoActiveMember),
    msg_dropped_no_template: cdktf.numberToTerraform(struct!.msgDroppedNoTemplate),
    msg_dropped_other: cdktf.numberToTerraform(struct!.msgDroppedOther),
    msg_dropped_route_fail: cdktf.numberToTerraform(struct!.msgDroppedRouteFail),
    msg_dropped_selector: cdktf.numberToTerraform(struct!.msgDroppedSelector),
    msg_dropped_send_failed: cdktf.numberToTerraform(struct!.msgDroppedSendFailed),
    msg_dropped_too_long: cdktf.numberToTerraform(struct!.msgDroppedTooLong),
    msg_sent: cdktf.numberToTerraform(struct!.msgSent),
    msg_sent_logdb: cdktf.numberToTerraform(struct!.msgSentLogdb),
    param_msg_encode_fail: cdktf.numberToTerraform(struct!.paramMsgEncodeFail),
    param_msg_sent_fail: cdktf.numberToTerraform(struct!.paramMsgSentFail),
    param_msg_sent_to_hc: cdktf.numberToTerraform(struct!.paramMsgSentToHc),
  }
}


export function dataThunderAcosEventsStatisticsStatsStatsToHclTerraform(struct?: DataThunderAcosEventsStatisticsStatsStatsOutputReference | DataThunderAcosEventsStatisticsStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    msg_dropped_craft_fail: {
      value: cdktf.numberToHclTerraform(struct!.msgDroppedCraftFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_dropped_format_not_defined: {
      value: cdktf.numberToHclTerraform(struct!.msgDroppedFormatNotDefined),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_dropped_local_log_ratelimit: {
      value: cdktf.numberToHclTerraform(struct!.msgDroppedLocalLogRatelimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_dropped_malloc_failure: {
      value: cdktf.numberToHclTerraform(struct!.msgDroppedMallocFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_dropped_no_active_member: {
      value: cdktf.numberToHclTerraform(struct!.msgDroppedNoActiveMember),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_dropped_no_template: {
      value: cdktf.numberToHclTerraform(struct!.msgDroppedNoTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_dropped_other: {
      value: cdktf.numberToHclTerraform(struct!.msgDroppedOther),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_dropped_route_fail: {
      value: cdktf.numberToHclTerraform(struct!.msgDroppedRouteFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_dropped_selector: {
      value: cdktf.numberToHclTerraform(struct!.msgDroppedSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_dropped_send_failed: {
      value: cdktf.numberToHclTerraform(struct!.msgDroppedSendFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_dropped_too_long: {
      value: cdktf.numberToHclTerraform(struct!.msgDroppedTooLong),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_sent: {
      value: cdktf.numberToHclTerraform(struct!.msgSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_sent_logdb: {
      value: cdktf.numberToHclTerraform(struct!.msgSentLogdb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    param_msg_encode_fail: {
      value: cdktf.numberToHclTerraform(struct!.paramMsgEncodeFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    param_msg_sent_fail: {
      value: cdktf.numberToHclTerraform(struct!.paramMsgSentFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    param_msg_sent_to_hc: {
      value: cdktf.numberToHclTerraform(struct!.paramMsgSentToHc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderAcosEventsStatisticsStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderAcosEventsStatisticsStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._msgDroppedCraftFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgDroppedCraftFail = this._msgDroppedCraftFail;
    }
    if (this._msgDroppedFormatNotDefined !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgDroppedFormatNotDefined = this._msgDroppedFormatNotDefined;
    }
    if (this._msgDroppedLocalLogRatelimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgDroppedLocalLogRatelimit = this._msgDroppedLocalLogRatelimit;
    }
    if (this._msgDroppedMallocFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgDroppedMallocFailure = this._msgDroppedMallocFailure;
    }
    if (this._msgDroppedNoActiveMember !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgDroppedNoActiveMember = this._msgDroppedNoActiveMember;
    }
    if (this._msgDroppedNoTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgDroppedNoTemplate = this._msgDroppedNoTemplate;
    }
    if (this._msgDroppedOther !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgDroppedOther = this._msgDroppedOther;
    }
    if (this._msgDroppedRouteFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgDroppedRouteFail = this._msgDroppedRouteFail;
    }
    if (this._msgDroppedSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgDroppedSelector = this._msgDroppedSelector;
    }
    if (this._msgDroppedSendFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgDroppedSendFailed = this._msgDroppedSendFailed;
    }
    if (this._msgDroppedTooLong !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgDroppedTooLong = this._msgDroppedTooLong;
    }
    if (this._msgSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgSent = this._msgSent;
    }
    if (this._msgSentLogdb !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgSentLogdb = this._msgSentLogdb;
    }
    if (this._paramMsgEncodeFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.paramMsgEncodeFail = this._paramMsgEncodeFail;
    }
    if (this._paramMsgSentFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.paramMsgSentFail = this._paramMsgSentFail;
    }
    if (this._paramMsgSentToHc !== undefined) {
      hasAnyValues = true;
      internalValueResult.paramMsgSentToHc = this._paramMsgSentToHc;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderAcosEventsStatisticsStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._msgDroppedCraftFail = undefined;
      this._msgDroppedFormatNotDefined = undefined;
      this._msgDroppedLocalLogRatelimit = undefined;
      this._msgDroppedMallocFailure = undefined;
      this._msgDroppedNoActiveMember = undefined;
      this._msgDroppedNoTemplate = undefined;
      this._msgDroppedOther = undefined;
      this._msgDroppedRouteFail = undefined;
      this._msgDroppedSelector = undefined;
      this._msgDroppedSendFailed = undefined;
      this._msgDroppedTooLong = undefined;
      this._msgSent = undefined;
      this._msgSentLogdb = undefined;
      this._paramMsgEncodeFail = undefined;
      this._paramMsgSentFail = undefined;
      this._paramMsgSentToHc = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._msgDroppedCraftFail = value.msgDroppedCraftFail;
      this._msgDroppedFormatNotDefined = value.msgDroppedFormatNotDefined;
      this._msgDroppedLocalLogRatelimit = value.msgDroppedLocalLogRatelimit;
      this._msgDroppedMallocFailure = value.msgDroppedMallocFailure;
      this._msgDroppedNoActiveMember = value.msgDroppedNoActiveMember;
      this._msgDroppedNoTemplate = value.msgDroppedNoTemplate;
      this._msgDroppedOther = value.msgDroppedOther;
      this._msgDroppedRouteFail = value.msgDroppedRouteFail;
      this._msgDroppedSelector = value.msgDroppedSelector;
      this._msgDroppedSendFailed = value.msgDroppedSendFailed;
      this._msgDroppedTooLong = value.msgDroppedTooLong;
      this._msgSent = value.msgSent;
      this._msgSentLogdb = value.msgSentLogdb;
      this._paramMsgEncodeFail = value.paramMsgEncodeFail;
      this._paramMsgSentFail = value.paramMsgSentFail;
      this._paramMsgSentToHc = value.paramMsgSentToHc;
    }
  }

  // msg_dropped_craft_fail - computed: false, optional: true, required: false
  private _msgDroppedCraftFail?: number; 
  public get msgDroppedCraftFail() {
    return this.getNumberAttribute('msg_dropped_craft_fail');
  }
  public set msgDroppedCraftFail(value: number) {
    this._msgDroppedCraftFail = value;
  }
  public resetMsgDroppedCraftFail() {
    this._msgDroppedCraftFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgDroppedCraftFailInput() {
    return this._msgDroppedCraftFail;
  }

  // msg_dropped_format_not_defined - computed: false, optional: true, required: false
  private _msgDroppedFormatNotDefined?: number; 
  public get msgDroppedFormatNotDefined() {
    return this.getNumberAttribute('msg_dropped_format_not_defined');
  }
  public set msgDroppedFormatNotDefined(value: number) {
    this._msgDroppedFormatNotDefined = value;
  }
  public resetMsgDroppedFormatNotDefined() {
    this._msgDroppedFormatNotDefined = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgDroppedFormatNotDefinedInput() {
    return this._msgDroppedFormatNotDefined;
  }

  // msg_dropped_local_log_ratelimit - computed: false, optional: true, required: false
  private _msgDroppedLocalLogRatelimit?: number; 
  public get msgDroppedLocalLogRatelimit() {
    return this.getNumberAttribute('msg_dropped_local_log_ratelimit');
  }
  public set msgDroppedLocalLogRatelimit(value: number) {
    this._msgDroppedLocalLogRatelimit = value;
  }
  public resetMsgDroppedLocalLogRatelimit() {
    this._msgDroppedLocalLogRatelimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgDroppedLocalLogRatelimitInput() {
    return this._msgDroppedLocalLogRatelimit;
  }

  // msg_dropped_malloc_failure - computed: false, optional: true, required: false
  private _msgDroppedMallocFailure?: number; 
  public get msgDroppedMallocFailure() {
    return this.getNumberAttribute('msg_dropped_malloc_failure');
  }
  public set msgDroppedMallocFailure(value: number) {
    this._msgDroppedMallocFailure = value;
  }
  public resetMsgDroppedMallocFailure() {
    this._msgDroppedMallocFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgDroppedMallocFailureInput() {
    return this._msgDroppedMallocFailure;
  }

  // msg_dropped_no_active_member - computed: false, optional: true, required: false
  private _msgDroppedNoActiveMember?: number; 
  public get msgDroppedNoActiveMember() {
    return this.getNumberAttribute('msg_dropped_no_active_member');
  }
  public set msgDroppedNoActiveMember(value: number) {
    this._msgDroppedNoActiveMember = value;
  }
  public resetMsgDroppedNoActiveMember() {
    this._msgDroppedNoActiveMember = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgDroppedNoActiveMemberInput() {
    return this._msgDroppedNoActiveMember;
  }

  // msg_dropped_no_template - computed: false, optional: true, required: false
  private _msgDroppedNoTemplate?: number; 
  public get msgDroppedNoTemplate() {
    return this.getNumberAttribute('msg_dropped_no_template');
  }
  public set msgDroppedNoTemplate(value: number) {
    this._msgDroppedNoTemplate = value;
  }
  public resetMsgDroppedNoTemplate() {
    this._msgDroppedNoTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgDroppedNoTemplateInput() {
    return this._msgDroppedNoTemplate;
  }

  // msg_dropped_other - computed: false, optional: true, required: false
  private _msgDroppedOther?: number; 
  public get msgDroppedOther() {
    return this.getNumberAttribute('msg_dropped_other');
  }
  public set msgDroppedOther(value: number) {
    this._msgDroppedOther = value;
  }
  public resetMsgDroppedOther() {
    this._msgDroppedOther = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgDroppedOtherInput() {
    return this._msgDroppedOther;
  }

  // msg_dropped_route_fail - computed: false, optional: true, required: false
  private _msgDroppedRouteFail?: number; 
  public get msgDroppedRouteFail() {
    return this.getNumberAttribute('msg_dropped_route_fail');
  }
  public set msgDroppedRouteFail(value: number) {
    this._msgDroppedRouteFail = value;
  }
  public resetMsgDroppedRouteFail() {
    this._msgDroppedRouteFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgDroppedRouteFailInput() {
    return this._msgDroppedRouteFail;
  }

  // msg_dropped_selector - computed: false, optional: true, required: false
  private _msgDroppedSelector?: number; 
  public get msgDroppedSelector() {
    return this.getNumberAttribute('msg_dropped_selector');
  }
  public set msgDroppedSelector(value: number) {
    this._msgDroppedSelector = value;
  }
  public resetMsgDroppedSelector() {
    this._msgDroppedSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgDroppedSelectorInput() {
    return this._msgDroppedSelector;
  }

  // msg_dropped_send_failed - computed: false, optional: true, required: false
  private _msgDroppedSendFailed?: number; 
  public get msgDroppedSendFailed() {
    return this.getNumberAttribute('msg_dropped_send_failed');
  }
  public set msgDroppedSendFailed(value: number) {
    this._msgDroppedSendFailed = value;
  }
  public resetMsgDroppedSendFailed() {
    this._msgDroppedSendFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgDroppedSendFailedInput() {
    return this._msgDroppedSendFailed;
  }

  // msg_dropped_too_long - computed: false, optional: true, required: false
  private _msgDroppedTooLong?: number; 
  public get msgDroppedTooLong() {
    return this.getNumberAttribute('msg_dropped_too_long');
  }
  public set msgDroppedTooLong(value: number) {
    this._msgDroppedTooLong = value;
  }
  public resetMsgDroppedTooLong() {
    this._msgDroppedTooLong = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgDroppedTooLongInput() {
    return this._msgDroppedTooLong;
  }

  // msg_sent - computed: false, optional: true, required: false
  private _msgSent?: number; 
  public get msgSent() {
    return this.getNumberAttribute('msg_sent');
  }
  public set msgSent(value: number) {
    this._msgSent = value;
  }
  public resetMsgSent() {
    this._msgSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgSentInput() {
    return this._msgSent;
  }

  // msg_sent_logdb - computed: false, optional: true, required: false
  private _msgSentLogdb?: number; 
  public get msgSentLogdb() {
    return this.getNumberAttribute('msg_sent_logdb');
  }
  public set msgSentLogdb(value: number) {
    this._msgSentLogdb = value;
  }
  public resetMsgSentLogdb() {
    this._msgSentLogdb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgSentLogdbInput() {
    return this._msgSentLogdb;
  }

  // param_msg_encode_fail - computed: false, optional: true, required: false
  private _paramMsgEncodeFail?: number; 
  public get paramMsgEncodeFail() {
    return this.getNumberAttribute('param_msg_encode_fail');
  }
  public set paramMsgEncodeFail(value: number) {
    this._paramMsgEncodeFail = value;
  }
  public resetParamMsgEncodeFail() {
    this._paramMsgEncodeFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramMsgEncodeFailInput() {
    return this._paramMsgEncodeFail;
  }

  // param_msg_sent_fail - computed: false, optional: true, required: false
  private _paramMsgSentFail?: number; 
  public get paramMsgSentFail() {
    return this.getNumberAttribute('param_msg_sent_fail');
  }
  public set paramMsgSentFail(value: number) {
    this._paramMsgSentFail = value;
  }
  public resetParamMsgSentFail() {
    this._paramMsgSentFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramMsgSentFailInput() {
    return this._paramMsgSentFail;
  }

  // param_msg_sent_to_hc - computed: false, optional: true, required: false
  private _paramMsgSentToHc?: number; 
  public get paramMsgSentToHc() {
    return this.getNumberAttribute('param_msg_sent_to_hc');
  }
  public set paramMsgSentToHc(value: number) {
    this._paramMsgSentToHc = value;
  }
  public resetParamMsgSentToHc() {
    this._paramMsgSentToHc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramMsgSentToHcInput() {
    return this._paramMsgSentToHc;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/acos_events_statistics_stats thunder_acos_events_statistics_stats}
*/
export class DataThunderAcosEventsStatisticsStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_acos_events_statistics_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderAcosEventsStatisticsStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderAcosEventsStatisticsStats to import
  * @param importFromId The id of the existing DataThunderAcosEventsStatisticsStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/acos_events_statistics_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderAcosEventsStatisticsStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_acos_events_statistics_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/acos_events_statistics_stats thunder_acos_events_statistics_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderAcosEventsStatisticsStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderAcosEventsStatisticsStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_acos_events_statistics_stats',
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
  private _stats = new DataThunderAcosEventsStatisticsStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderAcosEventsStatisticsStatsStats) {
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
      stats: dataThunderAcosEventsStatisticsStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderAcosEventsStatisticsStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderAcosEventsStatisticsStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
