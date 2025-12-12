// https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/schedule_rotation_active_day
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ScheduleRotationActiveDayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Schedule rotation day name for which active times to be created. Value must be one of `S`, `M`, `T`, `W`, `R`, `F`, `U`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/schedule_rotation_active_day#day_name ScheduleRotationActiveDay#day_name}
  */
  readonly dayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/schedule_rotation_active_day#id ScheduleRotationActiveDay#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/schedule_rotation_active_day#schedule_rotation_id ScheduleRotationActiveDay#schedule_rotation_id}
  */
  readonly scheduleRotationId?: string;
  /**
  * active_time_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/schedule_rotation_active_day#active_time_attributes ScheduleRotationActiveDay#active_time_attributes}
  */
  readonly activeTimeAttributes: ScheduleRotationActiveDayActiveTimeAttributes[] | cdktf.IResolvable;
}
export interface ScheduleRotationActiveDayActiveTimeAttributes {
  /**
  * End time for schedule rotation active time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/schedule_rotation_active_day#end_time ScheduleRotationActiveDay#end_time}
  */
  readonly endTime?: string;
  /**
  * Start time for schedule rotation active time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/schedule_rotation_active_day#start_time ScheduleRotationActiveDay#start_time}
  */
  readonly startTime?: string;
}

export function scheduleRotationActiveDayActiveTimeAttributesToTerraform(struct?: ScheduleRotationActiveDayActiveTimeAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_time: cdktf.stringToTerraform(struct!.endTime),
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}


export function scheduleRotationActiveDayActiveTimeAttributesToHclTerraform(struct?: ScheduleRotationActiveDayActiveTimeAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class ScheduleRotationActiveDayActiveTimeAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ScheduleRotationActiveDayActiveTimeAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: ScheduleRotationActiveDayActiveTimeAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._endTime = value.endTime;
      this._startTime = value.startTime;
    }
  }

  // end_time - computed: true, optional: true, required: false
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

  // start_time - computed: true, optional: true, required: false
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

export class ScheduleRotationActiveDayActiveTimeAttributesList extends cdktf.ComplexList {
  public internalValue? : ScheduleRotationActiveDayActiveTimeAttributes[] | cdktf.IResolvable

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
  public get(index: number): ScheduleRotationActiveDayActiveTimeAttributesOutputReference {
    return new ScheduleRotationActiveDayActiveTimeAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/schedule_rotation_active_day rootly_schedule_rotation_active_day}
*/
export class ScheduleRotationActiveDay extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_schedule_rotation_active_day";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ScheduleRotationActiveDay resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ScheduleRotationActiveDay to import
  * @param importFromId The id of the existing ScheduleRotationActiveDay that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/schedule_rotation_active_day#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ScheduleRotationActiveDay to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_schedule_rotation_active_day", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/schedule_rotation_active_day rootly_schedule_rotation_active_day} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ScheduleRotationActiveDayConfig
  */
  public constructor(scope: Construct, id: string, config: ScheduleRotationActiveDayConfig) {
    super(scope, id, {
      terraformResourceType: 'rootly_schedule_rotation_active_day',
      terraformGeneratorMetadata: {
        providerName: 'rootly',
        providerVersion: '5.0.0',
        providerVersionConstraint: '5.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dayName = config.dayName;
    this._id = config.id;
    this._scheduleRotationId = config.scheduleRotationId;
    this._activeTimeAttributes.internalValue = config.activeTimeAttributes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // day_name - computed: false, optional: true, required: false
  private _dayName?: string; 
  public get dayName() {
    return this.getStringAttribute('day_name');
  }
  public set dayName(value: string) {
    this._dayName = value;
  }
  public resetDayName() {
    this._dayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayNameInput() {
    return this._dayName;
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

  // schedule_rotation_id - computed: true, optional: true, required: false
  private _scheduleRotationId?: string; 
  public get scheduleRotationId() {
    return this.getStringAttribute('schedule_rotation_id');
  }
  public set scheduleRotationId(value: string) {
    this._scheduleRotationId = value;
  }
  public resetScheduleRotationId() {
    this._scheduleRotationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleRotationIdInput() {
    return this._scheduleRotationId;
  }

  // active_time_attributes - computed: false, optional: false, required: true
  private _activeTimeAttributes = new ScheduleRotationActiveDayActiveTimeAttributesList(this, "active_time_attributes", false);
  public get activeTimeAttributes() {
    return this._activeTimeAttributes;
  }
  public putActiveTimeAttributes(value: ScheduleRotationActiveDayActiveTimeAttributes[] | cdktf.IResolvable) {
    this._activeTimeAttributes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get activeTimeAttributesInput() {
    return this._activeTimeAttributes.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      day_name: cdktf.stringToTerraform(this._dayName),
      id: cdktf.stringToTerraform(this._id),
      schedule_rotation_id: cdktf.stringToTerraform(this._scheduleRotationId),
      active_time_attributes: cdktf.listMapper(scheduleRotationActiveDayActiveTimeAttributesToTerraform, true)(this._activeTimeAttributes.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      day_name: {
        value: cdktf.stringToHclTerraform(this._dayName),
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
      schedule_rotation_id: {
        value: cdktf.stringToHclTerraform(this._scheduleRotationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      active_time_attributes: {
        value: cdktf.listMapperHcl(scheduleRotationActiveDayActiveTimeAttributesToHclTerraform, true)(this._activeTimeAttributes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ScheduleRotationActiveDayActiveTimeAttributesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
