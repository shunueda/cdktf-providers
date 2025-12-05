// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tse_cngw_strategy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TseCngwStrategyConfig extends cdktf.TerraformMetaArguments {
  /**
  * description information, up to 120 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tse_cngw_strategy#description TseCngwStrategy#description}
  */
  readonly description?: string;
  /**
  * gateway ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tse_cngw_strategy#gateway_id TseCngwStrategy#gateway_id}
  */
  readonly gatewayId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tse_cngw_strategy#id TseCngwStrategy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * strategy name, up to 20 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tse_cngw_strategy#strategy_name TseCngwStrategy#strategy_name}
  */
  readonly strategyName: string;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tse_cngw_strategy#config TseCngwStrategy#config}
  */
  readonly config?: TseCngwStrategyConfigA;
  /**
  * cron_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tse_cngw_strategy#cron_config TseCngwStrategy#cron_config}
  */
  readonly cronConfig?: TseCngwStrategyCronConfig;
}
export interface TseCngwStrategyConfigBehaviorScaleDownPolicies {
  /**
  * period of scale down
  * Note: This field may return null, indicating that a valid value is not available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tse_cngw_strategy#period_seconds TseCngwStrategy#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * type, default value: Pods
  * Note: This field may return null, indicating that a valid value is not available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tse_cngw_strategy#type TseCngwStrategy#type}
  */
  readonly type?: string;
  /**
  * value
  * Note: This field may return null, indicating that a valid value is not available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tse_cngw_strategy#value TseCngwStrategy#value}
  */
  readonly value?: number;
}

export function tseCngwStrategyConfigBehaviorScaleDownPoliciesToTerraform(struct?: TseCngwStrategyConfigBehaviorScaleDownPolicies | cdktf.IResolvable): any {
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


export function tseCngwStrategyConfigBehaviorScaleDownPoliciesToHclTerraform(struct?: TseCngwStrategyConfigBehaviorScaleDownPolicies | cdktf.IResolvable): any {
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

export class TseCngwStrategyConfigBehaviorScaleDownPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TseCngwStrategyConfigBehaviorScaleDownPolicies | cdktf.IResolvable | undefined {
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

  public set internalValue(value: TseCngwStrategyConfigBehaviorScaleDownPolicies | cdktf.IResolvable | undefined) {
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

  // period_seconds - computed: false, optional: true, required: false
  private _periodSeconds?: number; 
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }
  public set periodSeconds(value: number) {
    this._periodSeconds = value;
  }
  public resetPeriodSeconds() {
    this._periodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodSecondsInput() {
    return this._periodSeconds;
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

  // value - computed: false, optional: true, required: false
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

export class TseCngwStrategyConfigBehaviorScaleDownPoliciesList extends cdktf.ComplexList {
  public internalValue? : TseCngwStrategyConfigBehaviorScaleDownPolicies[] | cdktf.IResolvable

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
  public get(index: number): TseCngwStrategyConfigBehaviorScaleDownPoliciesOutputReference {
    return new TseCngwStrategyConfigBehaviorScaleDownPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TseCngwStrategyConfigBehaviorScaleDown {
  /**
  * type of policy, default value: max
  * Note: This field may return null, indicating that a valid value is not available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tse_cngw_strategy#select_policy TseCngwStrategy#select_policy}
  */
  readonly selectPolicy?: string;
  /**
  * stability window time, unit:second, default 300 when scale down
  * Note: This field may return null, indicating that a valid value is not available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tse_cngw_strategy#stabilization_window_seconds TseCngwStrategy#stabilization_window_seconds}
  */
  readonly stabilizationWindowSeconds?: number;
  /**
  * policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tse_cngw_strategy#policies TseCngwStrategy#policies}
  */
  readonly policies?: TseCngwStrategyConfigBehaviorScaleDownPolicies[] | cdktf.IResolvable;
}

export function tseCngwStrategyConfigBehaviorScaleDownToTerraform(struct?: TseCngwStrategyConfigBehaviorScaleDownOutputReference | TseCngwStrategyConfigBehaviorScaleDown): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    select_policy: cdktf.stringToTerraform(struct!.selectPolicy),
    stabilization_window_seconds: cdktf.numberToTerraform(struct!.stabilizationWindowSeconds),
    policies: cdktf.listMapper(tseCngwStrategyConfigBehaviorScaleDownPoliciesToTerraform, true)(struct!.policies),
  }
}


export function tseCngwStrategyConfigBehaviorScaleDownToHclTerraform(struct?: TseCngwStrategyConfigBehaviorScaleDownOutputReference | TseCngwStrategyConfigBehaviorScaleDown): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    select_policy: {
      value: cdktf.stringToHclTerraform(struct!.selectPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stabilization_window_seconds: {
      value: cdktf.numberToHclTerraform(struct!.stabilizationWindowSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    policies: {
      value: cdktf.listMapperHcl(tseCngwStrategyConfigBehaviorScaleDownPoliciesToHclTerraform, true)(struct!.policies),
      isBlock: true,
      type: "list",
      storageClassType: "TseCngwStrategyConfigBehaviorScaleDownPoliciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TseCngwStrategyConfigBehaviorScaleDownOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TseCngwStrategyConfigBehaviorScaleDown | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._selectPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectPolicy = this._selectPolicy;
    }
    if (this._stabilizationWindowSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.stabilizationWindowSeconds = this._stabilizationWindowSeconds;
    }
    if (this._policies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policies = this._policies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TseCngwStrategyConfigBehaviorScaleDown | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._selectPolicy = undefined;
      this._stabilizationWindowSeconds = undefined;
      this._policies.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._selectPolicy = value.selectPolicy;
      this._stabilizationWindowSeconds = value.stabilizationWindowSeconds;
      this._policies.internalValue = value.policies;
    }
  }

  // select_policy - computed: false, optional: true, required: false
  private _selectPolicy?: string; 
  public get selectPolicy() {
    return this.getStringAttribute('select_policy');
  }
  public set selectPolicy(value: string) {
    this._selectPolicy = value;
  }
  public resetSelectPolicy() {
    this._selectPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectPolicyInput() {
    return this._selectPolicy;
  }

  // stabilization_window_seconds - computed: false, optional: true, required: false
  private _stabilizationWindowSeconds?: number; 
  public get stabilizationWindowSeconds() {
    return this.getNumberAttribute('stabilization_window_seconds');
  }
  public set stabilizationWindowSeconds(value: number) {
    this._stabilizationWindowSeconds = value;
  }
  public resetStabilizationWindowSeconds() {
    this._stabilizationWindowSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stabilizationWindowSecondsInput() {
    return this._stabilizationWindowSeconds;
  }

  // policies - computed: false, optional: true, required: false
  private _policies = new TseCngwStrategyConfigBehaviorScaleDownPoliciesList(this, "policies", false);
  public get policies() {
    return this._policies;
  }
  public putPolicies(value: TseCngwStrategyConfigBehaviorScaleDownPolicies[] | cdktf.IResolvable) {
    this._policies.internalValue = value;
  }
  public resetPolicies() {
    this._policies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies.internalValue;
  }
}
export interface TseCngwStrategyConfigBehaviorScaleUpPolicies {
  /**
  * period of scale up
  * Note: This field may return null, indicating that a valid value is not available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tse_cngw_strategy#period_seconds TseCngwStrategy#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * type, default value: Pods
  * Note: This field may return null, indicating that a valid value is not available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tse_cngw_strategy#type TseCngwStrategy#type}
  */
  readonly type?: string;
  /**
  * value
  * Note: This field may return null, indicating that a valid value is not available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tse_cngw_strategy#value TseCngwStrategy#value}
  */
  readonly value?: number;
}

export function tseCngwStrategyConfigBehaviorScaleUpPoliciesToTerraform(struct?: TseCngwStrategyConfigBehaviorScaleUpPolicies | cdktf.IResolvable): any {
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


export function tseCngwStrategyConfigBehaviorScaleUpPoliciesToHclTerraform(struct?: TseCngwStrategyConfigBehaviorScaleUpPolicies | cdktf.IResolvable): any {
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

export class TseCngwStrategyConfigBehaviorScaleUpPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TseCngwStrategyConfigBehaviorScaleUpPolicies | cdktf.IResolvable | undefined {
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

  public set internalValue(value: TseCngwStrategyConfigBehaviorScaleUpPolicies | cdktf.IResolvable | undefined) {
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

  // period_seconds - computed: false, optional: true, required: false
  private _periodSeconds?: number; 
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }
  public set periodSeconds(value: number) {
    this._periodSeconds = value;
  }
  public resetPeriodSeconds() {
    this._periodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodSecondsInput() {
    return this._periodSeconds;
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

  // value - computed: false, optional: true, required: false
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

export class TseCngwStrategyConfigBehaviorScaleUpPoliciesList extends cdktf.ComplexList {
  public internalValue? : TseCngwStrategyConfigBehaviorScaleUpPolicies[] | cdktf.IResolvable

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
  public get(index: number): TseCngwStrategyConfigBehaviorScaleUpPoliciesOutputReference {
    return new TseCngwStrategyConfigBehaviorScaleUpPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TseCngwStrategyConfigBehaviorScaleUp {
  /**
  * type of policy, default value: max
  * Note: This field may return null, indicating that a valid value is not available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tse_cngw_strategy#select_policy TseCngwStrategy#select_policy}
  */
  readonly selectPolicy?: string;
  /**
  * stability window time, unit:second, default 0 when scale up
  * Note: This field may return null, indicating that a valid value is not available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tse_cngw_strategy#stabilization_window_seconds TseCngwStrategy#stabilization_window_seconds}
  */
  readonly stabilizationWindowSeconds?: number;
  /**
  * policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tse_cngw_strategy#policies TseCngwStrategy#policies}
  */
  readonly policies?: TseCngwStrategyConfigBehaviorScaleUpPolicies[] | cdktf.IResolvable;
}

export function tseCngwStrategyConfigBehaviorScaleUpToTerraform(struct?: TseCngwStrategyConfigBehaviorScaleUpOutputReference | TseCngwStrategyConfigBehaviorScaleUp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    select_policy: cdktf.stringToTerraform(struct!.selectPolicy),
    stabilization_window_seconds: cdktf.numberToTerraform(struct!.stabilizationWindowSeconds),
    policies: cdktf.listMapper(tseCngwStrategyConfigBehaviorScaleUpPoliciesToTerraform, true)(struct!.policies),
  }
}


export function tseCngwStrategyConfigBehaviorScaleUpToHclTerraform(struct?: TseCngwStrategyConfigBehaviorScaleUpOutputReference | TseCngwStrategyConfigBehaviorScaleUp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    select_policy: {
      value: cdktf.stringToHclTerraform(struct!.selectPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stabilization_window_seconds: {
      value: cdktf.numberToHclTerraform(struct!.stabilizationWindowSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    policies: {
      value: cdktf.listMapperHcl(tseCngwStrategyConfigBehaviorScaleUpPoliciesToHclTerraform, true)(struct!.policies),
      isBlock: true,
      type: "list",
      storageClassType: "TseCngwStrategyConfigBehaviorScaleUpPoliciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TseCngwStrategyConfigBehaviorScaleUpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TseCngwStrategyConfigBehaviorScaleUp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._selectPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectPolicy = this._selectPolicy;
    }
    if (this._stabilizationWindowSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.stabilizationWindowSeconds = this._stabilizationWindowSeconds;
    }
    if (this._policies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policies = this._policies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TseCngwStrategyConfigBehaviorScaleUp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._selectPolicy = undefined;
      this._stabilizationWindowSeconds = undefined;
      this._policies.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._selectPolicy = value.selectPolicy;
      this._stabilizationWindowSeconds = value.stabilizationWindowSeconds;
      this._policies.internalValue = value.policies;
    }
  }

  // select_policy - computed: false, optional: true, required: false
  private _selectPolicy?: string; 
  public get selectPolicy() {
    return this.getStringAttribute('select_policy');
  }
  public set selectPolicy(value: string) {
    this._selectPolicy = value;
  }
  public resetSelectPolicy() {
    this._selectPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectPolicyInput() {
    return this._selectPolicy;
  }

  // stabilization_window_seconds - computed: false, optional: true, required: false
  private _stabilizationWindowSeconds?: number; 
  public get stabilizationWindowSeconds() {
    return this.getNumberAttribute('stabilization_window_seconds');
  }
  public set stabilizationWindowSeconds(value: number) {
    this._stabilizationWindowSeconds = value;
  }
  public resetStabilizationWindowSeconds() {
    this._stabilizationWindowSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stabilizationWindowSecondsInput() {
    return this._stabilizationWindowSeconds;
  }

  // policies - computed: false, optional: true, required: false
  private _policies = new TseCngwStrategyConfigBehaviorScaleUpPoliciesList(this, "policies", false);
  public get policies() {
    return this._policies;
  }
  public putPolicies(value: TseCngwStrategyConfigBehaviorScaleUpPolicies[] | cdktf.IResolvable) {
    this._policies.internalValue = value;
  }
  public resetPolicies() {
    this._policies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies.internalValue;
  }
}
export interface TseCngwStrategyConfigBehavior {
  /**
  * scale_down block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tse_cngw_strategy#scale_down TseCngwStrategy#scale_down}
  */
  readonly scaleDown?: TseCngwStrategyConfigBehaviorScaleDown;
  /**
  * scale_up block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tse_cngw_strategy#scale_up TseCngwStrategy#scale_up}
  */
  readonly scaleUp?: TseCngwStrategyConfigBehaviorScaleUp;
}

export function tseCngwStrategyConfigBehaviorToTerraform(struct?: TseCngwStrategyConfigBehaviorOutputReference | TseCngwStrategyConfigBehavior): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scale_down: tseCngwStrategyConfigBehaviorScaleDownToTerraform(struct!.scaleDown),
    scale_up: tseCngwStrategyConfigBehaviorScaleUpToTerraform(struct!.scaleUp),
  }
}


export function tseCngwStrategyConfigBehaviorToHclTerraform(struct?: TseCngwStrategyConfigBehaviorOutputReference | TseCngwStrategyConfigBehavior): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scale_down: {
      value: tseCngwStrategyConfigBehaviorScaleDownToHclTerraform(struct!.scaleDown),
      isBlock: true,
      type: "list",
      storageClassType: "TseCngwStrategyConfigBehaviorScaleDownList",
    },
    scale_up: {
      value: tseCngwStrategyConfigBehaviorScaleUpToHclTerraform(struct!.scaleUp),
      isBlock: true,
      type: "list",
      storageClassType: "TseCngwStrategyConfigBehaviorScaleUpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TseCngwStrategyConfigBehaviorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TseCngwStrategyConfigBehavior | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scaleDown?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleDown = this._scaleDown?.internalValue;
    }
    if (this._scaleUp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleUp = this._scaleUp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TseCngwStrategyConfigBehavior | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._scaleDown.internalValue = undefined;
      this._scaleUp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._scaleDown.internalValue = value.scaleDown;
      this._scaleUp.internalValue = value.scaleUp;
    }
  }

  // scale_down - computed: false, optional: true, required: false
  private _scaleDown = new TseCngwStrategyConfigBehaviorScaleDownOutputReference(this, "scale_down");
  public get scaleDown() {
    return this._scaleDown;
  }
  public putScaleDown(value: TseCngwStrategyConfigBehaviorScaleDown) {
    this._scaleDown.internalValue = value;
  }
  public resetScaleDown() {
    this._scaleDown.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleDownInput() {
    return this._scaleDown.internalValue;
  }

  // scale_up - computed: false, optional: true, required: false
  private _scaleUp = new TseCngwStrategyConfigBehaviorScaleUpOutputReference(this, "scale_up");
  public get scaleUp() {
    return this._scaleUp;
  }
  public putScaleUp(value: TseCngwStrategyConfigBehaviorScaleUp) {
    this._scaleUp.internalValue = value;
  }
  public resetScaleUp() {
    this._scaleUp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleUpInput() {
    return this._scaleUp.internalValue;
  }
}
export interface TseCngwStrategyConfigMetrics {
  /**
  * metric name. Reference value:
  * - cpu
  * - memory
  * Note: This field may return null, indicating that a valid value is not available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tse_cngw_strategy#resource_name TseCngwStrategy#resource_name}
  */
  readonly resourceName?: string;
  /**
  * target type of metric, currently only supports `Utilization`
  * Note: This field may return null, indicating that a valid value is not available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tse_cngw_strategy#target_type TseCngwStrategy#target_type}
  */
  readonly targetType?: string;
  /**
  * target value of metric
  * Note: This field may return null, indicating that a valid value is not available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tse_cngw_strategy#target_value TseCngwStrategy#target_value}
  */
  readonly targetValue?: number;
  /**
  * metric type. Deafault value
  * - Resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tse_cngw_strategy#type TseCngwStrategy#type}
  */
  readonly type?: string;
}

export function tseCngwStrategyConfigMetricsToTerraform(struct?: TseCngwStrategyConfigMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_name: cdktf.stringToTerraform(struct!.resourceName),
    target_type: cdktf.stringToTerraform(struct!.targetType),
    target_value: cdktf.numberToTerraform(struct!.targetValue),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function tseCngwStrategyConfigMetricsToHclTerraform(struct?: TseCngwStrategyConfigMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_name: {
      value: cdktf.stringToHclTerraform(struct!.resourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_type: {
      value: cdktf.stringToHclTerraform(struct!.targetType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_value: {
      value: cdktf.numberToHclTerraform(struct!.targetValue),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TseCngwStrategyConfigMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TseCngwStrategyConfigMetrics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceName = this._resourceName;
    }
    if (this._targetType !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetType = this._targetType;
    }
    if (this._targetValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetValue = this._targetValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TseCngwStrategyConfigMetrics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceName = undefined;
      this._targetType = undefined;
      this._targetValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceName = value.resourceName;
      this._targetType = value.targetType;
      this._targetValue = value.targetValue;
      this._type = value.type;
    }
  }

  // resource_name - computed: false, optional: true, required: false
  private _resourceName?: string; 
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }
  public set resourceName(value: string) {
    this._resourceName = value;
  }
  public resetResourceName() {
    this._resourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNameInput() {
    return this._resourceName;
  }

  // target_type - computed: true, optional: true, required: false
  private _targetType?: string; 
  public get targetType() {
    return this.getStringAttribute('target_type');
  }
  public set targetType(value: string) {
    this._targetType = value;
  }
  public resetTargetType() {
    this._targetType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTypeInput() {
    return this._targetType;
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
}

export class TseCngwStrategyConfigMetricsList extends cdktf.ComplexList {
  public internalValue? : TseCngwStrategyConfigMetrics[] | cdktf.IResolvable

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
  public get(index: number): TseCngwStrategyConfigMetricsOutputReference {
    return new TseCngwStrategyConfigMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TseCngwStrategyConfigA {
  /**
  * create time
  * Note: This field may return null, indicating that a valid value is not available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tse_cngw_strategy#create_time TseCngwStrategy#create_time}
  */
  readonly createTime?: string;
  /**
  * max number of replica for metric scaling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tse_cngw_strategy#max_replicas TseCngwStrategy#max_replicas}
  */
  readonly maxReplicas?: number;
  /**
  * modify time
  * Note: This field may return null, indicating that a valid value is not available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tse_cngw_strategy#modify_time TseCngwStrategy#modify_time}
  */
  readonly modifyTime?: string;
  /**
  * strategy ID
  * Note: This field may return null, indicating that a valid value is not available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tse_cngw_strategy#strategy_id TseCngwStrategy#strategy_id}
  */
  readonly strategyId?: string;
  /**
  * behavior block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tse_cngw_strategy#behavior TseCngwStrategy#behavior}
  */
  readonly behavior?: TseCngwStrategyConfigBehavior;
  /**
  * metrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tse_cngw_strategy#metrics TseCngwStrategy#metrics}
  */
  readonly metrics?: TseCngwStrategyConfigMetrics[] | cdktf.IResolvable;
}

export function tseCngwStrategyConfigAToTerraform(struct?: TseCngwStrategyConfigAOutputReference | TseCngwStrategyConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create_time: cdktf.stringToTerraform(struct!.createTime),
    max_replicas: cdktf.numberToTerraform(struct!.maxReplicas),
    modify_time: cdktf.stringToTerraform(struct!.modifyTime),
    strategy_id: cdktf.stringToTerraform(struct!.strategyId),
    behavior: tseCngwStrategyConfigBehaviorToTerraform(struct!.behavior),
    metrics: cdktf.listMapper(tseCngwStrategyConfigMetricsToTerraform, true)(struct!.metrics),
  }
}


export function tseCngwStrategyConfigAToHclTerraform(struct?: TseCngwStrategyConfigAOutputReference | TseCngwStrategyConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create_time: {
      value: cdktf.stringToHclTerraform(struct!.createTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_replicas: {
      value: cdktf.numberToHclTerraform(struct!.maxReplicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    modify_time: {
      value: cdktf.stringToHclTerraform(struct!.modifyTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    strategy_id: {
      value: cdktf.stringToHclTerraform(struct!.strategyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    behavior: {
      value: tseCngwStrategyConfigBehaviorToHclTerraform(struct!.behavior),
      isBlock: true,
      type: "list",
      storageClassType: "TseCngwStrategyConfigBehaviorList",
    },
    metrics: {
      value: cdktf.listMapperHcl(tseCngwStrategyConfigMetricsToHclTerraform, true)(struct!.metrics),
      isBlock: true,
      type: "list",
      storageClassType: "TseCngwStrategyConfigMetricsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TseCngwStrategyConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TseCngwStrategyConfigA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.createTime = this._createTime;
    }
    if (this._maxReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxReplicas = this._maxReplicas;
    }
    if (this._modifyTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.modifyTime = this._modifyTime;
    }
    if (this._strategyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategyId = this._strategyId;
    }
    if (this._behavior?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.behavior = this._behavior?.internalValue;
    }
    if (this._metrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metrics = this._metrics?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TseCngwStrategyConfigA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._createTime = undefined;
      this._maxReplicas = undefined;
      this._modifyTime = undefined;
      this._strategyId = undefined;
      this._behavior.internalValue = undefined;
      this._metrics.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._createTime = value.createTime;
      this._maxReplicas = value.maxReplicas;
      this._modifyTime = value.modifyTime;
      this._strategyId = value.strategyId;
      this._behavior.internalValue = value.behavior;
      this._metrics.internalValue = value.metrics;
    }
  }

  // create_time - computed: false, optional: true, required: false
  private _createTime?: string; 
  public get createTime() {
    return this.getStringAttribute('create_time');
  }
  public set createTime(value: string) {
    this._createTime = value;
  }
  public resetCreateTime() {
    this._createTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createTimeInput() {
    return this._createTime;
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

  // modify_time - computed: false, optional: true, required: false
  private _modifyTime?: string; 
  public get modifyTime() {
    return this.getStringAttribute('modify_time');
  }
  public set modifyTime(value: string) {
    this._modifyTime = value;
  }
  public resetModifyTime() {
    this._modifyTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifyTimeInput() {
    return this._modifyTime;
  }

  // strategy_id - computed: false, optional: true, required: false
  private _strategyId?: string; 
  public get strategyId() {
    return this.getStringAttribute('strategy_id');
  }
  public set strategyId(value: string) {
    this._strategyId = value;
  }
  public resetStrategyId() {
    this._strategyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyIdInput() {
    return this._strategyId;
  }

  // behavior - computed: false, optional: true, required: false
  private _behavior = new TseCngwStrategyConfigBehaviorOutputReference(this, "behavior");
  public get behavior() {
    return this._behavior;
  }
  public putBehavior(value: TseCngwStrategyConfigBehavior) {
    this._behavior.internalValue = value;
  }
  public resetBehavior() {
    this._behavior.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get behaviorInput() {
    return this._behavior.internalValue;
  }

  // metrics - computed: false, optional: true, required: false
  private _metrics = new TseCngwStrategyConfigMetricsList(this, "metrics", false);
  public get metrics() {
    return this._metrics;
  }
  public putMetrics(value: TseCngwStrategyConfigMetrics[] | cdktf.IResolvable) {
    this._metrics.internalValue = value;
  }
  public resetMetrics() {
    this._metrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics.internalValue;
  }
}
export interface TseCngwStrategyCronConfigParams {
  /**
  * cron expression of timed scaling, no input required
  * Note: This field may return null, indicating that a valid value is not available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tse_cngw_strategy#crontab TseCngwStrategy#crontab}
  */
  readonly crontab?: string;
  /**
  * period of timed scaling
  * Note: This field may return null, indicating that a valid value is not available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tse_cngw_strategy#period TseCngwStrategy#period}
  */
  readonly period?: string;
  /**
  * start time of timed scaling
  * Note: This field may return null, indicating that a valid value is not available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tse_cngw_strategy#start_at TseCngwStrategy#start_at}
  */
  readonly startAt?: string;
  /**
  * the number of target nodes for the timed scaling. Do not exceed the max number of replica for metric scaling
  * Note: This field may return null, indicating that a valid value is not available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tse_cngw_strategy#target_replicas TseCngwStrategy#target_replicas}
  */
  readonly targetReplicas?: number;
}

export function tseCngwStrategyCronConfigParamsToTerraform(struct?: TseCngwStrategyCronConfigParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    crontab: cdktf.stringToTerraform(struct!.crontab),
    period: cdktf.stringToTerraform(struct!.period),
    start_at: cdktf.stringToTerraform(struct!.startAt),
    target_replicas: cdktf.numberToTerraform(struct!.targetReplicas),
  }
}


export function tseCngwStrategyCronConfigParamsToHclTerraform(struct?: TseCngwStrategyCronConfigParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    crontab: {
      value: cdktf.stringToHclTerraform(struct!.crontab),
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

export class TseCngwStrategyCronConfigParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TseCngwStrategyCronConfigParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crontab !== undefined) {
      hasAnyValues = true;
      internalValueResult.crontab = this._crontab;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
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

  public set internalValue(value: TseCngwStrategyCronConfigParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._crontab = undefined;
      this._period = undefined;
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
      this._crontab = value.crontab;
      this._period = value.period;
      this._startAt = value.startAt;
      this._targetReplicas = value.targetReplicas;
    }
  }

  // crontab - computed: false, optional: true, required: false
  private _crontab?: string; 
  public get crontab() {
    return this.getStringAttribute('crontab');
  }
  public set crontab(value: string) {
    this._crontab = value;
  }
  public resetCrontab() {
    this._crontab = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crontabInput() {
    return this._crontab;
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

  // start_at - computed: false, optional: true, required: false
  private _startAt?: string; 
  public get startAt() {
    return this.getStringAttribute('start_at');
  }
  public set startAt(value: string) {
    this._startAt = value;
  }
  public resetStartAt() {
    this._startAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startAtInput() {
    return this._startAt;
  }

  // target_replicas - computed: false, optional: true, required: false
  private _targetReplicas?: number; 
  public get targetReplicas() {
    return this.getNumberAttribute('target_replicas');
  }
  public set targetReplicas(value: number) {
    this._targetReplicas = value;
  }
  public resetTargetReplicas() {
    this._targetReplicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetReplicasInput() {
    return this._targetReplicas;
  }
}

export class TseCngwStrategyCronConfigParamsList extends cdktf.ComplexList {
  public internalValue? : TseCngwStrategyCronConfigParams[] | cdktf.IResolvable

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
  public get(index: number): TseCngwStrategyCronConfigParamsOutputReference {
    return new TseCngwStrategyCronConfigParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TseCngwStrategyCronConfig {
  /**
  * strategy ID
  * Note: This field may return null, indicating that a valid value is not available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tse_cngw_strategy#strategy_id TseCngwStrategy#strategy_id}
  */
  readonly strategyId?: string;
  /**
  * params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tse_cngw_strategy#params TseCngwStrategy#params}
  */
  readonly params?: TseCngwStrategyCronConfigParams[] | cdktf.IResolvable;
}

export function tseCngwStrategyCronConfigToTerraform(struct?: TseCngwStrategyCronConfigOutputReference | TseCngwStrategyCronConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    strategy_id: cdktf.stringToTerraform(struct!.strategyId),
    params: cdktf.listMapper(tseCngwStrategyCronConfigParamsToTerraform, true)(struct!.params),
  }
}


export function tseCngwStrategyCronConfigToHclTerraform(struct?: TseCngwStrategyCronConfigOutputReference | TseCngwStrategyCronConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    strategy_id: {
      value: cdktf.stringToHclTerraform(struct!.strategyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    params: {
      value: cdktf.listMapperHcl(tseCngwStrategyCronConfigParamsToHclTerraform, true)(struct!.params),
      isBlock: true,
      type: "list",
      storageClassType: "TseCngwStrategyCronConfigParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TseCngwStrategyCronConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TseCngwStrategyCronConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._strategyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategyId = this._strategyId;
    }
    if (this._params?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.params = this._params?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TseCngwStrategyCronConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._strategyId = undefined;
      this._params.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._strategyId = value.strategyId;
      this._params.internalValue = value.params;
    }
  }

  // strategy_id - computed: false, optional: true, required: false
  private _strategyId?: string; 
  public get strategyId() {
    return this.getStringAttribute('strategy_id');
  }
  public set strategyId(value: string) {
    this._strategyId = value;
  }
  public resetStrategyId() {
    this._strategyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyIdInput() {
    return this._strategyId;
  }

  // params - computed: false, optional: true, required: false
  private _params = new TseCngwStrategyCronConfigParamsList(this, "params", false);
  public get params() {
    return this._params;
  }
  public putParams(value: TseCngwStrategyCronConfigParams[] | cdktf.IResolvable) {
    this._params.internalValue = value;
  }
  public resetParams() {
    this._params.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsInput() {
    return this._params.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tse_cngw_strategy tencentcloud_tse_cngw_strategy}
*/
export class TseCngwStrategy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tse_cngw_strategy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TseCngwStrategy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TseCngwStrategy to import
  * @param importFromId The id of the existing TseCngwStrategy that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tse_cngw_strategy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TseCngwStrategy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tse_cngw_strategy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tse_cngw_strategy tencentcloud_tse_cngw_strategy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TseCngwStrategyConfig
  */
  public constructor(scope: Construct, id: string, config: TseCngwStrategyConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tse_cngw_strategy',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.42',
        providerVersionConstraint: '1.82.42'
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
    this._gatewayId = config.gatewayId;
    this._id = config.id;
    this._strategyName = config.strategyName;
    this._config.internalValue = config.config;
    this._cronConfig.internalValue = config.cronConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // gateway_id - computed: false, optional: false, required: true
  private _gatewayId?: string; 
  public get gatewayId() {
    return this.getStringAttribute('gateway_id');
  }
  public set gatewayId(value: string) {
    this._gatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIdInput() {
    return this._gatewayId;
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

  // strategy_id - computed: true, optional: false, required: false
  public get strategyId() {
    return this.getStringAttribute('strategy_id');
  }

  // strategy_name - computed: false, optional: false, required: true
  private _strategyName?: string; 
  public get strategyName() {
    return this.getStringAttribute('strategy_name');
  }
  public set strategyName(value: string) {
    this._strategyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyNameInput() {
    return this._strategyName;
  }

  // config - computed: false, optional: true, required: false
  private _config = new TseCngwStrategyConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: TseCngwStrategyConfigA) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // cron_config - computed: false, optional: true, required: false
  private _cronConfig = new TseCngwStrategyCronConfigOutputReference(this, "cron_config");
  public get cronConfig() {
    return this._cronConfig;
  }
  public putCronConfig(value: TseCngwStrategyCronConfig) {
    this._cronConfig.internalValue = value;
  }
  public resetCronConfig() {
    this._cronConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronConfigInput() {
    return this._cronConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      gateway_id: cdktf.stringToTerraform(this._gatewayId),
      id: cdktf.stringToTerraform(this._id),
      strategy_name: cdktf.stringToTerraform(this._strategyName),
      config: tseCngwStrategyConfigAToTerraform(this._config.internalValue),
      cron_config: tseCngwStrategyCronConfigToTerraform(this._cronConfig.internalValue),
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
      gateway_id: {
        value: cdktf.stringToHclTerraform(this._gatewayId),
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
      strategy_name: {
        value: cdktf.stringToHclTerraform(this._strategyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config: {
        value: tseCngwStrategyConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TseCngwStrategyConfigAList",
      },
      cron_config: {
        value: tseCngwStrategyCronConfigToHclTerraform(this._cronConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TseCngwStrategyCronConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
