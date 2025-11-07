// https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/schedule_rotation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ScheduleRotationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/schedule_rotation#end_date ScheduleRotation#end_date}
  */
  readonly endDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/schedule_rotation#id ScheduleRotation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/schedule_rotation#length ScheduleRotation#length}
  */
  readonly length?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/schedule_rotation#name ScheduleRotation#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/schedule_rotation#schedule_id ScheduleRotation#schedule_id}
  */
  readonly scheduleId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/schedule_rotation#start_date ScheduleRotation#start_date}
  */
  readonly startDate: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/schedule_rotation#type ScheduleRotation#type}
  */
  readonly type: string;
  /**
  * participant block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/schedule_rotation#participant ScheduleRotation#participant}
  */
  readonly participant: ScheduleRotationParticipant[] | cdktf.IResolvable;
  /**
  * time_restriction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/schedule_rotation#time_restriction ScheduleRotation#time_restriction}
  */
  readonly timeRestriction?: ScheduleRotationTimeRestriction;
}
export interface ScheduleRotationParticipant {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/schedule_rotation#id ScheduleRotation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/schedule_rotation#type ScheduleRotation#type}
  */
  readonly type: string;
}

export function scheduleRotationParticipantToTerraform(struct?: ScheduleRotationParticipant | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function scheduleRotationParticipantToHclTerraform(struct?: ScheduleRotationParticipant | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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

export class ScheduleRotationParticipantOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ScheduleRotationParticipant | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScheduleRotationParticipant | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._type = value.type;
    }
  }

  // id - computed: false, optional: true, required: false
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

export class ScheduleRotationParticipantList extends cdktf.ComplexList {
  public internalValue? : ScheduleRotationParticipant[] | cdktf.IResolvable

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
  public get(index: number): ScheduleRotationParticipantOutputReference {
    return new ScheduleRotationParticipantOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ScheduleRotationTimeRestrictionRestriction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/schedule_rotation#end_hour ScheduleRotation#end_hour}
  */
  readonly endHour: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/schedule_rotation#end_min ScheduleRotation#end_min}
  */
  readonly endMin: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/schedule_rotation#start_hour ScheduleRotation#start_hour}
  */
  readonly startHour: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/schedule_rotation#start_min ScheduleRotation#start_min}
  */
  readonly startMin: number;
}

export function scheduleRotationTimeRestrictionRestrictionToTerraform(struct?: ScheduleRotationTimeRestrictionRestrictionOutputReference | ScheduleRotationTimeRestrictionRestriction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_hour: cdktf.numberToTerraform(struct!.endHour),
    end_min: cdktf.numberToTerraform(struct!.endMin),
    start_hour: cdktf.numberToTerraform(struct!.startHour),
    start_min: cdktf.numberToTerraform(struct!.startMin),
  }
}


export function scheduleRotationTimeRestrictionRestrictionToHclTerraform(struct?: ScheduleRotationTimeRestrictionRestrictionOutputReference | ScheduleRotationTimeRestrictionRestriction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_hour: {
      value: cdktf.numberToHclTerraform(struct!.endHour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    end_min: {
      value: cdktf.numberToHclTerraform(struct!.endMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_hour: {
      value: cdktf.numberToHclTerraform(struct!.startHour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_min: {
      value: cdktf.numberToHclTerraform(struct!.startMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScheduleRotationTimeRestrictionRestrictionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ScheduleRotationTimeRestrictionRestriction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.endHour = this._endHour;
    }
    if (this._endMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.endMin = this._endMin;
    }
    if (this._startHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.startHour = this._startHour;
    }
    if (this._startMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.startMin = this._startMin;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScheduleRotationTimeRestrictionRestriction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endHour = undefined;
      this._endMin = undefined;
      this._startHour = undefined;
      this._startMin = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endHour = value.endHour;
      this._endMin = value.endMin;
      this._startHour = value.startHour;
      this._startMin = value.startMin;
    }
  }

  // end_hour - computed: false, optional: false, required: true
  private _endHour?: number; 
  public get endHour() {
    return this.getNumberAttribute('end_hour');
  }
  public set endHour(value: number) {
    this._endHour = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endHourInput() {
    return this._endHour;
  }

  // end_min - computed: false, optional: false, required: true
  private _endMin?: number; 
  public get endMin() {
    return this.getNumberAttribute('end_min');
  }
  public set endMin(value: number) {
    this._endMin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endMinInput() {
    return this._endMin;
  }

  // start_hour - computed: false, optional: false, required: true
  private _startHour?: number; 
  public get startHour() {
    return this.getNumberAttribute('start_hour');
  }
  public set startHour(value: number) {
    this._startHour = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startHourInput() {
    return this._startHour;
  }

  // start_min - computed: false, optional: false, required: true
  private _startMin?: number; 
  public get startMin() {
    return this.getNumberAttribute('start_min');
  }
  public set startMin(value: number) {
    this._startMin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startMinInput() {
    return this._startMin;
  }
}
export interface ScheduleRotationTimeRestrictionRestrictions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/schedule_rotation#end_day ScheduleRotation#end_day}
  */
  readonly endDay: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/schedule_rotation#end_hour ScheduleRotation#end_hour}
  */
  readonly endHour: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/schedule_rotation#end_min ScheduleRotation#end_min}
  */
  readonly endMin: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/schedule_rotation#start_day ScheduleRotation#start_day}
  */
  readonly startDay: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/schedule_rotation#start_hour ScheduleRotation#start_hour}
  */
  readonly startHour: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/schedule_rotation#start_min ScheduleRotation#start_min}
  */
  readonly startMin: number;
}

export function scheduleRotationTimeRestrictionRestrictionsToTerraform(struct?: ScheduleRotationTimeRestrictionRestrictions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_day: cdktf.stringToTerraform(struct!.endDay),
    end_hour: cdktf.numberToTerraform(struct!.endHour),
    end_min: cdktf.numberToTerraform(struct!.endMin),
    start_day: cdktf.stringToTerraform(struct!.startDay),
    start_hour: cdktf.numberToTerraform(struct!.startHour),
    start_min: cdktf.numberToTerraform(struct!.startMin),
  }
}


export function scheduleRotationTimeRestrictionRestrictionsToHclTerraform(struct?: ScheduleRotationTimeRestrictionRestrictions | cdktf.IResolvable): any {
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
    end_hour: {
      value: cdktf.numberToHclTerraform(struct!.endHour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    end_min: {
      value: cdktf.numberToHclTerraform(struct!.endMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_day: {
      value: cdktf.stringToHclTerraform(struct!.startDay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_hour: {
      value: cdktf.numberToHclTerraform(struct!.startHour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_min: {
      value: cdktf.numberToHclTerraform(struct!.startMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScheduleRotationTimeRestrictionRestrictionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ScheduleRotationTimeRestrictionRestrictions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.endDay = this._endDay;
    }
    if (this._endHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.endHour = this._endHour;
    }
    if (this._endMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.endMin = this._endMin;
    }
    if (this._startDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.startDay = this._startDay;
    }
    if (this._startHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.startHour = this._startHour;
    }
    if (this._startMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.startMin = this._startMin;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScheduleRotationTimeRestrictionRestrictions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endDay = undefined;
      this._endHour = undefined;
      this._endMin = undefined;
      this._startDay = undefined;
      this._startHour = undefined;
      this._startMin = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endDay = value.endDay;
      this._endHour = value.endHour;
      this._endMin = value.endMin;
      this._startDay = value.startDay;
      this._startHour = value.startHour;
      this._startMin = value.startMin;
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

  // end_hour - computed: false, optional: false, required: true
  private _endHour?: number; 
  public get endHour() {
    return this.getNumberAttribute('end_hour');
  }
  public set endHour(value: number) {
    this._endHour = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endHourInput() {
    return this._endHour;
  }

  // end_min - computed: false, optional: false, required: true
  private _endMin?: number; 
  public get endMin() {
    return this.getNumberAttribute('end_min');
  }
  public set endMin(value: number) {
    this._endMin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endMinInput() {
    return this._endMin;
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

  // start_hour - computed: false, optional: false, required: true
  private _startHour?: number; 
  public get startHour() {
    return this.getNumberAttribute('start_hour');
  }
  public set startHour(value: number) {
    this._startHour = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startHourInput() {
    return this._startHour;
  }

  // start_min - computed: false, optional: false, required: true
  private _startMin?: number; 
  public get startMin() {
    return this.getNumberAttribute('start_min');
  }
  public set startMin(value: number) {
    this._startMin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startMinInput() {
    return this._startMin;
  }
}

export class ScheduleRotationTimeRestrictionRestrictionsList extends cdktf.ComplexList {
  public internalValue? : ScheduleRotationTimeRestrictionRestrictions[] | cdktf.IResolvable

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
  public get(index: number): ScheduleRotationTimeRestrictionRestrictionsOutputReference {
    return new ScheduleRotationTimeRestrictionRestrictionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ScheduleRotationTimeRestriction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/schedule_rotation#type ScheduleRotation#type}
  */
  readonly type: string;
  /**
  * restriction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/schedule_rotation#restriction ScheduleRotation#restriction}
  */
  readonly restriction?: ScheduleRotationTimeRestrictionRestriction;
  /**
  * restrictions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/schedule_rotation#restrictions ScheduleRotation#restrictions}
  */
  readonly restrictions?: ScheduleRotationTimeRestrictionRestrictions[] | cdktf.IResolvable;
}

export function scheduleRotationTimeRestrictionToTerraform(struct?: ScheduleRotationTimeRestrictionOutputReference | ScheduleRotationTimeRestriction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    restriction: scheduleRotationTimeRestrictionRestrictionToTerraform(struct!.restriction),
    restrictions: cdktf.listMapper(scheduleRotationTimeRestrictionRestrictionsToTerraform, true)(struct!.restrictions),
  }
}


export function scheduleRotationTimeRestrictionToHclTerraform(struct?: ScheduleRotationTimeRestrictionOutputReference | ScheduleRotationTimeRestriction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    restriction: {
      value: scheduleRotationTimeRestrictionRestrictionToHclTerraform(struct!.restriction),
      isBlock: true,
      type: "set",
      storageClassType: "ScheduleRotationTimeRestrictionRestrictionList",
    },
    restrictions: {
      value: cdktf.listMapperHcl(scheduleRotationTimeRestrictionRestrictionsToHclTerraform, true)(struct!.restrictions),
      isBlock: true,
      type: "set",
      storageClassType: "ScheduleRotationTimeRestrictionRestrictionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScheduleRotationTimeRestrictionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ScheduleRotationTimeRestriction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._restriction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.restriction = this._restriction?.internalValue;
    }
    if (this._restrictions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictions = this._restrictions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScheduleRotationTimeRestriction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._restriction.internalValue = undefined;
      this._restrictions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._restriction.internalValue = value.restriction;
      this._restrictions.internalValue = value.restrictions;
    }
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

  // restriction - computed: false, optional: true, required: false
  private _restriction = new ScheduleRotationTimeRestrictionRestrictionOutputReference(this, "restriction");
  public get restriction() {
    return this._restriction;
  }
  public putRestriction(value: ScheduleRotationTimeRestrictionRestriction) {
    this._restriction.internalValue = value;
  }
  public resetRestriction() {
    this._restriction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictionInput() {
    return this._restriction.internalValue;
  }

  // restrictions - computed: false, optional: true, required: false
  private _restrictions = new ScheduleRotationTimeRestrictionRestrictionsList(this, "restrictions", true);
  public get restrictions() {
    return this._restrictions;
  }
  public putRestrictions(value: ScheduleRotationTimeRestrictionRestrictions[] | cdktf.IResolvable) {
    this._restrictions.internalValue = value;
  }
  public resetRestrictions() {
    this._restrictions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictionsInput() {
    return this._restrictions.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/schedule_rotation opsgenie_schedule_rotation}
*/
export class ScheduleRotation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opsgenie_schedule_rotation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ScheduleRotation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ScheduleRotation to import
  * @param importFromId The id of the existing ScheduleRotation that should be imported. Refer to the {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/schedule_rotation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ScheduleRotation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opsgenie_schedule_rotation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/schedule_rotation opsgenie_schedule_rotation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ScheduleRotationConfig
  */
  public constructor(scope: Construct, id: string, config: ScheduleRotationConfig) {
    super(scope, id, {
      terraformResourceType: 'opsgenie_schedule_rotation',
      terraformGeneratorMetadata: {
        providerName: 'opsgenie',
        providerVersion: '0.6.40'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._endDate = config.endDate;
    this._id = config.id;
    this._length = config.length;
    this._name = config.name;
    this._scheduleId = config.scheduleId;
    this._startDate = config.startDate;
    this._type = config.type;
    this._participant.internalValue = config.participant;
    this._timeRestriction.internalValue = config.timeRestriction;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // end_date - computed: false, optional: true, required: false
  private _endDate?: string; 
  public get endDate() {
    return this.getStringAttribute('end_date');
  }
  public set endDate(value: string) {
    this._endDate = value;
  }
  public resetEndDate() {
    this._endDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endDateInput() {
    return this._endDate;
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

  // length - computed: false, optional: true, required: false
  private _length?: number; 
  public get length() {
    return this.getNumberAttribute('length');
  }
  public set length(value: number) {
    this._length = value;
  }
  public resetLength() {
    this._length = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

  // start_date - computed: false, optional: false, required: true
  private _startDate?: string; 
  public get startDate() {
    return this.getStringAttribute('start_date');
  }
  public set startDate(value: string) {
    this._startDate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startDateInput() {
    return this._startDate;
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

  // participant - computed: false, optional: false, required: true
  private _participant = new ScheduleRotationParticipantList(this, "participant", false);
  public get participant() {
    return this._participant;
  }
  public putParticipant(value: ScheduleRotationParticipant[] | cdktf.IResolvable) {
    this._participant.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get participantInput() {
    return this._participant.internalValue;
  }

  // time_restriction - computed: false, optional: true, required: false
  private _timeRestriction = new ScheduleRotationTimeRestrictionOutputReference(this, "time_restriction");
  public get timeRestriction() {
    return this._timeRestriction;
  }
  public putTimeRestriction(value: ScheduleRotationTimeRestriction) {
    this._timeRestriction.internalValue = value;
  }
  public resetTimeRestriction() {
    this._timeRestriction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeRestrictionInput() {
    return this._timeRestriction.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      end_date: cdktf.stringToTerraform(this._endDate),
      id: cdktf.stringToTerraform(this._id),
      length: cdktf.numberToTerraform(this._length),
      name: cdktf.stringToTerraform(this._name),
      schedule_id: cdktf.stringToTerraform(this._scheduleId),
      start_date: cdktf.stringToTerraform(this._startDate),
      type: cdktf.stringToTerraform(this._type),
      participant: cdktf.listMapper(scheduleRotationParticipantToTerraform, true)(this._participant.internalValue),
      time_restriction: scheduleRotationTimeRestrictionToTerraform(this._timeRestriction.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      end_date: {
        value: cdktf.stringToHclTerraform(this._endDate),
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
      length: {
        value: cdktf.numberToHclTerraform(this._length),
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
      schedule_id: {
        value: cdktf.stringToHclTerraform(this._scheduleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_date: {
        value: cdktf.stringToHclTerraform(this._startDate),
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
      participant: {
        value: cdktf.listMapperHcl(scheduleRotationParticipantToHclTerraform, true)(this._participant.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ScheduleRotationParticipantList",
      },
      time_restriction: {
        value: scheduleRotationTimeRestrictionToHclTerraform(this._timeRestriction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ScheduleRotationTimeRestrictionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
