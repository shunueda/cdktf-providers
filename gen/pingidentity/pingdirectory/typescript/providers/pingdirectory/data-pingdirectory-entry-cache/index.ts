// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/entry_cache
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectoryEntryCacheConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/entry_cache#name DataPingdirectoryEntryCache#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/entry_cache pingdirectory_entry_cache}
*/
export class DataPingdirectoryEntryCache extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_entry_cache";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectoryEntryCache resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectoryEntryCache to import
  * @param importFromId The id of the existing DataPingdirectoryEntryCache that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/entry_cache#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectoryEntryCache to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_entry_cache", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/entry_cache pingdirectory_entry_cache} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectoryEntryCacheConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectoryEntryCacheConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_entry_cache',
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
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cache_level - computed: true, optional: false, required: false
  public get cacheLevel() {
    return this.getNumberAttribute('cache_level');
  }

  // cache_unindexed_search_results - computed: true, optional: false, required: false
  public get cacheUnindexedSearchResults() {
    return this.getBooleanAttribute('cache_unindexed_search_results');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // exclude_filter - computed: true, optional: false, required: false
  public get excludeFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('exclude_filter'));
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_filter - computed: true, optional: false, required: false
  public get includeFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('include_filter'));
  }

  // max_entries - computed: true, optional: false, required: false
  public get maxEntries() {
    return this.getNumberAttribute('max_entries');
  }

  // max_memory_percent - computed: true, optional: false, required: false
  public get maxMemoryPercent() {
    return this.getNumberAttribute('max_memory_percent');
  }

  // min_cache_entry_attribute - computed: true, optional: false, required: false
  public get minCacheEntryAttribute() {
    return cdktf.Fn.tolist(this.getListAttribute('min_cache_entry_attribute'));
  }

  // min_cache_entry_value_count - computed: true, optional: false, required: false
  public get minCacheEntryValueCount() {
    return this.getNumberAttribute('min_cache_entry_value_count');
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

  // only_cache_frequently_accessed - computed: true, optional: false, required: false
  public get onlyCacheFrequentlyAccessed() {
    return this.getBooleanAttribute('only_cache_frequently_accessed');
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
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
