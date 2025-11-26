// https://registry.terraform.io/providers/twingate/twingate/3.6.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TwingateProviderConfig {
  /**
  * The access key for API operations. You can retrieve this
  * from the Twingate Admin Console ([documentation](https://docs.twingate.com/docs/api-overview)).
  * Alternatively, this can be specified using the TWINGATE_API_TOKEN environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.6.0/docs#api_token TwingateProvider#api_token}
  */
  readonly apiToken?: string;
  /**
  * Specifies the cache settings for the provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.6.0/docs#cache TwingateProvider#cache}
  */
  readonly cache?: TwingateProviderCache;
  /**
  * A default set of tags applied globally to all resources created by the provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.6.0/docs#default_tags TwingateProvider#default_tags}
  */
  readonly defaultTags?: TwingateProviderDefaultTags;
  /**
  * Specifies a retry limit for the http requests made. The default value is 10.
  * Alternatively, this can be specified using the TWINGATE_HTTP_MAX_RETRY environment variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.6.0/docs#http_max_retry TwingateProvider#http_max_retry}
  */
  readonly httpMaxRetry?: number;
  /**
  * Specifies a time limit in seconds for the http requests made. The default value is 35 seconds.
  * Alternatively, this can be specified using the TWINGATE_HTTP_TIMEOUT environment variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.6.0/docs#http_timeout TwingateProvider#http_timeout}
  */
  readonly httpTimeout?: number;
  /**
  * Your Twingate network ID for API operations.
  * You can find it in the Admin Console URL, for example:
  * `autoco.twingate.com`, where `autoco` is your network ID
  * Alternatively, this can be specified using the TWINGATE_NETWORK environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.6.0/docs#network TwingateProvider#network}
  */
  readonly network?: string;
  /**
  * The default is 'twingate.com'
  * This is optional and shouldn't be changed under normal circumstances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.6.0/docs#url TwingateProvider#url}
  */
  readonly url?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.6.0/docs#alias TwingateProvider#alias}
  */
  readonly alias?: string;
}
export interface TwingateProviderCacheGroupsFilter {
  /**
  * Returns only Groups matching the specified state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.6.0/docs#is_active TwingateProvider#is_active}
  */
  readonly isActive?: boolean | cdktf.IResolvable;
  /**
  * Returns only groups that exactly match this name. If no options are passed it will return all resources. Only one option can be used at a time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.6.0/docs#name TwingateProvider#name}
  */
  readonly name?: string;
  /**
  * Match when the value exist in the name of the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.6.0/docs#name_contains TwingateProvider#name_contains}
  */
  readonly nameContains?: string;
  /**
  * Match when the exact value does not exist in the name of the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.6.0/docs#name_exclude TwingateProvider#name_exclude}
  */
  readonly nameExclude?: string;
  /**
  * The name of the group must start with the value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.6.0/docs#name_prefix TwingateProvider#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * The regular expression match of the name of the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.6.0/docs#name_regexp TwingateProvider#name_regexp}
  */
  readonly nameRegexp?: string;
  /**
  * The name of the group must end with the value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.6.0/docs#name_suffix TwingateProvider#name_suffix}
  */
  readonly nameSuffix?: string;
  /**
  * Returns groups that match a list of types. valid types: `MANUAL`, `SYNCED`, `SYSTEM`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.6.0/docs#types TwingateProvider#types}
  */
  readonly types?: string[];
}

export function twingateProviderCacheGroupsFilterToTerraform(struct?: TwingateProviderCacheGroupsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_active: cdktf.booleanToTerraform(struct!.isActive),
    name: cdktf.stringToTerraform(struct!.name),
    name_contains: cdktf.stringToTerraform(struct!.nameContains),
    name_exclude: cdktf.stringToTerraform(struct!.nameExclude),
    name_prefix: cdktf.stringToTerraform(struct!.namePrefix),
    name_regexp: cdktf.stringToTerraform(struct!.nameRegexp),
    name_suffix: cdktf.stringToTerraform(struct!.nameSuffix),
    types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.types),
  }
}


export function twingateProviderCacheGroupsFilterToHclTerraform(struct?: TwingateProviderCacheGroupsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_active: {
      value: cdktf.booleanToHclTerraform(struct!.isActive),
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
    name_contains: {
      value: cdktf.stringToHclTerraform(struct!.nameContains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_exclude: {
      value: cdktf.stringToHclTerraform(struct!.nameExclude),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_prefix: {
      value: cdktf.stringToHclTerraform(struct!.namePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_regexp: {
      value: cdktf.stringToHclTerraform(struct!.nameRegexp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_suffix: {
      value: cdktf.stringToHclTerraform(struct!.nameSuffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.types),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface TwingateProviderCacheResourcesFilter {
  /**
  * Returns only resources that exactly match this name. If no options are passed it will return all resources. Only one option can be used at a time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.6.0/docs#name TwingateProvider#name}
  */
  readonly name?: string;
  /**
  * Match when the value exist in the name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.6.0/docs#name_contains TwingateProvider#name_contains}
  */
  readonly nameContains?: string;
  /**
  * Match when the exact value does not exist in the name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.6.0/docs#name_exclude TwingateProvider#name_exclude}
  */
  readonly nameExclude?: string;
  /**
  * The name of the resource must start with the value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.6.0/docs#name_prefix TwingateProvider#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * The regular expression match of the name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.6.0/docs#name_regexp TwingateProvider#name_regexp}
  */
  readonly nameRegexp?: string;
  /**
  * The name of the resource must end with the value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.6.0/docs#name_suffix TwingateProvider#name_suffix}
  */
  readonly nameSuffix?: string;
  /**
  * Returns only resources that exactly match the given tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.6.0/docs#tags TwingateProvider#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function twingateProviderCacheResourcesFilterToTerraform(struct?: TwingateProviderCacheResourcesFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    name_contains: cdktf.stringToTerraform(struct!.nameContains),
    name_exclude: cdktf.stringToTerraform(struct!.nameExclude),
    name_prefix: cdktf.stringToTerraform(struct!.namePrefix),
    name_regexp: cdktf.stringToTerraform(struct!.nameRegexp),
    name_suffix: cdktf.stringToTerraform(struct!.nameSuffix),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function twingateProviderCacheResourcesFilterToHclTerraform(struct?: TwingateProviderCacheResourcesFilter | cdktf.IResolvable): any {
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
    name_contains: {
      value: cdktf.stringToHclTerraform(struct!.nameContains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_exclude: {
      value: cdktf.stringToHclTerraform(struct!.nameExclude),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_prefix: {
      value: cdktf.stringToHclTerraform(struct!.namePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_regexp: {
      value: cdktf.stringToHclTerraform(struct!.nameRegexp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_suffix: {
      value: cdktf.stringToHclTerraform(struct!.nameSuffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface TwingateProviderCache {
  /**
  * Specifies whether the provider should cache groups. The default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.6.0/docs#groups_enabled TwingateProvider#groups_enabled}
  */
  readonly groupsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Specifies the filter for the groups to be cached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.6.0/docs#groups_filter TwingateProvider#groups_filter}
  */
  readonly groupsFilter?: TwingateProviderCacheGroupsFilter;
  /**
  * Specifies whether the provider should cache resources. The default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.6.0/docs#resource_enabled TwingateProvider#resource_enabled}
  */
  readonly resourceEnabled?: boolean | cdktf.IResolvable;
  /**
  * Specifies the filter for the resources to be cached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.6.0/docs#resources_filter TwingateProvider#resources_filter}
  */
  readonly resourcesFilter?: TwingateProviderCacheResourcesFilter;
}

export function twingateProviderCacheToTerraform(struct?: TwingateProviderCache | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    groups_enabled: cdktf.booleanToTerraform(struct!.groupsEnabled),
    groups_filter: twingateProviderCacheGroupsFilterToTerraform(struct!.groupsFilter),
    resource_enabled: cdktf.booleanToTerraform(struct!.resourceEnabled),
    resources_filter: twingateProviderCacheResourcesFilterToTerraform(struct!.resourcesFilter),
  }
}


export function twingateProviderCacheToHclTerraform(struct?: TwingateProviderCache | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    groups_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.groupsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    groups_filter: {
      value: twingateProviderCacheGroupsFilterToHclTerraform(struct!.groupsFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "TwingateProviderCacheGroupsFilter",
    },
    resource_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.resourceEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    resources_filter: {
      value: twingateProviderCacheResourcesFilterToHclTerraform(struct!.resourcesFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "TwingateProviderCacheResourcesFilter",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface TwingateProviderDefaultTags {
  /**
  * A map of key-value pair tags to be set on all resources by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.6.0/docs#tags TwingateProvider#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function twingateProviderDefaultTagsToTerraform(struct?: TwingateProviderDefaultTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function twingateProviderDefaultTagsToHclTerraform(struct?: TwingateProviderDefaultTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/twingate/twingate/3.6.0/docs twingate}
*/
export class TwingateProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twingate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TwingateProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TwingateProvider to import
  * @param importFromId The id of the existing TwingateProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/twingate/twingate/3.6.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TwingateProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twingate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/twingate/twingate/3.6.0/docs twingate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TwingateProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: TwingateProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'twingate',
      terraformGeneratorMetadata: {
        providerName: 'twingate',
        providerVersion: '3.6.0',
        providerVersionConstraint: '3.6.0'
      },
      terraformProviderSource: 'Twingate/twingate'
    });
    this._apiToken = config.apiToken;
    this._cache = config.cache;
    this._defaultTags = config.defaultTags;
    this._httpMaxRetry = config.httpMaxRetry;
    this._httpTimeout = config.httpTimeout;
    this._network = config.network;
    this._url = config.url;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_token - computed: false, optional: true, required: false
  private _apiToken?: string; 
  public get apiToken() {
    return this._apiToken;
  }
  public set apiToken(value: string | undefined) {
    this._apiToken = value;
  }
  public resetApiToken() {
    this._apiToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenInput() {
    return this._apiToken;
  }

  // cache - computed: false, optional: true, required: false
  private _cache?: TwingateProviderCache; 
  public get cache() {
    return this._cache;
  }
  public set cache(value: TwingateProviderCache | undefined) {
    this._cache = value;
  }
  public resetCache() {
    this._cache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheInput() {
    return this._cache;
  }

  // default_tags - computed: false, optional: true, required: false
  private _defaultTags?: TwingateProviderDefaultTags; 
  public get defaultTags() {
    return this._defaultTags;
  }
  public set defaultTags(value: TwingateProviderDefaultTags | undefined) {
    this._defaultTags = value;
  }
  public resetDefaultTags() {
    this._defaultTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTagsInput() {
    return this._defaultTags;
  }

  // http_max_retry - computed: false, optional: true, required: false
  private _httpMaxRetry?: number; 
  public get httpMaxRetry() {
    return this._httpMaxRetry;
  }
  public set httpMaxRetry(value: number | undefined) {
    this._httpMaxRetry = value;
  }
  public resetHttpMaxRetry() {
    this._httpMaxRetry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMaxRetryInput() {
    return this._httpMaxRetry;
  }

  // http_timeout - computed: false, optional: true, required: false
  private _httpTimeout?: number; 
  public get httpTimeout() {
    return this._httpTimeout;
  }
  public set httpTimeout(value: number | undefined) {
    this._httpTimeout = value;
  }
  public resetHttpTimeout() {
    this._httpTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpTimeoutInput() {
    return this._httpTimeout;
  }

  // network - computed: false, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this._network;
  }
  public set network(value: string | undefined) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this._url;
  }
  public set url(value: string | undefined) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_token: cdktf.stringToTerraform(this._apiToken),
      cache: twingateProviderCacheToTerraform(this._cache),
      default_tags: twingateProviderDefaultTagsToTerraform(this._defaultTags),
      http_max_retry: cdktf.numberToTerraform(this._httpMaxRetry),
      http_timeout: cdktf.numberToTerraform(this._httpTimeout),
      network: cdktf.stringToTerraform(this._network),
      url: cdktf.stringToTerraform(this._url),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_token: {
        value: cdktf.stringToHclTerraform(this._apiToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cache: {
        value: twingateProviderCacheToHclTerraform(this._cache),
        isBlock: true,
        type: "struct",
        storageClassType: "TwingateProviderCache",
      },
      default_tags: {
        value: twingateProviderDefaultTagsToHclTerraform(this._defaultTags),
        isBlock: true,
        type: "struct",
        storageClassType: "TwingateProviderDefaultTags",
      },
      http_max_retry: {
        value: cdktf.numberToHclTerraform(this._httpMaxRetry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      http_timeout: {
        value: cdktf.numberToHclTerraform(this._httpTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      network: {
        value: cdktf.stringToHclTerraform(this._network),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
