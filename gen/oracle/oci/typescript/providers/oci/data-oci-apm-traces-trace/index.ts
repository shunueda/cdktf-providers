// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/apm_traces_trace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciApmTracesTraceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/apm_traces_trace#apm_domain_id DataOciApmTracesTrace#apm_domain_id}
  */
  readonly apmDomainId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/apm_traces_trace#id DataOciApmTracesTrace#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/apm_traces_trace#time_trace_started_greater_than_or_equal_to DataOciApmTracesTrace#time_trace_started_greater_than_or_equal_to}
  */
  readonly timeTraceStartedGreaterThanOrEqualTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/apm_traces_trace#time_trace_started_less_than DataOciApmTracesTrace#time_trace_started_less_than}
  */
  readonly timeTraceStartedLessThan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/apm_traces_trace#trace_key DataOciApmTracesTrace#trace_key}
  */
  readonly traceKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/apm_traces_trace#trace_namespace DataOciApmTracesTrace#trace_namespace}
  */
  readonly traceNamespace?: string;
}
export interface DataOciApmTracesTraceServiceSummaries {
}

export function dataOciApmTracesTraceServiceSummariesToTerraform(struct?: DataOciApmTracesTraceServiceSummaries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApmTracesTraceServiceSummariesToHclTerraform(struct?: DataOciApmTracesTraceServiceSummaries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApmTracesTraceServiceSummariesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciApmTracesTraceServiceSummaries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApmTracesTraceServiceSummaries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // error_spans - computed: true, optional: false, required: false
  public get errorSpans() {
    return this.getStringAttribute('error_spans');
  }

  // span_service_name - computed: true, optional: false, required: false
  public get spanServiceName() {
    return this.getStringAttribute('span_service_name');
  }

  // total_spans - computed: true, optional: false, required: false
  public get totalSpans() {
    return this.getStringAttribute('total_spans');
  }
}

export class DataOciApmTracesTraceServiceSummariesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApmTracesTraceServiceSummariesOutputReference {
    return new DataOciApmTracesTraceServiceSummariesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApmTracesTraceSpanSummaryServiceSummaries {
}

export function dataOciApmTracesTraceSpanSummaryServiceSummariesToTerraform(struct?: DataOciApmTracesTraceSpanSummaryServiceSummaries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApmTracesTraceSpanSummaryServiceSummariesToHclTerraform(struct?: DataOciApmTracesTraceSpanSummaryServiceSummaries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciApmTracesTraceSpanSummaryServiceSummaries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApmTracesTraceSpanSummaryServiceSummaries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // error_spans - computed: true, optional: false, required: false
  public get errorSpans() {
    return this.getStringAttribute('error_spans');
  }

  // span_service_name - computed: true, optional: false, required: false
  public get spanServiceName() {
    return this.getStringAttribute('span_service_name');
  }

  // total_spans - computed: true, optional: false, required: false
  public get totalSpans() {
    return this.getStringAttribute('total_spans');
  }
}

export class DataOciApmTracesTraceSpanSummaryServiceSummariesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference {
    return new DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApmTracesTraceSpanSummary {
}

export function dataOciApmTracesTraceSpanSummaryToTerraform(struct?: DataOciApmTracesTraceSpanSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApmTracesTraceSpanSummaryToHclTerraform(struct?: DataOciApmTracesTraceSpanSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApmTracesTraceSpanSummaryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciApmTracesTraceSpanSummary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApmTracesTraceSpanSummary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // error_span_count - computed: true, optional: false, required: false
  public get errorSpanCount() {
    return this.getNumberAttribute('error_span_count');
  }

  // is_fault - computed: true, optional: false, required: false
  public get isFault() {
    return this.getBooleanAttribute('is_fault');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // root_span_duration_in_ms - computed: true, optional: false, required: false
  public get rootSpanDurationInMs() {
    return this.getNumberAttribute('root_span_duration_in_ms');
  }

  // root_span_operation_name - computed: true, optional: false, required: false
  public get rootSpanOperationName() {
    return this.getStringAttribute('root_span_operation_name');
  }

  // root_span_service_name - computed: true, optional: false, required: false
  public get rootSpanServiceName() {
    return this.getStringAttribute('root_span_service_name');
  }

  // service_summaries - computed: true, optional: false, required: false
  private _serviceSummaries = new DataOciApmTracesTraceSpanSummaryServiceSummariesList(this, "service_summaries", false);
  public get serviceSummaries() {
    return this._serviceSummaries;
  }

  // span_count - computed: true, optional: false, required: false
  public get spanCount() {
    return this.getNumberAttribute('span_count');
  }

  // time_earliest_span_started - computed: true, optional: false, required: false
  public get timeEarliestSpanStarted() {
    return this.getStringAttribute('time_earliest_span_started');
  }

  // time_latest_span_ended - computed: true, optional: false, required: false
  public get timeLatestSpanEnded() {
    return this.getStringAttribute('time_latest_span_ended');
  }

  // time_root_span_ended - computed: true, optional: false, required: false
  public get timeRootSpanEnded() {
    return this.getStringAttribute('time_root_span_ended');
  }

  // time_root_span_started - computed: true, optional: false, required: false
  public get timeRootSpanStarted() {
    return this.getStringAttribute('time_root_span_started');
  }

  // trace_duration_in_ms - computed: true, optional: false, required: false
  public get traceDurationInMs() {
    return this.getNumberAttribute('trace_duration_in_ms');
  }

  // trace_error_code - computed: true, optional: false, required: false
  public get traceErrorCode() {
    return this.getStringAttribute('trace_error_code');
  }

  // trace_error_type - computed: true, optional: false, required: false
  public get traceErrorType() {
    return this.getStringAttribute('trace_error_type');
  }

  // trace_status - computed: true, optional: false, required: false
  public get traceStatus() {
    return this.getStringAttribute('trace_status');
  }
}

export class DataOciApmTracesTraceSpanSummaryList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApmTracesTraceSpanSummaryOutputReference {
    return new DataOciApmTracesTraceSpanSummaryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApmTracesTraceSpansLogsSpanLogs {
}

export function dataOciApmTracesTraceSpansLogsSpanLogsToTerraform(struct?: DataOciApmTracesTraceSpansLogsSpanLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApmTracesTraceSpansLogsSpanLogsToHclTerraform(struct?: DataOciApmTracesTraceSpansLogsSpanLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApmTracesTraceSpansLogsSpanLogsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciApmTracesTraceSpansLogsSpanLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApmTracesTraceSpansLogsSpanLogs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // log_key - computed: true, optional: false, required: false
  public get logKey() {
    return this.getStringAttribute('log_key');
  }

  // log_value - computed: true, optional: false, required: false
  public get logValue() {
    return this.getStringAttribute('log_value');
  }
}

export class DataOciApmTracesTraceSpansLogsSpanLogsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApmTracesTraceSpansLogsSpanLogsOutputReference {
    return new DataOciApmTracesTraceSpansLogsSpanLogsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApmTracesTraceSpansLogs {
}

export function dataOciApmTracesTraceSpansLogsToTerraform(struct?: DataOciApmTracesTraceSpansLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApmTracesTraceSpansLogsToHclTerraform(struct?: DataOciApmTracesTraceSpansLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApmTracesTraceSpansLogsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciApmTracesTraceSpansLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApmTracesTraceSpansLogs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // event_name - computed: true, optional: false, required: false
  public get eventName() {
    return this.getStringAttribute('event_name');
  }

  // span_logs - computed: true, optional: false, required: false
  private _spanLogs = new DataOciApmTracesTraceSpansLogsSpanLogsList(this, "span_logs", false);
  public get spanLogs() {
    return this._spanLogs;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }
}

export class DataOciApmTracesTraceSpansLogsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApmTracesTraceSpansLogsOutputReference {
    return new DataOciApmTracesTraceSpansLogsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApmTracesTraceSpansTags {
}

export function dataOciApmTracesTraceSpansTagsToTerraform(struct?: DataOciApmTracesTraceSpansTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApmTracesTraceSpansTagsToHclTerraform(struct?: DataOciApmTracesTraceSpansTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApmTracesTraceSpansTagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciApmTracesTraceSpansTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApmTracesTraceSpansTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // tag_name - computed: true, optional: false, required: false
  public get tagName() {
    return this.getStringAttribute('tag_name');
  }

  // tag_value - computed: true, optional: false, required: false
  public get tagValue() {
    return this.getStringAttribute('tag_value');
  }
}

export class DataOciApmTracesTraceSpansTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApmTracesTraceSpansTagsOutputReference {
    return new DataOciApmTracesTraceSpansTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApmTracesTraceSpans {
}

export function dataOciApmTracesTraceSpansToTerraform(struct?: DataOciApmTracesTraceSpans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApmTracesTraceSpansToHclTerraform(struct?: DataOciApmTracesTraceSpans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApmTracesTraceSpansOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciApmTracesTraceSpans | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApmTracesTraceSpans | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duration_in_ms - computed: true, optional: false, required: false
  public get durationInMs() {
    return this.getStringAttribute('duration_in_ms');
  }

  // is_error - computed: true, optional: false, required: false
  public get isError() {
    return this.getBooleanAttribute('is_error');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // logs - computed: true, optional: false, required: false
  private _logs = new DataOciApmTracesTraceSpansLogsList(this, "logs", false);
  public get logs() {
    return this._logs;
  }

  // operation_name - computed: true, optional: false, required: false
  public get operationName() {
    return this.getStringAttribute('operation_name');
  }

  // parent_span_key - computed: true, optional: false, required: false
  public get parentSpanKey() {
    return this.getStringAttribute('parent_span_key');
  }

  // service_name - computed: true, optional: false, required: false
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }

  // source_name - computed: true, optional: false, required: false
  public get sourceName() {
    return this.getStringAttribute('source_name');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataOciApmTracesTraceSpansTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // time_ended - computed: true, optional: false, required: false
  public get timeEnded() {
    return this.getStringAttribute('time_ended');
  }

  // time_started - computed: true, optional: false, required: false
  public get timeStarted() {
    return this.getStringAttribute('time_started');
  }

  // trace_key - computed: true, optional: false, required: false
  public get traceKey() {
    return this.getStringAttribute('trace_key');
  }
}

export class DataOciApmTracesTraceSpansList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApmTracesTraceSpansOutputReference {
    return new DataOciApmTracesTraceSpansOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/apm_traces_trace oci_apm_traces_trace}
*/
export class DataOciApmTracesTrace extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_apm_traces_trace";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciApmTracesTrace resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciApmTracesTrace to import
  * @param importFromId The id of the existing DataOciApmTracesTrace that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/apm_traces_trace#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciApmTracesTrace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_apm_traces_trace", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/apm_traces_trace oci_apm_traces_trace} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciApmTracesTraceConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciApmTracesTraceConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_apm_traces_trace',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apmDomainId = config.apmDomainId;
    this._id = config.id;
    this._timeTraceStartedGreaterThanOrEqualTo = config.timeTraceStartedGreaterThanOrEqualTo;
    this._timeTraceStartedLessThan = config.timeTraceStartedLessThan;
    this._traceKey = config.traceKey;
    this._traceNamespace = config.traceNamespace;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apm_domain_id - computed: false, optional: false, required: true
  private _apmDomainId?: string; 
  public get apmDomainId() {
    return this.getStringAttribute('apm_domain_id');
  }
  public set apmDomainId(value: string) {
    this._apmDomainId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apmDomainIdInput() {
    return this._apmDomainId;
  }

  // error_span_count - computed: true, optional: false, required: false
  public get errorSpanCount() {
    return this.getNumberAttribute('error_span_count');
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

  // is_fault - computed: true, optional: false, required: false
  public get isFault() {
    return this.getBooleanAttribute('is_fault');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // root_span_duration_in_ms - computed: true, optional: false, required: false
  public get rootSpanDurationInMs() {
    return this.getNumberAttribute('root_span_duration_in_ms');
  }

  // root_span_operation_name - computed: true, optional: false, required: false
  public get rootSpanOperationName() {
    return this.getStringAttribute('root_span_operation_name');
  }

  // root_span_service_name - computed: true, optional: false, required: false
  public get rootSpanServiceName() {
    return this.getStringAttribute('root_span_service_name');
  }

  // service_summaries - computed: true, optional: false, required: false
  private _serviceSummaries = new DataOciApmTracesTraceServiceSummariesList(this, "service_summaries", false);
  public get serviceSummaries() {
    return this._serviceSummaries;
  }

  // source_name - computed: true, optional: false, required: false
  public get sourceName() {
    return this.getStringAttribute('source_name');
  }

  // span_count - computed: true, optional: false, required: false
  public get spanCount() {
    return this.getNumberAttribute('span_count');
  }

  // span_summary - computed: true, optional: false, required: false
  private _spanSummary = new DataOciApmTracesTraceSpanSummaryList(this, "span_summary", false);
  public get spanSummary() {
    return this._spanSummary;
  }

  // spans - computed: true, optional: false, required: false
  private _spans = new DataOciApmTracesTraceSpansList(this, "spans", false);
  public get spans() {
    return this._spans;
  }

  // time_earliest_span_started - computed: true, optional: false, required: false
  public get timeEarliestSpanStarted() {
    return this.getStringAttribute('time_earliest_span_started');
  }

  // time_latest_span_ended - computed: true, optional: false, required: false
  public get timeLatestSpanEnded() {
    return this.getStringAttribute('time_latest_span_ended');
  }

  // time_root_span_ended - computed: true, optional: false, required: false
  public get timeRootSpanEnded() {
    return this.getStringAttribute('time_root_span_ended');
  }

  // time_root_span_started - computed: true, optional: false, required: false
  public get timeRootSpanStarted() {
    return this.getStringAttribute('time_root_span_started');
  }

  // time_trace_started_greater_than_or_equal_to - computed: false, optional: true, required: false
  private _timeTraceStartedGreaterThanOrEqualTo?: string; 
  public get timeTraceStartedGreaterThanOrEqualTo() {
    return this.getStringAttribute('time_trace_started_greater_than_or_equal_to');
  }
  public set timeTraceStartedGreaterThanOrEqualTo(value: string) {
    this._timeTraceStartedGreaterThanOrEqualTo = value;
  }
  public resetTimeTraceStartedGreaterThanOrEqualTo() {
    this._timeTraceStartedGreaterThanOrEqualTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeTraceStartedGreaterThanOrEqualToInput() {
    return this._timeTraceStartedGreaterThanOrEqualTo;
  }

  // time_trace_started_less_than - computed: false, optional: true, required: false
  private _timeTraceStartedLessThan?: string; 
  public get timeTraceStartedLessThan() {
    return this.getStringAttribute('time_trace_started_less_than');
  }
  public set timeTraceStartedLessThan(value: string) {
    this._timeTraceStartedLessThan = value;
  }
  public resetTimeTraceStartedLessThan() {
    this._timeTraceStartedLessThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeTraceStartedLessThanInput() {
    return this._timeTraceStartedLessThan;
  }

  // trace_duration_in_ms - computed: true, optional: false, required: false
  public get traceDurationInMs() {
    return this.getNumberAttribute('trace_duration_in_ms');
  }

  // trace_error_code - computed: true, optional: false, required: false
  public get traceErrorCode() {
    return this.getStringAttribute('trace_error_code');
  }

  // trace_error_type - computed: true, optional: false, required: false
  public get traceErrorType() {
    return this.getStringAttribute('trace_error_type');
  }

  // trace_key - computed: false, optional: false, required: true
  private _traceKey?: string; 
  public get traceKey() {
    return this.getStringAttribute('trace_key');
  }
  public set traceKey(value: string) {
    this._traceKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get traceKeyInput() {
    return this._traceKey;
  }

  // trace_namespace - computed: false, optional: true, required: false
  private _traceNamespace?: string; 
  public get traceNamespace() {
    return this.getStringAttribute('trace_namespace');
  }
  public set traceNamespace(value: string) {
    this._traceNamespace = value;
  }
  public resetTraceNamespace() {
    this._traceNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traceNamespaceInput() {
    return this._traceNamespace;
  }

  // trace_status - computed: true, optional: false, required: false
  public get traceStatus() {
    return this.getStringAttribute('trace_status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      apm_domain_id: cdktf.stringToTerraform(this._apmDomainId),
      id: cdktf.stringToTerraform(this._id),
      time_trace_started_greater_than_or_equal_to: cdktf.stringToTerraform(this._timeTraceStartedGreaterThanOrEqualTo),
      time_trace_started_less_than: cdktf.stringToTerraform(this._timeTraceStartedLessThan),
      trace_key: cdktf.stringToTerraform(this._traceKey),
      trace_namespace: cdktf.stringToTerraform(this._traceNamespace),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      apm_domain_id: {
        value: cdktf.stringToHclTerraform(this._apmDomainId),
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
      time_trace_started_greater_than_or_equal_to: {
        value: cdktf.stringToHclTerraform(this._timeTraceStartedGreaterThanOrEqualTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_trace_started_less_than: {
        value: cdktf.stringToHclTerraform(this._timeTraceStartedLessThan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trace_key: {
        value: cdktf.stringToHclTerraform(this._traceKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trace_namespace: {
        value: cdktf.stringToHclTerraform(this._traceNamespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
