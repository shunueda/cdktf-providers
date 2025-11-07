import * as cdktf from 'cdktf';
import { DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFiltersMetricsOperatorOutputReference,
DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFiltersLogsOutputReference,
DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonLegendOutputReference,
DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartOutputReference,
DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableOutputReference,
DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeOutputReference } from './structs0'
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFiltersMetrics {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFiltersMetricsToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFiltersMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFiltersMetricsToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFiltersMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFiltersMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFiltersMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFiltersMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // metric_name - computed: true, optional: false, required: false
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }

  // operator - computed: true, optional: false, required: false
  private _operator = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFiltersMetricsOperatorOutputReference(this, "operator");
  public get operator() {
    return this._operator;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFiltersSpansField {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFiltersSpansFieldToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFiltersSpansField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFiltersSpansFieldToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFiltersSpansField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFiltersSpansFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFiltersSpansField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFiltersSpansField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFiltersSpansOperator {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFiltersSpansOperatorToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFiltersSpansOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFiltersSpansOperatorToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFiltersSpansOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFiltersSpansOperatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFiltersSpansOperator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFiltersSpansOperator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // selected_values - computed: true, optional: false, required: false
  public get selectedValues() {
    return this.getListAttribute('selected_values');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFiltersSpans {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFiltersSpansToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFiltersSpans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFiltersSpansToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFiltersSpans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFiltersSpansOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFiltersSpans | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFiltersSpans | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field - computed: true, optional: false, required: false
  private _field = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFiltersSpansFieldOutputReference(this, "field");
  public get field() {
    return this._field;
  }

  // operator - computed: true, optional: false, required: false
  private _operator = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFiltersSpansOperatorOutputReference(this, "operator");
  public get operator() {
    return this._operator;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFilters {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFiltersToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFiltersToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // logs - computed: true, optional: false, required: false
  private _logs = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFiltersLogsOutputReference(this, "logs");
  public get logs() {
    return this._logs;
  }

  // metrics - computed: true, optional: false, required: false
  private _metrics = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFiltersMetricsOutputReference(this, "metrics");
  public get metrics() {
    return this._metrics;
  }

  // spans - computed: true, optional: false, required: false
  private _spans = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFiltersSpansOutputReference(this, "spans");
  public get spans() {
    return this._spans;
  }
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFiltersList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFiltersOutputReference {
    return new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeTimeFrameAbsolute {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeTimeFrameAbsoluteToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeTimeFrameAbsolute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeTimeFrameAbsoluteToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeTimeFrameAbsolute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeTimeFrameAbsoluteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeTimeFrameAbsolute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeTimeFrameAbsolute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end - computed: true, optional: false, required: false
  public get end() {
    return this.getStringAttribute('end');
  }

  // start - computed: true, optional: false, required: false
  public get start() {
    return this.getStringAttribute('start');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeTimeFrameRelative {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeTimeFrameRelativeToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeTimeFrameRelative): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeTimeFrameRelativeToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeTimeFrameRelative): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeTimeFrameRelativeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeTimeFrameRelative | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeTimeFrameRelative | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getStringAttribute('duration');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeTimeFrame {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeTimeFrameToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeTimeFrame): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeTimeFrameToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeTimeFrame): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeTimeFrameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeTimeFrame | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeTimeFrame | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // absolute - computed: true, optional: false, required: false
  private _absolute = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeTimeFrameAbsoluteOutputReference(this, "absolute");
  public get absolute() {
    return this._absolute;
  }

  // relative - computed: true, optional: false, required: false
  private _relative = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeTimeFrameRelativeOutputReference(this, "relative");
  public get relative() {
    return this._relative;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrime {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // filters - computed: true, optional: false, required: false
  private _filters = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }

  // query - computed: true, optional: false, required: false
  public get query() {
    return this.getStringAttribute('query');
  }

  // time_frame - computed: true, optional: false, required: false
  private _timeFrame = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeTimeFrameOutputReference(this, "time_frame");
  public get timeFrame() {
    return this._timeFrame;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsAggregationObservationField {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsAggregationObservationFieldToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsAggregationObservationField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsAggregationObservationFieldToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsAggregationObservationField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsAggregationObservationFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsAggregationObservationField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsAggregationObservationField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // keypath - computed: true, optional: false, required: false
  public get keypath() {
    return this.getListAttribute('keypath');
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsAggregation {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsAggregationToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsAggregation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsAggregationToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsAggregation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsAggregationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsAggregation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsAggregation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field - computed: true, optional: false, required: false
  public get field() {
    return this.getStringAttribute('field');
  }

  // observation_field - computed: true, optional: false, required: false
  private _observationField = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsAggregationObservationFieldOutputReference(this, "observation_field");
  public get observationField() {
    return this._observationField;
  }

  // percent - computed: true, optional: false, required: false
  public get percent() {
    return this.getNumberAttribute('percent');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsFiltersObservationField {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsFiltersObservationFieldToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsFiltersObservationField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsFiltersObservationFieldToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsFiltersObservationField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsFiltersObservationFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsFiltersObservationField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsFiltersObservationField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // keypath - computed: true, optional: false, required: false
  public get keypath() {
    return this.getListAttribute('keypath');
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsFiltersOperator {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsFiltersOperatorToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsFiltersOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsFiltersOperatorToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsFiltersOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsFiltersOperatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsFiltersOperator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsFiltersOperator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // selected_values - computed: true, optional: false, required: false
  public get selectedValues() {
    return this.getListAttribute('selected_values');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsFilters {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsFiltersToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsFiltersToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field - computed: true, optional: false, required: false
  public get field() {
    return this.getStringAttribute('field');
  }

  // observation_field - computed: true, optional: false, required: false
  private _observationField = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsFiltersObservationFieldOutputReference(this, "observation_field");
  public get observationField() {
    return this._observationField;
  }

  // operator - computed: true, optional: false, required: false
  private _operator = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsFiltersOperatorOutputReference(this, "operator");
  public get operator() {
    return this._operator;
  }
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsFiltersList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsFiltersOutputReference {
    return new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsGroupBy {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsGroupByToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsGroupBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsGroupByToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsGroupBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsGroupByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsGroupBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsGroupBy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // keypath - computed: true, optional: false, required: false
  public get keypath() {
    return this.getListAttribute('keypath');
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsGroupByList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsGroupByOutputReference {
    return new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsTimeFrameAbsolute {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsTimeFrameAbsoluteToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsTimeFrameAbsolute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsTimeFrameAbsoluteToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsTimeFrameAbsolute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsTimeFrameAbsoluteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsTimeFrameAbsolute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsTimeFrameAbsolute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end - computed: true, optional: false, required: false
  public get end() {
    return this.getStringAttribute('end');
  }

  // start - computed: true, optional: false, required: false
  public get start() {
    return this.getStringAttribute('start');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsTimeFrameRelative {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsTimeFrameRelativeToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsTimeFrameRelative): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsTimeFrameRelativeToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsTimeFrameRelative): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsTimeFrameRelativeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsTimeFrameRelative | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsTimeFrameRelative | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getStringAttribute('duration');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsTimeFrame {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsTimeFrameToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsTimeFrame): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsTimeFrameToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsTimeFrame): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsTimeFrameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsTimeFrame | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsTimeFrame | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // absolute - computed: true, optional: false, required: false
  private _absolute = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsTimeFrameAbsoluteOutputReference(this, "absolute");
  public get absolute() {
    return this._absolute;
  }

  // relative - computed: true, optional: false, required: false
  private _relative = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsTimeFrameRelativeOutputReference(this, "relative");
  public get relative() {
    return this._relative;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogs {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggregation - computed: true, optional: false, required: false
  private _aggregation = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsAggregationOutputReference(this, "aggregation");
  public get aggregation() {
    return this._aggregation;
  }

  // filters - computed: true, optional: false, required: false
  private _filters = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }

  // group_by - computed: true, optional: false, required: false
  private _groupBy = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }

  // lucene_query - computed: true, optional: false, required: false
  public get luceneQuery() {
    return this.getStringAttribute('lucene_query');
  }

  // time_frame - computed: true, optional: false, required: false
  private _timeFrame = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsTimeFrameOutputReference(this, "time_frame");
  public get timeFrame() {
    return this._timeFrame;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryMetricsFiltersOperator {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryMetricsFiltersOperatorToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryMetricsFiltersOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryMetricsFiltersOperatorToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryMetricsFiltersOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryMetricsFiltersOperatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryMetricsFiltersOperator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryMetricsFiltersOperator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // selected_values - computed: true, optional: false, required: false
  public get selectedValues() {
    return this.getListAttribute('selected_values');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryMetricsFilters {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryMetricsFiltersToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryMetricsFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryMetricsFiltersToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryMetricsFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryMetricsFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryMetricsFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryMetricsFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // metric - computed: true, optional: false, required: false
  public get metric() {
    return this.getStringAttribute('metric');
  }

  // operator - computed: true, optional: false, required: false
  private _operator = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryMetricsFiltersOperatorOutputReference(this, "operator");
  public get operator() {
    return this._operator;
  }
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryMetricsFiltersList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryMetricsFiltersOutputReference {
    return new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryMetricsFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryMetricsTimeFrameAbsolute {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryMetricsTimeFrameAbsoluteToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryMetricsTimeFrameAbsolute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryMetricsTimeFrameAbsoluteToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryMetricsTimeFrameAbsolute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryMetricsTimeFrameAbsoluteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryMetricsTimeFrameAbsolute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryMetricsTimeFrameAbsolute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end - computed: true, optional: false, required: false
  public get end() {
    return this.getStringAttribute('end');
  }

  // start - computed: true, optional: false, required: false
  public get start() {
    return this.getStringAttribute('start');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryMetricsTimeFrameRelative {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryMetricsTimeFrameRelativeToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryMetricsTimeFrameRelative): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryMetricsTimeFrameRelativeToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryMetricsTimeFrameRelative): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryMetricsTimeFrameRelativeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryMetricsTimeFrameRelative | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryMetricsTimeFrameRelative | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getStringAttribute('duration');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryMetricsTimeFrame {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryMetricsTimeFrameToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryMetricsTimeFrame): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryMetricsTimeFrameToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryMetricsTimeFrame): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryMetricsTimeFrameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryMetricsTimeFrame | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryMetricsTimeFrame | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // absolute - computed: true, optional: false, required: false
  private _absolute = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryMetricsTimeFrameAbsoluteOutputReference(this, "absolute");
  public get absolute() {
    return this._absolute;
  }

  // relative - computed: true, optional: false, required: false
  private _relative = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryMetricsTimeFrameRelativeOutputReference(this, "relative");
  public get relative() {
    return this._relative;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryMetrics {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryMetricsToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryMetricsToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggregation - computed: true, optional: false, required: false
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }

  // filters - computed: true, optional: false, required: false
  private _filters = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryMetricsFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }

  // promql_query - computed: true, optional: false, required: false
  public get promqlQuery() {
    return this.getStringAttribute('promql_query');
  }

  // promql_query_type - computed: true, optional: false, required: false
  public get promqlQueryType() {
    return this.getStringAttribute('promql_query_type');
  }

  // time_frame - computed: true, optional: false, required: false
  private _timeFrame = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryMetricsTimeFrameOutputReference(this, "time_frame");
  public get timeFrame() {
    return this._timeFrame;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpansAggregation {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpansAggregationToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpansAggregation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpansAggregationToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpansAggregation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpansAggregationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpansAggregation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpansAggregation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggregation_type - computed: true, optional: false, required: false
  public get aggregationType() {
    return this.getStringAttribute('aggregation_type');
  }

  // field - computed: true, optional: false, required: false
  public get field() {
    return this.getStringAttribute('field');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpansFiltersField {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpansFiltersFieldToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpansFiltersField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpansFiltersFieldToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpansFiltersField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpansFiltersFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpansFiltersField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpansFiltersField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpansFiltersOperator {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpansFiltersOperatorToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpansFiltersOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpansFiltersOperatorToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpansFiltersOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpansFiltersOperatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpansFiltersOperator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpansFiltersOperator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // selected_values - computed: true, optional: false, required: false
  public get selectedValues() {
    return this.getListAttribute('selected_values');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpansFilters {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpansFiltersToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpansFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpansFiltersToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpansFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpansFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpansFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpansFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field - computed: true, optional: false, required: false
  private _field = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpansFiltersFieldOutputReference(this, "field");
  public get field() {
    return this._field;
  }

  // operator - computed: true, optional: false, required: false
  private _operator = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpansFiltersOperatorOutputReference(this, "operator");
  public get operator() {
    return this._operator;
  }
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpansFiltersList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpansFiltersOutputReference {
    return new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpansFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpansGroupBy {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpansGroupByToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpansGroupBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpansGroupByToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpansGroupBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpansGroupByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpansGroupBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpansGroupBy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpansGroupByList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpansGroupByOutputReference {
    return new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpansGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpansTimeFrameAbsolute {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpansTimeFrameAbsoluteToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpansTimeFrameAbsolute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpansTimeFrameAbsoluteToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpansTimeFrameAbsolute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpansTimeFrameAbsoluteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpansTimeFrameAbsolute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpansTimeFrameAbsolute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end - computed: true, optional: false, required: false
  public get end() {
    return this.getStringAttribute('end');
  }

  // start - computed: true, optional: false, required: false
  public get start() {
    return this.getStringAttribute('start');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpansTimeFrameRelative {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpansTimeFrameRelativeToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpansTimeFrameRelative): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpansTimeFrameRelativeToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpansTimeFrameRelative): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpansTimeFrameRelativeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpansTimeFrameRelative | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpansTimeFrameRelative | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getStringAttribute('duration');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpansTimeFrame {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpansTimeFrameToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpansTimeFrame): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpansTimeFrameToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpansTimeFrame): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpansTimeFrameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpansTimeFrame | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpansTimeFrame | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // absolute - computed: true, optional: false, required: false
  private _absolute = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpansTimeFrameAbsoluteOutputReference(this, "absolute");
  public get absolute() {
    return this._absolute;
  }

  // relative - computed: true, optional: false, required: false
  private _relative = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpansTimeFrameRelativeOutputReference(this, "relative");
  public get relative() {
    return this._relative;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpans {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpansToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpansToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpansOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpans | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpans | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggregation - computed: true, optional: false, required: false
  private _aggregation = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpansAggregationOutputReference(this, "aggregation");
  public get aggregation() {
    return this._aggregation;
  }

  // filters - computed: true, optional: false, required: false
  private _filters = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpansFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }

  // group_by - computed: true, optional: false, required: false
  private _groupBy = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpansGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }

  // lucene_query - computed: true, optional: false, required: false
  public get luceneQuery() {
    return this.getStringAttribute('lucene_query');
  }

  // time_frame - computed: true, optional: false, required: false
  private _timeFrame = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpansTimeFrameOutputReference(this, "time_frame");
  public get timeFrame() {
    return this._timeFrame;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuery {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_prime - computed: true, optional: false, required: false
  private _dataPrime = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeOutputReference(this, "data_prime");
  public get dataPrime() {
    return this._dataPrime;
  }

  // logs - computed: true, optional: false, required: false
  private _logs = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryLogsOutputReference(this, "logs");
  public get logs() {
    return this._logs;
  }

  // metrics - computed: true, optional: false, required: false
  private _metrics = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryMetricsOutputReference(this, "metrics");
  public get metrics() {
    return this._metrics;
  }

  // spans - computed: true, optional: false, required: false
  private _spans = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQuerySpansOutputReference(this, "spans");
  public get spans() {
    return this._spans;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonThresholds {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonThresholdsToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonThresholdsToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonThresholdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // color - computed: true, optional: false, required: false
  public get color() {
    return this.getStringAttribute('color');
  }

  // from - computed: true, optional: false, required: false
  public get from() {
    return this.getNumberAttribute('from');
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonThresholdsList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonThresholdsOutputReference {
    return new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonThresholdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagon {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagon): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagon): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagon | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagon | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_unit - computed: true, optional: false, required: false
  public get customUnit() {
    return this.getStringAttribute('custom_unit');
  }

  // data_mode_type - computed: true, optional: false, required: false
  public get dataModeType() {
    return this.getStringAttribute('data_mode_type');
  }

  // decimal - computed: true, optional: false, required: false
  public get decimal() {
    return this.getNumberAttribute('decimal');
  }

  // legend - computed: true, optional: false, required: false
  private _legend = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonLegendOutputReference(this, "legend");
  public get legend() {
    return this._legend;
  }

  // legend_by - computed: true, optional: false, required: false
  public get legendBy() {
    return this.getStringAttribute('legend_by');
  }

  // max - computed: true, optional: false, required: false
  public get max() {
    return this.getNumberAttribute('max');
  }

  // min - computed: true, optional: false, required: false
  public get min() {
    return this.getNumberAttribute('min');
  }

  // query - computed: true, optional: false, required: false
  private _query = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryOutputReference(this, "query");
  public get query() {
    return this._query;
  }

  // threshold_type - computed: true, optional: false, required: false
  public get thresholdType() {
    return this.getStringAttribute('threshold_type');
  }

  // thresholds - computed: true, optional: false, required: false
  private _thresholds = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonThresholdsList(this, "thresholds", true);
  public get thresholds() {
    return this._thresholds;
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeFiltersLogsObservationField {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeFiltersLogsObservationFieldToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeFiltersLogsObservationField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeFiltersLogsObservationFieldToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeFiltersLogsObservationField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeFiltersLogsObservationFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeFiltersLogsObservationField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeFiltersLogsObservationField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // keypath - computed: true, optional: false, required: false
  public get keypath() {
    return this.getListAttribute('keypath');
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeFiltersLogsOperator {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeFiltersLogsOperatorToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeFiltersLogsOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeFiltersLogsOperatorToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeFiltersLogsOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeFiltersLogsOperatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeFiltersLogsOperator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeFiltersLogsOperator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // selected_values - computed: true, optional: false, required: false
  public get selectedValues() {
    return this.getListAttribute('selected_values');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeFiltersLogs {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeFiltersLogsToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeFiltersLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeFiltersLogsToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeFiltersLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeFiltersLogsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeFiltersLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeFiltersLogs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field - computed: true, optional: false, required: false
  public get field() {
    return this.getStringAttribute('field');
  }

  // observation_field - computed: true, optional: false, required: false
  private _observationField = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeFiltersLogsObservationFieldOutputReference(this, "observation_field");
  public get observationField() {
    return this._observationField;
  }

  // operator - computed: true, optional: false, required: false
  private _operator = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeFiltersLogsOperatorOutputReference(this, "operator");
  public get operator() {
    return this._operator;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeFiltersMetricsOperator {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeFiltersMetricsOperatorToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeFiltersMetricsOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeFiltersMetricsOperatorToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeFiltersMetricsOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeFiltersMetricsOperatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeFiltersMetricsOperator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeFiltersMetricsOperator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // selected_values - computed: true, optional: false, required: false
  public get selectedValues() {
    return this.getListAttribute('selected_values');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeFiltersMetrics {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeFiltersMetricsToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeFiltersMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeFiltersMetricsToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeFiltersMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeFiltersMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeFiltersMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeFiltersMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // metric_name - computed: true, optional: false, required: false
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }

  // operator - computed: true, optional: false, required: false
  private _operator = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeFiltersMetricsOperatorOutputReference(this, "operator");
  public get operator() {
    return this._operator;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeFiltersSpansField {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeFiltersSpansFieldToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeFiltersSpansField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeFiltersSpansFieldToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeFiltersSpansField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeFiltersSpansFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeFiltersSpansField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeFiltersSpansField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeFiltersSpansOperator {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeFiltersSpansOperatorToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeFiltersSpansOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeFiltersSpansOperatorToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeFiltersSpansOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeFiltersSpansOperatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeFiltersSpansOperator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeFiltersSpansOperator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // selected_values - computed: true, optional: false, required: false
  public get selectedValues() {
    return this.getListAttribute('selected_values');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeFiltersSpans {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeFiltersSpansToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeFiltersSpans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeFiltersSpansToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeFiltersSpans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeFiltersSpansOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeFiltersSpans | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeFiltersSpans | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field - computed: true, optional: false, required: false
  private _field = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeFiltersSpansFieldOutputReference(this, "field");
  public get field() {
    return this._field;
  }

  // operator - computed: true, optional: false, required: false
  private _operator = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeFiltersSpansOperatorOutputReference(this, "operator");
  public get operator() {
    return this._operator;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeFilters {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeFiltersToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeFiltersToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // logs - computed: true, optional: false, required: false
  private _logs = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeFiltersLogsOutputReference(this, "logs");
  public get logs() {
    return this._logs;
  }

  // metrics - computed: true, optional: false, required: false
  private _metrics = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeFiltersMetricsOutputReference(this, "metrics");
  public get metrics() {
    return this._metrics;
  }

  // spans - computed: true, optional: false, required: false
  private _spans = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeFiltersSpansOutputReference(this, "spans");
  public get spans() {
    return this._spans;
  }
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeFiltersList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeFiltersOutputReference {
    return new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeTimeFrameAbsolute {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeTimeFrameAbsoluteToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeTimeFrameAbsolute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeTimeFrameAbsoluteToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeTimeFrameAbsolute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeTimeFrameAbsoluteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeTimeFrameAbsolute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeTimeFrameAbsolute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end - computed: true, optional: false, required: false
  public get end() {
    return this.getStringAttribute('end');
  }

  // start - computed: true, optional: false, required: false
  public get start() {
    return this.getStringAttribute('start');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeTimeFrameRelative {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeTimeFrameRelativeToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeTimeFrameRelative): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeTimeFrameRelativeToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeTimeFrameRelative): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeTimeFrameRelativeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeTimeFrameRelative | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeTimeFrameRelative | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getStringAttribute('duration');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeTimeFrame {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeTimeFrameToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeTimeFrame): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeTimeFrameToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeTimeFrame): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeTimeFrameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeTimeFrame | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeTimeFrame | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // absolute - computed: true, optional: false, required: false
  private _absolute = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeTimeFrameAbsoluteOutputReference(this, "absolute");
  public get absolute() {
    return this._absolute;
  }

  // relative - computed: true, optional: false, required: false
  private _relative = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeTimeFrameRelativeOutputReference(this, "relative");
  public get relative() {
    return this._relative;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrime {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // filters - computed: true, optional: false, required: false
  private _filters = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }

  // group_names - computed: true, optional: false, required: false
  public get groupNames() {
    return this.getListAttribute('group_names');
  }

  // query - computed: true, optional: false, required: false
  public get query() {
    return this.getStringAttribute('query');
  }

  // stacked_group_name - computed: true, optional: false, required: false
  public get stackedGroupName() {
    return this.getStringAttribute('stacked_group_name');
  }

  // time_frame - computed: true, optional: false, required: false
  private _timeFrame = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeTimeFrameOutputReference(this, "time_frame");
  public get timeFrame() {
    return this._timeFrame;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsAggregationObservationField {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsAggregationObservationFieldToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsAggregationObservationField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsAggregationObservationFieldToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsAggregationObservationField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsAggregationObservationFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsAggregationObservationField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsAggregationObservationField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // keypath - computed: true, optional: false, required: false
  public get keypath() {
    return this.getListAttribute('keypath');
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsAggregation {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsAggregationToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsAggregation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsAggregationToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsAggregation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsAggregationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsAggregation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsAggregation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field - computed: true, optional: false, required: false
  public get field() {
    return this.getStringAttribute('field');
  }

  // observation_field - computed: true, optional: false, required: false
  private _observationField = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsAggregationObservationFieldOutputReference(this, "observation_field");
  public get observationField() {
    return this._observationField;
  }

  // percent - computed: true, optional: false, required: false
  public get percent() {
    return this.getNumberAttribute('percent');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsFiltersObservationField {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsFiltersObservationFieldToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsFiltersObservationField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsFiltersObservationFieldToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsFiltersObservationField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsFiltersObservationFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsFiltersObservationField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsFiltersObservationField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // keypath - computed: true, optional: false, required: false
  public get keypath() {
    return this.getListAttribute('keypath');
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsFiltersOperator {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsFiltersOperatorToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsFiltersOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsFiltersOperatorToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsFiltersOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsFiltersOperatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsFiltersOperator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsFiltersOperator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // selected_values - computed: true, optional: false, required: false
  public get selectedValues() {
    return this.getListAttribute('selected_values');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsFilters {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsFiltersToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsFiltersToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field - computed: true, optional: false, required: false
  public get field() {
    return this.getStringAttribute('field');
  }

  // observation_field - computed: true, optional: false, required: false
  private _observationField = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsFiltersObservationFieldOutputReference(this, "observation_field");
  public get observationField() {
    return this._observationField;
  }

  // operator - computed: true, optional: false, required: false
  private _operator = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsFiltersOperatorOutputReference(this, "operator");
  public get operator() {
    return this._operator;
  }
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsFiltersList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsFiltersOutputReference {
    return new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsGroupNamesFields {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsGroupNamesFieldsToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsGroupNamesFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsGroupNamesFieldsToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsGroupNamesFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsGroupNamesFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsGroupNamesFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsGroupNamesFields | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // keypath - computed: true, optional: false, required: false
  public get keypath() {
    return this.getListAttribute('keypath');
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsGroupNamesFieldsList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsGroupNamesFieldsOutputReference {
    return new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsGroupNamesFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsStackedGroupNameField {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsStackedGroupNameFieldToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsStackedGroupNameField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsStackedGroupNameFieldToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsStackedGroupNameField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsStackedGroupNameFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsStackedGroupNameField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsStackedGroupNameField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // keypath - computed: true, optional: false, required: false
  public get keypath() {
    return this.getListAttribute('keypath');
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsTimeFrameAbsolute {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsTimeFrameAbsoluteToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsTimeFrameAbsolute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsTimeFrameAbsoluteToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsTimeFrameAbsolute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsTimeFrameAbsoluteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsTimeFrameAbsolute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsTimeFrameAbsolute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end - computed: true, optional: false, required: false
  public get end() {
    return this.getStringAttribute('end');
  }

  // start - computed: true, optional: false, required: false
  public get start() {
    return this.getStringAttribute('start');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsTimeFrameRelative {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsTimeFrameRelativeToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsTimeFrameRelative): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsTimeFrameRelativeToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsTimeFrameRelative): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsTimeFrameRelativeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsTimeFrameRelative | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsTimeFrameRelative | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getStringAttribute('duration');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsTimeFrame {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsTimeFrameToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsTimeFrame): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsTimeFrameToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsTimeFrame): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsTimeFrameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsTimeFrame | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsTimeFrame | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // absolute - computed: true, optional: false, required: false
  private _absolute = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsTimeFrameAbsoluteOutputReference(this, "absolute");
  public get absolute() {
    return this._absolute;
  }

  // relative - computed: true, optional: false, required: false
  private _relative = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsTimeFrameRelativeOutputReference(this, "relative");
  public get relative() {
    return this._relative;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogs {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggregation - computed: true, optional: false, required: false
  private _aggregation = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsAggregationOutputReference(this, "aggregation");
  public get aggregation() {
    return this._aggregation;
  }

  // filters - computed: true, optional: false, required: false
  private _filters = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }

  // group_names - computed: true, optional: false, required: false
  public get groupNames() {
    return this.getListAttribute('group_names');
  }

  // group_names_fields - computed: true, optional: false, required: false
  private _groupNamesFields = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsGroupNamesFieldsList(this, "group_names_fields", false);
  public get groupNamesFields() {
    return this._groupNamesFields;
  }

  // lucene_query - computed: true, optional: false, required: false
  public get luceneQuery() {
    return this.getStringAttribute('lucene_query');
  }

  // stacked_group_name - computed: true, optional: false, required: false
  public get stackedGroupName() {
    return this.getStringAttribute('stacked_group_name');
  }

  // stacked_group_name_field - computed: true, optional: false, required: false
  private _stackedGroupNameField = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsStackedGroupNameFieldOutputReference(this, "stacked_group_name_field");
  public get stackedGroupNameField() {
    return this._stackedGroupNameField;
  }

  // time_frame - computed: true, optional: false, required: false
  private _timeFrame = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsTimeFrameOutputReference(this, "time_frame");
  public get timeFrame() {
    return this._timeFrame;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryMetricsFiltersOperator {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryMetricsFiltersOperatorToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryMetricsFiltersOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryMetricsFiltersOperatorToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryMetricsFiltersOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryMetricsFiltersOperatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryMetricsFiltersOperator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryMetricsFiltersOperator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // selected_values - computed: true, optional: false, required: false
  public get selectedValues() {
    return this.getListAttribute('selected_values');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryMetricsFilters {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryMetricsFiltersToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryMetricsFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryMetricsFiltersToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryMetricsFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryMetricsFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryMetricsFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryMetricsFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // metric - computed: true, optional: false, required: false
  public get metric() {
    return this.getStringAttribute('metric');
  }

  // operator - computed: true, optional: false, required: false
  private _operator = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryMetricsFiltersOperatorOutputReference(this, "operator");
  public get operator() {
    return this._operator;
  }
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryMetricsFiltersList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryMetricsFiltersOutputReference {
    return new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryMetricsFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryMetricsTimeFrameAbsolute {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryMetricsTimeFrameAbsoluteToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryMetricsTimeFrameAbsolute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryMetricsTimeFrameAbsoluteToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryMetricsTimeFrameAbsolute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryMetricsTimeFrameAbsoluteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryMetricsTimeFrameAbsolute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryMetricsTimeFrameAbsolute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end - computed: true, optional: false, required: false
  public get end() {
    return this.getStringAttribute('end');
  }

  // start - computed: true, optional: false, required: false
  public get start() {
    return this.getStringAttribute('start');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryMetricsTimeFrameRelative {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryMetricsTimeFrameRelativeToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryMetricsTimeFrameRelative): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryMetricsTimeFrameRelativeToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryMetricsTimeFrameRelative): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryMetricsTimeFrameRelativeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryMetricsTimeFrameRelative | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryMetricsTimeFrameRelative | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getStringAttribute('duration');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryMetricsTimeFrame {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryMetricsTimeFrameToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryMetricsTimeFrame): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryMetricsTimeFrameToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryMetricsTimeFrame): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryMetricsTimeFrameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryMetricsTimeFrame | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryMetricsTimeFrame | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // absolute - computed: true, optional: false, required: false
  private _absolute = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryMetricsTimeFrameAbsoluteOutputReference(this, "absolute");
  public get absolute() {
    return this._absolute;
  }

  // relative - computed: true, optional: false, required: false
  private _relative = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryMetricsTimeFrameRelativeOutputReference(this, "relative");
  public get relative() {
    return this._relative;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryMetrics {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryMetricsToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryMetricsToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // filters - computed: true, optional: false, required: false
  private _filters = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryMetricsFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }

  // group_names - computed: true, optional: false, required: false
  public get groupNames() {
    return this.getListAttribute('group_names');
  }

  // promql_query - computed: true, optional: false, required: false
  public get promqlQuery() {
    return this.getStringAttribute('promql_query');
  }

  // stacked_group_name - computed: true, optional: false, required: false
  public get stackedGroupName() {
    return this.getStringAttribute('stacked_group_name');
  }

  // time_frame - computed: true, optional: false, required: false
  private _timeFrame = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryMetricsTimeFrameOutputReference(this, "time_frame");
  public get timeFrame() {
    return this._timeFrame;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansAggregation {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansAggregationToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansAggregation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansAggregationToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansAggregation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansAggregationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansAggregation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansAggregation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggregation_type - computed: true, optional: false, required: false
  public get aggregationType() {
    return this.getStringAttribute('aggregation_type');
  }

  // field - computed: true, optional: false, required: false
  public get field() {
    return this.getStringAttribute('field');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansFiltersField {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansFiltersFieldToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansFiltersField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansFiltersFieldToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansFiltersField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansFiltersFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansFiltersField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansFiltersField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansFiltersOperator {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansFiltersOperatorToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansFiltersOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansFiltersOperatorToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansFiltersOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansFiltersOperatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansFiltersOperator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansFiltersOperator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // selected_values - computed: true, optional: false, required: false
  public get selectedValues() {
    return this.getListAttribute('selected_values');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansFilters {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansFiltersToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansFiltersToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field - computed: true, optional: false, required: false
  private _field = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansFiltersFieldOutputReference(this, "field");
  public get field() {
    return this._field;
  }

  // operator - computed: true, optional: false, required: false
  private _operator = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansFiltersOperatorOutputReference(this, "operator");
  public get operator() {
    return this._operator;
  }
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansFiltersList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansFiltersOutputReference {
    return new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansGroupNames {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansGroupNamesToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansGroupNames): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansGroupNamesToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansGroupNames): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansGroupNamesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansGroupNames | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansGroupNames | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansGroupNamesList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansGroupNamesOutputReference {
    return new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansGroupNamesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansStackedGroupName {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansStackedGroupNameToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansStackedGroupName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansStackedGroupNameToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansStackedGroupName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansStackedGroupNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansStackedGroupName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansStackedGroupName | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansTimeFrameAbsolute {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansTimeFrameAbsoluteToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansTimeFrameAbsolute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansTimeFrameAbsoluteToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansTimeFrameAbsolute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansTimeFrameAbsoluteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansTimeFrameAbsolute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansTimeFrameAbsolute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end - computed: true, optional: false, required: false
  public get end() {
    return this.getStringAttribute('end');
  }

  // start - computed: true, optional: false, required: false
  public get start() {
    return this.getStringAttribute('start');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansTimeFrameRelative {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansTimeFrameRelativeToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansTimeFrameRelative): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansTimeFrameRelativeToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansTimeFrameRelative): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansTimeFrameRelativeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansTimeFrameRelative | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansTimeFrameRelative | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getStringAttribute('duration');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansTimeFrame {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansTimeFrameToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansTimeFrame): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansTimeFrameToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansTimeFrame): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansTimeFrameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansTimeFrame | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansTimeFrame | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // absolute - computed: true, optional: false, required: false
  private _absolute = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansTimeFrameAbsoluteOutputReference(this, "absolute");
  public get absolute() {
    return this._absolute;
  }

  // relative - computed: true, optional: false, required: false
  private _relative = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansTimeFrameRelativeOutputReference(this, "relative");
  public get relative() {
    return this._relative;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpans {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpans | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpans | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggregation - computed: true, optional: false, required: false
  private _aggregation = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansAggregationOutputReference(this, "aggregation");
  public get aggregation() {
    return this._aggregation;
  }

  // filters - computed: true, optional: false, required: false
  private _filters = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }

  // group_names - computed: true, optional: false, required: false
  private _groupNames = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansGroupNamesList(this, "group_names", false);
  public get groupNames() {
    return this._groupNames;
  }

  // lucene_query - computed: true, optional: false, required: false
  public get luceneQuery() {
    return this.getStringAttribute('lucene_query');
  }

  // stacked_group_name - computed: true, optional: false, required: false
  private _stackedGroupName = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansStackedGroupNameOutputReference(this, "stacked_group_name");
  public get stackedGroupName() {
    return this._stackedGroupName;
  }

  // time_frame - computed: true, optional: false, required: false
  private _timeFrame = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansTimeFrameOutputReference(this, "time_frame");
  public get timeFrame() {
    return this._timeFrame;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuery {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_prime - computed: true, optional: false, required: false
  private _dataPrime = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryDataPrimeOutputReference(this, "data_prime");
  public get dataPrime() {
    return this._dataPrime;
  }

  // logs - computed: true, optional: false, required: false
  private _logs = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryLogsOutputReference(this, "logs");
  public get logs() {
    return this._logs;
  }

  // metrics - computed: true, optional: false, required: false
  private _metrics = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryMetricsOutputReference(this, "metrics");
  public get metrics() {
    return this._metrics;
  }

  // spans - computed: true, optional: false, required: false
  private _spans = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQuerySpansOutputReference(this, "spans");
  public get spans() {
    return this._spans;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartStackDefinition {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartStackDefinitionToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartStackDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartStackDefinitionToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartStackDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartStackDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartStackDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartStackDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_slices_per_bar - computed: true, optional: false, required: false
  public get maxSlicesPerBar() {
    return this.getNumberAttribute('max_slices_per_bar');
  }

  // stack_name_template - computed: true, optional: false, required: false
  public get stackNameTemplate() {
    return this.getStringAttribute('stack_name_template');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChart {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChart): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChart): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChart | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChart | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // color_scheme - computed: true, optional: false, required: false
  public get colorScheme() {
    return this.getStringAttribute('color_scheme');
  }

  // colors_by - computed: true, optional: false, required: false
  public get colorsBy() {
    return this.getStringAttribute('colors_by');
  }

  // data_mode_type - computed: true, optional: false, required: false
  public get dataModeType() {
    return this.getStringAttribute('data_mode_type');
  }

  // display_on_bar - computed: true, optional: false, required: false
  public get displayOnBar() {
    return this.getBooleanAttribute('display_on_bar');
  }

  // group_name_template - computed: true, optional: false, required: false
  public get groupNameTemplate() {
    return this.getStringAttribute('group_name_template');
  }

  // max_bars_per_chart - computed: true, optional: false, required: false
  public get maxBarsPerChart() {
    return this.getNumberAttribute('max_bars_per_chart');
  }

  // query - computed: true, optional: false, required: false
  private _query = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartQueryOutputReference(this, "query");
  public get query() {
    return this._query;
  }

  // scale_type - computed: true, optional: false, required: false
  public get scaleType() {
    return this.getStringAttribute('scale_type');
  }

  // sort_by - computed: true, optional: false, required: false
  public get sortBy() {
    return this.getStringAttribute('sort_by');
  }

  // stack_definition - computed: true, optional: false, required: false
  private _stackDefinition = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartStackDefinitionOutputReference(this, "stack_definition");
  public get stackDefinition() {
    return this._stackDefinition;
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }

  // y_axis_view_by - computed: true, optional: false, required: false
  public get yAxisViewBy() {
    return this.getStringAttribute('y_axis_view_by');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartLegend {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartLegendToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartLegend): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartLegendToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartLegend): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartLegendOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartLegend | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartLegend | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // columns - computed: true, optional: false, required: false
  public get columns() {
    return this.getListAttribute('columns');
  }

  // group_by_query - computed: true, optional: false, required: false
  public get groupByQuery() {
    return this.getBooleanAttribute('group_by_query');
  }

  // is_visible - computed: true, optional: false, required: false
  public get isVisible() {
    return this.getBooleanAttribute('is_visible');
  }

  // placement - computed: true, optional: false, required: false
  public get placement() {
    return this.getStringAttribute('placement');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeFiltersLogsObservationField {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeFiltersLogsObservationFieldToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeFiltersLogsObservationField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeFiltersLogsObservationFieldToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeFiltersLogsObservationField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeFiltersLogsObservationFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeFiltersLogsObservationField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeFiltersLogsObservationField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // keypath - computed: true, optional: false, required: false
  public get keypath() {
    return this.getListAttribute('keypath');
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeFiltersLogsOperator {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeFiltersLogsOperatorToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeFiltersLogsOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeFiltersLogsOperatorToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeFiltersLogsOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeFiltersLogsOperatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeFiltersLogsOperator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeFiltersLogsOperator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // selected_values - computed: true, optional: false, required: false
  public get selectedValues() {
    return this.getListAttribute('selected_values');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeFiltersLogs {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeFiltersLogsToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeFiltersLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeFiltersLogsToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeFiltersLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeFiltersLogsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeFiltersLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeFiltersLogs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field - computed: true, optional: false, required: false
  public get field() {
    return this.getStringAttribute('field');
  }

  // observation_field - computed: true, optional: false, required: false
  private _observationField = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeFiltersLogsObservationFieldOutputReference(this, "observation_field");
  public get observationField() {
    return this._observationField;
  }

  // operator - computed: true, optional: false, required: false
  private _operator = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeFiltersLogsOperatorOutputReference(this, "operator");
  public get operator() {
    return this._operator;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeFiltersMetricsOperator {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeFiltersMetricsOperatorToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeFiltersMetricsOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeFiltersMetricsOperatorToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeFiltersMetricsOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeFiltersMetricsOperatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeFiltersMetricsOperator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeFiltersMetricsOperator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // selected_values - computed: true, optional: false, required: false
  public get selectedValues() {
    return this.getListAttribute('selected_values');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeFiltersMetrics {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeFiltersMetricsToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeFiltersMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeFiltersMetricsToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeFiltersMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeFiltersMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeFiltersMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeFiltersMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // metric_name - computed: true, optional: false, required: false
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }

  // operator - computed: true, optional: false, required: false
  private _operator = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeFiltersMetricsOperatorOutputReference(this, "operator");
  public get operator() {
    return this._operator;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeFiltersSpansField {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeFiltersSpansFieldToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeFiltersSpansField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeFiltersSpansFieldToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeFiltersSpansField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeFiltersSpansFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeFiltersSpansField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeFiltersSpansField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeFiltersSpansOperator {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeFiltersSpansOperatorToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeFiltersSpansOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeFiltersSpansOperatorToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeFiltersSpansOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeFiltersSpansOperatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeFiltersSpansOperator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeFiltersSpansOperator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // selected_values - computed: true, optional: false, required: false
  public get selectedValues() {
    return this.getListAttribute('selected_values');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeFiltersSpans {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeFiltersSpansToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeFiltersSpans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeFiltersSpansToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeFiltersSpans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeFiltersSpansOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeFiltersSpans | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeFiltersSpans | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field - computed: true, optional: false, required: false
  private _field = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeFiltersSpansFieldOutputReference(this, "field");
  public get field() {
    return this._field;
  }

  // operator - computed: true, optional: false, required: false
  private _operator = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeFiltersSpansOperatorOutputReference(this, "operator");
  public get operator() {
    return this._operator;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeFilters {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeFiltersToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeFiltersToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // logs - computed: true, optional: false, required: false
  private _logs = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeFiltersLogsOutputReference(this, "logs");
  public get logs() {
    return this._logs;
  }

  // metrics - computed: true, optional: false, required: false
  private _metrics = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeFiltersMetricsOutputReference(this, "metrics");
  public get metrics() {
    return this._metrics;
  }

  // spans - computed: true, optional: false, required: false
  private _spans = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeFiltersSpansOutputReference(this, "spans");
  public get spans() {
    return this._spans;
  }
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeFiltersList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeFiltersOutputReference {
    return new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeTimeFrameAbsolute {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeTimeFrameAbsoluteToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeTimeFrameAbsolute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeTimeFrameAbsoluteToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeTimeFrameAbsolute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeTimeFrameAbsoluteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeTimeFrameAbsolute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeTimeFrameAbsolute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end - computed: true, optional: false, required: false
  public get end() {
    return this.getStringAttribute('end');
  }

  // start - computed: true, optional: false, required: false
  public get start() {
    return this.getStringAttribute('start');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeTimeFrameRelative {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeTimeFrameRelativeToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeTimeFrameRelative): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeTimeFrameRelativeToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeTimeFrameRelative): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeTimeFrameRelativeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeTimeFrameRelative | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeTimeFrameRelative | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getStringAttribute('duration');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeTimeFrame {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeTimeFrameToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeTimeFrame): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeTimeFrameToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeTimeFrame): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeTimeFrameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeTimeFrame | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeTimeFrame | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // absolute - computed: true, optional: false, required: false
  private _absolute = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeTimeFrameAbsoluteOutputReference(this, "absolute");
  public get absolute() {
    return this._absolute;
  }

  // relative - computed: true, optional: false, required: false
  private _relative = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeTimeFrameRelativeOutputReference(this, "relative");
  public get relative() {
    return this._relative;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrime {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // filters - computed: true, optional: false, required: false
  private _filters = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }

  // query - computed: true, optional: false, required: false
  public get query() {
    return this.getStringAttribute('query');
  }

  // time_frame - computed: true, optional: false, required: false
  private _timeFrame = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeTimeFrameOutputReference(this, "time_frame");
  public get timeFrame() {
    return this._timeFrame;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogsAggregationsObservationField {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogsAggregationsObservationFieldToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogsAggregationsObservationField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogsAggregationsObservationFieldToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogsAggregationsObservationField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogsAggregationsObservationFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogsAggregationsObservationField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogsAggregationsObservationField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // keypath - computed: true, optional: false, required: false
  public get keypath() {
    return this.getListAttribute('keypath');
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogsAggregations {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogsAggregationsToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogsAggregations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogsAggregationsToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogsAggregations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogsAggregationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogsAggregations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogsAggregations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field - computed: true, optional: false, required: false
  public get field() {
    return this.getStringAttribute('field');
  }

  // observation_field - computed: true, optional: false, required: false
  private _observationField = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogsAggregationsObservationFieldOutputReference(this, "observation_field");
  public get observationField() {
    return this._observationField;
  }

  // percent - computed: true, optional: false, required: false
  public get percent() {
    return this.getNumberAttribute('percent');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogsAggregationsList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogsAggregationsOutputReference {
    return new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogsAggregationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogsFiltersObservationField {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogsFiltersObservationFieldToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogsFiltersObservationField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogsFiltersObservationFieldToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogsFiltersObservationField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogsFiltersObservationFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogsFiltersObservationField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogsFiltersObservationField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // keypath - computed: true, optional: false, required: false
  public get keypath() {
    return this.getListAttribute('keypath');
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogsFiltersOperator {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogsFiltersOperatorToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogsFiltersOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogsFiltersOperatorToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogsFiltersOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogsFiltersOperatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogsFiltersOperator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogsFiltersOperator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // selected_values - computed: true, optional: false, required: false
  public get selectedValues() {
    return this.getListAttribute('selected_values');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogsFilters {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogsFiltersToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogsFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogsFiltersToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogsFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogsFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogsFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogsFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field - computed: true, optional: false, required: false
  public get field() {
    return this.getStringAttribute('field');
  }

  // observation_field - computed: true, optional: false, required: false
  private _observationField = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogsFiltersObservationFieldOutputReference(this, "observation_field");
  public get observationField() {
    return this._observationField;
  }

  // operator - computed: true, optional: false, required: false
  private _operator = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogsFiltersOperatorOutputReference(this, "operator");
  public get operator() {
    return this._operator;
  }
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogsFiltersList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogsFiltersOutputReference {
    return new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogsFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogsTimeFrameAbsolute {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogsTimeFrameAbsoluteToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogsTimeFrameAbsolute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogsTimeFrameAbsoluteToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogsTimeFrameAbsolute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogsTimeFrameAbsoluteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogsTimeFrameAbsolute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogsTimeFrameAbsolute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end - computed: true, optional: false, required: false
  public get end() {
    return this.getStringAttribute('end');
  }

  // start - computed: true, optional: false, required: false
  public get start() {
    return this.getStringAttribute('start');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogsTimeFrameRelative {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogsTimeFrameRelativeToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogsTimeFrameRelative): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogsTimeFrameRelativeToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogsTimeFrameRelative): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogsTimeFrameRelativeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogsTimeFrameRelative | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogsTimeFrameRelative | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getStringAttribute('duration');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogsTimeFrame {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogsTimeFrameToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogsTimeFrame): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogsTimeFrameToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogsTimeFrame): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogsTimeFrameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogsTimeFrame | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogsTimeFrame | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // absolute - computed: true, optional: false, required: false
  private _absolute = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogsTimeFrameAbsoluteOutputReference(this, "absolute");
  public get absolute() {
    return this._absolute;
  }

  // relative - computed: true, optional: false, required: false
  private _relative = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogsTimeFrameRelativeOutputReference(this, "relative");
  public get relative() {
    return this._relative;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogs {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogsToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogsToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggregations - computed: true, optional: false, required: false
  private _aggregations = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogsAggregationsList(this, "aggregations", false);
  public get aggregations() {
    return this._aggregations;
  }

  // filters - computed: true, optional: false, required: false
  private _filters = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogsFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }

  // group_by - computed: true, optional: false, required: false
  public get groupBy() {
    return this.getListAttribute('group_by');
  }

  // lucene_query - computed: true, optional: false, required: false
  public get luceneQuery() {
    return this.getStringAttribute('lucene_query');
  }

  // time_frame - computed: true, optional: false, required: false
  private _timeFrame = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogsTimeFrameOutputReference(this, "time_frame");
  public get timeFrame() {
    return this._timeFrame;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryMetricsFiltersOperator {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryMetricsFiltersOperatorToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryMetricsFiltersOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryMetricsFiltersOperatorToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryMetricsFiltersOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryMetricsFiltersOperatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryMetricsFiltersOperator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryMetricsFiltersOperator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // selected_values - computed: true, optional: false, required: false
  public get selectedValues() {
    return this.getListAttribute('selected_values');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryMetricsFilters {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryMetricsFiltersToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryMetricsFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryMetricsFiltersToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryMetricsFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryMetricsFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryMetricsFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryMetricsFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // metric - computed: true, optional: false, required: false
  public get metric() {
    return this.getStringAttribute('metric');
  }

  // operator - computed: true, optional: false, required: false
  private _operator = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryMetricsFiltersOperatorOutputReference(this, "operator");
  public get operator() {
    return this._operator;
  }
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryMetricsFiltersList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryMetricsFiltersOutputReference {
    return new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryMetricsFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryMetricsTimeFrameAbsolute {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryMetricsTimeFrameAbsoluteToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryMetricsTimeFrameAbsolute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryMetricsTimeFrameAbsoluteToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryMetricsTimeFrameAbsolute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryMetricsTimeFrameAbsoluteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryMetricsTimeFrameAbsolute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryMetricsTimeFrameAbsolute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end - computed: true, optional: false, required: false
  public get end() {
    return this.getStringAttribute('end');
  }

  // start - computed: true, optional: false, required: false
  public get start() {
    return this.getStringAttribute('start');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryMetricsTimeFrameRelative {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryMetricsTimeFrameRelativeToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryMetricsTimeFrameRelative): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryMetricsTimeFrameRelativeToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryMetricsTimeFrameRelative): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryMetricsTimeFrameRelativeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryMetricsTimeFrameRelative | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryMetricsTimeFrameRelative | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getStringAttribute('duration');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryMetricsTimeFrame {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryMetricsTimeFrameToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryMetricsTimeFrame): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryMetricsTimeFrameToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryMetricsTimeFrame): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryMetricsTimeFrameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryMetricsTimeFrame | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryMetricsTimeFrame | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // absolute - computed: true, optional: false, required: false
  private _absolute = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryMetricsTimeFrameAbsoluteOutputReference(this, "absolute");
  public get absolute() {
    return this._absolute;
  }

  // relative - computed: true, optional: false, required: false
  private _relative = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryMetricsTimeFrameRelativeOutputReference(this, "relative");
  public get relative() {
    return this._relative;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryMetrics {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryMetricsToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryMetricsToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // filters - computed: true, optional: false, required: false
  private _filters = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryMetricsFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }

  // promql_query - computed: true, optional: false, required: false
  public get promqlQuery() {
    return this.getStringAttribute('promql_query');
  }

  // promql_query_type - computed: true, optional: false, required: false
  public get promqlQueryType() {
    return this.getStringAttribute('promql_query_type');
  }

  // time_frame - computed: true, optional: false, required: false
  private _timeFrame = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryMetricsTimeFrameOutputReference(this, "time_frame");
  public get timeFrame() {
    return this._timeFrame;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansAggregations {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansAggregationsToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansAggregations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansAggregationsToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansAggregations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansAggregationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansAggregations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansAggregations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggregation_type - computed: true, optional: false, required: false
  public get aggregationType() {
    return this.getStringAttribute('aggregation_type');
  }

  // field - computed: true, optional: false, required: false
  public get field() {
    return this.getStringAttribute('field');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansAggregationsList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansAggregationsOutputReference {
    return new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansAggregationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansFiltersField {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansFiltersFieldToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansFiltersField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansFiltersFieldToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansFiltersField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansFiltersFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansFiltersField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansFiltersField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansFiltersOperator {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansFiltersOperatorToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansFiltersOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansFiltersOperatorToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansFiltersOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansFiltersOperatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansFiltersOperator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansFiltersOperator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // selected_values - computed: true, optional: false, required: false
  public get selectedValues() {
    return this.getListAttribute('selected_values');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansFilters {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansFiltersToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansFiltersToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field - computed: true, optional: false, required: false
  private _field = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansFiltersFieldOutputReference(this, "field");
  public get field() {
    return this._field;
  }

  // operator - computed: true, optional: false, required: false
  private _operator = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansFiltersOperatorOutputReference(this, "operator");
  public get operator() {
    return this._operator;
  }
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansFiltersList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansFiltersOutputReference {
    return new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansGroupBy {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansGroupByToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansGroupBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansGroupByToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansGroupBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansGroupByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansGroupBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansGroupBy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansGroupByList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansGroupByOutputReference {
    return new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansTimeFrameAbsolute {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansTimeFrameAbsoluteToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansTimeFrameAbsolute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansTimeFrameAbsoluteToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansTimeFrameAbsolute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansTimeFrameAbsoluteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansTimeFrameAbsolute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansTimeFrameAbsolute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end - computed: true, optional: false, required: false
  public get end() {
    return this.getStringAttribute('end');
  }

  // start - computed: true, optional: false, required: false
  public get start() {
    return this.getStringAttribute('start');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansTimeFrameRelative {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansTimeFrameRelativeToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansTimeFrameRelative): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansTimeFrameRelativeToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansTimeFrameRelative): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansTimeFrameRelativeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansTimeFrameRelative | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansTimeFrameRelative | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getStringAttribute('duration');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansTimeFrame {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansTimeFrameToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansTimeFrame): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansTimeFrameToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansTimeFrame): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansTimeFrameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansTimeFrame | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansTimeFrame | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // absolute - computed: true, optional: false, required: false
  private _absolute = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansTimeFrameAbsoluteOutputReference(this, "absolute");
  public get absolute() {
    return this._absolute;
  }

  // relative - computed: true, optional: false, required: false
  private _relative = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansTimeFrameRelativeOutputReference(this, "relative");
  public get relative() {
    return this._relative;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpans {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpans | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpans | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggregations - computed: true, optional: false, required: false
  private _aggregations = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansAggregationsList(this, "aggregations", false);
  public get aggregations() {
    return this._aggregations;
  }

  // filters - computed: true, optional: false, required: false
  private _filters = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }

  // group_by - computed: true, optional: false, required: false
  private _groupBy = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }

  // lucene_query - computed: true, optional: false, required: false
  public get luceneQuery() {
    return this.getStringAttribute('lucene_query');
  }

  // time_frame - computed: true, optional: false, required: false
  private _timeFrame = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansTimeFrameOutputReference(this, "time_frame");
  public get timeFrame() {
    return this._timeFrame;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuery {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_prime - computed: true, optional: false, required: false
  private _dataPrime = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryDataPrimeOutputReference(this, "data_prime");
  public get dataPrime() {
    return this._dataPrime;
  }

  // logs - computed: true, optional: false, required: false
  private _logs = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryLogsOutputReference(this, "logs");
  public get logs() {
    return this._logs;
  }

  // metrics - computed: true, optional: false, required: false
  private _metrics = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryMetricsOutputReference(this, "metrics");
  public get metrics() {
    return this._metrics;
  }

  // spans - computed: true, optional: false, required: false
  private _spans = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQuerySpansOutputReference(this, "spans");
  public get spans() {
    return this._spans;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsResolution {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsResolutionToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsResolution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsResolutionToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsResolution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsResolutionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsResolution | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsResolution | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // buckets_presented - computed: true, optional: false, required: false
  public get bucketsPresented() {
    return this.getNumberAttribute('buckets_presented');
  }

  // interval - computed: true, optional: false, required: false
  public get interval() {
    return this.getStringAttribute('interval');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitions {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // color_scheme - computed: true, optional: false, required: false
  public get colorScheme() {
    return this.getStringAttribute('color_scheme');
  }

  // data_mode_type - computed: true, optional: false, required: false
  public get dataModeType() {
    return this.getStringAttribute('data_mode_type');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_visible - computed: true, optional: false, required: false
  public get isVisible() {
    return this.getBooleanAttribute('is_visible');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // query - computed: true, optional: false, required: false
  private _query = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsQueryOutputReference(this, "query");
  public get query() {
    return this._query;
  }

  // resolution - computed: true, optional: false, required: false
  private _resolution = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsResolutionOutputReference(this, "resolution");
  public get resolution() {
    return this._resolution;
  }

  // scale_type - computed: true, optional: false, required: false
  public get scaleType() {
    return this.getStringAttribute('scale_type');
  }

  // series_count_limit - computed: true, optional: false, required: false
  public get seriesCountLimit() {
    return this.getNumberAttribute('series_count_limit');
  }

  // series_name_template - computed: true, optional: false, required: false
  public get seriesNameTemplate() {
    return this.getStringAttribute('series_name_template');
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsOutputReference {
    return new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartTooltip {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartTooltipToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartTooltip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartTooltipToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartTooltip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartTooltipOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartTooltip | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartTooltip | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // show_labels - computed: true, optional: false, required: false
  public get showLabels() {
    return this.getBooleanAttribute('show_labels');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChart {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChart): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChart): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChart | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChart | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // legend - computed: true, optional: false, required: false
  private _legend = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartLegendOutputReference(this, "legend");
  public get legend() {
    return this._legend;
  }

  // query_definitions - computed: true, optional: false, required: false
  private _queryDefinitions = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartQueryDefinitionsList(this, "query_definitions", false);
  public get queryDefinitions() {
    return this._queryDefinitions;
  }

  // stacked_line - computed: true, optional: false, required: false
  public get stackedLine() {
    return this.getStringAttribute('stacked_line');
  }

  // tooltip - computed: true, optional: false, required: false
  private _tooltip = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartTooltipOutputReference(this, "tooltip");
  public get tooltip() {
    return this._tooltip;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionMarkdown {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionMarkdownToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionMarkdown): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionMarkdownToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionMarkdown): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionMarkdownOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionMarkdown | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionMarkdown | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // markdown_text - computed: true, optional: false, required: false
  public get markdownText() {
    return this.getStringAttribute('markdown_text');
  }

  // tooltip_text - computed: true, optional: false, required: false
  public get tooltipText() {
    return this.getStringAttribute('tooltip_text');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartLabelDefinition {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartLabelDefinitionToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartLabelDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartLabelDefinitionToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartLabelDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartLabelDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartLabelDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartLabelDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_visible - computed: true, optional: false, required: false
  public get isVisible() {
    return this.getBooleanAttribute('is_visible');
  }

  // label_source - computed: true, optional: false, required: false
  public get labelSource() {
    return this.getStringAttribute('label_source');
  }

  // show_name - computed: true, optional: false, required: false
  public get showName() {
    return this.getBooleanAttribute('show_name');
  }

  // show_percentage - computed: true, optional: false, required: false
  public get showPercentage() {
    return this.getBooleanAttribute('show_percentage');
  }

  // show_value - computed: true, optional: false, required: false
  public get showValue() {
    return this.getBooleanAttribute('show_value');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeFiltersLogsObservationField {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeFiltersLogsObservationFieldToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeFiltersLogsObservationField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeFiltersLogsObservationFieldToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeFiltersLogsObservationField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeFiltersLogsObservationFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeFiltersLogsObservationField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeFiltersLogsObservationField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // keypath - computed: true, optional: false, required: false
  public get keypath() {
    return this.getListAttribute('keypath');
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeFiltersLogsOperator {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeFiltersLogsOperatorToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeFiltersLogsOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeFiltersLogsOperatorToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeFiltersLogsOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeFiltersLogsOperatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeFiltersLogsOperator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeFiltersLogsOperator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // selected_values - computed: true, optional: false, required: false
  public get selectedValues() {
    return this.getListAttribute('selected_values');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeFiltersLogs {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeFiltersLogsToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeFiltersLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeFiltersLogsToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeFiltersLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeFiltersLogsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeFiltersLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeFiltersLogs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field - computed: true, optional: false, required: false
  public get field() {
    return this.getStringAttribute('field');
  }

  // observation_field - computed: true, optional: false, required: false
  private _observationField = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeFiltersLogsObservationFieldOutputReference(this, "observation_field");
  public get observationField() {
    return this._observationField;
  }

  // operator - computed: true, optional: false, required: false
  private _operator = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeFiltersLogsOperatorOutputReference(this, "operator");
  public get operator() {
    return this._operator;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeFiltersMetricsOperator {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeFiltersMetricsOperatorToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeFiltersMetricsOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeFiltersMetricsOperatorToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeFiltersMetricsOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeFiltersMetricsOperatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeFiltersMetricsOperator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeFiltersMetricsOperator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // selected_values - computed: true, optional: false, required: false
  public get selectedValues() {
    return this.getListAttribute('selected_values');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeFiltersMetrics {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeFiltersMetricsToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeFiltersMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeFiltersMetricsToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeFiltersMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeFiltersMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeFiltersMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeFiltersMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // metric_name - computed: true, optional: false, required: false
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }

  // operator - computed: true, optional: false, required: false
  private _operator = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeFiltersMetricsOperatorOutputReference(this, "operator");
  public get operator() {
    return this._operator;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeFiltersSpansField {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeFiltersSpansFieldToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeFiltersSpansField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeFiltersSpansFieldToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeFiltersSpansField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeFiltersSpansFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeFiltersSpansField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeFiltersSpansField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeFiltersSpansOperator {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeFiltersSpansOperatorToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeFiltersSpansOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeFiltersSpansOperatorToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeFiltersSpansOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeFiltersSpansOperatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeFiltersSpansOperator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeFiltersSpansOperator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // selected_values - computed: true, optional: false, required: false
  public get selectedValues() {
    return this.getListAttribute('selected_values');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeFiltersSpans {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeFiltersSpansToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeFiltersSpans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeFiltersSpansToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeFiltersSpans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeFiltersSpansOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeFiltersSpans | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeFiltersSpans | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field - computed: true, optional: false, required: false
  private _field = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeFiltersSpansFieldOutputReference(this, "field");
  public get field() {
    return this._field;
  }

  // operator - computed: true, optional: false, required: false
  private _operator = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeFiltersSpansOperatorOutputReference(this, "operator");
  public get operator() {
    return this._operator;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeFilters {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeFiltersToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeFiltersToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // logs - computed: true, optional: false, required: false
  private _logs = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeFiltersLogsOutputReference(this, "logs");
  public get logs() {
    return this._logs;
  }

  // metrics - computed: true, optional: false, required: false
  private _metrics = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeFiltersMetricsOutputReference(this, "metrics");
  public get metrics() {
    return this._metrics;
  }

  // spans - computed: true, optional: false, required: false
  private _spans = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeFiltersSpansOutputReference(this, "spans");
  public get spans() {
    return this._spans;
  }
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeFiltersList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeFiltersOutputReference {
    return new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeTimeFrameAbsolute {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeTimeFrameAbsoluteToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeTimeFrameAbsolute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeTimeFrameAbsoluteToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeTimeFrameAbsolute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeTimeFrameAbsoluteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeTimeFrameAbsolute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeTimeFrameAbsolute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end - computed: true, optional: false, required: false
  public get end() {
    return this.getStringAttribute('end');
  }

  // start - computed: true, optional: false, required: false
  public get start() {
    return this.getStringAttribute('start');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeTimeFrameRelative {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeTimeFrameRelativeToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeTimeFrameRelative): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeTimeFrameRelativeToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeTimeFrameRelative): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeTimeFrameRelativeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeTimeFrameRelative | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeTimeFrameRelative | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getStringAttribute('duration');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeTimeFrame {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeTimeFrameToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeTimeFrame): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeTimeFrameToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeTimeFrame): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeTimeFrameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeTimeFrame | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeTimeFrame | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // absolute - computed: true, optional: false, required: false
  private _absolute = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeTimeFrameAbsoluteOutputReference(this, "absolute");
  public get absolute() {
    return this._absolute;
  }

  // relative - computed: true, optional: false, required: false
  private _relative = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeTimeFrameRelativeOutputReference(this, "relative");
  public get relative() {
    return this._relative;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrime {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // filters - computed: true, optional: false, required: false
  private _filters = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }

  // group_names - computed: true, optional: false, required: false
  public get groupNames() {
    return this.getListAttribute('group_names');
  }

  // query - computed: true, optional: false, required: false
  public get query() {
    return this.getStringAttribute('query');
  }

  // stacked_group_name - computed: true, optional: false, required: false
  public get stackedGroupName() {
    return this.getStringAttribute('stacked_group_name');
  }

  // time_frame - computed: true, optional: false, required: false
  private _timeFrame = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeTimeFrameOutputReference(this, "time_frame");
  public get timeFrame() {
    return this._timeFrame;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsAggregationObservationField {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsAggregationObservationFieldToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsAggregationObservationField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsAggregationObservationFieldToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsAggregationObservationField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsAggregationObservationFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsAggregationObservationField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsAggregationObservationField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // keypath - computed: true, optional: false, required: false
  public get keypath() {
    return this.getListAttribute('keypath');
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsAggregation {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsAggregationToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsAggregation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsAggregationToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsAggregation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsAggregationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsAggregation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsAggregation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field - computed: true, optional: false, required: false
  public get field() {
    return this.getStringAttribute('field');
  }

  // observation_field - computed: true, optional: false, required: false
  private _observationField = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsAggregationObservationFieldOutputReference(this, "observation_field");
  public get observationField() {
    return this._observationField;
  }

  // percent - computed: true, optional: false, required: false
  public get percent() {
    return this.getNumberAttribute('percent');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsFiltersObservationField {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsFiltersObservationFieldToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsFiltersObservationField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsFiltersObservationFieldToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsFiltersObservationField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsFiltersObservationFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsFiltersObservationField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsFiltersObservationField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // keypath - computed: true, optional: false, required: false
  public get keypath() {
    return this.getListAttribute('keypath');
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsFiltersOperator {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsFiltersOperatorToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsFiltersOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsFiltersOperatorToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsFiltersOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsFiltersOperatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsFiltersOperator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsFiltersOperator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // selected_values - computed: true, optional: false, required: false
  public get selectedValues() {
    return this.getListAttribute('selected_values');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsFilters {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsFiltersToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsFiltersToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field - computed: true, optional: false, required: false
  public get field() {
    return this.getStringAttribute('field');
  }

  // observation_field - computed: true, optional: false, required: false
  private _observationField = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsFiltersObservationFieldOutputReference(this, "observation_field");
  public get observationField() {
    return this._observationField;
  }

  // operator - computed: true, optional: false, required: false
  private _operator = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsFiltersOperatorOutputReference(this, "operator");
  public get operator() {
    return this._operator;
  }
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsFiltersList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsFiltersOutputReference {
    return new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsGroupNamesFields {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsGroupNamesFieldsToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsGroupNamesFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsGroupNamesFieldsToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsGroupNamesFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsGroupNamesFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsGroupNamesFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsGroupNamesFields | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // keypath - computed: true, optional: false, required: false
  public get keypath() {
    return this.getListAttribute('keypath');
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsGroupNamesFieldsList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsGroupNamesFieldsOutputReference {
    return new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsGroupNamesFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsStackedGroupNameField {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsStackedGroupNameFieldToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsStackedGroupNameField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsStackedGroupNameFieldToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsStackedGroupNameField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsStackedGroupNameFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsStackedGroupNameField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsStackedGroupNameField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // keypath - computed: true, optional: false, required: false
  public get keypath() {
    return this.getListAttribute('keypath');
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsTimeFrameAbsolute {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsTimeFrameAbsoluteToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsTimeFrameAbsolute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsTimeFrameAbsoluteToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsTimeFrameAbsolute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsTimeFrameAbsoluteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsTimeFrameAbsolute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsTimeFrameAbsolute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end - computed: true, optional: false, required: false
  public get end() {
    return this.getStringAttribute('end');
  }

  // start - computed: true, optional: false, required: false
  public get start() {
    return this.getStringAttribute('start');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsTimeFrameRelative {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsTimeFrameRelativeToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsTimeFrameRelative): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsTimeFrameRelativeToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsTimeFrameRelative): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsTimeFrameRelativeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsTimeFrameRelative | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsTimeFrameRelative | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getStringAttribute('duration');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsTimeFrame {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsTimeFrameToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsTimeFrame): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsTimeFrameToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsTimeFrame): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsTimeFrameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsTimeFrame | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsTimeFrame | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // absolute - computed: true, optional: false, required: false
  private _absolute = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsTimeFrameAbsoluteOutputReference(this, "absolute");
  public get absolute() {
    return this._absolute;
  }

  // relative - computed: true, optional: false, required: false
  private _relative = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsTimeFrameRelativeOutputReference(this, "relative");
  public get relative() {
    return this._relative;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogs {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggregation - computed: true, optional: false, required: false
  private _aggregation = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsAggregationOutputReference(this, "aggregation");
  public get aggregation() {
    return this._aggregation;
  }

  // filters - computed: true, optional: false, required: false
  private _filters = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }

  // group_names - computed: true, optional: false, required: false
  public get groupNames() {
    return this.getListAttribute('group_names');
  }

  // group_names_fields - computed: true, optional: false, required: false
  private _groupNamesFields = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsGroupNamesFieldsList(this, "group_names_fields", false);
  public get groupNamesFields() {
    return this._groupNamesFields;
  }

  // lucene_query - computed: true, optional: false, required: false
  public get luceneQuery() {
    return this.getStringAttribute('lucene_query');
  }

  // stacked_group_name - computed: true, optional: false, required: false
  public get stackedGroupName() {
    return this.getStringAttribute('stacked_group_name');
  }

  // stacked_group_name_field - computed: true, optional: false, required: false
  private _stackedGroupNameField = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsStackedGroupNameFieldOutputReference(this, "stacked_group_name_field");
  public get stackedGroupNameField() {
    return this._stackedGroupNameField;
  }

  // time_frame - computed: true, optional: false, required: false
  private _timeFrame = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsTimeFrameOutputReference(this, "time_frame");
  public get timeFrame() {
    return this._timeFrame;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryMetricsFiltersOperator {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryMetricsFiltersOperatorToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryMetricsFiltersOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryMetricsFiltersOperatorToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryMetricsFiltersOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryMetricsFiltersOperatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryMetricsFiltersOperator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryMetricsFiltersOperator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // selected_values - computed: true, optional: false, required: false
  public get selectedValues() {
    return this.getListAttribute('selected_values');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryMetricsFilters {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryMetricsFiltersToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryMetricsFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryMetricsFiltersToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryMetricsFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryMetricsFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryMetricsFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryMetricsFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // metric - computed: true, optional: false, required: false
  public get metric() {
    return this.getStringAttribute('metric');
  }

  // operator - computed: true, optional: false, required: false
  private _operator = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryMetricsFiltersOperatorOutputReference(this, "operator");
  public get operator() {
    return this._operator;
  }
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryMetricsFiltersList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryMetricsFiltersOutputReference {
    return new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryMetricsFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryMetricsTimeFrameAbsolute {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryMetricsTimeFrameAbsoluteToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryMetricsTimeFrameAbsolute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryMetricsTimeFrameAbsoluteToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryMetricsTimeFrameAbsolute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryMetricsTimeFrameAbsoluteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryMetricsTimeFrameAbsolute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryMetricsTimeFrameAbsolute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end - computed: true, optional: false, required: false
  public get end() {
    return this.getStringAttribute('end');
  }

  // start - computed: true, optional: false, required: false
  public get start() {
    return this.getStringAttribute('start');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryMetricsTimeFrameRelative {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryMetricsTimeFrameRelativeToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryMetricsTimeFrameRelative): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryMetricsTimeFrameRelativeToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryMetricsTimeFrameRelative): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryMetricsTimeFrameRelativeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryMetricsTimeFrameRelative | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryMetricsTimeFrameRelative | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getStringAttribute('duration');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryMetricsTimeFrame {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryMetricsTimeFrameToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryMetricsTimeFrame): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryMetricsTimeFrameToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryMetricsTimeFrame): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryMetricsTimeFrameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryMetricsTimeFrame | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryMetricsTimeFrame | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // absolute - computed: true, optional: false, required: false
  private _absolute = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryMetricsTimeFrameAbsoluteOutputReference(this, "absolute");
  public get absolute() {
    return this._absolute;
  }

  // relative - computed: true, optional: false, required: false
  private _relative = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryMetricsTimeFrameRelativeOutputReference(this, "relative");
  public get relative() {
    return this._relative;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryMetrics {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryMetricsToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryMetricsToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // filters - computed: true, optional: false, required: false
  private _filters = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryMetricsFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }

  // group_names - computed: true, optional: false, required: false
  public get groupNames() {
    return this.getListAttribute('group_names');
  }

  // promql_query - computed: true, optional: false, required: false
  public get promqlQuery() {
    return this.getStringAttribute('promql_query');
  }

  // stacked_group_name - computed: true, optional: false, required: false
  public get stackedGroupName() {
    return this.getStringAttribute('stacked_group_name');
  }

  // time_frame - computed: true, optional: false, required: false
  private _timeFrame = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryMetricsTimeFrameOutputReference(this, "time_frame");
  public get timeFrame() {
    return this._timeFrame;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansAggregation {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansAggregationToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansAggregation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansAggregationToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansAggregation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansAggregationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansAggregation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansAggregation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggregation_type - computed: true, optional: false, required: false
  public get aggregationType() {
    return this.getStringAttribute('aggregation_type');
  }

  // field - computed: true, optional: false, required: false
  public get field() {
    return this.getStringAttribute('field');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansFiltersField {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansFiltersFieldToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansFiltersField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansFiltersFieldToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansFiltersField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansFiltersFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansFiltersField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansFiltersField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansFiltersOperator {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansFiltersOperatorToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansFiltersOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansFiltersOperatorToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansFiltersOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansFiltersOperatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansFiltersOperator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansFiltersOperator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // selected_values - computed: true, optional: false, required: false
  public get selectedValues() {
    return this.getListAttribute('selected_values');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansFilters {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansFiltersToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansFiltersToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field - computed: true, optional: false, required: false
  private _field = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansFiltersFieldOutputReference(this, "field");
  public get field() {
    return this._field;
  }

  // operator - computed: true, optional: false, required: false
  private _operator = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansFiltersOperatorOutputReference(this, "operator");
  public get operator() {
    return this._operator;
  }
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansFiltersList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansFiltersOutputReference {
    return new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansGroupNames {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansGroupNamesToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansGroupNames): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansGroupNamesToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansGroupNames): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansGroupNamesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansGroupNames | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansGroupNames | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansGroupNamesList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansGroupNamesOutputReference {
    return new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansGroupNamesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansStackedGroupName {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansStackedGroupNameToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansStackedGroupName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansStackedGroupNameToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansStackedGroupName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansStackedGroupNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansStackedGroupName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansStackedGroupName | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansTimeFrameAbsolute {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansTimeFrameAbsoluteToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansTimeFrameAbsolute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansTimeFrameAbsoluteToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansTimeFrameAbsolute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansTimeFrameAbsoluteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansTimeFrameAbsolute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansTimeFrameAbsolute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end - computed: true, optional: false, required: false
  public get end() {
    return this.getStringAttribute('end');
  }

  // start - computed: true, optional: false, required: false
  public get start() {
    return this.getStringAttribute('start');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansTimeFrameRelative {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansTimeFrameRelativeToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansTimeFrameRelative): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansTimeFrameRelativeToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansTimeFrameRelative): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansTimeFrameRelativeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansTimeFrameRelative | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansTimeFrameRelative | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getStringAttribute('duration');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansTimeFrame {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansTimeFrameToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansTimeFrame): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansTimeFrameToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansTimeFrame): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansTimeFrameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansTimeFrame | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansTimeFrame | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // absolute - computed: true, optional: false, required: false
  private _absolute = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansTimeFrameAbsoluteOutputReference(this, "absolute");
  public get absolute() {
    return this._absolute;
  }

  // relative - computed: true, optional: false, required: false
  private _relative = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansTimeFrameRelativeOutputReference(this, "relative");
  public get relative() {
    return this._relative;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpans {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpans | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpans | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggregation - computed: true, optional: false, required: false
  private _aggregation = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansAggregationOutputReference(this, "aggregation");
  public get aggregation() {
    return this._aggregation;
  }

  // filters - computed: true, optional: false, required: false
  private _filters = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }

  // group_names - computed: true, optional: false, required: false
  private _groupNames = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansGroupNamesList(this, "group_names", false);
  public get groupNames() {
    return this._groupNames;
  }

  // lucene_query - computed: true, optional: false, required: false
  public get luceneQuery() {
    return this.getStringAttribute('lucene_query');
  }

  // stacked_group_name - computed: true, optional: false, required: false
  private _stackedGroupName = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansStackedGroupNameOutputReference(this, "stacked_group_name");
  public get stackedGroupName() {
    return this._stackedGroupName;
  }

  // time_frame - computed: true, optional: false, required: false
  private _timeFrame = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansTimeFrameOutputReference(this, "time_frame");
  public get timeFrame() {
    return this._timeFrame;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuery {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_prime - computed: true, optional: false, required: false
  private _dataPrime = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryDataPrimeOutputReference(this, "data_prime");
  public get dataPrime() {
    return this._dataPrime;
  }

  // logs - computed: true, optional: false, required: false
  private _logs = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryLogsOutputReference(this, "logs");
  public get logs() {
    return this._logs;
  }

  // metrics - computed: true, optional: false, required: false
  private _metrics = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryMetricsOutputReference(this, "metrics");
  public get metrics() {
    return this._metrics;
  }

  // spans - computed: true, optional: false, required: false
  private _spans = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQuerySpansOutputReference(this, "spans");
  public get spans() {
    return this._spans;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartStackDefinition {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartStackDefinitionToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartStackDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartStackDefinitionToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartStackDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartStackDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartStackDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartStackDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_slices_per_stack - computed: true, optional: false, required: false
  public get maxSlicesPerStack() {
    return this.getNumberAttribute('max_slices_per_stack');
  }

  // stack_name_template - computed: true, optional: false, required: false
  public get stackNameTemplate() {
    return this.getStringAttribute('stack_name_template');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChart {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChart): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChart): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChart | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChart | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // color_scheme - computed: true, optional: false, required: false
  public get colorScheme() {
    return this.getStringAttribute('color_scheme');
  }

  // data_mode_type - computed: true, optional: false, required: false
  public get dataModeType() {
    return this.getStringAttribute('data_mode_type');
  }

  // group_name_template - computed: true, optional: false, required: false
  public get groupNameTemplate() {
    return this.getStringAttribute('group_name_template');
  }

  // label_definition - computed: true, optional: false, required: false
  private _labelDefinition = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartLabelDefinitionOutputReference(this, "label_definition");
  public get labelDefinition() {
    return this._labelDefinition;
  }

  // max_slices_per_chart - computed: true, optional: false, required: false
  public get maxSlicesPerChart() {
    return this.getNumberAttribute('max_slices_per_chart');
  }

  // min_slice_percentage - computed: true, optional: false, required: false
  public get minSlicePercentage() {
    return this.getNumberAttribute('min_slice_percentage');
  }

  // query - computed: true, optional: false, required: false
  private _query = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartQueryOutputReference(this, "query");
  public get query() {
    return this._query;
  }

  // show_legend - computed: true, optional: false, required: false
  public get showLegend() {
    return this.getBooleanAttribute('show_legend');
  }

  // stack_definition - computed: true, optional: false, required: false
  private _stackDefinition = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartStackDefinitionOutputReference(this, "stack_definition");
  public get stackDefinition() {
    return this._stackDefinition;
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinition {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bar_chart - computed: true, optional: false, required: false
  private _barChart = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartOutputReference(this, "bar_chart");
  public get barChart() {
    return this._barChart;
  }

  // data_table - computed: true, optional: false, required: false
  private _dataTable = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableOutputReference(this, "data_table");
  public get dataTable() {
    return this._dataTable;
  }

  // gauge - computed: true, optional: false, required: false
  private _gauge = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeOutputReference(this, "gauge");
  public get gauge() {
    return this._gauge;
  }

  // hexagon - computed: true, optional: false, required: false
  private _hexagon = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonOutputReference(this, "hexagon");
  public get hexagon() {
    return this._hexagon;
  }

  // horizontal_bar_chart - computed: true, optional: false, required: false
  private _horizontalBarChart = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHorizontalBarChartOutputReference(this, "horizontal_bar_chart");
  public get horizontalBarChart() {
    return this._horizontalBarChart;
  }

  // line_chart - computed: true, optional: false, required: false
  private _lineChart = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionLineChartOutputReference(this, "line_chart");
  public get lineChart() {
    return this._lineChart;
  }

  // markdown - computed: true, optional: false, required: false
  private _markdown = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionMarkdownOutputReference(this, "markdown");
  public get markdown() {
    return this._markdown;
  }

  // pie_chart - computed: true, optional: false, required: false
  private _pieChart = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionPieChartOutputReference(this, "pie_chart");
  public get pieChart() {
    return this._pieChart;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgets {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // definition - computed: true, optional: false, required: false
  private _definition = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionOutputReference(this, "definition");
  public get definition() {
    return this._definition;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }

  // width - computed: true, optional: false, required: false
  public get width() {
    return this.getNumberAttribute('width');
  }
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixDashboardLayoutSectionsRowsWidgetsOutputReference {
    return new DataCoralogixDashboardLayoutSectionsRowsWidgetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixDashboardLayoutSectionsRows {
}

export function dataCoralogixDashboardLayoutSectionsRowsToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRows): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRows): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRows | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRows | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // height - computed: true, optional: false, required: false
  public get height() {
    return this.getNumberAttribute('height');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // widgets - computed: true, optional: false, required: false
  private _widgets = new DataCoralogixDashboardLayoutSectionsRowsWidgetsList(this, "widgets", false);
  public get widgets() {
    return this._widgets;
  }
}

export class DataCoralogixDashboardLayoutSectionsRowsList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixDashboardLayoutSectionsRowsOutputReference {
    return new DataCoralogixDashboardLayoutSectionsRowsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
