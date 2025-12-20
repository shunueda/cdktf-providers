// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/update_schedule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UpdateScheduleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The device in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/update_schedule#device UpdateSchedule#device}
  */
  readonly device?: string;
  /**
  * The folder in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/update_schedule#folder UpdateSchedule#folder}
  */
  readonly folder?: string;
  /**
  * The snippet in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/update_schedule#snippet UpdateSchedule#snippet}
  */
  readonly snippet?: string;
  /**
  * Update schedule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/update_schedule#update_schedule UpdateSchedule#update_schedule}
  */
  readonly updateSchedule?: UpdateScheduleUpdateSchedule;
}
export interface UpdateScheduleUpdateScheduleAntiVirusRecurringDaily {
  /**
  * Action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/update_schedule#action UpdateSchedule#action}
  */
  readonly action?: string;
  /**
  * At
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/update_schedule#at UpdateSchedule#at}
  */
  readonly at: string;
}

export function updateScheduleUpdateScheduleAntiVirusRecurringDailyToTerraform(struct?: UpdateScheduleUpdateScheduleAntiVirusRecurringDaily | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    at: cdktf.stringToTerraform(struct!.at),
  }
}


export function updateScheduleUpdateScheduleAntiVirusRecurringDailyToHclTerraform(struct?: UpdateScheduleUpdateScheduleAntiVirusRecurringDaily | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    at: {
      value: cdktf.stringToHclTerraform(struct!.at),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpdateScheduleUpdateScheduleAntiVirusRecurringDailyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UpdateScheduleUpdateScheduleAntiVirusRecurringDaily | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._at !== undefined) {
      hasAnyValues = true;
      internalValueResult.at = this._at;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpdateScheduleUpdateScheduleAntiVirusRecurringDaily | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._at = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._at = value.at;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // at - computed: false, optional: false, required: true
  private _at?: string; 
  public get at() {
    return this.getStringAttribute('at');
  }
  public set at(value: string) {
    this._at = value;
  }
  // Temporarily expose input value. Use with caution.
  public get atInput() {
    return this._at;
  }
}
export interface UpdateScheduleUpdateScheduleAntiVirusRecurringHourly {
  /**
  * Action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/update_schedule#action UpdateSchedule#action}
  */
  readonly action?: string;
  /**
  * At
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/update_schedule#at UpdateSchedule#at}
  */
  readonly at: number;
}

export function updateScheduleUpdateScheduleAntiVirusRecurringHourlyToTerraform(struct?: UpdateScheduleUpdateScheduleAntiVirusRecurringHourly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    at: cdktf.numberToTerraform(struct!.at),
  }
}


export function updateScheduleUpdateScheduleAntiVirusRecurringHourlyToHclTerraform(struct?: UpdateScheduleUpdateScheduleAntiVirusRecurringHourly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    at: {
      value: cdktf.numberToHclTerraform(struct!.at),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpdateScheduleUpdateScheduleAntiVirusRecurringHourlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UpdateScheduleUpdateScheduleAntiVirusRecurringHourly | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._at !== undefined) {
      hasAnyValues = true;
      internalValueResult.at = this._at;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpdateScheduleUpdateScheduleAntiVirusRecurringHourly | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._at = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._at = value.at;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // at - computed: false, optional: false, required: true
  private _at?: number; 
  public get at() {
    return this.getNumberAttribute('at');
  }
  public set at(value: number) {
    this._at = value;
  }
  // Temporarily expose input value. Use with caution.
  public get atInput() {
    return this._at;
  }
}
export interface UpdateScheduleUpdateScheduleAntiVirusRecurringNone {
}

export function updateScheduleUpdateScheduleAntiVirusRecurringNoneToTerraform(struct?: UpdateScheduleUpdateScheduleAntiVirusRecurringNone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function updateScheduleUpdateScheduleAntiVirusRecurringNoneToHclTerraform(struct?: UpdateScheduleUpdateScheduleAntiVirusRecurringNone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UpdateScheduleUpdateScheduleAntiVirusRecurringNoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UpdateScheduleUpdateScheduleAntiVirusRecurringNone | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpdateScheduleUpdateScheduleAntiVirusRecurringNone | cdktf.IResolvable | undefined) {
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
export interface UpdateScheduleUpdateScheduleAntiVirusRecurringWeekly {
  /**
  * Action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/update_schedule#action UpdateSchedule#action}
  */
  readonly action?: string;
  /**
  * At
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/update_schedule#at UpdateSchedule#at}
  */
  readonly at?: string;
  /**
  * Day of week
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/update_schedule#day_of_week UpdateSchedule#day_of_week}
  */
  readonly dayOfWeek?: string;
}

export function updateScheduleUpdateScheduleAntiVirusRecurringWeeklyToTerraform(struct?: UpdateScheduleUpdateScheduleAntiVirusRecurringWeekly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    at: cdktf.stringToTerraform(struct!.at),
    day_of_week: cdktf.stringToTerraform(struct!.dayOfWeek),
  }
}


export function updateScheduleUpdateScheduleAntiVirusRecurringWeeklyToHclTerraform(struct?: UpdateScheduleUpdateScheduleAntiVirusRecurringWeekly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    at: {
      value: cdktf.stringToHclTerraform(struct!.at),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpdateScheduleUpdateScheduleAntiVirusRecurringWeeklyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UpdateScheduleUpdateScheduleAntiVirusRecurringWeekly | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._at !== undefined) {
      hasAnyValues = true;
      internalValueResult.at = this._at;
    }
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpdateScheduleUpdateScheduleAntiVirusRecurringWeekly | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._at = undefined;
      this._dayOfWeek = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._at = value.at;
      this._dayOfWeek = value.dayOfWeek;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // at - computed: false, optional: true, required: false
  private _at?: string; 
  public get at() {
    return this.getStringAttribute('at');
  }
  public set at(value: string) {
    this._at = value;
  }
  public resetAt() {
    this._at = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atInput() {
    return this._at;
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
}
export interface UpdateScheduleUpdateScheduleAntiVirusRecurring {
  /**
  * Daily
  * > ℹ️ **Note:** You must specify exactly one of `daily`, `hourly`, `none`, and `weekly`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/update_schedule#daily UpdateSchedule#daily}
  */
  readonly daily?: UpdateScheduleUpdateScheduleAntiVirusRecurringDaily;
  /**
  * Hourly
  * > ℹ️ **Note:** You must specify exactly one of `daily`, `hourly`, `none`, and `weekly`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/update_schedule#hourly UpdateSchedule#hourly}
  */
  readonly hourly?: UpdateScheduleUpdateScheduleAntiVirusRecurringHourly;
  /**
  * None
  * > ℹ️ **Note:** You must specify exactly one of `daily`, `hourly`, `none`, and `weekly`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/update_schedule#none UpdateSchedule#none}
  */
  readonly none?: UpdateScheduleUpdateScheduleAntiVirusRecurringNone;
  /**
  * Sync to peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/update_schedule#sync_to_peer UpdateSchedule#sync_to_peer}
  */
  readonly syncToPeer: boolean | cdktf.IResolvable;
  /**
  * Threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/update_schedule#threshold UpdateSchedule#threshold}
  */
  readonly threshold?: number;
  /**
  * Weekly
  * > ℹ️ **Note:** You must specify exactly one of `daily`, `hourly`, `none`, and `weekly`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/update_schedule#weekly UpdateSchedule#weekly}
  */
  readonly weekly?: UpdateScheduleUpdateScheduleAntiVirusRecurringWeekly;
}

export function updateScheduleUpdateScheduleAntiVirusRecurringToTerraform(struct?: UpdateScheduleUpdateScheduleAntiVirusRecurring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    daily: updateScheduleUpdateScheduleAntiVirusRecurringDailyToTerraform(struct!.daily),
    hourly: updateScheduleUpdateScheduleAntiVirusRecurringHourlyToTerraform(struct!.hourly),
    none: updateScheduleUpdateScheduleAntiVirusRecurringNoneToTerraform(struct!.none),
    sync_to_peer: cdktf.booleanToTerraform(struct!.syncToPeer),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    weekly: updateScheduleUpdateScheduleAntiVirusRecurringWeeklyToTerraform(struct!.weekly),
  }
}


export function updateScheduleUpdateScheduleAntiVirusRecurringToHclTerraform(struct?: UpdateScheduleUpdateScheduleAntiVirusRecurring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    daily: {
      value: updateScheduleUpdateScheduleAntiVirusRecurringDailyToHclTerraform(struct!.daily),
      isBlock: true,
      type: "struct",
      storageClassType: "UpdateScheduleUpdateScheduleAntiVirusRecurringDaily",
    },
    hourly: {
      value: updateScheduleUpdateScheduleAntiVirusRecurringHourlyToHclTerraform(struct!.hourly),
      isBlock: true,
      type: "struct",
      storageClassType: "UpdateScheduleUpdateScheduleAntiVirusRecurringHourly",
    },
    none: {
      value: updateScheduleUpdateScheduleAntiVirusRecurringNoneToHclTerraform(struct!.none),
      isBlock: true,
      type: "struct",
      storageClassType: "UpdateScheduleUpdateScheduleAntiVirusRecurringNone",
    },
    sync_to_peer: {
      value: cdktf.booleanToHclTerraform(struct!.syncToPeer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    weekly: {
      value: updateScheduleUpdateScheduleAntiVirusRecurringWeeklyToHclTerraform(struct!.weekly),
      isBlock: true,
      type: "struct",
      storageClassType: "UpdateScheduleUpdateScheduleAntiVirusRecurringWeekly",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpdateScheduleUpdateScheduleAntiVirusRecurringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UpdateScheduleUpdateScheduleAntiVirusRecurring | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daily?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.daily = this._daily?.internalValue;
    }
    if (this._hourly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hourly = this._hourly?.internalValue;
    }
    if (this._none?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.none = this._none?.internalValue;
    }
    if (this._syncToPeer !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncToPeer = this._syncToPeer;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._weekly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekly = this._weekly?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpdateScheduleUpdateScheduleAntiVirusRecurring | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._daily.internalValue = undefined;
      this._hourly.internalValue = undefined;
      this._none.internalValue = undefined;
      this._syncToPeer = undefined;
      this._threshold = undefined;
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
      this._hourly.internalValue = value.hourly;
      this._none.internalValue = value.none;
      this._syncToPeer = value.syncToPeer;
      this._threshold = value.threshold;
      this._weekly.internalValue = value.weekly;
    }
  }

  // daily - computed: false, optional: true, required: false
  private _daily = new UpdateScheduleUpdateScheduleAntiVirusRecurringDailyOutputReference(this, "daily");
  public get daily() {
    return this._daily;
  }
  public putDaily(value: UpdateScheduleUpdateScheduleAntiVirusRecurringDaily) {
    this._daily.internalValue = value;
  }
  public resetDaily() {
    this._daily.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyInput() {
    return this._daily.internalValue;
  }

  // hourly - computed: false, optional: true, required: false
  private _hourly = new UpdateScheduleUpdateScheduleAntiVirusRecurringHourlyOutputReference(this, "hourly");
  public get hourly() {
    return this._hourly;
  }
  public putHourly(value: UpdateScheduleUpdateScheduleAntiVirusRecurringHourly) {
    this._hourly.internalValue = value;
  }
  public resetHourly() {
    this._hourly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourlyInput() {
    return this._hourly.internalValue;
  }

  // none - computed: false, optional: true, required: false
  private _none = new UpdateScheduleUpdateScheduleAntiVirusRecurringNoneOutputReference(this, "none");
  public get none() {
    return this._none;
  }
  public putNone(value: UpdateScheduleUpdateScheduleAntiVirusRecurringNone) {
    this._none.internalValue = value;
  }
  public resetNone() {
    this._none.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneInput() {
    return this._none.internalValue;
  }

  // sync_to_peer - computed: false, optional: false, required: true
  private _syncToPeer?: boolean | cdktf.IResolvable; 
  public get syncToPeer() {
    return this.getBooleanAttribute('sync_to_peer');
  }
  public set syncToPeer(value: boolean | cdktf.IResolvable) {
    this._syncToPeer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get syncToPeerInput() {
    return this._syncToPeer;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // weekly - computed: false, optional: true, required: false
  private _weekly = new UpdateScheduleUpdateScheduleAntiVirusRecurringWeeklyOutputReference(this, "weekly");
  public get weekly() {
    return this._weekly;
  }
  public putWeekly(value: UpdateScheduleUpdateScheduleAntiVirusRecurringWeekly) {
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
export interface UpdateScheduleUpdateScheduleAntiVirus {
  /**
  * Recurring
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/update_schedule#recurring UpdateSchedule#recurring}
  */
  readonly recurring: UpdateScheduleUpdateScheduleAntiVirusRecurring;
}

export function updateScheduleUpdateScheduleAntiVirusToTerraform(struct?: UpdateScheduleUpdateScheduleAntiVirus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    recurring: updateScheduleUpdateScheduleAntiVirusRecurringToTerraform(struct!.recurring),
  }
}


export function updateScheduleUpdateScheduleAntiVirusToHclTerraform(struct?: UpdateScheduleUpdateScheduleAntiVirus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    recurring: {
      value: updateScheduleUpdateScheduleAntiVirusRecurringToHclTerraform(struct!.recurring),
      isBlock: true,
      type: "struct",
      storageClassType: "UpdateScheduleUpdateScheduleAntiVirusRecurring",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpdateScheduleUpdateScheduleAntiVirusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UpdateScheduleUpdateScheduleAntiVirus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recurring?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurring = this._recurring?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpdateScheduleUpdateScheduleAntiVirus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._recurring.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._recurring.internalValue = value.recurring;
    }
  }

  // recurring - computed: false, optional: false, required: true
  private _recurring = new UpdateScheduleUpdateScheduleAntiVirusRecurringOutputReference(this, "recurring");
  public get recurring() {
    return this._recurring;
  }
  public putRecurring(value: UpdateScheduleUpdateScheduleAntiVirusRecurring) {
    this._recurring.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recurringInput() {
    return this._recurring.internalValue;
  }
}
export interface UpdateScheduleUpdateScheduleThreatsRecurringDaily {
  /**
  * Action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/update_schedule#action UpdateSchedule#action}
  */
  readonly action?: string;
  /**
  * At
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/update_schedule#at UpdateSchedule#at}
  */
  readonly at: string;
  /**
  * Disable new content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/update_schedule#disable_new_content UpdateSchedule#disable_new_content}
  */
  readonly disableNewContent?: boolean | cdktf.IResolvable;
}

export function updateScheduleUpdateScheduleThreatsRecurringDailyToTerraform(struct?: UpdateScheduleUpdateScheduleThreatsRecurringDaily | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    at: cdktf.stringToTerraform(struct!.at),
    disable_new_content: cdktf.booleanToTerraform(struct!.disableNewContent),
  }
}


export function updateScheduleUpdateScheduleThreatsRecurringDailyToHclTerraform(struct?: UpdateScheduleUpdateScheduleThreatsRecurringDaily | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    at: {
      value: cdktf.stringToHclTerraform(struct!.at),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_new_content: {
      value: cdktf.booleanToHclTerraform(struct!.disableNewContent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpdateScheduleUpdateScheduleThreatsRecurringDailyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UpdateScheduleUpdateScheduleThreatsRecurringDaily | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._at !== undefined) {
      hasAnyValues = true;
      internalValueResult.at = this._at;
    }
    if (this._disableNewContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableNewContent = this._disableNewContent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpdateScheduleUpdateScheduleThreatsRecurringDaily | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._at = undefined;
      this._disableNewContent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._at = value.at;
      this._disableNewContent = value.disableNewContent;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // at - computed: false, optional: false, required: true
  private _at?: string; 
  public get at() {
    return this.getStringAttribute('at');
  }
  public set at(value: string) {
    this._at = value;
  }
  // Temporarily expose input value. Use with caution.
  public get atInput() {
    return this._at;
  }

  // disable_new_content - computed: true, optional: true, required: false
  private _disableNewContent?: boolean | cdktf.IResolvable; 
  public get disableNewContent() {
    return this.getBooleanAttribute('disable_new_content');
  }
  public set disableNewContent(value: boolean | cdktf.IResolvable) {
    this._disableNewContent = value;
  }
  public resetDisableNewContent() {
    this._disableNewContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableNewContentInput() {
    return this._disableNewContent;
  }
}
export interface UpdateScheduleUpdateScheduleThreatsRecurringEvery30Mins {
  /**
  * Action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/update_schedule#action UpdateSchedule#action}
  */
  readonly action?: string;
  /**
  * At
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/update_schedule#at UpdateSchedule#at}
  */
  readonly at?: number;
  /**
  * Disable new content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/update_schedule#disable_new_content UpdateSchedule#disable_new_content}
  */
  readonly disableNewContent?: boolean | cdktf.IResolvable;
}

export function updateScheduleUpdateScheduleThreatsRecurringEvery30MinsToTerraform(struct?: UpdateScheduleUpdateScheduleThreatsRecurringEvery30Mins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    at: cdktf.numberToTerraform(struct!.at),
    disable_new_content: cdktf.booleanToTerraform(struct!.disableNewContent),
  }
}


export function updateScheduleUpdateScheduleThreatsRecurringEvery30MinsToHclTerraform(struct?: UpdateScheduleUpdateScheduleThreatsRecurringEvery30Mins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    at: {
      value: cdktf.numberToHclTerraform(struct!.at),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disable_new_content: {
      value: cdktf.booleanToHclTerraform(struct!.disableNewContent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpdateScheduleUpdateScheduleThreatsRecurringEvery30MinsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UpdateScheduleUpdateScheduleThreatsRecurringEvery30Mins | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._at !== undefined) {
      hasAnyValues = true;
      internalValueResult.at = this._at;
    }
    if (this._disableNewContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableNewContent = this._disableNewContent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpdateScheduleUpdateScheduleThreatsRecurringEvery30Mins | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._at = undefined;
      this._disableNewContent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._at = value.at;
      this._disableNewContent = value.disableNewContent;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // at - computed: true, optional: true, required: false
  private _at?: number; 
  public get at() {
    return this.getNumberAttribute('at');
  }
  public set at(value: number) {
    this._at = value;
  }
  public resetAt() {
    this._at = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atInput() {
    return this._at;
  }

  // disable_new_content - computed: true, optional: true, required: false
  private _disableNewContent?: boolean | cdktf.IResolvable; 
  public get disableNewContent() {
    return this.getBooleanAttribute('disable_new_content');
  }
  public set disableNewContent(value: boolean | cdktf.IResolvable) {
    this._disableNewContent = value;
  }
  public resetDisableNewContent() {
    this._disableNewContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableNewContentInput() {
    return this._disableNewContent;
  }
}
export interface UpdateScheduleUpdateScheduleThreatsRecurringHourly {
  /**
  * Action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/update_schedule#action UpdateSchedule#action}
  */
  readonly action?: string;
  /**
  * At
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/update_schedule#at UpdateSchedule#at}
  */
  readonly at: number;
  /**
  * Disable new content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/update_schedule#disable_new_content UpdateSchedule#disable_new_content}
  */
  readonly disableNewContent?: boolean | cdktf.IResolvable;
}

export function updateScheduleUpdateScheduleThreatsRecurringHourlyToTerraform(struct?: UpdateScheduleUpdateScheduleThreatsRecurringHourly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    at: cdktf.numberToTerraform(struct!.at),
    disable_new_content: cdktf.booleanToTerraform(struct!.disableNewContent),
  }
}


export function updateScheduleUpdateScheduleThreatsRecurringHourlyToHclTerraform(struct?: UpdateScheduleUpdateScheduleThreatsRecurringHourly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    at: {
      value: cdktf.numberToHclTerraform(struct!.at),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disable_new_content: {
      value: cdktf.booleanToHclTerraform(struct!.disableNewContent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpdateScheduleUpdateScheduleThreatsRecurringHourlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UpdateScheduleUpdateScheduleThreatsRecurringHourly | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._at !== undefined) {
      hasAnyValues = true;
      internalValueResult.at = this._at;
    }
    if (this._disableNewContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableNewContent = this._disableNewContent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpdateScheduleUpdateScheduleThreatsRecurringHourly | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._at = undefined;
      this._disableNewContent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._at = value.at;
      this._disableNewContent = value.disableNewContent;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // at - computed: false, optional: false, required: true
  private _at?: number; 
  public get at() {
    return this.getNumberAttribute('at');
  }
  public set at(value: number) {
    this._at = value;
  }
  // Temporarily expose input value. Use with caution.
  public get atInput() {
    return this._at;
  }

  // disable_new_content - computed: true, optional: true, required: false
  private _disableNewContent?: boolean | cdktf.IResolvable; 
  public get disableNewContent() {
    return this.getBooleanAttribute('disable_new_content');
  }
  public set disableNewContent(value: boolean | cdktf.IResolvable) {
    this._disableNewContent = value;
  }
  public resetDisableNewContent() {
    this._disableNewContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableNewContentInput() {
    return this._disableNewContent;
  }
}
export interface UpdateScheduleUpdateScheduleThreatsRecurringNone {
}

export function updateScheduleUpdateScheduleThreatsRecurringNoneToTerraform(struct?: UpdateScheduleUpdateScheduleThreatsRecurringNone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function updateScheduleUpdateScheduleThreatsRecurringNoneToHclTerraform(struct?: UpdateScheduleUpdateScheduleThreatsRecurringNone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UpdateScheduleUpdateScheduleThreatsRecurringNoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UpdateScheduleUpdateScheduleThreatsRecurringNone | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpdateScheduleUpdateScheduleThreatsRecurringNone | cdktf.IResolvable | undefined) {
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
export interface UpdateScheduleUpdateScheduleThreatsRecurringWeekly {
  /**
  * Action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/update_schedule#action UpdateSchedule#action}
  */
  readonly action?: string;
  /**
  * At
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/update_schedule#at UpdateSchedule#at}
  */
  readonly at: string;
  /**
  * Day of week
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/update_schedule#day_of_week UpdateSchedule#day_of_week}
  */
  readonly dayOfWeek: string;
  /**
  * Disable new content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/update_schedule#disable_new_content UpdateSchedule#disable_new_content}
  */
  readonly disableNewContent?: boolean | cdktf.IResolvable;
}

export function updateScheduleUpdateScheduleThreatsRecurringWeeklyToTerraform(struct?: UpdateScheduleUpdateScheduleThreatsRecurringWeekly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    at: cdktf.stringToTerraform(struct!.at),
    day_of_week: cdktf.stringToTerraform(struct!.dayOfWeek),
    disable_new_content: cdktf.booleanToTerraform(struct!.disableNewContent),
  }
}


export function updateScheduleUpdateScheduleThreatsRecurringWeeklyToHclTerraform(struct?: UpdateScheduleUpdateScheduleThreatsRecurringWeekly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    at: {
      value: cdktf.stringToHclTerraform(struct!.at),
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
    disable_new_content: {
      value: cdktf.booleanToHclTerraform(struct!.disableNewContent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpdateScheduleUpdateScheduleThreatsRecurringWeeklyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UpdateScheduleUpdateScheduleThreatsRecurringWeekly | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._at !== undefined) {
      hasAnyValues = true;
      internalValueResult.at = this._at;
    }
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    if (this._disableNewContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableNewContent = this._disableNewContent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpdateScheduleUpdateScheduleThreatsRecurringWeekly | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._at = undefined;
      this._dayOfWeek = undefined;
      this._disableNewContent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._at = value.at;
      this._dayOfWeek = value.dayOfWeek;
      this._disableNewContent = value.disableNewContent;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // at - computed: false, optional: false, required: true
  private _at?: string; 
  public get at() {
    return this.getStringAttribute('at');
  }
  public set at(value: string) {
    this._at = value;
  }
  // Temporarily expose input value. Use with caution.
  public get atInput() {
    return this._at;
  }

  // day_of_week - computed: false, optional: false, required: true
  private _dayOfWeek?: string; 
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }
  public set dayOfWeek(value: string) {
    this._dayOfWeek = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }

  // disable_new_content - computed: true, optional: true, required: false
  private _disableNewContent?: boolean | cdktf.IResolvable; 
  public get disableNewContent() {
    return this.getBooleanAttribute('disable_new_content');
  }
  public set disableNewContent(value: boolean | cdktf.IResolvable) {
    this._disableNewContent = value;
  }
  public resetDisableNewContent() {
    this._disableNewContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableNewContentInput() {
    return this._disableNewContent;
  }
}
export interface UpdateScheduleUpdateScheduleThreatsRecurring {
  /**
  * Daily
  * > ℹ️ **Note:** You must specify exactly one of `daily`, `every_30_mins`, `hourly`, `none`, and `weekly`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/update_schedule#daily UpdateSchedule#daily}
  */
  readonly daily?: UpdateScheduleUpdateScheduleThreatsRecurringDaily;
  /**
  * Every30 mins
  * > ℹ️ **Note:** You must specify exactly one of `daily`, `every_30_mins`, `hourly`, `none`, and `weekly`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/update_schedule#every_30_mins UpdateSchedule#every_30_mins}
  */
  readonly every30Mins?: UpdateScheduleUpdateScheduleThreatsRecurringEvery30Mins;
  /**
  * Hourly
  * > ℹ️ **Note:** You must specify exactly one of `daily`, `every_30_mins`, `hourly`, `none`, and `weekly`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/update_schedule#hourly UpdateSchedule#hourly}
  */
  readonly hourly?: UpdateScheduleUpdateScheduleThreatsRecurringHourly;
  /**
  * New app threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/update_schedule#new_app_threshold UpdateSchedule#new_app_threshold}
  */
  readonly newAppThreshold?: number;
  /**
  * None
  * > ℹ️ **Note:** You must specify exactly one of `daily`, `every_30_mins`, `hourly`, `none`, and `weekly`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/update_schedule#none UpdateSchedule#none}
  */
  readonly none?: UpdateScheduleUpdateScheduleThreatsRecurringNone;
  /**
  * Sync to peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/update_schedule#sync_to_peer UpdateSchedule#sync_to_peer}
  */
  readonly syncToPeer: boolean | cdktf.IResolvable;
  /**
  * Threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/update_schedule#threshold UpdateSchedule#threshold}
  */
  readonly threshold?: number;
  /**
  * Weekly
  * > ℹ️ **Note:** You must specify exactly one of `daily`, `every_30_mins`, `hourly`, `none`, and `weekly`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/update_schedule#weekly UpdateSchedule#weekly}
  */
  readonly weekly?: UpdateScheduleUpdateScheduleThreatsRecurringWeekly;
}

export function updateScheduleUpdateScheduleThreatsRecurringToTerraform(struct?: UpdateScheduleUpdateScheduleThreatsRecurring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    daily: updateScheduleUpdateScheduleThreatsRecurringDailyToTerraform(struct!.daily),
    every_30_mins: updateScheduleUpdateScheduleThreatsRecurringEvery30MinsToTerraform(struct!.every30Mins),
    hourly: updateScheduleUpdateScheduleThreatsRecurringHourlyToTerraform(struct!.hourly),
    new_app_threshold: cdktf.numberToTerraform(struct!.newAppThreshold),
    none: updateScheduleUpdateScheduleThreatsRecurringNoneToTerraform(struct!.none),
    sync_to_peer: cdktf.booleanToTerraform(struct!.syncToPeer),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    weekly: updateScheduleUpdateScheduleThreatsRecurringWeeklyToTerraform(struct!.weekly),
  }
}


export function updateScheduleUpdateScheduleThreatsRecurringToHclTerraform(struct?: UpdateScheduleUpdateScheduleThreatsRecurring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    daily: {
      value: updateScheduleUpdateScheduleThreatsRecurringDailyToHclTerraform(struct!.daily),
      isBlock: true,
      type: "struct",
      storageClassType: "UpdateScheduleUpdateScheduleThreatsRecurringDaily",
    },
    every_30_mins: {
      value: updateScheduleUpdateScheduleThreatsRecurringEvery30MinsToHclTerraform(struct!.every30Mins),
      isBlock: true,
      type: "struct",
      storageClassType: "UpdateScheduleUpdateScheduleThreatsRecurringEvery30Mins",
    },
    hourly: {
      value: updateScheduleUpdateScheduleThreatsRecurringHourlyToHclTerraform(struct!.hourly),
      isBlock: true,
      type: "struct",
      storageClassType: "UpdateScheduleUpdateScheduleThreatsRecurringHourly",
    },
    new_app_threshold: {
      value: cdktf.numberToHclTerraform(struct!.newAppThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    none: {
      value: updateScheduleUpdateScheduleThreatsRecurringNoneToHclTerraform(struct!.none),
      isBlock: true,
      type: "struct",
      storageClassType: "UpdateScheduleUpdateScheduleThreatsRecurringNone",
    },
    sync_to_peer: {
      value: cdktf.booleanToHclTerraform(struct!.syncToPeer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    weekly: {
      value: updateScheduleUpdateScheduleThreatsRecurringWeeklyToHclTerraform(struct!.weekly),
      isBlock: true,
      type: "struct",
      storageClassType: "UpdateScheduleUpdateScheduleThreatsRecurringWeekly",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpdateScheduleUpdateScheduleThreatsRecurringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UpdateScheduleUpdateScheduleThreatsRecurring | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daily?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.daily = this._daily?.internalValue;
    }
    if (this._every30Mins?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.every30Mins = this._every30Mins?.internalValue;
    }
    if (this._hourly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hourly = this._hourly?.internalValue;
    }
    if (this._newAppThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.newAppThreshold = this._newAppThreshold;
    }
    if (this._none?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.none = this._none?.internalValue;
    }
    if (this._syncToPeer !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncToPeer = this._syncToPeer;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._weekly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekly = this._weekly?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpdateScheduleUpdateScheduleThreatsRecurring | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._daily.internalValue = undefined;
      this._every30Mins.internalValue = undefined;
      this._hourly.internalValue = undefined;
      this._newAppThreshold = undefined;
      this._none.internalValue = undefined;
      this._syncToPeer = undefined;
      this._threshold = undefined;
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
      this._every30Mins.internalValue = value.every30Mins;
      this._hourly.internalValue = value.hourly;
      this._newAppThreshold = value.newAppThreshold;
      this._none.internalValue = value.none;
      this._syncToPeer = value.syncToPeer;
      this._threshold = value.threshold;
      this._weekly.internalValue = value.weekly;
    }
  }

  // daily - computed: false, optional: true, required: false
  private _daily = new UpdateScheduleUpdateScheduleThreatsRecurringDailyOutputReference(this, "daily");
  public get daily() {
    return this._daily;
  }
  public putDaily(value: UpdateScheduleUpdateScheduleThreatsRecurringDaily) {
    this._daily.internalValue = value;
  }
  public resetDaily() {
    this._daily.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyInput() {
    return this._daily.internalValue;
  }

  // every_30_mins - computed: false, optional: true, required: false
  private _every30Mins = new UpdateScheduleUpdateScheduleThreatsRecurringEvery30MinsOutputReference(this, "every_30_mins");
  public get every30Mins() {
    return this._every30Mins;
  }
  public putEvery30Mins(value: UpdateScheduleUpdateScheduleThreatsRecurringEvery30Mins) {
    this._every30Mins.internalValue = value;
  }
  public resetEvery30Mins() {
    this._every30Mins.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get every30MinsInput() {
    return this._every30Mins.internalValue;
  }

  // hourly - computed: false, optional: true, required: false
  private _hourly = new UpdateScheduleUpdateScheduleThreatsRecurringHourlyOutputReference(this, "hourly");
  public get hourly() {
    return this._hourly;
  }
  public putHourly(value: UpdateScheduleUpdateScheduleThreatsRecurringHourly) {
    this._hourly.internalValue = value;
  }
  public resetHourly() {
    this._hourly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourlyInput() {
    return this._hourly.internalValue;
  }

  // new_app_threshold - computed: false, optional: true, required: false
  private _newAppThreshold?: number; 
  public get newAppThreshold() {
    return this.getNumberAttribute('new_app_threshold');
  }
  public set newAppThreshold(value: number) {
    this._newAppThreshold = value;
  }
  public resetNewAppThreshold() {
    this._newAppThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newAppThresholdInput() {
    return this._newAppThreshold;
  }

  // none - computed: false, optional: true, required: false
  private _none = new UpdateScheduleUpdateScheduleThreatsRecurringNoneOutputReference(this, "none");
  public get none() {
    return this._none;
  }
  public putNone(value: UpdateScheduleUpdateScheduleThreatsRecurringNone) {
    this._none.internalValue = value;
  }
  public resetNone() {
    this._none.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneInput() {
    return this._none.internalValue;
  }

  // sync_to_peer - computed: false, optional: false, required: true
  private _syncToPeer?: boolean | cdktf.IResolvable; 
  public get syncToPeer() {
    return this.getBooleanAttribute('sync_to_peer');
  }
  public set syncToPeer(value: boolean | cdktf.IResolvable) {
    this._syncToPeer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get syncToPeerInput() {
    return this._syncToPeer;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // weekly - computed: false, optional: true, required: false
  private _weekly = new UpdateScheduleUpdateScheduleThreatsRecurringWeeklyOutputReference(this, "weekly");
  public get weekly() {
    return this._weekly;
  }
  public putWeekly(value: UpdateScheduleUpdateScheduleThreatsRecurringWeekly) {
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
export interface UpdateScheduleUpdateScheduleThreats {
  /**
  * Recurring
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/update_schedule#recurring UpdateSchedule#recurring}
  */
  readonly recurring: UpdateScheduleUpdateScheduleThreatsRecurring;
}

export function updateScheduleUpdateScheduleThreatsToTerraform(struct?: UpdateScheduleUpdateScheduleThreats | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    recurring: updateScheduleUpdateScheduleThreatsRecurringToTerraform(struct!.recurring),
  }
}


export function updateScheduleUpdateScheduleThreatsToHclTerraform(struct?: UpdateScheduleUpdateScheduleThreats | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    recurring: {
      value: updateScheduleUpdateScheduleThreatsRecurringToHclTerraform(struct!.recurring),
      isBlock: true,
      type: "struct",
      storageClassType: "UpdateScheduleUpdateScheduleThreatsRecurring",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpdateScheduleUpdateScheduleThreatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UpdateScheduleUpdateScheduleThreats | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recurring?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurring = this._recurring?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpdateScheduleUpdateScheduleThreats | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._recurring.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._recurring.internalValue = value.recurring;
    }
  }

  // recurring - computed: false, optional: false, required: true
  private _recurring = new UpdateScheduleUpdateScheduleThreatsRecurringOutputReference(this, "recurring");
  public get recurring() {
    return this._recurring;
  }
  public putRecurring(value: UpdateScheduleUpdateScheduleThreatsRecurring) {
    this._recurring.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recurringInput() {
    return this._recurring.internalValue;
  }
}
export interface UpdateScheduleUpdateScheduleWildfireRecurringEvery15Mins {
  /**
  * Action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/update_schedule#action UpdateSchedule#action}
  */
  readonly action?: string;
  /**
  * At
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/update_schedule#at UpdateSchedule#at}
  */
  readonly at?: number;
  /**
  * Sync to peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/update_schedule#sync_to_peer UpdateSchedule#sync_to_peer}
  */
  readonly syncToPeer?: boolean | cdktf.IResolvable;
}

export function updateScheduleUpdateScheduleWildfireRecurringEvery15MinsToTerraform(struct?: UpdateScheduleUpdateScheduleWildfireRecurringEvery15Mins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    at: cdktf.numberToTerraform(struct!.at),
    sync_to_peer: cdktf.booleanToTerraform(struct!.syncToPeer),
  }
}


export function updateScheduleUpdateScheduleWildfireRecurringEvery15MinsToHclTerraform(struct?: UpdateScheduleUpdateScheduleWildfireRecurringEvery15Mins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    at: {
      value: cdktf.numberToHclTerraform(struct!.at),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_to_peer: {
      value: cdktf.booleanToHclTerraform(struct!.syncToPeer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpdateScheduleUpdateScheduleWildfireRecurringEvery15MinsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UpdateScheduleUpdateScheduleWildfireRecurringEvery15Mins | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._at !== undefined) {
      hasAnyValues = true;
      internalValueResult.at = this._at;
    }
    if (this._syncToPeer !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncToPeer = this._syncToPeer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpdateScheduleUpdateScheduleWildfireRecurringEvery15Mins | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._at = undefined;
      this._syncToPeer = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._at = value.at;
      this._syncToPeer = value.syncToPeer;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // at - computed: true, optional: true, required: false
  private _at?: number; 
  public get at() {
    return this.getNumberAttribute('at');
  }
  public set at(value: number) {
    this._at = value;
  }
  public resetAt() {
    this._at = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atInput() {
    return this._at;
  }

  // sync_to_peer - computed: true, optional: true, required: false
  private _syncToPeer?: boolean | cdktf.IResolvable; 
  public get syncToPeer() {
    return this.getBooleanAttribute('sync_to_peer');
  }
  public set syncToPeer(value: boolean | cdktf.IResolvable) {
    this._syncToPeer = value;
  }
  public resetSyncToPeer() {
    this._syncToPeer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncToPeerInput() {
    return this._syncToPeer;
  }
}
export interface UpdateScheduleUpdateScheduleWildfireRecurringEvery30Mins {
  /**
  * Action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/update_schedule#action UpdateSchedule#action}
  */
  readonly action?: string;
  /**
  * At
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/update_schedule#at UpdateSchedule#at}
  */
  readonly at?: number;
  /**
  * Sync to peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/update_schedule#sync_to_peer UpdateSchedule#sync_to_peer}
  */
  readonly syncToPeer?: boolean | cdktf.IResolvable;
}

export function updateScheduleUpdateScheduleWildfireRecurringEvery30MinsToTerraform(struct?: UpdateScheduleUpdateScheduleWildfireRecurringEvery30Mins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    at: cdktf.numberToTerraform(struct!.at),
    sync_to_peer: cdktf.booleanToTerraform(struct!.syncToPeer),
  }
}


export function updateScheduleUpdateScheduleWildfireRecurringEvery30MinsToHclTerraform(struct?: UpdateScheduleUpdateScheduleWildfireRecurringEvery30Mins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    at: {
      value: cdktf.numberToHclTerraform(struct!.at),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_to_peer: {
      value: cdktf.booleanToHclTerraform(struct!.syncToPeer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpdateScheduleUpdateScheduleWildfireRecurringEvery30MinsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UpdateScheduleUpdateScheduleWildfireRecurringEvery30Mins | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._at !== undefined) {
      hasAnyValues = true;
      internalValueResult.at = this._at;
    }
    if (this._syncToPeer !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncToPeer = this._syncToPeer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpdateScheduleUpdateScheduleWildfireRecurringEvery30Mins | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._at = undefined;
      this._syncToPeer = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._at = value.at;
      this._syncToPeer = value.syncToPeer;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // at - computed: true, optional: true, required: false
  private _at?: number; 
  public get at() {
    return this.getNumberAttribute('at');
  }
  public set at(value: number) {
    this._at = value;
  }
  public resetAt() {
    this._at = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atInput() {
    return this._at;
  }

  // sync_to_peer - computed: true, optional: true, required: false
  private _syncToPeer?: boolean | cdktf.IResolvable; 
  public get syncToPeer() {
    return this.getBooleanAttribute('sync_to_peer');
  }
  public set syncToPeer(value: boolean | cdktf.IResolvable) {
    this._syncToPeer = value;
  }
  public resetSyncToPeer() {
    this._syncToPeer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncToPeerInput() {
    return this._syncToPeer;
  }
}
export interface UpdateScheduleUpdateScheduleWildfireRecurringEveryHour {
  /**
  * Action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/update_schedule#action UpdateSchedule#action}
  */
  readonly action?: string;
  /**
  * At
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/update_schedule#at UpdateSchedule#at}
  */
  readonly at?: number;
  /**
  * Sync to peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/update_schedule#sync_to_peer UpdateSchedule#sync_to_peer}
  */
  readonly syncToPeer?: boolean | cdktf.IResolvable;
}

export function updateScheduleUpdateScheduleWildfireRecurringEveryHourToTerraform(struct?: UpdateScheduleUpdateScheduleWildfireRecurringEveryHour | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    at: cdktf.numberToTerraform(struct!.at),
    sync_to_peer: cdktf.booleanToTerraform(struct!.syncToPeer),
  }
}


export function updateScheduleUpdateScheduleWildfireRecurringEveryHourToHclTerraform(struct?: UpdateScheduleUpdateScheduleWildfireRecurringEveryHour | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    at: {
      value: cdktf.numberToHclTerraform(struct!.at),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_to_peer: {
      value: cdktf.booleanToHclTerraform(struct!.syncToPeer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpdateScheduleUpdateScheduleWildfireRecurringEveryHourOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UpdateScheduleUpdateScheduleWildfireRecurringEveryHour | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._at !== undefined) {
      hasAnyValues = true;
      internalValueResult.at = this._at;
    }
    if (this._syncToPeer !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncToPeer = this._syncToPeer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpdateScheduleUpdateScheduleWildfireRecurringEveryHour | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._at = undefined;
      this._syncToPeer = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._at = value.at;
      this._syncToPeer = value.syncToPeer;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // at - computed: true, optional: true, required: false
  private _at?: number; 
  public get at() {
    return this.getNumberAttribute('at');
  }
  public set at(value: number) {
    this._at = value;
  }
  public resetAt() {
    this._at = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atInput() {
    return this._at;
  }

  // sync_to_peer - computed: true, optional: true, required: false
  private _syncToPeer?: boolean | cdktf.IResolvable; 
  public get syncToPeer() {
    return this.getBooleanAttribute('sync_to_peer');
  }
  public set syncToPeer(value: boolean | cdktf.IResolvable) {
    this._syncToPeer = value;
  }
  public resetSyncToPeer() {
    this._syncToPeer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncToPeerInput() {
    return this._syncToPeer;
  }
}
export interface UpdateScheduleUpdateScheduleWildfireRecurringEveryMin {
  /**
  * Action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/update_schedule#action UpdateSchedule#action}
  */
  readonly action?: string;
  /**
  * Sync to peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/update_schedule#sync_to_peer UpdateSchedule#sync_to_peer}
  */
  readonly syncToPeer?: boolean | cdktf.IResolvable;
}

export function updateScheduleUpdateScheduleWildfireRecurringEveryMinToTerraform(struct?: UpdateScheduleUpdateScheduleWildfireRecurringEveryMin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    sync_to_peer: cdktf.booleanToTerraform(struct!.syncToPeer),
  }
}


export function updateScheduleUpdateScheduleWildfireRecurringEveryMinToHclTerraform(struct?: UpdateScheduleUpdateScheduleWildfireRecurringEveryMin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sync_to_peer: {
      value: cdktf.booleanToHclTerraform(struct!.syncToPeer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpdateScheduleUpdateScheduleWildfireRecurringEveryMinOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UpdateScheduleUpdateScheduleWildfireRecurringEveryMin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._syncToPeer !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncToPeer = this._syncToPeer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpdateScheduleUpdateScheduleWildfireRecurringEveryMin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._syncToPeer = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._syncToPeer = value.syncToPeer;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // sync_to_peer - computed: true, optional: true, required: false
  private _syncToPeer?: boolean | cdktf.IResolvable; 
  public get syncToPeer() {
    return this.getBooleanAttribute('sync_to_peer');
  }
  public set syncToPeer(value: boolean | cdktf.IResolvable) {
    this._syncToPeer = value;
  }
  public resetSyncToPeer() {
    this._syncToPeer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncToPeerInput() {
    return this._syncToPeer;
  }
}
export interface UpdateScheduleUpdateScheduleWildfireRecurringNone {
}

export function updateScheduleUpdateScheduleWildfireRecurringNoneToTerraform(struct?: UpdateScheduleUpdateScheduleWildfireRecurringNone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function updateScheduleUpdateScheduleWildfireRecurringNoneToHclTerraform(struct?: UpdateScheduleUpdateScheduleWildfireRecurringNone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UpdateScheduleUpdateScheduleWildfireRecurringNoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UpdateScheduleUpdateScheduleWildfireRecurringNone | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpdateScheduleUpdateScheduleWildfireRecurringNone | cdktf.IResolvable | undefined) {
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
export interface UpdateScheduleUpdateScheduleWildfireRecurringRealTime {
}

export function updateScheduleUpdateScheduleWildfireRecurringRealTimeToTerraform(struct?: UpdateScheduleUpdateScheduleWildfireRecurringRealTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function updateScheduleUpdateScheduleWildfireRecurringRealTimeToHclTerraform(struct?: UpdateScheduleUpdateScheduleWildfireRecurringRealTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UpdateScheduleUpdateScheduleWildfireRecurringRealTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UpdateScheduleUpdateScheduleWildfireRecurringRealTime | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpdateScheduleUpdateScheduleWildfireRecurringRealTime | cdktf.IResolvable | undefined) {
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
export interface UpdateScheduleUpdateScheduleWildfireRecurring {
  /**
  * Every15 mins
  * > ℹ️ **Note:** You must specify exactly one of `every_15_mins`, `every_30_mins`, `every_hour`, `every_min`, `none`, and `real_time`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/update_schedule#every_15_mins UpdateSchedule#every_15_mins}
  */
  readonly every15Mins?: UpdateScheduleUpdateScheduleWildfireRecurringEvery15Mins;
  /**
  * Every30 mins
  * > ℹ️ **Note:** You must specify exactly one of `every_15_mins`, `every_30_mins`, `every_hour`, `every_min`, `none`, and `real_time`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/update_schedule#every_30_mins UpdateSchedule#every_30_mins}
  */
  readonly every30Mins?: UpdateScheduleUpdateScheduleWildfireRecurringEvery30Mins;
  /**
  * Every hour
  * > ℹ️ **Note:** You must specify exactly one of `every_15_mins`, `every_30_mins`, `every_hour`, `every_min`, `none`, and `real_time`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/update_schedule#every_hour UpdateSchedule#every_hour}
  */
  readonly everyHour?: UpdateScheduleUpdateScheduleWildfireRecurringEveryHour;
  /**
  * Every min
  * > ℹ️ **Note:** You must specify exactly one of `every_15_mins`, `every_30_mins`, `every_hour`, `every_min`, `none`, and `real_time`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/update_schedule#every_min UpdateSchedule#every_min}
  */
  readonly everyMin?: UpdateScheduleUpdateScheduleWildfireRecurringEveryMin;
  /**
  * None
  * > ℹ️ **Note:** You must specify exactly one of `every_15_mins`, `every_30_mins`, `every_hour`, `every_min`, `none`, and `real_time`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/update_schedule#none UpdateSchedule#none}
  */
  readonly none?: UpdateScheduleUpdateScheduleWildfireRecurringNone;
  /**
  * Real time
  * > ℹ️ **Note:** You must specify exactly one of `every_15_mins`, `every_30_mins`, `every_hour`, `every_min`, `none`, and `real_time`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/update_schedule#real_time UpdateSchedule#real_time}
  */
  readonly realTime?: UpdateScheduleUpdateScheduleWildfireRecurringRealTime;
}

export function updateScheduleUpdateScheduleWildfireRecurringToTerraform(struct?: UpdateScheduleUpdateScheduleWildfireRecurring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    every_15_mins: updateScheduleUpdateScheduleWildfireRecurringEvery15MinsToTerraform(struct!.every15Mins),
    every_30_mins: updateScheduleUpdateScheduleWildfireRecurringEvery30MinsToTerraform(struct!.every30Mins),
    every_hour: updateScheduleUpdateScheduleWildfireRecurringEveryHourToTerraform(struct!.everyHour),
    every_min: updateScheduleUpdateScheduleWildfireRecurringEveryMinToTerraform(struct!.everyMin),
    none: updateScheduleUpdateScheduleWildfireRecurringNoneToTerraform(struct!.none),
    real_time: updateScheduleUpdateScheduleWildfireRecurringRealTimeToTerraform(struct!.realTime),
  }
}


export function updateScheduleUpdateScheduleWildfireRecurringToHclTerraform(struct?: UpdateScheduleUpdateScheduleWildfireRecurring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    every_15_mins: {
      value: updateScheduleUpdateScheduleWildfireRecurringEvery15MinsToHclTerraform(struct!.every15Mins),
      isBlock: true,
      type: "struct",
      storageClassType: "UpdateScheduleUpdateScheduleWildfireRecurringEvery15Mins",
    },
    every_30_mins: {
      value: updateScheduleUpdateScheduleWildfireRecurringEvery30MinsToHclTerraform(struct!.every30Mins),
      isBlock: true,
      type: "struct",
      storageClassType: "UpdateScheduleUpdateScheduleWildfireRecurringEvery30Mins",
    },
    every_hour: {
      value: updateScheduleUpdateScheduleWildfireRecurringEveryHourToHclTerraform(struct!.everyHour),
      isBlock: true,
      type: "struct",
      storageClassType: "UpdateScheduleUpdateScheduleWildfireRecurringEveryHour",
    },
    every_min: {
      value: updateScheduleUpdateScheduleWildfireRecurringEveryMinToHclTerraform(struct!.everyMin),
      isBlock: true,
      type: "struct",
      storageClassType: "UpdateScheduleUpdateScheduleWildfireRecurringEveryMin",
    },
    none: {
      value: updateScheduleUpdateScheduleWildfireRecurringNoneToHclTerraform(struct!.none),
      isBlock: true,
      type: "struct",
      storageClassType: "UpdateScheduleUpdateScheduleWildfireRecurringNone",
    },
    real_time: {
      value: updateScheduleUpdateScheduleWildfireRecurringRealTimeToHclTerraform(struct!.realTime),
      isBlock: true,
      type: "struct",
      storageClassType: "UpdateScheduleUpdateScheduleWildfireRecurringRealTime",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpdateScheduleUpdateScheduleWildfireRecurringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UpdateScheduleUpdateScheduleWildfireRecurring | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._every15Mins?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.every15Mins = this._every15Mins?.internalValue;
    }
    if (this._every30Mins?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.every30Mins = this._every30Mins?.internalValue;
    }
    if (this._everyHour?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.everyHour = this._everyHour?.internalValue;
    }
    if (this._everyMin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.everyMin = this._everyMin?.internalValue;
    }
    if (this._none?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.none = this._none?.internalValue;
    }
    if (this._realTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.realTime = this._realTime?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpdateScheduleUpdateScheduleWildfireRecurring | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._every15Mins.internalValue = undefined;
      this._every30Mins.internalValue = undefined;
      this._everyHour.internalValue = undefined;
      this._everyMin.internalValue = undefined;
      this._none.internalValue = undefined;
      this._realTime.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._every15Mins.internalValue = value.every15Mins;
      this._every30Mins.internalValue = value.every30Mins;
      this._everyHour.internalValue = value.everyHour;
      this._everyMin.internalValue = value.everyMin;
      this._none.internalValue = value.none;
      this._realTime.internalValue = value.realTime;
    }
  }

  // every_15_mins - computed: false, optional: true, required: false
  private _every15Mins = new UpdateScheduleUpdateScheduleWildfireRecurringEvery15MinsOutputReference(this, "every_15_mins");
  public get every15Mins() {
    return this._every15Mins;
  }
  public putEvery15Mins(value: UpdateScheduleUpdateScheduleWildfireRecurringEvery15Mins) {
    this._every15Mins.internalValue = value;
  }
  public resetEvery15Mins() {
    this._every15Mins.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get every15MinsInput() {
    return this._every15Mins.internalValue;
  }

  // every_30_mins - computed: false, optional: true, required: false
  private _every30Mins = new UpdateScheduleUpdateScheduleWildfireRecurringEvery30MinsOutputReference(this, "every_30_mins");
  public get every30Mins() {
    return this._every30Mins;
  }
  public putEvery30Mins(value: UpdateScheduleUpdateScheduleWildfireRecurringEvery30Mins) {
    this._every30Mins.internalValue = value;
  }
  public resetEvery30Mins() {
    this._every30Mins.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get every30MinsInput() {
    return this._every30Mins.internalValue;
  }

  // every_hour - computed: false, optional: true, required: false
  private _everyHour = new UpdateScheduleUpdateScheduleWildfireRecurringEveryHourOutputReference(this, "every_hour");
  public get everyHour() {
    return this._everyHour;
  }
  public putEveryHour(value: UpdateScheduleUpdateScheduleWildfireRecurringEveryHour) {
    this._everyHour.internalValue = value;
  }
  public resetEveryHour() {
    this._everyHour.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get everyHourInput() {
    return this._everyHour.internalValue;
  }

  // every_min - computed: false, optional: true, required: false
  private _everyMin = new UpdateScheduleUpdateScheduleWildfireRecurringEveryMinOutputReference(this, "every_min");
  public get everyMin() {
    return this._everyMin;
  }
  public putEveryMin(value: UpdateScheduleUpdateScheduleWildfireRecurringEveryMin) {
    this._everyMin.internalValue = value;
  }
  public resetEveryMin() {
    this._everyMin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get everyMinInput() {
    return this._everyMin.internalValue;
  }

  // none - computed: false, optional: true, required: false
  private _none = new UpdateScheduleUpdateScheduleWildfireRecurringNoneOutputReference(this, "none");
  public get none() {
    return this._none;
  }
  public putNone(value: UpdateScheduleUpdateScheduleWildfireRecurringNone) {
    this._none.internalValue = value;
  }
  public resetNone() {
    this._none.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneInput() {
    return this._none.internalValue;
  }

  // real_time - computed: false, optional: true, required: false
  private _realTime = new UpdateScheduleUpdateScheduleWildfireRecurringRealTimeOutputReference(this, "real_time");
  public get realTime() {
    return this._realTime;
  }
  public putRealTime(value: UpdateScheduleUpdateScheduleWildfireRecurringRealTime) {
    this._realTime.internalValue = value;
  }
  public resetRealTime() {
    this._realTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realTimeInput() {
    return this._realTime.internalValue;
  }
}
export interface UpdateScheduleUpdateScheduleWildfire {
  /**
  * Recurring
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/update_schedule#recurring UpdateSchedule#recurring}
  */
  readonly recurring: UpdateScheduleUpdateScheduleWildfireRecurring;
}

export function updateScheduleUpdateScheduleWildfireToTerraform(struct?: UpdateScheduleUpdateScheduleWildfire | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    recurring: updateScheduleUpdateScheduleWildfireRecurringToTerraform(struct!.recurring),
  }
}


export function updateScheduleUpdateScheduleWildfireToHclTerraform(struct?: UpdateScheduleUpdateScheduleWildfire | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    recurring: {
      value: updateScheduleUpdateScheduleWildfireRecurringToHclTerraform(struct!.recurring),
      isBlock: true,
      type: "struct",
      storageClassType: "UpdateScheduleUpdateScheduleWildfireRecurring",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpdateScheduleUpdateScheduleWildfireOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UpdateScheduleUpdateScheduleWildfire | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recurring?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurring = this._recurring?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpdateScheduleUpdateScheduleWildfire | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._recurring.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._recurring.internalValue = value.recurring;
    }
  }

  // recurring - computed: false, optional: false, required: true
  private _recurring = new UpdateScheduleUpdateScheduleWildfireRecurringOutputReference(this, "recurring");
  public get recurring() {
    return this._recurring;
  }
  public putRecurring(value: UpdateScheduleUpdateScheduleWildfireRecurring) {
    this._recurring.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recurringInput() {
    return this._recurring.internalValue;
  }
}
export interface UpdateScheduleUpdateSchedule {
  /**
  * Anti virus
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/update_schedule#anti_virus UpdateSchedule#anti_virus}
  */
  readonly antiVirus: UpdateScheduleUpdateScheduleAntiVirus;
  /**
  * Threats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/update_schedule#threats UpdateSchedule#threats}
  */
  readonly threats: UpdateScheduleUpdateScheduleThreats;
  /**
  * Wildfire
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/update_schedule#wildfire UpdateSchedule#wildfire}
  */
  readonly wildfire: UpdateScheduleUpdateScheduleWildfire;
}

export function updateScheduleUpdateScheduleToTerraform(struct?: UpdateScheduleUpdateSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    anti_virus: updateScheduleUpdateScheduleAntiVirusToTerraform(struct!.antiVirus),
    threats: updateScheduleUpdateScheduleThreatsToTerraform(struct!.threats),
    wildfire: updateScheduleUpdateScheduleWildfireToTerraform(struct!.wildfire),
  }
}


export function updateScheduleUpdateScheduleToHclTerraform(struct?: UpdateScheduleUpdateSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    anti_virus: {
      value: updateScheduleUpdateScheduleAntiVirusToHclTerraform(struct!.antiVirus),
      isBlock: true,
      type: "struct",
      storageClassType: "UpdateScheduleUpdateScheduleAntiVirus",
    },
    threats: {
      value: updateScheduleUpdateScheduleThreatsToHclTerraform(struct!.threats),
      isBlock: true,
      type: "struct",
      storageClassType: "UpdateScheduleUpdateScheduleThreats",
    },
    wildfire: {
      value: updateScheduleUpdateScheduleWildfireToHclTerraform(struct!.wildfire),
      isBlock: true,
      type: "struct",
      storageClassType: "UpdateScheduleUpdateScheduleWildfire",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpdateScheduleUpdateScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UpdateScheduleUpdateSchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._antiVirus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.antiVirus = this._antiVirus?.internalValue;
    }
    if (this._threats?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.threats = this._threats?.internalValue;
    }
    if (this._wildfire?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wildfire = this._wildfire?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpdateScheduleUpdateSchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._antiVirus.internalValue = undefined;
      this._threats.internalValue = undefined;
      this._wildfire.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._antiVirus.internalValue = value.antiVirus;
      this._threats.internalValue = value.threats;
      this._wildfire.internalValue = value.wildfire;
    }
  }

  // anti_virus - computed: false, optional: false, required: true
  private _antiVirus = new UpdateScheduleUpdateScheduleAntiVirusOutputReference(this, "anti_virus");
  public get antiVirus() {
    return this._antiVirus;
  }
  public putAntiVirus(value: UpdateScheduleUpdateScheduleAntiVirus) {
    this._antiVirus.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get antiVirusInput() {
    return this._antiVirus.internalValue;
  }

  // threats - computed: false, optional: false, required: true
  private _threats = new UpdateScheduleUpdateScheduleThreatsOutputReference(this, "threats");
  public get threats() {
    return this._threats;
  }
  public putThreats(value: UpdateScheduleUpdateScheduleThreats) {
    this._threats.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get threatsInput() {
    return this._threats.internalValue;
  }

  // wildfire - computed: false, optional: false, required: true
  private _wildfire = new UpdateScheduleUpdateScheduleWildfireOutputReference(this, "wildfire");
  public get wildfire() {
    return this._wildfire;
  }
  public putWildfire(value: UpdateScheduleUpdateScheduleWildfire) {
    this._wildfire.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wildfireInput() {
    return this._wildfire.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/update_schedule scm_update_schedule}
*/
export class UpdateSchedule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_update_schedule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UpdateSchedule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UpdateSchedule to import
  * @param importFromId The id of the existing UpdateSchedule that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/update_schedule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UpdateSchedule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_update_schedule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/update_schedule scm_update_schedule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UpdateScheduleConfig = {}
  */
  public constructor(scope: Construct, id: string, config: UpdateScheduleConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'scm_update_schedule',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.6',
        providerVersionConstraint: '1.0.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
    this._folder = config.folder;
    this._snippet = config.snippet;
    this._updateSchedule.internalValue = config.updateSchedule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // snippet - computed: false, optional: true, required: false
  private _snippet?: string; 
  public get snippet() {
    return this.getStringAttribute('snippet');
  }
  public set snippet(value: string) {
    this._snippet = value;
  }
  public resetSnippet() {
    this._snippet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snippetInput() {
    return this._snippet;
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // update_schedule - computed: false, optional: true, required: false
  private _updateSchedule = new UpdateScheduleUpdateScheduleOutputReference(this, "update_schedule");
  public get updateSchedule() {
    return this._updateSchedule;
  }
  public putUpdateSchedule(value: UpdateScheduleUpdateSchedule) {
    this._updateSchedule.internalValue = value;
  }
  public resetUpdateSchedule() {
    this._updateSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateScheduleInput() {
    return this._updateSchedule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      folder: cdktf.stringToTerraform(this._folder),
      snippet: cdktf.stringToTerraform(this._snippet),
      update_schedule: updateScheduleUpdateScheduleToTerraform(this._updateSchedule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snippet: {
        value: cdktf.stringToHclTerraform(this._snippet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_schedule: {
        value: updateScheduleUpdateScheduleToHclTerraform(this._updateSchedule.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "UpdateScheduleUpdateSchedule",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
