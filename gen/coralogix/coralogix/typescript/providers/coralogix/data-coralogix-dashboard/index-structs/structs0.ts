import * as cdktf from 'cdktf';
export interface DataCoralogixDashboardAnnotationsSourceLogsLabelFields {
}

export function dataCoralogixDashboardAnnotationsSourceLogsLabelFieldsToTerraform(struct?: DataCoralogixDashboardAnnotationsSourceLogsLabelFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardAnnotationsSourceLogsLabelFieldsToHclTerraform(struct?: DataCoralogixDashboardAnnotationsSourceLogsLabelFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardAnnotationsSourceLogsLabelFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixDashboardAnnotationsSourceLogsLabelFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardAnnotationsSourceLogsLabelFields | undefined) {
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

export class DataCoralogixDashboardAnnotationsSourceLogsLabelFieldsList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixDashboardAnnotationsSourceLogsLabelFieldsOutputReference {
    return new DataCoralogixDashboardAnnotationsSourceLogsLabelFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixDashboardAnnotationsSourceLogsStrategyDurationDurationField {
}

export function dataCoralogixDashboardAnnotationsSourceLogsStrategyDurationDurationFieldToTerraform(struct?: DataCoralogixDashboardAnnotationsSourceLogsStrategyDurationDurationField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardAnnotationsSourceLogsStrategyDurationDurationFieldToHclTerraform(struct?: DataCoralogixDashboardAnnotationsSourceLogsStrategyDurationDurationField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardAnnotationsSourceLogsStrategyDurationDurationFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardAnnotationsSourceLogsStrategyDurationDurationField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardAnnotationsSourceLogsStrategyDurationDurationField | undefined) {
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
export interface DataCoralogixDashboardAnnotationsSourceLogsStrategyDurationStartTimestampField {
}

export function dataCoralogixDashboardAnnotationsSourceLogsStrategyDurationStartTimestampFieldToTerraform(struct?: DataCoralogixDashboardAnnotationsSourceLogsStrategyDurationStartTimestampField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardAnnotationsSourceLogsStrategyDurationStartTimestampFieldToHclTerraform(struct?: DataCoralogixDashboardAnnotationsSourceLogsStrategyDurationStartTimestampField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardAnnotationsSourceLogsStrategyDurationStartTimestampFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardAnnotationsSourceLogsStrategyDurationStartTimestampField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardAnnotationsSourceLogsStrategyDurationStartTimestampField | undefined) {
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
export interface DataCoralogixDashboardAnnotationsSourceLogsStrategyDuration {
}

export function dataCoralogixDashboardAnnotationsSourceLogsStrategyDurationToTerraform(struct?: DataCoralogixDashboardAnnotationsSourceLogsStrategyDuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardAnnotationsSourceLogsStrategyDurationToHclTerraform(struct?: DataCoralogixDashboardAnnotationsSourceLogsStrategyDuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardAnnotationsSourceLogsStrategyDurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardAnnotationsSourceLogsStrategyDuration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardAnnotationsSourceLogsStrategyDuration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duration_field - computed: true, optional: false, required: false
  private _durationField = new DataCoralogixDashboardAnnotationsSourceLogsStrategyDurationDurationFieldOutputReference(this, "duration_field");
  public get durationField() {
    return this._durationField;
  }

  // start_timestamp_field - computed: true, optional: false, required: false
  private _startTimestampField = new DataCoralogixDashboardAnnotationsSourceLogsStrategyDurationStartTimestampFieldOutputReference(this, "start_timestamp_field");
  public get startTimestampField() {
    return this._startTimestampField;
  }
}
export interface DataCoralogixDashboardAnnotationsSourceLogsStrategyInstantTimestampField {
}

export function dataCoralogixDashboardAnnotationsSourceLogsStrategyInstantTimestampFieldToTerraform(struct?: DataCoralogixDashboardAnnotationsSourceLogsStrategyInstantTimestampField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardAnnotationsSourceLogsStrategyInstantTimestampFieldToHclTerraform(struct?: DataCoralogixDashboardAnnotationsSourceLogsStrategyInstantTimestampField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardAnnotationsSourceLogsStrategyInstantTimestampFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardAnnotationsSourceLogsStrategyInstantTimestampField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardAnnotationsSourceLogsStrategyInstantTimestampField | undefined) {
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
export interface DataCoralogixDashboardAnnotationsSourceLogsStrategyInstant {
}

export function dataCoralogixDashboardAnnotationsSourceLogsStrategyInstantToTerraform(struct?: DataCoralogixDashboardAnnotationsSourceLogsStrategyInstant): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardAnnotationsSourceLogsStrategyInstantToHclTerraform(struct?: DataCoralogixDashboardAnnotationsSourceLogsStrategyInstant): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardAnnotationsSourceLogsStrategyInstantOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardAnnotationsSourceLogsStrategyInstant | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardAnnotationsSourceLogsStrategyInstant | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // timestamp_field - computed: true, optional: false, required: false
  private _timestampField = new DataCoralogixDashboardAnnotationsSourceLogsStrategyInstantTimestampFieldOutputReference(this, "timestamp_field");
  public get timestampField() {
    return this._timestampField;
  }
}
export interface DataCoralogixDashboardAnnotationsSourceLogsStrategyRangeEndTimestampField {
}

export function dataCoralogixDashboardAnnotationsSourceLogsStrategyRangeEndTimestampFieldToTerraform(struct?: DataCoralogixDashboardAnnotationsSourceLogsStrategyRangeEndTimestampField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardAnnotationsSourceLogsStrategyRangeEndTimestampFieldToHclTerraform(struct?: DataCoralogixDashboardAnnotationsSourceLogsStrategyRangeEndTimestampField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardAnnotationsSourceLogsStrategyRangeEndTimestampFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardAnnotationsSourceLogsStrategyRangeEndTimestampField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardAnnotationsSourceLogsStrategyRangeEndTimestampField | undefined) {
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
export interface DataCoralogixDashboardAnnotationsSourceLogsStrategyRangeStartTimestampField {
}

export function dataCoralogixDashboardAnnotationsSourceLogsStrategyRangeStartTimestampFieldToTerraform(struct?: DataCoralogixDashboardAnnotationsSourceLogsStrategyRangeStartTimestampField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardAnnotationsSourceLogsStrategyRangeStartTimestampFieldToHclTerraform(struct?: DataCoralogixDashboardAnnotationsSourceLogsStrategyRangeStartTimestampField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardAnnotationsSourceLogsStrategyRangeStartTimestampFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardAnnotationsSourceLogsStrategyRangeStartTimestampField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardAnnotationsSourceLogsStrategyRangeStartTimestampField | undefined) {
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
export interface DataCoralogixDashboardAnnotationsSourceLogsStrategyRange {
}

export function dataCoralogixDashboardAnnotationsSourceLogsStrategyRangeToTerraform(struct?: DataCoralogixDashboardAnnotationsSourceLogsStrategyRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardAnnotationsSourceLogsStrategyRangeToHclTerraform(struct?: DataCoralogixDashboardAnnotationsSourceLogsStrategyRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardAnnotationsSourceLogsStrategyRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardAnnotationsSourceLogsStrategyRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardAnnotationsSourceLogsStrategyRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_timestamp_field - computed: true, optional: false, required: false
  private _endTimestampField = new DataCoralogixDashboardAnnotationsSourceLogsStrategyRangeEndTimestampFieldOutputReference(this, "end_timestamp_field");
  public get endTimestampField() {
    return this._endTimestampField;
  }

  // start_timestamp_field - computed: true, optional: false, required: false
  private _startTimestampField = new DataCoralogixDashboardAnnotationsSourceLogsStrategyRangeStartTimestampFieldOutputReference(this, "start_timestamp_field");
  public get startTimestampField() {
    return this._startTimestampField;
  }
}
export interface DataCoralogixDashboardAnnotationsSourceLogsStrategy {
}

export function dataCoralogixDashboardAnnotationsSourceLogsStrategyToTerraform(struct?: DataCoralogixDashboardAnnotationsSourceLogsStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardAnnotationsSourceLogsStrategyToHclTerraform(struct?: DataCoralogixDashboardAnnotationsSourceLogsStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardAnnotationsSourceLogsStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardAnnotationsSourceLogsStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardAnnotationsSourceLogsStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duration - computed: true, optional: false, required: false
  private _duration = new DataCoralogixDashboardAnnotationsSourceLogsStrategyDurationOutputReference(this, "duration");
  public get duration() {
    return this._duration;
  }

  // instant - computed: true, optional: false, required: false
  private _instant = new DataCoralogixDashboardAnnotationsSourceLogsStrategyInstantOutputReference(this, "instant");
  public get instant() {
    return this._instant;
  }

  // range - computed: true, optional: false, required: false
  private _range = new DataCoralogixDashboardAnnotationsSourceLogsStrategyRangeOutputReference(this, "range");
  public get range() {
    return this._range;
  }
}
export interface DataCoralogixDashboardAnnotationsSourceLogs {
}

export function dataCoralogixDashboardAnnotationsSourceLogsToTerraform(struct?: DataCoralogixDashboardAnnotationsSourceLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardAnnotationsSourceLogsToHclTerraform(struct?: DataCoralogixDashboardAnnotationsSourceLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardAnnotationsSourceLogsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardAnnotationsSourceLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardAnnotationsSourceLogs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // label_fields - computed: true, optional: false, required: false
  private _labelFields = new DataCoralogixDashboardAnnotationsSourceLogsLabelFieldsList(this, "label_fields", false);
  public get labelFields() {
    return this._labelFields;
  }

  // lucene_query - computed: true, optional: false, required: false
  public get luceneQuery() {
    return this.getStringAttribute('lucene_query');
  }

  // message_template - computed: true, optional: false, required: false
  public get messageTemplate() {
    return this.getStringAttribute('message_template');
  }

  // strategy - computed: true, optional: false, required: false
  private _strategy = new DataCoralogixDashboardAnnotationsSourceLogsStrategyOutputReference(this, "strategy");
  public get strategy() {
    return this._strategy;
  }
}
export interface DataCoralogixDashboardAnnotationsSourceMetricsStrategyStartTime {
}

export function dataCoralogixDashboardAnnotationsSourceMetricsStrategyStartTimeToTerraform(struct?: DataCoralogixDashboardAnnotationsSourceMetricsStrategyStartTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardAnnotationsSourceMetricsStrategyStartTimeToHclTerraform(struct?: DataCoralogixDashboardAnnotationsSourceMetricsStrategyStartTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardAnnotationsSourceMetricsStrategyStartTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardAnnotationsSourceMetricsStrategyStartTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardAnnotationsSourceMetricsStrategyStartTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataCoralogixDashboardAnnotationsSourceMetricsStrategy {
}

export function dataCoralogixDashboardAnnotationsSourceMetricsStrategyToTerraform(struct?: DataCoralogixDashboardAnnotationsSourceMetricsStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardAnnotationsSourceMetricsStrategyToHclTerraform(struct?: DataCoralogixDashboardAnnotationsSourceMetricsStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardAnnotationsSourceMetricsStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardAnnotationsSourceMetricsStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardAnnotationsSourceMetricsStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // start_time - computed: true, optional: false, required: false
  private _startTime = new DataCoralogixDashboardAnnotationsSourceMetricsStrategyStartTimeOutputReference(this, "start_time");
  public get startTime() {
    return this._startTime;
  }
}
export interface DataCoralogixDashboardAnnotationsSourceMetrics {
}

export function dataCoralogixDashboardAnnotationsSourceMetricsToTerraform(struct?: DataCoralogixDashboardAnnotationsSourceMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardAnnotationsSourceMetricsToHclTerraform(struct?: DataCoralogixDashboardAnnotationsSourceMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardAnnotationsSourceMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardAnnotationsSourceMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardAnnotationsSourceMetrics | undefined) {
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

  // message_template - computed: true, optional: false, required: false
  public get messageTemplate() {
    return this.getStringAttribute('message_template');
  }

  // promql_query - computed: true, optional: false, required: false
  public get promqlQuery() {
    return this.getStringAttribute('promql_query');
  }

  // strategy - computed: true, optional: false, required: false
  private _strategy = new DataCoralogixDashboardAnnotationsSourceMetricsStrategyOutputReference(this, "strategy");
  public get strategy() {
    return this._strategy;
  }
}
export interface DataCoralogixDashboardAnnotationsSourceSpansLabelFields {
}

export function dataCoralogixDashboardAnnotationsSourceSpansLabelFieldsToTerraform(struct?: DataCoralogixDashboardAnnotationsSourceSpansLabelFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardAnnotationsSourceSpansLabelFieldsToHclTerraform(struct?: DataCoralogixDashboardAnnotationsSourceSpansLabelFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardAnnotationsSourceSpansLabelFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixDashboardAnnotationsSourceSpansLabelFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardAnnotationsSourceSpansLabelFields | undefined) {
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

export class DataCoralogixDashboardAnnotationsSourceSpansLabelFieldsList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixDashboardAnnotationsSourceSpansLabelFieldsOutputReference {
    return new DataCoralogixDashboardAnnotationsSourceSpansLabelFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixDashboardAnnotationsSourceSpansStrategyDurationDurationField {
}

export function dataCoralogixDashboardAnnotationsSourceSpansStrategyDurationDurationFieldToTerraform(struct?: DataCoralogixDashboardAnnotationsSourceSpansStrategyDurationDurationField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardAnnotationsSourceSpansStrategyDurationDurationFieldToHclTerraform(struct?: DataCoralogixDashboardAnnotationsSourceSpansStrategyDurationDurationField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardAnnotationsSourceSpansStrategyDurationDurationFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardAnnotationsSourceSpansStrategyDurationDurationField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardAnnotationsSourceSpansStrategyDurationDurationField | undefined) {
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
export interface DataCoralogixDashboardAnnotationsSourceSpansStrategyDurationStartTimestampField {
}

export function dataCoralogixDashboardAnnotationsSourceSpansStrategyDurationStartTimestampFieldToTerraform(struct?: DataCoralogixDashboardAnnotationsSourceSpansStrategyDurationStartTimestampField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardAnnotationsSourceSpansStrategyDurationStartTimestampFieldToHclTerraform(struct?: DataCoralogixDashboardAnnotationsSourceSpansStrategyDurationStartTimestampField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardAnnotationsSourceSpansStrategyDurationStartTimestampFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardAnnotationsSourceSpansStrategyDurationStartTimestampField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardAnnotationsSourceSpansStrategyDurationStartTimestampField | undefined) {
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
export interface DataCoralogixDashboardAnnotationsSourceSpansStrategyDuration {
}

export function dataCoralogixDashboardAnnotationsSourceSpansStrategyDurationToTerraform(struct?: DataCoralogixDashboardAnnotationsSourceSpansStrategyDuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardAnnotationsSourceSpansStrategyDurationToHclTerraform(struct?: DataCoralogixDashboardAnnotationsSourceSpansStrategyDuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardAnnotationsSourceSpansStrategyDurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardAnnotationsSourceSpansStrategyDuration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardAnnotationsSourceSpansStrategyDuration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duration_field - computed: true, optional: false, required: false
  private _durationField = new DataCoralogixDashboardAnnotationsSourceSpansStrategyDurationDurationFieldOutputReference(this, "duration_field");
  public get durationField() {
    return this._durationField;
  }

  // start_timestamp_field - computed: true, optional: false, required: false
  private _startTimestampField = new DataCoralogixDashboardAnnotationsSourceSpansStrategyDurationStartTimestampFieldOutputReference(this, "start_timestamp_field");
  public get startTimestampField() {
    return this._startTimestampField;
  }
}
export interface DataCoralogixDashboardAnnotationsSourceSpansStrategyInstantTimestampField {
}

export function dataCoralogixDashboardAnnotationsSourceSpansStrategyInstantTimestampFieldToTerraform(struct?: DataCoralogixDashboardAnnotationsSourceSpansStrategyInstantTimestampField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardAnnotationsSourceSpansStrategyInstantTimestampFieldToHclTerraform(struct?: DataCoralogixDashboardAnnotationsSourceSpansStrategyInstantTimestampField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardAnnotationsSourceSpansStrategyInstantTimestampFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardAnnotationsSourceSpansStrategyInstantTimestampField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardAnnotationsSourceSpansStrategyInstantTimestampField | undefined) {
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
export interface DataCoralogixDashboardAnnotationsSourceSpansStrategyInstant {
}

export function dataCoralogixDashboardAnnotationsSourceSpansStrategyInstantToTerraform(struct?: DataCoralogixDashboardAnnotationsSourceSpansStrategyInstant): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardAnnotationsSourceSpansStrategyInstantToHclTerraform(struct?: DataCoralogixDashboardAnnotationsSourceSpansStrategyInstant): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardAnnotationsSourceSpansStrategyInstantOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardAnnotationsSourceSpansStrategyInstant | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardAnnotationsSourceSpansStrategyInstant | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // timestamp_field - computed: true, optional: false, required: false
  private _timestampField = new DataCoralogixDashboardAnnotationsSourceSpansStrategyInstantTimestampFieldOutputReference(this, "timestamp_field");
  public get timestampField() {
    return this._timestampField;
  }
}
export interface DataCoralogixDashboardAnnotationsSourceSpansStrategyRangeEndTimestampField {
}

export function dataCoralogixDashboardAnnotationsSourceSpansStrategyRangeEndTimestampFieldToTerraform(struct?: DataCoralogixDashboardAnnotationsSourceSpansStrategyRangeEndTimestampField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardAnnotationsSourceSpansStrategyRangeEndTimestampFieldToHclTerraform(struct?: DataCoralogixDashboardAnnotationsSourceSpansStrategyRangeEndTimestampField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardAnnotationsSourceSpansStrategyRangeEndTimestampFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardAnnotationsSourceSpansStrategyRangeEndTimestampField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardAnnotationsSourceSpansStrategyRangeEndTimestampField | undefined) {
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
export interface DataCoralogixDashboardAnnotationsSourceSpansStrategyRangeStartTimestampField {
}

export function dataCoralogixDashboardAnnotationsSourceSpansStrategyRangeStartTimestampFieldToTerraform(struct?: DataCoralogixDashboardAnnotationsSourceSpansStrategyRangeStartTimestampField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardAnnotationsSourceSpansStrategyRangeStartTimestampFieldToHclTerraform(struct?: DataCoralogixDashboardAnnotationsSourceSpansStrategyRangeStartTimestampField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardAnnotationsSourceSpansStrategyRangeStartTimestampFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardAnnotationsSourceSpansStrategyRangeStartTimestampField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardAnnotationsSourceSpansStrategyRangeStartTimestampField | undefined) {
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
export interface DataCoralogixDashboardAnnotationsSourceSpansStrategyRange {
}

export function dataCoralogixDashboardAnnotationsSourceSpansStrategyRangeToTerraform(struct?: DataCoralogixDashboardAnnotationsSourceSpansStrategyRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardAnnotationsSourceSpansStrategyRangeToHclTerraform(struct?: DataCoralogixDashboardAnnotationsSourceSpansStrategyRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardAnnotationsSourceSpansStrategyRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardAnnotationsSourceSpansStrategyRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardAnnotationsSourceSpansStrategyRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_timestamp_field - computed: true, optional: false, required: false
  private _endTimestampField = new DataCoralogixDashboardAnnotationsSourceSpansStrategyRangeEndTimestampFieldOutputReference(this, "end_timestamp_field");
  public get endTimestampField() {
    return this._endTimestampField;
  }

  // start_timestamp_field - computed: true, optional: false, required: false
  private _startTimestampField = new DataCoralogixDashboardAnnotationsSourceSpansStrategyRangeStartTimestampFieldOutputReference(this, "start_timestamp_field");
  public get startTimestampField() {
    return this._startTimestampField;
  }
}
export interface DataCoralogixDashboardAnnotationsSourceSpansStrategy {
}

export function dataCoralogixDashboardAnnotationsSourceSpansStrategyToTerraform(struct?: DataCoralogixDashboardAnnotationsSourceSpansStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardAnnotationsSourceSpansStrategyToHclTerraform(struct?: DataCoralogixDashboardAnnotationsSourceSpansStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardAnnotationsSourceSpansStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardAnnotationsSourceSpansStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardAnnotationsSourceSpansStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duration - computed: true, optional: false, required: false
  private _duration = new DataCoralogixDashboardAnnotationsSourceSpansStrategyDurationOutputReference(this, "duration");
  public get duration() {
    return this._duration;
  }

  // instant - computed: true, optional: false, required: false
  private _instant = new DataCoralogixDashboardAnnotationsSourceSpansStrategyInstantOutputReference(this, "instant");
  public get instant() {
    return this._instant;
  }

  // range - computed: true, optional: false, required: false
  private _range = new DataCoralogixDashboardAnnotationsSourceSpansStrategyRangeOutputReference(this, "range");
  public get range() {
    return this._range;
  }
}
export interface DataCoralogixDashboardAnnotationsSourceSpans {
}

export function dataCoralogixDashboardAnnotationsSourceSpansToTerraform(struct?: DataCoralogixDashboardAnnotationsSourceSpans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardAnnotationsSourceSpansToHclTerraform(struct?: DataCoralogixDashboardAnnotationsSourceSpans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardAnnotationsSourceSpansOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardAnnotationsSourceSpans | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardAnnotationsSourceSpans | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // label_fields - computed: true, optional: false, required: false
  private _labelFields = new DataCoralogixDashboardAnnotationsSourceSpansLabelFieldsList(this, "label_fields", false);
  public get labelFields() {
    return this._labelFields;
  }

  // lucene_query - computed: true, optional: false, required: false
  public get luceneQuery() {
    return this.getStringAttribute('lucene_query');
  }

  // message_template - computed: true, optional: false, required: false
  public get messageTemplate() {
    return this.getStringAttribute('message_template');
  }

  // strategy - computed: true, optional: false, required: false
  private _strategy = new DataCoralogixDashboardAnnotationsSourceSpansStrategyOutputReference(this, "strategy");
  public get strategy() {
    return this._strategy;
  }
}
export interface DataCoralogixDashboardAnnotationsSource {
}

export function dataCoralogixDashboardAnnotationsSourceToTerraform(struct?: DataCoralogixDashboardAnnotationsSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardAnnotationsSourceToHclTerraform(struct?: DataCoralogixDashboardAnnotationsSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardAnnotationsSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardAnnotationsSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardAnnotationsSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // logs - computed: true, optional: false, required: false
  private _logs = new DataCoralogixDashboardAnnotationsSourceLogsOutputReference(this, "logs");
  public get logs() {
    return this._logs;
  }

  // metrics - computed: true, optional: false, required: false
  private _metrics = new DataCoralogixDashboardAnnotationsSourceMetricsOutputReference(this, "metrics");
  public get metrics() {
    return this._metrics;
  }

  // spans - computed: true, optional: false, required: false
  private _spans = new DataCoralogixDashboardAnnotationsSourceSpansOutputReference(this, "spans");
  public get spans() {
    return this._spans;
  }
}
export interface DataCoralogixDashboardAnnotations {
}

export function dataCoralogixDashboardAnnotationsToTerraform(struct?: DataCoralogixDashboardAnnotations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardAnnotationsToHclTerraform(struct?: DataCoralogixDashboardAnnotations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixDashboardAnnotations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardAnnotations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // source - computed: true, optional: false, required: false
  private _source = new DataCoralogixDashboardAnnotationsSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
}

export class DataCoralogixDashboardAnnotationsList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixDashboardAnnotationsOutputReference {
    return new DataCoralogixDashboardAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixDashboardAutoRefresh {
}

export function dataCoralogixDashboardAutoRefreshToTerraform(struct?: DataCoralogixDashboardAutoRefresh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardAutoRefreshToHclTerraform(struct?: DataCoralogixDashboardAutoRefresh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardAutoRefreshOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardAutoRefresh | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardAutoRefresh | undefined) {
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
}
export interface DataCoralogixDashboardFiltersSourceLogsObservationField {
}

export function dataCoralogixDashboardFiltersSourceLogsObservationFieldToTerraform(struct?: DataCoralogixDashboardFiltersSourceLogsObservationField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardFiltersSourceLogsObservationFieldToHclTerraform(struct?: DataCoralogixDashboardFiltersSourceLogsObservationField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardFiltersSourceLogsObservationFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardFiltersSourceLogsObservationField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardFiltersSourceLogsObservationField | undefined) {
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
export interface DataCoralogixDashboardFiltersSourceLogsOperator {
}

export function dataCoralogixDashboardFiltersSourceLogsOperatorToTerraform(struct?: DataCoralogixDashboardFiltersSourceLogsOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardFiltersSourceLogsOperatorToHclTerraform(struct?: DataCoralogixDashboardFiltersSourceLogsOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardFiltersSourceLogsOperatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardFiltersSourceLogsOperator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardFiltersSourceLogsOperator | undefined) {
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
export interface DataCoralogixDashboardFiltersSourceLogs {
}

export function dataCoralogixDashboardFiltersSourceLogsToTerraform(struct?: DataCoralogixDashboardFiltersSourceLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardFiltersSourceLogsToHclTerraform(struct?: DataCoralogixDashboardFiltersSourceLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardFiltersSourceLogsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardFiltersSourceLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardFiltersSourceLogs | undefined) {
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
  private _observationField = new DataCoralogixDashboardFiltersSourceLogsObservationFieldOutputReference(this, "observation_field");
  public get observationField() {
    return this._observationField;
  }

  // operator - computed: true, optional: false, required: false
  private _operator = new DataCoralogixDashboardFiltersSourceLogsOperatorOutputReference(this, "operator");
  public get operator() {
    return this._operator;
  }
}
export interface DataCoralogixDashboardFiltersSourceMetricsOperator {
}

export function dataCoralogixDashboardFiltersSourceMetricsOperatorToTerraform(struct?: DataCoralogixDashboardFiltersSourceMetricsOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardFiltersSourceMetricsOperatorToHclTerraform(struct?: DataCoralogixDashboardFiltersSourceMetricsOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardFiltersSourceMetricsOperatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardFiltersSourceMetricsOperator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardFiltersSourceMetricsOperator | undefined) {
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
export interface DataCoralogixDashboardFiltersSourceMetrics {
}

export function dataCoralogixDashboardFiltersSourceMetricsToTerraform(struct?: DataCoralogixDashboardFiltersSourceMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardFiltersSourceMetricsToHclTerraform(struct?: DataCoralogixDashboardFiltersSourceMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardFiltersSourceMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardFiltersSourceMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardFiltersSourceMetrics | undefined) {
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
  private _operator = new DataCoralogixDashboardFiltersSourceMetricsOperatorOutputReference(this, "operator");
  public get operator() {
    return this._operator;
  }
}
export interface DataCoralogixDashboardFiltersSourceSpansField {
}

export function dataCoralogixDashboardFiltersSourceSpansFieldToTerraform(struct?: DataCoralogixDashboardFiltersSourceSpansField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardFiltersSourceSpansFieldToHclTerraform(struct?: DataCoralogixDashboardFiltersSourceSpansField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardFiltersSourceSpansFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardFiltersSourceSpansField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardFiltersSourceSpansField | undefined) {
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
export interface DataCoralogixDashboardFiltersSourceSpansOperator {
}

export function dataCoralogixDashboardFiltersSourceSpansOperatorToTerraform(struct?: DataCoralogixDashboardFiltersSourceSpansOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardFiltersSourceSpansOperatorToHclTerraform(struct?: DataCoralogixDashboardFiltersSourceSpansOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardFiltersSourceSpansOperatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardFiltersSourceSpansOperator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardFiltersSourceSpansOperator | undefined) {
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
export interface DataCoralogixDashboardFiltersSourceSpans {
}

export function dataCoralogixDashboardFiltersSourceSpansToTerraform(struct?: DataCoralogixDashboardFiltersSourceSpans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardFiltersSourceSpansToHclTerraform(struct?: DataCoralogixDashboardFiltersSourceSpans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardFiltersSourceSpansOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardFiltersSourceSpans | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardFiltersSourceSpans | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field - computed: true, optional: false, required: false
  private _field = new DataCoralogixDashboardFiltersSourceSpansFieldOutputReference(this, "field");
  public get field() {
    return this._field;
  }

  // operator - computed: true, optional: false, required: false
  private _operator = new DataCoralogixDashboardFiltersSourceSpansOperatorOutputReference(this, "operator");
  public get operator() {
    return this._operator;
  }
}
export interface DataCoralogixDashboardFiltersSource {
}

export function dataCoralogixDashboardFiltersSourceToTerraform(struct?: DataCoralogixDashboardFiltersSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardFiltersSourceToHclTerraform(struct?: DataCoralogixDashboardFiltersSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardFiltersSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardFiltersSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardFiltersSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // logs - computed: true, optional: false, required: false
  private _logs = new DataCoralogixDashboardFiltersSourceLogsOutputReference(this, "logs");
  public get logs() {
    return this._logs;
  }

  // metrics - computed: true, optional: false, required: false
  private _metrics = new DataCoralogixDashboardFiltersSourceMetricsOutputReference(this, "metrics");
  public get metrics() {
    return this._metrics;
  }

  // spans - computed: true, optional: false, required: false
  private _spans = new DataCoralogixDashboardFiltersSourceSpansOutputReference(this, "spans");
  public get spans() {
    return this._spans;
  }
}
export interface DataCoralogixDashboardFilters {
}

export function dataCoralogixDashboardFiltersToTerraform(struct?: DataCoralogixDashboardFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardFiltersToHclTerraform(struct?: DataCoralogixDashboardFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixDashboardFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // collapsed - computed: true, optional: false, required: false
  public get collapsed() {
    return this.getBooleanAttribute('collapsed');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // source - computed: true, optional: false, required: false
  private _source = new DataCoralogixDashboardFiltersSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
}

export class DataCoralogixDashboardFiltersList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixDashboardFiltersOutputReference {
    return new DataCoralogixDashboardFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixDashboardFolder {
}

export function dataCoralogixDashboardFolderToTerraform(struct?: DataCoralogixDashboardFolder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardFolderToHclTerraform(struct?: DataCoralogixDashboardFolder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardFolderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardFolder | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardFolder | undefined) {
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

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}
export interface DataCoralogixDashboardLayoutSectionsOptions {
}

export function dataCoralogixDashboardLayoutSectionsOptionsToTerraform(struct?: DataCoralogixDashboardLayoutSectionsOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsOptionsToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // collapsed - computed: true, optional: false, required: false
  public get collapsed() {
    return this.getBooleanAttribute('collapsed');
  }

  // color - computed: true, optional: false, required: false
  public get color() {
    return this.getStringAttribute('color');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeFiltersLogsObservationField {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeFiltersLogsObservationFieldToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeFiltersLogsObservationField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeFiltersLogsObservationFieldToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeFiltersLogsObservationField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeFiltersLogsObservationFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeFiltersLogsObservationField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeFiltersLogsObservationField | undefined) {
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
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeFiltersLogsOperator {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeFiltersLogsOperatorToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeFiltersLogsOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeFiltersLogsOperatorToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeFiltersLogsOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeFiltersLogsOperatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeFiltersLogsOperator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeFiltersLogsOperator | undefined) {
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
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeFiltersLogs {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeFiltersLogsToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeFiltersLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeFiltersLogsToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeFiltersLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeFiltersLogsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeFiltersLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeFiltersLogs | undefined) {
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
  private _observationField = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeFiltersLogsObservationFieldOutputReference(this, "observation_field");
  public get observationField() {
    return this._observationField;
  }

  // operator - computed: true, optional: false, required: false
  private _operator = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeFiltersLogsOperatorOutputReference(this, "operator");
  public get operator() {
    return this._operator;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeFiltersMetricsOperator {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeFiltersMetricsOperatorToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeFiltersMetricsOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeFiltersMetricsOperatorToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeFiltersMetricsOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeFiltersMetricsOperatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeFiltersMetricsOperator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeFiltersMetricsOperator | undefined) {
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
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeFiltersMetrics {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeFiltersMetricsToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeFiltersMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeFiltersMetricsToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeFiltersMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeFiltersMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeFiltersMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeFiltersMetrics | undefined) {
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
  private _operator = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeFiltersMetricsOperatorOutputReference(this, "operator");
  public get operator() {
    return this._operator;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeFiltersSpansField {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeFiltersSpansFieldToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeFiltersSpansField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeFiltersSpansFieldToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeFiltersSpansField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeFiltersSpansFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeFiltersSpansField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeFiltersSpansField | undefined) {
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
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeFiltersSpansOperator {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeFiltersSpansOperatorToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeFiltersSpansOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeFiltersSpansOperatorToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeFiltersSpansOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeFiltersSpansOperatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeFiltersSpansOperator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeFiltersSpansOperator | undefined) {
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
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeFiltersSpans {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeFiltersSpansToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeFiltersSpans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeFiltersSpansToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeFiltersSpans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeFiltersSpansOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeFiltersSpans | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeFiltersSpans | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field - computed: true, optional: false, required: false
  private _field = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeFiltersSpansFieldOutputReference(this, "field");
  public get field() {
    return this._field;
  }

  // operator - computed: true, optional: false, required: false
  private _operator = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeFiltersSpansOperatorOutputReference(this, "operator");
  public get operator() {
    return this._operator;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeFilters {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeFiltersToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeFiltersToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // logs - computed: true, optional: false, required: false
  private _logs = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeFiltersLogsOutputReference(this, "logs");
  public get logs() {
    return this._logs;
  }

  // metrics - computed: true, optional: false, required: false
  private _metrics = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeFiltersMetricsOutputReference(this, "metrics");
  public get metrics() {
    return this._metrics;
  }

  // spans - computed: true, optional: false, required: false
  private _spans = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeFiltersSpansOutputReference(this, "spans");
  public get spans() {
    return this._spans;
  }
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeFiltersList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeFiltersOutputReference {
    return new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeTimeFrameAbsolute {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeTimeFrameAbsoluteToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeTimeFrameAbsolute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeTimeFrameAbsoluteToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeTimeFrameAbsolute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeTimeFrameAbsoluteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeTimeFrameAbsolute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeTimeFrameAbsolute | undefined) {
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
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeTimeFrameRelative {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeTimeFrameRelativeToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeTimeFrameRelative): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeTimeFrameRelativeToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeTimeFrameRelative): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeTimeFrameRelativeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeTimeFrameRelative | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeTimeFrameRelative | undefined) {
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
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeTimeFrame {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeTimeFrameToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeTimeFrame): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeTimeFrameToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeTimeFrame): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeTimeFrameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeTimeFrame | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeTimeFrame | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // absolute - computed: true, optional: false, required: false
  private _absolute = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeTimeFrameAbsoluteOutputReference(this, "absolute");
  public get absolute() {
    return this._absolute;
  }

  // relative - computed: true, optional: false, required: false
  private _relative = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeTimeFrameRelativeOutputReference(this, "relative");
  public get relative() {
    return this._relative;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrime {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // filters - computed: true, optional: false, required: false
  private _filters = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeFiltersList(this, "filters", false);
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
  private _timeFrame = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeTimeFrameOutputReference(this, "time_frame");
  public get timeFrame() {
    return this._timeFrame;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsAggregationObservationField {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsAggregationObservationFieldToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsAggregationObservationField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsAggregationObservationFieldToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsAggregationObservationField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsAggregationObservationFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsAggregationObservationField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsAggregationObservationField | undefined) {
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
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsAggregation {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsAggregationToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsAggregation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsAggregationToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsAggregation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsAggregationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsAggregation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsAggregation | undefined) {
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
  private _observationField = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsAggregationObservationFieldOutputReference(this, "observation_field");
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
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsFiltersObservationField {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsFiltersObservationFieldToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsFiltersObservationField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsFiltersObservationFieldToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsFiltersObservationField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsFiltersObservationFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsFiltersObservationField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsFiltersObservationField | undefined) {
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
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsFiltersOperator {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsFiltersOperatorToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsFiltersOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsFiltersOperatorToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsFiltersOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsFiltersOperatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsFiltersOperator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsFiltersOperator | undefined) {
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
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsFilters {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsFiltersToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsFiltersToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsFilters | undefined) {
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
  private _observationField = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsFiltersObservationFieldOutputReference(this, "observation_field");
  public get observationField() {
    return this._observationField;
  }

  // operator - computed: true, optional: false, required: false
  private _operator = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsFiltersOperatorOutputReference(this, "operator");
  public get operator() {
    return this._operator;
  }
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsFiltersList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsFiltersOutputReference {
    return new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsGroupNamesFields {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsGroupNamesFieldsToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsGroupNamesFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsGroupNamesFieldsToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsGroupNamesFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsGroupNamesFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsGroupNamesFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsGroupNamesFields | undefined) {
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

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsGroupNamesFieldsList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsGroupNamesFieldsOutputReference {
    return new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsGroupNamesFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsStackedGroupNameField {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsStackedGroupNameFieldToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsStackedGroupNameField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsStackedGroupNameFieldToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsStackedGroupNameField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsStackedGroupNameFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsStackedGroupNameField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsStackedGroupNameField | undefined) {
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
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsTimeFrameAbsolute {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsTimeFrameAbsoluteToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsTimeFrameAbsolute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsTimeFrameAbsoluteToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsTimeFrameAbsolute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsTimeFrameAbsoluteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsTimeFrameAbsolute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsTimeFrameAbsolute | undefined) {
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
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsTimeFrameRelative {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsTimeFrameRelativeToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsTimeFrameRelative): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsTimeFrameRelativeToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsTimeFrameRelative): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsTimeFrameRelativeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsTimeFrameRelative | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsTimeFrameRelative | undefined) {
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
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsTimeFrame {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsTimeFrameToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsTimeFrame): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsTimeFrameToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsTimeFrame): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsTimeFrameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsTimeFrame | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsTimeFrame | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // absolute - computed: true, optional: false, required: false
  private _absolute = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsTimeFrameAbsoluteOutputReference(this, "absolute");
  public get absolute() {
    return this._absolute;
  }

  // relative - computed: true, optional: false, required: false
  private _relative = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsTimeFrameRelativeOutputReference(this, "relative");
  public get relative() {
    return this._relative;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogs {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggregation - computed: true, optional: false, required: false
  private _aggregation = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsAggregationOutputReference(this, "aggregation");
  public get aggregation() {
    return this._aggregation;
  }

  // filters - computed: true, optional: false, required: false
  private _filters = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }

  // group_names - computed: true, optional: false, required: false
  public get groupNames() {
    return this.getListAttribute('group_names');
  }

  // group_names_fields - computed: true, optional: false, required: false
  private _groupNamesFields = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsGroupNamesFieldsList(this, "group_names_fields", false);
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
  private _stackedGroupNameField = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsStackedGroupNameFieldOutputReference(this, "stacked_group_name_field");
  public get stackedGroupNameField() {
    return this._stackedGroupNameField;
  }

  // time_frame - computed: true, optional: false, required: false
  private _timeFrame = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsTimeFrameOutputReference(this, "time_frame");
  public get timeFrame() {
    return this._timeFrame;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryMetricsFiltersOperator {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryMetricsFiltersOperatorToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryMetricsFiltersOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryMetricsFiltersOperatorToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryMetricsFiltersOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryMetricsFiltersOperatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryMetricsFiltersOperator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryMetricsFiltersOperator | undefined) {
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
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryMetricsFilters {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryMetricsFiltersToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryMetricsFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryMetricsFiltersToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryMetricsFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryMetricsFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryMetricsFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryMetricsFilters | undefined) {
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
  private _operator = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryMetricsFiltersOperatorOutputReference(this, "operator");
  public get operator() {
    return this._operator;
  }
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryMetricsFiltersList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryMetricsFiltersOutputReference {
    return new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryMetricsFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryMetricsTimeFrameAbsolute {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryMetricsTimeFrameAbsoluteToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryMetricsTimeFrameAbsolute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryMetricsTimeFrameAbsoluteToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryMetricsTimeFrameAbsolute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryMetricsTimeFrameAbsoluteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryMetricsTimeFrameAbsolute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryMetricsTimeFrameAbsolute | undefined) {
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
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryMetricsTimeFrameRelative {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryMetricsTimeFrameRelativeToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryMetricsTimeFrameRelative): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryMetricsTimeFrameRelativeToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryMetricsTimeFrameRelative): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryMetricsTimeFrameRelativeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryMetricsTimeFrameRelative | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryMetricsTimeFrameRelative | undefined) {
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
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryMetricsTimeFrame {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryMetricsTimeFrameToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryMetricsTimeFrame): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryMetricsTimeFrameToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryMetricsTimeFrame): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryMetricsTimeFrameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryMetricsTimeFrame | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryMetricsTimeFrame | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // absolute - computed: true, optional: false, required: false
  private _absolute = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryMetricsTimeFrameAbsoluteOutputReference(this, "absolute");
  public get absolute() {
    return this._absolute;
  }

  // relative - computed: true, optional: false, required: false
  private _relative = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryMetricsTimeFrameRelativeOutputReference(this, "relative");
  public get relative() {
    return this._relative;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryMetrics {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryMetricsToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryMetricsToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // filters - computed: true, optional: false, required: false
  private _filters = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryMetricsFiltersList(this, "filters", false);
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
  private _timeFrame = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryMetricsTimeFrameOutputReference(this, "time_frame");
  public get timeFrame() {
    return this._timeFrame;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansAggregation {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansAggregationToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansAggregation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansAggregationToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansAggregation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansAggregationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansAggregation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansAggregation | undefined) {
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
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansFiltersField {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansFiltersFieldToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansFiltersField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansFiltersFieldToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansFiltersField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansFiltersFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansFiltersField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansFiltersField | undefined) {
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
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansFiltersOperator {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansFiltersOperatorToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansFiltersOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansFiltersOperatorToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansFiltersOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansFiltersOperatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansFiltersOperator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansFiltersOperator | undefined) {
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
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansFilters {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansFiltersToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansFiltersToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field - computed: true, optional: false, required: false
  private _field = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansFiltersFieldOutputReference(this, "field");
  public get field() {
    return this._field;
  }

  // operator - computed: true, optional: false, required: false
  private _operator = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansFiltersOperatorOutputReference(this, "operator");
  public get operator() {
    return this._operator;
  }
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansFiltersList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansFiltersOutputReference {
    return new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansGroupNames {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansGroupNamesToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansGroupNames): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansGroupNamesToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansGroupNames): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansGroupNamesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansGroupNames | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansGroupNames | undefined) {
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

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansGroupNamesList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansGroupNamesOutputReference {
    return new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansGroupNamesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansStackedGroupName {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansStackedGroupNameToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansStackedGroupName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansStackedGroupNameToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansStackedGroupName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansStackedGroupNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansStackedGroupName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansStackedGroupName | undefined) {
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
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansTimeFrameAbsolute {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansTimeFrameAbsoluteToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansTimeFrameAbsolute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansTimeFrameAbsoluteToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansTimeFrameAbsolute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansTimeFrameAbsoluteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansTimeFrameAbsolute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansTimeFrameAbsolute | undefined) {
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
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansTimeFrameRelative {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansTimeFrameRelativeToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansTimeFrameRelative): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansTimeFrameRelativeToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansTimeFrameRelative): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansTimeFrameRelativeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansTimeFrameRelative | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansTimeFrameRelative | undefined) {
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
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansTimeFrame {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansTimeFrameToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansTimeFrame): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansTimeFrameToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansTimeFrame): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansTimeFrameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansTimeFrame | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansTimeFrame | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // absolute - computed: true, optional: false, required: false
  private _absolute = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansTimeFrameAbsoluteOutputReference(this, "absolute");
  public get absolute() {
    return this._absolute;
  }

  // relative - computed: true, optional: false, required: false
  private _relative = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansTimeFrameRelativeOutputReference(this, "relative");
  public get relative() {
    return this._relative;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpans {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpans | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpans | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggregation - computed: true, optional: false, required: false
  private _aggregation = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansAggregationOutputReference(this, "aggregation");
  public get aggregation() {
    return this._aggregation;
  }

  // filters - computed: true, optional: false, required: false
  private _filters = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }

  // group_names - computed: true, optional: false, required: false
  private _groupNames = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansGroupNamesList(this, "group_names", false);
  public get groupNames() {
    return this._groupNames;
  }

  // lucene_query - computed: true, optional: false, required: false
  public get luceneQuery() {
    return this.getStringAttribute('lucene_query');
  }

  // stacked_group_name - computed: true, optional: false, required: false
  private _stackedGroupName = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansStackedGroupNameOutputReference(this, "stacked_group_name");
  public get stackedGroupName() {
    return this._stackedGroupName;
  }

  // time_frame - computed: true, optional: false, required: false
  private _timeFrame = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansTimeFrameOutputReference(this, "time_frame");
  public get timeFrame() {
    return this._timeFrame;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuery {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_prime - computed: true, optional: false, required: false
  private _dataPrime = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryDataPrimeOutputReference(this, "data_prime");
  public get dataPrime() {
    return this._dataPrime;
  }

  // logs - computed: true, optional: false, required: false
  private _logs = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryLogsOutputReference(this, "logs");
  public get logs() {
    return this._logs;
  }

  // metrics - computed: true, optional: false, required: false
  private _metrics = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryMetricsOutputReference(this, "metrics");
  public get metrics() {
    return this._metrics;
  }

  // spans - computed: true, optional: false, required: false
  private _spans = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQuerySpansOutputReference(this, "spans");
  public get spans() {
    return this._spans;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartStackDefinition {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartStackDefinitionToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartStackDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartStackDefinitionToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartStackDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartStackDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartStackDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartStackDefinition | undefined) {
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
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartXaxisTime {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartXaxisTimeToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartXaxisTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartXaxisTimeToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartXaxisTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartXaxisTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartXaxisTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartXaxisTime | undefined) {
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
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartXaxisValue {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartXaxisValueToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartXaxisValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartXaxisValueToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartXaxisValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartXaxisValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartXaxisValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartXaxisValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartXaxis {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartXaxisToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartXaxis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartXaxisToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartXaxis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartXaxisOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartXaxis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartXaxis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // time - computed: true, optional: false, required: false
  private _time = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartXaxisTimeOutputReference(this, "time");
  public get time() {
    return this._time;
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartXaxisValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChart {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChart): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChart): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChart | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChart | undefined) {
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

  // group_name_template - computed: true, optional: false, required: false
  public get groupNameTemplate() {
    return this.getStringAttribute('group_name_template');
  }

  // max_bars_per_chart - computed: true, optional: false, required: false
  public get maxBarsPerChart() {
    return this.getNumberAttribute('max_bars_per_chart');
  }

  // query - computed: true, optional: false, required: false
  private _query = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartQueryOutputReference(this, "query");
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
  private _stackDefinition = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartStackDefinitionOutputReference(this, "stack_definition");
  public get stackDefinition() {
    return this._stackDefinition;
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }

  // xaxis - computed: true, optional: false, required: false
  private _xaxis = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionBarChartXaxisOutputReference(this, "xaxis");
  public get xaxis() {
    return this._xaxis;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableColumns {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableColumnsToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableColumns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableColumnsToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableColumns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableColumns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableColumns | undefined) {
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

  // width - computed: true, optional: false, required: false
  public get width() {
    return this.getNumberAttribute('width');
  }
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableColumnsList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableColumnsOutputReference {
    return new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableOrderBy {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableOrderByToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableOrderBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableOrderByToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableOrderBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableOrderByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableOrderBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableOrderBy | undefined) {
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

  // order_direction - computed: true, optional: false, required: false
  public get orderDirection() {
    return this.getStringAttribute('order_direction');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeFiltersLogsObservationField {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeFiltersLogsObservationFieldToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeFiltersLogsObservationField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeFiltersLogsObservationFieldToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeFiltersLogsObservationField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeFiltersLogsObservationFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeFiltersLogsObservationField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeFiltersLogsObservationField | undefined) {
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
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeFiltersLogsOperator {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeFiltersLogsOperatorToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeFiltersLogsOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeFiltersLogsOperatorToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeFiltersLogsOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeFiltersLogsOperatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeFiltersLogsOperator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeFiltersLogsOperator | undefined) {
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
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeFiltersLogs {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeFiltersLogsToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeFiltersLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeFiltersLogsToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeFiltersLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeFiltersLogsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeFiltersLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeFiltersLogs | undefined) {
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
  private _observationField = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeFiltersLogsObservationFieldOutputReference(this, "observation_field");
  public get observationField() {
    return this._observationField;
  }

  // operator - computed: true, optional: false, required: false
  private _operator = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeFiltersLogsOperatorOutputReference(this, "operator");
  public get operator() {
    return this._operator;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeFiltersMetricsOperator {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeFiltersMetricsOperatorToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeFiltersMetricsOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeFiltersMetricsOperatorToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeFiltersMetricsOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeFiltersMetricsOperatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeFiltersMetricsOperator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeFiltersMetricsOperator | undefined) {
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
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeFiltersMetrics {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeFiltersMetricsToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeFiltersMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeFiltersMetricsToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeFiltersMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeFiltersMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeFiltersMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeFiltersMetrics | undefined) {
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
  private _operator = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeFiltersMetricsOperatorOutputReference(this, "operator");
  public get operator() {
    return this._operator;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeFiltersSpansField {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeFiltersSpansFieldToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeFiltersSpansField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeFiltersSpansFieldToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeFiltersSpansField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeFiltersSpansFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeFiltersSpansField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeFiltersSpansField | undefined) {
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
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeFiltersSpansOperator {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeFiltersSpansOperatorToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeFiltersSpansOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeFiltersSpansOperatorToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeFiltersSpansOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeFiltersSpansOperatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeFiltersSpansOperator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeFiltersSpansOperator | undefined) {
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
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeFiltersSpans {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeFiltersSpansToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeFiltersSpans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeFiltersSpansToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeFiltersSpans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeFiltersSpansOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeFiltersSpans | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeFiltersSpans | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field - computed: true, optional: false, required: false
  private _field = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeFiltersSpansFieldOutputReference(this, "field");
  public get field() {
    return this._field;
  }

  // operator - computed: true, optional: false, required: false
  private _operator = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeFiltersSpansOperatorOutputReference(this, "operator");
  public get operator() {
    return this._operator;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeFilters {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeFiltersToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeFiltersToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // logs - computed: true, optional: false, required: false
  private _logs = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeFiltersLogsOutputReference(this, "logs");
  public get logs() {
    return this._logs;
  }

  // metrics - computed: true, optional: false, required: false
  private _metrics = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeFiltersMetricsOutputReference(this, "metrics");
  public get metrics() {
    return this._metrics;
  }

  // spans - computed: true, optional: false, required: false
  private _spans = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeFiltersSpansOutputReference(this, "spans");
  public get spans() {
    return this._spans;
  }
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeFiltersList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeFiltersOutputReference {
    return new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeTimeFrameAbsolute {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeTimeFrameAbsoluteToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeTimeFrameAbsolute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeTimeFrameAbsoluteToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeTimeFrameAbsolute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeTimeFrameAbsoluteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeTimeFrameAbsolute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeTimeFrameAbsolute | undefined) {
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
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeTimeFrameRelative {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeTimeFrameRelativeToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeTimeFrameRelative): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeTimeFrameRelativeToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeTimeFrameRelative): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeTimeFrameRelativeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeTimeFrameRelative | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeTimeFrameRelative | undefined) {
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
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeTimeFrame {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeTimeFrameToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeTimeFrame): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeTimeFrameToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeTimeFrame): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeTimeFrameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeTimeFrame | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeTimeFrame | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // absolute - computed: true, optional: false, required: false
  private _absolute = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeTimeFrameAbsoluteOutputReference(this, "absolute");
  public get absolute() {
    return this._absolute;
  }

  // relative - computed: true, optional: false, required: false
  private _relative = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeTimeFrameRelativeOutputReference(this, "relative");
  public get relative() {
    return this._relative;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrime {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // filters - computed: true, optional: false, required: false
  private _filters = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }

  // query - computed: true, optional: false, required: false
  public get query() {
    return this.getStringAttribute('query');
  }

  // time_frame - computed: true, optional: false, required: false
  private _timeFrame = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeTimeFrameOutputReference(this, "time_frame");
  public get timeFrame() {
    return this._timeFrame;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsFiltersObservationField {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsFiltersObservationFieldToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsFiltersObservationField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsFiltersObservationFieldToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsFiltersObservationField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsFiltersObservationFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsFiltersObservationField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsFiltersObservationField | undefined) {
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
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsFiltersOperator {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsFiltersOperatorToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsFiltersOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsFiltersOperatorToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsFiltersOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsFiltersOperatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsFiltersOperator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsFiltersOperator | undefined) {
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
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsFilters {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsFiltersToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsFiltersToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsFilters | undefined) {
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
  private _observationField = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsFiltersObservationFieldOutputReference(this, "observation_field");
  public get observationField() {
    return this._observationField;
  }

  // operator - computed: true, optional: false, required: false
  private _operator = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsFiltersOperatorOutputReference(this, "operator");
  public get operator() {
    return this._operator;
  }
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsFiltersList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsFiltersOutputReference {
    return new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsGroupingAggregationsAggregationObservationField {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsGroupingAggregationsAggregationObservationFieldToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsGroupingAggregationsAggregationObservationField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsGroupingAggregationsAggregationObservationFieldToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsGroupingAggregationsAggregationObservationField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsGroupingAggregationsAggregationObservationFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsGroupingAggregationsAggregationObservationField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsGroupingAggregationsAggregationObservationField | undefined) {
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
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsGroupingAggregationsAggregation {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsGroupingAggregationsAggregationToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsGroupingAggregationsAggregation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsGroupingAggregationsAggregationToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsGroupingAggregationsAggregation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsGroupingAggregationsAggregationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsGroupingAggregationsAggregation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsGroupingAggregationsAggregation | undefined) {
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
  private _observationField = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsGroupingAggregationsAggregationObservationFieldOutputReference(this, "observation_field");
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
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsGroupingAggregations {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsGroupingAggregationsToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsGroupingAggregations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsGroupingAggregationsToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsGroupingAggregations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsGroupingAggregationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsGroupingAggregations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsGroupingAggregations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggregation - computed: true, optional: false, required: false
  private _aggregation = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsGroupingAggregationsAggregationOutputReference(this, "aggregation");
  public get aggregation() {
    return this._aggregation;
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
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsGroupingAggregationsList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsGroupingAggregationsOutputReference {
    return new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsGroupingAggregationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsGroupingGroupBys {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsGroupingGroupBysToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsGroupingGroupBys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsGroupingGroupBysToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsGroupingGroupBys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsGroupingGroupBysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsGroupingGroupBys | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsGroupingGroupBys | undefined) {
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

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsGroupingGroupBysList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsGroupingGroupBysOutputReference {
    return new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsGroupingGroupBysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsGrouping {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsGroupingToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsGrouping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsGroupingToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsGrouping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsGroupingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsGrouping | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsGrouping | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggregations - computed: true, optional: false, required: false
  private _aggregations = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsGroupingAggregationsList(this, "aggregations", false);
  public get aggregations() {
    return this._aggregations;
  }

  // group_bys - computed: true, optional: false, required: false
  private _groupBys = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsGroupingGroupBysList(this, "group_bys", false);
  public get groupBys() {
    return this._groupBys;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsTimeFrameAbsolute {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsTimeFrameAbsoluteToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsTimeFrameAbsolute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsTimeFrameAbsoluteToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsTimeFrameAbsolute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsTimeFrameAbsoluteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsTimeFrameAbsolute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsTimeFrameAbsolute | undefined) {
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
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsTimeFrameRelative {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsTimeFrameRelativeToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsTimeFrameRelative): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsTimeFrameRelativeToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsTimeFrameRelative): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsTimeFrameRelativeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsTimeFrameRelative | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsTimeFrameRelative | undefined) {
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
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsTimeFrame {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsTimeFrameToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsTimeFrame): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsTimeFrameToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsTimeFrame): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsTimeFrameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsTimeFrame | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsTimeFrame | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // absolute - computed: true, optional: false, required: false
  private _absolute = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsTimeFrameAbsoluteOutputReference(this, "absolute");
  public get absolute() {
    return this._absolute;
  }

  // relative - computed: true, optional: false, required: false
  private _relative = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsTimeFrameRelativeOutputReference(this, "relative");
  public get relative() {
    return this._relative;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogs {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // filters - computed: true, optional: false, required: false
  private _filters = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }

  // grouping - computed: true, optional: false, required: false
  private _grouping = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsGroupingOutputReference(this, "grouping");
  public get grouping() {
    return this._grouping;
  }

  // lucene_query - computed: true, optional: false, required: false
  public get luceneQuery() {
    return this.getStringAttribute('lucene_query');
  }

  // time_frame - computed: true, optional: false, required: false
  private _timeFrame = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsTimeFrameOutputReference(this, "time_frame");
  public get timeFrame() {
    return this._timeFrame;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryMetricsFiltersOperator {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryMetricsFiltersOperatorToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryMetricsFiltersOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryMetricsFiltersOperatorToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryMetricsFiltersOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryMetricsFiltersOperatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryMetricsFiltersOperator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryMetricsFiltersOperator | undefined) {
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
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryMetricsFilters {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryMetricsFiltersToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryMetricsFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryMetricsFiltersToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryMetricsFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryMetricsFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryMetricsFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryMetricsFilters | undefined) {
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
  private _operator = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryMetricsFiltersOperatorOutputReference(this, "operator");
  public get operator() {
    return this._operator;
  }
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryMetricsFiltersList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryMetricsFiltersOutputReference {
    return new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryMetricsFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryMetricsTimeFrameAbsolute {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryMetricsTimeFrameAbsoluteToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryMetricsTimeFrameAbsolute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryMetricsTimeFrameAbsoluteToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryMetricsTimeFrameAbsolute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryMetricsTimeFrameAbsoluteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryMetricsTimeFrameAbsolute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryMetricsTimeFrameAbsolute | undefined) {
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
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryMetricsTimeFrameRelative {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryMetricsTimeFrameRelativeToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryMetricsTimeFrameRelative): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryMetricsTimeFrameRelativeToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryMetricsTimeFrameRelative): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryMetricsTimeFrameRelativeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryMetricsTimeFrameRelative | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryMetricsTimeFrameRelative | undefined) {
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
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryMetricsTimeFrame {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryMetricsTimeFrameToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryMetricsTimeFrame): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryMetricsTimeFrameToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryMetricsTimeFrame): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryMetricsTimeFrameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryMetricsTimeFrame | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryMetricsTimeFrame | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // absolute - computed: true, optional: false, required: false
  private _absolute = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryMetricsTimeFrameAbsoluteOutputReference(this, "absolute");
  public get absolute() {
    return this._absolute;
  }

  // relative - computed: true, optional: false, required: false
  private _relative = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryMetricsTimeFrameRelativeOutputReference(this, "relative");
  public get relative() {
    return this._relative;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryMetrics {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryMetricsToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryMetricsToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // filters - computed: true, optional: false, required: false
  private _filters = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryMetricsFiltersList(this, "filters", false);
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
  private _timeFrame = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryMetricsTimeFrameOutputReference(this, "time_frame");
  public get timeFrame() {
    return this._timeFrame;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansFiltersField {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansFiltersFieldToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansFiltersField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansFiltersFieldToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansFiltersField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansFiltersFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansFiltersField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansFiltersField | undefined) {
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
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansFiltersOperator {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansFiltersOperatorToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansFiltersOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansFiltersOperatorToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansFiltersOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansFiltersOperatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansFiltersOperator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansFiltersOperator | undefined) {
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
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansFilters {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansFiltersToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansFiltersToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field - computed: true, optional: false, required: false
  private _field = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansFiltersFieldOutputReference(this, "field");
  public get field() {
    return this._field;
  }

  // operator - computed: true, optional: false, required: false
  private _operator = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansFiltersOperatorOutputReference(this, "operator");
  public get operator() {
    return this._operator;
  }
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansFiltersList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansFiltersOutputReference {
    return new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansGroupingAggregationsAggregation {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansGroupingAggregationsAggregationToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansGroupingAggregationsAggregation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansGroupingAggregationsAggregationToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansGroupingAggregationsAggregation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansGroupingAggregationsAggregationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansGroupingAggregationsAggregation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansGroupingAggregationsAggregation | undefined) {
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
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansGroupingAggregations {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansGroupingAggregationsToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansGroupingAggregations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansGroupingAggregationsToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansGroupingAggregations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansGroupingAggregationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansGroupingAggregations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansGroupingAggregations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggregation - computed: true, optional: false, required: false
  private _aggregation = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansGroupingAggregationsAggregationOutputReference(this, "aggregation");
  public get aggregation() {
    return this._aggregation;
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
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansGroupingAggregationsList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansGroupingAggregationsOutputReference {
    return new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansGroupingAggregationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansGroupingGroupBy {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansGroupingGroupByToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansGroupingGroupBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansGroupingGroupByToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansGroupingGroupBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansGroupingGroupByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansGroupingGroupBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansGroupingGroupBy | undefined) {
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

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansGroupingGroupByList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansGroupingGroupByOutputReference {
    return new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansGroupingGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansGrouping {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansGroupingToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansGrouping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansGroupingToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansGrouping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansGroupingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansGrouping | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansGrouping | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggregations - computed: true, optional: false, required: false
  private _aggregations = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansGroupingAggregationsList(this, "aggregations", false);
  public get aggregations() {
    return this._aggregations;
  }

  // group_by - computed: true, optional: false, required: false
  private _groupBy = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansGroupingGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansTimeFrameAbsolute {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansTimeFrameAbsoluteToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansTimeFrameAbsolute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansTimeFrameAbsoluteToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansTimeFrameAbsolute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansTimeFrameAbsoluteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansTimeFrameAbsolute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansTimeFrameAbsolute | undefined) {
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
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansTimeFrameRelative {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansTimeFrameRelativeToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansTimeFrameRelative): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansTimeFrameRelativeToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansTimeFrameRelative): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansTimeFrameRelativeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansTimeFrameRelative | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansTimeFrameRelative | undefined) {
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
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansTimeFrame {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansTimeFrameToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansTimeFrame): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansTimeFrameToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansTimeFrame): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansTimeFrameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansTimeFrame | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansTimeFrame | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // absolute - computed: true, optional: false, required: false
  private _absolute = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansTimeFrameAbsoluteOutputReference(this, "absolute");
  public get absolute() {
    return this._absolute;
  }

  // relative - computed: true, optional: false, required: false
  private _relative = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansTimeFrameRelativeOutputReference(this, "relative");
  public get relative() {
    return this._relative;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpans {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpans | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpans | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // filters - computed: true, optional: false, required: false
  private _filters = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }

  // grouping - computed: true, optional: false, required: false
  private _grouping = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansGroupingOutputReference(this, "grouping");
  public get grouping() {
    return this._grouping;
  }

  // lucene_query - computed: true, optional: false, required: false
  public get luceneQuery() {
    return this.getStringAttribute('lucene_query');
  }

  // time_frame - computed: true, optional: false, required: false
  private _timeFrame = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansTimeFrameOutputReference(this, "time_frame");
  public get timeFrame() {
    return this._timeFrame;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuery {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_prime - computed: true, optional: false, required: false
  private _dataPrime = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryDataPrimeOutputReference(this, "data_prime");
  public get dataPrime() {
    return this._dataPrime;
  }

  // logs - computed: true, optional: false, required: false
  private _logs = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryLogsOutputReference(this, "logs");
  public get logs() {
    return this._logs;
  }

  // metrics - computed: true, optional: false, required: false
  private _metrics = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryMetricsOutputReference(this, "metrics");
  public get metrics() {
    return this._metrics;
  }

  // spans - computed: true, optional: false, required: false
  private _spans = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQuerySpansOutputReference(this, "spans");
  public get spans() {
    return this._spans;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTable {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // columns - computed: true, optional: false, required: false
  private _columns = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableColumnsList(this, "columns", false);
  public get columns() {
    return this._columns;
  }

  // data_mode_type - computed: true, optional: false, required: false
  public get dataModeType() {
    return this.getStringAttribute('data_mode_type');
  }

  // order_by - computed: true, optional: false, required: false
  private _orderBy = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableOrderByOutputReference(this, "order_by");
  public get orderBy() {
    return this._orderBy;
  }

  // query - computed: true, optional: false, required: false
  private _query = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionDataTableQueryOutputReference(this, "query");
  public get query() {
    return this._query;
  }

  // results_per_page - computed: true, optional: false, required: false
  public get resultsPerPage() {
    return this.getNumberAttribute('results_per_page');
  }

  // row_style - computed: true, optional: false, required: false
  public get rowStyle() {
    return this.getStringAttribute('row_style');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeFiltersLogsObservationField {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeFiltersLogsObservationFieldToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeFiltersLogsObservationField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeFiltersLogsObservationFieldToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeFiltersLogsObservationField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeFiltersLogsObservationFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeFiltersLogsObservationField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeFiltersLogsObservationField | undefined) {
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
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeFiltersLogsOperator {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeFiltersLogsOperatorToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeFiltersLogsOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeFiltersLogsOperatorToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeFiltersLogsOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeFiltersLogsOperatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeFiltersLogsOperator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeFiltersLogsOperator | undefined) {
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
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeFiltersLogs {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeFiltersLogsToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeFiltersLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeFiltersLogsToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeFiltersLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeFiltersLogsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeFiltersLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeFiltersLogs | undefined) {
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
  private _observationField = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeFiltersLogsObservationFieldOutputReference(this, "observation_field");
  public get observationField() {
    return this._observationField;
  }

  // operator - computed: true, optional: false, required: false
  private _operator = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeFiltersLogsOperatorOutputReference(this, "operator");
  public get operator() {
    return this._operator;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeFiltersMetricsOperator {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeFiltersMetricsOperatorToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeFiltersMetricsOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeFiltersMetricsOperatorToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeFiltersMetricsOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeFiltersMetricsOperatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeFiltersMetricsOperator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeFiltersMetricsOperator | undefined) {
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
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeFiltersMetrics {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeFiltersMetricsToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeFiltersMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeFiltersMetricsToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeFiltersMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeFiltersMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeFiltersMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeFiltersMetrics | undefined) {
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
  private _operator = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeFiltersMetricsOperatorOutputReference(this, "operator");
  public get operator() {
    return this._operator;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeFiltersSpansField {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeFiltersSpansFieldToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeFiltersSpansField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeFiltersSpansFieldToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeFiltersSpansField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeFiltersSpansFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeFiltersSpansField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeFiltersSpansField | undefined) {
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
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeFiltersSpansOperator {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeFiltersSpansOperatorToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeFiltersSpansOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeFiltersSpansOperatorToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeFiltersSpansOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeFiltersSpansOperatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeFiltersSpansOperator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeFiltersSpansOperator | undefined) {
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
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeFiltersSpans {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeFiltersSpansToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeFiltersSpans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeFiltersSpansToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeFiltersSpans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeFiltersSpansOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeFiltersSpans | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeFiltersSpans | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field - computed: true, optional: false, required: false
  private _field = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeFiltersSpansFieldOutputReference(this, "field");
  public get field() {
    return this._field;
  }

  // operator - computed: true, optional: false, required: false
  private _operator = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeFiltersSpansOperatorOutputReference(this, "operator");
  public get operator() {
    return this._operator;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeFilters {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeFiltersToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeFiltersToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // logs - computed: true, optional: false, required: false
  private _logs = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeFiltersLogsOutputReference(this, "logs");
  public get logs() {
    return this._logs;
  }

  // metrics - computed: true, optional: false, required: false
  private _metrics = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeFiltersMetricsOutputReference(this, "metrics");
  public get metrics() {
    return this._metrics;
  }

  // spans - computed: true, optional: false, required: false
  private _spans = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeFiltersSpansOutputReference(this, "spans");
  public get spans() {
    return this._spans;
  }
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeFiltersList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeFiltersOutputReference {
    return new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeTimeFrameAbsolute {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeTimeFrameAbsoluteToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeTimeFrameAbsolute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeTimeFrameAbsoluteToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeTimeFrameAbsolute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeTimeFrameAbsoluteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeTimeFrameAbsolute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeTimeFrameAbsolute | undefined) {
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
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeTimeFrameRelative {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeTimeFrameRelativeToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeTimeFrameRelative): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeTimeFrameRelativeToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeTimeFrameRelative): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeTimeFrameRelativeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeTimeFrameRelative | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeTimeFrameRelative | undefined) {
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
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeTimeFrame {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeTimeFrameToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeTimeFrame): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeTimeFrameToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeTimeFrame): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeTimeFrameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeTimeFrame | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeTimeFrame | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // absolute - computed: true, optional: false, required: false
  private _absolute = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeTimeFrameAbsoluteOutputReference(this, "absolute");
  public get absolute() {
    return this._absolute;
  }

  // relative - computed: true, optional: false, required: false
  private _relative = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeTimeFrameRelativeOutputReference(this, "relative");
  public get relative() {
    return this._relative;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrime {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // filters - computed: true, optional: false, required: false
  private _filters = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }

  // query - computed: true, optional: false, required: false
  public get query() {
    return this.getStringAttribute('query');
  }

  // time_frame - computed: true, optional: false, required: false
  private _timeFrame = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeTimeFrameOutputReference(this, "time_frame");
  public get timeFrame() {
    return this._timeFrame;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryLogsFiltersObservationField {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryLogsFiltersObservationFieldToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryLogsFiltersObservationField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryLogsFiltersObservationFieldToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryLogsFiltersObservationField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryLogsFiltersObservationFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryLogsFiltersObservationField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryLogsFiltersObservationField | undefined) {
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
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryLogsFiltersOperator {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryLogsFiltersOperatorToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryLogsFiltersOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryLogsFiltersOperatorToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryLogsFiltersOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryLogsFiltersOperatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryLogsFiltersOperator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryLogsFiltersOperator | undefined) {
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
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryLogsFilters {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryLogsFiltersToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryLogsFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryLogsFiltersToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryLogsFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryLogsFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryLogsFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryLogsFilters | undefined) {
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
  private _observationField = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryLogsFiltersObservationFieldOutputReference(this, "observation_field");
  public get observationField() {
    return this._observationField;
  }

  // operator - computed: true, optional: false, required: false
  private _operator = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryLogsFiltersOperatorOutputReference(this, "operator");
  public get operator() {
    return this._operator;
  }
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryLogsFiltersList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryLogsFiltersOutputReference {
    return new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryLogsFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryLogsLogsAggregationObservationField {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryLogsLogsAggregationObservationFieldToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryLogsLogsAggregationObservationField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryLogsLogsAggregationObservationFieldToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryLogsLogsAggregationObservationField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryLogsLogsAggregationObservationFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryLogsLogsAggregationObservationField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryLogsLogsAggregationObservationField | undefined) {
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
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryLogsLogsAggregation {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryLogsLogsAggregationToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryLogsLogsAggregation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryLogsLogsAggregationToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryLogsLogsAggregation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryLogsLogsAggregationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryLogsLogsAggregation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryLogsLogsAggregation | undefined) {
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
  private _observationField = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryLogsLogsAggregationObservationFieldOutputReference(this, "observation_field");
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
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryLogsTimeFrameAbsolute {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryLogsTimeFrameAbsoluteToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryLogsTimeFrameAbsolute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryLogsTimeFrameAbsoluteToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryLogsTimeFrameAbsolute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryLogsTimeFrameAbsoluteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryLogsTimeFrameAbsolute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryLogsTimeFrameAbsolute | undefined) {
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
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryLogsTimeFrameRelative {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryLogsTimeFrameRelativeToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryLogsTimeFrameRelative): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryLogsTimeFrameRelativeToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryLogsTimeFrameRelative): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryLogsTimeFrameRelativeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryLogsTimeFrameRelative | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryLogsTimeFrameRelative | undefined) {
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
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryLogsTimeFrame {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryLogsTimeFrameToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryLogsTimeFrame): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryLogsTimeFrameToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryLogsTimeFrame): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryLogsTimeFrameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryLogsTimeFrame | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryLogsTimeFrame | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // absolute - computed: true, optional: false, required: false
  private _absolute = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryLogsTimeFrameAbsoluteOutputReference(this, "absolute");
  public get absolute() {
    return this._absolute;
  }

  // relative - computed: true, optional: false, required: false
  private _relative = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryLogsTimeFrameRelativeOutputReference(this, "relative");
  public get relative() {
    return this._relative;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryLogs {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryLogsToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryLogsToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryLogsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryLogs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // filters - computed: true, optional: false, required: false
  private _filters = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryLogsFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }

  // logs_aggregation - computed: true, optional: false, required: false
  private _logsAggregation = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryLogsLogsAggregationOutputReference(this, "logs_aggregation");
  public get logsAggregation() {
    return this._logsAggregation;
  }

  // lucene_query - computed: true, optional: false, required: false
  public get luceneQuery() {
    return this.getStringAttribute('lucene_query');
  }

  // time_frame - computed: true, optional: false, required: false
  private _timeFrame = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryLogsTimeFrameOutputReference(this, "time_frame");
  public get timeFrame() {
    return this._timeFrame;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryMetricsFiltersOperator {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryMetricsFiltersOperatorToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryMetricsFiltersOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryMetricsFiltersOperatorToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryMetricsFiltersOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryMetricsFiltersOperatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryMetricsFiltersOperator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryMetricsFiltersOperator | undefined) {
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
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryMetricsFilters {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryMetricsFiltersToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryMetricsFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryMetricsFiltersToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryMetricsFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryMetricsFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryMetricsFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryMetricsFilters | undefined) {
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
  private _operator = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryMetricsFiltersOperatorOutputReference(this, "operator");
  public get operator() {
    return this._operator;
  }
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryMetricsFiltersList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryMetricsFiltersOutputReference {
    return new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryMetricsFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryMetricsTimeFrameAbsolute {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryMetricsTimeFrameAbsoluteToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryMetricsTimeFrameAbsolute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryMetricsTimeFrameAbsoluteToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryMetricsTimeFrameAbsolute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryMetricsTimeFrameAbsoluteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryMetricsTimeFrameAbsolute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryMetricsTimeFrameAbsolute | undefined) {
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
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryMetricsTimeFrameRelative {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryMetricsTimeFrameRelativeToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryMetricsTimeFrameRelative): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryMetricsTimeFrameRelativeToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryMetricsTimeFrameRelative): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryMetricsTimeFrameRelativeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryMetricsTimeFrameRelative | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryMetricsTimeFrameRelative | undefined) {
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
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryMetricsTimeFrame {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryMetricsTimeFrameToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryMetricsTimeFrame): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryMetricsTimeFrameToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryMetricsTimeFrame): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryMetricsTimeFrameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryMetricsTimeFrame | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryMetricsTimeFrame | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // absolute - computed: true, optional: false, required: false
  private _absolute = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryMetricsTimeFrameAbsoluteOutputReference(this, "absolute");
  public get absolute() {
    return this._absolute;
  }

  // relative - computed: true, optional: false, required: false
  private _relative = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryMetricsTimeFrameRelativeOutputReference(this, "relative");
  public get relative() {
    return this._relative;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryMetrics {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryMetricsToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryMetricsToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryMetrics | undefined) {
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
  private _filters = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryMetricsFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }

  // promql_query - computed: true, optional: false, required: false
  public get promqlQuery() {
    return this.getStringAttribute('promql_query');
  }

  // time_frame - computed: true, optional: false, required: false
  private _timeFrame = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryMetricsTimeFrameOutputReference(this, "time_frame");
  public get timeFrame() {
    return this._timeFrame;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQuerySpansFiltersField {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQuerySpansFiltersFieldToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQuerySpansFiltersField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQuerySpansFiltersFieldToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQuerySpansFiltersField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQuerySpansFiltersFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQuerySpansFiltersField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQuerySpansFiltersField | undefined) {
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
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQuerySpansFiltersOperator {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQuerySpansFiltersOperatorToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQuerySpansFiltersOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQuerySpansFiltersOperatorToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQuerySpansFiltersOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQuerySpansFiltersOperatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQuerySpansFiltersOperator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQuerySpansFiltersOperator | undefined) {
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
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQuerySpansFilters {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQuerySpansFiltersToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQuerySpansFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQuerySpansFiltersToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQuerySpansFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQuerySpansFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQuerySpansFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQuerySpansFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field - computed: true, optional: false, required: false
  private _field = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQuerySpansFiltersFieldOutputReference(this, "field");
  public get field() {
    return this._field;
  }

  // operator - computed: true, optional: false, required: false
  private _operator = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQuerySpansFiltersOperatorOutputReference(this, "operator");
  public get operator() {
    return this._operator;
  }
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQuerySpansFiltersList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQuerySpansFiltersOutputReference {
    return new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQuerySpansFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQuerySpansSpansAggregation {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQuerySpansSpansAggregationToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQuerySpansSpansAggregation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQuerySpansSpansAggregationToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQuerySpansSpansAggregation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQuerySpansSpansAggregationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQuerySpansSpansAggregation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQuerySpansSpansAggregation | undefined) {
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
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQuerySpansTimeFrameAbsolute {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQuerySpansTimeFrameAbsoluteToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQuerySpansTimeFrameAbsolute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQuerySpansTimeFrameAbsoluteToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQuerySpansTimeFrameAbsolute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQuerySpansTimeFrameAbsoluteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQuerySpansTimeFrameAbsolute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQuerySpansTimeFrameAbsolute | undefined) {
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
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQuerySpansTimeFrameRelative {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQuerySpansTimeFrameRelativeToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQuerySpansTimeFrameRelative): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQuerySpansTimeFrameRelativeToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQuerySpansTimeFrameRelative): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQuerySpansTimeFrameRelativeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQuerySpansTimeFrameRelative | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQuerySpansTimeFrameRelative | undefined) {
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
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQuerySpansTimeFrame {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQuerySpansTimeFrameToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQuerySpansTimeFrame): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQuerySpansTimeFrameToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQuerySpansTimeFrame): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQuerySpansTimeFrameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQuerySpansTimeFrame | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQuerySpansTimeFrame | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // absolute - computed: true, optional: false, required: false
  private _absolute = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQuerySpansTimeFrameAbsoluteOutputReference(this, "absolute");
  public get absolute() {
    return this._absolute;
  }

  // relative - computed: true, optional: false, required: false
  private _relative = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQuerySpansTimeFrameRelativeOutputReference(this, "relative");
  public get relative() {
    return this._relative;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQuerySpans {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQuerySpansToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQuerySpans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQuerySpansToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQuerySpans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQuerySpansOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQuerySpans | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQuerySpans | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // filters - computed: true, optional: false, required: false
  private _filters = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQuerySpansFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }

  // lucene_query - computed: true, optional: false, required: false
  public get luceneQuery() {
    return this.getStringAttribute('lucene_query');
  }

  // spans_aggregation - computed: true, optional: false, required: false
  private _spansAggregation = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQuerySpansSpansAggregationOutputReference(this, "spans_aggregation");
  public get spansAggregation() {
    return this._spansAggregation;
  }

  // time_frame - computed: true, optional: false, required: false
  private _timeFrame = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQuerySpansTimeFrameOutputReference(this, "time_frame");
  public get timeFrame() {
    return this._timeFrame;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQuery {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_prime - computed: true, optional: false, required: false
  private _dataPrime = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryDataPrimeOutputReference(this, "data_prime");
  public get dataPrime() {
    return this._dataPrime;
  }

  // logs - computed: true, optional: false, required: false
  private _logs = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryLogsOutputReference(this, "logs");
  public get logs() {
    return this._logs;
  }

  // metrics - computed: true, optional: false, required: false
  private _metrics = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryMetricsOutputReference(this, "metrics");
  public get metrics() {
    return this._metrics;
  }

  // spans - computed: true, optional: false, required: false
  private _spans = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQuerySpansOutputReference(this, "spans");
  public get spans() {
    return this._spans;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeThresholds {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeThresholdsToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeThresholdsToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeThresholdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeThresholds | undefined) {
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

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeThresholdsList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeThresholdsOutputReference {
    return new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeThresholdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGauge {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGauge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGauge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGauge | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGauge | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_mode_type - computed: true, optional: false, required: false
  public get dataModeType() {
    return this.getStringAttribute('data_mode_type');
  }

  // decimal - computed: true, optional: false, required: false
  public get decimal() {
    return this.getNumberAttribute('decimal');
  }

  // display_series_name - computed: true, optional: false, required: false
  public get displaySeriesName() {
    return this.getBooleanAttribute('display_series_name');
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
  private _query = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeQueryOutputReference(this, "query");
  public get query() {
    return this._query;
  }

  // show_inner_arc - computed: true, optional: false, required: false
  public get showInnerArc() {
    return this.getBooleanAttribute('show_inner_arc');
  }

  // show_outer_arc - computed: true, optional: false, required: false
  public get showOuterArc() {
    return this.getBooleanAttribute('show_outer_arc');
  }

  // threshold_by - computed: true, optional: false, required: false
  public get thresholdBy() {
    return this.getStringAttribute('threshold_by');
  }

  // thresholds - computed: true, optional: false, required: false
  private _thresholds = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionGaugeThresholdsList(this, "thresholds", false);
  public get thresholds() {
    return this._thresholds;
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonLegend {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonLegendToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonLegend): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonLegendToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonLegend): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonLegendOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonLegend | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonLegend | undefined) {
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
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFiltersLogsObservationField {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFiltersLogsObservationFieldToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFiltersLogsObservationField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFiltersLogsObservationFieldToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFiltersLogsObservationField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFiltersLogsObservationFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFiltersLogsObservationField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFiltersLogsObservationField | undefined) {
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
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFiltersLogsOperator {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFiltersLogsOperatorToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFiltersLogsOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFiltersLogsOperatorToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFiltersLogsOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFiltersLogsOperatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFiltersLogsOperator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFiltersLogsOperator | undefined) {
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
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFiltersLogs {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFiltersLogsToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFiltersLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFiltersLogsToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFiltersLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFiltersLogsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFiltersLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFiltersLogs | undefined) {
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
  private _observationField = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFiltersLogsObservationFieldOutputReference(this, "observation_field");
  public get observationField() {
    return this._observationField;
  }

  // operator - computed: true, optional: false, required: false
  private _operator = new DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFiltersLogsOperatorOutputReference(this, "operator");
  public get operator() {
    return this._operator;
  }
}
export interface DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFiltersMetricsOperator {
}

export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFiltersMetricsOperatorToTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFiltersMetricsOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFiltersMetricsOperatorToHclTerraform(struct?: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFiltersMetricsOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFiltersMetricsOperatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFiltersMetricsOperator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixDashboardLayoutSectionsRowsWidgetsDefinitionHexagonQueryDataPrimeFiltersMetricsOperator | undefined) {
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
