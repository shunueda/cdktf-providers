// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_edas_k8s_application_scaling_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApsarastackEdasK8SApplicationScalingRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_edas_k8s_application_scaling_rule#app_id ApsarastackEdasK8SApplicationScalingRule#app_id}
  */
  readonly appId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_edas_k8s_application_scaling_rule#enabled ApsarastackEdasK8SApplicationScalingRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_edas_k8s_application_scaling_rule#id ApsarastackEdasK8SApplicationScalingRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_edas_k8s_application_scaling_rule#max_replicas ApsarastackEdasK8SApplicationScalingRule#max_replicas}
  */
  readonly maxReplicas?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_edas_k8s_application_scaling_rule#min_replicas ApsarastackEdasK8SApplicationScalingRule#min_replicas}
  */
  readonly minReplicas?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_edas_k8s_application_scaling_rule#scale_down_select_policy ApsarastackEdasK8SApplicationScalingRule#scale_down_select_policy}
  */
  readonly scaleDownSelectPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_edas_k8s_application_scaling_rule#scale_down_stabilization_window_seconds ApsarastackEdasK8SApplicationScalingRule#scale_down_stabilization_window_seconds}
  */
  readonly scaleDownStabilizationWindowSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_edas_k8s_application_scaling_rule#scale_up_select_policy ApsarastackEdasK8SApplicationScalingRule#scale_up_select_policy}
  */
  readonly scaleUpSelectPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_edas_k8s_application_scaling_rule#scale_up_stabilization_window_seconds ApsarastackEdasK8SApplicationScalingRule#scale_up_stabilization_window_seconds}
  */
  readonly scaleUpStabilizationWindowSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_edas_k8s_application_scaling_rule#scaling_rule_name ApsarastackEdasK8SApplicationScalingRule#scaling_rule_name}
  */
  readonly scalingRuleName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_edas_k8s_application_scaling_rule#scaling_rule_type ApsarastackEdasK8SApplicationScalingRule#scaling_rule_type}
  */
  readonly scalingRuleType: string;
  /**
  * metrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_edas_k8s_application_scaling_rule#metrics ApsarastackEdasK8SApplicationScalingRule#metrics}
  */
  readonly metrics?: ApsarastackEdasK8SApplicationScalingRuleMetrics[] | cdktf.IResolvable;
  /**
  * scale_down_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_edas_k8s_application_scaling_rule#scale_down_policies ApsarastackEdasK8SApplicationScalingRule#scale_down_policies}
  */
  readonly scaleDownPolicies?: ApsarastackEdasK8SApplicationScalingRuleScaleDownPolicies[] | cdktf.IResolvable;
  /**
  * scale_up_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_edas_k8s_application_scaling_rule#scale_up_policies ApsarastackEdasK8SApplicationScalingRule#scale_up_policies}
  */
  readonly scaleUpPolicies?: ApsarastackEdasK8SApplicationScalingRuleScaleUpPolicies[] | cdktf.IResolvable;
  /**
  * triggers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_edas_k8s_application_scaling_rule#triggers ApsarastackEdasK8SApplicationScalingRule#triggers}
  */
  readonly triggers?: ApsarastackEdasK8SApplicationScalingRuleTriggers[] | cdktf.IResolvable;
}
export interface ApsarastackEdasK8SApplicationScalingRuleMetrics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_edas_k8s_application_scaling_rule#type ApsarastackEdasK8SApplicationScalingRule#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_edas_k8s_application_scaling_rule#utilization ApsarastackEdasK8SApplicationScalingRule#utilization}
  */
  readonly utilization: number;
}

export function apsarastackEdasK8SApplicationScalingRuleMetricsToTerraform(struct?: ApsarastackEdasK8SApplicationScalingRuleMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    utilization: cdktf.numberToTerraform(struct!.utilization),
  }
}


export function apsarastackEdasK8SApplicationScalingRuleMetricsToHclTerraform(struct?: ApsarastackEdasK8SApplicationScalingRuleMetrics | cdktf.IResolvable): any {
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

export class ApsarastackEdasK8SApplicationScalingRuleMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApsarastackEdasK8SApplicationScalingRuleMetrics | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApsarastackEdasK8SApplicationScalingRuleMetrics | cdktf.IResolvable | undefined) {
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

export class ApsarastackEdasK8SApplicationScalingRuleMetricsList extends cdktf.ComplexList {
  public internalValue? : ApsarastackEdasK8SApplicationScalingRuleMetrics[] | cdktf.IResolvable

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
  public get(index: number): ApsarastackEdasK8SApplicationScalingRuleMetricsOutputReference {
    return new ApsarastackEdasK8SApplicationScalingRuleMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApsarastackEdasK8SApplicationScalingRuleScaleDownPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_edas_k8s_application_scaling_rule#period_seconds ApsarastackEdasK8SApplicationScalingRule#period_seconds}
  */
  readonly periodSeconds: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_edas_k8s_application_scaling_rule#type ApsarastackEdasK8SApplicationScalingRule#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_edas_k8s_application_scaling_rule#value ApsarastackEdasK8SApplicationScalingRule#value}
  */
  readonly value: number;
}

export function apsarastackEdasK8SApplicationScalingRuleScaleDownPoliciesToTerraform(struct?: ApsarastackEdasK8SApplicationScalingRuleScaleDownPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function apsarastackEdasK8SApplicationScalingRuleScaleDownPoliciesToHclTerraform(struct?: ApsarastackEdasK8SApplicationScalingRuleScaleDownPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.periodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApsarastackEdasK8SApplicationScalingRuleScaleDownPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApsarastackEdasK8SApplicationScalingRuleScaleDownPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._periodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodSeconds = this._periodSeconds;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsarastackEdasK8SApplicationScalingRuleScaleDownPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._periodSeconds = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._periodSeconds = value.periodSeconds;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // period_seconds - computed: false, optional: false, required: true
  private _periodSeconds?: number; 
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }
  public set periodSeconds(value: number) {
    this._periodSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get periodSecondsInput() {
    return this._periodSeconds;
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

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ApsarastackEdasK8SApplicationScalingRuleScaleDownPoliciesList extends cdktf.ComplexList {
  public internalValue? : ApsarastackEdasK8SApplicationScalingRuleScaleDownPolicies[] | cdktf.IResolvable

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
  public get(index: number): ApsarastackEdasK8SApplicationScalingRuleScaleDownPoliciesOutputReference {
    return new ApsarastackEdasK8SApplicationScalingRuleScaleDownPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApsarastackEdasK8SApplicationScalingRuleScaleUpPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_edas_k8s_application_scaling_rule#period_seconds ApsarastackEdasK8SApplicationScalingRule#period_seconds}
  */
  readonly periodSeconds: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_edas_k8s_application_scaling_rule#type ApsarastackEdasK8SApplicationScalingRule#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_edas_k8s_application_scaling_rule#value ApsarastackEdasK8SApplicationScalingRule#value}
  */
  readonly value: number;
}

export function apsarastackEdasK8SApplicationScalingRuleScaleUpPoliciesToTerraform(struct?: ApsarastackEdasK8SApplicationScalingRuleScaleUpPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function apsarastackEdasK8SApplicationScalingRuleScaleUpPoliciesToHclTerraform(struct?: ApsarastackEdasK8SApplicationScalingRuleScaleUpPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.periodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApsarastackEdasK8SApplicationScalingRuleScaleUpPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApsarastackEdasK8SApplicationScalingRuleScaleUpPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._periodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodSeconds = this._periodSeconds;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsarastackEdasK8SApplicationScalingRuleScaleUpPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._periodSeconds = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._periodSeconds = value.periodSeconds;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // period_seconds - computed: false, optional: false, required: true
  private _periodSeconds?: number; 
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }
  public set periodSeconds(value: number) {
    this._periodSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get periodSecondsInput() {
    return this._periodSeconds;
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

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ApsarastackEdasK8SApplicationScalingRuleScaleUpPoliciesList extends cdktf.ComplexList {
  public internalValue? : ApsarastackEdasK8SApplicationScalingRuleScaleUpPolicies[] | cdktf.IResolvable

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
  public get(index: number): ApsarastackEdasK8SApplicationScalingRuleScaleUpPoliciesOutputReference {
    return new ApsarastackEdasK8SApplicationScalingRuleScaleUpPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApsarastackEdasK8SApplicationScalingRuleTriggersTimerInDay {
  /**
  * like '08:00'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_edas_k8s_application_scaling_rule#at_time ApsarastackEdasK8SApplicationScalingRule#at_time}
  */
  readonly atTime: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_edas_k8s_application_scaling_rule#horizon_mode ApsarastackEdasK8SApplicationScalingRule#horizon_mode}
  */
  readonly horizonMode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_edas_k8s_application_scaling_rule#replicas ApsarastackEdasK8SApplicationScalingRule#replicas}
  */
  readonly replicas: number;
}

export function apsarastackEdasK8SApplicationScalingRuleTriggersTimerInDayToTerraform(struct?: ApsarastackEdasK8SApplicationScalingRuleTriggersTimerInDay | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    at_time: cdktf.stringToTerraform(struct!.atTime),
    horizon_mode: cdktf.booleanToTerraform(struct!.horizonMode),
    replicas: cdktf.numberToTerraform(struct!.replicas),
  }
}


export function apsarastackEdasK8SApplicationScalingRuleTriggersTimerInDayToHclTerraform(struct?: ApsarastackEdasK8SApplicationScalingRuleTriggersTimerInDay | cdktf.IResolvable): any {
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
    horizon_mode: {
      value: cdktf.booleanToHclTerraform(struct!.horizonMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class ApsarastackEdasK8SApplicationScalingRuleTriggersTimerInDayOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApsarastackEdasK8SApplicationScalingRuleTriggersTimerInDay | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._atTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.atTime = this._atTime;
    }
    if (this._horizonMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.horizonMode = this._horizonMode;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsarastackEdasK8SApplicationScalingRuleTriggersTimerInDay | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._atTime = undefined;
      this._horizonMode = undefined;
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
      this._horizonMode = value.horizonMode;
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

  // horizon_mode - computed: false, optional: true, required: false
  private _horizonMode?: boolean | cdktf.IResolvable; 
  public get horizonMode() {
    return this.getBooleanAttribute('horizon_mode');
  }
  public set horizonMode(value: boolean | cdktf.IResolvable) {
    this._horizonMode = value;
  }
  public resetHorizonMode() {
    this._horizonMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get horizonModeInput() {
    return this._horizonMode;
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

export class ApsarastackEdasK8SApplicationScalingRuleTriggersTimerInDayList extends cdktf.ComplexList {
  public internalValue? : ApsarastackEdasK8SApplicationScalingRuleTriggersTimerInDay[] | cdktf.IResolvable

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
  public get(index: number): ApsarastackEdasK8SApplicationScalingRuleTriggersTimerInDayOutputReference {
    return new ApsarastackEdasK8SApplicationScalingRuleTriggersTimerInDayOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApsarastackEdasK8SApplicationScalingRuleTriggers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_edas_k8s_application_scaling_rule#name ApsarastackEdasK8SApplicationScalingRule#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_edas_k8s_application_scaling_rule#period ApsarastackEdasK8SApplicationScalingRule#period}
  */
  readonly period?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_edas_k8s_application_scaling_rule#timer_in_month ApsarastackEdasK8SApplicationScalingRule#timer_in_month}
  */
  readonly timerInMonth?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_edas_k8s_application_scaling_rule#timer_in_week ApsarastackEdasK8SApplicationScalingRule#timer_in_week}
  */
  readonly timerInWeek?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_edas_k8s_application_scaling_rule#type ApsarastackEdasK8SApplicationScalingRule#type}
  */
  readonly type?: string;
  /**
  * timer_in_day block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_edas_k8s_application_scaling_rule#timer_in_day ApsarastackEdasK8SApplicationScalingRule#timer_in_day}
  */
  readonly timerInDay?: ApsarastackEdasK8SApplicationScalingRuleTriggersTimerInDay[] | cdktf.IResolvable;
}

export function apsarastackEdasK8SApplicationScalingRuleTriggersToTerraform(struct?: ApsarastackEdasK8SApplicationScalingRuleTriggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    period: cdktf.stringToTerraform(struct!.period),
    timer_in_month: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.timerInMonth),
    timer_in_week: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.timerInWeek),
    type: cdktf.stringToTerraform(struct!.type),
    timer_in_day: cdktf.listMapper(apsarastackEdasK8SApplicationScalingRuleTriggersTimerInDayToTerraform, true)(struct!.timerInDay),
  }
}


export function apsarastackEdasK8SApplicationScalingRuleTriggersToHclTerraform(struct?: ApsarastackEdasK8SApplicationScalingRuleTriggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    timer_in_month: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.timerInMonth),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    timer_in_week: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.timerInWeek),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timer_in_day: {
      value: cdktf.listMapperHcl(apsarastackEdasK8SApplicationScalingRuleTriggersTimerInDayToHclTerraform, true)(struct!.timerInDay),
      isBlock: true,
      type: "set",
      storageClassType: "ApsarastackEdasK8SApplicationScalingRuleTriggersTimerInDayList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApsarastackEdasK8SApplicationScalingRuleTriggersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApsarastackEdasK8SApplicationScalingRuleTriggers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    if (this._timerInMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.timerInMonth = this._timerInMonth;
    }
    if (this._timerInWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.timerInWeek = this._timerInWeek;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._timerInDay?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timerInDay = this._timerInDay?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsarastackEdasK8SApplicationScalingRuleTriggers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._period = undefined;
      this._timerInMonth = undefined;
      this._timerInWeek = undefined;
      this._type = undefined;
      this._timerInDay.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._period = value.period;
      this._timerInMonth = value.timerInMonth;
      this._timerInWeek = value.timerInWeek;
      this._type = value.type;
      this._timerInDay.internalValue = value.timerInDay;
    }
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

  // period - computed: false, optional: true, required: false
  private _period?: string; 
  public get period() {
    return this.getStringAttribute('period');
  }
  public set period(value: string) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // timer_in_month - computed: true, optional: true, required: false
  private _timerInMonth?: string[]; 
  public get timerInMonth() {
    return cdktf.Fn.tolist(this.getListAttribute('timer_in_month'));
  }
  public set timerInMonth(value: string[]) {
    this._timerInMonth = value;
  }
  public resetTimerInMonth() {
    this._timerInMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timerInMonthInput() {
    return this._timerInMonth;
  }

  // timer_in_week - computed: true, optional: true, required: false
  private _timerInWeek?: string[]; 
  public get timerInWeek() {
    return cdktf.Fn.tolist(this.getListAttribute('timer_in_week'));
  }
  public set timerInWeek(value: string[]) {
    this._timerInWeek = value;
  }
  public resetTimerInWeek() {
    this._timerInWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timerInWeekInput() {
    return this._timerInWeek;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // timer_in_day - computed: false, optional: true, required: false
  private _timerInDay = new ApsarastackEdasK8SApplicationScalingRuleTriggersTimerInDayList(this, "timer_in_day", true);
  public get timerInDay() {
    return this._timerInDay;
  }
  public putTimerInDay(value: ApsarastackEdasK8SApplicationScalingRuleTriggersTimerInDay[] | cdktf.IResolvable) {
    this._timerInDay.internalValue = value;
  }
  public resetTimerInDay() {
    this._timerInDay.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timerInDayInput() {
    return this._timerInDay.internalValue;
  }
}

export class ApsarastackEdasK8SApplicationScalingRuleTriggersList extends cdktf.ComplexList {
  public internalValue? : ApsarastackEdasK8SApplicationScalingRuleTriggers[] | cdktf.IResolvable

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
  public get(index: number): ApsarastackEdasK8SApplicationScalingRuleTriggersOutputReference {
    return new ApsarastackEdasK8SApplicationScalingRuleTriggersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_edas_k8s_application_scaling_rule apsarastack_edas_k8s_application_scaling_rule}
*/
export class ApsarastackEdasK8SApplicationScalingRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_edas_k8s_application_scaling_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApsarastackEdasK8SApplicationScalingRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApsarastackEdasK8SApplicationScalingRule to import
  * @param importFromId The id of the existing ApsarastackEdasK8SApplicationScalingRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_edas_k8s_application_scaling_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApsarastackEdasK8SApplicationScalingRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_edas_k8s_application_scaling_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_edas_k8s_application_scaling_rule apsarastack_edas_k8s_application_scaling_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApsarastackEdasK8SApplicationScalingRuleConfig
  */
  public constructor(scope: Construct, id: string, config: ApsarastackEdasK8SApplicationScalingRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_edas_k8s_application_scaling_rule',
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
    this._appId = config.appId;
    this._enabled = config.enabled;
    this._id = config.id;
    this._maxReplicas = config.maxReplicas;
    this._minReplicas = config.minReplicas;
    this._scaleDownSelectPolicy = config.scaleDownSelectPolicy;
    this._scaleDownStabilizationWindowSeconds = config.scaleDownStabilizationWindowSeconds;
    this._scaleUpSelectPolicy = config.scaleUpSelectPolicy;
    this._scaleUpStabilizationWindowSeconds = config.scaleUpStabilizationWindowSeconds;
    this._scalingRuleName = config.scalingRuleName;
    this._scalingRuleType = config.scalingRuleType;
    this._metrics.internalValue = config.metrics;
    this._scaleDownPolicies.internalValue = config.scaleDownPolicies;
    this._scaleUpPolicies.internalValue = config.scaleUpPolicies;
    this._triggers.internalValue = config.triggers;
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

  // scale_down_select_policy - computed: true, optional: true, required: false
  private _scaleDownSelectPolicy?: string; 
  public get scaleDownSelectPolicy() {
    return this.getStringAttribute('scale_down_select_policy');
  }
  public set scaleDownSelectPolicy(value: string) {
    this._scaleDownSelectPolicy = value;
  }
  public resetScaleDownSelectPolicy() {
    this._scaleDownSelectPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleDownSelectPolicyInput() {
    return this._scaleDownSelectPolicy;
  }

  // scale_down_stabilization_window_seconds - computed: true, optional: true, required: false
  private _scaleDownStabilizationWindowSeconds?: number; 
  public get scaleDownStabilizationWindowSeconds() {
    return this.getNumberAttribute('scale_down_stabilization_window_seconds');
  }
  public set scaleDownStabilizationWindowSeconds(value: number) {
    this._scaleDownStabilizationWindowSeconds = value;
  }
  public resetScaleDownStabilizationWindowSeconds() {
    this._scaleDownStabilizationWindowSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleDownStabilizationWindowSecondsInput() {
    return this._scaleDownStabilizationWindowSeconds;
  }

  // scale_up_select_policy - computed: true, optional: true, required: false
  private _scaleUpSelectPolicy?: string; 
  public get scaleUpSelectPolicy() {
    return this.getStringAttribute('scale_up_select_policy');
  }
  public set scaleUpSelectPolicy(value: string) {
    this._scaleUpSelectPolicy = value;
  }
  public resetScaleUpSelectPolicy() {
    this._scaleUpSelectPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleUpSelectPolicyInput() {
    return this._scaleUpSelectPolicy;
  }

  // scale_up_stabilization_window_seconds - computed: true, optional: true, required: false
  private _scaleUpStabilizationWindowSeconds?: number; 
  public get scaleUpStabilizationWindowSeconds() {
    return this.getNumberAttribute('scale_up_stabilization_window_seconds');
  }
  public set scaleUpStabilizationWindowSeconds(value: number) {
    this._scaleUpStabilizationWindowSeconds = value;
  }
  public resetScaleUpStabilizationWindowSeconds() {
    this._scaleUpStabilizationWindowSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleUpStabilizationWindowSecondsInput() {
    return this._scaleUpStabilizationWindowSeconds;
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

  // metrics - computed: false, optional: true, required: false
  private _metrics = new ApsarastackEdasK8SApplicationScalingRuleMetricsList(this, "metrics", true);
  public get metrics() {
    return this._metrics;
  }
  public putMetrics(value: ApsarastackEdasK8SApplicationScalingRuleMetrics[] | cdktf.IResolvable) {
    this._metrics.internalValue = value;
  }
  public resetMetrics() {
    this._metrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics.internalValue;
  }

  // scale_down_policies - computed: false, optional: true, required: false
  private _scaleDownPolicies = new ApsarastackEdasK8SApplicationScalingRuleScaleDownPoliciesList(this, "scale_down_policies", true);
  public get scaleDownPolicies() {
    return this._scaleDownPolicies;
  }
  public putScaleDownPolicies(value: ApsarastackEdasK8SApplicationScalingRuleScaleDownPolicies[] | cdktf.IResolvable) {
    this._scaleDownPolicies.internalValue = value;
  }
  public resetScaleDownPolicies() {
    this._scaleDownPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleDownPoliciesInput() {
    return this._scaleDownPolicies.internalValue;
  }

  // scale_up_policies - computed: false, optional: true, required: false
  private _scaleUpPolicies = new ApsarastackEdasK8SApplicationScalingRuleScaleUpPoliciesList(this, "scale_up_policies", true);
  public get scaleUpPolicies() {
    return this._scaleUpPolicies;
  }
  public putScaleUpPolicies(value: ApsarastackEdasK8SApplicationScalingRuleScaleUpPolicies[] | cdktf.IResolvable) {
    this._scaleUpPolicies.internalValue = value;
  }
  public resetScaleUpPolicies() {
    this._scaleUpPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleUpPoliciesInput() {
    return this._scaleUpPolicies.internalValue;
  }

  // triggers - computed: false, optional: true, required: false
  private _triggers = new ApsarastackEdasK8SApplicationScalingRuleTriggersList(this, "triggers", true);
  public get triggers() {
    return this._triggers;
  }
  public putTriggers(value: ApsarastackEdasK8SApplicationScalingRuleTriggers[] | cdktf.IResolvable) {
    this._triggers.internalValue = value;
  }
  public resetTriggers() {
    this._triggers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggersInput() {
    return this._triggers.internalValue;
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
      scale_down_select_policy: cdktf.stringToTerraform(this._scaleDownSelectPolicy),
      scale_down_stabilization_window_seconds: cdktf.numberToTerraform(this._scaleDownStabilizationWindowSeconds),
      scale_up_select_policy: cdktf.stringToTerraform(this._scaleUpSelectPolicy),
      scale_up_stabilization_window_seconds: cdktf.numberToTerraform(this._scaleUpStabilizationWindowSeconds),
      scaling_rule_name: cdktf.stringToTerraform(this._scalingRuleName),
      scaling_rule_type: cdktf.stringToTerraform(this._scalingRuleType),
      metrics: cdktf.listMapper(apsarastackEdasK8SApplicationScalingRuleMetricsToTerraform, true)(this._metrics.internalValue),
      scale_down_policies: cdktf.listMapper(apsarastackEdasK8SApplicationScalingRuleScaleDownPoliciesToTerraform, true)(this._scaleDownPolicies.internalValue),
      scale_up_policies: cdktf.listMapper(apsarastackEdasK8SApplicationScalingRuleScaleUpPoliciesToTerraform, true)(this._scaleUpPolicies.internalValue),
      triggers: cdktf.listMapper(apsarastackEdasK8SApplicationScalingRuleTriggersToTerraform, true)(this._triggers.internalValue),
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
      scale_down_select_policy: {
        value: cdktf.stringToHclTerraform(this._scaleDownSelectPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scale_down_stabilization_window_seconds: {
        value: cdktf.numberToHclTerraform(this._scaleDownStabilizationWindowSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scale_up_select_policy: {
        value: cdktf.stringToHclTerraform(this._scaleUpSelectPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scale_up_stabilization_window_seconds: {
        value: cdktf.numberToHclTerraform(this._scaleUpStabilizationWindowSeconds),
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
      metrics: {
        value: cdktf.listMapperHcl(apsarastackEdasK8SApplicationScalingRuleMetricsToHclTerraform, true)(this._metrics.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApsarastackEdasK8SApplicationScalingRuleMetricsList",
      },
      scale_down_policies: {
        value: cdktf.listMapperHcl(apsarastackEdasK8SApplicationScalingRuleScaleDownPoliciesToHclTerraform, true)(this._scaleDownPolicies.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApsarastackEdasK8SApplicationScalingRuleScaleDownPoliciesList",
      },
      scale_up_policies: {
        value: cdktf.listMapperHcl(apsarastackEdasK8SApplicationScalingRuleScaleUpPoliciesToHclTerraform, true)(this._scaleUpPolicies.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApsarastackEdasK8SApplicationScalingRuleScaleUpPoliciesList",
      },
      triggers: {
        value: cdktf.listMapperHcl(apsarastackEdasK8SApplicationScalingRuleTriggersToHclTerraform, true)(this._triggers.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApsarastackEdasK8SApplicationScalingRuleTriggersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
