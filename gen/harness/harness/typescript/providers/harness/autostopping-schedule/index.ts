// https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/autostopping_schedule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AutostoppingScheduleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Time until which schedule will be active. Need to be in YYYY-MM-DD HH:mm:SS format. Eg 2006-01-02 15:04:05
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/autostopping_schedule#ending_on AutostoppingSchedule#ending_on}
  */
  readonly endingOn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/autostopping_schedule#id AutostoppingSchedule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the schedule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/autostopping_schedule#name AutostoppingSchedule#name}
  */
  readonly name: string;
  /**
  * ID of AutoStopping rules on which the schedule applies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/autostopping_schedule#rules AutostoppingSchedule#rules}
  */
  readonly rules: number[];
  /**
  * Type of the schedule. Valid values are `uptime` and `downtime`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/autostopping_schedule#schedule_type AutostoppingSchedule#schedule_type}
  */
  readonly scheduleType: string;
  /**
  * Time from which schedule will be active. Schedule will take immediate effect if starting_from is not specified. Need to be in YYYY-MM-DD HH:mm:SS format. Eg 2006-01-02 15:04:05
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/autostopping_schedule#starting_from AutostoppingSchedule#starting_from}
  */
  readonly startingFrom?: string;
  /**
  * Time zone in which schedule needs to be executed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/autostopping_schedule#time_zone AutostoppingSchedule#time_zone}
  */
  readonly timeZone: string;
  /**
  * repeats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/autostopping_schedule#repeats AutostoppingSchedule#repeats}
  */
  readonly repeats?: AutostoppingScheduleRepeats[] | cdktf.IResolvable;
}
export interface AutostoppingScheduleRepeats {
  /**
  * List of days on which schedule need to be active. Valid values are SUN, MON, TUE, WED, THU, FRI and SAT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/autostopping_schedule#days AutostoppingSchedule#days}
  */
  readonly days: string[];
  /**
  * Ending time of schedule action on the day. Defaults to 24:00Hrs unless specified. Accepted format is HH:MM. Eg : 20:00 for 8pm
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/autostopping_schedule#end_time AutostoppingSchedule#end_time}
  */
  readonly endTime?: string;
  /**
  * Starting time of schedule action on the day. Defaults to 00:00Hrs unless specified. Accepted format is HH:MM. Eg : 13:15 for 01:15pm
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/autostopping_schedule#start_time AutostoppingSchedule#start_time}
  */
  readonly startTime?: string;
}

export function autostoppingScheduleRepeatsToTerraform(struct?: AutostoppingScheduleRepeats | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.days),
    end_time: cdktf.stringToTerraform(struct!.endTime),
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}


export function autostoppingScheduleRepeatsToHclTerraform(struct?: AutostoppingScheduleRepeats | cdktf.IResolvable): any {
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
    end_time: {
      value: cdktf.stringToHclTerraform(struct!.endTime),
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

export class AutostoppingScheduleRepeatsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AutostoppingScheduleRepeats | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutostoppingScheduleRepeats | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._days = undefined;
      this._endTime = undefined;
      this._startTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._days = value.days;
      this._endTime = value.endTime;
      this._startTime = value.startTime;
    }
  }

  // days - computed: false, optional: false, required: true
  private _days?: string[]; 
  public get days() {
    return this.getListAttribute('days');
  }
  public set days(value: string[]) {
    this._days = value;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
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

export class AutostoppingScheduleRepeatsList extends cdktf.ComplexList {
  public internalValue? : AutostoppingScheduleRepeats[] | cdktf.IResolvable

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
  public get(index: number): AutostoppingScheduleRepeatsOutputReference {
    return new AutostoppingScheduleRepeatsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/autostopping_schedule harness_autostopping_schedule}
*/
export class AutostoppingSchedule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_autostopping_schedule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AutostoppingSchedule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AutostoppingSchedule to import
  * @param importFromId The id of the existing AutostoppingSchedule that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/autostopping_schedule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AutostoppingSchedule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_autostopping_schedule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/autostopping_schedule harness_autostopping_schedule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AutostoppingScheduleConfig
  */
  public constructor(scope: Construct, id: string, config: AutostoppingScheduleConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_autostopping_schedule',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._endingOn = config.endingOn;
    this._id = config.id;
    this._name = config.name;
    this._rules = config.rules;
    this._scheduleType = config.scheduleType;
    this._startingFrom = config.startingFrom;
    this._timeZone = config.timeZone;
    this._repeats.internalValue = config.repeats;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ending_on - computed: false, optional: true, required: false
  private _endingOn?: string; 
  public get endingOn() {
    return this.getStringAttribute('ending_on');
  }
  public set endingOn(value: string) {
    this._endingOn = value;
  }
  public resetEndingOn() {
    this._endingOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endingOnInput() {
    return this._endingOn;
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

  // identifier - computed: true, optional: false, required: false
  public get identifier() {
    return this.getNumberAttribute('identifier');
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

  // rules - computed: false, optional: false, required: true
  private _rules?: number[]; 
  public get rules() {
    return this.getNumberListAttribute('rules');
  }
  public set rules(value: number[]) {
    this._rules = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules;
  }

  // schedule_type - computed: false, optional: false, required: true
  private _scheduleType?: string; 
  public get scheduleType() {
    return this.getStringAttribute('schedule_type');
  }
  public set scheduleType(value: string) {
    this._scheduleType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleTypeInput() {
    return this._scheduleType;
  }

  // starting_from - computed: false, optional: true, required: false
  private _startingFrom?: string; 
  public get startingFrom() {
    return this.getStringAttribute('starting_from');
  }
  public set startingFrom(value: string) {
    this._startingFrom = value;
  }
  public resetStartingFrom() {
    this._startingFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startingFromInput() {
    return this._startingFrom;
  }

  // time_zone - computed: false, optional: false, required: true
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }

  // repeats - computed: false, optional: true, required: false
  private _repeats = new AutostoppingScheduleRepeatsList(this, "repeats", false);
  public get repeats() {
    return this._repeats;
  }
  public putRepeats(value: AutostoppingScheduleRepeats[] | cdktf.IResolvable) {
    this._repeats.internalValue = value;
  }
  public resetRepeats() {
    this._repeats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatsInput() {
    return this._repeats.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ending_on: cdktf.stringToTerraform(this._endingOn),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      rules: cdktf.listMapper(cdktf.numberToTerraform, false)(this._rules),
      schedule_type: cdktf.stringToTerraform(this._scheduleType),
      starting_from: cdktf.stringToTerraform(this._startingFrom),
      time_zone: cdktf.stringToTerraform(this._timeZone),
      repeats: cdktf.listMapper(autostoppingScheduleRepeatsToTerraform, true)(this._repeats.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ending_on: {
        value: cdktf.stringToHclTerraform(this._endingOn),
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
      rules: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._rules),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      schedule_type: {
        value: cdktf.stringToHclTerraform(this._scheduleType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      starting_from: {
        value: cdktf.stringToHclTerraform(this._startingFrom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_zone: {
        value: cdktf.stringToHclTerraform(this._timeZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repeats: {
        value: cdktf.listMapperHcl(autostoppingScheduleRepeatsToHclTerraform, true)(this._repeats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AutostoppingScheduleRepeatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
