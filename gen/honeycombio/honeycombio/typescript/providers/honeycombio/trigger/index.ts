// https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/trigger
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TriggerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Control when the Trigger will send a notification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/trigger#alert_type Trigger#alert_type}
  */
  readonly alertType?: string;
  /**
  * The dataset this Trigger is associated with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/trigger#dataset Trigger#dataset}
  */
  readonly dataset?: string;
  /**
  * A description of the Trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/trigger#description Trigger#description}
  */
  readonly description?: string;
  /**
  * The state of the Trigger. If true, the Trigger will not be run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/trigger#disabled Trigger#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * The interval (in seconds) in which to check the results of the query's calculation against the threshold. This value must be divisible by 60, between 60 and 86400 (between 1 minute and 1 day), and not be more than 4 times the query's duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/trigger#frequency Trigger#frequency}
  */
  readonly frequency?: number;
  /**
  * The name of the Trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/trigger#name Trigger#name}
  */
  readonly name: string;
  /**
  * The ID of the Query that the Trigger will execute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/trigger#query_id Trigger#query_id}
  */
  readonly queryId?: string;
  /**
  * The QuerySpec JSON for the query that the Trigger will execute. Providing the QuerySpec JSON directly allows for additional validation that the QuerySpec is valid as a Trigger Query. While the JSON can be constructed manually, it is easiest to use the `honeycombio_query_specification` data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/trigger#query_json Trigger#query_json}
  */
  readonly queryJson?: string;
  /**
  * A map of tags to assign to the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/trigger#tags Trigger#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * baseline_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/trigger#baseline_details Trigger#baseline_details}
  */
  readonly baselineDetails?: TriggerBaselineDetails[] | cdktf.IResolvable;
  /**
  * evaluation_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/trigger#evaluation_schedule Trigger#evaluation_schedule}
  */
  readonly evaluationSchedule?: TriggerEvaluationSchedule[] | cdktf.IResolvable;
  /**
  * recipient block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/trigger#recipient Trigger#recipient}
  */
  readonly recipient?: TriggerRecipient[] | cdktf.IResolvable;
  /**
  * threshold block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/trigger#threshold Trigger#threshold}
  */
  readonly threshold?: TriggerThreshold[] | cdktf.IResolvable;
}
export interface TriggerBaselineDetails {
  /**
  * What previous time period to evaluate against: 1 hour, 1 day, 1 week, or 4 weeks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/trigger#offset_minutes Trigger#offset_minutes}
  */
  readonly offsetMinutes: number;
  /**
  * Whether to use an absolute value or percentage delta.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/trigger#type Trigger#type}
  */
  readonly type: string;
}

export function triggerBaselineDetailsToTerraform(struct?: TriggerBaselineDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    offset_minutes: cdktf.numberToTerraform(struct!.offsetMinutes),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function triggerBaselineDetailsToHclTerraform(struct?: TriggerBaselineDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    offset_minutes: {
      value: cdktf.numberToHclTerraform(struct!.offsetMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class TriggerBaselineDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TriggerBaselineDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._offsetMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.offsetMinutes = this._offsetMinutes;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TriggerBaselineDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._offsetMinutes = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._offsetMinutes = value.offsetMinutes;
      this._type = value.type;
    }
  }

  // offset_minutes - computed: false, optional: false, required: true
  private _offsetMinutes?: number; 
  public get offsetMinutes() {
    return this.getNumberAttribute('offset_minutes');
  }
  public set offsetMinutes(value: number) {
    this._offsetMinutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetMinutesInput() {
    return this._offsetMinutes;
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
}

export class TriggerBaselineDetailsList extends cdktf.ComplexList {
  public internalValue? : TriggerBaselineDetails[] | cdktf.IResolvable

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
  public get(index: number): TriggerBaselineDetailsOutputReference {
    return new TriggerBaselineDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TriggerEvaluationSchedule {
  /**
  * The days of the week to evaluate the trigger on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/trigger#days_of_week Trigger#days_of_week}
  */
  readonly daysOfWeek: string[];
  /**
  * UTC time to stop evaluating the trigger in HH:mm format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/trigger#end_time Trigger#end_time}
  */
  readonly endTime: string;
  /**
  * UTC time to start evaluating the trigger in HH:mm format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/trigger#start_time Trigger#start_time}
  */
  readonly startTime: string;
}

export function triggerEvaluationScheduleToTerraform(struct?: TriggerEvaluationSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days_of_week: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.daysOfWeek),
    end_time: cdktf.stringToTerraform(struct!.endTime),
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}


export function triggerEvaluationScheduleToHclTerraform(struct?: TriggerEvaluationSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days_of_week: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.daysOfWeek),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TriggerEvaluationScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TriggerEvaluationSchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daysOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysOfWeek = this._daysOfWeek;
    }
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TriggerEvaluationSchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._daysOfWeek = undefined;
      this._endTime = undefined;
      this._startTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._daysOfWeek = value.daysOfWeek;
      this._endTime = value.endTime;
      this._startTime = value.startTime;
    }
  }

  // days_of_week - computed: false, optional: false, required: true
  private _daysOfWeek?: string[]; 
  public get daysOfWeek() {
    return this.getListAttribute('days_of_week');
  }
  public set daysOfWeek(value: string[]) {
    this._daysOfWeek = value;
  }
  // Temporarily expose input value. Use with caution.
  public get daysOfWeekInput() {
    return this._daysOfWeek;
  }

  // end_time - computed: false, optional: false, required: true
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
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
}

export class TriggerEvaluationScheduleList extends cdktf.ComplexList {
  public internalValue? : TriggerEvaluationSchedule[] | cdktf.IResolvable

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
  public get(index: number): TriggerEvaluationScheduleOutputReference {
    return new TriggerEvaluationScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TriggerRecipientNotificationDetailsVariable {
  /**
  * The name of the variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/trigger#name Trigger#name}
  */
  readonly name: string;
  /**
  * The value of the variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/trigger#value Trigger#value}
  */
  readonly value?: string;
}

export function triggerRecipientNotificationDetailsVariableToTerraform(struct?: TriggerRecipientNotificationDetailsVariable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function triggerRecipientNotificationDetailsVariableToHclTerraform(struct?: TriggerRecipientNotificationDetailsVariable | cdktf.IResolvable): any {
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

export class TriggerRecipientNotificationDetailsVariableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TriggerRecipientNotificationDetailsVariable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TriggerRecipientNotificationDetailsVariable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: true, optional: true, required: false
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

export class TriggerRecipientNotificationDetailsVariableList extends cdktf.ComplexList {
  public internalValue? : TriggerRecipientNotificationDetailsVariable[] | cdktf.IResolvable

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
  public get(index: number): TriggerRecipientNotificationDetailsVariableOutputReference {
    return new TriggerRecipientNotificationDetailsVariableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TriggerRecipientNotificationDetails {
  /**
  * The severity to set with the PagerDuty notification. If no severity is provided, 'critical' is assumed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/trigger#pagerduty_severity Trigger#pagerduty_severity}
  */
  readonly pagerdutySeverity?: string;
  /**
  * variable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/trigger#variable Trigger#variable}
  */
  readonly variable?: TriggerRecipientNotificationDetailsVariable[] | cdktf.IResolvable;
}

export function triggerRecipientNotificationDetailsToTerraform(struct?: TriggerRecipientNotificationDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pagerduty_severity: cdktf.stringToTerraform(struct!.pagerdutySeverity),
    variable: cdktf.listMapper(triggerRecipientNotificationDetailsVariableToTerraform, true)(struct!.variable),
  }
}


export function triggerRecipientNotificationDetailsToHclTerraform(struct?: TriggerRecipientNotificationDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pagerduty_severity: {
      value: cdktf.stringToHclTerraform(struct!.pagerdutySeverity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variable: {
      value: cdktf.listMapperHcl(triggerRecipientNotificationDetailsVariableToHclTerraform, true)(struct!.variable),
      isBlock: true,
      type: "set",
      storageClassType: "TriggerRecipientNotificationDetailsVariableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TriggerRecipientNotificationDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TriggerRecipientNotificationDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pagerdutySeverity !== undefined) {
      hasAnyValues = true;
      internalValueResult.pagerdutySeverity = this._pagerdutySeverity;
    }
    if (this._variable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variable = this._variable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TriggerRecipientNotificationDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pagerdutySeverity = undefined;
      this._variable.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pagerdutySeverity = value.pagerdutySeverity;
      this._variable.internalValue = value.variable;
    }
  }

  // pagerduty_severity - computed: true, optional: true, required: false
  private _pagerdutySeverity?: string; 
  public get pagerdutySeverity() {
    return this.getStringAttribute('pagerduty_severity');
  }
  public set pagerdutySeverity(value: string) {
    this._pagerdutySeverity = value;
  }
  public resetPagerdutySeverity() {
    this._pagerdutySeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pagerdutySeverityInput() {
    return this._pagerdutySeverity;
  }

  // variable - computed: false, optional: true, required: false
  private _variable = new TriggerRecipientNotificationDetailsVariableList(this, "variable", true);
  public get variable() {
    return this._variable;
  }
  public putVariable(value: TriggerRecipientNotificationDetailsVariable[] | cdktf.IResolvable) {
    this._variable.internalValue = value;
  }
  public resetVariable() {
    this._variable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variableInput() {
    return this._variable.internalValue;
  }
}

export class TriggerRecipientNotificationDetailsList extends cdktf.ComplexList {
  public internalValue? : TriggerRecipientNotificationDetails[] | cdktf.IResolvable

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
  public get(index: number): TriggerRecipientNotificationDetailsOutputReference {
    return new TriggerRecipientNotificationDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TriggerRecipient {
  /**
  * The ID of an existing recipient.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/trigger#id Trigger#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Target of the notification, this has another meaning depending on the type of recipient.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/trigger#target Trigger#target}
  */
  readonly target?: string;
  /**
  * The type of the notification recipient.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/trigger#type Trigger#type}
  */
  readonly type?: string;
  /**
  * notification_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/trigger#notification_details Trigger#notification_details}
  */
  readonly notificationDetails?: TriggerRecipientNotificationDetails[] | cdktf.IResolvable;
}

export function triggerRecipientToTerraform(struct?: TriggerRecipient | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    target: cdktf.stringToTerraform(struct!.target),
    type: cdktf.stringToTerraform(struct!.type),
    notification_details: cdktf.listMapper(triggerRecipientNotificationDetailsToTerraform, true)(struct!.notificationDetails),
  }
}


export function triggerRecipientToHclTerraform(struct?: TriggerRecipient | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
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
    notification_details: {
      value: cdktf.listMapperHcl(triggerRecipientNotificationDetailsToHclTerraform, true)(struct!.notificationDetails),
      isBlock: true,
      type: "list",
      storageClassType: "TriggerRecipientNotificationDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TriggerRecipientOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TriggerRecipient | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._notificationDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationDetails = this._notificationDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TriggerRecipient | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._target = undefined;
      this._type = undefined;
      this._notificationDetails.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._target = value.target;
      this._type = value.type;
      this._notificationDetails.internalValue = value.notificationDetails;
    }
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

  // target - computed: true, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // notification_details - computed: false, optional: true, required: false
  private _notificationDetails = new TriggerRecipientNotificationDetailsList(this, "notification_details", false);
  public get notificationDetails() {
    return this._notificationDetails;
  }
  public putNotificationDetails(value: TriggerRecipientNotificationDetails[] | cdktf.IResolvable) {
    this._notificationDetails.internalValue = value;
  }
  public resetNotificationDetails() {
    this._notificationDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationDetailsInput() {
    return this._notificationDetails.internalValue;
  }
}

export class TriggerRecipientList extends cdktf.ComplexList {
  public internalValue? : TriggerRecipient[] | cdktf.IResolvable

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
  public get(index: number): TriggerRecipientOutputReference {
    return new TriggerRecipientOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TriggerThreshold {
  /**
  * The number of times the threshold is met before an alert is sent. Defaults to 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/trigger#exceeded_limit Trigger#exceeded_limit}
  */
  readonly exceededLimit?: number;
  /**
  * The operator to apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/trigger#op Trigger#op}
  */
  readonly op: string;
  /**
  * The value to be used with the operator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/trigger#value Trigger#value}
  */
  readonly value: number;
}

export function triggerThresholdToTerraform(struct?: TriggerThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exceeded_limit: cdktf.numberToTerraform(struct!.exceededLimit),
    op: cdktf.stringToTerraform(struct!.op),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function triggerThresholdToHclTerraform(struct?: TriggerThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exceeded_limit: {
      value: cdktf.numberToHclTerraform(struct!.exceededLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    op: {
      value: cdktf.stringToHclTerraform(struct!.op),
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

export class TriggerThresholdOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TriggerThreshold | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exceededLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceededLimit = this._exceededLimit;
    }
    if (this._op !== undefined) {
      hasAnyValues = true;
      internalValueResult.op = this._op;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TriggerThreshold | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exceededLimit = undefined;
      this._op = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exceededLimit = value.exceededLimit;
      this._op = value.op;
      this._value = value.value;
    }
  }

  // exceeded_limit - computed: true, optional: true, required: false
  private _exceededLimit?: number; 
  public get exceededLimit() {
    return this.getNumberAttribute('exceeded_limit');
  }
  public set exceededLimit(value: number) {
    this._exceededLimit = value;
  }
  public resetExceededLimit() {
    this._exceededLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceededLimitInput() {
    return this._exceededLimit;
  }

  // op - computed: false, optional: false, required: true
  private _op?: string; 
  public get op() {
    return this.getStringAttribute('op');
  }
  public set op(value: string) {
    this._op = value;
  }
  // Temporarily expose input value. Use with caution.
  public get opInput() {
    return this._op;
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

export class TriggerThresholdList extends cdktf.ComplexList {
  public internalValue? : TriggerThreshold[] | cdktf.IResolvable

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
  public get(index: number): TriggerThresholdOutputReference {
    return new TriggerThresholdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/trigger honeycombio_trigger}
*/
export class Trigger extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "honeycombio_trigger";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Trigger resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Trigger to import
  * @param importFromId The id of the existing Trigger that should be imported. Refer to the {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/trigger#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Trigger to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "honeycombio_trigger", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/trigger honeycombio_trigger} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TriggerConfig
  */
  public constructor(scope: Construct, id: string, config: TriggerConfig) {
    super(scope, id, {
      terraformResourceType: 'honeycombio_trigger',
      terraformGeneratorMetadata: {
        providerName: 'honeycombio',
        providerVersion: '0.42.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alertType = config.alertType;
    this._dataset = config.dataset;
    this._description = config.description;
    this._disabled = config.disabled;
    this._frequency = config.frequency;
    this._name = config.name;
    this._queryId = config.queryId;
    this._queryJson = config.queryJson;
    this._tags = config.tags;
    this._baselineDetails.internalValue = config.baselineDetails;
    this._evaluationSchedule.internalValue = config.evaluationSchedule;
    this._recipient.internalValue = config.recipient;
    this._threshold.internalValue = config.threshold;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alert_type - computed: true, optional: true, required: false
  private _alertType?: string; 
  public get alertType() {
    return this.getStringAttribute('alert_type');
  }
  public set alertType(value: string) {
    this._alertType = value;
  }
  public resetAlertType() {
    this._alertType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertTypeInput() {
    return this._alertType;
  }

  // dataset - computed: true, optional: true, required: false
  private _dataset?: string; 
  public get dataset() {
    return this.getStringAttribute('dataset');
  }
  public set dataset(value: string) {
    this._dataset = value;
  }
  public resetDataset() {
    this._dataset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetInput() {
    return this._dataset;
  }

  // description - computed: true, optional: true, required: false
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

  // disabled - computed: true, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // frequency - computed: true, optional: true, required: false
  private _frequency?: number; 
  public get frequency() {
    return this.getNumberAttribute('frequency');
  }
  public set frequency(value: number) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
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

  // query_id - computed: false, optional: true, required: false
  private _queryId?: string; 
  public get queryId() {
    return this.getStringAttribute('query_id');
  }
  public set queryId(value: string) {
    this._queryId = value;
  }
  public resetQueryId() {
    this._queryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryIdInput() {
    return this._queryId;
  }

  // query_json - computed: false, optional: true, required: false
  private _queryJson?: string; 
  public get queryJson() {
    return this.getStringAttribute('query_json');
  }
  public set queryJson(value: string) {
    this._queryJson = value;
  }
  public resetQueryJson() {
    this._queryJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryJsonInput() {
    return this._queryJson;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // baseline_details - computed: false, optional: true, required: false
  private _baselineDetails = new TriggerBaselineDetailsList(this, "baseline_details", false);
  public get baselineDetails() {
    return this._baselineDetails;
  }
  public putBaselineDetails(value: TriggerBaselineDetails[] | cdktf.IResolvable) {
    this._baselineDetails.internalValue = value;
  }
  public resetBaselineDetails() {
    this._baselineDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baselineDetailsInput() {
    return this._baselineDetails.internalValue;
  }

  // evaluation_schedule - computed: false, optional: true, required: false
  private _evaluationSchedule = new TriggerEvaluationScheduleList(this, "evaluation_schedule", false);
  public get evaluationSchedule() {
    return this._evaluationSchedule;
  }
  public putEvaluationSchedule(value: TriggerEvaluationSchedule[] | cdktf.IResolvable) {
    this._evaluationSchedule.internalValue = value;
  }
  public resetEvaluationSchedule() {
    this._evaluationSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationScheduleInput() {
    return this._evaluationSchedule.internalValue;
  }

  // recipient - computed: false, optional: true, required: false
  private _recipient = new TriggerRecipientList(this, "recipient", true);
  public get recipient() {
    return this._recipient;
  }
  public putRecipient(value: TriggerRecipient[] | cdktf.IResolvable) {
    this._recipient.internalValue = value;
  }
  public resetRecipient() {
    this._recipient.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recipientInput() {
    return this._recipient.internalValue;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold = new TriggerThresholdList(this, "threshold", false);
  public get threshold() {
    return this._threshold;
  }
  public putThreshold(value: TriggerThreshold[] | cdktf.IResolvable) {
    this._threshold.internalValue = value;
  }
  public resetThreshold() {
    this._threshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alert_type: cdktf.stringToTerraform(this._alertType),
      dataset: cdktf.stringToTerraform(this._dataset),
      description: cdktf.stringToTerraform(this._description),
      disabled: cdktf.booleanToTerraform(this._disabled),
      frequency: cdktf.numberToTerraform(this._frequency),
      name: cdktf.stringToTerraform(this._name),
      query_id: cdktf.stringToTerraform(this._queryId),
      query_json: cdktf.stringToTerraform(this._queryJson),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      baseline_details: cdktf.listMapper(triggerBaselineDetailsToTerraform, true)(this._baselineDetails.internalValue),
      evaluation_schedule: cdktf.listMapper(triggerEvaluationScheduleToTerraform, true)(this._evaluationSchedule.internalValue),
      recipient: cdktf.listMapper(triggerRecipientToTerraform, true)(this._recipient.internalValue),
      threshold: cdktf.listMapper(triggerThresholdToTerraform, true)(this._threshold.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alert_type: {
        value: cdktf.stringToHclTerraform(this._alertType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dataset: {
        value: cdktf.stringToHclTerraform(this._dataset),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      frequency: {
        value: cdktf.numberToHclTerraform(this._frequency),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_id: {
        value: cdktf.stringToHclTerraform(this._queryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_json: {
        value: cdktf.stringToHclTerraform(this._queryJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      baseline_details: {
        value: cdktf.listMapperHcl(triggerBaselineDetailsToHclTerraform, true)(this._baselineDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TriggerBaselineDetailsList",
      },
      evaluation_schedule: {
        value: cdktf.listMapperHcl(triggerEvaluationScheduleToHclTerraform, true)(this._evaluationSchedule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TriggerEvaluationScheduleList",
      },
      recipient: {
        value: cdktf.listMapperHcl(triggerRecipientToHclTerraform, true)(this._recipient.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TriggerRecipientList",
      },
      threshold: {
        value: cdktf.listMapperHcl(triggerThresholdToHclTerraform, true)(this._threshold.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TriggerThresholdList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
