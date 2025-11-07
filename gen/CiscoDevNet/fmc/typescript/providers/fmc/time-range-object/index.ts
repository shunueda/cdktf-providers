// https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/time_range_object
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TimeRangeObjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/time_range_object#description TimeRangeObject#description}
  */
  readonly description?: string;
  /**
  * Effective end date for this time range object (time in RFC3339 format)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/time_range_object#effective_end_date TimeRangeObject#effective_end_date}
  */
  readonly effectiveEndDate: string;
  /**
  * Effective start date for this time range object (time in RFC3339 format)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/time_range_object#effective_start_date TimeRangeObject#effective_start_date}
  */
  readonly effectiveStartDate: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/time_range_object#id TimeRangeObject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/time_range_object#name TimeRangeObject#name}
  */
  readonly name: string;
  /**
  * recurrence block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/time_range_object#recurrence TimeRangeObject#recurrence}
  */
  readonly recurrence?: TimeRangeObjectRecurrence[] | cdktf.IResolvable;
}
export interface TimeRangeObjectRecurrence {
  /**
  * Daily end time for this recurrence (time in RFC3339 format)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/time_range_object#daily_end_time TimeRangeObject#daily_end_time}
  */
  readonly dailyEndTime?: string;
  /**
  * Daily start time for this recurrence (time in RFC3339 format)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/time_range_object#daily_start_time TimeRangeObject#daily_start_time}
  */
  readonly dailyStartTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/time_range_object#days TimeRangeObject#days}
  */
  readonly days?: string[];
  /**
  * End day for this recurrence (time in RFC3339 format)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/time_range_object#end_day TimeRangeObject#end_day}
  */
  readonly endDay?: string;
  /**
  * End date for this recurrence (time in RFC3339 format)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/time_range_object#end_time TimeRangeObject#end_time}
  */
  readonly endTime?: string;
  /**
  * Type of recurrence. Allowed values: "DAILY_INTERVAL", "RANGE"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/time_range_object#recurrence_type TimeRangeObject#recurrence_type}
  */
  readonly recurrenceType: string;
  /**
  * Start day for this recurrence (time in RFC3339 format)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/time_range_object#start_day TimeRangeObject#start_day}
  */
  readonly startDay?: string;
  /**
  * Start date for this recurrence (time in RFC3339 format)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/time_range_object#start_time TimeRangeObject#start_time}
  */
  readonly startTime?: string;
}

export function timeRangeObjectRecurrenceToTerraform(struct?: TimeRangeObjectRecurrence | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    daily_end_time: cdktf.stringToTerraform(struct!.dailyEndTime),
    daily_start_time: cdktf.stringToTerraform(struct!.dailyStartTime),
    days: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.days),
    end_day: cdktf.stringToTerraform(struct!.endDay),
    end_time: cdktf.stringToTerraform(struct!.endTime),
    recurrence_type: cdktf.stringToTerraform(struct!.recurrenceType),
    start_day: cdktf.stringToTerraform(struct!.startDay),
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}


export function timeRangeObjectRecurrenceToHclTerraform(struct?: TimeRangeObjectRecurrence | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    daily_end_time: {
      value: cdktf.stringToHclTerraform(struct!.dailyEndTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    daily_start_time: {
      value: cdktf.stringToHclTerraform(struct!.dailyStartTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    days: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.days),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    end_day: {
      value: cdktf.stringToHclTerraform(struct!.endDay),
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
    recurrence_type: {
      value: cdktf.stringToHclTerraform(struct!.recurrenceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_day: {
      value: cdktf.stringToHclTerraform(struct!.startDay),
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

export class TimeRangeObjectRecurrenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TimeRangeObjectRecurrence | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dailyEndTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.dailyEndTime = this._dailyEndTime;
    }
    if (this._dailyStartTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.dailyStartTime = this._dailyStartTime;
    }
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._endDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.endDay = this._endDay;
    }
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._recurrenceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurrenceType = this._recurrenceType;
    }
    if (this._startDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.startDay = this._startDay;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimeRangeObjectRecurrence | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dailyEndTime = undefined;
      this._dailyStartTime = undefined;
      this._days = undefined;
      this._endDay = undefined;
      this._endTime = undefined;
      this._recurrenceType = undefined;
      this._startDay = undefined;
      this._startTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dailyEndTime = value.dailyEndTime;
      this._dailyStartTime = value.dailyStartTime;
      this._days = value.days;
      this._endDay = value.endDay;
      this._endTime = value.endTime;
      this._recurrenceType = value.recurrenceType;
      this._startDay = value.startDay;
      this._startTime = value.startTime;
    }
  }

  // daily_end_time - computed: false, optional: true, required: false
  private _dailyEndTime?: string; 
  public get dailyEndTime() {
    return this.getStringAttribute('daily_end_time');
  }
  public set dailyEndTime(value: string) {
    this._dailyEndTime = value;
  }
  public resetDailyEndTime() {
    this._dailyEndTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyEndTimeInput() {
    return this._dailyEndTime;
  }

  // daily_start_time - computed: false, optional: true, required: false
  private _dailyStartTime?: string; 
  public get dailyStartTime() {
    return this.getStringAttribute('daily_start_time');
  }
  public set dailyStartTime(value: string) {
    this._dailyStartTime = value;
  }
  public resetDailyStartTime() {
    this._dailyStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyStartTimeInput() {
    return this._dailyStartTime;
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

  // end_day - computed: false, optional: true, required: false
  private _endDay?: string; 
  public get endDay() {
    return this.getStringAttribute('end_day');
  }
  public set endDay(value: string) {
    this._endDay = value;
  }
  public resetEndDay() {
    this._endDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endDayInput() {
    return this._endDay;
  }

  // end_time - computed: false, optional: true, required: false
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

  // recurrence_type - computed: false, optional: false, required: true
  private _recurrenceType?: string; 
  public get recurrenceType() {
    return this.getStringAttribute('recurrence_type');
  }
  public set recurrenceType(value: string) {
    this._recurrenceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recurrenceTypeInput() {
    return this._recurrenceType;
  }

  // start_day - computed: false, optional: true, required: false
  private _startDay?: string; 
  public get startDay() {
    return this.getStringAttribute('start_day');
  }
  public set startDay(value: string) {
    this._startDay = value;
  }
  public resetStartDay() {
    this._startDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startDayInput() {
    return this._startDay;
  }

  // start_time - computed: false, optional: true, required: false
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

export class TimeRangeObjectRecurrenceList extends cdktf.ComplexList {
  public internalValue? : TimeRangeObjectRecurrence[] | cdktf.IResolvable

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
  public get(index: number): TimeRangeObjectRecurrenceOutputReference {
    return new TimeRangeObjectRecurrenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/time_range_object fmc_time_range_object}
*/
export class TimeRangeObject extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmc_time_range_object";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TimeRangeObject resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TimeRangeObject to import
  * @param importFromId The id of the existing TimeRangeObject that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/time_range_object#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TimeRangeObject to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmc_time_range_object", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/time_range_object fmc_time_range_object} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TimeRangeObjectConfig
  */
  public constructor(scope: Construct, id: string, config: TimeRangeObjectConfig) {
    super(scope, id, {
      terraformResourceType: 'fmc_time_range_object',
      terraformGeneratorMetadata: {
        providerName: 'fmc',
        providerVersion: '1.5.2'
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
    this._effectiveEndDate = config.effectiveEndDate;
    this._effectiveStartDate = config.effectiveStartDate;
    this._id = config.id;
    this._name = config.name;
    this._recurrence.internalValue = config.recurrence;
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

  // effective_end_date - computed: false, optional: false, required: true
  private _effectiveEndDate?: string; 
  public get effectiveEndDate() {
    return this.getStringAttribute('effective_end_date');
  }
  public set effectiveEndDate(value: string) {
    this._effectiveEndDate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get effectiveEndDateInput() {
    return this._effectiveEndDate;
  }

  // effective_start_date - computed: false, optional: false, required: true
  private _effectiveStartDate?: string; 
  public get effectiveStartDate() {
    return this.getStringAttribute('effective_start_date');
  }
  public set effectiveStartDate(value: string) {
    this._effectiveStartDate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get effectiveStartDateInput() {
    return this._effectiveStartDate;
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

  // recurrence - computed: false, optional: true, required: false
  private _recurrence = new TimeRangeObjectRecurrenceList(this, "recurrence", false);
  public get recurrence() {
    return this._recurrence;
  }
  public putRecurrence(value: TimeRangeObjectRecurrence[] | cdktf.IResolvable) {
    this._recurrence.internalValue = value;
  }
  public resetRecurrence() {
    this._recurrence.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurrenceInput() {
    return this._recurrence.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      effective_end_date: cdktf.stringToTerraform(this._effectiveEndDate),
      effective_start_date: cdktf.stringToTerraform(this._effectiveStartDate),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      recurrence: cdktf.listMapper(timeRangeObjectRecurrenceToTerraform, true)(this._recurrence.internalValue),
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
      effective_end_date: {
        value: cdktf.stringToHclTerraform(this._effectiveEndDate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      effective_start_date: {
        value: cdktf.stringToHclTerraform(this._effectiveStartDate),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recurrence: {
        value: cdktf.listMapperHcl(timeRangeObjectRecurrenceToHclTerraform, true)(this._recurrence.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TimeRangeObjectRecurrenceList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
