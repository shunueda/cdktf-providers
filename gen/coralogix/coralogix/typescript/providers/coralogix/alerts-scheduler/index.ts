// https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/alerts_scheduler
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlertsSchedulerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Alert Scheduler description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/alerts_scheduler#description AlertsScheduler#description}
  */
  readonly description?: string;
  /**
  * Alert Scheduler enabled. If set to `false`, the alert scheduler will be disabled. True by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/alerts_scheduler#enabled AlertsScheduler#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Alert Scheduler filter. Only one of `meta_labels` or `alerts_unique_ids` can be set. If none of them set, all alerts will be affected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/alerts_scheduler#filter AlertsScheduler#filter}
  */
  readonly filter: AlertsSchedulerFilter;
  /**
  * Alert Scheduler meta labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/alerts_scheduler#meta_labels AlertsScheduler#meta_labels}
  */
  readonly metaLabels?: AlertsSchedulerMetaLabels[] | cdktf.IResolvable;
  /**
  * Alert Scheduler name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/alerts_scheduler#name AlertsScheduler#name}
  */
  readonly name: string;
  /**
  * Exactly one of `one_time` or `recurring` must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/alerts_scheduler#schedule AlertsScheduler#schedule}
  */
  readonly schedule: AlertsSchedulerSchedule;
}
export interface AlertsSchedulerFilterMetaLabels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/alerts_scheduler#key AlertsScheduler#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/alerts_scheduler#value AlertsScheduler#value}
  */
  readonly value?: string;
}

export function alertsSchedulerFilterMetaLabelsToTerraform(struct?: AlertsSchedulerFilterMetaLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function alertsSchedulerFilterMetaLabelsToHclTerraform(struct?: AlertsSchedulerFilterMetaLabels | cdktf.IResolvable): any {
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

export class AlertsSchedulerFilterMetaLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertsSchedulerFilterMetaLabels | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AlertsSchedulerFilterMetaLabels | cdktf.IResolvable | undefined) {
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

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class AlertsSchedulerFilterMetaLabelsList extends cdktf.ComplexList {
  public internalValue? : AlertsSchedulerFilterMetaLabels[] | cdktf.IResolvable

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
  public get(index: number): AlertsSchedulerFilterMetaLabelsOutputReference {
    return new AlertsSchedulerFilterMetaLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertsSchedulerFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/alerts_scheduler#alerts_unique_ids AlertsScheduler#alerts_unique_ids}
  */
  readonly alertsUniqueIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/alerts_scheduler#meta_labels AlertsScheduler#meta_labels}
  */
  readonly metaLabels?: AlertsSchedulerFilterMetaLabels[] | cdktf.IResolvable;
  /**
  * DataPrime query expression. - [DataPrime query language](https://coralogix.com/docs/dataprime-query-language/).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/alerts_scheduler#what_expression AlertsScheduler#what_expression}
  */
  readonly whatExpression: string;
}

export function alertsSchedulerFilterToTerraform(struct?: AlertsSchedulerFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alerts_unique_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.alertsUniqueIds),
    meta_labels: cdktf.listMapper(alertsSchedulerFilterMetaLabelsToTerraform, false)(struct!.metaLabels),
    what_expression: cdktf.stringToTerraform(struct!.whatExpression),
  }
}


export function alertsSchedulerFilterToHclTerraform(struct?: AlertsSchedulerFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alerts_unique_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.alertsUniqueIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    meta_labels: {
      value: cdktf.listMapperHcl(alertsSchedulerFilterMetaLabelsToHclTerraform, false)(struct!.metaLabels),
      isBlock: true,
      type: "set",
      storageClassType: "AlertsSchedulerFilterMetaLabelsList",
    },
    what_expression: {
      value: cdktf.stringToHclTerraform(struct!.whatExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertsSchedulerFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertsSchedulerFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertsUniqueIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertsUniqueIds = this._alertsUniqueIds;
    }
    if (this._metaLabels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metaLabels = this._metaLabels?.internalValue;
    }
    if (this._whatExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.whatExpression = this._whatExpression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertsSchedulerFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alertsUniqueIds = undefined;
      this._metaLabels.internalValue = undefined;
      this._whatExpression = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alertsUniqueIds = value.alertsUniqueIds;
      this._metaLabels.internalValue = value.metaLabels;
      this._whatExpression = value.whatExpression;
    }
  }

  // alerts_unique_ids - computed: false, optional: true, required: false
  private _alertsUniqueIds?: string[]; 
  public get alertsUniqueIds() {
    return cdktf.Fn.tolist(this.getListAttribute('alerts_unique_ids'));
  }
  public set alertsUniqueIds(value: string[]) {
    this._alertsUniqueIds = value;
  }
  public resetAlertsUniqueIds() {
    this._alertsUniqueIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertsUniqueIdsInput() {
    return this._alertsUniqueIds;
  }

  // meta_labels - computed: false, optional: true, required: false
  private _metaLabels = new AlertsSchedulerFilterMetaLabelsList(this, "meta_labels", true);
  public get metaLabels() {
    return this._metaLabels;
  }
  public putMetaLabels(value: AlertsSchedulerFilterMetaLabels[] | cdktf.IResolvable) {
    this._metaLabels.internalValue = value;
  }
  public resetMetaLabels() {
    this._metaLabels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaLabelsInput() {
    return this._metaLabels.internalValue;
  }

  // what_expression - computed: false, optional: false, required: true
  private _whatExpression?: string; 
  public get whatExpression() {
    return this.getStringAttribute('what_expression');
  }
  public set whatExpression(value: string) {
    this._whatExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get whatExpressionInput() {
    return this._whatExpression;
  }
}
export interface AlertsSchedulerMetaLabels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/alerts_scheduler#key AlertsScheduler#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/alerts_scheduler#value AlertsScheduler#value}
  */
  readonly value?: string;
}

export function alertsSchedulerMetaLabelsToTerraform(struct?: AlertsSchedulerMetaLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function alertsSchedulerMetaLabelsToHclTerraform(struct?: AlertsSchedulerMetaLabels | cdktf.IResolvable): any {
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

export class AlertsSchedulerMetaLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertsSchedulerMetaLabels | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AlertsSchedulerMetaLabels | cdktf.IResolvable | undefined) {
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

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class AlertsSchedulerMetaLabelsList extends cdktf.ComplexList {
  public internalValue? : AlertsSchedulerMetaLabels[] | cdktf.IResolvable

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
  public get(index: number): AlertsSchedulerMetaLabelsOutputReference {
    return new AlertsSchedulerMetaLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertsSchedulerScheduleOneTimeTimeFrameDuration {
  /**
  * The number of time units to wait before the alert is triggered. For example, if the frequency is set to `hours` and the value is set to `2`, the alert will be triggered after 2 hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/alerts_scheduler#for_over AlertsScheduler#for_over}
  */
  readonly forOver: number;
  /**
  * The time unit to wait before the alert is triggered. Can be `minutes`, `hours` or `days`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/alerts_scheduler#frequency AlertsScheduler#frequency}
  */
  readonly frequency: string;
}

export function alertsSchedulerScheduleOneTimeTimeFrameDurationToTerraform(struct?: AlertsSchedulerScheduleOneTimeTimeFrameDuration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    for_over: cdktf.numberToTerraform(struct!.forOver),
    frequency: cdktf.stringToTerraform(struct!.frequency),
  }
}


export function alertsSchedulerScheduleOneTimeTimeFrameDurationToHclTerraform(struct?: AlertsSchedulerScheduleOneTimeTimeFrameDuration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    for_over: {
      value: cdktf.numberToHclTerraform(struct!.forOver),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    frequency: {
      value: cdktf.stringToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertsSchedulerScheduleOneTimeTimeFrameDurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertsSchedulerScheduleOneTimeTimeFrameDuration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forOver !== undefined) {
      hasAnyValues = true;
      internalValueResult.forOver = this._forOver;
    }
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertsSchedulerScheduleOneTimeTimeFrameDuration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._forOver = undefined;
      this._frequency = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._forOver = value.forOver;
      this._frequency = value.frequency;
    }
  }

  // for_over - computed: false, optional: false, required: true
  private _forOver?: number; 
  public get forOver() {
    return this.getNumberAttribute('for_over');
  }
  public set forOver(value: number) {
    this._forOver = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forOverInput() {
    return this._forOver;
  }

  // frequency - computed: false, optional: false, required: true
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }
}
export interface AlertsSchedulerScheduleOneTimeTimeFrame {
  /**
  * The duration from the start time to wait.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/alerts_scheduler#duration AlertsScheduler#duration}
  */
  readonly duration?: AlertsSchedulerScheduleOneTimeTimeFrameDuration;
  /**
  * The end time of the time frame. In a isodate format. For example, `2021-01-01T00:00:00.000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/alerts_scheduler#end_time AlertsScheduler#end_time}
  */
  readonly endTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/alerts_scheduler#start_time AlertsScheduler#start_time}
  */
  readonly startTime: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/alerts_scheduler#time_zone AlertsScheduler#time_zone}
  */
  readonly timeZone: string;
}

export function alertsSchedulerScheduleOneTimeTimeFrameToTerraform(struct?: AlertsSchedulerScheduleOneTimeTimeFrame | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: alertsSchedulerScheduleOneTimeTimeFrameDurationToTerraform(struct!.duration),
    end_time: cdktf.stringToTerraform(struct!.endTime),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
  }
}


export function alertsSchedulerScheduleOneTimeTimeFrameToHclTerraform(struct?: AlertsSchedulerScheduleOneTimeTimeFrame | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: alertsSchedulerScheduleOneTimeTimeFrameDurationToHclTerraform(struct!.duration),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertsSchedulerScheduleOneTimeTimeFrameDuration",
    },
    end_time: {
      value: cdktf.stringToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_zone: {
      value: cdktf.stringToHclTerraform(struct!.timeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertsSchedulerScheduleOneTimeTimeFrameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertsSchedulerScheduleOneTimeTimeFrame | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration?.internalValue;
    }
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertsSchedulerScheduleOneTimeTimeFrame | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duration.internalValue = undefined;
      this._endTime = undefined;
      this._startTime = undefined;
      this._timeZone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duration.internalValue = value.duration;
      this._endTime = value.endTime;
      this._startTime = value.startTime;
      this._timeZone = value.timeZone;
    }
  }

  // duration - computed: false, optional: true, required: false
  private _duration = new AlertsSchedulerScheduleOneTimeTimeFrameDurationOutputReference(this, "duration");
  public get duration() {
    return this._duration;
  }
  public putDuration(value: AlertsSchedulerScheduleOneTimeTimeFrameDuration) {
    this._duration.internalValue = value;
  }
  public resetDuration() {
    this._duration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration.internalValue;
  }

  // end_time - computed: false, optional: true, required: false
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // start_time - computed: false, optional: false, required: true
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // time_zone - computed: false, optional: false, required: true
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }
}
export interface AlertsSchedulerScheduleOneTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/alerts_scheduler#time_frame AlertsScheduler#time_frame}
  */
  readonly timeFrame: AlertsSchedulerScheduleOneTimeTimeFrame;
}

export function alertsSchedulerScheduleOneTimeToTerraform(struct?: AlertsSchedulerScheduleOneTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    time_frame: alertsSchedulerScheduleOneTimeTimeFrameToTerraform(struct!.timeFrame),
  }
}


export function alertsSchedulerScheduleOneTimeToHclTerraform(struct?: AlertsSchedulerScheduleOneTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    time_frame: {
      value: alertsSchedulerScheduleOneTimeTimeFrameToHclTerraform(struct!.timeFrame),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertsSchedulerScheduleOneTimeTimeFrame",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertsSchedulerScheduleOneTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertsSchedulerScheduleOneTime | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeFrame?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeFrame = this._timeFrame?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertsSchedulerScheduleOneTime | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._timeFrame.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._timeFrame.internalValue = value.timeFrame;
    }
  }

  // time_frame - computed: false, optional: false, required: true
  private _timeFrame = new AlertsSchedulerScheduleOneTimeTimeFrameOutputReference(this, "time_frame");
  public get timeFrame() {
    return this._timeFrame;
  }
  public putTimeFrame(value: AlertsSchedulerScheduleOneTimeTimeFrame) {
    this._timeFrame.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeFrameInput() {
    return this._timeFrame.internalValue;
  }
}
export interface AlertsSchedulerScheduleRecurringDynamicFrequencyDaily {
}

export function alertsSchedulerScheduleRecurringDynamicFrequencyDailyToTerraform(struct?: AlertsSchedulerScheduleRecurringDynamicFrequencyDaily | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function alertsSchedulerScheduleRecurringDynamicFrequencyDailyToHclTerraform(struct?: AlertsSchedulerScheduleRecurringDynamicFrequencyDaily | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AlertsSchedulerScheduleRecurringDynamicFrequencyDailyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertsSchedulerScheduleRecurringDynamicFrequencyDaily | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertsSchedulerScheduleRecurringDynamicFrequencyDaily | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface AlertsSchedulerScheduleRecurringDynamicFrequencyMonthly {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/alerts_scheduler#days AlertsScheduler#days}
  */
  readonly days?: number[];
}

export function alertsSchedulerScheduleRecurringDynamicFrequencyMonthlyToTerraform(struct?: AlertsSchedulerScheduleRecurringDynamicFrequencyMonthly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.days),
  }
}


export function alertsSchedulerScheduleRecurringDynamicFrequencyMonthlyToHclTerraform(struct?: AlertsSchedulerScheduleRecurringDynamicFrequencyMonthly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.days),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertsSchedulerScheduleRecurringDynamicFrequencyMonthlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertsSchedulerScheduleRecurringDynamicFrequencyMonthly | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertsSchedulerScheduleRecurringDynamicFrequencyMonthly | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._days = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._days = value.days;
    }
  }

  // days - computed: false, optional: true, required: false
  private _days?: number[]; 
  public get days() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('days')));
  }
  public set days(value: number[]) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }
}
export interface AlertsSchedulerScheduleRecurringDynamicFrequencyWeekly {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/alerts_scheduler#days AlertsScheduler#days}
  */
  readonly days?: string[];
}

export function alertsSchedulerScheduleRecurringDynamicFrequencyWeeklyToTerraform(struct?: AlertsSchedulerScheduleRecurringDynamicFrequencyWeekly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.days),
  }
}


export function alertsSchedulerScheduleRecurringDynamicFrequencyWeeklyToHclTerraform(struct?: AlertsSchedulerScheduleRecurringDynamicFrequencyWeekly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.days),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertsSchedulerScheduleRecurringDynamicFrequencyWeeklyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertsSchedulerScheduleRecurringDynamicFrequencyWeekly | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertsSchedulerScheduleRecurringDynamicFrequencyWeekly | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._days = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._days = value.days;
    }
  }

  // days - computed: false, optional: true, required: false
  private _days?: string[]; 
  public get days() {
    return cdktf.Fn.tolist(this.getListAttribute('days'));
  }
  public set days(value: string[]) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }
}
export interface AlertsSchedulerScheduleRecurringDynamicFrequency {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/alerts_scheduler#daily AlertsScheduler#daily}
  */
  readonly daily?: AlertsSchedulerScheduleRecurringDynamicFrequencyDaily;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/alerts_scheduler#monthly AlertsScheduler#monthly}
  */
  readonly monthly?: AlertsSchedulerScheduleRecurringDynamicFrequencyMonthly;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/alerts_scheduler#weekly AlertsScheduler#weekly}
  */
  readonly weekly?: AlertsSchedulerScheduleRecurringDynamicFrequencyWeekly;
}

export function alertsSchedulerScheduleRecurringDynamicFrequencyToTerraform(struct?: AlertsSchedulerScheduleRecurringDynamicFrequency | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    daily: alertsSchedulerScheduleRecurringDynamicFrequencyDailyToTerraform(struct!.daily),
    monthly: alertsSchedulerScheduleRecurringDynamicFrequencyMonthlyToTerraform(struct!.monthly),
    weekly: alertsSchedulerScheduleRecurringDynamicFrequencyWeeklyToTerraform(struct!.weekly),
  }
}


export function alertsSchedulerScheduleRecurringDynamicFrequencyToHclTerraform(struct?: AlertsSchedulerScheduleRecurringDynamicFrequency | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    daily: {
      value: alertsSchedulerScheduleRecurringDynamicFrequencyDailyToHclTerraform(struct!.daily),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertsSchedulerScheduleRecurringDynamicFrequencyDaily",
    },
    monthly: {
      value: alertsSchedulerScheduleRecurringDynamicFrequencyMonthlyToHclTerraform(struct!.monthly),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertsSchedulerScheduleRecurringDynamicFrequencyMonthly",
    },
    weekly: {
      value: alertsSchedulerScheduleRecurringDynamicFrequencyWeeklyToHclTerraform(struct!.weekly),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertsSchedulerScheduleRecurringDynamicFrequencyWeekly",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertsSchedulerScheduleRecurringDynamicFrequencyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertsSchedulerScheduleRecurringDynamicFrequency | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daily?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.daily = this._daily?.internalValue;
    }
    if (this._monthly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monthly = this._monthly?.internalValue;
    }
    if (this._weekly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekly = this._weekly?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertsSchedulerScheduleRecurringDynamicFrequency | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._daily.internalValue = undefined;
      this._monthly.internalValue = undefined;
      this._weekly.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._daily.internalValue = value.daily;
      this._monthly.internalValue = value.monthly;
      this._weekly.internalValue = value.weekly;
    }
  }

  // daily - computed: false, optional: true, required: false
  private _daily = new AlertsSchedulerScheduleRecurringDynamicFrequencyDailyOutputReference(this, "daily");
  public get daily() {
    return this._daily;
  }
  public putDaily(value: AlertsSchedulerScheduleRecurringDynamicFrequencyDaily) {
    this._daily.internalValue = value;
  }
  public resetDaily() {
    this._daily.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyInput() {
    return this._daily.internalValue;
  }

  // monthly - computed: false, optional: true, required: false
  private _monthly = new AlertsSchedulerScheduleRecurringDynamicFrequencyMonthlyOutputReference(this, "monthly");
  public get monthly() {
    return this._monthly;
  }
  public putMonthly(value: AlertsSchedulerScheduleRecurringDynamicFrequencyMonthly) {
    this._monthly.internalValue = value;
  }
  public resetMonthly() {
    this._monthly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthlyInput() {
    return this._monthly.internalValue;
  }

  // weekly - computed: false, optional: true, required: false
  private _weekly = new AlertsSchedulerScheduleRecurringDynamicFrequencyWeeklyOutputReference(this, "weekly");
  public get weekly() {
    return this._weekly;
  }
  public putWeekly(value: AlertsSchedulerScheduleRecurringDynamicFrequencyWeekly) {
    this._weekly.internalValue = value;
  }
  public resetWeekly() {
    this._weekly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklyInput() {
    return this._weekly.internalValue;
  }
}
export interface AlertsSchedulerScheduleRecurringDynamicTimeFrameDuration {
  /**
  * The number of time units to wait before the alert is triggered. For example, if the frequency is set to `hours` and the value is set to `2`, the alert will be triggered after 2 hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/alerts_scheduler#for_over AlertsScheduler#for_over}
  */
  readonly forOver: number;
  /**
  * The time unit to wait before the alert is triggered. Can be `minutes`, `hours` or `days`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/alerts_scheduler#frequency AlertsScheduler#frequency}
  */
  readonly frequency: string;
}

export function alertsSchedulerScheduleRecurringDynamicTimeFrameDurationToTerraform(struct?: AlertsSchedulerScheduleRecurringDynamicTimeFrameDuration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    for_over: cdktf.numberToTerraform(struct!.forOver),
    frequency: cdktf.stringToTerraform(struct!.frequency),
  }
}


export function alertsSchedulerScheduleRecurringDynamicTimeFrameDurationToHclTerraform(struct?: AlertsSchedulerScheduleRecurringDynamicTimeFrameDuration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    for_over: {
      value: cdktf.numberToHclTerraform(struct!.forOver),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    frequency: {
      value: cdktf.stringToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertsSchedulerScheduleRecurringDynamicTimeFrameDurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertsSchedulerScheduleRecurringDynamicTimeFrameDuration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forOver !== undefined) {
      hasAnyValues = true;
      internalValueResult.forOver = this._forOver;
    }
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertsSchedulerScheduleRecurringDynamicTimeFrameDuration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._forOver = undefined;
      this._frequency = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._forOver = value.forOver;
      this._frequency = value.frequency;
    }
  }

  // for_over - computed: false, optional: false, required: true
  private _forOver?: number; 
  public get forOver() {
    return this.getNumberAttribute('for_over');
  }
  public set forOver(value: number) {
    this._forOver = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forOverInput() {
    return this._forOver;
  }

  // frequency - computed: false, optional: false, required: true
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }
}
export interface AlertsSchedulerScheduleRecurringDynamicTimeFrame {
  /**
  * The duration from the start time to wait.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/alerts_scheduler#duration AlertsScheduler#duration}
  */
  readonly duration?: AlertsSchedulerScheduleRecurringDynamicTimeFrameDuration;
  /**
  * The end time of the time frame. In a isodate format. For example, `2021-01-01T00:00:00.000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/alerts_scheduler#end_time AlertsScheduler#end_time}
  */
  readonly endTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/alerts_scheduler#start_time AlertsScheduler#start_time}
  */
  readonly startTime: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/alerts_scheduler#time_zone AlertsScheduler#time_zone}
  */
  readonly timeZone: string;
}

export function alertsSchedulerScheduleRecurringDynamicTimeFrameToTerraform(struct?: AlertsSchedulerScheduleRecurringDynamicTimeFrame | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: alertsSchedulerScheduleRecurringDynamicTimeFrameDurationToTerraform(struct!.duration),
    end_time: cdktf.stringToTerraform(struct!.endTime),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
  }
}


export function alertsSchedulerScheduleRecurringDynamicTimeFrameToHclTerraform(struct?: AlertsSchedulerScheduleRecurringDynamicTimeFrame | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: alertsSchedulerScheduleRecurringDynamicTimeFrameDurationToHclTerraform(struct!.duration),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertsSchedulerScheduleRecurringDynamicTimeFrameDuration",
    },
    end_time: {
      value: cdktf.stringToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_zone: {
      value: cdktf.stringToHclTerraform(struct!.timeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertsSchedulerScheduleRecurringDynamicTimeFrameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertsSchedulerScheduleRecurringDynamicTimeFrame | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration?.internalValue;
    }
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertsSchedulerScheduleRecurringDynamicTimeFrame | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duration.internalValue = undefined;
      this._endTime = undefined;
      this._startTime = undefined;
      this._timeZone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duration.internalValue = value.duration;
      this._endTime = value.endTime;
      this._startTime = value.startTime;
      this._timeZone = value.timeZone;
    }
  }

  // duration - computed: false, optional: true, required: false
  private _duration = new AlertsSchedulerScheduleRecurringDynamicTimeFrameDurationOutputReference(this, "duration");
  public get duration() {
    return this._duration;
  }
  public putDuration(value: AlertsSchedulerScheduleRecurringDynamicTimeFrameDuration) {
    this._duration.internalValue = value;
  }
  public resetDuration() {
    this._duration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration.internalValue;
  }

  // end_time - computed: false, optional: true, required: false
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // start_time - computed: false, optional: false, required: true
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // time_zone - computed: false, optional: false, required: true
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }
}
export interface AlertsSchedulerScheduleRecurringDynamic {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/alerts_scheduler#frequency AlertsScheduler#frequency}
  */
  readonly frequency: AlertsSchedulerScheduleRecurringDynamicFrequency;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/alerts_scheduler#repeat_every AlertsScheduler#repeat_every}
  */
  readonly repeatEvery: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/alerts_scheduler#termination_date AlertsScheduler#termination_date}
  */
  readonly terminationDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/alerts_scheduler#time_frame AlertsScheduler#time_frame}
  */
  readonly timeFrame: AlertsSchedulerScheduleRecurringDynamicTimeFrame;
}

export function alertsSchedulerScheduleRecurringDynamicToTerraform(struct?: AlertsSchedulerScheduleRecurringDynamic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    frequency: alertsSchedulerScheduleRecurringDynamicFrequencyToTerraform(struct!.frequency),
    repeat_every: cdktf.numberToTerraform(struct!.repeatEvery),
    termination_date: cdktf.stringToTerraform(struct!.terminationDate),
    time_frame: alertsSchedulerScheduleRecurringDynamicTimeFrameToTerraform(struct!.timeFrame),
  }
}


export function alertsSchedulerScheduleRecurringDynamicToHclTerraform(struct?: AlertsSchedulerScheduleRecurringDynamic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    frequency: {
      value: alertsSchedulerScheduleRecurringDynamicFrequencyToHclTerraform(struct!.frequency),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertsSchedulerScheduleRecurringDynamicFrequency",
    },
    repeat_every: {
      value: cdktf.numberToHclTerraform(struct!.repeatEvery),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    termination_date: {
      value: cdktf.stringToHclTerraform(struct!.terminationDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_frame: {
      value: alertsSchedulerScheduleRecurringDynamicTimeFrameToHclTerraform(struct!.timeFrame),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertsSchedulerScheduleRecurringDynamicTimeFrame",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertsSchedulerScheduleRecurringDynamicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertsSchedulerScheduleRecurringDynamic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._frequency?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency?.internalValue;
    }
    if (this._repeatEvery !== undefined) {
      hasAnyValues = true;
      internalValueResult.repeatEvery = this._repeatEvery;
    }
    if (this._terminationDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminationDate = this._terminationDate;
    }
    if (this._timeFrame?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeFrame = this._timeFrame?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertsSchedulerScheduleRecurringDynamic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._frequency.internalValue = undefined;
      this._repeatEvery = undefined;
      this._terminationDate = undefined;
      this._timeFrame.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._frequency.internalValue = value.frequency;
      this._repeatEvery = value.repeatEvery;
      this._terminationDate = value.terminationDate;
      this._timeFrame.internalValue = value.timeFrame;
    }
  }

  // frequency - computed: false, optional: false, required: true
  private _frequency = new AlertsSchedulerScheduleRecurringDynamicFrequencyOutputReference(this, "frequency");
  public get frequency() {
    return this._frequency;
  }
  public putFrequency(value: AlertsSchedulerScheduleRecurringDynamicFrequency) {
    this._frequency.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency.internalValue;
  }

  // repeat_every - computed: false, optional: false, required: true
  private _repeatEvery?: number; 
  public get repeatEvery() {
    return this.getNumberAttribute('repeat_every');
  }
  public set repeatEvery(value: number) {
    this._repeatEvery = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatEveryInput() {
    return this._repeatEvery;
  }

  // termination_date - computed: true, optional: true, required: false
  private _terminationDate?: string; 
  public get terminationDate() {
    return this.getStringAttribute('termination_date');
  }
  public set terminationDate(value: string) {
    this._terminationDate = value;
  }
  public resetTerminationDate() {
    this._terminationDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationDateInput() {
    return this._terminationDate;
  }

  // time_frame - computed: false, optional: false, required: true
  private _timeFrame = new AlertsSchedulerScheduleRecurringDynamicTimeFrameOutputReference(this, "time_frame");
  public get timeFrame() {
    return this._timeFrame;
  }
  public putTimeFrame(value: AlertsSchedulerScheduleRecurringDynamicTimeFrame) {
    this._timeFrame.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeFrameInput() {
    return this._timeFrame.internalValue;
  }
}
export interface AlertsSchedulerScheduleRecurring {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/alerts_scheduler#dynamic AlertsScheduler#dynamic}
  */
  readonly dynamic?: AlertsSchedulerScheduleRecurringDynamic;
}

export function alertsSchedulerScheduleRecurringToTerraform(struct?: AlertsSchedulerScheduleRecurring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dynamic: alertsSchedulerScheduleRecurringDynamicToTerraform(struct!.dynamic),
  }
}


export function alertsSchedulerScheduleRecurringToHclTerraform(struct?: AlertsSchedulerScheduleRecurring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dynamic: {
      value: alertsSchedulerScheduleRecurringDynamicToHclTerraform(struct!.dynamic),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertsSchedulerScheduleRecurringDynamic",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertsSchedulerScheduleRecurringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertsSchedulerScheduleRecurring | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dynamic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamic = this._dynamic?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertsSchedulerScheduleRecurring | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dynamic.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dynamic.internalValue = value.dynamic;
    }
  }

  // dynamic - computed: false, optional: true, required: false
  private _dynamic = new AlertsSchedulerScheduleRecurringDynamicOutputReference(this, "dynamic");
  public get dynamic() {
    return this._dynamic;
  }
  public putDynamic(value: AlertsSchedulerScheduleRecurringDynamic) {
    this._dynamic.internalValue = value;
  }
  public resetDynamic() {
    this._dynamic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicInput() {
    return this._dynamic.internalValue;
  }
}
export interface AlertsSchedulerSchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/alerts_scheduler#one_time AlertsScheduler#one_time}
  */
  readonly oneTime?: AlertsSchedulerScheduleOneTime;
  /**
  * The operation to perform. Can be `mute` or `active`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/alerts_scheduler#operation AlertsScheduler#operation}
  */
  readonly operation: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/alerts_scheduler#recurring AlertsScheduler#recurring}
  */
  readonly recurring?: AlertsSchedulerScheduleRecurring;
}

export function alertsSchedulerScheduleToTerraform(struct?: AlertsSchedulerSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    one_time: alertsSchedulerScheduleOneTimeToTerraform(struct!.oneTime),
    operation: cdktf.stringToTerraform(struct!.operation),
    recurring: alertsSchedulerScheduleRecurringToTerraform(struct!.recurring),
  }
}


export function alertsSchedulerScheduleToHclTerraform(struct?: AlertsSchedulerSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    one_time: {
      value: alertsSchedulerScheduleOneTimeToHclTerraform(struct!.oneTime),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertsSchedulerScheduleOneTime",
    },
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recurring: {
      value: alertsSchedulerScheduleRecurringToHclTerraform(struct!.recurring),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertsSchedulerScheduleRecurring",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertsSchedulerScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertsSchedulerSchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oneTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oneTime = this._oneTime?.internalValue;
    }
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._recurring?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurring = this._recurring?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertsSchedulerSchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._oneTime.internalValue = undefined;
      this._operation = undefined;
      this._recurring.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._oneTime.internalValue = value.oneTime;
      this._operation = value.operation;
      this._recurring.internalValue = value.recurring;
    }
  }

  // one_time - computed: false, optional: true, required: false
  private _oneTime = new AlertsSchedulerScheduleOneTimeOutputReference(this, "one_time");
  public get oneTime() {
    return this._oneTime;
  }
  public putOneTime(value: AlertsSchedulerScheduleOneTime) {
    this._oneTime.internalValue = value;
  }
  public resetOneTime() {
    this._oneTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oneTimeInput() {
    return this._oneTime.internalValue;
  }

  // operation - computed: false, optional: false, required: true
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // recurring - computed: false, optional: true, required: false
  private _recurring = new AlertsSchedulerScheduleRecurringOutputReference(this, "recurring");
  public get recurring() {
    return this._recurring;
  }
  public putRecurring(value: AlertsSchedulerScheduleRecurring) {
    this._recurring.internalValue = value;
  }
  public resetRecurring() {
    this._recurring.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurringInput() {
    return this._recurring.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/alerts_scheduler coralogix_alerts_scheduler}
*/
export class AlertsScheduler extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "coralogix_alerts_scheduler";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AlertsScheduler resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AlertsScheduler to import
  * @param importFromId The id of the existing AlertsScheduler that should be imported. Refer to the {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/alerts_scheduler#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AlertsScheduler to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "coralogix_alerts_scheduler", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/alerts_scheduler coralogix_alerts_scheduler} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlertsSchedulerConfig
  */
  public constructor(scope: Construct, id: string, config: AlertsSchedulerConfig) {
    super(scope, id, {
      terraformResourceType: 'coralogix_alerts_scheduler',
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
    this._enabled = config.enabled;
    this._filter.internalValue = config.filter;
    this._metaLabels.internalValue = config.metaLabels;
    this._name = config.name;
    this._schedule.internalValue = config.schedule;
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

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // filter - computed: false, optional: false, required: true
  private _filter = new AlertsSchedulerFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: AlertsSchedulerFilter) {
    this._filter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // meta_labels - computed: false, optional: true, required: false
  private _metaLabels = new AlertsSchedulerMetaLabelsList(this, "meta_labels", true);
  public get metaLabels() {
    return this._metaLabels;
  }
  public putMetaLabels(value: AlertsSchedulerMetaLabels[] | cdktf.IResolvable) {
    this._metaLabels.internalValue = value;
  }
  public resetMetaLabels() {
    this._metaLabels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaLabelsInput() {
    return this._metaLabels.internalValue;
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

  // schedule - computed: false, optional: false, required: true
  private _schedule = new AlertsSchedulerScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: AlertsSchedulerSchedule) {
    this._schedule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      filter: alertsSchedulerFilterToTerraform(this._filter.internalValue),
      meta_labels: cdktf.listMapper(alertsSchedulerMetaLabelsToTerraform, false)(this._metaLabels.internalValue),
      name: cdktf.stringToTerraform(this._name),
      schedule: alertsSchedulerScheduleToTerraform(this._schedule.internalValue),
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
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      filter: {
        value: alertsSchedulerFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AlertsSchedulerFilter",
      },
      meta_labels: {
        value: cdktf.listMapperHcl(alertsSchedulerMetaLabelsToHclTerraform, false)(this._metaLabels.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AlertsSchedulerMetaLabelsList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule: {
        value: alertsSchedulerScheduleToHclTerraform(this._schedule.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AlertsSchedulerSchedule",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
