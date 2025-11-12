// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/schedule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ScheduleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The device in which the resource is defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/schedule#device Schedule#device}
  */
  readonly device?: string;
  /**
  * The folder in which the resource is defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/schedule#folder Schedule#folder}
  */
  readonly folder?: string;
  /**
  * The name of the schedule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/schedule#name Schedule#name}
  */
  readonly name: string;
  /**
  * Schedule type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/schedule#schedule_type Schedule#schedule_type}
  */
  readonly scheduleType: ScheduleScheduleType;
  /**
  * The snippet in which the resource is defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/schedule#snippet Schedule#snippet}
  */
  readonly snippet?: string;
}
export interface ScheduleScheduleTypeRecurringWeekly {
  /**
  * Friday
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/schedule#friday Schedule#friday}
  */
  readonly friday?: string[];
  /**
  * Monday
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/schedule#monday Schedule#monday}
  */
  readonly monday?: string[];
  /**
  * Saturday
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/schedule#saturday Schedule#saturday}
  */
  readonly saturday?: string[];
  /**
  * Sunday
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/schedule#sunday Schedule#sunday}
  */
  readonly sunday?: string[];
  /**
  * Thursday
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/schedule#thursday Schedule#thursday}
  */
  readonly thursday?: string[];
  /**
  * Tuesday
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/schedule#tuesday Schedule#tuesday}
  */
  readonly tuesday?: string[];
  /**
  * Wednesday
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/schedule#wednesday Schedule#wednesday}
  */
  readonly wednesday?: string[];
}

export function scheduleScheduleTypeRecurringWeeklyToTerraform(struct?: ScheduleScheduleTypeRecurringWeekly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    friday: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.friday),
    monday: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.monday),
    saturday: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.saturday),
    sunday: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sunday),
    thursday: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.thursday),
    tuesday: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tuesday),
    wednesday: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.wednesday),
  }
}


export function scheduleScheduleTypeRecurringWeeklyToHclTerraform(struct?: ScheduleScheduleTypeRecurringWeekly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    friday: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.friday),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    monday: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.monday),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    saturday: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.saturday),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sunday: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sunday),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    thursday: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.thursday),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tuesday: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tuesday),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    wednesday: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.wednesday),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScheduleScheduleTypeRecurringWeeklyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ScheduleScheduleTypeRecurringWeekly | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._friday !== undefined) {
      hasAnyValues = true;
      internalValueResult.friday = this._friday;
    }
    if (this._monday !== undefined) {
      hasAnyValues = true;
      internalValueResult.monday = this._monday;
    }
    if (this._saturday !== undefined) {
      hasAnyValues = true;
      internalValueResult.saturday = this._saturday;
    }
    if (this._sunday !== undefined) {
      hasAnyValues = true;
      internalValueResult.sunday = this._sunday;
    }
    if (this._thursday !== undefined) {
      hasAnyValues = true;
      internalValueResult.thursday = this._thursday;
    }
    if (this._tuesday !== undefined) {
      hasAnyValues = true;
      internalValueResult.tuesday = this._tuesday;
    }
    if (this._wednesday !== undefined) {
      hasAnyValues = true;
      internalValueResult.wednesday = this._wednesday;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScheduleScheduleTypeRecurringWeekly | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._friday = undefined;
      this._monday = undefined;
      this._saturday = undefined;
      this._sunday = undefined;
      this._thursday = undefined;
      this._tuesday = undefined;
      this._wednesday = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._friday = value.friday;
      this._monday = value.monday;
      this._saturday = value.saturday;
      this._sunday = value.sunday;
      this._thursday = value.thursday;
      this._tuesday = value.tuesday;
      this._wednesday = value.wednesday;
    }
  }

  // friday - computed: false, optional: true, required: false
  private _friday?: string[]; 
  public get friday() {
    return this.getListAttribute('friday');
  }
  public set friday(value: string[]) {
    this._friday = value;
  }
  public resetFriday() {
    this._friday = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fridayInput() {
    return this._friday;
  }

  // monday - computed: false, optional: true, required: false
  private _monday?: string[]; 
  public get monday() {
    return this.getListAttribute('monday');
  }
  public set monday(value: string[]) {
    this._monday = value;
  }
  public resetMonday() {
    this._monday = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mondayInput() {
    return this._monday;
  }

  // saturday - computed: false, optional: true, required: false
  private _saturday?: string[]; 
  public get saturday() {
    return this.getListAttribute('saturday');
  }
  public set saturday(value: string[]) {
    this._saturday = value;
  }
  public resetSaturday() {
    this._saturday = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saturdayInput() {
    return this._saturday;
  }

  // sunday - computed: false, optional: true, required: false
  private _sunday?: string[]; 
  public get sunday() {
    return this.getListAttribute('sunday');
  }
  public set sunday(value: string[]) {
    this._sunday = value;
  }
  public resetSunday() {
    this._sunday = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sundayInput() {
    return this._sunday;
  }

  // thursday - computed: false, optional: true, required: false
  private _thursday?: string[]; 
  public get thursday() {
    return this.getListAttribute('thursday');
  }
  public set thursday(value: string[]) {
    this._thursday = value;
  }
  public resetThursday() {
    this._thursday = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thursdayInput() {
    return this._thursday;
  }

  // tuesday - computed: false, optional: true, required: false
  private _tuesday?: string[]; 
  public get tuesday() {
    return this.getListAttribute('tuesday');
  }
  public set tuesday(value: string[]) {
    this._tuesday = value;
  }
  public resetTuesday() {
    this._tuesday = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tuesdayInput() {
    return this._tuesday;
  }

  // wednesday - computed: false, optional: true, required: false
  private _wednesday?: string[]; 
  public get wednesday() {
    return this.getListAttribute('wednesday');
  }
  public set wednesday(value: string[]) {
    this._wednesday = value;
  }
  public resetWednesday() {
    this._wednesday = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wednesdayInput() {
    return this._wednesday;
  }
}
export interface ScheduleScheduleTypeRecurring {
  /**
  * Daily
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/schedule#daily Schedule#daily}
  */
  readonly daily?: string[];
  /**
  * Weekly
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/schedule#weekly Schedule#weekly}
  */
  readonly weekly?: ScheduleScheduleTypeRecurringWeekly;
}

export function scheduleScheduleTypeRecurringToTerraform(struct?: ScheduleScheduleTypeRecurring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    daily: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.daily),
    weekly: scheduleScheduleTypeRecurringWeeklyToTerraform(struct!.weekly),
  }
}


export function scheduleScheduleTypeRecurringToHclTerraform(struct?: ScheduleScheduleTypeRecurring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    daily: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.daily),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    weekly: {
      value: scheduleScheduleTypeRecurringWeeklyToHclTerraform(struct!.weekly),
      isBlock: true,
      type: "struct",
      storageClassType: "ScheduleScheduleTypeRecurringWeekly",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScheduleScheduleTypeRecurringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ScheduleScheduleTypeRecurring | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daily !== undefined) {
      hasAnyValues = true;
      internalValueResult.daily = this._daily;
    }
    if (this._weekly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekly = this._weekly?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScheduleScheduleTypeRecurring | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._daily = undefined;
      this._weekly.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._daily = value.daily;
      this._weekly.internalValue = value.weekly;
    }
  }

  // daily - computed: false, optional: true, required: false
  private _daily?: string[]; 
  public get daily() {
    return this.getListAttribute('daily');
  }
  public set daily(value: string[]) {
    this._daily = value;
  }
  public resetDaily() {
    this._daily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyInput() {
    return this._daily;
  }

  // weekly - computed: false, optional: true, required: false
  private _weekly = new ScheduleScheduleTypeRecurringWeeklyOutputReference(this, "weekly");
  public get weekly() {
    return this._weekly;
  }
  public putWeekly(value: ScheduleScheduleTypeRecurringWeekly) {
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
export interface ScheduleScheduleType {
  /**
  * Non recurring
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/schedule#non_recurring Schedule#non_recurring}
  */
  readonly nonRecurring?: string[];
  /**
  * Recurring
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/schedule#recurring Schedule#recurring}
  */
  readonly recurring?: ScheduleScheduleTypeRecurring;
}

export function scheduleScheduleTypeToTerraform(struct?: ScheduleScheduleType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    non_recurring: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nonRecurring),
    recurring: scheduleScheduleTypeRecurringToTerraform(struct!.recurring),
  }
}


export function scheduleScheduleTypeToHclTerraform(struct?: ScheduleScheduleType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    non_recurring: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nonRecurring),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    recurring: {
      value: scheduleScheduleTypeRecurringToHclTerraform(struct!.recurring),
      isBlock: true,
      type: "struct",
      storageClassType: "ScheduleScheduleTypeRecurring",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScheduleScheduleTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ScheduleScheduleType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nonRecurring !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonRecurring = this._nonRecurring;
    }
    if (this._recurring?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurring = this._recurring?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScheduleScheduleType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nonRecurring = undefined;
      this._recurring.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nonRecurring = value.nonRecurring;
      this._recurring.internalValue = value.recurring;
    }
  }

  // non_recurring - computed: false, optional: true, required: false
  private _nonRecurring?: string[]; 
  public get nonRecurring() {
    return this.getListAttribute('non_recurring');
  }
  public set nonRecurring(value: string[]) {
    this._nonRecurring = value;
  }
  public resetNonRecurring() {
    this._nonRecurring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonRecurringInput() {
    return this._nonRecurring;
  }

  // recurring - computed: false, optional: true, required: false
  private _recurring = new ScheduleScheduleTypeRecurringOutputReference(this, "recurring");
  public get recurring() {
    return this._recurring;
  }
  public putRecurring(value: ScheduleScheduleTypeRecurring) {
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
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/schedule scm_schedule}
*/
export class Schedule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_schedule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Schedule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Schedule to import
  * @param importFromId The id of the existing Schedule that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/schedule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Schedule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_schedule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/schedule scm_schedule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ScheduleConfig
  */
  public constructor(scope: Construct, id: string, config: ScheduleConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_schedule',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.4',
        providerVersionConstraint: '1.0.4'
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
    this._name = config.name;
    this._scheduleType.internalValue = config.scheduleType;
    this._snippet = config.snippet;
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

  // schedule_type - computed: false, optional: false, required: true
  private _scheduleType = new ScheduleScheduleTypeOutputReference(this, "schedule_type");
  public get scheduleType() {
    return this._scheduleType;
  }
  public putScheduleType(value: ScheduleScheduleType) {
    this._scheduleType.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleTypeInput() {
    return this._scheduleType.internalValue;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      folder: cdktf.stringToTerraform(this._folder),
      name: cdktf.stringToTerraform(this._name),
      schedule_type: scheduleScheduleTypeToTerraform(this._scheduleType.internalValue),
      snippet: cdktf.stringToTerraform(this._snippet),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule_type: {
        value: scheduleScheduleTypeToHclTerraform(this._scheduleType.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ScheduleScheduleType",
      },
      snippet: {
        value: cdktf.stringToHclTerraform(this._snippet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
