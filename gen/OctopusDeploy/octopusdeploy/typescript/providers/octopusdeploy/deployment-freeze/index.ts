// https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_freeze
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DeploymentFreezeConfig extends cdktf.TerraformMetaArguments {
  /**
  * The end time of the freeze, must be RFC3339 format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_freeze#end DeploymentFreeze#end}
  */
  readonly end: string;
  /**
  * The name of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_freeze#name DeploymentFreeze#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_freeze#recurring_schedule DeploymentFreeze#recurring_schedule}
  */
  readonly recurringSchedule?: DeploymentFreezeRecurringSchedule;
  /**
  * The start time of the freeze, must be RFC3339 format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_freeze#start DeploymentFreeze#start}
  */
  readonly start: string;
}
export interface DeploymentFreezeRecurringSchedule {
  /**
  * The date of the month for monthly schedules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_freeze#date_of_month DeploymentFreeze#date_of_month}
  */
  readonly dateOfMonth?: string;
  /**
  * Specifies which weekday position in the month. Valid values: 1 (First), 2 (Second), 3 (Third), 4 (Fourth), L (Last). Used with day_of_week
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_freeze#day_number_of_month DeploymentFreeze#day_number_of_month}
  */
  readonly dayNumberOfMonth?: string;
  /**
  * The day of the week for monthly schedules when using DayOfMonth type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_freeze#day_of_week DeploymentFreeze#day_of_week}
  */
  readonly dayOfWeek?: string;
  /**
  * List of days of the week for weekly schedules. Must follow order: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_freeze#days_of_week DeploymentFreeze#days_of_week}
  */
  readonly daysOfWeek?: string[];
  /**
  * Number of occurrences after which the schedule should end
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_freeze#end_after_occurrences DeploymentFreeze#end_after_occurrences}
  */
  readonly endAfterOccurrences?: number;
  /**
  * The date when the recurring schedule should end
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_freeze#end_on_date DeploymentFreeze#end_on_date}
  */
  readonly endOnDate?: string;
  /**
  * When the recurring schedule should end (Never, OnDate, AfterOccurrences)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_freeze#end_type DeploymentFreeze#end_type}
  */
  readonly endType: string;
  /**
  * Type of monthly schedule (DayOfMonth, DateOfMonth)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_freeze#monthly_schedule_type DeploymentFreeze#monthly_schedule_type}
  */
  readonly monthlyScheduleType?: string;
  /**
  * Type of recurring schedule (Daily, Weekly, Monthly, Annually)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_freeze#type DeploymentFreeze#type}
  */
  readonly type: string;
  /**
  * The unit value for the schedule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_freeze#unit DeploymentFreeze#unit}
  */
  readonly unit: number;
}

export function deploymentFreezeRecurringScheduleToTerraform(struct?: DeploymentFreezeRecurringSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    date_of_month: cdktf.stringToTerraform(struct!.dateOfMonth),
    day_number_of_month: cdktf.stringToTerraform(struct!.dayNumberOfMonth),
    day_of_week: cdktf.stringToTerraform(struct!.dayOfWeek),
    days_of_week: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.daysOfWeek),
    end_after_occurrences: cdktf.numberToTerraform(struct!.endAfterOccurrences),
    end_on_date: cdktf.stringToTerraform(struct!.endOnDate),
    end_type: cdktf.stringToTerraform(struct!.endType),
    monthly_schedule_type: cdktf.stringToTerraform(struct!.monthlyScheduleType),
    type: cdktf.stringToTerraform(struct!.type),
    unit: cdktf.numberToTerraform(struct!.unit),
  }
}


export function deploymentFreezeRecurringScheduleToHclTerraform(struct?: DeploymentFreezeRecurringSchedule | cdktf.IResolvable): any {
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
    days_of_week: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.daysOfWeek),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    end_after_occurrences: {
      value: cdktf.numberToHclTerraform(struct!.endAfterOccurrences),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    end_on_date: {
      value: cdktf.stringToHclTerraform(struct!.endOnDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_type: {
      value: cdktf.stringToHclTerraform(struct!.endType),
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unit: {
      value: cdktf.numberToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentFreezeRecurringScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DeploymentFreezeRecurringSchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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
    if (this._daysOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysOfWeek = this._daysOfWeek;
    }
    if (this._endAfterOccurrences !== undefined) {
      hasAnyValues = true;
      internalValueResult.endAfterOccurrences = this._endAfterOccurrences;
    }
    if (this._endOnDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.endOnDate = this._endOnDate;
    }
    if (this._endType !== undefined) {
      hasAnyValues = true;
      internalValueResult.endType = this._endType;
    }
    if (this._monthlyScheduleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.monthlyScheduleType = this._monthlyScheduleType;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentFreezeRecurringSchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dateOfMonth = undefined;
      this._dayNumberOfMonth = undefined;
      this._dayOfWeek = undefined;
      this._daysOfWeek = undefined;
      this._endAfterOccurrences = undefined;
      this._endOnDate = undefined;
      this._endType = undefined;
      this._monthlyScheduleType = undefined;
      this._type = undefined;
      this._unit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dateOfMonth = value.dateOfMonth;
      this._dayNumberOfMonth = value.dayNumberOfMonth;
      this._dayOfWeek = value.dayOfWeek;
      this._daysOfWeek = value.daysOfWeek;
      this._endAfterOccurrences = value.endAfterOccurrences;
      this._endOnDate = value.endOnDate;
      this._endType = value.endType;
      this._monthlyScheduleType = value.monthlyScheduleType;
      this._type = value.type;
      this._unit = value.unit;
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

  // days_of_week - computed: false, optional: true, required: false
  private _daysOfWeek?: string[]; 
  public get daysOfWeek() {
    return this.getListAttribute('days_of_week');
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

  // end_after_occurrences - computed: false, optional: true, required: false
  private _endAfterOccurrences?: number; 
  public get endAfterOccurrences() {
    return this.getNumberAttribute('end_after_occurrences');
  }
  public set endAfterOccurrences(value: number) {
    this._endAfterOccurrences = value;
  }
  public resetEndAfterOccurrences() {
    this._endAfterOccurrences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endAfterOccurrencesInput() {
    return this._endAfterOccurrences;
  }

  // end_on_date - computed: false, optional: true, required: false
  private _endOnDate?: string; 
  public get endOnDate() {
    return this.getStringAttribute('end_on_date');
  }
  public set endOnDate(value: string) {
    this._endOnDate = value;
  }
  public resetEndOnDate() {
    this._endOnDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endOnDateInput() {
    return this._endOnDate;
  }

  // end_type - computed: false, optional: false, required: true
  private _endType?: string; 
  public get endType() {
    return this.getStringAttribute('end_type');
  }
  public set endType(value: string) {
    this._endType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endTypeInput() {
    return this._endType;
  }

  // monthly_schedule_type - computed: false, optional: true, required: false
  private _monthlyScheduleType?: string; 
  public get monthlyScheduleType() {
    return this.getStringAttribute('monthly_schedule_type');
  }
  public set monthlyScheduleType(value: string) {
    this._monthlyScheduleType = value;
  }
  public resetMonthlyScheduleType() {
    this._monthlyScheduleType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthlyScheduleTypeInput() {
    return this._monthlyScheduleType;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: number; 
  public get unit() {
    return this.getNumberAttribute('unit');
  }
  public set unit(value: number) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_freeze octopusdeploy_deployment_freeze}
*/
export class DeploymentFreeze extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "octopusdeploy_deployment_freeze";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DeploymentFreeze resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DeploymentFreeze to import
  * @param importFromId The id of the existing DeploymentFreeze that should be imported. Refer to the {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_freeze#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DeploymentFreeze to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "octopusdeploy_deployment_freeze", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_freeze octopusdeploy_deployment_freeze} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DeploymentFreezeConfig
  */
  public constructor(scope: Construct, id: string, config: DeploymentFreezeConfig) {
    super(scope, id, {
      terraformResourceType: 'octopusdeploy_deployment_freeze',
      terraformGeneratorMetadata: {
        providerName: 'octopusdeploy',
        providerVersion: '1.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._end = config.end;
    this._name = config.name;
    this._recurringSchedule.internalValue = config.recurringSchedule;
    this._start = config.start;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // end - computed: false, optional: false, required: true
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
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

  // recurring_schedule - computed: false, optional: true, required: false
  private _recurringSchedule = new DeploymentFreezeRecurringScheduleOutputReference(this, "recurring_schedule");
  public get recurringSchedule() {
    return this._recurringSchedule;
  }
  public putRecurringSchedule(value: DeploymentFreezeRecurringSchedule) {
    this._recurringSchedule.internalValue = value;
  }
  public resetRecurringSchedule() {
    this._recurringSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurringScheduleInput() {
    return this._recurringSchedule.internalValue;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      end: cdktf.stringToTerraform(this._end),
      name: cdktf.stringToTerraform(this._name),
      recurring_schedule: deploymentFreezeRecurringScheduleToTerraform(this._recurringSchedule.internalValue),
      start: cdktf.stringToTerraform(this._start),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      end: {
        value: cdktf.stringToHclTerraform(this._end),
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
      recurring_schedule: {
        value: deploymentFreezeRecurringScheduleToHclTerraform(this._recurringSchedule.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DeploymentFreezeRecurringSchedule",
      },
      start: {
        value: cdktf.stringToHclTerraform(this._start),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
