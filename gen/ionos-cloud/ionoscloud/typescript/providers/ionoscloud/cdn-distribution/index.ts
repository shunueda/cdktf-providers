// https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/cdn_distribution
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CdnDistributionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the certificate to use for the distribution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/cdn_distribution#certificate_id CdnDistribution#certificate_id}
  */
  readonly certificateId?: string;
  /**
  * The domain of the distribution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/cdn_distribution#domain CdnDistribution#domain}
  */
  readonly domain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/cdn_distribution#id CdnDistribution#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * routing_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/cdn_distribution#routing_rules CdnDistribution#routing_rules}
  */
  readonly routingRules: CdnDistributionRoutingRules[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/cdn_distribution#timeouts CdnDistribution#timeouts}
  */
  readonly timeouts?: CdnDistributionTimeouts;
}
export interface CdnDistributionRoutingRulesUpstreamGeoRestrictions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/cdn_distribution#allow_list CdnDistribution#allow_list}
  */
  readonly allowList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/cdn_distribution#block_list CdnDistribution#block_list}
  */
  readonly blockList?: string[];
}

export function cdnDistributionRoutingRulesUpstreamGeoRestrictionsToTerraform(struct?: CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference | CdnDistributionRoutingRulesUpstreamGeoRestrictions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowList),
    block_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.blockList),
  }
}


export function cdnDistributionRoutingRulesUpstreamGeoRestrictionsToHclTerraform(struct?: CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference | CdnDistributionRoutingRulesUpstreamGeoRestrictions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    block_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.blockList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnDistributionRoutingRulesUpstreamGeoRestrictions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowList !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowList = this._allowList;
    }
    if (this._blockList !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockList = this._blockList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnDistributionRoutingRulesUpstreamGeoRestrictions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowList = undefined;
      this._blockList = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowList = value.allowList;
      this._blockList = value.blockList;
    }
  }

  // allow_list - computed: false, optional: true, required: false
  private _allowList?: string[]; 
  public get allowList() {
    return this.getListAttribute('allow_list');
  }
  public set allowList(value: string[]) {
    this._allowList = value;
  }
  public resetAllowList() {
    this._allowList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowListInput() {
    return this._allowList;
  }

  // block_list - computed: false, optional: true, required: false
  private _blockList?: string[]; 
  public get blockList() {
    return this.getListAttribute('block_list');
  }
  public set blockList(value: string[]) {
    this._blockList = value;
  }
  public resetBlockList() {
    this._blockList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockListInput() {
    return this._blockList;
  }
}
export interface CdnDistributionRoutingRulesUpstream {
  /**
  * Enable or disable caching. If enabled, the CDN will cache the responses from the upstream host. Subsequent requests for the same resource will be served from the cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/cdn_distribution#caching CdnDistribution#caching}
  */
  readonly caching: boolean | cdktf.IResolvable;
  /**
  * The upstream host that handles the requests if not already cached. This host will be protected by the WAF if the option is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/cdn_distribution#host CdnDistribution#host}
  */
  readonly host: string;
  /**
  * Rate limit class that will be applied to limit the number of incoming requests per IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/cdn_distribution#rate_limit_class CdnDistribution#rate_limit_class}
  */
  readonly rateLimitClass: string;
  /**
  * The SNI (Server Name Indication) mode of the upstream host. It supports two modes: 'distribution' and 'origin', for more information about these modes please check the resource docs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/cdn_distribution#sni_mode CdnDistribution#sni_mode}
  */
  readonly sniMode: string;
  /**
  * Enable or disable WAF to protect the upstream host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/cdn_distribution#waf CdnDistribution#waf}
  */
  readonly waf: boolean | cdktf.IResolvable;
  /**
  * geo_restrictions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/cdn_distribution#geo_restrictions CdnDistribution#geo_restrictions}
  */
  readonly geoRestrictions?: CdnDistributionRoutingRulesUpstreamGeoRestrictions;
}

export function cdnDistributionRoutingRulesUpstreamToTerraform(struct?: CdnDistributionRoutingRulesUpstreamOutputReference | CdnDistributionRoutingRulesUpstream): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    caching: cdktf.booleanToTerraform(struct!.caching),
    host: cdktf.stringToTerraform(struct!.host),
    rate_limit_class: cdktf.stringToTerraform(struct!.rateLimitClass),
    sni_mode: cdktf.stringToTerraform(struct!.sniMode),
    waf: cdktf.booleanToTerraform(struct!.waf),
    geo_restrictions: cdnDistributionRoutingRulesUpstreamGeoRestrictionsToTerraform(struct!.geoRestrictions),
  }
}


export function cdnDistributionRoutingRulesUpstreamToHclTerraform(struct?: CdnDistributionRoutingRulesUpstreamOutputReference | CdnDistributionRoutingRulesUpstream): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    caching: {
      value: cdktf.booleanToHclTerraform(struct!.caching),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rate_limit_class: {
      value: cdktf.stringToHclTerraform(struct!.rateLimitClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sni_mode: {
      value: cdktf.stringToHclTerraform(struct!.sniMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    waf: {
      value: cdktf.booleanToHclTerraform(struct!.waf),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    geo_restrictions: {
      value: cdnDistributionRoutingRulesUpstreamGeoRestrictionsToHclTerraform(struct!.geoRestrictions),
      isBlock: true,
      type: "list",
      storageClassType: "CdnDistributionRoutingRulesUpstreamGeoRestrictionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnDistributionRoutingRulesUpstreamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnDistributionRoutingRulesUpstream | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caching !== undefined) {
      hasAnyValues = true;
      internalValueResult.caching = this._caching;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._rateLimitClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimitClass = this._rateLimitClass;
    }
    if (this._sniMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.sniMode = this._sniMode;
    }
    if (this._waf !== undefined) {
      hasAnyValues = true;
      internalValueResult.waf = this._waf;
    }
    if (this._geoRestrictions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoRestrictions = this._geoRestrictions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnDistributionRoutingRulesUpstream | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caching = undefined;
      this._host = undefined;
      this._rateLimitClass = undefined;
      this._sniMode = undefined;
      this._waf = undefined;
      this._geoRestrictions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caching = value.caching;
      this._host = value.host;
      this._rateLimitClass = value.rateLimitClass;
      this._sniMode = value.sniMode;
      this._waf = value.waf;
      this._geoRestrictions.internalValue = value.geoRestrictions;
    }
  }

  // caching - computed: false, optional: false, required: true
  private _caching?: boolean | cdktf.IResolvable; 
  public get caching() {
    return this.getBooleanAttribute('caching');
  }
  public set caching(value: boolean | cdktf.IResolvable) {
    this._caching = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cachingInput() {
    return this._caching;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // rate_limit_class - computed: false, optional: false, required: true
  private _rateLimitClass?: string; 
  public get rateLimitClass() {
    return this.getStringAttribute('rate_limit_class');
  }
  public set rateLimitClass(value: string) {
    this._rateLimitClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitClassInput() {
    return this._rateLimitClass;
  }

  // sni_mode - computed: false, optional: false, required: true
  private _sniMode?: string; 
  public get sniMode() {
    return this.getStringAttribute('sni_mode');
  }
  public set sniMode(value: string) {
    this._sniMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sniModeInput() {
    return this._sniMode;
  }

  // waf - computed: false, optional: false, required: true
  private _waf?: boolean | cdktf.IResolvable; 
  public get waf() {
    return this.getBooleanAttribute('waf');
  }
  public set waf(value: boolean | cdktf.IResolvable) {
    this._waf = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wafInput() {
    return this._waf;
  }

  // geo_restrictions - computed: false, optional: true, required: false
  private _geoRestrictions = new CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference(this, "geo_restrictions");
  public get geoRestrictions() {
    return this._geoRestrictions;
  }
  public putGeoRestrictions(value: CdnDistributionRoutingRulesUpstreamGeoRestrictions) {
    this._geoRestrictions.internalValue = value;
  }
  public resetGeoRestrictions() {
    this._geoRestrictions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoRestrictionsInput() {
    return this._geoRestrictions.internalValue;
  }
}
export interface CdnDistributionRoutingRules {
  /**
  * The prefix of the routing rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/cdn_distribution#prefix CdnDistribution#prefix}
  */
  readonly prefix: string;
  /**
  * The scheme of the routing rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/cdn_distribution#scheme CdnDistribution#scheme}
  */
  readonly scheme: string;
  /**
  * upstream block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/cdn_distribution#upstream CdnDistribution#upstream}
  */
  readonly upstream: CdnDistributionRoutingRulesUpstream;
}

export function cdnDistributionRoutingRulesToTerraform(struct?: CdnDistributionRoutingRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    upstream: cdnDistributionRoutingRulesUpstreamToTerraform(struct!.upstream),
  }
}


export function cdnDistributionRoutingRulesToHclTerraform(struct?: CdnDistributionRoutingRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheme: {
      value: cdktf.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upstream: {
      value: cdnDistributionRoutingRulesUpstreamToHclTerraform(struct!.upstream),
      isBlock: true,
      type: "list",
      storageClassType: "CdnDistributionRoutingRulesUpstreamList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnDistributionRoutingRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnDistributionRoutingRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    if (this._upstream?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstream = this._upstream?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnDistributionRoutingRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefix = undefined;
      this._scheme = undefined;
      this._upstream.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefix = value.prefix;
      this._scheme = value.scheme;
      this._upstream.internalValue = value.upstream;
    }
  }

  // prefix - computed: false, optional: false, required: true
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // scheme - computed: false, optional: false, required: true
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }

  // upstream - computed: false, optional: false, required: true
  private _upstream = new CdnDistributionRoutingRulesUpstreamOutputReference(this, "upstream");
  public get upstream() {
    return this._upstream;
  }
  public putUpstream(value: CdnDistributionRoutingRulesUpstream) {
    this._upstream.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamInput() {
    return this._upstream.internalValue;
  }
}

export class CdnDistributionRoutingRulesList extends cdktf.ComplexList {
  public internalValue? : CdnDistributionRoutingRules[] | cdktf.IResolvable

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
  public get(index: number): CdnDistributionRoutingRulesOutputReference {
    return new CdnDistributionRoutingRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnDistributionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/cdn_distribution#create CdnDistribution#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/cdn_distribution#default CdnDistribution#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/cdn_distribution#delete CdnDistribution#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/cdn_distribution#update CdnDistribution#update}
  */
  readonly update?: string;
}

export function cdnDistributionTimeoutsToTerraform(struct?: CdnDistributionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    default: cdktf.stringToTerraform(struct!.default),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function cdnDistributionTimeoutsToHclTerraform(struct?: CdnDistributionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnDistributionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CdnDistributionTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnDistributionTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._default = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._default = value.default;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/cdn_distribution ionoscloud_cdn_distribution}
*/
export class CdnDistribution extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ionoscloud_cdn_distribution";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CdnDistribution resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CdnDistribution to import
  * @param importFromId The id of the existing CdnDistribution that should be imported. Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/cdn_distribution#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CdnDistribution to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ionoscloud_cdn_distribution", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/cdn_distribution ionoscloud_cdn_distribution} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CdnDistributionConfig
  */
  public constructor(scope: Construct, id: string, config: CdnDistributionConfig) {
    super(scope, id, {
      terraformResourceType: 'ionoscloud_cdn_distribution',
      terraformGeneratorMetadata: {
        providerName: 'ionoscloud',
        providerVersion: '6.7.21',
        providerVersionConstraint: '6.7.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._certificateId = config.certificateId;
    this._domain = config.domain;
    this._id = config.id;
    this._routingRules.internalValue = config.routingRules;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_id - computed: false, optional: true, required: false
  private _certificateId?: string; 
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }
  public set certificateId(value: string) {
    this._certificateId = value;
  }
  public resetCertificateId() {
    this._certificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIdInput() {
    return this._certificateId;
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
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

  // public_endpoint_v4 - computed: true, optional: false, required: false
  public get publicEndpointV4() {
    return this.getStringAttribute('public_endpoint_v4');
  }

  // public_endpoint_v6 - computed: true, optional: false, required: false
  public get publicEndpointV6() {
    return this.getStringAttribute('public_endpoint_v6');
  }

  // resource_urn - computed: true, optional: false, required: false
  public get resourceUrn() {
    return this.getStringAttribute('resource_urn');
  }

  // routing_rules - computed: false, optional: false, required: true
  private _routingRules = new CdnDistributionRoutingRulesList(this, "routing_rules", false);
  public get routingRules() {
    return this._routingRules;
  }
  public putRoutingRules(value: CdnDistributionRoutingRules[] | cdktf.IResolvable) {
    this._routingRules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routingRulesInput() {
    return this._routingRules.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CdnDistributionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CdnDistributionTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate_id: cdktf.stringToTerraform(this._certificateId),
      domain: cdktf.stringToTerraform(this._domain),
      id: cdktf.stringToTerraform(this._id),
      routing_rules: cdktf.listMapper(cdnDistributionRoutingRulesToTerraform, true)(this._routingRules.internalValue),
      timeouts: cdnDistributionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      certificate_id: {
        value: cdktf.stringToHclTerraform(this._certificateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
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
      routing_rules: {
        value: cdktf.listMapperHcl(cdnDistributionRoutingRulesToHclTerraform, true)(this._routingRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CdnDistributionRoutingRulesList",
      },
      timeouts: {
        value: cdnDistributionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CdnDistributionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
