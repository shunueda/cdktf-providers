// https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/ngwaf_workspace_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NgwafWorkspaceRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/ngwaf_workspace_rule#description NgwafWorkspaceRule#description}
  */
  readonly description: string;
  /**
  * Whether the rule is currently enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/ngwaf_workspace_rule#enabled NgwafWorkspaceRule#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Logical operator to apply to group conditions. Accepted values are `any` and `all`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/ngwaf_workspace_rule#group_operator NgwafWorkspaceRule#group_operator}
  */
  readonly groupOperator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/ngwaf_workspace_rule#id NgwafWorkspaceRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Logging behavior for matching requests. Accepted values are `sampled` and `none`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/ngwaf_workspace_rule#request_logging NgwafWorkspaceRule#request_logging}
  */
  readonly requestLogging?: string;
  /**
  * The type of the rule. Accepted values are `request`, `signal`, `rate_limit`, and `templated_signal`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/ngwaf_workspace_rule#type NgwafWorkspaceRule#type}
  */
  readonly type: string;
  /**
  * The ID of the workspace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/ngwaf_workspace_rule#workspace_id NgwafWorkspaceRule#workspace_id}
  */
  readonly workspaceId: string;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/ngwaf_workspace_rule#action NgwafWorkspaceRule#action}
  */
  readonly action: NgwafWorkspaceRuleAction[] | cdktf.IResolvable;
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/ngwaf_workspace_rule#condition NgwafWorkspaceRule#condition}
  */
  readonly condition?: NgwafWorkspaceRuleCondition[] | cdktf.IResolvable;
  /**
  * group_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/ngwaf_workspace_rule#group_condition NgwafWorkspaceRule#group_condition}
  */
  readonly groupCondition?: NgwafWorkspaceRuleGroupCondition[] | cdktf.IResolvable;
  /**
  * multival_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/ngwaf_workspace_rule#multival_condition NgwafWorkspaceRule#multival_condition}
  */
  readonly multivalCondition?: NgwafWorkspaceRuleMultivalCondition[] | cdktf.IResolvable;
  /**
  * rate_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/ngwaf_workspace_rule#rate_limit NgwafWorkspaceRule#rate_limit}
  */
  readonly rateLimit?: NgwafWorkspaceRuleRateLimit;
}
export interface NgwafWorkspaceRuleAction {
  /**
  * Specifies if interaction is allowed (used when `type = browser_challenge`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/ngwaf_workspace_rule#allow_interactive NgwafWorkspaceRule#allow_interactive}
  */
  readonly allowInteractive?: boolean | cdktf.IResolvable;
  /**
  * specifies the type of deception (used when `type = deception`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/ngwaf_workspace_rule#deception_type NgwafWorkspaceRule#deception_type}
  */
  readonly deceptionType?: string;
  /**
  * Redirect target (used when `type = redirect`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/ngwaf_workspace_rule#redirect_url NgwafWorkspaceRule#redirect_url}
  */
  readonly redirectUrl?: string;
  /**
  * Response code used with redirect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/ngwaf_workspace_rule#response_code NgwafWorkspaceRule#response_code}
  */
  readonly responseCode?: number;
  /**
  * Signal name to exclude (used when `type = exclude_signal`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/ngwaf_workspace_rule#signal NgwafWorkspaceRule#signal}
  */
  readonly signal?: string;
  /**
  * The action type. One of: `add_signal`, `allow`, `block`, `browser_challenge`, `dynamic_challenge`, `exclude_signal`, `verify_token` or for rate limit rule valid values: `log_request`, `block_signal`, `browser_challenge`, `verify_token`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/ngwaf_workspace_rule#type NgwafWorkspaceRule#type}
  */
  readonly type: string;
}

export function ngwafWorkspaceRuleActionToTerraform(struct?: NgwafWorkspaceRuleAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_interactive: cdktf.booleanToTerraform(struct!.allowInteractive),
    deception_type: cdktf.stringToTerraform(struct!.deceptionType),
    redirect_url: cdktf.stringToTerraform(struct!.redirectUrl),
    response_code: cdktf.numberToTerraform(struct!.responseCode),
    signal: cdktf.stringToTerraform(struct!.signal),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function ngwafWorkspaceRuleActionToHclTerraform(struct?: NgwafWorkspaceRuleAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_interactive: {
      value: cdktf.booleanToHclTerraform(struct!.allowInteractive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    deception_type: {
      value: cdktf.stringToHclTerraform(struct!.deceptionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redirect_url: {
      value: cdktf.stringToHclTerraform(struct!.redirectUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_code: {
      value: cdktf.numberToHclTerraform(struct!.responseCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
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

export class NgwafWorkspaceRuleActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NgwafWorkspaceRuleAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowInteractive !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowInteractive = this._allowInteractive;
    }
    if (this._deceptionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.deceptionType = this._deceptionType;
    }
    if (this._redirectUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectUrl = this._redirectUrl;
    }
    if (this._responseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCode = this._responseCode;
    }
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

  public set internalValue(value: NgwafWorkspaceRuleAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowInteractive = undefined;
      this._deceptionType = undefined;
      this._redirectUrl = undefined;
      this._responseCode = undefined;
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
      this._allowInteractive = value.allowInteractive;
      this._deceptionType = value.deceptionType;
      this._redirectUrl = value.redirectUrl;
      this._responseCode = value.responseCode;
      this._signal = value.signal;
      this._type = value.type;
    }
  }

  // allow_interactive - computed: false, optional: true, required: false
  private _allowInteractive?: boolean | cdktf.IResolvable; 
  public get allowInteractive() {
    return this.getBooleanAttribute('allow_interactive');
  }
  public set allowInteractive(value: boolean | cdktf.IResolvable) {
    this._allowInteractive = value;
  }
  public resetAllowInteractive() {
    this._allowInteractive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInteractiveInput() {
    return this._allowInteractive;
  }

  // deception_type - computed: false, optional: true, required: false
  private _deceptionType?: string; 
  public get deceptionType() {
    return this.getStringAttribute('deception_type');
  }
  public set deceptionType(value: string) {
    this._deceptionType = value;
  }
  public resetDeceptionType() {
    this._deceptionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deceptionTypeInput() {
    return this._deceptionType;
  }

  // redirect_url - computed: false, optional: true, required: false
  private _redirectUrl?: string; 
  public get redirectUrl() {
    return this.getStringAttribute('redirect_url');
  }
  public set redirectUrl(value: string) {
    this._redirectUrl = value;
  }
  public resetRedirectUrl() {
    this._redirectUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUrlInput() {
    return this._redirectUrl;
  }

  // response_code - computed: false, optional: true, required: false
  private _responseCode?: number; 
  public get responseCode() {
    return this.getNumberAttribute('response_code');
  }
  public set responseCode(value: number) {
    this._responseCode = value;
  }
  public resetResponseCode() {
    this._responseCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCodeInput() {
    return this._responseCode;
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

export class NgwafWorkspaceRuleActionList extends cdktf.ComplexList {
  public internalValue? : NgwafWorkspaceRuleAction[] | cdktf.IResolvable

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
  public get(index: number): NgwafWorkspaceRuleActionOutputReference {
    return new NgwafWorkspaceRuleActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NgwafWorkspaceRuleCondition {
  /**
  * Field to inspect (e.g., `ip`, `path`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/ngwaf_workspace_rule#field NgwafWorkspaceRule#field}
  */
  readonly field: string;
  /**
  * Operator to apply (e.g., `equals`, `contains`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/ngwaf_workspace_rule#operator NgwafWorkspaceRule#operator}
  */
  readonly operator: string;
  /**
  * The value to test the field against.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/ngwaf_workspace_rule#value NgwafWorkspaceRule#value}
  */
  readonly value: string;
}

export function ngwafWorkspaceRuleConditionToTerraform(struct?: NgwafWorkspaceRuleCondition | cdktf.IResolvable): any {
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


export function ngwafWorkspaceRuleConditionToHclTerraform(struct?: NgwafWorkspaceRuleCondition | cdktf.IResolvable): any {
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

export class NgwafWorkspaceRuleConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NgwafWorkspaceRuleCondition | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NgwafWorkspaceRuleCondition | cdktf.IResolvable | undefined) {
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

export class NgwafWorkspaceRuleConditionList extends cdktf.ComplexList {
  public internalValue? : NgwafWorkspaceRuleCondition[] | cdktf.IResolvable

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
  public get(index: number): NgwafWorkspaceRuleConditionOutputReference {
    return new NgwafWorkspaceRuleConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NgwafWorkspaceRuleGroupConditionCondition {
  /**
  * Field to inspect (e.g., `ip`, `path`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/ngwaf_workspace_rule#field NgwafWorkspaceRule#field}
  */
  readonly field: string;
  /**
  * Operator to apply (e.g., `equals`, `contains`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/ngwaf_workspace_rule#operator NgwafWorkspaceRule#operator}
  */
  readonly operator: string;
  /**
  * The value to test the field against.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/ngwaf_workspace_rule#value NgwafWorkspaceRule#value}
  */
  readonly value: string;
}

export function ngwafWorkspaceRuleGroupConditionConditionToTerraform(struct?: NgwafWorkspaceRuleGroupConditionCondition | cdktf.IResolvable): any {
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


export function ngwafWorkspaceRuleGroupConditionConditionToHclTerraform(struct?: NgwafWorkspaceRuleGroupConditionCondition | cdktf.IResolvable): any {
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

export class NgwafWorkspaceRuleGroupConditionConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NgwafWorkspaceRuleGroupConditionCondition | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NgwafWorkspaceRuleGroupConditionCondition | cdktf.IResolvable | undefined) {
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

export class NgwafWorkspaceRuleGroupConditionConditionList extends cdktf.ComplexList {
  public internalValue? : NgwafWorkspaceRuleGroupConditionCondition[] | cdktf.IResolvable

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
  public get(index: number): NgwafWorkspaceRuleGroupConditionConditionOutputReference {
    return new NgwafWorkspaceRuleGroupConditionConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NgwafWorkspaceRuleGroupCondition {
  /**
  * Logical operator for the group. Accepted values are `any` and `all`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/ngwaf_workspace_rule#group_operator NgwafWorkspaceRule#group_operator}
  */
  readonly groupOperator: string;
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/ngwaf_workspace_rule#condition NgwafWorkspaceRule#condition}
  */
  readonly condition: NgwafWorkspaceRuleGroupConditionCondition[] | cdktf.IResolvable;
}

export function ngwafWorkspaceRuleGroupConditionToTerraform(struct?: NgwafWorkspaceRuleGroupCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_operator: cdktf.stringToTerraform(struct!.groupOperator),
    condition: cdktf.listMapper(ngwafWorkspaceRuleGroupConditionConditionToTerraform, true)(struct!.condition),
  }
}


export function ngwafWorkspaceRuleGroupConditionToHclTerraform(struct?: NgwafWorkspaceRuleGroupCondition | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(ngwafWorkspaceRuleGroupConditionConditionToHclTerraform, true)(struct!.condition),
      isBlock: true,
      type: "list",
      storageClassType: "NgwafWorkspaceRuleGroupConditionConditionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NgwafWorkspaceRuleGroupConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NgwafWorkspaceRuleGroupCondition | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NgwafWorkspaceRuleGroupCondition | cdktf.IResolvable | undefined) {
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
  private _condition = new NgwafWorkspaceRuleGroupConditionConditionList(this, "condition", false);
  public get condition() {
    return this._condition;
  }
  public putCondition(value: NgwafWorkspaceRuleGroupConditionCondition[] | cdktf.IResolvable) {
    this._condition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }
}

export class NgwafWorkspaceRuleGroupConditionList extends cdktf.ComplexList {
  public internalValue? : NgwafWorkspaceRuleGroupCondition[] | cdktf.IResolvable

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
  public get(index: number): NgwafWorkspaceRuleGroupConditionOutputReference {
    return new NgwafWorkspaceRuleGroupConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NgwafWorkspaceRuleMultivalConditionCondition {
  /**
  * Field to inspect (e.g., `name`, `value`, `signal_id`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/ngwaf_workspace_rule#field NgwafWorkspaceRule#field}
  */
  readonly field: string;
  /**
  * Operator to apply (e.g., `equals`, `contains`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/ngwaf_workspace_rule#operator NgwafWorkspaceRule#operator}
  */
  readonly operator: string;
  /**
  * The value to test the field against.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/ngwaf_workspace_rule#value NgwafWorkspaceRule#value}
  */
  readonly value: string;
}

export function ngwafWorkspaceRuleMultivalConditionConditionToTerraform(struct?: NgwafWorkspaceRuleMultivalConditionCondition | cdktf.IResolvable): any {
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


export function ngwafWorkspaceRuleMultivalConditionConditionToHclTerraform(struct?: NgwafWorkspaceRuleMultivalConditionCondition | cdktf.IResolvable): any {
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

export class NgwafWorkspaceRuleMultivalConditionConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NgwafWorkspaceRuleMultivalConditionCondition | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NgwafWorkspaceRuleMultivalConditionCondition | cdktf.IResolvable | undefined) {
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

export class NgwafWorkspaceRuleMultivalConditionConditionList extends cdktf.ComplexList {
  public internalValue? : NgwafWorkspaceRuleMultivalConditionCondition[] | cdktf.IResolvable

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
  public get(index: number): NgwafWorkspaceRuleMultivalConditionConditionOutputReference {
    return new NgwafWorkspaceRuleMultivalConditionConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NgwafWorkspaceRuleMultivalCondition {
  /**
  * Enums for multival condition field.. Accepted values are `post_parameter`, `query_parameter`, `request_cookie`, `request_header`, `response_header`, and `signal`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/ngwaf_workspace_rule#field NgwafWorkspaceRule#field}
  */
  readonly field: string;
  /**
  * Logical operator for the group. Accepted values are `any` and `all`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/ngwaf_workspace_rule#group_operator NgwafWorkspaceRule#group_operator}
  */
  readonly groupOperator: string;
  /**
  * Indicates whether the supplied conditions will check for existence or non-existence of matching field values. Accepted values are `exists` and `does_not_exist`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/ngwaf_workspace_rule#operator NgwafWorkspaceRule#operator}
  */
  readonly operator: string;
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/ngwaf_workspace_rule#condition NgwafWorkspaceRule#condition}
  */
  readonly condition: NgwafWorkspaceRuleMultivalConditionCondition[] | cdktf.IResolvable;
}

export function ngwafWorkspaceRuleMultivalConditionToTerraform(struct?: NgwafWorkspaceRuleMultivalCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    group_operator: cdktf.stringToTerraform(struct!.groupOperator),
    operator: cdktf.stringToTerraform(struct!.operator),
    condition: cdktf.listMapper(ngwafWorkspaceRuleMultivalConditionConditionToTerraform, true)(struct!.condition),
  }
}


export function ngwafWorkspaceRuleMultivalConditionToHclTerraform(struct?: NgwafWorkspaceRuleMultivalCondition | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(ngwafWorkspaceRuleMultivalConditionConditionToHclTerraform, true)(struct!.condition),
      isBlock: true,
      type: "list",
      storageClassType: "NgwafWorkspaceRuleMultivalConditionConditionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NgwafWorkspaceRuleMultivalConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NgwafWorkspaceRuleMultivalCondition | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NgwafWorkspaceRuleMultivalCondition | cdktf.IResolvable | undefined) {
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
  private _condition = new NgwafWorkspaceRuleMultivalConditionConditionList(this, "condition", false);
  public get condition() {
    return this._condition;
  }
  public putCondition(value: NgwafWorkspaceRuleMultivalConditionCondition[] | cdktf.IResolvable) {
    this._condition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }
}

export class NgwafWorkspaceRuleMultivalConditionList extends cdktf.ComplexList {
  public internalValue? : NgwafWorkspaceRuleMultivalCondition[] | cdktf.IResolvable

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
  public get(index: number): NgwafWorkspaceRuleMultivalConditionOutputReference {
    return new NgwafWorkspaceRuleMultivalConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NgwafWorkspaceRuleRateLimitClientIdentifiers {
  /**
  * Key for the Client Identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/ngwaf_workspace_rule#key NgwafWorkspaceRule#key}
  */
  readonly key?: string;
  /**
  * Name for the Client Identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/ngwaf_workspace_rule#name NgwafWorkspaceRule#name}
  */
  readonly name?: string;
  /**
  * Type of the Client Identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/ngwaf_workspace_rule#type NgwafWorkspaceRule#type}
  */
  readonly type: string;
}

export function ngwafWorkspaceRuleRateLimitClientIdentifiersToTerraform(struct?: NgwafWorkspaceRuleRateLimitClientIdentifiers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function ngwafWorkspaceRuleRateLimitClientIdentifiersToHclTerraform(struct?: NgwafWorkspaceRuleRateLimitClientIdentifiers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class NgwafWorkspaceRuleRateLimitClientIdentifiersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NgwafWorkspaceRuleRateLimitClientIdentifiers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NgwafWorkspaceRuleRateLimitClientIdentifiers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

export class NgwafWorkspaceRuleRateLimitClientIdentifiersList extends cdktf.ComplexList {
  public internalValue? : NgwafWorkspaceRuleRateLimitClientIdentifiers[] | cdktf.IResolvable

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
  public get(index: number): NgwafWorkspaceRuleRateLimitClientIdentifiersOutputReference {
    return new NgwafWorkspaceRuleRateLimitClientIdentifiersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NgwafWorkspaceRuleRateLimit {
  /**
  * Duration in seconds for the rate limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/ngwaf_workspace_rule#duration NgwafWorkspaceRule#duration}
  */
  readonly duration: number;
  /**
  * Time interval for the rate limit in seconds. Accepted values are 60, 600, and 3600.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/ngwaf_workspace_rule#interval NgwafWorkspaceRule#interval}
  */
  readonly interval: number;
  /**
  * Reference ID of the custom signal this rule uses to count requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/ngwaf_workspace_rule#signal NgwafWorkspaceRule#signal}
  */
  readonly signal: string;
  /**
  * Rate limit threshold. Minimum 1 and maximum 10,000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/ngwaf_workspace_rule#threshold NgwafWorkspaceRule#threshold}
  */
  readonly threshold: number;
  /**
  * client_identifiers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/ngwaf_workspace_rule#client_identifiers NgwafWorkspaceRule#client_identifiers}
  */
  readonly clientIdentifiers: NgwafWorkspaceRuleRateLimitClientIdentifiers[] | cdktf.IResolvable;
}

export function ngwafWorkspaceRuleRateLimitToTerraform(struct?: NgwafWorkspaceRuleRateLimitOutputReference | NgwafWorkspaceRuleRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    interval: cdktf.numberToTerraform(struct!.interval),
    signal: cdktf.stringToTerraform(struct!.signal),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    client_identifiers: cdktf.listMapper(ngwafWorkspaceRuleRateLimitClientIdentifiersToTerraform, true)(struct!.clientIdentifiers),
  }
}


export function ngwafWorkspaceRuleRateLimitToHclTerraform(struct?: NgwafWorkspaceRuleRateLimitOutputReference | NgwafWorkspaceRuleRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    signal: {
      value: cdktf.stringToHclTerraform(struct!.signal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_identifiers: {
      value: cdktf.listMapperHcl(ngwafWorkspaceRuleRateLimitClientIdentifiersToHclTerraform, true)(struct!.clientIdentifiers),
      isBlock: true,
      type: "set",
      storageClassType: "NgwafWorkspaceRuleRateLimitClientIdentifiersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NgwafWorkspaceRuleRateLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NgwafWorkspaceRuleRateLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._signal !== undefined) {
      hasAnyValues = true;
      internalValueResult.signal = this._signal;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._clientIdentifiers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIdentifiers = this._clientIdentifiers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NgwafWorkspaceRuleRateLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._interval = undefined;
      this._signal = undefined;
      this._threshold = undefined;
      this._clientIdentifiers.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._interval = value.interval;
      this._signal = value.signal;
      this._threshold = value.threshold;
      this._clientIdentifiers.internalValue = value.clientIdentifiers;
    }
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // interval - computed: false, optional: false, required: true
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // signal - computed: false, optional: false, required: true
  private _signal?: string; 
  public get signal() {
    return this.getStringAttribute('signal');
  }
  public set signal(value: string) {
    this._signal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signalInput() {
    return this._signal;
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

  // client_identifiers - computed: false, optional: false, required: true
  private _clientIdentifiers = new NgwafWorkspaceRuleRateLimitClientIdentifiersList(this, "client_identifiers", true);
  public get clientIdentifiers() {
    return this._clientIdentifiers;
  }
  public putClientIdentifiers(value: NgwafWorkspaceRuleRateLimitClientIdentifiers[] | cdktf.IResolvable) {
    this._clientIdentifiers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdentifiersInput() {
    return this._clientIdentifiers.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/ngwaf_workspace_rule fastly_ngwaf_workspace_rule}
*/
export class NgwafWorkspaceRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fastly_ngwaf_workspace_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NgwafWorkspaceRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NgwafWorkspaceRule to import
  * @param importFromId The id of the existing NgwafWorkspaceRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/ngwaf_workspace_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NgwafWorkspaceRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fastly_ngwaf_workspace_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/ngwaf_workspace_rule fastly_ngwaf_workspace_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NgwafWorkspaceRuleConfig
  */
  public constructor(scope: Construct, id: string, config: NgwafWorkspaceRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'fastly_ngwaf_workspace_rule',
      terraformGeneratorMetadata: {
        providerName: 'fastly',
        providerVersion: '8.4.0',
        providerVersionConstraint: '8.4.0'
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
    this._enabled = config.enabled;
    this._groupOperator = config.groupOperator;
    this._id = config.id;
    this._requestLogging = config.requestLogging;
    this._type = config.type;
    this._workspaceId = config.workspaceId;
    this._action.internalValue = config.action;
    this._condition.internalValue = config.condition;
    this._groupCondition.internalValue = config.groupCondition;
    this._multivalCondition.internalValue = config.multivalCondition;
    this._rateLimit.internalValue = config.rateLimit;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // action - computed: false, optional: false, required: true
  private _action = new NgwafWorkspaceRuleActionList(this, "action", false);
  public get action() {
    return this._action;
  }
  public putAction(value: NgwafWorkspaceRuleAction[] | cdktf.IResolvable) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // condition - computed: false, optional: true, required: false
  private _condition = new NgwafWorkspaceRuleConditionList(this, "condition", false);
  public get condition() {
    return this._condition;
  }
  public putCondition(value: NgwafWorkspaceRuleCondition[] | cdktf.IResolvable) {
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
  private _groupCondition = new NgwafWorkspaceRuleGroupConditionList(this, "group_condition", false);
  public get groupCondition() {
    return this._groupCondition;
  }
  public putGroupCondition(value: NgwafWorkspaceRuleGroupCondition[] | cdktf.IResolvable) {
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
  private _multivalCondition = new NgwafWorkspaceRuleMultivalConditionList(this, "multival_condition", false);
  public get multivalCondition() {
    return this._multivalCondition;
  }
  public putMultivalCondition(value: NgwafWorkspaceRuleMultivalCondition[] | cdktf.IResolvable) {
    this._multivalCondition.internalValue = value;
  }
  public resetMultivalCondition() {
    this._multivalCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multivalConditionInput() {
    return this._multivalCondition.internalValue;
  }

  // rate_limit - computed: false, optional: true, required: false
  private _rateLimit = new NgwafWorkspaceRuleRateLimitOutputReference(this, "rate_limit");
  public get rateLimit() {
    return this._rateLimit;
  }
  public putRateLimit(value: NgwafWorkspaceRuleRateLimit) {
    this._rateLimit.internalValue = value;
  }
  public resetRateLimit() {
    this._rateLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitInput() {
    return this._rateLimit.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      group_operator: cdktf.stringToTerraform(this._groupOperator),
      id: cdktf.stringToTerraform(this._id),
      request_logging: cdktf.stringToTerraform(this._requestLogging),
      type: cdktf.stringToTerraform(this._type),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
      action: cdktf.listMapper(ngwafWorkspaceRuleActionToTerraform, true)(this._action.internalValue),
      condition: cdktf.listMapper(ngwafWorkspaceRuleConditionToTerraform, true)(this._condition.internalValue),
      group_condition: cdktf.listMapper(ngwafWorkspaceRuleGroupConditionToTerraform, true)(this._groupCondition.internalValue),
      multival_condition: cdktf.listMapper(ngwafWorkspaceRuleMultivalConditionToTerraform, true)(this._multivalCondition.internalValue),
      rate_limit: ngwafWorkspaceRuleRateLimitToTerraform(this._rateLimit.internalValue),
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
      workspace_id: {
        value: cdktf.stringToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action: {
        value: cdktf.listMapperHcl(ngwafWorkspaceRuleActionToHclTerraform, true)(this._action.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NgwafWorkspaceRuleActionList",
      },
      condition: {
        value: cdktf.listMapperHcl(ngwafWorkspaceRuleConditionToHclTerraform, true)(this._condition.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NgwafWorkspaceRuleConditionList",
      },
      group_condition: {
        value: cdktf.listMapperHcl(ngwafWorkspaceRuleGroupConditionToHclTerraform, true)(this._groupCondition.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NgwafWorkspaceRuleGroupConditionList",
      },
      multival_condition: {
        value: cdktf.listMapperHcl(ngwafWorkspaceRuleMultivalConditionToHclTerraform, true)(this._multivalCondition.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NgwafWorkspaceRuleMultivalConditionList",
      },
      rate_limit: {
        value: ngwafWorkspaceRuleRateLimitToHclTerraform(this._rateLimit.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NgwafWorkspaceRuleRateLimitList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
