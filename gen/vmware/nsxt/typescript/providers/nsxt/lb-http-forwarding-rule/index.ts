// https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_forwarding_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LbHttpForwardingRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_forwarding_rule#description LbHttpForwardingRule#description}
  */
  readonly description?: string;
  /**
  * The display name of this resource. Defaults to ID if not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_forwarding_rule#display_name LbHttpForwardingRule#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_forwarding_rule#id LbHttpForwardingRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Strategy when multiple match conditions are specified in one rule (ANY vs ALL)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_forwarding_rule#match_strategy LbHttpForwardingRule#match_strategy}
  */
  readonly matchStrategy?: string;
  /**
  * body_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_forwarding_rule#body_condition LbHttpForwardingRule#body_condition}
  */
  readonly bodyCondition?: LbHttpForwardingRuleBodyCondition[] | cdktf.IResolvable;
  /**
  * cookie_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_forwarding_rule#cookie_condition LbHttpForwardingRule#cookie_condition}
  */
  readonly cookieCondition?: LbHttpForwardingRuleCookieCondition[] | cdktf.IResolvable;
  /**
  * header_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_forwarding_rule#header_condition LbHttpForwardingRule#header_condition}
  */
  readonly headerCondition?: LbHttpForwardingRuleHeaderCondition[] | cdktf.IResolvable;
  /**
  * http_redirect_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_forwarding_rule#http_redirect_action LbHttpForwardingRule#http_redirect_action}
  */
  readonly httpRedirectAction?: LbHttpForwardingRuleHttpRedirectAction;
  /**
  * http_reject_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_forwarding_rule#http_reject_action LbHttpForwardingRule#http_reject_action}
  */
  readonly httpRejectAction?: LbHttpForwardingRuleHttpRejectAction;
  /**
  * ip_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_forwarding_rule#ip_condition LbHttpForwardingRule#ip_condition}
  */
  readonly ipCondition?: LbHttpForwardingRuleIpCondition[] | cdktf.IResolvable;
  /**
  * method_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_forwarding_rule#method_condition LbHttpForwardingRule#method_condition}
  */
  readonly methodCondition?: LbHttpForwardingRuleMethodCondition[] | cdktf.IResolvable;
  /**
  * select_pool_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_forwarding_rule#select_pool_action LbHttpForwardingRule#select_pool_action}
  */
  readonly selectPoolAction?: LbHttpForwardingRuleSelectPoolAction;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_forwarding_rule#tag LbHttpForwardingRule#tag}
  */
  readonly tag?: LbHttpForwardingRuleTag[] | cdktf.IResolvable;
  /**
  * tcp_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_forwarding_rule#tcp_condition LbHttpForwardingRule#tcp_condition}
  */
  readonly tcpCondition?: LbHttpForwardingRuleTcpCondition[] | cdktf.IResolvable;
  /**
  * uri_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_forwarding_rule#uri_condition LbHttpForwardingRule#uri_condition}
  */
  readonly uriCondition?: LbHttpForwardingRuleUriCondition[] | cdktf.IResolvable;
  /**
  * version_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_forwarding_rule#version_condition LbHttpForwardingRule#version_condition}
  */
  readonly versionCondition?: LbHttpForwardingRuleVersionCondition;
}
export interface LbHttpForwardingRuleBodyCondition {
  /**
  * If true, case is significant in condition matching
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_forwarding_rule#case_sensitive LbHttpForwardingRule#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Whether to reverse match result of this condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_forwarding_rule#inverse LbHttpForwardingRule#inverse}
  */
  readonly inverse?: boolean | cdktf.IResolvable;
  /**
  * Match type (STARTS_WITH, ENDS_WITH, EQUALS, CONTAINS, REGEX)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_forwarding_rule#match_type LbHttpForwardingRule#match_type}
  */
  readonly matchType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_forwarding_rule#value LbHttpForwardingRule#value}
  */
  readonly value: string;
}

export function lbHttpForwardingRuleBodyConditionToTerraform(struct?: LbHttpForwardingRuleBodyCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    case_sensitive: cdktf.booleanToTerraform(struct!.caseSensitive),
    inverse: cdktf.booleanToTerraform(struct!.inverse),
    match_type: cdktf.stringToTerraform(struct!.matchType),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lbHttpForwardingRuleBodyConditionToHclTerraform(struct?: LbHttpForwardingRuleBodyCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    case_sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.caseSensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    inverse: {
      value: cdktf.booleanToHclTerraform(struct!.inverse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_type: {
      value: cdktf.stringToHclTerraform(struct!.matchType),
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

export class LbHttpForwardingRuleBodyConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LbHttpForwardingRuleBodyCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseSensitive = this._caseSensitive;
    }
    if (this._inverse !== undefined) {
      hasAnyValues = true;
      internalValueResult.inverse = this._inverse;
    }
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LbHttpForwardingRuleBodyCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caseSensitive = undefined;
      this._inverse = undefined;
      this._matchType = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caseSensitive = value.caseSensitive;
      this._inverse = value.inverse;
      this._matchType = value.matchType;
      this._value = value.value;
    }
  }

  // case_sensitive - computed: false, optional: true, required: false
  private _caseSensitive?: boolean | cdktf.IResolvable; 
  public get caseSensitive() {
    return this.getBooleanAttribute('case_sensitive');
  }
  public set caseSensitive(value: boolean | cdktf.IResolvable) {
    this._caseSensitive = value;
  }
  public resetCaseSensitive() {
    this._caseSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitiveInput() {
    return this._caseSensitive;
  }

  // inverse - computed: false, optional: true, required: false
  private _inverse?: boolean | cdktf.IResolvable; 
  public get inverse() {
    return this.getBooleanAttribute('inverse');
  }
  public set inverse(value: boolean | cdktf.IResolvable) {
    this._inverse = value;
  }
  public resetInverse() {
    this._inverse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inverseInput() {
    return this._inverse;
  }

  // match_type - computed: false, optional: false, required: true
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
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

export class LbHttpForwardingRuleBodyConditionList extends cdktf.ComplexList {
  public internalValue? : LbHttpForwardingRuleBodyCondition[] | cdktf.IResolvable

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
  public get(index: number): LbHttpForwardingRuleBodyConditionOutputReference {
    return new LbHttpForwardingRuleBodyConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LbHttpForwardingRuleCookieCondition {
  /**
  * If true, case is significant in condition matching
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_forwarding_rule#case_sensitive LbHttpForwardingRule#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Whether to reverse match result of this condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_forwarding_rule#inverse LbHttpForwardingRule#inverse}
  */
  readonly inverse?: boolean | cdktf.IResolvable;
  /**
  * Match type (STARTS_WITH, ENDS_WITH, EQUALS, CONTAINS, REGEX)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_forwarding_rule#match_type LbHttpForwardingRule#match_type}
  */
  readonly matchType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_forwarding_rule#name LbHttpForwardingRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_forwarding_rule#value LbHttpForwardingRule#value}
  */
  readonly value: string;
}

export function lbHttpForwardingRuleCookieConditionToTerraform(struct?: LbHttpForwardingRuleCookieCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    case_sensitive: cdktf.booleanToTerraform(struct!.caseSensitive),
    inverse: cdktf.booleanToTerraform(struct!.inverse),
    match_type: cdktf.stringToTerraform(struct!.matchType),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lbHttpForwardingRuleCookieConditionToHclTerraform(struct?: LbHttpForwardingRuleCookieCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    case_sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.caseSensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    inverse: {
      value: cdktf.booleanToHclTerraform(struct!.inverse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_type: {
      value: cdktf.stringToHclTerraform(struct!.matchType),
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

export class LbHttpForwardingRuleCookieConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LbHttpForwardingRuleCookieCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseSensitive = this._caseSensitive;
    }
    if (this._inverse !== undefined) {
      hasAnyValues = true;
      internalValueResult.inverse = this._inverse;
    }
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
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

  public set internalValue(value: LbHttpForwardingRuleCookieCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caseSensitive = undefined;
      this._inverse = undefined;
      this._matchType = undefined;
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
      this._caseSensitive = value.caseSensitive;
      this._inverse = value.inverse;
      this._matchType = value.matchType;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // case_sensitive - computed: false, optional: true, required: false
  private _caseSensitive?: boolean | cdktf.IResolvable; 
  public get caseSensitive() {
    return this.getBooleanAttribute('case_sensitive');
  }
  public set caseSensitive(value: boolean | cdktf.IResolvable) {
    this._caseSensitive = value;
  }
  public resetCaseSensitive() {
    this._caseSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitiveInput() {
    return this._caseSensitive;
  }

  // inverse - computed: false, optional: true, required: false
  private _inverse?: boolean | cdktf.IResolvable; 
  public get inverse() {
    return this.getBooleanAttribute('inverse');
  }
  public set inverse(value: boolean | cdktf.IResolvable) {
    this._inverse = value;
  }
  public resetInverse() {
    this._inverse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inverseInput() {
    return this._inverse;
  }

  // match_type - computed: false, optional: false, required: true
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
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

export class LbHttpForwardingRuleCookieConditionList extends cdktf.ComplexList {
  public internalValue? : LbHttpForwardingRuleCookieCondition[] | cdktf.IResolvable

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
  public get(index: number): LbHttpForwardingRuleCookieConditionOutputReference {
    return new LbHttpForwardingRuleCookieConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LbHttpForwardingRuleHeaderCondition {
  /**
  * If true, case is significant in condition matching
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_forwarding_rule#case_sensitive LbHttpForwardingRule#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Whether to reverse match result of this condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_forwarding_rule#inverse LbHttpForwardingRule#inverse}
  */
  readonly inverse?: boolean | cdktf.IResolvable;
  /**
  * Match type (STARTS_WITH, ENDS_WITH, EQUALS, CONTAINS, REGEX)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_forwarding_rule#match_type LbHttpForwardingRule#match_type}
  */
  readonly matchType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_forwarding_rule#name LbHttpForwardingRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_forwarding_rule#value LbHttpForwardingRule#value}
  */
  readonly value: string;
}

export function lbHttpForwardingRuleHeaderConditionToTerraform(struct?: LbHttpForwardingRuleHeaderCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    case_sensitive: cdktf.booleanToTerraform(struct!.caseSensitive),
    inverse: cdktf.booleanToTerraform(struct!.inverse),
    match_type: cdktf.stringToTerraform(struct!.matchType),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lbHttpForwardingRuleHeaderConditionToHclTerraform(struct?: LbHttpForwardingRuleHeaderCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    case_sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.caseSensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    inverse: {
      value: cdktf.booleanToHclTerraform(struct!.inverse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_type: {
      value: cdktf.stringToHclTerraform(struct!.matchType),
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

export class LbHttpForwardingRuleHeaderConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LbHttpForwardingRuleHeaderCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseSensitive = this._caseSensitive;
    }
    if (this._inverse !== undefined) {
      hasAnyValues = true;
      internalValueResult.inverse = this._inverse;
    }
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
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

  public set internalValue(value: LbHttpForwardingRuleHeaderCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caseSensitive = undefined;
      this._inverse = undefined;
      this._matchType = undefined;
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
      this._caseSensitive = value.caseSensitive;
      this._inverse = value.inverse;
      this._matchType = value.matchType;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // case_sensitive - computed: false, optional: true, required: false
  private _caseSensitive?: boolean | cdktf.IResolvable; 
  public get caseSensitive() {
    return this.getBooleanAttribute('case_sensitive');
  }
  public set caseSensitive(value: boolean | cdktf.IResolvable) {
    this._caseSensitive = value;
  }
  public resetCaseSensitive() {
    this._caseSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitiveInput() {
    return this._caseSensitive;
  }

  // inverse - computed: false, optional: true, required: false
  private _inverse?: boolean | cdktf.IResolvable; 
  public get inverse() {
    return this.getBooleanAttribute('inverse');
  }
  public set inverse(value: boolean | cdktf.IResolvable) {
    this._inverse = value;
  }
  public resetInverse() {
    this._inverse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inverseInput() {
    return this._inverse;
  }

  // match_type - computed: false, optional: false, required: true
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
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

export class LbHttpForwardingRuleHeaderConditionList extends cdktf.ComplexList {
  public internalValue? : LbHttpForwardingRuleHeaderCondition[] | cdktf.IResolvable

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
  public get(index: number): LbHttpForwardingRuleHeaderConditionOutputReference {
    return new LbHttpForwardingRuleHeaderConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LbHttpForwardingRuleHttpRedirectAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_forwarding_rule#redirect_status LbHttpForwardingRule#redirect_status}
  */
  readonly redirectStatus: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_forwarding_rule#redirect_url LbHttpForwardingRule#redirect_url}
  */
  readonly redirectUrl: string;
}

export function lbHttpForwardingRuleHttpRedirectActionToTerraform(struct?: LbHttpForwardingRuleHttpRedirectActionOutputReference | LbHttpForwardingRuleHttpRedirectAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    redirect_status: cdktf.stringToTerraform(struct!.redirectStatus),
    redirect_url: cdktf.stringToTerraform(struct!.redirectUrl),
  }
}


export function lbHttpForwardingRuleHttpRedirectActionToHclTerraform(struct?: LbHttpForwardingRuleHttpRedirectActionOutputReference | LbHttpForwardingRuleHttpRedirectAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    redirect_status: {
      value: cdktf.stringToHclTerraform(struct!.redirectStatus),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LbHttpForwardingRuleHttpRedirectActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LbHttpForwardingRuleHttpRedirectAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._redirectStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectStatus = this._redirectStatus;
    }
    if (this._redirectUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectUrl = this._redirectUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LbHttpForwardingRuleHttpRedirectAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._redirectStatus = undefined;
      this._redirectUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._redirectStatus = value.redirectStatus;
      this._redirectUrl = value.redirectUrl;
    }
  }

  // redirect_status - computed: false, optional: false, required: true
  private _redirectStatus?: string; 
  public get redirectStatus() {
    return this.getStringAttribute('redirect_status');
  }
  public set redirectStatus(value: string) {
    this._redirectStatus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectStatusInput() {
    return this._redirectStatus;
  }

  // redirect_url - computed: false, optional: false, required: true
  private _redirectUrl?: string; 
  public get redirectUrl() {
    return this.getStringAttribute('redirect_url');
  }
  public set redirectUrl(value: string) {
    this._redirectUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUrlInput() {
    return this._redirectUrl;
  }
}
export interface LbHttpForwardingRuleHttpRejectAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_forwarding_rule#reply_message LbHttpForwardingRule#reply_message}
  */
  readonly replyMessage: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_forwarding_rule#reply_status LbHttpForwardingRule#reply_status}
  */
  readonly replyStatus: string;
}

export function lbHttpForwardingRuleHttpRejectActionToTerraform(struct?: LbHttpForwardingRuleHttpRejectActionOutputReference | LbHttpForwardingRuleHttpRejectAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reply_message: cdktf.stringToTerraform(struct!.replyMessage),
    reply_status: cdktf.stringToTerraform(struct!.replyStatus),
  }
}


export function lbHttpForwardingRuleHttpRejectActionToHclTerraform(struct?: LbHttpForwardingRuleHttpRejectActionOutputReference | LbHttpForwardingRuleHttpRejectAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reply_message: {
      value: cdktf.stringToHclTerraform(struct!.replyMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reply_status: {
      value: cdktf.stringToHclTerraform(struct!.replyStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LbHttpForwardingRuleHttpRejectActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LbHttpForwardingRuleHttpRejectAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._replyMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.replyMessage = this._replyMessage;
    }
    if (this._replyStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.replyStatus = this._replyStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LbHttpForwardingRuleHttpRejectAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._replyMessage = undefined;
      this._replyStatus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._replyMessage = value.replyMessage;
      this._replyStatus = value.replyStatus;
    }
  }

  // reply_message - computed: false, optional: false, required: true
  private _replyMessage?: string; 
  public get replyMessage() {
    return this.getStringAttribute('reply_message');
  }
  public set replyMessage(value: string) {
    this._replyMessage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replyMessageInput() {
    return this._replyMessage;
  }

  // reply_status - computed: false, optional: false, required: true
  private _replyStatus?: string; 
  public get replyStatus() {
    return this.getStringAttribute('reply_status');
  }
  public set replyStatus(value: string) {
    this._replyStatus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replyStatusInput() {
    return this._replyStatus;
  }
}
export interface LbHttpForwardingRuleIpCondition {
  /**
  * Whether to reverse match result of this condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_forwarding_rule#inverse LbHttpForwardingRule#inverse}
  */
  readonly inverse?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_forwarding_rule#source_address LbHttpForwardingRule#source_address}
  */
  readonly sourceAddress: string;
}

export function lbHttpForwardingRuleIpConditionToTerraform(struct?: LbHttpForwardingRuleIpCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inverse: cdktf.booleanToTerraform(struct!.inverse),
    source_address: cdktf.stringToTerraform(struct!.sourceAddress),
  }
}


export function lbHttpForwardingRuleIpConditionToHclTerraform(struct?: LbHttpForwardingRuleIpCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inverse: {
      value: cdktf.booleanToHclTerraform(struct!.inverse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source_address: {
      value: cdktf.stringToHclTerraform(struct!.sourceAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LbHttpForwardingRuleIpConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LbHttpForwardingRuleIpCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inverse !== undefined) {
      hasAnyValues = true;
      internalValueResult.inverse = this._inverse;
    }
    if (this._sourceAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddress = this._sourceAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LbHttpForwardingRuleIpCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inverse = undefined;
      this._sourceAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inverse = value.inverse;
      this._sourceAddress = value.sourceAddress;
    }
  }

  // inverse - computed: false, optional: true, required: false
  private _inverse?: boolean | cdktf.IResolvable; 
  public get inverse() {
    return this.getBooleanAttribute('inverse');
  }
  public set inverse(value: boolean | cdktf.IResolvable) {
    this._inverse = value;
  }
  public resetInverse() {
    this._inverse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inverseInput() {
    return this._inverse;
  }

  // source_address - computed: false, optional: false, required: true
  private _sourceAddress?: string; 
  public get sourceAddress() {
    return this.getStringAttribute('source_address');
  }
  public set sourceAddress(value: string) {
    this._sourceAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressInput() {
    return this._sourceAddress;
  }
}

export class LbHttpForwardingRuleIpConditionList extends cdktf.ComplexList {
  public internalValue? : LbHttpForwardingRuleIpCondition[] | cdktf.IResolvable

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
  public get(index: number): LbHttpForwardingRuleIpConditionOutputReference {
    return new LbHttpForwardingRuleIpConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LbHttpForwardingRuleMethodCondition {
  /**
  * Whether to reverse match result of this condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_forwarding_rule#inverse LbHttpForwardingRule#inverse}
  */
  readonly inverse?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_forwarding_rule#method LbHttpForwardingRule#method}
  */
  readonly method: string;
}

export function lbHttpForwardingRuleMethodConditionToTerraform(struct?: LbHttpForwardingRuleMethodCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inverse: cdktf.booleanToTerraform(struct!.inverse),
    method: cdktf.stringToTerraform(struct!.method),
  }
}


export function lbHttpForwardingRuleMethodConditionToHclTerraform(struct?: LbHttpForwardingRuleMethodCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inverse: {
      value: cdktf.booleanToHclTerraform(struct!.inverse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LbHttpForwardingRuleMethodConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LbHttpForwardingRuleMethodCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inverse !== undefined) {
      hasAnyValues = true;
      internalValueResult.inverse = this._inverse;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LbHttpForwardingRuleMethodCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inverse = undefined;
      this._method = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inverse = value.inverse;
      this._method = value.method;
    }
  }

  // inverse - computed: false, optional: true, required: false
  private _inverse?: boolean | cdktf.IResolvable; 
  public get inverse() {
    return this.getBooleanAttribute('inverse');
  }
  public set inverse(value: boolean | cdktf.IResolvable) {
    this._inverse = value;
  }
  public resetInverse() {
    this._inverse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inverseInput() {
    return this._inverse;
  }

  // method - computed: false, optional: false, required: true
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }
}

export class LbHttpForwardingRuleMethodConditionList extends cdktf.ComplexList {
  public internalValue? : LbHttpForwardingRuleMethodCondition[] | cdktf.IResolvable

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
  public get(index: number): LbHttpForwardingRuleMethodConditionOutputReference {
    return new LbHttpForwardingRuleMethodConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LbHttpForwardingRuleSelectPoolAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_forwarding_rule#pool_id LbHttpForwardingRule#pool_id}
  */
  readonly poolId: string;
}

export function lbHttpForwardingRuleSelectPoolActionToTerraform(struct?: LbHttpForwardingRuleSelectPoolActionOutputReference | LbHttpForwardingRuleSelectPoolAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pool_id: cdktf.stringToTerraform(struct!.poolId),
  }
}


export function lbHttpForwardingRuleSelectPoolActionToHclTerraform(struct?: LbHttpForwardingRuleSelectPoolActionOutputReference | LbHttpForwardingRuleSelectPoolAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pool_id: {
      value: cdktf.stringToHclTerraform(struct!.poolId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LbHttpForwardingRuleSelectPoolActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LbHttpForwardingRuleSelectPoolAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._poolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolId = this._poolId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LbHttpForwardingRuleSelectPoolAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._poolId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._poolId = value.poolId;
    }
  }

  // pool_id - computed: false, optional: false, required: true
  private _poolId?: string; 
  public get poolId() {
    return this.getStringAttribute('pool_id');
  }
  public set poolId(value: string) {
    this._poolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolIdInput() {
    return this._poolId;
  }
}
export interface LbHttpForwardingRuleTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_forwarding_rule#scope LbHttpForwardingRule#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_forwarding_rule#tag LbHttpForwardingRule#tag}
  */
  readonly tag?: string;
}

export function lbHttpForwardingRuleTagToTerraform(struct?: LbHttpForwardingRuleTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function lbHttpForwardingRuleTagToHclTerraform(struct?: LbHttpForwardingRuleTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LbHttpForwardingRuleTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LbHttpForwardingRuleTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LbHttpForwardingRuleTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scope = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scope = value.scope;
      this._tag = value.tag;
    }
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}

export class LbHttpForwardingRuleTagList extends cdktf.ComplexList {
  public internalValue? : LbHttpForwardingRuleTag[] | cdktf.IResolvable

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
  public get(index: number): LbHttpForwardingRuleTagOutputReference {
    return new LbHttpForwardingRuleTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LbHttpForwardingRuleTcpCondition {
  /**
  * Whether to reverse match result of this condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_forwarding_rule#inverse LbHttpForwardingRule#inverse}
  */
  readonly inverse?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_forwarding_rule#source_port LbHttpForwardingRule#source_port}
  */
  readonly sourcePort: string;
}

export function lbHttpForwardingRuleTcpConditionToTerraform(struct?: LbHttpForwardingRuleTcpCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inverse: cdktf.booleanToTerraform(struct!.inverse),
    source_port: cdktf.stringToTerraform(struct!.sourcePort),
  }
}


export function lbHttpForwardingRuleTcpConditionToHclTerraform(struct?: LbHttpForwardingRuleTcpCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inverse: {
      value: cdktf.booleanToHclTerraform(struct!.inverse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source_port: {
      value: cdktf.stringToHclTerraform(struct!.sourcePort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LbHttpForwardingRuleTcpConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LbHttpForwardingRuleTcpCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inverse !== undefined) {
      hasAnyValues = true;
      internalValueResult.inverse = this._inverse;
    }
    if (this._sourcePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePort = this._sourcePort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LbHttpForwardingRuleTcpCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inverse = undefined;
      this._sourcePort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inverse = value.inverse;
      this._sourcePort = value.sourcePort;
    }
  }

  // inverse - computed: false, optional: true, required: false
  private _inverse?: boolean | cdktf.IResolvable; 
  public get inverse() {
    return this.getBooleanAttribute('inverse');
  }
  public set inverse(value: boolean | cdktf.IResolvable) {
    this._inverse = value;
  }
  public resetInverse() {
    this._inverse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inverseInput() {
    return this._inverse;
  }

  // source_port - computed: false, optional: false, required: true
  private _sourcePort?: string; 
  public get sourcePort() {
    return this.getStringAttribute('source_port');
  }
  public set sourcePort(value: string) {
    this._sourcePort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortInput() {
    return this._sourcePort;
  }
}

export class LbHttpForwardingRuleTcpConditionList extends cdktf.ComplexList {
  public internalValue? : LbHttpForwardingRuleTcpCondition[] | cdktf.IResolvable

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
  public get(index: number): LbHttpForwardingRuleTcpConditionOutputReference {
    return new LbHttpForwardingRuleTcpConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LbHttpForwardingRuleUriCondition {
  /**
  * If true, case is significant in condition matching
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_forwarding_rule#case_sensitive LbHttpForwardingRule#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Whether to reverse match result of this condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_forwarding_rule#inverse LbHttpForwardingRule#inverse}
  */
  readonly inverse?: boolean | cdktf.IResolvable;
  /**
  * Match type (STARTS_WITH, ENDS_WITH, EQUALS, CONTAINS, REGEX)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_forwarding_rule#match_type LbHttpForwardingRule#match_type}
  */
  readonly matchType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_forwarding_rule#uri LbHttpForwardingRule#uri}
  */
  readonly uri: string;
}

export function lbHttpForwardingRuleUriConditionToTerraform(struct?: LbHttpForwardingRuleUriCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    case_sensitive: cdktf.booleanToTerraform(struct!.caseSensitive),
    inverse: cdktf.booleanToTerraform(struct!.inverse),
    match_type: cdktf.stringToTerraform(struct!.matchType),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function lbHttpForwardingRuleUriConditionToHclTerraform(struct?: LbHttpForwardingRuleUriCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    case_sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.caseSensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    inverse: {
      value: cdktf.booleanToHclTerraform(struct!.inverse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_type: {
      value: cdktf.stringToHclTerraform(struct!.matchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LbHttpForwardingRuleUriConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LbHttpForwardingRuleUriCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseSensitive = this._caseSensitive;
    }
    if (this._inverse !== undefined) {
      hasAnyValues = true;
      internalValueResult.inverse = this._inverse;
    }
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LbHttpForwardingRuleUriCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caseSensitive = undefined;
      this._inverse = undefined;
      this._matchType = undefined;
      this._uri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caseSensitive = value.caseSensitive;
      this._inverse = value.inverse;
      this._matchType = value.matchType;
      this._uri = value.uri;
    }
  }

  // case_sensitive - computed: false, optional: true, required: false
  private _caseSensitive?: boolean | cdktf.IResolvable; 
  public get caseSensitive() {
    return this.getBooleanAttribute('case_sensitive');
  }
  public set caseSensitive(value: boolean | cdktf.IResolvable) {
    this._caseSensitive = value;
  }
  public resetCaseSensitive() {
    this._caseSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitiveInput() {
    return this._caseSensitive;
  }

  // inverse - computed: false, optional: true, required: false
  private _inverse?: boolean | cdktf.IResolvable; 
  public get inverse() {
    return this.getBooleanAttribute('inverse');
  }
  public set inverse(value: boolean | cdktf.IResolvable) {
    this._inverse = value;
  }
  public resetInverse() {
    this._inverse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inverseInput() {
    return this._inverse;
  }

  // match_type - computed: false, optional: false, required: true
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}

export class LbHttpForwardingRuleUriConditionList extends cdktf.ComplexList {
  public internalValue? : LbHttpForwardingRuleUriCondition[] | cdktf.IResolvable

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
  public get(index: number): LbHttpForwardingRuleUriConditionOutputReference {
    return new LbHttpForwardingRuleUriConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LbHttpForwardingRuleVersionCondition {
  /**
  * Whether to reverse match result of this condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_forwarding_rule#inverse LbHttpForwardingRule#inverse}
  */
  readonly inverse?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_forwarding_rule#version LbHttpForwardingRule#version}
  */
  readonly version: string;
}

export function lbHttpForwardingRuleVersionConditionToTerraform(struct?: LbHttpForwardingRuleVersionConditionOutputReference | LbHttpForwardingRuleVersionCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inverse: cdktf.booleanToTerraform(struct!.inverse),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function lbHttpForwardingRuleVersionConditionToHclTerraform(struct?: LbHttpForwardingRuleVersionConditionOutputReference | LbHttpForwardingRuleVersionCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inverse: {
      value: cdktf.booleanToHclTerraform(struct!.inverse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LbHttpForwardingRuleVersionConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LbHttpForwardingRuleVersionCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inverse !== undefined) {
      hasAnyValues = true;
      internalValueResult.inverse = this._inverse;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LbHttpForwardingRuleVersionCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inverse = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inverse = value.inverse;
      this._version = value.version;
    }
  }

  // inverse - computed: false, optional: true, required: false
  private _inverse?: boolean | cdktf.IResolvable; 
  public get inverse() {
    return this.getBooleanAttribute('inverse');
  }
  public set inverse(value: boolean | cdktf.IResolvable) {
    this._inverse = value;
  }
  public resetInverse() {
    this._inverse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inverseInput() {
    return this._inverse;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_forwarding_rule nsxt_lb_http_forwarding_rule}
*/
export class LbHttpForwardingRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_lb_http_forwarding_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LbHttpForwardingRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LbHttpForwardingRule to import
  * @param importFromId The id of the existing LbHttpForwardingRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_forwarding_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LbHttpForwardingRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_lb_http_forwarding_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_forwarding_rule nsxt_lb_http_forwarding_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LbHttpForwardingRuleConfig = {}
  */
  public constructor(scope: Construct, id: string, config: LbHttpForwardingRuleConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nsxt_lb_http_forwarding_rule',
      terraformGeneratorMetadata: {
        providerName: 'nsxt',
        providerVersion: '3.10.0',
        providerVersionConstraint: '3.10.0'
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
    this._displayName = config.displayName;
    this._id = config.id;
    this._matchStrategy = config.matchStrategy;
    this._bodyCondition.internalValue = config.bodyCondition;
    this._cookieCondition.internalValue = config.cookieCondition;
    this._headerCondition.internalValue = config.headerCondition;
    this._httpRedirectAction.internalValue = config.httpRedirectAction;
    this._httpRejectAction.internalValue = config.httpRejectAction;
    this._ipCondition.internalValue = config.ipCondition;
    this._methodCondition.internalValue = config.methodCondition;
    this._selectPoolAction.internalValue = config.selectPoolAction;
    this._tag.internalValue = config.tag;
    this._tcpCondition.internalValue = config.tcpCondition;
    this._uriCondition.internalValue = config.uriCondition;
    this._versionCondition.internalValue = config.versionCondition;
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

  // match_strategy - computed: false, optional: true, required: false
  private _matchStrategy?: string; 
  public get matchStrategy() {
    return this.getStringAttribute('match_strategy');
  }
  public set matchStrategy(value: string) {
    this._matchStrategy = value;
  }
  public resetMatchStrategy() {
    this._matchStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchStrategyInput() {
    return this._matchStrategy;
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
  }

  // body_condition - computed: false, optional: true, required: false
  private _bodyCondition = new LbHttpForwardingRuleBodyConditionList(this, "body_condition", true);
  public get bodyCondition() {
    return this._bodyCondition;
  }
  public putBodyCondition(value: LbHttpForwardingRuleBodyCondition[] | cdktf.IResolvable) {
    this._bodyCondition.internalValue = value;
  }
  public resetBodyCondition() {
    this._bodyCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyConditionInput() {
    return this._bodyCondition.internalValue;
  }

  // cookie_condition - computed: false, optional: true, required: false
  private _cookieCondition = new LbHttpForwardingRuleCookieConditionList(this, "cookie_condition", true);
  public get cookieCondition() {
    return this._cookieCondition;
  }
  public putCookieCondition(value: LbHttpForwardingRuleCookieCondition[] | cdktf.IResolvable) {
    this._cookieCondition.internalValue = value;
  }
  public resetCookieCondition() {
    this._cookieCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieConditionInput() {
    return this._cookieCondition.internalValue;
  }

  // header_condition - computed: false, optional: true, required: false
  private _headerCondition = new LbHttpForwardingRuleHeaderConditionList(this, "header_condition", true);
  public get headerCondition() {
    return this._headerCondition;
  }
  public putHeaderCondition(value: LbHttpForwardingRuleHeaderCondition[] | cdktf.IResolvable) {
    this._headerCondition.internalValue = value;
  }
  public resetHeaderCondition() {
    this._headerCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerConditionInput() {
    return this._headerCondition.internalValue;
  }

  // http_redirect_action - computed: false, optional: true, required: false
  private _httpRedirectAction = new LbHttpForwardingRuleHttpRedirectActionOutputReference(this, "http_redirect_action");
  public get httpRedirectAction() {
    return this._httpRedirectAction;
  }
  public putHttpRedirectAction(value: LbHttpForwardingRuleHttpRedirectAction) {
    this._httpRedirectAction.internalValue = value;
  }
  public resetHttpRedirectAction() {
    this._httpRedirectAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRedirectActionInput() {
    return this._httpRedirectAction.internalValue;
  }

  // http_reject_action - computed: false, optional: true, required: false
  private _httpRejectAction = new LbHttpForwardingRuleHttpRejectActionOutputReference(this, "http_reject_action");
  public get httpRejectAction() {
    return this._httpRejectAction;
  }
  public putHttpRejectAction(value: LbHttpForwardingRuleHttpRejectAction) {
    this._httpRejectAction.internalValue = value;
  }
  public resetHttpRejectAction() {
    this._httpRejectAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRejectActionInput() {
    return this._httpRejectAction.internalValue;
  }

  // ip_condition - computed: false, optional: true, required: false
  private _ipCondition = new LbHttpForwardingRuleIpConditionList(this, "ip_condition", true);
  public get ipCondition() {
    return this._ipCondition;
  }
  public putIpCondition(value: LbHttpForwardingRuleIpCondition[] | cdktf.IResolvable) {
    this._ipCondition.internalValue = value;
  }
  public resetIpCondition() {
    this._ipCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipConditionInput() {
    return this._ipCondition.internalValue;
  }

  // method_condition - computed: false, optional: true, required: false
  private _methodCondition = new LbHttpForwardingRuleMethodConditionList(this, "method_condition", true);
  public get methodCondition() {
    return this._methodCondition;
  }
  public putMethodCondition(value: LbHttpForwardingRuleMethodCondition[] | cdktf.IResolvable) {
    this._methodCondition.internalValue = value;
  }
  public resetMethodCondition() {
    this._methodCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodConditionInput() {
    return this._methodCondition.internalValue;
  }

  // select_pool_action - computed: false, optional: true, required: false
  private _selectPoolAction = new LbHttpForwardingRuleSelectPoolActionOutputReference(this, "select_pool_action");
  public get selectPoolAction() {
    return this._selectPoolAction;
  }
  public putSelectPoolAction(value: LbHttpForwardingRuleSelectPoolAction) {
    this._selectPoolAction.internalValue = value;
  }
  public resetSelectPoolAction() {
    this._selectPoolAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectPoolActionInput() {
    return this._selectPoolAction.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new LbHttpForwardingRuleTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: LbHttpForwardingRuleTag[] | cdktf.IResolvable) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }

  // tcp_condition - computed: false, optional: true, required: false
  private _tcpCondition = new LbHttpForwardingRuleTcpConditionList(this, "tcp_condition", true);
  public get tcpCondition() {
    return this._tcpCondition;
  }
  public putTcpCondition(value: LbHttpForwardingRuleTcpCondition[] | cdktf.IResolvable) {
    this._tcpCondition.internalValue = value;
  }
  public resetTcpCondition() {
    this._tcpCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpConditionInput() {
    return this._tcpCondition.internalValue;
  }

  // uri_condition - computed: false, optional: true, required: false
  private _uriCondition = new LbHttpForwardingRuleUriConditionList(this, "uri_condition", true);
  public get uriCondition() {
    return this._uriCondition;
  }
  public putUriCondition(value: LbHttpForwardingRuleUriCondition[] | cdktf.IResolvable) {
    this._uriCondition.internalValue = value;
  }
  public resetUriCondition() {
    this._uriCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriConditionInput() {
    return this._uriCondition.internalValue;
  }

  // version_condition - computed: false, optional: true, required: false
  private _versionCondition = new LbHttpForwardingRuleVersionConditionOutputReference(this, "version_condition");
  public get versionCondition() {
    return this._versionCondition;
  }
  public putVersionCondition(value: LbHttpForwardingRuleVersionCondition) {
    this._versionCondition.internalValue = value;
  }
  public resetVersionCondition() {
    this._versionCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionConditionInput() {
    return this._versionCondition.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      match_strategy: cdktf.stringToTerraform(this._matchStrategy),
      body_condition: cdktf.listMapper(lbHttpForwardingRuleBodyConditionToTerraform, true)(this._bodyCondition.internalValue),
      cookie_condition: cdktf.listMapper(lbHttpForwardingRuleCookieConditionToTerraform, true)(this._cookieCondition.internalValue),
      header_condition: cdktf.listMapper(lbHttpForwardingRuleHeaderConditionToTerraform, true)(this._headerCondition.internalValue),
      http_redirect_action: lbHttpForwardingRuleHttpRedirectActionToTerraform(this._httpRedirectAction.internalValue),
      http_reject_action: lbHttpForwardingRuleHttpRejectActionToTerraform(this._httpRejectAction.internalValue),
      ip_condition: cdktf.listMapper(lbHttpForwardingRuleIpConditionToTerraform, true)(this._ipCondition.internalValue),
      method_condition: cdktf.listMapper(lbHttpForwardingRuleMethodConditionToTerraform, true)(this._methodCondition.internalValue),
      select_pool_action: lbHttpForwardingRuleSelectPoolActionToTerraform(this._selectPoolAction.internalValue),
      tag: cdktf.listMapper(lbHttpForwardingRuleTagToTerraform, true)(this._tag.internalValue),
      tcp_condition: cdktf.listMapper(lbHttpForwardingRuleTcpConditionToTerraform, true)(this._tcpCondition.internalValue),
      uri_condition: cdktf.listMapper(lbHttpForwardingRuleUriConditionToTerraform, true)(this._uriCondition.internalValue),
      version_condition: lbHttpForwardingRuleVersionConditionToTerraform(this._versionCondition.internalValue),
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
      match_strategy: {
        value: cdktf.stringToHclTerraform(this._matchStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      body_condition: {
        value: cdktf.listMapperHcl(lbHttpForwardingRuleBodyConditionToHclTerraform, true)(this._bodyCondition.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LbHttpForwardingRuleBodyConditionList",
      },
      cookie_condition: {
        value: cdktf.listMapperHcl(lbHttpForwardingRuleCookieConditionToHclTerraform, true)(this._cookieCondition.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LbHttpForwardingRuleCookieConditionList",
      },
      header_condition: {
        value: cdktf.listMapperHcl(lbHttpForwardingRuleHeaderConditionToHclTerraform, true)(this._headerCondition.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LbHttpForwardingRuleHeaderConditionList",
      },
      http_redirect_action: {
        value: lbHttpForwardingRuleHttpRedirectActionToHclTerraform(this._httpRedirectAction.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LbHttpForwardingRuleHttpRedirectActionList",
      },
      http_reject_action: {
        value: lbHttpForwardingRuleHttpRejectActionToHclTerraform(this._httpRejectAction.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LbHttpForwardingRuleHttpRejectActionList",
      },
      ip_condition: {
        value: cdktf.listMapperHcl(lbHttpForwardingRuleIpConditionToHclTerraform, true)(this._ipCondition.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LbHttpForwardingRuleIpConditionList",
      },
      method_condition: {
        value: cdktf.listMapperHcl(lbHttpForwardingRuleMethodConditionToHclTerraform, true)(this._methodCondition.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LbHttpForwardingRuleMethodConditionList",
      },
      select_pool_action: {
        value: lbHttpForwardingRuleSelectPoolActionToHclTerraform(this._selectPoolAction.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LbHttpForwardingRuleSelectPoolActionList",
      },
      tag: {
        value: cdktf.listMapperHcl(lbHttpForwardingRuleTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LbHttpForwardingRuleTagList",
      },
      tcp_condition: {
        value: cdktf.listMapperHcl(lbHttpForwardingRuleTcpConditionToHclTerraform, true)(this._tcpCondition.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LbHttpForwardingRuleTcpConditionList",
      },
      uri_condition: {
        value: cdktf.listMapperHcl(lbHttpForwardingRuleUriConditionToHclTerraform, true)(this._uriCondition.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LbHttpForwardingRuleUriConditionList",
      },
      version_condition: {
        value: lbHttpForwardingRuleVersionConditionToHclTerraform(this._versionCondition.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LbHttpForwardingRuleVersionConditionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
