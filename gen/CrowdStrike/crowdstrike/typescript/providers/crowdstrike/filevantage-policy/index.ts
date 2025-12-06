// https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.51/docs/resources/filevantage_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FilevantagePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the filevantage policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.51/docs/resources/filevantage_policy#description FilevantagePolicy#description}
  */
  readonly description?: string;
  /**
  * Enable the filevantage policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.51/docs/resources/filevantage_policy#enabled FilevantagePolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Host Group ids to attach to the filevantage policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.51/docs/resources/filevantage_policy#host_groups FilevantagePolicy#host_groups}
  */
  readonly hostGroups?: string[];
  /**
  * Name of the filevantage policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.51/docs/resources/filevantage_policy#name FilevantagePolicy#name}
  */
  readonly name: string;
  /**
  * Platform for the filevantage policy to manage. (Windows, Mac, Linux)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.51/docs/resources/filevantage_policy#platform_name FilevantagePolicy#platform_name}
  */
  readonly platformName: string;
  /**
  * Rule Group ids to attach to the filevantage policy. Precedence is based on the order of the list. Rule groups must be the same type as the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.51/docs/resources/filevantage_policy#rule_groups FilevantagePolicy#rule_groups}
  */
  readonly ruleGroups?: string[];
  /**
  * Scheduled exclusions for the filevantage policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.51/docs/resources/filevantage_policy#scheduled_exclusions FilevantagePolicy#scheduled_exclusions}
  */
  readonly scheduledExclusions?: FilevantagePolicyScheduledExclusions[] | cdktf.IResolvable;
}
export interface FilevantagePolicyScheduledExclusionsRepeated {
  /**
  * If the exclusion is all day.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.51/docs/resources/filevantage_policy#all_day FilevantagePolicy#all_day}
  */
  readonly allDay: boolean | cdktf.IResolvable;
  /**
  * The days of the month to allow the exclusion. Required if frequency is set to monthly and monthly_occurrence is set to days. Options: 1-31
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.51/docs/resources/filevantage_policy#days_of_month FilevantagePolicy#days_of_month}
  */
  readonly daysOfMonth?: number[];
  /**
  * The days of the week to allow the exclusion. Required if frequency is set to weekly or set to monthly and monthly_occurrence is set to a week. Options: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.51/docs/resources/filevantage_policy#days_of_week FilevantagePolicy#days_of_week}
  */
  readonly daysOfWeek?: string[];
  /**
  * The end time to end the scheduled exclusion in 24 hour format. Format: HH:MM required if all_day is false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.51/docs/resources/filevantage_policy#end_time FilevantagePolicy#end_time}
  */
  readonly endTime?: string;
  /**
  * The frequency of the exclusion. Options: daily, weekly, monthly
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.51/docs/resources/filevantage_policy#frequency FilevantagePolicy#frequency}
  */
  readonly frequency: string;
  /**
  * The monthly occurrence of the exclusion. Either specify a week (first, second, third, fourth) or set to days to specify days of the month. Options: first, second, third, fourth, days. Required if frequency is set to monthly
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.51/docs/resources/filevantage_policy#monthly_occurrence FilevantagePolicy#monthly_occurrence}
  */
  readonly monthlyOccurrence?: string;
  /**
  * The start time to allow the scheduled exclusion in 24 hour format. Format: HH:MM required if all_day is false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.51/docs/resources/filevantage_policy#start_time FilevantagePolicy#start_time}
  */
  readonly startTime?: string;
}

export function filevantagePolicyScheduledExclusionsRepeatedToTerraform(struct?: FilevantagePolicyScheduledExclusionsRepeated | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_day: cdktf.booleanToTerraform(struct!.allDay),
    days_of_month: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.daysOfMonth),
    days_of_week: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.daysOfWeek),
    end_time: cdktf.stringToTerraform(struct!.endTime),
    frequency: cdktf.stringToTerraform(struct!.frequency),
    monthly_occurrence: cdktf.stringToTerraform(struct!.monthlyOccurrence),
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}


export function filevantagePolicyScheduledExclusionsRepeatedToHclTerraform(struct?: FilevantagePolicyScheduledExclusionsRepeated | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_day: {
      value: cdktf.booleanToHclTerraform(struct!.allDay),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    days_of_month: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.daysOfMonth),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    days_of_week: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.daysOfWeek),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    end_time: {
      value: cdktf.stringToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    frequency: {
      value: cdktf.stringToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    monthly_occurrence: {
      value: cdktf.stringToHclTerraform(struct!.monthlyOccurrence),
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

export class FilevantagePolicyScheduledExclusionsRepeatedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FilevantagePolicyScheduledExclusionsRepeated | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.allDay = this._allDay;
    }
    if (this._daysOfMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysOfMonth = this._daysOfMonth;
    }
    if (this._daysOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysOfWeek = this._daysOfWeek;
    }
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    if (this._monthlyOccurrence !== undefined) {
      hasAnyValues = true;
      internalValueResult.monthlyOccurrence = this._monthlyOccurrence;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilevantagePolicyScheduledExclusionsRepeated | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allDay = undefined;
      this._daysOfMonth = undefined;
      this._daysOfWeek = undefined;
      this._endTime = undefined;
      this._frequency = undefined;
      this._monthlyOccurrence = undefined;
      this._startTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allDay = value.allDay;
      this._daysOfMonth = value.daysOfMonth;
      this._daysOfWeek = value.daysOfWeek;
      this._endTime = value.endTime;
      this._frequency = value.frequency;
      this._monthlyOccurrence = value.monthlyOccurrence;
      this._startTime = value.startTime;
    }
  }

  // all_day - computed: false, optional: false, required: true
  private _allDay?: boolean | cdktf.IResolvable; 
  public get allDay() {
    return this.getBooleanAttribute('all_day');
  }
  public set allDay(value: boolean | cdktf.IResolvable) {
    this._allDay = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allDayInput() {
    return this._allDay;
  }

  // days_of_month - computed: true, optional: true, required: false
  private _daysOfMonth?: number[]; 
  public get daysOfMonth() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('days_of_month')));
  }
  public set daysOfMonth(value: number[]) {
    this._daysOfMonth = value;
  }
  public resetDaysOfMonth() {
    this._daysOfMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysOfMonthInput() {
    return this._daysOfMonth;
  }

  // days_of_week - computed: true, optional: true, required: false
  private _daysOfWeek?: string[]; 
  public get daysOfWeek() {
    return cdktf.Fn.tolist(this.getListAttribute('days_of_week'));
  }
  public set daysOfWeek(value: string[]) {
    this._daysOfWeek = value;
  }
  public resetDaysOfWeek() {
    this._daysOfWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysOfWeekInput() {
    return this._daysOfWeek;
  }

  // end_time - computed: true, optional: true, required: false
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

  // monthly_occurrence - computed: true, optional: true, required: false
  private _monthlyOccurrence?: string; 
  public get monthlyOccurrence() {
    return this.getStringAttribute('monthly_occurrence');
  }
  public set monthlyOccurrence(value: string) {
    this._monthlyOccurrence = value;
  }
  public resetMonthlyOccurrence() {
    this._monthlyOccurrence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthlyOccurrenceInput() {
    return this._monthlyOccurrence;
  }

  // start_time - computed: true, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }
}
export interface FilevantagePolicyScheduledExclusions {
  /**
  * Description of the scheduled exclusion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.51/docs/resources/filevantage_policy#description FilevantagePolicy#description}
  */
  readonly description?: string;
  /**
  * The end date of the scheduled exclusion. Format: YYYY-MM-DD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.51/docs/resources/filevantage_policy#end_date FilevantagePolicy#end_date}
  */
  readonly endDate?: string;
  /**
  * The end time of the scheduled exclusion in 24 hour format. Format: HH:MM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.51/docs/resources/filevantage_policy#end_time FilevantagePolicy#end_time}
  */
  readonly endTime?: string;
  /**
  * Name of the scheduled exclusion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.51/docs/resources/filevantage_policy#name FilevantagePolicy#name}
  */
  readonly name: string;
  /**
  * A comma separated list of processes to exclude changes from. Example: ** /run_me.sh excludes changes made by run_me.sh in any location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.51/docs/resources/filevantage_policy#processes FilevantagePolicy#processes}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly processes?: string;
  /**
  * Repeated scheduled exclusion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.51/docs/resources/filevantage_policy#repeated FilevantagePolicy#repeated}
  */
  readonly repeated?: FilevantagePolicyScheduledExclusionsRepeated;
  /**
  * The start date of the scheduled exclusion. Format: YYYY-MM-DD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.51/docs/resources/filevantage_policy#start_date FilevantagePolicy#start_date}
  */
  readonly startDate: string;
  /**
  * The start time of the scheduled exclusion in 24 hour format. Format: HH:MM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.51/docs/resources/filevantage_policy#start_time FilevantagePolicy#start_time}
  */
  readonly startTime: string;
  /**
  * The timezone to use for the time fields. See https://en.wikipedia.org/wiki/List_of_tz_database_time_zones.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.51/docs/resources/filevantage_policy#timezone FilevantagePolicy#timezone}
  */
  readonly timezone: string;
  /**
  * A comma separated list of users to exclude changes from. Example: user1,user2,admin* excludes changes made by user1, user2, and any user starting with admin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.51/docs/resources/filevantage_policy#users FilevantagePolicy#users}
  */
  readonly users?: string;
}

export function filevantagePolicyScheduledExclusionsToTerraform(struct?: FilevantagePolicyScheduledExclusions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    end_date: cdktf.stringToTerraform(struct!.endDate),
    end_time: cdktf.stringToTerraform(struct!.endTime),
    name: cdktf.stringToTerraform(struct!.name),
    processes: cdktf.stringToTerraform(struct!.processes),
    repeated: filevantagePolicyScheduledExclusionsRepeatedToTerraform(struct!.repeated),
    start_date: cdktf.stringToTerraform(struct!.startDate),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    timezone: cdktf.stringToTerraform(struct!.timezone),
    users: cdktf.stringToTerraform(struct!.users),
  }
}


export function filevantagePolicyScheduledExclusionsToHclTerraform(struct?: FilevantagePolicyScheduledExclusions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_date: {
      value: cdktf.stringToHclTerraform(struct!.endDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_time: {
      value: cdktf.stringToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    processes: {
      value: cdktf.stringToHclTerraform(struct!.processes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repeated: {
      value: filevantagePolicyScheduledExclusionsRepeatedToHclTerraform(struct!.repeated),
      isBlock: true,
      type: "struct",
      storageClassType: "FilevantagePolicyScheduledExclusionsRepeated",
    },
    start_date: {
      value: cdktf.stringToHclTerraform(struct!.startDate),
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
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    users: {
      value: cdktf.stringToHclTerraform(struct!.users),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FilevantagePolicyScheduledExclusionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FilevantagePolicyScheduledExclusions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._endDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.endDate = this._endDate;
    }
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._processes !== undefined) {
      hasAnyValues = true;
      internalValueResult.processes = this._processes;
    }
    if (this._repeated?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.repeated = this._repeated?.internalValue;
    }
    if (this._startDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.startDate = this._startDate;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    if (this._users !== undefined) {
      hasAnyValues = true;
      internalValueResult.users = this._users;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilevantagePolicyScheduledExclusions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._endDate = undefined;
      this._endTime = undefined;
      this._name = undefined;
      this._processes = undefined;
      this._repeated.internalValue = undefined;
      this._startDate = undefined;
      this._startTime = undefined;
      this._timezone = undefined;
      this._users = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._endDate = value.endDate;
      this._endTime = value.endTime;
      this._name = value.name;
      this._processes = value.processes;
      this._repeated.internalValue = value.repeated;
      this._startDate = value.startDate;
      this._startTime = value.startTime;
      this._timezone = value.timezone;
      this._users = value.users;
    }
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

  // end_date - computed: true, optional: true, required: false
  private _endDate?: string; 
  public get endDate() {
    return this.getStringAttribute('end_date');
  }
  public set endDate(value: string) {
    this._endDate = value;
  }
  public resetEndDate() {
    this._endDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endDateInput() {
    return this._endDate;
  }

  // end_time - computed: true, optional: true, required: false
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

  // processes - computed: true, optional: true, required: false
  private _processes?: string; 
  public get processes() {
    return this.getStringAttribute('processes');
  }
  public set processes(value: string) {
    this._processes = value;
  }
  public resetProcesses() {
    this._processes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processesInput() {
    return this._processes;
  }

  // repeated - computed: false, optional: true, required: false
  private _repeated = new FilevantagePolicyScheduledExclusionsRepeatedOutputReference(this, "repeated");
  public get repeated() {
    return this._repeated;
  }
  public putRepeated(value: FilevantagePolicyScheduledExclusionsRepeated) {
    this._repeated.internalValue = value;
  }
  public resetRepeated() {
    this._repeated.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatedInput() {
    return this._repeated.internalValue;
  }

  // start_date - computed: false, optional: false, required: true
  private _startDate?: string; 
  public get startDate() {
    return this.getStringAttribute('start_date');
  }
  public set startDate(value: string) {
    this._startDate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startDateInput() {
    return this._startDate;
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

  // timezone - computed: false, optional: false, required: true
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // users - computed: true, optional: true, required: false
  private _users?: string; 
  public get users() {
    return this.getStringAttribute('users');
  }
  public set users(value: string) {
    this._users = value;
  }
  public resetUsers() {
    this._users = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users;
  }
}

export class FilevantagePolicyScheduledExclusionsList extends cdktf.ComplexList {
  public internalValue? : FilevantagePolicyScheduledExclusions[] | cdktf.IResolvable

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
  public get(index: number): FilevantagePolicyScheduledExclusionsOutputReference {
    return new FilevantagePolicyScheduledExclusionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.51/docs/resources/filevantage_policy crowdstrike_filevantage_policy}
*/
export class FilevantagePolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "crowdstrike_filevantage_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FilevantagePolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FilevantagePolicy to import
  * @param importFromId The id of the existing FilevantagePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.51/docs/resources/filevantage_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FilevantagePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "crowdstrike_filevantage_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.51/docs/resources/filevantage_policy crowdstrike_filevantage_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FilevantagePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: FilevantagePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'crowdstrike_filevantage_policy',
      terraformGeneratorMetadata: {
        providerName: 'crowdstrike',
        providerVersion: '0.0.51',
        providerVersionConstraint: '0.0.51'
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
    this._hostGroups = config.hostGroups;
    this._name = config.name;
    this._platformName = config.platformName;
    this._ruleGroups = config.ruleGroups;
    this._scheduledExclusions.internalValue = config.scheduledExclusions;
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

  // host_groups - computed: false, optional: true, required: false
  private _hostGroups?: string[]; 
  public get hostGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('host_groups'));
  }
  public set hostGroups(value: string[]) {
    this._hostGroups = value;
  }
  public resetHostGroups() {
    this._hostGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostGroupsInput() {
    return this._hostGroups;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
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

  // platform_name - computed: false, optional: false, required: true
  private _platformName?: string; 
  public get platformName() {
    return this.getStringAttribute('platform_name');
  }
  public set platformName(value: string) {
    this._platformName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get platformNameInput() {
    return this._platformName;
  }

  // rule_groups - computed: false, optional: true, required: false
  private _ruleGroups?: string[]; 
  public get ruleGroups() {
    return this.getListAttribute('rule_groups');
  }
  public set ruleGroups(value: string[]) {
    this._ruleGroups = value;
  }
  public resetRuleGroups() {
    this._ruleGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleGroupsInput() {
    return this._ruleGroups;
  }

  // scheduled_exclusions - computed: false, optional: true, required: false
  private _scheduledExclusions = new FilevantagePolicyScheduledExclusionsList(this, "scheduled_exclusions", false);
  public get scheduledExclusions() {
    return this._scheduledExclusions;
  }
  public putScheduledExclusions(value: FilevantagePolicyScheduledExclusions[] | cdktf.IResolvable) {
    this._scheduledExclusions.internalValue = value;
  }
  public resetScheduledExclusions() {
    this._scheduledExclusions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledExclusionsInput() {
    return this._scheduledExclusions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      host_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hostGroups),
      name: cdktf.stringToTerraform(this._name),
      platform_name: cdktf.stringToTerraform(this._platformName),
      rule_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ruleGroups),
      scheduled_exclusions: cdktf.listMapper(filevantagePolicyScheduledExclusionsToTerraform, false)(this._scheduledExclusions.internalValue),
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
      host_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._hostGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      platform_name: {
        value: cdktf.stringToHclTerraform(this._platformName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ruleGroups),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      scheduled_exclusions: {
        value: cdktf.listMapperHcl(filevantagePolicyScheduledExclusionsToHclTerraform, false)(this._scheduledExclusions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FilevantagePolicyScheduledExclusionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
