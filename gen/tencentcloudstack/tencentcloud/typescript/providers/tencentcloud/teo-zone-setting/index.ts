// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/teo_zone_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TeoZoneSettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/teo_zone_setting#id TeoZoneSetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Site ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/teo_zone_setting#zone_id TeoZoneSetting#zone_id}
  */
  readonly zoneId: string;
  /**
  * cache block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/teo_zone_setting#cache TeoZoneSetting#cache}
  */
  readonly cache?: TeoZoneSettingCache;
  /**
  * cache_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/teo_zone_setting#cache_key TeoZoneSetting#cache_key}
  */
  readonly cacheKey?: TeoZoneSettingCacheKey;
  /**
  * cache_prefresh block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/teo_zone_setting#cache_prefresh TeoZoneSetting#cache_prefresh}
  */
  readonly cachePrefresh?: TeoZoneSettingCachePrefresh;
  /**
  * client_ip_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/teo_zone_setting#client_ip_header TeoZoneSetting#client_ip_header}
  */
  readonly clientIpHeader?: TeoZoneSettingClientIpHeader;
  /**
  * compression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/teo_zone_setting#compression TeoZoneSetting#compression}
  */
  readonly compression?: TeoZoneSettingCompression;
  /**
  * force_redirect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/teo_zone_setting#force_redirect TeoZoneSetting#force_redirect}
  */
  readonly forceRedirect?: TeoZoneSettingForceRedirect;
  /**
  * https block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/teo_zone_setting#https TeoZoneSetting#https}
  */
  readonly https?: TeoZoneSettingHttps;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/teo_zone_setting#ipv6 TeoZoneSetting#ipv6}
  */
  readonly ipv6?: TeoZoneSettingIpv6;
  /**
  * max_age block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/teo_zone_setting#max_age TeoZoneSetting#max_age}
  */
  readonly maxAge?: TeoZoneSettingMaxAge;
  /**
  * offline_cache block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/teo_zone_setting#offline_cache TeoZoneSetting#offline_cache}
  */
  readonly offlineCache?: TeoZoneSettingOfflineCache;
  /**
  * origin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/teo_zone_setting#origin TeoZoneSetting#origin}
  */
  readonly origin?: TeoZoneSettingOrigin;
  /**
  * post_max_size block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/teo_zone_setting#post_max_size TeoZoneSetting#post_max_size}
  */
  readonly postMaxSize?: TeoZoneSettingPostMaxSize;
  /**
  * quic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/teo_zone_setting#quic TeoZoneSetting#quic}
  */
  readonly quic?: TeoZoneSettingQuic;
  /**
  * smart_routing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/teo_zone_setting#smart_routing TeoZoneSetting#smart_routing}
  */
  readonly smartRouting?: TeoZoneSettingSmartRouting;
  /**
  * upstream_http2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/teo_zone_setting#upstream_http2 TeoZoneSetting#upstream_http2}
  */
  readonly upstreamHttp2?: TeoZoneSettingUpstreamHttp2;
  /**
  * web_socket block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/teo_zone_setting#web_socket TeoZoneSetting#web_socket}
  */
  readonly webSocket?: TeoZoneSettingWebSocket;
}
export interface TeoZoneSettingCacheCache {
  /**
  * Cache expiration time settings.
  * Unit: second. The maximum value is 365 days. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/teo_zone_setting#cache_time TeoZoneSetting#cache_time}
  */
  readonly cacheTime?: number;
  /**
  * Cache configuration switch.
  * - `on`: Enable.
  * - `off`: Disable. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/teo_zone_setting#switch TeoZoneSetting#switch}
  */
  readonly switch?: string;
}

export function teoZoneSettingCacheCacheToTerraform(struct?: TeoZoneSettingCacheCacheOutputReference | TeoZoneSettingCacheCache): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_time: cdktf.numberToTerraform(struct!.cacheTime),
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function teoZoneSettingCacheCacheToHclTerraform(struct?: TeoZoneSettingCacheCacheOutputReference | TeoZoneSettingCacheCache): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_time: {
      value: cdktf.numberToHclTerraform(struct!.cacheTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoZoneSettingCacheCacheOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoZoneSettingCacheCache | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheTime = this._cacheTime;
    }
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoZoneSettingCacheCache | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cacheTime = undefined;
      this._switch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cacheTime = value.cacheTime;
      this._switch = value.switch;
    }
  }

  // cache_time - computed: true, optional: true, required: false
  private _cacheTime?: number; 
  public get cacheTime() {
    return this.getNumberAttribute('cache_time');
  }
  public set cacheTime(value: number) {
    this._cacheTime = value;
  }
  public resetCacheTime() {
    this._cacheTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTimeInput() {
    return this._cacheTime;
  }

  // switch - computed: true, optional: true, required: false
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  public resetSwitch() {
    this._switch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }
}
export interface TeoZoneSettingCacheFollowOrigin {
  /**
  * Specifies whether to follow the origin server configuration.
  * - `on`: Enable.
  * - `off`: Disable. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/teo_zone_setting#switch TeoZoneSetting#switch}
  */
  readonly switch?: string;
}

export function teoZoneSettingCacheFollowOriginToTerraform(struct?: TeoZoneSettingCacheFollowOriginOutputReference | TeoZoneSettingCacheFollowOrigin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function teoZoneSettingCacheFollowOriginToHclTerraform(struct?: TeoZoneSettingCacheFollowOriginOutputReference | TeoZoneSettingCacheFollowOrigin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoZoneSettingCacheFollowOriginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoZoneSettingCacheFollowOrigin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoZoneSettingCacheFollowOrigin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._switch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._switch = value.switch;
    }
  }

  // switch - computed: true, optional: true, required: false
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  public resetSwitch() {
    this._switch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }
}
export interface TeoZoneSettingCacheNoCache {
  /**
  * Whether to cache the configuration.
  * - `on`: Do not cache.
  * - `off`: Cache. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/teo_zone_setting#switch TeoZoneSetting#switch}
  */
  readonly switch?: string;
}

export function teoZoneSettingCacheNoCacheToTerraform(struct?: TeoZoneSettingCacheNoCacheOutputReference | TeoZoneSettingCacheNoCache): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function teoZoneSettingCacheNoCacheToHclTerraform(struct?: TeoZoneSettingCacheNoCacheOutputReference | TeoZoneSettingCacheNoCache): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoZoneSettingCacheNoCacheOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoZoneSettingCacheNoCache | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoZoneSettingCacheNoCache | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._switch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._switch = value.switch;
    }
  }

  // switch - computed: true, optional: true, required: false
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  public resetSwitch() {
    this._switch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }
}
export interface TeoZoneSettingCache {
  /**
  * cache block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/teo_zone_setting#cache TeoZoneSetting#cache}
  */
  readonly cache?: TeoZoneSettingCacheCache;
  /**
  * follow_origin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/teo_zone_setting#follow_origin TeoZoneSetting#follow_origin}
  */
  readonly followOrigin?: TeoZoneSettingCacheFollowOrigin;
  /**
  * no_cache block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/teo_zone_setting#no_cache TeoZoneSetting#no_cache}
  */
  readonly noCache?: TeoZoneSettingCacheNoCache;
}

export function teoZoneSettingCacheToTerraform(struct?: TeoZoneSettingCacheOutputReference | TeoZoneSettingCache): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache: teoZoneSettingCacheCacheToTerraform(struct!.cache),
    follow_origin: teoZoneSettingCacheFollowOriginToTerraform(struct!.followOrigin),
    no_cache: teoZoneSettingCacheNoCacheToTerraform(struct!.noCache),
  }
}


export function teoZoneSettingCacheToHclTerraform(struct?: TeoZoneSettingCacheOutputReference | TeoZoneSettingCache): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache: {
      value: teoZoneSettingCacheCacheToHclTerraform(struct!.cache),
      isBlock: true,
      type: "list",
      storageClassType: "TeoZoneSettingCacheCacheList",
    },
    follow_origin: {
      value: teoZoneSettingCacheFollowOriginToHclTerraform(struct!.followOrigin),
      isBlock: true,
      type: "list",
      storageClassType: "TeoZoneSettingCacheFollowOriginList",
    },
    no_cache: {
      value: teoZoneSettingCacheNoCacheToHclTerraform(struct!.noCache),
      isBlock: true,
      type: "list",
      storageClassType: "TeoZoneSettingCacheNoCacheList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoZoneSettingCacheOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoZoneSettingCache | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cache?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cache = this._cache?.internalValue;
    }
    if (this._followOrigin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.followOrigin = this._followOrigin?.internalValue;
    }
    if (this._noCache?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.noCache = this._noCache?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoZoneSettingCache | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cache.internalValue = undefined;
      this._followOrigin.internalValue = undefined;
      this._noCache.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cache.internalValue = value.cache;
      this._followOrigin.internalValue = value.followOrigin;
      this._noCache.internalValue = value.noCache;
    }
  }

  // cache - computed: false, optional: true, required: false
  private _cache = new TeoZoneSettingCacheCacheOutputReference(this, "cache");
  public get cache() {
    return this._cache;
  }
  public putCache(value: TeoZoneSettingCacheCache) {
    this._cache.internalValue = value;
  }
  public resetCache() {
    this._cache.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheInput() {
    return this._cache.internalValue;
  }

  // follow_origin - computed: false, optional: true, required: false
  private _followOrigin = new TeoZoneSettingCacheFollowOriginOutputReference(this, "follow_origin");
  public get followOrigin() {
    return this._followOrigin;
  }
  public putFollowOrigin(value: TeoZoneSettingCacheFollowOrigin) {
    this._followOrigin.internalValue = value;
  }
  public resetFollowOrigin() {
    this._followOrigin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get followOriginInput() {
    return this._followOrigin.internalValue;
  }

  // no_cache - computed: false, optional: true, required: false
  private _noCache = new TeoZoneSettingCacheNoCacheOutputReference(this, "no_cache");
  public get noCache() {
    return this._noCache;
  }
  public putNoCache(value: TeoZoneSettingCacheNoCache) {
    this._noCache.internalValue = value;
  }
  public resetNoCache() {
    this._noCache.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noCacheInput() {
    return this._noCache.internalValue;
  }
}
export interface TeoZoneSettingCacheKeyQueryString {
  /**
  * - `includeCustom`: Include the specified query strings.
  * - `excludeCustom`: Exclude the specified query strings. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/teo_zone_setting#action TeoZoneSetting#action}
  */
  readonly action?: string;
  /**
  * Whether to use QueryString as part of CacheKey.
  * - `on`: Enable.
  * - `off`: Disable. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/teo_zone_setting#switch TeoZoneSetting#switch}
  */
  readonly switch: string;
  /**
  * Array of query strings used/excluded. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/teo_zone_setting#value TeoZoneSetting#value}
  */
  readonly value?: string[];
}

export function teoZoneSettingCacheKeyQueryStringToTerraform(struct?: TeoZoneSettingCacheKeyQueryStringOutputReference | TeoZoneSettingCacheKeyQueryString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    switch: cdktf.stringToTerraform(struct!.switch),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}


export function teoZoneSettingCacheKeyQueryStringToHclTerraform(struct?: TeoZoneSettingCacheKeyQueryStringOutputReference | TeoZoneSettingCacheKeyQueryString): any {
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
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.value),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoZoneSettingCacheKeyQueryStringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoZoneSettingCacheKeyQueryString | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoZoneSettingCacheKeyQueryString | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._switch = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._switch = value.switch;
      this._value = value.value;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // switch - computed: false, optional: false, required: true
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string[]; 
  public get value() {
    return cdktf.Fn.tolist(this.getListAttribute('value'));
  }
  public set value(value: string[]) {
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
export interface TeoZoneSettingCacheKey {
  /**
  * Specifies whether to enable full-path cache.
  * - `on`: Enable full-path cache (i.e., disable Ignore Query String).
  * - `off`: Disable full-path cache (i.e., enable Ignore Query String). Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/teo_zone_setting#full_url_cache TeoZoneSetting#full_url_cache}
  */
  readonly fullUrlCache?: string;
  /**
  * Specifies whether the cache key is case-sensitive. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/teo_zone_setting#ignore_case TeoZoneSetting#ignore_case}
  */
  readonly ignoreCase?: string;
  /**
  * query_string block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/teo_zone_setting#query_string TeoZoneSetting#query_string}
  */
  readonly queryString?: TeoZoneSettingCacheKeyQueryString;
}

export function teoZoneSettingCacheKeyToTerraform(struct?: TeoZoneSettingCacheKeyOutputReference | TeoZoneSettingCacheKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full_url_cache: cdktf.stringToTerraform(struct!.fullUrlCache),
    ignore_case: cdktf.stringToTerraform(struct!.ignoreCase),
    query_string: teoZoneSettingCacheKeyQueryStringToTerraform(struct!.queryString),
  }
}


export function teoZoneSettingCacheKeyToHclTerraform(struct?: TeoZoneSettingCacheKeyOutputReference | TeoZoneSettingCacheKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full_url_cache: {
      value: cdktf.stringToHclTerraform(struct!.fullUrlCache),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_case: {
      value: cdktf.stringToHclTerraform(struct!.ignoreCase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_string: {
      value: teoZoneSettingCacheKeyQueryStringToHclTerraform(struct!.queryString),
      isBlock: true,
      type: "list",
      storageClassType: "TeoZoneSettingCacheKeyQueryStringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoZoneSettingCacheKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoZoneSettingCacheKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fullUrlCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullUrlCache = this._fullUrlCache;
    }
    if (this._ignoreCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCase = this._ignoreCase;
    }
    if (this._queryString?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryString = this._queryString?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoZoneSettingCacheKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fullUrlCache = undefined;
      this._ignoreCase = undefined;
      this._queryString.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fullUrlCache = value.fullUrlCache;
      this._ignoreCase = value.ignoreCase;
      this._queryString.internalValue = value.queryString;
    }
  }

  // full_url_cache - computed: false, optional: true, required: false
  private _fullUrlCache?: string; 
  public get fullUrlCache() {
    return this.getStringAttribute('full_url_cache');
  }
  public set fullUrlCache(value: string) {
    this._fullUrlCache = value;
  }
  public resetFullUrlCache() {
    this._fullUrlCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullUrlCacheInput() {
    return this._fullUrlCache;
  }

  // ignore_case - computed: false, optional: true, required: false
  private _ignoreCase?: string; 
  public get ignoreCase() {
    return this.getStringAttribute('ignore_case');
  }
  public set ignoreCase(value: string) {
    this._ignoreCase = value;
  }
  public resetIgnoreCase() {
    this._ignoreCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCaseInput() {
    return this._ignoreCase;
  }

  // query_string - computed: false, optional: true, required: false
  private _queryString = new TeoZoneSettingCacheKeyQueryStringOutputReference(this, "query_string");
  public get queryString() {
    return this._queryString;
  }
  public putQueryString(value: TeoZoneSettingCacheKeyQueryString) {
    this._queryString.internalValue = value;
  }
  public resetQueryString() {
    this._queryString.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString.internalValue;
  }
}
export interface TeoZoneSettingCachePrefresh {
  /**
  * Percentage of cache time before try to prefresh. Valid value range: 1-99.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/teo_zone_setting#percent TeoZoneSetting#percent}
  */
  readonly percent?: number;
  /**
  * Specifies whether to enable cache prefresh.
  * - `on`: Enable.
  * - `off`: Disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/teo_zone_setting#switch TeoZoneSetting#switch}
  */
  readonly switch: string;
}

export function teoZoneSettingCachePrefreshToTerraform(struct?: TeoZoneSettingCachePrefreshOutputReference | TeoZoneSettingCachePrefresh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    percent: cdktf.numberToTerraform(struct!.percent),
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function teoZoneSettingCachePrefreshToHclTerraform(struct?: TeoZoneSettingCachePrefreshOutputReference | TeoZoneSettingCachePrefresh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    percent: {
      value: cdktf.numberToHclTerraform(struct!.percent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoZoneSettingCachePrefreshOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoZoneSettingCachePrefresh | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._percent !== undefined) {
      hasAnyValues = true;
      internalValueResult.percent = this._percent;
    }
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoZoneSettingCachePrefresh | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._percent = undefined;
      this._switch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._percent = value.percent;
      this._switch = value.switch;
    }
  }

  // percent - computed: false, optional: true, required: false
  private _percent?: number; 
  public get percent() {
    return this.getNumberAttribute('percent');
  }
  public set percent(value: number) {
    this._percent = value;
  }
  public resetPercent() {
    this._percent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentInput() {
    return this._percent;
  }

  // switch - computed: false, optional: false, required: true
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }
}
export interface TeoZoneSettingClientIpHeader {
  /**
  * Name of the origin-pull client IP request header. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/teo_zone_setting#header_name TeoZoneSetting#header_name}
  */
  readonly headerName?: string;
  /**
  * Specifies whether to enable client IP header.
  * - `on`: Enable.
  * - `off`: Disable. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/teo_zone_setting#switch TeoZoneSetting#switch}
  */
  readonly switch: string;
}

export function teoZoneSettingClientIpHeaderToTerraform(struct?: TeoZoneSettingClientIpHeaderOutputReference | TeoZoneSettingClientIpHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function teoZoneSettingClientIpHeaderToHclTerraform(struct?: TeoZoneSettingClientIpHeaderOutputReference | TeoZoneSettingClientIpHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_name: {
      value: cdktf.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoZoneSettingClientIpHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoZoneSettingClientIpHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoZoneSettingClientIpHeader | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headerName = undefined;
      this._switch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headerName = value.headerName;
      this._switch = value.switch;
    }
  }

  // header_name - computed: false, optional: true, required: false
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  public resetHeaderName() {
    this._headerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }

  // switch - computed: false, optional: false, required: true
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }
}
export interface TeoZoneSettingCompression {
  /**
  * Compression algorithms to select. Valid values: `brotli`, `gzip`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/teo_zone_setting#algorithms TeoZoneSetting#algorithms}
  */
  readonly algorithms?: string[];
  /**
  * Whether to enable Smart compression.
  * - `on`: Enable.
  * - `off`: Disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/teo_zone_setting#switch TeoZoneSetting#switch}
  */
  readonly switch: string;
}

export function teoZoneSettingCompressionToTerraform(struct?: TeoZoneSettingCompressionOutputReference | TeoZoneSettingCompression): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.algorithms),
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function teoZoneSettingCompressionToHclTerraform(struct?: TeoZoneSettingCompressionOutputReference | TeoZoneSettingCompression): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithms: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.algorithms),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoZoneSettingCompressionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoZoneSettingCompression | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithms !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithms = this._algorithms;
    }
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoZoneSettingCompression | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._algorithms = undefined;
      this._switch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._algorithms = value.algorithms;
      this._switch = value.switch;
    }
  }

  // algorithms - computed: true, optional: true, required: false
  private _algorithms?: string[]; 
  public get algorithms() {
    return cdktf.Fn.tolist(this.getListAttribute('algorithms'));
  }
  public set algorithms(value: string[]) {
    this._algorithms = value;
  }
  public resetAlgorithms() {
    this._algorithms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmsInput() {
    return this._algorithms;
  }

  // switch - computed: false, optional: false, required: true
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }
}
export interface TeoZoneSettingForceRedirect {
  /**
  * Redirection status code.
  * - 301
  * - 302 Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/teo_zone_setting#redirect_status_code TeoZoneSetting#redirect_status_code}
  */
  readonly redirectStatusCode?: number;
  /**
  * Whether to enable force redirect.
  * - `on`: Enable.
  * - `off`: Disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/teo_zone_setting#switch TeoZoneSetting#switch}
  */
  readonly switch: string;
}

export function teoZoneSettingForceRedirectToTerraform(struct?: TeoZoneSettingForceRedirectOutputReference | TeoZoneSettingForceRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    redirect_status_code: cdktf.numberToTerraform(struct!.redirectStatusCode),
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function teoZoneSettingForceRedirectToHclTerraform(struct?: TeoZoneSettingForceRedirectOutputReference | TeoZoneSettingForceRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    redirect_status_code: {
      value: cdktf.numberToHclTerraform(struct!.redirectStatusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoZoneSettingForceRedirectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoZoneSettingForceRedirect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._redirectStatusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectStatusCode = this._redirectStatusCode;
    }
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoZoneSettingForceRedirect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._redirectStatusCode = undefined;
      this._switch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._redirectStatusCode = value.redirectStatusCode;
      this._switch = value.switch;
    }
  }

  // redirect_status_code - computed: false, optional: true, required: false
  private _redirectStatusCode?: number; 
  public get redirectStatusCode() {
    return this.getNumberAttribute('redirect_status_code');
  }
  public set redirectStatusCode(value: number) {
    this._redirectStatusCode = value;
  }
  public resetRedirectStatusCode() {
    this._redirectStatusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectStatusCodeInput() {
    return this._redirectStatusCode;
  }

  // switch - computed: false, optional: false, required: true
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }
}
export interface TeoZoneSettingHttpsHsts {
  /**
  * Specifies whether to include subdomain names. Valid values: `on` and `off`. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/teo_zone_setting#include_sub_domains TeoZoneSetting#include_sub_domains}
  */
  readonly includeSubDomains?: string;
  /**
  * MaxAge value in seconds, should be no more than 1 day. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/teo_zone_setting#max_age TeoZoneSetting#max_age}
  */
  readonly maxAge?: number;
  /**
  * Specifies whether to preload. Valid values: `on` and `off`. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/teo_zone_setting#preload TeoZoneSetting#preload}
  */
  readonly preload?: string;
  /**
  * - `on`: Enable.
  * - `off`: Disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/teo_zone_setting#switch TeoZoneSetting#switch}
  */
  readonly switch: string;
}

export function teoZoneSettingHttpsHstsToTerraform(struct?: TeoZoneSettingHttpsHstsOutputReference | TeoZoneSettingHttpsHsts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include_sub_domains: cdktf.stringToTerraform(struct!.includeSubDomains),
    max_age: cdktf.numberToTerraform(struct!.maxAge),
    preload: cdktf.stringToTerraform(struct!.preload),
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function teoZoneSettingHttpsHstsToHclTerraform(struct?: TeoZoneSettingHttpsHstsOutputReference | TeoZoneSettingHttpsHsts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    include_sub_domains: {
      value: cdktf.stringToHclTerraform(struct!.includeSubDomains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_age: {
      value: cdktf.numberToHclTerraform(struct!.maxAge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    preload: {
      value: cdktf.stringToHclTerraform(struct!.preload),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoZoneSettingHttpsHstsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoZoneSettingHttpsHsts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeSubDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeSubDomains = this._includeSubDomains;
    }
    if (this._maxAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAge = this._maxAge;
    }
    if (this._preload !== undefined) {
      hasAnyValues = true;
      internalValueResult.preload = this._preload;
    }
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoZoneSettingHttpsHsts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._includeSubDomains = undefined;
      this._maxAge = undefined;
      this._preload = undefined;
      this._switch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._includeSubDomains = value.includeSubDomains;
      this._maxAge = value.maxAge;
      this._preload = value.preload;
      this._switch = value.switch;
    }
  }

  // include_sub_domains - computed: false, optional: true, required: false
  private _includeSubDomains?: string; 
  public get includeSubDomains() {
    return this.getStringAttribute('include_sub_domains');
  }
  public set includeSubDomains(value: string) {
    this._includeSubDomains = value;
  }
  public resetIncludeSubDomains() {
    this._includeSubDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeSubDomainsInput() {
    return this._includeSubDomains;
  }

  // max_age - computed: false, optional: true, required: false
  private _maxAge?: number; 
  public get maxAge() {
    return this.getNumberAttribute('max_age');
  }
  public set maxAge(value: number) {
    this._maxAge = value;
  }
  public resetMaxAge() {
    this._maxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInput() {
    return this._maxAge;
  }

  // preload - computed: false, optional: true, required: false
  private _preload?: string; 
  public get preload() {
    return this.getStringAttribute('preload');
  }
  public set preload(value: string) {
    this._preload = value;
  }
  public resetPreload() {
    this._preload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preloadInput() {
    return this._preload;
  }

  // switch - computed: false, optional: false, required: true
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }
}
export interface TeoZoneSettingHttps {
  /**
  * HTTP2 configuration switch.
  * - `on`: Enable.
  * - `off`: Disable. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/teo_zone_setting#http2 TeoZoneSetting#http2}
  */
  readonly http2?: string;
  /**
  * OCSP configuration switch.
  * - `on`: Enable.
  * - `off`: Disable.
  * It is disabled by default. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/teo_zone_setting#ocsp_stapling TeoZoneSetting#ocsp_stapling}
  */
  readonly ocspStapling?: string;
  /**
  * TLS version settings. Valid values: `TLSv1`, `TLSV1.1`, `TLSV1.2`, and `TLSv1.3`.
  * Only consecutive versions can be enabled at the same time. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/teo_zone_setting#tls_version TeoZoneSetting#tls_version}
  */
  readonly tlsVersion?: string[];
  /**
  * hsts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/teo_zone_setting#hsts TeoZoneSetting#hsts}
  */
  readonly hsts?: TeoZoneSettingHttpsHsts;
}

export function teoZoneSettingHttpsToTerraform(struct?: TeoZoneSettingHttpsOutputReference | TeoZoneSettingHttps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http2: cdktf.stringToTerraform(struct!.http2),
    ocsp_stapling: cdktf.stringToTerraform(struct!.ocspStapling),
    tls_version: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tlsVersion),
    hsts: teoZoneSettingHttpsHstsToTerraform(struct!.hsts),
  }
}


export function teoZoneSettingHttpsToHclTerraform(struct?: TeoZoneSettingHttpsOutputReference | TeoZoneSettingHttps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http2: {
      value: cdktf.stringToHclTerraform(struct!.http2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ocsp_stapling: {
      value: cdktf.stringToHclTerraform(struct!.ocspStapling),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_version: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tlsVersion),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    hsts: {
      value: teoZoneSettingHttpsHstsToHclTerraform(struct!.hsts),
      isBlock: true,
      type: "list",
      storageClassType: "TeoZoneSettingHttpsHstsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoZoneSettingHttpsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoZoneSettingHttps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._http2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.http2 = this._http2;
    }
    if (this._ocspStapling !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspStapling = this._ocspStapling;
    }
    if (this._tlsVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsVersion = this._tlsVersion;
    }
    if (this._hsts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hsts = this._hsts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoZoneSettingHttps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._http2 = undefined;
      this._ocspStapling = undefined;
      this._tlsVersion = undefined;
      this._hsts.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._http2 = value.http2;
      this._ocspStapling = value.ocspStapling;
      this._tlsVersion = value.tlsVersion;
      this._hsts.internalValue = value.hsts;
    }
  }

  // http2 - computed: false, optional: true, required: false
  private _http2?: string; 
  public get http2() {
    return this.getStringAttribute('http2');
  }
  public set http2(value: string) {
    this._http2 = value;
  }
  public resetHttp2() {
    this._http2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2Input() {
    return this._http2;
  }

  // ocsp_stapling - computed: false, optional: true, required: false
  private _ocspStapling?: string; 
  public get ocspStapling() {
    return this.getStringAttribute('ocsp_stapling');
  }
  public set ocspStapling(value: string) {
    this._ocspStapling = value;
  }
  public resetOcspStapling() {
    this._ocspStapling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspStaplingInput() {
    return this._ocspStapling;
  }

  // tls_version - computed: false, optional: true, required: false
  private _tlsVersion?: string[]; 
  public get tlsVersion() {
    return cdktf.Fn.tolist(this.getListAttribute('tls_version'));
  }
  public set tlsVersion(value: string[]) {
    this._tlsVersion = value;
  }
  public resetTlsVersion() {
    this._tlsVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsVersionInput() {
    return this._tlsVersion;
  }

  // hsts - computed: false, optional: true, required: false
  private _hsts = new TeoZoneSettingHttpsHstsOutputReference(this, "hsts");
  public get hsts() {
    return this._hsts;
  }
  public putHsts(value: TeoZoneSettingHttpsHsts) {
    this._hsts.internalValue = value;
  }
  public resetHsts() {
    this._hsts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hstsInput() {
    return this._hsts.internalValue;
  }
}
export interface TeoZoneSettingIpv6 {
  /**
  * - `on`: Enable.
  * - `off`: Disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/teo_zone_setting#switch TeoZoneSetting#switch}
  */
  readonly switch: string;
}

export function teoZoneSettingIpv6ToTerraform(struct?: TeoZoneSettingIpv6OutputReference | TeoZoneSettingIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function teoZoneSettingIpv6ToHclTerraform(struct?: TeoZoneSettingIpv6OutputReference | TeoZoneSettingIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoZoneSettingIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoZoneSettingIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoZoneSettingIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._switch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._switch = value.switch;
    }
  }

  // switch - computed: false, optional: false, required: true
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }
}
export interface TeoZoneSettingMaxAge {
  /**
  * Specifies whether to follow the max cache age of the origin server.
  * - `on`: Enable.
  * - `off`: Disable.
  * If it's on, MaxAgeTime is ignored. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/teo_zone_setting#follow_origin TeoZoneSetting#follow_origin}
  */
  readonly followOrigin?: string;
  /**
  * Specifies the max age of the cache (in seconds). The maximum value is 365 days. Note: the value 0 means not to cache. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/teo_zone_setting#max_age_time TeoZoneSetting#max_age_time}
  */
  readonly maxAgeTime?: number;
}

export function teoZoneSettingMaxAgeToTerraform(struct?: TeoZoneSettingMaxAgeOutputReference | TeoZoneSettingMaxAge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    follow_origin: cdktf.stringToTerraform(struct!.followOrigin),
    max_age_time: cdktf.numberToTerraform(struct!.maxAgeTime),
  }
}


export function teoZoneSettingMaxAgeToHclTerraform(struct?: TeoZoneSettingMaxAgeOutputReference | TeoZoneSettingMaxAge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    follow_origin: {
      value: cdktf.stringToHclTerraform(struct!.followOrigin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_age_time: {
      value: cdktf.numberToHclTerraform(struct!.maxAgeTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoZoneSettingMaxAgeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoZoneSettingMaxAge | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._followOrigin !== undefined) {
      hasAnyValues = true;
      internalValueResult.followOrigin = this._followOrigin;
    }
    if (this._maxAgeTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAgeTime = this._maxAgeTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoZoneSettingMaxAge | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._followOrigin = undefined;
      this._maxAgeTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._followOrigin = value.followOrigin;
      this._maxAgeTime = value.maxAgeTime;
    }
  }

  // follow_origin - computed: false, optional: true, required: false
  private _followOrigin?: string; 
  public get followOrigin() {
    return this.getStringAttribute('follow_origin');
  }
  public set followOrigin(value: string) {
    this._followOrigin = value;
  }
  public resetFollowOrigin() {
    this._followOrigin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get followOriginInput() {
    return this._followOrigin;
  }

  // max_age_time - computed: false, optional: true, required: false
  private _maxAgeTime?: number; 
  public get maxAgeTime() {
    return this.getNumberAttribute('max_age_time');
  }
  public set maxAgeTime(value: number) {
    this._maxAgeTime = value;
  }
  public resetMaxAgeTime() {
    this._maxAgeTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeTimeInput() {
    return this._maxAgeTime;
  }
}
export interface TeoZoneSettingOfflineCache {
  /**
  * Whether to enable offline cache.
  * - `on`: Enable.
  * - `off`: Disable. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/teo_zone_setting#switch TeoZoneSetting#switch}
  */
  readonly switch: string;
}

export function teoZoneSettingOfflineCacheToTerraform(struct?: TeoZoneSettingOfflineCacheOutputReference | TeoZoneSettingOfflineCache): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function teoZoneSettingOfflineCacheToHclTerraform(struct?: TeoZoneSettingOfflineCacheOutputReference | TeoZoneSettingOfflineCache): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoZoneSettingOfflineCacheOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoZoneSettingOfflineCache | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoZoneSettingOfflineCache | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._switch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._switch = value.switch;
    }
  }

  // switch - computed: false, optional: false, required: true
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }
}
export interface TeoZoneSettingOrigin {
  /**
  * Backup origin sites list. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/teo_zone_setting#backup_origins TeoZoneSetting#backup_origins}
  */
  readonly backupOrigins?: string[];
  /**
  * Origin-pull protocol.
  * - `http`: Switch HTTPS requests to HTTP.
  * - `follow`: Follow the protocol of the request.
  * - `https`: Switch HTTP requests to HTTPS. This only supports port 443 on the origin server. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/teo_zone_setting#origin_pull_protocol TeoZoneSetting#origin_pull_protocol}
  */
  readonly originPullProtocol?: string;
  /**
  * Origin sites list. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/teo_zone_setting#origins TeoZoneSetting#origins}
  */
  readonly origins?: string[];
}

export function teoZoneSettingOriginToTerraform(struct?: TeoZoneSettingOriginOutputReference | TeoZoneSettingOrigin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_origins: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.backupOrigins),
    origin_pull_protocol: cdktf.stringToTerraform(struct!.originPullProtocol),
    origins: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.origins),
  }
}


export function teoZoneSettingOriginToHclTerraform(struct?: TeoZoneSettingOriginOutputReference | TeoZoneSettingOrigin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_origins: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.backupOrigins),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    origin_pull_protocol: {
      value: cdktf.stringToHclTerraform(struct!.originPullProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origins: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.origins),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoZoneSettingOriginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoZoneSettingOrigin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupOrigins !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupOrigins = this._backupOrigins;
    }
    if (this._originPullProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.originPullProtocol = this._originPullProtocol;
    }
    if (this._origins !== undefined) {
      hasAnyValues = true;
      internalValueResult.origins = this._origins;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoZoneSettingOrigin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backupOrigins = undefined;
      this._originPullProtocol = undefined;
      this._origins = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backupOrigins = value.backupOrigins;
      this._originPullProtocol = value.originPullProtocol;
      this._origins = value.origins;
    }
  }

  // backup_origins - computed: true, optional: true, required: false
  private _backupOrigins?: string[]; 
  public get backupOrigins() {
    return cdktf.Fn.tolist(this.getListAttribute('backup_origins'));
  }
  public set backupOrigins(value: string[]) {
    this._backupOrigins = value;
  }
  public resetBackupOrigins() {
    this._backupOrigins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupOriginsInput() {
    return this._backupOrigins;
  }

  // origin_pull_protocol - computed: true, optional: true, required: false
  private _originPullProtocol?: string; 
  public get originPullProtocol() {
    return this.getStringAttribute('origin_pull_protocol');
  }
  public set originPullProtocol(value: string) {
    this._originPullProtocol = value;
  }
  public resetOriginPullProtocol() {
    this._originPullProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originPullProtocolInput() {
    return this._originPullProtocol;
  }

  // origins - computed: true, optional: true, required: false
  private _origins?: string[]; 
  public get origins() {
    return cdktf.Fn.tolist(this.getListAttribute('origins'));
  }
  public set origins(value: string[]) {
    this._origins = value;
  }
  public resetOrigins() {
    this._origins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originsInput() {
    return this._origins;
  }
}
export interface TeoZoneSettingPostMaxSize {
  /**
  * Maximum size. Value range: 1-500 MB. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/teo_zone_setting#max_size TeoZoneSetting#max_size}
  */
  readonly maxSize?: number;
  /**
  * Specifies whether to enable custom setting of the maximum file size.
  * - `on`: Enable. You can set a custom max size.
  * - `off`: Disable. In this case, the max size defaults to 32 MB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/teo_zone_setting#switch TeoZoneSetting#switch}
  */
  readonly switch: string;
}

export function teoZoneSettingPostMaxSizeToTerraform(struct?: TeoZoneSettingPostMaxSizeOutputReference | TeoZoneSettingPostMaxSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_size: cdktf.numberToTerraform(struct!.maxSize),
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function teoZoneSettingPostMaxSizeToHclTerraform(struct?: TeoZoneSettingPostMaxSizeOutputReference | TeoZoneSettingPostMaxSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_size: {
      value: cdktf.numberToHclTerraform(struct!.maxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoZoneSettingPostMaxSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoZoneSettingPostMaxSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSize = this._maxSize;
    }
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoZoneSettingPostMaxSize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxSize = undefined;
      this._switch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxSize = value.maxSize;
      this._switch = value.switch;
    }
  }

  // max_size - computed: false, optional: true, required: false
  private _maxSize?: number; 
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }
  public set maxSize(value: number) {
    this._maxSize = value;
  }
  public resetMaxSize() {
    this._maxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }

  // switch - computed: false, optional: false, required: true
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }
}
export interface TeoZoneSettingQuic {
  /**
  * Whether to enable QUIC.
  * - `on`: Enable.
  * - `off`: Disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/teo_zone_setting#switch TeoZoneSetting#switch}
  */
  readonly switch: string;
}

export function teoZoneSettingQuicToTerraform(struct?: TeoZoneSettingQuicOutputReference | TeoZoneSettingQuic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function teoZoneSettingQuicToHclTerraform(struct?: TeoZoneSettingQuicOutputReference | TeoZoneSettingQuic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoZoneSettingQuicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoZoneSettingQuic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoZoneSettingQuic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._switch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._switch = value.switch;
    }
  }

  // switch - computed: false, optional: false, required: true
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }
}
export interface TeoZoneSettingSmartRouting {
  /**
  * Whether to enable smart acceleration.
  * - `on`: Enable.
  * - `off`: Disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/teo_zone_setting#switch TeoZoneSetting#switch}
  */
  readonly switch: string;
}

export function teoZoneSettingSmartRoutingToTerraform(struct?: TeoZoneSettingSmartRoutingOutputReference | TeoZoneSettingSmartRouting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function teoZoneSettingSmartRoutingToHclTerraform(struct?: TeoZoneSettingSmartRoutingOutputReference | TeoZoneSettingSmartRouting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoZoneSettingSmartRoutingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoZoneSettingSmartRouting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoZoneSettingSmartRouting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._switch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._switch = value.switch;
    }
  }

  // switch - computed: false, optional: false, required: true
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }
}
export interface TeoZoneSettingUpstreamHttp2 {
  /**
  * Whether to enable HTTP2 origin-pull.
  * - `on`: Enable.
  * - `off`: Disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/teo_zone_setting#switch TeoZoneSetting#switch}
  */
  readonly switch: string;
}

export function teoZoneSettingUpstreamHttp2ToTerraform(struct?: TeoZoneSettingUpstreamHttp2OutputReference | TeoZoneSettingUpstreamHttp2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function teoZoneSettingUpstreamHttp2ToHclTerraform(struct?: TeoZoneSettingUpstreamHttp2OutputReference | TeoZoneSettingUpstreamHttp2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoZoneSettingUpstreamHttp2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoZoneSettingUpstreamHttp2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoZoneSettingUpstreamHttp2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._switch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._switch = value.switch;
    }
  }

  // switch - computed: false, optional: false, required: true
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }
}
export interface TeoZoneSettingWebSocket {
  /**
  * Whether to enable custom WebSocket timeout setting. When it's off: it means to keep the default WebSocket connection timeout period, which is 15 seconds. To change the timeout period, please set it to on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/teo_zone_setting#switch TeoZoneSetting#switch}
  */
  readonly switch: string;
  /**
  * Sets timeout period in seconds. Maximum value: 120.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/teo_zone_setting#timeout TeoZoneSetting#timeout}
  */
  readonly timeout?: number;
}

export function teoZoneSettingWebSocketToTerraform(struct?: TeoZoneSettingWebSocketOutputReference | TeoZoneSettingWebSocket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    switch: cdktf.stringToTerraform(struct!.switch),
    timeout: cdktf.numberToTerraform(struct!.timeout),
  }
}


export function teoZoneSettingWebSocketToHclTerraform(struct?: TeoZoneSettingWebSocketOutputReference | TeoZoneSettingWebSocket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoZoneSettingWebSocketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoZoneSettingWebSocket | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoZoneSettingWebSocket | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._switch = undefined;
      this._timeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._switch = value.switch;
      this._timeout = value.timeout;
    }
  }

  // switch - computed: false, optional: false, required: true
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/teo_zone_setting tencentcloud_teo_zone_setting}
*/
export class TeoZoneSetting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_teo_zone_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TeoZoneSetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TeoZoneSetting to import
  * @param importFromId The id of the existing TeoZoneSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/teo_zone_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TeoZoneSetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_teo_zone_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/teo_zone_setting tencentcloud_teo_zone_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TeoZoneSettingConfig
  */
  public constructor(scope: Construct, id: string, config: TeoZoneSettingConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_teo_zone_setting',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.39',
        providerVersionConstraint: '1.82.39'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._zoneId = config.zoneId;
    this._cache.internalValue = config.cache;
    this._cacheKey.internalValue = config.cacheKey;
    this._cachePrefresh.internalValue = config.cachePrefresh;
    this._clientIpHeader.internalValue = config.clientIpHeader;
    this._compression.internalValue = config.compression;
    this._forceRedirect.internalValue = config.forceRedirect;
    this._https.internalValue = config.https;
    this._ipv6.internalValue = config.ipv6;
    this._maxAge.internalValue = config.maxAge;
    this._offlineCache.internalValue = config.offlineCache;
    this._origin.internalValue = config.origin;
    this._postMaxSize.internalValue = config.postMaxSize;
    this._quic.internalValue = config.quic;
    this._smartRouting.internalValue = config.smartRouting;
    this._upstreamHttp2.internalValue = config.upstreamHttp2;
    this._webSocket.internalValue = config.webSocket;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // area - computed: true, optional: false, required: false
  public get area() {
    return this.getStringAttribute('area');
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

  // zone_id - computed: false, optional: false, required: true
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // cache - computed: false, optional: true, required: false
  private _cache = new TeoZoneSettingCacheOutputReference(this, "cache");
  public get cache() {
    return this._cache;
  }
  public putCache(value: TeoZoneSettingCache) {
    this._cache.internalValue = value;
  }
  public resetCache() {
    this._cache.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheInput() {
    return this._cache.internalValue;
  }

  // cache_key - computed: false, optional: true, required: false
  private _cacheKey = new TeoZoneSettingCacheKeyOutputReference(this, "cache_key");
  public get cacheKey() {
    return this._cacheKey;
  }
  public putCacheKey(value: TeoZoneSettingCacheKey) {
    this._cacheKey.internalValue = value;
  }
  public resetCacheKey() {
    this._cacheKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheKeyInput() {
    return this._cacheKey.internalValue;
  }

  // cache_prefresh - computed: false, optional: true, required: false
  private _cachePrefresh = new TeoZoneSettingCachePrefreshOutputReference(this, "cache_prefresh");
  public get cachePrefresh() {
    return this._cachePrefresh;
  }
  public putCachePrefresh(value: TeoZoneSettingCachePrefresh) {
    this._cachePrefresh.internalValue = value;
  }
  public resetCachePrefresh() {
    this._cachePrefresh.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachePrefreshInput() {
    return this._cachePrefresh.internalValue;
  }

  // client_ip_header - computed: false, optional: true, required: false
  private _clientIpHeader = new TeoZoneSettingClientIpHeaderOutputReference(this, "client_ip_header");
  public get clientIpHeader() {
    return this._clientIpHeader;
  }
  public putClientIpHeader(value: TeoZoneSettingClientIpHeader) {
    this._clientIpHeader.internalValue = value;
  }
  public resetClientIpHeader() {
    this._clientIpHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpHeaderInput() {
    return this._clientIpHeader.internalValue;
  }

  // compression - computed: false, optional: true, required: false
  private _compression = new TeoZoneSettingCompressionOutputReference(this, "compression");
  public get compression() {
    return this._compression;
  }
  public putCompression(value: TeoZoneSettingCompression) {
    this._compression.internalValue = value;
  }
  public resetCompression() {
    this._compression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionInput() {
    return this._compression.internalValue;
  }

  // force_redirect - computed: false, optional: true, required: false
  private _forceRedirect = new TeoZoneSettingForceRedirectOutputReference(this, "force_redirect");
  public get forceRedirect() {
    return this._forceRedirect;
  }
  public putForceRedirect(value: TeoZoneSettingForceRedirect) {
    this._forceRedirect.internalValue = value;
  }
  public resetForceRedirect() {
    this._forceRedirect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceRedirectInput() {
    return this._forceRedirect.internalValue;
  }

  // https - computed: false, optional: true, required: false
  private _https = new TeoZoneSettingHttpsOutputReference(this, "https");
  public get https() {
    return this._https;
  }
  public putHttps(value: TeoZoneSettingHttps) {
    this._https.internalValue = value;
  }
  public resetHttps() {
    this._https.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsInput() {
    return this._https.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new TeoZoneSettingIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: TeoZoneSettingIpv6) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }

  // max_age - computed: false, optional: true, required: false
  private _maxAge = new TeoZoneSettingMaxAgeOutputReference(this, "max_age");
  public get maxAge() {
    return this._maxAge;
  }
  public putMaxAge(value: TeoZoneSettingMaxAge) {
    this._maxAge.internalValue = value;
  }
  public resetMaxAge() {
    this._maxAge.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInput() {
    return this._maxAge.internalValue;
  }

  // offline_cache - computed: false, optional: true, required: false
  private _offlineCache = new TeoZoneSettingOfflineCacheOutputReference(this, "offline_cache");
  public get offlineCache() {
    return this._offlineCache;
  }
  public putOfflineCache(value: TeoZoneSettingOfflineCache) {
    this._offlineCache.internalValue = value;
  }
  public resetOfflineCache() {
    this._offlineCache.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offlineCacheInput() {
    return this._offlineCache.internalValue;
  }

  // origin - computed: false, optional: true, required: false
  private _origin = new TeoZoneSettingOriginOutputReference(this, "origin");
  public get origin() {
    return this._origin;
  }
  public putOrigin(value: TeoZoneSettingOrigin) {
    this._origin.internalValue = value;
  }
  public resetOrigin() {
    this._origin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin.internalValue;
  }

  // post_max_size - computed: false, optional: true, required: false
  private _postMaxSize = new TeoZoneSettingPostMaxSizeOutputReference(this, "post_max_size");
  public get postMaxSize() {
    return this._postMaxSize;
  }
  public putPostMaxSize(value: TeoZoneSettingPostMaxSize) {
    this._postMaxSize.internalValue = value;
  }
  public resetPostMaxSize() {
    this._postMaxSize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postMaxSizeInput() {
    return this._postMaxSize.internalValue;
  }

  // quic - computed: false, optional: true, required: false
  private _quic = new TeoZoneSettingQuicOutputReference(this, "quic");
  public get quic() {
    return this._quic;
  }
  public putQuic(value: TeoZoneSettingQuic) {
    this._quic.internalValue = value;
  }
  public resetQuic() {
    this._quic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quicInput() {
    return this._quic.internalValue;
  }

  // smart_routing - computed: false, optional: true, required: false
  private _smartRouting = new TeoZoneSettingSmartRoutingOutputReference(this, "smart_routing");
  public get smartRouting() {
    return this._smartRouting;
  }
  public putSmartRouting(value: TeoZoneSettingSmartRouting) {
    this._smartRouting.internalValue = value;
  }
  public resetSmartRouting() {
    this._smartRouting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smartRoutingInput() {
    return this._smartRouting.internalValue;
  }

  // upstream_http2 - computed: false, optional: true, required: false
  private _upstreamHttp2 = new TeoZoneSettingUpstreamHttp2OutputReference(this, "upstream_http2");
  public get upstreamHttp2() {
    return this._upstreamHttp2;
  }
  public putUpstreamHttp2(value: TeoZoneSettingUpstreamHttp2) {
    this._upstreamHttp2.internalValue = value;
  }
  public resetUpstreamHttp2() {
    this._upstreamHttp2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamHttp2Input() {
    return this._upstreamHttp2.internalValue;
  }

  // web_socket - computed: false, optional: true, required: false
  private _webSocket = new TeoZoneSettingWebSocketOutputReference(this, "web_socket");
  public get webSocket() {
    return this._webSocket;
  }
  public putWebSocket(value: TeoZoneSettingWebSocket) {
    this._webSocket.internalValue = value;
  }
  public resetWebSocket() {
    this._webSocket.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webSocketInput() {
    return this._webSocket.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      cache: teoZoneSettingCacheToTerraform(this._cache.internalValue),
      cache_key: teoZoneSettingCacheKeyToTerraform(this._cacheKey.internalValue),
      cache_prefresh: teoZoneSettingCachePrefreshToTerraform(this._cachePrefresh.internalValue),
      client_ip_header: teoZoneSettingClientIpHeaderToTerraform(this._clientIpHeader.internalValue),
      compression: teoZoneSettingCompressionToTerraform(this._compression.internalValue),
      force_redirect: teoZoneSettingForceRedirectToTerraform(this._forceRedirect.internalValue),
      https: teoZoneSettingHttpsToTerraform(this._https.internalValue),
      ipv6: teoZoneSettingIpv6ToTerraform(this._ipv6.internalValue),
      max_age: teoZoneSettingMaxAgeToTerraform(this._maxAge.internalValue),
      offline_cache: teoZoneSettingOfflineCacheToTerraform(this._offlineCache.internalValue),
      origin: teoZoneSettingOriginToTerraform(this._origin.internalValue),
      post_max_size: teoZoneSettingPostMaxSizeToTerraform(this._postMaxSize.internalValue),
      quic: teoZoneSettingQuicToTerraform(this._quic.internalValue),
      smart_routing: teoZoneSettingSmartRoutingToTerraform(this._smartRouting.internalValue),
      upstream_http2: teoZoneSettingUpstreamHttp2ToTerraform(this._upstreamHttp2.internalValue),
      web_socket: teoZoneSettingWebSocketToTerraform(this._webSocket.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cache: {
        value: teoZoneSettingCacheToHclTerraform(this._cache.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TeoZoneSettingCacheList",
      },
      cache_key: {
        value: teoZoneSettingCacheKeyToHclTerraform(this._cacheKey.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TeoZoneSettingCacheKeyList",
      },
      cache_prefresh: {
        value: teoZoneSettingCachePrefreshToHclTerraform(this._cachePrefresh.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TeoZoneSettingCachePrefreshList",
      },
      client_ip_header: {
        value: teoZoneSettingClientIpHeaderToHclTerraform(this._clientIpHeader.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TeoZoneSettingClientIpHeaderList",
      },
      compression: {
        value: teoZoneSettingCompressionToHclTerraform(this._compression.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TeoZoneSettingCompressionList",
      },
      force_redirect: {
        value: teoZoneSettingForceRedirectToHclTerraform(this._forceRedirect.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TeoZoneSettingForceRedirectList",
      },
      https: {
        value: teoZoneSettingHttpsToHclTerraform(this._https.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TeoZoneSettingHttpsList",
      },
      ipv6: {
        value: teoZoneSettingIpv6ToHclTerraform(this._ipv6.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TeoZoneSettingIpv6List",
      },
      max_age: {
        value: teoZoneSettingMaxAgeToHclTerraform(this._maxAge.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TeoZoneSettingMaxAgeList",
      },
      offline_cache: {
        value: teoZoneSettingOfflineCacheToHclTerraform(this._offlineCache.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TeoZoneSettingOfflineCacheList",
      },
      origin: {
        value: teoZoneSettingOriginToHclTerraform(this._origin.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TeoZoneSettingOriginList",
      },
      post_max_size: {
        value: teoZoneSettingPostMaxSizeToHclTerraform(this._postMaxSize.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TeoZoneSettingPostMaxSizeList",
      },
      quic: {
        value: teoZoneSettingQuicToHclTerraform(this._quic.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TeoZoneSettingQuicList",
      },
      smart_routing: {
        value: teoZoneSettingSmartRoutingToHclTerraform(this._smartRouting.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TeoZoneSettingSmartRoutingList",
      },
      upstream_http2: {
        value: teoZoneSettingUpstreamHttp2ToHclTerraform(this._upstreamHttp2.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TeoZoneSettingUpstreamHttp2List",
      },
      web_socket: {
        value: teoZoneSettingWebSocketToHclTerraform(this._webSocket.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TeoZoneSettingWebSocketList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
