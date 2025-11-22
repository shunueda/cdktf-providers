// https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/slo_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SloV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Optional SLO description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/slo_v2#description SloV2#description}
  */
  readonly description?: string;
  /**
  * Optional map of labels to attach to the SLO. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/slo_v2#labels SloV2#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * SLO name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/slo_v2#name SloV2#name}
  */
  readonly name: string;
  /**
  * SLI definition: exactly one of request_based_metric_sli or window_based_metric_sli must be provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/slo_v2#sli SloV2#sli}
  */
  readonly sli: SloV2Sli;
  /**
  * The target threshold percentage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/slo_v2#target_threshold_percentage SloV2#target_threshold_percentage}
  */
  readonly targetThresholdPercentage: number;
  /**
  * SLO time window. One of: 14_days, 21_days, 28_days, 7_days, unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/slo_v2#window SloV2#window}
  */
  readonly window: SloV2Window;
}
export interface SloV2Grouping {
}

export function sloV2GroupingToTerraform(struct?: SloV2Grouping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sloV2GroupingToHclTerraform(struct?: SloV2Grouping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SloV2GroupingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SloV2Grouping | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloV2Grouping | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // labels - computed: true, optional: false, required: false
  public get labels() {
    return this.getListAttribute('labels');
  }
}
export interface SloV2SliRequestBasedMetricSliGoodEvents {
  /**
  * Query string for good events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/slo_v2#query SloV2#query}
  */
  readonly query: string;
}

export function sloV2SliRequestBasedMetricSliGoodEventsToTerraform(struct?: SloV2SliRequestBasedMetricSliGoodEvents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function sloV2SliRequestBasedMetricSliGoodEventsToHclTerraform(struct?: SloV2SliRequestBasedMetricSliGoodEvents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloV2SliRequestBasedMetricSliGoodEventsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SloV2SliRequestBasedMetricSliGoodEvents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloV2SliRequestBasedMetricSliGoodEvents | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._query = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._query = value.query;
    }
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}
export interface SloV2SliRequestBasedMetricSliTotalEvents {
  /**
  * Query string for total events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/slo_v2#query SloV2#query}
  */
  readonly query: string;
}

export function sloV2SliRequestBasedMetricSliTotalEventsToTerraform(struct?: SloV2SliRequestBasedMetricSliTotalEvents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function sloV2SliRequestBasedMetricSliTotalEventsToHclTerraform(struct?: SloV2SliRequestBasedMetricSliTotalEvents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloV2SliRequestBasedMetricSliTotalEventsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SloV2SliRequestBasedMetricSliTotalEvents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloV2SliRequestBasedMetricSliTotalEvents | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._query = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._query = value.query;
    }
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}
export interface SloV2SliRequestBasedMetricSli {
  /**
  * Query defining good events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/slo_v2#good_events SloV2#good_events}
  */
  readonly goodEvents: SloV2SliRequestBasedMetricSliGoodEvents;
  /**
  * Query defining total events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/slo_v2#total_events SloV2#total_events}
  */
  readonly totalEvents: SloV2SliRequestBasedMetricSliTotalEvents;
}

export function sloV2SliRequestBasedMetricSliToTerraform(struct?: SloV2SliRequestBasedMetricSli | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    good_events: sloV2SliRequestBasedMetricSliGoodEventsToTerraform(struct!.goodEvents),
    total_events: sloV2SliRequestBasedMetricSliTotalEventsToTerraform(struct!.totalEvents),
  }
}


export function sloV2SliRequestBasedMetricSliToHclTerraform(struct?: SloV2SliRequestBasedMetricSli | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    good_events: {
      value: sloV2SliRequestBasedMetricSliGoodEventsToHclTerraform(struct!.goodEvents),
      isBlock: true,
      type: "struct",
      storageClassType: "SloV2SliRequestBasedMetricSliGoodEvents",
    },
    total_events: {
      value: sloV2SliRequestBasedMetricSliTotalEventsToHclTerraform(struct!.totalEvents),
      isBlock: true,
      type: "struct",
      storageClassType: "SloV2SliRequestBasedMetricSliTotalEvents",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloV2SliRequestBasedMetricSliOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SloV2SliRequestBasedMetricSli | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._goodEvents?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.goodEvents = this._goodEvents?.internalValue;
    }
    if (this._totalEvents?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalEvents = this._totalEvents?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloV2SliRequestBasedMetricSli | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._goodEvents.internalValue = undefined;
      this._totalEvents.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._goodEvents.internalValue = value.goodEvents;
      this._totalEvents.internalValue = value.totalEvents;
    }
  }

  // good_events - computed: false, optional: false, required: true
  private _goodEvents = new SloV2SliRequestBasedMetricSliGoodEventsOutputReference(this, "good_events");
  public get goodEvents() {
    return this._goodEvents;
  }
  public putGoodEvents(value: SloV2SliRequestBasedMetricSliGoodEvents) {
    this._goodEvents.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get goodEventsInput() {
    return this._goodEvents.internalValue;
  }

  // total_events - computed: false, optional: false, required: true
  private _totalEvents = new SloV2SliRequestBasedMetricSliTotalEventsOutputReference(this, "total_events");
  public get totalEvents() {
    return this._totalEvents;
  }
  public putTotalEvents(value: SloV2SliRequestBasedMetricSliTotalEvents) {
    this._totalEvents.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get totalEventsInput() {
    return this._totalEvents.internalValue;
  }
}
export interface SloV2SliWindowBasedMetricSliQuery {
  /**
  * Query string for the metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/slo_v2#query SloV2#query}
  */
  readonly query: string;
}

export function sloV2SliWindowBasedMetricSliQueryToTerraform(struct?: SloV2SliWindowBasedMetricSliQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function sloV2SliWindowBasedMetricSliQueryToHclTerraform(struct?: SloV2SliWindowBasedMetricSliQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloV2SliWindowBasedMetricSliQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SloV2SliWindowBasedMetricSliQuery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloV2SliWindowBasedMetricSliQuery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._query = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._query = value.query;
    }
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}
export interface SloV2SliWindowBasedMetricSli {
  /**
  * Comparison operator used to evaluate the threshold. One of: greater_than,greater_than_or_equals,less_than,less_than_or_equals,unspecified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/slo_v2#comparison_operator SloV2#comparison_operator}
  */
  readonly comparisonOperator: string;
  /**
  * Query used for evaluating the time-window SLI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/slo_v2#query SloV2#query}
  */
  readonly query: SloV2SliWindowBasedMetricSliQuery;
  /**
  * Threshold value for the comparison.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/slo_v2#threshold SloV2#threshold}
  */
  readonly threshold: number;
  /**
  * Time window type for evaluation. One of: 1_minute, 5_minutes, unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/slo_v2#window SloV2#window}
  */
  readonly window: string;
}

export function sloV2SliWindowBasedMetricSliToTerraform(struct?: SloV2SliWindowBasedMetricSli | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison_operator: cdktf.stringToTerraform(struct!.comparisonOperator),
    query: sloV2SliWindowBasedMetricSliQueryToTerraform(struct!.query),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    window: cdktf.stringToTerraform(struct!.window),
  }
}


export function sloV2SliWindowBasedMetricSliToHclTerraform(struct?: SloV2SliWindowBasedMetricSli | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comparison_operator: {
      value: cdktf.stringToHclTerraform(struct!.comparisonOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: sloV2SliWindowBasedMetricSliQueryToHclTerraform(struct!.query),
      isBlock: true,
      type: "struct",
      storageClassType: "SloV2SliWindowBasedMetricSliQuery",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    window: {
      value: cdktf.stringToHclTerraform(struct!.window),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloV2SliWindowBasedMetricSliOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SloV2SliWindowBasedMetricSli | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparisonOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparisonOperator = this._comparisonOperator;
    }
    if (this._query?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query?.internalValue;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._window !== undefined) {
      hasAnyValues = true;
      internalValueResult.window = this._window;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloV2SliWindowBasedMetricSli | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparisonOperator = undefined;
      this._query.internalValue = undefined;
      this._threshold = undefined;
      this._window = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparisonOperator = value.comparisonOperator;
      this._query.internalValue = value.query;
      this._threshold = value.threshold;
      this._window = value.window;
    }
  }

  // comparison_operator - computed: false, optional: false, required: true
  private _comparisonOperator?: string; 
  public get comparisonOperator() {
    return this.getStringAttribute('comparison_operator');
  }
  public set comparisonOperator(value: string) {
    this._comparisonOperator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonOperatorInput() {
    return this._comparisonOperator;
  }

  // query - computed: false, optional: false, required: true
  private _query = new SloV2SliWindowBasedMetricSliQueryOutputReference(this, "query");
  public get query() {
    return this._query;
  }
  public putQuery(value: SloV2SliWindowBasedMetricSliQuery) {
    this._query.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query.internalValue;
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // window - computed: false, optional: false, required: true
  private _window?: string; 
  public get window() {
    return this.getStringAttribute('window');
  }
  public set window(value: string) {
    this._window = value;
  }
  // Temporarily expose input value. Use with caution.
  public get windowInput() {
    return this._window;
  }
}
export interface SloV2Sli {
  /**
  * SLI based on request metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/slo_v2#request_based_metric_sli SloV2#request_based_metric_sli}
  */
  readonly requestBasedMetricSli?: SloV2SliRequestBasedMetricSli;
  /**
  * SLI based on time-window metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/slo_v2#window_based_metric_sli SloV2#window_based_metric_sli}
  */
  readonly windowBasedMetricSli?: SloV2SliWindowBasedMetricSli;
}

export function sloV2SliToTerraform(struct?: SloV2Sli | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request_based_metric_sli: sloV2SliRequestBasedMetricSliToTerraform(struct!.requestBasedMetricSli),
    window_based_metric_sli: sloV2SliWindowBasedMetricSliToTerraform(struct!.windowBasedMetricSli),
  }
}


export function sloV2SliToHclTerraform(struct?: SloV2Sli | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    request_based_metric_sli: {
      value: sloV2SliRequestBasedMetricSliToHclTerraform(struct!.requestBasedMetricSli),
      isBlock: true,
      type: "struct",
      storageClassType: "SloV2SliRequestBasedMetricSli",
    },
    window_based_metric_sli: {
      value: sloV2SliWindowBasedMetricSliToHclTerraform(struct!.windowBasedMetricSli),
      isBlock: true,
      type: "struct",
      storageClassType: "SloV2SliWindowBasedMetricSli",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloV2SliOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SloV2Sli | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requestBasedMetricSli?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestBasedMetricSli = this._requestBasedMetricSli?.internalValue;
    }
    if (this._windowBasedMetricSli?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowBasedMetricSli = this._windowBasedMetricSli?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloV2Sli | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._requestBasedMetricSli.internalValue = undefined;
      this._windowBasedMetricSli.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._requestBasedMetricSli.internalValue = value.requestBasedMetricSli;
      this._windowBasedMetricSli.internalValue = value.windowBasedMetricSli;
    }
  }

  // request_based_metric_sli - computed: false, optional: true, required: false
  private _requestBasedMetricSli = new SloV2SliRequestBasedMetricSliOutputReference(this, "request_based_metric_sli");
  public get requestBasedMetricSli() {
    return this._requestBasedMetricSli;
  }
  public putRequestBasedMetricSli(value: SloV2SliRequestBasedMetricSli) {
    this._requestBasedMetricSli.internalValue = value;
  }
  public resetRequestBasedMetricSli() {
    this._requestBasedMetricSli.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestBasedMetricSliInput() {
    return this._requestBasedMetricSli.internalValue;
  }

  // window_based_metric_sli - computed: false, optional: true, required: false
  private _windowBasedMetricSli = new SloV2SliWindowBasedMetricSliOutputReference(this, "window_based_metric_sli");
  public get windowBasedMetricSli() {
    return this._windowBasedMetricSli;
  }
  public putWindowBasedMetricSli(value: SloV2SliWindowBasedMetricSli) {
    this._windowBasedMetricSli.internalValue = value;
  }
  public resetWindowBasedMetricSli() {
    this._windowBasedMetricSli.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowBasedMetricSliInput() {
    return this._windowBasedMetricSli.internalValue;
  }
}
export interface SloV2Window {
  /**
  * SLO time window. One of: 14_days, 21_days, 28_days, 7_days, unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/slo_v2#slo_time_frame SloV2#slo_time_frame}
  */
  readonly sloTimeFrame: string;
}

export function sloV2WindowToTerraform(struct?: SloV2Window | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    slo_time_frame: cdktf.stringToTerraform(struct!.sloTimeFrame),
  }
}


export function sloV2WindowToHclTerraform(struct?: SloV2Window | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    slo_time_frame: {
      value: cdktf.stringToHclTerraform(struct!.sloTimeFrame),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloV2WindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SloV2Window | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sloTimeFrame !== undefined) {
      hasAnyValues = true;
      internalValueResult.sloTimeFrame = this._sloTimeFrame;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloV2Window | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sloTimeFrame = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sloTimeFrame = value.sloTimeFrame;
    }
  }

  // slo_time_frame - computed: false, optional: false, required: true
  private _sloTimeFrame?: string; 
  public get sloTimeFrame() {
    return this.getStringAttribute('slo_time_frame');
  }
  public set sloTimeFrame(value: string) {
    this._sloTimeFrame = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sloTimeFrameInput() {
    return this._sloTimeFrame;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/slo_v2 coralogix_slo_v2}
*/
export class SloV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "coralogix_slo_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SloV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SloV2 to import
  * @param importFromId The id of the existing SloV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/slo_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SloV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "coralogix_slo_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/slo_v2 coralogix_slo_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SloV2Config
  */
  public constructor(scope: Construct, id: string, config: SloV2Config) {
    super(scope, id, {
      terraformResourceType: 'coralogix_slo_v2',
      terraformGeneratorMetadata: {
        providerName: 'coralogix',
        providerVersion: '3.0.1',
        providerVersionConstraint: '3.0.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._labels = config.labels;
    this._name = config.name;
    this._sli.internalValue = config.sli;
    this._targetThresholdPercentage = config.targetThresholdPercentage;
    this._window.internalValue = config.window;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // grouping - computed: true, optional: false, required: false
  private _grouping = new SloV2GroupingOutputReference(this, "grouping");
  public get grouping() {
    return this._grouping;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: true, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // sli - computed: false, optional: false, required: true
  private _sli = new SloV2SliOutputReference(this, "sli");
  public get sli() {
    return this._sli;
  }
  public putSli(value: SloV2Sli) {
    this._sli.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sliInput() {
    return this._sli.internalValue;
  }

  // target_threshold_percentage - computed: false, optional: false, required: true
  private _targetThresholdPercentage?: number; 
  public get targetThresholdPercentage() {
    return this.getNumberAttribute('target_threshold_percentage');
  }
  public set targetThresholdPercentage(value: number) {
    this._targetThresholdPercentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetThresholdPercentageInput() {
    return this._targetThresholdPercentage;
  }

  // window - computed: false, optional: false, required: true
  private _window = new SloV2WindowOutputReference(this, "window");
  public get window() {
    return this._window;
  }
  public putWindow(value: SloV2Window) {
    this._window.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get windowInput() {
    return this._window.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      sli: sloV2SliToTerraform(this._sli.internalValue),
      target_threshold_percentage: cdktf.numberToTerraform(this._targetThresholdPercentage),
      window: sloV2WindowToTerraform(this._window.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sli: {
        value: sloV2SliToHclTerraform(this._sli.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SloV2Sli",
      },
      target_threshold_percentage: {
        value: cdktf.numberToHclTerraform(this._targetThresholdPercentage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      window: {
        value: sloV2WindowToHclTerraform(this._window.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SloV2Window",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
