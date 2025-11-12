// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/edas_k8s_application_scaling_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EdasK8SApplicationScalingRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/edas_k8s_application_scaling_rule#app_id EdasK8SApplicationScalingRule#app_id}
  */
  readonly appId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/edas_k8s_application_scaling_rule#enabled EdasK8SApplicationScalingRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/edas_k8s_application_scaling_rule#id EdasK8SApplicationScalingRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/edas_k8s_application_scaling_rule#max_replicas EdasK8SApplicationScalingRule#max_replicas}
  */
  readonly maxReplicas?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/edas_k8s_application_scaling_rule#min_replicas EdasK8SApplicationScalingRule#min_replicas}
  */
  readonly minReplicas?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/edas_k8s_application_scaling_rule#scaling_rule_name EdasK8SApplicationScalingRule#scaling_rule_name}
  */
  readonly scalingRuleName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/edas_k8s_application_scaling_rule#scaling_rule_type EdasK8SApplicationScalingRule#scaling_rule_type}
  */
  readonly scalingRuleType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/edas_k8s_application_scaling_rule#trigger_dryrun EdasK8SApplicationScalingRule#trigger_dryrun}
  */
  readonly triggerDryrun?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/edas_k8s_application_scaling_rule#trigger_name EdasK8SApplicationScalingRule#trigger_name}
  */
  readonly triggerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/edas_k8s_application_scaling_rule#trigger_period EdasK8SApplicationScalingRule#trigger_period}
  */
  readonly triggerPeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/edas_k8s_application_scaling_rule#trigger_timer_in_week EdasK8SApplicationScalingRule#trigger_timer_in_week}
  */
  readonly triggerTimerInWeek?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/edas_k8s_application_scaling_rule#trigger_type EdasK8SApplicationScalingRule#trigger_type}
  */
  readonly triggerType?: string;
  /**
  * metrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/edas_k8s_application_scaling_rule#metrics EdasK8SApplicationScalingRule#metrics}
  */
  readonly metrics?: EdasK8SApplicationScalingRuleMetrics[] | cdktf.IResolvable;
  /**
  * trigger_timer_in_day block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/edas_k8s_application_scaling_rule#trigger_timer_in_day EdasK8SApplicationScalingRule#trigger_timer_in_day}
  */
  readonly triggerTimerInDay?: EdasK8SApplicationScalingRuleTriggerTimerInDay[] | cdktf.IResolvable;
}
export interface EdasK8SApplicationScalingRuleMetrics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/edas_k8s_application_scaling_rule#type EdasK8SApplicationScalingRule#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/edas_k8s_application_scaling_rule#utilization EdasK8SApplicationScalingRule#utilization}
  */
  readonly utilization: number;
}

export function edasK8SApplicationScalingRuleMetricsToTerraform(struct?: EdasK8SApplicationScalingRuleMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    utilization: cdktf.numberToTerraform(struct!.utilization),
  }
}


export function edasK8SApplicationScalingRuleMetricsToHclTerraform(struct?: EdasK8SApplicationScalingRuleMetrics | cdktf.IResolvable): any {
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
    utilization: {
      value: cdktf.numberToHclTerraform(struct!.utilization),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdasK8SApplicationScalingRuleMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdasK8SApplicationScalingRuleMetrics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._utilization !== undefined) {
      hasAnyValues = true;
      internalValueResult.utilization = this._utilization;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdasK8SApplicationScalingRuleMetrics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._utilization = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._utilization = value.utilization;
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

  // utilization - computed: false, optional: false, required: true
  private _utilization?: number; 
  public get utilization() {
    return this.getNumberAttribute('utilization');
  }
  public set utilization(value: number) {
    this._utilization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get utilizationInput() {
    return this._utilization;
  }
}

export class EdasK8SApplicationScalingRuleMetricsList extends cdktf.ComplexList {
  public internalValue? : EdasK8SApplicationScalingRuleMetrics[] | cdktf.IResolvable

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
  public get(index: number): EdasK8SApplicationScalingRuleMetricsOutputReference {
    return new EdasK8SApplicationScalingRuleMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EdasK8SApplicationScalingRuleTriggerTimerInDay {
  /**
  * like '08:00'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/edas_k8s_application_scaling_rule#at_time EdasK8SApplicationScalingRule#at_time}
  */
  readonly atTime: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/edas_k8s_application_scaling_rule#replicas EdasK8SApplicationScalingRule#replicas}
  */
  readonly replicas: number;
}

export function edasK8SApplicationScalingRuleTriggerTimerInDayToTerraform(struct?: EdasK8SApplicationScalingRuleTriggerTimerInDay | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    at_time: cdktf.stringToTerraform(struct!.atTime),
    replicas: cdktf.numberToTerraform(struct!.replicas),
  }
}


export function edasK8SApplicationScalingRuleTriggerTimerInDayToHclTerraform(struct?: EdasK8SApplicationScalingRuleTriggerTimerInDay | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    at_time: {
      value: cdktf.stringToHclTerraform(struct!.atTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdasK8SApplicationScalingRuleTriggerTimerInDayOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdasK8SApplicationScalingRuleTriggerTimerInDay | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._atTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.atTime = this._atTime;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdasK8SApplicationScalingRuleTriggerTimerInDay | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._atTime = undefined;
      this._replicas = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._atTime = value.atTime;
      this._replicas = value.replicas;
    }
  }

  // at_time - computed: false, optional: false, required: true
  private _atTime?: string; 
  public get atTime() {
    return this.getStringAttribute('at_time');
  }
  public set atTime(value: string) {
    this._atTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get atTimeInput() {
    return this._atTime;
  }

  // replicas - computed: false, optional: false, required: true
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }
}

export class EdasK8SApplicationScalingRuleTriggerTimerInDayList extends cdktf.ComplexList {
  public internalValue? : EdasK8SApplicationScalingRuleTriggerTimerInDay[] | cdktf.IResolvable

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
  public get(index: number): EdasK8SApplicationScalingRuleTriggerTimerInDayOutputReference {
    return new EdasK8SApplicationScalingRuleTriggerTimerInDayOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/edas_k8s_application_scaling_rule alibabacloudstack_edas_k8s_application_scaling_rule}
*/
export class EdasK8SApplicationScalingRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_edas_k8s_application_scaling_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EdasK8SApplicationScalingRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EdasK8SApplicationScalingRule to import
  * @param importFromId The id of the existing EdasK8SApplicationScalingRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/edas_k8s_application_scaling_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EdasK8SApplicationScalingRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_edas_k8s_application_scaling_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/edas_k8s_application_scaling_rule alibabacloudstack_edas_k8s_application_scaling_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EdasK8SApplicationScalingRuleConfig
  */
  public constructor(scope: Construct, id: string, config: EdasK8SApplicationScalingRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_edas_k8s_application_scaling_rule',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.16.21',
        providerVersionConstraint: '3.16.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appId = config.appId;
    this._enabled = config.enabled;
    this._id = config.id;
    this._maxReplicas = config.maxReplicas;
    this._minReplicas = config.minReplicas;
    this._scalingRuleName = config.scalingRuleName;
    this._scalingRuleType = config.scalingRuleType;
    this._triggerDryrun = config.triggerDryrun;
    this._triggerName = config.triggerName;
    this._triggerPeriod = config.triggerPeriod;
    this._triggerTimerInWeek = config.triggerTimerInWeek;
    this._triggerType = config.triggerType;
    this._metrics.internalValue = config.metrics;
    this._triggerTimerInDay.internalValue = config.triggerTimerInDay;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_id - computed: false, optional: false, required: true
  private _appId?: string; 
  public get appId() {
    return this.getStringAttribute('app_id');
  }
  public set appId(value: string) {
    this._appId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdInput() {
    return this._appId;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // max_replicas - computed: false, optional: true, required: false
  private _maxReplicas?: number; 
  public get maxReplicas() {
    return this.getNumberAttribute('max_replicas');
  }
  public set maxReplicas(value: number) {
    this._maxReplicas = value;
  }
  public resetMaxReplicas() {
    this._maxReplicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxReplicasInput() {
    return this._maxReplicas;
  }

  // min_replicas - computed: false, optional: true, required: false
  private _minReplicas?: number; 
  public get minReplicas() {
    return this.getNumberAttribute('min_replicas');
  }
  public set minReplicas(value: number) {
    this._minReplicas = value;
  }
  public resetMinReplicas() {
    this._minReplicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minReplicasInput() {
    return this._minReplicas;
  }

  // scaling_rule_name - computed: false, optional: false, required: true
  private _scalingRuleName?: string; 
  public get scalingRuleName() {
    return this.getStringAttribute('scaling_rule_name');
  }
  public set scalingRuleName(value: string) {
    this._scalingRuleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingRuleNameInput() {
    return this._scalingRuleName;
  }

  // scaling_rule_type - computed: false, optional: false, required: true
  private _scalingRuleType?: string; 
  public get scalingRuleType() {
    return this.getStringAttribute('scaling_rule_type');
  }
  public set scalingRuleType(value: string) {
    this._scalingRuleType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingRuleTypeInput() {
    return this._scalingRuleType;
  }

  // trigger_dryrun - computed: false, optional: true, required: false
  private _triggerDryrun?: boolean | cdktf.IResolvable; 
  public get triggerDryrun() {
    return this.getBooleanAttribute('trigger_dryrun');
  }
  public set triggerDryrun(value: boolean | cdktf.IResolvable) {
    this._triggerDryrun = value;
  }
  public resetTriggerDryrun() {
    this._triggerDryrun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerDryrunInput() {
    return this._triggerDryrun;
  }

  // trigger_name - computed: false, optional: true, required: false
  private _triggerName?: string; 
  public get triggerName() {
    return this.getStringAttribute('trigger_name');
  }
  public set triggerName(value: string) {
    this._triggerName = value;
  }
  public resetTriggerName() {
    this._triggerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerNameInput() {
    return this._triggerName;
  }

  // trigger_period - computed: false, optional: true, required: false
  private _triggerPeriod?: string; 
  public get triggerPeriod() {
    return this.getStringAttribute('trigger_period');
  }
  public set triggerPeriod(value: string) {
    this._triggerPeriod = value;
  }
  public resetTriggerPeriod() {
    this._triggerPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerPeriodInput() {
    return this._triggerPeriod;
  }

  // trigger_timer_in_week - computed: true, optional: true, required: false
  private _triggerTimerInWeek?: string[]; 
  public get triggerTimerInWeek() {
    return cdktf.Fn.tolist(this.getListAttribute('trigger_timer_in_week'));
  }
  public set triggerTimerInWeek(value: string[]) {
    this._triggerTimerInWeek = value;
  }
  public resetTriggerTimerInWeek() {
    this._triggerTimerInWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerTimerInWeekInput() {
    return this._triggerTimerInWeek;
  }

  // trigger_type - computed: true, optional: true, required: false
  private _triggerType?: string; 
  public get triggerType() {
    return this.getStringAttribute('trigger_type');
  }
  public set triggerType(value: string) {
    this._triggerType = value;
  }
  public resetTriggerType() {
    this._triggerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerTypeInput() {
    return this._triggerType;
  }

  // metrics - computed: false, optional: true, required: false
  private _metrics = new EdasK8SApplicationScalingRuleMetricsList(this, "metrics", true);
  public get metrics() {
    return this._metrics;
  }
  public putMetrics(value: EdasK8SApplicationScalingRuleMetrics[] | cdktf.IResolvable) {
    this._metrics.internalValue = value;
  }
  public resetMetrics() {
    this._metrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics.internalValue;
  }

  // trigger_timer_in_day - computed: false, optional: true, required: false
  private _triggerTimerInDay = new EdasK8SApplicationScalingRuleTriggerTimerInDayList(this, "trigger_timer_in_day", true);
  public get triggerTimerInDay() {
    return this._triggerTimerInDay;
  }
  public putTriggerTimerInDay(value: EdasK8SApplicationScalingRuleTriggerTimerInDay[] | cdktf.IResolvable) {
    this._triggerTimerInDay.internalValue = value;
  }
  public resetTriggerTimerInDay() {
    this._triggerTimerInDay.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerTimerInDayInput() {
    return this._triggerTimerInDay.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_id: cdktf.stringToTerraform(this._appId),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      max_replicas: cdktf.numberToTerraform(this._maxReplicas),
      min_replicas: cdktf.numberToTerraform(this._minReplicas),
      scaling_rule_name: cdktf.stringToTerraform(this._scalingRuleName),
      scaling_rule_type: cdktf.stringToTerraform(this._scalingRuleType),
      trigger_dryrun: cdktf.booleanToTerraform(this._triggerDryrun),
      trigger_name: cdktf.stringToTerraform(this._triggerName),
      trigger_period: cdktf.stringToTerraform(this._triggerPeriod),
      trigger_timer_in_week: cdktf.listMapper(cdktf.stringToTerraform, false)(this._triggerTimerInWeek),
      trigger_type: cdktf.stringToTerraform(this._triggerType),
      metrics: cdktf.listMapper(edasK8SApplicationScalingRuleMetricsToTerraform, true)(this._metrics.internalValue),
      trigger_timer_in_day: cdktf.listMapper(edasK8SApplicationScalingRuleTriggerTimerInDayToTerraform, true)(this._triggerTimerInDay.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_id: {
        value: cdktf.stringToHclTerraform(this._appId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_replicas: {
        value: cdktf.numberToHclTerraform(this._maxReplicas),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_replicas: {
        value: cdktf.numberToHclTerraform(this._minReplicas),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scaling_rule_name: {
        value: cdktf.stringToHclTerraform(this._scalingRuleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scaling_rule_type: {
        value: cdktf.stringToHclTerraform(this._scalingRuleType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trigger_dryrun: {
        value: cdktf.booleanToHclTerraform(this._triggerDryrun),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      trigger_name: {
        value: cdktf.stringToHclTerraform(this._triggerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trigger_period: {
        value: cdktf.stringToHclTerraform(this._triggerPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trigger_timer_in_week: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._triggerTimerInWeek),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      trigger_type: {
        value: cdktf.stringToHclTerraform(this._triggerType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metrics: {
        value: cdktf.listMapperHcl(edasK8SApplicationScalingRuleMetricsToHclTerraform, true)(this._metrics.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EdasK8SApplicationScalingRuleMetricsList",
      },
      trigger_timer_in_day: {
        value: cdktf.listMapperHcl(edasK8SApplicationScalingRuleTriggerTimerInDayToHclTerraform, true)(this._triggerTimerInDay.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EdasK8SApplicationScalingRuleTriggerTimerInDayList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
