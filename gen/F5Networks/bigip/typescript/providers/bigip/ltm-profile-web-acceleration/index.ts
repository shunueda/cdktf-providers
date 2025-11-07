// https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_web_acceleration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LtmProfileWebAccelerationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies how quickly the system ages a cache entry. The aging rate ranges from 0 (slowest aging) to 10 (fastest aging). The default value is 9.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_web_acceleration#cache_aging_rate LtmProfileWebAcceleration#cache_aging_rate}
  */
  readonly cacheAgingRate?: number;
  /**
  * Specifies which cache disabling headers sent by clients the system ignores. The default value is all.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_web_acceleration#cache_client_cache_control_mode LtmProfileWebAcceleration#cache_client_cache_control_mode}
  */
  readonly cacheClientCacheControlMode?: string;
  /**
  * Inserts Age and Date headers in the response. The default value is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_web_acceleration#cache_insert_age_header LtmProfileWebAcceleration#cache_insert_age_header}
  */
  readonly cacheInsertAgeHeader?: string;
  /**
  * Specifies how long the system considers the cached content to be valid. The default value is 3600 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_web_acceleration#cache_max_age LtmProfileWebAcceleration#cache_max_age}
  */
  readonly cacheMaxAge?: number;
  /**
  * Specifies the maximum number of entries that can be in the cache. The default value is 0 (zero), which means that the system does not limit the maximum entries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_web_acceleration#cache_max_entries LtmProfileWebAcceleration#cache_max_entries}
  */
  readonly cacheMaxEntries?: number;
  /**
  * Specifies the largest object that the system considers eligible for caching. The default value is 50000 bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_web_acceleration#cache_object_max_size LtmProfileWebAcceleration#cache_object_max_size}
  */
  readonly cacheObjectMaxSize?: number;
  /**
  * Specifies the smallest object that the system considers eligible for caching. The default value is 500 bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_web_acceleration#cache_object_min_size LtmProfileWebAcceleration#cache_object_min_size}
  */
  readonly cacheObjectMinSize?: number;
  /**
  * Specifies the maximum size for the cache. When the cache reaches the maximum size, the system starts removing the oldest entries. The default value is 100 megabytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_web_acceleration#cache_size LtmProfileWebAcceleration#cache_size}
  */
  readonly cacheSize?: number;
  /**
  * Configures a list of URIs to exclude from the cache. The default value of none specifies no URIs are excluded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_web_acceleration#cache_uri_exclude LtmProfileWebAcceleration#cache_uri_exclude}
  */
  readonly cacheUriExclude?: string[];
  /**
  * Configures a list of URIs to include in the cache. The default value of .* specifies that all URIs are cacheable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_web_acceleration#cache_uri_include LtmProfileWebAcceleration#cache_uri_include}
  */
  readonly cacheUriInclude?: string[];
  /**
  * Configures a list of URIs to include in the cache even if they would normally be excluded due to factors like object size or HTTP request type. The default value of none specifies no URIs are to be forced into the cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_web_acceleration#cache_uri_include_override LtmProfileWebAcceleration#cache_uri_include_override}
  */
  readonly cacheUriIncludeOverride?: string[];
  /**
  * Configures a list of URIs to keep in the cache. The pinning process keeps URIs in cache when they would normally be evicted to make room for more active URIs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_web_acceleration#cache_uri_pinned LtmProfileWebAcceleration#cache_uri_pinned}
  */
  readonly cacheUriPinned?: string[];
  /**
  * Specifies the profile that you want to use as the parent profile. Your new profile inherits all settings and values from the parent profile specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_web_acceleration#defaults_from LtmProfileWebAcceleration#defaults_from}
  */
  readonly defaultsFrom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_web_acceleration#id LtmProfileWebAcceleration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the Web Acceleration profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_web_acceleration#name LtmProfileWebAcceleration#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_web_acceleration bigip_ltm_profile_web_acceleration}
*/
export class LtmProfileWebAcceleration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bigip_ltm_profile_web_acceleration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LtmProfileWebAcceleration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LtmProfileWebAcceleration to import
  * @param importFromId The id of the existing LtmProfileWebAcceleration that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_web_acceleration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LtmProfileWebAcceleration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bigip_ltm_profile_web_acceleration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_web_acceleration bigip_ltm_profile_web_acceleration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LtmProfileWebAccelerationConfig
  */
  public constructor(scope: Construct, id: string, config: LtmProfileWebAccelerationConfig) {
    super(scope, id, {
      terraformResourceType: 'bigip_ltm_profile_web_acceleration',
      terraformGeneratorMetadata: {
        providerName: 'bigip',
        providerVersion: '1.24.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cacheAgingRate = config.cacheAgingRate;
    this._cacheClientCacheControlMode = config.cacheClientCacheControlMode;
    this._cacheInsertAgeHeader = config.cacheInsertAgeHeader;
    this._cacheMaxAge = config.cacheMaxAge;
    this._cacheMaxEntries = config.cacheMaxEntries;
    this._cacheObjectMaxSize = config.cacheObjectMaxSize;
    this._cacheObjectMinSize = config.cacheObjectMinSize;
    this._cacheSize = config.cacheSize;
    this._cacheUriExclude = config.cacheUriExclude;
    this._cacheUriInclude = config.cacheUriInclude;
    this._cacheUriIncludeOverride = config.cacheUriIncludeOverride;
    this._cacheUriPinned = config.cacheUriPinned;
    this._defaultsFrom = config.defaultsFrom;
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cache_aging_rate - computed: true, optional: true, required: false
  private _cacheAgingRate?: number; 
  public get cacheAgingRate() {
    return this.getNumberAttribute('cache_aging_rate');
  }
  public set cacheAgingRate(value: number) {
    this._cacheAgingRate = value;
  }
  public resetCacheAgingRate() {
    this._cacheAgingRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheAgingRateInput() {
    return this._cacheAgingRate;
  }

  // cache_client_cache_control_mode - computed: true, optional: true, required: false
  private _cacheClientCacheControlMode?: string; 
  public get cacheClientCacheControlMode() {
    return this.getStringAttribute('cache_client_cache_control_mode');
  }
  public set cacheClientCacheControlMode(value: string) {
    this._cacheClientCacheControlMode = value;
  }
  public resetCacheClientCacheControlMode() {
    this._cacheClientCacheControlMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheClientCacheControlModeInput() {
    return this._cacheClientCacheControlMode;
  }

  // cache_insert_age_header - computed: true, optional: true, required: false
  private _cacheInsertAgeHeader?: string; 
  public get cacheInsertAgeHeader() {
    return this.getStringAttribute('cache_insert_age_header');
  }
  public set cacheInsertAgeHeader(value: string) {
    this._cacheInsertAgeHeader = value;
  }
  public resetCacheInsertAgeHeader() {
    this._cacheInsertAgeHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheInsertAgeHeaderInput() {
    return this._cacheInsertAgeHeader;
  }

  // cache_max_age - computed: true, optional: true, required: false
  private _cacheMaxAge?: number; 
  public get cacheMaxAge() {
    return this.getNumberAttribute('cache_max_age');
  }
  public set cacheMaxAge(value: number) {
    this._cacheMaxAge = value;
  }
  public resetCacheMaxAge() {
    this._cacheMaxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheMaxAgeInput() {
    return this._cacheMaxAge;
  }

  // cache_max_entries - computed: true, optional: true, required: false
  private _cacheMaxEntries?: number; 
  public get cacheMaxEntries() {
    return this.getNumberAttribute('cache_max_entries');
  }
  public set cacheMaxEntries(value: number) {
    this._cacheMaxEntries = value;
  }
  public resetCacheMaxEntries() {
    this._cacheMaxEntries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheMaxEntriesInput() {
    return this._cacheMaxEntries;
  }

  // cache_object_max_size - computed: true, optional: true, required: false
  private _cacheObjectMaxSize?: number; 
  public get cacheObjectMaxSize() {
    return this.getNumberAttribute('cache_object_max_size');
  }
  public set cacheObjectMaxSize(value: number) {
    this._cacheObjectMaxSize = value;
  }
  public resetCacheObjectMaxSize() {
    this._cacheObjectMaxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheObjectMaxSizeInput() {
    return this._cacheObjectMaxSize;
  }

  // cache_object_min_size - computed: true, optional: true, required: false
  private _cacheObjectMinSize?: number; 
  public get cacheObjectMinSize() {
    return this.getNumberAttribute('cache_object_min_size');
  }
  public set cacheObjectMinSize(value: number) {
    this._cacheObjectMinSize = value;
  }
  public resetCacheObjectMinSize() {
    this._cacheObjectMinSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheObjectMinSizeInput() {
    return this._cacheObjectMinSize;
  }

  // cache_size - computed: true, optional: true, required: false
  private _cacheSize?: number; 
  public get cacheSize() {
    return this.getNumberAttribute('cache_size');
  }
  public set cacheSize(value: number) {
    this._cacheSize = value;
  }
  public resetCacheSize() {
    this._cacheSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheSizeInput() {
    return this._cacheSize;
  }

  // cache_uri_exclude - computed: true, optional: true, required: false
  private _cacheUriExclude?: string[]; 
  public get cacheUriExclude() {
    return cdktf.Fn.tolist(this.getListAttribute('cache_uri_exclude'));
  }
  public set cacheUriExclude(value: string[]) {
    this._cacheUriExclude = value;
  }
  public resetCacheUriExclude() {
    this._cacheUriExclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheUriExcludeInput() {
    return this._cacheUriExclude;
  }

  // cache_uri_include - computed: true, optional: true, required: false
  private _cacheUriInclude?: string[]; 
  public get cacheUriInclude() {
    return cdktf.Fn.tolist(this.getListAttribute('cache_uri_include'));
  }
  public set cacheUriInclude(value: string[]) {
    this._cacheUriInclude = value;
  }
  public resetCacheUriInclude() {
    this._cacheUriInclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheUriIncludeInput() {
    return this._cacheUriInclude;
  }

  // cache_uri_include_override - computed: true, optional: true, required: false
  private _cacheUriIncludeOverride?: string[]; 
  public get cacheUriIncludeOverride() {
    return cdktf.Fn.tolist(this.getListAttribute('cache_uri_include_override'));
  }
  public set cacheUriIncludeOverride(value: string[]) {
    this._cacheUriIncludeOverride = value;
  }
  public resetCacheUriIncludeOverride() {
    this._cacheUriIncludeOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheUriIncludeOverrideInput() {
    return this._cacheUriIncludeOverride;
  }

  // cache_uri_pinned - computed: true, optional: true, required: false
  private _cacheUriPinned?: string[]; 
  public get cacheUriPinned() {
    return cdktf.Fn.tolist(this.getListAttribute('cache_uri_pinned'));
  }
  public set cacheUriPinned(value: string[]) {
    this._cacheUriPinned = value;
  }
  public resetCacheUriPinned() {
    this._cacheUriPinned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheUriPinnedInput() {
    return this._cacheUriPinned;
  }

  // defaults_from - computed: true, optional: true, required: false
  private _defaultsFrom?: string; 
  public get defaultsFrom() {
    return this.getStringAttribute('defaults_from');
  }
  public set defaultsFrom(value: string) {
    this._defaultsFrom = value;
  }
  public resetDefaultsFrom() {
    this._defaultsFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultsFromInput() {
    return this._defaultsFrom;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cache_aging_rate: cdktf.numberToTerraform(this._cacheAgingRate),
      cache_client_cache_control_mode: cdktf.stringToTerraform(this._cacheClientCacheControlMode),
      cache_insert_age_header: cdktf.stringToTerraform(this._cacheInsertAgeHeader),
      cache_max_age: cdktf.numberToTerraform(this._cacheMaxAge),
      cache_max_entries: cdktf.numberToTerraform(this._cacheMaxEntries),
      cache_object_max_size: cdktf.numberToTerraform(this._cacheObjectMaxSize),
      cache_object_min_size: cdktf.numberToTerraform(this._cacheObjectMinSize),
      cache_size: cdktf.numberToTerraform(this._cacheSize),
      cache_uri_exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cacheUriExclude),
      cache_uri_include: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cacheUriInclude),
      cache_uri_include_override: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cacheUriIncludeOverride),
      cache_uri_pinned: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cacheUriPinned),
      defaults_from: cdktf.stringToTerraform(this._defaultsFrom),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cache_aging_rate: {
        value: cdktf.numberToHclTerraform(this._cacheAgingRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cache_client_cache_control_mode: {
        value: cdktf.stringToHclTerraform(this._cacheClientCacheControlMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cache_insert_age_header: {
        value: cdktf.stringToHclTerraform(this._cacheInsertAgeHeader),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cache_max_age: {
        value: cdktf.numberToHclTerraform(this._cacheMaxAge),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cache_max_entries: {
        value: cdktf.numberToHclTerraform(this._cacheMaxEntries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cache_object_max_size: {
        value: cdktf.numberToHclTerraform(this._cacheObjectMaxSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cache_object_min_size: {
        value: cdktf.numberToHclTerraform(this._cacheObjectMinSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cache_size: {
        value: cdktf.numberToHclTerraform(this._cacheSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cache_uri_exclude: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._cacheUriExclude),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      cache_uri_include: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._cacheUriInclude),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      cache_uri_include_override: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._cacheUriIncludeOverride),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      cache_uri_pinned: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._cacheUriPinned),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      defaults_from: {
        value: cdktf.stringToHclTerraform(this._defaultsFrom),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
