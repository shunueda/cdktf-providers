// https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_request_rewrite_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LbHttpRequestRewriteRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_request_rewrite_rule#description LbHttpRequestRewriteRule#description}
  */
  readonly description?: string;
  /**
  * The display name of this resource. Defaults to ID if not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_request_rewrite_rule#display_name LbHttpRequestRewriteRule#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_request_rewrite_rule#id LbHttpRequestRewriteRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Strategy when multiple match conditions are specified in one rule (ANY vs ALL)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_request_rewrite_rule#match_strategy LbHttpRequestRewriteRule#match_strategy}
  */
  readonly matchStrategy?: string;
  /**
  * body_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_request_rewrite_rule#body_condition LbHttpRequestRewriteRule#body_condition}
  */
  readonly bodyCondition?: LbHttpRequestRewriteRuleBodyCondition[] | cdktf.IResolvable;
  /**
  * cookie_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_request_rewrite_rule#cookie_condition LbHttpRequestRewriteRule#cookie_condition}
  */
  readonly cookieCondition?: LbHttpRequestRewriteRuleCookieCondition[] | cdktf.IResolvable;
  /**
  * header_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_request_rewrite_rule#header_condition LbHttpRequestRewriteRule#header_condition}
  */
  readonly headerCondition?: LbHttpRequestRewriteRuleHeaderCondition[] | cdktf.IResolvable;
  /**
  * header_rewrite_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_request_rewrite_rule#header_rewrite_action LbHttpRequestRewriteRule#header_rewrite_action}
  */
  readonly headerRewriteAction?: LbHttpRequestRewriteRuleHeaderRewriteAction;
  /**
  * ip_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_request_rewrite_rule#ip_condition LbHttpRequestRewriteRule#ip_condition}
  */
  readonly ipCondition?: LbHttpRequestRewriteRuleIpCondition[] | cdktf.IResolvable;
  /**
  * method_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_request_rewrite_rule#method_condition LbHttpRequestRewriteRule#method_condition}
  */
  readonly methodCondition?: LbHttpRequestRewriteRuleMethodCondition[] | cdktf.IResolvable;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_request_rewrite_rule#tag LbHttpRequestRewriteRule#tag}
  */
  readonly tag?: LbHttpRequestRewriteRuleTag[] | cdktf.IResolvable;
  /**
  * tcp_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_request_rewrite_rule#tcp_condition LbHttpRequestRewriteRule#tcp_condition}
  */
  readonly tcpCondition?: LbHttpRequestRewriteRuleTcpCondition[] | cdktf.IResolvable;
  /**
  * uri_arguments_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_request_rewrite_rule#uri_arguments_condition LbHttpRequestRewriteRule#uri_arguments_condition}
  */
  readonly uriArgumentsCondition?: LbHttpRequestRewriteRuleUriArgumentsCondition[] | cdktf.IResolvable;
  /**
  * uri_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_request_rewrite_rule#uri_condition LbHttpRequestRewriteRule#uri_condition}
  */
  readonly uriCondition?: LbHttpRequestRewriteRuleUriCondition[] | cdktf.IResolvable;
  /**
  * uri_rewrite_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_request_rewrite_rule#uri_rewrite_action LbHttpRequestRewriteRule#uri_rewrite_action}
  */
  readonly uriRewriteAction?: LbHttpRequestRewriteRuleUriRewriteAction;
  /**
  * version_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_request_rewrite_rule#version_condition LbHttpRequestRewriteRule#version_condition}
  */
  readonly versionCondition?: LbHttpRequestRewriteRuleVersionCondition;
}
export interface LbHttpRequestRewriteRuleBodyCondition {
  /**
  * If true, case is significant in condition matching
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_request_rewrite_rule#case_sensitive LbHttpRequestRewriteRule#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Whether to reverse match result of this condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_request_rewrite_rule#inverse LbHttpRequestRewriteRule#inverse}
  */
  readonly inverse?: boolean | cdktf.IResolvable;
  /**
  * Match type (STARTS_WITH, ENDS_WITH, EQUALS, CONTAINS, REGEX)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_request_rewrite_rule#match_type LbHttpRequestRewriteRule#match_type}
  */
  readonly matchType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_request_rewrite_rule#value LbHttpRequestRewriteRule#value}
  */
  readonly value: string;
}

export function lbHttpRequestRewriteRuleBodyConditionToTerraform(struct?: LbHttpRequestRewriteRuleBodyCondition | cdktf.IResolvable): any {
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


export function lbHttpRequestRewriteRuleBodyConditionToHclTerraform(struct?: LbHttpRequestRewriteRuleBodyCondition | cdktf.IResolvable): any {
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

export class LbHttpRequestRewriteRuleBodyConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LbHttpRequestRewriteRuleBodyCondition | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LbHttpRequestRewriteRuleBodyCondition | cdktf.IResolvable | undefined) {
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

export class LbHttpRequestRewriteRuleBodyConditionList extends cdktf.ComplexList {
  public internalValue? : LbHttpRequestRewriteRuleBodyCondition[] | cdktf.IResolvable

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
  public get(index: number): LbHttpRequestRewriteRuleBodyConditionOutputReference {
    return new LbHttpRequestRewriteRuleBodyConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LbHttpRequestRewriteRuleCookieCondition {
  /**
  * If true, case is significant in condition matching
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_request_rewrite_rule#case_sensitive LbHttpRequestRewriteRule#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Whether to reverse match result of this condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_request_rewrite_rule#inverse LbHttpRequestRewriteRule#inverse}
  */
  readonly inverse?: boolean | cdktf.IResolvable;
  /**
  * Match type (STARTS_WITH, ENDS_WITH, EQUALS, CONTAINS, REGEX)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_request_rewrite_rule#match_type LbHttpRequestRewriteRule#match_type}
  */
  readonly matchType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_request_rewrite_rule#name LbHttpRequestRewriteRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_request_rewrite_rule#value LbHttpRequestRewriteRule#value}
  */
  readonly value: string;
}

export function lbHttpRequestRewriteRuleCookieConditionToTerraform(struct?: LbHttpRequestRewriteRuleCookieCondition | cdktf.IResolvable): any {
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


export function lbHttpRequestRewriteRuleCookieConditionToHclTerraform(struct?: LbHttpRequestRewriteRuleCookieCondition | cdktf.IResolvable): any {
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

export class LbHttpRequestRewriteRuleCookieConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LbHttpRequestRewriteRuleCookieCondition | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LbHttpRequestRewriteRuleCookieCondition | cdktf.IResolvable | undefined) {
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

export class LbHttpRequestRewriteRuleCookieConditionList extends cdktf.ComplexList {
  public internalValue? : LbHttpRequestRewriteRuleCookieCondition[] | cdktf.IResolvable

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
  public get(index: number): LbHttpRequestRewriteRuleCookieConditionOutputReference {
    return new LbHttpRequestRewriteRuleCookieConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LbHttpRequestRewriteRuleHeaderCondition {
  /**
  * If true, case is significant in condition matching
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_request_rewrite_rule#case_sensitive LbHttpRequestRewriteRule#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Whether to reverse match result of this condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_request_rewrite_rule#inverse LbHttpRequestRewriteRule#inverse}
  */
  readonly inverse?: boolean | cdktf.IResolvable;
  /**
  * Match type (STARTS_WITH, ENDS_WITH, EQUALS, CONTAINS, REGEX)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_request_rewrite_rule#match_type LbHttpRequestRewriteRule#match_type}
  */
  readonly matchType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_request_rewrite_rule#name LbHttpRequestRewriteRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_request_rewrite_rule#value LbHttpRequestRewriteRule#value}
  */
  readonly value: string;
}

export function lbHttpRequestRewriteRuleHeaderConditionToTerraform(struct?: LbHttpRequestRewriteRuleHeaderCondition | cdktf.IResolvable): any {
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


export function lbHttpRequestRewriteRuleHeaderConditionToHclTerraform(struct?: LbHttpRequestRewriteRuleHeaderCondition | cdktf.IResolvable): any {
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

export class LbHttpRequestRewriteRuleHeaderConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LbHttpRequestRewriteRuleHeaderCondition | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LbHttpRequestRewriteRuleHeaderCondition | cdktf.IResolvable | undefined) {
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

export class LbHttpRequestRewriteRuleHeaderConditionList extends cdktf.ComplexList {
  public internalValue? : LbHttpRequestRewriteRuleHeaderCondition[] | cdktf.IResolvable

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
  public get(index: number): LbHttpRequestRewriteRuleHeaderConditionOutputReference {
    return new LbHttpRequestRewriteRuleHeaderConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LbHttpRequestRewriteRuleHeaderRewriteAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_request_rewrite_rule#name LbHttpRequestRewriteRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_request_rewrite_rule#value LbHttpRequestRewriteRule#value}
  */
  readonly value?: string;
}

export function lbHttpRequestRewriteRuleHeaderRewriteActionToTerraform(struct?: LbHttpRequestRewriteRuleHeaderRewriteActionOutputReference | LbHttpRequestRewriteRuleHeaderRewriteAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lbHttpRequestRewriteRuleHeaderRewriteActionToHclTerraform(struct?: LbHttpRequestRewriteRuleHeaderRewriteActionOutputReference | LbHttpRequestRewriteRuleHeaderRewriteAction): any {
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

export class LbHttpRequestRewriteRuleHeaderRewriteActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LbHttpRequestRewriteRuleHeaderRewriteAction | undefined {
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

  public set internalValue(value: LbHttpRequestRewriteRuleHeaderRewriteAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface LbHttpRequestRewriteRuleIpCondition {
  /**
  * Whether to reverse match result of this condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_request_rewrite_rule#inverse LbHttpRequestRewriteRule#inverse}
  */
  readonly inverse?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_request_rewrite_rule#source_address LbHttpRequestRewriteRule#source_address}
  */
  readonly sourceAddress: string;
}

export function lbHttpRequestRewriteRuleIpConditionToTerraform(struct?: LbHttpRequestRewriteRuleIpCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inverse: cdktf.booleanToTerraform(struct!.inverse),
    source_address: cdktf.stringToTerraform(struct!.sourceAddress),
  }
}


export function lbHttpRequestRewriteRuleIpConditionToHclTerraform(struct?: LbHttpRequestRewriteRuleIpCondition | cdktf.IResolvable): any {
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

export class LbHttpRequestRewriteRuleIpConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LbHttpRequestRewriteRuleIpCondition | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LbHttpRequestRewriteRuleIpCondition | cdktf.IResolvable | undefined) {
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

export class LbHttpRequestRewriteRuleIpConditionList extends cdktf.ComplexList {
  public internalValue? : LbHttpRequestRewriteRuleIpCondition[] | cdktf.IResolvable

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
  public get(index: number): LbHttpRequestRewriteRuleIpConditionOutputReference {
    return new LbHttpRequestRewriteRuleIpConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LbHttpRequestRewriteRuleMethodCondition {
  /**
  * Whether to reverse match result of this condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_request_rewrite_rule#inverse LbHttpRequestRewriteRule#inverse}
  */
  readonly inverse?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_request_rewrite_rule#method LbHttpRequestRewriteRule#method}
  */
  readonly method: string;
}

export function lbHttpRequestRewriteRuleMethodConditionToTerraform(struct?: LbHttpRequestRewriteRuleMethodCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inverse: cdktf.booleanToTerraform(struct!.inverse),
    method: cdktf.stringToTerraform(struct!.method),
  }
}


export function lbHttpRequestRewriteRuleMethodConditionToHclTerraform(struct?: LbHttpRequestRewriteRuleMethodCondition | cdktf.IResolvable): any {
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

export class LbHttpRequestRewriteRuleMethodConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LbHttpRequestRewriteRuleMethodCondition | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LbHttpRequestRewriteRuleMethodCondition | cdktf.IResolvable | undefined) {
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

export class LbHttpRequestRewriteRuleMethodConditionList extends cdktf.ComplexList {
  public internalValue? : LbHttpRequestRewriteRuleMethodCondition[] | cdktf.IResolvable

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
  public get(index: number): LbHttpRequestRewriteRuleMethodConditionOutputReference {
    return new LbHttpRequestRewriteRuleMethodConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LbHttpRequestRewriteRuleTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_request_rewrite_rule#scope LbHttpRequestRewriteRule#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_request_rewrite_rule#tag LbHttpRequestRewriteRule#tag}
  */
  readonly tag?: string;
}

export function lbHttpRequestRewriteRuleTagToTerraform(struct?: LbHttpRequestRewriteRuleTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function lbHttpRequestRewriteRuleTagToHclTerraform(struct?: LbHttpRequestRewriteRuleTag | cdktf.IResolvable): any {
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

export class LbHttpRequestRewriteRuleTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LbHttpRequestRewriteRuleTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LbHttpRequestRewriteRuleTag | cdktf.IResolvable | undefined) {
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

export class LbHttpRequestRewriteRuleTagList extends cdktf.ComplexList {
  public internalValue? : LbHttpRequestRewriteRuleTag[] | cdktf.IResolvable

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
  public get(index: number): LbHttpRequestRewriteRuleTagOutputReference {
    return new LbHttpRequestRewriteRuleTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LbHttpRequestRewriteRuleTcpCondition {
  /**
  * Whether to reverse match result of this condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_request_rewrite_rule#inverse LbHttpRequestRewriteRule#inverse}
  */
  readonly inverse?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_request_rewrite_rule#source_port LbHttpRequestRewriteRule#source_port}
  */
  readonly sourcePort: string;
}

export function lbHttpRequestRewriteRuleTcpConditionToTerraform(struct?: LbHttpRequestRewriteRuleTcpCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inverse: cdktf.booleanToTerraform(struct!.inverse),
    source_port: cdktf.stringToTerraform(struct!.sourcePort),
  }
}


export function lbHttpRequestRewriteRuleTcpConditionToHclTerraform(struct?: LbHttpRequestRewriteRuleTcpCondition | cdktf.IResolvable): any {
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

export class LbHttpRequestRewriteRuleTcpConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LbHttpRequestRewriteRuleTcpCondition | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LbHttpRequestRewriteRuleTcpCondition | cdktf.IResolvable | undefined) {
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

export class LbHttpRequestRewriteRuleTcpConditionList extends cdktf.ComplexList {
  public internalValue? : LbHttpRequestRewriteRuleTcpCondition[] | cdktf.IResolvable

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
  public get(index: number): LbHttpRequestRewriteRuleTcpConditionOutputReference {
    return new LbHttpRequestRewriteRuleTcpConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LbHttpRequestRewriteRuleUriArgumentsCondition {
  /**
  * If true, case is significant in condition matching
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_request_rewrite_rule#case_sensitive LbHttpRequestRewriteRule#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Whether to reverse match result of this condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_request_rewrite_rule#inverse LbHttpRequestRewriteRule#inverse}
  */
  readonly inverse?: boolean | cdktf.IResolvable;
  /**
  * Match type (STARTS_WITH, ENDS_WITH, EQUALS, CONTAINS, REGEX)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_request_rewrite_rule#match_type LbHttpRequestRewriteRule#match_type}
  */
  readonly matchType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_request_rewrite_rule#uri_arguments LbHttpRequestRewriteRule#uri_arguments}
  */
  readonly uriArguments: string;
}

export function lbHttpRequestRewriteRuleUriArgumentsConditionToTerraform(struct?: LbHttpRequestRewriteRuleUriArgumentsCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    case_sensitive: cdktf.booleanToTerraform(struct!.caseSensitive),
    inverse: cdktf.booleanToTerraform(struct!.inverse),
    match_type: cdktf.stringToTerraform(struct!.matchType),
    uri_arguments: cdktf.stringToTerraform(struct!.uriArguments),
  }
}


export function lbHttpRequestRewriteRuleUriArgumentsConditionToHclTerraform(struct?: LbHttpRequestRewriteRuleUriArgumentsCondition | cdktf.IResolvable): any {
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
    uri_arguments: {
      value: cdktf.stringToHclTerraform(struct!.uriArguments),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LbHttpRequestRewriteRuleUriArgumentsConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LbHttpRequestRewriteRuleUriArgumentsCondition | cdktf.IResolvable | undefined {
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
    if (this._uriArguments !== undefined) {
      hasAnyValues = true;
      internalValueResult.uriArguments = this._uriArguments;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LbHttpRequestRewriteRuleUriArgumentsCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caseSensitive = undefined;
      this._inverse = undefined;
      this._matchType = undefined;
      this._uriArguments = undefined;
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
      this._uriArguments = value.uriArguments;
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

  // uri_arguments - computed: false, optional: false, required: true
  private _uriArguments?: string; 
  public get uriArguments() {
    return this.getStringAttribute('uri_arguments');
  }
  public set uriArguments(value: string) {
    this._uriArguments = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriArgumentsInput() {
    return this._uriArguments;
  }
}

export class LbHttpRequestRewriteRuleUriArgumentsConditionList extends cdktf.ComplexList {
  public internalValue? : LbHttpRequestRewriteRuleUriArgumentsCondition[] | cdktf.IResolvable

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
  public get(index: number): LbHttpRequestRewriteRuleUriArgumentsConditionOutputReference {
    return new LbHttpRequestRewriteRuleUriArgumentsConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LbHttpRequestRewriteRuleUriCondition {
  /**
  * If true, case is significant in condition matching
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_request_rewrite_rule#case_sensitive LbHttpRequestRewriteRule#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Whether to reverse match result of this condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_request_rewrite_rule#inverse LbHttpRequestRewriteRule#inverse}
  */
  readonly inverse?: boolean | cdktf.IResolvable;
  /**
  * Match type (STARTS_WITH, ENDS_WITH, EQUALS, CONTAINS, REGEX)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_request_rewrite_rule#match_type LbHttpRequestRewriteRule#match_type}
  */
  readonly matchType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_request_rewrite_rule#uri LbHttpRequestRewriteRule#uri}
  */
  readonly uri: string;
}

export function lbHttpRequestRewriteRuleUriConditionToTerraform(struct?: LbHttpRequestRewriteRuleUriCondition | cdktf.IResolvable): any {
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


export function lbHttpRequestRewriteRuleUriConditionToHclTerraform(struct?: LbHttpRequestRewriteRuleUriCondition | cdktf.IResolvable): any {
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

export class LbHttpRequestRewriteRuleUriConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LbHttpRequestRewriteRuleUriCondition | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LbHttpRequestRewriteRuleUriCondition | cdktf.IResolvable | undefined) {
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

export class LbHttpRequestRewriteRuleUriConditionList extends cdktf.ComplexList {
  public internalValue? : LbHttpRequestRewriteRuleUriCondition[] | cdktf.IResolvable

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
  public get(index: number): LbHttpRequestRewriteRuleUriConditionOutputReference {
    return new LbHttpRequestRewriteRuleUriConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LbHttpRequestRewriteRuleUriRewriteAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_request_rewrite_rule#uri LbHttpRequestRewriteRule#uri}
  */
  readonly uri: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_request_rewrite_rule#uri_arguments LbHttpRequestRewriteRule#uri_arguments}
  */
  readonly uriArguments?: string;
}

export function lbHttpRequestRewriteRuleUriRewriteActionToTerraform(struct?: LbHttpRequestRewriteRuleUriRewriteActionOutputReference | LbHttpRequestRewriteRuleUriRewriteAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uri: cdktf.stringToTerraform(struct!.uri),
    uri_arguments: cdktf.stringToTerraform(struct!.uriArguments),
  }
}


export function lbHttpRequestRewriteRuleUriRewriteActionToHclTerraform(struct?: LbHttpRequestRewriteRuleUriRewriteActionOutputReference | LbHttpRequestRewriteRuleUriRewriteAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri_arguments: {
      value: cdktf.stringToHclTerraform(struct!.uriArguments),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LbHttpRequestRewriteRuleUriRewriteActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LbHttpRequestRewriteRuleUriRewriteAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    if (this._uriArguments !== undefined) {
      hasAnyValues = true;
      internalValueResult.uriArguments = this._uriArguments;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LbHttpRequestRewriteRuleUriRewriteAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uri = undefined;
      this._uriArguments = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uri = value.uri;
      this._uriArguments = value.uriArguments;
    }
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

  // uri_arguments - computed: false, optional: true, required: false
  private _uriArguments?: string; 
  public get uriArguments() {
    return this.getStringAttribute('uri_arguments');
  }
  public set uriArguments(value: string) {
    this._uriArguments = value;
  }
  public resetUriArguments() {
    this._uriArguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriArgumentsInput() {
    return this._uriArguments;
  }
}
export interface LbHttpRequestRewriteRuleVersionCondition {
  /**
  * Whether to reverse match result of this condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_request_rewrite_rule#inverse LbHttpRequestRewriteRule#inverse}
  */
  readonly inverse?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_request_rewrite_rule#version LbHttpRequestRewriteRule#version}
  */
  readonly version: string;
}

export function lbHttpRequestRewriteRuleVersionConditionToTerraform(struct?: LbHttpRequestRewriteRuleVersionConditionOutputReference | LbHttpRequestRewriteRuleVersionCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inverse: cdktf.booleanToTerraform(struct!.inverse),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function lbHttpRequestRewriteRuleVersionConditionToHclTerraform(struct?: LbHttpRequestRewriteRuleVersionConditionOutputReference | LbHttpRequestRewriteRuleVersionCondition): any {
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

export class LbHttpRequestRewriteRuleVersionConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LbHttpRequestRewriteRuleVersionCondition | undefined {
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

  public set internalValue(value: LbHttpRequestRewriteRuleVersionCondition | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_request_rewrite_rule nsxt_lb_http_request_rewrite_rule}
*/
export class LbHttpRequestRewriteRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_lb_http_request_rewrite_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LbHttpRequestRewriteRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LbHttpRequestRewriteRule to import
  * @param importFromId The id of the existing LbHttpRequestRewriteRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_request_rewrite_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LbHttpRequestRewriteRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_lb_http_request_rewrite_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_request_rewrite_rule nsxt_lb_http_request_rewrite_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LbHttpRequestRewriteRuleConfig = {}
  */
  public constructor(scope: Construct, id: string, config: LbHttpRequestRewriteRuleConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nsxt_lb_http_request_rewrite_rule',
      terraformGeneratorMetadata: {
        providerName: 'nsxt',
        providerVersion: '3.10.0'
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
    this._headerRewriteAction.internalValue = config.headerRewriteAction;
    this._ipCondition.internalValue = config.ipCondition;
    this._methodCondition.internalValue = config.methodCondition;
    this._tag.internalValue = config.tag;
    this._tcpCondition.internalValue = config.tcpCondition;
    this._uriArgumentsCondition.internalValue = config.uriArgumentsCondition;
    this._uriCondition.internalValue = config.uriCondition;
    this._uriRewriteAction.internalValue = config.uriRewriteAction;
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
  private _bodyCondition = new LbHttpRequestRewriteRuleBodyConditionList(this, "body_condition", true);
  public get bodyCondition() {
    return this._bodyCondition;
  }
  public putBodyCondition(value: LbHttpRequestRewriteRuleBodyCondition[] | cdktf.IResolvable) {
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
  private _cookieCondition = new LbHttpRequestRewriteRuleCookieConditionList(this, "cookie_condition", true);
  public get cookieCondition() {
    return this._cookieCondition;
  }
  public putCookieCondition(value: LbHttpRequestRewriteRuleCookieCondition[] | cdktf.IResolvable) {
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
  private _headerCondition = new LbHttpRequestRewriteRuleHeaderConditionList(this, "header_condition", true);
  public get headerCondition() {
    return this._headerCondition;
  }
  public putHeaderCondition(value: LbHttpRequestRewriteRuleHeaderCondition[] | cdktf.IResolvable) {
    this._headerCondition.internalValue = value;
  }
  public resetHeaderCondition() {
    this._headerCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerConditionInput() {
    return this._headerCondition.internalValue;
  }

  // header_rewrite_action - computed: false, optional: true, required: false
  private _headerRewriteAction = new LbHttpRequestRewriteRuleHeaderRewriteActionOutputReference(this, "header_rewrite_action");
  public get headerRewriteAction() {
    return this._headerRewriteAction;
  }
  public putHeaderRewriteAction(value: LbHttpRequestRewriteRuleHeaderRewriteAction) {
    this._headerRewriteAction.internalValue = value;
  }
  public resetHeaderRewriteAction() {
    this._headerRewriteAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerRewriteActionInput() {
    return this._headerRewriteAction.internalValue;
  }

  // ip_condition - computed: false, optional: true, required: false
  private _ipCondition = new LbHttpRequestRewriteRuleIpConditionList(this, "ip_condition", true);
  public get ipCondition() {
    return this._ipCondition;
  }
  public putIpCondition(value: LbHttpRequestRewriteRuleIpCondition[] | cdktf.IResolvable) {
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
  private _methodCondition = new LbHttpRequestRewriteRuleMethodConditionList(this, "method_condition", true);
  public get methodCondition() {
    return this._methodCondition;
  }
  public putMethodCondition(value: LbHttpRequestRewriteRuleMethodCondition[] | cdktf.IResolvable) {
    this._methodCondition.internalValue = value;
  }
  public resetMethodCondition() {
    this._methodCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodConditionInput() {
    return this._methodCondition.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new LbHttpRequestRewriteRuleTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: LbHttpRequestRewriteRuleTag[] | cdktf.IResolvable) {
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
  private _tcpCondition = new LbHttpRequestRewriteRuleTcpConditionList(this, "tcp_condition", true);
  public get tcpCondition() {
    return this._tcpCondition;
  }
  public putTcpCondition(value: LbHttpRequestRewriteRuleTcpCondition[] | cdktf.IResolvable) {
    this._tcpCondition.internalValue = value;
  }
  public resetTcpCondition() {
    this._tcpCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpConditionInput() {
    return this._tcpCondition.internalValue;
  }

  // uri_arguments_condition - computed: false, optional: true, required: false
  private _uriArgumentsCondition = new LbHttpRequestRewriteRuleUriArgumentsConditionList(this, "uri_arguments_condition", true);
  public get uriArgumentsCondition() {
    return this._uriArgumentsCondition;
  }
  public putUriArgumentsCondition(value: LbHttpRequestRewriteRuleUriArgumentsCondition[] | cdktf.IResolvable) {
    this._uriArgumentsCondition.internalValue = value;
  }
  public resetUriArgumentsCondition() {
    this._uriArgumentsCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriArgumentsConditionInput() {
    return this._uriArgumentsCondition.internalValue;
  }

  // uri_condition - computed: false, optional: true, required: false
  private _uriCondition = new LbHttpRequestRewriteRuleUriConditionList(this, "uri_condition", true);
  public get uriCondition() {
    return this._uriCondition;
  }
  public putUriCondition(value: LbHttpRequestRewriteRuleUriCondition[] | cdktf.IResolvable) {
    this._uriCondition.internalValue = value;
  }
  public resetUriCondition() {
    this._uriCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriConditionInput() {
    return this._uriCondition.internalValue;
  }

  // uri_rewrite_action - computed: false, optional: true, required: false
  private _uriRewriteAction = new LbHttpRequestRewriteRuleUriRewriteActionOutputReference(this, "uri_rewrite_action");
  public get uriRewriteAction() {
    return this._uriRewriteAction;
  }
  public putUriRewriteAction(value: LbHttpRequestRewriteRuleUriRewriteAction) {
    this._uriRewriteAction.internalValue = value;
  }
  public resetUriRewriteAction() {
    this._uriRewriteAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriRewriteActionInput() {
    return this._uriRewriteAction.internalValue;
  }

  // version_condition - computed: false, optional: true, required: false
  private _versionCondition = new LbHttpRequestRewriteRuleVersionConditionOutputReference(this, "version_condition");
  public get versionCondition() {
    return this._versionCondition;
  }
  public putVersionCondition(value: LbHttpRequestRewriteRuleVersionCondition) {
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
      body_condition: cdktf.listMapper(lbHttpRequestRewriteRuleBodyConditionToTerraform, true)(this._bodyCondition.internalValue),
      cookie_condition: cdktf.listMapper(lbHttpRequestRewriteRuleCookieConditionToTerraform, true)(this._cookieCondition.internalValue),
      header_condition: cdktf.listMapper(lbHttpRequestRewriteRuleHeaderConditionToTerraform, true)(this._headerCondition.internalValue),
      header_rewrite_action: lbHttpRequestRewriteRuleHeaderRewriteActionToTerraform(this._headerRewriteAction.internalValue),
      ip_condition: cdktf.listMapper(lbHttpRequestRewriteRuleIpConditionToTerraform, true)(this._ipCondition.internalValue),
      method_condition: cdktf.listMapper(lbHttpRequestRewriteRuleMethodConditionToTerraform, true)(this._methodCondition.internalValue),
      tag: cdktf.listMapper(lbHttpRequestRewriteRuleTagToTerraform, true)(this._tag.internalValue),
      tcp_condition: cdktf.listMapper(lbHttpRequestRewriteRuleTcpConditionToTerraform, true)(this._tcpCondition.internalValue),
      uri_arguments_condition: cdktf.listMapper(lbHttpRequestRewriteRuleUriArgumentsConditionToTerraform, true)(this._uriArgumentsCondition.internalValue),
      uri_condition: cdktf.listMapper(lbHttpRequestRewriteRuleUriConditionToTerraform, true)(this._uriCondition.internalValue),
      uri_rewrite_action: lbHttpRequestRewriteRuleUriRewriteActionToTerraform(this._uriRewriteAction.internalValue),
      version_condition: lbHttpRequestRewriteRuleVersionConditionToTerraform(this._versionCondition.internalValue),
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
        value: cdktf.listMapperHcl(lbHttpRequestRewriteRuleBodyConditionToHclTerraform, true)(this._bodyCondition.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LbHttpRequestRewriteRuleBodyConditionList",
      },
      cookie_condition: {
        value: cdktf.listMapperHcl(lbHttpRequestRewriteRuleCookieConditionToHclTerraform, true)(this._cookieCondition.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LbHttpRequestRewriteRuleCookieConditionList",
      },
      header_condition: {
        value: cdktf.listMapperHcl(lbHttpRequestRewriteRuleHeaderConditionToHclTerraform, true)(this._headerCondition.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LbHttpRequestRewriteRuleHeaderConditionList",
      },
      header_rewrite_action: {
        value: lbHttpRequestRewriteRuleHeaderRewriteActionToHclTerraform(this._headerRewriteAction.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LbHttpRequestRewriteRuleHeaderRewriteActionList",
      },
      ip_condition: {
        value: cdktf.listMapperHcl(lbHttpRequestRewriteRuleIpConditionToHclTerraform, true)(this._ipCondition.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LbHttpRequestRewriteRuleIpConditionList",
      },
      method_condition: {
        value: cdktf.listMapperHcl(lbHttpRequestRewriteRuleMethodConditionToHclTerraform, true)(this._methodCondition.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LbHttpRequestRewriteRuleMethodConditionList",
      },
      tag: {
        value: cdktf.listMapperHcl(lbHttpRequestRewriteRuleTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LbHttpRequestRewriteRuleTagList",
      },
      tcp_condition: {
        value: cdktf.listMapperHcl(lbHttpRequestRewriteRuleTcpConditionToHclTerraform, true)(this._tcpCondition.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LbHttpRequestRewriteRuleTcpConditionList",
      },
      uri_arguments_condition: {
        value: cdktf.listMapperHcl(lbHttpRequestRewriteRuleUriArgumentsConditionToHclTerraform, true)(this._uriArgumentsCondition.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LbHttpRequestRewriteRuleUriArgumentsConditionList",
      },
      uri_condition: {
        value: cdktf.listMapperHcl(lbHttpRequestRewriteRuleUriConditionToHclTerraform, true)(this._uriCondition.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LbHttpRequestRewriteRuleUriConditionList",
      },
      uri_rewrite_action: {
        value: lbHttpRequestRewriteRuleUriRewriteActionToHclTerraform(this._uriRewriteAction.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LbHttpRequestRewriteRuleUriRewriteActionList",
      },
      version_condition: {
        value: lbHttpRequestRewriteRuleVersionConditionToHclTerraform(this._versionCondition.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LbHttpRequestRewriteRuleVersionConditionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
