// https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/resources/project_scheduled_trigger
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectScheduledTriggerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The channel ID to use when creating the release. Will use the default channel if left blank.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/resources/project_scheduled_trigger#channel_id ProjectScheduledTrigger#channel_id}
  */
  readonly channelId?: string;
  /**
  * A description of the trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/resources/project_scheduled_trigger#description ProjectScheduledTrigger#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/resources/project_scheduled_trigger#id ProjectScheduledTrigger#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Indicates whether the trigger is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/resources/project_scheduled_trigger#is_disabled ProjectScheduledTrigger#is_disabled}
  */
  readonly isDisabled?: boolean | cdktf.IResolvable;
  /**
  * The name of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/resources/project_scheduled_trigger#name ProjectScheduledTrigger#name}
  */
  readonly name: string;
  /**
  * The ID of the project to attach the trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/resources/project_scheduled_trigger#project_id ProjectScheduledTrigger#project_id}
  */
  readonly projectId: string;
  /**
  * The space ID where this trigger's project exists.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/resources/project_scheduled_trigger#space_id ProjectScheduledTrigger#space_id}
  */
  readonly spaceId: string;
  /**
  * The IDs of the tenants to deploy to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/resources/project_scheduled_trigger#tenant_ids ProjectScheduledTrigger#tenant_ids}
  */
  readonly tenantIds?: string[];
  /**
  * The timezone for the trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/resources/project_scheduled_trigger#timezone ProjectScheduledTrigger#timezone}
  */
  readonly timezone?: string;
  /**
  * continuous_daily_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/resources/project_scheduled_trigger#continuous_daily_schedule ProjectScheduledTrigger#continuous_daily_schedule}
  */
  readonly continuousDailySchedule?: ProjectScheduledTriggerContinuousDailySchedule;
  /**
  * cron_expression_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/resources/project_scheduled_trigger#cron_expression_schedule ProjectScheduledTrigger#cron_expression_schedule}
  */
  readonly cronExpressionSchedule?: ProjectScheduledTriggerCronExpressionSchedule;
  /**
  * days_per_month_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/resources/project_scheduled_trigger#days_per_month_schedule ProjectScheduledTrigger#days_per_month_schedule}
  */
  readonly daysPerMonthSchedule?: ProjectScheduledTriggerDaysPerMonthSchedule;
  /**
  * deploy_latest_release_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/resources/project_scheduled_trigger#deploy_latest_release_action ProjectScheduledTrigger#deploy_latest_release_action}
  */
  readonly deployLatestReleaseAction?: ProjectScheduledTriggerDeployLatestReleaseAction;
  /**
  * deploy_new_release_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/resources/project_scheduled_trigger#deploy_new_release_action ProjectScheduledTrigger#deploy_new_release_action}
  */
  readonly deployNewReleaseAction?: ProjectScheduledTriggerDeployNewReleaseAction;
  /**
  * once_daily_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/resources/project_scheduled_trigger#once_daily_schedule ProjectScheduledTrigger#once_daily_schedule}
  */
  readonly onceDailySchedule?: ProjectScheduledTriggerOnceDailySchedule;
  /**
  * run_runbook_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/resources/project_scheduled_trigger#run_runbook_action ProjectScheduledTrigger#run_runbook_action}
  */
  readonly runRunbookAction?: ProjectScheduledTriggerRunRunbookAction;
}
export interface ProjectScheduledTriggerContinuousDailySchedule {
  /**
  * The days of the week to run the trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/resources/project_scheduled_trigger#days_of_week ProjectScheduledTrigger#days_of_week}
  */
  readonly daysOfWeek: string[];
  /**
  * How often to run the trigger in hours. Only used when the interval is set to 'OnceHourly'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/resources/project_scheduled_trigger#hour_interval ProjectScheduledTrigger#hour_interval}
  */
  readonly hourInterval?: number;
  /**
  * The interval in minutes to run the trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/resources/project_scheduled_trigger#interval ProjectScheduledTrigger#interval}
  */
  readonly interval: string;
  /**
  * How often to run the trigger in minutes. Only used when the interval is set to 'OnceEveryMinute'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/resources/project_scheduled_trigger#minute_interval ProjectScheduledTrigger#minute_interval}
  */
  readonly minuteInterval?: number;
  /**
  * The time of day to start the trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/resources/project_scheduled_trigger#run_after ProjectScheduledTrigger#run_after}
  */
  readonly runAfter: string;
  /**
  * The time of day to end the trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/resources/project_scheduled_trigger#run_until ProjectScheduledTrigger#run_until}
  */
  readonly runUntil: string;
}

export function projectScheduledTriggerContinuousDailyScheduleToTerraform(struct?: ProjectScheduledTriggerContinuousDailyScheduleOutputReference | ProjectScheduledTriggerContinuousDailySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days_of_week: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.daysOfWeek),
    hour_interval: cdktf.numberToTerraform(struct!.hourInterval),
    interval: cdktf.stringToTerraform(struct!.interval),
    minute_interval: cdktf.numberToTerraform(struct!.minuteInterval),
    run_after: cdktf.stringToTerraform(struct!.runAfter),
    run_until: cdktf.stringToTerraform(struct!.runUntil),
  }
}


export function projectScheduledTriggerContinuousDailyScheduleToHclTerraform(struct?: ProjectScheduledTriggerContinuousDailyScheduleOutputReference | ProjectScheduledTriggerContinuousDailySchedule): any {
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
    hour_interval: {
      value: cdktf.numberToHclTerraform(struct!.hourInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    minute_interval: {
      value: cdktf.numberToHclTerraform(struct!.minuteInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    run_after: {
      value: cdktf.stringToHclTerraform(struct!.runAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    run_until: {
      value: cdktf.stringToHclTerraform(struct!.runUntil),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectScheduledTriggerContinuousDailyScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProjectScheduledTriggerContinuousDailySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daysOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysOfWeek = this._daysOfWeek;
    }
    if (this._hourInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.hourInterval = this._hourInterval;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._minuteInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.minuteInterval = this._minuteInterval;
    }
    if (this._runAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAfter = this._runAfter;
    }
    if (this._runUntil !== undefined) {
      hasAnyValues = true;
      internalValueResult.runUntil = this._runUntil;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectScheduledTriggerContinuousDailySchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._daysOfWeek = undefined;
      this._hourInterval = undefined;
      this._interval = undefined;
      this._minuteInterval = undefined;
      this._runAfter = undefined;
      this._runUntil = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._daysOfWeek = value.daysOfWeek;
      this._hourInterval = value.hourInterval;
      this._interval = value.interval;
      this._minuteInterval = value.minuteInterval;
      this._runAfter = value.runAfter;
      this._runUntil = value.runUntil;
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

  // hour_interval - computed: false, optional: true, required: false
  private _hourInterval?: number; 
  public get hourInterval() {
    return this.getNumberAttribute('hour_interval');
  }
  public set hourInterval(value: number) {
    this._hourInterval = value;
  }
  public resetHourInterval() {
    this._hourInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourIntervalInput() {
    return this._hourInterval;
  }

  // interval - computed: false, optional: false, required: true
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // minute_interval - computed: false, optional: true, required: false
  private _minuteInterval?: number; 
  public get minuteInterval() {
    return this.getNumberAttribute('minute_interval');
  }
  public set minuteInterval(value: number) {
    this._minuteInterval = value;
  }
  public resetMinuteInterval() {
    this._minuteInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minuteIntervalInput() {
    return this._minuteInterval;
  }

  // run_after - computed: false, optional: false, required: true
  private _runAfter?: string; 
  public get runAfter() {
    return this.getStringAttribute('run_after');
  }
  public set runAfter(value: string) {
    this._runAfter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runAfterInput() {
    return this._runAfter;
  }

  // run_until - computed: false, optional: false, required: true
  private _runUntil?: string; 
  public get runUntil() {
    return this.getStringAttribute('run_until');
  }
  public set runUntil(value: string) {
    this._runUntil = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runUntilInput() {
    return this._runUntil;
  }
}
export interface ProjectScheduledTriggerCronExpressionSchedule {
  /**
  * The cron expression for the schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/resources/project_scheduled_trigger#cron_expression ProjectScheduledTrigger#cron_expression}
  */
  readonly cronExpression: string;
}

export function projectScheduledTriggerCronExpressionScheduleToTerraform(struct?: ProjectScheduledTriggerCronExpressionScheduleOutputReference | ProjectScheduledTriggerCronExpressionSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cron_expression: cdktf.stringToTerraform(struct!.cronExpression),
  }
}


export function projectScheduledTriggerCronExpressionScheduleToHclTerraform(struct?: ProjectScheduledTriggerCronExpressionScheduleOutputReference | ProjectScheduledTriggerCronExpressionSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cron_expression: {
      value: cdktf.stringToHclTerraform(struct!.cronExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectScheduledTriggerCronExpressionScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProjectScheduledTriggerCronExpressionSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cronExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.cronExpression = this._cronExpression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectScheduledTriggerCronExpressionSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cronExpression = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cronExpression = value.cronExpression;
    }
  }

  // cron_expression - computed: false, optional: false, required: true
  private _cronExpression?: string; 
  public get cronExpression() {
    return this.getStringAttribute('cron_expression');
  }
  public set cronExpression(value: string) {
    this._cronExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cronExpressionInput() {
    return this._cronExpression;
  }
}
export interface ProjectScheduledTriggerDaysPerMonthSchedule {
  /**
  * Which date of the month to run the trigger. String number between 1 - 31 Incl. or L for the last day of the month.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/resources/project_scheduled_trigger#date_of_month ProjectScheduledTrigger#date_of_month}
  */
  readonly dateOfMonth?: string;
  /**
  * Which ordinal day of the week to run the trigger on. String number between 1 - 4 Incl. or L for the last occurrence of day_of_week for the month.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/resources/project_scheduled_trigger#day_number_of_month ProjectScheduledTrigger#day_number_of_month}
  */
  readonly dayNumberOfMonth?: string;
  /**
  * Which day of the week to run the trigger on. Required when monthly_schedule_type is set to 'DayOfMonth'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/resources/project_scheduled_trigger#day_of_week ProjectScheduledTrigger#day_of_week}
  */
  readonly dayOfWeek?: string;
  /**
  * The type of monthly schedule to run the trigger
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/resources/project_scheduled_trigger#monthly_schedule_type ProjectScheduledTrigger#monthly_schedule_type}
  */
  readonly monthlyScheduleType: string;
  /**
  * The time of day to start the trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/resources/project_scheduled_trigger#start_time ProjectScheduledTrigger#start_time}
  */
  readonly startTime: string;
}

export function projectScheduledTriggerDaysPerMonthScheduleToTerraform(struct?: ProjectScheduledTriggerDaysPerMonthScheduleOutputReference | ProjectScheduledTriggerDaysPerMonthSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    date_of_month: cdktf.stringToTerraform(struct!.dateOfMonth),
    day_number_of_month: cdktf.stringToTerraform(struct!.dayNumberOfMonth),
    day_of_week: cdktf.stringToTerraform(struct!.dayOfWeek),
    monthly_schedule_type: cdktf.stringToTerraform(struct!.monthlyScheduleType),
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}


export function projectScheduledTriggerDaysPerMonthScheduleToHclTerraform(struct?: ProjectScheduledTriggerDaysPerMonthScheduleOutputReference | ProjectScheduledTriggerDaysPerMonthSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    date_of_month: {
      value: cdktf.stringToHclTerraform(struct!.dateOfMonth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    day_number_of_month: {
      value: cdktf.stringToHclTerraform(struct!.dayNumberOfMonth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    day_of_week: {
      value: cdktf.stringToHclTerraform(struct!.dayOfWeek),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    monthly_schedule_type: {
      value: cdktf.stringToHclTerraform(struct!.monthlyScheduleType),
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

export class ProjectScheduledTriggerDaysPerMonthScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProjectScheduledTriggerDaysPerMonthSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dateOfMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateOfMonth = this._dateOfMonth;
    }
    if (this._dayNumberOfMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayNumberOfMonth = this._dayNumberOfMonth;
    }
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    if (this._monthlyScheduleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.monthlyScheduleType = this._monthlyScheduleType;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectScheduledTriggerDaysPerMonthSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dateOfMonth = undefined;
      this._dayNumberOfMonth = undefined;
      this._dayOfWeek = undefined;
      this._monthlyScheduleType = undefined;
      this._startTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dateOfMonth = value.dateOfMonth;
      this._dayNumberOfMonth = value.dayNumberOfMonth;
      this._dayOfWeek = value.dayOfWeek;
      this._monthlyScheduleType = value.monthlyScheduleType;
      this._startTime = value.startTime;
    }
  }

  // date_of_month - computed: false, optional: true, required: false
  private _dateOfMonth?: string; 
  public get dateOfMonth() {
    return this.getStringAttribute('date_of_month');
  }
  public set dateOfMonth(value: string) {
    this._dateOfMonth = value;
  }
  public resetDateOfMonth() {
    this._dateOfMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateOfMonthInput() {
    return this._dateOfMonth;
  }

  // day_number_of_month - computed: false, optional: true, required: false
  private _dayNumberOfMonth?: string; 
  public get dayNumberOfMonth() {
    return this.getStringAttribute('day_number_of_month');
  }
  public set dayNumberOfMonth(value: string) {
    this._dayNumberOfMonth = value;
  }
  public resetDayNumberOfMonth() {
    this._dayNumberOfMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayNumberOfMonthInput() {
    return this._dayNumberOfMonth;
  }

  // day_of_week - computed: false, optional: true, required: false
  private _dayOfWeek?: string; 
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }
  public set dayOfWeek(value: string) {
    this._dayOfWeek = value;
  }
  public resetDayOfWeek() {
    this._dayOfWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }

  // monthly_schedule_type - computed: false, optional: false, required: true
  private _monthlyScheduleType?: string; 
  public get monthlyScheduleType() {
    return this.getStringAttribute('monthly_schedule_type');
  }
  public set monthlyScheduleType(value: string) {
    this._monthlyScheduleType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monthlyScheduleTypeInput() {
    return this._monthlyScheduleType;
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
export interface ProjectScheduledTriggerDeployLatestReleaseAction {
  /**
  * The environment ID to deploy the selected release to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/resources/project_scheduled_trigger#destination_environment_id ProjectScheduledTrigger#destination_environment_id}
  */
  readonly destinationEnvironmentId: string;
  /**
  * Enable to re-deploy to the deployment targets even if they are already up-to-date with the current deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/resources/project_scheduled_trigger#should_redeploy ProjectScheduledTrigger#should_redeploy}
  */
  readonly shouldRedeploy?: boolean | cdktf.IResolvable;
  /**
  * The environment ID to use when selecting the release to deploy from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/resources/project_scheduled_trigger#source_environment_id ProjectScheduledTrigger#source_environment_id}
  */
  readonly sourceEnvironmentId: string;
}

export function projectScheduledTriggerDeployLatestReleaseActionToTerraform(struct?: ProjectScheduledTriggerDeployLatestReleaseActionOutputReference | ProjectScheduledTriggerDeployLatestReleaseAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_environment_id: cdktf.stringToTerraform(struct!.destinationEnvironmentId),
    should_redeploy: cdktf.booleanToTerraform(struct!.shouldRedeploy),
    source_environment_id: cdktf.stringToTerraform(struct!.sourceEnvironmentId),
  }
}


export function projectScheduledTriggerDeployLatestReleaseActionToHclTerraform(struct?: ProjectScheduledTriggerDeployLatestReleaseActionOutputReference | ProjectScheduledTriggerDeployLatestReleaseAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_environment_id: {
      value: cdktf.stringToHclTerraform(struct!.destinationEnvironmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    should_redeploy: {
      value: cdktf.booleanToHclTerraform(struct!.shouldRedeploy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source_environment_id: {
      value: cdktf.stringToHclTerraform(struct!.sourceEnvironmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectScheduledTriggerDeployLatestReleaseActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProjectScheduledTriggerDeployLatestReleaseAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationEnvironmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationEnvironmentId = this._destinationEnvironmentId;
    }
    if (this._shouldRedeploy !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldRedeploy = this._shouldRedeploy;
    }
    if (this._sourceEnvironmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceEnvironmentId = this._sourceEnvironmentId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectScheduledTriggerDeployLatestReleaseAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destinationEnvironmentId = undefined;
      this._shouldRedeploy = undefined;
      this._sourceEnvironmentId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destinationEnvironmentId = value.destinationEnvironmentId;
      this._shouldRedeploy = value.shouldRedeploy;
      this._sourceEnvironmentId = value.sourceEnvironmentId;
    }
  }

  // destination_environment_id - computed: false, optional: false, required: true
  private _destinationEnvironmentId?: string; 
  public get destinationEnvironmentId() {
    return this.getStringAttribute('destination_environment_id');
  }
  public set destinationEnvironmentId(value: string) {
    this._destinationEnvironmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationEnvironmentIdInput() {
    return this._destinationEnvironmentId;
  }

  // should_redeploy - computed: false, optional: true, required: false
  private _shouldRedeploy?: boolean | cdktf.IResolvable; 
  public get shouldRedeploy() {
    return this.getBooleanAttribute('should_redeploy');
  }
  public set shouldRedeploy(value: boolean | cdktf.IResolvable) {
    this._shouldRedeploy = value;
  }
  public resetShouldRedeploy() {
    this._shouldRedeploy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldRedeployInput() {
    return this._shouldRedeploy;
  }

  // source_environment_id - computed: false, optional: false, required: true
  private _sourceEnvironmentId?: string; 
  public get sourceEnvironmentId() {
    return this.getStringAttribute('source_environment_id');
  }
  public set sourceEnvironmentId(value: string) {
    this._sourceEnvironmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceEnvironmentIdInput() {
    return this._sourceEnvironmentId;
  }
}
export interface ProjectScheduledTriggerDeployNewReleaseAction {
  /**
  * The environment ID to deploy the selected release to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/resources/project_scheduled_trigger#destination_environment_id ProjectScheduledTrigger#destination_environment_id}
  */
  readonly destinationEnvironmentId: string;
  /**
  * The git reference to use when creating the release. Can be a branch, tag, or commit hash.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/resources/project_scheduled_trigger#git_reference ProjectScheduledTrigger#git_reference}
  */
  readonly gitReference?: string;
}

export function projectScheduledTriggerDeployNewReleaseActionToTerraform(struct?: ProjectScheduledTriggerDeployNewReleaseActionOutputReference | ProjectScheduledTriggerDeployNewReleaseAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_environment_id: cdktf.stringToTerraform(struct!.destinationEnvironmentId),
    git_reference: cdktf.stringToTerraform(struct!.gitReference),
  }
}


export function projectScheduledTriggerDeployNewReleaseActionToHclTerraform(struct?: ProjectScheduledTriggerDeployNewReleaseActionOutputReference | ProjectScheduledTriggerDeployNewReleaseAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_environment_id: {
      value: cdktf.stringToHclTerraform(struct!.destinationEnvironmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    git_reference: {
      value: cdktf.stringToHclTerraform(struct!.gitReference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectScheduledTriggerDeployNewReleaseActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProjectScheduledTriggerDeployNewReleaseAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationEnvironmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationEnvironmentId = this._destinationEnvironmentId;
    }
    if (this._gitReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitReference = this._gitReference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectScheduledTriggerDeployNewReleaseAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destinationEnvironmentId = undefined;
      this._gitReference = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destinationEnvironmentId = value.destinationEnvironmentId;
      this._gitReference = value.gitReference;
    }
  }

  // destination_environment_id - computed: false, optional: false, required: true
  private _destinationEnvironmentId?: string; 
  public get destinationEnvironmentId() {
    return this.getStringAttribute('destination_environment_id');
  }
  public set destinationEnvironmentId(value: string) {
    this._destinationEnvironmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationEnvironmentIdInput() {
    return this._destinationEnvironmentId;
  }

  // git_reference - computed: false, optional: true, required: false
  private _gitReference?: string; 
  public get gitReference() {
    return this.getStringAttribute('git_reference');
  }
  public set gitReference(value: string) {
    this._gitReference = value;
  }
  public resetGitReference() {
    this._gitReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitReferenceInput() {
    return this._gitReference;
  }
}
export interface ProjectScheduledTriggerOnceDailySchedule {
  /**
  * The days of the week to run the trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/resources/project_scheduled_trigger#days_of_week ProjectScheduledTrigger#days_of_week}
  */
  readonly daysOfWeek: string[];
  /**
  * The time of day to start the trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/resources/project_scheduled_trigger#start_time ProjectScheduledTrigger#start_time}
  */
  readonly startTime: string;
}

export function projectScheduledTriggerOnceDailyScheduleToTerraform(struct?: ProjectScheduledTriggerOnceDailyScheduleOutputReference | ProjectScheduledTriggerOnceDailySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days_of_week: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.daysOfWeek),
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}


export function projectScheduledTriggerOnceDailyScheduleToHclTerraform(struct?: ProjectScheduledTriggerOnceDailyScheduleOutputReference | ProjectScheduledTriggerOnceDailySchedule): any {
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

export class ProjectScheduledTriggerOnceDailyScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProjectScheduledTriggerOnceDailySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daysOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysOfWeek = this._daysOfWeek;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectScheduledTriggerOnceDailySchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._daysOfWeek = undefined;
      this._startTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._daysOfWeek = value.daysOfWeek;
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
export interface ProjectScheduledTriggerRunRunbookAction {
  /**
  * The ID of the runbook to run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/resources/project_scheduled_trigger#runbook_id ProjectScheduledTrigger#runbook_id}
  */
  readonly runbookId: string;
  /**
  * The IDs of the environments to run the runbook in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/resources/project_scheduled_trigger#target_environment_ids ProjectScheduledTrigger#target_environment_ids}
  */
  readonly targetEnvironmentIds: string[];
}

export function projectScheduledTriggerRunRunbookActionToTerraform(struct?: ProjectScheduledTriggerRunRunbookActionOutputReference | ProjectScheduledTriggerRunRunbookAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    runbook_id: cdktf.stringToTerraform(struct!.runbookId),
    target_environment_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.targetEnvironmentIds),
  }
}


export function projectScheduledTriggerRunRunbookActionToHclTerraform(struct?: ProjectScheduledTriggerRunRunbookActionOutputReference | ProjectScheduledTriggerRunRunbookAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    runbook_id: {
      value: cdktf.stringToHclTerraform(struct!.runbookId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_environment_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.targetEnvironmentIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectScheduledTriggerRunRunbookActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProjectScheduledTriggerRunRunbookAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._runbookId !== undefined) {
      hasAnyValues = true;
      internalValueResult.runbookId = this._runbookId;
    }
    if (this._targetEnvironmentIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetEnvironmentIds = this._targetEnvironmentIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectScheduledTriggerRunRunbookAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._runbookId = undefined;
      this._targetEnvironmentIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._runbookId = value.runbookId;
      this._targetEnvironmentIds = value.targetEnvironmentIds;
    }
  }

  // runbook_id - computed: false, optional: false, required: true
  private _runbookId?: string; 
  public get runbookId() {
    return this.getStringAttribute('runbook_id');
  }
  public set runbookId(value: string) {
    this._runbookId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runbookIdInput() {
    return this._runbookId;
  }

  // target_environment_ids - computed: false, optional: false, required: true
  private _targetEnvironmentIds?: string[]; 
  public get targetEnvironmentIds() {
    return this.getListAttribute('target_environment_ids');
  }
  public set targetEnvironmentIds(value: string[]) {
    this._targetEnvironmentIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetEnvironmentIdsInput() {
    return this._targetEnvironmentIds;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/resources/project_scheduled_trigger octopusdeploy_project_scheduled_trigger}
*/
export class ProjectScheduledTrigger extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "octopusdeploy_project_scheduled_trigger";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProjectScheduledTrigger resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProjectScheduledTrigger to import
  * @param importFromId The id of the existing ProjectScheduledTrigger that should be imported. Refer to the {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/resources/project_scheduled_trigger#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProjectScheduledTrigger to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "octopusdeploy_project_scheduled_trigger", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/resources/project_scheduled_trigger octopusdeploy_project_scheduled_trigger} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectScheduledTriggerConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectScheduledTriggerConfig) {
    super(scope, id, {
      terraformResourceType: 'octopusdeploy_project_scheduled_trigger',
      terraformGeneratorMetadata: {
        providerName: 'octopusdeploy',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._channelId = config.channelId;
    this._description = config.description;
    this._id = config.id;
    this._isDisabled = config.isDisabled;
    this._name = config.name;
    this._projectId = config.projectId;
    this._spaceId = config.spaceId;
    this._tenantIds = config.tenantIds;
    this._timezone = config.timezone;
    this._continuousDailySchedule.internalValue = config.continuousDailySchedule;
    this._cronExpressionSchedule.internalValue = config.cronExpressionSchedule;
    this._daysPerMonthSchedule.internalValue = config.daysPerMonthSchedule;
    this._deployLatestReleaseAction.internalValue = config.deployLatestReleaseAction;
    this._deployNewReleaseAction.internalValue = config.deployNewReleaseAction;
    this._onceDailySchedule.internalValue = config.onceDailySchedule;
    this._runRunbookAction.internalValue = config.runRunbookAction;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // channel_id - computed: false, optional: true, required: false
  private _channelId?: string; 
  public get channelId() {
    return this.getStringAttribute('channel_id');
  }
  public set channelId(value: string) {
    this._channelId = value;
  }
  public resetChannelId() {
    this._channelId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelIdInput() {
    return this._channelId;
  }

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

  // is_disabled - computed: false, optional: true, required: false
  private _isDisabled?: boolean | cdktf.IResolvable; 
  public get isDisabled() {
    return this.getBooleanAttribute('is_disabled');
  }
  public set isDisabled(value: boolean | cdktf.IResolvable) {
    this._isDisabled = value;
  }
  public resetIsDisabled() {
    this._isDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDisabledInput() {
    return this._isDisabled;
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

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // space_id - computed: false, optional: false, required: true
  private _spaceId?: string; 
  public get spaceId() {
    return this.getStringAttribute('space_id');
  }
  public set spaceId(value: string) {
    this._spaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceIdInput() {
    return this._spaceId;
  }

  // tenant_ids - computed: false, optional: true, required: false
  private _tenantIds?: string[]; 
  public get tenantIds() {
    return this.getListAttribute('tenant_ids');
  }
  public set tenantIds(value: string[]) {
    this._tenantIds = value;
  }
  public resetTenantIds() {
    this._tenantIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdsInput() {
    return this._tenantIds;
  }

  // timezone - computed: false, optional: true, required: false
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

  // continuous_daily_schedule - computed: false, optional: true, required: false
  private _continuousDailySchedule = new ProjectScheduledTriggerContinuousDailyScheduleOutputReference(this, "continuous_daily_schedule");
  public get continuousDailySchedule() {
    return this._continuousDailySchedule;
  }
  public putContinuousDailySchedule(value: ProjectScheduledTriggerContinuousDailySchedule) {
    this._continuousDailySchedule.internalValue = value;
  }
  public resetContinuousDailySchedule() {
    this._continuousDailySchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continuousDailyScheduleInput() {
    return this._continuousDailySchedule.internalValue;
  }

  // cron_expression_schedule - computed: false, optional: true, required: false
  private _cronExpressionSchedule = new ProjectScheduledTriggerCronExpressionScheduleOutputReference(this, "cron_expression_schedule");
  public get cronExpressionSchedule() {
    return this._cronExpressionSchedule;
  }
  public putCronExpressionSchedule(value: ProjectScheduledTriggerCronExpressionSchedule) {
    this._cronExpressionSchedule.internalValue = value;
  }
  public resetCronExpressionSchedule() {
    this._cronExpressionSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronExpressionScheduleInput() {
    return this._cronExpressionSchedule.internalValue;
  }

  // days_per_month_schedule - computed: false, optional: true, required: false
  private _daysPerMonthSchedule = new ProjectScheduledTriggerDaysPerMonthScheduleOutputReference(this, "days_per_month_schedule");
  public get daysPerMonthSchedule() {
    return this._daysPerMonthSchedule;
  }
  public putDaysPerMonthSchedule(value: ProjectScheduledTriggerDaysPerMonthSchedule) {
    this._daysPerMonthSchedule.internalValue = value;
  }
  public resetDaysPerMonthSchedule() {
    this._daysPerMonthSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysPerMonthScheduleInput() {
    return this._daysPerMonthSchedule.internalValue;
  }

  // deploy_latest_release_action - computed: false, optional: true, required: false
  private _deployLatestReleaseAction = new ProjectScheduledTriggerDeployLatestReleaseActionOutputReference(this, "deploy_latest_release_action");
  public get deployLatestReleaseAction() {
    return this._deployLatestReleaseAction;
  }
  public putDeployLatestReleaseAction(value: ProjectScheduledTriggerDeployLatestReleaseAction) {
    this._deployLatestReleaseAction.internalValue = value;
  }
  public resetDeployLatestReleaseAction() {
    this._deployLatestReleaseAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployLatestReleaseActionInput() {
    return this._deployLatestReleaseAction.internalValue;
  }

  // deploy_new_release_action - computed: false, optional: true, required: false
  private _deployNewReleaseAction = new ProjectScheduledTriggerDeployNewReleaseActionOutputReference(this, "deploy_new_release_action");
  public get deployNewReleaseAction() {
    return this._deployNewReleaseAction;
  }
  public putDeployNewReleaseAction(value: ProjectScheduledTriggerDeployNewReleaseAction) {
    this._deployNewReleaseAction.internalValue = value;
  }
  public resetDeployNewReleaseAction() {
    this._deployNewReleaseAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployNewReleaseActionInput() {
    return this._deployNewReleaseAction.internalValue;
  }

  // once_daily_schedule - computed: false, optional: true, required: false
  private _onceDailySchedule = new ProjectScheduledTriggerOnceDailyScheduleOutputReference(this, "once_daily_schedule");
  public get onceDailySchedule() {
    return this._onceDailySchedule;
  }
  public putOnceDailySchedule(value: ProjectScheduledTriggerOnceDailySchedule) {
    this._onceDailySchedule.internalValue = value;
  }
  public resetOnceDailySchedule() {
    this._onceDailySchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onceDailyScheduleInput() {
    return this._onceDailySchedule.internalValue;
  }

  // run_runbook_action - computed: false, optional: true, required: false
  private _runRunbookAction = new ProjectScheduledTriggerRunRunbookActionOutputReference(this, "run_runbook_action");
  public get runRunbookAction() {
    return this._runRunbookAction;
  }
  public putRunRunbookAction(value: ProjectScheduledTriggerRunRunbookAction) {
    this._runRunbookAction.internalValue = value;
  }
  public resetRunRunbookAction() {
    this._runRunbookAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runRunbookActionInput() {
    return this._runRunbookAction.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      channel_id: cdktf.stringToTerraform(this._channelId),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      is_disabled: cdktf.booleanToTerraform(this._isDisabled),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      space_id: cdktf.stringToTerraform(this._spaceId),
      tenant_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tenantIds),
      timezone: cdktf.stringToTerraform(this._timezone),
      continuous_daily_schedule: projectScheduledTriggerContinuousDailyScheduleToTerraform(this._continuousDailySchedule.internalValue),
      cron_expression_schedule: projectScheduledTriggerCronExpressionScheduleToTerraform(this._cronExpressionSchedule.internalValue),
      days_per_month_schedule: projectScheduledTriggerDaysPerMonthScheduleToTerraform(this._daysPerMonthSchedule.internalValue),
      deploy_latest_release_action: projectScheduledTriggerDeployLatestReleaseActionToTerraform(this._deployLatestReleaseAction.internalValue),
      deploy_new_release_action: projectScheduledTriggerDeployNewReleaseActionToTerraform(this._deployNewReleaseAction.internalValue),
      once_daily_schedule: projectScheduledTriggerOnceDailyScheduleToTerraform(this._onceDailySchedule.internalValue),
      run_runbook_action: projectScheduledTriggerRunRunbookActionToTerraform(this._runRunbookAction.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      channel_id: {
        value: cdktf.stringToHclTerraform(this._channelId),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_disabled: {
        value: cdktf.booleanToHclTerraform(this._isDisabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      space_id: {
        value: cdktf.stringToHclTerraform(this._spaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tenantIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      timezone: {
        value: cdktf.stringToHclTerraform(this._timezone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      continuous_daily_schedule: {
        value: projectScheduledTriggerContinuousDailyScheduleToHclTerraform(this._continuousDailySchedule.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ProjectScheduledTriggerContinuousDailyScheduleList",
      },
      cron_expression_schedule: {
        value: projectScheduledTriggerCronExpressionScheduleToHclTerraform(this._cronExpressionSchedule.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ProjectScheduledTriggerCronExpressionScheduleList",
      },
      days_per_month_schedule: {
        value: projectScheduledTriggerDaysPerMonthScheduleToHclTerraform(this._daysPerMonthSchedule.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ProjectScheduledTriggerDaysPerMonthScheduleList",
      },
      deploy_latest_release_action: {
        value: projectScheduledTriggerDeployLatestReleaseActionToHclTerraform(this._deployLatestReleaseAction.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ProjectScheduledTriggerDeployLatestReleaseActionList",
      },
      deploy_new_release_action: {
        value: projectScheduledTriggerDeployNewReleaseActionToHclTerraform(this._deployNewReleaseAction.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ProjectScheduledTriggerDeployNewReleaseActionList",
      },
      once_daily_schedule: {
        value: projectScheduledTriggerOnceDailyScheduleToHclTerraform(this._onceDailySchedule.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ProjectScheduledTriggerOnceDailyScheduleList",
      },
      run_runbook_action: {
        value: projectScheduledTriggerRunRunbookActionToHclTerraform(this._runRunbookAction.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ProjectScheduledTriggerRunRunbookActionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
