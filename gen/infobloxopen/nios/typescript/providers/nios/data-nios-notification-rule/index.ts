// https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/notification_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNiosNotificationRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter are used to return a more specific list of results. Filters can be used to match resources by specific attributes, e.g. name. If you specify multiple filters, the results returned will have only resources that match all the specified filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/notification_rule#filters DataNiosNotificationRule#filters}
  */
  readonly filters?: { [key: string]: string };
  /**
  * Maximum number of objects to be returned. Defaults to 1000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/notification_rule#max_results DataNiosNotificationRule#max_results}
  */
  readonly maxResults?: number;
  /**
  * Enable (1) or disable (0) paging for the data source query. When enabled, the system retrieves results in pages, allowing efficient handling of large result sets. Paging is enabled by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/notification_rule#paging DataNiosNotificationRule#paging}
  */
  readonly paging?: number;
}
export interface DataNiosNotificationRuleResultExpressionListStruct {
  /**
  * Rule expression type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/notification_rule#op DataNiosNotificationRule#op}
  */
  readonly op: string;
  /**
  * Rule expression first operand value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/notification_rule#op1 DataNiosNotificationRule#op1}
  */
  readonly op1?: string;
  /**
  * Rule expression first operand type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/notification_rule#op1_type DataNiosNotificationRule#op1_type}
  */
  readonly op1Type?: string;
  /**
  * Rule expression second operand.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/notification_rule#op2 DataNiosNotificationRule#op2}
  */
  readonly op2?: string;
  /**
  * Rule expression second operand type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/notification_rule#op2_type DataNiosNotificationRule#op2_type}
  */
  readonly op2Type?: string;
}

export function dataNiosNotificationRuleResultExpressionListStructToTerraform(struct?: DataNiosNotificationRuleResultExpressionListStruct | cdktf.IResolvable): any {
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


export function dataNiosNotificationRuleResultExpressionListStructToHclTerraform(struct?: DataNiosNotificationRuleResultExpressionListStruct | cdktf.IResolvable): any {
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

export class DataNiosNotificationRuleResultExpressionListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosNotificationRuleResultExpressionListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNiosNotificationRuleResultExpressionListStruct | cdktf.IResolvable | undefined) {
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

export class DataNiosNotificationRuleResultExpressionListStructList extends cdktf.ComplexList {
  public internalValue? : DataNiosNotificationRuleResultExpressionListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataNiosNotificationRuleResultExpressionListStructOutputReference {
    return new DataNiosNotificationRuleResultExpressionListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosNotificationRuleResultPublishSettings {
  /**
  * The list of NIOS extensible attributes enalbed for publishsing to Cisco ISE endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/notification_rule#enabled_attributes DataNiosNotificationRule#enabled_attributes}
  */
  readonly enabledAttributes: string[];
}

export function dataNiosNotificationRuleResultPublishSettingsToTerraform(struct?: DataNiosNotificationRuleResultPublishSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled_attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.enabledAttributes),
  }
}


export function dataNiosNotificationRuleResultPublishSettingsToHclTerraform(struct?: DataNiosNotificationRuleResultPublishSettings | cdktf.IResolvable): any {
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

export class DataNiosNotificationRuleResultPublishSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosNotificationRuleResultPublishSettings | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNiosNotificationRuleResultPublishSettings | cdktf.IResolvable | undefined) {
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
export interface DataNiosNotificationRuleResultScheduledEvent {
  /**
  * The day of the month for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/notification_rule#day_of_month DataNiosNotificationRule#day_of_month}
  */
  readonly dayOfMonth?: number;
  /**
  * If set to True, the scheduled task is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/notification_rule#disable DataNiosNotificationRule#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * The number of frequency to wait before repeating the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/notification_rule#every DataNiosNotificationRule#every}
  */
  readonly every?: number;
  /**
  * The frequency for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/notification_rule#frequency DataNiosNotificationRule#frequency}
  */
  readonly frequency?: string;
  /**
  * The hour of day for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/notification_rule#hour_of_day DataNiosNotificationRule#hour_of_day}
  */
  readonly hourOfDay?: number;
  /**
  * The minutes past the hour for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/notification_rule#minutes_past_hour DataNiosNotificationRule#minutes_past_hour}
  */
  readonly minutesPastHour?: number;
  /**
  * The month for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/notification_rule#month DataNiosNotificationRule#month}
  */
  readonly month?: number;
  /**
  * Indicates if the scheduled task will be repeated or run only once.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/notification_rule#repeat DataNiosNotificationRule#repeat}
  */
  readonly repeat?: string;
  /**
  * The time zone for the schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/notification_rule#time_zone DataNiosNotificationRule#time_zone}
  */
  readonly timeZone?: string;
  /**
  * Days of the week when scheduling is triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/notification_rule#weekdays DataNiosNotificationRule#weekdays}
  */
  readonly weekdays?: string[];
  /**
  * The year for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/notification_rule#year DataNiosNotificationRule#year}
  */
  readonly year?: number;
}

export function dataNiosNotificationRuleResultScheduledEventToTerraform(struct?: DataNiosNotificationRuleResultScheduledEvent | cdktf.IResolvable): any {
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


export function dataNiosNotificationRuleResultScheduledEventToHclTerraform(struct?: DataNiosNotificationRuleResultScheduledEvent | cdktf.IResolvable): any {
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

export class DataNiosNotificationRuleResultScheduledEventOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosNotificationRuleResultScheduledEvent | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNiosNotificationRuleResultScheduledEvent | cdktf.IResolvable | undefined) {
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
export interface DataNiosNotificationRuleResultTemplateInstanceParameters {
  /**
  * The name of the REST API template parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/notification_rule#name DataNiosNotificationRule#name}
  */
  readonly name: string;
  /**
  * The syntax of the REST API template parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/notification_rule#syntax DataNiosNotificationRule#syntax}
  */
  readonly syntax?: string;
  /**
  * The value of the REST API template parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/notification_rule#value DataNiosNotificationRule#value}
  */
  readonly value?: string;
}

export function dataNiosNotificationRuleResultTemplateInstanceParametersToTerraform(struct?: DataNiosNotificationRuleResultTemplateInstanceParameters | cdktf.IResolvable): any {
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


export function dataNiosNotificationRuleResultTemplateInstanceParametersToHclTerraform(struct?: DataNiosNotificationRuleResultTemplateInstanceParameters | cdktf.IResolvable): any {
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

export class DataNiosNotificationRuleResultTemplateInstanceParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosNotificationRuleResultTemplateInstanceParameters | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNiosNotificationRuleResultTemplateInstanceParameters | cdktf.IResolvable | undefined) {
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

export class DataNiosNotificationRuleResultTemplateInstanceParametersList extends cdktf.ComplexList {
  public internalValue? : DataNiosNotificationRuleResultTemplateInstanceParameters[] | cdktf.IResolvable

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
  public get(index: number): DataNiosNotificationRuleResultTemplateInstanceParametersOutputReference {
    return new DataNiosNotificationRuleResultTemplateInstanceParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosNotificationRuleResultTemplateInstance {
  /**
  * The notification REST template parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/notification_rule#parameters DataNiosNotificationRule#parameters}
  */
  readonly parameters?: DataNiosNotificationRuleResultTemplateInstanceParameters[] | cdktf.IResolvable;
  /**
  * The name of the REST API template parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/notification_rule#template DataNiosNotificationRule#template}
  */
  readonly template: string;
}

export function dataNiosNotificationRuleResultTemplateInstanceToTerraform(struct?: DataNiosNotificationRuleResultTemplateInstance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameters: cdktf.listMapper(dataNiosNotificationRuleResultTemplateInstanceParametersToTerraform, false)(struct!.parameters),
    template: cdktf.stringToTerraform(struct!.template),
  }
}


export function dataNiosNotificationRuleResultTemplateInstanceToHclTerraform(struct?: DataNiosNotificationRuleResultTemplateInstance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parameters: {
      value: cdktf.listMapperHcl(dataNiosNotificationRuleResultTemplateInstanceParametersToHclTerraform, false)(struct!.parameters),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosNotificationRuleResultTemplateInstanceParametersList",
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

export class DataNiosNotificationRuleResultTemplateInstanceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosNotificationRuleResultTemplateInstance | undefined {
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

  public set internalValue(value: DataNiosNotificationRuleResultTemplateInstance | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._parameters.internalValue = undefined;
      this._template = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._parameters.internalValue = value.parameters;
      this._template = value.template;
    }
  }

  // parameters - computed: true, optional: true, required: false
  private _parameters = new DataNiosNotificationRuleResultTemplateInstanceParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: DataNiosNotificationRuleResultTemplateInstanceParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // template - computed: true, optional: false, required: true
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
export interface DataNiosNotificationRuleResult {
  /**
  * The notification rule descriptive comment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/notification_rule#comment DataNiosNotificationRule#comment}
  */
  readonly comment?: string;
  /**
  * Determines whether a notification rule is disabled or not. When this is set to False, the notification rule is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/notification_rule#disable DataNiosNotificationRule#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Determines whether the notification rule for event deduplication is enabled. Note that to enable event deduplication, you must set at least one deduplication field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/notification_rule#enable_event_deduplication DataNiosNotificationRule#enable_event_deduplication}
  */
  readonly enableEventDeduplication?: boolean | cdktf.IResolvable;
  /**
  * Determines whether the notification rule for the event deduplication syslog is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/notification_rule#enable_event_deduplication_log DataNiosNotificationRule#enable_event_deduplication_log}
  */
  readonly enableEventDeduplicationLog?: boolean | cdktf.IResolvable;
  /**
  * The list of fields that must be used in the notification rule for event deduplication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/notification_rule#event_deduplication_fields DataNiosNotificationRule#event_deduplication_fields}
  */
  readonly eventDeduplicationFields?: string[];
  /**
  * The lookback period for the notification rule for event deduplication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/notification_rule#event_deduplication_lookback_period DataNiosNotificationRule#event_deduplication_lookback_period}
  */
  readonly eventDeduplicationLookbackPeriod?: number;
  /**
  * Event priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/notification_rule#event_priority DataNiosNotificationRule#event_priority}
  */
  readonly eventPriority?: string;
  /**
  * The notification rule event type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/notification_rule#event_type DataNiosNotificationRule#event_type}
  */
  readonly eventType: string;
  /**
  * The notification rule expression list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/notification_rule#expression_list DataNiosNotificationRule#expression_list}
  */
  readonly expressionList?: DataNiosNotificationRuleResultExpressionListStruct[] | cdktf.IResolvable;
  /**
  * The notification rule name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/notification_rule#name DataNiosNotificationRule#name}
  */
  readonly name: string;
  /**
  * The notification rule action is applied if expression list evaluates to True.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/notification_rule#notification_action DataNiosNotificationRule#notification_action}
  */
  readonly notificationAction: string;
  /**
  * The notification target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/notification_rule#notification_target DataNiosNotificationRule#notification_target}
  */
  readonly notificationTarget: string;
  /**
  * The CISCO ISE publish settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/notification_rule#publish_settings DataNiosNotificationRule#publish_settings}
  */
  readonly publishSettings?: DataNiosNotificationRuleResultPublishSettings;
  /**
  * Schedule setting that must be specified if event_type is SCHEDULE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/notification_rule#scheduled_event DataNiosNotificationRule#scheduled_event}
  */
  readonly scheduledEvent?: DataNiosNotificationRuleResultScheduledEvent;
  /**
  * The notification REST template instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/notification_rule#template_instance DataNiosNotificationRule#template_instance}
  */
  readonly templateInstance: DataNiosNotificationRuleResultTemplateInstance;
  /**
  * Use flag for: publish_settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/notification_rule#use_publish_settings DataNiosNotificationRule#use_publish_settings}
  */
  readonly usePublishSettings?: boolean | cdktf.IResolvable;
}

export function dataNiosNotificationRuleResultToTerraform(struct?: DataNiosNotificationRuleResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    disable: cdktf.booleanToTerraform(struct!.disable),
    enable_event_deduplication: cdktf.booleanToTerraform(struct!.enableEventDeduplication),
    enable_event_deduplication_log: cdktf.booleanToTerraform(struct!.enableEventDeduplicationLog),
    event_deduplication_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.eventDeduplicationFields),
    event_deduplication_lookback_period: cdktf.numberToTerraform(struct!.eventDeduplicationLookbackPeriod),
    event_priority: cdktf.stringToTerraform(struct!.eventPriority),
    event_type: cdktf.stringToTerraform(struct!.eventType),
    expression_list: cdktf.listMapper(dataNiosNotificationRuleResultExpressionListStructToTerraform, false)(struct!.expressionList),
    name: cdktf.stringToTerraform(struct!.name),
    notification_action: cdktf.stringToTerraform(struct!.notificationAction),
    notification_target: cdktf.stringToTerraform(struct!.notificationTarget),
    publish_settings: dataNiosNotificationRuleResultPublishSettingsToTerraform(struct!.publishSettings),
    scheduled_event: dataNiosNotificationRuleResultScheduledEventToTerraform(struct!.scheduledEvent),
    template_instance: dataNiosNotificationRuleResultTemplateInstanceToTerraform(struct!.templateInstance),
    use_publish_settings: cdktf.booleanToTerraform(struct!.usePublishSettings),
  }
}


export function dataNiosNotificationRuleResultToHclTerraform(struct?: DataNiosNotificationRuleResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_event_deduplication: {
      value: cdktf.booleanToHclTerraform(struct!.enableEventDeduplication),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_event_deduplication_log: {
      value: cdktf.booleanToHclTerraform(struct!.enableEventDeduplicationLog),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    event_deduplication_fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.eventDeduplicationFields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    event_deduplication_lookback_period: {
      value: cdktf.numberToHclTerraform(struct!.eventDeduplicationLookbackPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    event_priority: {
      value: cdktf.stringToHclTerraform(struct!.eventPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    event_type: {
      value: cdktf.stringToHclTerraform(struct!.eventType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expression_list: {
      value: cdktf.listMapperHcl(dataNiosNotificationRuleResultExpressionListStructToHclTerraform, false)(struct!.expressionList),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosNotificationRuleResultExpressionListStructList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notification_action: {
      value: cdktf.stringToHclTerraform(struct!.notificationAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notification_target: {
      value: cdktf.stringToHclTerraform(struct!.notificationTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    publish_settings: {
      value: dataNiosNotificationRuleResultPublishSettingsToHclTerraform(struct!.publishSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNiosNotificationRuleResultPublishSettings",
    },
    scheduled_event: {
      value: dataNiosNotificationRuleResultScheduledEventToHclTerraform(struct!.scheduledEvent),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNiosNotificationRuleResultScheduledEvent",
    },
    template_instance: {
      value: dataNiosNotificationRuleResultTemplateInstanceToHclTerraform(struct!.templateInstance),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNiosNotificationRuleResultTemplateInstance",
    },
    use_publish_settings: {
      value: cdktf.booleanToHclTerraform(struct!.usePublishSettings),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosNotificationRuleResultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosNotificationRuleResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._enableEventDeduplication !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableEventDeduplication = this._enableEventDeduplication;
    }
    if (this._enableEventDeduplicationLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableEventDeduplicationLog = this._enableEventDeduplicationLog;
    }
    if (this._eventDeduplicationFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventDeduplicationFields = this._eventDeduplicationFields;
    }
    if (this._eventDeduplicationLookbackPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventDeduplicationLookbackPeriod = this._eventDeduplicationLookbackPeriod;
    }
    if (this._eventPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventPriority = this._eventPriority;
    }
    if (this._eventType !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventType = this._eventType;
    }
    if (this._expressionList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressionList = this._expressionList?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._notificationAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationAction = this._notificationAction;
    }
    if (this._notificationTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationTarget = this._notificationTarget;
    }
    if (this._publishSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publishSettings = this._publishSettings?.internalValue;
    }
    if (this._scheduledEvent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduledEvent = this._scheduledEvent?.internalValue;
    }
    if (this._templateInstance?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateInstance = this._templateInstance?.internalValue;
    }
    if (this._usePublishSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.usePublishSettings = this._usePublishSettings;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosNotificationRuleResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comment = undefined;
      this._disable = undefined;
      this._enableEventDeduplication = undefined;
      this._enableEventDeduplicationLog = undefined;
      this._eventDeduplicationFields = undefined;
      this._eventDeduplicationLookbackPeriod = undefined;
      this._eventPriority = undefined;
      this._eventType = undefined;
      this._expressionList.internalValue = undefined;
      this._name = undefined;
      this._notificationAction = undefined;
      this._notificationTarget = undefined;
      this._publishSettings.internalValue = undefined;
      this._scheduledEvent.internalValue = undefined;
      this._templateInstance.internalValue = undefined;
      this._usePublishSettings = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comment = value.comment;
      this._disable = value.disable;
      this._enableEventDeduplication = value.enableEventDeduplication;
      this._enableEventDeduplicationLog = value.enableEventDeduplicationLog;
      this._eventDeduplicationFields = value.eventDeduplicationFields;
      this._eventDeduplicationLookbackPeriod = value.eventDeduplicationLookbackPeriod;
      this._eventPriority = value.eventPriority;
      this._eventType = value.eventType;
      this._expressionList.internalValue = value.expressionList;
      this._name = value.name;
      this._notificationAction = value.notificationAction;
      this._notificationTarget = value.notificationTarget;
      this._publishSettings.internalValue = value.publishSettings;
      this._scheduledEvent.internalValue = value.scheduledEvent;
      this._templateInstance.internalValue = value.templateInstance;
      this._usePublishSettings = value.usePublishSettings;
    }
  }

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

  // event_type - computed: true, optional: false, required: true
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
  private _expressionList = new DataNiosNotificationRuleResultExpressionListStructList(this, "expression_list", false);
  public get expressionList() {
    return this._expressionList;
  }
  public putExpressionList(value: DataNiosNotificationRuleResultExpressionListStruct[] | cdktf.IResolvable) {
    this._expressionList.internalValue = value;
  }
  public resetExpressionList() {
    this._expressionList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionListInput() {
    return this._expressionList.internalValue;
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

  // notification_action - computed: true, optional: false, required: true
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

  // notification_target - computed: true, optional: false, required: true
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
  private _publishSettings = new DataNiosNotificationRuleResultPublishSettingsOutputReference(this, "publish_settings");
  public get publishSettings() {
    return this._publishSettings;
  }
  public putPublishSettings(value: DataNiosNotificationRuleResultPublishSettings) {
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
  private _scheduledEvent = new DataNiosNotificationRuleResultScheduledEventOutputReference(this, "scheduled_event");
  public get scheduledEvent() {
    return this._scheduledEvent;
  }
  public putScheduledEvent(value: DataNiosNotificationRuleResultScheduledEvent) {
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

  // template_instance - computed: true, optional: false, required: true
  private _templateInstance = new DataNiosNotificationRuleResultTemplateInstanceOutputReference(this, "template_instance");
  public get templateInstance() {
    return this._templateInstance;
  }
  public putTemplateInstance(value: DataNiosNotificationRuleResultTemplateInstance) {
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
}

export class DataNiosNotificationRuleResultList extends cdktf.ComplexList {
  public internalValue? : DataNiosNotificationRuleResult[] | cdktf.IResolvable

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
  public get(index: number): DataNiosNotificationRuleResultOutputReference {
    return new DataNiosNotificationRuleResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/notification_rule nios_notification_rule}
*/
export class DataNiosNotificationRule extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nios_notification_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNiosNotificationRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNiosNotificationRule to import
  * @param importFromId The id of the existing DataNiosNotificationRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/notification_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNiosNotificationRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nios_notification_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/notification_rule nios_notification_rule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNiosNotificationRuleConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNiosNotificationRuleConfig = {}) {
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
    this._filters = config.filters;
    this._maxResults = config.maxResults;
    this._paging = config.paging;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filters - computed: false, optional: true, required: false
  private _filters?: { [key: string]: string }; 
  public get filters() {
    return this.getStringMapAttribute('filters');
  }
  public set filters(value: { [key: string]: string }) {
    this._filters = value;
  }
  public resetFilters() {
    this._filters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters;
  }

  // max_results - computed: false, optional: true, required: false
  private _maxResults?: number; 
  public get maxResults() {
    return this.getNumberAttribute('max_results');
  }
  public set maxResults(value: number) {
    this._maxResults = value;
  }
  public resetMaxResults() {
    this._maxResults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxResultsInput() {
    return this._maxResults;
  }

  // paging - computed: false, optional: true, required: false
  private _paging?: number; 
  public get paging() {
    return this.getNumberAttribute('paging');
  }
  public set paging(value: number) {
    this._paging = value;
  }
  public resetPaging() {
    this._paging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pagingInput() {
    return this._paging;
  }

  // result - computed: true, optional: false, required: false
  private _result = new DataNiosNotificationRuleResultList(this, "result", false);
  public get result() {
    return this._result;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filters: cdktf.hashMapper(cdktf.stringToTerraform)(this._filters),
      max_results: cdktf.numberToTerraform(this._maxResults),
      paging: cdktf.numberToTerraform(this._paging),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._filters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      max_results: {
        value: cdktf.numberToHclTerraform(this._maxResults),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      paging: {
        value: cdktf.numberToHclTerraform(this._paging),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
