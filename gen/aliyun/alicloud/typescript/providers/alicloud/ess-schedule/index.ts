// https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ess_schedule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EssScheduleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ess_schedule#description EssSchedule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ess_schedule#desired_capacity EssSchedule#desired_capacity}
  */
  readonly desiredCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ess_schedule#id EssSchedule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ess_schedule#launch_expiration_time EssSchedule#launch_expiration_time}
  */
  readonly launchExpirationTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ess_schedule#launch_time EssSchedule#launch_time}
  */
  readonly launchTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ess_schedule#max_value EssSchedule#max_value}
  */
  readonly maxValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ess_schedule#min_value EssSchedule#min_value}
  */
  readonly minValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ess_schedule#recurrence_end_time EssSchedule#recurrence_end_time}
  */
  readonly recurrenceEndTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ess_schedule#recurrence_type EssSchedule#recurrence_type}
  */
  readonly recurrenceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ess_schedule#recurrence_value EssSchedule#recurrence_value}
  */
  readonly recurrenceValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ess_schedule#scaling_group_id EssSchedule#scaling_group_id}
  */
  readonly scalingGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ess_schedule#scheduled_action EssSchedule#scheduled_action}
  */
  readonly scheduledAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ess_schedule#scheduled_task_name EssSchedule#scheduled_task_name}
  */
  readonly scheduledTaskName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ess_schedule#task_enabled EssSchedule#task_enabled}
  */
  readonly taskEnabled?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ess_schedule alicloud_ess_schedule}
*/
export class EssSchedule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_ess_schedule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EssSchedule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EssSchedule to import
  * @param importFromId The id of the existing EssSchedule that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ess_schedule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EssSchedule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_ess_schedule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ess_schedule alicloud_ess_schedule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EssScheduleConfig = {}
  */
  public constructor(scope: Construct, id: string, config: EssScheduleConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_ess_schedule',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.265.0',
        providerVersionConstraint: '1.265.0'
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
    this._desiredCapacity = config.desiredCapacity;
    this._id = config.id;
    this._launchExpirationTime = config.launchExpirationTime;
    this._launchTime = config.launchTime;
    this._maxValue = config.maxValue;
    this._minValue = config.minValue;
    this._recurrenceEndTime = config.recurrenceEndTime;
    this._recurrenceType = config.recurrenceType;
    this._recurrenceValue = config.recurrenceValue;
    this._scalingGroupId = config.scalingGroupId;
    this._scheduledAction = config.scheduledAction;
    this._scheduledTaskName = config.scheduledTaskName;
    this._taskEnabled = config.taskEnabled;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: true, required: false
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

  // desired_capacity - computed: false, optional: true, required: false
  private _desiredCapacity?: number; 
  public get desiredCapacity() {
    return this.getNumberAttribute('desired_capacity');
  }
  public set desiredCapacity(value: number) {
    this._desiredCapacity = value;
  }
  public resetDesiredCapacity() {
    this._desiredCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredCapacityInput() {
    return this._desiredCapacity;
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

  // launch_expiration_time - computed: false, optional: true, required: false
  private _launchExpirationTime?: number; 
  public get launchExpirationTime() {
    return this.getNumberAttribute('launch_expiration_time');
  }
  public set launchExpirationTime(value: number) {
    this._launchExpirationTime = value;
  }
  public resetLaunchExpirationTime() {
    this._launchExpirationTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchExpirationTimeInput() {
    return this._launchExpirationTime;
  }

  // launch_time - computed: false, optional: true, required: false
  private _launchTime?: string; 
  public get launchTime() {
    return this.getStringAttribute('launch_time');
  }
  public set launchTime(value: string) {
    this._launchTime = value;
  }
  public resetLaunchTime() {
    this._launchTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTimeInput() {
    return this._launchTime;
  }

  // max_value - computed: false, optional: true, required: false
  private _maxValue?: number; 
  public get maxValue() {
    return this.getNumberAttribute('max_value');
  }
  public set maxValue(value: number) {
    this._maxValue = value;
  }
  public resetMaxValue() {
    this._maxValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxValueInput() {
    return this._maxValue;
  }

  // min_value - computed: false, optional: true, required: false
  private _minValue?: number; 
  public get minValue() {
    return this.getNumberAttribute('min_value');
  }
  public set minValue(value: number) {
    this._minValue = value;
  }
  public resetMinValue() {
    this._minValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minValueInput() {
    return this._minValue;
  }

  // recurrence_end_time - computed: true, optional: true, required: false
  private _recurrenceEndTime?: string; 
  public get recurrenceEndTime() {
    return this.getStringAttribute('recurrence_end_time');
  }
  public set recurrenceEndTime(value: string) {
    this._recurrenceEndTime = value;
  }
  public resetRecurrenceEndTime() {
    this._recurrenceEndTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurrenceEndTimeInput() {
    return this._recurrenceEndTime;
  }

  // recurrence_type - computed: true, optional: true, required: false
  private _recurrenceType?: string; 
  public get recurrenceType() {
    return this.getStringAttribute('recurrence_type');
  }
  public set recurrenceType(value: string) {
    this._recurrenceType = value;
  }
  public resetRecurrenceType() {
    this._recurrenceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurrenceTypeInput() {
    return this._recurrenceType;
  }

  // recurrence_value - computed: true, optional: true, required: false
  private _recurrenceValue?: string; 
  public get recurrenceValue() {
    return this.getStringAttribute('recurrence_value');
  }
  public set recurrenceValue(value: string) {
    this._recurrenceValue = value;
  }
  public resetRecurrenceValue() {
    this._recurrenceValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurrenceValueInput() {
    return this._recurrenceValue;
  }

  // scaling_group_id - computed: true, optional: true, required: false
  private _scalingGroupId?: string; 
  public get scalingGroupId() {
    return this.getStringAttribute('scaling_group_id');
  }
  public set scalingGroupId(value: string) {
    this._scalingGroupId = value;
  }
  public resetScalingGroupId() {
    this._scalingGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingGroupIdInput() {
    return this._scalingGroupId;
  }

  // scheduled_action - computed: false, optional: true, required: false
  private _scheduledAction?: string; 
  public get scheduledAction() {
    return this.getStringAttribute('scheduled_action');
  }
  public set scheduledAction(value: string) {
    this._scheduledAction = value;
  }
  public resetScheduledAction() {
    this._scheduledAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledActionInput() {
    return this._scheduledAction;
  }

  // scheduled_task_name - computed: false, optional: true, required: false
  private _scheduledTaskName?: string; 
  public get scheduledTaskName() {
    return this.getStringAttribute('scheduled_task_name');
  }
  public set scheduledTaskName(value: string) {
    this._scheduledTaskName = value;
  }
  public resetScheduledTaskName() {
    this._scheduledTaskName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledTaskNameInput() {
    return this._scheduledTaskName;
  }

  // task_enabled - computed: false, optional: true, required: false
  private _taskEnabled?: boolean | cdktf.IResolvable; 
  public get taskEnabled() {
    return this.getBooleanAttribute('task_enabled');
  }
  public set taskEnabled(value: boolean | cdktf.IResolvable) {
    this._taskEnabled = value;
  }
  public resetTaskEnabled() {
    this._taskEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskEnabledInput() {
    return this._taskEnabled;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      desired_capacity: cdktf.numberToTerraform(this._desiredCapacity),
      id: cdktf.stringToTerraform(this._id),
      launch_expiration_time: cdktf.numberToTerraform(this._launchExpirationTime),
      launch_time: cdktf.stringToTerraform(this._launchTime),
      max_value: cdktf.numberToTerraform(this._maxValue),
      min_value: cdktf.numberToTerraform(this._minValue),
      recurrence_end_time: cdktf.stringToTerraform(this._recurrenceEndTime),
      recurrence_type: cdktf.stringToTerraform(this._recurrenceType),
      recurrence_value: cdktf.stringToTerraform(this._recurrenceValue),
      scaling_group_id: cdktf.stringToTerraform(this._scalingGroupId),
      scheduled_action: cdktf.stringToTerraform(this._scheduledAction),
      scheduled_task_name: cdktf.stringToTerraform(this._scheduledTaskName),
      task_enabled: cdktf.booleanToTerraform(this._taskEnabled),
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
      desired_capacity: {
        value: cdktf.numberToHclTerraform(this._desiredCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      launch_expiration_time: {
        value: cdktf.numberToHclTerraform(this._launchExpirationTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      launch_time: {
        value: cdktf.stringToHclTerraform(this._launchTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_value: {
        value: cdktf.numberToHclTerraform(this._maxValue),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_value: {
        value: cdktf.numberToHclTerraform(this._minValue),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      recurrence_end_time: {
        value: cdktf.stringToHclTerraform(this._recurrenceEndTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recurrence_type: {
        value: cdktf.stringToHclTerraform(this._recurrenceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recurrence_value: {
        value: cdktf.stringToHclTerraform(this._recurrenceValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scaling_group_id: {
        value: cdktf.stringToHclTerraform(this._scalingGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scheduled_action: {
        value: cdktf.stringToHclTerraform(this._scheduledAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scheduled_task_name: {
        value: cdktf.stringToHclTerraform(this._scheduledTaskName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      task_enabled: {
        value: cdktf.booleanToHclTerraform(this._taskEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
