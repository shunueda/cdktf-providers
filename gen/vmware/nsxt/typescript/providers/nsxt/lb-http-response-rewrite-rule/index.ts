// https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_response_rewrite_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LbHttpResponseRewriteRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_response_rewrite_rule#description LbHttpResponseRewriteRule#description}
  */
  readonly description?: string;
  /**
  * The display name of this resource. Defaults to ID if not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_response_rewrite_rule#display_name LbHttpResponseRewriteRule#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_response_rewrite_rule#id LbHttpResponseRewriteRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Strategy when multiple match conditions are specified in one rule (ANY vs ALL)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_response_rewrite_rule#match_strategy LbHttpResponseRewriteRule#match_strategy}
  */
  readonly matchStrategy?: string;
  /**
  * cookie_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_response_rewrite_rule#cookie_condition LbHttpResponseRewriteRule#cookie_condition}
  */
  readonly cookieCondition?: LbHttpResponseRewriteRuleCookieCondition[] | cdktf.IResolvable;
  /**
  * header_rewrite_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_response_rewrite_rule#header_rewrite_action LbHttpResponseRewriteRule#header_rewrite_action}
  */
  readonly headerRewriteAction: LbHttpResponseRewriteRuleHeaderRewriteAction;
  /**
  * ip_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_response_rewrite_rule#ip_condition LbHttpResponseRewriteRule#ip_condition}
  */
  readonly ipCondition?: LbHttpResponseRewriteRuleIpCondition[] | cdktf.IResolvable;
  /**
  * method_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_response_rewrite_rule#method_condition LbHttpResponseRewriteRule#method_condition}
  */
  readonly methodCondition?: LbHttpResponseRewriteRuleMethodCondition[] | cdktf.IResolvable;
  /**
  * request_header_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_response_rewrite_rule#request_header_condition LbHttpResponseRewriteRule#request_header_condition}
  */
  readonly requestHeaderCondition?: LbHttpResponseRewriteRuleRequestHeaderCondition[] | cdktf.IResolvable;
  /**
  * response_header_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_response_rewrite_rule#response_header_condition LbHttpResponseRewriteRule#response_header_condition}
  */
  readonly responseHeaderCondition?: LbHttpResponseRewriteRuleResponseHeaderCondition[] | cdktf.IResolvable;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_response_rewrite_rule#tag LbHttpResponseRewriteRule#tag}
  */
  readonly tag?: LbHttpResponseRewriteRuleTag[] | cdktf.IResolvable;
  /**
  * tcp_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_response_rewrite_rule#tcp_condition LbHttpResponseRewriteRule#tcp_condition}
  */
  readonly tcpCondition?: LbHttpResponseRewriteRuleTcpCondition[] | cdktf.IResolvable;
  /**
  * uri_arguments_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_response_rewrite_rule#uri_arguments_condition LbHttpResponseRewriteRule#uri_arguments_condition}
  */
  readonly uriArgumentsCondition?: LbHttpResponseRewriteRuleUriArgumentsCondition[] | cdktf.IResolvable;
  /**
  * uri_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_response_rewrite_rule#uri_condition LbHttpResponseRewriteRule#uri_condition}
  */
  readonly uriCondition?: LbHttpResponseRewriteRuleUriCondition[] | cdktf.IResolvable;
  /**
  * version_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_response_rewrite_rule#version_condition LbHttpResponseRewriteRule#version_condition}
  */
  readonly versionCondition?: LbHttpResponseRewriteRuleVersionCondition;
}
export interface LbHttpResponseRewriteRuleCookieCondition {
  /**
  * If true, case is significant in condition matching
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_response_rewrite_rule#case_sensitive LbHttpResponseRewriteRule#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Whether to reverse match result of this condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_response_rewrite_rule#inverse LbHttpResponseRewriteRule#inverse}
  */
  readonly inverse?: boolean | cdktf.IResolvable;
  /**
  * Match type (STARTS_WITH, ENDS_WITH, EQUALS, CONTAINS, REGEX)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_response_rewrite_rule#match_type LbHttpResponseRewriteRule#match_type}
  */
  readonly matchType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_response_rewrite_rule#name LbHttpResponseRewriteRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_response_rewrite_rule#value LbHttpResponseRewriteRule#value}
  */
  readonly value: string;
}

export function lbHttpResponseRewriteRuleCookieConditionToTerraform(struct?: LbHttpResponseRewriteRuleCookieCondition | cdktf.IResolvable): any {
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


export function lbHttpResponseRewriteRuleCookieConditionToHclTerraform(struct?: LbHttpResponseRewriteRuleCookieCondition | cdktf.IResolvable): any {
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

export class LbHttpResponseRewriteRuleCookieConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LbHttpResponseRewriteRuleCookieCondition | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LbHttpResponseRewriteRuleCookieCondition | cdktf.IResolvable | undefined) {
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

export class LbHttpResponseRewriteRuleCookieConditionList extends cdktf.ComplexList {
  public internalValue? : LbHttpResponseRewriteRuleCookieCondition[] | cdktf.IResolvable

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
  public get(index: number): LbHttpResponseRewriteRuleCookieConditionOutputReference {
    return new LbHttpResponseRewriteRuleCookieConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LbHttpResponseRewriteRuleHeaderRewriteAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_response_rewrite_rule#name LbHttpResponseRewriteRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_response_rewrite_rule#value LbHttpResponseRewriteRule#value}
  */
  readonly value?: string;
}

export function lbHttpResponseRewriteRuleHeaderRewriteActionToTerraform(struct?: LbHttpResponseRewriteRuleHeaderRewriteActionOutputReference | LbHttpResponseRewriteRuleHeaderRewriteAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lbHttpResponseRewriteRuleHeaderRewriteActionToHclTerraform(struct?: LbHttpResponseRewriteRuleHeaderRewriteActionOutputReference | LbHttpResponseRewriteRuleHeaderRewriteAction): any {
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

export class LbHttpResponseRewriteRuleHeaderRewriteActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LbHttpResponseRewriteRuleHeaderRewriteAction | undefined {
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

  public set internalValue(value: LbHttpResponseRewriteRuleHeaderRewriteAction | undefined) {
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
export interface LbHttpResponseRewriteRuleIpCondition {
  /**
  * Whether to reverse match result of this condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_response_rewrite_rule#inverse LbHttpResponseRewriteRule#inverse}
  */
  readonly inverse?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_response_rewrite_rule#source_address LbHttpResponseRewriteRule#source_address}
  */
  readonly sourceAddress: string;
}

export function lbHttpResponseRewriteRuleIpConditionToTerraform(struct?: LbHttpResponseRewriteRuleIpCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inverse: cdktf.booleanToTerraform(struct!.inverse),
    source_address: cdktf.stringToTerraform(struct!.sourceAddress),
  }
}


export function lbHttpResponseRewriteRuleIpConditionToHclTerraform(struct?: LbHttpResponseRewriteRuleIpCondition | cdktf.IResolvable): any {
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

export class LbHttpResponseRewriteRuleIpConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LbHttpResponseRewriteRuleIpCondition | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LbHttpResponseRewriteRuleIpCondition | cdktf.IResolvable | undefined) {
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

export class LbHttpResponseRewriteRuleIpConditionList extends cdktf.ComplexList {
  public internalValue? : LbHttpResponseRewriteRuleIpCondition[] | cdktf.IResolvable

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
  public get(index: number): LbHttpResponseRewriteRuleIpConditionOutputReference {
    return new LbHttpResponseRewriteRuleIpConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LbHttpResponseRewriteRuleMethodCondition {
  /**
  * Whether to reverse match result of this condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_response_rewrite_rule#inverse LbHttpResponseRewriteRule#inverse}
  */
  readonly inverse?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_response_rewrite_rule#method LbHttpResponseRewriteRule#method}
  */
  readonly method: string;
}

export function lbHttpResponseRewriteRuleMethodConditionToTerraform(struct?: LbHttpResponseRewriteRuleMethodCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inverse: cdktf.booleanToTerraform(struct!.inverse),
    method: cdktf.stringToTerraform(struct!.method),
  }
}


export function lbHttpResponseRewriteRuleMethodConditionToHclTerraform(struct?: LbHttpResponseRewriteRuleMethodCondition | cdktf.IResolvable): any {
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

export class LbHttpResponseRewriteRuleMethodConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LbHttpResponseRewriteRuleMethodCondition | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LbHttpResponseRewriteRuleMethodCondition | cdktf.IResolvable | undefined) {
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

export class LbHttpResponseRewriteRuleMethodConditionList extends cdktf.ComplexList {
  public internalValue? : LbHttpResponseRewriteRuleMethodCondition[] | cdktf.IResolvable

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
  public get(index: number): LbHttpResponseRewriteRuleMethodConditionOutputReference {
    return new LbHttpResponseRewriteRuleMethodConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LbHttpResponseRewriteRuleRequestHeaderCondition {
  /**
  * If true, case is significant in condition matching
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_response_rewrite_rule#case_sensitive LbHttpResponseRewriteRule#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Whether to reverse match result of this condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_response_rewrite_rule#inverse LbHttpResponseRewriteRule#inverse}
  */
  readonly inverse?: boolean | cdktf.IResolvable;
  /**
  * Match type (STARTS_WITH, ENDS_WITH, EQUALS, CONTAINS, REGEX)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_response_rewrite_rule#match_type LbHttpResponseRewriteRule#match_type}
  */
  readonly matchType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_response_rewrite_rule#name LbHttpResponseRewriteRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_response_rewrite_rule#value LbHttpResponseRewriteRule#value}
  */
  readonly value: string;
}

export function lbHttpResponseRewriteRuleRequestHeaderConditionToTerraform(struct?: LbHttpResponseRewriteRuleRequestHeaderCondition | cdktf.IResolvable): any {
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


export function lbHttpResponseRewriteRuleRequestHeaderConditionToHclTerraform(struct?: LbHttpResponseRewriteRuleRequestHeaderCondition | cdktf.IResolvable): any {
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

export class LbHttpResponseRewriteRuleRequestHeaderConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LbHttpResponseRewriteRuleRequestHeaderCondition | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LbHttpResponseRewriteRuleRequestHeaderCondition | cdktf.IResolvable | undefined) {
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

export class LbHttpResponseRewriteRuleRequestHeaderConditionList extends cdktf.ComplexList {
  public internalValue? : LbHttpResponseRewriteRuleRequestHeaderCondition[] | cdktf.IResolvable

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
  public get(index: number): LbHttpResponseRewriteRuleRequestHeaderConditionOutputReference {
    return new LbHttpResponseRewriteRuleRequestHeaderConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LbHttpResponseRewriteRuleResponseHeaderCondition {
  /**
  * If true, case is significant in condition matching
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_response_rewrite_rule#case_sensitive LbHttpResponseRewriteRule#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Whether to reverse match result of this condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_response_rewrite_rule#inverse LbHttpResponseRewriteRule#inverse}
  */
  readonly inverse?: boolean | cdktf.IResolvable;
  /**
  * Match type (STARTS_WITH, ENDS_WITH, EQUALS, CONTAINS, REGEX)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_response_rewrite_rule#match_type LbHttpResponseRewriteRule#match_type}
  */
  readonly matchType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_response_rewrite_rule#name LbHttpResponseRewriteRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_response_rewrite_rule#value LbHttpResponseRewriteRule#value}
  */
  readonly value: string;
}

export function lbHttpResponseRewriteRuleResponseHeaderConditionToTerraform(struct?: LbHttpResponseRewriteRuleResponseHeaderCondition | cdktf.IResolvable): any {
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


export function lbHttpResponseRewriteRuleResponseHeaderConditionToHclTerraform(struct?: LbHttpResponseRewriteRuleResponseHeaderCondition | cdktf.IResolvable): any {
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

export class LbHttpResponseRewriteRuleResponseHeaderConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LbHttpResponseRewriteRuleResponseHeaderCondition | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LbHttpResponseRewriteRuleResponseHeaderCondition | cdktf.IResolvable | undefined) {
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

export class LbHttpResponseRewriteRuleResponseHeaderConditionList extends cdktf.ComplexList {
  public internalValue? : LbHttpResponseRewriteRuleResponseHeaderCondition[] | cdktf.IResolvable

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
  public get(index: number): LbHttpResponseRewriteRuleResponseHeaderConditionOutputReference {
    return new LbHttpResponseRewriteRuleResponseHeaderConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LbHttpResponseRewriteRuleTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_response_rewrite_rule#scope LbHttpResponseRewriteRule#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_response_rewrite_rule#tag LbHttpResponseRewriteRule#tag}
  */
  readonly tag?: string;
}

export function lbHttpResponseRewriteRuleTagToTerraform(struct?: LbHttpResponseRewriteRuleTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function lbHttpResponseRewriteRuleTagToHclTerraform(struct?: LbHttpResponseRewriteRuleTag | cdktf.IResolvable): any {
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

export class LbHttpResponseRewriteRuleTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LbHttpResponseRewriteRuleTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LbHttpResponseRewriteRuleTag | cdktf.IResolvable | undefined) {
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

export class LbHttpResponseRewriteRuleTagList extends cdktf.ComplexList {
  public internalValue? : LbHttpResponseRewriteRuleTag[] | cdktf.IResolvable

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
  public get(index: number): LbHttpResponseRewriteRuleTagOutputReference {
    return new LbHttpResponseRewriteRuleTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LbHttpResponseRewriteRuleTcpCondition {
  /**
  * Whether to reverse match result of this condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_response_rewrite_rule#inverse LbHttpResponseRewriteRule#inverse}
  */
  readonly inverse?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_response_rewrite_rule#source_port LbHttpResponseRewriteRule#source_port}
  */
  readonly sourcePort: string;
}

export function lbHttpResponseRewriteRuleTcpConditionToTerraform(struct?: LbHttpResponseRewriteRuleTcpCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inverse: cdktf.booleanToTerraform(struct!.inverse),
    source_port: cdktf.stringToTerraform(struct!.sourcePort),
  }
}


export function lbHttpResponseRewriteRuleTcpConditionToHclTerraform(struct?: LbHttpResponseRewriteRuleTcpCondition | cdktf.IResolvable): any {
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

export class LbHttpResponseRewriteRuleTcpConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LbHttpResponseRewriteRuleTcpCondition | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LbHttpResponseRewriteRuleTcpCondition | cdktf.IResolvable | undefined) {
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

export class LbHttpResponseRewriteRuleTcpConditionList extends cdktf.ComplexList {
  public internalValue? : LbHttpResponseRewriteRuleTcpCondition[] | cdktf.IResolvable

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
  public get(index: number): LbHttpResponseRewriteRuleTcpConditionOutputReference {
    return new LbHttpResponseRewriteRuleTcpConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LbHttpResponseRewriteRuleUriArgumentsCondition {
  /**
  * If true, case is significant in condition matching
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_response_rewrite_rule#case_sensitive LbHttpResponseRewriteRule#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Whether to reverse match result of this condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_response_rewrite_rule#inverse LbHttpResponseRewriteRule#inverse}
  */
  readonly inverse?: boolean | cdktf.IResolvable;
  /**
  * Match type (STARTS_WITH, ENDS_WITH, EQUALS, CONTAINS, REGEX)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_response_rewrite_rule#match_type LbHttpResponseRewriteRule#match_type}
  */
  readonly matchType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_response_rewrite_rule#uri_arguments LbHttpResponseRewriteRule#uri_arguments}
  */
  readonly uriArguments: string;
}

export function lbHttpResponseRewriteRuleUriArgumentsConditionToTerraform(struct?: LbHttpResponseRewriteRuleUriArgumentsCondition | cdktf.IResolvable): any {
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


export function lbHttpResponseRewriteRuleUriArgumentsConditionToHclTerraform(struct?: LbHttpResponseRewriteRuleUriArgumentsCondition | cdktf.IResolvable): any {
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

export class LbHttpResponseRewriteRuleUriArgumentsConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LbHttpResponseRewriteRuleUriArgumentsCondition | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LbHttpResponseRewriteRuleUriArgumentsCondition | cdktf.IResolvable | undefined) {
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

export class LbHttpResponseRewriteRuleUriArgumentsConditionList extends cdktf.ComplexList {
  public internalValue? : LbHttpResponseRewriteRuleUriArgumentsCondition[] | cdktf.IResolvable

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
  public get(index: number): LbHttpResponseRewriteRuleUriArgumentsConditionOutputReference {
    return new LbHttpResponseRewriteRuleUriArgumentsConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LbHttpResponseRewriteRuleUriCondition {
  /**
  * If true, case is significant in condition matching
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_response_rewrite_rule#case_sensitive LbHttpResponseRewriteRule#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Whether to reverse match result of this condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_response_rewrite_rule#inverse LbHttpResponseRewriteRule#inverse}
  */
  readonly inverse?: boolean | cdktf.IResolvable;
  /**
  * Match type (STARTS_WITH, ENDS_WITH, EQUALS, CONTAINS, REGEX)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_response_rewrite_rule#match_type LbHttpResponseRewriteRule#match_type}
  */
  readonly matchType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_response_rewrite_rule#uri LbHttpResponseRewriteRule#uri}
  */
  readonly uri: string;
}

export function lbHttpResponseRewriteRuleUriConditionToTerraform(struct?: LbHttpResponseRewriteRuleUriCondition | cdktf.IResolvable): any {
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


export function lbHttpResponseRewriteRuleUriConditionToHclTerraform(struct?: LbHttpResponseRewriteRuleUriCondition | cdktf.IResolvable): any {
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

export class LbHttpResponseRewriteRuleUriConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LbHttpResponseRewriteRuleUriCondition | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LbHttpResponseRewriteRuleUriCondition | cdktf.IResolvable | undefined) {
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

export class LbHttpResponseRewriteRuleUriConditionList extends cdktf.ComplexList {
  public internalValue? : LbHttpResponseRewriteRuleUriCondition[] | cdktf.IResolvable

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
  public get(index: number): LbHttpResponseRewriteRuleUriConditionOutputReference {
    return new LbHttpResponseRewriteRuleUriConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LbHttpResponseRewriteRuleVersionCondition {
  /**
  * Whether to reverse match result of this condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_response_rewrite_rule#inverse LbHttpResponseRewriteRule#inverse}
  */
  readonly inverse?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_response_rewrite_rule#version LbHttpResponseRewriteRule#version}
  */
  readonly version: string;
}

export function lbHttpResponseRewriteRuleVersionConditionToTerraform(struct?: LbHttpResponseRewriteRuleVersionConditionOutputReference | LbHttpResponseRewriteRuleVersionCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inverse: cdktf.booleanToTerraform(struct!.inverse),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function lbHttpResponseRewriteRuleVersionConditionToHclTerraform(struct?: LbHttpResponseRewriteRuleVersionConditionOutputReference | LbHttpResponseRewriteRuleVersionCondition): any {
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

export class LbHttpResponseRewriteRuleVersionConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LbHttpResponseRewriteRuleVersionCondition | undefined {
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

  public set internalValue(value: LbHttpResponseRewriteRuleVersionCondition | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_response_rewrite_rule nsxt_lb_http_response_rewrite_rule}
*/
export class LbHttpResponseRewriteRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_lb_http_response_rewrite_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LbHttpResponseRewriteRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LbHttpResponseRewriteRule to import
  * @param importFromId The id of the existing LbHttpResponseRewriteRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_response_rewrite_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LbHttpResponseRewriteRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_lb_http_response_rewrite_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_response_rewrite_rule nsxt_lb_http_response_rewrite_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LbHttpResponseRewriteRuleConfig
  */
  public constructor(scope: Construct, id: string, config: LbHttpResponseRewriteRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_lb_http_response_rewrite_rule',
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
    this._cookieCondition.internalValue = config.cookieCondition;
    this._headerRewriteAction.internalValue = config.headerRewriteAction;
    this._ipCondition.internalValue = config.ipCondition;
    this._methodCondition.internalValue = config.methodCondition;
    this._requestHeaderCondition.internalValue = config.requestHeaderCondition;
    this._responseHeaderCondition.internalValue = config.responseHeaderCondition;
    this._tag.internalValue = config.tag;
    this._tcpCondition.internalValue = config.tcpCondition;
    this._uriArgumentsCondition.internalValue = config.uriArgumentsCondition;
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

  // cookie_condition - computed: false, optional: true, required: false
  private _cookieCondition = new LbHttpResponseRewriteRuleCookieConditionList(this, "cookie_condition", true);
  public get cookieCondition() {
    return this._cookieCondition;
  }
  public putCookieCondition(value: LbHttpResponseRewriteRuleCookieCondition[] | cdktf.IResolvable) {
    this._cookieCondition.internalValue = value;
  }
  public resetCookieCondition() {
    this._cookieCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieConditionInput() {
    return this._cookieCondition.internalValue;
  }

  // header_rewrite_action - computed: false, optional: false, required: true
  private _headerRewriteAction = new LbHttpResponseRewriteRuleHeaderRewriteActionOutputReference(this, "header_rewrite_action");
  public get headerRewriteAction() {
    return this._headerRewriteAction;
  }
  public putHeaderRewriteAction(value: LbHttpResponseRewriteRuleHeaderRewriteAction) {
    this._headerRewriteAction.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerRewriteActionInput() {
    return this._headerRewriteAction.internalValue;
  }

  // ip_condition - computed: false, optional: true, required: false
  private _ipCondition = new LbHttpResponseRewriteRuleIpConditionList(this, "ip_condition", true);
  public get ipCondition() {
    return this._ipCondition;
  }
  public putIpCondition(value: LbHttpResponseRewriteRuleIpCondition[] | cdktf.IResolvable) {
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
  private _methodCondition = new LbHttpResponseRewriteRuleMethodConditionList(this, "method_condition", true);
  public get methodCondition() {
    return this._methodCondition;
  }
  public putMethodCondition(value: LbHttpResponseRewriteRuleMethodCondition[] | cdktf.IResolvable) {
    this._methodCondition.internalValue = value;
  }
  public resetMethodCondition() {
    this._methodCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodConditionInput() {
    return this._methodCondition.internalValue;
  }

  // request_header_condition - computed: false, optional: true, required: false
  private _requestHeaderCondition = new LbHttpResponseRewriteRuleRequestHeaderConditionList(this, "request_header_condition", true);
  public get requestHeaderCondition() {
    return this._requestHeaderCondition;
  }
  public putRequestHeaderCondition(value: LbHttpResponseRewriteRuleRequestHeaderCondition[] | cdktf.IResolvable) {
    this._requestHeaderCondition.internalValue = value;
  }
  public resetRequestHeaderCondition() {
    this._requestHeaderCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeaderConditionInput() {
    return this._requestHeaderCondition.internalValue;
  }

  // response_header_condition - computed: false, optional: true, required: false
  private _responseHeaderCondition = new LbHttpResponseRewriteRuleResponseHeaderConditionList(this, "response_header_condition", true);
  public get responseHeaderCondition() {
    return this._responseHeaderCondition;
  }
  public putResponseHeaderCondition(value: LbHttpResponseRewriteRuleResponseHeaderCondition[] | cdktf.IResolvable) {
    this._responseHeaderCondition.internalValue = value;
  }
  public resetResponseHeaderCondition() {
    this._responseHeaderCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeaderConditionInput() {
    return this._responseHeaderCondition.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new LbHttpResponseRewriteRuleTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: LbHttpResponseRewriteRuleTag[] | cdktf.IResolvable) {
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
  private _tcpCondition = new LbHttpResponseRewriteRuleTcpConditionList(this, "tcp_condition", true);
  public get tcpCondition() {
    return this._tcpCondition;
  }
  public putTcpCondition(value: LbHttpResponseRewriteRuleTcpCondition[] | cdktf.IResolvable) {
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
  private _uriArgumentsCondition = new LbHttpResponseRewriteRuleUriArgumentsConditionList(this, "uri_arguments_condition", true);
  public get uriArgumentsCondition() {
    return this._uriArgumentsCondition;
  }
  public putUriArgumentsCondition(value: LbHttpResponseRewriteRuleUriArgumentsCondition[] | cdktf.IResolvable) {
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
  private _uriCondition = new LbHttpResponseRewriteRuleUriConditionList(this, "uri_condition", true);
  public get uriCondition() {
    return this._uriCondition;
  }
  public putUriCondition(value: LbHttpResponseRewriteRuleUriCondition[] | cdktf.IResolvable) {
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
  private _versionCondition = new LbHttpResponseRewriteRuleVersionConditionOutputReference(this, "version_condition");
  public get versionCondition() {
    return this._versionCondition;
  }
  public putVersionCondition(value: LbHttpResponseRewriteRuleVersionCondition) {
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
      cookie_condition: cdktf.listMapper(lbHttpResponseRewriteRuleCookieConditionToTerraform, true)(this._cookieCondition.internalValue),
      header_rewrite_action: lbHttpResponseRewriteRuleHeaderRewriteActionToTerraform(this._headerRewriteAction.internalValue),
      ip_condition: cdktf.listMapper(lbHttpResponseRewriteRuleIpConditionToTerraform, true)(this._ipCondition.internalValue),
      method_condition: cdktf.listMapper(lbHttpResponseRewriteRuleMethodConditionToTerraform, true)(this._methodCondition.internalValue),
      request_header_condition: cdktf.listMapper(lbHttpResponseRewriteRuleRequestHeaderConditionToTerraform, true)(this._requestHeaderCondition.internalValue),
      response_header_condition: cdktf.listMapper(lbHttpResponseRewriteRuleResponseHeaderConditionToTerraform, true)(this._responseHeaderCondition.internalValue),
      tag: cdktf.listMapper(lbHttpResponseRewriteRuleTagToTerraform, true)(this._tag.internalValue),
      tcp_condition: cdktf.listMapper(lbHttpResponseRewriteRuleTcpConditionToTerraform, true)(this._tcpCondition.internalValue),
      uri_arguments_condition: cdktf.listMapper(lbHttpResponseRewriteRuleUriArgumentsConditionToTerraform, true)(this._uriArgumentsCondition.internalValue),
      uri_condition: cdktf.listMapper(lbHttpResponseRewriteRuleUriConditionToTerraform, true)(this._uriCondition.internalValue),
      version_condition: lbHttpResponseRewriteRuleVersionConditionToTerraform(this._versionCondition.internalValue),
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
      cookie_condition: {
        value: cdktf.listMapperHcl(lbHttpResponseRewriteRuleCookieConditionToHclTerraform, true)(this._cookieCondition.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LbHttpResponseRewriteRuleCookieConditionList",
      },
      header_rewrite_action: {
        value: lbHttpResponseRewriteRuleHeaderRewriteActionToHclTerraform(this._headerRewriteAction.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LbHttpResponseRewriteRuleHeaderRewriteActionList",
      },
      ip_condition: {
        value: cdktf.listMapperHcl(lbHttpResponseRewriteRuleIpConditionToHclTerraform, true)(this._ipCondition.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LbHttpResponseRewriteRuleIpConditionList",
      },
      method_condition: {
        value: cdktf.listMapperHcl(lbHttpResponseRewriteRuleMethodConditionToHclTerraform, true)(this._methodCondition.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LbHttpResponseRewriteRuleMethodConditionList",
      },
      request_header_condition: {
        value: cdktf.listMapperHcl(lbHttpResponseRewriteRuleRequestHeaderConditionToHclTerraform, true)(this._requestHeaderCondition.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LbHttpResponseRewriteRuleRequestHeaderConditionList",
      },
      response_header_condition: {
        value: cdktf.listMapperHcl(lbHttpResponseRewriteRuleResponseHeaderConditionToHclTerraform, true)(this._responseHeaderCondition.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LbHttpResponseRewriteRuleResponseHeaderConditionList",
      },
      tag: {
        value: cdktf.listMapperHcl(lbHttpResponseRewriteRuleTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LbHttpResponseRewriteRuleTagList",
      },
      tcp_condition: {
        value: cdktf.listMapperHcl(lbHttpResponseRewriteRuleTcpConditionToHclTerraform, true)(this._tcpCondition.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LbHttpResponseRewriteRuleTcpConditionList",
      },
      uri_arguments_condition: {
        value: cdktf.listMapperHcl(lbHttpResponseRewriteRuleUriArgumentsConditionToHclTerraform, true)(this._uriArgumentsCondition.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LbHttpResponseRewriteRuleUriArgumentsConditionList",
      },
      uri_condition: {
        value: cdktf.listMapperHcl(lbHttpResponseRewriteRuleUriConditionToHclTerraform, true)(this._uriCondition.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LbHttpResponseRewriteRuleUriConditionList",
      },
      version_condition: {
        value: lbHttpResponseRewriteRuleVersionConditionToHclTerraform(this._versionCondition.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LbHttpResponseRewriteRuleVersionConditionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
