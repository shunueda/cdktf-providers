// https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/notification_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NotificationRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The notification rule descriptive comment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/notification_rule#comment NotificationRule#comment}
  */
  readonly comment?: string;
  /**
  * Determines whether a notification rule is disabled or not. When this is set to False, the notification rule is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/notification_rule#disable NotificationRule#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Determines whether the notification rule for event deduplication is enabled. Note that to enable event deduplication, you must set at least one deduplication field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/notification_rule#enable_event_deduplication NotificationRule#enable_event_deduplication}
  */
  readonly enableEventDeduplication?: boolean | cdktf.IResolvable;
  /**
  * Determines whether the notification rule for the event deduplication syslog is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/notification_rule#enable_event_deduplication_log NotificationRule#enable_event_deduplication_log}
  */
  readonly enableEventDeduplicationLog?: boolean | cdktf.IResolvable;
  /**
  * The list of fields that must be used in the notification rule for event deduplication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/notification_rule#event_deduplication_fields NotificationRule#event_deduplication_fields}
  */
  readonly eventDeduplicationFields?: string[];
  /**
  * The lookback period for the notification rule for event deduplication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/notification_rule#event_deduplication_lookback_period NotificationRule#event_deduplication_lookback_period}
  */
  readonly eventDeduplicationLookbackPeriod?: number;
  /**
  * Event priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/notification_rule#event_priority NotificationRule#event_priority}
  */
  readonly eventPriority?: string;
  /**
  * The notification rule event type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/notification_rule#event_type NotificationRule#event_type}
  */
  readonly eventType: string;
  /**
  * The notification rule expression list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/notification_rule#expression_list NotificationRule#expression_list}
  */
  readonly expressionList?: NotificationRuleExpressionListStruct[] | cdktf.IResolvable;
  /**
  * The notification rule name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/notification_rule#name NotificationRule#name}
  */
  readonly name: string;
  /**
  * The notification rule action is applied if expression list evaluates to True.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/notification_rule#notification_action NotificationRule#notification_action}
  */
  readonly notificationAction: string;
  /**
  * The notification target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/notification_rule#notification_target NotificationRule#notification_target}
  */
  readonly notificationTarget: string;
  /**
  * The CISCO ISE publish settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/notification_rule#publish_settings NotificationRule#publish_settings}
  */
  readonly publishSettings?: NotificationRulePublishSettings;
  /**
  * Schedule setting that must be specified if event_type is SCHEDULE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/notification_rule#scheduled_event NotificationRule#scheduled_event}
  */
  readonly scheduledEvent?: NotificationRuleScheduledEvent;
  /**
  * The notification REST template instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/notification_rule#template_instance NotificationRule#template_instance}
  */
  readonly templateInstance: NotificationRuleTemplateInstance;
  /**
  * Use flag for: publish_settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/notification_rule#use_publish_settings NotificationRule#use_publish_settings}
  */
  readonly usePublishSettings?: boolean | cdktf.IResolvable;
}
export interface NotificationRuleExpressionListStruct {
  /**
  * Rule expression type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/notification_rule#op NotificationRule#op}
  */
  readonly op: string;
  /**
  * Rule expression first operand value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/notification_rule#op1 NotificationRule#op1}
  */
  readonly op1?: string;
  /**
  * Rule expression first operand type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/notification_rule#op1_type NotificationRule#op1_type}
  */
  readonly op1Type?: string;
  /**
  * Rule expression second operand.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/notification_rule#op2 NotificationRule#op2}
  */
  readonly op2?: string;
  /**
  * Rule expression second operand type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/notification_rule#op2_type NotificationRule#op2_type}
  */
  readonly op2Type?: string;
}

export function notificationRuleExpressionListStructToTerraform(struct?: NotificationRuleExpressionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    op: cdktf.stringToTerraform(struct!.op),
    op1: cdktf.stringToTerraform(struct!.op1),
    op1_type: cdktf.stringToTerraform(struct!.op1Type),
    op2: cdktf.stringToTerraform(struct!.op2),
    op2_type: cdktf.stringToTerraform(struct!.op2Type),
  }
}


export function notificationRuleExpressionListStructToHclTerraform(struct?: NotificationRuleExpressionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    op: {
      value: cdktf.stringToHclTerraform(struct!.op),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    op1: {
      value: cdktf.stringToHclTerraform(struct!.op1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    op1_type: {
      value: cdktf.stringToHclTerraform(struct!.op1Type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    op2: {
      value: cdktf.stringToHclTerraform(struct!.op2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    op2_type: {
      value: cdktf.stringToHclTerraform(struct!.op2Type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationRuleExpressionListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotificationRuleExpressionListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._op !== undefined) {
      hasAnyValues = true;
      internalValueResult.op = this._op;
    }
    if (this._op1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.op1 = this._op1;
    }
    if (this._op1Type !== undefined) {
      hasAnyValues = true;
      internalValueResult.op1Type = this._op1Type;
    }
    if (this._op2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.op2 = this._op2;
    }
    if (this._op2Type !== undefined) {
      hasAnyValues = true;
      internalValueResult.op2Type = this._op2Type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationRuleExpressionListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._op = undefined;
      this._op1 = undefined;
      this._op1Type = undefined;
      this._op2 = undefined;
      this._op2Type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._op = value.op;
      this._op1 = value.op1;
      this._op1Type = value.op1Type;
      this._op2 = value.op2;
      this._op2Type = value.op2Type;
    }
  }

  // op - computed: true, optional: false, required: true
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

  // op1 - computed: true, optional: true, required: false
  private _op1?: string; 
  public get op1() {
    return this.getStringAttribute('op1');
  }
  public set op1(value: string) {
    this._op1 = value;
  }
  public resetOp1() {
    this._op1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get op1Input() {
    return this._op1;
  }

  // op1_type - computed: true, optional: true, required: false
  private _op1Type?: string; 
  public get op1Type() {
    return this.getStringAttribute('op1_type');
  }
  public set op1Type(value: string) {
    this._op1Type = value;
  }
  public resetOp1Type() {
    this._op1Type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get op1TypeInput() {
    return this._op1Type;
  }

  // op2 - computed: true, optional: true, required: false
  private _op2?: string; 
  public get op2() {
    return this.getStringAttribute('op2');
  }
  public set op2(value: string) {
    this._op2 = value;
  }
  public resetOp2() {
    this._op2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get op2Input() {
    return this._op2;
  }

  // op2_type - computed: true, optional: true, required: false
  private _op2Type?: string; 
  public get op2Type() {
    return this.getStringAttribute('op2_type');
  }
  public set op2Type(value: string) {
    this._op2Type = value;
  }
  public resetOp2Type() {
    this._op2Type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get op2TypeInput() {
    return this._op2Type;
  }
}

export class NotificationRuleExpressionListStructList extends cdktf.ComplexList {
  public internalValue? : NotificationRuleExpressionListStruct[] | cdktf.IResolvable

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
  public get(index: number): NotificationRuleExpressionListStructOutputReference {
    return new NotificationRuleExpressionListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NotificationRulePublishSettings {
  /**
  * The list of NIOS extensible attributes enalbed for publishsing to Cisco ISE endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/notification_rule#enabled_attributes NotificationRule#enabled_attributes}
  */
  readonly enabledAttributes: string[];
}

export function notificationRulePublishSettingsToTerraform(struct?: NotificationRulePublishSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled_attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.enabledAttributes),
  }
}


export function notificationRulePublishSettingsToHclTerraform(struct?: NotificationRulePublishSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled_attributes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.enabledAttributes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationRulePublishSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NotificationRulePublishSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabledAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabledAttributes = this._enabledAttributes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationRulePublishSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabledAttributes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabledAttributes = value.enabledAttributes;
    }
  }

  // enabled_attributes - computed: true, optional: false, required: true
  private _enabledAttributes?: string[]; 
  public get enabledAttributes() {
    return this.getListAttribute('enabled_attributes');
  }
  public set enabledAttributes(value: string[]) {
    this._enabledAttributes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledAttributesInput() {
    return this._enabledAttributes;
  }
}
export interface NotificationRuleScheduledEvent {
  /**
  * The day of the month for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/notification_rule#day_of_month NotificationRule#day_of_month}
  */
  readonly dayOfMonth?: number;
  /**
  * If set to True, the scheduled task is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/notification_rule#disable NotificationRule#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * The number of frequency to wait before repeating the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/notification_rule#every NotificationRule#every}
  */
  readonly every?: number;
  /**
  * The frequency for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/notification_rule#frequency NotificationRule#frequency}
  */
  readonly frequency?: string;
  /**
  * The hour of day for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/notification_rule#hour_of_day NotificationRule#hour_of_day}
  */
  readonly hourOfDay?: number;
  /**
  * The minutes past the hour for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/notification_rule#minutes_past_hour NotificationRule#minutes_past_hour}
  */
  readonly minutesPastHour?: number;
  /**
  * The month for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/notification_rule#month NotificationRule#month}
  */
  readonly month?: number;
  /**
  * Indicates if the scheduled task will be repeated or run only once.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/notification_rule#repeat NotificationRule#repeat}
  */
  readonly repeat?: string;
  /**
  * The time zone for the schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/notification_rule#time_zone NotificationRule#time_zone}
  */
  readonly timeZone?: string;
  /**
  * Days of the week when scheduling is triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/notification_rule#weekdays NotificationRule#weekdays}
  */
  readonly weekdays?: string[];
  /**
  * The year for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/notification_rule#year NotificationRule#year}
  */
  readonly year?: number;
}

export function notificationRuleScheduledEventToTerraform(struct?: NotificationRuleScheduledEvent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_month: cdktf.numberToTerraform(struct!.dayOfMonth),
    disable: cdktf.booleanToTerraform(struct!.disable),
    every: cdktf.numberToTerraform(struct!.every),
    frequency: cdktf.stringToTerraform(struct!.frequency),
    hour_of_day: cdktf.numberToTerraform(struct!.hourOfDay),
    minutes_past_hour: cdktf.numberToTerraform(struct!.minutesPastHour),
    month: cdktf.numberToTerraform(struct!.month),
    repeat: cdktf.stringToTerraform(struct!.repeat),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
    weekdays: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.weekdays),
    year: cdktf.numberToTerraform(struct!.year),
  }
}


export function notificationRuleScheduledEventToHclTerraform(struct?: NotificationRuleScheduledEvent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day_of_month: {
      value: cdktf.numberToHclTerraform(struct!.dayOfMonth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    every: {
      value: cdktf.numberToHclTerraform(struct!.every),
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
    hour_of_day: {
      value: cdktf.numberToHclTerraform(struct!.hourOfDay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minutes_past_hour: {
      value: cdktf.numberToHclTerraform(struct!.minutesPastHour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    month: {
      value: cdktf.numberToHclTerraform(struct!.month),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    repeat: {
      value: cdktf.stringToHclTerraform(struct!.repeat),
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
    weekdays: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.weekdays),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    year: {
      value: cdktf.numberToHclTerraform(struct!.year),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationRuleScheduledEventOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NotificationRuleScheduledEvent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfMonth = this._dayOfMonth;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._every !== undefined) {
      hasAnyValues = true;
      internalValueResult.every = this._every;
    }
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    if (this._hourOfDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.hourOfDay = this._hourOfDay;
    }
    if (this._minutesPastHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutesPastHour = this._minutesPastHour;
    }
    if (this._month !== undefined) {
      hasAnyValues = true;
      internalValueResult.month = this._month;
    }
    if (this._repeat !== undefined) {
      hasAnyValues = true;
      internalValueResult.repeat = this._repeat;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    if (this._weekdays !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekdays = this._weekdays;
    }
    if (this._year !== undefined) {
      hasAnyValues = true;
      internalValueResult.year = this._year;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationRuleScheduledEvent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dayOfMonth = undefined;
      this._disable = undefined;
      this._every = undefined;
      this._frequency = undefined;
      this._hourOfDay = undefined;
      this._minutesPastHour = undefined;
      this._month = undefined;
      this._repeat = undefined;
      this._timeZone = undefined;
      this._weekdays = undefined;
      this._year = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dayOfMonth = value.dayOfMonth;
      this._disable = value.disable;
      this._every = value.every;
      this._frequency = value.frequency;
      this._hourOfDay = value.hourOfDay;
      this._minutesPastHour = value.minutesPastHour;
      this._month = value.month;
      this._repeat = value.repeat;
      this._timeZone = value.timeZone;
      this._weekdays = value.weekdays;
      this._year = value.year;
    }
  }

  // day_of_month - computed: true, optional: true, required: false
  private _dayOfMonth?: number; 
  public get dayOfMonth() {
    return this.getNumberAttribute('day_of_month');
  }
  public set dayOfMonth(value: number) {
    this._dayOfMonth = value;
  }
  public resetDayOfMonth() {
    this._dayOfMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfMonthInput() {
    return this._dayOfMonth;
  }

  // disable - computed: true, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // every - computed: true, optional: true, required: false
  private _every?: number; 
  public get every() {
    return this.getNumberAttribute('every');
  }
  public set every(value: number) {
    this._every = value;
  }
  public resetEvery() {
    this._every = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get everyInput() {
    return this._every;
  }

  // frequency - computed: true, optional: true, required: false
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }

  // hour_of_day - computed: true, optional: true, required: false
  private _hourOfDay?: number; 
  public get hourOfDay() {
    return this.getNumberAttribute('hour_of_day');
  }
  public set hourOfDay(value: number) {
    this._hourOfDay = value;
  }
  public resetHourOfDay() {
    this._hourOfDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourOfDayInput() {
    return this._hourOfDay;
  }

  // minutes_past_hour - computed: true, optional: true, required: false
  private _minutesPastHour?: number; 
  public get minutesPastHour() {
    return this.getNumberAttribute('minutes_past_hour');
  }
  public set minutesPastHour(value: number) {
    this._minutesPastHour = value;
  }
  public resetMinutesPastHour() {
    this._minutesPastHour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesPastHourInput() {
    return this._minutesPastHour;
  }

  // month - computed: true, optional: true, required: false
  private _month?: number; 
  public get month() {
    return this.getNumberAttribute('month');
  }
  public set month(value: number) {
    this._month = value;
  }
  public resetMonth() {
    this._month = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthInput() {
    return this._month;
  }

  // recurring_time - computed: true, optional: false, required: false
  public get recurringTime() {
    return this.getNumberAttribute('recurring_time');
  }

  // repeat - computed: true, optional: true, required: false
  private _repeat?: string; 
  public get repeat() {
    return this.getStringAttribute('repeat');
  }
  public set repeat(value: string) {
    this._repeat = value;
  }
  public resetRepeat() {
    this._repeat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatInput() {
    return this._repeat;
  }

  // time_zone - computed: true, optional: true, required: false
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }

  // weekdays - computed: true, optional: true, required: false
  private _weekdays?: string[]; 
  public get weekdays() {
    return this.getListAttribute('weekdays');
  }
  public set weekdays(value: string[]) {
    this._weekdays = value;
  }
  public resetWeekdays() {
    this._weekdays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekdaysInput() {
    return this._weekdays;
  }

  // year - computed: true, optional: true, required: false
  private _year?: number; 
  public get year() {
    return this.getNumberAttribute('year');
  }
  public set year(value: number) {
    this._year = value;
  }
  public resetYear() {
    this._year = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yearInput() {
    return this._year;
  }
}
export interface NotificationRuleTemplateInstanceParameters {
  /**
  * The name of the REST API template parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/notification_rule#name NotificationRule#name}
  */
  readonly name: string;
  /**
  * The syntax of the REST API template parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/notification_rule#syntax NotificationRule#syntax}
  */
  readonly syntax?: string;
  /**
  * The value of the REST API template parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/notification_rule#value NotificationRule#value}
  */
  readonly value?: string;
}

export function notificationRuleTemplateInstanceParametersToTerraform(struct?: NotificationRuleTemplateInstanceParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    syntax: cdktf.stringToTerraform(struct!.syntax),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function notificationRuleTemplateInstanceParametersToHclTerraform(struct?: NotificationRuleTemplateInstanceParameters | cdktf.IResolvable): any {
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
    syntax: {
      value: cdktf.stringToHclTerraform(struct!.syntax),
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

export class NotificationRuleTemplateInstanceParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotificationRuleTemplateInstanceParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._syntax !== undefined) {
      hasAnyValues = true;
      internalValueResult.syntax = this._syntax;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationRuleTemplateInstanceParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._syntax = undefined;
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
      this._syntax = value.syntax;
      this._value = value.value;
    }
  }

  // default_value - computed: true, optional: false, required: false
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }

  // name - computed: true, optional: false, required: true
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

  // syntax - computed: true, optional: true, required: false
  private _syntax?: string; 
  public get syntax() {
    return this.getStringAttribute('syntax');
  }
  public set syntax(value: string) {
    this._syntax = value;
  }
  public resetSyntax() {
    this._syntax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syntaxInput() {
    return this._syntax;
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

export class NotificationRuleTemplateInstanceParametersList extends cdktf.ComplexList {
  public internalValue? : NotificationRuleTemplateInstanceParameters[] | cdktf.IResolvable

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
  public get(index: number): NotificationRuleTemplateInstanceParametersOutputReference {
    return new NotificationRuleTemplateInstanceParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NotificationRuleTemplateInstance {
  /**
  * The notification REST template parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/notification_rule#parameters NotificationRule#parameters}
  */
  readonly parameters?: NotificationRuleTemplateInstanceParameters[] | cdktf.IResolvable;
  /**
  * The name of the REST API template parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/notification_rule#template NotificationRule#template}
  */
  readonly template: string;
}

export function notificationRuleTemplateInstanceToTerraform(struct?: NotificationRuleTemplateInstance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameters: cdktf.listMapper(notificationRuleTemplateInstanceParametersToTerraform, false)(struct!.parameters),
    template: cdktf.stringToTerraform(struct!.template),
  }
}


export function notificationRuleTemplateInstanceToHclTerraform(struct?: NotificationRuleTemplateInstance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parameters: {
      value: cdktf.listMapperHcl(notificationRuleTemplateInstanceParametersToHclTerraform, false)(struct!.parameters),
      isBlock: true,
      type: "list",
      storageClassType: "NotificationRuleTemplateInstanceParametersList",
    },
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationRuleTemplateInstanceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NotificationRuleTemplateInstance | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationRuleTemplateInstance | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._parameters.internalValue = undefined;
      this._template = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._parameters.internalValue = value.parameters;
      this._template = value.template;
    }
  }

  // parameters - computed: true, optional: true, required: false
  private _parameters = new NotificationRuleTemplateInstanceParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: NotificationRuleTemplateInstanceParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // template - computed: false, optional: false, required: true
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/notification_rule nios_notification_rule}
*/
export class NotificationRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nios_notification_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NotificationRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NotificationRule to import
  * @param importFromId The id of the existing NotificationRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/notification_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NotificationRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nios_notification_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/notification_rule nios_notification_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NotificationRuleConfig
  */
  public constructor(scope: Construct, id: string, config: NotificationRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'nios_notification_rule',
      terraformGeneratorMetadata: {
        providerName: 'nios',
        providerVersion: '1.1.0',
        providerVersionConstraint: '1.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._comment = config.comment;
    this._disable = config.disable;
    this._enableEventDeduplication = config.enableEventDeduplication;
    this._enableEventDeduplicationLog = config.enableEventDeduplicationLog;
    this._eventDeduplicationFields = config.eventDeduplicationFields;
    this._eventDeduplicationLookbackPeriod = config.eventDeduplicationLookbackPeriod;
    this._eventPriority = config.eventPriority;
    this._eventType = config.eventType;
    this._expressionList.internalValue = config.expressionList;
    this._name = config.name;
    this._notificationAction = config.notificationAction;
    this._notificationTarget = config.notificationTarget;
    this._publishSettings.internalValue = config.publishSettings;
    this._scheduledEvent.internalValue = config.scheduledEvent;
    this._templateInstance.internalValue = config.templateInstance;
    this._usePublishSettings = config.usePublishSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // all_members - computed: true, optional: false, required: false
  public get allMembers() {
    return this.getBooleanAttribute('all_members');
  }

  // comment - computed: true, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // disable - computed: true, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // enable_event_deduplication - computed: true, optional: true, required: false
  private _enableEventDeduplication?: boolean | cdktf.IResolvable; 
  public get enableEventDeduplication() {
    return this.getBooleanAttribute('enable_event_deduplication');
  }
  public set enableEventDeduplication(value: boolean | cdktf.IResolvable) {
    this._enableEventDeduplication = value;
  }
  public resetEnableEventDeduplication() {
    this._enableEventDeduplication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEventDeduplicationInput() {
    return this._enableEventDeduplication;
  }

  // enable_event_deduplication_log - computed: true, optional: true, required: false
  private _enableEventDeduplicationLog?: boolean | cdktf.IResolvable; 
  public get enableEventDeduplicationLog() {
    return this.getBooleanAttribute('enable_event_deduplication_log');
  }
  public set enableEventDeduplicationLog(value: boolean | cdktf.IResolvable) {
    this._enableEventDeduplicationLog = value;
  }
  public resetEnableEventDeduplicationLog() {
    this._enableEventDeduplicationLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEventDeduplicationLogInput() {
    return this._enableEventDeduplicationLog;
  }

  // event_deduplication_fields - computed: true, optional: true, required: false
  private _eventDeduplicationFields?: string[]; 
  public get eventDeduplicationFields() {
    return this.getListAttribute('event_deduplication_fields');
  }
  public set eventDeduplicationFields(value: string[]) {
    this._eventDeduplicationFields = value;
  }
  public resetEventDeduplicationFields() {
    this._eventDeduplicationFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventDeduplicationFieldsInput() {
    return this._eventDeduplicationFields;
  }

  // event_deduplication_lookback_period - computed: true, optional: true, required: false
  private _eventDeduplicationLookbackPeriod?: number; 
  public get eventDeduplicationLookbackPeriod() {
    return this.getNumberAttribute('event_deduplication_lookback_period');
  }
  public set eventDeduplicationLookbackPeriod(value: number) {
    this._eventDeduplicationLookbackPeriod = value;
  }
  public resetEventDeduplicationLookbackPeriod() {
    this._eventDeduplicationLookbackPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventDeduplicationLookbackPeriodInput() {
    return this._eventDeduplicationLookbackPeriod;
  }

  // event_priority - computed: true, optional: true, required: false
  private _eventPriority?: string; 
  public get eventPriority() {
    return this.getStringAttribute('event_priority');
  }
  public set eventPriority(value: string) {
    this._eventPriority = value;
  }
  public resetEventPriority() {
    this._eventPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventPriorityInput() {
    return this._eventPriority;
  }

  // event_type - computed: false, optional: false, required: true
  private _eventType?: string; 
  public get eventType() {
    return this.getStringAttribute('event_type');
  }
  public set eventType(value: string) {
    this._eventType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypeInput() {
    return this._eventType;
  }

  // expression_list - computed: true, optional: true, required: false
  private _expressionList = new NotificationRuleExpressionListStructList(this, "expression_list", false);
  public get expressionList() {
    return this._expressionList;
  }
  public putExpressionList(value: NotificationRuleExpressionListStruct[] | cdktf.IResolvable) {
    this._expressionList.internalValue = value;
  }
  public resetExpressionList() {
    this._expressionList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionListInput() {
    return this._expressionList.internalValue;
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

  // notification_action - computed: false, optional: false, required: true
  private _notificationAction?: string; 
  public get notificationAction() {
    return this.getStringAttribute('notification_action');
  }
  public set notificationAction(value: string) {
    this._notificationAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationActionInput() {
    return this._notificationAction;
  }

  // notification_target - computed: false, optional: false, required: true
  private _notificationTarget?: string; 
  public get notificationTarget() {
    return this.getStringAttribute('notification_target');
  }
  public set notificationTarget(value: string) {
    this._notificationTarget = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationTargetInput() {
    return this._notificationTarget;
  }

  // publish_settings - computed: true, optional: true, required: false
  private _publishSettings = new NotificationRulePublishSettingsOutputReference(this, "publish_settings");
  public get publishSettings() {
    return this._publishSettings;
  }
  public putPublishSettings(value: NotificationRulePublishSettings) {
    this._publishSettings.internalValue = value;
  }
  public resetPublishSettings() {
    this._publishSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishSettingsInput() {
    return this._publishSettings.internalValue;
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // scheduled_event - computed: true, optional: true, required: false
  private _scheduledEvent = new NotificationRuleScheduledEventOutputReference(this, "scheduled_event");
  public get scheduledEvent() {
    return this._scheduledEvent;
  }
  public putScheduledEvent(value: NotificationRuleScheduledEvent) {
    this._scheduledEvent.internalValue = value;
  }
  public resetScheduledEvent() {
    this._scheduledEvent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledEventInput() {
    return this._scheduledEvent.internalValue;
  }

  // selected_members - computed: true, optional: false, required: false
  public get selectedMembers() {
    return this.getListAttribute('selected_members');
  }

  // template_instance - computed: false, optional: false, required: true
  private _templateInstance = new NotificationRuleTemplateInstanceOutputReference(this, "template_instance");
  public get templateInstance() {
    return this._templateInstance;
  }
  public putTemplateInstance(value: NotificationRuleTemplateInstance) {
    this._templateInstance.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInstanceInput() {
    return this._templateInstance.internalValue;
  }

  // use_publish_settings - computed: true, optional: true, required: false
  private _usePublishSettings?: boolean | cdktf.IResolvable; 
  public get usePublishSettings() {
    return this.getBooleanAttribute('use_publish_settings');
  }
  public set usePublishSettings(value: boolean | cdktf.IResolvable) {
    this._usePublishSettings = value;
  }
  public resetUsePublishSettings() {
    this._usePublishSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePublishSettingsInput() {
    return this._usePublishSettings;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      disable: cdktf.booleanToTerraform(this._disable),
      enable_event_deduplication: cdktf.booleanToTerraform(this._enableEventDeduplication),
      enable_event_deduplication_log: cdktf.booleanToTerraform(this._enableEventDeduplicationLog),
      event_deduplication_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(this._eventDeduplicationFields),
      event_deduplication_lookback_period: cdktf.numberToTerraform(this._eventDeduplicationLookbackPeriod),
      event_priority: cdktf.stringToTerraform(this._eventPriority),
      event_type: cdktf.stringToTerraform(this._eventType),
      expression_list: cdktf.listMapper(notificationRuleExpressionListStructToTerraform, false)(this._expressionList.internalValue),
      name: cdktf.stringToTerraform(this._name),
      notification_action: cdktf.stringToTerraform(this._notificationAction),
      notification_target: cdktf.stringToTerraform(this._notificationTarget),
      publish_settings: notificationRulePublishSettingsToTerraform(this._publishSettings.internalValue),
      scheduled_event: notificationRuleScheduledEventToTerraform(this._scheduledEvent.internalValue),
      template_instance: notificationRuleTemplateInstanceToTerraform(this._templateInstance.internalValue),
      use_publish_settings: cdktf.booleanToTerraform(this._usePublishSettings),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable: {
        value: cdktf.booleanToHclTerraform(this._disable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_event_deduplication: {
        value: cdktf.booleanToHclTerraform(this._enableEventDeduplication),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_event_deduplication_log: {
        value: cdktf.booleanToHclTerraform(this._enableEventDeduplicationLog),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      event_deduplication_fields: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._eventDeduplicationFields),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      event_deduplication_lookback_period: {
        value: cdktf.numberToHclTerraform(this._eventDeduplicationLookbackPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      event_priority: {
        value: cdktf.stringToHclTerraform(this._eventPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_type: {
        value: cdktf.stringToHclTerraform(this._eventType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expression_list: {
        value: cdktf.listMapperHcl(notificationRuleExpressionListStructToHclTerraform, false)(this._expressionList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NotificationRuleExpressionListStructList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notification_action: {
        value: cdktf.stringToHclTerraform(this._notificationAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notification_target: {
        value: cdktf.stringToHclTerraform(this._notificationTarget),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      publish_settings: {
        value: notificationRulePublishSettingsToHclTerraform(this._publishSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NotificationRulePublishSettings",
      },
      scheduled_event: {
        value: notificationRuleScheduledEventToHclTerraform(this._scheduledEvent.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NotificationRuleScheduledEvent",
      },
      template_instance: {
        value: notificationRuleTemplateInstanceToHclTerraform(this._templateInstance.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NotificationRuleTemplateInstance",
      },
      use_publish_settings: {
        value: cdktf.booleanToHclTerraform(this._usePublishSettings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
