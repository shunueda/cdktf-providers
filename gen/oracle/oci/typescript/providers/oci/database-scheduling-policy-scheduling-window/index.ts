// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_scheduling_policy_scheduling_window
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseSchedulingPolicySchedulingWindowConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_scheduling_policy_scheduling_window#compartment_id DatabaseSchedulingPolicySchedulingWindow#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_scheduling_policy_scheduling_window#defined_tags DatabaseSchedulingPolicySchedulingWindow#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_scheduling_policy_scheduling_window#freeform_tags DatabaseSchedulingPolicySchedulingWindow#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_scheduling_policy_scheduling_window#id DatabaseSchedulingPolicySchedulingWindow#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_scheduling_policy_scheduling_window#scheduling_policy_id DatabaseSchedulingPolicySchedulingWindow#scheduling_policy_id}
  */
  readonly schedulingPolicyId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_scheduling_policy_scheduling_window#timeouts DatabaseSchedulingPolicySchedulingWindow#timeouts}
  */
  readonly timeouts?: DatabaseSchedulingPolicySchedulingWindowTimeouts;
  /**
  * window_preference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_scheduling_policy_scheduling_window#window_preference DatabaseSchedulingPolicySchedulingWindow#window_preference}
  */
  readonly windowPreference: DatabaseSchedulingPolicySchedulingWindowWindowPreference;
}
export interface DatabaseSchedulingPolicySchedulingWindowTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_scheduling_policy_scheduling_window#create DatabaseSchedulingPolicySchedulingWindow#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_scheduling_policy_scheduling_window#delete DatabaseSchedulingPolicySchedulingWindow#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_scheduling_policy_scheduling_window#update DatabaseSchedulingPolicySchedulingWindow#update}
  */
  readonly update?: string;
}

export function databaseSchedulingPolicySchedulingWindowTimeoutsToTerraform(struct?: DatabaseSchedulingPolicySchedulingWindowTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function databaseSchedulingPolicySchedulingWindowTimeoutsToHclTerraform(struct?: DatabaseSchedulingPolicySchedulingWindowTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseSchedulingPolicySchedulingWindowTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabaseSchedulingPolicySchedulingWindowTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseSchedulingPolicySchedulingWindowTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface DatabaseSchedulingPolicySchedulingWindowWindowPreferenceDaysOfWeek {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_scheduling_policy_scheduling_window#name DatabaseSchedulingPolicySchedulingWindow#name}
  */
  readonly name: string;
}

export function databaseSchedulingPolicySchedulingWindowWindowPreferenceDaysOfWeekToTerraform(struct?: DatabaseSchedulingPolicySchedulingWindowWindowPreferenceDaysOfWeek | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function databaseSchedulingPolicySchedulingWindowWindowPreferenceDaysOfWeekToHclTerraform(struct?: DatabaseSchedulingPolicySchedulingWindowWindowPreferenceDaysOfWeek | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseSchedulingPolicySchedulingWindowWindowPreferenceDaysOfWeekOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseSchedulingPolicySchedulingWindowWindowPreferenceDaysOfWeek | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseSchedulingPolicySchedulingWindowWindowPreferenceDaysOfWeek | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class DatabaseSchedulingPolicySchedulingWindowWindowPreferenceDaysOfWeekList extends cdktf.ComplexList {
  public internalValue? : DatabaseSchedulingPolicySchedulingWindowWindowPreferenceDaysOfWeek[] | cdktf.IResolvable

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
  public get(index: number): DatabaseSchedulingPolicySchedulingWindowWindowPreferenceDaysOfWeekOutputReference {
    return new DatabaseSchedulingPolicySchedulingWindowWindowPreferenceDaysOfWeekOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseSchedulingPolicySchedulingWindowWindowPreferenceMonths {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_scheduling_policy_scheduling_window#name DatabaseSchedulingPolicySchedulingWindow#name}
  */
  readonly name: string;
}

export function databaseSchedulingPolicySchedulingWindowWindowPreferenceMonthsToTerraform(struct?: DatabaseSchedulingPolicySchedulingWindowWindowPreferenceMonths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function databaseSchedulingPolicySchedulingWindowWindowPreferenceMonthsToHclTerraform(struct?: DatabaseSchedulingPolicySchedulingWindowWindowPreferenceMonths | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseSchedulingPolicySchedulingWindowWindowPreferenceMonthsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseSchedulingPolicySchedulingWindowWindowPreferenceMonths | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseSchedulingPolicySchedulingWindowWindowPreferenceMonths | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class DatabaseSchedulingPolicySchedulingWindowWindowPreferenceMonthsList extends cdktf.ComplexList {
  public internalValue? : DatabaseSchedulingPolicySchedulingWindowWindowPreferenceMonths[] | cdktf.IResolvable

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
  public get(index: number): DatabaseSchedulingPolicySchedulingWindowWindowPreferenceMonthsOutputReference {
    return new DatabaseSchedulingPolicySchedulingWindowWindowPreferenceMonthsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseSchedulingPolicySchedulingWindowWindowPreference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_scheduling_policy_scheduling_window#duration DatabaseSchedulingPolicySchedulingWindow#duration}
  */
  readonly duration: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_scheduling_policy_scheduling_window#is_enforced_duration DatabaseSchedulingPolicySchedulingWindow#is_enforced_duration}
  */
  readonly isEnforcedDuration: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_scheduling_policy_scheduling_window#start_time DatabaseSchedulingPolicySchedulingWindow#start_time}
  */
  readonly startTime: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_scheduling_policy_scheduling_window#weeks_of_month DatabaseSchedulingPolicySchedulingWindow#weeks_of_month}
  */
  readonly weeksOfMonth: number[];
  /**
  * days_of_week block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_scheduling_policy_scheduling_window#days_of_week DatabaseSchedulingPolicySchedulingWindow#days_of_week}
  */
  readonly daysOfWeek: DatabaseSchedulingPolicySchedulingWindowWindowPreferenceDaysOfWeek[] | cdktf.IResolvable;
  /**
  * months block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_scheduling_policy_scheduling_window#months DatabaseSchedulingPolicySchedulingWindow#months}
  */
  readonly months: DatabaseSchedulingPolicySchedulingWindowWindowPreferenceMonths[] | cdktf.IResolvable;
}

export function databaseSchedulingPolicySchedulingWindowWindowPreferenceToTerraform(struct?: DatabaseSchedulingPolicySchedulingWindowWindowPreferenceOutputReference | DatabaseSchedulingPolicySchedulingWindowWindowPreference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    is_enforced_duration: cdktf.booleanToTerraform(struct!.isEnforcedDuration),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    weeks_of_month: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.weeksOfMonth),
    days_of_week: cdktf.listMapper(databaseSchedulingPolicySchedulingWindowWindowPreferenceDaysOfWeekToTerraform, true)(struct!.daysOfWeek),
    months: cdktf.listMapper(databaseSchedulingPolicySchedulingWindowWindowPreferenceMonthsToTerraform, true)(struct!.months),
  }
}


export function databaseSchedulingPolicySchedulingWindowWindowPreferenceToHclTerraform(struct?: DatabaseSchedulingPolicySchedulingWindowWindowPreferenceOutputReference | DatabaseSchedulingPolicySchedulingWindowWindowPreference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_enforced_duration: {
      value: cdktf.booleanToHclTerraform(struct!.isEnforcedDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weeks_of_month: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.weeksOfMonth),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    days_of_week: {
      value: cdktf.listMapperHcl(databaseSchedulingPolicySchedulingWindowWindowPreferenceDaysOfWeekToHclTerraform, true)(struct!.daysOfWeek),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseSchedulingPolicySchedulingWindowWindowPreferenceDaysOfWeekList",
    },
    months: {
      value: cdktf.listMapperHcl(databaseSchedulingPolicySchedulingWindowWindowPreferenceMonthsToHclTerraform, true)(struct!.months),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseSchedulingPolicySchedulingWindowWindowPreferenceMonthsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseSchedulingPolicySchedulingWindowWindowPreferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseSchedulingPolicySchedulingWindowWindowPreference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._isEnforcedDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnforcedDuration = this._isEnforcedDuration;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._weeksOfMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.weeksOfMonth = this._weeksOfMonth;
    }
    if (this._daysOfWeek?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysOfWeek = this._daysOfWeek?.internalValue;
    }
    if (this._months?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.months = this._months?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseSchedulingPolicySchedulingWindowWindowPreference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._isEnforcedDuration = undefined;
      this._startTime = undefined;
      this._weeksOfMonth = undefined;
      this._daysOfWeek.internalValue = undefined;
      this._months.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._isEnforcedDuration = value.isEnforcedDuration;
      this._startTime = value.startTime;
      this._weeksOfMonth = value.weeksOfMonth;
      this._daysOfWeek.internalValue = value.daysOfWeek;
      this._months.internalValue = value.months;
    }
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // is_enforced_duration - computed: false, optional: false, required: true
  private _isEnforcedDuration?: boolean | cdktf.IResolvable; 
  public get isEnforcedDuration() {
    return this.getBooleanAttribute('is_enforced_duration');
  }
  public set isEnforcedDuration(value: boolean | cdktf.IResolvable) {
    this._isEnforcedDuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnforcedDurationInput() {
    return this._isEnforcedDuration;
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

  // weeks_of_month - computed: false, optional: false, required: true
  private _weeksOfMonth?: number[]; 
  public get weeksOfMonth() {
    return this.getNumberListAttribute('weeks_of_month');
  }
  public set weeksOfMonth(value: number[]) {
    this._weeksOfMonth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weeksOfMonthInput() {
    return this._weeksOfMonth;
  }

  // days_of_week - computed: false, optional: false, required: true
  private _daysOfWeek = new DatabaseSchedulingPolicySchedulingWindowWindowPreferenceDaysOfWeekList(this, "days_of_week", false);
  public get daysOfWeek() {
    return this._daysOfWeek;
  }
  public putDaysOfWeek(value: DatabaseSchedulingPolicySchedulingWindowWindowPreferenceDaysOfWeek[] | cdktf.IResolvable) {
    this._daysOfWeek.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get daysOfWeekInput() {
    return this._daysOfWeek.internalValue;
  }

  // months - computed: false, optional: false, required: true
  private _months = new DatabaseSchedulingPolicySchedulingWindowWindowPreferenceMonthsList(this, "months", false);
  public get months() {
    return this._months;
  }
  public putMonths(value: DatabaseSchedulingPolicySchedulingWindowWindowPreferenceMonths[] | cdktf.IResolvable) {
    this._months.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monthsInput() {
    return this._months.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_scheduling_policy_scheduling_window oci_database_scheduling_policy_scheduling_window}
*/
export class DatabaseSchedulingPolicySchedulingWindow extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_scheduling_policy_scheduling_window";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatabaseSchedulingPolicySchedulingWindow resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabaseSchedulingPolicySchedulingWindow to import
  * @param importFromId The id of the existing DatabaseSchedulingPolicySchedulingWindow that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_scheduling_policy_scheduling_window#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabaseSchedulingPolicySchedulingWindow to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_scheduling_policy_scheduling_window", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_scheduling_policy_scheduling_window oci_database_scheduling_policy_scheduling_window} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseSchedulingPolicySchedulingWindowConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseSchedulingPolicySchedulingWindowConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_scheduling_policy_scheduling_window',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._schedulingPolicyId = config.schedulingPolicyId;
    this._timeouts.internalValue = config.timeouts;
    this._windowPreference.internalValue = config.windowPreference;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: true, required: false
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  public resetCompartmentId() {
    this._compartmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // scheduling_policy_id - computed: false, optional: false, required: true
  private _schedulingPolicyId?: string; 
  public get schedulingPolicyId() {
    return this.getStringAttribute('scheduling_policy_id');
  }
  public set schedulingPolicyId(value: string) {
    this._schedulingPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingPolicyIdInput() {
    return this._schedulingPolicyId;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_next_scheduling_window_starts - computed: true, optional: false, required: false
  public get timeNextSchedulingWindowStarts() {
    return this.getStringAttribute('time_next_scheduling_window_starts');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DatabaseSchedulingPolicySchedulingWindowTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatabaseSchedulingPolicySchedulingWindowTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // window_preference - computed: false, optional: false, required: true
  private _windowPreference = new DatabaseSchedulingPolicySchedulingWindowWindowPreferenceOutputReference(this, "window_preference");
  public get windowPreference() {
    return this._windowPreference;
  }
  public putWindowPreference(value: DatabaseSchedulingPolicySchedulingWindowWindowPreference) {
    this._windowPreference.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get windowPreferenceInput() {
    return this._windowPreference.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      scheduling_policy_id: cdktf.stringToTerraform(this._schedulingPolicyId),
      timeouts: databaseSchedulingPolicySchedulingWindowTimeoutsToTerraform(this._timeouts.internalValue),
      window_preference: databaseSchedulingPolicySchedulingWindowWindowPreferenceToTerraform(this._windowPreference.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scheduling_policy_id: {
        value: cdktf.stringToHclTerraform(this._schedulingPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: databaseSchedulingPolicySchedulingWindowTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatabaseSchedulingPolicySchedulingWindowTimeouts",
      },
      window_preference: {
        value: databaseSchedulingPolicySchedulingWindowWindowPreferenceToHclTerraform(this._windowPreference.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseSchedulingPolicySchedulingWindowWindowPreferenceList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
