// https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SmartRulesSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_settings#domain SmartRulesSettings#domain}
  */
  readonly domain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_settings#id SmartRulesSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * smart_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_settings#smart_rule SmartRulesSettings#smart_rule}
  */
  readonly smartRule: SmartRulesSettingsSmartRule[] | cdktf.IResolvable;
}
export interface SmartRulesSettingsSmartRuleAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_settings#backend SmartRulesSettings#backend}
  */
  readonly backend?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_settings#cache_301 SmartRulesSettings#cache_301}
  */
  readonly cache301?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_settings#cache_302 SmartRulesSettings#cache_302}
  */
  readonly cache302?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_settings#cache_404 SmartRulesSettings#cache_404}
  */
  readonly cache404?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_settings#cache_mode SmartRulesSettings#cache_mode}
  */
  readonly cacheMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_settings#cache_ttl SmartRulesSettings#cache_ttl}
  */
  readonly cacheTtl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_settings#caching_behaviour SmartRulesSettings#caching_behaviour}
  */
  readonly cachingBehaviour?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_settings#cors SmartRulesSettings#cors}
  */
  readonly cors?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_settings#custom_cache_key SmartRulesSettings#custom_cache_key}
  */
  readonly customCacheKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_settings#encoding_header SmartRulesSettings#encoding_header}
  */
  readonly encodingHeader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_settings#expires_ttl SmartRulesSettings#expires_ttl}
  */
  readonly expiresTtl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_settings#gzip_status SmartRulesSettings#gzip_status}
  */
  readonly gzipStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_settings#hide_header SmartRulesSettings#hide_header}
  */
  readonly hideHeader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_settings#ignore_cache_control SmartRulesSettings#ignore_cache_control}
  */
  readonly ignoreCacheControl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_settings#ignore_expires SmartRulesSettings#ignore_expires}
  */
  readonly ignoreExpires?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_settings#ignore_vary SmartRulesSettings#ignore_vary}
  */
  readonly ignoreVary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_settings#image_optimize SmartRulesSettings#image_optimize}
  */
  readonly imageOptimize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_settings#image_optimize_level SmartRulesSettings#image_optimize_level}
  */
  readonly imageOptimizeLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_settings#image_optimize_metadata SmartRulesSettings#image_optimize_metadata}
  */
  readonly imageOptimizeMetadata?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_settings#image_optimize_progressive SmartRulesSettings#image_optimize_progressive}
  */
  readonly imageOptimizeProgressive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_settings#image_optimize_webp SmartRulesSettings#image_optimize_webp}
  */
  readonly imageOptimizeWebp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_settings#ratelimit_status SmartRulesSettings#ratelimit_status}
  */
  readonly ratelimitStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_settings#set_host SmartRulesSettings#set_host}
  */
  readonly setHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_settings#set_request_headers SmartRulesSettings#set_request_headers}
  */
  readonly setRequestHeaders?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_settings#set_response_headers SmartRulesSettings#set_response_headers}
  */
  readonly setResponseHeaders?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_settings#set_uri SmartRulesSettings#set_uri}
  */
  readonly setUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_settings#signed_url_key SmartRulesSettings#signed_url_key}
  */
  readonly signedUrlKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_settings#signed_url_type SmartRulesSettings#signed_url_type}
  */
  readonly signedUrlType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_settings#ssl_mode SmartRulesSettings#ssl_mode}
  */
  readonly sslMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_settings#waf_level SmartRulesSettings#waf_level}
  */
  readonly wafLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_settings#waf_mode SmartRulesSettings#waf_mode}
  */
  readonly wafMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_settings#waf_rule_action SmartRulesSettings#waf_rule_action}
  */
  readonly wafRuleAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_settings#waf_status SmartRulesSettings#waf_status}
  */
  readonly wafStatus?: string;
}

export function smartRulesSettingsSmartRuleActionToTerraform(struct?: SmartRulesSettingsSmartRuleAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend: cdktf.stringToTerraform(struct!.backend),
    cache_301: cdktf.stringToTerraform(struct!.cache301),
    cache_302: cdktf.stringToTerraform(struct!.cache302),
    cache_404: cdktf.stringToTerraform(struct!.cache404),
    cache_mode: cdktf.stringToTerraform(struct!.cacheMode),
    cache_ttl: cdktf.stringToTerraform(struct!.cacheTtl),
    caching_behaviour: cdktf.stringToTerraform(struct!.cachingBehaviour),
    cors: cdktf.stringToTerraform(struct!.cors),
    custom_cache_key: cdktf.stringToTerraform(struct!.customCacheKey),
    encoding_header: cdktf.stringToTerraform(struct!.encodingHeader),
    expires_ttl: cdktf.stringToTerraform(struct!.expiresTtl),
    gzip_status: cdktf.stringToTerraform(struct!.gzipStatus),
    hide_header: cdktf.stringToTerraform(struct!.hideHeader),
    ignore_cache_control: cdktf.stringToTerraform(struct!.ignoreCacheControl),
    ignore_expires: cdktf.stringToTerraform(struct!.ignoreExpires),
    ignore_vary: cdktf.stringToTerraform(struct!.ignoreVary),
    image_optimize: cdktf.stringToTerraform(struct!.imageOptimize),
    image_optimize_level: cdktf.stringToTerraform(struct!.imageOptimizeLevel),
    image_optimize_metadata: cdktf.stringToTerraform(struct!.imageOptimizeMetadata),
    image_optimize_progressive: cdktf.stringToTerraform(struct!.imageOptimizeProgressive),
    image_optimize_webp: cdktf.stringToTerraform(struct!.imageOptimizeWebp),
    ratelimit_status: cdktf.stringToTerraform(struct!.ratelimitStatus),
    set_host: cdktf.stringToTerraform(struct!.setHost),
    set_request_headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.setRequestHeaders),
    set_response_headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.setResponseHeaders),
    set_uri: cdktf.stringToTerraform(struct!.setUri),
    signed_url_key: cdktf.stringToTerraform(struct!.signedUrlKey),
    signed_url_type: cdktf.stringToTerraform(struct!.signedUrlType),
    ssl_mode: cdktf.stringToTerraform(struct!.sslMode),
    waf_level: cdktf.stringToTerraform(struct!.wafLevel),
    waf_mode: cdktf.stringToTerraform(struct!.wafMode),
    waf_rule_action: cdktf.stringToTerraform(struct!.wafRuleAction),
    waf_status: cdktf.stringToTerraform(struct!.wafStatus),
  }
}


export function smartRulesSettingsSmartRuleActionToHclTerraform(struct?: SmartRulesSettingsSmartRuleAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backend: {
      value: cdktf.stringToHclTerraform(struct!.backend),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cache_301: {
      value: cdktf.stringToHclTerraform(struct!.cache301),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cache_302: {
      value: cdktf.stringToHclTerraform(struct!.cache302),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cache_404: {
      value: cdktf.stringToHclTerraform(struct!.cache404),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cache_mode: {
      value: cdktf.stringToHclTerraform(struct!.cacheMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cache_ttl: {
      value: cdktf.stringToHclTerraform(struct!.cacheTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    caching_behaviour: {
      value: cdktf.stringToHclTerraform(struct!.cachingBehaviour),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cors: {
      value: cdktf.stringToHclTerraform(struct!.cors),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_cache_key: {
      value: cdktf.stringToHclTerraform(struct!.customCacheKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encoding_header: {
      value: cdktf.stringToHclTerraform(struct!.encodingHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expires_ttl: {
      value: cdktf.stringToHclTerraform(struct!.expiresTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gzip_status: {
      value: cdktf.stringToHclTerraform(struct!.gzipStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hide_header: {
      value: cdktf.stringToHclTerraform(struct!.hideHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_cache_control: {
      value: cdktf.stringToHclTerraform(struct!.ignoreCacheControl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_expires: {
      value: cdktf.stringToHclTerraform(struct!.ignoreExpires),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_vary: {
      value: cdktf.stringToHclTerraform(struct!.ignoreVary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_optimize: {
      value: cdktf.stringToHclTerraform(struct!.imageOptimize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_optimize_level: {
      value: cdktf.stringToHclTerraform(struct!.imageOptimizeLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_optimize_metadata: {
      value: cdktf.stringToHclTerraform(struct!.imageOptimizeMetadata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_optimize_progressive: {
      value: cdktf.stringToHclTerraform(struct!.imageOptimizeProgressive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_optimize_webp: {
      value: cdktf.stringToHclTerraform(struct!.imageOptimizeWebp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ratelimit_status: {
      value: cdktf.stringToHclTerraform(struct!.ratelimitStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    set_host: {
      value: cdktf.stringToHclTerraform(struct!.setHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    set_request_headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.setRequestHeaders),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    set_response_headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.setResponseHeaders),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    set_uri: {
      value: cdktf.stringToHclTerraform(struct!.setUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signed_url_key: {
      value: cdktf.stringToHclTerraform(struct!.signedUrlKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signed_url_type: {
      value: cdktf.stringToHclTerraform(struct!.signedUrlType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_mode: {
      value: cdktf.stringToHclTerraform(struct!.sslMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    waf_level: {
      value: cdktf.stringToHclTerraform(struct!.wafLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    waf_mode: {
      value: cdktf.stringToHclTerraform(struct!.wafMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    waf_rule_action: {
      value: cdktf.stringToHclTerraform(struct!.wafRuleAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    waf_status: {
      value: cdktf.stringToHclTerraform(struct!.wafStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SmartRulesSettingsSmartRuleActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SmartRulesSettingsSmartRuleAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backend !== undefined) {
      hasAnyValues = true;
      internalValueResult.backend = this._backend;
    }
    if (this._cache301 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cache301 = this._cache301;
    }
    if (this._cache302 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cache302 = this._cache302;
    }
    if (this._cache404 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cache404 = this._cache404;
    }
    if (this._cacheMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheMode = this._cacheMode;
    }
    if (this._cacheTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheTtl = this._cacheTtl;
    }
    if (this._cachingBehaviour !== undefined) {
      hasAnyValues = true;
      internalValueResult.cachingBehaviour = this._cachingBehaviour;
    }
    if (this._cors !== undefined) {
      hasAnyValues = true;
      internalValueResult.cors = this._cors;
    }
    if (this._customCacheKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.customCacheKey = this._customCacheKey;
    }
    if (this._encodingHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.encodingHeader = this._encodingHeader;
    }
    if (this._expiresTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiresTtl = this._expiresTtl;
    }
    if (this._gzipStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.gzipStatus = this._gzipStatus;
    }
    if (this._hideHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.hideHeader = this._hideHeader;
    }
    if (this._ignoreCacheControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCacheControl = this._ignoreCacheControl;
    }
    if (this._ignoreExpires !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreExpires = this._ignoreExpires;
    }
    if (this._ignoreVary !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreVary = this._ignoreVary;
    }
    if (this._imageOptimize !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageOptimize = this._imageOptimize;
    }
    if (this._imageOptimizeLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageOptimizeLevel = this._imageOptimizeLevel;
    }
    if (this._imageOptimizeMetadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageOptimizeMetadata = this._imageOptimizeMetadata;
    }
    if (this._imageOptimizeProgressive !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageOptimizeProgressive = this._imageOptimizeProgressive;
    }
    if (this._imageOptimizeWebp !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageOptimizeWebp = this._imageOptimizeWebp;
    }
    if (this._ratelimitStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.ratelimitStatus = this._ratelimitStatus;
    }
    if (this._setHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.setHost = this._setHost;
    }
    if (this._setRequestHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.setRequestHeaders = this._setRequestHeaders;
    }
    if (this._setResponseHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.setResponseHeaders = this._setResponseHeaders;
    }
    if (this._setUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.setUri = this._setUri;
    }
    if (this._signedUrlKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.signedUrlKey = this._signedUrlKey;
    }
    if (this._signedUrlType !== undefined) {
      hasAnyValues = true;
      internalValueResult.signedUrlType = this._signedUrlType;
    }
    if (this._sslMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslMode = this._sslMode;
    }
    if (this._wafLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.wafLevel = this._wafLevel;
    }
    if (this._wafMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.wafMode = this._wafMode;
    }
    if (this._wafRuleAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.wafRuleAction = this._wafRuleAction;
    }
    if (this._wafStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.wafStatus = this._wafStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SmartRulesSettingsSmartRuleAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backend = undefined;
      this._cache301 = undefined;
      this._cache302 = undefined;
      this._cache404 = undefined;
      this._cacheMode = undefined;
      this._cacheTtl = undefined;
      this._cachingBehaviour = undefined;
      this._cors = undefined;
      this._customCacheKey = undefined;
      this._encodingHeader = undefined;
      this._expiresTtl = undefined;
      this._gzipStatus = undefined;
      this._hideHeader = undefined;
      this._ignoreCacheControl = undefined;
      this._ignoreExpires = undefined;
      this._ignoreVary = undefined;
      this._imageOptimize = undefined;
      this._imageOptimizeLevel = undefined;
      this._imageOptimizeMetadata = undefined;
      this._imageOptimizeProgressive = undefined;
      this._imageOptimizeWebp = undefined;
      this._ratelimitStatus = undefined;
      this._setHost = undefined;
      this._setRequestHeaders = undefined;
      this._setResponseHeaders = undefined;
      this._setUri = undefined;
      this._signedUrlKey = undefined;
      this._signedUrlType = undefined;
      this._sslMode = undefined;
      this._wafLevel = undefined;
      this._wafMode = undefined;
      this._wafRuleAction = undefined;
      this._wafStatus = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backend = value.backend;
      this._cache301 = value.cache301;
      this._cache302 = value.cache302;
      this._cache404 = value.cache404;
      this._cacheMode = value.cacheMode;
      this._cacheTtl = value.cacheTtl;
      this._cachingBehaviour = value.cachingBehaviour;
      this._cors = value.cors;
      this._customCacheKey = value.customCacheKey;
      this._encodingHeader = value.encodingHeader;
      this._expiresTtl = value.expiresTtl;
      this._gzipStatus = value.gzipStatus;
      this._hideHeader = value.hideHeader;
      this._ignoreCacheControl = value.ignoreCacheControl;
      this._ignoreExpires = value.ignoreExpires;
      this._ignoreVary = value.ignoreVary;
      this._imageOptimize = value.imageOptimize;
      this._imageOptimizeLevel = value.imageOptimizeLevel;
      this._imageOptimizeMetadata = value.imageOptimizeMetadata;
      this._imageOptimizeProgressive = value.imageOptimizeProgressive;
      this._imageOptimizeWebp = value.imageOptimizeWebp;
      this._ratelimitStatus = value.ratelimitStatus;
      this._setHost = value.setHost;
      this._setRequestHeaders = value.setRequestHeaders;
      this._setResponseHeaders = value.setResponseHeaders;
      this._setUri = value.setUri;
      this._signedUrlKey = value.signedUrlKey;
      this._signedUrlType = value.signedUrlType;
      this._sslMode = value.sslMode;
      this._wafLevel = value.wafLevel;
      this._wafMode = value.wafMode;
      this._wafRuleAction = value.wafRuleAction;
      this._wafStatus = value.wafStatus;
    }
  }

  // backend - computed: false, optional: true, required: false
  private _backend?: string; 
  public get backend() {
    return this.getStringAttribute('backend');
  }
  public set backend(value: string) {
    this._backend = value;
  }
  public resetBackend() {
    this._backend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendInput() {
    return this._backend;
  }

  // cache_301 - computed: false, optional: true, required: false
  private _cache301?: string; 
  public get cache301() {
    return this.getStringAttribute('cache_301');
  }
  public set cache301(value: string) {
    this._cache301 = value;
  }
  public resetCache301() {
    this._cache301 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cache301Input() {
    return this._cache301;
  }

  // cache_302 - computed: false, optional: true, required: false
  private _cache302?: string; 
  public get cache302() {
    return this.getStringAttribute('cache_302');
  }
  public set cache302(value: string) {
    this._cache302 = value;
  }
  public resetCache302() {
    this._cache302 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cache302Input() {
    return this._cache302;
  }

  // cache_404 - computed: false, optional: true, required: false
  private _cache404?: string; 
  public get cache404() {
    return this.getStringAttribute('cache_404');
  }
  public set cache404(value: string) {
    this._cache404 = value;
  }
  public resetCache404() {
    this._cache404 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cache404Input() {
    return this._cache404;
  }

  // cache_mode - computed: false, optional: true, required: false
  private _cacheMode?: string; 
  public get cacheMode() {
    return this.getStringAttribute('cache_mode');
  }
  public set cacheMode(value: string) {
    this._cacheMode = value;
  }
  public resetCacheMode() {
    this._cacheMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheModeInput() {
    return this._cacheMode;
  }

  // cache_ttl - computed: false, optional: true, required: false
  private _cacheTtl?: string; 
  public get cacheTtl() {
    return this.getStringAttribute('cache_ttl');
  }
  public set cacheTtl(value: string) {
    this._cacheTtl = value;
  }
  public resetCacheTtl() {
    this._cacheTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTtlInput() {
    return this._cacheTtl;
  }

  // caching_behaviour - computed: false, optional: true, required: false
  private _cachingBehaviour?: string; 
  public get cachingBehaviour() {
    return this.getStringAttribute('caching_behaviour');
  }
  public set cachingBehaviour(value: string) {
    this._cachingBehaviour = value;
  }
  public resetCachingBehaviour() {
    this._cachingBehaviour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachingBehaviourInput() {
    return this._cachingBehaviour;
  }

  // cors - computed: false, optional: true, required: false
  private _cors?: string; 
  public get cors() {
    return this.getStringAttribute('cors');
  }
  public set cors(value: string) {
    this._cors = value;
  }
  public resetCors() {
    this._cors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsInput() {
    return this._cors;
  }

  // custom_cache_key - computed: false, optional: true, required: false
  private _customCacheKey?: string; 
  public get customCacheKey() {
    return this.getStringAttribute('custom_cache_key');
  }
  public set customCacheKey(value: string) {
    this._customCacheKey = value;
  }
  public resetCustomCacheKey() {
    this._customCacheKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customCacheKeyInput() {
    return this._customCacheKey;
  }

  // encoding_header - computed: false, optional: true, required: false
  private _encodingHeader?: string; 
  public get encodingHeader() {
    return this.getStringAttribute('encoding_header');
  }
  public set encodingHeader(value: string) {
    this._encodingHeader = value;
  }
  public resetEncodingHeader() {
    this._encodingHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodingHeaderInput() {
    return this._encodingHeader;
  }

  // expires_ttl - computed: false, optional: true, required: false
  private _expiresTtl?: string; 
  public get expiresTtl() {
    return this.getStringAttribute('expires_ttl');
  }
  public set expiresTtl(value: string) {
    this._expiresTtl = value;
  }
  public resetExpiresTtl() {
    this._expiresTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiresTtlInput() {
    return this._expiresTtl;
  }

  // gzip_status - computed: false, optional: true, required: false
  private _gzipStatus?: string; 
  public get gzipStatus() {
    return this.getStringAttribute('gzip_status');
  }
  public set gzipStatus(value: string) {
    this._gzipStatus = value;
  }
  public resetGzipStatus() {
    this._gzipStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gzipStatusInput() {
    return this._gzipStatus;
  }

  // hide_header - computed: false, optional: true, required: false
  private _hideHeader?: string; 
  public get hideHeader() {
    return this.getStringAttribute('hide_header');
  }
  public set hideHeader(value: string) {
    this._hideHeader = value;
  }
  public resetHideHeader() {
    this._hideHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideHeaderInput() {
    return this._hideHeader;
  }

  // ignore_cache_control - computed: false, optional: true, required: false
  private _ignoreCacheControl?: string; 
  public get ignoreCacheControl() {
    return this.getStringAttribute('ignore_cache_control');
  }
  public set ignoreCacheControl(value: string) {
    this._ignoreCacheControl = value;
  }
  public resetIgnoreCacheControl() {
    this._ignoreCacheControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCacheControlInput() {
    return this._ignoreCacheControl;
  }

  // ignore_expires - computed: false, optional: true, required: false
  private _ignoreExpires?: string; 
  public get ignoreExpires() {
    return this.getStringAttribute('ignore_expires');
  }
  public set ignoreExpires(value: string) {
    this._ignoreExpires = value;
  }
  public resetIgnoreExpires() {
    this._ignoreExpires = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreExpiresInput() {
    return this._ignoreExpires;
  }

  // ignore_vary - computed: false, optional: true, required: false
  private _ignoreVary?: string; 
  public get ignoreVary() {
    return this.getStringAttribute('ignore_vary');
  }
  public set ignoreVary(value: string) {
    this._ignoreVary = value;
  }
  public resetIgnoreVary() {
    this._ignoreVary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreVaryInput() {
    return this._ignoreVary;
  }

  // image_optimize - computed: false, optional: true, required: false
  private _imageOptimize?: string; 
  public get imageOptimize() {
    return this.getStringAttribute('image_optimize');
  }
  public set imageOptimize(value: string) {
    this._imageOptimize = value;
  }
  public resetImageOptimize() {
    this._imageOptimize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageOptimizeInput() {
    return this._imageOptimize;
  }

  // image_optimize_level - computed: false, optional: true, required: false
  private _imageOptimizeLevel?: string; 
  public get imageOptimizeLevel() {
    return this.getStringAttribute('image_optimize_level');
  }
  public set imageOptimizeLevel(value: string) {
    this._imageOptimizeLevel = value;
  }
  public resetImageOptimizeLevel() {
    this._imageOptimizeLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageOptimizeLevelInput() {
    return this._imageOptimizeLevel;
  }

  // image_optimize_metadata - computed: false, optional: true, required: false
  private _imageOptimizeMetadata?: string; 
  public get imageOptimizeMetadata() {
    return this.getStringAttribute('image_optimize_metadata');
  }
  public set imageOptimizeMetadata(value: string) {
    this._imageOptimizeMetadata = value;
  }
  public resetImageOptimizeMetadata() {
    this._imageOptimizeMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageOptimizeMetadataInput() {
    return this._imageOptimizeMetadata;
  }

  // image_optimize_progressive - computed: false, optional: true, required: false
  private _imageOptimizeProgressive?: string; 
  public get imageOptimizeProgressive() {
    return this.getStringAttribute('image_optimize_progressive');
  }
  public set imageOptimizeProgressive(value: string) {
    this._imageOptimizeProgressive = value;
  }
  public resetImageOptimizeProgressive() {
    this._imageOptimizeProgressive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageOptimizeProgressiveInput() {
    return this._imageOptimizeProgressive;
  }

  // image_optimize_webp - computed: false, optional: true, required: false
  private _imageOptimizeWebp?: string; 
  public get imageOptimizeWebp() {
    return this.getStringAttribute('image_optimize_webp');
  }
  public set imageOptimizeWebp(value: string) {
    this._imageOptimizeWebp = value;
  }
  public resetImageOptimizeWebp() {
    this._imageOptimizeWebp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageOptimizeWebpInput() {
    return this._imageOptimizeWebp;
  }

  // ratelimit_status - computed: false, optional: true, required: false
  private _ratelimitStatus?: string; 
  public get ratelimitStatus() {
    return this.getStringAttribute('ratelimit_status');
  }
  public set ratelimitStatus(value: string) {
    this._ratelimitStatus = value;
  }
  public resetRatelimitStatus() {
    this._ratelimitStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratelimitStatusInput() {
    return this._ratelimitStatus;
  }

  // set_host - computed: false, optional: true, required: false
  private _setHost?: string; 
  public get setHost() {
    return this.getStringAttribute('set_host');
  }
  public set setHost(value: string) {
    this._setHost = value;
  }
  public resetSetHost() {
    this._setHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setHostInput() {
    return this._setHost;
  }

  // set_request_headers - computed: false, optional: true, required: false
  private _setRequestHeaders?: { [key: string]: string }; 
  public get setRequestHeaders() {
    return this.getStringMapAttribute('set_request_headers');
  }
  public set setRequestHeaders(value: { [key: string]: string }) {
    this._setRequestHeaders = value;
  }
  public resetSetRequestHeaders() {
    this._setRequestHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setRequestHeadersInput() {
    return this._setRequestHeaders;
  }

  // set_response_headers - computed: false, optional: true, required: false
  private _setResponseHeaders?: { [key: string]: string }; 
  public get setResponseHeaders() {
    return this.getStringMapAttribute('set_response_headers');
  }
  public set setResponseHeaders(value: { [key: string]: string }) {
    this._setResponseHeaders = value;
  }
  public resetSetResponseHeaders() {
    this._setResponseHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setResponseHeadersInput() {
    return this._setResponseHeaders;
  }

  // set_uri - computed: false, optional: true, required: false
  private _setUri?: string; 
  public get setUri() {
    return this.getStringAttribute('set_uri');
  }
  public set setUri(value: string) {
    this._setUri = value;
  }
  public resetSetUri() {
    this._setUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setUriInput() {
    return this._setUri;
  }

  // signed_url_key - computed: false, optional: true, required: false
  private _signedUrlKey?: string; 
  public get signedUrlKey() {
    return this.getStringAttribute('signed_url_key');
  }
  public set signedUrlKey(value: string) {
    this._signedUrlKey = value;
  }
  public resetSignedUrlKey() {
    this._signedUrlKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signedUrlKeyInput() {
    return this._signedUrlKey;
  }

  // signed_url_type - computed: false, optional: true, required: false
  private _signedUrlType?: string; 
  public get signedUrlType() {
    return this.getStringAttribute('signed_url_type');
  }
  public set signedUrlType(value: string) {
    this._signedUrlType = value;
  }
  public resetSignedUrlType() {
    this._signedUrlType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signedUrlTypeInput() {
    return this._signedUrlType;
  }

  // ssl_mode - computed: false, optional: true, required: false
  private _sslMode?: string; 
  public get sslMode() {
    return this.getStringAttribute('ssl_mode');
  }
  public set sslMode(value: string) {
    this._sslMode = value;
  }
  public resetSslMode() {
    this._sslMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslModeInput() {
    return this._sslMode;
  }

  // waf_level - computed: false, optional: true, required: false
  private _wafLevel?: string; 
  public get wafLevel() {
    return this.getStringAttribute('waf_level');
  }
  public set wafLevel(value: string) {
    this._wafLevel = value;
  }
  public resetWafLevel() {
    this._wafLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wafLevelInput() {
    return this._wafLevel;
  }

  // waf_mode - computed: false, optional: true, required: false
  private _wafMode?: string; 
  public get wafMode() {
    return this.getStringAttribute('waf_mode');
  }
  public set wafMode(value: string) {
    this._wafMode = value;
  }
  public resetWafMode() {
    this._wafMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wafModeInput() {
    return this._wafMode;
  }

  // waf_rule_action - computed: false, optional: true, required: false
  private _wafRuleAction?: string; 
  public get wafRuleAction() {
    return this.getStringAttribute('waf_rule_action');
  }
  public set wafRuleAction(value: string) {
    this._wafRuleAction = value;
  }
  public resetWafRuleAction() {
    this._wafRuleAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wafRuleActionInput() {
    return this._wafRuleAction;
  }

  // waf_status - computed: false, optional: true, required: false
  private _wafStatus?: string; 
  public get wafStatus() {
    return this.getStringAttribute('waf_status');
  }
  public set wafStatus(value: string) {
    this._wafStatus = value;
  }
  public resetWafStatus() {
    this._wafStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wafStatusInput() {
    return this._wafStatus;
  }
}

export class SmartRulesSettingsSmartRuleActionList extends cdktf.ComplexList {
  public internalValue? : SmartRulesSettingsSmartRuleAction[] | cdktf.IResolvable

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
  public get(index: number): SmartRulesSettingsSmartRuleActionOutputReference {
    return new SmartRulesSettingsSmartRuleActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SmartRulesSettingsSmartRuleMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_settings#bots SmartRulesSettings#bots}
  */
  readonly bots?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_settings#cookie SmartRulesSettings#cookie}
  */
  readonly cookie?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_settings#cookie_content SmartRulesSettings#cookie_content}
  */
  readonly cookieContent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_settings#device_type SmartRulesSettings#device_type}
  */
  readonly deviceType?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_settings#header SmartRulesSettings#header}
  */
  readonly header?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_settings#hostname SmartRulesSettings#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_settings#http_referer SmartRulesSettings#http_referer}
  */
  readonly httpReferer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_settings#http_user_agent SmartRulesSettings#http_user_agent}
  */
  readonly httpUserAgent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_settings#http_version SmartRulesSettings#http_version}
  */
  readonly httpVersion?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_settings#origin_continent SmartRulesSettings#origin_continent}
  */
  readonly originContinent?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_settings#origin_country SmartRulesSettings#origin_country}
  */
  readonly originCountry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_settings#remote_address SmartRulesSettings#remote_address}
  */
  readonly remoteAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_settings#request_method SmartRulesSettings#request_method}
  */
  readonly requestMethod?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_settings#request_uri SmartRulesSettings#request_uri}
  */
  readonly requestUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_settings#scheme SmartRulesSettings#scheme}
  */
  readonly scheme?: string;
}

export function smartRulesSettingsSmartRuleMatchToTerraform(struct?: SmartRulesSettingsSmartRuleMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bots: cdktf.stringToTerraform(struct!.bots),
    cookie: cdktf.stringToTerraform(struct!.cookie),
    cookie_content: cdktf.stringToTerraform(struct!.cookieContent),
    device_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.deviceType),
    header: cdktf.stringToTerraform(struct!.header),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    http_referer: cdktf.stringToTerraform(struct!.httpReferer),
    http_user_agent: cdktf.stringToTerraform(struct!.httpUserAgent),
    http_version: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.httpVersion),
    origin_continent: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.originContinent),
    origin_country: cdktf.stringToTerraform(struct!.originCountry),
    remote_address: cdktf.stringToTerraform(struct!.remoteAddress),
    request_method: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.requestMethod),
    request_uri: cdktf.stringToTerraform(struct!.requestUri),
    scheme: cdktf.stringToTerraform(struct!.scheme),
  }
}


export function smartRulesSettingsSmartRuleMatchToHclTerraform(struct?: SmartRulesSettingsSmartRuleMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bots: {
      value: cdktf.stringToHclTerraform(struct!.bots),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cookie: {
      value: cdktf.stringToHclTerraform(struct!.cookie),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cookie_content: {
      value: cdktf.stringToHclTerraform(struct!.cookieContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.deviceType),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    header: {
      value: cdktf.stringToHclTerraform(struct!.header),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_referer: {
      value: cdktf.stringToHclTerraform(struct!.httpReferer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_user_agent: {
      value: cdktf.stringToHclTerraform(struct!.httpUserAgent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_version: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.httpVersion),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    origin_continent: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.originContinent),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    origin_country: {
      value: cdktf.stringToHclTerraform(struct!.originCountry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_address: {
      value: cdktf.stringToHclTerraform(struct!.remoteAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_method: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.requestMethod),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    request_uri: {
      value: cdktf.stringToHclTerraform(struct!.requestUri),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SmartRulesSettingsSmartRuleMatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SmartRulesSettingsSmartRuleMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bots !== undefined) {
      hasAnyValues = true;
      internalValueResult.bots = this._bots;
    }
    if (this._cookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookie = this._cookie;
    }
    if (this._cookieContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieContent = this._cookieContent;
    }
    if (this._deviceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceType = this._deviceType;
    }
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._httpReferer !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpReferer = this._httpReferer;
    }
    if (this._httpUserAgent !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpUserAgent = this._httpUserAgent;
    }
    if (this._httpVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpVersion = this._httpVersion;
    }
    if (this._originContinent !== undefined) {
      hasAnyValues = true;
      internalValueResult.originContinent = this._originContinent;
    }
    if (this._originCountry !== undefined) {
      hasAnyValues = true;
      internalValueResult.originCountry = this._originCountry;
    }
    if (this._remoteAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteAddress = this._remoteAddress;
    }
    if (this._requestMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMethod = this._requestMethod;
    }
    if (this._requestUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestUri = this._requestUri;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SmartRulesSettingsSmartRuleMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bots = undefined;
      this._cookie = undefined;
      this._cookieContent = undefined;
      this._deviceType = undefined;
      this._header = undefined;
      this._hostname = undefined;
      this._httpReferer = undefined;
      this._httpUserAgent = undefined;
      this._httpVersion = undefined;
      this._originContinent = undefined;
      this._originCountry = undefined;
      this._remoteAddress = undefined;
      this._requestMethod = undefined;
      this._requestUri = undefined;
      this._scheme = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bots = value.bots;
      this._cookie = value.cookie;
      this._cookieContent = value.cookieContent;
      this._deviceType = value.deviceType;
      this._header = value.header;
      this._hostname = value.hostname;
      this._httpReferer = value.httpReferer;
      this._httpUserAgent = value.httpUserAgent;
      this._httpVersion = value.httpVersion;
      this._originContinent = value.originContinent;
      this._originCountry = value.originCountry;
      this._remoteAddress = value.remoteAddress;
      this._requestMethod = value.requestMethod;
      this._requestUri = value.requestUri;
      this._scheme = value.scheme;
    }
  }

  // bots - computed: false, optional: true, required: false
  private _bots?: string; 
  public get bots() {
    return this.getStringAttribute('bots');
  }
  public set bots(value: string) {
    this._bots = value;
  }
  public resetBots() {
    this._bots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botsInput() {
    return this._bots;
  }

  // cookie - computed: false, optional: true, required: false
  private _cookie?: string; 
  public get cookie() {
    return this.getStringAttribute('cookie');
  }
  public set cookie(value: string) {
    this._cookie = value;
  }
  public resetCookie() {
    this._cookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieInput() {
    return this._cookie;
  }

  // cookie_content - computed: false, optional: true, required: false
  private _cookieContent?: string; 
  public get cookieContent() {
    return this.getStringAttribute('cookie_content');
  }
  public set cookieContent(value: string) {
    this._cookieContent = value;
  }
  public resetCookieContent() {
    this._cookieContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieContentInput() {
    return this._cookieContent;
  }

  // device_type - computed: false, optional: true, required: false
  private _deviceType?: string[]; 
  public get deviceType() {
    return this.getListAttribute('device_type');
  }
  public set deviceType(value: string[]) {
    this._deviceType = value;
  }
  public resetDeviceType() {
    this._deviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypeInput() {
    return this._deviceType;
  }

  // header - computed: false, optional: true, required: false
  private _header?: string; 
  public get header() {
    return this.getStringAttribute('header');
  }
  public set header(value: string) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // http_referer - computed: false, optional: true, required: false
  private _httpReferer?: string; 
  public get httpReferer() {
    return this.getStringAttribute('http_referer');
  }
  public set httpReferer(value: string) {
    this._httpReferer = value;
  }
  public resetHttpReferer() {
    this._httpReferer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRefererInput() {
    return this._httpReferer;
  }

  // http_user_agent - computed: false, optional: true, required: false
  private _httpUserAgent?: string; 
  public get httpUserAgent() {
    return this.getStringAttribute('http_user_agent');
  }
  public set httpUserAgent(value: string) {
    this._httpUserAgent = value;
  }
  public resetHttpUserAgent() {
    this._httpUserAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpUserAgentInput() {
    return this._httpUserAgent;
  }

  // http_version - computed: false, optional: true, required: false
  private _httpVersion?: string[]; 
  public get httpVersion() {
    return this.getListAttribute('http_version');
  }
  public set httpVersion(value: string[]) {
    this._httpVersion = value;
  }
  public resetHttpVersion() {
    this._httpVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpVersionInput() {
    return this._httpVersion;
  }

  // origin_continent - computed: false, optional: true, required: false
  private _originContinent?: string[]; 
  public get originContinent() {
    return this.getListAttribute('origin_continent');
  }
  public set originContinent(value: string[]) {
    this._originContinent = value;
  }
  public resetOriginContinent() {
    this._originContinent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originContinentInput() {
    return this._originContinent;
  }

  // origin_country - computed: false, optional: true, required: false
  private _originCountry?: string; 
  public get originCountry() {
    return this.getStringAttribute('origin_country');
  }
  public set originCountry(value: string) {
    this._originCountry = value;
  }
  public resetOriginCountry() {
    this._originCountry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originCountryInput() {
    return this._originCountry;
  }

  // remote_address - computed: false, optional: true, required: false
  private _remoteAddress?: string; 
  public get remoteAddress() {
    return this.getStringAttribute('remote_address');
  }
  public set remoteAddress(value: string) {
    this._remoteAddress = value;
  }
  public resetRemoteAddress() {
    this._remoteAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAddressInput() {
    return this._remoteAddress;
  }

  // request_method - computed: false, optional: true, required: false
  private _requestMethod?: string[]; 
  public get requestMethod() {
    return this.getListAttribute('request_method');
  }
  public set requestMethod(value: string[]) {
    this._requestMethod = value;
  }
  public resetRequestMethod() {
    this._requestMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMethodInput() {
    return this._requestMethod;
  }

  // request_uri - computed: false, optional: true, required: false
  private _requestUri?: string; 
  public get requestUri() {
    return this.getStringAttribute('request_uri');
  }
  public set requestUri(value: string) {
    this._requestUri = value;
  }
  public resetRequestUri() {
    this._requestUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestUriInput() {
    return this._requestUri;
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }
}

export class SmartRulesSettingsSmartRuleMatchList extends cdktf.ComplexList {
  public internalValue? : SmartRulesSettingsSmartRuleMatch[] | cdktf.IResolvable

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
  public get(index: number): SmartRulesSettingsSmartRuleMatchOutputReference {
    return new SmartRulesSettingsSmartRuleMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SmartRulesSettingsSmartRuleMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_settings#notes SmartRulesSettings#notes}
  */
  readonly notes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_settings#status SmartRulesSettings#status}
  */
  readonly status?: string;
}

export function smartRulesSettingsSmartRuleMetadataToTerraform(struct?: SmartRulesSettingsSmartRuleMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    notes: cdktf.stringToTerraform(struct!.notes),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function smartRulesSettingsSmartRuleMetadataToHclTerraform(struct?: SmartRulesSettingsSmartRuleMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    notes: {
      value: cdktf.stringToHclTerraform(struct!.notes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class SmartRulesSettingsSmartRuleMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SmartRulesSettingsSmartRuleMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notes !== undefined) {
      hasAnyValues = true;
      internalValueResult.notes = this._notes;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SmartRulesSettingsSmartRuleMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._notes = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._notes = value.notes;
      this._status = value.status;
    }
  }

  // notes - computed: false, optional: true, required: false
  private _notes?: string; 
  public get notes() {
    return this.getStringAttribute('notes');
  }
  public set notes(value: string) {
    this._notes = value;
  }
  public resetNotes() {
    this._notes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notesInput() {
    return this._notes;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

export class SmartRulesSettingsSmartRuleMetadataList extends cdktf.ComplexList {
  public internalValue? : SmartRulesSettingsSmartRuleMetadata[] | cdktf.IResolvable

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
  public get(index: number): SmartRulesSettingsSmartRuleMetadataOutputReference {
    return new SmartRulesSettingsSmartRuleMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SmartRulesSettingsSmartRule {
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_settings#action SmartRulesSettings#action}
  */
  readonly action: SmartRulesSettingsSmartRuleAction[] | cdktf.IResolvable;
  /**
  * match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_settings#match SmartRulesSettings#match}
  */
  readonly match: SmartRulesSettingsSmartRuleMatch[] | cdktf.IResolvable;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_settings#metadata SmartRulesSettings#metadata}
  */
  readonly metadata?: SmartRulesSettingsSmartRuleMetadata[] | cdktf.IResolvable;
}

export function smartRulesSettingsSmartRuleToTerraform(struct?: SmartRulesSettingsSmartRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.listMapper(smartRulesSettingsSmartRuleActionToTerraform, true)(struct!.action),
    match: cdktf.listMapper(smartRulesSettingsSmartRuleMatchToTerraform, true)(struct!.match),
    metadata: cdktf.listMapper(smartRulesSettingsSmartRuleMetadataToTerraform, true)(struct!.metadata),
  }
}


export function smartRulesSettingsSmartRuleToHclTerraform(struct?: SmartRulesSettingsSmartRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.listMapperHcl(smartRulesSettingsSmartRuleActionToHclTerraform, true)(struct!.action),
      isBlock: true,
      type: "list",
      storageClassType: "SmartRulesSettingsSmartRuleActionList",
    },
    match: {
      value: cdktf.listMapperHcl(smartRulesSettingsSmartRuleMatchToHclTerraform, true)(struct!.match),
      isBlock: true,
      type: "list",
      storageClassType: "SmartRulesSettingsSmartRuleMatchList",
    },
    metadata: {
      value: cdktf.listMapperHcl(smartRulesSettingsSmartRuleMetadataToHclTerraform, true)(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "SmartRulesSettingsSmartRuleMetadataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SmartRulesSettingsSmartRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SmartRulesSettingsSmartRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SmartRulesSettingsSmartRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action.internalValue = undefined;
      this._match.internalValue = undefined;
      this._metadata.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action.internalValue = value.action;
      this._match.internalValue = value.match;
      this._metadata.internalValue = value.metadata;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action = new SmartRulesSettingsSmartRuleActionList(this, "action", false);
  public get action() {
    return this._action;
  }
  public putAction(value: SmartRulesSettingsSmartRuleAction[] | cdktf.IResolvable) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // match - computed: false, optional: false, required: true
  private _match = new SmartRulesSettingsSmartRuleMatchList(this, "match", false);
  public get match() {
    return this._match;
  }
  public putMatch(value: SmartRulesSettingsSmartRuleMatch[] | cdktf.IResolvable) {
    this._match.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new SmartRulesSettingsSmartRuleMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: SmartRulesSettingsSmartRuleMetadata[] | cdktf.IResolvable) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }
}

export class SmartRulesSettingsSmartRuleList extends cdktf.ComplexList {
  public internalValue? : SmartRulesSettingsSmartRule[] | cdktf.IResolvable

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
  public get(index: number): SmartRulesSettingsSmartRuleOutputReference {
    return new SmartRulesSettingsSmartRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_settings gocache_smart_rules_settings}
*/
export class SmartRulesSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gocache_smart_rules_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SmartRulesSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SmartRulesSettings to import
  * @param importFromId The id of the existing SmartRulesSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SmartRulesSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gocache_smart_rules_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_settings gocache_smart_rules_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SmartRulesSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: SmartRulesSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'gocache_smart_rules_settings',
      terraformGeneratorMetadata: {
        providerName: 'gocache',
        providerVersion: '0.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._domain = config.domain;
    this._id = config.id;
    this._smartRule.internalValue = config.smartRule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bulk_id - computed: true, optional: false, required: false
  public get bulkId() {
    return this.getNumberAttribute('bulk_id');
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

  // smart_rule - computed: false, optional: false, required: true
  private _smartRule = new SmartRulesSettingsSmartRuleList(this, "smart_rule", false);
  public get smartRule() {
    return this._smartRule;
  }
  public putSmartRule(value: SmartRulesSettingsSmartRule[] | cdktf.IResolvable) {
    this._smartRule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get smartRuleInput() {
    return this._smartRule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain: cdktf.stringToTerraform(this._domain),
      id: cdktf.stringToTerraform(this._id),
      smart_rule: cdktf.listMapper(smartRulesSettingsSmartRuleToTerraform, true)(this._smartRule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      smart_rule: {
        value: cdktf.listMapperHcl(smartRulesSettingsSmartRuleToHclTerraform, true)(this._smartRule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SmartRulesSettingsSmartRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
