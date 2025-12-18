// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_auto_scaling_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BdsAutoScalingConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_auto_scaling_configuration#bds_instance_id BdsAutoScalingConfiguration#bds_instance_id}
  */
  readonly bdsInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_auto_scaling_configuration#cluster_admin_password BdsAutoScalingConfiguration#cluster_admin_password}
  */
  readonly clusterAdminPassword: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_auto_scaling_configuration#display_name BdsAutoScalingConfiguration#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_auto_scaling_configuration#id BdsAutoScalingConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_auto_scaling_configuration#is_enabled BdsAutoScalingConfiguration#is_enabled}
  */
  readonly isEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_auto_scaling_configuration#node_type BdsAutoScalingConfiguration#node_type}
  */
  readonly nodeType: string;
  /**
  * policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_auto_scaling_configuration#policy BdsAutoScalingConfiguration#policy}
  */
  readonly policy?: BdsAutoScalingConfigurationPolicy;
  /**
  * policy_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_auto_scaling_configuration#policy_details BdsAutoScalingConfiguration#policy_details}
  */
  readonly policyDetails?: BdsAutoScalingConfigurationPolicyDetails;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_auto_scaling_configuration#timeouts BdsAutoScalingConfiguration#timeouts}
  */
  readonly timeouts?: BdsAutoScalingConfigurationTimeouts;
}
export interface BdsAutoScalingConfigurationPolicyRulesMetricThreshold {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_auto_scaling_configuration#duration_in_minutes BdsAutoScalingConfiguration#duration_in_minutes}
  */
  readonly durationInMinutes: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_auto_scaling_configuration#operator BdsAutoScalingConfiguration#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_auto_scaling_configuration#value BdsAutoScalingConfiguration#value}
  */
  readonly value: number;
}

export function bdsAutoScalingConfigurationPolicyRulesMetricThresholdToTerraform(struct?: BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference | BdsAutoScalingConfigurationPolicyRulesMetricThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration_in_minutes: cdktf.numberToTerraform(struct!.durationInMinutes),
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function bdsAutoScalingConfigurationPolicyRulesMetricThresholdToHclTerraform(struct?: BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference | BdsAutoScalingConfigurationPolicyRulesMetricThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.durationInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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

export class BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BdsAutoScalingConfigurationPolicyRulesMetricThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._durationInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.durationInMinutes = this._durationInMinutes;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BdsAutoScalingConfigurationPolicyRulesMetricThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._durationInMinutes = undefined;
      this._operator = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._durationInMinutes = value.durationInMinutes;
      this._operator = value.operator;
      this._value = value.value;
    }
  }

  // duration_in_minutes - computed: false, optional: false, required: true
  private _durationInMinutes?: number; 
  public get durationInMinutes() {
    return this.getNumberAttribute('duration_in_minutes');
  }
  public set durationInMinutes(value: number) {
    this._durationInMinutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInMinutesInput() {
    return this._durationInMinutes;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
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
export interface BdsAutoScalingConfigurationPolicyRulesMetric {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_auto_scaling_configuration#metric_type BdsAutoScalingConfiguration#metric_type}
  */
  readonly metricType: string;
  /**
  * threshold block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_auto_scaling_configuration#threshold BdsAutoScalingConfiguration#threshold}
  */
  readonly threshold: BdsAutoScalingConfigurationPolicyRulesMetricThreshold;
}

export function bdsAutoScalingConfigurationPolicyRulesMetricToTerraform(struct?: BdsAutoScalingConfigurationPolicyRulesMetricOutputReference | BdsAutoScalingConfigurationPolicyRulesMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_type: cdktf.stringToTerraform(struct!.metricType),
    threshold: bdsAutoScalingConfigurationPolicyRulesMetricThresholdToTerraform(struct!.threshold),
  }
}


export function bdsAutoScalingConfigurationPolicyRulesMetricToHclTerraform(struct?: BdsAutoScalingConfigurationPolicyRulesMetricOutputReference | BdsAutoScalingConfigurationPolicyRulesMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_type: {
      value: cdktf.stringToHclTerraform(struct!.metricType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: bdsAutoScalingConfigurationPolicyRulesMetricThresholdToHclTerraform(struct!.threshold),
      isBlock: true,
      type: "list",
      storageClassType: "BdsAutoScalingConfigurationPolicyRulesMetricThresholdList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BdsAutoScalingConfigurationPolicyRulesMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BdsAutoScalingConfigurationPolicyRulesMetric | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricType !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricType = this._metricType;
    }
    if (this._threshold?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BdsAutoScalingConfigurationPolicyRulesMetric | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricType = undefined;
      this._threshold.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricType = value.metricType;
      this._threshold.internalValue = value.threshold;
    }
  }

  // metric_type - computed: false, optional: false, required: true
  private _metricType?: string; 
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }
  public set metricType(value: string) {
    this._metricType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTypeInput() {
    return this._metricType;
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold = new BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference(this, "threshold");
  public get threshold() {
    return this._threshold;
  }
  public putThreshold(value: BdsAutoScalingConfigurationPolicyRulesMetricThreshold) {
    this._threshold.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold.internalValue;
  }
}
export interface BdsAutoScalingConfigurationPolicyRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_auto_scaling_configuration#action BdsAutoScalingConfiguration#action}
  */
  readonly action: string;
  /**
  * metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_auto_scaling_configuration#metric BdsAutoScalingConfiguration#metric}
  */
  readonly metric: BdsAutoScalingConfigurationPolicyRulesMetric;
}

export function bdsAutoScalingConfigurationPolicyRulesToTerraform(struct?: BdsAutoScalingConfigurationPolicyRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    metric: bdsAutoScalingConfigurationPolicyRulesMetricToTerraform(struct!.metric),
  }
}


export function bdsAutoScalingConfigurationPolicyRulesToHclTerraform(struct?: BdsAutoScalingConfigurationPolicyRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric: {
      value: bdsAutoScalingConfigurationPolicyRulesMetricToHclTerraform(struct!.metric),
      isBlock: true,
      type: "list",
      storageClassType: "BdsAutoScalingConfigurationPolicyRulesMetricList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BdsAutoScalingConfigurationPolicyRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BdsAutoScalingConfigurationPolicyRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._metric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BdsAutoScalingConfigurationPolicyRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._metric.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._metric.internalValue = value.metric;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // metric - computed: false, optional: false, required: true
  private _metric = new BdsAutoScalingConfigurationPolicyRulesMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }
  public putMetric(value: BdsAutoScalingConfigurationPolicyRulesMetric) {
    this._metric.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }
}

export class BdsAutoScalingConfigurationPolicyRulesList extends cdktf.ComplexList {
  public internalValue? : BdsAutoScalingConfigurationPolicyRules[] | cdktf.IResolvable

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
  public get(index: number): BdsAutoScalingConfigurationPolicyRulesOutputReference {
    return new BdsAutoScalingConfigurationPolicyRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BdsAutoScalingConfigurationPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_auto_scaling_configuration#policy_type BdsAutoScalingConfiguration#policy_type}
  */
  readonly policyType: string;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_auto_scaling_configuration#rules BdsAutoScalingConfiguration#rules}
  */
  readonly rules: BdsAutoScalingConfigurationPolicyRules[] | cdktf.IResolvable;
}

export function bdsAutoScalingConfigurationPolicyToTerraform(struct?: BdsAutoScalingConfigurationPolicyOutputReference | BdsAutoScalingConfigurationPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy_type: cdktf.stringToTerraform(struct!.policyType),
    rules: cdktf.listMapper(bdsAutoScalingConfigurationPolicyRulesToTerraform, true)(struct!.rules),
  }
}


export function bdsAutoScalingConfigurationPolicyToHclTerraform(struct?: BdsAutoScalingConfigurationPolicyOutputReference | BdsAutoScalingConfigurationPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policy_type: {
      value: cdktf.stringToHclTerraform(struct!.policyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rules: {
      value: cdktf.listMapperHcl(bdsAutoScalingConfigurationPolicyRulesToHclTerraform, true)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "BdsAutoScalingConfigurationPolicyRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BdsAutoScalingConfigurationPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BdsAutoScalingConfigurationPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyType = this._policyType;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BdsAutoScalingConfigurationPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._policyType = undefined;
      this._rules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._policyType = value.policyType;
      this._rules.internalValue = value.rules;
    }
  }

  // policy_type - computed: false, optional: false, required: true
  private _policyType?: string; 
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }
  public set policyType(value: string) {
    this._policyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTypeInput() {
    return this._policyType;
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new BdsAutoScalingConfigurationPolicyRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: BdsAutoScalingConfigurationPolicyRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}
export interface BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_auto_scaling_configuration#duration_in_minutes BdsAutoScalingConfiguration#duration_in_minutes}
  */
  readonly durationInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_auto_scaling_configuration#operator BdsAutoScalingConfiguration#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_auto_scaling_configuration#value BdsAutoScalingConfiguration#value}
  */
  readonly value?: number;
}

export function bdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdToTerraform(struct?: BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference | BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration_in_minutes: cdktf.numberToTerraform(struct!.durationInMinutes),
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function bdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdToHclTerraform(struct?: BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference | BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.durationInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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

export class BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._durationInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.durationInMinutes = this._durationInMinutes;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._durationInMinutes = undefined;
      this._operator = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._durationInMinutes = value.durationInMinutes;
      this._operator = value.operator;
      this._value = value.value;
    }
  }

  // duration_in_minutes - computed: true, optional: true, required: false
  private _durationInMinutes?: number; 
  public get durationInMinutes() {
    return this.getNumberAttribute('duration_in_minutes');
  }
  public set durationInMinutes(value: number) {
    this._durationInMinutes = value;
  }
  public resetDurationInMinutes() {
    this._durationInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInMinutesInput() {
    return this._durationInMinutes;
  }

  // operator - computed: true, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // value - computed: true, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_auto_scaling_configuration#metric_type BdsAutoScalingConfiguration#metric_type}
  */
  readonly metricType?: string;
  /**
  * threshold block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_auto_scaling_configuration#threshold BdsAutoScalingConfiguration#threshold}
  */
  readonly threshold?: BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold;
}

export function bdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricToTerraform(struct?: BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference | BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_type: cdktf.stringToTerraform(struct!.metricType),
    threshold: bdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdToTerraform(struct!.threshold),
  }
}


export function bdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricToHclTerraform(struct?: BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference | BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_type: {
      value: cdktf.stringToHclTerraform(struct!.metricType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: bdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdToHclTerraform(struct!.threshold),
      isBlock: true,
      type: "list",
      storageClassType: "BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricType !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricType = this._metricType;
    }
    if (this._threshold?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricType = undefined;
      this._threshold.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricType = value.metricType;
      this._threshold.internalValue = value.threshold;
    }
  }

  // metric_type - computed: true, optional: true, required: false
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

  // threshold - computed: false, optional: true, required: false
  private _threshold = new BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference(this, "threshold");
  public get threshold() {
    return this._threshold;
  }
  public putThreshold(value: BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold) {
    this._threshold.internalValue = value;
  }
  public resetThreshold() {
    this._threshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold.internalValue;
  }
}
export interface BdsAutoScalingConfigurationPolicyDetailsScaleDownConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_auto_scaling_configuration#memory_step_size BdsAutoScalingConfiguration#memory_step_size}
  */
  readonly memoryStepSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_auto_scaling_configuration#min_memory_per_node BdsAutoScalingConfiguration#min_memory_per_node}
  */
  readonly minMemoryPerNode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_auto_scaling_configuration#min_ocpus_per_node BdsAutoScalingConfiguration#min_ocpus_per_node}
  */
  readonly minOcpusPerNode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_auto_scaling_configuration#ocpu_step_size BdsAutoScalingConfiguration#ocpu_step_size}
  */
  readonly ocpuStepSize?: number;
  /**
  * metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_auto_scaling_configuration#metric BdsAutoScalingConfiguration#metric}
  */
  readonly metric?: BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric;
}

export function bdsAutoScalingConfigurationPolicyDetailsScaleDownConfigToTerraform(struct?: BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference | BdsAutoScalingConfigurationPolicyDetailsScaleDownConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    memory_step_size: cdktf.numberToTerraform(struct!.memoryStepSize),
    min_memory_per_node: cdktf.numberToTerraform(struct!.minMemoryPerNode),
    min_ocpus_per_node: cdktf.numberToTerraform(struct!.minOcpusPerNode),
    ocpu_step_size: cdktf.numberToTerraform(struct!.ocpuStepSize),
    metric: bdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricToTerraform(struct!.metric),
  }
}


export function bdsAutoScalingConfigurationPolicyDetailsScaleDownConfigToHclTerraform(struct?: BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference | BdsAutoScalingConfigurationPolicyDetailsScaleDownConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    memory_step_size: {
      value: cdktf.numberToHclTerraform(struct!.memoryStepSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_memory_per_node: {
      value: cdktf.numberToHclTerraform(struct!.minMemoryPerNode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_ocpus_per_node: {
      value: cdktf.numberToHclTerraform(struct!.minOcpusPerNode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ocpu_step_size: {
      value: cdktf.numberToHclTerraform(struct!.ocpuStepSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric: {
      value: bdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricToHclTerraform(struct!.metric),
      isBlock: true,
      type: "list",
      storageClassType: "BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BdsAutoScalingConfigurationPolicyDetailsScaleDownConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._memoryStepSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryStepSize = this._memoryStepSize;
    }
    if (this._minMemoryPerNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.minMemoryPerNode = this._minMemoryPerNode;
    }
    if (this._minOcpusPerNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.minOcpusPerNode = this._minOcpusPerNode;
    }
    if (this._ocpuStepSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocpuStepSize = this._ocpuStepSize;
    }
    if (this._metric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BdsAutoScalingConfigurationPolicyDetailsScaleDownConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._memoryStepSize = undefined;
      this._minMemoryPerNode = undefined;
      this._minOcpusPerNode = undefined;
      this._ocpuStepSize = undefined;
      this._metric.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._memoryStepSize = value.memoryStepSize;
      this._minMemoryPerNode = value.minMemoryPerNode;
      this._minOcpusPerNode = value.minOcpusPerNode;
      this._ocpuStepSize = value.ocpuStepSize;
      this._metric.internalValue = value.metric;
    }
  }

  // memory_step_size - computed: true, optional: true, required: false
  private _memoryStepSize?: number; 
  public get memoryStepSize() {
    return this.getNumberAttribute('memory_step_size');
  }
  public set memoryStepSize(value: number) {
    this._memoryStepSize = value;
  }
  public resetMemoryStepSize() {
    this._memoryStepSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryStepSizeInput() {
    return this._memoryStepSize;
  }

  // min_memory_per_node - computed: true, optional: true, required: false
  private _minMemoryPerNode?: number; 
  public get minMemoryPerNode() {
    return this.getNumberAttribute('min_memory_per_node');
  }
  public set minMemoryPerNode(value: number) {
    this._minMemoryPerNode = value;
  }
  public resetMinMemoryPerNode() {
    this._minMemoryPerNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minMemoryPerNodeInput() {
    return this._minMemoryPerNode;
  }

  // min_ocpus_per_node - computed: true, optional: true, required: false
  private _minOcpusPerNode?: number; 
  public get minOcpusPerNode() {
    return this.getNumberAttribute('min_ocpus_per_node');
  }
  public set minOcpusPerNode(value: number) {
    this._minOcpusPerNode = value;
  }
  public resetMinOcpusPerNode() {
    this._minOcpusPerNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minOcpusPerNodeInput() {
    return this._minOcpusPerNode;
  }

  // ocpu_step_size - computed: true, optional: true, required: false
  private _ocpuStepSize?: number; 
  public get ocpuStepSize() {
    return this.getNumberAttribute('ocpu_step_size');
  }
  public set ocpuStepSize(value: number) {
    this._ocpuStepSize = value;
  }
  public resetOcpuStepSize() {
    this._ocpuStepSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocpuStepSizeInput() {
    return this._ocpuStepSize;
  }

  // metric - computed: false, optional: true, required: false
  private _metric = new BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }
  public putMetric(value: BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric) {
    this._metric.internalValue = value;
  }
  public resetMetric() {
    this._metric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }
}
export interface BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_auto_scaling_configuration#duration_in_minutes BdsAutoScalingConfiguration#duration_in_minutes}
  */
  readonly durationInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_auto_scaling_configuration#operator BdsAutoScalingConfiguration#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_auto_scaling_configuration#value BdsAutoScalingConfiguration#value}
  */
  readonly value?: number;
}

export function bdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdToTerraform(struct?: BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference | BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration_in_minutes: cdktf.numberToTerraform(struct!.durationInMinutes),
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function bdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdToHclTerraform(struct?: BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference | BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.durationInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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

export class BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._durationInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.durationInMinutes = this._durationInMinutes;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._durationInMinutes = undefined;
      this._operator = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._durationInMinutes = value.durationInMinutes;
      this._operator = value.operator;
      this._value = value.value;
    }
  }

  // duration_in_minutes - computed: true, optional: true, required: false
  private _durationInMinutes?: number; 
  public get durationInMinutes() {
    return this.getNumberAttribute('duration_in_minutes');
  }
  public set durationInMinutes(value: number) {
    this._durationInMinutes = value;
  }
  public resetDurationInMinutes() {
    this._durationInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInMinutesInput() {
    return this._durationInMinutes;
  }

  // operator - computed: true, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // value - computed: true, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_auto_scaling_configuration#metric_type BdsAutoScalingConfiguration#metric_type}
  */
  readonly metricType?: string;
  /**
  * threshold block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_auto_scaling_configuration#threshold BdsAutoScalingConfiguration#threshold}
  */
  readonly threshold?: BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold;
}

export function bdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricToTerraform(struct?: BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference | BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_type: cdktf.stringToTerraform(struct!.metricType),
    threshold: bdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdToTerraform(struct!.threshold),
  }
}


export function bdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricToHclTerraform(struct?: BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference | BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_type: {
      value: cdktf.stringToHclTerraform(struct!.metricType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: bdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdToHclTerraform(struct!.threshold),
      isBlock: true,
      type: "list",
      storageClassType: "BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricType !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricType = this._metricType;
    }
    if (this._threshold?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricType = undefined;
      this._threshold.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricType = value.metricType;
      this._threshold.internalValue = value.threshold;
    }
  }

  // metric_type - computed: true, optional: true, required: false
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

  // threshold - computed: false, optional: true, required: false
  private _threshold = new BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference(this, "threshold");
  public get threshold() {
    return this._threshold;
  }
  public putThreshold(value: BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold) {
    this._threshold.internalValue = value;
  }
  public resetThreshold() {
    this._threshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold.internalValue;
  }
}
export interface BdsAutoScalingConfigurationPolicyDetailsScaleInConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_auto_scaling_configuration#min_node_count BdsAutoScalingConfiguration#min_node_count}
  */
  readonly minNodeCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_auto_scaling_configuration#step_size BdsAutoScalingConfiguration#step_size}
  */
  readonly stepSize?: number;
  /**
  * metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_auto_scaling_configuration#metric BdsAutoScalingConfiguration#metric}
  */
  readonly metric?: BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric;
}

export function bdsAutoScalingConfigurationPolicyDetailsScaleInConfigToTerraform(struct?: BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference | BdsAutoScalingConfigurationPolicyDetailsScaleInConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    min_node_count: cdktf.numberToTerraform(struct!.minNodeCount),
    step_size: cdktf.numberToTerraform(struct!.stepSize),
    metric: bdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricToTerraform(struct!.metric),
  }
}


export function bdsAutoScalingConfigurationPolicyDetailsScaleInConfigToHclTerraform(struct?: BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference | BdsAutoScalingConfigurationPolicyDetailsScaleInConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    min_node_count: {
      value: cdktf.numberToHclTerraform(struct!.minNodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    step_size: {
      value: cdktf.numberToHclTerraform(struct!.stepSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric: {
      value: bdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricToHclTerraform(struct!.metric),
      isBlock: true,
      type: "list",
      storageClassType: "BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BdsAutoScalingConfigurationPolicyDetailsScaleInConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minNodeCount = this._minNodeCount;
    }
    if (this._stepSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.stepSize = this._stepSize;
    }
    if (this._metric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BdsAutoScalingConfigurationPolicyDetailsScaleInConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._minNodeCount = undefined;
      this._stepSize = undefined;
      this._metric.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._minNodeCount = value.minNodeCount;
      this._stepSize = value.stepSize;
      this._metric.internalValue = value.metric;
    }
  }

  // min_node_count - computed: true, optional: true, required: false
  private _minNodeCount?: number; 
  public get minNodeCount() {
    return this.getNumberAttribute('min_node_count');
  }
  public set minNodeCount(value: number) {
    this._minNodeCount = value;
  }
  public resetMinNodeCount() {
    this._minNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minNodeCountInput() {
    return this._minNodeCount;
  }

  // step_size - computed: true, optional: true, required: false
  private _stepSize?: number; 
  public get stepSize() {
    return this.getNumberAttribute('step_size');
  }
  public set stepSize(value: number) {
    this._stepSize = value;
  }
  public resetStepSize() {
    this._stepSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepSizeInput() {
    return this._stepSize;
  }

  // metric - computed: false, optional: true, required: false
  private _metric = new BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }
  public putMetric(value: BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric) {
    this._metric.internalValue = value;
  }
  public resetMetric() {
    this._metric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }
}
export interface BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_auto_scaling_configuration#duration_in_minutes BdsAutoScalingConfiguration#duration_in_minutes}
  */
  readonly durationInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_auto_scaling_configuration#operator BdsAutoScalingConfiguration#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_auto_scaling_configuration#value BdsAutoScalingConfiguration#value}
  */
  readonly value?: number;
}

export function bdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdToTerraform(struct?: BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference | BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration_in_minutes: cdktf.numberToTerraform(struct!.durationInMinutes),
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function bdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdToHclTerraform(struct?: BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference | BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.durationInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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

export class BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._durationInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.durationInMinutes = this._durationInMinutes;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._durationInMinutes = undefined;
      this._operator = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._durationInMinutes = value.durationInMinutes;
      this._operator = value.operator;
      this._value = value.value;
    }
  }

  // duration_in_minutes - computed: true, optional: true, required: false
  private _durationInMinutes?: number; 
  public get durationInMinutes() {
    return this.getNumberAttribute('duration_in_minutes');
  }
  public set durationInMinutes(value: number) {
    this._durationInMinutes = value;
  }
  public resetDurationInMinutes() {
    this._durationInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInMinutesInput() {
    return this._durationInMinutes;
  }

  // operator - computed: true, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // value - computed: true, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_auto_scaling_configuration#metric_type BdsAutoScalingConfiguration#metric_type}
  */
  readonly metricType?: string;
  /**
  * threshold block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_auto_scaling_configuration#threshold BdsAutoScalingConfiguration#threshold}
  */
  readonly threshold?: BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold;
}

export function bdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricToTerraform(struct?: BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference | BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_type: cdktf.stringToTerraform(struct!.metricType),
    threshold: bdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdToTerraform(struct!.threshold),
  }
}


export function bdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricToHclTerraform(struct?: BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference | BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_type: {
      value: cdktf.stringToHclTerraform(struct!.metricType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: bdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdToHclTerraform(struct!.threshold),
      isBlock: true,
      type: "list",
      storageClassType: "BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricType !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricType = this._metricType;
    }
    if (this._threshold?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricType = undefined;
      this._threshold.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricType = value.metricType;
      this._threshold.internalValue = value.threshold;
    }
  }

  // metric_type - computed: true, optional: true, required: false
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

  // threshold - computed: false, optional: true, required: false
  private _threshold = new BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference(this, "threshold");
  public get threshold() {
    return this._threshold;
  }
  public putThreshold(value: BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold) {
    this._threshold.internalValue = value;
  }
  public resetThreshold() {
    this._threshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold.internalValue;
  }
}
export interface BdsAutoScalingConfigurationPolicyDetailsScaleOutConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_auto_scaling_configuration#max_node_count BdsAutoScalingConfiguration#max_node_count}
  */
  readonly maxNodeCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_auto_scaling_configuration#step_size BdsAutoScalingConfiguration#step_size}
  */
  readonly stepSize?: number;
  /**
  * metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_auto_scaling_configuration#metric BdsAutoScalingConfiguration#metric}
  */
  readonly metric?: BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric;
}

export function bdsAutoScalingConfigurationPolicyDetailsScaleOutConfigToTerraform(struct?: BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference | BdsAutoScalingConfigurationPolicyDetailsScaleOutConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_node_count: cdktf.numberToTerraform(struct!.maxNodeCount),
    step_size: cdktf.numberToTerraform(struct!.stepSize),
    metric: bdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricToTerraform(struct!.metric),
  }
}


export function bdsAutoScalingConfigurationPolicyDetailsScaleOutConfigToHclTerraform(struct?: BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference | BdsAutoScalingConfigurationPolicyDetailsScaleOutConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_node_count: {
      value: cdktf.numberToHclTerraform(struct!.maxNodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    step_size: {
      value: cdktf.numberToHclTerraform(struct!.stepSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric: {
      value: bdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricToHclTerraform(struct!.metric),
      isBlock: true,
      type: "list",
      storageClassType: "BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BdsAutoScalingConfigurationPolicyDetailsScaleOutConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNodeCount = this._maxNodeCount;
    }
    if (this._stepSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.stepSize = this._stepSize;
    }
    if (this._metric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BdsAutoScalingConfigurationPolicyDetailsScaleOutConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxNodeCount = undefined;
      this._stepSize = undefined;
      this._metric.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxNodeCount = value.maxNodeCount;
      this._stepSize = value.stepSize;
      this._metric.internalValue = value.metric;
    }
  }

  // max_node_count - computed: true, optional: true, required: false
  private _maxNodeCount?: number; 
  public get maxNodeCount() {
    return this.getNumberAttribute('max_node_count');
  }
  public set maxNodeCount(value: number) {
    this._maxNodeCount = value;
  }
  public resetMaxNodeCount() {
    this._maxNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNodeCountInput() {
    return this._maxNodeCount;
  }

  // step_size - computed: true, optional: true, required: false
  private _stepSize?: number; 
  public get stepSize() {
    return this.getNumberAttribute('step_size');
  }
  public set stepSize(value: number) {
    this._stepSize = value;
  }
  public resetStepSize() {
    this._stepSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepSizeInput() {
    return this._stepSize;
  }

  // metric - computed: false, optional: true, required: false
  private _metric = new BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }
  public putMetric(value: BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric) {
    this._metric.internalValue = value;
  }
  public resetMetric() {
    this._metric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }
}
export interface BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_auto_scaling_configuration#duration_in_minutes BdsAutoScalingConfiguration#duration_in_minutes}
  */
  readonly durationInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_auto_scaling_configuration#operator BdsAutoScalingConfiguration#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_auto_scaling_configuration#value BdsAutoScalingConfiguration#value}
  */
  readonly value?: number;
}

export function bdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdToTerraform(struct?: BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference | BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration_in_minutes: cdktf.numberToTerraform(struct!.durationInMinutes),
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function bdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdToHclTerraform(struct?: BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference | BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.durationInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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

export class BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._durationInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.durationInMinutes = this._durationInMinutes;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._durationInMinutes = undefined;
      this._operator = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._durationInMinutes = value.durationInMinutes;
      this._operator = value.operator;
      this._value = value.value;
    }
  }

  // duration_in_minutes - computed: true, optional: true, required: false
  private _durationInMinutes?: number; 
  public get durationInMinutes() {
    return this.getNumberAttribute('duration_in_minutes');
  }
  public set durationInMinutes(value: number) {
    this._durationInMinutes = value;
  }
  public resetDurationInMinutes() {
    this._durationInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInMinutesInput() {
    return this._durationInMinutes;
  }

  // operator - computed: true, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // value - computed: true, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_auto_scaling_configuration#metric_type BdsAutoScalingConfiguration#metric_type}
  */
  readonly metricType?: string;
  /**
  * threshold block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_auto_scaling_configuration#threshold BdsAutoScalingConfiguration#threshold}
  */
  readonly threshold?: BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold;
}

export function bdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricToTerraform(struct?: BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference | BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_type: cdktf.stringToTerraform(struct!.metricType),
    threshold: bdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdToTerraform(struct!.threshold),
  }
}


export function bdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricToHclTerraform(struct?: BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference | BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_type: {
      value: cdktf.stringToHclTerraform(struct!.metricType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: bdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdToHclTerraform(struct!.threshold),
      isBlock: true,
      type: "list",
      storageClassType: "BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricType !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricType = this._metricType;
    }
    if (this._threshold?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricType = undefined;
      this._threshold.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricType = value.metricType;
      this._threshold.internalValue = value.threshold;
    }
  }

  // metric_type - computed: true, optional: true, required: false
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

  // threshold - computed: false, optional: true, required: false
  private _threshold = new BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference(this, "threshold");
  public get threshold() {
    return this._threshold;
  }
  public putThreshold(value: BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold) {
    this._threshold.internalValue = value;
  }
  public resetThreshold() {
    this._threshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold.internalValue;
  }
}
export interface BdsAutoScalingConfigurationPolicyDetailsScaleUpConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_auto_scaling_configuration#max_memory_per_node BdsAutoScalingConfiguration#max_memory_per_node}
  */
  readonly maxMemoryPerNode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_auto_scaling_configuration#max_ocpus_per_node BdsAutoScalingConfiguration#max_ocpus_per_node}
  */
  readonly maxOcpusPerNode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_auto_scaling_configuration#memory_step_size BdsAutoScalingConfiguration#memory_step_size}
  */
  readonly memoryStepSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_auto_scaling_configuration#ocpu_step_size BdsAutoScalingConfiguration#ocpu_step_size}
  */
  readonly ocpuStepSize?: number;
  /**
  * metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_auto_scaling_configuration#metric BdsAutoScalingConfiguration#metric}
  */
  readonly metric?: BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric;
}

export function bdsAutoScalingConfigurationPolicyDetailsScaleUpConfigToTerraform(struct?: BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference | BdsAutoScalingConfigurationPolicyDetailsScaleUpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_memory_per_node: cdktf.numberToTerraform(struct!.maxMemoryPerNode),
    max_ocpus_per_node: cdktf.numberToTerraform(struct!.maxOcpusPerNode),
    memory_step_size: cdktf.numberToTerraform(struct!.memoryStepSize),
    ocpu_step_size: cdktf.numberToTerraform(struct!.ocpuStepSize),
    metric: bdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricToTerraform(struct!.metric),
  }
}


export function bdsAutoScalingConfigurationPolicyDetailsScaleUpConfigToHclTerraform(struct?: BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference | BdsAutoScalingConfigurationPolicyDetailsScaleUpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_memory_per_node: {
      value: cdktf.numberToHclTerraform(struct!.maxMemoryPerNode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_ocpus_per_node: {
      value: cdktf.numberToHclTerraform(struct!.maxOcpusPerNode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory_step_size: {
      value: cdktf.numberToHclTerraform(struct!.memoryStepSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ocpu_step_size: {
      value: cdktf.numberToHclTerraform(struct!.ocpuStepSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric: {
      value: bdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricToHclTerraform(struct!.metric),
      isBlock: true,
      type: "list",
      storageClassType: "BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BdsAutoScalingConfigurationPolicyDetailsScaleUpConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxMemoryPerNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxMemoryPerNode = this._maxMemoryPerNode;
    }
    if (this._maxOcpusPerNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxOcpusPerNode = this._maxOcpusPerNode;
    }
    if (this._memoryStepSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryStepSize = this._memoryStepSize;
    }
    if (this._ocpuStepSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocpuStepSize = this._ocpuStepSize;
    }
    if (this._metric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BdsAutoScalingConfigurationPolicyDetailsScaleUpConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxMemoryPerNode = undefined;
      this._maxOcpusPerNode = undefined;
      this._memoryStepSize = undefined;
      this._ocpuStepSize = undefined;
      this._metric.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxMemoryPerNode = value.maxMemoryPerNode;
      this._maxOcpusPerNode = value.maxOcpusPerNode;
      this._memoryStepSize = value.memoryStepSize;
      this._ocpuStepSize = value.ocpuStepSize;
      this._metric.internalValue = value.metric;
    }
  }

  // max_memory_per_node - computed: true, optional: true, required: false
  private _maxMemoryPerNode?: number; 
  public get maxMemoryPerNode() {
    return this.getNumberAttribute('max_memory_per_node');
  }
  public set maxMemoryPerNode(value: number) {
    this._maxMemoryPerNode = value;
  }
  public resetMaxMemoryPerNode() {
    this._maxMemoryPerNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMemoryPerNodeInput() {
    return this._maxMemoryPerNode;
  }

  // max_ocpus_per_node - computed: true, optional: true, required: false
  private _maxOcpusPerNode?: number; 
  public get maxOcpusPerNode() {
    return this.getNumberAttribute('max_ocpus_per_node');
  }
  public set maxOcpusPerNode(value: number) {
    this._maxOcpusPerNode = value;
  }
  public resetMaxOcpusPerNode() {
    this._maxOcpusPerNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxOcpusPerNodeInput() {
    return this._maxOcpusPerNode;
  }

  // memory_step_size - computed: true, optional: true, required: false
  private _memoryStepSize?: number; 
  public get memoryStepSize() {
    return this.getNumberAttribute('memory_step_size');
  }
  public set memoryStepSize(value: number) {
    this._memoryStepSize = value;
  }
  public resetMemoryStepSize() {
    this._memoryStepSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryStepSizeInput() {
    return this._memoryStepSize;
  }

  // ocpu_step_size - computed: true, optional: true, required: false
  private _ocpuStepSize?: number; 
  public get ocpuStepSize() {
    return this.getNumberAttribute('ocpu_step_size');
  }
  public set ocpuStepSize(value: number) {
    this._ocpuStepSize = value;
  }
  public resetOcpuStepSize() {
    this._ocpuStepSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocpuStepSizeInput() {
    return this._ocpuStepSize;
  }

  // metric - computed: false, optional: true, required: false
  private _metric = new BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }
  public putMetric(value: BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric) {
    this._metric.internalValue = value;
  }
  public resetMetric() {
    this._metric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }
}
export interface BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_auto_scaling_configuration#target_node_count BdsAutoScalingConfiguration#target_node_count}
  */
  readonly targetNodeCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_auto_scaling_configuration#time_recurrence BdsAutoScalingConfiguration#time_recurrence}
  */
  readonly timeRecurrence?: string;
}

export function bdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigToTerraform(struct?: BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_node_count: cdktf.numberToTerraform(struct!.targetNodeCount),
    time_recurrence: cdktf.stringToTerraform(struct!.timeRecurrence),
  }
}


export function bdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigToHclTerraform(struct?: BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target_node_count: {
      value: cdktf.numberToHclTerraform(struct!.targetNodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_recurrence: {
      value: cdktf.stringToHclTerraform(struct!.timeRecurrence),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetNodeCount = this._targetNodeCount;
    }
    if (this._timeRecurrence !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeRecurrence = this._timeRecurrence;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._targetNodeCount = undefined;
      this._timeRecurrence = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._targetNodeCount = value.targetNodeCount;
      this._timeRecurrence = value.timeRecurrence;
    }
  }

  // target_node_count - computed: true, optional: true, required: false
  private _targetNodeCount?: number; 
  public get targetNodeCount() {
    return this.getNumberAttribute('target_node_count');
  }
  public set targetNodeCount(value: number) {
    this._targetNodeCount = value;
  }
  public resetTargetNodeCount() {
    this._targetNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNodeCountInput() {
    return this._targetNodeCount;
  }

  // time_recurrence - computed: true, optional: true, required: false
  private _timeRecurrence?: string; 
  public get timeRecurrence() {
    return this.getStringAttribute('time_recurrence');
  }
  public set timeRecurrence(value: string) {
    this._timeRecurrence = value;
  }
  public resetTimeRecurrence() {
    this._timeRecurrence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeRecurrenceInput() {
    return this._timeRecurrence;
  }
}

export class BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList extends cdktf.ComplexList {
  public internalValue? : BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig[] | cdktf.IResolvable

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
  public get(index: number): BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference {
    return new BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_auto_scaling_configuration#target_memory_per_node BdsAutoScalingConfiguration#target_memory_per_node}
  */
  readonly targetMemoryPerNode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_auto_scaling_configuration#target_ocpus_per_node BdsAutoScalingConfiguration#target_ocpus_per_node}
  */
  readonly targetOcpusPerNode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_auto_scaling_configuration#target_shape BdsAutoScalingConfiguration#target_shape}
  */
  readonly targetShape?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_auto_scaling_configuration#time_recurrence BdsAutoScalingConfiguration#time_recurrence}
  */
  readonly timeRecurrence?: string;
}

export function bdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigToTerraform(struct?: BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_memory_per_node: cdktf.numberToTerraform(struct!.targetMemoryPerNode),
    target_ocpus_per_node: cdktf.numberToTerraform(struct!.targetOcpusPerNode),
    target_shape: cdktf.stringToTerraform(struct!.targetShape),
    time_recurrence: cdktf.stringToTerraform(struct!.timeRecurrence),
  }
}


export function bdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigToHclTerraform(struct?: BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target_memory_per_node: {
      value: cdktf.numberToHclTerraform(struct!.targetMemoryPerNode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_ocpus_per_node: {
      value: cdktf.numberToHclTerraform(struct!.targetOcpusPerNode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_shape: {
      value: cdktf.stringToHclTerraform(struct!.targetShape),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_recurrence: {
      value: cdktf.stringToHclTerraform(struct!.timeRecurrence),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetMemoryPerNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetMemoryPerNode = this._targetMemoryPerNode;
    }
    if (this._targetOcpusPerNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetOcpusPerNode = this._targetOcpusPerNode;
    }
    if (this._targetShape !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetShape = this._targetShape;
    }
    if (this._timeRecurrence !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeRecurrence = this._timeRecurrence;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._targetMemoryPerNode = undefined;
      this._targetOcpusPerNode = undefined;
      this._targetShape = undefined;
      this._timeRecurrence = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._targetMemoryPerNode = value.targetMemoryPerNode;
      this._targetOcpusPerNode = value.targetOcpusPerNode;
      this._targetShape = value.targetShape;
      this._timeRecurrence = value.timeRecurrence;
    }
  }

  // target_memory_per_node - computed: true, optional: true, required: false
  private _targetMemoryPerNode?: number; 
  public get targetMemoryPerNode() {
    return this.getNumberAttribute('target_memory_per_node');
  }
  public set targetMemoryPerNode(value: number) {
    this._targetMemoryPerNode = value;
  }
  public resetTargetMemoryPerNode() {
    this._targetMemoryPerNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetMemoryPerNodeInput() {
    return this._targetMemoryPerNode;
  }

  // target_ocpus_per_node - computed: true, optional: true, required: false
  private _targetOcpusPerNode?: number; 
  public get targetOcpusPerNode() {
    return this.getNumberAttribute('target_ocpus_per_node');
  }
  public set targetOcpusPerNode(value: number) {
    this._targetOcpusPerNode = value;
  }
  public resetTargetOcpusPerNode() {
    this._targetOcpusPerNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetOcpusPerNodeInput() {
    return this._targetOcpusPerNode;
  }

  // target_shape - computed: true, optional: true, required: false
  private _targetShape?: string; 
  public get targetShape() {
    return this.getStringAttribute('target_shape');
  }
  public set targetShape(value: string) {
    this._targetShape = value;
  }
  public resetTargetShape() {
    this._targetShape = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetShapeInput() {
    return this._targetShape;
  }

  // time_recurrence - computed: true, optional: true, required: false
  private _timeRecurrence?: string; 
  public get timeRecurrence() {
    return this.getStringAttribute('time_recurrence');
  }
  public set timeRecurrence(value: string) {
    this._timeRecurrence = value;
  }
  public resetTimeRecurrence() {
    this._timeRecurrence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeRecurrenceInput() {
    return this._timeRecurrence;
  }
}

export class BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList extends cdktf.ComplexList {
  public internalValue? : BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig[] | cdktf.IResolvable

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
  public get(index: number): BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference {
    return new BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BdsAutoScalingConfigurationPolicyDetailsScheduleDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_auto_scaling_configuration#schedule_type BdsAutoScalingConfiguration#schedule_type}
  */
  readonly scheduleType?: string;
  /**
  * time_and_horizontal_scaling_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_auto_scaling_configuration#time_and_horizontal_scaling_config BdsAutoScalingConfiguration#time_and_horizontal_scaling_config}
  */
  readonly timeAndHorizontalScalingConfig?: BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig[] | cdktf.IResolvable;
  /**
  * time_and_vertical_scaling_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_auto_scaling_configuration#time_and_vertical_scaling_config BdsAutoScalingConfiguration#time_and_vertical_scaling_config}
  */
  readonly timeAndVerticalScalingConfig?: BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig[] | cdktf.IResolvable;
}

export function bdsAutoScalingConfigurationPolicyDetailsScheduleDetailsToTerraform(struct?: BdsAutoScalingConfigurationPolicyDetailsScheduleDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schedule_type: cdktf.stringToTerraform(struct!.scheduleType),
    time_and_horizontal_scaling_config: cdktf.listMapper(bdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigToTerraform, true)(struct!.timeAndHorizontalScalingConfig),
    time_and_vertical_scaling_config: cdktf.listMapper(bdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigToTerraform, true)(struct!.timeAndVerticalScalingConfig),
  }
}


export function bdsAutoScalingConfigurationPolicyDetailsScheduleDetailsToHclTerraform(struct?: BdsAutoScalingConfigurationPolicyDetailsScheduleDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    schedule_type: {
      value: cdktf.stringToHclTerraform(struct!.scheduleType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_and_horizontal_scaling_config: {
      value: cdktf.listMapperHcl(bdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigToHclTerraform, true)(struct!.timeAndHorizontalScalingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList",
    },
    time_and_vertical_scaling_config: {
      value: cdktf.listMapperHcl(bdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigToHclTerraform, true)(struct!.timeAndVerticalScalingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BdsAutoScalingConfigurationPolicyDetailsScheduleDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scheduleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleType = this._scheduleType;
    }
    if (this._timeAndHorizontalScalingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeAndHorizontalScalingConfig = this._timeAndHorizontalScalingConfig?.internalValue;
    }
    if (this._timeAndVerticalScalingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeAndVerticalScalingConfig = this._timeAndVerticalScalingConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BdsAutoScalingConfigurationPolicyDetailsScheduleDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scheduleType = undefined;
      this._timeAndHorizontalScalingConfig.internalValue = undefined;
      this._timeAndVerticalScalingConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scheduleType = value.scheduleType;
      this._timeAndHorizontalScalingConfig.internalValue = value.timeAndHorizontalScalingConfig;
      this._timeAndVerticalScalingConfig.internalValue = value.timeAndVerticalScalingConfig;
    }
  }

  // schedule_type - computed: true, optional: true, required: false
  private _scheduleType?: string; 
  public get scheduleType() {
    return this.getStringAttribute('schedule_type');
  }
  public set scheduleType(value: string) {
    this._scheduleType = value;
  }
  public resetScheduleType() {
    this._scheduleType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleTypeInput() {
    return this._scheduleType;
  }

  // time_and_horizontal_scaling_config - computed: false, optional: true, required: false
  private _timeAndHorizontalScalingConfig = new BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList(this, "time_and_horizontal_scaling_config", false);
  public get timeAndHorizontalScalingConfig() {
    return this._timeAndHorizontalScalingConfig;
  }
  public putTimeAndHorizontalScalingConfig(value: BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig[] | cdktf.IResolvable) {
    this._timeAndHorizontalScalingConfig.internalValue = value;
  }
  public resetTimeAndHorizontalScalingConfig() {
    this._timeAndHorizontalScalingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeAndHorizontalScalingConfigInput() {
    return this._timeAndHorizontalScalingConfig.internalValue;
  }

  // time_and_vertical_scaling_config - computed: false, optional: true, required: false
  private _timeAndVerticalScalingConfig = new BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList(this, "time_and_vertical_scaling_config", false);
  public get timeAndVerticalScalingConfig() {
    return this._timeAndVerticalScalingConfig;
  }
  public putTimeAndVerticalScalingConfig(value: BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig[] | cdktf.IResolvable) {
    this._timeAndVerticalScalingConfig.internalValue = value;
  }
  public resetTimeAndVerticalScalingConfig() {
    this._timeAndVerticalScalingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeAndVerticalScalingConfigInput() {
    return this._timeAndVerticalScalingConfig.internalValue;
  }
}

export class BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList extends cdktf.ComplexList {
  public internalValue? : BdsAutoScalingConfigurationPolicyDetailsScheduleDetails[] | cdktf.IResolvable

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
  public get(index: number): BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference {
    return new BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BdsAutoScalingConfigurationPolicyDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_auto_scaling_configuration#policy_type BdsAutoScalingConfiguration#policy_type}
  */
  readonly policyType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_auto_scaling_configuration#timezone BdsAutoScalingConfiguration#timezone}
  */
  readonly timezone?: string;
  /**
  * scale_down_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_auto_scaling_configuration#scale_down_config BdsAutoScalingConfiguration#scale_down_config}
  */
  readonly scaleDownConfig?: BdsAutoScalingConfigurationPolicyDetailsScaleDownConfig;
  /**
  * scale_in_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_auto_scaling_configuration#scale_in_config BdsAutoScalingConfiguration#scale_in_config}
  */
  readonly scaleInConfig?: BdsAutoScalingConfigurationPolicyDetailsScaleInConfig;
  /**
  * scale_out_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_auto_scaling_configuration#scale_out_config BdsAutoScalingConfiguration#scale_out_config}
  */
  readonly scaleOutConfig?: BdsAutoScalingConfigurationPolicyDetailsScaleOutConfig;
  /**
  * scale_up_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_auto_scaling_configuration#scale_up_config BdsAutoScalingConfiguration#scale_up_config}
  */
  readonly scaleUpConfig?: BdsAutoScalingConfigurationPolicyDetailsScaleUpConfig;
  /**
  * schedule_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_auto_scaling_configuration#schedule_details BdsAutoScalingConfiguration#schedule_details}
  */
  readonly scheduleDetails?: BdsAutoScalingConfigurationPolicyDetailsScheduleDetails[] | cdktf.IResolvable;
}

export function bdsAutoScalingConfigurationPolicyDetailsToTerraform(struct?: BdsAutoScalingConfigurationPolicyDetailsOutputReference | BdsAutoScalingConfigurationPolicyDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy_type: cdktf.stringToTerraform(struct!.policyType),
    timezone: cdktf.stringToTerraform(struct!.timezone),
    scale_down_config: bdsAutoScalingConfigurationPolicyDetailsScaleDownConfigToTerraform(struct!.scaleDownConfig),
    scale_in_config: bdsAutoScalingConfigurationPolicyDetailsScaleInConfigToTerraform(struct!.scaleInConfig),
    scale_out_config: bdsAutoScalingConfigurationPolicyDetailsScaleOutConfigToTerraform(struct!.scaleOutConfig),
    scale_up_config: bdsAutoScalingConfigurationPolicyDetailsScaleUpConfigToTerraform(struct!.scaleUpConfig),
    schedule_details: cdktf.listMapper(bdsAutoScalingConfigurationPolicyDetailsScheduleDetailsToTerraform, true)(struct!.scheduleDetails),
  }
}


export function bdsAutoScalingConfigurationPolicyDetailsToHclTerraform(struct?: BdsAutoScalingConfigurationPolicyDetailsOutputReference | BdsAutoScalingConfigurationPolicyDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policy_type: {
      value: cdktf.stringToHclTerraform(struct!.policyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scale_down_config: {
      value: bdsAutoScalingConfigurationPolicyDetailsScaleDownConfigToHclTerraform(struct!.scaleDownConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList",
    },
    scale_in_config: {
      value: bdsAutoScalingConfigurationPolicyDetailsScaleInConfigToHclTerraform(struct!.scaleInConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BdsAutoScalingConfigurationPolicyDetailsScaleInConfigList",
    },
    scale_out_config: {
      value: bdsAutoScalingConfigurationPolicyDetailsScaleOutConfigToHclTerraform(struct!.scaleOutConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList",
    },
    scale_up_config: {
      value: bdsAutoScalingConfigurationPolicyDetailsScaleUpConfigToHclTerraform(struct!.scaleUpConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList",
    },
    schedule_details: {
      value: cdktf.listMapperHcl(bdsAutoScalingConfigurationPolicyDetailsScheduleDetailsToHclTerraform, true)(struct!.scheduleDetails),
      isBlock: true,
      type: "list",
      storageClassType: "BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BdsAutoScalingConfigurationPolicyDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BdsAutoScalingConfigurationPolicyDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyType = this._policyType;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    if (this._scaleDownConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleDownConfig = this._scaleDownConfig?.internalValue;
    }
    if (this._scaleInConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleInConfig = this._scaleInConfig?.internalValue;
    }
    if (this._scaleOutConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleOutConfig = this._scaleOutConfig?.internalValue;
    }
    if (this._scaleUpConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleUpConfig = this._scaleUpConfig?.internalValue;
    }
    if (this._scheduleDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleDetails = this._scheduleDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BdsAutoScalingConfigurationPolicyDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._policyType = undefined;
      this._timezone = undefined;
      this._scaleDownConfig.internalValue = undefined;
      this._scaleInConfig.internalValue = undefined;
      this._scaleOutConfig.internalValue = undefined;
      this._scaleUpConfig.internalValue = undefined;
      this._scheduleDetails.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._policyType = value.policyType;
      this._timezone = value.timezone;
      this._scaleDownConfig.internalValue = value.scaleDownConfig;
      this._scaleInConfig.internalValue = value.scaleInConfig;
      this._scaleOutConfig.internalValue = value.scaleOutConfig;
      this._scaleUpConfig.internalValue = value.scaleUpConfig;
      this._scheduleDetails.internalValue = value.scheduleDetails;
    }
  }

  // action_type - computed: true, optional: false, required: false
  public get actionType() {
    return this.getStringAttribute('action_type');
  }

  // policy_type - computed: false, optional: false, required: true
  private _policyType?: string; 
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }
  public set policyType(value: string) {
    this._policyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTypeInput() {
    return this._policyType;
  }

  // timezone - computed: true, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // trigger_type - computed: true, optional: false, required: false
  public get triggerType() {
    return this.getStringAttribute('trigger_type');
  }

  // scale_down_config - computed: false, optional: true, required: false
  private _scaleDownConfig = new BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference(this, "scale_down_config");
  public get scaleDownConfig() {
    return this._scaleDownConfig;
  }
  public putScaleDownConfig(value: BdsAutoScalingConfigurationPolicyDetailsScaleDownConfig) {
    this._scaleDownConfig.internalValue = value;
  }
  public resetScaleDownConfig() {
    this._scaleDownConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleDownConfigInput() {
    return this._scaleDownConfig.internalValue;
  }

  // scale_in_config - computed: false, optional: true, required: false
  private _scaleInConfig = new BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference(this, "scale_in_config");
  public get scaleInConfig() {
    return this._scaleInConfig;
  }
  public putScaleInConfig(value: BdsAutoScalingConfigurationPolicyDetailsScaleInConfig) {
    this._scaleInConfig.internalValue = value;
  }
  public resetScaleInConfig() {
    this._scaleInConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleInConfigInput() {
    return this._scaleInConfig.internalValue;
  }

  // scale_out_config - computed: false, optional: true, required: false
  private _scaleOutConfig = new BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference(this, "scale_out_config");
  public get scaleOutConfig() {
    return this._scaleOutConfig;
  }
  public putScaleOutConfig(value: BdsAutoScalingConfigurationPolicyDetailsScaleOutConfig) {
    this._scaleOutConfig.internalValue = value;
  }
  public resetScaleOutConfig() {
    this._scaleOutConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleOutConfigInput() {
    return this._scaleOutConfig.internalValue;
  }

  // scale_up_config - computed: false, optional: true, required: false
  private _scaleUpConfig = new BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference(this, "scale_up_config");
  public get scaleUpConfig() {
    return this._scaleUpConfig;
  }
  public putScaleUpConfig(value: BdsAutoScalingConfigurationPolicyDetailsScaleUpConfig) {
    this._scaleUpConfig.internalValue = value;
  }
  public resetScaleUpConfig() {
    this._scaleUpConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleUpConfigInput() {
    return this._scaleUpConfig.internalValue;
  }

  // schedule_details - computed: false, optional: true, required: false
  private _scheduleDetails = new BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList(this, "schedule_details", false);
  public get scheduleDetails() {
    return this._scheduleDetails;
  }
  public putScheduleDetails(value: BdsAutoScalingConfigurationPolicyDetailsScheduleDetails[] | cdktf.IResolvable) {
    this._scheduleDetails.internalValue = value;
  }
  public resetScheduleDetails() {
    this._scheduleDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleDetailsInput() {
    return this._scheduleDetails.internalValue;
  }
}
export interface BdsAutoScalingConfigurationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_auto_scaling_configuration#create BdsAutoScalingConfiguration#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_auto_scaling_configuration#delete BdsAutoScalingConfiguration#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_auto_scaling_configuration#update BdsAutoScalingConfiguration#update}
  */
  readonly update?: string;
}

export function bdsAutoScalingConfigurationTimeoutsToTerraform(struct?: BdsAutoScalingConfigurationTimeouts | cdktf.IResolvable): any {
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


export function bdsAutoScalingConfigurationTimeoutsToHclTerraform(struct?: BdsAutoScalingConfigurationTimeouts | cdktf.IResolvable): any {
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

export class BdsAutoScalingConfigurationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BdsAutoScalingConfigurationTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BdsAutoScalingConfigurationTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_auto_scaling_configuration oci_bds_auto_scaling_configuration}
*/
export class BdsAutoScalingConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_bds_auto_scaling_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BdsAutoScalingConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BdsAutoScalingConfiguration to import
  * @param importFromId The id of the existing BdsAutoScalingConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_auto_scaling_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BdsAutoScalingConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_bds_auto_scaling_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_auto_scaling_configuration oci_bds_auto_scaling_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BdsAutoScalingConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: BdsAutoScalingConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_bds_auto_scaling_configuration',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bdsInstanceId = config.bdsInstanceId;
    this._clusterAdminPassword = config.clusterAdminPassword;
    this._displayName = config.displayName;
    this._id = config.id;
    this._isEnabled = config.isEnabled;
    this._nodeType = config.nodeType;
    this._policy.internalValue = config.policy;
    this._policyDetails.internalValue = config.policyDetails;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bds_instance_id - computed: false, optional: false, required: true
  private _bdsInstanceId?: string; 
  public get bdsInstanceId() {
    return this.getStringAttribute('bds_instance_id');
  }
  public set bdsInstanceId(value: string) {
    this._bdsInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bdsInstanceIdInput() {
    return this._bdsInstanceId;
  }

  // cluster_admin_password - computed: false, optional: false, required: true
  private _clusterAdminPassword?: string; 
  public get clusterAdminPassword() {
    return this.getStringAttribute('cluster_admin_password');
  }
  public set clusterAdminPassword(value: string) {
    this._clusterAdminPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterAdminPasswordInput() {
    return this._clusterAdminPassword;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // is_enabled - computed: false, optional: false, required: true
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // node_type - computed: false, optional: false, required: true
  private _nodeType?: string; 
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }
  public set nodeType(value: string) {
    this._nodeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeInput() {
    return this._nodeType;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // policy - computed: false, optional: true, required: false
  private _policy = new BdsAutoScalingConfigurationPolicyOutputReference(this, "policy");
  public get policy() {
    return this._policy;
  }
  public putPolicy(value: BdsAutoScalingConfigurationPolicy) {
    this._policy.internalValue = value;
  }
  public resetPolicy() {
    this._policy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy.internalValue;
  }

  // policy_details - computed: false, optional: true, required: false
  private _policyDetails = new BdsAutoScalingConfigurationPolicyDetailsOutputReference(this, "policy_details");
  public get policyDetails() {
    return this._policyDetails;
  }
  public putPolicyDetails(value: BdsAutoScalingConfigurationPolicyDetails) {
    this._policyDetails.internalValue = value;
  }
  public resetPolicyDetails() {
    this._policyDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyDetailsInput() {
    return this._policyDetails.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BdsAutoScalingConfigurationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BdsAutoScalingConfigurationTimeouts) {
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
      bds_instance_id: cdktf.stringToTerraform(this._bdsInstanceId),
      cluster_admin_password: cdktf.stringToTerraform(this._clusterAdminPassword),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      is_enabled: cdktf.booleanToTerraform(this._isEnabled),
      node_type: cdktf.stringToTerraform(this._nodeType),
      policy: bdsAutoScalingConfigurationPolicyToTerraform(this._policy.internalValue),
      policy_details: bdsAutoScalingConfigurationPolicyDetailsToTerraform(this._policyDetails.internalValue),
      timeouts: bdsAutoScalingConfigurationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bds_instance_id: {
        value: cdktf.stringToHclTerraform(this._bdsInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_admin_password: {
        value: cdktf.stringToHclTerraform(this._clusterAdminPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      is_enabled: {
        value: cdktf.booleanToHclTerraform(this._isEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      node_type: {
        value: cdktf.stringToHclTerraform(this._nodeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy: {
        value: bdsAutoScalingConfigurationPolicyToHclTerraform(this._policy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BdsAutoScalingConfigurationPolicyList",
      },
      policy_details: {
        value: bdsAutoScalingConfigurationPolicyDetailsToHclTerraform(this._policyDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BdsAutoScalingConfigurationPolicyDetailsList",
      },
      timeouts: {
        value: bdsAutoScalingConfigurationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BdsAutoScalingConfigurationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
