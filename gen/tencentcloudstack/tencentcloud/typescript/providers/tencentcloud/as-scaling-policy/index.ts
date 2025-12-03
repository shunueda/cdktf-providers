// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/as_scaling_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AsScalingPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies whether the adjustment is an absolute number or a percentage of the current capacity. Valid values: `CHANGE_IN_CAPACITY`, `EXACT_CAPACITY` and `PERCENT_CHANGE_IN_CAPACITY`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/as_scaling_policy#adjustment_type AsScalingPolicy#adjustment_type}
  */
  readonly adjustmentType?: string;
  /**
  * Define the number of instances by which to scale.For `CHANGE_IN_CAPACITY` type or PERCENT_CHANGE_IN_CAPACITY, a positive increment adds to the current capacity and a negative value removes from the current capacity. For `EXACT_CAPACITY` type, it defines an absolute number of the existing Auto Scaling group size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/as_scaling_policy#adjustment_value AsScalingPolicy#adjustment_value}
  */
  readonly adjustmentValue?: number;
  /**
  * Comparison operator. Valid values: `GREATER_THAN`, `GREATER_THAN_OR_EQUAL_TO`, `LESS_THAN`, `LESS_THAN_OR_EQUAL_TO`, `EQUAL_TO` and `NOT_EQUAL_TO`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/as_scaling_policy#comparison_operator AsScalingPolicy#comparison_operator}
  */
  readonly comparisonOperator?: string;
  /**
  * Retry times. Valid value ranges: (1~10).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/as_scaling_policy#continuous_time AsScalingPolicy#continuous_time}
  */
  readonly continuousTime?: number;
  /**
  * Cooldwon time in second. Default is `300`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/as_scaling_policy#cooldown AsScalingPolicy#cooldown}
  */
  readonly cooldown?: number;
  /**
  * Whether to disable scaling down applies only to the target tracking strategy; the default value is false. Value range: true: The target tracking strategy only triggers scaling up; false: The target tracking strategy triggers both scaling up and scaling down.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/as_scaling_policy#disable_scale_in AsScalingPolicy#disable_scale_in}
  */
  readonly disableScaleIn?: boolean | cdktf.IResolvable;
  /**
  * Instance warm-up time, in seconds, applicable only to target tracking strategies. Value range is 0-3600, with a default warm-up time of 300 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/as_scaling_policy#estimated_instance_warmup AsScalingPolicy#estimated_instance_warmup}
  */
  readonly estimatedInstanceWarmup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/as_scaling_policy#id AsScalingPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of an indicator. Valid values: `CPU_UTILIZATION`, `MEM_UTILIZATION`, `LAN_TRAFFIC_OUT`, `LAN_TRAFFIC_IN`, `WAN_TRAFFIC_OUT` and `WAN_TRAFFIC_IN`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/as_scaling_policy#metric_name AsScalingPolicy#metric_name}
  */
  readonly metricName?: string;
  /**
  * An ID group of users to be notified when an alarm is triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/as_scaling_policy#notification_user_group_ids AsScalingPolicy#notification_user_group_ids}
  */
  readonly notificationUserGroupIds?: string[];
  /**
  * Time period in second. Valid values: `60` and `300`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/as_scaling_policy#period AsScalingPolicy#period}
  */
  readonly period?: number;
  /**
  * Name of a policy used to define a reaction when an alarm is triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/as_scaling_policy#policy_name AsScalingPolicy#policy_name}
  */
  readonly policyName: string;
  /**
  * Alarm triggering policy type, the default type is SIMPLE. Value range: SIMPLE: Simple policy; TARGET_TRACKING: Target tracking policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/as_scaling_policy#policy_type AsScalingPolicy#policy_type}
  */
  readonly policyType?: string;
  /**
  * Predefined monitoring items, applicable only to target tracking policies, and required in target tracking policy scenarios. Value range: ASG_AVG_CPU_UTILIZATION: Average CPU utilization; ASG_AVG_LAN_TRAFFIC_OUT: Average intranet outbound bandwidth; ASG_AVG_LAN_TRAFFIC_IN: Average intranet inbound bandwidth; ASG_AVG_WAN_TRAFFIC_OUT: Average internet outbound bandwidth; ASG_AVG_WAN_TRAFFIC_IN: Average internet inbound bandwidth.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/as_scaling_policy#predefined_metric_type AsScalingPolicy#predefined_metric_type}
  */
  readonly predefinedMetricType?: string;
  /**
  * ID of a scaling group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/as_scaling_policy#scaling_group_id AsScalingPolicy#scaling_group_id}
  */
  readonly scalingGroupId: string;
  /**
  * Statistic types. Valid values: `AVERAGE`, `MAXIMUM` and `MINIMUM`. Default is `AVERAGE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/as_scaling_policy#statistic AsScalingPolicy#statistic}
  */
  readonly statistic?: string;
  /**
  * Target value, applicable only to target tracking strategies, and required in target tracking strategy scenarios. ASG_AVG_CPU_UTILIZATION: [1, 100), Unit: %; ASG_AVG_LAN_TRAFFIC_OUT: >0, Unit: Mbps; ASG_AVG_LAN_TRAFFIC_IN: >0, Unit: Mbps; ASG_AVG_WAN_TRAFFIC_OUT: >0, Unit: Mbps; ASG_AVG_WAN_TRAFFIC_IN: >0, Unit: Mbps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/as_scaling_policy#target_value AsScalingPolicy#target_value}
  */
  readonly targetValue?: number;
  /**
  * Alarm threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/as_scaling_policy#threshold AsScalingPolicy#threshold}
  */
  readonly threshold?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/as_scaling_policy tencentcloud_as_scaling_policy}
*/
export class AsScalingPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_as_scaling_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AsScalingPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AsScalingPolicy to import
  * @param importFromId The id of the existing AsScalingPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/as_scaling_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AsScalingPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_as_scaling_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/as_scaling_policy tencentcloud_as_scaling_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AsScalingPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: AsScalingPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_as_scaling_policy',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.40',
        providerVersionConstraint: '1.82.40'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adjustmentType = config.adjustmentType;
    this._adjustmentValue = config.adjustmentValue;
    this._comparisonOperator = config.comparisonOperator;
    this._continuousTime = config.continuousTime;
    this._cooldown = config.cooldown;
    this._disableScaleIn = config.disableScaleIn;
    this._estimatedInstanceWarmup = config.estimatedInstanceWarmup;
    this._id = config.id;
    this._metricName = config.metricName;
    this._notificationUserGroupIds = config.notificationUserGroupIds;
    this._period = config.period;
    this._policyName = config.policyName;
    this._policyType = config.policyType;
    this._predefinedMetricType = config.predefinedMetricType;
    this._scalingGroupId = config.scalingGroupId;
    this._statistic = config.statistic;
    this._targetValue = config.targetValue;
    this._threshold = config.threshold;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adjustment_type - computed: false, optional: true, required: false
  private _adjustmentType?: string; 
  public get adjustmentType() {
    return this.getStringAttribute('adjustment_type');
  }
  public set adjustmentType(value: string) {
    this._adjustmentType = value;
  }
  public resetAdjustmentType() {
    this._adjustmentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adjustmentTypeInput() {
    return this._adjustmentType;
  }

  // adjustment_value - computed: false, optional: true, required: false
  private _adjustmentValue?: number; 
  public get adjustmentValue() {
    return this.getNumberAttribute('adjustment_value');
  }
  public set adjustmentValue(value: number) {
    this._adjustmentValue = value;
  }
  public resetAdjustmentValue() {
    this._adjustmentValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adjustmentValueInput() {
    return this._adjustmentValue;
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

  // continuous_time - computed: false, optional: true, required: false
  private _continuousTime?: number; 
  public get continuousTime() {
    return this.getNumberAttribute('continuous_time');
  }
  public set continuousTime(value: number) {
    this._continuousTime = value;
  }
  public resetContinuousTime() {
    this._continuousTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continuousTimeInput() {
    return this._continuousTime;
  }

  // cooldown - computed: true, optional: true, required: false
  private _cooldown?: number; 
  public get cooldown() {
    return this.getNumberAttribute('cooldown');
  }
  public set cooldown(value: number) {
    this._cooldown = value;
  }
  public resetCooldown() {
    this._cooldown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cooldownInput() {
    return this._cooldown;
  }

  // disable_scale_in - computed: false, optional: true, required: false
  private _disableScaleIn?: boolean | cdktf.IResolvable; 
  public get disableScaleIn() {
    return this.getBooleanAttribute('disable_scale_in');
  }
  public set disableScaleIn(value: boolean | cdktf.IResolvable) {
    this._disableScaleIn = value;
  }
  public resetDisableScaleIn() {
    this._disableScaleIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableScaleInInput() {
    return this._disableScaleIn;
  }

  // estimated_instance_warmup - computed: true, optional: true, required: false
  private _estimatedInstanceWarmup?: number; 
  public get estimatedInstanceWarmup() {
    return this.getNumberAttribute('estimated_instance_warmup');
  }
  public set estimatedInstanceWarmup(value: number) {
    this._estimatedInstanceWarmup = value;
  }
  public resetEstimatedInstanceWarmup() {
    this._estimatedInstanceWarmup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get estimatedInstanceWarmupInput() {
    return this._estimatedInstanceWarmup;
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

  // metric_name - computed: false, optional: true, required: false
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  public resetMetricName() {
    this._metricName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // notification_user_group_ids - computed: true, optional: true, required: false
  private _notificationUserGroupIds?: string[]; 
  public get notificationUserGroupIds() {
    return this.getListAttribute('notification_user_group_ids');
  }
  public set notificationUserGroupIds(value: string[]) {
    this._notificationUserGroupIds = value;
  }
  public resetNotificationUserGroupIds() {
    this._notificationUserGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationUserGroupIdsInput() {
    return this._notificationUserGroupIds;
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

  // policy_name - computed: false, optional: false, required: true
  private _policyName?: string; 
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string) {
    this._policyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName;
  }

  // policy_type - computed: true, optional: true, required: false
  private _policyType?: string; 
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }
  public set policyType(value: string) {
    this._policyType = value;
  }
  public resetPolicyType() {
    this._policyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTypeInput() {
    return this._policyType;
  }

  // predefined_metric_type - computed: false, optional: true, required: false
  private _predefinedMetricType?: string; 
  public get predefinedMetricType() {
    return this.getStringAttribute('predefined_metric_type');
  }
  public set predefinedMetricType(value: string) {
    this._predefinedMetricType = value;
  }
  public resetPredefinedMetricType() {
    this._predefinedMetricType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predefinedMetricTypeInput() {
    return this._predefinedMetricType;
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

  // statistic - computed: true, optional: true, required: false
  private _statistic?: string; 
  public get statistic() {
    return this.getStringAttribute('statistic');
  }
  public set statistic(value: string) {
    this._statistic = value;
  }
  public resetStatistic() {
    this._statistic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statisticInput() {
    return this._statistic;
  }

  // target_value - computed: false, optional: true, required: false
  private _targetValue?: number; 
  public get targetValue() {
    return this.getNumberAttribute('target_value');
  }
  public set targetValue(value: number) {
    this._targetValue = value;
  }
  public resetTargetValue() {
    this._targetValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetValueInput() {
    return this._targetValue;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
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
      adjustment_type: cdktf.stringToTerraform(this._adjustmentType),
      adjustment_value: cdktf.numberToTerraform(this._adjustmentValue),
      comparison_operator: cdktf.stringToTerraform(this._comparisonOperator),
      continuous_time: cdktf.numberToTerraform(this._continuousTime),
      cooldown: cdktf.numberToTerraform(this._cooldown),
      disable_scale_in: cdktf.booleanToTerraform(this._disableScaleIn),
      estimated_instance_warmup: cdktf.numberToTerraform(this._estimatedInstanceWarmup),
      id: cdktf.stringToTerraform(this._id),
      metric_name: cdktf.stringToTerraform(this._metricName),
      notification_user_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._notificationUserGroupIds),
      period: cdktf.numberToTerraform(this._period),
      policy_name: cdktf.stringToTerraform(this._policyName),
      policy_type: cdktf.stringToTerraform(this._policyType),
      predefined_metric_type: cdktf.stringToTerraform(this._predefinedMetricType),
      scaling_group_id: cdktf.stringToTerraform(this._scalingGroupId),
      statistic: cdktf.stringToTerraform(this._statistic),
      target_value: cdktf.numberToTerraform(this._targetValue),
      threshold: cdktf.numberToTerraform(this._threshold),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adjustment_type: {
        value: cdktf.stringToHclTerraform(this._adjustmentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      adjustment_value: {
        value: cdktf.numberToHclTerraform(this._adjustmentValue),
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
      continuous_time: {
        value: cdktf.numberToHclTerraform(this._continuousTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cooldown: {
        value: cdktf.numberToHclTerraform(this._cooldown),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disable_scale_in: {
        value: cdktf.booleanToHclTerraform(this._disableScaleIn),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      estimated_instance_warmup: {
        value: cdktf.numberToHclTerraform(this._estimatedInstanceWarmup),
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
      notification_user_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._notificationUserGroupIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      period: {
        value: cdktf.numberToHclTerraform(this._period),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      policy_name: {
        value: cdktf.stringToHclTerraform(this._policyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_type: {
        value: cdktf.stringToHclTerraform(this._policyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      predefined_metric_type: {
        value: cdktf.stringToHclTerraform(this._predefinedMetricType),
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
      statistic: {
        value: cdktf.stringToHclTerraform(this._statistic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_value: {
        value: cdktf.numberToHclTerraform(this._targetValue),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      threshold: {
        value: cdktf.numberToHclTerraform(this._threshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
