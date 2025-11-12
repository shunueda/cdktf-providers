// https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site_cache_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SiteCacheConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Comply with No-Cache and Max-Age directives in client requests. By default, these cache directives are ignored. Resources are dynamically profiled and re-configured to optimize performance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site_cache_configuration#client_comply_no_cache SiteCacheConfiguration#client_comply_no_cache}
  */
  readonly clientComplyNoCache?: boolean | cdktf.IResolvable;
  /**
  * Cache content on client browsers or applications. When not enabled, content is cached only on the Imperva proxies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site_cache_configuration#client_enable_client_side_caching SiteCacheConfiguration#client_enable_client_side_caching}
  */
  readonly clientEnableClientSideCaching?: boolean | cdktf.IResolvable;
  /**
  * Send Cache-Control: max-age and Age headers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site_cache_configuration#client_send_age_header SiteCacheConfiguration#client_send_age_header}
  */
  readonly clientSendAgeHeader?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site_cache_configuration#id SiteCacheConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Comply with Vary. Cache resources in accordance with the Vary response header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site_cache_configuration#key_comply_vary SiteCacheConfiguration#key_comply_vary}
  */
  readonly keyComplyVary?: boolean | cdktf.IResolvable;
  /**
  * Use the Same Cache for Full and Naked Domains. For example, use the same cached resource for www.example.com/a and example.com/a.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site_cache_configuration#key_unite_naked_full_cache SiteCacheConfiguration#key_unite_naked_full_cache}
  */
  readonly keyUniteNakedFullCache?: boolean | cdktf.IResolvable;
  /**
  * The resources that are cached over HTTPS, the general level applies. Options are `disabled`, `dont_include_html`, `include_html`, and `include_all_resources`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site_cache_configuration#mode_https SiteCacheConfiguration#mode_https}
  */
  readonly modeHttps?: string;
  /**
  * Caching level. Options are `disabled`, `custom_cache_rules_only`, `standard`, `smart`, and `all_resources`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site_cache_configuration#mode_level SiteCacheConfiguration#mode_level}
  */
  readonly modeLevel?: string;
  /**
  * The time, in seconds, that you set for this option determines how often the cache is refreshed. Relevant for the `include_html` and `include_all_resources` levels only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site_cache_configuration#mode_time SiteCacheConfiguration#mode_time}
  */
  readonly modeTime?: number;
  /**
  * When this option is checked Imperva will cache 301, 302, 303, 307, and 308 redirect response headers containing the target URI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site_cache_configuration#response_cache_300x SiteCacheConfiguration#response_cache_300x}
  */
  readonly responseCache300X?: boolean | cdktf.IResolvable;
  /**
  * Whether or not to cache 404 responses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site_cache_configuration#response_cache_404_enabled SiteCacheConfiguration#response_cache_404_enabled}
  */
  readonly responseCache404Enabled?: boolean | cdktf.IResolvable;
  /**
  * The time in seconds to cache 404 responses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site_cache_configuration#response_cache_404_time SiteCacheConfiguration#response_cache_404_time}
  */
  readonly responseCache404Time?: number;
  /**
  * Cache responses that don’t have a message body.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site_cache_configuration#response_cache_empty_responses SiteCacheConfiguration#response_cache_empty_responses}
  */
  readonly responseCacheEmptyResponses?: boolean | cdktf.IResolvable;
  /**
  * Cache HTTP 1.0 type responses that don’t include the Content-Length header or chunking.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site_cache_configuration#response_cache_http_10_responses SiteCacheConfiguration#response_cache_http_10_responses}
  */
  readonly responseCacheHttp10Responses?: boolean | cdktf.IResolvable;
  /**
  * The working mode for caching response headers. Options are `all`, `custom` and `disabled`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site_cache_configuration#response_cache_response_header_mode SiteCacheConfiguration#response_cache_response_header_mode}
  */
  readonly responseCacheResponseHeaderMode?: string;
  /**
  * An array of strings representing the response headers to be cached when working in `custom` mode. If empty, no response headers are cached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site_cache_configuration#response_cache_response_headers SiteCacheConfiguration#response_cache_response_headers}
  */
  readonly responseCacheResponseHeaders?: string[];
  /**
  * Adds an intermediate cache between other Imperva PoPs and your origin servers to protect your servers from redundant requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site_cache_configuration#response_cache_shield SiteCacheConfiguration#response_cache_shield}
  */
  readonly responseCacheShield?: boolean | cdktf.IResolvable;
  /**
  * The working mode for serving stale content. Options are `disabled`, `adaptive`, and `custom`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site_cache_configuration#response_stale_content_mode SiteCacheConfiguration#response_stale_content_mode}
  */
  readonly responseStaleContentMode?: string;
  /**
  * The time, in seconds, to serve stale content for when working in `custom` work mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site_cache_configuration#response_stale_content_time SiteCacheConfiguration#response_stale_content_time}
  */
  readonly responseStaleContentTime?: number;
  /**
  * Tag the response according to the value of this header. Specify which origin response header contains the cache tags in your resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site_cache_configuration#response_tag_response_header SiteCacheConfiguration#response_tag_response_header}
  */
  readonly responseTagResponseHeader?: string;
  /**
  * Numeric identifier of the site to operate on. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site_cache_configuration#site_id SiteCacheConfiguration#site_id}
  */
  readonly siteId: number;
  /**
  * Prefer 'Last Modified' over eTag. When this option is checked, Imperva prefers using Last Modified values (if available) over eTag values (recommended on multi-server setups).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site_cache_configuration#ttl_prefer_last_modified SiteCacheConfiguration#ttl_prefer_last_modified}
  */
  readonly ttlPreferLastModified?: boolean | cdktf.IResolvable;
  /**
  * Use shortest caching duration in case of conflicts. By default, the longest duration is used in case of conflict between caching rules or modes. When this option is checked, Imperva uses the shortest duration in case of conflict.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site_cache_configuration#ttl_use_shortest_caching SiteCacheConfiguration#ttl_use_shortest_caching}
  */
  readonly ttlUseShortestCaching?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site_cache_configuration incapsula_site_cache_configuration}
*/
export class SiteCacheConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "incapsula_site_cache_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SiteCacheConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SiteCacheConfiguration to import
  * @param importFromId The id of the existing SiteCacheConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site_cache_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SiteCacheConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "incapsula_site_cache_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site_cache_configuration incapsula_site_cache_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SiteCacheConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: SiteCacheConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'incapsula_site_cache_configuration',
      terraformGeneratorMetadata: {
        providerName: 'incapsula',
        providerVersion: '3.35.1',
        providerVersionConstraint: '3.35.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clientComplyNoCache = config.clientComplyNoCache;
    this._clientEnableClientSideCaching = config.clientEnableClientSideCaching;
    this._clientSendAgeHeader = config.clientSendAgeHeader;
    this._id = config.id;
    this._keyComplyVary = config.keyComplyVary;
    this._keyUniteNakedFullCache = config.keyUniteNakedFullCache;
    this._modeHttps = config.modeHttps;
    this._modeLevel = config.modeLevel;
    this._modeTime = config.modeTime;
    this._responseCache300X = config.responseCache300X;
    this._responseCache404Enabled = config.responseCache404Enabled;
    this._responseCache404Time = config.responseCache404Time;
    this._responseCacheEmptyResponses = config.responseCacheEmptyResponses;
    this._responseCacheHttp10Responses = config.responseCacheHttp10Responses;
    this._responseCacheResponseHeaderMode = config.responseCacheResponseHeaderMode;
    this._responseCacheResponseHeaders = config.responseCacheResponseHeaders;
    this._responseCacheShield = config.responseCacheShield;
    this._responseStaleContentMode = config.responseStaleContentMode;
    this._responseStaleContentTime = config.responseStaleContentTime;
    this._responseTagResponseHeader = config.responseTagResponseHeader;
    this._siteId = config.siteId;
    this._ttlPreferLastModified = config.ttlPreferLastModified;
    this._ttlUseShortestCaching = config.ttlUseShortestCaching;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_comply_no_cache - computed: false, optional: true, required: false
  private _clientComplyNoCache?: boolean | cdktf.IResolvable; 
  public get clientComplyNoCache() {
    return this.getBooleanAttribute('client_comply_no_cache');
  }
  public set clientComplyNoCache(value: boolean | cdktf.IResolvable) {
    this._clientComplyNoCache = value;
  }
  public resetClientComplyNoCache() {
    this._clientComplyNoCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientComplyNoCacheInput() {
    return this._clientComplyNoCache;
  }

  // client_enable_client_side_caching - computed: false, optional: true, required: false
  private _clientEnableClientSideCaching?: boolean | cdktf.IResolvable; 
  public get clientEnableClientSideCaching() {
    return this.getBooleanAttribute('client_enable_client_side_caching');
  }
  public set clientEnableClientSideCaching(value: boolean | cdktf.IResolvable) {
    this._clientEnableClientSideCaching = value;
  }
  public resetClientEnableClientSideCaching() {
    this._clientEnableClientSideCaching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientEnableClientSideCachingInput() {
    return this._clientEnableClientSideCaching;
  }

  // client_send_age_header - computed: false, optional: true, required: false
  private _clientSendAgeHeader?: boolean | cdktf.IResolvable; 
  public get clientSendAgeHeader() {
    return this.getBooleanAttribute('client_send_age_header');
  }
  public set clientSendAgeHeader(value: boolean | cdktf.IResolvable) {
    this._clientSendAgeHeader = value;
  }
  public resetClientSendAgeHeader() {
    this._clientSendAgeHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSendAgeHeaderInput() {
    return this._clientSendAgeHeader;
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

  // key_comply_vary - computed: false, optional: true, required: false
  private _keyComplyVary?: boolean | cdktf.IResolvable; 
  public get keyComplyVary() {
    return this.getBooleanAttribute('key_comply_vary');
  }
  public set keyComplyVary(value: boolean | cdktf.IResolvable) {
    this._keyComplyVary = value;
  }
  public resetKeyComplyVary() {
    this._keyComplyVary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyComplyVaryInput() {
    return this._keyComplyVary;
  }

  // key_unite_naked_full_cache - computed: false, optional: true, required: false
  private _keyUniteNakedFullCache?: boolean | cdktf.IResolvable; 
  public get keyUniteNakedFullCache() {
    return this.getBooleanAttribute('key_unite_naked_full_cache');
  }
  public set keyUniteNakedFullCache(value: boolean | cdktf.IResolvable) {
    this._keyUniteNakedFullCache = value;
  }
  public resetKeyUniteNakedFullCache() {
    this._keyUniteNakedFullCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyUniteNakedFullCacheInput() {
    return this._keyUniteNakedFullCache;
  }

  // mode_https - computed: false, optional: true, required: false
  private _modeHttps?: string; 
  public get modeHttps() {
    return this.getStringAttribute('mode_https');
  }
  public set modeHttps(value: string) {
    this._modeHttps = value;
  }
  public resetModeHttps() {
    this._modeHttps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeHttpsInput() {
    return this._modeHttps;
  }

  // mode_level - computed: false, optional: true, required: false
  private _modeLevel?: string; 
  public get modeLevel() {
    return this.getStringAttribute('mode_level');
  }
  public set modeLevel(value: string) {
    this._modeLevel = value;
  }
  public resetModeLevel() {
    this._modeLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeLevelInput() {
    return this._modeLevel;
  }

  // mode_time - computed: false, optional: true, required: false
  private _modeTime?: number; 
  public get modeTime() {
    return this.getNumberAttribute('mode_time');
  }
  public set modeTime(value: number) {
    this._modeTime = value;
  }
  public resetModeTime() {
    this._modeTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeTimeInput() {
    return this._modeTime;
  }

  // response_cache_300x - computed: false, optional: true, required: false
  private _responseCache300X?: boolean | cdktf.IResolvable; 
  public get responseCache300X() {
    return this.getBooleanAttribute('response_cache_300x');
  }
  public set responseCache300X(value: boolean | cdktf.IResolvable) {
    this._responseCache300X = value;
  }
  public resetResponseCache300X() {
    this._responseCache300X = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCache300XInput() {
    return this._responseCache300X;
  }

  // response_cache_404_enabled - computed: false, optional: true, required: false
  private _responseCache404Enabled?: boolean | cdktf.IResolvable; 
  public get responseCache404Enabled() {
    return this.getBooleanAttribute('response_cache_404_enabled');
  }
  public set responseCache404Enabled(value: boolean | cdktf.IResolvable) {
    this._responseCache404Enabled = value;
  }
  public resetResponseCache404Enabled() {
    this._responseCache404Enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCache404EnabledInput() {
    return this._responseCache404Enabled;
  }

  // response_cache_404_time - computed: false, optional: true, required: false
  private _responseCache404Time?: number; 
  public get responseCache404Time() {
    return this.getNumberAttribute('response_cache_404_time');
  }
  public set responseCache404Time(value: number) {
    this._responseCache404Time = value;
  }
  public resetResponseCache404Time() {
    this._responseCache404Time = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCache404TimeInput() {
    return this._responseCache404Time;
  }

  // response_cache_empty_responses - computed: false, optional: true, required: false
  private _responseCacheEmptyResponses?: boolean | cdktf.IResolvable; 
  public get responseCacheEmptyResponses() {
    return this.getBooleanAttribute('response_cache_empty_responses');
  }
  public set responseCacheEmptyResponses(value: boolean | cdktf.IResolvable) {
    this._responseCacheEmptyResponses = value;
  }
  public resetResponseCacheEmptyResponses() {
    this._responseCacheEmptyResponses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCacheEmptyResponsesInput() {
    return this._responseCacheEmptyResponses;
  }

  // response_cache_http_10_responses - computed: false, optional: true, required: false
  private _responseCacheHttp10Responses?: boolean | cdktf.IResolvable; 
  public get responseCacheHttp10Responses() {
    return this.getBooleanAttribute('response_cache_http_10_responses');
  }
  public set responseCacheHttp10Responses(value: boolean | cdktf.IResolvable) {
    this._responseCacheHttp10Responses = value;
  }
  public resetResponseCacheHttp10Responses() {
    this._responseCacheHttp10Responses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCacheHttp10ResponsesInput() {
    return this._responseCacheHttp10Responses;
  }

  // response_cache_response_header_mode - computed: false, optional: true, required: false
  private _responseCacheResponseHeaderMode?: string; 
  public get responseCacheResponseHeaderMode() {
    return this.getStringAttribute('response_cache_response_header_mode');
  }
  public set responseCacheResponseHeaderMode(value: string) {
    this._responseCacheResponseHeaderMode = value;
  }
  public resetResponseCacheResponseHeaderMode() {
    this._responseCacheResponseHeaderMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCacheResponseHeaderModeInput() {
    return this._responseCacheResponseHeaderMode;
  }

  // response_cache_response_headers - computed: false, optional: true, required: false
  private _responseCacheResponseHeaders?: string[]; 
  public get responseCacheResponseHeaders() {
    return cdktf.Fn.tolist(this.getListAttribute('response_cache_response_headers'));
  }
  public set responseCacheResponseHeaders(value: string[]) {
    this._responseCacheResponseHeaders = value;
  }
  public resetResponseCacheResponseHeaders() {
    this._responseCacheResponseHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCacheResponseHeadersInput() {
    return this._responseCacheResponseHeaders;
  }

  // response_cache_shield - computed: false, optional: true, required: false
  private _responseCacheShield?: boolean | cdktf.IResolvable; 
  public get responseCacheShield() {
    return this.getBooleanAttribute('response_cache_shield');
  }
  public set responseCacheShield(value: boolean | cdktf.IResolvable) {
    this._responseCacheShield = value;
  }
  public resetResponseCacheShield() {
    this._responseCacheShield = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCacheShieldInput() {
    return this._responseCacheShield;
  }

  // response_stale_content_mode - computed: false, optional: true, required: false
  private _responseStaleContentMode?: string; 
  public get responseStaleContentMode() {
    return this.getStringAttribute('response_stale_content_mode');
  }
  public set responseStaleContentMode(value: string) {
    this._responseStaleContentMode = value;
  }
  public resetResponseStaleContentMode() {
    this._responseStaleContentMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseStaleContentModeInput() {
    return this._responseStaleContentMode;
  }

  // response_stale_content_time - computed: false, optional: true, required: false
  private _responseStaleContentTime?: number; 
  public get responseStaleContentTime() {
    return this.getNumberAttribute('response_stale_content_time');
  }
  public set responseStaleContentTime(value: number) {
    this._responseStaleContentTime = value;
  }
  public resetResponseStaleContentTime() {
    this._responseStaleContentTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseStaleContentTimeInput() {
    return this._responseStaleContentTime;
  }

  // response_tag_response_header - computed: false, optional: true, required: false
  private _responseTagResponseHeader?: string; 
  public get responseTagResponseHeader() {
    return this.getStringAttribute('response_tag_response_header');
  }
  public set responseTagResponseHeader(value: string) {
    this._responseTagResponseHeader = value;
  }
  public resetResponseTagResponseHeader() {
    this._responseTagResponseHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTagResponseHeaderInput() {
    return this._responseTagResponseHeader;
  }

  // site_id - computed: false, optional: false, required: true
  private _siteId?: number; 
  public get siteId() {
    return this.getNumberAttribute('site_id');
  }
  public set siteId(value: number) {
    this._siteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // ttl_prefer_last_modified - computed: false, optional: true, required: false
  private _ttlPreferLastModified?: boolean | cdktf.IResolvable; 
  public get ttlPreferLastModified() {
    return this.getBooleanAttribute('ttl_prefer_last_modified');
  }
  public set ttlPreferLastModified(value: boolean | cdktf.IResolvable) {
    this._ttlPreferLastModified = value;
  }
  public resetTtlPreferLastModified() {
    this._ttlPreferLastModified = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlPreferLastModifiedInput() {
    return this._ttlPreferLastModified;
  }

  // ttl_use_shortest_caching - computed: false, optional: true, required: false
  private _ttlUseShortestCaching?: boolean | cdktf.IResolvable; 
  public get ttlUseShortestCaching() {
    return this.getBooleanAttribute('ttl_use_shortest_caching');
  }
  public set ttlUseShortestCaching(value: boolean | cdktf.IResolvable) {
    this._ttlUseShortestCaching = value;
  }
  public resetTtlUseShortestCaching() {
    this._ttlUseShortestCaching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlUseShortestCachingInput() {
    return this._ttlUseShortestCaching;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_comply_no_cache: cdktf.booleanToTerraform(this._clientComplyNoCache),
      client_enable_client_side_caching: cdktf.booleanToTerraform(this._clientEnableClientSideCaching),
      client_send_age_header: cdktf.booleanToTerraform(this._clientSendAgeHeader),
      id: cdktf.stringToTerraform(this._id),
      key_comply_vary: cdktf.booleanToTerraform(this._keyComplyVary),
      key_unite_naked_full_cache: cdktf.booleanToTerraform(this._keyUniteNakedFullCache),
      mode_https: cdktf.stringToTerraform(this._modeHttps),
      mode_level: cdktf.stringToTerraform(this._modeLevel),
      mode_time: cdktf.numberToTerraform(this._modeTime),
      response_cache_300x: cdktf.booleanToTerraform(this._responseCache300X),
      response_cache_404_enabled: cdktf.booleanToTerraform(this._responseCache404Enabled),
      response_cache_404_time: cdktf.numberToTerraform(this._responseCache404Time),
      response_cache_empty_responses: cdktf.booleanToTerraform(this._responseCacheEmptyResponses),
      response_cache_http_10_responses: cdktf.booleanToTerraform(this._responseCacheHttp10Responses),
      response_cache_response_header_mode: cdktf.stringToTerraform(this._responseCacheResponseHeaderMode),
      response_cache_response_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._responseCacheResponseHeaders),
      response_cache_shield: cdktf.booleanToTerraform(this._responseCacheShield),
      response_stale_content_mode: cdktf.stringToTerraform(this._responseStaleContentMode),
      response_stale_content_time: cdktf.numberToTerraform(this._responseStaleContentTime),
      response_tag_response_header: cdktf.stringToTerraform(this._responseTagResponseHeader),
      site_id: cdktf.numberToTerraform(this._siteId),
      ttl_prefer_last_modified: cdktf.booleanToTerraform(this._ttlPreferLastModified),
      ttl_use_shortest_caching: cdktf.booleanToTerraform(this._ttlUseShortestCaching),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_comply_no_cache: {
        value: cdktf.booleanToHclTerraform(this._clientComplyNoCache),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      client_enable_client_side_caching: {
        value: cdktf.booleanToHclTerraform(this._clientEnableClientSideCaching),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      client_send_age_header: {
        value: cdktf.booleanToHclTerraform(this._clientSendAgeHeader),
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
      key_comply_vary: {
        value: cdktf.booleanToHclTerraform(this._keyComplyVary),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      key_unite_naked_full_cache: {
        value: cdktf.booleanToHclTerraform(this._keyUniteNakedFullCache),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mode_https: {
        value: cdktf.stringToHclTerraform(this._modeHttps),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode_level: {
        value: cdktf.stringToHclTerraform(this._modeLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode_time: {
        value: cdktf.numberToHclTerraform(this._modeTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      response_cache_300x: {
        value: cdktf.booleanToHclTerraform(this._responseCache300X),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      response_cache_404_enabled: {
        value: cdktf.booleanToHclTerraform(this._responseCache404Enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      response_cache_404_time: {
        value: cdktf.numberToHclTerraform(this._responseCache404Time),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      response_cache_empty_responses: {
        value: cdktf.booleanToHclTerraform(this._responseCacheEmptyResponses),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      response_cache_http_10_responses: {
        value: cdktf.booleanToHclTerraform(this._responseCacheHttp10Responses),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      response_cache_response_header_mode: {
        value: cdktf.stringToHclTerraform(this._responseCacheResponseHeaderMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      response_cache_response_headers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._responseCacheResponseHeaders),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      response_cache_shield: {
        value: cdktf.booleanToHclTerraform(this._responseCacheShield),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      response_stale_content_mode: {
        value: cdktf.stringToHclTerraform(this._responseStaleContentMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      response_stale_content_time: {
        value: cdktf.numberToHclTerraform(this._responseStaleContentTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      response_tag_response_header: {
        value: cdktf.stringToHclTerraform(this._responseTagResponseHeader),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_id: {
        value: cdktf.numberToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ttl_prefer_last_modified: {
        value: cdktf.booleanToHclTerraform(this._ttlPreferLastModified),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ttl_use_shortest_caching: {
        value: cdktf.booleanToHclTerraform(this._ttlUseShortestCaching),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
