// https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MetricDashboardConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#dashboard_description MetricDashboard#dashboard_description}
  */
  readonly dashboardDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#dashboard_name MetricDashboard#dashboard_name}
  */
  readonly dashboardName: string;
  /**
  * IDs of the event queries to display on this dashboard
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#event_query_ids MetricDashboard#event_query_ids}
  */
  readonly eventQueryIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#id MetricDashboard#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#project_name MetricDashboard#project_name}
  */
  readonly projectName: string;
  /**
  * chart block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#chart MetricDashboard#chart}
  */
  readonly chart?: MetricDashboardChart[] | cdktf.IResolvable;
  /**
  * group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#group MetricDashboard#group}
  */
  readonly group?: MetricDashboardGroup[] | cdktf.IResolvable;
  /**
  * label block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#label MetricDashboard#label}
  */
  readonly label?: MetricDashboardLabel[] | cdktf.IResolvable;
  /**
  * template_variable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#template_variable MetricDashboard#template_variable}
  */
  readonly templateVariable?: MetricDashboardTemplateVariable[] | cdktf.IResolvable;
  /**
  * workflow_link block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#workflow_link MetricDashboard#workflow_link}
  */
  readonly workflowLink?: MetricDashboardWorkflowLink[] | cdktf.IResolvable;
}
export interface MetricDashboardChartQueryFinalWindowOperation {
  /**
  * Unit specified in milliseconds, but must be at least 30,000 and a round number of seconds (i.e. evenly divisible by 1,000).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#input_window_ms MetricDashboard#input_window_ms}
  */
  readonly inputWindowMs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#operator MetricDashboard#operator}
  */
  readonly operator?: string;
}

export function metricDashboardChartQueryFinalWindowOperationToTerraform(struct?: MetricDashboardChartQueryFinalWindowOperationOutputReference | MetricDashboardChartQueryFinalWindowOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    input_window_ms: cdktf.numberToTerraform(struct!.inputWindowMs),
    operator: cdktf.stringToTerraform(struct!.operator),
  }
}


export function metricDashboardChartQueryFinalWindowOperationToHclTerraform(struct?: MetricDashboardChartQueryFinalWindowOperationOutputReference | MetricDashboardChartQueryFinalWindowOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    input_window_ms: {
      value: cdktf.numberToHclTerraform(struct!.inputWindowMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MetricDashboardChartQueryFinalWindowOperationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MetricDashboardChartQueryFinalWindowOperation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inputWindowMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputWindowMs = this._inputWindowMs;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricDashboardChartQueryFinalWindowOperation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inputWindowMs = undefined;
      this._operator = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inputWindowMs = value.inputWindowMs;
      this._operator = value.operator;
    }
  }

  // input_window_ms - computed: false, optional: true, required: false
  private _inputWindowMs?: number; 
  public get inputWindowMs() {
    return this.getNumberAttribute('input_window_ms');
  }
  public set inputWindowMs(value: number) {
    this._inputWindowMs = value;
  }
  public resetInputWindowMs() {
    this._inputWindowMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputWindowMsInput() {
    return this._inputWindowMs;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }
}
export interface MetricDashboardChartQueryGroupBy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#aggregation_method MetricDashboard#aggregation_method}
  */
  readonly aggregationMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#keys MetricDashboard#keys}
  */
  readonly keys?: string[];
}

export function metricDashboardChartQueryGroupByToTerraform(struct?: MetricDashboardChartQueryGroupByOutputReference | MetricDashboardChartQueryGroupBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation_method: cdktf.stringToTerraform(struct!.aggregationMethod),
    keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keys),
  }
}


export function metricDashboardChartQueryGroupByToHclTerraform(struct?: MetricDashboardChartQueryGroupByOutputReference | MetricDashboardChartQueryGroupBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregation_method: {
      value: cdktf.stringToHclTerraform(struct!.aggregationMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MetricDashboardChartQueryGroupByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MetricDashboardChartQueryGroupBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregationMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregationMethod = this._aggregationMethod;
    }
    if (this._keys !== undefined) {
      hasAnyValues = true;
      internalValueResult.keys = this._keys;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricDashboardChartQueryGroupBy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregationMethod = undefined;
      this._keys = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregationMethod = value.aggregationMethod;
      this._keys = value.keys;
    }
  }

  // aggregation_method - computed: false, optional: true, required: false
  private _aggregationMethod?: string; 
  public get aggregationMethod() {
    return this.getStringAttribute('aggregation_method');
  }
  public set aggregationMethod(value: string) {
    this._aggregationMethod = value;
  }
  public resetAggregationMethod() {
    this._aggregationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationMethodInput() {
    return this._aggregationMethod;
  }

  // keys - computed: false, optional: true, required: false
  private _keys?: string[]; 
  public get keys() {
    return this.getListAttribute('keys');
  }
  public set keys(value: string[]) {
    this._keys = value;
  }
  public resetKeys() {
    this._keys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keysInput() {
    return this._keys;
  }
}
export interface MetricDashboardChartQuerySpans {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#group_by_keys MetricDashboard#group_by_keys}
  */
  readonly groupByKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#latency_percentiles MetricDashboard#latency_percentiles}
  */
  readonly latencyPercentiles?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#operator MetricDashboard#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#operator_input_window_ms MetricDashboard#operator_input_window_ms}
  */
  readonly operatorInputWindowMs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#query MetricDashboard#query}
  */
  readonly query: string;
}

export function metricDashboardChartQuerySpansToTerraform(struct?: MetricDashboardChartQuerySpansOutputReference | MetricDashboardChartQuerySpans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_by_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupByKeys),
    latency_percentiles: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.latencyPercentiles),
    operator: cdktf.stringToTerraform(struct!.operator),
    operator_input_window_ms: cdktf.numberToTerraform(struct!.operatorInputWindowMs),
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function metricDashboardChartQuerySpansToHclTerraform(struct?: MetricDashboardChartQuerySpansOutputReference | MetricDashboardChartQuerySpans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_by_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groupByKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    latency_percentiles: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.latencyPercentiles),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator_input_window_ms: {
      value: cdktf.numberToHclTerraform(struct!.operatorInputWindowMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
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

export class MetricDashboardChartQuerySpansOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MetricDashboardChartQuerySpans | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupByKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupByKeys = this._groupByKeys;
    }
    if (this._latencyPercentiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.latencyPercentiles = this._latencyPercentiles;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._operatorInputWindowMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.operatorInputWindowMs = this._operatorInputWindowMs;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricDashboardChartQuerySpans | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._groupByKeys = undefined;
      this._latencyPercentiles = undefined;
      this._operator = undefined;
      this._operatorInputWindowMs = undefined;
      this._query = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._groupByKeys = value.groupByKeys;
      this._latencyPercentiles = value.latencyPercentiles;
      this._operator = value.operator;
      this._operatorInputWindowMs = value.operatorInputWindowMs;
      this._query = value.query;
    }
  }

  // group_by_keys - computed: false, optional: true, required: false
  private _groupByKeys?: string[]; 
  public get groupByKeys() {
    return this.getListAttribute('group_by_keys');
  }
  public set groupByKeys(value: string[]) {
    this._groupByKeys = value;
  }
  public resetGroupByKeys() {
    this._groupByKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByKeysInput() {
    return this._groupByKeys;
  }

  // latency_percentiles - computed: true, optional: true, required: false
  private _latencyPercentiles?: number[]; 
  public get latencyPercentiles() {
    return this.getNumberListAttribute('latency_percentiles');
  }
  public set latencyPercentiles(value: number[]) {
    this._latencyPercentiles = value;
  }
  public resetLatencyPercentiles() {
    this._latencyPercentiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latencyPercentilesInput() {
    return this._latencyPercentiles;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // operator_input_window_ms - computed: false, optional: true, required: false
  private _operatorInputWindowMs?: number; 
  public get operatorInputWindowMs() {
    return this.getNumberAttribute('operator_input_window_ms');
  }
  public set operatorInputWindowMs(value: number) {
    this._operatorInputWindowMs = value;
  }
  public resetOperatorInputWindowMs() {
    this._operatorInputWindowMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInputWindowMsInput() {
    return this._operatorInputWindowMs;
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
export interface MetricDashboardChartQuery {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#display MetricDashboard#display}
  */
  readonly display?: string;
  /**
  * Not-equals filters (operand: neq)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#exclude_filters MetricDashboard#exclude_filters}
  */
  readonly excludeFilters?: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * Non-equality filters (operand: contains, regexp)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#filters MetricDashboard#filters}
  */
  readonly filters?: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#hidden MetricDashboard#hidden}
  */
  readonly hidden: boolean | cdktf.IResolvable;
  /**
  * Equality filters (operand: eq)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#include_filters MetricDashboard#include_filters}
  */
  readonly includeFilters?: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#metric MetricDashboard#metric}
  */
  readonly metric?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#query_name MetricDashboard#query_name}
  */
  readonly queryName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#timeseries_operator MetricDashboard#timeseries_operator}
  */
  readonly timeseriesOperator?: string;
  /**
  * Unit specified in milliseconds, but must be at least 30,000 and a round number of seconds (i.e. evenly divisible by 1,000).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#timeseries_operator_input_window_ms MetricDashboard#timeseries_operator_input_window_ms}
  */
  readonly timeseriesOperatorInputWindowMs?: number;
  /**
  * Deprecated, use the query_string field in lightstep_dashboard or lightstep_alert instead
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#tql MetricDashboard#tql}
  */
  readonly tql?: string;
  /**
  * final_window_operation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#final_window_operation MetricDashboard#final_window_operation}
  */
  readonly finalWindowOperation?: MetricDashboardChartQueryFinalWindowOperation;
  /**
  * group_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#group_by MetricDashboard#group_by}
  */
  readonly groupBy?: MetricDashboardChartQueryGroupBy;
  /**
  * spans block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#spans MetricDashboard#spans}
  */
  readonly spans?: MetricDashboardChartQuerySpans;
}

export function metricDashboardChartQueryToTerraform(struct?: MetricDashboardChartQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display: cdktf.stringToTerraform(struct!.display),
    exclude_filters: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(struct!.excludeFilters),
    filters: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(struct!.filters),
    hidden: cdktf.booleanToTerraform(struct!.hidden),
    include_filters: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(struct!.includeFilters),
    metric: cdktf.stringToTerraform(struct!.metric),
    query_name: cdktf.stringToTerraform(struct!.queryName),
    timeseries_operator: cdktf.stringToTerraform(struct!.timeseriesOperator),
    timeseries_operator_input_window_ms: cdktf.numberToTerraform(struct!.timeseriesOperatorInputWindowMs),
    tql: cdktf.stringToTerraform(struct!.tql),
    final_window_operation: metricDashboardChartQueryFinalWindowOperationToTerraform(struct!.finalWindowOperation),
    group_by: metricDashboardChartQueryGroupByToTerraform(struct!.groupBy),
    spans: metricDashboardChartQuerySpansToTerraform(struct!.spans),
  }
}


export function metricDashboardChartQueryToHclTerraform(struct?: MetricDashboardChartQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display: {
      value: cdktf.stringToHclTerraform(struct!.display),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_filters: {
      value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(struct!.excludeFilters),
      isBlock: false,
      type: "list",
      storageClassType: "stringMapList",
    },
    filters: {
      value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(struct!.filters),
      isBlock: false,
      type: "list",
      storageClassType: "stringMapList",
    },
    hidden: {
      value: cdktf.booleanToHclTerraform(struct!.hidden),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_filters: {
      value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(struct!.includeFilters),
      isBlock: false,
      type: "list",
      storageClassType: "stringMapList",
    },
    metric: {
      value: cdktf.stringToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_name: {
      value: cdktf.stringToHclTerraform(struct!.queryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeseries_operator: {
      value: cdktf.stringToHclTerraform(struct!.timeseriesOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeseries_operator_input_window_ms: {
      value: cdktf.numberToHclTerraform(struct!.timeseriesOperatorInputWindowMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tql: {
      value: cdktf.stringToHclTerraform(struct!.tql),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    final_window_operation: {
      value: metricDashboardChartQueryFinalWindowOperationToHclTerraform(struct!.finalWindowOperation),
      isBlock: true,
      type: "list",
      storageClassType: "MetricDashboardChartQueryFinalWindowOperationList",
    },
    group_by: {
      value: metricDashboardChartQueryGroupByToHclTerraform(struct!.groupBy),
      isBlock: true,
      type: "list",
      storageClassType: "MetricDashboardChartQueryGroupByList",
    },
    spans: {
      value: metricDashboardChartQuerySpansToHclTerraform(struct!.spans),
      isBlock: true,
      type: "list",
      storageClassType: "MetricDashboardChartQuerySpansList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MetricDashboardChartQueryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MetricDashboardChartQuery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._display !== undefined) {
      hasAnyValues = true;
      internalValueResult.display = this._display;
    }
    if (this._excludeFilters !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeFilters = this._excludeFilters;
    }
    if (this._filters !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters;
    }
    if (this._hidden !== undefined) {
      hasAnyValues = true;
      internalValueResult.hidden = this._hidden;
    }
    if (this._includeFilters !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeFilters = this._includeFilters;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._queryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryName = this._queryName;
    }
    if (this._timeseriesOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeseriesOperator = this._timeseriesOperator;
    }
    if (this._timeseriesOperatorInputWindowMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeseriesOperatorInputWindowMs = this._timeseriesOperatorInputWindowMs;
    }
    if (this._tql !== undefined) {
      hasAnyValues = true;
      internalValueResult.tql = this._tql;
    }
    if (this._finalWindowOperation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.finalWindowOperation = this._finalWindowOperation?.internalValue;
    }
    if (this._groupBy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy?.internalValue;
    }
    if (this._spans?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spans = this._spans?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricDashboardChartQuery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._display = undefined;
      this._excludeFilters = undefined;
      this._filters = undefined;
      this._hidden = undefined;
      this._includeFilters = undefined;
      this._metric = undefined;
      this._queryName = undefined;
      this._timeseriesOperator = undefined;
      this._timeseriesOperatorInputWindowMs = undefined;
      this._tql = undefined;
      this._finalWindowOperation.internalValue = undefined;
      this._groupBy.internalValue = undefined;
      this._spans.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._display = value.display;
      this._excludeFilters = value.excludeFilters;
      this._filters = value.filters;
      this._hidden = value.hidden;
      this._includeFilters = value.includeFilters;
      this._metric = value.metric;
      this._queryName = value.queryName;
      this._timeseriesOperator = value.timeseriesOperator;
      this._timeseriesOperatorInputWindowMs = value.timeseriesOperatorInputWindowMs;
      this._tql = value.tql;
      this._finalWindowOperation.internalValue = value.finalWindowOperation;
      this._groupBy.internalValue = value.groupBy;
      this._spans.internalValue = value.spans;
    }
  }

  // display - computed: false, optional: true, required: false
  private _display?: string; 
  public get display() {
    return this.getStringAttribute('display');
  }
  public set display(value: string) {
    this._display = value;
  }
  public resetDisplay() {
    this._display = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayInput() {
    return this._display;
  }

  // exclude_filters - computed: true, optional: true, required: false
  private _excludeFilters?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get excludeFilters() {
    return this.interpolationForAttribute('exclude_filters');
  }
  public set excludeFilters(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._excludeFilters = value;
  }
  public resetExcludeFilters() {
    this._excludeFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeFiltersInput() {
    return this._excludeFilters;
  }

  // filters - computed: true, optional: true, required: false
  private _filters?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get filters() {
    return this.interpolationForAttribute('filters');
  }
  public set filters(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._filters = value;
  }
  public resetFilters() {
    this._filters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters;
  }

  // hidden - computed: false, optional: false, required: true
  private _hidden?: boolean | cdktf.IResolvable; 
  public get hidden() {
    return this.getBooleanAttribute('hidden');
  }
  public set hidden(value: boolean | cdktf.IResolvable) {
    this._hidden = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hiddenInput() {
    return this._hidden;
  }

  // include_filters - computed: true, optional: true, required: false
  private _includeFilters?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get includeFilters() {
    return this.interpolationForAttribute('include_filters');
  }
  public set includeFilters(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._includeFilters = value;
  }
  public resetIncludeFilters() {
    this._includeFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeFiltersInput() {
    return this._includeFilters;
  }

  // metric - computed: true, optional: true, required: false
  private _metric?: string; 
  public get metric() {
    return this.getStringAttribute('metric');
  }
  public set metric(value: string) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // query_name - computed: false, optional: false, required: true
  private _queryName?: string; 
  public get queryName() {
    return this.getStringAttribute('query_name');
  }
  public set queryName(value: string) {
    this._queryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryNameInput() {
    return this._queryName;
  }

  // timeseries_operator - computed: true, optional: true, required: false
  private _timeseriesOperator?: string; 
  public get timeseriesOperator() {
    return this.getStringAttribute('timeseries_operator');
  }
  public set timeseriesOperator(value: string) {
    this._timeseriesOperator = value;
  }
  public resetTimeseriesOperator() {
    this._timeseriesOperator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeseriesOperatorInput() {
    return this._timeseriesOperator;
  }

  // timeseries_operator_input_window_ms - computed: false, optional: true, required: false
  private _timeseriesOperatorInputWindowMs?: number; 
  public get timeseriesOperatorInputWindowMs() {
    return this.getNumberAttribute('timeseries_operator_input_window_ms');
  }
  public set timeseriesOperatorInputWindowMs(value: number) {
    this._timeseriesOperatorInputWindowMs = value;
  }
  public resetTimeseriesOperatorInputWindowMs() {
    this._timeseriesOperatorInputWindowMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeseriesOperatorInputWindowMsInput() {
    return this._timeseriesOperatorInputWindowMs;
  }

  // tql - computed: false, optional: true, required: false
  private _tql?: string; 
  public get tql() {
    return this.getStringAttribute('tql');
  }
  public set tql(value: string) {
    this._tql = value;
  }
  public resetTql() {
    this._tql = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tqlInput() {
    return this._tql;
  }

  // final_window_operation - computed: false, optional: true, required: false
  private _finalWindowOperation = new MetricDashboardChartQueryFinalWindowOperationOutputReference(this, "final_window_operation");
  public get finalWindowOperation() {
    return this._finalWindowOperation;
  }
  public putFinalWindowOperation(value: MetricDashboardChartQueryFinalWindowOperation) {
    this._finalWindowOperation.internalValue = value;
  }
  public resetFinalWindowOperation() {
    this._finalWindowOperation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finalWindowOperationInput() {
    return this._finalWindowOperation.internalValue;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy = new MetricDashboardChartQueryGroupByOutputReference(this, "group_by");
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: MetricDashboardChartQueryGroupBy) {
    this._groupBy.internalValue = value;
  }
  public resetGroupBy() {
    this._groupBy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy.internalValue;
  }

  // spans - computed: false, optional: true, required: false
  private _spans = new MetricDashboardChartQuerySpansOutputReference(this, "spans");
  public get spans() {
    return this._spans;
  }
  public putSpans(value: MetricDashboardChartQuerySpans) {
    this._spans.internalValue = value;
  }
  public resetSpans() {
    this._spans.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spansInput() {
    return this._spans.internalValue;
  }
}

export class MetricDashboardChartQueryList extends cdktf.ComplexList {
  public internalValue? : MetricDashboardChartQuery[] | cdktf.IResolvable

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
  public get(index: number): MetricDashboardChartQueryOutputReference {
    return new MetricDashboardChartQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MetricDashboardChartThreshold {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#color MetricDashboard#color}
  */
  readonly color: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#label MetricDashboard#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#operator MetricDashboard#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#value MetricDashboard#value}
  */
  readonly value: number;
}

export function metricDashboardChartThresholdToTerraform(struct?: MetricDashboardChartThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    label: cdktf.stringToTerraform(struct!.label),
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function metricDashboardChartThresholdToHclTerraform(struct?: MetricDashboardChartThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    color: {
      value: cdktf.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MetricDashboardChartThresholdOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MetricDashboardChartThreshold | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricDashboardChartThreshold | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._label = undefined;
      this._operator = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._color = value.color;
      this._label = value.label;
      this._operator = value.operator;
      this._value = value.value;
    }
  }

  // color - computed: false, optional: false, required: true
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class MetricDashboardChartThresholdList extends cdktf.ComplexList {
  public internalValue? : MetricDashboardChartThreshold[] | cdktf.IResolvable

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
  public get(index: number): MetricDashboardChartThresholdOutputReference {
    return new MetricDashboardChartThresholdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MetricDashboardChartWorkflowLink {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#name MetricDashboard#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#url MetricDashboard#url}
  */
  readonly url: string;
}

export function metricDashboardChartWorkflowLinkToTerraform(struct?: MetricDashboardChartWorkflowLink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function metricDashboardChartWorkflowLinkToHclTerraform(struct?: MetricDashboardChartWorkflowLink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MetricDashboardChartWorkflowLinkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MetricDashboardChartWorkflowLink | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricDashboardChartWorkflowLink | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._url = value.url;
    }
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

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class MetricDashboardChartWorkflowLinkList extends cdktf.ComplexList {
  public internalValue? : MetricDashboardChartWorkflowLink[] | cdktf.IResolvable

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
  public get(index: number): MetricDashboardChartWorkflowLinkOutputReference {
    return new MetricDashboardChartWorkflowLinkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MetricDashboardChartYAxis {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#max MetricDashboard#max}
  */
  readonly max: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#min MetricDashboard#min}
  */
  readonly min: number;
}

export function metricDashboardChartYAxisToTerraform(struct?: MetricDashboardChartYAxisOutputReference | MetricDashboardChartYAxis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}


export function metricDashboardChartYAxisToHclTerraform(struct?: MetricDashboardChartYAxisOutputReference | MetricDashboardChartYAxis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max: {
      value: cdktf.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktf.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MetricDashboardChartYAxisOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MetricDashboardChartYAxis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricDashboardChartYAxis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._max = undefined;
      this._min = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: false, required: true
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: false, required: true
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}
export interface MetricDashboardChart {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#description MetricDashboard#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#height MetricDashboard#height}
  */
  readonly height?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#name MetricDashboard#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#rank MetricDashboard#rank}
  */
  readonly rank: number;
  /**
  * Subtitle to show beneath big number, unused in other chart types
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#subtitle MetricDashboard#subtitle}
  */
  readonly subtitle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#type MetricDashboard#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#width MetricDashboard#width}
  */
  readonly width?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#x_pos MetricDashboard#x_pos}
  */
  readonly xPos?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#y_pos MetricDashboard#y_pos}
  */
  readonly yPos?: number;
  /**
  * query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#query MetricDashboard#query}
  */
  readonly query: MetricDashboardChartQuery[] | cdktf.IResolvable;
  /**
  * threshold block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#threshold MetricDashboard#threshold}
  */
  readonly threshold?: MetricDashboardChartThreshold[] | cdktf.IResolvable;
  /**
  * workflow_link block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#workflow_link MetricDashboard#workflow_link}
  */
  readonly workflowLink?: MetricDashboardChartWorkflowLink[] | cdktf.IResolvable;
  /**
  * y_axis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#y_axis MetricDashboard#y_axis}
  */
  readonly yAxis?: MetricDashboardChartYAxis;
}

export function metricDashboardChartToTerraform(struct?: MetricDashboardChart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    height: cdktf.numberToTerraform(struct!.height),
    name: cdktf.stringToTerraform(struct!.name),
    rank: cdktf.numberToTerraform(struct!.rank),
    subtitle: cdktf.stringToTerraform(struct!.subtitle),
    type: cdktf.stringToTerraform(struct!.type),
    width: cdktf.numberToTerraform(struct!.width),
    x_pos: cdktf.numberToTerraform(struct!.xPos),
    y_pos: cdktf.numberToTerraform(struct!.yPos),
    query: cdktf.listMapper(metricDashboardChartQueryToTerraform, true)(struct!.query),
    threshold: cdktf.listMapper(metricDashboardChartThresholdToTerraform, true)(struct!.threshold),
    workflow_link: cdktf.listMapper(metricDashboardChartWorkflowLinkToTerraform, true)(struct!.workflowLink),
    y_axis: metricDashboardChartYAxisToTerraform(struct!.yAxis),
  }
}


export function metricDashboardChartToHclTerraform(struct?: MetricDashboardChart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    height: {
      value: cdktf.numberToHclTerraform(struct!.height),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rank: {
      value: cdktf.numberToHclTerraform(struct!.rank),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    subtitle: {
      value: cdktf.stringToHclTerraform(struct!.subtitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    width: {
      value: cdktf.numberToHclTerraform(struct!.width),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    x_pos: {
      value: cdktf.numberToHclTerraform(struct!.xPos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    y_pos: {
      value: cdktf.numberToHclTerraform(struct!.yPos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    query: {
      value: cdktf.listMapperHcl(metricDashboardChartQueryToHclTerraform, true)(struct!.query),
      isBlock: true,
      type: "list",
      storageClassType: "MetricDashboardChartQueryList",
    },
    threshold: {
      value: cdktf.listMapperHcl(metricDashboardChartThresholdToHclTerraform, true)(struct!.threshold),
      isBlock: true,
      type: "list",
      storageClassType: "MetricDashboardChartThresholdList",
    },
    workflow_link: {
      value: cdktf.listMapperHcl(metricDashboardChartWorkflowLinkToHclTerraform, true)(struct!.workflowLink),
      isBlock: true,
      type: "list",
      storageClassType: "MetricDashboardChartWorkflowLinkList",
    },
    y_axis: {
      value: metricDashboardChartYAxisToHclTerraform(struct!.yAxis),
      isBlock: true,
      type: "list",
      storageClassType: "MetricDashboardChartYAxisList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MetricDashboardChartOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MetricDashboardChart | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._rank !== undefined) {
      hasAnyValues = true;
      internalValueResult.rank = this._rank;
    }
    if (this._subtitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.subtitle = this._subtitle;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    if (this._xPos !== undefined) {
      hasAnyValues = true;
      internalValueResult.xPos = this._xPos;
    }
    if (this._yPos !== undefined) {
      hasAnyValues = true;
      internalValueResult.yPos = this._yPos;
    }
    if (this._query?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query?.internalValue;
    }
    if (this._threshold?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold?.internalValue;
    }
    if (this._workflowLink?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workflowLink = this._workflowLink?.internalValue;
    }
    if (this._yAxis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.yAxis = this._yAxis?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricDashboardChart | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._height = undefined;
      this._name = undefined;
      this._rank = undefined;
      this._subtitle = undefined;
      this._type = undefined;
      this._width = undefined;
      this._xPos = undefined;
      this._yPos = undefined;
      this._query.internalValue = undefined;
      this._threshold.internalValue = undefined;
      this._workflowLink.internalValue = undefined;
      this._yAxis.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._height = value.height;
      this._name = value.name;
      this._rank = value.rank;
      this._subtitle = value.subtitle;
      this._type = value.type;
      this._width = value.width;
      this._xPos = value.xPos;
      this._yPos = value.yPos;
      this._query.internalValue = value.query;
      this._threshold.internalValue = value.threshold;
      this._workflowLink.internalValue = value.workflowLink;
      this._yAxis.internalValue = value.yAxis;
    }
  }

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

  // height - computed: false, optional: true, required: false
  private _height?: number; 
  public get height() {
    return this.getNumberAttribute('height');
  }
  public set height(value: number) {
    this._height = value;
  }
  public resetHeight() {
    this._height = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heightInput() {
    return this._height;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // rank - computed: false, optional: false, required: true
  private _rank?: number; 
  public get rank() {
    return this.getNumberAttribute('rank');
  }
  public set rank(value: number) {
    this._rank = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rankInput() {
    return this._rank;
  }

  // subtitle - computed: false, optional: true, required: false
  private _subtitle?: string; 
  public get subtitle() {
    return this.getStringAttribute('subtitle');
  }
  public set subtitle(value: string) {
    this._subtitle = value;
  }
  public resetSubtitle() {
    this._subtitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subtitleInput() {
    return this._subtitle;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // width - computed: false, optional: true, required: false
  private _width?: number; 
  public get width() {
    return this.getNumberAttribute('width');
  }
  public set width(value: number) {
    this._width = value;
  }
  public resetWidth() {
    this._width = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width;
  }

  // x_pos - computed: false, optional: true, required: false
  private _xPos?: number; 
  public get xPos() {
    return this.getNumberAttribute('x_pos');
  }
  public set xPos(value: number) {
    this._xPos = value;
  }
  public resetXPos() {
    this._xPos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xPosInput() {
    return this._xPos;
  }

  // y_pos - computed: false, optional: true, required: false
  private _yPos?: number; 
  public get yPos() {
    return this.getNumberAttribute('y_pos');
  }
  public set yPos(value: number) {
    this._yPos = value;
  }
  public resetYPos() {
    this._yPos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yPosInput() {
    return this._yPos;
  }

  // query - computed: false, optional: false, required: true
  private _query = new MetricDashboardChartQueryList(this, "query", false);
  public get query() {
    return this._query;
  }
  public putQuery(value: MetricDashboardChartQuery[] | cdktf.IResolvable) {
    this._query.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query.internalValue;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold = new MetricDashboardChartThresholdList(this, "threshold", false);
  public get threshold() {
    return this._threshold;
  }
  public putThreshold(value: MetricDashboardChartThreshold[] | cdktf.IResolvable) {
    this._threshold.internalValue = value;
  }
  public resetThreshold() {
    this._threshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold.internalValue;
  }

  // workflow_link - computed: false, optional: true, required: false
  private _workflowLink = new MetricDashboardChartWorkflowLinkList(this, "workflow_link", false);
  public get workflowLink() {
    return this._workflowLink;
  }
  public putWorkflowLink(value: MetricDashboardChartWorkflowLink[] | cdktf.IResolvable) {
    this._workflowLink.internalValue = value;
  }
  public resetWorkflowLink() {
    this._workflowLink.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowLinkInput() {
    return this._workflowLink.internalValue;
  }

  // y_axis - computed: false, optional: true, required: false
  private _yAxis = new MetricDashboardChartYAxisOutputReference(this, "y_axis");
  public get yAxis() {
    return this._yAxis;
  }
  public putYAxis(value: MetricDashboardChartYAxis) {
    this._yAxis.internalValue = value;
  }
  public resetYAxis() {
    this._yAxis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yAxisInput() {
    return this._yAxis.internalValue;
  }
}

export class MetricDashboardChartList extends cdktf.ComplexList {
  public internalValue? : MetricDashboardChart[] | cdktf.IResolvable

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
  public get(index: number): MetricDashboardChartOutputReference {
    return new MetricDashboardChartOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MetricDashboardGroupAlertsListPanelFilterByPredicateLabel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#key MetricDashboard#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#value MetricDashboard#value}
  */
  readonly value: string;
}

export function metricDashboardGroupAlertsListPanelFilterByPredicateLabelToTerraform(struct?: MetricDashboardGroupAlertsListPanelFilterByPredicateLabel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function metricDashboardGroupAlertsListPanelFilterByPredicateLabelToHclTerraform(struct?: MetricDashboardGroupAlertsListPanelFilterByPredicateLabel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MetricDashboardGroupAlertsListPanelFilterByPredicateLabelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MetricDashboardGroupAlertsListPanelFilterByPredicateLabel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricDashboardGroupAlertsListPanelFilterByPredicateLabel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class MetricDashboardGroupAlertsListPanelFilterByPredicateLabelList extends cdktf.ComplexList {
  public internalValue? : MetricDashboardGroupAlertsListPanelFilterByPredicateLabel[] | cdktf.IResolvable

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
  public get(index: number): MetricDashboardGroupAlertsListPanelFilterByPredicateLabelOutputReference {
    return new MetricDashboardGroupAlertsListPanelFilterByPredicateLabelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MetricDashboardGroupAlertsListPanelFilterByPredicate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#operator MetricDashboard#operator}
  */
  readonly operator?: string;
  /**
  * label block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#label MetricDashboard#label}
  */
  readonly label?: MetricDashboardGroupAlertsListPanelFilterByPredicateLabel[] | cdktf.IResolvable;
}

export function metricDashboardGroupAlertsListPanelFilterByPredicateToTerraform(struct?: MetricDashboardGroupAlertsListPanelFilterByPredicate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    label: cdktf.listMapper(metricDashboardGroupAlertsListPanelFilterByPredicateLabelToTerraform, true)(struct!.label),
  }
}


export function metricDashboardGroupAlertsListPanelFilterByPredicateToHclTerraform(struct?: MetricDashboardGroupAlertsListPanelFilterByPredicate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label: {
      value: cdktf.listMapperHcl(metricDashboardGroupAlertsListPanelFilterByPredicateLabelToHclTerraform, true)(struct!.label),
      isBlock: true,
      type: "set",
      storageClassType: "MetricDashboardGroupAlertsListPanelFilterByPredicateLabelList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MetricDashboardGroupAlertsListPanelFilterByPredicateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MetricDashboardGroupAlertsListPanelFilterByPredicate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._label?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricDashboardGroupAlertsListPanelFilterByPredicate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._label.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._label.internalValue = value.label;
    }
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // label - computed: false, optional: true, required: false
  private _label = new MetricDashboardGroupAlertsListPanelFilterByPredicateLabelList(this, "label", true);
  public get label() {
    return this._label;
  }
  public putLabel(value: MetricDashboardGroupAlertsListPanelFilterByPredicateLabel[] | cdktf.IResolvable) {
    this._label.internalValue = value;
  }
  public resetLabel() {
    this._label.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label.internalValue;
  }
}

export class MetricDashboardGroupAlertsListPanelFilterByPredicateList extends cdktf.ComplexList {
  public internalValue? : MetricDashboardGroupAlertsListPanelFilterByPredicate[] | cdktf.IResolvable

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
  public get(index: number): MetricDashboardGroupAlertsListPanelFilterByPredicateOutputReference {
    return new MetricDashboardGroupAlertsListPanelFilterByPredicateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MetricDashboardGroupAlertsListPanelFilterBy {
  /**
  * predicate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#predicate MetricDashboard#predicate}
  */
  readonly predicate?: MetricDashboardGroupAlertsListPanelFilterByPredicate[] | cdktf.IResolvable;
}

export function metricDashboardGroupAlertsListPanelFilterByToTerraform(struct?: MetricDashboardGroupAlertsListPanelFilterByOutputReference | MetricDashboardGroupAlertsListPanelFilterBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    predicate: cdktf.listMapper(metricDashboardGroupAlertsListPanelFilterByPredicateToTerraform, true)(struct!.predicate),
  }
}


export function metricDashboardGroupAlertsListPanelFilterByToHclTerraform(struct?: MetricDashboardGroupAlertsListPanelFilterByOutputReference | MetricDashboardGroupAlertsListPanelFilterBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    predicate: {
      value: cdktf.listMapperHcl(metricDashboardGroupAlertsListPanelFilterByPredicateToHclTerraform, true)(struct!.predicate),
      isBlock: true,
      type: "set",
      storageClassType: "MetricDashboardGroupAlertsListPanelFilterByPredicateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MetricDashboardGroupAlertsListPanelFilterByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MetricDashboardGroupAlertsListPanelFilterBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._predicate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.predicate = this._predicate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricDashboardGroupAlertsListPanelFilterBy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._predicate.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._predicate.internalValue = value.predicate;
    }
  }

  // predicate - computed: false, optional: true, required: false
  private _predicate = new MetricDashboardGroupAlertsListPanelFilterByPredicateList(this, "predicate", true);
  public get predicate() {
    return this._predicate;
  }
  public putPredicate(value: MetricDashboardGroupAlertsListPanelFilterByPredicate[] | cdktf.IResolvable) {
    this._predicate.internalValue = value;
  }
  public resetPredicate() {
    this._predicate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predicateInput() {
    return this._predicate.internalValue;
  }
}
export interface MetricDashboardGroupAlertsListPanelPanelOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#sort_by MetricDashboard#sort_by}
  */
  readonly sortBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#sort_direction MetricDashboard#sort_direction}
  */
  readonly sortDirection?: string;
}

export function metricDashboardGroupAlertsListPanelPanelOptionsToTerraform(struct?: MetricDashboardGroupAlertsListPanelPanelOptionsOutputReference | MetricDashboardGroupAlertsListPanelPanelOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sort_by: cdktf.stringToTerraform(struct!.sortBy),
    sort_direction: cdktf.stringToTerraform(struct!.sortDirection),
  }
}


export function metricDashboardGroupAlertsListPanelPanelOptionsToHclTerraform(struct?: MetricDashboardGroupAlertsListPanelPanelOptionsOutputReference | MetricDashboardGroupAlertsListPanelPanelOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sort_by: {
      value: cdktf.stringToHclTerraform(struct!.sortBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sort_direction: {
      value: cdktf.stringToHclTerraform(struct!.sortDirection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MetricDashboardGroupAlertsListPanelPanelOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MetricDashboardGroupAlertsListPanelPanelOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sortBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortBy = this._sortBy;
    }
    if (this._sortDirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortDirection = this._sortDirection;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricDashboardGroupAlertsListPanelPanelOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sortBy = undefined;
      this._sortDirection = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sortBy = value.sortBy;
      this._sortDirection = value.sortDirection;
    }
  }

  // sort_by - computed: false, optional: true, required: false
  private _sortBy?: string; 
  public get sortBy() {
    return this.getStringAttribute('sort_by');
  }
  public set sortBy(value: string) {
    this._sortBy = value;
  }
  public resetSortBy() {
    this._sortBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortByInput() {
    return this._sortBy;
  }

  // sort_direction - computed: false, optional: true, required: false
  private _sortDirection?: string; 
  public get sortDirection() {
    return this.getStringAttribute('sort_direction');
  }
  public set sortDirection(value: string) {
    this._sortDirection = value;
  }
  public resetSortDirection() {
    this._sortDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortDirectionInput() {
    return this._sortDirection;
  }
}
export interface MetricDashboardGroupAlertsListPanel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#height MetricDashboard#height}
  */
  readonly height?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#name MetricDashboard#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#width MetricDashboard#width}
  */
  readonly width?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#x_pos MetricDashboard#x_pos}
  */
  readonly xPos?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#y_pos MetricDashboard#y_pos}
  */
  readonly yPos?: number;
  /**
  * filter_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#filter_by MetricDashboard#filter_by}
  */
  readonly filterBy?: MetricDashboardGroupAlertsListPanelFilterBy;
  /**
  * panel_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#panel_options MetricDashboard#panel_options}
  */
  readonly panelOptions?: MetricDashboardGroupAlertsListPanelPanelOptions;
}

export function metricDashboardGroupAlertsListPanelToTerraform(struct?: MetricDashboardGroupAlertsListPanel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    height: cdktf.numberToTerraform(struct!.height),
    name: cdktf.stringToTerraform(struct!.name),
    width: cdktf.numberToTerraform(struct!.width),
    x_pos: cdktf.numberToTerraform(struct!.xPos),
    y_pos: cdktf.numberToTerraform(struct!.yPos),
    filter_by: metricDashboardGroupAlertsListPanelFilterByToTerraform(struct!.filterBy),
    panel_options: metricDashboardGroupAlertsListPanelPanelOptionsToTerraform(struct!.panelOptions),
  }
}


export function metricDashboardGroupAlertsListPanelToHclTerraform(struct?: MetricDashboardGroupAlertsListPanel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    height: {
      value: cdktf.numberToHclTerraform(struct!.height),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    width: {
      value: cdktf.numberToHclTerraform(struct!.width),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    x_pos: {
      value: cdktf.numberToHclTerraform(struct!.xPos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    y_pos: {
      value: cdktf.numberToHclTerraform(struct!.yPos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter_by: {
      value: metricDashboardGroupAlertsListPanelFilterByToHclTerraform(struct!.filterBy),
      isBlock: true,
      type: "set",
      storageClassType: "MetricDashboardGroupAlertsListPanelFilterByList",
    },
    panel_options: {
      value: metricDashboardGroupAlertsListPanelPanelOptionsToHclTerraform(struct!.panelOptions),
      isBlock: true,
      type: "set",
      storageClassType: "MetricDashboardGroupAlertsListPanelPanelOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MetricDashboardGroupAlertsListPanelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MetricDashboardGroupAlertsListPanel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    if (this._xPos !== undefined) {
      hasAnyValues = true;
      internalValueResult.xPos = this._xPos;
    }
    if (this._yPos !== undefined) {
      hasAnyValues = true;
      internalValueResult.yPos = this._yPos;
    }
    if (this._filterBy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterBy = this._filterBy?.internalValue;
    }
    if (this._panelOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.panelOptions = this._panelOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricDashboardGroupAlertsListPanel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._height = undefined;
      this._name = undefined;
      this._width = undefined;
      this._xPos = undefined;
      this._yPos = undefined;
      this._filterBy.internalValue = undefined;
      this._panelOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._height = value.height;
      this._name = value.name;
      this._width = value.width;
      this._xPos = value.xPos;
      this._yPos = value.yPos;
      this._filterBy.internalValue = value.filterBy;
      this._panelOptions.internalValue = value.panelOptions;
    }
  }

  // height - computed: false, optional: true, required: false
  private _height?: number; 
  public get height() {
    return this.getNumberAttribute('height');
  }
  public set height(value: number) {
    this._height = value;
  }
  public resetHeight() {
    this._height = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heightInput() {
    return this._height;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // width - computed: false, optional: true, required: false
  private _width?: number; 
  public get width() {
    return this.getNumberAttribute('width');
  }
  public set width(value: number) {
    this._width = value;
  }
  public resetWidth() {
    this._width = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width;
  }

  // x_pos - computed: false, optional: true, required: false
  private _xPos?: number; 
  public get xPos() {
    return this.getNumberAttribute('x_pos');
  }
  public set xPos(value: number) {
    this._xPos = value;
  }
  public resetXPos() {
    this._xPos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xPosInput() {
    return this._xPos;
  }

  // y_pos - computed: false, optional: true, required: false
  private _yPos?: number; 
  public get yPos() {
    return this.getNumberAttribute('y_pos');
  }
  public set yPos(value: number) {
    this._yPos = value;
  }
  public resetYPos() {
    this._yPos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yPosInput() {
    return this._yPos;
  }

  // filter_by - computed: false, optional: true, required: false
  private _filterBy = new MetricDashboardGroupAlertsListPanelFilterByOutputReference(this, "filter_by");
  public get filterBy() {
    return this._filterBy;
  }
  public putFilterBy(value: MetricDashboardGroupAlertsListPanelFilterBy) {
    this._filterBy.internalValue = value;
  }
  public resetFilterBy() {
    this._filterBy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterByInput() {
    return this._filterBy.internalValue;
  }

  // panel_options - computed: false, optional: true, required: false
  private _panelOptions = new MetricDashboardGroupAlertsListPanelPanelOptionsOutputReference(this, "panel_options");
  public get panelOptions() {
    return this._panelOptions;
  }
  public putPanelOptions(value: MetricDashboardGroupAlertsListPanelPanelOptions) {
    this._panelOptions.internalValue = value;
  }
  public resetPanelOptions() {
    this._panelOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panelOptionsInput() {
    return this._panelOptions.internalValue;
  }
}

export class MetricDashboardGroupAlertsListPanelList extends cdktf.ComplexList {
  public internalValue? : MetricDashboardGroupAlertsListPanel[] | cdktf.IResolvable

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
  public get(index: number): MetricDashboardGroupAlertsListPanelOutputReference {
    return new MetricDashboardGroupAlertsListPanelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MetricDashboardGroupChartQueryFinalWindowOperation {
  /**
  * Unit specified in milliseconds, but must be at least 30,000 and a round number of seconds (i.e. evenly divisible by 1,000).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#input_window_ms MetricDashboard#input_window_ms}
  */
  readonly inputWindowMs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#operator MetricDashboard#operator}
  */
  readonly operator?: string;
}

export function metricDashboardGroupChartQueryFinalWindowOperationToTerraform(struct?: MetricDashboardGroupChartQueryFinalWindowOperationOutputReference | MetricDashboardGroupChartQueryFinalWindowOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    input_window_ms: cdktf.numberToTerraform(struct!.inputWindowMs),
    operator: cdktf.stringToTerraform(struct!.operator),
  }
}


export function metricDashboardGroupChartQueryFinalWindowOperationToHclTerraform(struct?: MetricDashboardGroupChartQueryFinalWindowOperationOutputReference | MetricDashboardGroupChartQueryFinalWindowOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    input_window_ms: {
      value: cdktf.numberToHclTerraform(struct!.inputWindowMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MetricDashboardGroupChartQueryFinalWindowOperationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MetricDashboardGroupChartQueryFinalWindowOperation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inputWindowMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputWindowMs = this._inputWindowMs;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricDashboardGroupChartQueryFinalWindowOperation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inputWindowMs = undefined;
      this._operator = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inputWindowMs = value.inputWindowMs;
      this._operator = value.operator;
    }
  }

  // input_window_ms - computed: false, optional: true, required: false
  private _inputWindowMs?: number; 
  public get inputWindowMs() {
    return this.getNumberAttribute('input_window_ms');
  }
  public set inputWindowMs(value: number) {
    this._inputWindowMs = value;
  }
  public resetInputWindowMs() {
    this._inputWindowMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputWindowMsInput() {
    return this._inputWindowMs;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }
}
export interface MetricDashboardGroupChartQueryGroupBy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#aggregation_method MetricDashboard#aggregation_method}
  */
  readonly aggregationMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#keys MetricDashboard#keys}
  */
  readonly keys?: string[];
}

export function metricDashboardGroupChartQueryGroupByToTerraform(struct?: MetricDashboardGroupChartQueryGroupByOutputReference | MetricDashboardGroupChartQueryGroupBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation_method: cdktf.stringToTerraform(struct!.aggregationMethod),
    keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keys),
  }
}


export function metricDashboardGroupChartQueryGroupByToHclTerraform(struct?: MetricDashboardGroupChartQueryGroupByOutputReference | MetricDashboardGroupChartQueryGroupBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregation_method: {
      value: cdktf.stringToHclTerraform(struct!.aggregationMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MetricDashboardGroupChartQueryGroupByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MetricDashboardGroupChartQueryGroupBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregationMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregationMethod = this._aggregationMethod;
    }
    if (this._keys !== undefined) {
      hasAnyValues = true;
      internalValueResult.keys = this._keys;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricDashboardGroupChartQueryGroupBy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregationMethod = undefined;
      this._keys = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregationMethod = value.aggregationMethod;
      this._keys = value.keys;
    }
  }

  // aggregation_method - computed: false, optional: true, required: false
  private _aggregationMethod?: string; 
  public get aggregationMethod() {
    return this.getStringAttribute('aggregation_method');
  }
  public set aggregationMethod(value: string) {
    this._aggregationMethod = value;
  }
  public resetAggregationMethod() {
    this._aggregationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationMethodInput() {
    return this._aggregationMethod;
  }

  // keys - computed: false, optional: true, required: false
  private _keys?: string[]; 
  public get keys() {
    return this.getListAttribute('keys');
  }
  public set keys(value: string[]) {
    this._keys = value;
  }
  public resetKeys() {
    this._keys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keysInput() {
    return this._keys;
  }
}
export interface MetricDashboardGroupChartQuerySpans {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#group_by_keys MetricDashboard#group_by_keys}
  */
  readonly groupByKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#latency_percentiles MetricDashboard#latency_percentiles}
  */
  readonly latencyPercentiles?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#operator MetricDashboard#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#operator_input_window_ms MetricDashboard#operator_input_window_ms}
  */
  readonly operatorInputWindowMs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#query MetricDashboard#query}
  */
  readonly query: string;
}

export function metricDashboardGroupChartQuerySpansToTerraform(struct?: MetricDashboardGroupChartQuerySpansOutputReference | MetricDashboardGroupChartQuerySpans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_by_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupByKeys),
    latency_percentiles: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.latencyPercentiles),
    operator: cdktf.stringToTerraform(struct!.operator),
    operator_input_window_ms: cdktf.numberToTerraform(struct!.operatorInputWindowMs),
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function metricDashboardGroupChartQuerySpansToHclTerraform(struct?: MetricDashboardGroupChartQuerySpansOutputReference | MetricDashboardGroupChartQuerySpans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_by_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groupByKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    latency_percentiles: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.latencyPercentiles),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator_input_window_ms: {
      value: cdktf.numberToHclTerraform(struct!.operatorInputWindowMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
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

export class MetricDashboardGroupChartQuerySpansOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MetricDashboardGroupChartQuerySpans | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupByKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupByKeys = this._groupByKeys;
    }
    if (this._latencyPercentiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.latencyPercentiles = this._latencyPercentiles;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._operatorInputWindowMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.operatorInputWindowMs = this._operatorInputWindowMs;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricDashboardGroupChartQuerySpans | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._groupByKeys = undefined;
      this._latencyPercentiles = undefined;
      this._operator = undefined;
      this._operatorInputWindowMs = undefined;
      this._query = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._groupByKeys = value.groupByKeys;
      this._latencyPercentiles = value.latencyPercentiles;
      this._operator = value.operator;
      this._operatorInputWindowMs = value.operatorInputWindowMs;
      this._query = value.query;
    }
  }

  // group_by_keys - computed: false, optional: true, required: false
  private _groupByKeys?: string[]; 
  public get groupByKeys() {
    return this.getListAttribute('group_by_keys');
  }
  public set groupByKeys(value: string[]) {
    this._groupByKeys = value;
  }
  public resetGroupByKeys() {
    this._groupByKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByKeysInput() {
    return this._groupByKeys;
  }

  // latency_percentiles - computed: true, optional: true, required: false
  private _latencyPercentiles?: number[]; 
  public get latencyPercentiles() {
    return this.getNumberListAttribute('latency_percentiles');
  }
  public set latencyPercentiles(value: number[]) {
    this._latencyPercentiles = value;
  }
  public resetLatencyPercentiles() {
    this._latencyPercentiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latencyPercentilesInput() {
    return this._latencyPercentiles;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // operator_input_window_ms - computed: false, optional: true, required: false
  private _operatorInputWindowMs?: number; 
  public get operatorInputWindowMs() {
    return this.getNumberAttribute('operator_input_window_ms');
  }
  public set operatorInputWindowMs(value: number) {
    this._operatorInputWindowMs = value;
  }
  public resetOperatorInputWindowMs() {
    this._operatorInputWindowMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInputWindowMsInput() {
    return this._operatorInputWindowMs;
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
export interface MetricDashboardGroupChartQuery {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#display MetricDashboard#display}
  */
  readonly display?: string;
  /**
  * Not-equals filters (operand: neq)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#exclude_filters MetricDashboard#exclude_filters}
  */
  readonly excludeFilters?: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * Non-equality filters (operand: contains, regexp)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#filters MetricDashboard#filters}
  */
  readonly filters?: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#hidden MetricDashboard#hidden}
  */
  readonly hidden: boolean | cdktf.IResolvable;
  /**
  * Equality filters (operand: eq)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#include_filters MetricDashboard#include_filters}
  */
  readonly includeFilters?: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#metric MetricDashboard#metric}
  */
  readonly metric?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#query_name MetricDashboard#query_name}
  */
  readonly queryName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#timeseries_operator MetricDashboard#timeseries_operator}
  */
  readonly timeseriesOperator?: string;
  /**
  * Unit specified in milliseconds, but must be at least 30,000 and a round number of seconds (i.e. evenly divisible by 1,000).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#timeseries_operator_input_window_ms MetricDashboard#timeseries_operator_input_window_ms}
  */
  readonly timeseriesOperatorInputWindowMs?: number;
  /**
  * Deprecated, use the query_string field in lightstep_dashboard or lightstep_alert instead
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#tql MetricDashboard#tql}
  */
  readonly tql?: string;
  /**
  * final_window_operation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#final_window_operation MetricDashboard#final_window_operation}
  */
  readonly finalWindowOperation?: MetricDashboardGroupChartQueryFinalWindowOperation;
  /**
  * group_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#group_by MetricDashboard#group_by}
  */
  readonly groupBy?: MetricDashboardGroupChartQueryGroupBy;
  /**
  * spans block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#spans MetricDashboard#spans}
  */
  readonly spans?: MetricDashboardGroupChartQuerySpans;
}

export function metricDashboardGroupChartQueryToTerraform(struct?: MetricDashboardGroupChartQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display: cdktf.stringToTerraform(struct!.display),
    exclude_filters: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(struct!.excludeFilters),
    filters: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(struct!.filters),
    hidden: cdktf.booleanToTerraform(struct!.hidden),
    include_filters: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(struct!.includeFilters),
    metric: cdktf.stringToTerraform(struct!.metric),
    query_name: cdktf.stringToTerraform(struct!.queryName),
    timeseries_operator: cdktf.stringToTerraform(struct!.timeseriesOperator),
    timeseries_operator_input_window_ms: cdktf.numberToTerraform(struct!.timeseriesOperatorInputWindowMs),
    tql: cdktf.stringToTerraform(struct!.tql),
    final_window_operation: metricDashboardGroupChartQueryFinalWindowOperationToTerraform(struct!.finalWindowOperation),
    group_by: metricDashboardGroupChartQueryGroupByToTerraform(struct!.groupBy),
    spans: metricDashboardGroupChartQuerySpansToTerraform(struct!.spans),
  }
}


export function metricDashboardGroupChartQueryToHclTerraform(struct?: MetricDashboardGroupChartQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display: {
      value: cdktf.stringToHclTerraform(struct!.display),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_filters: {
      value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(struct!.excludeFilters),
      isBlock: false,
      type: "list",
      storageClassType: "stringMapList",
    },
    filters: {
      value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(struct!.filters),
      isBlock: false,
      type: "list",
      storageClassType: "stringMapList",
    },
    hidden: {
      value: cdktf.booleanToHclTerraform(struct!.hidden),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_filters: {
      value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(struct!.includeFilters),
      isBlock: false,
      type: "list",
      storageClassType: "stringMapList",
    },
    metric: {
      value: cdktf.stringToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_name: {
      value: cdktf.stringToHclTerraform(struct!.queryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeseries_operator: {
      value: cdktf.stringToHclTerraform(struct!.timeseriesOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeseries_operator_input_window_ms: {
      value: cdktf.numberToHclTerraform(struct!.timeseriesOperatorInputWindowMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tql: {
      value: cdktf.stringToHclTerraform(struct!.tql),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    final_window_operation: {
      value: metricDashboardGroupChartQueryFinalWindowOperationToHclTerraform(struct!.finalWindowOperation),
      isBlock: true,
      type: "list",
      storageClassType: "MetricDashboardGroupChartQueryFinalWindowOperationList",
    },
    group_by: {
      value: metricDashboardGroupChartQueryGroupByToHclTerraform(struct!.groupBy),
      isBlock: true,
      type: "list",
      storageClassType: "MetricDashboardGroupChartQueryGroupByList",
    },
    spans: {
      value: metricDashboardGroupChartQuerySpansToHclTerraform(struct!.spans),
      isBlock: true,
      type: "list",
      storageClassType: "MetricDashboardGroupChartQuerySpansList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MetricDashboardGroupChartQueryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MetricDashboardGroupChartQuery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._display !== undefined) {
      hasAnyValues = true;
      internalValueResult.display = this._display;
    }
    if (this._excludeFilters !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeFilters = this._excludeFilters;
    }
    if (this._filters !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters;
    }
    if (this._hidden !== undefined) {
      hasAnyValues = true;
      internalValueResult.hidden = this._hidden;
    }
    if (this._includeFilters !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeFilters = this._includeFilters;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._queryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryName = this._queryName;
    }
    if (this._timeseriesOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeseriesOperator = this._timeseriesOperator;
    }
    if (this._timeseriesOperatorInputWindowMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeseriesOperatorInputWindowMs = this._timeseriesOperatorInputWindowMs;
    }
    if (this._tql !== undefined) {
      hasAnyValues = true;
      internalValueResult.tql = this._tql;
    }
    if (this._finalWindowOperation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.finalWindowOperation = this._finalWindowOperation?.internalValue;
    }
    if (this._groupBy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy?.internalValue;
    }
    if (this._spans?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spans = this._spans?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricDashboardGroupChartQuery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._display = undefined;
      this._excludeFilters = undefined;
      this._filters = undefined;
      this._hidden = undefined;
      this._includeFilters = undefined;
      this._metric = undefined;
      this._queryName = undefined;
      this._timeseriesOperator = undefined;
      this._timeseriesOperatorInputWindowMs = undefined;
      this._tql = undefined;
      this._finalWindowOperation.internalValue = undefined;
      this._groupBy.internalValue = undefined;
      this._spans.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._display = value.display;
      this._excludeFilters = value.excludeFilters;
      this._filters = value.filters;
      this._hidden = value.hidden;
      this._includeFilters = value.includeFilters;
      this._metric = value.metric;
      this._queryName = value.queryName;
      this._timeseriesOperator = value.timeseriesOperator;
      this._timeseriesOperatorInputWindowMs = value.timeseriesOperatorInputWindowMs;
      this._tql = value.tql;
      this._finalWindowOperation.internalValue = value.finalWindowOperation;
      this._groupBy.internalValue = value.groupBy;
      this._spans.internalValue = value.spans;
    }
  }

  // display - computed: false, optional: true, required: false
  private _display?: string; 
  public get display() {
    return this.getStringAttribute('display');
  }
  public set display(value: string) {
    this._display = value;
  }
  public resetDisplay() {
    this._display = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayInput() {
    return this._display;
  }

  // exclude_filters - computed: true, optional: true, required: false
  private _excludeFilters?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get excludeFilters() {
    return this.interpolationForAttribute('exclude_filters');
  }
  public set excludeFilters(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._excludeFilters = value;
  }
  public resetExcludeFilters() {
    this._excludeFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeFiltersInput() {
    return this._excludeFilters;
  }

  // filters - computed: true, optional: true, required: false
  private _filters?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get filters() {
    return this.interpolationForAttribute('filters');
  }
  public set filters(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._filters = value;
  }
  public resetFilters() {
    this._filters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters;
  }

  // hidden - computed: false, optional: false, required: true
  private _hidden?: boolean | cdktf.IResolvable; 
  public get hidden() {
    return this.getBooleanAttribute('hidden');
  }
  public set hidden(value: boolean | cdktf.IResolvable) {
    this._hidden = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hiddenInput() {
    return this._hidden;
  }

  // include_filters - computed: true, optional: true, required: false
  private _includeFilters?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get includeFilters() {
    return this.interpolationForAttribute('include_filters');
  }
  public set includeFilters(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._includeFilters = value;
  }
  public resetIncludeFilters() {
    this._includeFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeFiltersInput() {
    return this._includeFilters;
  }

  // metric - computed: true, optional: true, required: false
  private _metric?: string; 
  public get metric() {
    return this.getStringAttribute('metric');
  }
  public set metric(value: string) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // query_name - computed: false, optional: false, required: true
  private _queryName?: string; 
  public get queryName() {
    return this.getStringAttribute('query_name');
  }
  public set queryName(value: string) {
    this._queryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryNameInput() {
    return this._queryName;
  }

  // timeseries_operator - computed: true, optional: true, required: false
  private _timeseriesOperator?: string; 
  public get timeseriesOperator() {
    return this.getStringAttribute('timeseries_operator');
  }
  public set timeseriesOperator(value: string) {
    this._timeseriesOperator = value;
  }
  public resetTimeseriesOperator() {
    this._timeseriesOperator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeseriesOperatorInput() {
    return this._timeseriesOperator;
  }

  // timeseries_operator_input_window_ms - computed: false, optional: true, required: false
  private _timeseriesOperatorInputWindowMs?: number; 
  public get timeseriesOperatorInputWindowMs() {
    return this.getNumberAttribute('timeseries_operator_input_window_ms');
  }
  public set timeseriesOperatorInputWindowMs(value: number) {
    this._timeseriesOperatorInputWindowMs = value;
  }
  public resetTimeseriesOperatorInputWindowMs() {
    this._timeseriesOperatorInputWindowMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeseriesOperatorInputWindowMsInput() {
    return this._timeseriesOperatorInputWindowMs;
  }

  // tql - computed: false, optional: true, required: false
  private _tql?: string; 
  public get tql() {
    return this.getStringAttribute('tql');
  }
  public set tql(value: string) {
    this._tql = value;
  }
  public resetTql() {
    this._tql = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tqlInput() {
    return this._tql;
  }

  // final_window_operation - computed: false, optional: true, required: false
  private _finalWindowOperation = new MetricDashboardGroupChartQueryFinalWindowOperationOutputReference(this, "final_window_operation");
  public get finalWindowOperation() {
    return this._finalWindowOperation;
  }
  public putFinalWindowOperation(value: MetricDashboardGroupChartQueryFinalWindowOperation) {
    this._finalWindowOperation.internalValue = value;
  }
  public resetFinalWindowOperation() {
    this._finalWindowOperation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finalWindowOperationInput() {
    return this._finalWindowOperation.internalValue;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy = new MetricDashboardGroupChartQueryGroupByOutputReference(this, "group_by");
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: MetricDashboardGroupChartQueryGroupBy) {
    this._groupBy.internalValue = value;
  }
  public resetGroupBy() {
    this._groupBy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy.internalValue;
  }

  // spans - computed: false, optional: true, required: false
  private _spans = new MetricDashboardGroupChartQuerySpansOutputReference(this, "spans");
  public get spans() {
    return this._spans;
  }
  public putSpans(value: MetricDashboardGroupChartQuerySpans) {
    this._spans.internalValue = value;
  }
  public resetSpans() {
    this._spans.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spansInput() {
    return this._spans.internalValue;
  }
}

export class MetricDashboardGroupChartQueryList extends cdktf.ComplexList {
  public internalValue? : MetricDashboardGroupChartQuery[] | cdktf.IResolvable

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
  public get(index: number): MetricDashboardGroupChartQueryOutputReference {
    return new MetricDashboardGroupChartQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MetricDashboardGroupChartThreshold {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#color MetricDashboard#color}
  */
  readonly color: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#label MetricDashboard#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#operator MetricDashboard#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#value MetricDashboard#value}
  */
  readonly value: number;
}

export function metricDashboardGroupChartThresholdToTerraform(struct?: MetricDashboardGroupChartThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    label: cdktf.stringToTerraform(struct!.label),
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function metricDashboardGroupChartThresholdToHclTerraform(struct?: MetricDashboardGroupChartThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    color: {
      value: cdktf.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MetricDashboardGroupChartThresholdOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MetricDashboardGroupChartThreshold | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricDashboardGroupChartThreshold | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._label = undefined;
      this._operator = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._color = value.color;
      this._label = value.label;
      this._operator = value.operator;
      this._value = value.value;
    }
  }

  // color - computed: false, optional: false, required: true
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class MetricDashboardGroupChartThresholdList extends cdktf.ComplexList {
  public internalValue? : MetricDashboardGroupChartThreshold[] | cdktf.IResolvable

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
  public get(index: number): MetricDashboardGroupChartThresholdOutputReference {
    return new MetricDashboardGroupChartThresholdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MetricDashboardGroupChartWorkflowLink {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#name MetricDashboard#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#url MetricDashboard#url}
  */
  readonly url: string;
}

export function metricDashboardGroupChartWorkflowLinkToTerraform(struct?: MetricDashboardGroupChartWorkflowLink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function metricDashboardGroupChartWorkflowLinkToHclTerraform(struct?: MetricDashboardGroupChartWorkflowLink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MetricDashboardGroupChartWorkflowLinkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MetricDashboardGroupChartWorkflowLink | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricDashboardGroupChartWorkflowLink | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._url = value.url;
    }
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

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class MetricDashboardGroupChartWorkflowLinkList extends cdktf.ComplexList {
  public internalValue? : MetricDashboardGroupChartWorkflowLink[] | cdktf.IResolvable

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
  public get(index: number): MetricDashboardGroupChartWorkflowLinkOutputReference {
    return new MetricDashboardGroupChartWorkflowLinkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MetricDashboardGroupChartYAxis {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#max MetricDashboard#max}
  */
  readonly max: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#min MetricDashboard#min}
  */
  readonly min: number;
}

export function metricDashboardGroupChartYAxisToTerraform(struct?: MetricDashboardGroupChartYAxisOutputReference | MetricDashboardGroupChartYAxis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}


export function metricDashboardGroupChartYAxisToHclTerraform(struct?: MetricDashboardGroupChartYAxisOutputReference | MetricDashboardGroupChartYAxis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max: {
      value: cdktf.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktf.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MetricDashboardGroupChartYAxisOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MetricDashboardGroupChartYAxis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricDashboardGroupChartYAxis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._max = undefined;
      this._min = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: false, required: true
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: false, required: true
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}
export interface MetricDashboardGroupChart {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#description MetricDashboard#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#height MetricDashboard#height}
  */
  readonly height?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#name MetricDashboard#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#rank MetricDashboard#rank}
  */
  readonly rank: number;
  /**
  * Subtitle to show beneath big number, unused in other chart types
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#subtitle MetricDashboard#subtitle}
  */
  readonly subtitle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#type MetricDashboard#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#width MetricDashboard#width}
  */
  readonly width?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#x_pos MetricDashboard#x_pos}
  */
  readonly xPos?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#y_pos MetricDashboard#y_pos}
  */
  readonly yPos?: number;
  /**
  * query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#query MetricDashboard#query}
  */
  readonly query: MetricDashboardGroupChartQuery[] | cdktf.IResolvable;
  /**
  * threshold block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#threshold MetricDashboard#threshold}
  */
  readonly threshold?: MetricDashboardGroupChartThreshold[] | cdktf.IResolvable;
  /**
  * workflow_link block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#workflow_link MetricDashboard#workflow_link}
  */
  readonly workflowLink?: MetricDashboardGroupChartWorkflowLink[] | cdktf.IResolvable;
  /**
  * y_axis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#y_axis MetricDashboard#y_axis}
  */
  readonly yAxis?: MetricDashboardGroupChartYAxis;
}

export function metricDashboardGroupChartToTerraform(struct?: MetricDashboardGroupChart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    height: cdktf.numberToTerraform(struct!.height),
    name: cdktf.stringToTerraform(struct!.name),
    rank: cdktf.numberToTerraform(struct!.rank),
    subtitle: cdktf.stringToTerraform(struct!.subtitle),
    type: cdktf.stringToTerraform(struct!.type),
    width: cdktf.numberToTerraform(struct!.width),
    x_pos: cdktf.numberToTerraform(struct!.xPos),
    y_pos: cdktf.numberToTerraform(struct!.yPos),
    query: cdktf.listMapper(metricDashboardGroupChartQueryToTerraform, true)(struct!.query),
    threshold: cdktf.listMapper(metricDashboardGroupChartThresholdToTerraform, true)(struct!.threshold),
    workflow_link: cdktf.listMapper(metricDashboardGroupChartWorkflowLinkToTerraform, true)(struct!.workflowLink),
    y_axis: metricDashboardGroupChartYAxisToTerraform(struct!.yAxis),
  }
}


export function metricDashboardGroupChartToHclTerraform(struct?: MetricDashboardGroupChart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    height: {
      value: cdktf.numberToHclTerraform(struct!.height),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rank: {
      value: cdktf.numberToHclTerraform(struct!.rank),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    subtitle: {
      value: cdktf.stringToHclTerraform(struct!.subtitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    width: {
      value: cdktf.numberToHclTerraform(struct!.width),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    x_pos: {
      value: cdktf.numberToHclTerraform(struct!.xPos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    y_pos: {
      value: cdktf.numberToHclTerraform(struct!.yPos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    query: {
      value: cdktf.listMapperHcl(metricDashboardGroupChartQueryToHclTerraform, true)(struct!.query),
      isBlock: true,
      type: "list",
      storageClassType: "MetricDashboardGroupChartQueryList",
    },
    threshold: {
      value: cdktf.listMapperHcl(metricDashboardGroupChartThresholdToHclTerraform, true)(struct!.threshold),
      isBlock: true,
      type: "list",
      storageClassType: "MetricDashboardGroupChartThresholdList",
    },
    workflow_link: {
      value: cdktf.listMapperHcl(metricDashboardGroupChartWorkflowLinkToHclTerraform, true)(struct!.workflowLink),
      isBlock: true,
      type: "list",
      storageClassType: "MetricDashboardGroupChartWorkflowLinkList",
    },
    y_axis: {
      value: metricDashboardGroupChartYAxisToHclTerraform(struct!.yAxis),
      isBlock: true,
      type: "list",
      storageClassType: "MetricDashboardGroupChartYAxisList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MetricDashboardGroupChartOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MetricDashboardGroupChart | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._rank !== undefined) {
      hasAnyValues = true;
      internalValueResult.rank = this._rank;
    }
    if (this._subtitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.subtitle = this._subtitle;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    if (this._xPos !== undefined) {
      hasAnyValues = true;
      internalValueResult.xPos = this._xPos;
    }
    if (this._yPos !== undefined) {
      hasAnyValues = true;
      internalValueResult.yPos = this._yPos;
    }
    if (this._query?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query?.internalValue;
    }
    if (this._threshold?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold?.internalValue;
    }
    if (this._workflowLink?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workflowLink = this._workflowLink?.internalValue;
    }
    if (this._yAxis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.yAxis = this._yAxis?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricDashboardGroupChart | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._height = undefined;
      this._name = undefined;
      this._rank = undefined;
      this._subtitle = undefined;
      this._type = undefined;
      this._width = undefined;
      this._xPos = undefined;
      this._yPos = undefined;
      this._query.internalValue = undefined;
      this._threshold.internalValue = undefined;
      this._workflowLink.internalValue = undefined;
      this._yAxis.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._height = value.height;
      this._name = value.name;
      this._rank = value.rank;
      this._subtitle = value.subtitle;
      this._type = value.type;
      this._width = value.width;
      this._xPos = value.xPos;
      this._yPos = value.yPos;
      this._query.internalValue = value.query;
      this._threshold.internalValue = value.threshold;
      this._workflowLink.internalValue = value.workflowLink;
      this._yAxis.internalValue = value.yAxis;
    }
  }

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

  // height - computed: false, optional: true, required: false
  private _height?: number; 
  public get height() {
    return this.getNumberAttribute('height');
  }
  public set height(value: number) {
    this._height = value;
  }
  public resetHeight() {
    this._height = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heightInput() {
    return this._height;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // rank - computed: false, optional: false, required: true
  private _rank?: number; 
  public get rank() {
    return this.getNumberAttribute('rank');
  }
  public set rank(value: number) {
    this._rank = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rankInput() {
    return this._rank;
  }

  // subtitle - computed: false, optional: true, required: false
  private _subtitle?: string; 
  public get subtitle() {
    return this.getStringAttribute('subtitle');
  }
  public set subtitle(value: string) {
    this._subtitle = value;
  }
  public resetSubtitle() {
    this._subtitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subtitleInput() {
    return this._subtitle;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // width - computed: false, optional: true, required: false
  private _width?: number; 
  public get width() {
    return this.getNumberAttribute('width');
  }
  public set width(value: number) {
    this._width = value;
  }
  public resetWidth() {
    this._width = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width;
  }

  // x_pos - computed: false, optional: true, required: false
  private _xPos?: number; 
  public get xPos() {
    return this.getNumberAttribute('x_pos');
  }
  public set xPos(value: number) {
    this._xPos = value;
  }
  public resetXPos() {
    this._xPos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xPosInput() {
    return this._xPos;
  }

  // y_pos - computed: false, optional: true, required: false
  private _yPos?: number; 
  public get yPos() {
    return this.getNumberAttribute('y_pos');
  }
  public set yPos(value: number) {
    this._yPos = value;
  }
  public resetYPos() {
    this._yPos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yPosInput() {
    return this._yPos;
  }

  // query - computed: false, optional: false, required: true
  private _query = new MetricDashboardGroupChartQueryList(this, "query", false);
  public get query() {
    return this._query;
  }
  public putQuery(value: MetricDashboardGroupChartQuery[] | cdktf.IResolvable) {
    this._query.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query.internalValue;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold = new MetricDashboardGroupChartThresholdList(this, "threshold", false);
  public get threshold() {
    return this._threshold;
  }
  public putThreshold(value: MetricDashboardGroupChartThreshold[] | cdktf.IResolvable) {
    this._threshold.internalValue = value;
  }
  public resetThreshold() {
    this._threshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold.internalValue;
  }

  // workflow_link - computed: false, optional: true, required: false
  private _workflowLink = new MetricDashboardGroupChartWorkflowLinkList(this, "workflow_link", false);
  public get workflowLink() {
    return this._workflowLink;
  }
  public putWorkflowLink(value: MetricDashboardGroupChartWorkflowLink[] | cdktf.IResolvable) {
    this._workflowLink.internalValue = value;
  }
  public resetWorkflowLink() {
    this._workflowLink.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowLinkInput() {
    return this._workflowLink.internalValue;
  }

  // y_axis - computed: false, optional: true, required: false
  private _yAxis = new MetricDashboardGroupChartYAxisOutputReference(this, "y_axis");
  public get yAxis() {
    return this._yAxis;
  }
  public putYAxis(value: MetricDashboardGroupChartYAxis) {
    this._yAxis.internalValue = value;
  }
  public resetYAxis() {
    this._yAxis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yAxisInput() {
    return this._yAxis.internalValue;
  }
}

export class MetricDashboardGroupChartList extends cdktf.ComplexList {
  public internalValue? : MetricDashboardGroupChart[] | cdktf.IResolvable

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
  public get(index: number): MetricDashboardGroupChartOutputReference {
    return new MetricDashboardGroupChartOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MetricDashboardGroupServiceHealthPanelPanelOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#change_since MetricDashboard#change_since}
  */
  readonly changeSince?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#percentile MetricDashboard#percentile}
  */
  readonly percentile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#sort_by MetricDashboard#sort_by}
  */
  readonly sortBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#sort_direction MetricDashboard#sort_direction}
  */
  readonly sortDirection?: string;
}

export function metricDashboardGroupServiceHealthPanelPanelOptionsToTerraform(struct?: MetricDashboardGroupServiceHealthPanelPanelOptionsOutputReference | MetricDashboardGroupServiceHealthPanelPanelOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    change_since: cdktf.stringToTerraform(struct!.changeSince),
    percentile: cdktf.stringToTerraform(struct!.percentile),
    sort_by: cdktf.stringToTerraform(struct!.sortBy),
    sort_direction: cdktf.stringToTerraform(struct!.sortDirection),
  }
}


export function metricDashboardGroupServiceHealthPanelPanelOptionsToHclTerraform(struct?: MetricDashboardGroupServiceHealthPanelPanelOptionsOutputReference | MetricDashboardGroupServiceHealthPanelPanelOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    change_since: {
      value: cdktf.stringToHclTerraform(struct!.changeSince),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    percentile: {
      value: cdktf.stringToHclTerraform(struct!.percentile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sort_by: {
      value: cdktf.stringToHclTerraform(struct!.sortBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sort_direction: {
      value: cdktf.stringToHclTerraform(struct!.sortDirection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MetricDashboardGroupServiceHealthPanelPanelOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MetricDashboardGroupServiceHealthPanelPanelOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._changeSince !== undefined) {
      hasAnyValues = true;
      internalValueResult.changeSince = this._changeSince;
    }
    if (this._percentile !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentile = this._percentile;
    }
    if (this._sortBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortBy = this._sortBy;
    }
    if (this._sortDirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortDirection = this._sortDirection;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricDashboardGroupServiceHealthPanelPanelOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._changeSince = undefined;
      this._percentile = undefined;
      this._sortBy = undefined;
      this._sortDirection = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._changeSince = value.changeSince;
      this._percentile = value.percentile;
      this._sortBy = value.sortBy;
      this._sortDirection = value.sortDirection;
    }
  }

  // change_since - computed: false, optional: true, required: false
  private _changeSince?: string; 
  public get changeSince() {
    return this.getStringAttribute('change_since');
  }
  public set changeSince(value: string) {
    this._changeSince = value;
  }
  public resetChangeSince() {
    this._changeSince = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changeSinceInput() {
    return this._changeSince;
  }

  // percentile - computed: false, optional: true, required: false
  private _percentile?: string; 
  public get percentile() {
    return this.getStringAttribute('percentile');
  }
  public set percentile(value: string) {
    this._percentile = value;
  }
  public resetPercentile() {
    this._percentile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentileInput() {
    return this._percentile;
  }

  // sort_by - computed: false, optional: true, required: false
  private _sortBy?: string; 
  public get sortBy() {
    return this.getStringAttribute('sort_by');
  }
  public set sortBy(value: string) {
    this._sortBy = value;
  }
  public resetSortBy() {
    this._sortBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortByInput() {
    return this._sortBy;
  }

  // sort_direction - computed: false, optional: true, required: false
  private _sortDirection?: string; 
  public get sortDirection() {
    return this.getStringAttribute('sort_direction');
  }
  public set sortDirection(value: string) {
    this._sortDirection = value;
  }
  public resetSortDirection() {
    this._sortDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortDirectionInput() {
    return this._sortDirection;
  }
}
export interface MetricDashboardGroupServiceHealthPanel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#height MetricDashboard#height}
  */
  readonly height?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#name MetricDashboard#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#width MetricDashboard#width}
  */
  readonly width?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#x_pos MetricDashboard#x_pos}
  */
  readonly xPos?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#y_pos MetricDashboard#y_pos}
  */
  readonly yPos?: number;
  /**
  * panel_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#panel_options MetricDashboard#panel_options}
  */
  readonly panelOptions?: MetricDashboardGroupServiceHealthPanelPanelOptions;
}

export function metricDashboardGroupServiceHealthPanelToTerraform(struct?: MetricDashboardGroupServiceHealthPanel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    height: cdktf.numberToTerraform(struct!.height),
    name: cdktf.stringToTerraform(struct!.name),
    width: cdktf.numberToTerraform(struct!.width),
    x_pos: cdktf.numberToTerraform(struct!.xPos),
    y_pos: cdktf.numberToTerraform(struct!.yPos),
    panel_options: metricDashboardGroupServiceHealthPanelPanelOptionsToTerraform(struct!.panelOptions),
  }
}


export function metricDashboardGroupServiceHealthPanelToHclTerraform(struct?: MetricDashboardGroupServiceHealthPanel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    height: {
      value: cdktf.numberToHclTerraform(struct!.height),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    width: {
      value: cdktf.numberToHclTerraform(struct!.width),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    x_pos: {
      value: cdktf.numberToHclTerraform(struct!.xPos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    y_pos: {
      value: cdktf.numberToHclTerraform(struct!.yPos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    panel_options: {
      value: metricDashboardGroupServiceHealthPanelPanelOptionsToHclTerraform(struct!.panelOptions),
      isBlock: true,
      type: "set",
      storageClassType: "MetricDashboardGroupServiceHealthPanelPanelOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MetricDashboardGroupServiceHealthPanelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MetricDashboardGroupServiceHealthPanel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    if (this._xPos !== undefined) {
      hasAnyValues = true;
      internalValueResult.xPos = this._xPos;
    }
    if (this._yPos !== undefined) {
      hasAnyValues = true;
      internalValueResult.yPos = this._yPos;
    }
    if (this._panelOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.panelOptions = this._panelOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricDashboardGroupServiceHealthPanel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._height = undefined;
      this._name = undefined;
      this._width = undefined;
      this._xPos = undefined;
      this._yPos = undefined;
      this._panelOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._height = value.height;
      this._name = value.name;
      this._width = value.width;
      this._xPos = value.xPos;
      this._yPos = value.yPos;
      this._panelOptions.internalValue = value.panelOptions;
    }
  }

  // height - computed: false, optional: true, required: false
  private _height?: number; 
  public get height() {
    return this.getNumberAttribute('height');
  }
  public set height(value: number) {
    this._height = value;
  }
  public resetHeight() {
    this._height = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heightInput() {
    return this._height;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // width - computed: false, optional: true, required: false
  private _width?: number; 
  public get width() {
    return this.getNumberAttribute('width');
  }
  public set width(value: number) {
    this._width = value;
  }
  public resetWidth() {
    this._width = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width;
  }

  // x_pos - computed: false, optional: true, required: false
  private _xPos?: number; 
  public get xPos() {
    return this.getNumberAttribute('x_pos');
  }
  public set xPos(value: number) {
    this._xPos = value;
  }
  public resetXPos() {
    this._xPos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xPosInput() {
    return this._xPos;
  }

  // y_pos - computed: false, optional: true, required: false
  private _yPos?: number; 
  public get yPos() {
    return this.getNumberAttribute('y_pos');
  }
  public set yPos(value: number) {
    this._yPos = value;
  }
  public resetYPos() {
    this._yPos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yPosInput() {
    return this._yPos;
  }

  // panel_options - computed: false, optional: true, required: false
  private _panelOptions = new MetricDashboardGroupServiceHealthPanelPanelOptionsOutputReference(this, "panel_options");
  public get panelOptions() {
    return this._panelOptions;
  }
  public putPanelOptions(value: MetricDashboardGroupServiceHealthPanelPanelOptions) {
    this._panelOptions.internalValue = value;
  }
  public resetPanelOptions() {
    this._panelOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panelOptionsInput() {
    return this._panelOptions.internalValue;
  }
}

export class MetricDashboardGroupServiceHealthPanelList extends cdktf.ComplexList {
  public internalValue? : MetricDashboardGroupServiceHealthPanel[] | cdktf.IResolvable

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
  public get(index: number): MetricDashboardGroupServiceHealthPanelOutputReference {
    return new MetricDashboardGroupServiceHealthPanelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MetricDashboardGroupTextPanel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#description MetricDashboard#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#height MetricDashboard#height}
  */
  readonly height?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#name MetricDashboard#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#text MetricDashboard#text}
  */
  readonly text: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#width MetricDashboard#width}
  */
  readonly width?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#x_pos MetricDashboard#x_pos}
  */
  readonly xPos?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#y_pos MetricDashboard#y_pos}
  */
  readonly yPos?: number;
}

export function metricDashboardGroupTextPanelToTerraform(struct?: MetricDashboardGroupTextPanel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    height: cdktf.numberToTerraform(struct!.height),
    name: cdktf.stringToTerraform(struct!.name),
    text: cdktf.stringToTerraform(struct!.text),
    width: cdktf.numberToTerraform(struct!.width),
    x_pos: cdktf.numberToTerraform(struct!.xPos),
    y_pos: cdktf.numberToTerraform(struct!.yPos),
  }
}


export function metricDashboardGroupTextPanelToHclTerraform(struct?: MetricDashboardGroupTextPanel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    height: {
      value: cdktf.numberToHclTerraform(struct!.height),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    width: {
      value: cdktf.numberToHclTerraform(struct!.width),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    x_pos: {
      value: cdktf.numberToHclTerraform(struct!.xPos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    y_pos: {
      value: cdktf.numberToHclTerraform(struct!.yPos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MetricDashboardGroupTextPanelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MetricDashboardGroupTextPanel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    if (this._xPos !== undefined) {
      hasAnyValues = true;
      internalValueResult.xPos = this._xPos;
    }
    if (this._yPos !== undefined) {
      hasAnyValues = true;
      internalValueResult.yPos = this._yPos;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricDashboardGroupTextPanel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._height = undefined;
      this._name = undefined;
      this._text = undefined;
      this._width = undefined;
      this._xPos = undefined;
      this._yPos = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._height = value.height;
      this._name = value.name;
      this._text = value.text;
      this._width = value.width;
      this._xPos = value.xPos;
      this._yPos = value.yPos;
    }
  }

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

  // height - computed: false, optional: true, required: false
  private _height?: number; 
  public get height() {
    return this.getNumberAttribute('height');
  }
  public set height(value: number) {
    this._height = value;
  }
  public resetHeight() {
    this._height = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heightInput() {
    return this._height;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // text - computed: false, optional: false, required: true
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }

  // width - computed: false, optional: true, required: false
  private _width?: number; 
  public get width() {
    return this.getNumberAttribute('width');
  }
  public set width(value: number) {
    this._width = value;
  }
  public resetWidth() {
    this._width = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width;
  }

  // x_pos - computed: false, optional: true, required: false
  private _xPos?: number; 
  public get xPos() {
    return this.getNumberAttribute('x_pos');
  }
  public set xPos(value: number) {
    this._xPos = value;
  }
  public resetXPos() {
    this._xPos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xPosInput() {
    return this._xPos;
  }

  // y_pos - computed: false, optional: true, required: false
  private _yPos?: number; 
  public get yPos() {
    return this.getNumberAttribute('y_pos');
  }
  public set yPos(value: number) {
    this._yPos = value;
  }
  public resetYPos() {
    this._yPos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yPosInput() {
    return this._yPos;
  }
}

export class MetricDashboardGroupTextPanelList extends cdktf.ComplexList {
  public internalValue? : MetricDashboardGroupTextPanel[] | cdktf.IResolvable

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
  public get(index: number): MetricDashboardGroupTextPanelOutputReference {
    return new MetricDashboardGroupTextPanelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MetricDashboardGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#rank MetricDashboard#rank}
  */
  readonly rank: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#title MetricDashboard#title}
  */
  readonly title?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#visibility_type MetricDashboard#visibility_type}
  */
  readonly visibilityType: string;
  /**
  * alerts_list_panel block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#alerts_list_panel MetricDashboard#alerts_list_panel}
  */
  readonly alertsListPanel?: MetricDashboardGroupAlertsListPanel[] | cdktf.IResolvable;
  /**
  * chart block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#chart MetricDashboard#chart}
  */
  readonly chart?: MetricDashboardGroupChart[] | cdktf.IResolvable;
  /**
  * service_health_panel block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#service_health_panel MetricDashboard#service_health_panel}
  */
  readonly serviceHealthPanel?: MetricDashboardGroupServiceHealthPanel[] | cdktf.IResolvable;
  /**
  * text_panel block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#text_panel MetricDashboard#text_panel}
  */
  readonly textPanel?: MetricDashboardGroupTextPanel[] | cdktf.IResolvable;
}

export function metricDashboardGroupToTerraform(struct?: MetricDashboardGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rank: cdktf.numberToTerraform(struct!.rank),
    title: cdktf.stringToTerraform(struct!.title),
    visibility_type: cdktf.stringToTerraform(struct!.visibilityType),
    alerts_list_panel: cdktf.listMapper(metricDashboardGroupAlertsListPanelToTerraform, true)(struct!.alertsListPanel),
    chart: cdktf.listMapper(metricDashboardGroupChartToTerraform, true)(struct!.chart),
    service_health_panel: cdktf.listMapper(metricDashboardGroupServiceHealthPanelToTerraform, true)(struct!.serviceHealthPanel),
    text_panel: cdktf.listMapper(metricDashboardGroupTextPanelToTerraform, true)(struct!.textPanel),
  }
}


export function metricDashboardGroupToHclTerraform(struct?: MetricDashboardGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rank: {
      value: cdktf.numberToHclTerraform(struct!.rank),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    visibility_type: {
      value: cdktf.stringToHclTerraform(struct!.visibilityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    alerts_list_panel: {
      value: cdktf.listMapperHcl(metricDashboardGroupAlertsListPanelToHclTerraform, true)(struct!.alertsListPanel),
      isBlock: true,
      type: "set",
      storageClassType: "MetricDashboardGroupAlertsListPanelList",
    },
    chart: {
      value: cdktf.listMapperHcl(metricDashboardGroupChartToHclTerraform, true)(struct!.chart),
      isBlock: true,
      type: "set",
      storageClassType: "MetricDashboardGroupChartList",
    },
    service_health_panel: {
      value: cdktf.listMapperHcl(metricDashboardGroupServiceHealthPanelToHclTerraform, true)(struct!.serviceHealthPanel),
      isBlock: true,
      type: "set",
      storageClassType: "MetricDashboardGroupServiceHealthPanelList",
    },
    text_panel: {
      value: cdktf.listMapperHcl(metricDashboardGroupTextPanelToHclTerraform, true)(struct!.textPanel),
      isBlock: true,
      type: "list",
      storageClassType: "MetricDashboardGroupTextPanelList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MetricDashboardGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MetricDashboardGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rank !== undefined) {
      hasAnyValues = true;
      internalValueResult.rank = this._rank;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._visibilityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibilityType = this._visibilityType;
    }
    if (this._alertsListPanel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertsListPanel = this._alertsListPanel?.internalValue;
    }
    if (this._chart?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.chart = this._chart?.internalValue;
    }
    if (this._serviceHealthPanel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceHealthPanel = this._serviceHealthPanel?.internalValue;
    }
    if (this._textPanel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.textPanel = this._textPanel?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricDashboardGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rank = undefined;
      this._title = undefined;
      this._visibilityType = undefined;
      this._alertsListPanel.internalValue = undefined;
      this._chart.internalValue = undefined;
      this._serviceHealthPanel.internalValue = undefined;
      this._textPanel.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rank = value.rank;
      this._title = value.title;
      this._visibilityType = value.visibilityType;
      this._alertsListPanel.internalValue = value.alertsListPanel;
      this._chart.internalValue = value.chart;
      this._serviceHealthPanel.internalValue = value.serviceHealthPanel;
      this._textPanel.internalValue = value.textPanel;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // rank - computed: false, optional: false, required: true
  private _rank?: number; 
  public get rank() {
    return this.getNumberAttribute('rank');
  }
  public set rank(value: number) {
    this._rank = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rankInput() {
    return this._rank;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // visibility_type - computed: false, optional: false, required: true
  private _visibilityType?: string; 
  public get visibilityType() {
    return this.getStringAttribute('visibility_type');
  }
  public set visibilityType(value: string) {
    this._visibilityType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityTypeInput() {
    return this._visibilityType;
  }

  // alerts_list_panel - computed: false, optional: true, required: false
  private _alertsListPanel = new MetricDashboardGroupAlertsListPanelList(this, "alerts_list_panel", true);
  public get alertsListPanel() {
    return this._alertsListPanel;
  }
  public putAlertsListPanel(value: MetricDashboardGroupAlertsListPanel[] | cdktf.IResolvable) {
    this._alertsListPanel.internalValue = value;
  }
  public resetAlertsListPanel() {
    this._alertsListPanel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertsListPanelInput() {
    return this._alertsListPanel.internalValue;
  }

  // chart - computed: false, optional: true, required: false
  private _chart = new MetricDashboardGroupChartList(this, "chart", true);
  public get chart() {
    return this._chart;
  }
  public putChart(value: MetricDashboardGroupChart[] | cdktf.IResolvable) {
    this._chart.internalValue = value;
  }
  public resetChart() {
    this._chart.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chartInput() {
    return this._chart.internalValue;
  }

  // service_health_panel - computed: false, optional: true, required: false
  private _serviceHealthPanel = new MetricDashboardGroupServiceHealthPanelList(this, "service_health_panel", true);
  public get serviceHealthPanel() {
    return this._serviceHealthPanel;
  }
  public putServiceHealthPanel(value: MetricDashboardGroupServiceHealthPanel[] | cdktf.IResolvable) {
    this._serviceHealthPanel.internalValue = value;
  }
  public resetServiceHealthPanel() {
    this._serviceHealthPanel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceHealthPanelInput() {
    return this._serviceHealthPanel.internalValue;
  }

  // text_panel - computed: false, optional: true, required: false
  private _textPanel = new MetricDashboardGroupTextPanelList(this, "text_panel", false);
  public get textPanel() {
    return this._textPanel;
  }
  public putTextPanel(value: MetricDashboardGroupTextPanel[] | cdktf.IResolvable) {
    this._textPanel.internalValue = value;
  }
  public resetTextPanel() {
    this._textPanel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textPanelInput() {
    return this._textPanel.internalValue;
  }
}

export class MetricDashboardGroupList extends cdktf.ComplexList {
  public internalValue? : MetricDashboardGroup[] | cdktf.IResolvable

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
  public get(index: number): MetricDashboardGroupOutputReference {
    return new MetricDashboardGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MetricDashboardLabel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#key MetricDashboard#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#value MetricDashboard#value}
  */
  readonly value: string;
}

export function metricDashboardLabelToTerraform(struct?: MetricDashboardLabel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function metricDashboardLabelToHclTerraform(struct?: MetricDashboardLabel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MetricDashboardLabelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MetricDashboardLabel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricDashboardLabel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class MetricDashboardLabelList extends cdktf.ComplexList {
  public internalValue? : MetricDashboardLabel[] | cdktf.IResolvable

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
  public get(index: number): MetricDashboardLabelOutputReference {
    return new MetricDashboardLabelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MetricDashboardTemplateVariable {
  /**
  * One or more values to set the template variable to by default (if none are provided, defaults to all possible values)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#default_values MetricDashboard#default_values}
  */
  readonly defaultValues: string[];
  /**
  * Unique (per dashboard) name for template variable, beginning with a letter or underscore and only containing letters, numbers, and underscores
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#name MetricDashboard#name}
  */
  readonly name: string;
  /**
  * Attribute key used as source for suggested template variable values appearing in Lightstep UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#suggestion_attribute_key MetricDashboard#suggestion_attribute_key}
  */
  readonly suggestionAttributeKey: string;
}

export function metricDashboardTemplateVariableToTerraform(struct?: MetricDashboardTemplateVariable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.defaultValues),
    name: cdktf.stringToTerraform(struct!.name),
    suggestion_attribute_key: cdktf.stringToTerraform(struct!.suggestionAttributeKey),
  }
}


export function metricDashboardTemplateVariableToHclTerraform(struct?: MetricDashboardTemplateVariable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.defaultValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suggestion_attribute_key: {
      value: cdktf.stringToHclTerraform(struct!.suggestionAttributeKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MetricDashboardTemplateVariableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MetricDashboardTemplateVariable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValues = this._defaultValues;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._suggestionAttributeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.suggestionAttributeKey = this._suggestionAttributeKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricDashboardTemplateVariable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValues = undefined;
      this._name = undefined;
      this._suggestionAttributeKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValues = value.defaultValues;
      this._name = value.name;
      this._suggestionAttributeKey = value.suggestionAttributeKey;
    }
  }

  // default_values - computed: false, optional: false, required: true
  private _defaultValues?: string[]; 
  public get defaultValues() {
    return this.getListAttribute('default_values');
  }
  public set defaultValues(value: string[]) {
    this._defaultValues = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValuesInput() {
    return this._defaultValues;
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

  // suggestion_attribute_key - computed: false, optional: false, required: true
  private _suggestionAttributeKey?: string; 
  public get suggestionAttributeKey() {
    return this.getStringAttribute('suggestion_attribute_key');
  }
  public set suggestionAttributeKey(value: string) {
    this._suggestionAttributeKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get suggestionAttributeKeyInput() {
    return this._suggestionAttributeKey;
  }
}

export class MetricDashboardTemplateVariableList extends cdktf.ComplexList {
  public internalValue? : MetricDashboardTemplateVariable[] | cdktf.IResolvable

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
  public get(index: number): MetricDashboardTemplateVariableOutputReference {
    return new MetricDashboardTemplateVariableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MetricDashboardWorkflowLink {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#name MetricDashboard#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#url MetricDashboard#url}
  */
  readonly url: string;
}

export function metricDashboardWorkflowLinkToTerraform(struct?: MetricDashboardWorkflowLink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function metricDashboardWorkflowLinkToHclTerraform(struct?: MetricDashboardWorkflowLink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MetricDashboardWorkflowLinkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MetricDashboardWorkflowLink | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricDashboardWorkflowLink | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._url = value.url;
    }
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

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class MetricDashboardWorkflowLinkList extends cdktf.ComplexList {
  public internalValue? : MetricDashboardWorkflowLink[] | cdktf.IResolvable

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
  public get(index: number): MetricDashboardWorkflowLinkOutputReference {
    return new MetricDashboardWorkflowLinkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard lightstep_metric_dashboard}
*/
export class MetricDashboard extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "lightstep_metric_dashboard";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MetricDashboard resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MetricDashboard to import
  * @param importFromId The id of the existing MetricDashboard that should be imported. Refer to the {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MetricDashboard to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "lightstep_metric_dashboard", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/metric_dashboard lightstep_metric_dashboard} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MetricDashboardConfig
  */
  public constructor(scope: Construct, id: string, config: MetricDashboardConfig) {
    super(scope, id, {
      terraformResourceType: 'lightstep_metric_dashboard',
      terraformGeneratorMetadata: {
        providerName: 'lightstep',
        providerVersion: '1.98.2',
        providerVersionConstraint: '1.98.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dashboardDescription = config.dashboardDescription;
    this._dashboardName = config.dashboardName;
    this._eventQueryIds = config.eventQueryIds;
    this._id = config.id;
    this._projectName = config.projectName;
    this._chart.internalValue = config.chart;
    this._group.internalValue = config.group;
    this._label.internalValue = config.label;
    this._templateVariable.internalValue = config.templateVariable;
    this._workflowLink.internalValue = config.workflowLink;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dashboard_description - computed: false, optional: true, required: false
  private _dashboardDescription?: string; 
  public get dashboardDescription() {
    return this.getStringAttribute('dashboard_description');
  }
  public set dashboardDescription(value: string) {
    this._dashboardDescription = value;
  }
  public resetDashboardDescription() {
    this._dashboardDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardDescriptionInput() {
    return this._dashboardDescription;
  }

  // dashboard_name - computed: false, optional: false, required: true
  private _dashboardName?: string; 
  public get dashboardName() {
    return this.getStringAttribute('dashboard_name');
  }
  public set dashboardName(value: string) {
    this._dashboardName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardNameInput() {
    return this._dashboardName;
  }

  // event_query_ids - computed: false, optional: true, required: false
  private _eventQueryIds?: string[]; 
  public get eventQueryIds() {
    return cdktf.Fn.tolist(this.getListAttribute('event_query_ids'));
  }
  public set eventQueryIds(value: string[]) {
    this._eventQueryIds = value;
  }
  public resetEventQueryIds() {
    this._eventQueryIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventQueryIdsInput() {
    return this._eventQueryIds;
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

  // project_name - computed: false, optional: false, required: true
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // chart - computed: false, optional: true, required: false
  private _chart = new MetricDashboardChartList(this, "chart", true);
  public get chart() {
    return this._chart;
  }
  public putChart(value: MetricDashboardChart[] | cdktf.IResolvable) {
    this._chart.internalValue = value;
  }
  public resetChart() {
    this._chart.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chartInput() {
    return this._chart.internalValue;
  }

  // group - computed: false, optional: true, required: false
  private _group = new MetricDashboardGroupList(this, "group", true);
  public get group() {
    return this._group;
  }
  public putGroup(value: MetricDashboardGroup[] | cdktf.IResolvable) {
    this._group.internalValue = value;
  }
  public resetGroup() {
    this._group.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group.internalValue;
  }

  // label - computed: false, optional: true, required: false
  private _label = new MetricDashboardLabelList(this, "label", true);
  public get label() {
    return this._label;
  }
  public putLabel(value: MetricDashboardLabel[] | cdktf.IResolvable) {
    this._label.internalValue = value;
  }
  public resetLabel() {
    this._label.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label.internalValue;
  }

  // template_variable - computed: false, optional: true, required: false
  private _templateVariable = new MetricDashboardTemplateVariableList(this, "template_variable", true);
  public get templateVariable() {
    return this._templateVariable;
  }
  public putTemplateVariable(value: MetricDashboardTemplateVariable[] | cdktf.IResolvable) {
    this._templateVariable.internalValue = value;
  }
  public resetTemplateVariable() {
    this._templateVariable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateVariableInput() {
    return this._templateVariable.internalValue;
  }

  // workflow_link - computed: false, optional: true, required: false
  private _workflowLink = new MetricDashboardWorkflowLinkList(this, "workflow_link", false);
  public get workflowLink() {
    return this._workflowLink;
  }
  public putWorkflowLink(value: MetricDashboardWorkflowLink[] | cdktf.IResolvable) {
    this._workflowLink.internalValue = value;
  }
  public resetWorkflowLink() {
    this._workflowLink.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowLinkInput() {
    return this._workflowLink.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dashboard_description: cdktf.stringToTerraform(this._dashboardDescription),
      dashboard_name: cdktf.stringToTerraform(this._dashboardName),
      event_query_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._eventQueryIds),
      id: cdktf.stringToTerraform(this._id),
      project_name: cdktf.stringToTerraform(this._projectName),
      chart: cdktf.listMapper(metricDashboardChartToTerraform, true)(this._chart.internalValue),
      group: cdktf.listMapper(metricDashboardGroupToTerraform, true)(this._group.internalValue),
      label: cdktf.listMapper(metricDashboardLabelToTerraform, true)(this._label.internalValue),
      template_variable: cdktf.listMapper(metricDashboardTemplateVariableToTerraform, true)(this._templateVariable.internalValue),
      workflow_link: cdktf.listMapper(metricDashboardWorkflowLinkToTerraform, true)(this._workflowLink.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dashboard_description: {
        value: cdktf.stringToHclTerraform(this._dashboardDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dashboard_name: {
        value: cdktf.stringToHclTerraform(this._dashboardName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_query_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._eventQueryIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_name: {
        value: cdktf.stringToHclTerraform(this._projectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      chart: {
        value: cdktf.listMapperHcl(metricDashboardChartToHclTerraform, true)(this._chart.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MetricDashboardChartList",
      },
      group: {
        value: cdktf.listMapperHcl(metricDashboardGroupToHclTerraform, true)(this._group.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MetricDashboardGroupList",
      },
      label: {
        value: cdktf.listMapperHcl(metricDashboardLabelToHclTerraform, true)(this._label.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MetricDashboardLabelList",
      },
      template_variable: {
        value: cdktf.listMapperHcl(metricDashboardTemplateVariableToHclTerraform, true)(this._templateVariable.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MetricDashboardTemplateVariableList",
      },
      workflow_link: {
        value: cdktf.listMapperHcl(metricDashboardWorkflowLinkToHclTerraform, true)(this._workflowLink.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MetricDashboardWorkflowLinkList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
