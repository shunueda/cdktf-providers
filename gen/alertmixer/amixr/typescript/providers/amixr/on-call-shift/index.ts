// https://registry.terraform.io/providers/alertmixer/amixr/0.2.3/docs/resources/on_call_shift
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OnCallShiftConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alertmixer/amixr/0.2.3/docs/resources/on_call_shift#by_day OnCallShift#by_day}
  */
  readonly byDay?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alertmixer/amixr/0.2.3/docs/resources/on_call_shift#by_month OnCallShift#by_month}
  */
  readonly byMonth?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alertmixer/amixr/0.2.3/docs/resources/on_call_shift#by_monthday OnCallShift#by_monthday}
  */
  readonly byMonthday?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alertmixer/amixr/0.2.3/docs/resources/on_call_shift#duration OnCallShift#duration}
  */
  readonly duration: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alertmixer/amixr/0.2.3/docs/resources/on_call_shift#frequency OnCallShift#frequency}
  */
  readonly frequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alertmixer/amixr/0.2.3/docs/resources/on_call_shift#id OnCallShift#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alertmixer/amixr/0.2.3/docs/resources/on_call_shift#interval OnCallShift#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alertmixer/amixr/0.2.3/docs/resources/on_call_shift#level OnCallShift#level}
  */
  readonly level?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alertmixer/amixr/0.2.3/docs/resources/on_call_shift#name OnCallShift#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alertmixer/amixr/0.2.3/docs/resources/on_call_shift#rolling_users OnCallShift#rolling_users}
  */
  readonly rollingUsers?: string[][] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alertmixer/amixr/0.2.3/docs/resources/on_call_shift#schedule_id OnCallShift#schedule_id}
  */
  readonly scheduleId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alertmixer/amixr/0.2.3/docs/resources/on_call_shift#start OnCallShift#start}
  */
  readonly start: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alertmixer/amixr/0.2.3/docs/resources/on_call_shift#type OnCallShift#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alertmixer/amixr/0.2.3/docs/resources/on_call_shift#users OnCallShift#users}
  */
  readonly users?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alertmixer/amixr/0.2.3/docs/resources/on_call_shift#week_start OnCallShift#week_start}
  */
  readonly weekStart?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/alertmixer/amixr/0.2.3/docs/resources/on_call_shift amixr_on_call_shift}
*/
export class OnCallShift extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "amixr_on_call_shift";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OnCallShift resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OnCallShift to import
  * @param importFromId The id of the existing OnCallShift that should be imported. Refer to the {@link https://registry.terraform.io/providers/alertmixer/amixr/0.2.3/docs/resources/on_call_shift#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OnCallShift to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "amixr_on_call_shift", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/alertmixer/amixr/0.2.3/docs/resources/on_call_shift amixr_on_call_shift} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OnCallShiftConfig
  */
  public constructor(scope: Construct, id: string, config: OnCallShiftConfig) {
    super(scope, id, {
      terraformResourceType: 'amixr_on_call_shift',
      terraformGeneratorMetadata: {
        providerName: 'amixr',
        providerVersion: '0.2.3',
        providerVersionConstraint: '0.2.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._byDay = config.byDay;
    this._byMonth = config.byMonth;
    this._byMonthday = config.byMonthday;
    this._duration = config.duration;
    this._frequency = config.frequency;
    this._id = config.id;
    this._interval = config.interval;
    this._level = config.level;
    this._name = config.name;
    this._rollingUsers = config.rollingUsers;
    this._scheduleId = config.scheduleId;
    this._start = config.start;
    this._type = config.type;
    this._users = config.users;
    this._weekStart = config.weekStart;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // by_day - computed: false, optional: true, required: false
  private _byDay?: string[]; 
  public get byDay() {
    return cdktf.Fn.tolist(this.getListAttribute('by_day'));
  }
  public set byDay(value: string[]) {
    this._byDay = value;
  }
  public resetByDay() {
    this._byDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get byDayInput() {
    return this._byDay;
  }

  // by_month - computed: false, optional: true, required: false
  private _byMonth?: number[]; 
  public get byMonth() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('by_month')));
  }
  public set byMonth(value: number[]) {
    this._byMonth = value;
  }
  public resetByMonth() {
    this._byMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get byMonthInput() {
    return this._byMonth;
  }

  // by_monthday - computed: false, optional: true, required: false
  private _byMonthday?: number[]; 
  public get byMonthday() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('by_monthday')));
  }
  public set byMonthday(value: number[]) {
    this._byMonthday = value;
  }
  public resetByMonthday() {
    this._byMonthday = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get byMonthdayInput() {
    return this._byMonthday;
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

  // frequency - computed: false, optional: true, required: false
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
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

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // level - computed: false, optional: true, required: false
  private _level?: number; 
  public get level() {
    return this.getNumberAttribute('level');
  }
  public set level(value: number) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
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

  // rolling_users - computed: false, optional: true, required: false
  private _rollingUsers?: string[][] | cdktf.IResolvable; 
  public get rollingUsers() {
    return this.interpolationForAttribute('rolling_users');
  }
  public set rollingUsers(value: string[][] | cdktf.IResolvable) {
    this._rollingUsers = value;
  }
  public resetRollingUsers() {
    this._rollingUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollingUsersInput() {
    return this._rollingUsers;
  }

  // schedule_id - computed: false, optional: false, required: true
  private _scheduleId?: string; 
  public get scheduleId() {
    return this.getStringAttribute('schedule_id');
  }
  public set scheduleId(value: string) {
    this._scheduleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleIdInput() {
    return this._scheduleId;
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

  // users - computed: false, optional: true, required: false
  private _users?: string[]; 
  public get users() {
    return cdktf.Fn.tolist(this.getListAttribute('users'));
  }
  public set users(value: string[]) {
    this._users = value;
  }
  public resetUsers() {
    this._users = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users;
  }

  // week_start - computed: false, optional: true, required: false
  private _weekStart?: string; 
  public get weekStart() {
    return this.getStringAttribute('week_start');
  }
  public set weekStart(value: string) {
    this._weekStart = value;
  }
  public resetWeekStart() {
    this._weekStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekStartInput() {
    return this._weekStart;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      by_day: cdktf.listMapper(cdktf.stringToTerraform, false)(this._byDay),
      by_month: cdktf.listMapper(cdktf.numberToTerraform, false)(this._byMonth),
      by_monthday: cdktf.listMapper(cdktf.numberToTerraform, false)(this._byMonthday),
      duration: cdktf.numberToTerraform(this._duration),
      frequency: cdktf.stringToTerraform(this._frequency),
      id: cdktf.stringToTerraform(this._id),
      interval: cdktf.numberToTerraform(this._interval),
      level: cdktf.numberToTerraform(this._level),
      name: cdktf.stringToTerraform(this._name),
      rolling_users: cdktf.listMapper(cdktf.listMapper(cdktf.stringToTerraform, false), false)(this._rollingUsers),
      schedule_id: cdktf.stringToTerraform(this._scheduleId),
      start: cdktf.stringToTerraform(this._start),
      type: cdktf.stringToTerraform(this._type),
      users: cdktf.listMapper(cdktf.stringToTerraform, false)(this._users),
      week_start: cdktf.stringToTerraform(this._weekStart),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      by_day: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._byDay),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      by_month: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._byMonth),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      by_monthday: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._byMonthday),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      duration: {
        value: cdktf.numberToHclTerraform(this._duration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      frequency: {
        value: cdktf.stringToHclTerraform(this._frequency),
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
      interval: {
        value: cdktf.numberToHclTerraform(this._interval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      level: {
        value: cdktf.numberToHclTerraform(this._level),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rolling_users: {
        value: cdktf.listMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false), false)(this._rollingUsers),
        isBlock: false,
        type: "list",
        storageClassType: "stringListList",
      },
      schedule_id: {
        value: cdktf.stringToHclTerraform(this._scheduleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start: {
        value: cdktf.stringToHclTerraform(this._start),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      users: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._users),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      week_start: {
        value: cdktf.stringToHclTerraform(this._weekStart),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
