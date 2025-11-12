// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_player_id_global_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbPlayerIdGlobalStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_player_id_global_stats#id DataThunderSlbPlayerIdGlobalStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_player_id_global_stats#stats DataThunderSlbPlayerIdGlobalStats#stats}
  */
  readonly stats?: DataThunderSlbPlayerIdGlobalStatsStats;
}
export interface DataThunderSlbPlayerIdGlobalStatsStats {
  /**
  * Playerid records max time aged out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_player_id_global_stats#total_abs_max_age_outs DataThunderSlbPlayerIdGlobalStats#total_abs_max_age_outs}
  */
  readonly totalAbsMaxAgeOuts?: number;
  /**
  * Invalid playerid packet drops
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_player_id_global_stats#total_invalid_playerid_drops DataThunderSlbPlayerIdGlobalStats#total_invalid_playerid_drops}
  */
  readonly totalInvalidPlayeridDrops?: number;
  /**
  * Invalid playerid packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_player_id_global_stats#total_invalid_playerid_pkts DataThunderSlbPlayerIdGlobalStats#total_invalid_playerid_pkts}
  */
  readonly totalInvalidPlayeridPkts?: number;
  /**
  * Playerid records idle timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_player_id_global_stats#total_pkt_activity_age_outs DataThunderSlbPlayerIdGlobalStats#total_pkt_activity_age_outs}
  */
  readonly totalPktActivityAgeOuts?: number;
  /**
  * Playerid records created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_player_id_global_stats#total_playerids_created DataThunderSlbPlayerIdGlobalStats#total_playerids_created}
  */
  readonly totalPlayeridsCreated?: number;
  /**
  * Playerid records deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_player_id_global_stats#total_playerids_deleted DataThunderSlbPlayerIdGlobalStats#total_playerids_deleted}
  */
  readonly totalPlayeridsDeleted?: number;
  /**
  * Valid playerid packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_player_id_global_stats#total_valid_playerid_pkts DataThunderSlbPlayerIdGlobalStats#total_valid_playerid_pkts}
  */
  readonly totalValidPlayeridPkts?: number;
}

export function dataThunderSlbPlayerIdGlobalStatsStatsToTerraform(struct?: DataThunderSlbPlayerIdGlobalStatsStatsOutputReference | DataThunderSlbPlayerIdGlobalStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    total_abs_max_age_outs: cdktf.numberToTerraform(struct!.totalAbsMaxAgeOuts),
    total_invalid_playerid_drops: cdktf.numberToTerraform(struct!.totalInvalidPlayeridDrops),
    total_invalid_playerid_pkts: cdktf.numberToTerraform(struct!.totalInvalidPlayeridPkts),
    total_pkt_activity_age_outs: cdktf.numberToTerraform(struct!.totalPktActivityAgeOuts),
    total_playerids_created: cdktf.numberToTerraform(struct!.totalPlayeridsCreated),
    total_playerids_deleted: cdktf.numberToTerraform(struct!.totalPlayeridsDeleted),
    total_valid_playerid_pkts: cdktf.numberToTerraform(struct!.totalValidPlayeridPkts),
  }
}


export function dataThunderSlbPlayerIdGlobalStatsStatsToHclTerraform(struct?: DataThunderSlbPlayerIdGlobalStatsStatsOutputReference | DataThunderSlbPlayerIdGlobalStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    total_abs_max_age_outs: {
      value: cdktf.numberToHclTerraform(struct!.totalAbsMaxAgeOuts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_invalid_playerid_drops: {
      value: cdktf.numberToHclTerraform(struct!.totalInvalidPlayeridDrops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_invalid_playerid_pkts: {
      value: cdktf.numberToHclTerraform(struct!.totalInvalidPlayeridPkts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_pkt_activity_age_outs: {
      value: cdktf.numberToHclTerraform(struct!.totalPktActivityAgeOuts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_playerids_created: {
      value: cdktf.numberToHclTerraform(struct!.totalPlayeridsCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_playerids_deleted: {
      value: cdktf.numberToHclTerraform(struct!.totalPlayeridsDeleted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_valid_playerid_pkts: {
      value: cdktf.numberToHclTerraform(struct!.totalValidPlayeridPkts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbPlayerIdGlobalStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbPlayerIdGlobalStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._totalAbsMaxAgeOuts !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalAbsMaxAgeOuts = this._totalAbsMaxAgeOuts;
    }
    if (this._totalInvalidPlayeridDrops !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalInvalidPlayeridDrops = this._totalInvalidPlayeridDrops;
    }
    if (this._totalInvalidPlayeridPkts !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalInvalidPlayeridPkts = this._totalInvalidPlayeridPkts;
    }
    if (this._totalPktActivityAgeOuts !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalPktActivityAgeOuts = this._totalPktActivityAgeOuts;
    }
    if (this._totalPlayeridsCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalPlayeridsCreated = this._totalPlayeridsCreated;
    }
    if (this._totalPlayeridsDeleted !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalPlayeridsDeleted = this._totalPlayeridsDeleted;
    }
    if (this._totalValidPlayeridPkts !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalValidPlayeridPkts = this._totalValidPlayeridPkts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbPlayerIdGlobalStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._totalAbsMaxAgeOuts = undefined;
      this._totalInvalidPlayeridDrops = undefined;
      this._totalInvalidPlayeridPkts = undefined;
      this._totalPktActivityAgeOuts = undefined;
      this._totalPlayeridsCreated = undefined;
      this._totalPlayeridsDeleted = undefined;
      this._totalValidPlayeridPkts = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._totalAbsMaxAgeOuts = value.totalAbsMaxAgeOuts;
      this._totalInvalidPlayeridDrops = value.totalInvalidPlayeridDrops;
      this._totalInvalidPlayeridPkts = value.totalInvalidPlayeridPkts;
      this._totalPktActivityAgeOuts = value.totalPktActivityAgeOuts;
      this._totalPlayeridsCreated = value.totalPlayeridsCreated;
      this._totalPlayeridsDeleted = value.totalPlayeridsDeleted;
      this._totalValidPlayeridPkts = value.totalValidPlayeridPkts;
    }
  }

  // total_abs_max_age_outs - computed: false, optional: true, required: false
  private _totalAbsMaxAgeOuts?: number; 
  public get totalAbsMaxAgeOuts() {
    return this.getNumberAttribute('total_abs_max_age_outs');
  }
  public set totalAbsMaxAgeOuts(value: number) {
    this._totalAbsMaxAgeOuts = value;
  }
  public resetTotalAbsMaxAgeOuts() {
    this._totalAbsMaxAgeOuts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalAbsMaxAgeOutsInput() {
    return this._totalAbsMaxAgeOuts;
  }

  // total_invalid_playerid_drops - computed: false, optional: true, required: false
  private _totalInvalidPlayeridDrops?: number; 
  public get totalInvalidPlayeridDrops() {
    return this.getNumberAttribute('total_invalid_playerid_drops');
  }
  public set totalInvalidPlayeridDrops(value: number) {
    this._totalInvalidPlayeridDrops = value;
  }
  public resetTotalInvalidPlayeridDrops() {
    this._totalInvalidPlayeridDrops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalInvalidPlayeridDropsInput() {
    return this._totalInvalidPlayeridDrops;
  }

  // total_invalid_playerid_pkts - computed: false, optional: true, required: false
  private _totalInvalidPlayeridPkts?: number; 
  public get totalInvalidPlayeridPkts() {
    return this.getNumberAttribute('total_invalid_playerid_pkts');
  }
  public set totalInvalidPlayeridPkts(value: number) {
    this._totalInvalidPlayeridPkts = value;
  }
  public resetTotalInvalidPlayeridPkts() {
    this._totalInvalidPlayeridPkts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalInvalidPlayeridPktsInput() {
    return this._totalInvalidPlayeridPkts;
  }

  // total_pkt_activity_age_outs - computed: false, optional: true, required: false
  private _totalPktActivityAgeOuts?: number; 
  public get totalPktActivityAgeOuts() {
    return this.getNumberAttribute('total_pkt_activity_age_outs');
  }
  public set totalPktActivityAgeOuts(value: number) {
    this._totalPktActivityAgeOuts = value;
  }
  public resetTotalPktActivityAgeOuts() {
    this._totalPktActivityAgeOuts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalPktActivityAgeOutsInput() {
    return this._totalPktActivityAgeOuts;
  }

  // total_playerids_created - computed: false, optional: true, required: false
  private _totalPlayeridsCreated?: number; 
  public get totalPlayeridsCreated() {
    return this.getNumberAttribute('total_playerids_created');
  }
  public set totalPlayeridsCreated(value: number) {
    this._totalPlayeridsCreated = value;
  }
  public resetTotalPlayeridsCreated() {
    this._totalPlayeridsCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalPlayeridsCreatedInput() {
    return this._totalPlayeridsCreated;
  }

  // total_playerids_deleted - computed: false, optional: true, required: false
  private _totalPlayeridsDeleted?: number; 
  public get totalPlayeridsDeleted() {
    return this.getNumberAttribute('total_playerids_deleted');
  }
  public set totalPlayeridsDeleted(value: number) {
    this._totalPlayeridsDeleted = value;
  }
  public resetTotalPlayeridsDeleted() {
    this._totalPlayeridsDeleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalPlayeridsDeletedInput() {
    return this._totalPlayeridsDeleted;
  }

  // total_valid_playerid_pkts - computed: false, optional: true, required: false
  private _totalValidPlayeridPkts?: number; 
  public get totalValidPlayeridPkts() {
    return this.getNumberAttribute('total_valid_playerid_pkts');
  }
  public set totalValidPlayeridPkts(value: number) {
    this._totalValidPlayeridPkts = value;
  }
  public resetTotalValidPlayeridPkts() {
    this._totalValidPlayeridPkts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalValidPlayeridPktsInput() {
    return this._totalValidPlayeridPkts;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_player_id_global_stats thunder_slb_player_id_global_stats}
*/
export class DataThunderSlbPlayerIdGlobalStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_player_id_global_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbPlayerIdGlobalStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbPlayerIdGlobalStats to import
  * @param importFromId The id of the existing DataThunderSlbPlayerIdGlobalStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_player_id_global_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbPlayerIdGlobalStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_player_id_global_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_player_id_global_stats thunder_slb_player_id_global_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbPlayerIdGlobalStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbPlayerIdGlobalStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_player_id_global_stats',
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
  private _stats = new DataThunderSlbPlayerIdGlobalStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderSlbPlayerIdGlobalStatsStats) {
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
      stats: dataThunderSlbPlayerIdGlobalStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderSlbPlayerIdGlobalStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbPlayerIdGlobalStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
