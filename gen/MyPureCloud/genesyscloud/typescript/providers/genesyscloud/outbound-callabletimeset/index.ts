// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/outbound_callabletimeset
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OutboundCallabletimesetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/outbound_callabletimeset#id OutboundCallabletimeset#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the CallableTimeSet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/outbound_callabletimeset#name OutboundCallabletimeset#name}
  */
  readonly name: string;
  /**
  * callable_times block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/outbound_callabletimeset#callable_times OutboundCallabletimeset#callable_times}
  */
  readonly callableTimes?: OutboundCallabletimesetCallableTimes[] | cdktf.IResolvable;
}
export interface OutboundCallabletimesetCallableTimesTimeSlots {
  /**
  * The day of the interval. Valid values: [1-7], representing Monday through Sunday
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/outbound_callabletimeset#day OutboundCallabletimeset#day}
  */
  readonly day: number;
  /**
  * The start time of the interval as an ISO-8601 string, i.e. HH:mm:ss
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/outbound_callabletimeset#start_time OutboundCallabletimeset#start_time}
  */
  readonly startTime: string;
  /**
  * The end time of the interval as an ISO-8601 string, i.e. HH:mm:ss
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/outbound_callabletimeset#stop_time OutboundCallabletimeset#stop_time}
  */
  readonly stopTime: string;
}

export function outboundCallabletimesetCallableTimesTimeSlotsToTerraform(struct?: OutboundCallabletimesetCallableTimesTimeSlots | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day: cdktf.numberToTerraform(struct!.day),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    stop_time: cdktf.stringToTerraform(struct!.stopTime),
  }
}


export function outboundCallabletimesetCallableTimesTimeSlotsToHclTerraform(struct?: OutboundCallabletimesetCallableTimesTimeSlots | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day: {
      value: cdktf.numberToHclTerraform(struct!.day),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stop_time: {
      value: cdktf.stringToHclTerraform(struct!.stopTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OutboundCallabletimesetCallableTimesTimeSlotsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OutboundCallabletimesetCallableTimesTimeSlots | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._day !== undefined) {
      hasAnyValues = true;
      internalValueResult.day = this._day;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._stopTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.stopTime = this._stopTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutboundCallabletimesetCallableTimesTimeSlots | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._day = undefined;
      this._startTime = undefined;
      this._stopTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._day = value.day;
      this._startTime = value.startTime;
      this._stopTime = value.stopTime;
    }
  }

  // day - computed: false, optional: false, required: true
  private _day?: number; 
  public get day() {
    return this.getNumberAttribute('day');
  }
  public set day(value: number) {
    this._day = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayInput() {
    return this._day;
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

  // stop_time - computed: false, optional: false, required: true
  private _stopTime?: string; 
  public get stopTime() {
    return this.getStringAttribute('stop_time');
  }
  public set stopTime(value: string) {
    this._stopTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stopTimeInput() {
    return this._stopTime;
  }
}

export class OutboundCallabletimesetCallableTimesTimeSlotsList extends cdktf.ComplexList {
  public internalValue? : OutboundCallabletimesetCallableTimesTimeSlots[] | cdktf.IResolvable

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
  public get(index: number): OutboundCallabletimesetCallableTimesTimeSlotsOutputReference {
    return new OutboundCallabletimesetCallableTimesTimeSlotsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OutboundCallabletimesetCallableTimes {
  /**
  * The time zone for the time slots; for example, Africa/Abidjan
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/outbound_callabletimeset#time_zone_id OutboundCallabletimeset#time_zone_id}
  */
  readonly timeZoneId: string;
  /**
  * time_slots block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/outbound_callabletimeset#time_slots OutboundCallabletimeset#time_slots}
  */
  readonly timeSlots: OutboundCallabletimesetCallableTimesTimeSlots[] | cdktf.IResolvable;
}

export function outboundCallabletimesetCallableTimesToTerraform(struct?: OutboundCallabletimesetCallableTimes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    time_zone_id: cdktf.stringToTerraform(struct!.timeZoneId),
    time_slots: cdktf.listMapper(outboundCallabletimesetCallableTimesTimeSlotsToTerraform, true)(struct!.timeSlots),
  }
}


export function outboundCallabletimesetCallableTimesToHclTerraform(struct?: OutboundCallabletimesetCallableTimes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    time_zone_id: {
      value: cdktf.stringToHclTerraform(struct!.timeZoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_slots: {
      value: cdktf.listMapperHcl(outboundCallabletimesetCallableTimesTimeSlotsToHclTerraform, true)(struct!.timeSlots),
      isBlock: true,
      type: "set",
      storageClassType: "OutboundCallabletimesetCallableTimesTimeSlotsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OutboundCallabletimesetCallableTimesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OutboundCallabletimesetCallableTimes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeZoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZoneId = this._timeZoneId;
    }
    if (this._timeSlots?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeSlots = this._timeSlots?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutboundCallabletimesetCallableTimes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._timeZoneId = undefined;
      this._timeSlots.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._timeZoneId = value.timeZoneId;
      this._timeSlots.internalValue = value.timeSlots;
    }
  }

  // time_zone_id - computed: false, optional: false, required: true
  private _timeZoneId?: string; 
  public get timeZoneId() {
    return this.getStringAttribute('time_zone_id');
  }
  public set timeZoneId(value: string) {
    this._timeZoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneIdInput() {
    return this._timeZoneId;
  }

  // time_slots - computed: false, optional: false, required: true
  private _timeSlots = new OutboundCallabletimesetCallableTimesTimeSlotsList(this, "time_slots", true);
  public get timeSlots() {
    return this._timeSlots;
  }
  public putTimeSlots(value: OutboundCallabletimesetCallableTimesTimeSlots[] | cdktf.IResolvable) {
    this._timeSlots.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeSlotsInput() {
    return this._timeSlots.internalValue;
  }
}

export class OutboundCallabletimesetCallableTimesList extends cdktf.ComplexList {
  public internalValue? : OutboundCallabletimesetCallableTimes[] | cdktf.IResolvable

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
  public get(index: number): OutboundCallabletimesetCallableTimesOutputReference {
    return new OutboundCallabletimesetCallableTimesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/outbound_callabletimeset genesyscloud_outbound_callabletimeset}
*/
export class OutboundCallabletimeset extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_outbound_callabletimeset";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OutboundCallabletimeset resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OutboundCallabletimeset to import
  * @param importFromId The id of the existing OutboundCallabletimeset that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/outbound_callabletimeset#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OutboundCallabletimeset to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_outbound_callabletimeset", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/outbound_callabletimeset genesyscloud_outbound_callabletimeset} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OutboundCallabletimesetConfig
  */
  public constructor(scope: Construct, id: string, config: OutboundCallabletimesetConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_outbound_callabletimeset',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.71.1',
        providerVersionConstraint: '1.71.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._callableTimes.internalValue = config.callableTimes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // callable_times - computed: false, optional: true, required: false
  private _callableTimes = new OutboundCallabletimesetCallableTimesList(this, "callable_times", true);
  public get callableTimes() {
    return this._callableTimes;
  }
  public putCallableTimes(value: OutboundCallabletimesetCallableTimes[] | cdktf.IResolvable) {
    this._callableTimes.internalValue = value;
  }
  public resetCallableTimes() {
    this._callableTimes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callableTimesInput() {
    return this._callableTimes.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      callable_times: cdktf.listMapper(outboundCallabletimesetCallableTimesToTerraform, true)(this._callableTimes.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      callable_times: {
        value: cdktf.listMapperHcl(outboundCallabletimesetCallableTimesToHclTerraform, true)(this._callableTimes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OutboundCallabletimesetCallableTimesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
