import * as cdktf from 'cdktf';
import { HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchers,
httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersToTerraform,
httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersToHclTerraform,
HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersList,
HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeaders,
httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersToTerraform,
httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersToHclTerraform,
HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersList,
HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaims,
httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsToTerraform,
httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsToHclTerraform,
HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsList,
HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParams,
httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsToTerraform,
httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsToHclTerraform,
HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsList,
HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiEndpoint,
httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiEndpointToTerraform,
httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiEndpointToHclTerraform,
HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiEndpointOutputReference,
HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiGroups,
httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiGroupsToTerraform,
httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiGroupsToHclTerraform,
HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiGroupsOutputReference,
HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcher,
httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherToTerraform,
httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherToHclTerraform,
HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherOutputReference,
HttpLoadbalancerApiRateLimitApiEndpointRules,
httpLoadbalancerApiRateLimitApiEndpointRulesToTerraform,
httpLoadbalancerApiRateLimitApiEndpointRulesToHclTerraform,
HttpLoadbalancerApiRateLimitApiEndpointRulesList } from './structs0'
export interface HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcher {
  /**
  * cookie_matchers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#cookie_matchers HttpLoadbalancer#cookie_matchers}
  */
  readonly cookieMatchers?: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchers[] | cdktf.IResolvable;
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#headers HttpLoadbalancer#headers}
  */
  readonly headers?: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeaders[] | cdktf.IResolvable;
  /**
  * jwt_claims block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#jwt_claims HttpLoadbalancer#jwt_claims}
  */
  readonly jwtClaims?: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaims[] | cdktf.IResolvable;
  /**
  * query_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#query_params HttpLoadbalancer#query_params}
  */
  readonly queryParams?: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParams[] | cdktf.IResolvable;
}

export function httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherToTerraform(struct?: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherOutputReference | HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie_matchers: cdktf.listMapper(httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersToTerraform, true)(struct!.cookieMatchers),
    headers: cdktf.listMapper(httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersToTerraform, true)(struct!.headers),
    jwt_claims: cdktf.listMapper(httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsToTerraform, true)(struct!.jwtClaims),
    query_params: cdktf.listMapper(httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsToTerraform, true)(struct!.queryParams),
  }
}


export function httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherToHclTerraform(struct?: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherOutputReference | HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie_matchers: {
      value: cdktf.listMapperHcl(httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersToHclTerraform, true)(struct!.cookieMatchers),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersList",
    },
    headers: {
      value: cdktf.listMapperHcl(httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersList",
    },
    jwt_claims: {
      value: cdktf.listMapperHcl(httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsToHclTerraform, true)(struct!.jwtClaims),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsList",
    },
    query_params: {
      value: cdktf.listMapperHcl(httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsToHclTerraform, true)(struct!.queryParams),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookieMatchers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieMatchers = this._cookieMatchers?.internalValue;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._jwtClaims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtClaims = this._jwtClaims?.internalValue;
    }
    if (this._queryParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParams = this._queryParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cookieMatchers.internalValue = undefined;
      this._headers.internalValue = undefined;
      this._jwtClaims.internalValue = undefined;
      this._queryParams.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cookieMatchers.internalValue = value.cookieMatchers;
      this._headers.internalValue = value.headers;
      this._jwtClaims.internalValue = value.jwtClaims;
      this._queryParams.internalValue = value.queryParams;
    }
  }

  // cookie_matchers - computed: false, optional: true, required: false
  private _cookieMatchers = new HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersList(this, "cookie_matchers", false);
  public get cookieMatchers() {
    return this._cookieMatchers;
  }
  public putCookieMatchers(value: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchers[] | cdktf.IResolvable) {
    this._cookieMatchers.internalValue = value;
  }
  public resetCookieMatchers() {
    this._cookieMatchers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieMatchersInput() {
    return this._cookieMatchers.internalValue;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // jwt_claims - computed: false, optional: true, required: false
  private _jwtClaims = new HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsList(this, "jwt_claims", false);
  public get jwtClaims() {
    return this._jwtClaims;
  }
  public putJwtClaims(value: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaims[] | cdktf.IResolvable) {
    this._jwtClaims.internalValue = value;
  }
  public resetJwtClaims() {
    this._jwtClaims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtClaimsInput() {
    return this._jwtClaims.internalValue;
  }

  // query_params - computed: false, optional: true, required: false
  private _queryParams = new HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsList(this, "query_params", false);
  public get queryParams() {
    return this._queryParams;
  }
  public putQueryParams(value: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParams[] | cdktf.IResolvable) {
    this._queryParams.internalValue = value;
  }
  public resetQueryParams() {
    this._queryParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParamsInput() {
    return this._queryParams.internalValue;
  }
}
export interface HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#any_domain HttpLoadbalancer#any_domain}
  */
  readonly anyDomain?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#any_url HttpLoadbalancer#any_url}
  */
  readonly anyUrl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#base_path HttpLoadbalancer#base_path}
  */
  readonly basePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#specific_domain HttpLoadbalancer#specific_domain}
  */
  readonly specificDomain?: string;
  /**
  * api_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#api_endpoint HttpLoadbalancer#api_endpoint}
  */
  readonly apiEndpoint: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiEndpoint;
  /**
  * api_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#api_groups HttpLoadbalancer#api_groups}
  */
  readonly apiGroups?: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiGroups;
  /**
  * client_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#client_matcher HttpLoadbalancer#client_matcher}
  */
  readonly clientMatcher?: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcher;
  /**
  * request_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#request_matcher HttpLoadbalancer#request_matcher}
  */
  readonly requestMatcher?: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcher;
}

export function httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesToTerraform(struct?: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_domain: cdktf.booleanToTerraform(struct!.anyDomain),
    any_url: cdktf.booleanToTerraform(struct!.anyUrl),
    base_path: cdktf.stringToTerraform(struct!.basePath),
    specific_domain: cdktf.stringToTerraform(struct!.specificDomain),
    api_endpoint: httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiEndpointToTerraform(struct!.apiEndpoint),
    api_groups: httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiGroupsToTerraform(struct!.apiGroups),
    client_matcher: httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherToTerraform(struct!.clientMatcher),
    request_matcher: httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherToTerraform(struct!.requestMatcher),
  }
}


export function httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesToHclTerraform(struct?: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any_domain: {
      value: cdktf.booleanToHclTerraform(struct!.anyDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    any_url: {
      value: cdktf.booleanToHclTerraform(struct!.anyUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    base_path: {
      value: cdktf.stringToHclTerraform(struct!.basePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    specific_domain: {
      value: cdktf.stringToHclTerraform(struct!.specificDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_endpoint: {
      value: httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiEndpointToHclTerraform(struct!.apiEndpoint),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiEndpointList",
    },
    api_groups: {
      value: httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiGroupsToHclTerraform(struct!.apiGroups),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiGroupsList",
    },
    client_matcher: {
      value: httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherToHclTerraform(struct!.clientMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherList",
    },
    request_matcher: {
      value: httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherToHclTerraform(struct!.requestMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyDomain = this._anyDomain;
    }
    if (this._anyUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyUrl = this._anyUrl;
    }
    if (this._basePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.basePath = this._basePath;
    }
    if (this._specificDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.specificDomain = this._specificDomain;
    }
    if (this._apiEndpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiEndpoint = this._apiEndpoint?.internalValue;
    }
    if (this._apiGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroups = this._apiGroups?.internalValue;
    }
    if (this._clientMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientMatcher = this._clientMatcher?.internalValue;
    }
    if (this._requestMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMatcher = this._requestMatcher?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anyDomain = undefined;
      this._anyUrl = undefined;
      this._basePath = undefined;
      this._specificDomain = undefined;
      this._apiEndpoint.internalValue = undefined;
      this._apiGroups.internalValue = undefined;
      this._clientMatcher.internalValue = undefined;
      this._requestMatcher.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anyDomain = value.anyDomain;
      this._anyUrl = value.anyUrl;
      this._basePath = value.basePath;
      this._specificDomain = value.specificDomain;
      this._apiEndpoint.internalValue = value.apiEndpoint;
      this._apiGroups.internalValue = value.apiGroups;
      this._clientMatcher.internalValue = value.clientMatcher;
      this._requestMatcher.internalValue = value.requestMatcher;
    }
  }

  // any_domain - computed: false, optional: true, required: false
  private _anyDomain?: boolean | cdktf.IResolvable; 
  public get anyDomain() {
    return this.getBooleanAttribute('any_domain');
  }
  public set anyDomain(value: boolean | cdktf.IResolvable) {
    this._anyDomain = value;
  }
  public resetAnyDomain() {
    this._anyDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyDomainInput() {
    return this._anyDomain;
  }

  // any_url - computed: false, optional: true, required: false
  private _anyUrl?: boolean | cdktf.IResolvable; 
  public get anyUrl() {
    return this.getBooleanAttribute('any_url');
  }
  public set anyUrl(value: boolean | cdktf.IResolvable) {
    this._anyUrl = value;
  }
  public resetAnyUrl() {
    this._anyUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyUrlInput() {
    return this._anyUrl;
  }

  // base_path - computed: false, optional: true, required: false
  private _basePath?: string; 
  public get basePath() {
    return this.getStringAttribute('base_path');
  }
  public set basePath(value: string) {
    this._basePath = value;
  }
  public resetBasePath() {
    this._basePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basePathInput() {
    return this._basePath;
  }

  // specific_domain - computed: false, optional: true, required: false
  private _specificDomain?: string; 
  public get specificDomain() {
    return this.getStringAttribute('specific_domain');
  }
  public set specificDomain(value: string) {
    this._specificDomain = value;
  }
  public resetSpecificDomain() {
    this._specificDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specificDomainInput() {
    return this._specificDomain;
  }

  // api_endpoint - computed: false, optional: false, required: true
  private _apiEndpoint = new HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiEndpointOutputReference(this, "api_endpoint");
  public get apiEndpoint() {
    return this._apiEndpoint;
  }
  public putApiEndpoint(value: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiEndpoint) {
    this._apiEndpoint.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiEndpointInput() {
    return this._apiEndpoint.internalValue;
  }

  // api_groups - computed: false, optional: true, required: false
  private _apiGroups = new HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiGroupsOutputReference(this, "api_groups");
  public get apiGroups() {
    return this._apiGroups;
  }
  public putApiGroups(value: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiGroups) {
    this._apiGroups.internalValue = value;
  }
  public resetApiGroups() {
    this._apiGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupsInput() {
    return this._apiGroups.internalValue;
  }

  // client_matcher - computed: false, optional: true, required: false
  private _clientMatcher = new HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherOutputReference(this, "client_matcher");
  public get clientMatcher() {
    return this._clientMatcher;
  }
  public putClientMatcher(value: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcher) {
    this._clientMatcher.internalValue = value;
  }
  public resetClientMatcher() {
    this._clientMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientMatcherInput() {
    return this._clientMatcher.internalValue;
  }

  // request_matcher - computed: false, optional: true, required: false
  private _requestMatcher = new HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherOutputReference(this, "request_matcher");
  public get requestMatcher() {
    return this._requestMatcher;
  }
  public putRequestMatcher(value: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcher) {
    this._requestMatcher.internalValue = value;
  }
  public resetRequestMatcher() {
    this._requestMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMatcherInput() {
    return this._requestMatcher.internalValue;
  }
}

export class HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRules[] | cdktf.IResolvable

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
  public get(index: number): HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesOutputReference {
    return new HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerApiRateLimitBypassRateLimitingRules {
  /**
  * bypass_rate_limiting_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#bypass_rate_limiting_rules HttpLoadbalancer#bypass_rate_limiting_rules}
  */
  readonly bypassRateLimitingRules?: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRules[] | cdktf.IResolvable;
}

export function httpLoadbalancerApiRateLimitBypassRateLimitingRulesToTerraform(struct?: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesOutputReference | HttpLoadbalancerApiRateLimitBypassRateLimitingRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bypass_rate_limiting_rules: cdktf.listMapper(httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesToTerraform, true)(struct!.bypassRateLimitingRules),
  }
}


export function httpLoadbalancerApiRateLimitBypassRateLimitingRulesToHclTerraform(struct?: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesOutputReference | HttpLoadbalancerApiRateLimitBypassRateLimitingRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bypass_rate_limiting_rules: {
      value: cdktf.listMapperHcl(httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesToHclTerraform, true)(struct!.bypassRateLimitingRules),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitBypassRateLimitingRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitBypassRateLimitingRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bypassRateLimitingRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassRateLimitingRules = this._bypassRateLimitingRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitBypassRateLimitingRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bypassRateLimitingRules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bypassRateLimitingRules.internalValue = value.bypassRateLimitingRules;
    }
  }

  // bypass_rate_limiting_rules - computed: false, optional: true, required: false
  private _bypassRateLimitingRules = new HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesList(this, "bypass_rate_limiting_rules", false);
  public get bypassRateLimitingRules() {
    return this._bypassRateLimitingRules;
  }
  public putBypassRateLimitingRules(value: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRules[] | cdktf.IResolvable) {
    this._bypassRateLimitingRules.internalValue = value;
  }
  public resetBypassRateLimitingRules() {
    this._bypassRateLimitingRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassRateLimitingRulesInput() {
    return this._bypassRateLimitingRules.internalValue;
  }
}
export interface HttpLoadbalancerApiRateLimitCustomIpAllowedListRateLimiterAllowedPrefixes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerApiRateLimitCustomIpAllowedListRateLimiterAllowedPrefixesToTerraform(struct?: HttpLoadbalancerApiRateLimitCustomIpAllowedListRateLimiterAllowedPrefixes | cdktf.IResolvable): any {
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


export function httpLoadbalancerApiRateLimitCustomIpAllowedListRateLimiterAllowedPrefixesToHclTerraform(struct?: HttpLoadbalancerApiRateLimitCustomIpAllowedListRateLimiterAllowedPrefixes | cdktf.IResolvable): any {
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

export class HttpLoadbalancerApiRateLimitCustomIpAllowedListRateLimiterAllowedPrefixesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttpLoadbalancerApiRateLimitCustomIpAllowedListRateLimiterAllowedPrefixes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiRateLimitCustomIpAllowedListRateLimiterAllowedPrefixes | cdktf.IResolvable | undefined) {
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

export class HttpLoadbalancerApiRateLimitCustomIpAllowedListRateLimiterAllowedPrefixesList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerApiRateLimitCustomIpAllowedListRateLimiterAllowedPrefixes[] | cdktf.IResolvable

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
  public get(index: number): HttpLoadbalancerApiRateLimitCustomIpAllowedListRateLimiterAllowedPrefixesOutputReference {
    return new HttpLoadbalancerApiRateLimitCustomIpAllowedListRateLimiterAllowedPrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerApiRateLimitCustomIpAllowedListStruct {
  /**
  * rate_limiter_allowed_prefixes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#rate_limiter_allowed_prefixes HttpLoadbalancer#rate_limiter_allowed_prefixes}
  */
  readonly rateLimiterAllowedPrefixes: HttpLoadbalancerApiRateLimitCustomIpAllowedListRateLimiterAllowedPrefixes[] | cdktf.IResolvable;
}

export function httpLoadbalancerApiRateLimitCustomIpAllowedListStructToTerraform(struct?: HttpLoadbalancerApiRateLimitCustomIpAllowedListStructOutputReference | HttpLoadbalancerApiRateLimitCustomIpAllowedListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rate_limiter_allowed_prefixes: cdktf.listMapper(httpLoadbalancerApiRateLimitCustomIpAllowedListRateLimiterAllowedPrefixesToTerraform, true)(struct!.rateLimiterAllowedPrefixes),
  }
}


export function httpLoadbalancerApiRateLimitCustomIpAllowedListStructToHclTerraform(struct?: HttpLoadbalancerApiRateLimitCustomIpAllowedListStructOutputReference | HttpLoadbalancerApiRateLimitCustomIpAllowedListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rate_limiter_allowed_prefixes: {
      value: cdktf.listMapperHcl(httpLoadbalancerApiRateLimitCustomIpAllowedListRateLimiterAllowedPrefixesToHclTerraform, true)(struct!.rateLimiterAllowedPrefixes),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitCustomIpAllowedListRateLimiterAllowedPrefixesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitCustomIpAllowedListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitCustomIpAllowedListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rateLimiterAllowedPrefixes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimiterAllowedPrefixes = this._rateLimiterAllowedPrefixes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitCustomIpAllowedListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rateLimiterAllowedPrefixes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rateLimiterAllowedPrefixes.internalValue = value.rateLimiterAllowedPrefixes;
    }
  }

  // rate_limiter_allowed_prefixes - computed: false, optional: false, required: true
  private _rateLimiterAllowedPrefixes = new HttpLoadbalancerApiRateLimitCustomIpAllowedListRateLimiterAllowedPrefixesList(this, "rate_limiter_allowed_prefixes", false);
  public get rateLimiterAllowedPrefixes() {
    return this._rateLimiterAllowedPrefixes;
  }
  public putRateLimiterAllowedPrefixes(value: HttpLoadbalancerApiRateLimitCustomIpAllowedListRateLimiterAllowedPrefixes[] | cdktf.IResolvable) {
    this._rateLimiterAllowedPrefixes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimiterAllowedPrefixesInput() {
    return this._rateLimiterAllowedPrefixes.internalValue;
  }
}
export interface HttpLoadbalancerApiRateLimitIpAllowedListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ipv6_prefixes HttpLoadbalancer#ipv6_prefixes}
  */
  readonly ipv6Prefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#prefixes HttpLoadbalancer#prefixes}
  */
  readonly prefixes?: string[];
}

export function httpLoadbalancerApiRateLimitIpAllowedListStructToTerraform(struct?: HttpLoadbalancerApiRateLimitIpAllowedListStructOutputReference | HttpLoadbalancerApiRateLimitIpAllowedListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv6Prefixes),
    prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefixes),
  }
}


export function httpLoadbalancerApiRateLimitIpAllowedListStructToHclTerraform(struct?: HttpLoadbalancerApiRateLimitIpAllowedListStructOutputReference | HttpLoadbalancerApiRateLimitIpAllowedListStruct): any {
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

export class HttpLoadbalancerApiRateLimitIpAllowedListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitIpAllowedListStruct | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiRateLimitIpAllowedListStruct | undefined) {
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
export interface HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#as_numbers HttpLoadbalancer#as_numbers}
  */
  readonly asNumbers: number[];
}

export function httpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnListStructToTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnListStructOutputReference | HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_numbers: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.asNumbers),
  }
}


export function httpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnListStructToHclTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnListStructOutputReference | HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnListStruct): any {
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

export class HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asNumbers !== undefined) {
      hasAnyValues = true;
      internalValueResult.asNumbers = this._asNumbers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnListStruct | undefined) {
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
export interface HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSetsToTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSets | cdktf.IResolvable): any {
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


export function httpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSetsToHclTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSets | cdktf.IResolvable): any {
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

export class HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSets | cdktf.IResolvable | undefined) {
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

export class HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSetsList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSets[] | cdktf.IResolvable

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
  public get(index: number): HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSetsOutputReference {
    return new HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcher {
  /**
  * asn_sets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#asn_sets HttpLoadbalancer#asn_sets}
  */
  readonly asnSets: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSets[] | cdktf.IResolvable;
}

export function httpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherToTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherOutputReference | HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asn_sets: cdktf.listMapper(httpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSetsToTerraform, true)(struct!.asnSets),
  }
}


export function httpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherToHclTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherOutputReference | HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asn_sets: {
      value: cdktf.listMapperHcl(httpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSetsToHclTerraform, true)(struct!.asnSets),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asnSets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnSets = this._asnSets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcher | undefined) {
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
  private _asnSets = new HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSetsList(this, "asn_sets", false);
  public get asnSets() {
    return this._asnSets;
  }
  public putAsnSets(value: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSets[] | cdktf.IResolvable) {
    this._asnSets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asnSetsInput() {
    return this._asnSets.internalValue;
  }
}
export interface HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherClientSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#expressions HttpLoadbalancer#expressions}
  */
  readonly expressions: string[];
}

export function httpLoadbalancerApiRateLimitServerUrlRulesClientMatcherClientSelectorToTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherClientSelectorOutputReference | HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherClientSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expressions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.expressions),
  }
}


export function httpLoadbalancerApiRateLimitServerUrlRulesClientMatcherClientSelectorToHclTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherClientSelectorOutputReference | HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherClientSelector): any {
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

export class HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherClientSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherClientSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expressions !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressions = this._expressions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherClientSelector | undefined) {
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
export interface HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSetsToTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSets | cdktf.IResolvable): any {
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


export function httpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSetsToHclTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSets | cdktf.IResolvable): any {
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

export class HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSets | cdktf.IResolvable | undefined) {
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

export class HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSetsList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSets[] | cdktf.IResolvable

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
  public get(index: number): HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSetsOutputReference {
    return new HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#invert_matcher HttpLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * prefix_sets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#prefix_sets HttpLoadbalancer#prefix_sets}
  */
  readonly prefixSets: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSets[] | cdktf.IResolvable;
}

export function httpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherToTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherOutputReference | HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    prefix_sets: cdktf.listMapper(httpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSetsToTerraform, true)(struct!.prefixSets),
  }
}


export function httpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherToHclTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherOutputReference | HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcher): any {
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
      value: cdktf.listMapperHcl(httpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSetsToHclTerraform, true)(struct!.prefixSets),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcher | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcher | undefined) {
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
  private _prefixSets = new HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSetsList(this, "prefix_sets", false);
  public get prefixSets() {
    return this._prefixSets;
  }
  public putPrefixSets(value: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSets[] | cdktf.IResolvable) {
    this._prefixSets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixSetsInput() {
    return this._prefixSets.internalValue;
  }
}
export interface HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpPrefixListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#invert_match HttpLoadbalancer#invert_match}
  */
  readonly invertMatch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ip_prefixes HttpLoadbalancer#ip_prefixes}
  */
  readonly ipPrefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ipv6_prefixes HttpLoadbalancer#ipv6_prefixes}
  */
  readonly ipv6Prefixes?: string[];
}

export function httpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpPrefixListStructToTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpPrefixListStructOutputReference | HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpPrefixListStruct): any {
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


export function httpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpPrefixListStructToHclTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpPrefixListStructOutputReference | HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpPrefixListStruct): any {
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

export class HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpPrefixListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpPrefixListStruct | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpPrefixListStruct | undefined) {
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
export interface HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpThreatCategoryListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ip_threat_categories HttpLoadbalancer#ip_threat_categories}
  */
  readonly ipThreatCategories: string[];
}

export function httpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpThreatCategoryListStructToTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpThreatCategoryListStructOutputReference | HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpThreatCategoryListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_threat_categories: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipThreatCategories),
  }
}


export function httpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpThreatCategoryListStructToHclTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpThreatCategoryListStructOutputReference | HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpThreatCategoryListStruct): any {
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

export class HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpThreatCategoryListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpThreatCategoryListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipThreatCategories !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipThreatCategories = this._ipThreatCategories;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpThreatCategoryListStruct | undefined) {
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
export interface HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherTlsFingerprintMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#classes HttpLoadbalancer#classes}
  */
  readonly classes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#exact_values HttpLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#excluded_values HttpLoadbalancer#excluded_values}
  */
  readonly excludedValues?: string[];
}

export function httpLoadbalancerApiRateLimitServerUrlRulesClientMatcherTlsFingerprintMatcherToTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherTlsFingerprintMatcherOutputReference | HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherTlsFingerprintMatcher): any {
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


export function httpLoadbalancerApiRateLimitServerUrlRulesClientMatcherTlsFingerprintMatcherToHclTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherTlsFingerprintMatcherOutputReference | HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherTlsFingerprintMatcher): any {
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

export class HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherTlsFingerprintMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherTlsFingerprintMatcher | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherTlsFingerprintMatcher | undefined) {
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
export interface HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#any_client HttpLoadbalancer#any_client}
  */
  readonly anyClient?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#any_ip HttpLoadbalancer#any_ip}
  */
  readonly anyIp?: boolean | cdktf.IResolvable;
  /**
  * asn_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#asn_list HttpLoadbalancer#asn_list}
  */
  readonly asnList?: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnListStruct;
  /**
  * asn_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#asn_matcher HttpLoadbalancer#asn_matcher}
  */
  readonly asnMatcher?: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcher;
  /**
  * client_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#client_selector HttpLoadbalancer#client_selector}
  */
  readonly clientSelector?: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherClientSelector;
  /**
  * ip_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ip_matcher HttpLoadbalancer#ip_matcher}
  */
  readonly ipMatcher?: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcher;
  /**
  * ip_prefix_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ip_prefix_list HttpLoadbalancer#ip_prefix_list}
  */
  readonly ipPrefixList?: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpPrefixListStruct;
  /**
  * ip_threat_category_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ip_threat_category_list HttpLoadbalancer#ip_threat_category_list}
  */
  readonly ipThreatCategoryList?: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpThreatCategoryListStruct;
  /**
  * tls_fingerprint_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#tls_fingerprint_matcher HttpLoadbalancer#tls_fingerprint_matcher}
  */
  readonly tlsFingerprintMatcher?: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherTlsFingerprintMatcher;
}

export function httpLoadbalancerApiRateLimitServerUrlRulesClientMatcherToTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherOutputReference | HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_client: cdktf.booleanToTerraform(struct!.anyClient),
    any_ip: cdktf.booleanToTerraform(struct!.anyIp),
    asn_list: httpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnListStructToTerraform(struct!.asnList),
    asn_matcher: httpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherToTerraform(struct!.asnMatcher),
    client_selector: httpLoadbalancerApiRateLimitServerUrlRulesClientMatcherClientSelectorToTerraform(struct!.clientSelector),
    ip_matcher: httpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherToTerraform(struct!.ipMatcher),
    ip_prefix_list: httpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpPrefixListStructToTerraform(struct!.ipPrefixList),
    ip_threat_category_list: httpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpThreatCategoryListStructToTerraform(struct!.ipThreatCategoryList),
    tls_fingerprint_matcher: httpLoadbalancerApiRateLimitServerUrlRulesClientMatcherTlsFingerprintMatcherToTerraform(struct!.tlsFingerprintMatcher),
  }
}


export function httpLoadbalancerApiRateLimitServerUrlRulesClientMatcherToHclTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherOutputReference | HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any_client: {
      value: cdktf.booleanToHclTerraform(struct!.anyClient),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    any_ip: {
      value: cdktf.booleanToHclTerraform(struct!.anyIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    asn_list: {
      value: httpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnListStructToHclTerraform(struct!.asnList),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnListStructList",
    },
    asn_matcher: {
      value: httpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherToHclTerraform(struct!.asnMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherList",
    },
    client_selector: {
      value: httpLoadbalancerApiRateLimitServerUrlRulesClientMatcherClientSelectorToHclTerraform(struct!.clientSelector),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherClientSelectorList",
    },
    ip_matcher: {
      value: httpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherToHclTerraform(struct!.ipMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherList",
    },
    ip_prefix_list: {
      value: httpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpPrefixListStructToHclTerraform(struct!.ipPrefixList),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpPrefixListStructList",
    },
    ip_threat_category_list: {
      value: httpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpThreatCategoryListStructToHclTerraform(struct!.ipThreatCategoryList),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpThreatCategoryListStructList",
    },
    tls_fingerprint_matcher: {
      value: httpLoadbalancerApiRateLimitServerUrlRulesClientMatcherTlsFingerprintMatcherToHclTerraform(struct!.tlsFingerprintMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherTlsFingerprintMatcherList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyClient = this._anyClient;
    }
    if (this._anyIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyIp = this._anyIp;
    }
    if (this._asnList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnList = this._asnList?.internalValue;
    }
    if (this._asnMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnMatcher = this._asnMatcher?.internalValue;
    }
    if (this._clientSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSelector = this._clientSelector?.internalValue;
    }
    if (this._ipMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipMatcher = this._ipMatcher?.internalValue;
    }
    if (this._ipPrefixList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPrefixList = this._ipPrefixList?.internalValue;
    }
    if (this._ipThreatCategoryList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipThreatCategoryList = this._ipThreatCategoryList?.internalValue;
    }
    if (this._tlsFingerprintMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsFingerprintMatcher = this._tlsFingerprintMatcher?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._anyClient = undefined;
      this._anyIp = undefined;
      this._asnList.internalValue = undefined;
      this._asnMatcher.internalValue = undefined;
      this._clientSelector.internalValue = undefined;
      this._ipMatcher.internalValue = undefined;
      this._ipPrefixList.internalValue = undefined;
      this._ipThreatCategoryList.internalValue = undefined;
      this._tlsFingerprintMatcher.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._anyClient = value.anyClient;
      this._anyIp = value.anyIp;
      this._asnList.internalValue = value.asnList;
      this._asnMatcher.internalValue = value.asnMatcher;
      this._clientSelector.internalValue = value.clientSelector;
      this._ipMatcher.internalValue = value.ipMatcher;
      this._ipPrefixList.internalValue = value.ipPrefixList;
      this._ipThreatCategoryList.internalValue = value.ipThreatCategoryList;
      this._tlsFingerprintMatcher.internalValue = value.tlsFingerprintMatcher;
    }
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

  // asn_list - computed: false, optional: true, required: false
  private _asnList = new HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnListStructOutputReference(this, "asn_list");
  public get asnList() {
    return this._asnList;
  }
  public putAsnList(value: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnListStruct) {
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
  private _asnMatcher = new HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherOutputReference(this, "asn_matcher");
  public get asnMatcher() {
    return this._asnMatcher;
  }
  public putAsnMatcher(value: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcher) {
    this._asnMatcher.internalValue = value;
  }
  public resetAsnMatcher() {
    this._asnMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnMatcherInput() {
    return this._asnMatcher.internalValue;
  }

  // client_selector - computed: false, optional: true, required: false
  private _clientSelector = new HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherClientSelectorOutputReference(this, "client_selector");
  public get clientSelector() {
    return this._clientSelector;
  }
  public putClientSelector(value: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherClientSelector) {
    this._clientSelector.internalValue = value;
  }
  public resetClientSelector() {
    this._clientSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSelectorInput() {
    return this._clientSelector.internalValue;
  }

  // ip_matcher - computed: false, optional: true, required: false
  private _ipMatcher = new HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherOutputReference(this, "ip_matcher");
  public get ipMatcher() {
    return this._ipMatcher;
  }
  public putIpMatcher(value: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcher) {
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
  private _ipPrefixList = new HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpPrefixListStructOutputReference(this, "ip_prefix_list");
  public get ipPrefixList() {
    return this._ipPrefixList;
  }
  public putIpPrefixList(value: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpPrefixListStruct) {
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
  private _ipThreatCategoryList = new HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpThreatCategoryListStructOutputReference(this, "ip_threat_category_list");
  public get ipThreatCategoryList() {
    return this._ipThreatCategoryList;
  }
  public putIpThreatCategoryList(value: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpThreatCategoryListStruct) {
    this._ipThreatCategoryList.internalValue = value;
  }
  public resetIpThreatCategoryList() {
    this._ipThreatCategoryList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipThreatCategoryListInput() {
    return this._ipThreatCategoryList.internalValue;
  }

  // tls_fingerprint_matcher - computed: false, optional: true, required: false
  private _tlsFingerprintMatcher = new HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherTlsFingerprintMatcherOutputReference(this, "tls_fingerprint_matcher");
  public get tlsFingerprintMatcher() {
    return this._tlsFingerprintMatcher;
  }
  public putTlsFingerprintMatcher(value: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherTlsFingerprintMatcher) {
    this._tlsFingerprintMatcher.internalValue = value;
  }
  public resetTlsFingerprintMatcher() {
    this._tlsFingerprintMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsFingerprintMatcherInput() {
    return this._tlsFingerprintMatcher.internalValue;
  }
}
export interface HttpLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterRefUserId {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterRefUserIdToTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterRefUserIdOutputReference | HttpLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterRefUserId): any {
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


export function httpLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterRefUserIdToHclTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterRefUserIdOutputReference | HttpLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterRefUserId): any {
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

export class HttpLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterRefUserIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterRefUserId | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterRefUserId | undefined) {
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
export interface HttpLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#threshold HttpLoadbalancer#threshold}
  */
  readonly threshold: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#unit HttpLoadbalancer#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#use_http_lb_user_id HttpLoadbalancer#use_http_lb_user_id}
  */
  readonly useHttpLbUserId?: boolean | cdktf.IResolvable;
  /**
  * ref_user_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ref_user_id HttpLoadbalancer#ref_user_id}
  */
  readonly refUserId?: HttpLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterRefUserId;
}

export function httpLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterToTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterOutputReference | HttpLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    threshold: cdktf.numberToTerraform(struct!.threshold),
    unit: cdktf.stringToTerraform(struct!.unit),
    use_http_lb_user_id: cdktf.booleanToTerraform(struct!.useHttpLbUserId),
    ref_user_id: httpLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterRefUserIdToTerraform(struct!.refUserId),
  }
}


export function httpLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterToHclTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterOutputReference | HttpLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_http_lb_user_id: {
      value: cdktf.booleanToHclTerraform(struct!.useHttpLbUserId),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ref_user_id: {
      value: httpLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterRefUserIdToHclTerraform(struct!.refUserId),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterRefUserIdList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._useHttpLbUserId !== undefined) {
      hasAnyValues = true;
      internalValueResult.useHttpLbUserId = this._useHttpLbUserId;
    }
    if (this._refUserId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.refUserId = this._refUserId?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._threshold = undefined;
      this._unit = undefined;
      this._useHttpLbUserId = undefined;
      this._refUserId.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._threshold = value.threshold;
      this._unit = value.unit;
      this._useHttpLbUserId = value.useHttpLbUserId;
      this._refUserId.internalValue = value.refUserId;
    }
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

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // use_http_lb_user_id - computed: false, optional: true, required: false
  private _useHttpLbUserId?: boolean | cdktf.IResolvable; 
  public get useHttpLbUserId() {
    return this.getBooleanAttribute('use_http_lb_user_id');
  }
  public set useHttpLbUserId(value: boolean | cdktf.IResolvable) {
    this._useHttpLbUserId = value;
  }
  public resetUseHttpLbUserId() {
    this._useHttpLbUserId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useHttpLbUserIdInput() {
    return this._useHttpLbUserId;
  }

  // ref_user_id - computed: false, optional: true, required: false
  private _refUserId = new HttpLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterRefUserIdOutputReference(this, "ref_user_id");
  public get refUserId() {
    return this._refUserId;
  }
  public putRefUserId(value: HttpLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterRefUserId) {
    this._refUserId.internalValue = value;
  }
  public resetRefUserId() {
    this._refUserId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refUserIdInput() {
    return this._refUserId.internalValue;
  }
}
export interface HttpLoadbalancerApiRateLimitServerUrlRulesRefRateLimiter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerApiRateLimitServerUrlRulesRefRateLimiterToTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesRefRateLimiterOutputReference | HttpLoadbalancerApiRateLimitServerUrlRulesRefRateLimiter): any {
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


export function httpLoadbalancerApiRateLimitServerUrlRulesRefRateLimiterToHclTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesRefRateLimiterOutputReference | HttpLoadbalancerApiRateLimitServerUrlRulesRefRateLimiter): any {
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

export class HttpLoadbalancerApiRateLimitServerUrlRulesRefRateLimiterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitServerUrlRulesRefRateLimiter | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiRateLimitServerUrlRulesRefRateLimiter | undefined) {
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
export interface HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#exact_values HttpLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#regex_values HttpLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#transformers HttpLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function httpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersItemToTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersItemOutputReference | HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersItem): any {
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


export function httpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersItemToHclTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersItemOutputReference | HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersItem): any {
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

export class HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersItem | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersItem | undefined) {
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
export interface HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#check_not_present HttpLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#check_present HttpLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#invert_matcher HttpLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#presence HttpLoadbalancer#presence}
  */
  readonly presence?: boolean | cdktf.IResolvable;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#item HttpLoadbalancer#item}
  */
  readonly item?: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersItem;
}

export function httpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersToTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    name: cdktf.stringToTerraform(struct!.name),
    presence: cdktf.booleanToTerraform(struct!.presence),
    item: httpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersItemToTerraform(struct!.item),
  }
}


export function httpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersToHclTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchers | cdktf.IResolvable): any {
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
    presence: {
      value: cdktf.booleanToHclTerraform(struct!.presence),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    item: {
      value: httpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchers | cdktf.IResolvable | undefined {
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
    if (this._presence !== undefined) {
      hasAnyValues = true;
      internalValueResult.presence = this._presence;
    }
    if (this._item?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.item = this._item?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkNotPresent = undefined;
      this._checkPresent = undefined;
      this._invertMatcher = undefined;
      this._name = undefined;
      this._presence = undefined;
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
      this._presence = value.presence;
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

  // presence - computed: false, optional: true, required: false
  private _presence?: boolean | cdktf.IResolvable; 
  public get presence() {
    return this.getBooleanAttribute('presence');
  }
  public set presence(value: boolean | cdktf.IResolvable) {
    this._presence = value;
  }
  public resetPresence() {
    this._presence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presenceInput() {
    return this._presence;
  }

  // item - computed: false, optional: true, required: false
  private _item = new HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersItem) {
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

export class HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchers[] | cdktf.IResolvable

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
  public get(index: number): HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersOutputReference {
    return new HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#exact_values HttpLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#regex_values HttpLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#transformers HttpLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function httpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersItemToTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersItemOutputReference | HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersItem): any {
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


export function httpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersItemToHclTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersItemOutputReference | HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersItem): any {
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

export class HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersItem | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersItem | undefined) {
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
export interface HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#check_not_present HttpLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#check_present HttpLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#invert_matcher HttpLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#presence HttpLoadbalancer#presence}
  */
  readonly presence?: boolean | cdktf.IResolvable;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#item HttpLoadbalancer#item}
  */
  readonly item?: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersItem;
}

export function httpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersToTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    name: cdktf.stringToTerraform(struct!.name),
    presence: cdktf.booleanToTerraform(struct!.presence),
    item: httpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersItemToTerraform(struct!.item),
  }
}


export function httpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersToHclTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeaders | cdktf.IResolvable): any {
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
    presence: {
      value: cdktf.booleanToHclTerraform(struct!.presence),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    item: {
      value: httpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeaders | cdktf.IResolvable | undefined {
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
    if (this._presence !== undefined) {
      hasAnyValues = true;
      internalValueResult.presence = this._presence;
    }
    if (this._item?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.item = this._item?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkNotPresent = undefined;
      this._checkPresent = undefined;
      this._invertMatcher = undefined;
      this._name = undefined;
      this._presence = undefined;
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
      this._presence = value.presence;
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

  // presence - computed: false, optional: true, required: false
  private _presence?: boolean | cdktf.IResolvable; 
  public get presence() {
    return this.getBooleanAttribute('presence');
  }
  public set presence(value: boolean | cdktf.IResolvable) {
    this._presence = value;
  }
  public resetPresence() {
    this._presence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presenceInput() {
    return this._presence;
  }

  // item - computed: false, optional: true, required: false
  private _item = new HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersItem) {
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

export class HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeaders[] | cdktf.IResolvable

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
  public get(index: number): HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersOutputReference {
    return new HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#exact_values HttpLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#regex_values HttpLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#transformers HttpLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function httpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsItemToTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsItemOutputReference | HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsItem): any {
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


export function httpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsItemToHclTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsItemOutputReference | HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsItem): any {
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

export class HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsItem | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsItem | undefined) {
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
export interface HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaims {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#check_not_present HttpLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#check_present HttpLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#invert_matcher HttpLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#item HttpLoadbalancer#item}
  */
  readonly item?: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsItem;
}

export function httpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsToTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    name: cdktf.stringToTerraform(struct!.name),
    item: httpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsItemToTerraform(struct!.item),
  }
}


export function httpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsToHclTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaims | cdktf.IResolvable): any {
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
      value: httpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaims | cdktf.IResolvable | undefined) {
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
  private _item = new HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsItem) {
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

export class HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaims[] | cdktf.IResolvable

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
  public get(index: number): HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsOutputReference {
    return new HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#exact_values HttpLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#regex_values HttpLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#transformers HttpLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function httpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsItemToTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsItemOutputReference | HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsItem): any {
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


export function httpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsItemToHclTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsItemOutputReference | HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsItem): any {
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

export class HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsItem | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsItem | undefined) {
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
export interface HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#check_not_present HttpLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#check_present HttpLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#invert_matcher HttpLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#key HttpLoadbalancer#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#presence HttpLoadbalancer#presence}
  */
  readonly presence?: boolean | cdktf.IResolvable;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#item HttpLoadbalancer#item}
  */
  readonly item?: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsItem;
}

export function httpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsToTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    key: cdktf.stringToTerraform(struct!.key),
    presence: cdktf.booleanToTerraform(struct!.presence),
    item: httpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsItemToTerraform(struct!.item),
  }
}


export function httpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsToHclTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParams | cdktf.IResolvable): any {
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
    presence: {
      value: cdktf.booleanToHclTerraform(struct!.presence),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    item: {
      value: httpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParams | cdktf.IResolvable | undefined {
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
    if (this._presence !== undefined) {
      hasAnyValues = true;
      internalValueResult.presence = this._presence;
    }
    if (this._item?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.item = this._item?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkNotPresent = undefined;
      this._checkPresent = undefined;
      this._invertMatcher = undefined;
      this._key = undefined;
      this._presence = undefined;
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
      this._presence = value.presence;
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

  // presence - computed: false, optional: true, required: false
  private _presence?: boolean | cdktf.IResolvable; 
  public get presence() {
    return this.getBooleanAttribute('presence');
  }
  public set presence(value: boolean | cdktf.IResolvable) {
    this._presence = value;
  }
  public resetPresence() {
    this._presence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presenceInput() {
    return this._presence;
  }

  // item - computed: false, optional: true, required: false
  private _item = new HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsItem) {
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

export class HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParams[] | cdktf.IResolvable

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
  public get(index: number): HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsOutputReference {
    return new HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcher {
  /**
  * cookie_matchers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#cookie_matchers HttpLoadbalancer#cookie_matchers}
  */
  readonly cookieMatchers?: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchers[] | cdktf.IResolvable;
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#headers HttpLoadbalancer#headers}
  */
  readonly headers?: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeaders[] | cdktf.IResolvable;
  /**
  * jwt_claims block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#jwt_claims HttpLoadbalancer#jwt_claims}
  */
  readonly jwtClaims?: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaims[] | cdktf.IResolvable;
  /**
  * query_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#query_params HttpLoadbalancer#query_params}
  */
  readonly queryParams?: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParams[] | cdktf.IResolvable;
}

export function httpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherToTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherOutputReference | HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie_matchers: cdktf.listMapper(httpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersToTerraform, true)(struct!.cookieMatchers),
    headers: cdktf.listMapper(httpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersToTerraform, true)(struct!.headers),
    jwt_claims: cdktf.listMapper(httpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsToTerraform, true)(struct!.jwtClaims),
    query_params: cdktf.listMapper(httpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsToTerraform, true)(struct!.queryParams),
  }
}


export function httpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherToHclTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherOutputReference | HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie_matchers: {
      value: cdktf.listMapperHcl(httpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersToHclTerraform, true)(struct!.cookieMatchers),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersList",
    },
    headers: {
      value: cdktf.listMapperHcl(httpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersList",
    },
    jwt_claims: {
      value: cdktf.listMapperHcl(httpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsToHclTerraform, true)(struct!.jwtClaims),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsList",
    },
    query_params: {
      value: cdktf.listMapperHcl(httpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsToHclTerraform, true)(struct!.queryParams),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookieMatchers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieMatchers = this._cookieMatchers?.internalValue;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._jwtClaims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtClaims = this._jwtClaims?.internalValue;
    }
    if (this._queryParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParams = this._queryParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cookieMatchers.internalValue = undefined;
      this._headers.internalValue = undefined;
      this._jwtClaims.internalValue = undefined;
      this._queryParams.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cookieMatchers.internalValue = value.cookieMatchers;
      this._headers.internalValue = value.headers;
      this._jwtClaims.internalValue = value.jwtClaims;
      this._queryParams.internalValue = value.queryParams;
    }
  }

  // cookie_matchers - computed: false, optional: true, required: false
  private _cookieMatchers = new HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersList(this, "cookie_matchers", false);
  public get cookieMatchers() {
    return this._cookieMatchers;
  }
  public putCookieMatchers(value: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchers[] | cdktf.IResolvable) {
    this._cookieMatchers.internalValue = value;
  }
  public resetCookieMatchers() {
    this._cookieMatchers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieMatchersInput() {
    return this._cookieMatchers.internalValue;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // jwt_claims - computed: false, optional: true, required: false
  private _jwtClaims = new HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsList(this, "jwt_claims", false);
  public get jwtClaims() {
    return this._jwtClaims;
  }
  public putJwtClaims(value: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaims[] | cdktf.IResolvable) {
    this._jwtClaims.internalValue = value;
  }
  public resetJwtClaims() {
    this._jwtClaims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtClaimsInput() {
    return this._jwtClaims.internalValue;
  }

  // query_params - computed: false, optional: true, required: false
  private _queryParams = new HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsList(this, "query_params", false);
  public get queryParams() {
    return this._queryParams;
  }
  public putQueryParams(value: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParams[] | cdktf.IResolvable) {
    this._queryParams.internalValue = value;
  }
  public resetQueryParams() {
    this._queryParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParamsInput() {
    return this._queryParams.internalValue;
  }
}
export interface HttpLoadbalancerApiRateLimitServerUrlRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#any_domain HttpLoadbalancer#any_domain}
  */
  readonly anyDomain?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#api_group HttpLoadbalancer#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#base_path HttpLoadbalancer#base_path}
  */
  readonly basePath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#specific_domain HttpLoadbalancer#specific_domain}
  */
  readonly specificDomain?: string;
  /**
  * client_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#client_matcher HttpLoadbalancer#client_matcher}
  */
  readonly clientMatcher?: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcher;
  /**
  * inline_rate_limiter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#inline_rate_limiter HttpLoadbalancer#inline_rate_limiter}
  */
  readonly inlineRateLimiter?: HttpLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiter;
  /**
  * ref_rate_limiter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ref_rate_limiter HttpLoadbalancer#ref_rate_limiter}
  */
  readonly refRateLimiter?: HttpLoadbalancerApiRateLimitServerUrlRulesRefRateLimiter;
  /**
  * request_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#request_matcher HttpLoadbalancer#request_matcher}
  */
  readonly requestMatcher?: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcher;
}

export function httpLoadbalancerApiRateLimitServerUrlRulesToTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_domain: cdktf.booleanToTerraform(struct!.anyDomain),
    api_group: cdktf.stringToTerraform(struct!.apiGroup),
    base_path: cdktf.stringToTerraform(struct!.basePath),
    specific_domain: cdktf.stringToTerraform(struct!.specificDomain),
    client_matcher: httpLoadbalancerApiRateLimitServerUrlRulesClientMatcherToTerraform(struct!.clientMatcher),
    inline_rate_limiter: httpLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterToTerraform(struct!.inlineRateLimiter),
    ref_rate_limiter: httpLoadbalancerApiRateLimitServerUrlRulesRefRateLimiterToTerraform(struct!.refRateLimiter),
    request_matcher: httpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherToTerraform(struct!.requestMatcher),
  }
}


export function httpLoadbalancerApiRateLimitServerUrlRulesToHclTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any_domain: {
      value: cdktf.booleanToHclTerraform(struct!.anyDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    api_group: {
      value: cdktf.stringToHclTerraform(struct!.apiGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    base_path: {
      value: cdktf.stringToHclTerraform(struct!.basePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    specific_domain: {
      value: cdktf.stringToHclTerraform(struct!.specificDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_matcher: {
      value: httpLoadbalancerApiRateLimitServerUrlRulesClientMatcherToHclTerraform(struct!.clientMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherList",
    },
    inline_rate_limiter: {
      value: httpLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterToHclTerraform(struct!.inlineRateLimiter),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterList",
    },
    ref_rate_limiter: {
      value: httpLoadbalancerApiRateLimitServerUrlRulesRefRateLimiterToHclTerraform(struct!.refRateLimiter),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitServerUrlRulesRefRateLimiterList",
    },
    request_matcher: {
      value: httpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherToHclTerraform(struct!.requestMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitServerUrlRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttpLoadbalancerApiRateLimitServerUrlRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyDomain = this._anyDomain;
    }
    if (this._apiGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroup = this._apiGroup;
    }
    if (this._basePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.basePath = this._basePath;
    }
    if (this._specificDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.specificDomain = this._specificDomain;
    }
    if (this._clientMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientMatcher = this._clientMatcher?.internalValue;
    }
    if (this._inlineRateLimiter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inlineRateLimiter = this._inlineRateLimiter?.internalValue;
    }
    if (this._refRateLimiter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.refRateLimiter = this._refRateLimiter?.internalValue;
    }
    if (this._requestMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMatcher = this._requestMatcher?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitServerUrlRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anyDomain = undefined;
      this._apiGroup = undefined;
      this._basePath = undefined;
      this._specificDomain = undefined;
      this._clientMatcher.internalValue = undefined;
      this._inlineRateLimiter.internalValue = undefined;
      this._refRateLimiter.internalValue = undefined;
      this._requestMatcher.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anyDomain = value.anyDomain;
      this._apiGroup = value.apiGroup;
      this._basePath = value.basePath;
      this._specificDomain = value.specificDomain;
      this._clientMatcher.internalValue = value.clientMatcher;
      this._inlineRateLimiter.internalValue = value.inlineRateLimiter;
      this._refRateLimiter.internalValue = value.refRateLimiter;
      this._requestMatcher.internalValue = value.requestMatcher;
    }
  }

  // any_domain - computed: false, optional: true, required: false
  private _anyDomain?: boolean | cdktf.IResolvable; 
  public get anyDomain() {
    return this.getBooleanAttribute('any_domain');
  }
  public set anyDomain(value: boolean | cdktf.IResolvable) {
    this._anyDomain = value;
  }
  public resetAnyDomain() {
    this._anyDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyDomainInput() {
    return this._anyDomain;
  }

  // api_group - computed: false, optional: true, required: false
  private _apiGroup?: string; 
  public get apiGroup() {
    return this.getStringAttribute('api_group');
  }
  public set apiGroup(value: string) {
    this._apiGroup = value;
  }
  public resetApiGroup() {
    this._apiGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupInput() {
    return this._apiGroup;
  }

  // base_path - computed: false, optional: false, required: true
  private _basePath?: string; 
  public get basePath() {
    return this.getStringAttribute('base_path');
  }
  public set basePath(value: string) {
    this._basePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get basePathInput() {
    return this._basePath;
  }

  // specific_domain - computed: false, optional: true, required: false
  private _specificDomain?: string; 
  public get specificDomain() {
    return this.getStringAttribute('specific_domain');
  }
  public set specificDomain(value: string) {
    this._specificDomain = value;
  }
  public resetSpecificDomain() {
    this._specificDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specificDomainInput() {
    return this._specificDomain;
  }

  // client_matcher - computed: false, optional: true, required: false
  private _clientMatcher = new HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherOutputReference(this, "client_matcher");
  public get clientMatcher() {
    return this._clientMatcher;
  }
  public putClientMatcher(value: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcher) {
    this._clientMatcher.internalValue = value;
  }
  public resetClientMatcher() {
    this._clientMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientMatcherInput() {
    return this._clientMatcher.internalValue;
  }

  // inline_rate_limiter - computed: false, optional: true, required: false
  private _inlineRateLimiter = new HttpLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterOutputReference(this, "inline_rate_limiter");
  public get inlineRateLimiter() {
    return this._inlineRateLimiter;
  }
  public putInlineRateLimiter(value: HttpLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiter) {
    this._inlineRateLimiter.internalValue = value;
  }
  public resetInlineRateLimiter() {
    this._inlineRateLimiter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlineRateLimiterInput() {
    return this._inlineRateLimiter.internalValue;
  }

  // ref_rate_limiter - computed: false, optional: true, required: false
  private _refRateLimiter = new HttpLoadbalancerApiRateLimitServerUrlRulesRefRateLimiterOutputReference(this, "ref_rate_limiter");
  public get refRateLimiter() {
    return this._refRateLimiter;
  }
  public putRefRateLimiter(value: HttpLoadbalancerApiRateLimitServerUrlRulesRefRateLimiter) {
    this._refRateLimiter.internalValue = value;
  }
  public resetRefRateLimiter() {
    this._refRateLimiter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refRateLimiterInput() {
    return this._refRateLimiter.internalValue;
  }

  // request_matcher - computed: false, optional: true, required: false
  private _requestMatcher = new HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherOutputReference(this, "request_matcher");
  public get requestMatcher() {
    return this._requestMatcher;
  }
  public putRequestMatcher(value: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcher) {
    this._requestMatcher.internalValue = value;
  }
  public resetRequestMatcher() {
    this._requestMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMatcherInput() {
    return this._requestMatcher.internalValue;
  }
}

export class HttpLoadbalancerApiRateLimitServerUrlRulesList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerApiRateLimitServerUrlRules[] | cdktf.IResolvable

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
  public get(index: number): HttpLoadbalancerApiRateLimitServerUrlRulesOutputReference {
    return new HttpLoadbalancerApiRateLimitServerUrlRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerApiRateLimit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#no_ip_allowed_list HttpLoadbalancer#no_ip_allowed_list}
  */
  readonly noIpAllowedList?: boolean | cdktf.IResolvable;
  /**
  * api_endpoint_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#api_endpoint_rules HttpLoadbalancer#api_endpoint_rules}
  */
  readonly apiEndpointRules?: HttpLoadbalancerApiRateLimitApiEndpointRules[] | cdktf.IResolvable;
  /**
  * bypass_rate_limiting_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#bypass_rate_limiting_rules HttpLoadbalancer#bypass_rate_limiting_rules}
  */
  readonly bypassRateLimitingRules?: HttpLoadbalancerApiRateLimitBypassRateLimitingRules;
  /**
  * custom_ip_allowed_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#custom_ip_allowed_list HttpLoadbalancer#custom_ip_allowed_list}
  */
  readonly customIpAllowedList?: HttpLoadbalancerApiRateLimitCustomIpAllowedListStruct;
  /**
  * ip_allowed_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ip_allowed_list HttpLoadbalancer#ip_allowed_list}
  */
  readonly ipAllowedList?: HttpLoadbalancerApiRateLimitIpAllowedListStruct;
  /**
  * server_url_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#server_url_rules HttpLoadbalancer#server_url_rules}
  */
  readonly serverUrlRules?: HttpLoadbalancerApiRateLimitServerUrlRules[] | cdktf.IResolvable;
}

export function httpLoadbalancerApiRateLimitToTerraform(struct?: HttpLoadbalancerApiRateLimitOutputReference | HttpLoadbalancerApiRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_ip_allowed_list: cdktf.booleanToTerraform(struct!.noIpAllowedList),
    api_endpoint_rules: cdktf.listMapper(httpLoadbalancerApiRateLimitApiEndpointRulesToTerraform, true)(struct!.apiEndpointRules),
    bypass_rate_limiting_rules: httpLoadbalancerApiRateLimitBypassRateLimitingRulesToTerraform(struct!.bypassRateLimitingRules),
    custom_ip_allowed_list: httpLoadbalancerApiRateLimitCustomIpAllowedListStructToTerraform(struct!.customIpAllowedList),
    ip_allowed_list: httpLoadbalancerApiRateLimitIpAllowedListStructToTerraform(struct!.ipAllowedList),
    server_url_rules: cdktf.listMapper(httpLoadbalancerApiRateLimitServerUrlRulesToTerraform, true)(struct!.serverUrlRules),
  }
}


export function httpLoadbalancerApiRateLimitToHclTerraform(struct?: HttpLoadbalancerApiRateLimitOutputReference | HttpLoadbalancerApiRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no_ip_allowed_list: {
      value: cdktf.booleanToHclTerraform(struct!.noIpAllowedList),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    api_endpoint_rules: {
      value: cdktf.listMapperHcl(httpLoadbalancerApiRateLimitApiEndpointRulesToHclTerraform, true)(struct!.apiEndpointRules),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitApiEndpointRulesList",
    },
    bypass_rate_limiting_rules: {
      value: httpLoadbalancerApiRateLimitBypassRateLimitingRulesToHclTerraform(struct!.bypassRateLimitingRules),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitBypassRateLimitingRulesList",
    },
    custom_ip_allowed_list: {
      value: httpLoadbalancerApiRateLimitCustomIpAllowedListStructToHclTerraform(struct!.customIpAllowedList),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitCustomIpAllowedListStructList",
    },
    ip_allowed_list: {
      value: httpLoadbalancerApiRateLimitIpAllowedListStructToHclTerraform(struct!.ipAllowedList),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitIpAllowedListStructList",
    },
    server_url_rules: {
      value: cdktf.listMapperHcl(httpLoadbalancerApiRateLimitServerUrlRulesToHclTerraform, true)(struct!.serverUrlRules),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitServerUrlRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._noIpAllowedList !== undefined) {
      hasAnyValues = true;
      internalValueResult.noIpAllowedList = this._noIpAllowedList;
    }
    if (this._apiEndpointRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiEndpointRules = this._apiEndpointRules?.internalValue;
    }
    if (this._bypassRateLimitingRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassRateLimitingRules = this._bypassRateLimitingRules?.internalValue;
    }
    if (this._customIpAllowedList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customIpAllowedList = this._customIpAllowedList?.internalValue;
    }
    if (this._ipAllowedList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAllowedList = this._ipAllowedList?.internalValue;
    }
    if (this._serverUrlRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverUrlRules = this._serverUrlRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._noIpAllowedList = undefined;
      this._apiEndpointRules.internalValue = undefined;
      this._bypassRateLimitingRules.internalValue = undefined;
      this._customIpAllowedList.internalValue = undefined;
      this._ipAllowedList.internalValue = undefined;
      this._serverUrlRules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._noIpAllowedList = value.noIpAllowedList;
      this._apiEndpointRules.internalValue = value.apiEndpointRules;
      this._bypassRateLimitingRules.internalValue = value.bypassRateLimitingRules;
      this._customIpAllowedList.internalValue = value.customIpAllowedList;
      this._ipAllowedList.internalValue = value.ipAllowedList;
      this._serverUrlRules.internalValue = value.serverUrlRules;
    }
  }

  // no_ip_allowed_list - computed: false, optional: true, required: false
  private _noIpAllowedList?: boolean | cdktf.IResolvable; 
  public get noIpAllowedList() {
    return this.getBooleanAttribute('no_ip_allowed_list');
  }
  public set noIpAllowedList(value: boolean | cdktf.IResolvable) {
    this._noIpAllowedList = value;
  }
  public resetNoIpAllowedList() {
    this._noIpAllowedList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noIpAllowedListInput() {
    return this._noIpAllowedList;
  }

  // api_endpoint_rules - computed: false, optional: true, required: false
  private _apiEndpointRules = new HttpLoadbalancerApiRateLimitApiEndpointRulesList(this, "api_endpoint_rules", false);
  public get apiEndpointRules() {
    return this._apiEndpointRules;
  }
  public putApiEndpointRules(value: HttpLoadbalancerApiRateLimitApiEndpointRules[] | cdktf.IResolvable) {
    this._apiEndpointRules.internalValue = value;
  }
  public resetApiEndpointRules() {
    this._apiEndpointRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiEndpointRulesInput() {
    return this._apiEndpointRules.internalValue;
  }

  // bypass_rate_limiting_rules - computed: false, optional: true, required: false
  private _bypassRateLimitingRules = new HttpLoadbalancerApiRateLimitBypassRateLimitingRulesOutputReference(this, "bypass_rate_limiting_rules");
  public get bypassRateLimitingRules() {
    return this._bypassRateLimitingRules;
  }
  public putBypassRateLimitingRules(value: HttpLoadbalancerApiRateLimitBypassRateLimitingRules) {
    this._bypassRateLimitingRules.internalValue = value;
  }
  public resetBypassRateLimitingRules() {
    this._bypassRateLimitingRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassRateLimitingRulesInput() {
    return this._bypassRateLimitingRules.internalValue;
  }

  // custom_ip_allowed_list - computed: false, optional: true, required: false
  private _customIpAllowedList = new HttpLoadbalancerApiRateLimitCustomIpAllowedListStructOutputReference(this, "custom_ip_allowed_list");
  public get customIpAllowedList() {
    return this._customIpAllowedList;
  }
  public putCustomIpAllowedList(value: HttpLoadbalancerApiRateLimitCustomIpAllowedListStruct) {
    this._customIpAllowedList.internalValue = value;
  }
  public resetCustomIpAllowedList() {
    this._customIpAllowedList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customIpAllowedListInput() {
    return this._customIpAllowedList.internalValue;
  }

  // ip_allowed_list - computed: false, optional: true, required: false
  private _ipAllowedList = new HttpLoadbalancerApiRateLimitIpAllowedListStructOutputReference(this, "ip_allowed_list");
  public get ipAllowedList() {
    return this._ipAllowedList;
  }
  public putIpAllowedList(value: HttpLoadbalancerApiRateLimitIpAllowedListStruct) {
    this._ipAllowedList.internalValue = value;
  }
  public resetIpAllowedList() {
    this._ipAllowedList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAllowedListInput() {
    return this._ipAllowedList.internalValue;
  }

  // server_url_rules - computed: false, optional: true, required: false
  private _serverUrlRules = new HttpLoadbalancerApiRateLimitServerUrlRulesList(this, "server_url_rules", false);
  public get serverUrlRules() {
    return this._serverUrlRules;
  }
  public putServerUrlRules(value: HttpLoadbalancerApiRateLimitServerUrlRules[] | cdktf.IResolvable) {
    this._serverUrlRules.internalValue = value;
  }
  public resetServerUrlRules() {
    this._serverUrlRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverUrlRulesInput() {
    return this._serverUrlRules.internalValue;
  }
}
export interface HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesApiEndpointMethod {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#invert_matcher HttpLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#methods HttpLoadbalancer#methods}
  */
  readonly methods?: string[];
}

export function httpLoadbalancerApiRateLimitLegacyApiEndpointRulesApiEndpointMethodToTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesApiEndpointMethodOutputReference | HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesApiEndpointMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.methods),
  }
}


export function httpLoadbalancerApiRateLimitLegacyApiEndpointRulesApiEndpointMethodToHclTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesApiEndpointMethodOutputReference | HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesApiEndpointMethod): any {
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

export class HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesApiEndpointMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesApiEndpointMethod | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesApiEndpointMethod | undefined) {
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
export interface HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherAsnListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#as_numbers HttpLoadbalancer#as_numbers}
  */
  readonly asNumbers: number[];
}

export function httpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherAsnListStructToTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherAsnListStructOutputReference | HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherAsnListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_numbers: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.asNumbers),
  }
}


export function httpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherAsnListStructToHclTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherAsnListStructOutputReference | HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherAsnListStruct): any {
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

export class HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherAsnListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherAsnListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asNumbers !== undefined) {
      hasAnyValues = true;
      internalValueResult.asNumbers = this._asNumbers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherAsnListStruct | undefined) {
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
export interface HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherAsnMatcherAsnSets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherAsnMatcherAsnSetsToTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherAsnMatcherAsnSets | cdktf.IResolvable): any {
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


export function httpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherAsnMatcherAsnSetsToHclTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherAsnMatcherAsnSets | cdktf.IResolvable): any {
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

export class HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherAsnMatcherAsnSetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherAsnMatcherAsnSets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherAsnMatcherAsnSets | cdktf.IResolvable | undefined) {
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

export class HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherAsnMatcherAsnSetsList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherAsnMatcherAsnSets[] | cdktf.IResolvable

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
  public get(index: number): HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherAsnMatcherAsnSetsOutputReference {
    return new HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherAsnMatcherAsnSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherAsnMatcher {
  /**
  * asn_sets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#asn_sets HttpLoadbalancer#asn_sets}
  */
  readonly asnSets: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherAsnMatcherAsnSets[] | cdktf.IResolvable;
}

export function httpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherAsnMatcherToTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherAsnMatcherOutputReference | HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherAsnMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asn_sets: cdktf.listMapper(httpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherAsnMatcherAsnSetsToTerraform, true)(struct!.asnSets),
  }
}


export function httpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherAsnMatcherToHclTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherAsnMatcherOutputReference | HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherAsnMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asn_sets: {
      value: cdktf.listMapperHcl(httpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherAsnMatcherAsnSetsToHclTerraform, true)(struct!.asnSets),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherAsnMatcherAsnSetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherAsnMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherAsnMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asnSets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnSets = this._asnSets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherAsnMatcher | undefined) {
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
  private _asnSets = new HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherAsnMatcherAsnSetsList(this, "asn_sets", false);
  public get asnSets() {
    return this._asnSets;
  }
  public putAsnSets(value: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherAsnMatcherAsnSets[] | cdktf.IResolvable) {
    this._asnSets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asnSetsInput() {
    return this._asnSets.internalValue;
  }
}
export interface HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherClientSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#expressions HttpLoadbalancer#expressions}
  */
  readonly expressions: string[];
}

export function httpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherClientSelectorToTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherClientSelectorOutputReference | HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherClientSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expressions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.expressions),
  }
}


export function httpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherClientSelectorToHclTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherClientSelectorOutputReference | HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherClientSelector): any {
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

export class HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherClientSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherClientSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expressions !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressions = this._expressions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherClientSelector | undefined) {
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
export interface HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherIpMatcherPrefixSets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherIpMatcherPrefixSetsToTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherIpMatcherPrefixSets | cdktf.IResolvable): any {
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


export function httpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherIpMatcherPrefixSetsToHclTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherIpMatcherPrefixSets | cdktf.IResolvable): any {
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

export class HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherIpMatcherPrefixSetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherIpMatcherPrefixSets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherIpMatcherPrefixSets | cdktf.IResolvable | undefined) {
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

export class HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherIpMatcherPrefixSetsList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherIpMatcherPrefixSets[] | cdktf.IResolvable

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
  public get(index: number): HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherIpMatcherPrefixSetsOutputReference {
    return new HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherIpMatcherPrefixSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherIpMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#invert_matcher HttpLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * prefix_sets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#prefix_sets HttpLoadbalancer#prefix_sets}
  */
  readonly prefixSets: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherIpMatcherPrefixSets[] | cdktf.IResolvable;
}

export function httpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherIpMatcherToTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherIpMatcherOutputReference | HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherIpMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    prefix_sets: cdktf.listMapper(httpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherIpMatcherPrefixSetsToTerraform, true)(struct!.prefixSets),
  }
}


export function httpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherIpMatcherToHclTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherIpMatcherOutputReference | HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherIpMatcher): any {
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
      value: cdktf.listMapperHcl(httpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherIpMatcherPrefixSetsToHclTerraform, true)(struct!.prefixSets),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherIpMatcherPrefixSetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherIpMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherIpMatcher | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherIpMatcher | undefined) {
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
  private _prefixSets = new HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherIpMatcherPrefixSetsList(this, "prefix_sets", false);
  public get prefixSets() {
    return this._prefixSets;
  }
  public putPrefixSets(value: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherIpMatcherPrefixSets[] | cdktf.IResolvable) {
    this._prefixSets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixSetsInput() {
    return this._prefixSets.internalValue;
  }
}
export interface HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherIpPrefixListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#invert_match HttpLoadbalancer#invert_match}
  */
  readonly invertMatch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ip_prefixes HttpLoadbalancer#ip_prefixes}
  */
  readonly ipPrefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ipv6_prefixes HttpLoadbalancer#ipv6_prefixes}
  */
  readonly ipv6Prefixes?: string[];
}

export function httpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherIpPrefixListStructToTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherIpPrefixListStructOutputReference | HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherIpPrefixListStruct): any {
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


export function httpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherIpPrefixListStructToHclTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherIpPrefixListStructOutputReference | HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherIpPrefixListStruct): any {
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

export class HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherIpPrefixListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherIpPrefixListStruct | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherIpPrefixListStruct | undefined) {
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
export interface HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherIpThreatCategoryListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ip_threat_categories HttpLoadbalancer#ip_threat_categories}
  */
  readonly ipThreatCategories: string[];
}

export function httpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherIpThreatCategoryListStructToTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherIpThreatCategoryListStructOutputReference | HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherIpThreatCategoryListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_threat_categories: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipThreatCategories),
  }
}


export function httpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherIpThreatCategoryListStructToHclTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherIpThreatCategoryListStructOutputReference | HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherIpThreatCategoryListStruct): any {
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

export class HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherIpThreatCategoryListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherIpThreatCategoryListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipThreatCategories !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipThreatCategories = this._ipThreatCategories;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherIpThreatCategoryListStruct | undefined) {
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
export interface HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherTlsFingerprintMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#classes HttpLoadbalancer#classes}
  */
  readonly classes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#exact_values HttpLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#excluded_values HttpLoadbalancer#excluded_values}
  */
  readonly excludedValues?: string[];
}

export function httpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherTlsFingerprintMatcherToTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherTlsFingerprintMatcherOutputReference | HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherTlsFingerprintMatcher): any {
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


export function httpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherTlsFingerprintMatcherToHclTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherTlsFingerprintMatcherOutputReference | HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherTlsFingerprintMatcher): any {
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

export class HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherTlsFingerprintMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherTlsFingerprintMatcher | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherTlsFingerprintMatcher | undefined) {
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
export interface HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#any_client HttpLoadbalancer#any_client}
  */
  readonly anyClient?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#any_ip HttpLoadbalancer#any_ip}
  */
  readonly anyIp?: boolean | cdktf.IResolvable;
  /**
  * asn_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#asn_list HttpLoadbalancer#asn_list}
  */
  readonly asnList?: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherAsnListStruct;
  /**
  * asn_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#asn_matcher HttpLoadbalancer#asn_matcher}
  */
  readonly asnMatcher?: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherAsnMatcher;
  /**
  * client_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#client_selector HttpLoadbalancer#client_selector}
  */
  readonly clientSelector?: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherClientSelector;
  /**
  * ip_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ip_matcher HttpLoadbalancer#ip_matcher}
  */
  readonly ipMatcher?: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherIpMatcher;
  /**
  * ip_prefix_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ip_prefix_list HttpLoadbalancer#ip_prefix_list}
  */
  readonly ipPrefixList?: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherIpPrefixListStruct;
  /**
  * ip_threat_category_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ip_threat_category_list HttpLoadbalancer#ip_threat_category_list}
  */
  readonly ipThreatCategoryList?: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherIpThreatCategoryListStruct;
  /**
  * tls_fingerprint_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#tls_fingerprint_matcher HttpLoadbalancer#tls_fingerprint_matcher}
  */
  readonly tlsFingerprintMatcher?: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherTlsFingerprintMatcher;
}

export function httpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherToTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherOutputReference | HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_client: cdktf.booleanToTerraform(struct!.anyClient),
    any_ip: cdktf.booleanToTerraform(struct!.anyIp),
    asn_list: httpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherAsnListStructToTerraform(struct!.asnList),
    asn_matcher: httpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherAsnMatcherToTerraform(struct!.asnMatcher),
    client_selector: httpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherClientSelectorToTerraform(struct!.clientSelector),
    ip_matcher: httpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherIpMatcherToTerraform(struct!.ipMatcher),
    ip_prefix_list: httpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherIpPrefixListStructToTerraform(struct!.ipPrefixList),
    ip_threat_category_list: httpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherIpThreatCategoryListStructToTerraform(struct!.ipThreatCategoryList),
    tls_fingerprint_matcher: httpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherTlsFingerprintMatcherToTerraform(struct!.tlsFingerprintMatcher),
  }
}


export function httpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherToHclTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherOutputReference | HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any_client: {
      value: cdktf.booleanToHclTerraform(struct!.anyClient),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    any_ip: {
      value: cdktf.booleanToHclTerraform(struct!.anyIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    asn_list: {
      value: httpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherAsnListStructToHclTerraform(struct!.asnList),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherAsnListStructList",
    },
    asn_matcher: {
      value: httpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherAsnMatcherToHclTerraform(struct!.asnMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherAsnMatcherList",
    },
    client_selector: {
      value: httpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherClientSelectorToHclTerraform(struct!.clientSelector),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherClientSelectorList",
    },
    ip_matcher: {
      value: httpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherIpMatcherToHclTerraform(struct!.ipMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherIpMatcherList",
    },
    ip_prefix_list: {
      value: httpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherIpPrefixListStructToHclTerraform(struct!.ipPrefixList),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherIpPrefixListStructList",
    },
    ip_threat_category_list: {
      value: httpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherIpThreatCategoryListStructToHclTerraform(struct!.ipThreatCategoryList),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherIpThreatCategoryListStructList",
    },
    tls_fingerprint_matcher: {
      value: httpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherTlsFingerprintMatcherToHclTerraform(struct!.tlsFingerprintMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherTlsFingerprintMatcherList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyClient = this._anyClient;
    }
    if (this._anyIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyIp = this._anyIp;
    }
    if (this._asnList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnList = this._asnList?.internalValue;
    }
    if (this._asnMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnMatcher = this._asnMatcher?.internalValue;
    }
    if (this._clientSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSelector = this._clientSelector?.internalValue;
    }
    if (this._ipMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipMatcher = this._ipMatcher?.internalValue;
    }
    if (this._ipPrefixList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPrefixList = this._ipPrefixList?.internalValue;
    }
    if (this._ipThreatCategoryList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipThreatCategoryList = this._ipThreatCategoryList?.internalValue;
    }
    if (this._tlsFingerprintMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsFingerprintMatcher = this._tlsFingerprintMatcher?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._anyClient = undefined;
      this._anyIp = undefined;
      this._asnList.internalValue = undefined;
      this._asnMatcher.internalValue = undefined;
      this._clientSelector.internalValue = undefined;
      this._ipMatcher.internalValue = undefined;
      this._ipPrefixList.internalValue = undefined;
      this._ipThreatCategoryList.internalValue = undefined;
      this._tlsFingerprintMatcher.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._anyClient = value.anyClient;
      this._anyIp = value.anyIp;
      this._asnList.internalValue = value.asnList;
      this._asnMatcher.internalValue = value.asnMatcher;
      this._clientSelector.internalValue = value.clientSelector;
      this._ipMatcher.internalValue = value.ipMatcher;
      this._ipPrefixList.internalValue = value.ipPrefixList;
      this._ipThreatCategoryList.internalValue = value.ipThreatCategoryList;
      this._tlsFingerprintMatcher.internalValue = value.tlsFingerprintMatcher;
    }
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

  // asn_list - computed: false, optional: true, required: false
  private _asnList = new HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherAsnListStructOutputReference(this, "asn_list");
  public get asnList() {
    return this._asnList;
  }
  public putAsnList(value: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherAsnListStruct) {
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
  private _asnMatcher = new HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherAsnMatcherOutputReference(this, "asn_matcher");
  public get asnMatcher() {
    return this._asnMatcher;
  }
  public putAsnMatcher(value: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherAsnMatcher) {
    this._asnMatcher.internalValue = value;
  }
  public resetAsnMatcher() {
    this._asnMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnMatcherInput() {
    return this._asnMatcher.internalValue;
  }

  // client_selector - computed: false, optional: true, required: false
  private _clientSelector = new HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherClientSelectorOutputReference(this, "client_selector");
  public get clientSelector() {
    return this._clientSelector;
  }
  public putClientSelector(value: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherClientSelector) {
    this._clientSelector.internalValue = value;
  }
  public resetClientSelector() {
    this._clientSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSelectorInput() {
    return this._clientSelector.internalValue;
  }

  // ip_matcher - computed: false, optional: true, required: false
  private _ipMatcher = new HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherIpMatcherOutputReference(this, "ip_matcher");
  public get ipMatcher() {
    return this._ipMatcher;
  }
  public putIpMatcher(value: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherIpMatcher) {
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
  private _ipPrefixList = new HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherIpPrefixListStructOutputReference(this, "ip_prefix_list");
  public get ipPrefixList() {
    return this._ipPrefixList;
  }
  public putIpPrefixList(value: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherIpPrefixListStruct) {
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
  private _ipThreatCategoryList = new HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherIpThreatCategoryListStructOutputReference(this, "ip_threat_category_list");
  public get ipThreatCategoryList() {
    return this._ipThreatCategoryList;
  }
  public putIpThreatCategoryList(value: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherIpThreatCategoryListStruct) {
    this._ipThreatCategoryList.internalValue = value;
  }
  public resetIpThreatCategoryList() {
    this._ipThreatCategoryList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipThreatCategoryListInput() {
    return this._ipThreatCategoryList.internalValue;
  }

  // tls_fingerprint_matcher - computed: false, optional: true, required: false
  private _tlsFingerprintMatcher = new HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherTlsFingerprintMatcherOutputReference(this, "tls_fingerprint_matcher");
  public get tlsFingerprintMatcher() {
    return this._tlsFingerprintMatcher;
  }
  public putTlsFingerprintMatcher(value: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherTlsFingerprintMatcher) {
    this._tlsFingerprintMatcher.internalValue = value;
  }
  public resetTlsFingerprintMatcher() {
    this._tlsFingerprintMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsFingerprintMatcherInput() {
    return this._tlsFingerprintMatcher.internalValue;
  }
}
export interface HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesInlineRateLimiterRefUserId {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerApiRateLimitLegacyApiEndpointRulesInlineRateLimiterRefUserIdToTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesInlineRateLimiterRefUserIdOutputReference | HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesInlineRateLimiterRefUserId): any {
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


export function httpLoadbalancerApiRateLimitLegacyApiEndpointRulesInlineRateLimiterRefUserIdToHclTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesInlineRateLimiterRefUserIdOutputReference | HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesInlineRateLimiterRefUserId): any {
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

export class HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesInlineRateLimiterRefUserIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesInlineRateLimiterRefUserId | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesInlineRateLimiterRefUserId | undefined) {
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
export interface HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesInlineRateLimiter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#threshold HttpLoadbalancer#threshold}
  */
  readonly threshold: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#unit HttpLoadbalancer#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#use_http_lb_user_id HttpLoadbalancer#use_http_lb_user_id}
  */
  readonly useHttpLbUserId?: boolean | cdktf.IResolvable;
  /**
  * ref_user_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ref_user_id HttpLoadbalancer#ref_user_id}
  */
  readonly refUserId?: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesInlineRateLimiterRefUserId;
}

export function httpLoadbalancerApiRateLimitLegacyApiEndpointRulesInlineRateLimiterToTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesInlineRateLimiterOutputReference | HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesInlineRateLimiter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    threshold: cdktf.numberToTerraform(struct!.threshold),
    unit: cdktf.stringToTerraform(struct!.unit),
    use_http_lb_user_id: cdktf.booleanToTerraform(struct!.useHttpLbUserId),
    ref_user_id: httpLoadbalancerApiRateLimitLegacyApiEndpointRulesInlineRateLimiterRefUserIdToTerraform(struct!.refUserId),
  }
}


export function httpLoadbalancerApiRateLimitLegacyApiEndpointRulesInlineRateLimiterToHclTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesInlineRateLimiterOutputReference | HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesInlineRateLimiter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_http_lb_user_id: {
      value: cdktf.booleanToHclTerraform(struct!.useHttpLbUserId),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ref_user_id: {
      value: httpLoadbalancerApiRateLimitLegacyApiEndpointRulesInlineRateLimiterRefUserIdToHclTerraform(struct!.refUserId),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesInlineRateLimiterRefUserIdList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesInlineRateLimiterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesInlineRateLimiter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._useHttpLbUserId !== undefined) {
      hasAnyValues = true;
      internalValueResult.useHttpLbUserId = this._useHttpLbUserId;
    }
    if (this._refUserId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.refUserId = this._refUserId?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesInlineRateLimiter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._threshold = undefined;
      this._unit = undefined;
      this._useHttpLbUserId = undefined;
      this._refUserId.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._threshold = value.threshold;
      this._unit = value.unit;
      this._useHttpLbUserId = value.useHttpLbUserId;
      this._refUserId.internalValue = value.refUserId;
    }
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

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // use_http_lb_user_id - computed: false, optional: true, required: false
  private _useHttpLbUserId?: boolean | cdktf.IResolvable; 
  public get useHttpLbUserId() {
    return this.getBooleanAttribute('use_http_lb_user_id');
  }
  public set useHttpLbUserId(value: boolean | cdktf.IResolvable) {
    this._useHttpLbUserId = value;
  }
  public resetUseHttpLbUserId() {
    this._useHttpLbUserId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useHttpLbUserIdInput() {
    return this._useHttpLbUserId;
  }

  // ref_user_id - computed: false, optional: true, required: false
  private _refUserId = new HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesInlineRateLimiterRefUserIdOutputReference(this, "ref_user_id");
  public get refUserId() {
    return this._refUserId;
  }
  public putRefUserId(value: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesInlineRateLimiterRefUserId) {
    this._refUserId.internalValue = value;
  }
  public resetRefUserId() {
    this._refUserId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refUserIdInput() {
    return this._refUserId.internalValue;
  }
}
export interface HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRefRateLimiter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerApiRateLimitLegacyApiEndpointRulesRefRateLimiterToTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRefRateLimiterOutputReference | HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRefRateLimiter): any {
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


export function httpLoadbalancerApiRateLimitLegacyApiEndpointRulesRefRateLimiterToHclTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRefRateLimiterOutputReference | HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRefRateLimiter): any {
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

export class HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRefRateLimiterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRefRateLimiter | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRefRateLimiter | undefined) {
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
export interface HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherCookieMatchersItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#exact_values HttpLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#regex_values HttpLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#transformers HttpLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function httpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherCookieMatchersItemToTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherCookieMatchersItemOutputReference | HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherCookieMatchersItem): any {
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


export function httpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherCookieMatchersItemToHclTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherCookieMatchersItemOutputReference | HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherCookieMatchersItem): any {
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

export class HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherCookieMatchersItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherCookieMatchersItem | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherCookieMatchersItem | undefined) {
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
export interface HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherCookieMatchers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#check_not_present HttpLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#check_present HttpLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#invert_matcher HttpLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#presence HttpLoadbalancer#presence}
  */
  readonly presence?: boolean | cdktf.IResolvable;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#item HttpLoadbalancer#item}
  */
  readonly item?: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherCookieMatchersItem;
}

export function httpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherCookieMatchersToTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherCookieMatchers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    name: cdktf.stringToTerraform(struct!.name),
    presence: cdktf.booleanToTerraform(struct!.presence),
    item: httpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherCookieMatchersItemToTerraform(struct!.item),
  }
}


export function httpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherCookieMatchersToHclTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherCookieMatchers | cdktf.IResolvable): any {
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
    presence: {
      value: cdktf.booleanToHclTerraform(struct!.presence),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    item: {
      value: httpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherCookieMatchersItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherCookieMatchersItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherCookieMatchersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherCookieMatchers | cdktf.IResolvable | undefined {
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
    if (this._presence !== undefined) {
      hasAnyValues = true;
      internalValueResult.presence = this._presence;
    }
    if (this._item?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.item = this._item?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherCookieMatchers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkNotPresent = undefined;
      this._checkPresent = undefined;
      this._invertMatcher = undefined;
      this._name = undefined;
      this._presence = undefined;
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
      this._presence = value.presence;
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

  // presence - computed: false, optional: true, required: false
  private _presence?: boolean | cdktf.IResolvable; 
  public get presence() {
    return this.getBooleanAttribute('presence');
  }
  public set presence(value: boolean | cdktf.IResolvable) {
    this._presence = value;
  }
  public resetPresence() {
    this._presence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presenceInput() {
    return this._presence;
  }

  // item - computed: false, optional: true, required: false
  private _item = new HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherCookieMatchersItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherCookieMatchersItem) {
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

export class HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherCookieMatchersList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherCookieMatchers[] | cdktf.IResolvable

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
  public get(index: number): HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherCookieMatchersOutputReference {
    return new HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherCookieMatchersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherHeadersItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#exact_values HttpLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#regex_values HttpLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#transformers HttpLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function httpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherHeadersItemToTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherHeadersItemOutputReference | HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherHeadersItem): any {
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


export function httpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherHeadersItemToHclTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherHeadersItemOutputReference | HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherHeadersItem): any {
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

export class HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherHeadersItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherHeadersItem | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherHeadersItem | undefined) {
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
export interface HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#check_not_present HttpLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#check_present HttpLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#invert_matcher HttpLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#presence HttpLoadbalancer#presence}
  */
  readonly presence?: boolean | cdktf.IResolvable;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#item HttpLoadbalancer#item}
  */
  readonly item?: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherHeadersItem;
}

export function httpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherHeadersToTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    name: cdktf.stringToTerraform(struct!.name),
    presence: cdktf.booleanToTerraform(struct!.presence),
    item: httpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherHeadersItemToTerraform(struct!.item),
  }
}


export function httpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherHeadersToHclTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherHeaders | cdktf.IResolvable): any {
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
    presence: {
      value: cdktf.booleanToHclTerraform(struct!.presence),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    item: {
      value: httpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherHeadersItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherHeadersItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherHeaders | cdktf.IResolvable | undefined {
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
    if (this._presence !== undefined) {
      hasAnyValues = true;
      internalValueResult.presence = this._presence;
    }
    if (this._item?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.item = this._item?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkNotPresent = undefined;
      this._checkPresent = undefined;
      this._invertMatcher = undefined;
      this._name = undefined;
      this._presence = undefined;
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
      this._presence = value.presence;
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

  // presence - computed: false, optional: true, required: false
  private _presence?: boolean | cdktf.IResolvable; 
  public get presence() {
    return this.getBooleanAttribute('presence');
  }
  public set presence(value: boolean | cdktf.IResolvable) {
    this._presence = value;
  }
  public resetPresence() {
    this._presence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presenceInput() {
    return this._presence;
  }

  // item - computed: false, optional: true, required: false
  private _item = new HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherHeadersItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherHeadersItem) {
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

export class HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherHeadersList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherHeaders[] | cdktf.IResolvable

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
  public get(index: number): HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherHeadersOutputReference {
    return new HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherJwtClaimsItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#exact_values HttpLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#regex_values HttpLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#transformers HttpLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function httpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherJwtClaimsItemToTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherJwtClaimsItemOutputReference | HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherJwtClaimsItem): any {
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


export function httpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherJwtClaimsItemToHclTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherJwtClaimsItemOutputReference | HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherJwtClaimsItem): any {
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

export class HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherJwtClaimsItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherJwtClaimsItem | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherJwtClaimsItem | undefined) {
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
export interface HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherJwtClaims {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#check_not_present HttpLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#check_present HttpLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#invert_matcher HttpLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#item HttpLoadbalancer#item}
  */
  readonly item?: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherJwtClaimsItem;
}

export function httpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherJwtClaimsToTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherJwtClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    name: cdktf.stringToTerraform(struct!.name),
    item: httpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherJwtClaimsItemToTerraform(struct!.item),
  }
}


export function httpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherJwtClaimsToHclTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherJwtClaims | cdktf.IResolvable): any {
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
      value: httpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherJwtClaimsItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherJwtClaimsItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherJwtClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherJwtClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherJwtClaims | cdktf.IResolvable | undefined) {
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
  private _item = new HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherJwtClaimsItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherJwtClaimsItem) {
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

export class HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherJwtClaimsList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherJwtClaims[] | cdktf.IResolvable

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
  public get(index: number): HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherJwtClaimsOutputReference {
    return new HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherJwtClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherQueryParamsItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#exact_values HttpLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#regex_values HttpLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#transformers HttpLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function httpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherQueryParamsItemToTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherQueryParamsItemOutputReference | HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherQueryParamsItem): any {
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


export function httpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherQueryParamsItemToHclTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherQueryParamsItemOutputReference | HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherQueryParamsItem): any {
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

export class HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherQueryParamsItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherQueryParamsItem | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherQueryParamsItem | undefined) {
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
export interface HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherQueryParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#check_not_present HttpLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#check_present HttpLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#invert_matcher HttpLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#key HttpLoadbalancer#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#presence HttpLoadbalancer#presence}
  */
  readonly presence?: boolean | cdktf.IResolvable;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#item HttpLoadbalancer#item}
  */
  readonly item?: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherQueryParamsItem;
}

export function httpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherQueryParamsToTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherQueryParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    key: cdktf.stringToTerraform(struct!.key),
    presence: cdktf.booleanToTerraform(struct!.presence),
    item: httpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherQueryParamsItemToTerraform(struct!.item),
  }
}


export function httpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherQueryParamsToHclTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherQueryParams | cdktf.IResolvable): any {
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
    presence: {
      value: cdktf.booleanToHclTerraform(struct!.presence),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    item: {
      value: httpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherQueryParamsItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherQueryParamsItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherQueryParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherQueryParams | cdktf.IResolvable | undefined {
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
    if (this._presence !== undefined) {
      hasAnyValues = true;
      internalValueResult.presence = this._presence;
    }
    if (this._item?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.item = this._item?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherQueryParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkNotPresent = undefined;
      this._checkPresent = undefined;
      this._invertMatcher = undefined;
      this._key = undefined;
      this._presence = undefined;
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
      this._presence = value.presence;
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

  // presence - computed: false, optional: true, required: false
  private _presence?: boolean | cdktf.IResolvable; 
  public get presence() {
    return this.getBooleanAttribute('presence');
  }
  public set presence(value: boolean | cdktf.IResolvable) {
    this._presence = value;
  }
  public resetPresence() {
    this._presence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presenceInput() {
    return this._presence;
  }

  // item - computed: false, optional: true, required: false
  private _item = new HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherQueryParamsItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherQueryParamsItem) {
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

export class HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherQueryParamsList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherQueryParams[] | cdktf.IResolvable

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
  public get(index: number): HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherQueryParamsOutputReference {
    return new HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherQueryParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcher {
  /**
  * cookie_matchers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#cookie_matchers HttpLoadbalancer#cookie_matchers}
  */
  readonly cookieMatchers?: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherCookieMatchers[] | cdktf.IResolvable;
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#headers HttpLoadbalancer#headers}
  */
  readonly headers?: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherHeaders[] | cdktf.IResolvable;
  /**
  * jwt_claims block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#jwt_claims HttpLoadbalancer#jwt_claims}
  */
  readonly jwtClaims?: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherJwtClaims[] | cdktf.IResolvable;
  /**
  * query_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#query_params HttpLoadbalancer#query_params}
  */
  readonly queryParams?: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherQueryParams[] | cdktf.IResolvable;
}

export function httpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherToTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherOutputReference | HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie_matchers: cdktf.listMapper(httpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherCookieMatchersToTerraform, true)(struct!.cookieMatchers),
    headers: cdktf.listMapper(httpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherHeadersToTerraform, true)(struct!.headers),
    jwt_claims: cdktf.listMapper(httpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherJwtClaimsToTerraform, true)(struct!.jwtClaims),
    query_params: cdktf.listMapper(httpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherQueryParamsToTerraform, true)(struct!.queryParams),
  }
}


export function httpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherToHclTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherOutputReference | HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie_matchers: {
      value: cdktf.listMapperHcl(httpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherCookieMatchersToHclTerraform, true)(struct!.cookieMatchers),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherCookieMatchersList",
    },
    headers: {
      value: cdktf.listMapperHcl(httpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherHeadersList",
    },
    jwt_claims: {
      value: cdktf.listMapperHcl(httpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherJwtClaimsToHclTerraform, true)(struct!.jwtClaims),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherJwtClaimsList",
    },
    query_params: {
      value: cdktf.listMapperHcl(httpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherQueryParamsToHclTerraform, true)(struct!.queryParams),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherQueryParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookieMatchers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieMatchers = this._cookieMatchers?.internalValue;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._jwtClaims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtClaims = this._jwtClaims?.internalValue;
    }
    if (this._queryParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParams = this._queryParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cookieMatchers.internalValue = undefined;
      this._headers.internalValue = undefined;
      this._jwtClaims.internalValue = undefined;
      this._queryParams.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cookieMatchers.internalValue = value.cookieMatchers;
      this._headers.internalValue = value.headers;
      this._jwtClaims.internalValue = value.jwtClaims;
      this._queryParams.internalValue = value.queryParams;
    }
  }

  // cookie_matchers - computed: false, optional: true, required: false
  private _cookieMatchers = new HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherCookieMatchersList(this, "cookie_matchers", false);
  public get cookieMatchers() {
    return this._cookieMatchers;
  }
  public putCookieMatchers(value: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherCookieMatchers[] | cdktf.IResolvable) {
    this._cookieMatchers.internalValue = value;
  }
  public resetCookieMatchers() {
    this._cookieMatchers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieMatchersInput() {
    return this._cookieMatchers.internalValue;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // jwt_claims - computed: false, optional: true, required: false
  private _jwtClaims = new HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherJwtClaimsList(this, "jwt_claims", false);
  public get jwtClaims() {
    return this._jwtClaims;
  }
  public putJwtClaims(value: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherJwtClaims[] | cdktf.IResolvable) {
    this._jwtClaims.internalValue = value;
  }
  public resetJwtClaims() {
    this._jwtClaims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtClaimsInput() {
    return this._jwtClaims.internalValue;
  }

  // query_params - computed: false, optional: true, required: false
  private _queryParams = new HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherQueryParamsList(this, "query_params", false);
  public get queryParams() {
    return this._queryParams;
  }
  public putQueryParams(value: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherQueryParams[] | cdktf.IResolvable) {
    this._queryParams.internalValue = value;
  }
  public resetQueryParams() {
    this._queryParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParamsInput() {
    return this._queryParams.internalValue;
  }
}
export interface HttpLoadbalancerApiRateLimitLegacyApiEndpointRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#any_domain HttpLoadbalancer#any_domain}
  */
  readonly anyDomain?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#api_endpoint_path HttpLoadbalancer#api_endpoint_path}
  */
  readonly apiEndpointPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#base_path HttpLoadbalancer#base_path}
  */
  readonly basePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#specific_domain HttpLoadbalancer#specific_domain}
  */
  readonly specificDomain?: string;
  /**
  * api_endpoint_method block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#api_endpoint_method HttpLoadbalancer#api_endpoint_method}
  */
  readonly apiEndpointMethod?: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesApiEndpointMethod;
  /**
  * client_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#client_matcher HttpLoadbalancer#client_matcher}
  */
  readonly clientMatcher?: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcher;
  /**
  * inline_rate_limiter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#inline_rate_limiter HttpLoadbalancer#inline_rate_limiter}
  */
  readonly inlineRateLimiter?: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesInlineRateLimiter;
  /**
  * ref_rate_limiter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ref_rate_limiter HttpLoadbalancer#ref_rate_limiter}
  */
  readonly refRateLimiter?: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRefRateLimiter;
  /**
  * request_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#request_matcher HttpLoadbalancer#request_matcher}
  */
  readonly requestMatcher?: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcher;
}

export function httpLoadbalancerApiRateLimitLegacyApiEndpointRulesToTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyApiEndpointRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_domain: cdktf.booleanToTerraform(struct!.anyDomain),
    api_endpoint_path: cdktf.stringToTerraform(struct!.apiEndpointPath),
    base_path: cdktf.stringToTerraform(struct!.basePath),
    specific_domain: cdktf.stringToTerraform(struct!.specificDomain),
    api_endpoint_method: httpLoadbalancerApiRateLimitLegacyApiEndpointRulesApiEndpointMethodToTerraform(struct!.apiEndpointMethod),
    client_matcher: httpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherToTerraform(struct!.clientMatcher),
    inline_rate_limiter: httpLoadbalancerApiRateLimitLegacyApiEndpointRulesInlineRateLimiterToTerraform(struct!.inlineRateLimiter),
    ref_rate_limiter: httpLoadbalancerApiRateLimitLegacyApiEndpointRulesRefRateLimiterToTerraform(struct!.refRateLimiter),
    request_matcher: httpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherToTerraform(struct!.requestMatcher),
  }
}


export function httpLoadbalancerApiRateLimitLegacyApiEndpointRulesToHclTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyApiEndpointRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any_domain: {
      value: cdktf.booleanToHclTerraform(struct!.anyDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    api_endpoint_path: {
      value: cdktf.stringToHclTerraform(struct!.apiEndpointPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    base_path: {
      value: cdktf.stringToHclTerraform(struct!.basePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    specific_domain: {
      value: cdktf.stringToHclTerraform(struct!.specificDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_endpoint_method: {
      value: httpLoadbalancerApiRateLimitLegacyApiEndpointRulesApiEndpointMethodToHclTerraform(struct!.apiEndpointMethod),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesApiEndpointMethodList",
    },
    client_matcher: {
      value: httpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherToHclTerraform(struct!.clientMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherList",
    },
    inline_rate_limiter: {
      value: httpLoadbalancerApiRateLimitLegacyApiEndpointRulesInlineRateLimiterToHclTerraform(struct!.inlineRateLimiter),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesInlineRateLimiterList",
    },
    ref_rate_limiter: {
      value: httpLoadbalancerApiRateLimitLegacyApiEndpointRulesRefRateLimiterToHclTerraform(struct!.refRateLimiter),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRefRateLimiterList",
    },
    request_matcher: {
      value: httpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherToHclTerraform(struct!.requestMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttpLoadbalancerApiRateLimitLegacyApiEndpointRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyDomain = this._anyDomain;
    }
    if (this._apiEndpointPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiEndpointPath = this._apiEndpointPath;
    }
    if (this._basePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.basePath = this._basePath;
    }
    if (this._specificDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.specificDomain = this._specificDomain;
    }
    if (this._apiEndpointMethod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiEndpointMethod = this._apiEndpointMethod?.internalValue;
    }
    if (this._clientMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientMatcher = this._clientMatcher?.internalValue;
    }
    if (this._inlineRateLimiter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inlineRateLimiter = this._inlineRateLimiter?.internalValue;
    }
    if (this._refRateLimiter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.refRateLimiter = this._refRateLimiter?.internalValue;
    }
    if (this._requestMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMatcher = this._requestMatcher?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitLegacyApiEndpointRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anyDomain = undefined;
      this._apiEndpointPath = undefined;
      this._basePath = undefined;
      this._specificDomain = undefined;
      this._apiEndpointMethod.internalValue = undefined;
      this._clientMatcher.internalValue = undefined;
      this._inlineRateLimiter.internalValue = undefined;
      this._refRateLimiter.internalValue = undefined;
      this._requestMatcher.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anyDomain = value.anyDomain;
      this._apiEndpointPath = value.apiEndpointPath;
      this._basePath = value.basePath;
      this._specificDomain = value.specificDomain;
      this._apiEndpointMethod.internalValue = value.apiEndpointMethod;
      this._clientMatcher.internalValue = value.clientMatcher;
      this._inlineRateLimiter.internalValue = value.inlineRateLimiter;
      this._refRateLimiter.internalValue = value.refRateLimiter;
      this._requestMatcher.internalValue = value.requestMatcher;
    }
  }

  // any_domain - computed: false, optional: true, required: false
  private _anyDomain?: boolean | cdktf.IResolvable; 
  public get anyDomain() {
    return this.getBooleanAttribute('any_domain');
  }
  public set anyDomain(value: boolean | cdktf.IResolvable) {
    this._anyDomain = value;
  }
  public resetAnyDomain() {
    this._anyDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyDomainInput() {
    return this._anyDomain;
  }

  // api_endpoint_path - computed: false, optional: false, required: true
  private _apiEndpointPath?: string; 
  public get apiEndpointPath() {
    return this.getStringAttribute('api_endpoint_path');
  }
  public set apiEndpointPath(value: string) {
    this._apiEndpointPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiEndpointPathInput() {
    return this._apiEndpointPath;
  }

  // base_path - computed: false, optional: true, required: false
  private _basePath?: string; 
  public get basePath() {
    return this.getStringAttribute('base_path');
  }
  public set basePath(value: string) {
    this._basePath = value;
  }
  public resetBasePath() {
    this._basePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basePathInput() {
    return this._basePath;
  }

  // specific_domain - computed: false, optional: true, required: false
  private _specificDomain?: string; 
  public get specificDomain() {
    return this.getStringAttribute('specific_domain');
  }
  public set specificDomain(value: string) {
    this._specificDomain = value;
  }
  public resetSpecificDomain() {
    this._specificDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specificDomainInput() {
    return this._specificDomain;
  }

  // api_endpoint_method - computed: false, optional: true, required: false
  private _apiEndpointMethod = new HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesApiEndpointMethodOutputReference(this, "api_endpoint_method");
  public get apiEndpointMethod() {
    return this._apiEndpointMethod;
  }
  public putApiEndpointMethod(value: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesApiEndpointMethod) {
    this._apiEndpointMethod.internalValue = value;
  }
  public resetApiEndpointMethod() {
    this._apiEndpointMethod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiEndpointMethodInput() {
    return this._apiEndpointMethod.internalValue;
  }

  // client_matcher - computed: false, optional: true, required: false
  private _clientMatcher = new HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcherOutputReference(this, "client_matcher");
  public get clientMatcher() {
    return this._clientMatcher;
  }
  public putClientMatcher(value: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesClientMatcher) {
    this._clientMatcher.internalValue = value;
  }
  public resetClientMatcher() {
    this._clientMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientMatcherInput() {
    return this._clientMatcher.internalValue;
  }

  // inline_rate_limiter - computed: false, optional: true, required: false
  private _inlineRateLimiter = new HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesInlineRateLimiterOutputReference(this, "inline_rate_limiter");
  public get inlineRateLimiter() {
    return this._inlineRateLimiter;
  }
  public putInlineRateLimiter(value: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesInlineRateLimiter) {
    this._inlineRateLimiter.internalValue = value;
  }
  public resetInlineRateLimiter() {
    this._inlineRateLimiter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlineRateLimiterInput() {
    return this._inlineRateLimiter.internalValue;
  }

  // ref_rate_limiter - computed: false, optional: true, required: false
  private _refRateLimiter = new HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRefRateLimiterOutputReference(this, "ref_rate_limiter");
  public get refRateLimiter() {
    return this._refRateLimiter;
  }
  public putRefRateLimiter(value: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRefRateLimiter) {
    this._refRateLimiter.internalValue = value;
  }
  public resetRefRateLimiter() {
    this._refRateLimiter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refRateLimiterInput() {
    return this._refRateLimiter.internalValue;
  }

  // request_matcher - computed: false, optional: true, required: false
  private _requestMatcher = new HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcherOutputReference(this, "request_matcher");
  public get requestMatcher() {
    return this._requestMatcher;
  }
  public putRequestMatcher(value: HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesRequestMatcher) {
    this._requestMatcher.internalValue = value;
  }
  public resetRequestMatcher() {
    this._requestMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMatcherInput() {
    return this._requestMatcher.internalValue;
  }
}

export class HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerApiRateLimitLegacyApiEndpointRules[] | cdktf.IResolvable

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
  public get(index: number): HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesOutputReference {
    return new HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesApiEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#methods HttpLoadbalancer#methods}
  */
  readonly methods?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#path HttpLoadbalancer#path}
  */
  readonly path: string;
}

export function httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesApiEndpointToTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesApiEndpointOutputReference | HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesApiEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.methods),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesApiEndpointToHclTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesApiEndpointOutputReference | HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesApiEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.methods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesApiEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesApiEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._methods !== undefined) {
      hasAnyValues = true;
      internalValueResult.methods = this._methods;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesApiEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._methods = undefined;
      this._path = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._methods = value.methods;
      this._path = value.path;
    }
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

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesApiGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#api_groups HttpLoadbalancer#api_groups}
  */
  readonly apiGroups: string[];
}

export function httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesApiGroupsToTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesApiGroupsOutputReference | HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesApiGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.apiGroups),
  }
}


export function httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesApiGroupsToHclTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesApiGroupsOutputReference | HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesApiGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.apiGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesApiGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesApiGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroups = this._apiGroups;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesApiGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiGroups = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiGroups = value.apiGroups;
    }
  }

  // api_groups - computed: false, optional: false, required: true
  private _apiGroups?: string[]; 
  public get apiGroups() {
    return this.getListAttribute('api_groups');
  }
  public set apiGroups(value: string[]) {
    this._apiGroups = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupsInput() {
    return this._apiGroups;
  }
}
export interface HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#as_numbers HttpLoadbalancer#as_numbers}
  */
  readonly asNumbers: number[];
}

export function httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnListStructToTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnListStructOutputReference | HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_numbers: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.asNumbers),
  }
}


export function httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnListStructToHclTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnListStructOutputReference | HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnListStruct): any {
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

export class HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asNumbers !== undefined) {
      hasAnyValues = true;
      internalValueResult.asNumbers = this._asNumbers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnListStruct | undefined) {
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
export interface HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherAsnSets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherAsnSetsToTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherAsnSets | cdktf.IResolvable): any {
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


export function httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherAsnSetsToHclTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherAsnSets | cdktf.IResolvable): any {
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

export class HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherAsnSetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherAsnSets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherAsnSets | cdktf.IResolvable | undefined) {
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

export class HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherAsnSetsList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherAsnSets[] | cdktf.IResolvable

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
  public get(index: number): HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherAsnSetsOutputReference {
    return new HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherAsnSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcher {
  /**
  * asn_sets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#asn_sets HttpLoadbalancer#asn_sets}
  */
  readonly asnSets: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherAsnSets[] | cdktf.IResolvable;
}

export function httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherToTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherOutputReference | HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asn_sets: cdktf.listMapper(httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherAsnSetsToTerraform, true)(struct!.asnSets),
  }
}


export function httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherToHclTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherOutputReference | HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asn_sets: {
      value: cdktf.listMapperHcl(httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherAsnSetsToHclTerraform, true)(struct!.asnSets),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherAsnSetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asnSets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnSets = this._asnSets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcher | undefined) {
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
  private _asnSets = new HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherAsnSetsList(this, "asn_sets", false);
  public get asnSets() {
    return this._asnSets;
  }
  public putAsnSets(value: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherAsnSets[] | cdktf.IResolvable) {
    this._asnSets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asnSetsInput() {
    return this._asnSets.internalValue;
  }
}
export interface HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherClientSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#expressions HttpLoadbalancer#expressions}
  */
  readonly expressions: string[];
}

export function httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherClientSelectorToTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherClientSelectorOutputReference | HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherClientSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expressions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.expressions),
  }
}


export function httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherClientSelectorToHclTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherClientSelectorOutputReference | HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherClientSelector): any {
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

export class HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherClientSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherClientSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expressions !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressions = this._expressions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherClientSelector | undefined) {
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
export interface HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherPrefixSets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherPrefixSetsToTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherPrefixSets | cdktf.IResolvable): any {
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


export function httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherPrefixSetsToHclTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherPrefixSets | cdktf.IResolvable): any {
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

export class HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherPrefixSetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherPrefixSets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherPrefixSets | cdktf.IResolvable | undefined) {
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

export class HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherPrefixSetsList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherPrefixSets[] | cdktf.IResolvable

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
  public get(index: number): HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherPrefixSetsOutputReference {
    return new HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherPrefixSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#invert_matcher HttpLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * prefix_sets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#prefix_sets HttpLoadbalancer#prefix_sets}
  */
  readonly prefixSets: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherPrefixSets[] | cdktf.IResolvable;
}

export function httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherToTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherOutputReference | HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    prefix_sets: cdktf.listMapper(httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherPrefixSetsToTerraform, true)(struct!.prefixSets),
  }
}


export function httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherToHclTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherOutputReference | HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcher): any {
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
      value: cdktf.listMapperHcl(httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherPrefixSetsToHclTerraform, true)(struct!.prefixSets),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherPrefixSetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcher | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcher | undefined) {
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
  private _prefixSets = new HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherPrefixSetsList(this, "prefix_sets", false);
  public get prefixSets() {
    return this._prefixSets;
  }
  public putPrefixSets(value: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherPrefixSets[] | cdktf.IResolvable) {
    this._prefixSets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixSetsInput() {
    return this._prefixSets.internalValue;
  }
}
export interface HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpPrefixListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#invert_match HttpLoadbalancer#invert_match}
  */
  readonly invertMatch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ip_prefixes HttpLoadbalancer#ip_prefixes}
  */
  readonly ipPrefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ipv6_prefixes HttpLoadbalancer#ipv6_prefixes}
  */
  readonly ipv6Prefixes?: string[];
}

export function httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpPrefixListStructToTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpPrefixListStructOutputReference | HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpPrefixListStruct): any {
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


export function httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpPrefixListStructToHclTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpPrefixListStructOutputReference | HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpPrefixListStruct): any {
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

export class HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpPrefixListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpPrefixListStruct | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpPrefixListStruct | undefined) {
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
export interface HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpThreatCategoryListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ip_threat_categories HttpLoadbalancer#ip_threat_categories}
  */
  readonly ipThreatCategories: string[];
}

export function httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpThreatCategoryListStructToTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpThreatCategoryListStructOutputReference | HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpThreatCategoryListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_threat_categories: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipThreatCategories),
  }
}


export function httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpThreatCategoryListStructToHclTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpThreatCategoryListStructOutputReference | HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpThreatCategoryListStruct): any {
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

export class HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpThreatCategoryListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpThreatCategoryListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipThreatCategories !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipThreatCategories = this._ipThreatCategories;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpThreatCategoryListStruct | undefined) {
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
export interface HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherTlsFingerprintMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#classes HttpLoadbalancer#classes}
  */
  readonly classes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#exact_values HttpLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#excluded_values HttpLoadbalancer#excluded_values}
  */
  readonly excludedValues?: string[];
}

export function httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherTlsFingerprintMatcherToTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherTlsFingerprintMatcherOutputReference | HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherTlsFingerprintMatcher): any {
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


export function httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherTlsFingerprintMatcherToHclTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherTlsFingerprintMatcherOutputReference | HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherTlsFingerprintMatcher): any {
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

export class HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherTlsFingerprintMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherTlsFingerprintMatcher | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherTlsFingerprintMatcher | undefined) {
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
export interface HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#any_client HttpLoadbalancer#any_client}
  */
  readonly anyClient?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#any_ip HttpLoadbalancer#any_ip}
  */
  readonly anyIp?: boolean | cdktf.IResolvable;
  /**
  * asn_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#asn_list HttpLoadbalancer#asn_list}
  */
  readonly asnList?: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnListStruct;
  /**
  * asn_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#asn_matcher HttpLoadbalancer#asn_matcher}
  */
  readonly asnMatcher?: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcher;
  /**
  * client_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#client_selector HttpLoadbalancer#client_selector}
  */
  readonly clientSelector?: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherClientSelector;
  /**
  * ip_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ip_matcher HttpLoadbalancer#ip_matcher}
  */
  readonly ipMatcher?: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcher;
  /**
  * ip_prefix_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ip_prefix_list HttpLoadbalancer#ip_prefix_list}
  */
  readonly ipPrefixList?: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpPrefixListStruct;
  /**
  * ip_threat_category_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ip_threat_category_list HttpLoadbalancer#ip_threat_category_list}
  */
  readonly ipThreatCategoryList?: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpThreatCategoryListStruct;
  /**
  * tls_fingerprint_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#tls_fingerprint_matcher HttpLoadbalancer#tls_fingerprint_matcher}
  */
  readonly tlsFingerprintMatcher?: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherTlsFingerprintMatcher;
}

export function httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherToTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherOutputReference | HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_client: cdktf.booleanToTerraform(struct!.anyClient),
    any_ip: cdktf.booleanToTerraform(struct!.anyIp),
    asn_list: httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnListStructToTerraform(struct!.asnList),
    asn_matcher: httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherToTerraform(struct!.asnMatcher),
    client_selector: httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherClientSelectorToTerraform(struct!.clientSelector),
    ip_matcher: httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherToTerraform(struct!.ipMatcher),
    ip_prefix_list: httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpPrefixListStructToTerraform(struct!.ipPrefixList),
    ip_threat_category_list: httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpThreatCategoryListStructToTerraform(struct!.ipThreatCategoryList),
    tls_fingerprint_matcher: httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherTlsFingerprintMatcherToTerraform(struct!.tlsFingerprintMatcher),
  }
}


export function httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherToHclTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherOutputReference | HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any_client: {
      value: cdktf.booleanToHclTerraform(struct!.anyClient),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    any_ip: {
      value: cdktf.booleanToHclTerraform(struct!.anyIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    asn_list: {
      value: httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnListStructToHclTerraform(struct!.asnList),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnListStructList",
    },
    asn_matcher: {
      value: httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherToHclTerraform(struct!.asnMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherList",
    },
    client_selector: {
      value: httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherClientSelectorToHclTerraform(struct!.clientSelector),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherClientSelectorList",
    },
    ip_matcher: {
      value: httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherToHclTerraform(struct!.ipMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherList",
    },
    ip_prefix_list: {
      value: httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpPrefixListStructToHclTerraform(struct!.ipPrefixList),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpPrefixListStructList",
    },
    ip_threat_category_list: {
      value: httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpThreatCategoryListStructToHclTerraform(struct!.ipThreatCategoryList),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpThreatCategoryListStructList",
    },
    tls_fingerprint_matcher: {
      value: httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherTlsFingerprintMatcherToHclTerraform(struct!.tlsFingerprintMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherTlsFingerprintMatcherList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyClient = this._anyClient;
    }
    if (this._anyIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyIp = this._anyIp;
    }
    if (this._asnList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnList = this._asnList?.internalValue;
    }
    if (this._asnMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnMatcher = this._asnMatcher?.internalValue;
    }
    if (this._clientSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSelector = this._clientSelector?.internalValue;
    }
    if (this._ipMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipMatcher = this._ipMatcher?.internalValue;
    }
    if (this._ipPrefixList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPrefixList = this._ipPrefixList?.internalValue;
    }
    if (this._ipThreatCategoryList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipThreatCategoryList = this._ipThreatCategoryList?.internalValue;
    }
    if (this._tlsFingerprintMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsFingerprintMatcher = this._tlsFingerprintMatcher?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._anyClient = undefined;
      this._anyIp = undefined;
      this._asnList.internalValue = undefined;
      this._asnMatcher.internalValue = undefined;
      this._clientSelector.internalValue = undefined;
      this._ipMatcher.internalValue = undefined;
      this._ipPrefixList.internalValue = undefined;
      this._ipThreatCategoryList.internalValue = undefined;
      this._tlsFingerprintMatcher.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._anyClient = value.anyClient;
      this._anyIp = value.anyIp;
      this._asnList.internalValue = value.asnList;
      this._asnMatcher.internalValue = value.asnMatcher;
      this._clientSelector.internalValue = value.clientSelector;
      this._ipMatcher.internalValue = value.ipMatcher;
      this._ipPrefixList.internalValue = value.ipPrefixList;
      this._ipThreatCategoryList.internalValue = value.ipThreatCategoryList;
      this._tlsFingerprintMatcher.internalValue = value.tlsFingerprintMatcher;
    }
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

  // asn_list - computed: false, optional: true, required: false
  private _asnList = new HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnListStructOutputReference(this, "asn_list");
  public get asnList() {
    return this._asnList;
  }
  public putAsnList(value: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnListStruct) {
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
  private _asnMatcher = new HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherOutputReference(this, "asn_matcher");
  public get asnMatcher() {
    return this._asnMatcher;
  }
  public putAsnMatcher(value: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcher) {
    this._asnMatcher.internalValue = value;
  }
  public resetAsnMatcher() {
    this._asnMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnMatcherInput() {
    return this._asnMatcher.internalValue;
  }

  // client_selector - computed: false, optional: true, required: false
  private _clientSelector = new HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherClientSelectorOutputReference(this, "client_selector");
  public get clientSelector() {
    return this._clientSelector;
  }
  public putClientSelector(value: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherClientSelector) {
    this._clientSelector.internalValue = value;
  }
  public resetClientSelector() {
    this._clientSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSelectorInput() {
    return this._clientSelector.internalValue;
  }

  // ip_matcher - computed: false, optional: true, required: false
  private _ipMatcher = new HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherOutputReference(this, "ip_matcher");
  public get ipMatcher() {
    return this._ipMatcher;
  }
  public putIpMatcher(value: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcher) {
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
  private _ipPrefixList = new HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpPrefixListStructOutputReference(this, "ip_prefix_list");
  public get ipPrefixList() {
    return this._ipPrefixList;
  }
  public putIpPrefixList(value: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpPrefixListStruct) {
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
  private _ipThreatCategoryList = new HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpThreatCategoryListStructOutputReference(this, "ip_threat_category_list");
  public get ipThreatCategoryList() {
    return this._ipThreatCategoryList;
  }
  public putIpThreatCategoryList(value: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpThreatCategoryListStruct) {
    this._ipThreatCategoryList.internalValue = value;
  }
  public resetIpThreatCategoryList() {
    this._ipThreatCategoryList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipThreatCategoryListInput() {
    return this._ipThreatCategoryList.internalValue;
  }

  // tls_fingerprint_matcher - computed: false, optional: true, required: false
  private _tlsFingerprintMatcher = new HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherTlsFingerprintMatcherOutputReference(this, "tls_fingerprint_matcher");
  public get tlsFingerprintMatcher() {
    return this._tlsFingerprintMatcher;
  }
  public putTlsFingerprintMatcher(value: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherTlsFingerprintMatcher) {
    this._tlsFingerprintMatcher.internalValue = value;
  }
  public resetTlsFingerprintMatcher() {
    this._tlsFingerprintMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsFingerprintMatcherInput() {
    return this._tlsFingerprintMatcher.internalValue;
  }
}
export interface HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#exact_values HttpLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#regex_values HttpLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#transformers HttpLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersItemToTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersItemOutputReference | HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersItem): any {
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


export function httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersItemToHclTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersItemOutputReference | HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersItem): any {
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

export class HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersItem | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersItem | undefined) {
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
export interface HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#check_not_present HttpLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#check_present HttpLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#invert_matcher HttpLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#presence HttpLoadbalancer#presence}
  */
  readonly presence?: boolean | cdktf.IResolvable;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#item HttpLoadbalancer#item}
  */
  readonly item?: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersItem;
}

export function httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersToTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    name: cdktf.stringToTerraform(struct!.name),
    presence: cdktf.booleanToTerraform(struct!.presence),
    item: httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersItemToTerraform(struct!.item),
  }
}


export function httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersToHclTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchers | cdktf.IResolvable): any {
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
    presence: {
      value: cdktf.booleanToHclTerraform(struct!.presence),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    item: {
      value: httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchers | cdktf.IResolvable | undefined {
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
    if (this._presence !== undefined) {
      hasAnyValues = true;
      internalValueResult.presence = this._presence;
    }
    if (this._item?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.item = this._item?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkNotPresent = undefined;
      this._checkPresent = undefined;
      this._invertMatcher = undefined;
      this._name = undefined;
      this._presence = undefined;
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
      this._presence = value.presence;
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

  // presence - computed: false, optional: true, required: false
  private _presence?: boolean | cdktf.IResolvable; 
  public get presence() {
    return this.getBooleanAttribute('presence');
  }
  public set presence(value: boolean | cdktf.IResolvable) {
    this._presence = value;
  }
  public resetPresence() {
    this._presence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presenceInput() {
    return this._presence;
  }

  // item - computed: false, optional: true, required: false
  private _item = new HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersItem) {
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

export class HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchers[] | cdktf.IResolvable

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
  public get(index: number): HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersOutputReference {
    return new HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#exact_values HttpLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#regex_values HttpLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#transformers HttpLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersItemToTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersItemOutputReference | HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersItem): any {
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


export function httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersItemToHclTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersItemOutputReference | HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersItem): any {
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

export class HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersItem | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersItem | undefined) {
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
export interface HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#check_not_present HttpLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#check_present HttpLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#invert_matcher HttpLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#presence HttpLoadbalancer#presence}
  */
  readonly presence?: boolean | cdktf.IResolvable;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#item HttpLoadbalancer#item}
  */
  readonly item?: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersItem;
}

export function httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersToTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    name: cdktf.stringToTerraform(struct!.name),
    presence: cdktf.booleanToTerraform(struct!.presence),
    item: httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersItemToTerraform(struct!.item),
  }
}


export function httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersToHclTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeaders | cdktf.IResolvable): any {
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
    presence: {
      value: cdktf.booleanToHclTerraform(struct!.presence),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    item: {
      value: httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeaders | cdktf.IResolvable | undefined {
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
    if (this._presence !== undefined) {
      hasAnyValues = true;
      internalValueResult.presence = this._presence;
    }
    if (this._item?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.item = this._item?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkNotPresent = undefined;
      this._checkPresent = undefined;
      this._invertMatcher = undefined;
      this._name = undefined;
      this._presence = undefined;
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
      this._presence = value.presence;
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

  // presence - computed: false, optional: true, required: false
  private _presence?: boolean | cdktf.IResolvable; 
  public get presence() {
    return this.getBooleanAttribute('presence');
  }
  public set presence(value: boolean | cdktf.IResolvable) {
    this._presence = value;
  }
  public resetPresence() {
    this._presence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presenceInput() {
    return this._presence;
  }

  // item - computed: false, optional: true, required: false
  private _item = new HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersItem) {
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

export class HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeaders[] | cdktf.IResolvable

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
  public get(index: number): HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersOutputReference {
    return new HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#exact_values HttpLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#regex_values HttpLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#transformers HttpLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsItemToTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsItemOutputReference | HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsItem): any {
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


export function httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsItemToHclTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsItemOutputReference | HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsItem): any {
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

export class HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsItem | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsItem | undefined) {
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
export interface HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaims {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#check_not_present HttpLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#check_present HttpLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#invert_matcher HttpLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#item HttpLoadbalancer#item}
  */
  readonly item?: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsItem;
}

export function httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsToTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    name: cdktf.stringToTerraform(struct!.name),
    item: httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsItemToTerraform(struct!.item),
  }
}


export function httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsToHclTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaims | cdktf.IResolvable): any {
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
      value: httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaims | cdktf.IResolvable | undefined) {
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
  private _item = new HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsItem) {
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

export class HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaims[] | cdktf.IResolvable

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
  public get(index: number): HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsOutputReference {
    return new HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#exact_values HttpLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#regex_values HttpLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#transformers HttpLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsItemToTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsItemOutputReference | HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsItem): any {
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


export function httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsItemToHclTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsItemOutputReference | HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsItem): any {
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

export class HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsItem | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsItem | undefined) {
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
export interface HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#check_not_present HttpLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#check_present HttpLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#invert_matcher HttpLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#key HttpLoadbalancer#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#presence HttpLoadbalancer#presence}
  */
  readonly presence?: boolean | cdktf.IResolvable;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#item HttpLoadbalancer#item}
  */
  readonly item?: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsItem;
}

export function httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsToTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    key: cdktf.stringToTerraform(struct!.key),
    presence: cdktf.booleanToTerraform(struct!.presence),
    item: httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsItemToTerraform(struct!.item),
  }
}


export function httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsToHclTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParams | cdktf.IResolvable): any {
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
    presence: {
      value: cdktf.booleanToHclTerraform(struct!.presence),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    item: {
      value: httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParams | cdktf.IResolvable | undefined {
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
    if (this._presence !== undefined) {
      hasAnyValues = true;
      internalValueResult.presence = this._presence;
    }
    if (this._item?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.item = this._item?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkNotPresent = undefined;
      this._checkPresent = undefined;
      this._invertMatcher = undefined;
      this._key = undefined;
      this._presence = undefined;
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
      this._presence = value.presence;
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

  // presence - computed: false, optional: true, required: false
  private _presence?: boolean | cdktf.IResolvable; 
  public get presence() {
    return this.getBooleanAttribute('presence');
  }
  public set presence(value: boolean | cdktf.IResolvable) {
    this._presence = value;
  }
  public resetPresence() {
    this._presence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presenceInput() {
    return this._presence;
  }

  // item - computed: false, optional: true, required: false
  private _item = new HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsItem) {
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

export class HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParams[] | cdktf.IResolvable

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
  public get(index: number): HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsOutputReference {
    return new HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcher {
  /**
  * cookie_matchers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#cookie_matchers HttpLoadbalancer#cookie_matchers}
  */
  readonly cookieMatchers?: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchers[] | cdktf.IResolvable;
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#headers HttpLoadbalancer#headers}
  */
  readonly headers?: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeaders[] | cdktf.IResolvable;
  /**
  * jwt_claims block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#jwt_claims HttpLoadbalancer#jwt_claims}
  */
  readonly jwtClaims?: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaims[] | cdktf.IResolvable;
  /**
  * query_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#query_params HttpLoadbalancer#query_params}
  */
  readonly queryParams?: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParams[] | cdktf.IResolvable;
}

export function httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherToTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherOutputReference | HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie_matchers: cdktf.listMapper(httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersToTerraform, true)(struct!.cookieMatchers),
    headers: cdktf.listMapper(httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersToTerraform, true)(struct!.headers),
    jwt_claims: cdktf.listMapper(httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsToTerraform, true)(struct!.jwtClaims),
    query_params: cdktf.listMapper(httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsToTerraform, true)(struct!.queryParams),
  }
}


export function httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherToHclTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherOutputReference | HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie_matchers: {
      value: cdktf.listMapperHcl(httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersToHclTerraform, true)(struct!.cookieMatchers),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersList",
    },
    headers: {
      value: cdktf.listMapperHcl(httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersList",
    },
    jwt_claims: {
      value: cdktf.listMapperHcl(httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsToHclTerraform, true)(struct!.jwtClaims),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsList",
    },
    query_params: {
      value: cdktf.listMapperHcl(httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsToHclTerraform, true)(struct!.queryParams),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookieMatchers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieMatchers = this._cookieMatchers?.internalValue;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._jwtClaims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtClaims = this._jwtClaims?.internalValue;
    }
    if (this._queryParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParams = this._queryParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cookieMatchers.internalValue = undefined;
      this._headers.internalValue = undefined;
      this._jwtClaims.internalValue = undefined;
      this._queryParams.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cookieMatchers.internalValue = value.cookieMatchers;
      this._headers.internalValue = value.headers;
      this._jwtClaims.internalValue = value.jwtClaims;
      this._queryParams.internalValue = value.queryParams;
    }
  }

  // cookie_matchers - computed: false, optional: true, required: false
  private _cookieMatchers = new HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersList(this, "cookie_matchers", false);
  public get cookieMatchers() {
    return this._cookieMatchers;
  }
  public putCookieMatchers(value: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchers[] | cdktf.IResolvable) {
    this._cookieMatchers.internalValue = value;
  }
  public resetCookieMatchers() {
    this._cookieMatchers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieMatchersInput() {
    return this._cookieMatchers.internalValue;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // jwt_claims - computed: false, optional: true, required: false
  private _jwtClaims = new HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsList(this, "jwt_claims", false);
  public get jwtClaims() {
    return this._jwtClaims;
  }
  public putJwtClaims(value: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaims[] | cdktf.IResolvable) {
    this._jwtClaims.internalValue = value;
  }
  public resetJwtClaims() {
    this._jwtClaims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtClaimsInput() {
    return this._jwtClaims.internalValue;
  }

  // query_params - computed: false, optional: true, required: false
  private _queryParams = new HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsList(this, "query_params", false);
  public get queryParams() {
    return this._queryParams;
  }
  public putQueryParams(value: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParams[] | cdktf.IResolvable) {
    this._queryParams.internalValue = value;
  }
  public resetQueryParams() {
    this._queryParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParamsInput() {
    return this._queryParams.internalValue;
  }
}
export interface HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#any_domain HttpLoadbalancer#any_domain}
  */
  readonly anyDomain?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#any_url HttpLoadbalancer#any_url}
  */
  readonly anyUrl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#base_path HttpLoadbalancer#base_path}
  */
  readonly basePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#specific_domain HttpLoadbalancer#specific_domain}
  */
  readonly specificDomain?: string;
  /**
  * api_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#api_endpoint HttpLoadbalancer#api_endpoint}
  */
  readonly apiEndpoint: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesApiEndpoint;
  /**
  * api_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#api_groups HttpLoadbalancer#api_groups}
  */
  readonly apiGroups?: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesApiGroups;
  /**
  * client_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#client_matcher HttpLoadbalancer#client_matcher}
  */
  readonly clientMatcher?: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcher;
  /**
  * request_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#request_matcher HttpLoadbalancer#request_matcher}
  */
  readonly requestMatcher?: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcher;
}

export function httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesToTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_domain: cdktf.booleanToTerraform(struct!.anyDomain),
    any_url: cdktf.booleanToTerraform(struct!.anyUrl),
    base_path: cdktf.stringToTerraform(struct!.basePath),
    specific_domain: cdktf.stringToTerraform(struct!.specificDomain),
    api_endpoint: httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesApiEndpointToTerraform(struct!.apiEndpoint),
    api_groups: httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesApiGroupsToTerraform(struct!.apiGroups),
    client_matcher: httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherToTerraform(struct!.clientMatcher),
    request_matcher: httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherToTerraform(struct!.requestMatcher),
  }
}


export function httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesToHclTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any_domain: {
      value: cdktf.booleanToHclTerraform(struct!.anyDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    any_url: {
      value: cdktf.booleanToHclTerraform(struct!.anyUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    base_path: {
      value: cdktf.stringToHclTerraform(struct!.basePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    specific_domain: {
      value: cdktf.stringToHclTerraform(struct!.specificDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_endpoint: {
      value: httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesApiEndpointToHclTerraform(struct!.apiEndpoint),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesApiEndpointList",
    },
    api_groups: {
      value: httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesApiGroupsToHclTerraform(struct!.apiGroups),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesApiGroupsList",
    },
    client_matcher: {
      value: httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherToHclTerraform(struct!.clientMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherList",
    },
    request_matcher: {
      value: httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherToHclTerraform(struct!.requestMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyDomain = this._anyDomain;
    }
    if (this._anyUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyUrl = this._anyUrl;
    }
    if (this._basePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.basePath = this._basePath;
    }
    if (this._specificDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.specificDomain = this._specificDomain;
    }
    if (this._apiEndpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiEndpoint = this._apiEndpoint?.internalValue;
    }
    if (this._apiGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroups = this._apiGroups?.internalValue;
    }
    if (this._clientMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientMatcher = this._clientMatcher?.internalValue;
    }
    if (this._requestMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMatcher = this._requestMatcher?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anyDomain = undefined;
      this._anyUrl = undefined;
      this._basePath = undefined;
      this._specificDomain = undefined;
      this._apiEndpoint.internalValue = undefined;
      this._apiGroups.internalValue = undefined;
      this._clientMatcher.internalValue = undefined;
      this._requestMatcher.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anyDomain = value.anyDomain;
      this._anyUrl = value.anyUrl;
      this._basePath = value.basePath;
      this._specificDomain = value.specificDomain;
      this._apiEndpoint.internalValue = value.apiEndpoint;
      this._apiGroups.internalValue = value.apiGroups;
      this._clientMatcher.internalValue = value.clientMatcher;
      this._requestMatcher.internalValue = value.requestMatcher;
    }
  }

  // any_domain - computed: false, optional: true, required: false
  private _anyDomain?: boolean | cdktf.IResolvable; 
  public get anyDomain() {
    return this.getBooleanAttribute('any_domain');
  }
  public set anyDomain(value: boolean | cdktf.IResolvable) {
    this._anyDomain = value;
  }
  public resetAnyDomain() {
    this._anyDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyDomainInput() {
    return this._anyDomain;
  }

  // any_url - computed: false, optional: true, required: false
  private _anyUrl?: boolean | cdktf.IResolvable; 
  public get anyUrl() {
    return this.getBooleanAttribute('any_url');
  }
  public set anyUrl(value: boolean | cdktf.IResolvable) {
    this._anyUrl = value;
  }
  public resetAnyUrl() {
    this._anyUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyUrlInput() {
    return this._anyUrl;
  }

  // base_path - computed: false, optional: true, required: false
  private _basePath?: string; 
  public get basePath() {
    return this.getStringAttribute('base_path');
  }
  public set basePath(value: string) {
    this._basePath = value;
  }
  public resetBasePath() {
    this._basePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basePathInput() {
    return this._basePath;
  }

  // specific_domain - computed: false, optional: true, required: false
  private _specificDomain?: string; 
  public get specificDomain() {
    return this.getStringAttribute('specific_domain');
  }
  public set specificDomain(value: string) {
    this._specificDomain = value;
  }
  public resetSpecificDomain() {
    this._specificDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specificDomainInput() {
    return this._specificDomain;
  }

  // api_endpoint - computed: false, optional: false, required: true
  private _apiEndpoint = new HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesApiEndpointOutputReference(this, "api_endpoint");
  public get apiEndpoint() {
    return this._apiEndpoint;
  }
  public putApiEndpoint(value: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesApiEndpoint) {
    this._apiEndpoint.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiEndpointInput() {
    return this._apiEndpoint.internalValue;
  }

  // api_groups - computed: false, optional: true, required: false
  private _apiGroups = new HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesApiGroupsOutputReference(this, "api_groups");
  public get apiGroups() {
    return this._apiGroups;
  }
  public putApiGroups(value: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesApiGroups) {
    this._apiGroups.internalValue = value;
  }
  public resetApiGroups() {
    this._apiGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupsInput() {
    return this._apiGroups.internalValue;
  }

  // client_matcher - computed: false, optional: true, required: false
  private _clientMatcher = new HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherOutputReference(this, "client_matcher");
  public get clientMatcher() {
    return this._clientMatcher;
  }
  public putClientMatcher(value: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesClientMatcher) {
    this._clientMatcher.internalValue = value;
  }
  public resetClientMatcher() {
    this._clientMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientMatcherInput() {
    return this._clientMatcher.internalValue;
  }

  // request_matcher - computed: false, optional: true, required: false
  private _requestMatcher = new HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherOutputReference(this, "request_matcher");
  public get requestMatcher() {
    return this._requestMatcher;
  }
  public putRequestMatcher(value: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcher) {
    this._requestMatcher.internalValue = value;
  }
  public resetRequestMatcher() {
    this._requestMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMatcherInput() {
    return this._requestMatcher.internalValue;
  }
}

export class HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRules[] | cdktf.IResolvable

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
  public get(index: number): HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesOutputReference {
    return new HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRules {
  /**
  * bypass_rate_limiting_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#bypass_rate_limiting_rules HttpLoadbalancer#bypass_rate_limiting_rules}
  */
  readonly bypassRateLimitingRules?: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRules[] | cdktf.IResolvable;
}

export function httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesToTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesOutputReference | HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bypass_rate_limiting_rules: cdktf.listMapper(httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesToTerraform, true)(struct!.bypassRateLimitingRules),
  }
}


export function httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesToHclTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesOutputReference | HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bypass_rate_limiting_rules: {
      value: cdktf.listMapperHcl(httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesToHclTerraform, true)(struct!.bypassRateLimitingRules),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bypassRateLimitingRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassRateLimitingRules = this._bypassRateLimitingRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bypassRateLimitingRules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bypassRateLimitingRules.internalValue = value.bypassRateLimitingRules;
    }
  }

  // bypass_rate_limiting_rules - computed: false, optional: true, required: false
  private _bypassRateLimitingRules = new HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRulesList(this, "bypass_rate_limiting_rules", false);
  public get bypassRateLimitingRules() {
    return this._bypassRateLimitingRules;
  }
  public putBypassRateLimitingRules(value: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesBypassRateLimitingRules[] | cdktf.IResolvable) {
    this._bypassRateLimitingRules.internalValue = value;
  }
  public resetBypassRateLimitingRules() {
    this._bypassRateLimitingRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassRateLimitingRulesInput() {
    return this._bypassRateLimitingRules.internalValue;
  }
}
export interface HttpLoadbalancerApiRateLimitLegacyCustomIpAllowedListRateLimiterAllowedPrefixes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerApiRateLimitLegacyCustomIpAllowedListRateLimiterAllowedPrefixesToTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyCustomIpAllowedListRateLimiterAllowedPrefixes | cdktf.IResolvable): any {
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


export function httpLoadbalancerApiRateLimitLegacyCustomIpAllowedListRateLimiterAllowedPrefixesToHclTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyCustomIpAllowedListRateLimiterAllowedPrefixes | cdktf.IResolvable): any {
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

export class HttpLoadbalancerApiRateLimitLegacyCustomIpAllowedListRateLimiterAllowedPrefixesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttpLoadbalancerApiRateLimitLegacyCustomIpAllowedListRateLimiterAllowedPrefixes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiRateLimitLegacyCustomIpAllowedListRateLimiterAllowedPrefixes | cdktf.IResolvable | undefined) {
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

export class HttpLoadbalancerApiRateLimitLegacyCustomIpAllowedListRateLimiterAllowedPrefixesList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerApiRateLimitLegacyCustomIpAllowedListRateLimiterAllowedPrefixes[] | cdktf.IResolvable

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
  public get(index: number): HttpLoadbalancerApiRateLimitLegacyCustomIpAllowedListRateLimiterAllowedPrefixesOutputReference {
    return new HttpLoadbalancerApiRateLimitLegacyCustomIpAllowedListRateLimiterAllowedPrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerApiRateLimitLegacyCustomIpAllowedListStruct {
  /**
  * rate_limiter_allowed_prefixes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#rate_limiter_allowed_prefixes HttpLoadbalancer#rate_limiter_allowed_prefixes}
  */
  readonly rateLimiterAllowedPrefixes: HttpLoadbalancerApiRateLimitLegacyCustomIpAllowedListRateLimiterAllowedPrefixes[] | cdktf.IResolvable;
}

export function httpLoadbalancerApiRateLimitLegacyCustomIpAllowedListStructToTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyCustomIpAllowedListStructOutputReference | HttpLoadbalancerApiRateLimitLegacyCustomIpAllowedListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rate_limiter_allowed_prefixes: cdktf.listMapper(httpLoadbalancerApiRateLimitLegacyCustomIpAllowedListRateLimiterAllowedPrefixesToTerraform, true)(struct!.rateLimiterAllowedPrefixes),
  }
}


export function httpLoadbalancerApiRateLimitLegacyCustomIpAllowedListStructToHclTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyCustomIpAllowedListStructOutputReference | HttpLoadbalancerApiRateLimitLegacyCustomIpAllowedListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rate_limiter_allowed_prefixes: {
      value: cdktf.listMapperHcl(httpLoadbalancerApiRateLimitLegacyCustomIpAllowedListRateLimiterAllowedPrefixesToHclTerraform, true)(struct!.rateLimiterAllowedPrefixes),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitLegacyCustomIpAllowedListRateLimiterAllowedPrefixesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitLegacyCustomIpAllowedListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitLegacyCustomIpAllowedListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rateLimiterAllowedPrefixes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimiterAllowedPrefixes = this._rateLimiterAllowedPrefixes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitLegacyCustomIpAllowedListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rateLimiterAllowedPrefixes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rateLimiterAllowedPrefixes.internalValue = value.rateLimiterAllowedPrefixes;
    }
  }

  // rate_limiter_allowed_prefixes - computed: false, optional: false, required: true
  private _rateLimiterAllowedPrefixes = new HttpLoadbalancerApiRateLimitLegacyCustomIpAllowedListRateLimiterAllowedPrefixesList(this, "rate_limiter_allowed_prefixes", false);
  public get rateLimiterAllowedPrefixes() {
    return this._rateLimiterAllowedPrefixes;
  }
  public putRateLimiterAllowedPrefixes(value: HttpLoadbalancerApiRateLimitLegacyCustomIpAllowedListRateLimiterAllowedPrefixes[] | cdktf.IResolvable) {
    this._rateLimiterAllowedPrefixes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimiterAllowedPrefixesInput() {
    return this._rateLimiterAllowedPrefixes.internalValue;
  }
}
export interface HttpLoadbalancerApiRateLimitLegacyIpAllowedListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ipv6_prefixes HttpLoadbalancer#ipv6_prefixes}
  */
  readonly ipv6Prefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#prefixes HttpLoadbalancer#prefixes}
  */
  readonly prefixes?: string[];
}

export function httpLoadbalancerApiRateLimitLegacyIpAllowedListStructToTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyIpAllowedListStructOutputReference | HttpLoadbalancerApiRateLimitLegacyIpAllowedListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv6Prefixes),
    prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefixes),
  }
}


export function httpLoadbalancerApiRateLimitLegacyIpAllowedListStructToHclTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyIpAllowedListStructOutputReference | HttpLoadbalancerApiRateLimitLegacyIpAllowedListStruct): any {
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

export class HttpLoadbalancerApiRateLimitLegacyIpAllowedListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitLegacyIpAllowedListStruct | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiRateLimitLegacyIpAllowedListStruct | undefined) {
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
export interface HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherAsnListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#as_numbers HttpLoadbalancer#as_numbers}
  */
  readonly asNumbers: number[];
}

export function httpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherAsnListStructToTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherAsnListStructOutputReference | HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherAsnListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_numbers: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.asNumbers),
  }
}


export function httpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherAsnListStructToHclTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherAsnListStructOutputReference | HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherAsnListStruct): any {
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

export class HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherAsnListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherAsnListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asNumbers !== undefined) {
      hasAnyValues = true;
      internalValueResult.asNumbers = this._asNumbers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherAsnListStruct | undefined) {
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
export interface HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherAsnMatcherAsnSets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherAsnMatcherAsnSetsToTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherAsnMatcherAsnSets | cdktf.IResolvable): any {
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


export function httpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherAsnMatcherAsnSetsToHclTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherAsnMatcherAsnSets | cdktf.IResolvable): any {
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

export class HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherAsnMatcherAsnSetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherAsnMatcherAsnSets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherAsnMatcherAsnSets | cdktf.IResolvable | undefined) {
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

export class HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherAsnMatcherAsnSetsList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherAsnMatcherAsnSets[] | cdktf.IResolvable

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
  public get(index: number): HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherAsnMatcherAsnSetsOutputReference {
    return new HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherAsnMatcherAsnSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherAsnMatcher {
  /**
  * asn_sets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#asn_sets HttpLoadbalancer#asn_sets}
  */
  readonly asnSets: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherAsnMatcherAsnSets[] | cdktf.IResolvable;
}

export function httpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherAsnMatcherToTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherAsnMatcherOutputReference | HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherAsnMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asn_sets: cdktf.listMapper(httpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherAsnMatcherAsnSetsToTerraform, true)(struct!.asnSets),
  }
}


export function httpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherAsnMatcherToHclTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherAsnMatcherOutputReference | HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherAsnMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asn_sets: {
      value: cdktf.listMapperHcl(httpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherAsnMatcherAsnSetsToHclTerraform, true)(struct!.asnSets),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherAsnMatcherAsnSetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherAsnMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherAsnMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asnSets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnSets = this._asnSets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherAsnMatcher | undefined) {
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
  private _asnSets = new HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherAsnMatcherAsnSetsList(this, "asn_sets", false);
  public get asnSets() {
    return this._asnSets;
  }
  public putAsnSets(value: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherAsnMatcherAsnSets[] | cdktf.IResolvable) {
    this._asnSets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asnSetsInput() {
    return this._asnSets.internalValue;
  }
}
export interface HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherClientSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#expressions HttpLoadbalancer#expressions}
  */
  readonly expressions: string[];
}

export function httpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherClientSelectorToTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherClientSelectorOutputReference | HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherClientSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expressions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.expressions),
  }
}


export function httpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherClientSelectorToHclTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherClientSelectorOutputReference | HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherClientSelector): any {
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

export class HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherClientSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherClientSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expressions !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressions = this._expressions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherClientSelector | undefined) {
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
export interface HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherIpMatcherPrefixSets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherIpMatcherPrefixSetsToTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherIpMatcherPrefixSets | cdktf.IResolvable): any {
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


export function httpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherIpMatcherPrefixSetsToHclTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherIpMatcherPrefixSets | cdktf.IResolvable): any {
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

export class HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherIpMatcherPrefixSetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherIpMatcherPrefixSets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherIpMatcherPrefixSets | cdktf.IResolvable | undefined) {
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

export class HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherIpMatcherPrefixSetsList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherIpMatcherPrefixSets[] | cdktf.IResolvable

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
  public get(index: number): HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherIpMatcherPrefixSetsOutputReference {
    return new HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherIpMatcherPrefixSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherIpMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#invert_matcher HttpLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * prefix_sets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#prefix_sets HttpLoadbalancer#prefix_sets}
  */
  readonly prefixSets: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherIpMatcherPrefixSets[] | cdktf.IResolvable;
}

export function httpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherIpMatcherToTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherIpMatcherOutputReference | HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherIpMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    prefix_sets: cdktf.listMapper(httpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherIpMatcherPrefixSetsToTerraform, true)(struct!.prefixSets),
  }
}


export function httpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherIpMatcherToHclTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherIpMatcherOutputReference | HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherIpMatcher): any {
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
      value: cdktf.listMapperHcl(httpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherIpMatcherPrefixSetsToHclTerraform, true)(struct!.prefixSets),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherIpMatcherPrefixSetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherIpMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherIpMatcher | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherIpMatcher | undefined) {
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
  private _prefixSets = new HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherIpMatcherPrefixSetsList(this, "prefix_sets", false);
  public get prefixSets() {
    return this._prefixSets;
  }
  public putPrefixSets(value: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherIpMatcherPrefixSets[] | cdktf.IResolvable) {
    this._prefixSets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixSetsInput() {
    return this._prefixSets.internalValue;
  }
}
export interface HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherIpPrefixListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#invert_match HttpLoadbalancer#invert_match}
  */
  readonly invertMatch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ip_prefixes HttpLoadbalancer#ip_prefixes}
  */
  readonly ipPrefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ipv6_prefixes HttpLoadbalancer#ipv6_prefixes}
  */
  readonly ipv6Prefixes?: string[];
}

export function httpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherIpPrefixListStructToTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherIpPrefixListStructOutputReference | HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherIpPrefixListStruct): any {
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


export function httpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherIpPrefixListStructToHclTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherIpPrefixListStructOutputReference | HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherIpPrefixListStruct): any {
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

export class HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherIpPrefixListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherIpPrefixListStruct | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherIpPrefixListStruct | undefined) {
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
export interface HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherIpThreatCategoryListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ip_threat_categories HttpLoadbalancer#ip_threat_categories}
  */
  readonly ipThreatCategories: string[];
}

export function httpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherIpThreatCategoryListStructToTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherIpThreatCategoryListStructOutputReference | HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherIpThreatCategoryListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_threat_categories: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipThreatCategories),
  }
}


export function httpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherIpThreatCategoryListStructToHclTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherIpThreatCategoryListStructOutputReference | HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherIpThreatCategoryListStruct): any {
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

export class HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherIpThreatCategoryListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherIpThreatCategoryListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipThreatCategories !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipThreatCategories = this._ipThreatCategories;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherIpThreatCategoryListStruct | undefined) {
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
export interface HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherTlsFingerprintMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#classes HttpLoadbalancer#classes}
  */
  readonly classes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#exact_values HttpLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#excluded_values HttpLoadbalancer#excluded_values}
  */
  readonly excludedValues?: string[];
}

export function httpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherTlsFingerprintMatcherToTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherTlsFingerprintMatcherOutputReference | HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherTlsFingerprintMatcher): any {
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


export function httpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherTlsFingerprintMatcherToHclTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherTlsFingerprintMatcherOutputReference | HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherTlsFingerprintMatcher): any {
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

export class HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherTlsFingerprintMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherTlsFingerprintMatcher | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherTlsFingerprintMatcher | undefined) {
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
export interface HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#any_client HttpLoadbalancer#any_client}
  */
  readonly anyClient?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#any_ip HttpLoadbalancer#any_ip}
  */
  readonly anyIp?: boolean | cdktf.IResolvable;
  /**
  * asn_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#asn_list HttpLoadbalancer#asn_list}
  */
  readonly asnList?: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherAsnListStruct;
  /**
  * asn_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#asn_matcher HttpLoadbalancer#asn_matcher}
  */
  readonly asnMatcher?: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherAsnMatcher;
  /**
  * client_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#client_selector HttpLoadbalancer#client_selector}
  */
  readonly clientSelector?: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherClientSelector;
  /**
  * ip_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ip_matcher HttpLoadbalancer#ip_matcher}
  */
  readonly ipMatcher?: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherIpMatcher;
  /**
  * ip_prefix_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ip_prefix_list HttpLoadbalancer#ip_prefix_list}
  */
  readonly ipPrefixList?: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherIpPrefixListStruct;
  /**
  * ip_threat_category_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ip_threat_category_list HttpLoadbalancer#ip_threat_category_list}
  */
  readonly ipThreatCategoryList?: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherIpThreatCategoryListStruct;
  /**
  * tls_fingerprint_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#tls_fingerprint_matcher HttpLoadbalancer#tls_fingerprint_matcher}
  */
  readonly tlsFingerprintMatcher?: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherTlsFingerprintMatcher;
}

export function httpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherToTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherOutputReference | HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_client: cdktf.booleanToTerraform(struct!.anyClient),
    any_ip: cdktf.booleanToTerraform(struct!.anyIp),
    asn_list: httpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherAsnListStructToTerraform(struct!.asnList),
    asn_matcher: httpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherAsnMatcherToTerraform(struct!.asnMatcher),
    client_selector: httpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherClientSelectorToTerraform(struct!.clientSelector),
    ip_matcher: httpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherIpMatcherToTerraform(struct!.ipMatcher),
    ip_prefix_list: httpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherIpPrefixListStructToTerraform(struct!.ipPrefixList),
    ip_threat_category_list: httpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherIpThreatCategoryListStructToTerraform(struct!.ipThreatCategoryList),
    tls_fingerprint_matcher: httpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherTlsFingerprintMatcherToTerraform(struct!.tlsFingerprintMatcher),
  }
}


export function httpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherToHclTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherOutputReference | HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any_client: {
      value: cdktf.booleanToHclTerraform(struct!.anyClient),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    any_ip: {
      value: cdktf.booleanToHclTerraform(struct!.anyIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    asn_list: {
      value: httpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherAsnListStructToHclTerraform(struct!.asnList),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherAsnListStructList",
    },
    asn_matcher: {
      value: httpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherAsnMatcherToHclTerraform(struct!.asnMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherAsnMatcherList",
    },
    client_selector: {
      value: httpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherClientSelectorToHclTerraform(struct!.clientSelector),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherClientSelectorList",
    },
    ip_matcher: {
      value: httpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherIpMatcherToHclTerraform(struct!.ipMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherIpMatcherList",
    },
    ip_prefix_list: {
      value: httpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherIpPrefixListStructToHclTerraform(struct!.ipPrefixList),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherIpPrefixListStructList",
    },
    ip_threat_category_list: {
      value: httpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherIpThreatCategoryListStructToHclTerraform(struct!.ipThreatCategoryList),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherIpThreatCategoryListStructList",
    },
    tls_fingerprint_matcher: {
      value: httpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherTlsFingerprintMatcherToHclTerraform(struct!.tlsFingerprintMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherTlsFingerprintMatcherList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyClient = this._anyClient;
    }
    if (this._anyIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyIp = this._anyIp;
    }
    if (this._asnList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnList = this._asnList?.internalValue;
    }
    if (this._asnMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnMatcher = this._asnMatcher?.internalValue;
    }
    if (this._clientSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSelector = this._clientSelector?.internalValue;
    }
    if (this._ipMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipMatcher = this._ipMatcher?.internalValue;
    }
    if (this._ipPrefixList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPrefixList = this._ipPrefixList?.internalValue;
    }
    if (this._ipThreatCategoryList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipThreatCategoryList = this._ipThreatCategoryList?.internalValue;
    }
    if (this._tlsFingerprintMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsFingerprintMatcher = this._tlsFingerprintMatcher?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._anyClient = undefined;
      this._anyIp = undefined;
      this._asnList.internalValue = undefined;
      this._asnMatcher.internalValue = undefined;
      this._clientSelector.internalValue = undefined;
      this._ipMatcher.internalValue = undefined;
      this._ipPrefixList.internalValue = undefined;
      this._ipThreatCategoryList.internalValue = undefined;
      this._tlsFingerprintMatcher.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._anyClient = value.anyClient;
      this._anyIp = value.anyIp;
      this._asnList.internalValue = value.asnList;
      this._asnMatcher.internalValue = value.asnMatcher;
      this._clientSelector.internalValue = value.clientSelector;
      this._ipMatcher.internalValue = value.ipMatcher;
      this._ipPrefixList.internalValue = value.ipPrefixList;
      this._ipThreatCategoryList.internalValue = value.ipThreatCategoryList;
      this._tlsFingerprintMatcher.internalValue = value.tlsFingerprintMatcher;
    }
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

  // asn_list - computed: false, optional: true, required: false
  private _asnList = new HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherAsnListStructOutputReference(this, "asn_list");
  public get asnList() {
    return this._asnList;
  }
  public putAsnList(value: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherAsnListStruct) {
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
  private _asnMatcher = new HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherAsnMatcherOutputReference(this, "asn_matcher");
  public get asnMatcher() {
    return this._asnMatcher;
  }
  public putAsnMatcher(value: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherAsnMatcher) {
    this._asnMatcher.internalValue = value;
  }
  public resetAsnMatcher() {
    this._asnMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnMatcherInput() {
    return this._asnMatcher.internalValue;
  }

  // client_selector - computed: false, optional: true, required: false
  private _clientSelector = new HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherClientSelectorOutputReference(this, "client_selector");
  public get clientSelector() {
    return this._clientSelector;
  }
  public putClientSelector(value: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherClientSelector) {
    this._clientSelector.internalValue = value;
  }
  public resetClientSelector() {
    this._clientSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSelectorInput() {
    return this._clientSelector.internalValue;
  }

  // ip_matcher - computed: false, optional: true, required: false
  private _ipMatcher = new HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherIpMatcherOutputReference(this, "ip_matcher");
  public get ipMatcher() {
    return this._ipMatcher;
  }
  public putIpMatcher(value: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherIpMatcher) {
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
  private _ipPrefixList = new HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherIpPrefixListStructOutputReference(this, "ip_prefix_list");
  public get ipPrefixList() {
    return this._ipPrefixList;
  }
  public putIpPrefixList(value: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherIpPrefixListStruct) {
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
  private _ipThreatCategoryList = new HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherIpThreatCategoryListStructOutputReference(this, "ip_threat_category_list");
  public get ipThreatCategoryList() {
    return this._ipThreatCategoryList;
  }
  public putIpThreatCategoryList(value: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherIpThreatCategoryListStruct) {
    this._ipThreatCategoryList.internalValue = value;
  }
  public resetIpThreatCategoryList() {
    this._ipThreatCategoryList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipThreatCategoryListInput() {
    return this._ipThreatCategoryList.internalValue;
  }

  // tls_fingerprint_matcher - computed: false, optional: true, required: false
  private _tlsFingerprintMatcher = new HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherTlsFingerprintMatcherOutputReference(this, "tls_fingerprint_matcher");
  public get tlsFingerprintMatcher() {
    return this._tlsFingerprintMatcher;
  }
  public putTlsFingerprintMatcher(value: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherTlsFingerprintMatcher) {
    this._tlsFingerprintMatcher.internalValue = value;
  }
  public resetTlsFingerprintMatcher() {
    this._tlsFingerprintMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsFingerprintMatcherInput() {
    return this._tlsFingerprintMatcher.internalValue;
  }
}
export interface HttpLoadbalancerApiRateLimitLegacyServerUrlRulesInlineRateLimiterRefUserId {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerApiRateLimitLegacyServerUrlRulesInlineRateLimiterRefUserIdToTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesInlineRateLimiterRefUserIdOutputReference | HttpLoadbalancerApiRateLimitLegacyServerUrlRulesInlineRateLimiterRefUserId): any {
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


export function httpLoadbalancerApiRateLimitLegacyServerUrlRulesInlineRateLimiterRefUserIdToHclTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesInlineRateLimiterRefUserIdOutputReference | HttpLoadbalancerApiRateLimitLegacyServerUrlRulesInlineRateLimiterRefUserId): any {
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

export class HttpLoadbalancerApiRateLimitLegacyServerUrlRulesInlineRateLimiterRefUserIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitLegacyServerUrlRulesInlineRateLimiterRefUserId | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesInlineRateLimiterRefUserId | undefined) {
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
export interface HttpLoadbalancerApiRateLimitLegacyServerUrlRulesInlineRateLimiter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#threshold HttpLoadbalancer#threshold}
  */
  readonly threshold: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#unit HttpLoadbalancer#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#use_http_lb_user_id HttpLoadbalancer#use_http_lb_user_id}
  */
  readonly useHttpLbUserId?: boolean | cdktf.IResolvable;
  /**
  * ref_user_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ref_user_id HttpLoadbalancer#ref_user_id}
  */
  readonly refUserId?: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesInlineRateLimiterRefUserId;
}

export function httpLoadbalancerApiRateLimitLegacyServerUrlRulesInlineRateLimiterToTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesInlineRateLimiterOutputReference | HttpLoadbalancerApiRateLimitLegacyServerUrlRulesInlineRateLimiter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    threshold: cdktf.numberToTerraform(struct!.threshold),
    unit: cdktf.stringToTerraform(struct!.unit),
    use_http_lb_user_id: cdktf.booleanToTerraform(struct!.useHttpLbUserId),
    ref_user_id: httpLoadbalancerApiRateLimitLegacyServerUrlRulesInlineRateLimiterRefUserIdToTerraform(struct!.refUserId),
  }
}


export function httpLoadbalancerApiRateLimitLegacyServerUrlRulesInlineRateLimiterToHclTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesInlineRateLimiterOutputReference | HttpLoadbalancerApiRateLimitLegacyServerUrlRulesInlineRateLimiter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_http_lb_user_id: {
      value: cdktf.booleanToHclTerraform(struct!.useHttpLbUserId),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ref_user_id: {
      value: httpLoadbalancerApiRateLimitLegacyServerUrlRulesInlineRateLimiterRefUserIdToHclTerraform(struct!.refUserId),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitLegacyServerUrlRulesInlineRateLimiterRefUserIdList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitLegacyServerUrlRulesInlineRateLimiterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitLegacyServerUrlRulesInlineRateLimiter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._useHttpLbUserId !== undefined) {
      hasAnyValues = true;
      internalValueResult.useHttpLbUserId = this._useHttpLbUserId;
    }
    if (this._refUserId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.refUserId = this._refUserId?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesInlineRateLimiter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._threshold = undefined;
      this._unit = undefined;
      this._useHttpLbUserId = undefined;
      this._refUserId.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._threshold = value.threshold;
      this._unit = value.unit;
      this._useHttpLbUserId = value.useHttpLbUserId;
      this._refUserId.internalValue = value.refUserId;
    }
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

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // use_http_lb_user_id - computed: false, optional: true, required: false
  private _useHttpLbUserId?: boolean | cdktf.IResolvable; 
  public get useHttpLbUserId() {
    return this.getBooleanAttribute('use_http_lb_user_id');
  }
  public set useHttpLbUserId(value: boolean | cdktf.IResolvable) {
    this._useHttpLbUserId = value;
  }
  public resetUseHttpLbUserId() {
    this._useHttpLbUserId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useHttpLbUserIdInput() {
    return this._useHttpLbUserId;
  }

  // ref_user_id - computed: false, optional: true, required: false
  private _refUserId = new HttpLoadbalancerApiRateLimitLegacyServerUrlRulesInlineRateLimiterRefUserIdOutputReference(this, "ref_user_id");
  public get refUserId() {
    return this._refUserId;
  }
  public putRefUserId(value: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesInlineRateLimiterRefUserId) {
    this._refUserId.internalValue = value;
  }
  public resetRefUserId() {
    this._refUserId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refUserIdInput() {
    return this._refUserId.internalValue;
  }
}
export interface HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRefRateLimiter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerApiRateLimitLegacyServerUrlRulesRefRateLimiterToTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRefRateLimiterOutputReference | HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRefRateLimiter): any {
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


export function httpLoadbalancerApiRateLimitLegacyServerUrlRulesRefRateLimiterToHclTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRefRateLimiterOutputReference | HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRefRateLimiter): any {
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

export class HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRefRateLimiterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRefRateLimiter | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRefRateLimiter | undefined) {
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
export interface HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherCookieMatchersItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#exact_values HttpLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#regex_values HttpLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#transformers HttpLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function httpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherCookieMatchersItemToTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherCookieMatchersItemOutputReference | HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherCookieMatchersItem): any {
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


export function httpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherCookieMatchersItemToHclTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherCookieMatchersItemOutputReference | HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherCookieMatchersItem): any {
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

export class HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherCookieMatchersItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherCookieMatchersItem | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherCookieMatchersItem | undefined) {
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
export interface HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherCookieMatchers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#check_not_present HttpLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#check_present HttpLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#invert_matcher HttpLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#presence HttpLoadbalancer#presence}
  */
  readonly presence?: boolean | cdktf.IResolvable;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#item HttpLoadbalancer#item}
  */
  readonly item?: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherCookieMatchersItem;
}

export function httpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherCookieMatchersToTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherCookieMatchers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    name: cdktf.stringToTerraform(struct!.name),
    presence: cdktf.booleanToTerraform(struct!.presence),
    item: httpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherCookieMatchersItemToTerraform(struct!.item),
  }
}


export function httpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherCookieMatchersToHclTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherCookieMatchers | cdktf.IResolvable): any {
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
    presence: {
      value: cdktf.booleanToHclTerraform(struct!.presence),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    item: {
      value: httpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherCookieMatchersItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherCookieMatchersItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherCookieMatchersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherCookieMatchers | cdktf.IResolvable | undefined {
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
    if (this._presence !== undefined) {
      hasAnyValues = true;
      internalValueResult.presence = this._presence;
    }
    if (this._item?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.item = this._item?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherCookieMatchers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkNotPresent = undefined;
      this._checkPresent = undefined;
      this._invertMatcher = undefined;
      this._name = undefined;
      this._presence = undefined;
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
      this._presence = value.presence;
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

  // presence - computed: false, optional: true, required: false
  private _presence?: boolean | cdktf.IResolvable; 
  public get presence() {
    return this.getBooleanAttribute('presence');
  }
  public set presence(value: boolean | cdktf.IResolvable) {
    this._presence = value;
  }
  public resetPresence() {
    this._presence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presenceInput() {
    return this._presence;
  }

  // item - computed: false, optional: true, required: false
  private _item = new HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherCookieMatchersItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherCookieMatchersItem) {
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

export class HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherCookieMatchersList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherCookieMatchers[] | cdktf.IResolvable

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
  public get(index: number): HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherCookieMatchersOutputReference {
    return new HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherCookieMatchersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherHeadersItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#exact_values HttpLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#regex_values HttpLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#transformers HttpLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function httpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherHeadersItemToTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherHeadersItemOutputReference | HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherHeadersItem): any {
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


export function httpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherHeadersItemToHclTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherHeadersItemOutputReference | HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherHeadersItem): any {
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

export class HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherHeadersItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherHeadersItem | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherHeadersItem | undefined) {
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
export interface HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#check_not_present HttpLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#check_present HttpLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#invert_matcher HttpLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#presence HttpLoadbalancer#presence}
  */
  readonly presence?: boolean | cdktf.IResolvable;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#item HttpLoadbalancer#item}
  */
  readonly item?: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherHeadersItem;
}

export function httpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherHeadersToTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    name: cdktf.stringToTerraform(struct!.name),
    presence: cdktf.booleanToTerraform(struct!.presence),
    item: httpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherHeadersItemToTerraform(struct!.item),
  }
}


export function httpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherHeadersToHclTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherHeaders | cdktf.IResolvable): any {
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
    presence: {
      value: cdktf.booleanToHclTerraform(struct!.presence),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    item: {
      value: httpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherHeadersItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherHeadersItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherHeaders | cdktf.IResolvable | undefined {
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
    if (this._presence !== undefined) {
      hasAnyValues = true;
      internalValueResult.presence = this._presence;
    }
    if (this._item?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.item = this._item?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkNotPresent = undefined;
      this._checkPresent = undefined;
      this._invertMatcher = undefined;
      this._name = undefined;
      this._presence = undefined;
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
      this._presence = value.presence;
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

  // presence - computed: false, optional: true, required: false
  private _presence?: boolean | cdktf.IResolvable; 
  public get presence() {
    return this.getBooleanAttribute('presence');
  }
  public set presence(value: boolean | cdktf.IResolvable) {
    this._presence = value;
  }
  public resetPresence() {
    this._presence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presenceInput() {
    return this._presence;
  }

  // item - computed: false, optional: true, required: false
  private _item = new HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherHeadersItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherHeadersItem) {
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

export class HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherHeadersList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherHeaders[] | cdktf.IResolvable

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
  public get(index: number): HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherHeadersOutputReference {
    return new HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherJwtClaimsItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#exact_values HttpLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#regex_values HttpLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#transformers HttpLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function httpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherJwtClaimsItemToTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherJwtClaimsItemOutputReference | HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherJwtClaimsItem): any {
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


export function httpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherJwtClaimsItemToHclTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherJwtClaimsItemOutputReference | HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherJwtClaimsItem): any {
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

export class HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherJwtClaimsItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherJwtClaimsItem | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherJwtClaimsItem | undefined) {
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
export interface HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherJwtClaims {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#check_not_present HttpLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#check_present HttpLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#invert_matcher HttpLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#item HttpLoadbalancer#item}
  */
  readonly item?: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherJwtClaimsItem;
}

export function httpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherJwtClaimsToTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherJwtClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    name: cdktf.stringToTerraform(struct!.name),
    item: httpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherJwtClaimsItemToTerraform(struct!.item),
  }
}


export function httpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherJwtClaimsToHclTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherJwtClaims | cdktf.IResolvable): any {
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
      value: httpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherJwtClaimsItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherJwtClaimsItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherJwtClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherJwtClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherJwtClaims | cdktf.IResolvable | undefined) {
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
  private _item = new HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherJwtClaimsItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherJwtClaimsItem) {
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

export class HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherJwtClaimsList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherJwtClaims[] | cdktf.IResolvable

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
  public get(index: number): HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherJwtClaimsOutputReference {
    return new HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherJwtClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherQueryParamsItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#exact_values HttpLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#regex_values HttpLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#transformers HttpLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function httpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherQueryParamsItemToTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherQueryParamsItemOutputReference | HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherQueryParamsItem): any {
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


export function httpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherQueryParamsItemToHclTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherQueryParamsItemOutputReference | HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherQueryParamsItem): any {
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

export class HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherQueryParamsItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherQueryParamsItem | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherQueryParamsItem | undefined) {
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
export interface HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherQueryParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#check_not_present HttpLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#check_present HttpLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#invert_matcher HttpLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#key HttpLoadbalancer#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#presence HttpLoadbalancer#presence}
  */
  readonly presence?: boolean | cdktf.IResolvable;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#item HttpLoadbalancer#item}
  */
  readonly item?: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherQueryParamsItem;
}

export function httpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherQueryParamsToTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherQueryParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    key: cdktf.stringToTerraform(struct!.key),
    presence: cdktf.booleanToTerraform(struct!.presence),
    item: httpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherQueryParamsItemToTerraform(struct!.item),
  }
}


export function httpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherQueryParamsToHclTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherQueryParams | cdktf.IResolvable): any {
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
    presence: {
      value: cdktf.booleanToHclTerraform(struct!.presence),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    item: {
      value: httpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherQueryParamsItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherQueryParamsItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherQueryParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherQueryParams | cdktf.IResolvable | undefined {
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
    if (this._presence !== undefined) {
      hasAnyValues = true;
      internalValueResult.presence = this._presence;
    }
    if (this._item?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.item = this._item?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherQueryParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkNotPresent = undefined;
      this._checkPresent = undefined;
      this._invertMatcher = undefined;
      this._key = undefined;
      this._presence = undefined;
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
      this._presence = value.presence;
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

  // presence - computed: false, optional: true, required: false
  private _presence?: boolean | cdktf.IResolvable; 
  public get presence() {
    return this.getBooleanAttribute('presence');
  }
  public set presence(value: boolean | cdktf.IResolvable) {
    this._presence = value;
  }
  public resetPresence() {
    this._presence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presenceInput() {
    return this._presence;
  }

  // item - computed: false, optional: true, required: false
  private _item = new HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherQueryParamsItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherQueryParamsItem) {
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

export class HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherQueryParamsList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherQueryParams[] | cdktf.IResolvable

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
  public get(index: number): HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherQueryParamsOutputReference {
    return new HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherQueryParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcher {
  /**
  * cookie_matchers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#cookie_matchers HttpLoadbalancer#cookie_matchers}
  */
  readonly cookieMatchers?: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherCookieMatchers[] | cdktf.IResolvable;
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#headers HttpLoadbalancer#headers}
  */
  readonly headers?: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherHeaders[] | cdktf.IResolvable;
  /**
  * jwt_claims block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#jwt_claims HttpLoadbalancer#jwt_claims}
  */
  readonly jwtClaims?: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherJwtClaims[] | cdktf.IResolvable;
  /**
  * query_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#query_params HttpLoadbalancer#query_params}
  */
  readonly queryParams?: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherQueryParams[] | cdktf.IResolvable;
}

export function httpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherToTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherOutputReference | HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie_matchers: cdktf.listMapper(httpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherCookieMatchersToTerraform, true)(struct!.cookieMatchers),
    headers: cdktf.listMapper(httpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherHeadersToTerraform, true)(struct!.headers),
    jwt_claims: cdktf.listMapper(httpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherJwtClaimsToTerraform, true)(struct!.jwtClaims),
    query_params: cdktf.listMapper(httpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherQueryParamsToTerraform, true)(struct!.queryParams),
  }
}


export function httpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherToHclTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherOutputReference | HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie_matchers: {
      value: cdktf.listMapperHcl(httpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherCookieMatchersToHclTerraform, true)(struct!.cookieMatchers),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherCookieMatchersList",
    },
    headers: {
      value: cdktf.listMapperHcl(httpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherHeadersList",
    },
    jwt_claims: {
      value: cdktf.listMapperHcl(httpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherJwtClaimsToHclTerraform, true)(struct!.jwtClaims),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherJwtClaimsList",
    },
    query_params: {
      value: cdktf.listMapperHcl(httpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherQueryParamsToHclTerraform, true)(struct!.queryParams),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherQueryParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookieMatchers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieMatchers = this._cookieMatchers?.internalValue;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._jwtClaims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtClaims = this._jwtClaims?.internalValue;
    }
    if (this._queryParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParams = this._queryParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cookieMatchers.internalValue = undefined;
      this._headers.internalValue = undefined;
      this._jwtClaims.internalValue = undefined;
      this._queryParams.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cookieMatchers.internalValue = value.cookieMatchers;
      this._headers.internalValue = value.headers;
      this._jwtClaims.internalValue = value.jwtClaims;
      this._queryParams.internalValue = value.queryParams;
    }
  }

  // cookie_matchers - computed: false, optional: true, required: false
  private _cookieMatchers = new HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherCookieMatchersList(this, "cookie_matchers", false);
  public get cookieMatchers() {
    return this._cookieMatchers;
  }
  public putCookieMatchers(value: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherCookieMatchers[] | cdktf.IResolvable) {
    this._cookieMatchers.internalValue = value;
  }
  public resetCookieMatchers() {
    this._cookieMatchers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieMatchersInput() {
    return this._cookieMatchers.internalValue;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // jwt_claims - computed: false, optional: true, required: false
  private _jwtClaims = new HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherJwtClaimsList(this, "jwt_claims", false);
  public get jwtClaims() {
    return this._jwtClaims;
  }
  public putJwtClaims(value: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherJwtClaims[] | cdktf.IResolvable) {
    this._jwtClaims.internalValue = value;
  }
  public resetJwtClaims() {
    this._jwtClaims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtClaimsInput() {
    return this._jwtClaims.internalValue;
  }

  // query_params - computed: false, optional: true, required: false
  private _queryParams = new HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherQueryParamsList(this, "query_params", false);
  public get queryParams() {
    return this._queryParams;
  }
  public putQueryParams(value: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherQueryParams[] | cdktf.IResolvable) {
    this._queryParams.internalValue = value;
  }
  public resetQueryParams() {
    this._queryParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParamsInput() {
    return this._queryParams.internalValue;
  }
}
export interface HttpLoadbalancerApiRateLimitLegacyServerUrlRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#any_domain HttpLoadbalancer#any_domain}
  */
  readonly anyDomain?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#api_group HttpLoadbalancer#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#base_path HttpLoadbalancer#base_path}
  */
  readonly basePath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#specific_domain HttpLoadbalancer#specific_domain}
  */
  readonly specificDomain?: string;
  /**
  * client_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#client_matcher HttpLoadbalancer#client_matcher}
  */
  readonly clientMatcher?: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcher;
  /**
  * inline_rate_limiter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#inline_rate_limiter HttpLoadbalancer#inline_rate_limiter}
  */
  readonly inlineRateLimiter?: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesInlineRateLimiter;
  /**
  * ref_rate_limiter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ref_rate_limiter HttpLoadbalancer#ref_rate_limiter}
  */
  readonly refRateLimiter?: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRefRateLimiter;
  /**
  * request_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#request_matcher HttpLoadbalancer#request_matcher}
  */
  readonly requestMatcher?: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcher;
}

export function httpLoadbalancerApiRateLimitLegacyServerUrlRulesToTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyServerUrlRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_domain: cdktf.booleanToTerraform(struct!.anyDomain),
    api_group: cdktf.stringToTerraform(struct!.apiGroup),
    base_path: cdktf.stringToTerraform(struct!.basePath),
    specific_domain: cdktf.stringToTerraform(struct!.specificDomain),
    client_matcher: httpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherToTerraform(struct!.clientMatcher),
    inline_rate_limiter: httpLoadbalancerApiRateLimitLegacyServerUrlRulesInlineRateLimiterToTerraform(struct!.inlineRateLimiter),
    ref_rate_limiter: httpLoadbalancerApiRateLimitLegacyServerUrlRulesRefRateLimiterToTerraform(struct!.refRateLimiter),
    request_matcher: httpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherToTerraform(struct!.requestMatcher),
  }
}


export function httpLoadbalancerApiRateLimitLegacyServerUrlRulesToHclTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyServerUrlRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any_domain: {
      value: cdktf.booleanToHclTerraform(struct!.anyDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    api_group: {
      value: cdktf.stringToHclTerraform(struct!.apiGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    base_path: {
      value: cdktf.stringToHclTerraform(struct!.basePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    specific_domain: {
      value: cdktf.stringToHclTerraform(struct!.specificDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_matcher: {
      value: httpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherToHclTerraform(struct!.clientMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherList",
    },
    inline_rate_limiter: {
      value: httpLoadbalancerApiRateLimitLegacyServerUrlRulesInlineRateLimiterToHclTerraform(struct!.inlineRateLimiter),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitLegacyServerUrlRulesInlineRateLimiterList",
    },
    ref_rate_limiter: {
      value: httpLoadbalancerApiRateLimitLegacyServerUrlRulesRefRateLimiterToHclTerraform(struct!.refRateLimiter),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRefRateLimiterList",
    },
    request_matcher: {
      value: httpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherToHclTerraform(struct!.requestMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitLegacyServerUrlRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttpLoadbalancerApiRateLimitLegacyServerUrlRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyDomain = this._anyDomain;
    }
    if (this._apiGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroup = this._apiGroup;
    }
    if (this._basePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.basePath = this._basePath;
    }
    if (this._specificDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.specificDomain = this._specificDomain;
    }
    if (this._clientMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientMatcher = this._clientMatcher?.internalValue;
    }
    if (this._inlineRateLimiter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inlineRateLimiter = this._inlineRateLimiter?.internalValue;
    }
    if (this._refRateLimiter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.refRateLimiter = this._refRateLimiter?.internalValue;
    }
    if (this._requestMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMatcher = this._requestMatcher?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitLegacyServerUrlRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anyDomain = undefined;
      this._apiGroup = undefined;
      this._basePath = undefined;
      this._specificDomain = undefined;
      this._clientMatcher.internalValue = undefined;
      this._inlineRateLimiter.internalValue = undefined;
      this._refRateLimiter.internalValue = undefined;
      this._requestMatcher.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anyDomain = value.anyDomain;
      this._apiGroup = value.apiGroup;
      this._basePath = value.basePath;
      this._specificDomain = value.specificDomain;
      this._clientMatcher.internalValue = value.clientMatcher;
      this._inlineRateLimiter.internalValue = value.inlineRateLimiter;
      this._refRateLimiter.internalValue = value.refRateLimiter;
      this._requestMatcher.internalValue = value.requestMatcher;
    }
  }

  // any_domain - computed: false, optional: true, required: false
  private _anyDomain?: boolean | cdktf.IResolvable; 
  public get anyDomain() {
    return this.getBooleanAttribute('any_domain');
  }
  public set anyDomain(value: boolean | cdktf.IResolvable) {
    this._anyDomain = value;
  }
  public resetAnyDomain() {
    this._anyDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyDomainInput() {
    return this._anyDomain;
  }

  // api_group - computed: false, optional: true, required: false
  private _apiGroup?: string; 
  public get apiGroup() {
    return this.getStringAttribute('api_group');
  }
  public set apiGroup(value: string) {
    this._apiGroup = value;
  }
  public resetApiGroup() {
    this._apiGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupInput() {
    return this._apiGroup;
  }

  // base_path - computed: false, optional: false, required: true
  private _basePath?: string; 
  public get basePath() {
    return this.getStringAttribute('base_path');
  }
  public set basePath(value: string) {
    this._basePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get basePathInput() {
    return this._basePath;
  }

  // specific_domain - computed: false, optional: true, required: false
  private _specificDomain?: string; 
  public get specificDomain() {
    return this.getStringAttribute('specific_domain');
  }
  public set specificDomain(value: string) {
    this._specificDomain = value;
  }
  public resetSpecificDomain() {
    this._specificDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specificDomainInput() {
    return this._specificDomain;
  }

  // client_matcher - computed: false, optional: true, required: false
  private _clientMatcher = new HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcherOutputReference(this, "client_matcher");
  public get clientMatcher() {
    return this._clientMatcher;
  }
  public putClientMatcher(value: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesClientMatcher) {
    this._clientMatcher.internalValue = value;
  }
  public resetClientMatcher() {
    this._clientMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientMatcherInput() {
    return this._clientMatcher.internalValue;
  }

  // inline_rate_limiter - computed: false, optional: true, required: false
  private _inlineRateLimiter = new HttpLoadbalancerApiRateLimitLegacyServerUrlRulesInlineRateLimiterOutputReference(this, "inline_rate_limiter");
  public get inlineRateLimiter() {
    return this._inlineRateLimiter;
  }
  public putInlineRateLimiter(value: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesInlineRateLimiter) {
    this._inlineRateLimiter.internalValue = value;
  }
  public resetInlineRateLimiter() {
    this._inlineRateLimiter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlineRateLimiterInput() {
    return this._inlineRateLimiter.internalValue;
  }

  // ref_rate_limiter - computed: false, optional: true, required: false
  private _refRateLimiter = new HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRefRateLimiterOutputReference(this, "ref_rate_limiter");
  public get refRateLimiter() {
    return this._refRateLimiter;
  }
  public putRefRateLimiter(value: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRefRateLimiter) {
    this._refRateLimiter.internalValue = value;
  }
  public resetRefRateLimiter() {
    this._refRateLimiter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refRateLimiterInput() {
    return this._refRateLimiter.internalValue;
  }

  // request_matcher - computed: false, optional: true, required: false
  private _requestMatcher = new HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcherOutputReference(this, "request_matcher");
  public get requestMatcher() {
    return this._requestMatcher;
  }
  public putRequestMatcher(value: HttpLoadbalancerApiRateLimitLegacyServerUrlRulesRequestMatcher) {
    this._requestMatcher.internalValue = value;
  }
  public resetRequestMatcher() {
    this._requestMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMatcherInput() {
    return this._requestMatcher.internalValue;
  }
}

export class HttpLoadbalancerApiRateLimitLegacyServerUrlRulesList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerApiRateLimitLegacyServerUrlRules[] | cdktf.IResolvable

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
  public get(index: number): HttpLoadbalancerApiRateLimitLegacyServerUrlRulesOutputReference {
    return new HttpLoadbalancerApiRateLimitLegacyServerUrlRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerApiRateLimitLegacy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#no_ip_allowed_list HttpLoadbalancer#no_ip_allowed_list}
  */
  readonly noIpAllowedList?: boolean | cdktf.IResolvable;
  /**
  * api_endpoint_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#api_endpoint_rules HttpLoadbalancer#api_endpoint_rules}
  */
  readonly apiEndpointRules?: HttpLoadbalancerApiRateLimitLegacyApiEndpointRules[] | cdktf.IResolvable;
  /**
  * bypass_rate_limiting_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#bypass_rate_limiting_rules HttpLoadbalancer#bypass_rate_limiting_rules}
  */
  readonly bypassRateLimitingRules?: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRules;
  /**
  * custom_ip_allowed_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#custom_ip_allowed_list HttpLoadbalancer#custom_ip_allowed_list}
  */
  readonly customIpAllowedList?: HttpLoadbalancerApiRateLimitLegacyCustomIpAllowedListStruct;
  /**
  * ip_allowed_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ip_allowed_list HttpLoadbalancer#ip_allowed_list}
  */
  readonly ipAllowedList?: HttpLoadbalancerApiRateLimitLegacyIpAllowedListStruct;
  /**
  * server_url_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#server_url_rules HttpLoadbalancer#server_url_rules}
  */
  readonly serverUrlRules?: HttpLoadbalancerApiRateLimitLegacyServerUrlRules[] | cdktf.IResolvable;
}

export function httpLoadbalancerApiRateLimitLegacyToTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyOutputReference | HttpLoadbalancerApiRateLimitLegacy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_ip_allowed_list: cdktf.booleanToTerraform(struct!.noIpAllowedList),
    api_endpoint_rules: cdktf.listMapper(httpLoadbalancerApiRateLimitLegacyApiEndpointRulesToTerraform, true)(struct!.apiEndpointRules),
    bypass_rate_limiting_rules: httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesToTerraform(struct!.bypassRateLimitingRules),
    custom_ip_allowed_list: httpLoadbalancerApiRateLimitLegacyCustomIpAllowedListStructToTerraform(struct!.customIpAllowedList),
    ip_allowed_list: httpLoadbalancerApiRateLimitLegacyIpAllowedListStructToTerraform(struct!.ipAllowedList),
    server_url_rules: cdktf.listMapper(httpLoadbalancerApiRateLimitLegacyServerUrlRulesToTerraform, true)(struct!.serverUrlRules),
  }
}


export function httpLoadbalancerApiRateLimitLegacyToHclTerraform(struct?: HttpLoadbalancerApiRateLimitLegacyOutputReference | HttpLoadbalancerApiRateLimitLegacy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no_ip_allowed_list: {
      value: cdktf.booleanToHclTerraform(struct!.noIpAllowedList),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    api_endpoint_rules: {
      value: cdktf.listMapperHcl(httpLoadbalancerApiRateLimitLegacyApiEndpointRulesToHclTerraform, true)(struct!.apiEndpointRules),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesList",
    },
    bypass_rate_limiting_rules: {
      value: httpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesToHclTerraform(struct!.bypassRateLimitingRules),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesList",
    },
    custom_ip_allowed_list: {
      value: httpLoadbalancerApiRateLimitLegacyCustomIpAllowedListStructToHclTerraform(struct!.customIpAllowedList),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitLegacyCustomIpAllowedListStructList",
    },
    ip_allowed_list: {
      value: httpLoadbalancerApiRateLimitLegacyIpAllowedListStructToHclTerraform(struct!.ipAllowedList),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitLegacyIpAllowedListStructList",
    },
    server_url_rules: {
      value: cdktf.listMapperHcl(httpLoadbalancerApiRateLimitLegacyServerUrlRulesToHclTerraform, true)(struct!.serverUrlRules),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitLegacyServerUrlRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitLegacyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitLegacy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._noIpAllowedList !== undefined) {
      hasAnyValues = true;
      internalValueResult.noIpAllowedList = this._noIpAllowedList;
    }
    if (this._apiEndpointRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiEndpointRules = this._apiEndpointRules?.internalValue;
    }
    if (this._bypassRateLimitingRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassRateLimitingRules = this._bypassRateLimitingRules?.internalValue;
    }
    if (this._customIpAllowedList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customIpAllowedList = this._customIpAllowedList?.internalValue;
    }
    if (this._ipAllowedList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAllowedList = this._ipAllowedList?.internalValue;
    }
    if (this._serverUrlRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverUrlRules = this._serverUrlRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitLegacy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._noIpAllowedList = undefined;
      this._apiEndpointRules.internalValue = undefined;
      this._bypassRateLimitingRules.internalValue = undefined;
      this._customIpAllowedList.internalValue = undefined;
      this._ipAllowedList.internalValue = undefined;
      this._serverUrlRules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._noIpAllowedList = value.noIpAllowedList;
      this._apiEndpointRules.internalValue = value.apiEndpointRules;
      this._bypassRateLimitingRules.internalValue = value.bypassRateLimitingRules;
      this._customIpAllowedList.internalValue = value.customIpAllowedList;
      this._ipAllowedList.internalValue = value.ipAllowedList;
      this._serverUrlRules.internalValue = value.serverUrlRules;
    }
  }

  // no_ip_allowed_list - computed: false, optional: true, required: false
  private _noIpAllowedList?: boolean | cdktf.IResolvable; 
  public get noIpAllowedList() {
    return this.getBooleanAttribute('no_ip_allowed_list');
  }
  public set noIpAllowedList(value: boolean | cdktf.IResolvable) {
    this._noIpAllowedList = value;
  }
  public resetNoIpAllowedList() {
    this._noIpAllowedList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noIpAllowedListInput() {
    return this._noIpAllowedList;
  }

  // api_endpoint_rules - computed: false, optional: true, required: false
  private _apiEndpointRules = new HttpLoadbalancerApiRateLimitLegacyApiEndpointRulesList(this, "api_endpoint_rules", false);
  public get apiEndpointRules() {
    return this._apiEndpointRules;
  }
  public putApiEndpointRules(value: HttpLoadbalancerApiRateLimitLegacyApiEndpointRules[] | cdktf.IResolvable) {
    this._apiEndpointRules.internalValue = value;
  }
  public resetApiEndpointRules() {
    this._apiEndpointRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiEndpointRulesInput() {
    return this._apiEndpointRules.internalValue;
  }

  // bypass_rate_limiting_rules - computed: false, optional: true, required: false
  private _bypassRateLimitingRules = new HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRulesOutputReference(this, "bypass_rate_limiting_rules");
  public get bypassRateLimitingRules() {
    return this._bypassRateLimitingRules;
  }
  public putBypassRateLimitingRules(value: HttpLoadbalancerApiRateLimitLegacyBypassRateLimitingRules) {
    this._bypassRateLimitingRules.internalValue = value;
  }
  public resetBypassRateLimitingRules() {
    this._bypassRateLimitingRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassRateLimitingRulesInput() {
    return this._bypassRateLimitingRules.internalValue;
  }

  // custom_ip_allowed_list - computed: false, optional: true, required: false
  private _customIpAllowedList = new HttpLoadbalancerApiRateLimitLegacyCustomIpAllowedListStructOutputReference(this, "custom_ip_allowed_list");
  public get customIpAllowedList() {
    return this._customIpAllowedList;
  }
  public putCustomIpAllowedList(value: HttpLoadbalancerApiRateLimitLegacyCustomIpAllowedListStruct) {
    this._customIpAllowedList.internalValue = value;
  }
  public resetCustomIpAllowedList() {
    this._customIpAllowedList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customIpAllowedListInput() {
    return this._customIpAllowedList.internalValue;
  }

  // ip_allowed_list - computed: false, optional: true, required: false
  private _ipAllowedList = new HttpLoadbalancerApiRateLimitLegacyIpAllowedListStructOutputReference(this, "ip_allowed_list");
  public get ipAllowedList() {
    return this._ipAllowedList;
  }
  public putIpAllowedList(value: HttpLoadbalancerApiRateLimitLegacyIpAllowedListStruct) {
    this._ipAllowedList.internalValue = value;
  }
  public resetIpAllowedList() {
    this._ipAllowedList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAllowedListInput() {
    return this._ipAllowedList.internalValue;
  }

  // server_url_rules - computed: false, optional: true, required: false
  private _serverUrlRules = new HttpLoadbalancerApiRateLimitLegacyServerUrlRulesList(this, "server_url_rules", false);
  public get serverUrlRules() {
    return this._serverUrlRules;
  }
  public putServerUrlRules(value: HttpLoadbalancerApiRateLimitLegacyServerUrlRules[] | cdktf.IResolvable) {
    this._serverUrlRules.internalValue = value;
  }
  public resetServerUrlRules() {
    this._serverUrlRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverUrlRulesInput() {
    return this._serverUrlRules.internalValue;
  }
}
export interface HttpLoadbalancerApiSpecificationApiDefinition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerApiSpecificationApiDefinitionToTerraform(struct?: HttpLoadbalancerApiSpecificationApiDefinitionOutputReference | HttpLoadbalancerApiSpecificationApiDefinition): any {
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


export function httpLoadbalancerApiSpecificationApiDefinitionToHclTerraform(struct?: HttpLoadbalancerApiSpecificationApiDefinitionOutputReference | HttpLoadbalancerApiSpecificationApiDefinition): any {
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

export class HttpLoadbalancerApiSpecificationApiDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiSpecificationApiDefinition | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiSpecificationApiDefinition | undefined) {
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
export interface HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#methods HttpLoadbalancer#methods}
  */
  readonly methods?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#path HttpLoadbalancer#path}
  */
  readonly path: string;
}

export function httpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpointToTerraform(struct?: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpointOutputReference | HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.methods),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function httpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpointToHclTerraform(struct?: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpointOutputReference | HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.methods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._methods !== undefined) {
      hasAnyValues = true;
      internalValueResult.methods = this._methods;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._methods = undefined;
      this._path = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._methods = value.methods;
      this._path = value.path;
    }
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

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#description HttpLoadbalancer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#disable HttpLoadbalancer#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
}

export function httpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadataToTerraform(struct?: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadataOutputReference | HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadata): any {
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


export function httpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadataToHclTerraform(struct?: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadataOutputReference | HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadata): any {
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

export class HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadata | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadata | undefined) {
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
export interface HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#action_block HttpLoadbalancer#action_block}
  */
  readonly actionBlock?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#action_report HttpLoadbalancer#action_report}
  */
  readonly actionReport?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#action_skip HttpLoadbalancer#action_skip}
  */
  readonly actionSkip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#api_group HttpLoadbalancer#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#base_path HttpLoadbalancer#base_path}
  */
  readonly basePath?: string;
  /**
  * api_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#api_endpoint HttpLoadbalancer#api_endpoint}
  */
  readonly apiEndpoint?: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpoint;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#metadata HttpLoadbalancer#metadata}
  */
  readonly metadata: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadata;
}

export function httpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesToTerraform(struct?: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_block: cdktf.booleanToTerraform(struct!.actionBlock),
    action_report: cdktf.booleanToTerraform(struct!.actionReport),
    action_skip: cdktf.booleanToTerraform(struct!.actionSkip),
    api_group: cdktf.stringToTerraform(struct!.apiGroup),
    base_path: cdktf.stringToTerraform(struct!.basePath),
    api_endpoint: httpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpointToTerraform(struct!.apiEndpoint),
    metadata: httpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadataToTerraform(struct!.metadata),
  }
}


export function httpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesToHclTerraform(struct?: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_block: {
      value: cdktf.booleanToHclTerraform(struct!.actionBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    action_report: {
      value: cdktf.booleanToHclTerraform(struct!.actionReport),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    action_skip: {
      value: cdktf.booleanToHclTerraform(struct!.actionSkip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    api_group: {
      value: cdktf.stringToHclTerraform(struct!.apiGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    base_path: {
      value: cdktf.stringToHclTerraform(struct!.basePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_endpoint: {
      value: httpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpointToHclTerraform(struct!.apiEndpoint),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpointList",
    },
    metadata: {
      value: httpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionBlock = this._actionBlock;
    }
    if (this._actionReport !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionReport = this._actionReport;
    }
    if (this._actionSkip !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionSkip = this._actionSkip;
    }
    if (this._apiGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroup = this._apiGroup;
    }
    if (this._basePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.basePath = this._basePath;
    }
    if (this._apiEndpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiEndpoint = this._apiEndpoint?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionBlock = undefined;
      this._actionReport = undefined;
      this._actionSkip = undefined;
      this._apiGroup = undefined;
      this._basePath = undefined;
      this._apiEndpoint.internalValue = undefined;
      this._metadata.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionBlock = value.actionBlock;
      this._actionReport = value.actionReport;
      this._actionSkip = value.actionSkip;
      this._apiGroup = value.apiGroup;
      this._basePath = value.basePath;
      this._apiEndpoint.internalValue = value.apiEndpoint;
      this._metadata.internalValue = value.metadata;
    }
  }

  // action_block - computed: false, optional: true, required: false
  private _actionBlock?: boolean | cdktf.IResolvable; 
  public get actionBlock() {
    return this.getBooleanAttribute('action_block');
  }
  public set actionBlock(value: boolean | cdktf.IResolvable) {
    this._actionBlock = value;
  }
  public resetActionBlock() {
    this._actionBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionBlockInput() {
    return this._actionBlock;
  }

  // action_report - computed: false, optional: true, required: false
  private _actionReport?: boolean | cdktf.IResolvable; 
  public get actionReport() {
    return this.getBooleanAttribute('action_report');
  }
  public set actionReport(value: boolean | cdktf.IResolvable) {
    this._actionReport = value;
  }
  public resetActionReport() {
    this._actionReport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionReportInput() {
    return this._actionReport;
  }

  // action_skip - computed: false, optional: true, required: false
  private _actionSkip?: boolean | cdktf.IResolvable; 
  public get actionSkip() {
    return this.getBooleanAttribute('action_skip');
  }
  public set actionSkip(value: boolean | cdktf.IResolvable) {
    this._actionSkip = value;
  }
  public resetActionSkip() {
    this._actionSkip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionSkipInput() {
    return this._actionSkip;
  }

  // api_group - computed: false, optional: true, required: false
  private _apiGroup?: string; 
  public get apiGroup() {
    return this.getStringAttribute('api_group');
  }
  public set apiGroup(value: string) {
    this._apiGroup = value;
  }
  public resetApiGroup() {
    this._apiGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupInput() {
    return this._apiGroup;
  }

  // base_path - computed: false, optional: true, required: false
  private _basePath?: string; 
  public get basePath() {
    return this.getStringAttribute('base_path');
  }
  public set basePath(value: string) {
    this._basePath = value;
  }
  public resetBasePath() {
    this._basePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basePathInput() {
    return this._basePath;
  }

  // api_endpoint - computed: false, optional: true, required: false
  private _apiEndpoint = new HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpointOutputReference(this, "api_endpoint");
  public get apiEndpoint() {
    return this._apiEndpoint;
  }
  public putApiEndpoint(value: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpoint) {
    this._apiEndpoint.internalValue = value;
  }
  public resetApiEndpoint() {
    this._apiEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiEndpointInput() {
    return this._apiEndpoint.internalValue;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }
}

export class HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRules[] | cdktf.IResolvable

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
  public get(index: number): HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesOutputReference {
    return new HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustom {
  /**
  * open_api_validation_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#open_api_validation_rules HttpLoadbalancer#open_api_validation_rules}
  */
  readonly openApiValidationRules: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRules[] | cdktf.IResolvable;
}

export function httpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomToTerraform(struct?: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOutputReference | HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    open_api_validation_rules: cdktf.listMapper(httpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesToTerraform, true)(struct!.openApiValidationRules),
  }
}


export function httpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomToHclTerraform(struct?: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOutputReference | HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    open_api_validation_rules: {
      value: cdktf.listMapperHcl(httpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesToHclTerraform, true)(struct!.openApiValidationRules),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._openApiValidationRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.openApiValidationRules = this._openApiValidationRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._openApiValidationRules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._openApiValidationRules.internalValue = value.openApiValidationRules;
    }
  }

  // open_api_validation_rules - computed: false, optional: false, required: true
  private _openApiValidationRules = new HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesList(this, "open_api_validation_rules", false);
  public get openApiValidationRules() {
    return this._openApiValidationRules;
  }
  public putOpenApiValidationRules(value: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRules[] | cdktf.IResolvable) {
    this._openApiValidationRules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get openApiValidationRulesInput() {
    return this._openApiValidationRules.internalValue;
  }
}
export interface HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughMode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#fall_through_mode_allow HttpLoadbalancer#fall_through_mode_allow}
  */
  readonly fallThroughModeAllow?: boolean | cdktf.IResolvable;
  /**
  * fall_through_mode_custom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#fall_through_mode_custom HttpLoadbalancer#fall_through_mode_custom}
  */
  readonly fallThroughModeCustom?: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustom;
}

export function httpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeToTerraform(struct?: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeOutputReference | HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fall_through_mode_allow: cdktf.booleanToTerraform(struct!.fallThroughModeAllow),
    fall_through_mode_custom: httpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomToTerraform(struct!.fallThroughModeCustom),
  }
}


export function httpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeToHclTerraform(struct?: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeOutputReference | HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fall_through_mode_allow: {
      value: cdktf.booleanToHclTerraform(struct!.fallThroughModeAllow),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fall_through_mode_custom: {
      value: httpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomToHclTerraform(struct!.fallThroughModeCustom),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughMode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fallThroughModeAllow !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallThroughModeAllow = this._fallThroughModeAllow;
    }
    if (this._fallThroughModeCustom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallThroughModeCustom = this._fallThroughModeCustom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughMode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fallThroughModeAllow = undefined;
      this._fallThroughModeCustom.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fallThroughModeAllow = value.fallThroughModeAllow;
      this._fallThroughModeCustom.internalValue = value.fallThroughModeCustom;
    }
  }

  // fall_through_mode_allow - computed: false, optional: true, required: false
  private _fallThroughModeAllow?: boolean | cdktf.IResolvable; 
  public get fallThroughModeAllow() {
    return this.getBooleanAttribute('fall_through_mode_allow');
  }
  public set fallThroughModeAllow(value: boolean | cdktf.IResolvable) {
    this._fallThroughModeAllow = value;
  }
  public resetFallThroughModeAllow() {
    this._fallThroughModeAllow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallThroughModeAllowInput() {
    return this._fallThroughModeAllow;
  }

  // fall_through_mode_custom - computed: false, optional: true, required: false
  private _fallThroughModeCustom = new HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOutputReference(this, "fall_through_mode_custom");
  public get fallThroughModeCustom() {
    return this._fallThroughModeCustom;
  }
  public putFallThroughModeCustom(value: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustom) {
    this._fallThroughModeCustom.internalValue = value;
  }
  public resetFallThroughModeCustom() {
    this._fallThroughModeCustom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallThroughModeCustomInput() {
    return this._fallThroughModeCustom.internalValue;
  }
}
export interface HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#allow_additional_headers HttpLoadbalancer#allow_additional_headers}
  */
  readonly allowAdditionalHeaders?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#disallow_additional_headers HttpLoadbalancer#disallow_additional_headers}
  */
  readonly disallowAdditionalHeaders?: boolean | cdktf.IResolvable;
}

export function httpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomHeadersToTerraform(struct?: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomHeadersOutputReference | HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_additional_headers: cdktf.booleanToTerraform(struct!.allowAdditionalHeaders),
    disallow_additional_headers: cdktf.booleanToTerraform(struct!.disallowAdditionalHeaders),
  }
}


export function httpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomHeadersToHclTerraform(struct?: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomHeadersOutputReference | HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_additional_headers: {
      value: cdktf.booleanToHclTerraform(struct!.allowAdditionalHeaders),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disallow_additional_headers: {
      value: cdktf.booleanToHclTerraform(struct!.disallowAdditionalHeaders),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowAdditionalHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowAdditionalHeaders = this._allowAdditionalHeaders;
    }
    if (this._disallowAdditionalHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.disallowAdditionalHeaders = this._disallowAdditionalHeaders;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowAdditionalHeaders = undefined;
      this._disallowAdditionalHeaders = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowAdditionalHeaders = value.allowAdditionalHeaders;
      this._disallowAdditionalHeaders = value.disallowAdditionalHeaders;
    }
  }

  // allow_additional_headers - computed: false, optional: true, required: false
  private _allowAdditionalHeaders?: boolean | cdktf.IResolvable; 
  public get allowAdditionalHeaders() {
    return this.getBooleanAttribute('allow_additional_headers');
  }
  public set allowAdditionalHeaders(value: boolean | cdktf.IResolvable) {
    this._allowAdditionalHeaders = value;
  }
  public resetAllowAdditionalHeaders() {
    this._allowAdditionalHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAdditionalHeadersInput() {
    return this._allowAdditionalHeaders;
  }

  // disallow_additional_headers - computed: false, optional: true, required: false
  private _disallowAdditionalHeaders?: boolean | cdktf.IResolvable; 
  public get disallowAdditionalHeaders() {
    return this.getBooleanAttribute('disallow_additional_headers');
  }
  public set disallowAdditionalHeaders(value: boolean | cdktf.IResolvable) {
    this._disallowAdditionalHeaders = value;
  }
  public resetDisallowAdditionalHeaders() {
    this._disallowAdditionalHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disallowAdditionalHeadersInput() {
    return this._disallowAdditionalHeaders;
  }
}
export interface HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomQueryParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#allow_additional_parameters HttpLoadbalancer#allow_additional_parameters}
  */
  readonly allowAdditionalParameters?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#disallow_additional_parameters HttpLoadbalancer#disallow_additional_parameters}
  */
  readonly disallowAdditionalParameters?: boolean | cdktf.IResolvable;
}

export function httpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomQueryParametersToTerraform(struct?: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomQueryParametersOutputReference | HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomQueryParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_additional_parameters: cdktf.booleanToTerraform(struct!.allowAdditionalParameters),
    disallow_additional_parameters: cdktf.booleanToTerraform(struct!.disallowAdditionalParameters),
  }
}


export function httpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomQueryParametersToHclTerraform(struct?: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomQueryParametersOutputReference | HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomQueryParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_additional_parameters: {
      value: cdktf.booleanToHclTerraform(struct!.allowAdditionalParameters),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disallow_additional_parameters: {
      value: cdktf.booleanToHclTerraform(struct!.disallowAdditionalParameters),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomQueryParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomQueryParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowAdditionalParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowAdditionalParameters = this._allowAdditionalParameters;
    }
    if (this._disallowAdditionalParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.disallowAdditionalParameters = this._disallowAdditionalParameters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomQueryParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowAdditionalParameters = undefined;
      this._disallowAdditionalParameters = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowAdditionalParameters = value.allowAdditionalParameters;
      this._disallowAdditionalParameters = value.disallowAdditionalParameters;
    }
  }

  // allow_additional_parameters - computed: false, optional: true, required: false
  private _allowAdditionalParameters?: boolean | cdktf.IResolvable; 
  public get allowAdditionalParameters() {
    return this.getBooleanAttribute('allow_additional_parameters');
  }
  public set allowAdditionalParameters(value: boolean | cdktf.IResolvable) {
    this._allowAdditionalParameters = value;
  }
  public resetAllowAdditionalParameters() {
    this._allowAdditionalParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAdditionalParametersInput() {
    return this._allowAdditionalParameters;
  }

  // disallow_additional_parameters - computed: false, optional: true, required: false
  private _disallowAdditionalParameters?: boolean | cdktf.IResolvable; 
  public get disallowAdditionalParameters() {
    return this.getBooleanAttribute('disallow_additional_parameters');
  }
  public set disallowAdditionalParameters(value: boolean | cdktf.IResolvable) {
    this._disallowAdditionalParameters = value;
  }
  public resetDisallowAdditionalParameters() {
    this._disallowAdditionalParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disallowAdditionalParametersInput() {
    return this._disallowAdditionalParameters;
  }
}
export interface HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustom {
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#headers HttpLoadbalancer#headers}
  */
  readonly headers?: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomHeaders;
  /**
  * query_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#query_parameters HttpLoadbalancer#query_parameters}
  */
  readonly queryParameters?: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomQueryParameters;
}

export function httpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomToTerraform(struct?: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomOutputReference | HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers: httpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomHeadersToTerraform(struct!.headers),
    query_parameters: httpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomQueryParametersToTerraform(struct!.queryParameters),
  }
}


export function httpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomToHclTerraform(struct?: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomOutputReference | HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    headers: {
      value: httpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomHeadersToHclTerraform(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomHeadersList",
    },
    query_parameters: {
      value: httpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomQueryParametersToHclTerraform(struct!.queryParameters),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomQueryParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._queryParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParameters = this._queryParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headers.internalValue = undefined;
      this._queryParameters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headers.internalValue = value.headers;
      this._queryParameters.internalValue = value.queryParameters;
    }
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomHeadersOutputReference(this, "headers");
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomHeaders) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // query_parameters - computed: false, optional: true, required: false
  private _queryParameters = new HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomQueryParametersOutputReference(this, "query_parameters");
  public get queryParameters() {
    return this._queryParameters;
  }
  public putQueryParameters(value: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomQueryParameters) {
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
export interface HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#fail_close HttpLoadbalancer#fail_close}
  */
  readonly failClose?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#fail_open HttpLoadbalancer#fail_open}
  */
  readonly failOpen?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#oversized_body_fail_validation HttpLoadbalancer#oversized_body_fail_validation}
  */
  readonly oversizedBodyFailValidation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#oversized_body_skip_validation HttpLoadbalancer#oversized_body_skip_validation}
  */
  readonly oversizedBodySkipValidation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#property_validation_settings_default HttpLoadbalancer#property_validation_settings_default}
  */
  readonly propertyValidationSettingsDefault?: boolean | cdktf.IResolvable;
  /**
  * property_validation_settings_custom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#property_validation_settings_custom HttpLoadbalancer#property_validation_settings_custom}
  */
  readonly propertyValidationSettingsCustom?: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustom;
}

export function httpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsToTerraform(struct?: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsOutputReference | HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fail_close: cdktf.booleanToTerraform(struct!.failClose),
    fail_open: cdktf.booleanToTerraform(struct!.failOpen),
    oversized_body_fail_validation: cdktf.booleanToTerraform(struct!.oversizedBodyFailValidation),
    oversized_body_skip_validation: cdktf.booleanToTerraform(struct!.oversizedBodySkipValidation),
    property_validation_settings_default: cdktf.booleanToTerraform(struct!.propertyValidationSettingsDefault),
    property_validation_settings_custom: httpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomToTerraform(struct!.propertyValidationSettingsCustom),
  }
}


export function httpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsToHclTerraform(struct?: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsOutputReference | HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fail_close: {
      value: cdktf.booleanToHclTerraform(struct!.failClose),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fail_open: {
      value: cdktf.booleanToHclTerraform(struct!.failOpen),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    oversized_body_fail_validation: {
      value: cdktf.booleanToHclTerraform(struct!.oversizedBodyFailValidation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    oversized_body_skip_validation: {
      value: cdktf.booleanToHclTerraform(struct!.oversizedBodySkipValidation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    property_validation_settings_default: {
      value: cdktf.booleanToHclTerraform(struct!.propertyValidationSettingsDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    property_validation_settings_custom: {
      value: httpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomToHclTerraform(struct!.propertyValidationSettingsCustom),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failClose !== undefined) {
      hasAnyValues = true;
      internalValueResult.failClose = this._failClose;
    }
    if (this._failOpen !== undefined) {
      hasAnyValues = true;
      internalValueResult.failOpen = this._failOpen;
    }
    if (this._oversizedBodyFailValidation !== undefined) {
      hasAnyValues = true;
      internalValueResult.oversizedBodyFailValidation = this._oversizedBodyFailValidation;
    }
    if (this._oversizedBodySkipValidation !== undefined) {
      hasAnyValues = true;
      internalValueResult.oversizedBodySkipValidation = this._oversizedBodySkipValidation;
    }
    if (this._propertyValidationSettingsDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyValidationSettingsDefault = this._propertyValidationSettingsDefault;
    }
    if (this._propertyValidationSettingsCustom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyValidationSettingsCustom = this._propertyValidationSettingsCustom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._failClose = undefined;
      this._failOpen = undefined;
      this._oversizedBodyFailValidation = undefined;
      this._oversizedBodySkipValidation = undefined;
      this._propertyValidationSettingsDefault = undefined;
      this._propertyValidationSettingsCustom.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._failClose = value.failClose;
      this._failOpen = value.failOpen;
      this._oversizedBodyFailValidation = value.oversizedBodyFailValidation;
      this._oversizedBodySkipValidation = value.oversizedBodySkipValidation;
      this._propertyValidationSettingsDefault = value.propertyValidationSettingsDefault;
      this._propertyValidationSettingsCustom.internalValue = value.propertyValidationSettingsCustom;
    }
  }

  // fail_close - computed: false, optional: true, required: false
  private _failClose?: boolean | cdktf.IResolvable; 
  public get failClose() {
    return this.getBooleanAttribute('fail_close');
  }
  public set failClose(value: boolean | cdktf.IResolvable) {
    this._failClose = value;
  }
  public resetFailClose() {
    this._failClose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failCloseInput() {
    return this._failClose;
  }

  // fail_open - computed: false, optional: true, required: false
  private _failOpen?: boolean | cdktf.IResolvable; 
  public get failOpen() {
    return this.getBooleanAttribute('fail_open');
  }
  public set failOpen(value: boolean | cdktf.IResolvable) {
    this._failOpen = value;
  }
  public resetFailOpen() {
    this._failOpen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failOpenInput() {
    return this._failOpen;
  }

  // oversized_body_fail_validation - computed: false, optional: true, required: false
  private _oversizedBodyFailValidation?: boolean | cdktf.IResolvable; 
  public get oversizedBodyFailValidation() {
    return this.getBooleanAttribute('oversized_body_fail_validation');
  }
  public set oversizedBodyFailValidation(value: boolean | cdktf.IResolvable) {
    this._oversizedBodyFailValidation = value;
  }
  public resetOversizedBodyFailValidation() {
    this._oversizedBodyFailValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oversizedBodyFailValidationInput() {
    return this._oversizedBodyFailValidation;
  }

  // oversized_body_skip_validation - computed: false, optional: true, required: false
  private _oversizedBodySkipValidation?: boolean | cdktf.IResolvable; 
  public get oversizedBodySkipValidation() {
    return this.getBooleanAttribute('oversized_body_skip_validation');
  }
  public set oversizedBodySkipValidation(value: boolean | cdktf.IResolvable) {
    this._oversizedBodySkipValidation = value;
  }
  public resetOversizedBodySkipValidation() {
    this._oversizedBodySkipValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oversizedBodySkipValidationInput() {
    return this._oversizedBodySkipValidation;
  }

  // property_validation_settings_default - computed: false, optional: true, required: false
  private _propertyValidationSettingsDefault?: boolean | cdktf.IResolvable; 
  public get propertyValidationSettingsDefault() {
    return this.getBooleanAttribute('property_validation_settings_default');
  }
  public set propertyValidationSettingsDefault(value: boolean | cdktf.IResolvable) {
    this._propertyValidationSettingsDefault = value;
  }
  public resetPropertyValidationSettingsDefault() {
    this._propertyValidationSettingsDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyValidationSettingsDefaultInput() {
    return this._propertyValidationSettingsDefault;
  }

  // property_validation_settings_custom - computed: false, optional: true, required: false
  private _propertyValidationSettingsCustom = new HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomOutputReference(this, "property_validation_settings_custom");
  public get propertyValidationSettingsCustom() {
    return this._propertyValidationSettingsCustom;
  }
  public putPropertyValidationSettingsCustom(value: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustom) {
    this._propertyValidationSettingsCustom.internalValue = value;
  }
  public resetPropertyValidationSettingsCustom() {
    this._propertyValidationSettingsCustom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyValidationSettingsCustomInput() {
    return this._propertyValidationSettingsCustom.internalValue;
  }
}
export interface HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeResponseValidationModeActive {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#enforcement_block HttpLoadbalancer#enforcement_block}
  */
  readonly enforcementBlock?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#enforcement_report HttpLoadbalancer#enforcement_report}
  */
  readonly enforcementReport?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#response_validation_properties HttpLoadbalancer#response_validation_properties}
  */
  readonly responseValidationProperties: string[];
}

export function httpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeResponseValidationModeActiveToTerraform(struct?: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeResponseValidationModeActiveOutputReference | HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeResponseValidationModeActive): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enforcement_block: cdktf.booleanToTerraform(struct!.enforcementBlock),
    enforcement_report: cdktf.booleanToTerraform(struct!.enforcementReport),
    response_validation_properties: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.responseValidationProperties),
  }
}


export function httpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeResponseValidationModeActiveToHclTerraform(struct?: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeResponseValidationModeActiveOutputReference | HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeResponseValidationModeActive): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enforcement_block: {
      value: cdktf.booleanToHclTerraform(struct!.enforcementBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enforcement_report: {
      value: cdktf.booleanToHclTerraform(struct!.enforcementReport),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    response_validation_properties: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.responseValidationProperties),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeResponseValidationModeActiveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeResponseValidationModeActive | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enforcementBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforcementBlock = this._enforcementBlock;
    }
    if (this._enforcementReport !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforcementReport = this._enforcementReport;
    }
    if (this._responseValidationProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseValidationProperties = this._responseValidationProperties;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeResponseValidationModeActive | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enforcementBlock = undefined;
      this._enforcementReport = undefined;
      this._responseValidationProperties = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enforcementBlock = value.enforcementBlock;
      this._enforcementReport = value.enforcementReport;
      this._responseValidationProperties = value.responseValidationProperties;
    }
  }

  // enforcement_block - computed: false, optional: true, required: false
  private _enforcementBlock?: boolean | cdktf.IResolvable; 
  public get enforcementBlock() {
    return this.getBooleanAttribute('enforcement_block');
  }
  public set enforcementBlock(value: boolean | cdktf.IResolvable) {
    this._enforcementBlock = value;
  }
  public resetEnforcementBlock() {
    this._enforcementBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcementBlockInput() {
    return this._enforcementBlock;
  }

  // enforcement_report - computed: false, optional: true, required: false
  private _enforcementReport?: boolean | cdktf.IResolvable; 
  public get enforcementReport() {
    return this.getBooleanAttribute('enforcement_report');
  }
  public set enforcementReport(value: boolean | cdktf.IResolvable) {
    this._enforcementReport = value;
  }
  public resetEnforcementReport() {
    this._enforcementReport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcementReportInput() {
    return this._enforcementReport;
  }

  // response_validation_properties - computed: false, optional: false, required: true
  private _responseValidationProperties?: string[]; 
  public get responseValidationProperties() {
    return this.getListAttribute('response_validation_properties');
  }
  public set responseValidationProperties(value: string[]) {
    this._responseValidationProperties = value;
  }
  // Temporarily expose input value. Use with caution.
  public get responseValidationPropertiesInput() {
    return this._responseValidationProperties;
  }
}
export interface HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeValidationModeActive {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#enforcement_block HttpLoadbalancer#enforcement_block}
  */
  readonly enforcementBlock?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#enforcement_report HttpLoadbalancer#enforcement_report}
  */
  readonly enforcementReport?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#request_validation_properties HttpLoadbalancer#request_validation_properties}
  */
  readonly requestValidationProperties: string[];
}

export function httpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeValidationModeActiveToTerraform(struct?: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeValidationModeActiveOutputReference | HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeValidationModeActive): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enforcement_block: cdktf.booleanToTerraform(struct!.enforcementBlock),
    enforcement_report: cdktf.booleanToTerraform(struct!.enforcementReport),
    request_validation_properties: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.requestValidationProperties),
  }
}


export function httpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeValidationModeActiveToHclTerraform(struct?: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeValidationModeActiveOutputReference | HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeValidationModeActive): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enforcement_block: {
      value: cdktf.booleanToHclTerraform(struct!.enforcementBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enforcement_report: {
      value: cdktf.booleanToHclTerraform(struct!.enforcementReport),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    request_validation_properties: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.requestValidationProperties),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeValidationModeActiveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeValidationModeActive | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enforcementBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforcementBlock = this._enforcementBlock;
    }
    if (this._enforcementReport !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforcementReport = this._enforcementReport;
    }
    if (this._requestValidationProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestValidationProperties = this._requestValidationProperties;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeValidationModeActive | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enforcementBlock = undefined;
      this._enforcementReport = undefined;
      this._requestValidationProperties = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enforcementBlock = value.enforcementBlock;
      this._enforcementReport = value.enforcementReport;
      this._requestValidationProperties = value.requestValidationProperties;
    }
  }

  // enforcement_block - computed: false, optional: true, required: false
  private _enforcementBlock?: boolean | cdktf.IResolvable; 
  public get enforcementBlock() {
    return this.getBooleanAttribute('enforcement_block');
  }
  public set enforcementBlock(value: boolean | cdktf.IResolvable) {
    this._enforcementBlock = value;
  }
  public resetEnforcementBlock() {
    this._enforcementBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcementBlockInput() {
    return this._enforcementBlock;
  }

  // enforcement_report - computed: false, optional: true, required: false
  private _enforcementReport?: boolean | cdktf.IResolvable; 
  public get enforcementReport() {
    return this.getBooleanAttribute('enforcement_report');
  }
  public set enforcementReport(value: boolean | cdktf.IResolvable) {
    this._enforcementReport = value;
  }
  public resetEnforcementReport() {
    this._enforcementReport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcementReportInput() {
    return this._enforcementReport;
  }

  // request_validation_properties - computed: false, optional: false, required: true
  private _requestValidationProperties?: string[]; 
  public get requestValidationProperties() {
    return this.getListAttribute('request_validation_properties');
  }
  public set requestValidationProperties(value: string[]) {
    this._requestValidationProperties = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestValidationPropertiesInput() {
    return this._requestValidationProperties;
  }
}
export interface HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationMode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#skip_response_validation HttpLoadbalancer#skip_response_validation}
  */
  readonly skipResponseValidation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#skip_validation HttpLoadbalancer#skip_validation}
  */
  readonly skipValidation?: boolean | cdktf.IResolvable;
  /**
  * response_validation_mode_active block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#response_validation_mode_active HttpLoadbalancer#response_validation_mode_active}
  */
  readonly responseValidationModeActive?: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeResponseValidationModeActive;
  /**
  * validation_mode_active block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#validation_mode_active HttpLoadbalancer#validation_mode_active}
  */
  readonly validationModeActive?: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeValidationModeActive;
}

export function httpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeToTerraform(struct?: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeOutputReference | HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    skip_response_validation: cdktf.booleanToTerraform(struct!.skipResponseValidation),
    skip_validation: cdktf.booleanToTerraform(struct!.skipValidation),
    response_validation_mode_active: httpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeResponseValidationModeActiveToTerraform(struct!.responseValidationModeActive),
    validation_mode_active: httpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeValidationModeActiveToTerraform(struct!.validationModeActive),
  }
}


export function httpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeToHclTerraform(struct?: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeOutputReference | HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    skip_response_validation: {
      value: cdktf.booleanToHclTerraform(struct!.skipResponseValidation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    skip_validation: {
      value: cdktf.booleanToHclTerraform(struct!.skipValidation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    response_validation_mode_active: {
      value: httpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeResponseValidationModeActiveToHclTerraform(struct!.responseValidationModeActive),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeResponseValidationModeActiveList",
    },
    validation_mode_active: {
      value: httpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeValidationModeActiveToHclTerraform(struct!.validationModeActive),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeValidationModeActiveList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationMode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._skipResponseValidation !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipResponseValidation = this._skipResponseValidation;
    }
    if (this._skipValidation !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipValidation = this._skipValidation;
    }
    if (this._responseValidationModeActive?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseValidationModeActive = this._responseValidationModeActive?.internalValue;
    }
    if (this._validationModeActive?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationModeActive = this._validationModeActive?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationMode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._skipResponseValidation = undefined;
      this._skipValidation = undefined;
      this._responseValidationModeActive.internalValue = undefined;
      this._validationModeActive.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._skipResponseValidation = value.skipResponseValidation;
      this._skipValidation = value.skipValidation;
      this._responseValidationModeActive.internalValue = value.responseValidationModeActive;
      this._validationModeActive.internalValue = value.validationModeActive;
    }
  }

  // skip_response_validation - computed: false, optional: true, required: false
  private _skipResponseValidation?: boolean | cdktf.IResolvable; 
  public get skipResponseValidation() {
    return this.getBooleanAttribute('skip_response_validation');
  }
  public set skipResponseValidation(value: boolean | cdktf.IResolvable) {
    this._skipResponseValidation = value;
  }
  public resetSkipResponseValidation() {
    this._skipResponseValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipResponseValidationInput() {
    return this._skipResponseValidation;
  }

  // skip_validation - computed: false, optional: true, required: false
  private _skipValidation?: boolean | cdktf.IResolvable; 
  public get skipValidation() {
    return this.getBooleanAttribute('skip_validation');
  }
  public set skipValidation(value: boolean | cdktf.IResolvable) {
    this._skipValidation = value;
  }
  public resetSkipValidation() {
    this._skipValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipValidationInput() {
    return this._skipValidation;
  }

  // response_validation_mode_active - computed: false, optional: true, required: false
  private _responseValidationModeActive = new HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeResponseValidationModeActiveOutputReference(this, "response_validation_mode_active");
  public get responseValidationModeActive() {
    return this._responseValidationModeActive;
  }
  public putResponseValidationModeActive(value: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeResponseValidationModeActive) {
    this._responseValidationModeActive.internalValue = value;
  }
  public resetResponseValidationModeActive() {
    this._responseValidationModeActive.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseValidationModeActiveInput() {
    return this._responseValidationModeActive.internalValue;
  }

  // validation_mode_active - computed: false, optional: true, required: false
  private _validationModeActive = new HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeValidationModeActiveOutputReference(this, "validation_mode_active");
  public get validationModeActive() {
    return this._validationModeActive;
  }
  public putValidationModeActive(value: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeValidationModeActive) {
    this._validationModeActive.internalValue = value;
  }
  public resetValidationModeActive() {
    this._validationModeActive.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationModeActiveInput() {
    return this._validationModeActive.internalValue;
  }
}
export interface HttpLoadbalancerApiSpecificationValidationAllSpecEndpoints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#oversized_body_fail_validation HttpLoadbalancer#oversized_body_fail_validation}
  */
  readonly oversizedBodyFailValidation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#oversized_body_skip_validation HttpLoadbalancer#oversized_body_skip_validation}
  */
  readonly oversizedBodySkipValidation?: boolean | cdktf.IResolvable;
  /**
  * fall_through_mode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#fall_through_mode HttpLoadbalancer#fall_through_mode}
  */
  readonly fallThroughMode: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughMode;
  /**
  * settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#settings HttpLoadbalancer#settings}
  */
  readonly settings?: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettings;
  /**
  * validation_mode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#validation_mode HttpLoadbalancer#validation_mode}
  */
  readonly validationMode: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationMode;
}

export function httpLoadbalancerApiSpecificationValidationAllSpecEndpointsToTerraform(struct?: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsOutputReference | HttpLoadbalancerApiSpecificationValidationAllSpecEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oversized_body_fail_validation: cdktf.booleanToTerraform(struct!.oversizedBodyFailValidation),
    oversized_body_skip_validation: cdktf.booleanToTerraform(struct!.oversizedBodySkipValidation),
    fall_through_mode: httpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeToTerraform(struct!.fallThroughMode),
    settings: httpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsToTerraform(struct!.settings),
    validation_mode: httpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeToTerraform(struct!.validationMode),
  }
}


export function httpLoadbalancerApiSpecificationValidationAllSpecEndpointsToHclTerraform(struct?: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsOutputReference | HttpLoadbalancerApiSpecificationValidationAllSpecEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oversized_body_fail_validation: {
      value: cdktf.booleanToHclTerraform(struct!.oversizedBodyFailValidation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    oversized_body_skip_validation: {
      value: cdktf.booleanToHclTerraform(struct!.oversizedBodySkipValidation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fall_through_mode: {
      value: httpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeToHclTerraform(struct!.fallThroughMode),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeList",
    },
    settings: {
      value: httpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsToHclTerraform(struct!.settings),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsList",
    },
    validation_mode: {
      value: httpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeToHclTerraform(struct!.validationMode),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiSpecificationValidationAllSpecEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oversizedBodyFailValidation !== undefined) {
      hasAnyValues = true;
      internalValueResult.oversizedBodyFailValidation = this._oversizedBodyFailValidation;
    }
    if (this._oversizedBodySkipValidation !== undefined) {
      hasAnyValues = true;
      internalValueResult.oversizedBodySkipValidation = this._oversizedBodySkipValidation;
    }
    if (this._fallThroughMode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallThroughMode = this._fallThroughMode?.internalValue;
    }
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    if (this._validationMode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationMode = this._validationMode?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiSpecificationValidationAllSpecEndpoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oversizedBodyFailValidation = undefined;
      this._oversizedBodySkipValidation = undefined;
      this._fallThroughMode.internalValue = undefined;
      this._settings.internalValue = undefined;
      this._validationMode.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oversizedBodyFailValidation = value.oversizedBodyFailValidation;
      this._oversizedBodySkipValidation = value.oversizedBodySkipValidation;
      this._fallThroughMode.internalValue = value.fallThroughMode;
      this._settings.internalValue = value.settings;
      this._validationMode.internalValue = value.validationMode;
    }
  }

  // oversized_body_fail_validation - computed: false, optional: true, required: false
  private _oversizedBodyFailValidation?: boolean | cdktf.IResolvable; 
  public get oversizedBodyFailValidation() {
    return this.getBooleanAttribute('oversized_body_fail_validation');
  }
  public set oversizedBodyFailValidation(value: boolean | cdktf.IResolvable) {
    this._oversizedBodyFailValidation = value;
  }
  public resetOversizedBodyFailValidation() {
    this._oversizedBodyFailValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oversizedBodyFailValidationInput() {
    return this._oversizedBodyFailValidation;
  }

  // oversized_body_skip_validation - computed: false, optional: true, required: false
  private _oversizedBodySkipValidation?: boolean | cdktf.IResolvable; 
  public get oversizedBodySkipValidation() {
    return this.getBooleanAttribute('oversized_body_skip_validation');
  }
  public set oversizedBodySkipValidation(value: boolean | cdktf.IResolvable) {
    this._oversizedBodySkipValidation = value;
  }
  public resetOversizedBodySkipValidation() {
    this._oversizedBodySkipValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oversizedBodySkipValidationInput() {
    return this._oversizedBodySkipValidation;
  }

  // fall_through_mode - computed: false, optional: false, required: true
  private _fallThroughMode = new HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeOutputReference(this, "fall_through_mode");
  public get fallThroughMode() {
    return this._fallThroughMode;
  }
  public putFallThroughMode(value: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughMode) {
    this._fallThroughMode.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fallThroughModeInput() {
    return this._fallThroughMode.internalValue;
  }

  // settings - computed: false, optional: true, required: false
  private _settings = new HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }

  // validation_mode - computed: false, optional: false, required: true
  private _validationMode = new HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeOutputReference(this, "validation_mode");
  public get validationMode() {
    return this._validationMode;
  }
  public putValidationMode(value: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationMode) {
    this._validationMode.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get validationModeInput() {
    return this._validationMode.internalValue;
  }
}
export interface HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#methods HttpLoadbalancer#methods}
  */
  readonly methods?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#path HttpLoadbalancer#path}
  */
  readonly path: string;
}

export function httpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpointToTerraform(struct?: HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpointOutputReference | HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.methods),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function httpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpointToHclTerraform(struct?: HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpointOutputReference | HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.methods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._methods !== undefined) {
      hasAnyValues = true;
      internalValueResult.methods = this._methods;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._methods = undefined;
      this._path = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._methods = value.methods;
      this._path = value.path;
    }
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

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#description HttpLoadbalancer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#disable HttpLoadbalancer#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
}

export function httpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadataToTerraform(struct?: HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadataOutputReference | HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadata): any {
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


export function httpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadataToHclTerraform(struct?: HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadataOutputReference | HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadata): any {
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

export class HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadata | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadata | undefined) {
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
export interface HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#action_block HttpLoadbalancer#action_block}
  */
  readonly actionBlock?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#action_report HttpLoadbalancer#action_report}
  */
  readonly actionReport?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#action_skip HttpLoadbalancer#action_skip}
  */
  readonly actionSkip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#api_group HttpLoadbalancer#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#base_path HttpLoadbalancer#base_path}
  */
  readonly basePath?: string;
  /**
  * api_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#api_endpoint HttpLoadbalancer#api_endpoint}
  */
  readonly apiEndpoint?: HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpoint;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#metadata HttpLoadbalancer#metadata}
  */
  readonly metadata: HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadata;
}

export function httpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesToTerraform(struct?: HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_block: cdktf.booleanToTerraform(struct!.actionBlock),
    action_report: cdktf.booleanToTerraform(struct!.actionReport),
    action_skip: cdktf.booleanToTerraform(struct!.actionSkip),
    api_group: cdktf.stringToTerraform(struct!.apiGroup),
    base_path: cdktf.stringToTerraform(struct!.basePath),
    api_endpoint: httpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpointToTerraform(struct!.apiEndpoint),
    metadata: httpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadataToTerraform(struct!.metadata),
  }
}


export function httpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesToHclTerraform(struct?: HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_block: {
      value: cdktf.booleanToHclTerraform(struct!.actionBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    action_report: {
      value: cdktf.booleanToHclTerraform(struct!.actionReport),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    action_skip: {
      value: cdktf.booleanToHclTerraform(struct!.actionSkip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    api_group: {
      value: cdktf.stringToHclTerraform(struct!.apiGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    base_path: {
      value: cdktf.stringToHclTerraform(struct!.basePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_endpoint: {
      value: httpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpointToHclTerraform(struct!.apiEndpoint),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpointList",
    },
    metadata: {
      value: httpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionBlock = this._actionBlock;
    }
    if (this._actionReport !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionReport = this._actionReport;
    }
    if (this._actionSkip !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionSkip = this._actionSkip;
    }
    if (this._apiGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroup = this._apiGroup;
    }
    if (this._basePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.basePath = this._basePath;
    }
    if (this._apiEndpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiEndpoint = this._apiEndpoint?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionBlock = undefined;
      this._actionReport = undefined;
      this._actionSkip = undefined;
      this._apiGroup = undefined;
      this._basePath = undefined;
      this._apiEndpoint.internalValue = undefined;
      this._metadata.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionBlock = value.actionBlock;
      this._actionReport = value.actionReport;
      this._actionSkip = value.actionSkip;
      this._apiGroup = value.apiGroup;
      this._basePath = value.basePath;
      this._apiEndpoint.internalValue = value.apiEndpoint;
      this._metadata.internalValue = value.metadata;
    }
  }

  // action_block - computed: false, optional: true, required: false
  private _actionBlock?: boolean | cdktf.IResolvable; 
  public get actionBlock() {
    return this.getBooleanAttribute('action_block');
  }
  public set actionBlock(value: boolean | cdktf.IResolvable) {
    this._actionBlock = value;
  }
  public resetActionBlock() {
    this._actionBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionBlockInput() {
    return this._actionBlock;
  }

  // action_report - computed: false, optional: true, required: false
  private _actionReport?: boolean | cdktf.IResolvable; 
  public get actionReport() {
    return this.getBooleanAttribute('action_report');
  }
  public set actionReport(value: boolean | cdktf.IResolvable) {
    this._actionReport = value;
  }
  public resetActionReport() {
    this._actionReport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionReportInput() {
    return this._actionReport;
  }

  // action_skip - computed: false, optional: true, required: false
  private _actionSkip?: boolean | cdktf.IResolvable; 
  public get actionSkip() {
    return this.getBooleanAttribute('action_skip');
  }
  public set actionSkip(value: boolean | cdktf.IResolvable) {
    this._actionSkip = value;
  }
  public resetActionSkip() {
    this._actionSkip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionSkipInput() {
    return this._actionSkip;
  }

  // api_group - computed: false, optional: true, required: false
  private _apiGroup?: string; 
  public get apiGroup() {
    return this.getStringAttribute('api_group');
  }
  public set apiGroup(value: string) {
    this._apiGroup = value;
  }
  public resetApiGroup() {
    this._apiGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupInput() {
    return this._apiGroup;
  }

  // base_path - computed: false, optional: true, required: false
  private _basePath?: string; 
  public get basePath() {
    return this.getStringAttribute('base_path');
  }
  public set basePath(value: string) {
    this._basePath = value;
  }
  public resetBasePath() {
    this._basePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basePathInput() {
    return this._basePath;
  }

  // api_endpoint - computed: false, optional: true, required: false
  private _apiEndpoint = new HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpointOutputReference(this, "api_endpoint");
  public get apiEndpoint() {
    return this._apiEndpoint;
  }
  public putApiEndpoint(value: HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpoint) {
    this._apiEndpoint.internalValue = value;
  }
  public resetApiEndpoint() {
    this._apiEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiEndpointInput() {
    return this._apiEndpoint.internalValue;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }
}

export class HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRules[] | cdktf.IResolvable

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
  public get(index: number): HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesOutputReference {
    return new HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustom {
  /**
  * open_api_validation_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#open_api_validation_rules HttpLoadbalancer#open_api_validation_rules}
  */
  readonly openApiValidationRules: HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRules[] | cdktf.IResolvable;
}

export function httpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomToTerraform(struct?: HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOutputReference | HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    open_api_validation_rules: cdktf.listMapper(httpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesToTerraform, true)(struct!.openApiValidationRules),
  }
}


export function httpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomToHclTerraform(struct?: HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOutputReference | HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    open_api_validation_rules: {
      value: cdktf.listMapperHcl(httpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesToHclTerraform, true)(struct!.openApiValidationRules),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._openApiValidationRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.openApiValidationRules = this._openApiValidationRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._openApiValidationRules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._openApiValidationRules.internalValue = value.openApiValidationRules;
    }
  }

  // open_api_validation_rules - computed: false, optional: false, required: true
  private _openApiValidationRules = new HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesList(this, "open_api_validation_rules", false);
  public get openApiValidationRules() {
    return this._openApiValidationRules;
  }
  public putOpenApiValidationRules(value: HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRules[] | cdktf.IResolvable) {
    this._openApiValidationRules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get openApiValidationRulesInput() {
    return this._openApiValidationRules.internalValue;
  }
}
