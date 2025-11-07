// https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/resources/db_service_start_stop_schedule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DbServiceStartStopScheduleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the DB Service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/resources/db_service_start_stop_schedule#service_id DbServiceStartStopSchedule#service_id}
  */
  readonly serviceId: string;
  /**
  * schedule_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/resources/db_service_start_stop_schedule#schedule_info DbServiceStartStopSchedule#schedule_info}
  */
  readonly scheduleInfo: DbServiceStartStopScheduleScheduleInfo;
}
export interface DbServiceStartStopScheduleMetadata {
}

export function dbServiceStartStopScheduleMetadataToTerraform(struct?: DbServiceStartStopScheduleMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dbServiceStartStopScheduleMetadataToHclTerraform(struct?: DbServiceStartStopScheduleMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DbServiceStartStopScheduleMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DbServiceStartStopScheduleMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceStartStopScheduleMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // schedule_counter - computed: true, optional: false, required: false
  public get scheduleCounter() {
    return this.getNumberAttribute('schedule_counter');
  }
}

export class DbServiceStartStopScheduleMetadataList extends cdktf.ComplexList {

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
  public get(index: number): DbServiceStartStopScheduleMetadataOutputReference {
    return new DbServiceStartStopScheduleMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DbServiceStartStopScheduleScheduleInfoOneTime {
  /**
  * Time at which the DB Service should be started at
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/resources/db_service_start_stop_schedule#db_service_start_at DbServiceStartStopSchedule#db_service_start_at}
  */
  readonly dbServiceStartAt?: string;
  /**
  * Time at which the DB Service should be stopped at
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/resources/db_service_start_stop_schedule#db_service_stop_at DbServiceStartStopSchedule#db_service_stop_at}
  */
  readonly dbServiceStopAt?: string;
}

export function dbServiceStartStopScheduleScheduleInfoOneTimeToTerraform(struct?: DbServiceStartStopScheduleScheduleInfoOneTimeOutputReference | DbServiceStartStopScheduleScheduleInfoOneTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    db_service_start_at: cdktf.stringToTerraform(struct!.dbServiceStartAt),
    db_service_stop_at: cdktf.stringToTerraform(struct!.dbServiceStopAt),
  }
}


export function dbServiceStartStopScheduleScheduleInfoOneTimeToHclTerraform(struct?: DbServiceStartStopScheduleScheduleInfoOneTimeOutputReference | DbServiceStartStopScheduleScheduleInfoOneTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    db_service_start_at: {
      value: cdktf.stringToHclTerraform(struct!.dbServiceStartAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_service_stop_at: {
      value: cdktf.stringToHclTerraform(struct!.dbServiceStopAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceStartStopScheduleScheduleInfoOneTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceStartStopScheduleScheduleInfoOneTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dbServiceStartAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbServiceStartAt = this._dbServiceStartAt;
    }
    if (this._dbServiceStopAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbServiceStopAt = this._dbServiceStopAt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceStartStopScheduleScheduleInfoOneTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dbServiceStartAt = undefined;
      this._dbServiceStopAt = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dbServiceStartAt = value.dbServiceStartAt;
      this._dbServiceStopAt = value.dbServiceStopAt;
    }
  }

  // db_service_start_at - computed: false, optional: true, required: false
  private _dbServiceStartAt?: string; 
  public get dbServiceStartAt() {
    return this.getStringAttribute('db_service_start_at');
  }
  public set dbServiceStartAt(value: string) {
    this._dbServiceStartAt = value;
  }
  public resetDbServiceStartAt() {
    this._dbServiceStartAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbServiceStartAtInput() {
    return this._dbServiceStartAt;
  }

  // db_service_stop_at - computed: false, optional: true, required: false
  private _dbServiceStopAt?: string; 
  public get dbServiceStopAt() {
    return this.getStringAttribute('db_service_stop_at');
  }
  public set dbServiceStopAt(value: string) {
    this._dbServiceStopAt = value;
  }
  public resetDbServiceStopAt() {
    this._dbServiceStopAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbServiceStopAtInput() {
    return this._dbServiceStopAt;
  }
}
export interface DbServiceStartStopScheduleScheduleInfoRecurringScheduleExpiry {
  /**
  * Number of occurrences which the schedule would not be applicable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/resources/db_service_start_stop_schedule#after_occurrences DbServiceStartStopSchedule#after_occurrences}
  */
  readonly afterOccurrences?: number;
  /**
  * If set to True, the schedule will be applicable forever
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/resources/db_service_start_stop_schedule#never DbServiceStartStopSchedule#never}
  */
  readonly never?: boolean | cdktf.IResolvable;
  /**
  * Date after which the schedule would not be applicable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/resources/db_service_start_stop_schedule#on DbServiceStartStopSchedule#on}
  */
  readonly on?: string;
}

export function dbServiceStartStopScheduleScheduleInfoRecurringScheduleExpiryToTerraform(struct?: DbServiceStartStopScheduleScheduleInfoRecurringScheduleExpiryOutputReference | DbServiceStartStopScheduleScheduleInfoRecurringScheduleExpiry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    after_occurrences: cdktf.numberToTerraform(struct!.afterOccurrences),
    never: cdktf.booleanToTerraform(struct!.never),
    on: cdktf.stringToTerraform(struct!.on),
  }
}


export function dbServiceStartStopScheduleScheduleInfoRecurringScheduleExpiryToHclTerraform(struct?: DbServiceStartStopScheduleScheduleInfoRecurringScheduleExpiryOutputReference | DbServiceStartStopScheduleScheduleInfoRecurringScheduleExpiry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    after_occurrences: {
      value: cdktf.numberToHclTerraform(struct!.afterOccurrences),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    never: {
      value: cdktf.booleanToHclTerraform(struct!.never),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    on: {
      value: cdktf.stringToHclTerraform(struct!.on),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceStartStopScheduleScheduleInfoRecurringScheduleExpiryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceStartStopScheduleScheduleInfoRecurringScheduleExpiry | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._afterOccurrences !== undefined) {
      hasAnyValues = true;
      internalValueResult.afterOccurrences = this._afterOccurrences;
    }
    if (this._never !== undefined) {
      hasAnyValues = true;
      internalValueResult.never = this._never;
    }
    if (this._on !== undefined) {
      hasAnyValues = true;
      internalValueResult.on = this._on;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceStartStopScheduleScheduleInfoRecurringScheduleExpiry | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._afterOccurrences = undefined;
      this._never = undefined;
      this._on = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._afterOccurrences = value.afterOccurrences;
      this._never = value.never;
      this._on = value.on;
    }
  }

  // after_occurrences - computed: false, optional: true, required: false
  private _afterOccurrences?: number; 
  public get afterOccurrences() {
    return this.getNumberAttribute('after_occurrences');
  }
  public set afterOccurrences(value: number) {
    this._afterOccurrences = value;
  }
  public resetAfterOccurrences() {
    this._afterOccurrences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afterOccurrencesInput() {
    return this._afterOccurrences;
  }

  // never - computed: false, optional: true, required: false
  private _never?: boolean | cdktf.IResolvable; 
  public get never() {
    return this.getBooleanAttribute('never');
  }
  public set never(value: boolean | cdktf.IResolvable) {
    this._never = value;
  }
  public resetNever() {
    this._never = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neverInput() {
    return this._never;
  }

  // on - computed: false, optional: true, required: false
  private _on?: string; 
  public get on() {
    return this.getStringAttribute('on');
  }
  public set on(value: string) {
    this._on = value;
  }
  public resetOn() {
    this._on = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onInput() {
    return this._on;
  }
}
export interface DbServiceStartStopScheduleScheduleInfoRecurringWeeklySchedule {
  /**
  * Days of the week on which the recurring start/stop schedule would be applicable for the DB Service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/resources/db_service_start_stop_schedule#days DbServiceStartStopSchedule#days}
  */
  readonly days?: string[];
}

export function dbServiceStartStopScheduleScheduleInfoRecurringWeeklyScheduleToTerraform(struct?: DbServiceStartStopScheduleScheduleInfoRecurringWeeklyScheduleOutputReference | DbServiceStartStopScheduleScheduleInfoRecurringWeeklySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.days),
  }
}


export function dbServiceStartStopScheduleScheduleInfoRecurringWeeklyScheduleToHclTerraform(struct?: DbServiceStartStopScheduleScheduleInfoRecurringWeeklyScheduleOutputReference | DbServiceStartStopScheduleScheduleInfoRecurringWeeklySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.days),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceStartStopScheduleScheduleInfoRecurringWeeklyScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceStartStopScheduleScheduleInfoRecurringWeeklySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceStartStopScheduleScheduleInfoRecurringWeeklySchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._days = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._days = value.days;
    }
  }

  // days - computed: false, optional: true, required: false
  private _days?: string[]; 
  public get days() {
    return this.getListAttribute('days');
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
export interface DbServiceStartStopScheduleScheduleInfoRecurring {
  /**
  * Whether the given schedule is a daily schedule i.e. a schedule which is executed daily
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/resources/db_service_start_stop_schedule#daily_schedule DbServiceStartStopSchedule#daily_schedule}
  */
  readonly dailySchedule?: boolean | cdktf.IResolvable;
  /**
  * Time at which the DB Service should be started at
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/resources/db_service_start_stop_schedule#db_service_start_at DbServiceStartStopSchedule#db_service_start_at}
  */
  readonly dbServiceStartAt?: string;
  /**
  * Time at which the DB Service should be stopped at
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/resources/db_service_start_stop_schedule#db_service_stop_at DbServiceStartStopSchedule#db_service_stop_at}
  */
  readonly dbServiceStopAt?: string;
  /**
  * Date from which the given recurring schedule would be applicable from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/resources/db_service_start_stop_schedule#schedule_start_date DbServiceStartStopSchedule#schedule_start_date}
  */
  readonly scheduleStartDate?: string;
  /**
  * schedule_expiry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/resources/db_service_start_stop_schedule#schedule_expiry DbServiceStartStopSchedule#schedule_expiry}
  */
  readonly scheduleExpiry?: DbServiceStartStopScheduleScheduleInfoRecurringScheduleExpiry;
  /**
  * weekly_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/resources/db_service_start_stop_schedule#weekly_schedule DbServiceStartStopSchedule#weekly_schedule}
  */
  readonly weeklySchedule?: DbServiceStartStopScheduleScheduleInfoRecurringWeeklySchedule;
}

export function dbServiceStartStopScheduleScheduleInfoRecurringToTerraform(struct?: DbServiceStartStopScheduleScheduleInfoRecurringOutputReference | DbServiceStartStopScheduleScheduleInfoRecurring): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    daily_schedule: cdktf.booleanToTerraform(struct!.dailySchedule),
    db_service_start_at: cdktf.stringToTerraform(struct!.dbServiceStartAt),
    db_service_stop_at: cdktf.stringToTerraform(struct!.dbServiceStopAt),
    schedule_start_date: cdktf.stringToTerraform(struct!.scheduleStartDate),
    schedule_expiry: dbServiceStartStopScheduleScheduleInfoRecurringScheduleExpiryToTerraform(struct!.scheduleExpiry),
    weekly_schedule: dbServiceStartStopScheduleScheduleInfoRecurringWeeklyScheduleToTerraform(struct!.weeklySchedule),
  }
}


export function dbServiceStartStopScheduleScheduleInfoRecurringToHclTerraform(struct?: DbServiceStartStopScheduleScheduleInfoRecurringOutputReference | DbServiceStartStopScheduleScheduleInfoRecurring): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    daily_schedule: {
      value: cdktf.booleanToHclTerraform(struct!.dailySchedule),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    db_service_start_at: {
      value: cdktf.stringToHclTerraform(struct!.dbServiceStartAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_service_stop_at: {
      value: cdktf.stringToHclTerraform(struct!.dbServiceStopAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedule_start_date: {
      value: cdktf.stringToHclTerraform(struct!.scheduleStartDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedule_expiry: {
      value: dbServiceStartStopScheduleScheduleInfoRecurringScheduleExpiryToHclTerraform(struct!.scheduleExpiry),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceStartStopScheduleScheduleInfoRecurringScheduleExpiryList",
    },
    weekly_schedule: {
      value: dbServiceStartStopScheduleScheduleInfoRecurringWeeklyScheduleToHclTerraform(struct!.weeklySchedule),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceStartStopScheduleScheduleInfoRecurringWeeklyScheduleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceStartStopScheduleScheduleInfoRecurringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceStartStopScheduleScheduleInfoRecurring | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dailySchedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.dailySchedule = this._dailySchedule;
    }
    if (this._dbServiceStartAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbServiceStartAt = this._dbServiceStartAt;
    }
    if (this._dbServiceStopAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbServiceStopAt = this._dbServiceStopAt;
    }
    if (this._scheduleStartDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleStartDate = this._scheduleStartDate;
    }
    if (this._scheduleExpiry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleExpiry = this._scheduleExpiry?.internalValue;
    }
    if (this._weeklySchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weeklySchedule = this._weeklySchedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceStartStopScheduleScheduleInfoRecurring | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dailySchedule = undefined;
      this._dbServiceStartAt = undefined;
      this._dbServiceStopAt = undefined;
      this._scheduleStartDate = undefined;
      this._scheduleExpiry.internalValue = undefined;
      this._weeklySchedule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dailySchedule = value.dailySchedule;
      this._dbServiceStartAt = value.dbServiceStartAt;
      this._dbServiceStopAt = value.dbServiceStopAt;
      this._scheduleStartDate = value.scheduleStartDate;
      this._scheduleExpiry.internalValue = value.scheduleExpiry;
      this._weeklySchedule.internalValue = value.weeklySchedule;
    }
  }

  // daily_schedule - computed: false, optional: true, required: false
  private _dailySchedule?: boolean | cdktf.IResolvable; 
  public get dailySchedule() {
    return this.getBooleanAttribute('daily_schedule');
  }
  public set dailySchedule(value: boolean | cdktf.IResolvable) {
    this._dailySchedule = value;
  }
  public resetDailySchedule() {
    this._dailySchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyScheduleInput() {
    return this._dailySchedule;
  }

  // db_service_start_at - computed: false, optional: true, required: false
  private _dbServiceStartAt?: string; 
  public get dbServiceStartAt() {
    return this.getStringAttribute('db_service_start_at');
  }
  public set dbServiceStartAt(value: string) {
    this._dbServiceStartAt = value;
  }
  public resetDbServiceStartAt() {
    this._dbServiceStartAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbServiceStartAtInput() {
    return this._dbServiceStartAt;
  }

  // db_service_stop_at - computed: false, optional: true, required: false
  private _dbServiceStopAt?: string; 
  public get dbServiceStopAt() {
    return this.getStringAttribute('db_service_stop_at');
  }
  public set dbServiceStopAt(value: string) {
    this._dbServiceStopAt = value;
  }
  public resetDbServiceStopAt() {
    this._dbServiceStopAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbServiceStopAtInput() {
    return this._dbServiceStopAt;
  }

  // schedule_start_date - computed: false, optional: true, required: false
  private _scheduleStartDate?: string; 
  public get scheduleStartDate() {
    return this.getStringAttribute('schedule_start_date');
  }
  public set scheduleStartDate(value: string) {
    this._scheduleStartDate = value;
  }
  public resetScheduleStartDate() {
    this._scheduleStartDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleStartDateInput() {
    return this._scheduleStartDate;
  }

  // schedule_expiry - computed: false, optional: true, required: false
  private _scheduleExpiry = new DbServiceStartStopScheduleScheduleInfoRecurringScheduleExpiryOutputReference(this, "schedule_expiry");
  public get scheduleExpiry() {
    return this._scheduleExpiry;
  }
  public putScheduleExpiry(value: DbServiceStartStopScheduleScheduleInfoRecurringScheduleExpiry) {
    this._scheduleExpiry.internalValue = value;
  }
  public resetScheduleExpiry() {
    this._scheduleExpiry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleExpiryInput() {
    return this._scheduleExpiry.internalValue;
  }

  // weekly_schedule - computed: false, optional: true, required: false
  private _weeklySchedule = new DbServiceStartStopScheduleScheduleInfoRecurringWeeklyScheduleOutputReference(this, "weekly_schedule");
  public get weeklySchedule() {
    return this._weeklySchedule;
  }
  public putWeeklySchedule(value: DbServiceStartStopScheduleScheduleInfoRecurringWeeklySchedule) {
    this._weeklySchedule.internalValue = value;
  }
  public resetWeeklySchedule() {
    this._weeklySchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklyScheduleInput() {
    return this._weeklySchedule.internalValue;
  }
}
export interface DbServiceStartStopScheduleScheduleInfo {
  /**
  * one_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/resources/db_service_start_stop_schedule#one_time DbServiceStartStopSchedule#one_time}
  */
  readonly oneTime?: DbServiceStartStopScheduleScheduleInfoOneTime;
  /**
  * recurring block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/resources/db_service_start_stop_schedule#recurring DbServiceStartStopSchedule#recurring}
  */
  readonly recurring?: DbServiceStartStopScheduleScheduleInfoRecurring;
}

export function dbServiceStartStopScheduleScheduleInfoToTerraform(struct?: DbServiceStartStopScheduleScheduleInfoOutputReference | DbServiceStartStopScheduleScheduleInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    one_time: dbServiceStartStopScheduleScheduleInfoOneTimeToTerraform(struct!.oneTime),
    recurring: dbServiceStartStopScheduleScheduleInfoRecurringToTerraform(struct!.recurring),
  }
}


export function dbServiceStartStopScheduleScheduleInfoToHclTerraform(struct?: DbServiceStartStopScheduleScheduleInfoOutputReference | DbServiceStartStopScheduleScheduleInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    one_time: {
      value: dbServiceStartStopScheduleScheduleInfoOneTimeToHclTerraform(struct!.oneTime),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceStartStopScheduleScheduleInfoOneTimeList",
    },
    recurring: {
      value: dbServiceStartStopScheduleScheduleInfoRecurringToHclTerraform(struct!.recurring),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceStartStopScheduleScheduleInfoRecurringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceStartStopScheduleScheduleInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceStartStopScheduleScheduleInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oneTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oneTime = this._oneTime?.internalValue;
    }
    if (this._recurring?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurring = this._recurring?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceStartStopScheduleScheduleInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oneTime.internalValue = undefined;
      this._recurring.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oneTime.internalValue = value.oneTime;
      this._recurring.internalValue = value.recurring;
    }
  }

  // one_time - computed: false, optional: true, required: false
  private _oneTime = new DbServiceStartStopScheduleScheduleInfoOneTimeOutputReference(this, "one_time");
  public get oneTime() {
    return this._oneTime;
  }
  public putOneTime(value: DbServiceStartStopScheduleScheduleInfoOneTime) {
    this._oneTime.internalValue = value;
  }
  public resetOneTime() {
    this._oneTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oneTimeInput() {
    return this._oneTime.internalValue;
  }

  // recurring - computed: false, optional: true, required: false
  private _recurring = new DbServiceStartStopScheduleScheduleInfoRecurringOutputReference(this, "recurring");
  public get recurring() {
    return this._recurring;
  }
  public putRecurring(value: DbServiceStartStopScheduleScheduleInfoRecurring) {
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
* Represents a {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/resources/db_service_start_stop_schedule tessell_db_service_start_stop_schedule}
*/
export class DbServiceStartStopSchedule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tessell_db_service_start_stop_schedule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DbServiceStartStopSchedule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DbServiceStartStopSchedule to import
  * @param importFromId The id of the existing DbServiceStartStopSchedule that should be imported. Refer to the {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/resources/db_service_start_stop_schedule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DbServiceStartStopSchedule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tessell_db_service_start_stop_schedule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/resources/db_service_start_stop_schedule tessell_db_service_start_stop_schedule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DbServiceStartStopScheduleConfig
  */
  public constructor(scope: Construct, id: string, config: DbServiceStartStopScheduleConfig) {
    super(scope, id, {
      terraformResourceType: 'tessell_db_service_start_stop_schedule',
      terraformGeneratorMetadata: {
        providerName: 'tessell',
        providerVersion: '0.0.27'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._serviceId = config.serviceId;
    this._scheduleInfo.internalValue = config.scheduleInfo;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // date_created - computed: true, optional: false, required: false
  public get dateCreated() {
    return this.getStringAttribute('date_created');
  }

  // date_modified - computed: true, optional: false, required: false
  public get dateModified() {
    return this.getStringAttribute('date_modified');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_run - computed: true, optional: false, required: false
  public get lastRun() {
    return this.getStringAttribute('last_run');
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new DbServiceStartStopScheduleMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // service_id - computed: false, optional: false, required: true
  private _serviceId?: string; 
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }
  public set serviceId(value: string) {
    this._serviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdInput() {
    return this._serviceId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // schedule_info - computed: false, optional: false, required: true
  private _scheduleInfo = new DbServiceStartStopScheduleScheduleInfoOutputReference(this, "schedule_info");
  public get scheduleInfo() {
    return this._scheduleInfo;
  }
  public putScheduleInfo(value: DbServiceStartStopScheduleScheduleInfo) {
    this._scheduleInfo.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInfoInput() {
    return this._scheduleInfo.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      service_id: cdktf.stringToTerraform(this._serviceId),
      schedule_info: dbServiceStartStopScheduleScheduleInfoToTerraform(this._scheduleInfo.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      service_id: {
        value: cdktf.stringToHclTerraform(this._serviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule_info: {
        value: dbServiceStartStopScheduleScheduleInfoToHclTerraform(this._scheduleInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DbServiceStartStopScheduleScheduleInfoList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
