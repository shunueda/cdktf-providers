// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_passthrough_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbPassthroughStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_passthrough_stats#id DataThunderSlbPassthroughStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_passthrough_stats#stats DataThunderSlbPassthroughStats#stats}
  */
  readonly stats?: DataThunderSlbPassthroughStatsStats;
}
export interface DataThunderSlbPassthroughStatsStats {
  /**
  * Current connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_passthrough_stats#curr_conn DataThunderSlbPassthroughStats#curr_conn}
  */
  readonly currConn?: number;
  /**
  * Persistent connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_passthrough_stats#curr_pconn DataThunderSlbPassthroughStats#curr_pconn}
  */
  readonly currPconn?: number;
  /**
  * Total connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_passthrough_stats#total_conn DataThunderSlbPassthroughStats#total_conn}
  */
  readonly totalConn?: number;
  /**
  * Forward bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_passthrough_stats#total_fwd_bytes DataThunderSlbPassthroughStats#total_fwd_bytes}
  */
  readonly totalFwdBytes?: number;
  /**
  * Forward packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_passthrough_stats#total_fwd_packets DataThunderSlbPassthroughStats#total_fwd_packets}
  */
  readonly totalFwdPackets?: number;
  /**
  * Reverse bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_passthrough_stats#total_rev_bytes DataThunderSlbPassthroughStats#total_rev_bytes}
  */
  readonly totalRevBytes?: number;
  /**
  * Reverse packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_passthrough_stats#total_rev_packets DataThunderSlbPassthroughStats#total_rev_packets}
  */
  readonly totalRevPackets?: number;
}

export function dataThunderSlbPassthroughStatsStatsToTerraform(struct?: DataThunderSlbPassthroughStatsStatsOutputReference | DataThunderSlbPassthroughStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    curr_conn: cdktf.numberToTerraform(struct!.currConn),
    curr_pconn: cdktf.numberToTerraform(struct!.currPconn),
    total_conn: cdktf.numberToTerraform(struct!.totalConn),
    total_fwd_bytes: cdktf.numberToTerraform(struct!.totalFwdBytes),
    total_fwd_packets: cdktf.numberToTerraform(struct!.totalFwdPackets),
    total_rev_bytes: cdktf.numberToTerraform(struct!.totalRevBytes),
    total_rev_packets: cdktf.numberToTerraform(struct!.totalRevPackets),
  }
}


export function dataThunderSlbPassthroughStatsStatsToHclTerraform(struct?: DataThunderSlbPassthroughStatsStatsOutputReference | DataThunderSlbPassthroughStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    curr_conn: {
      value: cdktf.numberToHclTerraform(struct!.currConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    curr_pconn: {
      value: cdktf.numberToHclTerraform(struct!.currPconn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_conn: {
      value: cdktf.numberToHclTerraform(struct!.totalConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_fwd_bytes: {
      value: cdktf.numberToHclTerraform(struct!.totalFwdBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_fwd_packets: {
      value: cdktf.numberToHclTerraform(struct!.totalFwdPackets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_rev_bytes: {
      value: cdktf.numberToHclTerraform(struct!.totalRevBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_rev_packets: {
      value: cdktf.numberToHclTerraform(struct!.totalRevPackets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbPassthroughStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbPassthroughStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._currConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.currConn = this._currConn;
    }
    if (this._currPconn !== undefined) {
      hasAnyValues = true;
      internalValueResult.currPconn = this._currPconn;
    }
    if (this._totalConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalConn = this._totalConn;
    }
    if (this._totalFwdBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalFwdBytes = this._totalFwdBytes;
    }
    if (this._totalFwdPackets !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalFwdPackets = this._totalFwdPackets;
    }
    if (this._totalRevBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalRevBytes = this._totalRevBytes;
    }
    if (this._totalRevPackets !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalRevPackets = this._totalRevPackets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbPassthroughStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._currConn = undefined;
      this._currPconn = undefined;
      this._totalConn = undefined;
      this._totalFwdBytes = undefined;
      this._totalFwdPackets = undefined;
      this._totalRevBytes = undefined;
      this._totalRevPackets = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._currConn = value.currConn;
      this._currPconn = value.currPconn;
      this._totalConn = value.totalConn;
      this._totalFwdBytes = value.totalFwdBytes;
      this._totalFwdPackets = value.totalFwdPackets;
      this._totalRevBytes = value.totalRevBytes;
      this._totalRevPackets = value.totalRevPackets;
    }
  }

  // curr_conn - computed: false, optional: true, required: false
  private _currConn?: number; 
  public get currConn() {
    return this.getNumberAttribute('curr_conn');
  }
  public set currConn(value: number) {
    this._currConn = value;
  }
  public resetCurrConn() {
    this._currConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currConnInput() {
    return this._currConn;
  }

  // curr_pconn - computed: false, optional: true, required: false
  private _currPconn?: number; 
  public get currPconn() {
    return this.getNumberAttribute('curr_pconn');
  }
  public set currPconn(value: number) {
    this._currPconn = value;
  }
  public resetCurrPconn() {
    this._currPconn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currPconnInput() {
    return this._currPconn;
  }

  // total_conn - computed: false, optional: true, required: false
  private _totalConn?: number; 
  public get totalConn() {
    return this.getNumberAttribute('total_conn');
  }
  public set totalConn(value: number) {
    this._totalConn = value;
  }
  public resetTotalConn() {
    this._totalConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalConnInput() {
    return this._totalConn;
  }

  // total_fwd_bytes - computed: false, optional: true, required: false
  private _totalFwdBytes?: number; 
  public get totalFwdBytes() {
    return this.getNumberAttribute('total_fwd_bytes');
  }
  public set totalFwdBytes(value: number) {
    this._totalFwdBytes = value;
  }
  public resetTotalFwdBytes() {
    this._totalFwdBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalFwdBytesInput() {
    return this._totalFwdBytes;
  }

  // total_fwd_packets - computed: false, optional: true, required: false
  private _totalFwdPackets?: number; 
  public get totalFwdPackets() {
    return this.getNumberAttribute('total_fwd_packets');
  }
  public set totalFwdPackets(value: number) {
    this._totalFwdPackets = value;
  }
  public resetTotalFwdPackets() {
    this._totalFwdPackets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalFwdPacketsInput() {
    return this._totalFwdPackets;
  }

  // total_rev_bytes - computed: false, optional: true, required: false
  private _totalRevBytes?: number; 
  public get totalRevBytes() {
    return this.getNumberAttribute('total_rev_bytes');
  }
  public set totalRevBytes(value: number) {
    this._totalRevBytes = value;
  }
  public resetTotalRevBytes() {
    this._totalRevBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalRevBytesInput() {
    return this._totalRevBytes;
  }

  // total_rev_packets - computed: false, optional: true, required: false
  private _totalRevPackets?: number; 
  public get totalRevPackets() {
    return this.getNumberAttribute('total_rev_packets');
  }
  public set totalRevPackets(value: number) {
    this._totalRevPackets = value;
  }
  public resetTotalRevPackets() {
    this._totalRevPackets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalRevPacketsInput() {
    return this._totalRevPackets;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_passthrough_stats thunder_slb_passthrough_stats}
*/
export class DataThunderSlbPassthroughStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_passthrough_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbPassthroughStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbPassthroughStats to import
  * @param importFromId The id of the existing DataThunderSlbPassthroughStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_passthrough_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbPassthroughStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_passthrough_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_passthrough_stats thunder_slb_passthrough_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbPassthroughStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbPassthroughStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_passthrough_stats',
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
  private _stats = new DataThunderSlbPassthroughStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderSlbPassthroughStatsStats) {
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
      stats: dataThunderSlbPassthroughStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderSlbPassthroughStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbPassthroughStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
