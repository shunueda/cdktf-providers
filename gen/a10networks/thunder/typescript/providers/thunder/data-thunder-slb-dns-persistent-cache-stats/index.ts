// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_persistent_cache_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbDnsPersistentCacheStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_persistent_cache_stats#id DataThunderSlbDnsPersistentCacheStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_persistent_cache_stats#stats DataThunderSlbDnsPersistentCacheStats#stats}
  */
  readonly stats?: DataThunderSlbDnsPersistentCacheStatsStats;
}
export interface DataThunderSlbDnsPersistentCacheStatsStats {
  /**
  * Database busy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_persistent_cache_stats#database_busy DataThunderSlbDnsPersistentCacheStats#database_busy}
  */
  readonly databaseBusy?: number;
  /**
  * Database error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_persistent_cache_stats#database_error DataThunderSlbDnsPersistentCacheStats#database_error}
  */
  readonly databaseError?: number;
  /**
  * Total deleted cache entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_persistent_cache_stats#entry_deleted DataThunderSlbDnsPersistentCacheStats#entry_deleted}
  */
  readonly entryDeleted?: number;
  /**
  * Total saved cache entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_persistent_cache_stats#entry_saved DataThunderSlbDnsPersistentCacheStats#entry_saved}
  */
  readonly entrySaved?: number;
  /**
  * Total persistent cache entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_persistent_cache_stats#total_entry DataThunderSlbDnsPersistentCacheStats#total_entry}
  */
  readonly totalEntry?: number;
}

export function dataThunderSlbDnsPersistentCacheStatsStatsToTerraform(struct?: DataThunderSlbDnsPersistentCacheStatsStatsOutputReference | DataThunderSlbDnsPersistentCacheStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_busy: cdktf.numberToTerraform(struct!.databaseBusy),
    database_error: cdktf.numberToTerraform(struct!.databaseError),
    entry_deleted: cdktf.numberToTerraform(struct!.entryDeleted),
    entry_saved: cdktf.numberToTerraform(struct!.entrySaved),
    total_entry: cdktf.numberToTerraform(struct!.totalEntry),
  }
}


export function dataThunderSlbDnsPersistentCacheStatsStatsToHclTerraform(struct?: DataThunderSlbDnsPersistentCacheStatsStatsOutputReference | DataThunderSlbDnsPersistentCacheStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database_busy: {
      value: cdktf.numberToHclTerraform(struct!.databaseBusy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    database_error: {
      value: cdktf.numberToHclTerraform(struct!.databaseError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    entry_deleted: {
      value: cdktf.numberToHclTerraform(struct!.entryDeleted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    entry_saved: {
      value: cdktf.numberToHclTerraform(struct!.entrySaved),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_entry: {
      value: cdktf.numberToHclTerraform(struct!.totalEntry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbDnsPersistentCacheStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbDnsPersistentCacheStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseBusy !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseBusy = this._databaseBusy;
    }
    if (this._databaseError !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseError = this._databaseError;
    }
    if (this._entryDeleted !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryDeleted = this._entryDeleted;
    }
    if (this._entrySaved !== undefined) {
      hasAnyValues = true;
      internalValueResult.entrySaved = this._entrySaved;
    }
    if (this._totalEntry !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalEntry = this._totalEntry;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbDnsPersistentCacheStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._databaseBusy = undefined;
      this._databaseError = undefined;
      this._entryDeleted = undefined;
      this._entrySaved = undefined;
      this._totalEntry = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._databaseBusy = value.databaseBusy;
      this._databaseError = value.databaseError;
      this._entryDeleted = value.entryDeleted;
      this._entrySaved = value.entrySaved;
      this._totalEntry = value.totalEntry;
    }
  }

  // database_busy - computed: false, optional: true, required: false
  private _databaseBusy?: number; 
  public get databaseBusy() {
    return this.getNumberAttribute('database_busy');
  }
  public set databaseBusy(value: number) {
    this._databaseBusy = value;
  }
  public resetDatabaseBusy() {
    this._databaseBusy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseBusyInput() {
    return this._databaseBusy;
  }

  // database_error - computed: false, optional: true, required: false
  private _databaseError?: number; 
  public get databaseError() {
    return this.getNumberAttribute('database_error');
  }
  public set databaseError(value: number) {
    this._databaseError = value;
  }
  public resetDatabaseError() {
    this._databaseError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseErrorInput() {
    return this._databaseError;
  }

  // entry_deleted - computed: false, optional: true, required: false
  private _entryDeleted?: number; 
  public get entryDeleted() {
    return this.getNumberAttribute('entry_deleted');
  }
  public set entryDeleted(value: number) {
    this._entryDeleted = value;
  }
  public resetEntryDeleted() {
    this._entryDeleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryDeletedInput() {
    return this._entryDeleted;
  }

  // entry_saved - computed: false, optional: true, required: false
  private _entrySaved?: number; 
  public get entrySaved() {
    return this.getNumberAttribute('entry_saved');
  }
  public set entrySaved(value: number) {
    this._entrySaved = value;
  }
  public resetEntrySaved() {
    this._entrySaved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entrySavedInput() {
    return this._entrySaved;
  }

  // total_entry - computed: false, optional: true, required: false
  private _totalEntry?: number; 
  public get totalEntry() {
    return this.getNumberAttribute('total_entry');
  }
  public set totalEntry(value: number) {
    this._totalEntry = value;
  }
  public resetTotalEntry() {
    this._totalEntry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalEntryInput() {
    return this._totalEntry;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_persistent_cache_stats thunder_slb_dns_persistent_cache_stats}
*/
export class DataThunderSlbDnsPersistentCacheStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_dns_persistent_cache_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbDnsPersistentCacheStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbDnsPersistentCacheStats to import
  * @param importFromId The id of the existing DataThunderSlbDnsPersistentCacheStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_persistent_cache_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbDnsPersistentCacheStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_dns_persistent_cache_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_persistent_cache_stats thunder_slb_dns_persistent_cache_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbDnsPersistentCacheStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbDnsPersistentCacheStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_dns_persistent_cache_stats',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
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
    this._stats.internalValue = config.stats;
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

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderSlbDnsPersistentCacheStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderSlbDnsPersistentCacheStatsStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      stats: dataThunderSlbDnsPersistentCacheStatsStatsToTerraform(this._stats.internalValue),
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
      stats: {
        value: dataThunderSlbDnsPersistentCacheStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbDnsPersistentCacheStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
