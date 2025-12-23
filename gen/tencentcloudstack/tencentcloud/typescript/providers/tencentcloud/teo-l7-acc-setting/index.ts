// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/teo_l7_acc_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TeoL7AccSettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/teo_l7_acc_setting#id TeoL7AccSetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Zone id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/teo_l7_acc_setting#zone_id TeoL7AccSetting#zone_id}
  */
  readonly zoneId: string;
  /**
  * zone_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/teo_l7_acc_setting#zone_config TeoL7AccSetting#zone_config}
  */
  readonly zoneConfig: TeoL7AccSettingZoneConfig;
}
export interface TeoL7AccSettingZoneConfigAccelerateMainland {
  /**
  * Mainland china acceleration optimization switch. valid values:
  * on: Enable;
  * off: Disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/teo_l7_acc_setting#switch TeoL7AccSetting#switch}
  */
  readonly switch?: string;
}

export function teoL7AccSettingZoneConfigAccelerateMainlandToTerraform(struct?: TeoL7AccSettingZoneConfigAccelerateMainlandOutputReference | TeoL7AccSettingZoneConfigAccelerateMainland): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function teoL7AccSettingZoneConfigAccelerateMainlandToHclTerraform(struct?: TeoL7AccSettingZoneConfigAccelerateMainlandOutputReference | TeoL7AccSettingZoneConfigAccelerateMainland): any {
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

export class TeoL7AccSettingZoneConfigAccelerateMainlandOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccSettingZoneConfigAccelerateMainland | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccSettingZoneConfigAccelerateMainland | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._switch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._switch = value.switch;
    }
  }

  // switch - computed: false, optional: true, required: false
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
export interface TeoL7AccSettingZoneConfigCacheCustomTime {
  /**
  * Custom cache time value, unit: seconds. value range: 0-315360000.
  * Note: This field is required when switch is on; when switch is off, this field is not required and will not take effect if filled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/teo_l7_acc_setting#cache_time TeoL7AccSetting#cache_time}
  */
  readonly cacheTime?: number;
  /**
  * Custom cache time switch. values:
  * on: Enable;
  * off: Disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/teo_l7_acc_setting#switch TeoL7AccSetting#switch}
  */
  readonly switch?: string;
}

export function teoL7AccSettingZoneConfigCacheCustomTimeToTerraform(struct?: TeoL7AccSettingZoneConfigCacheCustomTimeOutputReference | TeoL7AccSettingZoneConfigCacheCustomTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_time: cdktf.numberToTerraform(struct!.cacheTime),
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function teoL7AccSettingZoneConfigCacheCustomTimeToHclTerraform(struct?: TeoL7AccSettingZoneConfigCacheCustomTimeOutputReference | TeoL7AccSettingZoneConfigCacheCustomTime): any {
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

export class TeoL7AccSettingZoneConfigCacheCustomTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccSettingZoneConfigCacheCustomTime | undefined {
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

  public set internalValue(value: TeoL7AccSettingZoneConfigCacheCustomTime | undefined) {
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

  // cache_time - computed: false, optional: true, required: false
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

  // switch - computed: false, optional: true, required: false
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
export interface TeoL7AccSettingZoneConfigCacheFollowOrigin {
  /**
  * Whether to cache when an origin server does not return the cache-control header. this field is required when switch is on; when switch is off, this field is not required and will be ineffective if filled. valid values:
  * on: Cache;
  * off: Do not cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/teo_l7_acc_setting#default_cache TeoL7AccSetting#default_cache}
  */
  readonly defaultCache?: string;
  /**
  * Whether to use the default caching policy when an origin server does not return the cache-control header. this field is required when defaultcache is set to on; otherwise, it is ineffective. when defaultcachetime is not 0, this field should be off. valid values:
  * on: Use the default caching policy.
  * off: Do not use the default caching policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/teo_l7_acc_setting#default_cache_strategy TeoL7AccSetting#default_cache_strategy}
  */
  readonly defaultCacheStrategy?: string;
  /**
  * The default cache time in seconds when an origin server does not return the cache-control header. the value ranges from 0 to 315360000. this field is required when defaultcache is set to on; otherwise, it is ineffective. when defaultcachestrategy is on, this field should be 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/teo_l7_acc_setting#default_cache_time TeoL7AccSetting#default_cache_time}
  */
  readonly defaultCacheTime?: number;
  /**
  * Whether to enable the configuration of following the origin server. Valid values:
  * on: Enable;
  * off: Disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/teo_l7_acc_setting#switch TeoL7AccSetting#switch}
  */
  readonly switch: string;
}

export function teoL7AccSettingZoneConfigCacheFollowOriginToTerraform(struct?: TeoL7AccSettingZoneConfigCacheFollowOriginOutputReference | TeoL7AccSettingZoneConfigCacheFollowOrigin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_cache: cdktf.stringToTerraform(struct!.defaultCache),
    default_cache_strategy: cdktf.stringToTerraform(struct!.defaultCacheStrategy),
    default_cache_time: cdktf.numberToTerraform(struct!.defaultCacheTime),
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function teoL7AccSettingZoneConfigCacheFollowOriginToHclTerraform(struct?: TeoL7AccSettingZoneConfigCacheFollowOriginOutputReference | TeoL7AccSettingZoneConfigCacheFollowOrigin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_cache: {
      value: cdktf.stringToHclTerraform(struct!.defaultCache),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_cache_strategy: {
      value: cdktf.stringToHclTerraform(struct!.defaultCacheStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_cache_time: {
      value: cdktf.numberToHclTerraform(struct!.defaultCacheTime),
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

export class TeoL7AccSettingZoneConfigCacheFollowOriginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccSettingZoneConfigCacheFollowOrigin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultCache = this._defaultCache;
    }
    if (this._defaultCacheStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultCacheStrategy = this._defaultCacheStrategy;
    }
    if (this._defaultCacheTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultCacheTime = this._defaultCacheTime;
    }
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccSettingZoneConfigCacheFollowOrigin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultCache = undefined;
      this._defaultCacheStrategy = undefined;
      this._defaultCacheTime = undefined;
      this._switch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultCache = value.defaultCache;
      this._defaultCacheStrategy = value.defaultCacheStrategy;
      this._defaultCacheTime = value.defaultCacheTime;
      this._switch = value.switch;
    }
  }

  // default_cache - computed: false, optional: true, required: false
  private _defaultCache?: string; 
  public get defaultCache() {
    return this.getStringAttribute('default_cache');
  }
  public set defaultCache(value: string) {
    this._defaultCache = value;
  }
  public resetDefaultCache() {
    this._defaultCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCacheInput() {
    return this._defaultCache;
  }

  // default_cache_strategy - computed: false, optional: true, required: false
  private _defaultCacheStrategy?: string; 
  public get defaultCacheStrategy() {
    return this.getStringAttribute('default_cache_strategy');
  }
  public set defaultCacheStrategy(value: string) {
    this._defaultCacheStrategy = value;
  }
  public resetDefaultCacheStrategy() {
    this._defaultCacheStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCacheStrategyInput() {
    return this._defaultCacheStrategy;
  }

  // default_cache_time - computed: false, optional: true, required: false
  private _defaultCacheTime?: number; 
  public get defaultCacheTime() {
    return this.getNumberAttribute('default_cache_time');
  }
  public set defaultCacheTime(value: number) {
    this._defaultCacheTime = value;
  }
  public resetDefaultCacheTime() {
    this._defaultCacheTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCacheTimeInput() {
    return this._defaultCacheTime;
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
export interface TeoL7AccSettingZoneConfigCacheNoCache {
  /**
  * Whether to enable no-cache configuration. Valid values:
  * on: Enable;
  * off: Disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/teo_l7_acc_setting#switch TeoL7AccSetting#switch}
  */
  readonly switch: string;
}

export function teoL7AccSettingZoneConfigCacheNoCacheToTerraform(struct?: TeoL7AccSettingZoneConfigCacheNoCacheOutputReference | TeoL7AccSettingZoneConfigCacheNoCache): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function teoL7AccSettingZoneConfigCacheNoCacheToHclTerraform(struct?: TeoL7AccSettingZoneConfigCacheNoCacheOutputReference | TeoL7AccSettingZoneConfigCacheNoCache): any {
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

export class TeoL7AccSettingZoneConfigCacheNoCacheOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccSettingZoneConfigCacheNoCache | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccSettingZoneConfigCacheNoCache | undefined) {
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
export interface TeoL7AccSettingZoneConfigCache {
  /**
  * custom_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/teo_l7_acc_setting#custom_time TeoL7AccSetting#custom_time}
  */
  readonly customTime?: TeoL7AccSettingZoneConfigCacheCustomTime;
  /**
  * follow_origin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/teo_l7_acc_setting#follow_origin TeoL7AccSetting#follow_origin}
  */
  readonly followOrigin?: TeoL7AccSettingZoneConfigCacheFollowOrigin;
  /**
  * no_cache block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/teo_l7_acc_setting#no_cache TeoL7AccSetting#no_cache}
  */
  readonly noCache?: TeoL7AccSettingZoneConfigCacheNoCache;
}

export function teoL7AccSettingZoneConfigCacheToTerraform(struct?: TeoL7AccSettingZoneConfigCacheOutputReference | TeoL7AccSettingZoneConfigCache): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_time: teoL7AccSettingZoneConfigCacheCustomTimeToTerraform(struct!.customTime),
    follow_origin: teoL7AccSettingZoneConfigCacheFollowOriginToTerraform(struct!.followOrigin),
    no_cache: teoL7AccSettingZoneConfigCacheNoCacheToTerraform(struct!.noCache),
  }
}


export function teoL7AccSettingZoneConfigCacheToHclTerraform(struct?: TeoL7AccSettingZoneConfigCacheOutputReference | TeoL7AccSettingZoneConfigCache): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_time: {
      value: teoL7AccSettingZoneConfigCacheCustomTimeToHclTerraform(struct!.customTime),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccSettingZoneConfigCacheCustomTimeList",
    },
    follow_origin: {
      value: teoL7AccSettingZoneConfigCacheFollowOriginToHclTerraform(struct!.followOrigin),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccSettingZoneConfigCacheFollowOriginList",
    },
    no_cache: {
      value: teoL7AccSettingZoneConfigCacheNoCacheToHclTerraform(struct!.noCache),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccSettingZoneConfigCacheNoCacheList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoL7AccSettingZoneConfigCacheOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccSettingZoneConfigCache | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customTime = this._customTime?.internalValue;
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

  public set internalValue(value: TeoL7AccSettingZoneConfigCache | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customTime.internalValue = undefined;
      this._followOrigin.internalValue = undefined;
      this._noCache.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customTime.internalValue = value.customTime;
      this._followOrigin.internalValue = value.followOrigin;
      this._noCache.internalValue = value.noCache;
    }
  }

  // custom_time - computed: false, optional: true, required: false
  private _customTime = new TeoL7AccSettingZoneConfigCacheCustomTimeOutputReference(this, "custom_time");
  public get customTime() {
    return this._customTime;
  }
  public putCustomTime(value: TeoL7AccSettingZoneConfigCacheCustomTime) {
    this._customTime.internalValue = value;
  }
  public resetCustomTime() {
    this._customTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customTimeInput() {
    return this._customTime.internalValue;
  }

  // follow_origin - computed: false, optional: true, required: false
  private _followOrigin = new TeoL7AccSettingZoneConfigCacheFollowOriginOutputReference(this, "follow_origin");
  public get followOrigin() {
    return this._followOrigin;
  }
  public putFollowOrigin(value: TeoL7AccSettingZoneConfigCacheFollowOrigin) {
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
  private _noCache = new TeoL7AccSettingZoneConfigCacheNoCacheOutputReference(this, "no_cache");
  public get noCache() {
    return this._noCache;
  }
  public putNoCache(value: TeoL7AccSettingZoneConfigCacheNoCache) {
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
export interface TeoL7AccSettingZoneConfigCacheKeyQueryString {
  /**
  * Actions to retain/ignore specified parameters in the query string. values:
  * includeCustom: retain partial parameters;
  * excludeCustom: ignore partial parameters.
  * Note: This field is required when switch is on. when switch is off, this field is not required and will not take effect if filled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/teo_l7_acc_setting#action TeoL7AccSetting#action}
  */
  readonly action?: string;
  /**
  * Query string retain/ignore specified parameter switch. valid values are:
  * on: Enable;
  * off: Disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/teo_l7_acc_setting#switch TeoL7AccSetting#switch}
  */
  readonly switch?: string;
  /**
  * List of parameter names to be retained/ignored in the query string.
  * note: This field is required when switch is on. when switch is off, this field is not required and will not take effect if filled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/teo_l7_acc_setting#values TeoL7AccSetting#values}
  */
  readonly values?: string[];
}

export function teoL7AccSettingZoneConfigCacheKeyQueryStringToTerraform(struct?: TeoL7AccSettingZoneConfigCacheKeyQueryStringOutputReference | TeoL7AccSettingZoneConfigCacheKeyQueryString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    switch: cdktf.stringToTerraform(struct!.switch),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function teoL7AccSettingZoneConfigCacheKeyQueryStringToHclTerraform(struct?: TeoL7AccSettingZoneConfigCacheKeyQueryStringOutputReference | TeoL7AccSettingZoneConfigCacheKeyQueryString): any {
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
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoL7AccSettingZoneConfigCacheKeyQueryStringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccSettingZoneConfigCacheKeyQueryString | undefined {
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
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccSettingZoneConfigCacheKeyQueryString | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._switch = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._switch = value.switch;
      this._values = value.values;
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

  // switch - computed: false, optional: true, required: false
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface TeoL7AccSettingZoneConfigCacheKey {
  /**
  * Whether to enable full-path cache. values:
  * on: Enable full-path cache (i.e., disable ignore query string);
  * off: Disable full-path cache (i.e., enable ignore query string).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/teo_l7_acc_setting#full_url_cache TeoL7AccSetting#full_url_cache}
  */
  readonly fullUrlCache?: string;
  /**
  * Whether to ignore case in the cache key. values:
  * on: Ignore;
  * off: Not ignore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/teo_l7_acc_setting#ignore_case TeoL7AccSetting#ignore_case}
  */
  readonly ignoreCase?: string;
  /**
  * query_string block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/teo_l7_acc_setting#query_string TeoL7AccSetting#query_string}
  */
  readonly queryString?: TeoL7AccSettingZoneConfigCacheKeyQueryString;
}

export function teoL7AccSettingZoneConfigCacheKeyToTerraform(struct?: TeoL7AccSettingZoneConfigCacheKeyOutputReference | TeoL7AccSettingZoneConfigCacheKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full_url_cache: cdktf.stringToTerraform(struct!.fullUrlCache),
    ignore_case: cdktf.stringToTerraform(struct!.ignoreCase),
    query_string: teoL7AccSettingZoneConfigCacheKeyQueryStringToTerraform(struct!.queryString),
  }
}


export function teoL7AccSettingZoneConfigCacheKeyToHclTerraform(struct?: TeoL7AccSettingZoneConfigCacheKeyOutputReference | TeoL7AccSettingZoneConfigCacheKey): any {
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
      value: teoL7AccSettingZoneConfigCacheKeyQueryStringToHclTerraform(struct!.queryString),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccSettingZoneConfigCacheKeyQueryStringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoL7AccSettingZoneConfigCacheKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccSettingZoneConfigCacheKey | undefined {
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

  public set internalValue(value: TeoL7AccSettingZoneConfigCacheKey | undefined) {
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
  private _queryString = new TeoL7AccSettingZoneConfigCacheKeyQueryStringOutputReference(this, "query_string");
  public get queryString() {
    return this._queryString;
  }
  public putQueryString(value: TeoL7AccSettingZoneConfigCacheKeyQueryString) {
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
export interface TeoL7AccSettingZoneConfigCachePrefresh {
  /**
  * Prefresh interval set as a percentage of the node cache time. value range: 1-99.
  * Note: This field is required when switch is on; when switch is off, this field is not required and will not take effect if filled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/teo_l7_acc_setting#cache_time_percent TeoL7AccSetting#cache_time_percent}
  */
  readonly cacheTimePercent?: number;
  /**
  * Whether to enable cache prefresh. values:
  * on: Enable;
  * off: Disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/teo_l7_acc_setting#switch TeoL7AccSetting#switch}
  */
  readonly switch?: string;
}

export function teoL7AccSettingZoneConfigCachePrefreshToTerraform(struct?: TeoL7AccSettingZoneConfigCachePrefreshOutputReference | TeoL7AccSettingZoneConfigCachePrefresh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_time_percent: cdktf.numberToTerraform(struct!.cacheTimePercent),
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function teoL7AccSettingZoneConfigCachePrefreshToHclTerraform(struct?: TeoL7AccSettingZoneConfigCachePrefreshOutputReference | TeoL7AccSettingZoneConfigCachePrefresh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_time_percent: {
      value: cdktf.numberToHclTerraform(struct!.cacheTimePercent),
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

export class TeoL7AccSettingZoneConfigCachePrefreshOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccSettingZoneConfigCachePrefresh | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheTimePercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheTimePercent = this._cacheTimePercent;
    }
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccSettingZoneConfigCachePrefresh | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cacheTimePercent = undefined;
      this._switch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cacheTimePercent = value.cacheTimePercent;
      this._switch = value.switch;
    }
  }

  // cache_time_percent - computed: false, optional: true, required: false
  private _cacheTimePercent?: number; 
  public get cacheTimePercent() {
    return this.getNumberAttribute('cache_time_percent');
  }
  public set cacheTimePercent(value: number) {
    this._cacheTimePercent = value;
  }
  public resetCacheTimePercent() {
    this._cacheTimePercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTimePercentInput() {
    return this._cacheTimePercent;
  }

  // switch - computed: false, optional: true, required: false
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
export interface TeoL7AccSettingZoneConfigClientIpCountry {
  /**
  * Name of the request header that contains the client IP region. It is valid when Switch=on.
  * The default value EO-Client-IPCountry is used when it is not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/teo_l7_acc_setting#header_name TeoL7AccSetting#header_name}
  */
  readonly headerName?: string;
  /**
  * Whether to enable configuration. Values:
  * on: Enable;
  * off: Disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/teo_l7_acc_setting#switch TeoL7AccSetting#switch}
  */
  readonly switch?: string;
}

export function teoL7AccSettingZoneConfigClientIpCountryToTerraform(struct?: TeoL7AccSettingZoneConfigClientIpCountryOutputReference | TeoL7AccSettingZoneConfigClientIpCountry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function teoL7AccSettingZoneConfigClientIpCountryToHclTerraform(struct?: TeoL7AccSettingZoneConfigClientIpCountryOutputReference | TeoL7AccSettingZoneConfigClientIpCountry): any {
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

export class TeoL7AccSettingZoneConfigClientIpCountryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccSettingZoneConfigClientIpCountry | undefined {
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

  public set internalValue(value: TeoL7AccSettingZoneConfigClientIpCountry | undefined) {
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

  // switch - computed: false, optional: true, required: false
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
export interface TeoL7AccSettingZoneConfigClientIpHeader {
  /**
  * Name of the request header containing the client ip address for origin-pull. when switch is on, this parameter is required. x-forwarded-for is not allowed for this parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/teo_l7_acc_setting#header_name TeoL7AccSetting#header_name}
  */
  readonly headerName?: string;
  /**
  * Whether to enable configuration. values:
  * on: Enable;
  * off: Disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/teo_l7_acc_setting#switch TeoL7AccSetting#switch}
  */
  readonly switch?: string;
}

export function teoL7AccSettingZoneConfigClientIpHeaderToTerraform(struct?: TeoL7AccSettingZoneConfigClientIpHeaderOutputReference | TeoL7AccSettingZoneConfigClientIpHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function teoL7AccSettingZoneConfigClientIpHeaderToHclTerraform(struct?: TeoL7AccSettingZoneConfigClientIpHeaderOutputReference | TeoL7AccSettingZoneConfigClientIpHeader): any {
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

export class TeoL7AccSettingZoneConfigClientIpHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccSettingZoneConfigClientIpHeader | undefined {
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

  public set internalValue(value: TeoL7AccSettingZoneConfigClientIpHeader | undefined) {
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

  // switch - computed: false, optional: true, required: false
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
export interface TeoL7AccSettingZoneConfigCompression {
  /**
  * Supported compression algorithm list. this field is required when switch is on; otherwise, it is not effective. valid values:
  * brotli: Brotli algorithm;
  * gzip: Gzip algorithm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/teo_l7_acc_setting#algorithms TeoL7AccSetting#algorithms}
  */
  readonly algorithms?: string[];
  /**
  * Whether to enable smart compression. values:
  * on: Enable;
  * off: Disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/teo_l7_acc_setting#switch TeoL7AccSetting#switch}
  */
  readonly switch?: string;
}

export function teoL7AccSettingZoneConfigCompressionToTerraform(struct?: TeoL7AccSettingZoneConfigCompressionOutputReference | TeoL7AccSettingZoneConfigCompression): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.algorithms),
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function teoL7AccSettingZoneConfigCompressionToHclTerraform(struct?: TeoL7AccSettingZoneConfigCompressionOutputReference | TeoL7AccSettingZoneConfigCompression): any {
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

export class TeoL7AccSettingZoneConfigCompressionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccSettingZoneConfigCompression | undefined {
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

  public set internalValue(value: TeoL7AccSettingZoneConfigCompression | undefined) {
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

  // algorithms - computed: false, optional: true, required: false
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

  // switch - computed: false, optional: true, required: false
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
export interface TeoL7AccSettingZoneConfigForceRedirectHttps {
  /**
  * Redirection status code. this field is required when switch is on; otherwise, it is not effective. valid values are:
  * 301: 301 redirect;
  * 302: 302 redirect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/teo_l7_acc_setting#redirect_status_code TeoL7AccSetting#redirect_status_code}
  */
  readonly redirectStatusCode?: number;
  /**
  * Whether to enable forced redirect configuration switch. values:
  * on: Enable;
  * off: Disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/teo_l7_acc_setting#switch TeoL7AccSetting#switch}
  */
  readonly switch?: string;
}

export function teoL7AccSettingZoneConfigForceRedirectHttpsToTerraform(struct?: TeoL7AccSettingZoneConfigForceRedirectHttpsOutputReference | TeoL7AccSettingZoneConfigForceRedirectHttps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    redirect_status_code: cdktf.numberToTerraform(struct!.redirectStatusCode),
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function teoL7AccSettingZoneConfigForceRedirectHttpsToHclTerraform(struct?: TeoL7AccSettingZoneConfigForceRedirectHttpsOutputReference | TeoL7AccSettingZoneConfigForceRedirectHttps): any {
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

export class TeoL7AccSettingZoneConfigForceRedirectHttpsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccSettingZoneConfigForceRedirectHttps | undefined {
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

  public set internalValue(value: TeoL7AccSettingZoneConfigForceRedirectHttps | undefined) {
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

  // switch - computed: false, optional: true, required: false
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
export interface TeoL7AccSettingZoneConfigGrpc {
  /**
  * Whether to enable grpc. values:
  * on: Enable;
  * off: Disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/teo_l7_acc_setting#switch TeoL7AccSetting#switch}
  */
  readonly switch?: string;
}

export function teoL7AccSettingZoneConfigGrpcToTerraform(struct?: TeoL7AccSettingZoneConfigGrpcOutputReference | TeoL7AccSettingZoneConfigGrpc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function teoL7AccSettingZoneConfigGrpcToHclTerraform(struct?: TeoL7AccSettingZoneConfigGrpcOutputReference | TeoL7AccSettingZoneConfigGrpc): any {
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

export class TeoL7AccSettingZoneConfigGrpcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccSettingZoneConfigGrpc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccSettingZoneConfigGrpc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._switch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._switch = value.switch;
    }
  }

  // switch - computed: false, optional: true, required: false
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
export interface TeoL7AccSettingZoneConfigHsts {
  /**
  * Whether to allow other subdomains to inherit the same hsts header. values:
  * on: Allows other subdomains to inherit the same hsts header;
  * off: Does not allow other subdomains to inherit the same hsts header.
  * Note: When switch is on, this field is required; when switch is off, this field is not required and will not take effect if filled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/teo_l7_acc_setting#include_sub_domains TeoL7AccSetting#include_sub_domains}
  */
  readonly includeSubDomains?: string;
  /**
  * Whether to allow the browser to preload the hsts header. valid values:
  * on: Allows the browser to preload the hsts header;
  * off: Does not allow the browser to preload the hsts header.
  * Note: When switch is on, this field is required; when switch is off, this field is not required and will not take effect if filled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/teo_l7_acc_setting#preload TeoL7AccSetting#preload}
  */
  readonly preload?: string;
  /**
  * Whether to enable hsts. values:
  * on: Enable;
  * off: Disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/teo_l7_acc_setting#switch TeoL7AccSetting#switch}
  */
  readonly switch?: string;
  /**
  * Cache hsts header time, unit: seconds. value range: 1-31536000.
  * Note: This field is required when switch is on; when switch is off, this field is not required and will not take effect if filled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/teo_l7_acc_setting#timeout TeoL7AccSetting#timeout}
  */
  readonly timeout?: number;
}

export function teoL7AccSettingZoneConfigHstsToTerraform(struct?: TeoL7AccSettingZoneConfigHstsOutputReference | TeoL7AccSettingZoneConfigHsts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include_sub_domains: cdktf.stringToTerraform(struct!.includeSubDomains),
    preload: cdktf.stringToTerraform(struct!.preload),
    switch: cdktf.stringToTerraform(struct!.switch),
    timeout: cdktf.numberToTerraform(struct!.timeout),
  }
}


export function teoL7AccSettingZoneConfigHstsToHclTerraform(struct?: TeoL7AccSettingZoneConfigHstsOutputReference | TeoL7AccSettingZoneConfigHsts): any {
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

export class TeoL7AccSettingZoneConfigHstsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccSettingZoneConfigHsts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeSubDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeSubDomains = this._includeSubDomains;
    }
    if (this._preload !== undefined) {
      hasAnyValues = true;
      internalValueResult.preload = this._preload;
    }
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

  public set internalValue(value: TeoL7AccSettingZoneConfigHsts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._includeSubDomains = undefined;
      this._preload = undefined;
      this._switch = undefined;
      this._timeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._includeSubDomains = value.includeSubDomains;
      this._preload = value.preload;
      this._switch = value.switch;
      this._timeout = value.timeout;
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

  // switch - computed: false, optional: true, required: false
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
export interface TeoL7AccSettingZoneConfigHttp2 {
  /**
  * Whether to enable http2 access. values:
  * on: Enable;
  * off: Disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/teo_l7_acc_setting#switch TeoL7AccSetting#switch}
  */
  readonly switch?: string;
}

export function teoL7AccSettingZoneConfigHttp2ToTerraform(struct?: TeoL7AccSettingZoneConfigHttp2OutputReference | TeoL7AccSettingZoneConfigHttp2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function teoL7AccSettingZoneConfigHttp2ToHclTerraform(struct?: TeoL7AccSettingZoneConfigHttp2OutputReference | TeoL7AccSettingZoneConfigHttp2): any {
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

export class TeoL7AccSettingZoneConfigHttp2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccSettingZoneConfigHttp2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccSettingZoneConfigHttp2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._switch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._switch = value.switch;
    }
  }

  // switch - computed: false, optional: true, required: false
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
export interface TeoL7AccSettingZoneConfigIpv6 {
  /**
  * Whether to enable ipv6 access functionality. valid values:
  * on: Enable;
  * off: Disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/teo_l7_acc_setting#switch TeoL7AccSetting#switch}
  */
  readonly switch?: string;
}

export function teoL7AccSettingZoneConfigIpv6ToTerraform(struct?: TeoL7AccSettingZoneConfigIpv6OutputReference | TeoL7AccSettingZoneConfigIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function teoL7AccSettingZoneConfigIpv6ToHclTerraform(struct?: TeoL7AccSettingZoneConfigIpv6OutputReference | TeoL7AccSettingZoneConfigIpv6): any {
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

export class TeoL7AccSettingZoneConfigIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccSettingZoneConfigIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccSettingZoneConfigIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._switch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._switch = value.switch;
    }
  }

  // switch - computed: false, optional: true, required: false
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
export interface TeoL7AccSettingZoneConfigMaxAge {
  /**
  * Custom cache time value, unit: seconds. value range: 0-315360000.
  * Note: When followorigin is off, it means not following the origin server and using cachetime to set the cache time; otherwise, this field will not take effect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/teo_l7_acc_setting#cache_time TeoL7AccSetting#cache_time}
  */
  readonly cacheTime?: number;
  /**
  * Specifies whether to follow the origin server cache-control configuration, with the following values:
  * on: Follow the origin server and ignore the field cachetime;
  * off: Do not follow the origin server and apply the field cachetime.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/teo_l7_acc_setting#follow_origin TeoL7AccSetting#follow_origin}
  */
  readonly followOrigin?: string;
}

export function teoL7AccSettingZoneConfigMaxAgeToTerraform(struct?: TeoL7AccSettingZoneConfigMaxAgeOutputReference | TeoL7AccSettingZoneConfigMaxAge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_time: cdktf.numberToTerraform(struct!.cacheTime),
    follow_origin: cdktf.stringToTerraform(struct!.followOrigin),
  }
}


export function teoL7AccSettingZoneConfigMaxAgeToHclTerraform(struct?: TeoL7AccSettingZoneConfigMaxAgeOutputReference | TeoL7AccSettingZoneConfigMaxAge): any {
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
    follow_origin: {
      value: cdktf.stringToHclTerraform(struct!.followOrigin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoL7AccSettingZoneConfigMaxAgeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccSettingZoneConfigMaxAge | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheTime = this._cacheTime;
    }
    if (this._followOrigin !== undefined) {
      hasAnyValues = true;
      internalValueResult.followOrigin = this._followOrigin;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccSettingZoneConfigMaxAge | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cacheTime = undefined;
      this._followOrigin = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cacheTime = value.cacheTime;
      this._followOrigin = value.followOrigin;
    }
  }

  // cache_time - computed: false, optional: true, required: false
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
}
export interface TeoL7AccSettingZoneConfigOcspStapling {
  /**
  * Whether to enable ocsp stapling configuration switch. values:
  * on: Enable;
  * off: Disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/teo_l7_acc_setting#switch TeoL7AccSetting#switch}
  */
  readonly switch?: string;
}

export function teoL7AccSettingZoneConfigOcspStaplingToTerraform(struct?: TeoL7AccSettingZoneConfigOcspStaplingOutputReference | TeoL7AccSettingZoneConfigOcspStapling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function teoL7AccSettingZoneConfigOcspStaplingToHclTerraform(struct?: TeoL7AccSettingZoneConfigOcspStaplingOutputReference | TeoL7AccSettingZoneConfigOcspStapling): any {
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

export class TeoL7AccSettingZoneConfigOcspStaplingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccSettingZoneConfigOcspStapling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccSettingZoneConfigOcspStapling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._switch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._switch = value.switch;
    }
  }

  // switch - computed: false, optional: true, required: false
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
export interface TeoL7AccSettingZoneConfigOfflineCache {
  /**
  * Whether to enable offline caching. values:
  * on: Enable;
  * off: Disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/teo_l7_acc_setting#switch TeoL7AccSetting#switch}
  */
  readonly switch?: string;
}

export function teoL7AccSettingZoneConfigOfflineCacheToTerraform(struct?: TeoL7AccSettingZoneConfigOfflineCacheOutputReference | TeoL7AccSettingZoneConfigOfflineCache): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function teoL7AccSettingZoneConfigOfflineCacheToHclTerraform(struct?: TeoL7AccSettingZoneConfigOfflineCacheOutputReference | TeoL7AccSettingZoneConfigOfflineCache): any {
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

export class TeoL7AccSettingZoneConfigOfflineCacheOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccSettingZoneConfigOfflineCache | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccSettingZoneConfigOfflineCache | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._switch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._switch = value.switch;
    }
  }

  // switch - computed: false, optional: true, required: false
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
export interface TeoL7AccSettingZoneConfigPostMaxSize {
  /**
  * Maximum size of the file uploaded for streaming via a post request, in bytes. value range: 1 * 2^20 bytes to 500 * 2^20 bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/teo_l7_acc_setting#max_size TeoL7AccSetting#max_size}
  */
  readonly maxSize?: number;
  /**
  * Whether to enable post request file upload limit, in bytes (default limit: 32 * 2^20 bytes). valid values:
  * on: Enable limit;
  * off: Disable limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/teo_l7_acc_setting#switch TeoL7AccSetting#switch}
  */
  readonly switch?: string;
}

export function teoL7AccSettingZoneConfigPostMaxSizeToTerraform(struct?: TeoL7AccSettingZoneConfigPostMaxSizeOutputReference | TeoL7AccSettingZoneConfigPostMaxSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_size: cdktf.numberToTerraform(struct!.maxSize),
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function teoL7AccSettingZoneConfigPostMaxSizeToHclTerraform(struct?: TeoL7AccSettingZoneConfigPostMaxSizeOutputReference | TeoL7AccSettingZoneConfigPostMaxSize): any {
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

export class TeoL7AccSettingZoneConfigPostMaxSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccSettingZoneConfigPostMaxSize | undefined {
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

  public set internalValue(value: TeoL7AccSettingZoneConfigPostMaxSize | undefined) {
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

  // switch - computed: false, optional: true, required: false
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
export interface TeoL7AccSettingZoneConfigQuic {
  /**
  * Whether to enable quic. values:
  * on: Enable;
  * off: Disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/teo_l7_acc_setting#switch TeoL7AccSetting#switch}
  */
  readonly switch?: string;
}

export function teoL7AccSettingZoneConfigQuicToTerraform(struct?: TeoL7AccSettingZoneConfigQuicOutputReference | TeoL7AccSettingZoneConfigQuic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function teoL7AccSettingZoneConfigQuicToHclTerraform(struct?: TeoL7AccSettingZoneConfigQuicOutputReference | TeoL7AccSettingZoneConfigQuic): any {
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

export class TeoL7AccSettingZoneConfigQuicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccSettingZoneConfigQuic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccSettingZoneConfigQuic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._switch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._switch = value.switch;
    }
  }

  // switch - computed: false, optional: true, required: false
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
export interface TeoL7AccSettingZoneConfigSmartRouting {
  /**
  * Whether to enable smart acceleration. values:
  * on: Enable;
  * off: Disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/teo_l7_acc_setting#switch TeoL7AccSetting#switch}
  */
  readonly switch?: string;
}

export function teoL7AccSettingZoneConfigSmartRoutingToTerraform(struct?: TeoL7AccSettingZoneConfigSmartRoutingOutputReference | TeoL7AccSettingZoneConfigSmartRouting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function teoL7AccSettingZoneConfigSmartRoutingToHclTerraform(struct?: TeoL7AccSettingZoneConfigSmartRoutingOutputReference | TeoL7AccSettingZoneConfigSmartRouting): any {
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

export class TeoL7AccSettingZoneConfigSmartRoutingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccSettingZoneConfigSmartRouting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccSettingZoneConfigSmartRouting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._switch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._switch = value.switch;
    }
  }

  // switch - computed: false, optional: true, required: false
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
export interface TeoL7AccSettingZoneConfigStandardDebug {
  /**
  * The client ip to allow. it can be an ipv4/ipv6 address or a cidr block. `0.0.0.0/0` means to allow all ipv4 clients for debugging; `::/0` means to allow all ipv6 clients for debugging; `127.0.0.1` is not allowed.
  * Note: this field is required when switch=on and the number of entries should be 1-100. when switch=off, this field is not required and any value specified will not take effect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/teo_l7_acc_setting#allow_client_ip_list TeoL7AccSetting#allow_client_ip_list}
  */
  readonly allowClientIpList?: string[];
  /**
  * Debug feature expiration time. the feature will be disabled after the set time.
  * Note: this field is required when switch=on. when switch=off, this field is not required and any value specified will not take effect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/teo_l7_acc_setting#expires TeoL7AccSetting#expires}
  */
  readonly expires?: string;
  /**
  * Whether to enable standard debugging. values:
  * on: Enable;
  * off: Disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/teo_l7_acc_setting#switch TeoL7AccSetting#switch}
  */
  readonly switch?: string;
}

export function teoL7AccSettingZoneConfigStandardDebugToTerraform(struct?: TeoL7AccSettingZoneConfigStandardDebugOutputReference | TeoL7AccSettingZoneConfigStandardDebug): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_client_ip_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowClientIpList),
    expires: cdktf.stringToTerraform(struct!.expires),
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function teoL7AccSettingZoneConfigStandardDebugToHclTerraform(struct?: TeoL7AccSettingZoneConfigStandardDebugOutputReference | TeoL7AccSettingZoneConfigStandardDebug): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_client_ip_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowClientIpList),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    expires: {
      value: cdktf.stringToHclTerraform(struct!.expires),
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

export class TeoL7AccSettingZoneConfigStandardDebugOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccSettingZoneConfigStandardDebug | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowClientIpList !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowClientIpList = this._allowClientIpList;
    }
    if (this._expires !== undefined) {
      hasAnyValues = true;
      internalValueResult.expires = this._expires;
    }
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccSettingZoneConfigStandardDebug | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowClientIpList = undefined;
      this._expires = undefined;
      this._switch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowClientIpList = value.allowClientIpList;
      this._expires = value.expires;
      this._switch = value.switch;
    }
  }

  // allow_client_ip_list - computed: false, optional: true, required: false
  private _allowClientIpList?: string[]; 
  public get allowClientIpList() {
    return cdktf.Fn.tolist(this.getListAttribute('allow_client_ip_list'));
  }
  public set allowClientIpList(value: string[]) {
    this._allowClientIpList = value;
  }
  public resetAllowClientIpList() {
    this._allowClientIpList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowClientIpListInput() {
    return this._allowClientIpList;
  }

  // expires - computed: false, optional: true, required: false
  private _expires?: string; 
  public get expires() {
    return this.getStringAttribute('expires');
  }
  public set expires(value: string) {
    this._expires = value;
  }
  public resetExpires() {
    this._expires = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiresInput() {
    return this._expires;
  }

  // switch - computed: false, optional: true, required: false
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
export interface TeoL7AccSettingZoneConfigTlsConfig {
  /**
  * Cipher suite. for detailed information, please refer to tls versions and cipher suites description. valid values:
  * loose-v2023: loose-v2023 cipher suite;
  * general-v2023: general-v2023 cipher suite;
  * strict-v2023: strict-v2023 cipher suite.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/teo_l7_acc_setting#cipher_suite TeoL7AccSetting#cipher_suite}
  */
  readonly cipherSuite?: string;
  /**
  * TLS version. at least one must be specified. if multiple versions are specified, they must be consecutive, e.g., enable tls1, 1.1, 1.2, and 1.3. it is not allowed to enable only 1 and 1.2 while disabling 1.1. valid values:
  * TLSv1: TLSv1 version;
  * TLSv1.1: TLSv1.1 version;
  * TLSv1.2: TLSv1.2 version;
  * TLSv1.3: TLSv1.3 version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/teo_l7_acc_setting#version TeoL7AccSetting#version}
  */
  readonly version?: string[];
}

export function teoL7AccSettingZoneConfigTlsConfigToTerraform(struct?: TeoL7AccSettingZoneConfigTlsConfigOutputReference | TeoL7AccSettingZoneConfigTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cipher_suite: cdktf.stringToTerraform(struct!.cipherSuite),
    version: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.version),
  }
}


export function teoL7AccSettingZoneConfigTlsConfigToHclTerraform(struct?: TeoL7AccSettingZoneConfigTlsConfigOutputReference | TeoL7AccSettingZoneConfigTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cipher_suite: {
      value: cdktf.stringToHclTerraform(struct!.cipherSuite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.version),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoL7AccSettingZoneConfigTlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccSettingZoneConfigTlsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cipherSuite !== undefined) {
      hasAnyValues = true;
      internalValueResult.cipherSuite = this._cipherSuite;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccSettingZoneConfigTlsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cipherSuite = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cipherSuite = value.cipherSuite;
      this._version = value.version;
    }
  }

  // cipher_suite - computed: false, optional: true, required: false
  private _cipherSuite?: string; 
  public get cipherSuite() {
    return this.getStringAttribute('cipher_suite');
  }
  public set cipherSuite(value: string) {
    this._cipherSuite = value;
  }
  public resetCipherSuite() {
    this._cipherSuite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherSuiteInput() {
    return this._cipherSuite;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string[]; 
  public get version() {
    return cdktf.Fn.tolist(this.getListAttribute('version'));
  }
  public set version(value: string[]) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface TeoL7AccSettingZoneConfigUpstreamHttp2 {
  /**
  * Whether to enable http2 origin-pull. valid values:
  * on: Enable;
  * off: Disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/teo_l7_acc_setting#switch TeoL7AccSetting#switch}
  */
  readonly switch?: string;
}

export function teoL7AccSettingZoneConfigUpstreamHttp2ToTerraform(struct?: TeoL7AccSettingZoneConfigUpstreamHttp2OutputReference | TeoL7AccSettingZoneConfigUpstreamHttp2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function teoL7AccSettingZoneConfigUpstreamHttp2ToHclTerraform(struct?: TeoL7AccSettingZoneConfigUpstreamHttp2OutputReference | TeoL7AccSettingZoneConfigUpstreamHttp2): any {
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

export class TeoL7AccSettingZoneConfigUpstreamHttp2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccSettingZoneConfigUpstreamHttp2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccSettingZoneConfigUpstreamHttp2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._switch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._switch = value.switch;
    }
  }

  // switch - computed: false, optional: true, required: false
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
export interface TeoL7AccSettingZoneConfigWebSocket {
  /**
  * Whether to enable websocket connection timeout. values:
  * on: Use timeout as the websocket timeout;
  * off: The platform still supports websocket connections, using the system default timeout of 15 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/teo_l7_acc_setting#switch TeoL7AccSetting#switch}
  */
  readonly switch?: string;
  /**
  * Timeout, unit: seconds. maximum timeout is 120 seconds.
  * Note: This field is required when switch is on; otherwise, this field will not take effect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/teo_l7_acc_setting#timeout TeoL7AccSetting#timeout}
  */
  readonly timeout?: number;
}

export function teoL7AccSettingZoneConfigWebSocketToTerraform(struct?: TeoL7AccSettingZoneConfigWebSocketOutputReference | TeoL7AccSettingZoneConfigWebSocket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    switch: cdktf.stringToTerraform(struct!.switch),
    timeout: cdktf.numberToTerraform(struct!.timeout),
  }
}


export function teoL7AccSettingZoneConfigWebSocketToHclTerraform(struct?: TeoL7AccSettingZoneConfigWebSocketOutputReference | TeoL7AccSettingZoneConfigWebSocket): any {
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

export class TeoL7AccSettingZoneConfigWebSocketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccSettingZoneConfigWebSocket | undefined {
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

  public set internalValue(value: TeoL7AccSettingZoneConfigWebSocket | undefined) {
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

  // switch - computed: false, optional: true, required: false
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
export interface TeoL7AccSettingZoneConfig {
  /**
  * accelerate_mainland block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/teo_l7_acc_setting#accelerate_mainland TeoL7AccSetting#accelerate_mainland}
  */
  readonly accelerateMainland?: TeoL7AccSettingZoneConfigAccelerateMainland;
  /**
  * cache block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/teo_l7_acc_setting#cache TeoL7AccSetting#cache}
  */
  readonly cache?: TeoL7AccSettingZoneConfigCache;
  /**
  * cache_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/teo_l7_acc_setting#cache_key TeoL7AccSetting#cache_key}
  */
  readonly cacheKey?: TeoL7AccSettingZoneConfigCacheKey;
  /**
  * cache_prefresh block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/teo_l7_acc_setting#cache_prefresh TeoL7AccSetting#cache_prefresh}
  */
  readonly cachePrefresh?: TeoL7AccSettingZoneConfigCachePrefresh;
  /**
  * client_ip_country block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/teo_l7_acc_setting#client_ip_country TeoL7AccSetting#client_ip_country}
  */
  readonly clientIpCountry?: TeoL7AccSettingZoneConfigClientIpCountry;
  /**
  * client_ip_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/teo_l7_acc_setting#client_ip_header TeoL7AccSetting#client_ip_header}
  */
  readonly clientIpHeader?: TeoL7AccSettingZoneConfigClientIpHeader;
  /**
  * compression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/teo_l7_acc_setting#compression TeoL7AccSetting#compression}
  */
  readonly compression?: TeoL7AccSettingZoneConfigCompression;
  /**
  * force_redirect_https block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/teo_l7_acc_setting#force_redirect_https TeoL7AccSetting#force_redirect_https}
  */
  readonly forceRedirectHttps?: TeoL7AccSettingZoneConfigForceRedirectHttps;
  /**
  * grpc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/teo_l7_acc_setting#grpc TeoL7AccSetting#grpc}
  */
  readonly grpc?: TeoL7AccSettingZoneConfigGrpc;
  /**
  * hsts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/teo_l7_acc_setting#hsts TeoL7AccSetting#hsts}
  */
  readonly hsts?: TeoL7AccSettingZoneConfigHsts;
  /**
  * http2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/teo_l7_acc_setting#http2 TeoL7AccSetting#http2}
  */
  readonly http2?: TeoL7AccSettingZoneConfigHttp2;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/teo_l7_acc_setting#ipv6 TeoL7AccSetting#ipv6}
  */
  readonly ipv6?: TeoL7AccSettingZoneConfigIpv6;
  /**
  * max_age block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/teo_l7_acc_setting#max_age TeoL7AccSetting#max_age}
  */
  readonly maxAge?: TeoL7AccSettingZoneConfigMaxAge;
  /**
  * ocsp_stapling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/teo_l7_acc_setting#ocsp_stapling TeoL7AccSetting#ocsp_stapling}
  */
  readonly ocspStapling?: TeoL7AccSettingZoneConfigOcspStapling;
  /**
  * offline_cache block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/teo_l7_acc_setting#offline_cache TeoL7AccSetting#offline_cache}
  */
  readonly offlineCache?: TeoL7AccSettingZoneConfigOfflineCache;
  /**
  * post_max_size block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/teo_l7_acc_setting#post_max_size TeoL7AccSetting#post_max_size}
  */
  readonly postMaxSize?: TeoL7AccSettingZoneConfigPostMaxSize;
  /**
  * quic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/teo_l7_acc_setting#quic TeoL7AccSetting#quic}
  */
  readonly quic?: TeoL7AccSettingZoneConfigQuic;
  /**
  * smart_routing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/teo_l7_acc_setting#smart_routing TeoL7AccSetting#smart_routing}
  */
  readonly smartRouting?: TeoL7AccSettingZoneConfigSmartRouting;
  /**
  * standard_debug block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/teo_l7_acc_setting#standard_debug TeoL7AccSetting#standard_debug}
  */
  readonly standardDebug?: TeoL7AccSettingZoneConfigStandardDebug;
  /**
  * tls_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/teo_l7_acc_setting#tls_config TeoL7AccSetting#tls_config}
  */
  readonly tlsConfig?: TeoL7AccSettingZoneConfigTlsConfig;
  /**
  * upstream_http2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/teo_l7_acc_setting#upstream_http2 TeoL7AccSetting#upstream_http2}
  */
  readonly upstreamHttp2?: TeoL7AccSettingZoneConfigUpstreamHttp2;
  /**
  * web_socket block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/teo_l7_acc_setting#web_socket TeoL7AccSetting#web_socket}
  */
  readonly webSocket?: TeoL7AccSettingZoneConfigWebSocket;
}

export function teoL7AccSettingZoneConfigToTerraform(struct?: TeoL7AccSettingZoneConfigOutputReference | TeoL7AccSettingZoneConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accelerate_mainland: teoL7AccSettingZoneConfigAccelerateMainlandToTerraform(struct!.accelerateMainland),
    cache: teoL7AccSettingZoneConfigCacheToTerraform(struct!.cache),
    cache_key: teoL7AccSettingZoneConfigCacheKeyToTerraform(struct!.cacheKey),
    cache_prefresh: teoL7AccSettingZoneConfigCachePrefreshToTerraform(struct!.cachePrefresh),
    client_ip_country: teoL7AccSettingZoneConfigClientIpCountryToTerraform(struct!.clientIpCountry),
    client_ip_header: teoL7AccSettingZoneConfigClientIpHeaderToTerraform(struct!.clientIpHeader),
    compression: teoL7AccSettingZoneConfigCompressionToTerraform(struct!.compression),
    force_redirect_https: teoL7AccSettingZoneConfigForceRedirectHttpsToTerraform(struct!.forceRedirectHttps),
    grpc: teoL7AccSettingZoneConfigGrpcToTerraform(struct!.grpc),
    hsts: teoL7AccSettingZoneConfigHstsToTerraform(struct!.hsts),
    http2: teoL7AccSettingZoneConfigHttp2ToTerraform(struct!.http2),
    ipv6: teoL7AccSettingZoneConfigIpv6ToTerraform(struct!.ipv6),
    max_age: teoL7AccSettingZoneConfigMaxAgeToTerraform(struct!.maxAge),
    ocsp_stapling: teoL7AccSettingZoneConfigOcspStaplingToTerraform(struct!.ocspStapling),
    offline_cache: teoL7AccSettingZoneConfigOfflineCacheToTerraform(struct!.offlineCache),
    post_max_size: teoL7AccSettingZoneConfigPostMaxSizeToTerraform(struct!.postMaxSize),
    quic: teoL7AccSettingZoneConfigQuicToTerraform(struct!.quic),
    smart_routing: teoL7AccSettingZoneConfigSmartRoutingToTerraform(struct!.smartRouting),
    standard_debug: teoL7AccSettingZoneConfigStandardDebugToTerraform(struct!.standardDebug),
    tls_config: teoL7AccSettingZoneConfigTlsConfigToTerraform(struct!.tlsConfig),
    upstream_http2: teoL7AccSettingZoneConfigUpstreamHttp2ToTerraform(struct!.upstreamHttp2),
    web_socket: teoL7AccSettingZoneConfigWebSocketToTerraform(struct!.webSocket),
  }
}


export function teoL7AccSettingZoneConfigToHclTerraform(struct?: TeoL7AccSettingZoneConfigOutputReference | TeoL7AccSettingZoneConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accelerate_mainland: {
      value: teoL7AccSettingZoneConfigAccelerateMainlandToHclTerraform(struct!.accelerateMainland),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccSettingZoneConfigAccelerateMainlandList",
    },
    cache: {
      value: teoL7AccSettingZoneConfigCacheToHclTerraform(struct!.cache),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccSettingZoneConfigCacheList",
    },
    cache_key: {
      value: teoL7AccSettingZoneConfigCacheKeyToHclTerraform(struct!.cacheKey),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccSettingZoneConfigCacheKeyList",
    },
    cache_prefresh: {
      value: teoL7AccSettingZoneConfigCachePrefreshToHclTerraform(struct!.cachePrefresh),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccSettingZoneConfigCachePrefreshList",
    },
    client_ip_country: {
      value: teoL7AccSettingZoneConfigClientIpCountryToHclTerraform(struct!.clientIpCountry),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccSettingZoneConfigClientIpCountryList",
    },
    client_ip_header: {
      value: teoL7AccSettingZoneConfigClientIpHeaderToHclTerraform(struct!.clientIpHeader),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccSettingZoneConfigClientIpHeaderList",
    },
    compression: {
      value: teoL7AccSettingZoneConfigCompressionToHclTerraform(struct!.compression),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccSettingZoneConfigCompressionList",
    },
    force_redirect_https: {
      value: teoL7AccSettingZoneConfigForceRedirectHttpsToHclTerraform(struct!.forceRedirectHttps),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccSettingZoneConfigForceRedirectHttpsList",
    },
    grpc: {
      value: teoL7AccSettingZoneConfigGrpcToHclTerraform(struct!.grpc),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccSettingZoneConfigGrpcList",
    },
    hsts: {
      value: teoL7AccSettingZoneConfigHstsToHclTerraform(struct!.hsts),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccSettingZoneConfigHstsList",
    },
    http2: {
      value: teoL7AccSettingZoneConfigHttp2ToHclTerraform(struct!.http2),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccSettingZoneConfigHttp2List",
    },
    ipv6: {
      value: teoL7AccSettingZoneConfigIpv6ToHclTerraform(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccSettingZoneConfigIpv6List",
    },
    max_age: {
      value: teoL7AccSettingZoneConfigMaxAgeToHclTerraform(struct!.maxAge),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccSettingZoneConfigMaxAgeList",
    },
    ocsp_stapling: {
      value: teoL7AccSettingZoneConfigOcspStaplingToHclTerraform(struct!.ocspStapling),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccSettingZoneConfigOcspStaplingList",
    },
    offline_cache: {
      value: teoL7AccSettingZoneConfigOfflineCacheToHclTerraform(struct!.offlineCache),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccSettingZoneConfigOfflineCacheList",
    },
    post_max_size: {
      value: teoL7AccSettingZoneConfigPostMaxSizeToHclTerraform(struct!.postMaxSize),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccSettingZoneConfigPostMaxSizeList",
    },
    quic: {
      value: teoL7AccSettingZoneConfigQuicToHclTerraform(struct!.quic),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccSettingZoneConfigQuicList",
    },
    smart_routing: {
      value: teoL7AccSettingZoneConfigSmartRoutingToHclTerraform(struct!.smartRouting),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccSettingZoneConfigSmartRoutingList",
    },
    standard_debug: {
      value: teoL7AccSettingZoneConfigStandardDebugToHclTerraform(struct!.standardDebug),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccSettingZoneConfigStandardDebugList",
    },
    tls_config: {
      value: teoL7AccSettingZoneConfigTlsConfigToHclTerraform(struct!.tlsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccSettingZoneConfigTlsConfigList",
    },
    upstream_http2: {
      value: teoL7AccSettingZoneConfigUpstreamHttp2ToHclTerraform(struct!.upstreamHttp2),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccSettingZoneConfigUpstreamHttp2List",
    },
    web_socket: {
      value: teoL7AccSettingZoneConfigWebSocketToHclTerraform(struct!.webSocket),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccSettingZoneConfigWebSocketList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoL7AccSettingZoneConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccSettingZoneConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accelerateMainland?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accelerateMainland = this._accelerateMainland?.internalValue;
    }
    if (this._cache?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cache = this._cache?.internalValue;
    }
    if (this._cacheKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheKey = this._cacheKey?.internalValue;
    }
    if (this._cachePrefresh?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cachePrefresh = this._cachePrefresh?.internalValue;
    }
    if (this._clientIpCountry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIpCountry = this._clientIpCountry?.internalValue;
    }
    if (this._clientIpHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIpHeader = this._clientIpHeader?.internalValue;
    }
    if (this._compression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.compression = this._compression?.internalValue;
    }
    if (this._forceRedirectHttps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceRedirectHttps = this._forceRedirectHttps?.internalValue;
    }
    if (this._grpc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpc = this._grpc?.internalValue;
    }
    if (this._hsts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hsts = this._hsts?.internalValue;
    }
    if (this._http2?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http2 = this._http2?.internalValue;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    if (this._maxAge?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAge = this._maxAge?.internalValue;
    }
    if (this._ocspStapling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspStapling = this._ocspStapling?.internalValue;
    }
    if (this._offlineCache?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.offlineCache = this._offlineCache?.internalValue;
    }
    if (this._postMaxSize?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postMaxSize = this._postMaxSize?.internalValue;
    }
    if (this._quic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.quic = this._quic?.internalValue;
    }
    if (this._smartRouting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.smartRouting = this._smartRouting?.internalValue;
    }
    if (this._standardDebug?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.standardDebug = this._standardDebug?.internalValue;
    }
    if (this._tlsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsConfig = this._tlsConfig?.internalValue;
    }
    if (this._upstreamHttp2?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreamHttp2 = this._upstreamHttp2?.internalValue;
    }
    if (this._webSocket?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webSocket = this._webSocket?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccSettingZoneConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accelerateMainland.internalValue = undefined;
      this._cache.internalValue = undefined;
      this._cacheKey.internalValue = undefined;
      this._cachePrefresh.internalValue = undefined;
      this._clientIpCountry.internalValue = undefined;
      this._clientIpHeader.internalValue = undefined;
      this._compression.internalValue = undefined;
      this._forceRedirectHttps.internalValue = undefined;
      this._grpc.internalValue = undefined;
      this._hsts.internalValue = undefined;
      this._http2.internalValue = undefined;
      this._ipv6.internalValue = undefined;
      this._maxAge.internalValue = undefined;
      this._ocspStapling.internalValue = undefined;
      this._offlineCache.internalValue = undefined;
      this._postMaxSize.internalValue = undefined;
      this._quic.internalValue = undefined;
      this._smartRouting.internalValue = undefined;
      this._standardDebug.internalValue = undefined;
      this._tlsConfig.internalValue = undefined;
      this._upstreamHttp2.internalValue = undefined;
      this._webSocket.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accelerateMainland.internalValue = value.accelerateMainland;
      this._cache.internalValue = value.cache;
      this._cacheKey.internalValue = value.cacheKey;
      this._cachePrefresh.internalValue = value.cachePrefresh;
      this._clientIpCountry.internalValue = value.clientIpCountry;
      this._clientIpHeader.internalValue = value.clientIpHeader;
      this._compression.internalValue = value.compression;
      this._forceRedirectHttps.internalValue = value.forceRedirectHttps;
      this._grpc.internalValue = value.grpc;
      this._hsts.internalValue = value.hsts;
      this._http2.internalValue = value.http2;
      this._ipv6.internalValue = value.ipv6;
      this._maxAge.internalValue = value.maxAge;
      this._ocspStapling.internalValue = value.ocspStapling;
      this._offlineCache.internalValue = value.offlineCache;
      this._postMaxSize.internalValue = value.postMaxSize;
      this._quic.internalValue = value.quic;
      this._smartRouting.internalValue = value.smartRouting;
      this._standardDebug.internalValue = value.standardDebug;
      this._tlsConfig.internalValue = value.tlsConfig;
      this._upstreamHttp2.internalValue = value.upstreamHttp2;
      this._webSocket.internalValue = value.webSocket;
    }
  }

  // accelerate_mainland - computed: false, optional: true, required: false
  private _accelerateMainland = new TeoL7AccSettingZoneConfigAccelerateMainlandOutputReference(this, "accelerate_mainland");
  public get accelerateMainland() {
    return this._accelerateMainland;
  }
  public putAccelerateMainland(value: TeoL7AccSettingZoneConfigAccelerateMainland) {
    this._accelerateMainland.internalValue = value;
  }
  public resetAccelerateMainland() {
    this._accelerateMainland.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accelerateMainlandInput() {
    return this._accelerateMainland.internalValue;
  }

  // cache - computed: false, optional: true, required: false
  private _cache = new TeoL7AccSettingZoneConfigCacheOutputReference(this, "cache");
  public get cache() {
    return this._cache;
  }
  public putCache(value: TeoL7AccSettingZoneConfigCache) {
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
  private _cacheKey = new TeoL7AccSettingZoneConfigCacheKeyOutputReference(this, "cache_key");
  public get cacheKey() {
    return this._cacheKey;
  }
  public putCacheKey(value: TeoL7AccSettingZoneConfigCacheKey) {
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
  private _cachePrefresh = new TeoL7AccSettingZoneConfigCachePrefreshOutputReference(this, "cache_prefresh");
  public get cachePrefresh() {
    return this._cachePrefresh;
  }
  public putCachePrefresh(value: TeoL7AccSettingZoneConfigCachePrefresh) {
    this._cachePrefresh.internalValue = value;
  }
  public resetCachePrefresh() {
    this._cachePrefresh.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachePrefreshInput() {
    return this._cachePrefresh.internalValue;
  }

  // client_ip_country - computed: false, optional: true, required: false
  private _clientIpCountry = new TeoL7AccSettingZoneConfigClientIpCountryOutputReference(this, "client_ip_country");
  public get clientIpCountry() {
    return this._clientIpCountry;
  }
  public putClientIpCountry(value: TeoL7AccSettingZoneConfigClientIpCountry) {
    this._clientIpCountry.internalValue = value;
  }
  public resetClientIpCountry() {
    this._clientIpCountry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpCountryInput() {
    return this._clientIpCountry.internalValue;
  }

  // client_ip_header - computed: false, optional: true, required: false
  private _clientIpHeader = new TeoL7AccSettingZoneConfigClientIpHeaderOutputReference(this, "client_ip_header");
  public get clientIpHeader() {
    return this._clientIpHeader;
  }
  public putClientIpHeader(value: TeoL7AccSettingZoneConfigClientIpHeader) {
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
  private _compression = new TeoL7AccSettingZoneConfigCompressionOutputReference(this, "compression");
  public get compression() {
    return this._compression;
  }
  public putCompression(value: TeoL7AccSettingZoneConfigCompression) {
    this._compression.internalValue = value;
  }
  public resetCompression() {
    this._compression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionInput() {
    return this._compression.internalValue;
  }

  // force_redirect_https - computed: false, optional: true, required: false
  private _forceRedirectHttps = new TeoL7AccSettingZoneConfigForceRedirectHttpsOutputReference(this, "force_redirect_https");
  public get forceRedirectHttps() {
    return this._forceRedirectHttps;
  }
  public putForceRedirectHttps(value: TeoL7AccSettingZoneConfigForceRedirectHttps) {
    this._forceRedirectHttps.internalValue = value;
  }
  public resetForceRedirectHttps() {
    this._forceRedirectHttps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceRedirectHttpsInput() {
    return this._forceRedirectHttps.internalValue;
  }

  // grpc - computed: false, optional: true, required: false
  private _grpc = new TeoL7AccSettingZoneConfigGrpcOutputReference(this, "grpc");
  public get grpc() {
    return this._grpc;
  }
  public putGrpc(value: TeoL7AccSettingZoneConfigGrpc) {
    this._grpc.internalValue = value;
  }
  public resetGrpc() {
    this._grpc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcInput() {
    return this._grpc.internalValue;
  }

  // hsts - computed: false, optional: true, required: false
  private _hsts = new TeoL7AccSettingZoneConfigHstsOutputReference(this, "hsts");
  public get hsts() {
    return this._hsts;
  }
  public putHsts(value: TeoL7AccSettingZoneConfigHsts) {
    this._hsts.internalValue = value;
  }
  public resetHsts() {
    this._hsts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hstsInput() {
    return this._hsts.internalValue;
  }

  // http2 - computed: false, optional: true, required: false
  private _http2 = new TeoL7AccSettingZoneConfigHttp2OutputReference(this, "http2");
  public get http2() {
    return this._http2;
  }
  public putHttp2(value: TeoL7AccSettingZoneConfigHttp2) {
    this._http2.internalValue = value;
  }
  public resetHttp2() {
    this._http2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2Input() {
    return this._http2.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new TeoL7AccSettingZoneConfigIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: TeoL7AccSettingZoneConfigIpv6) {
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
  private _maxAge = new TeoL7AccSettingZoneConfigMaxAgeOutputReference(this, "max_age");
  public get maxAge() {
    return this._maxAge;
  }
  public putMaxAge(value: TeoL7AccSettingZoneConfigMaxAge) {
    this._maxAge.internalValue = value;
  }
  public resetMaxAge() {
    this._maxAge.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInput() {
    return this._maxAge.internalValue;
  }

  // ocsp_stapling - computed: false, optional: true, required: false
  private _ocspStapling = new TeoL7AccSettingZoneConfigOcspStaplingOutputReference(this, "ocsp_stapling");
  public get ocspStapling() {
    return this._ocspStapling;
  }
  public putOcspStapling(value: TeoL7AccSettingZoneConfigOcspStapling) {
    this._ocspStapling.internalValue = value;
  }
  public resetOcspStapling() {
    this._ocspStapling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspStaplingInput() {
    return this._ocspStapling.internalValue;
  }

  // offline_cache - computed: false, optional: true, required: false
  private _offlineCache = new TeoL7AccSettingZoneConfigOfflineCacheOutputReference(this, "offline_cache");
  public get offlineCache() {
    return this._offlineCache;
  }
  public putOfflineCache(value: TeoL7AccSettingZoneConfigOfflineCache) {
    this._offlineCache.internalValue = value;
  }
  public resetOfflineCache() {
    this._offlineCache.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offlineCacheInput() {
    return this._offlineCache.internalValue;
  }

  // post_max_size - computed: false, optional: true, required: false
  private _postMaxSize = new TeoL7AccSettingZoneConfigPostMaxSizeOutputReference(this, "post_max_size");
  public get postMaxSize() {
    return this._postMaxSize;
  }
  public putPostMaxSize(value: TeoL7AccSettingZoneConfigPostMaxSize) {
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
  private _quic = new TeoL7AccSettingZoneConfigQuicOutputReference(this, "quic");
  public get quic() {
    return this._quic;
  }
  public putQuic(value: TeoL7AccSettingZoneConfigQuic) {
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
  private _smartRouting = new TeoL7AccSettingZoneConfigSmartRoutingOutputReference(this, "smart_routing");
  public get smartRouting() {
    return this._smartRouting;
  }
  public putSmartRouting(value: TeoL7AccSettingZoneConfigSmartRouting) {
    this._smartRouting.internalValue = value;
  }
  public resetSmartRouting() {
    this._smartRouting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smartRoutingInput() {
    return this._smartRouting.internalValue;
  }

  // standard_debug - computed: false, optional: true, required: false
  private _standardDebug = new TeoL7AccSettingZoneConfigStandardDebugOutputReference(this, "standard_debug");
  public get standardDebug() {
    return this._standardDebug;
  }
  public putStandardDebug(value: TeoL7AccSettingZoneConfigStandardDebug) {
    this._standardDebug.internalValue = value;
  }
  public resetStandardDebug() {
    this._standardDebug.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standardDebugInput() {
    return this._standardDebug.internalValue;
  }

  // tls_config - computed: false, optional: true, required: false
  private _tlsConfig = new TeoL7AccSettingZoneConfigTlsConfigOutputReference(this, "tls_config");
  public get tlsConfig() {
    return this._tlsConfig;
  }
  public putTlsConfig(value: TeoL7AccSettingZoneConfigTlsConfig) {
    this._tlsConfig.internalValue = value;
  }
  public resetTlsConfig() {
    this._tlsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsConfigInput() {
    return this._tlsConfig.internalValue;
  }

  // upstream_http2 - computed: false, optional: true, required: false
  private _upstreamHttp2 = new TeoL7AccSettingZoneConfigUpstreamHttp2OutputReference(this, "upstream_http2");
  public get upstreamHttp2() {
    return this._upstreamHttp2;
  }
  public putUpstreamHttp2(value: TeoL7AccSettingZoneConfigUpstreamHttp2) {
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
  private _webSocket = new TeoL7AccSettingZoneConfigWebSocketOutputReference(this, "web_socket");
  public get webSocket() {
    return this._webSocket;
  }
  public putWebSocket(value: TeoL7AccSettingZoneConfigWebSocket) {
    this._webSocket.internalValue = value;
  }
  public resetWebSocket() {
    this._webSocket.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webSocketInput() {
    return this._webSocket.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/teo_l7_acc_setting tencentcloud_teo_l7_acc_setting}
*/
export class TeoL7AccSetting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_teo_l7_acc_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TeoL7AccSetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TeoL7AccSetting to import
  * @param importFromId The id of the existing TeoL7AccSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/teo_l7_acc_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TeoL7AccSetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_teo_l7_acc_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/teo_l7_acc_setting tencentcloud_teo_l7_acc_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TeoL7AccSettingConfig
  */
  public constructor(scope: Construct, id: string, config: TeoL7AccSettingConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_teo_l7_acc_setting',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.48',
        providerVersionConstraint: '1.82.48'
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
    this._zoneConfig.internalValue = config.zoneConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // zone_name - computed: true, optional: false, required: false
  public get zoneName() {
    return this.getStringAttribute('zone_name');
  }

  // zone_config - computed: false, optional: false, required: true
  private _zoneConfig = new TeoL7AccSettingZoneConfigOutputReference(this, "zone_config");
  public get zoneConfig() {
    return this._zoneConfig;
  }
  public putZoneConfig(value: TeoL7AccSettingZoneConfig) {
    this._zoneConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneConfigInput() {
    return this._zoneConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      zone_config: teoL7AccSettingZoneConfigToTerraform(this._zoneConfig.internalValue),
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
      zone_config: {
        value: teoL7AccSettingZoneConfigToHclTerraform(this._zoneConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TeoL7AccSettingZoneConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
