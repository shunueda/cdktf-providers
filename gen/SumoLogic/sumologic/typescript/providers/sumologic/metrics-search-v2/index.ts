// https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/metrics_search_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MetricsSearchV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/metrics_search_v2#description MetricsSearchV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/metrics_search_v2#folder_id MetricsSearchV2#folder_id}
  */
  readonly folderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/metrics_search_v2#id MetricsSearchV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/metrics_search_v2#title MetricsSearchV2#title}
  */
  readonly title: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/metrics_search_v2#visual_settings MetricsSearchV2#visual_settings}
  */
  readonly visualSettings?: string;
  /**
  * queries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/metrics_search_v2#queries MetricsSearchV2#queries}
  */
  readonly queries: MetricsSearchV2Queries[] | cdktf.IResolvable;
  /**
  * time_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/metrics_search_v2#time_range MetricsSearchV2#time_range}
  */
  readonly timeRange: MetricsSearchV2TimeRange;
}
export interface MetricsSearchV2Queries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/metrics_search_v2#metrics_query_mode MetricsSearchV2#metrics_query_mode}
  */
  readonly metricsQueryMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/metrics_search_v2#query_key MetricsSearchV2#query_key}
  */
  readonly queryKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/metrics_search_v2#query_string MetricsSearchV2#query_string}
  */
  readonly queryString: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/metrics_search_v2#query_type MetricsSearchV2#query_type}
  */
  readonly queryType: string;
}

export function metricsSearchV2QueriesToTerraform(struct?: MetricsSearchV2Queries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metrics_query_mode: cdktf.stringToTerraform(struct!.metricsQueryMode),
    query_key: cdktf.stringToTerraform(struct!.queryKey),
    query_string: cdktf.stringToTerraform(struct!.queryString),
    query_type: cdktf.stringToTerraform(struct!.queryType),
  }
}


export function metricsSearchV2QueriesToHclTerraform(struct?: MetricsSearchV2Queries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metrics_query_mode: {
      value: cdktf.stringToHclTerraform(struct!.metricsQueryMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_key: {
      value: cdktf.stringToHclTerraform(struct!.queryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_string: {
      value: cdktf.stringToHclTerraform(struct!.queryString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_type: {
      value: cdktf.stringToHclTerraform(struct!.queryType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MetricsSearchV2QueriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MetricsSearchV2Queries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsQueryMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsQueryMode = this._metricsQueryMode;
    }
    if (this._queryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryKey = this._queryKey;
    }
    if (this._queryString !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryString = this._queryString;
    }
    if (this._queryType !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryType = this._queryType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricsSearchV2Queries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricsQueryMode = undefined;
      this._queryKey = undefined;
      this._queryString = undefined;
      this._queryType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricsQueryMode = value.metricsQueryMode;
      this._queryKey = value.queryKey;
      this._queryString = value.queryString;
      this._queryType = value.queryType;
    }
  }

  // metrics_query_mode - computed: false, optional: true, required: false
  private _metricsQueryMode?: string; 
  public get metricsQueryMode() {
    return this.getStringAttribute('metrics_query_mode');
  }
  public set metricsQueryMode(value: string) {
    this._metricsQueryMode = value;
  }
  public resetMetricsQueryMode() {
    this._metricsQueryMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsQueryModeInput() {
    return this._metricsQueryMode;
  }

  // query_key - computed: false, optional: false, required: true
  private _queryKey?: string; 
  public get queryKey() {
    return this.getStringAttribute('query_key');
  }
  public set queryKey(value: string) {
    this._queryKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryKeyInput() {
    return this._queryKey;
  }

  // query_string - computed: false, optional: false, required: true
  private _queryString?: string; 
  public get queryString() {
    return this.getStringAttribute('query_string');
  }
  public set queryString(value: string) {
    this._queryString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString;
  }

  // query_type - computed: false, optional: false, required: true
  private _queryType?: string; 
  public get queryType() {
    return this.getStringAttribute('query_type');
  }
  public set queryType(value: string) {
    this._queryType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryTypeInput() {
    return this._queryType;
  }
}

export class MetricsSearchV2QueriesList extends cdktf.ComplexList {
  public internalValue? : MetricsSearchV2Queries[] | cdktf.IResolvable

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
  public get(index: number): MetricsSearchV2QueriesOutputReference {
    return new MetricsSearchV2QueriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MetricsSearchV2TimeRangeBeginBoundedTimeRangeFromEpochTimeRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/metrics_search_v2#epoch_millis MetricsSearchV2#epoch_millis}
  */
  readonly epochMillis: number;
}

export function metricsSearchV2TimeRangeBeginBoundedTimeRangeFromEpochTimeRangeToTerraform(struct?: MetricsSearchV2TimeRangeBeginBoundedTimeRangeFromEpochTimeRangeOutputReference | MetricsSearchV2TimeRangeBeginBoundedTimeRangeFromEpochTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    epoch_millis: cdktf.numberToTerraform(struct!.epochMillis),
  }
}


export function metricsSearchV2TimeRangeBeginBoundedTimeRangeFromEpochTimeRangeToHclTerraform(struct?: MetricsSearchV2TimeRangeBeginBoundedTimeRangeFromEpochTimeRangeOutputReference | MetricsSearchV2TimeRangeBeginBoundedTimeRangeFromEpochTimeRange): any {
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

export class MetricsSearchV2TimeRangeBeginBoundedTimeRangeFromEpochTimeRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MetricsSearchV2TimeRangeBeginBoundedTimeRangeFromEpochTimeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._epochMillis !== undefined) {
      hasAnyValues = true;
      internalValueResult.epochMillis = this._epochMillis;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricsSearchV2TimeRangeBeginBoundedTimeRangeFromEpochTimeRange | undefined) {
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
export interface MetricsSearchV2TimeRangeBeginBoundedTimeRangeFromIso8601TimeRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/metrics_search_v2#iso8601_time MetricsSearchV2#iso8601_time}
  */
  readonly iso8601Time: string;
}

export function metricsSearchV2TimeRangeBeginBoundedTimeRangeFromIso8601TimeRangeToTerraform(struct?: MetricsSearchV2TimeRangeBeginBoundedTimeRangeFromIso8601TimeRangeOutputReference | MetricsSearchV2TimeRangeBeginBoundedTimeRangeFromIso8601TimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iso8601_time: cdktf.stringToTerraform(struct!.iso8601Time),
  }
}


export function metricsSearchV2TimeRangeBeginBoundedTimeRangeFromIso8601TimeRangeToHclTerraform(struct?: MetricsSearchV2TimeRangeBeginBoundedTimeRangeFromIso8601TimeRangeOutputReference | MetricsSearchV2TimeRangeBeginBoundedTimeRangeFromIso8601TimeRange): any {
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

export class MetricsSearchV2TimeRangeBeginBoundedTimeRangeFromIso8601TimeRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MetricsSearchV2TimeRangeBeginBoundedTimeRangeFromIso8601TimeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iso8601Time !== undefined) {
      hasAnyValues = true;
      internalValueResult.iso8601Time = this._iso8601Time;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricsSearchV2TimeRangeBeginBoundedTimeRangeFromIso8601TimeRange | undefined) {
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
export interface MetricsSearchV2TimeRangeBeginBoundedTimeRangeFromLiteralTimeRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/metrics_search_v2#range_name MetricsSearchV2#range_name}
  */
  readonly rangeName: string;
}

export function metricsSearchV2TimeRangeBeginBoundedTimeRangeFromLiteralTimeRangeToTerraform(struct?: MetricsSearchV2TimeRangeBeginBoundedTimeRangeFromLiteralTimeRangeOutputReference | MetricsSearchV2TimeRangeBeginBoundedTimeRangeFromLiteralTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    range_name: cdktf.stringToTerraform(struct!.rangeName),
  }
}


export function metricsSearchV2TimeRangeBeginBoundedTimeRangeFromLiteralTimeRangeToHclTerraform(struct?: MetricsSearchV2TimeRangeBeginBoundedTimeRangeFromLiteralTimeRangeOutputReference | MetricsSearchV2TimeRangeBeginBoundedTimeRangeFromLiteralTimeRange): any {
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

export class MetricsSearchV2TimeRangeBeginBoundedTimeRangeFromLiteralTimeRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MetricsSearchV2TimeRangeBeginBoundedTimeRangeFromLiteralTimeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rangeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeName = this._rangeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricsSearchV2TimeRangeBeginBoundedTimeRangeFromLiteralTimeRange | undefined) {
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
export interface MetricsSearchV2TimeRangeBeginBoundedTimeRangeFromRelativeTimeRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/metrics_search_v2#relative_time MetricsSearchV2#relative_time}
  */
  readonly relativeTime: string;
}

export function metricsSearchV2TimeRangeBeginBoundedTimeRangeFromRelativeTimeRangeToTerraform(struct?: MetricsSearchV2TimeRangeBeginBoundedTimeRangeFromRelativeTimeRangeOutputReference | MetricsSearchV2TimeRangeBeginBoundedTimeRangeFromRelativeTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    relative_time: cdktf.stringToTerraform(struct!.relativeTime),
  }
}


export function metricsSearchV2TimeRangeBeginBoundedTimeRangeFromRelativeTimeRangeToHclTerraform(struct?: MetricsSearchV2TimeRangeBeginBoundedTimeRangeFromRelativeTimeRangeOutputReference | MetricsSearchV2TimeRangeBeginBoundedTimeRangeFromRelativeTimeRange): any {
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

export class MetricsSearchV2TimeRangeBeginBoundedTimeRangeFromRelativeTimeRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MetricsSearchV2TimeRangeBeginBoundedTimeRangeFromRelativeTimeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._relativeTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.relativeTime = this._relativeTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricsSearchV2TimeRangeBeginBoundedTimeRangeFromRelativeTimeRange | undefined) {
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
export interface MetricsSearchV2TimeRangeBeginBoundedTimeRangeFrom {
  /**
  * epoch_time_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/metrics_search_v2#epoch_time_range MetricsSearchV2#epoch_time_range}
  */
  readonly epochTimeRange?: MetricsSearchV2TimeRangeBeginBoundedTimeRangeFromEpochTimeRange;
  /**
  * iso8601_time_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/metrics_search_v2#iso8601_time_range MetricsSearchV2#iso8601_time_range}
  */
  readonly iso8601TimeRange?: MetricsSearchV2TimeRangeBeginBoundedTimeRangeFromIso8601TimeRange;
  /**
  * literal_time_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/metrics_search_v2#literal_time_range MetricsSearchV2#literal_time_range}
  */
  readonly literalTimeRange?: MetricsSearchV2TimeRangeBeginBoundedTimeRangeFromLiteralTimeRange;
  /**
  * relative_time_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/metrics_search_v2#relative_time_range MetricsSearchV2#relative_time_range}
  */
  readonly relativeTimeRange?: MetricsSearchV2TimeRangeBeginBoundedTimeRangeFromRelativeTimeRange;
}

export function metricsSearchV2TimeRangeBeginBoundedTimeRangeFromToTerraform(struct?: MetricsSearchV2TimeRangeBeginBoundedTimeRangeFromOutputReference | MetricsSearchV2TimeRangeBeginBoundedTimeRangeFrom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    epoch_time_range: metricsSearchV2TimeRangeBeginBoundedTimeRangeFromEpochTimeRangeToTerraform(struct!.epochTimeRange),
    iso8601_time_range: metricsSearchV2TimeRangeBeginBoundedTimeRangeFromIso8601TimeRangeToTerraform(struct!.iso8601TimeRange),
    literal_time_range: metricsSearchV2TimeRangeBeginBoundedTimeRangeFromLiteralTimeRangeToTerraform(struct!.literalTimeRange),
    relative_time_range: metricsSearchV2TimeRangeBeginBoundedTimeRangeFromRelativeTimeRangeToTerraform(struct!.relativeTimeRange),
  }
}


export function metricsSearchV2TimeRangeBeginBoundedTimeRangeFromToHclTerraform(struct?: MetricsSearchV2TimeRangeBeginBoundedTimeRangeFromOutputReference | MetricsSearchV2TimeRangeBeginBoundedTimeRangeFrom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    epoch_time_range: {
      value: metricsSearchV2TimeRangeBeginBoundedTimeRangeFromEpochTimeRangeToHclTerraform(struct!.epochTimeRange),
      isBlock: true,
      type: "list",
      storageClassType: "MetricsSearchV2TimeRangeBeginBoundedTimeRangeFromEpochTimeRangeList",
    },
    iso8601_time_range: {
      value: metricsSearchV2TimeRangeBeginBoundedTimeRangeFromIso8601TimeRangeToHclTerraform(struct!.iso8601TimeRange),
      isBlock: true,
      type: "list",
      storageClassType: "MetricsSearchV2TimeRangeBeginBoundedTimeRangeFromIso8601TimeRangeList",
    },
    literal_time_range: {
      value: metricsSearchV2TimeRangeBeginBoundedTimeRangeFromLiteralTimeRangeToHclTerraform(struct!.literalTimeRange),
      isBlock: true,
      type: "list",
      storageClassType: "MetricsSearchV2TimeRangeBeginBoundedTimeRangeFromLiteralTimeRangeList",
    },
    relative_time_range: {
      value: metricsSearchV2TimeRangeBeginBoundedTimeRangeFromRelativeTimeRangeToHclTerraform(struct!.relativeTimeRange),
      isBlock: true,
      type: "list",
      storageClassType: "MetricsSearchV2TimeRangeBeginBoundedTimeRangeFromRelativeTimeRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MetricsSearchV2TimeRangeBeginBoundedTimeRangeFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MetricsSearchV2TimeRangeBeginBoundedTimeRangeFrom | undefined {
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

  public set internalValue(value: MetricsSearchV2TimeRangeBeginBoundedTimeRangeFrom | undefined) {
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
  private _epochTimeRange = new MetricsSearchV2TimeRangeBeginBoundedTimeRangeFromEpochTimeRangeOutputReference(this, "epoch_time_range");
  public get epochTimeRange() {
    return this._epochTimeRange;
  }
  public putEpochTimeRange(value: MetricsSearchV2TimeRangeBeginBoundedTimeRangeFromEpochTimeRange) {
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
  private _iso8601TimeRange = new MetricsSearchV2TimeRangeBeginBoundedTimeRangeFromIso8601TimeRangeOutputReference(this, "iso8601_time_range");
  public get iso8601TimeRange() {
    return this._iso8601TimeRange;
  }
  public putIso8601TimeRange(value: MetricsSearchV2TimeRangeBeginBoundedTimeRangeFromIso8601TimeRange) {
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
  private _literalTimeRange = new MetricsSearchV2TimeRangeBeginBoundedTimeRangeFromLiteralTimeRangeOutputReference(this, "literal_time_range");
  public get literalTimeRange() {
    return this._literalTimeRange;
  }
  public putLiteralTimeRange(value: MetricsSearchV2TimeRangeBeginBoundedTimeRangeFromLiteralTimeRange) {
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
  private _relativeTimeRange = new MetricsSearchV2TimeRangeBeginBoundedTimeRangeFromRelativeTimeRangeOutputReference(this, "relative_time_range");
  public get relativeTimeRange() {
    return this._relativeTimeRange;
  }
  public putRelativeTimeRange(value: MetricsSearchV2TimeRangeBeginBoundedTimeRangeFromRelativeTimeRange) {
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
export interface MetricsSearchV2TimeRangeBeginBoundedTimeRangeToEpochTimeRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/metrics_search_v2#epoch_millis MetricsSearchV2#epoch_millis}
  */
  readonly epochMillis: number;
}

export function metricsSearchV2TimeRangeBeginBoundedTimeRangeToEpochTimeRangeToTerraform(struct?: MetricsSearchV2TimeRangeBeginBoundedTimeRangeToEpochTimeRangeOutputReference | MetricsSearchV2TimeRangeBeginBoundedTimeRangeToEpochTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    epoch_millis: cdktf.numberToTerraform(struct!.epochMillis),
  }
}


export function metricsSearchV2TimeRangeBeginBoundedTimeRangeToEpochTimeRangeToHclTerraform(struct?: MetricsSearchV2TimeRangeBeginBoundedTimeRangeToEpochTimeRangeOutputReference | MetricsSearchV2TimeRangeBeginBoundedTimeRangeToEpochTimeRange): any {
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

export class MetricsSearchV2TimeRangeBeginBoundedTimeRangeToEpochTimeRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MetricsSearchV2TimeRangeBeginBoundedTimeRangeToEpochTimeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._epochMillis !== undefined) {
      hasAnyValues = true;
      internalValueResult.epochMillis = this._epochMillis;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricsSearchV2TimeRangeBeginBoundedTimeRangeToEpochTimeRange | undefined) {
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
export interface MetricsSearchV2TimeRangeBeginBoundedTimeRangeToIso8601TimeRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/metrics_search_v2#iso8601_time MetricsSearchV2#iso8601_time}
  */
  readonly iso8601Time: string;
}

export function metricsSearchV2TimeRangeBeginBoundedTimeRangeToIso8601TimeRangeToTerraform(struct?: MetricsSearchV2TimeRangeBeginBoundedTimeRangeToIso8601TimeRangeOutputReference | MetricsSearchV2TimeRangeBeginBoundedTimeRangeToIso8601TimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iso8601_time: cdktf.stringToTerraform(struct!.iso8601Time),
  }
}


export function metricsSearchV2TimeRangeBeginBoundedTimeRangeToIso8601TimeRangeToHclTerraform(struct?: MetricsSearchV2TimeRangeBeginBoundedTimeRangeToIso8601TimeRangeOutputReference | MetricsSearchV2TimeRangeBeginBoundedTimeRangeToIso8601TimeRange): any {
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

export class MetricsSearchV2TimeRangeBeginBoundedTimeRangeToIso8601TimeRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MetricsSearchV2TimeRangeBeginBoundedTimeRangeToIso8601TimeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iso8601Time !== undefined) {
      hasAnyValues = true;
      internalValueResult.iso8601Time = this._iso8601Time;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricsSearchV2TimeRangeBeginBoundedTimeRangeToIso8601TimeRange | undefined) {
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
export interface MetricsSearchV2TimeRangeBeginBoundedTimeRangeToLiteralTimeRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/metrics_search_v2#range_name MetricsSearchV2#range_name}
  */
  readonly rangeName: string;
}

export function metricsSearchV2TimeRangeBeginBoundedTimeRangeToLiteralTimeRangeToTerraform(struct?: MetricsSearchV2TimeRangeBeginBoundedTimeRangeToLiteralTimeRangeOutputReference | MetricsSearchV2TimeRangeBeginBoundedTimeRangeToLiteralTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    range_name: cdktf.stringToTerraform(struct!.rangeName),
  }
}


export function metricsSearchV2TimeRangeBeginBoundedTimeRangeToLiteralTimeRangeToHclTerraform(struct?: MetricsSearchV2TimeRangeBeginBoundedTimeRangeToLiteralTimeRangeOutputReference | MetricsSearchV2TimeRangeBeginBoundedTimeRangeToLiteralTimeRange): any {
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

export class MetricsSearchV2TimeRangeBeginBoundedTimeRangeToLiteralTimeRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MetricsSearchV2TimeRangeBeginBoundedTimeRangeToLiteralTimeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rangeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeName = this._rangeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricsSearchV2TimeRangeBeginBoundedTimeRangeToLiteralTimeRange | undefined) {
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
export interface MetricsSearchV2TimeRangeBeginBoundedTimeRangeToRelativeTimeRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/metrics_search_v2#relative_time MetricsSearchV2#relative_time}
  */
  readonly relativeTime: string;
}

export function metricsSearchV2TimeRangeBeginBoundedTimeRangeToRelativeTimeRangeToTerraform(struct?: MetricsSearchV2TimeRangeBeginBoundedTimeRangeToRelativeTimeRangeOutputReference | MetricsSearchV2TimeRangeBeginBoundedTimeRangeToRelativeTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    relative_time: cdktf.stringToTerraform(struct!.relativeTime),
  }
}


export function metricsSearchV2TimeRangeBeginBoundedTimeRangeToRelativeTimeRangeToHclTerraform(struct?: MetricsSearchV2TimeRangeBeginBoundedTimeRangeToRelativeTimeRangeOutputReference | MetricsSearchV2TimeRangeBeginBoundedTimeRangeToRelativeTimeRange): any {
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

export class MetricsSearchV2TimeRangeBeginBoundedTimeRangeToRelativeTimeRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MetricsSearchV2TimeRangeBeginBoundedTimeRangeToRelativeTimeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._relativeTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.relativeTime = this._relativeTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricsSearchV2TimeRangeBeginBoundedTimeRangeToRelativeTimeRange | undefined) {
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
export interface MetricsSearchV2TimeRangeBeginBoundedTimeRangeTo {
  /**
  * epoch_time_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/metrics_search_v2#epoch_time_range MetricsSearchV2#epoch_time_range}
  */
  readonly epochTimeRange?: MetricsSearchV2TimeRangeBeginBoundedTimeRangeToEpochTimeRange;
  /**
  * iso8601_time_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/metrics_search_v2#iso8601_time_range MetricsSearchV2#iso8601_time_range}
  */
  readonly iso8601TimeRange?: MetricsSearchV2TimeRangeBeginBoundedTimeRangeToIso8601TimeRange;
  /**
  * literal_time_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/metrics_search_v2#literal_time_range MetricsSearchV2#literal_time_range}
  */
  readonly literalTimeRange?: MetricsSearchV2TimeRangeBeginBoundedTimeRangeToLiteralTimeRange;
  /**
  * relative_time_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/metrics_search_v2#relative_time_range MetricsSearchV2#relative_time_range}
  */
  readonly relativeTimeRange?: MetricsSearchV2TimeRangeBeginBoundedTimeRangeToRelativeTimeRange;
}

export function metricsSearchV2TimeRangeBeginBoundedTimeRangeToToTerraform(struct?: MetricsSearchV2TimeRangeBeginBoundedTimeRangeToOutputReference | MetricsSearchV2TimeRangeBeginBoundedTimeRangeTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    epoch_time_range: metricsSearchV2TimeRangeBeginBoundedTimeRangeToEpochTimeRangeToTerraform(struct!.epochTimeRange),
    iso8601_time_range: metricsSearchV2TimeRangeBeginBoundedTimeRangeToIso8601TimeRangeToTerraform(struct!.iso8601TimeRange),
    literal_time_range: metricsSearchV2TimeRangeBeginBoundedTimeRangeToLiteralTimeRangeToTerraform(struct!.literalTimeRange),
    relative_time_range: metricsSearchV2TimeRangeBeginBoundedTimeRangeToRelativeTimeRangeToTerraform(struct!.relativeTimeRange),
  }
}


export function metricsSearchV2TimeRangeBeginBoundedTimeRangeToToHclTerraform(struct?: MetricsSearchV2TimeRangeBeginBoundedTimeRangeToOutputReference | MetricsSearchV2TimeRangeBeginBoundedTimeRangeTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    epoch_time_range: {
      value: metricsSearchV2TimeRangeBeginBoundedTimeRangeToEpochTimeRangeToHclTerraform(struct!.epochTimeRange),
      isBlock: true,
      type: "list",
      storageClassType: "MetricsSearchV2TimeRangeBeginBoundedTimeRangeToEpochTimeRangeList",
    },
    iso8601_time_range: {
      value: metricsSearchV2TimeRangeBeginBoundedTimeRangeToIso8601TimeRangeToHclTerraform(struct!.iso8601TimeRange),
      isBlock: true,
      type: "list",
      storageClassType: "MetricsSearchV2TimeRangeBeginBoundedTimeRangeToIso8601TimeRangeList",
    },
    literal_time_range: {
      value: metricsSearchV2TimeRangeBeginBoundedTimeRangeToLiteralTimeRangeToHclTerraform(struct!.literalTimeRange),
      isBlock: true,
      type: "list",
      storageClassType: "MetricsSearchV2TimeRangeBeginBoundedTimeRangeToLiteralTimeRangeList",
    },
    relative_time_range: {
      value: metricsSearchV2TimeRangeBeginBoundedTimeRangeToRelativeTimeRangeToHclTerraform(struct!.relativeTimeRange),
      isBlock: true,
      type: "list",
      storageClassType: "MetricsSearchV2TimeRangeBeginBoundedTimeRangeToRelativeTimeRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MetricsSearchV2TimeRangeBeginBoundedTimeRangeToOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MetricsSearchV2TimeRangeBeginBoundedTimeRangeTo | undefined {
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

  public set internalValue(value: MetricsSearchV2TimeRangeBeginBoundedTimeRangeTo | undefined) {
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
  private _epochTimeRange = new MetricsSearchV2TimeRangeBeginBoundedTimeRangeToEpochTimeRangeOutputReference(this, "epoch_time_range");
  public get epochTimeRange() {
    return this._epochTimeRange;
  }
  public putEpochTimeRange(value: MetricsSearchV2TimeRangeBeginBoundedTimeRangeToEpochTimeRange) {
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
  private _iso8601TimeRange = new MetricsSearchV2TimeRangeBeginBoundedTimeRangeToIso8601TimeRangeOutputReference(this, "iso8601_time_range");
  public get iso8601TimeRange() {
    return this._iso8601TimeRange;
  }
  public putIso8601TimeRange(value: MetricsSearchV2TimeRangeBeginBoundedTimeRangeToIso8601TimeRange) {
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
  private _literalTimeRange = new MetricsSearchV2TimeRangeBeginBoundedTimeRangeToLiteralTimeRangeOutputReference(this, "literal_time_range");
  public get literalTimeRange() {
    return this._literalTimeRange;
  }
  public putLiteralTimeRange(value: MetricsSearchV2TimeRangeBeginBoundedTimeRangeToLiteralTimeRange) {
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
  private _relativeTimeRange = new MetricsSearchV2TimeRangeBeginBoundedTimeRangeToRelativeTimeRangeOutputReference(this, "relative_time_range");
  public get relativeTimeRange() {
    return this._relativeTimeRange;
  }
  public putRelativeTimeRange(value: MetricsSearchV2TimeRangeBeginBoundedTimeRangeToRelativeTimeRange) {
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
export interface MetricsSearchV2TimeRangeBeginBoundedTimeRange {
  /**
  * from block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/metrics_search_v2#from MetricsSearchV2#from}
  */
  readonly from: MetricsSearchV2TimeRangeBeginBoundedTimeRangeFrom;
  /**
  * to block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/metrics_search_v2#to MetricsSearchV2#to}
  */
  readonly to?: MetricsSearchV2TimeRangeBeginBoundedTimeRangeTo;
}

export function metricsSearchV2TimeRangeBeginBoundedTimeRangeToTerraform(struct?: MetricsSearchV2TimeRangeBeginBoundedTimeRangeOutputReference | MetricsSearchV2TimeRangeBeginBoundedTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: metricsSearchV2TimeRangeBeginBoundedTimeRangeFromToTerraform(struct!.from),
    to: metricsSearchV2TimeRangeBeginBoundedTimeRangeToToTerraform(struct!.to),
  }
}


export function metricsSearchV2TimeRangeBeginBoundedTimeRangeToHclTerraform(struct?: MetricsSearchV2TimeRangeBeginBoundedTimeRangeOutputReference | MetricsSearchV2TimeRangeBeginBoundedTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: metricsSearchV2TimeRangeBeginBoundedTimeRangeFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "list",
      storageClassType: "MetricsSearchV2TimeRangeBeginBoundedTimeRangeFromList",
    },
    to: {
      value: metricsSearchV2TimeRangeBeginBoundedTimeRangeToToHclTerraform(struct!.to),
      isBlock: true,
      type: "list",
      storageClassType: "MetricsSearchV2TimeRangeBeginBoundedTimeRangeToList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MetricsSearchV2TimeRangeBeginBoundedTimeRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MetricsSearchV2TimeRangeBeginBoundedTimeRange | undefined {
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

  public set internalValue(value: MetricsSearchV2TimeRangeBeginBoundedTimeRange | undefined) {
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
  private _from = new MetricsSearchV2TimeRangeBeginBoundedTimeRangeFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: MetricsSearchV2TimeRangeBeginBoundedTimeRangeFrom) {
    this._from.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from.internalValue;
  }

  // to - computed: false, optional: true, required: false
  private _to = new MetricsSearchV2TimeRangeBeginBoundedTimeRangeToOutputReference(this, "to");
  public get to() {
    return this._to;
  }
  public putTo(value: MetricsSearchV2TimeRangeBeginBoundedTimeRangeTo) {
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
export interface MetricsSearchV2TimeRangeCompleteLiteralTimeRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/metrics_search_v2#range_name MetricsSearchV2#range_name}
  */
  readonly rangeName: string;
}

export function metricsSearchV2TimeRangeCompleteLiteralTimeRangeToTerraform(struct?: MetricsSearchV2TimeRangeCompleteLiteralTimeRangeOutputReference | MetricsSearchV2TimeRangeCompleteLiteralTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    range_name: cdktf.stringToTerraform(struct!.rangeName),
  }
}


export function metricsSearchV2TimeRangeCompleteLiteralTimeRangeToHclTerraform(struct?: MetricsSearchV2TimeRangeCompleteLiteralTimeRangeOutputReference | MetricsSearchV2TimeRangeCompleteLiteralTimeRange): any {
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

export class MetricsSearchV2TimeRangeCompleteLiteralTimeRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MetricsSearchV2TimeRangeCompleteLiteralTimeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rangeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeName = this._rangeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricsSearchV2TimeRangeCompleteLiteralTimeRange | undefined) {
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
export interface MetricsSearchV2TimeRange {
  /**
  * begin_bounded_time_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/metrics_search_v2#begin_bounded_time_range MetricsSearchV2#begin_bounded_time_range}
  */
  readonly beginBoundedTimeRange?: MetricsSearchV2TimeRangeBeginBoundedTimeRange;
  /**
  * complete_literal_time_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/metrics_search_v2#complete_literal_time_range MetricsSearchV2#complete_literal_time_range}
  */
  readonly completeLiteralTimeRange?: MetricsSearchV2TimeRangeCompleteLiteralTimeRange;
}

export function metricsSearchV2TimeRangeToTerraform(struct?: MetricsSearchV2TimeRangeOutputReference | MetricsSearchV2TimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    begin_bounded_time_range: metricsSearchV2TimeRangeBeginBoundedTimeRangeToTerraform(struct!.beginBoundedTimeRange),
    complete_literal_time_range: metricsSearchV2TimeRangeCompleteLiteralTimeRangeToTerraform(struct!.completeLiteralTimeRange),
  }
}


export function metricsSearchV2TimeRangeToHclTerraform(struct?: MetricsSearchV2TimeRangeOutputReference | MetricsSearchV2TimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    begin_bounded_time_range: {
      value: metricsSearchV2TimeRangeBeginBoundedTimeRangeToHclTerraform(struct!.beginBoundedTimeRange),
      isBlock: true,
      type: "list",
      storageClassType: "MetricsSearchV2TimeRangeBeginBoundedTimeRangeList",
    },
    complete_literal_time_range: {
      value: metricsSearchV2TimeRangeCompleteLiteralTimeRangeToHclTerraform(struct!.completeLiteralTimeRange),
      isBlock: true,
      type: "list",
      storageClassType: "MetricsSearchV2TimeRangeCompleteLiteralTimeRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MetricsSearchV2TimeRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MetricsSearchV2TimeRange | undefined {
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

  public set internalValue(value: MetricsSearchV2TimeRange | undefined) {
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
  private _beginBoundedTimeRange = new MetricsSearchV2TimeRangeBeginBoundedTimeRangeOutputReference(this, "begin_bounded_time_range");
  public get beginBoundedTimeRange() {
    return this._beginBoundedTimeRange;
  }
  public putBeginBoundedTimeRange(value: MetricsSearchV2TimeRangeBeginBoundedTimeRange) {
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
  private _completeLiteralTimeRange = new MetricsSearchV2TimeRangeCompleteLiteralTimeRangeOutputReference(this, "complete_literal_time_range");
  public get completeLiteralTimeRange() {
    return this._completeLiteralTimeRange;
  }
  public putCompleteLiteralTimeRange(value: MetricsSearchV2TimeRangeCompleteLiteralTimeRange) {
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
* Represents a {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/metrics_search_v2 sumologic_metrics_search_v2}
*/
export class MetricsSearchV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sumologic_metrics_search_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MetricsSearchV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MetricsSearchV2 to import
  * @param importFromId The id of the existing MetricsSearchV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/metrics_search_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MetricsSearchV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sumologic_metrics_search_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/metrics_search_v2 sumologic_metrics_search_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MetricsSearchV2Config
  */
  public constructor(scope: Construct, id: string, config: MetricsSearchV2Config) {
    super(scope, id, {
      terraformResourceType: 'sumologic_metrics_search_v2',
      terraformGeneratorMetadata: {
        providerName: 'sumologic',
        providerVersion: '3.2.0',
        providerVersionConstraint: '3.2.0'
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
    this._folderId = config.folderId;
    this._id = config.id;
    this._title = config.title;
    this._visualSettings = config.visualSettings;
    this._queries.internalValue = config.queries;
    this._timeRange.internalValue = config.timeRange;
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

  // folder_id - computed: false, optional: true, required: false
  private _folderId?: string; 
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }
  public set folderId(value: string) {
    this._folderId = value;
  }
  public resetFolderId() {
    this._folderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderIdInput() {
    return this._folderId;
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

  // visual_settings - computed: false, optional: true, required: false
  private _visualSettings?: string; 
  public get visualSettings() {
    return this.getStringAttribute('visual_settings');
  }
  public set visualSettings(value: string) {
    this._visualSettings = value;
  }
  public resetVisualSettings() {
    this._visualSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visualSettingsInput() {
    return this._visualSettings;
  }

  // queries - computed: false, optional: false, required: true
  private _queries = new MetricsSearchV2QueriesList(this, "queries", false);
  public get queries() {
    return this._queries;
  }
  public putQueries(value: MetricsSearchV2Queries[] | cdktf.IResolvable) {
    this._queries.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queriesInput() {
    return this._queries.internalValue;
  }

  // time_range - computed: false, optional: false, required: true
  private _timeRange = new MetricsSearchV2TimeRangeOutputReference(this, "time_range");
  public get timeRange() {
    return this._timeRange;
  }
  public putTimeRange(value: MetricsSearchV2TimeRange) {
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
      folder_id: cdktf.stringToTerraform(this._folderId),
      id: cdktf.stringToTerraform(this._id),
      title: cdktf.stringToTerraform(this._title),
      visual_settings: cdktf.stringToTerraform(this._visualSettings),
      queries: cdktf.listMapper(metricsSearchV2QueriesToTerraform, true)(this._queries.internalValue),
      time_range: metricsSearchV2TimeRangeToTerraform(this._timeRange.internalValue),
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
      folder_id: {
        value: cdktf.stringToHclTerraform(this._folderId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      visual_settings: {
        value: cdktf.stringToHclTerraform(this._visualSettings),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      queries: {
        value: cdktf.listMapperHcl(metricsSearchV2QueriesToHclTerraform, true)(this._queries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MetricsSearchV2QueriesList",
      },
      time_range: {
        value: metricsSearchV2TimeRangeToHclTerraform(this._timeRange.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MetricsSearchV2TimeRangeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
