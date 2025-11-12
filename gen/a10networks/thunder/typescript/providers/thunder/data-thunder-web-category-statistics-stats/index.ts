// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_statistics_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderWebCategoryStatisticsStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_statistics_stats#id DataThunderWebCategoryStatisticsStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_statistics_stats#stats DataThunderWebCategoryStatisticsStats#stats}
  */
  readonly stats?: DataThunderWebCategoryStatisticsStatsStats;
}
export interface DataThunderWebCategoryStatisticsStatsStats {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_statistics_stats#cloud_cache_lookup DataThunderWebCategoryStatisticsStats#cloud_cache_lookup}
  */
  readonly cloudCacheLookup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_statistics_stats#cloud_lookup DataThunderWebCategoryStatisticsStats#cloud_lookup}
  */
  readonly cloudLookup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_statistics_stats#db_lookup DataThunderWebCategoryStatisticsStats#db_lookup}
  */
  readonly dbLookup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_statistics_stats#db_mem DataThunderWebCategoryStatisticsStats#db_mem}
  */
  readonly dbMem?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_statistics_stats#lookup_cache_mem DataThunderWebCategoryStatisticsStats#lookup_cache_mem}
  */
  readonly lookupCacheMem?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_statistics_stats#lookup_latency DataThunderWebCategoryStatisticsStats#lookup_latency}
  */
  readonly lookupLatency?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_statistics_stats#rtu_cache_mem DataThunderWebCategoryStatisticsStats#rtu_cache_mem}
  */
  readonly rtuCacheMem?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_statistics_stats#rtu_lookup DataThunderWebCategoryStatisticsStats#rtu_lookup}
  */
  readonly rtuLookup?: number;
}

export function dataThunderWebCategoryStatisticsStatsStatsToTerraform(struct?: DataThunderWebCategoryStatisticsStatsStatsOutputReference | DataThunderWebCategoryStatisticsStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_cache_lookup: cdktf.numberToTerraform(struct!.cloudCacheLookup),
    cloud_lookup: cdktf.numberToTerraform(struct!.cloudLookup),
    db_lookup: cdktf.numberToTerraform(struct!.dbLookup),
    db_mem: cdktf.numberToTerraform(struct!.dbMem),
    lookup_cache_mem: cdktf.numberToTerraform(struct!.lookupCacheMem),
    lookup_latency: cdktf.numberToTerraform(struct!.lookupLatency),
    rtu_cache_mem: cdktf.numberToTerraform(struct!.rtuCacheMem),
    rtu_lookup: cdktf.numberToTerraform(struct!.rtuLookup),
  }
}


export function dataThunderWebCategoryStatisticsStatsStatsToHclTerraform(struct?: DataThunderWebCategoryStatisticsStatsStatsOutputReference | DataThunderWebCategoryStatisticsStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_cache_lookup: {
      value: cdktf.numberToHclTerraform(struct!.cloudCacheLookup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cloud_lookup: {
      value: cdktf.numberToHclTerraform(struct!.cloudLookup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    db_lookup: {
      value: cdktf.numberToHclTerraform(struct!.dbLookup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    db_mem: {
      value: cdktf.numberToHclTerraform(struct!.dbMem),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lookup_cache_mem: {
      value: cdktf.numberToHclTerraform(struct!.lookupCacheMem),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lookup_latency: {
      value: cdktf.numberToHclTerraform(struct!.lookupLatency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rtu_cache_mem: {
      value: cdktf.numberToHclTerraform(struct!.rtuCacheMem),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rtu_lookup: {
      value: cdktf.numberToHclTerraform(struct!.rtuLookup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderWebCategoryStatisticsStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderWebCategoryStatisticsStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudCacheLookup !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudCacheLookup = this._cloudCacheLookup;
    }
    if (this._cloudLookup !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudLookup = this._cloudLookup;
    }
    if (this._dbLookup !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbLookup = this._dbLookup;
    }
    if (this._dbMem !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbMem = this._dbMem;
    }
    if (this._lookupCacheMem !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookupCacheMem = this._lookupCacheMem;
    }
    if (this._lookupLatency !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookupLatency = this._lookupLatency;
    }
    if (this._rtuCacheMem !== undefined) {
      hasAnyValues = true;
      internalValueResult.rtuCacheMem = this._rtuCacheMem;
    }
    if (this._rtuLookup !== undefined) {
      hasAnyValues = true;
      internalValueResult.rtuLookup = this._rtuLookup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderWebCategoryStatisticsStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudCacheLookup = undefined;
      this._cloudLookup = undefined;
      this._dbLookup = undefined;
      this._dbMem = undefined;
      this._lookupCacheMem = undefined;
      this._lookupLatency = undefined;
      this._rtuCacheMem = undefined;
      this._rtuLookup = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudCacheLookup = value.cloudCacheLookup;
      this._cloudLookup = value.cloudLookup;
      this._dbLookup = value.dbLookup;
      this._dbMem = value.dbMem;
      this._lookupCacheMem = value.lookupCacheMem;
      this._lookupLatency = value.lookupLatency;
      this._rtuCacheMem = value.rtuCacheMem;
      this._rtuLookup = value.rtuLookup;
    }
  }

  // cloud_cache_lookup - computed: false, optional: true, required: false
  private _cloudCacheLookup?: number; 
  public get cloudCacheLookup() {
    return this.getNumberAttribute('cloud_cache_lookup');
  }
  public set cloudCacheLookup(value: number) {
    this._cloudCacheLookup = value;
  }
  public resetCloudCacheLookup() {
    this._cloudCacheLookup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudCacheLookupInput() {
    return this._cloudCacheLookup;
  }

  // cloud_lookup - computed: false, optional: true, required: false
  private _cloudLookup?: number; 
  public get cloudLookup() {
    return this.getNumberAttribute('cloud_lookup');
  }
  public set cloudLookup(value: number) {
    this._cloudLookup = value;
  }
  public resetCloudLookup() {
    this._cloudLookup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudLookupInput() {
    return this._cloudLookup;
  }

  // db_lookup - computed: false, optional: true, required: false
  private _dbLookup?: number; 
  public get dbLookup() {
    return this.getNumberAttribute('db_lookup');
  }
  public set dbLookup(value: number) {
    this._dbLookup = value;
  }
  public resetDbLookup() {
    this._dbLookup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbLookupInput() {
    return this._dbLookup;
  }

  // db_mem - computed: false, optional: true, required: false
  private _dbMem?: number; 
  public get dbMem() {
    return this.getNumberAttribute('db_mem');
  }
  public set dbMem(value: number) {
    this._dbMem = value;
  }
  public resetDbMem() {
    this._dbMem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbMemInput() {
    return this._dbMem;
  }

  // lookup_cache_mem - computed: false, optional: true, required: false
  private _lookupCacheMem?: number; 
  public get lookupCacheMem() {
    return this.getNumberAttribute('lookup_cache_mem');
  }
  public set lookupCacheMem(value: number) {
    this._lookupCacheMem = value;
  }
  public resetLookupCacheMem() {
    this._lookupCacheMem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookupCacheMemInput() {
    return this._lookupCacheMem;
  }

  // lookup_latency - computed: false, optional: true, required: false
  private _lookupLatency?: number; 
  public get lookupLatency() {
    return this.getNumberAttribute('lookup_latency');
  }
  public set lookupLatency(value: number) {
    this._lookupLatency = value;
  }
  public resetLookupLatency() {
    this._lookupLatency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookupLatencyInput() {
    return this._lookupLatency;
  }

  // rtu_cache_mem - computed: false, optional: true, required: false
  private _rtuCacheMem?: number; 
  public get rtuCacheMem() {
    return this.getNumberAttribute('rtu_cache_mem');
  }
  public set rtuCacheMem(value: number) {
    this._rtuCacheMem = value;
  }
  public resetRtuCacheMem() {
    this._rtuCacheMem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtuCacheMemInput() {
    return this._rtuCacheMem;
  }

  // rtu_lookup - computed: false, optional: true, required: false
  private _rtuLookup?: number; 
  public get rtuLookup() {
    return this.getNumberAttribute('rtu_lookup');
  }
  public set rtuLookup(value: number) {
    this._rtuLookup = value;
  }
  public resetRtuLookup() {
    this._rtuLookup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtuLookupInput() {
    return this._rtuLookup;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_statistics_stats thunder_web_category_statistics_stats}
*/
export class DataThunderWebCategoryStatisticsStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_web_category_statistics_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderWebCategoryStatisticsStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderWebCategoryStatisticsStats to import
  * @param importFromId The id of the existing DataThunderWebCategoryStatisticsStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_statistics_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderWebCategoryStatisticsStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_web_category_statistics_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_statistics_stats thunder_web_category_statistics_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderWebCategoryStatisticsStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderWebCategoryStatisticsStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_web_category_statistics_stats',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
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
  private _stats = new DataThunderWebCategoryStatisticsStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderWebCategoryStatisticsStatsStats) {
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
      stats: dataThunderWebCategoryStatisticsStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderWebCategoryStatisticsStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderWebCategoryStatisticsStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
