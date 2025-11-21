// https://registry.terraform.io/providers/coralogix/coralogix/3.0.0/docs/data-sources/events2metric
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCoralogixEvents2MetricConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.0/docs/data-sources/events2metric#id DataCoralogixEvents2Metric#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataCoralogixEvents2MetricLogsQuery {
}

export function dataCoralogixEvents2MetricLogsQueryToTerraform(struct?: DataCoralogixEvents2MetricLogsQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixEvents2MetricLogsQueryToHclTerraform(struct?: DataCoralogixEvents2MetricLogsQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixEvents2MetricLogsQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixEvents2MetricLogsQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixEvents2MetricLogsQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // applications - computed: true, optional: false, required: false
  public get applications() {
    return cdktf.Fn.tolist(this.getListAttribute('applications'));
  }

  // lucene - computed: true, optional: false, required: false
  public get lucene() {
    return this.getStringAttribute('lucene');
  }

  // severities - computed: true, optional: false, required: false
  public get severities() {
    return cdktf.Fn.tolist(this.getListAttribute('severities'));
  }

  // subsystems - computed: true, optional: false, required: false
  public get subsystems() {
    return cdktf.Fn.tolist(this.getListAttribute('subsystems'));
  }
}
export interface DataCoralogixEvents2MetricMetricFieldsAggregationsAvg {
}

export function dataCoralogixEvents2MetricMetricFieldsAggregationsAvgToTerraform(struct?: DataCoralogixEvents2MetricMetricFieldsAggregationsAvg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixEvents2MetricMetricFieldsAggregationsAvgToHclTerraform(struct?: DataCoralogixEvents2MetricMetricFieldsAggregationsAvg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixEvents2MetricMetricFieldsAggregationsAvgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixEvents2MetricMetricFieldsAggregationsAvg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixEvents2MetricMetricFieldsAggregationsAvg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // target_metric_name - computed: true, optional: false, required: false
  public get targetMetricName() {
    return this.getStringAttribute('target_metric_name');
  }
}
export interface DataCoralogixEvents2MetricMetricFieldsAggregationsCount {
}

export function dataCoralogixEvents2MetricMetricFieldsAggregationsCountToTerraform(struct?: DataCoralogixEvents2MetricMetricFieldsAggregationsCount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixEvents2MetricMetricFieldsAggregationsCountToHclTerraform(struct?: DataCoralogixEvents2MetricMetricFieldsAggregationsCount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixEvents2MetricMetricFieldsAggregationsCountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixEvents2MetricMetricFieldsAggregationsCount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixEvents2MetricMetricFieldsAggregationsCount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // target_metric_name - computed: true, optional: false, required: false
  public get targetMetricName() {
    return this.getStringAttribute('target_metric_name');
  }
}
export interface DataCoralogixEvents2MetricMetricFieldsAggregationsHistogram {
}

export function dataCoralogixEvents2MetricMetricFieldsAggregationsHistogramToTerraform(struct?: DataCoralogixEvents2MetricMetricFieldsAggregationsHistogram): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixEvents2MetricMetricFieldsAggregationsHistogramToHclTerraform(struct?: DataCoralogixEvents2MetricMetricFieldsAggregationsHistogram): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixEvents2MetricMetricFieldsAggregationsHistogramOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixEvents2MetricMetricFieldsAggregationsHistogram | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixEvents2MetricMetricFieldsAggregationsHistogram | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // buckets - computed: true, optional: false, required: false
  public get buckets() {
    return this.getNumberListAttribute('buckets');
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // target_metric_name - computed: true, optional: false, required: false
  public get targetMetricName() {
    return this.getStringAttribute('target_metric_name');
  }
}
export interface DataCoralogixEvents2MetricMetricFieldsAggregationsMax {
}

export function dataCoralogixEvents2MetricMetricFieldsAggregationsMaxToTerraform(struct?: DataCoralogixEvents2MetricMetricFieldsAggregationsMax): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixEvents2MetricMetricFieldsAggregationsMaxToHclTerraform(struct?: DataCoralogixEvents2MetricMetricFieldsAggregationsMax): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixEvents2MetricMetricFieldsAggregationsMaxOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixEvents2MetricMetricFieldsAggregationsMax | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixEvents2MetricMetricFieldsAggregationsMax | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // target_metric_name - computed: true, optional: false, required: false
  public get targetMetricName() {
    return this.getStringAttribute('target_metric_name');
  }
}
export interface DataCoralogixEvents2MetricMetricFieldsAggregationsMin {
}

export function dataCoralogixEvents2MetricMetricFieldsAggregationsMinToTerraform(struct?: DataCoralogixEvents2MetricMetricFieldsAggregationsMin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixEvents2MetricMetricFieldsAggregationsMinToHclTerraform(struct?: DataCoralogixEvents2MetricMetricFieldsAggregationsMin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixEvents2MetricMetricFieldsAggregationsMinOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixEvents2MetricMetricFieldsAggregationsMin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixEvents2MetricMetricFieldsAggregationsMin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // target_metric_name - computed: true, optional: false, required: false
  public get targetMetricName() {
    return this.getStringAttribute('target_metric_name');
  }
}
export interface DataCoralogixEvents2MetricMetricFieldsAggregationsSamples {
}

export function dataCoralogixEvents2MetricMetricFieldsAggregationsSamplesToTerraform(struct?: DataCoralogixEvents2MetricMetricFieldsAggregationsSamples): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixEvents2MetricMetricFieldsAggregationsSamplesToHclTerraform(struct?: DataCoralogixEvents2MetricMetricFieldsAggregationsSamples): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixEvents2MetricMetricFieldsAggregationsSamplesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixEvents2MetricMetricFieldsAggregationsSamples | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixEvents2MetricMetricFieldsAggregationsSamples | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // target_metric_name - computed: true, optional: false, required: false
  public get targetMetricName() {
    return this.getStringAttribute('target_metric_name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataCoralogixEvents2MetricMetricFieldsAggregationsSum {
}

export function dataCoralogixEvents2MetricMetricFieldsAggregationsSumToTerraform(struct?: DataCoralogixEvents2MetricMetricFieldsAggregationsSum): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixEvents2MetricMetricFieldsAggregationsSumToHclTerraform(struct?: DataCoralogixEvents2MetricMetricFieldsAggregationsSum): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixEvents2MetricMetricFieldsAggregationsSumOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixEvents2MetricMetricFieldsAggregationsSum | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixEvents2MetricMetricFieldsAggregationsSum | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // target_metric_name - computed: true, optional: false, required: false
  public get targetMetricName() {
    return this.getStringAttribute('target_metric_name');
  }
}
export interface DataCoralogixEvents2MetricMetricFieldsAggregations {
}

export function dataCoralogixEvents2MetricMetricFieldsAggregationsToTerraform(struct?: DataCoralogixEvents2MetricMetricFieldsAggregations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixEvents2MetricMetricFieldsAggregationsToHclTerraform(struct?: DataCoralogixEvents2MetricMetricFieldsAggregations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixEvents2MetricMetricFieldsAggregationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixEvents2MetricMetricFieldsAggregations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixEvents2MetricMetricFieldsAggregations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // avg - computed: true, optional: false, required: false
  private _avg = new DataCoralogixEvents2MetricMetricFieldsAggregationsAvgOutputReference(this, "avg");
  public get avg() {
    return this._avg;
  }

  // count - computed: true, optional: false, required: false
  private _count = new DataCoralogixEvents2MetricMetricFieldsAggregationsCountOutputReference(this, "count");
  public get count() {
    return this._count;
  }

  // histogram - computed: true, optional: false, required: false
  private _histogram = new DataCoralogixEvents2MetricMetricFieldsAggregationsHistogramOutputReference(this, "histogram");
  public get histogram() {
    return this._histogram;
  }

  // max - computed: true, optional: false, required: false
  private _max = new DataCoralogixEvents2MetricMetricFieldsAggregationsMaxOutputReference(this, "max");
  public get max() {
    return this._max;
  }

  // min - computed: true, optional: false, required: false
  private _min = new DataCoralogixEvents2MetricMetricFieldsAggregationsMinOutputReference(this, "min");
  public get min() {
    return this._min;
  }

  // samples - computed: true, optional: false, required: false
  private _samples = new DataCoralogixEvents2MetricMetricFieldsAggregationsSamplesOutputReference(this, "samples");
  public get samples() {
    return this._samples;
  }

  // sum - computed: true, optional: false, required: false
  private _sum = new DataCoralogixEvents2MetricMetricFieldsAggregationsSumOutputReference(this, "sum");
  public get sum() {
    return this._sum;
  }
}
export interface DataCoralogixEvents2MetricMetricFields {
}

export function dataCoralogixEvents2MetricMetricFieldsToTerraform(struct?: DataCoralogixEvents2MetricMetricFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixEvents2MetricMetricFieldsToHclTerraform(struct?: DataCoralogixEvents2MetricMetricFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixEvents2MetricMetricFieldsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataCoralogixEvents2MetricMetricFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixEvents2MetricMetricFields | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggregations - computed: true, optional: false, required: false
  private _aggregations = new DataCoralogixEvents2MetricMetricFieldsAggregationsOutputReference(this, "aggregations");
  public get aggregations() {
    return this._aggregations;
  }

  // source_field - computed: true, optional: false, required: false
  public get sourceField() {
    return this.getStringAttribute('source_field');
  }
}

export class DataCoralogixEvents2MetricMetricFieldsMap extends cdktf.ComplexMap {

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
  public get(key: string): DataCoralogixEvents2MetricMetricFieldsOutputReference {
    return new DataCoralogixEvents2MetricMetricFieldsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataCoralogixEvents2MetricPermutations {
}

export function dataCoralogixEvents2MetricPermutationsToTerraform(struct?: DataCoralogixEvents2MetricPermutations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixEvents2MetricPermutationsToHclTerraform(struct?: DataCoralogixEvents2MetricPermutations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixEvents2MetricPermutationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixEvents2MetricPermutations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixEvents2MetricPermutations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // has_exceed_limit - computed: true, optional: false, required: false
  public get hasExceedLimit() {
    return this.getBooleanAttribute('has_exceed_limit');
  }

  // limit - computed: true, optional: false, required: false
  public get limit() {
    return this.getNumberAttribute('limit');
  }
}
export interface DataCoralogixEvents2MetricSpansQuery {
}

export function dataCoralogixEvents2MetricSpansQueryToTerraform(struct?: DataCoralogixEvents2MetricSpansQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixEvents2MetricSpansQueryToHclTerraform(struct?: DataCoralogixEvents2MetricSpansQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixEvents2MetricSpansQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixEvents2MetricSpansQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixEvents2MetricSpansQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actions - computed: true, optional: false, required: false
  public get actions() {
    return cdktf.Fn.tolist(this.getListAttribute('actions'));
  }

  // applications - computed: true, optional: false, required: false
  public get applications() {
    return cdktf.Fn.tolist(this.getListAttribute('applications'));
  }

  // lucene - computed: true, optional: false, required: false
  public get lucene() {
    return this.getStringAttribute('lucene');
  }

  // services - computed: true, optional: false, required: false
  public get services() {
    return cdktf.Fn.tolist(this.getListAttribute('services'));
  }

  // subsystems - computed: true, optional: false, required: false
  public get subsystems() {
    return cdktf.Fn.tolist(this.getListAttribute('subsystems'));
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.0/docs/data-sources/events2metric coralogix_events2metric}
*/
export class DataCoralogixEvents2Metric extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "coralogix_events2metric";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCoralogixEvents2Metric resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCoralogixEvents2Metric to import
  * @param importFromId The id of the existing DataCoralogixEvents2Metric that should be imported. Refer to the {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.0/docs/data-sources/events2metric#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCoralogixEvents2Metric to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "coralogix_events2metric", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.0/docs/data-sources/events2metric coralogix_events2metric} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCoralogixEvents2MetricConfig
  */
  public constructor(scope: Construct, id: string, config: DataCoralogixEvents2MetricConfig) {
    super(scope, id, {
      terraformResourceType: 'coralogix_events2metric',
      terraformGeneratorMetadata: {
        providerName: 'coralogix',
        providerVersion: '3.0.0',
        providerVersionConstraint: '3.0.0'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // logs_query - computed: true, optional: false, required: false
  private _logsQuery = new DataCoralogixEvents2MetricLogsQueryOutputReference(this, "logs_query");
  public get logsQuery() {
    return this._logsQuery;
  }

  // metric_fields - computed: true, optional: false, required: false
  private _metricFields = new DataCoralogixEvents2MetricMetricFieldsMap(this, "metric_fields");
  public get metricFields() {
    return this._metricFields;
  }

  // metric_labels - computed: true, optional: false, required: false
  private _metricLabels = new cdktf.StringMap(this, "metric_labels");
  public get metricLabels() {
    return this._metricLabels;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // permutations - computed: true, optional: false, required: false
  private _permutations = new DataCoralogixEvents2MetricPermutationsOutputReference(this, "permutations");
  public get permutations() {
    return this._permutations;
  }

  // spans_query - computed: true, optional: false, required: false
  private _spansQuery = new DataCoralogixEvents2MetricSpansQueryOutputReference(this, "spans_query");
  public get spansQuery() {
    return this._spansQuery;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
