// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/threat_detection_cycle_task
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ThreatDetectionCycleTaskConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/threat_detection_cycle_task#enable ThreatDetectionCycleTask#enable}
  */
  readonly enable: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/threat_detection_cycle_task#first_date_str ThreatDetectionCycleTask#first_date_str}
  */
  readonly firstDateStr: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/threat_detection_cycle_task#id ThreatDetectionCycleTask#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/threat_detection_cycle_task#interval_period ThreatDetectionCycleTask#interval_period}
  */
  readonly intervalPeriod: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/threat_detection_cycle_task#param ThreatDetectionCycleTask#param}
  */
  readonly param?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/threat_detection_cycle_task#period_unit ThreatDetectionCycleTask#period_unit}
  */
  readonly periodUnit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/threat_detection_cycle_task#source ThreatDetectionCycleTask#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/threat_detection_cycle_task#target_end_time ThreatDetectionCycleTask#target_end_time}
  */
  readonly targetEndTime: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/threat_detection_cycle_task#target_start_time ThreatDetectionCycleTask#target_start_time}
  */
  readonly targetStartTime: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/threat_detection_cycle_task#task_name ThreatDetectionCycleTask#task_name}
  */
  readonly taskName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/threat_detection_cycle_task#task_type ThreatDetectionCycleTask#task_type}
  */
  readonly taskType: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/threat_detection_cycle_task#timeouts ThreatDetectionCycleTask#timeouts}
  */
  readonly timeouts?: ThreatDetectionCycleTaskTimeouts;
}
export interface ThreatDetectionCycleTaskTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/threat_detection_cycle_task#create ThreatDetectionCycleTask#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/threat_detection_cycle_task#delete ThreatDetectionCycleTask#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/threat_detection_cycle_task#update ThreatDetectionCycleTask#update}
  */
  readonly update?: string;
}

export function threatDetectionCycleTaskTimeoutsToTerraform(struct?: ThreatDetectionCycleTaskTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function threatDetectionCycleTaskTimeoutsToHclTerraform(struct?: ThreatDetectionCycleTaskTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ThreatDetectionCycleTaskTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ThreatDetectionCycleTaskTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ThreatDetectionCycleTaskTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/threat_detection_cycle_task alicloud_threat_detection_cycle_task}
*/
export class ThreatDetectionCycleTask extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_threat_detection_cycle_task";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ThreatDetectionCycleTask resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ThreatDetectionCycleTask to import
  * @param importFromId The id of the existing ThreatDetectionCycleTask that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/threat_detection_cycle_task#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ThreatDetectionCycleTask to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_threat_detection_cycle_task", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/threat_detection_cycle_task alicloud_threat_detection_cycle_task} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ThreatDetectionCycleTaskConfig
  */
  public constructor(scope: Construct, id: string, config: ThreatDetectionCycleTaskConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_threat_detection_cycle_task',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enable = config.enable;
    this._firstDateStr = config.firstDateStr;
    this._id = config.id;
    this._intervalPeriod = config.intervalPeriod;
    this._param = config.param;
    this._periodUnit = config.periodUnit;
    this._source = config.source;
    this._targetEndTime = config.targetEndTime;
    this._targetStartTime = config.targetStartTime;
    this._taskName = config.taskName;
    this._taskType = config.taskType;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable - computed: false, optional: false, required: true
  private _enable?: number; 
  public get enable() {
    return this.getNumberAttribute('enable');
  }
  public set enable(value: number) {
    this._enable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // first_date_str - computed: false, optional: false, required: true
  private _firstDateStr?: number; 
  public get firstDateStr() {
    return this.getNumberAttribute('first_date_str');
  }
  public set firstDateStr(value: number) {
    this._firstDateStr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firstDateStrInput() {
    return this._firstDateStr;
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

  // interval_period - computed: false, optional: false, required: true
  private _intervalPeriod?: number; 
  public get intervalPeriod() {
    return this.getNumberAttribute('interval_period');
  }
  public set intervalPeriod(value: number) {
    this._intervalPeriod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalPeriodInput() {
    return this._intervalPeriod;
  }

  // param - computed: false, optional: true, required: false
  private _param?: string; 
  public get param() {
    return this.getStringAttribute('param');
  }
  public set param(value: string) {
    this._param = value;
  }
  public resetParam() {
    this._param = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramInput() {
    return this._param;
  }

  // period_unit - computed: false, optional: false, required: true
  private _periodUnit?: string; 
  public get periodUnit() {
    return this.getStringAttribute('period_unit');
  }
  public set periodUnit(value: string) {
    this._periodUnit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get periodUnitInput() {
    return this._periodUnit;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // target_end_time - computed: false, optional: false, required: true
  private _targetEndTime?: number; 
  public get targetEndTime() {
    return this.getNumberAttribute('target_end_time');
  }
  public set targetEndTime(value: number) {
    this._targetEndTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetEndTimeInput() {
    return this._targetEndTime;
  }

  // target_start_time - computed: false, optional: false, required: true
  private _targetStartTime?: number; 
  public get targetStartTime() {
    return this.getNumberAttribute('target_start_time');
  }
  public set targetStartTime(value: number) {
    this._targetStartTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetStartTimeInput() {
    return this._targetStartTime;
  }

  // task_name - computed: false, optional: false, required: true
  private _taskName?: string; 
  public get taskName() {
    return this.getStringAttribute('task_name');
  }
  public set taskName(value: string) {
    this._taskName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskNameInput() {
    return this._taskName;
  }

  // task_type - computed: false, optional: false, required: true
  private _taskType?: string; 
  public get taskType() {
    return this.getStringAttribute('task_type');
  }
  public set taskType(value: string) {
    this._taskType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskTypeInput() {
    return this._taskType;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ThreatDetectionCycleTaskTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ThreatDetectionCycleTaskTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable: cdktf.numberToTerraform(this._enable),
      first_date_str: cdktf.numberToTerraform(this._firstDateStr),
      id: cdktf.stringToTerraform(this._id),
      interval_period: cdktf.numberToTerraform(this._intervalPeriod),
      param: cdktf.stringToTerraform(this._param),
      period_unit: cdktf.stringToTerraform(this._periodUnit),
      source: cdktf.stringToTerraform(this._source),
      target_end_time: cdktf.numberToTerraform(this._targetEndTime),
      target_start_time: cdktf.numberToTerraform(this._targetStartTime),
      task_name: cdktf.stringToTerraform(this._taskName),
      task_type: cdktf.stringToTerraform(this._taskType),
      timeouts: threatDetectionCycleTaskTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable: {
        value: cdktf.numberToHclTerraform(this._enable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      first_date_str: {
        value: cdktf.numberToHclTerraform(this._firstDateStr),
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
      interval_period: {
        value: cdktf.numberToHclTerraform(this._intervalPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      param: {
        value: cdktf.stringToHclTerraform(this._param),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      period_unit: {
        value: cdktf.stringToHclTerraform(this._periodUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source: {
        value: cdktf.stringToHclTerraform(this._source),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_end_time: {
        value: cdktf.numberToHclTerraform(this._targetEndTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      target_start_time: {
        value: cdktf.numberToHclTerraform(this._targetStartTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      task_name: {
        value: cdktf.stringToHclTerraform(this._taskName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      task_type: {
        value: cdktf.stringToHclTerraform(this._taskType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: threatDetectionCycleTaskTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ThreatDetectionCycleTaskTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
