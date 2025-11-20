import * as cdktf from 'cdktf';
import { CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsItem,
cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsItemToTerraform,
cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsItemToHclTerraform,
CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsItemOutputReference,
CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchers,
cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersToTerraform,
cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersToHclTerraform,
CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersList,
CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeaders,
cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersToTerraform,
cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersToHclTerraform,
CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersList,
CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaims,
cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsToTerraform,
cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsToHclTerraform,
CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsList,
CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiEndpoint,
cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiEndpointToTerraform,
cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiEndpointToHclTerraform,
CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiEndpointOutputReference,
CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiGroups,
cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiGroupsToTerraform,
cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiGroupsToHclTerraform,
CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiGroupsOutputReference,
CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcher,
cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherToTerraform,
cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherToHclTerraform,
CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherOutputReference,
CdnLoadbalancerApiRateLimitApiEndpointRules,
cdnLoadbalancerApiRateLimitApiEndpointRulesToTerraform,
cdnLoadbalancerApiRateLimitApiEndpointRulesToHclTerraform,
CdnLoadbalancerApiRateLimitApiEndpointRulesList } from './structs0'
export interface CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#check_not_present CdnLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#check_present CdnLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#invert_matcher CdnLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#key CdnLoadbalancer#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#presence CdnLoadbalancer#presence}
  */
  readonly presence?: boolean | cdktf.IResolvable;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#item CdnLoadbalancer#item}
  */
  readonly item?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsItem;
}

export function cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsToTerraform(struct?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParams | cdktf.IResolvable): any {
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
    item: cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsItemToTerraform(struct!.item),
  }
}


export function cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsToHclTerraform(struct?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParams | cdktf.IResolvable): any {
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
      value: cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParams | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParams | cdktf.IResolvable | undefined) {
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
  private _item = new CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsItem) {
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

export class CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParams[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsOutputReference {
    return new CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcher {
  /**
  * cookie_matchers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#cookie_matchers CdnLoadbalancer#cookie_matchers}
  */
  readonly cookieMatchers?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchers[] | cdktf.IResolvable;
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#headers CdnLoadbalancer#headers}
  */
  readonly headers?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeaders[] | cdktf.IResolvable;
  /**
  * jwt_claims block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#jwt_claims CdnLoadbalancer#jwt_claims}
  */
  readonly jwtClaims?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaims[] | cdktf.IResolvable;
  /**
  * query_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#query_params CdnLoadbalancer#query_params}
  */
  readonly queryParams?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParams[] | cdktf.IResolvable;
}

export function cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherToTerraform(struct?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherOutputReference | CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie_matchers: cdktf.listMapper(cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersToTerraform, true)(struct!.cookieMatchers),
    headers: cdktf.listMapper(cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersToTerraform, true)(struct!.headers),
    jwt_claims: cdktf.listMapper(cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsToTerraform, true)(struct!.jwtClaims),
    query_params: cdktf.listMapper(cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsToTerraform, true)(struct!.queryParams),
  }
}


export function cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherToHclTerraform(struct?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherOutputReference | CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie_matchers: {
      value: cdktf.listMapperHcl(cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersToHclTerraform, true)(struct!.cookieMatchers),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersList",
    },
    headers: {
      value: cdktf.listMapperHcl(cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersList",
    },
    jwt_claims: {
      value: cdktf.listMapperHcl(cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsToHclTerraform, true)(struct!.jwtClaims),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsList",
    },
    query_params: {
      value: cdktf.listMapperHcl(cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsToHclTerraform, true)(struct!.queryParams),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcher | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcher | undefined) {
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
  private _cookieMatchers = new CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersList(this, "cookie_matchers", false);
  public get cookieMatchers() {
    return this._cookieMatchers;
  }
  public putCookieMatchers(value: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchers[] | cdktf.IResolvable) {
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
  private _headers = new CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeaders[] | cdktf.IResolvable) {
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
  private _jwtClaims = new CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsList(this, "jwt_claims", false);
  public get jwtClaims() {
    return this._jwtClaims;
  }
  public putJwtClaims(value: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaims[] | cdktf.IResolvable) {
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
  private _queryParams = new CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsList(this, "query_params", false);
  public get queryParams() {
    return this._queryParams;
  }
  public putQueryParams(value: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParams[] | cdktf.IResolvable) {
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
export interface CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#any_domain CdnLoadbalancer#any_domain}
  */
  readonly anyDomain?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#any_url CdnLoadbalancer#any_url}
  */
  readonly anyUrl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#base_path CdnLoadbalancer#base_path}
  */
  readonly basePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#specific_domain CdnLoadbalancer#specific_domain}
  */
  readonly specificDomain?: string;
  /**
  * api_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#api_endpoint CdnLoadbalancer#api_endpoint}
  */
  readonly apiEndpoint: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiEndpoint;
  /**
  * api_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#api_groups CdnLoadbalancer#api_groups}
  */
  readonly apiGroups?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiGroups;
  /**
  * client_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#client_matcher CdnLoadbalancer#client_matcher}
  */
  readonly clientMatcher?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcher;
  /**
  * request_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#request_matcher CdnLoadbalancer#request_matcher}
  */
  readonly requestMatcher?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcher;
}

export function cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesToTerraform(struct?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_domain: cdktf.booleanToTerraform(struct!.anyDomain),
    any_url: cdktf.booleanToTerraform(struct!.anyUrl),
    base_path: cdktf.stringToTerraform(struct!.basePath),
    specific_domain: cdktf.stringToTerraform(struct!.specificDomain),
    api_endpoint: cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiEndpointToTerraform(struct!.apiEndpoint),
    api_groups: cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiGroupsToTerraform(struct!.apiGroups),
    client_matcher: cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherToTerraform(struct!.clientMatcher),
    request_matcher: cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherToTerraform(struct!.requestMatcher),
  }
}


export function cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesToHclTerraform(struct?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRules | cdktf.IResolvable): any {
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
      value: cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiEndpointToHclTerraform(struct!.apiEndpoint),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiEndpointList",
    },
    api_groups: {
      value: cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiGroupsToHclTerraform(struct!.apiGroups),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiGroupsList",
    },
    client_matcher: {
      value: cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherToHclTerraform(struct!.clientMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherList",
    },
    request_matcher: {
      value: cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherToHclTerraform(struct!.requestMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRules | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRules | cdktf.IResolvable | undefined) {
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
  private _apiEndpoint = new CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiEndpointOutputReference(this, "api_endpoint");
  public get apiEndpoint() {
    return this._apiEndpoint;
  }
  public putApiEndpoint(value: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiEndpoint) {
    this._apiEndpoint.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiEndpointInput() {
    return this._apiEndpoint.internalValue;
  }

  // api_groups - computed: false, optional: true, required: false
  private _apiGroups = new CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiGroupsOutputReference(this, "api_groups");
  public get apiGroups() {
    return this._apiGroups;
  }
  public putApiGroups(value: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiGroups) {
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
  private _clientMatcher = new CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherOutputReference(this, "client_matcher");
  public get clientMatcher() {
    return this._clientMatcher;
  }
  public putClientMatcher(value: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcher) {
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
  private _requestMatcher = new CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherOutputReference(this, "request_matcher");
  public get requestMatcher() {
    return this._requestMatcher;
  }
  public putRequestMatcher(value: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcher) {
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

export class CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRules[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesOutputReference {
    return new CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerApiRateLimitBypassRateLimitingRules {
  /**
  * bypass_rate_limiting_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#bypass_rate_limiting_rules CdnLoadbalancer#bypass_rate_limiting_rules}
  */
  readonly bypassRateLimitingRules?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRules[] | cdktf.IResolvable;
}

export function cdnLoadbalancerApiRateLimitBypassRateLimitingRulesToTerraform(struct?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesOutputReference | CdnLoadbalancerApiRateLimitBypassRateLimitingRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bypass_rate_limiting_rules: cdktf.listMapper(cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesToTerraform, true)(struct!.bypassRateLimitingRules),
  }
}


export function cdnLoadbalancerApiRateLimitBypassRateLimitingRulesToHclTerraform(struct?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesOutputReference | CdnLoadbalancerApiRateLimitBypassRateLimitingRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bypass_rate_limiting_rules: {
      value: cdktf.listMapperHcl(cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesToHclTerraform, true)(struct!.bypassRateLimitingRules),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiRateLimitBypassRateLimitingRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiRateLimitBypassRateLimitingRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bypassRateLimitingRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassRateLimitingRules = this._bypassRateLimitingRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiRateLimitBypassRateLimitingRules | undefined) {
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
  private _bypassRateLimitingRules = new CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesList(this, "bypass_rate_limiting_rules", false);
  public get bypassRateLimitingRules() {
    return this._bypassRateLimitingRules;
  }
  public putBypassRateLimitingRules(value: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRules[] | cdktf.IResolvable) {
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
export interface CdnLoadbalancerApiRateLimitCustomIpAllowedListRateLimiterAllowedPrefixes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#namespace CdnLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#tenant CdnLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function cdnLoadbalancerApiRateLimitCustomIpAllowedListRateLimiterAllowedPrefixesToTerraform(struct?: CdnLoadbalancerApiRateLimitCustomIpAllowedListRateLimiterAllowedPrefixes | cdktf.IResolvable): any {
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


export function cdnLoadbalancerApiRateLimitCustomIpAllowedListRateLimiterAllowedPrefixesToHclTerraform(struct?: CdnLoadbalancerApiRateLimitCustomIpAllowedListRateLimiterAllowedPrefixes | cdktf.IResolvable): any {
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

export class CdnLoadbalancerApiRateLimitCustomIpAllowedListRateLimiterAllowedPrefixesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerApiRateLimitCustomIpAllowedListRateLimiterAllowedPrefixes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiRateLimitCustomIpAllowedListRateLimiterAllowedPrefixes | cdktf.IResolvable | undefined) {
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

export class CdnLoadbalancerApiRateLimitCustomIpAllowedListRateLimiterAllowedPrefixesList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerApiRateLimitCustomIpAllowedListRateLimiterAllowedPrefixes[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerApiRateLimitCustomIpAllowedListRateLimiterAllowedPrefixesOutputReference {
    return new CdnLoadbalancerApiRateLimitCustomIpAllowedListRateLimiterAllowedPrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerApiRateLimitCustomIpAllowedListStruct {
  /**
  * rate_limiter_allowed_prefixes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#rate_limiter_allowed_prefixes CdnLoadbalancer#rate_limiter_allowed_prefixes}
  */
  readonly rateLimiterAllowedPrefixes: CdnLoadbalancerApiRateLimitCustomIpAllowedListRateLimiterAllowedPrefixes[] | cdktf.IResolvable;
}

export function cdnLoadbalancerApiRateLimitCustomIpAllowedListStructToTerraform(struct?: CdnLoadbalancerApiRateLimitCustomIpAllowedListStructOutputReference | CdnLoadbalancerApiRateLimitCustomIpAllowedListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rate_limiter_allowed_prefixes: cdktf.listMapper(cdnLoadbalancerApiRateLimitCustomIpAllowedListRateLimiterAllowedPrefixesToTerraform, true)(struct!.rateLimiterAllowedPrefixes),
  }
}


export function cdnLoadbalancerApiRateLimitCustomIpAllowedListStructToHclTerraform(struct?: CdnLoadbalancerApiRateLimitCustomIpAllowedListStructOutputReference | CdnLoadbalancerApiRateLimitCustomIpAllowedListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rate_limiter_allowed_prefixes: {
      value: cdktf.listMapperHcl(cdnLoadbalancerApiRateLimitCustomIpAllowedListRateLimiterAllowedPrefixesToHclTerraform, true)(struct!.rateLimiterAllowedPrefixes),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitCustomIpAllowedListRateLimiterAllowedPrefixesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiRateLimitCustomIpAllowedListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiRateLimitCustomIpAllowedListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rateLimiterAllowedPrefixes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimiterAllowedPrefixes = this._rateLimiterAllowedPrefixes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiRateLimitCustomIpAllowedListStruct | undefined) {
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
  private _rateLimiterAllowedPrefixes = new CdnLoadbalancerApiRateLimitCustomIpAllowedListRateLimiterAllowedPrefixesList(this, "rate_limiter_allowed_prefixes", false);
  public get rateLimiterAllowedPrefixes() {
    return this._rateLimiterAllowedPrefixes;
  }
  public putRateLimiterAllowedPrefixes(value: CdnLoadbalancerApiRateLimitCustomIpAllowedListRateLimiterAllowedPrefixes[] | cdktf.IResolvable) {
    this._rateLimiterAllowedPrefixes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimiterAllowedPrefixesInput() {
    return this._rateLimiterAllowedPrefixes.internalValue;
  }
}
export interface CdnLoadbalancerApiRateLimitIpAllowedListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#ipv6_prefixes CdnLoadbalancer#ipv6_prefixes}
  */
  readonly ipv6Prefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#prefixes CdnLoadbalancer#prefixes}
  */
  readonly prefixes?: string[];
}

export function cdnLoadbalancerApiRateLimitIpAllowedListStructToTerraform(struct?: CdnLoadbalancerApiRateLimitIpAllowedListStructOutputReference | CdnLoadbalancerApiRateLimitIpAllowedListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv6Prefixes),
    prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefixes),
  }
}


export function cdnLoadbalancerApiRateLimitIpAllowedListStructToHclTerraform(struct?: CdnLoadbalancerApiRateLimitIpAllowedListStructOutputReference | CdnLoadbalancerApiRateLimitIpAllowedListStruct): any {
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

export class CdnLoadbalancerApiRateLimitIpAllowedListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiRateLimitIpAllowedListStruct | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiRateLimitIpAllowedListStruct | undefined) {
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
export interface CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#as_numbers CdnLoadbalancer#as_numbers}
  */
  readonly asNumbers: number[];
}

export function cdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnListStructToTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnListStructOutputReference | CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_numbers: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.asNumbers),
  }
}


export function cdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnListStructToHclTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnListStructOutputReference | CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnListStruct): any {
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

export class CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asNumbers !== undefined) {
      hasAnyValues = true;
      internalValueResult.asNumbers = this._asNumbers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnListStruct | undefined) {
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
export interface CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#namespace CdnLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#tenant CdnLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function cdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSetsToTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSets | cdktf.IResolvable): any {
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


export function cdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSetsToHclTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSets | cdktf.IResolvable): any {
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

export class CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSets | cdktf.IResolvable | undefined) {
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

export class CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSetsList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSets[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSetsOutputReference {
    return new CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcher {
  /**
  * asn_sets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#asn_sets CdnLoadbalancer#asn_sets}
  */
  readonly asnSets: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSets[] | cdktf.IResolvable;
}

export function cdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherToTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherOutputReference | CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asn_sets: cdktf.listMapper(cdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSetsToTerraform, true)(struct!.asnSets),
  }
}


export function cdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherToHclTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherOutputReference | CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asn_sets: {
      value: cdktf.listMapperHcl(cdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSetsToHclTerraform, true)(struct!.asnSets),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asnSets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnSets = this._asnSets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcher | undefined) {
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
  private _asnSets = new CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSetsList(this, "asn_sets", false);
  public get asnSets() {
    return this._asnSets;
  }
  public putAsnSets(value: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSets[] | cdktf.IResolvable) {
    this._asnSets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asnSetsInput() {
    return this._asnSets.internalValue;
  }
}
export interface CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherClientSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#expressions CdnLoadbalancer#expressions}
  */
  readonly expressions: string[];
}

export function cdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherClientSelectorToTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherClientSelectorOutputReference | CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherClientSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expressions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.expressions),
  }
}


export function cdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherClientSelectorToHclTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherClientSelectorOutputReference | CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherClientSelector): any {
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

export class CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherClientSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherClientSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expressions !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressions = this._expressions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherClientSelector | undefined) {
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
export interface CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#namespace CdnLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#tenant CdnLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function cdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSetsToTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSets | cdktf.IResolvable): any {
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


export function cdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSetsToHclTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSets | cdktf.IResolvable): any {
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

export class CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSets | cdktf.IResolvable | undefined) {
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

export class CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSetsList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSets[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSetsOutputReference {
    return new CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#invert_matcher CdnLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * prefix_sets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#prefix_sets CdnLoadbalancer#prefix_sets}
  */
  readonly prefixSets: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSets[] | cdktf.IResolvable;
}

export function cdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherToTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherOutputReference | CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    prefix_sets: cdktf.listMapper(cdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSetsToTerraform, true)(struct!.prefixSets),
  }
}


export function cdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherToHclTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherOutputReference | CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcher): any {
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
      value: cdktf.listMapperHcl(cdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSetsToHclTerraform, true)(struct!.prefixSets),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcher | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcher | undefined) {
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
  private _prefixSets = new CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSetsList(this, "prefix_sets", false);
  public get prefixSets() {
    return this._prefixSets;
  }
  public putPrefixSets(value: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSets[] | cdktf.IResolvable) {
    this._prefixSets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixSetsInput() {
    return this._prefixSets.internalValue;
  }
}
export interface CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpPrefixListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#invert_match CdnLoadbalancer#invert_match}
  */
  readonly invertMatch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#ip_prefixes CdnLoadbalancer#ip_prefixes}
  */
  readonly ipPrefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#ipv6_prefixes CdnLoadbalancer#ipv6_prefixes}
  */
  readonly ipv6Prefixes?: string[];
}

export function cdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpPrefixListStructToTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpPrefixListStructOutputReference | CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpPrefixListStruct): any {
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


export function cdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpPrefixListStructToHclTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpPrefixListStructOutputReference | CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpPrefixListStruct): any {
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

export class CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpPrefixListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpPrefixListStruct | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpPrefixListStruct | undefined) {
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
export interface CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpThreatCategoryListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#ip_threat_categories CdnLoadbalancer#ip_threat_categories}
  */
  readonly ipThreatCategories: string[];
}

export function cdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpThreatCategoryListStructToTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpThreatCategoryListStructOutputReference | CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpThreatCategoryListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_threat_categories: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipThreatCategories),
  }
}


export function cdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpThreatCategoryListStructToHclTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpThreatCategoryListStructOutputReference | CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpThreatCategoryListStruct): any {
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

export class CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpThreatCategoryListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpThreatCategoryListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipThreatCategories !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipThreatCategories = this._ipThreatCategories;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpThreatCategoryListStruct | undefined) {
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
export interface CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherTlsFingerprintMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#classes CdnLoadbalancer#classes}
  */
  readonly classes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#exact_values CdnLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#excluded_values CdnLoadbalancer#excluded_values}
  */
  readonly excludedValues?: string[];
}

export function cdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherTlsFingerprintMatcherToTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherTlsFingerprintMatcherOutputReference | CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherTlsFingerprintMatcher): any {
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


export function cdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherTlsFingerprintMatcherToHclTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherTlsFingerprintMatcherOutputReference | CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherTlsFingerprintMatcher): any {
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

export class CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherTlsFingerprintMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherTlsFingerprintMatcher | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherTlsFingerprintMatcher | undefined) {
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
export interface CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#any_client CdnLoadbalancer#any_client}
  */
  readonly anyClient?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#any_ip CdnLoadbalancer#any_ip}
  */
  readonly anyIp?: boolean | cdktf.IResolvable;
  /**
  * asn_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#asn_list CdnLoadbalancer#asn_list}
  */
  readonly asnList?: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnListStruct;
  /**
  * asn_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#asn_matcher CdnLoadbalancer#asn_matcher}
  */
  readonly asnMatcher?: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcher;
  /**
  * client_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#client_selector CdnLoadbalancer#client_selector}
  */
  readonly clientSelector?: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherClientSelector;
  /**
  * ip_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#ip_matcher CdnLoadbalancer#ip_matcher}
  */
  readonly ipMatcher?: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcher;
  /**
  * ip_prefix_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#ip_prefix_list CdnLoadbalancer#ip_prefix_list}
  */
  readonly ipPrefixList?: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpPrefixListStruct;
  /**
  * ip_threat_category_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#ip_threat_category_list CdnLoadbalancer#ip_threat_category_list}
  */
  readonly ipThreatCategoryList?: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpThreatCategoryListStruct;
  /**
  * tls_fingerprint_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#tls_fingerprint_matcher CdnLoadbalancer#tls_fingerprint_matcher}
  */
  readonly tlsFingerprintMatcher?: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherTlsFingerprintMatcher;
}

export function cdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherToTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherOutputReference | CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_client: cdktf.booleanToTerraform(struct!.anyClient),
    any_ip: cdktf.booleanToTerraform(struct!.anyIp),
    asn_list: cdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnListStructToTerraform(struct!.asnList),
    asn_matcher: cdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherToTerraform(struct!.asnMatcher),
    client_selector: cdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherClientSelectorToTerraform(struct!.clientSelector),
    ip_matcher: cdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherToTerraform(struct!.ipMatcher),
    ip_prefix_list: cdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpPrefixListStructToTerraform(struct!.ipPrefixList),
    ip_threat_category_list: cdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpThreatCategoryListStructToTerraform(struct!.ipThreatCategoryList),
    tls_fingerprint_matcher: cdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherTlsFingerprintMatcherToTerraform(struct!.tlsFingerprintMatcher),
  }
}


export function cdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherToHclTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherOutputReference | CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcher): any {
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
      value: cdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnListStructToHclTerraform(struct!.asnList),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnListStructList",
    },
    asn_matcher: {
      value: cdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherToHclTerraform(struct!.asnMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherList",
    },
    client_selector: {
      value: cdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherClientSelectorToHclTerraform(struct!.clientSelector),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherClientSelectorList",
    },
    ip_matcher: {
      value: cdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherToHclTerraform(struct!.ipMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherList",
    },
    ip_prefix_list: {
      value: cdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpPrefixListStructToHclTerraform(struct!.ipPrefixList),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpPrefixListStructList",
    },
    ip_threat_category_list: {
      value: cdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpThreatCategoryListStructToHclTerraform(struct!.ipThreatCategoryList),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpThreatCategoryListStructList",
    },
    tls_fingerprint_matcher: {
      value: cdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherTlsFingerprintMatcherToHclTerraform(struct!.tlsFingerprintMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherTlsFingerprintMatcherList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcher | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcher | undefined) {
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
  private _asnList = new CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnListStructOutputReference(this, "asn_list");
  public get asnList() {
    return this._asnList;
  }
  public putAsnList(value: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnListStruct) {
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
  private _asnMatcher = new CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherOutputReference(this, "asn_matcher");
  public get asnMatcher() {
    return this._asnMatcher;
  }
  public putAsnMatcher(value: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcher) {
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
  private _clientSelector = new CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherClientSelectorOutputReference(this, "client_selector");
  public get clientSelector() {
    return this._clientSelector;
  }
  public putClientSelector(value: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherClientSelector) {
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
  private _ipMatcher = new CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherOutputReference(this, "ip_matcher");
  public get ipMatcher() {
    return this._ipMatcher;
  }
  public putIpMatcher(value: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcher) {
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
  private _ipPrefixList = new CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpPrefixListStructOutputReference(this, "ip_prefix_list");
  public get ipPrefixList() {
    return this._ipPrefixList;
  }
  public putIpPrefixList(value: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpPrefixListStruct) {
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
  private _ipThreatCategoryList = new CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpThreatCategoryListStructOutputReference(this, "ip_threat_category_list");
  public get ipThreatCategoryList() {
    return this._ipThreatCategoryList;
  }
  public putIpThreatCategoryList(value: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpThreatCategoryListStruct) {
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
  private _tlsFingerprintMatcher = new CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherTlsFingerprintMatcherOutputReference(this, "tls_fingerprint_matcher");
  public get tlsFingerprintMatcher() {
    return this._tlsFingerprintMatcher;
  }
  public putTlsFingerprintMatcher(value: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherTlsFingerprintMatcher) {
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
export interface CdnLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterRefUserId {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#namespace CdnLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#tenant CdnLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function cdnLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterRefUserIdToTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterRefUserIdOutputReference | CdnLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterRefUserId): any {
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


export function cdnLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterRefUserIdToHclTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterRefUserIdOutputReference | CdnLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterRefUserId): any {
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

export class CdnLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterRefUserIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterRefUserId | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterRefUserId | undefined) {
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
export interface CdnLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#threshold CdnLoadbalancer#threshold}
  */
  readonly threshold: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#unit CdnLoadbalancer#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#use_http_lb_user_id CdnLoadbalancer#use_http_lb_user_id}
  */
  readonly useHttpLbUserId?: boolean | cdktf.IResolvable;
  /**
  * ref_user_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#ref_user_id CdnLoadbalancer#ref_user_id}
  */
  readonly refUserId?: CdnLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterRefUserId;
}

export function cdnLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterToTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterOutputReference | CdnLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    threshold: cdktf.numberToTerraform(struct!.threshold),
    unit: cdktf.stringToTerraform(struct!.unit),
    use_http_lb_user_id: cdktf.booleanToTerraform(struct!.useHttpLbUserId),
    ref_user_id: cdnLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterRefUserIdToTerraform(struct!.refUserId),
  }
}


export function cdnLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterToHclTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterOutputReference | CdnLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiter): any {
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
      value: cdnLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterRefUserIdToHclTerraform(struct!.refUserId),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterRefUserIdList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiter | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiter | undefined) {
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
  private _refUserId = new CdnLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterRefUserIdOutputReference(this, "ref_user_id");
  public get refUserId() {
    return this._refUserId;
  }
  public putRefUserId(value: CdnLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterRefUserId) {
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
export interface CdnLoadbalancerApiRateLimitServerUrlRulesRefRateLimiter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#namespace CdnLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#tenant CdnLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function cdnLoadbalancerApiRateLimitServerUrlRulesRefRateLimiterToTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesRefRateLimiterOutputReference | CdnLoadbalancerApiRateLimitServerUrlRulesRefRateLimiter): any {
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


export function cdnLoadbalancerApiRateLimitServerUrlRulesRefRateLimiterToHclTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesRefRateLimiterOutputReference | CdnLoadbalancerApiRateLimitServerUrlRulesRefRateLimiter): any {
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

export class CdnLoadbalancerApiRateLimitServerUrlRulesRefRateLimiterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiRateLimitServerUrlRulesRefRateLimiter | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiRateLimitServerUrlRulesRefRateLimiter | undefined) {
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
export interface CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#exact_values CdnLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#regex_values CdnLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#transformers CdnLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function cdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersItemToTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersItemOutputReference | CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersItem): any {
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


export function cdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersItemToHclTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersItemOutputReference | CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersItem): any {
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

export class CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersItem | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersItem | undefined) {
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
export interface CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#check_not_present CdnLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#check_present CdnLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#invert_matcher CdnLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#presence CdnLoadbalancer#presence}
  */
  readonly presence?: boolean | cdktf.IResolvable;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#item CdnLoadbalancer#item}
  */
  readonly item?: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersItem;
}

export function cdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersToTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchers | cdktf.IResolvable): any {
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
    item: cdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersItemToTerraform(struct!.item),
  }
}


export function cdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersToHclTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchers | cdktf.IResolvable): any {
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
      value: cdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchers | cdktf.IResolvable | undefined) {
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
  private _item = new CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersItem) {
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

export class CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchers[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersOutputReference {
    return new CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#exact_values CdnLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#regex_values CdnLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#transformers CdnLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function cdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersItemToTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersItemOutputReference | CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersItem): any {
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


export function cdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersItemToHclTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersItemOutputReference | CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersItem): any {
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

export class CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersItem | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersItem | undefined) {
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
export interface CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#check_not_present CdnLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#check_present CdnLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#invert_matcher CdnLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#presence CdnLoadbalancer#presence}
  */
  readonly presence?: boolean | cdktf.IResolvable;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#item CdnLoadbalancer#item}
  */
  readonly item?: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersItem;
}

export function cdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersToTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeaders | cdktf.IResolvable): any {
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
    item: cdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersItemToTerraform(struct!.item),
  }
}


export function cdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersToHclTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeaders | cdktf.IResolvable): any {
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
      value: cdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeaders | cdktf.IResolvable | undefined) {
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
  private _item = new CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersItem) {
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

export class CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeaders[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersOutputReference {
    return new CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#exact_values CdnLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#regex_values CdnLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#transformers CdnLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function cdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsItemToTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsItemOutputReference | CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsItem): any {
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


export function cdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsItemToHclTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsItemOutputReference | CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsItem): any {
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

export class CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsItem | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsItem | undefined) {
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
export interface CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaims {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#check_not_present CdnLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#check_present CdnLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#invert_matcher CdnLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#item CdnLoadbalancer#item}
  */
  readonly item?: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsItem;
}

export function cdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsToTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    name: cdktf.stringToTerraform(struct!.name),
    item: cdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsItemToTerraform(struct!.item),
  }
}


export function cdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsToHclTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaims | cdktf.IResolvable): any {
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
      value: cdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaims | cdktf.IResolvable | undefined) {
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
  private _item = new CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsItem) {
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

export class CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaims[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsOutputReference {
    return new CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#exact_values CdnLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#regex_values CdnLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#transformers CdnLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function cdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsItemToTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsItemOutputReference | CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsItem): any {
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


export function cdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsItemToHclTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsItemOutputReference | CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsItem): any {
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

export class CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsItem | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsItem | undefined) {
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
export interface CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#check_not_present CdnLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#check_present CdnLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#invert_matcher CdnLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#key CdnLoadbalancer#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#presence CdnLoadbalancer#presence}
  */
  readonly presence?: boolean | cdktf.IResolvable;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#item CdnLoadbalancer#item}
  */
  readonly item?: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsItem;
}

export function cdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsToTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParams | cdktf.IResolvable): any {
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
    item: cdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsItemToTerraform(struct!.item),
  }
}


export function cdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsToHclTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParams | cdktf.IResolvable): any {
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
      value: cdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParams | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParams | cdktf.IResolvable | undefined) {
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
  private _item = new CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsItem) {
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

export class CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParams[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsOutputReference {
    return new CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcher {
  /**
  * cookie_matchers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#cookie_matchers CdnLoadbalancer#cookie_matchers}
  */
  readonly cookieMatchers?: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchers[] | cdktf.IResolvable;
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#headers CdnLoadbalancer#headers}
  */
  readonly headers?: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeaders[] | cdktf.IResolvable;
  /**
  * jwt_claims block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#jwt_claims CdnLoadbalancer#jwt_claims}
  */
  readonly jwtClaims?: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaims[] | cdktf.IResolvable;
  /**
  * query_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#query_params CdnLoadbalancer#query_params}
  */
  readonly queryParams?: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParams[] | cdktf.IResolvable;
}

export function cdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherToTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherOutputReference | CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie_matchers: cdktf.listMapper(cdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersToTerraform, true)(struct!.cookieMatchers),
    headers: cdktf.listMapper(cdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersToTerraform, true)(struct!.headers),
    jwt_claims: cdktf.listMapper(cdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsToTerraform, true)(struct!.jwtClaims),
    query_params: cdktf.listMapper(cdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsToTerraform, true)(struct!.queryParams),
  }
}


export function cdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherToHclTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherOutputReference | CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie_matchers: {
      value: cdktf.listMapperHcl(cdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersToHclTerraform, true)(struct!.cookieMatchers),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersList",
    },
    headers: {
      value: cdktf.listMapperHcl(cdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersList",
    },
    jwt_claims: {
      value: cdktf.listMapperHcl(cdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsToHclTerraform, true)(struct!.jwtClaims),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsList",
    },
    query_params: {
      value: cdktf.listMapperHcl(cdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsToHclTerraform, true)(struct!.queryParams),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcher | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcher | undefined) {
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
  private _cookieMatchers = new CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersList(this, "cookie_matchers", false);
  public get cookieMatchers() {
    return this._cookieMatchers;
  }
  public putCookieMatchers(value: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchers[] | cdktf.IResolvable) {
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
  private _headers = new CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeaders[] | cdktf.IResolvable) {
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
  private _jwtClaims = new CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsList(this, "jwt_claims", false);
  public get jwtClaims() {
    return this._jwtClaims;
  }
  public putJwtClaims(value: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaims[] | cdktf.IResolvable) {
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
  private _queryParams = new CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsList(this, "query_params", false);
  public get queryParams() {
    return this._queryParams;
  }
  public putQueryParams(value: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParams[] | cdktf.IResolvable) {
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
export interface CdnLoadbalancerApiRateLimitServerUrlRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#any_domain CdnLoadbalancer#any_domain}
  */
  readonly anyDomain?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#api_group CdnLoadbalancer#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#base_path CdnLoadbalancer#base_path}
  */
  readonly basePath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#specific_domain CdnLoadbalancer#specific_domain}
  */
  readonly specificDomain?: string;
  /**
  * client_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#client_matcher CdnLoadbalancer#client_matcher}
  */
  readonly clientMatcher?: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcher;
  /**
  * inline_rate_limiter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#inline_rate_limiter CdnLoadbalancer#inline_rate_limiter}
  */
  readonly inlineRateLimiter?: CdnLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiter;
  /**
  * ref_rate_limiter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#ref_rate_limiter CdnLoadbalancer#ref_rate_limiter}
  */
  readonly refRateLimiter?: CdnLoadbalancerApiRateLimitServerUrlRulesRefRateLimiter;
  /**
  * request_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#request_matcher CdnLoadbalancer#request_matcher}
  */
  readonly requestMatcher?: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcher;
}

export function cdnLoadbalancerApiRateLimitServerUrlRulesToTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_domain: cdktf.booleanToTerraform(struct!.anyDomain),
    api_group: cdktf.stringToTerraform(struct!.apiGroup),
    base_path: cdktf.stringToTerraform(struct!.basePath),
    specific_domain: cdktf.stringToTerraform(struct!.specificDomain),
    client_matcher: cdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherToTerraform(struct!.clientMatcher),
    inline_rate_limiter: cdnLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterToTerraform(struct!.inlineRateLimiter),
    ref_rate_limiter: cdnLoadbalancerApiRateLimitServerUrlRulesRefRateLimiterToTerraform(struct!.refRateLimiter),
    request_matcher: cdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherToTerraform(struct!.requestMatcher),
  }
}


export function cdnLoadbalancerApiRateLimitServerUrlRulesToHclTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRules | cdktf.IResolvable): any {
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
      value: cdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherToHclTerraform(struct!.clientMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherList",
    },
    inline_rate_limiter: {
      value: cdnLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterToHclTerraform(struct!.inlineRateLimiter),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterList",
    },
    ref_rate_limiter: {
      value: cdnLoadbalancerApiRateLimitServerUrlRulesRefRateLimiterToHclTerraform(struct!.refRateLimiter),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitServerUrlRulesRefRateLimiterList",
    },
    request_matcher: {
      value: cdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherToHclTerraform(struct!.requestMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiRateLimitServerUrlRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerApiRateLimitServerUrlRules | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiRateLimitServerUrlRules | cdktf.IResolvable | undefined) {
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
  private _clientMatcher = new CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherOutputReference(this, "client_matcher");
  public get clientMatcher() {
    return this._clientMatcher;
  }
  public putClientMatcher(value: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcher) {
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
  private _inlineRateLimiter = new CdnLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterOutputReference(this, "inline_rate_limiter");
  public get inlineRateLimiter() {
    return this._inlineRateLimiter;
  }
  public putInlineRateLimiter(value: CdnLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiter) {
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
  private _refRateLimiter = new CdnLoadbalancerApiRateLimitServerUrlRulesRefRateLimiterOutputReference(this, "ref_rate_limiter");
  public get refRateLimiter() {
    return this._refRateLimiter;
  }
  public putRefRateLimiter(value: CdnLoadbalancerApiRateLimitServerUrlRulesRefRateLimiter) {
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
  private _requestMatcher = new CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherOutputReference(this, "request_matcher");
  public get requestMatcher() {
    return this._requestMatcher;
  }
  public putRequestMatcher(value: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcher) {
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

export class CdnLoadbalancerApiRateLimitServerUrlRulesList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerApiRateLimitServerUrlRules[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerApiRateLimitServerUrlRulesOutputReference {
    return new CdnLoadbalancerApiRateLimitServerUrlRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerApiRateLimit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#no_ip_allowed_list CdnLoadbalancer#no_ip_allowed_list}
  */
  readonly noIpAllowedList?: boolean | cdktf.IResolvable;
  /**
  * api_endpoint_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#api_endpoint_rules CdnLoadbalancer#api_endpoint_rules}
  */
  readonly apiEndpointRules?: CdnLoadbalancerApiRateLimitApiEndpointRules[] | cdktf.IResolvable;
  /**
  * bypass_rate_limiting_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#bypass_rate_limiting_rules CdnLoadbalancer#bypass_rate_limiting_rules}
  */
  readonly bypassRateLimitingRules?: CdnLoadbalancerApiRateLimitBypassRateLimitingRules;
  /**
  * custom_ip_allowed_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#custom_ip_allowed_list CdnLoadbalancer#custom_ip_allowed_list}
  */
  readonly customIpAllowedList?: CdnLoadbalancerApiRateLimitCustomIpAllowedListStruct;
  /**
  * ip_allowed_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#ip_allowed_list CdnLoadbalancer#ip_allowed_list}
  */
  readonly ipAllowedList?: CdnLoadbalancerApiRateLimitIpAllowedListStruct;
  /**
  * server_url_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#server_url_rules CdnLoadbalancer#server_url_rules}
  */
  readonly serverUrlRules?: CdnLoadbalancerApiRateLimitServerUrlRules[] | cdktf.IResolvable;
}

export function cdnLoadbalancerApiRateLimitToTerraform(struct?: CdnLoadbalancerApiRateLimitOutputReference | CdnLoadbalancerApiRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_ip_allowed_list: cdktf.booleanToTerraform(struct!.noIpAllowedList),
    api_endpoint_rules: cdktf.listMapper(cdnLoadbalancerApiRateLimitApiEndpointRulesToTerraform, true)(struct!.apiEndpointRules),
    bypass_rate_limiting_rules: cdnLoadbalancerApiRateLimitBypassRateLimitingRulesToTerraform(struct!.bypassRateLimitingRules),
    custom_ip_allowed_list: cdnLoadbalancerApiRateLimitCustomIpAllowedListStructToTerraform(struct!.customIpAllowedList),
    ip_allowed_list: cdnLoadbalancerApiRateLimitIpAllowedListStructToTerraform(struct!.ipAllowedList),
    server_url_rules: cdktf.listMapper(cdnLoadbalancerApiRateLimitServerUrlRulesToTerraform, true)(struct!.serverUrlRules),
  }
}


export function cdnLoadbalancerApiRateLimitToHclTerraform(struct?: CdnLoadbalancerApiRateLimitOutputReference | CdnLoadbalancerApiRateLimit): any {
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
      value: cdktf.listMapperHcl(cdnLoadbalancerApiRateLimitApiEndpointRulesToHclTerraform, true)(struct!.apiEndpointRules),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitApiEndpointRulesList",
    },
    bypass_rate_limiting_rules: {
      value: cdnLoadbalancerApiRateLimitBypassRateLimitingRulesToHclTerraform(struct!.bypassRateLimitingRules),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitBypassRateLimitingRulesList",
    },
    custom_ip_allowed_list: {
      value: cdnLoadbalancerApiRateLimitCustomIpAllowedListStructToHclTerraform(struct!.customIpAllowedList),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitCustomIpAllowedListStructList",
    },
    ip_allowed_list: {
      value: cdnLoadbalancerApiRateLimitIpAllowedListStructToHclTerraform(struct!.ipAllowedList),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitIpAllowedListStructList",
    },
    server_url_rules: {
      value: cdktf.listMapperHcl(cdnLoadbalancerApiRateLimitServerUrlRulesToHclTerraform, true)(struct!.serverUrlRules),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitServerUrlRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiRateLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiRateLimit | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiRateLimit | undefined) {
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
  private _apiEndpointRules = new CdnLoadbalancerApiRateLimitApiEndpointRulesList(this, "api_endpoint_rules", false);
  public get apiEndpointRules() {
    return this._apiEndpointRules;
  }
  public putApiEndpointRules(value: CdnLoadbalancerApiRateLimitApiEndpointRules[] | cdktf.IResolvable) {
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
  private _bypassRateLimitingRules = new CdnLoadbalancerApiRateLimitBypassRateLimitingRulesOutputReference(this, "bypass_rate_limiting_rules");
  public get bypassRateLimitingRules() {
    return this._bypassRateLimitingRules;
  }
  public putBypassRateLimitingRules(value: CdnLoadbalancerApiRateLimitBypassRateLimitingRules) {
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
  private _customIpAllowedList = new CdnLoadbalancerApiRateLimitCustomIpAllowedListStructOutputReference(this, "custom_ip_allowed_list");
  public get customIpAllowedList() {
    return this._customIpAllowedList;
  }
  public putCustomIpAllowedList(value: CdnLoadbalancerApiRateLimitCustomIpAllowedListStruct) {
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
  private _ipAllowedList = new CdnLoadbalancerApiRateLimitIpAllowedListStructOutputReference(this, "ip_allowed_list");
  public get ipAllowedList() {
    return this._ipAllowedList;
  }
  public putIpAllowedList(value: CdnLoadbalancerApiRateLimitIpAllowedListStruct) {
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
  private _serverUrlRules = new CdnLoadbalancerApiRateLimitServerUrlRulesList(this, "server_url_rules", false);
  public get serverUrlRules() {
    return this._serverUrlRules;
  }
  public putServerUrlRules(value: CdnLoadbalancerApiRateLimitServerUrlRules[] | cdktf.IResolvable) {
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
export interface CdnLoadbalancerApiSpecificationApiDefinition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#namespace CdnLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#tenant CdnLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function cdnLoadbalancerApiSpecificationApiDefinitionToTerraform(struct?: CdnLoadbalancerApiSpecificationApiDefinitionOutputReference | CdnLoadbalancerApiSpecificationApiDefinition): any {
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


export function cdnLoadbalancerApiSpecificationApiDefinitionToHclTerraform(struct?: CdnLoadbalancerApiSpecificationApiDefinitionOutputReference | CdnLoadbalancerApiSpecificationApiDefinition): any {
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

export class CdnLoadbalancerApiSpecificationApiDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiSpecificationApiDefinition | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiSpecificationApiDefinition | undefined) {
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
export interface CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#methods CdnLoadbalancer#methods}
  */
  readonly methods?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#path CdnLoadbalancer#path}
  */
  readonly path: string;
}

export function cdnLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpointToTerraform(struct?: CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpointOutputReference | CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.methods),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function cdnLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpointToHclTerraform(struct?: CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpointOutputReference | CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpoint): any {
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

export class CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpoint | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpoint | undefined) {
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
export interface CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#description CdnLoadbalancer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#disable CdnLoadbalancer#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
}

export function cdnLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadataToTerraform(struct?: CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadataOutputReference | CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadata): any {
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


export function cdnLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadataToHclTerraform(struct?: CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadataOutputReference | CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadata): any {
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

export class CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadata | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadata | undefined) {
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
export interface CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#action_block CdnLoadbalancer#action_block}
  */
  readonly actionBlock?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#action_report CdnLoadbalancer#action_report}
  */
  readonly actionReport?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#action_skip CdnLoadbalancer#action_skip}
  */
  readonly actionSkip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#api_group CdnLoadbalancer#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#base_path CdnLoadbalancer#base_path}
  */
  readonly basePath?: string;
  /**
  * api_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#api_endpoint CdnLoadbalancer#api_endpoint}
  */
  readonly apiEndpoint?: CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpoint;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#metadata CdnLoadbalancer#metadata}
  */
  readonly metadata: CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadata;
}

export function cdnLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesToTerraform(struct?: CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRules | cdktf.IResolvable): any {
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
    api_endpoint: cdnLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpointToTerraform(struct!.apiEndpoint),
    metadata: cdnLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadataToTerraform(struct!.metadata),
  }
}


export function cdnLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesToHclTerraform(struct?: CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRules | cdktf.IResolvable): any {
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
      value: cdnLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpointToHclTerraform(struct!.apiEndpoint),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpointList",
    },
    metadata: {
      value: cdnLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRules | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRules | cdktf.IResolvable | undefined) {
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
  private _apiEndpoint = new CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpointOutputReference(this, "api_endpoint");
  public get apiEndpoint() {
    return this._apiEndpoint;
  }
  public putApiEndpoint(value: CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpoint) {
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
  private _metadata = new CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }
}

export class CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRules[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesOutputReference {
    return new CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustom {
  /**
  * open_api_validation_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#open_api_validation_rules CdnLoadbalancer#open_api_validation_rules}
  */
  readonly openApiValidationRules: CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRules[] | cdktf.IResolvable;
}

export function cdnLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomToTerraform(struct?: CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOutputReference | CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    open_api_validation_rules: cdktf.listMapper(cdnLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesToTerraform, true)(struct!.openApiValidationRules),
  }
}


export function cdnLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomToHclTerraform(struct?: CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOutputReference | CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    open_api_validation_rules: {
      value: cdktf.listMapperHcl(cdnLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesToHclTerraform, true)(struct!.openApiValidationRules),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._openApiValidationRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.openApiValidationRules = this._openApiValidationRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustom | undefined) {
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
  private _openApiValidationRules = new CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesList(this, "open_api_validation_rules", false);
  public get openApiValidationRules() {
    return this._openApiValidationRules;
  }
  public putOpenApiValidationRules(value: CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRules[] | cdktf.IResolvable) {
    this._openApiValidationRules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get openApiValidationRulesInput() {
    return this._openApiValidationRules.internalValue;
  }
}
export interface CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughMode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#fall_through_mode_allow CdnLoadbalancer#fall_through_mode_allow}
  */
  readonly fallThroughModeAllow?: boolean | cdktf.IResolvable;
  /**
  * fall_through_mode_custom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#fall_through_mode_custom CdnLoadbalancer#fall_through_mode_custom}
  */
  readonly fallThroughModeCustom?: CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustom;
}

export function cdnLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeToTerraform(struct?: CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeOutputReference | CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fall_through_mode_allow: cdktf.booleanToTerraform(struct!.fallThroughModeAllow),
    fall_through_mode_custom: cdnLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomToTerraform(struct!.fallThroughModeCustom),
  }
}


export function cdnLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeToHclTerraform(struct?: CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeOutputReference | CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughMode): any {
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
      value: cdnLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomToHclTerraform(struct!.fallThroughModeCustom),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughMode | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughMode | undefined) {
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
  private _fallThroughModeCustom = new CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOutputReference(this, "fall_through_mode_custom");
  public get fallThroughModeCustom() {
    return this._fallThroughModeCustom;
  }
  public putFallThroughModeCustom(value: CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustom) {
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
export interface CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#allow_additional_headers CdnLoadbalancer#allow_additional_headers}
  */
  readonly allowAdditionalHeaders?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#disallow_additional_headers CdnLoadbalancer#disallow_additional_headers}
  */
  readonly disallowAdditionalHeaders?: boolean | cdktf.IResolvable;
}

export function cdnLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomHeadersToTerraform(struct?: CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomHeadersOutputReference | CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_additional_headers: cdktf.booleanToTerraform(struct!.allowAdditionalHeaders),
    disallow_additional_headers: cdktf.booleanToTerraform(struct!.disallowAdditionalHeaders),
  }
}


export function cdnLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomHeadersToHclTerraform(struct?: CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomHeadersOutputReference | CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomHeaders): any {
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

export class CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomHeaders | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomHeaders | undefined) {
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
export interface CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomQueryParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#allow_additional_parameters CdnLoadbalancer#allow_additional_parameters}
  */
  readonly allowAdditionalParameters?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#disallow_additional_parameters CdnLoadbalancer#disallow_additional_parameters}
  */
  readonly disallowAdditionalParameters?: boolean | cdktf.IResolvable;
}

export function cdnLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomQueryParametersToTerraform(struct?: CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomQueryParametersOutputReference | CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomQueryParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_additional_parameters: cdktf.booleanToTerraform(struct!.allowAdditionalParameters),
    disallow_additional_parameters: cdktf.booleanToTerraform(struct!.disallowAdditionalParameters),
  }
}


export function cdnLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomQueryParametersToHclTerraform(struct?: CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomQueryParametersOutputReference | CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomQueryParameters): any {
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

export class CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomQueryParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomQueryParameters | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomQueryParameters | undefined) {
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
export interface CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustom {
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#headers CdnLoadbalancer#headers}
  */
  readonly headers?: CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomHeaders;
  /**
  * query_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#query_parameters CdnLoadbalancer#query_parameters}
  */
  readonly queryParameters?: CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomQueryParameters;
}

export function cdnLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomToTerraform(struct?: CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomOutputReference | CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers: cdnLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomHeadersToTerraform(struct!.headers),
    query_parameters: cdnLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomQueryParametersToTerraform(struct!.queryParameters),
  }
}


export function cdnLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomToHclTerraform(struct?: CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomOutputReference | CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    headers: {
      value: cdnLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomHeadersToHclTerraform(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomHeadersList",
    },
    query_parameters: {
      value: cdnLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomQueryParametersToHclTerraform(struct!.queryParameters),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomQueryParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustom | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustom | undefined) {
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
  private _headers = new CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomHeadersOutputReference(this, "headers");
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomHeaders) {
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
  private _queryParameters = new CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomQueryParametersOutputReference(this, "query_parameters");
  public get queryParameters() {
    return this._queryParameters;
  }
  public putQueryParameters(value: CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomQueryParameters) {
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
export interface CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#fail_close CdnLoadbalancer#fail_close}
  */
  readonly failClose?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#fail_open CdnLoadbalancer#fail_open}
  */
  readonly failOpen?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#oversized_body_fail_validation CdnLoadbalancer#oversized_body_fail_validation}
  */
  readonly oversizedBodyFailValidation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#oversized_body_skip_validation CdnLoadbalancer#oversized_body_skip_validation}
  */
  readonly oversizedBodySkipValidation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#property_validation_settings_default CdnLoadbalancer#property_validation_settings_default}
  */
  readonly propertyValidationSettingsDefault?: boolean | cdktf.IResolvable;
  /**
  * property_validation_settings_custom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#property_validation_settings_custom CdnLoadbalancer#property_validation_settings_custom}
  */
  readonly propertyValidationSettingsCustom?: CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustom;
}

export function cdnLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsToTerraform(struct?: CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsOutputReference | CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsSettings): any {
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
    property_validation_settings_custom: cdnLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomToTerraform(struct!.propertyValidationSettingsCustom),
  }
}


export function cdnLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsToHclTerraform(struct?: CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsOutputReference | CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsSettings): any {
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
      value: cdnLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomToHclTerraform(struct!.propertyValidationSettingsCustom),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsSettings | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsSettings | undefined) {
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
  private _propertyValidationSettingsCustom = new CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomOutputReference(this, "property_validation_settings_custom");
  public get propertyValidationSettingsCustom() {
    return this._propertyValidationSettingsCustom;
  }
  public putPropertyValidationSettingsCustom(value: CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustom) {
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
export interface CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeResponseValidationModeActive {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#enforcement_block CdnLoadbalancer#enforcement_block}
  */
  readonly enforcementBlock?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#enforcement_report CdnLoadbalancer#enforcement_report}
  */
  readonly enforcementReport?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#response_validation_properties CdnLoadbalancer#response_validation_properties}
  */
  readonly responseValidationProperties: string[];
}

export function cdnLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeResponseValidationModeActiveToTerraform(struct?: CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeResponseValidationModeActiveOutputReference | CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeResponseValidationModeActive): any {
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


export function cdnLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeResponseValidationModeActiveToHclTerraform(struct?: CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeResponseValidationModeActiveOutputReference | CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeResponseValidationModeActive): any {
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

export class CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeResponseValidationModeActiveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeResponseValidationModeActive | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeResponseValidationModeActive | undefined) {
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
export interface CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeValidationModeActive {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#enforcement_block CdnLoadbalancer#enforcement_block}
  */
  readonly enforcementBlock?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#enforcement_report CdnLoadbalancer#enforcement_report}
  */
  readonly enforcementReport?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#request_validation_properties CdnLoadbalancer#request_validation_properties}
  */
  readonly requestValidationProperties: string[];
}

export function cdnLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeValidationModeActiveToTerraform(struct?: CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeValidationModeActiveOutputReference | CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeValidationModeActive): any {
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


export function cdnLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeValidationModeActiveToHclTerraform(struct?: CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeValidationModeActiveOutputReference | CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeValidationModeActive): any {
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

export class CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeValidationModeActiveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeValidationModeActive | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeValidationModeActive | undefined) {
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
export interface CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationMode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#skip_response_validation CdnLoadbalancer#skip_response_validation}
  */
  readonly skipResponseValidation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#skip_validation CdnLoadbalancer#skip_validation}
  */
  readonly skipValidation?: boolean | cdktf.IResolvable;
  /**
  * response_validation_mode_active block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#response_validation_mode_active CdnLoadbalancer#response_validation_mode_active}
  */
  readonly responseValidationModeActive?: CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeResponseValidationModeActive;
  /**
  * validation_mode_active block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#validation_mode_active CdnLoadbalancer#validation_mode_active}
  */
  readonly validationModeActive?: CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeValidationModeActive;
}

export function cdnLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeToTerraform(struct?: CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeOutputReference | CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    skip_response_validation: cdktf.booleanToTerraform(struct!.skipResponseValidation),
    skip_validation: cdktf.booleanToTerraform(struct!.skipValidation),
    response_validation_mode_active: cdnLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeResponseValidationModeActiveToTerraform(struct!.responseValidationModeActive),
    validation_mode_active: cdnLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeValidationModeActiveToTerraform(struct!.validationModeActive),
  }
}


export function cdnLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeToHclTerraform(struct?: CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeOutputReference | CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationMode): any {
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
      value: cdnLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeResponseValidationModeActiveToHclTerraform(struct!.responseValidationModeActive),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeResponseValidationModeActiveList",
    },
    validation_mode_active: {
      value: cdnLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeValidationModeActiveToHclTerraform(struct!.validationModeActive),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeValidationModeActiveList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationMode | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationMode | undefined) {
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
  private _responseValidationModeActive = new CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeResponseValidationModeActiveOutputReference(this, "response_validation_mode_active");
  public get responseValidationModeActive() {
    return this._responseValidationModeActive;
  }
  public putResponseValidationModeActive(value: CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeResponseValidationModeActive) {
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
  private _validationModeActive = new CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeValidationModeActiveOutputReference(this, "validation_mode_active");
  public get validationModeActive() {
    return this._validationModeActive;
  }
  public putValidationModeActive(value: CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeValidationModeActive) {
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
export interface CdnLoadbalancerApiSpecificationValidationAllSpecEndpoints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#oversized_body_fail_validation CdnLoadbalancer#oversized_body_fail_validation}
  */
  readonly oversizedBodyFailValidation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#oversized_body_skip_validation CdnLoadbalancer#oversized_body_skip_validation}
  */
  readonly oversizedBodySkipValidation?: boolean | cdktf.IResolvable;
  /**
  * fall_through_mode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#fall_through_mode CdnLoadbalancer#fall_through_mode}
  */
  readonly fallThroughMode: CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughMode;
  /**
  * settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#settings CdnLoadbalancer#settings}
  */
  readonly settings?: CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsSettings;
  /**
  * validation_mode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#validation_mode CdnLoadbalancer#validation_mode}
  */
  readonly validationMode: CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationMode;
}

export function cdnLoadbalancerApiSpecificationValidationAllSpecEndpointsToTerraform(struct?: CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsOutputReference | CdnLoadbalancerApiSpecificationValidationAllSpecEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oversized_body_fail_validation: cdktf.booleanToTerraform(struct!.oversizedBodyFailValidation),
    oversized_body_skip_validation: cdktf.booleanToTerraform(struct!.oversizedBodySkipValidation),
    fall_through_mode: cdnLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeToTerraform(struct!.fallThroughMode),
    settings: cdnLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsToTerraform(struct!.settings),
    validation_mode: cdnLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeToTerraform(struct!.validationMode),
  }
}


export function cdnLoadbalancerApiSpecificationValidationAllSpecEndpointsToHclTerraform(struct?: CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsOutputReference | CdnLoadbalancerApiSpecificationValidationAllSpecEndpoints): any {
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
      value: cdnLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeToHclTerraform(struct!.fallThroughMode),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeList",
    },
    settings: {
      value: cdnLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsToHclTerraform(struct!.settings),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsList",
    },
    validation_mode: {
      value: cdnLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeToHclTerraform(struct!.validationMode),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiSpecificationValidationAllSpecEndpoints | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiSpecificationValidationAllSpecEndpoints | undefined) {
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
  private _fallThroughMode = new CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeOutputReference(this, "fall_through_mode");
  public get fallThroughMode() {
    return this._fallThroughMode;
  }
  public putFallThroughMode(value: CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughMode) {
    this._fallThroughMode.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fallThroughModeInput() {
    return this._fallThroughMode.internalValue;
  }

  // settings - computed: false, optional: true, required: false
  private _settings = new CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsSettings) {
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
  private _validationMode = new CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeOutputReference(this, "validation_mode");
  public get validationMode() {
    return this._validationMode;
  }
  public putValidationMode(value: CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationMode) {
    this._validationMode.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get validationModeInput() {
    return this._validationMode.internalValue;
  }
}
export interface CdnLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#methods CdnLoadbalancer#methods}
  */
  readonly methods?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#path CdnLoadbalancer#path}
  */
  readonly path: string;
}

export function cdnLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpointToTerraform(struct?: CdnLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpointOutputReference | CdnLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.methods),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function cdnLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpointToHclTerraform(struct?: CdnLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpointOutputReference | CdnLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpoint): any {
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

export class CdnLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpoint | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpoint | undefined) {
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
export interface CdnLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#description CdnLoadbalancer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#disable CdnLoadbalancer#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
}

export function cdnLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadataToTerraform(struct?: CdnLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadataOutputReference | CdnLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadata): any {
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


export function cdnLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadataToHclTerraform(struct?: CdnLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadataOutputReference | CdnLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadata): any {
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

export class CdnLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadata | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadata | undefined) {
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
export interface CdnLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#action_block CdnLoadbalancer#action_block}
  */
  readonly actionBlock?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#action_report CdnLoadbalancer#action_report}
  */
  readonly actionReport?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#action_skip CdnLoadbalancer#action_skip}
  */
  readonly actionSkip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#api_group CdnLoadbalancer#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#base_path CdnLoadbalancer#base_path}
  */
  readonly basePath?: string;
  /**
  * api_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#api_endpoint CdnLoadbalancer#api_endpoint}
  */
  readonly apiEndpoint?: CdnLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpoint;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#metadata CdnLoadbalancer#metadata}
  */
  readonly metadata: CdnLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadata;
}

export function cdnLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesToTerraform(struct?: CdnLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRules | cdktf.IResolvable): any {
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
    api_endpoint: cdnLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpointToTerraform(struct!.apiEndpoint),
    metadata: cdnLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadataToTerraform(struct!.metadata),
  }
}


export function cdnLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesToHclTerraform(struct?: CdnLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRules | cdktf.IResolvable): any {
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
      value: cdnLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpointToHclTerraform(struct!.apiEndpoint),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpointList",
    },
    metadata: {
      value: cdnLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRules | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRules | cdktf.IResolvable | undefined) {
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
  private _apiEndpoint = new CdnLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpointOutputReference(this, "api_endpoint");
  public get apiEndpoint() {
    return this._apiEndpoint;
  }
  public putApiEndpoint(value: CdnLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpoint) {
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
  private _metadata = new CdnLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: CdnLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }
}

export class CdnLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRules[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesOutputReference {
    return new CdnLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustom {
  /**
  * open_api_validation_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#open_api_validation_rules CdnLoadbalancer#open_api_validation_rules}
  */
  readonly openApiValidationRules: CdnLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRules[] | cdktf.IResolvable;
}

export function cdnLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomToTerraform(struct?: CdnLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOutputReference | CdnLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    open_api_validation_rules: cdktf.listMapper(cdnLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesToTerraform, true)(struct!.openApiValidationRules),
  }
}


export function cdnLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomToHclTerraform(struct?: CdnLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOutputReference | CdnLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    open_api_validation_rules: {
      value: cdktf.listMapperHcl(cdnLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesToHclTerraform, true)(struct!.openApiValidationRules),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._openApiValidationRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.openApiValidationRules = this._openApiValidationRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustom | undefined) {
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
  private _openApiValidationRules = new CdnLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesList(this, "open_api_validation_rules", false);
  public get openApiValidationRules() {
    return this._openApiValidationRules;
  }
  public putOpenApiValidationRules(value: CdnLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRules[] | cdktf.IResolvable) {
    this._openApiValidationRules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get openApiValidationRulesInput() {
    return this._openApiValidationRules.internalValue;
  }
}
export interface CdnLoadbalancerApiSpecificationValidationCustomListFallThroughMode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#fall_through_mode_allow CdnLoadbalancer#fall_through_mode_allow}
  */
  readonly fallThroughModeAllow?: boolean | cdktf.IResolvable;
  /**
  * fall_through_mode_custom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#fall_through_mode_custom CdnLoadbalancer#fall_through_mode_custom}
  */
  readonly fallThroughModeCustom?: CdnLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustom;
}

export function cdnLoadbalancerApiSpecificationValidationCustomListFallThroughModeToTerraform(struct?: CdnLoadbalancerApiSpecificationValidationCustomListFallThroughModeOutputReference | CdnLoadbalancerApiSpecificationValidationCustomListFallThroughMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fall_through_mode_allow: cdktf.booleanToTerraform(struct!.fallThroughModeAllow),
    fall_through_mode_custom: cdnLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomToTerraform(struct!.fallThroughModeCustom),
  }
}


export function cdnLoadbalancerApiSpecificationValidationCustomListFallThroughModeToHclTerraform(struct?: CdnLoadbalancerApiSpecificationValidationCustomListFallThroughModeOutputReference | CdnLoadbalancerApiSpecificationValidationCustomListFallThroughMode): any {
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
      value: cdnLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomToHclTerraform(struct!.fallThroughModeCustom),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiSpecificationValidationCustomListFallThroughModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiSpecificationValidationCustomListFallThroughMode | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiSpecificationValidationCustomListFallThroughMode | undefined) {
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
  private _fallThroughModeCustom = new CdnLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOutputReference(this, "fall_through_mode_custom");
  public get fallThroughModeCustom() {
    return this._fallThroughModeCustom;
  }
  public putFallThroughModeCustom(value: CdnLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustom) {
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
export interface CdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesApiEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#methods CdnLoadbalancer#methods}
  */
  readonly methods?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#path CdnLoadbalancer#path}
  */
  readonly path: string;
}

export function cdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesApiEndpointToTerraform(struct?: CdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesApiEndpointOutputReference | CdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesApiEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.methods),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function cdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesApiEndpointToHclTerraform(struct?: CdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesApiEndpointOutputReference | CdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesApiEndpoint): any {
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

export class CdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesApiEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesApiEndpoint | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesApiEndpoint | undefined) {
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
export interface CdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#description CdnLoadbalancer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#disable CdnLoadbalancer#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
}

export function cdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesMetadataToTerraform(struct?: CdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesMetadataOutputReference | CdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesMetadata): any {
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


export function cdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesMetadataToHclTerraform(struct?: CdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesMetadataOutputReference | CdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesMetadata): any {
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

export class CdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesMetadata | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesMetadata | undefined) {
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
export interface CdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationModeResponseValidationModeActive {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#enforcement_block CdnLoadbalancer#enforcement_block}
  */
  readonly enforcementBlock?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#enforcement_report CdnLoadbalancer#enforcement_report}
  */
  readonly enforcementReport?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#response_validation_properties CdnLoadbalancer#response_validation_properties}
  */
  readonly responseValidationProperties: string[];
}

export function cdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationModeResponseValidationModeActiveToTerraform(struct?: CdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationModeResponseValidationModeActiveOutputReference | CdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationModeResponseValidationModeActive): any {
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


export function cdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationModeResponseValidationModeActiveToHclTerraform(struct?: CdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationModeResponseValidationModeActiveOutputReference | CdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationModeResponseValidationModeActive): any {
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

export class CdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationModeResponseValidationModeActiveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationModeResponseValidationModeActive | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationModeResponseValidationModeActive | undefined) {
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
export interface CdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationModeValidationModeActive {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#enforcement_block CdnLoadbalancer#enforcement_block}
  */
  readonly enforcementBlock?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#enforcement_report CdnLoadbalancer#enforcement_report}
  */
  readonly enforcementReport?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#request_validation_properties CdnLoadbalancer#request_validation_properties}
  */
  readonly requestValidationProperties: string[];
}

export function cdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationModeValidationModeActiveToTerraform(struct?: CdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationModeValidationModeActiveOutputReference | CdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationModeValidationModeActive): any {
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


export function cdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationModeValidationModeActiveToHclTerraform(struct?: CdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationModeValidationModeActiveOutputReference | CdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationModeValidationModeActive): any {
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

export class CdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationModeValidationModeActiveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationModeValidationModeActive | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationModeValidationModeActive | undefined) {
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
export interface CdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationMode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#skip_response_validation CdnLoadbalancer#skip_response_validation}
  */
  readonly skipResponseValidation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#skip_validation CdnLoadbalancer#skip_validation}
  */
  readonly skipValidation?: boolean | cdktf.IResolvable;
  /**
  * response_validation_mode_active block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#response_validation_mode_active CdnLoadbalancer#response_validation_mode_active}
  */
  readonly responseValidationModeActive?: CdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationModeResponseValidationModeActive;
  /**
  * validation_mode_active block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#validation_mode_active CdnLoadbalancer#validation_mode_active}
  */
  readonly validationModeActive?: CdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationModeValidationModeActive;
}

export function cdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationModeToTerraform(struct?: CdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationModeOutputReference | CdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    skip_response_validation: cdktf.booleanToTerraform(struct!.skipResponseValidation),
    skip_validation: cdktf.booleanToTerraform(struct!.skipValidation),
    response_validation_mode_active: cdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationModeResponseValidationModeActiveToTerraform(struct!.responseValidationModeActive),
    validation_mode_active: cdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationModeValidationModeActiveToTerraform(struct!.validationModeActive),
  }
}


export function cdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationModeToHclTerraform(struct?: CdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationModeOutputReference | CdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationMode): any {
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
      value: cdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationModeResponseValidationModeActiveToHclTerraform(struct!.responseValidationModeActive),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationModeResponseValidationModeActiveList",
    },
    validation_mode_active: {
      value: cdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationModeValidationModeActiveToHclTerraform(struct!.validationModeActive),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationModeValidationModeActiveList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationMode | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationMode | undefined) {
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
  private _responseValidationModeActive = new CdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationModeResponseValidationModeActiveOutputReference(this, "response_validation_mode_active");
  public get responseValidationModeActive() {
    return this._responseValidationModeActive;
  }
  public putResponseValidationModeActive(value: CdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationModeResponseValidationModeActive) {
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
  private _validationModeActive = new CdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationModeValidationModeActiveOutputReference(this, "validation_mode_active");
  public get validationModeActive() {
    return this._validationModeActive;
  }
  public putValidationModeActive(value: CdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationModeValidationModeActive) {
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
export interface CdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#any_domain CdnLoadbalancer#any_domain}
  */
  readonly anyDomain?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#api_group CdnLoadbalancer#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#base_path CdnLoadbalancer#base_path}
  */
  readonly basePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#specific_domain CdnLoadbalancer#specific_domain}
  */
  readonly specificDomain?: string;
  /**
  * api_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#api_endpoint CdnLoadbalancer#api_endpoint}
  */
  readonly apiEndpoint?: CdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesApiEndpoint;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#metadata CdnLoadbalancer#metadata}
  */
  readonly metadata: CdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesMetadata;
  /**
  * validation_mode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#validation_mode CdnLoadbalancer#validation_mode}
  */
  readonly validationMode: CdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationMode;
}

export function cdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesToTerraform(struct?: CdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_domain: cdktf.booleanToTerraform(struct!.anyDomain),
    api_group: cdktf.stringToTerraform(struct!.apiGroup),
    base_path: cdktf.stringToTerraform(struct!.basePath),
    specific_domain: cdktf.stringToTerraform(struct!.specificDomain),
    api_endpoint: cdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesApiEndpointToTerraform(struct!.apiEndpoint),
    metadata: cdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesMetadataToTerraform(struct!.metadata),
    validation_mode: cdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationModeToTerraform(struct!.validationMode),
  }
}


export function cdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesToHclTerraform(struct?: CdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRules | cdktf.IResolvable): any {
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
    api_endpoint: {
      value: cdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesApiEndpointToHclTerraform(struct!.apiEndpoint),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesApiEndpointList",
    },
    metadata: {
      value: cdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesMetadataList",
    },
    validation_mode: {
      value: cdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationModeToHclTerraform(struct!.validationMode),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationModeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRules | cdktf.IResolvable | undefined {
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
    if (this._apiEndpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiEndpoint = this._apiEndpoint?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._validationMode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationMode = this._validationMode?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anyDomain = undefined;
      this._apiGroup = undefined;
      this._basePath = undefined;
      this._specificDomain = undefined;
      this._apiEndpoint.internalValue = undefined;
      this._metadata.internalValue = undefined;
      this._validationMode.internalValue = undefined;
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
      this._apiEndpoint.internalValue = value.apiEndpoint;
      this._metadata.internalValue = value.metadata;
      this._validationMode.internalValue = value.validationMode;
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

  // api_endpoint - computed: false, optional: true, required: false
  private _apiEndpoint = new CdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesApiEndpointOutputReference(this, "api_endpoint");
  public get apiEndpoint() {
    return this._apiEndpoint;
  }
  public putApiEndpoint(value: CdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesApiEndpoint) {
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
  private _metadata = new CdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: CdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // validation_mode - computed: false, optional: false, required: true
  private _validationMode = new CdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationModeOutputReference(this, "validation_mode");
  public get validationMode() {
    return this._validationMode;
  }
  public putValidationMode(value: CdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationMode) {
    this._validationMode.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get validationModeInput() {
    return this._validationMode.internalValue;
  }
}

export class CdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRules[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesOutputReference {
    return new CdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerApiSpecificationValidationCustomListSettingsPropertyValidationSettingsCustomHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#allow_additional_headers CdnLoadbalancer#allow_additional_headers}
  */
  readonly allowAdditionalHeaders?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#disallow_additional_headers CdnLoadbalancer#disallow_additional_headers}
  */
  readonly disallowAdditionalHeaders?: boolean | cdktf.IResolvable;
}

export function cdnLoadbalancerApiSpecificationValidationCustomListSettingsPropertyValidationSettingsCustomHeadersToTerraform(struct?: CdnLoadbalancerApiSpecificationValidationCustomListSettingsPropertyValidationSettingsCustomHeadersOutputReference | CdnLoadbalancerApiSpecificationValidationCustomListSettingsPropertyValidationSettingsCustomHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_additional_headers: cdktf.booleanToTerraform(struct!.allowAdditionalHeaders),
    disallow_additional_headers: cdktf.booleanToTerraform(struct!.disallowAdditionalHeaders),
  }
}


export function cdnLoadbalancerApiSpecificationValidationCustomListSettingsPropertyValidationSettingsCustomHeadersToHclTerraform(struct?: CdnLoadbalancerApiSpecificationValidationCustomListSettingsPropertyValidationSettingsCustomHeadersOutputReference | CdnLoadbalancerApiSpecificationValidationCustomListSettingsPropertyValidationSettingsCustomHeaders): any {
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

export class CdnLoadbalancerApiSpecificationValidationCustomListSettingsPropertyValidationSettingsCustomHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiSpecificationValidationCustomListSettingsPropertyValidationSettingsCustomHeaders | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiSpecificationValidationCustomListSettingsPropertyValidationSettingsCustomHeaders | undefined) {
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
export interface CdnLoadbalancerApiSpecificationValidationCustomListSettingsPropertyValidationSettingsCustomQueryParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#allow_additional_parameters CdnLoadbalancer#allow_additional_parameters}
  */
  readonly allowAdditionalParameters?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#disallow_additional_parameters CdnLoadbalancer#disallow_additional_parameters}
  */
  readonly disallowAdditionalParameters?: boolean | cdktf.IResolvable;
}

export function cdnLoadbalancerApiSpecificationValidationCustomListSettingsPropertyValidationSettingsCustomQueryParametersToTerraform(struct?: CdnLoadbalancerApiSpecificationValidationCustomListSettingsPropertyValidationSettingsCustomQueryParametersOutputReference | CdnLoadbalancerApiSpecificationValidationCustomListSettingsPropertyValidationSettingsCustomQueryParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_additional_parameters: cdktf.booleanToTerraform(struct!.allowAdditionalParameters),
    disallow_additional_parameters: cdktf.booleanToTerraform(struct!.disallowAdditionalParameters),
  }
}


export function cdnLoadbalancerApiSpecificationValidationCustomListSettingsPropertyValidationSettingsCustomQueryParametersToHclTerraform(struct?: CdnLoadbalancerApiSpecificationValidationCustomListSettingsPropertyValidationSettingsCustomQueryParametersOutputReference | CdnLoadbalancerApiSpecificationValidationCustomListSettingsPropertyValidationSettingsCustomQueryParameters): any {
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

export class CdnLoadbalancerApiSpecificationValidationCustomListSettingsPropertyValidationSettingsCustomQueryParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiSpecificationValidationCustomListSettingsPropertyValidationSettingsCustomQueryParameters | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiSpecificationValidationCustomListSettingsPropertyValidationSettingsCustomQueryParameters | undefined) {
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
export interface CdnLoadbalancerApiSpecificationValidationCustomListSettingsPropertyValidationSettingsCustom {
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#headers CdnLoadbalancer#headers}
  */
  readonly headers?: CdnLoadbalancerApiSpecificationValidationCustomListSettingsPropertyValidationSettingsCustomHeaders;
  /**
  * query_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#query_parameters CdnLoadbalancer#query_parameters}
  */
  readonly queryParameters?: CdnLoadbalancerApiSpecificationValidationCustomListSettingsPropertyValidationSettingsCustomQueryParameters;
}

export function cdnLoadbalancerApiSpecificationValidationCustomListSettingsPropertyValidationSettingsCustomToTerraform(struct?: CdnLoadbalancerApiSpecificationValidationCustomListSettingsPropertyValidationSettingsCustomOutputReference | CdnLoadbalancerApiSpecificationValidationCustomListSettingsPropertyValidationSettingsCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers: cdnLoadbalancerApiSpecificationValidationCustomListSettingsPropertyValidationSettingsCustomHeadersToTerraform(struct!.headers),
    query_parameters: cdnLoadbalancerApiSpecificationValidationCustomListSettingsPropertyValidationSettingsCustomQueryParametersToTerraform(struct!.queryParameters),
  }
}


export function cdnLoadbalancerApiSpecificationValidationCustomListSettingsPropertyValidationSettingsCustomToHclTerraform(struct?: CdnLoadbalancerApiSpecificationValidationCustomListSettingsPropertyValidationSettingsCustomOutputReference | CdnLoadbalancerApiSpecificationValidationCustomListSettingsPropertyValidationSettingsCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    headers: {
      value: cdnLoadbalancerApiSpecificationValidationCustomListSettingsPropertyValidationSettingsCustomHeadersToHclTerraform(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiSpecificationValidationCustomListSettingsPropertyValidationSettingsCustomHeadersList",
    },
    query_parameters: {
      value: cdnLoadbalancerApiSpecificationValidationCustomListSettingsPropertyValidationSettingsCustomQueryParametersToHclTerraform(struct!.queryParameters),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiSpecificationValidationCustomListSettingsPropertyValidationSettingsCustomQueryParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiSpecificationValidationCustomListSettingsPropertyValidationSettingsCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiSpecificationValidationCustomListSettingsPropertyValidationSettingsCustom | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiSpecificationValidationCustomListSettingsPropertyValidationSettingsCustom | undefined) {
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
  private _headers = new CdnLoadbalancerApiSpecificationValidationCustomListSettingsPropertyValidationSettingsCustomHeadersOutputReference(this, "headers");
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: CdnLoadbalancerApiSpecificationValidationCustomListSettingsPropertyValidationSettingsCustomHeaders) {
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
  private _queryParameters = new CdnLoadbalancerApiSpecificationValidationCustomListSettingsPropertyValidationSettingsCustomQueryParametersOutputReference(this, "query_parameters");
  public get queryParameters() {
    return this._queryParameters;
  }
  public putQueryParameters(value: CdnLoadbalancerApiSpecificationValidationCustomListSettingsPropertyValidationSettingsCustomQueryParameters) {
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
export interface CdnLoadbalancerApiSpecificationValidationCustomListSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#fail_close CdnLoadbalancer#fail_close}
  */
  readonly failClose?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#fail_open CdnLoadbalancer#fail_open}
  */
  readonly failOpen?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#oversized_body_fail_validation CdnLoadbalancer#oversized_body_fail_validation}
  */
  readonly oversizedBodyFailValidation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#oversized_body_skip_validation CdnLoadbalancer#oversized_body_skip_validation}
  */
  readonly oversizedBodySkipValidation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#property_validation_settings_default CdnLoadbalancer#property_validation_settings_default}
  */
  readonly propertyValidationSettingsDefault?: boolean | cdktf.IResolvable;
  /**
  * property_validation_settings_custom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#property_validation_settings_custom CdnLoadbalancer#property_validation_settings_custom}
  */
  readonly propertyValidationSettingsCustom?: CdnLoadbalancerApiSpecificationValidationCustomListSettingsPropertyValidationSettingsCustom;
}

export function cdnLoadbalancerApiSpecificationValidationCustomListSettingsToTerraform(struct?: CdnLoadbalancerApiSpecificationValidationCustomListSettingsOutputReference | CdnLoadbalancerApiSpecificationValidationCustomListSettings): any {
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
    property_validation_settings_custom: cdnLoadbalancerApiSpecificationValidationCustomListSettingsPropertyValidationSettingsCustomToTerraform(struct!.propertyValidationSettingsCustom),
  }
}


export function cdnLoadbalancerApiSpecificationValidationCustomListSettingsToHclTerraform(struct?: CdnLoadbalancerApiSpecificationValidationCustomListSettingsOutputReference | CdnLoadbalancerApiSpecificationValidationCustomListSettings): any {
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
      value: cdnLoadbalancerApiSpecificationValidationCustomListSettingsPropertyValidationSettingsCustomToHclTerraform(struct!.propertyValidationSettingsCustom),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiSpecificationValidationCustomListSettingsPropertyValidationSettingsCustomList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiSpecificationValidationCustomListSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiSpecificationValidationCustomListSettings | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiSpecificationValidationCustomListSettings | undefined) {
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
  private _propertyValidationSettingsCustom = new CdnLoadbalancerApiSpecificationValidationCustomListSettingsPropertyValidationSettingsCustomOutputReference(this, "property_validation_settings_custom");
  public get propertyValidationSettingsCustom() {
    return this._propertyValidationSettingsCustom;
  }
  public putPropertyValidationSettingsCustom(value: CdnLoadbalancerApiSpecificationValidationCustomListSettingsPropertyValidationSettingsCustom) {
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
export interface CdnLoadbalancerApiSpecificationValidationCustomListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#oversized_body_fail_validation CdnLoadbalancer#oversized_body_fail_validation}
  */
  readonly oversizedBodyFailValidation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#oversized_body_skip_validation CdnLoadbalancer#oversized_body_skip_validation}
  */
  readonly oversizedBodySkipValidation?: boolean | cdktf.IResolvable;
  /**
  * fall_through_mode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#fall_through_mode CdnLoadbalancer#fall_through_mode}
  */
  readonly fallThroughMode: CdnLoadbalancerApiSpecificationValidationCustomListFallThroughMode;
  /**
  * open_api_validation_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#open_api_validation_rules CdnLoadbalancer#open_api_validation_rules}
  */
  readonly openApiValidationRules: CdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRules[] | cdktf.IResolvable;
  /**
  * settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#settings CdnLoadbalancer#settings}
  */
  readonly settings?: CdnLoadbalancerApiSpecificationValidationCustomListSettings;
}

export function cdnLoadbalancerApiSpecificationValidationCustomListStructToTerraform(struct?: CdnLoadbalancerApiSpecificationValidationCustomListStructOutputReference | CdnLoadbalancerApiSpecificationValidationCustomListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oversized_body_fail_validation: cdktf.booleanToTerraform(struct!.oversizedBodyFailValidation),
    oversized_body_skip_validation: cdktf.booleanToTerraform(struct!.oversizedBodySkipValidation),
    fall_through_mode: cdnLoadbalancerApiSpecificationValidationCustomListFallThroughModeToTerraform(struct!.fallThroughMode),
    open_api_validation_rules: cdktf.listMapper(cdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesToTerraform, true)(struct!.openApiValidationRules),
    settings: cdnLoadbalancerApiSpecificationValidationCustomListSettingsToTerraform(struct!.settings),
  }
}


export function cdnLoadbalancerApiSpecificationValidationCustomListStructToHclTerraform(struct?: CdnLoadbalancerApiSpecificationValidationCustomListStructOutputReference | CdnLoadbalancerApiSpecificationValidationCustomListStruct): any {
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
      value: cdnLoadbalancerApiSpecificationValidationCustomListFallThroughModeToHclTerraform(struct!.fallThroughMode),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiSpecificationValidationCustomListFallThroughModeList",
    },
    open_api_validation_rules: {
      value: cdktf.listMapperHcl(cdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesToHclTerraform, true)(struct!.openApiValidationRules),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesList",
    },
    settings: {
      value: cdnLoadbalancerApiSpecificationValidationCustomListSettingsToHclTerraform(struct!.settings),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiSpecificationValidationCustomListSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiSpecificationValidationCustomListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiSpecificationValidationCustomListStruct | undefined {
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
    if (this._openApiValidationRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.openApiValidationRules = this._openApiValidationRules?.internalValue;
    }
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiSpecificationValidationCustomListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oversizedBodyFailValidation = undefined;
      this._oversizedBodySkipValidation = undefined;
      this._fallThroughMode.internalValue = undefined;
      this._openApiValidationRules.internalValue = undefined;
      this._settings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oversizedBodyFailValidation = value.oversizedBodyFailValidation;
      this._oversizedBodySkipValidation = value.oversizedBodySkipValidation;
      this._fallThroughMode.internalValue = value.fallThroughMode;
      this._openApiValidationRules.internalValue = value.openApiValidationRules;
      this._settings.internalValue = value.settings;
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
  private _fallThroughMode = new CdnLoadbalancerApiSpecificationValidationCustomListFallThroughModeOutputReference(this, "fall_through_mode");
  public get fallThroughMode() {
    return this._fallThroughMode;
  }
  public putFallThroughMode(value: CdnLoadbalancerApiSpecificationValidationCustomListFallThroughMode) {
    this._fallThroughMode.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fallThroughModeInput() {
    return this._fallThroughMode.internalValue;
  }

  // open_api_validation_rules - computed: false, optional: false, required: true
  private _openApiValidationRules = new CdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesList(this, "open_api_validation_rules", false);
  public get openApiValidationRules() {
    return this._openApiValidationRules;
  }
  public putOpenApiValidationRules(value: CdnLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRules[] | cdktf.IResolvable) {
    this._openApiValidationRules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get openApiValidationRulesInput() {
    return this._openApiValidationRules.internalValue;
  }

  // settings - computed: false, optional: true, required: false
  private _settings = new CdnLoadbalancerApiSpecificationValidationCustomListSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: CdnLoadbalancerApiSpecificationValidationCustomListSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }
}
export interface CdnLoadbalancerApiSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#validation_disabled CdnLoadbalancer#validation_disabled}
  */
  readonly validationDisabled?: boolean | cdktf.IResolvable;
  /**
  * api_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#api_definition CdnLoadbalancer#api_definition}
  */
  readonly apiDefinition: CdnLoadbalancerApiSpecificationApiDefinition;
  /**
  * validation_all_spec_endpoints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#validation_all_spec_endpoints CdnLoadbalancer#validation_all_spec_endpoints}
  */
  readonly validationAllSpecEndpoints?: CdnLoadbalancerApiSpecificationValidationAllSpecEndpoints;
  /**
  * validation_custom_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#validation_custom_list CdnLoadbalancer#validation_custom_list}
  */
  readonly validationCustomList?: CdnLoadbalancerApiSpecificationValidationCustomListStruct;
}

export function cdnLoadbalancerApiSpecificationToTerraform(struct?: CdnLoadbalancerApiSpecificationOutputReference | CdnLoadbalancerApiSpecification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    validation_disabled: cdktf.booleanToTerraform(struct!.validationDisabled),
    api_definition: cdnLoadbalancerApiSpecificationApiDefinitionToTerraform(struct!.apiDefinition),
    validation_all_spec_endpoints: cdnLoadbalancerApiSpecificationValidationAllSpecEndpointsToTerraform(struct!.validationAllSpecEndpoints),
    validation_custom_list: cdnLoadbalancerApiSpecificationValidationCustomListStructToTerraform(struct!.validationCustomList),
  }
}


export function cdnLoadbalancerApiSpecificationToHclTerraform(struct?: CdnLoadbalancerApiSpecificationOutputReference | CdnLoadbalancerApiSpecification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    validation_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.validationDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    api_definition: {
      value: cdnLoadbalancerApiSpecificationApiDefinitionToHclTerraform(struct!.apiDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiSpecificationApiDefinitionList",
    },
    validation_all_spec_endpoints: {
      value: cdnLoadbalancerApiSpecificationValidationAllSpecEndpointsToHclTerraform(struct!.validationAllSpecEndpoints),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsList",
    },
    validation_custom_list: {
      value: cdnLoadbalancerApiSpecificationValidationCustomListStructToHclTerraform(struct!.validationCustomList),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiSpecificationValidationCustomListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiSpecificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._validationDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationDisabled = this._validationDisabled;
    }
    if (this._apiDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiDefinition = this._apiDefinition?.internalValue;
    }
    if (this._validationAllSpecEndpoints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationAllSpecEndpoints = this._validationAllSpecEndpoints?.internalValue;
    }
    if (this._validationCustomList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationCustomList = this._validationCustomList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._validationDisabled = undefined;
      this._apiDefinition.internalValue = undefined;
      this._validationAllSpecEndpoints.internalValue = undefined;
      this._validationCustomList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._validationDisabled = value.validationDisabled;
      this._apiDefinition.internalValue = value.apiDefinition;
      this._validationAllSpecEndpoints.internalValue = value.validationAllSpecEndpoints;
      this._validationCustomList.internalValue = value.validationCustomList;
    }
  }

  // validation_disabled - computed: false, optional: true, required: false
  private _validationDisabled?: boolean | cdktf.IResolvable; 
  public get validationDisabled() {
    return this.getBooleanAttribute('validation_disabled');
  }
  public set validationDisabled(value: boolean | cdktf.IResolvable) {
    this._validationDisabled = value;
  }
  public resetValidationDisabled() {
    this._validationDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationDisabledInput() {
    return this._validationDisabled;
  }

  // api_definition - computed: false, optional: false, required: true
  private _apiDefinition = new CdnLoadbalancerApiSpecificationApiDefinitionOutputReference(this, "api_definition");
  public get apiDefinition() {
    return this._apiDefinition;
  }
  public putApiDefinition(value: CdnLoadbalancerApiSpecificationApiDefinition) {
    this._apiDefinition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiDefinitionInput() {
    return this._apiDefinition.internalValue;
  }

  // validation_all_spec_endpoints - computed: false, optional: true, required: false
  private _validationAllSpecEndpoints = new CdnLoadbalancerApiSpecificationValidationAllSpecEndpointsOutputReference(this, "validation_all_spec_endpoints");
  public get validationAllSpecEndpoints() {
    return this._validationAllSpecEndpoints;
  }
  public putValidationAllSpecEndpoints(value: CdnLoadbalancerApiSpecificationValidationAllSpecEndpoints) {
    this._validationAllSpecEndpoints.internalValue = value;
  }
  public resetValidationAllSpecEndpoints() {
    this._validationAllSpecEndpoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationAllSpecEndpointsInput() {
    return this._validationAllSpecEndpoints.internalValue;
  }

  // validation_custom_list - computed: false, optional: true, required: false
  private _validationCustomList = new CdnLoadbalancerApiSpecificationValidationCustomListStructOutputReference(this, "validation_custom_list");
  public get validationCustomList() {
    return this._validationCustomList;
  }
  public putValidationCustomList(value: CdnLoadbalancerApiSpecificationValidationCustomListStruct) {
    this._validationCustomList.internalValue = value;
  }
  public resetValidationCustomList() {
    this._validationCustomList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationCustomListInput() {
    return this._validationCustomList.internalValue;
  }
}
export interface CdnLoadbalancerApiSpecificationOnCacheMissApiDefinition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#namespace CdnLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#tenant CdnLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function cdnLoadbalancerApiSpecificationOnCacheMissApiDefinitionToTerraform(struct?: CdnLoadbalancerApiSpecificationOnCacheMissApiDefinitionOutputReference | CdnLoadbalancerApiSpecificationOnCacheMissApiDefinition): any {
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


export function cdnLoadbalancerApiSpecificationOnCacheMissApiDefinitionToHclTerraform(struct?: CdnLoadbalancerApiSpecificationOnCacheMissApiDefinitionOutputReference | CdnLoadbalancerApiSpecificationOnCacheMissApiDefinition): any {
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

export class CdnLoadbalancerApiSpecificationOnCacheMissApiDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiSpecificationOnCacheMissApiDefinition | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiSpecificationOnCacheMissApiDefinition | undefined) {
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
export interface CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#methods CdnLoadbalancer#methods}
  */
  readonly methods?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#path CdnLoadbalancer#path}
  */
  readonly path: string;
}

export function cdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpointToTerraform(struct?: CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpointOutputReference | CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.methods),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function cdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpointToHclTerraform(struct?: CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpointOutputReference | CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpoint): any {
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

export class CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpoint | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpoint | undefined) {
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
export interface CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#description CdnLoadbalancer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#disable CdnLoadbalancer#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
}

export function cdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadataToTerraform(struct?: CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadataOutputReference | CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadata): any {
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


export function cdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadataToHclTerraform(struct?: CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadataOutputReference | CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadata): any {
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

export class CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadata | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadata | undefined) {
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
export interface CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#action_block CdnLoadbalancer#action_block}
  */
  readonly actionBlock?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#action_report CdnLoadbalancer#action_report}
  */
  readonly actionReport?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#action_skip CdnLoadbalancer#action_skip}
  */
  readonly actionSkip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#api_group CdnLoadbalancer#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#base_path CdnLoadbalancer#base_path}
  */
  readonly basePath?: string;
  /**
  * api_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#api_endpoint CdnLoadbalancer#api_endpoint}
  */
  readonly apiEndpoint?: CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpoint;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#metadata CdnLoadbalancer#metadata}
  */
  readonly metadata: CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadata;
}

export function cdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesToTerraform(struct?: CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRules | cdktf.IResolvable): any {
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
    api_endpoint: cdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpointToTerraform(struct!.apiEndpoint),
    metadata: cdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadataToTerraform(struct!.metadata),
  }
}


export function cdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesToHclTerraform(struct?: CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRules | cdktf.IResolvable): any {
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
      value: cdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpointToHclTerraform(struct!.apiEndpoint),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpointList",
    },
    metadata: {
      value: cdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRules | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRules | cdktf.IResolvable | undefined) {
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
  private _apiEndpoint = new CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpointOutputReference(this, "api_endpoint");
  public get apiEndpoint() {
    return this._apiEndpoint;
  }
  public putApiEndpoint(value: CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpoint) {
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
  private _metadata = new CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }
}

export class CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRules[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesOutputReference {
    return new CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsFallThroughModeFallThroughModeCustom {
  /**
  * open_api_validation_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#open_api_validation_rules CdnLoadbalancer#open_api_validation_rules}
  */
  readonly openApiValidationRules: CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRules[] | cdktf.IResolvable;
}

export function cdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomToTerraform(struct?: CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOutputReference | CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsFallThroughModeFallThroughModeCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    open_api_validation_rules: cdktf.listMapper(cdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesToTerraform, true)(struct!.openApiValidationRules),
  }
}


export function cdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomToHclTerraform(struct?: CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOutputReference | CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsFallThroughModeFallThroughModeCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    open_api_validation_rules: {
      value: cdktf.listMapperHcl(cdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesToHclTerraform, true)(struct!.openApiValidationRules),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsFallThroughModeFallThroughModeCustom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._openApiValidationRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.openApiValidationRules = this._openApiValidationRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsFallThroughModeFallThroughModeCustom | undefined) {
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
  private _openApiValidationRules = new CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesList(this, "open_api_validation_rules", false);
  public get openApiValidationRules() {
    return this._openApiValidationRules;
  }
  public putOpenApiValidationRules(value: CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRules[] | cdktf.IResolvable) {
    this._openApiValidationRules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get openApiValidationRulesInput() {
    return this._openApiValidationRules.internalValue;
  }
}
export interface CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsFallThroughMode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#fall_through_mode_allow CdnLoadbalancer#fall_through_mode_allow}
  */
  readonly fallThroughModeAllow?: boolean | cdktf.IResolvable;
  /**
  * fall_through_mode_custom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#fall_through_mode_custom CdnLoadbalancer#fall_through_mode_custom}
  */
  readonly fallThroughModeCustom?: CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsFallThroughModeFallThroughModeCustom;
}

export function cdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsFallThroughModeToTerraform(struct?: CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsFallThroughModeOutputReference | CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsFallThroughMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fall_through_mode_allow: cdktf.booleanToTerraform(struct!.fallThroughModeAllow),
    fall_through_mode_custom: cdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomToTerraform(struct!.fallThroughModeCustom),
  }
}


export function cdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsFallThroughModeToHclTerraform(struct?: CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsFallThroughModeOutputReference | CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsFallThroughMode): any {
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
      value: cdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomToHclTerraform(struct!.fallThroughModeCustom),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsFallThroughModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsFallThroughMode | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsFallThroughMode | undefined) {
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
  private _fallThroughModeCustom = new CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOutputReference(this, "fall_through_mode_custom");
  public get fallThroughModeCustom() {
    return this._fallThroughModeCustom;
  }
  public putFallThroughModeCustom(value: CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsFallThroughModeFallThroughModeCustom) {
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
export interface CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#allow_additional_headers CdnLoadbalancer#allow_additional_headers}
  */
  readonly allowAdditionalHeaders?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#disallow_additional_headers CdnLoadbalancer#disallow_additional_headers}
  */
  readonly disallowAdditionalHeaders?: boolean | cdktf.IResolvable;
}

export function cdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomHeadersToTerraform(struct?: CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomHeadersOutputReference | CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_additional_headers: cdktf.booleanToTerraform(struct!.allowAdditionalHeaders),
    disallow_additional_headers: cdktf.booleanToTerraform(struct!.disallowAdditionalHeaders),
  }
}


export function cdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomHeadersToHclTerraform(struct?: CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomHeadersOutputReference | CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomHeaders): any {
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

export class CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomHeaders | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomHeaders | undefined) {
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
export interface CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomQueryParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#allow_additional_parameters CdnLoadbalancer#allow_additional_parameters}
  */
  readonly allowAdditionalParameters?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#disallow_additional_parameters CdnLoadbalancer#disallow_additional_parameters}
  */
  readonly disallowAdditionalParameters?: boolean | cdktf.IResolvable;
}

export function cdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomQueryParametersToTerraform(struct?: CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomQueryParametersOutputReference | CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomQueryParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_additional_parameters: cdktf.booleanToTerraform(struct!.allowAdditionalParameters),
    disallow_additional_parameters: cdktf.booleanToTerraform(struct!.disallowAdditionalParameters),
  }
}


export function cdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomQueryParametersToHclTerraform(struct?: CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomQueryParametersOutputReference | CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomQueryParameters): any {
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

export class CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomQueryParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomQueryParameters | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomQueryParameters | undefined) {
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
export interface CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustom {
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#headers CdnLoadbalancer#headers}
  */
  readonly headers?: CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomHeaders;
  /**
  * query_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#query_parameters CdnLoadbalancer#query_parameters}
  */
  readonly queryParameters?: CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomQueryParameters;
}

export function cdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomToTerraform(struct?: CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomOutputReference | CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers: cdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomHeadersToTerraform(struct!.headers),
    query_parameters: cdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomQueryParametersToTerraform(struct!.queryParameters),
  }
}


export function cdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomToHclTerraform(struct?: CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomOutputReference | CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    headers: {
      value: cdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomHeadersToHclTerraform(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomHeadersList",
    },
    query_parameters: {
      value: cdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomQueryParametersToHclTerraform(struct!.queryParameters),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomQueryParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustom | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustom | undefined) {
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
  private _headers = new CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomHeadersOutputReference(this, "headers");
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomHeaders) {
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
  private _queryParameters = new CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomQueryParametersOutputReference(this, "query_parameters");
  public get queryParameters() {
    return this._queryParameters;
  }
  public putQueryParameters(value: CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomQueryParameters) {
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
export interface CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#fail_close CdnLoadbalancer#fail_close}
  */
  readonly failClose?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#fail_open CdnLoadbalancer#fail_open}
  */
  readonly failOpen?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#oversized_body_fail_validation CdnLoadbalancer#oversized_body_fail_validation}
  */
  readonly oversizedBodyFailValidation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#oversized_body_skip_validation CdnLoadbalancer#oversized_body_skip_validation}
  */
  readonly oversizedBodySkipValidation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#property_validation_settings_default CdnLoadbalancer#property_validation_settings_default}
  */
  readonly propertyValidationSettingsDefault?: boolean | cdktf.IResolvable;
  /**
  * property_validation_settings_custom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#property_validation_settings_custom CdnLoadbalancer#property_validation_settings_custom}
  */
  readonly propertyValidationSettingsCustom?: CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustom;
}

export function cdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsSettingsToTerraform(struct?: CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsSettingsOutputReference | CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsSettings): any {
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
    property_validation_settings_custom: cdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomToTerraform(struct!.propertyValidationSettingsCustom),
  }
}


export function cdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsSettingsToHclTerraform(struct?: CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsSettingsOutputReference | CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsSettings): any {
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
      value: cdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomToHclTerraform(struct!.propertyValidationSettingsCustom),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsSettings | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsSettings | undefined) {
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
  private _propertyValidationSettingsCustom = new CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomOutputReference(this, "property_validation_settings_custom");
  public get propertyValidationSettingsCustom() {
    return this._propertyValidationSettingsCustom;
  }
  public putPropertyValidationSettingsCustom(value: CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustom) {
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
export interface CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsValidationModeResponseValidationModeActive {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#enforcement_block CdnLoadbalancer#enforcement_block}
  */
  readonly enforcementBlock?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#enforcement_report CdnLoadbalancer#enforcement_report}
  */
  readonly enforcementReport?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#response_validation_properties CdnLoadbalancer#response_validation_properties}
  */
  readonly responseValidationProperties: string[];
}

export function cdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsValidationModeResponseValidationModeActiveToTerraform(struct?: CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsValidationModeResponseValidationModeActiveOutputReference | CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsValidationModeResponseValidationModeActive): any {
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


export function cdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsValidationModeResponseValidationModeActiveToHclTerraform(struct?: CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsValidationModeResponseValidationModeActiveOutputReference | CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsValidationModeResponseValidationModeActive): any {
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

export class CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsValidationModeResponseValidationModeActiveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsValidationModeResponseValidationModeActive | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsValidationModeResponseValidationModeActive | undefined) {
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
export interface CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsValidationModeValidationModeActive {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#enforcement_block CdnLoadbalancer#enforcement_block}
  */
  readonly enforcementBlock?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#enforcement_report CdnLoadbalancer#enforcement_report}
  */
  readonly enforcementReport?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#request_validation_properties CdnLoadbalancer#request_validation_properties}
  */
  readonly requestValidationProperties: string[];
}

export function cdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsValidationModeValidationModeActiveToTerraform(struct?: CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsValidationModeValidationModeActiveOutputReference | CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsValidationModeValidationModeActive): any {
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


export function cdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsValidationModeValidationModeActiveToHclTerraform(struct?: CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsValidationModeValidationModeActiveOutputReference | CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsValidationModeValidationModeActive): any {
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

export class CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsValidationModeValidationModeActiveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsValidationModeValidationModeActive | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsValidationModeValidationModeActive | undefined) {
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
export interface CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsValidationMode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#skip_response_validation CdnLoadbalancer#skip_response_validation}
  */
  readonly skipResponseValidation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#skip_validation CdnLoadbalancer#skip_validation}
  */
  readonly skipValidation?: boolean | cdktf.IResolvable;
  /**
  * response_validation_mode_active block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#response_validation_mode_active CdnLoadbalancer#response_validation_mode_active}
  */
  readonly responseValidationModeActive?: CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsValidationModeResponseValidationModeActive;
  /**
  * validation_mode_active block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#validation_mode_active CdnLoadbalancer#validation_mode_active}
  */
  readonly validationModeActive?: CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsValidationModeValidationModeActive;
}

export function cdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsValidationModeToTerraform(struct?: CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsValidationModeOutputReference | CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsValidationMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    skip_response_validation: cdktf.booleanToTerraform(struct!.skipResponseValidation),
    skip_validation: cdktf.booleanToTerraform(struct!.skipValidation),
    response_validation_mode_active: cdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsValidationModeResponseValidationModeActiveToTerraform(struct!.responseValidationModeActive),
    validation_mode_active: cdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsValidationModeValidationModeActiveToTerraform(struct!.validationModeActive),
  }
}


export function cdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsValidationModeToHclTerraform(struct?: CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsValidationModeOutputReference | CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsValidationMode): any {
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
      value: cdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsValidationModeResponseValidationModeActiveToHclTerraform(struct!.responseValidationModeActive),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsValidationModeResponseValidationModeActiveList",
    },
    validation_mode_active: {
      value: cdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsValidationModeValidationModeActiveToHclTerraform(struct!.validationModeActive),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsValidationModeValidationModeActiveList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsValidationModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsValidationMode | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsValidationMode | undefined) {
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
  private _responseValidationModeActive = new CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsValidationModeResponseValidationModeActiveOutputReference(this, "response_validation_mode_active");
  public get responseValidationModeActive() {
    return this._responseValidationModeActive;
  }
  public putResponseValidationModeActive(value: CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsValidationModeResponseValidationModeActive) {
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
  private _validationModeActive = new CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsValidationModeValidationModeActiveOutputReference(this, "validation_mode_active");
  public get validationModeActive() {
    return this._validationModeActive;
  }
  public putValidationModeActive(value: CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsValidationModeValidationModeActive) {
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
export interface CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpoints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#oversized_body_fail_validation CdnLoadbalancer#oversized_body_fail_validation}
  */
  readonly oversizedBodyFailValidation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#oversized_body_skip_validation CdnLoadbalancer#oversized_body_skip_validation}
  */
  readonly oversizedBodySkipValidation?: boolean | cdktf.IResolvable;
  /**
  * fall_through_mode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#fall_through_mode CdnLoadbalancer#fall_through_mode}
  */
  readonly fallThroughMode: CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsFallThroughMode;
  /**
  * settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#settings CdnLoadbalancer#settings}
  */
  readonly settings?: CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsSettings;
  /**
  * validation_mode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#validation_mode CdnLoadbalancer#validation_mode}
  */
  readonly validationMode: CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsValidationMode;
}

export function cdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsToTerraform(struct?: CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsOutputReference | CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oversized_body_fail_validation: cdktf.booleanToTerraform(struct!.oversizedBodyFailValidation),
    oversized_body_skip_validation: cdktf.booleanToTerraform(struct!.oversizedBodySkipValidation),
    fall_through_mode: cdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsFallThroughModeToTerraform(struct!.fallThroughMode),
    settings: cdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsSettingsToTerraform(struct!.settings),
    validation_mode: cdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsValidationModeToTerraform(struct!.validationMode),
  }
}


export function cdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsToHclTerraform(struct?: CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsOutputReference | CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpoints): any {
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
      value: cdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsFallThroughModeToHclTerraform(struct!.fallThroughMode),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsFallThroughModeList",
    },
    settings: {
      value: cdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsSettingsToHclTerraform(struct!.settings),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsSettingsList",
    },
    validation_mode: {
      value: cdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsValidationModeToHclTerraform(struct!.validationMode),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsValidationModeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpoints | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpoints | undefined) {
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
  private _fallThroughMode = new CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsFallThroughModeOutputReference(this, "fall_through_mode");
  public get fallThroughMode() {
    return this._fallThroughMode;
  }
  public putFallThroughMode(value: CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsFallThroughMode) {
    this._fallThroughMode.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fallThroughModeInput() {
    return this._fallThroughMode.internalValue;
  }

  // settings - computed: false, optional: true, required: false
  private _settings = new CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsSettings) {
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
  private _validationMode = new CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsValidationModeOutputReference(this, "validation_mode");
  public get validationMode() {
    return this._validationMode;
  }
  public putValidationMode(value: CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsValidationMode) {
    this._validationMode.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get validationModeInput() {
    return this._validationMode.internalValue;
  }
}
export interface CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#methods CdnLoadbalancer#methods}
  */
  readonly methods?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#path CdnLoadbalancer#path}
  */
  readonly path: string;
}

export function cdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpointToTerraform(struct?: CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpointOutputReference | CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.methods),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function cdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpointToHclTerraform(struct?: CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpointOutputReference | CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpoint): any {
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

export class CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpoint | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpoint | undefined) {
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
export interface CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#description CdnLoadbalancer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#disable CdnLoadbalancer#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
}

export function cdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadataToTerraform(struct?: CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadataOutputReference | CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadata): any {
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


export function cdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadataToHclTerraform(struct?: CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadataOutputReference | CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadata): any {
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

export class CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadata | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadata | undefined) {
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
export interface CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#action_block CdnLoadbalancer#action_block}
  */
  readonly actionBlock?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#action_report CdnLoadbalancer#action_report}
  */
  readonly actionReport?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#action_skip CdnLoadbalancer#action_skip}
  */
  readonly actionSkip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#api_group CdnLoadbalancer#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#base_path CdnLoadbalancer#base_path}
  */
  readonly basePath?: string;
  /**
  * api_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#api_endpoint CdnLoadbalancer#api_endpoint}
  */
  readonly apiEndpoint?: CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpoint;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#metadata CdnLoadbalancer#metadata}
  */
  readonly metadata: CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadata;
}

export function cdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesToTerraform(struct?: CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRules | cdktf.IResolvable): any {
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
    api_endpoint: cdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpointToTerraform(struct!.apiEndpoint),
    metadata: cdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadataToTerraform(struct!.metadata),
  }
}


export function cdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesToHclTerraform(struct?: CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRules | cdktf.IResolvable): any {
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
      value: cdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpointToHclTerraform(struct!.apiEndpoint),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpointList",
    },
    metadata: {
      value: cdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRules | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRules | cdktf.IResolvable | undefined) {
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
  private _apiEndpoint = new CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpointOutputReference(this, "api_endpoint");
  public get apiEndpoint() {
    return this._apiEndpoint;
  }
  public putApiEndpoint(value: CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpoint) {
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
  private _metadata = new CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }
}

export class CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRules[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesOutputReference {
    return new CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListFallThroughModeFallThroughModeCustom {
  /**
  * open_api_validation_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#open_api_validation_rules CdnLoadbalancer#open_api_validation_rules}
  */
  readonly openApiValidationRules: CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRules[] | cdktf.IResolvable;
}

export function cdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListFallThroughModeFallThroughModeCustomToTerraform(struct?: CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListFallThroughModeFallThroughModeCustomOutputReference | CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListFallThroughModeFallThroughModeCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    open_api_validation_rules: cdktf.listMapper(cdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesToTerraform, true)(struct!.openApiValidationRules),
  }
}


export function cdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListFallThroughModeFallThroughModeCustomToHclTerraform(struct?: CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListFallThroughModeFallThroughModeCustomOutputReference | CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListFallThroughModeFallThroughModeCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    open_api_validation_rules: {
      value: cdktf.listMapperHcl(cdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesToHclTerraform, true)(struct!.openApiValidationRules),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListFallThroughModeFallThroughModeCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListFallThroughModeFallThroughModeCustom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._openApiValidationRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.openApiValidationRules = this._openApiValidationRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListFallThroughModeFallThroughModeCustom | undefined) {
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
  private _openApiValidationRules = new CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesList(this, "open_api_validation_rules", false);
  public get openApiValidationRules() {
    return this._openApiValidationRules;
  }
  public putOpenApiValidationRules(value: CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRules[] | cdktf.IResolvable) {
    this._openApiValidationRules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get openApiValidationRulesInput() {
    return this._openApiValidationRules.internalValue;
  }
}
export interface CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListFallThroughMode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#fall_through_mode_allow CdnLoadbalancer#fall_through_mode_allow}
  */
  readonly fallThroughModeAllow?: boolean | cdktf.IResolvable;
  /**
  * fall_through_mode_custom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#fall_through_mode_custom CdnLoadbalancer#fall_through_mode_custom}
  */
  readonly fallThroughModeCustom?: CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListFallThroughModeFallThroughModeCustom;
}

export function cdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListFallThroughModeToTerraform(struct?: CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListFallThroughModeOutputReference | CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListFallThroughMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fall_through_mode_allow: cdktf.booleanToTerraform(struct!.fallThroughModeAllow),
    fall_through_mode_custom: cdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListFallThroughModeFallThroughModeCustomToTerraform(struct!.fallThroughModeCustom),
  }
}


export function cdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListFallThroughModeToHclTerraform(struct?: CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListFallThroughModeOutputReference | CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListFallThroughMode): any {
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
      value: cdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListFallThroughModeFallThroughModeCustomToHclTerraform(struct!.fallThroughModeCustom),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListFallThroughModeFallThroughModeCustomList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListFallThroughModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListFallThroughMode | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListFallThroughMode | undefined) {
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
  private _fallThroughModeCustom = new CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListFallThroughModeFallThroughModeCustomOutputReference(this, "fall_through_mode_custom");
  public get fallThroughModeCustom() {
    return this._fallThroughModeCustom;
  }
  public putFallThroughModeCustom(value: CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListFallThroughModeFallThroughModeCustom) {
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
export interface CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesApiEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#methods CdnLoadbalancer#methods}
  */
  readonly methods?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#path CdnLoadbalancer#path}
  */
  readonly path: string;
}

export function cdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesApiEndpointToTerraform(struct?: CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesApiEndpointOutputReference | CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesApiEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.methods),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function cdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesApiEndpointToHclTerraform(struct?: CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesApiEndpointOutputReference | CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesApiEndpoint): any {
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

export class CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesApiEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesApiEndpoint | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesApiEndpoint | undefined) {
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
export interface CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#description CdnLoadbalancer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#disable CdnLoadbalancer#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
}

export function cdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesMetadataToTerraform(struct?: CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesMetadataOutputReference | CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesMetadata): any {
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


export function cdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesMetadataToHclTerraform(struct?: CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesMetadataOutputReference | CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesMetadata): any {
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

export class CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesMetadata | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesMetadata | undefined) {
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
export interface CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesValidationModeResponseValidationModeActive {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#enforcement_block CdnLoadbalancer#enforcement_block}
  */
  readonly enforcementBlock?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#enforcement_report CdnLoadbalancer#enforcement_report}
  */
  readonly enforcementReport?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#response_validation_properties CdnLoadbalancer#response_validation_properties}
  */
  readonly responseValidationProperties: string[];
}

export function cdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesValidationModeResponseValidationModeActiveToTerraform(struct?: CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesValidationModeResponseValidationModeActiveOutputReference | CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesValidationModeResponseValidationModeActive): any {
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


export function cdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesValidationModeResponseValidationModeActiveToHclTerraform(struct?: CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesValidationModeResponseValidationModeActiveOutputReference | CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesValidationModeResponseValidationModeActive): any {
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

export class CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesValidationModeResponseValidationModeActiveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesValidationModeResponseValidationModeActive | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesValidationModeResponseValidationModeActive | undefined) {
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
export interface CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesValidationModeValidationModeActive {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#enforcement_block CdnLoadbalancer#enforcement_block}
  */
  readonly enforcementBlock?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#enforcement_report CdnLoadbalancer#enforcement_report}
  */
  readonly enforcementReport?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#request_validation_properties CdnLoadbalancer#request_validation_properties}
  */
  readonly requestValidationProperties: string[];
}

export function cdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesValidationModeValidationModeActiveToTerraform(struct?: CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesValidationModeValidationModeActiveOutputReference | CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesValidationModeValidationModeActive): any {
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


export function cdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesValidationModeValidationModeActiveToHclTerraform(struct?: CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesValidationModeValidationModeActiveOutputReference | CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesValidationModeValidationModeActive): any {
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

export class CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesValidationModeValidationModeActiveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesValidationModeValidationModeActive | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesValidationModeValidationModeActive | undefined) {
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
export interface CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesValidationMode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#skip_response_validation CdnLoadbalancer#skip_response_validation}
  */
  readonly skipResponseValidation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#skip_validation CdnLoadbalancer#skip_validation}
  */
  readonly skipValidation?: boolean | cdktf.IResolvable;
  /**
  * response_validation_mode_active block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#response_validation_mode_active CdnLoadbalancer#response_validation_mode_active}
  */
  readonly responseValidationModeActive?: CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesValidationModeResponseValidationModeActive;
  /**
  * validation_mode_active block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#validation_mode_active CdnLoadbalancer#validation_mode_active}
  */
  readonly validationModeActive?: CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesValidationModeValidationModeActive;
}

export function cdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesValidationModeToTerraform(struct?: CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesValidationModeOutputReference | CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesValidationMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    skip_response_validation: cdktf.booleanToTerraform(struct!.skipResponseValidation),
    skip_validation: cdktf.booleanToTerraform(struct!.skipValidation),
    response_validation_mode_active: cdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesValidationModeResponseValidationModeActiveToTerraform(struct!.responseValidationModeActive),
    validation_mode_active: cdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesValidationModeValidationModeActiveToTerraform(struct!.validationModeActive),
  }
}


export function cdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesValidationModeToHclTerraform(struct?: CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesValidationModeOutputReference | CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesValidationMode): any {
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
      value: cdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesValidationModeResponseValidationModeActiveToHclTerraform(struct!.responseValidationModeActive),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesValidationModeResponseValidationModeActiveList",
    },
    validation_mode_active: {
      value: cdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesValidationModeValidationModeActiveToHclTerraform(struct!.validationModeActive),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesValidationModeValidationModeActiveList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesValidationModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesValidationMode | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesValidationMode | undefined) {
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
  private _responseValidationModeActive = new CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesValidationModeResponseValidationModeActiveOutputReference(this, "response_validation_mode_active");
  public get responseValidationModeActive() {
    return this._responseValidationModeActive;
  }
  public putResponseValidationModeActive(value: CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesValidationModeResponseValidationModeActive) {
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
  private _validationModeActive = new CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesValidationModeValidationModeActiveOutputReference(this, "validation_mode_active");
  public get validationModeActive() {
    return this._validationModeActive;
  }
  public putValidationModeActive(value: CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesValidationModeValidationModeActive) {
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
export interface CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#any_domain CdnLoadbalancer#any_domain}
  */
  readonly anyDomain?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#api_group CdnLoadbalancer#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#base_path CdnLoadbalancer#base_path}
  */
  readonly basePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#specific_domain CdnLoadbalancer#specific_domain}
  */
  readonly specificDomain?: string;
  /**
  * api_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#api_endpoint CdnLoadbalancer#api_endpoint}
  */
  readonly apiEndpoint?: CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesApiEndpoint;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#metadata CdnLoadbalancer#metadata}
  */
  readonly metadata: CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesMetadata;
  /**
  * validation_mode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#validation_mode CdnLoadbalancer#validation_mode}
  */
  readonly validationMode: CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesValidationMode;
}

export function cdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesToTerraform(struct?: CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_domain: cdktf.booleanToTerraform(struct!.anyDomain),
    api_group: cdktf.stringToTerraform(struct!.apiGroup),
    base_path: cdktf.stringToTerraform(struct!.basePath),
    specific_domain: cdktf.stringToTerraform(struct!.specificDomain),
    api_endpoint: cdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesApiEndpointToTerraform(struct!.apiEndpoint),
    metadata: cdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesMetadataToTerraform(struct!.metadata),
    validation_mode: cdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesValidationModeToTerraform(struct!.validationMode),
  }
}


export function cdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesToHclTerraform(struct?: CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRules | cdktf.IResolvable): any {
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
    api_endpoint: {
      value: cdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesApiEndpointToHclTerraform(struct!.apiEndpoint),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesApiEndpointList",
    },
    metadata: {
      value: cdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesMetadataList",
    },
    validation_mode: {
      value: cdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesValidationModeToHclTerraform(struct!.validationMode),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesValidationModeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRules | cdktf.IResolvable | undefined {
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
    if (this._apiEndpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiEndpoint = this._apiEndpoint?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._validationMode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationMode = this._validationMode?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anyDomain = undefined;
      this._apiGroup = undefined;
      this._basePath = undefined;
      this._specificDomain = undefined;
      this._apiEndpoint.internalValue = undefined;
      this._metadata.internalValue = undefined;
      this._validationMode.internalValue = undefined;
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
      this._apiEndpoint.internalValue = value.apiEndpoint;
      this._metadata.internalValue = value.metadata;
      this._validationMode.internalValue = value.validationMode;
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

  // api_endpoint - computed: false, optional: true, required: false
  private _apiEndpoint = new CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesApiEndpointOutputReference(this, "api_endpoint");
  public get apiEndpoint() {
    return this._apiEndpoint;
  }
  public putApiEndpoint(value: CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesApiEndpoint) {
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
  private _metadata = new CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // validation_mode - computed: false, optional: false, required: true
  private _validationMode = new CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesValidationModeOutputReference(this, "validation_mode");
  public get validationMode() {
    return this._validationMode;
  }
  public putValidationMode(value: CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesValidationMode) {
    this._validationMode.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get validationModeInput() {
    return this._validationMode.internalValue;
  }
}

export class CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRules[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesOutputReference {
    return new CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListSettingsPropertyValidationSettingsCustomHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#allow_additional_headers CdnLoadbalancer#allow_additional_headers}
  */
  readonly allowAdditionalHeaders?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#disallow_additional_headers CdnLoadbalancer#disallow_additional_headers}
  */
  readonly disallowAdditionalHeaders?: boolean | cdktf.IResolvable;
}

export function cdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListSettingsPropertyValidationSettingsCustomHeadersToTerraform(struct?: CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListSettingsPropertyValidationSettingsCustomHeadersOutputReference | CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListSettingsPropertyValidationSettingsCustomHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_additional_headers: cdktf.booleanToTerraform(struct!.allowAdditionalHeaders),
    disallow_additional_headers: cdktf.booleanToTerraform(struct!.disallowAdditionalHeaders),
  }
}


export function cdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListSettingsPropertyValidationSettingsCustomHeadersToHclTerraform(struct?: CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListSettingsPropertyValidationSettingsCustomHeadersOutputReference | CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListSettingsPropertyValidationSettingsCustomHeaders): any {
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

export class CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListSettingsPropertyValidationSettingsCustomHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListSettingsPropertyValidationSettingsCustomHeaders | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListSettingsPropertyValidationSettingsCustomHeaders | undefined) {
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
export interface CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListSettingsPropertyValidationSettingsCustomQueryParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#allow_additional_parameters CdnLoadbalancer#allow_additional_parameters}
  */
  readonly allowAdditionalParameters?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#disallow_additional_parameters CdnLoadbalancer#disallow_additional_parameters}
  */
  readonly disallowAdditionalParameters?: boolean | cdktf.IResolvable;
}

export function cdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListSettingsPropertyValidationSettingsCustomQueryParametersToTerraform(struct?: CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListSettingsPropertyValidationSettingsCustomQueryParametersOutputReference | CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListSettingsPropertyValidationSettingsCustomQueryParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_additional_parameters: cdktf.booleanToTerraform(struct!.allowAdditionalParameters),
    disallow_additional_parameters: cdktf.booleanToTerraform(struct!.disallowAdditionalParameters),
  }
}


export function cdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListSettingsPropertyValidationSettingsCustomQueryParametersToHclTerraform(struct?: CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListSettingsPropertyValidationSettingsCustomQueryParametersOutputReference | CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListSettingsPropertyValidationSettingsCustomQueryParameters): any {
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

export class CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListSettingsPropertyValidationSettingsCustomQueryParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListSettingsPropertyValidationSettingsCustomQueryParameters | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListSettingsPropertyValidationSettingsCustomQueryParameters | undefined) {
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
export interface CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListSettingsPropertyValidationSettingsCustom {
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#headers CdnLoadbalancer#headers}
  */
  readonly headers?: CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListSettingsPropertyValidationSettingsCustomHeaders;
  /**
  * query_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#query_parameters CdnLoadbalancer#query_parameters}
  */
  readonly queryParameters?: CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListSettingsPropertyValidationSettingsCustomQueryParameters;
}

export function cdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListSettingsPropertyValidationSettingsCustomToTerraform(struct?: CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListSettingsPropertyValidationSettingsCustomOutputReference | CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListSettingsPropertyValidationSettingsCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers: cdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListSettingsPropertyValidationSettingsCustomHeadersToTerraform(struct!.headers),
    query_parameters: cdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListSettingsPropertyValidationSettingsCustomQueryParametersToTerraform(struct!.queryParameters),
  }
}


export function cdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListSettingsPropertyValidationSettingsCustomToHclTerraform(struct?: CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListSettingsPropertyValidationSettingsCustomOutputReference | CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListSettingsPropertyValidationSettingsCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    headers: {
      value: cdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListSettingsPropertyValidationSettingsCustomHeadersToHclTerraform(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListSettingsPropertyValidationSettingsCustomHeadersList",
    },
    query_parameters: {
      value: cdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListSettingsPropertyValidationSettingsCustomQueryParametersToHclTerraform(struct!.queryParameters),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListSettingsPropertyValidationSettingsCustomQueryParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListSettingsPropertyValidationSettingsCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListSettingsPropertyValidationSettingsCustom | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListSettingsPropertyValidationSettingsCustom | undefined) {
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
  private _headers = new CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListSettingsPropertyValidationSettingsCustomHeadersOutputReference(this, "headers");
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListSettingsPropertyValidationSettingsCustomHeaders) {
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
  private _queryParameters = new CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListSettingsPropertyValidationSettingsCustomQueryParametersOutputReference(this, "query_parameters");
  public get queryParameters() {
    return this._queryParameters;
  }
  public putQueryParameters(value: CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListSettingsPropertyValidationSettingsCustomQueryParameters) {
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
export interface CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#fail_close CdnLoadbalancer#fail_close}
  */
  readonly failClose?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#fail_open CdnLoadbalancer#fail_open}
  */
  readonly failOpen?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#oversized_body_fail_validation CdnLoadbalancer#oversized_body_fail_validation}
  */
  readonly oversizedBodyFailValidation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#oversized_body_skip_validation CdnLoadbalancer#oversized_body_skip_validation}
  */
  readonly oversizedBodySkipValidation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#property_validation_settings_default CdnLoadbalancer#property_validation_settings_default}
  */
  readonly propertyValidationSettingsDefault?: boolean | cdktf.IResolvable;
  /**
  * property_validation_settings_custom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#property_validation_settings_custom CdnLoadbalancer#property_validation_settings_custom}
  */
  readonly propertyValidationSettingsCustom?: CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListSettingsPropertyValidationSettingsCustom;
}

export function cdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListSettingsToTerraform(struct?: CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListSettingsOutputReference | CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListSettings): any {
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
    property_validation_settings_custom: cdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListSettingsPropertyValidationSettingsCustomToTerraform(struct!.propertyValidationSettingsCustom),
  }
}


export function cdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListSettingsToHclTerraform(struct?: CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListSettingsOutputReference | CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListSettings): any {
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
      value: cdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListSettingsPropertyValidationSettingsCustomToHclTerraform(struct!.propertyValidationSettingsCustom),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListSettingsPropertyValidationSettingsCustomList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListSettings | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListSettings | undefined) {
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
  private _propertyValidationSettingsCustom = new CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListSettingsPropertyValidationSettingsCustomOutputReference(this, "property_validation_settings_custom");
  public get propertyValidationSettingsCustom() {
    return this._propertyValidationSettingsCustom;
  }
  public putPropertyValidationSettingsCustom(value: CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListSettingsPropertyValidationSettingsCustom) {
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
export interface CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#oversized_body_fail_validation CdnLoadbalancer#oversized_body_fail_validation}
  */
  readonly oversizedBodyFailValidation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#oversized_body_skip_validation CdnLoadbalancer#oversized_body_skip_validation}
  */
  readonly oversizedBodySkipValidation?: boolean | cdktf.IResolvable;
  /**
  * fall_through_mode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#fall_through_mode CdnLoadbalancer#fall_through_mode}
  */
  readonly fallThroughMode: CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListFallThroughMode;
  /**
  * open_api_validation_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#open_api_validation_rules CdnLoadbalancer#open_api_validation_rules}
  */
  readonly openApiValidationRules: CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRules[] | cdktf.IResolvable;
  /**
  * settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#settings CdnLoadbalancer#settings}
  */
  readonly settings?: CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListSettings;
}

export function cdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListStructToTerraform(struct?: CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListStructOutputReference | CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oversized_body_fail_validation: cdktf.booleanToTerraform(struct!.oversizedBodyFailValidation),
    oversized_body_skip_validation: cdktf.booleanToTerraform(struct!.oversizedBodySkipValidation),
    fall_through_mode: cdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListFallThroughModeToTerraform(struct!.fallThroughMode),
    open_api_validation_rules: cdktf.listMapper(cdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesToTerraform, true)(struct!.openApiValidationRules),
    settings: cdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListSettingsToTerraform(struct!.settings),
  }
}


export function cdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListStructToHclTerraform(struct?: CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListStructOutputReference | CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListStruct): any {
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
      value: cdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListFallThroughModeToHclTerraform(struct!.fallThroughMode),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListFallThroughModeList",
    },
    open_api_validation_rules: {
      value: cdktf.listMapperHcl(cdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesToHclTerraform, true)(struct!.openApiValidationRules),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesList",
    },
    settings: {
      value: cdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListSettingsToHclTerraform(struct!.settings),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListStruct | undefined {
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
    if (this._openApiValidationRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.openApiValidationRules = this._openApiValidationRules?.internalValue;
    }
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oversizedBodyFailValidation = undefined;
      this._oversizedBodySkipValidation = undefined;
      this._fallThroughMode.internalValue = undefined;
      this._openApiValidationRules.internalValue = undefined;
      this._settings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oversizedBodyFailValidation = value.oversizedBodyFailValidation;
      this._oversizedBodySkipValidation = value.oversizedBodySkipValidation;
      this._fallThroughMode.internalValue = value.fallThroughMode;
      this._openApiValidationRules.internalValue = value.openApiValidationRules;
      this._settings.internalValue = value.settings;
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
  private _fallThroughMode = new CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListFallThroughModeOutputReference(this, "fall_through_mode");
  public get fallThroughMode() {
    return this._fallThroughMode;
  }
  public putFallThroughMode(value: CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListFallThroughMode) {
    this._fallThroughMode.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fallThroughModeInput() {
    return this._fallThroughMode.internalValue;
  }

  // open_api_validation_rules - computed: false, optional: false, required: true
  private _openApiValidationRules = new CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRulesList(this, "open_api_validation_rules", false);
  public get openApiValidationRules() {
    return this._openApiValidationRules;
  }
  public putOpenApiValidationRules(value: CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListOpenApiValidationRules[] | cdktf.IResolvable) {
    this._openApiValidationRules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get openApiValidationRulesInput() {
    return this._openApiValidationRules.internalValue;
  }

  // settings - computed: false, optional: true, required: false
  private _settings = new CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }
}
export interface CdnLoadbalancerApiSpecificationOnCacheMiss {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#validation_disabled CdnLoadbalancer#validation_disabled}
  */
  readonly validationDisabled?: boolean | cdktf.IResolvable;
  /**
  * api_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#api_definition CdnLoadbalancer#api_definition}
  */
  readonly apiDefinition: CdnLoadbalancerApiSpecificationOnCacheMissApiDefinition;
  /**
  * validation_all_spec_endpoints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#validation_all_spec_endpoints CdnLoadbalancer#validation_all_spec_endpoints}
  */
  readonly validationAllSpecEndpoints?: CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpoints;
  /**
  * validation_custom_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#validation_custom_list CdnLoadbalancer#validation_custom_list}
  */
  readonly validationCustomList?: CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListStruct;
}

export function cdnLoadbalancerApiSpecificationOnCacheMissToTerraform(struct?: CdnLoadbalancerApiSpecificationOnCacheMissOutputReference | CdnLoadbalancerApiSpecificationOnCacheMiss): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    validation_disabled: cdktf.booleanToTerraform(struct!.validationDisabled),
    api_definition: cdnLoadbalancerApiSpecificationOnCacheMissApiDefinitionToTerraform(struct!.apiDefinition),
    validation_all_spec_endpoints: cdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsToTerraform(struct!.validationAllSpecEndpoints),
    validation_custom_list: cdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListStructToTerraform(struct!.validationCustomList),
  }
}


export function cdnLoadbalancerApiSpecificationOnCacheMissToHclTerraform(struct?: CdnLoadbalancerApiSpecificationOnCacheMissOutputReference | CdnLoadbalancerApiSpecificationOnCacheMiss): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    validation_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.validationDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    api_definition: {
      value: cdnLoadbalancerApiSpecificationOnCacheMissApiDefinitionToHclTerraform(struct!.apiDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiSpecificationOnCacheMissApiDefinitionList",
    },
    validation_all_spec_endpoints: {
      value: cdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsToHclTerraform(struct!.validationAllSpecEndpoints),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsList",
    },
    validation_custom_list: {
      value: cdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListStructToHclTerraform(struct!.validationCustomList),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiSpecificationOnCacheMissOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiSpecificationOnCacheMiss | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._validationDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationDisabled = this._validationDisabled;
    }
    if (this._apiDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiDefinition = this._apiDefinition?.internalValue;
    }
    if (this._validationAllSpecEndpoints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationAllSpecEndpoints = this._validationAllSpecEndpoints?.internalValue;
    }
    if (this._validationCustomList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationCustomList = this._validationCustomList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiSpecificationOnCacheMiss | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._validationDisabled = undefined;
      this._apiDefinition.internalValue = undefined;
      this._validationAllSpecEndpoints.internalValue = undefined;
      this._validationCustomList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._validationDisabled = value.validationDisabled;
      this._apiDefinition.internalValue = value.apiDefinition;
      this._validationAllSpecEndpoints.internalValue = value.validationAllSpecEndpoints;
      this._validationCustomList.internalValue = value.validationCustomList;
    }
  }

  // validation_disabled - computed: false, optional: true, required: false
  private _validationDisabled?: boolean | cdktf.IResolvable; 
  public get validationDisabled() {
    return this.getBooleanAttribute('validation_disabled');
  }
  public set validationDisabled(value: boolean | cdktf.IResolvable) {
    this._validationDisabled = value;
  }
  public resetValidationDisabled() {
    this._validationDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationDisabledInput() {
    return this._validationDisabled;
  }

  // api_definition - computed: false, optional: false, required: true
  private _apiDefinition = new CdnLoadbalancerApiSpecificationOnCacheMissApiDefinitionOutputReference(this, "api_definition");
  public get apiDefinition() {
    return this._apiDefinition;
  }
  public putApiDefinition(value: CdnLoadbalancerApiSpecificationOnCacheMissApiDefinition) {
    this._apiDefinition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiDefinitionInput() {
    return this._apiDefinition.internalValue;
  }

  // validation_all_spec_endpoints - computed: false, optional: true, required: false
  private _validationAllSpecEndpoints = new CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpointsOutputReference(this, "validation_all_spec_endpoints");
  public get validationAllSpecEndpoints() {
    return this._validationAllSpecEndpoints;
  }
  public putValidationAllSpecEndpoints(value: CdnLoadbalancerApiSpecificationOnCacheMissValidationAllSpecEndpoints) {
    this._validationAllSpecEndpoints.internalValue = value;
  }
  public resetValidationAllSpecEndpoints() {
    this._validationAllSpecEndpoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationAllSpecEndpointsInput() {
    return this._validationAllSpecEndpoints.internalValue;
  }

  // validation_custom_list - computed: false, optional: true, required: false
  private _validationCustomList = new CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListStructOutputReference(this, "validation_custom_list");
  public get validationCustomList() {
    return this._validationCustomList;
  }
  public putValidationCustomList(value: CdnLoadbalancerApiSpecificationOnCacheMissValidationCustomListStruct) {
    this._validationCustomList.internalValue = value;
  }
  public resetValidationCustomList() {
    this._validationCustomList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationCustomListInput() {
    return this._validationCustomList.internalValue;
  }
}
export interface CdnLoadbalancerAppFirewall {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#namespace CdnLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#tenant CdnLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function cdnLoadbalancerAppFirewallToTerraform(struct?: CdnLoadbalancerAppFirewallOutputReference | CdnLoadbalancerAppFirewall): any {
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


export function cdnLoadbalancerAppFirewallToHclTerraform(struct?: CdnLoadbalancerAppFirewallOutputReference | CdnLoadbalancerAppFirewall): any {
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

export class CdnLoadbalancerAppFirewallOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerAppFirewall | undefined {
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

  public set internalValue(value: CdnLoadbalancerAppFirewall | undefined) {
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
export interface CdnLoadbalancerAppFirewallOnCacheMiss {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#namespace CdnLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#tenant CdnLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function cdnLoadbalancerAppFirewallOnCacheMissToTerraform(struct?: CdnLoadbalancerAppFirewallOnCacheMissOutputReference | CdnLoadbalancerAppFirewallOnCacheMiss): any {
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


export function cdnLoadbalancerAppFirewallOnCacheMissToHclTerraform(struct?: CdnLoadbalancerAppFirewallOnCacheMissOutputReference | CdnLoadbalancerAppFirewallOnCacheMiss): any {
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

export class CdnLoadbalancerAppFirewallOnCacheMissOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerAppFirewallOnCacheMiss | undefined {
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

  public set internalValue(value: CdnLoadbalancerAppFirewallOnCacheMiss | undefined) {
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
export interface CdnLoadbalancerBlockedClientsHttpHeaderHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#exact CdnLoadbalancer#exact}
  */
  readonly exact?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#invert_match CdnLoadbalancer#invert_match}
  */
  readonly invertMatch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#presence CdnLoadbalancer#presence}
  */
  readonly presence?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#regex CdnLoadbalancer#regex}
  */
  readonly regex?: string;
}

export function cdnLoadbalancerBlockedClientsHttpHeaderHeadersToTerraform(struct?: CdnLoadbalancerBlockedClientsHttpHeaderHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.stringToTerraform(struct!.exact),
    invert_match: cdktf.booleanToTerraform(struct!.invertMatch),
    name: cdktf.stringToTerraform(struct!.name),
    presence: cdktf.booleanToTerraform(struct!.presence),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function cdnLoadbalancerBlockedClientsHttpHeaderHeadersToHclTerraform(struct?: CdnLoadbalancerBlockedClientsHttpHeaderHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    invert_match: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatch),
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
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerBlockedClientsHttpHeaderHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerBlockedClientsHttpHeaderHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._invertMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatch = this._invertMatch;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._presence !== undefined) {
      hasAnyValues = true;
      internalValueResult.presence = this._presence;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerBlockedClientsHttpHeaderHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exact = undefined;
      this._invertMatch = undefined;
      this._name = undefined;
      this._presence = undefined;
      this._regex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exact = value.exact;
      this._invertMatch = value.invertMatch;
      this._name = value.name;
      this._presence = value.presence;
      this._regex = value.regex;
    }
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
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

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}

export class CdnLoadbalancerBlockedClientsHttpHeaderHeadersList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerBlockedClientsHttpHeaderHeaders[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerBlockedClientsHttpHeaderHeadersOutputReference {
    return new CdnLoadbalancerBlockedClientsHttpHeaderHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerBlockedClientsHttpHeader {
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#headers CdnLoadbalancer#headers}
  */
  readonly headers: CdnLoadbalancerBlockedClientsHttpHeaderHeaders[] | cdktf.IResolvable;
}

export function cdnLoadbalancerBlockedClientsHttpHeaderToTerraform(struct?: CdnLoadbalancerBlockedClientsHttpHeaderOutputReference | CdnLoadbalancerBlockedClientsHttpHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers: cdktf.listMapper(cdnLoadbalancerBlockedClientsHttpHeaderHeadersToTerraform, true)(struct!.headers),
  }
}


export function cdnLoadbalancerBlockedClientsHttpHeaderToHclTerraform(struct?: CdnLoadbalancerBlockedClientsHttpHeaderOutputReference | CdnLoadbalancerBlockedClientsHttpHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    headers: {
      value: cdktf.listMapperHcl(cdnLoadbalancerBlockedClientsHttpHeaderHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerBlockedClientsHttpHeaderHeadersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerBlockedClientsHttpHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerBlockedClientsHttpHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerBlockedClientsHttpHeader | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headers.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headers.internalValue = value.headers;
    }
  }

  // headers - computed: false, optional: false, required: true
  private _headers = new CdnLoadbalancerBlockedClientsHttpHeaderHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: CdnLoadbalancerBlockedClientsHttpHeaderHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }
}
export interface CdnLoadbalancerBlockedClientsMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#description CdnLoadbalancer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#disable CdnLoadbalancer#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
}

export function cdnLoadbalancerBlockedClientsMetadataToTerraform(struct?: CdnLoadbalancerBlockedClientsMetadataOutputReference | CdnLoadbalancerBlockedClientsMetadata): any {
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


export function cdnLoadbalancerBlockedClientsMetadataToHclTerraform(struct?: CdnLoadbalancerBlockedClientsMetadataOutputReference | CdnLoadbalancerBlockedClientsMetadata): any {
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

export class CdnLoadbalancerBlockedClientsMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerBlockedClientsMetadata | undefined {
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

  public set internalValue(value: CdnLoadbalancerBlockedClientsMetadata | undefined) {
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
export interface CdnLoadbalancerBlockedClients {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#actions CdnLoadbalancer#actions}
  */
  readonly actions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#as_number CdnLoadbalancer#as_number}
  */
  readonly asNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#bot_skip_processing CdnLoadbalancer#bot_skip_processing}
  */
  readonly botSkipProcessing?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#expiration_timestamp CdnLoadbalancer#expiration_timestamp}
  */
  readonly expirationTimestamp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#ip_prefix CdnLoadbalancer#ip_prefix}
  */
  readonly ipPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#ipv6_prefix CdnLoadbalancer#ipv6_prefix}
  */
  readonly ipv6Prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#skip_processing CdnLoadbalancer#skip_processing}
  */
  readonly skipProcessing?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#user_identifier CdnLoadbalancer#user_identifier}
  */
  readonly userIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#waf_skip_processing CdnLoadbalancer#waf_skip_processing}
  */
  readonly wafSkipProcessing?: boolean | cdktf.IResolvable;
  /**
  * http_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#http_header CdnLoadbalancer#http_header}
  */
  readonly httpHeader?: CdnLoadbalancerBlockedClientsHttpHeader;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#metadata CdnLoadbalancer#metadata}
  */
  readonly metadata: CdnLoadbalancerBlockedClientsMetadata;
}

export function cdnLoadbalancerBlockedClientsToTerraform(struct?: CdnLoadbalancerBlockedClients | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.actions),
    as_number: cdktf.numberToTerraform(struct!.asNumber),
    bot_skip_processing: cdktf.booleanToTerraform(struct!.botSkipProcessing),
    expiration_timestamp: cdktf.stringToTerraform(struct!.expirationTimestamp),
    ip_prefix: cdktf.stringToTerraform(struct!.ipPrefix),
    ipv6_prefix: cdktf.stringToTerraform(struct!.ipv6Prefix),
    skip_processing: cdktf.booleanToTerraform(struct!.skipProcessing),
    user_identifier: cdktf.stringToTerraform(struct!.userIdentifier),
    waf_skip_processing: cdktf.booleanToTerraform(struct!.wafSkipProcessing),
    http_header: cdnLoadbalancerBlockedClientsHttpHeaderToTerraform(struct!.httpHeader),
    metadata: cdnLoadbalancerBlockedClientsMetadataToTerraform(struct!.metadata),
  }
}


export function cdnLoadbalancerBlockedClientsToHclTerraform(struct?: CdnLoadbalancerBlockedClients | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.actions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    as_number: {
      value: cdktf.numberToHclTerraform(struct!.asNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bot_skip_processing: {
      value: cdktf.booleanToHclTerraform(struct!.botSkipProcessing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    expiration_timestamp: {
      value: cdktf.stringToHclTerraform(struct!.expirationTimestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_prefix: {
      value: cdktf.stringToHclTerraform(struct!.ipPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_prefix: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_processing: {
      value: cdktf.booleanToHclTerraform(struct!.skipProcessing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_identifier: {
      value: cdktf.stringToHclTerraform(struct!.userIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    waf_skip_processing: {
      value: cdktf.booleanToHclTerraform(struct!.wafSkipProcessing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    http_header: {
      value: cdnLoadbalancerBlockedClientsHttpHeaderToHclTerraform(struct!.httpHeader),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerBlockedClientsHttpHeaderList",
    },
    metadata: {
      value: cdnLoadbalancerBlockedClientsMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerBlockedClientsMetadataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerBlockedClientsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerBlockedClients | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions;
    }
    if (this._asNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.asNumber = this._asNumber;
    }
    if (this._botSkipProcessing !== undefined) {
      hasAnyValues = true;
      internalValueResult.botSkipProcessing = this._botSkipProcessing;
    }
    if (this._expirationTimestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationTimestamp = this._expirationTimestamp;
    }
    if (this._ipPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPrefix = this._ipPrefix;
    }
    if (this._ipv6Prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Prefix = this._ipv6Prefix;
    }
    if (this._skipProcessing !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipProcessing = this._skipProcessing;
    }
    if (this._userIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.userIdentifier = this._userIdentifier;
    }
    if (this._wafSkipProcessing !== undefined) {
      hasAnyValues = true;
      internalValueResult.wafSkipProcessing = this._wafSkipProcessing;
    }
    if (this._httpHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeader = this._httpHeader?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerBlockedClients | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actions = undefined;
      this._asNumber = undefined;
      this._botSkipProcessing = undefined;
      this._expirationTimestamp = undefined;
      this._ipPrefix = undefined;
      this._ipv6Prefix = undefined;
      this._skipProcessing = undefined;
      this._userIdentifier = undefined;
      this._wafSkipProcessing = undefined;
      this._httpHeader.internalValue = undefined;
      this._metadata.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actions = value.actions;
      this._asNumber = value.asNumber;
      this._botSkipProcessing = value.botSkipProcessing;
      this._expirationTimestamp = value.expirationTimestamp;
      this._ipPrefix = value.ipPrefix;
      this._ipv6Prefix = value.ipv6Prefix;
      this._skipProcessing = value.skipProcessing;
      this._userIdentifier = value.userIdentifier;
      this._wafSkipProcessing = value.wafSkipProcessing;
      this._httpHeader.internalValue = value.httpHeader;
      this._metadata.internalValue = value.metadata;
    }
  }

  // actions - computed: false, optional: true, required: false
  private _actions?: string[]; 
  public get actions() {
    return this.getListAttribute('actions');
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  public resetActions() {
    this._actions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }

  // as_number - computed: false, optional: true, required: false
  private _asNumber?: number; 
  public get asNumber() {
    return this.getNumberAttribute('as_number');
  }
  public set asNumber(value: number) {
    this._asNumber = value;
  }
  public resetAsNumber() {
    this._asNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asNumberInput() {
    return this._asNumber;
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

  // ip_prefix - computed: false, optional: true, required: false
  private _ipPrefix?: string; 
  public get ipPrefix() {
    return this.getStringAttribute('ip_prefix');
  }
  public set ipPrefix(value: string) {
    this._ipPrefix = value;
  }
  public resetIpPrefix() {
    this._ipPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPrefixInput() {
    return this._ipPrefix;
  }

  // ipv6_prefix - computed: false, optional: true, required: false
  private _ipv6Prefix?: string; 
  public get ipv6Prefix() {
    return this.getStringAttribute('ipv6_prefix');
  }
  public set ipv6Prefix(value: string) {
    this._ipv6Prefix = value;
  }
  public resetIpv6Prefix() {
    this._ipv6Prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixInput() {
    return this._ipv6Prefix;
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

  // user_identifier - computed: false, optional: true, required: false
  private _userIdentifier?: string; 
  public get userIdentifier() {
    return this.getStringAttribute('user_identifier');
  }
  public set userIdentifier(value: string) {
    this._userIdentifier = value;
  }
  public resetUserIdentifier() {
    this._userIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdentifierInput() {
    return this._userIdentifier;
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

  // http_header - computed: false, optional: true, required: false
  private _httpHeader = new CdnLoadbalancerBlockedClientsHttpHeaderOutputReference(this, "http_header");
  public get httpHeader() {
    return this._httpHeader;
  }
  public putHttpHeader(value: CdnLoadbalancerBlockedClientsHttpHeader) {
    this._httpHeader.internalValue = value;
  }
  public resetHttpHeader() {
    this._httpHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeaderInput() {
    return this._httpHeader.internalValue;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new CdnLoadbalancerBlockedClientsMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: CdnLoadbalancerBlockedClientsMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }
}

export class CdnLoadbalancerBlockedClientsList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerBlockedClients[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerBlockedClientsOutputReference {
    return new CdnLoadbalancerBlockedClientsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerBotDefensePolicyJsInsertAllPages {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#javascript_location CdnLoadbalancer#javascript_location}
  */
  readonly javascriptLocation?: string;
}

export function cdnLoadbalancerBotDefensePolicyJsInsertAllPagesToTerraform(struct?: CdnLoadbalancerBotDefensePolicyJsInsertAllPagesOutputReference | CdnLoadbalancerBotDefensePolicyJsInsertAllPages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    javascript_location: cdktf.stringToTerraform(struct!.javascriptLocation),
  }
}


export function cdnLoadbalancerBotDefensePolicyJsInsertAllPagesToHclTerraform(struct?: CdnLoadbalancerBotDefensePolicyJsInsertAllPagesOutputReference | CdnLoadbalancerBotDefensePolicyJsInsertAllPages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    javascript_location: {
      value: cdktf.stringToHclTerraform(struct!.javascriptLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerBotDefensePolicyJsInsertAllPagesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerBotDefensePolicyJsInsertAllPages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._javascriptLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.javascriptLocation = this._javascriptLocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerBotDefensePolicyJsInsertAllPages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._javascriptLocation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._javascriptLocation = value.javascriptLocation;
    }
  }

  // javascript_location - computed: false, optional: true, required: false
  private _javascriptLocation?: string; 
  public get javascriptLocation() {
    return this.getStringAttribute('javascript_location');
  }
  public set javascriptLocation(value: string) {
    this._javascriptLocation = value;
  }
  public resetJavascriptLocation() {
    this._javascriptLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get javascriptLocationInput() {
    return this._javascriptLocation;
  }
}
export interface CdnLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListDomain {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#exact_value CdnLoadbalancer#exact_value}
  */
  readonly exactValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#regex_value CdnLoadbalancer#regex_value}
  */
  readonly regexValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#suffix_value CdnLoadbalancer#suffix_value}
  */
  readonly suffixValue?: string;
}

export function cdnLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListDomainToTerraform(struct?: CdnLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListDomainOutputReference | CdnLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListDomain): any {
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


export function cdnLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListDomainToHclTerraform(struct?: CdnLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListDomainOutputReference | CdnLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListDomain): any {
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

export class CdnLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListDomainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListDomain | undefined {
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

  public set internalValue(value: CdnLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListDomain | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValue = undefined;
      this._regexValue = undefined;
      this._suffixValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface CdnLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#description CdnLoadbalancer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#disable CdnLoadbalancer#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
}

export function cdnLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListMetadataToTerraform(struct?: CdnLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListMetadataOutputReference | CdnLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListMetadata): any {
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


export function cdnLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListMetadataToHclTerraform(struct?: CdnLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListMetadataOutputReference | CdnLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListMetadata): any {
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

export class CdnLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListMetadata | undefined {
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

  public set internalValue(value: CdnLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListMetadata | undefined) {
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
export interface CdnLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#path CdnLoadbalancer#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#prefix CdnLoadbalancer#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#regex CdnLoadbalancer#regex}
  */
  readonly regex?: string;
}

export function cdnLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListPathToTerraform(struct?: CdnLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListPathOutputReference | CdnLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function cdnLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListPathToHclTerraform(struct?: CdnLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListPathOutputReference | CdnLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._path = undefined;
      this._prefix = undefined;
      this._regex = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._path = value.path;
      this._prefix = value.prefix;
      this._regex = value.regex;
    }
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}
export interface CdnLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#any_domain CdnLoadbalancer#any_domain}
  */
  readonly anyDomain?: boolean | cdktf.IResolvable;
  /**
  * domain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#domain CdnLoadbalancer#domain}
  */
  readonly domain?: CdnLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListDomain;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#metadata CdnLoadbalancer#metadata}
  */
  readonly metadata: CdnLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListMetadata;
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#path CdnLoadbalancer#path}
  */
  readonly path: CdnLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListPath;
}

export function cdnLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListStructToTerraform(struct?: CdnLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_domain: cdktf.booleanToTerraform(struct!.anyDomain),
    domain: cdnLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListDomainToTerraform(struct!.domain),
    metadata: cdnLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListMetadataToTerraform(struct!.metadata),
    path: cdnLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListPathToTerraform(struct!.path),
  }
}


export function cdnLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListStructToHclTerraform(struct?: CdnLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListStruct | cdktf.IResolvable): any {
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
    domain: {
      value: cdnLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListDomainToHclTerraform(struct!.domain),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListDomainList",
    },
    metadata: {
      value: cdnLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListMetadataList",
    },
    path: {
      value: cdnLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListPathToHclTerraform(struct!.path),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListPathList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyDomain = this._anyDomain;
    }
    if (this._domain?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anyDomain = undefined;
      this._domain.internalValue = undefined;
      this._metadata.internalValue = undefined;
      this._path.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anyDomain = value.anyDomain;
      this._domain.internalValue = value.domain;
      this._metadata.internalValue = value.metadata;
      this._path.internalValue = value.path;
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

  // domain - computed: false, optional: true, required: false
  private _domain = new CdnLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListDomainOutputReference(this, "domain");
  public get domain() {
    return this._domain;
  }
  public putDomain(value: CdnLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListDomain) {
    this._domain.internalValue = value;
  }
  public resetDomain() {
    this._domain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain.internalValue;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new CdnLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: CdnLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // path - computed: false, optional: false, required: true
  private _path = new CdnLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListPathOutputReference(this, "path");
  public get path() {
    return this._path;
  }
  public putPath(value: CdnLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListPath) {
    this._path.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
  }
}

export class CdnLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListStructList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListStruct[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListStructOutputReference {
    return new CdnLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerBotDefensePolicyJsInsertAllPagesExcept {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#javascript_location CdnLoadbalancer#javascript_location}
  */
  readonly javascriptLocation?: string;
  /**
  * exclude_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#exclude_list CdnLoadbalancer#exclude_list}
  */
  readonly excludeList?: CdnLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListStruct[] | cdktf.IResolvable;
}

export function cdnLoadbalancerBotDefensePolicyJsInsertAllPagesExceptToTerraform(struct?: CdnLoadbalancerBotDefensePolicyJsInsertAllPagesExceptOutputReference | CdnLoadbalancerBotDefensePolicyJsInsertAllPagesExcept): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    javascript_location: cdktf.stringToTerraform(struct!.javascriptLocation),
    exclude_list: cdktf.listMapper(cdnLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListStructToTerraform, true)(struct!.excludeList),
  }
}


export function cdnLoadbalancerBotDefensePolicyJsInsertAllPagesExceptToHclTerraform(struct?: CdnLoadbalancerBotDefensePolicyJsInsertAllPagesExceptOutputReference | CdnLoadbalancerBotDefensePolicyJsInsertAllPagesExcept): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    javascript_location: {
      value: cdktf.stringToHclTerraform(struct!.javascriptLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_list: {
      value: cdktf.listMapperHcl(cdnLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListStructToHclTerraform, true)(struct!.excludeList),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerBotDefensePolicyJsInsertAllPagesExceptOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerBotDefensePolicyJsInsertAllPagesExcept | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._javascriptLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.javascriptLocation = this._javascriptLocation;
    }
    if (this._excludeList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeList = this._excludeList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerBotDefensePolicyJsInsertAllPagesExcept | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._javascriptLocation = undefined;
      this._excludeList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._javascriptLocation = value.javascriptLocation;
      this._excludeList.internalValue = value.excludeList;
    }
  }

  // javascript_location - computed: false, optional: true, required: false
  private _javascriptLocation?: string; 
  public get javascriptLocation() {
    return this.getStringAttribute('javascript_location');
  }
  public set javascriptLocation(value: string) {
    this._javascriptLocation = value;
  }
  public resetJavascriptLocation() {
    this._javascriptLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get javascriptLocationInput() {
    return this._javascriptLocation;
  }

  // exclude_list - computed: false, optional: true, required: false
  private _excludeList = new CdnLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListStructList(this, "exclude_list", false);
  public get excludeList() {
    return this._excludeList;
  }
  public putExcludeList(value: CdnLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListStruct[] | cdktf.IResolvable) {
    this._excludeList.internalValue = value;
  }
  public resetExcludeList() {
    this._excludeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeListInput() {
    return this._excludeList.internalValue;
  }
}
export interface CdnLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListDomain {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#exact_value CdnLoadbalancer#exact_value}
  */
  readonly exactValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#regex_value CdnLoadbalancer#regex_value}
  */
  readonly regexValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#suffix_value CdnLoadbalancer#suffix_value}
  */
  readonly suffixValue?: string;
}

export function cdnLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListDomainToTerraform(struct?: CdnLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListDomainOutputReference | CdnLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListDomain): any {
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


export function cdnLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListDomainToHclTerraform(struct?: CdnLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListDomainOutputReference | CdnLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListDomain): any {
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

export class CdnLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListDomainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListDomain | undefined {
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

  public set internalValue(value: CdnLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListDomain | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValue = undefined;
      this._regexValue = undefined;
      this._suffixValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface CdnLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#description CdnLoadbalancer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#disable CdnLoadbalancer#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
}

export function cdnLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListMetadataToTerraform(struct?: CdnLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListMetadataOutputReference | CdnLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListMetadata): any {
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


export function cdnLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListMetadataToHclTerraform(struct?: CdnLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListMetadataOutputReference | CdnLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListMetadata): any {
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

export class CdnLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListMetadata | undefined {
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

  public set internalValue(value: CdnLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListMetadata | undefined) {
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
export interface CdnLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#path CdnLoadbalancer#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#prefix CdnLoadbalancer#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#regex CdnLoadbalancer#regex}
  */
  readonly regex?: string;
}

export function cdnLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListPathToTerraform(struct?: CdnLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListPathOutputReference | CdnLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function cdnLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListPathToHclTerraform(struct?: CdnLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListPathOutputReference | CdnLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._path = undefined;
      this._prefix = undefined;
      this._regex = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._path = value.path;
      this._prefix = value.prefix;
      this._regex = value.regex;
    }
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}
export interface CdnLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#any_domain CdnLoadbalancer#any_domain}
  */
  readonly anyDomain?: boolean | cdktf.IResolvable;
  /**
  * domain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#domain CdnLoadbalancer#domain}
  */
  readonly domain?: CdnLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListDomain;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#metadata CdnLoadbalancer#metadata}
  */
  readonly metadata: CdnLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListMetadata;
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#path CdnLoadbalancer#path}
  */
  readonly path: CdnLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListPath;
}

export function cdnLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListStructToTerraform(struct?: CdnLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_domain: cdktf.booleanToTerraform(struct!.anyDomain),
    domain: cdnLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListDomainToTerraform(struct!.domain),
    metadata: cdnLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListMetadataToTerraform(struct!.metadata),
    path: cdnLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListPathToTerraform(struct!.path),
  }
}


export function cdnLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListStructToHclTerraform(struct?: CdnLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListStruct | cdktf.IResolvable): any {
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
    domain: {
      value: cdnLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListDomainToHclTerraform(struct!.domain),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListDomainList",
    },
    metadata: {
      value: cdnLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListMetadataList",
    },
    path: {
      value: cdnLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListPathToHclTerraform(struct!.path),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListPathList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyDomain = this._anyDomain;
    }
    if (this._domain?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anyDomain = undefined;
      this._domain.internalValue = undefined;
      this._metadata.internalValue = undefined;
      this._path.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anyDomain = value.anyDomain;
      this._domain.internalValue = value.domain;
      this._metadata.internalValue = value.metadata;
      this._path.internalValue = value.path;
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

  // domain - computed: false, optional: true, required: false
  private _domain = new CdnLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListDomainOutputReference(this, "domain");
  public get domain() {
    return this._domain;
  }
  public putDomain(value: CdnLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListDomain) {
    this._domain.internalValue = value;
  }
  public resetDomain() {
    this._domain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain.internalValue;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new CdnLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: CdnLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // path - computed: false, optional: false, required: true
  private _path = new CdnLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListPathOutputReference(this, "path");
  public get path() {
    return this._path;
  }
  public putPath(value: CdnLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListPath) {
    this._path.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
  }
}

export class CdnLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListStructList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListStruct[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListStructOutputReference {
    return new CdnLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerBotDefensePolicyJsInsertionRulesRulesDomain {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#exact_value CdnLoadbalancer#exact_value}
  */
  readonly exactValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#regex_value CdnLoadbalancer#regex_value}
  */
  readonly regexValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#suffix_value CdnLoadbalancer#suffix_value}
  */
  readonly suffixValue?: string;
}

export function cdnLoadbalancerBotDefensePolicyJsInsertionRulesRulesDomainToTerraform(struct?: CdnLoadbalancerBotDefensePolicyJsInsertionRulesRulesDomainOutputReference | CdnLoadbalancerBotDefensePolicyJsInsertionRulesRulesDomain): any {
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


export function cdnLoadbalancerBotDefensePolicyJsInsertionRulesRulesDomainToHclTerraform(struct?: CdnLoadbalancerBotDefensePolicyJsInsertionRulesRulesDomainOutputReference | CdnLoadbalancerBotDefensePolicyJsInsertionRulesRulesDomain): any {
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

export class CdnLoadbalancerBotDefensePolicyJsInsertionRulesRulesDomainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerBotDefensePolicyJsInsertionRulesRulesDomain | undefined {
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

  public set internalValue(value: CdnLoadbalancerBotDefensePolicyJsInsertionRulesRulesDomain | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValue = undefined;
      this._regexValue = undefined;
      this._suffixValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface CdnLoadbalancerBotDefensePolicyJsInsertionRulesRulesMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#description CdnLoadbalancer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#disable CdnLoadbalancer#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
}

export function cdnLoadbalancerBotDefensePolicyJsInsertionRulesRulesMetadataToTerraform(struct?: CdnLoadbalancerBotDefensePolicyJsInsertionRulesRulesMetadataOutputReference | CdnLoadbalancerBotDefensePolicyJsInsertionRulesRulesMetadata): any {
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


export function cdnLoadbalancerBotDefensePolicyJsInsertionRulesRulesMetadataToHclTerraform(struct?: CdnLoadbalancerBotDefensePolicyJsInsertionRulesRulesMetadataOutputReference | CdnLoadbalancerBotDefensePolicyJsInsertionRulesRulesMetadata): any {
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

export class CdnLoadbalancerBotDefensePolicyJsInsertionRulesRulesMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerBotDefensePolicyJsInsertionRulesRulesMetadata | undefined {
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

  public set internalValue(value: CdnLoadbalancerBotDefensePolicyJsInsertionRulesRulesMetadata | undefined) {
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
export interface CdnLoadbalancerBotDefensePolicyJsInsertionRulesRulesPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#path CdnLoadbalancer#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#prefix CdnLoadbalancer#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#regex CdnLoadbalancer#regex}
  */
  readonly regex?: string;
}

export function cdnLoadbalancerBotDefensePolicyJsInsertionRulesRulesPathToTerraform(struct?: CdnLoadbalancerBotDefensePolicyJsInsertionRulesRulesPathOutputReference | CdnLoadbalancerBotDefensePolicyJsInsertionRulesRulesPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function cdnLoadbalancerBotDefensePolicyJsInsertionRulesRulesPathToHclTerraform(struct?: CdnLoadbalancerBotDefensePolicyJsInsertionRulesRulesPathOutputReference | CdnLoadbalancerBotDefensePolicyJsInsertionRulesRulesPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerBotDefensePolicyJsInsertionRulesRulesPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerBotDefensePolicyJsInsertionRulesRulesPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerBotDefensePolicyJsInsertionRulesRulesPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._path = undefined;
      this._prefix = undefined;
      this._regex = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._path = value.path;
      this._prefix = value.prefix;
      this._regex = value.regex;
    }
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}
export interface CdnLoadbalancerBotDefensePolicyJsInsertionRulesRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#any_domain CdnLoadbalancer#any_domain}
  */
  readonly anyDomain?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#javascript_location CdnLoadbalancer#javascript_location}
  */
  readonly javascriptLocation?: string;
  /**
  * domain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#domain CdnLoadbalancer#domain}
  */
  readonly domain?: CdnLoadbalancerBotDefensePolicyJsInsertionRulesRulesDomain;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#metadata CdnLoadbalancer#metadata}
  */
  readonly metadata: CdnLoadbalancerBotDefensePolicyJsInsertionRulesRulesMetadata;
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#path CdnLoadbalancer#path}
  */
  readonly path: CdnLoadbalancerBotDefensePolicyJsInsertionRulesRulesPath;
}

export function cdnLoadbalancerBotDefensePolicyJsInsertionRulesRulesToTerraform(struct?: CdnLoadbalancerBotDefensePolicyJsInsertionRulesRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_domain: cdktf.booleanToTerraform(struct!.anyDomain),
    javascript_location: cdktf.stringToTerraform(struct!.javascriptLocation),
    domain: cdnLoadbalancerBotDefensePolicyJsInsertionRulesRulesDomainToTerraform(struct!.domain),
    metadata: cdnLoadbalancerBotDefensePolicyJsInsertionRulesRulesMetadataToTerraform(struct!.metadata),
    path: cdnLoadbalancerBotDefensePolicyJsInsertionRulesRulesPathToTerraform(struct!.path),
  }
}


export function cdnLoadbalancerBotDefensePolicyJsInsertionRulesRulesToHclTerraform(struct?: CdnLoadbalancerBotDefensePolicyJsInsertionRulesRules | cdktf.IResolvable): any {
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
    javascript_location: {
      value: cdktf.stringToHclTerraform(struct!.javascriptLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain: {
      value: cdnLoadbalancerBotDefensePolicyJsInsertionRulesRulesDomainToHclTerraform(struct!.domain),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerBotDefensePolicyJsInsertionRulesRulesDomainList",
    },
    metadata: {
      value: cdnLoadbalancerBotDefensePolicyJsInsertionRulesRulesMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerBotDefensePolicyJsInsertionRulesRulesMetadataList",
    },
    path: {
      value: cdnLoadbalancerBotDefensePolicyJsInsertionRulesRulesPathToHclTerraform(struct!.path),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerBotDefensePolicyJsInsertionRulesRulesPathList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerBotDefensePolicyJsInsertionRulesRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerBotDefensePolicyJsInsertionRulesRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyDomain = this._anyDomain;
    }
    if (this._javascriptLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.javascriptLocation = this._javascriptLocation;
    }
    if (this._domain?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerBotDefensePolicyJsInsertionRulesRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anyDomain = undefined;
      this._javascriptLocation = undefined;
      this._domain.internalValue = undefined;
      this._metadata.internalValue = undefined;
      this._path.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anyDomain = value.anyDomain;
      this._javascriptLocation = value.javascriptLocation;
      this._domain.internalValue = value.domain;
      this._metadata.internalValue = value.metadata;
      this._path.internalValue = value.path;
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

  // javascript_location - computed: false, optional: true, required: false
  private _javascriptLocation?: string; 
  public get javascriptLocation() {
    return this.getStringAttribute('javascript_location');
  }
  public set javascriptLocation(value: string) {
    this._javascriptLocation = value;
  }
  public resetJavascriptLocation() {
    this._javascriptLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get javascriptLocationInput() {
    return this._javascriptLocation;
  }

  // domain - computed: false, optional: true, required: false
  private _domain = new CdnLoadbalancerBotDefensePolicyJsInsertionRulesRulesDomainOutputReference(this, "domain");
  public get domain() {
    return this._domain;
  }
  public putDomain(value: CdnLoadbalancerBotDefensePolicyJsInsertionRulesRulesDomain) {
    this._domain.internalValue = value;
  }
  public resetDomain() {
    this._domain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain.internalValue;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new CdnLoadbalancerBotDefensePolicyJsInsertionRulesRulesMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: CdnLoadbalancerBotDefensePolicyJsInsertionRulesRulesMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // path - computed: false, optional: false, required: true
  private _path = new CdnLoadbalancerBotDefensePolicyJsInsertionRulesRulesPathOutputReference(this, "path");
  public get path() {
    return this._path;
  }
  public putPath(value: CdnLoadbalancerBotDefensePolicyJsInsertionRulesRulesPath) {
    this._path.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
  }
}

export class CdnLoadbalancerBotDefensePolicyJsInsertionRulesRulesList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerBotDefensePolicyJsInsertionRulesRules[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerBotDefensePolicyJsInsertionRulesRulesOutputReference {
    return new CdnLoadbalancerBotDefensePolicyJsInsertionRulesRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerBotDefensePolicyJsInsertionRules {
  /**
  * exclude_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#exclude_list CdnLoadbalancer#exclude_list}
  */
  readonly excludeList?: CdnLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListStruct[] | cdktf.IResolvable;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#rules CdnLoadbalancer#rules}
  */
  readonly rules: CdnLoadbalancerBotDefensePolicyJsInsertionRulesRules[] | cdktf.IResolvable;
}

export function cdnLoadbalancerBotDefensePolicyJsInsertionRulesToTerraform(struct?: CdnLoadbalancerBotDefensePolicyJsInsertionRulesOutputReference | CdnLoadbalancerBotDefensePolicyJsInsertionRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_list: cdktf.listMapper(cdnLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListStructToTerraform, true)(struct!.excludeList),
    rules: cdktf.listMapper(cdnLoadbalancerBotDefensePolicyJsInsertionRulesRulesToTerraform, true)(struct!.rules),
  }
}


export function cdnLoadbalancerBotDefensePolicyJsInsertionRulesToHclTerraform(struct?: CdnLoadbalancerBotDefensePolicyJsInsertionRulesOutputReference | CdnLoadbalancerBotDefensePolicyJsInsertionRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_list: {
      value: cdktf.listMapperHcl(cdnLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListStructToHclTerraform, true)(struct!.excludeList),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListStructList",
    },
    rules: {
      value: cdktf.listMapperHcl(cdnLoadbalancerBotDefensePolicyJsInsertionRulesRulesToHclTerraform, true)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerBotDefensePolicyJsInsertionRulesRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerBotDefensePolicyJsInsertionRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerBotDefensePolicyJsInsertionRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeList = this._excludeList?.internalValue;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerBotDefensePolicyJsInsertionRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludeList.internalValue = undefined;
      this._rules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludeList.internalValue = value.excludeList;
      this._rules.internalValue = value.rules;
    }
  }

  // exclude_list - computed: false, optional: true, required: false
  private _excludeList = new CdnLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListStructList(this, "exclude_list", false);
  public get excludeList() {
    return this._excludeList;
  }
  public putExcludeList(value: CdnLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListStruct[] | cdktf.IResolvable) {
    this._excludeList.internalValue = value;
  }
  public resetExcludeList() {
    this._excludeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeListInput() {
    return this._excludeList.internalValue;
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new CdnLoadbalancerBotDefensePolicyJsInsertionRulesRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: CdnLoadbalancerBotDefensePolicyJsInsertionRulesRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}
export interface CdnLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierHeadersItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#exact_values CdnLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#regex_values CdnLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#transformers CdnLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function cdnLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierHeadersItemToTerraform(struct?: CdnLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierHeadersItemOutputReference | CdnLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierHeadersItem): any {
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


export function cdnLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierHeadersItemToHclTerraform(struct?: CdnLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierHeadersItemOutputReference | CdnLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierHeadersItem): any {
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

export class CdnLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierHeadersItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierHeadersItem | undefined {
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

  public set internalValue(value: CdnLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierHeadersItem | undefined) {
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
export interface CdnLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#check_not_present CdnLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#check_present CdnLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#item CdnLoadbalancer#item}
  */
  readonly item?: CdnLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierHeadersItem;
}

export function cdnLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierHeadersToTerraform(struct?: CdnLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    name: cdktf.stringToTerraform(struct!.name),
    item: cdnLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierHeadersItemToTerraform(struct!.item),
  }
}


export function cdnLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierHeadersToHclTerraform(struct?: CdnLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierHeaders | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    item: {
      value: cdnLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierHeadersItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierHeadersItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CdnLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkNotPresent = undefined;
      this._checkPresent = undefined;
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
  private _item = new CdnLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierHeadersItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: CdnLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierHeadersItem) {
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

export class CdnLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierHeadersList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierHeaders[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierHeadersOutputReference {
    return new CdnLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifier {
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#headers CdnLoadbalancer#headers}
  */
  readonly headers?: CdnLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierHeaders[] | cdktf.IResolvable;
}

export function cdnLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierToTerraform(struct?: CdnLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierOutputReference | CdnLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers: cdktf.listMapper(cdnLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierHeadersToTerraform, true)(struct!.headers),
  }
}


export function cdnLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierToHclTerraform(struct?: CdnLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierOutputReference | CdnLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    headers: {
      value: cdktf.listMapperHcl(cdnLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierHeadersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifier | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifier | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headers.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headers.internalValue = value.headers;
    }
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new CdnLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: CdnLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }
}
export interface CdnLoadbalancerBotDefensePolicyMobileSdkConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#reload_header_name CdnLoadbalancer#reload_header_name}
  */
  readonly reloadHeaderName?: string;
  /**
  * mobile_identifier block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#mobile_identifier CdnLoadbalancer#mobile_identifier}
  */
  readonly mobileIdentifier?: CdnLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifier;
}

export function cdnLoadbalancerBotDefensePolicyMobileSdkConfigToTerraform(struct?: CdnLoadbalancerBotDefensePolicyMobileSdkConfigOutputReference | CdnLoadbalancerBotDefensePolicyMobileSdkConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reload_header_name: cdktf.stringToTerraform(struct!.reloadHeaderName),
    mobile_identifier: cdnLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierToTerraform(struct!.mobileIdentifier),
  }
}


export function cdnLoadbalancerBotDefensePolicyMobileSdkConfigToHclTerraform(struct?: CdnLoadbalancerBotDefensePolicyMobileSdkConfigOutputReference | CdnLoadbalancerBotDefensePolicyMobileSdkConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reload_header_name: {
      value: cdktf.stringToHclTerraform(struct!.reloadHeaderName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mobile_identifier: {
      value: cdnLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierToHclTerraform(struct!.mobileIdentifier),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerBotDefensePolicyMobileSdkConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerBotDefensePolicyMobileSdkConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._reloadHeaderName !== undefined) {
      hasAnyValues = true;
      internalValueResult.reloadHeaderName = this._reloadHeaderName;
    }
    if (this._mobileIdentifier?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mobileIdentifier = this._mobileIdentifier?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerBotDefensePolicyMobileSdkConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._reloadHeaderName = undefined;
      this._mobileIdentifier.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._reloadHeaderName = value.reloadHeaderName;
      this._mobileIdentifier.internalValue = value.mobileIdentifier;
    }
  }

  // reload_header_name - computed: false, optional: true, required: false
  private _reloadHeaderName?: string; 
  public get reloadHeaderName() {
    return this.getStringAttribute('reload_header_name');
  }
  public set reloadHeaderName(value: string) {
    this._reloadHeaderName = value;
  }
  public resetReloadHeaderName() {
    this._reloadHeaderName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reloadHeaderNameInput() {
    return this._reloadHeaderName;
  }

  // mobile_identifier - computed: false, optional: true, required: false
  private _mobileIdentifier = new CdnLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierOutputReference(this, "mobile_identifier");
  public get mobileIdentifier() {
    return this._mobileIdentifier;
  }
  public putMobileIdentifier(value: CdnLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifier) {
    this._mobileIdentifier.internalValue = value;
  }
  public resetMobileIdentifier() {
    this._mobileIdentifier.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mobileIdentifierInput() {
    return this._mobileIdentifier.internalValue;
  }
}
export interface CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsDomain {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#exact_value CdnLoadbalancer#exact_value}
  */
  readonly exactValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#regex_value CdnLoadbalancer#regex_value}
  */
  readonly regexValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#suffix_value CdnLoadbalancer#suffix_value}
  */
  readonly suffixValue?: string;
}

export function cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsDomainToTerraform(struct?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsDomainOutputReference | CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsDomain): any {
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


export function cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsDomainToHclTerraform(struct?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsDomainOutputReference | CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsDomain): any {
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

export class CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsDomainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsDomain | undefined {
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

  public set internalValue(value: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsDomain | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValue = undefined;
      this._regexValue = undefined;
      this._suffixValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAccountManagement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#create CdnLoadbalancer#create}
  */
  readonly create?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#password_reset CdnLoadbalancer#password_reset}
  */
  readonly passwordReset?: boolean | cdktf.IResolvable;
}

export function cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAccountManagementToTerraform(struct?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAccountManagementOutputReference | CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAccountManagement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.booleanToTerraform(struct!.create),
    password_reset: cdktf.booleanToTerraform(struct!.passwordReset),
  }
}


export function cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAccountManagementToHclTerraform(struct?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAccountManagementOutputReference | CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAccountManagement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.booleanToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    password_reset: {
      value: cdktf.booleanToHclTerraform(struct!.passwordReset),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAccountManagementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAccountManagement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._passwordReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordReset = this._passwordReset;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAccountManagement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._passwordReset = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._create = value.create;
      this._passwordReset = value.passwordReset;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: boolean | cdktf.IResolvable; 
  public get create() {
    return this.getBooleanAttribute('create');
  }
  public set create(value: boolean | cdktf.IResolvable) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // password_reset - computed: false, optional: true, required: false
  private _passwordReset?: boolean | cdktf.IResolvable; 
  public get passwordReset() {
    return this.getBooleanAttribute('password_reset');
  }
  public set passwordReset(value: boolean | cdktf.IResolvable) {
    this._passwordReset = value;
  }
  public resetPasswordReset() {
    this._passwordReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordResetInput() {
    return this._passwordReset;
  }
}
export interface CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationLoginTransactionResultFailureConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#regex_values CdnLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#status CdnLoadbalancer#status}
  */
  readonly status: string;
}

export function cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationLoginTransactionResultFailureConditionsToTerraform(struct?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationLoginTransactionResultFailureConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regexValues),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationLoginTransactionResultFailureConditionsToHclTerraform(struct?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationLoginTransactionResultFailureConditions | cdktf.IResolvable): any {
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
    regex_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regexValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationLoginTransactionResultFailureConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationLoginTransactionResultFailureConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regexValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValues = this._regexValues;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationLoginTransactionResultFailureConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regexValues = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regexValues = value.regexValues;
      this._status = value.status;
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

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

export class CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationLoginTransactionResultFailureConditionsList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationLoginTransactionResultFailureConditions[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationLoginTransactionResultFailureConditionsOutputReference {
    return new CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationLoginTransactionResultFailureConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationLoginTransactionResultSuccessConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#regex_values CdnLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#status CdnLoadbalancer#status}
  */
  readonly status: string;
}

export function cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationLoginTransactionResultSuccessConditionsToTerraform(struct?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationLoginTransactionResultSuccessConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regexValues),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationLoginTransactionResultSuccessConditionsToHclTerraform(struct?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationLoginTransactionResultSuccessConditions | cdktf.IResolvable): any {
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
    regex_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regexValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationLoginTransactionResultSuccessConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationLoginTransactionResultSuccessConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regexValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValues = this._regexValues;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationLoginTransactionResultSuccessConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regexValues = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regexValues = value.regexValues;
      this._status = value.status;
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

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

export class CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationLoginTransactionResultSuccessConditionsList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationLoginTransactionResultSuccessConditions[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationLoginTransactionResultSuccessConditionsOutputReference {
    return new CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationLoginTransactionResultSuccessConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationLoginTransactionResult {
  /**
  * failure_conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#failure_conditions CdnLoadbalancer#failure_conditions}
  */
  readonly failureConditions?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationLoginTransactionResultFailureConditions[] | cdktf.IResolvable;
  /**
  * success_conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#success_conditions CdnLoadbalancer#success_conditions}
  */
  readonly successConditions?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationLoginTransactionResultSuccessConditions[] | cdktf.IResolvable;
}

export function cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationLoginTransactionResultToTerraform(struct?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationLoginTransactionResultOutputReference | CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationLoginTransactionResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failure_conditions: cdktf.listMapper(cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationLoginTransactionResultFailureConditionsToTerraform, true)(struct!.failureConditions),
    success_conditions: cdktf.listMapper(cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationLoginTransactionResultSuccessConditionsToTerraform, true)(struct!.successConditions),
  }
}


export function cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationLoginTransactionResultToHclTerraform(struct?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationLoginTransactionResultOutputReference | CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationLoginTransactionResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    failure_conditions: {
      value: cdktf.listMapperHcl(cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationLoginTransactionResultFailureConditionsToHclTerraform, true)(struct!.failureConditions),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationLoginTransactionResultFailureConditionsList",
    },
    success_conditions: {
      value: cdktf.listMapperHcl(cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationLoginTransactionResultSuccessConditionsToHclTerraform, true)(struct!.successConditions),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationLoginTransactionResultSuccessConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationLoginTransactionResultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationLoginTransactionResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failureConditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureConditions = this._failureConditions?.internalValue;
    }
    if (this._successConditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.successConditions = this._successConditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationLoginTransactionResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._failureConditions.internalValue = undefined;
      this._successConditions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._failureConditions.internalValue = value.failureConditions;
      this._successConditions.internalValue = value.successConditions;
    }
  }

  // failure_conditions - computed: false, optional: true, required: false
  private _failureConditions = new CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationLoginTransactionResultFailureConditionsList(this, "failure_conditions", false);
  public get failureConditions() {
    return this._failureConditions;
  }
  public putFailureConditions(value: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationLoginTransactionResultFailureConditions[] | cdktf.IResolvable) {
    this._failureConditions.internalValue = value;
  }
  public resetFailureConditions() {
    this._failureConditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureConditionsInput() {
    return this._failureConditions.internalValue;
  }

  // success_conditions - computed: false, optional: true, required: false
  private _successConditions = new CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationLoginTransactionResultSuccessConditionsList(this, "success_conditions", false);
  public get successConditions() {
    return this._successConditions;
  }
  public putSuccessConditions(value: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationLoginTransactionResultSuccessConditions[] | cdktf.IResolvable) {
    this._successConditions.internalValue = value;
  }
  public resetSuccessConditions() {
    this._successConditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successConditionsInput() {
    return this._successConditions.internalValue;
  }
}
export interface CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationLogin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#disable_transaction_result CdnLoadbalancer#disable_transaction_result}
  */
  readonly disableTransactionResult?: boolean | cdktf.IResolvable;
  /**
  * transaction_result block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#transaction_result CdnLoadbalancer#transaction_result}
  */
  readonly transactionResult?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationLoginTransactionResult;
}

export function cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationLoginToTerraform(struct?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationLoginOutputReference | CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationLogin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_transaction_result: cdktf.booleanToTerraform(struct!.disableTransactionResult),
    transaction_result: cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationLoginTransactionResultToTerraform(struct!.transactionResult),
  }
}


export function cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationLoginToHclTerraform(struct?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationLoginOutputReference | CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationLogin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_transaction_result: {
      value: cdktf.booleanToHclTerraform(struct!.disableTransactionResult),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    transaction_result: {
      value: cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationLoginTransactionResultToHclTerraform(struct!.transactionResult),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationLoginTransactionResultList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationLoginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationLogin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableTransactionResult !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableTransactionResult = this._disableTransactionResult;
    }
    if (this._transactionResult?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transactionResult = this._transactionResult?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationLogin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableTransactionResult = undefined;
      this._transactionResult.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableTransactionResult = value.disableTransactionResult;
      this._transactionResult.internalValue = value.transactionResult;
    }
  }

  // disable_transaction_result - computed: false, optional: true, required: false
  private _disableTransactionResult?: boolean | cdktf.IResolvable; 
  public get disableTransactionResult() {
    return this.getBooleanAttribute('disable_transaction_result');
  }
  public set disableTransactionResult(value: boolean | cdktf.IResolvable) {
    this._disableTransactionResult = value;
  }
  public resetDisableTransactionResult() {
    this._disableTransactionResult = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableTransactionResultInput() {
    return this._disableTransactionResult;
  }

  // transaction_result - computed: false, optional: true, required: false
  private _transactionResult = new CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationLoginTransactionResultOutputReference(this, "transaction_result");
  public get transactionResult() {
    return this._transactionResult;
  }
  public putTransactionResult(value: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationLoginTransactionResult) {
    this._transactionResult.internalValue = value;
  }
  public resetTransactionResult() {
    this._transactionResult.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transactionResultInput() {
    return this._transactionResult.internalValue;
  }
}
export interface CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthentication {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#login_mfa CdnLoadbalancer#login_mfa}
  */
  readonly loginMfa?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#login_partner CdnLoadbalancer#login_partner}
  */
  readonly loginPartner?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#logout CdnLoadbalancer#logout}
  */
  readonly logout?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#token_refresh CdnLoadbalancer#token_refresh}
  */
  readonly tokenRefresh?: boolean | cdktf.IResolvable;
  /**
  * login block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#login CdnLoadbalancer#login}
  */
  readonly login?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationLogin;
}

export function cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationToTerraform(struct?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationOutputReference | CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    login_mfa: cdktf.booleanToTerraform(struct!.loginMfa),
    login_partner: cdktf.booleanToTerraform(struct!.loginPartner),
    logout: cdktf.booleanToTerraform(struct!.logout),
    token_refresh: cdktf.booleanToTerraform(struct!.tokenRefresh),
    login: cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationLoginToTerraform(struct!.login),
  }
}


export function cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationToHclTerraform(struct?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationOutputReference | CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    login_mfa: {
      value: cdktf.booleanToHclTerraform(struct!.loginMfa),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    login_partner: {
      value: cdktf.booleanToHclTerraform(struct!.loginPartner),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    logout: {
      value: cdktf.booleanToHclTerraform(struct!.logout),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    token_refresh: {
      value: cdktf.booleanToHclTerraform(struct!.tokenRefresh),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    login: {
      value: cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationLoginToHclTerraform(struct!.login),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationLoginList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._loginMfa !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginMfa = this._loginMfa;
    }
    if (this._loginPartner !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginPartner = this._loginPartner;
    }
    if (this._logout !== undefined) {
      hasAnyValues = true;
      internalValueResult.logout = this._logout;
    }
    if (this._tokenRefresh !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenRefresh = this._tokenRefresh;
    }
    if (this._login?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.login = this._login?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._loginMfa = undefined;
      this._loginPartner = undefined;
      this._logout = undefined;
      this._tokenRefresh = undefined;
      this._login.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._loginMfa = value.loginMfa;
      this._loginPartner = value.loginPartner;
      this._logout = value.logout;
      this._tokenRefresh = value.tokenRefresh;
      this._login.internalValue = value.login;
    }
  }

  // login_mfa - computed: false, optional: true, required: false
  private _loginMfa?: boolean | cdktf.IResolvable; 
  public get loginMfa() {
    return this.getBooleanAttribute('login_mfa');
  }
  public set loginMfa(value: boolean | cdktf.IResolvable) {
    this._loginMfa = value;
  }
  public resetLoginMfa() {
    this._loginMfa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginMfaInput() {
    return this._loginMfa;
  }

  // login_partner - computed: false, optional: true, required: false
  private _loginPartner?: boolean | cdktf.IResolvable; 
  public get loginPartner() {
    return this.getBooleanAttribute('login_partner');
  }
  public set loginPartner(value: boolean | cdktf.IResolvable) {
    this._loginPartner = value;
  }
  public resetLoginPartner() {
    this._loginPartner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginPartnerInput() {
    return this._loginPartner;
  }

  // logout - computed: false, optional: true, required: false
  private _logout?: boolean | cdktf.IResolvable; 
  public get logout() {
    return this.getBooleanAttribute('logout');
  }
  public set logout(value: boolean | cdktf.IResolvable) {
    this._logout = value;
  }
  public resetLogout() {
    this._logout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoutInput() {
    return this._logout;
  }

  // token_refresh - computed: false, optional: true, required: false
  private _tokenRefresh?: boolean | cdktf.IResolvable; 
  public get tokenRefresh() {
    return this.getBooleanAttribute('token_refresh');
  }
  public set tokenRefresh(value: boolean | cdktf.IResolvable) {
    this._tokenRefresh = value;
  }
  public resetTokenRefresh() {
    this._tokenRefresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenRefreshInput() {
    return this._tokenRefresh;
  }

  // login - computed: false, optional: true, required: false
  private _login = new CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationLoginOutputReference(this, "login");
  public get login() {
    return this._login;
  }
  public putLogin(value: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationLogin) {
    this._login.internalValue = value;
  }
  public resetLogin() {
    this._login.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginInput() {
    return this._login.internalValue;
  }
}
