// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ess_alarm
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApsarastackEssAlarmConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ess_alarm#alarm_actions ApsarastackEssAlarm#alarm_actions}
  */
  readonly alarmActions: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ess_alarm#alarm_task_name ApsarastackEssAlarm#alarm_task_name}
  */
  readonly alarmTaskName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ess_alarm#cloud_monitor_group_id ApsarastackEssAlarm#cloud_monitor_group_id}
  */
  readonly cloudMonitorGroupId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ess_alarm#comparison_operator ApsarastackEssAlarm#comparison_operator}
  */
  readonly comparisonOperator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ess_alarm#description ApsarastackEssAlarm#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ess_alarm#dimensions ApsarastackEssAlarm#dimensions}
  */
  readonly dimensions?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ess_alarm#enable ApsarastackEssAlarm#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ess_alarm#evaluation_count ApsarastackEssAlarm#evaluation_count}
  */
  readonly evaluationCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ess_alarm#id ApsarastackEssAlarm#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ess_alarm#metric_name ApsarastackEssAlarm#metric_name}
  */
  readonly metricName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ess_alarm#metric_type ApsarastackEssAlarm#metric_type}
  */
  readonly metricType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ess_alarm#name ApsarastackEssAlarm#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ess_alarm#period ApsarastackEssAlarm#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ess_alarm#scaling_group_id ApsarastackEssAlarm#scaling_group_id}
  */
  readonly scalingGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ess_alarm#statistics ApsarastackEssAlarm#statistics}
  */
  readonly statistics?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ess_alarm#status ApsarastackEssAlarm#status}
  */
  readonly status?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ess_alarm#threshold ApsarastackEssAlarm#threshold}
  */
  readonly threshold: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ess_alarm apsarastack_ess_alarm}
*/
export class ApsarastackEssAlarm extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_ess_alarm";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApsarastackEssAlarm resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApsarastackEssAlarm to import
  * @param importFromId The id of the existing ApsarastackEssAlarm that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ess_alarm#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApsarastackEssAlarm to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_ess_alarm", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ess_alarm apsarastack_ess_alarm} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApsarastackEssAlarmConfig
  */
  public constructor(scope: Construct, id: string, config: ApsarastackEssAlarmConfig) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_ess_alarm',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.20',
        providerVersionConstraint: '3.18.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alarmActions = config.alarmActions;
    this._alarmTaskName = config.alarmTaskName;
    this._cloudMonitorGroupId = config.cloudMonitorGroupId;
    this._comparisonOperator = config.comparisonOperator;
    this._description = config.description;
    this._dimensions = config.dimensions;
    this._enable = config.enable;
    this._evaluationCount = config.evaluationCount;
    this._id = config.id;
    this._metricName = config.metricName;
    this._metricType = config.metricType;
    this._name = config.name;
    this._period = config.period;
    this._scalingGroupId = config.scalingGroupId;
    this._statistics = config.statistics;
    this._status = config.status;
    this._threshold = config.threshold;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alarm_actions - computed: false, optional: false, required: true
  private _alarmActions?: string[]; 
  public get alarmActions() {
    return cdktf.Fn.tolist(this.getListAttribute('alarm_actions'));
  }
  public set alarmActions(value: string[]) {
    this._alarmActions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmActionsInput() {
    return this._alarmActions;
  }

  // alarm_task_name - computed: true, optional: true, required: false
  private _alarmTaskName?: string; 
  public get alarmTaskName() {
    return this.getStringAttribute('alarm_task_name');
  }
  public set alarmTaskName(value: string) {
    this._alarmTaskName = value;
  }
  public resetAlarmTaskName() {
    this._alarmTaskName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmTaskNameInput() {
    return this._alarmTaskName;
  }

  // alarm_trigger_state - computed: true, optional: false, required: false
  public get alarmTriggerState() {
    return this.getStringAttribute('alarm_trigger_state');
  }

  // cloud_monitor_group_id - computed: false, optional: true, required: false
  private _cloudMonitorGroupId?: number; 
  public get cloudMonitorGroupId() {
    return this.getNumberAttribute('cloud_monitor_group_id');
  }
  public set cloudMonitorGroupId(value: number) {
    this._cloudMonitorGroupId = value;
  }
  public resetCloudMonitorGroupId() {
    this._cloudMonitorGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudMonitorGroupIdInput() {
    return this._cloudMonitorGroupId;
  }

  // comparison_operator - computed: false, optional: true, required: false
  private _comparisonOperator?: string; 
  public get comparisonOperator() {
    return this.getStringAttribute('comparison_operator');
  }
  public set comparisonOperator(value: string) {
    this._comparisonOperator = value;
  }
  public resetComparisonOperator() {
    this._comparisonOperator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonOperatorInput() {
    return this._comparisonOperator;
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

  // dimensions - computed: true, optional: true, required: false
  private _dimensions?: { [key: string]: string }; 
  public get dimensions() {
    return this.getStringMapAttribute('dimensions');
  }
  public set dimensions(value: { [key: string]: string }) {
    this._dimensions = value;
  }
  public resetDimensions() {
    this._dimensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions;
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // evaluation_count - computed: false, optional: true, required: false
  private _evaluationCount?: number; 
  public get evaluationCount() {
    return this.getNumberAttribute('evaluation_count');
  }
  public set evaluationCount(value: number) {
    this._evaluationCount = value;
  }
  public resetEvaluationCount() {
    this._evaluationCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationCountInput() {
    return this._evaluationCount;
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

  // metric_name - computed: false, optional: false, required: true
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // metric_type - computed: false, optional: true, required: false
  private _metricType?: string; 
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }
  public set metricType(value: string) {
    this._metricType = value;
  }
  public resetMetricType() {
    this._metricType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTypeInput() {
    return this._metricType;
  }

  // name - computed: true, optional: true, required: false
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

  // period - computed: false, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // scaling_group_id - computed: false, optional: false, required: true
  private _scalingGroupId?: string; 
  public get scalingGroupId() {
    return this.getStringAttribute('scaling_group_id');
  }
  public set scalingGroupId(value: string) {
    this._scalingGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingGroupIdInput() {
    return this._scalingGroupId;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // statistics - computed: false, optional: true, required: false
  private _statistics?: string; 
  public get statistics() {
    return this.getStringAttribute('statistics');
  }
  public set statistics(value: string) {
    this._statistics = value;
  }
  public resetStatistics() {
    this._statistics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statisticsInput() {
    return this._statistics;
  }

  // status - computed: true, optional: true, required: false
  private _status?: boolean | cdktf.IResolvable; 
  public get status() {
    return this.getBooleanAttribute('status');
  }
  public set status(value: boolean | cdktf.IResolvable) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: string; 
  public get threshold() {
    return this.getStringAttribute('threshold');
  }
  public set threshold(value: string) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alarm_actions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._alarmActions),
      alarm_task_name: cdktf.stringToTerraform(this._alarmTaskName),
      cloud_monitor_group_id: cdktf.numberToTerraform(this._cloudMonitorGroupId),
      comparison_operator: cdktf.stringToTerraform(this._comparisonOperator),
      description: cdktf.stringToTerraform(this._description),
      dimensions: cdktf.hashMapper(cdktf.stringToTerraform)(this._dimensions),
      enable: cdktf.booleanToTerraform(this._enable),
      evaluation_count: cdktf.numberToTerraform(this._evaluationCount),
      id: cdktf.stringToTerraform(this._id),
      metric_name: cdktf.stringToTerraform(this._metricName),
      metric_type: cdktf.stringToTerraform(this._metricType),
      name: cdktf.stringToTerraform(this._name),
      period: cdktf.numberToTerraform(this._period),
      scaling_group_id: cdktf.stringToTerraform(this._scalingGroupId),
      statistics: cdktf.stringToTerraform(this._statistics),
      status: cdktf.booleanToTerraform(this._status),
      threshold: cdktf.stringToTerraform(this._threshold),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alarm_actions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._alarmActions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      alarm_task_name: {
        value: cdktf.stringToHclTerraform(this._alarmTaskName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_monitor_group_id: {
        value: cdktf.numberToHclTerraform(this._cloudMonitorGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      comparison_operator: {
        value: cdktf.stringToHclTerraform(this._comparisonOperator),
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
      dimensions: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._dimensions),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      enable: {
        value: cdktf.booleanToHclTerraform(this._enable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      evaluation_count: {
        value: cdktf.numberToHclTerraform(this._evaluationCount),
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
      metric_name: {
        value: cdktf.stringToHclTerraform(this._metricName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metric_type: {
        value: cdktf.stringToHclTerraform(this._metricType),
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
      period: {
        value: cdktf.numberToHclTerraform(this._period),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scaling_group_id: {
        value: cdktf.stringToHclTerraform(this._scalingGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      statistics: {
        value: cdktf.stringToHclTerraform(this._statistics),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.booleanToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      threshold: {
        value: cdktf.stringToHclTerraform(this._threshold),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
