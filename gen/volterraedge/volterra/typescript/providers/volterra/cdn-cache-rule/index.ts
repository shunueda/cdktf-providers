// https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_cache_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CdnCacheRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_cache_rule#annotations CdnCacheRule#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_cache_rule#description CdnCacheRule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_cache_rule#disable CdnCacheRule#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_cache_rule#id CdnCacheRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_cache_rule#labels CdnCacheRule#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_cache_rule#name CdnCacheRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_cache_rule#namespace CdnCacheRule#namespace}
  */
  readonly namespace: string;
  /**
  * cache_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_cache_rule#cache_rules CdnCacheRule#cache_rules}
  */
  readonly cacheRules?: CdnCacheRuleCacheRules;
}
export interface CdnCacheRuleCacheRulesEligibleForCacheSchemeProxyHostRequestUri {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_cache_rule#cache_override CdnCacheRule#cache_override}
  */
  readonly cacheOverride?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_cache_rule#cache_ttl CdnCacheRule#cache_ttl}
  */
  readonly cacheTtl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_cache_rule#ignore_response_cookie CdnCacheRule#ignore_response_cookie}
  */
  readonly ignoreResponseCookie?: boolean | cdktf.IResolvable;
}

export function cdnCacheRuleCacheRulesEligibleForCacheSchemeProxyHostRequestUriToTerraform(struct?: CdnCacheRuleCacheRulesEligibleForCacheSchemeProxyHostRequestUriOutputReference | CdnCacheRuleCacheRulesEligibleForCacheSchemeProxyHostRequestUri): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_override: cdktf.booleanToTerraform(struct!.cacheOverride),
    cache_ttl: cdktf.stringToTerraform(struct!.cacheTtl),
    ignore_response_cookie: cdktf.booleanToTerraform(struct!.ignoreResponseCookie),
  }
}


export function cdnCacheRuleCacheRulesEligibleForCacheSchemeProxyHostRequestUriToHclTerraform(struct?: CdnCacheRuleCacheRulesEligibleForCacheSchemeProxyHostRequestUriOutputReference | CdnCacheRuleCacheRulesEligibleForCacheSchemeProxyHostRequestUri): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_override: {
      value: cdktf.booleanToHclTerraform(struct!.cacheOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cache_ttl: {
      value: cdktf.stringToHclTerraform(struct!.cacheTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_response_cookie: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreResponseCookie),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnCacheRuleCacheRulesEligibleForCacheSchemeProxyHostRequestUriOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnCacheRuleCacheRulesEligibleForCacheSchemeProxyHostRequestUri | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheOverride = this._cacheOverride;
    }
    if (this._cacheTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheTtl = this._cacheTtl;
    }
    if (this._ignoreResponseCookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreResponseCookie = this._ignoreResponseCookie;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnCacheRuleCacheRulesEligibleForCacheSchemeProxyHostRequestUri | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cacheOverride = undefined;
      this._cacheTtl = undefined;
      this._ignoreResponseCookie = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cacheOverride = value.cacheOverride;
      this._cacheTtl = value.cacheTtl;
      this._ignoreResponseCookie = value.ignoreResponseCookie;
    }
  }

  // cache_override - computed: false, optional: true, required: false
  private _cacheOverride?: boolean | cdktf.IResolvable; 
  public get cacheOverride() {
    return this.getBooleanAttribute('cache_override');
  }
  public set cacheOverride(value: boolean | cdktf.IResolvable) {
    this._cacheOverride = value;
  }
  public resetCacheOverride() {
    this._cacheOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheOverrideInput() {
    return this._cacheOverride;
  }

  // cache_ttl - computed: false, optional: false, required: true
  private _cacheTtl?: string; 
  public get cacheTtl() {
    return this.getStringAttribute('cache_ttl');
  }
  public set cacheTtl(value: string) {
    this._cacheTtl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTtlInput() {
    return this._cacheTtl;
  }

  // ignore_response_cookie - computed: false, optional: true, required: false
  private _ignoreResponseCookie?: boolean | cdktf.IResolvable; 
  public get ignoreResponseCookie() {
    return this.getBooleanAttribute('ignore_response_cookie');
  }
  public set ignoreResponseCookie(value: boolean | cdktf.IResolvable) {
    this._ignoreResponseCookie = value;
  }
  public resetIgnoreResponseCookie() {
    this._ignoreResponseCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreResponseCookieInput() {
    return this._ignoreResponseCookie;
  }
}
export interface CdnCacheRuleCacheRulesEligibleForCacheSchemeProxyHostUri {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_cache_rule#cache_override CdnCacheRule#cache_override}
  */
  readonly cacheOverride?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_cache_rule#cache_ttl CdnCacheRule#cache_ttl}
  */
  readonly cacheTtl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_cache_rule#ignore_response_cookie CdnCacheRule#ignore_response_cookie}
  */
  readonly ignoreResponseCookie?: boolean | cdktf.IResolvable;
}

export function cdnCacheRuleCacheRulesEligibleForCacheSchemeProxyHostUriToTerraform(struct?: CdnCacheRuleCacheRulesEligibleForCacheSchemeProxyHostUriOutputReference | CdnCacheRuleCacheRulesEligibleForCacheSchemeProxyHostUri): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_override: cdktf.booleanToTerraform(struct!.cacheOverride),
    cache_ttl: cdktf.stringToTerraform(struct!.cacheTtl),
    ignore_response_cookie: cdktf.booleanToTerraform(struct!.ignoreResponseCookie),
  }
}


export function cdnCacheRuleCacheRulesEligibleForCacheSchemeProxyHostUriToHclTerraform(struct?: CdnCacheRuleCacheRulesEligibleForCacheSchemeProxyHostUriOutputReference | CdnCacheRuleCacheRulesEligibleForCacheSchemeProxyHostUri): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_override: {
      value: cdktf.booleanToHclTerraform(struct!.cacheOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cache_ttl: {
      value: cdktf.stringToHclTerraform(struct!.cacheTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_response_cookie: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreResponseCookie),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnCacheRuleCacheRulesEligibleForCacheSchemeProxyHostUriOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnCacheRuleCacheRulesEligibleForCacheSchemeProxyHostUri | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheOverride = this._cacheOverride;
    }
    if (this._cacheTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheTtl = this._cacheTtl;
    }
    if (this._ignoreResponseCookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreResponseCookie = this._ignoreResponseCookie;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnCacheRuleCacheRulesEligibleForCacheSchemeProxyHostUri | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cacheOverride = undefined;
      this._cacheTtl = undefined;
      this._ignoreResponseCookie = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cacheOverride = value.cacheOverride;
      this._cacheTtl = value.cacheTtl;
      this._ignoreResponseCookie = value.ignoreResponseCookie;
    }
  }

  // cache_override - computed: false, optional: true, required: false
  private _cacheOverride?: boolean | cdktf.IResolvable; 
  public get cacheOverride() {
    return this.getBooleanAttribute('cache_override');
  }
  public set cacheOverride(value: boolean | cdktf.IResolvable) {
    this._cacheOverride = value;
  }
  public resetCacheOverride() {
    this._cacheOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheOverrideInput() {
    return this._cacheOverride;
  }

  // cache_ttl - computed: false, optional: false, required: true
  private _cacheTtl?: string; 
  public get cacheTtl() {
    return this.getStringAttribute('cache_ttl');
  }
  public set cacheTtl(value: string) {
    this._cacheTtl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTtlInput() {
    return this._cacheTtl;
  }

  // ignore_response_cookie - computed: false, optional: true, required: false
  private _ignoreResponseCookie?: boolean | cdktf.IResolvable; 
  public get ignoreResponseCookie() {
    return this.getBooleanAttribute('ignore_response_cookie');
  }
  public set ignoreResponseCookie(value: boolean | cdktf.IResolvable) {
    this._ignoreResponseCookie = value;
  }
  public resetIgnoreResponseCookie() {
    this._ignoreResponseCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreResponseCookieInput() {
    return this._ignoreResponseCookie;
  }
}
export interface CdnCacheRuleCacheRulesEligibleForCache {
  /**
  * scheme_proxy_host_request_uri block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_cache_rule#scheme_proxy_host_request_uri CdnCacheRule#scheme_proxy_host_request_uri}
  */
  readonly schemeProxyHostRequestUri?: CdnCacheRuleCacheRulesEligibleForCacheSchemeProxyHostRequestUri;
  /**
  * scheme_proxy_host_uri block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_cache_rule#scheme_proxy_host_uri CdnCacheRule#scheme_proxy_host_uri}
  */
  readonly schemeProxyHostUri?: CdnCacheRuleCacheRulesEligibleForCacheSchemeProxyHostUri;
}

export function cdnCacheRuleCacheRulesEligibleForCacheToTerraform(struct?: CdnCacheRuleCacheRulesEligibleForCacheOutputReference | CdnCacheRuleCacheRulesEligibleForCache): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scheme_proxy_host_request_uri: cdnCacheRuleCacheRulesEligibleForCacheSchemeProxyHostRequestUriToTerraform(struct!.schemeProxyHostRequestUri),
    scheme_proxy_host_uri: cdnCacheRuleCacheRulesEligibleForCacheSchemeProxyHostUriToTerraform(struct!.schemeProxyHostUri),
  }
}


export function cdnCacheRuleCacheRulesEligibleForCacheToHclTerraform(struct?: CdnCacheRuleCacheRulesEligibleForCacheOutputReference | CdnCacheRuleCacheRulesEligibleForCache): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scheme_proxy_host_request_uri: {
      value: cdnCacheRuleCacheRulesEligibleForCacheSchemeProxyHostRequestUriToHclTerraform(struct!.schemeProxyHostRequestUri),
      isBlock: true,
      type: "list",
      storageClassType: "CdnCacheRuleCacheRulesEligibleForCacheSchemeProxyHostRequestUriList",
    },
    scheme_proxy_host_uri: {
      value: cdnCacheRuleCacheRulesEligibleForCacheSchemeProxyHostUriToHclTerraform(struct!.schemeProxyHostUri),
      isBlock: true,
      type: "list",
      storageClassType: "CdnCacheRuleCacheRulesEligibleForCacheSchemeProxyHostUriList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnCacheRuleCacheRulesEligibleForCacheOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnCacheRuleCacheRulesEligibleForCache | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schemeProxyHostRequestUri?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemeProxyHostRequestUri = this._schemeProxyHostRequestUri?.internalValue;
    }
    if (this._schemeProxyHostUri?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemeProxyHostUri = this._schemeProxyHostUri?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnCacheRuleCacheRulesEligibleForCache | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._schemeProxyHostRequestUri.internalValue = undefined;
      this._schemeProxyHostUri.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._schemeProxyHostRequestUri.internalValue = value.schemeProxyHostRequestUri;
      this._schemeProxyHostUri.internalValue = value.schemeProxyHostUri;
    }
  }

  // scheme_proxy_host_request_uri - computed: false, optional: true, required: false
  private _schemeProxyHostRequestUri = new CdnCacheRuleCacheRulesEligibleForCacheSchemeProxyHostRequestUriOutputReference(this, "scheme_proxy_host_request_uri");
  public get schemeProxyHostRequestUri() {
    return this._schemeProxyHostRequestUri;
  }
  public putSchemeProxyHostRequestUri(value: CdnCacheRuleCacheRulesEligibleForCacheSchemeProxyHostRequestUri) {
    this._schemeProxyHostRequestUri.internalValue = value;
  }
  public resetSchemeProxyHostRequestUri() {
    this._schemeProxyHostRequestUri.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeProxyHostRequestUriInput() {
    return this._schemeProxyHostRequestUri.internalValue;
  }

  // scheme_proxy_host_uri - computed: false, optional: true, required: false
  private _schemeProxyHostUri = new CdnCacheRuleCacheRulesEligibleForCacheSchemeProxyHostUriOutputReference(this, "scheme_proxy_host_uri");
  public get schemeProxyHostUri() {
    return this._schemeProxyHostUri;
  }
  public putSchemeProxyHostUri(value: CdnCacheRuleCacheRulesEligibleForCacheSchemeProxyHostUri) {
    this._schemeProxyHostUri.internalValue = value;
  }
  public resetSchemeProxyHostUri() {
    this._schemeProxyHostUri.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeProxyHostUriInput() {
    return this._schemeProxyHostUri.internalValue;
  }
}
export interface CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionCacheHeadersOperator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_cache_rule#contains CdnCacheRule#contains}
  */
  readonly contains?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_cache_rule#does_not_contain CdnCacheRule#does_not_contain}
  */
  readonly doesNotContain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_cache_rule#does_not_end_with CdnCacheRule#does_not_end_with}
  */
  readonly doesNotEndWith?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_cache_rule#does_not_equal CdnCacheRule#does_not_equal}
  */
  readonly doesNotEqual?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_cache_rule#does_not_start_with CdnCacheRule#does_not_start_with}
  */
  readonly doesNotStartWith?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_cache_rule#endswith CdnCacheRule#endswith}
  */
  readonly endswith?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_cache_rule#equals CdnCacheRule#equals}
  */
  readonly equalTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_cache_rule#match_regex CdnCacheRule#match_regex}
  */
  readonly matchRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_cache_rule#startswith CdnCacheRule#startswith}
  */
  readonly startswith?: string;
}

export function cdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionCacheHeadersOperatorToTerraform(struct?: CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionCacheHeadersOperatorOutputReference | CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionCacheHeadersOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contains: cdktf.stringToTerraform(struct!.contains),
    does_not_contain: cdktf.stringToTerraform(struct!.doesNotContain),
    does_not_end_with: cdktf.stringToTerraform(struct!.doesNotEndWith),
    does_not_equal: cdktf.stringToTerraform(struct!.doesNotEqual),
    does_not_start_with: cdktf.stringToTerraform(struct!.doesNotStartWith),
    endswith: cdktf.stringToTerraform(struct!.endswith),
    equals: cdktf.stringToTerraform(struct!.equalTo),
    match_regex: cdktf.stringToTerraform(struct!.matchRegex),
    startswith: cdktf.stringToTerraform(struct!.startswith),
  }
}


export function cdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionCacheHeadersOperatorToHclTerraform(struct?: CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionCacheHeadersOperatorOutputReference | CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionCacheHeadersOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contains: {
      value: cdktf.stringToHclTerraform(struct!.contains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    does_not_contain: {
      value: cdktf.stringToHclTerraform(struct!.doesNotContain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    does_not_end_with: {
      value: cdktf.stringToHclTerraform(struct!.doesNotEndWith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    does_not_equal: {
      value: cdktf.stringToHclTerraform(struct!.doesNotEqual),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    does_not_start_with: {
      value: cdktf.stringToHclTerraform(struct!.doesNotStartWith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endswith: {
      value: cdktf.stringToHclTerraform(struct!.endswith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    equals: {
      value: cdktf.stringToHclTerraform(struct!.equalTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_regex: {
      value: cdktf.stringToHclTerraform(struct!.matchRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    startswith: {
      value: cdktf.stringToHclTerraform(struct!.startswith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionCacheHeadersOperatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionCacheHeadersOperator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._doesNotContain !== undefined) {
      hasAnyValues = true;
      internalValueResult.doesNotContain = this._doesNotContain;
    }
    if (this._doesNotEndWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.doesNotEndWith = this._doesNotEndWith;
    }
    if (this._doesNotEqual !== undefined) {
      hasAnyValues = true;
      internalValueResult.doesNotEqual = this._doesNotEqual;
    }
    if (this._doesNotStartWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.doesNotStartWith = this._doesNotStartWith;
    }
    if (this._endswith !== undefined) {
      hasAnyValues = true;
      internalValueResult.endswith = this._endswith;
    }
    if (this._equals !== undefined) {
      hasAnyValues = true;
      internalValueResult.equalTo = this._equals;
    }
    if (this._matchRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchRegex = this._matchRegex;
    }
    if (this._startswith !== undefined) {
      hasAnyValues = true;
      internalValueResult.startswith = this._startswith;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionCacheHeadersOperator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contains = undefined;
      this._doesNotContain = undefined;
      this._doesNotEndWith = undefined;
      this._doesNotEqual = undefined;
      this._doesNotStartWith = undefined;
      this._endswith = undefined;
      this._equals = undefined;
      this._matchRegex = undefined;
      this._startswith = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contains = value.contains;
      this._doesNotContain = value.doesNotContain;
      this._doesNotEndWith = value.doesNotEndWith;
      this._doesNotEqual = value.doesNotEqual;
      this._doesNotStartWith = value.doesNotStartWith;
      this._endswith = value.endswith;
      this._equals = value.equalTo;
      this._matchRegex = value.matchRegex;
      this._startswith = value.startswith;
    }
  }

  // contains - computed: false, optional: true, required: false
  private _contains?: string; 
  public get contains() {
    return this.getStringAttribute('contains');
  }
  public set contains(value: string) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
  }

  // does_not_contain - computed: false, optional: true, required: false
  private _doesNotContain?: string; 
  public get doesNotContain() {
    return this.getStringAttribute('does_not_contain');
  }
  public set doesNotContain(value: string) {
    this._doesNotContain = value;
  }
  public resetDoesNotContain() {
    this._doesNotContain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doesNotContainInput() {
    return this._doesNotContain;
  }

  // does_not_end_with - computed: false, optional: true, required: false
  private _doesNotEndWith?: string; 
  public get doesNotEndWith() {
    return this.getStringAttribute('does_not_end_with');
  }
  public set doesNotEndWith(value: string) {
    this._doesNotEndWith = value;
  }
  public resetDoesNotEndWith() {
    this._doesNotEndWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doesNotEndWithInput() {
    return this._doesNotEndWith;
  }

  // does_not_equal - computed: false, optional: true, required: false
  private _doesNotEqual?: string; 
  public get doesNotEqual() {
    return this.getStringAttribute('does_not_equal');
  }
  public set doesNotEqual(value: string) {
    this._doesNotEqual = value;
  }
  public resetDoesNotEqual() {
    this._doesNotEqual = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doesNotEqualInput() {
    return this._doesNotEqual;
  }

  // does_not_start_with - computed: false, optional: true, required: false
  private _doesNotStartWith?: string; 
  public get doesNotStartWith() {
    return this.getStringAttribute('does_not_start_with');
  }
  public set doesNotStartWith(value: string) {
    this._doesNotStartWith = value;
  }
  public resetDoesNotStartWith() {
    this._doesNotStartWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doesNotStartWithInput() {
    return this._doesNotStartWith;
  }

  // endswith - computed: false, optional: true, required: false
  private _endswith?: string; 
  public get endswith() {
    return this.getStringAttribute('endswith');
  }
  public set endswith(value: string) {
    this._endswith = value;
  }
  public resetEndswith() {
    this._endswith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endswithInput() {
    return this._endswith;
  }

  // equals - computed: false, optional: true, required: false
  private _equals?: string; 
  public get equalTo() {
    return this.getStringAttribute('equals');
  }
  public set equalTo(value: string) {
    this._equals = value;
  }
  public resetEqualTo() {
    this._equals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get equalToInput() {
    return this._equals;
  }

  // match_regex - computed: false, optional: true, required: false
  private _matchRegex?: string; 
  public get matchRegex() {
    return this.getStringAttribute('match_regex');
  }
  public set matchRegex(value: string) {
    this._matchRegex = value;
  }
  public resetMatchRegex() {
    this._matchRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchRegexInput() {
    return this._matchRegex;
  }

  // startswith - computed: false, optional: true, required: false
  private _startswith?: string; 
  public get startswith() {
    return this.getStringAttribute('startswith');
  }
  public set startswith(value: string) {
    this._startswith = value;
  }
  public resetStartswith() {
    this._startswith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startswithInput() {
    return this._startswith;
  }
}
export interface CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionCacheHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_cache_rule#name CdnCacheRule#name}
  */
  readonly name: string;
  /**
  * operator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_cache_rule#operator CdnCacheRule#operator}
  */
  readonly operator?: CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionCacheHeadersOperator;
}

export function cdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionCacheHeadersToTerraform(struct?: CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionCacheHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    operator: cdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionCacheHeadersOperatorToTerraform(struct!.operator),
  }
}


export function cdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionCacheHeadersToHclTerraform(struct?: CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionCacheHeaders | cdktf.IResolvable): any {
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
    operator: {
      value: cdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionCacheHeadersOperatorToHclTerraform(struct!.operator),
      isBlock: true,
      type: "list",
      storageClassType: "CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionCacheHeadersOperatorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionCacheHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionCacheHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._operator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionCacheHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._operator.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._operator.internalValue = value.operator;
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

  // operator - computed: false, optional: true, required: false
  private _operator = new CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionCacheHeadersOperatorOutputReference(this, "operator");
  public get operator() {
    return this._operator;
  }
  public putOperator(value: CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionCacheHeadersOperator) {
    this._operator.internalValue = value;
  }
  public resetOperator() {
    this._operator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator.internalValue;
  }
}

export class CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionCacheHeadersList extends cdktf.ComplexList {
  public internalValue? : CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionCacheHeaders[] | cdktf.IResolvable

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
  public get(index: number): CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionCacheHeadersOutputReference {
    return new CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionCacheHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcherOperator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_cache_rule#contains CdnCacheRule#contains}
  */
  readonly contains?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_cache_rule#does_not_contain CdnCacheRule#does_not_contain}
  */
  readonly doesNotContain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_cache_rule#does_not_end_with CdnCacheRule#does_not_end_with}
  */
  readonly doesNotEndWith?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_cache_rule#does_not_equal CdnCacheRule#does_not_equal}
  */
  readonly doesNotEqual?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_cache_rule#does_not_start_with CdnCacheRule#does_not_start_with}
  */
  readonly doesNotStartWith?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_cache_rule#endswith CdnCacheRule#endswith}
  */
  readonly endswith?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_cache_rule#equals CdnCacheRule#equals}
  */
  readonly equalTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_cache_rule#match_regex CdnCacheRule#match_regex}
  */
  readonly matchRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_cache_rule#startswith CdnCacheRule#startswith}
  */
  readonly startswith?: string;
}

export function cdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcherOperatorToTerraform(struct?: CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcherOperatorOutputReference | CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcherOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contains: cdktf.stringToTerraform(struct!.contains),
    does_not_contain: cdktf.stringToTerraform(struct!.doesNotContain),
    does_not_end_with: cdktf.stringToTerraform(struct!.doesNotEndWith),
    does_not_equal: cdktf.stringToTerraform(struct!.doesNotEqual),
    does_not_start_with: cdktf.stringToTerraform(struct!.doesNotStartWith),
    endswith: cdktf.stringToTerraform(struct!.endswith),
    equals: cdktf.stringToTerraform(struct!.equalTo),
    match_regex: cdktf.stringToTerraform(struct!.matchRegex),
    startswith: cdktf.stringToTerraform(struct!.startswith),
  }
}


export function cdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcherOperatorToHclTerraform(struct?: CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcherOperatorOutputReference | CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcherOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contains: {
      value: cdktf.stringToHclTerraform(struct!.contains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    does_not_contain: {
      value: cdktf.stringToHclTerraform(struct!.doesNotContain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    does_not_end_with: {
      value: cdktf.stringToHclTerraform(struct!.doesNotEndWith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    does_not_equal: {
      value: cdktf.stringToHclTerraform(struct!.doesNotEqual),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    does_not_start_with: {
      value: cdktf.stringToHclTerraform(struct!.doesNotStartWith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endswith: {
      value: cdktf.stringToHclTerraform(struct!.endswith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    equals: {
      value: cdktf.stringToHclTerraform(struct!.equalTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_regex: {
      value: cdktf.stringToHclTerraform(struct!.matchRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    startswith: {
      value: cdktf.stringToHclTerraform(struct!.startswith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcherOperatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcherOperator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._doesNotContain !== undefined) {
      hasAnyValues = true;
      internalValueResult.doesNotContain = this._doesNotContain;
    }
    if (this._doesNotEndWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.doesNotEndWith = this._doesNotEndWith;
    }
    if (this._doesNotEqual !== undefined) {
      hasAnyValues = true;
      internalValueResult.doesNotEqual = this._doesNotEqual;
    }
    if (this._doesNotStartWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.doesNotStartWith = this._doesNotStartWith;
    }
    if (this._endswith !== undefined) {
      hasAnyValues = true;
      internalValueResult.endswith = this._endswith;
    }
    if (this._equals !== undefined) {
      hasAnyValues = true;
      internalValueResult.equalTo = this._equals;
    }
    if (this._matchRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchRegex = this._matchRegex;
    }
    if (this._startswith !== undefined) {
      hasAnyValues = true;
      internalValueResult.startswith = this._startswith;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcherOperator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contains = undefined;
      this._doesNotContain = undefined;
      this._doesNotEndWith = undefined;
      this._doesNotEqual = undefined;
      this._doesNotStartWith = undefined;
      this._endswith = undefined;
      this._equals = undefined;
      this._matchRegex = undefined;
      this._startswith = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contains = value.contains;
      this._doesNotContain = value.doesNotContain;
      this._doesNotEndWith = value.doesNotEndWith;
      this._doesNotEqual = value.doesNotEqual;
      this._doesNotStartWith = value.doesNotStartWith;
      this._endswith = value.endswith;
      this._equals = value.equalTo;
      this._matchRegex = value.matchRegex;
      this._startswith = value.startswith;
    }
  }

  // contains - computed: false, optional: true, required: false
  private _contains?: string; 
  public get contains() {
    return this.getStringAttribute('contains');
  }
  public set contains(value: string) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
  }

  // does_not_contain - computed: false, optional: true, required: false
  private _doesNotContain?: string; 
  public get doesNotContain() {
    return this.getStringAttribute('does_not_contain');
  }
  public set doesNotContain(value: string) {
    this._doesNotContain = value;
  }
  public resetDoesNotContain() {
    this._doesNotContain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doesNotContainInput() {
    return this._doesNotContain;
  }

  // does_not_end_with - computed: false, optional: true, required: false
  private _doesNotEndWith?: string; 
  public get doesNotEndWith() {
    return this.getStringAttribute('does_not_end_with');
  }
  public set doesNotEndWith(value: string) {
    this._doesNotEndWith = value;
  }
  public resetDoesNotEndWith() {
    this._doesNotEndWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doesNotEndWithInput() {
    return this._doesNotEndWith;
  }

  // does_not_equal - computed: false, optional: true, required: false
  private _doesNotEqual?: string; 
  public get doesNotEqual() {
    return this.getStringAttribute('does_not_equal');
  }
  public set doesNotEqual(value: string) {
    this._doesNotEqual = value;
  }
  public resetDoesNotEqual() {
    this._doesNotEqual = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doesNotEqualInput() {
    return this._doesNotEqual;
  }

  // does_not_start_with - computed: false, optional: true, required: false
  private _doesNotStartWith?: string; 
  public get doesNotStartWith() {
    return this.getStringAttribute('does_not_start_with');
  }
  public set doesNotStartWith(value: string) {
    this._doesNotStartWith = value;
  }
  public resetDoesNotStartWith() {
    this._doesNotStartWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doesNotStartWithInput() {
    return this._doesNotStartWith;
  }

  // endswith - computed: false, optional: true, required: false
  private _endswith?: string; 
  public get endswith() {
    return this.getStringAttribute('endswith');
  }
  public set endswith(value: string) {
    this._endswith = value;
  }
  public resetEndswith() {
    this._endswith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endswithInput() {
    return this._endswith;
  }

  // equals - computed: false, optional: true, required: false
  private _equals?: string; 
  public get equalTo() {
    return this.getStringAttribute('equals');
  }
  public set equalTo(value: string) {
    this._equals = value;
  }
  public resetEqualTo() {
    this._equals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get equalToInput() {
    return this._equals;
  }

  // match_regex - computed: false, optional: true, required: false
  private _matchRegex?: string; 
  public get matchRegex() {
    return this.getStringAttribute('match_regex');
  }
  public set matchRegex(value: string) {
    this._matchRegex = value;
  }
  public resetMatchRegex() {
    this._matchRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchRegexInput() {
    return this._matchRegex;
  }

  // startswith - computed: false, optional: true, required: false
  private _startswith?: string; 
  public get startswith() {
    return this.getStringAttribute('startswith');
  }
  public set startswith(value: string) {
    this._startswith = value;
  }
  public resetStartswith() {
    this._startswith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startswithInput() {
    return this._startswith;
  }
}
export interface CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_cache_rule#name CdnCacheRule#name}
  */
  readonly name: string;
  /**
  * operator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_cache_rule#operator CdnCacheRule#operator}
  */
  readonly operator?: CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcherOperator;
}

export function cdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcherToTerraform(struct?: CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcher | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    operator: cdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcherOperatorToTerraform(struct!.operator),
  }
}


export function cdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcherToHclTerraform(struct?: CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcher | cdktf.IResolvable): any {
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
    operator: {
      value: cdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcherOperatorToHclTerraform(struct!.operator),
      isBlock: true,
      type: "list",
      storageClassType: "CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcherOperatorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcherOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcher | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._operator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcher | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._operator.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._operator.internalValue = value.operator;
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

  // operator - computed: false, optional: true, required: false
  private _operator = new CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcherOperatorOutputReference(this, "operator");
  public get operator() {
    return this._operator;
  }
  public putOperator(value: CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcherOperator) {
    this._operator.internalValue = value;
  }
  public resetOperator() {
    this._operator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator.internalValue;
  }
}

export class CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcherList extends cdktf.ComplexList {
  public internalValue? : CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcher[] | cdktf.IResolvable

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
  public get(index: number): CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcherOutputReference {
    return new CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcherOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionPathMatchOperator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_cache_rule#contains CdnCacheRule#contains}
  */
  readonly contains?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_cache_rule#does_not_contain CdnCacheRule#does_not_contain}
  */
  readonly doesNotContain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_cache_rule#does_not_end_with CdnCacheRule#does_not_end_with}
  */
  readonly doesNotEndWith?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_cache_rule#does_not_equal CdnCacheRule#does_not_equal}
  */
  readonly doesNotEqual?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_cache_rule#does_not_start_with CdnCacheRule#does_not_start_with}
  */
  readonly doesNotStartWith?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_cache_rule#endswith CdnCacheRule#endswith}
  */
  readonly endswith?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_cache_rule#equals CdnCacheRule#equals}
  */
  readonly equalTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_cache_rule#match_regex CdnCacheRule#match_regex}
  */
  readonly matchRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_cache_rule#startswith CdnCacheRule#startswith}
  */
  readonly startswith?: string;
}

export function cdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionPathMatchOperatorToTerraform(struct?: CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionPathMatchOperatorOutputReference | CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionPathMatchOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contains: cdktf.stringToTerraform(struct!.contains),
    does_not_contain: cdktf.stringToTerraform(struct!.doesNotContain),
    does_not_end_with: cdktf.stringToTerraform(struct!.doesNotEndWith),
    does_not_equal: cdktf.stringToTerraform(struct!.doesNotEqual),
    does_not_start_with: cdktf.stringToTerraform(struct!.doesNotStartWith),
    endswith: cdktf.stringToTerraform(struct!.endswith),
    equals: cdktf.stringToTerraform(struct!.equalTo),
    match_regex: cdktf.stringToTerraform(struct!.matchRegex),
    startswith: cdktf.stringToTerraform(struct!.startswith),
  }
}


export function cdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionPathMatchOperatorToHclTerraform(struct?: CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionPathMatchOperatorOutputReference | CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionPathMatchOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contains: {
      value: cdktf.stringToHclTerraform(struct!.contains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    does_not_contain: {
      value: cdktf.stringToHclTerraform(struct!.doesNotContain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    does_not_end_with: {
      value: cdktf.stringToHclTerraform(struct!.doesNotEndWith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    does_not_equal: {
      value: cdktf.stringToHclTerraform(struct!.doesNotEqual),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    does_not_start_with: {
      value: cdktf.stringToHclTerraform(struct!.doesNotStartWith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endswith: {
      value: cdktf.stringToHclTerraform(struct!.endswith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    equals: {
      value: cdktf.stringToHclTerraform(struct!.equalTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_regex: {
      value: cdktf.stringToHclTerraform(struct!.matchRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    startswith: {
      value: cdktf.stringToHclTerraform(struct!.startswith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionPathMatchOperatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionPathMatchOperator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._doesNotContain !== undefined) {
      hasAnyValues = true;
      internalValueResult.doesNotContain = this._doesNotContain;
    }
    if (this._doesNotEndWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.doesNotEndWith = this._doesNotEndWith;
    }
    if (this._doesNotEqual !== undefined) {
      hasAnyValues = true;
      internalValueResult.doesNotEqual = this._doesNotEqual;
    }
    if (this._doesNotStartWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.doesNotStartWith = this._doesNotStartWith;
    }
    if (this._endswith !== undefined) {
      hasAnyValues = true;
      internalValueResult.endswith = this._endswith;
    }
    if (this._equals !== undefined) {
      hasAnyValues = true;
      internalValueResult.equalTo = this._equals;
    }
    if (this._matchRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchRegex = this._matchRegex;
    }
    if (this._startswith !== undefined) {
      hasAnyValues = true;
      internalValueResult.startswith = this._startswith;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionPathMatchOperator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contains = undefined;
      this._doesNotContain = undefined;
      this._doesNotEndWith = undefined;
      this._doesNotEqual = undefined;
      this._doesNotStartWith = undefined;
      this._endswith = undefined;
      this._equals = undefined;
      this._matchRegex = undefined;
      this._startswith = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contains = value.contains;
      this._doesNotContain = value.doesNotContain;
      this._doesNotEndWith = value.doesNotEndWith;
      this._doesNotEqual = value.doesNotEqual;
      this._doesNotStartWith = value.doesNotStartWith;
      this._endswith = value.endswith;
      this._equals = value.equalTo;
      this._matchRegex = value.matchRegex;
      this._startswith = value.startswith;
    }
  }

  // contains - computed: false, optional: true, required: false
  private _contains?: string; 
  public get contains() {
    return this.getStringAttribute('contains');
  }
  public set contains(value: string) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
  }

  // does_not_contain - computed: false, optional: true, required: false
  private _doesNotContain?: string; 
  public get doesNotContain() {
    return this.getStringAttribute('does_not_contain');
  }
  public set doesNotContain(value: string) {
    this._doesNotContain = value;
  }
  public resetDoesNotContain() {
    this._doesNotContain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doesNotContainInput() {
    return this._doesNotContain;
  }

  // does_not_end_with - computed: false, optional: true, required: false
  private _doesNotEndWith?: string; 
  public get doesNotEndWith() {
    return this.getStringAttribute('does_not_end_with');
  }
  public set doesNotEndWith(value: string) {
    this._doesNotEndWith = value;
  }
  public resetDoesNotEndWith() {
    this._doesNotEndWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doesNotEndWithInput() {
    return this._doesNotEndWith;
  }

  // does_not_equal - computed: false, optional: true, required: false
  private _doesNotEqual?: string; 
  public get doesNotEqual() {
    return this.getStringAttribute('does_not_equal');
  }
  public set doesNotEqual(value: string) {
    this._doesNotEqual = value;
  }
  public resetDoesNotEqual() {
    this._doesNotEqual = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doesNotEqualInput() {
    return this._doesNotEqual;
  }

  // does_not_start_with - computed: false, optional: true, required: false
  private _doesNotStartWith?: string; 
  public get doesNotStartWith() {
    return this.getStringAttribute('does_not_start_with');
  }
  public set doesNotStartWith(value: string) {
    this._doesNotStartWith = value;
  }
  public resetDoesNotStartWith() {
    this._doesNotStartWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doesNotStartWithInput() {
    return this._doesNotStartWith;
  }

  // endswith - computed: false, optional: true, required: false
  private _endswith?: string; 
  public get endswith() {
    return this.getStringAttribute('endswith');
  }
  public set endswith(value: string) {
    this._endswith = value;
  }
  public resetEndswith() {
    this._endswith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endswithInput() {
    return this._endswith;
  }

  // equals - computed: false, optional: true, required: false
  private _equals?: string; 
  public get equalTo() {
    return this.getStringAttribute('equals');
  }
  public set equalTo(value: string) {
    this._equals = value;
  }
  public resetEqualTo() {
    this._equals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get equalToInput() {
    return this._equals;
  }

  // match_regex - computed: false, optional: true, required: false
  private _matchRegex?: string; 
  public get matchRegex() {
    return this.getStringAttribute('match_regex');
  }
  public set matchRegex(value: string) {
    this._matchRegex = value;
  }
  public resetMatchRegex() {
    this._matchRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchRegexInput() {
    return this._matchRegex;
  }

  // startswith - computed: false, optional: true, required: false
  private _startswith?: string; 
  public get startswith() {
    return this.getStringAttribute('startswith');
  }
  public set startswith(value: string) {
    this._startswith = value;
  }
  public resetStartswith() {
    this._startswith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startswithInput() {
    return this._startswith;
  }
}
export interface CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionPathMatch {
  /**
  * operator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_cache_rule#operator CdnCacheRule#operator}
  */
  readonly operator?: CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionPathMatchOperator;
}

export function cdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionPathMatchToTerraform(struct?: CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionPathMatchOutputReference | CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionPathMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionPathMatchOperatorToTerraform(struct!.operator),
  }
}


export function cdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionPathMatchToHclTerraform(struct?: CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionPathMatchOutputReference | CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionPathMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionPathMatchOperatorToHclTerraform(struct!.operator),
      isBlock: true,
      type: "list",
      storageClassType: "CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionPathMatchOperatorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionPathMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionPathMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionPathMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._operator.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._operator.internalValue = value.operator;
    }
  }

  // operator - computed: false, optional: true, required: false
  private _operator = new CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionPathMatchOperatorOutputReference(this, "operator");
  public get operator() {
    return this._operator;
  }
  public putOperator(value: CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionPathMatchOperator) {
    this._operator.internalValue = value;
  }
  public resetOperator() {
    this._operator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator.internalValue;
  }
}
export interface CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionQueryParametersOperator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_cache_rule#contains CdnCacheRule#contains}
  */
  readonly contains?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_cache_rule#does_not_contain CdnCacheRule#does_not_contain}
  */
  readonly doesNotContain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_cache_rule#does_not_end_with CdnCacheRule#does_not_end_with}
  */
  readonly doesNotEndWith?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_cache_rule#does_not_equal CdnCacheRule#does_not_equal}
  */
  readonly doesNotEqual?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_cache_rule#does_not_start_with CdnCacheRule#does_not_start_with}
  */
  readonly doesNotStartWith?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_cache_rule#endswith CdnCacheRule#endswith}
  */
  readonly endswith?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_cache_rule#equals CdnCacheRule#equals}
  */
  readonly equalTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_cache_rule#match_regex CdnCacheRule#match_regex}
  */
  readonly matchRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_cache_rule#startswith CdnCacheRule#startswith}
  */
  readonly startswith?: string;
}

export function cdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionQueryParametersOperatorToTerraform(struct?: CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionQueryParametersOperatorOutputReference | CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionQueryParametersOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contains: cdktf.stringToTerraform(struct!.contains),
    does_not_contain: cdktf.stringToTerraform(struct!.doesNotContain),
    does_not_end_with: cdktf.stringToTerraform(struct!.doesNotEndWith),
    does_not_equal: cdktf.stringToTerraform(struct!.doesNotEqual),
    does_not_start_with: cdktf.stringToTerraform(struct!.doesNotStartWith),
    endswith: cdktf.stringToTerraform(struct!.endswith),
    equals: cdktf.stringToTerraform(struct!.equalTo),
    match_regex: cdktf.stringToTerraform(struct!.matchRegex),
    startswith: cdktf.stringToTerraform(struct!.startswith),
  }
}


export function cdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionQueryParametersOperatorToHclTerraform(struct?: CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionQueryParametersOperatorOutputReference | CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionQueryParametersOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contains: {
      value: cdktf.stringToHclTerraform(struct!.contains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    does_not_contain: {
      value: cdktf.stringToHclTerraform(struct!.doesNotContain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    does_not_end_with: {
      value: cdktf.stringToHclTerraform(struct!.doesNotEndWith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    does_not_equal: {
      value: cdktf.stringToHclTerraform(struct!.doesNotEqual),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    does_not_start_with: {
      value: cdktf.stringToHclTerraform(struct!.doesNotStartWith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endswith: {
      value: cdktf.stringToHclTerraform(struct!.endswith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    equals: {
      value: cdktf.stringToHclTerraform(struct!.equalTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_regex: {
      value: cdktf.stringToHclTerraform(struct!.matchRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    startswith: {
      value: cdktf.stringToHclTerraform(struct!.startswith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionQueryParametersOperatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionQueryParametersOperator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._doesNotContain !== undefined) {
      hasAnyValues = true;
      internalValueResult.doesNotContain = this._doesNotContain;
    }
    if (this._doesNotEndWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.doesNotEndWith = this._doesNotEndWith;
    }
    if (this._doesNotEqual !== undefined) {
      hasAnyValues = true;
      internalValueResult.doesNotEqual = this._doesNotEqual;
    }
    if (this._doesNotStartWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.doesNotStartWith = this._doesNotStartWith;
    }
    if (this._endswith !== undefined) {
      hasAnyValues = true;
      internalValueResult.endswith = this._endswith;
    }
    if (this._equals !== undefined) {
      hasAnyValues = true;
      internalValueResult.equalTo = this._equals;
    }
    if (this._matchRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchRegex = this._matchRegex;
    }
    if (this._startswith !== undefined) {
      hasAnyValues = true;
      internalValueResult.startswith = this._startswith;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionQueryParametersOperator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contains = undefined;
      this._doesNotContain = undefined;
      this._doesNotEndWith = undefined;
      this._doesNotEqual = undefined;
      this._doesNotStartWith = undefined;
      this._endswith = undefined;
      this._equals = undefined;
      this._matchRegex = undefined;
      this._startswith = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contains = value.contains;
      this._doesNotContain = value.doesNotContain;
      this._doesNotEndWith = value.doesNotEndWith;
      this._doesNotEqual = value.doesNotEqual;
      this._doesNotStartWith = value.doesNotStartWith;
      this._endswith = value.endswith;
      this._equals = value.equalTo;
      this._matchRegex = value.matchRegex;
      this._startswith = value.startswith;
    }
  }

  // contains - computed: false, optional: true, required: false
  private _contains?: string; 
  public get contains() {
    return this.getStringAttribute('contains');
  }
  public set contains(value: string) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
  }

  // does_not_contain - computed: false, optional: true, required: false
  private _doesNotContain?: string; 
  public get doesNotContain() {
    return this.getStringAttribute('does_not_contain');
  }
  public set doesNotContain(value: string) {
    this._doesNotContain = value;
  }
  public resetDoesNotContain() {
    this._doesNotContain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doesNotContainInput() {
    return this._doesNotContain;
  }

  // does_not_end_with - computed: false, optional: true, required: false
  private _doesNotEndWith?: string; 
  public get doesNotEndWith() {
    return this.getStringAttribute('does_not_end_with');
  }
  public set doesNotEndWith(value: string) {
    this._doesNotEndWith = value;
  }
  public resetDoesNotEndWith() {
    this._doesNotEndWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doesNotEndWithInput() {
    return this._doesNotEndWith;
  }

  // does_not_equal - computed: false, optional: true, required: false
  private _doesNotEqual?: string; 
  public get doesNotEqual() {
    return this.getStringAttribute('does_not_equal');
  }
  public set doesNotEqual(value: string) {
    this._doesNotEqual = value;
  }
  public resetDoesNotEqual() {
    this._doesNotEqual = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doesNotEqualInput() {
    return this._doesNotEqual;
  }

  // does_not_start_with - computed: false, optional: true, required: false
  private _doesNotStartWith?: string; 
  public get doesNotStartWith() {
    return this.getStringAttribute('does_not_start_with');
  }
  public set doesNotStartWith(value: string) {
    this._doesNotStartWith = value;
  }
  public resetDoesNotStartWith() {
    this._doesNotStartWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doesNotStartWithInput() {
    return this._doesNotStartWith;
  }

  // endswith - computed: false, optional: true, required: false
  private _endswith?: string; 
  public get endswith() {
    return this.getStringAttribute('endswith');
  }
  public set endswith(value: string) {
    this._endswith = value;
  }
  public resetEndswith() {
    this._endswith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endswithInput() {
    return this._endswith;
  }

  // equals - computed: false, optional: true, required: false
  private _equals?: string; 
  public get equalTo() {
    return this.getStringAttribute('equals');
  }
  public set equalTo(value: string) {
    this._equals = value;
  }
  public resetEqualTo() {
    this._equals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get equalToInput() {
    return this._equals;
  }

  // match_regex - computed: false, optional: true, required: false
  private _matchRegex?: string; 
  public get matchRegex() {
    return this.getStringAttribute('match_regex');
  }
  public set matchRegex(value: string) {
    this._matchRegex = value;
  }
  public resetMatchRegex() {
    this._matchRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchRegexInput() {
    return this._matchRegex;
  }

  // startswith - computed: false, optional: true, required: false
  private _startswith?: string; 
  public get startswith() {
    return this.getStringAttribute('startswith');
  }
  public set startswith(value: string) {
    this._startswith = value;
  }
  public resetStartswith() {
    this._startswith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startswithInput() {
    return this._startswith;
  }
}
export interface CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionQueryParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_cache_rule#key CdnCacheRule#key}
  */
  readonly key: string;
  /**
  * operator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_cache_rule#operator CdnCacheRule#operator}
  */
  readonly operator?: CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionQueryParametersOperator;
}

export function cdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionQueryParametersToTerraform(struct?: CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionQueryParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionQueryParametersOperatorToTerraform(struct!.operator),
  }
}


export function cdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionQueryParametersToHclTerraform(struct?: CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionQueryParameters | cdktf.IResolvable): any {
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
    operator: {
      value: cdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionQueryParametersOperatorToHclTerraform(struct!.operator),
      isBlock: true,
      type: "list",
      storageClassType: "CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionQueryParametersOperatorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionQueryParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionQueryParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionQueryParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator.internalValue = value.operator;
    }
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

  // operator - computed: false, optional: true, required: false
  private _operator = new CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionQueryParametersOperatorOutputReference(this, "operator");
  public get operator() {
    return this._operator;
  }
  public putOperator(value: CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionQueryParametersOperator) {
    this._operator.internalValue = value;
  }
  public resetOperator() {
    this._operator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator.internalValue;
  }
}

export class CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionQueryParametersList extends cdktf.ComplexList {
  public internalValue? : CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionQueryParameters[] | cdktf.IResolvable

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
  public get(index: number): CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionQueryParametersOutputReference {
    return new CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionQueryParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpression {
  /**
  * cache_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_cache_rule#cache_headers CdnCacheRule#cache_headers}
  */
  readonly cacheHeaders?: CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionCacheHeaders[] | cdktf.IResolvable;
  /**
  * cookie_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_cache_rule#cookie_matcher CdnCacheRule#cookie_matcher}
  */
  readonly cookieMatcher?: CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcher[] | cdktf.IResolvable;
  /**
  * path_match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_cache_rule#path_match CdnCacheRule#path_match}
  */
  readonly pathMatch?: CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionPathMatch;
  /**
  * query_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_cache_rule#query_parameters CdnCacheRule#query_parameters}
  */
  readonly queryParameters?: CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionQueryParameters[] | cdktf.IResolvable;
}

export function cdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionToTerraform(struct?: CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpression | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_headers: cdktf.listMapper(cdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionCacheHeadersToTerraform, true)(struct!.cacheHeaders),
    cookie_matcher: cdktf.listMapper(cdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcherToTerraform, true)(struct!.cookieMatcher),
    path_match: cdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionPathMatchToTerraform(struct!.pathMatch),
    query_parameters: cdktf.listMapper(cdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionQueryParametersToTerraform, true)(struct!.queryParameters),
  }
}


export function cdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionToHclTerraform(struct?: CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpression | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_headers: {
      value: cdktf.listMapperHcl(cdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionCacheHeadersToHclTerraform, true)(struct!.cacheHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionCacheHeadersList",
    },
    cookie_matcher: {
      value: cdktf.listMapperHcl(cdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcherToHclTerraform, true)(struct!.cookieMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcherList",
    },
    path_match: {
      value: cdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionPathMatchToHclTerraform(struct!.pathMatch),
      isBlock: true,
      type: "list",
      storageClassType: "CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionPathMatchList",
    },
    query_parameters: {
      value: cdktf.listMapperHcl(cdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionQueryParametersToHclTerraform, true)(struct!.queryParameters),
      isBlock: true,
      type: "list",
      storageClassType: "CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionQueryParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpression | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheHeaders = this._cacheHeaders?.internalValue;
    }
    if (this._cookieMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieMatcher = this._cookieMatcher?.internalValue;
    }
    if (this._pathMatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathMatch = this._pathMatch?.internalValue;
    }
    if (this._queryParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParameters = this._queryParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpression | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cacheHeaders.internalValue = undefined;
      this._cookieMatcher.internalValue = undefined;
      this._pathMatch.internalValue = undefined;
      this._queryParameters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cacheHeaders.internalValue = value.cacheHeaders;
      this._cookieMatcher.internalValue = value.cookieMatcher;
      this._pathMatch.internalValue = value.pathMatch;
      this._queryParameters.internalValue = value.queryParameters;
    }
  }

  // cache_headers - computed: false, optional: true, required: false
  private _cacheHeaders = new CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionCacheHeadersList(this, "cache_headers", false);
  public get cacheHeaders() {
    return this._cacheHeaders;
  }
  public putCacheHeaders(value: CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionCacheHeaders[] | cdktf.IResolvable) {
    this._cacheHeaders.internalValue = value;
  }
  public resetCacheHeaders() {
    this._cacheHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheHeadersInput() {
    return this._cacheHeaders.internalValue;
  }

  // cookie_matcher - computed: false, optional: true, required: false
  private _cookieMatcher = new CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcherList(this, "cookie_matcher", false);
  public get cookieMatcher() {
    return this._cookieMatcher;
  }
  public putCookieMatcher(value: CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcher[] | cdktf.IResolvable) {
    this._cookieMatcher.internalValue = value;
  }
  public resetCookieMatcher() {
    this._cookieMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieMatcherInput() {
    return this._cookieMatcher.internalValue;
  }

  // path_match - computed: false, optional: true, required: false
  private _pathMatch = new CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionPathMatchOutputReference(this, "path_match");
  public get pathMatch() {
    return this._pathMatch;
  }
  public putPathMatch(value: CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionPathMatch) {
    this._pathMatch.internalValue = value;
  }
  public resetPathMatch() {
    this._pathMatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathMatchInput() {
    return this._pathMatch.internalValue;
  }

  // query_parameters - computed: false, optional: true, required: false
  private _queryParameters = new CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionQueryParametersList(this, "query_parameters", false);
  public get queryParameters() {
    return this._queryParameters;
  }
  public putQueryParameters(value: CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionQueryParameters[] | cdktf.IResolvable) {
    this._queryParameters.internalValue = value;
  }
  public resetQueryParameters() {
    this._queryParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParametersInput() {
    return this._queryParameters.internalValue;
  }
}

export class CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionList extends cdktf.ComplexList {
  public internalValue? : CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpression[] | cdktf.IResolvable

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
  public get(index: number): CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionOutputReference {
    return new CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnCacheRuleCacheRulesRuleExpressionListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_cache_rule#expression_name CdnCacheRule#expression_name}
  */
  readonly expressionName: string;
  /**
  * cache_rule_expression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_cache_rule#cache_rule_expression CdnCacheRule#cache_rule_expression}
  */
  readonly cacheRuleExpression: CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpression[] | cdktf.IResolvable;
}

export function cdnCacheRuleCacheRulesRuleExpressionListStructToTerraform(struct?: CdnCacheRuleCacheRulesRuleExpressionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression_name: cdktf.stringToTerraform(struct!.expressionName),
    cache_rule_expression: cdktf.listMapper(cdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionToTerraform, true)(struct!.cacheRuleExpression),
  }
}


export function cdnCacheRuleCacheRulesRuleExpressionListStructToHclTerraform(struct?: CdnCacheRuleCacheRulesRuleExpressionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expression_name: {
      value: cdktf.stringToHclTerraform(struct!.expressionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cache_rule_expression: {
      value: cdktf.listMapperHcl(cdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionToHclTerraform, true)(struct!.cacheRuleExpression),
      isBlock: true,
      type: "list",
      storageClassType: "CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnCacheRuleCacheRulesRuleExpressionListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnCacheRuleCacheRulesRuleExpressionListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expressionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressionName = this._expressionName;
    }
    if (this._cacheRuleExpression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheRuleExpression = this._cacheRuleExpression?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnCacheRuleCacheRulesRuleExpressionListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expressionName = undefined;
      this._cacheRuleExpression.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expressionName = value.expressionName;
      this._cacheRuleExpression.internalValue = value.cacheRuleExpression;
    }
  }

  // expression_name - computed: false, optional: false, required: true
  private _expressionName?: string; 
  public get expressionName() {
    return this.getStringAttribute('expression_name');
  }
  public set expressionName(value: string) {
    this._expressionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionNameInput() {
    return this._expressionName;
  }

  // cache_rule_expression - computed: false, optional: false, required: true
  private _cacheRuleExpression = new CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpressionList(this, "cache_rule_expression", false);
  public get cacheRuleExpression() {
    return this._cacheRuleExpression;
  }
  public putCacheRuleExpression(value: CdnCacheRuleCacheRulesRuleExpressionListCacheRuleExpression[] | cdktf.IResolvable) {
    this._cacheRuleExpression.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheRuleExpressionInput() {
    return this._cacheRuleExpression.internalValue;
  }
}

export class CdnCacheRuleCacheRulesRuleExpressionListStructList extends cdktf.ComplexList {
  public internalValue? : CdnCacheRuleCacheRulesRuleExpressionListStruct[] | cdktf.IResolvable

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
  public get(index: number): CdnCacheRuleCacheRulesRuleExpressionListStructOutputReference {
    return new CdnCacheRuleCacheRulesRuleExpressionListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnCacheRuleCacheRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_cache_rule#cache_bypass CdnCacheRule#cache_bypass}
  */
  readonly cacheBypass?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_cache_rule#rule_name CdnCacheRule#rule_name}
  */
  readonly ruleName: string;
  /**
  * eligible_for_cache block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_cache_rule#eligible_for_cache CdnCacheRule#eligible_for_cache}
  */
  readonly eligibleForCache?: CdnCacheRuleCacheRulesEligibleForCache;
  /**
  * rule_expression_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_cache_rule#rule_expression_list CdnCacheRule#rule_expression_list}
  */
  readonly ruleExpressionList: CdnCacheRuleCacheRulesRuleExpressionListStruct[] | cdktf.IResolvable;
}

export function cdnCacheRuleCacheRulesToTerraform(struct?: CdnCacheRuleCacheRulesOutputReference | CdnCacheRuleCacheRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_bypass: cdktf.booleanToTerraform(struct!.cacheBypass),
    rule_name: cdktf.stringToTerraform(struct!.ruleName),
    eligible_for_cache: cdnCacheRuleCacheRulesEligibleForCacheToTerraform(struct!.eligibleForCache),
    rule_expression_list: cdktf.listMapper(cdnCacheRuleCacheRulesRuleExpressionListStructToTerraform, true)(struct!.ruleExpressionList),
  }
}


export function cdnCacheRuleCacheRulesToHclTerraform(struct?: CdnCacheRuleCacheRulesOutputReference | CdnCacheRuleCacheRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_bypass: {
      value: cdktf.booleanToHclTerraform(struct!.cacheBypass),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rule_name: {
      value: cdktf.stringToHclTerraform(struct!.ruleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    eligible_for_cache: {
      value: cdnCacheRuleCacheRulesEligibleForCacheToHclTerraform(struct!.eligibleForCache),
      isBlock: true,
      type: "list",
      storageClassType: "CdnCacheRuleCacheRulesEligibleForCacheList",
    },
    rule_expression_list: {
      value: cdktf.listMapperHcl(cdnCacheRuleCacheRulesRuleExpressionListStructToHclTerraform, true)(struct!.ruleExpressionList),
      isBlock: true,
      type: "list",
      storageClassType: "CdnCacheRuleCacheRulesRuleExpressionListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnCacheRuleCacheRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnCacheRuleCacheRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheBypass !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheBypass = this._cacheBypass;
    }
    if (this._ruleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleName = this._ruleName;
    }
    if (this._eligibleForCache?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eligibleForCache = this._eligibleForCache?.internalValue;
    }
    if (this._ruleExpressionList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleExpressionList = this._ruleExpressionList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnCacheRuleCacheRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cacheBypass = undefined;
      this._ruleName = undefined;
      this._eligibleForCache.internalValue = undefined;
      this._ruleExpressionList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cacheBypass = value.cacheBypass;
      this._ruleName = value.ruleName;
      this._eligibleForCache.internalValue = value.eligibleForCache;
      this._ruleExpressionList.internalValue = value.ruleExpressionList;
    }
  }

  // cache_bypass - computed: false, optional: true, required: false
  private _cacheBypass?: boolean | cdktf.IResolvable; 
  public get cacheBypass() {
    return this.getBooleanAttribute('cache_bypass');
  }
  public set cacheBypass(value: boolean | cdktf.IResolvable) {
    this._cacheBypass = value;
  }
  public resetCacheBypass() {
    this._cacheBypass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheBypassInput() {
    return this._cacheBypass;
  }

  // rule_name - computed: false, optional: false, required: true
  private _ruleName?: string; 
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
  public set ruleName(value: string) {
    this._ruleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNameInput() {
    return this._ruleName;
  }

  // eligible_for_cache - computed: false, optional: true, required: false
  private _eligibleForCache = new CdnCacheRuleCacheRulesEligibleForCacheOutputReference(this, "eligible_for_cache");
  public get eligibleForCache() {
    return this._eligibleForCache;
  }
  public putEligibleForCache(value: CdnCacheRuleCacheRulesEligibleForCache) {
    this._eligibleForCache.internalValue = value;
  }
  public resetEligibleForCache() {
    this._eligibleForCache.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eligibleForCacheInput() {
    return this._eligibleForCache.internalValue;
  }

  // rule_expression_list - computed: false, optional: false, required: true
  private _ruleExpressionList = new CdnCacheRuleCacheRulesRuleExpressionListStructList(this, "rule_expression_list", false);
  public get ruleExpressionList() {
    return this._ruleExpressionList;
  }
  public putRuleExpressionList(value: CdnCacheRuleCacheRulesRuleExpressionListStruct[] | cdktf.IResolvable) {
    this._ruleExpressionList.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleExpressionListInput() {
    return this._ruleExpressionList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_cache_rule volterra_cdn_cache_rule}
*/
export class CdnCacheRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_cdn_cache_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CdnCacheRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CdnCacheRule to import
  * @param importFromId The id of the existing CdnCacheRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_cache_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CdnCacheRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_cdn_cache_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_cache_rule volterra_cdn_cache_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CdnCacheRuleConfig
  */
  public constructor(scope: Construct, id: string, config: CdnCacheRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_cdn_cache_rule',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.45',
        providerVersionConstraint: '0.11.45'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotations = config.annotations;
    this._description = config.description;
    this._disable = config.disable;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._namespace = config.namespace;
    this._cacheRules.internalValue = config.cacheRules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // cache_rules - computed: false, optional: true, required: false
  private _cacheRules = new CdnCacheRuleCacheRulesOutputReference(this, "cache_rules");
  public get cacheRules() {
    return this._cacheRules;
  }
  public putCacheRules(value: CdnCacheRuleCacheRules) {
    this._cacheRules.internalValue = value;
  }
  public resetCacheRules() {
    this._cacheRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheRulesInput() {
    return this._cacheRules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      description: cdktf.stringToTerraform(this._description),
      disable: cdktf.booleanToTerraform(this._disable),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      cache_rules: cdnCacheRuleCacheRulesToTerraform(this._cacheRules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
      cache_rules: {
        value: cdnCacheRuleCacheRulesToHclTerraform(this._cacheRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CdnCacheRuleCacheRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
