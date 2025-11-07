// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_entry_cache
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DefaultEntryCacheConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the cache level in the cache order if more than one instance of the cache is configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_entry_cache#cache_level DefaultEntryCache#cache_level}
  */
  readonly cacheLevel?: number;
  /**
  * Indicates whether the entry cache should be updated with entries that have been returned to the client during the course of processing an unindexed search.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_entry_cache#cache_unindexed_search_results DefaultEntryCache#cache_unindexed_search_results}
  */
  readonly cacheUnindexedSearchResults?: boolean | cdktf.IResolvable;
  /**
  * A description for this Entry Cache
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_entry_cache#description DefaultEntryCache#description}
  */
  readonly description?: string;
  /**
  * Indicates whether the Entry Cache is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_entry_cache#enabled DefaultEntryCache#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The set of filters that define the entries that should be excluded from the cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_entry_cache#exclude_filter DefaultEntryCache#exclude_filter}
  */
  readonly excludeFilter?: string[];
  /**
  * The set of filters that define the entries that should be included in the cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_entry_cache#include_filter DefaultEntryCache#include_filter}
  */
  readonly includeFilter?: string[];
  /**
  * Specifies the maximum number of entries that will be allowed in the cache. Once the cache reaches this size, then adding new entries will cause existing entries to be purged, starting with the oldest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_entry_cache#max_entries DefaultEntryCache#max_entries}
  */
  readonly maxEntries?: number;
  /**
  * Specifies the maximum amount of memory, as a percentage of the total maximum JVM heap size, that this cache should occupy when full. If the amount of memory the cache is using is greater than this amount, then an attempt to put a new entry in the cache will be ignored and will cause the oldest entry to be purged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_entry_cache#max_memory_percent DefaultEntryCache#max_memory_percent}
  */
  readonly maxMemoryPercent?: number;
  /**
  * Specifies the names of the attribute types for which the min-cache-entry-value-count property should apply. If no attribute types are specified, then all user attributes will be examined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_entry_cache#min_cache_entry_attribute DefaultEntryCache#min_cache_entry_attribute}
  */
  readonly minCacheEntryAttribute?: string[];
  /**
  * Specifies the minimum number of attribute values (optionally across a specified subset of attributes as defined in the min-cache-entry-attributes property) for entries that should be held in the cache. Entries with fewer than this number of attribute values will be excluded from the cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_entry_cache#min_cache_entry_value_count DefaultEntryCache#min_cache_entry_value_count}
  */
  readonly minCacheEntryValueCount?: number;
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_entry_cache#name DefaultEntryCache#name}
  */
  readonly name: string;
  /**
  * Specifies that the cache should only store entries which are accessed much more frequently than the average entry. The cache will observe attempts to place entries in the cache and compare an entry's accesses to the average entry's.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_entry_cache#only_cache_frequently_accessed DefaultEntryCache#only_cache_frequently_accessed}
  */
  readonly onlyCacheFrequentlyAccessed?: boolean | cdktf.IResolvable;
}
export interface DefaultEntryCacheRequiredActions {
}

export function defaultEntryCacheRequiredActionsToTerraform(struct?: DefaultEntryCacheRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function defaultEntryCacheRequiredActionsToHclTerraform(struct?: DefaultEntryCacheRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DefaultEntryCacheRequiredActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DefaultEntryCacheRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultEntryCacheRequiredActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // property - computed: true, optional: false, required: false
  public get property() {
    return this.getStringAttribute('property');
  }

  // synopsis - computed: true, optional: false, required: false
  public get synopsis() {
    return this.getStringAttribute('synopsis');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DefaultEntryCacheRequiredActionsList extends cdktf.ComplexList {

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
  public get(index: number): DefaultEntryCacheRequiredActionsOutputReference {
    return new DefaultEntryCacheRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_entry_cache pingdirectory_default_entry_cache}
*/
export class DefaultEntryCache extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_default_entry_cache";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DefaultEntryCache resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DefaultEntryCache to import
  * @param importFromId The id of the existing DefaultEntryCache that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_entry_cache#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DefaultEntryCache to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_default_entry_cache", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_entry_cache pingdirectory_default_entry_cache} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DefaultEntryCacheConfig
  */
  public constructor(scope: Construct, id: string, config: DefaultEntryCacheConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_default_entry_cache',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cacheLevel = config.cacheLevel;
    this._cacheUnindexedSearchResults = config.cacheUnindexedSearchResults;
    this._description = config.description;
    this._enabled = config.enabled;
    this._excludeFilter = config.excludeFilter;
    this._includeFilter = config.includeFilter;
    this._maxEntries = config.maxEntries;
    this._maxMemoryPercent = config.maxMemoryPercent;
    this._minCacheEntryAttribute = config.minCacheEntryAttribute;
    this._minCacheEntryValueCount = config.minCacheEntryValueCount;
    this._name = config.name;
    this._onlyCacheFrequentlyAccessed = config.onlyCacheFrequentlyAccessed;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cache_level - computed: true, optional: true, required: false
  private _cacheLevel?: number; 
  public get cacheLevel() {
    return this.getNumberAttribute('cache_level');
  }
  public set cacheLevel(value: number) {
    this._cacheLevel = value;
  }
  public resetCacheLevel() {
    this._cacheLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheLevelInput() {
    return this._cacheLevel;
  }

  // cache_unindexed_search_results - computed: true, optional: true, required: false
  private _cacheUnindexedSearchResults?: boolean | cdktf.IResolvable; 
  public get cacheUnindexedSearchResults() {
    return this.getBooleanAttribute('cache_unindexed_search_results');
  }
  public set cacheUnindexedSearchResults(value: boolean | cdktf.IResolvable) {
    this._cacheUnindexedSearchResults = value;
  }
  public resetCacheUnindexedSearchResults() {
    this._cacheUnindexedSearchResults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheUnindexedSearchResultsInput() {
    return this._cacheUnindexedSearchResults;
  }

  // description - computed: true, optional: true, required: false
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

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // exclude_filter - computed: true, optional: true, required: false
  private _excludeFilter?: string[]; 
  public get excludeFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('exclude_filter'));
  }
  public set excludeFilter(value: string[]) {
    this._excludeFilter = value;
  }
  public resetExcludeFilter() {
    this._excludeFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeFilterInput() {
    return this._excludeFilter;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_filter - computed: true, optional: true, required: false
  private _includeFilter?: string[]; 
  public get includeFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('include_filter'));
  }
  public set includeFilter(value: string[]) {
    this._includeFilter = value;
  }
  public resetIncludeFilter() {
    this._includeFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeFilterInput() {
    return this._includeFilter;
  }

  // max_entries - computed: true, optional: true, required: false
  private _maxEntries?: number; 
  public get maxEntries() {
    return this.getNumberAttribute('max_entries');
  }
  public set maxEntries(value: number) {
    this._maxEntries = value;
  }
  public resetMaxEntries() {
    this._maxEntries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEntriesInput() {
    return this._maxEntries;
  }

  // max_memory_percent - computed: true, optional: true, required: false
  private _maxMemoryPercent?: number; 
  public get maxMemoryPercent() {
    return this.getNumberAttribute('max_memory_percent');
  }
  public set maxMemoryPercent(value: number) {
    this._maxMemoryPercent = value;
  }
  public resetMaxMemoryPercent() {
    this._maxMemoryPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMemoryPercentInput() {
    return this._maxMemoryPercent;
  }

  // min_cache_entry_attribute - computed: true, optional: true, required: false
  private _minCacheEntryAttribute?: string[]; 
  public get minCacheEntryAttribute() {
    return cdktf.Fn.tolist(this.getListAttribute('min_cache_entry_attribute'));
  }
  public set minCacheEntryAttribute(value: string[]) {
    this._minCacheEntryAttribute = value;
  }
  public resetMinCacheEntryAttribute() {
    this._minCacheEntryAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCacheEntryAttributeInput() {
    return this._minCacheEntryAttribute;
  }

  // min_cache_entry_value_count - computed: true, optional: true, required: false
  private _minCacheEntryValueCount?: number; 
  public get minCacheEntryValueCount() {
    return this.getNumberAttribute('min_cache_entry_value_count');
  }
  public set minCacheEntryValueCount(value: number) {
    this._minCacheEntryValueCount = value;
  }
  public resetMinCacheEntryValueCount() {
    this._minCacheEntryValueCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCacheEntryValueCountInput() {
    return this._minCacheEntryValueCount;
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

  // notifications - computed: true, optional: false, required: false
  public get notifications() {
    return cdktf.Fn.tolist(this.getListAttribute('notifications'));
  }

  // only_cache_frequently_accessed - computed: true, optional: true, required: false
  private _onlyCacheFrequentlyAccessed?: boolean | cdktf.IResolvable; 
  public get onlyCacheFrequentlyAccessed() {
    return this.getBooleanAttribute('only_cache_frequently_accessed');
  }
  public set onlyCacheFrequentlyAccessed(value: boolean | cdktf.IResolvable) {
    this._onlyCacheFrequentlyAccessed = value;
  }
  public resetOnlyCacheFrequentlyAccessed() {
    this._onlyCacheFrequentlyAccessed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlyCacheFrequentlyAccessedInput() {
    return this._onlyCacheFrequentlyAccessed;
  }

  // required_actions - computed: true, optional: false, required: false
  private _requiredActions = new DefaultEntryCacheRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cache_level: cdktf.numberToTerraform(this._cacheLevel),
      cache_unindexed_search_results: cdktf.booleanToTerraform(this._cacheUnindexedSearchResults),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      exclude_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludeFilter),
      include_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(this._includeFilter),
      max_entries: cdktf.numberToTerraform(this._maxEntries),
      max_memory_percent: cdktf.numberToTerraform(this._maxMemoryPercent),
      min_cache_entry_attribute: cdktf.listMapper(cdktf.stringToTerraform, false)(this._minCacheEntryAttribute),
      min_cache_entry_value_count: cdktf.numberToTerraform(this._minCacheEntryValueCount),
      name: cdktf.stringToTerraform(this._name),
      only_cache_frequently_accessed: cdktf.booleanToTerraform(this._onlyCacheFrequentlyAccessed),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cache_level: {
        value: cdktf.numberToHclTerraform(this._cacheLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cache_unindexed_search_results: {
        value: cdktf.booleanToHclTerraform(this._cacheUnindexedSearchResults),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exclude_filter: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._excludeFilter),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      include_filter: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._includeFilter),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      max_entries: {
        value: cdktf.numberToHclTerraform(this._maxEntries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_memory_percent: {
        value: cdktf.numberToHclTerraform(this._maxMemoryPercent),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_cache_entry_attribute: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._minCacheEntryAttribute),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      min_cache_entry_value_count: {
        value: cdktf.numberToHclTerraform(this._minCacheEntryValueCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      only_cache_frequently_accessed: {
        value: cdktf.booleanToHclTerraform(this._onlyCacheFrequentlyAccessed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
