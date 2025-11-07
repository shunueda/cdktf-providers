// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/autoscaling_auto_scaling_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AutoscalingAutoScalingConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/autoscaling_auto_scaling_configuration#compartment_id AutoscalingAutoScalingConfiguration#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/autoscaling_auto_scaling_configuration#cool_down_in_seconds AutoscalingAutoScalingConfiguration#cool_down_in_seconds}
  */
  readonly coolDownInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/autoscaling_auto_scaling_configuration#defined_tags AutoscalingAutoScalingConfiguration#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/autoscaling_auto_scaling_configuration#display_name AutoscalingAutoScalingConfiguration#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/autoscaling_auto_scaling_configuration#freeform_tags AutoscalingAutoScalingConfiguration#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/autoscaling_auto_scaling_configuration#id AutoscalingAutoScalingConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/autoscaling_auto_scaling_configuration#is_enabled AutoscalingAutoScalingConfiguration#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * auto_scaling_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/autoscaling_auto_scaling_configuration#auto_scaling_resources AutoscalingAutoScalingConfiguration#auto_scaling_resources}
  */
  readonly autoScalingResources: AutoscalingAutoScalingConfigurationAutoScalingResources;
  /**
  * policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/autoscaling_auto_scaling_configuration#policies AutoscalingAutoScalingConfiguration#policies}
  */
  readonly policies: AutoscalingAutoScalingConfigurationPolicies[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/autoscaling_auto_scaling_configuration#timeouts AutoscalingAutoScalingConfiguration#timeouts}
  */
  readonly timeouts?: AutoscalingAutoScalingConfigurationTimeouts;
}
export interface AutoscalingAutoScalingConfigurationAutoScalingResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/autoscaling_auto_scaling_configuration#id AutoscalingAutoScalingConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/autoscaling_auto_scaling_configuration#type AutoscalingAutoScalingConfiguration#type}
  */
  readonly type: string;
}

export function autoscalingAutoScalingConfigurationAutoScalingResourcesToTerraform(struct?: AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference | AutoscalingAutoScalingConfigurationAutoScalingResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function autoscalingAutoScalingConfigurationAutoScalingResourcesToHclTerraform(struct?: AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference | AutoscalingAutoScalingConfigurationAutoScalingResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutoscalingAutoScalingConfigurationAutoScalingResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalingAutoScalingConfigurationAutoScalingResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._type = value.type;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
}
export interface AutoscalingAutoScalingConfigurationPoliciesCapacity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/autoscaling_auto_scaling_configuration#initial AutoscalingAutoScalingConfiguration#initial}
  */
  readonly initial?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/autoscaling_auto_scaling_configuration#max AutoscalingAutoScalingConfiguration#max}
  */
  readonly max?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/autoscaling_auto_scaling_configuration#min AutoscalingAutoScalingConfiguration#min}
  */
  readonly min?: number;
}

export function autoscalingAutoScalingConfigurationPoliciesCapacityToTerraform(struct?: AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference | AutoscalingAutoScalingConfigurationPoliciesCapacity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    initial: cdktf.numberToTerraform(struct!.initial),
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}


export function autoscalingAutoScalingConfigurationPoliciesCapacityToHclTerraform(struct?: AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference | AutoscalingAutoScalingConfigurationPoliciesCapacity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    initial: {
      value: cdktf.numberToHclTerraform(struct!.initial),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max: {
      value: cdktf.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktf.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutoscalingAutoScalingConfigurationPoliciesCapacity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._initial !== undefined) {
      hasAnyValues = true;
      internalValueResult.initial = this._initial;
    }
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalingAutoScalingConfigurationPoliciesCapacity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._initial = undefined;
      this._max = undefined;
      this._min = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._initial = value.initial;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // initial - computed: true, optional: true, required: false
  private _initial?: number; 
  public get initial() {
    return this.getNumberAttribute('initial');
  }
  public set initial(value: number) {
    this._initial = value;
  }
  public resetInitial() {
    this._initial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialInput() {
    return this._initial;
  }

  // max - computed: true, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: true, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}
export interface AutoscalingAutoScalingConfigurationPoliciesExecutionSchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/autoscaling_auto_scaling_configuration#expression AutoscalingAutoScalingConfiguration#expression}
  */
  readonly expression: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/autoscaling_auto_scaling_configuration#timezone AutoscalingAutoScalingConfiguration#timezone}
  */
  readonly timezone: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/autoscaling_auto_scaling_configuration#type AutoscalingAutoScalingConfiguration#type}
  */
  readonly type: string;
}

export function autoscalingAutoScalingConfigurationPoliciesExecutionScheduleToTerraform(struct?: AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference | AutoscalingAutoScalingConfigurationPoliciesExecutionSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    timezone: cdktf.stringToTerraform(struct!.timezone),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function autoscalingAutoScalingConfigurationPoliciesExecutionScheduleToHclTerraform(struct?: AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference | AutoscalingAutoScalingConfigurationPoliciesExecutionSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
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

export class AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutoscalingAutoScalingConfigurationPoliciesExecutionSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalingAutoScalingConfigurationPoliciesExecutionSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expression = undefined;
      this._timezone = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expression = value.expression;
      this._timezone = value.timezone;
      this._type = value.type;
    }
  }

  // expression - computed: false, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // timezone - computed: false, optional: false, required: true
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
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
}
export interface AutoscalingAutoScalingConfigurationPoliciesResourceAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/autoscaling_auto_scaling_configuration#action AutoscalingAutoScalingConfiguration#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/autoscaling_auto_scaling_configuration#action_type AutoscalingAutoScalingConfiguration#action_type}
  */
  readonly actionType: string;
}

export function autoscalingAutoScalingConfigurationPoliciesResourceActionToTerraform(struct?: AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference | AutoscalingAutoScalingConfigurationPoliciesResourceAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    action_type: cdktf.stringToTerraform(struct!.actionType),
  }
}


export function autoscalingAutoScalingConfigurationPoliciesResourceActionToHclTerraform(struct?: AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference | AutoscalingAutoScalingConfigurationPoliciesResourceAction): any {
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
    action_type: {
      value: cdktf.stringToHclTerraform(struct!.actionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutoscalingAutoScalingConfigurationPoliciesResourceAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._actionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionType = this._actionType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalingAutoScalingConfigurationPoliciesResourceAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._actionType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._actionType = value.actionType;
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

  // action_type - computed: false, optional: false, required: true
  private _actionType?: string; 
  public get actionType() {
    return this.getStringAttribute('action_type');
  }
  public set actionType(value: string) {
    this._actionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTypeInput() {
    return this._actionType;
  }
}
export interface AutoscalingAutoScalingConfigurationPoliciesRulesAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/autoscaling_auto_scaling_configuration#type AutoscalingAutoScalingConfiguration#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/autoscaling_auto_scaling_configuration#value AutoscalingAutoScalingConfiguration#value}
  */
  readonly value?: number;
}

export function autoscalingAutoScalingConfigurationPoliciesRulesActionToTerraform(struct?: AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference | AutoscalingAutoScalingConfigurationPoliciesRulesAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function autoscalingAutoScalingConfigurationPoliciesRulesActionToHclTerraform(struct?: AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference | AutoscalingAutoScalingConfigurationPoliciesRulesAction): any {
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

export class AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutoscalingAutoScalingConfigurationPoliciesRulesAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: AutoscalingAutoScalingConfigurationPoliciesRulesAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // type - computed: true, optional: true, required: false
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
export interface AutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/autoscaling_auto_scaling_configuration#operator AutoscalingAutoScalingConfiguration#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/autoscaling_auto_scaling_configuration#value AutoscalingAutoScalingConfiguration#value}
  */
  readonly value?: number;
}

export function autoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdToTerraform(struct?: AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference | AutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function autoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdToHclTerraform(struct?: AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference | AutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: AutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._operator = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._operator = value.operator;
      this._value = value.value;
    }
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
export interface AutoscalingAutoScalingConfigurationPoliciesRulesMetric {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/autoscaling_auto_scaling_configuration#metric_compartment_id AutoscalingAutoScalingConfiguration#metric_compartment_id}
  */
  readonly metricCompartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/autoscaling_auto_scaling_configuration#metric_source AutoscalingAutoScalingConfiguration#metric_source}
  */
  readonly metricSource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/autoscaling_auto_scaling_configuration#metric_type AutoscalingAutoScalingConfiguration#metric_type}
  */
  readonly metricType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/autoscaling_auto_scaling_configuration#namespace AutoscalingAutoScalingConfiguration#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/autoscaling_auto_scaling_configuration#pending_duration AutoscalingAutoScalingConfiguration#pending_duration}
  */
  readonly pendingDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/autoscaling_auto_scaling_configuration#query AutoscalingAutoScalingConfiguration#query}
  */
  readonly query?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/autoscaling_auto_scaling_configuration#resource_group AutoscalingAutoScalingConfiguration#resource_group}
  */
  readonly resourceGroup?: string;
  /**
  * threshold block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/autoscaling_auto_scaling_configuration#threshold AutoscalingAutoScalingConfiguration#threshold}
  */
  readonly threshold?: AutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold;
}

export function autoscalingAutoScalingConfigurationPoliciesRulesMetricToTerraform(struct?: AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference | AutoscalingAutoScalingConfigurationPoliciesRulesMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_compartment_id: cdktf.stringToTerraform(struct!.metricCompartmentId),
    metric_source: cdktf.stringToTerraform(struct!.metricSource),
    metric_type: cdktf.stringToTerraform(struct!.metricType),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    pending_duration: cdktf.stringToTerraform(struct!.pendingDuration),
    query: cdktf.stringToTerraform(struct!.query),
    resource_group: cdktf.stringToTerraform(struct!.resourceGroup),
    threshold: autoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdToTerraform(struct!.threshold),
  }
}


export function autoscalingAutoScalingConfigurationPoliciesRulesMetricToHclTerraform(struct?: AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference | AutoscalingAutoScalingConfigurationPoliciesRulesMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_compartment_id: {
      value: cdktf.stringToHclTerraform(struct!.metricCompartmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_source: {
      value: cdktf.stringToHclTerraform(struct!.metricSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_type: {
      value: cdktf.stringToHclTerraform(struct!.metricType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pending_duration: {
      value: cdktf.stringToHclTerraform(struct!.pendingDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_group: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: autoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdToHclTerraform(struct!.threshold),
      isBlock: true,
      type: "list",
      storageClassType: "AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutoscalingAutoScalingConfigurationPoliciesRulesMetric | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricCompartmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricCompartmentId = this._metricCompartmentId;
    }
    if (this._metricSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricSource = this._metricSource;
    }
    if (this._metricType !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricType = this._metricType;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._pendingDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.pendingDuration = this._pendingDuration;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._resourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroup = this._resourceGroup;
    }
    if (this._threshold?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalingAutoScalingConfigurationPoliciesRulesMetric | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricCompartmentId = undefined;
      this._metricSource = undefined;
      this._metricType = undefined;
      this._namespace = undefined;
      this._pendingDuration = undefined;
      this._query = undefined;
      this._resourceGroup = undefined;
      this._threshold.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricCompartmentId = value.metricCompartmentId;
      this._metricSource = value.metricSource;
      this._metricType = value.metricType;
      this._namespace = value.namespace;
      this._pendingDuration = value.pendingDuration;
      this._query = value.query;
      this._resourceGroup = value.resourceGroup;
      this._threshold.internalValue = value.threshold;
    }
  }

  // metric_compartment_id - computed: false, optional: true, required: false
  private _metricCompartmentId?: string; 
  public get metricCompartmentId() {
    return this.getStringAttribute('metric_compartment_id');
  }
  public set metricCompartmentId(value: string) {
    this._metricCompartmentId = value;
  }
  public resetMetricCompartmentId() {
    this._metricCompartmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricCompartmentIdInput() {
    return this._metricCompartmentId;
  }

  // metric_source - computed: false, optional: true, required: false
  private _metricSource?: string; 
  public get metricSource() {
    return this.getStringAttribute('metric_source');
  }
  public set metricSource(value: string) {
    this._metricSource = value;
  }
  public resetMetricSource() {
    this._metricSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricSourceInput() {
    return this._metricSource;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // pending_duration - computed: false, optional: true, required: false
  private _pendingDuration?: string; 
  public get pendingDuration() {
    return this.getStringAttribute('pending_duration');
  }
  public set pendingDuration(value: string) {
    this._pendingDuration = value;
  }
  public resetPendingDuration() {
    this._pendingDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pendingDurationInput() {
    return this._pendingDuration;
  }

  // query - computed: false, optional: true, required: false
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // resource_group - computed: false, optional: true, required: false
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  public resetResourceGroup() {
    this._resourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold = new AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference(this, "threshold");
  public get threshold() {
    return this._threshold;
  }
  public putThreshold(value: AutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold) {
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
export interface AutoscalingAutoScalingConfigurationPoliciesRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/autoscaling_auto_scaling_configuration#display_name AutoscalingAutoScalingConfiguration#display_name}
  */
  readonly displayName: string;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/autoscaling_auto_scaling_configuration#action AutoscalingAutoScalingConfiguration#action}
  */
  readonly action?: AutoscalingAutoScalingConfigurationPoliciesRulesAction;
  /**
  * metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/autoscaling_auto_scaling_configuration#metric AutoscalingAutoScalingConfiguration#metric}
  */
  readonly metric?: AutoscalingAutoScalingConfigurationPoliciesRulesMetric;
}

export function autoscalingAutoScalingConfigurationPoliciesRulesToTerraform(struct?: AutoscalingAutoScalingConfigurationPoliciesRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    action: autoscalingAutoScalingConfigurationPoliciesRulesActionToTerraform(struct!.action),
    metric: autoscalingAutoScalingConfigurationPoliciesRulesMetricToTerraform(struct!.metric),
  }
}


export function autoscalingAutoScalingConfigurationPoliciesRulesToHclTerraform(struct?: AutoscalingAutoScalingConfigurationPoliciesRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action: {
      value: autoscalingAutoScalingConfigurationPoliciesRulesActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "list",
      storageClassType: "AutoscalingAutoScalingConfigurationPoliciesRulesActionList",
    },
    metric: {
      value: autoscalingAutoScalingConfigurationPoliciesRulesMetricToHclTerraform(struct!.metric),
      isBlock: true,
      type: "list",
      storageClassType: "AutoscalingAutoScalingConfigurationPoliciesRulesMetricList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AutoscalingAutoScalingConfigurationPoliciesRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._metric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalingAutoScalingConfigurationPoliciesRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._action.internalValue = undefined;
      this._metric.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._action.internalValue = value.action;
      this._metric.internalValue = value.metric;
    }
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // action - computed: false, optional: true, required: false
  private _action = new AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: AutoscalingAutoScalingConfigurationPoliciesRulesAction) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // metric - computed: false, optional: true, required: false
  private _metric = new AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }
  public putMetric(value: AutoscalingAutoScalingConfigurationPoliciesRulesMetric) {
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

export class AutoscalingAutoScalingConfigurationPoliciesRulesList extends cdktf.ComplexList {
  public internalValue? : AutoscalingAutoScalingConfigurationPoliciesRules[] | cdktf.IResolvable

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
  public get(index: number): AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference {
    return new AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AutoscalingAutoScalingConfigurationPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/autoscaling_auto_scaling_configuration#display_name AutoscalingAutoScalingConfiguration#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/autoscaling_auto_scaling_configuration#is_enabled AutoscalingAutoScalingConfiguration#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/autoscaling_auto_scaling_configuration#policy_type AutoscalingAutoScalingConfiguration#policy_type}
  */
  readonly policyType: string;
  /**
  * capacity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/autoscaling_auto_scaling_configuration#capacity AutoscalingAutoScalingConfiguration#capacity}
  */
  readonly capacity?: AutoscalingAutoScalingConfigurationPoliciesCapacity;
  /**
  * execution_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/autoscaling_auto_scaling_configuration#execution_schedule AutoscalingAutoScalingConfiguration#execution_schedule}
  */
  readonly executionSchedule?: AutoscalingAutoScalingConfigurationPoliciesExecutionSchedule;
  /**
  * resource_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/autoscaling_auto_scaling_configuration#resource_action AutoscalingAutoScalingConfiguration#resource_action}
  */
  readonly resourceAction?: AutoscalingAutoScalingConfigurationPoliciesResourceAction;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/autoscaling_auto_scaling_configuration#rules AutoscalingAutoScalingConfiguration#rules}
  */
  readonly rules?: AutoscalingAutoScalingConfigurationPoliciesRules[] | cdktf.IResolvable;
}

export function autoscalingAutoScalingConfigurationPoliciesToTerraform(struct?: AutoscalingAutoScalingConfigurationPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    policy_type: cdktf.stringToTerraform(struct!.policyType),
    capacity: autoscalingAutoScalingConfigurationPoliciesCapacityToTerraform(struct!.capacity),
    execution_schedule: autoscalingAutoScalingConfigurationPoliciesExecutionScheduleToTerraform(struct!.executionSchedule),
    resource_action: autoscalingAutoScalingConfigurationPoliciesResourceActionToTerraform(struct!.resourceAction),
    rules: cdktf.listMapper(autoscalingAutoScalingConfigurationPoliciesRulesToTerraform, true)(struct!.rules),
  }
}


export function autoscalingAutoScalingConfigurationPoliciesToHclTerraform(struct?: AutoscalingAutoScalingConfigurationPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    policy_type: {
      value: cdktf.stringToHclTerraform(struct!.policyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    capacity: {
      value: autoscalingAutoScalingConfigurationPoliciesCapacityToHclTerraform(struct!.capacity),
      isBlock: true,
      type: "list",
      storageClassType: "AutoscalingAutoScalingConfigurationPoliciesCapacityList",
    },
    execution_schedule: {
      value: autoscalingAutoScalingConfigurationPoliciesExecutionScheduleToHclTerraform(struct!.executionSchedule),
      isBlock: true,
      type: "list",
      storageClassType: "AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList",
    },
    resource_action: {
      value: autoscalingAutoScalingConfigurationPoliciesResourceActionToHclTerraform(struct!.resourceAction),
      isBlock: true,
      type: "list",
      storageClassType: "AutoscalingAutoScalingConfigurationPoliciesResourceActionList",
    },
    rules: {
      value: cdktf.listMapperHcl(autoscalingAutoScalingConfigurationPoliciesRulesToHclTerraform, true)(struct!.rules),
      isBlock: true,
      type: "set",
      storageClassType: "AutoscalingAutoScalingConfigurationPoliciesRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutoscalingAutoScalingConfigurationPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AutoscalingAutoScalingConfigurationPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._policyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyType = this._policyType;
    }
    if (this._capacity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacity = this._capacity?.internalValue;
    }
    if (this._executionSchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionSchedule = this._executionSchedule?.internalValue;
    }
    if (this._resourceAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceAction = this._resourceAction?.internalValue;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalingAutoScalingConfigurationPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._isEnabled = undefined;
      this._policyType = undefined;
      this._capacity.internalValue = undefined;
      this._executionSchedule.internalValue = undefined;
      this._resourceAction.internalValue = undefined;
      this._rules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._isEnabled = value.isEnabled;
      this._policyType = value.policyType;
      this._capacity.internalValue = value.capacity;
      this._executionSchedule.internalValue = value.executionSchedule;
      this._resourceAction.internalValue = value.resourceAction;
      this._rules.internalValue = value.rules;
    }
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_enabled - computed: true, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
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

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // capacity - computed: false, optional: true, required: false
  private _capacity = new AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference(this, "capacity");
  public get capacity() {
    return this._capacity;
  }
  public putCapacity(value: AutoscalingAutoScalingConfigurationPoliciesCapacity) {
    this._capacity.internalValue = value;
  }
  public resetCapacity() {
    this._capacity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity.internalValue;
  }

  // execution_schedule - computed: false, optional: true, required: false
  private _executionSchedule = new AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference(this, "execution_schedule");
  public get executionSchedule() {
    return this._executionSchedule;
  }
  public putExecutionSchedule(value: AutoscalingAutoScalingConfigurationPoliciesExecutionSchedule) {
    this._executionSchedule.internalValue = value;
  }
  public resetExecutionSchedule() {
    this._executionSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionScheduleInput() {
    return this._executionSchedule.internalValue;
  }

  // resource_action - computed: false, optional: true, required: false
  private _resourceAction = new AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference(this, "resource_action");
  public get resourceAction() {
    return this._resourceAction;
  }
  public putResourceAction(value: AutoscalingAutoScalingConfigurationPoliciesResourceAction) {
    this._resourceAction.internalValue = value;
  }
  public resetResourceAction() {
    this._resourceAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceActionInput() {
    return this._resourceAction.internalValue;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new AutoscalingAutoScalingConfigurationPoliciesRulesList(this, "rules", true);
  public get rules() {
    return this._rules;
  }
  public putRules(value: AutoscalingAutoScalingConfigurationPoliciesRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}

export class AutoscalingAutoScalingConfigurationPoliciesList extends cdktf.ComplexList {
  public internalValue? : AutoscalingAutoScalingConfigurationPolicies[] | cdktf.IResolvable

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
  public get(index: number): AutoscalingAutoScalingConfigurationPoliciesOutputReference {
    return new AutoscalingAutoScalingConfigurationPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AutoscalingAutoScalingConfigurationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/autoscaling_auto_scaling_configuration#create AutoscalingAutoScalingConfiguration#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/autoscaling_auto_scaling_configuration#delete AutoscalingAutoScalingConfiguration#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/autoscaling_auto_scaling_configuration#update AutoscalingAutoScalingConfiguration#update}
  */
  readonly update?: string;
}

export function autoscalingAutoScalingConfigurationTimeoutsToTerraform(struct?: AutoscalingAutoScalingConfigurationTimeouts | cdktf.IResolvable): any {
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


export function autoscalingAutoScalingConfigurationTimeoutsToHclTerraform(struct?: AutoscalingAutoScalingConfigurationTimeouts | cdktf.IResolvable): any {
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

export class AutoscalingAutoScalingConfigurationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AutoscalingAutoScalingConfigurationTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AutoscalingAutoScalingConfigurationTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/autoscaling_auto_scaling_configuration oci_autoscaling_auto_scaling_configuration}
*/
export class AutoscalingAutoScalingConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_autoscaling_auto_scaling_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AutoscalingAutoScalingConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AutoscalingAutoScalingConfiguration to import
  * @param importFromId The id of the existing AutoscalingAutoScalingConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/autoscaling_auto_scaling_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AutoscalingAutoScalingConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_autoscaling_auto_scaling_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/autoscaling_auto_scaling_configuration oci_autoscaling_auto_scaling_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AutoscalingAutoScalingConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: AutoscalingAutoScalingConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_autoscaling_auto_scaling_configuration',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compartmentId = config.compartmentId;
    this._coolDownInSeconds = config.coolDownInSeconds;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._isEnabled = config.isEnabled;
    this._autoScalingResources.internalValue = config.autoScalingResources;
    this._policies.internalValue = config.policies;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // cool_down_in_seconds - computed: true, optional: true, required: false
  private _coolDownInSeconds?: number; 
  public get coolDownInSeconds() {
    return this.getNumberAttribute('cool_down_in_seconds');
  }
  public set coolDownInSeconds(value: number) {
    this._coolDownInSeconds = value;
  }
  public resetCoolDownInSeconds() {
    this._coolDownInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coolDownInSecondsInput() {
    return this._coolDownInSeconds;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
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

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // is_enabled - computed: true, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // max_resource_count - computed: true, optional: false, required: false
  public get maxResourceCount() {
    return this.getNumberAttribute('max_resource_count');
  }

  // min_resource_count - computed: true, optional: false, required: false
  public get minResourceCount() {
    return this.getNumberAttribute('min_resource_count');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // auto_scaling_resources - computed: false, optional: false, required: true
  private _autoScalingResources = new AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference(this, "auto_scaling_resources");
  public get autoScalingResources() {
    return this._autoScalingResources;
  }
  public putAutoScalingResources(value: AutoscalingAutoScalingConfigurationAutoScalingResources) {
    this._autoScalingResources.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalingResourcesInput() {
    return this._autoScalingResources.internalValue;
  }

  // policies - computed: false, optional: false, required: true
  private _policies = new AutoscalingAutoScalingConfigurationPoliciesList(this, "policies", false);
  public get policies() {
    return this._policies;
  }
  public putPolicies(value: AutoscalingAutoScalingConfigurationPolicies[] | cdktf.IResolvable) {
    this._policies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AutoscalingAutoScalingConfigurationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AutoscalingAutoScalingConfigurationTimeouts) {
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
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      cool_down_in_seconds: cdktf.numberToTerraform(this._coolDownInSeconds),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      is_enabled: cdktf.booleanToTerraform(this._isEnabled),
      auto_scaling_resources: autoscalingAutoScalingConfigurationAutoScalingResourcesToTerraform(this._autoScalingResources.internalValue),
      policies: cdktf.listMapper(autoscalingAutoScalingConfigurationPoliciesToTerraform, true)(this._policies.internalValue),
      timeouts: autoscalingAutoScalingConfigurationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cool_down_in_seconds: {
        value: cdktf.numberToHclTerraform(this._coolDownInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
      auto_scaling_resources: {
        value: autoscalingAutoScalingConfigurationAutoScalingResourcesToHclTerraform(this._autoScalingResources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AutoscalingAutoScalingConfigurationAutoScalingResourcesList",
      },
      policies: {
        value: cdktf.listMapperHcl(autoscalingAutoScalingConfigurationPoliciesToHclTerraform, true)(this._policies.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AutoscalingAutoScalingConfigurationPoliciesList",
      },
      timeouts: {
        value: autoscalingAutoScalingConfigurationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AutoscalingAutoScalingConfigurationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
