// https://registry.terraform.io/providers/uptime-com/uptime/2.17.1/docs/resources/check_maintenance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CheckMaintenanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.17.1/docs/resources/check_maintenance#check_id CheckMaintenance#check_id}
  */
  readonly checkId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.17.1/docs/resources/check_maintenance#schedule CheckMaintenance#schedule}
  */
  readonly schedule?: CheckMaintenanceSchedule[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.17.1/docs/resources/check_maintenance#state CheckMaintenance#state}
  */
  readonly state?: string;
}
export interface CheckMaintenanceSchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.17.1/docs/resources/check_maintenance#from_time CheckMaintenance#from_time}
  */
  readonly fromTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.17.1/docs/resources/check_maintenance#monthday CheckMaintenance#monthday}
  */
  readonly monthday?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.17.1/docs/resources/check_maintenance#monthday_from CheckMaintenance#monthday_from}
  */
  readonly monthdayFrom?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.17.1/docs/resources/check_maintenance#monthday_to CheckMaintenance#monthday_to}
  */
  readonly monthdayTo?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.17.1/docs/resources/check_maintenance#once_end_date CheckMaintenance#once_end_date}
  */
  readonly onceEndDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.17.1/docs/resources/check_maintenance#once_start_date CheckMaintenance#once_start_date}
  */
  readonly onceStartDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.17.1/docs/resources/check_maintenance#to_time CheckMaintenance#to_time}
  */
  readonly toTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.17.1/docs/resources/check_maintenance#type CheckMaintenance#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.17.1/docs/resources/check_maintenance#weekdays CheckMaintenance#weekdays}
  */
  readonly weekdays?: number[];
}

export function checkMaintenanceScheduleToTerraform(struct?: CheckMaintenanceSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from_time: cdktf.stringToTerraform(struct!.fromTime),
    monthday: cdktf.numberToTerraform(struct!.monthday),
    monthday_from: cdktf.numberToTerraform(struct!.monthdayFrom),
    monthday_to: cdktf.numberToTerraform(struct!.monthdayTo),
    once_end_date: cdktf.stringToTerraform(struct!.onceEndDate),
    once_start_date: cdktf.stringToTerraform(struct!.onceStartDate),
    to_time: cdktf.stringToTerraform(struct!.toTime),
    type: cdktf.stringToTerraform(struct!.type),
    weekdays: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.weekdays),
  }
}


export function checkMaintenanceScheduleToHclTerraform(struct?: CheckMaintenanceSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from_time: {
      value: cdktf.stringToHclTerraform(struct!.fromTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    monthday: {
      value: cdktf.numberToHclTerraform(struct!.monthday),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    monthday_from: {
      value: cdktf.numberToHclTerraform(struct!.monthdayFrom),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    monthday_to: {
      value: cdktf.numberToHclTerraform(struct!.monthdayTo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    once_end_date: {
      value: cdktf.stringToHclTerraform(struct!.onceEndDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    once_start_date: {
      value: cdktf.stringToHclTerraform(struct!.onceStartDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    to_time: {
      value: cdktf.stringToHclTerraform(struct!.toTime),
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
    weekdays: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.weekdays),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CheckMaintenanceScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CheckMaintenanceSchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fromTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromTime = this._fromTime;
    }
    if (this._monthday !== undefined) {
      hasAnyValues = true;
      internalValueResult.monthday = this._monthday;
    }
    if (this._monthdayFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.monthdayFrom = this._monthdayFrom;
    }
    if (this._monthdayTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.monthdayTo = this._monthdayTo;
    }
    if (this._onceEndDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.onceEndDate = this._onceEndDate;
    }
    if (this._onceStartDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.onceStartDate = this._onceStartDate;
    }
    if (this._toTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.toTime = this._toTime;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._weekdays !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekdays = this._weekdays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CheckMaintenanceSchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fromTime = undefined;
      this._monthday = undefined;
      this._monthdayFrom = undefined;
      this._monthdayTo = undefined;
      this._onceEndDate = undefined;
      this._onceStartDate = undefined;
      this._toTime = undefined;
      this._type = undefined;
      this._weekdays = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fromTime = value.fromTime;
      this._monthday = value.monthday;
      this._monthdayFrom = value.monthdayFrom;
      this._monthdayTo = value.monthdayTo;
      this._onceEndDate = value.onceEndDate;
      this._onceStartDate = value.onceStartDate;
      this._toTime = value.toTime;
      this._type = value.type;
      this._weekdays = value.weekdays;
    }
  }

  // from_time - computed: true, optional: true, required: false
  private _fromTime?: string; 
  public get fromTime() {
    return this.getStringAttribute('from_time');
  }
  public set fromTime(value: string) {
    this._fromTime = value;
  }
  public resetFromTime() {
    this._fromTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromTimeInput() {
    return this._fromTime;
  }

  // monthday - computed: true, optional: true, required: false
  private _monthday?: number; 
  public get monthday() {
    return this.getNumberAttribute('monthday');
  }
  public set monthday(value: number) {
    this._monthday = value;
  }
  public resetMonthday() {
    this._monthday = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthdayInput() {
    return this._monthday;
  }

  // monthday_from - computed: true, optional: true, required: false
  private _monthdayFrom?: number; 
  public get monthdayFrom() {
    return this.getNumberAttribute('monthday_from');
  }
  public set monthdayFrom(value: number) {
    this._monthdayFrom = value;
  }
  public resetMonthdayFrom() {
    this._monthdayFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthdayFromInput() {
    return this._monthdayFrom;
  }

  // monthday_to - computed: true, optional: true, required: false
  private _monthdayTo?: number; 
  public get monthdayTo() {
    return this.getNumberAttribute('monthday_to');
  }
  public set monthdayTo(value: number) {
    this._monthdayTo = value;
  }
  public resetMonthdayTo() {
    this._monthdayTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthdayToInput() {
    return this._monthdayTo;
  }

  // once_end_date - computed: true, optional: true, required: false
  private _onceEndDate?: string; 
  public get onceEndDate() {
    return this.getStringAttribute('once_end_date');
  }
  public set onceEndDate(value: string) {
    this._onceEndDate = value;
  }
  public resetOnceEndDate() {
    this._onceEndDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onceEndDateInput() {
    return this._onceEndDate;
  }

  // once_start_date - computed: true, optional: true, required: false
  private _onceStartDate?: string; 
  public get onceStartDate() {
    return this.getStringAttribute('once_start_date');
  }
  public set onceStartDate(value: string) {
    this._onceStartDate = value;
  }
  public resetOnceStartDate() {
    this._onceStartDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onceStartDateInput() {
    return this._onceStartDate;
  }

  // to_time - computed: true, optional: true, required: false
  private _toTime?: string; 
  public get toTime() {
    return this.getStringAttribute('to_time');
  }
  public set toTime(value: string) {
    this._toTime = value;
  }
  public resetToTime() {
    this._toTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toTimeInput() {
    return this._toTime;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // weekdays - computed: true, optional: true, required: false
  private _weekdays?: number[]; 
  public get weekdays() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('weekdays')));
  }
  public set weekdays(value: number[]) {
    this._weekdays = value;
  }
  public resetWeekdays() {
    this._weekdays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekdaysInput() {
    return this._weekdays;
  }
}

export class CheckMaintenanceScheduleList extends cdktf.ComplexList {
  public internalValue? : CheckMaintenanceSchedule[] | cdktf.IResolvable

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
  public get(index: number): CheckMaintenanceScheduleOutputReference {
    return new CheckMaintenanceScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/uptime-com/uptime/2.17.1/docs/resources/check_maintenance uptime_check_maintenance}
*/
export class CheckMaintenance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "uptime_check_maintenance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CheckMaintenance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CheckMaintenance to import
  * @param importFromId The id of the existing CheckMaintenance that should be imported. Refer to the {@link https://registry.terraform.io/providers/uptime-com/uptime/2.17.1/docs/resources/check_maintenance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CheckMaintenance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "uptime_check_maintenance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/uptime-com/uptime/2.17.1/docs/resources/check_maintenance uptime_check_maintenance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CheckMaintenanceConfig
  */
  public constructor(scope: Construct, id: string, config: CheckMaintenanceConfig) {
    super(scope, id, {
      terraformResourceType: 'uptime_check_maintenance',
      terraformGeneratorMetadata: {
        providerName: 'uptime',
        providerVersion: '2.17.1',
        providerVersionConstraint: '2.17.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._checkId = config.checkId;
    this._schedule.internalValue = config.schedule;
    this._state = config.state;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // check_id - computed: false, optional: false, required: true
  private _checkId?: number; 
  public get checkId() {
    return this.getNumberAttribute('check_id');
  }
  public set checkId(value: number) {
    this._checkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get checkIdInput() {
    return this._checkId;
  }

  // schedule - computed: true, optional: true, required: false
  private _schedule = new CheckMaintenanceScheduleList(this, "schedule", true);
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: CheckMaintenanceSchedule[] | cdktf.IResolvable) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      check_id: cdktf.numberToTerraform(this._checkId),
      schedule: cdktf.listMapper(checkMaintenanceScheduleToTerraform, false)(this._schedule.internalValue),
      state: cdktf.stringToTerraform(this._state),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      check_id: {
        value: cdktf.numberToHclTerraform(this._checkId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      schedule: {
        value: cdktf.listMapperHcl(checkMaintenanceScheduleToHclTerraform, false)(this._schedule.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CheckMaintenanceScheduleList",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
