// https://registry.terraform.io/providers/fastly/fastly/8.5.0/docs/resources/ngwaf_account_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NgwafAccountRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The list of workspace IDs this signal applies to, or the wildcard `*` if it applies to all workspaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.5.0/docs/resources/ngwaf_account_rule#applies_to NgwafAccountRule#applies_to}
  */
  readonly appliesTo: string[];
  /**
  * The description of the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.5.0/docs/resources/ngwaf_account_rule#description NgwafAccountRule#description}
  */
  readonly description: string;
  /**
  * Whether the rule is currently enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.5.0/docs/resources/ngwaf_account_rule#enabled NgwafAccountRule#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Logical operator to apply to group conditions. Accepted values are `any` and `all`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.5.0/docs/resources/ngwaf_account_rule#group_operator NgwafAccountRule#group_operator}
  */
  readonly groupOperator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.5.0/docs/resources/ngwaf_account_rule#id NgwafAccountRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Logging behavior for matching requests. Accepted values are `sampled` and `none`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.5.0/docs/resources/ngwaf_account_rule#request_logging NgwafAccountRule#request_logging}
  */
  readonly requestLogging?: string;
  /**
  * The type of the rule. Accepted values are `request` and `signal`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.5.0/docs/resources/ngwaf_account_rule#type NgwafAccountRule#type}
  */
  readonly type: string;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.5.0/docs/resources/ngwaf_account_rule#action NgwafAccountRule#action}
  */
  readonly action: NgwafAccountRuleAction[] | cdktf.IResolvable;
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.5.0/docs/resources/ngwaf_account_rule#condition NgwafAccountRule#condition}
  */
  readonly condition?: NgwafAccountRuleCondition[] | cdktf.IResolvable;
  /**
  * group_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.5.0/docs/resources/ngwaf_account_rule#group_condition NgwafAccountRule#group_condition}
  */
  readonly groupCondition?: NgwafAccountRuleGroupCondition[] | cdktf.IResolvable;
  /**
  * multival_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.5.0/docs/resources/ngwaf_account_rule#multival_condition NgwafAccountRule#multival_condition}
  */
  readonly multivalCondition?: NgwafAccountRuleMultivalCondition[] | cdktf.IResolvable;
}
export interface NgwafAccountRuleAction {
  /**
  * Signal name to exclude (used when `type = exclude_signal`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.5.0/docs/resources/ngwaf_account_rule#signal NgwafAccountRule#signal}
  */
  readonly signal?: string;
  /**
  * The action type. One of: `add_signal`, `allow`, `block`, `browser_challenge`, `dynamic_challenge`, `exclude_signal`, `verify_token` or for rate limit rule valid values: `log_request`, `block_signal`, `browser_challenge`, `verify_token`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.5.0/docs/resources/ngwaf_account_rule#type NgwafAccountRule#type}
  */
  readonly type: string;
}

export function ngwafAccountRuleActionToTerraform(struct?: NgwafAccountRuleAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    signal: cdktf.stringToTerraform(struct!.signal),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function ngwafAccountRuleActionToHclTerraform(struct?: NgwafAccountRuleAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    signal: {
      value: cdktf.stringToHclTerraform(struct!.signal),
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

export class NgwafAccountRuleActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NgwafAccountRuleAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._signal !== undefined) {
      hasAnyValues = true;
      internalValueResult.signal = this._signal;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NgwafAccountRuleAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._signal = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._signal = value.signal;
      this._type = value.type;
    }
  }

  // signal - computed: false, optional: true, required: false
  private _signal?: string; 
  public get signal() {
    return this.getStringAttribute('signal');
  }
  public set signal(value: string) {
    this._signal = value;
  }
  public resetSignal() {
    this._signal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signalInput() {
    return this._signal;
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

export class NgwafAccountRuleActionList extends cdktf.ComplexList {
  public internalValue? : NgwafAccountRuleAction[] | cdktf.IResolvable

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
  public get(index: number): NgwafAccountRuleActionOutputReference {
    return new NgwafAccountRuleActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NgwafAccountRuleCondition {
  /**
  * Field to inspect (e.g., `ip`, `path`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.5.0/docs/resources/ngwaf_account_rule#field NgwafAccountRule#field}
  */
  readonly field: string;
  /**
  * Operator to apply (e.g., `equals`, `contains`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.5.0/docs/resources/ngwaf_account_rule#operator NgwafAccountRule#operator}
  */
  readonly operator: string;
  /**
  * The value to test the field against.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.5.0/docs/resources/ngwaf_account_rule#value NgwafAccountRule#value}
  */
  readonly value: string;
}

export function ngwafAccountRuleConditionToTerraform(struct?: NgwafAccountRuleCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function ngwafAccountRuleConditionToHclTerraform(struct?: NgwafAccountRuleCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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

export class NgwafAccountRuleConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NgwafAccountRuleCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
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

  public set internalValue(value: NgwafAccountRuleCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._operator = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._operator = value.operator;
      this._value = value.value;
    }
  }

  // field - computed: false, optional: false, required: true
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
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

export class NgwafAccountRuleConditionList extends cdktf.ComplexList {
  public internalValue? : NgwafAccountRuleCondition[] | cdktf.IResolvable

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
  public get(index: number): NgwafAccountRuleConditionOutputReference {
    return new NgwafAccountRuleConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NgwafAccountRuleGroupConditionCondition {
  /**
  * Field to inspect (e.g., `ip`, `path`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.5.0/docs/resources/ngwaf_account_rule#field NgwafAccountRule#field}
  */
  readonly field: string;
  /**
  * Operator to apply (e.g., `equals`, `contains`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.5.0/docs/resources/ngwaf_account_rule#operator NgwafAccountRule#operator}
  */
  readonly operator: string;
  /**
  * The value to test the field against.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.5.0/docs/resources/ngwaf_account_rule#value NgwafAccountRule#value}
  */
  readonly value: string;
}

export function ngwafAccountRuleGroupConditionConditionToTerraform(struct?: NgwafAccountRuleGroupConditionCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function ngwafAccountRuleGroupConditionConditionToHclTerraform(struct?: NgwafAccountRuleGroupConditionCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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

export class NgwafAccountRuleGroupConditionConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NgwafAccountRuleGroupConditionCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
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

  public set internalValue(value: NgwafAccountRuleGroupConditionCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._operator = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._operator = value.operator;
      this._value = value.value;
    }
  }

  // field - computed: false, optional: false, required: true
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
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

export class NgwafAccountRuleGroupConditionConditionList extends cdktf.ComplexList {
  public internalValue? : NgwafAccountRuleGroupConditionCondition[] | cdktf.IResolvable

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
  public get(index: number): NgwafAccountRuleGroupConditionConditionOutputReference {
    return new NgwafAccountRuleGroupConditionConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NgwafAccountRuleGroupCondition {
  /**
  * Logical operator for the group. Accepted values are `any` and `all`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.5.0/docs/resources/ngwaf_account_rule#group_operator NgwafAccountRule#group_operator}
  */
  readonly groupOperator: string;
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.5.0/docs/resources/ngwaf_account_rule#condition NgwafAccountRule#condition}
  */
  readonly condition: NgwafAccountRuleGroupConditionCondition[] | cdktf.IResolvable;
}

export function ngwafAccountRuleGroupConditionToTerraform(struct?: NgwafAccountRuleGroupCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_operator: cdktf.stringToTerraform(struct!.groupOperator),
    condition: cdktf.listMapper(ngwafAccountRuleGroupConditionConditionToTerraform, true)(struct!.condition),
  }
}


export function ngwafAccountRuleGroupConditionToHclTerraform(struct?: NgwafAccountRuleGroupCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_operator: {
      value: cdktf.stringToHclTerraform(struct!.groupOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    condition: {
      value: cdktf.listMapperHcl(ngwafAccountRuleGroupConditionConditionToHclTerraform, true)(struct!.condition),
      isBlock: true,
      type: "list",
      storageClassType: "NgwafAccountRuleGroupConditionConditionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NgwafAccountRuleGroupConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NgwafAccountRuleGroupCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupOperator = this._groupOperator;
    }
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NgwafAccountRuleGroupCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupOperator = undefined;
      this._condition.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupOperator = value.groupOperator;
      this._condition.internalValue = value.condition;
    }
  }

  // group_operator - computed: false, optional: false, required: true
  private _groupOperator?: string; 
  public get groupOperator() {
    return this.getStringAttribute('group_operator');
  }
  public set groupOperator(value: string) {
    this._groupOperator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupOperatorInput() {
    return this._groupOperator;
  }

  // condition - computed: false, optional: false, required: true
  private _condition = new NgwafAccountRuleGroupConditionConditionList(this, "condition", false);
  public get condition() {
    return this._condition;
  }
  public putCondition(value: NgwafAccountRuleGroupConditionCondition[] | cdktf.IResolvable) {
    this._condition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }
}

export class NgwafAccountRuleGroupConditionList extends cdktf.ComplexList {
  public internalValue? : NgwafAccountRuleGroupCondition[] | cdktf.IResolvable

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
  public get(index: number): NgwafAccountRuleGroupConditionOutputReference {
    return new NgwafAccountRuleGroupConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NgwafAccountRuleMultivalConditionCondition {
  /**
  * Field to inspect (e.g., `name`, `value`, `signal_id`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.5.0/docs/resources/ngwaf_account_rule#field NgwafAccountRule#field}
  */
  readonly field: string;
  /**
  * Operator to apply (e.g., `equals`, `contains`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.5.0/docs/resources/ngwaf_account_rule#operator NgwafAccountRule#operator}
  */
  readonly operator: string;
  /**
  * The value to test the field against.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.5.0/docs/resources/ngwaf_account_rule#value NgwafAccountRule#value}
  */
  readonly value: string;
}

export function ngwafAccountRuleMultivalConditionConditionToTerraform(struct?: NgwafAccountRuleMultivalConditionCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function ngwafAccountRuleMultivalConditionConditionToHclTerraform(struct?: NgwafAccountRuleMultivalConditionCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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

export class NgwafAccountRuleMultivalConditionConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NgwafAccountRuleMultivalConditionCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
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

  public set internalValue(value: NgwafAccountRuleMultivalConditionCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._operator = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._operator = value.operator;
      this._value = value.value;
    }
  }

  // field - computed: false, optional: false, required: true
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
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

export class NgwafAccountRuleMultivalConditionConditionList extends cdktf.ComplexList {
  public internalValue? : NgwafAccountRuleMultivalConditionCondition[] | cdktf.IResolvable

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
  public get(index: number): NgwafAccountRuleMultivalConditionConditionOutputReference {
    return new NgwafAccountRuleMultivalConditionConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NgwafAccountRuleMultivalCondition {
  /**
  * Enums for multival condition field.. Accepted values are `post_parameter`, `query_parameter`, `request_cookie`, `request_header`, `response_header`, and `signal`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.5.0/docs/resources/ngwaf_account_rule#field NgwafAccountRule#field}
  */
  readonly field: string;
  /**
  * Logical operator for the group. Accepted values are `any` and `all`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.5.0/docs/resources/ngwaf_account_rule#group_operator NgwafAccountRule#group_operator}
  */
  readonly groupOperator: string;
  /**
  * Indicates whether the supplied conditions will check for existence or non-existence of matching field values. Accepted values are `exists` and `does_not_exist`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.5.0/docs/resources/ngwaf_account_rule#operator NgwafAccountRule#operator}
  */
  readonly operator: string;
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.5.0/docs/resources/ngwaf_account_rule#condition NgwafAccountRule#condition}
  */
  readonly condition: NgwafAccountRuleMultivalConditionCondition[] | cdktf.IResolvable;
}

export function ngwafAccountRuleMultivalConditionToTerraform(struct?: NgwafAccountRuleMultivalCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    group_operator: cdktf.stringToTerraform(struct!.groupOperator),
    operator: cdktf.stringToTerraform(struct!.operator),
    condition: cdktf.listMapper(ngwafAccountRuleMultivalConditionConditionToTerraform, true)(struct!.condition),
  }
}


export function ngwafAccountRuleMultivalConditionToHclTerraform(struct?: NgwafAccountRuleMultivalCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_operator: {
      value: cdktf.stringToHclTerraform(struct!.groupOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    condition: {
      value: cdktf.listMapperHcl(ngwafAccountRuleMultivalConditionConditionToHclTerraform, true)(struct!.condition),
      isBlock: true,
      type: "list",
      storageClassType: "NgwafAccountRuleMultivalConditionConditionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NgwafAccountRuleMultivalConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NgwafAccountRuleMultivalCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._groupOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupOperator = this._groupOperator;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NgwafAccountRuleMultivalCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._groupOperator = undefined;
      this._operator = undefined;
      this._condition.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._groupOperator = value.groupOperator;
      this._operator = value.operator;
      this._condition.internalValue = value.condition;
    }
  }

  // field - computed: false, optional: false, required: true
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // group_operator - computed: false, optional: false, required: true
  private _groupOperator?: string; 
  public get groupOperator() {
    return this.getStringAttribute('group_operator');
  }
  public set groupOperator(value: string) {
    this._groupOperator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupOperatorInput() {
    return this._groupOperator;
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

  // condition - computed: false, optional: false, required: true
  private _condition = new NgwafAccountRuleMultivalConditionConditionList(this, "condition", false);
  public get condition() {
    return this._condition;
  }
  public putCondition(value: NgwafAccountRuleMultivalConditionCondition[] | cdktf.IResolvable) {
    this._condition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }
}

export class NgwafAccountRuleMultivalConditionList extends cdktf.ComplexList {
  public internalValue? : NgwafAccountRuleMultivalCondition[] | cdktf.IResolvable

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
  public get(index: number): NgwafAccountRuleMultivalConditionOutputReference {
    return new NgwafAccountRuleMultivalConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fastly/fastly/8.5.0/docs/resources/ngwaf_account_rule fastly_ngwaf_account_rule}
*/
export class NgwafAccountRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fastly_ngwaf_account_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NgwafAccountRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NgwafAccountRule to import
  * @param importFromId The id of the existing NgwafAccountRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/fastly/fastly/8.5.0/docs/resources/ngwaf_account_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NgwafAccountRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fastly_ngwaf_account_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fastly/fastly/8.5.0/docs/resources/ngwaf_account_rule fastly_ngwaf_account_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NgwafAccountRuleConfig
  */
  public constructor(scope: Construct, id: string, config: NgwafAccountRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'fastly_ngwaf_account_rule',
      terraformGeneratorMetadata: {
        providerName: 'fastly',
        providerVersion: '8.5.0',
        providerVersionConstraint: '8.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appliesTo = config.appliesTo;
    this._description = config.description;
    this._enabled = config.enabled;
    this._groupOperator = config.groupOperator;
    this._id = config.id;
    this._requestLogging = config.requestLogging;
    this._type = config.type;
    this._action.internalValue = config.action;
    this._condition.internalValue = config.condition;
    this._groupCondition.internalValue = config.groupCondition;
    this._multivalCondition.internalValue = config.multivalCondition;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // applies_to - computed: false, optional: false, required: true
  private _appliesTo?: string[]; 
  public get appliesTo() {
    return this.getListAttribute('applies_to');
  }
  public set appliesTo(value: string[]) {
    this._appliesTo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appliesToInput() {
    return this._appliesTo;
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

  // group_operator - computed: false, optional: true, required: false
  private _groupOperator?: string; 
  public get groupOperator() {
    return this.getStringAttribute('group_operator');
  }
  public set groupOperator(value: string) {
    this._groupOperator = value;
  }
  public resetGroupOperator() {
    this._groupOperator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupOperatorInput() {
    return this._groupOperator;
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

  // request_logging - computed: false, optional: true, required: false
  private _requestLogging?: string; 
  public get requestLogging() {
    return this.getStringAttribute('request_logging');
  }
  public set requestLogging(value: string) {
    this._requestLogging = value;
  }
  public resetRequestLogging() {
    this._requestLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestLoggingInput() {
    return this._requestLogging;
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

  // action - computed: false, optional: false, required: true
  private _action = new NgwafAccountRuleActionList(this, "action", false);
  public get action() {
    return this._action;
  }
  public putAction(value: NgwafAccountRuleAction[] | cdktf.IResolvable) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // condition - computed: false, optional: true, required: false
  private _condition = new NgwafAccountRuleConditionList(this, "condition", false);
  public get condition() {
    return this._condition;
  }
  public putCondition(value: NgwafAccountRuleCondition[] | cdktf.IResolvable) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // group_condition - computed: false, optional: true, required: false
  private _groupCondition = new NgwafAccountRuleGroupConditionList(this, "group_condition", false);
  public get groupCondition() {
    return this._groupCondition;
  }
  public putGroupCondition(value: NgwafAccountRuleGroupCondition[] | cdktf.IResolvable) {
    this._groupCondition.internalValue = value;
  }
  public resetGroupCondition() {
    this._groupCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupConditionInput() {
    return this._groupCondition.internalValue;
  }

  // multival_condition - computed: false, optional: true, required: false
  private _multivalCondition = new NgwafAccountRuleMultivalConditionList(this, "multival_condition", false);
  public get multivalCondition() {
    return this._multivalCondition;
  }
  public putMultivalCondition(value: NgwafAccountRuleMultivalCondition[] | cdktf.IResolvable) {
    this._multivalCondition.internalValue = value;
  }
  public resetMultivalCondition() {
    this._multivalCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multivalConditionInput() {
    return this._multivalCondition.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      applies_to: cdktf.listMapper(cdktf.stringToTerraform, false)(this._appliesTo),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      group_operator: cdktf.stringToTerraform(this._groupOperator),
      id: cdktf.stringToTerraform(this._id),
      request_logging: cdktf.stringToTerraform(this._requestLogging),
      type: cdktf.stringToTerraform(this._type),
      action: cdktf.listMapper(ngwafAccountRuleActionToTerraform, true)(this._action.internalValue),
      condition: cdktf.listMapper(ngwafAccountRuleConditionToTerraform, true)(this._condition.internalValue),
      group_condition: cdktf.listMapper(ngwafAccountRuleGroupConditionToTerraform, true)(this._groupCondition.internalValue),
      multival_condition: cdktf.listMapper(ngwafAccountRuleMultivalConditionToTerraform, true)(this._multivalCondition.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      applies_to: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._appliesTo),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      group_operator: {
        value: cdktf.stringToHclTerraform(this._groupOperator),
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
      request_logging: {
        value: cdktf.stringToHclTerraform(this._requestLogging),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action: {
        value: cdktf.listMapperHcl(ngwafAccountRuleActionToHclTerraform, true)(this._action.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NgwafAccountRuleActionList",
      },
      condition: {
        value: cdktf.listMapperHcl(ngwafAccountRuleConditionToHclTerraform, true)(this._condition.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NgwafAccountRuleConditionList",
      },
      group_condition: {
        value: cdktf.listMapperHcl(ngwafAccountRuleGroupConditionToHclTerraform, true)(this._groupCondition.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NgwafAccountRuleGroupConditionList",
      },
      multival_condition: {
        value: cdktf.listMapperHcl(ngwafAccountRuleMultivalConditionToHclTerraform, true)(this._multivalCondition.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NgwafAccountRuleMultivalConditionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
