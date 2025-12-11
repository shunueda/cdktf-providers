// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/tem_scale_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TemScaleRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * application ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/tem_scale_rule#application_id TemScaleRule#application_id}
  */
  readonly applicationId: string;
  /**
  * environment ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/tem_scale_rule#environment_id TemScaleRule#environment_id}
  */
  readonly environmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/tem_scale_rule#id TemScaleRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * application ID, which is combined by environment ID and application ID, like `en-o5edaepv#app-3j29aa2p`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/tem_scale_rule#workload_id TemScaleRule#workload_id}
  */
  readonly workloadId: string;
  /**
  * autoscaler block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/tem_scale_rule#autoscaler TemScaleRule#autoscaler}
  */
  readonly autoscaler: TemScaleRuleAutoscaler;
}
export interface TemScaleRuleAutoscalerCronHorizontalAutoscalerSchedules {
  /**
  * start time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/tem_scale_rule#start_at TemScaleRule#start_at}
  */
  readonly startAt: string;
  /**
  * target replica number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/tem_scale_rule#target_replicas TemScaleRule#target_replicas}
  */
  readonly targetReplicas: number;
}

export function temScaleRuleAutoscalerCronHorizontalAutoscalerSchedulesToTerraform(struct?: TemScaleRuleAutoscalerCronHorizontalAutoscalerSchedules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    start_at: cdktf.stringToTerraform(struct!.startAt),
    target_replicas: cdktf.numberToTerraform(struct!.targetReplicas),
  }
}


export function temScaleRuleAutoscalerCronHorizontalAutoscalerSchedulesToHclTerraform(struct?: TemScaleRuleAutoscalerCronHorizontalAutoscalerSchedules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    start_at: {
      value: cdktf.stringToHclTerraform(struct!.startAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_replicas: {
      value: cdktf.numberToHclTerraform(struct!.targetReplicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemScaleRuleAutoscalerCronHorizontalAutoscalerSchedulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemScaleRuleAutoscalerCronHorizontalAutoscalerSchedules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._startAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.startAt = this._startAt;
    }
    if (this._targetReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetReplicas = this._targetReplicas;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemScaleRuleAutoscalerCronHorizontalAutoscalerSchedules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._startAt = undefined;
      this._targetReplicas = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._startAt = value.startAt;
      this._targetReplicas = value.targetReplicas;
    }
  }

  // start_at - computed: false, optional: false, required: true
  private _startAt?: string; 
  public get startAt() {
    return this.getStringAttribute('start_at');
  }
  public set startAt(value: string) {
    this._startAt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startAtInput() {
    return this._startAt;
  }

  // target_replicas - computed: false, optional: false, required: true
  private _targetReplicas?: number; 
  public get targetReplicas() {
    return this.getNumberAttribute('target_replicas');
  }
  public set targetReplicas(value: number) {
    this._targetReplicas = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetReplicasInput() {
    return this._targetReplicas;
  }
}

export class TemScaleRuleAutoscalerCronHorizontalAutoscalerSchedulesList extends cdktf.ComplexList {
  public internalValue? : TemScaleRuleAutoscalerCronHorizontalAutoscalerSchedules[] | cdktf.IResolvable

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
  public get(index: number): TemScaleRuleAutoscalerCronHorizontalAutoscalerSchedulesOutputReference {
    return new TemScaleRuleAutoscalerCronHorizontalAutoscalerSchedulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemScaleRuleAutoscalerCronHorizontalAutoscaler {
  /**
  * enable scaler.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/tem_scale_rule#enabled TemScaleRule#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/tem_scale_rule#name TemScaleRule#name}
  */
  readonly name: string;
  /**
  * period.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/tem_scale_rule#period TemScaleRule#period}
  */
  readonly period: string;
  /**
  * priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/tem_scale_rule#priority TemScaleRule#priority}
  */
  readonly priority: number;
  /**
  * schedules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/tem_scale_rule#schedules TemScaleRule#schedules}
  */
  readonly schedules: TemScaleRuleAutoscalerCronHorizontalAutoscalerSchedules[] | cdktf.IResolvable;
}

export function temScaleRuleAutoscalerCronHorizontalAutoscalerToTerraform(struct?: TemScaleRuleAutoscalerCronHorizontalAutoscaler | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    name: cdktf.stringToTerraform(struct!.name),
    period: cdktf.stringToTerraform(struct!.period),
    priority: cdktf.numberToTerraform(struct!.priority),
    schedules: cdktf.listMapper(temScaleRuleAutoscalerCronHorizontalAutoscalerSchedulesToTerraform, true)(struct!.schedules),
  }
}


export function temScaleRuleAutoscalerCronHorizontalAutoscalerToHclTerraform(struct?: TemScaleRuleAutoscalerCronHorizontalAutoscaler | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    period: {
      value: cdktf.stringToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    schedules: {
      value: cdktf.listMapperHcl(temScaleRuleAutoscalerCronHorizontalAutoscalerSchedulesToHclTerraform, true)(struct!.schedules),
      isBlock: true,
      type: "list",
      storageClassType: "TemScaleRuleAutoscalerCronHorizontalAutoscalerSchedulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemScaleRuleAutoscalerCronHorizontalAutoscalerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemScaleRuleAutoscalerCronHorizontalAutoscaler | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._schedules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedules = this._schedules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemScaleRuleAutoscalerCronHorizontalAutoscaler | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._name = undefined;
      this._period = undefined;
      this._priority = undefined;
      this._schedules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._name = value.name;
      this._period = value.period;
      this._priority = value.priority;
      this._schedules.internalValue = value.schedules;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // period - computed: false, optional: false, required: true
  private _period?: string; 
  public get period() {
    return this.getStringAttribute('period');
  }
  public set period(value: string) {
    this._period = value;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // schedules - computed: false, optional: false, required: true
  private _schedules = new TemScaleRuleAutoscalerCronHorizontalAutoscalerSchedulesList(this, "schedules", false);
  public get schedules() {
    return this._schedules;
  }
  public putSchedules(value: TemScaleRuleAutoscalerCronHorizontalAutoscalerSchedules[] | cdktf.IResolvable) {
    this._schedules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulesInput() {
    return this._schedules.internalValue;
  }
}

export class TemScaleRuleAutoscalerCronHorizontalAutoscalerList extends cdktf.ComplexList {
  public internalValue? : TemScaleRuleAutoscalerCronHorizontalAutoscaler[] | cdktf.IResolvable

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
  public get(index: number): TemScaleRuleAutoscalerCronHorizontalAutoscalerOutputReference {
    return new TemScaleRuleAutoscalerCronHorizontalAutoscalerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemScaleRuleAutoscalerHorizontalAutoscaler {
  /**
  * enable scaler.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/tem_scale_rule#enabled TemScaleRule#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * maximal replica number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/tem_scale_rule#max_replicas TemScaleRule#max_replicas}
  */
  readonly maxReplicas: number;
  /**
  * metric name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/tem_scale_rule#metrics TemScaleRule#metrics}
  */
  readonly metrics: string;
  /**
  * minimal replica number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/tem_scale_rule#min_replicas TemScaleRule#min_replicas}
  */
  readonly minReplicas: number;
  /**
  * metric threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/tem_scale_rule#threshold TemScaleRule#threshold}
  */
  readonly threshold: number;
}

export function temScaleRuleAutoscalerHorizontalAutoscalerToTerraform(struct?: TemScaleRuleAutoscalerHorizontalAutoscaler | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    max_replicas: cdktf.numberToTerraform(struct!.maxReplicas),
    metrics: cdktf.stringToTerraform(struct!.metrics),
    min_replicas: cdktf.numberToTerraform(struct!.minReplicas),
    threshold: cdktf.numberToTerraform(struct!.threshold),
  }
}


export function temScaleRuleAutoscalerHorizontalAutoscalerToHclTerraform(struct?: TemScaleRuleAutoscalerHorizontalAutoscaler | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_replicas: {
      value: cdktf.numberToHclTerraform(struct!.maxReplicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metrics: {
      value: cdktf.stringToHclTerraform(struct!.metrics),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_replicas: {
      value: cdktf.numberToHclTerraform(struct!.minReplicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemScaleRuleAutoscalerHorizontalAutoscalerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemScaleRuleAutoscalerHorizontalAutoscaler | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._maxReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxReplicas = this._maxReplicas;
    }
    if (this._metrics !== undefined) {
      hasAnyValues = true;
      internalValueResult.metrics = this._metrics;
    }
    if (this._minReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.minReplicas = this._minReplicas;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemScaleRuleAutoscalerHorizontalAutoscaler | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._maxReplicas = undefined;
      this._metrics = undefined;
      this._minReplicas = undefined;
      this._threshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._maxReplicas = value.maxReplicas;
      this._metrics = value.metrics;
      this._minReplicas = value.minReplicas;
      this._threshold = value.threshold;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // max_replicas - computed: false, optional: false, required: true
  private _maxReplicas?: number; 
  public get maxReplicas() {
    return this.getNumberAttribute('max_replicas');
  }
  public set maxReplicas(value: number) {
    this._maxReplicas = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxReplicasInput() {
    return this._maxReplicas;
  }

  // metrics - computed: false, optional: false, required: true
  private _metrics?: string; 
  public get metrics() {
    return this.getStringAttribute('metrics');
  }
  public set metrics(value: string) {
    this._metrics = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics;
  }

  // min_replicas - computed: false, optional: false, required: true
  private _minReplicas?: number; 
  public get minReplicas() {
    return this.getNumberAttribute('min_replicas');
  }
  public set minReplicas(value: number) {
    this._minReplicas = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minReplicasInput() {
    return this._minReplicas;
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}

export class TemScaleRuleAutoscalerHorizontalAutoscalerList extends cdktf.ComplexList {
  public internalValue? : TemScaleRuleAutoscalerHorizontalAutoscaler[] | cdktf.IResolvable

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
  public get(index: number): TemScaleRuleAutoscalerHorizontalAutoscalerOutputReference {
    return new TemScaleRuleAutoscalerHorizontalAutoscalerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemScaleRuleAutoscaler {
  /**
  * name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/tem_scale_rule#autoscaler_name TemScaleRule#autoscaler_name}
  */
  readonly autoscalerName: string;
  /**
  * description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/tem_scale_rule#description TemScaleRule#description}
  */
  readonly description?: string;
  /**
  * enable AutoScaler.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/tem_scale_rule#enabled TemScaleRule#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * maximal replica number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/tem_scale_rule#max_replicas TemScaleRule#max_replicas}
  */
  readonly maxReplicas: number;
  /**
  * minimal replica number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/tem_scale_rule#min_replicas TemScaleRule#min_replicas}
  */
  readonly minReplicas: number;
  /**
  * cron_horizontal_autoscaler block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/tem_scale_rule#cron_horizontal_autoscaler TemScaleRule#cron_horizontal_autoscaler}
  */
  readonly cronHorizontalAutoscaler?: TemScaleRuleAutoscalerCronHorizontalAutoscaler[] | cdktf.IResolvable;
  /**
  * horizontal_autoscaler block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/tem_scale_rule#horizontal_autoscaler TemScaleRule#horizontal_autoscaler}
  */
  readonly horizontalAutoscaler?: TemScaleRuleAutoscalerHorizontalAutoscaler[] | cdktf.IResolvable;
}

export function temScaleRuleAutoscalerToTerraform(struct?: TemScaleRuleAutoscalerOutputReference | TemScaleRuleAutoscaler): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autoscaler_name: cdktf.stringToTerraform(struct!.autoscalerName),
    description: cdktf.stringToTerraform(struct!.description),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    max_replicas: cdktf.numberToTerraform(struct!.maxReplicas),
    min_replicas: cdktf.numberToTerraform(struct!.minReplicas),
    cron_horizontal_autoscaler: cdktf.listMapper(temScaleRuleAutoscalerCronHorizontalAutoscalerToTerraform, true)(struct!.cronHorizontalAutoscaler),
    horizontal_autoscaler: cdktf.listMapper(temScaleRuleAutoscalerHorizontalAutoscalerToTerraform, true)(struct!.horizontalAutoscaler),
  }
}


export function temScaleRuleAutoscalerToHclTerraform(struct?: TemScaleRuleAutoscalerOutputReference | TemScaleRuleAutoscaler): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autoscaler_name: {
      value: cdktf.stringToHclTerraform(struct!.autoscalerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_replicas: {
      value: cdktf.numberToHclTerraform(struct!.maxReplicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_replicas: {
      value: cdktf.numberToHclTerraform(struct!.minReplicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cron_horizontal_autoscaler: {
      value: cdktf.listMapperHcl(temScaleRuleAutoscalerCronHorizontalAutoscalerToHclTerraform, true)(struct!.cronHorizontalAutoscaler),
      isBlock: true,
      type: "list",
      storageClassType: "TemScaleRuleAutoscalerCronHorizontalAutoscalerList",
    },
    horizontal_autoscaler: {
      value: cdktf.listMapperHcl(temScaleRuleAutoscalerHorizontalAutoscalerToHclTerraform, true)(struct!.horizontalAutoscaler),
      isBlock: true,
      type: "list",
      storageClassType: "TemScaleRuleAutoscalerHorizontalAutoscalerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemScaleRuleAutoscalerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TemScaleRuleAutoscaler | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoscalerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscalerName = this._autoscalerName;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._maxReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxReplicas = this._maxReplicas;
    }
    if (this._minReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.minReplicas = this._minReplicas;
    }
    if (this._cronHorizontalAutoscaler?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cronHorizontalAutoscaler = this._cronHorizontalAutoscaler?.internalValue;
    }
    if (this._horizontalAutoscaler?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.horizontalAutoscaler = this._horizontalAutoscaler?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemScaleRuleAutoscaler | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoscalerName = undefined;
      this._description = undefined;
      this._enabled = undefined;
      this._maxReplicas = undefined;
      this._minReplicas = undefined;
      this._cronHorizontalAutoscaler.internalValue = undefined;
      this._horizontalAutoscaler.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoscalerName = value.autoscalerName;
      this._description = value.description;
      this._enabled = value.enabled;
      this._maxReplicas = value.maxReplicas;
      this._minReplicas = value.minReplicas;
      this._cronHorizontalAutoscaler.internalValue = value.cronHorizontalAutoscaler;
      this._horizontalAutoscaler.internalValue = value.horizontalAutoscaler;
    }
  }

  // autoscaler_name - computed: false, optional: false, required: true
  private _autoscalerName?: string; 
  public get autoscalerName() {
    return this.getStringAttribute('autoscaler_name');
  }
  public set autoscalerName(value: string) {
    this._autoscalerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalerNameInput() {
    return this._autoscalerName;
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

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // max_replicas - computed: false, optional: false, required: true
  private _maxReplicas?: number; 
  public get maxReplicas() {
    return this.getNumberAttribute('max_replicas');
  }
  public set maxReplicas(value: number) {
    this._maxReplicas = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxReplicasInput() {
    return this._maxReplicas;
  }

  // min_replicas - computed: false, optional: false, required: true
  private _minReplicas?: number; 
  public get minReplicas() {
    return this.getNumberAttribute('min_replicas');
  }
  public set minReplicas(value: number) {
    this._minReplicas = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minReplicasInput() {
    return this._minReplicas;
  }

  // cron_horizontal_autoscaler - computed: false, optional: true, required: false
  private _cronHorizontalAutoscaler = new TemScaleRuleAutoscalerCronHorizontalAutoscalerList(this, "cron_horizontal_autoscaler", false);
  public get cronHorizontalAutoscaler() {
    return this._cronHorizontalAutoscaler;
  }
  public putCronHorizontalAutoscaler(value: TemScaleRuleAutoscalerCronHorizontalAutoscaler[] | cdktf.IResolvable) {
    this._cronHorizontalAutoscaler.internalValue = value;
  }
  public resetCronHorizontalAutoscaler() {
    this._cronHorizontalAutoscaler.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronHorizontalAutoscalerInput() {
    return this._cronHorizontalAutoscaler.internalValue;
  }

  // horizontal_autoscaler - computed: false, optional: true, required: false
  private _horizontalAutoscaler = new TemScaleRuleAutoscalerHorizontalAutoscalerList(this, "horizontal_autoscaler", false);
  public get horizontalAutoscaler() {
    return this._horizontalAutoscaler;
  }
  public putHorizontalAutoscaler(value: TemScaleRuleAutoscalerHorizontalAutoscaler[] | cdktf.IResolvable) {
    this._horizontalAutoscaler.internalValue = value;
  }
  public resetHorizontalAutoscaler() {
    this._horizontalAutoscaler.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get horizontalAutoscalerInput() {
    return this._horizontalAutoscaler.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/tem_scale_rule tencentcloud_tem_scale_rule}
*/
export class TemScaleRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tem_scale_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TemScaleRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TemScaleRule to import
  * @param importFromId The id of the existing TemScaleRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/tem_scale_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TemScaleRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tem_scale_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/tem_scale_rule tencentcloud_tem_scale_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TemScaleRuleConfig
  */
  public constructor(scope: Construct, id: string, config: TemScaleRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tem_scale_rule',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.44',
        providerVersionConstraint: '1.82.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationId = config.applicationId;
    this._environmentId = config.environmentId;
    this._id = config.id;
    this._workloadId = config.workloadId;
    this._autoscaler.internalValue = config.autoscaler;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_id - computed: false, optional: false, required: true
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
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

  // workload_id - computed: false, optional: false, required: true
  private _workloadId?: string; 
  public get workloadId() {
    return this.getStringAttribute('workload_id');
  }
  public set workloadId(value: string) {
    this._workloadId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadIdInput() {
    return this._workloadId;
  }

  // autoscaler - computed: false, optional: false, required: true
  private _autoscaler = new TemScaleRuleAutoscalerOutputReference(this, "autoscaler");
  public get autoscaler() {
    return this._autoscaler;
  }
  public putAutoscaler(value: TemScaleRuleAutoscaler) {
    this._autoscaler.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalerInput() {
    return this._autoscaler.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_id: cdktf.stringToTerraform(this._applicationId),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      id: cdktf.stringToTerraform(this._id),
      workload_id: cdktf.stringToTerraform(this._workloadId),
      autoscaler: temScaleRuleAutoscalerToTerraform(this._autoscaler.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_id: {
        value: cdktf.stringToHclTerraform(this._applicationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
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
      workload_id: {
        value: cdktf.stringToHclTerraform(this._workloadId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      autoscaler: {
        value: temScaleRuleAutoscalerToHclTerraform(this._autoscaler.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TemScaleRuleAutoscalerList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
