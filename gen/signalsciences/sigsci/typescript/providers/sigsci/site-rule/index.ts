// https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/site_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SiteRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * enable the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/site_rule#enabled SiteRule#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Date the rule will automatically be disabled. If rule is always enabled, will return empty string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/site_rule#expiration SiteRule#expiration}
  */
  readonly expiration: string;
  /**
  * Conditions that must be matched when evaluating the request (all, any)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/site_rule#group_operator SiteRule#group_operator}
  */
  readonly groupOperator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/site_rule#id SiteRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Description of the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/site_rule#reason SiteRule#reason}
  */
  readonly reason: string;
  /**
  * Indicates whether to store the logs for requests that match the rule's conditions (sampled) or not store them (none). This field is only available for rules of type `request`. Not valid for `signal` or `rateLimit`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/site_rule#requestlogging SiteRule#requestlogging}
  */
  readonly requestlogging?: string;
  /**
  * The signal id of the signal being excluded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/site_rule#signal SiteRule#signal}
  */
  readonly signal?: string;
  /**
  * Site short name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/site_rule#site_short_name SiteRule#site_short_name}
  */
  readonly siteShortName: string;
  /**
  * Type of rule (request, signal, rateLimit)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/site_rule#type SiteRule#type}
  */
  readonly type: string;
  /**
  * actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/site_rule#actions SiteRule#actions}
  */
  readonly actions?: SiteRuleActions[] | cdktf.IResolvable;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/site_rule#conditions SiteRule#conditions}
  */
  readonly conditions: SiteRuleConditions[] | cdktf.IResolvable;
  /**
  * rate_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/site_rule#rate_limit SiteRule#rate_limit}
  */
  readonly rateLimit?: SiteRuleRateLimit;
}
export interface SiteRuleActions {
  /**
  * Allows toggling between a non-interactive and interactive browser challenge. Only valid with the 'browserChallenge' action type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/site_rule#allow_interactive SiteRule#allow_interactive}
  */
  readonly allowInteractive?: boolean | cdktf.IResolvable;
  /**
  * URL to redirect to when blocking response code is set to 301 or 302
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/site_rule#redirect_url SiteRule#redirect_url}
  */
  readonly redirectUrl?: string;
  /**
  * HTTP code agent for agent to respond with. range: 301, 302, or 400-599, defaults to '406' if not provided. Only valid with the 'block' action type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/site_rule#response_code SiteRule#response_code}
  */
  readonly responseCode?: number;
  /**
  * signal id to tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/site_rule#signal SiteRule#signal}
  */
  readonly signal?: string;
  /**
  * (addSignal, allow, block, browserChallenge, dynamicChallenge, excludeSignal, verifyToken) (rateLimit rule valid values: logRequest, blockSignal, browserChallenge, verifyToken)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/site_rule#type SiteRule#type}
  */
  readonly type: string;
}

export function siteRuleActionsToTerraform(struct?: SiteRuleActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_interactive: cdktf.booleanToTerraform(struct!.allowInteractive),
    redirect_url: cdktf.stringToTerraform(struct!.redirectUrl),
    response_code: cdktf.numberToTerraform(struct!.responseCode),
    signal: cdktf.stringToTerraform(struct!.signal),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function siteRuleActionsToHclTerraform(struct?: SiteRuleActions | cdktf.IResolvable): any {
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

export class SiteRuleActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SiteRuleActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowInteractive !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowInteractive = this._allowInteractive;
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

  public set internalValue(value: SiteRuleActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowInteractive = undefined;
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

export class SiteRuleActionsList extends cdktf.ComplexList {
  public internalValue? : SiteRuleActions[] | cdktf.IResolvable

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
  public get(index: number): SiteRuleActionsOutputReference {
    return new SiteRuleActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteRuleConditionsConditionsConditions {
  /**
  * types:
  *     - single - (scheme, method, path, useragent, domain, ip, responseCode, agentname, paramname, paramvalue, country, name, valueString, valueInt, valueIp, signalType, value, ja3Fingerprint, ja4Fingerprint, protocolVersion)
  *     - multival - (signal, requestHeader, queryParameter, postParameter, requestCookie, responseHeader)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/site_rule#field SiteRule#field}
  */
  readonly field?: string;
  /**
  * type: group, multival - Conditions that must be matched when evaluating the request (all, any)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/site_rule#group_operator SiteRule#group_operator}
  */
  readonly groupOperator?: string;
  /**
  * type: single - (equals, doesNotEqual, contains, doesNotContain, greaterEqual, lesserEqual, like, notLike, exists, doesNotExist, matches, doesNotMatch, inList, notInList)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/site_rule#operator SiteRule#operator}
  */
  readonly operator?: string;
  /**
  * (group, multival, single)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/site_rule#type SiteRule#type}
  */
  readonly type: string;
  /**
  * type: single - See request fields (https://docs.fastly.com/signalsciences/using-signal-sciences/rules/defining-rule-conditions/#fields)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/site_rule#value SiteRule#value}
  */
  readonly value?: string;
}

export function siteRuleConditionsConditionsConditionsToTerraform(struct?: SiteRuleConditionsConditionsConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    group_operator: cdktf.stringToTerraform(struct!.groupOperator),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function siteRuleConditionsConditionsConditionsToHclTerraform(struct?: SiteRuleConditionsConditionsConditions | cdktf.IResolvable): any {
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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

export class SiteRuleConditionsConditionsConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SiteRuleConditionsConditionsConditions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SiteRuleConditionsConditionsConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._groupOperator = undefined;
      this._operator = undefined;
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
      this._field = value.field;
      this._groupOperator = value.groupOperator;
      this._operator = value.operator;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // field - computed: false, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
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

  // operator - computed: false, optional: true, required: false
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
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

export class SiteRuleConditionsConditionsConditionsList extends cdktf.ComplexList {
  public internalValue? : SiteRuleConditionsConditionsConditions[] | cdktf.IResolvable

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
  public get(index: number): SiteRuleConditionsConditionsConditionsOutputReference {
    return new SiteRuleConditionsConditionsConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteRuleConditionsConditions {
  /**
  * types:
  *     - single - (scheme, method, path, useragent, domain, ip, responseCode, agentname, paramname, paramvalue, country, name, valueString, valueInt, valueIp, signalType, value, ja3Fingerprint, ja4Fingerprint, protocolVersion)
  *     - multival - (signal, requestHeader, queryParameter, postParameter, requestCookie, responseHeader)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/site_rule#field SiteRule#field}
  */
  readonly field?: string;
  /**
  * type: group, multival - Conditions that must be matched when evaluating the request (all, any)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/site_rule#group_operator SiteRule#group_operator}
  */
  readonly groupOperator?: string;
  /**
  * type: single - (equals, doesNotEqual, contains, doesNotContain, greaterEqual, lesserEqual, like, notLike, exists, doesNotExist, matches, doesNotMatch, inList, notInList)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/site_rule#operator SiteRule#operator}
  */
  readonly operator?: string;
  /**
  * (group, multival, single)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/site_rule#type SiteRule#type}
  */
  readonly type: string;
  /**
  * type: single - See request fields (https://docs.fastly.com/signalsciences/using-signal-sciences/rules/defining-rule-conditions/#fields)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/site_rule#value SiteRule#value}
  */
  readonly value?: string;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/site_rule#conditions SiteRule#conditions}
  */
  readonly conditions?: SiteRuleConditionsConditionsConditions[] | cdktf.IResolvable;
}

export function siteRuleConditionsConditionsToTerraform(struct?: SiteRuleConditionsConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    group_operator: cdktf.stringToTerraform(struct!.groupOperator),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
    conditions: cdktf.listMapper(siteRuleConditionsConditionsConditionsToTerraform, true)(struct!.conditions),
  }
}


export function siteRuleConditionsConditionsToHclTerraform(struct?: SiteRuleConditionsConditions | cdktf.IResolvable): any {
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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
    conditions: {
      value: cdktf.listMapperHcl(siteRuleConditionsConditionsConditionsToHclTerraform, true)(struct!.conditions),
      isBlock: true,
      type: "set",
      storageClassType: "SiteRuleConditionsConditionsConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteRuleConditionsConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SiteRuleConditionsConditions | cdktf.IResolvable | undefined {
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
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteRuleConditionsConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._groupOperator = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._value = undefined;
      this._conditions.internalValue = undefined;
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
      this._type = value.type;
      this._value = value.value;
      this._conditions.internalValue = value.conditions;
    }
  }

  // field - computed: false, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
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

  // operator - computed: false, optional: true, required: false
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new SiteRuleConditionsConditionsConditionsList(this, "conditions", true);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: SiteRuleConditionsConditionsConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }
}

export class SiteRuleConditionsConditionsList extends cdktf.ComplexList {
  public internalValue? : SiteRuleConditionsConditions[] | cdktf.IResolvable

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
  public get(index: number): SiteRuleConditionsConditionsOutputReference {
    return new SiteRuleConditionsConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteRuleConditions {
  /**
  * types:
  *     - single - (scheme, method, path, useragent, domain, ip, responseCode, agentname, paramname, paramvalue, country, name, valueString, valueInt, valueIp, signalType, value, ja3Fingerprint, ja4Fingerprint, protocolVersion)
  *     - multival - (signal, requestHeader, queryParameter, postParameter, requestCookie, responseHeader)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/site_rule#field SiteRule#field}
  */
  readonly field?: string;
  /**
  * type: group, multival - Conditions that must be matched when evaluating the request (all, any)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/site_rule#group_operator SiteRule#group_operator}
  */
  readonly groupOperator?: string;
  /**
  * type: single - (equals, doesNotEqual, contains, doesNotContain, greaterEqual, lesserEqual, like, notLike, exists, doesNotExist, matches, doesNotMatch, inList, notInList)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/site_rule#operator SiteRule#operator}
  */
  readonly operator?: string;
  /**
  * (group, multival, single)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/site_rule#type SiteRule#type}
  */
  readonly type: string;
  /**
  * type: single - See request fields (https://docs.fastly.com/signalsciences/using-signal-sciences/rules/defining-rule-conditions/#fields)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/site_rule#value SiteRule#value}
  */
  readonly value?: string;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/site_rule#conditions SiteRule#conditions}
  */
  readonly conditions?: SiteRuleConditionsConditions[] | cdktf.IResolvable;
}

export function siteRuleConditionsToTerraform(struct?: SiteRuleConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    group_operator: cdktf.stringToTerraform(struct!.groupOperator),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
    conditions: cdktf.listMapper(siteRuleConditionsConditionsToTerraform, true)(struct!.conditions),
  }
}


export function siteRuleConditionsToHclTerraform(struct?: SiteRuleConditions | cdktf.IResolvable): any {
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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
    conditions: {
      value: cdktf.listMapperHcl(siteRuleConditionsConditionsToHclTerraform, true)(struct!.conditions),
      isBlock: true,
      type: "set",
      storageClassType: "SiteRuleConditionsConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteRuleConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SiteRuleConditions | cdktf.IResolvable | undefined {
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
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteRuleConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._groupOperator = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._value = undefined;
      this._conditions.internalValue = undefined;
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
      this._type = value.type;
      this._value = value.value;
      this._conditions.internalValue = value.conditions;
    }
  }

  // field - computed: false, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
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

  // operator - computed: false, optional: true, required: false
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new SiteRuleConditionsConditionsList(this, "conditions", true);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: SiteRuleConditionsConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }
}

export class SiteRuleConditionsList extends cdktf.ComplexList {
  public internalValue? : SiteRuleConditions[] | cdktf.IResolvable

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
  public get(index: number): SiteRuleConditionsOutputReference {
    return new SiteRuleConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteRuleRateLimitClientIdentifiers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/site_rule#key SiteRule#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/site_rule#name SiteRule#name}
  */
  readonly name?: string;
  /**
  * (ip, requestHeader, requestCookie, postParameter, signalPayload)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/site_rule#type SiteRule#type}
  */
  readonly type: string;
}

export function siteRuleRateLimitClientIdentifiersToTerraform(struct?: SiteRuleRateLimitClientIdentifiers | cdktf.IResolvable): any {
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


export function siteRuleRateLimitClientIdentifiersToHclTerraform(struct?: SiteRuleRateLimitClientIdentifiers | cdktf.IResolvable): any {
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

export class SiteRuleRateLimitClientIdentifiersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SiteRuleRateLimitClientIdentifiers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SiteRuleRateLimitClientIdentifiers | cdktf.IResolvable | undefined) {
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

export class SiteRuleRateLimitClientIdentifiersList extends cdktf.ComplexList {
  public internalValue? : SiteRuleRateLimitClientIdentifiers[] | cdktf.IResolvable

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
  public get(index: number): SiteRuleRateLimitClientIdentifiersOutputReference {
    return new SiteRuleRateLimitClientIdentifiersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteRuleRateLimit {
  /**
  * duration in seconds (300 < x < 3600)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/site_rule#duration SiteRule#duration}
  */
  readonly duration: number;
  /**
  * interval in minutes (1, 10)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/site_rule#interval SiteRule#interval}
  */
  readonly interval: number;
  /**
  * threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/site_rule#threshold SiteRule#threshold}
  */
  readonly threshold: number;
  /**
  * client_identifiers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/site_rule#client_identifiers SiteRule#client_identifiers}
  */
  readonly clientIdentifiers: SiteRuleRateLimitClientIdentifiers[] | cdktf.IResolvable;
}

export function siteRuleRateLimitToTerraform(struct?: SiteRuleRateLimitOutputReference | SiteRuleRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    interval: cdktf.numberToTerraform(struct!.interval),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    client_identifiers: cdktf.listMapper(siteRuleRateLimitClientIdentifiersToTerraform, true)(struct!.clientIdentifiers),
  }
}


export function siteRuleRateLimitToHclTerraform(struct?: SiteRuleRateLimitOutputReference | SiteRuleRateLimit): any {
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
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_identifiers: {
      value: cdktf.listMapperHcl(siteRuleRateLimitClientIdentifiersToHclTerraform, true)(struct!.clientIdentifiers),
      isBlock: true,
      type: "set",
      storageClassType: "SiteRuleRateLimitClientIdentifiersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteRuleRateLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SiteRuleRateLimit | undefined {
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

  public set internalValue(value: SiteRuleRateLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._interval = undefined;
      this._threshold = undefined;
      this._clientIdentifiers.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._interval = value.interval;
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
  private _clientIdentifiers = new SiteRuleRateLimitClientIdentifiersList(this, "client_identifiers", true);
  public get clientIdentifiers() {
    return this._clientIdentifiers;
  }
  public putClientIdentifiers(value: SiteRuleRateLimitClientIdentifiers[] | cdktf.IResolvable) {
    this._clientIdentifiers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdentifiersInput() {
    return this._clientIdentifiers.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/site_rule sigsci_site_rule}
*/
export class SiteRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sigsci_site_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SiteRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SiteRule to import
  * @param importFromId The id of the existing SiteRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/site_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SiteRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sigsci_site_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/site_rule sigsci_site_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SiteRuleConfig
  */
  public constructor(scope: Construct, id: string, config: SiteRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'sigsci_site_rule',
      terraformGeneratorMetadata: {
        providerName: 'sigsci',
        providerVersion: '3.7.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabled = config.enabled;
    this._expiration = config.expiration;
    this._groupOperator = config.groupOperator;
    this._id = config.id;
    this._reason = config.reason;
    this._requestlogging = config.requestlogging;
    this._signal = config.signal;
    this._siteShortName = config.siteShortName;
    this._type = config.type;
    this._actions.internalValue = config.actions;
    this._conditions.internalValue = config.conditions;
    this._rateLimit.internalValue = config.rateLimit;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // expiration - computed: false, optional: false, required: true
  private _expiration?: string; 
  public get expiration() {
    return this.getStringAttribute('expiration');
  }
  public set expiration(value: string) {
    this._expiration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationInput() {
    return this._expiration;
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

  // reason - computed: false, optional: false, required: true
  private _reason?: string; 
  public get reason() {
    return this.getStringAttribute('reason');
  }
  public set reason(value: string) {
    this._reason = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }

  // requestlogging - computed: false, optional: true, required: false
  private _requestlogging?: string; 
  public get requestlogging() {
    return this.getStringAttribute('requestlogging');
  }
  public set requestlogging(value: string) {
    this._requestlogging = value;
  }
  public resetRequestlogging() {
    this._requestlogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestloggingInput() {
    return this._requestlogging;
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

  // site_short_name - computed: false, optional: false, required: true
  private _siteShortName?: string; 
  public get siteShortName() {
    return this.getStringAttribute('site_short_name');
  }
  public set siteShortName(value: string) {
    this._siteShortName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteShortNameInput() {
    return this._siteShortName;
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

  // actions - computed: false, optional: true, required: false
  private _actions = new SiteRuleActionsList(this, "actions", true);
  public get actions() {
    return this._actions;
  }
  public putActions(value: SiteRuleActions[] | cdktf.IResolvable) {
    this._actions.internalValue = value;
  }
  public resetActions() {
    this._actions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // conditions - computed: false, optional: false, required: true
  private _conditions = new SiteRuleConditionsList(this, "conditions", true);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: SiteRuleConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // rate_limit - computed: false, optional: true, required: false
  private _rateLimit = new SiteRuleRateLimitOutputReference(this, "rate_limit");
  public get rateLimit() {
    return this._rateLimit;
  }
  public putRateLimit(value: SiteRuleRateLimit) {
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
      enabled: cdktf.booleanToTerraform(this._enabled),
      expiration: cdktf.stringToTerraform(this._expiration),
      group_operator: cdktf.stringToTerraform(this._groupOperator),
      id: cdktf.stringToTerraform(this._id),
      reason: cdktf.stringToTerraform(this._reason),
      requestlogging: cdktf.stringToTerraform(this._requestlogging),
      signal: cdktf.stringToTerraform(this._signal),
      site_short_name: cdktf.stringToTerraform(this._siteShortName),
      type: cdktf.stringToTerraform(this._type),
      actions: cdktf.listMapper(siteRuleActionsToTerraform, true)(this._actions.internalValue),
      conditions: cdktf.listMapper(siteRuleConditionsToTerraform, true)(this._conditions.internalValue),
      rate_limit: siteRuleRateLimitToTerraform(this._rateLimit.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      expiration: {
        value: cdktf.stringToHclTerraform(this._expiration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      reason: {
        value: cdktf.stringToHclTerraform(this._reason),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      requestlogging: {
        value: cdktf.stringToHclTerraform(this._requestlogging),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signal: {
        value: cdktf.stringToHclTerraform(this._signal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_short_name: {
        value: cdktf.stringToHclTerraform(this._siteShortName),
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
      actions: {
        value: cdktf.listMapperHcl(siteRuleActionsToHclTerraform, true)(this._actions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SiteRuleActionsList",
      },
      conditions: {
        value: cdktf.listMapperHcl(siteRuleConditionsToHclTerraform, true)(this._conditions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SiteRuleConditionsList",
      },
      rate_limit: {
        value: siteRuleRateLimitToHclTerraform(this._rateLimit.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SiteRuleRateLimitList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
