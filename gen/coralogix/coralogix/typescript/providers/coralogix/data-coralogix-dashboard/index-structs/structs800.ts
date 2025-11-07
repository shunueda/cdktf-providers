import * as cdktf from 'cdktf';
import { DataCoralogixDashboardLayoutSectionsOptionsOutputReference } from './structs0'
import { DataCoralogixDashboardLayoutSectionsRowsList } from './structs400'
export interface DataCoralogixDashboardLayoutSections {
}

export function dataCoralogixDashboardLayoutSectionsToTerraform(struct?: DataCoralogixDashboardLayoutSections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsToHclTerraform(struct?: DataCoralogixDashboardLayoutSections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixDashboardLayoutSections | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSections | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // options - computed: true, optional: false, required: false
  private _options = new DataCoralogixDashboardLayoutSectionsOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }

  // rows - computed: true, optional: false, required: false
  private _rows = new DataCoralogixDashboardLayoutSectionsRowsList(this, "rows", false);
  public get rows() {
    return this._rows;
  }
}

export class DataCoralogixDashboardLayoutSectionsList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixDashboardLayoutSectionsOutputReference {
    return new DataCoralogixDashboardLayoutSectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixDashboardLayout {
}

export function dataCoralogixDashboardLayoutToTerraform(struct?: DataCoralogixDashboardLayout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutToHclTerraform(struct?: DataCoralogixDashboardLayout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // sections - computed: true, optional: false, required: false
  private _sections = new DataCoralogixDashboardLayoutSectionsList(this, "sections", false);
  public get sections() {
    return this._sections;
  }
}
export interface DataCoralogixDashboardTimeFrameAbsolute {
}

export function dataCoralogixDashboardTimeFrameAbsoluteToTerraform(struct?: DataCoralogixDashboardTimeFrameAbsolute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardTimeFrameAbsoluteToHclTerraform(struct?: DataCoralogixDashboardTimeFrameAbsolute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardTimeFrameAbsoluteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardTimeFrameAbsolute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardTimeFrameAbsolute | undefined) {
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
export interface DataCoralogixDashboardTimeFrameRelative {
}

export function dataCoralogixDashboardTimeFrameRelativeToTerraform(struct?: DataCoralogixDashboardTimeFrameRelative): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardTimeFrameRelativeToHclTerraform(struct?: DataCoralogixDashboardTimeFrameRelative): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardTimeFrameRelativeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardTimeFrameRelative | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardTimeFrameRelative | undefined) {
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
export interface DataCoralogixDashboardTimeFrame {
}

export function dataCoralogixDashboardTimeFrameToTerraform(struct?: DataCoralogixDashboardTimeFrame): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardTimeFrameToHclTerraform(struct?: DataCoralogixDashboardTimeFrame): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardTimeFrameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardTimeFrame | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardTimeFrame | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // absolute - computed: true, optional: false, required: false
  private _absolute = new DataCoralogixDashboardTimeFrameAbsoluteOutputReference(this, "absolute");
  public get absolute() {
    return this._absolute;
  }

  // relative - computed: true, optional: false, required: false
  private _relative = new DataCoralogixDashboardTimeFrameRelativeOutputReference(this, "relative");
  public get relative() {
    return this._relative;
  }
}
export interface DataCoralogixDashboardVariablesDefinitionMultiSelectSourceMetricLabel {
}

export function dataCoralogixDashboardVariablesDefinitionMultiSelectSourceMetricLabelToTerraform(struct?: DataCoralogixDashboardVariablesDefinitionMultiSelectSourceMetricLabel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardVariablesDefinitionMultiSelectSourceMetricLabelToHclTerraform(struct?: DataCoralogixDashboardVariablesDefinitionMultiSelectSourceMetricLabel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardVariablesDefinitionMultiSelectSourceMetricLabelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardVariablesDefinitionMultiSelectSourceMetricLabel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardVariablesDefinitionMultiSelectSourceMetricLabel | undefined) {
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
}
export interface DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryLogsFieldName {
}

export function dataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryLogsFieldNameToTerraform(struct?: DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryLogsFieldName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryLogsFieldNameToHclTerraform(struct?: DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryLogsFieldName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryLogsFieldNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryLogsFieldName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryLogsFieldName | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // log_regex - computed: true, optional: false, required: false
  public get logRegex() {
    return this.getStringAttribute('log_regex');
  }
}
export interface DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryLogsFieldValueObservationField {
}

export function dataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryLogsFieldValueObservationFieldToTerraform(struct?: DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryLogsFieldValueObservationField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryLogsFieldValueObservationFieldToHclTerraform(struct?: DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryLogsFieldValueObservationField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryLogsFieldValueObservationFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryLogsFieldValueObservationField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryLogsFieldValueObservationField | undefined) {
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
export interface DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryLogsFieldValue {
}

export function dataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryLogsFieldValueToTerraform(struct?: DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryLogsFieldValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryLogsFieldValueToHclTerraform(struct?: DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryLogsFieldValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryLogsFieldValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryLogsFieldValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryLogsFieldValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // observation_field - computed: true, optional: false, required: false
  private _observationField = new DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryLogsFieldValueObservationFieldOutputReference(this, "observation_field");
  public get observationField() {
    return this._observationField;
  }
}
export interface DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryLogs {
}

export function dataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryLogsToTerraform(struct?: DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryLogsToHclTerraform(struct?: DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryLogsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryLogs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field_name - computed: true, optional: false, required: false
  private _fieldName = new DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryLogsFieldNameOutputReference(this, "field_name");
  public get fieldName() {
    return this._fieldName;
  }

  // field_value - computed: true, optional: false, required: false
  private _fieldValue = new DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryLogsFieldValueOutputReference(this, "field_value");
  public get fieldValue() {
    return this._fieldValue;
  }
}
export interface DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelName {
}

export function dataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelNameToTerraform(struct?: DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelNameToHclTerraform(struct?: DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelName | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metric_regex - computed: true, optional: false, required: false
  public get metricRegex() {
    return this.getStringAttribute('metric_regex');
  }
}
export interface DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersLabel {
}

export function dataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersLabelToTerraform(struct?: DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersLabel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersLabelToHclTerraform(struct?: DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersLabel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersLabelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersLabel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersLabel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // string_value - computed: true, optional: false, required: false
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }

  // variable_name - computed: true, optional: false, required: false
  public get variableName() {
    return this.getStringAttribute('variable_name');
  }
}
export interface DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersMetric {
}

export function dataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersMetricToTerraform(struct?: DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersMetricToHclTerraform(struct?: DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersMetric | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersMetric | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // string_value - computed: true, optional: false, required: false
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }

  // variable_name - computed: true, optional: false, required: false
  public get variableName() {
    return this.getStringAttribute('variable_name');
  }
}
export interface DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersOperatorSelectedValues {
}

export function dataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersOperatorSelectedValuesToTerraform(struct?: DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersOperatorSelectedValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersOperatorSelectedValuesToHclTerraform(struct?: DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersOperatorSelectedValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersOperatorSelectedValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersOperatorSelectedValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersOperatorSelectedValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // string_value - computed: true, optional: false, required: false
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }

  // variable_name - computed: true, optional: false, required: false
  public get variableName() {
    return this.getStringAttribute('variable_name');
  }
}

export class DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersOperatorSelectedValuesList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersOperatorSelectedValuesOutputReference {
    return new DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersOperatorSelectedValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersOperator {
}

export function dataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersOperatorToTerraform(struct?: DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersOperatorToHclTerraform(struct?: DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersOperatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersOperator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersOperator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // selected_values - computed: true, optional: false, required: false
  private _selectedValues = new DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersOperatorSelectedValuesList(this, "selected_values", false);
  public get selectedValues() {
    return this._selectedValues;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFilters {
}

export function dataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersToTerraform(struct?: DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersToHclTerraform(struct?: DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // label - computed: true, optional: false, required: false
  private _label = new DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersLabelOutputReference(this, "label");
  public get label() {
    return this._label;
  }

  // metric - computed: true, optional: false, required: false
  private _metric = new DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }

  // operator - computed: true, optional: false, required: false
  private _operator = new DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersOperatorOutputReference(this, "operator");
  public get operator() {
    return this._operator;
  }
}

export class DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersOutputReference {
    return new DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelName {
}

export function dataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelNameToTerraform(struct?: DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelNameToHclTerraform(struct?: DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelName | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // string_value - computed: true, optional: false, required: false
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }

  // variable_name - computed: true, optional: false, required: false
  public get variableName() {
    return this.getStringAttribute('variable_name');
  }
}
export interface DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueMetricName {
}

export function dataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueMetricNameToTerraform(struct?: DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueMetricName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueMetricNameToHclTerraform(struct?: DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueMetricName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueMetricNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueMetricName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueMetricName | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // string_value - computed: true, optional: false, required: false
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }

  // variable_name - computed: true, optional: false, required: false
  public get variableName() {
    return this.getStringAttribute('variable_name');
  }
}
export interface DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValue {
}

export function dataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueToTerraform(struct?: DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueToHclTerraform(struct?: DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // label_filters - computed: true, optional: false, required: false
  private _labelFilters = new DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersList(this, "label_filters", false);
  public get labelFilters() {
    return this._labelFilters;
  }

  // label_name - computed: true, optional: false, required: false
  private _labelName = new DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelNameOutputReference(this, "label_name");
  public get labelName() {
    return this._labelName;
  }

  // metric_name - computed: true, optional: false, required: false
  private _metricName = new DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueMetricNameOutputReference(this, "metric_name");
  public get metricName() {
    return this._metricName;
  }
}
export interface DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsMetricName {
}

export function dataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsMetricNameToTerraform(struct?: DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsMetricName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsMetricNameToHclTerraform(struct?: DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsMetricName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsMetricNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsMetricName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsMetricName | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metric_regex - computed: true, optional: false, required: false
  public get metricRegex() {
    return this.getStringAttribute('metric_regex');
  }
}
export interface DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetrics {
}

export function dataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsToTerraform(struct?: DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsToHclTerraform(struct?: DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // label_name - computed: true, optional: false, required: false
  private _labelName = new DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelNameOutputReference(this, "label_name");
  public get labelName() {
    return this._labelName;
  }

  // label_value - computed: true, optional: false, required: false
  private _labelValue = new DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueOutputReference(this, "label_value");
  public get labelValue() {
    return this._labelValue;
  }

  // metric_name - computed: true, optional: false, required: false
  private _metricName = new DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsMetricNameOutputReference(this, "metric_name");
  public get metricName() {
    return this._metricName;
  }
}
export interface DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQuerySpansFieldName {
}

export function dataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQuerySpansFieldNameToTerraform(struct?: DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQuerySpansFieldName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQuerySpansFieldNameToHclTerraform(struct?: DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQuerySpansFieldName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQuerySpansFieldNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQuerySpansFieldName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQuerySpansFieldName | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // span_regex - computed: true, optional: false, required: false
  public get spanRegex() {
    return this.getStringAttribute('span_regex');
  }
}
export interface DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQuerySpansFieldValue {
}

export function dataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQuerySpansFieldValueToTerraform(struct?: DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQuerySpansFieldValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQuerySpansFieldValueToHclTerraform(struct?: DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQuerySpansFieldValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQuerySpansFieldValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQuerySpansFieldValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQuerySpansFieldValue | undefined) {
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
export interface DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQuerySpans {
}

export function dataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQuerySpansToTerraform(struct?: DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQuerySpans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQuerySpansToHclTerraform(struct?: DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQuerySpans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQuerySpansOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQuerySpans | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQuerySpans | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field_name - computed: true, optional: false, required: false
  private _fieldName = new DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQuerySpansFieldNameOutputReference(this, "field_name");
  public get fieldName() {
    return this._fieldName;
  }

  // field_value - computed: true, optional: false, required: false
  private _fieldValue = new DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQuerySpansFieldValueOutputReference(this, "field_value");
  public get fieldValue() {
    return this._fieldValue;
  }
}
export interface DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQuery {
}

export function dataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryToTerraform(struct?: DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryToHclTerraform(struct?: DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // logs - computed: true, optional: false, required: false
  private _logs = new DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryLogsOutputReference(this, "logs");
  public get logs() {
    return this._logs;
  }

  // metrics - computed: true, optional: false, required: false
  private _metrics = new DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsOutputReference(this, "metrics");
  public get metrics() {
    return this._metrics;
  }

  // spans - computed: true, optional: false, required: false
  private _spans = new DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQuerySpansOutputReference(this, "spans");
  public get spans() {
    return this._spans;
  }
}
export interface DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryValueDisplayOptions {
}

export function dataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryValueDisplayOptionsToTerraform(struct?: DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryValueDisplayOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryValueDisplayOptionsToHclTerraform(struct?: DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryValueDisplayOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryValueDisplayOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryValueDisplayOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryValueDisplayOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // label_regex - computed: true, optional: false, required: false
  public get labelRegex() {
    return this.getStringAttribute('label_regex');
  }

  // value_regex - computed: true, optional: false, required: false
  public get valueRegex() {
    return this.getStringAttribute('value_regex');
  }
}
export interface DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQuery {
}

export function dataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryToTerraform(struct?: DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryToHclTerraform(struct?: DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // query - computed: true, optional: false, required: false
  private _query = new DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryQueryOutputReference(this, "query");
  public get query() {
    return this._query;
  }

  // refresh_strategy - computed: true, optional: false, required: false
  public get refreshStrategy() {
    return this.getStringAttribute('refresh_strategy');
  }

  // value_display_options - computed: true, optional: false, required: false
  private _valueDisplayOptions = new DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryValueDisplayOptionsOutputReference(this, "value_display_options");
  public get valueDisplayOptions() {
    return this._valueDisplayOptions;
  }
}
export interface DataCoralogixDashboardVariablesDefinitionMultiSelectSourceSpanField {
}

export function dataCoralogixDashboardVariablesDefinitionMultiSelectSourceSpanFieldToTerraform(struct?: DataCoralogixDashboardVariablesDefinitionMultiSelectSourceSpanField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardVariablesDefinitionMultiSelectSourceSpanFieldToHclTerraform(struct?: DataCoralogixDashboardVariablesDefinitionMultiSelectSourceSpanField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardVariablesDefinitionMultiSelectSourceSpanFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardVariablesDefinitionMultiSelectSourceSpanField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardVariablesDefinitionMultiSelectSourceSpanField | undefined) {
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
export interface DataCoralogixDashboardVariablesDefinitionMultiSelectSource {
}

export function dataCoralogixDashboardVariablesDefinitionMultiSelectSourceToTerraform(struct?: DataCoralogixDashboardVariablesDefinitionMultiSelectSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardVariablesDefinitionMultiSelectSourceToHclTerraform(struct?: DataCoralogixDashboardVariablesDefinitionMultiSelectSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardVariablesDefinitionMultiSelectSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardVariablesDefinitionMultiSelectSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardVariablesDefinitionMultiSelectSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // constant_list - computed: true, optional: false, required: false
  public get constantList() {
    return this.getListAttribute('constant_list');
  }

  // logs_path - computed: true, optional: false, required: false
  public get logsPath() {
    return this.getStringAttribute('logs_path');
  }

  // metric_label - computed: true, optional: false, required: false
  private _metricLabel = new DataCoralogixDashboardVariablesDefinitionMultiSelectSourceMetricLabelOutputReference(this, "metric_label");
  public get metricLabel() {
    return this._metricLabel;
  }

  // query - computed: true, optional: false, required: false
  private _query = new DataCoralogixDashboardVariablesDefinitionMultiSelectSourceQueryOutputReference(this, "query");
  public get query() {
    return this._query;
  }

  // span_field - computed: true, optional: false, required: false
  private _spanField = new DataCoralogixDashboardVariablesDefinitionMultiSelectSourceSpanFieldOutputReference(this, "span_field");
  public get spanField() {
    return this._spanField;
  }
}
export interface DataCoralogixDashboardVariablesDefinitionMultiSelect {
}

export function dataCoralogixDashboardVariablesDefinitionMultiSelectToTerraform(struct?: DataCoralogixDashboardVariablesDefinitionMultiSelect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardVariablesDefinitionMultiSelectToHclTerraform(struct?: DataCoralogixDashboardVariablesDefinitionMultiSelect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardVariablesDefinitionMultiSelectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardVariablesDefinitionMultiSelect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardVariablesDefinitionMultiSelect | undefined) {
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

  // source - computed: true, optional: false, required: false
  private _source = new DataCoralogixDashboardVariablesDefinitionMultiSelectSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }

  // values_order_direction - computed: true, optional: false, required: false
  public get valuesOrderDirection() {
    return this.getStringAttribute('values_order_direction');
  }
}
export interface DataCoralogixDashboardVariablesDefinition {
}

export function dataCoralogixDashboardVariablesDefinitionToTerraform(struct?: DataCoralogixDashboardVariablesDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardVariablesDefinitionToHclTerraform(struct?: DataCoralogixDashboardVariablesDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardVariablesDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardVariablesDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardVariablesDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // constant_value - computed: true, optional: false, required: false
  public get constantValue() {
    return this.getStringAttribute('constant_value');
  }

  // multi_select - computed: true, optional: false, required: false
  private _multiSelect = new DataCoralogixDashboardVariablesDefinitionMultiSelectOutputReference(this, "multi_select");
  public get multiSelect() {
    return this._multiSelect;
  }
}
export interface DataCoralogixDashboardVariables {
}

export function dataCoralogixDashboardVariablesToTerraform(struct?: DataCoralogixDashboardVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardVariablesToHclTerraform(struct?: DataCoralogixDashboardVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardVariablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixDashboardVariables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardVariables | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // definition - computed: true, optional: false, required: false
  private _definition = new DataCoralogixDashboardVariablesDefinitionOutputReference(this, "definition");
  public get definition() {
    return this._definition;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataCoralogixDashboardVariablesList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixDashboardVariablesOutputReference {
    return new DataCoralogixDashboardVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
