// https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ForwardProxyPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#allow_all ForwardProxyPolicy#allow_all}
  */
  readonly allowAll?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#annotations ForwardProxyPolicy#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#any_proxy ForwardProxyPolicy#any_proxy}
  */
  readonly anyProxy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#description ForwardProxyPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#disable ForwardProxyPolicy#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#drp_http_connect ForwardProxyPolicy#drp_http_connect}
  */
  readonly drpHttpConnect?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#id ForwardProxyPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#labels ForwardProxyPolicy#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#name ForwardProxyPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#namespace ForwardProxyPolicy#namespace}
  */
  readonly namespace: string;
  /**
  * allow_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#allow_list ForwardProxyPolicy#allow_list}
  */
  readonly allowList?: ForwardProxyPolicyAllowListStruct;
  /**
  * deny_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#deny_list ForwardProxyPolicy#deny_list}
  */
  readonly denyList?: ForwardProxyPolicyDenyListStruct;
  /**
  * network_connector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#network_connector ForwardProxyPolicy#network_connector}
  */
  readonly networkConnector?: ForwardProxyPolicyNetworkConnector;
  /**
  * proxy_label_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#proxy_label_selector ForwardProxyPolicy#proxy_label_selector}
  */
  readonly proxyLabelSelector?: ForwardProxyPolicyProxyLabelSelector;
  /**
  * rule_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#rule_list ForwardProxyPolicy#rule_list}
  */
  readonly ruleList?: ForwardProxyPolicyRuleListStruct;
  /**
  * segment_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#segment_policy ForwardProxyPolicy#segment_policy}
  */
  readonly segmentPolicy?: ForwardProxyPolicySegmentPolicy;
}
export interface ForwardProxyPolicyAllowListDestListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#ipv6_prefixes ForwardProxyPolicy#ipv6_prefixes}
  */
  readonly ipv6Prefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#port_ranges ForwardProxyPolicy#port_ranges}
  */
  readonly portRanges: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#prefixes ForwardProxyPolicy#prefixes}
  */
  readonly prefixes?: string[];
}

export function forwardProxyPolicyAllowListDestListStructToTerraform(struct?: ForwardProxyPolicyAllowListDestListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv6Prefixes),
    port_ranges: cdktf.stringToTerraform(struct!.portRanges),
    prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefixes),
  }
}


export function forwardProxyPolicyAllowListDestListStructToHclTerraform(struct?: ForwardProxyPolicyAllowListDestListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipv6Prefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    port_ranges: {
      value: cdktf.stringToHclTerraform(struct!.portRanges),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ForwardProxyPolicyAllowListDestListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ForwardProxyPolicyAllowListDestListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6Prefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Prefixes = this._ipv6Prefixes;
    }
    if (this._portRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRanges = this._portRanges;
    }
    if (this._prefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixes = this._prefixes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardProxyPolicyAllowListDestListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv6Prefixes = undefined;
      this._portRanges = undefined;
      this._prefixes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv6Prefixes = value.ipv6Prefixes;
      this._portRanges = value.portRanges;
      this._prefixes = value.prefixes;
    }
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

  // port_ranges - computed: false, optional: false, required: true
  private _portRanges?: string; 
  public get portRanges() {
    return this.getStringAttribute('port_ranges');
  }
  public set portRanges(value: string) {
    this._portRanges = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangesInput() {
    return this._portRanges;
  }

  // prefixes - computed: false, optional: true, required: false
  private _prefixes?: string[]; 
  public get prefixes() {
    return this.getListAttribute('prefixes');
  }
  public set prefixes(value: string[]) {
    this._prefixes = value;
  }
  public resetPrefixes() {
    this._prefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixesInput() {
    return this._prefixes;
  }
}

export class ForwardProxyPolicyAllowListDestListStructList extends cdktf.ComplexList {
  public internalValue? : ForwardProxyPolicyAllowListDestListStruct[] | cdktf.IResolvable

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
  public get(index: number): ForwardProxyPolicyAllowListDestListStructOutputReference {
    return new ForwardProxyPolicyAllowListDestListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ForwardProxyPolicyAllowListHttpListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#any_path ForwardProxyPolicy#any_path}
  */
  readonly anyPath?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#exact_value ForwardProxyPolicy#exact_value}
  */
  readonly exactValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#path_exact_value ForwardProxyPolicy#path_exact_value}
  */
  readonly pathExactValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#path_prefix_value ForwardProxyPolicy#path_prefix_value}
  */
  readonly pathPrefixValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#path_regex_value ForwardProxyPolicy#path_regex_value}
  */
  readonly pathRegexValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#regex_value ForwardProxyPolicy#regex_value}
  */
  readonly regexValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#suffix_value ForwardProxyPolicy#suffix_value}
  */
  readonly suffixValue?: string;
}

export function forwardProxyPolicyAllowListHttpListStructToTerraform(struct?: ForwardProxyPolicyAllowListHttpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_path: cdktf.booleanToTerraform(struct!.anyPath),
    exact_value: cdktf.stringToTerraform(struct!.exactValue),
    path_exact_value: cdktf.stringToTerraform(struct!.pathExactValue),
    path_prefix_value: cdktf.stringToTerraform(struct!.pathPrefixValue),
    path_regex_value: cdktf.stringToTerraform(struct!.pathRegexValue),
    regex_value: cdktf.stringToTerraform(struct!.regexValue),
    suffix_value: cdktf.stringToTerraform(struct!.suffixValue),
  }
}


export function forwardProxyPolicyAllowListHttpListStructToHclTerraform(struct?: ForwardProxyPolicyAllowListHttpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any_path: {
      value: cdktf.booleanToHclTerraform(struct!.anyPath),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exact_value: {
      value: cdktf.stringToHclTerraform(struct!.exactValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path_exact_value: {
      value: cdktf.stringToHclTerraform(struct!.pathExactValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path_prefix_value: {
      value: cdktf.stringToHclTerraform(struct!.pathPrefixValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path_regex_value: {
      value: cdktf.stringToHclTerraform(struct!.pathRegexValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex_value: {
      value: cdktf.stringToHclTerraform(struct!.regexValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix_value: {
      value: cdktf.stringToHclTerraform(struct!.suffixValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ForwardProxyPolicyAllowListHttpListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ForwardProxyPolicyAllowListHttpListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyPath = this._anyPath;
    }
    if (this._exactValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValue = this._exactValue;
    }
    if (this._pathExactValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathExactValue = this._pathExactValue;
    }
    if (this._pathPrefixValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathPrefixValue = this._pathPrefixValue;
    }
    if (this._pathRegexValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathRegexValue = this._pathRegexValue;
    }
    if (this._regexValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValue = this._regexValue;
    }
    if (this._suffixValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffixValue = this._suffixValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardProxyPolicyAllowListHttpListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anyPath = undefined;
      this._exactValue = undefined;
      this._pathExactValue = undefined;
      this._pathPrefixValue = undefined;
      this._pathRegexValue = undefined;
      this._regexValue = undefined;
      this._suffixValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anyPath = value.anyPath;
      this._exactValue = value.exactValue;
      this._pathExactValue = value.pathExactValue;
      this._pathPrefixValue = value.pathPrefixValue;
      this._pathRegexValue = value.pathRegexValue;
      this._regexValue = value.regexValue;
      this._suffixValue = value.suffixValue;
    }
  }

  // any_path - computed: false, optional: true, required: false
  private _anyPath?: boolean | cdktf.IResolvable; 
  public get anyPath() {
    return this.getBooleanAttribute('any_path');
  }
  public set anyPath(value: boolean | cdktf.IResolvable) {
    this._anyPath = value;
  }
  public resetAnyPath() {
    this._anyPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyPathInput() {
    return this._anyPath;
  }

  // exact_value - computed: false, optional: true, required: false
  private _exactValue?: string; 
  public get exactValue() {
    return this.getStringAttribute('exact_value');
  }
  public set exactValue(value: string) {
    this._exactValue = value;
  }
  public resetExactValue() {
    this._exactValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValueInput() {
    return this._exactValue;
  }

  // path_exact_value - computed: false, optional: true, required: false
  private _pathExactValue?: string; 
  public get pathExactValue() {
    return this.getStringAttribute('path_exact_value');
  }
  public set pathExactValue(value: string) {
    this._pathExactValue = value;
  }
  public resetPathExactValue() {
    this._pathExactValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathExactValueInput() {
    return this._pathExactValue;
  }

  // path_prefix_value - computed: false, optional: true, required: false
  private _pathPrefixValue?: string; 
  public get pathPrefixValue() {
    return this.getStringAttribute('path_prefix_value');
  }
  public set pathPrefixValue(value: string) {
    this._pathPrefixValue = value;
  }
  public resetPathPrefixValue() {
    this._pathPrefixValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathPrefixValueInput() {
    return this._pathPrefixValue;
  }

  // path_regex_value - computed: false, optional: true, required: false
  private _pathRegexValue?: string; 
  public get pathRegexValue() {
    return this.getStringAttribute('path_regex_value');
  }
  public set pathRegexValue(value: string) {
    this._pathRegexValue = value;
  }
  public resetPathRegexValue() {
    this._pathRegexValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathRegexValueInput() {
    return this._pathRegexValue;
  }

  // regex_value - computed: false, optional: true, required: false
  private _regexValue?: string; 
  public get regexValue() {
    return this.getStringAttribute('regex_value');
  }
  public set regexValue(value: string) {
    this._regexValue = value;
  }
  public resetRegexValue() {
    this._regexValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValueInput() {
    return this._regexValue;
  }

  // suffix_value - computed: false, optional: true, required: false
  private _suffixValue?: string; 
  public get suffixValue() {
    return this.getStringAttribute('suffix_value');
  }
  public set suffixValue(value: string) {
    this._suffixValue = value;
  }
  public resetSuffixValue() {
    this._suffixValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixValueInput() {
    return this._suffixValue;
  }
}

export class ForwardProxyPolicyAllowListHttpListStructList extends cdktf.ComplexList {
  public internalValue? : ForwardProxyPolicyAllowListHttpListStruct[] | cdktf.IResolvable

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
  public get(index: number): ForwardProxyPolicyAllowListHttpListStructOutputReference {
    return new ForwardProxyPolicyAllowListHttpListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ForwardProxyPolicyAllowListTlsListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#exact_value ForwardProxyPolicy#exact_value}
  */
  readonly exactValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#regex_value ForwardProxyPolicy#regex_value}
  */
  readonly regexValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#suffix_value ForwardProxyPolicy#suffix_value}
  */
  readonly suffixValue?: string;
}

export function forwardProxyPolicyAllowListTlsListStructToTerraform(struct?: ForwardProxyPolicyAllowListTlsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_value: cdktf.stringToTerraform(struct!.exactValue),
    regex_value: cdktf.stringToTerraform(struct!.regexValue),
    suffix_value: cdktf.stringToTerraform(struct!.suffixValue),
  }
}


export function forwardProxyPolicyAllowListTlsListStructToHclTerraform(struct?: ForwardProxyPolicyAllowListTlsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_value: {
      value: cdktf.stringToHclTerraform(struct!.exactValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex_value: {
      value: cdktf.stringToHclTerraform(struct!.regexValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix_value: {
      value: cdktf.stringToHclTerraform(struct!.suffixValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ForwardProxyPolicyAllowListTlsListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ForwardProxyPolicyAllowListTlsListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValue = this._exactValue;
    }
    if (this._regexValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValue = this._regexValue;
    }
    if (this._suffixValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffixValue = this._suffixValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardProxyPolicyAllowListTlsListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exactValue = undefined;
      this._regexValue = undefined;
      this._suffixValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exactValue = value.exactValue;
      this._regexValue = value.regexValue;
      this._suffixValue = value.suffixValue;
    }
  }

  // exact_value - computed: false, optional: true, required: false
  private _exactValue?: string; 
  public get exactValue() {
    return this.getStringAttribute('exact_value');
  }
  public set exactValue(value: string) {
    this._exactValue = value;
  }
  public resetExactValue() {
    this._exactValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValueInput() {
    return this._exactValue;
  }

  // regex_value - computed: false, optional: true, required: false
  private _regexValue?: string; 
  public get regexValue() {
    return this.getStringAttribute('regex_value');
  }
  public set regexValue(value: string) {
    this._regexValue = value;
  }
  public resetRegexValue() {
    this._regexValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValueInput() {
    return this._regexValue;
  }

  // suffix_value - computed: false, optional: true, required: false
  private _suffixValue?: string; 
  public get suffixValue() {
    return this.getStringAttribute('suffix_value');
  }
  public set suffixValue(value: string) {
    this._suffixValue = value;
  }
  public resetSuffixValue() {
    this._suffixValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixValueInput() {
    return this._suffixValue;
  }
}

export class ForwardProxyPolicyAllowListTlsListStructList extends cdktf.ComplexList {
  public internalValue? : ForwardProxyPolicyAllowListTlsListStruct[] | cdktf.IResolvable

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
  public get(index: number): ForwardProxyPolicyAllowListTlsListStructOutputReference {
    return new ForwardProxyPolicyAllowListTlsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ForwardProxyPolicyAllowListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#default_action_allow ForwardProxyPolicy#default_action_allow}
  */
  readonly defaultActionAllow?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#default_action_deny ForwardProxyPolicy#default_action_deny}
  */
  readonly defaultActionDeny?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#default_action_next_policy ForwardProxyPolicy#default_action_next_policy}
  */
  readonly defaultActionNextPolicy?: boolean | cdktf.IResolvable;
  /**
  * dest_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#dest_list ForwardProxyPolicy#dest_list}
  */
  readonly destList?: ForwardProxyPolicyAllowListDestListStruct[] | cdktf.IResolvable;
  /**
  * http_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#http_list ForwardProxyPolicy#http_list}
  */
  readonly httpList?: ForwardProxyPolicyAllowListHttpListStruct[] | cdktf.IResolvable;
  /**
  * tls_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#tls_list ForwardProxyPolicy#tls_list}
  */
  readonly tlsList?: ForwardProxyPolicyAllowListTlsListStruct[] | cdktf.IResolvable;
}

export function forwardProxyPolicyAllowListStructToTerraform(struct?: ForwardProxyPolicyAllowListStructOutputReference | ForwardProxyPolicyAllowListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_action_allow: cdktf.booleanToTerraform(struct!.defaultActionAllow),
    default_action_deny: cdktf.booleanToTerraform(struct!.defaultActionDeny),
    default_action_next_policy: cdktf.booleanToTerraform(struct!.defaultActionNextPolicy),
    dest_list: cdktf.listMapper(forwardProxyPolicyAllowListDestListStructToTerraform, true)(struct!.destList),
    http_list: cdktf.listMapper(forwardProxyPolicyAllowListHttpListStructToTerraform, true)(struct!.httpList),
    tls_list: cdktf.listMapper(forwardProxyPolicyAllowListTlsListStructToTerraform, true)(struct!.tlsList),
  }
}


export function forwardProxyPolicyAllowListStructToHclTerraform(struct?: ForwardProxyPolicyAllowListStructOutputReference | ForwardProxyPolicyAllowListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_action_allow: {
      value: cdktf.booleanToHclTerraform(struct!.defaultActionAllow),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_action_deny: {
      value: cdktf.booleanToHclTerraform(struct!.defaultActionDeny),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_action_next_policy: {
      value: cdktf.booleanToHclTerraform(struct!.defaultActionNextPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dest_list: {
      value: cdktf.listMapperHcl(forwardProxyPolicyAllowListDestListStructToHclTerraform, true)(struct!.destList),
      isBlock: true,
      type: "list",
      storageClassType: "ForwardProxyPolicyAllowListDestListStructList",
    },
    http_list: {
      value: cdktf.listMapperHcl(forwardProxyPolicyAllowListHttpListStructToHclTerraform, true)(struct!.httpList),
      isBlock: true,
      type: "list",
      storageClassType: "ForwardProxyPolicyAllowListHttpListStructList",
    },
    tls_list: {
      value: cdktf.listMapperHcl(forwardProxyPolicyAllowListTlsListStructToHclTerraform, true)(struct!.tlsList),
      isBlock: true,
      type: "list",
      storageClassType: "ForwardProxyPolicyAllowListTlsListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ForwardProxyPolicyAllowListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ForwardProxyPolicyAllowListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultActionAllow !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultActionAllow = this._defaultActionAllow;
    }
    if (this._defaultActionDeny !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultActionDeny = this._defaultActionDeny;
    }
    if (this._defaultActionNextPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultActionNextPolicy = this._defaultActionNextPolicy;
    }
    if (this._destList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destList = this._destList?.internalValue;
    }
    if (this._httpList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpList = this._httpList?.internalValue;
    }
    if (this._tlsList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsList = this._tlsList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardProxyPolicyAllowListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultActionAllow = undefined;
      this._defaultActionDeny = undefined;
      this._defaultActionNextPolicy = undefined;
      this._destList.internalValue = undefined;
      this._httpList.internalValue = undefined;
      this._tlsList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultActionAllow = value.defaultActionAllow;
      this._defaultActionDeny = value.defaultActionDeny;
      this._defaultActionNextPolicy = value.defaultActionNextPolicy;
      this._destList.internalValue = value.destList;
      this._httpList.internalValue = value.httpList;
      this._tlsList.internalValue = value.tlsList;
    }
  }

  // default_action_allow - computed: false, optional: true, required: false
  private _defaultActionAllow?: boolean | cdktf.IResolvable; 
  public get defaultActionAllow() {
    return this.getBooleanAttribute('default_action_allow');
  }
  public set defaultActionAllow(value: boolean | cdktf.IResolvable) {
    this._defaultActionAllow = value;
  }
  public resetDefaultActionAllow() {
    this._defaultActionAllow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionAllowInput() {
    return this._defaultActionAllow;
  }

  // default_action_deny - computed: false, optional: true, required: false
  private _defaultActionDeny?: boolean | cdktf.IResolvable; 
  public get defaultActionDeny() {
    return this.getBooleanAttribute('default_action_deny');
  }
  public set defaultActionDeny(value: boolean | cdktf.IResolvable) {
    this._defaultActionDeny = value;
  }
  public resetDefaultActionDeny() {
    this._defaultActionDeny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionDenyInput() {
    return this._defaultActionDeny;
  }

  // default_action_next_policy - computed: false, optional: true, required: false
  private _defaultActionNextPolicy?: boolean | cdktf.IResolvable; 
  public get defaultActionNextPolicy() {
    return this.getBooleanAttribute('default_action_next_policy');
  }
  public set defaultActionNextPolicy(value: boolean | cdktf.IResolvable) {
    this._defaultActionNextPolicy = value;
  }
  public resetDefaultActionNextPolicy() {
    this._defaultActionNextPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionNextPolicyInput() {
    return this._defaultActionNextPolicy;
  }

  // dest_list - computed: false, optional: true, required: false
  private _destList = new ForwardProxyPolicyAllowListDestListStructList(this, "dest_list", false);
  public get destList() {
    return this._destList;
  }
  public putDestList(value: ForwardProxyPolicyAllowListDestListStruct[] | cdktf.IResolvable) {
    this._destList.internalValue = value;
  }
  public resetDestList() {
    this._destList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destListInput() {
    return this._destList.internalValue;
  }

  // http_list - computed: false, optional: true, required: false
  private _httpList = new ForwardProxyPolicyAllowListHttpListStructList(this, "http_list", false);
  public get httpList() {
    return this._httpList;
  }
  public putHttpList(value: ForwardProxyPolicyAllowListHttpListStruct[] | cdktf.IResolvable) {
    this._httpList.internalValue = value;
  }
  public resetHttpList() {
    this._httpList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpListInput() {
    return this._httpList.internalValue;
  }

  // tls_list - computed: false, optional: true, required: false
  private _tlsList = new ForwardProxyPolicyAllowListTlsListStructList(this, "tls_list", false);
  public get tlsList() {
    return this._tlsList;
  }
  public putTlsList(value: ForwardProxyPolicyAllowListTlsListStruct[] | cdktf.IResolvable) {
    this._tlsList.internalValue = value;
  }
  public resetTlsList() {
    this._tlsList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsListInput() {
    return this._tlsList.internalValue;
  }
}
export interface ForwardProxyPolicyDenyListDestListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#ipv6_prefixes ForwardProxyPolicy#ipv6_prefixes}
  */
  readonly ipv6Prefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#port_ranges ForwardProxyPolicy#port_ranges}
  */
  readonly portRanges: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#prefixes ForwardProxyPolicy#prefixes}
  */
  readonly prefixes?: string[];
}

export function forwardProxyPolicyDenyListDestListStructToTerraform(struct?: ForwardProxyPolicyDenyListDestListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv6Prefixes),
    port_ranges: cdktf.stringToTerraform(struct!.portRanges),
    prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefixes),
  }
}


export function forwardProxyPolicyDenyListDestListStructToHclTerraform(struct?: ForwardProxyPolicyDenyListDestListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipv6Prefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    port_ranges: {
      value: cdktf.stringToHclTerraform(struct!.portRanges),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ForwardProxyPolicyDenyListDestListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ForwardProxyPolicyDenyListDestListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6Prefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Prefixes = this._ipv6Prefixes;
    }
    if (this._portRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRanges = this._portRanges;
    }
    if (this._prefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixes = this._prefixes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardProxyPolicyDenyListDestListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv6Prefixes = undefined;
      this._portRanges = undefined;
      this._prefixes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv6Prefixes = value.ipv6Prefixes;
      this._portRanges = value.portRanges;
      this._prefixes = value.prefixes;
    }
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

  // port_ranges - computed: false, optional: false, required: true
  private _portRanges?: string; 
  public get portRanges() {
    return this.getStringAttribute('port_ranges');
  }
  public set portRanges(value: string) {
    this._portRanges = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangesInput() {
    return this._portRanges;
  }

  // prefixes - computed: false, optional: true, required: false
  private _prefixes?: string[]; 
  public get prefixes() {
    return this.getListAttribute('prefixes');
  }
  public set prefixes(value: string[]) {
    this._prefixes = value;
  }
  public resetPrefixes() {
    this._prefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixesInput() {
    return this._prefixes;
  }
}

export class ForwardProxyPolicyDenyListDestListStructList extends cdktf.ComplexList {
  public internalValue? : ForwardProxyPolicyDenyListDestListStruct[] | cdktf.IResolvable

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
  public get(index: number): ForwardProxyPolicyDenyListDestListStructOutputReference {
    return new ForwardProxyPolicyDenyListDestListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ForwardProxyPolicyDenyListHttpListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#any_path ForwardProxyPolicy#any_path}
  */
  readonly anyPath?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#exact_value ForwardProxyPolicy#exact_value}
  */
  readonly exactValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#path_exact_value ForwardProxyPolicy#path_exact_value}
  */
  readonly pathExactValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#path_prefix_value ForwardProxyPolicy#path_prefix_value}
  */
  readonly pathPrefixValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#path_regex_value ForwardProxyPolicy#path_regex_value}
  */
  readonly pathRegexValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#regex_value ForwardProxyPolicy#regex_value}
  */
  readonly regexValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#suffix_value ForwardProxyPolicy#suffix_value}
  */
  readonly suffixValue?: string;
}

export function forwardProxyPolicyDenyListHttpListStructToTerraform(struct?: ForwardProxyPolicyDenyListHttpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_path: cdktf.booleanToTerraform(struct!.anyPath),
    exact_value: cdktf.stringToTerraform(struct!.exactValue),
    path_exact_value: cdktf.stringToTerraform(struct!.pathExactValue),
    path_prefix_value: cdktf.stringToTerraform(struct!.pathPrefixValue),
    path_regex_value: cdktf.stringToTerraform(struct!.pathRegexValue),
    regex_value: cdktf.stringToTerraform(struct!.regexValue),
    suffix_value: cdktf.stringToTerraform(struct!.suffixValue),
  }
}


export function forwardProxyPolicyDenyListHttpListStructToHclTerraform(struct?: ForwardProxyPolicyDenyListHttpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any_path: {
      value: cdktf.booleanToHclTerraform(struct!.anyPath),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exact_value: {
      value: cdktf.stringToHclTerraform(struct!.exactValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path_exact_value: {
      value: cdktf.stringToHclTerraform(struct!.pathExactValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path_prefix_value: {
      value: cdktf.stringToHclTerraform(struct!.pathPrefixValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path_regex_value: {
      value: cdktf.stringToHclTerraform(struct!.pathRegexValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex_value: {
      value: cdktf.stringToHclTerraform(struct!.regexValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix_value: {
      value: cdktf.stringToHclTerraform(struct!.suffixValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ForwardProxyPolicyDenyListHttpListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ForwardProxyPolicyDenyListHttpListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyPath = this._anyPath;
    }
    if (this._exactValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValue = this._exactValue;
    }
    if (this._pathExactValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathExactValue = this._pathExactValue;
    }
    if (this._pathPrefixValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathPrefixValue = this._pathPrefixValue;
    }
    if (this._pathRegexValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathRegexValue = this._pathRegexValue;
    }
    if (this._regexValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValue = this._regexValue;
    }
    if (this._suffixValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffixValue = this._suffixValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardProxyPolicyDenyListHttpListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anyPath = undefined;
      this._exactValue = undefined;
      this._pathExactValue = undefined;
      this._pathPrefixValue = undefined;
      this._pathRegexValue = undefined;
      this._regexValue = undefined;
      this._suffixValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anyPath = value.anyPath;
      this._exactValue = value.exactValue;
      this._pathExactValue = value.pathExactValue;
      this._pathPrefixValue = value.pathPrefixValue;
      this._pathRegexValue = value.pathRegexValue;
      this._regexValue = value.regexValue;
      this._suffixValue = value.suffixValue;
    }
  }

  // any_path - computed: false, optional: true, required: false
  private _anyPath?: boolean | cdktf.IResolvable; 
  public get anyPath() {
    return this.getBooleanAttribute('any_path');
  }
  public set anyPath(value: boolean | cdktf.IResolvable) {
    this._anyPath = value;
  }
  public resetAnyPath() {
    this._anyPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyPathInput() {
    return this._anyPath;
  }

  // exact_value - computed: false, optional: true, required: false
  private _exactValue?: string; 
  public get exactValue() {
    return this.getStringAttribute('exact_value');
  }
  public set exactValue(value: string) {
    this._exactValue = value;
  }
  public resetExactValue() {
    this._exactValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValueInput() {
    return this._exactValue;
  }

  // path_exact_value - computed: false, optional: true, required: false
  private _pathExactValue?: string; 
  public get pathExactValue() {
    return this.getStringAttribute('path_exact_value');
  }
  public set pathExactValue(value: string) {
    this._pathExactValue = value;
  }
  public resetPathExactValue() {
    this._pathExactValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathExactValueInput() {
    return this._pathExactValue;
  }

  // path_prefix_value - computed: false, optional: true, required: false
  private _pathPrefixValue?: string; 
  public get pathPrefixValue() {
    return this.getStringAttribute('path_prefix_value');
  }
  public set pathPrefixValue(value: string) {
    this._pathPrefixValue = value;
  }
  public resetPathPrefixValue() {
    this._pathPrefixValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathPrefixValueInput() {
    return this._pathPrefixValue;
  }

  // path_regex_value - computed: false, optional: true, required: false
  private _pathRegexValue?: string; 
  public get pathRegexValue() {
    return this.getStringAttribute('path_regex_value');
  }
  public set pathRegexValue(value: string) {
    this._pathRegexValue = value;
  }
  public resetPathRegexValue() {
    this._pathRegexValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathRegexValueInput() {
    return this._pathRegexValue;
  }

  // regex_value - computed: false, optional: true, required: false
  private _regexValue?: string; 
  public get regexValue() {
    return this.getStringAttribute('regex_value');
  }
  public set regexValue(value: string) {
    this._regexValue = value;
  }
  public resetRegexValue() {
    this._regexValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValueInput() {
    return this._regexValue;
  }

  // suffix_value - computed: false, optional: true, required: false
  private _suffixValue?: string; 
  public get suffixValue() {
    return this.getStringAttribute('suffix_value');
  }
  public set suffixValue(value: string) {
    this._suffixValue = value;
  }
  public resetSuffixValue() {
    this._suffixValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixValueInput() {
    return this._suffixValue;
  }
}

export class ForwardProxyPolicyDenyListHttpListStructList extends cdktf.ComplexList {
  public internalValue? : ForwardProxyPolicyDenyListHttpListStruct[] | cdktf.IResolvable

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
  public get(index: number): ForwardProxyPolicyDenyListHttpListStructOutputReference {
    return new ForwardProxyPolicyDenyListHttpListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ForwardProxyPolicyDenyListTlsListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#exact_value ForwardProxyPolicy#exact_value}
  */
  readonly exactValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#regex_value ForwardProxyPolicy#regex_value}
  */
  readonly regexValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#suffix_value ForwardProxyPolicy#suffix_value}
  */
  readonly suffixValue?: string;
}

export function forwardProxyPolicyDenyListTlsListStructToTerraform(struct?: ForwardProxyPolicyDenyListTlsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_value: cdktf.stringToTerraform(struct!.exactValue),
    regex_value: cdktf.stringToTerraform(struct!.regexValue),
    suffix_value: cdktf.stringToTerraform(struct!.suffixValue),
  }
}


export function forwardProxyPolicyDenyListTlsListStructToHclTerraform(struct?: ForwardProxyPolicyDenyListTlsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_value: {
      value: cdktf.stringToHclTerraform(struct!.exactValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex_value: {
      value: cdktf.stringToHclTerraform(struct!.regexValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix_value: {
      value: cdktf.stringToHclTerraform(struct!.suffixValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ForwardProxyPolicyDenyListTlsListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ForwardProxyPolicyDenyListTlsListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValue = this._exactValue;
    }
    if (this._regexValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValue = this._regexValue;
    }
    if (this._suffixValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffixValue = this._suffixValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardProxyPolicyDenyListTlsListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exactValue = undefined;
      this._regexValue = undefined;
      this._suffixValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exactValue = value.exactValue;
      this._regexValue = value.regexValue;
      this._suffixValue = value.suffixValue;
    }
  }

  // exact_value - computed: false, optional: true, required: false
  private _exactValue?: string; 
  public get exactValue() {
    return this.getStringAttribute('exact_value');
  }
  public set exactValue(value: string) {
    this._exactValue = value;
  }
  public resetExactValue() {
    this._exactValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValueInput() {
    return this._exactValue;
  }

  // regex_value - computed: false, optional: true, required: false
  private _regexValue?: string; 
  public get regexValue() {
    return this.getStringAttribute('regex_value');
  }
  public set regexValue(value: string) {
    this._regexValue = value;
  }
  public resetRegexValue() {
    this._regexValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValueInput() {
    return this._regexValue;
  }

  // suffix_value - computed: false, optional: true, required: false
  private _suffixValue?: string; 
  public get suffixValue() {
    return this.getStringAttribute('suffix_value');
  }
  public set suffixValue(value: string) {
    this._suffixValue = value;
  }
  public resetSuffixValue() {
    this._suffixValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixValueInput() {
    return this._suffixValue;
  }
}

export class ForwardProxyPolicyDenyListTlsListStructList extends cdktf.ComplexList {
  public internalValue? : ForwardProxyPolicyDenyListTlsListStruct[] | cdktf.IResolvable

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
  public get(index: number): ForwardProxyPolicyDenyListTlsListStructOutputReference {
    return new ForwardProxyPolicyDenyListTlsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ForwardProxyPolicyDenyListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#default_action_allow ForwardProxyPolicy#default_action_allow}
  */
  readonly defaultActionAllow?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#default_action_deny ForwardProxyPolicy#default_action_deny}
  */
  readonly defaultActionDeny?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#default_action_next_policy ForwardProxyPolicy#default_action_next_policy}
  */
  readonly defaultActionNextPolicy?: boolean | cdktf.IResolvable;
  /**
  * dest_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#dest_list ForwardProxyPolicy#dest_list}
  */
  readonly destList?: ForwardProxyPolicyDenyListDestListStruct[] | cdktf.IResolvable;
  /**
  * http_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#http_list ForwardProxyPolicy#http_list}
  */
  readonly httpList?: ForwardProxyPolicyDenyListHttpListStruct[] | cdktf.IResolvable;
  /**
  * tls_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#tls_list ForwardProxyPolicy#tls_list}
  */
  readonly tlsList?: ForwardProxyPolicyDenyListTlsListStruct[] | cdktf.IResolvable;
}

export function forwardProxyPolicyDenyListStructToTerraform(struct?: ForwardProxyPolicyDenyListStructOutputReference | ForwardProxyPolicyDenyListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_action_allow: cdktf.booleanToTerraform(struct!.defaultActionAllow),
    default_action_deny: cdktf.booleanToTerraform(struct!.defaultActionDeny),
    default_action_next_policy: cdktf.booleanToTerraform(struct!.defaultActionNextPolicy),
    dest_list: cdktf.listMapper(forwardProxyPolicyDenyListDestListStructToTerraform, true)(struct!.destList),
    http_list: cdktf.listMapper(forwardProxyPolicyDenyListHttpListStructToTerraform, true)(struct!.httpList),
    tls_list: cdktf.listMapper(forwardProxyPolicyDenyListTlsListStructToTerraform, true)(struct!.tlsList),
  }
}


export function forwardProxyPolicyDenyListStructToHclTerraform(struct?: ForwardProxyPolicyDenyListStructOutputReference | ForwardProxyPolicyDenyListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_action_allow: {
      value: cdktf.booleanToHclTerraform(struct!.defaultActionAllow),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_action_deny: {
      value: cdktf.booleanToHclTerraform(struct!.defaultActionDeny),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_action_next_policy: {
      value: cdktf.booleanToHclTerraform(struct!.defaultActionNextPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dest_list: {
      value: cdktf.listMapperHcl(forwardProxyPolicyDenyListDestListStructToHclTerraform, true)(struct!.destList),
      isBlock: true,
      type: "list",
      storageClassType: "ForwardProxyPolicyDenyListDestListStructList",
    },
    http_list: {
      value: cdktf.listMapperHcl(forwardProxyPolicyDenyListHttpListStructToHclTerraform, true)(struct!.httpList),
      isBlock: true,
      type: "list",
      storageClassType: "ForwardProxyPolicyDenyListHttpListStructList",
    },
    tls_list: {
      value: cdktf.listMapperHcl(forwardProxyPolicyDenyListTlsListStructToHclTerraform, true)(struct!.tlsList),
      isBlock: true,
      type: "list",
      storageClassType: "ForwardProxyPolicyDenyListTlsListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ForwardProxyPolicyDenyListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ForwardProxyPolicyDenyListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultActionAllow !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultActionAllow = this._defaultActionAllow;
    }
    if (this._defaultActionDeny !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultActionDeny = this._defaultActionDeny;
    }
    if (this._defaultActionNextPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultActionNextPolicy = this._defaultActionNextPolicy;
    }
    if (this._destList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destList = this._destList?.internalValue;
    }
    if (this._httpList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpList = this._httpList?.internalValue;
    }
    if (this._tlsList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsList = this._tlsList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardProxyPolicyDenyListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultActionAllow = undefined;
      this._defaultActionDeny = undefined;
      this._defaultActionNextPolicy = undefined;
      this._destList.internalValue = undefined;
      this._httpList.internalValue = undefined;
      this._tlsList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultActionAllow = value.defaultActionAllow;
      this._defaultActionDeny = value.defaultActionDeny;
      this._defaultActionNextPolicy = value.defaultActionNextPolicy;
      this._destList.internalValue = value.destList;
      this._httpList.internalValue = value.httpList;
      this._tlsList.internalValue = value.tlsList;
    }
  }

  // default_action_allow - computed: false, optional: true, required: false
  private _defaultActionAllow?: boolean | cdktf.IResolvable; 
  public get defaultActionAllow() {
    return this.getBooleanAttribute('default_action_allow');
  }
  public set defaultActionAllow(value: boolean | cdktf.IResolvable) {
    this._defaultActionAllow = value;
  }
  public resetDefaultActionAllow() {
    this._defaultActionAllow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionAllowInput() {
    return this._defaultActionAllow;
  }

  // default_action_deny - computed: false, optional: true, required: false
  private _defaultActionDeny?: boolean | cdktf.IResolvable; 
  public get defaultActionDeny() {
    return this.getBooleanAttribute('default_action_deny');
  }
  public set defaultActionDeny(value: boolean | cdktf.IResolvable) {
    this._defaultActionDeny = value;
  }
  public resetDefaultActionDeny() {
    this._defaultActionDeny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionDenyInput() {
    return this._defaultActionDeny;
  }

  // default_action_next_policy - computed: false, optional: true, required: false
  private _defaultActionNextPolicy?: boolean | cdktf.IResolvable; 
  public get defaultActionNextPolicy() {
    return this.getBooleanAttribute('default_action_next_policy');
  }
  public set defaultActionNextPolicy(value: boolean | cdktf.IResolvable) {
    this._defaultActionNextPolicy = value;
  }
  public resetDefaultActionNextPolicy() {
    this._defaultActionNextPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionNextPolicyInput() {
    return this._defaultActionNextPolicy;
  }

  // dest_list - computed: false, optional: true, required: false
  private _destList = new ForwardProxyPolicyDenyListDestListStructList(this, "dest_list", false);
  public get destList() {
    return this._destList;
  }
  public putDestList(value: ForwardProxyPolicyDenyListDestListStruct[] | cdktf.IResolvable) {
    this._destList.internalValue = value;
  }
  public resetDestList() {
    this._destList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destListInput() {
    return this._destList.internalValue;
  }

  // http_list - computed: false, optional: true, required: false
  private _httpList = new ForwardProxyPolicyDenyListHttpListStructList(this, "http_list", false);
  public get httpList() {
    return this._httpList;
  }
  public putHttpList(value: ForwardProxyPolicyDenyListHttpListStruct[] | cdktf.IResolvable) {
    this._httpList.internalValue = value;
  }
  public resetHttpList() {
    this._httpList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpListInput() {
    return this._httpList.internalValue;
  }

  // tls_list - computed: false, optional: true, required: false
  private _tlsList = new ForwardProxyPolicyDenyListTlsListStructList(this, "tls_list", false);
  public get tlsList() {
    return this._tlsList;
  }
  public putTlsList(value: ForwardProxyPolicyDenyListTlsListStruct[] | cdktf.IResolvable) {
    this._tlsList.internalValue = value;
  }
  public resetTlsList() {
    this._tlsList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsListInput() {
    return this._tlsList.internalValue;
  }
}
export interface ForwardProxyPolicyNetworkConnector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#name ForwardProxyPolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#namespace ForwardProxyPolicy#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#tenant ForwardProxyPolicy#tenant}
  */
  readonly tenant?: string;
}

export function forwardProxyPolicyNetworkConnectorToTerraform(struct?: ForwardProxyPolicyNetworkConnectorOutputReference | ForwardProxyPolicyNetworkConnector): any {
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


export function forwardProxyPolicyNetworkConnectorToHclTerraform(struct?: ForwardProxyPolicyNetworkConnectorOutputReference | ForwardProxyPolicyNetworkConnector): any {
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

export class ForwardProxyPolicyNetworkConnectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ForwardProxyPolicyNetworkConnector | undefined {
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

  public set internalValue(value: ForwardProxyPolicyNetworkConnector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
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
export interface ForwardProxyPolicyProxyLabelSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#expressions ForwardProxyPolicy#expressions}
  */
  readonly expressions: string[];
}

export function forwardProxyPolicyProxyLabelSelectorToTerraform(struct?: ForwardProxyPolicyProxyLabelSelectorOutputReference | ForwardProxyPolicyProxyLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expressions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.expressions),
  }
}


export function forwardProxyPolicyProxyLabelSelectorToHclTerraform(struct?: ForwardProxyPolicyProxyLabelSelectorOutputReference | ForwardProxyPolicyProxyLabelSelector): any {
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

export class ForwardProxyPolicyProxyLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ForwardProxyPolicyProxyLabelSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expressions !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressions = this._expressions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardProxyPolicyProxyLabelSelector | undefined) {
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
export interface ForwardProxyPolicyRuleListRulesDstAsnListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#as_numbers ForwardProxyPolicy#as_numbers}
  */
  readonly asNumbers: number[];
}

export function forwardProxyPolicyRuleListRulesDstAsnListStructToTerraform(struct?: ForwardProxyPolicyRuleListRulesDstAsnListStructOutputReference | ForwardProxyPolicyRuleListRulesDstAsnListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_numbers: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.asNumbers),
  }
}


export function forwardProxyPolicyRuleListRulesDstAsnListStructToHclTerraform(struct?: ForwardProxyPolicyRuleListRulesDstAsnListStructOutputReference | ForwardProxyPolicyRuleListRulesDstAsnListStruct): any {
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

export class ForwardProxyPolicyRuleListRulesDstAsnListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ForwardProxyPolicyRuleListRulesDstAsnListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asNumbers !== undefined) {
      hasAnyValues = true;
      internalValueResult.asNumbers = this._asNumbers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardProxyPolicyRuleListRulesDstAsnListStruct | undefined) {
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
export interface ForwardProxyPolicyRuleListRulesDstAsnSet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#name ForwardProxyPolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#namespace ForwardProxyPolicy#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#tenant ForwardProxyPolicy#tenant}
  */
  readonly tenant?: string;
}

export function forwardProxyPolicyRuleListRulesDstAsnSetToTerraform(struct?: ForwardProxyPolicyRuleListRulesDstAsnSetOutputReference | ForwardProxyPolicyRuleListRulesDstAsnSet): any {
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


export function forwardProxyPolicyRuleListRulesDstAsnSetToHclTerraform(struct?: ForwardProxyPolicyRuleListRulesDstAsnSetOutputReference | ForwardProxyPolicyRuleListRulesDstAsnSet): any {
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

export class ForwardProxyPolicyRuleListRulesDstAsnSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ForwardProxyPolicyRuleListRulesDstAsnSet | undefined {
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

  public set internalValue(value: ForwardProxyPolicyRuleListRulesDstAsnSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
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
export interface ForwardProxyPolicyRuleListRulesDstIpPrefixSet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#name ForwardProxyPolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#namespace ForwardProxyPolicy#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#tenant ForwardProxyPolicy#tenant}
  */
  readonly tenant?: string;
}

export function forwardProxyPolicyRuleListRulesDstIpPrefixSetToTerraform(struct?: ForwardProxyPolicyRuleListRulesDstIpPrefixSetOutputReference | ForwardProxyPolicyRuleListRulesDstIpPrefixSet): any {
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


export function forwardProxyPolicyRuleListRulesDstIpPrefixSetToHclTerraform(struct?: ForwardProxyPolicyRuleListRulesDstIpPrefixSetOutputReference | ForwardProxyPolicyRuleListRulesDstIpPrefixSet): any {
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

export class ForwardProxyPolicyRuleListRulesDstIpPrefixSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ForwardProxyPolicyRuleListRulesDstIpPrefixSet | undefined {
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

  public set internalValue(value: ForwardProxyPolicyRuleListRulesDstIpPrefixSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
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
export interface ForwardProxyPolicyRuleListRulesDstLabelSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#expressions ForwardProxyPolicy#expressions}
  */
  readonly expressions: string[];
}

export function forwardProxyPolicyRuleListRulesDstLabelSelectorToTerraform(struct?: ForwardProxyPolicyRuleListRulesDstLabelSelectorOutputReference | ForwardProxyPolicyRuleListRulesDstLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expressions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.expressions),
  }
}


export function forwardProxyPolicyRuleListRulesDstLabelSelectorToHclTerraform(struct?: ForwardProxyPolicyRuleListRulesDstLabelSelectorOutputReference | ForwardProxyPolicyRuleListRulesDstLabelSelector): any {
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

export class ForwardProxyPolicyRuleListRulesDstLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ForwardProxyPolicyRuleListRulesDstLabelSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expressions !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressions = this._expressions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardProxyPolicyRuleListRulesDstLabelSelector | undefined) {
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
export interface ForwardProxyPolicyRuleListRulesDstPrefixListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#ipv6_prefixes ForwardProxyPolicy#ipv6_prefixes}
  */
  readonly ipv6Prefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#prefixes ForwardProxyPolicy#prefixes}
  */
  readonly prefixes?: string[];
}

export function forwardProxyPolicyRuleListRulesDstPrefixListStructToTerraform(struct?: ForwardProxyPolicyRuleListRulesDstPrefixListStructOutputReference | ForwardProxyPolicyRuleListRulesDstPrefixListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv6Prefixes),
    prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefixes),
  }
}


export function forwardProxyPolicyRuleListRulesDstPrefixListStructToHclTerraform(struct?: ForwardProxyPolicyRuleListRulesDstPrefixListStructOutputReference | ForwardProxyPolicyRuleListRulesDstPrefixListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipv6Prefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ForwardProxyPolicyRuleListRulesDstPrefixListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ForwardProxyPolicyRuleListRulesDstPrefixListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6Prefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Prefixes = this._ipv6Prefixes;
    }
    if (this._prefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixes = this._prefixes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardProxyPolicyRuleListRulesDstPrefixListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv6Prefixes = undefined;
      this._prefixes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv6Prefixes = value.ipv6Prefixes;
      this._prefixes = value.prefixes;
    }
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

  // prefixes - computed: false, optional: true, required: false
  private _prefixes?: string[]; 
  public get prefixes() {
    return this.getListAttribute('prefixes');
  }
  public set prefixes(value: string[]) {
    this._prefixes = value;
  }
  public resetPrefixes() {
    this._prefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixesInput() {
    return this._prefixes;
  }
}
export interface ForwardProxyPolicyRuleListRulesHttpListHttpListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#any_path ForwardProxyPolicy#any_path}
  */
  readonly anyPath?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#exact_value ForwardProxyPolicy#exact_value}
  */
  readonly exactValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#path_exact_value ForwardProxyPolicy#path_exact_value}
  */
  readonly pathExactValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#path_prefix_value ForwardProxyPolicy#path_prefix_value}
  */
  readonly pathPrefixValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#path_regex_value ForwardProxyPolicy#path_regex_value}
  */
  readonly pathRegexValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#regex_value ForwardProxyPolicy#regex_value}
  */
  readonly regexValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#suffix_value ForwardProxyPolicy#suffix_value}
  */
  readonly suffixValue?: string;
}

export function forwardProxyPolicyRuleListRulesHttpListHttpListStructToTerraform(struct?: ForwardProxyPolicyRuleListRulesHttpListHttpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_path: cdktf.booleanToTerraform(struct!.anyPath),
    exact_value: cdktf.stringToTerraform(struct!.exactValue),
    path_exact_value: cdktf.stringToTerraform(struct!.pathExactValue),
    path_prefix_value: cdktf.stringToTerraform(struct!.pathPrefixValue),
    path_regex_value: cdktf.stringToTerraform(struct!.pathRegexValue),
    regex_value: cdktf.stringToTerraform(struct!.regexValue),
    suffix_value: cdktf.stringToTerraform(struct!.suffixValue),
  }
}


export function forwardProxyPolicyRuleListRulesHttpListHttpListStructToHclTerraform(struct?: ForwardProxyPolicyRuleListRulesHttpListHttpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any_path: {
      value: cdktf.booleanToHclTerraform(struct!.anyPath),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exact_value: {
      value: cdktf.stringToHclTerraform(struct!.exactValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path_exact_value: {
      value: cdktf.stringToHclTerraform(struct!.pathExactValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path_prefix_value: {
      value: cdktf.stringToHclTerraform(struct!.pathPrefixValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path_regex_value: {
      value: cdktf.stringToHclTerraform(struct!.pathRegexValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex_value: {
      value: cdktf.stringToHclTerraform(struct!.regexValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix_value: {
      value: cdktf.stringToHclTerraform(struct!.suffixValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ForwardProxyPolicyRuleListRulesHttpListHttpListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ForwardProxyPolicyRuleListRulesHttpListHttpListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyPath = this._anyPath;
    }
    if (this._exactValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValue = this._exactValue;
    }
    if (this._pathExactValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathExactValue = this._pathExactValue;
    }
    if (this._pathPrefixValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathPrefixValue = this._pathPrefixValue;
    }
    if (this._pathRegexValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathRegexValue = this._pathRegexValue;
    }
    if (this._regexValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValue = this._regexValue;
    }
    if (this._suffixValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffixValue = this._suffixValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardProxyPolicyRuleListRulesHttpListHttpListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anyPath = undefined;
      this._exactValue = undefined;
      this._pathExactValue = undefined;
      this._pathPrefixValue = undefined;
      this._pathRegexValue = undefined;
      this._regexValue = undefined;
      this._suffixValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anyPath = value.anyPath;
      this._exactValue = value.exactValue;
      this._pathExactValue = value.pathExactValue;
      this._pathPrefixValue = value.pathPrefixValue;
      this._pathRegexValue = value.pathRegexValue;
      this._regexValue = value.regexValue;
      this._suffixValue = value.suffixValue;
    }
  }

  // any_path - computed: false, optional: true, required: false
  private _anyPath?: boolean | cdktf.IResolvable; 
  public get anyPath() {
    return this.getBooleanAttribute('any_path');
  }
  public set anyPath(value: boolean | cdktf.IResolvable) {
    this._anyPath = value;
  }
  public resetAnyPath() {
    this._anyPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyPathInput() {
    return this._anyPath;
  }

  // exact_value - computed: false, optional: true, required: false
  private _exactValue?: string; 
  public get exactValue() {
    return this.getStringAttribute('exact_value');
  }
  public set exactValue(value: string) {
    this._exactValue = value;
  }
  public resetExactValue() {
    this._exactValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValueInput() {
    return this._exactValue;
  }

  // path_exact_value - computed: false, optional: true, required: false
  private _pathExactValue?: string; 
  public get pathExactValue() {
    return this.getStringAttribute('path_exact_value');
  }
  public set pathExactValue(value: string) {
    this._pathExactValue = value;
  }
  public resetPathExactValue() {
    this._pathExactValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathExactValueInput() {
    return this._pathExactValue;
  }

  // path_prefix_value - computed: false, optional: true, required: false
  private _pathPrefixValue?: string; 
  public get pathPrefixValue() {
    return this.getStringAttribute('path_prefix_value');
  }
  public set pathPrefixValue(value: string) {
    this._pathPrefixValue = value;
  }
  public resetPathPrefixValue() {
    this._pathPrefixValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathPrefixValueInput() {
    return this._pathPrefixValue;
  }

  // path_regex_value - computed: false, optional: true, required: false
  private _pathRegexValue?: string; 
  public get pathRegexValue() {
    return this.getStringAttribute('path_regex_value');
  }
  public set pathRegexValue(value: string) {
    this._pathRegexValue = value;
  }
  public resetPathRegexValue() {
    this._pathRegexValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathRegexValueInput() {
    return this._pathRegexValue;
  }

  // regex_value - computed: false, optional: true, required: false
  private _regexValue?: string; 
  public get regexValue() {
    return this.getStringAttribute('regex_value');
  }
  public set regexValue(value: string) {
    this._regexValue = value;
  }
  public resetRegexValue() {
    this._regexValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValueInput() {
    return this._regexValue;
  }

  // suffix_value - computed: false, optional: true, required: false
  private _suffixValue?: string; 
  public get suffixValue() {
    return this.getStringAttribute('suffix_value');
  }
  public set suffixValue(value: string) {
    this._suffixValue = value;
  }
  public resetSuffixValue() {
    this._suffixValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixValueInput() {
    return this._suffixValue;
  }
}

export class ForwardProxyPolicyRuleListRulesHttpListHttpListStructList extends cdktf.ComplexList {
  public internalValue? : ForwardProxyPolicyRuleListRulesHttpListHttpListStruct[] | cdktf.IResolvable

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
  public get(index: number): ForwardProxyPolicyRuleListRulesHttpListHttpListStructOutputReference {
    return new ForwardProxyPolicyRuleListRulesHttpListHttpListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ForwardProxyPolicyRuleListRulesHttpListStruct {
  /**
  * http_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#http_list ForwardProxyPolicy#http_list}
  */
  readonly httpList?: ForwardProxyPolicyRuleListRulesHttpListHttpListStruct[] | cdktf.IResolvable;
}

export function forwardProxyPolicyRuleListRulesHttpListStructToTerraform(struct?: ForwardProxyPolicyRuleListRulesHttpListStructOutputReference | ForwardProxyPolicyRuleListRulesHttpListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_list: cdktf.listMapper(forwardProxyPolicyRuleListRulesHttpListHttpListStructToTerraform, true)(struct!.httpList),
  }
}


export function forwardProxyPolicyRuleListRulesHttpListStructToHclTerraform(struct?: ForwardProxyPolicyRuleListRulesHttpListStructOutputReference | ForwardProxyPolicyRuleListRulesHttpListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_list: {
      value: cdktf.listMapperHcl(forwardProxyPolicyRuleListRulesHttpListHttpListStructToHclTerraform, true)(struct!.httpList),
      isBlock: true,
      type: "list",
      storageClassType: "ForwardProxyPolicyRuleListRulesHttpListHttpListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ForwardProxyPolicyRuleListRulesHttpListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ForwardProxyPolicyRuleListRulesHttpListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpList = this._httpList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardProxyPolicyRuleListRulesHttpListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._httpList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._httpList.internalValue = value.httpList;
    }
  }

  // http_list - computed: false, optional: true, required: false
  private _httpList = new ForwardProxyPolicyRuleListRulesHttpListHttpListStructList(this, "http_list", false);
  public get httpList() {
    return this._httpList;
  }
  public putHttpList(value: ForwardProxyPolicyRuleListRulesHttpListHttpListStruct[] | cdktf.IResolvable) {
    this._httpList.internalValue = value;
  }
  public resetHttpList() {
    this._httpList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpListInput() {
    return this._httpList.internalValue;
  }
}
export interface ForwardProxyPolicyRuleListRulesInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#name ForwardProxyPolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#namespace ForwardProxyPolicy#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#tenant ForwardProxyPolicy#tenant}
  */
  readonly tenant?: string;
}

export function forwardProxyPolicyRuleListRulesInterfaceToTerraform(struct?: ForwardProxyPolicyRuleListRulesInterfaceOutputReference | ForwardProxyPolicyRuleListRulesInterface): any {
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


export function forwardProxyPolicyRuleListRulesInterfaceToHclTerraform(struct?: ForwardProxyPolicyRuleListRulesInterfaceOutputReference | ForwardProxyPolicyRuleListRulesInterface): any {
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

export class ForwardProxyPolicyRuleListRulesInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ForwardProxyPolicyRuleListRulesInterface | undefined {
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

  public set internalValue(value: ForwardProxyPolicyRuleListRulesInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
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
export interface ForwardProxyPolicyRuleListRulesIpPrefixSet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#name ForwardProxyPolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#namespace ForwardProxyPolicy#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#tenant ForwardProxyPolicy#tenant}
  */
  readonly tenant?: string;
}

export function forwardProxyPolicyRuleListRulesIpPrefixSetToTerraform(struct?: ForwardProxyPolicyRuleListRulesIpPrefixSetOutputReference | ForwardProxyPolicyRuleListRulesIpPrefixSet): any {
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


export function forwardProxyPolicyRuleListRulesIpPrefixSetToHclTerraform(struct?: ForwardProxyPolicyRuleListRulesIpPrefixSetOutputReference | ForwardProxyPolicyRuleListRulesIpPrefixSet): any {
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

export class ForwardProxyPolicyRuleListRulesIpPrefixSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ForwardProxyPolicyRuleListRulesIpPrefixSet | undefined {
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

  public set internalValue(value: ForwardProxyPolicyRuleListRulesIpPrefixSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
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
export interface ForwardProxyPolicyRuleListRulesLabelSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#expressions ForwardProxyPolicy#expressions}
  */
  readonly expressions: string[];
}

export function forwardProxyPolicyRuleListRulesLabelSelectorToTerraform(struct?: ForwardProxyPolicyRuleListRulesLabelSelectorOutputReference | ForwardProxyPolicyRuleListRulesLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expressions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.expressions),
  }
}


export function forwardProxyPolicyRuleListRulesLabelSelectorToHclTerraform(struct?: ForwardProxyPolicyRuleListRulesLabelSelectorOutputReference | ForwardProxyPolicyRuleListRulesLabelSelector): any {
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

export class ForwardProxyPolicyRuleListRulesLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ForwardProxyPolicyRuleListRulesLabelSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expressions !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressions = this._expressions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardProxyPolicyRuleListRulesLabelSelector | undefined) {
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
export interface ForwardProxyPolicyRuleListRulesMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#description ForwardProxyPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#disable ForwardProxyPolicy#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#name ForwardProxyPolicy#name}
  */
  readonly name: string;
}

export function forwardProxyPolicyRuleListRulesMetadataToTerraform(struct?: ForwardProxyPolicyRuleListRulesMetadataOutputReference | ForwardProxyPolicyRuleListRulesMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    disable: cdktf.booleanToTerraform(struct!.disable),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function forwardProxyPolicyRuleListRulesMetadataToHclTerraform(struct?: ForwardProxyPolicyRuleListRulesMetadataOutputReference | ForwardProxyPolicyRuleListRulesMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ForwardProxyPolicyRuleListRulesMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ForwardProxyPolicyRuleListRulesMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardProxyPolicyRuleListRulesMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._disable = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._disable = value.disable;
      this._name = value.name;
    }
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
}
export interface ForwardProxyPolicyRuleListRulesPortMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#invert_matcher ForwardProxyPolicy#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#ports ForwardProxyPolicy#ports}
  */
  readonly ports: string[];
}

export function forwardProxyPolicyRuleListRulesPortMatcherToTerraform(struct?: ForwardProxyPolicyRuleListRulesPortMatcherOutputReference | ForwardProxyPolicyRuleListRulesPortMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    ports: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ports),
  }
}


export function forwardProxyPolicyRuleListRulesPortMatcherToHclTerraform(struct?: ForwardProxyPolicyRuleListRulesPortMatcherOutputReference | ForwardProxyPolicyRuleListRulesPortMatcher): any {
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

export class ForwardProxyPolicyRuleListRulesPortMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ForwardProxyPolicyRuleListRulesPortMatcher | undefined {
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

  public set internalValue(value: ForwardProxyPolicyRuleListRulesPortMatcher | undefined) {
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
export interface ForwardProxyPolicyRuleListRulesPrefixListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#ipv6_prefixes ForwardProxyPolicy#ipv6_prefixes}
  */
  readonly ipv6Prefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#prefixes ForwardProxyPolicy#prefixes}
  */
  readonly prefixes?: string[];
}

export function forwardProxyPolicyRuleListRulesPrefixListStructToTerraform(struct?: ForwardProxyPolicyRuleListRulesPrefixListStructOutputReference | ForwardProxyPolicyRuleListRulesPrefixListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv6Prefixes),
    prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefixes),
  }
}


export function forwardProxyPolicyRuleListRulesPrefixListStructToHclTerraform(struct?: ForwardProxyPolicyRuleListRulesPrefixListStructOutputReference | ForwardProxyPolicyRuleListRulesPrefixListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipv6Prefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ForwardProxyPolicyRuleListRulesPrefixListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ForwardProxyPolicyRuleListRulesPrefixListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6Prefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Prefixes = this._ipv6Prefixes;
    }
    if (this._prefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixes = this._prefixes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardProxyPolicyRuleListRulesPrefixListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv6Prefixes = undefined;
      this._prefixes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv6Prefixes = value.ipv6Prefixes;
      this._prefixes = value.prefixes;
    }
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

  // prefixes - computed: false, optional: true, required: false
  private _prefixes?: string[]; 
  public get prefixes() {
    return this.getListAttribute('prefixes');
  }
  public set prefixes(value: string[]) {
    this._prefixes = value;
  }
  public resetPrefixes() {
    this._prefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixesInput() {
    return this._prefixes;
  }
}
export interface ForwardProxyPolicyRuleListRulesTlsListTlsListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#exact_value ForwardProxyPolicy#exact_value}
  */
  readonly exactValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#regex_value ForwardProxyPolicy#regex_value}
  */
  readonly regexValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#suffix_value ForwardProxyPolicy#suffix_value}
  */
  readonly suffixValue?: string;
}

export function forwardProxyPolicyRuleListRulesTlsListTlsListStructToTerraform(struct?: ForwardProxyPolicyRuleListRulesTlsListTlsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_value: cdktf.stringToTerraform(struct!.exactValue),
    regex_value: cdktf.stringToTerraform(struct!.regexValue),
    suffix_value: cdktf.stringToTerraform(struct!.suffixValue),
  }
}


export function forwardProxyPolicyRuleListRulesTlsListTlsListStructToHclTerraform(struct?: ForwardProxyPolicyRuleListRulesTlsListTlsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_value: {
      value: cdktf.stringToHclTerraform(struct!.exactValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex_value: {
      value: cdktf.stringToHclTerraform(struct!.regexValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix_value: {
      value: cdktf.stringToHclTerraform(struct!.suffixValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ForwardProxyPolicyRuleListRulesTlsListTlsListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ForwardProxyPolicyRuleListRulesTlsListTlsListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValue = this._exactValue;
    }
    if (this._regexValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValue = this._regexValue;
    }
    if (this._suffixValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffixValue = this._suffixValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardProxyPolicyRuleListRulesTlsListTlsListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exactValue = undefined;
      this._regexValue = undefined;
      this._suffixValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exactValue = value.exactValue;
      this._regexValue = value.regexValue;
      this._suffixValue = value.suffixValue;
    }
  }

  // exact_value - computed: false, optional: true, required: false
  private _exactValue?: string; 
  public get exactValue() {
    return this.getStringAttribute('exact_value');
  }
  public set exactValue(value: string) {
    this._exactValue = value;
  }
  public resetExactValue() {
    this._exactValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValueInput() {
    return this._exactValue;
  }

  // regex_value - computed: false, optional: true, required: false
  private _regexValue?: string; 
  public get regexValue() {
    return this.getStringAttribute('regex_value');
  }
  public set regexValue(value: string) {
    this._regexValue = value;
  }
  public resetRegexValue() {
    this._regexValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValueInput() {
    return this._regexValue;
  }

  // suffix_value - computed: false, optional: true, required: false
  private _suffixValue?: string; 
  public get suffixValue() {
    return this.getStringAttribute('suffix_value');
  }
  public set suffixValue(value: string) {
    this._suffixValue = value;
  }
  public resetSuffixValue() {
    this._suffixValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixValueInput() {
    return this._suffixValue;
  }
}

export class ForwardProxyPolicyRuleListRulesTlsListTlsListStructList extends cdktf.ComplexList {
  public internalValue? : ForwardProxyPolicyRuleListRulesTlsListTlsListStruct[] | cdktf.IResolvable

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
  public get(index: number): ForwardProxyPolicyRuleListRulesTlsListTlsListStructOutputReference {
    return new ForwardProxyPolicyRuleListRulesTlsListTlsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ForwardProxyPolicyRuleListRulesTlsListStruct {
  /**
  * tls_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#tls_list ForwardProxyPolicy#tls_list}
  */
  readonly tlsList?: ForwardProxyPolicyRuleListRulesTlsListTlsListStruct[] | cdktf.IResolvable;
}

export function forwardProxyPolicyRuleListRulesTlsListStructToTerraform(struct?: ForwardProxyPolicyRuleListRulesTlsListStructOutputReference | ForwardProxyPolicyRuleListRulesTlsListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tls_list: cdktf.listMapper(forwardProxyPolicyRuleListRulesTlsListTlsListStructToTerraform, true)(struct!.tlsList),
  }
}


export function forwardProxyPolicyRuleListRulesTlsListStructToHclTerraform(struct?: ForwardProxyPolicyRuleListRulesTlsListStructOutputReference | ForwardProxyPolicyRuleListRulesTlsListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tls_list: {
      value: cdktf.listMapperHcl(forwardProxyPolicyRuleListRulesTlsListTlsListStructToHclTerraform, true)(struct!.tlsList),
      isBlock: true,
      type: "list",
      storageClassType: "ForwardProxyPolicyRuleListRulesTlsListTlsListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ForwardProxyPolicyRuleListRulesTlsListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ForwardProxyPolicyRuleListRulesTlsListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tlsList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsList = this._tlsList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardProxyPolicyRuleListRulesTlsListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tlsList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tlsList.internalValue = value.tlsList;
    }
  }

  // tls_list - computed: false, optional: true, required: false
  private _tlsList = new ForwardProxyPolicyRuleListRulesTlsListTlsListStructList(this, "tls_list", false);
  public get tlsList() {
    return this._tlsList;
  }
  public putTlsList(value: ForwardProxyPolicyRuleListRulesTlsListTlsListStruct[] | cdktf.IResolvable) {
    this._tlsList.internalValue = value;
  }
  public resetTlsList() {
    this._tlsList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsListInput() {
    return this._tlsList.internalValue;
  }
}
export interface ForwardProxyPolicyRuleListRulesUrlCategoryListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#url_categories ForwardProxyPolicy#url_categories}
  */
  readonly urlCategories: string[];
}

export function forwardProxyPolicyRuleListRulesUrlCategoryListStructToTerraform(struct?: ForwardProxyPolicyRuleListRulesUrlCategoryListStructOutputReference | ForwardProxyPolicyRuleListRulesUrlCategoryListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url_categories: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.urlCategories),
  }
}


export function forwardProxyPolicyRuleListRulesUrlCategoryListStructToHclTerraform(struct?: ForwardProxyPolicyRuleListRulesUrlCategoryListStructOutputReference | ForwardProxyPolicyRuleListRulesUrlCategoryListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    url_categories: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.urlCategories),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ForwardProxyPolicyRuleListRulesUrlCategoryListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ForwardProxyPolicyRuleListRulesUrlCategoryListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._urlCategories !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlCategories = this._urlCategories;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardProxyPolicyRuleListRulesUrlCategoryListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._urlCategories = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._urlCategories = value.urlCategories;
    }
  }

  // url_categories - computed: false, optional: false, required: true
  private _urlCategories?: string[]; 
  public get urlCategories() {
    return this.getListAttribute('url_categories');
  }
  public set urlCategories(value: string[]) {
    this._urlCategories = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlCategoriesInput() {
    return this._urlCategories;
  }
}
export interface ForwardProxyPolicyRuleListRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#action ForwardProxyPolicy#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#all_destinations ForwardProxyPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#all_sources ForwardProxyPolicy#all_sources}
  */
  readonly allSources?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#inside_sources ForwardProxyPolicy#inside_sources}
  */
  readonly insideSources?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#namespace ForwardProxyPolicy#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#no_http_connect_port ForwardProxyPolicy#no_http_connect_port}
  */
  readonly noHttpConnectPort?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#rule_description ForwardProxyPolicy#rule_description}
  */
  readonly ruleDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#rule_name ForwardProxyPolicy#rule_name}
  */
  readonly ruleName?: string;
  /**
  * dst_asn_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#dst_asn_list ForwardProxyPolicy#dst_asn_list}
  */
  readonly dstAsnList?: ForwardProxyPolicyRuleListRulesDstAsnListStruct;
  /**
  * dst_asn_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#dst_asn_set ForwardProxyPolicy#dst_asn_set}
  */
  readonly dstAsnSet?: ForwardProxyPolicyRuleListRulesDstAsnSet;
  /**
  * dst_ip_prefix_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#dst_ip_prefix_set ForwardProxyPolicy#dst_ip_prefix_set}
  */
  readonly dstIpPrefixSet?: ForwardProxyPolicyRuleListRulesDstIpPrefixSet;
  /**
  * dst_label_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#dst_label_selector ForwardProxyPolicy#dst_label_selector}
  */
  readonly dstLabelSelector?: ForwardProxyPolicyRuleListRulesDstLabelSelector;
  /**
  * dst_prefix_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#dst_prefix_list ForwardProxyPolicy#dst_prefix_list}
  */
  readonly dstPrefixList?: ForwardProxyPolicyRuleListRulesDstPrefixListStruct;
  /**
  * http_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#http_list ForwardProxyPolicy#http_list}
  */
  readonly httpList?: ForwardProxyPolicyRuleListRulesHttpListStruct;
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#interface ForwardProxyPolicy#interface}
  */
  readonly interface?: ForwardProxyPolicyRuleListRulesInterface;
  /**
  * ip_prefix_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#ip_prefix_set ForwardProxyPolicy#ip_prefix_set}
  */
  readonly ipPrefixSet?: ForwardProxyPolicyRuleListRulesIpPrefixSet;
  /**
  * label_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#label_selector ForwardProxyPolicy#label_selector}
  */
  readonly labelSelector?: ForwardProxyPolicyRuleListRulesLabelSelector;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#metadata ForwardProxyPolicy#metadata}
  */
  readonly metadata: ForwardProxyPolicyRuleListRulesMetadata;
  /**
  * port_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#port_matcher ForwardProxyPolicy#port_matcher}
  */
  readonly portMatcher?: ForwardProxyPolicyRuleListRulesPortMatcher;
  /**
  * prefix_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#prefix_list ForwardProxyPolicy#prefix_list}
  */
  readonly prefixList?: ForwardProxyPolicyRuleListRulesPrefixListStruct;
  /**
  * tls_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#tls_list ForwardProxyPolicy#tls_list}
  */
  readonly tlsList?: ForwardProxyPolicyRuleListRulesTlsListStruct;
  /**
  * url_category_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#url_category_list ForwardProxyPolicy#url_category_list}
  */
  readonly urlCategoryList?: ForwardProxyPolicyRuleListRulesUrlCategoryListStruct;
}

export function forwardProxyPolicyRuleListRulesToTerraform(struct?: ForwardProxyPolicyRuleListRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    all_destinations: cdktf.booleanToTerraform(struct!.allDestinations),
    all_sources: cdktf.booleanToTerraform(struct!.allSources),
    inside_sources: cdktf.booleanToTerraform(struct!.insideSources),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    no_http_connect_port: cdktf.booleanToTerraform(struct!.noHttpConnectPort),
    rule_description: cdktf.stringToTerraform(struct!.ruleDescription),
    rule_name: cdktf.stringToTerraform(struct!.ruleName),
    dst_asn_list: forwardProxyPolicyRuleListRulesDstAsnListStructToTerraform(struct!.dstAsnList),
    dst_asn_set: forwardProxyPolicyRuleListRulesDstAsnSetToTerraform(struct!.dstAsnSet),
    dst_ip_prefix_set: forwardProxyPolicyRuleListRulesDstIpPrefixSetToTerraform(struct!.dstIpPrefixSet),
    dst_label_selector: forwardProxyPolicyRuleListRulesDstLabelSelectorToTerraform(struct!.dstLabelSelector),
    dst_prefix_list: forwardProxyPolicyRuleListRulesDstPrefixListStructToTerraform(struct!.dstPrefixList),
    http_list: forwardProxyPolicyRuleListRulesHttpListStructToTerraform(struct!.httpList),
    interface: forwardProxyPolicyRuleListRulesInterfaceToTerraform(struct!.interface),
    ip_prefix_set: forwardProxyPolicyRuleListRulesIpPrefixSetToTerraform(struct!.ipPrefixSet),
    label_selector: forwardProxyPolicyRuleListRulesLabelSelectorToTerraform(struct!.labelSelector),
    metadata: forwardProxyPolicyRuleListRulesMetadataToTerraform(struct!.metadata),
    port_matcher: forwardProxyPolicyRuleListRulesPortMatcherToTerraform(struct!.portMatcher),
    prefix_list: forwardProxyPolicyRuleListRulesPrefixListStructToTerraform(struct!.prefixList),
    tls_list: forwardProxyPolicyRuleListRulesTlsListStructToTerraform(struct!.tlsList),
    url_category_list: forwardProxyPolicyRuleListRulesUrlCategoryListStructToTerraform(struct!.urlCategoryList),
  }
}


export function forwardProxyPolicyRuleListRulesToHclTerraform(struct?: ForwardProxyPolicyRuleListRules | cdktf.IResolvable): any {
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
    all_destinations: {
      value: cdktf.booleanToHclTerraform(struct!.allDestinations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    all_sources: {
      value: cdktf.booleanToHclTerraform(struct!.allSources),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    inside_sources: {
      value: cdktf.booleanToHclTerraform(struct!.insideSources),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_http_connect_port: {
      value: cdktf.booleanToHclTerraform(struct!.noHttpConnectPort),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rule_description: {
      value: cdktf.stringToHclTerraform(struct!.ruleDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_name: {
      value: cdktf.stringToHclTerraform(struct!.ruleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_asn_list: {
      value: forwardProxyPolicyRuleListRulesDstAsnListStructToHclTerraform(struct!.dstAsnList),
      isBlock: true,
      type: "list",
      storageClassType: "ForwardProxyPolicyRuleListRulesDstAsnListStructList",
    },
    dst_asn_set: {
      value: forwardProxyPolicyRuleListRulesDstAsnSetToHclTerraform(struct!.dstAsnSet),
      isBlock: true,
      type: "list",
      storageClassType: "ForwardProxyPolicyRuleListRulesDstAsnSetList",
    },
    dst_ip_prefix_set: {
      value: forwardProxyPolicyRuleListRulesDstIpPrefixSetToHclTerraform(struct!.dstIpPrefixSet),
      isBlock: true,
      type: "list",
      storageClassType: "ForwardProxyPolicyRuleListRulesDstIpPrefixSetList",
    },
    dst_label_selector: {
      value: forwardProxyPolicyRuleListRulesDstLabelSelectorToHclTerraform(struct!.dstLabelSelector),
      isBlock: true,
      type: "list",
      storageClassType: "ForwardProxyPolicyRuleListRulesDstLabelSelectorList",
    },
    dst_prefix_list: {
      value: forwardProxyPolicyRuleListRulesDstPrefixListStructToHclTerraform(struct!.dstPrefixList),
      isBlock: true,
      type: "list",
      storageClassType: "ForwardProxyPolicyRuleListRulesDstPrefixListStructList",
    },
    http_list: {
      value: forwardProxyPolicyRuleListRulesHttpListStructToHclTerraform(struct!.httpList),
      isBlock: true,
      type: "list",
      storageClassType: "ForwardProxyPolicyRuleListRulesHttpListStructList",
    },
    interface: {
      value: forwardProxyPolicyRuleListRulesInterfaceToHclTerraform(struct!.interface),
      isBlock: true,
      type: "list",
      storageClassType: "ForwardProxyPolicyRuleListRulesInterfaceList",
    },
    ip_prefix_set: {
      value: forwardProxyPolicyRuleListRulesIpPrefixSetToHclTerraform(struct!.ipPrefixSet),
      isBlock: true,
      type: "list",
      storageClassType: "ForwardProxyPolicyRuleListRulesIpPrefixSetList",
    },
    label_selector: {
      value: forwardProxyPolicyRuleListRulesLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "list",
      storageClassType: "ForwardProxyPolicyRuleListRulesLabelSelectorList",
    },
    metadata: {
      value: forwardProxyPolicyRuleListRulesMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "ForwardProxyPolicyRuleListRulesMetadataList",
    },
    port_matcher: {
      value: forwardProxyPolicyRuleListRulesPortMatcherToHclTerraform(struct!.portMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "ForwardProxyPolicyRuleListRulesPortMatcherList",
    },
    prefix_list: {
      value: forwardProxyPolicyRuleListRulesPrefixListStructToHclTerraform(struct!.prefixList),
      isBlock: true,
      type: "list",
      storageClassType: "ForwardProxyPolicyRuleListRulesPrefixListStructList",
    },
    tls_list: {
      value: forwardProxyPolicyRuleListRulesTlsListStructToHclTerraform(struct!.tlsList),
      isBlock: true,
      type: "list",
      storageClassType: "ForwardProxyPolicyRuleListRulesTlsListStructList",
    },
    url_category_list: {
      value: forwardProxyPolicyRuleListRulesUrlCategoryListStructToHclTerraform(struct!.urlCategoryList),
      isBlock: true,
      type: "list",
      storageClassType: "ForwardProxyPolicyRuleListRulesUrlCategoryListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ForwardProxyPolicyRuleListRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ForwardProxyPolicyRuleListRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._allDestinations !== undefined) {
      hasAnyValues = true;
      internalValueResult.allDestinations = this._allDestinations;
    }
    if (this._allSources !== undefined) {
      hasAnyValues = true;
      internalValueResult.allSources = this._allSources;
    }
    if (this._insideSources !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideSources = this._insideSources;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._noHttpConnectPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.noHttpConnectPort = this._noHttpConnectPort;
    }
    if (this._ruleDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleDescription = this._ruleDescription;
    }
    if (this._ruleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleName = this._ruleName;
    }
    if (this._dstAsnList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstAsnList = this._dstAsnList?.internalValue;
    }
    if (this._dstAsnSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstAsnSet = this._dstAsnSet?.internalValue;
    }
    if (this._dstIpPrefixSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIpPrefixSet = this._dstIpPrefixSet?.internalValue;
    }
    if (this._dstLabelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstLabelSelector = this._dstLabelSelector?.internalValue;
    }
    if (this._dstPrefixList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstPrefixList = this._dstPrefixList?.internalValue;
    }
    if (this._httpList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpList = this._httpList?.internalValue;
    }
    if (this._interface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface?.internalValue;
    }
    if (this._ipPrefixSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPrefixSet = this._ipPrefixSet?.internalValue;
    }
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._portMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portMatcher = this._portMatcher?.internalValue;
    }
    if (this._prefixList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixList = this._prefixList?.internalValue;
    }
    if (this._tlsList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsList = this._tlsList?.internalValue;
    }
    if (this._urlCategoryList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlCategoryList = this._urlCategoryList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardProxyPolicyRuleListRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._allDestinations = undefined;
      this._allSources = undefined;
      this._insideSources = undefined;
      this._namespace = undefined;
      this._noHttpConnectPort = undefined;
      this._ruleDescription = undefined;
      this._ruleName = undefined;
      this._dstAsnList.internalValue = undefined;
      this._dstAsnSet.internalValue = undefined;
      this._dstIpPrefixSet.internalValue = undefined;
      this._dstLabelSelector.internalValue = undefined;
      this._dstPrefixList.internalValue = undefined;
      this._httpList.internalValue = undefined;
      this._interface.internalValue = undefined;
      this._ipPrefixSet.internalValue = undefined;
      this._labelSelector.internalValue = undefined;
      this._metadata.internalValue = undefined;
      this._portMatcher.internalValue = undefined;
      this._prefixList.internalValue = undefined;
      this._tlsList.internalValue = undefined;
      this._urlCategoryList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._allDestinations = value.allDestinations;
      this._allSources = value.allSources;
      this._insideSources = value.insideSources;
      this._namespace = value.namespace;
      this._noHttpConnectPort = value.noHttpConnectPort;
      this._ruleDescription = value.ruleDescription;
      this._ruleName = value.ruleName;
      this._dstAsnList.internalValue = value.dstAsnList;
      this._dstAsnSet.internalValue = value.dstAsnSet;
      this._dstIpPrefixSet.internalValue = value.dstIpPrefixSet;
      this._dstLabelSelector.internalValue = value.dstLabelSelector;
      this._dstPrefixList.internalValue = value.dstPrefixList;
      this._httpList.internalValue = value.httpList;
      this._interface.internalValue = value.interface;
      this._ipPrefixSet.internalValue = value.ipPrefixSet;
      this._labelSelector.internalValue = value.labelSelector;
      this._metadata.internalValue = value.metadata;
      this._portMatcher.internalValue = value.portMatcher;
      this._prefixList.internalValue = value.prefixList;
      this._tlsList.internalValue = value.tlsList;
      this._urlCategoryList.internalValue = value.urlCategoryList;
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

  // all_destinations - computed: false, optional: true, required: false
  private _allDestinations?: boolean | cdktf.IResolvable; 
  public get allDestinations() {
    return this.getBooleanAttribute('all_destinations');
  }
  public set allDestinations(value: boolean | cdktf.IResolvable) {
    this._allDestinations = value;
  }
  public resetAllDestinations() {
    this._allDestinations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allDestinationsInput() {
    return this._allDestinations;
  }

  // all_sources - computed: false, optional: true, required: false
  private _allSources?: boolean | cdktf.IResolvable; 
  public get allSources() {
    return this.getBooleanAttribute('all_sources');
  }
  public set allSources(value: boolean | cdktf.IResolvable) {
    this._allSources = value;
  }
  public resetAllSources() {
    this._allSources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allSourcesInput() {
    return this._allSources;
  }

  // inside_sources - computed: false, optional: true, required: false
  private _insideSources?: boolean | cdktf.IResolvable; 
  public get insideSources() {
    return this.getBooleanAttribute('inside_sources');
  }
  public set insideSources(value: boolean | cdktf.IResolvable) {
    this._insideSources = value;
  }
  public resetInsideSources() {
    this._insideSources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideSourcesInput() {
    return this._insideSources;
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

  // no_http_connect_port - computed: false, optional: true, required: false
  private _noHttpConnectPort?: boolean | cdktf.IResolvable; 
  public get noHttpConnectPort() {
    return this.getBooleanAttribute('no_http_connect_port');
  }
  public set noHttpConnectPort(value: boolean | cdktf.IResolvable) {
    this._noHttpConnectPort = value;
  }
  public resetNoHttpConnectPort() {
    this._noHttpConnectPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noHttpConnectPortInput() {
    return this._noHttpConnectPort;
  }

  // rule_description - computed: false, optional: true, required: false
  private _ruleDescription?: string; 
  public get ruleDescription() {
    return this.getStringAttribute('rule_description');
  }
  public set ruleDescription(value: string) {
    this._ruleDescription = value;
  }
  public resetRuleDescription() {
    this._ruleDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleDescriptionInput() {
    return this._ruleDescription;
  }

  // rule_name - computed: false, optional: true, required: false
  private _ruleName?: string; 
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
  public set ruleName(value: string) {
    this._ruleName = value;
  }
  public resetRuleName() {
    this._ruleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNameInput() {
    return this._ruleName;
  }

  // dst_asn_list - computed: false, optional: true, required: false
  private _dstAsnList = new ForwardProxyPolicyRuleListRulesDstAsnListStructOutputReference(this, "dst_asn_list");
  public get dstAsnList() {
    return this._dstAsnList;
  }
  public putDstAsnList(value: ForwardProxyPolicyRuleListRulesDstAsnListStruct) {
    this._dstAsnList.internalValue = value;
  }
  public resetDstAsnList() {
    this._dstAsnList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstAsnListInput() {
    return this._dstAsnList.internalValue;
  }

  // dst_asn_set - computed: false, optional: true, required: false
  private _dstAsnSet = new ForwardProxyPolicyRuleListRulesDstAsnSetOutputReference(this, "dst_asn_set");
  public get dstAsnSet() {
    return this._dstAsnSet;
  }
  public putDstAsnSet(value: ForwardProxyPolicyRuleListRulesDstAsnSet) {
    this._dstAsnSet.internalValue = value;
  }
  public resetDstAsnSet() {
    this._dstAsnSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstAsnSetInput() {
    return this._dstAsnSet.internalValue;
  }

  // dst_ip_prefix_set - computed: false, optional: true, required: false
  private _dstIpPrefixSet = new ForwardProxyPolicyRuleListRulesDstIpPrefixSetOutputReference(this, "dst_ip_prefix_set");
  public get dstIpPrefixSet() {
    return this._dstIpPrefixSet;
  }
  public putDstIpPrefixSet(value: ForwardProxyPolicyRuleListRulesDstIpPrefixSet) {
    this._dstIpPrefixSet.internalValue = value;
  }
  public resetDstIpPrefixSet() {
    this._dstIpPrefixSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIpPrefixSetInput() {
    return this._dstIpPrefixSet.internalValue;
  }

  // dst_label_selector - computed: false, optional: true, required: false
  private _dstLabelSelector = new ForwardProxyPolicyRuleListRulesDstLabelSelectorOutputReference(this, "dst_label_selector");
  public get dstLabelSelector() {
    return this._dstLabelSelector;
  }
  public putDstLabelSelector(value: ForwardProxyPolicyRuleListRulesDstLabelSelector) {
    this._dstLabelSelector.internalValue = value;
  }
  public resetDstLabelSelector() {
    this._dstLabelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstLabelSelectorInput() {
    return this._dstLabelSelector.internalValue;
  }

  // dst_prefix_list - computed: false, optional: true, required: false
  private _dstPrefixList = new ForwardProxyPolicyRuleListRulesDstPrefixListStructOutputReference(this, "dst_prefix_list");
  public get dstPrefixList() {
    return this._dstPrefixList;
  }
  public putDstPrefixList(value: ForwardProxyPolicyRuleListRulesDstPrefixListStruct) {
    this._dstPrefixList.internalValue = value;
  }
  public resetDstPrefixList() {
    this._dstPrefixList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstPrefixListInput() {
    return this._dstPrefixList.internalValue;
  }

  // http_list - computed: false, optional: true, required: false
  private _httpList = new ForwardProxyPolicyRuleListRulesHttpListStructOutputReference(this, "http_list");
  public get httpList() {
    return this._httpList;
  }
  public putHttpList(value: ForwardProxyPolicyRuleListRulesHttpListStruct) {
    this._httpList.internalValue = value;
  }
  public resetHttpList() {
    this._httpList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpListInput() {
    return this._httpList.internalValue;
  }

  // interface - computed: false, optional: true, required: false
  private _interface = new ForwardProxyPolicyRuleListRulesInterfaceOutputReference(this, "interface");
  public get interface() {
    return this._interface;
  }
  public putInterface(value: ForwardProxyPolicyRuleListRulesInterface) {
    this._interface.internalValue = value;
  }
  public resetInterface() {
    this._interface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
  }

  // ip_prefix_set - computed: false, optional: true, required: false
  private _ipPrefixSet = new ForwardProxyPolicyRuleListRulesIpPrefixSetOutputReference(this, "ip_prefix_set");
  public get ipPrefixSet() {
    return this._ipPrefixSet;
  }
  public putIpPrefixSet(value: ForwardProxyPolicyRuleListRulesIpPrefixSet) {
    this._ipPrefixSet.internalValue = value;
  }
  public resetIpPrefixSet() {
    this._ipPrefixSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPrefixSetInput() {
    return this._ipPrefixSet.internalValue;
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new ForwardProxyPolicyRuleListRulesLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: ForwardProxyPolicyRuleListRulesLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new ForwardProxyPolicyRuleListRulesMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: ForwardProxyPolicyRuleListRulesMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // port_matcher - computed: false, optional: true, required: false
  private _portMatcher = new ForwardProxyPolicyRuleListRulesPortMatcherOutputReference(this, "port_matcher");
  public get portMatcher() {
    return this._portMatcher;
  }
  public putPortMatcher(value: ForwardProxyPolicyRuleListRulesPortMatcher) {
    this._portMatcher.internalValue = value;
  }
  public resetPortMatcher() {
    this._portMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portMatcherInput() {
    return this._portMatcher.internalValue;
  }

  // prefix_list - computed: false, optional: true, required: false
  private _prefixList = new ForwardProxyPolicyRuleListRulesPrefixListStructOutputReference(this, "prefix_list");
  public get prefixList() {
    return this._prefixList;
  }
  public putPrefixList(value: ForwardProxyPolicyRuleListRulesPrefixListStruct) {
    this._prefixList.internalValue = value;
  }
  public resetPrefixList() {
    this._prefixList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListInput() {
    return this._prefixList.internalValue;
  }

  // tls_list - computed: false, optional: true, required: false
  private _tlsList = new ForwardProxyPolicyRuleListRulesTlsListStructOutputReference(this, "tls_list");
  public get tlsList() {
    return this._tlsList;
  }
  public putTlsList(value: ForwardProxyPolicyRuleListRulesTlsListStruct) {
    this._tlsList.internalValue = value;
  }
  public resetTlsList() {
    this._tlsList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsListInput() {
    return this._tlsList.internalValue;
  }

  // url_category_list - computed: false, optional: true, required: false
  private _urlCategoryList = new ForwardProxyPolicyRuleListRulesUrlCategoryListStructOutputReference(this, "url_category_list");
  public get urlCategoryList() {
    return this._urlCategoryList;
  }
  public putUrlCategoryList(value: ForwardProxyPolicyRuleListRulesUrlCategoryListStruct) {
    this._urlCategoryList.internalValue = value;
  }
  public resetUrlCategoryList() {
    this._urlCategoryList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlCategoryListInput() {
    return this._urlCategoryList.internalValue;
  }
}

export class ForwardProxyPolicyRuleListRulesList extends cdktf.ComplexList {
  public internalValue? : ForwardProxyPolicyRuleListRules[] | cdktf.IResolvable

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
  public get(index: number): ForwardProxyPolicyRuleListRulesOutputReference {
    return new ForwardProxyPolicyRuleListRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ForwardProxyPolicyRuleListStruct {
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#rules ForwardProxyPolicy#rules}
  */
  readonly rules: ForwardProxyPolicyRuleListRules[] | cdktf.IResolvable;
}

export function forwardProxyPolicyRuleListStructToTerraform(struct?: ForwardProxyPolicyRuleListStructOutputReference | ForwardProxyPolicyRuleListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rules: cdktf.listMapper(forwardProxyPolicyRuleListRulesToTerraform, true)(struct!.rules),
  }
}


export function forwardProxyPolicyRuleListStructToHclTerraform(struct?: ForwardProxyPolicyRuleListStructOutputReference | ForwardProxyPolicyRuleListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rules: {
      value: cdktf.listMapperHcl(forwardProxyPolicyRuleListRulesToHclTerraform, true)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "ForwardProxyPolicyRuleListRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ForwardProxyPolicyRuleListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ForwardProxyPolicyRuleListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardProxyPolicyRuleListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rules.internalValue = value.rules;
    }
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new ForwardProxyPolicyRuleListRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: ForwardProxyPolicyRuleListRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}
export interface ForwardProxyPolicySegmentPolicyDstSegmentsSegments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#name ForwardProxyPolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#namespace ForwardProxyPolicy#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#tenant ForwardProxyPolicy#tenant}
  */
  readonly tenant?: string;
}

export function forwardProxyPolicySegmentPolicyDstSegmentsSegmentsToTerraform(struct?: ForwardProxyPolicySegmentPolicyDstSegmentsSegments | cdktf.IResolvable): any {
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


export function forwardProxyPolicySegmentPolicyDstSegmentsSegmentsToHclTerraform(struct?: ForwardProxyPolicySegmentPolicyDstSegmentsSegments | cdktf.IResolvable): any {
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

export class ForwardProxyPolicySegmentPolicyDstSegmentsSegmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ForwardProxyPolicySegmentPolicyDstSegmentsSegments | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ForwardProxyPolicySegmentPolicyDstSegmentsSegments | cdktf.IResolvable | undefined) {
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

export class ForwardProxyPolicySegmentPolicyDstSegmentsSegmentsList extends cdktf.ComplexList {
  public internalValue? : ForwardProxyPolicySegmentPolicyDstSegmentsSegments[] | cdktf.IResolvable

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
  public get(index: number): ForwardProxyPolicySegmentPolicyDstSegmentsSegmentsOutputReference {
    return new ForwardProxyPolicySegmentPolicyDstSegmentsSegmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ForwardProxyPolicySegmentPolicyDstSegments {
  /**
  * segments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#segments ForwardProxyPolicy#segments}
  */
  readonly segments: ForwardProxyPolicySegmentPolicyDstSegmentsSegments[] | cdktf.IResolvable;
}

export function forwardProxyPolicySegmentPolicyDstSegmentsToTerraform(struct?: ForwardProxyPolicySegmentPolicyDstSegmentsOutputReference | ForwardProxyPolicySegmentPolicyDstSegments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    segments: cdktf.listMapper(forwardProxyPolicySegmentPolicyDstSegmentsSegmentsToTerraform, true)(struct!.segments),
  }
}


export function forwardProxyPolicySegmentPolicyDstSegmentsToHclTerraform(struct?: ForwardProxyPolicySegmentPolicyDstSegmentsOutputReference | ForwardProxyPolicySegmentPolicyDstSegments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    segments: {
      value: cdktf.listMapperHcl(forwardProxyPolicySegmentPolicyDstSegmentsSegmentsToHclTerraform, true)(struct!.segments),
      isBlock: true,
      type: "list",
      storageClassType: "ForwardProxyPolicySegmentPolicyDstSegmentsSegmentsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ForwardProxyPolicySegmentPolicyDstSegmentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ForwardProxyPolicySegmentPolicyDstSegments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._segments?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.segments = this._segments?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardProxyPolicySegmentPolicyDstSegments | undefined) {
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
  private _segments = new ForwardProxyPolicySegmentPolicyDstSegmentsSegmentsList(this, "segments", false);
  public get segments() {
    return this._segments;
  }
  public putSegments(value: ForwardProxyPolicySegmentPolicyDstSegmentsSegments[] | cdktf.IResolvable) {
    this._segments.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentsInput() {
    return this._segments.internalValue;
  }
}
export interface ForwardProxyPolicySegmentPolicySrcSegmentsSegments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#name ForwardProxyPolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#namespace ForwardProxyPolicy#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#tenant ForwardProxyPolicy#tenant}
  */
  readonly tenant?: string;
}

export function forwardProxyPolicySegmentPolicySrcSegmentsSegmentsToTerraform(struct?: ForwardProxyPolicySegmentPolicySrcSegmentsSegments | cdktf.IResolvable): any {
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


export function forwardProxyPolicySegmentPolicySrcSegmentsSegmentsToHclTerraform(struct?: ForwardProxyPolicySegmentPolicySrcSegmentsSegments | cdktf.IResolvable): any {
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

export class ForwardProxyPolicySegmentPolicySrcSegmentsSegmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ForwardProxyPolicySegmentPolicySrcSegmentsSegments | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ForwardProxyPolicySegmentPolicySrcSegmentsSegments | cdktf.IResolvable | undefined) {
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

export class ForwardProxyPolicySegmentPolicySrcSegmentsSegmentsList extends cdktf.ComplexList {
  public internalValue? : ForwardProxyPolicySegmentPolicySrcSegmentsSegments[] | cdktf.IResolvable

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
  public get(index: number): ForwardProxyPolicySegmentPolicySrcSegmentsSegmentsOutputReference {
    return new ForwardProxyPolicySegmentPolicySrcSegmentsSegmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ForwardProxyPolicySegmentPolicySrcSegments {
  /**
  * segments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#segments ForwardProxyPolicy#segments}
  */
  readonly segments: ForwardProxyPolicySegmentPolicySrcSegmentsSegments[] | cdktf.IResolvable;
}

export function forwardProxyPolicySegmentPolicySrcSegmentsToTerraform(struct?: ForwardProxyPolicySegmentPolicySrcSegmentsOutputReference | ForwardProxyPolicySegmentPolicySrcSegments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    segments: cdktf.listMapper(forwardProxyPolicySegmentPolicySrcSegmentsSegmentsToTerraform, true)(struct!.segments),
  }
}


export function forwardProxyPolicySegmentPolicySrcSegmentsToHclTerraform(struct?: ForwardProxyPolicySegmentPolicySrcSegmentsOutputReference | ForwardProxyPolicySegmentPolicySrcSegments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    segments: {
      value: cdktf.listMapperHcl(forwardProxyPolicySegmentPolicySrcSegmentsSegmentsToHclTerraform, true)(struct!.segments),
      isBlock: true,
      type: "list",
      storageClassType: "ForwardProxyPolicySegmentPolicySrcSegmentsSegmentsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ForwardProxyPolicySegmentPolicySrcSegmentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ForwardProxyPolicySegmentPolicySrcSegments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._segments?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.segments = this._segments?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardProxyPolicySegmentPolicySrcSegments | undefined) {
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
  private _segments = new ForwardProxyPolicySegmentPolicySrcSegmentsSegmentsList(this, "segments", false);
  public get segments() {
    return this._segments;
  }
  public putSegments(value: ForwardProxyPolicySegmentPolicySrcSegmentsSegments[] | cdktf.IResolvable) {
    this._segments.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentsInput() {
    return this._segments.internalValue;
  }
}
export interface ForwardProxyPolicySegmentPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#dst_any ForwardProxyPolicy#dst_any}
  */
  readonly dstAny?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#intra_segment ForwardProxyPolicy#intra_segment}
  */
  readonly intraSegment?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#src_any ForwardProxyPolicy#src_any}
  */
  readonly srcAny?: boolean | cdktf.IResolvable;
  /**
  * dst_segments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#dst_segments ForwardProxyPolicy#dst_segments}
  */
  readonly dstSegments?: ForwardProxyPolicySegmentPolicyDstSegments;
  /**
  * src_segments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#src_segments ForwardProxyPolicy#src_segments}
  */
  readonly srcSegments?: ForwardProxyPolicySegmentPolicySrcSegments;
}

export function forwardProxyPolicySegmentPolicyToTerraform(struct?: ForwardProxyPolicySegmentPolicyOutputReference | ForwardProxyPolicySegmentPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dst_any: cdktf.booleanToTerraform(struct!.dstAny),
    intra_segment: cdktf.booleanToTerraform(struct!.intraSegment),
    src_any: cdktf.booleanToTerraform(struct!.srcAny),
    dst_segments: forwardProxyPolicySegmentPolicyDstSegmentsToTerraform(struct!.dstSegments),
    src_segments: forwardProxyPolicySegmentPolicySrcSegmentsToTerraform(struct!.srcSegments),
  }
}


export function forwardProxyPolicySegmentPolicyToHclTerraform(struct?: ForwardProxyPolicySegmentPolicyOutputReference | ForwardProxyPolicySegmentPolicy): any {
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
      value: forwardProxyPolicySegmentPolicyDstSegmentsToHclTerraform(struct!.dstSegments),
      isBlock: true,
      type: "list",
      storageClassType: "ForwardProxyPolicySegmentPolicyDstSegmentsList",
    },
    src_segments: {
      value: forwardProxyPolicySegmentPolicySrcSegmentsToHclTerraform(struct!.srcSegments),
      isBlock: true,
      type: "list",
      storageClassType: "ForwardProxyPolicySegmentPolicySrcSegmentsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ForwardProxyPolicySegmentPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ForwardProxyPolicySegmentPolicy | undefined {
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

  public set internalValue(value: ForwardProxyPolicySegmentPolicy | undefined) {
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
  private _dstSegments = new ForwardProxyPolicySegmentPolicyDstSegmentsOutputReference(this, "dst_segments");
  public get dstSegments() {
    return this._dstSegments;
  }
  public putDstSegments(value: ForwardProxyPolicySegmentPolicyDstSegments) {
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
  private _srcSegments = new ForwardProxyPolicySegmentPolicySrcSegmentsOutputReference(this, "src_segments");
  public get srcSegments() {
    return this._srcSegments;
  }
  public putSrcSegments(value: ForwardProxyPolicySegmentPolicySrcSegments) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy volterra_forward_proxy_policy}
*/
export class ForwardProxyPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_forward_proxy_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ForwardProxyPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ForwardProxyPolicy to import
  * @param importFromId The id of the existing ForwardProxyPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ForwardProxyPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_forward_proxy_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/forward_proxy_policy volterra_forward_proxy_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ForwardProxyPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: ForwardProxyPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_forward_proxy_policy',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.46',
        providerVersionConstraint: '0.11.46'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowAll = config.allowAll;
    this._annotations = config.annotations;
    this._anyProxy = config.anyProxy;
    this._description = config.description;
    this._disable = config.disable;
    this._drpHttpConnect = config.drpHttpConnect;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._namespace = config.namespace;
    this._allowList.internalValue = config.allowList;
    this._denyList.internalValue = config.denyList;
    this._networkConnector.internalValue = config.networkConnector;
    this._proxyLabelSelector.internalValue = config.proxyLabelSelector;
    this._ruleList.internalValue = config.ruleList;
    this._segmentPolicy.internalValue = config.segmentPolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_all - computed: false, optional: true, required: false
  private _allowAll?: boolean | cdktf.IResolvable; 
  public get allowAll() {
    return this.getBooleanAttribute('allow_all');
  }
  public set allowAll(value: boolean | cdktf.IResolvable) {
    this._allowAll = value;
  }
  public resetAllowAll() {
    this._allowAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAllInput() {
    return this._allowAll;
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

  // any_proxy - computed: false, optional: true, required: false
  private _anyProxy?: boolean | cdktf.IResolvable; 
  public get anyProxy() {
    return this.getBooleanAttribute('any_proxy');
  }
  public set anyProxy(value: boolean | cdktf.IResolvable) {
    this._anyProxy = value;
  }
  public resetAnyProxy() {
    this._anyProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyProxyInput() {
    return this._anyProxy;
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

  // drp_http_connect - computed: false, optional: true, required: false
  private _drpHttpConnect?: boolean | cdktf.IResolvable; 
  public get drpHttpConnect() {
    return this.getBooleanAttribute('drp_http_connect');
  }
  public set drpHttpConnect(value: boolean | cdktf.IResolvable) {
    this._drpHttpConnect = value;
  }
  public resetDrpHttpConnect() {
    this._drpHttpConnect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drpHttpConnectInput() {
    return this._drpHttpConnect;
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

  // allow_list - computed: false, optional: true, required: false
  private _allowList = new ForwardProxyPolicyAllowListStructOutputReference(this, "allow_list");
  public get allowList() {
    return this._allowList;
  }
  public putAllowList(value: ForwardProxyPolicyAllowListStruct) {
    this._allowList.internalValue = value;
  }
  public resetAllowList() {
    this._allowList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowListInput() {
    return this._allowList.internalValue;
  }

  // deny_list - computed: false, optional: true, required: false
  private _denyList = new ForwardProxyPolicyDenyListStructOutputReference(this, "deny_list");
  public get denyList() {
    return this._denyList;
  }
  public putDenyList(value: ForwardProxyPolicyDenyListStruct) {
    this._denyList.internalValue = value;
  }
  public resetDenyList() {
    this._denyList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyListInput() {
    return this._denyList.internalValue;
  }

  // network_connector - computed: false, optional: true, required: false
  private _networkConnector = new ForwardProxyPolicyNetworkConnectorOutputReference(this, "network_connector");
  public get networkConnector() {
    return this._networkConnector;
  }
  public putNetworkConnector(value: ForwardProxyPolicyNetworkConnector) {
    this._networkConnector.internalValue = value;
  }
  public resetNetworkConnector() {
    this._networkConnector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConnectorInput() {
    return this._networkConnector.internalValue;
  }

  // proxy_label_selector - computed: false, optional: true, required: false
  private _proxyLabelSelector = new ForwardProxyPolicyProxyLabelSelectorOutputReference(this, "proxy_label_selector");
  public get proxyLabelSelector() {
    return this._proxyLabelSelector;
  }
  public putProxyLabelSelector(value: ForwardProxyPolicyProxyLabelSelector) {
    this._proxyLabelSelector.internalValue = value;
  }
  public resetProxyLabelSelector() {
    this._proxyLabelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyLabelSelectorInput() {
    return this._proxyLabelSelector.internalValue;
  }

  // rule_list - computed: false, optional: true, required: false
  private _ruleList = new ForwardProxyPolicyRuleListStructOutputReference(this, "rule_list");
  public get ruleList() {
    return this._ruleList;
  }
  public putRuleList(value: ForwardProxyPolicyRuleListStruct) {
    this._ruleList.internalValue = value;
  }
  public resetRuleList() {
    this._ruleList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleListInput() {
    return this._ruleList.internalValue;
  }

  // segment_policy - computed: false, optional: true, required: false
  private _segmentPolicy = new ForwardProxyPolicySegmentPolicyOutputReference(this, "segment_policy");
  public get segmentPolicy() {
    return this._segmentPolicy;
  }
  public putSegmentPolicy(value: ForwardProxyPolicySegmentPolicy) {
    this._segmentPolicy.internalValue = value;
  }
  public resetSegmentPolicy() {
    this._segmentPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentPolicyInput() {
    return this._segmentPolicy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_all: cdktf.booleanToTerraform(this._allowAll),
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      any_proxy: cdktf.booleanToTerraform(this._anyProxy),
      description: cdktf.stringToTerraform(this._description),
      disable: cdktf.booleanToTerraform(this._disable),
      drp_http_connect: cdktf.booleanToTerraform(this._drpHttpConnect),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      allow_list: forwardProxyPolicyAllowListStructToTerraform(this._allowList.internalValue),
      deny_list: forwardProxyPolicyDenyListStructToTerraform(this._denyList.internalValue),
      network_connector: forwardProxyPolicyNetworkConnectorToTerraform(this._networkConnector.internalValue),
      proxy_label_selector: forwardProxyPolicyProxyLabelSelectorToTerraform(this._proxyLabelSelector.internalValue),
      rule_list: forwardProxyPolicyRuleListStructToTerraform(this._ruleList.internalValue),
      segment_policy: forwardProxyPolicySegmentPolicyToTerraform(this._segmentPolicy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_all: {
        value: cdktf.booleanToHclTerraform(this._allowAll),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      any_proxy: {
        value: cdktf.booleanToHclTerraform(this._anyProxy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      drp_http_connect: {
        value: cdktf.booleanToHclTerraform(this._drpHttpConnect),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      allow_list: {
        value: forwardProxyPolicyAllowListStructToHclTerraform(this._allowList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ForwardProxyPolicyAllowListStructList",
      },
      deny_list: {
        value: forwardProxyPolicyDenyListStructToHclTerraform(this._denyList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ForwardProxyPolicyDenyListStructList",
      },
      network_connector: {
        value: forwardProxyPolicyNetworkConnectorToHclTerraform(this._networkConnector.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ForwardProxyPolicyNetworkConnectorList",
      },
      proxy_label_selector: {
        value: forwardProxyPolicyProxyLabelSelectorToHclTerraform(this._proxyLabelSelector.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ForwardProxyPolicyProxyLabelSelectorList",
      },
      rule_list: {
        value: forwardProxyPolicyRuleListStructToHclTerraform(this._ruleList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ForwardProxyPolicyRuleListStructList",
      },
      segment_policy: {
        value: forwardProxyPolicySegmentPolicyToHclTerraform(this._segmentPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ForwardProxyPolicySegmentPolicyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
