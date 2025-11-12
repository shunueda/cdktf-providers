// https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SiteConfig extends cdktf.TerraformMetaArguments {
  /**
  * none | standard | aggressive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site#acceleration_level Site#acceleration_level}
  */
  readonly accelerationLevel?: string;
  /**
  * Numeric identifier of the account to operate on. If not specified, operation will be performed on the account identified by the authentication parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site#account_id Site#account_id}
  */
  readonly accountId?: number;
  /**
  * active or bypass.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site#active Site#active}
  */
  readonly active?: string;
  /**
  * my.approver@email.com (some approver email address).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site#approver Site#approver}
  */
  readonly approver?: string;
  /**
  * The data region to use. Options are `APAC`, `AU`, `EU`, and `US`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site#data_storage_region Site#data_storage_region}
  */
  readonly dataStorageRegion?: string;
  /**
  * Once set to true, this setting is irreversible. Use true to deprecate the resource, preventing any further changes from taking effect. Deleting the resource will not remove the site. Default: false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site#deprecated Site#deprecated}
  */
  readonly deprecated?: boolean | cdktf.IResolvable;
  /**
  * The fully qualified domain name of the site. For example: www.example.com, hello.example.com.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site#domain Site#domain}
  */
  readonly domain: string;
  /**
  * true or empty string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site#domain_redirect_to_full Site#domain_redirect_to_full}
  */
  readonly domainRedirectToFull?: string;
  /**
  * email or html or dns or cname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site#domain_validation Site#domain_validation}
  */
  readonly domainValidation?: string;
  /**
  * If this value is true, manually set the site to support SSL. This option is only available for sites with manually configured IP/CNAME and for specific accounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site#force_ssl Site#force_ssl}
  */
  readonly forceSsl?: string;
  /**
  * Specify the hash salt (masking setting), required if hashing is enabled. Maximum length of 64 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site#hash_salt Site#hash_salt}
  */
  readonly hashSalt?: string;
  /**
  * Specify if hashing (masking setting) should be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site#hashing_enabled Site#hashing_enabled}
  */
  readonly hashingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site#id Site#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * true or empty string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site#ignore_ssl Site#ignore_ssl}
  */
  readonly ignoreSsl?: string;
  /**
  * The log level. Options are `full`, `security`, and `none`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site#log_level Site#log_level}
  */
  readonly logLevel?: string;
  /**
  * Available only for Enterprise Plan customers that purchased the Logs Integration SKU. Numeric identifier of the account that purchased the logs integration SKU and which collects the logs. If not specified, operation will be performed on the account identified by the authentication parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site#logs_account_id Site#logs_account_id}
  */
  readonly logsAccountId?: string;
  /**
  * Use 'true' to add the naked domain SAN to a www site’s SSL certificate. Default value: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site#naked_domain_san Site#naked_domain_san}
  */
  readonly nakedDomainSan?: boolean | cdktf.IResolvable;
  /**
  * Comply with No-Cache and Max-Age directives in client requests. By default, these cache directives are ignored. Resources are dynamically profiled and re-configured to optimize performance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site#perf_client_comply_no_cache Site#perf_client_comply_no_cache}
  */
  readonly perfClientComplyNoCache?: boolean | cdktf.IResolvable;
  /**
  * Cache content on client browsers or applications. When not enabled, content is cached only on the Imperva proxies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site#perf_client_enable_client_side_caching Site#perf_client_enable_client_side_caching}
  */
  readonly perfClientEnableClientSideCaching?: boolean | cdktf.IResolvable;
  /**
  * Send Cache-Control: max-age and Age headers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site#perf_client_send_age_header Site#perf_client_send_age_header}
  */
  readonly perfClientSendAgeHeader?: boolean | cdktf.IResolvable;
  /**
  * Comply with Vary. Cache resources in accordance with the Vary response header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site#perf_key_comply_vary Site#perf_key_comply_vary}
  */
  readonly perfKeyComplyVary?: boolean | cdktf.IResolvable;
  /**
  * Use the Same Cache for Full and Naked Domains. For example, use the same cached resource for www.example.com/a and example.com/a.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site#perf_key_unite_naked_full_cache Site#perf_key_unite_naked_full_cache}
  */
  readonly perfKeyUniteNakedFullCache?: boolean | cdktf.IResolvable;
  /**
  * The resources that are cached over HTTPS, the general level applies. Options are `disabled`, `dont_include_html`, `include_html`, and `include_all_resources`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site#perf_mode_https Site#perf_mode_https}
  */
  readonly perfModeHttps?: string;
  /**
  * Caching level. Options are `disable`, `standard`, `smart`, and `all_resources`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site#perf_mode_level Site#perf_mode_level}
  */
  readonly perfModeLevel?: string;
  /**
  * The time, in seconds, that you set for this option determines how often the cache is refreshed. Relevant for the `include_html` and `include_all_resources` levels only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site#perf_mode_time Site#perf_mode_time}
  */
  readonly perfModeTime?: number;
  /**
  * When this option is checked Imperva will cache 301, 302, 303, 307, and 308 redirect response headers containing the target URI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site#perf_response_cache_300x Site#perf_response_cache_300x}
  */
  readonly perfResponseCache300X?: boolean | cdktf.IResolvable;
  /**
  * Whether or not to cache 404 responses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site#perf_response_cache_404_enabled Site#perf_response_cache_404_enabled}
  */
  readonly perfResponseCache404Enabled?: boolean | cdktf.IResolvable;
  /**
  * The time in seconds to cache 404 responses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site#perf_response_cache_404_time Site#perf_response_cache_404_time}
  */
  readonly perfResponseCache404Time?: number;
  /**
  * Cache responses that don’t have a message body.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site#perf_response_cache_empty_responses Site#perf_response_cache_empty_responses}
  */
  readonly perfResponseCacheEmptyResponses?: boolean | cdktf.IResolvable;
  /**
  * Cache HTTP 1.0 type responses that don’t include the Content-Length header or chunking.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site#perf_response_cache_http_10_responses Site#perf_response_cache_http_10_responses}
  */
  readonly perfResponseCacheHttp10Responses?: boolean | cdktf.IResolvable;
  /**
  * The working mode for caching response headers. Options are `all`, `custom` and `disabled`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site#perf_response_cache_response_header_mode Site#perf_response_cache_response_header_mode}
  */
  readonly perfResponseCacheResponseHeaderMode?: string;
  /**
  * An array of strings representing the response headers to be cached when working in `custom` mode. If empty, no response headers are cached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site#perf_response_cache_response_headers Site#perf_response_cache_response_headers}
  */
  readonly perfResponseCacheResponseHeaders?: string[];
  /**
  * Adds an intermediate cache between other Imperva PoPs and your origin servers to protect your servers from redundant requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site#perf_response_cache_shield Site#perf_response_cache_shield}
  */
  readonly perfResponseCacheShield?: boolean | cdktf.IResolvable;
  /**
  * The working mode for serving stale content. Options are `disabled`, `adaptive`, and `custom`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site#perf_response_stale_content_mode Site#perf_response_stale_content_mode}
  */
  readonly perfResponseStaleContentMode?: string;
  /**
  * The time, in seconds, to serve stale content for when working in `custom` work mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site#perf_response_stale_content_time Site#perf_response_stale_content_time}
  */
  readonly perfResponseStaleContentTime?: number;
  /**
  * Tag the response according to the value of this header. Specify which origin response header contains the cache tags in your resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site#perf_response_tag_response_header Site#perf_response_tag_response_header}
  */
  readonly perfResponseTagResponseHeader?: string;
  /**
  * Prefer 'Last Modified' over eTag. When this option is checked, Imperva prefers using Last Modified values (if available) over eTag values (recommended on multi-server setups).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site#perf_ttl_prefer_last_modified Site#perf_ttl_prefer_last_modified}
  */
  readonly perfTtlPreferLastModified?: boolean | cdktf.IResolvable;
  /**
  * Use shortest caching duration in case of conflicts. By default, the longest duration is used in case of conflict between caching rules or modes. When this option is checked, Imperva uses the shortest duration in case of conflict.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site#perf_ttl_use_shortest_caching Site#perf_ttl_use_shortest_caching}
  */
  readonly perfTtlUseShortestCaching?: boolean | cdktf.IResolvable;
  /**
  * Customer specific identifier for this operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site#ref_id Site#ref_id}
  */
  readonly refId?: string;
  /**
  * true or empty string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site#remove_ssl Site#remove_ssl}
  */
  readonly removeSsl?: string;
  /**
  * Use this option to allow Imperva to detect and add domains that are using the Imperva-provided CNAME (not recommended). One of: true | false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site#restricted_cname_reuse Site#restricted_cname_reuse}
  */
  readonly restrictedCnameReuse?: string;
  /**
  * api.seal_location.bottom_left | api.seal_location.none | api.seal_location.right_bottom | api.seal_location.right | api.seal_location.left | api.seal_location.bottom_right | api.seal_location.bottom.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site#seal_location Site#seal_location}
  */
  readonly sealLocation?: string;
  /**
  * If this value is false, end users will not get emails about the add site process such as DNS instructions and SSL setup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site#send_site_setup_emails Site#send_site_setup_emails}
  */
  readonly sendSiteSetupEmails?: string;
  /**
  * Manually set the web server IP/CNAME.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site#site_ip Site#site_ip}
  */
  readonly siteIp?: string;
  /**
  * Use 'true' to add the wildcard SAN or 'false' to add the full domain SAN to the site’s SSL certificate. Default value: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site#wildcard_san Site#wildcard_san}
  */
  readonly wildcardSan?: boolean | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site#timeouts Site#timeouts}
  */
  readonly timeouts?: SiteTimeouts;
}
export interface SiteTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site#delete Site#delete}
  */
  readonly delete?: string;
}

export function siteTimeoutsToTerraform(struct?: SiteTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function siteTimeoutsToHclTerraform(struct?: SiteTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SiteTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._delete = value.delete;
    }
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site incapsula_site}
*/
export class Site extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "incapsula_site";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Site resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Site to import
  * @param importFromId The id of the existing Site that should be imported. Refer to the {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Site to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "incapsula_site", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site incapsula_site} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SiteConfig
  */
  public constructor(scope: Construct, id: string, config: SiteConfig) {
    super(scope, id, {
      terraformResourceType: 'incapsula_site',
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
    this._accelerationLevel = config.accelerationLevel;
    this._accountId = config.accountId;
    this._active = config.active;
    this._approver = config.approver;
    this._dataStorageRegion = config.dataStorageRegion;
    this._deprecated = config.deprecated;
    this._domain = config.domain;
    this._domainRedirectToFull = config.domainRedirectToFull;
    this._domainValidation = config.domainValidation;
    this._forceSsl = config.forceSsl;
    this._hashSalt = config.hashSalt;
    this._hashingEnabled = config.hashingEnabled;
    this._id = config.id;
    this._ignoreSsl = config.ignoreSsl;
    this._logLevel = config.logLevel;
    this._logsAccountId = config.logsAccountId;
    this._nakedDomainSan = config.nakedDomainSan;
    this._perfClientComplyNoCache = config.perfClientComplyNoCache;
    this._perfClientEnableClientSideCaching = config.perfClientEnableClientSideCaching;
    this._perfClientSendAgeHeader = config.perfClientSendAgeHeader;
    this._perfKeyComplyVary = config.perfKeyComplyVary;
    this._perfKeyUniteNakedFullCache = config.perfKeyUniteNakedFullCache;
    this._perfModeHttps = config.perfModeHttps;
    this._perfModeLevel = config.perfModeLevel;
    this._perfModeTime = config.perfModeTime;
    this._perfResponseCache300X = config.perfResponseCache300X;
    this._perfResponseCache404Enabled = config.perfResponseCache404Enabled;
    this._perfResponseCache404Time = config.perfResponseCache404Time;
    this._perfResponseCacheEmptyResponses = config.perfResponseCacheEmptyResponses;
    this._perfResponseCacheHttp10Responses = config.perfResponseCacheHttp10Responses;
    this._perfResponseCacheResponseHeaderMode = config.perfResponseCacheResponseHeaderMode;
    this._perfResponseCacheResponseHeaders = config.perfResponseCacheResponseHeaders;
    this._perfResponseCacheShield = config.perfResponseCacheShield;
    this._perfResponseStaleContentMode = config.perfResponseStaleContentMode;
    this._perfResponseStaleContentTime = config.perfResponseStaleContentTime;
    this._perfResponseTagResponseHeader = config.perfResponseTagResponseHeader;
    this._perfTtlPreferLastModified = config.perfTtlPreferLastModified;
    this._perfTtlUseShortestCaching = config.perfTtlUseShortestCaching;
    this._refId = config.refId;
    this._removeSsl = config.removeSsl;
    this._restrictedCnameReuse = config.restrictedCnameReuse;
    this._sealLocation = config.sealLocation;
    this._sendSiteSetupEmails = config.sendSiteSetupEmails;
    this._siteIp = config.siteIp;
    this._wildcardSan = config.wildcardSan;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acceleration_level - computed: true, optional: true, required: false
  private _accelerationLevel?: string; 
  public get accelerationLevel() {
    return this.getStringAttribute('acceleration_level');
  }
  public set accelerationLevel(value: string) {
    this._accelerationLevel = value;
  }
  public resetAccelerationLevel() {
    this._accelerationLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accelerationLevelInput() {
    return this._accelerationLevel;
  }

  // account_id - computed: true, optional: true, required: false
  private _accountId?: number; 
  public get accountId() {
    return this.getNumberAttribute('account_id');
  }
  public set accountId(value: number) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // active - computed: true, optional: true, required: false
  private _active?: string; 
  public get active() {
    return this.getStringAttribute('active');
  }
  public set active(value: string) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // approver - computed: false, optional: true, required: false
  private _approver?: string; 
  public get approver() {
    return this.getStringAttribute('approver');
  }
  public set approver(value: string) {
    this._approver = value;
  }
  public resetApprover() {
    this._approver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approverInput() {
    return this._approver;
  }

  // data_storage_region - computed: true, optional: true, required: false
  private _dataStorageRegion?: string; 
  public get dataStorageRegion() {
    return this.getStringAttribute('data_storage_region');
  }
  public set dataStorageRegion(value: string) {
    this._dataStorageRegion = value;
  }
  public resetDataStorageRegion() {
    this._dataStorageRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStorageRegionInput() {
    return this._dataStorageRegion;
  }

  // deprecated - computed: false, optional: true, required: false
  private _deprecated?: boolean | cdktf.IResolvable; 
  public get deprecated() {
    return this.getBooleanAttribute('deprecated');
  }
  public set deprecated(value: boolean | cdktf.IResolvable) {
    this._deprecated = value;
  }
  public resetDeprecated() {
    this._deprecated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deprecatedInput() {
    return this._deprecated;
  }

  // dns_a_record_name - computed: true, optional: false, required: false
  public get dnsARecordName() {
    return this.getStringAttribute('dns_a_record_name');
  }

  // dns_a_record_value - computed: true, optional: false, required: false
  public get dnsARecordValue() {
    return this.getListAttribute('dns_a_record_value');
  }

  // dns_cname_record_name - computed: true, optional: false, required: false
  public get dnsCnameRecordName() {
    return this.getStringAttribute('dns_cname_record_name');
  }

  // dns_cname_record_value - computed: true, optional: false, required: false
  public get dnsCnameRecordValue() {
    return this.getStringAttribute('dns_cname_record_value');
  }

  // dns_record_name - computed: true, optional: false, required: false
  public get dnsRecordName() {
    return this.getStringAttribute('dns_record_name');
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

  // domain_redirect_to_full - computed: false, optional: true, required: false
  private _domainRedirectToFull?: string; 
  public get domainRedirectToFull() {
    return this.getStringAttribute('domain_redirect_to_full');
  }
  public set domainRedirectToFull(value: string) {
    this._domainRedirectToFull = value;
  }
  public resetDomainRedirectToFull() {
    this._domainRedirectToFull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainRedirectToFullInput() {
    return this._domainRedirectToFull;
  }

  // domain_validation - computed: false, optional: true, required: false
  private _domainValidation?: string; 
  public get domainValidation() {
    return this.getStringAttribute('domain_validation');
  }
  public set domainValidation(value: string) {
    this._domainValidation = value;
  }
  public resetDomainValidation() {
    this._domainValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainValidationInput() {
    return this._domainValidation;
  }

  // domain_verification - computed: true, optional: false, required: false
  public get domainVerification() {
    return this.getStringAttribute('domain_verification');
  }

  // force_ssl - computed: false, optional: true, required: false
  private _forceSsl?: string; 
  public get forceSsl() {
    return this.getStringAttribute('force_ssl');
  }
  public set forceSsl(value: string) {
    this._forceSsl = value;
  }
  public resetForceSsl() {
    this._forceSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceSslInput() {
    return this._forceSsl;
  }

  // hash_salt - computed: true, optional: true, required: false
  private _hashSalt?: string; 
  public get hashSalt() {
    return this.getStringAttribute('hash_salt');
  }
  public set hashSalt(value: string) {
    this._hashSalt = value;
  }
  public resetHashSalt() {
    this._hashSalt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashSaltInput() {
    return this._hashSalt;
  }

  // hashing_enabled - computed: true, optional: true, required: false
  private _hashingEnabled?: boolean | cdktf.IResolvable; 
  public get hashingEnabled() {
    return this.getBooleanAttribute('hashing_enabled');
  }
  public set hashingEnabled(value: boolean | cdktf.IResolvable) {
    this._hashingEnabled = value;
  }
  public resetHashingEnabled() {
    this._hashingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashingEnabledInput() {
    return this._hashingEnabled;
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

  // ignore_ssl - computed: false, optional: true, required: false
  private _ignoreSsl?: string; 
  public get ignoreSsl() {
    return this.getStringAttribute('ignore_ssl');
  }
  public set ignoreSsl(value: string) {
    this._ignoreSsl = value;
  }
  public resetIgnoreSsl() {
    this._ignoreSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreSslInput() {
    return this._ignoreSsl;
  }

  // log_level - computed: true, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // logs_account_id - computed: false, optional: true, required: false
  private _logsAccountId?: string; 
  public get logsAccountId() {
    return this.getStringAttribute('logs_account_id');
  }
  public set logsAccountId(value: string) {
    this._logsAccountId = value;
  }
  public resetLogsAccountId() {
    this._logsAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsAccountIdInput() {
    return this._logsAccountId;
  }

  // naked_domain_san - computed: false, optional: true, required: false
  private _nakedDomainSan?: boolean | cdktf.IResolvable; 
  public get nakedDomainSan() {
    return this.getBooleanAttribute('naked_domain_san');
  }
  public set nakedDomainSan(value: boolean | cdktf.IResolvable) {
    this._nakedDomainSan = value;
  }
  public resetNakedDomainSan() {
    this._nakedDomainSan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nakedDomainSanInput() {
    return this._nakedDomainSan;
  }

  // original_data_center_id - computed: true, optional: false, required: false
  public get originalDataCenterId() {
    return this.getNumberAttribute('original_data_center_id');
  }

  // perf_client_comply_no_cache - computed: true, optional: true, required: false
  private _perfClientComplyNoCache?: boolean | cdktf.IResolvable; 
  public get perfClientComplyNoCache() {
    return this.getBooleanAttribute('perf_client_comply_no_cache');
  }
  public set perfClientComplyNoCache(value: boolean | cdktf.IResolvable) {
    this._perfClientComplyNoCache = value;
  }
  public resetPerfClientComplyNoCache() {
    this._perfClientComplyNoCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perfClientComplyNoCacheInput() {
    return this._perfClientComplyNoCache;
  }

  // perf_client_enable_client_side_caching - computed: true, optional: true, required: false
  private _perfClientEnableClientSideCaching?: boolean | cdktf.IResolvable; 
  public get perfClientEnableClientSideCaching() {
    return this.getBooleanAttribute('perf_client_enable_client_side_caching');
  }
  public set perfClientEnableClientSideCaching(value: boolean | cdktf.IResolvable) {
    this._perfClientEnableClientSideCaching = value;
  }
  public resetPerfClientEnableClientSideCaching() {
    this._perfClientEnableClientSideCaching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perfClientEnableClientSideCachingInput() {
    return this._perfClientEnableClientSideCaching;
  }

  // perf_client_send_age_header - computed: true, optional: true, required: false
  private _perfClientSendAgeHeader?: boolean | cdktf.IResolvable; 
  public get perfClientSendAgeHeader() {
    return this.getBooleanAttribute('perf_client_send_age_header');
  }
  public set perfClientSendAgeHeader(value: boolean | cdktf.IResolvable) {
    this._perfClientSendAgeHeader = value;
  }
  public resetPerfClientSendAgeHeader() {
    this._perfClientSendAgeHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perfClientSendAgeHeaderInput() {
    return this._perfClientSendAgeHeader;
  }

  // perf_key_comply_vary - computed: true, optional: true, required: false
  private _perfKeyComplyVary?: boolean | cdktf.IResolvable; 
  public get perfKeyComplyVary() {
    return this.getBooleanAttribute('perf_key_comply_vary');
  }
  public set perfKeyComplyVary(value: boolean | cdktf.IResolvable) {
    this._perfKeyComplyVary = value;
  }
  public resetPerfKeyComplyVary() {
    this._perfKeyComplyVary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perfKeyComplyVaryInput() {
    return this._perfKeyComplyVary;
  }

  // perf_key_unite_naked_full_cache - computed: true, optional: true, required: false
  private _perfKeyUniteNakedFullCache?: boolean | cdktf.IResolvable; 
  public get perfKeyUniteNakedFullCache() {
    return this.getBooleanAttribute('perf_key_unite_naked_full_cache');
  }
  public set perfKeyUniteNakedFullCache(value: boolean | cdktf.IResolvable) {
    this._perfKeyUniteNakedFullCache = value;
  }
  public resetPerfKeyUniteNakedFullCache() {
    this._perfKeyUniteNakedFullCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perfKeyUniteNakedFullCacheInput() {
    return this._perfKeyUniteNakedFullCache;
  }

  // perf_mode_https - computed: true, optional: true, required: false
  private _perfModeHttps?: string; 
  public get perfModeHttps() {
    return this.getStringAttribute('perf_mode_https');
  }
  public set perfModeHttps(value: string) {
    this._perfModeHttps = value;
  }
  public resetPerfModeHttps() {
    this._perfModeHttps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perfModeHttpsInput() {
    return this._perfModeHttps;
  }

  // perf_mode_level - computed: true, optional: true, required: false
  private _perfModeLevel?: string; 
  public get perfModeLevel() {
    return this.getStringAttribute('perf_mode_level');
  }
  public set perfModeLevel(value: string) {
    this._perfModeLevel = value;
  }
  public resetPerfModeLevel() {
    this._perfModeLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perfModeLevelInput() {
    return this._perfModeLevel;
  }

  // perf_mode_time - computed: true, optional: true, required: false
  private _perfModeTime?: number; 
  public get perfModeTime() {
    return this.getNumberAttribute('perf_mode_time');
  }
  public set perfModeTime(value: number) {
    this._perfModeTime = value;
  }
  public resetPerfModeTime() {
    this._perfModeTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perfModeTimeInput() {
    return this._perfModeTime;
  }

  // perf_response_cache_300x - computed: true, optional: true, required: false
  private _perfResponseCache300X?: boolean | cdktf.IResolvable; 
  public get perfResponseCache300X() {
    return this.getBooleanAttribute('perf_response_cache_300x');
  }
  public set perfResponseCache300X(value: boolean | cdktf.IResolvable) {
    this._perfResponseCache300X = value;
  }
  public resetPerfResponseCache300X() {
    this._perfResponseCache300X = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perfResponseCache300XInput() {
    return this._perfResponseCache300X;
  }

  // perf_response_cache_404_enabled - computed: true, optional: true, required: false
  private _perfResponseCache404Enabled?: boolean | cdktf.IResolvable; 
  public get perfResponseCache404Enabled() {
    return this.getBooleanAttribute('perf_response_cache_404_enabled');
  }
  public set perfResponseCache404Enabled(value: boolean | cdktf.IResolvable) {
    this._perfResponseCache404Enabled = value;
  }
  public resetPerfResponseCache404Enabled() {
    this._perfResponseCache404Enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perfResponseCache404EnabledInput() {
    return this._perfResponseCache404Enabled;
  }

  // perf_response_cache_404_time - computed: true, optional: true, required: false
  private _perfResponseCache404Time?: number; 
  public get perfResponseCache404Time() {
    return this.getNumberAttribute('perf_response_cache_404_time');
  }
  public set perfResponseCache404Time(value: number) {
    this._perfResponseCache404Time = value;
  }
  public resetPerfResponseCache404Time() {
    this._perfResponseCache404Time = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perfResponseCache404TimeInput() {
    return this._perfResponseCache404Time;
  }

  // perf_response_cache_empty_responses - computed: true, optional: true, required: false
  private _perfResponseCacheEmptyResponses?: boolean | cdktf.IResolvable; 
  public get perfResponseCacheEmptyResponses() {
    return this.getBooleanAttribute('perf_response_cache_empty_responses');
  }
  public set perfResponseCacheEmptyResponses(value: boolean | cdktf.IResolvable) {
    this._perfResponseCacheEmptyResponses = value;
  }
  public resetPerfResponseCacheEmptyResponses() {
    this._perfResponseCacheEmptyResponses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perfResponseCacheEmptyResponsesInput() {
    return this._perfResponseCacheEmptyResponses;
  }

  // perf_response_cache_http_10_responses - computed: true, optional: true, required: false
  private _perfResponseCacheHttp10Responses?: boolean | cdktf.IResolvable; 
  public get perfResponseCacheHttp10Responses() {
    return this.getBooleanAttribute('perf_response_cache_http_10_responses');
  }
  public set perfResponseCacheHttp10Responses(value: boolean | cdktf.IResolvable) {
    this._perfResponseCacheHttp10Responses = value;
  }
  public resetPerfResponseCacheHttp10Responses() {
    this._perfResponseCacheHttp10Responses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perfResponseCacheHttp10ResponsesInput() {
    return this._perfResponseCacheHttp10Responses;
  }

  // perf_response_cache_response_header_mode - computed: true, optional: true, required: false
  private _perfResponseCacheResponseHeaderMode?: string; 
  public get perfResponseCacheResponseHeaderMode() {
    return this.getStringAttribute('perf_response_cache_response_header_mode');
  }
  public set perfResponseCacheResponseHeaderMode(value: string) {
    this._perfResponseCacheResponseHeaderMode = value;
  }
  public resetPerfResponseCacheResponseHeaderMode() {
    this._perfResponseCacheResponseHeaderMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perfResponseCacheResponseHeaderModeInput() {
    return this._perfResponseCacheResponseHeaderMode;
  }

  // perf_response_cache_response_headers - computed: true, optional: true, required: false
  private _perfResponseCacheResponseHeaders?: string[]; 
  public get perfResponseCacheResponseHeaders() {
    return this.getListAttribute('perf_response_cache_response_headers');
  }
  public set perfResponseCacheResponseHeaders(value: string[]) {
    this._perfResponseCacheResponseHeaders = value;
  }
  public resetPerfResponseCacheResponseHeaders() {
    this._perfResponseCacheResponseHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perfResponseCacheResponseHeadersInput() {
    return this._perfResponseCacheResponseHeaders;
  }

  // perf_response_cache_shield - computed: true, optional: true, required: false
  private _perfResponseCacheShield?: boolean | cdktf.IResolvable; 
  public get perfResponseCacheShield() {
    return this.getBooleanAttribute('perf_response_cache_shield');
  }
  public set perfResponseCacheShield(value: boolean | cdktf.IResolvable) {
    this._perfResponseCacheShield = value;
  }
  public resetPerfResponseCacheShield() {
    this._perfResponseCacheShield = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perfResponseCacheShieldInput() {
    return this._perfResponseCacheShield;
  }

  // perf_response_stale_content_mode - computed: true, optional: true, required: false
  private _perfResponseStaleContentMode?: string; 
  public get perfResponseStaleContentMode() {
    return this.getStringAttribute('perf_response_stale_content_mode');
  }
  public set perfResponseStaleContentMode(value: string) {
    this._perfResponseStaleContentMode = value;
  }
  public resetPerfResponseStaleContentMode() {
    this._perfResponseStaleContentMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perfResponseStaleContentModeInput() {
    return this._perfResponseStaleContentMode;
  }

  // perf_response_stale_content_time - computed: true, optional: true, required: false
  private _perfResponseStaleContentTime?: number; 
  public get perfResponseStaleContentTime() {
    return this.getNumberAttribute('perf_response_stale_content_time');
  }
  public set perfResponseStaleContentTime(value: number) {
    this._perfResponseStaleContentTime = value;
  }
  public resetPerfResponseStaleContentTime() {
    this._perfResponseStaleContentTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perfResponseStaleContentTimeInput() {
    return this._perfResponseStaleContentTime;
  }

  // perf_response_tag_response_header - computed: true, optional: true, required: false
  private _perfResponseTagResponseHeader?: string; 
  public get perfResponseTagResponseHeader() {
    return this.getStringAttribute('perf_response_tag_response_header');
  }
  public set perfResponseTagResponseHeader(value: string) {
    this._perfResponseTagResponseHeader = value;
  }
  public resetPerfResponseTagResponseHeader() {
    this._perfResponseTagResponseHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perfResponseTagResponseHeaderInput() {
    return this._perfResponseTagResponseHeader;
  }

  // perf_ttl_prefer_last_modified - computed: true, optional: true, required: false
  private _perfTtlPreferLastModified?: boolean | cdktf.IResolvable; 
  public get perfTtlPreferLastModified() {
    return this.getBooleanAttribute('perf_ttl_prefer_last_modified');
  }
  public set perfTtlPreferLastModified(value: boolean | cdktf.IResolvable) {
    this._perfTtlPreferLastModified = value;
  }
  public resetPerfTtlPreferLastModified() {
    this._perfTtlPreferLastModified = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perfTtlPreferLastModifiedInput() {
    return this._perfTtlPreferLastModified;
  }

  // perf_ttl_use_shortest_caching - computed: true, optional: true, required: false
  private _perfTtlUseShortestCaching?: boolean | cdktf.IResolvable; 
  public get perfTtlUseShortestCaching() {
    return this.getBooleanAttribute('perf_ttl_use_shortest_caching');
  }
  public set perfTtlUseShortestCaching(value: boolean | cdktf.IResolvable) {
    this._perfTtlUseShortestCaching = value;
  }
  public resetPerfTtlUseShortestCaching() {
    this._perfTtlUseShortestCaching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perfTtlUseShortestCachingInput() {
    return this._perfTtlUseShortestCaching;
  }

  // ref_id - computed: false, optional: true, required: false
  private _refId?: string; 
  public get refId() {
    return this.getStringAttribute('ref_id');
  }
  public set refId(value: string) {
    this._refId = value;
  }
  public resetRefId() {
    this._refId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refIdInput() {
    return this._refId;
  }

  // remove_ssl - computed: false, optional: true, required: false
  private _removeSsl?: string; 
  public get removeSsl() {
    return this.getStringAttribute('remove_ssl');
  }
  public set removeSsl(value: string) {
    this._removeSsl = value;
  }
  public resetRemoveSsl() {
    this._removeSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeSslInput() {
    return this._removeSsl;
  }

  // restricted_cname_reuse - computed: true, optional: true, required: false
  private _restrictedCnameReuse?: string; 
  public get restrictedCnameReuse() {
    return this.getStringAttribute('restricted_cname_reuse');
  }
  public set restrictedCnameReuse(value: string) {
    this._restrictedCnameReuse = value;
  }
  public resetRestrictedCnameReuse() {
    this._restrictedCnameReuse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedCnameReuseInput() {
    return this._restrictedCnameReuse;
  }

  // seal_location - computed: true, optional: true, required: false
  private _sealLocation?: string; 
  public get sealLocation() {
    return this.getStringAttribute('seal_location');
  }
  public set sealLocation(value: string) {
    this._sealLocation = value;
  }
  public resetSealLocation() {
    this._sealLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sealLocationInput() {
    return this._sealLocation;
  }

  // send_site_setup_emails - computed: false, optional: true, required: false
  private _sendSiteSetupEmails?: string; 
  public get sendSiteSetupEmails() {
    return this.getStringAttribute('send_site_setup_emails');
  }
  public set sendSiteSetupEmails(value: string) {
    this._sendSiteSetupEmails = value;
  }
  public resetSendSiteSetupEmails() {
    this._sendSiteSetupEmails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendSiteSetupEmailsInput() {
    return this._sendSiteSetupEmails;
  }

  // site_creation_date - computed: true, optional: false, required: false
  public get siteCreationDate() {
    return this.getNumberAttribute('site_creation_date');
  }

  // site_ip - computed: true, optional: true, required: false
  private _siteIp?: string; 
  public get siteIp() {
    return this.getStringAttribute('site_ip');
  }
  public set siteIp(value: string) {
    this._siteIp = value;
  }
  public resetSiteIp() {
    this._siteIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIpInput() {
    return this._siteIp;
  }

  // wildcard_san - computed: false, optional: true, required: false
  private _wildcardSan?: boolean | cdktf.IResolvable; 
  public get wildcardSan() {
    return this.getBooleanAttribute('wildcard_san');
  }
  public set wildcardSan(value: boolean | cdktf.IResolvable) {
    this._wildcardSan = value;
  }
  public resetWildcardSan() {
    this._wildcardSan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wildcardSanInput() {
    return this._wildcardSan;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SiteTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SiteTimeouts) {
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
      acceleration_level: cdktf.stringToTerraform(this._accelerationLevel),
      account_id: cdktf.numberToTerraform(this._accountId),
      active: cdktf.stringToTerraform(this._active),
      approver: cdktf.stringToTerraform(this._approver),
      data_storage_region: cdktf.stringToTerraform(this._dataStorageRegion),
      deprecated: cdktf.booleanToTerraform(this._deprecated),
      domain: cdktf.stringToTerraform(this._domain),
      domain_redirect_to_full: cdktf.stringToTerraform(this._domainRedirectToFull),
      domain_validation: cdktf.stringToTerraform(this._domainValidation),
      force_ssl: cdktf.stringToTerraform(this._forceSsl),
      hash_salt: cdktf.stringToTerraform(this._hashSalt),
      hashing_enabled: cdktf.booleanToTerraform(this._hashingEnabled),
      id: cdktf.stringToTerraform(this._id),
      ignore_ssl: cdktf.stringToTerraform(this._ignoreSsl),
      log_level: cdktf.stringToTerraform(this._logLevel),
      logs_account_id: cdktf.stringToTerraform(this._logsAccountId),
      naked_domain_san: cdktf.booleanToTerraform(this._nakedDomainSan),
      perf_client_comply_no_cache: cdktf.booleanToTerraform(this._perfClientComplyNoCache),
      perf_client_enable_client_side_caching: cdktf.booleanToTerraform(this._perfClientEnableClientSideCaching),
      perf_client_send_age_header: cdktf.booleanToTerraform(this._perfClientSendAgeHeader),
      perf_key_comply_vary: cdktf.booleanToTerraform(this._perfKeyComplyVary),
      perf_key_unite_naked_full_cache: cdktf.booleanToTerraform(this._perfKeyUniteNakedFullCache),
      perf_mode_https: cdktf.stringToTerraform(this._perfModeHttps),
      perf_mode_level: cdktf.stringToTerraform(this._perfModeLevel),
      perf_mode_time: cdktf.numberToTerraform(this._perfModeTime),
      perf_response_cache_300x: cdktf.booleanToTerraform(this._perfResponseCache300X),
      perf_response_cache_404_enabled: cdktf.booleanToTerraform(this._perfResponseCache404Enabled),
      perf_response_cache_404_time: cdktf.numberToTerraform(this._perfResponseCache404Time),
      perf_response_cache_empty_responses: cdktf.booleanToTerraform(this._perfResponseCacheEmptyResponses),
      perf_response_cache_http_10_responses: cdktf.booleanToTerraform(this._perfResponseCacheHttp10Responses),
      perf_response_cache_response_header_mode: cdktf.stringToTerraform(this._perfResponseCacheResponseHeaderMode),
      perf_response_cache_response_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._perfResponseCacheResponseHeaders),
      perf_response_cache_shield: cdktf.booleanToTerraform(this._perfResponseCacheShield),
      perf_response_stale_content_mode: cdktf.stringToTerraform(this._perfResponseStaleContentMode),
      perf_response_stale_content_time: cdktf.numberToTerraform(this._perfResponseStaleContentTime),
      perf_response_tag_response_header: cdktf.stringToTerraform(this._perfResponseTagResponseHeader),
      perf_ttl_prefer_last_modified: cdktf.booleanToTerraform(this._perfTtlPreferLastModified),
      perf_ttl_use_shortest_caching: cdktf.booleanToTerraform(this._perfTtlUseShortestCaching),
      ref_id: cdktf.stringToTerraform(this._refId),
      remove_ssl: cdktf.stringToTerraform(this._removeSsl),
      restricted_cname_reuse: cdktf.stringToTerraform(this._restrictedCnameReuse),
      seal_location: cdktf.stringToTerraform(this._sealLocation),
      send_site_setup_emails: cdktf.stringToTerraform(this._sendSiteSetupEmails),
      site_ip: cdktf.stringToTerraform(this._siteIp),
      wildcard_san: cdktf.booleanToTerraform(this._wildcardSan),
      timeouts: siteTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acceleration_level: {
        value: cdktf.stringToHclTerraform(this._accelerationLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_id: {
        value: cdktf.numberToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      active: {
        value: cdktf.stringToHclTerraform(this._active),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      approver: {
        value: cdktf.stringToHclTerraform(this._approver),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_storage_region: {
        value: cdktf.stringToHclTerraform(this._dataStorageRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deprecated: {
        value: cdktf.booleanToHclTerraform(this._deprecated),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_redirect_to_full: {
        value: cdktf.stringToHclTerraform(this._domainRedirectToFull),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_validation: {
        value: cdktf.stringToHclTerraform(this._domainValidation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_ssl: {
        value: cdktf.stringToHclTerraform(this._forceSsl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hash_salt: {
        value: cdktf.stringToHclTerraform(this._hashSalt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hashing_enabled: {
        value: cdktf.booleanToHclTerraform(this._hashingEnabled),
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
      ignore_ssl: {
        value: cdktf.stringToHclTerraform(this._ignoreSsl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_level: {
        value: cdktf.stringToHclTerraform(this._logLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logs_account_id: {
        value: cdktf.stringToHclTerraform(this._logsAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      naked_domain_san: {
        value: cdktf.booleanToHclTerraform(this._nakedDomainSan),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      perf_client_comply_no_cache: {
        value: cdktf.booleanToHclTerraform(this._perfClientComplyNoCache),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      perf_client_enable_client_side_caching: {
        value: cdktf.booleanToHclTerraform(this._perfClientEnableClientSideCaching),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      perf_client_send_age_header: {
        value: cdktf.booleanToHclTerraform(this._perfClientSendAgeHeader),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      perf_key_comply_vary: {
        value: cdktf.booleanToHclTerraform(this._perfKeyComplyVary),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      perf_key_unite_naked_full_cache: {
        value: cdktf.booleanToHclTerraform(this._perfKeyUniteNakedFullCache),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      perf_mode_https: {
        value: cdktf.stringToHclTerraform(this._perfModeHttps),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      perf_mode_level: {
        value: cdktf.stringToHclTerraform(this._perfModeLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      perf_mode_time: {
        value: cdktf.numberToHclTerraform(this._perfModeTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      perf_response_cache_300x: {
        value: cdktf.booleanToHclTerraform(this._perfResponseCache300X),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      perf_response_cache_404_enabled: {
        value: cdktf.booleanToHclTerraform(this._perfResponseCache404Enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      perf_response_cache_404_time: {
        value: cdktf.numberToHclTerraform(this._perfResponseCache404Time),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      perf_response_cache_empty_responses: {
        value: cdktf.booleanToHclTerraform(this._perfResponseCacheEmptyResponses),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      perf_response_cache_http_10_responses: {
        value: cdktf.booleanToHclTerraform(this._perfResponseCacheHttp10Responses),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      perf_response_cache_response_header_mode: {
        value: cdktf.stringToHclTerraform(this._perfResponseCacheResponseHeaderMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      perf_response_cache_response_headers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._perfResponseCacheResponseHeaders),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      perf_response_cache_shield: {
        value: cdktf.booleanToHclTerraform(this._perfResponseCacheShield),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      perf_response_stale_content_mode: {
        value: cdktf.stringToHclTerraform(this._perfResponseStaleContentMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      perf_response_stale_content_time: {
        value: cdktf.numberToHclTerraform(this._perfResponseStaleContentTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      perf_response_tag_response_header: {
        value: cdktf.stringToHclTerraform(this._perfResponseTagResponseHeader),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      perf_ttl_prefer_last_modified: {
        value: cdktf.booleanToHclTerraform(this._perfTtlPreferLastModified),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      perf_ttl_use_shortest_caching: {
        value: cdktf.booleanToHclTerraform(this._perfTtlUseShortestCaching),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ref_id: {
        value: cdktf.stringToHclTerraform(this._refId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remove_ssl: {
        value: cdktf.stringToHclTerraform(this._removeSsl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      restricted_cname_reuse: {
        value: cdktf.stringToHclTerraform(this._restrictedCnameReuse),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      seal_location: {
        value: cdktf.stringToHclTerraform(this._sealLocation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      send_site_setup_emails: {
        value: cdktf.stringToHclTerraform(this._sendSiteSetupEmails),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_ip: {
        value: cdktf.stringToHclTerraform(this._siteIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wildcard_san: {
        value: cdktf.booleanToHclTerraform(this._wildcardSan),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timeouts: {
        value: siteTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SiteTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
