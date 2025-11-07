// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_business_calendar
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AutomationBusinessCalendarConfig extends cdktf.TerraformMetaArguments {
  /**
  * An optional description for the Business Calendar
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_business_calendar#description AutomationBusinessCalendar#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_business_calendar#id AutomationBusinessCalendar#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The title / name of the Business Calendar
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_business_calendar#title AutomationBusinessCalendar#title}
  */
  readonly title: string;
  /**
  * The date from when on this calendar is valid from. Example: `2023-07-04` for July 4th 2023
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_business_calendar#valid_from AutomationBusinessCalendar#valid_from}
  */
  readonly validFrom?: string;
  /**
  * The date until when on this calendar is valid to. Example: `2023-07-04` for July 4th 2023
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_business_calendar#valid_to AutomationBusinessCalendar#valid_to}
  */
  readonly validTo?: string;
  /**
  * The days to be considered week days in this calendar. `1' = `Monday`, `2` = `Tuesday`, `3` = `Wednesday`, `4` = `Thursday`, `5` = `Friday`, `6` = `Saturday`, `7` = `Sunday`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_business_calendar#week_days AutomationBusinessCalendar#week_days}
  */
  readonly weekDays?: number[];
  /**
  * Specifies the day of the week that's considered to be the first day in the week. `1` for Monday, `7` for Sunday
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_business_calendar#week_start AutomationBusinessCalendar#week_start}
  */
  readonly weekStart?: number;
  /**
  * holidays block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_business_calendar#holidays AutomationBusinessCalendar#holidays}
  */
  readonly holidays?: AutomationBusinessCalendarHolidays;
}
export interface AutomationBusinessCalendarHolidaysHoliday {
  /**
  * The date of this holiday: Example `2017-07-04` for July 4th 2017
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_business_calendar#date AutomationBusinessCalendar#date}
  */
  readonly date: string;
  /**
  * An official name for this holiday
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_business_calendar#title AutomationBusinessCalendar#title}
  */
  readonly title: string;
}

export function automationBusinessCalendarHolidaysHolidayToTerraform(struct?: AutomationBusinessCalendarHolidaysHoliday | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    date: cdktf.stringToTerraform(struct!.date),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function automationBusinessCalendarHolidaysHolidayToHclTerraform(struct?: AutomationBusinessCalendarHolidaysHoliday | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    date: {
      value: cdktf.stringToHclTerraform(struct!.date),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomationBusinessCalendarHolidaysHolidayOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AutomationBusinessCalendarHolidaysHoliday | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._date !== undefined) {
      hasAnyValues = true;
      internalValueResult.date = this._date;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomationBusinessCalendarHolidaysHoliday | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._date = undefined;
      this._title = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._date = value.date;
      this._title = value.title;
    }
  }

  // date - computed: false, optional: false, required: true
  private _date?: string; 
  public get date() {
    return this.getStringAttribute('date');
  }
  public set date(value: string) {
    this._date = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dateInput() {
    return this._date;
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
}

export class AutomationBusinessCalendarHolidaysHolidayList extends cdktf.ComplexList {
  public internalValue? : AutomationBusinessCalendarHolidaysHoliday[] | cdktf.IResolvable

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
  public get(index: number): AutomationBusinessCalendarHolidaysHolidayOutputReference {
    return new AutomationBusinessCalendarHolidaysHolidayOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AutomationBusinessCalendarHolidays {
  /**
  * holiday block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_business_calendar#holiday AutomationBusinessCalendar#holiday}
  */
  readonly holiday: AutomationBusinessCalendarHolidaysHoliday[] | cdktf.IResolvable;
}

export function automationBusinessCalendarHolidaysToTerraform(struct?: AutomationBusinessCalendarHolidaysOutputReference | AutomationBusinessCalendarHolidays): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    holiday: cdktf.listMapper(automationBusinessCalendarHolidaysHolidayToTerraform, true)(struct!.holiday),
  }
}


export function automationBusinessCalendarHolidaysToHclTerraform(struct?: AutomationBusinessCalendarHolidaysOutputReference | AutomationBusinessCalendarHolidays): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    holiday: {
      value: cdktf.listMapperHcl(automationBusinessCalendarHolidaysHolidayToHclTerraform, true)(struct!.holiday),
      isBlock: true,
      type: "set",
      storageClassType: "AutomationBusinessCalendarHolidaysHolidayList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomationBusinessCalendarHolidaysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutomationBusinessCalendarHolidays | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._holiday?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.holiday = this._holiday?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomationBusinessCalendarHolidays | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._holiday.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._holiday.internalValue = value.holiday;
    }
  }

  // holiday - computed: false, optional: false, required: true
  private _holiday = new AutomationBusinessCalendarHolidaysHolidayList(this, "holiday", true);
  public get holiday() {
    return this._holiday;
  }
  public putHoliday(value: AutomationBusinessCalendarHolidaysHoliday[] | cdktf.IResolvable) {
    this._holiday.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get holidayInput() {
    return this._holiday.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_business_calendar dynatrace_automation_business_calendar}
*/
export class AutomationBusinessCalendar extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_automation_business_calendar";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AutomationBusinessCalendar resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AutomationBusinessCalendar to import
  * @param importFromId The id of the existing AutomationBusinessCalendar that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_business_calendar#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AutomationBusinessCalendar to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_automation_business_calendar", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_business_calendar dynatrace_automation_business_calendar} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AutomationBusinessCalendarConfig
  */
  public constructor(scope: Construct, id: string, config: AutomationBusinessCalendarConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_automation_business_calendar',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1'
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
    this._id = config.id;
    this._title = config.title;
    this._validFrom = config.validFrom;
    this._validTo = config.validTo;
    this._weekDays = config.weekDays;
    this._weekStart = config.weekStart;
    this._holidays.internalValue = config.holidays;
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

  // valid_from - computed: false, optional: true, required: false
  private _validFrom?: string; 
  public get validFrom() {
    return this.getStringAttribute('valid_from');
  }
  public set validFrom(value: string) {
    this._validFrom = value;
  }
  public resetValidFrom() {
    this._validFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validFromInput() {
    return this._validFrom;
  }

  // valid_to - computed: false, optional: true, required: false
  private _validTo?: string; 
  public get validTo() {
    return this.getStringAttribute('valid_to');
  }
  public set validTo(value: string) {
    this._validTo = value;
  }
  public resetValidTo() {
    this._validTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validToInput() {
    return this._validTo;
  }

  // week_days - computed: false, optional: true, required: false
  private _weekDays?: number[]; 
  public get weekDays() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('week_days')));
  }
  public set weekDays(value: number[]) {
    this._weekDays = value;
  }
  public resetWeekDays() {
    this._weekDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekDaysInput() {
    return this._weekDays;
  }

  // week_start - computed: false, optional: true, required: false
  private _weekStart?: number; 
  public get weekStart() {
    return this.getNumberAttribute('week_start');
  }
  public set weekStart(value: number) {
    this._weekStart = value;
  }
  public resetWeekStart() {
    this._weekStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekStartInput() {
    return this._weekStart;
  }

  // holidays - computed: false, optional: true, required: false
  private _holidays = new AutomationBusinessCalendarHolidaysOutputReference(this, "holidays");
  public get holidays() {
    return this._holidays;
  }
  public putHolidays(value: AutomationBusinessCalendarHolidays) {
    this._holidays.internalValue = value;
  }
  public resetHolidays() {
    this._holidays.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holidaysInput() {
    return this._holidays.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      title: cdktf.stringToTerraform(this._title),
      valid_from: cdktf.stringToTerraform(this._validFrom),
      valid_to: cdktf.stringToTerraform(this._validTo),
      week_days: cdktf.listMapper(cdktf.numberToTerraform, false)(this._weekDays),
      week_start: cdktf.numberToTerraform(this._weekStart),
      holidays: automationBusinessCalendarHolidaysToTerraform(this._holidays.internalValue),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      valid_from: {
        value: cdktf.stringToHclTerraform(this._validFrom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      valid_to: {
        value: cdktf.stringToHclTerraform(this._validTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      week_days: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._weekDays),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      week_start: {
        value: cdktf.numberToHclTerraform(this._weekStart),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      holidays: {
        value: automationBusinessCalendarHolidaysToHclTerraform(this._holidays.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AutomationBusinessCalendarHolidaysList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
