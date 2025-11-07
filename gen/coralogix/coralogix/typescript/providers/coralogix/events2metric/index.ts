// https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/events2metric
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Events2MetricConfig extends cdktf.TerraformMetaArguments {
  /**
  * Events2Metric description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/events2metric#description Events2Metric#description}
  */
  readonly description?: string;
  /**
  * logs-events2metric type. Exactly one of "spans_query" or "logs_query" must be defined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/events2metric#logs_query Events2Metric#logs_query}
  */
  readonly logsQuery?: Events2MetricLogsQuery;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/events2metric#metric_fields Events2Metric#metric_fields}
  */
  readonly metricFields?: { [key: string]: Events2MetricMetricFields } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/events2metric#metric_labels Events2Metric#metric_labels}
  */
  readonly metricLabels?: { [key: string]: string };
  /**
  * Events2Metric name. Events2Metric names have to be unique per account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/events2metric#name Events2Metric#name}
  */
  readonly name: string;
  /**
  * Defines the permutations' info of the events2metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/events2metric#permutations Events2Metric#permutations}
  */
  readonly permutations?: Events2MetricPermutations;
  /**
  * spans-events2metric type. Exactly one of "spans_query" or "logs_query" should be defined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/events2metric#spans_query Events2Metric#spans_query}
  */
  readonly spansQuery?: Events2MetricSpansQuery;
}
export interface Events2MetricLogsQuery {
  /**
  * An array that contains log’s application names that we want to be alerted on. Applications can be filtered by prefix, suffix, and contains using the next patterns - filter:startsWith:xxx, filter:endsWith:xxx, filter:contains:xxx
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/events2metric#applications Events2Metric#applications}
  */
  readonly applications?: string[];
  /**
  * The search_query that we wanted to be notified on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/events2metric#lucene Events2Metric#lucene}
  */
  readonly lucene?: string;
  /**
  * An array of severities that we interested in. Can be one of ["Critical" "Debug" "Error" "Info" "Unspecified" "Verbose" "Warning"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/events2metric#severities Events2Metric#severities}
  */
  readonly severities?: string[];
  /**
  * An array that contains log’s subsystem names that we want to be notified on.  Subsystems can be filtered by prefix, suffix, and contains using the next patterns - filter:startsWith:xxx, filter:endsWith:xxx, filter:contains:xxx
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/events2metric#subsystems Events2Metric#subsystems}
  */
  readonly subsystems?: string[];
}

export function events2MetricLogsQueryToTerraform(struct?: Events2MetricLogsQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    applications: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.applications),
    lucene: cdktf.stringToTerraform(struct!.lucene),
    severities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.severities),
    subsystems: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subsystems),
  }
}


export function events2MetricLogsQueryToHclTerraform(struct?: Events2MetricLogsQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    applications: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.applications),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    lucene: {
      value: cdktf.stringToHclTerraform(struct!.lucene),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.severities),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subsystems: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subsystems),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Events2MetricLogsQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Events2MetricLogsQuery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applications !== undefined) {
      hasAnyValues = true;
      internalValueResult.applications = this._applications;
    }
    if (this._lucene !== undefined) {
      hasAnyValues = true;
      internalValueResult.lucene = this._lucene;
    }
    if (this._severities !== undefined) {
      hasAnyValues = true;
      internalValueResult.severities = this._severities;
    }
    if (this._subsystems !== undefined) {
      hasAnyValues = true;
      internalValueResult.subsystems = this._subsystems;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Events2MetricLogsQuery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applications = undefined;
      this._lucene = undefined;
      this._severities = undefined;
      this._subsystems = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applications = value.applications;
      this._lucene = value.lucene;
      this._severities = value.severities;
      this._subsystems = value.subsystems;
    }
  }

  // applications - computed: false, optional: true, required: false
  private _applications?: string[]; 
  public get applications() {
    return cdktf.Fn.tolist(this.getListAttribute('applications'));
  }
  public set applications(value: string[]) {
    this._applications = value;
  }
  public resetApplications() {
    this._applications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationsInput() {
    return this._applications;
  }

  // lucene - computed: false, optional: true, required: false
  private _lucene?: string; 
  public get lucene() {
    return this.getStringAttribute('lucene');
  }
  public set lucene(value: string) {
    this._lucene = value;
  }
  public resetLucene() {
    this._lucene = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get luceneInput() {
    return this._lucene;
  }

  // severities - computed: false, optional: true, required: false
  private _severities?: string[]; 
  public get severities() {
    return cdktf.Fn.tolist(this.getListAttribute('severities'));
  }
  public set severities(value: string[]) {
    this._severities = value;
  }
  public resetSeverities() {
    this._severities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severitiesInput() {
    return this._severities;
  }

  // subsystems - computed: false, optional: true, required: false
  private _subsystems?: string[]; 
  public get subsystems() {
    return cdktf.Fn.tolist(this.getListAttribute('subsystems'));
  }
  public set subsystems(value: string[]) {
    this._subsystems = value;
  }
  public resetSubsystems() {
    this._subsystems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subsystemsInput() {
    return this._subsystems;
  }
}
export interface Events2MetricMetricFieldsAggregationsAvg {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/events2metric#enable Events2Metric#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
}

export function events2MetricMetricFieldsAggregationsAvgToTerraform(struct?: Events2MetricMetricFieldsAggregationsAvg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
  }
}


export function events2MetricMetricFieldsAggregationsAvgToHclTerraform(struct?: Events2MetricMetricFieldsAggregationsAvg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Events2MetricMetricFieldsAggregationsAvgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Events2MetricMetricFieldsAggregationsAvg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Events2MetricMetricFieldsAggregationsAvg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
    }
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // target_metric_name - computed: true, optional: false, required: false
  public get targetMetricName() {
    return this.getStringAttribute('target_metric_name');
  }
}
export interface Events2MetricMetricFieldsAggregationsCount {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/events2metric#enable Events2Metric#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
}

export function events2MetricMetricFieldsAggregationsCountToTerraform(struct?: Events2MetricMetricFieldsAggregationsCount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
  }
}


export function events2MetricMetricFieldsAggregationsCountToHclTerraform(struct?: Events2MetricMetricFieldsAggregationsCount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Events2MetricMetricFieldsAggregationsCountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Events2MetricMetricFieldsAggregationsCount | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Events2MetricMetricFieldsAggregationsCount | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
    }
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // target_metric_name - computed: true, optional: false, required: false
  public get targetMetricName() {
    return this.getStringAttribute('target_metric_name');
  }
}
export interface Events2MetricMetricFieldsAggregationsHistogram {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/events2metric#buckets Events2Metric#buckets}
  */
  readonly buckets: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/events2metric#enable Events2Metric#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
}

export function events2MetricMetricFieldsAggregationsHistogramToTerraform(struct?: Events2MetricMetricFieldsAggregationsHistogram | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buckets: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.buckets),
    enable: cdktf.booleanToTerraform(struct!.enable),
  }
}


export function events2MetricMetricFieldsAggregationsHistogramToHclTerraform(struct?: Events2MetricMetricFieldsAggregationsHistogram | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    buckets: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.buckets),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Events2MetricMetricFieldsAggregationsHistogramOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Events2MetricMetricFieldsAggregationsHistogram | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buckets !== undefined) {
      hasAnyValues = true;
      internalValueResult.buckets = this._buckets;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Events2MetricMetricFieldsAggregationsHistogram | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._buckets = undefined;
      this._enable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._buckets = value.buckets;
      this._enable = value.enable;
    }
  }

  // buckets - computed: true, optional: false, required: true
  private _buckets?: number[]; 
  public get buckets() {
    return this.getNumberListAttribute('buckets');
  }
  public set buckets(value: number[]) {
    this._buckets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketsInput() {
    return this._buckets;
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // target_metric_name - computed: true, optional: false, required: false
  public get targetMetricName() {
    return this.getStringAttribute('target_metric_name');
  }
}
export interface Events2MetricMetricFieldsAggregationsMax {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/events2metric#enable Events2Metric#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
}

export function events2MetricMetricFieldsAggregationsMaxToTerraform(struct?: Events2MetricMetricFieldsAggregationsMax | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
  }
}


export function events2MetricMetricFieldsAggregationsMaxToHclTerraform(struct?: Events2MetricMetricFieldsAggregationsMax | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Events2MetricMetricFieldsAggregationsMaxOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Events2MetricMetricFieldsAggregationsMax | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Events2MetricMetricFieldsAggregationsMax | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
    }
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // target_metric_name - computed: true, optional: false, required: false
  public get targetMetricName() {
    return this.getStringAttribute('target_metric_name');
  }
}
export interface Events2MetricMetricFieldsAggregationsMin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/events2metric#enable Events2Metric#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
}

export function events2MetricMetricFieldsAggregationsMinToTerraform(struct?: Events2MetricMetricFieldsAggregationsMin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
  }
}


export function events2MetricMetricFieldsAggregationsMinToHclTerraform(struct?: Events2MetricMetricFieldsAggregationsMin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Events2MetricMetricFieldsAggregationsMinOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Events2MetricMetricFieldsAggregationsMin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Events2MetricMetricFieldsAggregationsMin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
    }
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // target_metric_name - computed: true, optional: false, required: false
  public get targetMetricName() {
    return this.getStringAttribute('target_metric_name');
  }
}
export interface Events2MetricMetricFieldsAggregationsSamples {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/events2metric#enable Events2Metric#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Can be one of ["Max" "Min"].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/events2metric#type Events2Metric#type}
  */
  readonly type: string;
}

export function events2MetricMetricFieldsAggregationsSamplesToTerraform(struct?: Events2MetricMetricFieldsAggregationsSamples | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function events2MetricMetricFieldsAggregationsSamplesToHclTerraform(struct?: Events2MetricMetricFieldsAggregationsSamples | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Events2MetricMetricFieldsAggregationsSamplesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Events2MetricMetricFieldsAggregationsSamples | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Events2MetricMetricFieldsAggregationsSamples | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._type = value.type;
    }
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // target_metric_name - computed: true, optional: false, required: false
  public get targetMetricName() {
    return this.getStringAttribute('target_metric_name');
  }

  // type - computed: true, optional: false, required: true
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
}
export interface Events2MetricMetricFieldsAggregationsSum {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/events2metric#enable Events2Metric#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
}

export function events2MetricMetricFieldsAggregationsSumToTerraform(struct?: Events2MetricMetricFieldsAggregationsSum | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
  }
}


export function events2MetricMetricFieldsAggregationsSumToHclTerraform(struct?: Events2MetricMetricFieldsAggregationsSum | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Events2MetricMetricFieldsAggregationsSumOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Events2MetricMetricFieldsAggregationsSum | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Events2MetricMetricFieldsAggregationsSum | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
    }
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // target_metric_name - computed: true, optional: false, required: false
  public get targetMetricName() {
    return this.getStringAttribute('target_metric_name');
  }
}
export interface Events2MetricMetricFieldsAggregations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/events2metric#avg Events2Metric#avg}
  */
  readonly avg?: Events2MetricMetricFieldsAggregationsAvg;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/events2metric#count Events2Metric#count}
  */
  readonly count?: Events2MetricMetricFieldsAggregationsCount;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/events2metric#histogram Events2Metric#histogram}
  */
  readonly histogram?: Events2MetricMetricFieldsAggregationsHistogram;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/events2metric#max Events2Metric#max}
  */
  readonly max?: Events2MetricMetricFieldsAggregationsMax;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/events2metric#min Events2Metric#min}
  */
  readonly min?: Events2MetricMetricFieldsAggregationsMin;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/events2metric#samples Events2Metric#samples}
  */
  readonly samples?: Events2MetricMetricFieldsAggregationsSamples;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/events2metric#sum Events2Metric#sum}
  */
  readonly sum?: Events2MetricMetricFieldsAggregationsSum;
}

export function events2MetricMetricFieldsAggregationsToTerraform(struct?: Events2MetricMetricFieldsAggregations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    avg: events2MetricMetricFieldsAggregationsAvgToTerraform(struct!.avg),
    count: events2MetricMetricFieldsAggregationsCountToTerraform(struct!.count),
    histogram: events2MetricMetricFieldsAggregationsHistogramToTerraform(struct!.histogram),
    max: events2MetricMetricFieldsAggregationsMaxToTerraform(struct!.max),
    min: events2MetricMetricFieldsAggregationsMinToTerraform(struct!.min),
    samples: events2MetricMetricFieldsAggregationsSamplesToTerraform(struct!.samples),
    sum: events2MetricMetricFieldsAggregationsSumToTerraform(struct!.sum),
  }
}


export function events2MetricMetricFieldsAggregationsToHclTerraform(struct?: Events2MetricMetricFieldsAggregations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    avg: {
      value: events2MetricMetricFieldsAggregationsAvgToHclTerraform(struct!.avg),
      isBlock: true,
      type: "struct",
      storageClassType: "Events2MetricMetricFieldsAggregationsAvg",
    },
    count: {
      value: events2MetricMetricFieldsAggregationsCountToHclTerraform(struct!.count),
      isBlock: true,
      type: "struct",
      storageClassType: "Events2MetricMetricFieldsAggregationsCount",
    },
    histogram: {
      value: events2MetricMetricFieldsAggregationsHistogramToHclTerraform(struct!.histogram),
      isBlock: true,
      type: "struct",
      storageClassType: "Events2MetricMetricFieldsAggregationsHistogram",
    },
    max: {
      value: events2MetricMetricFieldsAggregationsMaxToHclTerraform(struct!.max),
      isBlock: true,
      type: "struct",
      storageClassType: "Events2MetricMetricFieldsAggregationsMax",
    },
    min: {
      value: events2MetricMetricFieldsAggregationsMinToHclTerraform(struct!.min),
      isBlock: true,
      type: "struct",
      storageClassType: "Events2MetricMetricFieldsAggregationsMin",
    },
    samples: {
      value: events2MetricMetricFieldsAggregationsSamplesToHclTerraform(struct!.samples),
      isBlock: true,
      type: "struct",
      storageClassType: "Events2MetricMetricFieldsAggregationsSamples",
    },
    sum: {
      value: events2MetricMetricFieldsAggregationsSumToHclTerraform(struct!.sum),
      isBlock: true,
      type: "struct",
      storageClassType: "Events2MetricMetricFieldsAggregationsSum",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Events2MetricMetricFieldsAggregationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Events2MetricMetricFieldsAggregations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._avg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.avg = this._avg?.internalValue;
    }
    if (this._count?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count?.internalValue;
    }
    if (this._histogram?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.histogram = this._histogram?.internalValue;
    }
    if (this._max?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max?.internalValue;
    }
    if (this._min?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min?.internalValue;
    }
    if (this._samples?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samples = this._samples?.internalValue;
    }
    if (this._sum?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sum = this._sum?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Events2MetricMetricFieldsAggregations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._avg.internalValue = undefined;
      this._count.internalValue = undefined;
      this._histogram.internalValue = undefined;
      this._max.internalValue = undefined;
      this._min.internalValue = undefined;
      this._samples.internalValue = undefined;
      this._sum.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._avg.internalValue = value.avg;
      this._count.internalValue = value.count;
      this._histogram.internalValue = value.histogram;
      this._max.internalValue = value.max;
      this._min.internalValue = value.min;
      this._samples.internalValue = value.samples;
      this._sum.internalValue = value.sum;
    }
  }

  // avg - computed: true, optional: true, required: false
  private _avg = new Events2MetricMetricFieldsAggregationsAvgOutputReference(this, "avg");
  public get avg() {
    return this._avg;
  }
  public putAvg(value: Events2MetricMetricFieldsAggregationsAvg) {
    this._avg.internalValue = value;
  }
  public resetAvg() {
    this._avg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avgInput() {
    return this._avg.internalValue;
  }

  // count - computed: true, optional: true, required: false
  private _count = new Events2MetricMetricFieldsAggregationsCountOutputReference(this, "count");
  public get count() {
    return this._count;
  }
  public putCount(value: Events2MetricMetricFieldsAggregationsCount) {
    this._count.internalValue = value;
  }
  public resetCount() {
    this._count.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count.internalValue;
  }

  // histogram - computed: true, optional: true, required: false
  private _histogram = new Events2MetricMetricFieldsAggregationsHistogramOutputReference(this, "histogram");
  public get histogram() {
    return this._histogram;
  }
  public putHistogram(value: Events2MetricMetricFieldsAggregationsHistogram) {
    this._histogram.internalValue = value;
  }
  public resetHistogram() {
    this._histogram.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get histogramInput() {
    return this._histogram.internalValue;
  }

  // max - computed: true, optional: true, required: false
  private _max = new Events2MetricMetricFieldsAggregationsMaxOutputReference(this, "max");
  public get max() {
    return this._max;
  }
  public putMax(value: Events2MetricMetricFieldsAggregationsMax) {
    this._max.internalValue = value;
  }
  public resetMax() {
    this._max.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max.internalValue;
  }

  // min - computed: true, optional: true, required: false
  private _min = new Events2MetricMetricFieldsAggregationsMinOutputReference(this, "min");
  public get min() {
    return this._min;
  }
  public putMin(value: Events2MetricMetricFieldsAggregationsMin) {
    this._min.internalValue = value;
  }
  public resetMin() {
    this._min.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min.internalValue;
  }

  // samples - computed: true, optional: true, required: false
  private _samples = new Events2MetricMetricFieldsAggregationsSamplesOutputReference(this, "samples");
  public get samples() {
    return this._samples;
  }
  public putSamples(value: Events2MetricMetricFieldsAggregationsSamples) {
    this._samples.internalValue = value;
  }
  public resetSamples() {
    this._samples.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplesInput() {
    return this._samples.internalValue;
  }

  // sum - computed: true, optional: true, required: false
  private _sum = new Events2MetricMetricFieldsAggregationsSumOutputReference(this, "sum");
  public get sum() {
    return this._sum;
  }
  public putSum(value: Events2MetricMetricFieldsAggregationsSum) {
    this._sum.internalValue = value;
  }
  public resetSum() {
    this._sum.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sumInput() {
    return this._sum.internalValue;
  }
}
export interface Events2MetricMetricFields {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/events2metric#aggregations Events2Metric#aggregations}
  */
  readonly aggregations?: Events2MetricMetricFieldsAggregations;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/events2metric#source_field Events2Metric#source_field}
  */
  readonly sourceField: string;
}

export function events2MetricMetricFieldsToTerraform(struct?: Events2MetricMetricFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregations: events2MetricMetricFieldsAggregationsToTerraform(struct!.aggregations),
    source_field: cdktf.stringToTerraform(struct!.sourceField),
  }
}


export function events2MetricMetricFieldsToHclTerraform(struct?: Events2MetricMetricFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregations: {
      value: events2MetricMetricFieldsAggregationsToHclTerraform(struct!.aggregations),
      isBlock: true,
      type: "struct",
      storageClassType: "Events2MetricMetricFieldsAggregations",
    },
    source_field: {
      value: cdktf.stringToHclTerraform(struct!.sourceField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Events2MetricMetricFieldsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): Events2MetricMetricFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregations = this._aggregations?.internalValue;
    }
    if (this._sourceField !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceField = this._sourceField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Events2MetricMetricFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregations.internalValue = undefined;
      this._sourceField = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregations.internalValue = value.aggregations;
      this._sourceField = value.sourceField;
    }
  }

  // aggregations - computed: true, optional: true, required: false
  private _aggregations = new Events2MetricMetricFieldsAggregationsOutputReference(this, "aggregations");
  public get aggregations() {
    return this._aggregations;
  }
  public putAggregations(value: Events2MetricMetricFieldsAggregations) {
    this._aggregations.internalValue = value;
  }
  public resetAggregations() {
    this._aggregations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationsInput() {
    return this._aggregations.internalValue;
  }

  // source_field - computed: false, optional: false, required: true
  private _sourceField?: string; 
  public get sourceField() {
    return this.getStringAttribute('source_field');
  }
  public set sourceField(value: string) {
    this._sourceField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFieldInput() {
    return this._sourceField;
  }
}

export class Events2MetricMetricFieldsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: Events2MetricMetricFields } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): Events2MetricMetricFieldsOutputReference {
    return new Events2MetricMetricFieldsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface Events2MetricPermutations {
  /**
  * Defines the permutations' limit of the events2metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/events2metric#limit Events2Metric#limit}
  */
  readonly limit?: number;
}

export function events2MetricPermutationsToTerraform(struct?: Events2MetricPermutations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit: cdktf.numberToTerraform(struct!.limit),
  }
}


export function events2MetricPermutationsToHclTerraform(struct?: Events2MetricPermutations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Events2MetricPermutationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Events2MetricPermutations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Events2MetricPermutations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limit = value.limit;
    }
  }

  // has_exceed_limit - computed: true, optional: false, required: false
  public get hasExceedLimit() {
    return this.getBooleanAttribute('has_exceed_limit');
  }

  // limit - computed: true, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }
}
export interface Events2MetricSpansQuery {
  /**
  * An array that contains log’s actions names that we want to be notified on.  Actions can be filtered by prefix, suffix, and contains using the next patterns - filter:startsWith:xxx, filter:endsWith:xxx, filter:contains:xxx
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/events2metric#actions Events2Metric#actions}
  */
  readonly actions?: string[];
  /**
  * An array that contains log’s application names that we want to be alerted on. Applications can be filtered by prefix, suffix, and contains using the next patterns - filter:startsWith:xxx, filter:endsWith:xxx, filter:contains:xxx
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/events2metric#applications Events2Metric#applications}
  */
  readonly applications?: string[];
  /**
  * The search_query that we wanted to be notified on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/events2metric#lucene Events2Metric#lucene}
  */
  readonly lucene?: string;
  /**
  * An array that contains log’s services names that we want to be notified on.  Services can be filtered by prefix, suffix, and contains using the next patterns - filter:startsWith:xxx, filter:endsWith:xxx, filter:contains:xxx
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/events2metric#services Events2Metric#services}
  */
  readonly services?: string[];
  /**
  * An array that contains log’s subsystem names that we want to be notified on.  Subsystems can be filtered by prefix, suffix, and contains using the next patterns - filter:startsWith:xxx, filter:endsWith:xxx, filter:contains:xxx
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/events2metric#subsystems Events2Metric#subsystems}
  */
  readonly subsystems?: string[];
}

export function events2MetricSpansQueryToTerraform(struct?: Events2MetricSpansQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.actions),
    applications: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.applications),
    lucene: cdktf.stringToTerraform(struct!.lucene),
    services: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.services),
    subsystems: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subsystems),
  }
}


export function events2MetricSpansQueryToHclTerraform(struct?: Events2MetricSpansQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.actions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    applications: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.applications),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    lucene: {
      value: cdktf.stringToHclTerraform(struct!.lucene),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    services: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.services),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subsystems: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subsystems),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Events2MetricSpansQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Events2MetricSpansQuery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions;
    }
    if (this._applications !== undefined) {
      hasAnyValues = true;
      internalValueResult.applications = this._applications;
    }
    if (this._lucene !== undefined) {
      hasAnyValues = true;
      internalValueResult.lucene = this._lucene;
    }
    if (this._services !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services;
    }
    if (this._subsystems !== undefined) {
      hasAnyValues = true;
      internalValueResult.subsystems = this._subsystems;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Events2MetricSpansQuery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actions = undefined;
      this._applications = undefined;
      this._lucene = undefined;
      this._services = undefined;
      this._subsystems = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actions = value.actions;
      this._applications = value.applications;
      this._lucene = value.lucene;
      this._services = value.services;
      this._subsystems = value.subsystems;
    }
  }

  // actions - computed: false, optional: true, required: false
  private _actions?: string[]; 
  public get actions() {
    return cdktf.Fn.tolist(this.getListAttribute('actions'));
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  public resetActions() {
    this._actions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }

  // applications - computed: false, optional: true, required: false
  private _applications?: string[]; 
  public get applications() {
    return cdktf.Fn.tolist(this.getListAttribute('applications'));
  }
  public set applications(value: string[]) {
    this._applications = value;
  }
  public resetApplications() {
    this._applications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationsInput() {
    return this._applications;
  }

  // lucene - computed: false, optional: true, required: false
  private _lucene?: string; 
  public get lucene() {
    return this.getStringAttribute('lucene');
  }
  public set lucene(value: string) {
    this._lucene = value;
  }
  public resetLucene() {
    this._lucene = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get luceneInput() {
    return this._lucene;
  }

  // services - computed: false, optional: true, required: false
  private _services?: string[]; 
  public get services() {
    return cdktf.Fn.tolist(this.getListAttribute('services'));
  }
  public set services(value: string[]) {
    this._services = value;
  }
  public resetServices() {
    this._services = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services;
  }

  // subsystems - computed: false, optional: true, required: false
  private _subsystems?: string[]; 
  public get subsystems() {
    return cdktf.Fn.tolist(this.getListAttribute('subsystems'));
  }
  public set subsystems(value: string[]) {
    this._subsystems = value;
  }
  public resetSubsystems() {
    this._subsystems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subsystemsInput() {
    return this._subsystems;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/events2metric coralogix_events2metric}
*/
export class Events2Metric extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "coralogix_events2metric";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Events2Metric resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Events2Metric to import
  * @param importFromId The id of the existing Events2Metric that should be imported. Refer to the {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/events2metric#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Events2Metric to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "coralogix_events2metric", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/events2metric coralogix_events2metric} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Events2MetricConfig
  */
  public constructor(scope: Construct, id: string, config: Events2MetricConfig) {
    super(scope, id, {
      terraformResourceType: 'coralogix_events2metric',
      terraformGeneratorMetadata: {
        providerName: 'coralogix',
        providerVersion: '2.2.3'
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
    this._logsQuery.internalValue = config.logsQuery;
    this._metricFields.internalValue = config.metricFields;
    this._metricLabels = config.metricLabels;
    this._name = config.name;
    this._permutations.internalValue = config.permutations;
    this._spansQuery.internalValue = config.spansQuery;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // logs_query - computed: false, optional: true, required: false
  private _logsQuery = new Events2MetricLogsQueryOutputReference(this, "logs_query");
  public get logsQuery() {
    return this._logsQuery;
  }
  public putLogsQuery(value: Events2MetricLogsQuery) {
    this._logsQuery.internalValue = value;
  }
  public resetLogsQuery() {
    this._logsQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsQueryInput() {
    return this._logsQuery.internalValue;
  }

  // metric_fields - computed: false, optional: true, required: false
  private _metricFields = new Events2MetricMetricFieldsMap(this, "metric_fields");
  public get metricFields() {
    return this._metricFields;
  }
  public putMetricFields(value: { [key: string]: Events2MetricMetricFields } | cdktf.IResolvable) {
    this._metricFields.internalValue = value;
  }
  public resetMetricFields() {
    this._metricFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricFieldsInput() {
    return this._metricFields.internalValue;
  }

  // metric_labels - computed: false, optional: true, required: false
  private _metricLabels?: { [key: string]: string }; 
  public get metricLabels() {
    return this.getStringMapAttribute('metric_labels');
  }
  public set metricLabels(value: { [key: string]: string }) {
    this._metricLabels = value;
  }
  public resetMetricLabels() {
    this._metricLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricLabelsInput() {
    return this._metricLabels;
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

  // permutations - computed: true, optional: true, required: false
  private _permutations = new Events2MetricPermutationsOutputReference(this, "permutations");
  public get permutations() {
    return this._permutations;
  }
  public putPermutations(value: Events2MetricPermutations) {
    this._permutations.internalValue = value;
  }
  public resetPermutations() {
    this._permutations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permutationsInput() {
    return this._permutations.internalValue;
  }

  // spans_query - computed: false, optional: true, required: false
  private _spansQuery = new Events2MetricSpansQueryOutputReference(this, "spans_query");
  public get spansQuery() {
    return this._spansQuery;
  }
  public putSpansQuery(value: Events2MetricSpansQuery) {
    this._spansQuery.internalValue = value;
  }
  public resetSpansQuery() {
    this._spansQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spansQueryInput() {
    return this._spansQuery.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      logs_query: events2MetricLogsQueryToTerraform(this._logsQuery.internalValue),
      metric_fields: cdktf.hashMapper(events2MetricMetricFieldsToTerraform)(this._metricFields.internalValue),
      metric_labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._metricLabels),
      name: cdktf.stringToTerraform(this._name),
      permutations: events2MetricPermutationsToTerraform(this._permutations.internalValue),
      spans_query: events2MetricSpansQueryToTerraform(this._spansQuery.internalValue),
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
      logs_query: {
        value: events2MetricLogsQueryToHclTerraform(this._logsQuery.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Events2MetricLogsQuery",
      },
      metric_fields: {
        value: cdktf.hashMapperHcl(events2MetricMetricFieldsToHclTerraform)(this._metricFields.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "Events2MetricMetricFieldsMap",
      },
      metric_labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._metricLabels),
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
      permutations: {
        value: events2MetricPermutationsToHclTerraform(this._permutations.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Events2MetricPermutations",
      },
      spans_query: {
        value: events2MetricSpansQueryToHclTerraform(this._spansQuery.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Events2MetricSpansQuery",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
