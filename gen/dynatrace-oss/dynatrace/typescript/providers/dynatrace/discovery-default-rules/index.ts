// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/discovery_default_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DiscoveryDefaultRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/discovery_default_rules#id DiscoveryDefaultRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/discovery_default_rules#rule DiscoveryDefaultRules#rule}
  */
  readonly rule: DiscoveryDefaultRulesRule;
  /**
  * settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/discovery_default_rules#settings DiscoveryDefaultRules#settings}
  */
  readonly settings: DiscoveryDefaultRulesSettings;
}
export interface DiscoveryDefaultRulesRuleActionsActionParametersParameter {
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/discovery_default_rules#name DiscoveryDefaultRules#name}
  */
  readonly name: string;
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/discovery_default_rules#value DiscoveryDefaultRules#value}
  */
  readonly value: string;
}

export function discoveryDefaultRulesRuleActionsActionParametersParameterToTerraform(struct?: DiscoveryDefaultRulesRuleActionsActionParametersParameter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function discoveryDefaultRulesRuleActionsActionParametersParameterToHclTerraform(struct?: DiscoveryDefaultRulesRuleActionsActionParametersParameter | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryDefaultRulesRuleActionsActionParametersParameterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DiscoveryDefaultRulesRuleActionsActionParametersParameter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryDefaultRulesRuleActionsActionParametersParameter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DiscoveryDefaultRulesRuleActionsActionParametersParameterList extends cdktf.ComplexList {
  public internalValue? : DiscoveryDefaultRulesRuleActionsActionParametersParameter[] | cdktf.IResolvable

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
  public get(index: number): DiscoveryDefaultRulesRuleActionsActionParametersParameterOutputReference {
    return new DiscoveryDefaultRulesRuleActionsActionParametersParameterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DiscoveryDefaultRulesRuleActionsActionParameters {
  /**
  * parameter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/discovery_default_rules#parameter DiscoveryDefaultRules#parameter}
  */
  readonly parameter: DiscoveryDefaultRulesRuleActionsActionParametersParameter[] | cdktf.IResolvable;
}

export function discoveryDefaultRulesRuleActionsActionParametersToTerraform(struct?: DiscoveryDefaultRulesRuleActionsActionParametersOutputReference | DiscoveryDefaultRulesRuleActionsActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameter: cdktf.listMapper(discoveryDefaultRulesRuleActionsActionParametersParameterToTerraform, true)(struct!.parameter),
  }
}


export function discoveryDefaultRulesRuleActionsActionParametersToHclTerraform(struct?: DiscoveryDefaultRulesRuleActionsActionParametersOutputReference | DiscoveryDefaultRulesRuleActionsActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parameter: {
      value: cdktf.listMapperHcl(discoveryDefaultRulesRuleActionsActionParametersParameterToHclTerraform, true)(struct!.parameter),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDefaultRulesRuleActionsActionParametersParameterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryDefaultRulesRuleActionsActionParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDefaultRulesRuleActionsActionParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameter = this._parameter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryDefaultRulesRuleActionsActionParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._parameter.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._parameter.internalValue = value.parameter;
    }
  }

  // parameter - computed: false, optional: false, required: true
  private _parameter = new DiscoveryDefaultRulesRuleActionsActionParametersParameterList(this, "parameter", false);
  public get parameter() {
    return this._parameter;
  }
  public putParameter(value: DiscoveryDefaultRulesRuleActionsActionParametersParameter[] | cdktf.IResolvable) {
    this._parameter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterInput() {
    return this._parameter.internalValue;
  }
}
export interface DiscoveryDefaultRulesRuleActionsAction {
  /**
  * Instant action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/discovery_default_rules#instant_action DiscoveryDefaultRules#instant_action}
  */
  readonly instantAction?: boolean | cdktf.IResolvable;
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/discovery_default_rules#name DiscoveryDefaultRules#name}
  */
  readonly name: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/discovery_default_rules#parameters DiscoveryDefaultRules#parameters}
  */
  readonly parameters?: DiscoveryDefaultRulesRuleActionsActionParameters;
}

export function discoveryDefaultRulesRuleActionsActionToTerraform(struct?: DiscoveryDefaultRulesRuleActionsAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instant_action: cdktf.booleanToTerraform(struct!.instantAction),
    name: cdktf.stringToTerraform(struct!.name),
    parameters: discoveryDefaultRulesRuleActionsActionParametersToTerraform(struct!.parameters),
  }
}


export function discoveryDefaultRulesRuleActionsActionToHclTerraform(struct?: DiscoveryDefaultRulesRuleActionsAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instant_action: {
      value: cdktf.booleanToHclTerraform(struct!.instantAction),
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
    parameters: {
      value: discoveryDefaultRulesRuleActionsActionParametersToHclTerraform(struct!.parameters),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDefaultRulesRuleActionsActionParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryDefaultRulesRuleActionsActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DiscoveryDefaultRulesRuleActionsAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instantAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.instantAction = this._instantAction;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryDefaultRulesRuleActionsAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instantAction = undefined;
      this._name = undefined;
      this._parameters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instantAction = value.instantAction;
      this._name = value.name;
      this._parameters.internalValue = value.parameters;
    }
  }

  // instant_action - computed: false, optional: true, required: false
  private _instantAction?: boolean | cdktf.IResolvable; 
  public get instantAction() {
    return this.getBooleanAttribute('instant_action');
  }
  public set instantAction(value: boolean | cdktf.IResolvable) {
    this._instantAction = value;
  }
  public resetInstantAction() {
    this._instantAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instantActionInput() {
    return this._instantAction;
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

  // parameters - computed: false, optional: true, required: false
  private _parameters = new DiscoveryDefaultRulesRuleActionsActionParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: DiscoveryDefaultRulesRuleActionsActionParameters) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }
}

export class DiscoveryDefaultRulesRuleActionsActionList extends cdktf.ComplexList {
  public internalValue? : DiscoveryDefaultRulesRuleActionsAction[] | cdktf.IResolvable

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
  public get(index: number): DiscoveryDefaultRulesRuleActionsActionOutputReference {
    return new DiscoveryDefaultRulesRuleActionsActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DiscoveryDefaultRulesRuleActions {
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/discovery_default_rules#action DiscoveryDefaultRules#action}
  */
  readonly action: DiscoveryDefaultRulesRuleActionsAction[] | cdktf.IResolvable;
}

export function discoveryDefaultRulesRuleActionsToTerraform(struct?: DiscoveryDefaultRulesRuleActionsOutputReference | DiscoveryDefaultRulesRuleActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.listMapper(discoveryDefaultRulesRuleActionsActionToTerraform, true)(struct!.action),
  }
}


export function discoveryDefaultRulesRuleActionsToHclTerraform(struct?: DiscoveryDefaultRulesRuleActionsOutputReference | DiscoveryDefaultRulesRuleActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.listMapperHcl(discoveryDefaultRulesRuleActionsActionToHclTerraform, true)(struct!.action),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDefaultRulesRuleActionsActionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryDefaultRulesRuleActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDefaultRulesRuleActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryDefaultRulesRuleActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action.internalValue = value.action;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action = new DiscoveryDefaultRulesRuleActionsActionList(this, "action", false);
  public get action() {
    return this._action;
  }
  public putAction(value: DiscoveryDefaultRulesRuleActionsAction[] | cdktf.IResolvable) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }
}
export interface DiscoveryDefaultRulesRule {
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/discovery_default_rules#category DiscoveryDefaultRules#category}
  */
  readonly category: string;
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/discovery_default_rules#description DiscoveryDefaultRules#description}
  */
  readonly description: string;
  /**
  * Environment scope
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/discovery_default_rules#environment_scope DiscoveryDefaultRules#environment_scope}
  */
  readonly environmentScope: boolean | cdktf.IResolvable;
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/discovery_default_rules#id DiscoveryDefaultRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/discovery_default_rules#priority DiscoveryDefaultRules#priority}
  */
  readonly priority: string;
  /**
  * Rule query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/discovery_default_rules#query DiscoveryDefaultRules#query}
  */
  readonly query: string;
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/discovery_default_rules#title DiscoveryDefaultRules#title}
  */
  readonly title: string;
  /**
  * Zero rated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/discovery_default_rules#zero_rated DiscoveryDefaultRules#zero_rated}
  */
  readonly zeroRated?: boolean | cdktf.IResolvable;
  /**
  * actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/discovery_default_rules#actions DiscoveryDefaultRules#actions}
  */
  readonly actions?: DiscoveryDefaultRulesRuleActions;
}

export function discoveryDefaultRulesRuleToTerraform(struct?: DiscoveryDefaultRulesRuleOutputReference | DiscoveryDefaultRulesRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category: cdktf.stringToTerraform(struct!.category),
    description: cdktf.stringToTerraform(struct!.description),
    environment_scope: cdktf.booleanToTerraform(struct!.environmentScope),
    id: cdktf.stringToTerraform(struct!.id),
    priority: cdktf.stringToTerraform(struct!.priority),
    query: cdktf.stringToTerraform(struct!.query),
    title: cdktf.stringToTerraform(struct!.title),
    zero_rated: cdktf.booleanToTerraform(struct!.zeroRated),
    actions: discoveryDefaultRulesRuleActionsToTerraform(struct!.actions),
  }
}


export function discoveryDefaultRulesRuleToHclTerraform(struct?: DiscoveryDefaultRulesRuleOutputReference | DiscoveryDefaultRulesRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    category: {
      value: cdktf.stringToHclTerraform(struct!.category),
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
    environment_scope: {
      value: cdktf.booleanToHclTerraform(struct!.environmentScope),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.stringToHclTerraform(struct!.priority),
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
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zero_rated: {
      value: cdktf.booleanToHclTerraform(struct!.zeroRated),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    actions: {
      value: discoveryDefaultRulesRuleActionsToHclTerraform(struct!.actions),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDefaultRulesRuleActionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryDefaultRulesRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDefaultRulesRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._environmentScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentScope = this._environmentScope;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._zeroRated !== undefined) {
      hasAnyValues = true;
      internalValueResult.zeroRated = this._zeroRated;
    }
    if (this._actions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryDefaultRulesRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._category = undefined;
      this._description = undefined;
      this._environmentScope = undefined;
      this._id = undefined;
      this._priority = undefined;
      this._query = undefined;
      this._title = undefined;
      this._zeroRated = undefined;
      this._actions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._category = value.category;
      this._description = value.description;
      this._environmentScope = value.environmentScope;
      this._id = value.id;
      this._priority = value.priority;
      this._query = value.query;
      this._title = value.title;
      this._zeroRated = value.zeroRated;
      this._actions.internalValue = value.actions;
    }
  }

  // category - computed: false, optional: false, required: true
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // environment_scope - computed: false, optional: false, required: true
  private _environmentScope?: boolean | cdktf.IResolvable; 
  public get environmentScope() {
    return this.getBooleanAttribute('environment_scope');
  }
  public set environmentScope(value: boolean | cdktf.IResolvable) {
    this._environmentScope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentScopeInput() {
    return this._environmentScope;
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

  // priority - computed: false, optional: false, required: true
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // zero_rated - computed: false, optional: true, required: false
  private _zeroRated?: boolean | cdktf.IResolvable; 
  public get zeroRated() {
    return this.getBooleanAttribute('zero_rated');
  }
  public set zeroRated(value: boolean | cdktf.IResolvable) {
    this._zeroRated = value;
  }
  public resetZeroRated() {
    this._zeroRated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zeroRatedInput() {
    return this._zeroRated;
  }

  // actions - computed: false, optional: true, required: false
  private _actions = new DiscoveryDefaultRulesRuleActionsOutputReference(this, "actions");
  public get actions() {
    return this._actions;
  }
  public putActions(value: DiscoveryDefaultRulesRuleActions) {
    this._actions.internalValue = value;
  }
  public resetActions() {
    this._actions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }
}
export interface DiscoveryDefaultRulesSettings {
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/discovery_default_rules#muted DiscoveryDefaultRules#muted}
  */
  readonly muted: boolean | cdktf.IResolvable;
}

export function discoveryDefaultRulesSettingsToTerraform(struct?: DiscoveryDefaultRulesSettingsOutputReference | DiscoveryDefaultRulesSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    muted: cdktf.booleanToTerraform(struct!.muted),
  }
}


export function discoveryDefaultRulesSettingsToHclTerraform(struct?: DiscoveryDefaultRulesSettingsOutputReference | DiscoveryDefaultRulesSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    muted: {
      value: cdktf.booleanToHclTerraform(struct!.muted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryDefaultRulesSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDefaultRulesSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._muted !== undefined) {
      hasAnyValues = true;
      internalValueResult.muted = this._muted;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryDefaultRulesSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._muted = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._muted = value.muted;
    }
  }

  // muted - computed: false, optional: false, required: true
  private _muted?: boolean | cdktf.IResolvable; 
  public get muted() {
    return this.getBooleanAttribute('muted');
  }
  public set muted(value: boolean | cdktf.IResolvable) {
    this._muted = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mutedInput() {
    return this._muted;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/discovery_default_rules dynatrace_discovery_default_rules}
*/
export class DiscoveryDefaultRules extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_discovery_default_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DiscoveryDefaultRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DiscoveryDefaultRules to import
  * @param importFromId The id of the existing DiscoveryDefaultRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/discovery_default_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DiscoveryDefaultRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_discovery_default_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/discovery_default_rules dynatrace_discovery_default_rules} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DiscoveryDefaultRulesConfig
  */
  public constructor(scope: Construct, id: string, config: DiscoveryDefaultRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_discovery_default_rules',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.88.0',
        providerVersionConstraint: '1.88.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._rule.internalValue = config.rule;
    this._settings.internalValue = config.settings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // rule - computed: false, optional: false, required: true
  private _rule = new DiscoveryDefaultRulesRuleOutputReference(this, "rule");
  public get rule() {
    return this._rule;
  }
  public putRule(value: DiscoveryDefaultRulesRule) {
    this._rule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // settings - computed: false, optional: false, required: true
  private _settings = new DiscoveryDefaultRulesSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: DiscoveryDefaultRulesSettings) {
    this._settings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      rule: discoveryDefaultRulesRuleToTerraform(this._rule.internalValue),
      settings: discoveryDefaultRulesSettingsToTerraform(this._settings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule: {
        value: discoveryDefaultRulesRuleToHclTerraform(this._rule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DiscoveryDefaultRulesRuleList",
      },
      settings: {
        value: discoveryDefaultRulesSettingsToHclTerraform(this._settings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DiscoveryDefaultRulesSettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
