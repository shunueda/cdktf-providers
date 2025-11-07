// https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.9/docs/resources/on_call_schedule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OnCallScheduleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.9/docs/resources/on_call_schedule#color OnCallSchedule#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.9/docs/resources/on_call_schedule#description OnCallSchedule#description}
  */
  readonly description?: string;
  /**
  * RFC3339 timestamp for when the schedule update should take effect. If not provided or if the time is in the past, the update will take effect immediately.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.9/docs/resources/on_call_schedule#effective_at OnCallSchedule#effective_at}
  */
  readonly effectiveAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.9/docs/resources/on_call_schedule#id OnCallSchedule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.9/docs/resources/on_call_schedule#member_ids OnCallSchedule#member_ids}
  */
  readonly memberIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.9/docs/resources/on_call_schedule#members OnCallSchedule#members}
  */
  readonly members?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.9/docs/resources/on_call_schedule#name OnCallSchedule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.9/docs/resources/on_call_schedule#slack_user_group_id OnCallSchedule#slack_user_group_id}
  */
  readonly slackUserGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.9/docs/resources/on_call_schedule#start_time OnCallSchedule#start_time}
  */
  readonly startTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.9/docs/resources/on_call_schedule#team_id OnCallSchedule#team_id}
  */
  readonly teamId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.9/docs/resources/on_call_schedule#time_zone OnCallSchedule#time_zone}
  */
  readonly timeZone: string;
  /**
  * restrictions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.9/docs/resources/on_call_schedule#restrictions OnCallSchedule#restrictions}
  */
  readonly restrictions?: OnCallScheduleRestrictions[] | cdktf.IResolvable;
  /**
  * strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.9/docs/resources/on_call_schedule#strategy OnCallSchedule#strategy}
  */
  readonly strategy: OnCallScheduleStrategy;
}
export interface OnCallScheduleRestrictions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.9/docs/resources/on_call_schedule#end_day OnCallSchedule#end_day}
  */
  readonly endDay: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.9/docs/resources/on_call_schedule#end_time OnCallSchedule#end_time}
  */
  readonly endTime: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.9/docs/resources/on_call_schedule#start_day OnCallSchedule#start_day}
  */
  readonly startDay: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.9/docs/resources/on_call_schedule#start_time OnCallSchedule#start_time}
  */
  readonly startTime: string;
}

export function onCallScheduleRestrictionsToTerraform(struct?: OnCallScheduleRestrictions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_day: cdktf.stringToTerraform(struct!.endDay),
    end_time: cdktf.stringToTerraform(struct!.endTime),
    start_day: cdktf.stringToTerraform(struct!.startDay),
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}


export function onCallScheduleRestrictionsToHclTerraform(struct?: OnCallScheduleRestrictions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class OnCallScheduleRestrictionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OnCallScheduleRestrictions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.endDay = this._endDay;
    }
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
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

  public set internalValue(value: OnCallScheduleRestrictions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endDay = undefined;
      this._endTime = undefined;
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
      this._endDay = value.endDay;
      this._endTime = value.endTime;
      this._startDay = value.startDay;
      this._startTime = value.startTime;
    }
  }

  // end_day - computed: false, optional: false, required: true
  private _endDay?: string; 
  public get endDay() {
    return this.getStringAttribute('end_day');
  }
  public set endDay(value: string) {
    this._endDay = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endDayInput() {
    return this._endDay;
  }

  // end_time - computed: false, optional: false, required: true
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // start_day - computed: false, optional: false, required: true
  private _startDay?: string; 
  public get startDay() {
    return this.getStringAttribute('start_day');
  }
  public set startDay(value: string) {
    this._startDay = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startDayInput() {
    return this._startDay;
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
}

export class OnCallScheduleRestrictionsList extends cdktf.ComplexList {
  public internalValue? : OnCallScheduleRestrictions[] | cdktf.IResolvable

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
  public get(index: number): OnCallScheduleRestrictionsOutputReference {
    return new OnCallScheduleRestrictionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OnCallScheduleStrategy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.9/docs/resources/on_call_schedule#handoff_day OnCallSchedule#handoff_day}
  */
  readonly handoffDay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.9/docs/resources/on_call_schedule#handoff_time OnCallSchedule#handoff_time}
  */
  readonly handoffTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.9/docs/resources/on_call_schedule#shift_duration OnCallSchedule#shift_duration}
  */
  readonly shiftDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.9/docs/resources/on_call_schedule#type OnCallSchedule#type}
  */
  readonly type: string;
}

export function onCallScheduleStrategyToTerraform(struct?: OnCallScheduleStrategyOutputReference | OnCallScheduleStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    handoff_day: cdktf.stringToTerraform(struct!.handoffDay),
    handoff_time: cdktf.stringToTerraform(struct!.handoffTime),
    shift_duration: cdktf.stringToTerraform(struct!.shiftDuration),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function onCallScheduleStrategyToHclTerraform(struct?: OnCallScheduleStrategyOutputReference | OnCallScheduleStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    handoff_day: {
      value: cdktf.stringToHclTerraform(struct!.handoffDay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    handoff_time: {
      value: cdktf.stringToHclTerraform(struct!.handoffTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shift_duration: {
      value: cdktf.stringToHclTerraform(struct!.shiftDuration),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OnCallScheduleStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OnCallScheduleStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._handoffDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.handoffDay = this._handoffDay;
    }
    if (this._handoffTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.handoffTime = this._handoffTime;
    }
    if (this._shiftDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.shiftDuration = this._shiftDuration;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OnCallScheduleStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._handoffDay = undefined;
      this._handoffTime = undefined;
      this._shiftDuration = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._handoffDay = value.handoffDay;
      this._handoffTime = value.handoffTime;
      this._shiftDuration = value.shiftDuration;
      this._type = value.type;
    }
  }

  // handoff_day - computed: false, optional: true, required: false
  private _handoffDay?: string; 
  public get handoffDay() {
    return this.getStringAttribute('handoff_day');
  }
  public set handoffDay(value: string) {
    this._handoffDay = value;
  }
  public resetHandoffDay() {
    this._handoffDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get handoffDayInput() {
    return this._handoffDay;
  }

  // handoff_time - computed: false, optional: true, required: false
  private _handoffTime?: string; 
  public get handoffTime() {
    return this.getStringAttribute('handoff_time');
  }
  public set handoffTime(value: string) {
    this._handoffTime = value;
  }
  public resetHandoffTime() {
    this._handoffTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get handoffTimeInput() {
    return this._handoffTime;
  }

  // shift_duration - computed: false, optional: true, required: false
  private _shiftDuration?: string; 
  public get shiftDuration() {
    return this.getStringAttribute('shift_duration');
  }
  public set shiftDuration(value: string) {
    this._shiftDuration = value;
  }
  public resetShiftDuration() {
    this._shiftDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shiftDurationInput() {
    return this._shiftDuration;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.9/docs/resources/on_call_schedule firehydrant_on_call_schedule}
*/
export class OnCallSchedule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "firehydrant_on_call_schedule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OnCallSchedule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OnCallSchedule to import
  * @param importFromId The id of the existing OnCallSchedule that should be imported. Refer to the {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.9/docs/resources/on_call_schedule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OnCallSchedule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "firehydrant_on_call_schedule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.9/docs/resources/on_call_schedule firehydrant_on_call_schedule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OnCallScheduleConfig
  */
  public constructor(scope: Construct, id: string, config: OnCallScheduleConfig) {
    super(scope, id, {
      terraformResourceType: 'firehydrant_on_call_schedule',
      terraformGeneratorMetadata: {
        providerName: 'firehydrant',
        providerVersion: '0.14.9'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._color = config.color;
    this._description = config.description;
    this._effectiveAt = config.effectiveAt;
    this._id = config.id;
    this._memberIds = config.memberIds;
    this._members = config.members;
    this._name = config.name;
    this._slackUserGroupId = config.slackUserGroupId;
    this._startTime = config.startTime;
    this._teamId = config.teamId;
    this._timeZone = config.timeZone;
    this._restrictions.internalValue = config.restrictions;
    this._strategy.internalValue = config.strategy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

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

  // effective_at - computed: false, optional: true, required: false
  private _effectiveAt?: string; 
  public get effectiveAt() {
    return this.getStringAttribute('effective_at');
  }
  public set effectiveAt(value: string) {
    this._effectiveAt = value;
  }
  public resetEffectiveAt() {
    this._effectiveAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectiveAtInput() {
    return this._effectiveAt;
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

  // member_ids - computed: false, optional: true, required: false
  private _memberIds?: string[]; 
  public get memberIds() {
    return this.getListAttribute('member_ids');
  }
  public set memberIds(value: string[]) {
    this._memberIds = value;
  }
  public resetMemberIds() {
    this._memberIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberIdsInput() {
    return this._memberIds;
  }

  // members - computed: false, optional: true, required: false
  private _members?: string[]; 
  public get members() {
    return this.getListAttribute('members');
  }
  public set members(value: string[]) {
    this._members = value;
  }
  public resetMembers() {
    this._members = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members;
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

  // slack_user_group_id - computed: false, optional: true, required: false
  private _slackUserGroupId?: string; 
  public get slackUserGroupId() {
    return this.getStringAttribute('slack_user_group_id');
  }
  public set slackUserGroupId(value: string) {
    this._slackUserGroupId = value;
  }
  public resetSlackUserGroupId() {
    this._slackUserGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slackUserGroupIdInput() {
    return this._slackUserGroupId;
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

  // team_id - computed: false, optional: false, required: true
  private _teamId?: string; 
  public get teamId() {
    return this.getStringAttribute('team_id');
  }
  public set teamId(value: string) {
    this._teamId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get teamIdInput() {
    return this._teamId;
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

  // restrictions - computed: false, optional: true, required: false
  private _restrictions = new OnCallScheduleRestrictionsList(this, "restrictions", false);
  public get restrictions() {
    return this._restrictions;
  }
  public putRestrictions(value: OnCallScheduleRestrictions[] | cdktf.IResolvable) {
    this._restrictions.internalValue = value;
  }
  public resetRestrictions() {
    this._restrictions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictionsInput() {
    return this._restrictions.internalValue;
  }

  // strategy - computed: false, optional: false, required: true
  private _strategy = new OnCallScheduleStrategyOutputReference(this, "strategy");
  public get strategy() {
    return this._strategy;
  }
  public putStrategy(value: OnCallScheduleStrategy) {
    this._strategy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      color: cdktf.stringToTerraform(this._color),
      description: cdktf.stringToTerraform(this._description),
      effective_at: cdktf.stringToTerraform(this._effectiveAt),
      id: cdktf.stringToTerraform(this._id),
      member_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._memberIds),
      members: cdktf.listMapper(cdktf.stringToTerraform, false)(this._members),
      name: cdktf.stringToTerraform(this._name),
      slack_user_group_id: cdktf.stringToTerraform(this._slackUserGroupId),
      start_time: cdktf.stringToTerraform(this._startTime),
      team_id: cdktf.stringToTerraform(this._teamId),
      time_zone: cdktf.stringToTerraform(this._timeZone),
      restrictions: cdktf.listMapper(onCallScheduleRestrictionsToTerraform, true)(this._restrictions.internalValue),
      strategy: onCallScheduleStrategyToTerraform(this._strategy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      color: {
        value: cdktf.stringToHclTerraform(this._color),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      effective_at: {
        value: cdktf.stringToHclTerraform(this._effectiveAt),
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
      member_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._memberIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      members: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._members),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slack_user_group_id: {
        value: cdktf.stringToHclTerraform(this._slackUserGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_time: {
        value: cdktf.stringToHclTerraform(this._startTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      team_id: {
        value: cdktf.stringToHclTerraform(this._teamId),
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
      restrictions: {
        value: cdktf.listMapperHcl(onCallScheduleRestrictionsToHclTerraform, true)(this._restrictions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OnCallScheduleRestrictionsList",
      },
      strategy: {
        value: onCallScheduleStrategyToHclTerraform(this._strategy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OnCallScheduleStrategyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
