// https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/metrics_search
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MetricsSearchConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/metrics_search#description MetricsSearch#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/metrics_search#desired_quantization_in_secs MetricsSearch#desired_quantization_in_secs}
  */
  readonly desiredQuantizationInSecs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/metrics_search#id MetricsSearch#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/metrics_search#log_query MetricsSearch#log_query}
  */
  readonly logQuery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/metrics_search#parent_id MetricsSearch#parent_id}
  */
  readonly parentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/metrics_search#title MetricsSearch#title}
  */
  readonly title: string;
  /**
  * metrics_queries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/metrics_search#metrics_queries MetricsSearch#metrics_queries}
  */
  readonly metricsQueries: MetricsSearchMetricsQueries[] | cdktf.IResolvable;
  /**
  * time_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/metrics_search#time_range MetricsSearch#time_range}
  */
  readonly timeRange: MetricsSearchTimeRange;
}
export interface MetricsSearchMetricsQueries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/metrics_search#query MetricsSearch#query}
  */
  readonly query: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/metrics_search#row_id MetricsSearch#row_id}
  */
  readonly rowId: string;
}

export function metricsSearchMetricsQueriesToTerraform(struct?: MetricsSearchMetricsQueries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query: cdktf.stringToTerraform(struct!.query),
    row_id: cdktf.stringToTerraform(struct!.rowId),
  }
}


export function metricsSearchMetricsQueriesToHclTerraform(struct?: MetricsSearchMetricsQueries | cdktf.IResolvable): any {
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
    row_id: {
      value: cdktf.stringToHclTerraform(struct!.rowId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MetricsSearchMetricsQueriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MetricsSearchMetricsQueries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._rowId !== undefined) {
      hasAnyValues = true;
      internalValueResult.rowId = this._rowId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricsSearchMetricsQueries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._query = undefined;
      this._rowId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._query = value.query;
      this._rowId = value.rowId;
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

  // row_id - computed: false, optional: false, required: true
  private _rowId?: string; 
  public get rowId() {
    return this.getStringAttribute('row_id');
  }
  public set rowId(value: string) {
    this._rowId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rowIdInput() {
    return this._rowId;
  }
}

export class MetricsSearchMetricsQueriesList extends cdktf.ComplexList {
  public internalValue? : MetricsSearchMetricsQueries[] | cdktf.IResolvable

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
  public get(index: number): MetricsSearchMetricsQueriesOutputReference {
    return new MetricsSearchMetricsQueriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MetricsSearchTimeRangeBeginBoundedTimeRangeFromEpochTimeRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/metrics_search#epoch_millis MetricsSearch#epoch_millis}
  */
  readonly epochMillis: number;
}

export function metricsSearchTimeRangeBeginBoundedTimeRangeFromEpochTimeRangeToTerraform(struct?: MetricsSearchTimeRangeBeginBoundedTimeRangeFromEpochTimeRangeOutputReference | MetricsSearchTimeRangeBeginBoundedTimeRangeFromEpochTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    epoch_millis: cdktf.numberToTerraform(struct!.epochMillis),
  }
}


export function metricsSearchTimeRangeBeginBoundedTimeRangeFromEpochTimeRangeToHclTerraform(struct?: MetricsSearchTimeRangeBeginBoundedTimeRangeFromEpochTimeRangeOutputReference | MetricsSearchTimeRangeBeginBoundedTimeRangeFromEpochTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    epoch_millis: {
      value: cdktf.numberToHclTerraform(struct!.epochMillis),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MetricsSearchTimeRangeBeginBoundedTimeRangeFromEpochTimeRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MetricsSearchTimeRangeBeginBoundedTimeRangeFromEpochTimeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._epochMillis !== undefined) {
      hasAnyValues = true;
      internalValueResult.epochMillis = this._epochMillis;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricsSearchTimeRangeBeginBoundedTimeRangeFromEpochTimeRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._epochMillis = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._epochMillis = value.epochMillis;
    }
  }

  // epoch_millis - computed: false, optional: false, required: true
  private _epochMillis?: number; 
  public get epochMillis() {
    return this.getNumberAttribute('epoch_millis');
  }
  public set epochMillis(value: number) {
    this._epochMillis = value;
  }
  // Temporarily expose input value. Use with caution.
  public get epochMillisInput() {
    return this._epochMillis;
  }
}
export interface MetricsSearchTimeRangeBeginBoundedTimeRangeFromIso8601TimeRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/metrics_search#iso8601_time MetricsSearch#iso8601_time}
  */
  readonly iso8601Time: string;
}

export function metricsSearchTimeRangeBeginBoundedTimeRangeFromIso8601TimeRangeToTerraform(struct?: MetricsSearchTimeRangeBeginBoundedTimeRangeFromIso8601TimeRangeOutputReference | MetricsSearchTimeRangeBeginBoundedTimeRangeFromIso8601TimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iso8601_time: cdktf.stringToTerraform(struct!.iso8601Time),
  }
}


export function metricsSearchTimeRangeBeginBoundedTimeRangeFromIso8601TimeRangeToHclTerraform(struct?: MetricsSearchTimeRangeBeginBoundedTimeRangeFromIso8601TimeRangeOutputReference | MetricsSearchTimeRangeBeginBoundedTimeRangeFromIso8601TimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    iso8601_time: {
      value: cdktf.stringToHclTerraform(struct!.iso8601Time),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MetricsSearchTimeRangeBeginBoundedTimeRangeFromIso8601TimeRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MetricsSearchTimeRangeBeginBoundedTimeRangeFromIso8601TimeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iso8601Time !== undefined) {
      hasAnyValues = true;
      internalValueResult.iso8601Time = this._iso8601Time;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricsSearchTimeRangeBeginBoundedTimeRangeFromIso8601TimeRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._iso8601Time = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._iso8601Time = value.iso8601Time;
    }
  }

  // iso8601_time - computed: false, optional: false, required: true
  private _iso8601Time?: string; 
  public get iso8601Time() {
    return this.getStringAttribute('iso8601_time');
  }
  public set iso8601Time(value: string) {
    this._iso8601Time = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iso8601TimeInput() {
    return this._iso8601Time;
  }
}
export interface MetricsSearchTimeRangeBeginBoundedTimeRangeFromLiteralTimeRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/metrics_search#range_name MetricsSearch#range_name}
  */
  readonly rangeName: string;
}

export function metricsSearchTimeRangeBeginBoundedTimeRangeFromLiteralTimeRangeToTerraform(struct?: MetricsSearchTimeRangeBeginBoundedTimeRangeFromLiteralTimeRangeOutputReference | MetricsSearchTimeRangeBeginBoundedTimeRangeFromLiteralTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    range_name: cdktf.stringToTerraform(struct!.rangeName),
  }
}


export function metricsSearchTimeRangeBeginBoundedTimeRangeFromLiteralTimeRangeToHclTerraform(struct?: MetricsSearchTimeRangeBeginBoundedTimeRangeFromLiteralTimeRangeOutputReference | MetricsSearchTimeRangeBeginBoundedTimeRangeFromLiteralTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    range_name: {
      value: cdktf.stringToHclTerraform(struct!.rangeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MetricsSearchTimeRangeBeginBoundedTimeRangeFromLiteralTimeRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MetricsSearchTimeRangeBeginBoundedTimeRangeFromLiteralTimeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rangeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeName = this._rangeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricsSearchTimeRangeBeginBoundedTimeRangeFromLiteralTimeRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rangeName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rangeName = value.rangeName;
    }
  }

  // range_name - computed: false, optional: false, required: true
  private _rangeName?: string; 
  public get rangeName() {
    return this.getStringAttribute('range_name');
  }
  public set rangeName(value: string) {
    this._rangeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeNameInput() {
    return this._rangeName;
  }
}
export interface MetricsSearchTimeRangeBeginBoundedTimeRangeFromRelativeTimeRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/metrics_search#relative_time MetricsSearch#relative_time}
  */
  readonly relativeTime: string;
}

export function metricsSearchTimeRangeBeginBoundedTimeRangeFromRelativeTimeRangeToTerraform(struct?: MetricsSearchTimeRangeBeginBoundedTimeRangeFromRelativeTimeRangeOutputReference | MetricsSearchTimeRangeBeginBoundedTimeRangeFromRelativeTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    relative_time: cdktf.stringToTerraform(struct!.relativeTime),
  }
}


export function metricsSearchTimeRangeBeginBoundedTimeRangeFromRelativeTimeRangeToHclTerraform(struct?: MetricsSearchTimeRangeBeginBoundedTimeRangeFromRelativeTimeRangeOutputReference | MetricsSearchTimeRangeBeginBoundedTimeRangeFromRelativeTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    relative_time: {
      value: cdktf.stringToHclTerraform(struct!.relativeTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MetricsSearchTimeRangeBeginBoundedTimeRangeFromRelativeTimeRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MetricsSearchTimeRangeBeginBoundedTimeRangeFromRelativeTimeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._relativeTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.relativeTime = this._relativeTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricsSearchTimeRangeBeginBoundedTimeRangeFromRelativeTimeRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._relativeTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._relativeTime = value.relativeTime;
    }
  }

  // relative_time - computed: false, optional: false, required: true
  private _relativeTime?: string; 
  public get relativeTime() {
    return this.getStringAttribute('relative_time');
  }
  public set relativeTime(value: string) {
    this._relativeTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeTimeInput() {
    return this._relativeTime;
  }
}
export interface MetricsSearchTimeRangeBeginBoundedTimeRangeFrom {
  /**
  * epoch_time_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/metrics_search#epoch_time_range MetricsSearch#epoch_time_range}
  */
  readonly epochTimeRange?: MetricsSearchTimeRangeBeginBoundedTimeRangeFromEpochTimeRange;
  /**
  * iso8601_time_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/metrics_search#iso8601_time_range MetricsSearch#iso8601_time_range}
  */
  readonly iso8601TimeRange?: MetricsSearchTimeRangeBeginBoundedTimeRangeFromIso8601TimeRange;
  /**
  * literal_time_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/metrics_search#literal_time_range MetricsSearch#literal_time_range}
  */
  readonly literalTimeRange?: MetricsSearchTimeRangeBeginBoundedTimeRangeFromLiteralTimeRange;
  /**
  * relative_time_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/metrics_search#relative_time_range MetricsSearch#relative_time_range}
  */
  readonly relativeTimeRange?: MetricsSearchTimeRangeBeginBoundedTimeRangeFromRelativeTimeRange;
}

export function metricsSearchTimeRangeBeginBoundedTimeRangeFromToTerraform(struct?: MetricsSearchTimeRangeBeginBoundedTimeRangeFromOutputReference | MetricsSearchTimeRangeBeginBoundedTimeRangeFrom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    epoch_time_range: metricsSearchTimeRangeBeginBoundedTimeRangeFromEpochTimeRangeToTerraform(struct!.epochTimeRange),
    iso8601_time_range: metricsSearchTimeRangeBeginBoundedTimeRangeFromIso8601TimeRangeToTerraform(struct!.iso8601TimeRange),
    literal_time_range: metricsSearchTimeRangeBeginBoundedTimeRangeFromLiteralTimeRangeToTerraform(struct!.literalTimeRange),
    relative_time_range: metricsSearchTimeRangeBeginBoundedTimeRangeFromRelativeTimeRangeToTerraform(struct!.relativeTimeRange),
  }
}


export function metricsSearchTimeRangeBeginBoundedTimeRangeFromToHclTerraform(struct?: MetricsSearchTimeRangeBeginBoundedTimeRangeFromOutputReference | MetricsSearchTimeRangeBeginBoundedTimeRangeFrom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    epoch_time_range: {
      value: metricsSearchTimeRangeBeginBoundedTimeRangeFromEpochTimeRangeToHclTerraform(struct!.epochTimeRange),
      isBlock: true,
      type: "list",
      storageClassType: "MetricsSearchTimeRangeBeginBoundedTimeRangeFromEpochTimeRangeList",
    },
    iso8601_time_range: {
      value: metricsSearchTimeRangeBeginBoundedTimeRangeFromIso8601TimeRangeToHclTerraform(struct!.iso8601TimeRange),
      isBlock: true,
      type: "list",
      storageClassType: "MetricsSearchTimeRangeBeginBoundedTimeRangeFromIso8601TimeRangeList",
    },
    literal_time_range: {
      value: metricsSearchTimeRangeBeginBoundedTimeRangeFromLiteralTimeRangeToHclTerraform(struct!.literalTimeRange),
      isBlock: true,
      type: "list",
      storageClassType: "MetricsSearchTimeRangeBeginBoundedTimeRangeFromLiteralTimeRangeList",
    },
    relative_time_range: {
      value: metricsSearchTimeRangeBeginBoundedTimeRangeFromRelativeTimeRangeToHclTerraform(struct!.relativeTimeRange),
      isBlock: true,
      type: "list",
      storageClassType: "MetricsSearchTimeRangeBeginBoundedTimeRangeFromRelativeTimeRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MetricsSearchTimeRangeBeginBoundedTimeRangeFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MetricsSearchTimeRangeBeginBoundedTimeRangeFrom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._epochTimeRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.epochTimeRange = this._epochTimeRange?.internalValue;
    }
    if (this._iso8601TimeRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iso8601TimeRange = this._iso8601TimeRange?.internalValue;
    }
    if (this._literalTimeRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.literalTimeRange = this._literalTimeRange?.internalValue;
    }
    if (this._relativeTimeRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.relativeTimeRange = this._relativeTimeRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricsSearchTimeRangeBeginBoundedTimeRangeFrom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._epochTimeRange.internalValue = undefined;
      this._iso8601TimeRange.internalValue = undefined;
      this._literalTimeRange.internalValue = undefined;
      this._relativeTimeRange.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._epochTimeRange.internalValue = value.epochTimeRange;
      this._iso8601TimeRange.internalValue = value.iso8601TimeRange;
      this._literalTimeRange.internalValue = value.literalTimeRange;
      this._relativeTimeRange.internalValue = value.relativeTimeRange;
    }
  }

  // epoch_time_range - computed: false, optional: true, required: false
  private _epochTimeRange = new MetricsSearchTimeRangeBeginBoundedTimeRangeFromEpochTimeRangeOutputReference(this, "epoch_time_range");
  public get epochTimeRange() {
    return this._epochTimeRange;
  }
  public putEpochTimeRange(value: MetricsSearchTimeRangeBeginBoundedTimeRangeFromEpochTimeRange) {
    this._epochTimeRange.internalValue = value;
  }
  public resetEpochTimeRange() {
    this._epochTimeRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get epochTimeRangeInput() {
    return this._epochTimeRange.internalValue;
  }

  // iso8601_time_range - computed: false, optional: true, required: false
  private _iso8601TimeRange = new MetricsSearchTimeRangeBeginBoundedTimeRangeFromIso8601TimeRangeOutputReference(this, "iso8601_time_range");
  public get iso8601TimeRange() {
    return this._iso8601TimeRange;
  }
  public putIso8601TimeRange(value: MetricsSearchTimeRangeBeginBoundedTimeRangeFromIso8601TimeRange) {
    this._iso8601TimeRange.internalValue = value;
  }
  public resetIso8601TimeRange() {
    this._iso8601TimeRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iso8601TimeRangeInput() {
    return this._iso8601TimeRange.internalValue;
  }

  // literal_time_range - computed: false, optional: true, required: false
  private _literalTimeRange = new MetricsSearchTimeRangeBeginBoundedTimeRangeFromLiteralTimeRangeOutputReference(this, "literal_time_range");
  public get literalTimeRange() {
    return this._literalTimeRange;
  }
  public putLiteralTimeRange(value: MetricsSearchTimeRangeBeginBoundedTimeRangeFromLiteralTimeRange) {
    this._literalTimeRange.internalValue = value;
  }
  public resetLiteralTimeRange() {
    this._literalTimeRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalTimeRangeInput() {
    return this._literalTimeRange.internalValue;
  }

  // relative_time_range - computed: false, optional: true, required: false
  private _relativeTimeRange = new MetricsSearchTimeRangeBeginBoundedTimeRangeFromRelativeTimeRangeOutputReference(this, "relative_time_range");
  public get relativeTimeRange() {
    return this._relativeTimeRange;
  }
  public putRelativeTimeRange(value: MetricsSearchTimeRangeBeginBoundedTimeRangeFromRelativeTimeRange) {
    this._relativeTimeRange.internalValue = value;
  }
  public resetRelativeTimeRange() {
    this._relativeTimeRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeTimeRangeInput() {
    return this._relativeTimeRange.internalValue;
  }
}
export interface MetricsSearchTimeRangeBeginBoundedTimeRangeToEpochTimeRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/metrics_search#epoch_millis MetricsSearch#epoch_millis}
  */
  readonly epochMillis: number;
}

export function metricsSearchTimeRangeBeginBoundedTimeRangeToEpochTimeRangeToTerraform(struct?: MetricsSearchTimeRangeBeginBoundedTimeRangeToEpochTimeRangeOutputReference | MetricsSearchTimeRangeBeginBoundedTimeRangeToEpochTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    epoch_millis: cdktf.numberToTerraform(struct!.epochMillis),
  }
}


export function metricsSearchTimeRangeBeginBoundedTimeRangeToEpochTimeRangeToHclTerraform(struct?: MetricsSearchTimeRangeBeginBoundedTimeRangeToEpochTimeRangeOutputReference | MetricsSearchTimeRangeBeginBoundedTimeRangeToEpochTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    epoch_millis: {
      value: cdktf.numberToHclTerraform(struct!.epochMillis),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MetricsSearchTimeRangeBeginBoundedTimeRangeToEpochTimeRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MetricsSearchTimeRangeBeginBoundedTimeRangeToEpochTimeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._epochMillis !== undefined) {
      hasAnyValues = true;
      internalValueResult.epochMillis = this._epochMillis;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricsSearchTimeRangeBeginBoundedTimeRangeToEpochTimeRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._epochMillis = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._epochMillis = value.epochMillis;
    }
  }

  // epoch_millis - computed: false, optional: false, required: true
  private _epochMillis?: number; 
  public get epochMillis() {
    return this.getNumberAttribute('epoch_millis');
  }
  public set epochMillis(value: number) {
    this._epochMillis = value;
  }
  // Temporarily expose input value. Use with caution.
  public get epochMillisInput() {
    return this._epochMillis;
  }
}
export interface MetricsSearchTimeRangeBeginBoundedTimeRangeToIso8601TimeRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/metrics_search#iso8601_time MetricsSearch#iso8601_time}
  */
  readonly iso8601Time: string;
}

export function metricsSearchTimeRangeBeginBoundedTimeRangeToIso8601TimeRangeToTerraform(struct?: MetricsSearchTimeRangeBeginBoundedTimeRangeToIso8601TimeRangeOutputReference | MetricsSearchTimeRangeBeginBoundedTimeRangeToIso8601TimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iso8601_time: cdktf.stringToTerraform(struct!.iso8601Time),
  }
}


export function metricsSearchTimeRangeBeginBoundedTimeRangeToIso8601TimeRangeToHclTerraform(struct?: MetricsSearchTimeRangeBeginBoundedTimeRangeToIso8601TimeRangeOutputReference | MetricsSearchTimeRangeBeginBoundedTimeRangeToIso8601TimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    iso8601_time: {
      value: cdktf.stringToHclTerraform(struct!.iso8601Time),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MetricsSearchTimeRangeBeginBoundedTimeRangeToIso8601TimeRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MetricsSearchTimeRangeBeginBoundedTimeRangeToIso8601TimeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iso8601Time !== undefined) {
      hasAnyValues = true;
      internalValueResult.iso8601Time = this._iso8601Time;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricsSearchTimeRangeBeginBoundedTimeRangeToIso8601TimeRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._iso8601Time = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._iso8601Time = value.iso8601Time;
    }
  }

  // iso8601_time - computed: false, optional: false, required: true
  private _iso8601Time?: string; 
  public get iso8601Time() {
    return this.getStringAttribute('iso8601_time');
  }
  public set iso8601Time(value: string) {
    this._iso8601Time = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iso8601TimeInput() {
    return this._iso8601Time;
  }
}
export interface MetricsSearchTimeRangeBeginBoundedTimeRangeToLiteralTimeRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/metrics_search#range_name MetricsSearch#range_name}
  */
  readonly rangeName: string;
}

export function metricsSearchTimeRangeBeginBoundedTimeRangeToLiteralTimeRangeToTerraform(struct?: MetricsSearchTimeRangeBeginBoundedTimeRangeToLiteralTimeRangeOutputReference | MetricsSearchTimeRangeBeginBoundedTimeRangeToLiteralTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    range_name: cdktf.stringToTerraform(struct!.rangeName),
  }
}


export function metricsSearchTimeRangeBeginBoundedTimeRangeToLiteralTimeRangeToHclTerraform(struct?: MetricsSearchTimeRangeBeginBoundedTimeRangeToLiteralTimeRangeOutputReference | MetricsSearchTimeRangeBeginBoundedTimeRangeToLiteralTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    range_name: {
      value: cdktf.stringToHclTerraform(struct!.rangeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MetricsSearchTimeRangeBeginBoundedTimeRangeToLiteralTimeRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MetricsSearchTimeRangeBeginBoundedTimeRangeToLiteralTimeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rangeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeName = this._rangeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricsSearchTimeRangeBeginBoundedTimeRangeToLiteralTimeRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rangeName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rangeName = value.rangeName;
    }
  }

  // range_name - computed: false, optional: false, required: true
  private _rangeName?: string; 
  public get rangeName() {
    return this.getStringAttribute('range_name');
  }
  public set rangeName(value: string) {
    this._rangeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeNameInput() {
    return this._rangeName;
  }
}
export interface MetricsSearchTimeRangeBeginBoundedTimeRangeToRelativeTimeRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/metrics_search#relative_time MetricsSearch#relative_time}
  */
  readonly relativeTime: string;
}

export function metricsSearchTimeRangeBeginBoundedTimeRangeToRelativeTimeRangeToTerraform(struct?: MetricsSearchTimeRangeBeginBoundedTimeRangeToRelativeTimeRangeOutputReference | MetricsSearchTimeRangeBeginBoundedTimeRangeToRelativeTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    relative_time: cdktf.stringToTerraform(struct!.relativeTime),
  }
}


export function metricsSearchTimeRangeBeginBoundedTimeRangeToRelativeTimeRangeToHclTerraform(struct?: MetricsSearchTimeRangeBeginBoundedTimeRangeToRelativeTimeRangeOutputReference | MetricsSearchTimeRangeBeginBoundedTimeRangeToRelativeTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    relative_time: {
      value: cdktf.stringToHclTerraform(struct!.relativeTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MetricsSearchTimeRangeBeginBoundedTimeRangeToRelativeTimeRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MetricsSearchTimeRangeBeginBoundedTimeRangeToRelativeTimeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._relativeTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.relativeTime = this._relativeTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricsSearchTimeRangeBeginBoundedTimeRangeToRelativeTimeRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._relativeTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._relativeTime = value.relativeTime;
    }
  }

  // relative_time - computed: false, optional: false, required: true
  private _relativeTime?: string; 
  public get relativeTime() {
    return this.getStringAttribute('relative_time');
  }
  public set relativeTime(value: string) {
    this._relativeTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeTimeInput() {
    return this._relativeTime;
  }
}
export interface MetricsSearchTimeRangeBeginBoundedTimeRangeTo {
  /**
  * epoch_time_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/metrics_search#epoch_time_range MetricsSearch#epoch_time_range}
  */
  readonly epochTimeRange?: MetricsSearchTimeRangeBeginBoundedTimeRangeToEpochTimeRange;
  /**
  * iso8601_time_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/metrics_search#iso8601_time_range MetricsSearch#iso8601_time_range}
  */
  readonly iso8601TimeRange?: MetricsSearchTimeRangeBeginBoundedTimeRangeToIso8601TimeRange;
  /**
  * literal_time_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/metrics_search#literal_time_range MetricsSearch#literal_time_range}
  */
  readonly literalTimeRange?: MetricsSearchTimeRangeBeginBoundedTimeRangeToLiteralTimeRange;
  /**
  * relative_time_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/metrics_search#relative_time_range MetricsSearch#relative_time_range}
  */
  readonly relativeTimeRange?: MetricsSearchTimeRangeBeginBoundedTimeRangeToRelativeTimeRange;
}

export function metricsSearchTimeRangeBeginBoundedTimeRangeToToTerraform(struct?: MetricsSearchTimeRangeBeginBoundedTimeRangeToOutputReference | MetricsSearchTimeRangeBeginBoundedTimeRangeTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    epoch_time_range: metricsSearchTimeRangeBeginBoundedTimeRangeToEpochTimeRangeToTerraform(struct!.epochTimeRange),
    iso8601_time_range: metricsSearchTimeRangeBeginBoundedTimeRangeToIso8601TimeRangeToTerraform(struct!.iso8601TimeRange),
    literal_time_range: metricsSearchTimeRangeBeginBoundedTimeRangeToLiteralTimeRangeToTerraform(struct!.literalTimeRange),
    relative_time_range: metricsSearchTimeRangeBeginBoundedTimeRangeToRelativeTimeRangeToTerraform(struct!.relativeTimeRange),
  }
}


export function metricsSearchTimeRangeBeginBoundedTimeRangeToToHclTerraform(struct?: MetricsSearchTimeRangeBeginBoundedTimeRangeToOutputReference | MetricsSearchTimeRangeBeginBoundedTimeRangeTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    epoch_time_range: {
      value: metricsSearchTimeRangeBeginBoundedTimeRangeToEpochTimeRangeToHclTerraform(struct!.epochTimeRange),
      isBlock: true,
      type: "list",
      storageClassType: "MetricsSearchTimeRangeBeginBoundedTimeRangeToEpochTimeRangeList",
    },
    iso8601_time_range: {
      value: metricsSearchTimeRangeBeginBoundedTimeRangeToIso8601TimeRangeToHclTerraform(struct!.iso8601TimeRange),
      isBlock: true,
      type: "list",
      storageClassType: "MetricsSearchTimeRangeBeginBoundedTimeRangeToIso8601TimeRangeList",
    },
    literal_time_range: {
      value: metricsSearchTimeRangeBeginBoundedTimeRangeToLiteralTimeRangeToHclTerraform(struct!.literalTimeRange),
      isBlock: true,
      type: "list",
      storageClassType: "MetricsSearchTimeRangeBeginBoundedTimeRangeToLiteralTimeRangeList",
    },
    relative_time_range: {
      value: metricsSearchTimeRangeBeginBoundedTimeRangeToRelativeTimeRangeToHclTerraform(struct!.relativeTimeRange),
      isBlock: true,
      type: "list",
      storageClassType: "MetricsSearchTimeRangeBeginBoundedTimeRangeToRelativeTimeRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MetricsSearchTimeRangeBeginBoundedTimeRangeToOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MetricsSearchTimeRangeBeginBoundedTimeRangeTo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._epochTimeRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.epochTimeRange = this._epochTimeRange?.internalValue;
    }
    if (this._iso8601TimeRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iso8601TimeRange = this._iso8601TimeRange?.internalValue;
    }
    if (this._literalTimeRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.literalTimeRange = this._literalTimeRange?.internalValue;
    }
    if (this._relativeTimeRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.relativeTimeRange = this._relativeTimeRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricsSearchTimeRangeBeginBoundedTimeRangeTo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._epochTimeRange.internalValue = undefined;
      this._iso8601TimeRange.internalValue = undefined;
      this._literalTimeRange.internalValue = undefined;
      this._relativeTimeRange.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._epochTimeRange.internalValue = value.epochTimeRange;
      this._iso8601TimeRange.internalValue = value.iso8601TimeRange;
      this._literalTimeRange.internalValue = value.literalTimeRange;
      this._relativeTimeRange.internalValue = value.relativeTimeRange;
    }
  }

  // epoch_time_range - computed: false, optional: true, required: false
  private _epochTimeRange = new MetricsSearchTimeRangeBeginBoundedTimeRangeToEpochTimeRangeOutputReference(this, "epoch_time_range");
  public get epochTimeRange() {
    return this._epochTimeRange;
  }
  public putEpochTimeRange(value: MetricsSearchTimeRangeBeginBoundedTimeRangeToEpochTimeRange) {
    this._epochTimeRange.internalValue = value;
  }
  public resetEpochTimeRange() {
    this._epochTimeRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get epochTimeRangeInput() {
    return this._epochTimeRange.internalValue;
  }

  // iso8601_time_range - computed: false, optional: true, required: false
  private _iso8601TimeRange = new MetricsSearchTimeRangeBeginBoundedTimeRangeToIso8601TimeRangeOutputReference(this, "iso8601_time_range");
  public get iso8601TimeRange() {
    return this._iso8601TimeRange;
  }
  public putIso8601TimeRange(value: MetricsSearchTimeRangeBeginBoundedTimeRangeToIso8601TimeRange) {
    this._iso8601TimeRange.internalValue = value;
  }
  public resetIso8601TimeRange() {
    this._iso8601TimeRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iso8601TimeRangeInput() {
    return this._iso8601TimeRange.internalValue;
  }

  // literal_time_range - computed: false, optional: true, required: false
  private _literalTimeRange = new MetricsSearchTimeRangeBeginBoundedTimeRangeToLiteralTimeRangeOutputReference(this, "literal_time_range");
  public get literalTimeRange() {
    return this._literalTimeRange;
  }
  public putLiteralTimeRange(value: MetricsSearchTimeRangeBeginBoundedTimeRangeToLiteralTimeRange) {
    this._literalTimeRange.internalValue = value;
  }
  public resetLiteralTimeRange() {
    this._literalTimeRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalTimeRangeInput() {
    return this._literalTimeRange.internalValue;
  }

  // relative_time_range - computed: false, optional: true, required: false
  private _relativeTimeRange = new MetricsSearchTimeRangeBeginBoundedTimeRangeToRelativeTimeRangeOutputReference(this, "relative_time_range");
  public get relativeTimeRange() {
    return this._relativeTimeRange;
  }
  public putRelativeTimeRange(value: MetricsSearchTimeRangeBeginBoundedTimeRangeToRelativeTimeRange) {
    this._relativeTimeRange.internalValue = value;
  }
  public resetRelativeTimeRange() {
    this._relativeTimeRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeTimeRangeInput() {
    return this._relativeTimeRange.internalValue;
  }
}
export interface MetricsSearchTimeRangeBeginBoundedTimeRange {
  /**
  * from block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/metrics_search#from MetricsSearch#from}
  */
  readonly from: MetricsSearchTimeRangeBeginBoundedTimeRangeFrom;
  /**
  * to block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/metrics_search#to MetricsSearch#to}
  */
  readonly to?: MetricsSearchTimeRangeBeginBoundedTimeRangeTo;
}

export function metricsSearchTimeRangeBeginBoundedTimeRangeToTerraform(struct?: MetricsSearchTimeRangeBeginBoundedTimeRangeOutputReference | MetricsSearchTimeRangeBeginBoundedTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: metricsSearchTimeRangeBeginBoundedTimeRangeFromToTerraform(struct!.from),
    to: metricsSearchTimeRangeBeginBoundedTimeRangeToToTerraform(struct!.to),
  }
}


export function metricsSearchTimeRangeBeginBoundedTimeRangeToHclTerraform(struct?: MetricsSearchTimeRangeBeginBoundedTimeRangeOutputReference | MetricsSearchTimeRangeBeginBoundedTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: metricsSearchTimeRangeBeginBoundedTimeRangeFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "list",
      storageClassType: "MetricsSearchTimeRangeBeginBoundedTimeRangeFromList",
    },
    to: {
      value: metricsSearchTimeRangeBeginBoundedTimeRangeToToHclTerraform(struct!.to),
      isBlock: true,
      type: "list",
      storageClassType: "MetricsSearchTimeRangeBeginBoundedTimeRangeToList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MetricsSearchTimeRangeBeginBoundedTimeRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MetricsSearchTimeRangeBeginBoundedTimeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from?.internalValue;
    }
    if (this._to?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricsSearchTimeRangeBeginBoundedTimeRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._from.internalValue = undefined;
      this._to.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._from.internalValue = value.from;
      this._to.internalValue = value.to;
    }
  }

  // from - computed: false, optional: false, required: true
  private _from = new MetricsSearchTimeRangeBeginBoundedTimeRangeFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: MetricsSearchTimeRangeBeginBoundedTimeRangeFrom) {
    this._from.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from.internalValue;
  }

  // to - computed: false, optional: true, required: false
  private _to = new MetricsSearchTimeRangeBeginBoundedTimeRangeToOutputReference(this, "to");
  public get to() {
    return this._to;
  }
  public putTo(value: MetricsSearchTimeRangeBeginBoundedTimeRangeTo) {
    this._to.internalValue = value;
  }
  public resetTo() {
    this._to.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to.internalValue;
  }
}
export interface MetricsSearchTimeRangeCompleteLiteralTimeRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/metrics_search#range_name MetricsSearch#range_name}
  */
  readonly rangeName: string;
}

export function metricsSearchTimeRangeCompleteLiteralTimeRangeToTerraform(struct?: MetricsSearchTimeRangeCompleteLiteralTimeRangeOutputReference | MetricsSearchTimeRangeCompleteLiteralTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    range_name: cdktf.stringToTerraform(struct!.rangeName),
  }
}


export function metricsSearchTimeRangeCompleteLiteralTimeRangeToHclTerraform(struct?: MetricsSearchTimeRangeCompleteLiteralTimeRangeOutputReference | MetricsSearchTimeRangeCompleteLiteralTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    range_name: {
      value: cdktf.stringToHclTerraform(struct!.rangeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MetricsSearchTimeRangeCompleteLiteralTimeRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MetricsSearchTimeRangeCompleteLiteralTimeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rangeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeName = this._rangeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricsSearchTimeRangeCompleteLiteralTimeRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rangeName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rangeName = value.rangeName;
    }
  }

  // range_name - computed: false, optional: false, required: true
  private _rangeName?: string; 
  public get rangeName() {
    return this.getStringAttribute('range_name');
  }
  public set rangeName(value: string) {
    this._rangeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeNameInput() {
    return this._rangeName;
  }
}
export interface MetricsSearchTimeRange {
  /**
  * begin_bounded_time_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/metrics_search#begin_bounded_time_range MetricsSearch#begin_bounded_time_range}
  */
  readonly beginBoundedTimeRange?: MetricsSearchTimeRangeBeginBoundedTimeRange;
  /**
  * complete_literal_time_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/metrics_search#complete_literal_time_range MetricsSearch#complete_literal_time_range}
  */
  readonly completeLiteralTimeRange?: MetricsSearchTimeRangeCompleteLiteralTimeRange;
}

export function metricsSearchTimeRangeToTerraform(struct?: MetricsSearchTimeRangeOutputReference | MetricsSearchTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    begin_bounded_time_range: metricsSearchTimeRangeBeginBoundedTimeRangeToTerraform(struct!.beginBoundedTimeRange),
    complete_literal_time_range: metricsSearchTimeRangeCompleteLiteralTimeRangeToTerraform(struct!.completeLiteralTimeRange),
  }
}


export function metricsSearchTimeRangeToHclTerraform(struct?: MetricsSearchTimeRangeOutputReference | MetricsSearchTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    begin_bounded_time_range: {
      value: metricsSearchTimeRangeBeginBoundedTimeRangeToHclTerraform(struct!.beginBoundedTimeRange),
      isBlock: true,
      type: "list",
      storageClassType: "MetricsSearchTimeRangeBeginBoundedTimeRangeList",
    },
    complete_literal_time_range: {
      value: metricsSearchTimeRangeCompleteLiteralTimeRangeToHclTerraform(struct!.completeLiteralTimeRange),
      isBlock: true,
      type: "list",
      storageClassType: "MetricsSearchTimeRangeCompleteLiteralTimeRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MetricsSearchTimeRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MetricsSearchTimeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._beginBoundedTimeRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.beginBoundedTimeRange = this._beginBoundedTimeRange?.internalValue;
    }
    if (this._completeLiteralTimeRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.completeLiteralTimeRange = this._completeLiteralTimeRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricsSearchTimeRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._beginBoundedTimeRange.internalValue = undefined;
      this._completeLiteralTimeRange.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._beginBoundedTimeRange.internalValue = value.beginBoundedTimeRange;
      this._completeLiteralTimeRange.internalValue = value.completeLiteralTimeRange;
    }
  }

  // begin_bounded_time_range - computed: false, optional: true, required: false
  private _beginBoundedTimeRange = new MetricsSearchTimeRangeBeginBoundedTimeRangeOutputReference(this, "begin_bounded_time_range");
  public get beginBoundedTimeRange() {
    return this._beginBoundedTimeRange;
  }
  public putBeginBoundedTimeRange(value: MetricsSearchTimeRangeBeginBoundedTimeRange) {
    this._beginBoundedTimeRange.internalValue = value;
  }
  public resetBeginBoundedTimeRange() {
    this._beginBoundedTimeRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beginBoundedTimeRangeInput() {
    return this._beginBoundedTimeRange.internalValue;
  }

  // complete_literal_time_range - computed: false, optional: true, required: false
  private _completeLiteralTimeRange = new MetricsSearchTimeRangeCompleteLiteralTimeRangeOutputReference(this, "complete_literal_time_range");
  public get completeLiteralTimeRange() {
    return this._completeLiteralTimeRange;
  }
  public putCompleteLiteralTimeRange(value: MetricsSearchTimeRangeCompleteLiteralTimeRange) {
    this._completeLiteralTimeRange.internalValue = value;
  }
  public resetCompleteLiteralTimeRange() {
    this._completeLiteralTimeRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get completeLiteralTimeRangeInput() {
    return this._completeLiteralTimeRange.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/metrics_search sumologic_metrics_search}
*/
export class MetricsSearch extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sumologic_metrics_search";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MetricsSearch resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MetricsSearch to import
  * @param importFromId The id of the existing MetricsSearch that should be imported. Refer to the {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/metrics_search#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MetricsSearch to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sumologic_metrics_search", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/metrics_search sumologic_metrics_search} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MetricsSearchConfig
  */
  public constructor(scope: Construct, id: string, config: MetricsSearchConfig) {
    super(scope, id, {
      terraformResourceType: 'sumologic_metrics_search',
      terraformGeneratorMetadata: {
        providerName: 'sumologic',
        providerVersion: '3.1.7'
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
    this._desiredQuantizationInSecs = config.desiredQuantizationInSecs;
    this._id = config.id;
    this._logQuery = config.logQuery;
    this._parentId = config.parentId;
    this._title = config.title;
    this._metricsQueries.internalValue = config.metricsQueries;
    this._timeRange.internalValue = config.timeRange;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // desired_quantization_in_secs - computed: false, optional: true, required: false
  private _desiredQuantizationInSecs?: number; 
  public get desiredQuantizationInSecs() {
    return this.getNumberAttribute('desired_quantization_in_secs');
  }
  public set desiredQuantizationInSecs(value: number) {
    this._desiredQuantizationInSecs = value;
  }
  public resetDesiredQuantizationInSecs() {
    this._desiredQuantizationInSecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredQuantizationInSecsInput() {
    return this._desiredQuantizationInSecs;
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

  // log_query - computed: false, optional: true, required: false
  private _logQuery?: string; 
  public get logQuery() {
    return this.getStringAttribute('log_query');
  }
  public set logQuery(value: string) {
    this._logQuery = value;
  }
  public resetLogQuery() {
    this._logQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logQueryInput() {
    return this._logQuery;
  }

  // parent_id - computed: false, optional: false, required: true
  private _parentId?: string; 
  public get parentId() {
    return this.getStringAttribute('parent_id');
  }
  public set parentId(value: string) {
    this._parentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentIdInput() {
    return this._parentId;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // metrics_queries - computed: false, optional: false, required: true
  private _metricsQueries = new MetricsSearchMetricsQueriesList(this, "metrics_queries", false);
  public get metricsQueries() {
    return this._metricsQueries;
  }
  public putMetricsQueries(value: MetricsSearchMetricsQueries[] | cdktf.IResolvable) {
    this._metricsQueries.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsQueriesInput() {
    return this._metricsQueries.internalValue;
  }

  // time_range - computed: false, optional: false, required: true
  private _timeRange = new MetricsSearchTimeRangeOutputReference(this, "time_range");
  public get timeRange() {
    return this._timeRange;
  }
  public putTimeRange(value: MetricsSearchTimeRange) {
    this._timeRange.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeRangeInput() {
    return this._timeRange.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      desired_quantization_in_secs: cdktf.numberToTerraform(this._desiredQuantizationInSecs),
      id: cdktf.stringToTerraform(this._id),
      log_query: cdktf.stringToTerraform(this._logQuery),
      parent_id: cdktf.stringToTerraform(this._parentId),
      title: cdktf.stringToTerraform(this._title),
      metrics_queries: cdktf.listMapper(metricsSearchMetricsQueriesToTerraform, true)(this._metricsQueries.internalValue),
      time_range: metricsSearchTimeRangeToTerraform(this._timeRange.internalValue),
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
      desired_quantization_in_secs: {
        value: cdktf.numberToHclTerraform(this._desiredQuantizationInSecs),
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
      log_query: {
        value: cdktf.stringToHclTerraform(this._logQuery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_id: {
        value: cdktf.stringToHclTerraform(this._parentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metrics_queries: {
        value: cdktf.listMapperHcl(metricsSearchMetricsQueriesToHclTerraform, true)(this._metricsQueries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MetricsSearchMetricsQueriesList",
      },
      time_range: {
        value: metricsSearchTimeRangeToHclTerraform(this._timeRange.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MetricsSearchTimeRangeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
