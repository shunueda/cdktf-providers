// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_sport_rate_limit_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbSportRateLimitStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_sport_rate_limit_stats#id DataThunderSlbSportRateLimitStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_sport_rate_limit_stats#stats DataThunderSlbSportRateLimitStats#stats}
  */
  readonly stats?: DataThunderSlbSportRateLimitStatsStats;
}
export interface DataThunderSlbSportRateLimitStatsStats {
  /**
  * Alloc'd src port entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_sport_rate_limit_stats#alloc_sport DataThunderSlbSportRateLimitStats#alloc_sport}
  */
  readonly allocSport?: number;
  /**
  * Alloc'd src port-ip entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_sport_rate_limit_stats#alloc_sportip DataThunderSlbSportRateLimitStats#alloc_sportip}
  */
  readonly allocSportip?: number;
  /**
  * Freed src port entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_sport_rate_limit_stats#freed_sport DataThunderSlbSportRateLimitStats#freed_sport}
  */
  readonly freedSport?: number;
  /**
  * Freed src port-ip entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_sport_rate_limit_stats#freed_sportip DataThunderSlbSportRateLimitStats#freed_sportip}
  */
  readonly freedSportip?: number;
  /**
  * Total rate exceed drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_sport_rate_limit_stats#total_drop DataThunderSlbSportRateLimitStats#total_drop}
  */
  readonly totalDrop?: number;
  /**
  * Total log sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_sport_rate_limit_stats#total_log DataThunderSlbSportRateLimitStats#total_log}
  */
  readonly totalLog?: number;
  /**
  * Total rate exceed reset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_sport_rate_limit_stats#total_reset DataThunderSlbSportRateLimitStats#total_reset}
  */
  readonly totalReset?: number;
}

export function dataThunderSlbSportRateLimitStatsStatsToTerraform(struct?: DataThunderSlbSportRateLimitStatsStatsOutputReference | DataThunderSlbSportRateLimitStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alloc_sport: cdktf.numberToTerraform(struct!.allocSport),
    alloc_sportip: cdktf.numberToTerraform(struct!.allocSportip),
    freed_sport: cdktf.numberToTerraform(struct!.freedSport),
    freed_sportip: cdktf.numberToTerraform(struct!.freedSportip),
    total_drop: cdktf.numberToTerraform(struct!.totalDrop),
    total_log: cdktf.numberToTerraform(struct!.totalLog),
    total_reset: cdktf.numberToTerraform(struct!.totalReset),
  }
}


export function dataThunderSlbSportRateLimitStatsStatsToHclTerraform(struct?: DataThunderSlbSportRateLimitStatsStatsOutputReference | DataThunderSlbSportRateLimitStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alloc_sport: {
      value: cdktf.numberToHclTerraform(struct!.allocSport),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    alloc_sportip: {
      value: cdktf.numberToHclTerraform(struct!.allocSportip),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    freed_sport: {
      value: cdktf.numberToHclTerraform(struct!.freedSport),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    freed_sportip: {
      value: cdktf.numberToHclTerraform(struct!.freedSportip),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_drop: {
      value: cdktf.numberToHclTerraform(struct!.totalDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_log: {
      value: cdktf.numberToHclTerraform(struct!.totalLog),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_reset: {
      value: cdktf.numberToHclTerraform(struct!.totalReset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbSportRateLimitStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbSportRateLimitStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocSport !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocSport = this._allocSport;
    }
    if (this._allocSportip !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocSportip = this._allocSportip;
    }
    if (this._freedSport !== undefined) {
      hasAnyValues = true;
      internalValueResult.freedSport = this._freedSport;
    }
    if (this._freedSportip !== undefined) {
      hasAnyValues = true;
      internalValueResult.freedSportip = this._freedSportip;
    }
    if (this._totalDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalDrop = this._totalDrop;
    }
    if (this._totalLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalLog = this._totalLog;
    }
    if (this._totalReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalReset = this._totalReset;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbSportRateLimitStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allocSport = undefined;
      this._allocSportip = undefined;
      this._freedSport = undefined;
      this._freedSportip = undefined;
      this._totalDrop = undefined;
      this._totalLog = undefined;
      this._totalReset = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allocSport = value.allocSport;
      this._allocSportip = value.allocSportip;
      this._freedSport = value.freedSport;
      this._freedSportip = value.freedSportip;
      this._totalDrop = value.totalDrop;
      this._totalLog = value.totalLog;
      this._totalReset = value.totalReset;
    }
  }

  // alloc_sport - computed: false, optional: true, required: false
  private _allocSport?: number; 
  public get allocSport() {
    return this.getNumberAttribute('alloc_sport');
  }
  public set allocSport(value: number) {
    this._allocSport = value;
  }
  public resetAllocSport() {
    this._allocSport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocSportInput() {
    return this._allocSport;
  }

  // alloc_sportip - computed: false, optional: true, required: false
  private _allocSportip?: number; 
  public get allocSportip() {
    return this.getNumberAttribute('alloc_sportip');
  }
  public set allocSportip(value: number) {
    this._allocSportip = value;
  }
  public resetAllocSportip() {
    this._allocSportip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocSportipInput() {
    return this._allocSportip;
  }

  // freed_sport - computed: false, optional: true, required: false
  private _freedSport?: number; 
  public get freedSport() {
    return this.getNumberAttribute('freed_sport');
  }
  public set freedSport(value: number) {
    this._freedSport = value;
  }
  public resetFreedSport() {
    this._freedSport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freedSportInput() {
    return this._freedSport;
  }

  // freed_sportip - computed: false, optional: true, required: false
  private _freedSportip?: number; 
  public get freedSportip() {
    return this.getNumberAttribute('freed_sportip');
  }
  public set freedSportip(value: number) {
    this._freedSportip = value;
  }
  public resetFreedSportip() {
    this._freedSportip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freedSportipInput() {
    return this._freedSportip;
  }

  // total_drop - computed: false, optional: true, required: false
  private _totalDrop?: number; 
  public get totalDrop() {
    return this.getNumberAttribute('total_drop');
  }
  public set totalDrop(value: number) {
    this._totalDrop = value;
  }
  public resetTotalDrop() {
    this._totalDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalDropInput() {
    return this._totalDrop;
  }

  // total_log - computed: false, optional: true, required: false
  private _totalLog?: number; 
  public get totalLog() {
    return this.getNumberAttribute('total_log');
  }
  public set totalLog(value: number) {
    this._totalLog = value;
  }
  public resetTotalLog() {
    this._totalLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalLogInput() {
    return this._totalLog;
  }

  // total_reset - computed: false, optional: true, required: false
  private _totalReset?: number; 
  public get totalReset() {
    return this.getNumberAttribute('total_reset');
  }
  public set totalReset(value: number) {
    this._totalReset = value;
  }
  public resetTotalReset() {
    this._totalReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalResetInput() {
    return this._totalReset;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_sport_rate_limit_stats thunder_slb_sport_rate_limit_stats}
*/
export class DataThunderSlbSportRateLimitStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_sport_rate_limit_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbSportRateLimitStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbSportRateLimitStats to import
  * @param importFromId The id of the existing DataThunderSlbSportRateLimitStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_sport_rate_limit_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbSportRateLimitStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_sport_rate_limit_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_sport_rate_limit_stats thunder_slb_sport_rate_limit_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbSportRateLimitStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbSportRateLimitStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_sport_rate_limit_stats',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
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
  private _stats = new DataThunderSlbSportRateLimitStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderSlbSportRateLimitStatsStats) {
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
      stats: dataThunderSlbSportRateLimitStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderSlbSportRateLimitStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbSportRateLimitStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
