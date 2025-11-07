// https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServicePolicyRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#action ServicePolicyRule#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#annotations ServicePolicyRule#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#any_asn ServicePolicyRule#any_asn}
  */
  readonly anyAsn?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#any_client ServicePolicyRule#any_client}
  */
  readonly anyClient?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#any_ip ServicePolicyRule#any_ip}
  */
  readonly anyIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#client_name ServicePolicyRule#client_name}
  */
  readonly clientName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#description ServicePolicyRule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#disable ServicePolicyRule#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#expiration_timestamp ServicePolicyRule#expiration_timestamp}
  */
  readonly expirationTimestamp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#id ServicePolicyRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#labels ServicePolicyRule#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#name ServicePolicyRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#namespace ServicePolicyRule#namespace}
  */
  readonly namespace: string;
  /**
  * api_group_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#api_group_matcher ServicePolicyRule#api_group_matcher}
  */
  readonly apiGroupMatcher?: ServicePolicyRuleApiGroupMatcher;
  /**
  * arg_matchers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#arg_matchers ServicePolicyRule#arg_matchers}
  */
  readonly argMatchers?: ServicePolicyRuleArgMatchers[] | cdktf.IResolvable;
  /**
  * asn_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#asn_list ServicePolicyRule#asn_list}
  */
  readonly asnList?: ServicePolicyRuleAsnListStruct;
  /**
  * asn_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#asn_matcher ServicePolicyRule#asn_matcher}
  */
  readonly asnMatcher?: ServicePolicyRuleAsnMatcher;
  /**
  * body_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#body_matcher ServicePolicyRule#body_matcher}
  */
  readonly bodyMatcher?: ServicePolicyRuleBodyMatcher;
  /**
  * bot_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#bot_action ServicePolicyRule#bot_action}
  */
  readonly botAction?: ServicePolicyRuleBotAction;
  /**
  * client_name_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#client_name_matcher ServicePolicyRule#client_name_matcher}
  */
  readonly clientNameMatcher?: ServicePolicyRuleClientNameMatcher;
  /**
  * client_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#client_selector ServicePolicyRule#client_selector}
  */
  readonly clientSelector?: ServicePolicyRuleClientSelector;
  /**
  * cookie_matchers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#cookie_matchers ServicePolicyRule#cookie_matchers}
  */
  readonly cookieMatchers?: ServicePolicyRuleCookieMatchers[] | cdktf.IResolvable;
  /**
  * domain_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#domain_matcher ServicePolicyRule#domain_matcher}
  */
  readonly domainMatcher?: ServicePolicyRuleDomainMatcher;
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#headers ServicePolicyRule#headers}
  */
  readonly headers?: ServicePolicyRuleHeaders[] | cdktf.IResolvable;
  /**
  * http_method block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#http_method ServicePolicyRule#http_method}
  */
  readonly httpMethod?: ServicePolicyRuleHttpMethod;
  /**
  * ip_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#ip_matcher ServicePolicyRule#ip_matcher}
  */
  readonly ipMatcher?: ServicePolicyRuleIpMatcher;
  /**
  * ip_prefix_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#ip_prefix_list ServicePolicyRule#ip_prefix_list}
  */
  readonly ipPrefixList?: ServicePolicyRuleIpPrefixListStruct;
  /**
  * ip_threat_category_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#ip_threat_category_list ServicePolicyRule#ip_threat_category_list}
  */
  readonly ipThreatCategoryList?: ServicePolicyRuleIpThreatCategoryListStruct;
  /**
  * ja4_tls_fingerprint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#ja4_tls_fingerprint ServicePolicyRule#ja4_tls_fingerprint}
  */
  readonly ja4TlsFingerprint?: ServicePolicyRuleJa4TlsFingerprint;
  /**
  * jwt_claims block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#jwt_claims ServicePolicyRule#jwt_claims}
  */
  readonly jwtClaims?: ServicePolicyRuleJwtClaims[] | cdktf.IResolvable;
  /**
  * label_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#label_matcher ServicePolicyRule#label_matcher}
  */
  readonly labelMatcher?: ServicePolicyRuleLabelMatcher;
  /**
  * mum_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#mum_action ServicePolicyRule#mum_action}
  */
  readonly mumAction?: ServicePolicyRuleMumAction;
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#path ServicePolicyRule#path}
  */
  readonly path?: ServicePolicyRulePath;
  /**
  * port_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#port_matcher ServicePolicyRule#port_matcher}
  */
  readonly portMatcher?: ServicePolicyRulePortMatcher;
  /**
  * query_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#query_params ServicePolicyRule#query_params}
  */
  readonly queryParams?: ServicePolicyRuleQueryParams[] | cdktf.IResolvable;
  /**
  * request_constraints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#request_constraints ServicePolicyRule#request_constraints}
  */
  readonly requestConstraints?: ServicePolicyRuleRequestConstraints;
  /**
  * segment_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#segment_policy ServicePolicyRule#segment_policy}
  */
  readonly segmentPolicy?: ServicePolicyRuleSegmentPolicy;
  /**
  * tls_fingerprint_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#tls_fingerprint_matcher ServicePolicyRule#tls_fingerprint_matcher}
  */
  readonly tlsFingerprintMatcher?: ServicePolicyRuleTlsFingerprintMatcher;
  /**
  * waf_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#waf_action ServicePolicyRule#waf_action}
  */
  readonly wafAction: ServicePolicyRuleWafAction;
}
export interface ServicePolicyRuleApiGroupMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#invert_matcher ServicePolicyRule#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#match ServicePolicyRule#match}
  */
  readonly match: string[];
}

export function servicePolicyRuleApiGroupMatcherToTerraform(struct?: ServicePolicyRuleApiGroupMatcherOutputReference | ServicePolicyRuleApiGroupMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    match: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.match),
  }
}


export function servicePolicyRuleApiGroupMatcherToHclTerraform(struct?: ServicePolicyRuleApiGroupMatcherOutputReference | ServicePolicyRuleApiGroupMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    invert_matcher: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatcher),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.match),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyRuleApiGroupMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServicePolicyRuleApiGroupMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invertMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatcher = this._invertMatcher;
    }
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyRuleApiGroupMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._invertMatcher = undefined;
      this._match = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._invertMatcher = value.invertMatcher;
      this._match = value.match;
    }
  }

  // invert_matcher - computed: false, optional: true, required: false
  private _invertMatcher?: boolean | cdktf.IResolvable; 
  public get invertMatcher() {
    return this.getBooleanAttribute('invert_matcher');
  }
  public set invertMatcher(value: boolean | cdktf.IResolvable) {
    this._invertMatcher = value;
  }
  public resetInvertMatcher() {
    this._invertMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatcherInput() {
    return this._invertMatcher;
  }

  // match - computed: false, optional: false, required: true
  private _match?: string[]; 
  public get match() {
    return this.getListAttribute('match');
  }
  public set match(value: string[]) {
    this._match = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }
}
export interface ServicePolicyRuleArgMatchersItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#exact_values ServicePolicyRule#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#regex_values ServicePolicyRule#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#transformers ServicePolicyRule#transformers}
  */
  readonly transformers?: string[];
}

export function servicePolicyRuleArgMatchersItemToTerraform(struct?: ServicePolicyRuleArgMatchersItemOutputReference | ServicePolicyRuleArgMatchersItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    regex_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regexValues),
    transformers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transformers),
  }
}


export function servicePolicyRuleArgMatchersItemToHclTerraform(struct?: ServicePolicyRuleArgMatchersItemOutputReference | ServicePolicyRuleArgMatchersItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    regex_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regexValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    transformers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transformers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyRuleArgMatchersItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServicePolicyRuleArgMatchersItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    if (this._regexValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValues = this._regexValues;
    }
    if (this._transformers !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformers = this._transformers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyRuleArgMatchersItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValues = undefined;
      this._regexValues = undefined;
      this._transformers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValues = value.exactValues;
      this._regexValues = value.regexValues;
      this._transformers = value.transformers;
    }
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  public resetExactValues() {
    this._exactValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }

  // regex_values - computed: false, optional: true, required: false
  private _regexValues?: string[]; 
  public get regexValues() {
    return this.getListAttribute('regex_values');
  }
  public set regexValues(value: string[]) {
    this._regexValues = value;
  }
  public resetRegexValues() {
    this._regexValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValuesInput() {
    return this._regexValues;
  }

  // transformers - computed: false, optional: true, required: false
  private _transformers?: string[]; 
  public get transformers() {
    return this.getListAttribute('transformers');
  }
  public set transformers(value: string[]) {
    this._transformers = value;
  }
  public resetTransformers() {
    this._transformers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformersInput() {
    return this._transformers;
  }
}
export interface ServicePolicyRuleArgMatchers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#check_not_present ServicePolicyRule#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#check_present ServicePolicyRule#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#invert_matcher ServicePolicyRule#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#name ServicePolicyRule#name}
  */
  readonly name: string;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#item ServicePolicyRule#item}
  */
  readonly item?: ServicePolicyRuleArgMatchersItem;
}

export function servicePolicyRuleArgMatchersToTerraform(struct?: ServicePolicyRuleArgMatchers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    name: cdktf.stringToTerraform(struct!.name),
    item: servicePolicyRuleArgMatchersItemToTerraform(struct!.item),
  }
}


export function servicePolicyRuleArgMatchersToHclTerraform(struct?: ServicePolicyRuleArgMatchers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_not_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkNotPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    check_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    invert_matcher: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatcher),
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
    item: {
      value: servicePolicyRuleArgMatchersItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyRuleArgMatchersItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyRuleArgMatchersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyRuleArgMatchers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkNotPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkNotPresent = this._checkNotPresent;
    }
    if (this._checkPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkPresent = this._checkPresent;
    }
    if (this._invertMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatcher = this._invertMatcher;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._item?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.item = this._item?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyRuleArgMatchers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkNotPresent = undefined;
      this._checkPresent = undefined;
      this._invertMatcher = undefined;
      this._name = undefined;
      this._item.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkNotPresent = value.checkNotPresent;
      this._checkPresent = value.checkPresent;
      this._invertMatcher = value.invertMatcher;
      this._name = value.name;
      this._item.internalValue = value.item;
    }
  }

  // check_not_present - computed: false, optional: true, required: false
  private _checkNotPresent?: boolean | cdktf.IResolvable; 
  public get checkNotPresent() {
    return this.getBooleanAttribute('check_not_present');
  }
  public set checkNotPresent(value: boolean | cdktf.IResolvable) {
    this._checkNotPresent = value;
  }
  public resetCheckNotPresent() {
    this._checkNotPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkNotPresentInput() {
    return this._checkNotPresent;
  }

  // check_present - computed: false, optional: true, required: false
  private _checkPresent?: boolean | cdktf.IResolvable; 
  public get checkPresent() {
    return this.getBooleanAttribute('check_present');
  }
  public set checkPresent(value: boolean | cdktf.IResolvable) {
    this._checkPresent = value;
  }
  public resetCheckPresent() {
    this._checkPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkPresentInput() {
    return this._checkPresent;
  }

  // invert_matcher - computed: false, optional: true, required: false
  private _invertMatcher?: boolean | cdktf.IResolvable; 
  public get invertMatcher() {
    return this.getBooleanAttribute('invert_matcher');
  }
  public set invertMatcher(value: boolean | cdktf.IResolvable) {
    this._invertMatcher = value;
  }
  public resetInvertMatcher() {
    this._invertMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatcherInput() {
    return this._invertMatcher;
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

  // item - computed: false, optional: true, required: false
  private _item = new ServicePolicyRuleArgMatchersItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: ServicePolicyRuleArgMatchersItem) {
    this._item.internalValue = value;
  }
  public resetItem() {
    this._item.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemInput() {
    return this._item.internalValue;
  }
}

export class ServicePolicyRuleArgMatchersList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyRuleArgMatchers[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyRuleArgMatchersOutputReference {
    return new ServicePolicyRuleArgMatchersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyRuleAsnListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#as_numbers ServicePolicyRule#as_numbers}
  */
  readonly asNumbers: number[];
}

export function servicePolicyRuleAsnListStructToTerraform(struct?: ServicePolicyRuleAsnListStructOutputReference | ServicePolicyRuleAsnListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_numbers: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.asNumbers),
  }
}


export function servicePolicyRuleAsnListStructToHclTerraform(struct?: ServicePolicyRuleAsnListStructOutputReference | ServicePolicyRuleAsnListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    as_numbers: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.asNumbers),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyRuleAsnListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServicePolicyRuleAsnListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asNumbers !== undefined) {
      hasAnyValues = true;
      internalValueResult.asNumbers = this._asNumbers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyRuleAsnListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._asNumbers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._asNumbers = value.asNumbers;
    }
  }

  // as_numbers - computed: false, optional: false, required: true
  private _asNumbers?: number[]; 
  public get asNumbers() {
    return this.getNumberListAttribute('as_numbers');
  }
  public set asNumbers(value: number[]) {
    this._asNumbers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asNumbersInput() {
    return this._asNumbers;
  }
}
export interface ServicePolicyRuleAsnMatcherAsnSets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#name ServicePolicyRule#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#namespace ServicePolicyRule#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#tenant ServicePolicyRule#tenant}
  */
  readonly tenant?: string;
}

export function servicePolicyRuleAsnMatcherAsnSetsToTerraform(struct?: ServicePolicyRuleAsnMatcherAsnSets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function servicePolicyRuleAsnMatcherAsnSetsToHclTerraform(struct?: ServicePolicyRuleAsnMatcherAsnSets | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyRuleAsnMatcherAsnSetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyRuleAsnMatcherAsnSets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyRuleAsnMatcherAsnSets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class ServicePolicyRuleAsnMatcherAsnSetsList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyRuleAsnMatcherAsnSets[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyRuleAsnMatcherAsnSetsOutputReference {
    return new ServicePolicyRuleAsnMatcherAsnSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyRuleAsnMatcher {
  /**
  * asn_sets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#asn_sets ServicePolicyRule#asn_sets}
  */
  readonly asnSets: ServicePolicyRuleAsnMatcherAsnSets[] | cdktf.IResolvable;
}

export function servicePolicyRuleAsnMatcherToTerraform(struct?: ServicePolicyRuleAsnMatcherOutputReference | ServicePolicyRuleAsnMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asn_sets: cdktf.listMapper(servicePolicyRuleAsnMatcherAsnSetsToTerraform, true)(struct!.asnSets),
  }
}


export function servicePolicyRuleAsnMatcherToHclTerraform(struct?: ServicePolicyRuleAsnMatcherOutputReference | ServicePolicyRuleAsnMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asn_sets: {
      value: cdktf.listMapperHcl(servicePolicyRuleAsnMatcherAsnSetsToHclTerraform, true)(struct!.asnSets),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyRuleAsnMatcherAsnSetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyRuleAsnMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServicePolicyRuleAsnMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asnSets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnSets = this._asnSets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyRuleAsnMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._asnSets.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._asnSets.internalValue = value.asnSets;
    }
  }

  // asn_sets - computed: false, optional: false, required: true
  private _asnSets = new ServicePolicyRuleAsnMatcherAsnSetsList(this, "asn_sets", false);
  public get asnSets() {
    return this._asnSets;
  }
  public putAsnSets(value: ServicePolicyRuleAsnMatcherAsnSets[] | cdktf.IResolvable) {
    this._asnSets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asnSetsInput() {
    return this._asnSets.internalValue;
  }
}
export interface ServicePolicyRuleBodyMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#exact_values ServicePolicyRule#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#regex_values ServicePolicyRule#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#transformers ServicePolicyRule#transformers}
  */
  readonly transformers?: string[];
}

export function servicePolicyRuleBodyMatcherToTerraform(struct?: ServicePolicyRuleBodyMatcherOutputReference | ServicePolicyRuleBodyMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    regex_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regexValues),
    transformers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transformers),
  }
}


export function servicePolicyRuleBodyMatcherToHclTerraform(struct?: ServicePolicyRuleBodyMatcherOutputReference | ServicePolicyRuleBodyMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    regex_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regexValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    transformers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transformers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyRuleBodyMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServicePolicyRuleBodyMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    if (this._regexValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValues = this._regexValues;
    }
    if (this._transformers !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformers = this._transformers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyRuleBodyMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValues = undefined;
      this._regexValues = undefined;
      this._transformers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValues = value.exactValues;
      this._regexValues = value.regexValues;
      this._transformers = value.transformers;
    }
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  public resetExactValues() {
    this._exactValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }

  // regex_values - computed: false, optional: true, required: false
  private _regexValues?: string[]; 
  public get regexValues() {
    return this.getListAttribute('regex_values');
  }
  public set regexValues(value: string[]) {
    this._regexValues = value;
  }
  public resetRegexValues() {
    this._regexValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValuesInput() {
    return this._regexValues;
  }

  // transformers - computed: false, optional: true, required: false
  private _transformers?: string[]; 
  public get transformers() {
    return this.getListAttribute('transformers');
  }
  public set transformers(value: string[]) {
    this._transformers = value;
  }
  public resetTransformers() {
    this._transformers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformersInput() {
    return this._transformers;
  }
}
export interface ServicePolicyRuleBotAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#bot_skip_processing ServicePolicyRule#bot_skip_processing}
  */
  readonly botSkipProcessing?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#none ServicePolicyRule#none}
  */
  readonly none?: boolean | cdktf.IResolvable;
}

export function servicePolicyRuleBotActionToTerraform(struct?: ServicePolicyRuleBotActionOutputReference | ServicePolicyRuleBotAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bot_skip_processing: cdktf.booleanToTerraform(struct!.botSkipProcessing),
    none: cdktf.booleanToTerraform(struct!.none),
  }
}


export function servicePolicyRuleBotActionToHclTerraform(struct?: ServicePolicyRuleBotActionOutputReference | ServicePolicyRuleBotAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bot_skip_processing: {
      value: cdktf.booleanToHclTerraform(struct!.botSkipProcessing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    none: {
      value: cdktf.booleanToHclTerraform(struct!.none),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyRuleBotActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServicePolicyRuleBotAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._botSkipProcessing !== undefined) {
      hasAnyValues = true;
      internalValueResult.botSkipProcessing = this._botSkipProcessing;
    }
    if (this._none !== undefined) {
      hasAnyValues = true;
      internalValueResult.none = this._none;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyRuleBotAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._botSkipProcessing = undefined;
      this._none = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._botSkipProcessing = value.botSkipProcessing;
      this._none = value.none;
    }
  }

  // bot_skip_processing - computed: false, optional: true, required: false
  private _botSkipProcessing?: boolean | cdktf.IResolvable; 
  public get botSkipProcessing() {
    return this.getBooleanAttribute('bot_skip_processing');
  }
  public set botSkipProcessing(value: boolean | cdktf.IResolvable) {
    this._botSkipProcessing = value;
  }
  public resetBotSkipProcessing() {
    this._botSkipProcessing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botSkipProcessingInput() {
    return this._botSkipProcessing;
  }

  // none - computed: false, optional: true, required: false
  private _none?: boolean | cdktf.IResolvable; 
  public get none() {
    return this.getBooleanAttribute('none');
  }
  public set none(value: boolean | cdktf.IResolvable) {
    this._none = value;
  }
  public resetNone() {
    this._none = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneInput() {
    return this._none;
  }
}
export interface ServicePolicyRuleClientNameMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#exact_values ServicePolicyRule#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#regex_values ServicePolicyRule#regex_values}
  */
  readonly regexValues?: string[];
}

export function servicePolicyRuleClientNameMatcherToTerraform(struct?: ServicePolicyRuleClientNameMatcherOutputReference | ServicePolicyRuleClientNameMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    regex_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regexValues),
  }
}


export function servicePolicyRuleClientNameMatcherToHclTerraform(struct?: ServicePolicyRuleClientNameMatcherOutputReference | ServicePolicyRuleClientNameMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    regex_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regexValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyRuleClientNameMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServicePolicyRuleClientNameMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    if (this._regexValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValues = this._regexValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyRuleClientNameMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValues = undefined;
      this._regexValues = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValues = value.exactValues;
      this._regexValues = value.regexValues;
    }
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  public resetExactValues() {
    this._exactValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }

  // regex_values - computed: false, optional: true, required: false
  private _regexValues?: string[]; 
  public get regexValues() {
    return this.getListAttribute('regex_values');
  }
  public set regexValues(value: string[]) {
    this._regexValues = value;
  }
  public resetRegexValues() {
    this._regexValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValuesInput() {
    return this._regexValues;
  }
}
export interface ServicePolicyRuleClientSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#expressions ServicePolicyRule#expressions}
  */
  readonly expressions: string[];
}

export function servicePolicyRuleClientSelectorToTerraform(struct?: ServicePolicyRuleClientSelectorOutputReference | ServicePolicyRuleClientSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expressions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.expressions),
  }
}


export function servicePolicyRuleClientSelectorToHclTerraform(struct?: ServicePolicyRuleClientSelectorOutputReference | ServicePolicyRuleClientSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expressions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.expressions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyRuleClientSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServicePolicyRuleClientSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expressions !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressions = this._expressions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyRuleClientSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expressions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expressions = value.expressions;
    }
  }

  // expressions - computed: false, optional: false, required: true
  private _expressions?: string[]; 
  public get expressions() {
    return this.getListAttribute('expressions');
  }
  public set expressions(value: string[]) {
    this._expressions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionsInput() {
    return this._expressions;
  }
}
export interface ServicePolicyRuleCookieMatchersItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#exact_values ServicePolicyRule#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#regex_values ServicePolicyRule#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#transformers ServicePolicyRule#transformers}
  */
  readonly transformers?: string[];
}

export function servicePolicyRuleCookieMatchersItemToTerraform(struct?: ServicePolicyRuleCookieMatchersItemOutputReference | ServicePolicyRuleCookieMatchersItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    regex_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regexValues),
    transformers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transformers),
  }
}


export function servicePolicyRuleCookieMatchersItemToHclTerraform(struct?: ServicePolicyRuleCookieMatchersItemOutputReference | ServicePolicyRuleCookieMatchersItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    regex_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regexValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    transformers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transformers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyRuleCookieMatchersItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServicePolicyRuleCookieMatchersItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    if (this._regexValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValues = this._regexValues;
    }
    if (this._transformers !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformers = this._transformers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyRuleCookieMatchersItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValues = undefined;
      this._regexValues = undefined;
      this._transformers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValues = value.exactValues;
      this._regexValues = value.regexValues;
      this._transformers = value.transformers;
    }
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  public resetExactValues() {
    this._exactValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }

  // regex_values - computed: false, optional: true, required: false
  private _regexValues?: string[]; 
  public get regexValues() {
    return this.getListAttribute('regex_values');
  }
  public set regexValues(value: string[]) {
    this._regexValues = value;
  }
  public resetRegexValues() {
    this._regexValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValuesInput() {
    return this._regexValues;
  }

  // transformers - computed: false, optional: true, required: false
  private _transformers?: string[]; 
  public get transformers() {
    return this.getListAttribute('transformers');
  }
  public set transformers(value: string[]) {
    this._transformers = value;
  }
  public resetTransformers() {
    this._transformers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformersInput() {
    return this._transformers;
  }
}
export interface ServicePolicyRuleCookieMatchers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#check_not_present ServicePolicyRule#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#check_present ServicePolicyRule#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#invert_matcher ServicePolicyRule#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#name ServicePolicyRule#name}
  */
  readonly name: string;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#item ServicePolicyRule#item}
  */
  readonly item?: ServicePolicyRuleCookieMatchersItem;
}

export function servicePolicyRuleCookieMatchersToTerraform(struct?: ServicePolicyRuleCookieMatchers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    name: cdktf.stringToTerraform(struct!.name),
    item: servicePolicyRuleCookieMatchersItemToTerraform(struct!.item),
  }
}


export function servicePolicyRuleCookieMatchersToHclTerraform(struct?: ServicePolicyRuleCookieMatchers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_not_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkNotPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    check_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    invert_matcher: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatcher),
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
    item: {
      value: servicePolicyRuleCookieMatchersItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyRuleCookieMatchersItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyRuleCookieMatchersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyRuleCookieMatchers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkNotPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkNotPresent = this._checkNotPresent;
    }
    if (this._checkPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkPresent = this._checkPresent;
    }
    if (this._invertMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatcher = this._invertMatcher;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._item?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.item = this._item?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyRuleCookieMatchers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkNotPresent = undefined;
      this._checkPresent = undefined;
      this._invertMatcher = undefined;
      this._name = undefined;
      this._item.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkNotPresent = value.checkNotPresent;
      this._checkPresent = value.checkPresent;
      this._invertMatcher = value.invertMatcher;
      this._name = value.name;
      this._item.internalValue = value.item;
    }
  }

  // check_not_present - computed: false, optional: true, required: false
  private _checkNotPresent?: boolean | cdktf.IResolvable; 
  public get checkNotPresent() {
    return this.getBooleanAttribute('check_not_present');
  }
  public set checkNotPresent(value: boolean | cdktf.IResolvable) {
    this._checkNotPresent = value;
  }
  public resetCheckNotPresent() {
    this._checkNotPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkNotPresentInput() {
    return this._checkNotPresent;
  }

  // check_present - computed: false, optional: true, required: false
  private _checkPresent?: boolean | cdktf.IResolvable; 
  public get checkPresent() {
    return this.getBooleanAttribute('check_present');
  }
  public set checkPresent(value: boolean | cdktf.IResolvable) {
    this._checkPresent = value;
  }
  public resetCheckPresent() {
    this._checkPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkPresentInput() {
    return this._checkPresent;
  }

  // invert_matcher - computed: false, optional: true, required: false
  private _invertMatcher?: boolean | cdktf.IResolvable; 
  public get invertMatcher() {
    return this.getBooleanAttribute('invert_matcher');
  }
  public set invertMatcher(value: boolean | cdktf.IResolvable) {
    this._invertMatcher = value;
  }
  public resetInvertMatcher() {
    this._invertMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatcherInput() {
    return this._invertMatcher;
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

  // item - computed: false, optional: true, required: false
  private _item = new ServicePolicyRuleCookieMatchersItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: ServicePolicyRuleCookieMatchersItem) {
    this._item.internalValue = value;
  }
  public resetItem() {
    this._item.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemInput() {
    return this._item.internalValue;
  }
}

export class ServicePolicyRuleCookieMatchersList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyRuleCookieMatchers[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyRuleCookieMatchersOutputReference {
    return new ServicePolicyRuleCookieMatchersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyRuleDomainMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#exact_values ServicePolicyRule#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#regex_values ServicePolicyRule#regex_values}
  */
  readonly regexValues?: string[];
}

export function servicePolicyRuleDomainMatcherToTerraform(struct?: ServicePolicyRuleDomainMatcherOutputReference | ServicePolicyRuleDomainMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    regex_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regexValues),
  }
}


export function servicePolicyRuleDomainMatcherToHclTerraform(struct?: ServicePolicyRuleDomainMatcherOutputReference | ServicePolicyRuleDomainMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    regex_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regexValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyRuleDomainMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServicePolicyRuleDomainMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    if (this._regexValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValues = this._regexValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyRuleDomainMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValues = undefined;
      this._regexValues = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValues = value.exactValues;
      this._regexValues = value.regexValues;
    }
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  public resetExactValues() {
    this._exactValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }

  // regex_values - computed: false, optional: true, required: false
  private _regexValues?: string[]; 
  public get regexValues() {
    return this.getListAttribute('regex_values');
  }
  public set regexValues(value: string[]) {
    this._regexValues = value;
  }
  public resetRegexValues() {
    this._regexValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValuesInput() {
    return this._regexValues;
  }
}
export interface ServicePolicyRuleHeadersItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#exact_values ServicePolicyRule#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#regex_values ServicePolicyRule#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#transformers ServicePolicyRule#transformers}
  */
  readonly transformers?: string[];
}

export function servicePolicyRuleHeadersItemToTerraform(struct?: ServicePolicyRuleHeadersItemOutputReference | ServicePolicyRuleHeadersItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    regex_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regexValues),
    transformers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transformers),
  }
}


export function servicePolicyRuleHeadersItemToHclTerraform(struct?: ServicePolicyRuleHeadersItemOutputReference | ServicePolicyRuleHeadersItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    regex_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regexValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    transformers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transformers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyRuleHeadersItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServicePolicyRuleHeadersItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    if (this._regexValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValues = this._regexValues;
    }
    if (this._transformers !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformers = this._transformers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyRuleHeadersItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValues = undefined;
      this._regexValues = undefined;
      this._transformers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValues = value.exactValues;
      this._regexValues = value.regexValues;
      this._transformers = value.transformers;
    }
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  public resetExactValues() {
    this._exactValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }

  // regex_values - computed: false, optional: true, required: false
  private _regexValues?: string[]; 
  public get regexValues() {
    return this.getListAttribute('regex_values');
  }
  public set regexValues(value: string[]) {
    this._regexValues = value;
  }
  public resetRegexValues() {
    this._regexValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValuesInput() {
    return this._regexValues;
  }

  // transformers - computed: false, optional: true, required: false
  private _transformers?: string[]; 
  public get transformers() {
    return this.getListAttribute('transformers');
  }
  public set transformers(value: string[]) {
    this._transformers = value;
  }
  public resetTransformers() {
    this._transformers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformersInput() {
    return this._transformers;
  }
}
export interface ServicePolicyRuleHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#check_not_present ServicePolicyRule#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#check_present ServicePolicyRule#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#invert_matcher ServicePolicyRule#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#name ServicePolicyRule#name}
  */
  readonly name: string;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#item ServicePolicyRule#item}
  */
  readonly item?: ServicePolicyRuleHeadersItem;
}

export function servicePolicyRuleHeadersToTerraform(struct?: ServicePolicyRuleHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    name: cdktf.stringToTerraform(struct!.name),
    item: servicePolicyRuleHeadersItemToTerraform(struct!.item),
  }
}


export function servicePolicyRuleHeadersToHclTerraform(struct?: ServicePolicyRuleHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_not_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkNotPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    check_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    invert_matcher: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatcher),
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
    item: {
      value: servicePolicyRuleHeadersItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyRuleHeadersItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyRuleHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyRuleHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkNotPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkNotPresent = this._checkNotPresent;
    }
    if (this._checkPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkPresent = this._checkPresent;
    }
    if (this._invertMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatcher = this._invertMatcher;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._item?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.item = this._item?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyRuleHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkNotPresent = undefined;
      this._checkPresent = undefined;
      this._invertMatcher = undefined;
      this._name = undefined;
      this._item.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkNotPresent = value.checkNotPresent;
      this._checkPresent = value.checkPresent;
      this._invertMatcher = value.invertMatcher;
      this._name = value.name;
      this._item.internalValue = value.item;
    }
  }

  // check_not_present - computed: false, optional: true, required: false
  private _checkNotPresent?: boolean | cdktf.IResolvable; 
  public get checkNotPresent() {
    return this.getBooleanAttribute('check_not_present');
  }
  public set checkNotPresent(value: boolean | cdktf.IResolvable) {
    this._checkNotPresent = value;
  }
  public resetCheckNotPresent() {
    this._checkNotPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkNotPresentInput() {
    return this._checkNotPresent;
  }

  // check_present - computed: false, optional: true, required: false
  private _checkPresent?: boolean | cdktf.IResolvable; 
  public get checkPresent() {
    return this.getBooleanAttribute('check_present');
  }
  public set checkPresent(value: boolean | cdktf.IResolvable) {
    this._checkPresent = value;
  }
  public resetCheckPresent() {
    this._checkPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkPresentInput() {
    return this._checkPresent;
  }

  // invert_matcher - computed: false, optional: true, required: false
  private _invertMatcher?: boolean | cdktf.IResolvable; 
  public get invertMatcher() {
    return this.getBooleanAttribute('invert_matcher');
  }
  public set invertMatcher(value: boolean | cdktf.IResolvable) {
    this._invertMatcher = value;
  }
  public resetInvertMatcher() {
    this._invertMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatcherInput() {
    return this._invertMatcher;
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

  // item - computed: false, optional: true, required: false
  private _item = new ServicePolicyRuleHeadersItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: ServicePolicyRuleHeadersItem) {
    this._item.internalValue = value;
  }
  public resetItem() {
    this._item.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemInput() {
    return this._item.internalValue;
  }
}

export class ServicePolicyRuleHeadersList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyRuleHeaders[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyRuleHeadersOutputReference {
    return new ServicePolicyRuleHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyRuleHttpMethod {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#invert_matcher ServicePolicyRule#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#methods ServicePolicyRule#methods}
  */
  readonly methods?: string[];
}

export function servicePolicyRuleHttpMethodToTerraform(struct?: ServicePolicyRuleHttpMethodOutputReference | ServicePolicyRuleHttpMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.methods),
  }
}


export function servicePolicyRuleHttpMethodToHclTerraform(struct?: ServicePolicyRuleHttpMethodOutputReference | ServicePolicyRuleHttpMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    invert_matcher: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatcher),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.methods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyRuleHttpMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServicePolicyRuleHttpMethod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invertMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatcher = this._invertMatcher;
    }
    if (this._methods !== undefined) {
      hasAnyValues = true;
      internalValueResult.methods = this._methods;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyRuleHttpMethod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._invertMatcher = undefined;
      this._methods = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._invertMatcher = value.invertMatcher;
      this._methods = value.methods;
    }
  }

  // invert_matcher - computed: false, optional: true, required: false
  private _invertMatcher?: boolean | cdktf.IResolvable; 
  public get invertMatcher() {
    return this.getBooleanAttribute('invert_matcher');
  }
  public set invertMatcher(value: boolean | cdktf.IResolvable) {
    this._invertMatcher = value;
  }
  public resetInvertMatcher() {
    this._invertMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatcherInput() {
    return this._invertMatcher;
  }

  // methods - computed: false, optional: true, required: false
  private _methods?: string[]; 
  public get methods() {
    return this.getListAttribute('methods');
  }
  public set methods(value: string[]) {
    this._methods = value;
  }
  public resetMethods() {
    this._methods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodsInput() {
    return this._methods;
  }
}
export interface ServicePolicyRuleIpMatcherPrefixSets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#name ServicePolicyRule#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#namespace ServicePolicyRule#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#tenant ServicePolicyRule#tenant}
  */
  readonly tenant?: string;
}

export function servicePolicyRuleIpMatcherPrefixSetsToTerraform(struct?: ServicePolicyRuleIpMatcherPrefixSets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function servicePolicyRuleIpMatcherPrefixSetsToHclTerraform(struct?: ServicePolicyRuleIpMatcherPrefixSets | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyRuleIpMatcherPrefixSetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyRuleIpMatcherPrefixSets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyRuleIpMatcherPrefixSets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class ServicePolicyRuleIpMatcherPrefixSetsList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyRuleIpMatcherPrefixSets[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyRuleIpMatcherPrefixSetsOutputReference {
    return new ServicePolicyRuleIpMatcherPrefixSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyRuleIpMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#invert_matcher ServicePolicyRule#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * prefix_sets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#prefix_sets ServicePolicyRule#prefix_sets}
  */
  readonly prefixSets: ServicePolicyRuleIpMatcherPrefixSets[] | cdktf.IResolvable;
}

export function servicePolicyRuleIpMatcherToTerraform(struct?: ServicePolicyRuleIpMatcherOutputReference | ServicePolicyRuleIpMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    prefix_sets: cdktf.listMapper(servicePolicyRuleIpMatcherPrefixSetsToTerraform, true)(struct!.prefixSets),
  }
}


export function servicePolicyRuleIpMatcherToHclTerraform(struct?: ServicePolicyRuleIpMatcherOutputReference | ServicePolicyRuleIpMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    invert_matcher: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatcher),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix_sets: {
      value: cdktf.listMapperHcl(servicePolicyRuleIpMatcherPrefixSetsToHclTerraform, true)(struct!.prefixSets),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyRuleIpMatcherPrefixSetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyRuleIpMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServicePolicyRuleIpMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invertMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatcher = this._invertMatcher;
    }
    if (this._prefixSets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixSets = this._prefixSets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyRuleIpMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._invertMatcher = undefined;
      this._prefixSets.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._invertMatcher = value.invertMatcher;
      this._prefixSets.internalValue = value.prefixSets;
    }
  }

  // invert_matcher - computed: false, optional: true, required: false
  private _invertMatcher?: boolean | cdktf.IResolvable; 
  public get invertMatcher() {
    return this.getBooleanAttribute('invert_matcher');
  }
  public set invertMatcher(value: boolean | cdktf.IResolvable) {
    this._invertMatcher = value;
  }
  public resetInvertMatcher() {
    this._invertMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatcherInput() {
    return this._invertMatcher;
  }

  // prefix_sets - computed: false, optional: false, required: true
  private _prefixSets = new ServicePolicyRuleIpMatcherPrefixSetsList(this, "prefix_sets", false);
  public get prefixSets() {
    return this._prefixSets;
  }
  public putPrefixSets(value: ServicePolicyRuleIpMatcherPrefixSets[] | cdktf.IResolvable) {
    this._prefixSets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixSetsInput() {
    return this._prefixSets.internalValue;
  }
}
export interface ServicePolicyRuleIpPrefixListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#invert_match ServicePolicyRule#invert_match}
  */
  readonly invertMatch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#ip_prefixes ServicePolicyRule#ip_prefixes}
  */
  readonly ipPrefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#ipv6_prefixes ServicePolicyRule#ipv6_prefixes}
  */
  readonly ipv6Prefixes?: string[];
}

export function servicePolicyRuleIpPrefixListStructToTerraform(struct?: ServicePolicyRuleIpPrefixListStructOutputReference | ServicePolicyRuleIpPrefixListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invert_match: cdktf.booleanToTerraform(struct!.invertMatch),
    ip_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipPrefixes),
    ipv6_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv6Prefixes),
  }
}


export function servicePolicyRuleIpPrefixListStructToHclTerraform(struct?: ServicePolicyRuleIpPrefixListStructOutputReference | ServicePolicyRuleIpPrefixListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    invert_match: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipPrefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ipv6_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipv6Prefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyRuleIpPrefixListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServicePolicyRuleIpPrefixListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invertMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatch = this._invertMatch;
    }
    if (this._ipPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPrefixes = this._ipPrefixes;
    }
    if (this._ipv6Prefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Prefixes = this._ipv6Prefixes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyRuleIpPrefixListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._invertMatch = undefined;
      this._ipPrefixes = undefined;
      this._ipv6Prefixes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._invertMatch = value.invertMatch;
      this._ipPrefixes = value.ipPrefixes;
      this._ipv6Prefixes = value.ipv6Prefixes;
    }
  }

  // invert_match - computed: false, optional: true, required: false
  private _invertMatch?: boolean | cdktf.IResolvable; 
  public get invertMatch() {
    return this.getBooleanAttribute('invert_match');
  }
  public set invertMatch(value: boolean | cdktf.IResolvable) {
    this._invertMatch = value;
  }
  public resetInvertMatch() {
    this._invertMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatchInput() {
    return this._invertMatch;
  }

  // ip_prefixes - computed: false, optional: true, required: false
  private _ipPrefixes?: string[]; 
  public get ipPrefixes() {
    return this.getListAttribute('ip_prefixes');
  }
  public set ipPrefixes(value: string[]) {
    this._ipPrefixes = value;
  }
  public resetIpPrefixes() {
    this._ipPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPrefixesInput() {
    return this._ipPrefixes;
  }

  // ipv6_prefixes - computed: false, optional: true, required: false
  private _ipv6Prefixes?: string[]; 
  public get ipv6Prefixes() {
    return this.getListAttribute('ipv6_prefixes');
  }
  public set ipv6Prefixes(value: string[]) {
    this._ipv6Prefixes = value;
  }
  public resetIpv6Prefixes() {
    this._ipv6Prefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixesInput() {
    return this._ipv6Prefixes;
  }
}
export interface ServicePolicyRuleIpThreatCategoryListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#ip_threat_categories ServicePolicyRule#ip_threat_categories}
  */
  readonly ipThreatCategories: string[];
}

export function servicePolicyRuleIpThreatCategoryListStructToTerraform(struct?: ServicePolicyRuleIpThreatCategoryListStructOutputReference | ServicePolicyRuleIpThreatCategoryListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_threat_categories: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipThreatCategories),
  }
}


export function servicePolicyRuleIpThreatCategoryListStructToHclTerraform(struct?: ServicePolicyRuleIpThreatCategoryListStructOutputReference | ServicePolicyRuleIpThreatCategoryListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_threat_categories: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipThreatCategories),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyRuleIpThreatCategoryListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServicePolicyRuleIpThreatCategoryListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipThreatCategories !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipThreatCategories = this._ipThreatCategories;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyRuleIpThreatCategoryListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipThreatCategories = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipThreatCategories = value.ipThreatCategories;
    }
  }

  // ip_threat_categories - computed: false, optional: false, required: true
  private _ipThreatCategories?: string[]; 
  public get ipThreatCategories() {
    return this.getListAttribute('ip_threat_categories');
  }
  public set ipThreatCategories(value: string[]) {
    this._ipThreatCategories = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipThreatCategoriesInput() {
    return this._ipThreatCategories;
  }
}
export interface ServicePolicyRuleJa4TlsFingerprint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#exact_values ServicePolicyRule#exact_values}
  */
  readonly exactValues?: string[];
}

export function servicePolicyRuleJa4TlsFingerprintToTerraform(struct?: ServicePolicyRuleJa4TlsFingerprintOutputReference | ServicePolicyRuleJa4TlsFingerprint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
  }
}


export function servicePolicyRuleJa4TlsFingerprintToHclTerraform(struct?: ServicePolicyRuleJa4TlsFingerprintOutputReference | ServicePolicyRuleJa4TlsFingerprint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyRuleJa4TlsFingerprintOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServicePolicyRuleJa4TlsFingerprint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyRuleJa4TlsFingerprint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValues = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValues = value.exactValues;
    }
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  public resetExactValues() {
    this._exactValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }
}
export interface ServicePolicyRuleJwtClaimsItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#exact_values ServicePolicyRule#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#regex_values ServicePolicyRule#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#transformers ServicePolicyRule#transformers}
  */
  readonly transformers?: string[];
}

export function servicePolicyRuleJwtClaimsItemToTerraform(struct?: ServicePolicyRuleJwtClaimsItemOutputReference | ServicePolicyRuleJwtClaimsItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    regex_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regexValues),
    transformers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transformers),
  }
}


export function servicePolicyRuleJwtClaimsItemToHclTerraform(struct?: ServicePolicyRuleJwtClaimsItemOutputReference | ServicePolicyRuleJwtClaimsItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    regex_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regexValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    transformers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transformers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyRuleJwtClaimsItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServicePolicyRuleJwtClaimsItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    if (this._regexValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValues = this._regexValues;
    }
    if (this._transformers !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformers = this._transformers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyRuleJwtClaimsItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValues = undefined;
      this._regexValues = undefined;
      this._transformers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValues = value.exactValues;
      this._regexValues = value.regexValues;
      this._transformers = value.transformers;
    }
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  public resetExactValues() {
    this._exactValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }

  // regex_values - computed: false, optional: true, required: false
  private _regexValues?: string[]; 
  public get regexValues() {
    return this.getListAttribute('regex_values');
  }
  public set regexValues(value: string[]) {
    this._regexValues = value;
  }
  public resetRegexValues() {
    this._regexValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValuesInput() {
    return this._regexValues;
  }

  // transformers - computed: false, optional: true, required: false
  private _transformers?: string[]; 
  public get transformers() {
    return this.getListAttribute('transformers');
  }
  public set transformers(value: string[]) {
    this._transformers = value;
  }
  public resetTransformers() {
    this._transformers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformersInput() {
    return this._transformers;
  }
}
export interface ServicePolicyRuleJwtClaims {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#check_not_present ServicePolicyRule#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#check_present ServicePolicyRule#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#invert_matcher ServicePolicyRule#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#name ServicePolicyRule#name}
  */
  readonly name: string;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#item ServicePolicyRule#item}
  */
  readonly item?: ServicePolicyRuleJwtClaimsItem;
}

export function servicePolicyRuleJwtClaimsToTerraform(struct?: ServicePolicyRuleJwtClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    name: cdktf.stringToTerraform(struct!.name),
    item: servicePolicyRuleJwtClaimsItemToTerraform(struct!.item),
  }
}


export function servicePolicyRuleJwtClaimsToHclTerraform(struct?: ServicePolicyRuleJwtClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_not_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkNotPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    check_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    invert_matcher: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatcher),
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
    item: {
      value: servicePolicyRuleJwtClaimsItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyRuleJwtClaimsItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyRuleJwtClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyRuleJwtClaims | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkNotPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkNotPresent = this._checkNotPresent;
    }
    if (this._checkPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkPresent = this._checkPresent;
    }
    if (this._invertMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatcher = this._invertMatcher;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._item?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.item = this._item?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyRuleJwtClaims | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkNotPresent = undefined;
      this._checkPresent = undefined;
      this._invertMatcher = undefined;
      this._name = undefined;
      this._item.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkNotPresent = value.checkNotPresent;
      this._checkPresent = value.checkPresent;
      this._invertMatcher = value.invertMatcher;
      this._name = value.name;
      this._item.internalValue = value.item;
    }
  }

  // check_not_present - computed: false, optional: true, required: false
  private _checkNotPresent?: boolean | cdktf.IResolvable; 
  public get checkNotPresent() {
    return this.getBooleanAttribute('check_not_present');
  }
  public set checkNotPresent(value: boolean | cdktf.IResolvable) {
    this._checkNotPresent = value;
  }
  public resetCheckNotPresent() {
    this._checkNotPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkNotPresentInput() {
    return this._checkNotPresent;
  }

  // check_present - computed: false, optional: true, required: false
  private _checkPresent?: boolean | cdktf.IResolvable; 
  public get checkPresent() {
    return this.getBooleanAttribute('check_present');
  }
  public set checkPresent(value: boolean | cdktf.IResolvable) {
    this._checkPresent = value;
  }
  public resetCheckPresent() {
    this._checkPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkPresentInput() {
    return this._checkPresent;
  }

  // invert_matcher - computed: false, optional: true, required: false
  private _invertMatcher?: boolean | cdktf.IResolvable; 
  public get invertMatcher() {
    return this.getBooleanAttribute('invert_matcher');
  }
  public set invertMatcher(value: boolean | cdktf.IResolvable) {
    this._invertMatcher = value;
  }
  public resetInvertMatcher() {
    this._invertMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatcherInput() {
    return this._invertMatcher;
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

  // item - computed: false, optional: true, required: false
  private _item = new ServicePolicyRuleJwtClaimsItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: ServicePolicyRuleJwtClaimsItem) {
    this._item.internalValue = value;
  }
  public resetItem() {
    this._item.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemInput() {
    return this._item.internalValue;
  }
}

export class ServicePolicyRuleJwtClaimsList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyRuleJwtClaims[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyRuleJwtClaimsOutputReference {
    return new ServicePolicyRuleJwtClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyRuleLabelMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#keys ServicePolicyRule#keys}
  */
  readonly keys?: string[];
}

export function servicePolicyRuleLabelMatcherToTerraform(struct?: ServicePolicyRuleLabelMatcherOutputReference | ServicePolicyRuleLabelMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keys),
  }
}


export function servicePolicyRuleLabelMatcherToHclTerraform(struct?: ServicePolicyRuleLabelMatcherOutputReference | ServicePolicyRuleLabelMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyRuleLabelMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServicePolicyRuleLabelMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keys !== undefined) {
      hasAnyValues = true;
      internalValueResult.keys = this._keys;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyRuleLabelMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keys = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keys = value.keys;
    }
  }

  // keys - computed: false, optional: true, required: false
  private _keys?: string[]; 
  public get keys() {
    return this.getListAttribute('keys');
  }
  public set keys(value: string[]) {
    this._keys = value;
  }
  public resetKeys() {
    this._keys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keysInput() {
    return this._keys;
  }
}
export interface ServicePolicyRuleMumAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#default ServicePolicyRule#default}
  */
  readonly default?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#skip_processing ServicePolicyRule#skip_processing}
  */
  readonly skipProcessing?: boolean | cdktf.IResolvable;
}

export function servicePolicyRuleMumActionToTerraform(struct?: ServicePolicyRuleMumActionOutputReference | ServicePolicyRuleMumAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.booleanToTerraform(struct!.default),
    skip_processing: cdktf.booleanToTerraform(struct!.skipProcessing),
  }
}


export function servicePolicyRuleMumActionToHclTerraform(struct?: ServicePolicyRuleMumActionOutputReference | ServicePolicyRuleMumAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.booleanToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    skip_processing: {
      value: cdktf.booleanToHclTerraform(struct!.skipProcessing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyRuleMumActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServicePolicyRuleMumAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._skipProcessing !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipProcessing = this._skipProcessing;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyRuleMumAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._default = undefined;
      this._skipProcessing = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._default = value.default;
      this._skipProcessing = value.skipProcessing;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: boolean | cdktf.IResolvable; 
  public get default() {
    return this.getBooleanAttribute('default');
  }
  public set default(value: boolean | cdktf.IResolvable) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // skip_processing - computed: false, optional: true, required: false
  private _skipProcessing?: boolean | cdktf.IResolvable; 
  public get skipProcessing() {
    return this.getBooleanAttribute('skip_processing');
  }
  public set skipProcessing(value: boolean | cdktf.IResolvable) {
    this._skipProcessing = value;
  }
  public resetSkipProcessing() {
    this._skipProcessing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipProcessingInput() {
    return this._skipProcessing;
  }
}
export interface ServicePolicyRulePath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#exact_values ServicePolicyRule#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#invert_matcher ServicePolicyRule#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#prefix_values ServicePolicyRule#prefix_values}
  */
  readonly prefixValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#regex_values ServicePolicyRule#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#suffix_values ServicePolicyRule#suffix_values}
  */
  readonly suffixValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#transformers ServicePolicyRule#transformers}
  */
  readonly transformers?: string[];
}

export function servicePolicyRulePathToTerraform(struct?: ServicePolicyRulePathOutputReference | ServicePolicyRulePath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    prefix_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefixValues),
    regex_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regexValues),
    suffix_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.suffixValues),
    transformers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transformers),
  }
}


export function servicePolicyRulePathToHclTerraform(struct?: ServicePolicyRulePathOutputReference | ServicePolicyRulePath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    invert_matcher: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatcher),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prefixValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    regex_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regexValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    suffix_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.suffixValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    transformers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transformers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyRulePathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServicePolicyRulePath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    if (this._invertMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatcher = this._invertMatcher;
    }
    if (this._prefixValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixValues = this._prefixValues;
    }
    if (this._regexValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValues = this._regexValues;
    }
    if (this._suffixValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffixValues = this._suffixValues;
    }
    if (this._transformers !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformers = this._transformers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyRulePath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValues = undefined;
      this._invertMatcher = undefined;
      this._prefixValues = undefined;
      this._regexValues = undefined;
      this._suffixValues = undefined;
      this._transformers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValues = value.exactValues;
      this._invertMatcher = value.invertMatcher;
      this._prefixValues = value.prefixValues;
      this._regexValues = value.regexValues;
      this._suffixValues = value.suffixValues;
      this._transformers = value.transformers;
    }
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  public resetExactValues() {
    this._exactValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }

  // invert_matcher - computed: false, optional: true, required: false
  private _invertMatcher?: boolean | cdktf.IResolvable; 
  public get invertMatcher() {
    return this.getBooleanAttribute('invert_matcher');
  }
  public set invertMatcher(value: boolean | cdktf.IResolvable) {
    this._invertMatcher = value;
  }
  public resetInvertMatcher() {
    this._invertMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatcherInput() {
    return this._invertMatcher;
  }

  // prefix_values - computed: false, optional: true, required: false
  private _prefixValues?: string[]; 
  public get prefixValues() {
    return this.getListAttribute('prefix_values');
  }
  public set prefixValues(value: string[]) {
    this._prefixValues = value;
  }
  public resetPrefixValues() {
    this._prefixValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixValuesInput() {
    return this._prefixValues;
  }

  // regex_values - computed: false, optional: true, required: false
  private _regexValues?: string[]; 
  public get regexValues() {
    return this.getListAttribute('regex_values');
  }
  public set regexValues(value: string[]) {
    this._regexValues = value;
  }
  public resetRegexValues() {
    this._regexValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValuesInput() {
    return this._regexValues;
  }

  // suffix_values - computed: false, optional: true, required: false
  private _suffixValues?: string[]; 
  public get suffixValues() {
    return this.getListAttribute('suffix_values');
  }
  public set suffixValues(value: string[]) {
    this._suffixValues = value;
  }
  public resetSuffixValues() {
    this._suffixValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixValuesInput() {
    return this._suffixValues;
  }

  // transformers - computed: false, optional: true, required: false
  private _transformers?: string[]; 
  public get transformers() {
    return this.getListAttribute('transformers');
  }
  public set transformers(value: string[]) {
    this._transformers = value;
  }
  public resetTransformers() {
    this._transformers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformersInput() {
    return this._transformers;
  }
}
export interface ServicePolicyRulePortMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#invert_matcher ServicePolicyRule#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#ports ServicePolicyRule#ports}
  */
  readonly ports: string[];
}

export function servicePolicyRulePortMatcherToTerraform(struct?: ServicePolicyRulePortMatcherOutputReference | ServicePolicyRulePortMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    ports: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ports),
  }
}


export function servicePolicyRulePortMatcherToHclTerraform(struct?: ServicePolicyRulePortMatcherOutputReference | ServicePolicyRulePortMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    invert_matcher: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatcher),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ports: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ports),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyRulePortMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServicePolicyRulePortMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invertMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatcher = this._invertMatcher;
    }
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyRulePortMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._invertMatcher = undefined;
      this._ports = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._invertMatcher = value.invertMatcher;
      this._ports = value.ports;
    }
  }

  // invert_matcher - computed: false, optional: true, required: false
  private _invertMatcher?: boolean | cdktf.IResolvable; 
  public get invertMatcher() {
    return this.getBooleanAttribute('invert_matcher');
  }
  public set invertMatcher(value: boolean | cdktf.IResolvable) {
    this._invertMatcher = value;
  }
  public resetInvertMatcher() {
    this._invertMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatcherInput() {
    return this._invertMatcher;
  }

  // ports - computed: false, optional: false, required: true
  private _ports?: string[]; 
  public get ports() {
    return this.getListAttribute('ports');
  }
  public set ports(value: string[]) {
    this._ports = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }
}
export interface ServicePolicyRuleQueryParamsItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#exact_values ServicePolicyRule#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#regex_values ServicePolicyRule#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#transformers ServicePolicyRule#transformers}
  */
  readonly transformers?: string[];
}

export function servicePolicyRuleQueryParamsItemToTerraform(struct?: ServicePolicyRuleQueryParamsItemOutputReference | ServicePolicyRuleQueryParamsItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    regex_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regexValues),
    transformers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transformers),
  }
}


export function servicePolicyRuleQueryParamsItemToHclTerraform(struct?: ServicePolicyRuleQueryParamsItemOutputReference | ServicePolicyRuleQueryParamsItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    regex_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regexValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    transformers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transformers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyRuleQueryParamsItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServicePolicyRuleQueryParamsItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    if (this._regexValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValues = this._regexValues;
    }
    if (this._transformers !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformers = this._transformers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyRuleQueryParamsItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValues = undefined;
      this._regexValues = undefined;
      this._transformers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValues = value.exactValues;
      this._regexValues = value.regexValues;
      this._transformers = value.transformers;
    }
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  public resetExactValues() {
    this._exactValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }

  // regex_values - computed: false, optional: true, required: false
  private _regexValues?: string[]; 
  public get regexValues() {
    return this.getListAttribute('regex_values');
  }
  public set regexValues(value: string[]) {
    this._regexValues = value;
  }
  public resetRegexValues() {
    this._regexValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValuesInput() {
    return this._regexValues;
  }

  // transformers - computed: false, optional: true, required: false
  private _transformers?: string[]; 
  public get transformers() {
    return this.getListAttribute('transformers');
  }
  public set transformers(value: string[]) {
    this._transformers = value;
  }
  public resetTransformers() {
    this._transformers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformersInput() {
    return this._transformers;
  }
}
export interface ServicePolicyRuleQueryParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#check_not_present ServicePolicyRule#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#check_present ServicePolicyRule#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#invert_matcher ServicePolicyRule#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#key ServicePolicyRule#key}
  */
  readonly key: string;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#item ServicePolicyRule#item}
  */
  readonly item?: ServicePolicyRuleQueryParamsItem;
}

export function servicePolicyRuleQueryParamsToTerraform(struct?: ServicePolicyRuleQueryParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    key: cdktf.stringToTerraform(struct!.key),
    item: servicePolicyRuleQueryParamsItemToTerraform(struct!.item),
  }
}


export function servicePolicyRuleQueryParamsToHclTerraform(struct?: ServicePolicyRuleQueryParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_not_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkNotPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    check_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    invert_matcher: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatcher),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    item: {
      value: servicePolicyRuleQueryParamsItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyRuleQueryParamsItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyRuleQueryParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyRuleQueryParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkNotPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkNotPresent = this._checkNotPresent;
    }
    if (this._checkPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkPresent = this._checkPresent;
    }
    if (this._invertMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatcher = this._invertMatcher;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._item?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.item = this._item?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyRuleQueryParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkNotPresent = undefined;
      this._checkPresent = undefined;
      this._invertMatcher = undefined;
      this._key = undefined;
      this._item.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkNotPresent = value.checkNotPresent;
      this._checkPresent = value.checkPresent;
      this._invertMatcher = value.invertMatcher;
      this._key = value.key;
      this._item.internalValue = value.item;
    }
  }

  // check_not_present - computed: false, optional: true, required: false
  private _checkNotPresent?: boolean | cdktf.IResolvable; 
  public get checkNotPresent() {
    return this.getBooleanAttribute('check_not_present');
  }
  public set checkNotPresent(value: boolean | cdktf.IResolvable) {
    this._checkNotPresent = value;
  }
  public resetCheckNotPresent() {
    this._checkNotPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkNotPresentInput() {
    return this._checkNotPresent;
  }

  // check_present - computed: false, optional: true, required: false
  private _checkPresent?: boolean | cdktf.IResolvable; 
  public get checkPresent() {
    return this.getBooleanAttribute('check_present');
  }
  public set checkPresent(value: boolean | cdktf.IResolvable) {
    this._checkPresent = value;
  }
  public resetCheckPresent() {
    this._checkPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkPresentInput() {
    return this._checkPresent;
  }

  // invert_matcher - computed: false, optional: true, required: false
  private _invertMatcher?: boolean | cdktf.IResolvable; 
  public get invertMatcher() {
    return this.getBooleanAttribute('invert_matcher');
  }
  public set invertMatcher(value: boolean | cdktf.IResolvable) {
    this._invertMatcher = value;
  }
  public resetInvertMatcher() {
    this._invertMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatcherInput() {
    return this._invertMatcher;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // item - computed: false, optional: true, required: false
  private _item = new ServicePolicyRuleQueryParamsItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: ServicePolicyRuleQueryParamsItem) {
    this._item.internalValue = value;
  }
  public resetItem() {
    this._item.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemInput() {
    return this._item.internalValue;
  }
}

export class ServicePolicyRuleQueryParamsList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyRuleQueryParams[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyRuleQueryParamsOutputReference {
    return new ServicePolicyRuleQueryParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyRuleRequestConstraints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#max_cookie_count_exceeds ServicePolicyRule#max_cookie_count_exceeds}
  */
  readonly maxCookieCountExceeds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#max_cookie_count_none ServicePolicyRule#max_cookie_count_none}
  */
  readonly maxCookieCountNone?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#max_cookie_key_size_exceeds ServicePolicyRule#max_cookie_key_size_exceeds}
  */
  readonly maxCookieKeySizeExceeds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#max_cookie_key_size_none ServicePolicyRule#max_cookie_key_size_none}
  */
  readonly maxCookieKeySizeNone?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#max_cookie_value_size_exceeds ServicePolicyRule#max_cookie_value_size_exceeds}
  */
  readonly maxCookieValueSizeExceeds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#max_cookie_value_size_none ServicePolicyRule#max_cookie_value_size_none}
  */
  readonly maxCookieValueSizeNone?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#max_header_count_exceeds ServicePolicyRule#max_header_count_exceeds}
  */
  readonly maxHeaderCountExceeds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#max_header_count_none ServicePolicyRule#max_header_count_none}
  */
  readonly maxHeaderCountNone?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#max_header_key_size_exceeds ServicePolicyRule#max_header_key_size_exceeds}
  */
  readonly maxHeaderKeySizeExceeds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#max_header_key_size_none ServicePolicyRule#max_header_key_size_none}
  */
  readonly maxHeaderKeySizeNone?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#max_header_value_size_exceeds ServicePolicyRule#max_header_value_size_exceeds}
  */
  readonly maxHeaderValueSizeExceeds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#max_header_value_size_none ServicePolicyRule#max_header_value_size_none}
  */
  readonly maxHeaderValueSizeNone?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#max_parameter_count_exceeds ServicePolicyRule#max_parameter_count_exceeds}
  */
  readonly maxParameterCountExceeds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#max_parameter_count_none ServicePolicyRule#max_parameter_count_none}
  */
  readonly maxParameterCountNone?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#max_parameter_name_size_exceeds ServicePolicyRule#max_parameter_name_size_exceeds}
  */
  readonly maxParameterNameSizeExceeds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#max_parameter_name_size_none ServicePolicyRule#max_parameter_name_size_none}
  */
  readonly maxParameterNameSizeNone?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#max_parameter_value_size_exceeds ServicePolicyRule#max_parameter_value_size_exceeds}
  */
  readonly maxParameterValueSizeExceeds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#max_parameter_value_size_none ServicePolicyRule#max_parameter_value_size_none}
  */
  readonly maxParameterValueSizeNone?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#max_query_size_exceeds ServicePolicyRule#max_query_size_exceeds}
  */
  readonly maxQuerySizeExceeds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#max_query_size_none ServicePolicyRule#max_query_size_none}
  */
  readonly maxQuerySizeNone?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#max_request_line_size_exceeds ServicePolicyRule#max_request_line_size_exceeds}
  */
  readonly maxRequestLineSizeExceeds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#max_request_line_size_none ServicePolicyRule#max_request_line_size_none}
  */
  readonly maxRequestLineSizeNone?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#max_request_size_exceeds ServicePolicyRule#max_request_size_exceeds}
  */
  readonly maxRequestSizeExceeds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#max_request_size_none ServicePolicyRule#max_request_size_none}
  */
  readonly maxRequestSizeNone?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#max_url_size_exceeds ServicePolicyRule#max_url_size_exceeds}
  */
  readonly maxUrlSizeExceeds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#max_url_size_none ServicePolicyRule#max_url_size_none}
  */
  readonly maxUrlSizeNone?: boolean | cdktf.IResolvable;
}

export function servicePolicyRuleRequestConstraintsToTerraform(struct?: ServicePolicyRuleRequestConstraintsOutputReference | ServicePolicyRuleRequestConstraints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_cookie_count_exceeds: cdktf.numberToTerraform(struct!.maxCookieCountExceeds),
    max_cookie_count_none: cdktf.booleanToTerraform(struct!.maxCookieCountNone),
    max_cookie_key_size_exceeds: cdktf.numberToTerraform(struct!.maxCookieKeySizeExceeds),
    max_cookie_key_size_none: cdktf.booleanToTerraform(struct!.maxCookieKeySizeNone),
    max_cookie_value_size_exceeds: cdktf.numberToTerraform(struct!.maxCookieValueSizeExceeds),
    max_cookie_value_size_none: cdktf.booleanToTerraform(struct!.maxCookieValueSizeNone),
    max_header_count_exceeds: cdktf.numberToTerraform(struct!.maxHeaderCountExceeds),
    max_header_count_none: cdktf.booleanToTerraform(struct!.maxHeaderCountNone),
    max_header_key_size_exceeds: cdktf.numberToTerraform(struct!.maxHeaderKeySizeExceeds),
    max_header_key_size_none: cdktf.booleanToTerraform(struct!.maxHeaderKeySizeNone),
    max_header_value_size_exceeds: cdktf.numberToTerraform(struct!.maxHeaderValueSizeExceeds),
    max_header_value_size_none: cdktf.booleanToTerraform(struct!.maxHeaderValueSizeNone),
    max_parameter_count_exceeds: cdktf.numberToTerraform(struct!.maxParameterCountExceeds),
    max_parameter_count_none: cdktf.booleanToTerraform(struct!.maxParameterCountNone),
    max_parameter_name_size_exceeds: cdktf.numberToTerraform(struct!.maxParameterNameSizeExceeds),
    max_parameter_name_size_none: cdktf.booleanToTerraform(struct!.maxParameterNameSizeNone),
    max_parameter_value_size_exceeds: cdktf.numberToTerraform(struct!.maxParameterValueSizeExceeds),
    max_parameter_value_size_none: cdktf.booleanToTerraform(struct!.maxParameterValueSizeNone),
    max_query_size_exceeds: cdktf.numberToTerraform(struct!.maxQuerySizeExceeds),
    max_query_size_none: cdktf.booleanToTerraform(struct!.maxQuerySizeNone),
    max_request_line_size_exceeds: cdktf.numberToTerraform(struct!.maxRequestLineSizeExceeds),
    max_request_line_size_none: cdktf.booleanToTerraform(struct!.maxRequestLineSizeNone),
    max_request_size_exceeds: cdktf.numberToTerraform(struct!.maxRequestSizeExceeds),
    max_request_size_none: cdktf.booleanToTerraform(struct!.maxRequestSizeNone),
    max_url_size_exceeds: cdktf.numberToTerraform(struct!.maxUrlSizeExceeds),
    max_url_size_none: cdktf.booleanToTerraform(struct!.maxUrlSizeNone),
  }
}


export function servicePolicyRuleRequestConstraintsToHclTerraform(struct?: ServicePolicyRuleRequestConstraintsOutputReference | ServicePolicyRuleRequestConstraints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_cookie_count_exceeds: {
      value: cdktf.numberToHclTerraform(struct!.maxCookieCountExceeds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_cookie_count_none: {
      value: cdktf.booleanToHclTerraform(struct!.maxCookieCountNone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_cookie_key_size_exceeds: {
      value: cdktf.numberToHclTerraform(struct!.maxCookieKeySizeExceeds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_cookie_key_size_none: {
      value: cdktf.booleanToHclTerraform(struct!.maxCookieKeySizeNone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_cookie_value_size_exceeds: {
      value: cdktf.numberToHclTerraform(struct!.maxCookieValueSizeExceeds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_cookie_value_size_none: {
      value: cdktf.booleanToHclTerraform(struct!.maxCookieValueSizeNone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_header_count_exceeds: {
      value: cdktf.numberToHclTerraform(struct!.maxHeaderCountExceeds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_header_count_none: {
      value: cdktf.booleanToHclTerraform(struct!.maxHeaderCountNone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_header_key_size_exceeds: {
      value: cdktf.numberToHclTerraform(struct!.maxHeaderKeySizeExceeds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_header_key_size_none: {
      value: cdktf.booleanToHclTerraform(struct!.maxHeaderKeySizeNone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_header_value_size_exceeds: {
      value: cdktf.numberToHclTerraform(struct!.maxHeaderValueSizeExceeds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_header_value_size_none: {
      value: cdktf.booleanToHclTerraform(struct!.maxHeaderValueSizeNone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_parameter_count_exceeds: {
      value: cdktf.numberToHclTerraform(struct!.maxParameterCountExceeds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_parameter_count_none: {
      value: cdktf.booleanToHclTerraform(struct!.maxParameterCountNone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_parameter_name_size_exceeds: {
      value: cdktf.numberToHclTerraform(struct!.maxParameterNameSizeExceeds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_parameter_name_size_none: {
      value: cdktf.booleanToHclTerraform(struct!.maxParameterNameSizeNone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_parameter_value_size_exceeds: {
      value: cdktf.numberToHclTerraform(struct!.maxParameterValueSizeExceeds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_parameter_value_size_none: {
      value: cdktf.booleanToHclTerraform(struct!.maxParameterValueSizeNone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_query_size_exceeds: {
      value: cdktf.numberToHclTerraform(struct!.maxQuerySizeExceeds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_query_size_none: {
      value: cdktf.booleanToHclTerraform(struct!.maxQuerySizeNone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_request_line_size_exceeds: {
      value: cdktf.numberToHclTerraform(struct!.maxRequestLineSizeExceeds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_request_line_size_none: {
      value: cdktf.booleanToHclTerraform(struct!.maxRequestLineSizeNone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_request_size_exceeds: {
      value: cdktf.numberToHclTerraform(struct!.maxRequestSizeExceeds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_request_size_none: {
      value: cdktf.booleanToHclTerraform(struct!.maxRequestSizeNone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_url_size_exceeds: {
      value: cdktf.numberToHclTerraform(struct!.maxUrlSizeExceeds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_url_size_none: {
      value: cdktf.booleanToHclTerraform(struct!.maxUrlSizeNone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyRuleRequestConstraintsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServicePolicyRuleRequestConstraints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxCookieCountExceeds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCookieCountExceeds = this._maxCookieCountExceeds;
    }
    if (this._maxCookieCountNone !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCookieCountNone = this._maxCookieCountNone;
    }
    if (this._maxCookieKeySizeExceeds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCookieKeySizeExceeds = this._maxCookieKeySizeExceeds;
    }
    if (this._maxCookieKeySizeNone !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCookieKeySizeNone = this._maxCookieKeySizeNone;
    }
    if (this._maxCookieValueSizeExceeds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCookieValueSizeExceeds = this._maxCookieValueSizeExceeds;
    }
    if (this._maxCookieValueSizeNone !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCookieValueSizeNone = this._maxCookieValueSizeNone;
    }
    if (this._maxHeaderCountExceeds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxHeaderCountExceeds = this._maxHeaderCountExceeds;
    }
    if (this._maxHeaderCountNone !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxHeaderCountNone = this._maxHeaderCountNone;
    }
    if (this._maxHeaderKeySizeExceeds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxHeaderKeySizeExceeds = this._maxHeaderKeySizeExceeds;
    }
    if (this._maxHeaderKeySizeNone !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxHeaderKeySizeNone = this._maxHeaderKeySizeNone;
    }
    if (this._maxHeaderValueSizeExceeds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxHeaderValueSizeExceeds = this._maxHeaderValueSizeExceeds;
    }
    if (this._maxHeaderValueSizeNone !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxHeaderValueSizeNone = this._maxHeaderValueSizeNone;
    }
    if (this._maxParameterCountExceeds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxParameterCountExceeds = this._maxParameterCountExceeds;
    }
    if (this._maxParameterCountNone !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxParameterCountNone = this._maxParameterCountNone;
    }
    if (this._maxParameterNameSizeExceeds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxParameterNameSizeExceeds = this._maxParameterNameSizeExceeds;
    }
    if (this._maxParameterNameSizeNone !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxParameterNameSizeNone = this._maxParameterNameSizeNone;
    }
    if (this._maxParameterValueSizeExceeds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxParameterValueSizeExceeds = this._maxParameterValueSizeExceeds;
    }
    if (this._maxParameterValueSizeNone !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxParameterValueSizeNone = this._maxParameterValueSizeNone;
    }
    if (this._maxQuerySizeExceeds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxQuerySizeExceeds = this._maxQuerySizeExceeds;
    }
    if (this._maxQuerySizeNone !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxQuerySizeNone = this._maxQuerySizeNone;
    }
    if (this._maxRequestLineSizeExceeds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRequestLineSizeExceeds = this._maxRequestLineSizeExceeds;
    }
    if (this._maxRequestLineSizeNone !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRequestLineSizeNone = this._maxRequestLineSizeNone;
    }
    if (this._maxRequestSizeExceeds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRequestSizeExceeds = this._maxRequestSizeExceeds;
    }
    if (this._maxRequestSizeNone !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRequestSizeNone = this._maxRequestSizeNone;
    }
    if (this._maxUrlSizeExceeds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUrlSizeExceeds = this._maxUrlSizeExceeds;
    }
    if (this._maxUrlSizeNone !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUrlSizeNone = this._maxUrlSizeNone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyRuleRequestConstraints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxCookieCountExceeds = undefined;
      this._maxCookieCountNone = undefined;
      this._maxCookieKeySizeExceeds = undefined;
      this._maxCookieKeySizeNone = undefined;
      this._maxCookieValueSizeExceeds = undefined;
      this._maxCookieValueSizeNone = undefined;
      this._maxHeaderCountExceeds = undefined;
      this._maxHeaderCountNone = undefined;
      this._maxHeaderKeySizeExceeds = undefined;
      this._maxHeaderKeySizeNone = undefined;
      this._maxHeaderValueSizeExceeds = undefined;
      this._maxHeaderValueSizeNone = undefined;
      this._maxParameterCountExceeds = undefined;
      this._maxParameterCountNone = undefined;
      this._maxParameterNameSizeExceeds = undefined;
      this._maxParameterNameSizeNone = undefined;
      this._maxParameterValueSizeExceeds = undefined;
      this._maxParameterValueSizeNone = undefined;
      this._maxQuerySizeExceeds = undefined;
      this._maxQuerySizeNone = undefined;
      this._maxRequestLineSizeExceeds = undefined;
      this._maxRequestLineSizeNone = undefined;
      this._maxRequestSizeExceeds = undefined;
      this._maxRequestSizeNone = undefined;
      this._maxUrlSizeExceeds = undefined;
      this._maxUrlSizeNone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxCookieCountExceeds = value.maxCookieCountExceeds;
      this._maxCookieCountNone = value.maxCookieCountNone;
      this._maxCookieKeySizeExceeds = value.maxCookieKeySizeExceeds;
      this._maxCookieKeySizeNone = value.maxCookieKeySizeNone;
      this._maxCookieValueSizeExceeds = value.maxCookieValueSizeExceeds;
      this._maxCookieValueSizeNone = value.maxCookieValueSizeNone;
      this._maxHeaderCountExceeds = value.maxHeaderCountExceeds;
      this._maxHeaderCountNone = value.maxHeaderCountNone;
      this._maxHeaderKeySizeExceeds = value.maxHeaderKeySizeExceeds;
      this._maxHeaderKeySizeNone = value.maxHeaderKeySizeNone;
      this._maxHeaderValueSizeExceeds = value.maxHeaderValueSizeExceeds;
      this._maxHeaderValueSizeNone = value.maxHeaderValueSizeNone;
      this._maxParameterCountExceeds = value.maxParameterCountExceeds;
      this._maxParameterCountNone = value.maxParameterCountNone;
      this._maxParameterNameSizeExceeds = value.maxParameterNameSizeExceeds;
      this._maxParameterNameSizeNone = value.maxParameterNameSizeNone;
      this._maxParameterValueSizeExceeds = value.maxParameterValueSizeExceeds;
      this._maxParameterValueSizeNone = value.maxParameterValueSizeNone;
      this._maxQuerySizeExceeds = value.maxQuerySizeExceeds;
      this._maxQuerySizeNone = value.maxQuerySizeNone;
      this._maxRequestLineSizeExceeds = value.maxRequestLineSizeExceeds;
      this._maxRequestLineSizeNone = value.maxRequestLineSizeNone;
      this._maxRequestSizeExceeds = value.maxRequestSizeExceeds;
      this._maxRequestSizeNone = value.maxRequestSizeNone;
      this._maxUrlSizeExceeds = value.maxUrlSizeExceeds;
      this._maxUrlSizeNone = value.maxUrlSizeNone;
    }
  }

  // max_cookie_count_exceeds - computed: false, optional: true, required: false
  private _maxCookieCountExceeds?: number; 
  public get maxCookieCountExceeds() {
    return this.getNumberAttribute('max_cookie_count_exceeds');
  }
  public set maxCookieCountExceeds(value: number) {
    this._maxCookieCountExceeds = value;
  }
  public resetMaxCookieCountExceeds() {
    this._maxCookieCountExceeds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCookieCountExceedsInput() {
    return this._maxCookieCountExceeds;
  }

  // max_cookie_count_none - computed: false, optional: true, required: false
  private _maxCookieCountNone?: boolean | cdktf.IResolvable; 
  public get maxCookieCountNone() {
    return this.getBooleanAttribute('max_cookie_count_none');
  }
  public set maxCookieCountNone(value: boolean | cdktf.IResolvable) {
    this._maxCookieCountNone = value;
  }
  public resetMaxCookieCountNone() {
    this._maxCookieCountNone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCookieCountNoneInput() {
    return this._maxCookieCountNone;
  }

  // max_cookie_key_size_exceeds - computed: false, optional: true, required: false
  private _maxCookieKeySizeExceeds?: number; 
  public get maxCookieKeySizeExceeds() {
    return this.getNumberAttribute('max_cookie_key_size_exceeds');
  }
  public set maxCookieKeySizeExceeds(value: number) {
    this._maxCookieKeySizeExceeds = value;
  }
  public resetMaxCookieKeySizeExceeds() {
    this._maxCookieKeySizeExceeds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCookieKeySizeExceedsInput() {
    return this._maxCookieKeySizeExceeds;
  }

  // max_cookie_key_size_none - computed: false, optional: true, required: false
  private _maxCookieKeySizeNone?: boolean | cdktf.IResolvable; 
  public get maxCookieKeySizeNone() {
    return this.getBooleanAttribute('max_cookie_key_size_none');
  }
  public set maxCookieKeySizeNone(value: boolean | cdktf.IResolvable) {
    this._maxCookieKeySizeNone = value;
  }
  public resetMaxCookieKeySizeNone() {
    this._maxCookieKeySizeNone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCookieKeySizeNoneInput() {
    return this._maxCookieKeySizeNone;
  }

  // max_cookie_value_size_exceeds - computed: false, optional: true, required: false
  private _maxCookieValueSizeExceeds?: number; 
  public get maxCookieValueSizeExceeds() {
    return this.getNumberAttribute('max_cookie_value_size_exceeds');
  }
  public set maxCookieValueSizeExceeds(value: number) {
    this._maxCookieValueSizeExceeds = value;
  }
  public resetMaxCookieValueSizeExceeds() {
    this._maxCookieValueSizeExceeds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCookieValueSizeExceedsInput() {
    return this._maxCookieValueSizeExceeds;
  }

  // max_cookie_value_size_none - computed: false, optional: true, required: false
  private _maxCookieValueSizeNone?: boolean | cdktf.IResolvable; 
  public get maxCookieValueSizeNone() {
    return this.getBooleanAttribute('max_cookie_value_size_none');
  }
  public set maxCookieValueSizeNone(value: boolean | cdktf.IResolvable) {
    this._maxCookieValueSizeNone = value;
  }
  public resetMaxCookieValueSizeNone() {
    this._maxCookieValueSizeNone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCookieValueSizeNoneInput() {
    return this._maxCookieValueSizeNone;
  }

  // max_header_count_exceeds - computed: false, optional: true, required: false
  private _maxHeaderCountExceeds?: number; 
  public get maxHeaderCountExceeds() {
    return this.getNumberAttribute('max_header_count_exceeds');
  }
  public set maxHeaderCountExceeds(value: number) {
    this._maxHeaderCountExceeds = value;
  }
  public resetMaxHeaderCountExceeds() {
    this._maxHeaderCountExceeds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHeaderCountExceedsInput() {
    return this._maxHeaderCountExceeds;
  }

  // max_header_count_none - computed: false, optional: true, required: false
  private _maxHeaderCountNone?: boolean | cdktf.IResolvable; 
  public get maxHeaderCountNone() {
    return this.getBooleanAttribute('max_header_count_none');
  }
  public set maxHeaderCountNone(value: boolean | cdktf.IResolvable) {
    this._maxHeaderCountNone = value;
  }
  public resetMaxHeaderCountNone() {
    this._maxHeaderCountNone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHeaderCountNoneInput() {
    return this._maxHeaderCountNone;
  }

  // max_header_key_size_exceeds - computed: false, optional: true, required: false
  private _maxHeaderKeySizeExceeds?: number; 
  public get maxHeaderKeySizeExceeds() {
    return this.getNumberAttribute('max_header_key_size_exceeds');
  }
  public set maxHeaderKeySizeExceeds(value: number) {
    this._maxHeaderKeySizeExceeds = value;
  }
  public resetMaxHeaderKeySizeExceeds() {
    this._maxHeaderKeySizeExceeds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHeaderKeySizeExceedsInput() {
    return this._maxHeaderKeySizeExceeds;
  }

  // max_header_key_size_none - computed: false, optional: true, required: false
  private _maxHeaderKeySizeNone?: boolean | cdktf.IResolvable; 
  public get maxHeaderKeySizeNone() {
    return this.getBooleanAttribute('max_header_key_size_none');
  }
  public set maxHeaderKeySizeNone(value: boolean | cdktf.IResolvable) {
    this._maxHeaderKeySizeNone = value;
  }
  public resetMaxHeaderKeySizeNone() {
    this._maxHeaderKeySizeNone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHeaderKeySizeNoneInput() {
    return this._maxHeaderKeySizeNone;
  }

  // max_header_value_size_exceeds - computed: false, optional: true, required: false
  private _maxHeaderValueSizeExceeds?: number; 
  public get maxHeaderValueSizeExceeds() {
    return this.getNumberAttribute('max_header_value_size_exceeds');
  }
  public set maxHeaderValueSizeExceeds(value: number) {
    this._maxHeaderValueSizeExceeds = value;
  }
  public resetMaxHeaderValueSizeExceeds() {
    this._maxHeaderValueSizeExceeds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHeaderValueSizeExceedsInput() {
    return this._maxHeaderValueSizeExceeds;
  }

  // max_header_value_size_none - computed: false, optional: true, required: false
  private _maxHeaderValueSizeNone?: boolean | cdktf.IResolvable; 
  public get maxHeaderValueSizeNone() {
    return this.getBooleanAttribute('max_header_value_size_none');
  }
  public set maxHeaderValueSizeNone(value: boolean | cdktf.IResolvable) {
    this._maxHeaderValueSizeNone = value;
  }
  public resetMaxHeaderValueSizeNone() {
    this._maxHeaderValueSizeNone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHeaderValueSizeNoneInput() {
    return this._maxHeaderValueSizeNone;
  }

  // max_parameter_count_exceeds - computed: false, optional: true, required: false
  private _maxParameterCountExceeds?: number; 
  public get maxParameterCountExceeds() {
    return this.getNumberAttribute('max_parameter_count_exceeds');
  }
  public set maxParameterCountExceeds(value: number) {
    this._maxParameterCountExceeds = value;
  }
  public resetMaxParameterCountExceeds() {
    this._maxParameterCountExceeds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxParameterCountExceedsInput() {
    return this._maxParameterCountExceeds;
  }

  // max_parameter_count_none - computed: false, optional: true, required: false
  private _maxParameterCountNone?: boolean | cdktf.IResolvable; 
  public get maxParameterCountNone() {
    return this.getBooleanAttribute('max_parameter_count_none');
  }
  public set maxParameterCountNone(value: boolean | cdktf.IResolvable) {
    this._maxParameterCountNone = value;
  }
  public resetMaxParameterCountNone() {
    this._maxParameterCountNone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxParameterCountNoneInput() {
    return this._maxParameterCountNone;
  }

  // max_parameter_name_size_exceeds - computed: false, optional: true, required: false
  private _maxParameterNameSizeExceeds?: number; 
  public get maxParameterNameSizeExceeds() {
    return this.getNumberAttribute('max_parameter_name_size_exceeds');
  }
  public set maxParameterNameSizeExceeds(value: number) {
    this._maxParameterNameSizeExceeds = value;
  }
  public resetMaxParameterNameSizeExceeds() {
    this._maxParameterNameSizeExceeds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxParameterNameSizeExceedsInput() {
    return this._maxParameterNameSizeExceeds;
  }

  // max_parameter_name_size_none - computed: false, optional: true, required: false
  private _maxParameterNameSizeNone?: boolean | cdktf.IResolvable; 
  public get maxParameterNameSizeNone() {
    return this.getBooleanAttribute('max_parameter_name_size_none');
  }
  public set maxParameterNameSizeNone(value: boolean | cdktf.IResolvable) {
    this._maxParameterNameSizeNone = value;
  }
  public resetMaxParameterNameSizeNone() {
    this._maxParameterNameSizeNone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxParameterNameSizeNoneInput() {
    return this._maxParameterNameSizeNone;
  }

  // max_parameter_value_size_exceeds - computed: false, optional: true, required: false
  private _maxParameterValueSizeExceeds?: number; 
  public get maxParameterValueSizeExceeds() {
    return this.getNumberAttribute('max_parameter_value_size_exceeds');
  }
  public set maxParameterValueSizeExceeds(value: number) {
    this._maxParameterValueSizeExceeds = value;
  }
  public resetMaxParameterValueSizeExceeds() {
    this._maxParameterValueSizeExceeds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxParameterValueSizeExceedsInput() {
    return this._maxParameterValueSizeExceeds;
  }

  // max_parameter_value_size_none - computed: false, optional: true, required: false
  private _maxParameterValueSizeNone?: boolean | cdktf.IResolvable; 
  public get maxParameterValueSizeNone() {
    return this.getBooleanAttribute('max_parameter_value_size_none');
  }
  public set maxParameterValueSizeNone(value: boolean | cdktf.IResolvable) {
    this._maxParameterValueSizeNone = value;
  }
  public resetMaxParameterValueSizeNone() {
    this._maxParameterValueSizeNone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxParameterValueSizeNoneInput() {
    return this._maxParameterValueSizeNone;
  }

  // max_query_size_exceeds - computed: false, optional: true, required: false
  private _maxQuerySizeExceeds?: number; 
  public get maxQuerySizeExceeds() {
    return this.getNumberAttribute('max_query_size_exceeds');
  }
  public set maxQuerySizeExceeds(value: number) {
    this._maxQuerySizeExceeds = value;
  }
  public resetMaxQuerySizeExceeds() {
    this._maxQuerySizeExceeds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxQuerySizeExceedsInput() {
    return this._maxQuerySizeExceeds;
  }

  // max_query_size_none - computed: false, optional: true, required: false
  private _maxQuerySizeNone?: boolean | cdktf.IResolvable; 
  public get maxQuerySizeNone() {
    return this.getBooleanAttribute('max_query_size_none');
  }
  public set maxQuerySizeNone(value: boolean | cdktf.IResolvable) {
    this._maxQuerySizeNone = value;
  }
  public resetMaxQuerySizeNone() {
    this._maxQuerySizeNone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxQuerySizeNoneInput() {
    return this._maxQuerySizeNone;
  }

  // max_request_line_size_exceeds - computed: false, optional: true, required: false
  private _maxRequestLineSizeExceeds?: number; 
  public get maxRequestLineSizeExceeds() {
    return this.getNumberAttribute('max_request_line_size_exceeds');
  }
  public set maxRequestLineSizeExceeds(value: number) {
    this._maxRequestLineSizeExceeds = value;
  }
  public resetMaxRequestLineSizeExceeds() {
    this._maxRequestLineSizeExceeds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRequestLineSizeExceedsInput() {
    return this._maxRequestLineSizeExceeds;
  }

  // max_request_line_size_none - computed: false, optional: true, required: false
  private _maxRequestLineSizeNone?: boolean | cdktf.IResolvable; 
  public get maxRequestLineSizeNone() {
    return this.getBooleanAttribute('max_request_line_size_none');
  }
  public set maxRequestLineSizeNone(value: boolean | cdktf.IResolvable) {
    this._maxRequestLineSizeNone = value;
  }
  public resetMaxRequestLineSizeNone() {
    this._maxRequestLineSizeNone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRequestLineSizeNoneInput() {
    return this._maxRequestLineSizeNone;
  }

  // max_request_size_exceeds - computed: false, optional: true, required: false
  private _maxRequestSizeExceeds?: number; 
  public get maxRequestSizeExceeds() {
    return this.getNumberAttribute('max_request_size_exceeds');
  }
  public set maxRequestSizeExceeds(value: number) {
    this._maxRequestSizeExceeds = value;
  }
  public resetMaxRequestSizeExceeds() {
    this._maxRequestSizeExceeds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRequestSizeExceedsInput() {
    return this._maxRequestSizeExceeds;
  }

  // max_request_size_none - computed: false, optional: true, required: false
  private _maxRequestSizeNone?: boolean | cdktf.IResolvable; 
  public get maxRequestSizeNone() {
    return this.getBooleanAttribute('max_request_size_none');
  }
  public set maxRequestSizeNone(value: boolean | cdktf.IResolvable) {
    this._maxRequestSizeNone = value;
  }
  public resetMaxRequestSizeNone() {
    this._maxRequestSizeNone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRequestSizeNoneInput() {
    return this._maxRequestSizeNone;
  }

  // max_url_size_exceeds - computed: false, optional: true, required: false
  private _maxUrlSizeExceeds?: number; 
  public get maxUrlSizeExceeds() {
    return this.getNumberAttribute('max_url_size_exceeds');
  }
  public set maxUrlSizeExceeds(value: number) {
    this._maxUrlSizeExceeds = value;
  }
  public resetMaxUrlSizeExceeds() {
    this._maxUrlSizeExceeds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUrlSizeExceedsInput() {
    return this._maxUrlSizeExceeds;
  }

  // max_url_size_none - computed: false, optional: true, required: false
  private _maxUrlSizeNone?: boolean | cdktf.IResolvable; 
  public get maxUrlSizeNone() {
    return this.getBooleanAttribute('max_url_size_none');
  }
  public set maxUrlSizeNone(value: boolean | cdktf.IResolvable) {
    this._maxUrlSizeNone = value;
  }
  public resetMaxUrlSizeNone() {
    this._maxUrlSizeNone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUrlSizeNoneInput() {
    return this._maxUrlSizeNone;
  }
}
export interface ServicePolicyRuleSegmentPolicyDstSegmentsSegments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#name ServicePolicyRule#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#namespace ServicePolicyRule#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#tenant ServicePolicyRule#tenant}
  */
  readonly tenant?: string;
}

export function servicePolicyRuleSegmentPolicyDstSegmentsSegmentsToTerraform(struct?: ServicePolicyRuleSegmentPolicyDstSegmentsSegments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function servicePolicyRuleSegmentPolicyDstSegmentsSegmentsToHclTerraform(struct?: ServicePolicyRuleSegmentPolicyDstSegmentsSegments | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyRuleSegmentPolicyDstSegmentsSegmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyRuleSegmentPolicyDstSegmentsSegments | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyRuleSegmentPolicyDstSegmentsSegments | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class ServicePolicyRuleSegmentPolicyDstSegmentsSegmentsList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyRuleSegmentPolicyDstSegmentsSegments[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyRuleSegmentPolicyDstSegmentsSegmentsOutputReference {
    return new ServicePolicyRuleSegmentPolicyDstSegmentsSegmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyRuleSegmentPolicyDstSegments {
  /**
  * segments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#segments ServicePolicyRule#segments}
  */
  readonly segments: ServicePolicyRuleSegmentPolicyDstSegmentsSegments[] | cdktf.IResolvable;
}

export function servicePolicyRuleSegmentPolicyDstSegmentsToTerraform(struct?: ServicePolicyRuleSegmentPolicyDstSegmentsOutputReference | ServicePolicyRuleSegmentPolicyDstSegments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    segments: cdktf.listMapper(servicePolicyRuleSegmentPolicyDstSegmentsSegmentsToTerraform, true)(struct!.segments),
  }
}


export function servicePolicyRuleSegmentPolicyDstSegmentsToHclTerraform(struct?: ServicePolicyRuleSegmentPolicyDstSegmentsOutputReference | ServicePolicyRuleSegmentPolicyDstSegments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    segments: {
      value: cdktf.listMapperHcl(servicePolicyRuleSegmentPolicyDstSegmentsSegmentsToHclTerraform, true)(struct!.segments),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyRuleSegmentPolicyDstSegmentsSegmentsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyRuleSegmentPolicyDstSegmentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServicePolicyRuleSegmentPolicyDstSegments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._segments?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.segments = this._segments?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyRuleSegmentPolicyDstSegments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._segments.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._segments.internalValue = value.segments;
    }
  }

  // segments - computed: false, optional: false, required: true
  private _segments = new ServicePolicyRuleSegmentPolicyDstSegmentsSegmentsList(this, "segments", false);
  public get segments() {
    return this._segments;
  }
  public putSegments(value: ServicePolicyRuleSegmentPolicyDstSegmentsSegments[] | cdktf.IResolvable) {
    this._segments.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentsInput() {
    return this._segments.internalValue;
  }
}
export interface ServicePolicyRuleSegmentPolicySrcSegmentsSegments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#name ServicePolicyRule#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#namespace ServicePolicyRule#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#tenant ServicePolicyRule#tenant}
  */
  readonly tenant?: string;
}

export function servicePolicyRuleSegmentPolicySrcSegmentsSegmentsToTerraform(struct?: ServicePolicyRuleSegmentPolicySrcSegmentsSegments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function servicePolicyRuleSegmentPolicySrcSegmentsSegmentsToHclTerraform(struct?: ServicePolicyRuleSegmentPolicySrcSegmentsSegments | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyRuleSegmentPolicySrcSegmentsSegmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyRuleSegmentPolicySrcSegmentsSegments | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyRuleSegmentPolicySrcSegmentsSegments | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class ServicePolicyRuleSegmentPolicySrcSegmentsSegmentsList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyRuleSegmentPolicySrcSegmentsSegments[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyRuleSegmentPolicySrcSegmentsSegmentsOutputReference {
    return new ServicePolicyRuleSegmentPolicySrcSegmentsSegmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyRuleSegmentPolicySrcSegments {
  /**
  * segments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#segments ServicePolicyRule#segments}
  */
  readonly segments: ServicePolicyRuleSegmentPolicySrcSegmentsSegments[] | cdktf.IResolvable;
}

export function servicePolicyRuleSegmentPolicySrcSegmentsToTerraform(struct?: ServicePolicyRuleSegmentPolicySrcSegmentsOutputReference | ServicePolicyRuleSegmentPolicySrcSegments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    segments: cdktf.listMapper(servicePolicyRuleSegmentPolicySrcSegmentsSegmentsToTerraform, true)(struct!.segments),
  }
}


export function servicePolicyRuleSegmentPolicySrcSegmentsToHclTerraform(struct?: ServicePolicyRuleSegmentPolicySrcSegmentsOutputReference | ServicePolicyRuleSegmentPolicySrcSegments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    segments: {
      value: cdktf.listMapperHcl(servicePolicyRuleSegmentPolicySrcSegmentsSegmentsToHclTerraform, true)(struct!.segments),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyRuleSegmentPolicySrcSegmentsSegmentsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyRuleSegmentPolicySrcSegmentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServicePolicyRuleSegmentPolicySrcSegments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._segments?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.segments = this._segments?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyRuleSegmentPolicySrcSegments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._segments.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._segments.internalValue = value.segments;
    }
  }

  // segments - computed: false, optional: false, required: true
  private _segments = new ServicePolicyRuleSegmentPolicySrcSegmentsSegmentsList(this, "segments", false);
  public get segments() {
    return this._segments;
  }
  public putSegments(value: ServicePolicyRuleSegmentPolicySrcSegmentsSegments[] | cdktf.IResolvable) {
    this._segments.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentsInput() {
    return this._segments.internalValue;
  }
}
export interface ServicePolicyRuleSegmentPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#dst_any ServicePolicyRule#dst_any}
  */
  readonly dstAny?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#intra_segment ServicePolicyRule#intra_segment}
  */
  readonly intraSegment?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#src_any ServicePolicyRule#src_any}
  */
  readonly srcAny?: boolean | cdktf.IResolvable;
  /**
  * dst_segments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#dst_segments ServicePolicyRule#dst_segments}
  */
  readonly dstSegments?: ServicePolicyRuleSegmentPolicyDstSegments;
  /**
  * src_segments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#src_segments ServicePolicyRule#src_segments}
  */
  readonly srcSegments?: ServicePolicyRuleSegmentPolicySrcSegments;
}

export function servicePolicyRuleSegmentPolicyToTerraform(struct?: ServicePolicyRuleSegmentPolicyOutputReference | ServicePolicyRuleSegmentPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dst_any: cdktf.booleanToTerraform(struct!.dstAny),
    intra_segment: cdktf.booleanToTerraform(struct!.intraSegment),
    src_any: cdktf.booleanToTerraform(struct!.srcAny),
    dst_segments: servicePolicyRuleSegmentPolicyDstSegmentsToTerraform(struct!.dstSegments),
    src_segments: servicePolicyRuleSegmentPolicySrcSegmentsToTerraform(struct!.srcSegments),
  }
}


export function servicePolicyRuleSegmentPolicyToHclTerraform(struct?: ServicePolicyRuleSegmentPolicyOutputReference | ServicePolicyRuleSegmentPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dst_any: {
      value: cdktf.booleanToHclTerraform(struct!.dstAny),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    intra_segment: {
      value: cdktf.booleanToHclTerraform(struct!.intraSegment),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    src_any: {
      value: cdktf.booleanToHclTerraform(struct!.srcAny),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dst_segments: {
      value: servicePolicyRuleSegmentPolicyDstSegmentsToHclTerraform(struct!.dstSegments),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyRuleSegmentPolicyDstSegmentsList",
    },
    src_segments: {
      value: servicePolicyRuleSegmentPolicySrcSegmentsToHclTerraform(struct!.srcSegments),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyRuleSegmentPolicySrcSegmentsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyRuleSegmentPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServicePolicyRuleSegmentPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dstAny !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstAny = this._dstAny;
    }
    if (this._intraSegment !== undefined) {
      hasAnyValues = true;
      internalValueResult.intraSegment = this._intraSegment;
    }
    if (this._srcAny !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcAny = this._srcAny;
    }
    if (this._dstSegments?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstSegments = this._dstSegments?.internalValue;
    }
    if (this._srcSegments?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcSegments = this._srcSegments?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyRuleSegmentPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dstAny = undefined;
      this._intraSegment = undefined;
      this._srcAny = undefined;
      this._dstSegments.internalValue = undefined;
      this._srcSegments.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dstAny = value.dstAny;
      this._intraSegment = value.intraSegment;
      this._srcAny = value.srcAny;
      this._dstSegments.internalValue = value.dstSegments;
      this._srcSegments.internalValue = value.srcSegments;
    }
  }

  // dst_any - computed: false, optional: true, required: false
  private _dstAny?: boolean | cdktf.IResolvable; 
  public get dstAny() {
    return this.getBooleanAttribute('dst_any');
  }
  public set dstAny(value: boolean | cdktf.IResolvable) {
    this._dstAny = value;
  }
  public resetDstAny() {
    this._dstAny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstAnyInput() {
    return this._dstAny;
  }

  // intra_segment - computed: false, optional: true, required: false
  private _intraSegment?: boolean | cdktf.IResolvable; 
  public get intraSegment() {
    return this.getBooleanAttribute('intra_segment');
  }
  public set intraSegment(value: boolean | cdktf.IResolvable) {
    this._intraSegment = value;
  }
  public resetIntraSegment() {
    this._intraSegment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intraSegmentInput() {
    return this._intraSegment;
  }

  // src_any - computed: false, optional: true, required: false
  private _srcAny?: boolean | cdktf.IResolvable; 
  public get srcAny() {
    return this.getBooleanAttribute('src_any');
  }
  public set srcAny(value: boolean | cdktf.IResolvable) {
    this._srcAny = value;
  }
  public resetSrcAny() {
    this._srcAny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcAnyInput() {
    return this._srcAny;
  }

  // dst_segments - computed: false, optional: true, required: false
  private _dstSegments = new ServicePolicyRuleSegmentPolicyDstSegmentsOutputReference(this, "dst_segments");
  public get dstSegments() {
    return this._dstSegments;
  }
  public putDstSegments(value: ServicePolicyRuleSegmentPolicyDstSegments) {
    this._dstSegments.internalValue = value;
  }
  public resetDstSegments() {
    this._dstSegments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstSegmentsInput() {
    return this._dstSegments.internalValue;
  }

  // src_segments - computed: false, optional: true, required: false
  private _srcSegments = new ServicePolicyRuleSegmentPolicySrcSegmentsOutputReference(this, "src_segments");
  public get srcSegments() {
    return this._srcSegments;
  }
  public putSrcSegments(value: ServicePolicyRuleSegmentPolicySrcSegments) {
    this._srcSegments.internalValue = value;
  }
  public resetSrcSegments() {
    this._srcSegments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcSegmentsInput() {
    return this._srcSegments.internalValue;
  }
}
export interface ServicePolicyRuleTlsFingerprintMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#classes ServicePolicyRule#classes}
  */
  readonly classes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#exact_values ServicePolicyRule#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#excluded_values ServicePolicyRule#excluded_values}
  */
  readonly excludedValues?: string[];
}

export function servicePolicyRuleTlsFingerprintMatcherToTerraform(struct?: ServicePolicyRuleTlsFingerprintMatcherOutputReference | ServicePolicyRuleTlsFingerprintMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    classes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.classes),
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    excluded_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedValues),
  }
}


export function servicePolicyRuleTlsFingerprintMatcherToHclTerraform(struct?: ServicePolicyRuleTlsFingerprintMatcherOutputReference | ServicePolicyRuleTlsFingerprintMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    classes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.classes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    excluded_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyRuleTlsFingerprintMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServicePolicyRuleTlsFingerprintMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classes !== undefined) {
      hasAnyValues = true;
      internalValueResult.classes = this._classes;
    }
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    if (this._excludedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedValues = this._excludedValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyRuleTlsFingerprintMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._classes = undefined;
      this._exactValues = undefined;
      this._excludedValues = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._classes = value.classes;
      this._exactValues = value.exactValues;
      this._excludedValues = value.excludedValues;
    }
  }

  // classes - computed: false, optional: true, required: false
  private _classes?: string[]; 
  public get classes() {
    return this.getListAttribute('classes');
  }
  public set classes(value: string[]) {
    this._classes = value;
  }
  public resetClasses() {
    this._classes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classesInput() {
    return this._classes;
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  public resetExactValues() {
    this._exactValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }

  // excluded_values - computed: false, optional: true, required: false
  private _excludedValues?: string[]; 
  public get excludedValues() {
    return this.getListAttribute('excluded_values');
  }
  public set excludedValues(value: string[]) {
    this._excludedValues = value;
  }
  public resetExcludedValues() {
    this._excludedValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedValuesInput() {
    return this._excludedValues;
  }
}
export interface ServicePolicyRuleWafActionAppFirewallDetectionControlExcludeAttackTypeContexts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#context ServicePolicyRule#context}
  */
  readonly context: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#context_name ServicePolicyRule#context_name}
  */
  readonly contextName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#exclude_attack_type ServicePolicyRule#exclude_attack_type}
  */
  readonly excludeAttackType: string;
}

export function servicePolicyRuleWafActionAppFirewallDetectionControlExcludeAttackTypeContextsToTerraform(struct?: ServicePolicyRuleWafActionAppFirewallDetectionControlExcludeAttackTypeContexts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    context_name: cdktf.stringToTerraform(struct!.contextName),
    exclude_attack_type: cdktf.stringToTerraform(struct!.excludeAttackType),
  }
}


export function servicePolicyRuleWafActionAppFirewallDetectionControlExcludeAttackTypeContextsToHclTerraform(struct?: ServicePolicyRuleWafActionAppFirewallDetectionControlExcludeAttackTypeContexts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    context_name: {
      value: cdktf.stringToHclTerraform(struct!.contextName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_attack_type: {
      value: cdktf.stringToHclTerraform(struct!.excludeAttackType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyRuleWafActionAppFirewallDetectionControlExcludeAttackTypeContextsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyRuleWafActionAppFirewallDetectionControlExcludeAttackTypeContexts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._contextName !== undefined) {
      hasAnyValues = true;
      internalValueResult.contextName = this._contextName;
    }
    if (this._excludeAttackType !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeAttackType = this._excludeAttackType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyRuleWafActionAppFirewallDetectionControlExcludeAttackTypeContexts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._context = undefined;
      this._contextName = undefined;
      this._excludeAttackType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._context = value.context;
      this._contextName = value.contextName;
      this._excludeAttackType = value.excludeAttackType;
    }
  }

  // context - computed: false, optional: false, required: true
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // context_name - computed: false, optional: true, required: false
  private _contextName?: string; 
  public get contextName() {
    return this.getStringAttribute('context_name');
  }
  public set contextName(value: string) {
    this._contextName = value;
  }
  public resetContextName() {
    this._contextName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextNameInput() {
    return this._contextName;
  }

  // exclude_attack_type - computed: false, optional: false, required: true
  private _excludeAttackType?: string; 
  public get excludeAttackType() {
    return this.getStringAttribute('exclude_attack_type');
  }
  public set excludeAttackType(value: string) {
    this._excludeAttackType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeAttackTypeInput() {
    return this._excludeAttackType;
  }
}

export class ServicePolicyRuleWafActionAppFirewallDetectionControlExcludeAttackTypeContextsList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyRuleWafActionAppFirewallDetectionControlExcludeAttackTypeContexts[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyRuleWafActionAppFirewallDetectionControlExcludeAttackTypeContextsOutputReference {
    return new ServicePolicyRuleWafActionAppFirewallDetectionControlExcludeAttackTypeContextsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyRuleWafActionAppFirewallDetectionControlExcludeBotNameContexts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#bot_name ServicePolicyRule#bot_name}
  */
  readonly botName: string;
}

export function servicePolicyRuleWafActionAppFirewallDetectionControlExcludeBotNameContextsToTerraform(struct?: ServicePolicyRuleWafActionAppFirewallDetectionControlExcludeBotNameContexts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bot_name: cdktf.stringToTerraform(struct!.botName),
  }
}


export function servicePolicyRuleWafActionAppFirewallDetectionControlExcludeBotNameContextsToHclTerraform(struct?: ServicePolicyRuleWafActionAppFirewallDetectionControlExcludeBotNameContexts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bot_name: {
      value: cdktf.stringToHclTerraform(struct!.botName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyRuleWafActionAppFirewallDetectionControlExcludeBotNameContextsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyRuleWafActionAppFirewallDetectionControlExcludeBotNameContexts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._botName !== undefined) {
      hasAnyValues = true;
      internalValueResult.botName = this._botName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyRuleWafActionAppFirewallDetectionControlExcludeBotNameContexts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._botName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._botName = value.botName;
    }
  }

  // bot_name - computed: false, optional: false, required: true
  private _botName?: string; 
  public get botName() {
    return this.getStringAttribute('bot_name');
  }
  public set botName(value: string) {
    this._botName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get botNameInput() {
    return this._botName;
  }
}

export class ServicePolicyRuleWafActionAppFirewallDetectionControlExcludeBotNameContextsList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyRuleWafActionAppFirewallDetectionControlExcludeBotNameContexts[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyRuleWafActionAppFirewallDetectionControlExcludeBotNameContextsOutputReference {
    return new ServicePolicyRuleWafActionAppFirewallDetectionControlExcludeBotNameContextsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyRuleWafActionAppFirewallDetectionControlExcludeSignatureContexts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#context ServicePolicyRule#context}
  */
  readonly context: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#context_name ServicePolicyRule#context_name}
  */
  readonly contextName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#signature_id ServicePolicyRule#signature_id}
  */
  readonly signatureId: number;
}

export function servicePolicyRuleWafActionAppFirewallDetectionControlExcludeSignatureContextsToTerraform(struct?: ServicePolicyRuleWafActionAppFirewallDetectionControlExcludeSignatureContexts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    context_name: cdktf.stringToTerraform(struct!.contextName),
    signature_id: cdktf.numberToTerraform(struct!.signatureId),
  }
}


export function servicePolicyRuleWafActionAppFirewallDetectionControlExcludeSignatureContextsToHclTerraform(struct?: ServicePolicyRuleWafActionAppFirewallDetectionControlExcludeSignatureContexts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    context_name: {
      value: cdktf.stringToHclTerraform(struct!.contextName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signature_id: {
      value: cdktf.numberToHclTerraform(struct!.signatureId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyRuleWafActionAppFirewallDetectionControlExcludeSignatureContextsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyRuleWafActionAppFirewallDetectionControlExcludeSignatureContexts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._contextName !== undefined) {
      hasAnyValues = true;
      internalValueResult.contextName = this._contextName;
    }
    if (this._signatureId !== undefined) {
      hasAnyValues = true;
      internalValueResult.signatureId = this._signatureId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyRuleWafActionAppFirewallDetectionControlExcludeSignatureContexts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._context = undefined;
      this._contextName = undefined;
      this._signatureId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._context = value.context;
      this._contextName = value.contextName;
      this._signatureId = value.signatureId;
    }
  }

  // context - computed: false, optional: false, required: true
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // context_name - computed: false, optional: true, required: false
  private _contextName?: string; 
  public get contextName() {
    return this.getStringAttribute('context_name');
  }
  public set contextName(value: string) {
    this._contextName = value;
  }
  public resetContextName() {
    this._contextName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextNameInput() {
    return this._contextName;
  }

  // signature_id - computed: false, optional: false, required: true
  private _signatureId?: number; 
  public get signatureId() {
    return this.getNumberAttribute('signature_id');
  }
  public set signatureId(value: number) {
    this._signatureId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureIdInput() {
    return this._signatureId;
  }
}

export class ServicePolicyRuleWafActionAppFirewallDetectionControlExcludeSignatureContextsList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyRuleWafActionAppFirewallDetectionControlExcludeSignatureContexts[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyRuleWafActionAppFirewallDetectionControlExcludeSignatureContextsOutputReference {
    return new ServicePolicyRuleWafActionAppFirewallDetectionControlExcludeSignatureContextsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyRuleWafActionAppFirewallDetectionControlExcludeViolationContexts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#context ServicePolicyRule#context}
  */
  readonly context: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#context_name ServicePolicyRule#context_name}
  */
  readonly contextName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#exclude_violation ServicePolicyRule#exclude_violation}
  */
  readonly excludeViolation: string;
}

export function servicePolicyRuleWafActionAppFirewallDetectionControlExcludeViolationContextsToTerraform(struct?: ServicePolicyRuleWafActionAppFirewallDetectionControlExcludeViolationContexts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    context_name: cdktf.stringToTerraform(struct!.contextName),
    exclude_violation: cdktf.stringToTerraform(struct!.excludeViolation),
  }
}


export function servicePolicyRuleWafActionAppFirewallDetectionControlExcludeViolationContextsToHclTerraform(struct?: ServicePolicyRuleWafActionAppFirewallDetectionControlExcludeViolationContexts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    context_name: {
      value: cdktf.stringToHclTerraform(struct!.contextName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_violation: {
      value: cdktf.stringToHclTerraform(struct!.excludeViolation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyRuleWafActionAppFirewallDetectionControlExcludeViolationContextsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyRuleWafActionAppFirewallDetectionControlExcludeViolationContexts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._contextName !== undefined) {
      hasAnyValues = true;
      internalValueResult.contextName = this._contextName;
    }
    if (this._excludeViolation !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeViolation = this._excludeViolation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyRuleWafActionAppFirewallDetectionControlExcludeViolationContexts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._context = undefined;
      this._contextName = undefined;
      this._excludeViolation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._context = value.context;
      this._contextName = value.contextName;
      this._excludeViolation = value.excludeViolation;
    }
  }

  // context - computed: false, optional: false, required: true
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // context_name - computed: false, optional: true, required: false
  private _contextName?: string; 
  public get contextName() {
    return this.getStringAttribute('context_name');
  }
  public set contextName(value: string) {
    this._contextName = value;
  }
  public resetContextName() {
    this._contextName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextNameInput() {
    return this._contextName;
  }

  // exclude_violation - computed: false, optional: false, required: true
  private _excludeViolation?: string; 
  public get excludeViolation() {
    return this.getStringAttribute('exclude_violation');
  }
  public set excludeViolation(value: string) {
    this._excludeViolation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeViolationInput() {
    return this._excludeViolation;
  }
}

export class ServicePolicyRuleWafActionAppFirewallDetectionControlExcludeViolationContextsList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyRuleWafActionAppFirewallDetectionControlExcludeViolationContexts[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyRuleWafActionAppFirewallDetectionControlExcludeViolationContextsOutputReference {
    return new ServicePolicyRuleWafActionAppFirewallDetectionControlExcludeViolationContextsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyRuleWafActionAppFirewallDetectionControl {
  /**
  * exclude_attack_type_contexts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#exclude_attack_type_contexts ServicePolicyRule#exclude_attack_type_contexts}
  */
  readonly excludeAttackTypeContexts?: ServicePolicyRuleWafActionAppFirewallDetectionControlExcludeAttackTypeContexts[] | cdktf.IResolvable;
  /**
  * exclude_bot_name_contexts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#exclude_bot_name_contexts ServicePolicyRule#exclude_bot_name_contexts}
  */
  readonly excludeBotNameContexts?: ServicePolicyRuleWafActionAppFirewallDetectionControlExcludeBotNameContexts[] | cdktf.IResolvable;
  /**
  * exclude_signature_contexts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#exclude_signature_contexts ServicePolicyRule#exclude_signature_contexts}
  */
  readonly excludeSignatureContexts?: ServicePolicyRuleWafActionAppFirewallDetectionControlExcludeSignatureContexts[] | cdktf.IResolvable;
  /**
  * exclude_violation_contexts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#exclude_violation_contexts ServicePolicyRule#exclude_violation_contexts}
  */
  readonly excludeViolationContexts?: ServicePolicyRuleWafActionAppFirewallDetectionControlExcludeViolationContexts[] | cdktf.IResolvable;
}

export function servicePolicyRuleWafActionAppFirewallDetectionControlToTerraform(struct?: ServicePolicyRuleWafActionAppFirewallDetectionControlOutputReference | ServicePolicyRuleWafActionAppFirewallDetectionControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_attack_type_contexts: cdktf.listMapper(servicePolicyRuleWafActionAppFirewallDetectionControlExcludeAttackTypeContextsToTerraform, true)(struct!.excludeAttackTypeContexts),
    exclude_bot_name_contexts: cdktf.listMapper(servicePolicyRuleWafActionAppFirewallDetectionControlExcludeBotNameContextsToTerraform, true)(struct!.excludeBotNameContexts),
    exclude_signature_contexts: cdktf.listMapper(servicePolicyRuleWafActionAppFirewallDetectionControlExcludeSignatureContextsToTerraform, true)(struct!.excludeSignatureContexts),
    exclude_violation_contexts: cdktf.listMapper(servicePolicyRuleWafActionAppFirewallDetectionControlExcludeViolationContextsToTerraform, true)(struct!.excludeViolationContexts),
  }
}


export function servicePolicyRuleWafActionAppFirewallDetectionControlToHclTerraform(struct?: ServicePolicyRuleWafActionAppFirewallDetectionControlOutputReference | ServicePolicyRuleWafActionAppFirewallDetectionControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_attack_type_contexts: {
      value: cdktf.listMapperHcl(servicePolicyRuleWafActionAppFirewallDetectionControlExcludeAttackTypeContextsToHclTerraform, true)(struct!.excludeAttackTypeContexts),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyRuleWafActionAppFirewallDetectionControlExcludeAttackTypeContextsList",
    },
    exclude_bot_name_contexts: {
      value: cdktf.listMapperHcl(servicePolicyRuleWafActionAppFirewallDetectionControlExcludeBotNameContextsToHclTerraform, true)(struct!.excludeBotNameContexts),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyRuleWafActionAppFirewallDetectionControlExcludeBotNameContextsList",
    },
    exclude_signature_contexts: {
      value: cdktf.listMapperHcl(servicePolicyRuleWafActionAppFirewallDetectionControlExcludeSignatureContextsToHclTerraform, true)(struct!.excludeSignatureContexts),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyRuleWafActionAppFirewallDetectionControlExcludeSignatureContextsList",
    },
    exclude_violation_contexts: {
      value: cdktf.listMapperHcl(servicePolicyRuleWafActionAppFirewallDetectionControlExcludeViolationContextsToHclTerraform, true)(struct!.excludeViolationContexts),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyRuleWafActionAppFirewallDetectionControlExcludeViolationContextsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyRuleWafActionAppFirewallDetectionControlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServicePolicyRuleWafActionAppFirewallDetectionControl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeAttackTypeContexts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeAttackTypeContexts = this._excludeAttackTypeContexts?.internalValue;
    }
    if (this._excludeBotNameContexts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeBotNameContexts = this._excludeBotNameContexts?.internalValue;
    }
    if (this._excludeSignatureContexts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeSignatureContexts = this._excludeSignatureContexts?.internalValue;
    }
    if (this._excludeViolationContexts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeViolationContexts = this._excludeViolationContexts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyRuleWafActionAppFirewallDetectionControl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludeAttackTypeContexts.internalValue = undefined;
      this._excludeBotNameContexts.internalValue = undefined;
      this._excludeSignatureContexts.internalValue = undefined;
      this._excludeViolationContexts.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludeAttackTypeContexts.internalValue = value.excludeAttackTypeContexts;
      this._excludeBotNameContexts.internalValue = value.excludeBotNameContexts;
      this._excludeSignatureContexts.internalValue = value.excludeSignatureContexts;
      this._excludeViolationContexts.internalValue = value.excludeViolationContexts;
    }
  }

  // exclude_attack_type_contexts - computed: false, optional: true, required: false
  private _excludeAttackTypeContexts = new ServicePolicyRuleWafActionAppFirewallDetectionControlExcludeAttackTypeContextsList(this, "exclude_attack_type_contexts", false);
  public get excludeAttackTypeContexts() {
    return this._excludeAttackTypeContexts;
  }
  public putExcludeAttackTypeContexts(value: ServicePolicyRuleWafActionAppFirewallDetectionControlExcludeAttackTypeContexts[] | cdktf.IResolvable) {
    this._excludeAttackTypeContexts.internalValue = value;
  }
  public resetExcludeAttackTypeContexts() {
    this._excludeAttackTypeContexts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeAttackTypeContextsInput() {
    return this._excludeAttackTypeContexts.internalValue;
  }

  // exclude_bot_name_contexts - computed: false, optional: true, required: false
  private _excludeBotNameContexts = new ServicePolicyRuleWafActionAppFirewallDetectionControlExcludeBotNameContextsList(this, "exclude_bot_name_contexts", false);
  public get excludeBotNameContexts() {
    return this._excludeBotNameContexts;
  }
  public putExcludeBotNameContexts(value: ServicePolicyRuleWafActionAppFirewallDetectionControlExcludeBotNameContexts[] | cdktf.IResolvable) {
    this._excludeBotNameContexts.internalValue = value;
  }
  public resetExcludeBotNameContexts() {
    this._excludeBotNameContexts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeBotNameContextsInput() {
    return this._excludeBotNameContexts.internalValue;
  }

  // exclude_signature_contexts - computed: false, optional: true, required: false
  private _excludeSignatureContexts = new ServicePolicyRuleWafActionAppFirewallDetectionControlExcludeSignatureContextsList(this, "exclude_signature_contexts", false);
  public get excludeSignatureContexts() {
    return this._excludeSignatureContexts;
  }
  public putExcludeSignatureContexts(value: ServicePolicyRuleWafActionAppFirewallDetectionControlExcludeSignatureContexts[] | cdktf.IResolvable) {
    this._excludeSignatureContexts.internalValue = value;
  }
  public resetExcludeSignatureContexts() {
    this._excludeSignatureContexts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeSignatureContextsInput() {
    return this._excludeSignatureContexts.internalValue;
  }

  // exclude_violation_contexts - computed: false, optional: true, required: false
  private _excludeViolationContexts = new ServicePolicyRuleWafActionAppFirewallDetectionControlExcludeViolationContextsList(this, "exclude_violation_contexts", false);
  public get excludeViolationContexts() {
    return this._excludeViolationContexts;
  }
  public putExcludeViolationContexts(value: ServicePolicyRuleWafActionAppFirewallDetectionControlExcludeViolationContexts[] | cdktf.IResolvable) {
    this._excludeViolationContexts.internalValue = value;
  }
  public resetExcludeViolationContexts() {
    this._excludeViolationContexts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeViolationContextsInput() {
    return this._excludeViolationContexts.internalValue;
  }
}
export interface ServicePolicyRuleWafAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#none ServicePolicyRule#none}
  */
  readonly none?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#waf_skip_processing ServicePolicyRule#waf_skip_processing}
  */
  readonly wafSkipProcessing?: boolean | cdktf.IResolvable;
  /**
  * app_firewall_detection_control block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#app_firewall_detection_control ServicePolicyRule#app_firewall_detection_control}
  */
  readonly appFirewallDetectionControl?: ServicePolicyRuleWafActionAppFirewallDetectionControl;
}

export function servicePolicyRuleWafActionToTerraform(struct?: ServicePolicyRuleWafActionOutputReference | ServicePolicyRuleWafAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    none: cdktf.booleanToTerraform(struct!.none),
    waf_skip_processing: cdktf.booleanToTerraform(struct!.wafSkipProcessing),
    app_firewall_detection_control: servicePolicyRuleWafActionAppFirewallDetectionControlToTerraform(struct!.appFirewallDetectionControl),
  }
}


export function servicePolicyRuleWafActionToHclTerraform(struct?: ServicePolicyRuleWafActionOutputReference | ServicePolicyRuleWafAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    none: {
      value: cdktf.booleanToHclTerraform(struct!.none),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    waf_skip_processing: {
      value: cdktf.booleanToHclTerraform(struct!.wafSkipProcessing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    app_firewall_detection_control: {
      value: servicePolicyRuleWafActionAppFirewallDetectionControlToHclTerraform(struct!.appFirewallDetectionControl),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyRuleWafActionAppFirewallDetectionControlList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyRuleWafActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServicePolicyRuleWafAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._none !== undefined) {
      hasAnyValues = true;
      internalValueResult.none = this._none;
    }
    if (this._wafSkipProcessing !== undefined) {
      hasAnyValues = true;
      internalValueResult.wafSkipProcessing = this._wafSkipProcessing;
    }
    if (this._appFirewallDetectionControl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appFirewallDetectionControl = this._appFirewallDetectionControl?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyRuleWafAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._none = undefined;
      this._wafSkipProcessing = undefined;
      this._appFirewallDetectionControl.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._none = value.none;
      this._wafSkipProcessing = value.wafSkipProcessing;
      this._appFirewallDetectionControl.internalValue = value.appFirewallDetectionControl;
    }
  }

  // none - computed: false, optional: true, required: false
  private _none?: boolean | cdktf.IResolvable; 
  public get none() {
    return this.getBooleanAttribute('none');
  }
  public set none(value: boolean | cdktf.IResolvable) {
    this._none = value;
  }
  public resetNone() {
    this._none = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneInput() {
    return this._none;
  }

  // waf_skip_processing - computed: false, optional: true, required: false
  private _wafSkipProcessing?: boolean | cdktf.IResolvable; 
  public get wafSkipProcessing() {
    return this.getBooleanAttribute('waf_skip_processing');
  }
  public set wafSkipProcessing(value: boolean | cdktf.IResolvable) {
    this._wafSkipProcessing = value;
  }
  public resetWafSkipProcessing() {
    this._wafSkipProcessing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wafSkipProcessingInput() {
    return this._wafSkipProcessing;
  }

  // app_firewall_detection_control - computed: false, optional: true, required: false
  private _appFirewallDetectionControl = new ServicePolicyRuleWafActionAppFirewallDetectionControlOutputReference(this, "app_firewall_detection_control");
  public get appFirewallDetectionControl() {
    return this._appFirewallDetectionControl;
  }
  public putAppFirewallDetectionControl(value: ServicePolicyRuleWafActionAppFirewallDetectionControl) {
    this._appFirewallDetectionControl.internalValue = value;
  }
  public resetAppFirewallDetectionControl() {
    this._appFirewallDetectionControl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appFirewallDetectionControlInput() {
    return this._appFirewallDetectionControl.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule volterra_service_policy_rule}
*/
export class ServicePolicyRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_service_policy_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServicePolicyRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServicePolicyRule to import
  * @param importFromId The id of the existing ServicePolicyRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServicePolicyRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_service_policy_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy_rule volterra_service_policy_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServicePolicyRuleConfig
  */
  public constructor(scope: Construct, id: string, config: ServicePolicyRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_service_policy_rule',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._annotations = config.annotations;
    this._anyAsn = config.anyAsn;
    this._anyClient = config.anyClient;
    this._anyIp = config.anyIp;
    this._clientName = config.clientName;
    this._description = config.description;
    this._disable = config.disable;
    this._expirationTimestamp = config.expirationTimestamp;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._namespace = config.namespace;
    this._apiGroupMatcher.internalValue = config.apiGroupMatcher;
    this._argMatchers.internalValue = config.argMatchers;
    this._asnList.internalValue = config.asnList;
    this._asnMatcher.internalValue = config.asnMatcher;
    this._bodyMatcher.internalValue = config.bodyMatcher;
    this._botAction.internalValue = config.botAction;
    this._clientNameMatcher.internalValue = config.clientNameMatcher;
    this._clientSelector.internalValue = config.clientSelector;
    this._cookieMatchers.internalValue = config.cookieMatchers;
    this._domainMatcher.internalValue = config.domainMatcher;
    this._headers.internalValue = config.headers;
    this._httpMethod.internalValue = config.httpMethod;
    this._ipMatcher.internalValue = config.ipMatcher;
    this._ipPrefixList.internalValue = config.ipPrefixList;
    this._ipThreatCategoryList.internalValue = config.ipThreatCategoryList;
    this._ja4TlsFingerprint.internalValue = config.ja4TlsFingerprint;
    this._jwtClaims.internalValue = config.jwtClaims;
    this._labelMatcher.internalValue = config.labelMatcher;
    this._mumAction.internalValue = config.mumAction;
    this._path.internalValue = config.path;
    this._portMatcher.internalValue = config.portMatcher;
    this._queryParams.internalValue = config.queryParams;
    this._requestConstraints.internalValue = config.requestConstraints;
    this._segmentPolicy.internalValue = config.segmentPolicy;
    this._tlsFingerprintMatcher.internalValue = config.tlsFingerprintMatcher;
    this._wafAction.internalValue = config.wafAction;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // any_asn - computed: false, optional: true, required: false
  private _anyAsn?: boolean | cdktf.IResolvable; 
  public get anyAsn() {
    return this.getBooleanAttribute('any_asn');
  }
  public set anyAsn(value: boolean | cdktf.IResolvable) {
    this._anyAsn = value;
  }
  public resetAnyAsn() {
    this._anyAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyAsnInput() {
    return this._anyAsn;
  }

  // any_client - computed: false, optional: true, required: false
  private _anyClient?: boolean | cdktf.IResolvable; 
  public get anyClient() {
    return this.getBooleanAttribute('any_client');
  }
  public set anyClient(value: boolean | cdktf.IResolvable) {
    this._anyClient = value;
  }
  public resetAnyClient() {
    this._anyClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyClientInput() {
    return this._anyClient;
  }

  // any_ip - computed: false, optional: true, required: false
  private _anyIp?: boolean | cdktf.IResolvable; 
  public get anyIp() {
    return this.getBooleanAttribute('any_ip');
  }
  public set anyIp(value: boolean | cdktf.IResolvable) {
    this._anyIp = value;
  }
  public resetAnyIp() {
    this._anyIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyIpInput() {
    return this._anyIp;
  }

  // client_name - computed: false, optional: true, required: false
  private _clientName?: string; 
  public get clientName() {
    return this.getStringAttribute('client_name');
  }
  public set clientName(value: string) {
    this._clientName = value;
  }
  public resetClientName() {
    this._clientName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientNameInput() {
    return this._clientName;
  }

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

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // expiration_timestamp - computed: false, optional: true, required: false
  private _expirationTimestamp?: string; 
  public get expirationTimestamp() {
    return this.getStringAttribute('expiration_timestamp');
  }
  public set expirationTimestamp(value: string) {
    this._expirationTimestamp = value;
  }
  public resetExpirationTimestamp() {
    this._expirationTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationTimestampInput() {
    return this._expirationTimestamp;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // api_group_matcher - computed: false, optional: true, required: false
  private _apiGroupMatcher = new ServicePolicyRuleApiGroupMatcherOutputReference(this, "api_group_matcher");
  public get apiGroupMatcher() {
    return this._apiGroupMatcher;
  }
  public putApiGroupMatcher(value: ServicePolicyRuleApiGroupMatcher) {
    this._apiGroupMatcher.internalValue = value;
  }
  public resetApiGroupMatcher() {
    this._apiGroupMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupMatcherInput() {
    return this._apiGroupMatcher.internalValue;
  }

  // arg_matchers - computed: false, optional: true, required: false
  private _argMatchers = new ServicePolicyRuleArgMatchersList(this, "arg_matchers", false);
  public get argMatchers() {
    return this._argMatchers;
  }
  public putArgMatchers(value: ServicePolicyRuleArgMatchers[] | cdktf.IResolvable) {
    this._argMatchers.internalValue = value;
  }
  public resetArgMatchers() {
    this._argMatchers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argMatchersInput() {
    return this._argMatchers.internalValue;
  }

  // asn_list - computed: false, optional: true, required: false
  private _asnList = new ServicePolicyRuleAsnListStructOutputReference(this, "asn_list");
  public get asnList() {
    return this._asnList;
  }
  public putAsnList(value: ServicePolicyRuleAsnListStruct) {
    this._asnList.internalValue = value;
  }
  public resetAsnList() {
    this._asnList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnListInput() {
    return this._asnList.internalValue;
  }

  // asn_matcher - computed: false, optional: true, required: false
  private _asnMatcher = new ServicePolicyRuleAsnMatcherOutputReference(this, "asn_matcher");
  public get asnMatcher() {
    return this._asnMatcher;
  }
  public putAsnMatcher(value: ServicePolicyRuleAsnMatcher) {
    this._asnMatcher.internalValue = value;
  }
  public resetAsnMatcher() {
    this._asnMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnMatcherInput() {
    return this._asnMatcher.internalValue;
  }

  // body_matcher - computed: false, optional: true, required: false
  private _bodyMatcher = new ServicePolicyRuleBodyMatcherOutputReference(this, "body_matcher");
  public get bodyMatcher() {
    return this._bodyMatcher;
  }
  public putBodyMatcher(value: ServicePolicyRuleBodyMatcher) {
    this._bodyMatcher.internalValue = value;
  }
  public resetBodyMatcher() {
    this._bodyMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyMatcherInput() {
    return this._bodyMatcher.internalValue;
  }

  // bot_action - computed: false, optional: true, required: false
  private _botAction = new ServicePolicyRuleBotActionOutputReference(this, "bot_action");
  public get botAction() {
    return this._botAction;
  }
  public putBotAction(value: ServicePolicyRuleBotAction) {
    this._botAction.internalValue = value;
  }
  public resetBotAction() {
    this._botAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botActionInput() {
    return this._botAction.internalValue;
  }

  // client_name_matcher - computed: false, optional: true, required: false
  private _clientNameMatcher = new ServicePolicyRuleClientNameMatcherOutputReference(this, "client_name_matcher");
  public get clientNameMatcher() {
    return this._clientNameMatcher;
  }
  public putClientNameMatcher(value: ServicePolicyRuleClientNameMatcher) {
    this._clientNameMatcher.internalValue = value;
  }
  public resetClientNameMatcher() {
    this._clientNameMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientNameMatcherInput() {
    return this._clientNameMatcher.internalValue;
  }

  // client_selector - computed: false, optional: true, required: false
  private _clientSelector = new ServicePolicyRuleClientSelectorOutputReference(this, "client_selector");
  public get clientSelector() {
    return this._clientSelector;
  }
  public putClientSelector(value: ServicePolicyRuleClientSelector) {
    this._clientSelector.internalValue = value;
  }
  public resetClientSelector() {
    this._clientSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSelectorInput() {
    return this._clientSelector.internalValue;
  }

  // cookie_matchers - computed: false, optional: true, required: false
  private _cookieMatchers = new ServicePolicyRuleCookieMatchersList(this, "cookie_matchers", false);
  public get cookieMatchers() {
    return this._cookieMatchers;
  }
  public putCookieMatchers(value: ServicePolicyRuleCookieMatchers[] | cdktf.IResolvable) {
    this._cookieMatchers.internalValue = value;
  }
  public resetCookieMatchers() {
    this._cookieMatchers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieMatchersInput() {
    return this._cookieMatchers.internalValue;
  }

  // domain_matcher - computed: false, optional: true, required: false
  private _domainMatcher = new ServicePolicyRuleDomainMatcherOutputReference(this, "domain_matcher");
  public get domainMatcher() {
    return this._domainMatcher;
  }
  public putDomainMatcher(value: ServicePolicyRuleDomainMatcher) {
    this._domainMatcher.internalValue = value;
  }
  public resetDomainMatcher() {
    this._domainMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainMatcherInput() {
    return this._domainMatcher.internalValue;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new ServicePolicyRuleHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: ServicePolicyRuleHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // http_method - computed: false, optional: true, required: false
  private _httpMethod = new ServicePolicyRuleHttpMethodOutputReference(this, "http_method");
  public get httpMethod() {
    return this._httpMethod;
  }
  public putHttpMethod(value: ServicePolicyRuleHttpMethod) {
    this._httpMethod.internalValue = value;
  }
  public resetHttpMethod() {
    this._httpMethod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMethodInput() {
    return this._httpMethod.internalValue;
  }

  // ip_matcher - computed: false, optional: true, required: false
  private _ipMatcher = new ServicePolicyRuleIpMatcherOutputReference(this, "ip_matcher");
  public get ipMatcher() {
    return this._ipMatcher;
  }
  public putIpMatcher(value: ServicePolicyRuleIpMatcher) {
    this._ipMatcher.internalValue = value;
  }
  public resetIpMatcher() {
    this._ipMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipMatcherInput() {
    return this._ipMatcher.internalValue;
  }

  // ip_prefix_list - computed: false, optional: true, required: false
  private _ipPrefixList = new ServicePolicyRuleIpPrefixListStructOutputReference(this, "ip_prefix_list");
  public get ipPrefixList() {
    return this._ipPrefixList;
  }
  public putIpPrefixList(value: ServicePolicyRuleIpPrefixListStruct) {
    this._ipPrefixList.internalValue = value;
  }
  public resetIpPrefixList() {
    this._ipPrefixList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPrefixListInput() {
    return this._ipPrefixList.internalValue;
  }

  // ip_threat_category_list - computed: false, optional: true, required: false
  private _ipThreatCategoryList = new ServicePolicyRuleIpThreatCategoryListStructOutputReference(this, "ip_threat_category_list");
  public get ipThreatCategoryList() {
    return this._ipThreatCategoryList;
  }
  public putIpThreatCategoryList(value: ServicePolicyRuleIpThreatCategoryListStruct) {
    this._ipThreatCategoryList.internalValue = value;
  }
  public resetIpThreatCategoryList() {
    this._ipThreatCategoryList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipThreatCategoryListInput() {
    return this._ipThreatCategoryList.internalValue;
  }

  // ja4_tls_fingerprint - computed: false, optional: true, required: false
  private _ja4TlsFingerprint = new ServicePolicyRuleJa4TlsFingerprintOutputReference(this, "ja4_tls_fingerprint");
  public get ja4TlsFingerprint() {
    return this._ja4TlsFingerprint;
  }
  public putJa4TlsFingerprint(value: ServicePolicyRuleJa4TlsFingerprint) {
    this._ja4TlsFingerprint.internalValue = value;
  }
  public resetJa4TlsFingerprint() {
    this._ja4TlsFingerprint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ja4TlsFingerprintInput() {
    return this._ja4TlsFingerprint.internalValue;
  }

  // jwt_claims - computed: false, optional: true, required: false
  private _jwtClaims = new ServicePolicyRuleJwtClaimsList(this, "jwt_claims", false);
  public get jwtClaims() {
    return this._jwtClaims;
  }
  public putJwtClaims(value: ServicePolicyRuleJwtClaims[] | cdktf.IResolvable) {
    this._jwtClaims.internalValue = value;
  }
  public resetJwtClaims() {
    this._jwtClaims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtClaimsInput() {
    return this._jwtClaims.internalValue;
  }

  // label_matcher - computed: false, optional: true, required: false
  private _labelMatcher = new ServicePolicyRuleLabelMatcherOutputReference(this, "label_matcher");
  public get labelMatcher() {
    return this._labelMatcher;
  }
  public putLabelMatcher(value: ServicePolicyRuleLabelMatcher) {
    this._labelMatcher.internalValue = value;
  }
  public resetLabelMatcher() {
    this._labelMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelMatcherInput() {
    return this._labelMatcher.internalValue;
  }

  // mum_action - computed: false, optional: true, required: false
  private _mumAction = new ServicePolicyRuleMumActionOutputReference(this, "mum_action");
  public get mumAction() {
    return this._mumAction;
  }
  public putMumAction(value: ServicePolicyRuleMumAction) {
    this._mumAction.internalValue = value;
  }
  public resetMumAction() {
    this._mumAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mumActionInput() {
    return this._mumAction.internalValue;
  }

  // path - computed: false, optional: true, required: false
  private _path = new ServicePolicyRulePathOutputReference(this, "path");
  public get path() {
    return this._path;
  }
  public putPath(value: ServicePolicyRulePath) {
    this._path.internalValue = value;
  }
  public resetPath() {
    this._path.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
  }

  // port_matcher - computed: false, optional: true, required: false
  private _portMatcher = new ServicePolicyRulePortMatcherOutputReference(this, "port_matcher");
  public get portMatcher() {
    return this._portMatcher;
  }
  public putPortMatcher(value: ServicePolicyRulePortMatcher) {
    this._portMatcher.internalValue = value;
  }
  public resetPortMatcher() {
    this._portMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portMatcherInput() {
    return this._portMatcher.internalValue;
  }

  // query_params - computed: false, optional: true, required: false
  private _queryParams = new ServicePolicyRuleQueryParamsList(this, "query_params", false);
  public get queryParams() {
    return this._queryParams;
  }
  public putQueryParams(value: ServicePolicyRuleQueryParams[] | cdktf.IResolvable) {
    this._queryParams.internalValue = value;
  }
  public resetQueryParams() {
    this._queryParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParamsInput() {
    return this._queryParams.internalValue;
  }

  // request_constraints - computed: false, optional: true, required: false
  private _requestConstraints = new ServicePolicyRuleRequestConstraintsOutputReference(this, "request_constraints");
  public get requestConstraints() {
    return this._requestConstraints;
  }
  public putRequestConstraints(value: ServicePolicyRuleRequestConstraints) {
    this._requestConstraints.internalValue = value;
  }
  public resetRequestConstraints() {
    this._requestConstraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestConstraintsInput() {
    return this._requestConstraints.internalValue;
  }

  // segment_policy - computed: false, optional: true, required: false
  private _segmentPolicy = new ServicePolicyRuleSegmentPolicyOutputReference(this, "segment_policy");
  public get segmentPolicy() {
    return this._segmentPolicy;
  }
  public putSegmentPolicy(value: ServicePolicyRuleSegmentPolicy) {
    this._segmentPolicy.internalValue = value;
  }
  public resetSegmentPolicy() {
    this._segmentPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentPolicyInput() {
    return this._segmentPolicy.internalValue;
  }

  // tls_fingerprint_matcher - computed: false, optional: true, required: false
  private _tlsFingerprintMatcher = new ServicePolicyRuleTlsFingerprintMatcherOutputReference(this, "tls_fingerprint_matcher");
  public get tlsFingerprintMatcher() {
    return this._tlsFingerprintMatcher;
  }
  public putTlsFingerprintMatcher(value: ServicePolicyRuleTlsFingerprintMatcher) {
    this._tlsFingerprintMatcher.internalValue = value;
  }
  public resetTlsFingerprintMatcher() {
    this._tlsFingerprintMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsFingerprintMatcherInput() {
    return this._tlsFingerprintMatcher.internalValue;
  }

  // waf_action - computed: false, optional: false, required: true
  private _wafAction = new ServicePolicyRuleWafActionOutputReference(this, "waf_action");
  public get wafAction() {
    return this._wafAction;
  }
  public putWafAction(value: ServicePolicyRuleWafAction) {
    this._wafAction.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wafActionInput() {
    return this._wafAction.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      any_asn: cdktf.booleanToTerraform(this._anyAsn),
      any_client: cdktf.booleanToTerraform(this._anyClient),
      any_ip: cdktf.booleanToTerraform(this._anyIp),
      client_name: cdktf.stringToTerraform(this._clientName),
      description: cdktf.stringToTerraform(this._description),
      disable: cdktf.booleanToTerraform(this._disable),
      expiration_timestamp: cdktf.stringToTerraform(this._expirationTimestamp),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      api_group_matcher: servicePolicyRuleApiGroupMatcherToTerraform(this._apiGroupMatcher.internalValue),
      arg_matchers: cdktf.listMapper(servicePolicyRuleArgMatchersToTerraform, true)(this._argMatchers.internalValue),
      asn_list: servicePolicyRuleAsnListStructToTerraform(this._asnList.internalValue),
      asn_matcher: servicePolicyRuleAsnMatcherToTerraform(this._asnMatcher.internalValue),
      body_matcher: servicePolicyRuleBodyMatcherToTerraform(this._bodyMatcher.internalValue),
      bot_action: servicePolicyRuleBotActionToTerraform(this._botAction.internalValue),
      client_name_matcher: servicePolicyRuleClientNameMatcherToTerraform(this._clientNameMatcher.internalValue),
      client_selector: servicePolicyRuleClientSelectorToTerraform(this._clientSelector.internalValue),
      cookie_matchers: cdktf.listMapper(servicePolicyRuleCookieMatchersToTerraform, true)(this._cookieMatchers.internalValue),
      domain_matcher: servicePolicyRuleDomainMatcherToTerraform(this._domainMatcher.internalValue),
      headers: cdktf.listMapper(servicePolicyRuleHeadersToTerraform, true)(this._headers.internalValue),
      http_method: servicePolicyRuleHttpMethodToTerraform(this._httpMethod.internalValue),
      ip_matcher: servicePolicyRuleIpMatcherToTerraform(this._ipMatcher.internalValue),
      ip_prefix_list: servicePolicyRuleIpPrefixListStructToTerraform(this._ipPrefixList.internalValue),
      ip_threat_category_list: servicePolicyRuleIpThreatCategoryListStructToTerraform(this._ipThreatCategoryList.internalValue),
      ja4_tls_fingerprint: servicePolicyRuleJa4TlsFingerprintToTerraform(this._ja4TlsFingerprint.internalValue),
      jwt_claims: cdktf.listMapper(servicePolicyRuleJwtClaimsToTerraform, true)(this._jwtClaims.internalValue),
      label_matcher: servicePolicyRuleLabelMatcherToTerraform(this._labelMatcher.internalValue),
      mum_action: servicePolicyRuleMumActionToTerraform(this._mumAction.internalValue),
      path: servicePolicyRulePathToTerraform(this._path.internalValue),
      port_matcher: servicePolicyRulePortMatcherToTerraform(this._portMatcher.internalValue),
      query_params: cdktf.listMapper(servicePolicyRuleQueryParamsToTerraform, true)(this._queryParams.internalValue),
      request_constraints: servicePolicyRuleRequestConstraintsToTerraform(this._requestConstraints.internalValue),
      segment_policy: servicePolicyRuleSegmentPolicyToTerraform(this._segmentPolicy.internalValue),
      tls_fingerprint_matcher: servicePolicyRuleTlsFingerprintMatcherToTerraform(this._tlsFingerprintMatcher.internalValue),
      waf_action: servicePolicyRuleWafActionToTerraform(this._wafAction.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      any_asn: {
        value: cdktf.booleanToHclTerraform(this._anyAsn),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      any_client: {
        value: cdktf.booleanToHclTerraform(this._anyClient),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      any_ip: {
        value: cdktf.booleanToHclTerraform(this._anyIp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      client_name: {
        value: cdktf.stringToHclTerraform(this._clientName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable: {
        value: cdktf.booleanToHclTerraform(this._disable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      expiration_timestamp: {
        value: cdktf.stringToHclTerraform(this._expirationTimestamp),
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
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_group_matcher: {
        value: servicePolicyRuleApiGroupMatcherToHclTerraform(this._apiGroupMatcher.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServicePolicyRuleApiGroupMatcherList",
      },
      arg_matchers: {
        value: cdktf.listMapperHcl(servicePolicyRuleArgMatchersToHclTerraform, true)(this._argMatchers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServicePolicyRuleArgMatchersList",
      },
      asn_list: {
        value: servicePolicyRuleAsnListStructToHclTerraform(this._asnList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServicePolicyRuleAsnListStructList",
      },
      asn_matcher: {
        value: servicePolicyRuleAsnMatcherToHclTerraform(this._asnMatcher.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServicePolicyRuleAsnMatcherList",
      },
      body_matcher: {
        value: servicePolicyRuleBodyMatcherToHclTerraform(this._bodyMatcher.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServicePolicyRuleBodyMatcherList",
      },
      bot_action: {
        value: servicePolicyRuleBotActionToHclTerraform(this._botAction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServicePolicyRuleBotActionList",
      },
      client_name_matcher: {
        value: servicePolicyRuleClientNameMatcherToHclTerraform(this._clientNameMatcher.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServicePolicyRuleClientNameMatcherList",
      },
      client_selector: {
        value: servicePolicyRuleClientSelectorToHclTerraform(this._clientSelector.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServicePolicyRuleClientSelectorList",
      },
      cookie_matchers: {
        value: cdktf.listMapperHcl(servicePolicyRuleCookieMatchersToHclTerraform, true)(this._cookieMatchers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServicePolicyRuleCookieMatchersList",
      },
      domain_matcher: {
        value: servicePolicyRuleDomainMatcherToHclTerraform(this._domainMatcher.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServicePolicyRuleDomainMatcherList",
      },
      headers: {
        value: cdktf.listMapperHcl(servicePolicyRuleHeadersToHclTerraform, true)(this._headers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServicePolicyRuleHeadersList",
      },
      http_method: {
        value: servicePolicyRuleHttpMethodToHclTerraform(this._httpMethod.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServicePolicyRuleHttpMethodList",
      },
      ip_matcher: {
        value: servicePolicyRuleIpMatcherToHclTerraform(this._ipMatcher.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServicePolicyRuleIpMatcherList",
      },
      ip_prefix_list: {
        value: servicePolicyRuleIpPrefixListStructToHclTerraform(this._ipPrefixList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServicePolicyRuleIpPrefixListStructList",
      },
      ip_threat_category_list: {
        value: servicePolicyRuleIpThreatCategoryListStructToHclTerraform(this._ipThreatCategoryList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServicePolicyRuleIpThreatCategoryListStructList",
      },
      ja4_tls_fingerprint: {
        value: servicePolicyRuleJa4TlsFingerprintToHclTerraform(this._ja4TlsFingerprint.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServicePolicyRuleJa4TlsFingerprintList",
      },
      jwt_claims: {
        value: cdktf.listMapperHcl(servicePolicyRuleJwtClaimsToHclTerraform, true)(this._jwtClaims.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServicePolicyRuleJwtClaimsList",
      },
      label_matcher: {
        value: servicePolicyRuleLabelMatcherToHclTerraform(this._labelMatcher.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServicePolicyRuleLabelMatcherList",
      },
      mum_action: {
        value: servicePolicyRuleMumActionToHclTerraform(this._mumAction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServicePolicyRuleMumActionList",
      },
      path: {
        value: servicePolicyRulePathToHclTerraform(this._path.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServicePolicyRulePathList",
      },
      port_matcher: {
        value: servicePolicyRulePortMatcherToHclTerraform(this._portMatcher.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServicePolicyRulePortMatcherList",
      },
      query_params: {
        value: cdktf.listMapperHcl(servicePolicyRuleQueryParamsToHclTerraform, true)(this._queryParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServicePolicyRuleQueryParamsList",
      },
      request_constraints: {
        value: servicePolicyRuleRequestConstraintsToHclTerraform(this._requestConstraints.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServicePolicyRuleRequestConstraintsList",
      },
      segment_policy: {
        value: servicePolicyRuleSegmentPolicyToHclTerraform(this._segmentPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServicePolicyRuleSegmentPolicyList",
      },
      tls_fingerprint_matcher: {
        value: servicePolicyRuleTlsFingerprintMatcherToHclTerraform(this._tlsFingerprintMatcher.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServicePolicyRuleTlsFingerprintMatcherList",
      },
      waf_action: {
        value: servicePolicyRuleWafActionToHclTerraform(this._wafAction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServicePolicyRuleWafActionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
