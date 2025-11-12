// https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_maintenance_window
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KibanaMaintenanceWindowConfig extends cdktf.TerraformMetaArguments {
  /**
  * A set schedule over which the maintenance window applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_maintenance_window#custom_schedule KibanaMaintenanceWindow#custom_schedule}
  */
  readonly customSchedule: KibanaMaintenanceWindowCustomSchedule;
  /**
  * Whether the current maintenance window is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_maintenance_window#enabled KibanaMaintenanceWindow#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * An object that narrows the scope of what is affected by this maintenance window.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_maintenance_window#scope KibanaMaintenanceWindow#scope}
  */
  readonly scope?: KibanaMaintenanceWindowScope;
  /**
  * An identifier for the space. If space_id is not provided, the default space is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_maintenance_window#space_id KibanaMaintenanceWindow#space_id}
  */
  readonly spaceId?: string;
  /**
  * The name of the maintenance window.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_maintenance_window#title KibanaMaintenanceWindow#title}
  */
  readonly title: string;
}
export interface KibanaMaintenanceWindowCustomScheduleRecurring {
  /**
  * The end date and time of the schedule, provided in ISO 8601 format and set to the UTC timezone. For example: `2025-03-12T12:00:00.000Z`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_maintenance_window#end KibanaMaintenanceWindow#end}
  */
  readonly end?: string;
  /**
  * The duration of the schedule. It allows values in `<integer><unit>` format. `<unit>` is one of `d`, `h`, `m`, or `s` for days, hours, minutes, seconds. For example: `1d`, `5h`, `30m`, `5000s`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_maintenance_window#every KibanaMaintenanceWindow#every}
  */
  readonly every?: string;
  /**
  * The total number of recurrences of the schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_maintenance_window#occurrences KibanaMaintenanceWindow#occurrences}
  */
  readonly occurrences?: number;
  /**
  * The specific months for a recurring schedule. Valid values are 1-12.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_maintenance_window#on_month KibanaMaintenanceWindow#on_month}
  */
  readonly onMonth?: number[];
  /**
  * The specific days of the month for a recurring schedule. Valid values are 1-31.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_maintenance_window#on_month_day KibanaMaintenanceWindow#on_month_day}
  */
  readonly onMonthDay?: number[];
  /**
  * The specific days of the week (`[MO,TU,WE,TH,FR,SA,SU]`) or nth day of month (`[+1MO, -3FR, +2WE, -4SA, -5SU]`) for a recurring schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_maintenance_window#on_week_day KibanaMaintenanceWindow#on_week_day}
  */
  readonly onWeekDay?: string[];
}

export function kibanaMaintenanceWindowCustomScheduleRecurringToTerraform(struct?: KibanaMaintenanceWindowCustomScheduleRecurring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    every: cdktf.stringToTerraform(struct!.every),
    occurrences: cdktf.numberToTerraform(struct!.occurrences),
    on_month: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.onMonth),
    on_month_day: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.onMonthDay),
    on_week_day: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.onWeekDay),
  }
}


export function kibanaMaintenanceWindowCustomScheduleRecurringToHclTerraform(struct?: KibanaMaintenanceWindowCustomScheduleRecurring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    every: {
      value: cdktf.stringToHclTerraform(struct!.every),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    occurrences: {
      value: cdktf.numberToHclTerraform(struct!.occurrences),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    on_month: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.onMonth),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    on_month_day: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.onMonthDay),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    on_week_day: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.onWeekDay),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KibanaMaintenanceWindowCustomScheduleRecurringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KibanaMaintenanceWindowCustomScheduleRecurring | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._every !== undefined) {
      hasAnyValues = true;
      internalValueResult.every = this._every;
    }
    if (this._occurrences !== undefined) {
      hasAnyValues = true;
      internalValueResult.occurrences = this._occurrences;
    }
    if (this._onMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.onMonth = this._onMonth;
    }
    if (this._onMonthDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.onMonthDay = this._onMonthDay;
    }
    if (this._onWeekDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.onWeekDay = this._onWeekDay;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KibanaMaintenanceWindowCustomScheduleRecurring | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._every = undefined;
      this._occurrences = undefined;
      this._onMonth = undefined;
      this._onMonthDay = undefined;
      this._onWeekDay = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._every = value.every;
      this._occurrences = value.occurrences;
      this._onMonth = value.onMonth;
      this._onMonthDay = value.onMonthDay;
      this._onWeekDay = value.onWeekDay;
    }
  }

  // end - computed: false, optional: true, required: false
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // every - computed: false, optional: true, required: false
  private _every?: string; 
  public get every() {
    return this.getStringAttribute('every');
  }
  public set every(value: string) {
    this._every = value;
  }
  public resetEvery() {
    this._every = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get everyInput() {
    return this._every;
  }

  // occurrences - computed: false, optional: true, required: false
  private _occurrences?: number; 
  public get occurrences() {
    return this.getNumberAttribute('occurrences');
  }
  public set occurrences(value: number) {
    this._occurrences = value;
  }
  public resetOccurrences() {
    this._occurrences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get occurrencesInput() {
    return this._occurrences;
  }

  // on_month - computed: false, optional: true, required: false
  private _onMonth?: number[]; 
  public get onMonth() {
    return this.getNumberListAttribute('on_month');
  }
  public set onMonth(value: number[]) {
    this._onMonth = value;
  }
  public resetOnMonth() {
    this._onMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onMonthInput() {
    return this._onMonth;
  }

  // on_month_day - computed: false, optional: true, required: false
  private _onMonthDay?: number[]; 
  public get onMonthDay() {
    return this.getNumberListAttribute('on_month_day');
  }
  public set onMonthDay(value: number[]) {
    this._onMonthDay = value;
  }
  public resetOnMonthDay() {
    this._onMonthDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onMonthDayInput() {
    return this._onMonthDay;
  }

  // on_week_day - computed: false, optional: true, required: false
  private _onWeekDay?: string[]; 
  public get onWeekDay() {
    return this.getListAttribute('on_week_day');
  }
  public set onWeekDay(value: string[]) {
    this._onWeekDay = value;
  }
  public resetOnWeekDay() {
    this._onWeekDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onWeekDayInput() {
    return this._onWeekDay;
  }
}
export interface KibanaMaintenanceWindowCustomSchedule {
  /**
  * The duration of the schedule. It allows values in `<integer><unit>` format. `<unit>` is one of `d`, `h`, `m`, or `s` for days, hours, minutes, seconds. For example: `1d`, `5h`, `30m`, `5000s`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_maintenance_window#duration KibanaMaintenanceWindow#duration}
  */
  readonly duration: string;
  /**
  * A set schedule over which the maintenance window applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_maintenance_window#recurring KibanaMaintenanceWindow#recurring}
  */
  readonly recurring: KibanaMaintenanceWindowCustomScheduleRecurring;
  /**
  * The start date and time of the schedule, provided in ISO 8601 format and set to the UTC timezone. For example: `2025-03-12T12:00:00.000Z`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_maintenance_window#start KibanaMaintenanceWindow#start}
  */
  readonly start: string;
  /**
  * The timezone of the schedule. The default timezone is UTC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_maintenance_window#timezone KibanaMaintenanceWindow#timezone}
  */
  readonly timezone?: string;
}

export function kibanaMaintenanceWindowCustomScheduleToTerraform(struct?: KibanaMaintenanceWindowCustomSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
    recurring: kibanaMaintenanceWindowCustomScheduleRecurringToTerraform(struct!.recurring),
    start: cdktf.stringToTerraform(struct!.start),
    timezone: cdktf.stringToTerraform(struct!.timezone),
  }
}


export function kibanaMaintenanceWindowCustomScheduleToHclTerraform(struct?: KibanaMaintenanceWindowCustomSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recurring: {
      value: kibanaMaintenanceWindowCustomScheduleRecurringToHclTerraform(struct!.recurring),
      isBlock: true,
      type: "struct",
      storageClassType: "KibanaMaintenanceWindowCustomScheduleRecurring",
    },
    start: {
      value: cdktf.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KibanaMaintenanceWindowCustomScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KibanaMaintenanceWindowCustomSchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._recurring?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurring = this._recurring?.internalValue;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KibanaMaintenanceWindowCustomSchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duration = undefined;
      this._recurring.internalValue = undefined;
      this._start = undefined;
      this._timezone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duration = value.duration;
      this._recurring.internalValue = value.recurring;
      this._start = value.start;
      this._timezone = value.timezone;
    }
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // recurring - computed: false, optional: false, required: true
  private _recurring = new KibanaMaintenanceWindowCustomScheduleRecurringOutputReference(this, "recurring");
  public get recurring() {
    return this._recurring;
  }
  public putRecurring(value: KibanaMaintenanceWindowCustomScheduleRecurring) {
    this._recurring.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recurringInput() {
    return this._recurring.internalValue;
  }

  // start - computed: false, optional: false, required: true
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }

  // timezone - computed: true, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }
}
export interface KibanaMaintenanceWindowScopeAlerting {
  /**
  * A filter written in Kibana Query Language (KQL).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_maintenance_window#kql KibanaMaintenanceWindow#kql}
  */
  readonly kql: string;
}

export function kibanaMaintenanceWindowScopeAlertingToTerraform(struct?: KibanaMaintenanceWindowScopeAlerting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kql: cdktf.stringToTerraform(struct!.kql),
  }
}


export function kibanaMaintenanceWindowScopeAlertingToHclTerraform(struct?: KibanaMaintenanceWindowScopeAlerting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kql: {
      value: cdktf.stringToHclTerraform(struct!.kql),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KibanaMaintenanceWindowScopeAlertingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KibanaMaintenanceWindowScopeAlerting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kql !== undefined) {
      hasAnyValues = true;
      internalValueResult.kql = this._kql;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KibanaMaintenanceWindowScopeAlerting | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kql = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kql = value.kql;
    }
  }

  // kql - computed: false, optional: false, required: true
  private _kql?: string; 
  public get kql() {
    return this.getStringAttribute('kql');
  }
  public set kql(value: string) {
    this._kql = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kqlInput() {
    return this._kql;
  }
}
export interface KibanaMaintenanceWindowScope {
  /**
  * A set schedule over which the maintenance window applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_maintenance_window#alerting KibanaMaintenanceWindow#alerting}
  */
  readonly alerting: KibanaMaintenanceWindowScopeAlerting;
}

export function kibanaMaintenanceWindowScopeToTerraform(struct?: KibanaMaintenanceWindowScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alerting: kibanaMaintenanceWindowScopeAlertingToTerraform(struct!.alerting),
  }
}


export function kibanaMaintenanceWindowScopeToHclTerraform(struct?: KibanaMaintenanceWindowScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alerting: {
      value: kibanaMaintenanceWindowScopeAlertingToHclTerraform(struct!.alerting),
      isBlock: true,
      type: "struct",
      storageClassType: "KibanaMaintenanceWindowScopeAlerting",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KibanaMaintenanceWindowScopeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KibanaMaintenanceWindowScope | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alerting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alerting = this._alerting?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KibanaMaintenanceWindowScope | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alerting.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alerting.internalValue = value.alerting;
    }
  }

  // alerting - computed: false, optional: false, required: true
  private _alerting = new KibanaMaintenanceWindowScopeAlertingOutputReference(this, "alerting");
  public get alerting() {
    return this._alerting;
  }
  public putAlerting(value: KibanaMaintenanceWindowScopeAlerting) {
    this._alerting.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertingInput() {
    return this._alerting.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_maintenance_window elasticstack_kibana_maintenance_window}
*/
export class KibanaMaintenanceWindow extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "elasticstack_kibana_maintenance_window";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KibanaMaintenanceWindow resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KibanaMaintenanceWindow to import
  * @param importFromId The id of the existing KibanaMaintenanceWindow that should be imported. Refer to the {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_maintenance_window#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KibanaMaintenanceWindow to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "elasticstack_kibana_maintenance_window", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_maintenance_window elasticstack_kibana_maintenance_window} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KibanaMaintenanceWindowConfig
  */
  public constructor(scope: Construct, id: string, config: KibanaMaintenanceWindowConfig) {
    super(scope, id, {
      terraformResourceType: 'elasticstack_kibana_maintenance_window',
      terraformGeneratorMetadata: {
        providerName: 'elasticstack',
        providerVersion: '0.12.1',
        providerVersionConstraint: '0.12.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._customSchedule.internalValue = config.customSchedule;
    this._enabled = config.enabled;
    this._scope.internalValue = config.scope;
    this._spaceId = config.spaceId;
    this._title = config.title;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_schedule - computed: false, optional: false, required: true
  private _customSchedule = new KibanaMaintenanceWindowCustomScheduleOutputReference(this, "custom_schedule");
  public get customSchedule() {
    return this._customSchedule;
  }
  public putCustomSchedule(value: KibanaMaintenanceWindowCustomSchedule) {
    this._customSchedule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customScheduleInput() {
    return this._customSchedule.internalValue;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // scope - computed: false, optional: true, required: false
  private _scope = new KibanaMaintenanceWindowScopeOutputReference(this, "scope");
  public get scope() {
    return this._scope;
  }
  public putScope(value: KibanaMaintenanceWindowScope) {
    this._scope.internalValue = value;
  }
  public resetScope() {
    this._scope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope.internalValue;
  }

  // space_id - computed: true, optional: true, required: false
  private _spaceId?: string; 
  public get spaceId() {
    return this.getStringAttribute('space_id');
  }
  public set spaceId(value: string) {
    this._spaceId = value;
  }
  public resetSpaceId() {
    this._spaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceIdInput() {
    return this._spaceId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_schedule: kibanaMaintenanceWindowCustomScheduleToTerraform(this._customSchedule.internalValue),
      enabled: cdktf.booleanToTerraform(this._enabled),
      scope: kibanaMaintenanceWindowScopeToTerraform(this._scope.internalValue),
      space_id: cdktf.stringToTerraform(this._spaceId),
      title: cdktf.stringToTerraform(this._title),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_schedule: {
        value: kibanaMaintenanceWindowCustomScheduleToHclTerraform(this._customSchedule.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KibanaMaintenanceWindowCustomSchedule",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      scope: {
        value: kibanaMaintenanceWindowScopeToHclTerraform(this._scope.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KibanaMaintenanceWindowScope",
      },
      space_id: {
        value: cdktf.stringToHclTerraform(this._spaceId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
