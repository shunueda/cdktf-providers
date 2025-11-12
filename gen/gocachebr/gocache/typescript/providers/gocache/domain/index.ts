// https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/domain#cache_301 Domain#cache_301}
  */
  readonly cache301?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/domain#cache_302 Domain#cache_302}
  */
  readonly cache302?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/domain#cache_404 Domain#cache_404}
  */
  readonly cache404?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/domain#cache_ttl Domain#cache_ttl}
  */
  readonly cacheTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/domain#caching_behavior Domain#caching_behavior}
  */
  readonly cachingBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/domain#deploy_mode Domain#deploy_mode}
  */
  readonly deployMode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/domain#dns_mode Domain#dns_mode}
  */
  readonly dnsMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/domain#domain Domain#domain}
  */
  readonly domain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/domain#expire_bypass_sec Domain#expire_bypass_sec}
  */
  readonly expireBypassSec?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/domain#expires_ttl Domain#expires_ttl}
  */
  readonly expiresTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/domain#gzip_status Domain#gzip_status}
  */
  readonly gzipStatus?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/domain#header_device_type Domain#header_device_type}
  */
  readonly headerDeviceType?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/domain#header_geoip_continent Domain#header_geoip_continent}
  */
  readonly headerGeoipContinent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/domain#header_geoip_country Domain#header_geoip_country}
  */
  readonly headerGeoipCountry?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/domain#header_geoip_org Domain#header_geoip_org}
  */
  readonly headerGeoipOrg?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/domain#id Domain#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/domain#ignore_cache_control Domain#ignore_cache_control}
  */
  readonly ignoreCacheControl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/domain#ignore_expires Domain#ignore_expires}
  */
  readonly ignoreExpires?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/domain#ignore_vary Domain#ignore_vary}
  */
  readonly ignoreVary?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/domain#image_optimize Domain#image_optimize}
  */
  readonly imageOptimize?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/domain#image_optimize_level Domain#image_optimize_level}
  */
  readonly imageOptimizeLevel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/domain#image_optimize_metadata Domain#image_optimize_metadata}
  */
  readonly imageOptimizeMetadata?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/domain#image_optimize_progressive Domain#image_optimize_progressive}
  */
  readonly imageOptimizeProgressive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/domain#image_optimize_webp Domain#image_optimize_webp}
  */
  readonly imageOptimizeWebp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/domain#last_updated Domain#last_updated}
  */
  readonly lastUpdated?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/domain#log_freq Domain#log_freq}
  */
  readonly logFreq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/domain#public_log Domain#public_log}
  */
  readonly publicLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/domain#rate_limit_ignore_good_bots Domain#rate_limit_ignore_good_bots}
  */
  readonly rateLimitIgnoreGoodBots?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/domain#rate_limit_ignore_static_content Domain#rate_limit_ignore_static_content}
  */
  readonly rateLimitIgnoreStaticContent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/domain#rate_limit_status Domain#rate_limit_status}
  */
  readonly rateLimitStatus?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/domain#smart_cache_status Domain#smart_cache_status}
  */
  readonly smartCacheStatus?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/domain#smart_cache_template Domain#smart_cache_template}
  */
  readonly smartCacheTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/domain#smart_cache_ttl Domain#smart_cache_ttl}
  */
  readonly smartCacheTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/domain#ssl_mode Domain#ssl_mode}
  */
  readonly sslMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/domain#tls10 Domain#tls10}
  */
  readonly tls10?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/domain#tls11 Domain#tls11}
  */
  readonly tls11?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/domain#tls12 Domain#tls12}
  */
  readonly tls12?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/domain#waf_level Domain#waf_level}
  */
  readonly wafLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/domain#waf_mode Domain#waf_mode}
  */
  readonly wafMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/domain#waf_status Domain#waf_status}
  */
  readonly wafStatus?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/domain gocache_domain}
*/
export class Domain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gocache_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Domain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Domain to import
  * @param importFromId The id of the existing Domain that should be imported. Refer to the {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Domain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gocache_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/domain gocache_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DomainConfig
  */
  public constructor(scope: Construct, id: string, config: DomainConfig) {
    super(scope, id, {
      terraformResourceType: 'gocache_domain',
      terraformGeneratorMetadata: {
        providerName: 'gocache',
        providerVersion: '0.3.2',
        providerVersionConstraint: '0.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cache301 = config.cache301;
    this._cache302 = config.cache302;
    this._cache404 = config.cache404;
    this._cacheTtl = config.cacheTtl;
    this._cachingBehavior = config.cachingBehavior;
    this._deployMode = config.deployMode;
    this._dnsMode = config.dnsMode;
    this._domain = config.domain;
    this._expireBypassSec = config.expireBypassSec;
    this._expiresTtl = config.expiresTtl;
    this._gzipStatus = config.gzipStatus;
    this._headerDeviceType = config.headerDeviceType;
    this._headerGeoipContinent = config.headerGeoipContinent;
    this._headerGeoipCountry = config.headerGeoipCountry;
    this._headerGeoipOrg = config.headerGeoipOrg;
    this._id = config.id;
    this._ignoreCacheControl = config.ignoreCacheControl;
    this._ignoreExpires = config.ignoreExpires;
    this._ignoreVary = config.ignoreVary;
    this._imageOptimize = config.imageOptimize;
    this._imageOptimizeLevel = config.imageOptimizeLevel;
    this._imageOptimizeMetadata = config.imageOptimizeMetadata;
    this._imageOptimizeProgressive = config.imageOptimizeProgressive;
    this._imageOptimizeWebp = config.imageOptimizeWebp;
    this._lastUpdated = config.lastUpdated;
    this._logFreq = config.logFreq;
    this._publicLog = config.publicLog;
    this._rateLimitIgnoreGoodBots = config.rateLimitIgnoreGoodBots;
    this._rateLimitIgnoreStaticContent = config.rateLimitIgnoreStaticContent;
    this._rateLimitStatus = config.rateLimitStatus;
    this._smartCacheStatus = config.smartCacheStatus;
    this._smartCacheTemplate = config.smartCacheTemplate;
    this._smartCacheTtl = config.smartCacheTtl;
    this._sslMode = config.sslMode;
    this._tls10 = config.tls10;
    this._tls11 = config.tls11;
    this._tls12 = config.tls12;
    this._wafLevel = config.wafLevel;
    this._wafMode = config.wafMode;
    this._wafStatus = config.wafStatus;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cache_301 - computed: false, optional: true, required: false
  private _cache301?: boolean | cdktf.IResolvable; 
  public get cache301() {
    return this.getBooleanAttribute('cache_301');
  }
  public set cache301(value: boolean | cdktf.IResolvable) {
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
  private _cache302?: boolean | cdktf.IResolvable; 
  public get cache302() {
    return this.getBooleanAttribute('cache_302');
  }
  public set cache302(value: boolean | cdktf.IResolvable) {
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
  private _cache404?: boolean | cdktf.IResolvable; 
  public get cache404() {
    return this.getBooleanAttribute('cache_404');
  }
  public set cache404(value: boolean | cdktf.IResolvable) {
    this._cache404 = value;
  }
  public resetCache404() {
    this._cache404 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cache404Input() {
    return this._cache404;
  }

  // cache_ttl - computed: false, optional: true, required: false
  private _cacheTtl?: number; 
  public get cacheTtl() {
    return this.getNumberAttribute('cache_ttl');
  }
  public set cacheTtl(value: number) {
    this._cacheTtl = value;
  }
  public resetCacheTtl() {
    this._cacheTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTtlInput() {
    return this._cacheTtl;
  }

  // caching_behavior - computed: false, optional: true, required: false
  private _cachingBehavior?: string; 
  public get cachingBehavior() {
    return this.getStringAttribute('caching_behavior');
  }
  public set cachingBehavior(value: string) {
    this._cachingBehavior = value;
  }
  public resetCachingBehavior() {
    this._cachingBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachingBehaviorInput() {
    return this._cachingBehavior;
  }

  // deploy_mode - computed: false, optional: true, required: false
  private _deployMode?: boolean | cdktf.IResolvable; 
  public get deployMode() {
    return this.getBooleanAttribute('deploy_mode');
  }
  public set deployMode(value: boolean | cdktf.IResolvable) {
    this._deployMode = value;
  }
  public resetDeployMode() {
    this._deployMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployModeInput() {
    return this._deployMode;
  }

  // dns_mode - computed: false, optional: true, required: false
  private _dnsMode?: string; 
  public get dnsMode() {
    return this.getStringAttribute('dns_mode');
  }
  public set dnsMode(value: string) {
    this._dnsMode = value;
  }
  public resetDnsMode() {
    this._dnsMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsModeInput() {
    return this._dnsMode;
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

  // expire_bypass_sec - computed: false, optional: true, required: false
  private _expireBypassSec?: number; 
  public get expireBypassSec() {
    return this.getNumberAttribute('expire_bypass_sec');
  }
  public set expireBypassSec(value: number) {
    this._expireBypassSec = value;
  }
  public resetExpireBypassSec() {
    this._expireBypassSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expireBypassSecInput() {
    return this._expireBypassSec;
  }

  // expires_ttl - computed: false, optional: true, required: false
  private _expiresTtl?: number; 
  public get expiresTtl() {
    return this.getNumberAttribute('expires_ttl');
  }
  public set expiresTtl(value: number) {
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
  private _gzipStatus?: boolean | cdktf.IResolvable; 
  public get gzipStatus() {
    return this.getBooleanAttribute('gzip_status');
  }
  public set gzipStatus(value: boolean | cdktf.IResolvable) {
    this._gzipStatus = value;
  }
  public resetGzipStatus() {
    this._gzipStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gzipStatusInput() {
    return this._gzipStatus;
  }

  // header_device_type - computed: false, optional: true, required: false
  private _headerDeviceType?: boolean | cdktf.IResolvable; 
  public get headerDeviceType() {
    return this.getBooleanAttribute('header_device_type');
  }
  public set headerDeviceType(value: boolean | cdktf.IResolvable) {
    this._headerDeviceType = value;
  }
  public resetHeaderDeviceType() {
    this._headerDeviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerDeviceTypeInput() {
    return this._headerDeviceType;
  }

  // header_geoip_continent - computed: false, optional: true, required: false
  private _headerGeoipContinent?: boolean | cdktf.IResolvable; 
  public get headerGeoipContinent() {
    return this.getBooleanAttribute('header_geoip_continent');
  }
  public set headerGeoipContinent(value: boolean | cdktf.IResolvable) {
    this._headerGeoipContinent = value;
  }
  public resetHeaderGeoipContinent() {
    this._headerGeoipContinent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerGeoipContinentInput() {
    return this._headerGeoipContinent;
  }

  // header_geoip_country - computed: false, optional: true, required: false
  private _headerGeoipCountry?: boolean | cdktf.IResolvable; 
  public get headerGeoipCountry() {
    return this.getBooleanAttribute('header_geoip_country');
  }
  public set headerGeoipCountry(value: boolean | cdktf.IResolvable) {
    this._headerGeoipCountry = value;
  }
  public resetHeaderGeoipCountry() {
    this._headerGeoipCountry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerGeoipCountryInput() {
    return this._headerGeoipCountry;
  }

  // header_geoip_org - computed: false, optional: true, required: false
  private _headerGeoipOrg?: boolean | cdktf.IResolvable; 
  public get headerGeoipOrg() {
    return this.getBooleanAttribute('header_geoip_org');
  }
  public set headerGeoipOrg(value: boolean | cdktf.IResolvable) {
    this._headerGeoipOrg = value;
  }
  public resetHeaderGeoipOrg() {
    this._headerGeoipOrg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerGeoipOrgInput() {
    return this._headerGeoipOrg;
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

  // ignore_cache_control - computed: false, optional: true, required: false
  private _ignoreCacheControl?: boolean | cdktf.IResolvable; 
  public get ignoreCacheControl() {
    return this.getBooleanAttribute('ignore_cache_control');
  }
  public set ignoreCacheControl(value: boolean | cdktf.IResolvable) {
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
  private _ignoreExpires?: boolean | cdktf.IResolvable; 
  public get ignoreExpires() {
    return this.getBooleanAttribute('ignore_expires');
  }
  public set ignoreExpires(value: boolean | cdktf.IResolvable) {
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
  private _ignoreVary?: boolean | cdktf.IResolvable; 
  public get ignoreVary() {
    return this.getBooleanAttribute('ignore_vary');
  }
  public set ignoreVary(value: boolean | cdktf.IResolvable) {
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
  private _imageOptimize?: boolean | cdktf.IResolvable; 
  public get imageOptimize() {
    return this.getBooleanAttribute('image_optimize');
  }
  public set imageOptimize(value: boolean | cdktf.IResolvable) {
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
  private _imageOptimizeLevel?: number; 
  public get imageOptimizeLevel() {
    return this.getNumberAttribute('image_optimize_level');
  }
  public set imageOptimizeLevel(value: number) {
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
  private _imageOptimizeMetadata?: boolean | cdktf.IResolvable; 
  public get imageOptimizeMetadata() {
    return this.getBooleanAttribute('image_optimize_metadata');
  }
  public set imageOptimizeMetadata(value: boolean | cdktf.IResolvable) {
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
  private _imageOptimizeProgressive?: boolean | cdktf.IResolvable; 
  public get imageOptimizeProgressive() {
    return this.getBooleanAttribute('image_optimize_progressive');
  }
  public set imageOptimizeProgressive(value: boolean | cdktf.IResolvable) {
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
  private _imageOptimizeWebp?: boolean | cdktf.IResolvable; 
  public get imageOptimizeWebp() {
    return this.getBooleanAttribute('image_optimize_webp');
  }
  public set imageOptimizeWebp(value: boolean | cdktf.IResolvable) {
    this._imageOptimizeWebp = value;
  }
  public resetImageOptimizeWebp() {
    this._imageOptimizeWebp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageOptimizeWebpInput() {
    return this._imageOptimizeWebp;
  }

  // last_updated - computed: true, optional: true, required: false
  private _lastUpdated?: string; 
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }
  public set lastUpdated(value: string) {
    this._lastUpdated = value;
  }
  public resetLastUpdated() {
    this._lastUpdated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUpdatedInput() {
    return this._lastUpdated;
  }

  // log_freq - computed: false, optional: true, required: false
  private _logFreq?: number; 
  public get logFreq() {
    return this.getNumberAttribute('log_freq');
  }
  public set logFreq(value: number) {
    this._logFreq = value;
  }
  public resetLogFreq() {
    this._logFreq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFreqInput() {
    return this._logFreq;
  }

  // public_log - computed: false, optional: true, required: false
  private _publicLog?: string; 
  public get publicLog() {
    return this.getStringAttribute('public_log');
  }
  public set publicLog(value: string) {
    this._publicLog = value;
  }
  public resetPublicLog() {
    this._publicLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicLogInput() {
    return this._publicLog;
  }

  // rate_limit_ignore_good_bots - computed: false, optional: true, required: false
  private _rateLimitIgnoreGoodBots?: boolean | cdktf.IResolvable; 
  public get rateLimitIgnoreGoodBots() {
    return this.getBooleanAttribute('rate_limit_ignore_good_bots');
  }
  public set rateLimitIgnoreGoodBots(value: boolean | cdktf.IResolvable) {
    this._rateLimitIgnoreGoodBots = value;
  }
  public resetRateLimitIgnoreGoodBots() {
    this._rateLimitIgnoreGoodBots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitIgnoreGoodBotsInput() {
    return this._rateLimitIgnoreGoodBots;
  }

  // rate_limit_ignore_static_content - computed: false, optional: true, required: false
  private _rateLimitIgnoreStaticContent?: boolean | cdktf.IResolvable; 
  public get rateLimitIgnoreStaticContent() {
    return this.getBooleanAttribute('rate_limit_ignore_static_content');
  }
  public set rateLimitIgnoreStaticContent(value: boolean | cdktf.IResolvable) {
    this._rateLimitIgnoreStaticContent = value;
  }
  public resetRateLimitIgnoreStaticContent() {
    this._rateLimitIgnoreStaticContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitIgnoreStaticContentInput() {
    return this._rateLimitIgnoreStaticContent;
  }

  // rate_limit_status - computed: false, optional: true, required: false
  private _rateLimitStatus?: boolean | cdktf.IResolvable; 
  public get rateLimitStatus() {
    return this.getBooleanAttribute('rate_limit_status');
  }
  public set rateLimitStatus(value: boolean | cdktf.IResolvable) {
    this._rateLimitStatus = value;
  }
  public resetRateLimitStatus() {
    this._rateLimitStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitStatusInput() {
    return this._rateLimitStatus;
  }

  // smart_cache_status - computed: false, optional: true, required: false
  private _smartCacheStatus?: boolean | cdktf.IResolvable; 
  public get smartCacheStatus() {
    return this.getBooleanAttribute('smart_cache_status');
  }
  public set smartCacheStatus(value: boolean | cdktf.IResolvable) {
    this._smartCacheStatus = value;
  }
  public resetSmartCacheStatus() {
    this._smartCacheStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smartCacheStatusInput() {
    return this._smartCacheStatus;
  }

  // smart_cache_template - computed: false, optional: true, required: false
  private _smartCacheTemplate?: string; 
  public get smartCacheTemplate() {
    return this.getStringAttribute('smart_cache_template');
  }
  public set smartCacheTemplate(value: string) {
    this._smartCacheTemplate = value;
  }
  public resetSmartCacheTemplate() {
    this._smartCacheTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smartCacheTemplateInput() {
    return this._smartCacheTemplate;
  }

  // smart_cache_ttl - computed: false, optional: true, required: false
  private _smartCacheTtl?: number; 
  public get smartCacheTtl() {
    return this.getNumberAttribute('smart_cache_ttl');
  }
  public set smartCacheTtl(value: number) {
    this._smartCacheTtl = value;
  }
  public resetSmartCacheTtl() {
    this._smartCacheTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smartCacheTtlInput() {
    return this._smartCacheTtl;
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

  // tls10 - computed: false, optional: true, required: false
  private _tls10?: boolean | cdktf.IResolvable; 
  public get tls10() {
    return this.getBooleanAttribute('tls10');
  }
  public set tls10(value: boolean | cdktf.IResolvable) {
    this._tls10 = value;
  }
  public resetTls10() {
    this._tls10 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls10Input() {
    return this._tls10;
  }

  // tls11 - computed: false, optional: true, required: false
  private _tls11?: boolean | cdktf.IResolvable; 
  public get tls11() {
    return this.getBooleanAttribute('tls11');
  }
  public set tls11(value: boolean | cdktf.IResolvable) {
    this._tls11 = value;
  }
  public resetTls11() {
    this._tls11 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls11Input() {
    return this._tls11;
  }

  // tls12 - computed: false, optional: true, required: false
  private _tls12?: boolean | cdktf.IResolvable; 
  public get tls12() {
    return this.getBooleanAttribute('tls12');
  }
  public set tls12(value: boolean | cdktf.IResolvable) {
    this._tls12 = value;
  }
  public resetTls12() {
    this._tls12 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls12Input() {
    return this._tls12;
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

  // waf_status - computed: false, optional: true, required: false
  private _wafStatus?: boolean | cdktf.IResolvable; 
  public get wafStatus() {
    return this.getBooleanAttribute('waf_status');
  }
  public set wafStatus(value: boolean | cdktf.IResolvable) {
    this._wafStatus = value;
  }
  public resetWafStatus() {
    this._wafStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wafStatusInput() {
    return this._wafStatus;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cache_301: cdktf.booleanToTerraform(this._cache301),
      cache_302: cdktf.booleanToTerraform(this._cache302),
      cache_404: cdktf.booleanToTerraform(this._cache404),
      cache_ttl: cdktf.numberToTerraform(this._cacheTtl),
      caching_behavior: cdktf.stringToTerraform(this._cachingBehavior),
      deploy_mode: cdktf.booleanToTerraform(this._deployMode),
      dns_mode: cdktf.stringToTerraform(this._dnsMode),
      domain: cdktf.stringToTerraform(this._domain),
      expire_bypass_sec: cdktf.numberToTerraform(this._expireBypassSec),
      expires_ttl: cdktf.numberToTerraform(this._expiresTtl),
      gzip_status: cdktf.booleanToTerraform(this._gzipStatus),
      header_device_type: cdktf.booleanToTerraform(this._headerDeviceType),
      header_geoip_continent: cdktf.booleanToTerraform(this._headerGeoipContinent),
      header_geoip_country: cdktf.booleanToTerraform(this._headerGeoipCountry),
      header_geoip_org: cdktf.booleanToTerraform(this._headerGeoipOrg),
      id: cdktf.stringToTerraform(this._id),
      ignore_cache_control: cdktf.booleanToTerraform(this._ignoreCacheControl),
      ignore_expires: cdktf.booleanToTerraform(this._ignoreExpires),
      ignore_vary: cdktf.booleanToTerraform(this._ignoreVary),
      image_optimize: cdktf.booleanToTerraform(this._imageOptimize),
      image_optimize_level: cdktf.numberToTerraform(this._imageOptimizeLevel),
      image_optimize_metadata: cdktf.booleanToTerraform(this._imageOptimizeMetadata),
      image_optimize_progressive: cdktf.booleanToTerraform(this._imageOptimizeProgressive),
      image_optimize_webp: cdktf.booleanToTerraform(this._imageOptimizeWebp),
      last_updated: cdktf.stringToTerraform(this._lastUpdated),
      log_freq: cdktf.numberToTerraform(this._logFreq),
      public_log: cdktf.stringToTerraform(this._publicLog),
      rate_limit_ignore_good_bots: cdktf.booleanToTerraform(this._rateLimitIgnoreGoodBots),
      rate_limit_ignore_static_content: cdktf.booleanToTerraform(this._rateLimitIgnoreStaticContent),
      rate_limit_status: cdktf.booleanToTerraform(this._rateLimitStatus),
      smart_cache_status: cdktf.booleanToTerraform(this._smartCacheStatus),
      smart_cache_template: cdktf.stringToTerraform(this._smartCacheTemplate),
      smart_cache_ttl: cdktf.numberToTerraform(this._smartCacheTtl),
      ssl_mode: cdktf.stringToTerraform(this._sslMode),
      tls10: cdktf.booleanToTerraform(this._tls10),
      tls11: cdktf.booleanToTerraform(this._tls11),
      tls12: cdktf.booleanToTerraform(this._tls12),
      waf_level: cdktf.stringToTerraform(this._wafLevel),
      waf_mode: cdktf.stringToTerraform(this._wafMode),
      waf_status: cdktf.booleanToTerraform(this._wafStatus),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cache_301: {
        value: cdktf.booleanToHclTerraform(this._cache301),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cache_302: {
        value: cdktf.booleanToHclTerraform(this._cache302),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cache_404: {
        value: cdktf.booleanToHclTerraform(this._cache404),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cache_ttl: {
        value: cdktf.numberToHclTerraform(this._cacheTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      caching_behavior: {
        value: cdktf.stringToHclTerraform(this._cachingBehavior),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deploy_mode: {
        value: cdktf.booleanToHclTerraform(this._deployMode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dns_mode: {
        value: cdktf.stringToHclTerraform(this._dnsMode),
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
      expire_bypass_sec: {
        value: cdktf.numberToHclTerraform(this._expireBypassSec),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      expires_ttl: {
        value: cdktf.numberToHclTerraform(this._expiresTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gzip_status: {
        value: cdktf.booleanToHclTerraform(this._gzipStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      header_device_type: {
        value: cdktf.booleanToHclTerraform(this._headerDeviceType),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      header_geoip_continent: {
        value: cdktf.booleanToHclTerraform(this._headerGeoipContinent),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      header_geoip_country: {
        value: cdktf.booleanToHclTerraform(this._headerGeoipCountry),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      header_geoip_org: {
        value: cdktf.booleanToHclTerraform(this._headerGeoipOrg),
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
      ignore_cache_control: {
        value: cdktf.booleanToHclTerraform(this._ignoreCacheControl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_expires: {
        value: cdktf.booleanToHclTerraform(this._ignoreExpires),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_vary: {
        value: cdktf.booleanToHclTerraform(this._ignoreVary),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      image_optimize: {
        value: cdktf.booleanToHclTerraform(this._imageOptimize),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      image_optimize_level: {
        value: cdktf.numberToHclTerraform(this._imageOptimizeLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      image_optimize_metadata: {
        value: cdktf.booleanToHclTerraform(this._imageOptimizeMetadata),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      image_optimize_progressive: {
        value: cdktf.booleanToHclTerraform(this._imageOptimizeProgressive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      image_optimize_webp: {
        value: cdktf.booleanToHclTerraform(this._imageOptimizeWebp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      last_updated: {
        value: cdktf.stringToHclTerraform(this._lastUpdated),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_freq: {
        value: cdktf.numberToHclTerraform(this._logFreq),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      public_log: {
        value: cdktf.stringToHclTerraform(this._publicLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rate_limit_ignore_good_bots: {
        value: cdktf.booleanToHclTerraform(this._rateLimitIgnoreGoodBots),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rate_limit_ignore_static_content: {
        value: cdktf.booleanToHclTerraform(this._rateLimitIgnoreStaticContent),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rate_limit_status: {
        value: cdktf.booleanToHclTerraform(this._rateLimitStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      smart_cache_status: {
        value: cdktf.booleanToHclTerraform(this._smartCacheStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      smart_cache_template: {
        value: cdktf.stringToHclTerraform(this._smartCacheTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      smart_cache_ttl: {
        value: cdktf.numberToHclTerraform(this._smartCacheTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssl_mode: {
        value: cdktf.stringToHclTerraform(this._sslMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls10: {
        value: cdktf.booleanToHclTerraform(this._tls10),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tls11: {
        value: cdktf.booleanToHclTerraform(this._tls11),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tls12: {
        value: cdktf.booleanToHclTerraform(this._tls12),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      waf_level: {
        value: cdktf.stringToHclTerraform(this._wafLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      waf_mode: {
        value: cdktf.stringToHclTerraform(this._wafMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      waf_status: {
        value: cdktf.booleanToHclTerraform(this._wafStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
